import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase/client'
import type { ContabilIoDashboardKpis } from '@/lib/supabase/contabil-io-types'

export function useAbnDashboardKpis() {
  const [kpis, setKpis] = useState<ContabilIoDashboardKpis | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchKpis = useCallback(async () => {
    setLoading(true)
    setError(null)

    const { data, error: queryError } = await supabase
      .from('vw_abn_dashboard_kpis')
      .select('*')
      .limit(1)
      .maybeSingle()

    if (queryError) {
      console.error('Erro ao buscar KPIs do dashboard:', queryError)
      setError(queryError.message)
      setKpis(null)
    } else if (!data) {
      setKpis(null)
    } else {
      setKpis(data as ContabilIoDashboardKpis)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchKpis()
  }, [fetchKpis])

  return { kpis, loading, error, refetch: fetchKpis }
}
