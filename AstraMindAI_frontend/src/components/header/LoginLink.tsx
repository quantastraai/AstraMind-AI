import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

interface LoginLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const LoginLink = forwardRef<HTMLAnchorElement, LoginLinkProps>(
  ({ className, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href="#login"
        className={cn(
          'group relative text-sm font-medium text-neutral-400 opacity-75 transition-all duration-300 ease-out hover:text-neutral-950 hover:opacity-100',
          className,
        )}
        {...props}
      >
        <span className="relative inline-block">
          Login
          <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-neutral-950 transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100" />
        </span>
      </a>
    )
  },
)

LoginLink.displayName = 'LoginLink'
