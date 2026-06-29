'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { BarChart3, Code2, Layers } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { ProjectCard } from '@/components/work/ProjectCard'
import { projects } from '@/data/projects'
import { fadeUp } from '@/lib/animations'
import { cn } from '@/lib/utils'
import type { ProjectTrack } from '@/types'

type Filter = 'all' | ProjectTrack

const tabs: { id: Filter; label: string; icon: React.ElementType }[] = [
  { id: 'all', label: 'All Projects', icon: Layers },
  { id: 'analytics', label: 'Analytics & BPA', icon: BarChart3 },
  { id: 'webdev', label: 'Web Development', icon: Code2 },
]

export default function WorkClient() {
  const searchParams = useSearchParams()
  const trackParam = searchParams.get('track') as Filter | null
  const [active, setActive] = useState<Filter>(
    trackParam && ['analytics', 'webdev'].includes(trackParam) ? trackParam : 'all'
  )

  useEffect(() => {
    if (trackParam && ['analytics', 'webdev'].includes(trackParam)) {
      setActive(trackParam as Filter)
    }
  }, [trackParam])

  const filtered =
    active === 'all' ? projects : projects.filter((p) => p.track === active)

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080f1e]">
      {/* Page hero */}
      <div className="bg-white dark:bg-[#0a0f1e] border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-32 md:px-10">
          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="mb-3 text-xs font-semibold uppercase tracking-widest text-teal-500 dark:text-teal-400"
            >
              Portfolio
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="font-display text-4xl font-bold text-navy-600 dark:text-slate-50 md:text-5xl"
            >
              Work that speaks
              <span className="text-teal-400">.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500 dark:text-slate-400"
            >
              A curated collection of analytics, business process, and web
              development projects — each with a clear problem, structured
              approach, and measurable outcome.
            </motion.p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="mt-8 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter projects by type"
          >
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                role="tab"
                aria-selected={active === id}
                onClick={() => setActive(id)}
                className={cn(
                  'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400',
                  active === id
                    ? 'bg-navy-600 text-white shadow-md dark:bg-teal-400 dark:text-navy-900'
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700'
                )}
              >
                <Icon size={14} />
                {label}
                <span
                  className={cn(
                    'rounded-full px-1.5 py-0.5 text-xs font-bold',
                    active === id
                      ? 'bg-white/20 text-white dark:bg-navy-900/30 dark:text-navy-900'
                      : 'bg-slate-200 text-slate-500 dark:bg-slate-700 dark:text-slate-400'
                  )}
                >
                  {id === 'all'
                    ? projects.length
                    : projects.filter((p) => p.track === id).length}
                </span>
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Projects grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            role="tabpanel"
            aria-label={`Projects: ${active}`}
          >
            {filtered.length === 0 ? (
              <p className="text-center text-slate-400 dark:text-slate-500">
                No projects in this category yet.
              </p>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filtered.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
