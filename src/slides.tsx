import type { ReactNode } from 'react'
import { SlideShell } from './components/SlideShell'
import { Card, Chip, GradientText } from './components/primitives'
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
  amber: '#8a5a10',
  cyan: '#0d6e68',
  violet: '#2f4a73',
  magenta: '#9a3550',
  lime: '#5a6414',
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
    <figure
      className={`relative overflow-hidden rounded-2xl border border-ink/12 bg-panel ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="eager"
        className="absolute inset-0 h-full w-full object-contain"
      />
      {caption && (
        <span className="absolute left-3 top-3 max-w-[90%] rounded bg-black/65 px-2 py-1 font-mono text-[16px] leading-snug text-white/90">
          {caption}
        </span>
      )}
      <span className="absolute bottom-3 left-3 max-w-[90%] rounded bg-black/70 px-2 py-1 font-mono text-[16px] leading-none tracking-wide text-white/90">
        Source: {source}
      </span>
    </figure>
  )
}

function Note({
  children,
  accent,
  label,
}: {
  children: ReactNode
  accent: string
  label: string
}) {
  return (
    <div
      className="shrink-0 rounded-xl border px-5 py-3 text-[28px] leading-snug text-ink"
      style={{
        borderColor: `color-mix(in srgb, ${accent} 45%, transparent)`,
        background: `color-mix(in srgb, ${accent} 10%, var(--color-paper))`,
      }}
    >
      <span className="font-semibold" style={{ color: accent }}>
        {label}
      </span>{' '}
      {children}
    </div>
  )
}

function Panel({
  index,
  title,
  children,
  tint,
  glyph,
}: {
  index?: string
  title: ReactNode
  children: ReactNode
  tint: string
  glyph?: 0 | 1 | 2 | 3 | 4
}) {
  return (
    <div
      className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-xl"
      style={{
        border: `1px solid color-mix(in srgb, ${tint} 40%, transparent)`,
        background: `linear-gradient(180deg, color-mix(in srgb, ${tint} 10%, var(--color-paper)) 0%, var(--color-paper) 100%)`,
      }}
    >
      <div
        className="flex shrink-0 items-center gap-4 px-6 py-[18px]"
        style={{
          background: `color-mix(in srgb, ${tint} 12%, var(--color-panel))`,
          borderBottom: `1px solid color-mix(in srgb, ${tint} 34%, transparent)`,
        }}
      >
        {index ? (
          <span
            className="font-mono text-[18px] font-semibold tracking-[0.22em]"
            style={{ color: tint }}
          >
            {index}
          </span>
        ) : null}
        {glyph !== undefined ? (
          <div
            className="grid h-11 w-11 shrink-0 place-items-center rounded-lg"
            style={{
              background: `color-mix(in srgb, ${tint} 16%, transparent)`,
              border: `1px solid color-mix(in srgb, ${tint} 40%, transparent)`,
            }}
          >
            <LeapGlyph kind={glyph} color={tint} size={26} />
          </div>
        ) : null}
        <h3 className="min-w-0 deck-h font-display font-semibold text-ink">{title}</h3>
      </div>
      <div className="relative flex min-h-0 flex-1 items-start px-7 pt-5 pb-6">
        <div className="relative z-10 max-w-[1420px] deck-p">{children}</div>
        {index ? (
          <div
            className="pointer-events-none absolute bottom-2 right-6 select-none font-display text-[84px] font-bold leading-none"
            style={{ color: tint, opacity: 0.12 }}
          >
            {index}
          </div>
        ) : null}
      </div>
    </div>
  )
}

function LeapGlyph({
  kind,
  color,
  size = 34,
}: {
  kind: 0 | 1 | 2 | 3 | 4
  color: string
  size?: number
}) {
  const s = {
    fill: 'none',
    stroke: color,
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" aria-hidden className="shrink-0">
      {kind === 0 && <rect x="7" y="9" width="22" height="16" rx="2" {...s} />}
      {kind === 1 && <path d="M8 27 L18 8 L28 27 Z" {...s} />}
      {kind === 2 && (
        <>
          <circle cx="12" cy="18" r="5" {...s} />
          <circle cx="24" cy="18" r="5" {...s} />
          <path d="M17 18h2" {...s} />
        </>
      )}
      {kind === 3 && (
        <>
          <circle cx="18" cy="18" r="4.5" {...s} />
          <circle cx="18" cy="18" r="9.5" {...s} />
        </>
      )}
      {kind === 4 && <path d="M18 7v22M8 18h20" {...s} />}
    </svg>
  )
}

function Cluster({
  cols,
  children,
  footer,
}: {
  cols: 1 | 2 | 3 | 4 | 5
  children: ReactNode
  footer?: ReactNode
}) {
  const colClass =
    cols === 1
      ? 'grid-cols-1'
      : cols === 2
        ? 'grid-cols-2'
        : cols === 3
          ? 'grid-cols-3'
          : cols === 4
            ? 'grid-cols-4'
            : 'grid-cols-5'
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-5">
      <div className={`grid min-h-0 flex-1 items-stretch gap-5 ${colClass}`}>{children}</div>
      {footer ? <div className="shrink-0">{footer}</div> : null}
    </div>
  )
}

export const slides: Slide[] = [
  {
    id: 'title',
    label: 'Title',
    hue: 'magenta',
    render: () => (
      <SlideShell hue="magenta">
        <div className="grid h-full min-h-0 grid-cols-[1fr_920px] items-center gap-12">
          <div className="flex min-h-0 flex-col justify-center">
            <Chip>A science &amp; engineering talk</Chip>
            <h1 className="mt-6 font-display text-[80px] font-bold leading-[1.02] tracking-tight">
              The Engineering
              <br />
              of <GradientText>Play</GradientText>
            </h1>
            <p className="mt-6 max-w-[760px] text-[32px] font-medium leading-snug text-ink">
              How games grew up — and where they are going — told through the engineering
              that made each leap possible.
            </p>
            <div
              className="mt-8 border-l-2 pl-4"
              style={{ borderColor: 'color-mix(in srgb, var(--color-accent) 55%, transparent)' }}
            >
              <div className="font-display text-[42px] font-semibold text-ink">
                Soutam Rajbhar
              </div>
              <div className="mt-1 text-[28px] text-ink">Department of Chemical Engineering</div>
              <div className="text-[28px] text-ink">IIT Kharagpur</div>
            </div>
          </div>
          <Figure
            src={heroEvolution}
            alt="The evolution of games: from a Pong CRT and 8-bit sprites, to 3D wireframe characters, to a person in a VR headset before a futuristic world."
            caption="Pong on a TV → 8-bit characters → 3D → stepping into a virtual world"
            className="aspect-[16/9] w-full"
          />
        </div>
      </SlideShell>
    ),
  },

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
        <div className="flex min-h-0 flex-1 flex-col gap-5">
          <div className="grid min-h-0 flex-1 grid-cols-2 grid-rows-2 gap-4">
            {[
              { v: '~$200B', l: 'Money made each year', c: TINT.cyan },
              { v: '3.3B+', l: 'People who play', c: TINT.magenta },
              { v: '1 in 3', l: 'People on the planet play', c: TINT.violet },
              { v: '60–240', l: 'New pictures drawn every second', c: TINT.lime },
            ].map((s) => (
              <div
                key={s.l}
                className="flex min-h-0 flex-col overflow-hidden rounded-xl"
                style={{
                  border: `1px solid color-mix(in srgb, ${s.c} 45%, transparent)`,
                  background: `linear-gradient(90deg, color-mix(in srgb, ${s.c} 22%, var(--color-paper)) 0%, var(--color-paper) 100%)`,
                }}
              >
                <div className="h-[5px] w-full shrink-0" style={{ background: s.c }} />
                <div className="flex min-h-0 flex-1 items-center gap-8 px-9">
                  <div
                    className="w-[320px] shrink-0 font-display text-[80px] font-bold leading-none"
                    style={{ color: s.c }}
                  >
                    {s.v}
                  </div>
                  <div className="max-w-[400px] text-[26px] font-medium uppercase tracking-widest text-ink">
                    {s.l}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="shrink-0 rounded-xl px-7 py-4 text-[28px] leading-snug text-ink"
            style={{
              border: `1px solid color-mix(in srgb, ${TINT.cyan} 45%, transparent)`,
              background: `color-mix(in srgb, ${TINT.cyan} 16%, var(--color-paper))`,
            }}
          >
            Every second, your computer does maths for millions of points — shape, bounce,
            light — and paints a new picture before you can blink. That's the story we're
            following today.
          </div>
        </div>
      </SlideShell>
    ),
  },

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
        <div className="relative flex min-h-0 flex-1 flex-col gap-3">
            <div
              className="absolute bottom-8 left-[32px] top-8 w-[3px] rounded-full"
              style={{
                background:
                  'linear-gradient(180deg, var(--color-gold), var(--color-teal), var(--color-slate), var(--color-rose), var(--color-olive))',
              }}
            />
            {eras.map((e, i) => (
              <div key={e.t} className="relative flex min-h-0 flex-1 items-stretch gap-4">
                <div
                  className="relative z-10 my-auto grid h-16 w-16 shrink-0 place-items-center rounded-full font-mono text-[18px] font-bold"
                  style={{
                    color: e.c,
                    background: 'var(--color-paper)',
                    border: `2px solid ${e.c}`,
                    boxShadow: '0 0 0 7px var(--color-paper)',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div
                  className="relative flex min-h-0 min-w-0 flex-1 items-center gap-8 overflow-hidden rounded-xl px-7"
                  style={{
                    border: `1px solid color-mix(in srgb, ${e.c} 42%, transparent)`,
                    background: `linear-gradient(90deg, color-mix(in srgb, ${e.c} 22%, var(--color-paper)) 0%, var(--color-paper) 36%, var(--color-paper) 100%)`,
                  }}
                >
                  <div
                    className="w-[240px] shrink-0 font-mono text-[22px] font-semibold tracking-[0.12em]"
                    style={{ color: e.c }}
                  >
                    {e.y}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-display text-[36px] font-semibold leading-tight text-ink">
                      {e.t}
                    </div>
                    <p className="mt-1.5 deck-p">{e.d}</p>
                  </div>
                  <div
                    className="pointer-events-none absolute right-28 top-1/2 -translate-y-1/2 select-none font-display text-[92px] font-bold leading-none"
                    style={{ color: e.c, opacity: 0.09 }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div
                    className="relative z-10 grid h-16 w-16 shrink-0 place-items-center rounded-xl"
                    style={{
                      background: `color-mix(in srgb, ${e.c} 16%, transparent)`,
                      border: `1px solid color-mix(in srgb, ${e.c} 40%, transparent)`,
                    }}
                  >
                    <LeapGlyph kind={i as 0 | 1 | 2 | 3 | 4} color={e.c} size={36} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SlideShell>
      )
    },
  },

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
            The Spark: making a screen <GradientText>talk back</GradientText>
          </>
        }
        subtitle="Before fancy pictures, the hard question was simple: can a machine react to a person right now?"
      >
        <div className="grid min-h-0 flex-1 grid-cols-[780px_1fr] items-center gap-8 overflow-hidden">
          <Figure
            src={arcadeEra}
            alt="A dark 1980s arcade lit by the glow of classic cabinets showing simple pixel sprites."
            className="aspect-[16/9] w-full"
          />
          <div className="flex flex-col gap-4">
            <Card>
              <h3 className="deck-h font-display font-semibold text-ink">The games</h3>
              <p className="mt-2 deck-p">
                <em>Tennis for Two</em> (1958) on a lab screen, <em>Pong</em> (1972), then
                <em> Space Invaders</em> and packed arcade halls.
              </p>
            </Card>
            <Card>
              <h3 className="deck-h font-display font-semibold text-ink">How it was built</h3>
              <p className="mt-2 deck-p">
                Early machines were wired by hand. There was often no “brain chip” yet — the
                wiring <em>itself</em> was the game.
              </p>
            </Card>
            <Card>
              <h3 className="deck-h font-display font-semibold text-ink">The big change</h3>
              <p className="mt-2 deck-p">
                Cheap computer chips arrived. A game became <em>software</em> — the same machine
                could play many different games.
              </p>
            </Card>
            <Note accent={TINT.amber} label="Takeaway:">
              once games were software, progress stopped being about new wires and started being
              about <span className="font-semibold text-ink">faster computers</span>.
            </Note>
          </div>
        </div>
      </SlideShell>
    ),
  },

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
        <div className="grid min-h-0 flex-1 grid-cols-[780px_1fr] items-center gap-8 overflow-hidden">
          <Figure
            src={gpuChip}
            alt="A glowing GPU graphics chip on a circuit board with many bright cores lit in parallel."
            className="aspect-[16/9] w-full"
          />
          <div className="flex flex-col gap-4">
            <Card>
              <h3 className="deck-h font-display font-semibold text-ink">The problem</h3>
              <p className="mt-2 deck-p">
                A 3D world is made of millions of tiny triangles. Every picture, the computer
                must move them, light them, and colour every dot. A normal chip (the CPU) does
                this one step at a time — too slow for smooth play.
              </p>
            </Card>
            <Card>
              <h3 className="deck-h font-display font-semibold text-ink">The answer</h3>
              <p className="mt-2 deck-p">
                A new chip built just for pictures: the{' '}
                <span style={{ color: TINT.cyan }}>Graphics Processing Unit</span>. It has many small
                workers that colour lots of dots <em>at the same time</em>. NVIDIA's 1999
                GeForce 256 was sold as the first of these.
              </p>
            </Card>
            <div className="flex shrink-0 flex-wrap gap-2 font-mono text-[22px]">
              {['PlayStation', 'Nintendo 64', 'Quake', 'GeForce 256'].map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-ink/15 bg-panel px-4 py-2 text-ink"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="deck-p">
              One idea matters more than anything else today:{' '}
              <span className="font-semibold text-ink">do the same small job on thousands of things at once</span>.
              Let's watch it happen. →
            </p>
          </div>
        </div>
      </SlideShell>
    ),
  },

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
        <div className="grid min-h-0 flex-1 grid-cols-[560px_1fr] items-center gap-8 overflow-hidden">
          <div className="flex min-h-0 items-center overflow-hidden rounded-2xl border border-ink/12 bg-panel p-5">
            <GpuCpuDemo />
          </div>
          <div className="flex flex-col gap-4">
            <Card>
              <h3 className="deck-h font-display font-semibold" style={{ color: TINT.cyan }}>
                CPU · 4 cores
              </h3>
              <p className="mt-2 deck-p">
                Few workers. Each one is smart and can do many kinds of jobs — like 4 master
                chefs in a kitchen.
              </p>
            </Card>
            <Card>
              <h3 className="deck-h font-display font-semibold" style={{ color: TINT.magenta }}>
                GPU · 48 cores
              </h3>
              <p className="mt-2 deck-p">
                Many workers. Each one is simple and repeats one job — like 48 line cooks all
                chopping vegetables at once.
              </p>
            </Card>
            <p className="deck-p">
              If we gave the CPU 48 cores, would it become a GPU?{' '}
              <span className="font-semibold text-ink">No.</span> More chefs still aren't a factory line. A
              real GPU has <span className="font-semibold text-ink">thousands</span> of these simple cores.
              That same trick now trains AI.
            </p>
          </div>
        </div>
      </SlideShell>
    ),
  },

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
            Playing together: <GradientText>delay</GradientText>, physics &amp; huge worlds
          </>
        }
        subtitle="Home internet turned games into places we share. That created new headaches for engineers."
      >
        <Cluster
          cols={1}
          footer={
            <Note accent={TINT.violet} label="The shift:">
              a game stopped being “a program on your computer” and became{' '}
              <span className="font-semibold text-ink">a live system serving millions of people at once</span>.
            </Note>
          }
        >
          <Panel index="01" tint={TINT.violet} glyph={2} title="Fighting delay">
            A signal can take about 40 milliseconds to cross the world. Games guess your next
            move, then correct it — so play still feels instant.
          </Panel>
          <Panel index="02" tint={TINT.cyan} glyph={1} title="Real physics">
            Games solve bounce, crash, and falling bodies 60 times a second — the same kind of
            maths used in engineering simulations.
          </Panel>
          <Panel index="03" tint={TINT.magenta} glyph={3} title="Huge worlds">
            Games like <em>World of Warcraft</em> keep tens of thousands of players in sync
            across many computers at once.
          </Panel>
        </Cluster>
      </SlideShell>
    ),
  },

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
        <Cluster cols={2}>
          <Panel index="01" tint={TINT.cyan} glyph={0} title="In every pocket">
            Most gaming now happens on phones. A modern phone already has a strong picture
            chip — a console in your hand.
          </Panel>
          <Panel index="02" tint={TINT.violet} glyph={2} title="Games in the cloud">
            The game can run on a faraway computer and send you video — like Netflix, except
            your button press has to travel there and back in a blink.
          </Panel>
          <Panel index="03" tint={TINT.lime} glyph={1} title="Tracing light">
            New chips follow rays of light through a scene — real reflections and shadows.
            Movie computers used to spend hours on one frame. Games now do it live.
          </Panel>
          <Panel index="04" tint={TINT.magenta} glyph={3} title="Esports">
            Competitive games fill stadiums. That needs rock-solid servers, fair play, and
            timing accurate to a fraction of a picture.
          </Panel>
        </Cluster>
      </SlideShell>
    ),
  },

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
            Gaming tech quietly <GradientText>rebuilt the world</GradientText>
          </>
        }
        subtitle="Tools made so we could have fun ended up powering some of today's most serious work."
      >
        <Cluster
          cols={1}
          footer={
            <p className="deck-p">
              <span style={{ color: TINT.lime }}>The point:</span> chasing a fun, hard problem —
              drawing a world 60 times a second — gave every other field a new set of tools.
            </p>
          }
        >
          <Panel index="01" tint={TINT.cyan} glyph={1} title="GPUs → the AI boom">
            The same “many hands” maths that colours pixels is what trains AI. Chatbots and
            image models run on chips that started life in games.
          </Panel>
          <Panel index="02" tint={TINT.violet} glyph={0} title={<>Game tools → film &amp; design</>}>
            The same software that builds games now draws movie sets, car showrooms, and
            buildings — live, not overnight.
          </Panel>
          <Panel index="03" tint={TINT.magenta} glyph={4} title="Game physics → factories">
            Robots and self-driving cars practise in game-like worlds. Factories test a
            virtual copy of a plant before they build the real one.
          </Panel>
        </Cluster>
      </SlideShell>
    ),
  },

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
        <Cluster cols={2}>
          <Panel index="01" tint={TINT.magenta} glyph={4} title="AI fills in the picture">
            Games already draw a rough picture, then let AI add the extra detail — more
            sharpness for less work. NVIDIA calls one version of this DLSS.
          </Panel>
          <Panel index="02" tint={TINT.cyan} glyph={3} title="Worlds made on the spot">
            Research models can now invent playable game pictures in real time. Imagine
            levels, characters, and quests made just for you.
          </Panel>
          <Panel index="03" tint={TINT.violet} glyph={2} title="Characters that talk back">
            Chat-style AI can give game characters real conversations — they reply to what
            you actually say, not a fixed script.
          </Panel>
          <Panel index="04" tint={TINT.lime} glyph={0} title="Endless maps + AI">
            Older tricks already built whole galaxies from one seed number. Pair that with
            AI and you get huge worlds that still feel surprising.
          </Panel>
        </Cluster>
      </SlideShell>
    ),
  },

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
            From watching a screen to a world you <GradientText>step inside</GradientText>
          </>
        }
        subtitle="The next race isn't only prettier pictures. It's making the world feel close enough to touch."
      >
        <div className="grid min-h-0 flex-1 grid-cols-[780px_1fr] items-center gap-8 overflow-hidden">
          <Figure
            src={futureImmersion}
            alt="A person wearing a VR headset reaching toward a floating holographic AI-generated game world."
            className="aspect-[16/9] w-full"
          />
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <h3 className="deck-h font-display font-semibold text-ink">
                Headsets &amp; mixed reality
              </h3>
              <p className="mt-2 deck-p">
                A headset must draw two sharp pictures, many times a second, with almost no delay
                after you move your head. Miss that, and people feel sick.
              </p>
            </Card>
            <Card>
              <h3 className="deck-h font-display font-semibold text-ink">Feeling the world</h3>
              <p className="mt-2 deck-p">
                Motors in controllers and suits let you feel weight, texture, and kickback — not
                just see it.
              </p>
            </Card>
            <Card>
              <h3 className="deck-h font-display font-semibold text-ink">
                Play with almost no hardware
              </h3>
              <p className="mt-2 deck-p">
                As networks get faster, the heavy work can live in the cloud — a rich world
                streamed to thin, cheap glasses.
              </p>
            </Card>
            <Card>
              <h3 className="deck-h font-display font-semibold text-ink">Playing by thought</h3>
              <p className="mt-2 deck-p">
                Early brain–computer links already let some people move a cursor by thinking.
                That's a far-off idea of how we might one day play.
              </p>
            </Card>
          </div>
        </div>
      </SlideShell>
    ),
  },

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
      >
        <div className="flex min-h-0 flex-1 flex-col gap-4">
          <div className="relative flex min-h-0 flex-1 flex-col gap-3">
            <div
              className="absolute bottom-8 left-[32px] top-8 w-[3px] rounded-full"
              style={{
                background:
                  'linear-gradient(180deg, var(--color-teal), var(--color-slate), var(--color-rose), var(--color-teal))',
              }}
            />
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
              <div key={s.n} className="relative flex min-h-0 flex-1 items-stretch gap-4">
                <div
                  className="relative z-10 my-auto grid h-16 w-16 shrink-0 place-items-center rounded-full font-mono text-[18px] font-bold"
                  style={{
                    color: s.c,
                    background: 'var(--color-paper)',
                    border: `2px solid ${s.c}`,
                    boxShadow: '0 0 0 7px var(--color-paper)',
                  }}
                >
                  {s.n}
                </div>
                <div
                  className="relative flex min-h-0 min-w-0 flex-1 items-center gap-8 overflow-hidden rounded-xl px-8"
                  style={{
                    border: `1px solid color-mix(in srgb, ${s.c} 42%, transparent)`,
                    background: `linear-gradient(90deg, color-mix(in srgb, ${s.c} 20%, var(--color-paper)) 0%, var(--color-paper) 100%)`,
                  }}
                >
                  <div className="min-w-0 flex-1">
                    <h3 className="deck-h font-display font-semibold text-ink">{s.t}</h3>
                    <p className="mt-2 deck-p">{s.d}</p>
                  </div>
                  <div
                    className="pointer-events-none shrink-0 select-none font-display text-[80px] font-bold leading-none"
                    style={{ color: s.c, opacity: 0.12 }}
                  >
                    {s.n}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="shrink-0 deck-p max-w-5xl">
            Games are where we practise building{' '}
            <GradientText>worlds that react in real time</GradientText> — and that practise
            keeps handing the rest of engineering its next tools.
          </p>
        </div>
      </SlideShell>
    ),
  },

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
              Key <GradientText>takeaways</GradientText>
            </>
          }
        >
          <Cluster cols={2}>
            {points.map((p, i) => (
              <div
                key={p.t}
                className="flex h-full items-center gap-5 overflow-hidden rounded-2xl border border-ink/12 bg-white p-6"
              >
                <span
                  className="grid h-16 w-16 shrink-0 place-items-center rounded-full font-mono text-[24px] font-bold"
                  style={{ color: p.c, background: `${p.c}1a`, border: `1px solid ${p.c}55` }}
                >
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="deck-h font-display font-semibold text-ink">{p.t}</h3>
                  <p className="mt-2 deck-p">{p.d}</p>
                </div>
              </div>
            ))}
          </Cluster>
        </SlideShell>
      )
    },
  },

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
          center
          kicker="Where the facts come from"
          title="References"
          subtitle="A starting list if you want to read more after today."
        >
          <div className="mt-2 grid w-[1500px] max-w-full grid-cols-2 gap-x-16 gap-y-5 text-left">
            {refs.map(([who, what, year], i) => (
              <div key={who + what} className="flex gap-3 border-b border-ink/10 pb-3">
                <span className="font-mono text-[24px] text-muted">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="deck-p">
                  <span className="font-semibold text-ink">{who}.</span> {what}
                  {year ? <span className="text-muted"> · {year}</span> : null}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-[1200px] text-center text-[24px] text-muted">
            Numbers are rounded for scale. Every picture carries its own source line. Pictures in
            this talk are original AI-generated illustrations made for this seminar — not photos of
            real products.
          </p>
        </SlideShell>
      )
    },
  },

  {
    id: 'thanks',
    label: 'Thank you',
    hue: 'magenta',
    render: () => (
      <SlideShell hue="magenta" center>
        <div className="flex max-w-[1400px] flex-col items-center text-center">
          <Chip>One last thought</Chip>
          <h2 className="mt-6 font-display text-[68px] font-bold leading-[1.08] tracking-tight">
            The next leap in technology
            <br />
            won't be announced in a lab —
            <br />
            <GradientText>it'll ship in a game.</GradientText>
          </h2>
          <p className="mt-6 max-w-5xl text-[32px] font-medium leading-snug text-ink">
            Dots → triangles → many hands at once → AI → worlds you can step inside. From
            <em> Pong</em> on a lab screen to places we may one day walk into — every leap was
            an engineering leap. Watch what gamers play next. It's a preview of what everyone
            else will build with.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 font-mono text-[24px] text-ink">
            <span
              className="rounded-lg border px-4 py-1.5"
              style={{
                borderColor: 'color-mix(in srgb, var(--color-accent) 40%, transparent)',
                background: 'color-mix(in srgb, var(--color-accent) 15%, transparent)',
                color: 'var(--color-teal)',
              }}
            >
              Thank you — questions welcome
            </span>
            <span className="text-muted">Soutam Rajbhar · Chemical Engineering, IIT Kharagpur</span>
          </div>
        </div>
      </SlideShell>
    ),
  },
]
