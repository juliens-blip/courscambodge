import type { QuizQuestion } from './types'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    chapterId: 'chapter-1',
    topic: 'Definition',
    prompt: 'Which statement best defines SSE?',
    choices: [
      'Economic activity focused only on public ownership.',
      'Economic activity combining social objectives, solidarity, and democratic governance.',
      'Informal community activity without any economic dimension.',
      'Private business that maximizes shareholder profit.',
    ],
    correctIndex: 1,
    explanation:
      'Chapter 1 defines SSE as economic activity with social objectives, solidarity, and democratic governance, where profit is secondary.',
  },
  {
    id: 'q2',
    chapterId: 'chapter-1',
    topic: 'Principles',
    prompt: 'Which concept is explicitly listed as a core principle of SSE?',
    choices: [
      'Empowerment',
      'Speculation',
      'Capital concentration',
      'Privatization',
    ],
    correctIndex: 0,
    explanation:
      'Empowerment is one of the four key principles in the chapter, together with solidarity, democratic governance, and social objective before profit.',
  },
  {
    id: 'q3',
    chapterId: 'chapter-1',
    topic: 'Examples',
    prompt: 'Which organization is given as an SSE example in Cambodia?',
    choices: [
      'Digital Divide Data',
      'A stock exchange',
      'A speculative hedge fund',
      'A government ministry',
    ],
    correctIndex: 0,
    explanation:
      'Digital Divide Data is used as a Cambodian example of SSE in the notes.',
  },
  {
    id: 'q4',
    chapterId: 'chapter-2',
    topic: 'Cooperatives',
    prompt: 'What makes cooperative shares different from capitalist company shares?',
    choices: [
      'They are always more expensive.',
      'They are redeemable but not saleable for speculation.',
      'They guarantee dividends every year.',
      'They can only be owned by the state.',
    ],
    correctIndex: 1,
    explanation:
      'The notes say cooperative shares are redeemable but not saleable, which prevents speculation.',
  },
  {
    id: 'q5',
    chapterId: 'chapter-2',
    topic: 'Mutual societies',
    prompt: 'What is the main role of mutual societies?',
    choices: [
      'Sell luxury goods',
      'Provide social protection without a profit objective',
      'Fund political campaigns',
      'Manage export monopolies',
    ],
    correctIndex: 1,
    explanation:
      'Mutual societies focus on health insurance, pensions, and related protection services without profit as the goal.',
  },
  {
    id: 'q6',
    chapterId: 'chapter-2',
    topic: 'Foundations',
    prompt: 'What is the major structural difference between an association and a foundation?',
    choices: [
      'Foundations have no members.',
      'Associations cannot receive donations.',
      'Foundations always distribute profits.',
      'Associations cannot hire employees.',
    ],
    correctIndex: 0,
    explanation:
      'A foundation is a non-profit structure without members, which is a major distinction from associations.',
  },
  {
    id: 'q7',
    chapterId: 'chapter-3',
    topic: 'Social enterprise',
    prompt: 'According to the course, social enterprises emerged strongly in the USA during the 1980s mainly because:',
    choices: [
      'Public subsidies increased a lot.',
      'Non-profits needed market income after subsidy reductions.',
      'Cooperatives were banned.',
      'Stock markets became more regulated.',
    ],
    correctIndex: 1,
    explanation:
      'The notes connect the rise of social enterprise to subsidy reductions during the Reagan era.',
  },
  {
    id: 'q8',
    chapterId: 'chapter-3',
    topic: 'Social business',
    prompt: 'Which example is used for village-based clean water social business?',
    choices: ['AMRU Rice', '1001 Fontaines', 'Mondragon', 'Sky Insurance'],
    correctIndex: 1,
    explanation:
      '1001 Fontaines is the social business example used for clean water access.',
  },
  {
    id: 'q9',
    chapterId: 'chapter-3',
    topic: 'Popular economy',
    prompt: 'Which example belongs to popular economy?',
    choices: [
      'A tontine savings group',
      'A multinational foundation',
      'A ministry subsidy program',
      'A listed corporation',
    ],
    correctIndex: 0,
    explanation:
      'Tontines are classic grassroots savings systems used as examples of popular economy.',
  },
  {
    id: 'q10',
    chapterId: 'chapter-4',
    topic: 'Theory',
    prompt: 'Which economic form refers to centrally collected resources that are redistributed?',
    choices: ['Reciprocity', 'Householding', 'Redistribution', 'Barter'],
    correctIndex: 2,
    explanation:
      'In Polanyi, redistribution covers public funding, grants, and similar centrally collected resources.',
  },
  {
    id: 'q11',
    chapterId: 'chapter-4',
    topic: 'Risks',
    prompt: 'What is the best definition of institutional isomorphism in SSE?',
    choices: [
      'When organizations merge into one legal structure',
      'When organizations copy capitalist models and lose part of their identity',
      'When every member receives the same income',
      'When public subsidies are prohibited',
    ],
    correctIndex: 1,
    explanation:
      'Institutional isomorphism means becoming increasingly similar to mainstream capitalist organizations.',
  },
  {
    id: 'q12',
    chapterId: 'chapter-4',
    topic: 'Governance',
    prompt: 'Which issue is a governance risk in SSE?',
    choices: [
      'Elite capture',
      'Guaranteed member participation every week',
      'Automatic mission protection',
      'No dependence on partners',
    ],
    correctIndex: 0,
    explanation:
      'The chapter lists elite capture among the main governance risks.',
  },
  {
    id: 'q13',
    chapterId: 'chapter-5',
    topic: 'Failure correction',
    prompt: 'Which theory says SSE appears because government does not satisfy all social needs?',
    choices: [
      'State failure theory',
      'Householding theory',
      'Impact investing theory',
      'Isomorphism theory',
    ],
    correctIndex: 0,
    explanation:
      'Weisbrod state failure theory explains SSE as a response to unmet needs left by government.',
  },
  {
    id: 'q14',
    chapterId: 'chapter-5',
    topic: 'Empowerment',
    prompt: 'Which type of power means collective power developed by acting together?',
    choices: ['Power over', 'Power with', 'Power to', 'Power within'],
    correctIndex: 1,
    explanation:
      'Power with is collective power built through cooperation, such as in cooperatives or self-help groups.',
  },
  {
    id: 'q15',
    chapterId: 'chapter-5',
    topic: 'Social innovation',
    prompt: 'Which element is one of the five components of social innovation?',
    choices: [
      'Guaranteed financial return',
      'Grassroots solutions',
      'Privatization of all services',
      'Removal of local actors',
    ],
    correctIndex: 1,
    explanation:
      'Grassroots solutions are explicitly listed as a key component of social innovation.',
  },
  {
    id: 'q16',
    chapterId: 'chapter-6',
    topic: 'Concepts',
    prompt: 'Which statement about social utility is correct?',
    choices: [
      'It is always expressed in dollars.',
      'It is a qualitative contribution produced by SSE.',
      'It only concerns internal members.',
      'It excludes externalities.',
    ],
    correctIndex: 1,
    explanation:
      'Social utility is the qualitative contribution of SSE at several levels, not a purely monetary indicator.',
  },
  {
    id: 'q17',
    chapterId: 'chapter-6',
    topic: 'Impact logic',
    prompt: 'How is real impact identified in the chapter?',
    choices: [
      'By counting only inputs',
      'By measuring outputs and ignoring outcomes',
      'By deducting deadweight from outcomes',
      'By adding every externality without verification',
    ],
    correctIndex: 2,
    explanation:
      'Impact is the attributable effect, so the notes present it as outcome minus deadweight.',
  },
  {
    id: 'q18',
    chapterId: 'chapter-6',
    topic: 'Measurement limits',
    prompt: 'Which problem is explicitly mentioned for social impact measurement?',
    choices: [
      'It is too simple to be useful.',
      'Counterfactuals are difficult to establish.',
      'It never requires data collection.',
      'It only works for private firms.',
    ],
    correctIndex: 1,
    explanation:
      'One of the major difficulties is identifying what would have happened without the project.',
  },
]
