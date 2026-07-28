import { useState, useMemo } from 'react'
import { Filter, Calendar as CalendarIcon, CheckCircle2, Plus, Edit2, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useAbnObligations, AbnObligation } from '@/hooks/use-abn-obligations'
import { useAbnCompanies } from '@/hooks/use-abn-companies'
import { cn } from '@/lib/utils'

export default function Obrigacoes() {
  const [filterRegime, setFilterRegime] = useState('todos')
  const { toast } = useToast()

  const { obligations, saveObligation, deleteObligation } = useAbnObligations()
  const { companies } = useAbnCompanies()

  const companyMap = useMemo(() => {
    const map = new Map<string, { razao_social: string; regime_tributario: string }>()
    companies.forEach((c) => {
      map.set(c.id, {
        razao_social: c.razao_social,
        regime_tributario: c.regime_tributario,
      })
    })
    return map
  }, [companies])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingObligation, setEditingObligation] = useState<Partial<AbnObligation> | null>(null)

  const columns = [
    { id: 'A Fazer', title: 'A Fazer', color: 'bg-slate-200 text-slate-700' },
    { id: 'Em Processamento', title: 'Em Processamento', color: 'bg-blue-100 text-blue-700' },
    { id: 'Pendente', title: 'Pendente Pagamento', color: 'bg-amber-100 text-amber-700' },
    { id: 'Concluído', title: 'Concluído', color: 'bg-emerald-100 text-emerald-700' },
  ]

  const filteredObligations = useMemo(() => {
    return obligations.filter((o) => {
      if (filterRegime === 'todos') return true
      const regime = companyMap.get(o.company_id)?.regime_tributario?.toLowerCase() || ''
      if (filterRegime === 'simples' && regime.includes('simples')) return true
      if (filterRegime === 'presumido' && regime.includes('presumido')) return true
      if (filterRegime === 'real' && regime.includes('real')) return true
      return false
    })
  }, [obligations, filterRegime, companyMap])

  const handleComplete = async (id: string) => {
    await saveObligation({ id, status: 'Concluído' })
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    if (
      !editingObligation?.company_id ||
      !editingObligation?.name ||
      !editingObligation?.due_date
    ) {
      toast({
        title: 'Atenção',
        description: 'Preencha todos os campos obrigatórios',
        variant: 'destructive',
      })
      return
    }

    const success = await saveObligation({
      ...editingObligation,
      status: editingObligation.status || 'A Fazer',
      type: editingObligation.type || 'Federal',
    })

    if (success) {
      setIsModalOpen(false)
      setEditingObligation(null)
    }
  }

  return (
    <div className="space-y-6 h-full flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Obrigações Acessórias</h1>
          <p className="text-muted-foreground mt-1">Acompanhamento de prazos e entregas.</p>
        </div>
        <div className="flex gap-2">
          <Select value={filterRegime} onValueChange={setFilterRegime}>
            <SelectTrigger className="w-[180px]">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Regime" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos Regimes</SelectItem>
              <SelectItem value="simples">Simples Nacional</SelectItem>
              <SelectItem value="presumido">Lucro Presumido</SelectItem>
              <SelectItem value="real">Lucro Real</SelectItem>
            </SelectContent>
          </Select>
          <Button
            onClick={() => {
              setEditingObligation({ status: 'A Fazer', type: 'Federal' })
              setIsModalOpen(true)
            }}
          >
            <Plus className="mr-2 h-4 w-4" /> Nova Obrigação
          </Button>
        </div>
      </div>

      <Tabs defaultValue="kanban" className="flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <TabsList>
            <TabsTrigger value="kanban">Quadro Kanban</TabsTrigger>
            <TabsTrigger value="lista">Lista</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="kanban" className="flex-1 mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 h-full pb-4 overflow-x-auto">
            {columns.map((col) => (
              <div
                key={col.id}
                className="flex flex-col bg-slate-100/50 rounded-xl p-4 min-w-[280px]"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-sm">{col.title}</h3>
                  <Badge variant="secondary" className={col.color}>
                    {
                      filteredObligations.filter(
                        (o) =>
                          o.status === col.id || (col.id === 'A Fazer' && o.status === 'Atrasado'),
                      ).length
                    }
                  </Badge>
                </div>
                <div className="flex flex-col gap-3 overflow-y-auto pr-1">
                  {filteredObligations
                    .filter(
                      (o) =>
                        o.status === col.id || (col.id === 'A Fazer' && o.status === 'Atrasado'),
                    )
                    .map((task) => (
                      <Card
                        key={task.id}
                        className={cn(
                          'shadow-sm border-border/50 hover:border-primary/30 transition-colors animate-slide-up group relative',
                          task.status === 'Atrasado' &&
                            'border-destructive/50 hover:border-destructive',
                        )}
                      >
                        <CardHeader className="p-4 pb-2">
                          <div className="flex justify-between items-start gap-2">
                            <CardTitle className="text-sm font-medium leading-tight">
                              {task.name}
                            </CardTitle>
                            <Badge variant="outline" className="text-[10px] px-1 py-0 h-4">
                              {task.type}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground truncate">
                            {companyMap.get(task.company_id)?.razao_social ||
                              'Sem empresa vinculada'}
                          </p>
                        </CardHeader>
                        <CardContent className="p-4 py-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <CalendarIcon className="h-3 w-3" />
                              <span
                                className={
                                  task.status === 'Atrasado' ? 'text-destructive font-medium' : ''
                                }
                              >
                                {new Date(task.due_date).toLocaleDateString('pt-BR', {
                                  timeZone: 'UTC',
                                })}
                              </span>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-1 bg-white/80 absolute right-2 bottom-12 p-1 rounded-md shadow-sm border">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6"
                                onClick={() => {
                                  setEditingObligation(task)
                                  setIsModalOpen(true)
                                }}
                              >
                                <Edit2 className="h-3 w-3 text-slate-700" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 text-destructive"
                                onClick={() => {
                                  if (confirm('Tem certeza que deseja excluir esta obrigação?'))
                                    deleteObligation(task.id)
                                }}
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-2 flex justify-end items-center">
                          {task.status !== 'Concluído' && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 text-xs text-muted-foreground hover:text-secondary px-2"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleComplete(task.id)
                              }}
                            >
                              <CheckCircle2 className="h-4 w-4 mr-1" />
                              Concluir
                            </Button>
                          )}
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="lista">
          <Card>
            <CardContent className="p-0">
              <div className="p-8 text-center text-muted-foreground">
                Visualização em lista disponível na próxima atualização.
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingObligation?.id ? 'Editar Obrigação' : 'Nova Obrigação'}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSave} className="space-y-4">
            <div className="space-y-2">
              <Label>Empresa</Label>
              <Select
                value={editingObligation?.company_id || ''}
                onValueChange={(val) =>
                  setEditingObligation({ ...editingObligation, company_id: val })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a empresa" />
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
              <Label>Nome da Obrigação</Label>
              <Input
                required
                value={editingObligation?.name || ''}
                onChange={(e) =>
                  setEditingObligation({ ...editingObligation, name: e.target.value })
                }
                placeholder="Ex: DAS, SPED, DCTFWeb..."
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Vencimento</Label>
                <Input
                  required
                  type="date"
                  value={editingObligation?.due_date || ''}
                  onChange={(e) =>
                    setEditingObligation({ ...editingObligation, due_date: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label>Tipo</Label>
                <Select
                  value={editingObligation?.type || 'Federal'}
                  onValueChange={(val) => setEditingObligation({ ...editingObligation, type: val })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Federal">Federal</SelectItem>
                    <SelectItem value="Estadual">Estadual</SelectItem>
                    <SelectItem value="Municipal">Municipal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Status</Label>
              <Select
                value={editingObligation?.status || 'A Fazer'}
                onValueChange={(val) => setEditingObligation({ ...editingObligation, status: val })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A Fazer">A Fazer</SelectItem>
                  <SelectItem value="Em Processamento">Em Processamento</SelectItem>
                  <SelectItem value="Pendente">Pendente Pagamento</SelectItem>
                  <SelectItem value="Concluído">Concluído</SelectItem>
                  <SelectItem value="Atrasado">Atrasado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <DialogFooter>
              <Button type="submit" className="w-full">
                Salvar Obrigação
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
