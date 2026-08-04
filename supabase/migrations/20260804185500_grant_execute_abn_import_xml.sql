-- Grant EXECUTE on abn_importar_xml_texto and all abn_* helper functions to authenticated role
-- Fixes: HTTP 403 / Postgres 42501 "permission denied for function abn_importar_xml_texto"

-- 1. Grant on the specific import function (idempotent — GRANT is naturally safe to re-run)
GRANT EXECUTE ON FUNCTION public.abn_importar_xml_texto(UUID, TEXT, TEXT) TO authenticated;

-- 2. Dynamically grant EXECUTE on ALL abn_* functions in public schema to authenticated
--    This covers any helper functions called internally during the import path
DO $$
DECLARE
  fn RECORD;
BEGIN
  FOR fn IN
    SELECT p.oid,
           pg_get_function_identity_arguments(p.oid) AS args
    FROM pg_proc p
    JOIN pg_namespace n ON p.pronamespace = n.oid
    WHERE n.nspname = 'public'
      AND p.proname LIKE 'abn_%'
  LOOP
    BEGIN
      EXECUTE format('GRANT EXECUTE ON FUNCTION public.%I(%s) TO authenticated',
                     fn.oid::regprocedure::text);
    EXCEPTION WHEN OTHERS THEN
      -- Skip if grant fails for any reason (e.g., function dropped concurrently)
      NULL;
    END;
  END LOOP;
END $$;
