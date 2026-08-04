import { FileDown, Eye, ChevronLeft, ChevronRight, AlertTriangle, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  formatCurrency,
  formatDate,
  downloadXml,
  getStatusBadgeClass,
  getPartyName,
  normalizeText,
} from './xml-utils'
import type { XmlControlRecord } from '@/hooks/use-xml-control'

interface XmlTableProps {
  records: XmlControlRecord[]
  totalRecords: number
  loading: boolean
  error: string | null
  onRetry: () => void
  onViewDetail: (record: XmlControlRecord) => void
  page: number
  pageSize: number
  onPageChange: (page: number) => void
  hasCompanySelected: boolean
}

export function XmlTable({
  records,
  totalRecords,
  loading,
  error,
  onRetry,
  onViewDetail,
  page,
  pageSize,
  onPageChange,
  hasCompanySelected,
}: XmlTableProps) {
  const totalPages = Math.ceil(totalRecords / pageSize)

  if (error) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-16 text-center">
          <AlertTriangle className="h-10 w-10 text-destructive mb-3" />
          <p className="text-muted-foreground mb-4">{error}</p>
          <Button onClick={onRetry}>Tentar novamente</Button>
        </CardContent>
      </Card>
    )
  }

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Documentos</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-12 w-full" />
          ))}
        </CardContent>
      </Card>
    )
  }

  if (!hasCompanySelected) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-16 text-center">
          <FileText className="h-10 w-10 text-muted-foreground mb-3" />
          <p className="text-lg font-medium">Selecione uma empresa</p>
          <p className="text-sm text-muted-foreground mt-1">
            Escolha uma empresa para carregar os documentos XML.
          </p>
        </CardContent>
      </Card>
    )
  }

  if (records.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-16 text-center">
          <FileText className="h-10 w-10 text-muted-foreground mb-3" />
          <p className="text-lg font-medium">Nenhum documento importado</p>
          <p className="text-sm text-muted-foreground mt-1 max-w-md">
            Os documentos aparecerão aqui somente após uma importação real para a empresa
            selecionada.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Documentos</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Entrada/Saída</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Número/Série</TableHead>
                <TableHead>Emissão</TableHead>
                <TableHead>Emitente/Destinatário</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {records.map((xml) => {
                const t = normalizeText(xml.type)
                return (
                  <TableRow key={xml.id}>
                    <TableCell>
                      <Badge variant={t.includes('entrada') ? 'default' : 'secondary'}>
                        {xml.type || '—'}
                      </Badge>
                    </TableCell>
                    <TableCell>{xml.tipo_documento || '—'}</TableCell>
                    <TableCell className="font-mono text-xs">
                      {xml.numero || '—'}
                      {xml.serie ? ` / ${xml.serie}` : ''}
                    </TableCell>
                    <TableCell>{formatDate(xml.data_emissao)}</TableCell>
                    <TableCell className="max-w-[200px] truncate">{getPartyName(xml)}</TableCell>
                    <TableCell>{formatCurrency(xml.valor_total)}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getStatusBadgeClass(xml.status)}>
                        {xml.status || '—'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          title="Ver detalhes"
                          onClick={() => onViewDetail(xml)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          title="Download XML"
                          disabled={!xml.xml_texto}
                          onClick={() => downloadXml(xml.xml_texto, xml.nome_arquivo)}
                        >
                          <FileDown className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t">
            <span className="text-sm text-muted-foreground">
              Página {page + 1} de {totalPages} • {totalRecords} documento(s)
            </span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={page === 0}
                onClick={() => onPageChange(page - 1)}
              >
                <ChevronLeft className="h-4 w-4" /> Anterior
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled={page >= totalPages - 1}
                onClick={() => onPageChange(page + 1)}
              >
                Próxima <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
