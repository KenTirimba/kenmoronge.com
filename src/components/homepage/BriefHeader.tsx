'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { TypewriterText } from './TypewriterText'
import { AnimatedCounter } from '@/components/shared/AnimatedCounter'
import { FileOpenTransition } from './FileOpenTransition'

const kpis = [
  { label: 'Yrs Exp', value: 4, suffix: '+' },
  { label: 'Projects', value: 12, suffix: '+' },
  { label: 'Tools', value: 15, suffix: '+' },
  { label: 'Improvements', value: 20, suffix: '+' },
]

const fileTabs = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Skills', href: '/skills' },
  { label: 'Dashboards', href: '/dashboards' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

/* ── Paperclip ───────────────────────────────────────────────────────── */
function Paperclip() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: '-38px',
        left: '52px',
        zIndex: 30,
        filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.55))',
      }}
    >
      <svg width="30" height="110" viewBox="0 0 30 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="metalGrad" x1="0" y1="0" x2="30" y2="110" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="25%" stopColor="#94a3b8" />
            <stop offset="50%" stopColor="#cbd5e1" />
            <stop offset="75%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
        </defs>
        <path
          d="M 22 6 C 22 3, 18 1, 15 1 C 8 1, 5 5, 5 11 L 5 72 C 5 80, 9 85, 15 85 C 21 85, 25 80, 25 72 L 25 18 C 25 12, 21 9, 15 9 C 9 9, 7 12, 7 18 L 7 68"
          stroke="url(#metalGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  )
}

/* ── File Tab — now a button that triggers the open transition ───────── */
function FileTab({
  label,
  href,
  index,
  total,
  onOpen,
}: {
  label: string
  href: string
  index: number
  total: number
  onOpen: (href: string, label: string) => void
}) {
  const isLast = index === total - 1
  const bg = isLast
    ? 'linear-gradient(180deg, #134e4a, #0f766e)'
    : `linear-gradient(180deg, hsl(${210 + index * 6}, 18%, ${26 + index * 2}%), hsl(${210 + index * 6}, 16%, ${20 + index * 2}%))`

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 + index * 0.07, duration: 0.35 }}
    >
      <button
        type="button"
        onClick={() => onOpen(href, label)}
        className="group block"
        aria-label={`Open ${label}`}
      >
        <div
          style={{
            background: bg,
            width: '64px',
            height: '36px',
            borderRadius: '0 6px 6px 0',
            border: '1px solid rgba(255,255,255,0.07)',
            borderLeft: 'none',
            boxShadow: '4px 3px 10px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.07)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            transition: 'filter 0.2s, transform 0.2s',
            cursor: 'pointer',
          }}
          className="group-hover:brightness-125 group-hover:-translate-x-1"
        >
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.18), transparent)',
            }}
          />
          <span
            style={{
              fontFamily: '"Caveat", cursive',
              fontSize: '13px',
              fontWeight: 600,
              color: isLast ? '#5eead4' : '#94a3b8',
              letterSpacing: '0.03em',
              whiteSpace: 'nowrap',
              transition: 'color 0.2s',
            }}
            className="group-hover:!text-white"
          >
            {label}
          </span>
        </div>
      </button>
    </motion.div>
  )
}

/* ── Main component ─────────────────────────────────────────────────── */
export function BriefHeader() {
  const [phase, setPhase] = useState(0)
  const router = useRouter()
  const [transitioning, setTransitioning] = useState(false)
  const [transitionLabel, setTransitionLabel] = useState('')

  function handleTabOpen(href: string, label: string) {
    setTransitionLabel(label)
    setTransitioning(true)
    setTimeout(() => {
      router.push(href)
    }, 700)
  }

  return (
    <section
      aria-label="Introduction"
      className="relative flex min-h-screen items-center justify-center overflow-visible bg-[#040810] px-4 py-24 md:px-10"
    >
      {/* Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(45,212,191,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(45,212,191,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      {/* Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[900px] w-[900px] rounded-full bg-teal-400/4 blur-3xl"
      />

      <div className="relative flex w-full max-w-3xl flex-col items-center gap-5">

        {/* Boot line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="w-full"
        >
          <span className="font-mono text-xs text-slate-600">
            <TypewriterText
              text="$ initialising ken-tirimba-moronge.portfolio --mode=brief --open=dossier"
              speed={18}
              delay={400}
              onComplete={() => setTimeout(() => setPhase(1), 300)}
            />
          </span>
        </motion.div>

        {/* FILE WRAPPER */}
        {phase >= 1 && (
          <motion.div
            initial={{ opacity: 0, rotate: 0, y: 50, scale: 0.94 }}
            animate={{
              opacity: transitioning ? 0 : 1,
              rotate: transitioning ? 0 : -4,
              y: 0,
              scale: transitioning ? 1.04 : 1,
            }}
            transition={{
              duration: transitioning ? 0.5 : 1,
              ease: transitioning ? [0.4, 0, 0.2, 1] : [0.34, 1.15, 0.64, 1],
            }}
            whileHover={
              transitioning
                ? {}
                : { rotate: -2, y: -8, transition: { duration: 0.45, ease: 'easeOut' } }
            }
            style={{
              position: 'relative',
              width: '100%',
              transformOrigin: 'center bottom',
              cursor: 'default',
            }}
          >

            {/* TABS — right edge */}
            <nav
              aria-label="File navigation"
              style={{
                position: 'absolute',
                right: '-64px',
                top: '60px',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                zIndex: 20,
              }}
            >
              {fileTabs.map((tab, i) => (
                <FileTab
                  key={tab.label}
                  label={tab.label}
                  href={tab.href}
                  index={i}
                  total={fileTabs.length}
                  onOpen={handleTabOpen}
                />
              ))}
            </nav>

            {/* FILE BODY */}
            <div
              style={{
                minHeight: 'min(90vh, 860px)',
                background: `
                  repeating-linear-gradient(
                    0deg, transparent, transparent 31px,
                    rgba(45,212,191,0.035) 31px, rgba(45,212,191,0.035) 32px
                  ),
                  linear-gradient(160deg, #1c2a3a 0%, #141e2d 50%, #0f1623 100%)
                `,
                borderRadius: '3px 3px 2px 2px',
                border: '1px solid rgba(148,163,184,0.1)',
                boxShadow: `
                  8px 12px 40px rgba(0,0,0,0.75),
                  3px 4px 12px rgba(0,0,0,0.5),
                  inset 0 1px 0 rgba(255,255,255,0.05),
                  inset 0 0 100px rgba(0,0,0,0.15)
                `,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* Left red margin rule */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '56px',
                  top: '48px',
                  bottom: '40px',
                  width: '1px',
                  background: 'rgba(239,68,68,0.13)',
                }}
              />

              {/* TOP CLASSIFICATION BAR */}
              <div
                style={{
                  background: 'linear-gradient(90deg, #080f1e, #0f172a, #080f1e)',
                  borderBottom: '1px solid rgba(148,163,184,0.08)',
                  padding: '7px 24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexShrink: 0,
                }}
              >
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-teal-500/80">
                  ■ CLASSIFICATION: OPEN · REF: KTM-2025-001
                </span>
                <span className="font-mono text-[9px] text-slate-700">
                  ANALYST DOSSIER · v1.0
                </span>
              </div>

              {/* BODY */}
              <div className="flex flex-1 flex-col px-7 pb-8 pt-8 md:px-9">

                {/* PHOTO + IDENTITY ROW */}
                <div className="flex items-start gap-6">

                  <div style={{ position: 'relative', flexShrink: 0 }}>
                    <Paperclip />

                    <motion.div
                      initial={{ opacity: 0, scale: 0.88, rotate: -3 }}
                      animate={{ opacity: 1, scale: 1, rotate: -2 }}
                      transition={{ delay: 0.45, duration: 0.65, ease: [0.34, 1.2, 0.64, 1] }}
                      style={{
                        background: '#f0f4f8',
                        padding: '7px 7px 24px 7px',
                        boxShadow: `
                          3px 5px 18px rgba(0,0,0,0.65),
                          0 1px 4px rgba(0,0,0,0.4),
                          inset 0 0 0 1px rgba(0,0,0,0.06)
                        `,
                        borderRadius: '2px',
                        transform: 'rotate(-2deg)',
                        filter: 'contrast(0.94) brightness(0.96) saturate(0.88)',
                        marginTop: '32px',
                        position: 'relative',
                        zIndex: 10,
                      }}
                    >
                      <div style={{ width: '108px', height: '140px', position: 'relative', overflow: 'hidden' }}>
                        <Image
                          src="/images/headshot.jpg"
                          alt="Ken Tirimba Moronge"
                          fill
                          className="object-cover object-top"
                          priority
                        />
                      </div>
                      <p
                        style={{
                          fontFamily: '"Caveat", cursive',
                          fontSize: '11px',
                          color: '#64748b',
                          textAlign: 'center',
                          marginTop: '4px',
                          letterSpacing: '0.02em',
                        }}
                      >
                        Ken T. Moronge
                      </p>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.75, duration: 0.5 }}
                    style={{ flex: 1, minWidth: 0, paddingTop: '4px' }}
                  >
                    <h1 className="font-display text-3xl font-black leading-tight text-slate-50 md:text-4xl lg:text-5xl">
                      Ken Tirimba
                      <br />
                      <span
                        style={{
                          background: 'linear-gradient(90deg, #2DD4BF, #7dd3fc)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        Moronge
                      </span>
                    </h1>

                    <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {[
                        { key: 'Role', val: 'Business Process Analyst', color: '#2DD4BF' },
                        { key: 'Also', val: 'Data Analyst · Web Developer', color: '#7dd3fc' },
                        { key: 'Base', val: 'Nairobi, Kenya', color: '#94a3b8' },
                        { key: 'Employer', val: 'ADEC Innovations', color: '#94a3b8' },
                        { key: 'Status', val: '● Open to Opportunities', color: '#2DD4BF' },
                      ].map(({ key, val, color }) => (
                        <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span
                            style={{
                              width: '58px',
                              flexShrink: 0,
                              fontFamily: 'monospace',
                              fontSize: '9px',
                              textTransform: 'uppercase',
                              letterSpacing: '0.18em',
                              color: '#475569',
                            }}
                          >
                            {key}
                          </span>
                          <div style={{ flex: 1, borderBottom: '1px dotted rgba(148,163,184,0.2)' }} />
                          <span
                            style={{
                              fontFamily: 'monospace',
                              fontSize: '10px',
                              color,
                              fontWeight: key === 'Status' ? 700 : 400,
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {val}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* SUBJECT LINE */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  style={{
                    marginTop: '28px',
                    background: 'rgba(8,15,30,0.55)',
                    border: '1px solid rgba(45,212,191,0.1)',
                    borderLeft: '3px solid rgba(45,212,191,0.4)',
                    borderRadius: '2px',
                    padding: '10px 14px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '9px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.2em',
                      color: '#475569',
                    }}
                  >
                    Subject:{' '}
                  </span>
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#cbd5e1' }}>
                    <TypewriterText
                      text="Turning data into decisions. Building the digital products that bring them to life."
                      speed={14}
                      delay={1300}
                      onComplete={() => setTimeout(() => setPhase(2), 200)}
                    />
                  </span>
                </motion.div>

                {/* KPI STRIP */}
                {phase >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}
                    aria-label="Key statistics"
                  >
                    {kpis.map((k) => (
                      <div
                        key={k.label}
                        style={{
                          background: 'rgba(8,15,30,0.65)',
                          border: '1px solid rgba(148,163,184,0.07)',
                          borderRadius: '3px',
                          padding: '10px 8px',
                          textAlign: 'center',
                        }}
                      >
                        <p style={{ fontFamily: 'var(--font-bricolage), sans-serif', fontSize: '26px', fontWeight: 900, color: '#2DD4BF', lineHeight: 1 }}>
                          <AnimatedCounter value={k.value} suffix={k.suffix} duration={1500} />
                        </p>
                        <p style={{ fontFamily: '"Caveat", cursive', fontSize: '12px', color: '#475569', marginTop: '4px', letterSpacing: '0.04em' }}>
                          {k.label}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* SCROLL CUE */}
                {phase >= 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.7 }}
                    style={{ marginTop: 'auto', paddingTop: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}
                    aria-hidden="true"
                  >
                    <div style={{ flex: 1, height: '1px', background: 'rgba(148,163,184,0.08)' }} />
                    <span style={{ fontFamily: '"Caveat", cursive', fontSize: '14px', color: '#334155', letterSpacing: '0.04em' }}>
                      ↓ scroll to read the brief
                    </span>
                    <div style={{ flex: 1, height: '1px', background: 'rgba(148,163,184,0.08)' }} />
                  </motion.div>
                )}
              </div>

              {/* FILE FOOTER */}
              <div
                style={{
                  borderTop: '1px solid rgba(148,163,184,0.07)',
                  background: 'rgba(8,15,30,0.5)',
                  padding: '7px 28px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexShrink: 0,
                }}
              >
                <span className="font-mono text-[8px] text-slate-700">
                  {new Date().toLocaleDateString('en-KE', { day: '2-digit', month: 'long', year: 'numeric' }).toUpperCase()}
                </span>
                <span style={{ fontFamily: '"Caveat", cursive', fontSize: '12px', color: '#334155' }}>
                  B.Tech Applied Statistics · Lean Six Sigma White Belt · 4+ yrs
                </span>
              </div>
            </div>

            {/* Cast shadow beneath file */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '5%',
                right: '10%',
                height: '30px',
                background: 'rgba(0,0,0,0.55)',
                filter: 'blur(20px)',
                borderRadius: '50%',
                transform: 'rotate(-4deg)',
              }}
            />
          </motion.div>
        )}
      </div>

      <FileOpenTransition active={transitioning} label={transitionLabel} />

      {/* Sentinel — status bar pill appears when this leaves viewport */}
      <div id="brief-hero-end" style={{ position: 'absolute', bottom: 0, height: '1px', width: '100%' }} />
    </section>
  )
}
