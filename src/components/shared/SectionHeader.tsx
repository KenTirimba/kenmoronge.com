'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'
import { cn } from '@/lib/utils'

interface Props {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({ eyebrow, title, subtitle, align = 'center', className }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
      className={cn(
        'mb-12',
        align === 'center' ? 'text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <motion.p
          variants={fadeUp}
          custom={0}
          className="mb-3 text-xs font-semibold uppercase tracking-widest text-teal-500 dark:text-teal-400"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        custom={0.1}
        className="font-display text-3xl font-bold text-navy-600 dark:text-slate-100 md:text-4xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          custom={0.2}
          className="mt-4 text-base leading-relaxed text-slate-500 dark:text-slate-400 md:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
