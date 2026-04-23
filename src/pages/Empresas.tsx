import { useState } from 'react'
import { Plus, Search, MoreHorizontal, FileEdit, Trash2 } from 'lucide-react'
import { mockEmpresas } from '@/lib/mock-data'
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
import { useToast } from '@/hooks/use-toast'

export default function Empresas() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedEmpresa, setSelectedEmpresa] = useState<any>(null)
  const { toast } = useToast()

  const filteredEmpresas = mockEmpresas.filter(
    (emp) =>
      emp.razaoSocial.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.cnpj.includes(searchTerm),
  )

  const getRegimeColor = (regime: string) => {
    switch (regime) {
      case 'Simples Nacional':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-200'
      case 'Lucro Presumido':
        return 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200'
      case 'Lucro Real':
        return 'bg-purple-100 text-purple-800 hover:bg-purple-200'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const handleEdit = (empresa: any) => {
    setSelectedEmpresa(empresa)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Gestão de Empresas</h1>
          <p className="text-muted-foreground mt-1">
            Gerencie a carteira de clientes do escritório.
          </p>
        </div>
        <Button
          onClick={() =>
            toast({ title: 'Nova Empresa', description: 'Abertura de modal em desenvolvimento.' })
          }
        >
          <Plus className="mr-2 h-4 w-4" /> Cadastrar Empresa
        </Button>
      </div>

      <Card className="shadow-subtle">
        <CardContent className="p-0">
          <div className="p-4 border-b flex items-center justify-between">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por razão social ou CNPJ..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Razão Social</TableHead>
                <TableHead>CNPJ</TableHead>
                <TableHead>Regime Tributário</TableHead>
                <TableHead>UF</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEmpresas.map((empresa) => (
                <TableRow key={empresa.id}>
                  <TableCell className="font-medium">{empresa.razaoSocial}</TableCell>
                  <TableCell>{empresa.cnpj}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={`border-transparent ${getRegimeColor(empresa.regime)}`}
                    >
                      {empresa.regime}
                    </Badge>
                  </TableCell>
                  <TableCell>{empresa.uf}</TableCell>
                  <TableCell>
                    <Badge
                      variant={empresa.status === 'Ativo' ? 'default' : 'outline'}
                      className={
                        empresa.status === 'Ativo'
                          ? 'bg-secondary hover:bg-secondary/80 text-white'
                          : ''
                      }
                    >
                      {empresa.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Abrir menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => handleEdit(empresa)}>
                          <FileEdit className="mr-2 h-4 w-4" /> Visualizar/Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" /> Inativar
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
              {filteredEmpresas.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                    Nenhuma empresa encontrada.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Sheet open={!!selectedEmpresa} onOpenChange={() => setSelectedEmpresa(null)}>
        <SheetContent className="sm:max-w-md">
          <SheetHeader>
            <SheetTitle>Detalhes da Empresa</SheetTitle>
            <SheetDescription>Configurações e obrigações vinculadas ao cliente.</SheetDescription>
          </SheetHeader>
          {selectedEmpresa && (
            <div className="mt-6 space-y-6">
              <div className="space-y-1">
                <h4 className="text-sm font-medium text-muted-foreground">Razão Social</h4>
                <p className="text-base font-medium">{selectedEmpresa.razaoSocial}</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-medium text-muted-foreground">CNPJ</h4>
                <p className="text-base">{selectedEmpresa.cnpj}</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-medium text-muted-foreground">Regime Tributário</h4>
                <Badge variant="outline">{selectedEmpresa.regime}</Badge>
              </div>
              <div className="pt-4 border-t">
                <Button className="w-full">Editar Informações</Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  )
}
