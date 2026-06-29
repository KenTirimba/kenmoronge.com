'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ArrowRight, Download, ChevronDown } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { cn } from '@/lib/utils'

const roles = [
  'Data Analyst',
  'Business Process Analyst',
  'BI Analyst',
  'Operations Analyst',
  'Web Developer',
  'Research Analyst',
]

const techBadges = [
  { label: 'Python', color: 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' },
  { label: 'SQL', color: 'bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' },
  { label: 'Power BI', color: 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' },
  { label: 'Next.js', color: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300' },
  { label: 'Lean Six Sigma', color: 'bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300' },
  { label: 'Tableau', color: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300' },
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)
  const floatRef = useRef<HTMLDivElement>(null)

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  // GSAP floating background nodes
  useEffect(() => {
    if (!floatRef.current) return
    const nodes = floatRef.current.querySelectorAll('.float-node')
    nodes.forEach((node, i) => {
      gsap.to(node, {
        y: `${(i % 2 === 0 ? -1 : 1) * (12 + i * 3)}px`,
        x: `${(i % 3 === 0 ? 1 : -1) * (8 + i * 2)}px`,
        duration: 3 + i * 0.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.3,
      })
    })
  }, [])

  // GSAP subtle grid pulse
  useEffect(() => {
    if (!gridRef.current) return
    gsap.to(gridRef.current, {
      opacity: 0.4,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  }, [])

  return (
    <section
      aria-label="Introduction"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-50 dark:bg-[#080f1e]"
    >
      {/* Background grid */}
      <div
        ref={gridRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(rgba(27,58,107,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(27,58,107,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Gradient orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-teal-400/10 blur-3xl dark:bg-teal-400/5" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-navy-600/10 blur-3xl dark:bg-navy-600/5" />
      </div>

      {/* Floating data nodes */}
      <div ref={floatRef} aria-hidden="true" className="pointer-events-none absolute inset-0">
        {[
          { top: '15%', left: '8%', size: 'h-2 w-2', color: 'bg-teal-400' },
          { top: '25%', right: '12%', size: 'h-3 w-3', color: 'bg-navy-600/40' },
          { top: '60%', left: '5%', size: 'h-2 w-2', color: 'bg-amber-400/60' },
          { top: '70%', right: '8%', size: 'h-2 w-2', color: 'bg-teal-400/60' },
          { top: '40%', right: '5%', size: 'h-1.5 w-1.5', color: 'bg-navy-400/40' },
          { top: '80%', left: '15%', size: 'h-1.5 w-1.5', color: 'bg-teal-300/50' },
        ].map((node, i) => (
          <span
            key={i}
            className={cn('float-node absolute rounded-full', node.size, node.color)}
            style={{ top: node.top, left: node.left, right: node.right }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative mx-auto w-full max-w-7xl px-6 py-32 md:px-10 md:py-40">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            custom={0}
            className="mb-6 flex items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-xs font-semibold text-teal-700 dark:border-teal-800 dark:bg-teal-900/30 dark:text-teal-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
              </span>
              Open to opportunities · Kenya &amp; Remote
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={fadeUp}
            custom={0.1}
            className="font-display text-5xl font-bold leading-[1.1] tracking-tight text-navy-600 dark:text-slate-50 md:text-6xl lg:text-7xl"
          >
            I turn data into
            <br />
            <span className="text-gradient">clear decisions.</span>
          </motion.h1>

          {/* Typewriter role line */}
          <motion.div
            variants={fadeUp}
            custom={0.2}
            className="mt-5 flex items-center gap-3"
            aria-live="polite"
            aria-label={`Current role: ${displayed}`}
          >
            <span className="text-xl font-medium text-slate-500 dark:text-slate-400 md:text-2xl">
              Ken Tirimba —
            </span>
            <span className="font-display text-xl font-bold text-navy-600 dark:text-teal-400 md:text-2xl">
              {displayed}
              <span className="ml-0.5 inline-block h-6 w-0.5 animate-pulse bg-teal-400 align-middle" />
            </span>
          </motion.div>

          {/* Sub-description */}
          <motion.p
            variants={fadeUp}
            custom={0.3}
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-500 dark:text-slate-400 md:text-lg"
          >
            Business Process Analyst at{' '}
            <span className="font-semibold text-navy-600 dark:text-slate-200">ADEC Innovations</span>{' '}
            with 4+ years transforming workflows and data into measurable business value — for clients
            like <span className="font-semibold text-navy-600 dark:text-slate-200">FedEx</span> and{' '}
            <span className="font-semibold text-navy-600 dark:text-slate-200">First American Financial</span>.
            I also build premium digital products for businesses across Kenya.
          </motion.p>

          {/* Tech badges */}
          <motion.div
            variants={fadeUp}
            custom={0.4}
            className="mt-8 flex flex-wrap gap-2"
          >
            {techBadges.map((badge) => (
              <span
                key={badge.label}
                className={cn(
                  'rounded-full px-3 py-1 text-xs font-medium',
                  badge.color
                )}
              >
                {badge.label}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            custom={0.5}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/work"
              className={cn(
                'inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold',
                'bg-navy-600 text-white shadow-md transition-all duration-200',
                'hover:bg-navy-800 hover:shadow-lg hover:-translate-y-0.5',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400'
              )}
            >
              View My Work
              <ArrowRight size={16} />
            </Link>

            <a
              href="https://wa.me/254707792059"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold',
                'bg-[#25D366] text-white shadow-md transition-all duration-200',
                'hover:bg-[#20b858] hover:shadow-lg hover:-translate-y-0.5',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]'
              )}
            >
              <FaWhatsapp size={16} />
              WhatsApp Me
            </a>

            <a
              href="mailto:kenmoronge@gmail.com"
              className={cn(
                'inline-flex items-center gap-2 rounded-xl border border-slate-200 px-6 py-3 text-sm font-semibold',
                'bg-white text-navy-600 shadow-sm transition-all duration-200',
                'hover:border-navy-600 hover:shadow-md hover:-translate-y-0.5',
                'dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-100 dark:hover:border-teal-400',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400'
              )}
            >
              <Download size={16} />
              Email Me
            </a>
          </motion.div>

          {/* Quick stats strip */}
          <motion.div
            variants={fadeUp}
            custom={0.6}
            className="mt-14 flex flex-wrap gap-8"
          >
            {[
              { value: '4+', label: 'Years experience' },
              { value: '12+', label: 'Projects delivered' },
              { value: '15+', label: 'Tools mastered' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-display text-3xl font-bold text-navy-600 dark:text-teal-400">
                  {stat.value}
                </span>
                <span className="mt-0.5 text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-medium uppercase tracking-widest text-slate-400 dark:text-slate-500">
            Scroll
          </span>
          <ChevronDown
            size={18}
            className="animate-bounce text-slate-400 dark:text-slate-500"
          />
        </div>
      </motion.div>
    </section>
  )
}
