'use client'

import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface Props {
  text: string
  speed?: number
  delay?: number
  className?: string
  onComplete?: () => void
  cursor?: boolean
}

export function TypewriterText({
  text,
  speed = 28,
  delay = 0,
  className,
  onComplete,
  cursor = true,
}: Props) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const calledComplete = useRef(false)

  useEffect(() => {
    if (!inView) return
    const t = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(t)
  }, [inView, delay])

  useEffect(() => {
    if (!started) return
    if (displayed.length >= text.length) {
      setDone(true)
      if (!calledComplete.current) {
        calledComplete.current = true
        onComplete?.()
      }
      return
    }
    const t = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1))
    }, speed)
    return () => clearTimeout(t)
  }, [started, displayed, text, speed, onComplete])

  return (
    <span ref={ref} className={className}>
      {displayed}
      {cursor && !done && (
        <span className="ml-0.5 inline-block h-[1em] w-0.5 animate-pulse bg-teal-400 align-middle" />
      )}
    </span>
  )
}
