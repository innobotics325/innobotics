import { Metadata } from 'next'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/custom/motion/fade-in'
import { Button } from '@/components/ui/button'
import { HighlightedText } from '@/components/custom/typography/highlighted-text'

export const metadata: Metadata = {
  title: 'Join Us',
  description: 'Become a member of the InnoBotics Club and start your journey.',
}

const BENEFITS = [
  'Access to exclusive workshops and hackathons',
  'Networking with industry professionals',
  'Mentorship from senior students and alumni',
  'Opportunity to work on internal projects',
  'Career guidance and resume reviews',
  'Community events and socials',
]

const RECRUITMENT_PROCESS = [
  {
    step: '01',
    title: 'Fill the Application',
    description: 'Tell us about yourself, your interests, and what you want to build.',
  },
  {
    step: '02',
    title: 'The Casual Chat',
    description: "An informal interview to see if our club's culture matches your energy.",
  },
  {
    step: '03',
    title: 'Orientation',
    description: 'Welcome aboard! Get started with your first project orientation.',
  },
]

export default function JoinPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-32 md:py-48 relative overflow-hidden">
        {/* Subtle background orb */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

        <div className="container px-6 md:px-8 mx-auto">
          <FadeIn>
            <div className="max-w-4xl mb-32">
              <h1 className="text-6xl md:text-9xl font-medium tracking-tighter mb-12 leading-[0.85]">
                <HighlightedText text="The <hlt>Journey</hlt>" />
              </h1>
              <p className="text-xl md:text-3xl font-light leading-relaxed text-muted-foreground max-w-2xl">
                Join a community of enthusisatic students passionate about technology, and building
                the future. We value passion over certificates.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            {/* Why Join - Editorial List */}
            <div className="lg:col-span-12">
              <FadeIn>
                <div className="flex items-center justify-between mb-12 border-b border-border/40 pb-4">
                  <h2 className="text-xs uppercase tracking-[0.3em] font-semibold text-muted-foreground">
                    The Why
                  </h2>
                  <span className="text-xs font-mono text-muted-foreground/60">
                    Why Join InnoBotics?
                  </span>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12">
                {BENEFITS.map((benefit, index) => (
                  <FadeIn key={index} delay={index * 0.1}>
                    <div className="flex flex-col gap-4 group">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-medium tracking-tight">{benefit}</h3>
                      </div>
                      <div className="h-px w-full bg-border/40" />
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Application Process */}
            <div className="lg:col-span-12 mt-32">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                <div className="lg:col-span-4">
                  <FadeIn>
                    <h2 className="text-xs uppercase tracking-[0.3em] font-semibold text-muted-foreground mb-8">
                      The Process
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-medium tracking-tighter leading-tight">
                      Ready to <span className="italic font-serif text-primary">apply?</span>
                    </h3>
                    <p className="mt-8 text-lg text-muted-foreground font-light leading-relaxed">
                      Our recruitment process is designed to get to know you better. We value
                      curiosity and potential over current skill level.
                    </p>
                  </FadeIn>
                </div>

                <div className="lg:col-span-8">
                  <div className="space-y-0">
                    {RECRUITMENT_PROCESS.map((item, index) => (
                      <FadeIn key={item.step} delay={index * 0.1}>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline border-t border-border/40 py-12 group hover:bg-secondary/20 transition-all -mx-6 md:-mx-8 px-6 md:px-8">
                          <div className="md:col-span-2">
                            <span className="text-xs font-mono text-muted-foreground/60">
                              STEP {item.step}
                            </span>
                          </div>
                          <div className="md:col-span-4">
                            <h4 className="text-2xl font-medium group-hover:text-primary transition-colors">
                              {item.title}
                            </h4>
                          </div>
                          <div className="md:col-span-6">
                            <p className="text-lg font-light text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    ))}
                  </div>

                  <FadeIn delay={0.4} className="mt-20">
                    <Button
                      size="lg"
                      className="rounded-full px-12 py-8 text-xl font-light tracking-tight hover:scale-105 transition-all group overflow-hidden relative"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        Launch Application{' '}
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                      </span>
                    </Button>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
