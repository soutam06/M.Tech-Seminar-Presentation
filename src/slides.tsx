import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { SlideShell } from './components/SlideShell'
import { Card, Chip, GradientText, Reveal, Stat } from './components/primitives'
import { GpuCpuDemo } from './components/GpuCpuDemo'

export type Slide = {
  id: string
  label: string
  hue: 'cyan' | 'magenta' | 'violet' | 'lime'
  render: () => ReactNode
}

const TINT = {
  amber: '#fbbf24',
  cyan: '#22d3ee',
  violet: '#8b5cf6',
  magenta: '#e94aff',
  lime: '#a3e635',
}

function IconChip({ children }: { children: ReactNode }) {
  return (
    <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-lg">
      {children}
    </span>
  )
}

export const slides: Slide[] = [
  // 1 — TITLE
  {
    id: 'title',
    label: 'Title',
    hue: 'magenta',
    render: () => (
      <SlideShell hue="magenta" center>
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Chip>⚙️ A Science &amp; Engineering Talk</Chip>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl"
          >
            The Engineering
            <br />
            of <GradientText>Play</GradientText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-2xl text-lg text-white/70 md:text-2xl"
          >
            How the gaming industry evolved — and where it's headed — told through the
            engineering that made it possible.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-3 font-mono text-sm text-white/50"
          >
            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">
              Pixels → Polygons → AI → Immersion
            </span>
            <span className="hidden md:inline">press → or Space to begin</span>
          </motion.div>
        </div>
      </SlideShell>
    ),
  },

  // 2 — HOOK
  {
    id: 'hook',
    label: 'The Hook',
    hue: 'cyan',
    render: () => (
      <SlideShell
        hue="cyan"
        kicker="Let's set the stakes"
        title={
          <>
            Gaming is the <GradientText>biggest</GradientText> entertainment
            <br /> industry on Earth.
          </>
        }
        subtitle="Bigger than global cinema and recorded music — combined. But it isn't really an art industry. It's an engineering one."
      >
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Card delay={0.1}>
            <Stat value="~$200B" label="Annual revenue" tint={TINT.cyan} />
          </Card>
          <Card delay={0.18}>
            <Stat value="3.3B+" label="Players worldwide" tint={TINT.magenta} />
          </Card>
          <Card delay={0.26}>
            <Stat value="1 in 3" label="People on the planet play" tint={TINT.violet} />
          </Card>
          <Card delay={0.34}>
            <Stat value="60–240" label="Full frames rendered / second" tint={TINT.lime} />
          </Card>
        </div>
        <Reveal delay={0.5} className="mt-6">
          <p className="text-white/60 md:text-lg">
            Every second, your machine solves geometry, physics and lighting for millions of
            points — and paints a new picture before you can blink. That's the story we're
            following tonight.
          </p>
        </Reveal>
      </SlideShell>
    ),
  },

  // 3 — TIMELINE OVERVIEW
  {
    id: 'timeline',
    label: 'The Map',
    hue: 'violet',
    render: () => {
      const eras = [
        { y: '1958–85', t: 'The Spark', d: 'Transistors & arcades', c: TINT.amber },
        { y: '1994–05', t: 'The 3rd Dimension', d: 'Polygons & the GPU', c: TINT.cyan },
        { y: '2004–15', t: 'Connected Worlds', d: 'Netcode & physics', c: TINT.violet },
        { y: '2015–now', t: 'Everywhere', d: 'Mobile, cloud, ray tracing', c: TINT.magenta },
        { y: 'Next', t: 'Generated & Felt', d: 'AI worlds & immersion', c: TINT.lime },
      ]
      return (
        <SlideShell
          hue="violet"
          kicker="The journey in one view"
          title="Five leaps, one throughline"
          subtitle="Each era was unlocked by an engineering breakthrough. Here's the map for tonight."
        >
          <div className="relative mt-2">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-amber-400/40 via-violet-400/40 to-lime-400/40 md:block" />
            <div className="grid gap-4 md:grid-cols-5">
              {eras.map((e, i) => (
                <motion.div
                  key={e.t}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.1 }}
                  className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <span
                      className="grid h-3 w-3 place-items-center rounded-full"
                      style={{ background: e.c, boxShadow: `0 0 12px ${e.c}` }}
                    />
                    <span className="font-mono text-xs text-white/50">{e.y}</span>
                  </div>
                  <div className="font-display text-lg font-semibold" style={{ color: e.c }}>
                    {e.t}
                  </div>
                  <div className="mt-1 text-sm text-white/55">{e.d}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </SlideShell>
      )
    },
  },

  // 4 — ERA 1
  {
    id: 'era-spark',
    label: 'Era: The Spark',
    hue: 'magenta',
    render: () => (
      <SlideShell
        hue="magenta"
        kicker="Era 1"
        era="1958 – 1985"
        eraTint={TINT.amber}
        title={<>The Spark: making a screen <GradientText from={TINT.amber} to={TINT.magenta}>respond</GradientText></>}
        subtitle="Before graphics, the challenge was simply: can a machine react to a human in real time?"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card delay={0.1}>
            <IconChip>🕹️</IconChip>
            <h3 className="mt-3 font-display text-lg font-semibold text-white">The games</h3>
            <p className="mt-1 text-sm text-white/60">
              <em>Tennis for Two</em> (1958) on an oscilloscope, <em>Pong</em> (1972),
              then <em>Space Invaders</em> &amp; the arcade boom.
            </p>
          </Card>
          <Card delay={0.2}>
            <IconChip>🔌</IconChip>
            <h3 className="mt-3 font-display text-lg font-semibold text-white">The engineering</h3>
            <p className="mt-1 text-sm text-white/60">
              Discrete transistor logic and custom circuits drove electron beams across a
              CRT. No CPU at first — the <em>wiring itself</em> was the game.
            </p>
          </Card>
          <Card delay={0.3}>
            <IconChip>💡</IconChip>
            <h3 className="mt-3 font-display text-lg font-semibold text-white">The breakthrough</h3>
            <p className="mt-1 text-sm text-white/60">
              Cheap microprocessors (Intel 8080, MOS 6502) turned a game into
              <em> software</em> — the same chip could play anything.
            </p>
          </Card>
        </div>
        <Reveal delay={0.5} className="mt-6">
          <div className="rounded-xl border border-amber-400/25 bg-amber-400/5 p-4 text-white/70">
            <span className="font-semibold text-amber-300">Engineer's takeaway:</span> once
            games became software on general chips, progress stopped being about circuits and
            started being about <span className="text-white">compute power</span>.
          </div>
        </Reveal>
      </SlideShell>
    ),
  },

  // 5 — ERA 2
  {
    id: 'era-3d',
    label: 'Era: 3D',
    hue: 'cyan',
    render: () => (
      <SlideShell
        hue="cyan"
        kicker="Era 2"
        era="1994 – 2005"
        eraTint={TINT.cyan}
        title={<>The third dimension &amp; the birth of the <GradientText>GPU</GradientText></>}
        subtitle="Turning flat sprites into worlds meant doing enormous amounts of the same math — fast."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Card delay={0.1}>
            <h3 className="font-display text-lg font-semibold text-white">The problem</h3>
            <p className="mt-2 text-sm text-white/60">
              A 3D world is millions of triangles. Every frame you must rotate, project and
              light each vertex, then colour every pixel. CPUs did this one step at a time —
              far too slow for 30 frames a second.
            </p>
          </Card>
          <Card delay={0.2}>
            <h3 className="font-display text-lg font-semibold text-white">The solution</h3>
            <p className="mt-2 text-sm text-white/60">
              A dedicated <span className="text-cyan-300">Graphics Processing Unit</span>:
              a chip with hundreds of small cores that transform many vertices and pixels
              <em> simultaneously</em>. NVIDIA's 1999 GeForce 256 was billed as the first.
            </p>
          </Card>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs">
          {['PlayStation', 'Nintendo 64', 'Quake / OpenGL', 'GeForce 256', 'Hardware T&L'].map(
            (t) => (
              <span key={t} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-white/60">
                {t}
              </span>
            ),
          )}
        </div>
        <Reveal delay={0.5} className="mt-5">
          <p className="text-white/60">
            This single idea — <span className="text-white">do the same operation on thousands
            of data points at once</span> — is the most important thing in this whole talk.
            Let's <span className="text-cyan-300">feel</span> why it matters. →
          </p>
        </Reveal>
      </SlideShell>
    ),
  },

  // 6 — INTERACTIVE DEMO
  {
    id: 'demo',
    label: 'Demo: CPU vs GPU',
    hue: 'magenta',
    render: () => (
      <SlideShell
        hue="magenta"
        kicker="Interactive · click the buttons"
        title={<>Why a GPU? <GradientText>Parallelism.</GradientText></>}
        subtitle="Both chips shade the same 144-pixel frame. The CPU has a few fast cores; the GPU has many. Watch the clock."
      >
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <GpuCpuDemo />
        </div>
        <Reveal delay={0.4} className="mt-5">
          <p className="text-center text-sm text-white/55">
            A real GPU has <span className="text-white">thousands</span> of cores. The same
            trick that renders a game also multiplies the giant matrices behind neural
            networks — remember that for later.
          </p>
        </Reveal>
      </SlideShell>
    ),
  },

  // 7 — ERA 3
  {
    id: 'era-online',
    label: 'Era: Online',
    hue: 'violet',
    render: () => (
      <SlideShell
        hue="violet"
        kicker="Era 3"
        era="2004 – 2015"
        eraTint={TINT.violet}
        title={<>Connected worlds: <GradientText from={TINT.violet} to={TINT.magenta}>netcode</GradientText> &amp; physics</>}
        subtitle="Broadband turned games into shared, living places — and created brutal new engineering problems."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card delay={0.1}>
            <IconChip>🌐</IconChip>
            <h3 className="mt-3 font-display text-base font-semibold text-white">Fighting latency</h3>
            <p className="mt-1 text-sm text-white/60">
              Light takes ~40ms across the world. Games <em>predict</em> your moves and
              rewind time on the server (client-side prediction &amp; lag compensation) to
              feel instant.
            </p>
          </Card>
          <Card delay={0.2}>
            <IconChip>🧲</IconChip>
            <h3 className="mt-3 font-display text-base font-semibold text-white">Real physics</h3>
            <p className="mt-1 text-sm text-white/60">
              Physics engines solve equations of motion, collisions and ragdolls 60×/sec —
              the same numerical integration you meet in engineering simulations.
            </p>
          </Card>
          <Card delay={0.3}>
            <IconChip>🏙️</IconChip>
            <h3 className="mt-3 font-display text-base font-semibold text-white">Massive worlds</h3>
            <p className="mt-1 text-sm text-white/60">
              MMOs like <em>World of Warcraft</em> synced tens of thousands of players across
              distributed server farms — early cloud-scale engineering.
            </p>
          </Card>
        </div>
        <Reveal delay={0.5} className="mt-6">
          <div className="rounded-xl border border-violet-400/25 bg-violet-400/5 p-4 text-white/70">
            <span className="font-semibold text-violet-300">The shift:</span> games stopped
            being a program on your machine and became <span className="text-white">a
            real-time distributed system</span> serving millions at once.
          </div>
        </Reveal>
      </SlideShell>
    ),
  },

  // 8 — ERA 4
  {
    id: 'era-everywhere',
    label: 'Era: Everywhere',
    hue: 'cyan',
    render: () => (
      <SlideShell
        hue="cyan"
        kicker="Era 4"
        era="2015 – Now"
        eraTint={TINT.magenta}
        title={<>Games go <GradientText>everywhere</GradientText></>}
        subtitle="From a device in every pocket to photorealistic light simulated in real time."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Card delay={0.1}>
            <h3 className="font-display text-lg font-semibold text-white">📱 In every pocket</h3>
            <p className="mt-2 text-sm text-white/60">
              Mobile is now the largest slice of gaming. A phone SoC packs a capable GPU,
              putting a console-class renderer in billions of hands.
            </p>
          </Card>
          <Card delay={0.18}>
            <h3 className="font-display text-lg font-semibold text-white">☁️ Cloud gaming</h3>
            <p className="mt-2 text-sm text-white/60">
              The game runs in a data-centre GPU and streams video to you — like Netflix, but
              it must round-trip your input in milliseconds. Pure latency engineering.
            </p>
          </Card>
          <Card delay={0.26}>
            <h3 className="font-display text-lg font-semibold text-white">💡 Ray tracing</h3>
            <p className="mt-2 text-sm text-white/60">
              Dedicated RT cores trace rays of light through a scene, simulating real
              reflections and shadows — physics that used to take hours per movie frame, now
              live.
            </p>
          </Card>
          <Card delay={0.34}>
            <h3 className="font-display text-lg font-semibold text-white">🏟️ Esports</h3>
            <p className="mt-2 text-sm text-white/60">
              Competitive gaming fills stadiums, demanding rock-solid servers, anti-cheat and
              sub-frame precision at global scale.
            </p>
          </Card>
        </div>
      </SlideShell>
    ),
  },

  // 9 — THE TWIST
  {
    id: 'twist',
    label: 'The Twist',
    hue: 'lime',
    render: () => (
      <SlideShell
        hue="lime"
        kicker="Plot twist"
        title={<>Gaming tech quietly <GradientText from={TINT.lime} to={TINT.cyan}>rebuilt the world</GradientText></>}
        subtitle="The tools built to render fun turned out to power some of today's most serious technology."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card delay={0.1}>
            <IconChip>🧠</IconChip>
            <h3 className="mt-3 font-display text-base font-semibold text-white">GPUs → the AI boom</h3>
            <p className="mt-1 text-sm text-white/60">
              The parallel math that shades pixels is exactly what trains neural networks.
              Every large AI model — including chatbots — runs on gaming-born GPUs.
            </p>
          </Card>
          <Card delay={0.2}>
            <IconChip>🎬</IconChip>
            <h3 className="mt-3 font-display text-base font-semibold text-white">Engines → film &amp; design</h3>
            <p className="mt-1 text-sm text-white/60">
              Game engines (Unreal, Unity) now render movie backdrops, car showrooms and
              architecture — real-time visualisation for every industry.
            </p>
          </Card>
          <Card delay={0.3}>
            <IconChip>🤖</IconChip>
            <h3 className="mt-3 font-display text-base font-semibold text-white">Physics → digital twins</h3>
            <p className="mt-1 text-sm text-white/60">
              Robots and self-driving cars are trained inside game-like simulations, and
              factories run virtual "digital twins" to optimise before building.
            </p>
          </Card>
        </div>
        <Reveal delay={0.5} className="mt-6">
          <p className="text-white/65 md:text-lg">
            <span className="text-lime-300">The point for engineers:</span> chasing a fun,
            demanding problem (real-time graphics) produced general-purpose tools that reshaped
            science, film, AI and manufacturing.
          </p>
        </Reveal>
      </SlideShell>
    ),
  },

  // 10 — FUTURE 1
  {
    id: 'future-ai',
    label: 'Future: AI Worlds',
    hue: 'magenta',
    render: () => (
      <SlideShell
        hue="magenta"
        kicker="Where it's heading · Part 1"
        title={<>Worlds that are <GradientText>generated</GradientText>, not just drawn</>}
        subtitle="The next leap moves work from artists' hands to learned models — and from rendering to imagining."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Card delay={0.1}>
            <h3 className="font-display text-lg font-semibold text-white">🪄 Neural rendering</h3>
            <p className="mt-2 text-sm text-white/60">
              AI already invents most pixels: techniques like DLSS render a few real pixels and
              let a network <em>upscale &amp; fill in</em> the rest — more detail for less
              compute.
            </p>
          </Card>
          <Card delay={0.2}>
            <h3 className="font-display text-lg font-semibold text-white">🌍 Generative worlds</h3>
            <p className="mt-2 text-sm text-white/60">
              Research models can now dream up playable game frames in real time. Imagine
              levels, characters and quests generated on the fly, unique to every player.
            </p>
          </Card>
          <Card delay={0.28}>
            <h3 className="font-display text-lg font-semibold text-white">🗣️ Living NPCs</h3>
            <p className="mt-2 text-sm text-white/60">
              Language models give non-player characters real conversations and goals — worlds
              that respond to <em>anything</em> you say, not a fixed script.
            </p>
          </Card>
          <Card delay={0.36}>
            <h3 className="font-display text-lg font-semibold text-white">♾️ Procedural x AI</h3>
            <p className="mt-2 text-sm text-white/60">
              Classic algorithms already built galaxies from a seed number; pairing them with
              AI means endless worlds with genuine surprise and craft.
            </p>
          </Card>
        </div>
      </SlideShell>
    ),
  },

  // 11 — FUTURE 2
  {
    id: 'future-immersion',
    label: 'Future: Immersion',
    hue: 'violet',
    render: () => (
      <SlideShell
        hue="violet"
        kicker="Where it's heading · Part 2"
        title={<>From a screen you watch to a world you <GradientText from={TINT.violet} to={TINT.cyan}>inhabit</GradientText></>}
        subtitle="The frontier isn't just better images — it's collapsing the distance between you and the world."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Card delay={0.1}>
            <h3 className="font-display text-lg font-semibold text-white">🥽 VR / AR &amp; spatial</h3>
            <p className="mt-2 text-sm text-white/60">
              Headsets must render two 4K images at 90+ fps with under ~20ms of motion-to-photon
              lag — miss it and you feel sick. It's one of the hardest real-time targets in
              engineering.
            </p>
          </Card>
          <Card delay={0.2}>
            <h3 className="font-display text-lg font-semibold text-white">✋ Haptics &amp; the senses</h3>
            <p className="mt-2 text-sm text-white/60">
              Precise motors, resistive triggers and suits let you <em>feel</em> texture,
              weight and recoil — engineering presence, not just pictures.
            </p>
          </Card>
          <Card delay={0.28}>
            <h3 className="font-display text-lg font-semibold text-white">☁️ Zero-hardware play</h3>
            <p className="mt-2 text-sm text-white/60">
              As networks improve (5G/edge), heavy rendering moves to the cloud — a photoreal
              world streamed to thin, cheap glasses.
            </p>
          </Card>
          <Card delay={0.36}>
            <h3 className="font-display text-lg font-semibold text-white">🧠 Neural interfaces</h3>
            <p className="mt-2 text-sm text-white/60">
              Early brain–computer interfaces already let people move cursors by thought — the
              long-horizon frontier of how we might one day "play".
            </p>
          </Card>
        </div>
      </SlideShell>
    ),
  },

  // 12 — WHY IT MATTERS
  {
    id: 'throughline',
    label: 'The Throughline',
    hue: 'cyan',
    render: () => (
      <SlideShell
        hue="cyan"
        kicker="The big idea"
        title={<>One engineering story, on <GradientText>repeat</GradientText></>}
        center
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { n: '01', t: 'A demanding dream', d: 'Someone wants an impossibly rich, instant, interactive world.', c: TINT.cyan },
            { n: '02', t: 'A hardware/algorithm leap', d: 'Engineers answer with new chips or clever math — the GPU, netcode, RT cores, neural rendering.', c: TINT.violet },
            { n: '03', t: 'It escapes gaming', d: 'That breakthrough becomes a general tool — powering AI, film, robotics and science.', c: TINT.magenta },
          ].map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="font-mono text-3xl font-bold" style={{ color: s.c }}>
                {s.n}
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold text-white">{s.t}</h3>
              <p className="mt-2 text-sm text-white/60">{s.d}</p>
            </motion.div>
          ))}
        </div>
        <Reveal delay={0.6} className="mt-8">
          <p className="max-w-3xl text-lg text-white/75 md:text-2xl">
            Games are where we practice building{' '}
            <GradientText>real-time worlds</GradientText> — and that practice keeps handing the
            rest of engineering its next set of tools.
          </p>
        </Reveal>
      </SlideShell>
    ),
  },

  // 13 — CLOSE
  {
    id: 'thanks',
    label: 'Thank you',
    hue: 'magenta',
    render: () => (
      <SlideShell hue="magenta" center>
        <div className="flex flex-col items-start">
          <Chip>🎮 The End · Questions welcome</Chip>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl"
          >
            Thank you.
            <br />
            <GradientText>Let's play with ideas.</GradientText>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-2xl text-lg text-white/65"
          >
            Pixels → Polygons → Parallel compute → AI → Immersion. From <em>Pong</em> on an
            oscilloscope to worlds we may one day step inside — every leap was an engineering
            leap.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-3 font-mono text-sm text-white/55"
          >
            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">
              Great discussion Q: “Should game engines be the default tool for all simulation?”
            </span>
          </motion.div>
        </div>
      </SlideShell>
    ),
  },
]
