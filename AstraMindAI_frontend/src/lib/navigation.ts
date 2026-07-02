export const NAV_ITEMS = [
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Resources', href: '#resources' },
] as const

export type NavItem = (typeof NAV_ITEMS)[number]
