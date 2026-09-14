/** Static background — quiet wash, not cyber-glow. */
export function DeckBackground({ hue = 'cyan' }: { hue?: 'cyan' | 'magenta' | 'violet' | 'lime' }) {
  const orbA =
    hue === 'magenta'
      ? 'rgba(196,146,159,0.09)'
      : hue === 'violet'
        ? 'rgba(154,171,192,0.09)'
        : hue === 'lime'
          ? 'rgba(180,188,110,0.07)'
          : 'rgba(110,196,186,0.09)'
  const orbB =
    hue === 'magenta' ? 'rgba(154,171,192,0.07)' : 'rgba(196,146,159,0.06)'

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div
        className="absolute -left-24 -top-24 h-[26rem] w-[26rem] rounded-full"
        style={{ background: orbA, filter: 'blur(110px)' }}
      />
      <div
        className="absolute -bottom-28 -right-24 h-[28rem] w-[28rem] rounded-full"
        style={{ background: orbB, filter: 'blur(110px)' }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 40%, transparent 42%, rgba(12,18,24,0.78) 100%)',
        }}
      />
    </div>
  )
}
