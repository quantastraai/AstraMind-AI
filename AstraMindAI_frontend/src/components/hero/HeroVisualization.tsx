import { useState } from 'react'
import { motion } from 'framer-motion'

import { FLOATING_DOCUMENTS } from '@/lib/hero-content'
import {
  hoverTransition,
  responseEnter,
  visualizationVariants,
} from '@/lib/hero-motion'
import { cn } from '@/lib/utils'

import { DocumentCard } from './DocumentCard'
import { FlowPipeline } from './FlowPipeline'
import { NeuralConnections } from './NeuralConnections'
import { NeuralCore } from './NeuralCore'

const POSITION_MAP = {
  'top-left': 'left-[4%] top-[8%]',
  'top-right': 'right-[4%] top-[12%]',
  'bottom-left': 'bottom-[22%] left-[2%]',
  'bottom-right': 'bottom-[18%] right-[2%]',
} as const

export function HeroVisualization() {
  const [coreHovered, setCoreHovered] = useState(false)
  const [hasEntered, setHasEntered] = useState(false)

  return (
    <motion.div
      variants={visualizationVariants}
      initial="hidden"
      animate="visible"
      className="relative mx-auto w-full max-w-[490px] scale-[0.88] origin-center lg:max-w-none lg:scale-90"
    >
      <div className="relative aspect-[5/4] w-full min-h-[340px] lg:min-h-[408px]">
        <div className="bg-hero-neural absolute inset-0 rounded-3xl opacity-60" />
        <div className="absolute inset-0 rounded-3xl border border-black/[0.04] bg-white/20 backdrop-blur-sm" />

        <div className="relative h-full w-full">
          <NeuralConnections />

          {FLOATING_DOCUMENTS.map((doc, i) => (
            <DocumentCard
              key={doc.id}
              index={i}
              title={doc.title}
              lines={doc.lines}
              className={cn(POSITION_MAP[doc.position])}
            />
          ))}

          <NeuralCore
            onHoverStart={() => setCoreHovered(true)}
            onHoverEnd={() => setCoreHovered(false)}
          />

          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: coreHovered ? 1.03 : 1,
              boxShadow: coreHovered
                ? '0 10px 36px rgba(0,0,0,0.09)'
                : '0 4px 20px rgba(0,0,0,0.05)',
            }}
            transition={hasEntered ? hoverTransition : responseEnter}
            onAnimationComplete={() => setHasEntered(true)}
            className="absolute right-[18%] top-[38%] z-20 rounded-lg border border-black/[0.06] bg-white/75 px-3 py-2 backdrop-blur-md"
          >
            <p className="text-[9px] font-medium uppercase tracking-widest text-neutral-400">
              AI Response
            </p>
            <p className="mt-1 text-[11px] font-medium text-neutral-800">
              Revenue up 23% QoQ
            </p>
          </motion.div>

          <FlowPipeline />
        </div>
      </div>
    </motion.div>
  )
}
