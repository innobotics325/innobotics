import { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/custom/motion/fade-in'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { HighlightedText } from '@/components/custom/typography/highlighted-text'
import { EditorialCTA } from '@/components/custom/sections/editorial-cta'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the InnoBotics team.',
}

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 md:px-8 py-32 md:py-48">
        <FadeIn>
          <div className="max-w-4xl mb-32">
            <h1 className="text-6xl md:text-9xl font-medium tracking-tighter mb-12 leading-[0.85]">
              Let&apos;s <HighlightedText text="<hlt>Talk</hlt>" />
            </h1>
            <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed max-w-2xl">
              Have questions about projects, partnerships, or just want to explore the frontier of
              robotics? We&apos;re listening.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-20">
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-4 mb-12 border-b border-border/40 pb-4">
                <h2 className="text-xs uppercase tracking-[0.3em] font-semibold text-muted-foreground">
                  The Directory
                </h2>
              </div>

              <div className="space-y-16">
                <div className="group">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold mb-4 block">
                    Electronic Mail
                  </span>
                  <div className="space-y-1">
                    <p className="text-2xl md:text-3xl font-medium tracking-tight hover:text-primary transition-colors cursor-pointer">
                      hello@innobotics.org
                    </p>
                    <p className="text-2xl md:text-3xl font-medium tracking-tight hover:text-primary transition-colors cursor-pointer">
                      sponsorship@innobotics.org
                    </p>
                  </div>
                </div>

                <div className="group">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold mb-4 block">
                    Physical Presence
                  </span>
                  <p className="text-2xl md:text-3xl font-medium tracking-tight leading-tight">
                    Room 304, Innovation Hub
                    <br />
                    Technical University Campus
                  </p>
                </div>

                <div className="group">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold mb-4 block">
                    Direct Line
                  </span>
                  <p className="text-2xl md:text-3xl font-medium tracking-tight">
                    +1 (555) ROBOTICS
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.2}>
              <div className="flex items-center gap-4 mb-12 border-b border-border/40 pb-4">
                <h2 className="text-xs uppercase tracking-[0.3em] font-semibold text-muted-foreground">
                  Quick Inquiry
                </h2>
              </div>

              <form className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label
                      htmlFor="first-name"
                      className="text-xs uppercase tracking-widest font-semibold text-muted-foreground/60"
                    >
                      First Name
                    </label>
                    <Input
                      id="first-name"
                      placeholder="Alan"
                      className="border-0 border-b border-border/40 rounded-none px-0 h-12 focus-visible:ring-0 focus-visible:border-primary transition-colors bg-transparent text-xl font-light"
                    />
                  </div>
                  <div className="space-y-4">
                    <label
                      htmlFor="last-name"
                      className="text-xs uppercase tracking-widest font-semibold text-muted-foreground/60"
                    >
                      Last Name
                    </label>
                    <Input
                      id="last-name"
                      placeholder="Turing"
                      className="border-0 border-b border-border/40 rounded-none px-0 h-12 focus-visible:ring-0 focus-visible:border-primary transition-colors bg-transparent text-xl font-light"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label
                    htmlFor="email"
                    className="text-xs uppercase tracking-widest font-semibold text-muted-foreground/60"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="alan@computing.org"
                    className="border-0 border-b border-border/40 rounded-none px-0 h-12 focus-visible:ring-0 focus-visible:border-primary transition-colors bg-transparent text-xl font-light"
                  />
                </div>

                <div className="space-y-4">
                  <label
                    htmlFor="message"
                    className="text-xs uppercase tracking-widest font-semibold text-muted-foreground/60"
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="How can we build the future together?"
                    className="border-0 border-b border-border/40 rounded-none px-0 min-h-[150px] focus-visible:ring-0 focus-visible:border-primary transition-colors bg-transparent text-xl font-light resize-none"
                  />
                </div>

                <div className="pt-8">
                  <Button
                    size="lg"
                    className="h-16 px-12 text-lg font-light rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-105"
                  >
                    Send Message <ArrowRight className="ml-3 w-5 h-5" />
                  </Button>
                </div>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>

      <EditorialCTA
        title="Impact the future."
        description="Every collaboration starts with a conversation. We're ready to explore how your vision aligns with our technical infrastructure."
      />
    </div>
  )
}
