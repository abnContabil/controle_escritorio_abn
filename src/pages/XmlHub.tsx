import { useState } from 'react'
import { FileDown, RefreshCw, FileWarning, CheckCircle } from 'lucide-react'
import { mockXmls } from '@/lib/mock-data'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { useToast } from '@/hooks/use-toast'

export default function XmlHub() {
  const [syncing, setSyncing] = useState(false)
  const { toast } = useToast()

  const handleSync = () => {
    setSyncing(true)
    setTimeout(() => {
      setSyncing(false)
      toast({
        title: 'Sincronização Concluída',
        description: '12 novos documentos encontrados nas Prefeituras e SEFAZ.',
      })
    }, 2000)
  }

  const getStatusIcon = (status: string) => {
    if (status === 'Sincronizado') return <CheckCircle className="h-4 w-4 text-secondary mr-1" />
    if (status === 'Erro') return <FileWarning className="h-4 w-4 text-destructive mr-1" />
    return <RefreshCw className="h-4 w-4 text-amber-500 mr-1 animate-spin" />
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">XML Hub</h1>
          <p className="text-muted-foreground mt-1">Central de captura de NFe, CTe e NFSe.</p>
        </div>
        <Button onClick={handleSync} disabled={syncing}>
          <RefreshCw className={`mr-2 h-4 w-4 ${syncing ? 'animate-spin' : ''}`} />
          {syncing ? 'Sincronizando...' : 'Sincronizar SEFAZ'}
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-secondary/10 border-secondary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-secondary-foreground">
              Capturados com Sucesso
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary-foreground">1.240</div>
          </CardContent>
        </Card>
        <Card className="bg-amber-500/10 border-amber-500/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-amber-700">
              Pendentes de Processamento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-700">45</div>
          </CardContent>
        </Card>
        <Card className="bg-destructive/10 border-destructive/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-destructive">
              Erros de Certificado
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">3</div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-subtle">
        <CardHeader>
          <CardTitle>Últimos Documentos</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Empresa</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Chave de Acesso</TableHead>
                <TableHead>Emissão</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockXmls.map((xml) => (
                <TableRow key={xml.id}>
                  <TableCell className="font-medium">{xml.empresa}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{xml.tipo}</Badge>
                  </TableCell>
                  <TableCell className="font-mono text-xs text-muted-foreground">
                    {xml.chave}
                  </TableCell>
                  <TableCell>{new Date(xml.emissao).toLocaleDateString('pt-BR')}</TableCell>
                  <TableCell>{xml.valor}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {getStatusIcon(xml.status)}
                      <span className="text-sm">{xml.status}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" title="Download XML">
                      <FileDown className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
