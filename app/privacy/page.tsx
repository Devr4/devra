"use client"

import Link from "next/link"
import { ArrowLeft, Shield } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { I18nProvider, useI18n } from "@/lib/i18n/context"

/**
 * The privacy notice this site had been promising and not providing: the footer
 * carried a "Privacy" link pointing at href="#".
 *
 * Every claim on this page is checkable against the code rather than copied
 * from a template, which is the only way a notice like this stays true. The
 * four collection bullets correspond to: no <form> anywhere in the app, the
 * <Analytics /> mount in app/layout.tsx, the devra-locale key written by
 * lib/i18n/context.tsx, and the host's own logs. The three third parties are
 * the only external origins the page contacts: Vercel, flagcdn.com for the
 * language switcher's flags, and cal.com behind the booking buttons.
 *
 * If any of those change, this page changes. Adding a form, an embed, or a
 * tracking script without editing the copy in lib/i18n/translations.ts turns an
 * accurate notice into a false one, which is worse than the missing page was.
 */

// Kept as a plain date string rather than a build timestamp: "last updated"
// should mean the last time the text changed, not the last time CI ran.
const LAST_UPDATED = "23 August 2026"

function PrivacyContent() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.privacy.back}
          </Link>

          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-devra-gold/10 border border-devra-gold/20 mb-6">
              <Shield className="w-4 h-4 text-devra-gold" />
              <span className="text-sm font-semibold text-devra-gold">{t.privacy.badge}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              {t.privacy.title}
            </h1>
            <p className="text-sm text-muted-foreground">
              {t.privacy.updated}: {LAST_UPDATED}
            </p>
          </div>

          <div className="space-y-10">
            {t.privacy.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-semibold text-foreground mb-3">{section.heading}</h2>
                <p className="text-muted-foreground leading-relaxed text-pretty">{section.body}</p>
                {section.items.length > 0 && (
                  <ul className="mt-4 space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3 text-muted-foreground leading-relaxed">
                        <span aria-hidden="true" className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-devra-gold" />
                        <span className="text-pretty">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function PrivacyPage() {
  return (
    <I18nProvider>
      <PrivacyContent />
    </I18nProvider>
  )
}
