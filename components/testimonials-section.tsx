import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Devra delivered our entire web platform in 5 days. What would have taken our team months was done before our next board meeting.",
    author: "Sarah Chen",
    role: "Founder, TechStart",
    initial: "S",
  },
  {
    quote: "The FlashWeb concept sold me immediately. Seeing my actual website before paying anything? That's confidence in your craft.",
    author: "Marcus Rivera",
    role: "Local Business Owner",
    initial: "M",
  },
  {
    quote: "Finally, a team that moves as fast as we do. The quality is exceptional and the communication is flawless.",
    author: "Alex Kim",
    role: "Agency Partner",
    initial: "A",
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-devra-purple/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-devra-gold tracking-wider uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Trusted by builders who move fast
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="relative bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-devra-gold/30 transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-devra-gold flex items-center justify-center shadow-lg shadow-devra-gold/30">
                <Quote className="w-5 h-5 text-background" />
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-6 mt-4">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-devra-purple to-devra-purple-light flex items-center justify-center">
                  <span className="text-sm font-semibold text-foreground">
                    {testimonial.initial}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
