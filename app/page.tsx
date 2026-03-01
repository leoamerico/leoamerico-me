import type { Metadata } from 'next'
import ProfilePhoto from './ProfilePhoto'

export const metadata: Metadata = {
  title: 'Leonardo Americo — Curriculum',
  alternates: { canonical: 'https://leoamerico.me' },
}

/* ── SVG inline: esfera Env Neo (símbolo pai) ──────────────── */
function EnvNeoSymbol({ size = 36 }: { size?: number }) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} aria-hidden="true">
      {/* Esfera completa */}
      <circle cx="60" cy="60" r="42" fill="none" stroke="#C8A84E" strokeWidth="1.5" opacity="0.25" />
      {/* Meridianos sutis */}
      <line x1="60" y1="18" x2="60" y2="42" stroke="#C8A84E" strokeWidth="1" opacity="0.18" strokeLinecap="round" />
      <line x1="60" y1="78" x2="60" y2="102" stroke="#C8A84E" strokeWidth="1" opacity="0.18" strokeLinecap="round" />
      {/* Equador — fragmento ativo (marca Govevia) */}
      <ellipse cx="60" cy="60" rx="42" ry="10.5" fill="none" stroke="#C8A84E" strokeWidth="3.2" />
    </svg>
  )
}

/* ── SVG inline: logo Govevia (equador cerimonial) ─────────── */
function GoveviaSymbol({ size = 28 }: { size?: number }) {
  const c = '#1E3A5F'
  return (
    <svg viewBox="0 0 160 160" width={size} height={size} aria-hidden="true">
      <g transform="translate(80,80)">
        <path d="M 6 -64 A 64 64 0 1 1 -6 -64" fill="none" stroke={c} strokeWidth="1.5" opacity="0.18" strokeLinecap="round" />
        <line x1="0" y1="-50" x2="0" y2="-18" stroke={c} strokeWidth="1" opacity="0.12" strokeLinecap="round" />
        <line x1="0" y1="18" x2="0" y2="64" stroke={c} strokeWidth="1" opacity="0.12" strokeLinecap="round" />
        <ellipse cx="0" cy="0" rx="64" ry="16" fill="none" stroke="#FAFAF8" strokeWidth="5" />
      </g>
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
    accent: '#1E3A5F',
    href: 'https://govevia.com.br',
    portfolio: 'https://envneo.com.br/marcas/govevia',
    symbol: <GoveviaSymbol size={22} />,
    status: 'Ativo',
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
            sameAs: ['https://envneo.com.br', 'https://govevia.com.br', 'https://substack.com/profile/21150910-leonardo-americo-jose-ribeiro'],
          }),
        }}
      />

      <main>

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
          position: 'relative',
          overflow: 'hidden',
        }}>

          {/* Aurora mesh */}
          <div className="hero-aurora" aria-hidden="true" />

          {/* Símbolo */}
          <div style={{ marginBottom: 'var(--space-xl)', position: 'relative', zIndex: 1 }}>
            <EnvNeoSymbol size={52} />
          </div>

          {/* Label de contexto */}
          <span className="label" style={{ position: 'relative', zIndex: 1 }}>Curriculum · Autoridade por Obra</span>

          {/* Bloco principal: foto + textos */}
          <div className="hero-inner">
            {/* Foto */}
            <ProfilePhoto />

            {/* Textos */}
            <div style={{ flex: 1 }}>
              {/* Nome */}
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 8vw, 5.5rem)',
                fontWeight: 300,
                letterSpacing: '-0.01em',
                lineHeight: 1,
                color: 'var(--parchment)',
                marginBottom: 'var(--space-md)',
              }}>
                Leonardo<br />
                <span style={{ color: 'var(--gold)', opacity: 0.9 }}>Americo</span>
              </h1>

              {/* Posição */}
              <p style={{
                fontFamily: 'var(--font-display)',
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
                fontSize: '0.72rem',
                letterSpacing: '0.18em',
                color: 'var(--gold)',
                opacity: 0.55,
                marginTop: 'var(--space-lg)',
              }}>
                Machina custodit. Homo gubernat.
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            SOBRE
            ════════════════════════════════════════════════════ */}
        <section className="section">
          <div className="container">
            <span className="label">Sobre</span>
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
            <span className="label">Posição Atual</span>
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
                fontSize: '0.68rem',
                letterSpacing: '0.12em',
                color: 'var(--gold)',
                opacity: 0.65,
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
                fontSize: '0.62rem',
                color: 'var(--slate)',
                opacity: 0.5,
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
            <span className="label">Obra</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
              {OBRAS.map((obra) => (
                <div key={obra.code} className="glass-card" style={{
                  borderLeft: `2px solid ${obra.accent}`,
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
                        lineHeight: 1,
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
                    fontSize: '0.62rem',
                    letterSpacing: '0.15em',
                    color: `${obra.accent}`,
                    opacity: 0.8,
                    display: 'block',
                    marginBottom: 'var(--space-md)',
                  }}>
                    {obra.role} · {obra.status}
                  </span>
                  {/* Descrição */}
                  <p style={{ fontSize: '0.87rem', color: 'var(--slate-light)', lineHeight: 1.85 }}>
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
                        fontSize: '0.65rem',
                        letterSpacing: '0.12em',
                        color: 'var(--gold)',
                        opacity: 0.7,
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
                          fontSize: '0.6rem',
                          letterSpacing: '0.1em',
                          color: 'var(--slate)',
                          opacity: 0.55,
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
            <span className="label">Princípios</span>
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
            <span className="label">Contato</span>
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
                fontSize: '0.68rem',
                color: 'var(--slate)',
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
              <span style={{ color: 'var(--parchment)', opacity: 0.5 }}>Env Neo</span>
              <span style={{ fontSize: '0.55rem', opacity: 0.35 }}>envneo.com.br</span>
            </span>
          </a>

          {/* Lema */}
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.15em',
            color: 'var(--slate)',
            opacity: 0.4,
          }}>
            Machina custodit. Homo gubernat.
          </span>
        </footer>

      </main>
    </>
  )
}
