import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://iansidman.com'),
  title: "Ian's Portfolio | Viral & Growth Marketer With 150M Views",
  description: '150M+ views. Viral content creator, brand strategist, and growth marketer.',
  keywords: ['content creator', 'viral marketing', 'growth marketing', 'brand consultant'],
  authors: [{ name: 'Ian Sidman' }],
  openGraph: {
    title: "Ian's Portfolio | Viral & Growth Marketer With 150M Views",
    description: "Ian's Portfolio | Viral & Growth Marketer With 150M Views",
    type: 'website',
    images: [
      {
        url: '/coverimg.png',
        width: 1200,
        height: 630,
        alt: "Ian's Portfolio",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ian's Portfolio | Viral & Growth Marketer With 150M Views",
    description: "Ian's Portfolio | Viral & Growth Marketer With 150M Views",
    images: ['/coverimg.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
        <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
        {children}
      </body>
    </html>
  )
}

