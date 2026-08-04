import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase/client'

export type XmlControlRecord = {
  id: string
  company_id: string
  type: string | null
  status: string | null
  chave_acesso: string | null
  tipo_documento: string | null
  numero: string | null
  serie: string | null
  data_emissao: string | null
  valor_total: number | null
  emitente_cnpj: string | null
  emitente_nome: string | null
  destinatario_cnpj: string | null
  destinatario_nome: string | null
  nome_arquivo: string | null
  xml_texto: string | null
  month_year: string | null
  natureza_operacao: string | null
  protocolo_autorizacao: string | null
  uf_emitente: string | null
  uf_destinatario: string | null
  tipo_financeiro: string | null
  financeiro_gerado: boolean | null
  financeiro_gerado_em: string | null
  lancamento_id: string | null
  created_at: string | null
  updated_at: string | null
}

export type XmlIndicators = {
  total: number
  valorTotal: number
  processados: number
  pendentes: number
}

function isProcessedStatus(status: string | null): boolean {
  if (!status) return false
  const s = status.toLowerCase()
  return s.includes('sincroniz') || s.includes('conclu') || s.includes('processado')
}

export function computeIndicators(records: XmlControlRecord[]): XmlIndicators {
  return records.reduce(
    (acc, r) => {
      acc.total++
      acc.valorTotal += r.valor_total ?? 0
      if (isProcessedStatus(r.status)) acc.processados++
      else acc.pendentes++
      return acc
    },
    { total: 0, valorTotal: 0, processados: 0, pendentes: 0 },
  )
}

const XML_SELECT_COLUMNS =
  'id, company_id, type, status, chave_acesso, tipo_documento, numero, serie, data_emissao, valor_total, emitente_cnpj, emitente_nome, destinatario_cnpj, destinatario_nome, nome_arquivo, xml_texto, month_year, natureza_operacao, protocolo_autorizacao, uf_emitente, uf_destinatario, tipo_financeiro, financeiro_gerado, financeiro_gerado_em, lancamento_id, created_at, updated_at'

export function useXmlControl(companyId: string | null, monthYear: string | null) {
  const [records, setRecords] = useState<XmlControlRecord[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchXmls = useCallback(async () => {
    if (!companyId) {
      setRecords([])
      setError(null)
      return
    }
    setLoading(true)
    setError(null)
    let data: XmlControlRecord[] | null = null
    let queryError: { message: string } | null = null

    const rpcResult = await supabase.rpc('abn_get_xml_hub', {
      p_company_id: companyId,
      p_month_year: monthYear || null,
      p_limit: 10000,
    })
    if (!rpcResult.error && rpcResult.data) {
      data = rpcResult.data as XmlControlRecord[]
    } else {
      let query = supabase
        .from('abn_xml_control')
        .select(XML_SELECT_COLUMNS)
        .eq('company_id', companyId)
        .order('created_at', { ascending: false })
      if (monthYear) query = query.eq('month_year', monthYear)
      const result = await query
      if (result.error) queryError = result.error
      else data = result.data as XmlControlRecord[]
    }

    if (queryError) {
      setError('Não foi possível carregar os documentos. Verifique sua conexão e tente novamente.')
      setRecords([])
    } else {
      setRecords(data || [])
    }
    setLoading(false)
  }, [companyId, monthYear])

  useEffect(() => {
    fetchXmls()
  }, [fetchXmls])
  return { records, loading, error, refetch: fetchXmls }
}

export type XmlActionResult = { success: boolean; error: string | null }

export async function importXmlTexto(
  companyId: string,
  nomeArquivo: string,
  xmlTexto: string,
): Promise<{ imported: boolean; duplicate: boolean; error: string | null }> {
  const { error } = await supabase.rpc('abn_importar_xml_texto', {
    p_company_id: companyId,
    p_nome_arquivo: nomeArquivo,
    p_xml_texto: xmlTexto,
  })
  if (error) {
    const msg = error.message.toLowerCase()
    if (msg.includes('duplic') || msg.includes('ja existe') || msg.includes('already')) {
      return { imported: false, duplicate: true, error: null }
    }
    return { imported: false, duplicate: false, error: error.message }
  }
  return { imported: true, duplicate: false, error: null }
}

export async function generateFinanceiro(
  companyId: string,
  xmlId: string,
): Promise<XmlActionResult> {
  const { error } = await supabase.rpc('abn_gerar_financeiro_xml_auto', {
    p_company_id: companyId,
    p_xml_id: xmlId,
  })
  if (error) return { success: false, error: error.message }
  return { success: true, error: null }
}

export async function deleteXml(xmlId: string): Promise<XmlActionResult> {
  const { error } = await supabase.rpc('abn_excluir_xml', { p_xml_id: xmlId })
  if (error) return { success: false, error: error.message }
  return { success: true, error: null }
}

export async function updateXmlControlFields(
  xmlId: string,
  fields: { status: string; type: string; month_year: string; natureza_operacao: string },
): Promise<XmlActionResult> {
  const { error } = await supabase
    .from('abn_xml_control')
    .update({
      status: fields.status,
      type: fields.type,
      month_year: fields.month_year,
      natureza_operacao: fields.natureza_operacao,
      updated_at: new Date().toISOString(),
    })
    .eq('id', xmlId)
  if (error) return { success: false, error: error.message }
  return { success: true, error: null }
}
