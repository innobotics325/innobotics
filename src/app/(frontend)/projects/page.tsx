import { Metadata } from 'next'
import { FadeIn } from '@/components/custom/motion/fade-in'
import { Stagger, StaggerItem } from '@/components/custom/motion/stagger'
import { ProjectCard } from '@/components/custom/cards/project-card'
import { PROJECTS } from '@/data/projects'
import { EditorialCTA } from '@/components/custom/sections/editorial-cta'
import { HighlightedText } from '@/components/custom/typography/highlighted-text'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Showcase of projects built by InnoBotics Club members.',
}

export default function ProjectsPage() {
  return (
    <div className="py-32">
      <div className="container mx-auto px-6 md:px-8">
        <FadeIn>
          <div className="max-w-3xl mb-24">
            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter mb-8 leading-[0.9]">
              <HighlightedText text="Selected <hlt>Works</hlt>" />
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              A curation of robotic systems, technical prototypes, and innovative experiments built
              by our community.
            </p>
          </div>
        </FadeIn>

        <div className="flex items-center justify-between mb-12 border-b border-border/40 pb-4">
          <h2 className="text-xs uppercase tracking-[0.3em] font-semibold text-muted-foreground">
            Project Archive
          </h2>
          <span className="text-xs font-mono text-muted-foreground/60">
            {PROJECTS.length} Items
          </span>
        </div>

        <Stagger className="space-y-0">
          {PROJECTS.map((project, index) => (
            <StaggerItem key={project.slug}>
              <ProjectCard index={index} {...project} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
      <EditorialCTA
        title="Impact the future."
        description="Whether you're attending a session or joining a project, every step you take with InnoBotics builds towards a smarter tomorrow."
      />
    </div>
  )
}
