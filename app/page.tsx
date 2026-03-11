import Hero from '@/components/Hero'
import CurrentWork from '@/components/CurrentWork'
import ResultsCarousel from '@/components/ResultsCarousel'
import FloatingAboutButton from '@/components/FloatingAboutButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <FloatingAboutButton />
      <Hero />
      <CurrentWork />
      <ResultsCarousel />
    </main>
  )
}

