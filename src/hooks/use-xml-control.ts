import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase/client'
import { contabilIoDb } from '@/lib/supabase/contabil-io-client'

export type XmlCompany = {
  id: string
  razao_social: string
  cnpj: string | null
}

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
  'id, company_id, type, status, chave_acesso, tipo_documento, numero, serie, data_emissao, valor_total, emitente_cnpj, emitente_nome, destinatario_cnpj, destinatario_nome, nome_arquivo, xml_texto, month_year, natureza_operacao, protocolo_autorizacao, uf_emitente, uf_destinatario, tipo_financeiro, financeiro_gerado, created_at, updated_at'

export function useXmlCompanies() {
  const [companies, setCompanies] = useState<XmlCompany[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCompanies = async () => {
      const { data, error } = await contabilIoDb
        .from('vw_abn_companies_safe')
        .select('id, razao_social, cnpj')
        .order('created_at', { ascending: false })

      if (error) {
        setError('Não foi possível carregar a lista de empresas.')
        setCompanies([])
      } else {
        setCompanies(data || [])
      }
      setLoading(false)
    }
    fetchCompanies()
  }, [])

  return { companies, loading, error }
}

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

    let query = supabase
      .from('abn_xml_control')
      .select(XML_SELECT_COLUMNS)
      .eq('company_id', companyId)
      .order('created_at', { ascending: false })

    if (monthYear) {
      query = query.eq('month_year', monthYear)
    }

    const { data, error } = await query

    if (error) {
      setError('Não foi possível carregar os documentos. Verifique sua conexão e tente novamente.')
      setRecords([])
    } else {
      setRecords((data || []) as XmlControlRecord[])
    }
    setLoading(false)
  }, [companyId, monthYear])

  useEffect(() => {
    fetchXmls()
  }, [fetchXmls])

  return { records, loading, error, refetch: fetchXmls }
}
