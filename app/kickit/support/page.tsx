import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Support · KickIt',
  description: 'Help with KickIt — accounts, notifications, hangouts, groups.',
  robots: { index: true, follow: true },
}

export default function KickItSupport() {
  return (
    <div className="bg-white text-black min-h-screen">
      <article className="max-w-xl mx-auto px-6 py-12">
        <Link
          href="/kickit/"
          className="text-sm text-blue-600 hover:underline mb-6 inline-block"
        >
          ← Back to KickIt
        </Link>

        <h1 className="text-4xl font-black tracking-tight mb-8">Support</h1>

        <Q q="Can I change my username after I sign up?">
          <p>
            No — your username is locked when you reserve it during onboarding.
            You can edit your display name, photo, hometown, and social links
            anytime from Settings → Edit profile.
          </p>
        </Q>

        <Q q="Why didn't my friend get my hangout invite?">
          <p>
            Three things to check: (1) you have to actually be friends — handle
            search → send request → they accept. (2) they need notifications on
            for KickIt in iOS Settings. (3) check their notification scope in
            Settings → Notifications — they may have set "I only get
            notifications from Favorites" and you're not one yet.
          </p>
        </Q>

        <Q q="How do I make a real hangout from a chat?">
          <p>
            Open a chat with a friend or in a group. Tap a vibe chip like ☕
            coffee, then send. Once two people have tapped "I'm in," tap "Make
            it official" — fill in the where + when and it lands as a real
            hangout on the map. Everyone who said "I'm in" auto-attends.
          </p>
        </Q>

        <Q q="How do I find a hangout someone made?">
          <p>
            Open the Map tab. Live hangouts within your radius show as pins.
            Tap a pin to see details and who's going. Or — if someone shared
            an invite link with you — tapping it opens the hangout directly.
          </p>
        </Q>

        <Q q="What's the difference between Down to Hang and Notifications in Settings?">
          <p>
            "Down to Hang" controls who can see your green-dot availability
            and whose status YOU see in your friends grid. "Notifications"
            controls who gets pinged when you go available, and who can ping
            you. They're separate so you can be visible to all friends but
            only ping favorites, for example.
          </p>
        </Q>

        <Q q="I lost my profile picture after updating the app.">
          <p>
            Sign in with Apple (or Google) on the welcome screen — your photo
            is stored on our server and downloads back automatically. If
            you're on an older anonymous session, sign in with Apple first
            and we'll sync everything.
          </p>
        </Q>

        <Q q="How do I delete my account?">
          <p>
            Email{' '}
            <a
              href="mailto:viralbuildersllc@gmail.com?subject=KickIt%20%E2%80%94%20Delete%20my%20account"
              className="text-blue-600 underline"
            >
              viralbuildersllc@gmail.com
            </a>{' '}
            with the subject "KickIt — Delete my account" and we'll wipe your
            profile, friendships, hangouts, groups, and messages from the
            server. Uninstalling alone removes the on-device copy but not the
            server-side data.
          </p>
        </Q>

        <Q q="How do I scan a friend's QR code?">
          <p>
            Friends tab → 🔍 (top right) → Find friends → tap Scan QR. Point
            it at their KickIt QR (visible from Find friends → Show my QR on
            their phone). The scanner auto-recognizes KickIt codes and sends
            a friend request.
          </p>
        </Q>

        <Q q="Why is the Down to Hang section empty?">
          <p>
            Either you don't have friends yet, or none of your friends are
            currently marked available. Once they tap their availability orb,
            they'll show up. You can also widen the audience in Settings →
            Down to Hang.
          </p>
        </Q>

        <Q q="Is my location shared with strangers?">
          <p>
            No. The only coordinate that hits our server is the one attached
            to hangouts and groups <em>you</em> create. Your live location is
            used on-device only to filter what shows up in your map view.
            See the{' '}
            <Link href="/kickit/privacy/" className="text-blue-600 underline">
              Privacy Policy
            </Link>{' '}
            for the full breakdown.
          </p>
        </Q>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-600 mb-4">
            Still stuck? Email us with "kickit" in the subject line.
          </p>
          <a
            href="mailto:viralbuildersllc@gmail.com?subject=KickIt%20%E2%80%94%20"
            className="inline-block bg-black text-white font-bold px-7 py-3.5 rounded-2xl active:scale-[0.98] transition-transform"
          >
            Contact Viral Builders
          </a>
        </div>
      </article>
    </div>
  )
}

function Q({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details className="border-b border-gray-200 py-5 group">
      <summary className="flex justify-between items-start gap-4 cursor-pointer font-semibold text-base list-none">
        <span>{q}</span>
        <span className="text-blue-600 text-2xl font-bold leading-none group-open:rotate-45 transition-transform shrink-0">
          +
        </span>
      </summary>
      <div className="text-gray-600 text-[15px] leading-relaxed mt-3">
        {children}
      </div>
    </details>
  )
}
