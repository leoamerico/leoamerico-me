import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Leonardo Americo',
  description: 'Fundador e CEO da Env Neo Ltda. Tecnologia de governança pública — Uberlândia, Brasil.',
  metadataBase: new URL('https://leoamerico.me'),
  openGraph: {
    title: 'Leonardo Americo',
    description: 'Fundador da Env Neo. Criador do Govevia GRP.',
    url: 'https://leoamerico.me',
    siteName: 'Leonardo Americo',
    locale: 'pt_BR',
    type: 'profile',
  },
  twitter: { card: 'summary', title: 'Leonardo Americo', description: 'Fundador da Env Neo. Criador do Govevia GRP.' },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0A0F',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${dmSans.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  )
}
