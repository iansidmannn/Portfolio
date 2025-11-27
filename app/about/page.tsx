'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import FloatingAboutButton from '@/components/FloatingAboutButton'
import SocialFooter from '@/components/SocialFooter'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
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

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Me
            </h1>
          </motion.div>

          <div className="space-y-8">
            {/* First block: Intro with image side-by-side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 backdrop-blur-sm p-8 md:p-10"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                  <p className="text-2xl font-semibold text-white">
                    Hellllloooo! My name is Ian
                  </p>
                  <p>
                    If you can't tell by the picture of me flexing how far I can get out of my seat, I'm very very very normal
                  </p>
                  <p>
                    Humor helps me navigate reality & enjoy life
                  </p>
                  <p>
                    I love connecting with people, it's weird socially I'm an extrovert, but with the people I want to connect with I'm actually pretty shy at first.
                  </p>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="rounded-lg overflow-hidden"
                >
                  <Image
                    src="/IMG_2538.JPG"
                    alt="Ian"
                    width={600}
                    height={600}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Second block: Gym with image side-by-side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 backdrop-blur-sm p-8 md:p-10"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="rounded-lg overflow-hidden order-2 md:order-1"
                >
                  <Image
                    src="/gymphoto.png"
                    alt="Lifting weights"
                    width={600}
                    height={600}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </motion.div>
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed order-1 md:order-2">
                  <p>
                    Lifting weights with my friends has always been a favorite part of my life, me and my bestfriend both got a national record when I was 17, pretty cool hehe.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Third block: Family with image side-by-side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 backdrop-blur-sm p-8 md:p-10"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                  <p>
                    My relationship with my family is very important to me, they can be a pain in the BOOTY sometimes, but I can't imagine life without them. They're one of the biggest sources of love/energy I can draw on when I'm in need.
                  </p>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="rounded-lg overflow-hidden"
                >
                  <Image
                    src="/famphoto.png"
                    alt="Family"
                    width={600}
                    height={600}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Fourth block: Sidequests with image side-by-side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 backdrop-blur-sm p-8 md:p-10"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                  <p>
                    I spend most of free time with friends, in the bible, or picking up creative sidequests like starting clothing brands. I just made it to mainquest season, and that's why I made this portfolio haha.
                  </p>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="rounded-lg overflow-hidden aspect-[4/3]"
                >
                  <Image
                    src="/ballerflexwithaurasauce.JPG"
                    alt="Sidequests"
                    width={600}
                    height={450}
                    className="w-full h-full rounded-lg object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Fifth block: Ambitions with image side-by-side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 backdrop-blur-sm p-8 md:p-10"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                  <p>
                    I've always been very ambitious and I love to build things!
                  </p>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="rounded-lg overflow-hidden"
                >
                  <Image
                    src="/IMG_1136.JPG"
                    alt="Ambitious"
                    width={600}
                    height={600}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why I Create Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-black/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-500/20 to-red-500/20 border border-pink-500/30 mb-6"
            >
              <Heart className="w-8 h-8 text-pink-400" fill="currentColor" />
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Why I Create
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 backdrop-blur-sm p-8 md:p-10">
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  I'm obsessed with strategy, pursuing ideas and seeing them effect change is extremely satisfying to me. Even writing this right now, just thinking about effecting change is pumping me up in the middle of the library.
                  I love the game, I love strategy, and I love being apart of team & creating something.
                </p>
                <p>
                  On a day to day basis I live and breathe marketing, I take pictures of everything I see that captures my attention and put it in an album in my camera roll.
                  I'm constantly thinking about attention and content, It's almost like a sport I thoroughly enjoy.
                </p>
                <p>
                  To me it's not just about the numbers—it's about knowing that something 
                  you created resonated with thousands, or millions, of people.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SocialFooter />
    </main>
  )
}

