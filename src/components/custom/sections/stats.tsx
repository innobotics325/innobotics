'use client'

import { Users, Code, Calendar, Award } from 'lucide-react'
import { FadeIn, FadeInStagger } from '@/components/custom/motion/fade-in'
import { cn } from '@/utilities/ui'

const STATS = [
  {
    label: 'Active Members',
    value: '500+',
    icon: Users,
    description: 'Passionate students',
  },
  {
    label: 'Projects Shipped',
    value: '45+',
    icon: Code,
    description: 'Open source contributions',
  },
  {
    label: 'Yearly Events',
    value: '20+',
    icon: Calendar,
    description: 'Workshops & hackathons',
  },
  {
    label: 'Awards Won',
    value: '15+',
    icon: Award,
    description: 'National competitions',
  },
]

export function Stats({ className, ...props }: React.ComponentProps<'section'>) {
  return (
    <section
      className={cn('py-32 md:py-48 border-y border-border/40 bg-background', className)}
      {...props}
    >
      <div className="container px-6 md:px-8 mx-auto">
        <FadeInStagger className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
          {STATS.map((stat, index) => (
            <FadeIn key={index} className="flex flex-col items-start space-y-6 group">
              <stat.icon
                className="size-6 text-primary transition-transform duration-500 group-hover:scale-110"
                strokeWidth={1}
              />
              <div className="space-y-2">
                <h3 className="text-6xl md:text-8xl font-medium tracking-tighter leading-none">
                  {stat.value}
                </h3>
                <div className="flex flex-col gap-1">
                  <p className="text-lg font-medium text-foreground tracking-tight">{stat.label}</p>
                  <p className="text-[10px] text-muted-foreground font-mono tracking-widest uppercase opacity-60">
                    {stat.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}
