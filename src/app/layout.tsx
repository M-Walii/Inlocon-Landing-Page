import './globals.css'
import type { Metadata } from 'next'
import Providers from '@/components/layout/Providers'
import { Header } from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ScrollToTopButton } from '@/components/common/ScrollToTopButton'

// Site metadata for SEO and browser tab
export const metadata: Metadata = {
  title: 'Inlocon - Öffentliche Ausschreibungen & Aufträge',
  description: 'Öffentliche Ausschreibungen, Aufträge & Geschäftskontakte. Alles aus einer Quelle!',
};

// Root layout for the entire app
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/png/icon.png" sizes="any" />
      </head>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <ScrollToTopButton />
        </Providers>
      </body>
    </html>
  )
}