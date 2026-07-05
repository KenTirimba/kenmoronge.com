'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TypewriterText } from './TypewriterText'

const processSteps = [
  { id: '01', label: 'Collect', color: 'border-slate-700 text-slate-400' },
  { id: '02', label: 'Clean', color: 'border-slate-700 text-slate-400' },
  { id: '03', label: 'Analyse', color: 'border-teal-800 text-teal-400' },
  { id: '04', label: 'Visualise', color: 'border-teal-800 text-teal-400' },
  { id: '05', label: 'Decide', color: 'border-sky-800 text-sky-400' },
  { id: '06', label: 'Improve', color: 'border-sky-800 text-sky-400' },
]

export function BriefBackground() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      aria-labelledby="background-heading"
      className="relative min-h-screen bg-[#040810] px-6 py-32 md:px-16 lg:px-24"
    >
      {/* Section label */}
      <div className="mb-16 flex items-center gap-4">
        <span className="font-mono text-xs text-teal-400">§ 01</span>
        <div className="h-px flex-1 bg-slate-800" />
        <span
          id="background-heading"
          className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500"
        >
          Background
        </span>
      </div>

      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Left — typed bio */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="font-mono text-[10px] uppercase tracking-widest text-slate-600 mb-4"
          >
            Executive Summary
          </motion.p>

          {inView && (
            <div className="space-y-5">
              <p className="font-display text-2xl font-bold leading-snug text-slate-100 md:text-3xl">
                <TypewriterText
                  text="4+ years converting messy data and broken processes into measurable business outcomes."
                  speed={14}
                  delay={200}
                  cursor={false}
                />
              </p>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8, duration: 0.6 }}
                className="text-sm leading-relaxed text-slate-400"
              >
                At ADEC Innovations, I work with global clients — including{' '}
                <span className="text-slate-200 font-medium">FedEx</span> and{' '}
                <span className="text-slate-200 font-medium">
                  First American Financial
                </span>{' '}
                — mapping workflows, analysing data, identifying inefficiencies,
                and implementing systems that stick.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.4, duration: 0.6 }}
                className="text-sm leading-relaxed text-slate-400"
              >
                Alongside analytics, I build premium web products for
                businesses across Kenya — turning briefs into deployed,
                revenue-generating digital assets.
              </motion.p>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4, duration: 0.6 }}
                className="flex flex-wrap gap-2 pt-2"
              >
                {[
                  'Applied Statistics',
                  'Lean Six Sigma',
                  'BPMN',
                  'Python · SQL',
                  'Next.js',
                  'Power BI',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-slate-800 bg-slate-900 px-3 py-1 font-mono text-[11px] text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>
          )}
        </div>

        {/* Right — process flow */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="font-mono text-[10px] uppercase tracking-widest text-slate-600 mb-8"
          >
            How I Approach Every Problem
          </motion.p>

          <div className="flex flex-col gap-3">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: 32 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
                className={`flex items-center gap-4 rounded-lg border bg-slate-900/40 px-5 py-3 ${step.color}`}
              >
                <span className="font-mono text-[10px] text-slate-600">
                  {step.id}
                </span>
                {/* Connector line */}
                <div className="h-px flex-1 border-t border-dashed border-slate-800" />
                <span className="font-mono text-sm font-semibold">
                  {step.label}
                </span>
                {/* Arrow */}
                {i < processSteps.length - 1 && (
                  <span className="font-mono text-slate-700">↓</span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Outcome */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.8, duration: 0.5 }}
            className="mt-4 rounded-lg border border-teal-800 bg-teal-900/20 px-5 py-3"
          >
            <span className="font-mono text-xs text-teal-400">
              → OUTPUT: Decisions, products, and improvements that last.
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
