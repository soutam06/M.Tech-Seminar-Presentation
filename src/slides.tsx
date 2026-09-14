import type { ReactNode } from 'react'
import { SlideShell } from './components/SlideShell'
import { Card, Chip, GradientText, Reveal, Stat } from './components/primitives'
import { GpuCpuDemo } from './components/GpuCpuDemo'
import heroEvolution from './assets/hero-evolution.png'
import arcadeEra from './assets/arcade-era.png'
import gpuChip from './assets/gpu-chip.png'
import futureImmersion from './assets/future-immersion.png'

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

const IMAGE_SOURCE = 'AI-generated for this seminar'

function Figure({
  src,
  alt,
  caption,
  source = IMAGE_SOURCE,
  className = '',
}: {
  src: string
  alt: string
  caption?: string
  source?: string
  className?: string
}) {
  return (
    <figure className={`overflow-hidden rounded-2xl border border-white/10 bg-black/30 ${className}`}>
      <div className="relative h-full w-full">
        <img src={src} alt={alt} loading="eager" className="h-full w-full object-cover" />
        <span className="absolute bottom-1.5 left-1.5 max-w-[94%] rounded bg-black/70 px-2 py-1 font-mono text-[11px] leading-none tracking-wide text-white/90 md:text-xs">
          Source: {source}
        </span>
      </div>
      {caption && (
        <figcaption className="px-3 py-2 text-center font-mono text-[11px] text-white/45">
          {caption}
        </figcaption>
      )}
    </figure>
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
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="flex flex-col items-start">
            <Chip>A science &amp; engineering talk</Chip>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              The Engineering
              <br />
              of <GradientText>Play</GradientText>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/70 lg:text-2xl">
              How games grew up — and where they are going — told through the engineering
              that made each leap possible.
            </p>
            <div className="mt-8 border-l-2 border-fuchsia-400/50 pl-4">
              <div className="font-display text-xl font-semibold text-white lg:text-2xl">
                Soutam Rajbhar
              </div>
              <div className="mt-0.5 text-sm text-white/55 lg:text-base">
                Department of Chemical Engineering
              </div>
              <div className="text-sm text-white/55 lg:text-base">IIT Kharagpur</div>
            </div>
          </div>
          <Figure
            src={heroEvolution}
            alt="The evolution of games: from a Pong CRT and 8-bit sprites, to 3D wireframe characters, to a person in a VR headset before a futuristic world."
            caption="Pong on a TV → 8-bit characters → 3D → stepping into a virtual world"
            className="hidden min-h-[280px] md:block lg:min-h-[420px]"
          />
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
        kicker="Why this matters"
        title={
          <>
            Gaming is the <GradientText>biggest</GradientText> entertainment
            <br /> business on Earth.
          </>
        }
        subtitle="Bigger than movies and music put together. And it isn't really an art industry. It's an engineering one."
      >
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Card delay={0.1}>
            <Stat value="~$200B" label="Money made each year" tint={TINT.cyan} />
          </Card>
          <Card delay={0.18}>
            <Stat value="3.3B+" label="People who play" tint={TINT.magenta} />
          </Card>
          <Card delay={0.26}>
            <Stat value="1 in 3" label="People on the planet play" tint={TINT.violet} />
          </Card>
          <Card delay={0.34}>
            <Stat value="60–240" label="New pictures drawn every second" tint={TINT.lime} />
          </Card>
        </div>
        <Reveal delay={0.5} className="mt-6">
          <p className="text-white/60 md:text-lg">
            Every second, your computer does maths for millions of points — shape, bounce,
            light — and paints a new picture before you can blink. That's the story we're
            following today.
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
        { y: '1958 – 1985', t: 'The Spark', d: 'Simple screens & arcade halls', c: TINT.amber },
        { y: '1994 – 2005', t: 'Going 3D', d: 'Triangles & a new chip: the GPU', c: TINT.cyan },
        { y: '2004 – 2015', t: 'Playing together', d: 'Internet delay & real physics', c: TINT.violet },
        { y: '2015 – now', t: 'Everywhere', d: 'Phones, cloud, real-looking light', c: TINT.magenta },
        { y: 'Next', t: 'Felt & invented', d: 'AI worlds you can step inside', c: TINT.lime },
      ]
      return (
        <SlideShell
          hue="violet"
          kicker="The whole story in one look"
          title="Five big leaps. One story."
          subtitle="Each leap happened because engineers solved a hard problem. Here's the map for today."
        >
          <div className="relative mt-4">
            <div className="absolute left-[8%] right-[8%] top-[11px] hidden h-px bg-gradient-to-r from-amber-400/50 via-violet-400/50 to-lime-400/50 md:block" />
            <div className="grid gap-4 md:grid-cols-5">
              {eras.map((e) => (
                <div
                  key={e.t}
                  className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-5 pt-6"
                >
                  <div className="absolute left-1/2 top-0 z-10 flex -translate-x-1/2 -translate-y-1/2">
                    <span
                      className="h-3.5 w-3.5 rounded-full ring-4 ring-[color:var(--color-ink)]"
                      style={{ background: e.c, boxShadow: `0 0 12px ${e.c}` }}
                    />
                  </div>
                  <div className="font-display text-lg font-semibold" style={{ color: e.c }}>
                    {e.t}
                  </div>
                  <div className="mt-1 text-sm leading-snug text-white/55">{e.d}</div>
                  <div
                    className="mt-4 border-t border-white/10 pt-3 font-mono text-sm font-semibold tracking-wide"
                    style={{ color: e.c }}
                  >
                    {e.y}
                  </div>
                </div>
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
        kicker="Leap 1"
        era="1958 – 1985"
        eraTint={TINT.amber}
        title={
          <>
            The Spark: making a screen <GradientText from={TINT.amber} to={TINT.magenta}>talk back</GradientText>
          </>
        }
        subtitle="Before fancy pictures, the hard question was simple: can a machine react to a person right now?"
      >
        <Figure
          src={arcadeEra}
          alt="A dark 1980s arcade lit by the glow of classic cabinets showing simple pixel sprites."
          className="mb-5 h-40 sm:h-48 lg:h-56"
        />
        <div className="grid gap-4 md:grid-cols-3">
          <Card delay={0.1}>
            <IconChip>🕹️</IconChip>
            <h3 className="mt-3 font-display text-lg font-semibold text-white">The games</h3>
            <p className="mt-1 text-sm text-white/60">
              <em>Tennis for Two</em> (1958) on a lab screen, <em>Pong</em> (1972), then
              <em> Space Invaders</em> and packed arcade halls.
            </p>
          </Card>
          <Card delay={0.2}>
            <IconChip>🔌</IconChip>
            <h3 className="mt-3 font-display text-lg font-semibold text-white">How it was built</h3>
            <p className="mt-1 text-sm text-white/60">
              Early machines were wired by hand. There was often no “brain chip” yet — the
              wiring <em>itself</em> was the game.
            </p>
          </Card>
          <Card delay={0.3}>
            <IconChip>💡</IconChip>
            <h3 className="mt-3 font-display text-lg font-semibold text-white">The big change</h3>
            <p className="mt-1 text-sm text-white/60">
              Cheap computer chips arrived. A game became <em>software</em> — the same machine
              could play many different games.
            </p>
          </Card>
        </div>
        <Reveal delay={0.5} className="mt-6">
          <div className="rounded-xl border border-amber-400/25 bg-amber-400/5 p-4 text-white/70">
            <span className="font-semibold text-amber-300">Takeaway:</span> once games were
            software, progress stopped being about new wires and started being about{' '}
            <span className="text-white">faster computers</span>.
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
        kicker="Leap 2"
        era="1994 – 2005"
        eraTint={TINT.cyan}
        title={
          <>
            Games go 3D — and a new chip is born: the <GradientText>GPU</GradientText>
          </>
        }
        subtitle="To turn flat pictures into worlds, a computer had to do the same maths millions of times — very fast."
      >
        <Figure
          src={gpuChip}
          alt="A glowing GPU graphics chip on a circuit board with many bright cores lit in parallel."
          className="mb-5 h-36 sm:h-44 lg:h-52"
        />
        <div className="grid gap-4 md:grid-cols-2">
          <Card delay={0.1}>
            <h3 className="font-display text-lg font-semibold text-white">The problem</h3>
            <p className="mt-2 text-sm text-white/60">
              A 3D world is made of millions of tiny triangles. Every picture, the computer
              must move them, light them, and colour every dot. A normal chip (the CPU) does
              this one step at a time — too slow for smooth play.
            </p>
          </Card>
          <Card delay={0.2}>
            <h3 className="font-display text-lg font-semibold text-white">The answer</h3>
            <p className="mt-2 text-sm text-white/60">
              A new chip built just for pictures: the{' '}
              <span className="text-cyan-300">Graphics Processing Unit</span>. It has many small
              workers that colour lots of dots <em>at the same time</em>. NVIDIA's 1999
              GeForce 256 was sold as the first of these.
            </p>
          </Card>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs">
          {['PlayStation', 'Nintendo 64', 'Quake', 'GeForce 256'].map((t) => (
            <span
              key={t}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-white/60"
            >
              {t}
            </span>
          ))}
        </div>
        <Reveal delay={0.5} className="mt-5">
          <p className="text-white/60">
            One idea matters more than anything else today:{' '}
            <span className="text-white">do the same small job on thousands of things at once</span>.
            Let's watch it happen. →
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
        kicker="Try it yourself · tap the buttons"
        title={
          <>
            Why a GPU? <GradientText>Many hands at once.</GradientText>
          </>
        }
        subtitle="Both chips colour the same 144-dot picture. The CPU has 4 strong workers. The GPU has 48 smaller ones. Watch the clock."
      >
        <div className="rounded-2xl border border-white/10 bg-black/30 p-4 md:p-5">
          <GpuCpuDemo />
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <Card delay={0.15}>
            <h3 className="font-display text-base font-semibold text-cyan-200">CPU · 4 cores</h3>
            <p className="mt-1 text-sm text-white/60">
              Few workers. Each one is smart and can do many kinds of jobs — like 4 master
              chefs in a kitchen.
            </p>
          </Card>
          <Card delay={0.22}>
            <h3 className="font-display text-base font-semibold text-fuchsia-200">GPU · 48 cores</h3>
            <p className="mt-1 text-sm text-white/60">
              Many workers. Each one is simple and repeats one job — like 48 line cooks all
              chopping vegetables at once.
            </p>
          </Card>
        </div>
        <Reveal delay={0.4} className="mt-4">
          <p className="text-center text-sm text-white/55">
            If we gave the CPU 48 cores, would it become a GPU?{' '}
            <span className="text-white">No.</span> More chefs still aren't a factory line.
            A real GPU has <span className="text-white">thousands</span> of these simple cores.
            That same trick now trains AI.
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
        kicker="Leap 3"
        era="2004 – 2015"
        eraTint={TINT.violet}
        title={
          <>
            Playing together: <GradientText from={TINT.violet} to={TINT.magenta}>delay</GradientText>,
            physics &amp; huge worlds
          </>
        }
        subtitle="Home internet turned games into places we share. That created new headaches for engineers."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card delay={0.1}>
            <IconChip>🌐</IconChip>
            <h3 className="mt-3 font-display text-base font-semibold text-white">Fighting delay</h3>
            <p className="mt-1 text-sm text-white/60">
              A signal can take about 40 milliseconds to cross the world. Games guess your next
              move, then correct it — so play still feels instant.
            </p>
          </Card>
          <Card delay={0.2}>
            <IconChip>🧲</IconChip>
            <h3 className="mt-3 font-display text-base font-semibold text-white">Real physics</h3>
            <p className="mt-1 text-sm text-white/60">
              Games solve bounce, crash, and falling bodies 60 times a second — the same kind of
              maths used in engineering simulations.
            </p>
          </Card>
          <Card delay={0.3}>
            <IconChip>🏙️</IconChip>
            <h3 className="mt-3 font-display text-base font-semibold text-white">Huge worlds</h3>
            <p className="mt-1 text-sm text-white/60">
              Games like <em>World of Warcraft</em> keep tens of thousands of players in sync
              across many computers at once.
            </p>
          </Card>
        </div>
        <Reveal delay={0.5} className="mt-6">
          <div className="rounded-xl border border-violet-400/25 bg-violet-400/5 p-4 text-white/70">
            <span className="font-semibold text-violet-300">The shift:</span> a game stopped
            being “a program on your computer” and became{' '}
            <span className="text-white">a live system serving millions of people at once</span>.
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
        kicker="Leap 4"
        era="2015 – now"
        eraTint={TINT.magenta}
        title={
          <>
            Games go <GradientText>everywhere</GradientText>
          </>
        }
        subtitle="From a phone in every pocket to light that looks almost real."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Card delay={0.1}>
            <h3 className="font-display text-lg font-semibold text-white">📱 In every pocket</h3>
            <p className="mt-2 text-sm text-white/60">
              Most gaming now happens on phones. A modern phone already has a strong picture
              chip — a console in your hand.
            </p>
          </Card>
          <Card delay={0.18}>
            <h3 className="font-display text-lg font-semibold text-white">☁️ Games in the cloud</h3>
            <p className="mt-2 text-sm text-white/60">
              The game can run on a faraway computer and send you video — like Netflix, except
              your button press has to travel there and back in a blink.
            </p>
          </Card>
          <Card delay={0.26}>
            <h3 className="font-display text-lg font-semibold text-white">💡 Tracing light</h3>
            <p className="mt-2 text-sm text-white/60">
              New chips follow rays of light through a scene — real reflections and shadows.
              Movie computers used to spend hours on one frame. Games now do it live.
            </p>
          </Card>
          <Card delay={0.34}>
            <h3 className="font-display text-lg font-semibold text-white">🏟️ Esports</h3>
            <p className="mt-2 text-sm text-white/60">
              Competitive games fill stadiums. That needs rock-solid servers, fair play, and
              timing accurate to a fraction of a picture.
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
        title={
          <>
            Gaming tech quietly <GradientText from={TINT.lime} to={TINT.cyan}>rebuilt the world</GradientText>
          </>
        }
        subtitle="Tools made so we could have fun ended up powering some of today's most serious work."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card delay={0.1}>
            <IconChip>🧠</IconChip>
            <h3 className="mt-3 font-display text-base font-semibold text-white">GPUs → the AI boom</h3>
            <p className="mt-1 text-sm text-white/60">
              The same “many hands” maths that colours pixels is what trains AI. Chatbots and
              image models run on chips that started life in games.
            </p>
          </Card>
          <Card delay={0.2}>
            <IconChip>🎬</IconChip>
            <h3 className="mt-3 font-display text-base font-semibold text-white">Game tools → film &amp; design</h3>
            <p className="mt-1 text-sm text-white/60">
              The same software that builds games now draws movie sets, car showrooms, and
              buildings — live, not overnight.
            </p>
          </Card>
          <Card delay={0.3}>
            <IconChip>🤖</IconChip>
            <h3 className="mt-3 font-display text-base font-semibold text-white">Game physics → factories</h3>
            <p className="mt-1 text-sm text-white/60">
              Robots and self-driving cars practise in game-like worlds. Factories test a
              virtual copy of a plant before they build the real one.
            </p>
          </Card>
        </div>
        <Reveal delay={0.5} className="mt-6">
          <p className="text-white/65 md:text-lg">
            <span className="text-lime-300">The point:</span> chasing a fun, hard problem —
            drawing a world 60 times a second — gave every other field a new set of tools.
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
        title={
          <>
            Worlds that are <GradientText>invented</GradientText>, not just drawn
          </>
        }
        subtitle="The next leap: the computer doesn't only paint the world. It starts to imagine it."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Card delay={0.1}>
            <h3 className="font-display text-lg font-semibold text-white">🪄 AI fills in the picture</h3>
            <p className="mt-2 text-sm text-white/60">
              Games already draw a rough picture, then let AI add the extra detail — more
              sharpness for less work. NVIDIA calls one version of this DLSS.
            </p>
          </Card>
          <Card delay={0.2}>
            <h3 className="font-display text-lg font-semibold text-white">🌍 Worlds made on the spot</h3>
            <p className="mt-2 text-sm text-white/60">
              Research models can now invent playable game pictures in real time. Imagine
              levels, characters, and quests made just for you.
            </p>
          </Card>
          <Card delay={0.28}>
            <h3 className="font-display text-lg font-semibold text-white">🗣️ Characters that talk back</h3>
            <p className="mt-2 text-sm text-white/60">
              Chat-style AI can give game characters real conversations — they reply to what
              you actually say, not a fixed script.
            </p>
          </Card>
          <Card delay={0.36}>
            <h3 className="font-display text-lg font-semibold text-white">♾️ Endless maps + AI</h3>
            <p className="mt-2 text-sm text-white/60">
              Older tricks already built whole galaxies from one seed number. Pair that with
              AI and you get huge worlds that still feel surprising.
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
        title={
          <>
            From watching a screen to a world you <GradientText from={TINT.violet} to={TINT.cyan}>step inside</GradientText>
          </>
        }
        subtitle="The next race isn't only prettier pictures. It's making the world feel close enough to touch."
      >
        <Figure
          src={futureImmersion}
          alt="A person wearing a VR headset reaching toward a floating holographic AI-generated game world."
          className="mb-5 h-36 sm:h-44 lg:h-52"
        />
        <div className="grid gap-4 md:grid-cols-2">
          <Card delay={0.1}>
            <h3 className="font-display text-lg font-semibold text-white">🥽 Headsets &amp; mixed reality</h3>
            <p className="mt-2 text-sm text-white/60">
              A headset must draw two sharp pictures, many times a second, with almost no delay
              after you move your head. Miss that, and people feel sick.
            </p>
          </Card>
          <Card delay={0.2}>
            <h3 className="font-display text-lg font-semibold text-white">✋ Feeling the world</h3>
            <p className="mt-2 text-sm text-white/60">
              Motors in controllers and suits let you feel weight, texture, and kickback —
              not just see it.
            </p>
          </Card>
          <Card delay={0.28}>
            <h3 className="font-display text-lg font-semibold text-white">☁️ Play with almost no hardware</h3>
            <p className="mt-2 text-sm text-white/60">
              As networks get faster, the heavy work can live in the cloud — a rich world
              streamed to thin, cheap glasses.
            </p>
          </Card>
          <Card delay={0.36}>
            <h3 className="font-display text-lg font-semibold text-white">🧠 Playing by thought</h3>
            <p className="mt-2 text-sm text-white/60">
              Early brain–computer links already let some people move a cursor by thinking.
              That's a far-off idea of how we might one day play.
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
        title={
          <>
            The same story, over and <GradientText>over</GradientText>
          </>
        }
        center
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              n: '01',
              t: 'A wild wish',
              d: 'Someone wants a rich world that reacts right now.',
              c: TINT.cyan,
            },
            {
              n: '02',
              t: 'A clever leap',
              d: 'Engineers answer with a new chip or a smart trick — the GPU, delay-hiding, tracing light, AI drawing.',
              c: TINT.violet,
            },
            {
              n: '03',
              t: 'It leaves the game',
              d: 'That trick becomes a tool for everyone — AI, film, robots, and science.',
              c: TINT.magenta,
            },
          ].map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 lg:p-8"
            >
              <div className="font-mono text-3xl font-bold" style={{ color: s.c }}>
                {s.n}
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold text-white">{s.t}</h3>
              <p className="mt-2 text-sm text-white/60">{s.d}</p>
            </div>
          ))}
        </div>
        <Reveal delay={0.6} className="mt-8">
          <p className="max-w-3xl text-lg text-white/75 md:text-2xl">
            Games are where we practise building{' '}
            <GradientText>worlds that react in real time</GradientText> — and that practise
            keeps handing the rest of engineering its next tools.
          </p>
        </Reveal>
      </SlideShell>
    ),
  },

  // 13 — KEY TAKEAWAYS
  {
    id: 'takeaways',
    label: 'Key Takeaways',
    hue: 'lime',
    render: () => {
      const points = [
        {
          t: 'Gaming is an engineering story',
          d: 'Bigger than film and music put together — and every leap was won by engineers, not only artists.',
          c: TINT.cyan,
        },
        {
          t: 'The GPU is the hero chip',
          d: 'Built to colour dots side by side, it now trains almost every big AI model. Fun hardware became world-changing hardware.',
          c: TINT.magenta,
        },
        {
          t: 'Game tricks keep leaving the game',
          d: 'Picture chips, physics, online play, and AI drawing all leaked out to power AI, film, robots, and science.',
          c: TINT.violet,
        },
        {
          t: 'The future is invented and felt',
          d: 'AI will imagine worlds as you play them, and headsets, touch, and networks will make those worlds feel close.',
          c: TINT.lime,
        },
      ]
      return (
        <SlideShell
          hue="lime"
          kicker="If you remember four things"
          title={
            <>
              Key <GradientText from={TINT.lime} to={TINT.cyan}>takeaways</GradientText>
            </>
          }
        >
          <div className="grid gap-4 md:grid-cols-2">
            {points.map((p, i) => (
              <div
                key={p.t}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 lg:p-6"
              >
                <span
                  className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full font-mono text-sm font-bold"
                  style={{ color: p.c, background: `${p.c}1a`, border: `1px solid ${p.c}55` }}
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{p.t}</h3>
                  <p className="mt-1 text-sm text-white/60">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </SlideShell>
      )
    },
  },

  // 14 — REFERENCES
  {
    id: 'references',
    label: 'References',
    hue: 'violet',
    render: () => {
      const refs = [
        ['Newzoo', 'Global Games Market Report — how much money and how many players', '2024'],
        ['NVIDIA', 'GeForce 256 — sold as “the world’s first GPU”, plus later chip history', '1999–'],
        ['NVIDIA', 'DLSS — AI that adds extra detail to a game picture', '2020–'],
        ['Akenine-Möller, Haines & Hoffman', 'Real-Time Rendering (4th ed.) — how live pictures are drawn', '2018'],
        ['Valve Developer Community', 'Source Multiplayer Networking — hiding internet delay', ''],
        ['Google DeepMind', 'AlphaGo & AlphaStar — AI that learned by playing games', '2016–19'],
        ['Google Research', 'GameNGen — a neural net that can run a playable game', '2024'],
        ['Cooper et al., Nature', 'Foldit — a game that helped fold a real protein', '2010'],
      ]
      return (
        <SlideShell
          hue="violet"
          kicker="Where the facts come from"
          title="References"
          subtitle="A starting list if you want to read more after today."
        >
          <div className="grid gap-x-8 gap-y-3 md:grid-cols-2">
            {refs.map(([who, what, year], i) => (
              <div key={who + what} className="flex gap-3 border-b border-white/5 pb-3">
                <span className="font-mono text-xs text-white/35">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-sm text-white/70">
                  <span className="font-semibold text-white">{who}.</span> {what}
                  {year ? <span className="text-white/40"> · {year}</span> : null}
                </p>
              </div>
            ))}
          </div>
          <Reveal delay={0.6} className="mt-5">
            <p className="font-mono text-xs text-white/40">
              Numbers are rounded for scale. Every picture carries its own source
              line. Pictures in this talk are original AI-generated illustrations
              made for this seminar — not photos of real products.
            </p>
          </Reveal>
        </SlideShell>
      )
    },
  },

  // 15 — CLOSE
  {
    id: 'thanks',
    label: 'Thank you',
    hue: 'magenta',
    render: () => (
      <SlideShell hue="magenta" center>
        <div className="flex flex-col items-start">
          <Chip>One last thought</Chip>
          <h2 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
            The next leap in technology
            <br />
            won't be announced in a lab —
            <br />
            <GradientText>it'll ship in a game.</GradientText>
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-white/65 lg:text-xl">
            Dots → triangles → many hands at once → AI → worlds you can step inside. From
            <em> Pong</em> on a lab screen to places we may one day walk into — every leap was
            an engineering leap. Watch what gamers play next. It's a preview of what everyone
            else will build with.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-sm text-white/60">
            <span className="rounded-lg border border-fuchsia-400/30 bg-fuchsia-400/10 px-4 py-1.5 text-fuchsia-200">
              Thank you — questions welcome
            </span>
            <span className="text-white/45">Soutam Rajbhar · Chemical Engineering, IIT Kharagpur</span>
          </div>
        </div>
      </SlideShell>
    ),
  },
]
