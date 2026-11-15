import { supabase } from '@/lib/supabase/client'
import type { SupabaseClient } from '@supabase/supabase-js'

// O schema contabil_io NÃO faz parte do Database gerado em types.ts (que
// descreve apenas o schema public). Por isso o cliente é intencionalmente
// loosamente tipado: as consultas passam a aceitar qualquer tabela, view ou
// função do schema contabil_io sem conflito com os tipos do schema public.
export const contabilIoDb = supabase.schema('contabil_io' as any) as unknown as SupabaseClient<any>
