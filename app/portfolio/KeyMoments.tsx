'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronDown } from 'lucide-react'

interface TrendThumbnail {
  src: string
  viewLabel: string
  url: string
  handle: string
  isOriginal?: boolean
  isFeatured?: boolean
}

interface LeagueLogo {
  src: string
  alt: string
}

interface KeyMoment {
  id: string
  title: string
  metric: string
  metricLabel: string
  description?: string
  expandedContent: string
  links: Array<{ label: string; url: string }>
  thumbnails?: TrendThumbnail[]
  leagues?: LeagueLogo[]
  wide?: boolean
  accentFrom: string
  accentTo: string
}

const keyMoments: KeyMoment[] = [
  {
    id: 'fake-news-prank',
    title: 'The Fake News Prank',
    metric: '300M+',
    metricLabel: 'Views On TikTok & Instagram',
    expandedContent:
      'Saw an emerging trend on TikTok, built our app around it, and funneled customers to our app by ranking #1 on TikTok search and in TikTok comment sections. Eventually customers started doing the referrals for us. 6,000 downloads in 3 days of launch. 17,000 downloads in the first month via organic TikTok (GTM).\n\nAfter making the fake news prank accessible to everyone and marketing it well—over 2.5 million views on tutorials—the trend grew from 60M views to over 300M views, and it\'s still actively growing.\n\nMy tutorials have captured 50,000 downloads and still continue to capture downloads to this day.',
    links: [
      { label: 'See the Trend', url: 'https://www.tiktok.com/@nimrashamid/video/7589053163232054558' },
    ],
    thumbnails: [
      {
        src: '/trends/trend-300m-nimrashamid-7589053163232054558.jpg',
        viewLabel: '57.6M',
        url: 'https://www.tiktok.com/@nimrashamid/video/7589053163232054558',
        handle: '@nimrashamid',
        isOriginal: true,
      },
      {
        src: '/trends/trend-300m-AMANDA_CARLUCCIO-DUGiCpjjmvC.jpg',
        viewLabel: '10.9M',
        url: 'https://www.instagram.com/p/DUGiCpjjmvC/',
        handle: '@amanda_carluccio',
      },
      {
        src: '/trends/trend-300m-courtneykilburn2-7619036635849624845.jpg',
        viewLabel: '3.3M',
        url: 'https://www.tiktok.com/@courtneykilburn2/video/7619036635849624845',
        handle: '@courtneykilburn2',
      },
    ],
    accentFrom: 'from-blue-500',
    accentTo: 'to-cyan-400',
  },
  {
    id: 'quitting-trend',
    title: 'Quitting Incurable Illnesses',
    metric: '100M+',
    metricLabel: 'Views On TikTok',
    expandedContent:
      'I saw a video trend of people quitting vaping by dunking their vapes in water. Diabetes was also a viral topic at the time. I decided to combine the two trends—I made a video where I quit diabetes by dropping my insulin pump in water—effectively killing it. That post hit 4.1 million views.\n\nHundreds of other creators piled on with asthma, diabetes, cancer, Crohn\'s, MS—you name it. Multiple spinoffs passed 10 million views each. Altogether the trend blew past 100M views across everyone who joined in.',
    links: [
      { label: 'My Original Video (4.1M views)', url: 'https://www.tiktok.com/@gymjunkie69_/video/6939996247193292038' },
      { label: '23M Views — @amandawolf0105', url: 'https://www.tiktok.com/@amandawolf0105/video/7052014289615408430' },
      { label: '16.5M Views — @type1alexx', url: 'https://www.tiktok.com/@type1alexx/video/7205725439975771435' },
      { label: '10.4M Views — @_carsonscott_', url: 'https://www.tiktok.com/@_carsonscott_' },
    ],
    thumbnails: [
      {
        src: '/trends/trend-100m-gymjunkie69.jpg',
        viewLabel: '4.1M',
        url: 'https://www.tiktok.com/@gymjunkie69_/video/6939996247193292038',
        handle: '@gymjunkie69_',
        isOriginal: true,
      },
      {
        src: '/trends/trend-100m-amandawolf.jpg',
        viewLabel: '23M',
        url: 'https://www.tiktok.com/@amandawolf0105/video/7052014289615408430',
        handle: '@amandawolf0105',
      },
      {
        src: '/trends/trend-100m-type1alexx.jpg',
        viewLabel: '16.5M',
        url: 'https://www.tiktok.com/@type1alexx/video/7205725439975771435',
        handle: '@type1alexx',
      },
    ],
    accentFrom: 'from-purple-500',
    accentTo: 'to-blue-500',
  },
  {
    id: 'viral-sound',
    title: 'Multiple NFL, NBA, and NHL Teams Used a Viral Sound I Made',
    metric: '150M+',
    metricLabel: 'Views On TikTok & Instagram',
    expandedContent:
      `8 different NFL teams just used the sound I made on TikTok.

Someone just used it on a hike & got 4.6 million views.

Here's a link to the sound, go claim some free views 🤣`,
    links: [
      { label: 'See The Sound', url: 'https://lnkd.in/gTiJa97M' },
    ],
    leagues: [
      { src: '/nflz.png', alt: 'NFL' },
      { src: '/nba-logo-transparent.png', alt: 'NBA' },
      { src: '/NHL-Logo.png', alt: 'NHL' },
    ],
    thumbnails: [
      { src: '/trends/trend-150m-trypinatafarms-7589742736874704158.jpg', viewLabel: '787K', url: 'https://www.tiktok.com/@trypinatafarms/video/7589742736874704158', handle: '@trypinatafarms', isOriginal: true },
      { src: '/trends/trend-150m-brooklynnets-7592784195068431629.jpg', viewLabel: '6.1M', url: 'https://www.tiktok.com/@brooklynnets/video/7592784195068431629', handle: '@brooklynnets' },
      { src: '/trends/trend-150m-nfl-7597937372512259383.jpg', viewLabel: '5.5M', url: 'https://www.tiktok.com/@nfl/video/7597937372512259383', handle: '@nfl', isFeatured: true },
      { src: '/trends/trend-150m-iggywanders-7590533937290595597.jpg', viewLabel: '4.6M', url: 'https://www.tiktok.com/@iggywanders/video/7590533937290595597', handle: '@iggywanders' },
      { src: '/trends/trend-150m-j.cal_ontrail-7591562427003571487.jpg', viewLabel: '3.5M', url: 'https://www.tiktok.com/@j.cal_ontrail/video/7591562427003571487', handle: '@j.cal_ontrail' },
      { src: '/trends/trend-150m-shortstuff.explores-7591292244456492296.jpg', viewLabel: '1.7M', url: 'https://www.tiktok.com/@shortstuff.explores/video/7591292244456492296', handle: '@shortstuff.explores' },
      { src: '/trends/trend-150m-seahawks-7617989257067580702.jpg', viewLabel: '1.4M', url: 'https://www.tiktok.com/@seahawks/video/7617989257067580702', handle: '@seahawks', isFeatured: true },
      { src: '/trends/trend-150m-browns-7618254498015841550.jpg', viewLabel: '684K', url: 'https://www.tiktok.com/@browns/video/7618254498015841550', handle: '@browns' },
      { src: '/trends/trend-150m-cheehoo.tv-7594140616649411895.jpg', viewLabel: '664K', url: 'https://www.tiktok.com/@cheehoo.tv/video/7594140616649411895', handle: '@cheehoo.tv' },
      { src: '/trends/trend-150m-vibinganimalvideos-7602477539218574605.jpg', viewLabel: '577K', url: 'https://www.tiktok.com/@vibinganimalvideos/video/7602477539218574605', handle: '@vibinganimalvideos' },
      { src: '/trends/trend-150m-nyjets-7620618012269350158.jpg', viewLabel: '430K', url: 'https://www.tiktok.com/@nyjets/video/7620618012269350158', handle: '@nyjets' },
      { src: '/trends/trend-150m-warriors-7619479844312681758.jpg', viewLabel: '398K', url: 'https://www.tiktok.com/@warriors/video/7619479844312681758', handle: '@warriors' },
      { src: '/trends/trend-150m-chiefs-7628286698660678925.jpg', viewLabel: '314K', url: 'https://www.tiktok.com/@chiefs/video/7628286698660678925', handle: '@chiefs' },
      { src: '/trends/trend-150m-steelers-7621783307012984078.jpg', viewLabel: '243K', url: 'https://www.tiktok.com/@steelers/video/7621783307012984078', handle: '@steelers' },
      { src: '/trends/trend-150m-nygiants-7625336443459620110.jpg', viewLabel: '237K', url: 'https://www.tiktok.com/@nygiants/video/7625336443459620110', handle: '@nygiants' },
      { src: '/trends/trend-150m-dallasmavs-7608296407748971789.jpg', viewLabel: '235K', url: 'https://www.tiktok.com/@dallasmavs/video/7608296407748971789', handle: '@dallasmavs' },
      { src: '/trends/trend-150m-bengals-7624565791270178079.jpg', viewLabel: '201K', url: 'https://www.tiktok.com/@bengals/video/7624565791270178079', handle: '@bengals' },
      { src: '/trends/trend-150m-patriots-7620827737636326686.jpg', viewLabel: '161K', url: 'https://www.tiktok.com/@patriots/video/7620827737636326686', handle: '@patriots' },
      { src: '/trends/trend-150m-anaheimducks-7597952149510786335.jpg', viewLabel: '89K', url: 'https://www.tiktok.com/@anaheimducks/video/7597952149510786335', handle: '@anaheimducks' },
      { src: '/trends/trend-150m-flapanthers-7623823846205967629.jpg', viewLabel: '39K', url: 'https://www.tiktok.com/@flapanthers/video/7623823846205967629', handle: '@flapanthers' },
      { src: '/trends/trend-150m-laclippers-7620971410210458911.jpg', viewLabel: '31K', url: 'https://www.tiktok.com/@laclippers/video/7620971410210458911', handle: '@laclippers' },
    ],
    accentFrom: 'from-emerald-500',
    accentTo: 'to-teal-400',
  },
]

export default function KeyMoments({ embedded = false }: { embedded?: boolean }) {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [expandedThumbsId, setExpandedThumbsId] = useState<string | null>(null)
  const COLLAPSED_THUMB_LIMIT = 3

  return (
    <section
      className={
        embedded
          ? 'py-3 px-0 border-0'
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Key Moments</h2>
          </motion.div>
        ) : null}

        <div className={`grid md:grid-cols-2 ${embedded ? 'gap-4 md:gap-5' : 'gap-6'}`}>
          {keyMoments.map((moment, index) => {
            const isExpanded = expandedId === moment.id
            const totalThumbs = moment.thumbnails?.length || 0
            const tooMany = totalThumbs > COLLAPSED_THUMB_LIMIT
            const isThumbsExpanded = expandedThumbsId === moment.id
            const visibleThumbs =
              !tooMany || isThumbsExpanded
                ? moment.thumbnails || []
                : (moment.thumbnails || [])
                    .filter((t) => t.isOriginal || t.isFeatured)
                    .slice(0, COLLAPSED_THUMB_LIMIT)
            const effectiveWide = moment.wide || isThumbsExpanded
            const showLeagues = !!moment.leagues && moment.leagues.length > 0 && isThumbsExpanded

            return (
              <motion.div
                key={moment.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className={`group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm overflow-hidden ${effectiveWide ? 'md:col-span-2' : ''}`}
              >
                <div
                  className={`h-1 w-full bg-gradient-to-r ${moment.accentFrom} ${moment.accentTo}`}
                />

                <div className={embedded ? 'p-4 md:p-5' : 'p-6 md:p-8'}>
                  <h3 className={`font-semibold text-white ${embedded ? 'text-base md:text-lg mb-3' : 'text-lg md:text-xl mb-5'}`}>
                    {moment.title}
                  </h3>
                  {moment.description ? (
                    <p className={`text-gray-400 leading-relaxed ${embedded ? 'text-[13px] mb-3' : 'text-sm mb-5'}`}>{moment.description}</p>
                  ) : null}

                  {showLeagues ? (
                    <div className="mb-3 flex items-center gap-4 sm:gap-5">
                      <span className="text-[10px] uppercase tracking-[0.18em] text-white/45">Used by</span>
                      <div className="flex items-center gap-3 sm:gap-4">
                        {moment.leagues!.map((lg) => (
                          <div key={lg.alt} className="relative h-6 w-10 sm:h-7 sm:w-12 opacity-90">
                            <Image src={lg.src} alt={lg.alt} fill className="object-contain" sizes="48px" />
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {visibleThumbs.length > 0 ? (
                    <div
                      className={`grid gap-2 mb-3 ${
                        effectiveWide
                          ? 'grid-cols-3 sm:grid-cols-5 md:grid-cols-7'
                          : visibleThumbs.length === 4
                            ? 'grid-cols-2 sm:grid-cols-4'
                            : 'grid-cols-3'
                      } ${embedded && !effectiveWide ? 'max-w-[17rem]' : ''}`}
                    >
                      {visibleThumbs.map((t) => (
                        <a
                          key={t.url}
                          href={t.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/tile relative block overflow-hidden rounded-lg border border-white/10 bg-black/40 transition-transform duration-200 hover:scale-[1.02] hover:border-white/25"
                          aria-label={`Open ${t.handle} on TikTok — ${t.viewLabel} views`}
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
                              <span className={`absolute top-1.5 left-1.5 rounded-full bg-gradient-to-r ${moment.accentFrom} ${moment.accentTo} px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow`}>
                                Original
                              </span>
                            ) : null}
                            {/* Smaller tiles inside a panel: stack so the handle
                                stays readable instead of truncating to "@.." */}
                            <div
                              className={`absolute bottom-1.5 left-1.5 right-1.5 ${
                                embedded
                                  ? 'flex flex-col items-start gap-0'
                                  : 'flex items-end justify-between'
                              }`}
                            >
                              <span
                                className={`font-bold text-white drop-shadow leading-none ${
                                  embedded ? 'text-sm' : 'text-base md:text-lg'
                                }`}
                              >
                                {t.viewLabel}
                              </span>
                              <span
                                className={`text-white/70 truncate max-w-full ${
                                  embedded ? 'text-[9px]' : 'text-[10px] ml-1'
                                }`}
                              >
                                {t.handle}
                              </span>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  ) : null}

                  {tooMany ? (
                    <button
                      onClick={() =>
                        setExpandedThumbsId(isThumbsExpanded ? null : moment.id)
                      }
                      className="mb-5 inline-flex items-center gap-2 text-xs font-medium text-purple-300 hover:text-purple-200 transition-colors"
                    >
                      <span>
                        {isThumbsExpanded
                          ? 'Show fewer'
                          : `Show all ${totalThumbs} videos`}
                      </span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          isThumbsExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  ) : null}

                  <div className={`font-bold bg-gradient-to-r ${moment.accentFrom} ${moment.accentTo} bg-clip-text text-transparent leading-tight pb-0.5 ${embedded ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl'}`}>
                    {moment.metric}
                  </div>
                  <p className="text-sm text-gray-400 mb-4">{moment.metricLabel}</p>

                  <button
                    onClick={() => setExpandedId(isExpanded ? null : moment.id)}
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
                            {moment.expandedContent}
                          </p>

                          {moment.links.length > 0 && (
                            <div className="space-y-2">
                              {moment.links.map((link, i) => (
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
