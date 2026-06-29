'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface Props {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
}

export function AnimatedCounter({ value, suffix = '', prefix = '', duration = 2000 }: Props) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true

    const start = performance.now()
    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.floor(eased * value))
      if (progress < 1) requestAnimationFrame(tick)
      else setDisplay(value)
    }
    requestAnimationFrame(tick)
  }, [inView, value, duration])

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  )
}
