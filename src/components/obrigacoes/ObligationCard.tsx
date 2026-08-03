import { MoreVertical, Edit2, Ban, Loader2, User, CheckSquare, Calendar } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
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
  getUrgencyText,
  getUrgencyKey,
  formatDateBR,
  formatCompetenciaBR,
} from './kanban-constants'

export interface ObligationCardProps {
  obligation: AbnObligationOperational
  processing: boolean
  onEdit: (o: AbnObligationOperational) => void
  onStatusSelect: (id: string, status: string) => void
}

export function ObligationCard({
  obligation: o,
  processing,
  onEdit,
  onStatusSelect,
}: ObligationCardProps) {
  const urgencyKey = getUrgencyKey(o)
  const urgencyStyle = URGENCY_STYLES[urgencyKey] || URGENCY_STYLES.no_prazo
  const urgencyText = getUrgencyText(o)
  const guideLabel = GUIDE_STATUS_LABELS[o.guide_status || 'nao_se_aplica'] || 'Sem guia'
  const priorityLabel = PRIORITY_LABELS[o.priority || 'normal'] || 'Normal'
  const priorityBadge = PRIORITY_BADGES[o.priority || 'normal'] || PRIORITY_BADGES.normal
  const checklistTotal = o.checklist_total || 0
  const checklistCompleted = o.checklist_completed || 0
  const checklistText = checklistTotal > 0 ? `${checklistCompleted}/${checklistTotal}` : '—'
  const progress = o.calculated_progress_percentage ?? o.progress_percentage ?? 0

  return (
    <Card
      className={cn(
        'shadow-sm border-border/50 hover:shadow-md transition-shadow animate-slide-up relative overflow-hidden',
        urgencyStyle.border,
      )}
    >
      <CardContent className="p-3 space-y-2">
        <div className="flex justify-between items-start gap-2">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium leading-tight">{o.name}</p>
            <Badge variant="outline" className="text-xs px-1.5 py-0 h-5 mt-1">
              {o.type}
            </Badge>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 shrink-0"
                disabled={processing}
                aria-label="Ações da obrigação"
              >
                {processing ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <MoreVertical className="h-4 w-4" />
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Alterar status</DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="w-48">
                  {ALL_STATUSES.map((s) => (
                    <DropdownMenuItem
                      key={s}
                      onClick={() => onStatusSelect(o.id, s)}
                      disabled={s === o.workflow_status}
                    >
                      {s}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => onEdit(o)}>
                <Edit2 className="mr-2 h-4 w-4" /> Editar obrigação
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => onStatusSelect(o.id, 'Cancelado')}
                disabled={o.workflow_status === 'Cancelado'}
                className="text-destructive focus:text-destructive"
              >
                <Ban className="mr-2 h-4 w-4" /> Cancelar obrigação
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <p className="text-xs text-muted-foreground line-clamp-2 leading-snug">
          {o.company_name || 'Sem empresa'}
        </p>

        <div className="flex flex-wrap items-center gap-1.5">
          <Badge variant="outline" className={cn('text-xs px-1.5 py-0 h-5', priorityBadge)}>
            {priorityLabel}
          </Badge>
          <Badge variant="secondary" className={cn('text-xs px-1.5 py-0 h-5', urgencyStyle.badge)}>
            {urgencyText}
          </Badge>
          <span className="text-xs text-muted-foreground">{guideLabel}</span>
        </div>

        <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs text-muted-foreground">
          <div className="flex items-center gap-1 min-w-0">
            <Calendar className="h-3 w-3 shrink-0" />
            <span className="truncate">{formatDateBR(o.due_date)}</span>
          </div>
          <div className="flex items-center gap-1 min-w-0">
            <span className="font-medium shrink-0">Comp:</span>
            <span className="truncate">{formatCompetenciaBR(o.competencia)}</span>
          </div>
          <div className="flex items-center gap-1 min-w-0">
            <User className="h-3 w-3 shrink-0" />
            <span className="truncate">{o.responsible_name || 'Sem responsável'}</span>
          </div>
          <div className="flex items-center gap-1 min-w-0">
            <CheckSquare className="h-3 w-3 shrink-0" />
            <span className="truncate">{checklistText}</span>
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Progresso</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-1.5" />
        </div>
      </CardContent>
    </Card>
  )
}
