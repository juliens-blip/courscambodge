# Courscambodge Context

## Mission

Maintain a small SSE revision app in `iacourscambodge/` with three aligned outputs:

- raw fiches displayed cleanly in the UI
- flashcards that cover the loaded chapters
- quizzes with answers and explanations

## Real Paths

- App root: `iacourscambodge/`
- Main UI: `iacourscambodge/src/App.tsx`
- Content dataset: `iacourscambodge/src/content/`
- Deployable PDF copies: `iacourscambodge/public/courses/`
- App styles: `iacourscambodge/src/App.css` and `iacourscambodge/src/index.css`
- Local agent dossiers: `project-agents/`
- Local project skills: `project-skills/`
- Source PDFs: `/home/julien/coursse`

## Working Rules

1. Keep the app static and easy to deploy on Vercel.
2. Keep fiches in English and close to the provided wording.
3. Use the PDFs and pasted notes to broaden flashcards and quizzes across definitions, theories, examples, risks, and exam issues.
4. If a PDF is missing but text notes exist, document the gap instead of inventing a source.
5. Treat `agents_library/` and `skills/` as optional local references used during build time, not deploy-time dependencies.
6. Verify `npm run lint` and `npm run build` from `iacourscambodge/` after changes.

## Commands

Run from `iacourscambodge/`:

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

## Deployment

Use `iacourscambodge` as the Root Directory on Vercel.
