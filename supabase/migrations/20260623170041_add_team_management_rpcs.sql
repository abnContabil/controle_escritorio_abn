DO $$
BEGIN
  -- Create the add user function
  CREATE OR REPLACE FUNCTION public.abn_add_company_user(p_company_id UUID, p_email TEXT, p_role TEXT)
  RETURNS JSONB
  LANGUAGE plpgsql
  SECURITY DEFINER
  AS $func$
  DECLARE
    v_user_id UUID;
    v_exists BOOLEAN;
  BEGIN
    -- Find user by email
    SELECT id INTO v_user_id FROM public.abn_profiles WHERE email = p_email LIMIT 1;
    
    IF v_user_id IS NULL THEN
      RAISE EXCEPTION 'Usuário ainda não existe. Cadastre primeiro no Supabase Authentication ou implemente convite por e-mail.';
    END IF;

    -- Check if already exists in company
    SELECT TRUE INTO v_exists FROM public.abn_company_users WHERE company_id = p_company_id AND user_id = v_user_id LIMIT 1;
    IF v_exists THEN
      RAISE EXCEPTION 'Usuário já está vinculado a esta empresa.';
    END IF;

    INSERT INTO public.abn_company_users (company_id, user_id, role, created_by)
    VALUES (p_company_id, v_user_id, p_role, auth.uid());

    RETURN jsonb_build_object('success', true);
  END;
  $func$;

  -- Create the update user function
  CREATE OR REPLACE FUNCTION public.abn_update_company_user(p_company_id UUID, p_user_id UUID, p_role TEXT, p_status TEXT)
  RETURNS JSONB
  LANGUAGE plpgsql
  SECURITY DEFINER
  AS $func$
  BEGIN
    UPDATE public.abn_company_users
    SET role = p_role, status = p_status, updated_at = NOW()
    WHERE company_id = p_company_id AND user_id = p_user_id;

    RETURN jsonb_build_object('success', true);
  END;
  $func$;
END $$;
