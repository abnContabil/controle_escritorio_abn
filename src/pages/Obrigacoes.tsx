import { useState, useMemo } from 'react'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import {
  useAbnObligations,
  type AbnObligationOperational,
  type AbnObligationInput,
} from '@/hooks/use-abn-obligations'
import { useAbnCompanies } from '@/hooks/use-abn-companies'
import { IndicatorCards } from '@/components/obrigacoes/IndicatorCards'
import { FilterBar } from '@/components/obrigacoes/FilterBar'
import { ObligationKanban } from '@/components/obrigacoes/ObligationKanban'
import { KANBAN_COLUMNS } from '@/components/obrigacoes/kanban-constants'

function competenciaToMMYYYY(dateStr: string | null): string {
  if (!dateStr) return ''
  const parts = String(dateStr).split('-')
  if (parts.length < 2) return ''
  return `${parts[1]}/${parts[0]}`
}

function matchUrgency(o: AbnObligationOperational, filter: string): boolean {
  if (!filter) return true
  if (filter === '__proximos_7') {
    const vals = ['vence_hoje', 'vence_em_3_dias', 'vence_em_7_dias']
    const u = (o.urgency || '').toLowerCase()
    if (u) return vals.includes(u)
    const d = o.days_to_due
    return d !== null && d >= 0 && d <= 7 && !o.is_overdue
  }
  const u = (o.urgency || '').toLowerCase()
  if (u) return u === filter
  if (filter === 'concluida') return o.workflow_status === 'Concluído'
  if (filter === 'atrasada') return o.is_overdue
  const d = o.days_to_due
  if (filter === 'vence_hoje') return d === 0
  if (filter === 'vence_em_3_dias') return d !== null && d > 0 && d <= 3
  if (filter === 'vence_em_7_dias') return d !== null && d > 3 && d <= 7
  if (filter === 'no_prazo') return d !== null && d > 7
  return false
}

export default function Obrigacoes() {
  const { toast } = useToast()
  const {
    obligations,
    indicators,
    loading,
    indicatorsLoading,
    error,
    saveObligation,
    updateStatus,
    refetch,
  } = useAbnObligations()
  const { companies } = useAbnCompanies()

  const [filterCompetencia, setFilterCompetencia] = useState('')
  const [filterCompany, setFilterCompany] = useState('')
  const [filterStatus, setFilterStatus] = useState('')
  const [filterUrgency, setFilterUrgency] = useState('')
  const [activeIndicator, setActiveIndicator] = useState<string | null>(null)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editing, setEditing] = useState<Partial<AbnObligationInput> | null>(null)

  const companyNames = useMemo(() => {
    const set = new Set<string>()
    obligations.forEach((o) => {
      if (o.company_name) set.add(o.company_name)
    })
    return Array.from(set).sort()
  }, [obligations])

  const workflowStatuses = useMemo(() => {
    const set = new Set<string>([...KANBAN_COLUMNS, 'Cancelado'])
    obligations.forEach((o) => {
      if (o.workflow_status) set.add(o.workflow_status)
    })
    return Array.from(set)
  }, [obligations])

  const filtered = useMemo(() => {
    return obligations.filter((o) => {
      if (o.workflow_status === 'Cancelado' && filterStatus !== 'Cancelado') return false
      if (filterCompetencia) {
        if (competenciaToMMYYYY(o.competencia) !== filterCompetencia) return false
      }
      if (filterCompany && o.company_name !== filterCompany) return false
      if (filterStatus && (o.workflow_status || '') !== filterStatus) return false
      if (filterUrgency && !matchUrgency(o, filterUrgency)) return false
      return true
    })
  }, [obligations, filterCompetencia, filterCompany, filterStatus, filterUrgency])

  const handleIndicatorClick = (key: string) => {
    if (activeIndicator === key) {
      setActiveIndicator(null)
      setFilterUrgency('')
      setFilterStatus('')
      return
    }
    setActiveIndicator(key)
    switch (key) {
      case 'atrasadas':
        setFilterStatus('')
        setFilterUrgency('atrasada')
        break
      case 'vencem_hoje':
        setFilterStatus('')
        setFilterUrgency('vence_hoje')
        break
      case 'proximos_7_dias':
        setFilterStatus('')
        setFilterUrgency('__proximos_7')
        break
      case 'aguardando_cliente':
        setFilterUrgency('')
        setFilterStatus('Aguardando Cliente')
        break
      case 'concluidas_no_mes':
        setFilterUrgency('')
        setFilterStatus('Concluído')
        break
    }
  }

  const handleClearFilters = () => {
    setFilterCompetencia('')
    setFilterCompany('')
    setFilterStatus('')
    setFilterUrgency('')
    setActiveIndicator(null)
  }

  const handleStatusChange = async (id: string, status: string) => {
    return await updateStatus(id, status)
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editing?.company_id || !editing?.name || !editing?.due_date) {
      toast({
        title: 'Atenção',
        description: 'Preencha todos os campos obrigatórios',
        variant: 'destructive',
      })
      return
    }
    const success = await saveObligation({
      ...editing,
      status: editing.status || 'A Fazer',
      type: editing.type || 'Federal',
    })
    if (success) {
      setIsModalOpen(false)
      setEditing(null)
    }
  }

  const openEdit = (o: AbnObligationOperational) => {
    setEditing({
      id: o.id,
      company_id: o.company_id,
      name: o.name,
      due_date: o.due_date,
      type: o.type,
      status: o.status,
    })
    setIsModalOpen(true)
  }

  return (
    <div className="space-y-6 h-full flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Obrigações Acessórias</h1>
          <p className="text-muted-foreground mt-1">Acompanhamento de prazos e entregas.</p>
        </div>
        <Button
          onClick={() => {
            setEditing({ status: 'A Fazer', type: 'Federal' })
            setIsModalOpen(true)
          }}
        >
          <Plus className="mr-2 h-4 w-4" /> Nova Obrigação
        </Button>
      </div>

      <IndicatorCards
        indicators={indicators}
        loading={indicatorsLoading}
        activeKey={activeIndicator}
        onCardClick={handleIndicatorClick}
      />

      <FilterBar
        competencia={filterCompetencia}
        setCompetencia={setFilterCompetencia}
        company={filterCompany}
        setCompany={(v) => {
          setFilterCompany(v)
          setActiveIndicator(null)
        }}
        companies={companyNames}
        workflowStatus={filterStatus}
        setWorkflowStatus={(v) => {
          setFilterStatus(v)
          setActiveIndicator(null)
        }}
        workflowStatuses={workflowStatuses}
        urgency={filterUrgency}
        setUrgency={(v) => {
          setFilterUrgency(v)
          setActiveIndicator(null)
        }}
        onClear={handleClearFilters}
      />

      <Tabs defaultValue="kanban" className="flex-1 flex flex-col">
        <TabsList>
          <TabsTrigger value="kanban">Quadro Kanban</TabsTrigger>
          <TabsTrigger value="lista">Lista</TabsTrigger>
        </TabsList>
        <TabsContent value="kanban" className="flex-1 mt-4">
          <ObligationKanban
            obligations={filtered}
            loading={loading}
            error={error}
            onRetry={refetch}
            onEdit={openEdit}
            onStatusChange={handleStatusChange}
          />
        </TabsContent>
        <TabsContent value="lista" className="mt-4">
          <div className="p-8 text-center text-muted-foreground border rounded-lg">
            Visualização em lista disponível na próxima atualização.
          </div>
        </TabsContent>
      </Tabs>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editing?.id ? 'Editar Obrigação' : 'Nova Obrigação'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSave} className="space-y-4">
            <div className="space-y-2">
              <Label>Empresa</Label>
              <Select
                value={editing?.company_id || ''}
                onValueChange={(val) => setEditing({ ...editing, company_id: val })}
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
                value={editing?.name || ''}
                onChange={(e) => setEditing({ ...editing, name: e.target.value })}
                placeholder="Ex: DAS, SPED, DCTFWeb..."
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Vencimento</Label>
                <Input
                  required
                  type="date"
                  value={editing?.due_date || ''}
                  onChange={(e) => setEditing({ ...editing, due_date: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Tipo</Label>
                <Select
                  value={editing?.type || 'Federal'}
                  onValueChange={(val) => setEditing({ ...editing, type: val })}
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
                value={editing?.status || 'A Fazer'}
                onValueChange={(val) => setEditing({ ...editing, status: val })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A Fazer">A Fazer</SelectItem>
                  <SelectItem value="Em Processamento">Em Processamento</SelectItem>
                  <SelectItem value="Em Conferência">Em Conferência</SelectItem>
                  <SelectItem value="Aguardando Cliente">Aguardando Cliente</SelectItem>
                  <SelectItem value="Pendente Pagamento">Pendente Pagamento</SelectItem>
                  <SelectItem value="Concluído">Concluído</SelectItem>{' '}
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
