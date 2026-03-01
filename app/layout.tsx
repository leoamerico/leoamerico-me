import type { Metadata, Viewport } from 'next'
import { Sora, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
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
    images: [{ url: '/assets/og.jpg', width: 1200, height: 630, alt: 'Leonardo Americo' }],
  },
  twitter: { card: 'summary_large_image', title: 'Leonardo Americo', description: 'Fundador da Env Neo. Criador do Govevia GRP.', images: ['/assets/og.jpg'] },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0A0F',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  )
}
