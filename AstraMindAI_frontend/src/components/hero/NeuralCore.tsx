import { motion } from 'framer-motion'

import { coreEnter, hoverTransition } from '@/lib/hero-motion'
import { cn } from '@/lib/utils'

interface NeuralCoreProps {
  className?: string
  onHoverStart?: () => void
  onHoverEnd?: () => void
}

export function NeuralCore({
  className,
  onHoverStart,
  onHoverEnd,
}: NeuralCoreProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={coreEnter}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className={cn(
        'absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 cursor-default',
        className,
      )}
    >
      {[1, 2, 3].map((ring) => (
        <div
          key={ring}
          className={cn(
            'pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/[0.06]',
            ring === 1 && 'h-28 w-28 opacity-20',
            ring === 2 && 'h-36 w-36 opacity-15',
            ring === 3 && 'h-44 w-44 opacity-10',
          )}
        />
      ))}

      <motion.div
        whileHover={{
          boxShadow: '0 12px 48px rgba(0,0,0,0.1)',
        }}
        transition={hoverTransition}
        className="relative flex h-20 w-20 items-center justify-center rounded-full border border-black/[0.1] bg-white/80 shadow-[0_8px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl"
      >
        <div className="absolute inset-2 rounded-full border border-black/[0.05]" />
        <div className="grid grid-cols-3 gap-1">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-neutral-800 opacity-70"
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
