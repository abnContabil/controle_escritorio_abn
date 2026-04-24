import { useState } from 'react'
import { Download, PlayCircle, Save } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { Progress } from '@/components/ui/progress'
import { useAbnCompanies } from '@/hooks/use-abn-companies'

export default function Apuracao() {
  const [empresa, setEmpresa] = useState('')
  const [competencia, setCompetencia] = useState('2024-04')
  const [calculating, setCalculating] = useState(false)
  const { toast } = useToast()

  const { companies } = useAbnCompanies()
  const selectedEmpresaData = companies.find((e) => e.id === empresa)

  const handleCalcular = () => {
    setCalculating(true)
    setTimeout(() => {
      setCalculating(false)
      toast({
        title: 'Apuração Concluída',
        description: 'Os impostos foram calculados com base nos XMLs importados.',
      })
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Apuração de Impostos</h1>
        <p className="text-muted-foreground mt-1">
          Cálculo de tributos Federais, Estaduais e Municipais.
        </p>
      </div>

      <Card className="shadow-subtle">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label>Empresa</Label>
              <Select value={empresa} onValueChange={setEmpresa}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a empresa" />
                </SelectTrigger>
                <SelectContent>
                  {companies.map((emp) => (
                    <SelectItem key={emp.id} value={emp.id}>
                      {emp.razao_social}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Competência</Label>
              <Select value={competencia} onValueChange={setCompetencia}>
                <SelectTrigger>
                  <SelectValue placeholder="Mês/Ano" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024-05">Maio / 2024</SelectItem>
                  <SelectItem value="2024-04">Abril / 2024</SelectItem>
                  <SelectItem value="2024-03">Março / 2024</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end gap-2">
              <Button
                onClick={handleCalcular}
                disabled={!empresa || calculating}
                className="w-full md:w-auto"
              >
                {calculating ? (
                  <>Calculando...</>
                ) : (
                  <>
                    <PlayCircle className="mr-2 h-4 w-4" /> Calcular Tributos
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {calculating && (
        <Card className="animate-fade-in">
          <CardContent className="p-6 space-y-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Buscando notas fiscais...</span>
              <span>65%</span>
            </div>
            <Progress value={65} className="h-2" />
          </CardContent>
        </Card>
      )}

      {selectedEmpresaData && !calculating && (
        <div className="animate-slide-up space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              Regime: <span className="text-primary">{selectedEmpresaData.regime_tributario}</span>
            </h2>
            <div className="flex gap-2">
              <Button variant="outline">
                <Save className="mr-2 h-4 w-4" /> Salvar Rascunho
              </Button>
              <Button variant="default" className="bg-secondary text-white hover:bg-secondary/90">
                <Download className="mr-2 h-4 w-4" /> Gerar DARFs
              </Button>
            </div>
          </div>

          <Tabs defaultValue="resumo" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto md:h-10">
              <TabsTrigger value="resumo">Resumo da Apuração</TabsTrigger>
              {selectedEmpresaData.regime_tributario?.includes('Simples') ? (
                <TabsTrigger value="simples">DAS (Simples)</TabsTrigger>
              ) : (
                <>
                  <TabsTrigger value="federais">PIS / COFINS</TabsTrigger>
                  <TabsTrigger value="renda">IRPJ / CSLL</TabsTrigger>
                </>
              )}
              <TabsTrigger value="estaduais">ICMS / ISS</TabsTrigger>
            </TabsList>

            <TabsContent value="resumo" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Base de Cálculo (Faturamento)</CardTitle>
                  <CardDescription>Consolidação das notas emitidas no período.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-muted/50 rounded-lg border">
                      <p className="text-sm font-medium text-muted-foreground">
                        Receita Bruta (Vendas)
                      </p>
                      <p className="text-2xl font-bold mt-1">R$ 145.500,00</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg border">
                      <p className="text-sm font-medium text-muted-foreground">
                        Receita Bruta (Serviços)
                      </p>
                      <p className="text-2xl font-bold mt-1">R$ 32.400,00</p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <p className="text-sm font-medium text-primary">Receita Total</p>
                      <p className="text-2xl font-bold mt-1 text-primary">R$ 177.900,00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="simples" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Apuração do Simples Nacional</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 max-w-lg">
                      <div className="space-y-2">
                        <Label>Anexo (Serviços)</Label>
                        <Input value="Anexo III" readOnly className="bg-muted" />
                      </div>
                      <div className="space-y-2">
                        <Label>Alíquota Efetiva</Label>
                        <Input value="8,45%" readOnly className="bg-muted font-bold text-primary" />
                      </div>
                    </div>
                    <div className="pt-4 mt-4 border-t">
                      <h4 className="text-lg font-bold">Valor do DAS: R$ 15.032,55</h4>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="federais" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Apuração de PIS/COFINS</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Detalhes da apuração federal disponíveis em breve.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="renda" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Apuração de IRPJ/CSLL</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Detalhes da apuração de renda disponíveis em breve.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="estaduais" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Apuração de ICMS/ISS</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Detalhes da apuração estadual e municipal disponíveis em breve.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  )
}
