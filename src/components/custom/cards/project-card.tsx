'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface ProjectCardProps {
  index: number
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl?: string
  demoUrl?: string
  slug: string
}

export function ProjectCard({
  index,
  title,
  description,
  image,
  tags,
  githubUrl,
  demoUrl,
  slug,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="group block">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-t border-border/40 py-12 transition-all hover:bg-secondary/20 -mx-6 md:-mx-8 px-6 md:px-8">
        {/* Index Column */}
        <div className="md:col-span-1 hidden md:block">
          <span className="text-xs font-mono text-muted-foreground/60">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Thumbnail Column */}
        <div className="md:col-span-2 hidden lg:block">
          <div className="relative aspect-video rounded overflow-hidden border border-border/40 bg-secondary/20">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Title & Tags Column */}
        <div className="md:col-span-3">
          <h3 className="text-2xl md:text-3xl font-medium group-hover:text-primary transition-colors leading-tight">
            {title}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-widest uppercase text-muted-foreground border border-border/40 px-2 py-0.5 rounded-full bg-secondary/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Description Column */}
        <div className="md:col-span-5">
          <p className="text-lg font-light text-muted-foreground group-hover:text-foreground/80 transition-colors line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Arrow Column */}
        <div className="md:col-span-1 flex justify-end">
          <ArrowRight className="w-6 h-6 -rotate-45 text-muted-foreground group-hover:text-primary group-hover:rotate-0 transition-all duration-300" />
        </div>
      </div>
    </Link>
  )
}
