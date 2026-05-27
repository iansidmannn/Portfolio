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
        <CtaButton label="Get KickIt on the App Store" />
        <BoredomHero />
        <BigPoint accent="green" title="One tap to say you're free." img="/kickit/screens/available.png" />
        <BigPoint accent="green" title="See who's free, right now." img="/kickit/screens/friends.png" />
        <BigPoint accent="blue" title="Drop a pin. Make a plan." img="/kickit/screens/pin.png" />
        <BigPoint accent="blue" title="Live hangouts near you." img="/kickit/screens/map.png" />
        <BigPoint accent="green" title="Groups for the regulars." img="/kickit/screens/groups.png" />
        <Closer />
        <Footer />
      </div>
    </div>
  )
}

function Hero() {
  return (
    <div className="text-center mb-8">
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

/// Cropped tutorial frame — just the green orb + the blue "We ended
/// boredom" card. The visual pitch sits between the install button
/// (above) and the feature walkthrough (below).
function BoredomHero() {
  return (
    <div className="mb-20">
      <div
        className="rounded-[28px] overflow-hidden mx-auto"
        style={{
          maxWidth: 320,
          aspectRatio: '1179 / 1480',  // matches the cropped image dims
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
      className="flex items-center justify-center gap-3 w-full font-bold text-[17px] py-4 rounded-2xl mb-10 active:scale-[0.98] transition-transform"
      style={{
        backgroundColor: BRAND_BLUE,
        color: '#fff',
        boxShadow: `0 12px 28px ${BRAND_BLUE}59`,
      }}
    >
      <AppleLogo />
      <span>{label}</span>
    </a>
  )
}

/// Inline Apple logo — matches Apple's standard "Download on the App
/// Store" mark proportions, scaled to read at the button's font size.
function AppleLogo() {
  return (
    <svg
      width="19"
      height="22"
      viewBox="0 0 384 512"
      fill="currentColor"
      aria-hidden="true"
      style={{ marginTop: -2 }}
    >
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  )
}

function BigPoint({
  accent,
  title,
  img,
}: {
  accent: 'blue' | 'green'
  title: string
  img: string
}) {
  const tint = accent === 'blue' ? TINT_BLUE : TINT_GREEN
  const shadowColor = accent === 'blue' ? `${BRAND_BLUE}26` : `${BRAND_GREEN}26`
  return (
    <div className="mb-24">
      <h2
        className="text-[28px] font-black tracking-tight leading-[1.12] mb-7 text-center"
        style={{ color: INK }}
      >
        {title}
      </h2>
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
        className="text-[28px] font-black tracking-tight leading-[1.15] mb-7"
        style={{ color: INK }}
      >
        You'll never be bored again.
      </h2>
      <a
        href={APP_STORE_URL}
        className="inline-flex items-center gap-2.5 font-bold text-base py-3.5 px-8 rounded-2xl active:scale-[0.98] transition-transform"
        style={{
          backgroundColor: BRAND_BLUE,
          color: '#fff',
          boxShadow: `0 10px 24px ${BRAND_BLUE}40`,
        }}
      >
        <AppleLogo />
        <span>Get KickIt</span>
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
