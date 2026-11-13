// Quadros inferiores: Vencem hoje, Próximos 7 dias e Atrasadas.
// Dados reais do conjunto filtrado; clicar num quadro foca o calendário
// naquele grupo e clicar num item abre o painel de detalhes.
import { AlertTriangle, CalendarClock, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import type { AbnObligationOperational } from '@/hooks/use-abn-obligations'
import type { BoardKey, ObligationsView } from '@/hooks/use-obligations-view'
import { DEPARTMENT_DOT_CLASSES, getDepartment, DEPARTMENT_LABELS } from './departments'
import { formatDateBR } from './detail-panel-utils'

export interface BoardCardsProps {
  view: ObligationsView
  loading: boolean
  onSelect: (o: AbnObligationOperational) => void
}

const BOARD_META: Record<
  BoardKey,
  { title: string; icon: React.ReactNode; accent: string; empty: string }
> = {
  hoje: {
    title: 'Vencem hoje',
    icon: <CalendarClock className="h-4 w-4" />,
    accent: 'text-[#087F8C] bg-[#087F8C]/10',
    empty: 'Nenhuma obrigação vence hoje.',
  },
  proximos7: {
    title: 'Próximos 7 dias',
    icon: <Clock className="h-4 w-4" />,
    accent: 'text-[#101D2D] bg-[#101D2D]/10',
    empty: 'Nenhuma obrigação vence nos próximos 7 dias.',
  },
  atrasadas: {
    title: 'Atrasadas',
    icon: <AlertTriangle className="h-4 w-4" />,
    accent: 'text-[#B42318] bg-[#B42318]/10',
    empty: 'Nenhuma obrigação atrasada.',
  },
}

function BoardCard({
  boardKey,
  items,
  focused,
  loading,
  onSelect,
  onFocus,
}: {
  boardKey: BoardKey
  items: AbnObligationOperational[]
  focused: boolean
  loading: boolean
  onSelect: (o: AbnObligationOperational) => void
  onFocus: () => void
}) {
  const meta = BOARD_META[boardKey]
  return (
    <div
      className={cn(
        'rounded-lg border bg-white flex flex-col shadow-sm',
        focused ? 'border-[#087F8C]' : 'border-[#E1E7EF]',
      )}
    >
      <button
        type="button"
        onClick={onFocus}
        className="flex items-center justify-between px-4 py-3 text-left hover:bg-[#F4F7FA] transition-colors"
      >
        <span className="flex items-center gap-2 text-sm font-semibold text-[#101D2D]">
          <span className={cn('rounded-md p-1.5', meta.accent)}>{meta.icon}</span>
          {meta.title}
        </span>
        {loading ? (
          <Skeleton className="h-6 w-8" />
        ) : (
          <span className="text-lg font-bold text-[#101D2D]">{items.length}</span>
        )}
      </button>
      <div className="border-t border-[#E1E7EF] divide-y divide-[#E1E7EF] max-h-56 overflow-y-auto">
        {loading ? (
          <div className="p-3 space-y-2">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
          </div>
        ) : items.length === 0 ? (
          <p className="px-4 py-4 text-xs text-muted-foreground">{meta.empty}</p>
        ) : (
          items.slice(0, 20).map((o) => (
            <button
              key={o.id}
              type="button"
              onClick={() => onSelect(o)}
              className="w-full text-left px-4 py-2 hover:bg-[#F4F7FA] transition-colors"
            >
              <p className="text-sm font-medium text-[#172235] truncate">{o.name}</p>
              <p className="text-[11px] text-muted-foreground truncate">
                {o.company_name || 'Sem empresa'} · venc. {formatDateBR(o.due_date)} ·{' '}
                <span
                  className={cn(
                    'inline-block h-1.5 w-1.5 rounded-full align-middle',
                    DEPARTMENT_DOT_CLASSES[getDepartment(o.name)],
                  )}
                />{' '}
                {DEPARTMENT_LABELS[getDepartment(o.name)]}
              </p>
            </button>
          ))
        )}
        {items.length > 20 && (
          <p className="px-4 py-2 text-[11px] text-muted-foreground">
            +{items.length - 20} no quadro — clique no título para filtrar o calendário.
          </p>
        )}
      </div>
    </div>
  )
}

export function BoardCards({ view, loading, onSelect }: BoardCardsProps) {
  const { boards, boardFocus, focusBoard } = view
  return (
    <div className="grid gap-3 grid-cols-1 md:grid-cols-3">
      {(Object.keys(BOARD_META) as BoardKey[]).map((key) => (
        <BoardCard
          key={key}
          boardKey={key}
          items={boards[key]}
          focused={boardFocus === key}
          loading={loading}
          onSelect={onSelect}
          onFocus={() => focusBoard(boardFocus === key ? null : key)}
        />
      ))}
    </div>
  )
}

export function BoardFocusBanner({ view }: { view: ObligationsView }) {
  if (!view.boardFocus) return null
  const label =
    view.boardFocus === 'hoje'
      ? 'Vencem hoje'
      : view.boardFocus === 'proximos7'
        ? 'Próximos 7 dias'
        : 'Atrasadas'
  return (
    <div className="flex items-center justify-between rounded-md border border-[#087F8C]/40 bg-[#087F8C]/10 px-3 py-2">
      <p className="text-xs text-[#101D2D]">
        Exibindo somente: <span className="font-semibold">{label}</span>
      </p>
      <Button
        variant="ghost"
        size="sm"
        className="h-7 text-xs"
        onClick={() => view.focusBoard(null)}
      >
        Remover foco
      </Button>
    </div>
  )
}
