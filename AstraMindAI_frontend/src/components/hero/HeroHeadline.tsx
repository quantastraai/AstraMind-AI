import { motion } from 'framer-motion'

import { HERO_CONTENT } from '@/lib/hero-content'
import { heroFadeUpVariants } from '@/lib/hero-motion'

export function HeroHeadline() {
  return (
    <motion.div variants={heroFadeUpVariants} className="w-full min-w-0">
      <h1 className="font-hero text-[clamp(1.625rem,2.5vw+0.65rem,3rem)] leading-[0.95] tracking-[-0.035em]">
        <span className="block whitespace-nowrap font-semibold text-neutral-950">
          {HERO_CONTENT.headline.line1}
        </span>
        <span className="mt-[0.14em] block whitespace-nowrap font-medium text-neutral-400">
          {HERO_CONTENT.headline.line2}
        </span>
      </h1>
    </motion.div>
  )
}
