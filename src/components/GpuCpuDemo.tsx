import { useEffect, useRef, useState } from 'react'

const GRID = 12
const TOTAL = GRID * GRID
const CPU_CORES = 4
const GPU_CORES = 48

type Mode = 'idle' | 'cpu' | 'gpu'

export function GpuCpuDemo() {
  const [mode, setMode] = useState<Mode>('idle')
  const [filled, setFilled] = useState(0)
  const [elapsed, setElapsed] = useState(0)
  const [result, setResult] = useState<{ cpu?: number; gpu?: number }>({})
  const startRef = useRef(0)
  const rafRef = useRef(0)
  const timerRef = useRef<number | null>(null)

  const run = (m: 'cpu' | 'gpu') => {
    window.clearTimeout(timerRef.current ?? undefined)
    cancelAnimationFrame(rafRef.current)
    setMode(m)
    setFilled(0)
    setElapsed(0)
    startRef.current = performance.now()

    const perTick = m === 'cpu' ? CPU_CORES : GPU_CORES
    const tickMs = m === 'cpu' ? 90 : 55
    let next = 0

    const step = () => {
      next = Math.min(TOTAL, next + perTick)
      setFilled(next)
      if (next >= TOTAL) {
        window.clearTimeout(timerRef.current ?? undefined)
        cancelAnimationFrame(rafRef.current)
        const total = performance.now() - startRef.current
        setElapsed(total)
        setResult((r) => ({ ...r, [m]: total }))
        setMode('idle')
        return
      }
      timerRef.current = window.setTimeout(step, tickMs)
    }
    step()

    const tick = () => {
      setElapsed(performance.now() - startRef.current)
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
  }

  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafRef.current)
      window.clearTimeout(timerRef.current ?? undefined)
    }
  }, [])

  const tint = mode === 'gpu' ? 'var(--color-neon-magenta)' : 'var(--color-neon-cyan)'

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="relative grid gap-1 rounded-xl border border-white/10 bg-black/40 p-3"
        style={{ gridTemplateColumns: `repeat(${GRID}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: TOTAL }, (_, i) => {
          const on = i < filled
          return (
            <div
              key={i}
              className="h-5 w-5 rounded-[3px] sm:h-6 sm:w-6"
              style={{
                backgroundColor: on ? tint : 'rgba(255,255,255,0.08)',
                boxShadow: on ? `0 0 8px ${tint}` : undefined,
              }}
            />
          )
        })}
      </div>

      <div className="flex items-center gap-10 font-mono text-[clamp(1.2rem,2vw,1.7rem)]">
        <div className="text-center">
          <div className="text-white/60">shaded</div>
          <div className="text-[clamp(1.6rem,2.8vw,2.4rem)] font-bold text-white">
            {filled}/{TOTAL}
          </div>
        </div>
        <div className="text-center">
          <div className="text-white/60">time</div>
          <div className="text-[clamp(1.6rem,2.8vw,2.4rem)] font-bold" style={{ color: tint }}>
            {(elapsed / 1000).toFixed(2)}s
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => run('cpu')}
          disabled={mode !== 'idle'}
          className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-6 py-3 text-[clamp(1.2rem,2vw,1.6rem)] font-semibold text-cyan-200 hover:bg-cyan-400/20 disabled:cursor-not-allowed disabled:opacity-40"
        >
          CPU · {CPU_CORES} cores
        </button>
        <button
          onClick={() => run('gpu')}
          disabled={mode !== 'idle'}
          className="rounded-xl border border-fuchsia-400/40 bg-fuchsia-400/10 px-6 py-3 text-[clamp(1.2rem,2vw,1.6rem)] font-semibold text-fuchsia-200 hover:bg-fuchsia-400/20 disabled:cursor-not-allowed disabled:opacity-40"
        >
          GPU · {GPU_CORES} cores
        </button>
      </div>

      {result.cpu && result.gpu && (
        <div className="deck-p rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-center">
          Same frame — GPU finished{' '}
          <span className="font-bold text-fuchsia-300">
            {(result.cpu / result.gpu).toFixed(1)}× faster
          </span>{' '}
          by colouring dots at the same time.
        </div>
      )}
    </div>
  )
}
