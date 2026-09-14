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
      <div className="relative z-10 flex h-full min-h-0 flex-col px-[2.8vw] pb-[4.6rem] pt-[1.6vw]">
        <div
          className={`flex min-h-0 w-full flex-1 flex-col ${center ? 'justify-center' : ''}`}
        >
          {(kicker || era) && (
            <div className="mb-[0.6vw] flex flex-wrap items-center gap-3">
              {kicker && (
                <span className="font-mono text-[clamp(0.9rem,1.35vw,1.15rem)] uppercase tracking-[0.22em] text-white/75">
                  {kicker}
                </span>
              )}
              {era && eraTint && <EraBadge years={era} tint={eraTint} />}
            </div>
          )}
          {title && (
            <h2 className="deck-title max-w-none font-display font-bold tracking-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="deck-sub mt-[0.6vw] max-w-none font-medium text-white/90">
              {subtitle}
            </p>
          )}
          {children && (
            <div className={`flex min-h-0 flex-1 flex-col ${title ? 'mt-[1.1vw]' : ''}`}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
