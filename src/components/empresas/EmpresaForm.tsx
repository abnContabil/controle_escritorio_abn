import { useState, useEffect } from 'react'
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
import { AbnCompany } from '@/hooks/use-abn-companies'

interface EmpresaFormProps {
  initialData?: Partial<AbnCompany> | null
  onSave: (company: Partial<AbnCompany>) => Promise<boolean>
  onCancel: () => void
}

export function EmpresaForm({ initialData, onSave, onCancel }: EmpresaFormProps) {
  const [formData, setFormData] = useState<Partial<AbnCompany>>({
    razao_social: '',
    cnpj: '',
    regime_tributario: 'Simples Nacional',
    uf: 'SP',
    email: '',
    whatsapp: '',
    status: 'Ativo',
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({ ...prev, ...initialData }))
    }
  }, [initialData])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const success = await onSave(formData)
    if (success) {
      onCancel()
    }
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 mt-6">
      <div className="space-y-2">
        <Label>Razão Social</Label>
        <Input
          value={formData.razao_social}
          onChange={(e) => setFormData({ ...formData, razao_social: e.target.value })}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>CNPJ</Label>
          <Input
            value={formData.cnpj}
            onChange={(e) => setFormData({ ...formData, cnpj: e.target.value })}
            required
            placeholder="00.000.000/0001-00"
          />
        </div>
        <div className="space-y-2">
          <Label>Regime Tributário</Label>
          <Select
            value={formData.regime_tributario}
            onValueChange={(value) => setFormData({ ...formData, regime_tributario: value })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Simples Nacional">Simples Nacional</SelectItem>
              <SelectItem value="Lucro Presumido">Lucro Presumido</SelectItem>
              <SelectItem value="Lucro Real">Lucro Real</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>UF</Label>
          <Select
            value={formData.uf}
            onValueChange={(val) => setFormData({ ...formData, uf: val })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[
                'SP',
                'RJ',
                'MG',
                'PR',
                'SC',
                'RS',
                'BA',
                'GO',
                'DF',
                'PE',
                'CE',
                'AM',
                'MT',
                'ES',
              ].map((uf) => (
                <SelectItem key={uf} value={uf}>
                  {uf}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Status</Label>
          <Select
            value={formData.status}
            onValueChange={(val) => setFormData({ ...formData, status: val })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Ativo">Ativo</SelectItem>
              <SelectItem value="Pendente">Pendente</SelectItem>
              <SelectItem value="Inativo">Inativo</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
        <div className="space-y-2">
          <Label>Email de Contato</Label>
          <Input
            type="email"
            value={formData.email || ''}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="contato@empresa.com.br"
          />
        </div>
        <div className="space-y-2">
          <Label>WhatsApp</Label>
          <Input
            value={formData.whatsapp || ''}
            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
            placeholder="(11) 99999-9999"
          />
        </div>
      </div>

      <div className="flex justify-end space-x-3 pt-6">
        <Button type="button" variant="outline" onClick={onCancel} disabled={loading}>
          Cancelar
        </Button>
        <Button type="submit" disabled={loading}>
          {loading ? 'Salvando...' : 'Salvar Empresa'}
        </Button>
      </div>
    </form>
  )
}
