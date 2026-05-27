import type { Metadata } from 'next'
import InstallCard from '../../install-card'

export const metadata: Metadata = {
  title: 'Join a hangout · KickIt',
  description: 'Hang with friends, right now.',
  robots: { index: false, follow: false },
}

export default function HangoutInvitePage() {
  return (
    <InstallCard
      emoji="🎉"
      headline="You're invited."
      subhead="Open KickIt to see the hangout and join."
    />
  )
}
