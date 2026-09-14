import type { ReactNode } from 'react'
import { DeckBackground } from './DeckBackground'
import { EraBadge } from './primitives'

export function SlideShell({
  kicker,
  era,
  eraTint,
  title,
  subtitle,
  hue = 'cyan',
  children,
  center = false,
}: {
  kicker?: string
  era?: string
  eraTint?: string
  title?: ReactNode
  subtitle?: ReactNode
  hue?: 'cyan' | 'magenta' | 'violet' | 'lime'
  children?: ReactNode
  center?: boolean
}) {
  return (
    <section className="relative h-full w-full overflow-hidden">
      <DeckBackground hue={hue} />
      <div className="relative z-10 flex h-full min-h-0 flex-col px-[3.5vw] pb-20 pt-7">
        <div
          className={`flex min-h-0 w-full flex-1 flex-col ${center ? 'justify-center' : ''}`}
        >
          {(kicker || era) && (
            <div className="mb-2 flex flex-wrap items-center gap-3">
              {kicker && (
                <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/45 sm:text-xs">
                  {kicker}
                </span>
              )}
              {era && eraTint && <EraBadge years={era} tint={eraTint} />}
            </div>
          )}
          {title && (
            <h2 className="max-w-none font-display text-[clamp(1.75rem,4.2vw,4.25rem)] font-bold leading-[1.06] tracking-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-2 max-w-none text-[clamp(0.95rem,1.6vw,1.35rem)] leading-snug text-white/70">
              {subtitle}
            </p>
          )}
          {children && (
            <div className={`flex min-h-0 flex-1 flex-col ${title ? 'mt-4' : ''}`}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
