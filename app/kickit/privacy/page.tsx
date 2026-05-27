import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy · KickIt',
  description: 'Privacy Policy for KickIt.',
  robots: { index: true, follow: true },
}

export default function KickItPrivacy() {
  return (
    <div className="bg-white text-black min-h-screen">
      <article className="max-w-2xl mx-auto px-6 py-12 leading-relaxed">
        <Link
          href="/kickit/"
          className="text-sm text-blue-600 hover:underline mb-6 inline-block"
        >
          ← Back to KickIt
        </Link>

        <h1 className="text-4xl font-black tracking-tight mb-3">
          Privacy Policy — KickIt
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          <strong>Effective Date:</strong> May 27, 2026
        </p>

        <p className="mb-6">
          This Privacy Policy describes how KickIt ("the App," "we," "us")
          collects, uses, and shares information when you use the App. KickIt
          is owned and operated by Viral Builders.
        </p>

        <hr className="my-8" />

        <H2>1. What we collect</H2>

        <H3>Information stored on your device</H3>
        <p>
          KickIt stores a copy of your profile and recent activity locally on
          your device using Apple's on-device storage (UserDefaults, the App
          Group container, the Keychain for your auth session):
        </p>
        <ul className="list-disc pl-6 my-3 space-y-1">
          <li>Your display name, username (@handle), and profile photo</li>
          <li>Your hometown (typed) or current city (when Live Location is on)</li>
          <li>Your settings preferences (notification scope, status visibility, dark mode)</li>
          <li>Cached friend list, hangouts, groups, chat messages, and group favorites</li>
        </ul>

        <H3>Information stored on our backend</H3>
        <p>
          KickIt is a social app — friends need to see your profile and chats
          need to reach the right people. To do that, we store the following
          on our backend (hosted by Supabase, a Postgres + auth provider):
        </p>
        <ul className="list-disc pl-6 my-3 space-y-1">
          <li>Your authenticated user ID (anonymous, Apple, Google, or email)</li>
          <li>Your username, display name, profile photo URL, hometown, and any social links (Instagram, X)</li>
          <li>The coordinate of hangouts you create (so nearby friends can see them)</li>
          <li>Your friendship graph — who you've added, who's added you, who's been accepted</li>
          <li>The groups you've created or joined, with their location if you set one</li>
          <li>Direct messages and group chat messages you send</li>
          <li>Vibe polls and the friends who've said "I'm in"</li>
          <li>Your APNs device token (so we can send you push notifications)</li>
        </ul>
        <p className="mt-3">
          Other users only see the bits of your profile you've made visible
          (name, @handle, avatar, optional socials, hometown). They see your
          chat messages only inside the chats they're in with you.
        </p>

        <H3>Information from third parties</H3>
        <p>
          If you sign in with <strong>Apple</strong> or <strong>Google</strong>,
          those providers share a stable account identifier (and an Apple
          private-relay email, if you choose). We use that only to identify
          you across devices. Sign in with Apple is the only OAuth provider
          where the email is included.
        </p>

        <H3>Location</H3>
        <p>
          When you enable Live Location, iOS shares your approximate location
          with the app. We use it to:
        </p>
        <ul className="list-disc pl-6 my-3 space-y-1">
          <li>Show hangouts and groups near you</li>
          <li>Suggest a default city for the Groups header</li>
          <li>Attach a coordinate to hangouts you create</li>
        </ul>
        <p>
          We don't continuously broadcast your location to other users. The
          only coordinate that goes to the server is the one attached to a
          hangout or group <em>you</em> create.
        </p>

        <H2>2. How we use your information</H2>
        <ul className="list-disc pl-6 my-3 space-y-1">
          <li>To run the app — show your friends, deliver messages, show nearby hangouts</li>
          <li>To send push notifications you've opted into</li>
          <li>To enforce these Terms and prevent abuse</li>
        </ul>
        <p>
          We do <strong>not</strong> sell your personal information to third
          parties. We don't run ads in KickIt (today). If that ever changes,
          we'll update this policy and notify users.
        </p>

        <H2>3. Children's privacy</H2>
        <p>
          KickIt isn't intended for children under 13. We don't knowingly
          collect personal information from children under 13. If you believe
          a child under 13 has provided information, contact us and we'll
          delete it.
        </p>

        <H2>4. Your rights</H2>
        <p>
          You can edit or delete most of your data right from inside the app:
        </p>
        <ul className="list-disc pl-6 my-3 space-y-1">
          <li>Edit your profile in Settings → Edit profile</li>
          <li>Change your photo, name, hometown, Instagram, X, anytime</li>
          <li>Leave a group or delete a hangout from the app</li>
          <li>Unfriend or block from the friends list</li>
          <li>Adjust who sees your status and who can ping you in Settings → Down to Hang / Notifications</li>
          <li>Revoke Location or Notification permission in iOS Settings → KickIt</li>
        </ul>
        <p className="mt-3">
          For complete account deletion (server-side data wipe), email{' '}
          <a
            href="mailto:viralbuildersllc@gmail.com?subject=KickIt%20%E2%80%94%20Delete%20my%20account"
            className="text-blue-600 underline"
          >
            viralbuildersllc@gmail.com
          </a>{' '}
          with the subject "KickIt — Delete my account."
        </p>

        <H2>5. Data security</H2>
        <p>
          Information on your device is protected by iOS's standard sandboxing
          and encryption. Information on our backend is stored in Supabase
          with row-level security policies — meaning your data is readable
          only by you and the users you've shared it with (friends in your
          graph, members of your groups, attendees of your hangouts). All
          traffic between the app and the backend is over HTTPS.
        </p>

        <H2>6. How long we keep things</H2>
        <p>
          Profile + relationship data stays until you delete your account or
          uninstall and stop using the app. Messages stay until you delete
          the hangout / group / friendship they live in (deletion cascades on
          the server). If you go inactive for an extended period, we may
          notify you and clean up your data on a reasonable schedule.
        </p>

        <H2>7. Changes to this policy</H2>
        <p>
          We may update this Privacy Policy. Material changes will be
          reflected by a new Effective Date at the top of this document. If
          the change is significant, we'll let you know in the app.
        </p>

        <H2>8. Contact</H2>
        <p>
          Questions, deletion requests, anything privacy-related:{' '}
          <a
            href="mailto:viralbuildersllc@gmail.com?subject=KickIt%20%E2%80%94%20Privacy"
            className="text-blue-600 underline"
          >
            viralbuildersllc@gmail.com
          </a>
        </p>

        <hr className="my-8" />
        <Link
          href="/kickit/"
          className="text-sm text-blue-600 hover:underline inline-block"
        >
          ← Back to KickIt
        </Link>
      </article>
    </div>
  )
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-black tracking-tight mt-10 mb-3">{children}</h2>
  )
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-base font-bold mt-5 mb-2">{children}</h3>
  )
}
