import { Outlet } from 'react-router-dom'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { AppSidebar } from './layout/AppSidebar'
import { AppHeader } from './layout/AppHeader'

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <main className="flex-1 flex flex-col p-6 lg:p-8 bg-slate-50/50 animate-fade-in min-h-[calc(100vh-4rem)]">
          <div className="mx-auto max-w-7xl w-full flex-1">
            <Outlet />
          </div>
          <footer className="mt-12 text-center text-sm font-medium text-slate-400 py-4 border-t border-slate-200/60">
            Desenvolvido por Abn Contábil Ltda
          </footer>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
