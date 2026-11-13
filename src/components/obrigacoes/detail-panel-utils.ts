// Utilitários e subcomponentes do painel de detalhes da obrigação.
export type ChecklistRow = {
  id: string
  title: string
  completed: boolean
  position: number | null
}

export type HistoryRow = {
  id: string
  action: string
  old_status: string | null
  new_status: string | null
  created_at: string
  changed_by: string | null
}

export const WORKFLOW_STATUS_OPTIONS = [
  'A Fazer',
  'Em Andamento',
  'Aguardando Cliente',
  'Concluído',
  'Cancelado',
]

export function formatDateBR(iso: string | null | undefined): string {
  if (!iso) return '—'
  const d = new Date(iso.length <= 10 ? `${iso}T12:00:00` : iso)
  return Number.isNaN(d.getTime()) ? '—' : d.toLocaleDateString('pt-BR')
}

export function formatCompetencia(comp: string | null | undefined): string {
  if (!comp) return '—'
  const ym = comp.slice(0, 7)
  return ym.split('-').reverse().join('/')
}

// Situações que encerram o fluxo (não aparecem em quadros de vencimento).
export function isClosedStatus(s: string | null | undefined): boolean {
  return s === 'Concluído' || s === 'Cancelado'
}
