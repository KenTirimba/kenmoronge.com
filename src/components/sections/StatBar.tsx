'use client'

import { motion } from 'framer-motion'
import { AnimatedCounter } from '@/components/shared/AnimatedCounter'
import { stats } from '@/data/stats'
import { fadeUp } from '@/lib/animations'

export default function StatBar() {
  return (
    <section
      aria-label="Key statistics"
      className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-navy-900/60"
    >
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <motion.dl
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              custom={i * 0.1}
              className="flex flex-col items-center gap-1 text-center"
            >
              <dt className="order-2 text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                {stat.label}
              </dt>
              <dd className="order-1 font-display text-4xl font-bold text-navy-600 dark:text-teal-400">
                {stat.prefix ?? ''}
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
