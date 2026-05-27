'use client'

import { useEffect } from 'react'

// Placeholder until the App Store listing exists. Swap to the real
// apps.apple.com URL once KickIt is live.
const APP_STORE_URL = 'https://apps.apple.com/us/app/kickit'

type Props = {
  emoji: string
  headline: string
  subhead: string
}

export default function InstallCard({ emoji, headline, subhead }: Props) {
  // Deferred deep-link bridge: copy the current URL to the clipboard so
  // KickIt's first-launch paste detector can route the user back to the
  // intended hangout / group / friend after install.
  useEffect(() => {
    try {
      navigator.clipboard?.writeText(window.location.href).catch(() => {})
    } catch {}
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-black">
      <div className="w-full max-w-md text-center">
        <div className="text-6xl mb-6">{emoji}</div>
        <h1 className="text-4xl font-black tracking-tight text-white mb-3">
          {headline}
        </h1>
        <p className="text-lg text-gray-300 mb-10">{subhead}</p>

        <a
          href={APP_STORE_URL}
          className="inline-block w-full max-w-xs px-8 py-4 bg-blue-500 hover:bg-blue-400 transition-colors rounded-2xl text-white font-bold text-lg shadow-lg shadow-blue-500/30"
        >
          Get KickIt
        </a>

        <p className="mt-6 text-sm text-gray-500">
          Already have the app? It should open automatically.
        </p>

        <div className="mt-16 text-xs text-gray-600 tracking-widest font-semibold">
          KICKIT · HANG WITH FRIENDS, RIGHT NOW
        </div>
      </div>
    </div>
  )
}
