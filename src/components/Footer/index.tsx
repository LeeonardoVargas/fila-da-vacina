import React from 'react'

import { Container } from './styles'

export const Footer = () => (
  <Container>
    <h3>
      {new Date().getFullYear()} © Desenvolvedor
      <a
        href="https://www.linkedin.com/in/leonardo-luis-de-vargas/"
        target="_new"
      >
        Leonardo Vargas
      </a>{' '}
      e Analista de Dados
      <a href="https://www.instagram.com/taffarel787/" target="_new">
        André Taffarel
      </a>
    </h3>
    <h4>
      Aplicação desenvolvida de forma voluntária para o projeto Missão Chronos,
      para mais detalhes faça o download no{' '}
      <a href="plano-nacional-de-vacinacao.pdf" download>
        Plano Nacional de Vacinação
      </a>
      .
    </h4>
  </Container>
)
