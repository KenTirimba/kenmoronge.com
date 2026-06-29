'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <div className={cn('h-9 w-9 rounded-full bg-slate-200 dark:bg-slate-700', className)} />
    )
  }

  const isDark = theme === 'dark'

  function toggle() {
    const next = isDark ? 'light' : 'dark'
    localStorage.setItem('theme-manual-override', next)
    setTheme(next)
  }

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(
        'relative flex h-9 w-9 items-center justify-center rounded-full',
        'bg-slate-100 text-slate-600 transition-all duration-300',
        'hover:bg-slate-200 hover:text-navy-600',
        'dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-teal-400',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400',
        className
      )}
    >
      <Sun
        size={16}
        className={cn(
          'absolute transition-all duration-300',
          isDark ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
        )}
      />
      <Moon
        size={16}
        className={cn(
          'absolute transition-all duration-300',
          isDark ? '-rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
        )}
      />
    </button>
  )
}
