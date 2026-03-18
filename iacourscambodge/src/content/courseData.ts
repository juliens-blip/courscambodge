import { chapter1 } from './chapter-1'
import { chapter2 } from './chapter-2'
import { chapter3Interlude } from './chapter-3-interlude'
import { chapter3NonStatutory } from './chapter-3-non-statutory'
import { chapter4 } from './chapter-4'
import { chapter5 } from './chapter-5'
import { chapter6 } from './chapter-6'
import type { CourseChapter } from './types'

export const courseChapters = [
  chapter1,
  chapter2,
  chapter3NonStatutory,
  chapter3Interlude,
  chapter4,
  chapter5,
  chapter6,
] satisfies CourseChapter[]

