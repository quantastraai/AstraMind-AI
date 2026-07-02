import { ChevronDown } from 'lucide-react'
import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string
  href: string
  isActive?: boolean
}

export const NavItem = forwardRef<HTMLAnchorElement, NavItemProps>(
  ({ label, href, isActive = false, className, onClick, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        onClick={onClick}
        className={cn(
          'group relative flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 ease-out',
          isActive
            ? 'text-foreground'
            : 'text-neutral-500 hover:text-neutral-900',
          className,
        )}
        {...props}
      >
        <span
          className={cn(
            'absolute inset-0 rounded-full border border-transparent bg-white/0 opacity-0 backdrop-blur-md transition-all duration-300 ease-out',
            'group-hover:border-white/60 group-hover:bg-white/45 group-hover:opacity-100 group-hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)]',
            isActive &&
              'border-white/70 bg-white/50 opacity-100 shadow-[0_2px_12px_rgba(0,0,0,0.05)]',
          )}
        />
        <span className="relative z-10 transition-colors duration-300">
          {label}
        </span>
        <ChevronDown
          className={cn(
            'relative z-10 h-3.5 w-3.5 opacity-40 transition-all duration-300 ease-out group-hover:rotate-180 group-hover:opacity-80',
            isActive && 'rotate-180 opacity-80',
          )}
          strokeWidth={2}
        />
      </a>
    )
  },
)

NavItem.displayName = 'NavItem'
