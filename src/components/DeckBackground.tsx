/** Static background — quiet wash, not cyber-glow. */
export function DeckBackground({ hue = 'cyan' }: { hue?: 'cyan' | 'magenta' | 'violet' | 'lime' }) {
  const orbA =
    hue === 'magenta'
      ? 'rgba(208,138,154,0.16)'
      : hue === 'violet'
        ? 'rgba(143,164,196,0.16)'
        : hue === 'lime'
          ? 'rgba(192,200,106,0.12)'
          : 'rgba(93,205,192,0.16)'
  const orbB =
    hue === 'magenta' ? 'rgba(143,164,196,0.12)' : 'rgba(208,138,154,0.10)'

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
