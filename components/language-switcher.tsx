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
import { Globe } from "lucide-react"

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
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline uppercase">{locale}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-card border-border">
        {locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => setLocale(loc)}
            className={`cursor-pointer ${
              locale === loc ? "text-devra-gold" : "text-foreground"
            }`}
          >
            <span className="uppercase mr-2 text-xs font-mono opacity-60">{loc}</span>
            {localeNames[loc]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
