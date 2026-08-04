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

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {picks.map((exp) => (
            <Link
              key={exp.id}
              href="/experiences"
              className="group overflow-hidden rounded-xl border border-white/10 bg-black/50 transition-all hover:border-white/25 hover:bg-white/[0.05]"
            >
              {exp.image ? (
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    sizes="(max-width: 640px) 50vw, 240px"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                    style={{
                      objectPosition: exp.imagePosition ?? 'center',
                      transform: exp.imageScale ? `scale(${exp.imageScale})` : undefined,
                    }}
                  />
                </div>
              ) : (
                <div className="aspect-[4/3] w-full bg-white/[0.04]" />
              )}
              <div className="p-3">
                <p className="truncate text-sm font-semibold text-white">{exp.title}</p>
                {exp.workType ? (
                  <p className="mt-0.5 truncate text-[11px] uppercase tracking-wide text-gray-500">
                    {exp.workType}
                  </p>
                ) : null}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
