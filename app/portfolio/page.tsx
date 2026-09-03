import ScrollToTop from './ScrollToTop'
import CompactHero from './CompactHero'
import PortfolioOperatorSections from './PortfolioOperatorSections'
import FloatingAboutButton from '@/components/FloatingAboutButton'

export default function PortfolioPage() {
  return (
    <main
      className="relative isolate min-h-screen overflow-x-hidden text-white"
      style={{
        backgroundColor: '#0a0a0a',
        backgroundImage:
          'linear-gradient(180deg, rgba(109,40,217,0.34) 0%, rgba(55,21,105,0.2) 12%, rgba(18,15,26,0.55) 28%, rgb(10,10,10) 52%, rgb(10,10,10) 100%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }}
    >
      <ScrollToTop />
      <FloatingAboutButton />
      <CompactHero />
      <PortfolioOperatorSections />
    </main>
  )
}
