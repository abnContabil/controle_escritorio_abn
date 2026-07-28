import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase/client'
import { useToast } from '@/hooks/use-toast'

export type AbnObligation = {
  id: string
  company_id: string
  name: string
  due_date: string
  status: string
  type: string
}

export function useAbnObligations() {
  const [obligations, setObligations] = useState<AbnObligation[]>([])
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  const fetchObligations = useCallback(async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('abn_obligations')
      .select('*')
      .order('due_date', { ascending: true })

    if (error) {
      toast({
        title: 'Erro ao buscar obrigações',
        description: error.message,
        variant: 'destructive',
      })
    } else {
      setObligations((data as any) || [])
    }
    setLoading(false)
  }, [toast])

  useEffect(() => {
    fetchObligations()
  }, [fetchObligations])

  const saveObligation = async (obligation: Partial<AbnObligation>) => {
    const { data: userData } = await supabase.auth.getUser()
    const userId = userData.user?.id

    if (!userId) {
      toast({ title: 'Erro', description: 'Usuário não autenticado', variant: 'destructive' })
      return false
    }

    const { ...dataToSave } = obligation

    if (dataToSave.id) {
      const { error } = await supabase
        .from('abn_obligations')
        .update({ ...dataToSave, updated_at: new Date().toISOString(), updated_by: userId })
        .eq('id', dataToSave.id)

      if (error) {
        toast({ title: 'Erro ao atualizar', description: error.message, variant: 'destructive' })
        return false
      }
      toast({ title: 'Sucesso', description: 'Obrigação atualizada com sucesso' })
    } else {
      const { error } = await supabase
        .from('abn_obligations')
        .insert([{ ...dataToSave, updated_by: userId }])

      if (error) {
        toast({ title: 'Erro ao cadastrar', description: error.message, variant: 'destructive' })
        return false
      }
      toast({ title: 'Sucesso', description: 'Obrigação cadastrada com sucesso' })
    }

    fetchObligations()
    return true
  }

  const deleteObligation = async (id: string) => {
    const { error } = await supabase.from('abn_obligations').delete().eq('id', id)
    if (error) {
      toast({ title: 'Erro ao excluir', description: error.message, variant: 'destructive' })
      return false
    }
    toast({ title: 'Sucesso', description: 'Obrigação excluída com sucesso' })
    fetchObligations()
    return true
  }

  return { obligations, loading, saveObligation, deleteObligation, refetch: fetchObligations }
}
