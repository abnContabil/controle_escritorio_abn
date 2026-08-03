import { AlertTriangle, CalendarClock, CalendarDays, Hourglass, CheckCircle2 } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import type { AbnObligationsIndicators } from '@/hooks/use-abn-obligations'

type CardDef = {
  key: keyof Omit<AbnObligationsIndicators, 'total_competencia_atual'>
  label: string
  icon: typeof AlertTriangle
  color: string
  ring: string
}

const CARDS: CardDef[] = [
  {
    key: 'atrasadas',
    label: 'Atrasadas',
    icon: AlertTriangle,
    color: 'text-destructive',
    ring: 'hover:ring-destructive/40',
  },
  {
    key: 'vencem_hoje',
    label: 'Vencem hoje',
    icon: CalendarClock,
    color: 'text-orange-600',
    ring: 'hover:ring-orange-400/40',
  },
  {
    key: 'proximos_7_dias',
    label: 'Próximos 7 dias',
    icon: CalendarDays,
    color: 'text-amber-600',
    ring: 'hover:ring-amber-400/40',
  },
  {
    key: 'aguardando_cliente',
    label: 'Aguardando cliente',
    icon: Hourglass,
    color: 'text-blue-600',
    ring: 'hover:ring-blue-400/40',
  },
  {
    key: 'concluidas_no_mes',
    label: 'Concluídas no mês',
    icon: CheckCircle2,
    color: 'text-emerald-600',
    ring: 'hover:ring-emerald-400/40',
  },
]

export interface IndicatorCardsProps {
  indicators: AbnObligationsIndicators
  loading: boolean
  activeKey: string | null
  onCardClick: (key: string) => void
}

export function IndicatorCards({
  indicators,
  loading,
  activeKey,
  onCardClick,
}: IndicatorCardsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
      {CARDS.map((c) => {
        const Icon = c.icon
        const value = indicators ? indicators[c.key] : 0
        const isActive = activeKey === c.key
        return (
          <button
            key={c.key}
            type="button"
            onClick={() => onCardClick(c.key)}
            aria-pressed={isActive}
            aria-label={`${c.label}: ${value} ${value === 1 ? 'obrigação' : 'obrigações'}`}
            className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-xl animate-fade-in"
          >
            <Card
              className={cn(
                'p-4 cursor-pointer transition-all ring-1 ring-transparent hover:shadow-md h-full',
                c.ring,
                isActive && 'ring-2 ring-primary shadow-md',
              )}
            >
              <Icon className={cn('h-5 w-5', c.color)} />
              <div className="mt-2">
                {loading ? (
                  <Skeleton className="h-7 w-12" />
                ) : (
                  <p className="text-2xl font-bold tracking-tight">{value}</p>
                )}
                <p className="text-xs text-muted-foreground mt-0.5">{c.label}</p>
              </div>
            </Card>
          </button>
        )
      })}
    </div>
  )
}
