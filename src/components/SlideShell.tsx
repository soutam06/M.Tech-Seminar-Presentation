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
      <div className="relative z-10 flex h-full min-h-0 flex-col px-16 pb-24 pt-12">
        <div
          className={`flex min-h-0 w-full flex-1 flex-col overflow-hidden ${
            center ? 'items-center justify-center' : ''
          }`}
        >
          {(kicker || era) && (
            <div
              className={`mb-3 flex shrink-0 flex-wrap items-center gap-3 ${
                center ? 'justify-center' : ''
              }`}
            >
              {kicker && (
                <span className="font-mono text-[20px] uppercase tracking-[0.22em] text-muted">
                  {kicker}
                </span>
              )}
              {era && eraTint && <EraBadge years={era} tint={eraTint} />}
            </div>
          )}
          {title && (
            <h2
              className={`deck-title max-w-none shrink-0 font-display font-bold tracking-tight ${
                center ? 'text-center' : ''
              }`}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p
              className={`deck-sub mt-3 max-w-[1600px] shrink-0 font-medium ${
                center ? 'text-center' : ''
              }`}
            >
              {subtitle}
            </p>
          )}
          {children && (
            <div
              className={`flex min-h-0 flex-col overflow-hidden ${
                center ? '' : 'flex-1'
              } ${title ? 'mt-5' : ''}`}
            >
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
