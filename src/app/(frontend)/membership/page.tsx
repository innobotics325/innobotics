import { Metadata } from 'next'
import { Rocket, Users, Globe } from 'lucide-react'
import { FadeIn } from '@/components/custom/motion/fade-in'
import { Stagger, StaggerItem } from '@/components/custom/motion/stagger'
import { HighlightedText } from '@/components/custom/typography/highlighted-text'
import { MembershipForm } from '@/components/custom/forms/membership-form'
import { EditorialCTA } from '@/components/custom/sections/editorial-cta'
import { SITE_CONFIG } from '@/utilities/constants'

export const metadata: Metadata = {
  title: 'Apply for Membership | InnoBotics Club',
  description:
    'Join InnoBotics Club at Tripura University. Apply to become a member and collaborate on cutting-edge robotics, AI, IoT, web, and cybersecurity projects.',
  keywords: [
    'InnoBotics Club',
    'Club Membership Application',
    'Tripura University Robotics',
    'Tripura University IT MCA Club',
    'Student Robotics Society',
    'Join InnoBotics',
    'Artificial Intelligence Club',
    'Tech Student Community',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/membership`,
  },
  openGraph: {
    title: 'Apply for Membership | InnoBotics Club',
    description:
      'Become a member of the InnoBotics Club. Build robotics, artificial intelligence, IoT, and software solutions in an innovative collegiate incubator.',
    url: `${SITE_CONFIG.url}/membership`,
    siteName: SITE_CONFIG.name,
    type: 'website',
    images: [
      {
        url: `${SITE_CONFIG.url}/og.png`,
        width: 1200,
        height: 630,
        alt: 'InnoBotics Club Membership Application',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apply for Membership | InnoBotics Club',
    description:
      'Become a member of the InnoBotics Club. Build robotics, artificial intelligence, IoT, and software solutions.',
  },
}

const PILLARS = [
  {
    icon: Rocket,
    title: 'Innovation',
    description:
      'Fostering a culture of creativity, hardware hacking, and hands-on problem solving through real-world technical projects.',
  },
  {
    icon: Users,
    title: 'Community',
    description:
      'Building a supportive, multidisciplinary network of students, alumni, and mentors passionate about technology.',
  },
  {
    icon: Globe,
    title: 'Industry Impact',
    description:
      'Connecting student builders with industry practices to bridge academia with modern research and product engineering.',
  },
]

const FAQS = [
  {
    step: 'Q 01',
    question: 'Prior experience needed?',
    answer:
      'None required. We prioritize enthusiasm, curiosity, and willingness to learn over existing certificates or technical resumes.',
  },
  {
    step: 'Q 02',
    question: 'Who can apply?',
    answer:
      'Any enrolled university student across MCA, IT, CSE, and related disciplines who wants to explore software, electronics, or robotics.',
  },
  {
    step: 'Q 03',
    question: 'What is the selection chat?',
    answer:
      'Following form submission, our leads host a brief informal chat to understand your passions and align you with active track initiatives.',
  },
  {
    step: 'Q 04',
    question: 'Expected weekly hours?',
    answer:
      'Typically 2 to 4 hours per week for collaborative sprint sessions, lab meetups, and weekend hackathons, with exam period flexibility.',
  },
]

export default function MembershipPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EducationalOrganization',
        name: 'InnoBotics Club',
        url: SITE_CONFIG.url,
        description: SITE_CONFIG.description,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Department of Information Technology, Tripura University',
          addressLocality: 'Suryamaninagar',
          addressRegion: 'Tripura',
          addressCountry: 'IN',
        },
      },
      {
        '@type': 'ApplyAction',
        name: 'InnoBotics Club Membership Application',
        description:
          'Application form to become an active student member of the InnoBotics Club at Tripura University.',
        target: `${SITE_CONFIG.url}/membership`,
        actionStatus: 'PotentialActionStatus',
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
        {/* Subtle background orb */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="container px-6 md:px-8 mx-auto">
          <FadeIn>
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-6 leading-[0.9]">
                The <HighlightedText text="<hlt>Application</hlt>" />
              </h1>
              <p className="text-lg md:text-2xl font-light leading-relaxed text-muted-foreground max-w-2xl">
                Turning curiosity into real-world technology. Join our community of builders,
                innovators, and future engineers.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. The Pillars Section (Matching About Page's mission.tsx exactly) */}
      <section className="py-32 md:py-48 px-6 md:px-8 border-t border-border/40 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
            <div className="lg:col-span-4">
              <FadeIn>
                <h2 className="text-xs uppercase tracking-[0.3em] font-semibold text-muted-foreground mb-8">
                  The Pillars
                </h2>
                <h3 className="text-4xl md:text-6xl font-medium tracking-tighter leading-tight">
                  To <span className="italic font-serif text-primary">ignite</span> builders & thinkers.
                </h3>
              </FadeIn>
            </div>
            <div className="lg:col-span-8 flex items-end">
              <FadeIn delay={0.2}>
                <p className="text-xl md:text-3xl font-light leading-relaxed text-muted-foreground max-w-2xl">
                  We cultivate a space where curiosity transforms into intelligent machines and
                  lines of code become real-world infrastructure.
                </p>
              </FadeIn>
            </div>
          </div>

          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-20 lg:gap-32">
            {PILLARS.map((pillar, index) => (
              <StaggerItem key={index} className="relative group">
                <div className="space-y-8">
                  <div className="inline-flex items-center justify-center text-primary transition-all duration-500 group-hover:translate-x-2">
                    <pillar.icon className="size-12" strokeWidth={1} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-lg text-muted-foreground font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 3. The Application Form (Matching Contact Page's 12-col layout) */}
      <section className="py-32 md:py-48 border-t border-border/40 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Left Column: The Directory / Requirements */}
            <div className="lg:col-span-5 space-y-20">
              <FadeIn delay={0.1}>
                <div className="flex items-center gap-4 mb-12 border-b border-border/40 pb-4">
                  <h2 className="text-xs uppercase tracking-[0.3em] font-semibold text-muted-foreground">
                    The Guidelines
                  </h2>
                </div>

                <div className="space-y-16">
                  <div className="group">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold mb-4 block">
                      Candidate Profile
                    </span>
                    <p className="text-2xl md:text-3xl font-medium tracking-tight leading-tight">
                      Open to all enrolled university students passionate about software, robotics,
                      hardware, or design.
                    </p>
                  </div>

                  <div className="group">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold mb-4 block">
                      Weekly Commitment
                    </span>
                    <p className="text-2xl md:text-3xl font-medium tracking-tight">
                      2 to 4 hours per week
                    </p>
                    <p className="text-base text-muted-foreground font-light mt-2">
                      Hands-on project work, weekend sprints, and collaborative workshops.
                    </p>
                  </div>

                  <div className="group">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold mb-4 block">
                      Physical Base
                    </span>
                    <p className="text-2xl md:text-3xl font-medium tracking-tight leading-tight">
                      Department of Information Technology
                      <br />
                      Tripura University Campus
                    </p>
                  </div>

                  <div className="group">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold mb-4 block">
                      Direct Channel
                    </span>
                    <p className="text-2xl md:text-3xl font-medium tracking-tight hover:text-primary transition-colors cursor-pointer">
                      innobotics325@gmail.com
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Application Form */}
            <div className="lg:col-span-7">
              <FadeIn delay={0.2}>
                <div className="flex items-center gap-4 mb-12 border-b border-border/40 pb-4">
                  <h2 className="text-xs uppercase tracking-[0.3em] font-semibold text-muted-foreground">
                    Quick Inquiry
                  </h2>
                </div>

                <MembershipForm />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Inquiries / FAQ Section (Matching Join Page's RECRUITMENT_PROCESS rows) */}
      <section className="py-32 md:py-48 border-t border-border/40 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4">
              <FadeIn>
                <h2 className="text-xs uppercase tracking-[0.3em] font-semibold text-muted-foreground mb-8">
                  The Inquiries
                </h2>
                <h3 className="text-4xl md:text-5xl font-medium tracking-tighter leading-tight">
                  Curious about the <span className="italic font-serif text-primary">details?</span>
                </h3>
                <p className="mt-8 text-lg text-muted-foreground font-light leading-relaxed">
                  Everything you need to know about our recruitment process, time commitment, and
                  what happens after applying.
                </p>
              </FadeIn>
            </div>

            <div className="lg:col-span-8">
              <div className="space-y-0">
                {FAQS.map((faq, index) => (
                  <FadeIn key={faq.step} delay={index * 0.1}>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline border-t border-border/40 py-12 group hover:bg-secondary/20 transition-all -mx-6 md:-mx-8 px-6 md:px-8">
                      <div className="md:col-span-2">
                        <span className="text-xs font-mono text-muted-foreground/60">
                          {faq.step}
                        </span>
                      </div>
                      <div className="md:col-span-4">
                        <h4 className="text-2xl font-medium group-hover:text-primary transition-colors">
                          {faq.question}
                        </h4>
                      </div>
                      <div className="md:col-span-6">
                        <p className="text-lg font-light text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Editorial CTA (Matching About and Team pages) */}
      <EditorialCTA
        title="Impact the <hlt>future</hlt>."
        description="Every project starts with a conversation. Join our community of student builders and bring your ideas to life."
        buttonText="Back to Top"
        buttonLink="#top"
      />
    </div>
  )
}
