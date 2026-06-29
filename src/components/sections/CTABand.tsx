'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Calendar, ArrowRight } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { cn } from '@/lib/utils'

const actions = [
  {
    label: 'Send an Email',
    description: 'kenmoronge@gmail.com',
    href: 'mailto:kenmoronge@gmail.com',
    icon: Mail,
    external: false,
    style: 'bg-white text-navy-600 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700',
    iconStyle: 'bg-navy-600/10 text-navy-600 dark:bg-teal-400/10 dark:text-teal-400',
  },
  {
    label: 'WhatsApp Me',
    description: '+254 707 792 059',
    href: 'https://wa.me/254707792059',
    icon: FaWhatsapp,
    external: true,
    style: 'bg-[#25D366] text-white hover:bg-[#20b858]',
    iconStyle: 'bg-white/20 text-white',
  },
  {
    label: 'Book a Call',
    description: 'Schedule via Calendly',
    href: 'https://calendly.com/kenmoronge',
    icon: Calendar,
    external: true,
    style: 'bg-white text-navy-600 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700',
    iconStyle: 'bg-teal-500/10 text-teal-600 dark:bg-teal-400/10 dark:text-teal-400',
  },
]

export default function CTABand() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-navy-600 dark:bg-navy-900"
    >
      {/* Background pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Gradient orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-navy-400/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col items-center text-center"
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
            custom={0}
            className="mb-4 text-xs font-semibold uppercase tracking-widest text-teal-300"
          >
            Let&apos;s Work Together
          </motion.p>

          {/* Headline */}
          <motion.h2
            id="cta-heading"
            variants={fadeUp}
            custom={0.1}
            className="font-display text-4xl font-bold text-white md:text-5xl"
          >
            Ready to turn data into
            <br />
            <span className="text-teal-300">your next advantage?</span>
          </motion.h2>

          {/* Sub-copy */}
          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="mt-5 max-w-xl text-base leading-relaxed text-slate-300"
          >
            Whether you need an analyst to drive decisions, a process improvement
            specialist, or a web developer to build your digital product — I&apos;m
            open to opportunities in Kenya and internationally.
          </motion.p>

          {/* Action cards */}
          <motion.div
            variants={fadeUp}
            custom={0.3}
            className="mt-10 grid w-full max-w-3xl gap-4 md:grid-cols-3"
          >
            {actions.map(({ label, description, href, icon: Icon, external, style, iconStyle }) => {
              const sharedClass = cn(
                'flex flex-col items-center gap-3 rounded-2xl px-6 py-6 text-center',
                'transition-all duration-200 hover:-translate-y-1 hover:shadow-xl',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50',
                style
              )

              const content = (
                <>
                  <span className={cn('flex h-10 w-10 items-center justify-center rounded-xl', iconStyle)}>
                    <Icon size={20} />
                  </span>
                  <span>
                    <span className="block text-sm font-bold">{label}</span>
                    <span className="mt-0.5 block text-xs opacity-75">{description}</span>
                  </span>
                </>
              )

              if (external) {
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={sharedClass}
                  >
                    {content}
                  </a>
                )
              }

              if (href.startsWith('mailto:')) {
                return (
                  <a
                    key={label}
                    href={href}
                    className={sharedClass}
                  >
                    {content}
                  </a>
                )
              }

              return (
                <Link key={label} href={href} className={sharedClass}>
                  {content}
                </Link>
              )
            })}
          </motion.div>

          {/* Secondary link */}
          <motion.div variants={fadeUp} custom={0.4} className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-300 transition-all hover:gap-3 hover:text-white"
            >
              Or fill out the contact form
              <ArrowRight size={15} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
