import { Metadata } from 'next'
import { FadeIn } from '@/components/custom/motion/fade-in'
import { Stagger, StaggerItem } from '@/components/custom/motion/stagger'
import { TeamCard } from '@/components/custom/cards/team-card'
import { TEAM } from '@/data/team'
import { EditorialCTA } from '@/components/custom/sections/editorial-cta'
import { HighlightedText } from '@/components/custom/typography/highlighted-text'

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the core team behind DoIT Club.',
}

export default function TeamPage() {
  return (
    <div className="py-32">
      <div className="container mx-auto px-6 md:px-8">
        <FadeIn>
          <div className="max-w-3xl mb-24">
            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter mb-8 leading-[0.9]">
              <HighlightedText text="The <hlt>Humans</hlt>" />
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              Meet the innovative minds and passionate makers building the future of robotics at
              Innobotics.
            </p>
          </div>
        </FadeIn>

        <div className="flex items-center justify-between mb-12 border-b border-border/40 pb-4">
          <h2 className="text-xs uppercase tracking-[0.3em] font-semibold text-muted-foreground">
            Core Team
          </h2>
          <span className="text-xs font-mono text-muted-foreground/60">{TEAM.length} Members</span>
        </div>

        <Stagger className="space-y-0">
          {TEAM.map((member, index) => (
            <StaggerItem key={index}>
              <TeamCard index={index} {...member} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
      <EditorialCTA
        title="Impact the future."
        description="Every builder started with a single line of code. Join the minds behind Innobotics and start your journey today."
      />
    </div>
  )
}
