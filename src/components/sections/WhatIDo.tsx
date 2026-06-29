'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  BarChart3,
  GitMerge,
  Code2,
  ArrowRight,
  Database,
  LineChart,
  Workflow,
  Globe,
} from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { cn } from '@/lib/utils'

const tracks = [
  {
    id: 'analytics',
    eyebrow: 'Track 01',
    title: 'Data & Business Analysis',
    description:
      'I translate raw data and broken processes into structured insight and measurable improvement. From statistical modelling to workflow optimisation — I bridge the gap between data and decisions.',
    href: '/work?track=analytics',
    cta: 'View Analytics Work',
    accent: 'navy',
    icon: BarChart3,
    capabilities: [
      { icon: Database, label: 'Data analysis & statistical modelling' },
      { icon: Workflow, label: 'Business process mapping & optimisation' },
      { icon: LineChart, label: 'Power BI & Tableau dashboards' },
      { icon: GitMerge, label: 'Lean Six Sigma & change management' },
    ],
    tools: ['Python', 'SQL', 'Power BI', 'Tableau', 'Excel', 'SPSS', 'R'],
    bgLight: 'bg-navy-50',
    bgDark: 'dark:bg-navy-900/40',
    borderLight: 'border-navy-100',
    borderDark: 'dark:border-navy-800',
    accentText: 'text-navy-600',
    accentDark: 'dark:text-teal-400',
    badgeBg: 'bg-navy-600/10 text-navy-700 dark:bg-teal-400/10 dark:text-teal-300',
    iconBg: 'bg-navy-600 text-white',
    iconBgHover: 'group-hover:bg-navy-800',
  },
  {
    id: 'webdev',
    eyebrow: 'Track 02',
    title: 'Web Development',
    description:
      'I design and build premium websites and web applications for businesses — fast, accessible, and engineered to convert. From e-commerce to marketplaces to campaign sites, I deliver the full product.',
    href: '/work?track=webdev',
    cta: 'View Web Projects',
    accent: 'teal',
    icon: Code2,
    capabilities: [
      { icon: Globe, label: 'Full-stack Next.js applications' },
      { icon: Code2, label: 'React, TypeScript & Tailwind CSS' },
      { icon: BarChart3, label: 'Firebase, REST APIs & integrations' },
      { icon: LineChart, label: 'SEO, performance & accessibility' },
    ],
    tools: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Firebase', 'Vercel'],
    bgLight: 'bg-teal-50/60',
    bgDark: 'dark:bg-teal-900/10',
    borderLight: 'border-teal-100',
    borderDark: 'dark:border-teal-900',
    accentText: 'text-teal-600',
    accentDark: 'dark:text-teal-400',
    badgeBg: 'bg-teal-600/10 text-teal-700 dark:bg-teal-400/10 dark:text-teal-300',
    iconBg: 'bg-teal-500 text-white',
    iconBgHover: 'group-hover:bg-teal-600',
  },
]

export default function WhatIDo() {
  return (
    <section
      aria-labelledby="whatido-heading"
      className="section-padding bg-slate-50 dark:bg-[#080f1e]"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="What I Do"
          title="Two disciplines. One mindset."
          subtitle="I combine analytical rigour with technical execution — giving organisations both the insight and the tools to act on it."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-8 md:grid-cols-2"
        >
          {tracks.map((track, i) => {
            const TrackIcon = track.icon
            return (
              <motion.article
                key={track.id}
                variants={fadeUp}
                custom={i * 0.15}
                className={cn(
                  'group flex flex-col rounded-2xl border p-8 transition-all duration-300',
                  'hover:-translate-y-1 hover:shadow-xl',
                  track.bgLight,
                  track.bgDark,
                  track.borderLight,
                  track.borderDark
                )}
              >
                {/* Header */}
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <p className={cn('mb-1 text-xs font-semibold uppercase tracking-widest', track.accentText, track.accentDark)}>
                      {track.eyebrow}
                    </p>
                    <h3 className="font-display text-2xl font-bold text-navy-600 dark:text-slate-100">
                      {track.title}
                    </h3>
                  </div>
                  <span className={cn('flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors', track.iconBg, track.iconBgHover)}>
                    <TrackIcon size={22} />
                  </span>
                </div>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {track.description}
                </p>

                {/* Capabilities */}
                <ul className="mb-6 flex flex-col gap-3" role="list">
                  {track.capabilities.map(({ icon: CapIcon, label }) => (
                    <li key={label} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm dark:bg-slate-800">
                        <CapIcon size={14} className={cn(track.accentText, track.accentDark)} />
                      </span>
                      {label}
                    </li>
                  ))}
                </ul>

                {/* Tool badges */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {track.tools.map((tool) => (
                    <span
                      key={tool}
                      className={cn('rounded-full px-3 py-1 text-xs font-medium', track.badgeBg)}
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto">
                  <Link
                    href={track.href}
                    className={cn(
                      'inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200',
                      track.accentText,
                      track.accentDark,
                      'hover:gap-3'
                    )}
                  >
                    {track.cta}
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
