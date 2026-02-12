import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react'
import { Hero } from '@/components/custom/sections/hero'
import { FadeIn } from '@/components/custom/motion/fade-in'
import { PROJECTS } from '@/data/projects'
import { TEAM } from '@/data/team'
import WhoWeAre from '@/components/custom/sections/who-we-are'
import { ProjectCard } from '@/components/custom/cards/project-card'
import { EVENTS } from '@/data/events'
import { EventCard } from '@/components/custom/cards/event-card'
import { EditorialCTA } from '@/components/custom/sections/editorial-cta'

export default function Home() {
  // Get latest 3 items
  const featuredProjects = PROJECTS.slice(0, 3)
  const coreTeam = TEAM.slice(0, 4)
  const upcomingEvents = EVENTS.slice(0, 3)

  return (
    <>
      <Hero />

      {/* Sections Wrapper */}
      <div className="w-full">
        <section className="py-24 bg-background relative overflow-hidden">
          {/* Subtle background orb */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

          <div className="container px-6 md:px-8">
            <WhoWeAre />
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 border-t border-border/40">
          <div className="container px-6 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-20">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight">The Team</h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <Link
                  href="/team"
                  className="hidden md:inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                >
                  Meet everyone
                  <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {coreTeam.map((member, index) => (
                <FadeIn key={member.name} delay={index * 0.1}>
                  <div className="text-center group relative">
                    <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-2 ring-border/40 group-hover:ring-primary/40 transition-all duration-500">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <h3 className="text-lg font-medium tracking-tight mb-1">{member.name}</h3>
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <p className="text-xs uppercase tracking-widest text-primary font-semibold">
                        {member.role}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4 px-2">
                      {member.bio}
                    </p>
                    <div className="flex justify-center gap-3 [&_svg]:size-4.5">
                      {member.socials?.github && (
                        <Link
                          href={member.socials.github}
                          target="_blank"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="GitHub"
                        >
                          <Github />
                        </Link>
                      )}
                      {member.socials?.linkedin && (
                        <Link
                          href={member.socials.linkedin}
                          target="_blank"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin />
                        </Link>
                      )}
                      {member.socials?.twitter && (
                        <Link
                          href={member.socials.twitter}
                          target="_blank"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="Twitter"
                        >
                          <Twitter />
                        </Link>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <div className="mt-12 md:hidden text-center">
              <Link
                href="/team"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors inline-flex items-center"
              >
                Meet everyone <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Selected Projects (List Layout) */}
        {/* Selected Projects (Editorial List Layout) */}
        {/* Selected Projects (Editorial List Layout) */}
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
                  <ProjectCard index={index} {...project} />
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

        {/* Upcoming Events (List Layout) */}
        {/* Upcoming Events (Minimal List Layout) */}
        <section className="py-24 border-t border-border/40">
          <div className="container px-6 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-20">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
                  Upcoming Sessions
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <Link
                  href="/events"
                  className="hidden md:inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                >
                  View calendar
                  <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </FadeIn>
            </div>

            <div className="space-y-0">
              {upcomingEvents.map((event, index) => (
                <EventCard key={event.slug} {...event} />
              ))}
            </div>

            <div className="mt-12 md:hidden">
              <Link
                href="/events"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors inline-flex items-center"
              >
                View calendar <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Editorial CTA */}
        <EditorialCTA
          title="Start building today."
          description="Whether you're writing your first line of code or deploying complex systems, there's a place for you here."
        />
      </div>
    </>
  )
}
