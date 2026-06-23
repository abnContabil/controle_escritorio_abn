import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/use-auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { Building2, Eye, EyeOff, Lock } from 'lucide-react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { signIn, user } = useAuth()
  const { toast } = useToast()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/', { replace: true })
    }
  }, [user, navigate])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast({ title: 'Atenção', description: 'Informe seu e-mail.', variant: 'destructive' })
      return
    }

    if (!password) {
      toast({ title: 'Atenção', description: 'Informe sua senha.', variant: 'destructive' })
      return
    }

    setIsLoading(true)
    const { error } = await signIn(email, password)

    if (error) {
      console.error('Erro de autenticação técnico:', error.message)
      toast({
        title: 'Falha no login',
        description: 'E-mail ou senha inválidos.',
        variant: 'destructive',
      })
    } else {
      navigate('/', { replace: true })
    }
    setIsLoading(false)
  }

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault()
    toast({
      title: 'Recuperação de senha',
      description: 'Por favor, contate o administrador do sistema para redefinir sua senha.',
    })
  }

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Coluna Esquerda Institucional - Oculta em mobile */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-900 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-12 flex-col justify-between text-white relative overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-500 blur-[120px]" />
          <div className="absolute bottom-[10%] -right-[10%] w-[60%] h-[60%] rounded-full bg-blue-600 blur-[130px]" />
        </div>

        <div className="relative z-10 flex items-center gap-3">
          <div className="bg-white/10 p-2.5 rounded-lg backdrop-blur-sm border border-white/20">
            <Building2 className="w-8 h-8 text-blue-400" />
          </div>
          <span className="text-2xl font-bold tracking-tight">ABN Contábil</span>
        </div>

        <div className="relative z-10 max-w-lg mt-auto mb-24">
          <h1 className="text-4xl xl:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Controle Inteligente do <span className="text-blue-400">Escritório Contábil</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Gestão de empresas, obrigações, XMLs e rotinas contábeis em um só lugar.
          </p>
        </div>

        <div className="relative z-10 text-sm text-slate-400">
          &copy; {new Date().getFullYear()} ABN Contábil. Todos os direitos reservados.
        </div>
      </div>

      {/* Coluna Direita - Formulário de Login */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-md">
          {/* Marca para mobile (visível apenas em telas menores) */}
          <div className="lg:hidden flex flex-col items-center justify-center mb-8 gap-3">
            <div className="bg-slate-900 p-3 rounded-xl shadow-lg">
              <Building2 className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">ABN Contábil</h1>
          </div>

          <Card className="w-full shadow-xl shadow-slate-200/50 border-slate-200/60 rounded-2xl">
            <CardHeader className="space-y-2 pb-6 pt-8 px-6 sm:px-8 text-center">
              <CardTitle className="text-2xl font-bold text-slate-900">Entrar no sistema</CardTitle>
              <CardDescription className="text-base text-slate-500">
                Acesse sua área de gestão contábil
              </CardDescription>
            </CardHeader>
            <CardContent className="px-6 sm:px-8 pb-8">
              <form onSubmit={handleLogin} className="space-y-5">
                <div className="space-y-2 text-left">
                  <Label htmlFor="email" className="text-slate-700 font-medium">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu.email@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-slate-700 font-medium">
                      Senha
                    </Label>
                    <a
                      href="#"
                      onClick={handleForgotPassword}
                      className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                    >
                      Esqueci minha senha
                    </a>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-12 bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-500 transition-colors pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1"
                      aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 text-base font-medium mt-4 bg-slate-900 hover:bg-slate-800 text-white transition-all shadow-md hover:shadow-lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <Lock className="w-4 h-4 animate-pulse" />
                      Entrando...
                    </span>
                  ) : (
                    'Entrar'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
