// View-model da central de Obrigações Acessórias (PROMPT 28).
// Todo dado vem da view operacional real (vw_abn_obligations_operational) —
// nenhum valor fixo, mock ou contador simulado. Os filtros (empresa, regime,
// competência, departamento, responsável, situação) são aplicados em conjunto
// sobre a lista carregada, e indicadores + calendário + quadros inferiores
// derivam do MESMO conjunto filtrado.
import { useCallback, useMemo, useState } from 'react'
import type { AbnObligationOperational } from '@/hooks/use-abn-obligations'
import {
  getDepartment,
  DEPARTMENT_KEYS,
  type DepartmentKey,
} from '@/components/obrigacoes/departments'

export type ViewMode = 'mes' | 'semana' | 'lista'
export type BoardKey = 'hoje' | 'proximos7' | 'atrasadas'

export interface ObligationFilters {
  empresaId: string // "" = todas
  regime: string // "" = todos; vem do cadastro da empresa
  competencia: string // "YYYY-MM" | "" = todas
  departamento: DepartmentKey | '' // catálogo Fiscal/Contábil/Pessoal
  responsavelId: string // "" = todos
  situacao: string // "" = todas
}

export const EMPTY_FILTERS: ObligationFilters = {
  empresaId: '',
  regime: '',
  competencia: '',
  departamento: '',
  responsavelId: '',
  situacao: '',
}

const REGIMES = [
  'MEI',
  'Simples Nacional',
  'Lucro Presumido',
  'Lucro Real',
  'Lucro Arbitrado',
  'Entidades imunes/isentas',
]

function startOfToday(): Date {
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  return d
}

function parseDue(due: string): Date | null {
  if (!due) return null
  const d = new Date(`${due}T12:00:00`)
  return Number.isNaN(d.getTime()) ? null : d
}

export function useObligationsView(
  obligations: AbnObligationOperational[],
  companyRegimes: Map<string, string>,
) {
  const [filters, setFilters] = useState<ObligationFilters>(EMPTY_FILTERS)
  const [viewMode, setViewMode] = useState<ViewMode>('mes')
  const [anchorDate, setAnchorDate] = useState(() => new Date())
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [panelOpen, setPanelOpen] = useState(false)
  const [boardFocus, setBoardFocus] = useState<BoardKey | null>(null)
  const [rulesOpen, setRulesOpen] = useState(false)

  const setFilter = useCallback(
    <K extends keyof ObligationFilters>(key: K, value: ObligationFilters[K]) =>
      setFilters((f) => ({ ...f, [key]: value })),
    [],
  )
  const clearFilters = useCallback(() => setFilters(EMPTY_FILTERS), [])

  // Regimes disponíveis: união do catálogo com os regimes realmente
  // presentes nos dados (evita esconder regimes legítimos não catalogados).
  const regimeOptions = useMemo(() => {
    const present = new Set<string>()
    obligations.forEach((o) => {
      const r = o.regime_tributario || companyRegimes.get(o.company_id)
      if (r) present.add(r)
    })
    return [...new Set([...REGIMES, ...present])].sort()
  }, [obligations, companyRegimes])

  // Responsáveis e situações observadas nos dados reais carregados.
  const responsavelOptions = useMemo(() => {
    const map = new Map<string, string>()
    obligations.forEach((o) => {
      if (o.responsible_user_id)
        map.set(o.responsible_user_id, o.responsible_name || o.responsible_user_id)
    })
    return [...map.entries()]
      .map(([id, name]) => ({ id, name }))
      .sort((a, b) => a.name.localeCompare(b.name))
  }, [obligations])

  const situacaoOptions = useMemo(
    () => [...new Set(obligations.map((o) => o.workflow_status).filter(Boolean))].sort(),
    [obligations],
  )

  const competencias = useMemo(() => {
    const set = new Set<string>()
    obligations.forEach((o) => {
      if (o.competencia) set.add(o.competencia.slice(0, 7))
    })
    return [...set].sort()
  }, [obligations])

  // Filtros aplicados em conjunto. A competência controla o período-base do
  // calendário; os demais filtros restringem a lista.
  const filtered = useMemo(() => {
    const today = startOfToday()
    return obligations.filter((o) => {
      if (filters.empresaId && o.company_id !== filters.empresaId) return false
      const regime = o.regime_tributario || companyRegimes.get(o.company_id) || ''
      if (filters.regime && regime !== filters.regime) return false
      if (filters.competencia && o.competencia?.slice(0, 7) !== filters.competencia) return false
      if (filters.departamento && getDepartment(o.name) !== filters.departamento) return false
      if (filters.responsavelId && o.responsible_user_id !== filters.responsavelId) return false
      if (filters.situacao && o.workflow_status !== filters.situacao) return false
      // Foco de quadro inferior: restringe ao grupo do quadro clicado.
      if (boardFocus) {
        const due = parseDue(o.due_date)
        if (!due) return false
        const done = o.workflow_status === 'Concluído' || o.status === 'Concluído'
        if (boardFocus === 'atrasadas') {
          if (done || due >= today) return false
        } else if (boardFocus === 'hoje') {
          if (done || !isSameDay(due, today)) return false
        } else {
          const in7 = new Date(today)
          in7.setDate(today.getDate() + 7)
          if (done || due < today || due > in7) return false
        }
      }
      return true
    })
  }, [obligations, filters, companyRegimes, boardFocus])

  const filteredAll = filtered

  // Visão do calendário: quando um quadro inferior está focado, o calendário
  // mostra apenas aquele grupo (navegação vinda do quadro).
  const calendarItems = filteredAll

  const selected = useMemo(
    () =>
      filtered.find((o) => o.id === selectedId) ||
      obligations.find((o) => o.id === selectedId) ||
      null,
    [filtered, obligations, selectedId],
  )

  // Indicadores: calculados com os filtros atuais (sem considerar boardFocus,
  // que é navegação de quadro, não filtro).
  const indicators = useMemo(() => {
    const today = startOfToday()
    const in7 = new Date(today)
    in7.setDate(today.getDate() + 7)
    let concluidas = 0
    let aguardando = 0
    let vencem7 = 0
    let atrasadas = 0
    let total = 0
    filteredAll.forEach((o) => {
      const due = parseDue(o.due_date)
      const done = o.workflow_status === 'Concluído' || o.status === 'Concluído'
      const mesCompetencia = o.competencia?.slice(0, 7)
      total += 1
      if (done) {
        // "Concluídas no mês": concluídas com competência/vencimento no mês corrente
        const mesAtual = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`
        if (
          (o.completed_at && o.completed_at.slice(0, 7) === mesAtual) ||
          (due &&
            due.getFullYear() === today.getFullYear() &&
            due.getMonth() === today.getMonth()) ||
          mesCompetencia === mesAtual
        ) {
          concluidas += 1
        }
      } else if (o.workflow_status === 'Aguardando Cliente') {
        aguardando += 1
      }
      if (due && !done) {
        if (due < today) atrasadas += 1
        else if (due <= in7) vencem7 += 1
      }
    })
    return {
      concluidasNoMes: concluidas,
      aguardandoCliente: aguardando,
      vencem7Dias: vencem7,
      atrasadas,
      total,
    }
  }, [filteredAll])

  // Quadros inferiores: dados reais do conjunto filtrado (sem boardFocus).
  const boards = useMemo(() => {
    const today = startOfToday()
    const in7 = new Date(today)
    in7.setDate(today.getDate() + 7)
    const hoje: AbnObligationOperational[] = []
    const proximos: AbnObligationOperational[] = []
    const atrasadas: AbnObligationOperational[] = []
    filteredAll.forEach((o) => {
      const due = parseDue(o.due_date)
      if (!due) return
      const done = o.workflow_status === 'Concluído' || o.status === 'Concluído'
      if (done) return
      if (isSameDay(due, today)) hoje.push(o)
      if (due >= today && due <= in7) proximos.push(o)
      if (due < today) atrasadas.push(o)
    })
    const byDue = (a: AbnObligationOperational, b: AbnObligationOperational) =>
      a.due_date.localeCompare(b.due_date)
    hoje.sort(byDue)
    proximos.sort(byDue)
    atrasadas.sort(byDue)
    return { hoje, proximos, atrasadas }
  }, [filteredAll])

  const openObligation = useCallback((o: AbnObligationOperational) => {
    setSelectedId(o.id)
    setPanelOpen(true)
  }, [])

  const focusBoard = useCallback((key: BoardKey | null) => {
    setBoardFocus(key)
  }, [])

  return {
    filters,
    setFilter,
    clearFilters,
    hasActiveFilters: Object.values(filters).some((v) => v !== ''),
    regimeOptions,
    responsavelOptions,
    situacaoOptions,
    competencias,
    filtered: filteredAll,
    calendarItems,
    indicators,
    boards,
    viewMode,
    setViewMode,
    anchorDate,
    setAnchorDate,
    selectedId,
    selected,
    panelOpen,
    setPanelOpen,
    openObligation,
    boardFocus,
    focusBoard,
    rulesOpen,
    setRulesOpen,
    DEPARTMENT_KEYS,
  }
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

export type ObligationsView = ReturnType<typeof useObligationsView>
