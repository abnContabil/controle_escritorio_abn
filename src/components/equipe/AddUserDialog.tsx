import { useState, useEffect } from 'react'
import { contabilIoDb } from '@/lib/supabase/contabil-io-client'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
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
import { useToast } from '@/hooks/use-toast'
import type { AbnCompany } from '@/hooks/use-abn-companies'

interface AddUserDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  companies: AbnCompany[]
  onSuccess: (companyId: string) => void
}

export function AddUserDialog({ open, onOpenChange, companies, onSuccess }: AddUserDialogProps) {
  const [selectedCompanyId, setSelectedCompanyId] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('visualizador')
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    if (open && companies.length > 0 && !selectedCompanyId) {
      setSelectedCompanyId(companies[0].id)
    }
    if (!open) {
      setEmail('')
      setRole('visualizador')
    }
  }, [open, companies, selectedCompanyId])

  const handleSubmit = async () => {
    if (!selectedCompanyId || !email) {
      toast({ title: 'Erro', description: 'Preencha todos os campos.', variant: 'destructive' })
      return
    }
    setLoading(true)
    const { error } = await contabilIoDb.rpc('abn_add_company_user', {
      p_company_id: selectedCompanyId,
      p_user_email: email,
      p_role: role,
    })
    if (error) {
      toast({
        title: 'Erro ao adicionar usuário',
        description: error.message,
        variant: 'destructive',
      })
      setLoading(false)
      return
    }
    toast({ title: 'Sucesso', description: 'Usuário adicionado com sucesso.' })
    onOpenChange(false)
    onSuccess(selectedCompanyId)
    setLoading(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Usuário</DialogTitle>
          <DialogDescription>Adicione um novo membro à equipe da empresa.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label>Empresa</Label>
            <Select value={selectedCompanyId} onValueChange={setSelectedCompanyId}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma empresa" />
              </SelectTrigger>
              <SelectContent>
                {companies.map((c) => (
                  <SelectItem key={c.id} value={c.id}>
                    {c.razao_social}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Email do Usuário</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="usuario@email.com"
            />
          </div>
          <div className="space-y-2">
            <Label>Perfil</Label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="contador">Contador</SelectItem>
                <SelectItem value="auxiliar">Auxiliar</SelectItem>
                <SelectItem value="visualizador">Visualizador</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)} disabled={loading}>
            Cancelar
          </Button>
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? 'Adicionando...' : 'Adicionar'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
