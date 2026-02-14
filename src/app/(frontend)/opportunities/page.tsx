import { HighlightedText } from '@/components/custom/typography/highlighted-text'
import { EditorialCTA } from '@/components/custom/sections/editorial-cta'
import { ArrowRight } from 'lucide-react'
import { Metadata } from 'next'
import { FadeIn } from '@/components/custom/motion/fade-in'
import { Stagger, StaggerItem } from '@/components/custom/motion/stagger'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Opportunities',
  description: 'Explore career opportunities, internships, and mentorship programs.',
}

const OPPORTUNITIES = [
  {
    title: 'Summer Internship 2024',
    company: 'TechCorp Inc.',
    type: 'Internship',
    location: 'Remote',
    description: 'Looking for frontend developers proficient in React and TypeScript.',
  },
  {
    title: 'Mentorship Program',
    company: 'InnoBotics Club',
    type: 'Mentorship',
    location: 'On-Campus',
    description: 'Get paired with senior students and alumni for career guidance.',
  },
  {
    title: 'Research Assistant',
    company: 'University AI Lab',
    type: 'Research',
    location: 'On-Campus',
    description: 'Assist in cutting-edge machine learning research projects.',
  },
]

export default function OpportunitiesPage() {
  return (
    <div className="py-32">
      <div className="container mx-auto px-6 md:px-8">
        <FadeIn>
          <div className="max-w-3xl mb-24">
            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter mb-8 leading-[0.9]">
              <HighlightedText text="Future <hlt>Impact</hlt>" />
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              Discover internships, jobs, research positions, and mentorship programs curated for
              our members.
            </p>
          </div>
        </FadeIn>

        <section>
          <FadeIn delay={0.1}>
            <div className="flex items-center justify-between mb-12 border-b border-border/40 pb-4">
              <h2 className="text-xs uppercase tracking-[0.3em] font-semibold text-muted-foreground">
                Active Listings
              </h2>
              <span className="text-xs font-mono text-muted-foreground/60">
                {OPPORTUNITIES.length} Positions
              </span>
            </div>
          </FadeIn>

          <Stagger className="space-y-0">
            {OPPORTUNITIES.map((opp, index) => (
              <StaggerItem key={index}>
                <div className="group border-b border-border/40 py-12 flex flex-col md:flex-row gap-8 md:items-center justify-between hover:bg-secondary/5 transition-colors -mx-6 md:-mx-8 px-6 md:px-8 first:border-t">
                  <div className="flex flex-col md:flex-row gap-8 md:items-center max-w-2xl">
                    <span className="text-xs font-mono text-primary pt-1.5 md:pt-0">
                      0{index + 1}
                    </span>
                    <div className="space-y-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
                          {opp.title}
                        </h3>
                        <Badge
                          variant="outline"
                          className="bg-primary/5 text-primary border-primary/10 rounded-full px-4 text-[10px] uppercase tracking-widest"
                        >
                          {opp.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground font-light tracking-wide italic">
                        {opp.company} • {opp.location}
                      </p>
                      <p className="text-muted-foreground font-light leading-relaxed mt-4 max-w-xl">
                        {opp.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center shrink-0">
                    <Button
                      size="lg"
                      className="h-14 px-8 text-base font-light rounded-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105 transition-all shadow-lg shadow-primary/10"
                    >
                      Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>
      </div>

      <EditorialCTA
        title="Start <hlt>building</hlt> today."
        description="Every project, every internship, and every collaboration is a step towards technical mastery. We're here to facilitate your growth."
      />
    </div>
  )
}
