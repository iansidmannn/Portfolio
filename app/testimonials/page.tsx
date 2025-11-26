'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import FloatingAboutButton from '@/components/FloatingAboutButton'
import SocialFooter from '@/components/SocialFooter'

export default function TestimonialsPage() {
  const testimonials = [
    '/testimonial.png',
    '/IMG_3110.PNG',
    '/IMG_2291.JPG',
  ]

  const results = [
    '/unamed2 (1).png',
    '/VIEWS.png',
    '/views2.png',
    '/Atom Results.png',
    '/IMG_3579.PNG',
    '/Screenshot 2025-11-24 133137.png',
  ]

  return (
    <main className="min-h-screen px-6 py-20">
      <FloatingAboutButton />
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

      <div className="container mx-auto max-w-6xl pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30"
          >
            <Star className="w-8 h-8 text-yellow-400" fill="currentColor" />
          </motion.div>
        </motion.div>

        {/* Video Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-16 -mt-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
            Video Testimonials
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur max-w-4xl mx-auto"
          >
            <div className="grid gap-8 md:grid-cols-2">
              {/* Atom Williamson */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-3">
                  <a
                    href="https://www.tiktok.com/@atomwilliamson"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-purple-300 transition-colors">
                      Atom Williamson
                    </h3>
                    <div className="flex items-center justify-center gap-2 text-gray-300">
                      <span className="text-sm group-hover:text-purple-300 transition-colors">@atomwilliamsonn</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-400">600K followers</span>
                    </div>
                  </a>
                </div>
                <div className="relative w-full max-w-xs rounded-lg overflow-hidden border border-white/10 mb-3">
                  <video
                    src="/IMG_3001.mov"
                    controls
                    className="w-full h-auto"
                    preload="metadata"
                    playsInline
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="text-gray-300 text-sm italic">
                  "couldn't do it without you"
                </p>
              </div>

              {/* Charity Karaoke */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-3">
                  <a
                    href="https://www.instagram.com/charitykaraoke/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-purple-300 transition-colors">
                      Charity Karaoke
                    </h3>
                    <div className="flex items-center justify-center gap-2 text-gray-300">
                      <span className="text-sm group-hover:text-purple-300 transition-colors">@charitykaraoke</span>
                    </div>
                  </a>
                </div>
                <div className="relative w-full max-w-xs rounded-lg overflow-hidden border border-white/10 mb-3">
                  <video
                    src="/1124(1).mp4"
                    controls
                    className="w-full h-auto"
                    preload="metadata"
                    playsInline
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="text-gray-300 text-sm italic">
                  "the best energy ever, we love you Ian💜"
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Image Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Testimonials
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur overflow-hidden"
              >
                <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
                  <Image
                    src={testimonial}
                    alt={`Testimonial ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Results
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur overflow-hidden"
              >
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={result}
                    alt={`Result ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Spacer before contact section */}
      <div className="py-20 md:py-32" />
      
      <SocialFooter />
    </main>
  )
}

