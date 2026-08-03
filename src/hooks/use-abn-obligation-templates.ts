import { useState, useEffect, useCallback } from 'react'
import { contabilIoDb } from '@/lib/supabase/contabil-io-client'
import type { ContabilIoObligationTemplate } from '@/lib/supabase/contabil-io-types'

export function useAbnObligationTemplates() {
  const [templates, setTemplates] = useState<ContabilIoObligationTemplate[]>([])
  const [loading, setLoading] = useState(true)

  const fetchTemplates = useCallback(async () => {
    setLoading(true)
    const { data, error } = await contabilIoDb
      .from('abn_obligation_templates')
      .select('*')
      .eq('is_active', true)
      .order('name', { ascending: true })

    if (error) {
      console.error('Erro ao buscar templates de obrigações:', error)
      setTemplates([])
    } else {
      setTemplates(data as ContabilIoObligationTemplate[])
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchTemplates()
  }, [fetchTemplates])

  const generateObligations = useCallback(async (companyId: string, competencia: string) => {
    const { error } = await contabilIoDb.rpc('abn_generate_company_obligations', {
      p_company_id: companyId,
      p_competencia: competencia,
    })
    if (error) {
      console.error('Erro ao gerar obrigações:', error)
      return false
    }
    return true
  }, [])

  const applyDefaultSettings = useCallback(async (companyId: string) => {
    const { error } = await contabilIoDb.rpc('abn_apply_default_obligation_settings', {
      p_company_id: companyId,
    })
    if (error) {
      console.error('Erro ao aplicar configurações padrão:', error)
      return false
    }
    return true
  }, [])

  return {
    templates,
    loading,
    generateObligations,
    applyDefaultSettings,
    refetch: fetchTemplates,
  }
}
