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
      <div className="slide-scroll relative z-10 flex h-full min-h-0 flex-col overflow-y-auto px-6 pb-20 pt-8 sm:px-10 lg:px-16 xl:px-20">
        <div
          className={`mx-auto flex w-full max-w-[1680px] flex-1 flex-col ${
            center ? 'justify-center' : 'justify-center py-2'
          }`}
        >
          {(kicker || era) && (
            <div className="mb-3 flex flex-wrap items-center gap-3">
              {kicker && (
                <span className="font-mono text-xs uppercase tracking-[0.32em] text-white/45">
                  {kicker}
                </span>
              )}
              {era && eraTint && <EraBadge years={era} tint={eraTint} />}
            </div>
          )}
          {title && (
            <h2 className="font-display text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-3 max-w-5xl text-base text-white/65 sm:text-lg lg:text-xl">
              {subtitle}
            </p>
          )}
          {children && <div className={title ? 'mt-6 lg:mt-8' : ''}>{children}</div>}
        </div>
      </div>
    </section>
  )
}
