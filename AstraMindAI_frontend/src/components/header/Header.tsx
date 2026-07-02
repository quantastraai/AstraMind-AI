import { motion } from 'framer-motion'

import { useScrollState } from '@/hooks/useScrollState'
import { cn } from '@/lib/utils'

import { GetStartedButton } from './GetStartedButton'
import { LoginLink } from './LoginLink'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'
import { NavLinks } from './NavLinks'

export function Header() {
  const scrolled = useScrollState()

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5"
    >
      <div className="relative w-[82%] max-w-[1400px]">
        <motion.nav
          layout
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'pointer-events-auto flex items-center justify-between rounded-full border border-[rgba(0,0,0,0.05)] pl-8 pr-6 transition-all duration-500 sm:pl-[52px] sm:pr-8 lg:pr-10',
            scrolled
              ? 'h-[68px] bg-[rgba(255,255,255,0.72)] shadow-[0_18px_50px_rgba(0,0,0,0.08)] backdrop-blur-2xl'
              : 'h-[78px] bg-[rgba(255,255,255,0.65)] shadow-[0_18px_50px_rgba(0,0,0,0.07)] backdrop-blur-xl',
          )}
        >
          <Logo compact={scrolled} />

          <NavLinks className="hidden lg:block" />

          <div className="hidden items-center gap-6 lg:flex">
            <LoginLink />
            <GetStartedButton />
          </div>

          <MobileMenu />
        </motion.nav>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-[8%] -bottom-px h-px bg-black/[0.03] shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
        />
      </div>
    </motion.header>
  )
}
