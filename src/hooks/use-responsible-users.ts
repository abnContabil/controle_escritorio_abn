import { useState, useEffect } from 'react'
import { contabilIoDb } from '@/lib/supabase/contabil-io-client'

export type ResponsibleUser = {
  id: string
  name: string
  email: string
}

// Carrega usuários responsáveis a partir dos perfis reais do schema
// contabil_io. Sem companyId, retorna todos os perfis visíveis (usado pelos
// filtros globais da central); com companyId, apenas os vínculos da empresa.
export function useResponsibleUsers(companyId?: string) {
  const [users, setUsers] = useState<ResponsibleUser[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [reload, setReload] = useState(0)

  useEffect(() => {
    let cancelled = false

    const load = async () => {
      setLoading(true)
      setError(null)
      try {
        if (companyId) {
          const { data: company } = await contabilIoDb
            .from('abn_companies')
            .select('user_id')
            .eq('id', companyId)
            .single()

          const { data: companyUsers } = await contabilIoDb
            .from('abn_company_users')
            .select('user_id')
            .eq('company_id', companyId)
            .eq('status', 'ativo')

          const ownerUserId = company?.user_id
          const memberUserIds = (companyUsers || []).map((cu: { user_id: string }) => cu.user_id)
          const allUserIds = Array.from(
            new Set([ownerUserId, ...memberUserIds].filter(Boolean) as string[]),
          )

          if (allUserIds.length === 0) {
            if (!cancelled) setUsers([])
            return
          }

          const { data: profiles, error: profilesError } = await contabilIoDb
            .from('abn_profiles')
            .select('id, name, email')
            .in('id', allUserIds)

          if (!cancelled) {
            if (profilesError) {
              console.error('Erro ao buscar responsáveis:', profilesError)
              setError('Não foi possível carregar os responsáveis.')
              setUsers([])
            } else {
              setUsers(
                (profiles || []).map(
                  (p: { id: string; name: string | null; email: string | null }) => ({
                    id: p.id,
                    name: p.name || 'Sem nome',
                    email: p.email || '',
                  }),
                ),
              )
            }
          }
        } else {
          const { data: profiles, error: profilesError } = await contabilIoDb
            .from('abn_profiles')
            .select('id, name, email')
            .order('name', { ascending: true })

          if (!cancelled) {
            if (profilesError) {
              console.error('Erro ao buscar responsáveis:', profilesError)
              setError('Não foi possível carregar os responsáveis.')
              setUsers([])
            } else {
              setUsers(
                (profiles || []).map(
                  (p: { id: string; name: string | null; email: string | null }) => ({
                    id: p.id,
                    name: p.name || 'Sem nome',
                    email: p.email || '',
                  }),
                ),
              )
            }
          }
        }
      } catch (e) {
        console.error('Erro ao buscar responsáveis:', e)
        if (!cancelled) {
          setError('Não foi possível carregar os responsáveis.')
          setUsers([])
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [companyId, reload])

  const refetch = () => setReload((n) => n + 1)

  return { users, loading, error, refetch }
}
