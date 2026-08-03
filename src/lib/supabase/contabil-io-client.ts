import { supabase } from '@/lib/supabase/client'

export const contabilIoDb = supabase.schema('contabil_io' as any) as typeof supabase
