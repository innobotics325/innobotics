import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Share2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { FadeIn } from '@/components/custom/motion/fade-in'
import { EVENTS } from '@/data/events'
import { formatDate } from '@/utilities/ui'
import { EditorialCTA } from '@/components/custom/sections/editorial-cta'

interface EventPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return EVENTS.map((event) => ({
    slug: event.slug,
  }))
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params
  const event = EVENTS.find((e) => e.slug === slug)

  if (!event) {
    return {
      title: 'Event Not Found',
    }
  }

  return {
    title: `${event.title} | InnoBotics Club`,
    description: event.description,
  }
}

import { HighlightedText } from '@/components/custom/typography/highlighted-text'

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params
  const event = EVENTS.find((e) => e.slug === slug)

  if (!event) {
    notFound()
  }

  const eventDate = new Date(event.date)

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
                href="/events"
                className="group inline-flex items-center text-xs uppercase tracking-[0.3em] font-semibold text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Back to Archive
              </Link>
              <div className="h-px w-12 bg-border/40" />
              <Badge className="bg-primary/5 text-primary border-primary/20 hover:bg-primary/10 transition-colors rounded-full px-4 font-mono text-[10px] uppercase tracking-widest">
                {event.category}
              </Badge>
            </div>

            <div className="max-w-5xl mb-24">
              <h1 className="text-6xl md:text-9xl font-medium tracking-tighter mb-12 leading-[0.85]">
                <HighlightedText text={event.title} />
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-y border-border/40 py-12 -mx-6 md:-mx-8 px-6 md:px-8">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-semibold">
                    Date
                  </span>
                  <p className="text-xl font-medium tracking-tight">
                    {formatDate(eventDate, { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-semibold">
                    Time
                  </span>
                  <p className="text-xl font-medium tracking-tight">
                    {formatDate(eventDate, { hour: 'numeric', minute: 'numeric', hour12: true })}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-semibold">
                    Location
                  </span>
                  <p className="text-xl font-medium tracking-tight">{event.location}</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-border/40 bg-secondary/20 mb-32 group">
              <Image
                src={event.image}
                alt={event.title}
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
                    The Context
                  </h2>
                </div>
                <div className="prose prose-xl prose-primary dark:prose-invert max-w-none font-light leading-relaxed text-muted-foreground">
                  <p className="text-foreground font-medium text-2xl mb-8 leading-snug">
                    {event.description}
                  </p>
                  <p>
                    Join us for an immersive session where we dive deep into the technical
                    architecture and practical applications of intelligent systems. This session is
                    designed for builders who want to move beyond theory and into the realm of
                    functional implementation.
                  </p>
                  <h3 className="text-foreground font-medium text-3xl mt-16 mb-8 tracking-tighter">
                    What to <span className="italic font-serif text-primary">Expect</span>
                  </h3>
                  <ul className="space-y-4 list-none p-0">
                    {[
                      'In-depth technical walkthroughs and live demonstrations.',
                      'Interactive Q&A with industry experts and lead roboticists.',
                      'Networking opportunities with a community of 500+ builders.',
                      'Exclusive access to session resources and codebase repositories.',
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 border-t border-border/20 pt-4 first:border-0 first:pt-0"
                      >
                        <span className="text-xs font-mono text-primary pt-1.5">0{i + 1}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>

            {/* Sidebar / Registration */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <FadeIn delay={0.4}>
                <div className="flex items-center gap-4 mb-12 border-b border-border/40 pb-4">
                  <h2 className="text-xs uppercase tracking-[0.3em] font-semibold text-muted-foreground">
                    Registration
                  </h2>
                </div>
                <div className="p-8 rounded-3xl border border-border/40 bg-secondary/10 backdrop-blur-sm space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-medium tracking-tight">Reserve your spot</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Seats are limited to ensure a high-quality interactive environment.
                      Registration is free for all current members.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button
                      size="lg"
                      className="w-full py-8 text-lg font-light tracking-tight rounded-full group overflow-hidden relative"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        Register Now{' '}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full py-8 text-lg font-light tracking-tight rounded-full border-border/40 hover:bg-secondary/20 transition-all"
                    >
                      <Share2 className="w-4 h-4 mr-3" />
                      Share Event
                    </Button>
                  </div>

                  <div className="pt-8 border-t border-border/20">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground font-light uppercase tracking-widest text-[10px]">
                        Access Level
                      </span>
                      <span className="font-mono text-primary">Open Access</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <EditorialCTA
        title="Impact the future."
        description="Whether you're attending a session or joining a project, every step you take with InnoBotics builds towards a smarter tomorrow."
      />
    </div>
  )
}
