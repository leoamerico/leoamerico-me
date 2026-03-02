'use client'

import { useEffect, useRef, useState } from 'react'
import { VERSES } from '../lib/verses'

const STORAGE_KEY = 'envneo-verse-hidden'
const LANG_KEY    = 'envneo-verse-lang'

type Lang = 'pt' | 'en'

interface VerseData {
  text: string
  refs: readonly string[]
  tooltip: string
  ariaLabel: string
  hide: string
  show: string
}

export default function VerseBlock() {
  const [hidden,  setHidden]  = useState(false)
  const [lang,    setLang]    = useState<Lang>('pt')
  const [open,    setOpen]    = useState(false)   // mobile accordion
  const [visible, setVisible] = useState(false)   // scroll reveal
  const [tooltip, setTooltip] = useState(false)   // hover state
  const ref = useRef<HTMLElement>(null)

  /* ── Restore preferences from localStorage ─── */
  useEffect(() => {
    try {
      setHidden(localStorage.getItem(STORAGE_KEY) === 'true')
      const saved = localStorage.getItem(LANG_KEY)
      if (saved === 'pt' || saved === 'en') setLang(saved)
    } catch { /* SSR / private browsing — fail silently */ }
  }, [])

  /* ── Scroll reveal via IntersectionObserver ── */
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.25 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  function toggleHide() {
    const next = !hidden
    setHidden(next)
    try { localStorage.setItem(STORAGE_KEY, String(next)) } catch { /* noop */ }
  }

  function toggleLang() {
    const next: Lang = lang === 'pt' ? 'en' : 'pt'
    setLang(next)
    try { localStorage.setItem(LANG_KEY, next) } catch { /* noop */ }
  }

  const v = VERSES.legado[lang]

  return (
    <section
      ref={ref}
      aria-label={v.ariaLabel}
      className={`verse-block${visible ? ' verse-block--visible' : ''}`}
    >
      {/* ── Controls row ───────────────────────────────────── */}
      <div className="verse-controls">
        <button
          className="verse-toggle-btn"
          onClick={toggleHide}
          aria-expanded={!hidden}
          aria-controls="verse-content"
        >
          {hidden ? v.show : v.hide}
        </button>
        <button
          className="verse-lang-btn"
          onClick={toggleLang}
          aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
        >
          {lang === 'pt' ? 'EN' : 'PT'}
        </button>
      </div>

      {/* ── Content — hidden via CSS height transition ─────── */}
      <div
        id="verse-content"
        className={`verse-content${hidden ? ' verse-content--hidden' : ''}`}
        aria-hidden={hidden}
      >
        {/* Mobile: accordion (details/summary) */}
        <details className="verse-accordion">
          <summary className="verse-accordion-summary">
            <span className="verse-accordion-icon" aria-hidden="true">+</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.3em', opacity: 0.5 }}>
              {lang === 'pt' ? 'VERSO' : 'VERSE'}
            </span>
          </summary>
          <VerseText v={v} tooltip={tooltip} setTooltip={setTooltip} />
        </details>

        {/* Desktop: always-visible blockquote */}
        <div className="verse-desktop">
          <VerseText v={v} tooltip={tooltip} setTooltip={setTooltip} />
        </div>
      </div>
    </section>
  )
}

/* ── Shared verse body ────────────────────────────────────────── */
function VerseText({
  v,
  tooltip,
  setTooltip,
}: {
  v: VerseData
  tooltip: boolean
  setTooltip: (b: boolean) => void
}) {
  return (
    <figure
      className="verse-figure"
      onMouseEnter={() => setTooltip(true)}
      onMouseLeave={() => setTooltip(false)}
      onFocus={() => setTooltip(true)}
      onBlur={() => setTooltip(false)}
      tabIndex={0}
      aria-describedby="verse-tooltip"
    >
      <blockquote className="verse-quote">
        {v.text.split('\n').map((line, i) => (
          <span key={i} style={{ display: 'block' }}>{line}</span>
        ))}
      </blockquote>
      <figcaption className="verse-caption">
        {v.refs.join(' · ')}
      </figcaption>

      {/* Tooltip */}
      <span
        id="verse-tooltip"
        role="tooltip"
        className={`verse-tooltip${tooltip ? ' verse-tooltip--visible' : ''}`}
      >
        {v.tooltip.split('\n').map((line, i) => (
          <span key={i} style={{ display: 'block' }}>{line}</span>
        ))}
      </span>
    </figure>
  )
}
