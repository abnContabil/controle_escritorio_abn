import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/use-auth'
import { useAbnCompanies } from '@/hooks/use-abn-companies'
import { contabilIoDb } from '@/lib/supabase/contabil-io-client'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Users as UsersIcon, ShieldAlert, Plus, Edit } from 'lucide-react'
import { AddUserDialog } from '@/components/equipe/AddUserDialog'
import { EditUserDialog } from '@/components/equipe/EditUserDialog'

type CompanyUser = {
  id: string
  company_id: string
  user_id: string
  role: string
  status: string
  name: string
  email: string
}

export default function Equipe() {
  const { user } = useAuth()
  const { companies, loading: companiesLoading } = useAbnCompanies()
  const [selectedCompanyId, setSelectedCompanyId] = useState<string>('')
  const [users, setUsers] = useState<CompanyUser[]>([])
  const [myRoles, setMyRoles] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)
  const [isAddOpen, setIsAddOpen] = useState(false)
  const [editUser, setEditUser] = useState<CompanyUser | null>(null)

  useEffect(() => {
    const checkRoles = async () => {
      if (!user) return
      const { data, error } = await contabilIoDb
        .from('abn_company_users')
        .select('company_id, role')
        .eq('user_id', user.id)

      if (error) {
        console.error('Erro ao verificar permissões:', error)
      }

      const rolesMap: Record<string, string> = {}
      data?.forEach((r) => {
        rolesMap[r.company_id] = r.role
      })
      setMyRoles(rolesMap)
    }
    checkRoles()
  }, [user])

  const adminCompanies = companies.filter((c) => {
    const role = myRoles[c.id]
    return c.user_id === user?.id || role === 'proprietario' || role === 'admin'
  })

  useEffect(() => {
    if (adminCompanies.length > 0 && !selectedCompanyId) {
      setSelectedCompanyId(adminCompanies[0].id)
    } else if (companies.length > 0 && !selectedCompanyId && adminCompanies.length === 0) {
      setSelectedCompanyId(companies[0].id)
    }
  }, [companies, adminCompanies, selectedCompanyId])

  useEffect(() => {
    if (selectedCompanyId && user) {
      const company = companies.find((c) => c.id === selectedCompanyId)
      const role = myRoles[selectedCompanyId]
      const isOwner = company?.user_id === user.id
      const hasAdminRole = role === 'proprietario' || role === 'admin'
      const isAdm = isOwner || hasAdminRole
      setIsAdmin(isAdm)

      if (isAdm) {
        fetchUsers(selectedCompanyId)
      } else {
        setLoading(false)
      }
    }
  }, [selectedCompanyId, myRoles, companies, user])

  const fetchUsers = async (companyId: string) => {
    setLoading(true)
    const { data: companyUsers, error: usersError } = await contabilIoDb
      .from('abn_company_users')
      .select('*')
      .eq('company_id', companyId)
      .order('created_at', { ascending: false })

    if (usersError) {
      console.error('Erro ao buscar usuários da empresa:', usersError)
      setUsers([])
      setLoading(false)
      return
    }

    if (companyUsers && companyUsers.length > 0) {
      const userIds = companyUsers.map((u) => u.user_id)
      const { data: profiles, error: profilesError } = await contabilIoDb
        .from('abn_profiles')
        .select('id, name, email')
        .in('id', userIds)

      if (profilesError) {
        console.error('Erro ao buscar perfis:', profilesError)
      }

      const merged = companyUsers.map((cu) => {
        const profile = profiles?.find((p) => p.id === cu.user_id)
        return {
          ...cu,
          name: profile?.name || 'Sem nome',
          email: profile?.email || 'Sem e-mail',
        }
      })
      setUsers(merged)
    } else {
      setUsers([])
    }
    setLoading(false)
  }

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'proprietario':
        return 'bg-purple-100 text-purple-800'
      case 'admin':
        return 'bg-blue-100 text-blue-800'
      case 'contador':
        return 'bg-green-100 text-green-800'
      case 'auxiliar':
        return 'bg-yellow-100 text-yellow-800'
      case 'visualizador':
        return 'bg-slate-100 text-slate-600'
      default:
        return 'bg-slate-100 text-slate-800'
    }
  }

  if (companiesLoading) {
    return (
      <div className="p-8 flex items-center justify-center min-h-[50vh]">
        <div className="text-slate-500 font-medium animate-pulse">Carregando dados...</div>
      </div>
    )
  }

  const selectedCompany = companies.find((c) => c.id === selectedCompanyId)

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
            <UsersIcon className="h-8 w-8 text-blue-700" />
            Equipe e Usuários
          </h1>
          <p className="text-slate-500 mt-1">Gerencie os acessos e permissões da sua equipe.</p>
        </div>

        {companies.length > 0 && (
          <div className="w-full sm:w-72">
            <Select value={selectedCompanyId} onValueChange={setSelectedCompanyId}>
              <SelectTrigger className="bg-white border-slate-200 shadow-sm">
                <SelectValue placeholder="Selecione uma empresa" />
              </SelectTrigger>
              <SelectContent>
                {companies.map((c) => (
                  <SelectItem key={c.id} value={c.id}>
                    {c.razao_social}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      {!isAdmin && selectedCompanyId && !loading ? (
        <Card className="border-red-100 bg-red-50/50 mt-8">
          <CardContent className="flex flex-col items-center justify-center p-12 text-center">
            <ShieldAlert className="h-16 w-16 text-red-500 mb-4" />
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Acesso Negado</h2>
            <p className="text-slate-600 max-w-md">
              Você não tem permissão administrativa para visualizar ou gerenciar a equipe da empresa{' '}
              <strong>{selectedCompany?.razao_social}</strong>.
            </p>
          </CardContent>
        </Card>
      ) : (
        <Card className="border-slate-200 shadow-sm bg-white mt-6">
          <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <CardTitle className="text-lg text-slate-800">Membros da Equipe</CardTitle>
              <CardDescription>
                Usuários com acesso à empresa {selectedCompany?.razao_social}
              </CardDescription>
            </div>
            <Button
              onClick={() => setIsAddOpen(true)}
              className="bg-blue-700 hover:bg-blue-800 text-white shrink-0 transition-all duration-300"
            >
              <Plus className="mr-2 h-4 w-4" /> Adicionar usuário
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            {loading ? (
              <div className="p-12 text-center text-slate-500">Carregando equipe...</div>
            ) : users.length === 0 ? (
              <div className="p-12 text-center text-slate-500">
                Nenhum usuário encontrado para esta empresa.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-slate-50">
                    <TableRow>
                      <TableHead>Email</TableHead>
                      <TableHead>Empresa</TableHead>
                      <TableHead>Perfil</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((u) => (
                      <TableRow key={u.id} className="group hover:bg-slate-50/50 transition-colors">
                        <TableCell>
                          <div className="font-medium text-slate-900">{u.email}</div>
                        </TableCell>
                        <TableCell className="text-slate-600">
                          {selectedCompany?.razao_social}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="secondary"
                            className={`capitalize ${getRoleBadgeColor(u.role)}`}
                          >
                            {u.role}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={u.status === 'ativo' ? 'default' : 'secondary'}
                            className={
                              u.status === 'ativo' ? 'bg-emerald-500 hover:bg-emerald-600' : ''
                            }
                          >
                            {u.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setEditUser(u)}
                            className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity"
                            disabled={u.user_id === user?.id}
                          >
                            <Edit className="h-4 w-4 mr-1" /> Editar
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      <AddUserDialog
        open={isAddOpen}
        onOpenChange={setIsAddOpen}
        companies={adminCompanies}
        onSuccess={(addedCompanyId) => {
          if (addedCompanyId === selectedCompanyId) {
            fetchUsers(selectedCompanyId)
          } else {
            setSelectedCompanyId(addedCompanyId)
          }
        }}
      />

      {editUser && (
        <EditUserDialog
          user={editUser}
          onOpenChange={(open) => !open && setEditUser(null)}
          onSuccess={() => fetchUsers(selectedCompanyId)}
        />
      )}
    </div>
  )
}
