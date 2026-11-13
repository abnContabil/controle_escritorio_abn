// Painel lateral de detalhes de uma obrigação (Sheet).
// Apresenta os dados reais da view operacional: empresa, regime, departamento,
// competência, vencimento, responsável, prioridade, situação, progresso,
// checklist e histórico. Escritas via RLS do schema contabil_io.
import { useEffect, useState } from 'react'
import { History } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { contabilIoDb } from '@/lib/supabase/contabil-io-client'
import { useToast } from '@/hooks/use-toast'
import type { AbnObligationOperational } from '@/hooks/use-abn-obligations'
import type { ResponsibleUser } from '@/hooks/use-responsible-users'
import { DEPARTMENT_LABELS } from './departments'
import {
  DetailRow,
  formatDateBR,
  formatCompetencia,
  getObligationDepartment,
} from './detail-panel-utils'
import { ObligationExecutionTab, type ChecklistRow } from './ObligationExecutionTab'

type HistoryRow = {
  id: string
  action: string
  old_status: string | null
  new_status: string | null
  created_at: string
}

export interface ObligationDetailPanelProps {
  obligation: AbnObligationOperational | null
  open: boolean
  onOpenChange: (open: boolean) => void
  responsibles: ResponsibleUser[]
  onStatusChange: (id: string, status: string) => Promise<boolean>
  onRefresh: () => void
}

const STATUS_OPTIONS = ['A Fazer', 'Em Andamento', 'Aguardando Cliente', 'Concluído', 'Cancelado']

function HistoryTab({
  obligationId,
  open,
  onRetry,
}: {
  obligationId: string
  open: boolean
  onRetry: () => void
}) {
  const [history, setHistory] = useState<HistoryRow[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!obligationId || !open) return
    let cancelled = false
    const load = async () => {
      setLoading(true)
      setError(null)
      const res = await contabilIoDb
        .from('abn_obligation_history')
        .select('id, action, old_status, new_status, created_at')
        .eq('obligation_id', obligationId)
        .order('created_at', { ascending: false })
        .limit(30)
      if (cancelled) return
      if (res.error) {
        console.error('Erro ao carregar histórico:', res.error)
        setError('Não foi possível carregar o histórico.')
      } else {
        setHistory((res.data || []) as HistoryRow[])
      }
      setLoading(false)
    }
    load()
    return () => {
      cancelled = true
    }
  }, [obligationId, open, onRetry])

  if (loading) {
    return (
      <div className="space-y-3">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
      </div>
    )
  }
  if (error) {
    return (
      <div className="space-y-2">
        <p className="text-sm text-destructive">{error}</p>
        <Button variant="outline" size="sm" onClick={onRetry}>
          Tentar novamente
        </Button>
      </div>
    )
  }
  if (history.length === 0) {
    return (
      <p className="text-sm text-muted-foreground text-center py-6">
        Nenhum registro de histórico para esta obrigação.
      </p>
    )
  }
  return (
    <div className="space-y-3">
      {history.map((h) => (
        <div key={h.id} className="flex gap-3">
          <History className="h-4 w-4 text-[#087F8C] shrink-0 mt-0.5" />
          <div className="min-w-0">
            <p className="text-sm">
              <span className="font-medium">{h.action}</span>
              {h.old_status && h.new_status && (
                <span className="text-muted-foreground">
                  {' '}
                  ({h.old_status} → {h.new_status})
                </span>
              )}
            </p>
            <p className="text-xs text-muted-foreground">
              {new Date(h.created_at).toLocaleString('pt-BR')}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

function ChecklistTab({
  obligation,
  open,
  responsibles,
  onRefresh,
  onCompleted,
}: {
  obligation: AbnObligationOperational
  open: boolean
  responsibles: ResponsibleUser[]
  onRefresh: () => void
  onCompleted: () => void
}) {
  const [checklist, setChecklist] = useState<ChecklistRow[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [savingId, setSavingId] = useState<string | null>(null)
  const [reload, setReload] = useState(0)
  const { toast } = useToast()

  useEffect(() => {
    if (!obligation.id || !open) return
    let cancelled = false
    const load = async () => {
      setLoading(true)
      setError(null)
      const res = await contabilIoDb
        .from('abn_obligation_checklist')
        .select('id, title, completed, position')
        .eq('obligation_id', obligation.id)
        .order('position', { ascending: true })
      if (cancelled) return
      if (res.error) {
        console.error('Erro ao carregar checklist:', res.error)
        setError('Não foi possível carregar o checklist.')
      } else {
        setChecklist((res.data || []) as ChecklistRow[])
      }
      setLoading(false)
    }
    load()
    return () => {
      cancelled = true
    }
  }, [obligation.id, open, reload])

  const toggleItem = async (item: ChecklistRow) => {
    setSavingId(item.id)
    const { error: err } = await contabilIoDb
      .from('abn_obligation_checklist')
      .update({
        completed: !item.completed,
        completed_at: !item.completed ? new Date().toISOString() : null,
      })
      .eq('id', item.id)
    setSavingId(null)
    if (err) {
      console.error('Erro ao atualizar checklist:', err)
      toast({
        title: 'Erro',
        description: 'Não foi possível atualizar o item do checklist.',
        variant: 'destructive',
      })
      return
    }
    setChecklist((prev) =>
      prev.map((c) => (c.id === item.id ? { ...c, completed: !c.completed } : c)),
    )
    onRefresh()
  }

  if (error) {
    return (
      <div className="space-y-2">
        <p className="text-sm text-destructive">{error}</p>
        <Button variant="outline" size="sm" onClick={() => setReload((n) => n + 1)}>
          Tentar novamente
        </Button>
      </div>
    )
  }

  return (
    <ObligationExecutionTab
      obligation={obligation}
      checklist={checklist}
      loadingChecklist={loading}
      savingChecklistId={savingId}
      onToggleChecklist={toggleItem}
      responsibles={responsibles}
      onRefresh={onRefresh}
      onCompleted={onCompleted}
    />
  )
}

export function ObligationDetailPanel({
  obligation,
  open,
  onOpenChange,
  responsibles,
  onStatusChange,
  onRefresh,
}: ObligationDetailPanelProps) {
  const { toast } = useToast()

  if (!obligation) return null

  const { label: depLabel, dotClass } = getObligationDepartment(obligation)
  const progress =
    obligation.calculated_progress_percentage ??
    obligation.progress_percentage ??
    (obligation.workflow_status === 'Concluído' ? 100 : 0)

  const changeStatus = async (status: string) => {
    if (status === obligation.workflow_status) return
    const ok = await onStatusChange(obligation.id, status)
    if (ok) onRefresh()
    else
      toast({
        title: 'Erro',
        description: 'Não foi possível atualizar a situação. Verifique suas permissões.',
        variant: 'destructive',
      })
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-md p-0 flex flex-col overflow-hidden">
        <SheetHeader className="px-5 py-4 border-b border-[#E1E7EF] bg-[#F4F7FA]">
          <div className="flex items-center gap-2">
            <span className={dotClass} />
            <SheetTitle className="text-base text-[#101D2D]">{obligation.name}</SheetTitle>
          </div>
          <SheetDescription className="text-xs">
            {obligation.company_name || 'Sem empresa'} · {depLabel}
          </SheetDescription>
        </SheetHeader>

        <Tabs defaultValue="detalhes" className="flex-1 flex flex-col min-h-0">
          <TabsList className="mx-4 mt-3">
            <TabsTrigger value="detalhes" className="text-xs">
              Detalhes
            </TabsTrigger>
            <TabsTrigger value="execucao" className="text-xs">
              Execução
            </TabsTrigger>
            <TabsTrigger value="historico" className="text-xs">
              Histórico
            </TabsTrigger>
          </TabsList>

          <TabsContent value="detalhes" className="flex-1 overflow-y-auto px-5 py-3 mt-0">
            <div className="grid grid-cols-2 gap-x-4">
              <DetailRow label="Empresa">{obligation.company_name || '—'}</DetailRow>
              <DetailRow label="CNPJ">{obligation.cnpj_pretty || 'não disponível'}</DetailRow>
              <DetailRow label="Regime tributário">
                {obligation.regime_tributario || 'Não informado'}
              </DetailRow>
              <DetailRow label="Departamento">
                {DEPARTMENT_LABELS[getObligationDepartment(obligation).dep]}
              </DetailRow>
              <DetailRow label="Competência">{formatCompetencia(obligation.competencia)}</DetailRow>
              <DetailRow label="Vencimento">{formatDateBR(obligation.due_date)}</DetailRow>
              <DetailRow label="Responsável">{obligation.responsible_name || '—'}</DetailRow>
              <DetailRow label="Prioridade">{obligation.priority || '—'}</DetailRow>
              <DetailRow label="Situação">{obligation.workflow_status || '—'}</DetailRow>
              <DetailRow label="Concluída em">{formatDateBR(obligation.completed_at)}</DetailRow>
            </div>
            <Separator className="my-3" />
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] uppercase tracking-wide text-muted-foreground font-medium">
                  Progresso
                </span>
                <span className="text-sm font-semibold text-[#087F8C]">{progress}%</span>
              </div>
              <div className="h-2 rounded-full bg-[#E1E7EF] overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#087F8C] transition-all"
                  style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
                />
              </div>
              {obligation.checklist_total != null && (
                <p className="text-xs text-muted-foreground mt-1">
                  Checklist: {obligation.checklist_completed ?? 0}/{obligation.checklist_total}{' '}
                  itens
                </p>
              )}
            </div>
            <Separator className="my-3" />
            <div>
              <span className="text-[11px] uppercase tracking-wide text-muted-foreground font-medium">
                Alterar situação
              </span>
              <Select value={obligation.workflow_status || 'A Fazer'} onValueChange={changeStatus}>
                <SelectTrigger className="mt-1 h-9">
                  <SelectValue placeholder="Situação" />
                </SelectTrigger>
                <SelectContent>
                  {STATUS_OPTIONS.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-[11px] text-muted-foreground mt-1">
                Marcar o checklist como concluído não altera a situação: a conclusão é um registro
                explícito do operador.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="execucao" className="flex-1 overflow-y-auto px-5 py-3 mt-0">
            <ChecklistTab
              obligation={obligation}
              open={open}
              responsibles={responsibles}
              onRefresh={onRefresh}
              onCompleted={() => onOpenChange(false)}
            />
          </TabsContent>

          <TabsContent value="historico" className="flex-1 overflow-y-auto px-5 py-3 mt-0">
            <HistoryTab obligationId={obligation.id} open={open} onRetry={onRefresh} />
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  )
}
