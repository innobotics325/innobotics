'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { formatDate } from '@/utilities/ui'

interface EventCardProps {
  title: string
  description: string
  date: string
  location: string
  image: string
  category: string
  slug: string
}

export function EventCard({
  title,
  description,
  date,
  location,
  image,
  category,
  slug,
}: EventCardProps) {
  return (
    <Link href={`/events/${slug}`} className="group block">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-t border-border/40 py-12 transition-all hover:bg-secondary/20 relative overflow-hidden">
        {/* Date Column */}
        <div className="md:col-span-1 hidden md:block">
          <div className="flex flex-col">
            <span className="text-3xl font-medium text-foreground tracking-tighter leading-none">
              {formatDate(date, { day: 'numeric' })}
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">
              {formatDate(date, { month: 'short' })}
            </span>
          </div>
        </div>

        {/* Image Column */}
        <div className="md:col-span-2 hidden lg:block">
          <div className="relative aspect-4/3 rounded-lg overflow-hidden border border-border/40">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Title & Category Column */}
        <div className="md:col-span-4 lg:col-span-3">
          <div className="flex items-center gap-2 mb-2">
            <Badge
              variant="outline"
              className="text-[10px] uppercase tracking-widest font-semibold px-2 py-0 h-5 border-primary/20 bg-primary/5 text-primary"
            >
              {category}
            </Badge>
            <span className="md:hidden text-xs text-muted-foreground">
              • {formatDate(date, { day: 'numeric', month: 'short' })}
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-medium group-hover:text-primary transition-colors leading-tight">
            {title}
          </h3>
        </div>

        {/* Location & Snippet Column */}
        <div className="md:col-span-5 flex flex-col gap-2">
          <p className="text-lg font-light text-muted-foreground group-hover:text-foreground/80 transition-colors line-clamp-2 leading-relaxed">
            {description}
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground/60">
            <MapPin className="w-3.5 h-3.5" />
            <span>{location}</span>
          </div>
        </div>

        {/* Arrow Column */}
        <div className="md:col-span-1 flex justify-end">
          <div className="w-12 h-12 rounded-full border border-border/60 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all duration-500">
            <ArrowRight className="w-5 h-5 -rotate-45 text-muted-foreground group-hover:text-primary group-hover:rotate-0 transition-all duration-300" />
          </div>
        </div>
      </div>
    </Link>
  )
}
