'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from '@/components/shared/ThemeToggle'
import { cn } from '@/lib/utils'

export function FloatingStatusBar() {
  const [time, setTime] = useState('')
  const [mounted, setMounted] = useState(false)
  const [pastHero, setPastHero] = useState(false)

  useEffect(() => {
    setMounted(true)
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString('en-KE', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
          timeZone: 'Africa/Nairobi',
        })
      )
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const sentinel = document.getElementById('brief-hero-end')
    if (!sentinel) {
      const onScroll = () => setPastHero(window.scrollY > 200)
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => window.removeEventListener('scroll', onScroll)
    }

    const observer = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { threshold: 0, rootMargin: '0px' }
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  return (
    <AnimatePresence>
      {pastHero && (
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className={cn(
            'fixed top-4 left-1/2 z-50 -translate-x-1/2',
            'flex items-center gap-4 rounded-full',
            'border border-slate-200/20 bg-[#080f1e]/80 px-5 py-2.5 backdrop-blur-md',
            'dark:border-slate-700/40'
          )}
          role="banner"
          aria-label="Site navigation"
        >
          {/* Live indicator */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
            </span>
            <span className="font-mono text-xs text-teal-400">
              {mounted ? time : '--:--:--'} EAT
            </span>
          </div>

          <span className="h-3 w-px bg-slate-600" aria-hidden="true" />

          {/* Nav links */}
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-1" role="list">
              {[
                { href: '/about', label: 'About' },
                { href: '/work', label: 'Work' },
                { href: '/dashboards', label: 'Data' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="rounded-md px-3 py-1 text-xs font-medium text-slate-400 transition-colors hover:bg-slate-800 hover:text-teal-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <span className="h-3 w-px bg-slate-600" aria-hidden="true" />
          <ThemeToggle />
        </motion.header>
      )}
    </AnimatePresence>
  )
}
