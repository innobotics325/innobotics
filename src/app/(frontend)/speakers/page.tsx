import { Metadata } from 'next'
import { FadeIn } from '@/components/custom/motion/fade-in'
import { Stagger, StaggerItem } from '@/components/custom/motion/stagger'
import { SpeakerCard } from '@/components/custom/cards/speaker-card'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { EditorialCTA } from '@/components/custom/sections/editorial-cta'
import { HighlightedText } from '@/components/custom/typography/highlighted-text'

export const metadata: Metadata = {
  title: 'Speakers',
  description: 'Meet the industry experts and thought leaders speaking at our events.',
}

export default async function SpeakersPage() {
  const payload = await getPayload({ config: configPromise })
  const speakers = await payload.find({
    collection: 'speakers',
    depth: 1,
    limit: 100,
  })

  return (
    <div className="py-32">
      <div className="container mx-auto px-6 md:px-8 ">
        <FadeIn>
          <div className="max-w-3xl mb-24">
            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter mb-8 leading-[0.9]">
              <HighlightedText text="The <hlt>Voices</hlt>" />
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              Learn from industry experts, roboticists, and tech visionaries who are defining the
              frontier of intelligent machines.
            </p>
          </div>
        </FadeIn>

        <div className="flex items-center justify-between mb-12 border-b border-border/40 pb-4">
          <h2 className="text-xs uppercase tracking-[0.3em] font-semibold text-muted-foreground">
            Guest Speakers
          </h2>
          <span className="text-xs font-mono text-muted-foreground/60">
            {speakers.totalDocs} Voices
          </span>
        </div>

        {speakers.docs.length > 0 ? (
          <Stagger className="space-y-0">
            {speakers.docs.map((speaker, index) => (
              <StaggerItem key={speaker.id}>
                <SpeakerCard index={index} data={speaker} />
              </StaggerItem>
            ))}
          </Stagger>
        ) : (
          <p className="text-xl font-light text-muted-foreground py-12">
            No speakers at the moment. Stay tuned for upcoming events!
          </p>
        )}
      </div>
      <EditorialCTA
        title="Join the <hlt>Voices</hlt>."
        description="Our speaker series is a living archive of technological evolution. Join the club to be part of the conversation."
      />
    </div>
  )
}
