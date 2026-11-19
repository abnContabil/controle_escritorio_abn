// Credenciais fixas do projeto Supabase (fallback quando não há env de build).
// NUNCA usar service_role ou outra chave secreta aqui — apenas chave pública (publishable/anon).
// Alterado por pedido do usuário: projeto pqwedttfxgbkxwpzsuau.
import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

const FALLBACK_URL = 'https://pqwedttfxgbkxwpzsuau.supabase.co'
const FALLBACK_PUBLISHABLE_KEY = 'sb_publishable_gGWC_KeIkzsfkaujnMfzQg_pWR8bGoO'

const SUPABASE_URL =
  (import.meta.env.VITE_SUPABASE_URL as string | undefined)?.trim() || FALLBACK_URL
const SUPABASE_PUBLISHABLE_KEY =
  (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined)?.trim() ||
  FALLBACK_PUBLISHABLE_KEY

// Import the supabase client like this:
// import { supabase } from "@/lib/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  },
})
