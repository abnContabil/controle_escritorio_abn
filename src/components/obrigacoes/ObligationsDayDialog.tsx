// Diálogo de obrigações de um dia selecionado no calendário (modo Mês/Semana).
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { AbnObligationOperational } from '@/hooks/use-abn-obligations'
import { DEPARTMENT_DOT_CLASSES, DEPARTMENT_LABELS, getDepartment } from './departments'

export interface ObligationsDayDialogProps {
  date: Date
  items: AbnObligationOperational[]
  onClose: () => void
  onSelect: (o: AbnObligationOperational) => void
}

export function ObligationsDayDialog({
  date,
  items,
  onClose,
  onSelect,
}: ObligationsDayDialogProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl border border-[#E1E7EF] shadow-lg w-full max-w-md max-h-[70vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-[#E1E7EF]">
          <h3 className="font-semibold text-[#101D2D]">
            Obrigações de {date.toLocaleDateString('pt-BR')}
          </h3>
          <Button variant="ghost" size="sm" onClick={onClose}>
            Fechar
          </Button>
        </div>
        <div className="p-4 space-y-2 overflow-y-auto">
          {items.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-4">
              Nenhuma obrigação vence neste dia.
            </p>
          ) : (
            items.map((o) => {
              const dep = getDepartment(o.name)
              return (
                <button
                  key={o.id}
                  type="button"
                  className="w-full text-left p-2.5 rounded-lg border border-[#E1E7EF] hover:border-[#087F8C]/50 transition-colors"
                  onClick={() => onSelect(o)}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={cn('h-2 w-2 rounded-full shrink-0', DEPARTMENT_DOT_CLASSES[dep])}
                    />
                    <p className="text-sm font-medium truncate">{o.name}</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5 truncate">
                    {o.company_name || 'Sem empresa'} · {o.workflow_status}
                  </p>
                </button>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}
