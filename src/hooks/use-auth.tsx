import {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
  useCallback,
  ReactNode,
} from 'react'
import { User, Session } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase/client'

interface AuthContextType {
  user: User | null
  session: Session | null
  signUp: (email: string, password: string) => Promise<{ error: any }>
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signOut: () => Promise<{ error: any }>
  loading: boolean
  profileInitError: string | null
  retryProfileInit: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider')
  return context
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })
    return () => subscription.unsubscribe()
  }, [])

  const profileEnsuredRef = useRef(false)
  const [profileInitError, setProfileInitError] = useState<string | null>(null)

  useEffect(() => {
    if (user && !profileEnsuredRef.current) {
      profileEnsuredRef.current = true
      setProfileInitError(null)
      supabase.rpc('abn_ensure_profile').then(({ error }) => {
        if (error) {
          console.error('Erro ao inicializar perfil (abn_ensure_profile):', error)
          setProfileInitError(error.message || 'Não foi possível inicializar seu perfil.')
        }
      })
    } else if (!user) {
      profileEnsuredRef.current = false
      setProfileInitError(null)
    }
  }, [user])

  const retryProfileInit = useCallback(() => {
    setProfileInitError(null)
    supabase.rpc('abn_ensure_profile').then(({ error }) => {
      if (error) {
        console.error('Erro ao inicializar perfil (abn_ensure_profile):', error)
        setProfileInitError(error.message || 'Não foi possível inicializar seu perfil.')
      }
    })
  }, [])

  const signUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${window.location.origin}/` },
    })
    return { error }
  }
  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    return { error }
  }
  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    return { error }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        signUp,
        signIn,
        signOut,
        loading,
        profileInitError,
        retryProfileInit,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
