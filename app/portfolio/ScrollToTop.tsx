'use client'

import { useEffect } from 'react'

/** Some embedded media on this page can shift scroll on load; external
 *  links (e.g. the resume PDF) should always land at the top. */
export default function ScrollToTop() {
  useEffect(() => {
    if (window.location.hash) return
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])
  return null
}
