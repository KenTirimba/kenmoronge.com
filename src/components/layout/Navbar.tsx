'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, BarChart3 } from 'lucide-react'
import { ThemeToggle } from '@/components/shared/ThemeToggle'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/skills', label: 'Skills' },
  { href: '/dashboards', label: 'Dashboards' },
  { href: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => setMobileOpen(false), [pathname])

  return (
    <>
      <header
        role="banner"
        className={cn(
          'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/90 shadow-sm backdrop-blur-md dark:bg-[#080f1e]/90'
            : 'bg-transparent'
        )}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10"
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Ken Tirimba Moronge — Home"
            className="group flex items-center gap-2"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-600 text-white transition-colors group-hover:bg-teal-400">
              <BarChart3 size={16} />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-navy-600 dark:text-slate-100">
              Ken<span className="text-teal-400">.</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex" role="list">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'relative rounded-md px-3 py-2 text-sm font-medium transition-colors',
                      'hover:text-navy-600 dark:hover:text-teal-400',
                      active
                        ? 'text-navy-600 dark:text-teal-400'
                        : 'text-slate-600 dark:text-slate-300'
                    )}
                  >
                    {label}
                    {active && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-teal-400" />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Link
              href="/contact"
              className={cn(
                'hidden items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium md:inline-flex',
                'bg-navy-600 text-white transition-all duration-200',
                'hover:bg-navy-800 hover:shadow-md',
                'dark:bg-teal-400 dark:text-navy-900 dark:hover:bg-teal-300',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400'
              )}
            >
              Let&apos;s Talk
            </Link>

            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className={cn(
                'flex h-9 w-9 items-center justify-center rounded-full md:hidden',
                'text-slate-600 transition-colors hover:bg-slate-100',
                'dark:text-slate-300 dark:hover:bg-slate-800'
              )}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          'fixed inset-0 z-40 flex flex-col bg-white pt-20 dark:bg-[#080f1e] md:hidden',
          'transition-all duration-300',
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
      >
        <ul className="flex flex-col gap-1 px-6 py-4" role="list">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'flex items-center rounded-xl px-4 py-3 text-lg font-medium transition-colors',
                    active
                      ? 'bg-navy-600/10 text-navy-600 dark:bg-teal-400/10 dark:text-teal-400'
                      : 'text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800/50'
                  )}
                >
                  {label}
                </Link>
              </li>
            )
          })}
          <li className="mt-4">
            <Link
              href="/contact"
              className={cn(
                'flex items-center justify-center rounded-xl px-4 py-3 text-lg font-medium',
                'bg-navy-600 text-white transition-colors hover:bg-navy-800',
                'dark:bg-teal-400 dark:text-navy-900 dark:hover:bg-teal-300'
              )}
            >
              Let&apos;s Talk
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
