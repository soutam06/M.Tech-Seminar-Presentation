# The Engineering of Play

An interactive, animated **web presentation** on how the gaming industry evolved — and where
it's headed — told entirely through the **engineering** that made each leap possible.

Built for a science & engineering talk. Audience-friendly: everyone has played *some* game, so
it starts relatable and builds toward GPUs, AI, and immersion.

## The story it tells

1. **The Hook** — gaming is the biggest entertainment industry on Earth, and it's really an
   engineering one.
2. **The Spark (1958–85)** — transistors, CRTs and arcades; games become software.
3. **The 3rd Dimension (1994–2005)** — polygons and the birth of the GPU.
4. **Interactive demo** — *click to race a CPU vs a GPU* rendering the same frame and see why
   parallelism wins.
5. **Connected Worlds (2004–15)** — netcode, latency, real-time physics, MMOs.
6. **Everywhere (2015–now)** — mobile, cloud gaming, ray tracing, esports.
7. **The Twist** — gaming tech (GPUs, engines, physics sims) quietly rebuilt AI, film and
   robotics.
8. **The Future** — AI-generated worlds & neural rendering, then VR/AR, haptics and neural
   interfaces.
9. **The Throughline** — the repeating engineering pattern behind it all.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed URL (defaults to <http://127.0.0.1:43733>).

### Controls

- **→ / Space** — next · **←** — previous
- **G** or **Esc** — slide overview / jump menu
- **Home / End** — first / last slide
- Click the dots or the label chip at the bottom to navigate.

### Presenting tips

- Press **F11** for full-screen in your browser before you start.
- The one live demo (CPU vs GPU) is on slide 6 — click both buttons for a great "aha" moment.

## Tech

- [Vite](https://vite.dev/) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for slide + element animation

## Build

```bash
npm run build && npm run preview
```
