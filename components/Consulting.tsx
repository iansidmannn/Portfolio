'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { bigCreatorConsulting, otherConsulting } from '@/data/consulting'

export default function Consulting() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent to-black/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold">
            Consulting Work
          </h2>
        </motion.div>

        <div className="space-y-12">
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center text-purple-300">
              Big Creator Consulting
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {bigCreatorConsulting.map((client, index) => (
                <motion.div
                  key={client.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="p-6 bg-gradient-to-br from-white/5 to-white/0 rounded-xl border border-white/10 backdrop-blur-sm hover:border-white/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">
                        {client.name}
                      </h4>
                      <p className="text-purple-400 text-sm">{client.followers} Followers</p>
                    </div>
                    {client.accountUrl && (
                      <a
                        href={client.accountUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{client.description}</p>
                  <ul className="space-y-1">
                    {client.work.map((item, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-8 text-center text-blue-300">
              Other Consulting Work
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherConsulting.map((client, index) => (
                <motion.div
                  key={client.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="p-6 bg-gradient-to-br from-white/5 to-white/0 rounded-xl border border-white/10 backdrop-blur-sm hover:border-white/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">
                        {client.name}
                      </h4>
                      {client.followers !== 'N/A' && client.followers !== 'Personal' && (
                        <p className="text-blue-400 text-xs">{client.followers} Followers</p>
                      )}
                    </div>
                    {client.accountUrl && (
                      <a
                        href={client.accountUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{client.description}</p>
                  <ul className="space-y-1">
                    {client.work.map((item, i) => (
                      <li key={i} className="text-gray-400 text-xs flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

