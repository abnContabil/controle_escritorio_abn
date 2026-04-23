import { Bell, Search, User } from 'lucide-react'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

export function AppHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-4 border-b bg-background px-6 shadow-sm">
      <SidebarTrigger className="-ml-2" />

      <div className="flex flex-1 items-center gap-4 md:gap-6">
        <form className="flex-1 md:flex-initial md:w-96" onSubmit={(e) => e.preventDefault()}>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar empresas, CNPJ ou tarefas..."
              className="pl-9 bg-muted/50 border-none focus-visible:ring-1"
            />
          </div>
        </form>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-destructive text-[10px]">
            3
          </Badge>
          <span className="sr-only">Notificações</span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src="https://img.usecurling.com/ppl/thumbnail?gender=male&seed=1"
                  alt="Usuário"
                />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">André Silva</p>
                <p className="text-xs leading-none text-muted-foreground">
                  andre.silva@contabil.io
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Perfil</DropdownMenuItem>
            <DropdownMenuItem>Faturamento</DropdownMenuItem>
            <DropdownMenuItem>Configurações</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive focus:text-destructive">
              Sair da conta
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
