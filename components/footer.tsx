"use client"

import { DevraLogo } from "./devra-logo"
import { useI18n } from "@/lib/i18n/context"

export function Footer() {
  const { t } = useI18n()

  const links = {
    product: [
      // The one outbound link in the footer. FlashWeb is a separate site on its
      // own host, so an on-page anchor here was pointing at a section about the
      // product rather than at the product.
      { label: t.footer.links.flashweb, href: "https://flashweb.devra.net" },
      { label: t.footer.links.howItWorks, href: "/#what-we-build" },
    ],
    company: [
      { label: t.footer.links.about, href: "/#our-values" },
      { label: t.footer.links.contact, href: "/#book-call" },
    ],
    // Restored now that /privacy exists. It previously pointed at "#", which is
    // worse than offering nothing: it tells a visitor a notice exists and then
    // does not show them one.
    legal: [{ label: t.footer.links.privacy, href: "/privacy" }],
  }

  return (
    <footer className="relative border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2.5 mb-4">
              <DevraLogo className="w-9 h-9" />
              <span className="text-xl font-bold tracking-tight text-foreground">Devra</span>
            </a>
            <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed">{t.footer.description}</p>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Devra. {t.footer.copyright}
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t.footer.product}</h4>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t.footer.legal}</h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t.footer.company}</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}
