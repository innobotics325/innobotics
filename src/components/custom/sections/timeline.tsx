'use client'

import { FadeIn, FadeInStagger } from '@/components/custom/motion/fade-in'

const HISTORY = [
  {
    year: '2026',
    title: 'Inception',
    description:
      'Founded by a group of computer science students with a vision to create a peer learning community.',
  },
  // {
  //   year: '2021',
  //   title: 'First Hackathon',
  //   description:
  //     'Organized our first inter-college hackathon with over 200 participants from across the region.',
  // },
  // {
  //   year: '2022',
  //   title: 'Industry Partnerships',
  //   description:
  //     'Established partnerships with leading tech companies to provide internships and mentorship.',
  // },
  // {
  //   year: '2023',
  //   title: 'National Recognition',
  //   description: "Won the 'Best Student Chapter' award at the National Tech Summit.",
  // },
  // {
  //   year: '2024',
  //   title: 'Global Expansion',
  //   description: 'Launched our open-source initiative contributing to global projects.',
  // },
]

export function Timeline() {
  return (
    <div className="relative border-l border-border/40 space-y-24 py-4">
      <FadeInStagger>
        {HISTORY.map((item, index) => (
          <FadeIn key={index} className="relative pl-12 md:pl-20 group">
            {/* Minimal Timeline Marker */}
            <div className="absolute -left-[1.25px] top-3">
              <div className="size-[3px] rounded-full bg-primary ring-[6px] ring-background z-10 relative group-hover:scale-150 transition-transform duration-500" />
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-4">
              <h3 className="text-3xl md:text-4xl font-medium tracking-tighter group-hover:text-primary transition-colors duration-500 leading-none">
                {item.title}
              </h3>
              <span className="text-[12px] font-mono tracking-[0.3em] uppercase text-muted-foreground/80">
                {item.year}
              </span>
            </div>
            <p className="text-muted-foreground font-light leading-relaxed text-xl max-w-2xl tracking-tight">
              {item.description}
            </p>
          </FadeIn>
        ))}
      </FadeInStagger>
    </div>
  )
}
