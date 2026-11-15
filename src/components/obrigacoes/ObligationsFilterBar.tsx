// Barra de filtros da central: os 6 filtros combináveis pedidos —
// Empresa, Departamento, Regime tributário, Competência, Situação e
// Responsável — além do botão "Limpar filtros". Todos atualizam indicadores,
// lista, kanban e calendário ao mesmo tempo (estado único em useObligationsView).
import { Filter, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useAbnCompanies } from '@/hooks/use-abn-companies'
import { useResponsibleUsers } from '@/hooks/use-responsible-users'
import type { ObligationsView } from '@/hooks/use-obligations-view'
import { DEPARTMENT_KEYS, DEPARTMENT_LABELS, type DepartmentKey } from './departments'

export interface ObligationsFilterBarProps {
  view: ObligationsView
}

const SELECT_TRIGGER = 'h-9 bg-white text-xs w-full'

export function ObligationsFilterBar({ view }: ObligationsFilterBarProps) {
  const { companies, loading: companiesLoading } = useAbnCompanies()
  const { users, loading: usersLoading } = useResponsibleUsers(undefined)

  return (
    <div className="rounded-xl border border-[#E1E7EF] bg-white p-3 shadow-sm space-y-2">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-sm font-medium text-[#101D2D]">
          <Filter className="h-4 w-4 text-[#087F8C]" />
          Filtros
          {view.hasActiveFilters && (
            <span className="text-[11px] font-normal text-muted-foreground">
              (combináveis entre si)
            </span>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 text-xs"
          onClick={view.clearFilters}
          disabled={!view.hasActiveFilters}
        >
          <X className="h-3.5 w-3.5 mr-1" />
          Limpar filtros
        </Button>
      </div>

      <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {/* Empresa */}
        {companiesLoading ? (
          <Skeleton className="h-9 w-full" />
        ) : (
          <Select
            value={view.filters.empresaId || 'ALL'}
            onValueChange={(v) => view.setFilter('empresaId', v === 'ALL' ? '' : v)}
          >
            <SelectTrigger className={SELECT_TRIGGER}>
              <SelectValue placeholder="Empresa" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">Todas as empresas</SelectItem>
              {companies.map((c) => (
                <SelectItem key={c.id} value={c.id}>
                  {c.razao_social}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}

        {/* Departamento */}
        <Select
          value={view.filters.departamento || 'ALL'}
          onValueChange={(v) =>
            view.setFilter('departamento', (v === 'ALL' ? '' : v) as DepartmentKey | '')
          }
        >
          <SelectTrigger className={SELECT_TRIGGER}>
            <SelectValue placeholder="Departamento" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">Todos os departamentos</SelectItem>
            {DEPARTMENT_KEYS.map((k) => (
              <SelectItem key={k} value={k}>
                {DEPARTMENT_LABELS[k]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Regime tributário */}
        <Select
          value={view.filters.regime || 'ALL'}
          onValueChange={(v) => view.setFilter('regime', v === 'ALL' ? '' : v)}
        >
          <SelectTrigger className={SELECT_TRIGGER}>
            <SelectValue placeholder="Regime" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">Todos os regimes</SelectItem>
            {view.regimeOptions.map((r) => (
              <SelectItem key={r} value={r}>
                {r}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Competência */}
        <Select
          value={view.filters.competencia || 'ALL'}
          onValueChange={(v) => view.setFilter('competencia', v === 'ALL' ? '' : v)}
        >
          <SelectTrigger className={SELECT_TRIGGER}>
            <SelectValue placeholder="Competência" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">Todas as competências</SelectItem>
            {view.competencias.map((c) => {
              const [y, m] = c.split('-')
              return (
                <SelectItem key={c} value={c}>
                  {m}/{y}
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>

        {/* Situação */}
        <Select
          value={view.filters.situacao || 'ALL'}
          onValueChange={(v) => view.setFilter('situacao', v === 'ALL' ? '' : v)}
        >
          <SelectTrigger className={SELECT_TRIGGER}>
            <SelectValue placeholder="Situação" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">Todas as situações</SelectItem>
            {view.situacaoOptions.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Responsável */}
        {usersLoading ? (
          <Skeleton className="h-9 w-full" />
        ) : (
          <Select
            value={view.filters.responsavelId || 'ALL'}
            onValueChange={(v) => view.setFilter('responsavelId', v === 'ALL' ? '' : v)}
          >
            <SelectTrigger className={SELECT_TRIGGER}>
              <SelectValue placeholder="Responsável" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">Todos os responsáveis</SelectItem>
              {users.map((u) => (
                <SelectItem key={u.id} value={u.id}>
                  {u.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>
    </div>
  )
}
