'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import emailjs from '@emailjs/browser'
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Send,
  Loader2,
} from 'lucide-react'
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { cn } from '@/lib/utils'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(4, 'Subject must be at least 4 characters'),
  type: z.enum(['analytics', 'webdev', 'general']),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})

type FormData = z.infer<typeof schema>

const inquiryTypes = [
  { value: 'analytics', label: 'Analytics / BPA Role' },
  { value: 'webdev', label: 'Web Development Project' },
  { value: 'general', label: 'General Inquiry' },
]

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kenmoronge@gmail.com',
    href: 'mailto:kenmoronge@gmail.com',
    external: false,
  },
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: '+254 707 792 059',
    href: 'https://wa.me/254707792059',
    external: true,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Nairobi, Kenya',
    href: null,
    external: false,
  },
  {
    icon: Calendar,
    label: 'Schedule a Call',
    value: 'Book via Calendly',
    href: 'https://calendly.com/kenmoronge',
    external: true,
  },
]

const socialLinks = [
  {
    href: 'https://linkedin.com/in/ken-moronge',
    label: 'LinkedIn',
    icon: FaLinkedin,
    color: 'hover:bg-[#0077B5] hover:text-white',
  },
  {
    href: 'https://github.com/KenTirimba',
    label: 'GitHub',
    icon: FaGithub,
    color: 'hover:bg-[#333] hover:text-white',
  },
  {
    href: 'https://x.com/M_Tirimba',
    label: 'X',
    icon: FaXTwitter,
    color: 'hover:bg-black hover:text-white',
  },
  {
    href: 'https://wa.me/254707792059',
    label: 'WhatsApp',
    icon: FaWhatsapp,
    color: 'hover:bg-[#25D366] hover:text-white',
  },
]

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactClient() {
  const [status, setStatus] = useState<Status>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  async function onSubmit(data: FormData) {
    setStatus('loading')
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          inquiry_type: data.type,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080f1e]">
      {/* Page hero */}
      <div className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-[#0a0f1e]">
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
              Get In Touch
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="font-display text-4xl font-bold text-navy-600 dark:text-slate-50 md:text-5xl"
            >
              Let&apos;s start a conversation
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500 dark:text-slate-400"
            >
              Whether you need an analyst, a process improvement specialist, or
              a web developer — I&apos;m open to opportunities in Kenya and
              internationally. Reach out and I&apos;ll respond within 24 hours.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-12 lg:grid-cols-5">

          {/* Left — contact info */}
          <motion.aside
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {/* Quick actions */}
            <motion.div variants={fadeUp} custom={0} className="mb-8">
              <a
                href="https://wa.me/254707792059"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'flex w-full items-center justify-center gap-3 rounded-xl',
                  'bg-[#25D366] px-6 py-4 text-sm font-bold text-white',
                  'transition-all duration-200 hover:bg-[#20b858] hover:shadow-lg hover:-translate-y-0.5'
                )}
              >
                <FaWhatsapp size={20} />
                WhatsApp me directly
              </a>
            </motion.div>

            {/* Contact details */}
            <motion.div
              variants={fadeUp}
              custom={0.1}
              className="mb-8 flex flex-col gap-4"
            >
              {contactDetails.map(({ icon: Icon, label, value, href, external }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/60"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-600/10 text-navy-600 dark:bg-teal-400/10 dark:text-teal-400">
                    <Icon size={16} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                      {label}
                    </p>
                    {href ? (
                      external ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-0.5 text-sm font-medium text-navy-600 transition-colors hover:text-teal-500 dark:text-slate-200 dark:hover:text-teal-400"
                        >
                          {value}
                        </a>
                      ) : (
                        <a
                          href={href}
                          className="mt-0.5 text-sm font-medium text-navy-600 transition-colors hover:text-teal-500 dark:text-slate-200 dark:hover:text-teal-400"
                        >
                          {value}
                        </a>
                      )
                    ) : (
                      <p className="mt-0.5 text-sm font-medium text-navy-600 dark:text-slate-200">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeUp} custom={0.2}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                Connect
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ href, label, icon: Icon, color }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className={cn(
                      'flex h-10 w-10 items-center justify-center rounded-full',
                      'bg-slate-100 text-slate-500 transition-all duration-200',
                      'dark:bg-slate-800 dark:text-slate-400',
                      color
                    )}
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Availability badge */}
            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="mt-8 rounded-xl border border-teal-200 bg-teal-50 p-4 dark:border-teal-800 dark:bg-teal-900/20"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal-500" />
                </span>
                <p className="text-sm font-semibold text-teal-700 dark:text-teal-400">
                  Available for opportunities
                </p>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-teal-600 dark:text-teal-500">
                Open to full-time analytical roles, freelance web development
                projects, and remote international positions.
              </p>
            </motion.div>
          </motion.aside>

          {/* Right — form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
              <h2 className="mb-6 font-display text-xl font-bold text-navy-600 dark:text-slate-100">
                Send a message
              </h2>

              {/* Success state */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 flex items-start gap-3 rounded-xl bg-teal-50 p-4 dark:bg-teal-900/20"
                >
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-teal-500" />
                  <div>
                    <p className="text-sm font-semibold text-teal-700 dark:text-teal-400">
                      Message sent successfully!
                    </p>
                    <p className="mt-0.5 text-xs text-teal-600 dark:text-teal-500">
                      Thank you for reaching out. I&apos;ll get back to you within 24
                      hours.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Error state */}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 flex items-start gap-3 rounded-xl bg-red-50 p-4 dark:bg-red-900/20"
                >
                  <AlertCircle size={18} className="mt-0.5 shrink-0 text-red-500" />
                  <div>
                    <p className="text-sm font-semibold text-red-700 dark:text-red-400">
                      Something went wrong
                    </p>
                    <p className="mt-0.5 text-xs text-red-600 dark:text-red-500">
                      Please try again or reach out directly via WhatsApp or
                      email.
                    </p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                {/* Name + Email */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Jane Muthoni"
                      {...register('name')}
                      className={cn(
                        'w-full rounded-lg border px-4 py-3 text-sm text-slate-700 outline-none transition-all',
                        'placeholder:text-slate-300 dark:placeholder:text-slate-600',
                        'bg-white dark:bg-slate-800 dark:text-slate-200',
                        'focus:ring-2 focus:ring-teal-400 focus:border-teal-400',
                        errors.name
                          ? 'border-red-400 dark:border-red-500'
                          : 'border-slate-200 dark:border-slate-700'
                      )}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="jane@company.com"
                      {...register('email')}
                      className={cn(
                        'w-full rounded-lg border px-4 py-3 text-sm text-slate-700 outline-none transition-all',
                        'placeholder:text-slate-300 dark:placeholder:text-slate-600',
                        'bg-white dark:bg-slate-800 dark:text-slate-200',
                        'focus:ring-2 focus:ring-teal-400 focus:border-teal-400',
                        errors.email
                          ? 'border-red-400 dark:border-red-500'
                          : 'border-slate-200 dark:border-slate-700'
                      )}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Inquiry type */}
                <div>
                  <label
                    htmlFor="type"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
                  >
                    Inquiry Type *
                  </label>
                  <select
                    id="type"
                    {...register('type')}
                    className={cn(
                      'w-full rounded-lg border px-4 py-3 text-sm text-slate-700 outline-none transition-all',
                      'bg-white dark:bg-slate-800 dark:text-slate-200',
                      'focus:ring-2 focus:ring-teal-400 focus:border-teal-400',
                      errors.type
                        ? 'border-red-400 dark:border-red-500'
                        : 'border-slate-200 dark:border-slate-700'
                    )}
                  >
                    <option value="">Select inquiry type...</option>
                    {inquiryTypes.map(({ value, label }) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                  {errors.type && (
                    <p className="mt-1 text-xs text-red-500">{errors.type.message}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
                  >
                    Subject *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Data Analyst role at Acme Corp"
                    {...register('subject')}
                    className={cn(
                      'w-full rounded-lg border px-4 py-3 text-sm text-slate-700 outline-none transition-all',
                      'placeholder:text-slate-300 dark:placeholder:text-slate-600',
                      'bg-white dark:bg-slate-800 dark:text-slate-200',
                      'focus:ring-2 focus:ring-teal-400 focus:border-teal-400',
                      errors.subject
                        ? 'border-red-400 dark:border-red-500'
                        : 'border-slate-200 dark:border-slate-700'
                    )}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about the opportunity or project..."
                    {...register('message')}
                    className={cn(
                      'w-full resize-none rounded-lg border px-4 py-3 text-sm text-slate-700 outline-none transition-all',
                      'placeholder:text-slate-300 dark:placeholder:text-slate-600',
                      'bg-white dark:bg-slate-800 dark:text-slate-200',
                      'focus:ring-2 focus:ring-teal-400 focus:border-teal-400',
                      errors.message
                        ? 'border-red-400 dark:border-red-500'
                        : 'border-slate-200 dark:border-slate-700'
                    )}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={cn(
                    'inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5',
                    'text-sm font-bold transition-all duration-200',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400',
                    status === 'loading'
                      ? 'cursor-not-allowed bg-slate-300 text-slate-500 dark:bg-slate-700 dark:text-slate-400'
                      : 'bg-navy-600 text-white hover:bg-navy-800 hover:shadow-lg hover:-translate-y-0.5 dark:bg-teal-400 dark:text-navy-900 dark:hover:bg-teal-300'
                  )}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-400 dark:text-slate-500">
                  Or reach out directly via{' '}
                  <a
                    href="https://wa.me/254707792059"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-teal-500 hover:text-teal-600 dark:text-teal-400"
                  >
                    WhatsApp
                  </a>
                  {' '}or{' '}
                  <a
                    href="mailto:kenmoronge@gmail.com"
                    className="font-semibold text-teal-500 hover:text-teal-600 dark:text-teal-400"
                  >
                    email
                  </a>
                  . I respond within 24 hours.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
