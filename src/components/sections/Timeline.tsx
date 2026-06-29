'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { timeline } from '@/data/timeline'
import { fadeUp } from '@/lib/animations'
import { cn } from '@/lib/utils'
import type { TimelineItem } from '@/types'

const iconMap: Record<TimelineItem['type'], React.ElementType> = {
  work: Briefcase,
  education: GraduationCap,
  certification: Award,
}

const colorMap: Record<TimelineItem['type'], { icon: string; dot: string; border: string }> = {
  work: {
    icon: 'bg-navy-600 text-white dark:bg-navy-600',
    dot: 'bg-navy-600 dark:bg-teal-400',
    border: 'border-navy-100 dark:border-navy-800',
  },
  education: {
    icon: 'bg-teal-500 text-white dark:bg-teal-600',
    dot: 'bg-teal-500 dark:bg-teal-400',
    border: 'border-teal-100 dark:border-teal-900',
  },
  certification: {
    icon: 'bg-amber-500 text-white dark:bg-amber-600',
    dot: 'bg-amber-500 dark:bg-amber-400',
    border: 'border-amber-100 dark:border-amber-900',
  },
}

export default function Timeline() {
  return (
    <section
      aria-labelledby="timeline-heading"
      className="section-padding bg-white dark:bg-[#0a0f1e]"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          eyebrow="Career Journey"
          title="How I got here."
          subtitle="A path built on statistics, process thinking, and continuous learning."
          align="center"
        />

        {/* Timeline */}
        <ol className="relative" aria-label="Career timeline">
          {/* Vertical line */}
          <div
            aria-hidden="true"
            className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-slate-200 via-slate-200 to-transparent dark:from-slate-700 dark:via-slate-700 md:left-1/2"
          />

          {timeline.map((item, i) => {
            const Icon = iconMap[item.type]
            const colors = colorMap[item.type]
            const isEven = i % 2 === 0

            return (
              <motion.li
                key={`${item.company}-${item.year}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={i * 0.1}
                className={cn(
                  'relative mb-10 pl-16 md:pl-0',
                  'md:grid md:grid-cols-2 md:gap-8',
                )}
              >
                {/* Desktop: left side content (even items) */}
                <div
                  className={cn(
                    'hidden md:flex md:flex-col',
                    isEven ? 'md:items-end md:pr-10 md:text-right' : 'md:order-2 md:items-start md:pl-10'
                  )}
                >
                  <TimelineCard item={item} colors={colors} />
                </div>

                {/* Centre dot — desktop */}
                <div
                  aria-hidden="true"
                  className={cn(
                    'absolute left-6 top-4 z-10 hidden md:flex md:left-auto md:right-auto',
                    'md:col-start-1 md:col-end-3',
                    'md:items-center md:justify-center',
                  )}
                  style={{ left: '50%', transform: 'translateX(-50%)' }}
                >
                  <span className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-full shadow-md',
                    colors.icon
                  )}>
                    <Icon size={16} />
                  </span>
                </div>

                {/* Desktop: right side (odd items) — empty placeholder for even */}
                <div
                  className={cn(
                    'hidden md:block',
                    isEven ? 'md:order-2' : 'md:order-1 md:items-end md:pr-10 md:text-right md:flex md:flex-col'
                  )}
                >
                  {!isEven && <TimelineCard item={item} colors={colors} />}
                </div>

                {/* Mobile layout */}
                <div className="md:hidden">
                  {/* Mobile dot */}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute left-3.5 top-4 flex h-5 w-5 items-center justify-center rounded-full',
                      colors.icon
                    )}
                  >
                    <Icon size={10} />
                  </span>
                  <TimelineCard item={item} colors={colors} />
                </div>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

function TimelineCard({
  item,
  colors,
}: {
  item: TimelineItem
  colors: { icon: string; dot: string; border: string }
}) {
  return (
    <div
      className={cn(
        'rounded-xl border bg-white p-5 shadow-sm transition-shadow hover:shadow-md',
        'dark:bg-slate-900/60 dark:border-slate-800',
        colors.border
      )}
    >
      <time
        dateTime={item.year}
        className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500"
      >
        {item.year}
      </time>
      <h3 className="mt-1 font-display text-base font-bold text-navy-600 dark:text-slate-100">
        {item.role}
      </h3>
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
        {item.company}
        {item.location && (
          <span className="text-slate-400 dark:text-slate-500"> · {item.location}</span>
        )}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        {item.description}
      </p>
    </div>
  )
}
