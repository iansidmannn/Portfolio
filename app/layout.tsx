import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://iansidman.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ian's Portfolio | Growth Marketer 250M Views",
  description: '250M+ views. Viral content creator, brand strategist, and growth marketer.',
  keywords: ['content creator', 'viral marketing', 'growth marketing', 'growth hacker', 'startups', 'startup grwowth'],
  authors: [{ name: 'Ian Sidman' }],
  icons: {
    icon: [
      { url: `${siteUrl}/nextwinner.png`, sizes: 'any' },
      { url: `${siteUrl}/nextwinner.png`, type: 'image/png', sizes: '32x32' },
      { url: `${siteUrl}/nextwinner.png`, type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: `${siteUrl}/nextwinner.png`, sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Ian's Portfolio | Growth Marketer 250M Views",
    description: '250M+ views. Viral content creator, brand strategist, and growth marketer.',
    type: 'website',
    url: siteUrl,
    siteName: "Ian's Portfolio",
    images: [
      {
        url: `${siteUrl}/nextwinner.png`,
        width: 1200,
        height: 1200,
        alt: "Ian's Portfolio",
        type: 'image/png',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ian's Portfolio | Growth Marketer 250M Views",
    description: '250M+ views. Viral content creator, brand strategist, and growth marketer.',
    images: [`${siteUrl}/nextwinner.png`],
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

