'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import { socials } from '@/utilities/socials'

interface TeamCardProps {
  index: number
  name: string
  tag: string
  description: string
  imageUrl: string
  githubId?: string | null
  linkedinId?: string | null
  twitterId?: string | null
  instagramId?: string | null
}

export function TeamCard({
  index,
  name,
  tag,
  description,
  imageUrl,
  githubId,
  linkedinId,
  twitterId,
  instagramId,
}: TeamCardProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center border-t border-border/40 py-12 transition-all hover:bg-secondary/20 -mx-6 md:-mx-8 px-6 md:px-8 group">
      {/* Index Column */}
      <div className="col-span-1 hidden lg:block">
        <span className="text-xs font-mono text-muted-foreground/60">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Portrait Column */}
      <div className="lg:col-span-1">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border border-border/40 bg-secondary/20">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Name & Role Column */}
      <div className="lg:col-span-3">
        <h3 className="text-2xl font-medium group-hover:text-primary transition-colors leading-tight">
          {name}
        </h3>
        <p className="text-xs uppercase tracking-widest text-primary font-semibold mt-1">{tag}</p>
      </div>

      {/* Bio Column */}
      <div className="lg:col-span-5">
        <p className="text-lg font-light text-muted-foreground group-hover:text-foreground/80 transition-colors line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Socials Column */}
      <div className="lg:col-span-2 flex justify-start md:justify-end gap-2">
        {githubId && (
          <Link
            href={socials.getGithubUrl(githubId)}
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-background rounded-full border border-transparent hover:border-border/40"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </Link>
        )}
        {linkedinId && (
          <Link
            href={socials.getLinkedinUrl(linkedinId)}
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-background rounded-full border border-transparent hover:border-border/40"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </Link>
        )}
        {twitterId && (
          <Link
            href={socials.getTwitterUrl(twitterId)}
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-background rounded-full border border-transparent hover:border-border/40"
            aria-label="Twitter"
          >
            <Twitter className="w-4 h-4" />
          </Link>
        )}
        {instagramId && (
          <Link
            href={socials.getInstagramUrl(instagramId)}
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-background rounded-full border border-transparent hover:border-border/40"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  )
}
