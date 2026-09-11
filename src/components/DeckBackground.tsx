import { motion } from 'framer-motion'

/** Ambient animated background: drifting neon orbs + grid + scanlines. */
export function DeckBackground({ hue = 'cyan' }: { hue?: 'cyan' | 'magenta' | 'violet' | 'lime' }) {
  const orbA =
    hue === 'magenta'
      ? 'var(--color-neon-magenta)'
      : hue === 'violet'
        ? 'var(--color-neon-violet)'
        : hue === 'lime'
          ? 'var(--color-neon-lime)'
          : 'var(--color-neon-cyan)'
  const orbB = hue === 'magenta' ? 'var(--color-neon-violet)' : 'var(--color-neon-magenta)'

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <motion.div
        className="absolute -left-40 -top-40 h-[42rem] w-[42rem] rounded-full blur-[120px]"
        style={{ background: orbA, opacity: 0.18 }}
        animate={{ x: [0, 60, -20, 0], y: [0, 40, 10, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-52 -right-40 h-[44rem] w-[44rem] rounded-full blur-[130px]"
        style={{ background: orbB, opacity: 0.16 }}
        animate={{ x: [0, -50, 20, 0], y: [0, -30, -10, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 50% -10%, transparent 55%, rgba(5,6,15,0.85) 100%)',
        }}
      />
    </div>
  )
}
