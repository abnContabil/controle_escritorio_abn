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

export function getStatusBadgeClass(status: string | null): string {
  if (!status) return ''
  const s = normalizeText(status)
  if (s.includes('sincroniz') || s.includes('conclu') || s.includes('processado'))
    return 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20'
  if (s.includes('erro') || s.includes('falh'))
    return 'bg-destructive/10 text-destructive border-destructive/20'
  return 'bg-amber-500/10 text-amber-700 border-amber-500/20'
}

export function getPartyName(record: XmlControlRecord): string {
  const t = normalizeText(record.type)
  if (t.includes('entrada')) return record.emitente_nome || '—'
  if (t.includes('saida')) return record.destinatario_nome || '—'
  return record.emitente_nome || record.destinatario_nome || '—'
}
