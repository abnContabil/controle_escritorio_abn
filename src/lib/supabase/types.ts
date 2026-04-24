// AVOID UPDATING THIS FILE DIRECTLY. It is automatically generated.
export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: '14.5'
  }
  public: {
    Tables: {
      abn_companies: {
        Row: {
          cnpj: string
          created_at: string
          email: string | null
          id: string
          logo_url: string | null
          razao_social: string
          regime_tributario: string
          status: string | null
          uf: string | null
          updated_at: string
          user_id: string
          whatsapp: string | null
        }
        Insert: {
          cnpj: string
          created_at?: string
          email?: string | null
          id?: string
          logo_url?: string | null
          razao_social: string
          regime_tributario: string
          status?: string | null
          uf?: string | null
          updated_at?: string
          user_id: string
          whatsapp?: string | null
        }
        Update: {
          cnpj?: string
          created_at?: string
          email?: string | null
          id?: string
          logo_url?: string | null
          razao_social?: string
          regime_tributario?: string
          status?: string | null
          uf?: string | null
          updated_at?: string
          user_id?: string
          whatsapp?: string | null
        }
        Relationships: []
      }
      abn_obligations: {
        Row: {
          company_id: string
          created_at: string
          due_date: string
          id: string
          name: string
          status: string | null
          type: string | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          company_id: string
          created_at?: string
          due_date: string
          id?: string
          name: string
          status?: string | null
          type?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          company_id?: string
          created_at?: string
          due_date?: string
          id?: string
          name?: string
          status?: string | null
          type?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'abn_obligations_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'abn_companies'
            referencedColumns: ['id']
          },
        ]
      }
      abn_profiles: {
        Row: {
          created_at: string
          email: string | null
          id: string
          name: string | null
          role: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id: string
          name?: string | null
          role?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          name?: string | null
          role?: string | null
        }
        Relationships: []
      }
      abn_xml_control: {
        Row: {
          company_id: string
          created_at: string
          id: string
          month_year: string
          status: string | null
          type: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          company_id: string
          created_at?: string
          id?: string
          month_year: string
          status?: string | null
          type: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          company_id?: string
          created_at?: string
          id?: string
          month_year?: string
          status?: string | null
          type?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'abn_xml_control_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'abn_companies'
            referencedColumns: ['id']
          },
        ]
      }
      appointments: {
        Row: {
          created_at: string
          data: Json
          date: string
          id: string
          project_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          data?: Json
          date: string
          id?: string
          project_id?: string
          user_id: string
        }
        Update: {
          created_at?: string
          data?: Json
          date?: string
          id?: string
          project_id?: string
          user_id?: string
        }
        Relationships: []
      }
      audit_logs: {
        Row: {
          action: string
          created_at: string
          details: Json | null
          entity: string
          entity_id: string
          id: string
          user_id: string | null
        }
        Insert: {
          action: string
          created_at?: string
          details?: Json | null
          entity: string
          entity_id: string
          id?: string
          user_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string
          details?: Json | null
          entity?: string
          entity_id?: string
          id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'audit_logs_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      categories: {
        Row: {
          created_at: string
          id: string
          name: string
          project_id: string
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          project_id?: string
          type: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          project_id?: string
          type?: string
          user_id?: string
        }
        Relationships: []
      }
      comandas: {
        Row: {
          created_at: string
          custom_items: Json
          id: string
          is_tip_enabled: boolean
          marks: Json
          mesa: string
          name: string
          payment_amount: number | null
          payment_method: string | null
          phone: string
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          custom_items?: Json
          id: string
          is_tip_enabled?: boolean
          marks?: Json
          mesa?: string
          name?: string
          payment_amount?: number | null
          payment_method?: string | null
          phone?: string
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          custom_items?: Json
          id?: string
          is_tip_enabled?: boolean
          marks?: Json
          mesa?: string
          name?: string
          payment_amount?: number | null
          payment_method?: string | null
          phone?: string
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      companies: {
        Row: {
          active: boolean
          base_fee: number
          cnpj: string
          created_at: string
          email: string | null
          id: string
          name: string
          nr: string
          phone: string | null
          user_id: string
        }
        Insert: {
          active?: boolean
          base_fee?: number
          cnpj: string
          created_at?: string
          email?: string | null
          id?: string
          name: string
          nr: string
          phone?: string | null
          user_id?: string
        }
        Update: {
          active?: boolean
          base_fee?: number
          cnpj?: string
          created_at?: string
          email?: string | null
          id?: string
          name?: string
          nr?: string
          phone?: string | null
          user_id?: string
        }
        Relationships: []
      }
      dish_ingredients: {
        Row: {
          dish_id: string
          id: string
          inventory_id: string
          quantity: number
        }
        Insert: {
          dish_id: string
          id?: string
          inventory_id: string
          quantity?: number
        }
        Update: {
          dish_id?: string
          id?: string
          inventory_id?: string
          quantity?: number
        }
        Relationships: [
          {
            foreignKeyName: 'dish_ingredients_dish_id_fkey'
            columns: ['dish_id']
            isOneToOne: false
            referencedRelation: 'dishes'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'dish_ingredients_inventory_id_fkey'
            columns: ['inventory_id']
            isOneToOne: false
            referencedRelation: 'inventory_items'
            referencedColumns: ['id']
          },
        ]
      }
      dishes: {
        Row: {
          created_at: string
          id: string
          image_url: string | null
          name: string
          price: number
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          image_url?: string | null
          name: string
          price?: number
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          image_url?: string | null
          name?: string
          price?: number
          user_id?: string
        }
        Relationships: []
      }
      inventory_items: {
        Row: {
          created_at: string
          description: string | null
          id: string
          min_stock: number
          name: string
          project_id: string
          quantity: number
          unit: string
          unit_cost: number
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          min_stock?: number
          name: string
          project_id?: string
          quantity?: number
          unit: string
          unit_cost?: number
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          min_stock?: number
          name?: string
          project_id?: string
          quantity?: number
          unit?: string
          unit_cost?: number
          user_id?: string
        }
        Relationships: []
      }
      invitations: {
        Row: {
          created_at: string
          created_by: string | null
          email: string
          expires_at: string
          id: string
          role: string
          status: string
          token: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          email: string
          expires_at?: string
          id?: string
          role?: string
          status?: string
          token?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          email?: string
          expires_at?: string
          id?: string
          role?: string
          status?: string
          token?: string
        }
        Relationships: [
          {
            foreignKeyName: 'invitations_created_by_fkey'
            columns: ['created_by']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          browser_notifications: boolean | null
          created_at: string
          email: string | null
          email_notifications: boolean | null
          id: string
          initial_balance: number
          is_admin: boolean | null
          name: string | null
          organization_name: string
        }
        Insert: {
          avatar_url?: string | null
          browser_notifications?: boolean | null
          created_at?: string
          email?: string | null
          email_notifications?: boolean | null
          id: string
          initial_balance?: number
          is_admin?: boolean | null
          name?: string | null
          organization_name?: string
        }
        Update: {
          avatar_url?: string | null
          browser_notifications?: boolean | null
          created_at?: string
          email?: string | null
          email_notifications?: boolean | null
          id?: string
          initial_balance?: number
          is_admin?: boolean | null
          name?: string | null
          organization_name?: string
        }
        Relationships: []
      }
      project_settings: {
        Row: {
          created_at: string
          id: string
          initial_balance: number
          organization_name: string
          project_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          initial_balance?: number
          organization_name?: string
          project_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          initial_balance?: number
          organization_name?: string
          project_id?: string
          user_id?: string
        }
        Relationships: []
      }
      purchase_items: {
        Row: {
          id: string
          inventory_id: string
          purchase_id: string
          quantity: number
          unit_cost: number
        }
        Insert: {
          id?: string
          inventory_id: string
          purchase_id: string
          quantity?: number
          unit_cost?: number
        }
        Update: {
          id?: string
          inventory_id?: string
          purchase_id?: string
          quantity?: number
          unit_cost?: number
        }
        Relationships: [
          {
            foreignKeyName: 'purchase_items_inventory_id_fkey'
            columns: ['inventory_id']
            isOneToOne: false
            referencedRelation: 'inventory_items'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'purchase_items_purchase_id_fkey'
            columns: ['purchase_id']
            isOneToOne: false
            referencedRelation: 'purchases'
            referencedColumns: ['id']
          },
        ]
      }
      purchases: {
        Row: {
          date: string
          id: string
          supplier: string
          total_cost: number
          user_id: string
        }
        Insert: {
          date?: string
          id?: string
          supplier: string
          total_cost?: number
          user_id: string
        }
        Update: {
          date?: string
          id?: string
          supplier?: string
          total_cost?: number
          user_id?: string
        }
        Relationships: []
      }
      receipts: {
        Row: {
          cnpj: string
          company_id: string | null
          company_name: string
          company_number: string
          created_at: string
          id: string
          month_year: string
          receive_date: string | null
          status: string
          user_id: string
          value: number
        }
        Insert: {
          cnpj: string
          company_id?: string | null
          company_name: string
          company_number: string
          created_at?: string
          id?: string
          month_year: string
          receive_date?: string | null
          status?: string
          user_id?: string
          value?: number
        }
        Update: {
          cnpj?: string
          company_id?: string | null
          company_name?: string
          company_number?: string
          created_at?: string
          id?: string
          month_year?: string
          receive_date?: string | null
          status?: string
          user_id?: string
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: 'receipts_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'companies'
            referencedColumns: ['id']
          },
        ]
      }
      recurring_transactions: {
        Row: {
          active: boolean
          category: string
          created_at: string
          day_of_month: number
          description: string
          id: string
          project_id: string
          type: string
          user_id: string
          value: number
        }
        Insert: {
          active?: boolean
          category: string
          created_at?: string
          day_of_month: number
          description: string
          id?: string
          project_id?: string
          type: string
          user_id: string
          value: number
        }
        Update: {
          active?: boolean
          category?: string
          created_at?: string
          day_of_month?: number
          description?: string
          id?: string
          project_id?: string
          type?: string
          user_id?: string
          value?: number
        }
        Relationships: []
      }
      sales: {
        Row: {
          amount: number
          channel: string
          date: string
          description: string
          id: string
          method: string
          user_id: string
        }
        Insert: {
          amount?: number
          channel: string
          date?: string
          description: string
          id?: string
          method: string
          user_id: string
        }
        Update: {
          amount?: number
          channel?: string
          date?: string
          description?: string
          id?: string
          method?: string
          user_id?: string
        }
        Relationships: []
      }
      transactions: {
        Row: {
          category: string
          created_at: string
          date: string
          description: string
          document_type: string | null
          id: string
          payment_method: string | null
          project_id: string
          quantity: number | null
          treatment_type: string | null
          type: string
          unit_price: number | null
          user_id: string
          value: number
        }
        Insert: {
          category: string
          created_at?: string
          date: string
          description: string
          document_type?: string | null
          id?: string
          payment_method?: string | null
          project_id?: string
          quantity?: number | null
          treatment_type?: string | null
          type: string
          unit_price?: number | null
          user_id: string
          value: number
        }
        Update: {
          category?: string
          created_at?: string
          date?: string
          description?: string
          document_type?: string | null
          id?: string
          payment_method?: string | null
          project_id?: string
          quantity?: number | null
          treatment_type?: string | null
          type?: string
          unit_price?: number | null
          user_id?: string
          value?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_admin: { Args: never; Returns: boolean }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, '__InternalSupabase'>

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, 'public'>]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    ? (DefaultSchema['Tables'] & DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema['Enums']
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema['CompositeTypes']
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const

// ====== DATABASE EXTENDED CONTEXT (auto-generated) ======
// This section contains actual PostgreSQL column types, constraints, RLS policies,
// functions, triggers, indexes and materialized views not present in the type definitions above.
// IMPORTANT: The TypeScript types above map UUID, TEXT, VARCHAR all to "string".
// Use the COLUMN TYPES section below to know the real PostgreSQL type for each column.
// Always use the correct PostgreSQL type when writing SQL migrations.

// --- COLUMN TYPES (actual PostgreSQL types) ---
// Use this to know the real database type when writing migrations.
// "string" in TypeScript types above may be uuid, text, varchar, timestamptz, etc.
// Table: abn_companies
//   id: uuid (not null, default: gen_random_uuid())
//   user_id: uuid (not null)
//   razao_social: text (not null)
//   cnpj: text (not null)
//   regime_tributario: text (not null)
//   uf: text (nullable)
//   email: text (nullable)
//   whatsapp: text (nullable)
//   status: text (nullable, default: 'Ativo'::text)
//   logo_url: text (nullable)
//   created_at: timestamp with time zone (not null, default: now())
//   updated_at: timestamp with time zone (not null, default: now())
// Table: abn_obligations
//   id: uuid (not null, default: gen_random_uuid())
//   company_id: uuid (not null)
//   name: text (not null)
//   due_date: date (not null)
//   status: text (nullable, default: 'Pendente'::text)
//   type: text (nullable)
//   updated_by: uuid (nullable)
//   created_at: timestamp with time zone (not null, default: now())
//   updated_at: timestamp with time zone (not null, default: now())
// Table: abn_profiles
//   id: uuid (not null)
//   name: text (nullable)
//   email: text (nullable)
//   role: text (nullable, default: 'Auxiliar'::text)
//   created_at: timestamp with time zone (not null, default: now())
// Table: abn_xml_control
//   id: uuid (not null, default: gen_random_uuid())
//   company_id: uuid (not null)
//   month_year: text (not null)
//   type: text (not null)
//   status: text (nullable, default: 'Pendente'::text)
//   updated_by: uuid (nullable)
//   created_at: timestamp with time zone (not null, default: now())
//   updated_at: timestamp with time zone (not null, default: now())
// Table: appointments
//   id: uuid (not null, default: gen_random_uuid())
//   user_id: uuid (not null)
//   date: text (not null)
//   data: jsonb (not null, default: '{}'::jsonb)
//   created_at: timestamp with time zone (not null, default: now())
//   project_id: text (not null, default: 'default'::text)
// Table: audit_logs
//   id: uuid (not null, default: gen_random_uuid())
//   user_id: uuid (nullable)
//   action: text (not null)
//   entity: text (not null)
//   entity_id: text (not null)
//   details: jsonb (nullable, default: '{}'::jsonb)
//   created_at: timestamp with time zone (not null, default: now())
// Table: categories
//   id: uuid (not null, default: gen_random_uuid())
//   user_id: uuid (not null)
//   name: text (not null)
//   type: text (not null)
//   created_at: timestamp with time zone (not null, default: now())
//   project_id: text (not null, default: 'default'::text)
// Table: comandas
//   id: text (not null)
//   user_id: uuid (not null)
//   mesa: text (not null, default: ''::text)
//   name: text (not null, default: ''::text)
//   status: text (not null, default: 'open'::text)
//   phone: text (not null, default: ''::text)
//   is_tip_enabled: boolean (not null, default: false)
//   marks: jsonb (not null, default: '{}'::jsonb)
//   custom_items: jsonb (not null, default: '[]'::jsonb)
//   created_at: timestamp with time zone (not null, default: now())
//   updated_at: timestamp with time zone (not null, default: now())
//   payment_method: text (nullable)
//   payment_amount: numeric (nullable)
// Table: companies
//   id: uuid (not null, default: gen_random_uuid())
//   user_id: uuid (not null, default: auth.uid())
//   nr: text (not null)
//   name: text (not null)
//   cnpj: text (not null)
//   email: text (nullable)
//   phone: text (nullable)
//   base_fee: numeric (not null, default: 0)
//   active: boolean (not null, default: true)
//   created_at: timestamp with time zone (not null, default: now())
// Table: dish_ingredients
//   id: uuid (not null, default: gen_random_uuid())
//   dish_id: uuid (not null)
//   inventory_id: uuid (not null)
//   quantity: numeric (not null, default: 0)
// Table: dishes
//   id: uuid (not null, default: gen_random_uuid())
//   user_id: uuid (not null)
//   name: text (not null)
//   price: numeric (not null, default: 0)
//   image_url: text (nullable)
//   created_at: timestamp with time zone (not null, default: now())
// Table: inventory_items
//   id: uuid (not null, default: gen_random_uuid())
//   user_id: uuid (not null)
//   name: text (not null)
//   unit: text (not null)
//   quantity: numeric (not null, default: 0)
//   min_stock: numeric (not null, default: 0)
//   unit_cost: numeric (not null, default: 0)
//   created_at: timestamp with time zone (not null, default: now())
//   description: text (nullable)
//   project_id: text (not null, default: 'default'::text)
// Table: invitations
//   id: uuid (not null, default: gen_random_uuid())
//   email: text (not null)
//   role: text (not null, default: 'user'::text)
//   status: text (not null, default: 'pending'::text)
//   token: uuid (not null, default: gen_random_uuid())
//   created_by: uuid (nullable)
//   created_at: timestamp with time zone (not null, default: now())
//   expires_at: timestamp with time zone (not null, default: (now() + '7 days'::interval))
// Table: profiles
//   id: uuid (not null)
//   initial_balance: numeric (not null, default: 0)
//   created_at: timestamp with time zone (not null, default: now())
//   organization_name: text (not null, default: 'Associação Esportiva Marajas'::text)
//   name: text (nullable)
//   email: text (nullable)
//   avatar_url: text (nullable)
//   is_admin: boolean (nullable, default: false)
//   email_notifications: boolean (nullable, default: true)
//   browser_notifications: boolean (nullable, default: true)
// Table: project_settings
//   id: uuid (not null, default: gen_random_uuid())
//   user_id: uuid (not null)
//   project_id: text (not null)
//   initial_balance: numeric (not null, default: 0)
//   organization_name: text (not null, default: 'Associação Esportiva Marajas'::text)
//   created_at: timestamp with time zone (not null, default: now())
// Table: purchase_items
//   id: uuid (not null, default: gen_random_uuid())
//   purchase_id: uuid (not null)
//   inventory_id: uuid (not null)
//   quantity: numeric (not null, default: 0)
//   unit_cost: numeric (not null, default: 0)
// Table: purchases
//   id: uuid (not null, default: gen_random_uuid())
//   user_id: uuid (not null)
//   supplier: text (not null)
//   total_cost: numeric (not null, default: 0)
//   date: timestamp with time zone (not null, default: now())
// Table: receipts
//   id: uuid (not null, default: gen_random_uuid())
//   user_id: uuid (not null, default: auth.uid())
//   company_id: uuid (nullable)
//   company_number: text (not null)
//   company_name: text (not null)
//   cnpj: text (not null)
//   value: numeric (not null, default: 0)
//   status: text (not null, default: 'Pendente'::text)
//   receive_date: timestamp with time zone (nullable)
//   month_year: text (not null)
//   created_at: timestamp with time zone (not null, default: now())
// Table: recurring_transactions
//   id: uuid (not null, default: gen_random_uuid())
//   user_id: uuid (not null)
//   type: text (not null)
//   description: text (not null)
//   category: text (not null)
//   value: numeric (not null)
//   day_of_month: integer (not null)
//   active: boolean (not null, default: true)
//   created_at: timestamp with time zone (not null, default: now())
//   project_id: text (not null, default: 'default'::text)
// Table: sales
//   id: uuid (not null, default: gen_random_uuid())
//   user_id: uuid (not null)
//   description: text (not null)
//   amount: numeric (not null, default: 0)
//   method: text (not null)
//   channel: text (not null)
//   date: timestamp with time zone (not null, default: now())
// Table: transactions
//   id: uuid (not null, default: gen_random_uuid())
//   user_id: uuid (not null)
//   type: text (not null)
//   date: date (not null)
//   description: text (not null)
//   category: text (not null)
//   value: numeric (not null)
//   quantity: numeric (nullable)
//   unit_price: numeric (nullable)
//   created_at: timestamp with time zone (not null, default: now())
//   project_id: text (not null, default: 'default'::text)
//   payment_method: text (nullable)
//   document_type: text (nullable)
//   treatment_type: text (nullable)

// --- CONSTRAINTS ---
// Table: abn_companies
//   PRIMARY KEY abn_companies_pkey: PRIMARY KEY (id)
//   FOREIGN KEY abn_companies_user_id_fkey: FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
// Table: abn_obligations
//   FOREIGN KEY abn_obligations_company_id_fkey: FOREIGN KEY (company_id) REFERENCES abn_companies(id) ON DELETE CASCADE
//   PRIMARY KEY abn_obligations_pkey: PRIMARY KEY (id)
//   FOREIGN KEY abn_obligations_updated_by_fkey: FOREIGN KEY (updated_by) REFERENCES auth.users(id) ON DELETE SET NULL
// Table: abn_profiles
//   FOREIGN KEY abn_profiles_id_fkey: FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE
//   PRIMARY KEY abn_profiles_pkey: PRIMARY KEY (id)
// Table: abn_xml_control
//   FOREIGN KEY abn_xml_control_company_id_fkey: FOREIGN KEY (company_id) REFERENCES abn_companies(id) ON DELETE CASCADE
//   PRIMARY KEY abn_xml_control_pkey: PRIMARY KEY (id)
//   FOREIGN KEY abn_xml_control_updated_by_fkey: FOREIGN KEY (updated_by) REFERENCES auth.users(id) ON DELETE SET NULL
// Table: appointments
//   PRIMARY KEY appointments_pkey: PRIMARY KEY (id)
//   FOREIGN KEY appointments_user_id_fkey: FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
// Table: audit_logs
//   PRIMARY KEY audit_logs_pkey: PRIMARY KEY (id)
//   FOREIGN KEY audit_logs_user_id_fkey: FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE SET NULL
// Table: categories
//   PRIMARY KEY categories_pkey: PRIMARY KEY (id)
//   CHECK categories_type_check: CHECK ((type = ANY (ARRAY['RECEITA'::text, 'DESPESA'::text, 'INVESTIMENTO'::text])))
//   FOREIGN KEY categories_user_id_fkey: FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
//   UNIQUE categories_user_id_project_id_name_type_key: UNIQUE (user_id, project_id, name, type)
// Table: comandas
//   PRIMARY KEY comandas_pkey: PRIMARY KEY (id)
//   FOREIGN KEY comandas_user_id_fkey: FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
// Table: companies
//   PRIMARY KEY companies_pkey: PRIMARY KEY (id)
//   FOREIGN KEY companies_user_id_fkey: FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
// Table: dish_ingredients
//   FOREIGN KEY dish_ingredients_dish_id_fkey: FOREIGN KEY (dish_id) REFERENCES dishes(id) ON DELETE CASCADE
//   FOREIGN KEY dish_ingredients_inventory_id_fkey: FOREIGN KEY (inventory_id) REFERENCES inventory_items(id) ON DELETE CASCADE
//   PRIMARY KEY dish_ingredients_pkey: PRIMARY KEY (id)
// Table: dishes
//   PRIMARY KEY dishes_pkey: PRIMARY KEY (id)
//   FOREIGN KEY dishes_user_id_fkey: FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
// Table: inventory_items
//   PRIMARY KEY inventory_items_pkey: PRIMARY KEY (id)
//   FOREIGN KEY inventory_items_user_id_fkey: FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
// Table: invitations
//   FOREIGN KEY invitations_created_by_fkey: FOREIGN KEY (created_by) REFERENCES profiles(id) ON DELETE CASCADE
//   PRIMARY KEY invitations_pkey: PRIMARY KEY (id)
// Table: profiles
//   FOREIGN KEY profiles_id_fkey: FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE
//   PRIMARY KEY profiles_pkey: PRIMARY KEY (id)
// Table: project_settings
//   PRIMARY KEY project_settings_pkey: PRIMARY KEY (id)
//   FOREIGN KEY project_settings_user_id_fkey: FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
//   UNIQUE project_settings_user_id_project_id_key: UNIQUE (user_id, project_id)
// Table: purchase_items
//   FOREIGN KEY purchase_items_inventory_id_fkey: FOREIGN KEY (inventory_id) REFERENCES inventory_items(id) ON DELETE CASCADE
//   PRIMARY KEY purchase_items_pkey: PRIMARY KEY (id)
//   FOREIGN KEY purchase_items_purchase_id_fkey: FOREIGN KEY (purchase_id) REFERENCES purchases(id) ON DELETE CASCADE
// Table: purchases
//   PRIMARY KEY purchases_pkey: PRIMARY KEY (id)
//   FOREIGN KEY purchases_user_id_fkey: FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
// Table: receipts
//   FOREIGN KEY receipts_company_id_fkey: FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE SET NULL
//   PRIMARY KEY receipts_pkey: PRIMARY KEY (id)
//   FOREIGN KEY receipts_user_id_fkey: FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
// Table: recurring_transactions
//   CHECK recurring_transactions_day_of_month_check: CHECK (((day_of_month >= 1) AND (day_of_month <= 31)))
//   PRIMARY KEY recurring_transactions_pkey: PRIMARY KEY (id)
//   CHECK recurring_transactions_type_check: CHECK ((type = ANY (ARRAY['RECEITA'::text, 'DESPESA'::text, 'INVESTIMENTO'::text])))
//   FOREIGN KEY recurring_transactions_user_id_fkey: FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
// Table: sales
//   PRIMARY KEY sales_pkey: PRIMARY KEY (id)
//   FOREIGN KEY sales_user_id_fkey: FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
// Table: transactions
//   PRIMARY KEY transactions_pkey: PRIMARY KEY (id)
//   CHECK transactions_type_check: CHECK ((type = ANY (ARRAY['RECEITA'::text, 'DESPESA'::text, 'INVESTIMENTO'::text])))
//   FOREIGN KEY transactions_user_id_fkey: FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE

// --- ROW LEVEL SECURITY POLICIES ---
// Table: abn_companies
//   Policy "abn_companies_policy" (ALL, PERMISSIVE) roles={authenticated}
//     USING: true
//     WITH CHECK: true
// Table: abn_obligations
//   Policy "abn_obligations_policy" (ALL, PERMISSIVE) roles={authenticated}
//     USING: true
//     WITH CHECK: true
// Table: abn_profiles
//   Policy "abn_profiles_policy" (ALL, PERMISSIVE) roles={authenticated}
//     USING: true
//     WITH CHECK: true
// Table: abn_xml_control
//   Policy "abn_xml_control_policy" (ALL, PERMISSIVE) roles={authenticated}
//     USING: true
//     WITH CHECK: true
// Table: appointments
//   Policy "Users can manage their own appointments" (ALL, PERMISSIVE) roles={authenticated}
//     USING: (auth.uid() = user_id)
//     WITH CHECK: (auth.uid() = user_id)
// Table: audit_logs
//   Policy "Admins can view audit logs" (SELECT, PERMISSIVE) roles={authenticated}
//     USING: is_admin()
// Table: categories
//   Policy "Users can manage their own categories" (ALL, PERMISSIVE) roles={authenticated}
//     USING: (auth.uid() = user_id)
//     WITH CHECK: (auth.uid() = user_id)
// Table: comandas
//   Policy "Public can view comandas" (SELECT, PERMISSIVE) roles={public}
//     USING: true
//   Policy "Users can manage their own comandas" (ALL, PERMISSIVE) roles={authenticated}
//     USING: (auth.uid() = user_id)
//     WITH CHECK: (auth.uid() = user_id)
// Table: companies
//   Policy "Users can manage their own companies" (ALL, PERMISSIVE) roles={authenticated}
//     USING: (auth.uid() = user_id)
//     WITH CHECK: (auth.uid() = user_id)
// Table: dish_ingredients
//   Policy "Users can manage their own dish ingredients" (ALL, PERMISSIVE) roles={public}
//     USING: (EXISTS ( SELECT 1    FROM dishes d   WHERE ((d.id = dish_ingredients.dish_id) AND (d.user_id = auth.uid()))))
// Table: dishes
//   Policy "Users can manage their own dishes" (ALL, PERMISSIVE) roles={public}
//     USING: (auth.uid() = user_id)
// Table: inventory_items
//   Policy "Users can manage their own inventory" (ALL, PERMISSIVE) roles={public}
//     USING: (auth.uid() = user_id)
// Table: invitations
//   Policy "Admins can manage invitations" (ALL, PERMISSIVE) roles={authenticated}
//     USING: is_admin()
// Table: profiles
//   Policy "Admins can update all profiles" (UPDATE, PERMISSIVE) roles={authenticated}
//     USING: is_admin()
//   Policy "Admins can view all profiles" (SELECT, PERMISSIVE) roles={authenticated}
//     USING: is_admin()
//   Policy "Users can manage their own profile" (ALL, PERMISSIVE) roles={authenticated}
//     USING: (auth.uid() = id)
//     WITH CHECK: (auth.uid() = id)
// Table: project_settings
//   Policy "Users can manage their own project settings" (ALL, PERMISSIVE) roles={authenticated}
//     USING: (auth.uid() = user_id)
//     WITH CHECK: (auth.uid() = user_id)
// Table: purchase_items
//   Policy "Users can manage their own purchase items" (ALL, PERMISSIVE) roles={public}
//     USING: (EXISTS ( SELECT 1    FROM purchases p   WHERE ((p.id = purchase_items.purchase_id) AND (p.user_id = auth.uid()))))
// Table: purchases
//   Policy "Users can manage their own purchases" (ALL, PERMISSIVE) roles={public}
//     USING: (auth.uid() = user_id)
// Table: receipts
//   Policy "Users can manage their own receipts" (ALL, PERMISSIVE) roles={authenticated}
//     USING: (auth.uid() = user_id)
//     WITH CHECK: (auth.uid() = user_id)
// Table: recurring_transactions
//   Policy "Users can manage their own recurring transactions" (ALL, PERMISSIVE) roles={authenticated}
//     USING: (auth.uid() = user_id)
//     WITH CHECK: (auth.uid() = user_id)
// Table: sales
//   Policy "Users can manage their own sales" (ALL, PERMISSIVE) roles={public}
//     USING: (auth.uid() = user_id)
// Table: transactions
//   Policy "Users can manage their own transactions" (ALL, PERMISSIVE) roles={authenticated}
//     USING: (auth.uid() = user_id)
//     WITH CHECK: (auth.uid() = user_id)

// --- DATABASE FUNCTIONS ---
// FUNCTION handle_abn_new_user()
//   CREATE OR REPLACE FUNCTION public.handle_abn_new_user()
//    RETURNS trigger
//    LANGUAGE plpgsql
//    SECURITY DEFINER
//   AS $function$
//   BEGIN
//     INSERT INTO public.abn_profiles (id, email, name)
//     VALUES (NEW.id, NEW.email, COALESCE(NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)))
//     ON CONFLICT (id) DO NOTHING;
//     RETURN NEW;
//   END;
//   $function$
//
// FUNCTION handle_new_user()
//   CREATE OR REPLACE FUNCTION public.handle_new_user()
//    RETURNS trigger
//    LANGUAGE plpgsql
//    SECURITY DEFINER
//   AS $function$
//   BEGIN
//     INSERT INTO public.profiles (id, email, name)
//     VALUES (NEW.id, NEW.email, COALESCE(NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)))
//     ON CONFLICT (id) DO NOTHING;
//
//     INSERT INTO public.categories (user_id, project_id, name, type) VALUES
//       (NEW.id, 'sistema-financeiro-contabil', 'Honorários', 'RECEITA'),
//       (NEW.id, 'sistema-financeiro-contabil', 'Consultoria', 'RECEITA'),
//       (NEW.id, 'sistema-financeiro-contabil', 'Salários', 'DESPESA'),
//       (NEW.id, 'sistema-financeiro-contabil', 'Impostos', 'DESPESA'),
//       (NEW.id, 'sistema-financeiro-contabil', 'Renda Fixa', 'INVESTIMENTO')
//     ON CONFLICT (user_id, project_id, name, type) DO NOTHING;
//
//     INSERT INTO public.categories (user_id, project_id, name, type) VALUES
//       (NEW.id, 'planilha-associacao', 'Mensalidades', 'RECEITA'),
//       (NEW.id, 'planilha-associacao', 'Doações', 'RECEITA'),
//       (NEW.id, 'planilha-associacao', 'Salários', 'DESPESA'),
//       (NEW.id, 'planilha-associacao', 'Contas', 'DESPESA'),
//       (NEW.id, 'planilha-associacao', 'Impostos', 'DESPESA')
//     ON CONFLICT (user_id, project_id, name, type) DO NOTHING;
//
//     INSERT INTO public.categories (user_id, project_id, name, type) VALUES
//       (NEW.id, 'planilha-clinica-financeira', 'Consultas', 'RECEITA'),
//       (NEW.id, 'planilha-clinica-financeira', 'Procedimentos', 'RECEITA'),
//       (NEW.id, 'planilha-clinica-financeira', 'Salários', 'DESPESA'),
//       (NEW.id, 'planilha-clinica-financeira', 'Materiais', 'DESPESA'),
//       (NEW.id, 'planilha-clinica-financeira', 'Impostos', 'DESPESA')
//     ON CONFLICT (user_id, project_id, name, type) DO NOTHING;
//
//     RETURN NEW;
//   END;
//   $function$
//
// FUNCTION is_admin()
//   CREATE OR REPLACE FUNCTION public.is_admin()
//    RETURNS boolean
//    LANGUAGE plpgsql
//    SECURITY DEFINER
//    SET search_path TO 'public'
//   AS $function$
//   DECLARE
//     admin_status boolean;
//   BEGIN
//     SELECT is_admin INTO admin_status FROM public.profiles WHERE id = auth.uid();
//     RETURN COALESCE(admin_status, false);
//   END;
//   $function$
//
// FUNCTION log_transaction_audit()
//   CREATE OR REPLACE FUNCTION public.log_transaction_audit()
//    RETURNS trigger
//    LANGUAGE plpgsql
//    SECURITY DEFINER
//   AS $function$
//   DECLARE
//       v_user_id UUID;
//   BEGIN
//       v_user_id := auth.uid();
//       IF v_user_id IS NULL THEN
//           IF TG_OP = 'DELETE' THEN
//               v_user_id := OLD.user_id;
//           ELSE
//               v_user_id := NEW.user_id;
//           END IF;
//       END IF;
//
//       IF (TG_OP = 'DELETE') THEN
//           INSERT INTO public.audit_logs (user_id, action, entity, entity_id, details)
//           VALUES (v_user_id, 'DELETE', TG_TABLE_NAME, OLD.id::text, row_to_json(OLD)::jsonb);
//           RETURN OLD;
//       ELSIF (TG_OP = 'UPDATE') THEN
//           INSERT INTO public.audit_logs (user_id, action, entity, entity_id, details)
//           VALUES (v_user_id, 'UPDATE', TG_TABLE_NAME, NEW.id::text, jsonb_build_object('old', row_to_json(OLD), 'new', row_to_json(NEW)));
//           RETURN NEW;
//       ELSIF (TG_OP = 'INSERT') THEN
//           INSERT INTO public.audit_logs (user_id, action, entity, entity_id, details)
//           VALUES (v_user_id, 'INSERT', TG_TABLE_NAME, NEW.id::text, row_to_json(NEW)::jsonb);
//           RETURN NEW;
//       END IF;
//       RETURN NULL;
//   END;
//   $function$
//

// --- TRIGGERS ---
// Table: transactions
//   audit_transactions_trigger: CREATE TRIGGER audit_transactions_trigger AFTER INSERT OR DELETE OR UPDATE ON public.transactions FOR EACH ROW EXECUTE FUNCTION log_transaction_audit()

// --- INDEXES ---
// Table: appointments
//   CREATE INDEX appointments_date_idx ON public.appointments USING btree (date)
//   CREATE INDEX appointments_project_id_idx ON public.appointments USING btree (project_id)
//   CREATE INDEX appointments_user_id_idx ON public.appointments USING btree (user_id)
// Table: categories
//   CREATE UNIQUE INDEX categories_user_id_project_id_name_type_key ON public.categories USING btree (user_id, project_id, name, type)
// Table: inventory_items
//   CREATE INDEX inventory_items_project_id_idx ON public.inventory_items USING btree (project_id)
// Table: project_settings
//   CREATE UNIQUE INDEX project_settings_user_id_project_id_key ON public.project_settings USING btree (user_id, project_id)
