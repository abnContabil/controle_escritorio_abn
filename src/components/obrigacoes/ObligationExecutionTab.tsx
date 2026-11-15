// Aba "Execução" do painel de detalhes: checklist de execução, registro de
// conclusão (data + responsável, sem marcar "transmitida") e alteração de
// responsável. Toda escrita passa pelas permissões RLS do schema contabil_io.
import { Loader2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { useToast } from '@/hooks/use-toast'
import { contabilIoDb } from '@/lib/supabase/contabil-io-client'
import type { AbnObligationOperational } from '@/hooks/use-abn-obligations'
import type { ResponsibleUser } from '@/hooks/use-responsible-users'

export type ChecklistRow = {
  id: string
  title: string
  completed: boolean
  position: number | null
}

export interface ObligationExecutionTabProps {
  obligation: AbnObligationOperational
  checklist: ChecklistRow[]
  loadingChecklist: boolean
  savingChecklistId: string | null
  onToggleChecklist: (item: ChecklistRow) => Promise<void>
  responsibles: ResponsibleUser[]
  onRefresh: () => void
  onCompleted: () => void
}

export function ObligationExecutionTab({
  obligation,
  checklist,
  loadingChecklist,
  savingChecklistId,
  onToggleChecklist,
  responsibles,
  onRefresh,
  onCompleted,
}: ObligationExecutionTabProps) {
  const { toast } = useToast()

  const handleComplete = async () => {
    const { data: userData } = await contabilIoDb.auth.getUser()
    const userId = userData.user?.id
    const { error: err } = await contabilIoDb
      .from('abn_obligations')
      .update({
        workflow_status: 'Concluído',
        completed_at: new Date().toISOString(),
        completed_by: userId ?? null,
        updated_at: new Date().toISOString(),
        updated_by: userId ?? null,
      })
      .eq('id', obligation.id)
    if (err) {
      console.error('Erro ao concluir obrigação:', err)
      toast({
        title: 'Erro',
        description: 'Não foi possível concluir a obrigação. Verifique suas permissões.',
        variant: 'destructive',
      })
      return
    }
    toast({ title: 'Sucesso', description: 'Obrigação concluída e registrada no histórico.' })
    onRefresh()
    onCompleted()
  }

  const changeResponsible = async (id: string) => {
    if (!id) return
    const { data: userData } = await contabilIoDb.auth.getUser()
    const userId = userData.user?.id
    const { error: err } = await contabilIoDb
      .from('abn_obligations')
      .update({
        responsible_user_id: id,
        updated_at: new Date().toISOString(),
        updated_by: userId ?? null,
      })
      .eq('id', obligation.id)
    if (err) {
      toast({
        title: 'Erro',
        description: 'Não foi possível alterar o responsável.',
        variant: 'destructive',
      })
      return
    }
    toast({ title: 'Sucesso', description: 'Responsável atualizado.' })
    onRefresh()
  }

  return (
    <div className="space-y-4">
      <div>
        <span className="text-[11px] uppercase tracking-wide text-muted-foreground font-medium">
          Checklist de execução
        </span>
        {loadingChecklist ? (
          <div className="mt-2 space-y-2">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-2/3" />
          </div>
        ) : checklist.length === 0 ? (
          <p className="text-sm text-muted-foreground mt-2">
            Nenhum item de checklist cadastrado para esta obrigação.
          </p>
        ) : (
          <div className="mt-2 space-y-1.5">
            {checklist.map((item) => (
              <label
                key={item.id}
                className="flex items-center gap-2 p-2 rounded border border-[#E1E7EF] bg-white cursor-pointer hover:border-[#087F8C]/40"
              >
                <Checkbox
                  checked={item.completed}
                  disabled={savingChecklistId === item.id}
                  onCheckedChange={() => onToggleChecklist(item)}
                />
                <span
                  className={
                    item.completed ? 'text-sm line-through text-muted-foreground' : 'text-sm'
                  }
                >
                  {item.title}
                </span>
                {savingChecklistId === item.id && (
                  <Loader2 className="h-3.5 w-3.5 animate-spin text-muted-foreground ml-auto" />
                )}
              </label>
            ))}
          </div>
        )}
        <p className="text-[11px] text-muted-foreground mt-2">
          Concluir o checklist não marca a obrigação como transmitida — a transmissão é registrada
          separadamente pela equipe.
        </p>
      </div>

      <Separator />

      <div className="space-y-2">
        <span className="text-[11px] uppercase tracking-wide text-muted-foreground font-medium">
          Registrar conclusão
        </span>
        <Button
          onClick={handleComplete}
          disabled={obligation.workflow_status === 'Concluído'}
          className="w-full bg-[#087F8C] hover:bg-[#087F8C]/90 text-white"
        >
          <Send className="h-4 w-4 mr-2" /> Registrar conclusão (data e responsável atuais)
        </Button>
        <p className="text-[11px] text-muted-foreground">
          A conclusão registra a data de execução de hoje e o responsável já atribuído. Comprovantes
          devem ser anexados via XML Hub quando aplicável.
        </p>
      </div>

      <Separator />

      <div className="space-y-2">
        <Label className="text-[11px] uppercase tracking-wide text-muted-foreground font-medium">
          Alterar responsável
        </Label>
        <Select
          value={obligation.responsible_user_id || undefined}
          onValueChange={changeResponsible}
        >
          <SelectTrigger className="h-9">
            <SelectValue placeholder="Selecione o responsável" />
          </SelectTrigger>
          <SelectContent>
            {responsibles.map((r) => (
              <SelectItem key={r.id} value={r.id}>
                {r.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          type="hidden"
          value={obligation.responsible_user_id || ''}
          readOnly
          className="hidden"
        />
      </div>
    </div>
  )
}
