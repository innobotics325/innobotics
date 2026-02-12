import { Rocket, Users, Globe } from 'lucide-react'
import { FadeIn } from '@/components/custom/motion/fade-in'
import { Stagger, StaggerItem } from '@/components/custom/motion/stagger'
import { MISSION_CONTENT } from '@/utilities/constants'
import { cn } from '@/utilities/ui'

const FEATURES = [
  {
    icon: Rocket,
    title: 'Innovation',
    description:
      'Fostering a culture of creativity and problem-solving through hands-on technical projects.',
  },
  {
    icon: Users,
    title: 'Community',
    description:
      'Building a supportive network of like-minded individuals passionate about technology.',
  },
  {
    icon: Globe,
    title: 'Industry Impact',
    description:
      'Connecting students with industry leaders to bridge the gap between academia and professional world.',
  },
]

export function Mission({ className, ...props }: React.ComponentProps<'section'>) {
  return (
    <section
      className={cn(
        'py-32 md:py-48 px-6 md:px-8 border-t border-border/40 bg-background',
        className,
      )}
      {...props}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          <div className="lg:col-span-4">
            <FadeIn>
              <h2 className="text-xs uppercase tracking-[0.3em] font-semibold text-muted-foreground mb-8">
                The Mission
              </h2>
              <h3 className="text-4xl md:text-6xl font-medium tracking-tighter leading-tight">
                To <span className="italic font-serif text-primary">empower</span> the engineers of
                tomorrow.
              </h3>
            </FadeIn>
          </div>
          <div className="lg:col-span-8 flex items-end">
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-3xl font-light leading-relaxed text-muted-foreground max-w-2xl">
                {MISSION_CONTENT.mission}
              </p>
            </FadeIn>
          </div>
        </div>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-20 lg:gap-32">
          {FEATURES.map((feature, index) => (
            <StaggerItem key={index} className="relative group">
              <div className="space-y-8">
                <div className="inline-flex items-center justify-center text-primary transition-all duration-500 group-hover:translate-x-2">
                  <feature.icon className="size-12" strokeWidth={1} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
