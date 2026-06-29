'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  MapPin,
  Mail,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Award,
} from 'lucide-react'
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { cn } from '@/lib/utils'

const values = [
  {
    title: 'Data-first thinking',
    description:
      'Every recommendation I make is grounded in evidence. I collect, clean, analyse, and validate before I conclude.',
  },
  {
    title: 'Process clarity',
    description:
      'I believe complex systems can always be made simpler. I map what exists, identify what hurts, and design what works.',
  },
  {
    title: 'Builder mentality',
    description:
      'I don\'t just produce reports — I build the tools, dashboards, and products that let teams act on the insight.',
  },
  {
    title: 'Continuous improvement',
    description:
      'Lean Six Sigma isn\'t just a certification for me — it\'s how I approach every workflow, including my own.',
  },
]

const education = [
  {
    degree: 'Bachelor of Technology — Applied Statistics',
    institution: 'The Technical University of Kenya',
    year: '2014 – 2019',
    icon: GraduationCap,
  },
  {
    degree: 'International Computer Driving License',
    institution: 'Institute of Advanced Technology, Nakuru',
    year: '2014 – 2015',
    icon: Award,
  },
]

const certifications = [
  {
    name: 'Lean Six Sigma White Belt',
    issuer: 'Six Sigma',
    year: 'September 2024',
    icon: Award,
  },
]

const socialLinks = [
  { href: 'https://linkedin.com/in/ken-moronge', label: 'LinkedIn', icon: FaLinkedin, color: 'hover:bg-[#0077B5] hover:text-white' },
  { href: 'https://github.com/KenTirimba', label: 'GitHub', icon: FaGithub, color: 'hover:bg-[#333] hover:text-white' },
  { href: 'https://x.com/M_Tirimba', label: 'X', icon: FaXTwitter, color: 'hover:bg-black hover:text-white' },
  { href: 'https://wa.me/254707792059', label: 'WhatsApp', icon: FaWhatsapp, color: 'hover:bg-[#25D366] hover:text-white' },
]

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080f1e]">
      {/* Hero */}
      <div className="bg-white dark:bg-[#0a0f1e] border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-32 md:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid gap-12 md:grid-cols-2 md:items-center"
          >
            {/* Text */}
            <div>
              <motion.p
                variants={fadeUp}
                custom={0}
                className="mb-3 text-xs font-semibold uppercase tracking-widest text-teal-500 dark:text-teal-400"
              >
                About Me
              </motion.p>
              <motion.h1
                variants={fadeUp}
                custom={0.1}
                className="font-display text-4xl font-bold text-navy-600 dark:text-slate-50 md:text-5xl"
              >
                Analyst. Builder.
                <br />
                Problem solver.
              </motion.h1>
              <motion.p
                variants={fadeUp}
                custom={0.2}
                className="mt-5 text-base leading-relaxed text-slate-500 dark:text-slate-400"
              >
                I&apos;m Ken Tirimba Moronge — a Business Process Analyst and Web
                Developer based in Kenya with a background in Applied Statistics.
                For the past 4+ years, I&apos;ve been helping organisations at ADEC
                Innovations make sense of their data and fix what&apos;s broken in
                their processes — for clients like FedEx and First American
                Financial Corp.
              </motion.p>
              <motion.p
                variants={fadeUp}
                custom={0.3}
                className="mt-4 text-base leading-relaxed text-slate-500 dark:text-slate-400"
              >
                Alongside my analytical work, I design and build premium websites
                and web applications for businesses across Kenya — combining
                clean code with strong visual instincts to deliver products that
                perform and convert.
              </motion.p>
              <motion.p
                variants={fadeUp}
                custom={0.4}
                className="mt-4 text-base leading-relaxed text-slate-500 dark:text-slate-400"
              >
                I&apos;m open to full-time analytical roles, freelance web development
                projects, and remote international opportunities. If you have a
                problem that needs clear thinking and sharp execution — let&apos;s talk.
              </motion.p>

              {/* Location + contact */}
              <motion.div
                variants={fadeUp}
                custom={0.5}
                className="mt-6 flex flex-wrap items-center gap-4"
              >
                <span className="flex items-center gap-1.5 text-sm text-slate-400 dark:text-slate-500">
                  <MapPin size={14} />
                  Nairobi, Kenya
                </span>
                <a
                  href="mailto:kenmoronge@gmail.com"
                  className="flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-navy-600 dark:text-slate-500 dark:hover:text-teal-400"
                >
                  <Mail size={14} />
                  kenmoronge@gmail.com
                </a>
              </motion.div>

              {/* Social */}
              <motion.div
                variants={fadeUp}
                custom={0.6}
                className="mt-5 flex gap-3"
              >
                {socialLinks.map(({ href, label, icon: Icon, color }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className={cn(
                      'flex h-9 w-9 items-center justify-center rounded-full',
                      'bg-slate-100 text-slate-500 transition-all duration-200',
                      'dark:bg-slate-800 dark:text-slate-400',
                      color
                    )}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                variants={fadeUp}
                custom={0.7}
                className="mt-7 flex flex-wrap gap-3"
              >
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 rounded-lg bg-navy-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-navy-800 hover:shadow-md dark:bg-teal-400 dark:text-navy-900 dark:hover:bg-teal-300"
                >
                  See my work
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-semibold text-navy-600 transition-all hover:border-navy-600 hover:shadow-sm dark:border-slate-700 dark:text-slate-100 dark:hover:border-teal-400"
                >
                  Get in touch
                </Link>
              </motion.div>
            </div>

            {/* Photo placeholder */}
            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="flex justify-center md:justify-end"
            >
              <div className="relative">
                <div className="h-72 w-72 overflow-hidden rounded-2xl border-4 border-white bg-gradient-to-br from-navy-100 to-teal-100 shadow-xl dark:border-slate-800 dark:from-navy-900 dark:to-teal-900 md:h-80 md:w-80">
                  {/* Replace src with your actual headshot */}
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="font-display text-6xl font-bold text-navy-600/30 dark:text-teal-400/30">
                      KTM
                    </span>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg dark:border-slate-700 dark:bg-slate-800">
                  <p className="font-mono text-xs font-bold text-navy-600 dark:text-teal-400">
                    4+ years
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    of impact
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 space-y-20">

        {/* Values */}
        <section aria-labelledby="values-heading">
          <motion.h2
            id="values-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8 font-display text-2xl font-bold text-navy-600 dark:text-slate-100"
          >
            How I work
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/60"
              >
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-teal-500 dark:text-teal-400" />
                <div>
                  <h3 className="font-semibold text-navy-600 dark:text-slate-100">
                    {v.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {v.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section aria-labelledby="education-heading">
          <motion.h2
            id="education-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8 font-display text-2xl font-bold text-navy-600 dark:text-slate-100"
          >
            Education
          </motion.h2>
          <div className="flex flex-col gap-4">
            {education.map((e, i) => {
              const Icon = e.icon
              return (
                <motion.div
                  key={e.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/60"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400">
                    <Icon size={18} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy-600 dark:text-slate-100">
                      {e.degree}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {e.institution}
                    </p>
                    <p className="mt-1 font-mono text-xs text-slate-400 dark:text-slate-500">
                      {e.year}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Certifications */}
        <section aria-labelledby="certs-heading">
          <motion.h2
            id="certs-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8 font-display text-2xl font-bold text-navy-600 dark:text-slate-100"
          >
            Certifications
          </motion.h2>
          <div className="flex flex-col gap-4">
            {certifications.map((c, i) => {
              const Icon = c.icon
              return (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4 rounded-2xl border border-amber-100 bg-amber-50 p-6 dark:border-amber-900/30 dark:bg-amber-900/10"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                    <Icon size={18} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy-600 dark:text-slate-100">
                      {c.name}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {c.issuer}
                    </p>
                    <p className="mt-1 font-mono text-xs text-slate-400 dark:text-slate-500">
                      {c.year}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-navy-600 p-8 text-center dark:bg-navy-900">
          <h2 className="font-display text-2xl font-bold text-white">
            Let&apos;s work together
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Open to analytical roles, freelance web projects, and remote opportunities.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-teal-400 px-5 py-2.5 text-sm font-semibold text-navy-900 transition-all hover:bg-teal-300 hover:shadow-md"
            >
              Get in touch
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10"
            >
              View my work
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
