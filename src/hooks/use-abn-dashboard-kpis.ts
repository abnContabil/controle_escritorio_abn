import { useState, useEffect, useCallback } from 'react'
import { contabilIoDb } from '@/lib/supabase/contabil-io-client'
import type { ContabilIoDashboardKpis } from '@/lib/supabase/contabil-io-types'

export function useAbnDashboardKpis() {
  const [kpis, setKpis] = useState<ContabilIoDashboardKpis | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchKpis = useCallback(async () => {
    setLoading(true)
    const { data, error } = await contabilIoDb
      .from('vw_abn_dashboard_kpis')
      .select('*')
      .limit(1)
      .single()

    if (error) {
      console.error('Erro ao buscar KPIs do dashboard:', error)
      setKpis(null)
    } else {
      setKpis(data as ContabilIoDashboardKpis)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchKpis()
  }, [fetchKpis])

  return { kpis, loading, refetch: fetchKpis }
}
