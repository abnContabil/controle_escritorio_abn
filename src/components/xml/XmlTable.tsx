import { useState } from 'react'
import {
  Eye,
  FileDown,
  Copy,
  Trash2,
  Wallet,
  Pencil,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  FileText,
  MoreHorizontal,
  Upload,
} from 'lucide-react'
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
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import {
  formatCurrency,
  formatDate,
  downloadXml,
  getStatusBadgeClass,
  getFinancialStatusLabel,
  getFinancialStatusBadgeClass,
  normalizeDocType,
  classifyOperation,
  getCounterpartyCnpj,
  DOC_TYPE_LABELS,
  OPERATION_LABELS,
  OPERATION_BADGE_CLASS,
} from './xml-utils'
import type { XmlControlRecord } from '@/hooks/use-xml-control'
import { generateFinanceiro, deleteXml } from '@/hooks/use-xml-control'
import { useToast } from '@/hooks/use-toast'

interface XmlTableProps {
  records: XmlControlRecord[]
  totalRecords: number
  loading: boolean
  error: string | null
  onRetry: () => void
  onViewDetail: (record: XmlControlRecord) => void
  onEdit: (record: XmlControlRecord) => void
  onRefresh: () => void
  onImport: () => void
  page: number
  pageSize: number
  onPageChange: (page: number) => void
  hasCompanySelected: boolean
  companyId: string | null
  companyCnpj: string | null
}

export function XmlTable({
  records,
  totalRecords,
  loading,
  error,
  onRetry,
  onViewDetail,
  onEdit,
  onRefresh,
  onImport,
  page,
  pageSize,
  onPageChange,
  hasCompanySelected,
  companyId,
  companyCnpj,
}: XmlTableProps) {
  const { toast } = useToast()
  const [deleteTarget, setDeleteTarget] = useState<XmlControlRecord | null>(null)
  const [deleting, setDeleting] = useState(false)
  const [generatingId, setGeneratingId] = useState<string | null>(null)
  const totalPages = Math.ceil(totalRecords / pageSize)

  const handleCopyKey = (record: XmlControlRecord) => {
    if (record.chave_acesso) {
      navigator.clipboard.writeText(record.chave_acesso)
      toast({ title: 'Chave copiada', description: record.chave_acesso })
    }
  }

  const handleGenerateFinanceiro = async (record: XmlControlRecord) => {
    if (!companyId) return
    setGeneratingId(record.id)
    const result = await generateFinanceiro(companyId, record.id)
    setGeneratingId(null)
    if (result.success) {
      toast({ title: 'Sucesso', description: 'Financeiro gerado.' })
      onRefresh()
    } else {
      toast({
        title: 'Erro',
        description: result.error || 'Falha ao gerar financeiro.',
        variant: 'destructive',
      })
    }
  }

  const handleConfirmDelete = async () => {
    if (!deleteTarget) return
    setDeleting(true)
    const result = await deleteXml(deleteTarget.id)
    setDeleting(false)
    if (result.success) {
      toast({ title: 'Sucesso', description: 'Documento excluído.' })
      setDeleteTarget(null)
      onRefresh()
    } else {
      toast({
        title: 'Erro',
        description: result.error || 'Falha ao excluir.',
        variant: 'destructive',
      })
    }
  }

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
          <Button className="mt-4" onClick={onImport}>
            <Upload className="mr-2 h-4 w-4" /> Importar XML
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Documentos</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Operação</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Número/Série</TableHead>
                  <TableHead>Emissão</TableHead>
                  <TableHead>Emitente/Prestador</TableHead>
                  <TableHead>Destinatário/Tomador</TableHead>
                  <TableHead>CNPJ</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Financ.</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {records.map((xml) => {
                  const docType = normalizeDocType(xml)
                  const op = classifyOperation(xml, companyCnpj)
                  const cnpj = getCounterpartyCnpj(xml, companyCnpj)
                  return (
                    <TableRow key={xml.id}>
                      <TableCell>
                        <Badge variant="outline" className={OPERATION_BADGE_CLASS[op]}>
                          {OPERATION_LABELS[op]}
                        </Badge>
                      </TableCell>
                      <TableCell>{DOC_TYPE_LABELS[docType]}</TableCell>
                      <TableCell className="font-mono text-xs">
                        {xml.numero || '—'}
                        {xml.serie ? ` / ${xml.serie}` : ''}
                      </TableCell>
                      <TableCell>{formatDate(xml.data_emissao)}</TableCell>
                      <TableCell className="max-w-[150px] truncate">
                        {xml.emitente_nome || '—'}
                      </TableCell>
                      <TableCell className="max-w-[150px] truncate">
                        {xml.destinatario_nome || '—'}
                      </TableCell>
                      <TableCell className="font-mono text-xs">{cnpj || '—'}</TableCell>
                      <TableCell>{formatCurrency(xml.valor_total)}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getStatusBadgeClass(xml.status)}>
                          {xml.status || '—'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={getFinancialStatusBadgeClass(xml.financeiro_gerado)}
                        >
                          {getFinancialStatusLabel(xml.financeiro_gerado)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => onViewDetail(xml)}>
                              <Eye className="mr-2 h-4 w-4" /> Visualizar
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => onEdit(xml)}>
                              <Pencil className="mr-2 h-4 w-4" /> Editar dados de controle
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              disabled={!xml.xml_texto}
                              onClick={() => downloadXml(xml.xml_texto, xml.nome_arquivo)}
                            >
                              <FileDown className="mr-2 h-4 w-4" /> Baixar XML
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              disabled={!xml.chave_acesso}
                              onClick={() => handleCopyKey(xml)}
                            >
                              <Copy className="mr-2 h-4 w-4" /> Copiar chave
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              disabled={xml.financeiro_gerado === true || generatingId === xml.id}
                              onClick={() => handleGenerateFinanceiro(xml)}
                            >
                              <Wallet className="mr-2 h-4 w-4" />{' '}
                              {generatingId === xml.id ? 'Gerando...' : 'Gerar financeiro'}
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="text-destructive"
                              onClick={() => setDeleteTarget(xml)}
                            >
                              <Trash2 className="mr-2 h-4 w-4" /> Excluir
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
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
      <AlertDialog open={!!deleteTarget} onOpenChange={(o) => !o && setDeleteTarget(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza? Esta ação não pode ser desfeita. O documento será removido
              permanentemente.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmDelete} disabled={deleting}>
              {deleting ? 'Excluindo...' : 'Excluir'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
