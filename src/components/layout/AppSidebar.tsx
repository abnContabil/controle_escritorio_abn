import { Link, useLocation } from 'react-router-dom'
import {
  Building2,
  LayoutDashboard,
  FileText,
  Calculator,
  Files,
  Settings,
  Landmark,
  Users,
} from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

const navItems = [
  { title: 'Dashboard', url: '/', icon: LayoutDashboard },
  { title: 'Empresas', url: '/empresas', icon: Building2 },
  { title: 'Obrigações', url: '/obrigacoes', icon: FileText },
  { title: 'Apuração', url: '/apuracao', icon: Calculator },
  { title: 'XML Hub', url: '/xml', icon: Files },
  { title: 'Equipe e Usuários', url: '/equipe', icon: Users },
]

export function AppSidebar() {
  const location = useLocation()

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader className="flex h-16 items-center justify-center border-b border-sidebar-border px-4 py-0">
        <div className="flex items-center gap-2 font-bold text-lg w-full overflow-hidden text-sidebar-primary-foreground">
          <Landmark className="h-6 w-6 shrink-0 text-sidebar-primary" />
          <span className="truncate group-data-[collapsible=icon]:hidden">Contábil.io</span>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-2 pt-4">
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={location.pathname === item.url}
                tooltip={item.title}
              >
                <Link to={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Configurações">
              <Link to="#">
                <Settings />
                <span>Configurações</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
