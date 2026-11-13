// Cartões de indicadores superiores — números calculados em
// use-obligations-view.ts a partir dos dados reais do Supabase.
import { AlertCircle, CalendarClock, CheckCircle2, Clock, ListChecks } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import type { ObligationsView } from '@/hooks/use-obligations-view'

export interface IndicatorCardsProps {
  view: ObligationsView
  loading: boolean
}

const CARD_BASE = 'rounded-lg border border-[#E1E7EF] bg-white p-4 flex items-start gap-3 shadow-sm'

function IndicatorCard({
  icon,
  label,
  value,
  accent,
}: {
  icon: React.ReactNode
  label: string
  value: number | string
  accent: string
}) {
  return (
    <div className={CARD_BASE}>
      <div className={cn('rounded-md p-2 shrink-0', accent)}>{icon}</div>
      <div className="min-w-0">
        <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
          {label}
        </p>
        {typeof value === 'number' ? (
          <p className="text-2xl font-bold text-[#101D2D] leading-tight">{value}</p>
        ) : (
          <Skeleton className="h-7 w-14 mt-1" />
        )}
      </div>
    </div>
  )
}

export function IndicatorCards({ view, loading }: IndicatorCardsProps) {
  const { indicators } = view
  return (
    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
      <IndicatorCard
        icon={<CheckCircle2 className="h-4 w-4 text-white" />}
        label="Concluídas no mês"
        value={loading ? '…' : indicators.concluidasNoMes}
        accent="bg-[#087F8C]"
      />
      <IndicatorCard
        icon={<Clock className="h-4 w-4 text-white" />}
        label="Aguardando cliente"
        value={loading ? '…' : indicators.aguardandoCliente}
        accent="bg-[#101D2D]"
      />
      <IndicatorCard
        icon={<CalendarClock className="h-4 w-4 text-white" />}
        label="Vencem nos próximos 7 dias"
        value={loading ? '…' : indicators.vencem7Dias}
        accent="bg-[#101D2D]"
      />
      <IndicatorCard
        icon={<AlertCircle className="h-4 w-4 text-white" />}
        label="Atrasadas"
        value={loading ? '…' : indicators.atrasadas}
        accent="bg-[#B42318]"
      />
      <IndicatorCard
        icon={<ListChecks className="h-4 w-4 text-white" />}
        label="Total de obrigações do período"
        value={loading ? '…' : indicators.total}
        accent="bg-[#087F8C]"
      />
    </div>
  )
}
