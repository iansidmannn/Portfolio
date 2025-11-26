'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Video } from '@/data/videos'
import TikTokEmbed from './TikTokEmbed'
import InstagramEmbed from './InstagramEmbed'

interface VideoModalProps {
  video: Video | null
  isOpen: boolean
  onClose: () => void
}

export default function VideoModal({ video, isOpen, onClose }: VideoModalProps) {
  if (!video) return null

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
            <div className="relative bg-black/90 rounded-2xl border border-white/20 p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Content */}
              <div className="mt-4">
                {video.platform === 'tiktok' ? (
                  <div className="space-y-4">
                    <TikTokEmbed url={video.url} className="w-full" />
                    <div className="text-center pt-4 border-t border-white/10">
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                      >
                        Open on TikTok →
                      </a>
                    </div>
                  </div>
                ) : video.platform === 'instagram' ? (
                  <div className="space-y-4">
                    <InstagramEmbed url={video.url} className="w-full" />
                    <div className="text-center pt-4 border-t border-white/10">
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                      >
                        Open on Instagram →
                      </a>
                    </div>
                  </div>
                ) : video.video ? (
                  <div className="space-y-4">
                    <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden border border-white/10 mx-auto max-w-md bg-black">
                      <video
                        src={video.video}
                        controls
                        className="w-full h-full object-contain"
                        playsInline
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="text-center pt-4 border-t border-white/10">
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                      >
                        Open on YouTube →
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-gray-400 py-12">
                    <p>Embedding not available for {video.platform}</p>
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 mt-4 inline-block"
                    >
                      Open on YouTube →
                    </a>
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

