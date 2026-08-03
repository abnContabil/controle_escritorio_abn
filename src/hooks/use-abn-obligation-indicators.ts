import { useState, useEffect, useCallback } from 'react'
import { contabilIoDb } from '@/lib/supabase/contabil-io-client'
import type { ContabilIoObligationIndicators } from '@/lib/supabase/contabil-io-types'

export function useAbnObligationIndicators() {
  const [indicators, setIndicators] = useState<ContabilIoObligationIndicators | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchIndicators = useCallback(async () => {
    setLoading(true)
    const { data, error } = await contabilIoDb
      .from('vw_abn_obligations_indicators')
      .select('*')
      .limit(1)
      .single()

    if (error) {
      console.error('Erro ao buscar indicadores de obrigações:', error)
      setIndicators(null)
    } else {
      setIndicators(data as ContabilIoObligationIndicators)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchIndicators()
  }, [fetchIndicators])

  return { indicators, loading, refetch: fetchIndicators }
}
