DO $$
BEGIN
  -- abn_profiles
  CREATE TABLE IF NOT EXISTS public.abn_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT,
    email TEXT,
    role TEXT DEFAULT 'Auxiliar',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  );

  -- abn_companies
  CREATE TABLE IF NOT EXISTS public.abn_companies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    razao_social TEXT NOT NULL,
    cnpj TEXT NOT NULL,
    regime_tributario TEXT NOT NULL,
    uf TEXT,
    email TEXT,
    whatsapp TEXT,
    status TEXT DEFAULT 'Ativo',
    logo_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  );

  -- abn_xml_control
  CREATE TABLE IF NOT EXISTS public.abn_xml_control (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID NOT NULL REFERENCES public.abn_companies(id) ON DELETE CASCADE,
    month_year TEXT NOT NULL,
    type TEXT NOT NULL,
    status TEXT DEFAULT 'Pendente',
    updated_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  );

  -- abn_obligations
  CREATE TABLE IF NOT EXISTS public.abn_obligations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID NOT NULL REFERENCES public.abn_companies(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    due_date DATE NOT NULL,
    status TEXT DEFAULT 'Pendente',
    type TEXT,
    updated_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  );
END $$;

-- RLS Config
ALTER TABLE public.abn_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.abn_companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.abn_xml_control ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.abn_obligations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "abn_profiles_policy" ON public.abn_profiles;
CREATE POLICY "abn_profiles_policy" ON public.abn_profiles FOR ALL TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "abn_companies_policy" ON public.abn_companies;
CREATE POLICY "abn_companies_policy" ON public.abn_companies FOR ALL TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "abn_xml_control_policy" ON public.abn_xml_control;
CREATE POLICY "abn_xml_control_policy" ON public.abn_xml_control FOR ALL TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "abn_obligations_policy" ON public.abn_obligations;
CREATE POLICY "abn_obligations_policy" ON public.abn_obligations FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Auto Create Profile Trigger
CREATE OR REPLACE FUNCTION public.handle_abn_new_user()
RETURNS trigger AS $func$
BEGIN
  INSERT INTO public.abn_profiles (id, email, name)
  VALUES (NEW.id, NEW.email, COALESCE(NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)))
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$func$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created_abn ON auth.users;
CREATE TRIGGER on_auth_user_created_abn
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_abn_new_user();
