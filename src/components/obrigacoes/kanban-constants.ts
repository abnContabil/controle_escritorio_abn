import type { AbnObligationOperational } from '@/hooks/use-abn-obligations'

export const KANBAN_COLUMNS = [
  'A Fazer',
  'Em Processamento',
  'Em Conferência',
  'Aguardando Cliente',
  'Pendente Pagamento',
  'Concluído',
] as const

export const ALL_STATUSES = [...KANBAN_COLUMNS, 'Cancelado'] as const

export const COLUMN_COLORS: Record<string, string> = {
  'A Fazer': 'bg-slate-200 text-slate-700',
  'Em Processamento': 'bg-blue-100 text-blue-700',
  'Em Conferência': 'bg-violet-100 text-violet-700',
  'Aguardando Cliente': 'bg-cyan-100 text-cyan-700',
  'Pendente Pagamento': 'bg-amber-100 text-amber-700',
  Concluído: 'bg-emerald-100 text-emerald-700',
  Cancelado: 'bg-red-100 text-red-700',
}

export const GUIDE_STATUS_LABELS: Record<string, string> = {
  nao_se_aplica: 'Sem guia',
  nao_gerada: 'Guia não gerada',
  gerada: 'Guia gerada',
  pendente: 'Guia pendente',
  aguardando_pagamento: 'Aguardando pagamento',
  paga: 'Guia paga',
  vencida: 'Guia vencida',
}

export const PRIORITY_LABELS: Record<string, string> = {
  alta: 'Alta',
  normal: 'Normal',
  baixa: 'Baixa',
}

export const PRIORITY_BADGES: Record<string, string> = {
  alta: 'bg-red-100 text-red-700 border-red-200',
  normal: 'bg-slate-100 text-slate-700 border-slate-200',
  baixa: 'bg-blue-100 text-blue-700 border-blue-200',
}

export const URGENCY_STYLES: Record<string, { border: string; badge: string }> = {
  atrasada: { border: 'border-l-4 border-l-red-500', badge: 'bg-red-100 text-red-700' },
  vence_hoje: { border: 'border-l-4 border-l-red-500', badge: 'bg-red-100 text-red-700' },
  vence_em_3_dias: {
    border: 'border-l-4 border-l-yellow-500',
    badge: 'bg-yellow-100 text-yellow-700',
  },
  vence_em_7_dias: { border: 'border-l-4 border-l-blue-500', badge: 'bg-blue-100 text-blue-700' },
  concluida: {
    border: 'border-l-4 border-l-emerald-500',
    badge: 'bg-emerald-100 text-emerald-700',
  },
  no_prazo: { border: 'border-l-4 border-l-slate-300', badge: 'bg-slate-100 text-slate-700' },
}

export function getUrgencyKey(o: AbnObligationOperational): string {
  if (o.workflow_status === 'Concluído') return 'concluida'
  if (o.urgency) return o.urgency.toLowerCase()
  if (o.is_overdue) return 'atrasada'
  return 'no_prazo'
}

export function getUrgencyText(o: AbnObligationOperational): string {
  if (o.workflow_status === 'Concluído') return 'Concluída'
  if (o.is_overdue) {
    const days = Math.abs(o.days_to_due || 0)
    return `Atrasada há ${days} ${days === 1 ? 'dia' : 'dias'}`
  }
  const d = o.days_to_due
  if (d === 0) return 'Vence hoje'
  if (d === 1) return 'Vence amanhã'
  if (d !== null && d > 1) return `Vence em ${d} dias`
  return '—'
}

export function formatDateBR(dateStr: string | null): string {
  if (!dateStr) return '—'
  const parts = String(dateStr).split('T')[0].split('-')
  if (parts.length < 3) return '—'
  return `${parts[2]}/${parts[1]}/${parts[0]}`
}

export function formatCompetenciaBR(dateStr: string | null): string {
  if (!dateStr) return '—'
  const parts = String(dateStr).split('T')[0].split('-')
  if (parts.length < 2) return '—'
  return `${parts[1]}/${parts[0]}`
}
