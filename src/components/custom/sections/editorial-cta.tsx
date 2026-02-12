'use client'

import Link from 'next/link'
import { FadeIn } from '@/components/custom/motion/fade-in'
import { Button } from '@/components/ui/button'
import { HighlightedText } from '@/components/custom/typography/highlighted-text'

interface EditorialCTAProps {
  title?: string
  description?: string
  buttonText?: string
  buttonLink?: string
}

export function EditorialCTA({
  title = 'Start <hlt>building</hlt> today.',
  description = "Whether you're writing your first line of code or deploying complex systems, there's a place for you here.",
  buttonText = 'Apply for Membership',
  buttonLink = '/join',
}: EditorialCTAProps) {
  return (
    <section className="py-32 px-6 md:px-8">
      <div className="container relative rounded-3xl overflow-hidden bg-secondary/30 dark:bg-secondary/10 border border-border/50 py-24 text-center mx-auto">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary/5 to-transparent -z-10" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-primary/5 to-transparent -z-10" />

        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-8 max-w-4xl mx-auto leading-[0.9]">
            <HighlightedText text={title} />
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            {description}
          </p>
          <Button
            asChild
            size="lg"
            className="h-16 px-12 text-xl font-light rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-105"
          >
            <Link href={buttonLink}>{buttonText}</Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
