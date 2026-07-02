import { ArrowRight } from 'lucide-react'
import { forwardRef } from 'react'
import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

interface GetStartedButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const GetStartedButton = forwardRef<
  HTMLAnchorElement,
  GetStartedButtonProps
>(({ className, ...props }, ref) => {
  return (
    <motion.a
      ref={ref}
      href="#get-started"
      whileHover={{
        scale: 1.04,
        y: -2,
        boxShadow: '0 12px 40px rgba(0,0,0,0.25), 0 0 24px rgba(0,0,0,0.08)',
      }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      className={cn(
        'group inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-2.5 text-sm font-medium text-primary-foreground shadow-[0_4px_20px_rgba(0,0,0,0.18)] transition-all duration-300',
        className,
      )}
      {...props}
    >
      Get Started
      <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
    </motion.a>
  )
})

GetStartedButton.displayName = 'GetStartedButton'
