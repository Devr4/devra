"use client"

import { ArrowUpRight } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

/**
 * Replaces the testimonials section.
 *
 * That section carried three quotes from Sarah Chen of "TechStart", Marcus
 * Rivera "Local Business Owner" and Alex Kim "Agency Partner". They were v0's
 * placeholder names, never replaced, translated into six languages and shipped
 * to production. Beyond being untrue, fabricated endorsements are prohibited
 * outright in the EU: the Omnibus Directive added point 23c to Annex I of the
 * Unfair Commercial Practices Directive, and AGCM enforces it in Italy.
 *
 * These are the honest version of the same claim: real sites for real
 * businesses, live, and a visitor can click through and check. That is stronger
 * proof than a quote anyway, because it cannot be invented.
 *
 * Both sites currently serve a "Questo e un sito web di anteprima. Rendilo
 * tuo" banner, so neither is a launched, paid-for client site, whatever the
 * FlashWeb landing's `kind: "client"` label says. The copy is written around
 * that rather than over it: they are complete sites for real businesses, built
 * before the business committed to anything, which is precisely the FlashWeb
 * pitch. Do not relabel them as customers without checking their real status.
 *
 * The two sites the landing marks `kind: "demo"` (Trattoria da Pino, Grace
 * Coffee Corner) are excluded: those exist to show the product, and showing
 * them here would overstate the work again.
 */
const WORKS = [
  {
    name: "Salumeria Alcolica",
    detail: "Palermo",
    url: "https://salumeria-alcolica.devra.net",
    image: "/work/salumeria-alcolica.jpeg",
  },
  {
    name: "DeRos Restaurant",
    detail: "Milano",
    url: "https://deros-restaurant.devra.net",
    image: "/work/deros-restaurant.jpeg",
  },
]

export function WorkSection() {
  const { t } = useI18n()

  return (
    <section id="work" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-devra-purple/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header. Left-aligned on purpose: every other section on this page
            centres an eyebrow over a two-line heading over a paragraph, four
            times running, and the repetition is most of why the page reads as a
            template. Breaking the rhythm here costs nothing and gives the eye
            somewhere to land. */}
        <div className="max-w-2xl mb-12">
          <span className="inline-block text-sm font-semibold text-devra-gold tracking-wider uppercase mb-4">
            {t.work.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 text-balance">
            {t.work.title}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            {t.work.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {WORKS.map((work) => (
            <a
              key={work.url}
              href={work.url}
              className="group relative block rounded-2xl overflow-hidden border border-border bg-card hover:border-devra-gold/40 transition-colors duration-300"
            >
              <div className="overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={work.image}
                  alt={`${work.name}, a complete site built with FlashWeb`}
                  width={2560}
                  height={1680}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex items-center justify-between gap-4 p-5 border-t border-border">
                <div className="min-w-0">
                  <p className="font-semibold text-foreground truncate">{work.name}</p>
                  <p className="text-sm text-muted-foreground truncate">{work.detail}</p>
                </div>
                <span className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm text-muted-foreground group-hover:text-devra-gold transition-colors">
                  {t.work.linkLabel}
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
