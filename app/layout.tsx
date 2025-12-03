import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import LanguageProvider from '@/components/LanguageProvider'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'VHAKACHAYI Cultural Tours | Where Ancient Stories Meet Modern Adventure',
  description: 'Rediscover Zimbabwe\'s soul through authentic cultural journeys, sacred mountain climbs, and traditional food encounters. We reconnect you to the land, the elders, and the spirit of Africa.',
  keywords: 'Zimbabwe cultural tours, diaspora homecoming, sacred mountain climbing, traditional Shona food, community-based tourism, spiritual journey Africa',
  openGraph: {
    title: 'VHAKACHAYI Cultural Tours',
    description: 'Where Ancient Stories Meet Modern Adventure',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-earth-50 text-earth-900">
        <LanguageProvider>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
