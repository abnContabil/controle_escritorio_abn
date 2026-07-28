import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase/client'
import { useToast } from '@/hooks/use-toast'

export type AbnCompany = {
  id: string
  razao_social: string
  cnpj: string
  regime_tributario: string
  uf: string
  email: string
  whatsapp: string
  status: string
  active: boolean
}

export function useAbnCompanies() {
  const [companies, setCompanies] = useState<AbnCompany[]>([])
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  const fetchCompanies = useCallback(async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('vw_abn_companies_safe')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Erro ao buscar empresas:', error)
      toast({
        title: 'Erro ao buscar empresas',
        description: 'Não foi possível carregar a lista de empresas. Tente novamente.',
        variant: 'destructive',
      })
    } else {
      setCompanies(data || [])
    }
    setLoading(false)
  }, [toast])

  useEffect(() => {
    fetchCompanies()
  }, [fetchCompanies])

  const saveCompany = async (company: Partial<AbnCompany>) => {
    const { data: userData } = await supabase.auth.getUser()
    const userId = userData.user?.id

    if (!userId) {
      toast({
        title: 'Erro',
        description: 'Usuário não autenticado. Faça login novamente.',
        variant: 'destructive',
      })
      return false
    }

    if (company.id) {
      const updateData: Record<string, unknown> = {
        ...company,
        updated_at: new Date().toISOString(),
      }
      if (company.status === 'Ativo') updateData.active = true
      if (company.status === 'Inativo') updateData.active = false

      const { error } = await supabase.from('abn_companies').update(updateData).eq('id', company.id)

      if (error) {
        console.error('Erro ao atualizar empresa:', error)
        toast({
          title: 'Erro ao atualizar empresa',
          description: error.message,
          variant: 'destructive',
        })
        return false
      }
      toast({ title: 'Sucesso', description: 'Empresa atualizada com sucesso' })
    } else {
      const insertData: Record<string, unknown> = { ...company, user_id: userId }
      if (company.status === 'Ativo' || !company.status) insertData.active = true
      if (company.status === 'Inativo') insertData.active = false

      const { error } = await supabase.from('abn_companies').insert([insertData])

      if (error) {
        console.error('Erro ao cadastrar empresa:', error)
        toast({
          title: 'Erro ao cadastrar empresa',
          description: error.message,
          variant: 'destructive',
        })
        return false
      }
      toast({ title: 'Sucesso', description: 'Empresa cadastrada com sucesso' })
    }

    fetchCompanies()
    return true
  }

  const toggleCompanyStatus = async (company: AbnCompany) => {
    const isActive = company.active ?? company.status === 'Ativo'
    const newActive = !isActive
    const newStatus = newActive ? 'Ativo' : 'Inativo'

    const { error } = await supabase
      .from('abn_companies')
      .update({
        active: newActive,
        status: newStatus,
        updated_at: new Date().toISOString(),
      })
      .eq('id', company.id)

    if (error) {
      console.error('Erro ao atualizar status da empresa:', error)
      toast({
        title: newActive ? 'Erro ao reativar empresa' : 'Erro ao inativar empresa',
        description: 'Não foi possível atualizar o status da empresa. Tente novamente.',
        variant: 'destructive',
      })
      return false
    }

    toast({
      title: 'Sucesso',
      description: newActive ? 'Empresa reativada com sucesso.' : 'Empresa inativada com sucesso.',
    })
    fetchCompanies()
    return true
  }

  return { companies, loading, saveCompany, toggleCompanyStatus, refetch: fetchCompanies }
}
