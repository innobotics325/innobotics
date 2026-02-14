import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/custom/motion/fade-in'
import { EVENTS } from '@/data/events'
import { EventCard } from '@/components/custom/cards/event-card'

export default function EventsSlot() {
  const upcomingEvents = EVENTS.slice(0, 3)

  return (
    <section className="py-24 border-t border-border/40">
      <div className="container px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">Upcoming Sessions</h2>
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
  )
}
