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
      abn_backup_receita_federal_pre_class_20260712: {
        Row: {
          account_id: string | null
          amount: number | null
          category_id: string | null
          company_id: string | null
          contact_name: string | null
          cost_center_id: string | null
          created_at: string | null
          deleted_at: string | null
          deleted_by: string | null
          deleted_reason: string | null
          description: string | null
          document_id: string | null
          due_date: string | null
          fitid: string | null
          hash_duplicidade: string | null
          id: string | null
          is_recurring: boolean | null
          month_year: string | null
          normalized_description: string | null
          observations: string | null
          ofx_import_id: string | null
          payment_date: string | null
          payment_method: string | null
          project_id: string | null
          project_id2: string | null
          status: string | null
          type: string | null
        }
        Insert: {
          account_id?: string | null
          amount?: number | null
          category_id?: string | null
          company_id?: string | null
          contact_name?: string | null
          cost_center_id?: string | null
          created_at?: string | null
          deleted_at?: string | null
          deleted_by?: string | null
          deleted_reason?: string | null
          description?: string | null
          document_id?: string | null
          due_date?: string | null
          fitid?: string | null
          hash_duplicidade?: string | null
          id?: string | null
          is_recurring?: boolean | null
          month_year?: string | null
          normalized_description?: string | null
          observations?: string | null
          ofx_import_id?: string | null
          payment_date?: string | null
          payment_method?: string | null
          project_id?: string | null
          project_id2?: string | null
          status?: string | null
          type?: string | null
        }
        Update: {
          account_id?: string | null
          amount?: number | null
          category_id?: string | null
          company_id?: string | null
          contact_name?: string | null
          cost_center_id?: string | null
          created_at?: string | null
          deleted_at?: string | null
          deleted_by?: string | null
          deleted_reason?: string | null
          description?: string | null
          document_id?: string | null
          due_date?: string | null
          fitid?: string | null
          hash_duplicidade?: string | null
          id?: string | null
          is_recurring?: boolean | null
          month_year?: string | null
          normalized_description?: string | null
          observations?: string | null
          ofx_import_id?: string | null
          payment_date?: string | null
          payment_method?: string | null
          project_id?: string | null
          project_id2?: string | null
          status?: string | null
          type?: string | null
        }
        Relationships: []
      }
      abn_backup_transactions_pre_auto_class_20260712: {
        Row: {
          account_id: string | null
          amount: number | null
          category_id: string | null
          company_id: string | null
          contact_name: string | null
          cost_center_id: string | null
          created_at: string | null
          deleted_at: string | null
          deleted_by: string | null
          deleted_reason: string | null
          description: string | null
          document_id: string | null
          due_date: string | null
          fitid: string | null
          hash_duplicidade: string | null
          id: string | null
          is_recurring: boolean | null
          month_year: string | null
          normalized_description: string | null
          observations: string | null
          ofx_import_id: string | null
          payment_date: string | null
          payment_method: string | null
          project_id: string | null
          project_id2: string | null
          status: string | null
          type: string | null
        }
        Insert: {
          account_id?: string | null
          amount?: number | null
          category_id?: string | null
          company_id?: string | null
          contact_name?: string | null
          cost_center_id?: string | null
          created_at?: string | null
          deleted_at?: string | null
          deleted_by?: string | null
          deleted_reason?: string | null
          description?: string | null
          document_id?: string | null
          due_date?: string | null
          fitid?: string | null
          hash_duplicidade?: string | null
          id?: string | null
          is_recurring?: boolean | null
          month_year?: string | null
          normalized_description?: string | null
          observations?: string | null
          ofx_import_id?: string | null
          payment_date?: string | null
          payment_method?: string | null
          project_id?: string | null
          project_id2?: string | null
          status?: string | null
          type?: string | null
        }
        Update: {
          account_id?: string | null
          amount?: number | null
          category_id?: string | null
          company_id?: string | null
          contact_name?: string | null
          cost_center_id?: string | null
          created_at?: string | null
          deleted_at?: string | null
          deleted_by?: string | null
          deleted_reason?: string | null
          description?: string | null
          document_id?: string | null
          due_date?: string | null
          fitid?: string | null
          hash_duplicidade?: string | null
          id?: string | null
          is_recurring?: boolean | null
          month_year?: string | null
          normalized_description?: string | null
          observations?: string | null
          ofx_import_id?: string | null
          payment_date?: string | null
          payment_method?: string | null
          project_id?: string | null
          project_id2?: string | null
          status?: string | null
          type?: string | null
        }
        Relationships: []
      }
      abn_bank_reconciliation_rules: {
        Row: {
          account_id: string | null
          active: boolean
          category_id: string | null
          company_id: string
          confidence: number
          created_at: string
          created_by: string | null
          created_from: string
          description_pattern: string
          id: string
          last_used_at: string | null
          match_mode: string
          project_id2: string | null
          suggested_status: string
          type: string
          updated_at: string
          uses_count: number
        }
        Insert: {
          account_id?: string | null
          active?: boolean
          category_id?: string | null
          company_id: string
          confidence?: number
          created_at?: string
          created_by?: string | null
          created_from?: string
          description_pattern: string
          id?: string
          last_used_at?: string | null
          match_mode?: string
          project_id2?: string | null
          suggested_status: string
          type: string
          updated_at?: string
          uses_count?: number
        }
        Update: {
          account_id?: string | null
          active?: boolean
          category_id?: string | null
          company_id?: string
          confidence?: number
          created_at?: string
          created_by?: string | null
          created_from?: string
          description_pattern?: string
          id?: string
          last_used_at?: string | null
          match_mode?: string
          project_id2?: string | null
          suggested_status?: string
          type?: string
          updated_at?: string
          uses_count?: number
        }
        Relationships: []
      }
      abn_bank_reconciliations: {
        Row: {
          bank_month_year_before: string | null
          bank_payment_date_before: string | null
          bank_status_before: string | null
          bank_transaction_id: string
          company_id: string
          confidence: string | null
          created_at: string
          financial_account_id_before: string | null
          financial_month_year_before: string | null
          financial_payment_date_before: string | null
          financial_status_before: string | null
          financial_transaction_id: string | null
          id: string
          notes: string | null
          project_id2: string | null
          reconciled_at: string | null
          reconciled_by: string | null
          reconciliation_type: string
          score: number | null
          snapshot_captured: boolean
          status: string
          undo_reason: string | null
          undone_at: string | null
          undone_by: string | null
          updated_at: string
        }
        Insert: {
          bank_month_year_before?: string | null
          bank_payment_date_before?: string | null
          bank_status_before?: string | null
          bank_transaction_id: string
          company_id: string
          confidence?: string | null
          created_at?: string
          financial_account_id_before?: string | null
          financial_month_year_before?: string | null
          financial_payment_date_before?: string | null
          financial_status_before?: string | null
          financial_transaction_id?: string | null
          id?: string
          notes?: string | null
          project_id2?: string | null
          reconciled_at?: string | null
          reconciled_by?: string | null
          reconciliation_type?: string
          score?: number | null
          snapshot_captured?: boolean
          status?: string
          undo_reason?: string | null
          undone_at?: string | null
          undone_by?: string | null
          updated_at?: string
        }
        Update: {
          bank_month_year_before?: string | null
          bank_payment_date_before?: string | null
          bank_status_before?: string | null
          bank_transaction_id?: string
          company_id?: string
          confidence?: string | null
          created_at?: string
          financial_account_id_before?: string | null
          financial_month_year_before?: string | null
          financial_payment_date_before?: string | null
          financial_status_before?: string | null
          financial_transaction_id?: string | null
          id?: string
          notes?: string | null
          project_id2?: string | null
          reconciled_at?: string | null
          reconciled_by?: string | null
          reconciliation_type?: string
          score?: number | null
          snapshot_captured?: boolean
          status?: string
          undo_reason?: string | null
          undone_at?: string | null
          undone_by?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'abn_bank_reconciliations_bank_transaction_id_fkey'
            columns: ['bank_transaction_id']
            isOneToOne: false
            referencedRelation: 'abn_financial_transactions'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_bank_reconciliations_bank_transaction_id_fkey'
            columns: ['bank_transaction_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_dashboard_base'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_bank_reconciliations_bank_transaction_id_fkey'
            columns: ['bank_transaction_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_lancamentos_dashboard'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_bank_reconciliations_bank_transaction_id_fkey'
            columns: ['bank_transaction_id']
            isOneToOne: false
            referencedRelation: 'vw_importar_ofx_movimentacoes_ui'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_bank_reconciliations_financial_transaction_id_fkey'
            columns: ['financial_transaction_id']
            isOneToOne: false
            referencedRelation: 'abn_financial_transactions'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_bank_reconciliations_financial_transaction_id_fkey'
            columns: ['financial_transaction_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_dashboard_base'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_bank_reconciliations_financial_transaction_id_fkey'
            columns: ['financial_transaction_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_lancamentos_dashboard'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_bank_reconciliations_financial_transaction_id_fkey'
            columns: ['financial_transaction_id']
            isOneToOne: false
            referencedRelation: 'vw_importar_ofx_movimentacoes_ui'
            referencedColumns: ['id']
          },
        ]
      }
      abn_business_types: {
        Row: {
          code: string
          created_at: string
          description: string | null
          id: string
          is_active: boolean
          name: string
          updated_at: string
        }
        Insert: {
          code: string
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          name: string
          updated_at?: string
        }
        Update: {
          code?: string
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      abn_companies: {
        Row: {
          active: boolean | null
          base_fee: number | null
          certificado_digital: string | null
          certificado_senha: string | null
          certificado_url: string | null
          cnae: string | null
          cnpj: string
          cnpj_normalizado: string | null
          created_at: string
          email: string | null
          id: string
          inscricao_estadual: string | null
          inscricao_municipal: string | null
          logo_url: string | null
          nr: string | null
          owner_name: string | null
          permissoes: string | null
          plano_contratado: string | null
          procuracoes: string | null
          project_id: string | null
          project_id2: string | null
          razao_social: string
          regime_tributario: string | null
          responsaveis: string | null
          status: string | null
          uf: string | null
          updated_at: string
          user_id: string
          whatsapp: string | null
        }
        Insert: {
          active?: boolean | null
          base_fee?: number | null
          certificado_digital?: string | null
          certificado_senha?: string | null
          certificado_url?: string | null
          cnae?: string | null
          cnpj: string
          cnpj_normalizado?: string | null
          created_at?: string
          email?: string | null
          id?: string
          inscricao_estadual?: string | null
          inscricao_municipal?: string | null
          logo_url?: string | null
          nr?: string | null
          owner_name?: string | null
          permissoes?: string | null
          plano_contratado?: string | null
          procuracoes?: string | null
          project_id?: string | null
          project_id2?: string | null
          razao_social: string
          regime_tributario?: string | null
          responsaveis?: string | null
          status?: string | null
          uf?: string | null
          updated_at?: string
          user_id: string
          whatsapp?: string | null
        }
        Update: {
          active?: boolean | null
          base_fee?: number | null
          certificado_digital?: string | null
          certificado_senha?: string | null
          certificado_url?: string | null
          cnae?: string | null
          cnpj?: string
          cnpj_normalizado?: string | null
          created_at?: string
          email?: string | null
          id?: string
          inscricao_estadual?: string | null
          inscricao_municipal?: string | null
          logo_url?: string | null
          nr?: string | null
          owner_name?: string | null
          permissoes?: string | null
          plano_contratado?: string | null
          procuracoes?: string | null
          project_id?: string | null
          project_id2?: string | null
          razao_social?: string
          regime_tributario?: string | null
          responsaveis?: string | null
          status?: string | null
          uf?: string | null
          updated_at?: string
          user_id?: string
          whatsapp?: string | null
        }
        Relationships: []
      }
      abn_company_business_types: {
        Row: {
          business_type_id: string
          company_id: string
          created_at: string
          created_by: string | null
          id: string
          is_active: boolean
          is_primary: boolean
          project_id2: string | null
          updated_at: string
        }
        Insert: {
          business_type_id: string
          company_id: string
          created_at?: string
          created_by?: string | null
          id?: string
          is_active?: boolean
          is_primary?: boolean
          project_id2?: string | null
          updated_at?: string
        }
        Update: {
          business_type_id?: string
          company_id?: string
          created_at?: string
          created_by?: string | null
          id?: string
          is_active?: boolean
          is_primary?: boolean
          project_id2?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'abn_company_business_types_company_fk'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'abn_companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_company_business_types_company_fk'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_companies_safe'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_company_business_types_type_fk'
            columns: ['business_type_id']
            isOneToOne: false
            referencedRelation: 'abn_business_types'
            referencedColumns: ['id']
          },
        ]
      }
      abn_company_users: {
        Row: {
          company_id: string
          created_at: string
          created_by: string | null
          id: string
          project_id2: string | null
          role: string
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          company_id: string
          created_at?: string
          created_by?: string | null
          id?: string
          project_id2?: string | null
          role?: string
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          company_id?: string
          created_at?: string
          created_by?: string | null
          id?: string
          project_id2?: string | null
          role?: string
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'abn_company_users_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'abn_companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_company_users_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_companies_safe'
            referencedColumns: ['id']
          },
        ]
      }
      abn_cost_centers: {
        Row: {
          company_id: string
          created_at: string
          id: string
          name: string
          project_id2: string | null
        }
        Insert: {
          company_id: string
          created_at?: string
          id?: string
          name: string
          project_id2?: string | null
        }
        Update: {
          company_id?: string
          created_at?: string
          id?: string
          name?: string
          project_id2?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'abn_cost_centers_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'abn_companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_cost_centers_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_companies_safe'
            referencedColumns: ['id']
          },
        ]
      }
      abn_default_financial_categories: {
        Row: {
          allows_tax_credit: boolean
          business_type_code: string | null
          category_scope: string
          code: string
          created_at: string
          description: string | null
          display_order: number
          dre_group: string
          id: string
          is_active: boolean
          is_tax: boolean
          is_tax_reform: boolean
          name: string
          tax_code: string | null
          type: string
          updated_at: string
          valid_from: string | null
          valid_until: string | null
        }
        Insert: {
          allows_tax_credit?: boolean
          business_type_code?: string | null
          category_scope?: string
          code: string
          created_at?: string
          description?: string | null
          display_order?: number
          dre_group: string
          id?: string
          is_active?: boolean
          is_tax?: boolean
          is_tax_reform?: boolean
          name: string
          tax_code?: string | null
          type: string
          updated_at?: string
          valid_from?: string | null
          valid_until?: string | null
        }
        Update: {
          allows_tax_credit?: boolean
          business_type_code?: string | null
          category_scope?: string
          code?: string
          created_at?: string
          description?: string | null
          display_order?: number
          dre_group?: string
          id?: string
          is_active?: boolean
          is_tax?: boolean
          is_tax_reform?: boolean
          name?: string
          tax_code?: string | null
          type?: string
          updated_at?: string
          valid_from?: string | null
          valid_until?: string | null
        }
        Relationships: []
      }
      abn_financial_accounts: {
        Row: {
          account_number: string | null
          active: boolean | null
          agency: string | null
          balance: number | null
          bank_name: string | null
          company_id: string
          created_at: string
          id: string
          name: string
          project_id2: string | null
          type: string
          updated_at: string | null
        }
        Insert: {
          account_number?: string | null
          active?: boolean | null
          agency?: string | null
          balance?: number | null
          bank_name?: string | null
          company_id: string
          created_at?: string
          id?: string
          name: string
          project_id2?: string | null
          type: string
          updated_at?: string | null
        }
        Update: {
          account_number?: string | null
          active?: boolean | null
          agency?: string | null
          balance?: number | null
          bank_name?: string | null
          company_id?: string
          created_at?: string
          id?: string
          name?: string
          project_id2?: string | null
          type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'abn_financial_accounts_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'abn_companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_financial_accounts_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_companies_safe'
            referencedColumns: ['id']
          },
        ]
      }
      abn_financial_categories: {
        Row: {
          business_type_code: string | null
          category_scope: string | null
          company_id: string
          created_at: string
          default_category_code: string | null
          description: string | null
          dre_group: string | null
          id: string
          is_active: boolean | null
          is_system_default: boolean
          is_tax: boolean
          is_tax_reform: boolean
          name: string
          project_id2: string | null
          tax_code: string | null
          type: string
          updated_at: string | null
          valid_from: string | null
          valid_until: string | null
        }
        Insert: {
          business_type_code?: string | null
          category_scope?: string | null
          company_id: string
          created_at?: string
          default_category_code?: string | null
          description?: string | null
          dre_group?: string | null
          id?: string
          is_active?: boolean | null
          is_system_default?: boolean
          is_tax?: boolean
          is_tax_reform?: boolean
          name: string
          project_id2?: string | null
          tax_code?: string | null
          type: string
          updated_at?: string | null
          valid_from?: string | null
          valid_until?: string | null
        }
        Update: {
          business_type_code?: string | null
          category_scope?: string | null
          company_id?: string
          created_at?: string
          default_category_code?: string | null
          description?: string | null
          dre_group?: string | null
          id?: string
          is_active?: boolean | null
          is_system_default?: boolean
          is_tax?: boolean
          is_tax_reform?: boolean
          name?: string
          project_id2?: string | null
          tax_code?: string | null
          type?: string
          updated_at?: string | null
          valid_from?: string | null
          valid_until?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'abn_financial_categories_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'abn_companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_financial_categories_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_companies_safe'
            referencedColumns: ['id']
          },
        ]
      }
      abn_financial_transactions: {
        Row: {
          account_id: string | null
          amount: number
          category_id: string | null
          company_id: string
          contact_name: string | null
          cost_center_id: string | null
          created_at: string
          deleted_at: string | null
          deleted_by: string | null
          deleted_reason: string | null
          description: string
          document_id: string | null
          due_date: string
          fitid: string | null
          hash_duplicidade: string | null
          id: string
          is_recurring: boolean | null
          month_year: string | null
          normalized_description: string | null
          observations: string | null
          ofx_import_id: string | null
          payment_date: string | null
          payment_method: string | null
          project_id: string | null
          project_id2: string | null
          status: string
          type: string
          updated_at: string | null
        }
        Insert: {
          account_id?: string | null
          amount: number
          category_id?: string | null
          company_id: string
          contact_name?: string | null
          cost_center_id?: string | null
          created_at?: string
          deleted_at?: string | null
          deleted_by?: string | null
          deleted_reason?: string | null
          description: string
          document_id?: string | null
          due_date: string
          fitid?: string | null
          hash_duplicidade?: string | null
          id?: string
          is_recurring?: boolean | null
          month_year?: string | null
          normalized_description?: string | null
          observations?: string | null
          ofx_import_id?: string | null
          payment_date?: string | null
          payment_method?: string | null
          project_id?: string | null
          project_id2?: string | null
          status: string
          type: string
          updated_at?: string | null
        }
        Update: {
          account_id?: string | null
          amount?: number
          category_id?: string | null
          company_id?: string
          contact_name?: string | null
          cost_center_id?: string | null
          created_at?: string
          deleted_at?: string | null
          deleted_by?: string | null
          deleted_reason?: string | null
          description?: string
          document_id?: string | null
          due_date?: string
          fitid?: string | null
          hash_duplicidade?: string | null
          id?: string
          is_recurring?: boolean | null
          month_year?: string | null
          normalized_description?: string | null
          observations?: string | null
          ofx_import_id?: string | null
          payment_date?: string | null
          payment_method?: string | null
          project_id?: string | null
          project_id2?: string | null
          status?: string
          type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'abn_financial_transactions_account_id_fkey'
            columns: ['account_id']
            isOneToOne: false
            referencedRelation: 'abn_financial_accounts'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_financial_transactions_category_id_fkey'
            columns: ['category_id']
            isOneToOne: false
            referencedRelation: 'abn_financial_categories'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_financial_transactions_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'abn_companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_financial_transactions_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_companies_safe'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_financial_transactions_cost_center_id_fkey'
            columns: ['cost_center_id']
            isOneToOne: false
            referencedRelation: 'abn_cost_centers'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_financial_transactions_document_id_fkey'
            columns: ['document_id']
            isOneToOne: false
            referencedRelation: 'documents'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_financial_transactions_ofx_import_id_fkey'
            columns: ['ofx_import_id']
            isOneToOne: false
            referencedRelation: 'abn_ofx_imports'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_financial_transactions_ofx_import_id_fkey'
            columns: ['ofx_import_id']
            isOneToOne: false
            referencedRelation: 'vw_importar_ofx_historico_ui'
            referencedColumns: ['id']
          },
        ]
      }
      abn_obligations: {
        Row: {
          company_id: string
          created_at: string
          due_date: string
          id: string
          name: string
          project_id2: string | null
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
          project_id2?: string | null
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
          project_id2?: string | null
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
          {
            foreignKeyName: 'abn_obligations_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_companies_safe'
            referencedColumns: ['id']
          },
        ]
      }
      abn_ofx_imports: {
        Row: {
          account_id: string
          company_id: string
          created_at: string
          created_by: string | null
          duplicate_count: number
          error_count: number
          file_name: string | null
          id: string
          imported_count: number
          project_id2: string | null
          status: string
          total_transactions: number
        }
        Insert: {
          account_id: string
          company_id: string
          created_at?: string
          created_by?: string | null
          duplicate_count?: number
          error_count?: number
          file_name?: string | null
          id?: string
          imported_count?: number
          project_id2?: string | null
          status?: string
          total_transactions?: number
        }
        Update: {
          account_id?: string
          company_id?: string
          created_at?: string
          created_by?: string | null
          duplicate_count?: number
          error_count?: number
          file_name?: string | null
          id?: string
          imported_count?: number
          project_id2?: string | null
          status?: string
          total_transactions?: number
        }
        Relationships: [
          {
            foreignKeyName: 'abn_ofx_imports_account_id_fkey'
            columns: ['account_id']
            isOneToOne: false
            referencedRelation: 'abn_financial_accounts'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_ofx_imports_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'abn_companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_ofx_imports_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_companies_safe'
            referencedColumns: ['id']
          },
        ]
      }
      abn_profiles: {
        Row: {
          created_at: string
          email: string | null
          id: string
          is_admin: boolean | null
          logo_url: string | null
          name: string | null
          permissions: Json | null
          phone: string | null
          project_id: string | null
          project_id2: string | null
          role: string | null
          status: string | null
          theme_color: string | null
          user_type: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id: string
          is_admin?: boolean | null
          logo_url?: string | null
          name?: string | null
          permissions?: Json | null
          phone?: string | null
          project_id?: string | null
          project_id2?: string | null
          role?: string | null
          status?: string | null
          theme_color?: string | null
          user_type?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          is_admin?: boolean | null
          logo_url?: string | null
          name?: string | null
          permissions?: Json | null
          phone?: string | null
          project_id?: string | null
          project_id2?: string | null
          role?: string | null
          status?: string | null
          theme_color?: string | null
          user_type?: string | null
        }
        Relationships: []
      }
      abn_recurring_transactions: {
        Row: {
          active: boolean
          amount: number
          category_id: string | null
          company_id: string
          created_at: string
          day_of_month: number
          description: string
          id: string
          project_id2: string | null
          type: string
        }
        Insert: {
          active?: boolean
          amount: number
          category_id?: string | null
          company_id: string
          created_at?: string
          day_of_month: number
          description: string
          id?: string
          project_id2?: string | null
          type: string
        }
        Update: {
          active?: boolean
          amount?: number
          category_id?: string | null
          company_id?: string
          created_at?: string
          day_of_month?: number
          description?: string
          id?: string
          project_id2?: string | null
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: 'abn_recurring_transactions_category_id_fkey'
            columns: ['category_id']
            isOneToOne: false
            referencedRelation: 'abn_financial_categories'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_recurring_transactions_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'abn_companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_recurring_transactions_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_companies_safe'
            referencedColumns: ['id']
          },
        ]
      }
      abn_xml_conciliacao_itens: {
        Row: {
          conciliacao_id: string
          created_at: string
          created_by: string | null
          id: string
          lancamento_id: string | null
          movimentacao_id: string | null
          regra_match: string | null
          score: number | null
          valor_vinculado: number
        }
        Insert: {
          conciliacao_id: string
          created_at?: string
          created_by?: string | null
          id?: string
          lancamento_id?: string | null
          movimentacao_id?: string | null
          regra_match?: string | null
          score?: number | null
          valor_vinculado?: number
        }
        Update: {
          conciliacao_id?: string
          created_at?: string
          created_by?: string | null
          id?: string
          lancamento_id?: string | null
          movimentacao_id?: string | null
          regra_match?: string | null
          score?: number | null
          valor_vinculado?: number
        }
        Relationships: [
          {
            foreignKeyName: 'abn_xml_conciliacao_itens_conciliacao_id_fkey'
            columns: ['conciliacao_id']
            isOneToOne: false
            referencedRelation: 'abn_xml_conciliacoes'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_xml_conciliacao_itens_lancamento_id_fkey'
            columns: ['lancamento_id']
            isOneToOne: false
            referencedRelation: 'abn_financial_transactions'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_xml_conciliacao_itens_lancamento_id_fkey'
            columns: ['lancamento_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_dashboard_base'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_xml_conciliacao_itens_lancamento_id_fkey'
            columns: ['lancamento_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_lancamentos_dashboard'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_xml_conciliacao_itens_lancamento_id_fkey'
            columns: ['lancamento_id']
            isOneToOne: false
            referencedRelation: 'vw_importar_ofx_movimentacoes_ui'
            referencedColumns: ['id']
          },
        ]
      }
      abn_xml_conciliacoes: {
        Row: {
          company_id: string
          created_at: string
          created_by: string | null
          data_xml: string | null
          diferenca_valor: number | null
          id: string
          observacao: string | null
          origem: string
          project_id2: string | null
          status: string
          updated_at: string
          updated_by: string | null
          valor_conciliado: number | null
          valor_xml: number | null
          xml_id: string
        }
        Insert: {
          company_id: string
          created_at?: string
          created_by?: string | null
          data_xml?: string | null
          diferenca_valor?: number | null
          id?: string
          observacao?: string | null
          origem?: string
          project_id2?: string | null
          status?: string
          updated_at?: string
          updated_by?: string | null
          valor_conciliado?: number | null
          valor_xml?: number | null
          xml_id: string
        }
        Update: {
          company_id?: string
          created_at?: string
          created_by?: string | null
          data_xml?: string | null
          diferenca_valor?: number | null
          id?: string
          observacao?: string | null
          origem?: string
          project_id2?: string | null
          status?: string
          updated_at?: string
          updated_by?: string | null
          valor_conciliado?: number | null
          valor_xml?: number | null
          xml_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'abn_xml_conciliacoes_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'abn_companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_xml_conciliacoes_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_companies_safe'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_xml_conciliacoes_xml_id_fkey'
            columns: ['xml_id']
            isOneToOne: false
            referencedRelation: 'abn_xml_control'
            referencedColumns: ['id']
          },
        ]
      }
      abn_xml_control: {
        Row: {
          chave_acesso: string | null
          company_id: string
          created_at: string
          created_by: string | null
          data_emissao: string | null
          destinatario_cnpj: string | null
          destinatario_nome: string | null
          emitente_cnpj: string | null
          emitente_nome: string | null
          financeiro_gerado: boolean
          financeiro_gerado_em: string | null
          financeiro_gerado_por: string | null
          id: string
          lancamento_id: string | null
          month_year: string
          natureza_operacao: string | null
          nome_arquivo: string | null
          numero: string | null
          project_id: string | null
          project_id2: string | null
          protocolo_autorizacao: string | null
          serie: string | null
          status: string | null
          tipo_documento: string | null
          tipo_financeiro: string | null
          type: string
          uf_destinatario: string | null
          uf_emitente: string | null
          updated_at: string
          updated_by: string | null
          valor_total: number | null
          xml_texto: string | null
        }
        Insert: {
          chave_acesso?: string | null
          company_id: string
          created_at?: string
          created_by?: string | null
          data_emissao?: string | null
          destinatario_cnpj?: string | null
          destinatario_nome?: string | null
          emitente_cnpj?: string | null
          emitente_nome?: string | null
          financeiro_gerado?: boolean
          financeiro_gerado_em?: string | null
          financeiro_gerado_por?: string | null
          id?: string
          lancamento_id?: string | null
          month_year: string
          natureza_operacao?: string | null
          nome_arquivo?: string | null
          numero?: string | null
          project_id?: string | null
          project_id2?: string | null
          protocolo_autorizacao?: string | null
          serie?: string | null
          status?: string | null
          tipo_documento?: string | null
          tipo_financeiro?: string | null
          type: string
          uf_destinatario?: string | null
          uf_emitente?: string | null
          updated_at?: string
          updated_by?: string | null
          valor_total?: number | null
          xml_texto?: string | null
        }
        Update: {
          chave_acesso?: string | null
          company_id?: string
          created_at?: string
          created_by?: string | null
          data_emissao?: string | null
          destinatario_cnpj?: string | null
          destinatario_nome?: string | null
          emitente_cnpj?: string | null
          emitente_nome?: string | null
          financeiro_gerado?: boolean
          financeiro_gerado_em?: string | null
          financeiro_gerado_por?: string | null
          id?: string
          lancamento_id?: string | null
          month_year?: string
          natureza_operacao?: string | null
          nome_arquivo?: string | null
          numero?: string | null
          project_id?: string | null
          project_id2?: string | null
          protocolo_autorizacao?: string | null
          serie?: string | null
          status?: string | null
          tipo_documento?: string | null
          tipo_financeiro?: string | null
          type?: string
          uf_destinatario?: string | null
          uf_emitente?: string | null
          updated_at?: string
          updated_by?: string | null
          valor_total?: number | null
          xml_texto?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'abn_xml_control_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'abn_companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_xml_control_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_companies_safe'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_xml_control_lancamento_id_fkey'
            columns: ['lancamento_id']
            isOneToOne: false
            referencedRelation: 'abn_financial_transactions'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_xml_control_lancamento_id_fkey'
            columns: ['lancamento_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_dashboard_base'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_xml_control_lancamento_id_fkey'
            columns: ['lancamento_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_lancamentos_dashboard'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_xml_control_lancamento_id_fkey'
            columns: ['lancamento_id']
            isOneToOne: false
            referencedRelation: 'vw_importar_ofx_movimentacoes_ui'
            referencedColumns: ['id']
          },
        ]
      }
      access_profiles: {
        Row: {
          created_at: string
          id: string
          name: string
          permissions: Json
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          permissions?: Json
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          permissions?: Json
        }
        Relationships: []
      }
      agenda: {
        Row: {
          cnpj_id: string
          data_alteracao: string | null
          data_atendimento: string
          data_criacao: string | null
          empresa_id: string
          especialidade_id: string | null
          hora_fim: string
          hora_inicio: string
          id: string
          motivo_cancelamento: string | null
          observacoes: string | null
          paciente_id: string
          profissional_id: string
          projeto_id: string
          sala_id: string | null
          status: string | null
          tipo_atendimento: string | null
          unidade_id: string
          usuario_alteracao_id: string | null
          usuario_criador_id: string | null
        }
        Insert: {
          cnpj_id: string
          data_alteracao?: string | null
          data_atendimento: string
          data_criacao?: string | null
          empresa_id: string
          especialidade_id?: string | null
          hora_fim: string
          hora_inicio: string
          id?: string
          motivo_cancelamento?: string | null
          observacoes?: string | null
          paciente_id: string
          profissional_id: string
          projeto_id: string
          sala_id?: string | null
          status?: string | null
          tipo_atendimento?: string | null
          unidade_id: string
          usuario_alteracao_id?: string | null
          usuario_criador_id?: string | null
        }
        Update: {
          cnpj_id?: string
          data_alteracao?: string | null
          data_atendimento?: string
          data_criacao?: string | null
          empresa_id?: string
          especialidade_id?: string | null
          hora_fim?: string
          hora_inicio?: string
          id?: string
          motivo_cancelamento?: string | null
          observacoes?: string | null
          paciente_id?: string
          profissional_id?: string
          projeto_id?: string
          sala_id?: string | null
          status?: string | null
          tipo_atendimento?: string | null
          unidade_id?: string
          usuario_alteracao_id?: string | null
          usuario_criador_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'agenda_cnpj_id_fkey'
            columns: ['cnpj_id']
            isOneToOne: false
            referencedRelation: 'empresas_cnpjs'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'agenda_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'agenda_paciente_id_fkey'
            columns: ['paciente_id']
            isOneToOne: false
            referencedRelation: 'pacientes'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'agenda_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'agenda_unidade_id_fkey'
            columns: ['unidade_id']
            isOneToOne: false
            referencedRelation: 'unidades'
            referencedColumns: ['id']
          },
        ]
      }
      anexos_paciente: {
        Row: {
          arquivo_url: string
          atendimento_id: string | null
          cnpj_id: string
          criado_em: string | null
          criado_por: string | null
          empresa_id: string
          id: string
          nome_arquivo: string
          observacoes: string | null
          paciente_id: string
          projeto_id: string
          prontuario_id: string | null
          tipo_anexo: string | null
          unidade_id: string
        }
        Insert: {
          arquivo_url: string
          atendimento_id?: string | null
          cnpj_id: string
          criado_em?: string | null
          criado_por?: string | null
          empresa_id: string
          id?: string
          nome_arquivo: string
          observacoes?: string | null
          paciente_id: string
          projeto_id: string
          prontuario_id?: string | null
          tipo_anexo?: string | null
          unidade_id: string
        }
        Update: {
          arquivo_url?: string
          atendimento_id?: string | null
          cnpj_id?: string
          criado_em?: string | null
          criado_por?: string | null
          empresa_id?: string
          id?: string
          nome_arquivo?: string
          observacoes?: string | null
          paciente_id?: string
          projeto_id?: string
          prontuario_id?: string | null
          tipo_anexo?: string | null
          unidade_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'anexos_paciente_atendimento_id_fkey'
            columns: ['atendimento_id']
            isOneToOne: false
            referencedRelation: 'agenda'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'anexos_paciente_cnpj_id_fkey'
            columns: ['cnpj_id']
            isOneToOne: false
            referencedRelation: 'empresas_cnpjs'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'anexos_paciente_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'anexos_paciente_paciente_id_fkey'
            columns: ['paciente_id']
            isOneToOne: false
            referencedRelation: 'pacientes'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'anexos_paciente_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'anexos_paciente_prontuario_id_fkey'
            columns: ['prontuario_id']
            isOneToOne: false
            referencedRelation: 'prontuarios'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'anexos_paciente_unidade_id_fkey'
            columns: ['unidade_id']
            isOneToOne: false
            referencedRelation: 'unidades'
            referencedColumns: ['id']
          },
        ]
      }
      appointments: {
        Row: {
          company_id: string | null
          created_at: string
          data: Json
          date: string
          id: string
          project_id: string
          user_id: string
        }
        Insert: {
          company_id?: string | null
          created_at?: string
          data?: Json
          date: string
          id?: string
          project_id?: string
          user_id: string
        }
        Update: {
          company_id?: string | null
          created_at?: string
          data?: Json
          date?: string
          id?: string
          project_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'appointments_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'companies'
            referencedColumns: ['id']
          },
        ]
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
      bank_balances: {
        Row: {
          competencia: string
          created_at: string
          created_by: string
          id: string
          project_id: string
          saldo_bancario: number
          updated_at: string
        }
        Insert: {
          competencia: string
          created_at?: string
          created_by?: string
          id?: string
          project_id?: string
          saldo_bancario: number
          updated_at?: string
        }
        Update: {
          competencia?: string
          created_at?: string
          created_by?: string
          id?: string
          project_id?: string
          saldo_bancario?: number
          updated_at?: string
        }
        Relationships: []
      }
      bank_transactions: {
        Row: {
          amount: number
          bank_account_id: string
          category_id: string | null
          company_id: string
          created_at: string
          data: string
          description: string
          fitid: string | null
          id: string
          status: string
          type: string
          updated_at: string
        }
        Insert: {
          amount: number
          bank_account_id: string
          category_id?: string | null
          company_id: string
          created_at?: string
          data: string
          description: string
          fitid?: string | null
          id?: string
          status?: string
          type: string
          updated_at?: string
        }
        Update: {
          amount?: number
          bank_account_id?: string
          category_id?: string | null
          company_id?: string
          created_at?: string
          data?: string
          description?: string
          fitid?: string | null
          id?: string
          status?: string
          type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'bank_transactions_bank_account_id_fkey'
            columns: ['bank_account_id']
            isOneToOne: false
            referencedRelation: 'contas_bancarias'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'bank_transactions_category_id_fkey'
            columns: ['category_id']
            isOneToOne: false
            referencedRelation: 'categorias_financeiras'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'bank_transactions_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
        ]
      }
      cartoes_credito: {
        Row: {
          banco: string | null
          created_at: string
          dia_fechamento: number | null
          dia_vencimento: number | null
          familia_id: string | null
          id: string
          limite: number | null
          melhor_dia_compra: number | null
          nome: string
          status: string | null
          updated_at: string
        }
        Insert: {
          banco?: string | null
          created_at?: string
          dia_fechamento?: number | null
          dia_vencimento?: number | null
          familia_id?: string | null
          id?: string
          limite?: number | null
          melhor_dia_compra?: number | null
          nome: string
          status?: string | null
          updated_at?: string
        }
        Update: {
          banco?: string | null
          created_at?: string
          dia_fechamento?: number | null
          dia_vencimento?: number | null
          familia_id?: string | null
          id?: string
          limite?: number | null
          melhor_dia_compra?: number | null
          nome?: string
          status?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'cartoes_credito_familia_id_fkey'
            columns: ['familia_id']
            isOneToOne: false
            referencedRelation: 'familias'
            referencedColumns: ['id']
          },
        ]
      }
      categorias: {
        Row: {
          ativo: boolean
          cor: string | null
          created_at: string
          criado_em: string | null
          data_atualizacao: string | null
          data_criacao: string | null
          familia_id: string | null
          grupo: string | null
          icone: string | null
          id: string
          nome: string
          nome_categoria: string | null
          status: string | null
          tipo: string
          updated_at: string
        }
        Insert: {
          ativo?: boolean
          cor?: string | null
          created_at?: string
          criado_em?: string | null
          data_atualizacao?: string | null
          data_criacao?: string | null
          familia_id?: string | null
          grupo?: string | null
          icone?: string | null
          id?: string
          nome: string
          nome_categoria?: string | null
          status?: string | null
          tipo: string
          updated_at?: string
        }
        Update: {
          ativo?: boolean
          cor?: string | null
          created_at?: string
          criado_em?: string | null
          data_atualizacao?: string | null
          data_criacao?: string | null
          familia_id?: string | null
          grupo?: string | null
          icone?: string | null
          id?: string
          nome?: string
          nome_categoria?: string | null
          status?: string | null
          tipo?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'categorias_familia_id_fkey'
            columns: ['familia_id']
            isOneToOne: false
            referencedRelation: 'familias'
            referencedColumns: ['id']
          },
        ]
      }
      categorias_alimento: {
        Row: {
          ativo: boolean
          created_at: string | null
          descricao: string | null
          id: number
          nome: string
        }
        Insert: {
          ativo?: boolean
          created_at?: string | null
          descricao?: string | null
          id?: number
          nome: string
        }
        Update: {
          ativo?: boolean
          created_at?: string | null
          descricao?: string | null
          id?: number
          nome?: string
        }
        Relationships: []
      }
      categorias_financeiras: {
        Row: {
          ativo: boolean | null
          classificacao_dre: string | null
          cnpj_empresa: string | null
          cnpj_id: string
          cor: string | null
          data_alteracao: string | null
          data_criacao: string | null
          descricao: string | null
          empresa_id: string
          entra_dre: boolean | null
          grupo: string | null
          grupo_dre: string | null
          icone: string | null
          id: string
          natureza: string | null
          nome: string
          ordem: number | null
          projeto_id: string
          status: string | null
          tipo: string
          unidade_id: string
          usuario_alteracao_id: string | null
          usuario_criador_id: string | null
        }
        Insert: {
          ativo?: boolean | null
          classificacao_dre?: string | null
          cnpj_empresa?: string | null
          cnpj_id: string
          cor?: string | null
          data_alteracao?: string | null
          data_criacao?: string | null
          descricao?: string | null
          empresa_id: string
          entra_dre?: boolean | null
          grupo?: string | null
          grupo_dre?: string | null
          icone?: string | null
          id?: string
          natureza?: string | null
          nome: string
          ordem?: number | null
          projeto_id: string
          status?: string | null
          tipo: string
          unidade_id: string
          usuario_alteracao_id?: string | null
          usuario_criador_id?: string | null
        }
        Update: {
          ativo?: boolean | null
          classificacao_dre?: string | null
          cnpj_empresa?: string | null
          cnpj_id?: string
          cor?: string | null
          data_alteracao?: string | null
          data_criacao?: string | null
          descricao?: string | null
          empresa_id?: string
          entra_dre?: boolean | null
          grupo?: string | null
          grupo_dre?: string | null
          icone?: string | null
          id?: string
          natureza?: string | null
          nome?: string
          ordem?: number | null
          projeto_id?: string
          status?: string | null
          tipo?: string
          unidade_id?: string
          usuario_alteracao_id?: string | null
          usuario_criador_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'categorias_financeiras_cnpj_id_fkey'
            columns: ['cnpj_id']
            isOneToOne: false
            referencedRelation: 'empresas_cnpjs'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'categorias_financeiras_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'categorias_financeiras_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'categorias_financeiras_unidade_id_fkey'
            columns: ['unidade_id']
            isOneToOne: false
            referencedRelation: 'unidades'
            referencedColumns: ['id']
          },
        ]
      }
      categories: {
        Row: {
          company_id: string | null
          created_at: string
          id: string
          name: string
          project_id: string
          type: string
          user_id: string
        }
        Insert: {
          company_id?: string | null
          created_at?: string
          id?: string
          name: string
          project_id?: string
          type: string
          user_id: string
        }
        Update: {
          company_id?: string | null
          created_at?: string
          id?: string
          name?: string
          project_id?: string
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'categories_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'companies'
            referencedColumns: ['id']
          },
        ]
      }
      ce_empresa_atividades: {
        Row: {
          ativa: boolean
          atualizado_em: string
          cnae_codigo: string
          cnae_descricao: string
          criado_em: string
          criado_por: string | null
          empresa_id: string
          escritorio_id: string
          id: string
          observacoes: string | null
          principal: boolean
          tipo_atividade: string
        }
        Insert: {
          ativa?: boolean
          atualizado_em?: string
          cnae_codigo: string
          cnae_descricao: string
          criado_em?: string
          criado_por?: string | null
          empresa_id: string
          escritorio_id: string
          id?: string
          observacoes?: string | null
          principal?: boolean
          tipo_atividade: string
        }
        Update: {
          ativa?: boolean
          atualizado_em?: string
          cnae_codigo?: string
          cnae_descricao?: string
          criado_em?: string
          criado_por?: string | null
          empresa_id?: string
          escritorio_id?: string
          id?: string
          observacoes?: string | null
          principal?: boolean
          tipo_atividade?: string
        }
        Relationships: [
          {
            foreignKeyName: 'ce_empresa_atividades_empresa_escritorio_fk'
            columns: ['empresa_id', 'escritorio_id']
            isOneToOne: false
            referencedRelation: 'ce_empresas'
            referencedColumns: ['id', 'escritorio_id']
          },
          {
            foreignKeyName: 'ce_empresa_atividades_escritorio_fk'
            columns: ['escritorio_id']
            isOneToOne: false
            referencedRelation: 'ce_escritorios'
            referencedColumns: ['id']
          },
        ]
      }
      ce_empresas: {
        Row: {
          atividade_principal: string | null
          atualizado_em: string
          cnpj: string | null
          criado_em: string
          criado_por: string | null
          escritorio_id: string
          id: string
          municipio: string | null
          nome_fantasia: string | null
          razao_social: string
          regime_atual: string | null
          situacao: string
          uf: string | null
        }
        Insert: {
          atividade_principal?: string | null
          atualizado_em?: string
          cnpj?: string | null
          criado_em?: string
          criado_por?: string | null
          escritorio_id: string
          id?: string
          municipio?: string | null
          nome_fantasia?: string | null
          razao_social: string
          regime_atual?: string | null
          situacao?: string
          uf?: string | null
        }
        Update: {
          atividade_principal?: string | null
          atualizado_em?: string
          cnpj?: string | null
          criado_em?: string
          criado_por?: string | null
          escritorio_id?: string
          id?: string
          municipio?: string | null
          nome_fantasia?: string | null
          razao_social?: string
          regime_atual?: string | null
          situacao?: string
          uf?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'ce_empresas_escritorio_id_fkey'
            columns: ['escritorio_id']
            isOneToOne: false
            referencedRelation: 'ce_escritorios'
            referencedColumns: ['id']
          },
        ]
      }
      ce_escritorios: {
        Row: {
          atualizado_em: string
          criado_em: string
          id: string
          nome: string
          owner_user_id: string
          slug: string
          status: string
        }
        Insert: {
          atualizado_em?: string
          criado_em?: string
          id?: string
          nome: string
          owner_user_id: string
          slug: string
          status?: string
        }
        Update: {
          atualizado_em?: string
          criado_em?: string
          id?: string
          nome?: string
          owner_user_id?: string
          slug?: string
          status?: string
        }
        Relationships: []
      }
      ce_usuarios_escritorios: {
        Row: {
          ativo: boolean
          atualizado_em: string
          criado_em: string
          escritorio_id: string
          id: string
          papel: string
          user_id: string
        }
        Insert: {
          ativo?: boolean
          atualizado_em?: string
          criado_em?: string
          escritorio_id: string
          id?: string
          papel?: string
          user_id: string
        }
        Update: {
          ativo?: boolean
          atualizado_em?: string
          criado_em?: string
          escritorio_id?: string
          id?: string
          papel?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'ce_usuarios_escritorios_escritorio_id_fkey'
            columns: ['escritorio_id']
            isOneToOne: false
            referencedRelation: 'ce_escritorios'
            referencedColumns: ['id']
          },
        ]
      }
      centros_custo: {
        Row: {
          cnpj_id: string
          data_alteracao: string | null
          data_criacao: string | null
          descricao: string | null
          empresa_id: string
          id: string
          nome: string
          projeto_id: string
          status: string | null
          unidade_id: string
          usuario_alteracao_id: string | null
          usuario_criador_id: string | null
        }
        Insert: {
          cnpj_id: string
          data_alteracao?: string | null
          data_criacao?: string | null
          descricao?: string | null
          empresa_id: string
          id?: string
          nome: string
          projeto_id: string
          status?: string | null
          unidade_id: string
          usuario_alteracao_id?: string | null
          usuario_criador_id?: string | null
        }
        Update: {
          cnpj_id?: string
          data_alteracao?: string | null
          data_criacao?: string | null
          descricao?: string | null
          empresa_id?: string
          id?: string
          nome?: string
          projeto_id?: string
          status?: string | null
          unidade_id?: string
          usuario_alteracao_id?: string | null
          usuario_criador_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'centros_custo_cnpj_id_fkey'
            columns: ['cnpj_id']
            isOneToOne: false
            referencedRelation: 'empresas_cnpjs'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'centros_custo_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'centros_custo_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'centros_custo_unidade_id_fkey'
            columns: ['unidade_id']
            isOneToOne: false
            referencedRelation: 'unidades'
            referencedColumns: ['id']
          },
        ]
      }
      clientes: {
        Row: {
          cnpj_empresa: string | null
          company_id: string
          created_at: string
          created_by: string | null
          documento: string
          documento_normalizado: string
          email: string | null
          empresa_id: string | null
          endereco: string | null
          id: string
          nome: string
          observacoes: string | null
          status: string | null
          telefone: string | null
          tipo_documento: string
          tipo_pessoa: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          cnpj_empresa?: string | null
          company_id: string
          created_at?: string
          created_by?: string | null
          documento: string
          documento_normalizado: string
          email?: string | null
          empresa_id?: string | null
          endereco?: string | null
          id?: string
          nome: string
          observacoes?: string | null
          status?: string | null
          telefone?: string | null
          tipo_documento: string
          tipo_pessoa: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          cnpj_empresa?: string | null
          company_id?: string
          created_at?: string
          created_by?: string | null
          documento?: string
          documento_normalizado?: string
          email?: string | null
          empresa_id?: string | null
          endereco?: string | null
          id?: string
          nome?: string
          observacoes?: string | null
          status?: string | null
          telefone?: string | null
          tipo_documento?: string
          tipo_pessoa?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'clientes_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'clientes_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'companies'
            referencedColumns: ['id']
          },
        ]
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
          anexo_simples: string | null
          api_token_encrypted: string | null
          api_url: string | null
          ativar_comparativo_reforma: boolean | null
          ativar_simulacao_cbs_ibs: boolean | null
          atividade_principal: string | null
          bairro: string | null
          base_fee: number
          categoria_financeira_obrigatoria: boolean | null
          centro_custo_obrigatorio: boolean | null
          cep: string | null
          cidade: string | null
          cnae_principal: string | null
          cnaes_secundarios: string | null
          cnpj: string
          cnpj_normalizado: string
          complemento: string | null
          conta_bancaria_obrigatoria: boolean | null
          contador_crc: string | null
          contador_email: string | null
          contador_responsavel: string | null
          contribuinte_icms: boolean | null
          controle_permissoes_modulo: boolean | null
          created_at: string
          created_by: string | null
          data_abertura: string | null
          data_inicial_financeiro: string | null
          email: string | null
          endereco: string | null
          exibir_alertas_tributarios: boolean | null
          exigir_aprovacao_exclusao: boolean | null
          id: string
          importacao_excel_csv_ativa: boolean | null
          importacao_ofx_ativa: boolean | null
          importacao_xml_ativa: boolean | null
          inscricao_estadual: string | null
          inscricao_municipal: string | null
          integracao_erp_ativa: boolean | null
          integracao_supabase_ativa: boolean | null
          logo_url: string | null
          metodo_controle_financeiro: string | null
          moeda_padrao: string | null
          monitorar_reforma_tributaria: boolean | null
          municipio_apuracao: string | null
          name: string
          nivel_detalhe_tributario: string | null
          nome_erp: string | null
          nome_fantasia: string | null
          nr: string
          numero: string | null
          observacoes_tributarias: string | null
          owner_name: string | null
          pais: string | null
          permitir_consultor_externo: boolean | null
          permitir_contador_externo: boolean | null
          permitir_edicao_premissas: boolean | null
          permitir_lancamentos_retroativos: boolean | null
          permitir_multiplos_usuarios: boolean | null
          phone: string | null
          possui_beneficios_fiscais: boolean | null
          possui_icms_st: string | null
          possui_pis_cofins_monofasico: string | null
          razao_social: string | null
          regime_apuracao: string | null
          regime_tributario: string | null
          responsavel_validacao_tributaria: string | null
          saldo_inicial_consolidado: number | null
          simples_nacional: boolean | null
          site: string | null
          status: string | null
          status_integracao: string | null
          sujeito_icms: boolean | null
          sujeito_iss: boolean | null
          telefone: string | null
          tipo_atividade: string | null
          tipo_cnpj: string | null
          tipo_empresa: string | null
          tipo_operacao: string | null
          uf: string | null
          uf_apuracao: string | null
          ultima_sincronizacao: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          active?: boolean
          anexo_simples?: string | null
          api_token_encrypted?: string | null
          api_url?: string | null
          ativar_comparativo_reforma?: boolean | null
          ativar_simulacao_cbs_ibs?: boolean | null
          atividade_principal?: string | null
          bairro?: string | null
          base_fee?: number
          categoria_financeira_obrigatoria?: boolean | null
          centro_custo_obrigatorio?: boolean | null
          cep?: string | null
          cidade?: string | null
          cnae_principal?: string | null
          cnaes_secundarios?: string | null
          cnpj: string
          cnpj_normalizado: string
          complemento?: string | null
          conta_bancaria_obrigatoria?: boolean | null
          contador_crc?: string | null
          contador_email?: string | null
          contador_responsavel?: string | null
          contribuinte_icms?: boolean | null
          controle_permissoes_modulo?: boolean | null
          created_at?: string
          created_by?: string | null
          data_abertura?: string | null
          data_inicial_financeiro?: string | null
          email?: string | null
          endereco?: string | null
          exibir_alertas_tributarios?: boolean | null
          exigir_aprovacao_exclusao?: boolean | null
          id?: string
          importacao_excel_csv_ativa?: boolean | null
          importacao_ofx_ativa?: boolean | null
          importacao_xml_ativa?: boolean | null
          inscricao_estadual?: string | null
          inscricao_municipal?: string | null
          integracao_erp_ativa?: boolean | null
          integracao_supabase_ativa?: boolean | null
          logo_url?: string | null
          metodo_controle_financeiro?: string | null
          moeda_padrao?: string | null
          monitorar_reforma_tributaria?: boolean | null
          municipio_apuracao?: string | null
          name: string
          nivel_detalhe_tributario?: string | null
          nome_erp?: string | null
          nome_fantasia?: string | null
          nr: string
          numero?: string | null
          observacoes_tributarias?: string | null
          owner_name?: string | null
          pais?: string | null
          permitir_consultor_externo?: boolean | null
          permitir_contador_externo?: boolean | null
          permitir_edicao_premissas?: boolean | null
          permitir_lancamentos_retroativos?: boolean | null
          permitir_multiplos_usuarios?: boolean | null
          phone?: string | null
          possui_beneficios_fiscais?: boolean | null
          possui_icms_st?: string | null
          possui_pis_cofins_monofasico?: string | null
          razao_social?: string | null
          regime_apuracao?: string | null
          regime_tributario?: string | null
          responsavel_validacao_tributaria?: string | null
          saldo_inicial_consolidado?: number | null
          simples_nacional?: boolean | null
          site?: string | null
          status?: string | null
          status_integracao?: string | null
          sujeito_icms?: boolean | null
          sujeito_iss?: boolean | null
          telefone?: string | null
          tipo_atividade?: string | null
          tipo_cnpj?: string | null
          tipo_empresa?: string | null
          tipo_operacao?: string | null
          uf?: string | null
          uf_apuracao?: string | null
          ultima_sincronizacao?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Update: {
          active?: boolean
          anexo_simples?: string | null
          api_token_encrypted?: string | null
          api_url?: string | null
          ativar_comparativo_reforma?: boolean | null
          ativar_simulacao_cbs_ibs?: boolean | null
          atividade_principal?: string | null
          bairro?: string | null
          base_fee?: number
          categoria_financeira_obrigatoria?: boolean | null
          centro_custo_obrigatorio?: boolean | null
          cep?: string | null
          cidade?: string | null
          cnae_principal?: string | null
          cnaes_secundarios?: string | null
          cnpj?: string
          cnpj_normalizado?: string
          complemento?: string | null
          conta_bancaria_obrigatoria?: boolean | null
          contador_crc?: string | null
          contador_email?: string | null
          contador_responsavel?: string | null
          contribuinte_icms?: boolean | null
          controle_permissoes_modulo?: boolean | null
          created_at?: string
          created_by?: string | null
          data_abertura?: string | null
          data_inicial_financeiro?: string | null
          email?: string | null
          endereco?: string | null
          exibir_alertas_tributarios?: boolean | null
          exigir_aprovacao_exclusao?: boolean | null
          id?: string
          importacao_excel_csv_ativa?: boolean | null
          importacao_ofx_ativa?: boolean | null
          importacao_xml_ativa?: boolean | null
          inscricao_estadual?: string | null
          inscricao_municipal?: string | null
          integracao_erp_ativa?: boolean | null
          integracao_supabase_ativa?: boolean | null
          logo_url?: string | null
          metodo_controle_financeiro?: string | null
          moeda_padrao?: string | null
          monitorar_reforma_tributaria?: boolean | null
          municipio_apuracao?: string | null
          name?: string
          nivel_detalhe_tributario?: string | null
          nome_erp?: string | null
          nome_fantasia?: string | null
          nr?: string
          numero?: string | null
          observacoes_tributarias?: string | null
          owner_name?: string | null
          pais?: string | null
          permitir_consultor_externo?: boolean | null
          permitir_contador_externo?: boolean | null
          permitir_edicao_premissas?: boolean | null
          permitir_lancamentos_retroativos?: boolean | null
          permitir_multiplos_usuarios?: boolean | null
          phone?: string | null
          possui_beneficios_fiscais?: boolean | null
          possui_icms_st?: string | null
          possui_pis_cofins_monofasico?: string | null
          razao_social?: string | null
          regime_apuracao?: string | null
          regime_tributario?: string | null
          responsavel_validacao_tributaria?: string | null
          saldo_inicial_consolidado?: number | null
          simples_nacional?: boolean | null
          site?: string | null
          status?: string | null
          status_integracao?: string | null
          sujeito_icms?: boolean | null
          sujeito_iss?: boolean | null
          telefone?: string | null
          tipo_atividade?: string | null
          tipo_cnpj?: string | null
          tipo_empresa?: string | null
          tipo_operacao?: string | null
          uf?: string | null
          uf_apuracao?: string | null
          ultima_sincronizacao?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      company_empresa_map: {
        Row: {
          company_id: string
          created_at: string
          empresa_id: string
        }
        Insert: {
          company_id: string
          created_at?: string
          empresa_id: string
        }
        Update: {
          company_id?: string
          created_at?: string
          empresa_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'company_empresa_map_company_id_fkey'
            columns: ['company_id']
            isOneToOne: true
            referencedRelation: 'companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'company_empresa_map_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: true
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
        ]
      }
      company_users: {
        Row: {
          ativo: boolean | null
          company_id: string | null
          created_at: string | null
          id: string
          perfil: string
          permissoes: Json | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          ativo?: boolean | null
          company_id?: string | null
          created_at?: string | null
          id?: string
          perfil: string
          permissoes?: Json | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          ativo?: boolean | null
          company_id?: string | null
          created_at?: string | null
          id?: string
          perfil?: string
          permissoes?: Json | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'company_users_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'company_users_user_id_profiles_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      conciliacao_bancaria: {
        Row: {
          cnpj_id: string
          data_conciliacao: string | null
          empresa_id: string
          id: string
          movimentacao_bancaria_id: string
          observacao: string | null
          projeto_id: string
          tipo_vinculo: string
          unidade_id: string
          usuario_id: string | null
          vinculo_id: string | null
        }
        Insert: {
          cnpj_id: string
          data_conciliacao?: string | null
          empresa_id: string
          id?: string
          movimentacao_bancaria_id: string
          observacao?: string | null
          projeto_id: string
          tipo_vinculo: string
          unidade_id: string
          usuario_id?: string | null
          vinculo_id?: string | null
        }
        Update: {
          cnpj_id?: string
          data_conciliacao?: string | null
          empresa_id?: string
          id?: string
          movimentacao_bancaria_id?: string
          observacao?: string | null
          projeto_id?: string
          tipo_vinculo?: string
          unidade_id?: string
          usuario_id?: string | null
          vinculo_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'conciliacao_bancaria_cnpj_id_fkey'
            columns: ['cnpj_id']
            isOneToOne: false
            referencedRelation: 'empresas_cnpjs'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'conciliacao_bancaria_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'conciliacao_bancaria_movimentacao_bancaria_id_fkey'
            columns: ['movimentacao_bancaria_id']
            isOneToOne: false
            referencedRelation: 'movimentacoes_bancarias'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'conciliacao_bancaria_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'conciliacao_bancaria_unidade_id_fkey'
            columns: ['unidade_id']
            isOneToOne: false
            referencedRelation: 'unidades'
            referencedColumns: ['id']
          },
        ]
      }
      conciliacoes_bancarias: {
        Row: {
          criado_em: string | null
          diferenca_dias: number | null
          diferenca_valor: number | null
          id: string
          lancamento_id: string | null
          status: string
          tipo_lancamento: string | null
          transacao_bancaria_id: string
        }
        Insert: {
          criado_em?: string | null
          diferenca_dias?: number | null
          diferenca_valor?: number | null
          id?: string
          lancamento_id?: string | null
          status?: string
          tipo_lancamento?: string | null
          transacao_bancaria_id: string
        }
        Update: {
          criado_em?: string | null
          diferenca_dias?: number | null
          diferenca_valor?: number | null
          id?: string
          lancamento_id?: string | null
          status?: string
          tipo_lancamento?: string | null
          transacao_bancaria_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'conciliacoes_bancarias_transacao_bancaria_id_fkey'
            columns: ['transacao_bancaria_id']
            isOneToOne: false
            referencedRelation: 'transacoes_bancarias'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'conciliacoes_bancarias_transacao_bancaria_id_fkey'
            columns: ['transacao_bancaria_id']
            isOneToOne: false
            referencedRelation: 'vw_extrato_inteligente'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'conciliacoes_bancarias_transacao_bancaria_id_fkey'
            columns: ['transacao_bancaria_id']
            isOneToOne: false
            referencedRelation: 'vw_relatorios_base_financeira'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'conciliacoes_bancarias_transacao_bancaria_id_fkey'
            columns: ['transacao_bancaria_id']
            isOneToOne: false
            referencedRelation: 'vw_transacoes_pendentes'
            referencedColumns: ['id']
          },
        ]
      }
      contas_bancarias: {
        Row: {
          agencia: string | null
          banco: string | null
          cnpj_empresa: string | null
          cnpj_id: string | null
          conta: string | null
          conta_padrao: boolean | null
          created_at: string
          data_alteracao: string | null
          data_criacao: string | null
          data_saldo_inicial: string | null
          descricao: string | null
          empresa_id: string | null
          familia_id: string | null
          id: string
          nome: string | null
          projeto_id: string | null
          saldo_atual: number | null
          saldo_inicial: number | null
          status: string | null
          tipo: string | null
          tipo_conta: string | null
          unidade_id: string | null
          updated_at: string
          usuario_alteracao_id: string | null
          usuario_criador_id: string | null
        }
        Insert: {
          agencia?: string | null
          banco?: string | null
          cnpj_empresa?: string | null
          cnpj_id?: string | null
          conta?: string | null
          conta_padrao?: boolean | null
          created_at?: string
          data_alteracao?: string | null
          data_criacao?: string | null
          data_saldo_inicial?: string | null
          descricao?: string | null
          empresa_id?: string | null
          familia_id?: string | null
          id?: string
          nome?: string | null
          projeto_id?: string | null
          saldo_atual?: number | null
          saldo_inicial?: number | null
          status?: string | null
          tipo?: string | null
          tipo_conta?: string | null
          unidade_id?: string | null
          updated_at?: string
          usuario_alteracao_id?: string | null
          usuario_criador_id?: string | null
        }
        Update: {
          agencia?: string | null
          banco?: string | null
          cnpj_empresa?: string | null
          cnpj_id?: string | null
          conta?: string | null
          conta_padrao?: boolean | null
          created_at?: string
          data_alteracao?: string | null
          data_criacao?: string | null
          data_saldo_inicial?: string | null
          descricao?: string | null
          empresa_id?: string | null
          familia_id?: string | null
          id?: string
          nome?: string | null
          projeto_id?: string | null
          saldo_atual?: number | null
          saldo_inicial?: number | null
          status?: string | null
          tipo?: string | null
          tipo_conta?: string | null
          unidade_id?: string | null
          updated_at?: string
          usuario_alteracao_id?: string | null
          usuario_criador_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'contas_bancarias_cnpj_id_fkey'
            columns: ['cnpj_id']
            isOneToOne: false
            referencedRelation: 'empresas_cnpjs'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'contas_bancarias_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'contas_bancarias_familia_id_fkey'
            columns: ['familia_id']
            isOneToOne: false
            referencedRelation: 'familias'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'contas_bancarias_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'contas_bancarias_unidade_id_fkey'
            columns: ['unidade_id']
            isOneToOne: false
            referencedRelation: 'unidades'
            referencedColumns: ['id']
          },
        ]
      }
      contas_fixas: {
        Row: {
          categoria_id: string | null
          created_at: string
          descricao: string
          dia_vencimento: number | null
          familia_id: string | null
          id: string
          tipo: string
          updated_at: string
          valor_estimado: number | null
        }
        Insert: {
          categoria_id?: string | null
          created_at?: string
          descricao: string
          dia_vencimento?: number | null
          familia_id?: string | null
          id?: string
          tipo: string
          updated_at?: string
          valor_estimado?: number | null
        }
        Update: {
          categoria_id?: string | null
          created_at?: string
          descricao?: string
          dia_vencimento?: number | null
          familia_id?: string | null
          id?: string
          tipo?: string
          updated_at?: string
          valor_estimado?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'contas_fixas_categoria_id_fkey'
            columns: ['categoria_id']
            isOneToOne: false
            referencedRelation: 'categorias'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'contas_fixas_familia_id_fkey'
            columns: ['familia_id']
            isOneToOne: false
            referencedRelation: 'familias'
            referencedColumns: ['id']
          },
        ]
      }
      cost_centers: {
        Row: {
          company_id: string
          created_at: string
          id: string
          name: string
        }
        Insert: {
          company_id: string
          created_at?: string
          id?: string
          name: string
        }
        Update: {
          company_id?: string
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: 'cost_centers_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'abn_companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'cost_centers_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_companies_safe'
            referencedColumns: ['id']
          },
        ]
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
      dividas: {
        Row: {
          created_at: string
          credor: string | null
          data_inicio: string | null
          descricao: string
          familia_id: string | null
          id: string
          parcelas: number | null
          updated_at: string
          valor_parcela: number | null
          valor_total: number | null
        }
        Insert: {
          created_at?: string
          credor?: string | null
          data_inicio?: string | null
          descricao: string
          familia_id?: string | null
          id?: string
          parcelas?: number | null
          updated_at?: string
          valor_parcela?: number | null
          valor_total?: number | null
        }
        Update: {
          created_at?: string
          credor?: string | null
          data_inicio?: string | null
          descricao?: string
          familia_id?: string | null
          id?: string
          parcelas?: number | null
          updated_at?: string
          valor_parcela?: number | null
          valor_total?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'dividas_familia_id_fkey'
            columns: ['familia_id']
            isOneToOne: false
            referencedRelation: 'familias'
            referencedColumns: ['id']
          },
        ]
      }
      documentos_clinicos: {
        Row: {
          arquivo_pdf_url: string | null
          atendimento_id: string | null
          cnpj_id: string
          conteudo: string | null
          data_alteracao: string | null
          data_criacao: string | null
          data_emissao: string | null
          empresa_id: string
          id: string
          paciente_id: string
          profissional_id: string
          projeto_id: string
          status: string | null
          tipo_documento: string
          titulo: string | null
          unidade_id: string
          usuario_alteracao_id: string | null
          usuario_criador_id: string | null
        }
        Insert: {
          arquivo_pdf_url?: string | null
          atendimento_id?: string | null
          cnpj_id: string
          conteudo?: string | null
          data_alteracao?: string | null
          data_criacao?: string | null
          data_emissao?: string | null
          empresa_id: string
          id?: string
          paciente_id: string
          profissional_id: string
          projeto_id: string
          status?: string | null
          tipo_documento: string
          titulo?: string | null
          unidade_id: string
          usuario_alteracao_id?: string | null
          usuario_criador_id?: string | null
        }
        Update: {
          arquivo_pdf_url?: string | null
          atendimento_id?: string | null
          cnpj_id?: string
          conteudo?: string | null
          data_alteracao?: string | null
          data_criacao?: string | null
          data_emissao?: string | null
          empresa_id?: string
          id?: string
          paciente_id?: string
          profissional_id?: string
          projeto_id?: string
          status?: string | null
          tipo_documento?: string
          titulo?: string | null
          unidade_id?: string
          usuario_alteracao_id?: string | null
          usuario_criador_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'documentos_clinicos_atendimento_id_fkey'
            columns: ['atendimento_id']
            isOneToOne: false
            referencedRelation: 'agenda'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'documentos_clinicos_cnpj_id_fkey'
            columns: ['cnpj_id']
            isOneToOne: false
            referencedRelation: 'empresas_cnpjs'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'documentos_clinicos_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'documentos_clinicos_paciente_id_fkey'
            columns: ['paciente_id']
            isOneToOne: false
            referencedRelation: 'pacientes'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'documentos_clinicos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'documentos_clinicos_unidade_id_fkey'
            columns: ['unidade_id']
            isOneToOne: false
            referencedRelation: 'unidades'
            referencedColumns: ['id']
          },
        ]
      }
      documents: {
        Row: {
          amount: number | null
          category: string | null
          company_id: string | null
          competence: string | null
          created_at: string | null
          file_url: string | null
          id: string
          name: string
          project_id2: string | null
          status: string | null
          type: string
          user_id: string | null
        }
        Insert: {
          amount?: number | null
          category?: string | null
          company_id?: string | null
          competence?: string | null
          created_at?: string | null
          file_url?: string | null
          id?: string
          name: string
          project_id2?: string | null
          status?: string | null
          type: string
          user_id?: string | null
        }
        Update: {
          amount?: number | null
          category?: string | null
          company_id?: string | null
          competence?: string | null
          created_at?: string | null
          file_url?: string | null
          id?: string
          name?: string
          project_id2?: string | null
          status?: string | null
          type?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'documents_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'abn_companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'documents_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_companies_safe'
            referencedColumns: ['id']
          },
        ]
      }
      empresas: {
        Row: {
          atualizado_em: string
          criado_em: string
          id: string
          nome: string
          projeto_id: string
          status: string | null
        }
        Insert: {
          atualizado_em?: string
          criado_em?: string
          id?: string
          nome: string
          projeto_id: string
          status?: string | null
        }
        Update: {
          atualizado_em?: string
          criado_em?: string
          id?: string
          nome?: string
          projeto_id?: string
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'empresas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'projetos'
            referencedColumns: ['id']
          },
        ]
      }
      empresas_cnpjs: {
        Row: {
          atualizado_em: string
          cnpj: string
          criado_em: string
          empresa_id: string
          id: string
          inscricao_estadual: string | null
          inscricao_municipal: string | null
          nome_fantasia: string | null
          projeto_id: string
          razao_social: string
          status: string | null
        }
        Insert: {
          atualizado_em?: string
          cnpj: string
          criado_em?: string
          empresa_id: string
          id?: string
          inscricao_estadual?: string | null
          inscricao_municipal?: string | null
          nome_fantasia?: string | null
          projeto_id: string
          razao_social: string
          status?: string | null
        }
        Update: {
          atualizado_em?: string
          cnpj?: string
          criado_em?: string
          empresa_id?: string
          id?: string
          inscricao_estadual?: string | null
          inscricao_municipal?: string | null
          nome_fantasia?: string | null
          projeto_id?: string
          razao_social?: string
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'empresas_cnpjs_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'empresas_cnpjs_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'projetos'
            referencedColumns: ['id']
          },
        ]
      }
      familias: {
        Row: {
          created_at: string
          dia_principal_recebimento: number | null
          id: string
          nome: string
          objetivo_financeiro: string | null
          quantidade_pessoas: number | null
          renda_mensal: number | null
          updated_at: string
          usuario_responsavel_id: string | null
        }
        Insert: {
          created_at?: string
          dia_principal_recebimento?: number | null
          id?: string
          nome: string
          objetivo_financeiro?: string | null
          quantidade_pessoas?: number | null
          renda_mensal?: number | null
          updated_at?: string
          usuario_responsavel_id?: string | null
        }
        Update: {
          created_at?: string
          dia_principal_recebimento?: number | null
          id?: string
          nome?: string
          objetivo_financeiro?: string | null
          quantidade_pessoas?: number | null
          renda_mensal?: number | null
          updated_at?: string
          usuario_responsavel_id?: string | null
        }
        Relationships: []
      }
      financial_accounts: {
        Row: {
          company_id: string
          created_at: string
          id: string
          initial_balance: number
          name: string
          type: string
        }
        Insert: {
          company_id: string
          created_at?: string
          id?: string
          initial_balance?: number
          name: string
          type: string
        }
        Update: {
          company_id?: string
          created_at?: string
          id?: string
          initial_balance?: number
          name?: string
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: 'financial_accounts_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'abn_companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'financial_accounts_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_companies_safe'
            referencedColumns: ['id']
          },
        ]
      }
      financial_categories: {
        Row: {
          company_id: string
          created_at: string
          id: string
          name: string
          type: string
        }
        Insert: {
          company_id: string
          created_at?: string
          id?: string
          name: string
          type: string
        }
        Update: {
          company_id?: string
          created_at?: string
          id?: string
          name?: string
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: 'financial_categories_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'abn_companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'financial_categories_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_companies_safe'
            referencedColumns: ['id']
          },
        ]
      }
      financial_transactions: {
        Row: {
          account_id: string | null
          amount: number
          category_id: string | null
          company_id: string
          cost_center_id: string | null
          created_at: string
          description: string
          due_date: string
          id: string
          payment_date: string | null
          payment_method: string | null
          status: string
          type: string
        }
        Insert: {
          account_id?: string | null
          amount: number
          category_id?: string | null
          company_id: string
          cost_center_id?: string | null
          created_at?: string
          description: string
          due_date: string
          id?: string
          payment_date?: string | null
          payment_method?: string | null
          status?: string
          type: string
        }
        Update: {
          account_id?: string | null
          amount?: number
          category_id?: string | null
          company_id?: string
          cost_center_id?: string | null
          created_at?: string
          description?: string
          due_date?: string
          id?: string
          payment_date?: string | null
          payment_method?: string | null
          status?: string
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: 'financial_transactions_account_id_fkey'
            columns: ['account_id']
            isOneToOne: false
            referencedRelation: 'financial_accounts'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'financial_transactions_category_id_fkey'
            columns: ['category_id']
            isOneToOne: false
            referencedRelation: 'financial_categories'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'financial_transactions_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'abn_companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'financial_transactions_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_companies_safe'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'financial_transactions_cost_center_id_fkey'
            columns: ['cost_center_id']
            isOneToOne: false
            referencedRelation: 'cost_centers'
            referencedColumns: ['id']
          },
        ]
      }
      formas_pagamento: {
        Row: {
          cnpj_id: string
          data_alteracao: string | null
          data_criacao: string | null
          empresa_id: string
          id: string
          nome: string
          prazo_recebimento: number | null
          projeto_id: string
          status: string | null
          taxa_percentual: number | null
          tipo: string | null
          unidade_id: string
          usuario_alteracao_id: string | null
          usuario_criador_id: string | null
        }
        Insert: {
          cnpj_id: string
          data_alteracao?: string | null
          data_criacao?: string | null
          empresa_id: string
          id?: string
          nome: string
          prazo_recebimento?: number | null
          projeto_id: string
          status?: string | null
          taxa_percentual?: number | null
          tipo?: string | null
          unidade_id: string
          usuario_alteracao_id?: string | null
          usuario_criador_id?: string | null
        }
        Update: {
          cnpj_id?: string
          data_alteracao?: string | null
          data_criacao?: string | null
          empresa_id?: string
          id?: string
          nome?: string
          prazo_recebimento?: number | null
          projeto_id?: string
          status?: string | null
          taxa_percentual?: number | null
          tipo?: string | null
          unidade_id?: string
          usuario_alteracao_id?: string | null
          usuario_criador_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'formas_pagamento_cnpj_id_fkey'
            columns: ['cnpj_id']
            isOneToOne: false
            referencedRelation: 'empresas_cnpjs'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'formas_pagamento_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'formas_pagamento_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'formas_pagamento_unidade_id_fkey'
            columns: ['unidade_id']
            isOneToOne: false
            referencedRelation: 'unidades'
            referencedColumns: ['id']
          },
        ]
      }
      gado_ajuda_campos: {
        Row: {
          ativo: boolean
          campo: string
          created_at: string
          descricao: string
          exemplo: string | null
          id: number
          modulo: string
          obrigatorio: boolean
          observacao: string | null
          ordem_campo: number
          ordem_modulo: number
          rota: string | null
          titulo_campo: string
          titulo_modulo: string
          updated_at: string
        }
        Insert: {
          ativo?: boolean
          campo: string
          created_at?: string
          descricao: string
          exemplo?: string | null
          id?: number
          modulo: string
          obrigatorio?: boolean
          observacao?: string | null
          ordem_campo?: number
          ordem_modulo?: number
          rota?: string | null
          titulo_campo: string
          titulo_modulo: string
          updated_at?: string
        }
        Update: {
          ativo?: boolean
          campo?: string
          created_at?: string
          descricao?: string
          exemplo?: string | null
          id?: number
          modulo?: string
          obrigatorio?: boolean
          observacao?: string | null
          ordem_campo?: number
          ordem_modulo?: number
          rota?: string | null
          titulo_campo?: string
          titulo_modulo?: string
          updated_at?: string
        }
        Relationships: []
      }
      gado_alimentacao_diaria: {
        Row: {
          consumo_estimado_lote_kg: number
          created_at: string
          custo_medio_cabeca: number
          custo_racao_cabeca_dia: number | null
          custo_racao_lote_dia: number | null
          custo_sal_nucleo_dia_lote: number
          custo_total_lote_dia: number | null
          custo_volumoso_dia_lote: number
          data_registro: string
          id: string
          insumo_id: string | null
          kg_racao_cabeca_dia: number
          media_consumida_cabeca_kg: number
          media_fornecida_cabeca_kg: number
          observacoes: string | null
          outros_custos_dia_lote: number
          peso_saco_kg: number
          preco_kg_racao: number
          preco_saco: number
          projeto_id: string
          qtd_cabecas: number
          quantidade_sacos: number
          quantidade_total_fornecida_kg: number
          sobra_estimada_kg: number
          tipo_registro: string
          tipo_volumoso: string | null
          updated_at: string
          usa_pasto: boolean
        }
        Insert: {
          consumo_estimado_lote_kg?: number
          created_at?: string
          custo_medio_cabeca?: number
          custo_racao_cabeca_dia?: number | null
          custo_racao_lote_dia?: number | null
          custo_sal_nucleo_dia_lote?: number
          custo_total_lote_dia?: number | null
          custo_volumoso_dia_lote?: number
          data_registro?: string
          id?: string
          insumo_id?: string | null
          kg_racao_cabeca_dia?: number
          media_consumida_cabeca_kg?: number
          media_fornecida_cabeca_kg?: number
          observacoes?: string | null
          outros_custos_dia_lote?: number
          peso_saco_kg?: number
          preco_kg_racao?: number
          preco_saco?: number
          projeto_id: string
          qtd_cabecas?: number
          quantidade_sacos?: number
          quantidade_total_fornecida_kg?: number
          sobra_estimada_kg?: number
          tipo_registro?: string
          tipo_volumoso?: string | null
          updated_at?: string
          usa_pasto?: boolean
        }
        Update: {
          consumo_estimado_lote_kg?: number
          created_at?: string
          custo_medio_cabeca?: number
          custo_racao_cabeca_dia?: number | null
          custo_racao_lote_dia?: number | null
          custo_sal_nucleo_dia_lote?: number
          custo_total_lote_dia?: number | null
          custo_volumoso_dia_lote?: number
          data_registro?: string
          id?: string
          insumo_id?: string | null
          kg_racao_cabeca_dia?: number
          media_consumida_cabeca_kg?: number
          media_fornecida_cabeca_kg?: number
          observacoes?: string | null
          outros_custos_dia_lote?: number
          peso_saco_kg?: number
          preco_kg_racao?: number
          preco_saco?: number
          projeto_id?: string
          qtd_cabecas?: number
          quantidade_sacos?: number
          quantidade_total_fornecida_kg?: number
          sobra_estimada_kg?: number
          tipo_registro?: string
          tipo_volumoso?: string | null
          updated_at?: string
          usa_pasto?: boolean
        }
        Relationships: [
          {
            foreignKeyName: 'gado_alimentacao_diaria_insumo_id_fkey'
            columns: ['insumo_id']
            isOneToOne: false
            referencedRelation: 'gado_insumos_catalogo'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_alimentacao_diaria_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_alimentacao_diaria_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_alimentacao_diaria_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_alimentacao_diaria_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_alimentacao_diaria_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_alimentacao_diaria_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_alimentacao_diaria_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_alimentacao_diaria_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_alimentacao_diaria_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_alimentacao_diaria_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_alimentacao_diaria_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      gado_animais: {
        Row: {
          aptidao: string | null
          brinco: string
          categoria: Database['public']['Enums']['gado_categoria_animal']
          created_at: string
          data_baixa: string | null
          data_entrada: string
          data_nascimento: string | null
          documento_compra: string | null
          fase_pecuaria: string | null
          fornecedor_compra: string | null
          id: string
          idade_compra_meses: number | null
          idade_meses: number | null
          manejo_atual: string | null
          motivo_baixa: string | null
          motivo_status: string | null
          nome: string | null
          observacao_idade_compra: string | null
          observacoes: string | null
          observacoes_compra: string | null
          origem_animal: string | null
          pasto_atual_id: string | null
          pasto_id: string | null
          peso_atual_kg: number | null
          peso_entrada_kg: number
          peso_saida_kg: number | null
          preco_compra_kg_vivo: number
          projeto_id: string
          raca: string | null
          sexo: string | null
          sistema_criacao: string | null
          status: Database['public']['Enums']['gado_status_animal']
          tipo_baixa: string | null
          updated_at: string
          valor_compra: number | null
          valor_compra_informado: number | null
          valor_frete_compra: number | null
          valor_outros_custos_compra: number | null
        }
        Insert: {
          aptidao?: string | null
          brinco: string
          categoria?: Database['public']['Enums']['gado_categoria_animal']
          created_at?: string
          data_baixa?: string | null
          data_entrada?: string
          data_nascimento?: string | null
          documento_compra?: string | null
          fase_pecuaria?: string | null
          fornecedor_compra?: string | null
          id?: string
          idade_compra_meses?: number | null
          idade_meses?: number | null
          manejo_atual?: string | null
          motivo_baixa?: string | null
          motivo_status?: string | null
          nome?: string | null
          observacao_idade_compra?: string | null
          observacoes?: string | null
          observacoes_compra?: string | null
          origem_animal?: string | null
          pasto_atual_id?: string | null
          pasto_id?: string | null
          peso_atual_kg?: number | null
          peso_entrada_kg: number
          peso_saida_kg?: number | null
          preco_compra_kg_vivo?: number
          projeto_id: string
          raca?: string | null
          sexo?: string | null
          sistema_criacao?: string | null
          status?: Database['public']['Enums']['gado_status_animal']
          tipo_baixa?: string | null
          updated_at?: string
          valor_compra?: number | null
          valor_compra_informado?: number | null
          valor_frete_compra?: number | null
          valor_outros_custos_compra?: number | null
        }
        Update: {
          aptidao?: string | null
          brinco?: string
          categoria?: Database['public']['Enums']['gado_categoria_animal']
          created_at?: string
          data_baixa?: string | null
          data_entrada?: string
          data_nascimento?: string | null
          documento_compra?: string | null
          fase_pecuaria?: string | null
          fornecedor_compra?: string | null
          id?: string
          idade_compra_meses?: number | null
          idade_meses?: number | null
          manejo_atual?: string | null
          motivo_baixa?: string | null
          motivo_status?: string | null
          nome?: string | null
          observacao_idade_compra?: string | null
          observacoes?: string | null
          observacoes_compra?: string | null
          origem_animal?: string | null
          pasto_atual_id?: string | null
          pasto_id?: string | null
          peso_atual_kg?: number | null
          peso_entrada_kg?: number
          peso_saida_kg?: number | null
          preco_compra_kg_vivo?: number
          projeto_id?: string
          raca?: string | null
          sexo?: string | null
          sistema_criacao?: string | null
          status?: Database['public']['Enums']['gado_status_animal']
          tipo_baixa?: string | null
          updated_at?: string
          valor_compra?: number | null
          valor_compra_informado?: number | null
          valor_frete_compra?: number | null
          valor_outros_custos_compra?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'gado_animais_pasto_atual_id_fkey'
            columns: ['pasto_atual_id']
            isOneToOne: false
            referencedRelation: 'gado_pastos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_animais_pasto_atual_id_fkey'
            columns: ['pasto_atual_id']
            isOneToOne: false
            referencedRelation: 'v_gado_pastos_resumo'
            referencedColumns: ['pasto_id']
          },
          {
            foreignKeyName: 'gado_animais_pasto_atual_id_fkey'
            columns: ['pasto_atual_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['pasto_id']
          },
          {
            foreignKeyName: 'gado_animais_pasto_atual_id_fkey'
            columns: ['pasto_atual_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['pasto_id']
          },
          {
            foreignKeyName: 'gado_animais_pasto_id_fkey'
            columns: ['pasto_id']
            isOneToOne: false
            referencedRelation: 'gado_pastos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_animais_pasto_id_fkey'
            columns: ['pasto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_pastos_resumo'
            referencedColumns: ['pasto_id']
          },
          {
            foreignKeyName: 'gado_animais_pasto_id_fkey'
            columns: ['pasto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['pasto_id']
          },
          {
            foreignKeyName: 'gado_animais_pasto_id_fkey'
            columns: ['pasto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['pasto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      gado_baixas_animais: {
        Row: {
          animal_id: string
          arrobas: number | null
          created_at: string
          data_baixa: string
          desconto_total: number
          id: string
          kg_carcaca: number | null
          motivo: string | null
          observacoes: string | null
          peso_saida_kg: number | null
          preco_arroba: number | null
          projeto_id: string
          receita_bruta: number | null
          receita_liquida: number | null
          rendimento_carcaca_percent: number | null
          tipo_baixa: string
          updated_at: string
        }
        Insert: {
          animal_id: string
          arrobas?: number | null
          created_at?: string
          data_baixa?: string
          desconto_total?: number
          id?: string
          kg_carcaca?: number | null
          motivo?: string | null
          observacoes?: string | null
          peso_saida_kg?: number | null
          preco_arroba?: number | null
          projeto_id: string
          receita_bruta?: number | null
          receita_liquida?: number | null
          rendimento_carcaca_percent?: number | null
          tipo_baixa?: string
          updated_at?: string
        }
        Update: {
          animal_id?: string
          arrobas?: number | null
          created_at?: string
          data_baixa?: string
          desconto_total?: number
          id?: string
          kg_carcaca?: number | null
          motivo?: string | null
          observacoes?: string | null
          peso_saida_kg?: number | null
          preco_arroba?: number | null
          projeto_id?: string
          receita_bruta?: number | null
          receita_liquida?: number | null
          rendimento_carcaca_percent?: number | null
          tipo_baixa?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'gado_baixas_animais_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: true
            referencedRelation: 'gado_animais'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_baixas_animais_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: true
            referencedRelation: 'v_gado_alertas_operacionais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_baixas_animais_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: true
            referencedRelation: 'v_gado_animais_acoes'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_baixas_animais_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: true
            referencedRelation: 'v_gado_animais_indicadores'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_baixas_animais_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: true
            referencedRelation: 'v_gado_animais_operacional'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_baixas_animais_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: true
            referencedRelation: 'v_gado_animais_simples'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_baixas_animais_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: true
            referencedRelation: 'v_gado_animais_simples'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_baixas_animais_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: true
            referencedRelation: 'v_gado_perfil_animal'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_baixas_animais_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: true
            referencedRelation: 'v_gado_perfil_animal'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_baixas_animais_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: true
            referencedRelation: 'v_gado_pesagens_resumo_animais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_baixas_animais_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: true
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_baixas_animais_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: true
            referencedRelation: 'v_gado_resultado_animais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_baixas_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_baixas_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_baixas_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_baixas_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_baixas_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_baixas_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_baixas_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_baixas_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_baixas_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_baixas_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_baixas_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      gado_compra_lote_parametros: {
        Row: {
          created_at: string
          created_by: string | null
          data_compra: string
          documento: string | null
          fornecedor: string | null
          id: string
          idade_compra_meses: number | null
          modo_frete: string
          modo_outros: string
          observacoes: string | null
          projeto_id: string
          quantidade_animais_atualizados: number
          sobrescrever: boolean
          total_aquisicao: number
          total_compra_animais: number
          total_frete: number
          total_outros: number
          valor_compra_por_animal: number
          valor_frete_informado: number
          valor_frete_por_animal: number
          valor_outros_informado: number
          valor_outros_por_animal: number
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          data_compra?: string
          documento?: string | null
          fornecedor?: string | null
          id?: string
          idade_compra_meses?: number | null
          modo_frete?: string
          modo_outros?: string
          observacoes?: string | null
          projeto_id: string
          quantidade_animais_atualizados?: number
          sobrescrever?: boolean
          total_aquisicao?: number
          total_compra_animais?: number
          total_frete?: number
          total_outros?: number
          valor_compra_por_animal?: number
          valor_frete_informado?: number
          valor_frete_por_animal?: number
          valor_outros_informado?: number
          valor_outros_por_animal?: number
        }
        Update: {
          created_at?: string
          created_by?: string | null
          data_compra?: string
          documento?: string | null
          fornecedor?: string | null
          id?: string
          idade_compra_meses?: number | null
          modo_frete?: string
          modo_outros?: string
          observacoes?: string | null
          projeto_id?: string
          quantidade_animais_atualizados?: number
          sobrescrever?: boolean
          total_aquisicao?: number
          total_compra_animais?: number
          total_frete?: number
          total_outros?: number
          valor_compra_por_animal?: number
          valor_frete_informado?: number
          valor_frete_por_animal?: number
          valor_outros_informado?: number
          valor_outros_por_animal?: number
        }
        Relationships: [
          {
            foreignKeyName: 'gado_compra_lote_parametros_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_compra_lote_parametros_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_compra_lote_parametros_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_compra_lote_parametros_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_compra_lote_parametros_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_compra_lote_parametros_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_compra_lote_parametros_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_compra_lote_parametros_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_compra_lote_parametros_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_compra_lote_parametros_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_compra_lote_parametros_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      gado_compras_insumos: {
        Row: {
          created_at: string
          created_by: string | null
          data_compra: string
          descricao: string
          documento: string | null
          fazenda_id: string
          fornecedor: string | null
          id: string
          insumo_id: string
          observacoes: string | null
          pasto_id: string | null
          projeto_id: string | null
          quantidade: number
          tipo_insumo: string
          unidade: string
          updated_at: string
          valor_desconto: number
          valor_frete: number
          valor_outros: number
          valor_total: number | null
          valor_unitario: number
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          data_compra?: string
          descricao: string
          documento?: string | null
          fazenda_id: string
          fornecedor?: string | null
          id?: string
          insumo_id: string
          observacoes?: string | null
          pasto_id?: string | null
          projeto_id?: string | null
          quantidade?: number
          tipo_insumo?: string
          unidade?: string
          updated_at?: string
          valor_desconto?: number
          valor_frete?: number
          valor_outros?: number
          valor_total?: number | null
          valor_unitario?: number
        }
        Update: {
          created_at?: string
          created_by?: string | null
          data_compra?: string
          descricao?: string
          documento?: string | null
          fazenda_id?: string
          fornecedor?: string | null
          id?: string
          insumo_id?: string
          observacoes?: string | null
          pasto_id?: string | null
          projeto_id?: string | null
          quantidade?: number
          tipo_insumo?: string
          unidade?: string
          updated_at?: string
          valor_desconto?: number
          valor_frete?: number
          valor_outros?: number
          valor_total?: number | null
          valor_unitario?: number
        }
        Relationships: [
          {
            foreignKeyName: 'gado_compras_insumos_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'gado_fazendas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_compras_insumos_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_compra_lote_historico'
            referencedColumns: ['fazenda_id']
          },
          {
            foreignKeyName: 'gado_compras_insumos_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['fazenda_id']
          },
          {
            foreignKeyName: 'gado_compras_insumos_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['fazenda_id']
          },
          {
            foreignKeyName: 'gado_compras_insumos_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['fazenda_id']
          },
          {
            foreignKeyName: 'gado_compras_insumos_insumo_id_fkey'
            columns: ['insumo_id']
            isOneToOne: false
            referencedRelation: 'gado_insumos_catalogo'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_compras_insumos_pasto_id_fkey'
            columns: ['pasto_id']
            isOneToOne: false
            referencedRelation: 'gado_pastos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_compras_insumos_pasto_id_fkey'
            columns: ['pasto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_pastos_resumo'
            referencedColumns: ['pasto_id']
          },
          {
            foreignKeyName: 'gado_compras_insumos_pasto_id_fkey'
            columns: ['pasto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['pasto_id']
          },
          {
            foreignKeyName: 'gado_compras_insumos_pasto_id_fkey'
            columns: ['pasto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['pasto_id']
          },
          {
            foreignKeyName: 'gado_compras_insumos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_compras_insumos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_compras_insumos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_compras_insumos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_compras_insumos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_compras_insumos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_compras_insumos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_compras_insumos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_compras_insumos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_compras_insumos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_compras_insumos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      gado_custos: {
        Row: {
          animal_id: string | null
          created_at: string
          data_custo: string
          descricao: string
          id: string
          observacoes: string | null
          projeto_id: string
          quantidade_cabecas: number | null
          tipo: Database['public']['Enums']['gado_tipo_custo']
          updated_at: string
          valor_total: number
        }
        Insert: {
          animal_id?: string | null
          created_at?: string
          data_custo?: string
          descricao: string
          id?: string
          observacoes?: string | null
          projeto_id: string
          quantidade_cabecas?: number | null
          tipo?: Database['public']['Enums']['gado_tipo_custo']
          updated_at?: string
          valor_total: number
        }
        Update: {
          animal_id?: string | null
          created_at?: string
          data_custo?: string
          descricao?: string
          id?: string
          observacoes?: string | null
          projeto_id?: string
          quantidade_cabecas?: number | null
          tipo?: Database['public']['Enums']['gado_tipo_custo']
          updated_at?: string
          valor_total?: number
        }
        Relationships: [
          {
            foreignKeyName: 'gado_custos_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'gado_animais'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_custos_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_alertas_operacionais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_custos_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_acoes'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_custos_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_indicadores'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_custos_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_operacional'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_custos_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_simples'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_custos_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_simples'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_custos_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_perfil_animal'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_custos_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_perfil_animal'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_custos_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_pesagens_resumo_animais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_custos_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_custos_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_animais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_custos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_custos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_custos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_custos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_custos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_custos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_custos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_custos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_custos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_custos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_custos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      gado_custos_rebanho: {
        Row: {
          animal_id: string | null
          compra_insumo_id: string | null
          created_at: string
          created_by: string | null
          data_custo: string
          descricao: string
          documento: string | null
          escopo_custo: string
          fazenda_id: string | null
          fornecedor: string | null
          id: string
          observacoes: string | null
          pasto_id: string | null
          projeto_id: string | null
          quantidade: number | null
          tipo_custo: string
          unidade: string | null
          updated_at: string
          valor_total: number
          valor_unitario: number | null
        }
        Insert: {
          animal_id?: string | null
          compra_insumo_id?: string | null
          created_at?: string
          created_by?: string | null
          data_custo?: string
          descricao: string
          documento?: string | null
          escopo_custo?: string
          fazenda_id?: string | null
          fornecedor?: string | null
          id?: string
          observacoes?: string | null
          pasto_id?: string | null
          projeto_id?: string | null
          quantidade?: number | null
          tipo_custo: string
          unidade?: string | null
          updated_at?: string
          valor_total?: number
          valor_unitario?: number | null
        }
        Update: {
          animal_id?: string | null
          compra_insumo_id?: string | null
          created_at?: string
          created_by?: string | null
          data_custo?: string
          descricao?: string
          documento?: string | null
          escopo_custo?: string
          fazenda_id?: string | null
          fornecedor?: string | null
          id?: string
          observacoes?: string | null
          pasto_id?: string | null
          projeto_id?: string | null
          quantidade?: number | null
          tipo_custo?: string
          unidade?: string | null
          updated_at?: string
          valor_total?: number
          valor_unitario?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'gado_custos_rebanho_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'gado_animais'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_custos_rebanho_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_alertas_operacionais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_custos_rebanho_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_acoes'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_custos_rebanho_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_indicadores'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_custos_rebanho_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_operacional'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_custos_rebanho_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_simples'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_custos_rebanho_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_simples'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_custos_rebanho_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_perfil_animal'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_custos_rebanho_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_perfil_animal'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_custos_rebanho_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_pesagens_resumo_animais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_custos_rebanho_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_custos_rebanho_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_animais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_custos_rebanho_compra_insumo_id_fkey'
            columns: ['compra_insumo_id']
            isOneToOne: false
            referencedRelation: 'gado_compras_insumos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_custos_rebanho_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'gado_fazendas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_custos_rebanho_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_compra_lote_historico'
            referencedColumns: ['fazenda_id']
          },
          {
            foreignKeyName: 'gado_custos_rebanho_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['fazenda_id']
          },
          {
            foreignKeyName: 'gado_custos_rebanho_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['fazenda_id']
          },
          {
            foreignKeyName: 'gado_custos_rebanho_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['fazenda_id']
          },
          {
            foreignKeyName: 'gado_custos_rebanho_pasto_id_fkey'
            columns: ['pasto_id']
            isOneToOne: false
            referencedRelation: 'gado_pastos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_custos_rebanho_pasto_id_fkey'
            columns: ['pasto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_pastos_resumo'
            referencedColumns: ['pasto_id']
          },
          {
            foreignKeyName: 'gado_custos_rebanho_pasto_id_fkey'
            columns: ['pasto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['pasto_id']
          },
          {
            foreignKeyName: 'gado_custos_rebanho_pasto_id_fkey'
            columns: ['pasto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['pasto_id']
          },
          {
            foreignKeyName: 'gado_custos_rebanho_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_custos_rebanho_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_custos_rebanho_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_custos_rebanho_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_custos_rebanho_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_custos_rebanho_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_custos_rebanho_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_custos_rebanho_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_custos_rebanho_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_custos_rebanho_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_custos_rebanho_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      gado_equipe: {
        Row: {
          ativo: boolean
          cargo: string
          created_at: string
          created_by: string | null
          email: string | null
          fazenda_id: string | null
          id: string
          nivel_acesso: string
          nome: string
          observacoes: string | null
          pode_editar_alimentacao: boolean
          pode_editar_animais: boolean
          pode_editar_saude: boolean
          pode_editar_simulador: boolean
          pode_ver_financeiro: boolean
          pode_ver_relatorios: boolean
          projeto_id: string | null
          telefone: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          ativo?: boolean
          cargo?: string
          created_at?: string
          created_by?: string | null
          email?: string | null
          fazenda_id?: string | null
          id?: string
          nivel_acesso?: string
          nome: string
          observacoes?: string | null
          pode_editar_alimentacao?: boolean
          pode_editar_animais?: boolean
          pode_editar_saude?: boolean
          pode_editar_simulador?: boolean
          pode_ver_financeiro?: boolean
          pode_ver_relatorios?: boolean
          projeto_id?: string | null
          telefone?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          ativo?: boolean
          cargo?: string
          created_at?: string
          created_by?: string | null
          email?: string | null
          fazenda_id?: string | null
          id?: string
          nivel_acesso?: string
          nome?: string
          observacoes?: string | null
          pode_editar_alimentacao?: boolean
          pode_editar_animais?: boolean
          pode_editar_saude?: boolean
          pode_editar_simulador?: boolean
          pode_ver_financeiro?: boolean
          pode_ver_relatorios?: boolean
          projeto_id?: string | null
          telefone?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'gado_equipe_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'gado_fazendas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_equipe_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_compra_lote_historico'
            referencedColumns: ['fazenda_id']
          },
          {
            foreignKeyName: 'gado_equipe_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['fazenda_id']
          },
          {
            foreignKeyName: 'gado_equipe_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['fazenda_id']
          },
          {
            foreignKeyName: 'gado_equipe_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['fazenda_id']
          },
          {
            foreignKeyName: 'gado_equipe_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_equipe_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_equipe_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_equipe_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_equipe_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_equipe_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_equipe_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_equipe_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_equipe_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_equipe_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_equipe_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      gado_fazenda_usuarios: {
        Row: {
          created_at: string
          email: string | null
          fazenda_id: string
          id: string
          nome: string | null
          papel: string
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          fazenda_id: string
          id?: string
          nome?: string | null
          papel?: string
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string | null
          fazenda_id?: string
          id?: string
          nome?: string | null
          papel?: string
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'gado_fazenda_usuarios_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'gado_fazendas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_fazenda_usuarios_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_compra_lote_historico'
            referencedColumns: ['fazenda_id']
          },
          {
            foreignKeyName: 'gado_fazenda_usuarios_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['fazenda_id']
          },
          {
            foreignKeyName: 'gado_fazenda_usuarios_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['fazenda_id']
          },
          {
            foreignKeyName: 'gado_fazenda_usuarios_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['fazenda_id']
          },
        ]
      }
      gado_fazendas: {
        Row: {
          cidade: string | null
          created_at: string
          id: string
          nome: string
          observacoes: string | null
          owner_user_id: string
          responsavel: string | null
          uf: string | null
          updated_at: string
        }
        Insert: {
          cidade?: string | null
          created_at?: string
          id?: string
          nome: string
          observacoes?: string | null
          owner_user_id?: string
          responsavel?: string | null
          uf?: string | null
          updated_at?: string
        }
        Update: {
          cidade?: string | null
          created_at?: string
          id?: string
          nome?: string
          observacoes?: string | null
          owner_user_id?: string
          responsavel?: string | null
          uf?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      gado_insumos_catalogo: {
        Row: {
          ativo: boolean
          created_at: string
          id: string
          nome: string
          observacoes: string | null
          tipo_insumo: string
          unidade_padrao: string
          updated_at: string
        }
        Insert: {
          ativo?: boolean
          created_at?: string
          id?: string
          nome: string
          observacoes?: string | null
          tipo_insumo?: string
          unidade_padrao?: string
          updated_at?: string
        }
        Update: {
          ativo?: boolean
          created_at?: string
          id?: string
          nome?: string
          observacoes?: string | null
          tipo_insumo?: string
          unidade_padrao?: string
          updated_at?: string
        }
        Relationships: []
      }
      gado_movimentacoes_pasto: {
        Row: {
          animal_id: string
          created_at: string
          data_movimentacao: string
          id: string
          motivo: string | null
          observacoes: string | null
          pasto_destino_id: string | null
          pasto_origem_id: string | null
          projeto_id: string
          updated_at: string
        }
        Insert: {
          animal_id: string
          created_at?: string
          data_movimentacao?: string
          id?: string
          motivo?: string | null
          observacoes?: string | null
          pasto_destino_id?: string | null
          pasto_origem_id?: string | null
          projeto_id: string
          updated_at?: string
        }
        Update: {
          animal_id?: string
          created_at?: string
          data_movimentacao?: string
          id?: string
          motivo?: string | null
          observacoes?: string | null
          pasto_destino_id?: string | null
          pasto_origem_id?: string | null
          projeto_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'gado_movimentacoes_pasto_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'gado_animais'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_alertas_operacionais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_acoes'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_indicadores'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_operacional'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_simples'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_simples'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_perfil_animal'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_perfil_animal'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_pesagens_resumo_animais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_animais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_pasto_destino_id_fkey'
            columns: ['pasto_destino_id']
            isOneToOne: false
            referencedRelation: 'gado_pastos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_pasto_destino_id_fkey'
            columns: ['pasto_destino_id']
            isOneToOne: false
            referencedRelation: 'v_gado_pastos_resumo'
            referencedColumns: ['pasto_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_pasto_destino_id_fkey'
            columns: ['pasto_destino_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['pasto_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_pasto_destino_id_fkey'
            columns: ['pasto_destino_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['pasto_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_pasto_origem_id_fkey'
            columns: ['pasto_origem_id']
            isOneToOne: false
            referencedRelation: 'gado_pastos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_pasto_origem_id_fkey'
            columns: ['pasto_origem_id']
            isOneToOne: false
            referencedRelation: 'v_gado_pastos_resumo'
            referencedColumns: ['pasto_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_pasto_origem_id_fkey'
            columns: ['pasto_origem_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['pasto_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_pasto_origem_id_fkey'
            columns: ['pasto_origem_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['pasto_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      gado_pastos: {
        Row: {
          area_hectares: number | null
          capacidade_cabecas: number | null
          created_at: string
          id: string
          nome: string
          observacoes: string | null
          projeto_id: string
          status: string
          tipo_capim: string | null
          updated_at: string
        }
        Insert: {
          area_hectares?: number | null
          capacidade_cabecas?: number | null
          created_at?: string
          id?: string
          nome: string
          observacoes?: string | null
          projeto_id: string
          status?: string
          tipo_capim?: string | null
          updated_at?: string
        }
        Update: {
          area_hectares?: number | null
          capacidade_cabecas?: number | null
          created_at?: string
          id?: string
          nome?: string
          observacoes?: string | null
          projeto_id?: string
          status?: string
          tipo_capim?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'gado_pastos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pastos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pastos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pastos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pastos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pastos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pastos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pastos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pastos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pastos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pastos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      gado_pesagens: {
        Row: {
          animal_id: string
          created_at: string
          data_pesagem: string
          id: string
          observacao: string | null
          peso_kg: number
          projeto_id: string
          updated_at: string
        }
        Insert: {
          animal_id: string
          created_at?: string
          data_pesagem?: string
          id?: string
          observacao?: string | null
          peso_kg: number
          projeto_id: string
          updated_at?: string
        }
        Update: {
          animal_id?: string
          created_at?: string
          data_pesagem?: string
          id?: string
          observacao?: string | null
          peso_kg?: number
          projeto_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'gado_animais'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_alertas_operacionais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_acoes'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_indicadores'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_operacional'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_simples'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_simples'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_perfil_animal'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_perfil_animal'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_pesagens_resumo_animais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_animais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      gado_pesagens_planejadas: {
        Row: {
          created_at: string
          data_prevista: string
          descricao: string | null
          dia_projeto: number
          id: string
          obrigatoria: boolean
          projeto_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          data_prevista: string
          descricao?: string | null
          dia_projeto: number
          id?: string
          obrigatoria?: boolean
          projeto_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          data_prevista?: string
          descricao?: string | null
          dia_projeto?: number
          id?: string
          obrigatoria?: boolean
          projeto_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'gado_pesagens_planejadas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pesagens_planejadas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_planejadas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_planejadas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_planejadas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_planejadas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_planejadas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_planejadas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_planejadas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_planejadas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_planejadas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      gado_projetos: {
        Row: {
          categoria_principal: Database['public']['Enums']['gado_categoria_animal']
          created_at: string
          custo_alimentacao_previsto_cabeca: number
          custo_sal_nucleo_dia_lote: number | null
          custo_sanitario_previsto_cabeca: number
          custo_volumoso_dia_lote: number | null
          data_inicio: string
          data_saida_prevista: string
          fazenda_id: string | null
          finalidade: string | null
          gmd_meta_kg_dia: number
          id: string
          kg_racao_cabeca_dia: number | null
          localizacao: string | null
          metodo_custo_compra: string | null
          nome_lote: string
          observacoes: string | null
          observacoes_rebanho: string | null
          outros_custos_cabeca: number | null
          outros_custos_previsto_cabeca: number
          peso_final_meta_kg: number | null
          peso_medio_inicial_kg: number
          prazo_dias: number
          preco_compra_kg_vivo: number
          preco_kg_racao: number | null
          preco_venda_arroba: number
          quantidade_prevista: number
          rendimento_carcaca_percent: number
          sistema: Database['public']['Enums']['gado_sistema_producao']
          status: Database['public']['Enums']['gado_status_projeto']
          tipo_operacao: string | null
          updated_at: string
        }
        Insert: {
          categoria_principal?: Database['public']['Enums']['gado_categoria_animal']
          created_at?: string
          custo_alimentacao_previsto_cabeca?: number
          custo_sal_nucleo_dia_lote?: number | null
          custo_sanitario_previsto_cabeca?: number
          custo_volumoso_dia_lote?: number | null
          data_inicio?: string
          data_saida_prevista?: string
          fazenda_id?: string | null
          finalidade?: string | null
          gmd_meta_kg_dia?: number
          id?: string
          kg_racao_cabeca_dia?: number | null
          localizacao?: string | null
          metodo_custo_compra?: string | null
          nome_lote: string
          observacoes?: string | null
          observacoes_rebanho?: string | null
          outros_custos_cabeca?: number | null
          outros_custos_previsto_cabeca?: number
          peso_final_meta_kg?: number | null
          peso_medio_inicial_kg?: number
          prazo_dias?: number
          preco_compra_kg_vivo?: number
          preco_kg_racao?: number | null
          preco_venda_arroba?: number
          quantidade_prevista?: number
          rendimento_carcaca_percent?: number
          sistema?: Database['public']['Enums']['gado_sistema_producao']
          status?: Database['public']['Enums']['gado_status_projeto']
          tipo_operacao?: string | null
          updated_at?: string
        }
        Update: {
          categoria_principal?: Database['public']['Enums']['gado_categoria_animal']
          created_at?: string
          custo_alimentacao_previsto_cabeca?: number
          custo_sal_nucleo_dia_lote?: number | null
          custo_sanitario_previsto_cabeca?: number
          custo_volumoso_dia_lote?: number | null
          data_inicio?: string
          data_saida_prevista?: string
          fazenda_id?: string | null
          finalidade?: string | null
          gmd_meta_kg_dia?: number
          id?: string
          kg_racao_cabeca_dia?: number | null
          localizacao?: string | null
          metodo_custo_compra?: string | null
          nome_lote?: string
          observacoes?: string | null
          observacoes_rebanho?: string | null
          outros_custos_cabeca?: number | null
          outros_custos_previsto_cabeca?: number
          peso_final_meta_kg?: number | null
          peso_medio_inicial_kg?: number
          prazo_dias?: number
          preco_compra_kg_vivo?: number
          preco_kg_racao?: number | null
          preco_venda_arroba?: number
          quantidade_prevista?: number
          rendimento_carcaca_percent?: number
          sistema?: Database['public']['Enums']['gado_sistema_producao']
          status?: Database['public']['Enums']['gado_status_projeto']
          tipo_operacao?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'gado_projetos_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'gado_fazendas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_projetos_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_compra_lote_historico'
            referencedColumns: ['fazenda_id']
          },
          {
            foreignKeyName: 'gado_projetos_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['fazenda_id']
          },
          {
            foreignKeyName: 'gado_projetos_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['fazenda_id']
          },
          {
            foreignKeyName: 'gado_projetos_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['fazenda_id']
          },
        ]
      }
      gado_simulacoes: {
        Row: {
          created_at: string
          created_by: string | null
          custo_alimentacao_cabeca: number
          custo_sanitario_cabeca: number
          gmd_kg_dia: number
          id: string
          nome: string
          observacoes: string | null
          outros_custos_cabeca: number
          peso_inicial_kg: number
          prazo_dias: number
          preco_compra_kg_vivo: number
          preco_venda_arroba: number
          projeto_id: string | null
          quantidade_cabecas: number
          rendimento_carcaca_percent: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          custo_alimentacao_cabeca?: number
          custo_sanitario_cabeca?: number
          gmd_kg_dia?: number
          id?: string
          nome?: string
          observacoes?: string | null
          outros_custos_cabeca?: number
          peso_inicial_kg?: number
          prazo_dias?: number
          preco_compra_kg_vivo?: number
          preco_venda_arroba?: number
          projeto_id?: string | null
          quantidade_cabecas?: number
          rendimento_carcaca_percent?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          custo_alimentacao_cabeca?: number
          custo_sanitario_cabeca?: number
          gmd_kg_dia?: number
          id?: string
          nome?: string
          observacoes?: string | null
          outros_custos_cabeca?: number
          peso_inicial_kg?: number
          prazo_dias?: number
          preco_compra_kg_vivo?: number
          preco_venda_arroba?: number
          projeto_id?: string | null
          quantidade_cabecas?: number
          rendimento_carcaca_percent?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'gado_simulacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_simulacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_simulacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_simulacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_simulacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_simulacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_simulacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_simulacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_simulacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_simulacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_simulacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      gado_usuarios_projetos: {
        Row: {
          created_at: string | null
          id: string
          projeto_id: string
          role: string
          status: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          projeto_id: string
          role?: string
          status?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          projeto_id?: string
          role?: string
          status?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'gado_usuarios_projetos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_usuarios_projetos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_usuarios_projetos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_usuarios_projetos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_usuarios_projetos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_usuarios_projetos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_usuarios_projetos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_usuarios_projetos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_usuarios_projetos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_usuarios_projetos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_usuarios_projetos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      gado_vacinacoes: {
        Row: {
          animal_id: string
          created_at: string
          data_aplicacao: string
          dose_ml: number | null
          id: string
          lote_vacina: string | null
          observacoes: string | null
          projeto_id: string
          proxima_dose_data: string | null
          responsavel: string | null
          updated_at: string
          vacina_id: string
        }
        Insert: {
          animal_id: string
          created_at?: string
          data_aplicacao?: string
          dose_ml?: number | null
          id?: string
          lote_vacina?: string | null
          observacoes?: string | null
          projeto_id: string
          proxima_dose_data?: string | null
          responsavel?: string | null
          updated_at?: string
          vacina_id: string
        }
        Update: {
          animal_id?: string
          created_at?: string
          data_aplicacao?: string
          dose_ml?: number | null
          id?: string
          lote_vacina?: string | null
          observacoes?: string | null
          projeto_id?: string
          proxima_dose_data?: string | null
          responsavel?: string | null
          updated_at?: string
          vacina_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'gado_animais'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_alertas_operacionais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_acoes'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_indicadores'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_operacional'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_simples'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_simples'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_perfil_animal'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_perfil_animal'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_pesagens_resumo_animais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_animais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_vacina_id_fkey'
            columns: ['vacina_id']
            isOneToOne: false
            referencedRelation: 'gado_vacinas_catalogo'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_vacina_id_fkey'
            columns: ['vacina_id']
            isOneToOne: false
            referencedRelation: 'v_gado_vacinacoes_historico'
            referencedColumns: ['vacina_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_vacina_id_fkey'
            columns: ['vacina_id']
            isOneToOne: false
            referencedRelation: 'v_gado_vacinas_catalogo'
            referencedColumns: ['vacina_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_vacina_id_fkey'
            columns: ['vacina_id']
            isOneToOne: false
            referencedRelation: 'v_gado_vacinas_pendentes'
            referencedColumns: ['vacina_id']
          },
        ]
      }
      gado_vacinas_catalogo: {
        Row: {
          carencia_dias: number | null
          created_at: string
          created_by: string | null
          doenca_alvo: string | null
          dose_ml: number | null
          fabricante: string | null
          id: string
          nome: string
          observacoes: string | null
          reforco_dias: number | null
          status: string
          updated_at: string
          via_aplicacao: string | null
        }
        Insert: {
          carencia_dias?: number | null
          created_at?: string
          created_by?: string | null
          doenca_alvo?: string | null
          dose_ml?: number | null
          fabricante?: string | null
          id?: string
          nome: string
          observacoes?: string | null
          reforco_dias?: number | null
          status?: string
          updated_at?: string
          via_aplicacao?: string | null
        }
        Update: {
          carencia_dias?: number | null
          created_at?: string
          created_by?: string | null
          doenca_alvo?: string | null
          dose_ml?: number | null
          fabricante?: string | null
          id?: string
          nome?: string
          observacoes?: string | null
          reforco_dias?: number | null
          status?: string
          updated_at?: string
          via_aplicacao?: string | null
        }
        Relationships: []
      }
      gado_vendas: {
        Row: {
          arrobas_total: number | null
          created_at: string
          data_venda: string
          desconto_total: number
          id: string
          kg_carcaca_total: number | null
          observacoes: string | null
          peso_medio_vivo_kg: number
          preco_arroba: number
          projeto_id: string
          quantidade_cabecas: number
          receita_bruta: number | null
          receita_liquida: number | null
          rendimento_carcaca_percent: number
          updated_at: string
        }
        Insert: {
          arrobas_total?: number | null
          created_at?: string
          data_venda?: string
          desconto_total?: number
          id?: string
          kg_carcaca_total?: number | null
          observacoes?: string | null
          peso_medio_vivo_kg: number
          preco_arroba: number
          projeto_id: string
          quantidade_cabecas: number
          receita_bruta?: number | null
          receita_liquida?: number | null
          rendimento_carcaca_percent?: number
          updated_at?: string
        }
        Update: {
          arrobas_total?: number | null
          created_at?: string
          data_venda?: string
          desconto_total?: number
          id?: string
          kg_carcaca_total?: number | null
          observacoes?: string | null
          peso_medio_vivo_kg?: number
          preco_arroba?: number
          projeto_id?: string
          quantidade_cabecas?: number
          receita_bruta?: number | null
          receita_liquida?: number | null
          rendimento_carcaca_percent?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'gado_vendas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_vendas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vendas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vendas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vendas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vendas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vendas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vendas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vendas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vendas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vendas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      importacao_ofx: {
        Row: {
          cnpj_id: string
          company_id: string | null
          conta_bancaria_id: string
          data_criacao: string | null
          data_importacao: string | null
          empresa_id: string
          id: string
          nome_arquivo: string
          projeto_id: string
          saldo_final_ofx: number | null
          status: string | null
          total_transacoes: number | null
          transacoes_duplicadas: number | null
          transacoes_erro: number | null
          transacoes_novas: number | null
          unidade_id: string
          usuario_criador_id: string | null
        }
        Insert: {
          cnpj_id: string
          company_id?: string | null
          conta_bancaria_id: string
          data_criacao?: string | null
          data_importacao?: string | null
          empresa_id: string
          id?: string
          nome_arquivo: string
          projeto_id: string
          saldo_final_ofx?: number | null
          status?: string | null
          total_transacoes?: number | null
          transacoes_duplicadas?: number | null
          transacoes_erro?: number | null
          transacoes_novas?: number | null
          unidade_id: string
          usuario_criador_id?: string | null
        }
        Update: {
          cnpj_id?: string
          company_id?: string | null
          conta_bancaria_id?: string
          data_criacao?: string | null
          data_importacao?: string | null
          empresa_id?: string
          id?: string
          nome_arquivo?: string
          projeto_id?: string
          saldo_final_ofx?: number | null
          status?: string | null
          total_transacoes?: number | null
          transacoes_duplicadas?: number | null
          transacoes_erro?: number | null
          transacoes_novas?: number | null
          unidade_id?: string
          usuario_criador_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'importacao_ofx_cnpj_id_fkey'
            columns: ['cnpj_id']
            isOneToOne: false
            referencedRelation: 'empresas_cnpjs'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'importacao_ofx_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'importacao_ofx_conta_bancaria_id_fkey'
            columns: ['conta_bancaria_id']
            isOneToOne: false
            referencedRelation: 'contas_bancarias'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'importacao_ofx_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'importacao_ofx_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'importacao_ofx_unidade_id_fkey'
            columns: ['unidade_id']
            isOneToOne: false
            referencedRelation: 'unidades'
            referencedColumns: ['id']
          },
        ]
      }
      importacoes_ofx: {
        Row: {
          banco: string | null
          conta: string | null
          conta_bancaria_id: string | null
          created_at: string
          criado_em: string | null
          data_fim: string | null
          data_importacao: string
          data_inicio: string | null
          empresa_id: string | null
          familia_id: string | null
          id: string
          json_recebido: Json | null
          nome_arquivo: string
          observacao: string | null
          status: string | null
          total_ignoradas: number | null
          total_recebidas: number | null
          total_transacoes: number | null
          updated_at: string
        }
        Insert: {
          banco?: string | null
          conta?: string | null
          conta_bancaria_id?: string | null
          created_at?: string
          criado_em?: string | null
          data_fim?: string | null
          data_importacao?: string
          data_inicio?: string | null
          empresa_id?: string | null
          familia_id?: string | null
          id?: string
          json_recebido?: Json | null
          nome_arquivo: string
          observacao?: string | null
          status?: string | null
          total_ignoradas?: number | null
          total_recebidas?: number | null
          total_transacoes?: number | null
          updated_at?: string
        }
        Update: {
          banco?: string | null
          conta?: string | null
          conta_bancaria_id?: string | null
          created_at?: string
          criado_em?: string | null
          data_fim?: string | null
          data_importacao?: string
          data_inicio?: string | null
          empresa_id?: string | null
          familia_id?: string | null
          id?: string
          json_recebido?: Json | null
          nome_arquivo?: string
          observacao?: string | null
          status?: string | null
          total_ignoradas?: number | null
          total_recebidas?: number | null
          total_transacoes?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'importacoes_ofx_conta_bancaria_id_fkey'
            columns: ['conta_bancaria_id']
            isOneToOne: false
            referencedRelation: 'contas_bancarias'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'importacoes_ofx_familia_id_fkey'
            columns: ['familia_id']
            isOneToOne: false
            referencedRelation: 'familias'
            referencedColumns: ['id']
          },
        ]
      }
      inventory_items: {
        Row: {
          category_id: string | null
          cnpj_empresa: string | null
          company_id: string | null
          created_at: string
          description: string | null
          empresa_id: string | null
          expiry_date: string | null
          extra_fields: Json | null
          id: string
          last_count_date: string | null
          last_count_user_id: string | null
          last_count_user_name: string | null
          min_stock: number
          name: string
          project_id: string
          quantity: number
          unit: string
          unit_cost: number
          user_id: string
        }
        Insert: {
          category_id?: string | null
          cnpj_empresa?: string | null
          company_id?: string | null
          created_at?: string
          description?: string | null
          empresa_id?: string | null
          expiry_date?: string | null
          extra_fields?: Json | null
          id?: string
          last_count_date?: string | null
          last_count_user_id?: string | null
          last_count_user_name?: string | null
          min_stock?: number
          name: string
          project_id?: string
          quantity?: number
          unit: string
          unit_cost?: number
          user_id: string
        }
        Update: {
          category_id?: string | null
          cnpj_empresa?: string | null
          company_id?: string | null
          created_at?: string
          description?: string | null
          empresa_id?: string | null
          expiry_date?: string | null
          extra_fields?: Json | null
          id?: string
          last_count_date?: string | null
          last_count_user_id?: string | null
          last_count_user_name?: string | null
          min_stock?: number
          name?: string
          project_id?: string
          quantity?: number
          unit?: string
          unit_cost?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'inventory_items_category_id_fkey'
            columns: ['category_id']
            isOneToOne: false
            referencedRelation: 'categories'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'inventory_items_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'inventory_items_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'companies'
            referencedColumns: ['id']
          },
        ]
      }
      invitations: {
        Row: {
          company_id: string | null
          created_at: string
          created_by: string | null
          email: string
          expires_at: string
          id: string
          project_id: string | null
          role: string
          status: string
          token: string
        }
        Insert: {
          company_id?: string | null
          created_at?: string
          created_by?: string | null
          email: string
          expires_at?: string
          id?: string
          project_id?: string | null
          role?: string
          status?: string
          token?: string
        }
        Update: {
          company_id?: string | null
          created_at?: string
          created_by?: string | null
          email?: string
          expires_at?: string
          id?: string
          project_id?: string | null
          role?: string
          status?: string
          token?: string
        }
        Relationships: [
          {
            foreignKeyName: 'invitations_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'companies'
            referencedColumns: ['id']
          },
        ]
      }
      jarvis_acoes: {
        Row: {
          confirmado_em: string | null
          conversa_id: string | null
          criado_em: string
          executado_em: string | null
          exige_confirmacao: boolean
          id: string
          mensagem_erro: string | null
          nome_acao: string
          parametros: Json
          projeto_id: string | null
          resultado: Json | null
          status: string
          usuario_id: string
        }
        Insert: {
          confirmado_em?: string | null
          conversa_id?: string | null
          criado_em?: string
          executado_em?: string | null
          exige_confirmacao?: boolean
          id?: string
          mensagem_erro?: string | null
          nome_acao: string
          parametros?: Json
          projeto_id?: string | null
          resultado?: Json | null
          status?: string
          usuario_id: string
        }
        Update: {
          confirmado_em?: string | null
          conversa_id?: string | null
          criado_em?: string
          executado_em?: string | null
          exige_confirmacao?: boolean
          id?: string
          mensagem_erro?: string | null
          nome_acao?: string
          parametros?: Json
          projeto_id?: string | null
          resultado?: Json | null
          status?: string
          usuario_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'jarvis_acoes_conversa_id_fkey'
            columns: ['conversa_id']
            isOneToOne: false
            referencedRelation: 'jarvis_conversas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'jarvis_acoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'jarvis_projetos'
            referencedColumns: ['id']
          },
        ]
      }
      jarvis_configuracoes: {
        Row: {
          atualizado_em: string
          chave: string
          criado_em: string
          id: string
          usuario_id: string
          valor: Json
        }
        Insert: {
          atualizado_em?: string
          chave: string
          criado_em?: string
          id?: string
          usuario_id: string
          valor?: Json
        }
        Update: {
          atualizado_em?: string
          chave?: string
          criado_em?: string
          id?: string
          usuario_id?: string
          valor?: Json
        }
        Relationships: []
      }
      jarvis_conversas: {
        Row: {
          atualizado_em: string
          criado_em: string
          id: string
          projeto_id: string | null
          status: string
          titulo: string | null
          usuario_id: string
        }
        Insert: {
          atualizado_em?: string
          criado_em?: string
          id?: string
          projeto_id?: string | null
          status?: string
          titulo?: string | null
          usuario_id: string
        }
        Update: {
          atualizado_em?: string
          criado_em?: string
          id?: string
          projeto_id?: string | null
          status?: string
          titulo?: string | null
          usuario_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'jarvis_conversas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'jarvis_projetos'
            referencedColumns: ['id']
          },
        ]
      }
      jarvis_logs_auditoria: {
        Row: {
          criado_em: string
          detalhes: Json
          evento: string
          id: number
          projeto_id: string | null
          usuario_id: string | null
        }
        Insert: {
          criado_em?: string
          detalhes?: Json
          evento: string
          id?: never
          projeto_id?: string | null
          usuario_id?: string | null
        }
        Update: {
          criado_em?: string
          detalhes?: Json
          evento?: string
          id?: never
          projeto_id?: string | null
          usuario_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'jarvis_logs_auditoria_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'jarvis_projetos'
            referencedColumns: ['id']
          },
        ]
      }
      jarvis_mensagens: {
        Row: {
          autor: string
          conteudo: string
          conversa_id: string
          criado_em: string
          id: string
          metadados: Json
          usuario_id: string | null
        }
        Insert: {
          autor: string
          conteudo: string
          conversa_id: string
          criado_em?: string
          id?: string
          metadados?: Json
          usuario_id?: string | null
        }
        Update: {
          autor?: string
          conteudo?: string
          conversa_id?: string
          criado_em?: string
          id?: string
          metadados?: Json
          usuario_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'jarvis_mensagens_conversa_id_fkey'
            columns: ['conversa_id']
            isOneToOne: false
            referencedRelation: 'jarvis_conversas'
            referencedColumns: ['id']
          },
        ]
      }
      jarvis_projetos: {
        Row: {
          ativo: boolean
          atualizado_em: string
          codigo: string
          criado_em: string
          descricao: string | null
          id: string
          nome: string
          somente_leitura: boolean
          tipo_integracao: string
        }
        Insert: {
          ativo?: boolean
          atualizado_em?: string
          codigo: string
          criado_em?: string
          descricao?: string | null
          id?: string
          nome: string
          somente_leitura?: boolean
          tipo_integracao?: string
        }
        Update: {
          ativo?: boolean
          atualizado_em?: string
          codigo?: string
          criado_em?: string
          descricao?: string | null
          id?: string
          nome?: string
          somente_leitura?: boolean
          tipo_integracao?: string
        }
        Relationships: []
      }
      jarvis_usuarios_projetos: {
        Row: {
          criado_em: string
          id: string
          papel: string
          pode_consultar: boolean
          pode_executar: boolean
          projeto_id: string
          usuario_id: string
        }
        Insert: {
          criado_em?: string
          id?: string
          papel?: string
          pode_consultar?: boolean
          pode_executar?: boolean
          projeto_id: string
          usuario_id: string
        }
        Update: {
          criado_em?: string
          id?: string
          papel?: string
          pode_consultar?: boolean
          pode_executar?: boolean
          projeto_id?: string
          usuario_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'jarvis_usuarios_projetos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'jarvis_projetos'
            referencedColumns: ['id']
          },
        ]
      }
      lancamentos: {
        Row: {
          cartao_credito_id: string | null
          categoria_id: string | null
          conta_bancaria_id: string | null
          created_at: string
          data: string
          data_competencia: string | null
          data_pagamento: string | null
          data_vencimento: string | null
          descricao: string
          empresa_id: string
          familia_id: string | null
          forma_pagamento: string | null
          id: string
          membro_id: string | null
          numero_parcela: number | null
          observacao: string | null
          origem: string | null
          parcelado: boolean | null
          recorrente: boolean | null
          status: string | null
          tipo: string
          total_parcelas: number | null
          updated_at: string
          valor: number
        }
        Insert: {
          cartao_credito_id?: string | null
          categoria_id?: string | null
          conta_bancaria_id?: string | null
          created_at?: string
          data: string
          data_competencia?: string | null
          data_pagamento?: string | null
          data_vencimento?: string | null
          descricao: string
          empresa_id: string
          familia_id?: string | null
          forma_pagamento?: string | null
          id?: string
          membro_id?: string | null
          numero_parcela?: number | null
          observacao?: string | null
          origem?: string | null
          parcelado?: boolean | null
          recorrente?: boolean | null
          status?: string | null
          tipo: string
          total_parcelas?: number | null
          updated_at?: string
          valor: number
        }
        Update: {
          cartao_credito_id?: string | null
          categoria_id?: string | null
          conta_bancaria_id?: string | null
          created_at?: string
          data?: string
          data_competencia?: string | null
          data_pagamento?: string | null
          data_vencimento?: string | null
          descricao?: string
          empresa_id?: string
          familia_id?: string | null
          forma_pagamento?: string | null
          id?: string
          membro_id?: string | null
          numero_parcela?: number | null
          observacao?: string | null
          origem?: string | null
          parcelado?: boolean | null
          recorrente?: boolean | null
          status?: string | null
          tipo?: string
          total_parcelas?: number | null
          updated_at?: string
          valor?: number
        }
        Relationships: [
          {
            foreignKeyName: 'lancamentos_cartao_credito_id_fkey'
            columns: ['cartao_credito_id']
            isOneToOne: false
            referencedRelation: 'cartoes_credito'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'lancamentos_categoria_id_fkey'
            columns: ['categoria_id']
            isOneToOne: false
            referencedRelation: 'categorias_financeiras'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'lancamentos_conta_bancaria_id_fkey'
            columns: ['conta_bancaria_id']
            isOneToOne: false
            referencedRelation: 'contas_bancarias'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'lancamentos_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'lancamentos_familia_id_fkey'
            columns: ['familia_id']
            isOneToOne: false
            referencedRelation: 'familias'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'lancamentos_membro_id_fkey'
            columns: ['membro_id']
            isOneToOne: false
            referencedRelation: 'membros_familia'
            referencedColumns: ['id']
          },
        ]
      }
      logs_auditoria: {
        Row: {
          acao: string
          auth_user_id: string | null
          cnpj_id: string | null
          data_hora: string
          detalhes: Json | null
          empresa_id: string | null
          id: string
          ip: string | null
          modulo: string
          projeto_id: string | null
          registro_id: string | null
          resultado: string | null
          tabela_afetada: string | null
          unidade_id: string | null
          user_agent: string | null
          usuario_id: string | null
        }
        Insert: {
          acao: string
          auth_user_id?: string | null
          cnpj_id?: string | null
          data_hora?: string
          detalhes?: Json | null
          empresa_id?: string | null
          id?: string
          ip?: string | null
          modulo: string
          projeto_id?: string | null
          registro_id?: string | null
          resultado?: string | null
          tabela_afetada?: string | null
          unidade_id?: string | null
          user_agent?: string | null
          usuario_id?: string | null
        }
        Update: {
          acao?: string
          auth_user_id?: string | null
          cnpj_id?: string | null
          data_hora?: string
          detalhes?: Json | null
          empresa_id?: string | null
          id?: string
          ip?: string | null
          modulo?: string
          projeto_id?: string | null
          registro_id?: string | null
          resultado?: string | null
          tabela_afetada?: string | null
          unidade_id?: string | null
          user_agent?: string | null
          usuario_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'logs_auditoria_cnpj_id_fkey'
            columns: ['cnpj_id']
            isOneToOne: false
            referencedRelation: 'empresas_cnpjs'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'logs_auditoria_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'logs_auditoria_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'logs_auditoria_unidade_id_fkey'
            columns: ['unidade_id']
            isOneToOne: false
            referencedRelation: 'unidades'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'logs_auditoria_usuario_id_fkey'
            columns: ['usuario_id']
            isOneToOne: false
            referencedRelation: 'usuarios'
            referencedColumns: ['id']
          },
        ]
      }
      membros_familia: {
        Row: {
          created_at: string
          familia_id: string | null
          id: string
          nome: string
          observacao: string | null
          status: string | null
          tipo: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          familia_id?: string | null
          id?: string
          nome: string
          observacao?: string | null
          status?: string | null
          tipo?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          familia_id?: string | null
          id?: string
          nome?: string
          observacao?: string | null
          status?: string | null
          tipo?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'membros_familia_familia_id_fkey'
            columns: ['familia_id']
            isOneToOne: false
            referencedRelation: 'familias'
            referencedColumns: ['id']
          },
        ]
      }
      modelos_documentos: {
        Row: {
          atualizado_em: string | null
          cnpj_id: string
          conteudo_modelo: string | null
          criado_em: string | null
          criado_por: string | null
          empresa_id: string
          id: string
          nome_modelo: string
          projeto_id: string
          status: string | null
          tipo_documento: string
          unidade_id: string
        }
        Insert: {
          atualizado_em?: string | null
          cnpj_id: string
          conteudo_modelo?: string | null
          criado_em?: string | null
          criado_por?: string | null
          empresa_id: string
          id?: string
          nome_modelo: string
          projeto_id: string
          status?: string | null
          tipo_documento: string
          unidade_id: string
        }
        Update: {
          atualizado_em?: string | null
          cnpj_id?: string
          conteudo_modelo?: string | null
          criado_em?: string | null
          criado_por?: string | null
          empresa_id?: string
          id?: string
          nome_modelo?: string
          projeto_id?: string
          status?: string | null
          tipo_documento?: string
          unidade_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'modelos_documentos_cnpj_id_fkey'
            columns: ['cnpj_id']
            isOneToOne: false
            referencedRelation: 'empresas_cnpjs'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'modelos_documentos_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'modelos_documentos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'modelos_documentos_unidade_id_fkey'
            columns: ['unidade_id']
            isOneToOne: false
            referencedRelation: 'unidades'
            referencedColumns: ['id']
          },
        ]
      }
      movimentacoes_bancarias: {
        Row: {
          categoria_id: string | null
          cliente_fornecedor_id: string | null
          cnpj_empresa: string | null
          cnpj_id: string
          conta_bancaria_id: string
          data: string
          data_alteracao: string | null
          data_criacao: string | null
          data_pagamento: string | null
          data_vencimento: string | null
          descricao: string
          documento: string | null
          empresa_id: string
          fitid: string | null
          forma_pagamento_id: string | null
          hash_duplicidade: string | null
          id: string
          importacao_ofx_id: string | null
          lancamento_id: string | null
          origem: string | null
          projeto_id: string
          status: string | null
          tipo: string | null
          unidade_id: string
          usuario_alteracao_id: string | null
          usuario_criador_id: string | null
          valor: number
        }
        Insert: {
          categoria_id?: string | null
          cliente_fornecedor_id?: string | null
          cnpj_empresa?: string | null
          cnpj_id: string
          conta_bancaria_id: string
          data: string
          data_alteracao?: string | null
          data_criacao?: string | null
          data_pagamento?: string | null
          data_vencimento?: string | null
          descricao: string
          documento?: string | null
          empresa_id: string
          fitid?: string | null
          forma_pagamento_id?: string | null
          hash_duplicidade?: string | null
          id?: string
          importacao_ofx_id?: string | null
          lancamento_id?: string | null
          origem?: string | null
          projeto_id: string
          status?: string | null
          tipo?: string | null
          unidade_id: string
          usuario_alteracao_id?: string | null
          usuario_criador_id?: string | null
          valor: number
        }
        Update: {
          categoria_id?: string | null
          cliente_fornecedor_id?: string | null
          cnpj_empresa?: string | null
          cnpj_id?: string
          conta_bancaria_id?: string
          data?: string
          data_alteracao?: string | null
          data_criacao?: string | null
          data_pagamento?: string | null
          data_vencimento?: string | null
          descricao?: string
          documento?: string | null
          empresa_id?: string
          fitid?: string | null
          forma_pagamento_id?: string | null
          hash_duplicidade?: string | null
          id?: string
          importacao_ofx_id?: string | null
          lancamento_id?: string | null
          origem?: string | null
          projeto_id?: string
          status?: string | null
          tipo?: string | null
          unidade_id?: string
          usuario_alteracao_id?: string | null
          usuario_criador_id?: string | null
          valor?: number
        }
        Relationships: [
          {
            foreignKeyName: 'fk_mov_cliente'
            columns: ['cliente_fornecedor_id']
            isOneToOne: false
            referencedRelation: 'clientes'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'fk_mov_forma_pagto'
            columns: ['forma_pagamento_id']
            isOneToOne: false
            referencedRelation: 'formas_pagamento'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'movimentacoes_bancarias_categoria_id_fkey'
            columns: ['categoria_id']
            isOneToOne: false
            referencedRelation: 'categorias_financeiras'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'movimentacoes_bancarias_cnpj_id_fkey'
            columns: ['cnpj_id']
            isOneToOne: false
            referencedRelation: 'empresas_cnpjs'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'movimentacoes_bancarias_conta_bancaria_id_fkey'
            columns: ['conta_bancaria_id']
            isOneToOne: false
            referencedRelation: 'contas_bancarias'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'movimentacoes_bancarias_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'movimentacoes_bancarias_importacao_ofx_id_fkey'
            columns: ['importacao_ofx_id']
            isOneToOne: false
            referencedRelation: 'importacao_ofx'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'movimentacoes_bancarias_lancamento_id_fkey'
            columns: ['lancamento_id']
            isOneToOne: false
            referencedRelation: 'lancamentos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'movimentacoes_bancarias_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'movimentacoes_bancarias_unidade_id_fkey'
            columns: ['unidade_id']
            isOneToOne: false
            referencedRelation: 'unidades'
            referencedColumns: ['id']
          },
        ]
      }
      movimentacoes_estoque: {
        Row: {
          data_movimentacao: string | null
          id: string
          observacao: string | null
          produto_id: string | null
          quantidade_anterior: number | null
          quantidade_nova: number | null
          usuario_responsavel: string | null
          validade_anterior: string | null
          validade_nova: string | null
        }
        Insert: {
          data_movimentacao?: string | null
          id?: string
          observacao?: string | null
          produto_id?: string | null
          quantidade_anterior?: number | null
          quantidade_nova?: number | null
          usuario_responsavel?: string | null
          validade_anterior?: string | null
          validade_nova?: string | null
        }
        Update: {
          data_movimentacao?: string | null
          id?: string
          observacao?: string | null
          produto_id?: string | null
          quantidade_anterior?: number | null
          quantidade_nova?: number | null
          usuario_responsavel?: string | null
          validade_anterior?: string | null
          validade_nova?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'movimentacoes_estoque_produto_id_fkey'
            columns: ['produto_id']
            isOneToOne: false
            referencedRelation: 'produtos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'movimentacoes_estoque_usuario_responsavel_fkey'
            columns: ['usuario_responsavel']
            isOneToOne: false
            referencedRelation: 'usuarios'
            referencedColumns: ['id']
          },
        ]
      }
      odontograma_itens: {
        Row: {
          atualizado_em: string | null
          criado_em: string | null
          dente: string
          face: string | null
          id: string
          observacoes: string | null
          odontograma_id: string
          paciente_id: string
          procedimento: string | null
          situacao: string | null
          status: string | null
        }
        Insert: {
          atualizado_em?: string | null
          criado_em?: string | null
          dente: string
          face?: string | null
          id?: string
          observacoes?: string | null
          odontograma_id: string
          paciente_id: string
          procedimento?: string | null
          situacao?: string | null
          status?: string | null
        }
        Update: {
          atualizado_em?: string | null
          criado_em?: string | null
          dente?: string
          face?: string | null
          id?: string
          observacoes?: string | null
          odontograma_id?: string
          paciente_id?: string
          procedimento?: string | null
          situacao?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'odontograma_itens_odontograma_id_fkey'
            columns: ['odontograma_id']
            isOneToOne: false
            referencedRelation: 'odontogramas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'odontograma_itens_paciente_id_fkey'
            columns: ['paciente_id']
            isOneToOne: false
            referencedRelation: 'pacientes'
            referencedColumns: ['id']
          },
        ]
      }
      odontogramas: {
        Row: {
          cnpj_id: string
          data_alteracao: string | null
          data_criacao: string | null
          data_registro: string | null
          empresa_id: string
          id: string
          observacoes: string | null
          paciente_id: string
          profissional_id: string
          projeto_id: string
          status: string | null
          unidade_id: string
          usuario_alteracao_id: string | null
          usuario_criador_id: string | null
        }
        Insert: {
          cnpj_id: string
          data_alteracao?: string | null
          data_criacao?: string | null
          data_registro?: string | null
          empresa_id: string
          id?: string
          observacoes?: string | null
          paciente_id: string
          profissional_id: string
          projeto_id: string
          status?: string | null
          unidade_id: string
          usuario_alteracao_id?: string | null
          usuario_criador_id?: string | null
        }
        Update: {
          cnpj_id?: string
          data_alteracao?: string | null
          data_criacao?: string | null
          data_registro?: string | null
          empresa_id?: string
          id?: string
          observacoes?: string | null
          paciente_id?: string
          profissional_id?: string
          projeto_id?: string
          status?: string | null
          unidade_id?: string
          usuario_alteracao_id?: string | null
          usuario_criador_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'odontogramas_cnpj_id_fkey'
            columns: ['cnpj_id']
            isOneToOne: false
            referencedRelation: 'empresas_cnpjs'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'odontogramas_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'odontogramas_paciente_id_fkey'
            columns: ['paciente_id']
            isOneToOne: false
            referencedRelation: 'pacientes'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'odontogramas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'odontogramas_unidade_id_fkey'
            columns: ['unidade_id']
            isOneToOne: false
            referencedRelation: 'unidades'
            referencedColumns: ['id']
          },
        ]
      }
      ofx_classification_rules: {
        Row: {
          ativo: boolean | null
          categoria: string
          created_at: string
          id: string
          keyword: string
          prioridade: number | null
          project_id: string
          tipo: string
          updated_at: string
        }
        Insert: {
          ativo?: boolean | null
          categoria: string
          created_at?: string
          id?: string
          keyword: string
          prioridade?: number | null
          project_id: string
          tipo: string
          updated_at?: string
        }
        Update: {
          ativo?: boolean | null
          categoria?: string
          created_at?: string
          id?: string
          keyword?: string
          prioridade?: number | null
          project_id?: string
          tipo?: string
          updated_at?: string
        }
        Relationships: []
      }
      ofx_import_batches: {
        Row: {
          created_at: string
          detected_end_date: string | null
          detected_start_date: string | null
          duplicate_count: number | null
          file_name: string | null
          id: string
          imported_count: number | null
          project_id: string
          selected_competencia: string | null
          status: string | null
          total_transactions: number | null
          user_id: string
        }
        Insert: {
          created_at?: string
          detected_end_date?: string | null
          detected_start_date?: string | null
          duplicate_count?: number | null
          file_name?: string | null
          id?: string
          imported_count?: number | null
          project_id: string
          selected_competencia?: string | null
          status?: string | null
          total_transactions?: number | null
          user_id: string
        }
        Update: {
          created_at?: string
          detected_end_date?: string | null
          detected_start_date?: string | null
          duplicate_count?: number | null
          file_name?: string | null
          id?: string
          imported_count?: number | null
          project_id?: string
          selected_competencia?: string | null
          status?: string | null
          total_transactions?: number | null
          user_id?: string
        }
        Relationships: []
      }
      orcamentos_mensais: {
        Row: {
          categoria_id: string | null
          created_at: string
          familia_id: string | null
          id: string
          mes_ano: string
          updated_at: string
          valor_planejado: number | null
        }
        Insert: {
          categoria_id?: string | null
          created_at?: string
          familia_id?: string | null
          id?: string
          mes_ano: string
          updated_at?: string
          valor_planejado?: number | null
        }
        Update: {
          categoria_id?: string | null
          created_at?: string
          familia_id?: string | null
          id?: string
          mes_ano?: string
          updated_at?: string
          valor_planejado?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'orcamentos_mensais_categoria_id_fkey'
            columns: ['categoria_id']
            isOneToOne: false
            referencedRelation: 'categorias'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'orcamentos_mensais_familia_id_fkey'
            columns: ['familia_id']
            isOneToOne: false
            referencedRelation: 'familias'
            referencedColumns: ['id']
          },
        ]
      }
      ordens_vendas: {
        Row: {
          animal_id: string | null
          brinco: string | null
          comprador: string | null
          created_at: string | null
          data_pesagem: string | null
          data_venda: string | null
          documento_comprador: string | null
          id: string
          observacoes: string | null
          peso_medio_kg: number | null
          peso_total_kg: number | null
          preco_arroba: number | null
          projeto_id: string | null
          quantidade_cabecas: number | null
          status: string | null
          updated_at: string | null
          valor_total: number | null
        }
        Insert: {
          animal_id?: string | null
          brinco?: string | null
          comprador?: string | null
          created_at?: string | null
          data_pesagem?: string | null
          data_venda?: string | null
          documento_comprador?: string | null
          id?: string
          observacoes?: string | null
          peso_medio_kg?: number | null
          peso_total_kg?: number | null
          preco_arroba?: number | null
          projeto_id?: string | null
          quantidade_cabecas?: number | null
          status?: string | null
          updated_at?: string | null
          valor_total?: number | null
        }
        Update: {
          animal_id?: string | null
          brinco?: string | null
          comprador?: string | null
          created_at?: string | null
          data_pesagem?: string | null
          data_venda?: string | null
          documento_comprador?: string | null
          id?: string
          observacoes?: string | null
          peso_medio_kg?: number | null
          peso_total_kg?: number | null
          preco_arroba?: number | null
          projeto_id?: string | null
          quantidade_cabecas?: number | null
          status?: string | null
          updated_at?: string | null
          valor_total?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'ordens_vendas_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'gado_animais'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'ordens_vendas_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_alertas_operacionais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'ordens_vendas_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_acoes'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'ordens_vendas_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_indicadores'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'ordens_vendas_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_operacional'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'ordens_vendas_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_simples'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'ordens_vendas_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_simples'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'ordens_vendas_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_perfil_animal'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'ordens_vendas_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_perfil_animal'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'ordens_vendas_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_pesagens_resumo_animais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'ordens_vendas_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'ordens_vendas_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_animais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'ordens_vendas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'ordens_vendas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'ordens_vendas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'ordens_vendas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'ordens_vendas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'ordens_vendas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'ordens_vendas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'ordens_vendas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'ordens_vendas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'ordens_vendas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'ordens_vendas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      paciente_dados_clinicos: {
        Row: {
          alergias: string | null
          alertas_importantes: string | null
          cnpj_id: string
          data_alteracao: string | null
          data_criacao: string | null
          doencas_preexistentes: string | null
          empresa_id: string
          historico_familiar: string | null
          id: string
          medicamentos_uso: string | null
          observacoes_clinicas: string | null
          paciente_id: string
          projeto_id: string
          risco_clinico: string | null
          unidade_id: string
          usuario_alteracao_id: string | null
          usuario_criador_id: string | null
        }
        Insert: {
          alergias?: string | null
          alertas_importantes?: string | null
          cnpj_id: string
          data_alteracao?: string | null
          data_criacao?: string | null
          doencas_preexistentes?: string | null
          empresa_id: string
          historico_familiar?: string | null
          id?: string
          medicamentos_uso?: string | null
          observacoes_clinicas?: string | null
          paciente_id: string
          projeto_id: string
          risco_clinico?: string | null
          unidade_id: string
          usuario_alteracao_id?: string | null
          usuario_criador_id?: string | null
        }
        Update: {
          alergias?: string | null
          alertas_importantes?: string | null
          cnpj_id?: string
          data_alteracao?: string | null
          data_criacao?: string | null
          doencas_preexistentes?: string | null
          empresa_id?: string
          historico_familiar?: string | null
          id?: string
          medicamentos_uso?: string | null
          observacoes_clinicas?: string | null
          paciente_id?: string
          projeto_id?: string
          risco_clinico?: string | null
          unidade_id?: string
          usuario_alteracao_id?: string | null
          usuario_criador_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'paciente_dados_clinicos_cnpj_id_fkey'
            columns: ['cnpj_id']
            isOneToOne: false
            referencedRelation: 'empresas_cnpjs'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'paciente_dados_clinicos_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'paciente_dados_clinicos_paciente_id_fkey'
            columns: ['paciente_id']
            isOneToOne: false
            referencedRelation: 'pacientes'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'paciente_dados_clinicos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'paciente_dados_clinicos_unidade_id_fkey'
            columns: ['unidade_id']
            isOneToOne: false
            referencedRelation: 'unidades'
            referencedColumns: ['id']
          },
        ]
      }
      pacientes: {
        Row: {
          bairro: string | null
          cep: string | null
          cidade: string | null
          cnpj_id: string
          complemento: string | null
          convenio: string | null
          cpf: string | null
          cpf_responsavel: string | null
          data_alteracao: string | null
          data_criacao: string | null
          data_nascimento: string | null
          email: string | null
          empresa_id: string
          endereco: string | null
          id: string
          logradouro: string | null
          nome_completo: string
          numero: string | null
          numero_carteirinha: string | null
          observacoes_gerais: string | null
          projeto_id: string
          responsavel_legal: string | null
          rg: string | null
          sexo: string | null
          status: string | null
          telefone: string | null
          uf: string | null
          unidade_id: string
          usuario_alteracao_id: string | null
          usuario_criador_id: string | null
          whatsapp: string | null
        }
        Insert: {
          bairro?: string | null
          cep?: string | null
          cidade?: string | null
          cnpj_id: string
          complemento?: string | null
          convenio?: string | null
          cpf?: string | null
          cpf_responsavel?: string | null
          data_alteracao?: string | null
          data_criacao?: string | null
          data_nascimento?: string | null
          email?: string | null
          empresa_id: string
          endereco?: string | null
          id?: string
          logradouro?: string | null
          nome_completo: string
          numero?: string | null
          numero_carteirinha?: string | null
          observacoes_gerais?: string | null
          projeto_id: string
          responsavel_legal?: string | null
          rg?: string | null
          sexo?: string | null
          status?: string | null
          telefone?: string | null
          uf?: string | null
          unidade_id: string
          usuario_alteracao_id?: string | null
          usuario_criador_id?: string | null
          whatsapp?: string | null
        }
        Update: {
          bairro?: string | null
          cep?: string | null
          cidade?: string | null
          cnpj_id?: string
          complemento?: string | null
          convenio?: string | null
          cpf?: string | null
          cpf_responsavel?: string | null
          data_alteracao?: string | null
          data_criacao?: string | null
          data_nascimento?: string | null
          email?: string | null
          empresa_id?: string
          endereco?: string | null
          id?: string
          logradouro?: string | null
          nome_completo?: string
          numero?: string | null
          numero_carteirinha?: string | null
          observacoes_gerais?: string | null
          projeto_id?: string
          responsavel_legal?: string | null
          rg?: string | null
          sexo?: string | null
          status?: string | null
          telefone?: string | null
          uf?: string | null
          unidade_id?: string
          usuario_alteracao_id?: string | null
          usuario_criador_id?: string | null
          whatsapp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'pacientes_cnpj_id_fkey'
            columns: ['cnpj_id']
            isOneToOne: false
            referencedRelation: 'empresas_cnpjs'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'pacientes_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'pacientes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'pacientes_unidade_id_fkey'
            columns: ['unidade_id']
            isOneToOne: false
            referencedRelation: 'unidades'
            referencedColumns: ['id']
          },
        ]
      }
      perfil_permissoes: {
        Row: {
          atualizado_em: string
          criado_em: string
          id: string
          perfil_id: string
          permissao_id: string
        }
        Insert: {
          atualizado_em?: string
          criado_em?: string
          id?: string
          perfil_id: string
          permissao_id: string
        }
        Update: {
          atualizado_em?: string
          criado_em?: string
          id?: string
          perfil_id?: string
          permissao_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'perfil_permissoes_perfil_id_fkey'
            columns: ['perfil_id']
            isOneToOne: false
            referencedRelation: 'perfis'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'perfil_permissoes_permissao_id_fkey'
            columns: ['permissao_id']
            isOneToOne: false
            referencedRelation: 'permissoes'
            referencedColumns: ['id']
          },
        ]
      }
      perfis: {
        Row: {
          atualizado_em: string
          criado_em: string
          descricao: string | null
          id: string
          nome: string
          status: string | null
        }
        Insert: {
          atualizado_em?: string
          criado_em?: string
          descricao?: string | null
          id?: string
          nome: string
          status?: string | null
        }
        Update: {
          atualizado_em?: string
          criado_em?: string
          descricao?: string | null
          id?: string
          nome?: string
          status?: string | null
        }
        Relationships: []
      }
      perfis_usuarios: {
        Row: {
          atualizado_em: string
          criado_em: string
          email: string
          id: string
          nome_completo: string
          user_id: string
        }
        Insert: {
          atualizado_em?: string
          criado_em?: string
          email: string
          id?: string
          nome_completo: string
          user_id: string
        }
        Update: {
          atualizado_em?: string
          criado_em?: string
          email?: string
          id?: string
          nome_completo?: string
          user_id?: string
        }
        Relationships: []
      }
      permissoes: {
        Row: {
          acao: string
          atualizado_em: string
          criado_em: string
          descricao: string | null
          id: string
          modulo: string
        }
        Insert: {
          acao: string
          atualizado_em?: string
          criado_em?: string
          descricao?: string | null
          id?: string
          modulo: string
        }
        Update: {
          acao?: string
          atualizado_em?: string
          criado_em?: string
          descricao?: string | null
          id?: string
          modulo?: string
        }
        Relationships: []
      }
      planilha_associacao_transaction_audit: {
        Row: {
          changed_at: string
          id: string
          new_data: Json
          old_data: Json
          project_id: string
          source: string | null
          transaction_id: string
          user_id: string
        }
        Insert: {
          changed_at?: string
          id?: string
          new_data: Json
          old_data: Json
          project_id?: string
          source?: string | null
          transaction_id: string
          user_id: string
        }
        Update: {
          changed_at?: string
          id?: string
          new_data?: Json
          old_data?: Json
          project_id?: string
          source?: string | null
          transaction_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'planilha_associacao_transaction_audit_transaction_id_fkey'
            columns: ['transaction_id']
            isOneToOne: false
            referencedRelation: 'transactions'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'planilha_associacao_transaction_audit_transaction_id_fkey'
            columns: ['transaction_id']
            isOneToOne: false
            referencedRelation: 'vw_lancamentos_por_competencia'
            referencedColumns: ['id']
          },
        ]
      }
      plano_tratamento_itens: {
        Row: {
          dente: string | null
          face: string | null
          id: string
          observacoes: string | null
          plano_tratamento_id: string
          procedimento: string
          quantidade: number | null
          status: string | null
          valor_total: number | null
          valor_unitario: number | null
        }
        Insert: {
          dente?: string | null
          face?: string | null
          id?: string
          observacoes?: string | null
          plano_tratamento_id: string
          procedimento: string
          quantidade?: number | null
          status?: string | null
          valor_total?: number | null
          valor_unitario?: number | null
        }
        Update: {
          dente?: string | null
          face?: string | null
          id?: string
          observacoes?: string | null
          plano_tratamento_id?: string
          procedimento?: string
          quantidade?: number | null
          status?: string | null
          valor_total?: number | null
          valor_unitario?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'plano_tratamento_itens_plano_tratamento_id_fkey'
            columns: ['plano_tratamento_id']
            isOneToOne: false
            referencedRelation: 'planos_tratamento'
            referencedColumns: ['id']
          },
        ]
      }
      planos_tratamento: {
        Row: {
          aprovado_por: string | null
          cnpj_id: string
          data_aprovacao: string | null
          data_criacao: string | null
          descricao: string | null
          empresa_id: string
          id: string
          observacoes: string | null
          odontograma_id: string | null
          paciente_id: string
          profissional_id: string
          projeto_id: string
          status: string | null
          titulo: string
          unidade_id: string
          valor_total: number | null
        }
        Insert: {
          aprovado_por?: string | null
          cnpj_id: string
          data_aprovacao?: string | null
          data_criacao?: string | null
          descricao?: string | null
          empresa_id: string
          id?: string
          observacoes?: string | null
          odontograma_id?: string | null
          paciente_id: string
          profissional_id: string
          projeto_id: string
          status?: string | null
          titulo: string
          unidade_id: string
          valor_total?: number | null
        }
        Update: {
          aprovado_por?: string | null
          cnpj_id?: string
          data_aprovacao?: string | null
          data_criacao?: string | null
          descricao?: string | null
          empresa_id?: string
          id?: string
          observacoes?: string | null
          odontograma_id?: string | null
          paciente_id?: string
          profissional_id?: string
          projeto_id?: string
          status?: string | null
          titulo?: string
          unidade_id?: string
          valor_total?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'planos_tratamento_cnpj_id_fkey'
            columns: ['cnpj_id']
            isOneToOne: false
            referencedRelation: 'empresas_cnpjs'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'planos_tratamento_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'planos_tratamento_odontograma_id_fkey'
            columns: ['odontograma_id']
            isOneToOne: false
            referencedRelation: 'odontogramas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'planos_tratamento_paciente_id_fkey'
            columns: ['paciente_id']
            isOneToOne: false
            referencedRelation: 'pacientes'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'planos_tratamento_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'planos_tratamento_unidade_id_fkey'
            columns: ['unidade_id']
            isOneToOne: false
            referencedRelation: 'unidades'
            referencedColumns: ['id']
          },
        ]
      }
      produtos: {
        Row: {
          categoria_id: string | null
          cnpj_empresa: string | null
          data_atualizacao: string | null
          data_criacao: string | null
          data_ultima_contagem: string | null
          empresa_id: string | null
          estoque_minimo: number
          id: string
          nome_produto: string
          observacoes: string | null
          preco: number | null
          quantidade_atual: number
          responsavel_ultima_contagem: string | null
          status: string | null
          tipo: string | null
          unidade_medida: string
          validade: string | null
        }
        Insert: {
          categoria_id?: string | null
          cnpj_empresa?: string | null
          data_atualizacao?: string | null
          data_criacao?: string | null
          data_ultima_contagem?: string | null
          empresa_id?: string | null
          estoque_minimo?: number
          id?: string
          nome_produto: string
          observacoes?: string | null
          preco?: number | null
          quantidade_atual?: number
          responsavel_ultima_contagem?: string | null
          status?: string | null
          tipo?: string | null
          unidade_medida: string
          validade?: string | null
        }
        Update: {
          categoria_id?: string | null
          cnpj_empresa?: string | null
          data_atualizacao?: string | null
          data_criacao?: string | null
          data_ultima_contagem?: string | null
          empresa_id?: string | null
          estoque_minimo?: number
          id?: string
          nome_produto?: string
          observacoes?: string | null
          preco?: number | null
          quantidade_atual?: number
          responsavel_ultima_contagem?: string | null
          status?: string | null
          tipo?: string | null
          unidade_medida?: string
          validade?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'produtos_categoria_id_fkey'
            columns: ['categoria_id']
            isOneToOne: false
            referencedRelation: 'categorias'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'produtos_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'produtos_responsavel_ultima_contagem_fkey'
            columns: ['responsavel_ultima_contagem']
            isOneToOne: false
            referencedRelation: 'usuarios'
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
          logo_url: string | null
          name: string | null
          organization_name: string
          phone: string | null
          plan_type: string | null
          project_id: string | null
          role: string | null
          status: string | null
          storage_limit_mb: number | null
          storage_used_mb: number | null
          theme_color: string | null
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
          logo_url?: string | null
          name?: string | null
          organization_name?: string
          phone?: string | null
          plan_type?: string | null
          project_id?: string | null
          role?: string | null
          status?: string | null
          storage_limit_mb?: number | null
          storage_used_mb?: number | null
          theme_color?: string | null
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
          logo_url?: string | null
          name?: string | null
          organization_name?: string
          phone?: string | null
          plan_type?: string | null
          project_id?: string | null
          role?: string | null
          status?: string | null
          storage_limit_mb?: number | null
          storage_used_mb?: number | null
          theme_color?: string | null
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
          project_id?: string
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
      projetos: {
        Row: {
          ambiente: string | null
          atualizado_em: string
          criado_em: string
          descricao: string | null
          id: string
          nome: string
          slug: string
          status: string | null
        }
        Insert: {
          ambiente?: string | null
          atualizado_em?: string
          criado_em?: string
          descricao?: string | null
          id?: string
          nome: string
          slug: string
          status?: string | null
        }
        Update: {
          ambiente?: string | null
          atualizado_em?: string
          criado_em?: string
          descricao?: string | null
          id?: string
          nome?: string
          slug?: string
          status?: string | null
        }
        Relationships: []
      }
      prontuario_versoes: {
        Row: {
          alterado_em: string | null
          alterado_por: string | null
          cnpj_id: string
          conteudo_anterior: Json | null
          conteudo_novo: Json | null
          empresa_id: string
          id: string
          motivo_alteracao: string | null
          paciente_id: string
          profissional_id: string
          projeto_id: string
          prontuario_id: string
          unidade_id: string
          versao: number
        }
        Insert: {
          alterado_em?: string | null
          alterado_por?: string | null
          cnpj_id: string
          conteudo_anterior?: Json | null
          conteudo_novo?: Json | null
          empresa_id: string
          id?: string
          motivo_alteracao?: string | null
          paciente_id: string
          profissional_id: string
          projeto_id: string
          prontuario_id: string
          unidade_id: string
          versao: number
        }
        Update: {
          alterado_em?: string | null
          alterado_por?: string | null
          cnpj_id?: string
          conteudo_anterior?: Json | null
          conteudo_novo?: Json | null
          empresa_id?: string
          id?: string
          motivo_alteracao?: string | null
          paciente_id?: string
          profissional_id?: string
          projeto_id?: string
          prontuario_id?: string
          unidade_id?: string
          versao?: number
        }
        Relationships: [
          {
            foreignKeyName: 'prontuario_versoes_cnpj_id_fkey'
            columns: ['cnpj_id']
            isOneToOne: false
            referencedRelation: 'empresas_cnpjs'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'prontuario_versoes_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'prontuario_versoes_paciente_id_fkey'
            columns: ['paciente_id']
            isOneToOne: false
            referencedRelation: 'pacientes'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'prontuario_versoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'prontuario_versoes_prontuario_id_fkey'
            columns: ['prontuario_id']
            isOneToOne: false
            referencedRelation: 'prontuarios'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'prontuario_versoes_unidade_id_fkey'
            columns: ['unidade_id']
            isOneToOne: false
            referencedRelation: 'unidades'
            referencedColumns: ['id']
          },
        ]
      }
      prontuarios: {
        Row: {
          anamnese: string | null
          atendimento_id: string | null
          cnpj_id: string
          conduta: string | null
          data_alteracao: string | null
          data_atendimento: string
          data_criacao: string | null
          empresa_id: string
          evolucao_clinica: string | null
          hipotese_diagnostica: string | null
          id: string
          observacoes_internas: string | null
          paciente_id: string
          procedimentos_realizados: string | null
          profissional_id: string
          projeto_id: string
          queixa_principal: string | null
          status: string | null
          tipo_prontuario: string | null
          unidade_id: string
          usuario_alteracao_id: string | null
          usuario_criador_id: string | null
        }
        Insert: {
          anamnese?: string | null
          atendimento_id?: string | null
          cnpj_id: string
          conduta?: string | null
          data_alteracao?: string | null
          data_atendimento?: string
          data_criacao?: string | null
          empresa_id: string
          evolucao_clinica?: string | null
          hipotese_diagnostica?: string | null
          id?: string
          observacoes_internas?: string | null
          paciente_id: string
          procedimentos_realizados?: string | null
          profissional_id: string
          projeto_id: string
          queixa_principal?: string | null
          status?: string | null
          tipo_prontuario?: string | null
          unidade_id: string
          usuario_alteracao_id?: string | null
          usuario_criador_id?: string | null
        }
        Update: {
          anamnese?: string | null
          atendimento_id?: string | null
          cnpj_id?: string
          conduta?: string | null
          data_alteracao?: string | null
          data_atendimento?: string
          data_criacao?: string | null
          empresa_id?: string
          evolucao_clinica?: string | null
          hipotese_diagnostica?: string | null
          id?: string
          observacoes_internas?: string | null
          paciente_id?: string
          procedimentos_realizados?: string | null
          profissional_id?: string
          projeto_id?: string
          queixa_principal?: string | null
          status?: string | null
          tipo_prontuario?: string | null
          unidade_id?: string
          usuario_alteracao_id?: string | null
          usuario_criador_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'prontuarios_atendimento_id_fkey'
            columns: ['atendimento_id']
            isOneToOne: false
            referencedRelation: 'agenda'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'prontuarios_cnpj_id_fkey'
            columns: ['cnpj_id']
            isOneToOne: false
            referencedRelation: 'empresas_cnpjs'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'prontuarios_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'prontuarios_paciente_id_fkey'
            columns: ['paciente_id']
            isOneToOne: false
            referencedRelation: 'pacientes'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'prontuarios_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'prontuarios_unidade_id_fkey'
            columns: ['unidade_id']
            isOneToOne: false
            referencedRelation: 'unidades'
            referencedColumns: ['id']
          },
        ]
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
          due_date: string | null
          id: string
          month_year: string
          obs: string | null
          owner_name: string | null
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
          due_date?: string | null
          id?: string
          month_year: string
          obs?: string | null
          owner_name?: string | null
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
          due_date?: string | null
          id?: string
          month_year?: string
          obs?: string | null
          owner_name?: string | null
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
      regras_classificacao: {
        Row: {
          ativo: boolean
          categoria_id: string | null
          criado_em: string | null
          id: string
          palavra_chave: string
          prioridade: number
          tipo: string
        }
        Insert: {
          ativo?: boolean
          categoria_id?: string | null
          criado_em?: string | null
          id?: string
          palavra_chave: string
          prioridade?: number
          tipo: string
        }
        Update: {
          ativo?: boolean
          categoria_id?: string | null
          criado_em?: string | null
          id?: string
          palavra_chave?: string
          prioridade?: number
          tipo?: string
        }
        Relationships: [
          {
            foreignKeyName: 'regras_classificacao_categoria_id_fkey'
            columns: ['categoria_id']
            isOneToOne: false
            referencedRelation: 'categorias'
            referencedColumns: ['id']
          },
        ]
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
      shopping_items: {
        Row: {
          category: string | null
          created_at: string
          estimated_price: number | null
          id: string
          name: string
          notes: string | null
          purchased: boolean
          quantity: string | null
          quantity_value: number
          retail_price: number | null
          selected_price_type: string
          unit: string | null
          updated_at: string
          user_id: string
          wholesale_price: number | null
        }
        Insert: {
          category?: string | null
          created_at?: string
          estimated_price?: number | null
          id?: string
          name: string
          notes?: string | null
          purchased?: boolean
          quantity?: string | null
          quantity_value?: number
          retail_price?: number | null
          selected_price_type?: string
          unit?: string | null
          updated_at?: string
          user_id: string
          wholesale_price?: number | null
        }
        Update: {
          category?: string | null
          created_at?: string
          estimated_price?: number | null
          id?: string
          name?: string
          notes?: string | null
          purchased?: boolean
          quantity?: string | null
          quantity_value?: number
          retail_price?: number | null
          selected_price_type?: string
          unit?: string | null
          updated_at?: string
          user_id?: string
          wholesale_price?: number | null
        }
        Relationships: []
      }
      stock_movements: {
        Row: {
          created_at: string
          expiry_date: string | null
          id: string
          item_id: string
          movement_type: string
          new_quantity: number
          observation: string | null
          previous_quantity: number
          project_id: string
          quantity: number
          responsible_user_id: string | null
          responsible_user_name: string | null
        }
        Insert: {
          created_at?: string
          expiry_date?: string | null
          id?: string
          item_id: string
          movement_type: string
          new_quantity: number
          observation?: string | null
          previous_quantity: number
          project_id: string
          quantity: number
          responsible_user_id?: string | null
          responsible_user_name?: string | null
        }
        Update: {
          created_at?: string
          expiry_date?: string | null
          id?: string
          item_id?: string
          movement_type?: string
          new_quantity?: number
          observation?: string | null
          previous_quantity?: number
          project_id?: string
          quantity?: number
          responsible_user_id?: string | null
          responsible_user_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'stock_movements_item_id_fkey'
            columns: ['item_id']
            isOneToOne: false
            referencedRelation: 'inventory_items'
            referencedColumns: ['id']
          },
        ]
      }
      transacoes_bancarias: {
        Row: {
          banco: string | null
          categoria_id: string | null
          conta: string | null
          conta_bancaria_id: string | null
          criado_em: string | null
          data_transacao: string
          descricao: string
          empresa_id: string | null
          fitid: string | null
          id: string
          importacao_id: string | null
          lancamento_id: string | null
          observacao: string | null
          origem: string | null
          status_classificacao: string
          status_conciliacao: string
          tipo: string | null
          valor: number
        }
        Insert: {
          banco?: string | null
          categoria_id?: string | null
          conta?: string | null
          conta_bancaria_id?: string | null
          criado_em?: string | null
          data_transacao: string
          descricao: string
          empresa_id?: string | null
          fitid?: string | null
          id?: string
          importacao_id?: string | null
          lancamento_id?: string | null
          observacao?: string | null
          origem?: string | null
          status_classificacao?: string
          status_conciliacao?: string
          tipo?: string | null
          valor: number
        }
        Update: {
          banco?: string | null
          categoria_id?: string | null
          conta?: string | null
          conta_bancaria_id?: string | null
          criado_em?: string | null
          data_transacao?: string
          descricao?: string
          empresa_id?: string | null
          fitid?: string | null
          id?: string
          importacao_id?: string | null
          lancamento_id?: string | null
          observacao?: string | null
          origem?: string | null
          status_classificacao?: string
          status_conciliacao?: string
          tipo?: string | null
          valor?: number
        }
        Relationships: [
          {
            foreignKeyName: 'transacoes_bancarias_categoria_id_fkey'
            columns: ['categoria_id']
            isOneToOne: false
            referencedRelation: 'categorias'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'transacoes_bancarias_importacao_id_fkey'
            columns: ['importacao_id']
            isOneToOne: false
            referencedRelation: 'importacoes_ofx'
            referencedColumns: ['id']
          },
        ]
      }
      transacoes_ofx: {
        Row: {
          conta_bancaria_id: string | null
          created_at: string
          data_transacao: string | null
          descricao: string | null
          familia_id: string | null
          fitid: string | null
          hash_duplicidade: string | null
          id: string
          importacao_ofx_id: string | null
          lancamento_id: string | null
          status: string | null
          updated_at: string
          valor: number
        }
        Insert: {
          conta_bancaria_id?: string | null
          created_at?: string
          data_transacao?: string | null
          descricao?: string | null
          familia_id?: string | null
          fitid?: string | null
          hash_duplicidade?: string | null
          id?: string
          importacao_ofx_id?: string | null
          lancamento_id?: string | null
          status?: string | null
          updated_at?: string
          valor: number
        }
        Update: {
          conta_bancaria_id?: string | null
          created_at?: string
          data_transacao?: string | null
          descricao?: string | null
          familia_id?: string | null
          fitid?: string | null
          hash_duplicidade?: string | null
          id?: string
          importacao_ofx_id?: string | null
          lancamento_id?: string | null
          status?: string | null
          updated_at?: string
          valor?: number
        }
        Relationships: [
          {
            foreignKeyName: 'transacoes_ofx_conta_bancaria_id_fkey'
            columns: ['conta_bancaria_id']
            isOneToOne: false
            referencedRelation: 'contas_bancarias'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'transacoes_ofx_familia_id_fkey'
            columns: ['familia_id']
            isOneToOne: false
            referencedRelation: 'familias'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'transacoes_ofx_importacao_ofx_id_fkey'
            columns: ['importacao_ofx_id']
            isOneToOne: false
            referencedRelation: 'importacoes_ofx'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'transacoes_ofx_lancamento_id_fkey'
            columns: ['lancamento_id']
            isOneToOne: false
            referencedRelation: 'lancamentos'
            referencedColumns: ['id']
          },
        ]
      }
      transactions: {
        Row: {
          ativo: boolean
          category: string
          category_id: string | null
          cnpj_empresa: string | null
          company_id: string | null
          competencia: string | null
          created_at: string
          date: string
          description: string
          document_type: string | null
          empresa_id: string | null
          fitid: string | null
          id: string
          import_batch_id: string | null
          is_fixed: boolean | null
          payment_method: string | null
          project_id: string
          quantity: number | null
          revenue_type: string | null
          source: string | null
          source_file_name: string | null
          treatment_type: string | null
          type: string
          unit_price: number | null
          updated_at: string | null
          user_id: string
          value: number
        }
        Insert: {
          ativo?: boolean
          category: string
          category_id?: string | null
          cnpj_empresa?: string | null
          company_id?: string | null
          competencia?: string | null
          created_at?: string
          date: string
          description: string
          document_type?: string | null
          empresa_id?: string | null
          fitid?: string | null
          id?: string
          import_batch_id?: string | null
          is_fixed?: boolean | null
          payment_method?: string | null
          project_id?: string
          quantity?: number | null
          revenue_type?: string | null
          source?: string | null
          source_file_name?: string | null
          treatment_type?: string | null
          type: string
          unit_price?: number | null
          updated_at?: string | null
          user_id?: string
          value: number
        }
        Update: {
          ativo?: boolean
          category?: string
          category_id?: string | null
          cnpj_empresa?: string | null
          company_id?: string | null
          competencia?: string | null
          created_at?: string
          date?: string
          description?: string
          document_type?: string | null
          empresa_id?: string | null
          fitid?: string | null
          id?: string
          import_batch_id?: string | null
          is_fixed?: boolean | null
          payment_method?: string | null
          project_id?: string
          quantity?: number | null
          revenue_type?: string | null
          source?: string | null
          source_file_name?: string | null
          treatment_type?: string | null
          type?: string
          unit_price?: number | null
          updated_at?: string | null
          user_id?: string
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: 'transactions_category_id_fkey'
            columns: ['category_id']
            isOneToOne: false
            referencedRelation: 'categorias_financeiras'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'transactions_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'transactions_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'transactions_import_batch_id_fkey'
            columns: ['import_batch_id']
            isOneToOne: false
            referencedRelation: 'ofx_import_batches'
            referencedColumns: ['id']
          },
        ]
      }
      unidades: {
        Row: {
          atualizado_em: string
          cnpj_id: string
          criado_em: string
          email: string | null
          empresa_id: string
          endereco: string | null
          id: string
          nome: string
          projeto_id: string
          status: string | null
          telefone: string | null
          tipo_unidade: string | null
        }
        Insert: {
          atualizado_em?: string
          cnpj_id: string
          criado_em?: string
          email?: string | null
          empresa_id: string
          endereco?: string | null
          id?: string
          nome: string
          projeto_id: string
          status?: string | null
          telefone?: string | null
          tipo_unidade?: string | null
        }
        Update: {
          atualizado_em?: string
          cnpj_id?: string
          criado_em?: string
          email?: string | null
          empresa_id?: string
          endereco?: string | null
          id?: string
          nome?: string
          projeto_id?: string
          status?: string | null
          telefone?: string | null
          tipo_unidade?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'unidades_cnpj_id_fkey'
            columns: ['cnpj_id']
            isOneToOne: false
            referencedRelation: 'empresas_cnpjs'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'unidades_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'unidades_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'projetos'
            referencedColumns: ['id']
          },
        ]
      }
      user_companies: {
        Row: {
          company_id: string
          created_at: string | null
          id: string
          role: string
          user_id: string
        }
        Insert: {
          company_id: string
          created_at?: string | null
          id?: string
          role?: string
          user_id: string
        }
        Update: {
          company_id?: string
          created_at?: string | null
          id?: string
          role?: string
          user_id?: string
        }
        Relationships: []
      }
      usuario_acessos: {
        Row: {
          ambiente: string | null
          aprovado_em: string | null
          aprovado_por: string | null
          atualizado_em: string
          auth_user_id: string
          cnpj_id: string
          criado_em: string
          empresa_id: string
          id: string
          perfil_id: string
          projeto_id: string
          status: string | null
          unidade_id: string
          usuario_id: string
        }
        Insert: {
          ambiente?: string | null
          aprovado_em?: string | null
          aprovado_por?: string | null
          atualizado_em?: string
          auth_user_id: string
          cnpj_id: string
          criado_em?: string
          empresa_id: string
          id?: string
          perfil_id: string
          projeto_id: string
          status?: string | null
          unidade_id: string
          usuario_id: string
        }
        Update: {
          ambiente?: string | null
          aprovado_em?: string | null
          aprovado_por?: string | null
          atualizado_em?: string
          auth_user_id?: string
          cnpj_id?: string
          criado_em?: string
          empresa_id?: string
          id?: string
          perfil_id?: string
          projeto_id?: string
          status?: string | null
          unidade_id?: string
          usuario_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'usuario_acessos_aprovado_por_fkey'
            columns: ['aprovado_por']
            isOneToOne: false
            referencedRelation: 'usuarios'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'usuario_acessos_cnpj_id_fkey'
            columns: ['cnpj_id']
            isOneToOne: false
            referencedRelation: 'empresas_cnpjs'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'usuario_acessos_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'usuario_acessos_perfil_id_fkey'
            columns: ['perfil_id']
            isOneToOne: false
            referencedRelation: 'perfis'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'usuario_acessos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'usuario_acessos_unidade_id_fkey'
            columns: ['unidade_id']
            isOneToOne: false
            referencedRelation: 'unidades'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'usuario_acessos_usuario_id_fkey'
            columns: ['usuario_id']
            isOneToOne: false
            referencedRelation: 'usuarios'
            referencedColumns: ['id']
          },
        ]
      }
      usuarios: {
        Row: {
          ambiente: string | null
          atualizado_em: string
          auth_user_id: string
          created_at: string
          criado_em: string
          data_atualizacao: string | null
          data_criacao: string | null
          email: string
          familia_id: string | null
          id: string
          is_setup_completed: boolean | null
          nome: string
          status: string | null
          telefone: string | null
          tipo_usuario: string | null
          updated_at: string
        }
        Insert: {
          ambiente?: string | null
          atualizado_em?: string
          auth_user_id: string
          created_at?: string
          criado_em?: string
          data_atualizacao?: string | null
          data_criacao?: string | null
          email: string
          familia_id?: string | null
          id?: string
          is_setup_completed?: boolean | null
          nome: string
          status?: string | null
          telefone?: string | null
          tipo_usuario?: string | null
          updated_at?: string
        }
        Update: {
          ambiente?: string | null
          atualizado_em?: string
          auth_user_id?: string
          created_at?: string
          criado_em?: string
          data_atualizacao?: string | null
          data_criacao?: string | null
          email?: string
          familia_id?: string | null
          id?: string
          is_setup_completed?: boolean | null
          nome?: string
          status?: string | null
          telefone?: string | null
          tipo_usuario?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'usuarios_familia_id_fkey'
            columns: ['familia_id']
            isOneToOne: false
            referencedRelation: 'familias'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      v_gado_alertas_operacionais: {
        Row: {
          animal_id: string | null
          brinco: string | null
          created_at: string | null
          mensagem_alerta: string | null
          nivel_alerta: string | null
          nome: string | null
          nome_lote: string | null
          peso_atual_kg: number | null
          peso_entrada_kg: number | null
          projeto_id: string | null
          status: Database['public']['Enums']['gado_status_animal'] | null
          tipo_alerta: string | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      v_gado_alimentacao_coletiva: {
        Row: {
          alimento_nome: string | null
          alimento_tipo: string | null
          alimento_unidade_padrao: string | null
          animais_ativos_registrados: number | null
          consumo_estimado_lote_kg: number | null
          created_at: string | null
          custo_medio_cabeca: number | null
          custo_racao_lote_dia: number | null
          custo_total_lote_dia: number | null
          data_registro: string | null
          fazenda_id: string | null
          id: string | null
          insumo_id: string | null
          media_consumida_cabeca_kg: number | null
          media_fornecida_cabeca_kg: number | null
          nome_lote: string | null
          observacoes: string | null
          outros_custos_dia_lote: number | null
          peso_saco_kg: number | null
          preco_saco: number | null
          projeto_id: string | null
          quantidade_sacos: number | null
          quantidade_total_fornecida_kg: number | null
          sobra_estimada_kg: number | null
          tipo_registro: string | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'gado_alimentacao_diaria_insumo_id_fkey'
            columns: ['insumo_id']
            isOneToOne: false
            referencedRelation: 'gado_insumos_catalogo'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_alimentacao_diaria_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_alimentacao_diaria_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_alimentacao_diaria_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_alimentacao_diaria_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_alimentacao_diaria_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_alimentacao_diaria_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_alimentacao_diaria_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_alimentacao_diaria_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_alimentacao_diaria_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_alimentacao_diaria_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_alimentacao_diaria_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_projetos_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'gado_fazendas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_projetos_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_compra_lote_historico'
            referencedColumns: ['fazenda_id']
          },
          {
            foreignKeyName: 'gado_projetos_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['fazenda_id']
          },
          {
            foreignKeyName: 'gado_projetos_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['fazenda_id']
          },
          {
            foreignKeyName: 'gado_projetos_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['fazenda_id']
          },
        ]
      }
      v_gado_analise_custos_lote: {
        Row: {
          custo_alimentacao_cabeca: number | null
          custo_alimentacao_dia_lote: number | null
          custo_alimentacao_total_lote: number | null
          custo_compra_cabeca: number | null
          custo_compra_cabeca_estimado: number | null
          custo_compra_lote: number | null
          custo_compra_lote_estimado: number | null
          custo_medio_real_cabeca: number | null
          custo_operacional_cabeca: number | null
          custo_racao_dia_lote: number | null
          custo_sanitario_previsto_cabeca: number | null
          custo_total_cabeca: number | null
          custo_total_lote: number | null
          lucro_cabeca: number | null
          lucro_total: number | null
          nome_lote: string | null
          origem_custo_compra: string | null
          outros_custos_previsto_cabeca: number | null
          prazo_dias: number | null
          projeto_id: string | null
          quantidade_animais_ativos: number | null
          quantidade_animais_com_valor: number | null
          quantidade_cabecas: number | null
          receita_cabeca: number | null
          receita_lote: number | null
          total_compra_real_lote: number | null
        }
        Relationships: []
      }
      v_gado_animais_acoes: {
        Row: {
          acoes_disponiveis: string | null
          animal_id: string | null
          baixa_id: string | null
          brinco: string | null
          categoria: Database['public']['Enums']['gado_categoria_animal'] | null
          data_baixa: string | null
          ganho_acumulado_kg: number | null
          gmd_realizado_kg_dia: number | null
          motivo_baixa: string | null
          nome: string | null
          nome_lote: string | null
          peso_atual_kg: number | null
          peso_entrada_kg: number | null
          peso_saida_kg: number | null
          pode_dar_baixa: boolean | null
          pode_editar: boolean | null
          pode_reativar: boolean | null
          preco_compra_kg_vivo: number | null
          projeto_id: string | null
          raca: string | null
          sexo: string | null
          status: Database['public']['Enums']['gado_status_animal'] | null
          tipo_baixa: string | null
          valor_compra_calculado: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      v_gado_animais_indicadores: {
        Row: {
          brinco: string | null
          categoria: Database['public']['Enums']['gado_categoria_animal'] | null
          data_entrada: string | null
          ganho_acumulado_kg: number | null
          id: string | null
          nome: string | null
          peso_atual_kg: number | null
          peso_entrada_kg: number | null
          projeto_id: string | null
          raca: string | null
          sexo: string | null
          status: Database['public']['Enums']['gado_status_animal'] | null
        }
        Insert: {
          brinco?: string | null
          categoria?: Database['public']['Enums']['gado_categoria_animal'] | null
          data_entrada?: string | null
          ganho_acumulado_kg?: never
          id?: string | null
          nome?: string | null
          peso_atual_kg?: number | null
          peso_entrada_kg?: number | null
          projeto_id?: string | null
          raca?: string | null
          sexo?: string | null
          status?: Database['public']['Enums']['gado_status_animal'] | null
        }
        Update: {
          brinco?: string | null
          categoria?: Database['public']['Enums']['gado_categoria_animal'] | null
          data_entrada?: string | null
          ganho_acumulado_kg?: never
          id?: string | null
          nome?: string | null
          peso_atual_kg?: number | null
          peso_entrada_kg?: number | null
          projeto_id?: string | null
          raca?: string | null
          sexo?: string | null
          status?: Database['public']['Enums']['gado_status_animal'] | null
        }
        Relationships: [
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      v_gado_animais_operacional: {
        Row: {
          animal_id: string | null
          arrobas_baixa: number | null
          baixa_id: string | null
          brinco: string | null
          categoria: Database['public']['Enums']['gado_categoria_animal'] | null
          created_at: string | null
          data_baixa: string | null
          data_baixa_registro: string | null
          data_entrada: string | null
          ganho_acumulado_kg: number | null
          gmd_realizado_kg_dia: number | null
          idade_meses: number | null
          localizacao: string | null
          motivo_baixa: string | null
          motivo_baixa_registro: string | null
          nome: string | null
          nome_lote: string | null
          observacoes: string | null
          observacoes_baixa: string | null
          peso_atual_kg: number | null
          peso_entrada_kg: number | null
          peso_saida_kg: number | null
          peso_saida_registro_kg: number | null
          preco_arroba_baixa: number | null
          preco_compra_kg_vivo: number | null
          projeto_id: string | null
          raca: string | null
          receita_bruta_baixa: number | null
          receita_liquida_baixa: number | null
          rendimento_baixa_percent: number | null
          sexo: string | null
          status: Database['public']['Enums']['gado_status_animal'] | null
          tipo_baixa: string | null
          tipo_baixa_registro: string | null
          updated_at: string | null
          valor_compra_calculado: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      v_gado_animais_simples: {
        Row: {
          animal_id: string | null
          brinco: string | null
          categoria: string | null
          created_at: string | null
          custo_total_compra: number | null
          fazenda_id: string | null
          fazenda_nome: string | null
          id: string | null
          nome: string | null
          nome_lote: string | null
          observacoes: string | null
          pasto_id: string | null
          pasto_nome: string | null
          peso_atual_kg: number | null
          peso_entrada_kg: number | null
          projeto_id: string | null
          sexo: string | null
          status: string | null
          updated_at: string | null
          valor_compra_informado: number | null
          valor_frete_compra: number | null
          valor_outros_custos_compra: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'gado_animais_pasto_id_fkey'
            columns: ['pasto_id']
            isOneToOne: false
            referencedRelation: 'gado_pastos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_animais_pasto_id_fkey'
            columns: ['pasto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_pastos_resumo'
            referencedColumns: ['pasto_id']
          },
          {
            foreignKeyName: 'gado_animais_pasto_id_fkey'
            columns: ['pasto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['pasto_id']
          },
          {
            foreignKeyName: 'gado_animais_pasto_id_fkey'
            columns: ['pasto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['pasto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_projetos_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'gado_fazendas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_projetos_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_compra_lote_historico'
            referencedColumns: ['fazenda_id']
          },
          {
            foreignKeyName: 'gado_projetos_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['fazenda_id']
          },
          {
            foreignKeyName: 'gado_projetos_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['fazenda_id']
          },
          {
            foreignKeyName: 'gado_projetos_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['fazenda_id']
          },
        ]
      }
      v_gado_compra_lote_historico: {
        Row: {
          created_at: string | null
          created_by: string | null
          data_compra: string | null
          documento: string | null
          fazenda_id: string | null
          fazenda_nome: string | null
          fornecedor: string | null
          id: string | null
          idade_compra_meses: number | null
          modo_frete: string | null
          modo_outros: string | null
          nome_lote: string | null
          observacoes: string | null
          projeto_id: string | null
          quantidade_animais_atualizados: number | null
          sobrescrever: boolean | null
          total_aquisicao: number | null
          total_compra_animais: number | null
          total_frete: number | null
          total_outros: number | null
          valor_compra_por_animal: number | null
          valor_frete_informado: number | null
          valor_frete_por_animal: number | null
          valor_outros_informado: number | null
          valor_outros_por_animal: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'gado_compra_lote_parametros_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_compra_lote_parametros_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_compra_lote_parametros_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_compra_lote_parametros_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_compra_lote_parametros_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_compra_lote_parametros_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_compra_lote_parametros_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_compra_lote_parametros_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_compra_lote_parametros_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_compra_lote_parametros_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_compra_lote_parametros_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      v_gado_compra_real_lote: {
        Row: {
          custo_medio_real_cabeca: number | null
          projeto_id: string | null
          quantidade_animais_ativos: number | null
          quantidade_animais_com_valor: number | null
          total_compra_real_lote: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      v_gado_custos_rebanho_geral: {
        Row: {
          animal_id: string | null
          brinco: string | null
          created_at: string | null
          custo_id: string | null
          data_movimento: string | null
          descricao: string | null
          documento: string | null
          escopo_custo: string | null
          fazenda_id: string | null
          fazenda_nome: string | null
          fornecedor: string | null
          nome_animal: string | null
          nome_lote: string | null
          observacoes: string | null
          origem: string | null
          pasto_id: string | null
          pasto_nome: string | null
          projeto_id: string | null
          quantidade: number | null
          tipo_custo: string | null
          unidade: string | null
          valor_total: number | null
          valor_unitario: number | null
        }
        Relationships: []
      }
      v_gado_custos_rebanho_resumo: {
        Row: {
          escopo_custo: string | null
          fazenda_id: string | null
          fazenda_nome: string | null
          nome_lote: string | null
          pasto_id: string | null
          pasto_nome: string | null
          primeira_data: string | null
          projeto_id: string | null
          quantidade_lancamentos: number | null
          tipo_custo: string | null
          ultima_data: string | null
          valor_total: number | null
        }
        Relationships: []
      }
      v_gado_dashboard_pesagens: {
        Row: {
          animais_ativos: number | null
          animais_com_pesagem: number | null
          animais_com_pesagem_atrasada: number | null
          animais_sem_pesagem: number | null
          gmd_medio_realizado_kg_dia: number | null
          nome_lote: string | null
          peso_medio_atual_kg: number | null
          projeto_id: string | null
        }
        Relationships: []
      }
      v_gado_dashboard_recentes: {
        Row: {
          animal_id: string | null
          baixa_id: string | null
          brinco: string | null
          categoria: Database['public']['Enums']['gado_categoria_animal'] | null
          created_at: string | null
          data_entrada: string | null
          data_evento: string | null
          descricao_evento: string | null
          idade_meses: number | null
          nome: string | null
          nome_lote: string | null
          peso_atual_kg: number | null
          peso_entrada_kg: number | null
          preco_compra_kg_vivo: number | null
          projeto_id: string | null
          raca: string | null
          sexo: string | null
          status: Database['public']['Enums']['gado_status_animal'] | null
          tipo_evento: string | null
          updated_at: string | null
          valor_compra_calculado: number | null
        }
        Relationships: []
      }
      v_gado_equipe: {
        Row: {
          ativo: boolean | null
          cargo: string | null
          created_at: string | null
          email: string | null
          fazenda_id: string | null
          fazenda_nome: string | null
          id: string | null
          nivel_acesso: string | null
          nome: string | null
          nome_lote: string | null
          observacoes: string | null
          pode_editar_alimentacao: boolean | null
          pode_editar_animais: boolean | null
          pode_editar_saude: boolean | null
          pode_editar_simulador: boolean | null
          pode_ver_financeiro: boolean | null
          pode_ver_relatorios: boolean | null
          projeto_id: string | null
          telefone: string | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'gado_equipe_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'gado_fazendas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_equipe_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_compra_lote_historico'
            referencedColumns: ['fazenda_id']
          },
          {
            foreignKeyName: 'gado_equipe_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['fazenda_id']
          },
          {
            foreignKeyName: 'gado_equipe_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['fazenda_id']
          },
          {
            foreignKeyName: 'gado_equipe_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['fazenda_id']
          },
          {
            foreignKeyName: 'gado_equipe_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_equipe_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_equipe_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_equipe_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_equipe_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_equipe_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_equipe_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_equipe_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_equipe_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_equipe_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_equipe_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      v_gado_equipe_resumo: {
        Row: {
          admins: number | null
          fazenda_id: string | null
          fazenda_nome: string | null
          gerenciais: number | null
          membros_ativos: number | null
          nome_lote: string | null
          operacionais: number | null
          projeto_id: string | null
          total_membros: number | null
          visualizadores: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'gado_projetos_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'gado_fazendas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_projetos_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_compra_lote_historico'
            referencedColumns: ['fazenda_id']
          },
          {
            foreignKeyName: 'gado_projetos_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['fazenda_id']
          },
          {
            foreignKeyName: 'gado_projetos_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['fazenda_id']
          },
          {
            foreignKeyName: 'gado_projetos_fazenda_id_fkey'
            columns: ['fazenda_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['fazenda_id']
          },
        ]
      }
      v_gado_evolucao_peso_animal: {
        Row: {
          animal_id: string | null
          brinco: string | null
          categoria: Database['public']['Enums']['gado_categoria_animal'] | null
          created_at: string | null
          data_entrada: string | null
          data_pesagem: string | null
          data_pesagem_anterior: string | null
          dias_desde_entrada: number | null
          dias_periodo: number | null
          ganho_acumulado_kg: number | null
          ganho_periodo_kg: number | null
          gmd_acumulado_kg_dia: number | null
          gmd_periodo_kg_dia: number | null
          nome: string | null
          nome_lote: string | null
          numero_pesagem: number | null
          observacao: string | null
          pesagem_id: string | null
          peso_anterior_kg: number | null
          peso_entrada_kg: number | null
          peso_kg: number | null
          projeto_id: string | null
          status: Database['public']['Enums']['gado_status_animal'] | null
        }
        Relationships: [
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'gado_animais'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_alertas_operacionais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_acoes'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_indicadores'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_operacional'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_simples'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_simples'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_perfil_animal'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_perfil_animal'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_pesagens_resumo_animais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_animais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      v_gado_evolucao_peso_lote_por_data: {
        Row: {
          animais_pesados: number | null
          data_pesagem: string | null
          ganho_medio_acumulado_kg: number | null
          gmd_medio_acumulado_kg_dia: number | null
          maior_peso_kg: number | null
          menor_peso_kg: number | null
          nome_lote: string | null
          peso_medio_kg: number | null
          peso_total_kg: number | null
          projeto_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      v_gado_grafico_peso_animal: {
        Row: {
          animal_id: string | null
          avg: number | null
          brinco: string | null
          categoria: Database['public']['Enums']['gado_categoria_animal'] | null
          created_at: string | null
          data_entrada: string | null
          data_pesagem: string | null
          data_pesagem_anterior: string | null
          date: string | null
          dias_desde_entrada: number | null
          dias_periodo: number | null
          ganho_acumulado_kg: number | null
          ganho_periodo_kg: number | null
          gmd_acumulado_kg_dia: number | null
          gmd_periodo_kg_dia: number | null
          nome: string | null
          nome_lote: string | null
          numero_pesagem: number | null
          observacao: string | null
          pesagem_id: string | null
          peso_anterior_kg: number | null
          peso_entrada_kg: number | null
          projeto_id: string | null
          status: Database['public']['Enums']['gado_status_animal'] | null
          weight: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'gado_animais'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_alertas_operacionais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_acoes'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_indicadores'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_operacional'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_simples'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_simples'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_perfil_animal'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_perfil_animal'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_pesagens_resumo_animais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_animais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      v_gado_movimentacoes_pasto: {
        Row: {
          animal_id: string | null
          brinco: string | null
          created_at: string | null
          data_movimentacao: string | null
          motivo: string | null
          movimentacao_pasto_id: string | null
          nome_animal: string | null
          nome_lote: string | null
          observacoes: string | null
          pasto_destino: string | null
          pasto_origem: string | null
          projeto_id: string | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'gado_movimentacoes_pasto_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'gado_animais'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_alertas_operacionais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_acoes'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_indicadores'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_operacional'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_simples'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_simples'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_perfil_animal'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_perfil_animal'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_pesagens_resumo_animais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_animais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_movimentacoes_pasto_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      v_gado_pastos_resumo: {
        Row: {
          animais_no_pasto: number | null
          area_hectares: number | null
          capacidade_cabecas: number | null
          created_at: string | null
          lotacao_percentual: number | null
          nome: string | null
          nome_lote: string | null
          observacoes: string | null
          pasto_id: string | null
          projeto_id: string | null
          status: string | null
          status_lotacao: string | null
          tipo_capim: string | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'gado_pastos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pastos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pastos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pastos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pastos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pastos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pastos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pastos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pastos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pastos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pastos_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      v_gado_perfil_animal: {
        Row: {
          animal_id: string | null
          arrobas_baixa: number | null
          breed: string | null
          brinco: string | null
          categoria: Database['public']['Enums']['gado_categoria_animal'] | null
          created_at: string | null
          data_baixa: string | null
          data_entrada: string | null
          dias_desde_ultima_pesagem: number | null
          ganho_acumulado_kg: number | null
          gender: string | null
          gmd_realizado_kg_dia: number | null
          id: string | null
          idade_meses: number | null
          lastweighed: string | null
          localizacao: string | null
          motivo_baixa: string | null
          name: string | null
          nome: string | null
          nome_lote: string | null
          observacoes: string | null
          peso_atual_kg: number | null
          peso_entrada_kg: number | null
          peso_saida_kg: number | null
          preco_compra_kg_vivo: number | null
          projeto_id: string | null
          raca: string | null
          receita_liquida_baixa: number | null
          sexo: string | null
          status: Database['public']['Enums']['gado_status_animal'] | null
          tag: string | null
          tipo_baixa: string | null
          ultima_data_pesagem: string | null
          ultimo_peso_kg: number | null
          updated_at: string | null
          valor_compra_calculado: number | null
          weight: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      v_gado_pesagens_cronograma: {
        Row: {
          animais_ativos: number | null
          animais_pesados: number | null
          data_prevista: string | null
          descricao: string | null
          dia_projeto: number | null
          id: string | null
          nome_lote: string | null
          obrigatoria: boolean | null
          percentual_concluido: number | null
          projeto_id: string | null
          status_cronograma: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'gado_pesagens_planejadas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pesagens_planejadas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_planejadas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_planejadas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_planejadas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_planejadas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_planejadas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_planejadas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_planejadas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_planejadas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_planejadas_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      v_gado_pesagens_historico: {
        Row: {
          animal_id: string | null
          brinco: string | null
          categoria: Database['public']['Enums']['gado_categoria_animal'] | null
          created_at: string | null
          data_pesagem: string | null
          data_pesagem_anterior: string | null
          dias_entre_pesagens: number | null
          ganho_periodo_kg: number | null
          gmd_periodo_kg_dia: number | null
          nome: string | null
          nome_lote: string | null
          observacao: string | null
          pesagem_id: string | null
          peso_anterior_kg: number | null
          peso_kg: number | null
          projeto_id: string | null
          status: Database['public']['Enums']['gado_status_animal'] | null
        }
        Relationships: [
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'gado_animais'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_alertas_operacionais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_acoes'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_indicadores'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_operacional'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_simples'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_simples'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_perfil_animal'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_perfil_animal'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_pesagens_resumo_animais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_animais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      v_gado_pesagens_quinzenal: {
        Row: {
          animal_id: string | null
          brinco: string | null
          categoria: Database['public']['Enums']['gado_categoria_animal'] | null
          data_pesagem: string | null
          data_pesagem_anterior: string | null
          dias_entre_pesagens: number | null
          ganho_periodo_kg: number | null
          gmd_periodo_kg_dia: number | null
          nome_animal: string | null
          nome_lote: string | null
          observacao: string | null
          pesagem_id: string | null
          peso_anterior_kg: number | null
          peso_kg: number | null
          projeto_id: string | null
          status_intervalo: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'gado_animais'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_alertas_operacionais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_acoes'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_indicadores'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_operacional'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_simples'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_simples'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_perfil_animal'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_perfil_animal'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_pesagens_resumo_animais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_animais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      v_gado_pesagens_resumo_animais: {
        Row: {
          animal_id: string | null
          brinco: string | null
          categoria: Database['public']['Enums']['gado_categoria_animal'] | null
          data_entrada: string | null
          dias_desde_ultima_pesagem: number | null
          dias_no_projeto: number | null
          ganho_acumulado_kg: number | null
          gmd_meta_kg_dia: number | null
          gmd_realizado_kg_dia: number | null
          nome: string | null
          nome_lote: string | null
          peso_atual_kg: number | null
          peso_entrada_kg: number | null
          peso_final_meta_kg: number | null
          peso_final_projetado_kg: number | null
          projeto_id: string | null
          status: Database['public']['Enums']['gado_status_animal'] | null
          status_pesagem: string | null
          ultima_data_pesagem: string | null
          ultimo_peso_kg: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      v_gado_projetos_indicadores: {
        Row: {
          animais_ativos: number | null
          custo_total_projetado: number | null
          gmd_realizado_kg_dia: number | null
          nome_lote: string | null
          projeto_id: string | null
          resultado_projetado: number | null
        }
        Insert: {
          animais_ativos?: never
          custo_total_projetado?: never
          gmd_realizado_kg_dia?: never
          nome_lote?: string | null
          projeto_id?: string | null
          resultado_projetado?: never
        }
        Update: {
          animais_ativos?: never
          custo_total_projetado?: never
          gmd_realizado_kg_dia?: never
          nome_lote?: string | null
          projeto_id?: string | null
          resultado_projetado?: never
        }
        Relationships: []
      }
      v_gado_rebanho_resumo_lote: {
        Row: {
          fazenda_id: string | null
          fazenda_nome: string | null
          ganho_medio_kg: number | null
          gmd_medio_kg_dia: number | null
          nome_lote: string | null
          peso_medio_atual_kg: number | null
          peso_medio_entrada_kg: number | null
          peso_total_kg: number | null
          primeira_entrada: string | null
          projeto_id: string | null
          quantidade_animais: number | null
          quantidade_animais_ativos: number | null
          quantidade_confinamento: number | null
          quantidade_rebanho_geral: number | null
          tipo_operacao: string | null
          total_compra_animais: number | null
          total_custo_aquisicao: number | null
          total_frete_compra: number | null
          total_outros_custos_compra: number | null
          ultima_entrada: string | null
          ultima_pesagem: string | null
        }
        Relationships: []
      }
      v_gado_rebanho_total: {
        Row: {
          animal_id: string | null
          aptidao: string | null
          brinco: string | null
          categoria: string | null
          created_at: string | null
          custo_total_aquisicao: number | null
          data_entrada: string | null
          data_nascimento: string | null
          dias_na_fazenda: number | null
          documento_compra: string | null
          fase_pecuaria: string | null
          fazenda_id: string | null
          fazenda_nome: string | null
          fornecedor_compra: string | null
          ganho_total_kg: number | null
          gmd_kg_dia: number | null
          idade_compra_meses: number | null
          manejo_atual: string | null
          motivo_status: string | null
          nome_animal: string | null
          nome_lote: string | null
          observacoes: string | null
          observacoes_compra: string | null
          origem_animal: string | null
          pasto_id: string | null
          pasto_nome: string | null
          peso_atual_kg: number | null
          peso_entrada_kg: number | null
          peso_referencia_kg: number | null
          primeira_data_pesagem: string | null
          primeiro_peso_kg: number | null
          projeto_id: string | null
          raca: string | null
          sexo: string | null
          sistema_criacao: string | null
          status_animal: string | null
          tipo_operacao: string | null
          ultima_data_pesagem: string | null
          updated_at: string | null
          valor_compra: number | null
          valor_frete_compra: number | null
          valor_outros_custos_compra: number | null
        }
        Relationships: []
      }
      v_gado_rebanho_total_resumo: {
        Row: {
          fase_pecuaria: string | null
          fazenda_id: string | null
          fazenda_nome: string | null
          ganho_medio_kg: number | null
          gmd_medio_kg_dia: number | null
          manejo_atual: string | null
          nome_lote: string | null
          pasto_id: string | null
          pasto_nome: string | null
          peso_medio_atual_kg: number | null
          peso_medio_entrada_kg: number | null
          peso_total_kg: number | null
          primeira_entrada: string | null
          projeto_id: string | null
          quantidade_animais: number | null
          sexo: string | null
          sistema_criacao: string | null
          status_animal: string | null
          tipo_operacao: string | null
          total_compra_animais: number | null
          total_custo_aquisicao: number | null
          total_frete_compra: number | null
          total_outros_custos_compra: number | null
          ultima_entrada: string | null
          ultima_pesagem: string | null
        }
        Relationships: []
      }
      v_gado_relatorio_historico_geral: {
        Row: {
          animal_id: string | null
          brinco: string | null
          categoria: string | null
          created_at: string | null
          data_evento: string | null
          descricao: string | null
          evento_id: string | null
          fazenda_id: string | null
          fazenda_nome: string | null
          ganho_kg: number | null
          nome_animal: string | null
          nome_lote: string | null
          observacao: string | null
          origem_tabela: string | null
          peso_anterior_kg: number | null
          peso_kg: number | null
          projeto_id: string | null
          status_animal: string | null
          tipo_evento: string | null
          valor_total: number | null
        }
        Relationships: []
      }
      v_gado_resultado_animais: {
        Row: {
          animal_id: string | null
          arrobas: number | null
          brinco: string | null
          categoria: Database['public']['Enums']['gado_categoria_animal'] | null
          created_at: string | null
          custo_compra: number | null
          data_baixa: string | null
          desconto_total: number | null
          nome: string | null
          nome_lote: string | null
          peso_atual_kg: number | null
          peso_baixa_kg: number | null
          peso_entrada_kg: number | null
          peso_saida_kg: number | null
          preco_arroba: number | null
          preco_compra_kg_vivo: number | null
          projeto_id: string | null
          raca: string | null
          receita_bruta: number | null
          receita_liquida: number | null
          rendimento_carcaca_percent: number | null
          resultado_bruto_sem_custos_operacionais: number | null
          sexo: string | null
          status: Database['public']['Enums']['gado_status_animal'] | null
          status_resultado_bruto: string | null
          tipo_baixa: string | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_animais_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      v_gado_resultado_lote: {
        Row: {
          animais_ativos: number | null
          animais_descartados: number | null
          animais_mortos: number | null
          animais_vendidos: number | null
          arrobas_baixadas: number | null
          custo_total_compra: number | null
          descontos_baixas: number | null
          localizacao: string | null
          nome_lote: string | null
          peso_medio_atual_kg: number | null
          peso_medio_entrada_kg: number | null
          peso_total_atual_kg: number | null
          peso_total_entrada_kg: number | null
          ponto_equilibrio_arroba_compra: number | null
          projeto_id: string | null
          receita_bruta_baixas: number | null
          receita_liquida_baixas: number | null
          resultado_bruto_animais_baixados: number | null
          sistema: Database['public']['Enums']['gado_sistema_producao'] | null
          status_projeto: Database['public']['Enums']['gado_status_projeto'] | null
          status_resultado_bruto: string | null
          total_animais: number | null
          ultima_movimentacao: string | null
        }
        Relationships: []
      }
      v_gado_saude_dashboard: {
        Row: {
          animais_ativos: number | null
          nome_lote: string | null
          pastos_ativos: number | null
          pastos_em_manutencao: number | null
          pastos_inativos: number | null
          projeto_id: string | null
          reforcos_7_dias: number | null
          reforcos_hoje: number | null
          reforcos_vencidos: number | null
          total_pastos: number | null
          total_vacinacoes: number | null
          total_vacinas: number | null
          vacinas_ativas: number | null
        }
        Relationships: []
      }
      v_gado_simulacoes_resultado: {
        Row: {
          arrobas_cabeca: number | null
          arrobas_lote: number | null
          created_at: string | null
          custo_alimentacao_cabeca: number | null
          custo_compra_cabeca: number | null
          custo_compra_lote: number | null
          custo_operacional_cabeca: number | null
          custo_operacional_lote: number | null
          custo_sanitario_cabeca: number | null
          custo_total_cabeca: number | null
          custo_total_lote: number | null
          gmd_kg_dia: number | null
          id: string | null
          kg_carcaca_cabeca: number | null
          margem_percentual: number | null
          nome: string | null
          observacoes: string | null
          outros_custos_cabeca: number | null
          peso_final_kg: number | null
          peso_inicial_kg: number | null
          ponto_equilibrio_arroba: number | null
          prazo_dias: number | null
          preco_compra_kg_vivo: number | null
          preco_maximo_compra_kg_vivo: number | null
          preco_venda_arroba: number | null
          projeto_id: string | null
          quantidade_cabecas: number | null
          receita_cabeca: number | null
          receita_lote: number | null
          rendimento_carcaca_percent: number | null
          resultado_cabeca: number | null
          resultado_lote: number | null
          status_financeiro: string | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'gado_simulacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_simulacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_simulacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_simulacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_simulacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_simulacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_simulacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_simulacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_simulacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_simulacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_simulacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      v_gado_simulador_projeto: {
        Row: {
          arrobas_cabeca: number | null
          consumo_racao_cabeca_periodo_kg: number | null
          consumo_racao_lote_periodo_kg: number | null
          custo_alimentacao_cabeca: number | null
          custo_alimentacao_total_lote: number | null
          custo_compra_cabeca: number | null
          custo_compra_cabeca_estimado: number | null
          custo_compra_lote: number | null
          custo_compra_lote_estimado: number | null
          custo_kg_ganho: number | null
          custo_medio_real_cabeca: number | null
          custo_operacional_cabeca: number | null
          custo_racao_dia_lote: number | null
          custo_sal_nucleo_dia_lote: number | null
          custo_sanitario_previsto_cabeca: number | null
          custo_total_alimentacao_dia_lote: number | null
          custo_total_cabeca: number | null
          custo_total_lote: number | null
          custo_volumoso_dia_lote: number | null
          data_inicio: string | null
          data_saida_prevista: string | null
          dias_confinamento: number | null
          ganho_total_kg: number | null
          gmd_meta_kg_dia: number | null
          kg_racao_cabeca_dia: number | null
          lucro_cabeca: number | null
          lucro_total: number | null
          metodo_custo_compra: string | null
          nome_lote: string | null
          observacoes: string | null
          origem_custo_compra: string | null
          outros_custos_previsto_cabeca: number | null
          peso_final_meta_kg: number | null
          peso_inicial_kg: number | null
          ponto_equilibrio_arroba: number | null
          prazo_dias: number | null
          preco_compra_kg_vivo: number | null
          preco_kg_racao: number | null
          preco_minimo_venda_kg: number | null
          preco_venda_arroba: number | null
          projeto_id: string | null
          quantidade_animais_ativos: number | null
          quantidade_animais_com_valor: number | null
          quantidade_cabecas: number | null
          quantidade_prevista: number | null
          receita_cabeca: number | null
          receita_lote: number | null
          rendimento_carcaca_percent: number | null
          status_financeiro: string | null
          total_compra_real_lote: number | null
        }
        Relationships: []
      }
      v_gado_ultima_pesagem: {
        Row: {
          animal_id: string | null
          brinco: string | null
          dias_desde_ultima_pesagem: number | null
          nome: string | null
          projeto_id: string | null
          ultima_data_pesagem: string | null
          ultima_observacao: string | null
          ultima_pesagem_created_at: string | null
          ultimo_peso_kg: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'gado_animais'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_alertas_operacionais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_acoes'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_indicadores'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_operacional'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_simples'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_simples'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_perfil_animal'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_perfil_animal'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_pesagens_resumo_animais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_animais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_pesagens_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      v_gado_vacinacoes_historico: {
        Row: {
          animal_id: string | null
          brinco: string | null
          created_at: string | null
          data_aplicacao: string | null
          doenca_alvo: string | null
          dose_ml: number | null
          fabricante: string | null
          lote_vacina: string | null
          nome_animal: string | null
          nome_lote: string | null
          observacoes: string | null
          projeto_id: string | null
          proxima_dose_data: string | null
          responsavel: string | null
          updated_at: string | null
          vacina: string | null
          vacina_id: string | null
          vacinacao_id: string | null
          via_aplicacao: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'gado_animais'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_alertas_operacionais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_acoes'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_indicadores'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_operacional'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_simples'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_simples'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_perfil_animal'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_perfil_animal'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_pesagens_resumo_animais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_animais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      v_gado_vacinas_catalogo: {
        Row: {
          carencia_dias: number | null
          created_at: string | null
          doenca_alvo: string | null
          dose_ml: number | null
          fabricante: string | null
          nome: string | null
          observacoes: string | null
          reforco_dias: number | null
          status: string | null
          updated_at: string | null
          vacina_id: string | null
          via_aplicacao: string | null
        }
        Insert: {
          carencia_dias?: number | null
          created_at?: string | null
          doenca_alvo?: string | null
          dose_ml?: number | null
          fabricante?: string | null
          nome?: string | null
          observacoes?: string | null
          reforco_dias?: number | null
          status?: string | null
          updated_at?: string | null
          vacina_id?: string | null
          via_aplicacao?: string | null
        }
        Update: {
          carencia_dias?: number | null
          created_at?: string | null
          doenca_alvo?: string | null
          dose_ml?: number | null
          fabricante?: string | null
          nome?: string | null
          observacoes?: string | null
          reforco_dias?: number | null
          status?: string | null
          updated_at?: string | null
          vacina_id?: string | null
          via_aplicacao?: string | null
        }
        Relationships: []
      }
      v_gado_vacinas_pendentes: {
        Row: {
          animal_id: string | null
          brinco: string | null
          created_at: string | null
          data_aplicacao: string | null
          dias_atraso: number | null
          dias_para_reforco: number | null
          doenca_alvo: string | null
          dose_ml: number | null
          fabricante: string | null
          lote_vacina: string | null
          nome_animal: string | null
          nome_lote: string | null
          observacoes: string | null
          projeto_id: string | null
          proxima_dose_data: string | null
          responsavel: string | null
          status_reforco: string | null
          updated_at: string | null
          vacina: string | null
          vacina_id: string | null
          vacinacao_id: string | null
          via_aplicacao: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'gado_animais'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_alertas_operacionais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_acoes'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_indicadores'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_operacional'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_simples'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_animais_simples'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_perfil_animal'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_perfil_animal'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_pesagens_resumo_animais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_animal_id_fkey'
            columns: ['animal_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_animais'
            referencedColumns: ['animal_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'gado_projetos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_analise_custos_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_dashboard_pesagens'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_equipe_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_projetos_indicadores'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_resumo_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_rebanho_total_resumo'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_resultado_lote'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_saude_dashboard'
            referencedColumns: ['projeto_id']
          },
          {
            foreignKeyName: 'gado_vacinacoes_projeto_id_fkey'
            columns: ['projeto_id']
            isOneToOne: false
            referencedRelation: 'v_gado_simulador_projeto'
            referencedColumns: ['projeto_id']
          },
        ]
      }
      vw_abn_companies_safe: {
        Row: {
          active: boolean | null
          base_fee: number | null
          cnae: string | null
          cnpj: string | null
          cnpj_normalizado: string | null
          created_at: string | null
          email: string | null
          id: string | null
          inscricao_estadual: string | null
          inscricao_municipal: string | null
          logo_url: string | null
          nr: string | null
          owner_name: string | null
          plano_contratado: string | null
          project_id: string | null
          razao_social: string | null
          regime_tributario: string | null
          responsaveis: string | null
          status: string | null
          uf: string | null
          updated_at: string | null
          user_id: string | null
          whatsapp: string | null
        }
        Insert: {
          active?: boolean | null
          base_fee?: number | null
          cnae?: string | null
          cnpj?: string | null
          cnpj_normalizado?: string | null
          created_at?: string | null
          email?: string | null
          id?: string | null
          inscricao_estadual?: string | null
          inscricao_municipal?: string | null
          logo_url?: string | null
          nr?: string | null
          owner_name?: string | null
          plano_contratado?: string | null
          project_id?: string | null
          razao_social?: string | null
          regime_tributario?: string | null
          responsaveis?: string | null
          status?: string | null
          uf?: string | null
          updated_at?: string | null
          user_id?: string | null
          whatsapp?: string | null
        }
        Update: {
          active?: boolean | null
          base_fee?: number | null
          cnae?: string | null
          cnpj?: string | null
          cnpj_normalizado?: string | null
          created_at?: string | null
          email?: string | null
          id?: string | null
          inscricao_estadual?: string | null
          inscricao_municipal?: string | null
          logo_url?: string | null
          nr?: string | null
          owner_name?: string | null
          plano_contratado?: string | null
          project_id?: string | null
          razao_social?: string | null
          regime_tributario?: string | null
          responsaveis?: string | null
          status?: string | null
          uf?: string | null
          updated_at?: string | null
          user_id?: string | null
          whatsapp?: string | null
        }
        Relationships: []
      }
      vw_abn_dashboard_alertas: {
        Row: {
          company_id: string | null
          project_id2: string | null
          uncategorized_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'abn_financial_transactions_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'abn_companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_financial_transactions_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_companies_safe'
            referencedColumns: ['id']
          },
        ]
      }
      vw_abn_dashboard_base: {
        Row: {
          account_id: string | null
          amount: number | null
          amount_abs: number | null
          category_id: string | null
          company_id: string | null
          created_at: string | null
          deleted_at: string | null
          description: string | null
          due_date: string | null
          financial_date: string | null
          id: string | null
          liquidado: boolean | null
          payment_date: string | null
          status: string | null
          tipo_movimento: string | null
          type: string | null
        }
        Insert: {
          account_id?: string | null
          amount?: number | null
          amount_abs?: never
          category_id?: string | null
          company_id?: string | null
          created_at?: string | null
          deleted_at?: string | null
          description?: string | null
          due_date?: string | null
          financial_date?: never
          id?: string | null
          liquidado?: never
          payment_date?: string | null
          status?: never
          tipo_movimento?: never
          type?: never
        }
        Update: {
          account_id?: string | null
          amount?: number | null
          amount_abs?: never
          category_id?: string | null
          company_id?: string | null
          created_at?: string | null
          deleted_at?: string | null
          description?: string | null
          due_date?: string | null
          financial_date?: never
          id?: string | null
          liquidado?: never
          payment_date?: string | null
          status?: never
          tipo_movimento?: never
          type?: never
        }
        Relationships: [
          {
            foreignKeyName: 'abn_financial_transactions_account_id_fkey'
            columns: ['account_id']
            isOneToOne: false
            referencedRelation: 'abn_financial_accounts'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_financial_transactions_category_id_fkey'
            columns: ['category_id']
            isOneToOne: false
            referencedRelation: 'abn_financial_categories'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_financial_transactions_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'abn_companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_financial_transactions_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_companies_safe'
            referencedColumns: ['id']
          },
        ]
      }
      vw_abn_dashboard_cards: {
        Row: {
          company_id: string | null
          pending_payables: number | null
          pending_receivables: number | null
          project_id2: string | null
          total_paid: number | null
          total_received: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'abn_financial_transactions_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'abn_companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_financial_transactions_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_companies_safe'
            referencedColumns: ['id']
          },
        ]
      }
      vw_abn_dashboard_desempenho_mensal: {
        Row: {
          company_id: string | null
          despesa: number | null
          month_year: string | null
          project_id2: string | null
          receita: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'abn_financial_transactions_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'abn_companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_financial_transactions_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_companies_safe'
            referencedColumns: ['id']
          },
        ]
      }
      vw_abn_lancamentos_dashboard: {
        Row: {
          account_id: string | null
          categoria: string | null
          category_id: string | null
          company_id: string | null
          created_at: string | null
          description: string | null
          due_date: string | null
          financial_date: string | null
          id: string | null
          liquidado: boolean | null
          payment_date: string | null
          status: string | null
          tipo_movimento: string | null
          valor: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'abn_financial_transactions_account_id_fkey'
            columns: ['account_id']
            isOneToOne: false
            referencedRelation: 'abn_financial_accounts'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_financial_transactions_category_id_fkey'
            columns: ['category_id']
            isOneToOne: false
            referencedRelation: 'abn_financial_categories'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_financial_transactions_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'abn_companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_financial_transactions_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_companies_safe'
            referencedColumns: ['id']
          },
        ]
      }
      vw_extrato_inteligente: {
        Row: {
          categoria: string | null
          categoria_id: string | null
          classificacao: string | null
          conciliacao: string | null
          data: string | null
          data_transacao: string | null
          descricao: string | null
          id: string | null
          movimento: string | null
          status_classificacao: string | null
          status_conciliacao: string | null
          tipo: string | null
          valor: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'transacoes_bancarias_categoria_id_fkey'
            columns: ['categoria_id']
            isOneToOne: false
            referencedRelation: 'categorias'
            referencedColumns: ['id']
          },
        ]
      }
      vw_fluxo_caixa_mensal: {
        Row: {
          mes: string | null
          project_id: string | null
          quantidade: number | null
          total: number | null
          type: string | null
        }
        Relationships: []
      }
      vw_importar_ofx_cards_ui: {
        Row: {
          classificadas: number | null
          company_id: string | null
          conciliadas: number | null
          pendentes: number | null
          project_id2: string | null
          qtd_entradas: number | null
          qtd_saidas: number | null
          total_movimentacoes: number | null
          valor_entradas: number | null
          valor_saidas: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'abn_financial_transactions_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'abn_companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_financial_transactions_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_companies_safe'
            referencedColumns: ['id']
          },
        ]
      }
      vw_importar_ofx_historico_ui: {
        Row: {
          account_id: string | null
          banco: string | null
          company_id: string | null
          conta: string | null
          conta_bancaria_id: string | null
          criado_em: string | null
          data_fim: string | null
          data_inicio: string | null
          duplicate_count: number | null
          empresa_id: string | null
          error_count: number | null
          id: string | null
          imported_count: number | null
          nome_arquivo: string | null
          observacao: string | null
          project_id2: string | null
          status: string | null
          total_entradas: number | null
          total_ignoradas: number | null
          total_recebidas: number | null
          total_saidas: number | null
          total_transacoes: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'abn_ofx_imports_account_id_fkey'
            columns: ['account_id']
            isOneToOne: false
            referencedRelation: 'abn_financial_accounts'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_ofx_imports_account_id_fkey'
            columns: ['conta_bancaria_id']
            isOneToOne: false
            referencedRelation: 'abn_financial_accounts'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_ofx_imports_company_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'abn_companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_ofx_imports_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'abn_companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_ofx_imports_company_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_companies_safe'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_ofx_imports_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_companies_safe'
            referencedColumns: ['id']
          },
        ]
      }
      vw_importar_ofx_movimentacoes_ui: {
        Row: {
          account_id: string | null
          banco: string | null
          categoria: string | null
          category_id: string | null
          classificacao: string | null
          company_id: string | null
          conciliacao: string | null
          conta: string | null
          contact_name: string | null
          criado_em: string | null
          data: string | null
          data_formatada: string | null
          descricao: string | null
          due_date: string | null
          financial_transaction_id: string | null
          fitid: string | null
          id: string | null
          importacao_id: string | null
          lancamento_vinculado_descricao: string | null
          lancamento_vinculado_status: string | null
          lancamento_vinculado_valor: number | null
          lancamento_vinculado_vencimento: string | null
          movimento: string | null
          observations: string | null
          payment_date: string | null
          project_id2: string | null
          reconciled_at: string | null
          reconciliation_confidence: string | null
          reconciliation_id: string | null
          reconciliation_score: number | null
          reconciliation_type: string | null
          status: string | null
          tipo: string | null
          type: string | null
          valor: number | null
          valor_exibicao: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'abn_bank_reconciliations_financial_transaction_id_fkey'
            columns: ['financial_transaction_id']
            isOneToOne: false
            referencedRelation: 'abn_financial_transactions'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_bank_reconciliations_financial_transaction_id_fkey'
            columns: ['financial_transaction_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_dashboard_base'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_bank_reconciliations_financial_transaction_id_fkey'
            columns: ['financial_transaction_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_lancamentos_dashboard'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_bank_reconciliations_financial_transaction_id_fkey'
            columns: ['financial_transaction_id']
            isOneToOne: false
            referencedRelation: 'vw_importar_ofx_movimentacoes_ui'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_financial_transactions_account_id_fkey'
            columns: ['account_id']
            isOneToOne: false
            referencedRelation: 'abn_financial_accounts'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_financial_transactions_category_id_fkey'
            columns: ['category_id']
            isOneToOne: false
            referencedRelation: 'abn_financial_categories'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_financial_transactions_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'abn_companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'abn_financial_transactions_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'vw_abn_companies_safe'
            referencedColumns: ['id']
          },
        ]
      }
      vw_lancamentos_por_competencia: {
        Row: {
          ativo: boolean | null
          category: string | null
          category_id: string | null
          cnpj_empresa: string | null
          company_id: string | null
          competencia: string | null
          created_at: string | null
          date: string | null
          description: string | null
          document_type: string | null
          empresa_id: string | null
          fitid: string | null
          id: string | null
          import_batch_id: string | null
          is_fixed: boolean | null
          payment_method: string | null
          project_id: string | null
          quantity: number | null
          revenue_type: string | null
          source: string | null
          source_file_name: string | null
          treatment_type: string | null
          type: string | null
          unit_price: number | null
          updated_at: string | null
          user_id: string | null
          value: number | null
        }
        Insert: {
          ativo?: boolean | null
          category?: string | null
          category_id?: string | null
          cnpj_empresa?: string | null
          company_id?: string | null
          competencia?: string | null
          created_at?: string | null
          date?: string | null
          description?: string | null
          document_type?: string | null
          empresa_id?: string | null
          fitid?: string | null
          id?: string | null
          import_batch_id?: string | null
          is_fixed?: boolean | null
          payment_method?: string | null
          project_id?: string | null
          quantity?: number | null
          revenue_type?: string | null
          source?: string | null
          source_file_name?: string | null
          treatment_type?: string | null
          type?: string | null
          unit_price?: number | null
          updated_at?: string | null
          user_id?: string | null
          value?: number | null
        }
        Update: {
          ativo?: boolean | null
          category?: string | null
          category_id?: string | null
          cnpj_empresa?: string | null
          company_id?: string | null
          competencia?: string | null
          created_at?: string | null
          date?: string | null
          description?: string | null
          document_type?: string | null
          empresa_id?: string | null
          fitid?: string | null
          id?: string | null
          import_batch_id?: string | null
          is_fixed?: boolean | null
          payment_method?: string | null
          project_id?: string | null
          quantity?: number | null
          revenue_type?: string | null
          source?: string | null
          source_file_name?: string | null
          treatment_type?: string | null
          type?: string | null
          unit_price?: number | null
          updated_at?: string | null
          user_id?: string | null
          value?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'transactions_category_id_fkey'
            columns: ['category_id']
            isOneToOne: false
            referencedRelation: 'categorias_financeiras'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'transactions_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'transactions_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'transactions_import_batch_id_fkey'
            columns: ['import_batch_id']
            isOneToOne: false
            referencedRelation: 'ofx_import_batches'
            referencedColumns: ['id']
          },
        ]
      }
      vw_relatorios_base_financeira: {
        Row: {
          banco: string | null
          categoria: string | null
          conta: string | null
          conta_bancaria_id: string | null
          criado_em: string | null
          data: string | null
          data_formatada: string | null
          descricao: string | null
          empresa_id: string | null
          id: string | null
          importacao_id: string | null
          movimento: string | null
          status_classificacao: string | null
          status_conciliacao: string | null
          tipo: string | null
          valor: number | null
          valor_com_sinal: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'transacoes_bancarias_importacao_id_fkey'
            columns: ['importacao_id']
            isOneToOne: false
            referencedRelation: 'importacoes_ofx'
            referencedColumns: ['id']
          },
        ]
      }
      vw_relatorios_cards_geral: {
        Row: {
          pendentes_classificacao: number | null
          pendentes_conciliacao: number | null
          saldo: number | null
          total_despesas: number | null
          total_movimentacoes: number | null
          total_receitas: number | null
        }
        Relationships: []
      }
      vw_relatorios_dre_simples: {
        Row: {
          categoria: string | null
          empresa_id: string | null
          quantidade: number | null
          tipo: string | null
          total: number | null
        }
        Relationships: []
      }
      vw_relatorios_fluxo_mensal: {
        Row: {
          despesas: number | null
          empresa_id: string | null
          mes: string | null
          mes_formatado: string | null
          receitas: number | null
          saldo: number | null
        }
        Relationships: []
      }
      vw_resultado_por_competencia: {
        Row: {
          competencia: string | null
          saldo: number | null
          total_despesas: number | null
          total_receitas: number | null
          user_id: string | null
        }
        Relationships: []
      }
      vw_transacoes_pendentes: {
        Row: {
          categoria: string | null
          data_transacao: string | null
          descricao: string | null
          id: string | null
          status_classificacao: string | null
          status_conciliacao: string | null
          tipo: string | null
          valor: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      abn_add_company_user: {
        Args: { p_company_id: string; p_email: string; p_role: string }
        Returns: Json
      }
      abn_aplicar_regras_conciliacao_ofx: {
        Args: {
          p_company_id: string
          p_limite?: number
          p_min_confidence?: number
        }
        Returns: {
          categoria_id: string
          confianca: number
          conta_id: string
          data: string
          descricao: string
          regra_id: string
          status_aplicado: string
          tipo: string
          transaction_id: string
          valor: number
        }[]
      }
      abn_apply_default_financial_categories: {
        Args: {
          p_company_id: string
          p_include_current_taxes?: boolean
          p_include_general?: boolean
          p_include_tax_reform?: boolean
        }
        Returns: Json
      }
      abn_apply_ofx_categories: {
        Args: { p_company_id: string }
        Returns: Json
      }
      abn_atualizar_status_financeiro_em_lote: {
        Args: {
          p_account_id?: string
          p_company_id: string
          p_data_liquidacao?: string
          p_novo_status: string
          p_observacao?: string
          p_transaction_ids: string[]
        }
        Returns: Json
      }
      abn_can_access_company: {
        Args: { p_company_id: string }
        Returns: boolean
      }
      abn_can_admin_company: {
        Args: { p_company_id: string }
        Returns: boolean
      }
      abn_can_manage_company: {
        Args: { p_company_id: string }
        Returns: boolean
      }
      abn_can_manage_team: { Args: { p_company_id: string }; Returns: boolean }
      abn_conciliar_lancamento_manual:
        | {
            Args: {
              p_bank_transaction_id: string
              p_company_id: string
              p_financial_transaction_id: string
              p_notes?: string
              p_tolerancia_valor?: number
            }
            Returns: Json
          }
        | {
            Args: {
              p_bank_transaction_id: string
              p_company_id: string
              p_financial_transaction_id: string
              p_tolerancia_valor?: number
            }
            Returns: Json
          }
      abn_conciliar_xml_movimentacao: {
        Args: {
          p_company_id: string
          p_movimentacao_id: string
          p_observacao?: string
          p_valor_vinculado?: number
          p_xml_id: string
        }
        Returns: Json
      }
      abn_confirmar_conciliacao_bancaria:
        | {
            Args: {
              p_bank_transaction_id: string
              p_company_id: string
              p_financial_transaction_id: string
              p_reconciliation_type?: string
              p_tolerancia_valor?: number
            }
            Returns: Json
          }
        | {
            Args: {
              p_bank_transaction_id: string
              p_company_id: string
              p_confidence?: string
              p_financial_transaction_id: string
              p_notes?: string
              p_reconciliation_type?: string
              p_score?: number
              p_tolerancia_valor?: number
            }
            Returns: Json
          }
      abn_create_company_with_owner: {
        Args: {
          p_cnpj: string
          p_email?: string
          p_owner_name?: string
          p_project_id?: string
          p_razao_social: string
          p_regime_tributario: string
          p_status?: string
          p_uf: string
          p_user_id: string
          p_whatsapp?: string
        }
        Returns: {
          company_id: string
          company_user_id: string
          link_existed: boolean
        }[]
      }
      abn_create_financial_account: {
        Args: {
          p_account_number?: string
          p_agency?: string
          p_balance?: number
          p_bank_name?: string
          p_company_id: string
          p_name: string
          p_type: string
        }
        Returns: string
      }
      abn_criar_lancamento_e_conciliar:
        | {
            Args: {
              p_bank_transaction_id: string
              p_category_id?: string
              p_company_id: string
              p_contact_name?: string
              p_description?: string
              p_due_date?: string
              p_observations?: string
            }
            Returns: Json
          }
        | {
            Args: {
              p_account_id?: string
              p_amount: number
              p_bank_transaction_id: string
              p_category_id: string
              p_company_id: string
              p_contact_name?: string
              p_description: string
              p_due_date: string
              p_type: string
            }
            Returns: Json
          }
      abn_current_project_id: { Args: never; Returns: string }
      abn_current_project_id2: { Args: never; Returns: string }
      abn_delete_company: {
        Args: {
          p_check_only?: boolean
          p_company_id: string
          p_project_id: string
        }
        Returns: {
          blocked: boolean
          message: string
          success: boolean
        }[]
      }
      abn_demonstrativo_competencias: {
        Args: { p_project_id: string }
        Returns: {
          ano: string
          competencia: string
          mes: string
          mes_em_curso: boolean
          rotulo: string
          tem_lancamentos: boolean
          total_lancamentos: number
          ultimo_mes_com_dados: boolean
        }[]
      }
      abn_demonstrativo_mensal_categorias: {
        Args: { p_competencia: string; p_project_id: string }
        Returns: {
          category: string
          description: string
          id: string
          quantity: number
          type: string
          unit_price: number
          value: number
        }[]
      }
      abn_demonstrativo_mensal_detalhado: {
        Args: { p_competencia: string; p_project_id: string }
        Returns: {
          category: string
          competencia: string
          date: string
          description: string
          id: string
          type: string
          value: number
        }[]
      }
      abn_demonstrativo_mensal_resumo: {
        Args: { p_competencia: string; p_project_id: string }
        Returns: {
          saldo_anterior: number
          saldo_final: number
          total_despesas: number
          total_receitas: number
        }[]
      }
      abn_desfazer_conciliacao_bancaria: {
        Args: {
          p_company_id: string
          p_reason?: string
          p_reconciliation_id: string
        }
        Returns: Json
      }
      abn_desfazer_conciliacao_xml: {
        Args: { p_company_id: string; p_conciliacao_id: string }
        Returns: Json
      }
      abn_excluir_xml: { Args: { p_xml_id: string }; Returns: Json }
      abn_gerar_financeiro_xml: {
        Args: {
          p_company_id: string
          p_data_vencimento?: string
          p_observacao?: string
          p_tipo_financeiro: string
          p_xml_id: string
        }
        Returns: Json
      }
      abn_gerar_financeiro_xml_auto: {
        Args: {
          p_company_id: string
          p_data_vencimento?: string
          p_observacao?: string
          p_xml_id: string
        }
        Returns: Json
      }
      abn_gerar_regras_conciliacao_historico: {
        Args: { p_company_id: string }
        Returns: {
          categoria_id: string
          conta_id: string
          descricao: string
          quantidade_base: number
          regra_id: string
          status_sugerido: string
          tipo: string
        }[]
      }
      abn_gerar_regras_genericas_conciliacao: {
        Args: { p_company_id: string }
        Returns: {
          categoria_id: string
          confianca: number
          conta_id: string
          descricao_pattern: string
          regra_id: string
          status_sugerido: string
          tipo: string
        }[]
      }
      abn_get_dashboard_base_gestao: {
        Args: { p_company_id: string; p_month_year?: string }
        Returns: Json
      }
      abn_get_dashboard_escritorio: {
        Args: { p_company_id?: string; p_month_year?: string }
        Returns: Json
      }
      abn_get_dre_gerencial:
        | {
            Args: { p_company_id: string; p_month_year: string }
            Returns: Json
          }
        | {
            Args: {
              p_company_id: string
              p_end_month?: number
              p_start_month?: number
              p_year: number
            }
            Returns: {
              is_subtotal: boolean
              label: string
              line_order: number
              value: number
            }[]
          }
      abn_get_financial_period_summary: {
        Args: { p_company_id: string; p_end_date: string; p_start_date: string }
        Returns: Json
      }
      abn_get_historico_ofx: {
        Args: { p_company_id: string; p_limit?: number }
        Returns: Json
      }
      abn_get_lancamentos_ofx: {
        Args: {
          p_company_id: string
          p_data_fim?: string
          p_data_inicio?: string
          p_limit?: number
          p_search?: string
          p_status?: string
          p_tipo?: string
        }
        Returns: Json
      }
      abn_get_relatorio_xml: {
        Args: { p_company_id: string; p_month_year?: string }
        Returns: Json
      }
      abn_get_user_companies: {
        Args: never
        Returns: {
          active: boolean
          cnpj: string
          company_id: string
          email: string
          logo_url: string
          razao_social: string
          regime_tributario: string
          status: string
          uf: string
          user_role: string
          whatsapp: string
        }[]
      }
      abn_get_xml_hub: {
        Args: { p_company_id: string; p_limit?: number; p_month_year?: string }
        Returns: Json
      }
      abn_get_xmls_conciliacao: {
        Args: {
          p_company_id: string
          p_limit?: number
          p_month_year?: string
          p_status?: string
        }
        Returns: Json
      }
      abn_has_column: {
        Args: { p_column: string; p_table: string }
        Returns: boolean
      }
      abn_import_ofx_transactions: {
        Args: {
          p_account_id: string
          p_company_id: string
          p_file_name: string
          p_transactions: Json
        }
        Returns: Json
      }
      abn_importar_xml_texto: {
        Args: {
          p_company_id: string
          p_nome_arquivo: string
          p_xml_texto: string
        }
        Returns: Json
      }
      abn_is_office_admin: { Args: never; Returns: boolean }
      abn_listar_contas_periodo: {
        Args: {
          p_ano?: number
          p_company_id: string
          p_data_base?: string
          p_mes?: number
          p_status?: string
          p_tipo: string
          p_visao?: string
        }
        Returns: {
          account_id: string
          account_name: string
          amount: number
          category_id: string
          category_name: string
          company_id: string
          contact_name: string
          cost_center_id: string
          created_at: string
          description: string
          due_date: string
          fitid: string
          id: string
          is_recurring: boolean
          month_year: string
          normalized_description: string
          observations: string
          payment_date: string
          payment_method: string
          status: string
          type: string
        }[]
      }
      abn_listar_contas_periodo_v2: {
        Args: {
          p_ano?: number
          p_company_id: string
          p_data_base?: string
          p_mes?: number
          p_status?: string
          p_tipo?: string
          p_visao?: string
        }
        Returns: {
          categoria_id: string
          company_id: string
          competencia: string
          conta_id: string
          data_base: string
          data_pagamento: string
          data_vencimento: string
          descricao: string
          origem: string
          status: string
          tipo: string
          transaction_id: string
          valor: number
        }[]
      }
      abn_normalizar_descricao_bancaria: {
        Args: { p_text: string }
        Returns: string
      }
      abn_normalize_dre_group: {
        Args: { p_dre_group: string; p_type: string }
        Returns: string
      }
      abn_prever_regras_conciliacao_ofx: {
        Args: {
          p_company_id: string
          p_limite?: number
          p_min_confidence?: number
        }
        Returns: {
          categoria_atual: string
          categoria_sugerida: string
          confianca: number
          conta_atual: string
          conta_sugerida: string
          data: string
          descricao: string
          modo_regra: string
          regra_id: string
          regra_pattern: string
          status_atual: string
          status_sugerido: string
          tipo: string
          transaction_id: string
          valor: number
        }[]
      }
      abn_registrar_xml:
        | {
            Args: {
              p_chave_acesso: string
              p_company_id: string
              p_data_emissao: string
              p_destinatario_cnpj: string
              p_destinatario_nome: string
              p_emitente_cnpj: string
              p_emitente_nome: string
              p_natureza_operacao: string
              p_nome_arquivo: string
              p_numero: string
              p_protocolo_autorizacao: string
              p_serie: string
              p_tipo_documento: string
              p_uf_destinatario: string
              p_uf_emitente: string
              p_valor_total: number
              p_xml_texto: string
            }
            Returns: Json
          }
        | {
            Args: {
              p_chave_acesso: string
              p_company_id: string
              p_data_emissao?: string
              p_destinatario_cnpj?: string
              p_destinatario_nome?: string
              p_emitente_cnpj?: string
              p_emitente_nome?: string
              p_natureza_operacao?: string
              p_nome_arquivo?: string
              p_numero?: string
              p_protocolo_autorizacao?: string
              p_serie?: string
              p_tipo_documento: string
              p_uf_destinatario?: string
              p_uf_emitente?: string
              p_valor_total?: number
              p_xml_texto?: string
            }
            Returns: Json
          }
      abn_resumo_contas_periodo: {
        Args: {
          p_ano?: number
          p_company_id: string
          p_data_base?: string
          p_mes?: number
          p_status?: string
          p_tipo: string
          p_visao?: string
        }
        Returns: {
          total_cancelados: number
          total_conciliados: number
          total_pagos: number
          total_pendentes: number
          total_registros: number
          valor_cancelados: number
          valor_conciliados: number
          valor_pagos: number
          valor_pendentes: number
          valor_total: number
        }[]
      }
      abn_resumo_contas_periodo_v2: {
        Args: {
          p_ano?: number
          p_company_id: string
          p_data_base?: string
          p_mes?: number
          p_tipo?: string
          p_visao?: string
        }
        Returns: {
          competencia: string
          quantidade: number
          status: string
          tipo: string
          total: number
        }[]
      }
      abn_safe_uuid: { Args: { p_text: string }; Returns: string }
      abn_save_financial_category: {
        Args: {
          p_category_id?: string
          p_company_id?: string
          p_description?: string
          p_dre_group?: string
          p_is_active?: boolean
          p_name?: string
          p_type?: string
        }
        Returns: {
          business_type_code: string | null
          category_scope: string | null
          company_id: string
          created_at: string
          default_category_code: string | null
          description: string | null
          dre_group: string | null
          id: string
          is_active: boolean | null
          is_system_default: boolean
          is_tax: boolean
          is_tax_reform: boolean
          name: string
          project_id2: string | null
          tax_code: string | null
          type: string
          updated_at: string | null
          valid_from: string | null
          valid_until: string | null
        }
        SetofOptions: {
          from: '*'
          to: 'abn_financial_categories'
          isOneToOne: true
          isSetofReturn: false
        }
      }
      abn_set_company_business_types: {
        Args: {
          p_business_type_codes: string[]
          p_company_id: string
          p_primary_code: string
        }
        Returns: Json
      }
      abn_sugerir_conciliacao_bancaria: {
        Args: {
          p_company_id: string
          p_dias_tolerancia?: number
          p_limite?: number
        }
        Returns: {
          bank_amount: number
          bank_date: string
          bank_description: string
          bank_transaction_id: string
          bank_type: string
          confidence: string
          diff_days: number
          diff_value: number
          financial_amount: number
          financial_description: string
          financial_due_date: string
          financial_transaction_id: string
          score: number
        }[]
      }
      abn_sugerir_conciliacao_xml: {
        Args: {
          p_company_id: string
          p_dias?: number
          p_tolerancia?: number
          p_xml_id: string
        }
        Returns: Json
      }
      abn_update_company: {
        Args: {
          p_cnpj: string
          p_company_id: string
          p_email: string
          p_project_id: string
          p_razao_social: string
          p_regime_tributario: string
          p_status: string
          p_uf: string
          p_whatsapp: string
        }
        Returns: {
          active: boolean | null
          base_fee: number | null
          certificado_digital: string | null
          certificado_senha: string | null
          certificado_url: string | null
          cnae: string | null
          cnpj: string
          cnpj_normalizado: string | null
          created_at: string
          email: string | null
          id: string
          inscricao_estadual: string | null
          inscricao_municipal: string | null
          logo_url: string | null
          nr: string | null
          owner_name: string | null
          permissoes: string | null
          plano_contratado: string | null
          procuracoes: string | null
          project_id: string | null
          project_id2: string | null
          razao_social: string
          regime_tributario: string | null
          responsaveis: string | null
          status: string | null
          uf: string | null
          updated_at: string
          user_id: string
          whatsapp: string | null
        }[]
        SetofOptions: {
          from: '*'
          to: 'abn_companies'
          isOneToOne: false
          isSetofReturn: true
        }
      }
      abn_update_company_logo: {
        Args: { p_company_id: string; p_logo_url: string; p_project_id: string }
        Returns: undefined
      }
      abn_update_company_user: {
        Args: {
          p_company_id: string
          p_role: string
          p_status: string
          p_user_id: string
        }
        Returns: Json
      }
      abn_user_can_manage_company: {
        Args: { p_company_id: string; p_user_id: string }
        Returns: boolean
      }
      abn_user_is_company_member: {
        Args: { p_company_id: string; p_user_id: string }
        Returns: boolean
      }
      abn_valor_assinado: {
        Args: { p_type: string; p_value: number }
        Returns: number
      }
      abn_xml_first_match: {
        Args: { p_pattern: string; p_text: string }
        Returns: string
      }
      abn_xml_section_tag_text: {
        Args: { p_section: string; p_tag: string; p_xml: string }
        Returns: string
      }
      abn_xml_tag_text: {
        Args: { p_tag: string; p_xml: string }
        Returns: string
      }
      belongs_to_project: { Args: { p_projeto_id: string }; Returns: boolean }
      ce_empresa_pertence_ao_escritorio: {
        Args: { p_empresa_id: string; p_escritorio_id: string }
        Returns: boolean
      }
      ce_usuario_eh_administrador: {
        Args: { p_escritorio_id: string }
        Returns: boolean
      }
      ce_usuario_pode_editar_empresas: {
        Args: { p_escritorio_id: string }
        Returns: boolean
      }
      ce_usuario_tem_acesso: {
        Args: { p_escritorio_id: string }
        Returns: boolean
      }
      check_user_company_access: {
        Args: { p_company_id: string }
        Returns: boolean
      }
      classificar_transacoes_bancarias: { Args: never; Returns: number }
      converter_data_ofx: { Args: { data_texto: string }; Returns: string }
      create_bank_account_v2: {
        Args: {
          p_agencia: string
          p_banco: string
          p_conta: string
          p_data_saldo_inicial: string
          p_nome: string
          p_saldo_inicial: number
          p_tipo: string
        }
        Returns: Json
      }
      create_company_hierarchy: {
        Args: {
          p_cnpj: string
          p_name: string
          p_nome_fantasia: string
          p_razao_social: string
        }
        Returns: Json
      }
      gado_alocar_animal_pasto: {
        Args: {
          p_animal_id: string
          p_data_movimentacao?: string
          p_motivo?: string
          p_observacoes?: string
          p_pasto_destino_id: string
        }
        Returns: {
          animal_id: string
          created_at: string
          data_movimentacao: string
          id: string
          motivo: string | null
          observacoes: string | null
          pasto_destino_id: string | null
          pasto_origem_id: string | null
          projeto_id: string
          updated_at: string
        }
        SetofOptions: {
          from: '*'
          to: 'gado_movimentacoes_pasto'
          isOneToOne: true
          isSetofReturn: false
        }
      }
      gado_aplicar_compra_padrao_lote: {
        Args: {
          p_data_compra?: string
          p_documento?: string
          p_fornecedor?: string
          p_idade_compra_meses?: number
          p_modo_frete?: string
          p_modo_outros?: string
          p_observacoes?: string
          p_projeto_id: string
          p_sobrescrever?: boolean
          p_valor_compra_por_animal: number
          p_valor_frete?: number
          p_valor_outros?: number
        }
        Returns: {
          custo_total_aquisicao: number
          quantidade_animais_atualizados: number
          valor_compra_total: number
          valor_frete_total: number
          valor_outros_total: number
        }[]
      }
      gado_atualizar_datas_projeto: {
        Args: {
          p_data_inicio: string
          p_data_saida_prevista: string
          p_prazo_dias: number
          p_projeto_id: string
        }
        Returns: undefined
      }
      gado_atualizar_pasto: {
        Args: {
          p_area_hectares?: number
          p_capacidade_cabecas?: number
          p_nome?: string
          p_observacoes?: string
          p_pasto_id: string
          p_status?: string
          p_tipo_capim?: string
        }
        Returns: {
          area_hectares: number | null
          capacidade_cabecas: number | null
          created_at: string
          id: string
          nome: string
          observacoes: string | null
          projeto_id: string
          status: string
          tipo_capim: string | null
          updated_at: string
        }
        SetofOptions: {
          from: '*'
          to: 'gado_pastos'
          isOneToOne: true
          isSetofReturn: false
        }
      }
      gado_atualizar_vacina: {
        Args: {
          p_carencia_dias?: number
          p_doenca_alvo?: string
          p_dose_ml?: number
          p_fabricante?: string
          p_nome?: string
          p_observacoes?: string
          p_reforco_dias?: number
          p_status?: string
          p_vacina_id: string
          p_via_aplicacao?: string
        }
        Returns: {
          carencia_dias: number | null
          created_at: string
          created_by: string | null
          doenca_alvo: string | null
          dose_ml: number | null
          fabricante: string | null
          id: string
          nome: string
          observacoes: string | null
          reforco_dias: number | null
          status: string
          updated_at: string
          via_aplicacao: string | null
        }
        SetofOptions: {
          from: '*'
          to: 'gado_vacinas_catalogo'
          isOneToOne: true
          isSetofReturn: false
        }
      }
      gado_can_access_projeto: {
        Args: { p_projeto_id: string }
        Returns: boolean
      }
      gado_criar_pasto: {
        Args: {
          p_area_hectares?: number
          p_capacidade_cabecas?: number
          p_nome: string
          p_observacoes?: string
          p_projeto_id: string
          p_status?: string
          p_tipo_capim?: string
        }
        Returns: {
          area_hectares: number | null
          capacidade_cabecas: number | null
          created_at: string
          id: string
          nome: string
          observacoes: string | null
          projeto_id: string
          status: string
          tipo_capim: string | null
          updated_at: string
        }
        SetofOptions: {
          from: '*'
          to: 'gado_pastos'
          isOneToOne: true
          isSetofReturn: false
        }
      }
      gado_criar_vacina: {
        Args: {
          p_carencia_dias?: number
          p_doenca_alvo?: string
          p_dose_ml?: number
          p_fabricante?: string
          p_nome: string
          p_observacoes?: string
          p_reforco_dias?: number
          p_status?: string
          p_via_aplicacao?: string
        }
        Returns: {
          carencia_dias: number | null
          created_at: string
          created_by: string | null
          doenca_alvo: string | null
          dose_ml: number | null
          fabricante: string | null
          id: string
          nome: string
          observacoes: string | null
          reforco_dias: number | null
          status: string
          updated_at: string
          via_aplicacao: string | null
        }
        SetofOptions: {
          from: '*'
          to: 'gado_vacinas_catalogo'
          isOneToOne: true
          isSetofReturn: false
        }
      }
      gado_dar_baixa_animal: {
        Args: {
          p_animal_id: string
          p_data_baixa?: string
          p_desconto_total?: number
          p_motivo?: string
          p_observacoes?: string
          p_peso_saida_kg?: number
          p_preco_arroba?: number
          p_rendimento_carcaca_percent?: number
          p_tipo_baixa?: string
        }
        Returns: {
          animal_id: string
          arrobas: number | null
          created_at: string
          data_baixa: string
          desconto_total: number
          id: string
          kg_carcaca: number | null
          motivo: string | null
          observacoes: string | null
          peso_saida_kg: number | null
          preco_arroba: number | null
          projeto_id: string
          receita_bruta: number | null
          receita_liquida: number | null
          rendimento_carcaca_percent: number | null
          tipo_baixa: string
          updated_at: string
        }
        SetofOptions: {
          from: '*'
          to: 'gado_baixas_animais'
          isOneToOne: true
          isSetofReturn: false
        }
      }
      gado_gerar_cronograma_pesagens: {
        Args: { p_projeto_id: string }
        Returns: undefined
      }
      gado_parse_numeric: {
        Args: { p_default?: number; p_value: string }
        Returns: number
      }
      gado_reativar_animal: {
        Args: { p_animal_id: string; p_observacoes?: string }
        Returns: {
          aptidao: string | null
          brinco: string
          categoria: Database['public']['Enums']['gado_categoria_animal']
          created_at: string
          data_baixa: string | null
          data_entrada: string
          data_nascimento: string | null
          documento_compra: string | null
          fase_pecuaria: string | null
          fornecedor_compra: string | null
          id: string
          idade_compra_meses: number | null
          idade_meses: number | null
          manejo_atual: string | null
          motivo_baixa: string | null
          motivo_status: string | null
          nome: string | null
          observacao_idade_compra: string | null
          observacoes: string | null
          observacoes_compra: string | null
          origem_animal: string | null
          pasto_atual_id: string | null
          pasto_id: string | null
          peso_atual_kg: number | null
          peso_entrada_kg: number
          peso_saida_kg: number | null
          preco_compra_kg_vivo: number
          projeto_id: string
          raca: string | null
          sexo: string | null
          sistema_criacao: string | null
          status: Database['public']['Enums']['gado_status_animal']
          tipo_baixa: string | null
          updated_at: string
          valor_compra: number | null
          valor_compra_informado: number | null
          valor_frete_compra: number | null
          valor_outros_custos_compra: number | null
        }
        SetofOptions: {
          from: '*'
          to: 'gado_animais'
          isOneToOne: true
          isSetofReturn: false
        }
      }
      gado_registrar_compra_insumo: {
        Args: {
          p_data_compra?: string
          p_descricao?: string
          p_documento?: string
          p_fazenda_id?: string
          p_fornecedor?: string
          p_insumo_id?: string
          p_observacoes?: string
          p_pasto_id?: string
          p_projeto_id?: string
          p_quantidade?: number
          p_tipo_insumo?: string
          p_unidade?: string
          p_valor_desconto?: number
          p_valor_frete?: number
          p_valor_outros?: number
          p_valor_unitario?: number
        }
        Returns: {
          created_at: string
          created_by: string | null
          data_compra: string
          descricao: string
          documento: string | null
          fazenda_id: string
          fornecedor: string | null
          id: string
          insumo_id: string
          observacoes: string | null
          pasto_id: string | null
          projeto_id: string | null
          quantidade: number
          tipo_insumo: string
          unidade: string
          updated_at: string
          valor_desconto: number
          valor_frete: number
          valor_outros: number
          valor_total: number | null
          valor_unitario: number
        }
        SetofOptions: {
          from: '*'
          to: 'gado_compras_insumos'
          isOneToOne: true
          isSetofReturn: false
        }
      }
      gado_registrar_compra_insumo_simples: {
        Args: {
          p_data_compra?: string
          p_descricao?: string
          p_documento?: string
          p_fornecedor?: string
          p_insumo_id: string
          p_observacoes?: string
          p_projeto_id: string
          p_quantidade: number
          p_unidade?: string
          p_valor_desconto?: number
          p_valor_frete?: number
          p_valor_outros?: number
          p_valor_unitario: number
        }
        Returns: string
      }
      gado_registrar_pesagem:
        | {
            Args: {
              p_animal_id: string
              p_data_pesagem?: string
              p_observacao?: string
              p_peso_kg?: number
            }
            Returns: {
              animal_id: string
              created_at: string
              data_pesagem: string
              id: string
              observacao: string | null
              peso_kg: number
              projeto_id: string
              updated_at: string
            }
            SetofOptions: {
              from: '*'
              to: 'gado_pesagens'
              isOneToOne: true
              isSetofReturn: false
            }
          }
        | {
            Args: {
              p_animal_id: string
              p_data_pesagem?: string
              p_observacao?: string
              p_peso_kg: number
              p_projeto_id: string
            }
            Returns: {
              animal_id: string
              created_at: string
              data_pesagem: string
              id: string
              observacao: string | null
              peso_kg: number
              projeto_id: string
              updated_at: string
            }
            SetofOptions: {
              from: '*'
              to: 'gado_pesagens'
              isOneToOne: true
              isSetofReturn: false
            }
          }
      gado_registrar_vacinacao: {
        Args: {
          p_animal_id: string
          p_data_aplicacao?: string
          p_dose_ml?: number
          p_lote_vacina?: string
          p_observacoes?: string
          p_responsavel?: string
          p_vacina_id: string
        }
        Returns: {
          animal_id: string
          created_at: string
          data_aplicacao: string
          dose_ml: number | null
          id: string
          lote_vacina: string | null
          observacoes: string | null
          projeto_id: string
          proxima_dose_data: string | null
          responsavel: string | null
          updated_at: string
          vacina_id: string
        }
        SetofOptions: {
          from: '*'
          to: 'gado_vacinacoes'
          isOneToOne: true
          isSetofReturn: false
        }
      }
      gado_salvar_animal_simples: {
        Args: {
          p_animal_id?: string
          p_brinco?: string
          p_categoria?: string
          p_nome?: string
          p_observacoes?: string
          p_pasto_id?: string
          p_peso_atual_kg?: string
          p_peso_entrada_kg?: string
          p_projeto_id?: string
          p_sexo?: string
          p_valor_compra_informado?: string
          p_valor_frete_compra?: string
          p_valor_outros_custos_compra?: string
        }
        Returns: {
          aptidao: string | null
          brinco: string
          categoria: Database['public']['Enums']['gado_categoria_animal']
          created_at: string
          data_baixa: string | null
          data_entrada: string
          data_nascimento: string | null
          documento_compra: string | null
          fase_pecuaria: string | null
          fornecedor_compra: string | null
          id: string
          idade_compra_meses: number | null
          idade_meses: number | null
          manejo_atual: string | null
          motivo_baixa: string | null
          motivo_status: string | null
          nome: string | null
          observacao_idade_compra: string | null
          observacoes: string | null
          observacoes_compra: string | null
          origem_animal: string | null
          pasto_atual_id: string | null
          pasto_id: string | null
          peso_atual_kg: number | null
          peso_entrada_kg: number
          peso_saida_kg: number | null
          preco_compra_kg_vivo: number
          projeto_id: string
          raca: string | null
          sexo: string | null
          sistema_criacao: string | null
          status: Database['public']['Enums']['gado_status_animal']
          tipo_baixa: string | null
          updated_at: string
          valor_compra: number | null
          valor_compra_informado: number | null
          valor_frete_compra: number | null
          valor_outros_custos_compra: number | null
        }
        SetofOptions: {
          from: '*'
          to: 'gado_animais'
          isOneToOne: true
          isSetofReturn: false
        }
      }
      gado_salvar_membro_equipe: {
        Args: {
          p_ativo: boolean
          p_cargo: string
          p_email: string
          p_fazenda_id: string
          p_id: string
          p_nivel_acesso: string
          p_nome: string
          p_observacoes: string
          p_pode_editar_alimentacao: boolean
          p_pode_editar_animais: boolean
          p_pode_editar_saude: boolean
          p_pode_editar_simulador: boolean
          p_pode_ver_financeiro: boolean
          p_pode_ver_relatorios: boolean
          p_projeto_id: string
          p_telefone: string
        }
        Returns: {
          ativo: boolean
          cargo: string
          created_at: string
          created_by: string | null
          email: string | null
          fazenda_id: string | null
          id: string
          nivel_acesso: string
          nome: string
          observacoes: string | null
          pode_editar_alimentacao: boolean
          pode_editar_animais: boolean
          pode_editar_saude: boolean
          pode_editar_simulador: boolean
          pode_ver_financeiro: boolean
          pode_ver_relatorios: boolean
          projeto_id: string | null
          telefone: string | null
          updated_at: string
          user_id: string | null
        }
        SetofOptions: {
          from: '*'
          to: 'gado_equipe'
          isOneToOne: true
          isSetofReturn: false
        }
      }
      gado_salvar_projeto_confinamento:
        | {
            Args: {
              p_custo_alimentacao_previsto_cabeca?: number
              p_custo_sanitario_previsto_cabeca?: number
              p_data_inicio?: string
              p_data_saida_prevista?: string
              p_fazenda_id?: string
              p_gmd_meta_kg_dia?: number
              p_nome_lote?: string
              p_observacoes?: string
              p_outros_custos_previsto_cabeca?: number
              p_peso_final_meta_kg?: number
              p_peso_inicial_kg?: number
              p_prazo_dias?: number
              p_preco_compra_kg_vivo?: number
              p_preco_venda_arroba?: number
              p_projeto_id?: string
              p_quantidade_cabecas?: number
              p_rendimento_carcaca_percent?: number
              p_sistema?: string
              p_status?: string
            }
            Returns: {
              categoria_principal: Database['public']['Enums']['gado_categoria_animal']
              created_at: string
              custo_alimentacao_previsto_cabeca: number
              custo_sal_nucleo_dia_lote: number | null
              custo_sanitario_previsto_cabeca: number
              custo_volumoso_dia_lote: number | null
              data_inicio: string
              data_saida_prevista: string
              fazenda_id: string | null
              finalidade: string | null
              gmd_meta_kg_dia: number
              id: string
              kg_racao_cabeca_dia: number | null
              localizacao: string | null
              metodo_custo_compra: string | null
              nome_lote: string
              observacoes: string | null
              observacoes_rebanho: string | null
              outros_custos_cabeca: number | null
              outros_custos_previsto_cabeca: number
              peso_final_meta_kg: number | null
              peso_medio_inicial_kg: number
              prazo_dias: number
              preco_compra_kg_vivo: number
              preco_kg_racao: number | null
              preco_venda_arroba: number
              quantidade_prevista: number
              rendimento_carcaca_percent: number
              sistema: Database['public']['Enums']['gado_sistema_producao']
              status: Database['public']['Enums']['gado_status_projeto']
              tipo_operacao: string | null
              updated_at: string
            }
            SetofOptions: {
              from: '*'
              to: 'gado_projetos'
              isOneToOne: true
              isSetofReturn: false
            }
          }
        | {
            Args: {
              p_custo_sal_nucleo_dia_lote: number
              p_custo_sanitario_previsto_cabeca: number
              p_custo_volumoso_dia_lote: number
              p_data_inicio: string
              p_data_saida_prevista: string
              p_gmd_meta_kg_dia: number
              p_kg_racao_cabeca_dia: number
              p_nome_lote: string
              p_observacoes: string
              p_outros_custos_previsto_cabeca: number
              p_peso_final_meta_kg: number
              p_peso_inicial_kg: number
              p_prazo_dias: number
              p_preco_compra_kg_vivo: number
              p_preco_kg_racao: number
              p_preco_venda_arroba: number
              p_projeto_id: string
              p_quantidade_cabecas: number
              p_rendimento_carcaca_percent: number
            }
            Returns: undefined
          }
      gado_try_uuid: { Args: { p_value: string }; Returns: string }
      gado_usuario_acessa_fazenda: {
        Args: { p_fazenda_id: string }
        Returns: boolean
      }
      gado_usuario_acessa_projeto: {
        Args: { p_projeto_id: string }
        Returns: boolean
      }
      gado_usuario_admin_fazenda: {
        Args: { p_fazenda_id: string }
        Returns: boolean
      }
      gado_usuario_administra_projeto: {
        Args: { p_projeto_id: string }
        Returns: boolean
      }
      gado_usuario_pertence_fazenda: {
        Args: { p_fazenda_id: string }
        Returns: boolean
      }
      get_abn_project_id: { Args: never; Returns: string }
      get_current_familia_id: { Args: never; Returns: string }
      get_my_companies: { Args: never; Returns: string[] }
      get_user_project_id: { Args: never; Returns: string }
      has_active_access: {
        Args: {
          p_cnpj_id: string
          p_empresa_id: string
          p_projeto_id: string
          p_unidade_id: string
        }
        Returns: boolean
      }
      import_ofx_transactions: {
        Args: {
          p_account_id: string
          p_app_company_id: string
          p_cnpj_id?: string
          p_file_name: string
          p_finance_empresa_id: string
          p_projeto_id?: string
          p_total_errors: number
          p_total_ignored: number
          p_total_read: number
          p_transactions: Json
          p_unidade_id?: string
        }
        Returns: Json
      }
      importar_ofx_json:
        | {
            Args: {
              p_account_id: string
              p_banco: string
              p_company_id: string
              p_conta: string
              p_created_by?: string
              p_nome_arquivo: string
              p_transacoes: Json
            }
            Returns: Json
          }
        | {
            Args: {
              banco?: string
              conta?: string
              nome_arquivo?: string
              transacoes: Json
            }
            Returns: {
              id_importacao: string
              total_ignoradas: number
              total_importadas: number
              total_recebidas: number
            }[]
          }
      is_admin: { Args: never; Returns: boolean }
      is_admin_user: { Args: never; Returns: boolean }
      is_company_admin: { Args: { p_company_id: string }; Returns: boolean }
      is_company_owner: { Args: { p_company_id: string }; Returns: boolean }
      is_company_user: { Args: { p_company_id: string }; Returns: boolean }
      jarvis_resumo_confinamento: {
        Args: { p_projeto_id: string }
        Returns: Json
      }
      link_or_create_company: {
        Args: {
          p_anexo_simples: string
          p_cep: string
          p_cnae_principal: string
          p_cnaes_secundarios: string
          p_cnpj: string
          p_data_abertura: string
          p_endereco: string
          p_inscricao_estadual: string
          p_inscricao_municipal: string
          p_municipio_apuracao: string
          p_name: string
          p_nome_fantasia: string
          p_observacoes_tributarias: string
          p_razao_social: string
          p_regime_tributario: string
          p_simples_nacional: boolean
          p_status: string
          p_sujeito_icms: boolean
          p_sujeito_iss: boolean
          p_tipo_atividade: string
          p_uf: string
          p_user_id: string
        }
        Returns: Json
      }
      normalizar_texto: { Args: { texto: string }; Returns: string }
      recalcular_saldo_conta_bancaria: {
        Args: { p_conta_bancaria_id: string }
        Returns: number
      }
      register_company_full: {
        Args: {
          p_cidade: string
          p_cnpj: string
          p_cnpj_normalizado: string
          p_email: string
          p_endereco: string
          p_nome_fantasia: string
          p_phone: string
          p_razao_social: string
          p_uf: string
          p_user_id: string
        }
        Returns: Json
      }
      sfe_atualizar_categoria_lancamentos: {
        Args: {
          p_category_id: string
          p_company_id: string
          p_transaction_ids: string[]
        }
        Returns: Json
      }
      sfe_can_access_company: {
        Args: { p_company_id: string }
        Returns: boolean
      }
      sfe_can_edit_company: { Args: { p_company_id: string }; Returns: boolean }
      sfe_can_manage_company: {
        Args: { p_company_id: string }
        Returns: boolean
      }
      sfe_categorias_contas: {
        Args: { p_company_id: string; p_tipo: string }
        Returns: {
          category_scope: string
          default_category_code: string
          dre_group: string
          id: string
          is_active: boolean
          is_system_default: boolean
          is_tax: boolean
          is_tax_reform: boolean
          name: string
          type: string
        }[]
      }
      sfe_categorias_edicao: {
        Args: { p_company_id: string; p_tipo: string }
        Returns: {
          dre_group: string
          id: string
          name: string
          type: string
        }[]
      }
      sfe_classificar_linha_dre: {
        Args: { p_grupo: string; p_tipo: string }
        Returns: string
      }
      sfe_dre_gerencial: {
        Args: {
          p_ano: number
          p_category_id?: string
          p_company_id: string
          p_mes_final?: number
          p_mes_inicial?: number
          p_tipo?: string
        }
        Returns: {
          deducoes_receita: number
          despesas_financeiras: number
          despesas_fixas: number
          despesas_pessoal: number
          despesas_sem_categoria: number
          despesas_variaveis: number
          impostos: number
          investimentos_consorcio: number
          margem_bruta: number
          outras_despesas: number
          quantidade_despesas: number
          quantidade_receitas: number
          quantidade_sem_categoria: number
          receita_classificada: number
          receita_sem_categoria: number
          receita_total: number
          resultado_final: number
          resultado_operacional: number
          servicos_terceiros: number
          valor_sem_categoria: number
        }[]
      }
      sfe_is_trusted_backend: { Args: never; Returns: boolean }
      sfe_listar_contas_periodo: {
        Args: {
          p_account_id?: string
          p_ano?: number
          p_category_id?: string
          p_company_id: string
          p_limit?: number
          p_mes?: number
          p_offset?: number
          p_pesquisa?: string
          p_status?: string
          p_tipo: string
          p_visao?: string
        }
        Returns: {
          account_id: string
          account_name: string
          amount: number
          category_id: string
          category_name: string
          company_id: string
          contact_name: string
          created_at: string
          description: string
          due_date: string
          fitid: string
          id: string
          is_recurring: boolean
          month_year: string
          normalized_description: string
          observations: string
          payment_date: string
          payment_method: string
          project_id2: string
          status: string
          total_count: number
          type: string
        }[]
      }
      sfe_listar_sem_categoria: {
        Args: {
          p_ano?: number
          p_company_id: string
          p_limit?: number
          p_mes?: number
          p_pesquisa?: string
          p_status?: string
          p_tipo?: string
        }
        Returns: {
          account_id: string
          account_name: string
          amount: number
          category_id: string
          category_name: string
          contact_name: string
          created_at: string
          description: string
          due_date: string
          fitid: string
          id: string
          month_year: string
          payment_date: string
          status: string
          type: string
        }[]
      }
      sfe_normalizar_grupo_dre: {
        Args: { p_grupo: string; p_nome_categoria?: string }
        Returns: string
      }
      sfe_periodos_contas_disponiveis: {
        Args: { p_company_id: string; p_tipo: string }
        Returns: {
          ano: number
          mes: number
        }[]
      }
      sfe_periodos_disponiveis: {
        Args: { p_company_id: string }
        Returns: {
          ano: number
          mes: number
        }[]
      }
      sfe_relatorio_categorias: {
        Args: {
          p_ano: number
          p_category_id?: string
          p_company_id: string
          p_mes_final?: number
          p_mes_inicial?: number
          p_tipo?: string
        }
        Returns: {
          category_id: string
          category_name: string
          percentage: number
          qtd: number
          total: number
          type: string
        }[]
      }
      sfe_relatorio_lancamentos:
        | {
            Args: {
              p_ano: number
              p_category_id?: string
              p_company_id: string
              p_mes_final?: number
              p_mes_inicial?: number
              p_tipo?: string
            }
            Returns: {
              categoria: string
              contato: string
              data_efetiva: string
              descricao: string
              status: string
              tipo: string
              valor: number
            }[]
          }
        | {
            Args: {
              p_ano: number
              p_category_id?: string
              p_company_id: string
              p_limit?: number
              p_mes_final?: number
              p_mes_inicial?: number
              p_offset?: number
              p_tipo?: string
            }
            Returns: {
              account_id: string
              account_name: string
              amount: number
              category_id: string
              category_name: string
              conciliado: boolean
              contact_name: string
              description: string
              due_date: string
              id: string
              month_year: string
              origem: string
              payment_date: string
              status: string
              total_count: number
              type: string
            }[]
          }
      sfe_relatorio_mensal: {
        Args: {
          p_ano: number
          p_category_id?: string
          p_company_id: string
          p_mes_final?: number
          p_mes_inicial?: number
          p_tipo?: string
        }
        Returns: {
          despesas: number
          mes_ano: string
          qtd: number
          receitas: number
          resultado: number
        }[]
      }
      sfe_relatorio_movimentos_base: {
        Args: { p_company_id: string }
        Returns: {
          account_id: string
          account_name: string
          amount: number
          category_id: string
          category_name: string
          company_id: string
          conciliado: boolean
          contact_name: string
          created_at: string
          description: string
          due_date: string
          fitid: string
          id: string
          month_year: string
          origem: string
          payment_date: string
          project_id2: string
          reconciliation_id: string
          status: string
          type: string
        }[]
      }
      sfe_relatorio_resumo: {
        Args: {
          p_ano: number
          p_category_id?: string
          p_company_id: string
          p_mes_final?: number
          p_mes_inicial?: number
          p_tipo?: string
        }
        Returns: {
          maior_despesa: number
          resultado: number
          ticket_medio_receitas: number
          total_despesas: number
          total_lancamentos: number
          total_receitas: number
        }[]
      }
      sfe_require_edit_company: {
        Args: { p_company_id: string }
        Returns: undefined
      }
      sfe_require_manage_company: {
        Args: { p_company_id: string }
        Returns: undefined
      }
      sfe_resumo_contas_periodo: {
        Args: {
          p_account_id?: string
          p_ano?: number
          p_category_id?: string
          p_company_id: string
          p_mes?: number
          p_status?: string
          p_tipo: string
          p_visao?: string
        }
        Returns: {
          total_cancelados: number
          total_conciliados: number
          total_pagos: number
          total_pendentes: number
          total_registros: number
          valor_cancelados: number
          valor_conciliados: number
          valor_pagos: number
          valor_pendentes: number
          valor_total: number
        }[]
      }
      sfe_resumo_sem_categoria: {
        Args: { p_ano?: number; p_company_id: string; p_mes?: number }
        Returns: {
          total_geral: number
          total_periodo: number
        }[]
      }
    }
    Enums: {
      gado_categoria_animal:
        | 'novilha'
        | 'vaca'
        | 'boi'
        | 'garrote'
        | 'bezerra'
        | 'bezerro'
        | 'touro'
      gado_sistema_producao: 'confinamento' | 'semiconfinamento' | 'pasto'
      gado_status_animal: 'ativo' | 'em_observacao' | 'vendido' | 'descartado' | 'morto'
      gado_status_projeto: 'planejamento' | 'em_andamento' | 'finalizado' | 'cancelado'
      gado_tipo_custo:
        | 'compra_animal'
        | 'alimentacao'
        | 'sanidade'
        | 'frete'
        | 'comissao'
        | 'mao_obra'
        | 'estrutura'
        | 'outros'
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
    Enums: {
      gado_categoria_animal: ['novilha', 'vaca', 'boi', 'garrote', 'bezerra', 'bezerro', 'touro'],
      gado_sistema_producao: ['confinamento', 'semiconfinamento', 'pasto'],
      gado_status_animal: ['ativo', 'em_observacao', 'vendido', 'descartado', 'morto'],
      gado_status_projeto: ['planejamento', 'em_andamento', 'finalizado', 'cancelado'],
      gado_tipo_custo: [
        'compra_animal',
        'alimentacao',
        'sanidade',
        'frete',
        'comissao',
        'mao_obra',
        'estrutura',
        'outros',
      ],
    },
  },
} as const
