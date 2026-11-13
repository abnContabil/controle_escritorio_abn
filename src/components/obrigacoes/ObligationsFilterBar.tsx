// Barra de filtros da central de Obrigações Acessórias.
// Seis filtros que funcionam em conjunto + botão para limpar todos.
// Regime tributário deriva do cadastro da empresa (dados reais).
import { Filter, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Skeleton } from '@/components/ui/skeleton'
import type { AbnCompany } from '@/hooks/use-abn-companies'
import type { ResponsibleUser } from '@/hooks/use-responsible-users'
import { DEPARTMENT_KEYS, DEPARTMENT_LABELS } from './departments'
import type { ObligationsView } from '@/hooks/use-obligations-view'

export interface ObligationsFilterBarProps {
  view: ObligationsView
  companies: AbnCompany[]
  responsibles: ResponsibleUser[]
  loadingResponsibles: boolean
}

const ALL = '__todos__'

function toAll(v: string): string {
  return v === ALL ? '' : v
}

function FilterSelect({
  label,
  value,
  allLabel,
  options,
  renderOption,
  onChange,
}: {
  label: string
  value: string
  allLabel: string
  options: string[]
  renderOption?: (v: string) => string
  onChange: (v: string) => void
}) {
  return (
    <div className="min-w-0">
      <label className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium">
        {label}
      </label>
      <Select value={value || ALL} onValueChange={(v) => onChange(toAll(v))}>
        <SelectTrigger className="h-9 text-xs bg-white">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={ALL}>{allLabel}</SelectItem>
          {options.map((o) => (
            <SelectItem key={o} value={o}>
              {renderOption ? renderOption(o) : o}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export function ObligationsFilterBar({
  view,
  companies,
  responsibles,
  loadingResponsibles,
}: ObligationsFilterBarProps) {
  return (
    <div className="rounded-lg border border-[#E1E7EF] bg-white p-3 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5 text-[#101D2D]">
          <Filter className="h-4 w-4" />
          <span className="text-sm font-semibold">Filtros</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="h-7 text-xs text-[#087F8C] hover:text-[#087F8C] hover:bg-[#087F8C]/10"
          onClick={view.clearFilters}
          disabled={!view.hasActiveFilters}
        >
          <RotateCcw className="h-3.5 w-3.5 mr-1" />
          Limpar todos os filtros
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2">
        <FilterSelect
          label="Empresa"
          value={view.filters.empresaId}
          allLabel="Todas as empresas"
          options={companies.map((c) => c.id)}
          renderOption={(id) => {
            const c = companies.find((x) => x.id === id)
            return c ? c.razao_social || c.cnpj || id : id
          }}
          onChange={(v) => view.setFilter('empresaId', v)}
        />
        <FilterSelect
          label="Regime tributário"
          value={view.filters.regime}
          allLabel="Todos os regimes"
          options={view.regimeOptions}
          onChange={(v) => view.setFilter('regime', v)}
        />
        <FilterSelect
          label="Competência"
          value={view.filters.competencia}
          allLabel="Todas as competências"
          options={view.competencias}
          renderOption={(c) => c.split('-').reverse().join('/')}
          onChange={(v) => view.setFilter('competencia', v)}
        />
        <FilterSelect
          label="Departamento"
          value={view.filters.departamento}
          allLabel="Todos os departamentos"
          options={[...DEPARTMENT_KEYS]}
          renderOption={(k) => DEPARTMENT_LABELS[k as keyof typeof DEPARTMENT_LABELS]}
          onChange={(v) =>
            view.setFilter('departamento', v as ObligationsView['filters']['departamento'])
          }
        />
        {loadingResponsibles ? (
          <div className="min-w-0">
            <label className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium">
              Responsável
            </label>
            <Skeleton className="h-9 w-full" />
          </div>
        ) : (
          <FilterSelect
            label="Responsável"
            value={view.filters.responsavelId}
            allLabel="Todos os responsáveis"
            options={view.responsavelOptions.map((r) => r.id)}
            renderOption={(id) => {
              const r = view.responsavelOptions.find((x) => x.id === id)
              return r ? r.name : id
            }}
            onChange={(v) => view.setFilter('responsavelId', v)}
          />
        )}
        <FilterSelect
          label="Situação"
          value={view.filters.situacao}
          allLabel="Todas as situações"
          options={view.situacaoOptions}
          onChange={(v) => view.setFilter('situacao', v)}
        />
      </div>
      {view.filters.competencia === '' && (
        <p className="text-[11px] text-muted-foreground mt-2">
          Sem competência selecionada, o calendário e os indicadores consideram todas as
          competências carregadas para o usuário.
        </p>
      )}
    </div>
  )
}
