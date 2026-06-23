import 'jsr:@supabase/functions-js/edge-runtime.d.ts'
import { createClient } from 'jsr:@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    )

    const authHeader = req.headers.get('Authorization')
    if (!authHeader) throw new Error('Missing Authorization header')
    const token = authHeader.replace('Bearer ', '')
    const {
      data: { user },
      error: authError,
    } = await supabaseAdmin.auth.getUser(token)
    if (authError || !user) throw new Error('Unauthorized')

    const { data: profile, error: profileError } = await supabaseAdmin
      .from('profiles')
      .select('is_admin')
      .eq('id', user.id)
      .single()

    if (profileError || !profile?.is_admin) {
      throw new Error('Forbidden: Admins only')
    }

    const method = req.method

    if (method === 'POST') {
      const body = await req.json()
      const { email, name, role, phone, company_id } = body
      if (!company_id) throw new Error('company_id is required')

      const { data, error } = await supabaseAdmin.auth.admin.inviteUserByEmail(email, {
        data: { name },
      })
      if (error) throw error

      if (data.user) {
        await supabaseAdmin
          .from('profiles')
          .update({
            is_admin: role === 'Administrador' || role === 'admin',
            name,
            role: role || 'user',
            status: 'Pendente',
            phone: phone || null,
          })
          .eq('id', data.user.id)

        await supabaseAdmin.from('company_users').insert({
          company_id,
          user_id: data.user.id,
          perfil: role || 'Recepção',
          ativo: true,
        })
      }

      return new Response(JSON.stringify({ user: data.user }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    if (method === 'PATCH') {
      const body = await req.json()
      const { id, name, email, role, status, phone, password, company_id } = body
      if (!company_id) throw new Error('company_id is required')

      const updates: any = {}
      if (name) updates.user_metadata = { name }
      if (email) updates.email = email
      if (password) updates.password = password

      if (Object.keys(updates).length > 0) {
        const { error } = await supabaseAdmin.auth.admin.updateUserById(id, updates)
        if (error) throw error
      }

      const profileUpdates: any = {}
      if (name !== undefined) profileUpdates.name = name
      if (email !== undefined) profileUpdates.email = email
      if (role !== undefined) {
        profileUpdates.role = role
        profileUpdates.is_admin = role === 'Administrador'
      }
      if (phone !== undefined) profileUpdates.phone = phone
      if (status !== undefined) profileUpdates.status = status

      if (Object.keys(profileUpdates).length > 0) {
        await supabaseAdmin.from('profiles').update(profileUpdates).eq('id', id)
      }

      const companyUpdates: any = {}
      if (role !== undefined) companyUpdates.perfil = role
      if (status !== undefined) companyUpdates.ativo = status === 'Ativo'

      if (Object.keys(companyUpdates).length > 0) {
        await supabaseAdmin
          .from('company_users')
          .update(companyUpdates)
          .eq('user_id', id)
          .eq('company_id', company_id)
      }

      return new Response(
        JSON.stringify({ success: true, user: { id, name, email, role, status, phone } }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        },
      )
    }

    if (method === 'DELETE') {
      const body = await req.json()
      const { id, company_id } = body
      if (!company_id) throw new Error('company_id is required')

      const { error } = await supabaseAdmin
        .from('company_users')
        .delete()
        .eq('user_id', id)
        .eq('company_id', company_id)
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
