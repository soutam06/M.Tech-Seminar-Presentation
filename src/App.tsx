import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { slides } from './slides'

function readExportMode() {
  if (typeof window === 'undefined') return { exportMode: false, start: 0 }
  const params = new URLSearchParams(window.location.search)
  const raw = Number(params.get('slide') ?? '0')
  const start = Number.isFinite(raw) ? raw : 0
  return { exportMode: params.has('export'), start }
}

export default function App() {
  const boot = readExportMode()
  const [index, setIndex] = useState(() =>
    Math.max(0, Math.min(slides.length - 1, boot.start)),
  )
  const [dir, setDir] = useState(1)
  const [showMap, setShowMap] = useState(false)
  const exportMode = boot.exportMode
  const count = slides.length

  // keep a ref of index for the key handler without re-binding
  const indexRef = useRef(index)
  indexRef.current = index

  const go = useCallback(
    (next: number) => {
      setIndex((cur) => {
        const clamped = Math.max(0, Math.min(count - 1, next))
        setDir(clamped >= cur ? 1 : -1)
        return clamped
      })
    },
    [count],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault()
        setShowMap(false)
        go(indexRef.current + 1)
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        setShowMap(false)
        go(indexRef.current - 1)
      } else if (e.key === 'Home') {
        go(0)
      } else if (e.key === 'End') {
        go(count - 1)
      } else if (e.key === 'g' || e.key === 'Escape') {
        setShowMap((s) => !s)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, count])

  const current = slides[index]

  return (
    <MotionConfig reducedMotion={exportMode ? 'always' : 'never'}>
    <div
      className={`relative h-screen w-screen overflow-hidden bg-[color:var(--color-ink)] text-white ${
        exportMode ? 'export-mode' : ''
      }`}
    >
      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={current.id}
          custom={dir}
          initial={exportMode ? false : { opacity: 0, x: dir * 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={exportMode ? undefined : { opacity: 0, x: dir * -60 }}
          transition={{ duration: exportMode ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          {current.render()}
        </motion.div>
      </AnimatePresence>

      {/* Progress bar */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-1 bg-white/5 export-hide">
        <motion.div
          className="h-full"
          style={{
            background: 'linear-gradient(90deg, var(--color-neon-cyan), var(--color-neon-magenta))',
          }}
          animate={{ width: `${((index + 1) / count) * 100}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>

      {/* Bottom control bar */}
      <div className="absolute inset-x-0 bottom-0 z-30 flex items-center justify-between px-5 pb-5 md:px-8 export-hide">
        <button
          onClick={() => setShowMap((s) => !s)}
          className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 font-mono text-xs text-white/70 backdrop-blur transition hover:bg-black/60"
        >
          <span className="grid grid-cols-3 gap-0.5">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="h-1 w-1 rounded-[1px] bg-white/60" />
            ))}
          </span>
          {slides[index].label}
        </button>

        <div className="pointer-events-auto flex items-center gap-3">
          <span className="font-mono text-xs text-white/45">
            {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
          </span>
          <div className="flex items-center gap-1.5">
            <NavButton disabled={index === 0} onClick={() => go(index - 1)} dir="prev" />
            <NavButton disabled={index === count - 1} onClick={() => go(index + 1)} dir="next" />
          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div className="pointer-events-none absolute inset-x-0 bottom-16 z-20 flex justify-center gap-1.5 export-hide">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => go(i)}
            className="pointer-events-auto h-1.5 rounded-full transition-all"
            style={{
              width: i === index ? 22 : 6,
              background:
                i === index ? 'var(--color-neon-cyan)' : 'rgba(255,255,255,0.25)',
            }}
            aria-label={s.label}
          />
        ))}
      </div>

      {/* Overview map */}
      <AnimatePresence>
        {showMap && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-40 flex items-center justify-center bg-black/80 backdrop-blur-md"
            onClick={() => setShowMap(false)}
          >
            <motion.div
              initial={{ scale: 0.96, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 10 }}
              className="max-h-[80vh] w-full max-w-4xl overflow-y-auto p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="mb-4 font-display text-xl font-semibold text-white/80">
                Jump to a slide
              </h3>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {slides.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      go(i)
                      setShowMap(false)
                    }}
                    className={`rounded-xl border p-4 text-left transition ${
                      i === index
                        ? 'border-cyan-400/60 bg-cyan-400/10'
                        : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.07]'
                    }`}
                  >
                    <div className="font-mono text-xs text-white/40">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="mt-1 font-display text-sm font-semibold text-white">
                      {s.label}
                    </div>
                  </button>
                ))}
              </div>
              <p className="mt-5 text-center font-mono text-xs text-white/40">
                ← → or Space to move · G or Esc for this menu · Home/End to jump
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </MotionConfig>
  )
}

function NavButton({
  onClick,
  disabled,
  dir,
}: {
  onClick: () => void
  disabled: boolean
  dir: 'prev' | 'next'
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="pointer-events-auto grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-black/40 text-white/80 backdrop-blur transition hover:bg-black/60 disabled:cursor-not-allowed disabled:opacity-30"
      aria-label={dir === 'next' ? 'Next slide' : 'Previous slide'}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d={dir === 'next' ? 'M9 6l6 6-6 6' : 'M15 6l-6 6 6 6'}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
