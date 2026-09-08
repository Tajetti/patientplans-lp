# PacientPlans — Landing page

Landing page acadêmica feita em React, TypeScript e Vite. Todo o projeto é independente e permanece dentro de `pacientplans-lp`.

## Executar localmente

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

## Conteúdo que ainda precisa ser preenchido

Edite `src/content.ts` para informar:

- matrícula e professor(a);
- datas previstas e realizadas do cronograma;
- links públicos dos diagramas;
- link do vídeo de até 5 minutos;
- link público do relatório de estágio em PDF.

Os valores ainda não conhecidos aparecem claramente como pendentes na página.

## Adicionar as imagens

Coloque as capturas em `public/imagens` com os nomes abaixo:

- `dashboard.webp`
- `pacientes.webp`
- `sessoes.webp`
- `financeiro.webp`

Assim que o arquivo existe, o React troca o placeholder pela imagem automaticamente.

