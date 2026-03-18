# courscambodge

Workspace for a Vercel-ready revision app built from the Social and Solidarity Economy course material.

## Layout

- `iacourscambodge/`: the actual Vite + React + TypeScript app
- `project-agents/`: project-local agent dossiers aligned with the study app tasks
- `project-skills/`: local skills created for this project
- `agents_library/`: local agent references used during build time
- `skills/`: local skills repository used as a structural reference during build time
- `/home/julien/coursse/`: source PDFs used to cross-check and enrich the study content
- `iacourscambodge/public/courses/`: deployable PDF copies served by the app

## App Features

- `Fiches`: raw revision sheets kept close to the provided notes, with front-end formatting only
- `Flashcards`: cleaned study cards built from the notes and course PDFs
- `Quiz`: chapter and mixed-mode multiple-choice drills with answers and explanations

## Important Paths

- App entry: `iacourscambodge/src/App.tsx`
- Static study dataset: `iacourscambodge/src/content/`
- App styles: `iacourscambodge/src/App.css` and `iacourscambodge/src/index.css`
- Project-local agent dossiers: `project-agents/`
- Agent context file: `CLAUDE.md`

## Commands

Run from `iacourscambodge/`:

```bash
npm install
npm run dev
npm run build
npm run lint
npm run preview
```

## Vercel

The deployable app lives in `iacourscambodge/`. On Vercel, set the project root directory to `iacourscambodge` and use the default Vite build:

```bash
npm run build
```

## Notes

- The authoritative course PDFs stay outside the repo at `/home/julien/coursse`.
- The app also ships deployable PDF copies in `iacourscambodge/public/courses/` for the chapters available locally.
- `agents_library/` and `skills/` were used as local references while building the project and do not need to be deployed with the app.
