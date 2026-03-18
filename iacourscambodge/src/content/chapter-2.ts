import type { CourseChapter } from './types'

export const chapter2 = {
  id: 'c2-statutory-sse',
  slug: 'statutory-sse',
  title: 'Chapter 2 - Types of OSSE: Statutory SSE',
  subtitle: 'Cooperatives, mutual societies, associations, and foundations.',
  sourceFiles: ['C2 Statutory SSE[46].pdf'],
  providedByUser: true,
  rawFiche: [
    {
      heading: 'OSSE and statutory forms',
      paragraphs: [
        'Organizations of SSE first developed through specific legal statutes. The main statutory family is often summarized as CMAF: cooperatives, mutual societies, associations, and foundations.',
      ],
      bullets: [
        'These forms define governance, ownership, objectives, and profit rules.',
        'They all combine a social mission with special rules that reduce pure profit logic.',
      ],
    },
    {
      heading: 'Cooperatives',
      paragraphs: [
        'A cooperative is an autonomous association of persons united voluntarily to meet common needs through jointly owned and democratically controlled enterprises.',
      ],
      bullets: [
        'Members buy shares, become owners, and the shares are redeemable but not saleable.',
        'Cooperatives create a double quality: member plus another role such as customer, worker, or producer.',
        'Main families include financial cooperatives, agricultural cooperatives, and worker cooperatives.',
        'The cooperative principles are voluntary membership, democratic control, member economic participation, autonomy, education, cooperation among cooperatives, and concern for community.',
      ],
    },
    {
      heading: 'Mutual societies',
      paragraphs: [
        'Mutual societies provide social-welfare protection to members and their families without a profit motive.',
      ],
      bullets: [
        'They work through solidarity, non-discrimination, and often income-related fees.',
        'Main activities are health insurance, pensions, care services, and general insurance.',
        'They can help people who are excluded from for-profit insurance markets.',
      ],
    },
    {
      heading: 'Associations and NGOs',
      bullets: [
        'An association is a grouping of persons aiming at a common interest on a not-for-profit basis.',
        'In Cambodia, CSO often includes associations, NGOs, and CBOs.',
        'Their resources can be market-based or non-market-based, such as grants, donations, fees, and volunteering.',
        'Volunteer motives can include recognition, networking, charity, experience, reciprocity, and doing good.',
      ],
    },
    {
      heading: 'Foundations',
      paragraphs: [
        'A foundation is a non-profit legal entity created by individuals, families, firms, or governments to fund or implement common-interest purposes.',
      ],
      bullets: [
        'Foundations have no members.',
        'They often act as financial intermediaries between donors and beneficiaries.',
        'They can reflect government policy, corporate CSR, or individual philanthropy.',
        'Their legitimacy and the risk of state withdrawal are key debates.',
      ],
    },
    {
      heading: 'Important Cambodian references',
      bullets: [
        'Sky Insurance was mentioned as an NGO-linked protection system for poor people.',
        'Krousar Thmey is cited as a foundation under NGO statute in Cambodia.',
        'The chapter also notes the formal and regulatory recognition of NGOs in Cambodia.',
      ],
    },
  ],
  flashcards: [
    {
      question: 'What does CMAF stand for?',
      answer: 'Cooperatives, Mutuals, Associations, and Foundations.',
      chapterId: 'c2-statutory-sse',
      tags: ['acronym', 'statutes'],
    },
    {
      question: 'What is the key rule about cooperative shares?',
      answer: 'They are redeemable but not saleable, so they are not liquid speculative assets.',
      chapterId: 'c2-statutory-sse',
      tags: ['cooperative', 'capital'],
    },
    {
      question: 'What is "double quality" in a cooperative?',
      answer: 'A stakeholder has two roles, for example member plus customer, or member plus worker, or member plus producer.',
      chapterId: 'c2-statutory-sse',
      tags: ['cooperative', 'governance'],
    },
    {
      question: 'Name the seven ICA cooperative principles.',
      answer: 'Voluntary membership, one person one vote, member economic participation, autonomy, education, cooperation among cooperatives, and concern for community.',
      chapterId: 'c2-statutory-sse',
      tags: ['principles', 'ica'],
    },
    {
      question: 'What is the purpose of a mutual society?',
      answer: 'To protect members and their families against social risks without a profit motive.',
      chapterId: 'c2-statutory-sse',
      tags: ['mutual', 'definition'],
    },
    {
      question: 'What are the main resources of associations and NGOs?',
      answer: 'Membership fees, donations, grants, subsidies, volunteering, and sometimes market income.',
      chapterId: 'c2-statutory-sse',
      tags: ['associations', 'resources'],
    },
    {
      question: 'Why are foundations different from associations?',
      answer: 'Foundations have no members and are created to fund or implement common-interest purposes through an endowment or similar resources.',
      chapterId: 'c2-statutory-sse',
      tags: ['foundations', 'comparison'],
    },
    {
      question: 'What are NGO drifts?',
      answer: 'Business drift, political drift, and religious drift.',
      chapterId: 'c2-statutory-sse',
      tags: ['ngos', 'risks'],
    },
    {
      question: 'What is a key debate around foundations?',
      answer: 'Whether private foundations are legitimate when they influence public priorities and whether they encourage state withdrawal from social issues.',
      chapterId: 'c2-statutory-sse',
      tags: ['foundations', 'debate'],
    },
  ],
  quizQuestions: [
    {
      prompt: 'Which option best defines a cooperative?',
      options: [
        'An autonomous association of persons united voluntarily to meet common needs through jointly owned and democratically controlled enterprises',
        'A public agency funded entirely by taxes',
        'A company that distributes all profits as dividends',
        'A charity with no economic activity',
      ],
      correctAnswer: 'An autonomous association of persons united voluntarily to meet common needs through jointly owned and democratically controlled enterprises',
      explanation: 'This is the course definition of a cooperative.',
      chapterId: 'c2-statutory-sse',
    },
    {
      prompt: 'Which statement about cooperative shares is correct?',
      options: [
        'They are redeemable but not saleable',
        'They are freely traded on stock markets',
        'They are always speculative',
        'They have no link to ownership',
      ],
      correctAnswer: 'They are redeemable but not saleable',
      explanation: 'The chapter stresses that cooperative shares are not liquid market assets.',
      chapterId: 'c2-statutory-sse',
    },
    {
      prompt: 'Which choice is a correct example of "double quality"?',
      options: [
        'A farmer who is both member and producer',
        'A donor who gives money anonymously',
        'A minister who supervises a public agency',
        'A customer who never participates',
      ],
      correctAnswer: 'A farmer who is both member and producer',
      explanation: 'Double quality means a stakeholder holds the member role plus another functional role.',
      chapterId: 'c2-statutory-sse',
    },
    {
      prompt: 'What is the main mission of mutual societies?',
      options: [
        'To provide protection against social risks for members and their families',
        'To maximize dividends for shareholders',
        'To regulate banks',
        'To replace all public services',
      ],
      correctAnswer: 'To provide protection against social risks for members and their families',
      explanation: 'Mutual societies are solidarity-based protection systems without a profit motive.',
      chapterId: 'c2-statutory-sse',
    },
    {
      prompt: 'Which of these is an NGO drift mentioned in the chapter?',
      options: ['Business drift', 'Market drift', 'Technical drift', 'Urban drift'],
      correctAnswer: 'Business drift',
      explanation: 'The chapter names business, political, and religious drift as key risks for NGOs.',
      chapterId: 'c2-statutory-sse',
    },
    {
      prompt: 'What is the strongest difference between a foundation and an association?',
      options: [
        'A foundation has no members',
        'A foundation cannot fund projects',
        'An association cannot have a social mission',
        'A foundation must be owned by workers',
      ],
      correctAnswer: 'A foundation has no members',
      explanation: 'Foundations are created by donors or founders but do not have members like associations do.',
      chapterId: 'c2-statutory-sse',
    },
  ],
} satisfies CourseChapter
