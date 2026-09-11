import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export function GradientText({
  children,
  className = '',
  from = 'var(--color-neon-cyan)',
  to = 'var(--color-neon-magenta)',
}: {
  children: ReactNode
  className?: string
  from?: string
  to?: string
}) {
  return (
    <span
      className={`bg-clip-text text-transparent ${className}`}
      style={{ backgroundImage: `linear-gradient(90deg, ${from}, ${to})` }}
    >
      {children}
    </span>
  )
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/70 backdrop-blur">
      {children}
    </span>
  )
}

export function EraBadge({ years, tint }: { years: string; tint: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-xs font-semibold tracking-widest"
      style={{ color: tint, background: `${tint}1a`, border: `1px solid ${tint}44` }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: tint }} />
      {years}
    </span>
  )
}

export function Card({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm ${className}`}
    >
      {children}
    </motion.div>
  )
}

export function Stat({
  value,
  label,
  tint = 'var(--color-neon-cyan)',
}: {
  value: string
  label: string
  tint?: string
}) {
  return (
    <div className="flex flex-col">
      <span
        className="font-display text-3xl font-bold leading-none md:text-4xl"
        style={{ color: tint }}
      >
        {value}
      </span>
      <span className="mt-2 text-xs uppercase tracking-widest text-white/50 md:text-sm">
        {label}
      </span>
    </div>
  )
}

export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
