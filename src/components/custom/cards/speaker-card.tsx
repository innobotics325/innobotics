'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Linkedin, Twitter } from 'lucide-react'

import { Speaker } from '@/payload-types'

interface SpeakerCardProps {
  index: number
  data: Speaker
}

export function SpeakerCard({ index, data }: SpeakerCardProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center border-t border-border/40 py-12 transition-all hover:bg-secondary/20 -mx-6 md:-mx-8 px-6 md:px-8 group">
      {/* Index Column */}
      <div className="lg:col-span-1 hidden lg:block">
        <span className="text-xs font-mono text-muted-foreground/60">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Portrait Column */}
      <div className="lg:col-span-1">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border border-border/40 bg-secondary/20">
          <Image
            src={data.image}
            alt={data.name}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Name & Company Column */}
      <div className="lg:col-span-3">
        <h3 className="text-2xl font-medium group-hover:text-primary transition-colors leading-tight">
          {data.name}
        </h3>
        <p className="text-xs uppercase tracking-widest text-primary font-semibold mt-1">
          {data.role} @ {data.company}
        </p>
      </div>

      {/* Topic Column */}
      <div className="lg:col-span-5">
        <div className="flex flex-col gap-1">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-semibold">
            Keynote Topic
          </p>
          <p className="text-xl md:text-2xl font-light text-foreground/80 group-hover:text-foreground transition-colors leading-relaxed tracking-tight italic font-serif">
            &quot;{data.topic}&quot;
          </p>
        </div>
      </div>

      {/* Socials Column */}
      <div className="lg:col-span-2 flex justify-start lg:justify-end gap-3">
        {data.linkedin && (
          <Link
            href={data.linkedin}
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-background rounded-full border border-transparent hover:border-border/40"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </Link>
        )}
        {data.twitter && (
          <Link
            href={data.twitter}
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-background rounded-full border border-transparent hover:border-border/40"
            aria-label="Twitter"
          >
            <Twitter className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  )
}
