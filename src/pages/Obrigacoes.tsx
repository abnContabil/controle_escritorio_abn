import { useState } from 'react'
import { Filter, Calendar as CalendarIcon, CheckCircle2 } from 'lucide-react'
import { mockObrigacoes } from '@/lib/mock-data'
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

export default function Obrigacoes() {
  const [filterRegime, setFilterRegime] = useState('todos')
  const { toast } = useToast()

  const columns = [
    { id: 'A Fazer', title: 'A Fazer', color: 'bg-slate-200 text-slate-700' },
    { id: 'Em Processamento', title: 'Em Processamento', color: 'bg-blue-100 text-blue-700' },
    { id: 'Pendente', title: 'Pendente Pagamento', color: 'bg-amber-100 text-amber-700' },
    { id: 'Concluído', title: 'Concluído', color: 'bg-emerald-100 text-emerald-700' },
  ]

  const handleComplete = (id: string) => {
    toast({
      title: 'Obrigação Concluída',
      description: 'A tarefa foi movida para concluída com sucesso.',
    })
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
                      mockObrigacoes.filter(
                        (o) =>
                          o.status === col.id || (col.id === 'Atrasado' && o.status === 'Atrasado'),
                      ).length
                    }
                  </Badge>
                </div>
                <div className="flex flex-col gap-3 overflow-y-auto pr-1">
                  {mockObrigacoes
                    .filter(
                      (o) =>
                        o.status === col.id || (col.id === 'A Fazer' && o.status === 'Atrasado'),
                    )
                    .map((task) => (
                      <Card
                        key={task.id}
                        className="shadow-sm border-border/50 hover:border-primary/30 transition-colors cursor-pointer animate-slide-up"
                      >
                        <CardHeader className="p-4 pb-2">
                          <div className="flex justify-between items-start gap-2">
                            <CardTitle className="text-sm font-medium leading-tight">
                              {task.nome}
                            </CardTitle>
                            <Badge variant="outline" className="text-[10px] px-1 py-0 h-4">
                              {task.tipo}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground truncate">{task.empresa}</p>
                        </CardHeader>
                        <CardContent className="p-4 py-2">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <CalendarIcon className="h-3 w-3" />
                            <span
                              className={
                                task.status === 'Atrasado' ? 'text-destructive font-medium' : ''
                              }
                            >
                              {new Date(task.vencimento).toLocaleDateString('pt-BR')}
                            </span>
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-2 flex justify-between items-center">
                          <div className="text-xs font-medium bg-slate-100 px-2 py-1 rounded">
                            {task.responsavel}
                          </div>
                          {task.status !== 'Concluído' && (
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 text-muted-foreground hover:text-secondary"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleComplete(task.id)
                              }}
                            >
                              <CheckCircle2 className="h-4 w-4" />
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
    </div>
  )
}
