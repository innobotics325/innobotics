import Link from 'next/link'
import { CONTACT_INFO, SITE_CONFIG } from '@/utilities/constants'
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react'
import { FadeIn } from '@/components/custom/motion/fade-in'
import { HighlightedText } from '@/components/custom/typography/highlighted-text'

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/40 overflow-hidden">
      <div className="container px-6 md:px-8 py-24 md:py-32">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 mb-24">
            {/* Brand Section */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6">
                <Link
                  href="/"
                  className="text-4xl md:text-5xl font-medium tracking-tighter leading-none block"
                >
                  Inno
                  <HighlightedText text="<hlt>Botics</hlt>" />
                </Link>
                <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-sm">
                  {SITE_CONFIG.description}
                </p>
              </div>

              <div className="flex items-center gap-8">
                <Link
                  href={SITE_CONFIG.links.github}
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href={SITE_CONFIG.links.twitter}
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href={SITE_CONFIG.links.linkedin}
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href={SITE_CONFIG.links.instagram}
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Navigation Grids */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
              <div className="space-y-8">
                <h3 className="text-xs uppercase tracking-[0.3em] font-semibold text-primary">
                  Navigation
                </h3>
                <ul className="space-y-4">
                  {SITE_CONFIG.menu.slice(0, 4).map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-lg font-light text-muted-foreground hover:text-foreground transition-colors tracking-tight"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8">
                <h3 className="text-xs uppercase tracking-[0.3em] font-semibold text-primary">
                  Platform
                </h3>
                <ul className="space-y-4">
                  {SITE_CONFIG.menu.slice(3).map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-lg font-light text-muted-foreground hover:text-foreground transition-colors tracking-tight"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  {/* <li>
                    <Link
                      href="/privacy"
                      className="text-lg font-light text-muted-foreground hover:text-foreground transition-colors tracking-tight"
                    >
                      Privacy Policy
                    </Link>
                  </li> */}
                </ul>
              </div>

              <div className="space-y-8">
                <h3 className="text-xs uppercase tracking-[0.3em] font-semibold text-primary">
                  Headquarters
                </h3>
                <div className="space-y-4 text-lg font-light text-muted-foreground leading-relaxed tracking-tight">
                  <p>{CONTACT_INFO.address}</p>
                  <Link
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="block text-primary hover:text-primary/80 transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </Link>
                  <Link
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="block text-primary hover:text-primary/80 transition-colors"
                  >
                    {CONTACT_INFO.phone}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-border/40 pt-12">
            <p className="text-xs font-mono text-muted-foreground/60 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Engineered for the future.
            </p>
            <div className="flex items-center gap-8 text-[10px] uppercase tracking-[0.3em] font-semibold text-muted-foreground/40">
              <span>Human Crafted</span>
              {/* <span className="w-1 h-1 bg-border/60 rounded-full" /> */}
              {/* <span>Version 2.0</span> */}
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}
