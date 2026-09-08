export const projectInfo = {
  student: "Alvaro Tajetti",
  registration: "241072028",
  professor: "Marcelo Yukio Yamamoto",
  delivery: "14/09",
  internshipReportUrl: "",
};

export const technologies = [
  { name: "React", detail: "Interface web componentizada" },
  { name: "TypeScript", detail: "Tipagem e manutenção do frontend" },
  { name: "Java 21", detail: "Base da aplicação no servidor" },
  { name: "Spring Boot 4", detail: "API REST, validação e regras de negócio" },
  { name: "Spring Data JPA", detail: "Persistência e acesso aos dados" },
  { name: "PostgreSQL", detail: "Banco de dados relacional" },
];

export const useCases = [
  {
    number: "01",
    title: "Acessar com segurança",
    href: "#evidencias-visao-geral",
    description:
      "Login, encerramento de sessão, primeiro acesso e recuperação de senha por token com prazo de expiração.",
  },
  {
    number: "02",
    title: "Gerenciar o perfil",
    href: "#evidencias-perfil",
    description:
      "Consulta e atualização dos dados da psicóloga, incluindo imagem de perfil e credenciais pessoais.",
  },
  {
    number: "03",
    title: "Organizar pacientes",
    href: "#evidencias-pacientes",
    description:
      "Cadastro, busca, consulta, edição e exclusão de pacientes vinculados exclusivamente à profissional autenticada.",
  },
  {
    number: "04",
    title: "Planejar sessões",
    href: "#evidencias-sessoes",
    description:
      "Agendamento e manutenção das sessões, com filtros, horários disponíveis e acompanhamento de status.",
  },
  {
    number: "05",
    title: "Controlar o financeiro",
    href: "#evidencias-pagamentos",
    description:
      "Registro, edição e exclusão de lançamentos, valores e situação de pagamento relacionados ao atendimento.",
  },
  {
    number: "06",
    title: "Acompanhar indicadores",
    href: "#evidencias-relatorios",
    description:
      "Dashboard com visão geral da prática e relatórios para apoiar o acompanhamento clínico e financeiro.",
  },
  {
    number: "07",
    title: "Administrar acessos",
    href: "#tecnologias",
    description:
      "Área separada para criar contas de psicólogas sem expor pacientes, sessões ou informações financeiras.",
  },
];

export const timeline = [
  {
    scope: "Estrutura inicial e API",
    planned: "A confirmar",
    completed: "12/08/2026 · registro no Git",
    status: "Concluído",
  },
  {
    scope: "Autenticação, acesso e perfil",
    planned: "A confirmar",
    completed: "Data real a confirmar",
    status: "Concluído no código",
  },
  {
    scope: "Gestão de pacientes",
    planned: "A confirmar",
    completed: "Data real a confirmar",
    status: "Concluído no código",
  },
  {
    scope: "Agenda e sessões",
    planned: "A confirmar",
    completed: "Data real a confirmar",
    status: "Concluído no código",
  },
  {
    scope: "Financeiro, dashboard e relatórios",
    planned: "A confirmar",
    completed: "Data real a confirmar",
    status: "Concluído no código",
  },
  {
    scope: "Diagramas e documentação",
    planned: "Até 14/09",
    completed: "11 diagramas adicionados ao portfólio",
    status: "Concluído",
  },
  {
    scope: "Evidências, vídeo e relatório",
    planned: "Até 14/09",
    completed: "Adicionados",
    status: "Concluído",
  },
];

export const diagrams = [
  {
    category: "Processos e escopo",
    title: "Processo da clínica",
    type: "BPMN",
    description: "Fluxo da rotina clínica, do agendamento ao acompanhamento de sessões e pagamentos.",
    file: clinicProcessDiagram,
    format: "wide",
  },
  {
    category: "Processos e escopo",
    title: "Casos de uso",
    type: "UML",
    description: "Atores e funcionalidades que delimitam o escopo do PacientPlans.",
    file: useCaseDiagram,
    format: "standard",
  },
  {
    category: "Arquitetura e dados",
    title: "Diagrama de classes",
    type: "UML",
    description: "Entidades de domínio, atributos, operações e seus relacionamentos.",
    file: classDiagram,
    format: "standard",
  },
  {
    category: "Arquitetura e dados",
    title: "Entidade e relacionamento",
    type: "Dados",
    description: "Estrutura relacional usada para organizar os dados persistidos pela aplicação.",
    file: entityRelationshipDiagram,
    format: "standard",
  },
  {
    category: "Arquitetura e dados",
    title: "Diagrama de implantação",
    type: "UML",
    description: "Distribuição dos componentes da solução e de suas dependências de execução.",
    file: deploymentDiagram,
    format: "standard",
  },
  {
    category: "Estados",
    title: "Estados do paciente",
    type: "UML",
    description: "Estados possíveis do paciente e as transições entre eles.",
    file: patientStateDiagram,
    format: "standard",
  },
  {
    category: "Estados",
    title: "Estados da sessão",
    type: "UML",
    description: "Ciclo de vida de uma sessão dentro do fluxo clínico.",
    file: sessionStateDiagram,
    format: "standard",
  },
  {
    category: "Sequências",
    title: "Gerenciar paciente",
    type: "UML",
    description: "Interações entre as camadas durante as operações de gerenciamento de pacientes.",
    file: patientSequenceDiagram,
    format: "portrait",
  },
  {
    category: "Sequências",
    title: "Gerenciar sessão",
    type: "UML",
    description: "Interações entre as camadas durante as operações de gerenciamento de sessões.",
    file: sessionSequenceDiagram,
    format: "portrait",
  },
  {
    category: "Sequências",
    title: "Gerenciar perfil",
    type: "UML",
    description: "Interações entre as camadas durante a consulta e a atualização do perfil.",
    file: profileSequenceDiagram,
    format: "portrait",
  },
  {
    category: "Sequências",
    title: "Gerenciar pagamento",
    type: "UML",
    description: "Interações entre as camadas durante as operações de gerenciamento de pagamentos.",
    file: paymentSequenceDiagram,
    format: "portrait",
  },
];

export const screenshots = [
  {
    category: "Visão geral",
    title: "Dashboard",
    description: "Visão geral da prática clínica e seus principais indicadores.",
    file: dashboardImage,
  },
  {
    category: "Pacientes",
    title: "Listagem de pacientes",
    description: "Pesquisa e acompanhamento dos pacientes cadastrados.",
    file: patientListImage,
  },
  {
    category: "Pacientes",
    title: "Cadastro de paciente",
    description: "Formulário para registrar um novo paciente na clínica.",
    file: patientCreateImage,
  },
  {
    category: "Pacientes",
    title: "Detalhes do paciente",
    description: "Consulta das informações e do histórico individual.",
    file: patientViewImage,
  },
  {
    category: "Pacientes",
    title: "Edição de paciente",
    description: "Atualização dos dados de um paciente existente.",
    file: patientEditImage,
  },
  {
    category: "Pacientes",
    title: "Exclusão de paciente",
    description: "Confirmação segura antes de remover um cadastro.",
    file: patientDeleteImage,
  },
  {
    category: "Sessões",
    title: "Listagem de sessões",
    description: "Agenda dos atendimentos e acompanhamento de seus estados.",
    file: sessionListImage,
  },
  {
    category: "Sessões",
    title: "Agendamento de sessão",
    description: "Cadastro de um novo atendimento para o paciente.",
    file: sessionCreateImage,
  },
  {
    category: "Sessões",
    title: "Detalhes da sessão",
    description: "Consulta das informações registradas para o atendimento.",
    file: sessionViewImage,
  },
  {
    category: "Sessões",
    title: "Edição de sessão",
    description: "Atualização de data, horário e dados do atendimento.",
    file: sessionEditImage,
  },
  {
    category: "Sessões",
    title: "Exclusão de sessão",
    description: "Confirmação antes da remoção de um atendimento.",
    file: sessionDeleteImage,
  },
  {
    category: "Pagamentos",
    title: "Listagem de pagamentos",
    description: "Acompanhamento dos lançamentos financeiros da clínica.",
    file: paymentListImage,
  },
  {
    category: "Pagamentos",
    title: "Registro de pagamento",
    description: "Cadastro de um novo lançamento financeiro.",
    file: paymentCreateImage,
  },
  {
    category: "Pagamentos",
    title: "Edição de pagamento",
    description: "Atualização dos dados e da situação de um pagamento.",
    file: paymentEditImage,
  },
  {
    category: "Pagamentos",
    title: "Exclusão de pagamento",
    description: "Confirmação antes de remover um lançamento financeiro.",
    file: paymentDeleteImage,
  },
  {
    category: "Perfil",
    title: "Edição do perfil",
    description: "Atualização dos dados pessoais e profissionais da psicóloga.",
    file: profileEditImage,
  },
  {
    category: "Relatórios",
    title: "Relatórios da clínica",
    description: "Consulta dos indicadores clínicos e financeiros consolidados.",
    file: reportListImage,
  },
];
import dashboardImage from "./assets/tela-inicial.png";
import patientCreateImage from "./assets/paciente/criar.png";
import patientDeleteImage from "./assets/paciente/deletar.png";
import patientEditImage from "./assets/paciente/editar.png";
import patientListImage from "./assets/paciente/listar.png";
import patientViewImage from "./assets/paciente/ver-paciente.png";
import paymentCreateImage from "./assets/pagamento/criar.png";
import paymentDeleteImage from "./assets/pagamento/deletar.png";
import paymentEditImage from "./assets/pagamento/editar.png";
import paymentListImage from "./assets/pagamento/listar.png";
import profileEditImage from "./assets/perfil/editar.png";
import reportListImage from "./assets/relatorio/listar.png";
import sessionCreateImage from "./assets/sessao/criar.png";
import sessionDeleteImage from "./assets/sessao/deletar.png";
import sessionEditImage from "./assets/sessao/editar.png";
import sessionListImage from "./assets/sessao/listar.png";
import sessionViewImage from "./assets/sessao/ver-sessao.png";
import clinicProcessDiagram from "./assets/diagramas/bpmn-processo-clinica.png";
import useCaseDiagram from "./assets/diagramas/caso-de-uso.png";
import patientStateDiagram from "./assets/diagramas/diagrama-de-estado-paciente.png";
import sessionStateDiagram from "./assets/diagramas/diagrama-de-estado-sessao.png";
import patientSequenceDiagram from "./assets/diagramas/diagrama-de-sequencia-gerenciar-paciente.png";
import profileSequenceDiagram from "./assets/diagramas/diagrama-de-sequencia-gerenciar-perfil.png";
import paymentSequenceDiagram from "./assets/diagramas/diagrama-de-sequencia-gerenciar-pagamento.png";
import sessionSequenceDiagram from "./assets/diagramas/diagrama-de-sequencia-gerenciar-sessao.png";
import classDiagram from "./assets/diagramas/diagrama-de-classe.png";
import entityRelationshipDiagram from "./assets/diagramas/diagrama-de-entidade-e-relacionamento.png";
import deploymentDiagram from "./assets/diagramas/diagrama-de-implantacao.png";
