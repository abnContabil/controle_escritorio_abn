// Central operacional de Obrigações Acessórias (PROMPT 28).
// Dados 100% reais do Supabase (vw_abn_obligations_operational + vw_abn_companies_safe).
// Nenhum dado fictício, nenhuma migration, nenhuma alteração de estrutura.
import { useMemo } from 'react'
import { CalendarX2, RefreshCw, Settings2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Skeleton } from '@/components/ui/skeleton'
import { useAbnObligations } from '@/hooks/use-abn-obligations'
import { useAbnCompanies } from '@/hooks/use-abn-companies'
import { useResponsibleUsers } from '@/hooks/use-responsible-users'
import { useObligationsView } from '@/hooks/use-obligations-view'
import { ObligationsFilterBar } from '@/components/obrigacoes/ObligationsFilterBar'
import { IndicatorCards } from '@/components/obrigacoes/IndicatorCardsView'
import { ObligationsCalendar } from '@/components/obrigacoes/ObligationsCalendar'
import { ObligationDetailPanel } from '@/components/obrigacoes/ObligationDetailPanel'
import { BoardCards, BoardFocusBanner } from '@/components/obrigacoes/BoardCards'
import type { AbnObligationOperational } from '@/hooks/use-abn-obligations'

export default function Obrigacoes() {
  const { obligations, loading, error, updating, updateStatus, refetch } = useAbnObligations()
  const {
    companies,
    loading: loadingCompanies,
    error: errorCompanies,
    refetch: refetchCompanies,
  } = useAbnCompanies()
  const { users: responsibles, loading: loadingResponsibles } = useResponsibleUsers()

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

  return (
    <div className="space-y-5">
      {/* Cabeçalho */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#101D2D]">Obrigações Acessórias</h1>
          <p className="text-sm text-muted-foreground mt-1 max-w-3xl">
            Gestão automatizada das obrigações fiscais, contábeis e trabalhistas conforme o regime
            tributário de cada empresa.
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
      <ObligationsFilterBar
        view={view}
        companies={companies}
        responsibles={responsibles}
        loadingResponsibles={loadingResponsibles}
      />

      {/* Banner de foco de quadro */}
      <BoardFocusBanner view={view} />

      {/* Calendário operacional */}
      <Card className="border-[#E1E7EF] shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-base text-[#101D2D] flex items-center gap-2">
            <CalendarX2 className="h-4 w-4 text-[#087F8C]" />
            Calendário operacional
          </CardTitle>
          <CardDescription className="text-xs">
            Vencimentos reais das obrigações filtradas. Clique numa obrigação para abrir os
            detalhes; clique num dia para ver todas as obrigações daquele dia.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error ? (
            <div className="flex flex-col items-center gap-2 py-8 text-center">
              <p className="text-sm text-destructive">{error}</p>
              <Button variant="outline" size="sm" onClick={refetch}>
                Tentar novamente
              </Button>
            </div>
          ) : loading ? (
            <div className="space-y-2">
              <Skeleton className="h-9 w-full" />
              <Skeleton className="h-64 w-full" />
            </div>
          ) : (
            <ObligationsCalendar
              obligations={view.filtered}
              viewMode={view.viewMode}
              onViewModeChange={view.setViewMode}
              anchorDate={view.anchorDate}
              onAnchorChange={view.setAnchorDate}
              selectedId={view.selectedId}
              onSelect={handleSelect}
            />
          )}
        </CardContent>
      </Card>

      {/* Quadros inferiores */}
      <BoardCards view={view} loading={loading} onSelect={handleSelect} />

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
