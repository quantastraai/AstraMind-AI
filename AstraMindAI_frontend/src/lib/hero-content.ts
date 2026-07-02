export const HERO_CONTENT = {
  eyebrow: 'Smarter Decisions. Better Futures.',
  headline: {
    line1: 'Everything Your Business Knows.',
    line2: 'One AI That Remembers.',
  },
  description:
    'Upload documents, organize business knowledge, and get instant AI-powered answers.',
  primaryCta: 'Explore Solutions',
  secondaryCta: 'Watch Video',
  trustItems: [
    { label: 'Secure' },
    { label: 'Private' },
    { label: 'Built for modern teams' },
  ],
} as const

export const FLOW_STAGES = [
  { id: 'documents', label: 'Business Documents' },
  { id: 'memory', label: 'AI Memory' },
  { id: 'search', label: 'Semantic Search' },
  { id: 'chat', label: 'AI Chat' },
  { id: 'answers', label: 'Instant Answers' },
] as const

export const FLOATING_DOCUMENTS = [
  { id: 'doc-1', title: 'Q4 Strategy.pdf', lines: 3, position: 'top-left' },
  { id: 'doc-2', title: 'Product Roadmap', lines: 4, position: 'top-right' },
  { id: 'doc-3', title: 'Client Contracts', lines: 2, position: 'bottom-left' },
  { id: 'doc-4', title: 'Team Handbook', lines: 3, position: 'bottom-right' },
] as const
