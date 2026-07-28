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
      toast({
        title: 'Erro ao buscar empresas',
        description: error.message,
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
      toast({ title: 'Erro', description: 'Usuário não autenticado', variant: 'destructive' })
      return false
    }

    if (company.id) {
      const { error } = await supabase
        .from('abn_companies')
        .update({ ...company, updated_at: new Date().toISOString() })
        .eq('id', company.id)

      if (error) {
        toast({ title: 'Erro ao atualizar', description: error.message, variant: 'destructive' })
        return false
      }
      toast({ title: 'Sucesso', description: 'Empresa atualizada com sucesso' })
    } else {
      const { error } = await supabase
        .from('abn_companies')
        .insert([{ ...company, user_id: userId }])

      if (error) {
        toast({ title: 'Erro ao cadastrar', description: error.message, variant: 'destructive' })
        return false
      }
      toast({ title: 'Sucesso', description: 'Empresa cadastrada com sucesso' })
    }

    fetchCompanies()
    return true
  }

  const deleteCompany = async (id: string) => {
    const { error } = await supabase.from('abn_companies').delete().eq('id', id)
    if (error) {
      toast({ title: 'Erro ao excluir', description: error.message, variant: 'destructive' })
      return false
    }
    toast({ title: 'Sucesso', description: 'Empresa excluída com sucesso' })
    fetchCompanies()
    return true
  }

  return { companies, loading, saveCompany, deleteCompany, refetch: fetchCompanies }
}
