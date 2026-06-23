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
      abn_company_users: {
        Row: {
          company_id: string
          created_at: string
          created_by: string | null
          id: string
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
        ]
      }
      abn_cost_centers: {
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
            foreignKeyName: 'abn_cost_centers_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'abn_companies'
            referencedColumns: ['id']
          },
        ]
      }
      abn_financial_accounts: {
        Row: {
          balance: number | null
          company_id: string
          created_at: string
          id: string
          name: string
          type: string
        }
        Insert: {
          balance?: number | null
          company_id: string
          created_at?: string
          id?: string
          name: string
          type: string
        }
        Update: {
          balance?: number | null
          company_id?: string
          created_at?: string
          id?: string
          name?: string
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: 'abn_financial_accounts_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'abn_companies'
            referencedColumns: ['id']
          },
        ]
      }
      abn_financial_categories: {
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
            foreignKeyName: 'abn_financial_categories_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'abn_companies'
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
          cost_center_id: string | null
          created_at: string
          description: string
          document_id: string | null
          due_date: string
          fitid: string | null
          hash_duplicidade: string | null
          id: string
          is_recurring: boolean | null
          month_year: string | null
          normalized_description: string | null
          payment_date: string | null
          payment_method: string | null
          project_id: string | null
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
          document_id?: string | null
          due_date: string
          fitid?: string | null
          hash_duplicidade?: string | null
          id?: string
          is_recurring?: boolean | null
          month_year?: string | null
          normalized_description?: string | null
          payment_date?: string | null
          payment_method?: string | null
          project_id?: string | null
          status: string
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
          document_id?: string | null
          due_date?: string
          fitid?: string | null
          hash_duplicidade?: string | null
          id?: string
          is_recurring?: boolean | null
          month_year?: string | null
          normalized_description?: string | null
          payment_date?: string | null
          payment_method?: string | null
          project_id?: string | null
          status?: string
          type?: string
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
        ]
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
          logo_url: string | null
          name: string | null
          permissions: Json | null
          project_id: string | null
          role: string | null
          theme_color: string | null
          user_type: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id: string
          logo_url?: string | null
          name?: string | null
          permissions?: Json | null
          project_id?: string | null
          role?: string | null
          theme_color?: string | null
          user_type?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          logo_url?: string | null
          name?: string | null
          permissions?: Json | null
          project_id?: string | null
          role?: string | null
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
        ]
      }
      abn_xml_control: {
        Row: {
          company_id: string
          created_at: string
          id: string
          month_year: string
          project_id: string | null
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
          project_id?: string | null
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
          project_id?: string | null
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
          cor: string | null
          created_at: string
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
          cor?: string | null
          created_at?: string
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
          cor?: string | null
          created_at?: string
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
          conta_bancaria_id: string | null
          created_at: string
          data_importacao: string
          familia_id: string | null
          id: string
          nome_arquivo: string
          status: string | null
          updated_at: string
        }
        Insert: {
          conta_bancaria_id?: string | null
          created_at?: string
          data_importacao?: string
          familia_id?: string | null
          id?: string
          nome_arquivo: string
          status?: string | null
          updated_at?: string
        }
        Update: {
          conta_bancaria_id?: string | null
          created_at?: string
          data_importacao?: string
          familia_id?: string | null
          id?: string
          nome_arquivo?: string
          status?: string | null
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
          {
            foreignKeyName: 'invitations_created_by_fkey'
            columns: ['created_by']
            isOneToOne: false
            referencedRelation: 'profiles'
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
          category: string
          category_id: string | null
          cnpj_empresa: string | null
          company_id: string | null
          created_at: string
          date: string
          description: string
          document_type: string | null
          empresa_id: string | null
          fitid: string | null
          id: string
          is_fixed: boolean | null
          payment_method: string | null
          project_id: string
          quantity: number | null
          revenue_type: string | null
          treatment_type: string | null
          type: string
          unit_price: number | null
          user_id: string
          value: number
        }
        Insert: {
          category: string
          category_id?: string | null
          cnpj_empresa?: string | null
          company_id?: string | null
          created_at?: string
          date: string
          description: string
          document_type?: string | null
          empresa_id?: string | null
          fitid?: string | null
          id?: string
          is_fixed?: boolean | null
          payment_method?: string | null
          project_id?: string
          quantity?: number | null
          revenue_type?: string | null
          treatment_type?: string | null
          type: string
          unit_price?: number | null
          user_id: string
          value: number
        }
        Update: {
          category?: string
          category_id?: string | null
          cnpj_empresa?: string | null
          company_id?: string | null
          created_at?: string
          date?: string
          description?: string
          document_type?: string | null
          empresa_id?: string | null
          fitid?: string | null
          id?: string
          is_fixed?: boolean | null
          payment_method?: string | null
          project_id?: string
          quantity?: number | null
          revenue_type?: string | null
          treatment_type?: string | null
          type?: string
          unit_price?: number | null
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
      [_ in never]: never
    }
    Functions: {
      abn_add_company_user: {
        Args: { p_company_id: string; p_email: string; p_role?: string }
        Returns: Json
      }
      abn_can_access_company: {
        Args: { p_company_id: string }
        Returns: boolean
      }
      abn_can_manage_company: {
        Args: { p_company_id: string }
        Returns: boolean
      }
      abn_can_manage_team: { Args: { p_company_id: string }; Returns: boolean }
      abn_is_office_admin: { Args: never; Returns: boolean }
      abn_update_company_user: {
        Args: {
          p_company_id: string
          p_role?: string
          p_status?: string
          p_user_id: string
        }
        Returns: Json
      }
      belongs_to_project: { Args: { p_projeto_id: string }; Returns: boolean }
      check_user_company_access: {
        Args: { p_company_id: string }
        Returns: boolean
      }
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
      is_admin: { Args: never; Returns: boolean }
      is_admin_user: { Args: never; Returns: boolean }
      is_company_admin: { Args: { p_company_id: string }; Returns: boolean }
      is_company_owner: { Args: { p_company_id: string }; Returns: boolean }
      is_company_user: { Args: { p_company_id: string }; Returns: boolean }
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
