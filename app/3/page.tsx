import Hero from '@/components/Hero'
import CurrentWork from '@/components/CurrentWork'
import ResultsCarousel from '@/components/ResultsCarousel'
import Before from '@/components/Before'
import FloatingAboutButton from '@/components/FloatingAboutButton'

export default function Home3() {
  return (
    <main className="min-h-screen">
      <FloatingAboutButton />
      <Hero />
      <CurrentWork />
      <Before />
      <ResultsCarousel />
    </main>
  )
}
