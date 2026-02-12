import { Metadata } from 'next'
import { FadeIn } from '@/components/custom/motion/fade-in'
import { Stagger, StaggerItem } from '@/components/custom/motion/stagger'
import { EventCard } from '@/components/custom/cards/event-card'
import { EVENTS } from '@/data/events'
import { EditorialCTA } from '@/components/custom/sections/editorial-cta'
import { HighlightedText } from '@/components/custom/typography/highlighted-text'

export const metadata: Metadata = {
  title: 'Events',
  description: 'Upcoming workshops, seminars, and hackathons.',
}

export default function EventsPage() {
  const upcomingEvents = EVENTS.filter((e) => new Date(e.date) > new Date())
  const pastEvents = EVENTS.filter((e) => new Date(e.date) < new Date())

  return (
    <div className="py-32">
      <div className="container mx-auto px-6 md:px-8">
        <FadeIn>
          <div className="max-w-3xl mb-24">
            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter mb-8 leading-[0.9]">
              Our <HighlightedText text="<hlt>Sessions</hlt>" />
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              Join us for learning, networking, and building the next generation of robotics.
            </p>
          </div>
        </FadeIn>

        <section className="mb-32">
          <FadeIn delay={0.1}>
            <div className="flex items-center justify-between mb-12 border-b border-border/40 pb-4">
              <h2 className="text-xs uppercase tracking-[0.3em] font-semibold text-muted-foreground">
                Upcoming Events
              </h2>
              <span className="text-xs font-mono text-muted-foreground/60">
                {upcomingEvents.length} Sessions
              </span>
            </div>
          </FadeIn>
          {upcomingEvents.length > 0 ? (
            <Stagger className="space-y-0">
              {upcomingEvents.map((event) => (
                <StaggerItem key={event.slug}>
                  <EventCard {...event} />
                </StaggerItem>
              ))}
            </Stagger>
          ) : (
            <p className="text-xl font-light text-muted-foreground py-12">
              No upcoming events at the moment.
            </p>
          )}
        </section>

        {pastEvents.length > 0 && (
          <section>
            <FadeIn delay={0.2}>
              <div className="flex items-center justify-between mb-12 border-b border-border/40 pb-4">
                <h2 className="text-xs uppercase tracking-[0.3em] font-semibold text-muted-foreground">
                  Past Events
                </h2>
              </div>
            </FadeIn>
            <Stagger className="space-y-0 opacity-80">
              {pastEvents.map((event) => (
                <StaggerItem key={event.slug}>
                  <EventCard {...event} />
                </StaggerItem>
              ))}
            </Stagger>
          </section>
        )}
      </div>
      <EditorialCTA
        title="Impact the future."
        description="Whether you're attending a session or joining a project, every step you take with Innobotics builds towards a smarter tomorrow."
      />
    </div>
  )
}
