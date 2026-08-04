import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase/client'

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
  data_emissao: string | null
  valor_total: number | null
  emitente_nome: string | null
  nome_arquivo: string | null
  created_at: string | null
}

export type XmlIndicators = {
  sincronizados: number
  pendentes: number
  erros: number
}

function categorizeStatus(status: string | null): 'success' | 'pending' | 'error' {
  if (!status) return 'pending'
  const s = status.toLowerCase()
  if (s.includes('sincroniz') || s.includes('conclu') || s.includes('processado')) return 'success'
  if (s.includes('erro') || s.includes('falh')) return 'error'
  return 'pending'
}

export function computeIndicators(records: XmlControlRecord[]): XmlIndicators {
  return records.reduce(
    (acc, r) => {
      const cat = categorizeStatus(r.status)
      if (cat === 'success') acc.sincronizados++
      else if (cat === 'pending') acc.pendentes++
      else acc.erros++
      return acc
    },
    { sincronizados: 0, pendentes: 0, erros: 0 },
  )
}

export function useXmlCompanies() {
  const [companies, setCompanies] = useState<XmlCompany[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCompanies = async () => {
      const { data, error } = await supabase
        .from('abn_companies')
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

export function useXmlControl(companyId: string | null) {
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
    const { data, error } = await supabase
      .from('abn_xml_control')
      .select('*')
      .eq('company_id', companyId)
      .order('created_at', { ascending: false })

    if (error) {
      setError('Não foi possível carregar os documentos. Verifique sua conexão e tente novamente.')
      setRecords([])
    } else {
      setRecords((data || []) as XmlControlRecord[])
    }
    setLoading(false)
  }, [companyId])

  useEffect(() => {
    fetchXmls()
  }, [fetchXmls])

  return { records, loading, error, refetch: fetchXmls }
}
