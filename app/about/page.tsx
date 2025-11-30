'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, ArrowLeft, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import FloatingAboutButton from '@/components/FloatingAboutButton'
import SocialFooter from '@/components/SocialFooter'

type Story = {
  id: string
  title: string
  image: string
  imagePosition?: string
  summary: string
  content: string
  images?: string[]
}

const stories: Story[] = [
  {
    id: 'first-business',
    title: 'The Story Of My First Real Business',
    image: '/baller 2.jpg',
    imagePosition: 'center 40%',
    summary: 'How I built Goofy Garments—my first time taking a bet on a business I believed in.',
    content: `A project I worked on that I'm really proud of was my clothing brand goofy garments. It was my first real attempt at building a business I believed in and I had no clue what I was doing haha. I had just arrived at college and at that time I was selling streetwear clothes as a passion project. From the ups and downs of that project I started to piece more and more of a picture how markets worked and responded to content/what current markets existed on social media.

About a month or so into college I realized there was a huge gap in the market for funny clothes, the people that were selling them just weren't doing it right, and all these hilarious shirt ideas that aligned with the public consciousness weren't being sold or marketed.

Hence goofy garments was born. I took a gamble spent the time to build the store, brought my equipment to make clothes from back home to Oregon where I went to school & started cooking up in my college dorm. What I believed in most was the shirts and my ability to market them which was a new feeling for me. Up until this point all the projects I pursued I guess were kinda unconcious? I started my tiktok in highschool for attention, I did my clothing brand cuz I liked money and the idea of running a business/learning, and getting the USA bench press national record was just something I did versus trained for my whole life, but this was an idea I believed in and took a bet on.

And man, in the first two weeks I hit 2.5m views on Instagram and it was just the best feeling. There's some part of my psyche thats just obsessed with strategy, taking bets, and seeing change in the world and mannnnnnn up until that point nothing scratched the itch anywhere as much as that did. And it didn't stop there, eventually I was able to put out a video that got 5.8m views and 193 new customers, I vividly remember going on a hike with my friends while this video was ripping and just hearing cha ching cha ching cha ching cha ching, it was so many that I gave up on production and found manufacturers haha. But it felt awesome.

Looking back on this I ran this business pretty one dimensionally, make funny content & clothes, try to go viral, when videos blew up I made a lot of sales, and outside of that a little sales here and there from engaging with my audience. If I were to do it again I'd invest a lot more in brand/community building. I think 3 loyal fans are often worth more than 1 million views.

Outside of that though this was really the experience that gave me permission to become who I am today, it allowed me to believe I can build something consciously which was something that was always a little grey for me from my upbringing.

Ahhhh I love it. So good :) @goofygarmentshop on instagram btw`,
  },
  {
    id: 'training-record',
    title: 'Training To Get A National Record',
    image: '/gym.png',
    imagePosition: 'center 15%',
    images: ['/State%20Record.JPG', '/National%20Record.png'],
    summary: 'How my favorite hobby turned into followers, friends, and a USA national record.',
    content: `Lifting to me always symbolized freedom in my life, even from my youngest years I could admire a buff dude and just imagine how happy, stable, and easy life must be for them. (Lol the movies got me hard), anyways when I had picked up my first set of weights up at 5, and I loved them I'd use them all the time.

But it wasn't until 6th grade, where unfortuantely I got bullied, where I became obsessed with lifting. I wanted to grow fast, strong, bigger then my problems type deal.

Then came seventh grade, I had hacked all the popular kids pokemon go accounts and got them dragonites so I actually was invited into their friend group (massive win for lil dude). I was the butt of the group but I was really happy to have cool friends. Anyways, because I started taking lifting seriously in 6th grade, by seventh grade I was pretty strong and guessss what. People started to compliment me, OHHHH MY GODDDDD. WHATEVER IM DOING DO MORE. that's all my brain could think at the time. People started to come to my house to workout with me, and wanted to hangout with me because of it. It was the best and felt really awesome at the time. This obsession with stregth as a way to self improve would continue into highschool, in highschool we had all the strongest kids in my area in one friend group competeing and pushing one another. (not to flex but by junior year I was the strongest) (okay that was totally a flex my bad)

Junior year of highschool my bestfriend Corey tells me that we're both not too far off getting national records, and that brought my obsession to a whole different level.

We trained and programmed really hard, and then we smashed it.

We both walked away with national records on bench press (our most competitve lift) and I also got the state record on squat just cuz lol. I could've lifted more on that day too, I really botched my lifts because I was nervous.

But you know, I guess I'm happy with a national record or whatever.`,
  },
] as const

export default function AboutPage() {
  const [selectedStory, setSelectedStory] = useState<(typeof stories)[number] | null>(null)

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
                    src="/baller 2.jpg"
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
                    src="/baller 3.jpg"
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
                  I'm obsessed with strategy and pursuing ideas that effect change. Even writing this right now, just thinking about effecting change is pumping me up in the middle of the library.
                  I love the game, I love strategy, and I love being apart of team & creating something.
                </p>
                <p>
                  On a day to day basis I live and breathe marketing, I take pictures of everything I see that captures my attention - even with the simplest things 
                  I'm constantly thinking about attention and content, It's like a sport.
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

      {/* Clickable Stories */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="uppercase text-sm tracking-[0.4em] text-white/60 mb-3">
              Stories
            </p>
            <h3 className="text-4xl md:text-5xl font-bold text-white">
              Chapters That Made Me
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {stories.map(story => (
              <motion.button
                key={story.id}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-md"
                onClick={() => setSelectedStory(story)}
              >
                <div className="relative w-full h-72">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                    style={{ objectPosition: story.imagePosition || 'center center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-x-6 bottom-6 text-left">
                    <p className="text-xs text-white/60 uppercase tracking-[0.4em] mb-3">
                      Tap To Read
                    </p>
                    <h4 className="text-2xl font-semibold text-white mb-3">
                      {story.title}
                    </h4>
                    <p className="text-sm text-gray-200 line-clamp-3">
                      {story.summary}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedStory && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              onClick={() => setSelectedStory(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
            >
              <div className="relative w-full max-w-3xl bg-black/90 border border-white/15 rounded-3xl p-8 overflow-y-auto max-h-[90vh]">
                <button
                  onClick={() => setSelectedStory(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
                >
                  <X className="w-5 h-5 text-white" />
                </button>

                <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-white/10 mb-6">
                  <Image
                    src={selectedStory.image}
                    alt={selectedStory.title}
                    fill
                    className="object-cover"
                    style={{ objectPosition: selectedStory.imagePosition || 'center center' }}
                  />
                </div>

                {selectedStory.images && selectedStory.images.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {selectedStory.images.map((img, index) => (
                      <div
                        key={img}
                        className="relative w-full h-48 sm:h-40 rounded-2xl overflow-hidden border border-white/10"
                      >
                        <Image
                          src={img}
                          alt={`${selectedStory.title} extra ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <h4 className="text-3xl font-bold text-white mb-4">
                  {selectedStory.title}
                </h4>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {selectedStory.content}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <SocialFooter />
    </main>
  )
}

