import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase/client'
import type { ContabilIoDashboardKpis } from '@/lib/supabase/contabil-io-types'

const TAX_TYPE_PATTERNS = [
  'imposto',
  'guias',
  'das',
  'dctf',
  'darf',
  'gare',
  'icms',
  'iss',
  'pis',
  'cofins',
  'ipi',
  'csll',
  'irpj',
  'sped',
  'sicob',
]

function isTaxType(type: string | null | undefined): boolean {
  if (!type) return false
  const lower = type.toLowerCase()
  return TAX_TYPE_PATTERNS.some((p) => lower.includes(p))
}

export function useAbnDashboardKpis() {
  const [kpis, setKpis] = useState<ContabilIoDashboardKpis | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchKpis = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const [companiesRes, indicatorsRes, obligationsRes] = await Promise.all([
        supabase
          .from('vw_abn_companies_safe')
          .select('*', { count: 'exact', head: true })
          .eq('active', true),
        supabase.from('vw_abn_obligations_indicators').select('*').limit(1).maybeSingle(),
        supabase.from('vw_abn_obligations_operational').select('status, type'),
      ])

      if (companiesRes.error) throw companiesRes.error
      if (indicatorsRes.error) throw indicatorsRes.error
      if (obligationsRes.error) throw obligationsRes.error

      const empresasAtivas = companiesRes.count ?? 0

      const indicators = indicatorsRes.data as {
        atrasadas: number
        vencem_hoje: number
        proximos_7_dias: number
        aguardando_cliente: number
        concluidas_no_mes: number
        total_competencia_atual: number
      } | null

      const obrigacoesPendentes = indicators
        ? Math.max(0, indicators.total_competencia_atual - indicators.concluidas_no_mes)
        : 0

      const obligations = (obligationsRes.data as { status: string; type: string }[]) || []
      const impostosApurar = obligations.filter(
        (o) => isTaxType(o.type) && o.status !== 'Concluído',
      ).length

      const totalObligations = obligations.length
      const concludedObligations = obligations.filter((o) => o.status === 'Concluído').length
      const taxaEntrega =
        totalObligations > 0 ? Math.round((concludedObligations / totalObligations) * 100) : 0

      setKpis({
        empresas_ativas: empresasAtivas,
        obrigacoes_pendentes: obrigacoesPendentes,
        impostos_a_apurar: impostosApurar,
        taxa_entrega: taxaEntrega,
      })
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Erro ao carregar indicadores'
      console.error('Erro ao buscar KPIs do dashboard:', err)
      setError(message)
      setKpis(null)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchKpis()
  }, [fetchKpis])

  return { kpis, loading, error, refetch: fetchKpis }
}
