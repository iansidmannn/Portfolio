'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronDown } from 'lucide-react'

interface RevenueThumbnail {
  src: string
  viewLabel: string
  url: string
  handle: string
  isOriginal?: boolean
}

interface RevenueCase {
  id: string
  title: string
  metric: string
  metricLabel: string
  description?: string
  expandedContent: string
  links: Array<{ label: string; url: string }>
  thumbnails?: RevenueThumbnail[]
  tag?: string
  accentFrom: string
  accentTo: string
}

const cases: RevenueCase[] = [
  {
    id: 'twenty-two-k-profit',
    tag: 'GTM 0→1',
    title: '$22K Profit From One Video Format',
    metric: '$22,000',
    metricLabel: '$5,000 & 193 new customers from one video',
    thumbnails: [
      {
        src: '/trends/trend-revenue-GOOFY_GARMENTS__-CoIZkTfLkIP.jpg',
        viewLabel: '5.8M',
        url: 'https://www.instagram.com/reel/CoIZkTfLkIP/',
        handle: '@goofygarmentshop',
        isOriginal: true,
      },
      {
        src: '/trends/trend-revenue-GOOFY_GARMENTS__-CnA1_hyvlfh.jpg',
        viewLabel: '2.9M',
        url: 'https://www.instagram.com/reel/CnA1_hyvlfh/',
        handle: '@goofygarmentshop',
      },
      {
        src: '/trends/trend-revenue-GOOFY_GARMENTS__-Cl1_Axopxyd.jpg',
        viewLabel: '935K',
        url: 'https://www.instagram.com/reel/Cl1_Axopxyd/',
        handle: '@goofygarmentshop',
      },
    ],
    expandedContent:
      "How I Started:\nIdentified unmet demand in the Gen Z consumer space → built the brand that was missing in the form of a clothing brand → $4k profit/mo in 3 months.\n\nGTM was viral Instagram content.\n\nOne of my videos brought in $5k in sales. It's easy to mess up on execution of viral concepts. I actually refilmed this video 8 different times to make sure my movements perfectly matched the audio, and included things to keep my target audience interested until the next main section.\n\nIt's an instinct that comes from experience, and it's a big part of how I effectively capitalize on opportunities I see in the content market for all the projects I've built. That video's final engagement stats: 5.8M views, 282K shares, and brought in 193 new customers all from one post.\n\n15M views & $4k profit/mo 📈",
    links: [
      { label: 'See the Video — @goofygarmentshop', url: 'https://www.instagram.com/reel/CoIZkTfLkIP/' },
    ],
    accentFrom: 'from-cyan-400',
    accentTo: 'to-blue-500',
  },
  {
    id: 'fake-news-tutorials',
    tag: 'GTM 0→1',
    title: '60,000 Downloads From Hacking A Prank',
    metric: '60,000+',
    metricLabel: 'app downloads from tutorials, and still growing',
    thumbnails: [
      {
        src: '/trends/trend-rev-tutorials-trypinatafarms-7594994877037825311.jpg',
        viewLabel: '831K',
        url: 'https://www.tiktok.com/@trypinatafarms/video/7594994877037825311',
        handle: '@trypinatafarms',
        isOriginal: true,
      },
      {
        src: '/trends/trend-rev-tutorials-trypinatafarms-7614306255934475550.jpg',
        viewLabel: '95K',
        url: 'https://www.tiktok.com/@trypinatafarms/video/7614306255934475550',
        handle: '@trypinatafarms',
      },
      {
        src: '/trends/trend-rev-tutorials-trypinatafarms-7633870114626080030.jpg',
        viewLabel: '15K',
        url: 'https://www.tiktok.com/@trypinatafarms/video/7633870114626080030',
        handle: '@trypinatafarms',
      },
    ],
    expandedContent:
      "Saw an emerging trend on TikTok, built our app around it, and funneled customers to our app by ranking #1 on TikTok search and in TikTok comment sections. Eventually customers started doing the referrals for us.\n\n6,000 downloads in 3 days of launch. 17,000 downloads in the first month via organic TikTok.\n\nAfter making the fake news prank accessible to everyone and marketing it well — over 2.5 million views on tutorials — the trend grew from 60M views to over 300M views, and it's still actively growing.\n\nMy tutorials have captured 60,000 downloads and still continue to capture downloads to this day.",
    links: [
      { label: 'Piñata Farms (the app)', url: 'https://www.tiktok.com/@trypinatafarms' },
    ],
    accentFrom: 'from-amber-400',
    accentTo: 'to-orange-500',
  },
  {
    id: 'charity-karaoke',
    title: 'Charity Karaoke',
    metric: '$94,000',
    metricLabel: 'raised for charity through content',
    thumbnails: [
      {
        src: '/trends/trend-rev-charity-Charity_Karaoke-Sing_For_A_Cause-DAB-MMZyMYS.jpg',
        viewLabel: '16.7K',
        url: 'https://www.instagram.com/p/DAB-MMZyMYS/',
        handle: '@charitykaraoke',
      },
      {
        src: '/trends/trend-rev-charity-Charity_Karaoke-Sing_For_A_Cause-DAeumzNybIY.jpg',
        viewLabel: '3.1K',
        url: 'https://www.instagram.com/reel/DAeumzNybIY/',
        handle: '@charitykaraoke',
      },
      {
        src: '/trends/trend-rev-charity-Charity_Karaoke-Sing_For_A_Cause-DBhP4k0v5qz.jpg',
        viewLabel: '1.6K',
        url: 'https://www.instagram.com/reel/DBhP4k0v5qz/',
        handle: '@charitykaraoke',
      },
    ],
    expandedContent:
      "Charity Karaoke is a seasonal karaoke competition where 20 local charities compete to raise money for their causes.\n\nI'm responsible for building awareness for the event, increasing donations and ticket sales, and helping organize where I can.\n\n• Packed venue two years in a row\n• Directed a team of creators, filmers, and actors to produce short-form content for the event\n• Increased donations 25% through shareable social media content\n• Collaborated and built relationships with business owners and influencers\n\n$94,000 raised for charity, total.",
    links: [
      { label: '@charitykaraoke on Instagram', url: 'https://www.instagram.com/charitykaraoke/' },
    ],
    accentFrom: 'from-pink-500',
    accentTo: 'to-fuchsia-400',
  },
]

export default function RevenueCases({ embedded = false }: { embedded?: boolean }) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section
      className={
        embedded
          ? 'py-6 px-0 border-0'
          : 'py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10'
      }
    >
      <div className="container mx-auto max-w-5xl">
        {!embedded ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Revenue</h2>
          </motion.div>
        ) : null}

        <div className={`grid md:grid-cols-2 ${embedded ? 'gap-4 md:gap-5' : 'gap-6'}`}>
          {cases.map((c, index) => {
            const isExpanded = expandedId === c.id

            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm overflow-hidden"
              >
                <div
                  className={`h-1 w-full bg-gradient-to-r ${c.accentFrom} ${c.accentTo}`}
                />

                <div className="p-6 md:p-8">
                  {c.tag ? (
                    <span className={`inline-flex items-center mb-3 rounded-full bg-gradient-to-r ${c.accentFrom} ${c.accentTo} px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-sm`}>
                      {c.tag}
                    </span>
                  ) : null}
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-5">
                    {c.title}
                  </h3>
                  {c.description ? (
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">{c.description}</p>
                  ) : null}

                  {c.thumbnails && c.thumbnails.length > 0 ? (
                    <div
                      className={`grid gap-2 mb-5 ${
                        c.thumbnails.length === 1
                          ? 'grid-cols-1 max-w-[8.5rem] sm:max-w-[9.5rem]'
                          : c.thumbnails.length === 2
                            ? 'grid-cols-2'
                            : 'grid-cols-3'
                      }`}
                    >
                      {c.thumbnails.map((t) => (
                        <a
                          key={t.url}
                          href={t.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/tile relative block overflow-hidden rounded-lg border border-white/10 bg-black/40 transition-transform duration-200 hover:scale-[1.02] hover:border-white/25"
                          aria-label={`Open ${t.handle} — ${t.viewLabel} views`}
                        >
                          <div className="relative aspect-[9/16]">
                            <Image
                              src={t.src}
                              alt={`${t.handle} — ${t.viewLabel} views`}
                              fill
                              sizes="(max-width: 768px) 33vw, 200px"
                              className="object-cover"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                            {t.isOriginal ? (
                              <span className={`absolute top-1.5 left-1.5 rounded-full bg-gradient-to-r ${c.accentFrom} ${c.accentTo} px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow`}>
                                Original
                              </span>
                            ) : null}
                            <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-end justify-between">
                              <span className="text-base md:text-lg font-bold text-white drop-shadow leading-none">
                                {t.viewLabel}
                              </span>
                              <span className="text-[10px] text-white/70 truncate ml-1">
                                {t.handle}
                              </span>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  ) : null}

                  <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${c.accentFrom} ${c.accentTo} bg-clip-text text-transparent leading-tight pb-0.5`}>
                    {c.metric}
                  </div>
                  <p className="text-sm text-gray-400 mb-4">{c.metricLabel}</p>

                  <button
                    onClick={() => setExpandedId(isExpanded ? null : c.id)}
                    className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <span>{isExpanded ? 'Show Less' : 'Full Story'}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-white/10 mt-4 space-y-4">
                          <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                            {c.expandedContent}
                          </p>

                          {c.links.length > 0 && (
                            <div className="space-y-2">
                              {c.links.map((link, i) => (
                                <a
                                  key={i}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                                >
                                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                                  <span>{link.label}</span>
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
