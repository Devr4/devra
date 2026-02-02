"use client"

import { Sunrise, Gem, Users, Lightbulb, ShieldCheck, Flame } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

const valueIcons: LucideIcon[] = [Sunrise, Gem, Users, Lightbulb, ShieldCheck, Flame]

export function WhyDevraSection() {
  const { t } = useI18n()

  return (
    <section id="our-values" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block text-sm font-semibold text-devra-gold tracking-wider uppercase mb-4">
            {t.ourValues.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t.ourValues.title}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">{t.ourValues.description}</p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.ourValues.values.map((value, index) => {
            const Icon = valueIcons[index]
            return (
              <div
                key={value.title}
                className="group bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-devra-purple/50 transition-all duration-300 hover:shadow-xl hover:shadow-devra-purple/5"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-devra-purple/20 to-devra-purple/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-devra-gold" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
