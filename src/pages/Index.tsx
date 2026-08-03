import { useMemo } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle, CheckCircle2, Building2, TrendingUp, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts'
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart'
import { cn } from '@/lib/utils'
import { useAbnCompanies } from '@/hooks/use-abn-companies'
import { useAbnObligations } from '@/hooks/use-abn-obligations'
import { useAbnDashboardKpis } from '@/hooks/use-abn-dashboard-kpis'

export default function Index() {
  const { companies } = useAbnCompanies()
  const { obligations } = useAbnObligations()
  const { kpis } = useAbnDashboardKpis()

  const empresasAtivas = kpis?.empresas_ativas ?? companies.length
  const obrigacoesPendentes = kpis?.obrigacoes_pendentes ?? 0
  const impostosApurar = kpis?.impostos_a_apurar ?? 0
  const taxaEntrega = kpis?.taxa_entrega ?? 0

  const upcomingDeadlines = useMemo(() => {
    return obligations
      .filter((o) => o.status !== 'Concluído')
      .sort((a, b) => new Date(a.due_date).getTime() - new Date(b.due_date).getTime())
      .slice(0, 6)
  }, [obligations])

  const regimeData = useMemo(() => {
    const counts = { 'Simples Nacional': 0, 'Lucro Presumido': 0, 'Lucro Real': 0 }
    companies.forEach((c) => {
      if (c.regime_tributario === 'Simples Nacional') counts['Simples Nacional']++
      else if (c.regime_tributario === 'Lucro Presumido') counts['Lucro Presumido']++
      else if (c.regime_tributario === 'Lucro Real') counts['Lucro Real']++
    })
    return [
      { name: 'Simples Nacional', value: counts['Simples Nacional'], fill: 'hsl(var(--chart-1))' },
      { name: 'Lucro Presumido', value: counts['Lucro Presumido'], fill: 'hsl(var(--chart-2))' },
      { name: 'Lucro Real', value: counts['Lucro Real'], fill: 'hsl(var(--chart-3))' },
    ].filter((d) => d.value > 0)
  }, [companies])

  const statusData = useMemo(() => {
    const counts = { 'A Fazer': 0, 'Em Processamento': 0, Pendente: 0, Atrasado: 0 }
    obligations.forEach((o) => {
      if (o.status !== 'Concluído' && counts[o.status as keyof typeof counts] !== undefined) {
        counts[o.status as keyof typeof counts]++
      }
    })
    return Object.entries(counts).map(([name, value]) => ({ name, value }))
  }, [obligations])

  const chartConfig = {
    simples: { label: 'Simples Nacional', color: 'hsl(var(--chart-1))' },
    presumido: { label: 'Lucro Presumido', color: 'hsl(var(--chart-2))' },
    real: { label: 'Lucro Real', color: 'hsl(var(--chart-3))' },
  }

  const barConfig = { value: { label: 'Obrigações', color: 'hsl(var(--primary))' } }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Visão gerencial e acompanhamento estratégico do escritório.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-l-4 border-l-primary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Empresas Ativas</CardTitle>
            <Building2 className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{empresasAtivas}</div>
            <p className="text-xs text-muted-foreground">Cadastradas na base</p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-destructive">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Obrigações Pendentes</CardTitle>
            <AlertCircle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{obrigacoesPendentes}</div>
            <p className="text-xs text-muted-foreground">Aguardando processamento</p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-amber-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Impostos a Apurar</CardTitle>
            <TrendingUp className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{impostosApurar}</div>
            <p className="text-xs text-muted-foreground">Competência atual</p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-secondary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Entrega</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{taxaEntrega}%</div>
            <p className="text-xs text-muted-foreground">Progresso geral</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 shadow-subtle flex flex-col">
          <CardHeader>
            <CardTitle>Status das Obrigações</CardTitle>
            <CardDescription>Distribuição de tarefas pendentes por estágio.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 min-h-[250px] pb-4">
            {statusData.some((d) => d.value > 0) ? (
              <ChartContainer config={barConfig} className="h-full w-full max-h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={statusData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis fontSize={12} tickLine={false} axisLine={false} allowDecimals={false} />
                    <Tooltip
                      cursor={{ fill: 'rgba(0,0,0,0.05)' }}
                      content={<ChartTooltipContent />}
                    />
                    <Bar
                      dataKey="value"
                      fill="var(--color-value)"
                      radius={[4, 4, 0, 0]}
                      maxBarSize={50}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            ) : (
              <div className="flex h-[250px] items-center justify-center text-muted-foreground border border-dashed rounded-xl bg-slate-50/50">
                Nenhum dado pendente disponível.
              </div>
            )}
          </CardContent>
        </Card>

        <div className="col-span-3 space-y-4">
          <Card className="shadow-subtle h-full flex flex-col">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Distribuição de Regimes</CardTitle>
              <CardDescription>Proporção das empresas cadastradas.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex items-center">
              {regimeData.length > 0 ? (
                <ChartContainer config={chartConfig} className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={regimeData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {regimeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <Tooltip content={<ChartTooltipContent />} />
                      <Legend
                        verticalAlign="bottom"
                        height={36}
                        iconType="circle"
                        wrapperStyle={{ fontSize: '12px' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              ) : (
                <div className="flex h-[200px] w-full items-center justify-center text-muted-foreground text-sm border border-dashed rounded-xl bg-slate-50/50">
                  Cadastre empresas para ver a distribuição.
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="shadow-subtle">
        <CardHeader>
          <CardTitle>Próximos Vencimentos</CardTitle>
          <CardDescription>
            Obrigações com vencimento mais próximo aguardando conclusão.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {upcomingDeadlines.length > 0 ? (
              upcomingDeadlines.map((obr) => (
                <div
                  key={obr.id}
                  className="flex items-center justify-between p-4 rounded-xl border bg-card hover:bg-accent/5 transition-colors shadow-sm"
                >
                  <div className="flex flex-col gap-1 overflow-hidden pr-2">
                    <span className="text-sm font-semibold truncate">{obr.name}</span>
                    <span className="text-xs text-muted-foreground truncate">
                      {obr.company_name || 'Empresa não vinculada'}
                    </span>
                    <div className="flex items-center text-xs text-slate-500 mt-1">
                      <Clock className="w-3 h-3 mr-1" />
                      {new Date(obr.due_date).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}
                    </div>
                  </div>
                  <Badge
                    variant={
                      obr.status === 'Atrasado'
                        ? 'destructive'
                        : obr.status === 'Concluído'
                          ? 'secondary'
                          : 'outline'
                    }
                    className={cn(
                      obr.status === 'Pendente' && 'border-amber-500 text-amber-600',
                      'shrink-0',
                    )}
                  >
                    {obr.status}
                  </Badge>
                </div>
              ))
            ) : (
              <div className="col-span-full py-6 text-center text-muted-foreground border border-dashed rounded-xl bg-slate-50/50">
                Nenhum vencimento próximo registrado.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
