import { useMemo, useState } from 'react'
import { courseChapters } from './content/courseData'
import type { QuizQuestion } from './content/types'
import './App.css'

type View = 'fiches' | 'flashcards' | 'quiz'

const viewLabels: Record<View, string> = {
  fiches: 'Fiches',
  flashcards: 'Flashcards',
  quiz: 'Quiz',
}

const getSourceHref = (sourceFile: string) => {
  if (!sourceFile.endsWith('.pdf')) {
    return null
  }

  return `/courses/${encodeURIComponent(sourceFile)}`
}

function App() {
  const ficheChapters = useMemo(
    () => courseChapters.filter((chapter) => chapter.providedByUser),
    [],
  )
  const [activeView, setActiveView] = useState<View>('fiches')
  const [activeChapterId, setActiveChapterId] = useState(courseChapters[0]?.id ?? '')
  const [flashcardChapterId, setFlashcardChapterId] = useState<'all' | string>('all')
  const [flashcardIndex, setFlashcardIndex] = useState(0)
  const [isFlashcardAnswerVisible, setIsFlashcardAnswerVisible] = useState(false)
  const [quizChapterId, setQuizChapterId] = useState<'all' | string>('all')
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({})
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false)

  const flashcards = useMemo(() => {
    const allFlashcards = courseChapters.flatMap((chapter) => chapter.flashcards)

    if (flashcardChapterId === 'all') {
      return allFlashcards
    }

    return allFlashcards.filter((flashcard) => flashcard.chapterId === flashcardChapterId)
  }, [flashcardChapterId])

  const quizQuestions = useMemo(() => {
    const allQuestions = courseChapters.flatMap((chapter) => chapter.quizQuestions)

    if (quizChapterId === 'all') {
      return allQuestions
    }

    return allQuestions.filter((question) => question.chapterId === quizChapterId)
  }, [quizChapterId])

  const activeChapter =
    courseChapters.find((chapter) => chapter.id === activeChapterId) ?? courseChapters[0]

  const safeFlashcardIndex = flashcards.length === 0 ? 0 : flashcardIndex % flashcards.length
  const activeFlashcard = flashcards[safeFlashcardIndex]
  const quizScore = quizQuestions.reduce((score, question) => {
    return score + Number(selectedAnswers[question.prompt] === question.correctAnswer)
  }, 0)

  const handleNextFlashcard = () => {
    if (flashcards.length === 0) {
      return
    }

    setFlashcardIndex((currentIndex) => (currentIndex + 1) % flashcards.length)
    setIsFlashcardAnswerVisible(false)
  }

  const handlePreviousFlashcard = () => {
    if (flashcards.length === 0) {
      return
    }

    setFlashcardIndex((currentIndex) =>
      currentIndex === 0 ? flashcards.length - 1 : currentIndex - 1,
    )
    setIsFlashcardAnswerVisible(false)
  }

  const handleShuffleFlashcard = () => {
    if (flashcards.length <= 1) {
      return
    }

    let nextIndex = flashcardIndex

    while (nextIndex === flashcardIndex) {
      nextIndex = Math.floor(Math.random() * flashcards.length)
    }

    setFlashcardIndex(nextIndex)
    setIsFlashcardAnswerVisible(false)
  }

  const handleQuizAnswer = (question: QuizQuestion, option: string) => {
    if (isQuizSubmitted) {
      return
    }

    setSelectedAnswers((currentAnswers) => ({
      ...currentAnswers,
      [question.prompt]: option,
    }))
  }

  const resetQuiz = () => {
    setSelectedAnswers({})
    setIsQuizSubmitted(false)
  }

  return (
    <div className="app-shell">
      <header className="hero-panel">
        <p className="eyebrow">Introduction to Social and Solidarity Economy</p>
        <div className="hero-copy">
          <div>
            <h1>Cours Cambodge Revision Studio</h1>
            <p className="hero-summary">
              Raw revision sheets from your notes, plus clean flashcards and quiz
              drills built across the chapter themes, theories, examples and exam
              stakes.
            </p>
          </div>
          <div className="hero-stats" aria-label="Course coverage overview">
            <article>
              <strong>{ficheChapters.length}</strong>
              <span>raw fiches</span>
            </article>
            <article>
              <strong>
                {courseChapters.reduce(
                  (total, chapter) => total + chapter.flashcards.length,
                  0,
                )}
              </strong>
              <span>flashcards</span>
            </article>
            <article>
              <strong>
                {courseChapters.reduce(
                  (total, chapter) => total + chapter.quizQuestions.length,
                  0,
                )}
              </strong>
              <span>quiz prompts</span>
            </article>
          </div>
        </div>

        <nav className="view-switcher" aria-label="Study modes">
          {(Object.keys(viewLabels) as View[]).map((view) => (
            <button
              key={view}
              type="button"
              className={view === activeView ? 'is-active' : ''}
              onClick={() => setActiveView(view)}
            >
              {viewLabels[view]}
            </button>
          ))}
        </nav>
      </header>

      <main className="content-grid">
        <aside className="chapter-rail">
          <div className="rail-heading">
            <h2>Chapter map</h2>
            <p>Raw fiches stay tied to your notes. Study assets expand the coverage.</p>
          </div>
          <div className="chapter-list" role="list">
            {courseChapters.map((chapter) => {
              const isSelected =
                activeView === 'fiches'
                  ? chapter.id === activeChapterId
                  : activeView === 'flashcards'
                    ? flashcardChapterId === chapter.id
                    : quizChapterId === chapter.id

              return (
                <button
                  key={chapter.id}
                  type="button"
                  className={`chapter-card ${isSelected ? 'is-selected' : ''}`}
                  onClick={() => {
                    setActiveChapterId(chapter.id)
                    setFlashcardChapterId(chapter.id)
                    setFlashcardIndex(0)
                    setIsFlashcardAnswerVisible(false)
                    setQuizChapterId(chapter.id)
                    resetQuiz()
                  }}
                >
                  <span className="chapter-number">{chapter.id}</span>
                  <span className="chapter-title">{chapter.title}</span>
                  <span className="chapter-meta">
                    {chapter.providedByUser ? 'From your fiche' : 'PDF-derived coverage'}
                  </span>
                </button>
              )
            })}
          </div>
        </aside>

        <section className="study-panel">
          {activeView === 'fiches' && activeChapter && (
            <div className="panel-stack">
              <div className="panel-header">
                <div>
                  <p className="panel-kicker">Raw fiche</p>
                  <h2>{activeChapter.title}</h2>
                  <p>{activeChapter.subtitle}</p>
                </div>
                <div className="source-list">
                  {activeChapter.sourceFiles.map((sourceFile) => {
                    const sourceHref = getSourceHref(sourceFile)

                    if (!sourceHref) {
                      return <span key={sourceFile}>{sourceFile}</span>
                    }

                    return (
                      <a
                        key={sourceFile}
                        href={sourceHref}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {sourceFile}
                      </a>
                    )
                  })}
                </div>
              </div>

              {activeChapter.rawFiche.map((section) => (
                <article key={section.heading} className="content-card">
                  <h3>{section.heading}</h3>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          )}

          {activeView === 'flashcards' && (
            <div className="panel-stack">
              <div className="panel-header">
                <div>
                  <p className="panel-kicker">Active recall</p>
                  <h2>Flashcards</h2>
                  <p>
                    Cleaned study prompts built from the notes and course PDFs to
                    cover definitions, theories, examples and exam tensions.
                  </p>
                </div>
                <label className="select-wrap">
                  <span>Scope</span>
                  <select
                    value={flashcardChapterId}
                    onChange={(event) => {
                      setFlashcardChapterId(event.target.value as 'all' | string)
                      setFlashcardIndex(0)
                      setIsFlashcardAnswerVisible(false)
                    }}
                  >
                    <option value="all">All chapters</option>
                    {courseChapters.map((chapter) => (
                      <option key={chapter.id} value={chapter.id}>
                        {chapter.title}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              {activeFlashcard && (
                <button
                  type="button"
                  className="flashcard flashcard-button"
                  onClick={() =>
                    setIsFlashcardAnswerVisible((isVisible) => !isVisible)
                  }
                >
                  <div className="flashcard-topline">
                    <span>
                      Card {safeFlashcardIndex + 1} / {flashcards.length}
                    </span>
                    <span>{activeFlashcard.chapterId}</span>
                  </div>
                  <h3>{activeFlashcard.question}</h3>
                  <p className={isFlashcardAnswerVisible ? 'answer is-visible' : 'answer'}>
                    {isFlashcardAnswerVisible
                      ? activeFlashcard.answer
                      : 'Click the card to reveal the answer.'}
                  </p>
                  {activeFlashcard.tags && (
                    <div className="tag-row">
                      {activeFlashcard.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  )}
                </button>
              )}

              {activeFlashcard && (
                <div className="action-row">
                  <button type="button" onClick={handlePreviousFlashcard}>
                    Previous
                  </button>
                  <button type="button" onClick={handleNextFlashcard}>
                    Next
                  </button>
                  <button type="button" onClick={handleShuffleFlashcard}>
                    Shuffle
                  </button>
                </div>
              )}
            </div>
          )}

          {activeView === 'quiz' && (
            <div className="panel-stack">
              <div className="panel-header">
                <div>
                  <p className="panel-kicker">Exam drill</p>
                  <h2>Quiz mode</h2>
                  <p>
                    Multiple-choice prompts that stay anchored in the course and
                    explain why the right answer is correct.
                  </p>
                </div>
                <label className="select-wrap">
                  <span>Scope</span>
                  <select
                    value={quizChapterId}
                    onChange={(event) => {
                      setQuizChapterId(event.target.value as 'all' | string)
                      resetQuiz()
                    }}
                  >
                    <option value="all">Mixed exam</option>
                    {courseChapters.map((chapter) => (
                      <option key={chapter.id} value={chapter.id}>
                        {chapter.title}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="quiz-toolbar">
                <span>
                  {Object.keys(selectedAnswers).length} / {quizQuestions.length} answered
                </span>
                {isQuizSubmitted ? (
                  <strong>
                    Score: {quizScore} / {quizQuestions.length}
                  </strong>
                ) : null}
              </div>

              {quizQuestions.map((question) => {
                const selectedAnswer = selectedAnswers[question.prompt]
                const isCorrect = selectedAnswer === question.correctAnswer

                return (
                  <article key={question.prompt} className="content-card quiz-card">
                    <div className="quiz-heading">
                      <span>{question.chapterId}</span>
                      <h3>{question.prompt}</h3>
                    </div>

                    <div className="quiz-options" role="radiogroup" aria-label={question.prompt}>
                      {question.options.map((option) => (
                        <button
                          key={option}
                          type="button"
                          className={[
                            'quiz-option',
                            selectedAnswer === option ? 'is-selected' : '',
                            isQuizSubmitted && option === question.correctAnswer
                              ? 'is-correct'
                              : '',
                            isQuizSubmitted &&
                            selectedAnswer === option &&
                            option !== question.correctAnswer
                              ? 'is-wrong'
                              : '',
                          ]
                            .filter(Boolean)
                            .join(' ')}
                          onClick={() => handleQuizAnswer(question, option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    {isQuizSubmitted && (
                      <div className={`quiz-feedback ${isCorrect ? 'is-correct' : 'is-wrong'}`}>
                        <p>
                          <strong>Correct answer:</strong> {question.correctAnswer}
                        </p>
                        <p>{question.explanation}</p>
                      </div>
                    )}
                  </article>
                )
              })}

              <div className="action-row">
                <button
                  type="button"
                  className="accent-button"
                  onClick={() => setIsQuizSubmitted(true)}
                  disabled={quizQuestions.length === 0}
                >
                  Submit quiz
                </button>
                <button type="button" onClick={resetQuiz}>
                  Reset answers
                </button>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

export default App
