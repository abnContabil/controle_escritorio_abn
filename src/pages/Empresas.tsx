import { useState } from 'react'
import { Plus, Search, MoreHorizontal, FileEdit, Trash2, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { useAbnCompanies, AbnCompany } from '@/hooks/use-abn-companies'
import { EmpresaForm } from '@/components/empresas/EmpresaForm'

export default function Empresas() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedEmpresa, setSelectedEmpresa] = useState<AbnCompany | null>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const { companies, loading, saveCompany, deleteCompany } = useAbnCompanies()

  const filteredEmpresas = companies.filter(
    (emp) =>
      emp.razao_social.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.cnpj.includes(searchTerm),
  )

  const getRegimeColor = (regime: string) => {
    switch (regime) {
      case 'Simples Nacional':
        return 'bg-blue-100 text-blue-800'
      case 'Lucro Presumido':
        return 'bg-indigo-100 text-indigo-800'
      case 'Lucro Real':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const handleEdit = (empresa: AbnCompany) => {
    setSelectedEmpresa(empresa)
    setIsFormOpen(true)
  }

  const handleCreate = () => {
    setSelectedEmpresa(null)
    setIsFormOpen(true)
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Gestão de Empresas</h1>
          <p className="text-muted-foreground mt-1">
            Gerencie a carteira de clientes do escritório com todos os dados.
          </p>
        </div>
        <Button onClick={handleCreate} className="shadow-sm">
          <Plus className="mr-2 h-4 w-4" /> Cadastrar Empresa
        </Button>
      </div>

      <Card className="shadow-subtle border-none">
        <CardContent className="p-0">
          <div className="p-5 border-b flex items-center justify-between bg-white rounded-t-xl">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Buscar por razão social ou CNPJ..."
                className="pl-9 h-10 bg-slate-50/50 border-slate-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="overflow-x-auto bg-white rounded-b-xl">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50/50 hover:bg-slate-50/50">
                  <TableHead className="font-semibold text-slate-600">Razão Social</TableHead>
                  <TableHead className="font-semibold text-slate-600">CNPJ</TableHead>
                  <TableHead className="font-semibold text-slate-600">Regime Tributário</TableHead>
                  <TableHead className="font-semibold text-slate-600">Contato</TableHead>
                  <TableHead className="font-semibold text-slate-600 text-center">UF</TableHead>
                  <TableHead className="font-semibold text-slate-600">Status</TableHead>
                  <TableHead className="text-right font-semibold text-slate-600">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-10 text-muted-foreground">
                      Carregando carteira de clientes...
                    </TableCell>
                  </TableRow>
                ) : filteredEmpresas.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-10 text-muted-foreground">
                      Nenhuma empresa encontrada com os termos informados.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredEmpresas.map((empresa) => (
                    <TableRow key={empresa.id} className="hover:bg-slate-50/50 transition-colors">
                      <TableCell className="font-medium">
                        <div className="flex items-center space-x-3">
                          <div className="bg-primary/10 p-2 rounded-md">
                            <Building2 className="h-4 w-4 text-primary" />
                          </div>
                          <span className="text-slate-800">{empresa.razao_social}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-slate-600">{empresa.cnpj}</TableCell>
                      <TableCell>
                        <Badge
                          variant="secondary"
                          className={`border-transparent font-medium ${getRegimeColor(empresa.regime_tributario)}`}
                        >
                          {empresa.regime_tributario}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col text-sm text-slate-600 gap-0.5">
                          {empresa.email && (
                            <span className="truncate max-w-[150px]">{empresa.email}</span>
                          )}
                          {empresa.whatsapp && (
                            <span className="text-slate-500">{empresa.whatsapp}</span>
                          )}
                          {!empresa.email && !empresa.whatsapp && (
                            <span className="text-slate-400 italic">Sem contato</span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-center font-medium text-slate-600">
                        {empresa.uf}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={`font-medium border-0 ${empresa.status === 'Ativo' ? 'bg-green-100 text-green-700' : empresa.status === 'Pendente' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-700'}`}
                        >
                          {empresa.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              className="h-8 w-8 p-0 text-slate-400 hover:text-slate-600"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-40">
                            <DropdownMenuLabel className="text-xs text-muted-foreground">
                              Ações da Empresa
                            </DropdownMenuLabel>
                            <DropdownMenuItem
                              onClick={() => handleEdit(empresa)}
                              className="cursor-pointer"
                            >
                              <FileEdit className="mr-2 h-4 w-4" /> Editar
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="text-destructive focus:text-destructive cursor-pointer"
                              onClick={() => {
                                if (
                                  window.confirm(
                                    'Tem certeza que deseja inativar/excluir esta empresa?',
                                  )
                                )
                                  deleteCompany(empresa.id)
                              }}
                            >
                              <Trash2 className="mr-2 h-4 w-4" /> Excluir
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Sheet open={isFormOpen} onOpenChange={setIsFormOpen}>
        <SheetContent className="sm:max-w-md overflow-y-auto border-l-0 shadow-2xl">
          <SheetHeader className="pb-2">
            <SheetTitle className="text-2xl">
              {selectedEmpresa ? 'Editar Empresa' : 'Nova Empresa'}
            </SheetTitle>
            <SheetDescription>
              Preencha os dados cadastrais e de contato do cliente para manter a base atualizada.
            </SheetDescription>
          </SheetHeader>
          <EmpresaForm
            initialData={selectedEmpresa}
            onSave={saveCompany}
            onCancel={() => setIsFormOpen(false)}
          />
        </SheetContent>
      </Sheet>
    </div>
  )
}
