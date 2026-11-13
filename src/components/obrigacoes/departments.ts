// Catálogo de referência das 40 atividades do escritório ("SQL 27"):
// 20 Fiscais, 7 Contábeis e 13 de Departamento Pessoal.
// IMPORTANTE: este arquivo é APENAS um dicionário de classificação para a
// interface (badge de departamento, filtro e rótulos). Ele NÃO cadastra nem
// duplica registros no banco — as obrigações exibidas vêm 100% de
// contabil_io.vw_abn_obligations_operational e o cadastro autoritativo permanece
// no Supabase (catálogo do SQL 27). Nomes novos que surgirem no banco caem no
// departamento "Outros" até o catálogo oficial ser atualizado lá.

export type Department = 'fiscal' | 'contabil' | 'pessoal' | 'outros'

export const DEPARTMENT_LABELS: Record<Department, string> = {
  fiscal: 'Fiscal',
  contabil: 'Contábil',
  pessoal: 'Pessoal',
  outros: 'Outros',
}

export const DEPARTMENT_BADGE_CLASSES: Record<Department, string> = {
  fiscal: 'bg-[#087F8C]/10 text-[#087F8C] border-[#087F8C]/30',
  contabil: 'bg-[#101D2D]/5 text-[#101D2D] border-[#101D2D]/20',
  pessoal: 'bg-[#F4A261]/15 text-[#B4651F] border-[#F4A261]/40',
  outros: 'bg-slate-100 text-slate-600 border-slate-200',
}

export const DEPARTMENT_DOT_CLASSES: Record<Department, string> = {
  fiscal: 'bg-[#087F8C]',
  contabil: 'bg-[#101D2D]',
  pessoal: 'bg-[#F4A261]',
  outros: 'bg-slate-400',
}

// Paleta corporativa (identidade Contábil.io)
export const BRAND = {
  navy: '#101D2D',
  teal: '#087F8C',
  lightGray: '#F4F7FA',
  borderGray: '#E1E7EF',
  text: '#172235',
} as const

// Catálogo de 40 atividades — referência do SQL 27 (nomes normalizados).
// Usado somente para classificar a obrigação em um departamento na UI.
export const ACTIVITY_CATALOG: { name: string; department: Exclude<Department, 'outros'> }[] = [
  // Fiscal (20)
  { name: 'DAS', department: 'fiscal' },
  { name: 'DARF', department: 'fiscal' },
  { name: 'DARF Previdenciário', department: 'fiscal' },
  { name: 'DCTFWeb', department: 'fiscal' },
  { name: 'PGDAS-D', department: 'fiscal' },
  { name: 'DEFIS', department: 'fiscal' },
  { name: 'SINTEGRA', department: 'fiscal' },
  { name: 'GISS', department: 'fiscal' },
  { name: 'SPED Fiscal', department: 'fiscal' },
  { name: 'SPED Contribuições', department: 'fiscal' },
  { name: 'SPED Contábil', department: 'fiscal' },
  { name: 'ECD', department: 'fiscal' },
  { name: 'ECF', department: 'fiscal' },
  { name: 'DIPJ', department: 'fiscal' },
  { name: 'DIRPF', department: 'fiscal' },
  { name: 'DIRF', department: 'fiscal' },
  { name: 'eSocial', department: 'fiscal' },
  { name: 'EFD Reinf', department: 'fiscal' },
  { name: 'Sintegra MG', department: 'fiscal' },
  { name: 'Apuração de Impostos', department: 'fiscal' },
  // Contábil (7)
  { name: 'Balancete Mensal', department: 'contabil' },
  { name: 'Balanço Patrimonial', department: 'contabil' },
  { name: 'DRE', department: 'contabil' },
  { name: 'Livro Diário', department: 'contabil' },
  { name: 'Livro Razão', department: 'contabil' },
  { name: 'Classificação de Contas', department: 'contabil' },
  { name: 'Conciliação Bancária', department: 'contabil' },
  // Pessoal (13)
  { name: 'Folha de Pagamento', department: 'pessoal' },
  { name: 'Admissão', department: 'pessoal' },
  { name: 'Demissão', department: 'pessoal' },
  { name: 'FGTS', department: 'pessoal' },
  { name: 'INSS', department: 'pessoal' },
  { name: 'IRRF', department: 'pessoal' },
  { name: 'Férias', department: 'pessoal' },
  { name: '13º Salário', department: 'pessoal' },
  { name: 'Caged', department: 'pessoal' },
  { name: 'eSocial Folha', department: 'pessoal' },
  { name: 'SEFIP/GFIP', department: 'pessoal' },
  { name: 'PPRA/LTCAT', department: 'pessoal' },
  { name: 'Ponto Eletrônico', department: 'pessoal' },
]

// Palavras-chave para classificação quando o nome não casa exatamente
// (a view pode trazer variações com sufixos/numeração).
const KEYWORD_RULES: { kw: string[]; department: Exclude<Department, 'outros'> }[] = [
  {
    kw: [
      'das',
      'darf',
      'dctf',
      'sped',
      'efd',
      'ecf',
      'ecd',
      'defis',
      'pgdas',
      'sintegra',
      'giss',
      'dime',
      'apura',
      'imposto',
      'declar',
      'reinf',
      'dirf',
      'dirpf',
      'dipj',
      'gi',
    ],
    department: 'fiscal',
  },
  {
    kw: [
      'folha',
      'fgts',
      'inss',
      'irrf',
      'feria',
      '13',
      'admiss',
      'demiss',
      'caged',
      'esocial',
      'sefip',
      'gfip',
      'ponto',
      'trabalh',
      'empregad',
      'rescis',
      'pessoal',
    ],
    department: 'pessoal',
  },
  {
    kw: ['balanc', 'dre', 'livro', 'diario', 'razão', 'razao', 'contab', 'concilia', 'classific'],
    department: 'contabil',
  },
]

export function getDepartment(name: string | null | undefined): Department {
  if (!name) return 'outros'
  const n = name.toLowerCase()
  for (const rule of KEYWORD_RULES) {
    if (rule.kw.some((k) => n.includes(k))) return rule.department
  }
  return 'outros'
}
