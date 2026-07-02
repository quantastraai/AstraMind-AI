import { motion } from 'framer-motion'

import { HERO_CONTENT } from '@/lib/hero-content'
import { heroContainerVariants, heroFadeUpVariants } from '@/lib/hero-motion'

import { HeroActions } from './HeroActions'
import { HeroBadge } from './HeroBadge'
import { HeroDivider } from './HeroDivider'
import { HeroHeadline } from './HeroHeadline'
import { HeroTrust } from './HeroTrust'

export function HeroContent() {
  return (
    <motion.div
      variants={heroContainerVariants}
      initial="hidden"
      animate="visible"
      className="flex w-full min-w-0 max-w-[820px] flex-col items-start"
    >
      <HeroBadge />

      <div className="mt-9 lg:mt-10">
        <HeroHeadline />
      </div>

      <div className="mt-5 lg:mt-5">
        <HeroDivider />
      </div>

      <motion.p
        variants={heroFadeUpVariants}
        className="mt-5 max-w-[520px] text-[20px] leading-relaxed text-neutral-600 lg:mt-6"
      >
        {HERO_CONTENT.description}
      </motion.p>

      <div className="mt-8 lg:mt-8">
        <HeroActions />
      </div>

      <div className="mt-6 lg:mt-7">
        <HeroTrust />
      </div>
    </motion.div>
  )
}
