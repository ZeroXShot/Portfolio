import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Header, Footer } from '@/components/layout'
import { seoConfig } from '@/config'
import './globals.css'

// Fuentes
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

// Metadatos globales
export const metadata: Metadata = {
  title: {
    default: seoConfig.title,
    template: `%s | Joaquín González`,
  },
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  authors: [{ name: 'Joaquín Jesús González Vázquez de Agredos' }],
  creator: 'Joaquín González',
  metadataBase: new URL(seoConfig.siteUrl),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: seoConfig.siteUrl,
    siteName: 'Joaquín González Portfolio',
    title: seoConfig.title,
    description: seoConfig.description,
    images: [
      {
        url: seoConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Joaquín González - Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seoConfig.title,
    description: seoConfig.description,
    images: [seoConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
