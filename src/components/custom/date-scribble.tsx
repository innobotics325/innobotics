'use client'

import { motion } from 'framer-motion'

export function DateScribble() {
  return (
    <svg
      className="absolute inset-0 w-full h-full -z-10 text-primary pointer-events-none"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M14.5,45.5 C18.5,25.5 45.5,12.5 68.5,18.5 C91.5,24.5 95.5,52.5 81.5,75.5 C67.5,98.5 28.5,95.5 15.5,78.5 C2.5,61.5 18.5,35.5 40.5,28.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{ pathLength: 0 }} // Start at 0 controlled by parent hover if we want, but simpler to just animate in or use hover variants
      />
    </svg>
  )
}

export function HoverDateScribble({ index = 0 }: { index?: number }) {
  // Different hand-drawn circle paths for variety
  const circlePaths = [
    // Variant 1: The "Quick Sketch"
    // Features a slight overlap and a flat bottom as if drawn on a surface.
    'M22,58 C25,32 52,18 78,24 C104,30 112,62 96,92 C80,122 35,118 18,92 C2,68 22,38 52,28 C70,22 95,30 102,45',

    // Variant 2: The "Wobbly Oval"
    // More erratic control points to simulate natural hand tremors.
    'M18,65 C20,35 45,15 75,18 C105,21 118,55 105,88 C92,121 40,125 15,100 C-10,75 10,40 45,22 C65,12 90,15 108,35',

    // Variant 3: The "Multiple Stroke" look
    // A tighter, more pressurized circle with a sharp dip.
    'M30,50 C35,25 60,15 85,22 C110,29 118,70 95,105 C72,140 25,125 12,98 C-1,71 18,35 55,25 C75,20 100,35 110,60',
  ]

  // Different colors for variety
  const colors = ['text-yellow-400', 'text-orange-400', 'text-amber-400']

  // Different stroke widths for variety
  const strokeWidths = [6, 7, 5]

  // Select variant based on index
  const variantIndex = index % circlePaths.length
  const path = circlePaths[variantIndex]
  const color = colors[variantIndex]
  const strokeWidth = strokeWidths[variantIndex]

  return (
    <svg
      className={`absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] z-10 ${color} pointer-events-none`}
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <motion.path
        d={path}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{
          pathLength: 1,
          opacity: 0.7,
          transition: {
            duration: 0.8,
            ease: 'easeInOut',
            delay: 0.2 + index * 0.1, // Stagger animation based on index
          },
        }}
        viewport={{ once: true }}
      />
    </svg>
  )
}
