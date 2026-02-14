import { FadeIn } from '../motion/fade-in'

export default function WhoWeAre() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-baseline">
      <div className="md:col-span-4 relative">
        <FadeIn>
          <div className="pl-6 border-l-2 border-primary/20">
            <h2 className="text-xs uppercase tracking-[0.3em] font-semibold text-muted-foreground mb-6">
              The Essence
            </h2>
            <span className="text-5xl md:text-7xl font-medium tracking-tighter text-foreground leading-[0.9]">
              Who <span className="italic font-serif text-primary">we</span> are
            </span>
          </div>
        </FadeIn>
      </div>
      <div className="md:col-span-8">
        <FadeIn delay={0.2}>
          <p className="text-2xl md:text-4xl font-light leading-snug text-muted-foreground/90 tracking-tight flex flex-wrap">
            To cultivate a space where{' '}
            <span className="text-foreground italic font-serif font-normal">
              innovation, curiosity, and collaboration
            </span>{' '}
            thrive — turning ideas into intelligent machines and lines of code into real-world
            impact.
          </p>
        </FadeIn>
      </div>
    </div>
  )
}
