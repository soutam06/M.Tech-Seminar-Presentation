import type { ReactNode } from 'react'
import { SlideShell } from './components/SlideShell'
import { Card, Chip, GradientText, Stat } from './components/primitives'
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
  amber: '#d4b05a',
  cyan: '#6ec4ba',
  violet: '#9aabc0',
  magenta: '#c4929f',
  lime: '#b4bc6e',
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
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="eager"
        className="absolute inset-0 h-full w-full object-contain"
      />
      {caption && (
        <span className="absolute left-3 top-3 max-w-[90%] rounded bg-black/65 px-2 py-1 font-mono text-[13px] leading-snug text-white/90">
          {caption}
        </span>
      )}
      <span className="absolute bottom-3 left-3 max-w-[90%] rounded bg-black/70 px-2 py-1 font-mono text-[13px] leading-none tracking-wide text-white/90">
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
      className="shrink-0 rounded-xl border px-5 py-3 text-[24px] leading-snug text-white"
      style={{ borderColor: `${accent}66`, background: `${accent}22` }}
    >
      <span className="font-semibold" style={{ color: accent }}>
        {label}
      </span>{' '}
      {children}
    </div>
  )
}

function Cluster({
  cols,
  children,
  footer,
}: {
  cols: 2 | 3 | 4 | 5
  children: ReactNode
  footer?: ReactNode
}) {
  const colClass =
    cols === 2
      ? 'grid-cols-2'
      : cols === 3
        ? 'grid-cols-3'
        : cols === 4
          ? 'grid-cols-4'
          : 'grid-cols-5'
  return (
    <div className="flex min-h-0 flex-1 flex-col justify-center gap-6">
      <div className={`grid items-stretch gap-5 ${colClass}`}>{children}</div>
      {footer}
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
            <h1 className="mt-6 font-display text-[72px] font-bold leading-[1.02] tracking-tight">
              The Engineering
              <br />
              of <GradientText>Play</GradientText>
            </h1>
            <p className="mt-6 max-w-[720px] text-[28px] font-medium leading-snug text-white">
              How games grew up — and where they are going — told through the engineering
              that made each leap possible.
            </p>
            <div
              className="mt-8 border-l-2 pl-4"
              style={{ borderColor: 'color-mix(in srgb, var(--color-accent) 55%, transparent)' }}
            >
              <div className="font-display text-[36px] font-semibold text-white">
                Soutam Rajbhar
              </div>
              <div className="mt-1 text-[24px] text-white">Department of Chemical Engineering</div>
              <div className="text-[24px] text-white">IIT Kharagpur</div>
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
        <Cluster
          cols={4}
          footer={
            <p className="deck-p">
              Every second, your computer does maths for millions of points — shape, bounce,
              light — and paints a new picture before you can blink. That's the story we're
              following today.
            </p>
          }
        >
          <Card>
            <Stat value="~$200B" label="Money made each year" tint={TINT.cyan} />
          </Card>
          <Card>
            <Stat value="3.3B+" label="People who play" tint={TINT.magenta} />
          </Card>
          <Card>
            <Stat value="1 in 3" label="People on the planet play" tint={TINT.violet} />
          </Card>
          <Card>
            <Stat value="60–240" label="New pictures drawn every second" tint={TINT.lime} />
          </Card>
        </Cluster>
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
          <div className="relative flex min-h-0 flex-1 flex-col pt-3">
            <div
              className="pointer-events-none absolute left-[4%] right-[4%] top-[22px] h-px"
              style={{
                background:
                  'linear-gradient(90deg, color-mix(in srgb, var(--color-gold) 50%, transparent), color-mix(in srgb, var(--color-slate) 50%, transparent), color-mix(in srgb, var(--color-olive) 50%, transparent))',
              }}
            />
            <div className="grid min-h-0 flex-1 grid-cols-5 gap-5">
              {eras.map((e) => (
                <div
                  key={e.t}
                  className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] px-6 pb-6 pt-9"
                >
                  <div className="absolute left-1/2 top-0 z-10 flex -translate-x-1/2 -translate-y-1/2">
                    <span
                      className="h-3.5 w-3.5 rounded-full ring-4 ring-[color:var(--color-ink)]"
                      style={{ background: e.c }}
                    />
                  </div>
                  <div
                    className="min-h-[72px] font-display text-[26px] font-semibold leading-snug"
                    style={{ color: e.c }}
                  >
                    {e.t}
                  </div>
                  <p className="mt-3 deck-p">{e.d}</p>
                  <div
                    className="mt-auto border-t border-white/10 pt-4 font-mono text-[22px] font-semibold tracking-wide"
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
              <h3 className="deck-h font-display font-semibold text-white">The games</h3>
              <p className="mt-2 deck-p">
                <em>Tennis for Two</em> (1958) on a lab screen, <em>Pong</em> (1972), then
                <em> Space Invaders</em> and packed arcade halls.
              </p>
            </Card>
            <Card>
              <h3 className="deck-h font-display font-semibold text-white">How it was built</h3>
              <p className="mt-2 deck-p">
                Early machines were wired by hand. There was often no “brain chip” yet — the
                wiring <em>itself</em> was the game.
              </p>
            </Card>
            <Card>
              <h3 className="deck-h font-display font-semibold text-white">The big change</h3>
              <p className="mt-2 deck-p">
                Cheap computer chips arrived. A game became <em>software</em> — the same machine
                could play many different games.
              </p>
            </Card>
            <Note accent={TINT.amber} label="Takeaway:">
              once games were software, progress stopped being about new wires and started being
              about <span className="text-white">faster computers</span>.
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
              <h3 className="deck-h font-display font-semibold text-white">The problem</h3>
              <p className="mt-2 deck-p">
                A 3D world is made of millions of tiny triangles. Every picture, the computer
                must move them, light them, and colour every dot. A normal chip (the CPU) does
                this one step at a time — too slow for smooth play.
              </p>
            </Card>
            <Card>
              <h3 className="deck-h font-display font-semibold text-white">The answer</h3>
              <p className="mt-2 deck-p">
                A new chip built just for pictures: the{' '}
                <span style={{ color: TINT.cyan }}>Graphics Processing Unit</span>. It has many small
                workers that colour lots of dots <em>at the same time</em>. NVIDIA's 1999
                GeForce 256 was sold as the first of these.
              </p>
            </Card>
            <div className="flex shrink-0 flex-wrap gap-2 font-mono text-[18px]">
              {['PlayStation', 'Nintendo 64', 'Quake', 'GeForce 256'].map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="deck-p">
              One idea matters more than anything else today:{' '}
              <span className="text-white">do the same small job on thousands of things at once</span>.
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
          <div className="flex min-h-0 items-center overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-5">
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
              <span className="text-white">No.</span> More chefs still aren't a factory line. A
              real GPU has <span className="text-white">thousands</span> of these simple cores.
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
          cols={3}
          footer={
            <Note accent={TINT.violet} label="The shift:">
              a game stopped being “a program on your computer” and became{' '}
              <span className="text-white">a live system serving millions of people at once</span>.
            </Note>
          }
        >
          <Card>
            <h3 className="deck-h font-display font-semibold text-white">Fighting delay</h3>
            <p className="mt-2 deck-p">
              A signal can take about 40 milliseconds to cross the world. Games guess your next
              move, then correct it — so play still feels instant.
            </p>
          </Card>
          <Card>
            <h3 className="deck-h font-display font-semibold text-white">Real physics</h3>
            <p className="mt-2 deck-p">
              Games solve bounce, crash, and falling bodies 60 times a second — the same kind of
              maths used in engineering simulations.
            </p>
          </Card>
          <Card>
            <h3 className="deck-h font-display font-semibold text-white">Huge worlds</h3>
            <p className="mt-2 deck-p">
              Games like <em>World of Warcraft</em> keep tens of thousands of players in sync
              across many computers at once.
            </p>
          </Card>
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
          <Card>
            <h3 className="deck-h font-display font-semibold text-white">In every pocket</h3>
            <p className="mt-2 deck-p">
              Most gaming now happens on phones. A modern phone already has a strong picture
              chip — a console in your hand.
            </p>
          </Card>
          <Card>
            <h3 className="deck-h font-display font-semibold text-white">Games in the cloud</h3>
            <p className="mt-2 deck-p">
              The game can run on a faraway computer and send you video — like Netflix, except
              your button press has to travel there and back in a blink.
            </p>
          </Card>
          <Card>
            <h3 className="deck-h font-display font-semibold text-white">Tracing light</h3>
            <p className="mt-2 deck-p">
              New chips follow rays of light through a scene — real reflections and shadows.
              Movie computers used to spend hours on one frame. Games now do it live.
            </p>
          </Card>
          <Card>
            <h3 className="deck-h font-display font-semibold text-white">Esports</h3>
            <p className="mt-2 deck-p">
              Competitive games fill stadiums. That needs rock-solid servers, fair play, and
              timing accurate to a fraction of a picture.
            </p>
          </Card>
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
          cols={3}
          footer={
            <p className="deck-p">
              <span style={{ color: TINT.lime }}>The point:</span> chasing a fun, hard problem —
              drawing a world 60 times a second — gave every other field a new set of tools.
            </p>
          }
        >
          <Card>
            <h3 className="deck-h font-display font-semibold text-white">
              GPUs → the AI boom
            </h3>
            <p className="mt-2 deck-p">
              The same “many hands” maths that colours pixels is what trains AI. Chatbots and
              image models run on chips that started life in games.
            </p>
          </Card>
          <Card>
            <h3 className="deck-h font-display font-semibold text-white">
              Game tools → film &amp; design
            </h3>
            <p className="mt-2 deck-p">
              The same software that builds games now draws movie sets, car showrooms, and
              buildings — live, not overnight.
            </p>
          </Card>
          <Card>
            <h3 className="deck-h font-display font-semibold text-white">
              Game physics → factories
            </h3>
            <p className="mt-2 deck-p">
              Robots and self-driving cars practise in game-like worlds. Factories test a
              virtual copy of a plant before they build the real one.
            </p>
          </Card>
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
          <Card>
            <h3 className="deck-h font-display font-semibold text-white">
              AI fills in the picture
            </h3>
            <p className="mt-2 deck-p">
              Games already draw a rough picture, then let AI add the extra detail — more
              sharpness for less work. NVIDIA calls one version of this DLSS.
            </p>
          </Card>
          <Card>
            <h3 className="deck-h font-display font-semibold text-white">
              Worlds made on the spot
            </h3>
            <p className="mt-2 deck-p">
              Research models can now invent playable game pictures in real time. Imagine
              levels, characters, and quests made just for you.
            </p>
          </Card>
          <Card>
            <h3 className="deck-h font-display font-semibold text-white">
              Characters that talk back
            </h3>
            <p className="mt-2 deck-p">
              Chat-style AI can give game characters real conversations — they reply to what
              you actually say, not a fixed script.
            </p>
          </Card>
          <Card>
            <h3 className="deck-h font-display font-semibold text-white">
              Endless maps + AI
            </h3>
            <p className="mt-2 deck-p">
              Older tricks already built whole galaxies from one seed number. Pair that with
              AI and you get huge worlds that still feel surprising.
            </p>
          </Card>
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
              <h3 className="deck-h font-display font-semibold text-white">
                Headsets &amp; mixed reality
              </h3>
              <p className="mt-2 deck-p">
                A headset must draw two sharp pictures, many times a second, with almost no delay
                after you move your head. Miss that, and people feel sick.
              </p>
            </Card>
            <Card>
              <h3 className="deck-h font-display font-semibold text-white">Feeling the world</h3>
              <p className="mt-2 deck-p">
                Motors in controllers and suits let you feel weight, texture, and kickback — not
                just see it.
              </p>
            </Card>
            <Card>
              <h3 className="deck-h font-display font-semibold text-white">
                Play with almost no hardware
              </h3>
              <p className="mt-2 deck-p">
                As networks get faster, the heavy work can live in the cloud — a rich world
                streamed to thin, cheap glasses.
              </p>
            </Card>
            <Card>
              <h3 className="deck-h font-display font-semibold text-white">Playing by thought</h3>
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
        <Cluster
          cols={3}
          footer={
            <p className="deck-p max-w-5xl">
              Games are where we practise building{' '}
              <GradientText>worlds that react in real time</GradientText> — and that practise
              keeps handing the rest of engineering its next tools.
            </p>
          }
        >
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
            <Card key={s.n}>
              <div className="font-mono text-[48px] font-bold" style={{ color: s.c }}>
                {s.n}
              </div>
              <h3 className="mt-3 deck-h font-display font-semibold text-white">{s.t}</h3>
              <p className="mt-2 deck-p">{s.d}</p>
            </Card>
          ))}
        </Cluster>
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
                className="flex h-full items-center gap-5 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-6"
              >
                <span
                  className="grid h-14 w-14 shrink-0 place-items-center rounded-full font-mono text-[22px] font-bold"
                  style={{ color: p.c, background: `${p.c}1a`, border: `1px solid ${p.c}55` }}
                >
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="deck-h font-display font-semibold text-white">{p.t}</h3>
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
              <div key={who + what} className="flex gap-3 border-b border-white/10 pb-3">
                <span className="font-mono text-[20px] text-white/70">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="deck-p">
                  <span className="font-semibold text-white">{who}.</span> {what}
                  {year ? <span className="text-white/70"> · {year}</span> : null}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-[1200px] text-center text-[20px] text-white/80">
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
          <h2 className="mt-6 font-display text-[60px] font-bold leading-[1.08] tracking-tight">
            The next leap in technology
            <br />
            won't be announced in a lab —
            <br />
            <GradientText>it'll ship in a game.</GradientText>
          </h2>
          <p className="mt-6 max-w-5xl text-[28px] font-medium leading-snug text-white">
            Dots → triangles → many hands at once → AI → worlds you can step inside. From
            <em> Pong</em> on a lab screen to places we may one day walk into — every leap was
            an engineering leap. Watch what gamers play next. It's a preview of what everyone
            else will build with.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 font-mono text-[20px] text-white">
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
            <span className="text-white/80">Soutam Rajbhar · Chemical Engineering, IIT Kharagpur</span>
          </div>
        </div>
      </SlideShell>
    ),
  },
]
