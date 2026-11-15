// Utilitários e subcomponentes de apresentação do painel de detalhes.
// Fonte única para formatadores usados em toda a central (calendário,
// quadros inferiores, kanban e painel).
import { cn } from '@/lib/utils'
import { DEPARTMENT_DOT_CLASSES, DEPARTMENT_LABELS, getDepartment } from './departments'
import type { AbnObligationOperational } from '@/hooks/use-abn-obligations'

export function DetailRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-0.5 py-1.5">
      <span className="text-[11px] uppercase tracking-wide text-muted-foreground font-medium">
        {label}
      </span>
      <span className="text-sm text-[#172235]">{children}</span>
    </div>
  )
}

export function formatDateBR(iso: string | null | undefined): string {
  if (!iso) return '—'
  const d = new Date(iso.length <= 10 ? `${iso}T12:00:00` : iso)
  return Number.isNaN(d.getTime()) ? '—' : d.toLocaleDateString('pt-BR')
}

export function formatCompetencia(comp: string | null | undefined): string {
  if (!comp) return '—'
  return `${comp.slice(0, 7).split('-').reverse().join('/')}`
}

export function getObligationDepartment(o: AbnObligationOperational) {
  const dep = getDepartment(o.name)
  return {
    dep,
    label: DEPARTMENT_LABELS[dep],
    dot: DEPARTMENT_DOT_CLASSES[dep],
    dotClass: cn('h-2.5 w-2.5 rounded-full', DEPARTMENT_DOT_CLASSES[dep]),
  }
}
