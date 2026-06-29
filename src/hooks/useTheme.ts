'use client'

import { useEffect } from 'react'
import { useTheme } from 'next-themes'

export function useTimeBasedTheme() {
  const { setTheme } = useTheme()

  useEffect(() => {
    const manualOverride = localStorage.getItem('theme-manual-override')
    if (manualOverride) return
    const hour = new Date().getHours()
    const preferredTheme = hour >= 6 && hour < 19 ? 'light' : 'dark'
    setTheme(preferredTheme)
  }, [setTheme])
}
