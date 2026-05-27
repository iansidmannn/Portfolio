import type { Metadata } from 'next'
import Link from 'next/link'
import { APP_STORE_URL } from './config'

const BRAND_BLUE = '#3B82F6'
const BRAND_BLUE_DEEP = '#1D4ED8'
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
    'A friends-only social app for making real plans, fast. See who\'s free, drop a pin, two yeses turns a vibe into a real hangout.',
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
    <div style={{ backgroundColor: '#fff', color: INK }} className="min-h-screen overflow-hidden">
      {/* Inline keyframes — used by the live-dot pulse + the hero
          background glow. Keeping it page-local so the rest of
          iansidman.com stays untouched. */}
      <style>{`
        @keyframes kickit-pulse {
          0%, 100% { transform: scale(1); opacity: 0.55; }
          50%      { transform: scale(1.45); opacity: 0; }
        }
        @keyframes kickit-float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
      `}</style>

      <HeroBlock />
      <div className="max-w-md mx-auto px-6">
        <ScreensTriptych />
        <BoredomHero />
        <Section accent="green" title="One tap to say you're free." img="/kickit/screens/available.png" />
        <Section accent="green" title="See who's free, right now." img="/kickit/screens/friends.png" />
        <Section accent="blue"  title="Drop a pin. Make a plan." img="/kickit/screens/pin.png" />
        <Section accent="blue"  title="Live hangouts near you." img="/kickit/screens/map.png" />
        <Section accent="green" title="Groups for the regulars." img="/kickit/screens/groups.png" />
        <Closer />
        <Footer />
      </div>
    </div>
  )
}

// MARK: - Hero

function HeroBlock() {
  return (
    <div
      className="relative pt-14 pb-12 mb-6"
      style={{
        background: `radial-gradient(ellipse at 50% 0%, ${BRAND_BLUE}1a 0%, transparent 60%)`,
      }}
    >
      {/* Floating green glow behind the logo for warmth */}
      <div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: 30,
          width: 260, height: 260,
          background: `radial-gradient(circle, ${BRAND_GREEN}38 0%, transparent 70%)`,
          filter: 'blur(8px)',
          animation: 'kickit-float 6s ease-in-out infinite',
        }}
      />
      <div className="relative max-w-md mx-auto px-6 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/kickit/icon.png"
          alt="KickIt"
          width={104}
          height={104}
          className="mx-auto mb-7 rounded-[26px]"
          style={{ boxShadow: `0 18px 50px ${BRAND_BLUE}5e` }}
        />

        <h1
          className="text-[56px] font-black leading-none mb-4"
          style={{ letterSpacing: '-0.04em' }}
        >
          KickIt.
        </h1>

        {/* Gradient sub-headline — the brand promise in a single line. */}
        <p
          className="text-[22px] font-extrabold leading-tight mb-5"
          style={{
            backgroundImage: `linear-gradient(135deg, ${BRAND_BLUE} 0%, ${BRAND_GREEN} 100%)`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.02em',
          }}
        >
          Hang with friends,<br />right now.
        </p>

        <LiveBadge />

        <div className="mt-7">
          <CtaButton label="Get KickIt" />
        </div>
      </div>
    </div>
  )
}

/// Animated "live" badge — pulsing green dot + small social-proof
/// blurb. Reads as social energy rather than copy clutter.
function LiveBadge() {
  return (
    <div
      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full"
      style={{
        backgroundColor: TINT_GREEN,
        border: `1px solid ${BRAND_GREEN}33`,
      }}
    >
      <span className="relative flex w-2.5 h-2.5">
        <span
          className="absolute inset-0 rounded-full"
          style={{
            backgroundColor: BRAND_GREEN,
            animation: 'kickit-pulse 2s ease-out infinite',
          }}
        />
        <span
          className="relative inline-flex w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: BRAND_GREEN }}
        />
      </span>
      <span
        className="text-[12px] font-bold tracking-wide uppercase"
        style={{ color: '#0e6e2a' }}
      >
        Friends down to hang
      </span>
    </div>
  )
}

// MARK: - Triptych preview

/// 3-up mini phone screenshots sitting under the hero — a teaser of
/// what's inside without scrolling far.
function ScreensTriptych() {
  return (
    <div className="grid grid-cols-3 gap-2.5 mb-14">
      <MiniPhone img="/kickit/screens/friends.png" alt="Down to Hang grid" />
      <MiniPhone img="/kickit/screens/map.png" alt="Map of live hangouts" />
      <MiniPhone img="/kickit/screens/groups.png" alt="Groups discover" />
    </div>
  )
}

function MiniPhone({ img, alt }: { img: string; alt: string }) {
  return (
    <div
      className="rounded-[14px] overflow-hidden"
      style={{
        aspectRatio: '1179 / 2556',
        backgroundColor: TINT_BLUE,
        boxShadow: '0 6px 18px rgba(15, 23, 42, 0.12)',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt={alt} className="w-full h-full object-cover" loading="lazy" />
    </div>
  )
}

// MARK: - Boredom hero (cropped)

function BoredomHero() {
  return (
    <div className="mb-24">
      <div
        className="rounded-[28px] overflow-hidden mx-auto"
        style={{
          maxWidth: 330,
          aspectRatio: '1179 / 1480',
          backgroundColor: TINT_BLUE,
          boxShadow: `0 30px 70px ${BRAND_BLUE}40`,
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

// MARK: - CTA button + Apple logo

function CtaButton({ label }: { label: string }) {
  return (
    <a
      href={APP_STORE_URL}
      className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl font-bold text-[17px] active:scale-[0.98] transition-transform"
      style={{
        backgroundColor: '#000',
        color: '#fff',
        boxShadow: `0 14px 32px rgba(0, 0, 0, 0.30)`,
      }}
    >
      <AppleLogo />
      <span>{label}</span>
    </a>
  )
}

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

// MARK: - Feature sections

/// Header-only feature section — accent color tints the screenshot
/// background and its shadow, giving each section a distinct vibe
/// without piling on copy.
function Section({
  accent,
  title,
  img,
}: {
  accent: 'blue' | 'green'
  title: string
  img: string
}) {
  const tint = accent === 'blue' ? TINT_BLUE : TINT_GREEN
  const shadow = accent === 'blue' ? `${BRAND_BLUE}33` : `${BRAND_GREEN}3a`
  return (
    <div className="mb-28">
      <h2
        className="text-[30px] font-black tracking-tight leading-[1.1] mb-7 text-center"
        style={{ color: INK, letterSpacing: '-0.025em' }}
      >
        {title}
      </h2>
      <div
        className="rounded-[24px] overflow-hidden mx-auto"
        style={{
          maxWidth: 280,
          aspectRatio: '1179 / 2556',
          backgroundColor: tint,
          boxShadow: `0 24px 50px ${shadow}`,
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

// MARK: - Closer + footer

function Closer() {
  return (
    <div className="text-center mb-16">
      <h2
        className="text-[32px] font-black tracking-tight leading-[1.08] mb-2"
        style={{ color: INK, letterSpacing: '-0.025em' }}
      >
        More friends.
      </h2>
      <h2
        className="text-[32px] font-black tracking-tight leading-[1.08] mb-8"
        style={{
          backgroundImage: `linear-gradient(135deg, ${BRAND_BLUE_DEEP} 0%, ${BRAND_GREEN} 100%)`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.025em',
        }}
      >
        Never bored.
      </h2>
      <CtaButton label="Get KickIt" />
    </div>
  )
}

function Footer() {
  return (
    <footer
      className="mt-12 pt-8 pb-10 text-center text-sm"
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
        <Link href="/kickit/terms/" className="hover:underline">Terms</Link>
        <Link href="/kickit/privacy/" className="hover:underline">Privacy</Link>
        <Link href="/kickit/support/" className="hover:underline">Support</Link>
      </div>
      <p className="mt-4 text-xs" style={{ color: SUBTLE }}>
        © {new Date().getFullYear()} Viral Builders
      </p>
    </footer>
  )
}
