import { motion } from 'framer-motion'

import { FLOW_STAGES } from '@/lib/hero-content'
import { illustrationEase } from '@/lib/hero-motion'

export function FlowPipeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, delay: 1.35, ease: illustrationEase }}
      className="absolute bottom-4 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-1.5 rounded-full border border-black/[0.05] bg-white/60 px-4 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-md md:flex"
    >
      {FLOW_STAGES.map((stage, i) => (
        <div key={stage.id} className="flex items-center gap-1.5">
          <span className="whitespace-nowrap text-[9px] font-medium tracking-wide text-neutral-500">
            {stage.label}
          </span>
          {i < FLOW_STAGES.length - 1 && (
            <span className="text-[8px] text-neutral-300">↓</span>
          )}
        </div>
      ))}
    </motion.div>
  )
}
