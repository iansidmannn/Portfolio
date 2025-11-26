'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="space-y-2">
              <a
                href="https://www.youtube.com/@iansidmann"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors"
              >
                YouTube
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/iansidmann"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors"
              >
                Instagram
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@iantheviralguy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors"
              >
                TikTok
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Work</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Interested in working together? Let's create something viral.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Stats</h3>
            <div className="space-y-1 text-gray-400 text-sm">
              <p>150M+ Total Views</p>
              <p>56K+ Followers</p>
              <p>Multiple Viral Series</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Ian Sidmann. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

