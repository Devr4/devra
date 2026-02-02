"use client"

import { useI18n } from "@/lib/i18n/context"
import { localeNames, type Locale } from "@/lib/i18n/translations"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const localeFlags: Record<Locale, string> = {
  en: "GB",
  it: "IT",
  de: "DE",
  es: "ES",
  fr: "FR",
  pt: "PT",
}

function Flag({ countryCode, className }: { countryCode: string; className?: string }) {
  return (
    <img
      src={`https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`}
      srcSet={`https://flagcdn.com/w80/${countryCode.toLowerCase()}.png 2x`}
      width="20"
      height="15"
      alt={countryCode}
      className={className}
      style={{ objectFit: "cover", borderRadius: 2 }}
    />
  )
}

const locales: Locale[] = ["en", "it", "de", "es", "fr", "pt"]

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 text-muted-foreground hover:text-foreground hover:bg-muted"
        >
          <Flag countryCode={localeFlags[locale]} />
          <span className="hidden sm:inline uppercase">{locale}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-card border-border">
        {locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => setLocale(loc)}
            className={`cursor-pointer gap-3 ${
              locale === loc ? "text-devra-gold" : "text-foreground"
            }`}
          >
            <Flag countryCode={localeFlags[loc]} />
            <span className="flex-1">{localeNames[loc]}</span>
            <span className="uppercase text-xs font-mono opacity-60">{loc}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
