import WhoWeAre from '@/components/custom/sections/who-we-are'

export default function AboutSlot() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background orb */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="container px-6 md:px-8">
        <WhoWeAre />
      </div>
    </section>
  )
}
