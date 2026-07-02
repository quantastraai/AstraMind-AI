import LogoIcon from '@/assets/logo.svg?react'
import WordmarkIcon from '@/assets/wordmark.svg?react'
import { cn } from '@/lib/utils'

interface LogoProps {
  compact?: boolean
  className?: string
}

export function Logo({ compact = false, className }: LogoProps) {
  return (
    <a
      href="#"
      aria-label="AstraMind AI home"
      className={cn(
        'group flex shrink-0 items-center gap-[13px] transition-opacity duration-300 hover:opacity-[0.85]',
        className,
      )}
    >
      <LogoIcon
        aria-hidden
        className={cn(
          'brand-mark block shrink-0',
          compact ? 'h-[40px]' : 'h-[42px]',
        )}
      />
      <WordmarkIcon
        aria-label="AstraMind AI"
        className={cn(
          'brand-mark block shrink-0',
          compact ? 'h-[18px]' : 'h-[20px]',
        )}
      />
    </a>
  )
}
