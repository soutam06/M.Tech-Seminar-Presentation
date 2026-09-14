# 15-minute speech + line-by-line notes

**Talk:** The Engineering of Play
**Speaker:** Soutam Rajbhar, Chemical Engineering, IIT Kharagpur
**Length:** about 15 minutes of speaking, then questions
**Pace:** speak slowly. Pause after each slide title. Click the demo on slide 6.

How to practise: read the **SAY THIS** parts out loud with a timer. Aim for ~1 minute per slide on average (title and thanks are shorter; the demo and future slides are a bit longer). The **WHAT IT MEANS** parts are for you, not for the audience — they are how you answer questions.

---

## Your one-line answer if someone asks “what is this talk about?”

Games look like entertainment. Underneath, they are one of the hardest engineering problems we have: build a world that reacts *right now*. Every time games jumped forward, engineers invented a new tool — and those tools later rebuilt AI, film, and factories.

---



## Slide 1 — Title (~45 seconds)

**On the slide**

- *The Engineering of Play*
- *How games grew up — and where they are going — told through the engineering that made each leap possible.*
- Your name, department, IIT Kharagpur
- Picture: Pong TV → blocky character → 3D wire models → a person in a headset

**SAY THIS**

Good morning / good afternoon. My name is Soutam Rajbhar. I am a fourth-year student in Chemical Engineering at IIT Kharagpur.

Today I want to talk about something most of us have done since we were kids: play video games. I am not here to review games. I am here to ask a science and engineering question: *how did a bouncing square on a TV become worlds so real that people wear headsets to stand inside them — and why did that work change AI, movies, and even factories?*

The picture on the right is the whole story. Left: a lab screen with *Pong*. Middle: 3D models made of triangles. Right: a person looking into a virtual city. Every step of that picture is an engineering leap. That is what we will walk through today.

**WHAT IT MEANS / likely questions**

- *“Engineering of Play”* — play means games; engineering means the chips, maths, and networks that make games run.
- *Why is a chemical engineer talking about games?* Because the *pattern* is the same as in our field: a hard real-time problem → a new tool → the tool escapes to other industries. Also, the same GPUs now run molecular simulations and plant “digital twins.”
- The picture is illustrative, not a photo of one real game.

---



## Slide 2 — Why this matters (~1 minute)

**On the slide**

- *Gaming is the biggest entertainment business on Earth.*
- *Bigger than movies and music put together. And it isn't really an art industry. It's an engineering one.*
- ~$200B — money made each year
- 3.3B+ — people who play
- 1 in 3 — people on the planet play
- 60–240 — new pictures drawn every second
- *Every second, your computer does maths for millions of points — shape, bounce, light — and paints a new picture before you can blink.*

**SAY THIS**

Let me start with scale, because it surprises people.

Gaming makes on the order of two hundred billion dollars a year. That is more than global cinema and recorded music *combined*. More than three billion people play. Roughly one person in three on Earth.

So this is not a niche hobby. It is the biggest entertainment industry we have.

But here is the claim of this talk: it is not mainly an art industry. It is an engineering industry wearing an art costume.

Look at the last number. A game draws a new full picture sixty to two hundred and forty times every second. Each picture needs geometry — where things are — physics — how they bounce — and lighting — how they look. All of that has to finish before your eye notices a flicker. That is a brutal real-time engineering problem. Today we will follow how engineers kept solving it.

**WHAT IT MEANS / likely questions**

- *~$200B* — about two hundred billion US dollars a year, worldwide, from Newzoo-style market reports. The tilde means “about.” It moves year to year. If someone says “I read 180” or “220,” say: the point is the *order of magnitude*, not the exact rupee.
- *3.3B+* — more than 3.3 billion people who play on phone, PC, or console, at least sometimes. Not all are “hardcore” gamers. Mobile players count.
- *1 in 3* — 3.3 billion is about a third of ~8 billion people. Rounded on purpose.
- *60–240 frames per second* — “frame” = one still picture. 60 fps is a common target. Competitive games and VR go higher (90, 120, 240) so motion looks smooth.
- *“Isn't it art?”* — of course art, story, and music matter. My point is: without the engineering, none of that reaches the player on time.
- *Shape, bounce, light* — three jobs every frame: place objects, simulate motion/collisions, colour them.

---



## Slide 3 — Five big leaps. One story. (~1 minute)

**On the slide**

- Five cards, dates **under** each title:
  - The Spark · 1958 – 1985 · Simple screens & arcade halls
  - Going 3D · 1994 – 2005 · Triangles & a new chip: the GPU
  - Playing together · 2004 – 2015 · Internet delay & real physics
  - Everywhere · 2015 – now · Phones, cloud, real-looking light
  - Felt & invented · Next · AI worlds you can step inside

**SAY THIS**

Here is the map of today. Five leaps. One repeating story.

First, 1958 to 1985: the spark. Can a screen *talk back* to a human?

Second, the mid-90s: games go 3D. That forces a new kind of chip — the GPU.

Third, the 2000s: we play together over the internet. Delay and physics become the hard problems.

Fourth, from about 2015: games are on every phone, in the cloud, and light starts to look real.

Fifth, what is next: worlds the computer invents as you play, and worlds you can step inside.

I will spend most of our time on leaps one to four, then the twist — how this left the game industry — then the future.

**WHAT IT MEANS / likely questions**

- Dates overlap on purpose (1994–2005 and 2004–2015). Real history is not a clean cut. 3D and online play happened together for a while.
- *1958* is *Tennis for Two*, not the first commercial console.
- *GPU* = Graphics Processing Unit = a chip specialised for pictures.
- *Cloud* = the game runs in a data centre; you receive video.
- If asked “why skip the 8-bit / 16-bit home consoles?” — they sit inside “The Spark”: games became software on cheap chips (Atari, NES). I grouped them so the talk stays 15 minutes.

---



## Slide 4 — The Spark: making a screen talk back (~1 min 15s)

**On the slide**

- Leap 1 · 1958 – 1985
- Arcade picture
- The games — Tennis for Two, Pong, Space Invaders
- How it was built — wired by hand; wiring itself was the game
- The big change — cheap chips; a game became software
- Takeaway: once games were software, progress became about faster computers

**SAY THIS**

Start at the beginning. 1958. A physicist named William Higinbotham builds *Tennis for Two* on an oscilloscope — a lab screen used to show electrical signals. Two people turn knobs. A dot bounces like a ball. The machine *reacts*.

In 1972, Atari’s *Pong* puts that idea in a bar. Then *Space Invaders* and the arcade boom. Halls full of cabinets, coins, noise.

How was it built? Early on, there is often no general computer. Engineers soldered circuits so that *this* wire makes *that* paddle move. The wiring *is* the program.

Then cheap microprocessors arrive — chips like the Intel 8080 and the MOS 6502. Suddenly a game is software. Load a different program, get a different game. That is Nintendo, Atari home systems, and everything after.

Takeaway: once the game is software, you don’t rebuild the cabinet to make a new game. You wait for a faster chip. The race becomes compute power.

**WHAT IT MEANS / likely questions**

- *Oscilloscope* — a lab instrument that draws a moving line or dot from an electrical signal. Not a TV.
- *Tennis for Two vs Pong* — Tennis for Two is a lab demo (1958). Pong is the hit commercial game (1972). Similar idea, different moment.
- *“Wiring itself was the game”* — in discrete-logic machines, there is no stored program. Changing the game means changing the circuit.
- *Microprocessor* — a general-purpose computer on a chip. Same chip, many programs.
- *Intel 8080 / MOS 6502* — famous cheap chips of the 1970s. The 6502 is in the Apple II, Commodore 64, NES.
- *Arcade boom* — late 1970s–early 1980s. Then a crash in 1983 in the US; Nintendo revives home play. You don’t need that unless asked.

---



## Slide 5 — Games go 3D, and the GPU is born (~1 min 15s)

**On the slide**

- Leap 2 · 1994 – 2005
- Picture of a glowing picture-chip
- The problem — millions of triangles; CPU is too slow
- The answer — GPU, many small workers at once; GeForce 256 in 1999
- PlayStation, Nintendo 64, Quake, GeForce 256
- *Do the same small job on thousands of things at once*

**SAY THIS**

The next leap is the one that still shapes our world.

In the 1990s we wanted worlds, not flat cartoons. A 3D world is millions of tiny triangles. Every frame you must move them, light them, and colour every dot on the screen.

A CPU — the main chip in a computer — is brilliant at doing *one complicated thing* after another. It is a poor fit for “colour these million dots, all almost the same way.” At 30 pictures a second it falls behind.

So engineers built a specialist: the Graphics Processing Unit, the GPU. Instead of a few smart workers, it has hundreds, later thousands, of smaller workers. Each one colours a dot or moves a triangle. They work side by side.

In 1999 NVIDIA sold the GeForce 256 as “the world’s first GPU.” PlayStation, Nintendo 64, and PC games like *Quake* are the public face of this change.

Remember one sentence: **do the same small job on thousands of things at once.** That idea is the hero of this talk. Let’s feel it on the next slide.

**WHAT IT MEANS / likely questions**

- *Triangle / polygon* — 3D models are meshes of tiny triangles. A character can be tens of thousands of them; a whole scene, millions.
- *Vertex* — a corner of a triangle. (We now say “move them” instead of “vertex” on the slide.)
- *CPU* — Central Processing Unit. The computer’s general brain.
- *GPU* — Graphics Processing Unit. Built for many similar maths steps at once.
- *30 / 60 fps* — below ~30, motion looks jumpy. 60 feels smooth for most people.
- *GeForce 256* — NVIDIA’s 1999 chip. “First GPU” is a marketing line; 3D accelerators existed before (3dfx Voodoo, etc.). Fair answer: “It is the chip NVIDIA branded as the first GPU. Dedicated 3D cards already existed; this is when the name and the modern pipeline took off.”
- *Hardware T&L* — Transform and Lighting on the chip, not the CPU. We dropped the jargon from the slide; if asked: the GPU started doing the 3D maths itself.
- *PlayStation (1994), N64 (1996)* — they put 3D in living rooms *before* the GeForce name. The GPU idea was happening in consoles and PCs together.

---



## Slide 6 — Live demo: CPU vs GPU (~2 minutes, including the clicks)

**On the slide**

- *Why a GPU? Many hands at once.*
- 144-dot picture, timer, two buttons: CPU · 4 cores / GPU · 48 cores
- CPU = 4 master chefs · GPU = 48 line cooks
- *If we gave the CPU 48 cores, would it become a GPU? No.*

**SAY THIS**

This is the only slide I want you to watch happen.

I will colour the same 144-dot picture twice. First with a CPU-style chip: four workers. Then with a GPU-style chip: forty-eight workers.

*[Click CPU. Wait until 144/144. Point at the time. Then click GPU. Wait. Point at “× faster.”]*

Same job. Very different time. The GPU wins because it colours many dots in parallel — at the same time — not because it is “smarter.”

Now the question students always ask, and it is a good one: **if I put 48 cores on a CPU, is it a GPU?**

No.

A CPU core is a master chef. It can follow a long recipe, make decisions, jump around, run your operating system, your browser, the game’s story. There are few of them. Each is large, complex, and expensive.

A GPU core is a line cook who only chops vegetables — but you have thousands of them. Colour this dot. Colour that dot. Multiply this number. Multiply that number. Simple, repeated, side by side.

If you hire 48 master chefs, you still do not have a factory line. They take more space, more power, and they are still built for *different kinds of jobs*, not for “do this tiny step ten million times.”

A real GPU in a laptop has *thousands* of these simple cores, not 48. I used 48 on the slide so you can see it with your eyes. And here is the twist we will meet later: the same “many hands” design is what trains AI.

**WHAT IT MEANS / likely questions — this is the most important Q&A in the talk**

**Q: If we increase CPU cores to match the GPU, does it become a GPU?**

**A (short):** No. Count of cores is not the whole story. CPU cores and GPU cores are different *kinds* of workers.

**A (full, use this):**

Think of three differences.

1. **Design.** CPU cores are general. They have big caches, fancy predictors, and they handle messy tasks: “if this, then that,” reading files, running one player’s AI. GPU cores are specialised. They love the same maths on a long list of numbers — pixels, triangles, or the matrices inside a neural net.
2. **How they are scheduled.** A GPU wants thousands of tiny jobs that don’t wait on each other. A CPU is happier with a few heavy jobs. Even with 48 CPU cores, a picture with 2 million pixels would still be the wrong shape of work.
3. **Cost, heat, and size.** A CPU core is much larger. You cannot put thousands of full CPU cores on a chip without it melting or costing a fortune. The GPU “cheats” by making each core smaller and dumber.

There *are* CPUs with many cores (48, 64, 128 in servers). They are great at websites and databases. They still lose to GPUs at graphics and at training large AI models. That is why data centres buy GPUs for AI.

A simple line you can repeat: **“More chefs ≠ a factory. The GPU is a factory for one kind of maths.”**

**Other demo questions**

- *Why 4 vs 48?* It is a classroom model, not a real spec. Typical laptop CPU: 6–16 cores. Typical GPU: thousands of small cores (a “CUDA core” is not the same as a CPU core — say this if a CS student pushes).
- *CUDA core vs CPU core* — they are not equal. Comparing “8 CPU cores vs 2000 CUDA cores” as if they were the same unit is misleading. The demo is about *parallel vs sequential*, not a benchmark.
- *Why is the GPU still not 12× faster if 48/4 = 12?* Because each GPU step in the demo is also a bit quicker (55 ms vs 90 ms), standing in for “many simple cores finish a tiny job fast.” Real speedups depend on the task.
- *Can a CPU run a game?* Yes. Early 3D games ran on CPU only, slowly. The GPU is why we got rich worlds at 60 fps.
- *Can a GPU run Windows by itself?* Not really. You still need a CPU to run the operating system and game logic. They work as a team: CPU = director, GPU = art department.

---



## Slide 7 — Playing together (~1 minute)

**On the slide**

- Leap 3 · 2004 – 2015
- Fighting delay — ~40 ms around the world; games guess your next move
- Real physics — bounce and crash 60 times a second
- Huge worlds — World of Warcraft, thousands of players
- A game became a live system serving millions

**SAY THIS**

Once pictures were fast enough, we wanted to share the world.

Home broadband in the 2000s made that normal. New problem: delay. Light and electronics take time. A round trip across the world can be about forty milliseconds. In a shooter, forty milliseconds is enough to feel “I shot first, how did I die?”

Engineers cheat time. Your machine *guesses* your next move so the gun fires now. The server later corrects if the guess was wrong. That is why online games sometimes rubber-band or teleport. The game is arguing with physics and with the speed of signals.

At the same time, physics engines start to look real: crates fall, cloth folds, bodies slump. Underneath, that is numerical integration — the same family of maths you meet in engineering simulations, just run 60 times a second for fun.

And MMOs like *World of Warcraft* keep tens of thousands of people in one living world. That is not one PC. That is many servers, split by region, talking to each other. Early cloud-scale engineering, dressed as an orc.

The shift: a game is no longer a disc on your desk. It is a live system serving millions at once.

**WHAT IT MEANS / likely questions**

- *40 ms* — very rough. Local city might be 10–20 ms. India to a US server can be 180–250 ms. 40 ms is “across a continent / a lucky intercontinental hop,” used to show that delay is *physical*, not just “bad Wi-Fi.”
- *Why not faster than light?* You cannot. Fibre is slower than light in vacuum anyway. The only fixes: put servers closer (more data centres), or hide delay with prediction.
- *Client-side prediction* — your computer starts the animation before the server agrees.
- *Lag compensation* — the server rewinds to when you clicked. We used simpler words: “guess, then correct.”
- *Rubber-banding* — you run forward, the server says you didn’t, you snap back.
- *Physics / numerical integration* — take position and velocity, step time forward by 1/60 second, repeat. Euler, Verlet, etc. Same idea as simulating a tank or a reactor, different time scale.
- *MMO* — Massively Multiplayer Online. WoW is the example people know.
- *2004* — WoW launched 2004; broadband was spreading. Counter-Strike and others were earlier. The slide is the era when this became mainstream.

---



## Slide 8 — Games go everywhere (~1 minute)

**On the slide**

- Leap 4 · 2015 – now
- In every pocket — phones
- Games in the cloud — like Netflix, but your click must round-trip
- Tracing light — real reflections, live
- Esports — stadiums, fair play, tiny timing

**SAY THIS**

From about 2015, games left the TV corner and went everywhere.

Most play is now on phones. That matters because a phone already has a GPU. Billions of people carry a small games machine, even if they only open Candy Crush.

Cloud gaming is the next trick: the fat computer sits in a data centre. You receive video, like Netflix. Unlike Netflix, when you tap jump, that tap must go to the server, the frame must be drawn, and the video must come back — still in a blink. If the Wi-Fi is weak, the game feels drunk. Pure delay engineering.

Then light itself. Older games *faked* reflections with tricks. Ray tracing follows rays of light the way physics does. Movies used to spend hours on one frame of this. New GPUs do it while you play. That is why puddles and car paint in recent games look suddenly real.

Esports is the social proof: stadiums, teams, broadcast. Underneath, it is the same demand — servers that don’t cheat you, timing tighter than one frame, worldwide.

**WHAT IT MEANS / likely questions**

- *Why 2015?* Smartphones + mobile GPUs were already huge; 2015–2016 is when mobile clearly became the largest slice of revenue, and VR/ray-tracing talk heated up. Not a hard scientific cut.
- *Ray tracing* — shoot rays from the camera (or lights), bounce them, see what they hit. Matches how light works. Expensive, so GPUs added extra units (“RT cores”).
- *Rasterisation* — the old way: turn triangles into pixels directly. Still used. Many games mix both.
- *Cloud gaming examples* — Xbox Cloud, GeForce Now, etc. You don’t have to name them.
- *Esports* — if asked for a number, say audiences are in the tens to hundreds of millions for big events; don’t invent a precise figure.
- *Anti-cheat* — stopping modified software that gives unfair aim. Engineering + cat-and-mouse security. Keep it one sentence unless they push.

---



## Slide 9 — Plot twist: gaming rebuilt the world (~1 min 15s)

**On the slide**

- GPUs → the AI boom
- Game tools → film & design
- Game physics → factories
- Chasing a fun, hard problem gave other fields new tools

**SAY THIS**

Here is the twist, and it is why this is a science and engineering seminar, not a games club talk.

The GPU was built so explosions looked good. Then researchers noticed: training a neural network is also “do the same multiply on giant lists of numbers.” That is GPU work. Every major chatbot and image model today rides on chips whose ancestors sat in a gaming PC. NVIDIA’s rise is not a side story. It is this slide.

Second: the software that builds games — Unreal, Unity — now draws movie backlots, car adverts, and buildings. Directors walk a set before it exists. Architects walk a hall before it is poured.

Third: robots and self-driving cars practise in game-like worlds, because real crashes are expensive. Factories run a *digital twin* — a live virtual copy of a plant — to try a change before they weld anything. That should sound like home to a chemical engineer.

The point: we chased a fun problem, “draw a world sixty times a second,” and we accidentally built the toolkit of the 21st century.

**WHAT IT MEANS / likely questions**

- *Why GPUs for AI?* Neural nets are huge matrix multiplies. GPUs do that in parallel. CPUs can do it, slowly.
- *Did games “invent” AI?* No. Neural nets are old. Games supplied the *hardware* that made large models affordable.
- *Unreal / Unity* — two popular game engines. Unreal is used in some film production (e.g. LED volumes / virtual sets). If you don’t remember a title, say “game engines” and move on.
- *Digital twin* — a virtual model of a real object or plant, updated with data, used to test and optimise. Same idea as a process simulation, plus live pictures and sometimes live sensor feeds.
- *Chem-eng tie-in* — molecular simulation, CFD visualisation, operator training simulators, digital twins of reactors and heat exchangers. All hungry for GPUs and real-time graphics.
- *Foldit* (if asked, also in references) — a puzzle game where players folded proteins; a 2010 *Nature* paper credited players with a useful AIDS-related enzyme structure. Optional wow fact; don’t force it unless you have time.

---



## Slide 10 — Worlds that are invented, not just drawn (~1 minute)

**On the slide**

- AI fills in the picture (DLSS)
- Worlds made on the spot
- Characters that talk back
- Endless maps + AI

**SAY THIS**

Where is it heading? First, the computer stops only *drawing* the world and starts *inventing* it.

Already, many PC games draw a slightly smaller picture and let AI invent the extra sharpness. NVIDIA calls one version DLSS. You get a crisper image without paying the full cost. The GPU is painting *and* guessing.

Researchers have gone further: models that output playable frames, not just stills. Imagine a level that did not exist until you walked into it.

Characters are next. Today, a shopkeeper has six recorded lines. With language models, they can answer what you actually said. That is exciting and messy — writers worry about control, and engineers worry about cost and safety. Both are fair.

Older “procedural” tricks already built huge maps from one seed number — *No Man’s Sky* is the famous example. Add AI and those maps can feel less copy-paste.

**WHAT IT MEANS / likely questions**

- *DLSS* — Deep Learning Super Sampling. Render at lower resolution, AI upscales. There are similar ideas from AMD and Intel. Name DLSS if asked; say “AI upscaling” for everyone else.
- *“Is the AI cheating?”* — it is approximating. Sometimes it invents detail that wasn’t in the original. For games, that is usually fine. For medical images, you would not do this blindly.
- *GameNGen (2024)* — Google research: a neural net that can simulate a playable *Doom*-like game. Early, not a product. Good if someone says “AI can’t run a game.”
- *NPC* — non-player character. We now say “characters that talk back.”
- *Procedural* — made by rules / maths from a seed, not hand-placed by an artist. Minecraft terrain is a cousin of this.
- *Risks* — bias, toxic talk from AI characters, copyright of training data. One honest sentence is enough: “The engineering works; the social rules are still being written.”

---



## Slide 11 — From watching a screen to stepping inside (~1 minute)

**On the slide**

- Headset picture
- Headsets & mixed reality — two pictures, almost no delay, or you feel sick
- Feeling the world — motors, weight, kickback
- Play with almost no hardware — stream to cheap glasses
- Playing by thought — early brain–computer links

**SAY THIS**

The other half of the future is not on a rectangle on your desk. It is around your head.

A headset must draw *two* sharp pictures — one per eye — many times a second. After you move your head, the new picture has to appear in roughly twenty milliseconds or less. Miss that, and your eyes and your inner ear disagree, and you feel sick. That is one of the hardest live graphics targets we have.

Touch is catching up. Triggers that resist your finger, suits that tap your back — so a hit is not only a sound.

If networks keep improving, the heavy computer can stay in the cloud and the glasses can get thin. That is the dream of “almost no hardware.” The enemy is still delay.

Brain–computer interfaces — moving a cursor by thought — exist in labs and in some medical trials. I mention them as a horizon, not as next year’s PlayStation. Be honest: we are much closer to good headsets than to playing a game with our minds.

**WHAT IT MEANS / likely questions**

- *Motion-to-photon latency* — time from head move to photons hitting your eye. ~20 ms is a common target people cite. We used plain language on the slide.
- *Why sickness?* Vestibular system (inner ear) says “I turned”; eyes say “the world lagged.” Conflict → nausea.
- *90+ fps* — VR usually wants 90 or 120 per eye so the lag budget is easier.
- *AR vs VR* — VR replaces the world; AR overlays it (glasses that still show the room). Mixed reality blends both.
- *Haptics* — engineered touch. Phone vibration is a baby version.
- *Neural interfaces* — Neuralink-style implants and non-invasive EEG. Don’t oversell. “Early, medical, not a consumer game controller.”
- *5G / edge* — putting servers closer to the player to cut delay. Useful one-liner if asked about cloud VR.

---



## Slide 12 — The same story, over and over (~45 seconds)

**On the slide**

- 01 A wild wish — a rich world that reacts right now
- 02 A clever leap — new chip or trick
- 03 It leaves the game — tool for everyone
- *Games are where we practise building worlds that react in real time*

**SAY THIS**

If you forget every date, keep this loop.

One: somebody wants an impossible world, instantly.

Two: engineers answer with a leap — a GPU, a delay trick, ray tracing, AI drawing.

Three: the leap escapes the game. It becomes a general tool.

We care about hard real-time systems and about tools that travel. Games are a gym where those tools get strong, because millions of people test them every night for fun.

**WHAT IT MEANS / likely questions**

- *“Isn’t this true of all tech?”* — yes, partly. Games are special because the deadline is a sixtieth of a second and the audience is huge, so money and talent pour in.
- *Real time* — the answer must arrive before a deadline, not “whenever the computer finishes.”

---



## Slide 13 — Key takeaways (~45 seconds)

**On the slide** — four boxes. Read them almost as-is.

**SAY THIS**

Four things I want you to leave with.

One. Gaming is an engineering story — bigger than film and music, and every leap was won in hardware and maths, not only in art.

Two. The GPU is the hero chip. Built to colour dots side by side, it now trains almost every large AI model.

Three. Game tricks keep leaving the game: picture chips, physics, online play, AI drawing.

Four. The future is invented and felt — worlds imagined as you play, and worlds close enough to step into.

**WHAT IT MEANS**

This slide is your summary. If you are running long, *this is the slide to speak slowly and skip extra facts.*

---



## Slide 14 — References (~20 seconds)

**SAY THIS**

I am not going to read a bibliography at you. These are the main sources behind the numbers and claims — Newzoo for the market, NVIDIA for the GPU story, the *Real-Time Rendering* textbook, Valve on hiding internet delay, DeepMind on game AI, Google’s GameNGen paper, and the Foldit paper in *Nature*. Happy to point to any of them in questions. Pictures in the deck are illustrative, not product shots.

**WHAT IT MEANS / likely questions**

- If someone challenges a number, go to Newzoo (market), NVIDIA (GPU/DLSS), Valve (networking).
- *Foldit* — Cooper et al., *Nature*, 2010. Players helped solve a protein structure related to HIV.
- You do not need to memorise every author name. “I can share the slide” is a valid answer.

---



## Slide 15 — Closing line (~30 seconds)

**On the slide**

- *The next leap in technology won't be announced in a lab — it'll ship in a game.*
- Dots → triangles → many hands at once → AI → worlds you can step inside
- Thank you — questions welcome

**SAY THIS**

I will end on one line.

The next leap in technology will not be announced only in a lab. It will ship in a game.

That is not poetry for its own sake. It is the history we just walked: Pong, then triangles, then many hands at once, then AI, then worlds around your head. Gamers are the first people who demand the future at sixty frames a second. The rest of us inherit the tools.

Thank you. I would love your questions.

---



## Timing cheat-sheet (15:00)


| Slides                 | Minutes | Clock       |
| ---------------------- | ------- | ----------- |
| 1–2 Title + hook       | 1:45    | 0:00–1:45   |
| 3 Map                  | 1:00    | 1:45–2:45   |
| 4 Spark                | 1:15    | 2:45–4:00   |
| 5 GPU                  | 1:15    | 4:00–5:15   |
| 6 Demo + CPU vs GPU    | 2:00    | 5:15–7:15   |
| 7 Online               | 1:00    | 7:15–8:15   |
| 8 Everywhere           | 1:00    | 8:15–9:15   |
| 9 Twist                | 1:15    | 9:15–10:30  |
| 10–11 Future           | 2:00    | 10:30–12:30 |
| 12–13 Idea + takeaways | 1:30    | 12:30–14:00 |
| 14–15 Refs + close     | 1:00    | 14:00–15:00 |


If you are over time: skip extra facts on 7–8, don’t read references, never skip the demo or the closing line.

---



## Extra questions you should be ready for

**Is this related to chemical engineering?**
Yes. We simulate plants, fluids, and molecules under time pressure too. GPUs that learned to draw games now run those simulations. Digital twins of factories use the same real-time 3D tools. The *habit* of building a world that updates now is the habit of modern process systems.

**Which chip is “more powerful,” CPU or GPU?**
Wrong question. Powerful *at what?* CPU wins at messy decision-making. GPU wins at bulk maths. A good computer has both.

**Will AI replace game developers?**
It will change the job — more directing, less hand-placing every bush. Someone still has to decide what a good game *is*, and to keep the system safe and fun. I would not claim “replaced.”

**Is VR the future or a fad?**
Headsets are still bulky and expensive for most people. The engineering path is real; the consumer habit is not guaranteed. Cloud + lighter glasses is the bet. Stay modest.

**What should I *do* if I like this?**
Learn linear algebra (it is everywhere in graphics and AI), try a small game engine, or look at how GPUs are used in molecular simulation. You do not have to become a game designer.

**Did you build this presentation yourself?**
You can say: it is a web slide deck I used so I could show a live CPU vs GPU demo — something a normal PowerPoint cannot do as easily. If they ask about tools, be honest.

---



## Words to prefer while you speak


| If you almost say… | Say this instead                                    |
| ------------------ | --------------------------------------------------- |
| parallelism        | many hands at once / at the same time               |
| latency            | delay                                               |
| rasterisation      | turning shapes into dots on the screen              |
| netcode            | the code that keeps an online game fair and in time |
| SoC                | the main chip inside a phone                        |
| neural network     | a kind of AI that learns patterns from examples     |
| digital twin       | a virtual copy of a real factory or machine         |
| fps                | pictures per second                                 |


You already put the simple words on the slides. Match them when you talk. If you slip into jargon, translate it in the next sentence.