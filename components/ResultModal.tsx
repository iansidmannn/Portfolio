'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { Result } from '@/data/results'

interface ResultModalProps {
  result: Result | null
  isOpen: boolean
  onClose: () => void
}

export default function ResultModal({ result, isOpen, onClose }: ResultModalProps) {
  if (!result) return null

  const getVideoLinkText = (url?: string) => {
    if (!url) return 'View →'
    if (url.includes('tiktok.com')) return 'View on TikTok →'
    if (url.includes('instagram.com')) return 'View on Instagram →'
    return 'View →'
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-black/90 rounded-2xl border border-white/20 p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Content */}
              <div className="mt-4">
                <div className="mb-6">
                  <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    {result.metric}
                  </div>
                  <h3 className="text-3xl font-semibold text-white mb-4">
                    {result.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    {result.description}
                  </p>
                  {result.account && result.accountUrl && (
                    <a
                      href={result.accountUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      {result.account}
                    </a>
                  )}
                </div>

                {(() => {
                  const videos = result.videos || (result.video ? [result.video] : []);
                  
                  if (videos.length > 0 && result.learnMore) {
                    return (
                      <div className="mb-6 space-y-6">
                        {/* Videos first, full width */}
                        <div className="space-y-4">
                          {videos.map((video, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                              className="relative w-full rounded-lg overflow-hidden border border-white/10"
                            >
                              <video
                                src={video}
                                controls
                                className="w-full h-auto"
                                playsInline
                                preload="none"
                              >
                                Your browser does not support the video tag.
                              </video>
                            </motion.div>
                          ))}
                          {result.videoUrl && (
                            <div className="text-center">
                              <a
                                href={result.videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-400 hover:text-purple-300 transition-colors text-sm"
                              >
                                {getVideoLinkText(result.videoUrl)}
                              </a>
                            </div>
                          )}
                        </div>
                        {/* Text below videos */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + videos.length * 0.1, duration: 0.5 }}
                          className="prose prose-invert max-w-none"
                        >
                          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                            {result.learnMore}
                          </p>
                        </motion.div>
                      </div>
                    );
                  }
                  
                  return (
                    <>
                      {videos.length > 0 && (
                        <div className="mb-6 space-y-4">
                          {videos.map((video, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                              className="relative w-full rounded-lg overflow-hidden border border-white/10"
                            >
                              <video
                                src={video}
                                controls
                                className="w-full h-auto"
                                playsInline
                                preload="none"
                              >
                                Your browser does not support the video tag.
                              </video>
                            </motion.div>
                          ))}
                          {result.videoUrl && (
                            <div className="text-center">
                              <a
                                href={result.videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-400 hover:text-purple-300 transition-colors text-sm"
                              >
                                {getVideoLinkText(result.videoUrl)}
                              </a>
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  );
                })()}

                {result.learnMore && !result.videos && !result.video && (
                  <div className="mb-6">
                    <div className="prose prose-invert max-w-none">
                      <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                        {result.learnMore}
                      </p>
                    </div>
                  </div>
                )}

                {result.images && result.images.length > 0 && (
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-4">
                      {result.images.map((image, index) => {
                        const isLeadsImage = image.includes('Leads To A Dozen Others');
                        const isCoverImage = image.includes('iansidmannn.png') || image.includes('goofygarms.png');
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`relative w-full rounded-lg border border-white/10 ${isLeadsImage ? 'overflow-visible flex items-center justify-center' : 'overflow-hidden'} ${isCoverImage ? 'aspect-[3/2] bg-white' : ''}`}
                          >
                            {isCoverImage ? (
                              <Image
                                src={image}
                                alt={`${result.title} - Image ${index + 1}`}
                                fill
                                className="object-cover"
                                style={{ objectPosition: image.includes('goofygarms.png') ? 'center top' : 'center center' }}
                              />
                            ) : (
                              <div className={isLeadsImage ? 'scale-[1.2] origin-center' : 'w-full'}>
                                <Image
                                  src={image}
                                  alt={`${result.title} - Image ${index + 1}`}
                                  width={isLeadsImage ? 3600 : 800}
                                  height={isLeadsImage ? 2700 : 600}
                                  className="w-full h-auto object-contain"
                                />
                              </div>
                            )}
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

