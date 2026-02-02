import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MessageSquare } from "lucide-react"
import { DevraLogo } from "./devra-logo"

export function CTASection() {
  return (
    <section id="book-call" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-devra-purple/10 via-background to-background" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-devra-purple/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-devra-gold/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card border border-border rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-devra-purple via-devra-gold to-devra-purple" />
          
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <DevraLogo className="w-16 h-16" />
          </div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Ready to ship at sunrise speed?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
            Book a 15-minute call to discuss your project. No pitch decks, no pressure—just 
            a focused conversation about what you want to build.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-devra-gold to-devra-gold-dark text-background font-semibold hover:opacity-90 transition-all shadow-xl shadow-devra-gold/25 h-14 px-8 text-base group w-full sm:w-auto"
              asChild
            >
              <a href="https://cal.com" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 w-5 h-5" />
                Book a 15-min call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-muted h-14 px-8 text-base w-full sm:w-auto bg-transparent"
              asChild
            >
              <a href="mailto:hello@devra.io">
                <MessageSquare className="mr-2 w-5 h-5 text-devra-gold" />
                Send a message
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              No commitment required. Free consultation. Fast response time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
