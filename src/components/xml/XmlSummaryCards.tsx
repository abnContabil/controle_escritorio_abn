import { FileText, DollarSign, CheckCircle2, Clock } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { formatCurrency } from './xml-utils'
import type { XmlIndicators } from '@/hooks/use-xml-control'

interface XmlSummaryCardsProps {
  indicators: XmlIndicators
  loading: boolean
}

export function XmlSummaryCards({ indicators, loading }: XmlSummaryCardsProps) {
  const cards = [
    {
      title: 'Total de Documentos',
      value: String(indicators.total),
      icon: FileText,
      color: 'text-blue-700',
      border: 'bg-blue-500/10 border-blue-500/20',
    },
    {
      title: 'Valor Total',
      value: formatCurrency(indicators.valorTotal),
      icon: DollarSign,
      color: 'text-emerald-700',
      border: 'bg-emerald-500/10 border-emerald-500/20',
    },
    {
      title: 'Processados',
      value: String(indicators.processados),
      icon: CheckCircle2,
      color: 'text-emerald-700',
      border: 'bg-emerald-500/10 border-emerald-500/20',
    },
    {
      title: 'Pendentes',
      value: String(indicators.pendentes),
      icon: Clock,
      color: 'text-amber-700',
      border: 'bg-amber-500/10 border-amber-500/20',
    },
  ]

  return (
    <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.title} className={card.border}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className={`text-xs font-medium ${card.color}`}>{card.title}</CardTitle>
              <card.icon className={`h-4 w-4 ${card.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-7 w-20" />
            ) : (
              <div className={`text-xl font-bold ${card.color}`}>{card.value}</div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
