'use client'

import { AnimatePresence, motion } from 'framer-motion'

interface Props {
  active: boolean
  label: string
}

export function FileOpenTransition({ active, label }: Props) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#040810]"
          aria-hidden="true"
        >
          {/* The "file" that straightens and opens */}
          <motion.div
            initial={{ rotate: -4, scale: 0.92, opacity: 1 }}
            animate={{
              rotate: [-4, 0, 0],
              scale: [0.92, 1, 1.06],
              opacity: [1, 1, 0],
            }}
            transition={{
              duration: 0.85,
              times: [0, 0.45, 1],
              ease: [0.4, 0, 0.2, 1],
            }}
            className="relative h-[70vh] w-[80vw] max-w-md rounded-sm border border-slate-700/60"
            style={{
              background: `
                repeating-linear-gradient(
                  0deg, transparent, transparent 27px,
                  rgba(45,212,191,0.04) 27px, rgba(45,212,191,0.04) 28px
                ),
                linear-gradient(160deg, #1c2a3a 0%, #141e2d 50%, #0f1623 100%)
              `,
              boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
            }}
          >
            {/* Opening flap — white light "page" that reveals as file opens */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: [0, 0, 1.4], opacity: [0, 0, 1] }}
              transition={{
                duration: 0.85,
                times: [0, 0.5, 1],
                ease: [0.4, 0, 0.2, 1],
              }}
              style={{ transformOrigin: 'left center' }}
              className="absolute inset-0 rounded-sm bg-gradient-to-r from-teal-400/20 via-white/10 to-transparent"
            />

            {/* Center label */}
            <div className="flex h-full flex-col items-center justify-center gap-3">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 0.85, times: [0, 0.3, 0.7, 1] }}
                className="font-mono text-[10px] uppercase tracking-[0.3em] text-teal-400"
              >
                Opening File
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: [0, 1, 1, 0], y: [8, 0, 0, -8] }}
                transition={{ duration: 0.85, times: [0, 0.3, 0.7, 1] }}
                className="font-display text-2xl font-bold text-slate-100"
              >
                {label}
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
