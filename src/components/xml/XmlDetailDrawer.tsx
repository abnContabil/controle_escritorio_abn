import { FileDown } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  formatCurrency,
  formatDate,
  formatBoolean,
  downloadXml,
  getStatusBadgeClass,
} from './xml-utils'
import type { XmlControlRecord } from '@/hooks/use-xml-control'

interface XmlDetailDrawerProps {
  record: XmlControlRecord | null
  open: boolean
  onClose: () => void
}

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="space-y-0.5">
      <dt className="text-xs font-medium text-muted-foreground">{label}</dt>
      <dd className="text-sm break-all">{value || '—'}</dd>
    </div>
  )
}

export function XmlDetailDrawer({ record, open, onClose }: XmlDetailDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={(o) => !o && onClose()}>
      <SheetContent className="w-full sm:max-w-2xl p-0 flex flex-col">
        <SheetHeader className="px-6 pt-6 pb-4 border-b">
          <SheetTitle>Detalhes do Documento</SheetTitle>
          <SheetDescription>Informações completas do documento fiscal</SheetDescription>
        </SheetHeader>
        {record && (
          <>
            <ScrollArea className="flex-1 px-6 py-4">
              <div className="space-y-6 pb-8">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className={getStatusBadgeClass(record.status)}>
                    {record.status || '—'}
                  </Badge>
                  <Badge variant="secondary">{record.type || '—'}</Badge>
                  {record.tipo_documento && (
                    <Badge variant="outline">{record.tipo_documento}</Badge>
                  )}
                </div>

                <dl className="grid grid-cols-2 gap-4">
                  <Field label="Chave de Acesso" value={record.chave_acesso} />
                  <Field label="Número" value={record.numero} />
                  <Field label="Série" value={record.serie} />
                  <Field label="Tipo" value={record.type} />
                  <Field label="Tipo de Documento" value={record.tipo_documento} />
                  <Field label="Data de Emissão" value={formatDate(record.data_emissao)} />
                  <Field label="Valor Total" value={formatCurrency(record.valor_total)} />
                  <Field label="Competência" value={record.month_year} />
                  <Field label="Natureza da Operação" value={record.natureza_operacao} />
                  <Field label="Protocolo de Autorização" value={record.protocolo_autorizacao} />
                  <Field label="Status" value={record.status} />
                  <Field label="Nome do Arquivo" value={record.nome_arquivo} />
                </dl>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold">Emitente</h4>
                  <dl className="grid grid-cols-2 gap-4">
                    <Field label="CNPJ" value={record.emitente_cnpj} />
                    <Field label="Nome" value={record.emitente_nome} />
                    <Field label="UF" value={record.uf_emitente} />
                  </dl>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold">Destinatário</h4>
                  <dl className="grid grid-cols-2 gap-4">
                    <Field label="CNPJ" value={record.destinatario_cnpj} />
                    <Field label="Nome" value={record.destinatario_nome} />
                    <Field label="UF" value={record.uf_destinatario} />
                  </dl>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold">Informações Financeiras</h4>
                  <dl className="grid grid-cols-2 gap-4">
                    <Field
                      label="Financeiro Gerado"
                      value={formatBoolean(record.financeiro_gerado)}
                    />
                    <Field label="Tipo Financeiro" value={record.tipo_financeiro} />
                    <Field label="Criado em" value={formatDate(record.created_at)} />
                    <Field label="Atualizado em" value={formatDate(record.updated_at)} />
                  </dl>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold">Conteúdo XML</h4>
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={!record.xml_texto}
                      onClick={() => downloadXml(record.xml_texto, record.nome_arquivo)}
                    >
                      <FileDown className="h-4 w-4 mr-1" />
                      Baixar XML
                    </Button>
                  </div>
                  <pre className="bg-muted p-4 rounded-md text-xs overflow-auto max-h-96 whitespace-pre-wrap break-all">
                    {record.xml_texto || 'Sem conteúdo XML disponível'}
                  </pre>
                </div>
              </div>
            </ScrollArea>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
