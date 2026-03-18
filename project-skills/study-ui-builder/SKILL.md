---
name: study-ui-builder
description: Build or refactor small React/Vite revision interfaces for course content. Use whenever the user wants a study app, flashcards UI, quiz flow, chapter navigation, responsive educational layout, or a Vercel-friendly static frontend that must keep raw notes readable.
---

# Study Ui Builder

## Overview

Use this skill to shape the front-end shell of a study product without overcomplicating the stack. It is designed for projects where raw notes, memorization cards, and quiz interactions need to live together in a static app.

## Workflow

1. Read the existing content model in `src/content/` before changing the UI.
2. Keep a hard separation between:
   - raw fiches
   - flashcards
   - quiz questions
3. Prefer a single-page flow with clear section jumps unless the project already uses routing.
4. Keep the app static-first:
   - no backend requirement
   - no hidden network dependency
   - Vercel build should stay `npm run build`
5. Verify desktop and mobile layout before finishing.
6. Run `npm run build` and `npm run lint`.

## UI rules

- Raw notes must remain readable in full.
- Flashcards should focus on one prompt and one answer per card.
- Quiz feedback should be immediate and explicit.
- Filters should reset index-based state when the chapter set changes.
- Avoid unnecessary dependencies for simple interactions.

## Deliverables

- Updated React components with clean TypeScript types
- Responsive CSS
- Clear section labels for fiches / flashcards / quiz
- A short verification note after build and lint
