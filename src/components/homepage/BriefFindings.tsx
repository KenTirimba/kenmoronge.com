'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { motion } from 'framer-motion'
import { AnimatedCounter } from '@/components/shared/AnimatedCounter'

const findings = [
  {
    ref: 'FINDING-001',
    client: 'FedEx · ADEC Innovations',
    title: 'Financial process transformation reduced reconciliation time by 40%',
    metrics: [
      { value: 40, suffix: '%', label: 'Faster processing' },
      { value: 95, suffix: '%', label: 'Accuracy rate' },
      { value: 30, suffix: '%', label: 'Steps eliminated' },
    ],
    tags: ['Process Mapping', 'Cash Application', 'Offshore Processing'],
    status: 'DELIVERED',
    statusColor: 'text-teal-400 border-teal-800 bg-teal-900/20',
  },
  {
    ref: 'FINDING-002',
    client: 'First American Financial · ADEC Innovations',
    title: 'Process standardisation reduced handoff errors by 35% across offshore teams',
    metrics: [
      { value: 35, suffix: '%', label: 'Fewer errors' },
      { value: 25, suffix: '+', label: 'Processes documented' },
      { value: 100, suffix: '%', label: 'Team adoption' },
    ],
    tags: ['BPA', 'Documentation', 'Change Management'],
    status: 'DELIVERED',
    statusColor: 'text-teal-400 border-teal-800 bg-teal-900/20',
  },
  {
    ref: 'FINDING-003',
    client: 'VextUp · Founder',
    title: 'Built full-stack marketplace connecting 100+ service providers to clients in Nairobi',
    metrics: [
      { value: 3, suffix: ' mo', label: 'To MVP' },
      { value: 100, suffix: '+', label: 'Providers onboarded' },
      { value: 4, suffix: ' stk', label: 'Tech integrations' },
    ],
    tags: ['Next.js', 'Firebase', 'Maps API', 'FCM'],
    status: 'LIVE',
    statusColor: 'text-sky-400 border-sky-800 bg-sky-900/20',
  },
]

export function BriefFindings() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      aria-labelledby="findings-heading"
      className="relative min-h-screen bg-[#040810] px-6 py-32 md:px-16 lg:px-24"
    >
      {/* Section label */}
      <div className="mb-16 flex items-center gap-4">
        <span className="font-mono text-xs text-teal-400">§ 02</span>
        <div className="h-px flex-1 bg-slate-800" />
        <span
          id="findings-heading"
          className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500"
        >
          Key Findings
        </span>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-12 font-display text-3xl font-bold text-slate-100 md:text-4xl max-w-2xl"
      >
        Evidence of impact — across analytics, process, and product.
      </motion.p>

      <div className="flex flex-col gap-6">
        {findings.map((f, i) => (
          <motion.article
            key={f.ref}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.2, duration: 0.6 }}
            className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all hover:border-slate-700"
            aria-label={f.title}
          >
            {/* Top row */}
            <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-slate-600">
                  {f.ref}
                </span>
                <span className="font-mono text-[10px] text-slate-500">
                  / {f.client}
                </span>
              </div>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-0.5 font-mono text-[10px] uppercase tracking-widest ${f.statusColor}`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                {f.status}
              </span>
            </div>

            {/* Title */}
            <h3 className="mb-6 font-display text-lg font-bold leading-snug text-slate-100 md:text-xl">
              {f.title}
            </h3>

            {/* Metrics */}
            <dl className="mb-6 grid grid-cols-3 gap-3">
              {f.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-lg border border-slate-800 bg-[#040810] p-3"
                >
                  <dd className="font-display text-2xl font-black text-teal-400">
                    <AnimatedCounter
                      value={m.value}
                      suffix={m.suffix}
                      duration={1800}
                    />
                  </dd>
                  <dt className="mt-1 font-mono text-[10px] text-slate-500">
                    {m.label}
                  </dt>
                </div>
              ))}
            </dl>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {f.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-slate-800 px-2 py-0.5 font-mono text-[10px] text-slate-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
