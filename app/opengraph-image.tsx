import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Leonardo Americo'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 100px',
          background: '#0A0A0F',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Gradiente decorativo */}
        <div
          style={{
            position: 'absolute',
            top: '-200px',
            left: '-100px',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(200,168,78,0.08) 0%, transparent 70%)',
          }}
        />

        {/* Linha lateral dourada */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '4px',
            background: 'linear-gradient(180deg, #C8A84E 0%, transparent 100%)',
            opacity: 0.7,
          }}
        />

        {/* Domínio */}
        <span
          style={{
            fontFamily: 'monospace',
            fontSize: '14px',
            letterSpacing: '0.3em',
            color: '#C8A84E',
            opacity: 0.6,
            textTransform: 'uppercase',
            marginBottom: '32px',
          }}
        >
          leoamerico.me
        </span>

        {/* Nome */}
        <div
          style={{
            fontSize: '88px',
            fontWeight: 300,
            lineHeight: 1,
            color: '#F5F0E8',
            marginBottom: '28px',
            letterSpacing: '-0.01em',
          }}
        >
          Leonardo{' '}
          <span style={{ color: '#C8A84E' }}>Americo</span>
        </div>

        {/* Cargo */}
        <div
          style={{
            fontSize: '28px',
            fontWeight: 300,
            color: '#9CA3AF',
            letterSpacing: '0.02em',
            marginBottom: '48px',
          }}
        >
          Fundador &amp; CEO — Env Neo Ltda
        </div>

        {/* Divisor */}
        <div
          style={{
            width: '240px',
            height: '1px',
            background: 'rgba(200,168,78,0.25)',
            marginBottom: '28px',
          }}
        />

        {/* Lema */}
        <span
          style={{
            fontFamily: 'monospace',
            fontSize: '13px',
            letterSpacing: '0.2em',
            color: '#C8A84E',
            opacity: 0.45,
          }}
        >
          MACHINA CUSTODIT · HOMO GUBERNAT
        </span>
      </div>
    ),
    { ...size }
  )
}
