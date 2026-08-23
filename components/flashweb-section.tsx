"use client"

import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Sparkles } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

/** The product's own site. This is the destination the section exists to send
 *  people to, so it is defined once and used by the button, the visible URL and
 *  the browser mockup alike. */
const FLASHWEB_URL = "https://flashweb.devra.net"

export function FlashWebSection() {
  const { t } = useI18n()

  return (
    <section id="flashweb" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-devra-gold/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-devra-purple/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-devra-gold/10 border border-devra-gold/20 mb-6">
              <Sparkles className="w-4 h-4 text-devra-gold" />
              <span className="text-sm font-semibold text-devra-gold">{t.flashweb.badge}</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              {t.flashweb.title}
              <span className="text-devra-gold">{t.flashweb.titleHighlight}</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              {t.flashweb.description}
            </p>

            {/* Features */}
            <ul className="grid sm:grid-cols-2 gap-4 mb-10">
              {t.flashweb.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-devra-gold/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-devra-gold" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA
                This button used to point at #book-call, which meant the whole
                section described FlashWeb and then funnelled every interested
                visitor into Devra's own booking form. FlashWeb's site was
                reachable from nowhere, which is why Search Console reported no
                referring page for it and why it lost its own brand query to
                eight unrelated companies called FlashWeb.

                The primary action now leaves for the product. The anchor text
                carries the brand deliberately: it is the strongest on-page link
                this domain can give, and "Get Your FlashWeb" beats a bare URL as
                a relevance signal. Booking survives as the secondary action, so
                the funnel is redirected rather than removed. */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-devra-gold to-devra-gold-dark text-background font-semibold hover:opacity-90 transition-all shadow-xl shadow-devra-gold/25 h-14 px-8 text-base group"
                asChild
              >
                <a href={FLASHWEB_URL}>
                  {t.flashweb.cta}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <a
                href="/#book-call"
                className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
              >
                {t.flashweb.ctaSecondary}
              </a>
            </div>

            {/* The bare domain, shown so the destination is legible before the
                click and so the brand appears as text and not only as a label
                on a button. */}
            <p className="mt-4 text-sm">
              <a
                href={FLASHWEB_URL}
                className="font-mono text-muted-foreground hover:text-devra-gold transition-colors"
              >
                flashweb.devra.net
              </a>
            </p>
          </div>

          {/* Visual
              Previously a wireframe of grey rectangles: an abstract drawing of a
              website standing in for the flagship product on the one section
              that sells it. It proved nothing, and the product's whole promise
              is that the site is real before you pay. This is a complete site built
              for a real business and running today. */}
          <div className="relative">
            <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-2xl shadow-devra-purple/10">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-background/50 rounded-md px-3 py-1.5 text-xs text-muted-foreground font-mono truncate">
                    salumeria-alcolica.devra.net
                  </div>
                </div>
              </div>

              <a
                href="https://salumeria-alcolica.devra.net"
                className="block group"
                aria-label="Salumeria Alcolica"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/work/salumeria-alcolica.jpeg"
                  alt="Salumeria Alcolica, a complete restaurant site built with FlashWeb"
                  width={2560}
                  height={1680}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </a>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-card border border-devra-gold/30 rounded-xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-devra-gold/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-devra-gold" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.flashweb.badgeTitle}</p>
                  <p className="text-xs text-muted-foreground">{t.flashweb.badgeSubtitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
