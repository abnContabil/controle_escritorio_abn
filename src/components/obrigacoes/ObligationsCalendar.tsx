// Calendário operacional das obrigações: modos Mês, Semana e Lista.
// Datas reais de vencimento da view operacional; marcação discreta do
// departamento por um ponto colorido; agregador "+N" quando o dia tem muitas
// obrigações, para não poluir visualmente o calendário.
import { useMemo, useState } from 'react'
import { AlertTriangle, CalendarDays, ChevronLeft, ChevronRight, List } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import type { AbnObligationOperational } from '@/hooks/use-abn-obligations'
import type { ViewMode } from '@/hooks/use-obligations-view'
import { DEPARTMENT_DOT_CLASSES, DEPARTMENT_LABELS, getDepartment } from './departments'
import { ObligationsDayDialog } from './ObligationsDayDialog'

export const MAX_CHIPS_PER_DAY = 3

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

export function parseDue(due: string): Date | null {
  if (!due) return null
  const d = new Date(`${due}T12:00:00`)
  return Number.isNaN(d.getTime()) ? null : d
}

function sameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

function dayKey(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export interface ObligationsCalendarProps {
  obligations: AbnObligationOperational[]
  loading: boolean
  error: string | null
  onRetry: () => void
  viewMode: ViewMode
  onViewModeChange: (m: ViewMode) => void
  anchorDate: Date
  onAnchorChange: (d: Date) => void
  selectedId: string | null
  onSelect: (o: AbnObligationOperational) => void
}

function DueChip({
  o,
  selected,
  onSelect,
}: {
  o: AbnObligationOperational
  selected: boolean
  onSelect: () => void
}) {
  const dep = getDepartment(o.name)
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation()
        onSelect()
      }}
      title={`${o.name} — ${o.company_name || 'Sem empresa'} (${DEPARTMENT_LABELS[dep]})`}
      className={cn(
        'w-full text-left text-[11px] leading-tight px-1.5 py-0.5 rounded border truncate flex items-center gap-1 transition-colors',
        'bg-[#F4F7FA] border-[#E1E7EF] text-[#172235] hover:bg-[#087F8C]/10 hover:border-[#087F8C]/40',
        selected && 'bg-[#087F8C]/15 border-[#087F8C] font-medium',
      )}
    >
      <span className={cn('h-1.5 w-1.5 rounded-full shrink-0', DEPARTMENT_DOT_CLASSES[dep])} />
      <span className="truncate">{o.name}</span>
    </button>
  )
}

function DayCell({
  day,
  items,
  isCurrentMonth,
  isToday,
  selectedId,
  onSelect,
  onDayClick,
}: {
  day: Date
  items: AbnObligationOperational[]
  isCurrentMonth: boolean
  isToday: boolean
  selectedId: string | null
  onSelect: (o: AbnObligationOperational) => void
  onDayClick: (day: Date, items: AbnObligationOperational[]) => void
}) {
  const visible = items.slice(0, MAX_CHIPS_PER_DAY)
  const extra = items.length - visible.length
  return (
    <button
      type="button"
      onClick={() => onDayClick(day, items)}
      className={cn(
        'min-h-[92px] p-1.5 text-left border border-[#E1E7EF] flex flex-col gap-1 transition-colors',
        'hover:bg-[#087F8C]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C]',
        isCurrentMonth ? 'bg-white' : 'bg-[#F4F7FA]/60',
        isToday && 'ring-1 ring-inset ring-[#087F8C]',
      )}
    >
      <div className="flex items-center justify-between">
        <span
          className={cn(
            'text-xs font-medium rounded-full h-5 min-w-5 px-1 inline-flex items-center justify-center',
            isToday ? 'bg-[#101D2D] text-white' : 'text-[#172235]',
          )}
        >
          {day.getDate()}
        </span>
        {items.length > 0 && (
          <span className="text-[10px] text-muted-foreground">{items.length}</span>
        )}
      </div>
      {visible.map((o) => (
        <DueChip key={o.id} o={o} selected={o.id === selectedId} onSelect={() => onSelect(o)} />
      ))}
      {extra > 0 && <span className="text-[10px] font-medium text-[#087F8C]">+{extra} mais</span>}
    </button>
  )
}

export function ObligationsCalendar({
  obligations,
  loading,
  error,
  onRetry,
  viewMode,
  onViewModeChange,
  anchorDate,
  onAnchorChange,
  selectedId,
  onSelect,
}: ObligationsCalendarProps) {
  const [dayDialog, setDayDialog] = useState<{
    date: Date
    items: AbnObligationOperational[]
  } | null>(null)

  const byDay = useMemo(() => {
    const map = new Map<string, AbnObligationOperational[]>()
    obligations.forEach((o) => {
      const d = parseDue(o.due_date)
      if (!d) return
      const key = dayKey(d)
      const list = map.get(key)
      if (list) list.push(o)
      else map.set(key, [o])
    })
    return map
  }, [obligations])

  const navigate = (dir: -1 | 1) => {
    if (viewMode === 'semana') {
      const next = new Date(anchorDate)
      next.setDate(next.getDate() + dir * 7)
      onAnchorChange(next)
    } else {
      onAnchorChange(new Date(anchorDate.getFullYear(), anchorDate.getMonth() + dir, 1))
    }
  }

  const periodLabel = useMemo(() => {
    if (viewMode === 'semana') {
      const start = new Date(anchorDate)
      start.setDate(start.getDate() - start.getDay())
      const end = new Date(start)
      end.setDate(end.getDate() + 6)
      const fmt = (d: Date) =>
        `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}`
      return `${fmt(start)} — ${fmt(end)}/${end.getFullYear()}`
    }
    return `${MONTH_NAMES[anchorDate.getMonth()]} de ${anchorDate.getFullYear()}`
  }, [anchorDate, viewMode])

  const listItems = useMemo(
    () =>
      obligations
        .filter((o) => parseDue(o.due_date) !== null)
        .sort((a, b) => a.due_date.localeCompare(b.due_date)),
    [obligations],
  )

  if (loading) {
    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Skeleton className="h-7 w-48" />
          <Skeleton className="h-9 w-40" />
        </div>
        <div className="grid grid-cols-7 gap-1.5">
          {Array.from({ length: 35 }).map((_, i) => (
            <Skeleton key={i} className="h-[92px] rounded-md" />
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <AlertTriangle className="h-10 w-10 text-destructive mb-3" />
        <p className="text-muted-foreground mb-4">{error}</p>
        <Button onClick={onRetry}>Tentar novamente</Button>
      </div>
    )
  }

  if (viewMode === 'lista') {
    return (
      <div className="space-y-2">
        <ViewModeTabs viewMode={viewMode} onViewModeChange={onViewModeChange} periodLabel="" />
        {listItems.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground border rounded-lg bg-white">
            Nenhuma obrigação com data de vencimento no período filtrado.
          </div>
        ) : (
          listItems.map((o) => {
            const dep = getDepartment(o.name)
            const due = parseDue(o.due_date)!
            return (
              <button
                key={o.id}
                type="button"
                onClick={() => onSelect(o)}
                className={cn(
                  'w-full text-left flex items-center gap-3 p-3 rounded-lg border bg-white transition-colors hover:border-[#087F8C]/50',
                  o.id === selectedId ? 'border-[#087F8C]' : 'border-[#E1E7EF]',
                )}
              >
                <div className="shrink-0 w-14 text-center">
                  <div className="text-lg font-bold text-[#101D2D] leading-none">
                    {due.getDate()}
                  </div>
                  <div className="text-[10px] uppercase text-muted-foreground">
                    {MONTH_NAMES[due.getMonth()].slice(0, 3)}
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium truncate">{o.name}</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {o.company_name || 'Sem empresa'} ·{' '}
                    {o.competencia?.slice(0, 7)?.split('-').reverse().join('/')}
                  </p>
                </div>
                <Badge variant="outline" className="text-xs shrink-0">
                  <span
                    className={cn(
                      'h-1.5 w-1.5 rounded-full mr-1 inline-block',
                      DEPARTMENT_DOT_CLASSES[dep],
                    )}
                  />
                  {DEPARTMENT_LABELS[dep]}
                </Badge>
                <span className="text-xs text-muted-foreground shrink-0 hidden sm:inline">
                  {o.workflow_status}
                </span>
              </button>
            )
          })
        )}
      </div>
    )
  }

  const cells: { day: Date; items: AbnObligationOperational[]; isCurrentMonth: boolean }[] = []
  if (viewMode === 'mes') {
    const first = new Date(anchorDate.getFullYear(), anchorDate.getMonth(), 1)
    const start = new Date(first)
    start.setDate(start.getDate() - start.getDay())
    for (let i = 0; i < 42; i++) {
      const day = new Date(start)
      day.setDate(start.getDate() + i)
      cells.push({
        day,
        items: byDay.get(dayKey(day)) || [],
        isCurrentMonth: day.getMonth() === anchorDate.getMonth(),
      })
    }
  } else {
    const start = new Date(anchorDate)
    start.setDate(start.getDate() - start.getDay())
    for (let i = 0; i < 7; i++) {
      const day = new Date(start)
      day.setDate(start.getDate() + i)
      cells.push({ day, items: byDay.get(dayKey(day)) || [], isCurrentMonth: true })
    }
  }

  return (
    <div className="space-y-2">
      <ViewModeTabs
        viewMode={viewMode}
        onViewModeChange={onViewModeChange}
        periodLabel={periodLabel}
        onNavigate={navigate}
        onToday={() => onAnchorChange(new Date())}
      />
      <div className="rounded-lg border border-[#E1E7EF] bg-white overflow-hidden">
        <div className="grid grid-cols-7 bg-[#F4F7FA] border-b border-[#E1E7EF]">
          {WEEKDAYS.map((d) => (
            <div
              key={d}
              className="py-1.5 text-center text-[11px] font-semibold text-[#101D2D] uppercase tracking-wide"
            >
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {cells.map((c, i) => (
            <DayCell
              key={i}
              day={c.day}
              items={c.items}
              isCurrentMonth={c.isCurrentMonth}
              isToday={sameDay(c.day, new Date())}
              selectedId={selectedId}
              onSelect={onSelect}
              onDayClick={(day, items) => setDayDialog({ date: day, items })}
            />
          ))}
        </div>
      </div>

      {dayDialog && (
        <ObligationsDayDialog
          date={dayDialog.date}
          items={dayDialog.items}
          onClose={() => setDayDialog(null)}
          onSelect={(o) => {
            setDayDialog(null)
            onSelect(o)
          }}
        />
      )}
    </div>
  )
}

function ViewModeTabs({
  viewMode,
  onViewModeChange,
  periodLabel,
  onNavigate,
  onToday,
}: {
  viewMode: ViewMode
  onViewModeChange: (m: ViewMode) => void
  periodLabel: string
  onNavigate?: (dir: -1 | 1) => void
  onToday?: () => void
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      {onNavigate ? (
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => onNavigate(-1)}
            aria-label="Período anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm font-semibold text-[#101D2D] px-2 min-w-[160px] text-center">
            {periodLabel}
          </span>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => onNavigate(1)}
            aria-label="Próximo período"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          {onToday && (
            <Button variant="ghost" size="sm" className="h-8 text-xs" onClick={onToday}>
              Hoje
            </Button>
          )}
        </div>
      ) : (
        <span />
      )}
      <Tabs value={viewMode} onValueChange={(v) => onViewModeChange(v as ViewMode)}>
        <TabsList>
          <TabsTrigger value="mes" className="gap-1 text-xs">
            <CalendarDays className="h-3.5 w-3.5" /> Mês
          </TabsTrigger>
          <TabsTrigger value="semana" className="gap-1 text-xs">
            <CalendarDays className="h-3.5 w-3.5" /> Semana
          </TabsTrigger>
          <TabsTrigger value="lista" className="gap-1 text-xs">
            <List className="h-3.5 w-3.5" /> Lista
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}
