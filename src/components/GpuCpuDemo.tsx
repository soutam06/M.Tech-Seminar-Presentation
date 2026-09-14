import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const GRID = 12 // 12 x 12 = 144 pixels to shade
const TOTAL = GRID * GRID
const CPU_CORES = 4
const GPU_CORES = 48

type Mode = 'idle' | 'cpu' | 'gpu'

/**
 * Interactive: "render" a frame of 144 pixels.
 * The CPU shades a few pixels per tick (sequential-ish); the GPU floods
 * many at once (massively parallel). A live timer shows why GPUs win at graphics.
 */
export function GpuCpuDemo() {
  const [mode, setMode] = useState<Mode>('idle')
  const [done, setDone] = useState<Set<number>>(new Set())
  const [elapsed, setElapsed] = useState(0)
  const [result, setResult] = useState<{ cpu?: number; gpu?: number }>({})
  const startRef = useRef(0)
  const rafRef = useRef(0)
  const timerRef = useRef<number | null>(null)

  const run = (m: 'cpu' | 'gpu') => {
    window.clearTimeout(timerRef.current ?? undefined)
    cancelAnimationFrame(rafRef.current)
    setMode(m)
    setDone(new Set())
    setElapsed(0)
    startRef.current = performance.now()

    const perTick = m === 'cpu' ? CPU_CORES : GPU_CORES
    const tickMs = m === 'cpu' ? 90 : 55
    let filled = 0

    const order = [...Array(TOTAL).keys()]
    const step = () => {
      filled = Math.min(TOTAL, filled + perTick)
      setDone(new Set(order.slice(0, filled)))
      if (filled >= TOTAL) {
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
        className="relative grid gap-[3px] rounded-xl border border-white/10 bg-black/40 p-3"
        style={{ gridTemplateColumns: `repeat(${GRID}, minmax(0, 1fr))` }}
      >
        {[...Array(TOTAL)].map((_, i) => {
          const on = done.has(i)
          return (
            <motion.div
              key={i}
              className="h-4 w-4 rounded-[3px] md:h-5 md:w-5"
              initial={false}
              animate={{
                backgroundColor: on ? tint : 'rgba(255,255,255,0.06)',
                boxShadow: on ? `0 0 10px ${tint}` : '0 0 0 rgba(0,0,0,0)',
                scale: on ? 1 : 0.9,
              }}
              transition={{ duration: 0.18 }}
            />
          )
        })}
      </div>

      <div className="flex items-center gap-8 font-mono text-sm">
        <div className="text-center">
          <div className="text-white/50">shaded</div>
          <div className="text-lg font-bold text-white">
            {done.size}/{TOTAL}
          </div>
        </div>
        <div className="text-center">
          <div className="text-white/50">time</div>
          <div className="text-lg font-bold" style={{ color: tint }}>
            {(elapsed / 1000).toFixed(2)}s
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => run('cpu')}
          disabled={mode !== 'idle'}
          className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-2.5 font-semibold text-cyan-200 transition hover:bg-cyan-400/20 disabled:cursor-not-allowed disabled:opacity-40"
        >
          CPU · {CPU_CORES} cores
        </button>
        <button
          onClick={() => run('gpu')}
          disabled={mode !== 'idle'}
          className="rounded-xl border border-fuchsia-400/40 bg-fuchsia-400/10 px-5 py-2.5 font-semibold text-fuchsia-200 transition hover:bg-fuchsia-400/20 disabled:cursor-not-allowed disabled:opacity-40"
        >
          GPU · {GPU_CORES} cores
        </button>
      </div>

      {result.cpu && result.gpu && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-white/10 bg-white/5 px-5 py-2 text-center text-sm text-white/80"
        >
          Same frame — GPU finished{' '}
          <span className="font-bold text-fuchsia-300">
            {(result.cpu / result.gpu).toFixed(1)}× faster
          </span>{' '}
          by shading pixels in parallel.
        </motion.div>
      )}
    </div>
  )
}
