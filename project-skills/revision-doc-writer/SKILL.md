---
name: revision-doc-writer
description: Maintain concise project documentation for revision apps. Use whenever README, CLAUDE, deployment notes, content maps, agent dossiers, or skill folders need to reflect the real project structure and the current study-content workflow.
---

# Revision Doc Writer

## Overview

Use this skill to keep project docs short, accurate, and useful for future updates. It is tuned for small educational apps that mix content data, static deployment, and local agent/skill folders.

## Workflow

1. Inspect the actual folders before writing anything.
2. Document only what exists now:
   - app root
   - content files
   - local agents
   - local skills
3. Mention the Vercel root directory explicitly.
4. Keep commands runnable as written.
5. Keep docs terse and operational rather than tutorial-heavy.

## Output rules

- README should explain structure, commands, and deployment.
- CLAUDE should explain mission, paths, and update rules.
- Agent and skill docs should name their scope and constraints clearly.
- If a source gap exists, note it concretely with paths.
