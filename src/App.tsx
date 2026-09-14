import { useCallback, useEffect, useRef, useState } from 'react'
import { slides } from './slides'

const SLIDE_W = 1920
const SLIDE_H = 1200

function readExportMode() {
  if (typeof window === 'undefined') return { exportMode: false, start: 0 }
  const params = new URLSearchParams(window.location.search)
  const raw = Number(params.get('slide') ?? '0')
  const start = Number.isFinite(raw) ? raw : 0
  return { exportMode: params.has('export'), start }
}

function useFitScale() {
  const [scale, setScale] = useState(1)
  useEffect(() => {
    const fit = () => {
      setScale(Math.min(window.innerWidth / SLIDE_W, window.innerHeight / SLIDE_H))
    }
    fit()
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [])
  return scale
}

export default function App() {
  const boot = readExportMode()
  const [index, setIndex] = useState(() =>
    Math.max(0, Math.min(slides.length - 1, boot.start)),
  )
  const [showMap, setShowMap] = useState(false)
  const exportMode = boot.exportMode
  const count = slides.length
  const scale = useFitScale()

  const indexRef = useRef(index)
  indexRef.current = index

  const go = useCallback(
    (next: number) => {
      setIndex(() => Math.max(0, Math.min(count - 1, next)))
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
    <div
      className={`grid h-screen w-screen place-items-center overflow-hidden bg-black ${
        exportMode ? 'export-mode' : ''
      }`}
    >
      <div
        className="relative overflow-hidden bg-[color:var(--color-ink)] text-white"
        style={{
          width: SLIDE_W,
          height: SLIDE_H,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
        }}
      >
        <div className="absolute inset-0">{current.render()}</div>

        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-1.5 bg-white/5 export-hide">
          <div
            className="h-full"
            style={{
              width: `${((index + 1) / count) * 100}%`,
              background: 'var(--color-accent)',
            }}
          />
        </div>

        <div className="absolute inset-x-0 bottom-0 z-30 flex items-center justify-between px-10 pb-6 export-hide">
          <button
            onClick={() => setShowMap((s) => !s)}
            className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-4 py-2 font-mono text-sm text-white/70 hover:bg-black/70"
          >
            {slides[index].label}
          </button>
          <div className="pointer-events-auto flex items-center gap-3">
            <span className="font-mono text-sm text-white/45">
              {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
            </span>
            <NavButton disabled={index === 0} onClick={() => go(index - 1)} dir="prev" />
            <NavButton disabled={index === count - 1} onClick={() => go(index + 1)} dir="next" />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-16 z-20 flex justify-center gap-1.5 export-hide">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => go(i)}
              className="pointer-events-auto h-1.5 rounded-full"
              style={{
                width: i === index ? 22 : 6,
                background: i === index ? 'var(--color-accent)' : 'rgba(255,255,255,0.25)',
              }}
              aria-label={s.label}
            />
          ))}
        </div>

        {showMap && (
          <div
            className="absolute inset-0 z-40 flex items-center justify-center bg-black/80"
            onClick={() => setShowMap(false)}
          >
            <div
              className="max-h-[860px] w-[1100px] overflow-y-auto p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="mb-4 font-display text-2xl font-semibold text-white/80">
                Jump to a slide
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {slides.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      go(i)
                      setShowMap(false)
                    }}
                    className={`rounded-xl border p-4 text-left ${
                      i === index
                        ? 'border-[color:color-mix(in_srgb,var(--color-accent)_55%,transparent)] bg-[color:color-mix(in_srgb,var(--color-accent)_10%,transparent)]'
                        : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.07]'
                    }`}
                  >
                    <div className="font-mono text-sm text-white/40">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="mt-1 font-display text-lg font-semibold text-white">
                      {s.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
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
      className="pointer-events-auto grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-black/50 text-white/80 hover:bg-black/70 disabled:cursor-not-allowed disabled:opacity-30"
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
