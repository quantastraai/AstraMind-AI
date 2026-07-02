import { motion } from 'framer-motion'

import { connectionDraw, connectionNodeEnter } from '@/lib/hero-motion'

export function NeuralConnections() {
  const paths = [
    'M 80 100 C 140 80, 200 120, 260 160',
    'M 420 90 C 360 110, 300 130, 260 160',
    'M 70 320 C 130 280, 200 220, 260 160',
    'M 430 310 C 370 260, 310 210, 260 160',
    'M 260 160 L 260 240',
    'M 260 240 L 200 300',
    'M 260 240 L 320 300',
  ]

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 500 400"
      fill="none"
      aria-hidden
    >
      {paths.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          stroke="rgba(0,0,0,0.08)"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={connectionDraw(i)}
        />
      ))}

      {[
        { cx: 260, cy: 240 },
        { cx: 200, cy: 300 },
        { cx: 320, cy: 300 },
        { cx: 260, cy: 340 },
      ].map((node, i) => (
        <motion.circle
          key={`node-${i}`}
          cx={node.cx}
          cy={node.cy}
          r="4"
          fill="rgba(0,0,0,0.15)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={connectionNodeEnter(i)}
        />
      ))}
    </svg>
  )
}
