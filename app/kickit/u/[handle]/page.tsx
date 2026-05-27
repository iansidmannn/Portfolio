import type { Metadata } from 'next'
import InstallCard from '../../install-card'

type Props = { params: { handle: string } }

export const metadata: Metadata = {
  title: 'Add a friend · KickIt',
  description: 'Hang with friends, right now.',
  robots: { index: false, follow: false },
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
