import type { Metadata } from 'next'
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/shared/ThemeProvider'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
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
    'ADEC Innovations',
    'Lean Six Sigma Kenya',
    'Process Improvement Kenya',
  ],
  authors: [{ name: 'Ken Tirimba Moronge', url: 'https://kenmoronge.com' }],
  creator: 'Ken Tirimba Moronge',
  publisher: 'Ken Tirimba Moronge',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kenmoronge.com',
    title: 'Ken Tirimba Moronge — Data Analyst & Web Developer',
    description:
      'I turn complex data into clear decisions and build the digital products that bring them to life.',
    siteName: 'Ken Tirimba Moronge',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ken Tirimba Moronge — Data Analyst & Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ken Tirimba Moronge — Data Analyst & Web Developer',
    description:
      'Business Process Analyst & Web Developer based in Kenya.',
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
  alternates: {
    canonical: 'https://kenmoronge.com',
  },
  verification: {
    // Add your Google Search Console verification token here when ready
    // google: 'your-token-here',
  },
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
        <PersonSchema />
        <WebsiteSchema />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Skip to main content — accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
