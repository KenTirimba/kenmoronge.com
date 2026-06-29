'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { skills } from '@/data/skills'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { cn } from '@/lib/utils'

const categories = [
  { id: 'all', label: 'All' },
  { id: 'data', label: 'Data & Analytics' },
  { id: 'dev', label: 'Web Dev' },
  { id: 'methodology', label: 'Methodology' },
  { id: 'soft', label: 'Soft Skills' },
] as const

type CategoryId = (typeof categories)[number]['id']

const categoryColors: Record<string, { bar: string; bg: string; text: string }> = {
  data: {
    bar: 'bg-navy-600 dark:bg-teal-400',
    bg: 'bg-navy-50 dark:bg-navy-900/40',
    text: 'text-navy-600 dark:text-teal-400',
  },
  dev: {
    bar: 'bg-teal-500 dark:bg-teal-400',
    bg: 'bg-teal-50 dark:bg-teal-900/20',
    text: 'text-teal-600 dark:text-teal-400',
  },
  methodology: {
    bar: 'bg-amber-500 dark:bg-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-900/20',
    text: 'text-amber-600 dark:text-amber-400',
  },
  soft: {
    bar: 'bg-purple-500 dark:bg-purple-400',
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    text: 'text-purple-600 dark:text-purple-400',
  },
}

export default function SkillsSnapshot() {
  const [active, setActive] = useState<CategoryId>('all')

  const filtered =
    active === 'all' ? skills : skills.filter((s) => s.category === active)

  return (
    <section
      aria-labelledby="skills-heading"
      className="section-padding bg-slate-50 dark:bg-[#080f1e]"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Skills & Tools"
          title="What I bring to the table."
          subtitle="A snapshot of my technical toolkit — built across 4+ years of analytical and development work."
          align="center"
        />

        {/* Filter tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Filter skills by category"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={active === cat.id}
              onClick={() => setActive(cat.id)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-all duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400',
                active === cat.id
                  ? 'bg-navy-600 text-white shadow-md dark:bg-teal-400 dark:text-navy-900'
                  : 'bg-white text-slate-500 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700'
              )}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skill bars */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-4 md:grid-cols-2"
          role="tabpanel"
          aria-label={`Skills: ${active}`}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => {
              const colors = categoryColors[skill.category]
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className={cn(
                    'rounded-xl border border-transparent p-4 transition-colors',
                    colors.bg,
                    'hover:border-slate-200 dark:hover:border-slate-700'
                  )}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                      {skill.name}
                    </span>
                    <span className={cn('font-mono text-xs font-bold', colors.text)}>
                      {skill.proficiency}%
                    </span>
                  </div>

                  {/* Progress bar track */}
                  <div
                    className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700"
                    role="progressbar"
                    aria-valuenow={skill.proficiency}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${skill.name} proficiency: ${skill.proficiency}%`}
                  >
                    <motion.div
                      className={cn('h-full rounded-full', colors.bar)}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.05, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
