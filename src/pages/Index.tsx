import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle, CheckCircle2, Clock, FileWarning, TrendingUp } from 'lucide-react'
import { mockObrigacoes, mockAtividades } from '@/lib/mock-data'
import { Badge } from '@/components/ui/badge'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart'
import { cn } from '@/lib/utils'

const regimeData = [
  { name: 'Simples Nacional', value: 45, fill: 'var(--color-simples)' },
  { name: 'Lucro Presumido', value: 35, fill: 'var(--color-presumido)' },
  { name: 'Lucro Real', value: 20, fill: 'var(--color-real)' },
]

const chartConfig = {
  simples: { label: 'Simples Nacional', color: 'hsl(var(--chart-1))' },
  presumido: { label: 'Lucro Presumido', color: 'hsl(var(--chart-2))' },
  real: { label: 'Lucro Real', color: 'hsl(var(--chart-3))' },
}

export default function Index() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Resumo das atividades e pendências do escritório.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-l-4 border-l-destructive">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pendências de Hoje</CardTitle>
            <AlertCircle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 em relação a ontem</p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-amber-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">XMLs Pendentes</CardTitle>
            <FileWarning className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">345</div>
            <p className="text-xs text-muted-foreground">Aguardando sincronização</p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-primary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Impostos a Apurar</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48</div>
            <p className="text-xs text-muted-foreground">Competência atual</p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-secondary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Obrigações Entregues</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground">Progresso do mês</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Upcoming Deadlines */}
        <Card className="col-span-4 shadow-subtle">
          <CardHeader>
            <CardTitle>Próximos Vencimentos</CardTitle>
            <CardDescription>Obrigações com vencimento nos próximos 7 dias.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockObrigacoes.slice(0, 5).map((obr) => (
                <div
                  key={obr.id}
                  className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-accent/5 transition-colors"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">{obr.nome}</span>
                    <span className="text-xs text-muted-foreground">{obr.empresa}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge
                      variant={
                        obr.status === 'Atrasado'
                          ? 'destructive'
                          : obr.status === 'Concluído'
                            ? 'secondary'
                            : 'outline'
                      }
                      className={cn(obr.status === 'Pendente' && 'border-amber-500 text-amber-600')}
                    >
                      {obr.status}
                    </Badge>
                    <div className="text-right text-sm font-medium">
                      {new Date(obr.vencimento).toLocaleDateString('pt-BR')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Charts & Activity */}
        <div className="col-span-3 space-y-4">
          <Card className="shadow-subtle">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Distribuição de Regimes</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[200px] w-full">
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
                    <Legend verticalAlign="bottom" height={36} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="shadow-subtle">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Atividades Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mt-2">
                {mockAtividades.map((atividade) => (
                  <div key={atividade.id} className="flex items-start gap-4">
                    <div className="mt-0.5 rounded-full p-1 bg-primary/10 text-primary">
                      <Clock className="h-3 w-3" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">{atividade.descricao}</p>
                      <p className="text-xs text-muted-foreground">{atividade.empresa}</p>
                    </div>
                    <div className="text-xs text-muted-foreground">{atividade.tempo}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
