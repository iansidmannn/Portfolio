import OldHero from '@/components/OldHero'
import VideoCarousel from '@/components/VideoCarousel'
import ResultsCarousel from '@/components/ResultsCarousel'
import Experiences from '@/components/Experiences'
import StatsHighlight from '@/components/StatsHighlight'
import VideoProjects from '@/components/VideoProjects'
import OldAmbitions from '@/components/OldAmbitions'
import FloatingAboutButton from '@/components/FloatingAboutButton'
import SocialFooter from '@/components/SocialFooter'
import FavoriteVideosAndAds from '@/components/FavoriteVideosAndAds'

export default function Home3() {
  return (
    <main className="min-h-screen">
      <FloatingAboutButton />
      <OldHero />
      <Experiences />
      <VideoCarousel />
      <StatsHighlight />
      <ResultsCarousel />
      <FavoriteVideosAndAds />
      <OldAmbitions />
      <VideoProjects />
      <SocialFooter />
    </main>
  )
}
