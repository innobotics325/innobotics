import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/custom/motion/fade-in'
import { ProjectCard } from '@/components/custom/cards/project-card'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export default async function FeaturedSlot() {
  const payload = await getPayload({ config: configPromise })
  const { docs: projects } = await payload.find({
    collection: 'projects',
    limit: 3,
  })

  const featuredProjects = projects

  return (
    <section className="py-24 border-t border-border/40">
      <div className="container px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">Selected Work</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link
              href="/projects"
              className="hidden md:inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              View all projects
              <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </Link>
          </FadeIn>
        </div>

        <div className="space-y-0">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.1}>
              <ProjectCard index={index} data={project} />
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 md:hidden">
          <Link
            href="/projects"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors inline-flex items-center"
          >
            View all projects <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
