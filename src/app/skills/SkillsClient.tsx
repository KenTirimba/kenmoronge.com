'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BarChart3,
  Code2,
  GitMerge,
  Users,
  CheckCircle2,
} from 'lucide-react'
import { skills } from '@/data/skills'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { cn } from '@/lib/utils'

const categories = [
  { id: 'all', label: 'All Skills', icon: BarChart3 },
  { id: 'data', label: 'Data & Analytics', icon: BarChart3 },
  { id: 'dev', label: 'Web Development', icon: Code2 },
  { id: 'methodology', label: 'Methodology', icon: GitMerge },
  { id: 'soft', label: 'Soft Skills', icon: Users },
] as const

type CategoryId = (typeof categories)[number]['id']

const categoryMeta: Record<
  string,
  { bar: string; bg: string; text: string; border: string }
> = {
  data: {
    bar: 'bg-navy-600 dark:bg-teal-400',
    bg: 'bg-navy-50 dark:bg-navy-900/40',
    text: 'text-navy-600 dark:text-teal-400',
    border: 'border-navy-100 dark:border-navy-800',
  },
  dev: {
    bar: 'bg-teal-500 dark:bg-teal-400',
    bg: 'bg-teal-50 dark:bg-teal-900/20',
    text: 'text-teal-600 dark:text-teal-400',
    border: 'border-teal-100 dark:border-teal-900',
  },
  methodology: {
    bar: 'bg-amber-500 dark:bg-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-900/20',
    text: 'text-amber-600 dark:text-amber-400',
    border: 'border-amber-100 dark:border-amber-900',
  },
  soft: {
    bar: 'bg-purple-500 dark:bg-purple-400',
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    text: 'text-purple-600 dark:text-purple-400',
    border: 'border-purple-100 dark:border-purple-900',
  },
}

const tools = [
  { name: 'Python', group: 'Languages' },
  { name: 'SQL', group: 'Languages' },
  { name: 'R', group: 'Languages' },
  { name: 'TypeScript', group: 'Languages' },
  { name: 'Power BI', group: 'BI & Viz' },
  { name: 'Tableau', group: 'BI & Viz' },
  { name: 'Excel', group: 'BI & Viz' },
  { name: 'SPSS', group: 'Statistical' },
  { name: 'STATA', group: 'Statistical' },
  { name: 'Next.js', group: 'Web' },
  { name: 'React', group: 'Web' },
  { name: 'Tailwind CSS', group: 'Web' },
  { name: 'Firebase', group: 'Web' },
  { name: 'Vercel', group: 'Web' },
  { name: 'BPMN', group: 'Process' },
  { name: 'Lean Six Sigma', group: 'Process' },
  { name: 'Microsoft Office', group: 'Productivity' },
  { name: 'Google Suite', group: 'Productivity' },
]

const toolGroups = [...new Set(tools.map((t) => t.group))]

const methodologies = [
  {
    title: 'Lean Six Sigma',
    cert: 'White Belt Certified · Sept 2024',
    description:
      'Waste elimination, process optimisation, and data-driven continuous improvement using DMAIC methodology.',
    badge: 'Certified',
  },
  {
    title: 'BPMN 2.0',
    cert: 'Business Process Model & Notation',
    description:
      'Process mapping, workflow documentation, AS-IS / TO-BE analysis, and swimlane diagrams for stakeholder communication.',
    badge: 'Proficient',
  },
  {
    title: 'Agile / Scrum',
    cert: 'Project Delivery',
    description:
      'Sprint-based delivery, backlog management, stakeholder collaboration, and iterative process improvement.',
    badge: 'Experienced',
  },
  {
    title: 'Change Management',
    cert: 'Organisational Adoption',
    description:
      'Stakeholder engagement, training delivery, adoption tracking, and resistance management during process transitions.',
    badge: 'Experienced',
  },
]

export default function SkillsClient() {
  const [active, setActive] = useState<CategoryId>('all')

  const filtered =
    active === 'all' ? skills : skills.filter((s) => s.category === active)

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080f1e]">
      {/* Page hero */}
      <div className="bg-white dark:bg-[#0a0f1e] border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-32 md:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="mb-3 text-xs font-semibold uppercase tracking-widest text-teal-500 dark:text-teal-400"
            >
              Capabilities
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="font-display text-4xl font-bold text-navy-600 dark:text-slate-50 md:text-5xl"
            >
              Skills & Tools
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500 dark:text-slate-400"
            >
              Built across 4+ years of analytical work, process improvement
              projects, and web development — covering the full spectrum from
              raw data to deployed product.
            </motion.p>
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="mt-8 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter skills by category"
          >
            {categories.map(({ id, label, icon: Icon }) => (
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
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 space-y-20">

        {/* Skill bars */}
        <section aria-label="Skill proficiency">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid gap-4 md:grid-cols-2"
              role="tabpanel"
            >
              {filtered.map((skill, i) => {
                const meta = categoryMeta[skill.category]
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                    className={cn(
                      'rounded-xl border p-4 transition-colors',
                      meta.bg,
                      meta.border
                    )}
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                        {skill.name}
                      </span>
                      <span className={cn('font-mono text-xs font-bold', meta.text)}>
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div
                      className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700"
                      role="progressbar"
                      aria-valuenow={skill.proficiency}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${skill.name}: ${skill.proficiency}%`}
                    >
                      <motion.div
                        className={cn('h-full rounded-full', meta.bar)}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.05, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </section>

        {/* Tools grid */}
        <section aria-labelledby="tools-heading">
          <h2
            id="tools-heading"
            className="mb-8 font-display text-2xl font-bold text-navy-600 dark:text-slate-100"
          >
            Tools & Technologies
          </h2>
          <div className="space-y-8">
            {toolGroups.map((group) => (
              <div key={group}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                  {group}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tools
                    .filter((t) => t.group === group)
                    .map((tool) => (
                      <motion.span
                        key={tool.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-navy-600 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-teal-400"
                      >
                        {tool.name}
                      </motion.span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Methodologies */}
        <section aria-labelledby="methods-heading">
          <h2
            id="methods-heading"
            className="mb-8 font-display text-2xl font-bold text-navy-600 dark:text-slate-100"
          >
            Methodologies & Frameworks
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {methodologies.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/60"
              >
                <div className="mb-3 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy-600 dark:text-slate-100">
                      {m.title}
                    </h3>
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                      {m.cert}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-600 dark:bg-teal-900/30 dark:text-teal-400">
                    <CheckCircle2 size={11} />
                    {m.badge}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {m.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section aria-labelledby="languages-heading">
          <h2
            id="languages-heading"
            className="mb-6 font-display text-2xl font-bold text-navy-600 dark:text-slate-100"
          >
            Languages
          </h2>
          <div className="flex flex-wrap gap-4">
            {[
              { lang: 'English', level: 'Fluent' },
              { lang: 'Kiswahili', level: 'Native' },
            ].map(({ lang, level }) => (
              <div
                key={lang}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3 dark:border-slate-800 dark:bg-slate-900/60"
              >
                <span className="font-semibold text-navy-600 dark:text-slate-100">
                  {lang}
                </span>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-400 dark:bg-slate-800 dark:text-slate-500">
                  {level}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
