import type { CourseChapter } from './types'

export const chapter3Interlude = {
  id: 'c3-interlude-transversal-topics',
  slug: 'interlude-transversal-topics',
  title: 'Interlude - Transversal topics',
  subtitle: 'Four directions in SSE and the logic of social innovation.',
  sourceFiles: ['C3Interlude Transversal topics.pdf'],
  providedByUser: false,
  rawFiche: [
    {
      heading: 'Four directions in SSE',
      bullets: [
        'Acting in and by the market',
        'Acting through the market',
        'Acting outside the market',
        'Sidestepping or avoiding the market',
      ],
    },
    {
      heading: 'What the four directions mean',
      bullets: [
        'Assimilation: doing the same thing as ordinary businesses, but inside the market.',
        'Problem-solving: using market solutions to answer social needs.',
        'Repairing failures: correcting social and ecological problems outside the market.',
        'Alternative: looking for another economy and new standards of living.',
      ],
    },
    {
      heading: 'Isomorphic tendencies',
      paragraphs: [
        'Acting in the market often creates isomorphic tendencies, meaning that organizations conform to market-related rules even when their original project is social.',
      ],
    },
    {
      heading: 'Bridge to the next chapters',
      bullets: [
        'Failures',
        'Empowerment',
        'Utility and impact',
        'Partnerships',
        'Resources',
        'Democracy',
        'Social innovation',
      ],
    },
  ],
  flashcards: [
    {
      question: 'What are the four main directions in SSE from the interlude?',
      answer: 'Acting in and by the market, acting through the market, acting outside the market, and sidestepping the market.',
      chapterId: 'c3-interlude-transversal-topics',
      tags: ['framework', 'market'],
    },
    {
      question: 'What does assimilation mean in this framework?',
      answer: 'Doing the same thing as ordinary businesses, but inside the market.',
      chapterId: 'c3-interlude-transversal-topics',
      tags: ['assimilation', 'market'],
    },
    {
      question: 'What does problem-solving mean here?',
      answer: 'Using market solutions to answer social needs.',
      chapterId: 'c3-interlude-transversal-topics',
      tags: ['problem-solving', 'market'],
    },
    {
      question: 'What does repairing failures mean?',
      answer: 'Correcting social and ecological problems outside the market.',
      chapterId: 'c3-interlude-transversal-topics',
      tags: ['repairing-failures', 'non-market'],
    },
    {
      question: 'What does alternative mean in the interlude?',
      answer: 'Searching for another economy and new standards of living.',
      chapterId: 'c3-interlude-transversal-topics',
      tags: ['alternative', 'economy'],
    },
    {
      question: 'What are isomorphic tendencies?',
      answer: 'The tendency of organizations to conform to market-related rules.',
      chapterId: 'c3-interlude-transversal-topics',
      tags: ['isomorphism', 'theory'],
    },
  ],
  quizQuestions: [
    {
      prompt: 'Which option best describes the "repairing failures" direction?',
      options: [
        'Correcting social and ecological problems outside the market',
        'Maximizing dividends',
        'Replacing all public institutions',
        'Eliminating solidarity',
      ],
      correctAnswer: 'Correcting social and ecological problems outside the market',
      explanation: 'The interlude uses this label for non-market correction of social and ecological issues.',
      chapterId: 'c3-interlude-transversal-topics',
    },
    {
      prompt: 'What is the meaning of acting through the market?',
      options: [
        'Problem-solving by market solutions to social needs',
        'Avoiding all exchange',
        'Creating a government ministry',
        'Eliminating customer choice',
      ],
      correctAnswer: 'Problem-solving by market solutions to social needs',
      explanation: "This is the interlude's label for market-based social problem solving.",
      chapterId: 'c3-interlude-transversal-topics',
    },
    {
      prompt: 'What does the alternative direction search for?',
      options: [
        'Another economy and new standards of living',
        'Only the lowest prices',
        'More bureaucracy',
        'A centralized state market',
      ],
      correctAnswer: 'Another economy and new standards of living',
      explanation: 'The interlude explicitly defines this direction as an alternative to the mainstream market model.',
      chapterId: 'c3-interlude-transversal-topics',
    },
    {
      prompt: 'What is the main warning attached to acting in the market?',
      options: [
        'Isomorphic tendencies',
        'Guaranteed public subsidies',
        'No need for governance',
        'Automatic mutualism',
      ],
      correctAnswer: 'Isomorphic tendencies',
      explanation: 'Organizations can end up conforming to market-related rules and losing their original identity.',
      chapterId: 'c3-interlude-transversal-topics',
    },
    {
      prompt: 'Which of the following is one of the four directions in SSE?',
      options: [
        'Acting outside the market',
        'Acting without any stakeholders',
        'Acting against all organizations',
        'Acting only through taxes',
      ],
      correctAnswer: 'Acting outside the market',
      explanation: 'This is one of the four transversal directions shown in the interlude diagram.',
      chapterId: 'c3-interlude-transversal-topics',
    },
  ],
} satisfies CourseChapter
