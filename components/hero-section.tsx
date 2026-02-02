import { DevraLogo } from "./devra-logo"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-devra-purple/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-devra-gold/10 rounded-full blur-[100px] animate-pulse delay-700" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border mb-8 backdrop-blur-sm">
            <DevraLogo className="w-5 h-5" />
            <span className="text-sm font-medium text-muted-foreground">
              Powered by automation + AI + rigorous QA
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6">
            <span className="text-foreground">We ship customer-ready</span>
            <br />
            <span className="text-foreground">products at </span>
            <span className="bg-gradient-to-r from-devra-gold to-devra-gold-dark bg-clip-text text-transparent">
              sunrise speed
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty leading-relaxed">
            Devra builds and launches products—fast, polished, and scalable. 
            From concept to customer-ready, we combine craft with speed so you can ship with confidence.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-devra-gold to-devra-gold-dark text-background font-semibold hover:opacity-90 transition-all shadow-xl shadow-devra-gold/25 h-14 px-8 text-base group"
              asChild
            >
              <a href="#book-call">
                Book a 15-min call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-muted h-14 px-8 text-base group bg-transparent"
              asChild
            >
              <a href="#flashweb">
                <Play className="mr-2 w-5 h-5 text-devra-gold group-hover:scale-110 transition-transform" />
                See FlashWeb in action
              </a>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-16 pt-12 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-6">Trusted by founders and operators building fast</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
              {["Startups", "Agencies", "Local Business", "Operators"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                    <span className="text-xs font-bold text-muted-foreground">{item[0]}</span>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs tracking-wider uppercase">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-devra-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
