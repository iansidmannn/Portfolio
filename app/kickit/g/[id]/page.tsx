import type { Metadata } from 'next'
import InstallCard from '../../install-card'

export const metadata: Metadata = {
  title: 'Join a group · KickIt',
  description: 'Hang with friends, right now.',
  robots: { index: false, follow: false },
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
