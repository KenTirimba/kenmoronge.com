'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  Code2,
  Target,
  Lightbulb,
  TrendingUp,
} from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { cn } from '@/lib/utils'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/work/ProjectCard'
import type { Project } from '@/types'

export default function CaseStudyClient({ project }: { project: Project }) {
  const isAnalytics = project.track === 'analytics'

  const related = projects
    .filter((p) => p.id !== project.id && p.track === project.track)
    .slice(0, 2)

  const sections = [
    {
      id: 'problem',
      icon: Target,
      label: 'The Problem',
      content: project.problem,
      color: 'text-red-500 dark:text-red-400',
      bg: 'bg-red-50 dark:bg-red-900/10',
    },
    {
      id: 'approach',
      icon: Lightbulb,
      label: 'My Approach',
      content: project.approach,
      color: 'text-amber-500 dark:text-amber-400',
      bg: 'bg-amber-50 dark:bg-amber-900/10',
    },
    {
      id: 'outcome',
      icon: TrendingUp,
      label: 'The Outcome',
      content: project.outcome,
      color: 'text-teal-500 dark:text-teal-400',
      bg: 'bg-teal-50 dark:bg-teal-900/10',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080f1e]">
      {/* Hero */}
      <div className="bg-white dark:bg-[#0a0f1e] border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-4xl px-6 pb-12 pt-32 md:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Back link */}
            <motion.div variants={fadeUp} custom={0}>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-navy-600 dark:hover:text-teal-400"
              >
                <ArrowLeft size={15} />
                Back to all work
              </Link>
            </motion.div>

            {/* Track badge */}
            <motion.div variants={fadeUp} custom={0.1} className="mt-6">
              <span
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold',
                  isAnalytics
                    ? 'bg-navy-600/10 text-navy-700 dark:bg-teal-400/10 dark:text-teal-300'
                    : 'bg-teal-500/10 text-teal-700 dark:bg-teal-400/10 dark:text-teal-300'
                )}
              >
                {isAnalytics ? <BarChart3 size={11} /> : <Code2 size={11} />}
                {isAnalytics ? 'Analytics & Business Process Analysis' : 'Web Development'}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeUp}
              custom={0.2}
              className="mt-4 font-display text-4xl font-bold text-navy-600 dark:text-slate-50 md:text-5xl"
            >
              {project.title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={0.3}
              className="mt-2 text-lg text-slate-400 dark:text-slate-500"
            >
              {project.subtitle}
            </motion.p>

            <motion.p
              variants={fadeUp}
              custom={0.4}
              className="mt-5 text-base leading-relaxed text-slate-500 dark:text-slate-400"
            >
              {project.description}
            </motion.p>

            {/* Tags */}
            <motion.div
              variants={fadeUp}
              custom={0.5}
              className="mt-6 flex flex-wrap gap-2"
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* External links */}
            {(project.liveUrl || project.githubUrl) && (
              <motion.div
                variants={fadeUp}
                custom={0.6}
                className="mt-6 flex flex-wrap gap-3"
              >
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-navy-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-navy-800 hover:shadow-md dark:bg-teal-400 dark:text-navy-900 dark:hover:bg-teal-300"
                  >
                    View Live Site
                    <ArrowUpRight size={14} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-navy-600 transition-all hover:border-navy-600 hover:shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-teal-400"
                  >
                    View on GitHub
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-4xl px-6 py-16 md:px-10">

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            aria-label="Project metrics"
            className="mb-14"
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="mb-6 font-display text-xl font-bold text-navy-600 dark:text-slate-100"
            >
              Key Results
            </motion.h2>
            <dl className="grid gap-4 sm:grid-cols-3">
              {project.metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  variants={fadeUp}
                  custom={i * 0.1}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/60"
                >
                  <dd className="font-mono text-3xl font-bold text-navy-600 dark:text-teal-400">
                    {m.value}
                  </dd>
                  <dt className="mt-2 text-sm text-slate-400 dark:text-slate-500">
                    {m.label}
                  </dt>
                </motion.div>
              ))}
            </dl>
          </motion.section>
        )}

        {/* Problem / Approach / Outcome */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          {sections.map(({ id, icon: Icon, label, content, color, bg }, i) => (
            <motion.section
              key={id}
              variants={fadeUp}
              custom={i * 0.1}
              aria-labelledby={`section-${id}`}
              className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900/60"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className={cn('flex h-9 w-9 items-center justify-center rounded-xl', bg)}>
                  <Icon size={18} className={color} />
                </span>
                <h2
                  id={`section-${id}`}
                  className="font-display text-lg font-bold text-navy-600 dark:text-slate-100"
                >
                  {label}
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 md:text-base">
                {content}
              </p>
            </motion.section>
          ))}
        </motion.div>

        {/* Related projects */}
        {related.length > 0 && (
          <section aria-labelledby="related-heading" className="mt-20">
            <h2
              id="related-heading"
              className="mb-6 font-display text-2xl font-bold text-navy-600 dark:text-slate-100"
            >
              Related projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {related.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </section>
        )}

        {/* Back CTA */}
        <div className="mt-16 flex items-center justify-between border-t border-slate-200 pt-8 dark:border-slate-800">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition-colors hover:text-navy-600 dark:hover:text-teal-400"
          >
            <ArrowLeft size={15} />
            All projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-navy-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-navy-800 hover:shadow-md dark:bg-teal-400 dark:text-navy-900 dark:hover:bg-teal-300"
          >
            Work with me
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  )
}
