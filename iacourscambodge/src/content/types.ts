export interface RawFicheSection {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
}

export interface Flashcard {
  question: string
  answer: string
  chapterId: string
  tags?: string[]
}

export interface QuizQuestion {
  prompt: string
  options: string[]
  correctAnswer: string
  explanation: string
  chapterId: string
}

export interface CourseChapter {
  id: string
  slug: string
  title: string
  subtitle: string
  sourceFiles: string[]
  providedByUser: boolean
  rawFiche: RawFicheSection[]
  flashcards: Flashcard[]
  quizQuestions: QuizQuestion[]
}
