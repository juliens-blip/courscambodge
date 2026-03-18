export type ChapterId =
  | 'chapter-1'
  | 'chapter-2'
  | 'chapter-3'
  | 'chapter-4'
  | 'chapter-5'
  | 'chapter-6'

export type ChapterFilter = 'all' | ChapterId

export interface Chapter {
  id: ChapterId
  shortLabel: string
  title: string
  rawSheet: string
  sourcePath?: string
}

export interface Flashcard {
  id: string
  chapterId: ChapterId
  topic: string
  prompt: string
  answer: string
}

export interface QuizQuestion {
  id: string
  chapterId: ChapterId
  topic: string
  prompt: string
  choices: string[]
  correctIndex: number
  explanation: string
}

export interface CourseResource {
  id: string
  label: string
  kind: string
  path: string
}
