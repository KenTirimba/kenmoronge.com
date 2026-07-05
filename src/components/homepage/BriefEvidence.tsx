'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { featuredProjects } from '@/data/projects'
import { cn } from '@/lib/utils'

export function BriefEvidence() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      aria-labelledby="evidence-heading"
      className="relative bg-[#040810] px-6 py-32 md:px-16 lg:px-24"
    >
      {/* Section label */}
      <div className="mb-16 flex items-center gap-4">
        <span className="font-mono text-xs text-teal-400">§ 04</span>
        <div className="h-px flex-1 bg-slate-800" />
        <span
          id="evidence-heading"
          className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500"
        >
          Selected Evidence
        </span>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-12 font-display text-3xl font-bold text-slate-100 md:text-4xl max-w-2xl"
      >
        Three files from the case archive.
      </motion.p>

      <div className="grid gap-5 md:grid-cols-3">
        {featuredProjects.map((project, i) => {
          const isAnalytics = project.track === 'analytics'
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40, rotate: i === 1 ? 0.5 : i === 2 ? -0.5 : 0 }}
              animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative flex flex-col rounded-xl border border-slate-800 bg-slate-900/60 p-5 transition-all hover:border-slate-600 hover:-translate-y-1"
            >
              {/* File tab */}
              <div className="absolute -top-px left-4 rounded-t-md border border-b-0 border-slate-700 bg-slate-800 px-3 py-1">
                <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500">
                  {isAnalytics ? 'analytics' : 'web-dev'}
                </span>
              </div>

              {/* Top meta */}
              <div className="mt-3 mb-4 flex items-center justify-between">
                <span className="font-mono text-[10px] text-slate-600">
                  FILE-00{i + 1}
                </span>
                <Link
                  href={`/work/${project.slug}`}
                  aria-label={`View case study: ${project.title}`}
                  className={cn(
                    'flex h-7 w-7 items-center justify-center rounded-full transition-all',
                    'bg-slate-800 text-slate-500',
                    'group-hover:bg-teal-400 group-hover:text-navy-900'
                  )}
                >
                  <ArrowUpRight size={13} />
                </Link>
              </div>

              {/* Title */}
              <h3 className="mb-2 font-display text-base font-bold leading-snug text-slate-100">
                {project.title}
              </h3>
              <p className="mb-4 font-mono text-[10px] text-slate-500">
                {project.subtitle}
              </p>

              {/* Metrics */}
              {project.metrics && (
                <dl className="mb-4 grid grid-cols-3 gap-2">
                  {project.metrics.slice(0, 3).map((m) => (
                    <div
                      key={m.label}
                      className="rounded-md border border-slate-800 bg-[#040810] p-2"
                    >
                      <dd className="font-mono text-sm font-bold text-teal-400">
                        {m.value}
                      </dd>
                      <dt className="font-mono text-[9px] text-slate-600 leading-tight">
                        {m.label}
                      </dt>
                    </div>
                  ))}
                </dl>
              )}

              {/* Tags */}
              <div className="mt-auto flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-slate-800 px-2 py-0.5 font-mono text-[9px] text-slate-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* View all */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-10 flex justify-center"
      >
        <Link
          href="/work"
          className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-2.5 font-mono text-xs text-slate-400 transition-all hover:border-teal-800 hover:bg-teal-900/20 hover:text-teal-400"
        >
          View full case archive
          <ArrowUpRight size={13} />
        </Link>
      </motion.div>
    </section>
  )
}
