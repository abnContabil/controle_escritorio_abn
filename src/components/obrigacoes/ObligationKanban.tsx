import { Calendar as CalendarIcon, CheckCircle2, Edit2, Trash2, AlertTriangle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import type { AbnObligationOperational } from '@/hooks/use-abn-obligations'

const DEFAULT_COLUMNS = [
  'A Fazer',
  'Em Processamento',
  'Aguardando Cliente',
  'Pendente',
  'Concluído',
]

const COLUMN_COLORS: Record<string, string> = {
  'A Fazer': 'bg-slate-200 text-slate-700',
  'Em Processamento': 'bg-blue-100 text-blue-700',
  'Aguardando Cliente': 'bg-cyan-100 text-cyan-700',
  Pendente: 'bg-amber-100 text-amber-700',
  Concluído: 'bg-emerald-100 text-emerald-700',
}

function buildColumns(obligations: AbnObligationOperational[]) {
  const set = new Set<string>(DEFAULT_COLUMNS)
  obligations.forEach((o) => {
    if (o.workflow_status) set.add(o.workflow_status)
  })
  return Array.from(set)
}

export interface ObligationKanbanProps {
  obligations: AbnObligationOperational[]
  loading: boolean
  error: string | null
  onRetry: () => void
  onEdit: (o: AbnObligationOperational) => void
  onDelete: (id: string) => void
  onComplete: (id: string) => void
}

export function ObligationKanban({
  obligations,
  loading,
  error,
  onRetry,
  onEdit,
  onDelete,
  onComplete,
}: ObligationKanbanProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-slate-100/50 rounded-xl p-4 min-w-[280px]">
            <Skeleton className="h-5 w-32 mb-4" />
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, j) => (
                <Skeleton key={j} className="h-24 w-full rounded-lg" />
              ))}
            </div>
          </div>
        ))}
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

  const columns = buildColumns(obligations)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 overflow-x-auto pb-4">
      {columns.map((col) => {
        const items = obligations.filter((o) => (o.workflow_status || 'A Fazer') === col)
        return (
          <div key={col} className="flex flex-col bg-slate-100/50 rounded-xl p-4 min-w-[280px]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-sm">{col}</h3>
              <Badge
                variant="secondary"
                className={COLUMN_COLORS[col] || 'bg-slate-200 text-slate-700'}
              >
                {items.length}
              </Badge>
            </div>
            <div className="flex flex-col gap-3 overflow-y-auto pr-1">
              {items.length === 0 && (
                <p className="text-xs text-muted-foreground text-center py-4">Sem itens</p>
              )}
              {items.map((task) => (
                <Card
                  key={task.id}
                  className={cn(
                    'shadow-sm border-border/50 hover:border-primary/30 transition-colors animate-slide-up group relative',
                    task.is_overdue && 'border-destructive/50',
                  )}
                >
                  <CardHeader className="p-4 pb-2">
                    <div className="flex justify-between items-start gap-2">
                      <CardTitle className="text-sm font-medium leading-tight">
                        {task.name}
                      </CardTitle>
                      <Badge variant="outline" className="text-[10px] px-1 py-0 h-4">
                        {task.type}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">
                      {task.company_name || 'Sem empresa'}
                    </p>
                  </CardHeader>
                  <CardContent className="p-4 py-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CalendarIcon className="h-3 w-3" />
                        <span className={cn(task.is_overdue && 'text-destructive font-medium')}>
                          {task.due_date
                            ? new Date(task.due_date).toLocaleDateString('pt-BR', {
                                timeZone: 'UTC',
                              })
                            : '—'}
                        </span>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-1 bg-white/80 absolute right-2 bottom-12 p-1 rounded-md shadow-sm border">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => onEdit(task)}
                        >
                          <Edit2 className="h-3 w-3 text-slate-700" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 text-destructive"
                          onClick={() => {
                            if (confirm('Tem certeza que deseja excluir esta obrigação?'))
                              onDelete(task.id)
                          }}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  {task.workflow_status !== 'Concluído' && (
                    <CardFooter className="p-4 pt-2 flex justify-end">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 text-xs text-muted-foreground"
                        onClick={() => onComplete(task.id)}
                      >
                        <CheckCircle2 className="h-4 w-4 mr-1" /> Concluir
                      </Button>
                    </CardFooter>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
