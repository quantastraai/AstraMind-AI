import { useState } from 'react'

import { NAV_ITEMS } from '@/lib/navigation'

import { NavItem } from './NavItem'

interface NavLinksProps {
  onNavigate?: () => void
  className?: string
}

export function NavLinks({ onNavigate, className }: NavLinksProps) {
  const [active, setActive] = useState<string>(NAV_ITEMS[0].href)

  return (
    <nav className={className} aria-label="Main navigation">
      <ul className="flex items-center gap-[18px]">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <NavItem
              label={item.label}
              href={item.href}
              isActive={active === item.href}
              onClick={() => {
                setActive(item.href)
                onNavigate?.()
              }}
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}
