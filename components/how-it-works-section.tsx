import { Globe, Smartphone, ShoppingCart, Sparkles } from "lucide-react"

const offerings = [
  {
    icon: Globe,
    title: "Web Applications",
    description: "Full-stack platforms, dashboards, and SaaS products built with modern frameworks and scalable architecture.",
    tags: ["Next.js", "React", "Node.js"],
    accent: "from-devra-gold/20 to-transparent",
  },
  {
    icon: Smartphone,
    title: "Mobile Experiences",
    description: "Cross-platform apps and responsive web experiences that feel native on every device.",
    tags: ["React Native", "PWA", "iOS/Android"],
    accent: "from-devra-purple/20 to-transparent",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Storefronts",
    description: "High-converting online stores with seamless checkout flows and inventory management.",
    tags: ["Shopify", "Stripe", "Headless"],
    accent: "from-devra-gold/20 to-transparent",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Products",
    description: "Intelligent tools and automations that leverage machine learning to solve real problems.",
    tags: ["OpenAI", "LLMs", "Automation"],
    accent: "from-devra-purple/20 to-transparent",
  },
]

export function HowItWorksSection() {
  return (
    <section id="what-we-build" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block text-sm font-semibold text-devra-gold tracking-wider uppercase mb-4">
            What We Build
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Products that move businesses forward
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            From early-stage MVPs to enterprise-grade platforms, we craft digital products 
            that are built to scale, designed to convert, and ready to launch.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {offerings.map((offering) => (
            <div
              key={offering.title}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-devra-purple/50 transition-all duration-300 hover:shadow-xl hover:shadow-devra-purple/5">
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${offering.accent} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                <div className="relative flex flex-col sm:flex-row sm:items-start gap-5">
                  {/* Icon */}
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-devra-purple to-devra-purple-light flex items-center justify-center shadow-lg shadow-devra-purple/20">
                      <offering.icon className="w-7 h-7 text-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {offering.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {offering.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {offering.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
