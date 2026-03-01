import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Leonardo Americo — Curriculum',
  alternates: { canonical: 'https://leoamerico.me' },
}

/* ── SVG inline: esfera Env Neo (símbolo pai) ──────────────── */
function EnvNeoSymbol({ size = 36 }: { size?: number }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true" shapeRendering="geometricPrecision">
      <title>Env Neo</title>
      {/* Esfera — contorno ghost */}
      <circle cx="50" cy="50" r="40" fill="none" stroke="var(--gold)" strokeWidth="1.2" opacity="0.3" />
      {/* Meridianos simétricos — eixo de rotação */}
      <line x1="50" y1="10.8" x2="50" y2="37.64" stroke="var(--gold)" strokeWidth="0.8" opacity="0.3" strokeLinecap="round" />
      <line x1="50" y1="62.36" x2="50" y2="89.2" stroke="var(--gold)" strokeWidth="0.8" opacity="0.3" strokeLinecap="round" />
      {/* Equador — faixa ativa com profundidade */}
      <ellipse cx="50" cy="50" rx="40" ry="12.36" fill="none" stroke="url(#eq-env)" strokeWidth="3.2" />
    </svg>
  )
}

/* ── SVG inline: esfera Env Live (monitoramento em tempo real) ── */
function EnvLiveSymbol({ size = 28 }: { size?: number }) {
  /* Esfera com gaps laterais de 30° (janelas de observação).
     Gap direito centrado em 0°: remove de 345° a 15°.
     Gap esquerdo centrado em 180°: remove de 165° a 195°.
     Arco superior: 15° → 165° (150°, large-arc=0, sweep=0 — sentido anti-horário passando pelo topo).
     Arco inferior: 195° → 345° (150°, large-arc=0, sweep=0 — sentido anti-horário passando pelo fundo). */
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true" shapeRendering="geometricPrecision">
      <title>Env Live</title>
      {/* Arco superior — gap lateral 30° em cada lado */}
      <path
        d="M 88.64 60.35 A 40 40 0 0 0 11.36 60.35"
        fill="none" stroke="var(--envlive)" strokeWidth="1.2" opacity="0.3" strokeLinecap="round"
      />
      {/* Arco inferior — simétrico */}
      <path
        d="M 11.36 39.65 A 40 40 0 0 0 88.64 39.65"
        fill="none" stroke="var(--envlive)" strokeWidth="1.2" opacity="0.3" strokeLinecap="round"
      />
      {/* Meridianos simétricos — mesma proporção do sistema */}
      <line x1="50" y1="10.8" x2="50" y2="37.64" stroke="var(--envlive)" strokeWidth="0.8" opacity="0.3" strokeLinecap="round" />
      <line x1="50" y1="62.36" x2="50" y2="89.2" stroke="var(--envlive)" strokeWidth="0.8" opacity="0.3" strokeLinecap="round" />
      {/* Equador — faixa ativa com profundidade */}
      <ellipse cx="50" cy="50" rx="40" ry="12.36" fill="none" stroke="url(#eq-live)" strokeWidth="3.2" />
    </svg>
  )
}

/* ── SVG inline: logo Govevia (equador cerimonial) ─────────── */
function GoveviaSymbol({ size = 28 }: { size?: number }) {
  const c = 'var(--govevia)'
  /* Arco: círculo r=40 centrado em (50,50) com gap de 30° no topo.
     Ponto a 15° do topo: x = 50 ± 40·sin(15°), y = 50 − 40·cos(15°)
     sin(15°) ≈ 0.2588 → dx ≈ 10.35 | cos(15°) ≈ 0.9659 → dy ≈ 38.64 */
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true" shapeRendering="geometricPrecision">
      <title>Govevia</title>
      {/* Arco da esfera — gap de 30° no topo (gesto deliberado) */}
      <path
        d="M 60.35 11.36 A 40 40 0 1 1 39.65 11.36"
        fill="none" stroke={c} strokeWidth="1.2" opacity="0.3" strokeLinecap="round"
      />
      {/* Meridianos simétricos — mesma proporção que Env Neo */}
      <line x1="50" y1="10.8" x2="50" y2="37.64" stroke={c} strokeWidth="0.8" opacity="0.3" strokeLinecap="round" />
      <line x1="50" y1="62.36" x2="50" y2="89.2" stroke={c} strokeWidth="0.8" opacity="0.3" strokeLinecap="round" />
      {/* Equador — faixa ativa com profundidade */}
      <ellipse cx="50" cy="50" rx="40" ry="12.36" fill="none" stroke="url(#eq-gov)" strokeWidth="3.2" />
    </svg>
  )
}

const OBRAS = [
  {
    code: 'GOVEVIA',
    name: 'Govevia',
    role: 'Criador & Arquiteto',
    tagline: 'Governança Pública Executável',
    desc: 'Plataforma GRP que transforma obrigações normativas em controles técnicos auditáveis. Cobre LGPD, LAI, LRF, Lei 14.129/21, CF/88 Art. 37 e marcos TCU/CGU.',
    accent: 'var(--govevia)',
    href: 'https://govevia.com.br',
    portfolio: 'https://envneo.com.br/marcas/govevia',
    symbol: <GoveviaSymbol size={28} />,
    status: 'Ativo',
  },
  {
    code: 'ENVLIVE',
    name: 'Env Live',
    role: 'Criador & Arquiteto',
    tagline: 'Painel de Governança ao Vivo',
    desc: 'Dashboard de monitoramento em tempo real para indicadores de governança pública. Observabilidade contínua sobre conformidade, prazos normativos e métricas operacionais.',
    accent: 'var(--envlive)',
    href: 'https://envlive.com.br',
    portfolio: 'https://envneo.com.br/marcas/envlive',
    symbol: <EnvLiveSymbol size={28} />,
    status: 'Planejado',
  },
]

const PRINCÍPIOS = [
  { id: 'I', title: 'Autoridade humana', def: 'Máquina executa. Humano governa. Autoridade é sempre do agente — nunca do sistema.' },
  { id: 'II', title: 'Claims verificáveis', def: 'Sem evidência, sem claim. Toda afirmação carrega lastro operacional ou não existe.' },
  { id: 'III', title: 'Conformidade por arquitetura', def: 'Compliance não é camada de auditoria. É consequência inevitável de um sistema bem desenhado.' },
  { id: 'IV', title: 'Open/Closed', def: 'Extensível sem alterar o núcleo. Comportamento novo, núcleo intocado.' },
]

export default function Curriculum() {
  return (
    <>
      {/* ── ld+json ─────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Leonardo Americo',
            url: 'https://leoamerico.me',
            jobTitle: 'Fundador & CEO',
            worksFor: {
              '@type': 'Organization',
              name: 'Env Neo Ltda',
              url: 'https://envneo.com.br',
            },
            address: { '@type': 'PostalAddress', addressLocality: 'Uberlândia', addressRegion: 'MG', addressCountry: 'BR' },
            email: 'mailto:contato@envneo.com.br',
            sameAs: ['https://envneo.com.br', 'https://govevia.com.br', 'https://envlive.com.br', 'https://substack.com/profile/21150910-leonardo-americo-jose-ribeiro'],
          }),
        }}
      />

      <main>

        {/* ── Shared SVG gradient defs (single source, avoids ID collision) ── */}
        <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
          <defs>
            <linearGradient id="eq-env" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.35" />
              <stop offset="50%" stopColor="var(--gold)" stopOpacity="1" />
              <stop offset="100%" stopColor="var(--gold)" stopOpacity="0.35" />
            </linearGradient>
            <linearGradient id="eq-gov" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--govevia)" stopOpacity="0.35" />
              <stop offset="50%" stopColor="var(--govevia)" stopOpacity="1" />
              <stop offset="100%" stopColor="var(--govevia)" stopOpacity="0.35" />
            </linearGradient>
            <linearGradient id="eq-live" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--envlive)" stopOpacity="0.35" />
              <stop offset="50%" stopColor="var(--envlive)" stopOpacity="1" />
              <stop offset="100%" stopColor="var(--envlive)" stopOpacity="0.35" />
            </linearGradient>
          </defs>
        </svg>

        {/* ════════════════════════════════════════════════════
            HERO
            ════════════════════════════════════════════════════ */}
        <section style={{
          minHeight: '100svh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: `var(--space-3xl) var(--side-pad)`,
          maxWidth: 'var(--container)',
          margin: '0 auto',
        }}>

          {/* Símbolo */}
          <div style={{ marginBottom: 'var(--space-xl)' }}>
            <EnvNeoSymbol size={52} />
          </div>

          {/* Label de contexto */}
          <span className="label">Curriculum · Autoridade por Obra</span>

          {/* Nome */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            fontWeight: 300,
            letterSpacing: '-0.01em',
            lineHeight: 1.15,
            color: 'var(--parchment)',
            marginBottom: 'var(--space-md)',
          }}>
            Leonardo<br />
            <span style={{ color: 'var(--gold)' }}>Americo</span>
          </h1>

          {/* Posição */}
          <p style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
            fontWeight: 300,
            color: 'var(--slate-light)',
            letterSpacing: '0.02em',
            marginBottom: 'var(--space-xl)',
          }}>
            Fundador & CEO — Env Neo Ltda
          </p>

          {/* Lema */}
          <div className="divider" style={{ maxWidth: '280px' }} />
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            letterSpacing: '0.15em',
            color: 'var(--gold)',
            opacity: 0.88,
            marginTop: 'var(--space-lg)',
          }}>
            Machina custodit. Homo gubernat.
          </p>
        </section>

        {/* ════════════════════════════════════════════════════
            SOBRE
            ════════════════════════════════════════════════════ */}
        <section className="section">
          <div className="container">
            <h2 className="label">Sobre</h2>
            <div className="callout">
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.1rem, 2.5vw, 1.45rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                lineHeight: 1.8,
                color: 'var(--parchment)',
              }}>
                Construo sistemas que transformam obrigação em arquitetura — onde a conformidade
                não é auditoria retroativa, mas consequência estrutural de um design correto.
              </p>
            </div>
            <p style={{
              marginTop: 'var(--space-xl)',
              fontSize: '0.9rem',
              color: 'var(--slate-light)',
              lineHeight: 1.9,
              maxWidth: '60ch',
            }}>
              Uberlândia, Minas Gerais — Brasil
            </p>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            POSIÇÃO ATUAL
            ════════════════════════════════════════════════════ */}
        <section className="section">
          <div className="container">
            <h2 className="label">Posição Atual</h2>
            <div className="entry">
              <span className="entry-label">2024 — presente</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <a href="https://envneo.com.br" target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <EnvNeoSymbol size={22} />
                  <span className="entry-title">Env Neo Ltda</span>
                </a>
              </div>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                color: 'var(--gold)',
                opacity: 0.88,
                marginTop: '0.2rem',
              }}>
                Fundador & CEO
              </p>
              <p className="entry-sub" style={{ marginTop: 'var(--space-sm)' }}>
                Holding de tecnologia dedicada à governança pública executável.
                Cria e opera marcas técnicas com conformidade por arquitetura — onde a máquina garante,
                o humano governa.
              </p>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--slate-light)',
                opacity: 0.85,
                marginTop: 'var(--space-sm)',
              }}>
                CNPJ 36.207.211/0001-47 · Uberlândia MG
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            OBRA
            ════════════════════════════════════════════════════ */}
        <section className="section">
          <div className="container">
            <h2 className="label">Obra</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
              {OBRAS.map((obra) => (
                <div key={obra.code} style={{
                  borderLeft: `2px solid ${obra.accent}`,
                  paddingLeft: 'var(--space-lg)',
                }}>
                  {/* Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                    {obra.symbol}
                    <a
                      href={obra.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.6rem',
                        fontWeight: 300,
                        color: 'var(--parchment)',
                        lineHeight: 1.15,
                      }}
                    >
                      {obra.name}
                    </a>
                  </div>
                  {/* Tagline */}
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: '0.95rem',
                    color: 'var(--slate-light)',
                    marginBottom: 'var(--space-sm)',
                  }}>
                    {obra.tagline}
                  </p>
                  {/* Papel */}
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.12em',
                    color: 'var(--gold)',
                    opacity: 0.88,
                    display: 'block',
                    marginBottom: 'var(--space-md)',
                  }}>
                    {obra.role} · {obra.status}
                  </span>
                  {/* Descrição */}
                  <p style={{ fontSize: '0.9rem', color: 'var(--slate-light)', lineHeight: 1.85 }}>
                    {obra.desc}
                  </p>
                  {/* Links */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginTop: 'var(--space-md)', alignItems: 'center' }}>
                    <a
                      href={obra.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        letterSpacing: '0.1em',
                        color: 'var(--gold)',
                        opacity: 0.88,
                      }}
                    >
                      {obra.href.replace('https://', '')} ↗
                    </a>
                    {'portfolio' in obra && obra.portfolio && (
                      <a
                        href={obra.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          letterSpacing: '0.1em',
                          color: 'var(--slate-light)',
                          opacity: 0.85,
                        }}
                      >
                        Perfil no portfólio Env Neo ↗
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            PRINCÍPIOS
            ════════════════════════════════════════════════════ */}
        <section className="section">
          <div className="container">
            <h2 className="label">Princípios</h2>
            <div>
              {PRINCÍPIOS.map((p) => (
                <div key={p.id} className="principle">
                  <span className="principle-id">{p.id}</span>
                  <p className="principle-title">{p.title}</p>
                  <p className="principle-def">{p.def}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            CONTATO
            ════════════════════════════════════════════════════ */}
        <section className="section">
          <div className="container">
            <h2 className="label">Contato</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              <a
                href="mailto:contato@envneo.com.br"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                  fontWeight: 300,
                  color: 'var(--parchment)',
                  borderBottom: '1px solid var(--gold-muted)',
                  paddingBottom: '0.2rem',
                  display: 'inline-block',
                  transition: 'color 0.3s, border-color 0.3s',
                }}
              >
                contato@envneo.com.br
              </a>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--slate-light)',
                letterSpacing: '0.1em',
                marginTop: 'var(--space-sm)',
              }}>
                Uberlândia · Minas Gerais · Brasil
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            FOOTER
            ════════════════════════════════════════════════════ */}
        <footer style={{
          padding: 'var(--space-xl) var(--side-pad)',
          borderTop: '1px solid var(--gold-muted)',
          maxWidth: 'var(--container)',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--space-md)',
        }}>
          {/* Seal Env Neo */}
          <a
            href="https://envneo.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="seal"
            aria-label="Env Neo — envneo.com.br"
          >
            <EnvNeoSymbol size={18} />
            <span style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
              <span style={{ color: 'var(--parchment)', opacity: 0.8 }}>Env Neo</span>
              <span style={{ fontSize: '0.7rem', color: 'var(--slate-light)' }}>envneo.com.br</span>
            </span>
          </a>

          {/* Lema */}
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            letterSpacing: '0.12em',
            color: 'var(--slate-light)',
            opacity: 0.85,
          }}>
            Machina custodit. Homo gubernat.
          </span>
        </footer>

      </main>
    </>
  )
}
