import type { Metadata } from 'next'
import InstallCard from '../../install-card'

type Props = { params: { handle: string } }

const OG_IMAGE = 'https://iansidman.com/kickit/icon.png'
const OG_TITLE = 'KickIt | Hang With Friends'
const OG_DESC = "A friend wants to connect on KickIt. Tap to open."

export const metadata: Metadata = {
  title: 'Add a friend · KickIt',
  description: OG_DESC,
  robots: { index: false, follow: false },
  openGraph: {
    title: OG_TITLE,
    description: OG_DESC,
    type: 'website',
    siteName: 'KickIt',
    images: [{ url: OG_IMAGE, width: 1024, height: 1024 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: OG_TITLE,
    description: OG_DESC,
    images: [OG_IMAGE],
  },
  icons: { icon: '/kickit/icon.png', apple: '/kickit/icon.png' },
}

export default function FriendAddPage({ params }: Props) {
  const cleaned = decodeURIComponent(params.handle).replace(/[^a-z0-9_]/gi, '')
  return (
    <InstallCard
      emoji="👋"
      headline={cleaned ? `Add @${cleaned}` : 'Add a friend'}
      subhead="Open KickIt to send the request."
    />
  )
}
