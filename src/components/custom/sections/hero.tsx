'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/custom/motion/fade-in'
import { HighlightedText } from '../typography/highlighted-text'

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full opacity-20 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-[20%] -right-[5%] w-[35%] h-[35%] rounded-full opacity-10 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full opacity-15 blur-[150px]"
          style={{
            background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }}
        />

        <div className="absolute inset-0 opacity-[0.4] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="container relative z-10 px-6 md:px-8 mx-auto max-w-7xl">
        <div className="max-w-4xl space-y-10">
          <FadeIn>
            <h1 className="text-6xl md:text-8xl font-medium tracking-tight text-foreground/90 flex flex-wrap">
              <HighlightedText text="<hlt>Innovation</hlt>" />
              &nbsp;
              <span className="italic font-serif">In</span>&nbsp;
              <HighlightedText text="<hlt>Motion</hlt>" />
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground leading-relaxed max-w-2xl font-light italic">
              By the students, For the students
            </p>
            <p></p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-light">
              Welcome to InnoBotics Collective! A creative fusion of coding, robotics, and
              innovation, this is the club where brains meet bots.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-wrap gap-6 pt-4">
              <Button
                asChild
                size="lg"
                className="h-14 px-10 text-lg rounded-full shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all font-medium"
              >
                <Link href="/join">Become a Member</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="h-14 px-10 text-lg text-muted-foreground hover:text-foreground hover:bg-transparent group"
              >
                <Link href="/about" className="flex items-center gap-2">
                  Read our Story
                  <span className="w-8 h-px bg-muted-foreground group-hover:bg-foreground group-hover:w-12 transition-all duration-300" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
