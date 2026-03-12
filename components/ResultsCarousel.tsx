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
    <section id="results-section" className="py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10">
      <div className="container mx-auto max-w-6xl mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-3">Notable Results</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Key Achievements
          </h2>
        </motion.div>
      </div>
      
      <div className="container mx-auto max-w-6xl">
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

        {/* Desktop: Grid Layout */}
        <div className="container mx-auto max-w-6xl pb-8 hidden md:block">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((result, index) => (
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
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
        </div>
      </div>

      {/* Note at the end */}
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm italic">
            and more i cant talk about yet
          </p>
        </motion.div>
      </div>

      <ResultModal
        result={selectedResult}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}

