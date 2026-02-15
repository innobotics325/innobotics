import { notFound } from 'next/navigation'
import { Github, ExternalLink, ArrowLeft, Code } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { FadeIn } from '@/components/custom/motion/fade-in'
import { HighlightedText } from '@/components/custom/typography/highlighted-text'
import { EditorialCTA } from '@/components/custom/sections/editorial-cta'
import RichText from '@/components/RichText'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })
  const { docs: projects } = await payload.find({
    collection: 'projects',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const project = projects[0]

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.title,
    description: project.summary,
  }
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const projects = await payload.find({
    collection: 'projects',
    limit: 100,
    select: {
      slug: true,
    },
  })

  return projects.docs.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })
  const { docs: projects } = await payload.find({
    collection: 'projects',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const project = projects[0]

  if (!project) {
    notFound()
  }

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-32 md:py-48 relative overflow-hidden">
        {/* Subtle background orb */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

        <div className="container px-6 md:px-8 mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-12">
              <Link
                href="/projects"
                className="group inline-flex items-center text-xs uppercase tracking-[0.3em] font-semibold text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Back to Selected Works
              </Link>
              <div className="h-px w-12 bg-border/40" />
              {/* <Badge className="bg-primary/5 text-primary border-primary/20 rounded-full px-4 font-mono text-[10px] uppercase tracking-widest">
                Experimental
              </Badge> */}
            </div>

            <div className="max-w-5xl mb-24">
              <h1 className="text-6xl md:text-9xl font-medium tracking-tighter mb-12 leading-[0.85]">
                <HighlightedText text={project.title} />
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-y border-border/40 py-12 -mx-6 md:-mx-8 px-6 md:px-8">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-semibold">
                    Status
                  </span>
                  <p className="text-xl font-medium tracking-tight">
                    {project.status || 'Active Development'}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-semibold">
                    Field
                  </span>
                  <p className="text-xl font-medium tracking-tight">
                    {project.field || 'Intelligent Systems'}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-semibold">
                    Tech Lead
                  </span>
                  <p className="text-xl font-medium tracking-tight">
                    {project.techLead || 'Open Source'}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-border/40 bg-secondary/20 mb-32 group">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                priority
              />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <FadeIn delay={0.3}>
                <div className="flex items-center gap-4 mb-12 border-b border-border/40 pb-4">
                  <h2 className="text-xs uppercase tracking-[0.3em] font-semibold text-muted-foreground">
                    The Narrative
                  </h2>
                </div>
                <div className="prose prose-xl prose-primary dark:prose-invert max-w-none font-light leading-relaxed text-muted-foreground">
                  <h2 className="text-foreground font-medium text-3xl mt-16 mb-8 tracking-tighter">
                    {project.summary}
                  </h2>
                  <RichText
                    data={project.narrative}
                    enableGutter={false}
                    className="text-muted-foreground font-normal text-lg mb-8 leading-snug"
                  />

                  <h3 className="text-foreground font-medium text-3xl mt-16 mb-8 tracking-tighter">
                    Technical <span className="italic font-serif text-primary">Foundations</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 not-prose">
                    {project.technicalFoundations?.map((foundation, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 border-t border-border/20 pt-4"
                      >
                        <span className="text-xs font-mono text-primary pt-1.5">0{i + 1}</span>
                        <div>
                          <h4 className="font-medium mb-2 tracking-tight">{foundation.title}</h4>
                          <p className="text-sm text-muted-foreground font-light leading-relaxed">
                            {foundation.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Sidebar / Links */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <FadeIn delay={0.4}>
                <div className="flex items-center gap-4 mb-12 border-b border-border/40 pb-4">
                  <h2 className="text-xs uppercase tracking-[0.3em] font-semibold text-muted-foreground">
                    Repository
                  </h2>
                </div>
                <div className="p-8 rounded-3xl border border-border/40 bg-secondary/10 backdrop-blur-sm space-y-12">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-medium tracking-tight">Explore the code</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Transparency is the backbone of innovation. Access the full source code and
                      contribute to the evolution of this system.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {project.githubUrl && (
                      <Button
                        asChild
                        size="lg"
                        className="w-full py-8 text-lg font-light tracking-tight rounded-full group overflow-hidden relative shadow-lg shadow-primary/10"
                      >
                        <Link href={project.githubUrl} target="_blank">
                          <span className="relative z-10 flex items-center gap-3">
                            <Github className="w-5 h-5" /> View Source
                          </span>
                        </Link>
                      </Button>
                    )}
                    {project.demoUrl && (
                      <Button
                        asChild
                        variant="outline"
                        className="w-full py-8 text-lg font-light tracking-tight rounded-full border-border/40 hover:bg-secondary/20 transition-all"
                      >
                        <Link href={project.demoUrl} target="_blank">
                          <ExternalLink className="w-4 h-4 mr-3" /> Live Demo
                        </Link>
                      </Button>
                    )}
                  </div>

                  <div className="pt-8 border-t border-border/20">
                    <h4 className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-semibold mb-4">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack?.map((tech) => {
                        const name = typeof tech === 'object' ? tech.name : ''
                        return (
                          <div
                            key={name}
                            className="flex items-center gap-2 text-xs font-mono font-medium text-primary bg-primary/10 border border-primary/10 px-3 py-1 rounded-full"
                          >
                            <Code className="w-3 h-3" /> {name}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <EditorialCTA
        title="Start <hlt>building</hlt> today."
        description="Whether you're developing a new prototype or refining a complex system, InnoBotics provides the community and infrastructure for your vision."
      />
    </div>
  )
}
