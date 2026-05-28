import type { Metadata } from 'next'
import InstallCard from '../../install-card'

const OG_IMAGE = 'https://iansidman.com/kickit/icon.png'
const OG_TITLE = 'KickIt | Hang With Friends'
const OG_DESC = "You're invited to a group on KickIt. Tap to open."

export const metadata: Metadata = {
  title: 'Join a group · KickIt',
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

export default function GroupInvitePage() {
  return (
    <InstallCard
      emoji="🫂"
      headline="Join the group."
      subhead="Open KickIt to see it and join up."
    />
  )
}
