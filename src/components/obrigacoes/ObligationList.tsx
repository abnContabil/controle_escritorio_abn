import { AlertTriangle, Edit2, MoreVertical, Ban } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import type { AbnObligationOperational } from '@/hooks/use-abn-obligations'
import {
  ALL_STATUSES,
  GUIDE_STATUS_LABELS,
  PRIORITY_LABELS,
  PRIORITY_BADGES,
  URGENCY_STYLES,
  getUrgencyKey,
  formatDateBR,
  formatCompetenciaBR,
} from './kanban-constants'

export interface ObligationListProps {
  obligations: AbnObligationOperational[]
  loading: boolean
  error: string | null
  onRetry: () => void
  onEdit: (o: AbnObligationOperational) => void
  onStatusChange: (id: string, status: string) => void
}

export function ObligationList({
  obligations,
  loading,
  error,
  onRetry,
  onEdit,
  onStatusChange,
}: ObligationListProps) {
  if (loading) {
    return (
      <div className="border rounded-lg p-4 space-y-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-12 w-full" />
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

  if (obligations.length === 0) {
    return (
      <div className="p-8 text-center text-muted-foreground border rounded-lg">
        Nenhuma obrigação encontrada com os filtros atuais.
      </div>
    )
  }

  return (
    <div className="border rounded-lg overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Obrigação</TableHead>
            <TableHead>Empresa</TableHead>
            <TableHead>Competência</TableHead>
            <TableHead>Vencimento</TableHead>
            <TableHead>Responsável</TableHead>
            <TableHead>Prioridade</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Guia</TableHead>
            <TableHead className="min-w-[100px]">Progresso</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {obligations.map((o) => {
            const urgencyKey = getUrgencyKey(o)
            const urgencyStyle = URGENCY_STYLES[urgencyKey] || URGENCY_STYLES.no_prazo
            const priorityBadge = PRIORITY_BADGES[o.priority || 'normal'] || PRIORITY_BADGES.normal
            const progress = o.calculated_progress_percentage ?? o.progress_percentage ?? 0
            return (
              <TableRow key={o.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <span>{o.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {o.type}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell className="max-w-[180px] truncate">{o.company_name || '—'}</TableCell>
                <TableCell>{formatCompetenciaBR(o.competencia)}</TableCell>
                <TableCell>{formatDateBR(o.due_date)}</TableCell>
                <TableCell className="max-w-[120px] truncate">
                  {o.responsible_name || '—'}
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={cn('text-xs', priorityBadge)}>
                    {PRIORITY_LABELS[o.priority || 'normal'] || 'Normal'}
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className="text-xs">{o.workflow_status || '—'}</span>
                </TableCell>
                <TableCell className="text-xs">
                  {GUIDE_STATUS_LABELS[o.guide_status || 'nao_se_aplica'] || 'Sem guia'}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 min-w-[100px]">
                    <Progress value={progress} className="h-1.5 flex-1" />
                    <span className="text-xs text-muted-foreground shrink-0">{progress}%</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-7 w-7" aria-label="Ações">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem onClick={() => onEdit(o)}>
                        <Edit2 className="mr-2 h-4 w-4" /> Editar
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Alterar status</DropdownMenuSubTrigger>
                        <DropdownMenuSubContent className="w-48">
                          {ALL_STATUSES.map((s) => (
                            <DropdownMenuItem
                              key={s}
                              onClick={() => onStatusChange(o.id, s)}
                              disabled={s === o.workflow_status}
                            >
                              {s}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuSubContent>
                      </DropdownMenuSub>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={() => onStatusChange(o.id, 'Cancelado')}
                        disabled={o.workflow_status === 'Cancelado'}
                        className="text-destructive focus:text-destructive"
                      >
                        <Ban className="mr-2 h-4 w-4" /> Cancelar
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
