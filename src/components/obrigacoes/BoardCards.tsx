// Quadros inferiores da central: Vencem hoje, Próximos 7 dias e Atrasadas.
// Cada quadro lista obrigações reais (vw_abn_obligations_operational) e, ao
// clicar, restringe a listagem/calendário ao grupo do quadro (boardFocus) e
// abre o painel de detalhes da obrigação selecionada.
import { AlertTriangle, CalendarClock, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import type { AbnObligationOperational } from '@/hooks/use-abn-obligations'
import type { ObligationsView, BoardKey } from '@/hooks/use-obligations-view'
import { DEPARTMENT_DOT_CLASSES, DEPARTMENT_LABELS, getDepartment } from './departments'

export interface BoardCardsProps {
  view: ObligationsView
  loading: boolean
  error: string | null
  onRetry: () => void
}

const BOARD_TITLES: Record<BoardKey, string> = {
  hoje: 'Vencem hoje',
  proximos7: 'Próximos 7 dias',
  atrasadas: 'Atrasadas',
}

const BOARD_ICONS: Record<BoardKey, React.ReactNode> = {
  hoje: <Clock className="h-4 w-4 text-white" />,
  proximos7: <CalendarClock className="h-4 w-4 text-white" />,
  atrasadas: <AlertTriangle className="h-4 w-4 text-white" />,
}

const BOARD_ACCENTS: Record<BoardKey, string> = {
  hoje: 'bg-[#087F8C]',
  proximos7: 'bg-[#101D2D]',
  atrasadas: 'bg-[#B42318]',
}

function BoardCard({
  boardKey,
  items,
  view,
  loading,
}: {
  boardKey: BoardKey
  items: AbnObligationOperational[]
  view: ObligationsView
  loading: boolean
}) {
  const isFocused = view.boardFocus === boardKey
  return (
    <div
      className={cn(
        'rounded-xl border bg-white shadow-sm overflow-hidden flex flex-col',
        isFocused ? 'border-[#087F8C] ring-1 ring-[#087F8C]/40' : 'border-[#E1E7EF]',
      )}
    >
      <div className="flex items-center justify-between gap-2 p-3 border-b border-[#E1E7EF]/70">
        <div className="flex items-center gap-2 min-w-0">
          <div className={cn('rounded-md p-1.5 shrink-0', BOARD_ACCENTS[boardKey])}>
            {BOARD_ICONS[boardKey]}
          </div>
          <span className="text-sm font-semibold text-[#101D2D] truncate">
            {BOARD_TITLES[boardKey]}
          </span>
        </div>
        {loading ? (
          <Skeleton className="h-5 w-8" />
        ) : (
          <span
            className={cn(
              'text-sm font-bold rounded-full px-2 py-0.5',
              boardKey === 'atrasadas' ? 'bg-red-100 text-red-700' : 'bg-[#F4F7FA] text-[#101D2D]',
            )}
          >
            {items.length}
          </span>
        )}
      </div>
      <div className="p-2 space-y-1 overflow-y-auto max-h-52 flex-1">
        {loading ? (
          <div className="space-y-2 p-1">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        ) : items.length === 0 ? (
          <p className="text-xs text-muted-foreground text-center py-4">
            Nenhuma obrigação neste quadro.
          </p>
        ) : (
          items.map((o) => {
            const dep = getDepartment(o.name)
            return (
              <button
                key={o.id}
                type="button"
                className="w-full text-left rounded-lg border border-transparent hover:border-[#087F8C]/40 hover:bg-[#F4F7FA] px-2.5 py-2 transition-colors"
                onClick={() => view.openObligation(o)}
              >
                <div className="flex items-center gap-1.5 min-w-0">
                  <span
                    className={cn('h-2 w-2 rounded-full shrink-0', DEPARTMENT_DOT_CLASSES[dep])}
                  />
                  <span className="text-xs font-medium truncate">{o.name}</span>
                </div>
                <p className="text-[11px] text-muted-foreground truncate mt-0.5">
                  {o.company_name || 'Sem empresa'}
                  {o.due_date
                    ? ` · ${o.due_date.split('T')[0].split('-').reverse().join('/')}`
                    : ''}
                  {` · ${DEPARTMENT_LABELS[dep]}`}
                </p>
              </button>
            )
          })
        )}
      </div>
      <div className="p-2 border-t border-[#E1E7EF]/70">
        <Button
          variant="ghost"
          size="sm"
          className="w-full text-xs"
          onClick={() => view.focusBoard(isFocused ? null : boardKey)}
        >
          {isFocused ? 'Remover foco do quadro' : 'Ver na listagem'}
        </Button>
      </div>
    </div>
  )
}

export function BoardFocusBanner({ view }: { view: ObligationsView }) {
  if (!view.boardFocus) return null
  return (
    <div className="flex items-center justify-between gap-2 rounded-lg border border-[#087F8C]/40 bg-[#087F8C]/5 px-3 py-2">
      <p className="text-xs text-[#0A5C66]">
        Listagem filtrada pelo quadro{' '}
        <span className="font-semibold">{BOARD_TITLES[view.boardFocus]}</span>.
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

export function BoardCards({ view, loading, error, onRetry }: BoardCardsProps) {
  if (error) {
    return (
      <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-4 flex flex-col items-center gap-2">
        <AlertTriangle className="h-5 w-5 text-destructive" />
        <p className="text-sm text-muted-foreground">{error}</p>
        <Button size="sm" variant="outline" onClick={onRetry}>
          Tentar novamente
        </Button>
      </div>
    )
  }
  return (
    <div className="grid gap-3 grid-cols-1 md:grid-cols-3">
      <BoardCard boardKey="hoje" items={view.boards.hoje} view={view} loading={loading} />
      <BoardCard boardKey="proximos7" items={view.boards.proximos} view={view} loading={loading} />
      <BoardCard boardKey="atrasadas" items={view.boards.atrasadas} view={view} loading={loading} />
    </div>
  )
}
