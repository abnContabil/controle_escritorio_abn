CREATE OR REPLACE FUNCTION public.abn_ensure_profile()
RETURNS public.abn_profiles
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_user_id UUID;
  v_email TEXT;
  v_name TEXT;
  v_profile public.abn_profiles;
BEGIN
  v_user_id := auth.uid();

  IF v_user_id IS NULL THEN
    RETURN NULL;
  END IF;

  SELECT email, COALESCE(raw_user_meta_data->>'name', split_part(email, '@', 1))
  INTO v_email, v_name
  FROM auth.users
  WHERE id = v_user_id;

  INSERT INTO public.abn_profiles (id, email, name, created_at)
  VALUES (v_user_id, v_email, v_name, NOW())
  ON CONFLICT (id) DO NOTHING;

  SELECT * INTO v_profile FROM public.abn_profiles WHERE id = v_user_id;

  RETURN v_profile;
END;
$$;

GRANT EXECUTE ON FUNCTION public.abn_ensure_profile() TO authenticated;
