import { useState, useMemo, useEffect } from 'react'
import { RefreshCw, Search, Upload } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { XmlSummaryCards } from '@/components/xml/XmlSummaryCards'
import { XmlTable } from '@/components/xml/XmlTable'
import { XmlDetailDrawer } from '@/components/xml/XmlDetailDrawer'
import { XmlImportDialog } from '@/components/xml/XmlImportDialog'
import { XmlEditDialog } from '@/components/xml/XmlEditDialog'
import { normalizeText, normalizeDocType, classifyOperation } from '@/components/xml/xml-utils'
import { useAbnCompanies } from '@/hooks/use-abn-companies'
import { useXmlControl, computeIndicators, type XmlControlRecord } from '@/hooks/use-xml-control'

const PAGE_SIZE = 10

export default function XmlHub() {
  const { companies, loading: loadingCompanies } = useAbnCompanies()
  const [selectedCompanyId, setSelectedCompanyId] = useState<string | null>(null)
  const [monthYear, setMonthYear] = useState<string>('')
  const [search, setSearch] = useState('')
  const [docTypeFilter, setDocTypeFilter] = useState<string>('all')
  const [operationFilter, setOperationFilter] = useState<string>('all')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [page, setPage] = useState(0)
  const [selectedRecord, setSelectedRecord] = useState<XmlControlRecord | null>(null)
  const [editRecord, setEditRecord] = useState<XmlControlRecord | null>(null)
  const [importOpen, setImportOpen] = useState(false)

  const { records, loading, error, refetch } = useXmlControl(selectedCompanyId, monthYear || null)

  const selectedCompanyCnpj = useMemo(() => {
    return companies.find((c) => c.id === selectedCompanyId)?.cnpj || null
  }, [companies, selectedCompanyId])

  const statusOptions = useMemo(() => {
    const set = new Set<string>()
    records.forEach((r) => {
      if (r.status) set.add(r.status)
    })
    return Array.from(set).sort()
  }, [records])

  const filteredRecords = useMemo(() => {
    let result = records
    if (docTypeFilter !== 'all') {
      result = result.filter((r) => normalizeDocType(r) === docTypeFilter)
    }
    if (operationFilter !== 'all') {
      result = result.filter((r) => classifyOperation(r, selectedCompanyCnpj) === operationFilter)
    }
    if (statusFilter !== 'all') {
      result = result.filter((r) => r.status === statusFilter)
    }
    if (search.trim()) {
      const q = normalizeText(search.trim())
      result = result.filter(
        (r) =>
          normalizeText(r.chave_acesso).includes(q) ||
          normalizeText(r.numero).includes(q) ||
          normalizeText(r.emitente_cnpj).includes(q) ||
          normalizeText(r.destinatario_cnpj).includes(q) ||
          normalizeText(r.emitente_nome).includes(q) ||
          normalizeText(r.destinatario_nome).includes(q),
      )
    }
    return result
  }, [records, docTypeFilter, operationFilter, statusFilter, search, selectedCompanyCnpj])

  const indicators = useMemo(() => computeIndicators(filteredRecords), [filteredRecords])

  const paginatedRecords = useMemo(() => {
    const start = page * PAGE_SIZE
    return filteredRecords.slice(start, start + PAGE_SIZE)
  }, [filteredRecords, page])

  useEffect(() => {
    setPage(0)
  }, [selectedCompanyId, monthYear, search, docTypeFilter, operationFilter, statusFilter])

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">XML Hub</h1>
          <p className="text-muted-foreground mt-1">Central de captura de NFe, CTe e NFSe.</p>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => setImportOpen(true)} disabled={!selectedCompanyId}>
            <Upload className="mr-2 h-4 w-4" /> Importar XML
          </Button>
          <Button
            variant="outline"
            onClick={() => refetch()}
            disabled={loading || !selectedCompanyId}
          >
            <RefreshCw className={`mr-2 h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            {loading ? 'Recarregando...' : 'Recarregar dados'}
          </Button>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground">Empresa</label>
          {loadingCompanies ? (
            <Skeleton className="h-9 w-full" />
          ) : (
            <Select value={selectedCompanyId ?? undefined} onValueChange={setSelectedCompanyId}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione uma empresa" />
              </SelectTrigger>
              <SelectContent>
                {companies.map((c) => (
                  <SelectItem key={c.id} value={c.id}>
                    {c.razao_social} — {c.cnpj || 'sem CNPJ'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground">Competência</label>
          <Input
            type="month"
            value={monthYear}
            onChange={(e) => setMonthYear(e.target.value)}
            placeholder="YYYY-MM"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground">Busca</label>
          <div className="relative">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Chave, número, CNPJ ou nome..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground">Tipo de documento</label>
          <Select value={docTypeFilter} onValueChange={setDocTypeFilter}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="nf-e">NF-e</SelectItem>
              <SelectItem value="nfc-e">NFC-e</SelectItem>
              <SelectItem value="ct-e">CT-e</SelectItem>
              <SelectItem value="nfs-e">NFS-e</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground">Operação</label>
          <Select value={operationFilter} onValueChange={setOperationFilter}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              <SelectItem value="entrada">Entrada</SelectItem>
              <SelectItem value="saida">Saída</SelectItem>
              <SelectItem value="servico_prestado">Serviço prestado</SelectItem>
              <SelectItem value="servico_tomado">Serviço tomado</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground">Status</label>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              {statusOptions.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <XmlSummaryCards indicators={indicators} loading={loading} />

      <XmlTable
        records={paginatedRecords}
        totalRecords={filteredRecords.length}
        loading={loading}
        error={error}
        onRetry={refetch}
        onViewDetail={setSelectedRecord}
        onEdit={setEditRecord}
        onRefresh={refetch}
        onImport={() => setImportOpen(true)}
        page={page}
        pageSize={PAGE_SIZE}
        onPageChange={setPage}
        hasCompanySelected={!!selectedCompanyId}
        companyId={selectedCompanyId}
        companyCnpj={selectedCompanyCnpj}
      />

      <XmlDetailDrawer
        record={selectedRecord}
        open={!!selectedRecord}
        onClose={() => setSelectedRecord(null)}
        companyCnpj={selectedCompanyCnpj}
      />

      <XmlEditDialog
        record={editRecord}
        open={!!editRecord}
        onClose={() => setEditRecord(null)}
        onSaved={refetch}
      />

      {selectedCompanyId && (
        <XmlImportDialog
          open={importOpen}
          onClose={() => setImportOpen(false)}
          companyId={selectedCompanyId}
          onComplete={refetch}
        />
      )}
    </div>
  )
}
