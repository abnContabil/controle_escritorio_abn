import { X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export interface FilterBarProps {
  competencia: string
  setCompetencia: (v: string) => void
  company: string
  setCompany: (v: string) => void
  companies: string[]
  workflowStatus: string
  setWorkflowStatus: (v: string) => void
  workflowStatuses: string[]
  urgency: string
  setUrgency: (v: string) => void
  onClear: () => void
}

const URGENCY_OPTIONS = [
  { value: 'atrasada', label: 'Atrasada' },
  { value: 'vence_hoje', label: 'Vence hoje' },
  { value: 'vence_em_3_dias', label: 'Até 3 dias' },
  { value: 'vence_em_7_dias', label: 'Até 7 dias' },
  { value: 'no_prazo', label: 'No prazo' },
  { value: 'concluida', label: 'Concluída' },
]

export function FilterBar(props: FilterBarProps) {
  const hasFilters = props.competencia || props.company || props.workflowStatus || props.urgency

  return (
    <div className="flex flex-wrap items-end gap-3 p-3 rounded-lg border bg-card">
      <div className="space-y-1">
        <Label className="text-xs">Competência</Label>
        <Input
          placeholder="MM/AAAA"
          value={props.competencia}
          onChange={(e) => props.setCompetencia(e.target.value)}
          className="w-[130px] h-9"
        />
      </div>
      <div className="space-y-1">
        <Label className="text-xs">Empresa</Label>
        <Select value={props.company} onValueChange={props.setCompany}>
          <SelectTrigger className="w-[200px] h-9">
            <SelectValue placeholder="Todas" />
          </SelectTrigger>
          <SelectContent>
            {props.companies.map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-1">
        <Label className="text-xs">Status</Label>
        <Select value={props.workflowStatus} onValueChange={props.setWorkflowStatus}>
          <SelectTrigger className="w-[180px] h-9">
            <SelectValue placeholder="Todos" />
          </SelectTrigger>
          <SelectContent>
            {props.workflowStatuses.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-1">
        <Label className="text-xs">Urgência</Label>
        <Select
          value={props.urgency.startsWith('__') ? '' : props.urgency}
          onValueChange={props.setUrgency}
        >
          <SelectTrigger className="w-[160px] h-9">
            <SelectValue placeholder="Todas" />
          </SelectTrigger>
          <SelectContent>
            {URGENCY_OPTIONS.map((u) => (
              <SelectItem key={u.value} value={u.value}>
                {u.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {hasFilters && (
        <Button variant="outline" size="sm" className="h-9" onClick={props.onClear}>
          <X className="mr-1 h-4 w-4" /> Limpar filtros
        </Button>
      )}
    </div>
  )
}
