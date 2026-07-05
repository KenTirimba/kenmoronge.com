'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { TypewriterText } from './TypewriterText'

export function BriefRecommendation() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      aria-labelledby="recommendation-heading"
      className="relative min-h-screen bg-[#040810] px-6 py-32 md:px-16 lg:px-24 flex flex-col justify-center"
    >
      {/* Teal glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-teal-400/8 blur-3xl"
      />

      {/* Section label */}
      <div className="mb-16 flex items-center gap-4">
        <span className="font-mono text-xs text-teal-400">§ 05</span>
        <div className="h-px flex-1 bg-slate-800" />
        <span
          id="recommendation-heading"
          className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500"
        >
          Recommendation
        </span>
      </div>

      <div className="max-w-4xl">
        {/* Typed recommendation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-3 font-mono text-[10px] uppercase tracking-widest text-slate-600"
        >
          Final Assessment
        </motion.div>

        {inView && (
          <p className="mb-8 font-display text-4xl font-black leading-tight text-slate-100 md:text-6xl lg:text-7xl">
            <TypewriterText
              text="If your organisation needs someone who can read the data"
              speed={12}
              delay={300}
              cursor={false}
            />
            <br />
            <span
              style={{
                background: 'linear-gradient(90deg, #2DD4BF, #7dd3fc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              <TypewriterText
                text="and build what comes next —"
                speed={14}
                delay={2600}
                cursor={false}
              />
            </span>
            <br />
            <TypewriterText
              text="Ken is the solution."
              speed={16}
              delay={4200}
              cursor={true}
            />
          </p>
        )}

        {/* Sign-off */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 5.5, duration: 0.6 }}
          className="mb-10 border-l-2 border-teal-400 pl-5"
        >
          <p className="font-mono text-xs text-slate-400">
            Open to full-time analytical roles, contract work, and freelance
            web development projects.
            <br />
            Kenya-based · Available for remote international positions.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 5.8, duration: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="https://wa.me/254707792059"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#20b858] hover:shadow-lg hover:shadow-[#25D366]/20 hover:-translate-y-0.5"
          >
            <FaWhatsapp size={18} />
            WhatsApp Me
          </a>

          <a
            href="mailto:kenmoronge@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-7 py-3.5 text-sm font-bold text-slate-300 transition-all hover:border-teal-800 hover:bg-teal-900/20 hover:text-teal-400 hover:-translate-y-0.5"
          >
            Send Email
          </a>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-7 py-3.5 text-sm font-bold text-slate-300 transition-all hover:border-slate-500 hover:text-slate-100 hover:-translate-y-0.5"
          >
            View Full Dossier
            <ArrowRight size={15} />
          </Link>
        </motion.div>

        {/* Closing stamp */}
        <motion.div
          initial={{ opacity: 0, rotate: -6, scale: 0.8 }}
          animate={inView ? { opacity: 1, rotate: -6, scale: 1 } : {}}
          transition={{ delay: 6.4, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          className="mt-16 inline-block"
          aria-hidden="true"
        >
          <div className="rounded-lg border-2 border-teal-500/40 px-6 py-3 text-center opacity-40">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-teal-400">
              Approved
            </p>
            <p className="font-mono text-[9px] text-teal-600">
              KTM · {new Date().getFullYear()}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
