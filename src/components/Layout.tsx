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
        <main className="flex-1 p-6 lg:p-8 bg-slate-50/50 animate-fade-in">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
