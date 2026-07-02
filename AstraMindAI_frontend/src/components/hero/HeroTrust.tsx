import { Fragment } from 'react'
import { Lock, Shield, Users } from 'lucide-react'
import { motion } from 'framer-motion'

import { HERO_CONTENT } from '@/lib/hero-content'
import { heroFadeUpVariants } from '@/lib/hero-motion'

const TRUST_ITEMS = [
  { Icon: Lock, label: HERO_CONTENT.trustItems[0].label },
  { Icon: Shield, label: HERO_CONTENT.trustItems[1].label },
  { Icon: Users, label: HERO_CONTENT.trustItems[2].label },
] as const

export function HeroTrust() {
  return (
    <motion.div
      variants={heroFadeUpVariants}
      className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-5"
    >
      {TRUST_ITEMS.map(({ Icon, label }, index) => (
        <Fragment key={label}>
          {index > 0 && (
            <span aria-hidden className="hidden text-neutral-300 sm:inline">
              •
            </span>
          )}
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-neutral-300/70 bg-white/25 backdrop-blur-sm">
              <Icon
                className="h-3 w-3 text-neutral-500"
                strokeWidth={1.5}
              />
            </div>
            <span className="whitespace-nowrap text-[14px] font-medium tracking-wide text-neutral-500">
              {label}
            </span>
          </div>
        </Fragment>
      ))}
    </motion.div>
  )
}
