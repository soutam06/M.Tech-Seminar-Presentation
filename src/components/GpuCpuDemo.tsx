import { useEffect, useRef, useState } from 'react'

const GRID = 12
const TOTAL = GRID * GRID
const CPU_CORES = 4
const GPU_CORES = 48
const CELL = 26
const CPU_TINT = 'var(--color-teal)'
const GPU_TINT = 'var(--color-rose)'

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

  const tint = mode === 'gpu' ? GPU_TINT : CPU_TINT
  const done = Boolean(result.cpu && result.gpu)

  return (
    <div className="flex h-full min-h-0 w-full flex-col items-center justify-center gap-5">
      <div
        className="grid shrink-0 rounded-xl border border-ink/12 bg-panel p-3"
        style={{
          gridTemplateColumns: `repeat(${GRID}, ${CELL}px)`,
          gap: 3,
        }}
      >
        {Array.from({ length: TOTAL }, (_, i) => {
          const on = i < filled
          return (
            <div
              key={i}
              style={{
                width: CELL,
                height: CELL,
                borderRadius: 3,
                backgroundColor: on ? tint : 'rgba(21,32,43,0.08)',
              }}
            />
          )
        })}
      </div>

      <div className="flex shrink-0 items-center gap-10 font-mono text-[24px]">
        <div className="text-center">
          <div className="text-muted">shaded</div>
          <div className="text-[42px] font-bold leading-none text-ink">
            {filled}/{TOTAL}
          </div>
        </div>
        <div className="text-center">
          <div className="text-muted">time</div>
          <div className="text-[42px] font-bold leading-none" style={{ color: tint }}>
            {(elapsed / 1000).toFixed(2)}s
          </div>
        </div>
      </div>

      <div className="flex shrink-0 items-center justify-center gap-3">
        <button
          onClick={() => run('cpu')}
          disabled={mode !== 'idle'}
          className="rounded-xl border px-5 py-3 text-[26px] font-semibold disabled:cursor-not-allowed disabled:opacity-40"
          style={{
            color: 'var(--color-teal)',
            borderColor: 'color-mix(in srgb, var(--color-teal) 50%, transparent)',
            background: 'color-mix(in srgb, var(--color-teal) 14%, transparent)',
          }}
        >
          CPU · {CPU_CORES} cores
        </button>
        <button
          onClick={() => run('gpu')}
          disabled={mode !== 'idle'}
          className="rounded-xl border px-5 py-3 text-[26px] font-semibold disabled:cursor-not-allowed disabled:opacity-40"
          style={{
            color: 'var(--color-rose)',
            borderColor: 'color-mix(in srgb, var(--color-rose) 50%, transparent)',
            background: 'color-mix(in srgb, var(--color-rose) 14%, transparent)',
          }}
        >
          GPU · {GPU_CORES} cores
        </button>
      </div>

      <div className="flex h-[108px] w-full max-w-[560px] shrink-0 items-center justify-center">
        <div
          className={`rounded-xl border px-4 py-2 text-center text-[24px] leading-snug ${
            done
              ? 'border-ink/15 bg-white text-ink'
              : 'invisible border-transparent'
          }`}
        >
          Same frame — GPU finished{' '}
          <span className="font-bold" style={{ color: 'var(--color-rose)' }}>
            {done ? (result.cpu! / result.gpu!).toFixed(1) : '0.0'}× faster
          </span>{' '}
          by colouring dots at the same time.
        </div>
      </div>
    </div>
  )
}
