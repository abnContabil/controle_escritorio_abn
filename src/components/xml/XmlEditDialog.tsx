import { useState, useEffect } from 'react'
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { updateXmlControlFields } from '@/hooks/use-xml-control'
import { useToast } from '@/hooks/use-toast'
import type { XmlControlRecord } from '@/hooks/use-xml-control'

interface XmlEditDialogProps {
  record: XmlControlRecord | null
  open: boolean
  onClose: () => void
  onSaved: () => void
}

export function XmlEditDialog({ record, open, onClose, onSaved }: XmlEditDialogProps) {
  const { toast } = useToast()
  const [status, setStatus] = useState('')
  const [type, setType] = useState('')
  const [monthYear, setMonthYear] = useState('')
  const [naturezaOperacao, setNaturezaOperacao] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (record) {
      setStatus(record.status || '')
      setType(record.type || '')
      setMonthYear(record.month_year || '')
      setNaturezaOperacao(record.natureza_operacao || '')
    }
  }, [record])

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!record) return
    setSaving(true)
    const result = await updateXmlControlFields(record.id, {
      status,
      type,
      month_year: monthYear,
      natureza_operacao: naturezaOperacao,
    })
    setSaving(false)
    if (result.success) {
      toast({ title: 'Sucesso', description: 'Dados de controle atualizados.' })
      onSaved()
      onClose()
    } else {
      toast({
        title: 'Erro',
        description: result.error || 'Falha ao atualizar.',
        variant: 'destructive',
      })
    }
  }

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar dados de controle</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSave} className="space-y-4">
          <div className="space-y-2">
            <Label>Status</Label>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Pendente">Pendente</SelectItem>
                <SelectItem value="Processado">Processado</SelectItem>
                <SelectItem value="Sincronizado">Sincronizado</SelectItem>
                <SelectItem value="Concluído">Concluído</SelectItem>
                <SelectItem value="Erro">Erro</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Tipo (Operação)</Label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger>
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="entrada">Entrada</SelectItem>
                <SelectItem value="saida">Saída</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Competência (YYYY-MM)</Label>
            <Input
              value={monthYear}
              onChange={(e) => setMonthYear(e.target.value)}
              placeholder="2024-01"
            />
          </div>
          <div className="space-y-2">
            <Label>Natureza da Operação</Label>
            <Input
              value={naturezaOperacao}
              onChange={(e) => setNaturezaOperacao(e.target.value)}
              placeholder="Natureza"
            />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={saving} className="w-full">
              {saving ? 'Salvando...' : 'Salvar'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
