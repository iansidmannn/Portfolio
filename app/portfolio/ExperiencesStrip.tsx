import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { myExperiences, consultingExperiences } from '@/data/experiences'

const picks = [...myExperiences.slice(0, 4), ...consultingExperiences.slice(0, 4)]

export default function ExperiencesStrip() {
  return (
    <section aria-label="Experiences" className="relative px-4 pb-4 sm:px-6">
      <div className="relative z-[1] container mx-auto max-w-5xl">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl">Experiences</h2>
          <Link
            href="/experiences"
            className="inline-flex items-center gap-1 text-sm text-gray-400 transition-colors hover:text-white"
          >
            View all
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          {picks.map((exp) => (
            <Link
              key={exp.id}
              href="/experiences"
              className="group relative flex flex-col items-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-3 backdrop-blur-sm transition-all duration-300 hover:border-white/30 sm:p-4"
            >
              <span className="w-full truncate text-[9px] font-semibold uppercase tracking-wide text-purple-400 sm:text-[10px]">
                {exp.workType || exp.title}
              </span>

              <div className="mt-3 flex w-full justify-center">
                {exp.image ? (
                  <div className="relative aspect-[3/2] w-full max-w-[110px] overflow-hidden rounded-xl bg-white sm:max-w-[140px]">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      sizes="140px"
                      className="object-cover"
                      style={{
                        objectPosition: exp.imagePosition || 'center top',
                        transform: exp.imageScale ? `scale(${exp.imageScale})` : undefined,
                      }}
                    />
                  </div>
                ) : (
                  <div className="aspect-[3/2] w-full max-w-[110px] rounded-xl bg-white/[0.06] sm:max-w-[140px]" />
                )}
              </div>

              <p className="mt-3 w-full truncate text-center text-xs font-medium text-white sm:text-sm">
                {exp.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
