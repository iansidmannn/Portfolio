import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service · KickIt',
  description: 'Terms of Service for KickIt.',
  robots: { index: true, follow: true },
}

export default function KickItTerms() {
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
          Terms of Service — KickIt
        </h1>
        <p className="text-sm text-gray-500 mb-2">
          <strong>Last updated:</strong> May 27, 2026 · Viral Builders ·
          viralbuildersllc@gmail.com
        </p>
        <p className="text-sm text-gray-500 mb-8 italic">
          See also: <Link href="/kickit/privacy/" className="underline">Privacy Policy</Link> ·{' '}
          <Link href="/kickit/support/" className="underline">Support</Link>
        </p>

        <p className="mb-6">
          Hey — thanks for using KickIt. KickIt is made by Viral Builders, a small
          independent app studio. These Terms cover what you're agreeing to when
          you use the app. We've tried to write them like a person, with the
          legal parts kept tight enough to actually matter. By installing or
          using KickIt, you agree to what's below. If you don't, no hard
          feelings — just don't use it.
        </p>

        <hr className="my-8" />

        <H2>1. Who can use KickIt</H2>
        <p>
          You need to be at least 13 (or older, if that's the digital-consent
          age where you live). If you're under 18, you need a parent or
          guardian's permission.
        </p>

        <H2>2. License</H2>
        <p>
          We grant you a limited, non-exclusive, non-transferable, revocable
          license to install and use the app on Apple-branded devices you own
          or control, for personal, non-commercial use. This works alongside
          Apple's{' '}
          <a
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            className="text-blue-600 underline"
          >
            Licensed Application End User License Agreement
          </a>
          .
        </p>

        <H2>3. Don't do this stuff</H2>
        <p>When you're using KickIt, please don't:</p>
        <ul className="list-disc pl-6 my-3 space-y-1">
          <li>Break any law.</li>
          <li>
            Reverse-engineer, decompile, scrape, or extract anything from the
            app or our servers.
          </li>
          <li>Bypass or disable app features in ways the UI doesn't offer.</li>
          <li>Harass, threaten, dox, or defame anyone — friends or strangers.</li>
          <li>
            Use KickIt to organize meetups intended to harm someone or break
            the law.
          </li>
          <li>Hammer our infrastructure with bots or scripts.</li>
          <li>
            Resell or commercially exploit the app without us saying yes in
            writing.
          </li>
          <li>Use the app on a device you don't own or control.</li>
          <li>Impersonate another real person.</li>
        </ul>
        <p>If you do, we may suspend or close your access without notice.</p>

        <H2>4. Stuff you put in the app</H2>
        <p>
          Content you create — your name, profile photo, username, chat
          messages, group names, hangout titles, vibe polls, social links —
          is yours. We just need a small license to actually run the app: store
          it, display it to the friends and groups you've chosen to share with,
          sync it across your devices. We don't own your content. You're
          responsible for it though — make sure you have the right to use
          anything you add (your own face in your profile photo, your own
          words in messages), and don't post anything that infringes on someone
          else or breaks the law. We can remove content at our discretion if
          it crosses a line, but we have no obligation to police it.
        </p>

        <H2>5. Meeting people in real life</H2>
        <p>
          KickIt helps you plan to hang out with people in person. Real-world
          interactions are inherently risky — we can't and don't verify the
          identity, age, intentions, or safety of any other user, including
          people you may not know personally. Use common sense, meet in public
          places, and trust your gut. If anything feels off, don't go.
        </p>
        <p className="mt-3">
          We're a tool that helps friends coordinate. We're not a chaperone, a
          background-check service, or a guarantor of anyone's behavior. What
          happens at a hangout is between the people there.
        </p>

        <H2>6. Location data</H2>
        <p>
          KickIt uses your location (when you allow it) to surface nearby
          hangouts and groups, and to attach a coordinate to hangouts you
          create. You control this from iOS Settings → KickIt → Location at
          any time. We don't continuously track or sell location data — see
          the <Link href="/kickit/privacy/" className="text-blue-600 underline">Privacy Policy</Link> for the full breakdown.
        </p>

        <H2>7. Notifications</H2>
        <p>
          We send push notifications for things like incoming friend requests,
          DMs, group chats, and friends going "available." You can scope what
          you receive — and what you send — in Settings → Notifications, or
          disable everything in iOS Settings.
        </p>

        <H2>8. The "as-is" part</H2>
        <p>
          Heads up — this section gets formal because it has to be enforceable.
          The short version: we built KickIt with care but we can't promise
          it'll be perfect, error-free, or always up.
        </p>
        <p className="mt-3 text-xs uppercase tracking-wide">
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE APP AND ALL
          CONTENT, FEATURES, AND SERVICES ARE PROVIDED "AS IS" AND "AS
          AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED,
          OR STATUTORY, INCLUDING WITHOUT LIMITATION ANY WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT,
          ACCURACY, OR QUIET ENJOYMENT.
        </p>
        <p className="mt-3 text-xs uppercase tracking-wide">
          WE DON'T WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE,
          SECURE, FREE OF VIRUSES, OR THAT DEFECTS WILL BE CORRECTED. YOU USE
          THE APP AT YOUR OWN RISK.
        </p>

        <H2>9. Limits on what we owe</H2>
        <p>
          KickIt is a small indie app. If something goes sideways, here's the
          cap on what we're on the hook for:
        </p>
        <p className="mt-3 text-xs uppercase tracking-wide">
          (a) TO THE MAXIMUM EXTENT PERMITTED BY LAW, VIRAL BUILDERS, ITS
          OFFICERS, MEMBERS, EMPLOYEES, AGENTS, AND LICENSORS WILL NOT BE
          LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
          EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE,
          DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES — REGARDLESS OF THE
          LEGAL THEORY AND WHETHER OR NOT WE'VE BEEN ADVISED OF THE POSSIBILITY.
        </p>
        <p className="mt-3 text-xs uppercase tracking-wide">
          (b) OUR TOTAL LIABILITY FOR ANY AND ALL CLAIMS RELATED TO KICKIT
          WILL NOT EXCEED THE GREATER OF (i) WHAT YOU PAID US FOR THE APP IN
          THE TWELVE MONTHS BEFORE THE CLAIM, OR (ii) FIFTY U.S. DOLLARS
          ($50.00).
        </p>
        <p className="mt-3 italic text-gray-500 text-sm">
          Some places (parts of the EU, certain states) don't allow these
          limits — there, they apply only as far as the law allows.
        </p>

        <H2>10. If you cause us a problem</H2>
        <p>
          If your use of KickIt causes someone to come after us — like, you use
          the app to break a law, post something you didn't have the right to
          post, harass or harm someone you met through the app — you agree to
          cover our costs (including reasonable legal fees) for dealing with
          it. We can take over the defense ourselves if we want, and you'd
          help us out as needed.
        </p>

        <H2>11. How disputes get resolved</H2>
        <p className="font-bold">
          Please read this — it changes how you'd take us to court if something
          went really wrong.
        </p>
        <p className="mt-3">
          <strong>(a) Arbitration instead of court.</strong> If we ever have a
          dispute, you and Viral Builders agree to handle it through binding
          individual arbitration with the American Arbitration Association
          under their Consumer Arbitration Rules — in Los Angeles County,
          California, or remotely. Either of us can still take small-claims
          court individually if we want.
        </p>
        <p className="mt-3">
          <strong>(b) No class actions.</strong> Claims are individual only —
          no class actions, no representative proceedings, no consolidating
          with other people's claims.
        </p>
        <p className="mt-3">
          <strong>(c) No jury trial.</strong> Both sides waive any right to a
          jury trial.
        </p>
        <p className="mt-3">
          <strong>(d) 30-day opt-out.</strong> If you don't want to be bound
          by arbitration, you can opt out by emailing
          viralbuildersllc@gmail.com within 30 days of first accepting these
          Terms. Include your name, the app you use, and that you're opting
          out. The rest of these Terms still apply.
        </p>
        <p className="mt-3">
          <strong>(e) Exceptions.</strong> Either of us can still go to court
          for IP infringement claims or unauthorized use of the app.
        </p>

        <H2>12. Stuff out of our control</H2>
        <p>
          If we can't deliver because of something outside our reasonable
          control — natural disasters, internet outages, third-party services
          going down (Apple, Supabase, etc.), governmental stuff — we're not
          on the hook.
        </p>

        <H2>13. Changes and our rights</H2>
        <p>
          We may update the app, change features, or update these Terms over
          time. Anything not specifically given to you in these Terms, we keep.
          If we update Terms, the "Last updated" date at the top reflects the
          change — keep using KickIt and you're accepting the update.
        </p>

        <H2>14. Apple's role</H2>
        <p>
          Apple distributes KickIt through the App Store but doesn't make it
          or stand behind it — that's us. A few things that need to be said
          for App Store distribution to work:
        </p>
        <ul className="list-disc pl-6 my-3 space-y-1 text-sm">
          <li>
            Your license is limited to using KickIt on Apple-branded devices
            you own or control, per Apple's Usage Rules.
          </li>
          <li>
            If KickIt needs support or maintenance, that's on us. Apple isn't
            obligated to help.
          </li>
          <li>
            If KickIt doesn't work as promised under any warranty we're
            providing, you can notify Apple and they'll refund whatever you
            paid (if anything). Beyond that, warranty handling is on us.
          </li>
          <li>
            If you (or anyone) has a claim about KickIt — product liability,
            regulatory, consumer protection, privacy, whatever — we handle it.
            Not Apple.
          </li>
          <li>
            If someone claims KickIt infringes their IP, we deal with the
            claim. Not Apple.
          </li>
          <li>
            You confirm you're not in a country the U.S. has an embargo on,
            and you're not on a U.S. sanctions list.
          </li>
          <li>
            Apple and Apple's subsidiaries are third-party beneficiaries of
            these Terms — meaning they can enforce them against you if they
            ever needed to.
          </li>
        </ul>

        <H2>15. Ending things</H2>
        <p>
          You can stop using KickIt any time — just uninstall it (and delete
          your account from Settings if you want your server-side data gone
          too). We can suspend or close your access if you break these Terms,
          or for any other reason. A few sections survive after we part ways:
          any content licenses you've granted, the disclaimers, liability
          limits, indemnification, arbitration, governing law, and severability.
        </p>

        <H2>16. Which law applies</H2>
        <p>
          These Terms are governed by the laws of the State of California, USA
          (without the conflict-of-laws bits). For anything not covered by
          arbitration, we both agree to the courts in Los Angeles County,
          California.
        </p>

        <H2>17. The fine print on the fine print</H2>
        <p>
          If any part of these Terms doesn't hold up legally, the rest still
          applies. If we don't enforce something right away, it doesn't mean
          we've given up the right to do it later. These Terms — plus our
          Privacy Policy and Apple's standard EULA — are the full agreement
          between us.
        </p>

        <H2>18. Get in touch</H2>
        <p>
          <strong>Viral Builders</strong>
          <br />
          viralbuildersllc@gmail.com
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
