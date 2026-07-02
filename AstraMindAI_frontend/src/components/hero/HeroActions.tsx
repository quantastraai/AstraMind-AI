import { ArrowUpRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'

import { HERO_CONTENT } from '@/lib/hero-content'
import { heroFadeUpVariants } from '@/lib/hero-motion'

export function HeroActions() {
  return (
    <motion.div
      variants={heroFadeUpVariants}
      className="flex flex-wrap items-center gap-4"
    >
      <motion.a
        href="#get-started"
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 24 }}
        className="group inline-flex items-center gap-3 rounded-full bg-neutral-950 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_4px_24px_rgba(0,0,0,0.15)] transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
      >
        {HERO_CONTENT.primaryCta}
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </motion.a>

      <motion.a
        href="#demo"
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 24 }}
        className="group inline-flex items-center gap-2.5 rounded-full border border-neutral-950 bg-transparent px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-950 transition-all duration-300 hover:bg-neutral-950 hover:text-white"
      >
        <Play className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
        {HERO_CONTENT.secondaryCta}
      </motion.a>
    </motion.div>
  )
}
