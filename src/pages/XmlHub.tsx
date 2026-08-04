import { useState, useMemo } from 'react'
import {
  FileDown,
  RefreshCw,
  FileWarning,
  CheckCircle,
  FileText,
  AlertTriangle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useXmlCompanies, useXmlControl, computeIndicators } from '@/hooks/use-xml-control'

const formatCurrency = (value: number | null) =>
  value != null
    ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
    : '—'

const formatDate = (dateStr: string | null) =>
  dateStr ? new Date(dateStr).toLocaleDateString('pt-BR') : '—'

function StatusIcon({ status }: { status: string | null }) {
  if (!status) return <RefreshCw className="h-4 w-4 text-amber-500 mr-1" />
  const s = status.toLowerCase()
  if (s.includes('sincroniz') || s.includes('conclu'))
    return <CheckCircle className="h-4 w-4 text-emerald-600 mr-1" />
  if (s.includes('erro') || s.includes('falh'))
    return <FileWarning className="h-4 w-4 text-destructive mr-1" />
  return <RefreshCw className="h-4 w-4 text-amber-500 mr-1" />
}

function KpiCard({
  title,
  value,
  loading,
  colorClass,
  borderClass,
}: {
  title: string
  value: number
  loading: boolean
  colorClass: string
  borderClass: string
}) {
  return (
    <Card className={borderClass}>
      <CardHeader className="pb-2">
        <CardTitle className={`text-sm font-medium ${colorClass}`}>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <Skeleton className="h-8 w-16" />
        ) : (
          <div className={`text-2xl font-bold ${colorClass}`}>{value}</div>
        )}
      </CardContent>
    </Card>
  )
}

export default function XmlHub() {
  const { companies, loading: loadingCompanies } = useXmlCompanies()
  const [selectedCompanyId, setSelectedCompanyId] = useState<string | null>(null)

  const effectiveCompanyId = selectedCompanyId ?? companies[0]?.id ?? null
  const { records, loading, error, refetch } = useXmlControl(effectiveCompanyId)
  const indicators = useMemo(() => computeIndicators(records), [records])

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">XML Hub</h1>
          <p className="text-muted-foreground mt-1">Central de captura de NFe, CTe e NFSe.</p>
        </div>
        <Button onClick={() => refetch()} disabled={loading || !effectiveCompanyId}>
          <RefreshCw className={`mr-2 h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          {loading ? 'Atualizando...' : 'Atualizar'}
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-muted-foreground">Empresa:</span>
        {loadingCompanies ? (
          <Skeleton className="h-9 w-64" />
        ) : companies.length === 0 ? (
          <span className="text-sm text-muted-foreground">Nenhuma empresa disponível</span>
        ) : (
          <Select value={effectiveCompanyId ?? undefined} onValueChange={setSelectedCompanyId}>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Selecione uma empresa" />
            </SelectTrigger>
            <SelectContent>
              {companies.map((c) => (
                <SelectItem key={c.id} value={c.id}>
                  {c.razao_social}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <KpiCard
          title="Capturados com Sucesso"
          value={indicators.sincronizados}
          loading={loading}
          colorClass="text-emerald-700"
          borderClass="bg-emerald-500/10 border-emerald-500/20"
        />
        <KpiCard
          title="Pendentes de Processamento"
          value={indicators.pendentes}
          loading={loading}
          colorClass="text-amber-700"
          borderClass="bg-amber-500/10 border-amber-500/20"
        />
        <KpiCard
          title="Erros de Certificado"
          value={indicators.erros}
          loading={loading}
          colorClass="text-destructive"
          borderClass="bg-destructive/10 border-destructive/20"
        />
      </div>

      {error ? (
        <Card className="shadow-subtle">
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <AlertTriangle className="h-10 w-10 text-destructive mb-3" />
            <p className="text-muted-foreground mb-4">{error}</p>
            <Button onClick={() => refetch()}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Tentar novamente
            </Button>
          </CardContent>
        </Card>
      ) : loading ? (
        <Card className="shadow-subtle">
          <CardHeader>
            <CardTitle>Últimos Documentos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-12 w-full" />
            ))}
          </CardContent>
        </Card>
      ) : records.length === 0 ? (
        <Card className="shadow-subtle">
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <FileText className="h-10 w-10 text-muted-foreground mb-3" />
            <p className="text-lg font-medium">Nenhum documento importado</p>
            <p className="text-sm text-muted-foreground mt-1 max-w-md">
              Os documentos aparecerão aqui somente após uma importação real para a empresa
              selecionada.
            </p>
          </CardContent>
        </Card>
      ) : (
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
                {records.map((xml) => {
                  const company = companies.find((c) => c.id === xml.company_id)
                  return (
                    <TableRow key={xml.id}>
                      <TableCell className="font-medium">
                        {company?.razao_social ?? xml.emitente_nome ?? '—'}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{xml.type || xml.tipo_documento || '—'}</Badge>
                      </TableCell>
                      <TableCell className="font-mono text-xs text-muted-foreground">
                        {xml.chave_acesso ?? '—'}
                      </TableCell>
                      <TableCell>{formatDate(xml.data_emissao)}</TableCell>
                      <TableCell>{formatCurrency(xml.valor_total)}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <StatusIcon status={xml.status} />
                          <span className="text-sm">{xml.status ?? '—'}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="icon"
                          title="Download XML"
                          disabled={!xml.nome_arquivo}
                        >
                          <FileDown className="h-4 w-4 text-muted-foreground" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
