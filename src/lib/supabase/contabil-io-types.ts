export type ContabilIoDashboardKpis = {
  empresas_ativas: number
  obrigacoes_pendentes: number
  impostos_a_apurar: number
  taxa_entrega: number
}

export type ContabilIoObligationIndicators = {
  atrasadas: number
  vencem_hoje: number
  proximos_7_dias: number
  aguardando_cliente: number
  concluidas_no_mes: number
  total_competencia_atual: number
}

export type ContabilIoObligationTemplate = {
  id: string
  name: string
  type: string
  description: string | null
  is_active: boolean
  default_due_day: number | null
  priority: string | null
}

export type ContabilIoCompanyObligationSetting = {
  id: string
  company_id: string
  template_id: string
  is_active: boolean
  custom_due_day: number | null
  custom_name: string | null
}
