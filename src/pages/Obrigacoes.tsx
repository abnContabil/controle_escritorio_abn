// Central de Obrigações Acessórias (PROMPT 28).
// Dados 100% reais do Supabase (vw_abn_obligations_operational + vw_abn_companies_safe).
// Nenhum dado fictício, nenhuma migration, nenhuma alteração de estrutura.
import { useMemo } from 'react'
import { RefreshCw, Settings2, KanbanSquare, Table2, CalendarDays } from 'lucide-react'
import { Button } from '@/components/ui/button'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { useAbnObligations } from '@/hooks/use-abn-obligations'
import { useAbnCompanies } from '@/hooks/use-abn-companies'
import { useResponsibleUsers } from '@/hooks/use-responsible-users'
import { useObligationsView } from '@/hooks/use-obligations-view'
import { ObligationsFilterBar } from '@/components/obrigacoes/ObligationsFilterBar'
import { IndicatorCards } from '@/components/obrigacoes/IndicatorCardsView'
import { ObligationsCalendar } from '@/components/obrigacoes/ObligationsCalendar'
import { ObligationDetailPanel } from '@/components/obrigacoes/ObligationDetailPanel'
import { ObligationList } from '@/components/obrigacoes/ObligationList'
import { ObligationKanban } from '@/components/obrigacoes/ObligationKanban'
import { BoardCards, BoardFocusBanner } from '@/components/obrigacoes/BoardCards'
import type { AbnObligationOperational } from '@/hooks/use-abn-obligations'
import type { ViewMode } from '@/hooks/use-obligations-view'

export default function Obrigacoes() {
  const { obligations, loading, error, updateStatus, refetch } = useAbnObligations()
  const { companies, error: errorCompanies, refetch: refetchCompanies } = useAbnCompanies()
  const { users: responsibles } = useResponsibleUsers()

  const companyRegimes = useMemo(() => {
    const map = new Map<string, string>()
    companies.forEach((c) => {
      if (c.id && c.regime_tributario) map.set(c.id, c.regime_tributario)
    })
    return map
  }, [companies])

  const view = useObligationsView(obligations, companyRegimes)

  const handleSelect = (o: AbnObligationOperational) => view.openObligation(o)
  const handleRefresh = () => {
    refetch()
    refetchCompanies()
  }

  const hasError = Boolean(error) || Boolean(errorCompanies)

  const VIEW_TABS: { key: ViewMode; label: string; icon: React.ReactNode }[] = [
    { key: 'lista', label: 'Lista', icon: <Table2 className="h-3.5 w-3.5" /> },
    { key: 'kanban', label: 'Kanban', icon: <KanbanSquare className="h-3.5 w-3.5" /> },
    { key: 'mes', label: 'Calendário', icon: <CalendarDays className="h-3.5 w-3.5" /> },
  ]

  const renderMainView = () => {
    if (error) {
      return (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-sm text-destructive mb-4">{error}</p>
          <Button variant="outline" onClick={refetch}>
            Tentar novamente
          </Button>
        </div>
      )
    }
    if (loading) {
      return (
        <div className="space-y-2">
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
      )
    }
    switch (view.viewMode) {
      case 'kanban':
        return (
          <ObligationKanban
            obligations={view.filtered}
            loading={loading}
            error={error}
            onRetry={refetch}
            onEdit={handleSelect}
            onStatusChange={updateStatus}
          />
        )
      case 'mes':
      case 'semana':
        return <ObligationsCalendar view={view} loading={loading} error={error} onRetry={refetch} />
      default:
        return (
          <ObligationList
            obligations={view.filtered}
            loading={loading}
            error={error}
            onRetry={refetch}
            onEdit={handleSelect}
            onStatusChange={updateStatus}
          />
        )
    }
  }

  return (
    <div className="space-y-5">
      {/* Cabeçalho */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#101D2D]">Central de Obrigações Acessórias</h1>
          <p className="text-sm text-muted-foreground mt-1 max-w-3xl">
            Gerencie prazos, responsabilidades e entregas fiscais, contábeis e trabalhistas em um
            único lugar.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleRefresh} disabled={loading}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Atualizar
          </Button>
          <Button size="sm" onClick={() => view.setRulesOpen(true)}>
            <Settings2 className="h-4 w-4 mr-2" />
            Regras de Obrigações
          </Button>
        </div>
      </div>

      {/* Erro com Tentar novamente */}
      {hasError && (
        <Alert variant="destructive">
          <AlertTitle>Não foi possível carregar os dados</AlertTitle>
          <AlertDescription>
            {error || errorCompanies}
            <div className="mt-2">
              <Button variant="outline" size="sm" onClick={handleRefresh}>
                Tentar novamente
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* Indicadores */}
      <IndicatorCards view={view} loading={loading} />

      {/* Filtros */}
      <ObligationsFilterBar view={view} />

      {/* Banner de foco de quadro */}
      <BoardFocusBanner view={view} />

      {/* Alternador de visualização */}
      <div className="flex items-center gap-1">
        {VIEW_TABS.map((t) => (
          <Button
            key={t.key}
            size="sm"
            variant={view.viewMode === t.key ? 'default' : 'outline'}
            className={cn(
              'h-8 text-xs',
              view.viewMode === t.key ? 'bg-[#087F8C] hover:bg-[#087F8C]/90' : 'bg-white',
            )}
            onClick={() => view.setViewMode(t.key)}
          >
            {t.icon}
            <span className="ml-1">{t.label}</span>
          </Button>
        ))}
      </div>

      {/* Visualização principal */}
      {renderMainView()}

      {/* Quadros inferiores */}
      <BoardCards view={view} loading={loading} error={error} onRetry={refetch} />

      {/* Painel lateral de detalhes */}
      <ObligationDetailPanel
        obligation={view.selected}
        open={view.panelOpen}
        onOpenChange={view.setPanelOpen}
        responsibles={responsibles}
        onStatusChange={updateStatus}
        onRefresh={refetch}
      />

      {/* Área administrativa: placeholder de regras (sem escrita no banco) */}
      <Dialog open={view.rulesOpen} onOpenChange={view.setRulesOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-[#101D2D]">
              <Settings2 className="h-4 w-4 text-[#087F8C]" />
              Regras de Obrigações
            </DialogTitle>
            <DialogDescription>
              Área administrativa — configuração de aplicabilidades, periodicidades e vencimentos.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 py-1">
            <p className="text-sm text-muted-foreground">
              Esta área é um <span className="font-medium text-[#172235]">placeholder</span>: as
              regras fiscais (aplicabilidade por regime, periodicidade e data legal de vencimento)
              residem no catálogo do schema <code className="text-xs">contabil_io</code> e só podem
              ser alteradas com validação e autorização — não há edição pelo frontend.
            </p>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
              <li>Catálogo atual: 40 atividades — Fiscal (20), Contábil (7), Pessoal (13).</li>
              <li>
                Geração automática por regime: funções SQL{' '}
                <code className="text-xs">abn_apply_default_obligation_settings</code> e{' '}
                <code className="text-xs">abn_generate_company_obligations</code> (integração com o
                catálogo ainda a validar no backend).
              </li>
              <li>
                Obrigações condicionais (empregados, retenções, IE, município) exigem validação do
                operador.
              </li>
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
