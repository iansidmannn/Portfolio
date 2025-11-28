'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { results, Result } from '@/data/results'
import ResultModal from './ResultModal'

export default function ResultsCarousel() {
  const [selectedResult, setSelectedResult] = useState<Result | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Listen for custom event to open result modal
  useEffect(() => {
    const handleOpenModal = (event: CustomEvent) => {
      const resultId = event.detail
      const result = results.find(r => r.id === resultId)
      if (result) {
        setSelectedResult(result)
        setIsModalOpen(true)
      }
    }

    window.addEventListener('openResultModal', handleOpenModal as EventListener)
    return () => {
      window.removeEventListener('openResultModal', handleOpenModal as EventListener)
    }
  }, [])
  return (
    <section id="results-section" className="py-12 px-6 -mt-8 relative">
      {/* Animated connection element - points to key results */}
      <div className="absolute top-0 left-0 right-0 h-40 md:h-48 pointer-events-none hidden md:block" style={{ zIndex: 1 }}>
        <div className="relative w-full h-full overflow-hidden">
          {/* Left flow - diagonal to leftmost result */}
          <motion.div
            className="absolute left-[27.666%] top-0"
            style={{
              width: '2px',
              height: '192px',
              transform: 'rotate(20deg)',
              transformOrigin: 'top center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-purple-400/50 via-purple-400/30 to-transparent" />
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-purple-400/70 blur-[2px]"
                style={{
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
                animate={{
                  y: [0, 180],
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1, 0.8, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>

          {/* Center flow - straight down to center result */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5"
            style={{ height: '192px' }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-purple-400/40 via-blue-400/30 to-transparent" />
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 blur-[2px]"
                style={{
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
                animate={{
                  y: [0, 180],
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1.2, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>

          {/* Right flow - diagonal to rightmost result */}
          <motion.div
            className="absolute right-[27.666%] top-0"
            style={{
              width: '2px',
              height: '192px',
              transform: 'rotate(-20deg)',
              transformOrigin: 'top center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-400/50 via-blue-400/30 to-transparent" />
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-blue-400/70 blur-[2px]"
                style={{
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
                animate={{
                  y: [0, 180],
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1, 0.8, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.6 + 0.3,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
      
      <div className="container mx-auto max-w-7xl">
        {/* Mobile: 2x2 Grid */}
        <div className="grid grid-cols-2 gap-4 pb-8 md:hidden">
          {results.map((result, index) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-4 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-white/30 transition-all duration-300 overflow-visible"
            >
              <div className="mb-2 overflow-visible">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-1 leading-normal pb-0.5 overflow-visible">
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

        {/* Desktop: Horizontal Scroll/Center */}
        <div className="overflow-x-auto overflow-y-visible pb-8 -mx-6 px-6 md:pt-40 md:overflow-x-visible hidden md:block">
          <div className="flex flex-wrap gap-6 md:justify-center md:py-4">
            {results.map((result, index) => (
              <>
                {index === 4 && <div className="basis-full"></div>}
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group flex-shrink-0 w-72 p-6 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-white/30 transition-all duration-300 md:origin-center overflow-visible"
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
              </>
            ))}
          </div>
        </div>
      </div>

      <ResultModal
        result={selectedResult}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}

