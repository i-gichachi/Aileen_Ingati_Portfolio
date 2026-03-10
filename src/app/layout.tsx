import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { BackToTop } from '@/components/ui/BackToTop'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['normal', 'italic'],
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aileen Ingati | Senior Legal Counsel and IP Specialist',
  description: 'Senior Legal Counsel and IP Specialist with over a decade of experience across litigation, intellectual property, corporate governance and regulatory advisory in East Africa.',
  keywords: 'Senior Legal Counsel, IP Specialist, Intellectual Property, Patent Prosecution, Corporate Governance, Litigation Management, East Africa, Kenya, WIPO, Regulatory Compliance',
  openGraph: {
    title: 'Aileen Ingati | Senior Legal Counsel and IP Specialist',
    description: 'Senior Legal Counsel and IP Specialist with over a decade of experience across litigation, intellectual property, corporate governance and regulatory advisory in East Africa.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-warm-ivory text-charcoal-text font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}

