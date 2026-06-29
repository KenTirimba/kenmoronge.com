'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, BarChart3, Code2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Project } from '@/types'

interface Props {
  project: Project
  index?: number
}

export function ProjectCard({ project, index = 0 }: Props) {
  const isAnalytics = project.track === 'analytics'

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        'group relative flex flex-col rounded-2xl border bg-white p-6 transition-all duration-300',
        'hover:-translate-y-1 hover:shadow-xl',
        'dark:bg-slate-900/60 dark:border-slate-800'
      )}
    >
      {/* Track badge */}
      <div className="mb-4 flex items-center justify-between">
        <span
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold',
            isAnalytics
              ? 'bg-navy-600/10 text-navy-700 dark:bg-teal-400/10 dark:text-teal-300'
              : 'bg-teal-500/10 text-teal-700 dark:bg-teal-400/10 dark:text-teal-300'
          )}
        >
          {isAnalytics ? <BarChart3 size={11} /> : <Code2 size={11} />}
          {isAnalytics ? 'Analytics & BPA' : 'Web Development'}
        </span>

        <Link
          href={`/work/${project.slug}`}
          aria-label={`View case study for ${project.title}`}
          className={cn(
            'flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200',
            'bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500',
            'group-hover:bg-navy-600 group-hover:text-white dark:group-hover:bg-teal-400 dark:group-hover:text-navy-900'
          )}
        >
          <ArrowUpRight size={14} />
        </Link>
      </div>

      {/* Title */}
      <h3 className="font-display text-lg font-bold text-navy-600 dark:text-slate-100">
        {project.title}
      </h3>
      <p className="mt-1 text-sm text-slate-400 dark:text-slate-500">
        {project.subtitle}
      </p>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-3">
        {project.description}
      </p>

      {/* Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <dl className="mt-4 flex flex-wrap gap-3">
          {project.metrics.slice(0, 3).map((m) => (
            <div
              key={m.label}
              className="flex flex-col rounded-lg bg-slate-50 px-3 py-2 dark:bg-slate-800/60"
            >
              <dd className="font-mono text-sm font-bold text-navy-600 dark:text-teal-400">
                {m.value}
              </dd>
              <dt className="text-xs text-slate-400 dark:text-slate-500">
                {m.label}
              </dt>
            </div>
          ))}
        </dl>
      )}

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* View case study link */}
      <div className="mt-6 border-t border-slate-100 pt-4 dark:border-slate-800">
        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-600 transition-all hover:gap-2.5 dark:text-teal-400"
        >
          View case study
          <ArrowUpRight size={13} />
        </Link>
      </div>
    </motion.article>
  )
}
