interface PhaseProps {
  id: number
  tag: string
  title: string
  subtitle: string
  description: string
}

export const phases: PhaseProps[] = [
  {
    id: 1,
    tag: 'Fase 1',
    title: 'Início 18 de janeiro, em todo o país',
    subtitle: 'Cerca de 14,8 milhões de pessoas',
    description:
      'Trabalhadores da saúde(médicos, enfermeiros, fisioterapeutas, etc ou trabalhador de apoio, como recepcionistas, seguranças, etc), pessoas com mais de 75 anos ou com mais de 60 em instituições de longa permanência, indígenas em terras demarcadas e povos tradicionais ribeirinhos.'
  },
  {
    id: 2,
    tag: 'Fase 2',
    title: 'Segundo e terceiro mês após início da vacinação',
    subtitle: 'Cerca de 22,1 milhões de pessoas',
    description:
      'Pessoas de 60 a 74 anos que não vivem em instituições de longa permanência(como asilos e instituições psiquiátricas).'
  },
  {
    id: 3,
    tag: 'Fase 3',
    title: 'Quarto mês após início da vacinação',
    subtitle: 'Cerca de 12,7 milhões de pessoas',
    description:
      'Pessoas com comorbidades: diabetes mellitus, hipertensão arterial grave doença pulmonar obstrutiva crônica, doença renal, doença cardiovasculares e cerebrovasculares, indivíduos transplantados de órgão sólido, anemia falciforme, câncer ou obesidade grave(IMC > 40).'
  },
  {
    id: 4,
    tag: 'Grupo prioritário',
    title: 'Vacinação durante os 12 meses seguintes após fase 3',
    subtitle: 'Cerca de 10 milhões de pessoas',
    description:
      'Professores(nível básico ao superior, setor público ou privado), forças de segurança(policial federal, militar ou civil e Forças Armadas) e salvamento(como bombeiros), funcionários do sistema prisional, presos, quilombolas, moradores de rua, portadores de deficiência dentre outros.'
  },
  {
    id: 5,
    tag: 'Não prioritário',
    title: 'Vacinação após grupo prioritários nos 12 meses seguintes',
    subtitle: 'Cerca de 120 milhões de pessoas',
    description:
      'Menores de 60, que não estão em condição de vulnerabilidade, não atuam em profissões essenciais e não tem comorbidades.'
  }
]
