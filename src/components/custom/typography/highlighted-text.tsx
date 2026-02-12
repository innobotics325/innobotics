import React from 'react'
import { cn } from '@/utilities/ui'

interface HighlightedTextProps {
  text: string
  className?: string
  highlightClassName?: string
}

/**
 * Parses a string and renders segments wrapped in <hlt>...<\/hlt>
 * as premium editorial spans.
 */
export function HighlightedText({ text, className, highlightClassName }: HighlightedTextProps) {
  if (!text) return null

  const parts = text.split(/(<hlt>.*?<(?:\/)?hlt>)/g)

  return (
    <span className={className}>
      {parts.map((part, i) => {
        if (!part) return null

        if (part.startsWith('<hlt>')) {
          const content = part.replace('<hlt>', '').replace('</hlt>', '')

          return (
            <span key={i} className={cn('italic font-serif text-primary', highlightClassName)}>
              {content}
            </span>
          )
        }

        if (part.includes('hlt')) return null

        return <span key={i}>{part}</span>
      })}
    </span>
  )
}
