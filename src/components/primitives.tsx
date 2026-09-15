import type { ReactNode } from 'react'

export function GradientText({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span className={className} style={{ color: 'var(--color-accent)' }}>
      {children}
    </span>
  )
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-ink/15 bg-panel px-4 py-1.5 text-[18px] font-medium uppercase tracking-[0.16em] text-ink">
      {children}
    </span>
  )
}

export function EraBadge({ years, tint }: { years: string; tint: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[22px] font-semibold tracking-widest"
      style={{ color: tint, background: `${tint}14`, border: `1px solid ${tint}55` }}
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
      className={`flex h-full min-h-0 flex-col justify-start overflow-hidden rounded-xl border border-ink/12 bg-white p-6 ${className}`}
    >
      {children}
    </div>
  )
}

export function Stat({
  value,
  label,
  tint = 'var(--color-teal)',
}: {
  value: string
  label: string
  tint?: string
}) {
  return (
    <div className="flex flex-col">
      <span className="font-display text-[72px] font-bold leading-none" style={{ color: tint }}>
        {value}
      </span>
      <span className="mt-3 text-[24px] font-medium uppercase tracking-widest text-ink">
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
