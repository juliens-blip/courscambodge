# iacourscambodge

Study app for the Social and Solidarity Economy course. The app is a static React + TypeScript project built with Vite and ready to deploy on Vercel.

It has three content zones:
- `Fiches`: raw revision sheets, displayed as-is in the UI with clean front-end formatting
- `Flashcards`: condensed study cards, expanded from the course material and cleaned for exam revision
- `Quizzes`: question sets covering the full chapter scope, with answers and explanations

## Source Material

- PDFs and course files live in `/home/julien/coursse`
- Current local project skills live in `/home/julien/Documents/courscambodge/project-skills`
- Local agent and skill references used during build time can live in `/home/julien/Documents/courscambodge/agents_library` and `/home/julien/Documents/courscambodge/skills`

## Project Structure

- `src/App.tsx`: main app shell and study experience
- `src/App.css`: app-specific layout and presentation
- `src/index.css`: global tokens, typography, and base styles
- `src/content/`: typed chapter dataset, raw fiches, flashcards, and quiz prompts
- `src/assets/`: local images and static assets
- `public/`: public static files served by Vite

## Commands

Run these from `/home/julien/Documents/courscambodge/iacourscambodge`:

```bash
npm install
npm run dev
npm run build
npm run lint
npm run preview
```

## Content Rules

- Keep the raw fiche text readable and faithful to the source notes.
- Use the PDFs in `/home/julien/coursse` to tighten definitions, examples, and exam points.
- Keep flashcards and quizzes broad enough to cover every chapter topic, not just the headline definitions.
- Prefer static data in the app until a later content pipeline is needed.

## Deployment

The app is Vercel-friendly because it is fully static and builds with `npm run build` into `dist/`.

The recommended Vercel root directory is `iacourscambodge`.
