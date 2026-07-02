import { FileText } from 'lucide-react'
import { motion } from 'framer-motion'

import { documentEnter, hoverTransition } from '@/lib/hero-motion'
import { cn } from '@/lib/utils'

interface DocumentCardProps {
  title: string
  lines?: number
  className?: string
  index?: number
}

export function DocumentCard({
  title,
  lines = 3,
  className,
  index = 0,
}: DocumentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={documentEnter(index)}
      whileHover={{
        y: -4,
        boxShadow: '0 12px 36px rgba(0,0,0,0.08)',
        borderColor: 'rgba(0,0,0,0.12)',
        transition: hoverTransition,
      }}
      className={cn(
        'absolute w-[148px] cursor-default rounded-xl border border-black/[0.06] bg-white/70 p-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-xl',
        className,
      )}
    >
      <div className="mb-2.5 flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-neutral-100">
          <FileText className="h-3 w-3 text-neutral-600" strokeWidth={1.75} />
        </div>
        <span className="truncate text-[10px] font-medium text-neutral-700">
          {title}
        </span>
      </div>
      <div className="space-y-1.5">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(
              'h-1 rounded-full bg-neutral-200/80',
              i === 0 && 'w-full',
              i === 1 && 'w-[82%]',
              i === 2 && 'w-[64%]',
              i === 3 && 'w-[46%]',
            )}
          />
        ))}
      </div>
    </motion.div>
  )
}
