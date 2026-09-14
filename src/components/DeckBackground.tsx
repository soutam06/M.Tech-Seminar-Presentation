/** Static background — no looping motion, no giant blurs (those made the deck lag). */
export function DeckBackground({ hue = 'cyan' }: { hue?: 'cyan' | 'magenta' | 'violet' | 'lime' }) {
  const orbA =
    hue === 'magenta'
      ? 'rgba(233,74,255,0.22)'
      : hue === 'violet'
        ? 'rgba(139,92,246,0.22)'
        : hue === 'lime'
          ? 'rgba(163,230,53,0.16)'
          : 'rgba(34,211,238,0.20)'
  const orbB = hue === 'magenta' ? 'rgba(139,92,246,0.16)' : 'rgba(233,74,255,0.16)'

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="absolute -left-24 -top-24 h-[28rem] w-[28rem] rounded-full"
        style={{ background: orbA, filter: 'blur(80px)' }}
      />
      <div
        className="absolute -bottom-28 -right-24 h-[30rem] w-[30rem] rounded-full"
        style={{ background: orbB, filter: 'blur(80px)' }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 40%, transparent 40%, rgba(5,6,15,0.72) 100%)',
        }}
      />
    </div>
  )
}
