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
    <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[16px] font-medium uppercase tracking-[0.16em] text-white">
      {children}
    </span>
  )
}

export function EraBadge({ years, tint }: { years: string; tint: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[18px] font-semibold tracking-widest"
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
  delay?: number
  className?: string
}) {
  return (
    <div
      className={`flex h-full min-h-0 flex-col justify-start overflow-hidden rounded-2xl border border-white/20 bg-white/[0.09] p-6 ${className}`}
    >
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
      <span className="font-display text-[60px] font-bold leading-none" style={{ color: tint }}>
        {value}
      </span>
      <span className="mt-3 text-[20px] font-medium uppercase tracking-widest text-white">
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
