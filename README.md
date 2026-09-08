# PacientPlans — Portfólio de estágio

Landing page acadêmica que apresenta o desenvolvimento do PacientPlans, um sistema web criado para centralizar a rotina administrativa de clínicas de psicologia e psicopedagogia.

## Projeto publicado

Acesse o portfólio em:

**[pacientplans.tajetti.com.br](http://pacientplans.tajetti.com.br/)**

## Sobre o PacientPlans

O PacientPlans reúne em uma única aplicação o gerenciamento de pacientes, sessões, pagamentos e indicadores da clínica. Cada profissional acessa apenas os próprios dados, enquanto a área administrativa é responsável pela criação dos acessos sem consultar informações clínicas ou financeiras.

Este repositório contém exclusivamente o portfólio do projeto. O código da aplicação principal e o backend não fazem parte desta pasta.

## Conteúdo do portfólio

- apresentação do problema, da proposta e dos objetivos;
- arquitetura da aplicação e tecnologias utilizadas;
- sete grupos de casos de uso;
- cronograma de desenvolvimento;
- onze diagramas organizados por processo, arquitetura, estados e sequências;
- capturas dos fluxos de pacientes, sessões, pagamentos, perfil e relatórios;
- vídeo demonstrativo integrado à página;
- plano de estágio em PDF;
- identificação acadêmica do projeto.

## Tecnologias

### Landing page

- React;
- TypeScript;
- Vite;
- Lucide React;
- CSS responsivo.

### Sistema apresentado

- React no frontend;
- Java 21;
- Spring Boot 4;
- Spring Data JPA;
- API REST;
- PostgreSQL.

## Estrutura principal

```text
pacientplans-lp/
├── src/
│   ├── assets/
│   │   ├── diagramas/   # Diagramas técnicos
│   │   ├── paciente/    # Capturas do módulo de pacientes
│   │   ├── pagamento/   # Capturas do módulo financeiro
│   │   ├── plano/       # Plano de estágio em PDF
│   │   ├── sessao/      # Capturas do módulo de sessões
│   │   └── video/       # Demonstração do projeto
│   ├── App.tsx          # Estrutura e componentes da página
│   ├── content.ts       # Conteúdo, cronograma e catálogo de evidências
│   ├── main.tsx         # Entrada da aplicação
│   └── styles.css       # Estilos e comportamento responsivo
├── index.html
├── package.json
└── vite.config.ts
```

Os nomes dos arquivos em `src/assets` usam caracteres ASCII e caminhos compatíveis com ambientes Linux.

## Executar localmente

É necessário ter Node.js e npm instalados.

```bash
npm install
npm run dev
```

O Vite exibirá no terminal o endereço local da aplicação.

## Build de produção

```bash
npm run build
```

Esse comando executa a verificação do TypeScript e gera os arquivos estáticos na pasta `dist`.

Para testar o resultado da compilação localmente:

```bash
npm run preview
```

## Scripts disponíveis

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento do Vite. |
| `npm run build` | Verifica o TypeScript e gera o bundle de produção. |
| `npm run preview` | Serve localmente o conteúdo gerado em `dist`. |

## Atualizar o conteúdo

Os textos estruturados, dados acadêmicos, cronograma, casos de uso e referências das imagens ficam em [`src/content.ts`](src/content.ts).

Os documentos e arquivos de mídia ficam em [`src/assets`](src/assets). Ao adicionar um novo asset, use nomes minúsculos, sem espaços ou acentos, para evitar diferenças de resolução de caminhos entre macOS e Linux.

## Contexto acadêmico

- **Estudante:** Alvaro Tajetti
- **Matrícula:** 241072028
- **Professor orientador:** Marcelo Yukio Yamamoto
- **Projeto:** PacientPlans
