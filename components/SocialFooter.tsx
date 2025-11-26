'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Mail, Phone, Instagram, Linkedin, FileText } from 'lucide-react'

const socials = [
  {
    id: 'youtube',
    name: 'YouTube',
    handle: '@iansidmann',
    url: 'https://www.youtube.com/@iansidmann',
    icon: '/icons/youtube.svg',
    accent: 'from-red-500/50 to-red-700/20',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@iansidmann',
    url: 'https://www.instagram.com/iansidmann',
    icon: '/icons/instagram.svg',
    accent: 'from-orange-500/40 via-pink-500/40 to-purple-600/20',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    handle: '@iansidmann',
    url: 'https://www.tiktok.com/@gymjunkie69_',
    icon: '/icons/tiktok.svg',
    accent: 'from-slate-900/60 via-slate-800/40 to-slate-900/20',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'Ian Sidman',
    url: 'https://www.linkedin.com/in/ian-sidman/',
    icon: '/icons/linkedin.svg',
    accent: 'from-blue-500/50 to-blue-700/20',
  },
]

export default function SocialFooter() {
  return (
    <section className="py-12 px-6 border-t border-white/5">
      <div className="container mx-auto max-w-4xl">
        {/* Contact Options */}
        <div className="grid gap-4 md:grid-cols-3 mb-8 md:mb-12">
          <motion.a
            href="mailto:iansidman@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6 backdrop-blur text-white hover:border-white/30 transition-colors"
          >
            <Mail className="w-6 h-6 md:w-8 md:h-8 text-purple-300 mb-3 md:mb-4" />
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gray-400 mb-2">Email</p>
            <p className="text-base md:text-lg font-semibold break-words leading-tight">iansidman@gmail.com</p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6 backdrop-blur text-white"
          >
            <Phone className="w-6 h-6 md:w-8 md:h-8 text-purple-300 mb-3 md:mb-4" />
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gray-400 mb-2">Phone</p>
            <a href="tel:8058073320" className="text-base md:text-xl font-semibold hover:text-purple-200 transition-colors block">
              805-807-3320
            </a>
            <p className="text-xs text-gray-400 mt-2">
              Calls will get blocked—text me first!
            </p>
          </motion.div>

          <motion.a
            href="https://www.instagram.com/iansidmann"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6 backdrop-blur text-white hover:border-white/30 transition-colors"
          >
            <Instagram className="w-6 h-6 md:w-8 md:h-8 text-purple-300 mb-3 md:mb-4" />
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gray-400 mb-2">Instagram</p>
            <p className="text-base md:text-xl font-semibold">@iansidmann</p>
            <p className="text-xs text-gray-400 mt-2">DMs are open.</p>
          </motion.a>
        </div>

        {/* Resume Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-8 md:mb-12 text-center"
        >
          <motion.a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl border-2 border-purple-400/50 bg-purple-500/20 px-6 py-4 backdrop-blur text-white hover:border-purple-400 hover:bg-purple-500/30 transition-all"
          >
            <FileText className="w-6 h-6 text-purple-300" />
            <div className="text-left">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-1">Resume</p>
              <p className="text-lg font-semibold">View My Resume</p>
            </div>
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {socials.map((social, index) => (
            <motion.a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group rounded-2xl md:rounded-3xl border border-white/10 bg-gradient-to-br ${social.accent} backdrop-blur-xl p-4 md:p-8 flex flex-col items-center gap-2 md:gap-4 hover:border-white/30 hover:-translate-y-2 transition-all`}
            >
              <div className="w-10 h-10 md:w-16 md:h-16 relative flex items-center justify-center">
                {social.id === 'linkedin' ? (
                  <Linkedin className="w-10 h-10 md:w-16 md:h-16 text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)]" />
                ) : (
                  <Image
                    src={social.icon}
                    alt={`${social.name} logo`}
                    fill
                    className="object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
                  />
                )}
              </div>
              <div className="space-y-0.5 md:space-y-1 text-center">
                <p className="text-white text-sm md:text-2xl font-semibold">{social.name}</p>
                <p className="text-gray-300 text-xs md:text-lg">{social.handle}</p>
              </div>
              <span className="text-xs md:text-sm font-semibold text-white/80 group-hover:text-white transition-colors hidden md:inline">
                Watch latest →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

