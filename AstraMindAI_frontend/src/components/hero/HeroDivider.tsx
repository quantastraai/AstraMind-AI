import { motion } from 'framer-motion'

import { heroFadeUpVariants } from '@/lib/hero-motion'

export function HeroDivider() {
  return (
    <motion.div variants={heroFadeUpVariants} className="w-full max-w-[820px]">
      <div className="h-px w-full bg-neutral-200" />
      <div className="mt-3 h-1 w-1 rounded-full bg-neutral-300" />
    </motion.div>
  )
}
