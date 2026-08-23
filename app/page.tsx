"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FlashWebSection } from "@/components/flashweb-section"
import { WhyDevraSection } from "@/components/why-devra-section"
import { WorkSection } from "@/components/work-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { MobileCTABar } from "@/components/mobile-cta-bar"
import { I18nProvider } from "@/lib/i18n/context"

export default function Home() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <HeroSection />
          <HowItWorksSection />
          <FlashWebSection />
          <WhyDevraSection />
          <WorkSection />
          <CTASection />
        </main>
        <Footer />
        <MobileCTABar />
      </div>
    </I18nProvider>
  )
}
