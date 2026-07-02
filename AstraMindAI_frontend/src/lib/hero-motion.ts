import type { Variants } from 'framer-motion'

export const heroContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

export const heroFadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

export const visualizationVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: [0, 0, 0.2, 1], delay: 0.15 },
  },
}

export const illustrationEase = [0, 0, 0.2, 1] as const

export const documentEnter = (index: number) => ({
  duration: 0.28,
  delay: 0.12 + index * 0.08,
  ease: illustrationEase,
})

export const connectionDraw = (index: number) => ({
  duration: 0.3,
  delay: 0.45 + index * 0.07,
  ease: illustrationEase,
})

export const connectionNodeEnter = (index: number) => ({
  duration: 0.25,
  delay: 0.75 + index * 0.06,
  ease: illustrationEase,
})

export const coreEnter = {
  duration: 0.28,
  delay: 0.95,
  ease: illustrationEase,
}

export const responseEnter = {
  duration: 0.28,
  delay: 1.2,
  ease: illustrationEase,
}

export const hoverTransition = {
  duration: 0.25,
  ease: illustrationEase,
}
