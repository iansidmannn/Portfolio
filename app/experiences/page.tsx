import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Experiences from '@/components/Experiences'

export const metadata = {
  title: 'Experiences — Ian Sidman',
}

export default function ExperiencesPage() {
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
      <div className="container mx-auto max-w-6xl px-6 pt-8">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to portfolio
        </Link>
      </div>
      <Experiences />
    </main>
  )
}
