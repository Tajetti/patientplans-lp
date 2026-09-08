import {
  ArrowRight,
  Blocks,
  ChevronRight,
  Code2,
  Database,
  ExternalLink,
  FileText,
  Image as ImageIcon,
  KeyRound,
  LayoutDashboard,
  Maximize,
  Menu,
  Pause,
  Play,
  Server,
  ShieldCheck,
  TrendingUp,
  UserCog,
  Volume2,
  VolumeX,
  Workflow,
  X,
} from "lucide-react";
import { useRef, useState } from "react";
import initialScreen from "./assets/tela inicial.png";
import projectVideo from "./assets/video/video.mp4";
import {
  diagrams,
  projectInfo,
  screenshots,
  technologies,
  timeline,
  useCases,
} from "./content";

const navigation = [
  { label: "Sobre", href: "#sobre", region: "r-nav-sobre" },
  { label: "Tecnologias", href: "#tecnologias", region: "r-nav-tecnologias" },
  { label: "O projeto", href: "#casos-de-uso", region: "r-nav-projeto" },
  { label: "Contato", href: "#identificacao", region: "r-nav-contato" },
];

const evidenceCategoryIds: Record<string, string> = {
  "Visão geral": "evidencias-visao-geral",
  Pacientes: "evidencias-pacientes",
  Sessões: "evidencias-sessoes",
  Pagamentos: "evidencias-pagamentos",
  Perfil: "evidencias-perfil",
  Relatórios: "evidencias-relatorios",
};

const architecture = [
  { label: "Interface", value: "React", icon: Code2 },
  { label: "Comunicação", value: "API REST", icon: Workflow },
  { label: "Aplicação", value: "Spring Boot", icon: Server },
  { label: "Persistência", value: "PostgreSQL", icon: Database },
];

function SectionHeading({
  number,
  title,
  description,
  id,
}: {
  number: string;
  title: string;
  description?: string;
  id: string;
}) {
  return (
    <header className="section-heading">
      <h2 id={id}><span className="section-number">{number}.</span>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </header>
  );
}

function ProjectImage({ title, description, file }: (typeof screenshots)[number]) {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure className={`project-image ${loaded ? "is-loaded" : ""}`}>
      <div className="project-image-frame">
        <div className="image-placeholder">
          <ImageIcon aria-hidden="true" />
          <span>Não foi possível carregar esta captura.</span>
        </div>
        <img
          src={file}
          alt={`Captura da tela ${title} do PacientPlans`}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(false)}
        />
      </div>
      <figcaption>
        <span>{title}</span>
        <p>{description}</p>
      </figcaption>
    </figure>
  );
}

function DiagramCard({ title, type, description, file, format }: (typeof diagrams)[number]) {
  return (
    <figure className={`diagram-card diagram-card--${format}`}>
      <a
        className="diagram-preview"
        href={file}
        target="_blank"
        rel="noreferrer"
        aria-label={`Abrir ${title} em tamanho completo`}
      >
        <img src={file} alt={`Diagrama: ${title}`} loading="lazy" decoding="async" />
      </a>
      <figcaption>
        <div>
          <small>{type}</small>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <a href={file} target="_blank" rel="noreferrer">
          Abrir diagrama
          <ExternalLink aria-hidden="true" />
        </a>
      </figcaption>
    </figure>
  );
}

function formatVideoTime(value: number) {
  if (!Number.isFinite(value)) return "0:00";

  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function ProjectVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  };

  const seekTo = (value: number) => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = value;
    setCurrentTime(value);
  };

  const changeVolume = (value: number) => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = value;
    video.muted = value === 0;
    setVolume(value);
    setIsMuted(value === 0);
  };

  const toggleMuted = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      void document.exitFullscreen();
    } else if (playerRef.current?.requestFullscreen) {
      void playerRef.current.requestFullscreen();
    }
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className={`video-player ${isPlaying ? "is-playing" : ""}`} ref={playerRef}>
      <video
        ref={videoRef}
        src={projectVideo}
        poster={initialScreen}
        preload="metadata"
        playsInline
        onClick={togglePlayback}
        onLoadedMetadata={(event) => {
          event.currentTarget.volume = volume;
          setDuration(event.currentTarget.duration);
        }}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        Seu navegador não oferece suporte à reprodução deste vídeo.
      </video>

      {!isPlaying && (
        <button className="video-center-control" type="button" onClick={togglePlayback} aria-label="Reproduzir vídeo">
          <Play aria-hidden="true" />
        </button>
      )}

      <div className="video-controls" aria-label="Controles do vídeo">
        <input
          className="video-progress"
          type="range"
          min="0"
          max={duration || 0}
          step="0.1"
          value={currentTime}
          aria-label="Progresso do vídeo"
          onChange={(event) => seekTo(Number(event.target.value))}
          style={{ background: `linear-gradient(to right, #ff0033 ${progress}%, rgba(255, 255, 255, 0.36) ${progress}%)` }}
        />

        <div className="video-controls-row">
          <button type="button" onClick={togglePlayback} aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}>
            {isPlaying ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
          </button>
          <button type="button" onClick={toggleMuted} aria-label={isMuted ? "Ativar som" : "Silenciar vídeo"}>
            {isMuted ? <VolumeX aria-hidden="true" /> : <Volume2 aria-hidden="true" />}
          </button>
          <input
            className="video-volume"
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            aria-label="Volume"
            onChange={(event) => changeVolume(Number(event.target.value))}
          />
          <span className="video-time">{formatVideoTime(currentTime)} / {formatVideoTime(duration)}</span>
          <button className="video-fullscreen" type="button" onClick={toggleFullscreen} aria-label="Exibir em tela cheia">
            <Maximize aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <section className="comp-frame hero-frame" id="top" aria-labelledby="hero-title">
        <a className="r-brand wordmark" href="#top" aria-label="PacientPlans — início">
          PacientPlans
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a className={`${item.region} hero-nav-link`} href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        {menuOpen && (
          <nav className="mobile-menu" aria-label="Navegação para dispositivos móveis">
            {navigation.map((item) => (
              <a href={item.href} key={item.label} onClick={() => setMenuOpen(false)}>
                {item.label}
                <ChevronRight aria-hidden="true" size={18} />
              </a>
            ))}
          </nav>
        )}

        <h1 className="r-headline hero-title" id="hero-title">
          <span>Gestão clínica em um só lugar</span>
        </h1>
        <a className="r-primary-action primary-action" href="#sobre">
          Conheça o projeto
          <ArrowRight aria-hidden="true" />
        </a>

        <div className="proof-strip" aria-label="Resumo do projeto">
          <div className="proof-item">
            <LayoutDashboard aria-hidden="true" />
            <span>7 seções</span>
          </div>
          <div className="proof-item">
            <Code2 aria-hidden="true" />
            <span>React + Spring Boot</span>
          </div>
          <div className="proof-item">
            <TrendingUp aria-hidden="true" />
            <span>Projeto em evolução</span>
          </div>
        </div>

        <figure className="hero-product-image">
          <img
            src={initialScreen}
            alt="Tela inicial do PacientPlans com o dashboard de gestão clínica"
          />
        </figure>
      </section>

      <section className="content-section about-section" id="sobre" aria-labelledby="about-title">
        <div className="section-shell">
          <SectionHeading
            number="01"
            id="about-title"
            title="Menos dispersão. Mais tempo para o cuidado."
            description="O PacientPlans reúne a rotina clínica da psicóloga em uma única aplicação, conectando pacientes, agenda, finanças e indicadores."
          />

          <div className="problem-statement">
            <p>O problema</p>
            <blockquote>
              Informações clínicas espalhadas entre agendas, anotações e planilhas tornam a rotina mais lenta e dificultam uma visão clara da prática.
            </blockquote>
          </div>

          <div className="objective-grid">
            <article>
              <span>Objetivo</span>
              <h3>Centralizar a operação sem transformar o atendimento em burocracia.</h3>
            </article>
            <p>
              A proposta é oferecer um fluxo direto para organizar pacientes, planejar sessões,
              registrar movimentações financeiras e acompanhar o trabalho por meio de um dashboard.
              Cada profissional acessa apenas os próprios dados.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section technology-section" id="tecnologias" aria-labelledby="technology-title">
        <div className="section-shell">
          <SectionHeading
            number="02"
            id="technology-title"
            title="Uma arquitetura simples de entender e pronta para evoluir."
            description="A interface consome uma API REST; o backend concentra autenticação, regras de negócio e persistência dos dados."
          />

          <div className="architecture" aria-label="Arquitetura do PacientPlans">
            {architecture.map(({ label, value, icon: Icon }, index) => (
              <div className="architecture-step" key={label}>
                <div>
                  <Icon aria-hidden="true" />
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
                {index < architecture.length - 1 && <ArrowRight aria-hidden="true" className="architecture-arrow" />}
              </div>
            ))}
          </div>

          <div className="technology-list">
            {technologies.map((technology) => (
              <article key={technology.name}>
                <span>{technology.name}</span>
                <p>{technology.detail}</p>
              </article>
            ))}
          </div>

          <aside className="security-note">
            <ShieldCheck aria-hidden="true" />
            <p>
              <strong>Separação de acesso.</strong> A área administrativa cria contas, mas não acessa
              pacientes, sessões ou informações financeiras da psicóloga.
            </p>
          </aside>
        </div>
      </section>

      <section className="content-section use-cases-section" id="casos-de-uso" aria-labelledby="use-cases-title">
        <div className="section-shell">
          <SectionHeading
            number="03"
            id="use-cases-title"
            title="Sete frentes que formam uma jornada completa."
            description="Os casos de uso foram identificados a partir das funcionalidades disponíveis no frontend e nos controladores da API."
          />

          <div className="use-case-list">
            {useCases.map((useCase) => (
              <a className="use-case" href={useCase.href} key={useCase.number}>
                <span className="use-case-number">{useCase.number}</span>
                <div>
                  <h3>{useCase.title}</h3>
                  <p>{useCase.description}</p>
                </div>
                {useCase.number === "01" ? <KeyRound aria-hidden="true" /> : useCase.number === "07" ? <UserCog aria-hidden="true" /> : <ArrowRight aria-hidden="true" />}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section timeline-section" id="cronograma" aria-labelledby="timeline-title">
        <div className="section-shell">
          <SectionHeading
            number="04"
            id="timeline-title"
            title="Do código às evidências de entrega."
            description="As datas não encontradas no repositório ficaram sinalizadas para confirmação, evitando apresentar como fato um histórico que não foi documentado."
          />

          <div className="timeline-table-wrap">
            <table className="timeline-table">
              <thead>
                <tr>
                  <th scope="col">Etapa / caso de uso</th>
                  <th scope="col">Data prevista</th>
                  <th scope="col">Data realizada</th>
                  <th scope="col">Situação</th>
                </tr>
              </thead>
              <tbody>
                {timeline.map((item) => (
                  <tr key={item.scope}>
                    <th scope="row">{item.scope}</th>
                    <td data-label="Data prevista">{item.planned}</td>
                    <td data-label="Data realizada">{item.completed}</td>
                    <td data-label="Situação"><span className={item.status.startsWith("Concluído") ? "status-pill done" : "status-pill active"}>{item.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="content-section documentation-section" id="documentacao" aria-labelledby="documentation-title">
        <div className="section-shell documentation-grid">
          <SectionHeading
            number="05"
            id="documentation-title"
            title="Decisões técnicas que podem ser consultadas."
            description="Onze diagramas documentam o escopo, a arquitetura, os estados e as principais interações do PacientPlans. Abra qualquer item para consultar os detalhes em tamanho completo."
          />

          <div className="diagram-groups">
            {Array.from(new Set(diagrams.map(({ category }) => category))).map((category) => {
              const categoryDiagrams = diagrams.filter((diagram) => diagram.category === category);

              return (
                <section className="diagram-group" key={category}>
                  <header className="diagram-group-heading">
                    <h3>{category}</h3>
                    <span>{categoryDiagrams.length} {categoryDiagrams.length === 1 ? "diagrama" : "diagramas"}</span>
                  </header>
                  <div className="diagram-gallery">
                    {categoryDiagrams.map((diagram) => (
                      <DiagramCard {...diagram} key={diagram.title} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <section className="content-section evidence-section" id="evidencias" aria-labelledby="evidence-title">
        <div className="section-shell">
          <SectionHeading
            number="06"
            id="evidence-title"
            title="O produto em funcionamento."
            description="Os principais fluxos do PacientPlans, da visão geral às operações de cadastro, edição e exclusão."
          />

          <div className="evidence-groups">
            {Array.from(new Set(screenshots.map(({ category }) => category))).map((category, index) => {
              const categoryScreenshots = screenshots.filter((screenshot) => screenshot.category === category);

              return (
                <section
                  className={`evidence-group ${index === 0 ? "is-overview" : ""}`}
                  id={evidenceCategoryIds[category]}
                  key={category}
                >
                  <header className="evidence-group-heading">
                    <h3>{category}</h3>
                    <span>{categoryScreenshots.length} {categoryScreenshots.length === 1 ? "captura" : "capturas"}</span>
                  </header>
                  <div className="project-gallery">
                    {categoryScreenshots.map((screenshot) => (
                      <ProjectImage {...screenshot} key={screenshot.title} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          <section className="video-showcase" aria-labelledby="video-title">
            <header className="video-showcase-heading">
              <span className="video-icon"><Play aria-hidden="true" /></span>
              <div>
              <small>Vídeo demonstrativo · duração máxima de 5 minutos</small>
                <h3 id="video-title">PacientPlans em funcionamento.</h3>
                <p>Assista à demonstração completa sem sair do portfólio.</p>
              </div>
            </header>
            <ProjectVideo />
          </section>
        </div>
      </section>

      <section className="content-section delivery-section" id="identificacao" aria-labelledby="delivery-title">
        <div className="section-shell">
          <div className="delivery-heading">
            <h2 id="delivery-title"><span className="section-number">07.</span>Tudo reunido para a avaliação.</h2>
            <p>Antes de publicar, confirme que cada arquivo e link pode ser aberto sem solicitar permissão.</p>
          </div>

          <div className="delivery-grid">
            <article className="identity-panel">
              <Blocks aria-hidden="true" />
              <div>
                <span>Projeto</span>
                <strong>PacientPlans</strong>
              </div>
              <dl>
                <div><dt>Estudante</dt><dd>{projectInfo.student}</dd></div>
                <div><dt>Matrícula</dt><dd className="pending-value">{projectInfo.registration}</dd></div>
                <div><dt>Professor(a)</dt><dd className="pending-value">{projectInfo.professor}</dd></div>
                <div><dt>Entrega</dt><dd>{projectInfo.delivery}</dd></div>
              </dl>
            </article>

            <article className="report-panel">
              <FileText aria-hidden="true" />
              <span>Relatório de estágio</span>
              <h3>Versão atualizada em PDF</h3>
              {projectInfo.internshipReportUrl ? (
                <a href={projectInfo.internshipReportUrl} target="_blank" rel="noreferrer">Abrir relatório <ExternalLink aria-hidden="true" /></a>
              ) : (
                <span className="pending-action">Link do relatório a adicionar</span>
              )}
            </article>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-shell">
          <a className="footer-brand" href="#top">PacientPlans</a>
          <p>Portfólio de estágio · gestão clínica para psicólogas.</p>
          <a href="#top">Voltar ao início <ArrowRight aria-hidden="true" /></a>
        </div>
      </footer>
    </main>
  );
}
