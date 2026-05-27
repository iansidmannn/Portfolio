import type { Metadata } from 'next'
import Link from 'next/link'
import { APP_STORE_URL, KICKIT_TAGLINE } from './config'

export const metadata: Metadata = {
  title: 'KickIt — Hang with friends, right now.',
  description:
    'A friends-only social app for making real plans, fast. See who\'s free, drop a pin, two yeses turns a vibe into a hangout.',
  alternates: { canonical: 'https://iansidman.com/kickit/' },
  openGraph: {
    title: 'KickIt — Hang with friends, right now.',
    description: 'See who\'s free. Drop a pin. Two yeses → real hangout.',
    type: 'website',
    url: 'https://iansidman.com/kickit/',
    siteName: 'KickIt',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KickIt — Hang with friends, right now.',
    description: 'See who\'s free. Drop a pin. Two yeses → real hangout.',
  },
  robots: { index: true, follow: true },
}

export default function KickItHome() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-md mx-auto px-6 pt-12 pb-24">
        <Hero />
        <CtaButton />
        <ScreensGrid />
        <BigPoint
          title="See who's free, right now."
          sub="The Down to Hang grid shows every friend who's available. No status posts. No DMs. One tap = chat."
          img="/kickit/screens/friends.png"
          imgAlt="Friends tab — Down to Hang grid"
        />
        <BigPoint
          title="Drop a pin. Make a plan."
          sub="Press down on the map to create a hangout. Invite friends, watch them join in real time."
          img="/kickit/screens/map.png"
          imgAlt="Map tab — live hangouts pinned"
        />
        <BigPoint
          title="Two yeses → real hangout."
          sub="Vibe polls in chat. Tap a chip, send '☕ coffee?' Two yeses and it graduates to a hangout on the map."
          img="/kickit/screens/vibe.png"
          imgAlt="A vibe poll graduating to a hangout"
        />
        <BigPoint
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
    <div className="text-center mb-8">
      <div className="text-6xl mb-6">👋</div>
      <h1 className="text-5xl font-black tracking-tight leading-tight mb-3">
        KickIt.
      </h1>
      <p className="text-xl font-bold text-gray-300">{KICKIT_TAGLINE}</p>
    </div>
  )
}

function CtaButton() {
  return (
    <a
      href={APP_STORE_URL}
      className="block w-full text-center bg-white text-black font-bold text-lg py-4 rounded-2xl mb-12 shadow-xl shadow-blue-500/10 active:scale-[0.98] transition-transform"
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
      className="bg-gray-900 rounded-xl overflow-hidden"
      style={{ aspectRatio: '1179 / 2556' }}
    >
      {/* Falls back to the bg color until Ian drops a real screenshot
          into /public/kickit/screens/. Layout already reserves the
          right slot — adding the image later is one-step. */}
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
  title,
  sub,
  img,
  imgAlt,
}: {
  title: string
  sub: string
  img: string
  imgAlt: string
}) {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-black tracking-tight leading-tight mb-3">
        {title}
      </h2>
      <p className="text-base text-gray-400 leading-relaxed mb-6">{sub}</p>
      <div
        className="bg-gray-900 rounded-2xl overflow-hidden max-w-[280px] mx-auto"
        style={{ aspectRatio: '1179 / 2556' }}
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
    <div className="text-center mb-12">
      <h2 className="text-3xl font-black tracking-tight leading-tight mb-3">
        The more friends you have,
        <br />
        the more you'll never be bored again.
      </h2>
      <a
        href={APP_STORE_URL}
        className="inline-block bg-white text-black font-bold text-base py-3 px-8 rounded-2xl mt-6 active:scale-[0.98] transition-transform"
      >
        Get KickIt
      </a>
    </div>
  )
}

function Footer() {
  return (
    <footer className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
      <p className="mb-3">
        Made by{' '}
        <a
          href="https://iansidman.com"
          className="text-gray-300 hover:text-white underline-offset-2"
        >
          Viral Builders
        </a>
      </p>
      <div className="flex gap-4 justify-center text-xs">
        <Link href="/kickit/terms/" className="hover:text-gray-300">
          Terms
        </Link>
        <Link href="/kickit/privacy/" className="hover:text-gray-300">
          Privacy
        </Link>
        <Link href="/kickit/support/" className="hover:text-gray-300">
          Support
        </Link>
      </div>
      <p className="mt-4 text-xs text-gray-600">
        © {new Date().getFullYear()} Viral Builders
      </p>
    </footer>
  )
}
