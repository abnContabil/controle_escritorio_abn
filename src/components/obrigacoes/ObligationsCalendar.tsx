// Calendário operacional da central: modos Mês, Semana e Lista.
// Usa as obrigações já filtradas pela view (indicadores, kanban e lista
// compartilham o MESMO conjunto filtrado). Clique em um dia (Mês/Semana)
// abre o diálogo com as obrigações daquele dia; clique em uma obrigação
// abre o painel de detalhes.
import { useMemo, useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  CalendarRange,
  List,
  AlertTriangle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import type { AbnObligationOperational } from '@/hooks/use-abn-obligations'
import type { ObligationsView, ViewMode } from '@/hooks/use-obligations-view'
import { startOfToday, parseDue, isDone, isSameDay } from '@/hooks/use-obligations-view'
import { DEPARTMENT_DOT_CLASSES, DEPARTMENT_LABELS, getDepartment } from './departments'
import { ObligationsDayDialog } from './ObligationsDayDialog'

export interface ObligationsCalendarProps {
  view: ObligationsView
  loading: boolean
  error: string | null
  onRetry: () => void
}

const WEEKDAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
const MONTH_NAMES = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
]
const MAX_CHIPS_PER_DAY = 3

function dayKey(d: Date): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

type CalMode = Exclude<ViewMode, 'kanban'>

function ViewModeButton({
  mode,
  current,
  icon,
  label,
  onSelect,
}: {
  mode: CalMode
  current: CalMode
  icon: React.ReactNode
  label: string
  onSelect: (m: CalMode) => void
}) {
  return (
    <Button
      size="sm"
      variant={current === mode ? 'default' : 'outline'}
      className={cn(
        'h-8 text-xs',
        current === mode ? 'bg-[#087F8C] hover:bg-[#087F8C]/90' : 'bg-white',
      )}
      onClick={() => onSelect(mode)}
    >
      {icon}
      <span className="ml-1">{label}</span>
    </Button>
  )
}

function ObligationChip({ o, onClick }: { o: AbnObligationOperational; onClick: () => void }) {
  const dep = getDepartment(o.name)
  return (
    <button
      type="button"
      className={cn(
        'w-full text-left text-[11px] leading-tight rounded px-1 py-0.5 truncate block',
        o.workflow_status === 'Cancelado'
          ? 'bg-slate-100 text-slate-400 line-through'
          : isDone(o)
            ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
            : 'bg-[#087F8C]/10 text-[#0A5C66] hover:bg-[#087F8C]/20',
      )}
      onClick={onClick}
      title={`${o.name} · ${o.company_name || 'Sem empresa'}`}
    >
      {o.name}
    </button>
  )
}

function MonthGrid({
  view,
  onOpenDay,
}: {
  view: ObligationsView
  onOpenDay: (d: Date, items: AbnObligationOperational[]) => void
}) {
  const byDay = useMemo(() => {
    const map = new Map<string, AbnObligationOperational[]>()
    view.calendarItems.forEach((o) => {
      const due = parseDue(o.due_date)
      if (!due) return
      const k = dayKey(due)
      const arr = map.get(k) || []
      arr.push(o)
      map.set(k, arr)
    })
    return map
  }, [view.calendarItems])

  const year = view.anchorDate.getFullYear()
  const month = view.anchorDate.getMonth()
  const first = new Date(year, month, 1)
  const firstMondayOffset = (first.getDay() + 6) % 7 // segunda = 0
  const gridStart = new Date(year, month, 1 - firstMondayOffset)
  const today = startOfToday()

  const cells: Date[] = []
  for (let i = 0; i < 42; i++) {
    const d = new Date(gridStart)
    d.setDate(gridStart.getDate() + i)
    cells.push(d)
  }

  return (
    <div>
      <div className="grid grid-cols-7 border-b border-[#E1E7EF]">
        {WEEKDAYS.map((w) => (
          <div key={w} className="text-center text-[11px] font-semibold text-muted-foreground py-2">
            {w}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {cells.map((d, i) => {
          const inMonth = d.getMonth() === month
          const items = byDay.get(dayKey(d)) || []
          const isToday = isSameDay(d, today)
          const hasOverdue = items.some(
            (o) => !isDone(o) && o.workflow_status !== 'Cancelado' && parseDue(o.due_date)! < today,
          )
          return (
            <div
              key={i}
              className={cn(
                'min-h-[92px] border-b border-r border-[#E1E7EF] p-1.5 flex flex-col gap-1',
                !inMonth && 'bg-slate-50/60',
                i % 7 === 6 && 'border-r-0',
              )}
            >
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    'text-[11px] font-medium',
                    inMonth ? 'text-[#172235]' : 'text-slate-400',
                    isToday &&
                      'bg-[#087F8C] text-white rounded-full h-5 min-w-5 px-1 flex items-center justify-center',
                  )}
                >
                  {d.getDate()}
                </span>
                {hasOverdue && <AlertTriangle className="h-3 w-3 text-red-500 shrink-0" />}
              </div>
              {items.slice(0, MAX_CHIPS_PER_DAY).map((o) => (
                <ObligationChip key={o.id} o={o} onClick={() => view.openObligation(o)} />
              ))}
              {items.length > MAX_CHIPS_PER_DAY && (
                <button
                  type="button"
                  className="text-[10px] text-[#087F8C] font-medium text-left hover:underline"
                  onClick={() => onOpenDay(d, items)}
                >
                  +{items.length - MAX_CHIPS_PER_DAY} mais
                </button>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function WeekStrip({
  view,
  onOpenDay,
}: {
  view: ObligationsView
  onOpenDay: (d: Date, items: AbnObligationOperational[]) => void
}) {
  const byDay = useMemo(() => {
    const map = new Map<string, AbnObligationOperational[]>()
    view.calendarItems.forEach((o) => {
      const due = parseDue(o.due_date)
      if (!due) return
      const k = dayKey(due)
      const arr = map.get(k) || []
      arr.push(o)
      map.set(k, arr)
    })
    return map
  }, [view.calendarItems])

  const anchor = view.anchorDate
  const mondayOffset = (anchor.getDay() + 6) % 7
  const monday = new Date(anchor)
  monday.setDate(anchor.getDate() - mondayOffset)
  const today = startOfToday()

  const days: Date[] = []
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday)
    d.setDate(monday.getDate() + i)
    days.push(d)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-7 gap-2 p-3">
      {days.map((d) => {
        const items = byDay.get(dayKey(d)) || []
        const isToday = isSameDay(d, today)
        return (
          <div
            key={dayKey(d)}
            className={cn(
              'rounded-lg border p-2 flex flex-col gap-1 min-h-[120px]',
              isToday ? 'border-[#087F8C] bg-[#087F8C]/5' : 'border-[#E1E7EF]',
            )}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-[#101D2D]">
                {WEEKDAYS[(d.getDay() + 6) % 7]} {d.getDate()}
              </span>
              {items.length > 0 && (
                <span className="text-[10px] text-muted-foreground">{items.length}</span>
              )}
            </div>
            {items.map((o) => (
              <ObligationChip key={o.id} o={o} onClick={() => view.openObligation(o)} />
            ))}
            {items.length === 0 && <span className="text-[10px] text-slate-400 mt-auto">—</span>}
          </div>
        )
      })}
    </div>
  )
}

function ListView({ view }: { view: ObligationsView }) {
  const items = useMemo(
    () =>
      [...view.calendarItems]
        .filter((o) => o.due_date)
        .sort((a, b) => a.due_date.localeCompare(b.due_date)),
    [view.calendarItems],
  )

  if (items.length === 0) {
    return (
      <p className="text-sm text-muted-foreground text-center py-8">
        Nenhuma obrigação no período/filtros atuais.
      </p>
    )
  }

  return (
    <div className="divide-y divide-[#E1E7EF]">
      {items.map((o) => {
        const dep = getDepartment(o.name)
        const done = isDone(o)
        return (
          <button
            key={o.id}
            type="button"
            className="w-full text-left px-3 py-2.5 hover:bg-[#F4F7FA] transition-colors flex items-center gap-3"
            onClick={() => view.openObligation(o)}
          >
            <span
              className={cn('h-2.5 w-2.5 rounded-full shrink-0', DEPARTMENT_DOT_CLASSES[dep])}
            />
            <div className="min-w-0 flex-1">
              <p
                className={cn(
                  'text-sm font-medium truncate',
                  done && 'line-through text-muted-foreground',
                )}
              >
                {o.name}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {o.company_name || 'Sem empresa'} · {DEPARTMENT_LABELS[dep]}
              </p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-xs font-medium text-[#101D2D]">
                {o.due_date.split('T')[0].split('-').reverse().join('/')}
              </p>
              <p className="text-[11px] text-muted-foreground">{o.workflow_status || '—'}</p>
            </div>
          </button>
        )
      })}
    </div>
  )
}

export function ObligationsCalendar({ view, loading, error, onRetry }: ObligationsCalendarProps) {
  const [dayDialog, setDayDialog] = useState<{
    date: Date
    items: AbnObligationOperational[]
  } | null>(null)
  // Modo interno do calendário (Mês/Semana/Lista), independente do
  // alternador de visualização principal da página.
  const [calMode, setCalMode] = useState<CalMode>('mes')

  const move = (delta: number) => {
    const d = new Date(view.anchorDate)
    if (calMode === 'mes') {
      d.setMonth(d.getMonth() + delta)
    } else {
      d.setDate(d.getDate() + delta * 7)
    }
    view.setAnchorDate(d)
  }

  const gotoToday = () => {
    view.setAnchorDate(new Date())
    view.setViewMode('mes')
  }

  return (
    <div className="rounded-xl border border-[#E1E7EF] bg-white shadow-sm overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 p-3 border-b border-[#E1E7EF]">
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => move(-1)}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => move(1)}>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <span className="text-sm font-semibold text-[#101D2D] ml-1">
            {MONTH_NAMES[view.anchorDate.getMonth()]} {view.anchorDate.getFullYear()}
          </span>
          <Button variant="outline" size="sm" className="h-8 text-xs ml-2" onClick={gotoToday}>
            Hoje
          </Button>
        </div>
        <div className="flex items-center gap-1">
          <ViewModeButton
            mode="mes"
            current={calMode}
            icon={<CalendarDays className="h-3.5 w-3.5" />}
            label="Mês"
            onSelect={setCalMode}
          />
          <ViewModeButton
            mode="semana"
            current={calMode}
            icon={<CalendarRange className="h-3.5 w-3.5" />}
            label="Semana"
            onSelect={setCalMode}
          />
          <ViewModeButton
            mode="lista"
            current={calMode}
            icon={<List className="h-3.5 w-3.5" />}
            label="Lista"
            onSelect={setCalMode}
          />
        </div>
      </div>

      {loading ? (
        <div className="p-3 grid grid-cols-7 gap-1">
          {Array.from({ length: 28 }).map((_, i) => (
            <Skeleton key={i} className="h-[88px] w-full" />
          ))}
        </div>
      ) : error ? (
        <div className="flex flex-col items-center gap-2 py-10">
          <AlertTriangle className="h-8 w-8 text-destructive" />
          <p className="text-sm text-muted-foreground">{error}</p>
          <Button size="sm" variant="outline" onClick={onRetry}>
            Tentar novamente
          </Button>
        </div>
      ) : calMode === 'mes' ? (
        <MonthGrid view={view} onOpenDay={(date, items) => setDayDialog({ date, items })} />
      ) : calMode === 'semana' ? (
        <WeekStrip view={view} onOpenDay={(date, items) => setDayDialog({ date, items })} />
      ) : (
        <ListView view={view} />
      )}

      {dayDialog && (
        <ObligationsDayDialog
          date={dayDialog.date}
          items={dayDialog.items}
          onClose={() => setDayDialog(null)}
          onSelect={(o) => {
            setDayDialog(null)
            view.openObligation(o)
          }}
        />
      )}
    </div>
  )
}
