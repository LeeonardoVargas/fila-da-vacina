import React from 'react'

import { Container, Content } from './styles'

export const Footer = () => (
  <Container>
    <Content>
      <div>
        <h3>Realização:</h3>
        <img src="missao-chronos.png" alt="Logo do projeto missão chronos" />
      </div>
      <div>
        <h3>Fonte:</h3>
        <p>
          Plano Nacional de Vacinação contra a Covid-19 do Ministério da Saúde,
          <a href="plano-nacional-de-vacinacao.pdf" download>
            baixar documento.
          </a>
        </p>
        <h3 style={{ marginTop: '1rem' }}>Desenvolvimento:</h3>
        <a
          href="https://www.linkedin.com/in/leonardo-luis-de-vargas/"
          target="_new"
        >
          @LeonardoVargas
        </a>
      </div>
    </Content>
  </Container>
)
