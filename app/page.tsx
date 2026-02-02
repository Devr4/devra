import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FlashWebSection } from "@/components/flashweb-section"
import { WhyDevraSection } from "@/components/why-devra-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { MobileCTABar } from "@/components/mobile-cta-bar"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FlashWebSection />
        <WhyDevraSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <MobileCTABar />
    </div>
  )
}
