import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Layout from './components/Layout'
import Index from './pages/Index'
import Empresas from './pages/Empresas'
import Obrigacoes from './pages/Obrigacoes'
import Apuracao from './pages/Apuracao'
import XmlHub from './pages/XmlHub'
import NotFound from './pages/NotFound'

const App = () => (
  <BrowserRouter future={{ v7_startTransition: false, v7_relativeSplatPath: false }}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/obrigacoes" element={<Obrigacoes />} />
          <Route path="/apuracao" element={<Apuracao />} />
          <Route path="/xml" element={<XmlHub />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </BrowserRouter>
)

export default App
