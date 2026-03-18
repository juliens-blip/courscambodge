import type { CourseChapter } from './types'

export const chapter1 = {
  id: 'c1-birds-eye-view',
  slug: 'birds-eye-view-of-sse',
  title: 'Chapter 1 - A bird\'s eye view of SSE',
  subtitle: 'Definition, structure, and worldwide recognition of Social and Solidarity Economy.',
  sourceFiles: ['C1 Birds eye.pdf'],
  providedByUser: true,
  rawFiche: [
    {
      heading: 'Definition',
      paragraphs: [
        'SSE is a set of economic activities that contribute to empowering people through solidarity, governance, and profit rules that are different from ordinary business.',
        'Economic activities can include producing, exchanging, renting, funding, giving, and providing services. They are not necessarily limited to market prices.',
      ],
      bullets: [
        'Empowering means creating more power or more capacities for people.',
        'Solidarity means the activity is not driven only by self-interest, but also by community well-being and altruism.',
        'Governance is participatory, and often democratic, rather than based only on capital ownership.',
        'Profit is secondary, if it exists at all, because social missions come first.',
      ],
    },
    {
      heading: 'What SSE is and is not',
      bullets: [
        'SSE is another kind of entrepreneurship: it can do the same things as ordinary business, but differently.',
        'It can also do different things, such as care for street children or other social missions.',
        'SSE is not the same as private profit-oriented firms.',
        'SSE is also different from public firms and government administration.',
      ],
    },
    {
      heading: 'Types of organizations',
      bullets: [
        'Cooperatives',
        'Mutual societies',
        'Civil society organizations such as associations, NGOs, and CBOs',
        'Foundations',
        'Non-statutory forms such as social enterprises and social business',
      ],
    },
    {
      heading: 'Who benefits',
      bullets: [
        'Mutual-benefit organizations work by and for insiders, especially members.',
        'Public-benefit organizations serve external stakeholders rather than insiders.',
        'Some organizations are mixed or hybrid, depending on their mission and resources.',
      ],
    },
    {
      heading: 'Cambodia and global recognition',
      paragraphs: [
        'In Cambodia, SSE appears through community-based organizations, associations, cooperatives, local NGOs, international NGOs, and social enterprises such as Digital Divide Data or Equitable Cambodia.',
        'Worldwide, SSE has expanded through self-help traditions, industrial-era needs, new social protection systems, and critical visions of the economy.',
      ],
      bullets: [
        'ILO and the UN now recognize SSE as part of sustainable development.',
        'The UN Resolution A/77/L.60 in 2023 officially promoted SSE for sustainable development.',
      ],
    },
  ],
  flashcards: [
    {
      question: 'What is Social and Solidarity Economy in one sentence?',
      answer: 'It is a set of economic activities that empower people through solidarity, participatory governance, and social missions that come before profit.',
      chapterId: 'c1-birds-eye-view',
      tags: ['definition', 'core-concept'],
    },
    {
      question: 'How does SSE differ from ordinary business?',
      answer: 'It can do the same activities as ordinary business, but it organizes them around social missions, solidarity, and participatory governance.',
      chapterId: 'c1-birds-eye-view',
      tags: ['comparison', 'business'],
    },
    {
      question: 'What does "empowering" mean in SSE?',
      answer: 'It means the activity creates more power, autonomy, or capacities for people.',
      chapterId: 'c1-birds-eye-view',
      tags: ['definition', 'empowerment'],
    },
    {
      question: 'Which organizations are usually included in SSE?',
      answer: 'Cooperatives, mutual societies, associations, NGOs, CBOs, foundations, social enterprises, and social business.',
      chapterId: 'c1-birds-eye-view',
      tags: ['types', 'organizations'],
    },
    {
      question: 'What is the difference between mutual-benefit and public-benefit organizations?',
      answer: 'Mutual-benefit organizations serve members, while public-benefit organizations serve external stakeholders and the wider community.',
      chapterId: 'c1-birds-eye-view',
      tags: ['beneficiaries', 'structure'],
    },
    {
      question: 'Name one Cambodian SSE example from the chapter.',
      answer: 'Digital Divide Data, Equitable Cambodia, or a community-based organization, cooperative, or local NGO.',
      chapterId: 'c1-birds-eye-view',
      tags: ['cambodia', 'examples'],
    },
    {
      question: 'Why is SSE internationally recognized?',
      answer: 'Because it contributes to employment, social protection, and sustainable development, and is now recognized by the ILO and the UN.',
      chapterId: 'c1-birds-eye-view',
      tags: ['global', 'recognition'],
    },
  ],
  quizQuestions: [
    {
      prompt: 'What is the best definition of SSE?',
      options: [
        'A set of economic activities that prioritize social missions, solidarity, and participatory governance',
        'Any company that gives part of its profits to charity',
        'A government program for social welfare',
        'A business model focused only on low prices',
      ],
      correctAnswer: 'A set of economic activities that prioritize social missions, solidarity, and participatory governance',
      explanation: 'The course defines SSE by its economic activity, solidarity, governance, and secondary place of profit.',
      chapterId: 'c1-birds-eye-view',
    },
    {
      prompt: 'Which statement best matches SSE entrepreneurship?',
      options: [
        'It does the same things as ordinary business, but differently',
        'It avoids all market activity',
        'It is always a public administration',
        'It is only about individual profit',
      ],
      correctAnswer: 'It does the same things as ordinary business, but differently',
      explanation: 'SSE can operate in the same sectors as ordinary firms but with different rules and priorities.',
      chapterId: 'c1-birds-eye-view',
    },
    {
      prompt: 'Which group belongs to mutual-benefit organizations?',
      options: ['Cooperatives', 'Foundations', 'International organizations', 'Central banks'],
      correctAnswer: 'Cooperatives',
      explanation: 'Mutual-benefit organizations are built by and for insiders, especially members.',
      chapterId: 'c1-birds-eye-view',
    },
    {
      prompt: 'Which example is specifically cited for Cambodia?',
      options: ['Digital Divide Data', 'World Bank', 'European Commission', 'International Monetary Fund'],
      correctAnswer: 'Digital Divide Data',
      explanation: 'DDD is one of the examples named in the chapter for Cambodian SSE-related practice.',
      chapterId: 'c1-birds-eye-view',
    },
    {
      prompt: 'What did the UN do in 2023?',
      options: [
        'It adopted a resolution promoting SSE for sustainable development',
        'It banned cooperative enterprises',
        'It replaced the ILO definition',
        'It limited SSE to public institutions',
      ],
      correctAnswer: 'It adopted a resolution promoting SSE for sustainable development',
      explanation: 'The chapter notes the 2023 UN resolution A/77/L.60 on SSE and sustainable development.',
      chapterId: 'c1-birds-eye-view',
    },
  ],
} satisfies CourseChapter
