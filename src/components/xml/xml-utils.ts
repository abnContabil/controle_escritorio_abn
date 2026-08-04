import type { XmlControlRecord } from '@/hooks/use-xml-control'

export function formatCurrency(value: number | null): string {
  if (value == null) return '—'
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
}

export function formatDate(dateStr: string | null): string {
  if (!dateStr) return '—'
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return '—'
  return d.toLocaleDateString('pt-BR')
}

export function formatBoolean(v: boolean | null | undefined): string {
  if (v === null || v === undefined) return '—'
  return v ? 'Sim' : 'Não'
}

export function normalizeText(s: string | null | undefined): string {
  return (s ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

export function normalizeCnpj(cnpj: string | null | undefined): string {
  return (cnpj ?? '').replace(/\D/g, '')
}

export type DocTypeKey = 'nf-e' | 'nfc-e' | 'ct-e' | 'nfs-e' | 'outro'

export function normalizeDocType(record: XmlControlRecord): DocTypeKey {
  const raw = normalizeText(`${record.type} ${record.tipo_documento}`)
  if (raw.includes('nfce') || raw.includes('nfc-e') || raw.includes('nfc_e')) return 'nfc-e'
  if (raw.includes('nfse') || raw.includes('nfs-e') || raw.includes('nfs_e')) return 'nfs-e'
  if (raw.includes('cte') || raw.includes('ct-e') || raw.includes('ct_e')) return 'ct-e'
  if (raw.includes('nfe') || raw.includes('nf-e') || raw.includes('nf_e')) return 'nf-e'
  return 'outro'
}

export const DOC_TYPE_LABELS: Record<DocTypeKey, string> = {
  'nf-e': 'NF-e',
  'nfc-e': 'NFC-e',
  'ct-e': 'CT-e',
  'nfs-e': 'NFS-e',
  outro: 'Outro',
}

export type OperationKey =
  | 'entrada'
  | 'saida'
  | 'servico_prestado'
  | 'servico_tomado'
  | 'indefinido'

export function classifyOperation(
  record: XmlControlRecord,
  companyCnpj: string | null | undefined,
): OperationKey {
  const docType = normalizeDocType(record)
  const company = normalizeCnpj(companyCnpj)
  const emitente = normalizeCnpj(record.emitente_cnpj)
  const destinatario = normalizeCnpj(record.destinatario_cnpj)
  if (!company) return 'indefinido'
  const isEmitente = !!emitente && company === emitente
  const isDestinatario = !!destinatario && company === destinatario
  if (docType === 'nfs-e') {
    if (isEmitente) return 'servico_prestado'
    if (isDestinatario) return 'servico_tomado'
  } else {
    if (isEmitente) return 'saida'
    if (isDestinatario) return 'entrada'
  }
  return 'indefinido'
}

export const OPERATION_LABELS: Record<OperationKey, string> = {
  entrada: 'Entrada',
  saida: 'Saída',
  servico_prestado: 'Serviço prestado',
  servico_tomado: 'Serviço tomado',
  indefinido: '—',
}

export const OPERATION_BADGE_CLASS: Record<OperationKey, string> = {
  entrada: 'bg-blue-500/10 text-blue-700 border-blue-500/20',
  saida: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
  servico_prestado: 'bg-violet-500/10 text-violet-700 border-violet-500/20',
  servico_tomado: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
  indefinido: '',
}

export function getCounterpartyCnpj(
  record: XmlControlRecord,
  companyCnpj: string | null | undefined,
): string | null {
  const op = classifyOperation(record, companyCnpj)
  if (op === 'entrada' || op === 'servico_tomado') return record.emitente_cnpj
  if (op === 'saida' || op === 'servico_prestado') return record.destinatario_cnpj
  return record.emitente_cnpj || record.destinatario_cnpj
}

export function downloadXml(xmlTexto: string | null, nomeArquivo: string | null): void {
  if (!xmlTexto) return
  const blob = new Blob([xmlTexto], { type: 'application/xml' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = nomeArquivo || 'documento.xml'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

export function formatXml(xmlTexto: string | null): string {
  if (!xmlTexto) return ''
  try {
    const parser = new DOMParser()
    const doc = parser.parseFromString(xmlTexto, 'application/xml')
    const serialized = new XMLSerializer().serializeToString(doc)
    let indent = ''
    return serialized
      .replace(/></g, '>\n<')
      .split('\n')
      .map((line) => {
        if (line.match(/^<\/\w/)) indent = indent.substring(2)
        const result = indent + line
        if (line.match(/^<\w[^>]*[^/]>.*$/) && !line.includes('</') && !line.endsWith('/>'))
          indent += '  '
        return result
      })
      .join('\n')
  } catch {
    return xmlTexto
  }
}

export function getStatusBadgeClass(status: string | null): string {
  if (!status) return ''
  const s = normalizeText(status)
  if (s.includes('sincroniz') || s.includes('conclu') || s.includes('processado'))
    return 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20'
  if (s.includes('erro') || s.includes('falh'))
    return 'bg-destructive/10 text-destructive border-destructive/20'
  return 'bg-amber-500/10 text-amber-700 border-amber-500/20'
}

export function getFinancialStatusLabel(v: boolean | null): string {
  if (v === true) return 'Gerado'
  if (v === false) return 'Pendente'
  return '—'
}

export function getFinancialStatusBadgeClass(v: boolean | null): string {
  if (v === true) return 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20'
  if (v === false) return 'bg-amber-500/10 text-amber-700 border-amber-500/20'
  return ''
}
