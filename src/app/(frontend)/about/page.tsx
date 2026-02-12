import { Metadata } from 'next'
import { FadeIn } from '@/components/custom/motion/fade-in'
import { Mission } from '@/components/custom/sections/mission'
import { Timeline } from '@/components/custom/sections/timeline'
import { Stats } from '@/components/custom/sections/stats'
import WhoWeAre from '@/components/custom/sections/who-we-are'
import { EditorialCTA } from '@/components/custom/sections/editorial-cta'
import { HighlightedText } from '@/components/custom/typography/highlighted-text'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our mission, history, and the team behind DoIT Club.',
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-32 md:py-48 bg-background relative overflow-hidden">
        {/* Subtle background orb */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

        <div className="container px-6 md:px-8 mx-auto">
          <FadeIn>
            <div className="max-w-4xl mb-32">
              <h1 className="text-6xl md:text-9xl font-medium tracking-tighter mb-12 leading-[0.85]">
                <HighlightedText text="Our <hlt>Story</hlt>" />
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground font-light leading-relaxed max-w-2xl">
                Building a bridge between curiosity and complex robotics systems, one line of code
                at a time.
              </p>
            </div>
          </FadeIn>

          <WhoWeAre />
        </div>
      </section>

      {/* Mission Section */}
      <Mission />

      {/* Stats Section */}
      <Stats />

      {/* History Section */}
      <section className="py-32 md:py-48 bg-background border-t border-border/40">
        <div className="container px-6 md:px-8 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4">
              <FadeIn className="sticky top-32">
                <h2 className="text-xs uppercase tracking-[0.3em] font-semibold text-muted-foreground mb-8">
                  The Journey
                </h2>
                <h3 className="text-4xl md:text-5xl font-medium tracking-tighter leading-tight">
                  From a vision to a <HighlightedText text="<hlt>legacy</hlt>." />
                </h3>
              </FadeIn>
            </div>
            <div className="lg:col-span-8">
              <Timeline />
            </div>
          </div>
        </div>
      </section>

      {/* Editorial CTA */}
      <EditorialCTA
        title="Meet the Minds"
        description="Our community is built by the restless, the curious, and the dedicated. Meet the humans behind Innobotics."
        buttonText="View the Team"
        buttonLink="/team"
      />
    </div>
  )
}
