import 'jsr:@supabase/functions-js/edge-runtime.d.ts'
import { createClient } from 'jsr:@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

const VALID_ROLES = ['proprietario', 'administrador', 'colaborador', 'visualizador']

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
    const anonKey = Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''

    const authHeader = req.headers.get('Authorization')
    if (!authHeader) throw new Error('Missing Authorization header')
    const token = authHeader.replace('Bearer ', '')

    const supabaseClient = createClient(supabaseUrl, anonKey)
    const {
      data: { user },
      error: authError,
    } = await supabaseClient.auth.getUser(token)
    if (authError || !user) throw new Error('Unauthorized')

    const body = await req.json()
    const { fazenda_id } = body
    if (!fazenda_id) throw new Error('fazenda_id is required')

    const { data: farm } = await supabaseClient
      .from('gado_fazendas')
      .select('owner_user_id')
      .eq('id', fazenda_id)
      .maybeSingle()

    const isOwner = farm?.owner_user_id === user.id

    const { data: requester } = await supabaseClient
      .from('gado_fazenda_usuarios')
      .select('papel')
      .eq('fazenda_id', fazenda_id)
      .eq('user_id', user.id)
      .maybeSingle()

    const isAdminRole =
      requester && (requester.papel === 'proprietario' || requester.papel === 'administrador')

    if (!isOwner && !isAdminRole) {
      throw new Error('Forbidden: Apenas proprietários e administradores podem gerenciar membros')
    }

    const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey)
    const method = req.method

    if (method === 'POST') {
      const { email, nome, papel } = body
      if (!VALID_ROLES.includes(papel)) throw new Error('Papel inválido')

      let userId: string

      const { data: inviteData, error: inviteError } =
        await supabaseAdmin.auth.admin.inviteUserByEmail(email, {
          data: { name: nome },
        })

      if (!inviteError && inviteData.user) {
        userId = inviteData.user.id
      } else {
        const { data: existingMember } = await supabaseAdmin
          .from('gado_fazenda_usuarios')
          .select('user_id')
          .eq('email', email)
          .limit(1)
          .maybeSingle()

        if (existingMember) {
          userId = existingMember.user_id
        } else {
          throw new Error(
            'Não foi possível convidar o usuário. Verifique se o e-mail está correto.',
          )
        }
      }

      const { error: insertError } = await supabaseAdmin
        .from('gado_fazenda_usuarios')
        .insert({ fazenda_id, user_id: userId, nome, email, papel, status: 'ativo' })

      if (insertError) {
        if (insertError.code === '23505') throw new Error('Este usuário já é membro desta fazenda.')
        throw insertError
      }

      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    if (method === 'PATCH') {
      const { id, papel, nome, status } = body
      const updates: Record<string, string> = { updated_at: new Date().toISOString() }
      if (nome !== undefined) updates.nome = nome
      if (papel !== undefined) {
        if (!VALID_ROLES.includes(papel)) throw new Error('Papel inválido')
        updates.papel = papel
      }
      if (status !== undefined) updates.status = status

      const { error } = await supabaseAdmin
        .from('gado_fazenda_usuarios')
        .update(updates)
        .eq('id', id)
        .eq('fazenda_id', fazenda_id)
      if (error) throw error

      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    if (method === 'DELETE') {
      const { id } = body
      const { error } = await supabaseAdmin
        .from('gado_fazenda_usuarios')
        .delete()
        .eq('id', id)
        .eq('fazenda_id', fazenda_id)
      if (error) throw error

      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    return new Response('Method not allowed', { status: 405, headers: corsHeaders })
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
