import { motion, useReducedMotion } from 'framer-motion'

import { illustrationEase } from '@/lib/hero-motion'

function ScrollMouseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      className="text-neutral-400"
    >
      <rect
        x="5"
        y="2"
        width="10"
        height="16"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <line
        x1="10"
        y1="6"
        x2="10"
        y2="9"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function HeroScrollIndicator() {
  const prefersReducedMotion = useReducedMotion()

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight * 0.85,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <motion.button
      type="button"
      aria-label="Scroll to explore"
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 0.32 }}
      whileHover={{
        opacity: 0.58,
        transition: { duration: 0.2, ease: illustrationEase },
      }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration: 0.4, delay: 2, ease: illustrationEase }
      }
      onClick={handleScroll}
      className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-1.5 rounded-full px-2 py-1 transition-opacity duration-300 ease-out hover:duration-200 focus-visible:opacity-60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-300/60 sm:bottom-8"
    >
      <ScrollMouseIcon />
      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">
        Scroll
      </span>
    </motion.button>
  )
}
