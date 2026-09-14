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
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/70">
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
  delay: _delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/[0.05] p-5 lg:p-6 ${className}`}>
      {children}
    </div>
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
        className="font-display text-4xl font-bold leading-none lg:text-5xl"
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
  delay: _delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return <div className={className}>{children}</div>
}
