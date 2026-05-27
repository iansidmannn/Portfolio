import type { Metadata } from 'next'
import Link from 'next/link'
import { APP_STORE_URL, KICKIT_TAGLINE } from './config'

export const metadata: Metadata = {
  title: 'KickIt — Hang with friends, right now.',
  description:
    'A friends-only social app for making real plans, fast. See who\'s free, drop a pin, two yeses turns a vibe into a hangout.',
  alternates: { canonical: 'https://iansidman.com/kickit/' },
  themeColor: '#3B82F6',
  openGraph: {
    title: 'KickIt — Hang with friends, right now.',
    description: 'See who\'s free. Drop a pin. Two yeses → real hangout.',
    type: 'website',
    url: 'https://iansidman.com/kickit/',
    siteName: 'KickIt',
    images: [{ url: 'https://iansidman.com/kickit/icon.png', width: 1024, height: 1024 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KickIt — Hang with friends, right now.',
    description: 'See who\'s free. Drop a pin. Two yeses → real hangout.',
    images: ['https://iansidman.com/kickit/icon.png'],
  },
  icons: {
    icon: '/kickit/icon.png',
    apple: '/kickit/icon.png',
  },
  robots: { index: true, follow: true },
}

export default function KickItHome() {
  return (
    <div style={{ backgroundColor: '#fff', color: '#0F172A' }} className="min-h-screen">
      <div className="max-w-md mx-auto px-6 pt-14 pb-24">
        <Hero />
        <CtaButton />
        <ScreensGrid />
        <BigPoint
          accent="green"
          title="See who's free, right now."
          sub="The Down to Hang grid shows every friend who's available. No status posts. No DMs. One tap = chat."
          img="/kickit/screens/friends.png"
          imgAlt="Friends tab — Down to Hang grid"
        />
        <BigPoint
          accent="blue"
          title="Drop a pin. Make a plan."
          sub="Press down on the map to create a hangout. Invite friends, watch them join in real time."
          img="/kickit/screens/map.png"
          imgAlt="Map tab — live hangouts pinned"
        />
        <BigPoint
          accent="blue"
          title="Two yeses → real hangout."
          sub="Vibe polls in chat. Tap a chip, send '☕ coffee?' Two yeses and it graduates to a hangout on the map."
          img="/kickit/screens/vibe.png"
          imgAlt="A vibe poll graduating to a hangout"
        />
        <BigPoint
          accent="green"
          title="Groups for the regulars."
          sub="Soccer Saturdays. Trivia Tuesdays. Build a group, share an invite link, plan inside."
          img="/kickit/screens/groups.png"
          imgAlt="Groups tab — public groups in your area"
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
        width={92}
        height={92}
        className="mx-auto mb-7 rounded-[22px]"
        style={{ boxShadow: '0 10px 30px rgba(59, 130, 246, 0.25)' }}
      />
      <h1 className="text-[44px] font-black tracking-tight leading-tight mb-3">
        KickIt.
      </h1>
      <p className="text-xl font-bold" style={{ color: '#475569' }}>
        {KICKIT_TAGLINE}
      </p>
    </div>
  )
}

function CtaButton() {
  return (
    <a
      href={APP_STORE_URL}
      className="block w-full text-center font-bold text-lg py-4 rounded-2xl mb-14 active:scale-[0.98] transition-transform"
      style={{
        backgroundColor: '#3B82F6',
        color: '#fff',
        boxShadow: '0 12px 28px rgba(59, 130, 246, 0.35)',
      }}
    >
      Get KickIt on the App Store
    </a>
  )
}

function ScreensGrid() {
  return (
    <div className="grid grid-cols-3 gap-2 mb-16">
      <PhoneFrame src="/kickit/screens/hero1.png" alt="KickIt home" />
      <PhoneFrame src="/kickit/screens/hero2.png" alt="KickIt map" />
      <PhoneFrame src="/kickit/screens/hero3.png" alt="KickIt vibe poll" />
    </div>
  )
}

function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ aspectRatio: '1179 / 2556', backgroundColor: '#EFF6FF' }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  )
}

function BigPoint({
  accent,
  title,
  sub,
  img,
  imgAlt,
}: {
  accent: 'blue' | 'green'
  title: string
  sub: string
  img: string
  imgAlt: string
}) {
  const tint = accent === 'blue' ? '#EFF6FF' : '#F0FDF4'
  return (
    <div className="mb-20">
      <h2 className="text-[28px] font-black tracking-tight leading-[1.15] mb-3">
        {title}
      </h2>
      <p className="text-[15px] leading-relaxed mb-7" style={{ color: '#475569' }}>
        {sub}
      </p>
      <div
        className="rounded-2xl overflow-hidden max-w-[280px] mx-auto"
        style={{ aspectRatio: '1179 / 2556', backgroundColor: tint }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img}
          alt={imgAlt}
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
      <h2 className="text-[28px] font-black tracking-tight leading-[1.15] mb-2">
        The more friends you have,
      </h2>
      <h2 className="text-[28px] font-black tracking-tight leading-[1.15] mb-6">
        the more you'll never be bored.
      </h2>
      <a
        href={APP_STORE_URL}
        className="inline-block font-bold text-base py-3.5 px-9 rounded-2xl active:scale-[0.98] transition-transform"
        style={{ backgroundColor: '#3B82F6', color: '#fff' }}
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
      style={{ borderTop: '1px solid #E2E8F0', color: '#64748B' }}
    >
      <p className="mb-3">
        Made by{' '}
        <a
          href="https://iansidman.com"
          className="underline-offset-2 hover:underline"
          style={{ color: '#3B82F6' }}
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
      <p className="mt-4 text-xs" style={{ color: '#94A3B8' }}>
        © {new Date().getFullYear()} Viral Builders
      </p>
    </footer>
  )
}
