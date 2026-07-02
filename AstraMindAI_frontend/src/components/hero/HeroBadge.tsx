import { Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

import { HERO_CONTENT } from '@/lib/hero-content'
import { heroFadeUpVariants } from '@/lib/hero-motion'

export function HeroBadge() {
  return (
    <motion.div
      variants={heroFadeUpVariants}
      className="inline-flex items-center gap-2.5 rounded-full border border-black/[0.06] bg-white/60 px-4 py-2 shadow-[0_4px_16px_rgba(0,0,0,0.04)] backdrop-blur-md"
    >
      <Sparkles
        aria-hidden
        className="h-3.5 w-3.5 text-neutral-500"
        strokeWidth={1.75}
      />
      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-600">
        {HERO_CONTENT.eyebrow}
      </span>
    </motion.div>
  )
}
