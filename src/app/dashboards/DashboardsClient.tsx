'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import BizPerformance from '@/components/dashboards/BizPerformance'
import ProcessEfficiency from '@/components/dashboards/ProcessEfficiency'
import MarketIntel from '@/components/dashboards/MarketIntel'

const dashboards = [
  {
    id: 'biz',
    eyebrow: 'Dashboard 01',
    title: 'Business Performance',
    description:
      'Monthly revenue trends, target vs actual comparisons, and departmental breakdown — the kind of executive summary dashboard I build for stakeholders.',
    component: BizPerformance,
  },
  {
    id: 'process',
    eyebrow: 'Dashboard 02',
    title: 'Process Efficiency Tracker',
    description:
      'Cycle times, error rates, and throughput across process stages — mirroring the metrics I tracked during FedEx and First American process improvement projects.',
    component: ProcessEfficiency,
  },
  {
    id: 'market',
    eyebrow: 'Dashboard 03',
    title: 'Market Intelligence',
    description:
      'Segment share, growth rates, and competitive positioning — the analytical lens I apply when researching new markets or evaluating business opportunities.',
    component: MarketIntel,
  },
]

export default function DashboardsClient() {
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
              Data Visualisation
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="font-display text-4xl font-bold text-navy-600 dark:text-slate-50 md:text-5xl"
            >
              Interactive Dashboards
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500 dark:text-slate-400"
            >
              Sample dashboards showcasing how I present data to stakeholders.
              Each is interactive — hover, filter, and explore the data directly
              in your browser.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Dashboards */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 space-y-20">
        {dashboards.map(({ id, eyebrow, title, description, component: Chart }, i) => (
          <motion.section
            key={id}
            aria-labelledby={`dash-${id}`}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-teal-500 dark:text-teal-400">
              {eyebrow}
            </p>
            <h2
              id={`dash-${id}`}
              className="mb-2 font-display text-2xl font-bold text-navy-600 dark:text-slate-100"
            >
              {title}
            </h2>
            <p className="mb-8 max-w-2xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {description}
            </p>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
              <Chart />
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  )
}
