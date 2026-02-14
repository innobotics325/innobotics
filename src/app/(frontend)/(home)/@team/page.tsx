import { FadeIn } from '@/components/custom/motion/fade-in'
import Link from 'next/link'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { ArrowRight, Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'

export const revalidate = 3600

export default async function Team() {
  const payload = await getPayload({ config: configPromise })
  const teamRes = await payload.find({
    collection: 'members',
    sort: 'sort',
  })
  const coreTeam = teamRes.docs
  return (
    <section className="py-24 border-t border-border/40">
      <div className="container px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">The Team</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link
              href="/team"
              className="hidden md:inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              Meet everyone
              <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {coreTeam.map((member, index) => (
            <FadeIn key={member.id} delay={index * 0.1}>
              <div className="text-center group relative">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-2 ring-border/40 group-hover:ring-primary/40 transition-all duration-500">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="text-lg font-medium tracking-tight mb-1">{member.name}</h3>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <p className="text-xs uppercase tracking-widest text-primary font-semibold">
                    {member.tag}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4 px-2 line-clamp-3">
                  {member.description}
                </p>
                <div className="flex justify-center gap-3 [&_svg]:size-4">
                  {member.githubId && (
                    <Link
                      href={`https://github.com/${member.githubId}`}
                      target="_blank"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="GitHub"
                    >
                      <Github />
                    </Link>
                  )}
                  {member.linkedinId && (
                    <Link
                      href={`https://linkedin.com/in/${member.linkedinId}`}
                      target="_blank"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin />
                    </Link>
                  )}
                  {member.twitterId && (
                    <Link
                      href={`https://twitter.com/${member.twitterId}`}
                      target="_blank"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter />
                    </Link>
                  )}
                  {member.instagramId && (
                    <Link
                      href={`https://instagram.com/${member.instagramId}`}
                      target="_blank"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram />
                    </Link>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 md:hidden text-center">
          <Link
            href="/team"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors inline-flex items-center"
          >
            Meet everyone <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
