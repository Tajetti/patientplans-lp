---
name: "PacientPlans"
description: "Portfólio clínico direto, verificável e centrado na prova do produto."
colors:
  cobalt-signal: "#0859cf"
  cobalt-deep: "#064fb8"
  clinical-navy: "#091530"
  documentation-navy: "#0b1b35"
  paper-white: "#ffffff"
  mist-canvas: "#f7f8f8"
  mist-panel: "#eef2f6"
  steel-copy: "#52627a"
  rule-cool: "#cbd5e1"
  success-ink: "#25684d"
  pending-ink: "#8a5a12"
typography:
  display:
    fontFamily: "Atkinson Hyperlegible Next, sans-serif"
    fontSize: "63px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Atkinson Hyperlegible Next, sans-serif"
    fontSize: "clamp(2.7rem, 5vw, 5.2rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Atkinson Hyperlegible Next, sans-serif"
    fontSize: "clamp(1.45rem, 2.2vw, 2.1rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Atkinson Hyperlegible Next, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Atkinson Hyperlegible Next, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  status: "5px"
  control: "6px"
  surface: "8px"
  circular: "50%"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  section: "clamp(6rem, 9vw, 9rem)"
components:
  button-primary:
    backgroundColor: "{colors.cobalt-signal}"
    textColor: "{colors.paper-white}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.cobalt-deep}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.control}"
  status-complete:
    textColor: "{colors.success-ink}"
    rounded: "{rounded.status}"
    padding: "6px 10px"
  status-pending:
    textColor: "{colors.pending-ink}"
    rounded: "{rounded.status}"
    padding: "6px 10px"
  evidence-surface:
    backgroundColor: "{colors.mist-panel}"
    textColor: "{colors.steel-copy}"
    rounded: "{rounded.surface}"
    padding: "20px"
---

# Design System: PacientPlans

## Overview

**Creative North Star: "A Prática em Foco"**

O sistema visual trata o produto como a principal evidência: primeiro mostra a interface funcionando, depois organiza o raciocínio do projeto em uma sequência editorial clara. O resultado é clínico sem ser frio, acadêmico sem parecer um relatório burocrático e sóbrio sem perder identidade.

Espaços amplos, linhas finas e uma hierarquia tipográfica firme mantêm a leitura tranquila. O azul-cobalto aparece como sinal de ação ou orientação; o azul-marinho sustenta títulos e áreas de documentação. Dados ou arquivos inexistentes nunca recebem aparência de conclusão.

**Key Characteristics:**

- Produto visível antes da explicação extensa.
- Fundos branco e névoa alternados por ritmo, não por decoração.
- Tipografia humanista, direta e altamente legível.
- Cantos discretos de 5 a 8 px e regras de 1 px.
- Estados demonstrativos e pendentes sempre rotulados com honestidade.

## Colors

A paleta combina um cobalto raro e funcional com marinhos clínicos, papel branco e superfícies de névoa fria.

### Primary

- **Cobalto de sinal:** reservado para a ação principal, links, ícones funcionais e o estado ativo.
- **Cobalto profundo:** usado somente no hover da ação principal.

### Neutral

- **Marinho clínico:** títulos, marca e texto de maior autoridade.
- **Marinho documental:** fundo das áreas que concentram documentação e identidade.
- **Papel branco:** superfície de leitura e cartões dentro de fundos de névoa.
- **Névoa de base e de painel:** alternância de seções, placeholders e chrome discreto.
- **Aço textual:** texto secundário; deve manter contraste mínimo de 4,5:1.
- **Regra fria:** divisórias e contornos, normalmente com 1 px.

**The Cobalt Signal Rule.** Cobalto marca ação, navegação e informação ativa; nunca se torna um preenchimento decorativo recorrente.

## Typography

**Display Font:** Atkinson Hyperlegible Next (com fallback sans-serif)  
**Body Font:** Atkinson Hyperlegible Next (com fallback sans-serif)

**Character:** Uma única família humanista cria continuidade entre produto e portfólio. O contraste vem de escala, peso e espaço, não de misturar famílias.

### Hierarchy

- **Display** (700, tamanho fixo no hero desktop, 1.0): frase principal curta e central.
- **Headline** (700, escala fluida, 0.98): títulos de seção; tracking não ultrapassa -0.04em.
- **Title** (600, escala fluida, 1.08): casos de uso, painéis e chamadas internas.
- **Body** (400, 1rem, 1.65): explicações com colunas e comprimentos controlados.
- **Label** (600, 0.8rem, 0.08em): cabeçalhos de tabela e metadados reais; não usar como kicker decorativo.

**The Direct Heading Rule.** O título deve explicar a seção sozinho; não adicionar eyebrow ou kicker acima dele.

## Layout

O conteúdo usa um contêiner central de 1240 px com respiro lateral de 32 px no desktop. O hero escala proporcionalmente a partir da composição de 1586 × 992 e mantém o dashboard como prova dominante. As seções usam uma grade editorial de duas colunas para relacionar afirmação e explicação, seguida por listas ou tabelas com regras horizontais.

Em até 900 px, cabeçalhos, arquitetura, documentação e entrega passam para uma coluna; o dashboard detalhado vira um resumo compacto. Em até 560 px, a arquitetura e a lista de tecnologias ficam lineares e a tabela do cronograma vira blocos empilhados. Nenhum breakpoint admite rolagem horizontal.

O ritmo base progride em múltiplos de 8 px. Seções têm respiro amplo e fluido; relações internas usam principalmente 16, 24 e 32 px.

## Elevation & Depth

O mundo é plano por padrão. A separação nasce de fundo tonal, contorno e espaço; sombras aparecem apenas no CTA, no navegador demonstrativo, em cartões do dashboard e no menu móvel.

### Shadow Vocabulary

- **Ação cobalto:** sombra curta e colorida para destacar a única ação principal.
- **Produto elevado:** sombra ambiente ampla e de baixa opacidade sob o navegador demonstrativo.
- **Painel clínico:** sombra quase imperceptível para separar cartões brancos do dashboard.
- **Menu móvel:** sombra ambiente mais firme, usada somente quando o menu está aberto.

**The Flat-by-Default Rule.** Uma superfície recebe sombra apenas quando precisa se elevar funcionalmente sobre outra camada.

## Shapes

Controles usam 6 px; estados compactos usam 5 px; superfícies usam no máximo 8 px. Avatares, ícones de reprodução e marcadores podem ser circulares porque sua função pede uma silhueta radial. Bordas são finas e frias; grandes blocos não usam cápsulas nem cantos excessivamente arredondados.

## Components

### Buttons

- **Shape:** retângulo de cantos discretos (6 px).
- **Primary:** cobalto com texto branco, peso regular e seta linear.
- **Hover / Focus:** cobalto profundo no hover; foco com contorno azul claro de 3 px e offset de 4 px.

### Status

- **Complete:** texto verde com contorno da mesma cor e raio de 5 px.
- **Pending:** texto âmbar com contorno da mesma cor; nunca substituir pendência por ícone de confirmação.

### Cards / Containers

- **Corner Style:** 7 px no dashboard e 8 px nas superfícies principais.
- **Background:** branco sobre névoa ou marinho documental para blocos de entrega.
- **Shadow Strategy:** plano por padrão; consulte Elevation & Depth.
- **Border:** regra fria de 1 px.
- **Internal Padding:** 16 a 32 px, chegando a 64 px apenas nos painéis amplos de entrega.

### Navigation

Links desktop são compactos, sem fundo e ganham cobalto mais sublinhado no hover. No mobile, um botão quadrado de 6 px abre um painel branco de 8 px com separadores horizontais.

### Product Evidence

O navegador e o dashboard são a assinatura do sistema. O chrome usa ícones lineares consistentes, o conteúdo fictício recebe o rótulo “Dados demonstrativos” e a entrada do produto é o único movimento de revelação da página.

## Do's and Don'ts

### Do:

- **Do** manter o produto como primeira prova visual e a ação principal como único grande preenchimento cobalto.
- **Do** usar fundos tonais, espaço e linhas de 1 px antes de recorrer a sombras.
- **Do** rotular dados demonstrativos, links ausentes e arquivos pendentes de forma explícita.
- **Do** testar 1280 px, 1440 px e 390 px sem rolagem horizontal.

### Don't:

- **Don't** adicionar kickers, eyebrows ou rótulos decorativos acima dos títulos.
- **Don't** usar gradientes, ícones em glifos de texto ou grades decorativas nos placeholders.
- **Don't** transformar cartões e botões em cápsulas; o limite normal de raio é 8 px.
- **Don't** repetir reveals em todas as seções ou animar propriedades de layout.

