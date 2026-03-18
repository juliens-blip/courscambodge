import type { CourseChapter } from './types'

export const chapter4 = {
  id: 'c4-partnerships-resources-governance',
  slug: 'partnerships-resources-governance',
  title: 'Chapter 4 - Partnerships, resources and governance',
  subtitle: 'Polanyi, resource hybridization, partnerships, and democratic control.',
  sourceFiles: ['C4 Partners Res Gov.pdf'],
  providedByUser: true,
  rawFiche: [
    {
      heading: 'Polanyi and the plurality of economic forms',
      paragraphs: [
        'Polanyi argues that real-world economies combine several forms: market exchange, reciprocity, redistribution, and householding.',
      ],
      bullets: [
        'Market exchange is based on a price that covers costs.',
        'Reciprocity is reciprocal support between persons or groups.',
        'Redistribution centralizes resources and then re-injects them.',
        'Householding refers to managing households and community sharing.',
      ],
    },
    {
      heading: 'Resource hybridization',
      paragraphs: [
        'SSE organizations usually combine several resource types, which means their project and their resources influence each other.',
      ],
      bullets: [
        'Market resources',
        'Redistributive resources',
        'Resources from reciprocity or gifts',
        'Member contributions such as fees or shares',
      ],
    },
    {
      heading: 'Partnerships',
      bullets: [
        'Partnerships bring funds, skills, visibility, supply chains, and technical support.',
        'Partners can be other SSE organizations, private companies, governments, or international organizations.',
        'Partnerships are essential but can also create dependency.',
      ],
    },
    {
      heading: 'Governance',
      paragraphs: [
        'Democratic governance in SSE means one person, one vote at the general assembly and a bottom-up decision process.',
      ],
      bullets: [
        'Governance can be weakened by once-a-year democracy.',
        'Large organizations can create distance between boards and members.',
        'A self-reproducing elite and autocracy are key risks.',
      ],
    },
    {
      heading: 'Key tension',
      paragraphs: [
        'The chapter shows a double relationship between resources and projects: resources shape the project, and the project also shapes the kinds of resources the organization can attract.',
      ],
    },
  ],
  flashcards: [
    {
      question: 'Which four economic forms does Polanyi highlight?',
      answer: 'Market exchange, reciprocity, redistribution, and householding.',
      chapterId: 'c4-partnerships-resources-governance',
      tags: ['polanyi', 'theory'],
    },
    {
      question: 'What is resource hybridization?',
      answer: 'The combination of different resource types, such as market, public, reciprocal, and member-based resources.',
      chapterId: 'c4-partnerships-resources-governance',
      tags: ['resources', 'hybridization'],
    },
    {
      question: 'Why are partnerships important for SSE?',
      answer: 'They bring funds, skills, visibility, supply chains, and access to needed resources.',
      chapterId: 'c4-partnerships-resources-governance',
      tags: ['partnerships', 'resources'],
    },
    {
      question: 'What can create dependency in SSE organizations?',
      answer: 'Heavy reliance on a small number of resource providers or partners.',
      chapterId: 'c4-partnerships-resources-governance',
      tags: ['dependency', 'risk'],
    },
    {
      question: 'What is democratic governance in SSE?',
      answer: 'A bottom-up system where the general assembly follows one person, one vote.',
      chapterId: 'c4-partnerships-resources-governance',
      tags: ['governance', 'democracy'],
    },
    {
      question: 'What is a major risk to democratic governance?',
      answer: 'A self-reproducing elite that stays distant from members and gradually weakens democracy.',
      chapterId: 'c4-partnerships-resources-governance',
      tags: ['governance', 'risk'],
    },
    {
      question: 'What is the relation between resources and project in SSE?',
      answer: 'Each influences the other: the available resources shape the project, and the project shapes the resources the organization seeks.',
      chapterId: 'c4-partnerships-resources-governance',
      tags: ['resources', 'project'],
    },
    {
      question: 'What does the chapter say about market resources in SSE?',
      answer: 'They are possible, but they can introduce competition, efficiency pressures, and possible mission drift.',
      chapterId: 'c4-partnerships-resources-governance',
      tags: ['market', 'mission-drift'],
    },
  ],
  quizQuestions: [
    {
      prompt: "Which list matches Polanyi's economic forms?",
      options: [
        'Market exchange, reciprocity, redistribution, and householding',
        'Production, tax, lobbying, and export',
        'Stocks, bonds, salaries, and rent',
        'Wages, profits, bonuses, and dividends',
      ],
      correctAnswer: 'Market exchange, reciprocity, redistribution, and householding',
      explanation: 'The chapter uses Polanyi to show that economies are plural, not just market-based.',
      chapterId: 'c4-partnerships-resources-governance',
    },
    {
      prompt: 'What is the strongest definition of resource hybridization?',
      options: [
        'Combining market, public, reciprocal, and member resources',
        'Using only private donations',
        'Replacing all resources with debt',
        'Avoiding partnerships',
      ],
      correctAnswer: 'Combining market, public, reciprocal, and member resources',
      explanation: 'Hybridization is about mixing several resource origins inside one organization.',
      chapterId: 'c4-partnerships-resources-governance',
    },
    {
      prompt: 'What do partnerships usually bring to an OSSE?',
      options: ['Funds, skills, visibility, and supply chains', 'Only votes', 'Only laws', 'Only dividends'],
      correctAnswer: 'Funds, skills, visibility, and supply chains',
      explanation: 'The chapter lists these as the main benefits of partnerships.',
      chapterId: 'c4-partnerships-resources-governance',
    },
    {
      prompt: 'Which statement best describes democratic governance in SSE?',
      options: [
        'One person, one vote at the general assembly',
        'One share, one vote without exception',
        'Decisions only by founders',
        'No member participation',
      ],
      correctAnswer: 'One person, one vote at the general assembly',
      explanation: 'This is the core democratic rule highlighted in the chapter.',
      chapterId: 'c4-partnerships-resources-governance',
    },
    {
      prompt: 'What is a main governance risk mentioned in the chapter?',
      options: ['Autocracy and dead democracy', 'Too many volunteers', 'Excess tourism', 'Low rainfall'],
      correctAnswer: 'Autocracy and dead democracy',
      explanation: 'The chapter warns that participation can become formal only and no longer meaningful.',
      chapterId: 'c4-partnerships-resources-governance',
    },
  ],
} satisfies CourseChapter
