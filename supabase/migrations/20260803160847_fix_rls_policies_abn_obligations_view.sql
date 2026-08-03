-- Fix RLS policies for tables referenced by vw_abn_obligations_operational
-- Ensures authenticated role can SELECT from abn_companies, abn_obligations,
-- abn_obligation_checklist, abn_obligation_history, abn_company_users, abn_profiles

-- Ensure RLS is enabled on all referenced tables
ALTER TABLE public.abn_companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.abn_obligations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.abn_obligation_checklist ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.abn_obligation_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.abn_company_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.abn_profiles ENABLE ROW LEVEL SECURITY;

-- Grant table-level SELECT to authenticated role (needed for security_invoker views)
GRANT SELECT ON public.abn_companies TO authenticated;
GRANT SELECT ON public.abn_obligations TO authenticated;
GRANT SELECT ON public.abn_obligation_checklist TO authenticated;
GRANT SELECT ON public.abn_obligation_history TO authenticated;
GRANT SELECT ON public.abn_company_users TO authenticated;
GRANT SELECT ON public.abn_profiles TO authenticated;

-- abn_companies SELECT policy
DROP POLICY IF EXISTS "abn_companies_select_authenticated" ON public.abn_companies;
CREATE POLICY "abn_companies_select_authenticated" ON public.abn_companies
  FOR SELECT TO authenticated USING (true);

-- abn_obligations SELECT policy
DROP POLICY IF EXISTS "abn_obligations_select_authenticated" ON public.abn_obligations;
CREATE POLICY "abn_obligations_select_authenticated" ON public.abn_obligations
  FOR SELECT TO authenticated USING (true);

-- abn_obligation_checklist SELECT policy
DROP POLICY IF EXISTS "abn_obligation_checklist_select_authenticated" ON public.abn_obligation_checklist;
CREATE POLICY "abn_obligation_checklist_select_authenticated" ON public.abn_obligation_checklist
  FOR SELECT TO authenticated USING (true);

-- abn_obligation_history SELECT policy
DROP POLICY IF EXISTS "abn_obligation_history_select_authenticated" ON public.abn_obligation_history;
CREATE POLICY "abn_obligation_history_select_authenticated" ON public.abn_obligation_history
  FOR SELECT TO authenticated USING (true);

-- abn_company_users SELECT policy
DROP POLICY IF EXISTS "abn_company_users_select_authenticated" ON public.abn_company_users;
CREATE POLICY "abn_company_users_select_authenticated" ON public.abn_company_users
  FOR SELECT TO authenticated USING (true);

-- abn_profiles SELECT policy
DROP POLICY IF EXISTS "abn_profiles_select_authenticated" ON public.abn_profiles;
CREATE POLICY "abn_profiles_select_authenticated" ON public.abn_profiles
  FOR SELECT TO authenticated USING (true);
