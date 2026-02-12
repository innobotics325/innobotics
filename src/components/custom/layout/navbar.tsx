'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, Menu, Terminal } from 'lucide-react'
import { cn } from '@/utilities/ui'
import { SITE_CONFIG } from '@/utilities/constants'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { ModeToggle } from '@/components/custom/mode-toggle'

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto container max-w-7xl flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary/5 text-primary p-1.5 rounded-md transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <Terminal className="h-5 w-5" />
          </div>
          <span className="font-medium text-lg tracking-tight">{SITE_CONFIG.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-8">
          {SITE_CONFIG.menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-secondary-foreground',
                pathname === item.href ? 'text-secondary-foreground' : 'text-muted-foreground',
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <Link href="/join" className="hidden sm:inline-flex">
            <Button size="sm" className="font-medium px-6 h-8">
              Join
            </Button>
          </Link>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="-mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:min-w-[500px] p-0 border-l border-border/40 bg-background flex flex-col overflow-auto"
            >
              <div className="p-8 border-b border-border/40">
                <SheetHeader className="text-left">
                  <SheetTitle className="flex items-center gap-3 font-medium text-2xl tracking-tight">
                    <div className="bg-primary/5 text-primary p-2 rounded-md">
                      <Terminal className="h-6 w-6" />
                    </div>
                    {SITE_CONFIG.name}
                  </SheetTitle>
                </SheetHeader>
              </div>

              <div className="grow flex flex-col justify-center px-8">
                <nav className="flex flex-col">
                  {SITE_CONFIG.menu.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'group grid grid-cols-[40px_1fr] items-baseline py-8 border-b border-border/40 last:border-0 transition-all hover:pl-4',
                        pathname === item.href ? 'text-primary' : 'text-muted-foreground',
                      )}
                    >
                      <span className="text-xs font-mono opacity-40 group-hover:opacity-100 transition-opacity">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-5xl md:text-6xl font-medium tracking-tighter transition-colors group-hover:text-primary">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="p-8 border-t border-border/40 bg-secondary/5">
                <Link href="/join" onClick={() => setIsOpen(false)}>
                  <Button
                    size="lg"
                    className="w-full py-10 text-xl font-light tracking-tight rounded-full group overflow-hidden relative shadow-none"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Start Your Journey
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
