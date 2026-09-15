/** Quiet white hall slide — pale wash only, so type stays dark on the projector. */
export function DeckBackground({ hue = 'cyan' }: { hue?: 'cyan' | 'magenta' | 'violet' | 'lime' }) {
  const orbA =
    hue === 'magenta'
      ? 'rgba(154,53,80,0.08)'
      : hue === 'violet'
        ? 'rgba(47,74,115,0.08)'
        : hue === 'lime'
          ? 'rgba(90,100,20,0.07)'
          : 'rgba(13,110,104,0.09)'
  const orbB =
    hue === 'magenta' ? 'rgba(47,74,115,0.06)' : 'rgba(154,53,80,0.05)'

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-paper">
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div
        className="absolute -left-24 -top-24 h-[26rem] w-[26rem] rounded-full"
        style={{ background: orbA, filter: 'blur(110px)' }}
      />
      <div
        className="absolute -bottom-28 -right-24 h-[28rem] w-[28rem] rounded-full"
        style={{ background: orbB, filter: 'blur(110px)' }}
      />
    </div>
  )
}
