'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const analyticsSkills = [
  { name: 'SQL', level: 85 },
  { name: 'Python', level: 80 },
  { name: 'Power BI', level: 82 },
  { name: 'Excel (Advanced)', level: 90 },
  { name: 'Tableau', level: 75 },
  { name: 'R / SPSS / STATA', level: 70 },
]

const devSkills = [
  { name: 'Next.js / React', level: 80 },
  { name: 'TypeScript', level: 75 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Firebase', level: 78 },
  { name: 'REST APIs', level: 76 },
  { name: 'Vercel / CI-CD', level: 80 },
]

const methodologies = [
  'Lean Six Sigma (White Belt)',
  'BPMN 2.0 Process Mapping',
  'Agile / Scrum Delivery',
  'Change Management',
  'Stakeholder Engagement',
  'Root Cause Analysis',
]

function SkillBar({
  name,
  level,
  color,
  delay,
}: {
  name: string
  level: number
  color: string
  delay: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="group">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="font-mono text-xs text-slate-400 group-hover:text-slate-200 transition-colors">
          {name}
        </span>
        <span className="font-mono text-[10px] text-slate-600">{level}%</span>
      </div>
      <div className="h-1 w-full overflow-hidden rounded-full bg-slate-800">
        <motion.div
          className={`h-full rounded-full ${color}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export function BriefCapabilities() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      aria-labelledby="capabilities-heading"
      className="relative min-h-screen bg-[#040810] px-6 py-32 md:px-16 lg:px-24"
    >
      {/* Section label */}
      <div className="mb-16 flex items-center gap-4">
        <span className="font-mono text-xs text-teal-400">§ 03</span>
        <div className="h-px flex-1 bg-slate-800" />
        <span
          id="capabilities-heading"
          className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500"
        >
          Capabilities
        </span>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-14 font-display text-3xl font-bold text-slate-100 md:text-4xl max-w-2xl"
      >
        Two disciplines. One analyst.
      </motion.p>

      <div className="grid gap-12 lg:grid-cols-3">
        {/* Analytics stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="rounded-xl border border-slate-800 bg-slate-900/40 p-6"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-teal-400" />
            <p className="font-mono text-xs uppercase tracking-widest text-teal-400">
              Analytics Stack
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {analyticsSkills.map((s, i) => (
              <SkillBar
                key={s.name}
                name={s.name}
                level={s.level}
                color="bg-teal-400"
                delay={0.3 + i * 0.1}
              />
            ))}
          </div>
        </motion.div>

        {/* Dev stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="rounded-xl border border-slate-800 bg-slate-900/40 p-6"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            <p className="font-mono text-xs uppercase tracking-widest text-sky-400">
              Dev Stack
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {devSkills.map((s, i) => (
              <SkillBar
                key={s.name}
                name={s.name}
                level={s.level}
                color="bg-sky-400"
                delay={0.4 + i * 0.1}
              />
            ))}
          </div>
        </motion.div>

        {/* Methodologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="rounded-xl border border-slate-800 bg-slate-900/40 p-6"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <p className="font-mono text-xs uppercase tracking-widest text-amber-400">
              Methodologies
            </p>
          </div>
          <ul className="flex flex-col gap-3" role="list">
            {methodologies.map((m, i) => (
              <motion.li
                key={m}
                initial={{ opacity: 0, x: 12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.12, duration: 0.4 }}
                className="flex items-center gap-3 font-mono text-xs text-slate-400"
              >
                <span className="text-amber-400">›</span>
                {m}
              </motion.li>
            ))}
          </ul>

          {/* Cert badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="mt-8 rounded-lg border border-amber-800/50 bg-amber-900/10 p-3"
          >
            <p className="font-mono text-[10px] text-amber-400">
              ✓ Lean Six Sigma White Belt · Certified Sept 2024
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
