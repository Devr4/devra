"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

export function MobileCTABar() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useI18n()

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section
      setIsVisible(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-lg border-t border-border p-4 shadow-2xl shadow-devra-purple/10">
      <Button
        className="w-full bg-gradient-to-r from-devra-gold to-devra-gold-dark text-background font-semibold hover:opacity-90 transition-all h-12 text-base group"
        asChild
      >
        <a href="#book-call">
          {t.mobileCta.bookCall}
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </Button>
    </div>
  )
}
