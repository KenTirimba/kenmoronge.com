import type { Metadata } from 'next'
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/shared/ThemeProvider'
import NavbarWrapper from '@/components/layout/NavbarWrapper'
import FooterWrapper from '@/components/layout/FooterWrapper'
import { PersonSchema, WebsiteSchema } from '@/components/shared/StructuredData'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kenmoronge.com'),
  title: {
    default: 'Ken Tirimba Moronge — Data Analyst & Web Developer',
    template: '%s | Ken Tirimba Moronge',
  },
  description:
    'Business Process Analyst and Web Developer based in Kenya. I turn complex data into clear decisions and build the digital products that bring them to life.',
  keywords: [
    'Data Analyst Kenya',
    'Business Process Analyst Kenya',
    'Business Intelligence Analyst',
    'Operations Analyst Kenya',
    'Web Developer Kenya',
    'Power BI Developer',
    'SQL Analyst',
    'Python Analyst',
    'Next.js Developer Kenya',
    'Ken Tirimba Moronge',
    'Ken Moronge',
    'Lean Six Sigma Kenya',
  ],
  authors: [{ name: 'Ken Tirimba Moronge', url: 'https://kenmoronge.com' }],
  creator: 'Ken Tirimba Moronge',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kenmoronge.com',
    title: 'Ken Tirimba Moronge — Data Analyst & Web Developer',
    description:
      'I turn complex data into clear decisions and build the digital products that bring them to life.',
    siteName: 'Ken Tirimba Moronge',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ken Tirimba Moronge — Data Analyst & Web Developer',
    description: 'Business Process Analyst & Web Developer based in Kenya.',
    images: ['/images/og-image.jpg'],
    creator: '@M_Tirimba',
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
  alternates: { canonical: 'https://kenmoronge.com' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bricolage.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600&display=swap" rel="stylesheet" />
        <PersonSchema />
        <WebsiteSchema />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
          >
            Skip to main content
          </a>
          <NavbarWrapper />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <FooterWrapper />
        </ThemeProvider>
      </body>
    </html>
  )
}
