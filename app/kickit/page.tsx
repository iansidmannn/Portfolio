import type { Metadata } from 'next'
import Link from 'next/link'
import { APP_STORE_URL } from './config'

const BRAND_BLUE = '#3B82F6'
const BRAND_GREEN = '#33B84D'
const INK = '#0F172A'
const MUTED = '#475569'
const SUBTLE = '#94A3B8'
const HAIRLINE = '#E2E8F0'
const TINT_BLUE = '#EFF6FF'
const TINT_GREEN = '#F0FDF4'

export const metadata: Metadata = {
  title: 'KickIt — We ended boredom.',
  description:
    'See who\'s free, drop a pin, two yeses turns a vibe into a real hangout. KickIt is the friends-only app for spontaneous plans.',
  alternates: { canonical: 'https://iansidman.com/kickit/' },
  themeColor: BRAND_BLUE,
  openGraph: {
    title: 'KickIt — We ended boredom.',
    description: 'Tap a dot. Hang with friends, right now.',
    type: 'website',
    url: 'https://iansidman.com/kickit/',
    siteName: 'KickIt',
    images: [{ url: 'https://iansidman.com/kickit/icon.png', width: 1024, height: 1024 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KickIt — We ended boredom.',
    description: 'Tap a dot. Hang with friends, right now.',
    images: ['https://iansidman.com/kickit/icon.png'],
  },
  icons: { icon: '/kickit/icon.png', apple: '/kickit/icon.png' },
  robots: { index: true, follow: true },
}

export default function KickItHome() {
  return (
    <div style={{ backgroundColor: '#fff', color: INK }} className="min-h-screen">
      <div className="max-w-md mx-auto px-6 pt-12 pb-24">
        <Hero />
        <BoredomHero />
        <CtaButton label="Get KickIt on the App Store" />
        <BigPoint
          accent="green"
          title="See who's free, right now."
          sub="Down to Hang at a glance. Every friend who's down for something shows up green. One tap = chat."
          img="/kickit/screens/friends.png"
        />
        <BigPoint
          accent="green"
          title="One tap to say you're free."
          sub="Hit the orb when you're up for something. Your friends get a soft ping. No status posts. No DMs."
          img="/kickit/screens/available.png"
        />
        <BigPoint
          accent="blue"
          title="Drop a pin. Make a plan."
          sub="Press down on the map to start a hangout right where you are. Invite friends. Watch them join."
          img="/kickit/screens/pin.png"
        />
        <BigPoint
          accent="blue"
          title="Live hangouts near you."
          sub="The map shows every hangout your friends are at right now. Tap a pin to see who's going."
          img="/kickit/screens/map.png"
        />
        <BigPoint
          accent="green"
          title="Groups for the regulars."
          sub="Soccer Saturdays. Trivia Tuesdays. Build a group, share an invite link, plan inside."
          img="/kickit/screens/groups.png"
        />
        <Closer />
        <Footer />
      </div>
    </div>
  )
}

function Hero() {
  return (
    <div className="text-center mb-10">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/kickit/icon.png"
        alt="KickIt"
        width={88}
        height={88}
        className="mx-auto mb-6 rounded-[22px]"
        style={{ boxShadow: `0 10px 30px ${BRAND_BLUE}40` }}
      />
      <h1 className="text-[42px] font-black tracking-tight leading-tight mb-3">
        KickIt.
      </h1>
      <p
        className="text-[19px] font-bold tracking-tight"
        style={{ color: MUTED }}
      >
        Hang with friends, right now.
      </p>
    </div>
  )
}

/// The headline moment — "We ended boredom, just tap this dot." Big
/// phone screenshot of the actual tutorial frame so the user gets the
/// vibe in one look. This is what they install for.
function BoredomHero() {
  return (
    <div className="mb-12">
      <h2
        className="text-[34px] font-black tracking-tight leading-[1.08] mb-1 text-center"
        style={{ color: INK }}
      >
        We ended boredom.
      </h2>
      <p
        className="text-[18px] font-bold leading-tight text-center mb-7"
        style={{ color: BRAND_BLUE }}
      >
        Just tap the dot.
      </p>
      <div
        className="rounded-[28px] overflow-hidden mx-auto"
        style={{
          maxWidth: 320,
          aspectRatio: '1179 / 2556',
          backgroundColor: TINT_BLUE,
          boxShadow: `0 28px 60px ${BRAND_BLUE}33`,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/kickit/screens/hero-boredom.png"
          alt="We ended boredom, just tap this dot."
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
    </div>
  )
}

function CtaButton({ label }: { label: string }) {
  return (
    <a
      href={APP_STORE_URL}
      className="block w-full text-center font-bold text-[17px] py-4 rounded-2xl mb-20 active:scale-[0.98] transition-transform"
      style={{
        backgroundColor: BRAND_BLUE,
        color: '#fff',
        boxShadow: `0 12px 28px ${BRAND_BLUE}59`,
      }}
    >
      {label}
    </a>
  )
}

function BigPoint({
  accent,
  title,
  sub,
  img,
}: {
  accent: 'blue' | 'green'
  title: string
  sub: string
  img: string
}) {
  const tint = accent === 'blue' ? TINT_BLUE : TINT_GREEN
  const shadowColor = accent === 'blue' ? `${BRAND_BLUE}26` : `${BRAND_GREEN}26`
  return (
    <div className="mb-24">
      <h2
        className="text-[28px] font-black tracking-tight leading-[1.12] mb-3"
        style={{ color: INK }}
      >
        {title}
      </h2>
      <p className="text-[15px] leading-relaxed mb-7" style={{ color: MUTED }}>
        {sub}
      </p>
      <div
        className="rounded-[22px] overflow-hidden mx-auto"
        style={{
          maxWidth: 280,
          aspectRatio: '1179 / 2556',
          backgroundColor: tint,
          boxShadow: `0 20px 40px ${shadowColor}`,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  )
}

function Closer() {
  return (
    <div className="text-center mb-14">
      <h2
        className="text-[28px] font-black tracking-tight leading-[1.15] mb-2"
        style={{ color: INK }}
      >
        The more friends you have,
      </h2>
      <h2
        className="text-[28px] font-black tracking-tight leading-[1.15] mb-7"
        style={{ color: INK }}
      >
        the more you'll never be bored.
      </h2>
      <a
        href={APP_STORE_URL}
        className="inline-block font-bold text-base py-3.5 px-9 rounded-2xl active:scale-[0.98] transition-transform"
        style={{
          backgroundColor: BRAND_BLUE,
          color: '#fff',
          boxShadow: `0 10px 24px ${BRAND_BLUE}40`,
        }}
      >
        Get KickIt
      </a>
    </div>
  )
}

function Footer() {
  return (
    <footer
      className="mt-16 pt-8 text-center text-sm"
      style={{ borderTop: `1px solid ${HAIRLINE}`, color: MUTED }}
    >
      <p className="mb-3">
        Made by{' '}
        <a
          href="https://iansidman.com"
          className="hover:underline"
          style={{ color: BRAND_BLUE }}
        >
          Viral Builders
        </a>
      </p>
      <div className="flex gap-4 justify-center text-xs">
        <Link href="/kickit/terms/" className="hover:underline">
          Terms
        </Link>
        <Link href="/kickit/privacy/" className="hover:underline">
          Privacy
        </Link>
        <Link href="/kickit/support/" className="hover:underline">
          Support
        </Link>
      </div>
      <p className="mt-4 text-xs" style={{ color: SUBTLE }}>
        © {new Date().getFullYear()} Viral Builders
      </p>
    </footer>
  )
}
