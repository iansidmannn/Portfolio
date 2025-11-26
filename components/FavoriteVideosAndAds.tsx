'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

interface FavoriteVideo {
  video?: string
  thumbnail?: string
  title: string
  url: string
}

export default function FavoriteVideosAndAds() {
  const [activeTab, setActiveTab] = useState<'videos' | 'ads'>('ads')

  // Favorite Videos from Charity Impact
  const favoriteVideos: FavoriteVideo[] = [
    {
      video: '/Instagram (2).mp4',
      title: 'My Favorite Series Idea Ever!',
      url: 'https://www.instagram.com/p/DEdXd_0TLjh/',
    },
    {
      video: '/Charity Karaoke Sing For A Cause on Instagram 40000 Raised.mp4',
      title: 'Charity Karaoke',
      url: 'https://www.instagram.com/charitykaraoke/',
    },
    {
      video: '/Instagram (1).mp4',
      title: 'Helping A Friend In Need',
      url: 'https://www.instagram.com/p/DFIsQcyPCq1/',
    },
    {
      video: '/Better Edit.mp4',
      title: 'Thousand Oaks Street Fair',
      url: 'https://www.instagram.com/p/DBhP4v5qz/?hl=en',
    },
    {
      video: '/NO KID SLEEPS ON THE FLOOR IN OUR TOWN on Instagram With our bed.mp4',
      title: 'Sleep In Heavenly Peace',
      url: 'https://www.instagram.com/reel/DF8OjWsJlIE/',
    },
  ]

  // Ads from Brand Deals
  const ads = [
    {
      brand: 'Brick',
      url: 'https://getbrick.app/',
      description: 'Best performing ad 1st on website',
      logo: '/brick logo.png',
      video: '/brickad.mp4',
    },
    {
      brand: 'Scener',
      url: 'https://www.tiktok.com/@gymjunkie69_/video/6960848726550121734',
      description: '16.3k organic views',
      logo: '/scener-logo-700x389.jpg',
      video: '/scenerAd.mp4',
    },
  ]

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('videos')}
            className={`px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
              activeTab === 'videos'
                ? 'bg-purple-500/20 text-purple-400 border-2 border-purple-400/50'
                : 'bg-white/5 text-gray-400 border-2 border-white/10 hover:bg-white/10 hover:text-white'
            }`}
          >
            Favorite Videos
          </button>
          <button
            onClick={() => setActiveTab('ads')}
            className={`px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
              activeTab === 'ads'
                ? 'bg-purple-500/20 text-purple-400 border-2 border-purple-400/50'
                : 'bg-white/5 text-gray-400 border-2 border-white/10 hover:bg-white/10 hover:text-white'
            }`}
          >
            Ads
          </button>
        </div>

        {/* Content */}
        <div className="min-h-[400px]">
          {activeTab === 'videos' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 md:grid-cols-3"
            >
              {favoriteVideos.map((video, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  className="space-y-3"
                >
                  {video.video ? (
                    <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden border border-white/10 bg-black">
                      <video
                        src={video.video}
                        controls
                        className="w-full h-full object-contain"
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : video.thumbnail ? (
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden border border-white/10 group-hover:border-white/30 transition-colors">
                        <Image
                          src={video.thumbnail}
                          alt={video.title || 'Video thumbnail'}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                          <ExternalLink className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </a>
                  ) : null}
                  <div>
                    <h4 className="text-white font-semibold mb-1">{video.title}</h4>
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      View on Instagram
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'ads' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto"
            >
              {ads.map((ad, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  className="space-y-3"
                >
                  {/* Logo */}
                  {ad.logo && (
                    <div className="flex items-center mb-2">
                      <div className="relative h-8 w-auto">
                        <Image
                          src={ad.logo}
                          alt={ad.brand}
                          width={120}
                          height={40}
                          className="h-8 w-auto object-contain"
                        />
                      </div>
                    </div>
                  )}

                  {/* Video */}
                  <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden border border-white/10 mx-auto max-w-[300px] bg-black">
                    <video
                      src={ad.video}
                      controls
                      className="w-full h-full object-contain"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  {/* Brand Name and Description */}
                  <div>
                    {ad.url ? (
                      <a
                        href={ad.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <p className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors inline-flex items-center gap-1">
                          {ad.brand}
                          <ExternalLink className="w-3 h-3" />
                        </p>
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-white">
                        {ad.brand}
                      </p>
                    )}
                    {ad.description && (
                      <p className="text-xs text-gray-400 mt-1">{ad.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

