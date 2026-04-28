# Majid Trivia Night

Jeopardy / Seen-Jeem-style trivia game built as a Next.js app.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000 — you'll be redirected to `/trivia.html` automatically.

## Project structure

- `app/` — Next.js App Router (root layout + redirect page)
- `public/trivia.html` — the trivia game (single self-contained HTML page)
- `public/audio/` — drop your audio clips here (see `public/audio/README.txt`)
- `public/images/` — drop your images here (see `public/images/README.txt`)
- `next.config.mjs` — redirects `/` → `/trivia.html`

## Build for production

```bash
npm run build
npm start
```
