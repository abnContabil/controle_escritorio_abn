import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase/client'
import { contabilIoDb } from '@/lib/supabase/contabil-io-client'
import { useToast } from '@/hooks/use-toast'

export type AbnObligationOperational = {
  id: string
  company_id: string
  name: string
  type: string
  status: string
  workflow_status: string
  due_date: string
  competencia: string
  responsible_user_id: string | null
  responsible_name: string | null
  responsible_email: string | null
  priority: string | null
  guide_status: string | null
  progress_percentage: number
  kanban_position: number
  company_name: string
  company_active: boolean
  regime_tributario: string | null
  uf: string | null
  days_to_due: number | null
  is_overdue: boolean
  urgency: string | null
  checklist_total: number | null
  checklist_completed: number | null
  calculated_progress_percentage: number | null
  completed_at: string | null
  completed_by: string | null
  notes: string | null
  cnpj: string | null
  created_at: string
  updated_at: string
}

export type AbnObligation = AbnObligationOperational

export type AbnObligationsIndicators = {
  atrasadas: number
  vencem_hoje: number
  proximos_7_dias: number
  aguardando_cliente: number
  concluidas_no_mes: number
  total_competencia_atual: number
}

export type AbnObligationInput = {
  id?: string
  company_id?: string
  name?: string
  due_date?: string
  status?: string
  type?: string
  competencia?: string
  responsible_user_id?: string | null
  priority?: string
  guide_status?: string
  notes?: string
  progress_percentage?: number
  kanban_position?: number
}

const OBLIGATION_FIELDS =
  'id, company_id, name, type, status, workflow_status, due_date, competencia, responsible_user_id, responsible_name, responsible_email, priority, guide_status, progress_percentage, kanban_position, company_name, company_active, regime_tributario, uf, days_to_due, is_overdue, urgency, checklist_total, checklist_completed, calculated_progress_percentage, completed_at, completed_by, notes, cnpj, created_at, updated_at'

export function useAbnObligations() {
  const [obligations, setObligations] = useState<AbnObligationOperational[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [updating, setUpdating] = useState(false)
  const { toast } = useToast()

  const fetchObligations = useCallback(async () => {
    setLoading(true)
    setError(null)
    const { data, error: err } = await contabilIoDb
      .from('vw_abn_obligations_operational')
      .select(OBLIGATION_FIELDS)
      .order('kanban_position', { ascending: true })

    if (err) {
      console.error('Erro ao buscar obrigações:', err)
      setError('Não foi possível carregar as obrigações. Tente novamente.')
      setObligations([])
    } else {
      setObligations((data as AbnObligationOperational[]) || [])
    }
    setLoading(false)
  }, [])

  const refetch = useCallback(() => {
    fetchObligations()
  }, [fetchObligations])

  useEffect(() => {
    refetch()
  }, [refetch])

  const saveObligation = async (obligation: AbnObligationInput) => {
    const { data: userData } = await supabase.auth.getUser()
    const userId = userData.user?.id

    if (!userId) {
      toast({ title: 'Erro', description: 'Usuário não autenticado', variant: 'destructive' })
      return false
    }

    const { id, project_id, project_id2, ...rawData } = obligation as Record<string, unknown>

    const dataToSave: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(rawData)) {
      if (value !== undefined) {
        dataToSave[key] = value
      }
    }

    if (
      typeof dataToSave.competencia === 'string' &&
      /^\d{4}-\d{2}$/.test(dataToSave.competencia)
    ) {
      dataToSave.competencia = `${dataToSave.competencia}-01`
    }

    if (id) {
      const { error: err } = await contabilIoDb
        .from('abn_obligations')
        .update({ ...dataToSave, updated_at: new Date().toISOString(), updated_by: userId })
        .eq('id', id)

      if (err) {
        toast({ title: 'Erro ao atualizar', description: err.message, variant: 'destructive' })
        return false
      }
      toast({ title: 'Sucesso', description: 'Obrigação atualizada com sucesso' })
    } else {
      const { error: err } = await contabilIoDb
        .from('abn_obligations')
        .insert([{ ...dataToSave, updated_by: userId }])

      if (err) {
        toast({ title: 'Erro ao cadastrar', description: err.message, variant: 'destructive' })
        return false
      }
      toast({ title: 'Sucesso', description: 'Obrigação cadastrada com sucesso' })
    }

    refetch()
    return true
  }

  const deleteObligation = async (id: string) => {
    const { error: err } = await contabilIoDb.from('abn_obligations').delete().eq('id', id)
    if (err) {
      toast({ title: 'Erro ao excluir', description: err.message, variant: 'destructive' })
      return false
    }
    toast({ title: 'Sucesso', description: 'Obrigação excluída com sucesso' })
    refetch()
    return true
  }

  const updateStatus = async (id: string, status: string) => {
    setUpdating(true)
    const { data, error: err } = await contabilIoDb.rpc('abn_set_obligation_status', {
      p_obligation_id: id,
      p_status: status,
    })
    if (err) {
      console.error('Erro ao alterar status da obrigação:', err)
      toast({
        title: 'Erro',
        description: 'Não foi possível alterar o status. Tente novamente.',
        variant: 'destructive',
      })
      setUpdating(false)
      return false
    }
    if (
      data &&
      typeof data === 'object' &&
      'success' in data &&
      (data as { success: boolean }).success === false
    ) {
      const msg = (data as { message?: string }).message || 'Não foi possível alterar o status.'
      toast({ title: 'Erro', description: msg, variant: 'destructive' })
      setUpdating(false)
      return false
    }
    toast({ title: 'Sucesso', description: 'Status alterado com sucesso' })
    setUpdating(false)
    refetch()
    return true
  }

  return {
    obligations,
    loading,
    error,
    updating,
    saveObligation,
    deleteObligation,
    updateStatus,
    refetch,
  }
}
