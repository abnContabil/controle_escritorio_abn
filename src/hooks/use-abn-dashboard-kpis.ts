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

export type DashboardCompany = {
  id: string
  regime_tributario: string | null
}

export type DashboardObligation = {
  id: string
  name: string
  type: string
  status: string
  due_date: string
  company_name: string | null
}

export function useAbnDashboardKpis() {
  const [kpis, setKpis] = useState<ContabilIoDashboardKpis | null>(null)
  const [companies, setCompanies] = useState<DashboardCompany[]>([])
  const [obligations, setObligations] = useState<DashboardObligation[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchKpis = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const [companiesRes, indicatorsRes, obligationsRes] = await Promise.all([
        supabase.from('vw_abn_companies_safe').select('id, regime_tributario').eq('active', true),
        supabase.from('vw_abn_obligations_indicators').select('*').limit(1).maybeSingle(),
        supabase
          .from('vw_abn_obligations_operational')
          .select('id, name, type, status, due_date, company_name'),
      ])

      if (companiesRes.error) throw companiesRes.error
      if (indicatorsRes.error) throw indicatorsRes.error
      if (obligationsRes.error) throw obligationsRes.error

      const companiesData = (companiesRes.data as DashboardCompany[]) || []
      const empresasAtivas = companiesData.length

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

      const obligationsData = (obligationsRes.data as DashboardObligation[]) || []
      const impostosApurar = obligationsData.filter(
        (o) => isTaxType(o.type) && o.status !== 'Concluído',
      ).length

      const totalObligations = obligationsData.length
      const concludedObligations = obligationsData.filter((o) => o.status === 'Concluído').length
      const taxaEntrega =
        totalObligations > 0 ? Math.round((concludedObligations / totalObligations) * 100) : 0

      setKpis({
        empresas_ativas: empresasAtivas,
        obrigacoes_pendentes: obrigacoesPendentes,
        impostos_a_apurar: impostosApurar,
        taxa_entrega: taxaEntrega,
      })
      setCompanies(companiesData)
      setObligations(obligationsData)
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Erro ao carregar indicadores'
      console.error('Erro ao buscar KPIs do dashboard:', err)
      setError(message)
      setKpis(null)
      setCompanies([])
      setObligations([])
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchKpis()
  }, [fetchKpis])

  return { kpis, companies, obligations, loading, error, refetch: fetchKpis }
}
