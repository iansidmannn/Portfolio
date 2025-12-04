'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, ArrowLeft, X, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import FloatingAboutButton from '@/components/FloatingAboutButton'
import SocialFooter from '@/components/SocialFooter'
import { results, Result } from '@/data/results'
import ResultModal from '@/components/ResultModal'

const accomplishments = [
  'Bench Press National Record And Squat State Record At Age 17',
  'Gained 23,200 Followers & 9 Million Views In 7 Days On My Personal TikTok @gymjunkie69_',
  '@GoofyGarmentShop To 4k/mo Profit',
  '9% Conversion Rate On Shopify & $4,800 Revenue Day @atomwilliamson',
  'One Video: 5,800,000 Views, 282,000 Shares, 193 New Customers',
  'Raised $94,500 For Local Charities/Homeless',
  'Built MVP & Team Of 7 In College To Build AI Models For Going Viral',
  '150M+ Views Across All Socials',
  '$125,000+ Generated From Content & Marketing Strategies',
  'Created 100k Views+ Viral Engines For 7 Different Struggling Accounts',
  '60k Followers On TikTok @gymjunkie69_',
  '30+ Daily Google Reviews For @fitness19gyms',
  '13 Million View Video For A Client',
  'Bench 405 & Squat 545 @ Age 21',
  'My Work Ethic',
  'Cancelled A $2,000 Trip To Europe Cuz I Was Passionate About A Project',
  'One Time I Ate Three 4x4\'s From In & Out',
]

export default function AccomplishmentsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedResult, setSelectedResult] = useState<Result | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Only include results from testimonials section plus two specific images and record images
  const uniqueImages = [
    '/unamed2 (1).png',
    '/VIEWS.png',
    '/views2.png',
    '/Atom Results.png',
    '/IMG_3579.PNG',
    '/Screenshot 2025-11-24 133137.png',
    '/Leads To A Dozen Others.png',
    '/One Viral Post Dozen Other (1).png',
    '/State%20Record.JPG',
    '/National%20Record.png',
  ]

  return (
    <main className="min-h-screen overflow-x-hidden">
      <FloatingAboutButton />
      
      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link
          href="/"
          className="group flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 text-white" />
          <span className="text-sm font-medium text-white">Back</span>
        </Link>
      </motion.div>

      <section className="py-8 md:py-16 px-4 md:px-6 pt-20 md:pt-24 overflow-x-hidden">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 mb-4 md:mb-6"
            >
              <Trophy className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
            </motion.div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6">
              Accomplishments
            </h1>
            <p className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto px-2">
              A collection of achievements, milestones, and results from my journey
            </p>
          </motion.div>

          {/* Accomplishments List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-12 md:mb-20"
          >
            <div className="max-w-3xl mx-auto">
              <div className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-4 md:p-6 lg:p-8">
                <ul className="space-y-2 md:space-y-3 text-sm md:text-base lg:text-lg text-white/90 leading-relaxed">
                  {accomplishments.map((accomplishment, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.02, duration: 0.4 }}
                      className="flex items-start gap-2 md:gap-3"
                    >
                      <span className="text-white/40 flex-shrink-0">-</span>
                      <span className="break-words">{accomplishment}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Results & Graphs Gallery */}
          {uniqueImages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-12"
            >
              <div className="text-center mb-6 md:mb-10">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 text-white">
                  Results
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                {uniqueImages.map((image, index) => {
                  const isLeadsImage = image.includes('Leads To A Dozen Others')
                  const isViralPostImage = image.includes('One Viral Post Dozen Other')
                  const isSpecialImage = isLeadsImage || isViralPostImage
                  const isCoverImage = image.includes('iansidmannn.png') || image.includes('goofygarms.png')
                  
                  return (
                    <motion.button
                      key={image}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.05, duration: 0.5 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      onClick={() => setSelectedImage(image)}
                      className="group relative w-full rounded-lg border border-white/10 bg-white/5 backdrop-blur overflow-hidden hover:border-white/20 transition-all duration-300"
                    >
                      <div className={`relative w-full ${isCoverImage ? 'aspect-[3/2] bg-white' : isViralPostImage ? 'aspect-square' : isLeadsImage ? 'aspect-square' : 'aspect-video'}`}>
                        {isCoverImage ? (
                          <Image
                            src={image}
                            alt={`Result ${index + 1}`}
                            fill
                            className="object-cover"
                            style={{ objectPosition: image.includes('goofygarms.png') ? 'center top' : 'center center' }}
                          />
                        ) : isViralPostImage ? (
                          <Image
                            src={image}
                            alt={`Result ${index + 1}`}
                            fill
                            className="object-contain scale-[0.9]"
                          />
                        ) : isLeadsImage ? (
                          <Image
                            src={image}
                            alt={`Result ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full p-2">
                            <Image
                              src={image}
                              alt={`Result ${index + 1}`}
                              width={800}
                              height={600}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>
          )}

          {/* Key Results */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mb-12 md:mb-20 mt-16 md:mt-32"
          >
              <div className="text-center mb-6 md:mb-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-white">
                  Key Results
                </h2>
              </div>
            
            {/* Mobile: 2x2 Grid */}
            <div className="grid grid-cols-2 gap-2 md:hidden mb-8">
              {results.map((result, index) => (
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group p-3 md:p-4 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-white/30 transition-all duration-300 overflow-visible"
                >
                  <div className="mb-2 overflow-visible">
                    <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-1 leading-normal pb-0.5 overflow-visible">
                      {result.metric}
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-1">
                      {result.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed mb-2">
                    {result.description}
                    {result.account && result.accountUrl && result.showAccountLink === false && (
                      <> for{' '}
                        <a
                          href={result.accountUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:text-purple-300 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {result.account}
                        </a>
                      </>
                    )}
                  </p>
                  {result.account && result.accountUrl && result.showAccountLink !== false && (
                    <a
                      href={result.accountUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300 transition-colors mb-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {result.account}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  <button
                    onClick={() => {
                      setSelectedResult(result)
                      setIsModalOpen(true)
                    }}
                    className="text-xs text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Learn More →
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Desktop: Grid Layout */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((result, index) => (
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group p-6 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-white/30 transition-all duration-300 overflow-visible"
                >
                  <div className="mb-3 overflow-visible">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-1.5 leading-normal pb-1 overflow-visible">
                      {result.metric}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {result.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    {result.description.split('atomwilliamson.com').map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <a
                            href="https://atomwilliamson.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-400 hover:text-purple-300 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            atomwilliamson.com
                          </a>
                        )}
                      </span>
                    ))}
                    {result.account && result.accountUrl && result.showAccountLink === false && (
                      <> for{' '}
                        <a
                          href={result.accountUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:text-purple-300 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {result.account}
                        </a>
                      </>
                    )}
                  </p>
                  {result.account && result.accountUrl && result.showAccountLink !== false && (
                    <a
                      href={result.accountUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300 transition-colors mb-3"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {result.account}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  <button
                    onClick={() => {
                      setSelectedResult(result)
                      setIsModalOpen(true)
                    }}
                    className="text-sm text-purple-400 hover:text-purple-300 transition-colors mt-2"
                  >
                    Learn More →
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <ResultModal
            result={selectedResult}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
              onClick={() => setSelectedImage(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-w-5xl w-full max-h-[90vh]">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition z-10"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/20 bg-black/50">
                  <Image
                    src={selectedImage}
                    alt="Result"
                    width={1200}
                    height={800}
                    className="w-full h-auto max-h-[90vh] object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <SocialFooter />
    </main>
  )
}
