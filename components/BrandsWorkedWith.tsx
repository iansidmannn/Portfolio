'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

// Top brands by follower count (10K+)
const topBrands = [
  {
    name: 'Ryan Blourchi',
    account: '@ryanblourchi',
    followers: '1.2M',
    url: 'https://www.tiktok.com/@ryanblourchi',
    image: '/IMG_3081.PNG',
  },
  {
    name: 'Tommy Brown',
    account: '@tommyybrown_',
    followers: '900K',
    url: 'https://www.instagram.com/tommyybrown_/',
    image: '/Worked With 2/IMG_3064.PNG',
  },
  {
    name: 'Atom Williamson',
    account: '@atomwilliamsonn',
    followers: '600K',
    url: 'https://www.instagram.com/atomwilliamson',
    image: '/Worked With 2/IMG_3066.PNG',
  },
  {
    name: 'Get Brick',
    account: '@getbrick',
    followers: '120K',
    url: 'https://getbrick.app/',
    image: '/Worked With 2/IMG_3067.PNG',
  },
  {
    name: 'Dr. Spice',
    account: '@drspice24',
    followers: '105K',
    url: 'https://www.tiktok.com/@drspice24',
    image: '/Worked With 2/IMG_3051.PNG',
  },
  {
    name: 'Smyle',
    account: '@smylelabs',
    followers: '10K+',
    url: 'https://www.instagram.com/smylelabs/',
    image: '/Worked With 2/IMG_3065.PNG',
  },
  {
    name: 'Fitness 19 Gyms',
    account: '@fitness19gyms',
    followers: '10K+',
    url: 'https://www.instagram.com/fitness19gyms/',
    image: '/Worked With 2/IMG_3083.PNG',
  },
  {
    name: 'Personal Brand',
    account: '@iansidmann',
    followers: '60K',
    url: 'https://www.tiktok.com/@gymjunkie69_',
    image: '/Worked With 2/iansidmannn (1).png',
  },
  {
    name: 'Goofy Garments',
    account: '@goofygarmentshop',
    followers: '10K',
    url: 'https://www.instagram.com/goofygarmentshop/',
    image: '/goofnew.png',
  },
  {
    name: 'RedAsTheColor',
    account: '@redasthecolor',
    followers: '5K',
    url: 'https://www.youtube.com/@redasthecolor',
    image: '/Worked With 2/IMG_3080.PNG',
  },
]

export default function BrandsWorkedWith() {
  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-3">Brands & Creators</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Notable Accounts
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {topBrands.map((brand, index) => (
            <motion.a
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group relative rounded-xl overflow-hidden aspect-square"
            >
              {/* Brand Image/Logo - fills entire box */}
              {brand.image ? (
                <div className="relative w-full h-full">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center top' }}
                  />
                </div>
              ) : (
                <div className="w-full h-full bg-white flex items-center justify-center">
                  <span className="text-xs text-gray-500 font-medium">
                    {brand.name}
                  </span>
                </div>
              )}

              {/* Account Name & Info Overlay - positioned to show follower count */}
              <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-gradient-to-t from-black via-black/95 to-transparent">
                <p className="text-xs font-medium text-white truncate mb-1.5">
                  {brand.account}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {brand.followers}
                  </div>
                  <ExternalLink className="w-3 h-3 text-white/80 group-hover:text-purple-400 transition-colors flex-shrink-0 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
