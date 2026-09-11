import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
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
    <section className="scanlines relative h-full w-full overflow-hidden">
      <DeckBackground hue={hue} />
      <div className="slide-scroll relative z-10 flex h-full flex-col overflow-y-auto">
        <div
          className={`mx-auto my-auto w-full max-w-6xl px-6 py-10 md:px-14 md:py-12 ${
            center ? 'md:py-14' : ''
          }`}
        >
          {(kicker || era) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-4 flex flex-wrap items-center gap-3"
          >
            {kicker && (
              <span className="font-mono text-xs uppercase tracking-[0.32em] text-white/45">
                {kicker}
              </span>
            )}
            {era && eraTint && <EraBadge years={era} tint={eraTint} />}
          </motion.div>
        )}
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl"
          >
            {title}
          </motion.h2>
        )}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-4 max-w-3xl text-base text-white/65 md:text-xl"
          >
            {subtitle}
          </motion.p>
        )}
          {children && <div className={title ? 'mt-8' : ''}>{children}</div>}
        </div>
      </div>
    </section>
  )
}
