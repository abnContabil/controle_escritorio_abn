import { useState, useEffect } from 'react'
import { Loader2 } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { useResponsibleUsers } from '@/hooks/use-responsible-users'
import type { AbnObligationInput } from '@/hooks/use-abn-obligations'
import {
  KANBAN_COLUMNS,
  OBLIGATION_TYPES,
  GUIDE_STATUS_LABELS,
  GUIDE_STATUS_KEYS,
  PRIORITY_LABELS,
  PRIORITY_KEYS,
} from './kanban-constants'

export interface ObligationFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  initialData: Partial<AbnObligationInput> | null
  companies: { id: string; name: string }[]
  onSave: (data: AbnObligationInput) => Promise<boolean>
}

export function ObligationForm({
  open,
  onOpenChange,
  initialData,
  companies,
  onSave,
}: ObligationFormProps) {
  const { toast } = useToast()
  const [formData, setFormData] = useState<Partial<AbnObligationInput>>({})
  const [saving, setSaving] = useState(false)
  const { users: responsibleUsers, loading: usersLoading } = useResponsibleUsers(
    formData.company_id,
  )

  useEffect(() => {
    if (open && initialData) {
      const data: Partial<AbnObligationInput> = { ...initialData }
      if (typeof data.competencia === 'string' && data.competencia) {
        const parts = data.competencia.split('-')
        if (parts.length >= 2) {
          data.competencia = `${parts[0]}-${parts[1]}`
        }
      }
      setFormData(data)
    } else if (open) {
      setFormData({
        status: 'A Fazer',
        type: 'Federal',
        priority: 'normal',
        guide_status: 'nao_se_aplica',
        progress_percentage: 0,
      })
    }
  }, [open, initialData])

  const handleCompanyChange = (companyId: string) => {
    setFormData((prev) => ({ ...prev, company_id: companyId, responsible_user_id: undefined }))
  }

  const setField = <K extends keyof AbnObligationInput>(key: K, value: AbnObligationInput[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.company_id || !formData.name || !formData.due_date || !formData.competencia) {
      toast({
        title: 'Atenção',
        description: 'Preencha todos os campos obrigatórios',
        variant: 'destructive',
      })
      return
    }
    setSaving(true)
    const success = await onSave(formData as AbnObligationInput)
    setSaving(false)
    if (success) {
      onOpenChange(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{formData.id ? 'Editar Obrigação' : 'Nova Obrigação'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label>Empresa *</Label>
            <Select value={formData.company_id || ''} onValueChange={handleCompanyChange}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione a empresa" />
              </SelectTrigger>
              <SelectContent>
                {companies.map((c) => (
                  <SelectItem key={c.id} value={c.id}>
                    {c.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Nome da Obrigação *</Label>
            <Input
              required
              value={formData.name || ''}
              onChange={(e) => setField('name', e.target.value)}
              placeholder="Ex: DAS, SPED, DCTFWeb..."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Competência *</Label>
              <Input
                required
                type="month"
                value={formData.competencia || ''}
                onChange={(e) => setField('competencia', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Vencimento *</Label>
              <Input
                required
                type="date"
                value={formData.due_date || ''}
                onChange={(e) => setField('due_date', e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Tipo</Label>
              <Select value={formData.type || 'Federal'} onValueChange={(v) => setField('type', v)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {OBLIGATION_TYPES.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Prioridade</Label>
              <Select
                value={formData.priority || 'normal'}
                onValueChange={(v) => setField('priority', v)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {PRIORITY_KEYS.map((p) => (
                    <SelectItem key={p} value={p}>
                      {PRIORITY_LABELS[p]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Situação da guia</Label>
              <Select
                value={formData.guide_status || 'nao_se_aplica'}
                onValueChange={(v) => setField('guide_status', v)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {GUIDE_STATUS_KEYS.map((g) => (
                    <SelectItem key={g} value={g}>
                      {GUIDE_STATUS_LABELS[g]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Status</Label>
              <Select
                value={formData.status || 'A Fazer'}
                onValueChange={(v) => setField('status', v)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {KANBAN_COLUMNS.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Responsável</Label>
              <Select
                value={formData.responsible_user_id || '__none'}
                onValueChange={(v) => setField('responsible_user_id', v === '__none' ? null : v)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sem responsável" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="__none">Sem responsável</SelectItem>
                  {usersLoading ? (
                    <SelectItem value="__loading" disabled>
                      Carregando...
                    </SelectItem>
                  ) : (
                    responsibleUsers.map((u) => (
                      <SelectItem key={u.id} value={u.id}>
                        {u.name}
                        {u.email ? ` (${u.email})` : ''}
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Progresso (%)</Label>
              <Input
                type="number"
                min={0}
                max={100}
                value={formData.progress_percentage ?? 0}
                onChange={(e) => setField('progress_percentage', Number(e.target.value))}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Observações</Label>
            <Textarea
              value={formData.notes || ''}
              onChange={(e) => setField('notes', e.target.value)}
              placeholder="Adicione observações sobre a obrigação..."
              rows={3}
            />
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full" disabled={saving}>
              {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Salvar Obrigação
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
