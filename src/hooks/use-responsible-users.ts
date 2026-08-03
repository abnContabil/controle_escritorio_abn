import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase/client'

export type ResponsibleUser = {
  id: string
  name: string
  email: string
}

export function useResponsibleUsers(companyId: string | undefined) {
  const [users, setUsers] = useState<ResponsibleUser[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!companyId) {
      setUsers([])
      return
    }
    let cancelled = false

    const load = async () => {
      setLoading(true)
      try {
        const { data: company } = await supabase
          .from('abn_companies')
          .select('user_id')
          .eq('id', companyId)
          .single()

        const { data: companyUsers } = await supabase
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

        const { data: profiles } = await supabase
          .from('abn_profiles')
          .select('id, name, email')
          .in('id', allUserIds)

        if (!cancelled) {
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
      } catch (e) {
        console.error('Erro ao buscar responsáveis:', e)
        if (!cancelled) setUsers([])
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [companyId])

  return { users, loading }
}
