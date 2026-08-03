import { useState } from 'react'
import { AlertTriangle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { cn } from '@/lib/utils'
import type { AbnObligationOperational } from '@/hooks/use-abn-obligations'
import { ObligationCard } from './ObligationCard'
import { KANBAN_COLUMNS, COLUMN_COLORS, sortObligations } from './kanban-constants'

export interface ObligationKanbanProps {
  obligations: AbnObligationOperational[]
  loading: boolean
  error: string | null
  onRetry: () => void
  onEdit: (o: AbnObligationOperational) => void
  onStatusChange: (id: string, status: string) => Promise<boolean>
}

export function ObligationKanban({
  obligations,
  loading,
  error,
  onRetry,
  onEdit,
  onStatusChange,
}: ObligationKanbanProps) {
  const [processingId, setProcessingId] = useState<string | null>(null)
  const [confirmDialog, setConfirmDialog] = useState<{
    id: string
    status: string
    message: string
  } | null>(null)

  const executeStatusChange = async (id: string, status: string) => {
    setProcessingId(id)
    await onStatusChange(id, status)
    setProcessingId(null)
  }

  const handleStatusSelect = (id: string, status: string) => {
    if (status === 'Concluído') {
      setConfirmDialog({ id, status, message: 'Confirma a conclusão desta obrigação?' })
      return
    }
    if (status === 'Cancelado') {
      setConfirmDialog({ id, status, message: 'Confirma o cancelamento desta obrigação?' })
      return
    }
    void executeStatusChange(id, status)
  }

  const handleConfirm = async () => {
    if (!confirmDialog || processingId) return
    const { id, status } = confirmDialog
    await executeStatusChange(id, status)
    setConfirmDialog(null)
  }

  if (loading) {
    return (
      <div className="w-full max-w-full min-w-0 overflow-x-auto pb-4">
        <div className="flex w-max gap-4">
          {KANBAN_COLUMNS.map((col) => (
            <div
              key={col}
              className="flex flex-col bg-muted/40 rounded-xl p-3 min-w-[300px] w-[300px]"
            >
              <Skeleton className="h-6 w-32 mb-3" />
              <div className="space-y-2">
                {Array.from({ length: 2 }).map((_, j) => (
                  <Skeleton key={j} className="h-28 w-full rounded-lg" />
                ))}
              </div>
            </div>
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

  const showCanceled = obligations.some((o) => o.workflow_status === 'Cancelado')
  const columns = showCanceled ? [...KANBAN_COLUMNS, 'Cancelado'] : [...KANBAN_COLUMNS]

  return (
    <>
      <div className="w-full max-w-full min-w-0 overflow-x-auto pb-4">
        <div className="flex w-max gap-4">
          {columns.map((col) => {
            const items = sortObligations(
              obligations.filter((o) => (o.workflow_status || 'A Fazer') === col),
            )
            return (
              <div
                key={col}
                className="flex flex-col bg-muted/40 rounded-xl min-w-[300px] w-[300px] max-h-[calc(100vh-320px)]"
              >
                <div className="flex items-center justify-between p-3 border-b border-border/40 sticky top-0 bg-muted/40 rounded-t-xl z-10">
                  <h3 className="font-semibold text-sm">{col}</h3>
                  <Badge
                    variant="secondary"
                    className={cn('text-xs', COLUMN_COLORS[col] || 'bg-slate-200 text-slate-700')}
                  >
                    {items.length}
                  </Badge>
                </div>
                <div className="flex flex-col gap-2 overflow-y-auto p-3 flex-1">
                  {items.length === 0 && (
                    <p className="text-xs text-muted-foreground text-center py-3">
                      Nenhuma obrigação nesta etapa.
                    </p>
                  )}
                  {items.map((task) => (
                    <ObligationCard
                      key={task.id}
                      obligation={task}
                      processing={processingId === task.id}
                      onEdit={onEdit}
                      onStatusSelect={handleStatusSelect}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <AlertDialog
        open={confirmDialog !== null}
        onOpenChange={(open) => {
          if (!open && processingId === null) {
            setConfirmDialog(null)
          }
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmação</AlertDialogTitle>
            <AlertDialogDescription>{confirmDialog?.message}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={processingId !== null}>Cancelar</AlertDialogCancel>
            <Button onClick={() => void handleConfirm()} disabled={processingId !== null}>
              {processingId !== null && <Loader2 className="h-4 w-4 animate-spin mr-2" />}
              Confirmar
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
