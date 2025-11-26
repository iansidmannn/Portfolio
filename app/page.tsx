import Hero from '@/components/Hero'
import VideoCarousel from '@/components/VideoCarousel'
import ResultsCarousel from '@/components/ResultsCarousel'
import Experiences from '@/components/Experiences'
import StatsHighlight from '@/components/StatsHighlight'
import VideoProjects from '@/components/VideoProjects'
import Ambitions from '@/components/Ambitions'
import FloatingAboutButton from '@/components/FloatingAboutButton'
import SocialFooter from '@/components/SocialFooter'
import FavoriteVideosAndAds from '@/components/FavoriteVideosAndAds'

export default function Home() {
  return (
    <main className="min-h-screen">
      <FloatingAboutButton />
      <Hero />
      <Experiences />
      <VideoCarousel />
      <StatsHighlight />
      <ResultsCarousel />
      <FavoriteVideosAndAds />
      <Ambitions />
      <VideoProjects />
      <SocialFooter />
    </main>
  )
}

