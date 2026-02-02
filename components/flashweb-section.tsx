import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Sparkles } from "lucide-react"

const features = [
  "Website built before you pay",
  "Professional design & copy",
  "Mobile-optimized",
  "SEO-ready from day one",
  "Fast hosting included",
  "Launch in 48 hours or less",
]

export function FlashWebSection() {
  return (
    <section id="flashweb" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-devra-gold/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-devra-purple/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-devra-gold/10 border border-devra-gold/20 mb-6">
              <Sparkles className="w-4 h-4 text-devra-gold" />
              <span className="text-sm font-semibold text-devra-gold">Featured Product</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              FlashWeb: Your website built
              <span className="text-devra-gold"> before you pay</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              We build your complete website first. You only pay if you love it and want to keep it. 
              No deposits, no contracts, no risk. This is how confident we are in our craft.
            </p>

            {/* Features */}
            <ul className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-devra-gold/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-devra-gold" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button 
              size="lg"
              className="bg-gradient-to-r from-devra-gold to-devra-gold-dark text-background font-semibold hover:opacity-90 transition-all shadow-xl shadow-devra-gold/25 h-14 px-8 text-base group"
              asChild
            >
              <a href="#book-call">
                Get Your FlashWeb
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            {/* Browser mockup */}
            <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-2xl shadow-devra-purple/10">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-background/50 rounded-md px-3 py-1.5 text-xs text-muted-foreground font-mono">
                    yourbusiness.com
                  </div>
                </div>
              </div>

              {/* Website preview */}
              <div className="p-8 bg-gradient-to-br from-background to-muted/20">
                {/* Hero section preview */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-devra-purple/20" />
                    <div className="h-4 w-24 bg-muted rounded" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-8 w-3/4 bg-gradient-to-r from-foreground/20 to-foreground/10 rounded" />
                    <div className="h-8 w-1/2 bg-gradient-to-r from-devra-gold/30 to-devra-gold/10 rounded" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-muted/50 rounded" />
                    <div className="h-3 w-5/6 bg-muted/50 rounded" />
                    <div className="h-3 w-4/6 bg-muted/50 rounded" />
                  </div>
                  <div className="flex gap-3">
                    <div className="h-10 w-32 bg-devra-gold/30 rounded-lg" />
                    <div className="h-10 w-28 bg-muted rounded-lg border border-border" />
                  </div>
                </div>

                {/* Cards preview */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-card border border-border rounded-xl p-4 space-y-3">
                      <div className="w-8 h-8 rounded-lg bg-devra-purple/20" />
                      <div className="h-3 w-3/4 bg-muted rounded" />
                      <div className="space-y-1.5">
                        <div className="h-2 w-full bg-muted/50 rounded" />
                        <div className="h-2 w-2/3 bg-muted/50 rounded" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-card border border-devra-gold/30 rounded-xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-devra-gold/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-devra-gold" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Built & Ready</p>
                  <p className="text-xs text-muted-foreground">Pay only if you love it</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
