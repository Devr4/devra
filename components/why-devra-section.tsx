import { Sunrise, Gem, Users, Lightbulb, ShieldCheck, Flame } from "lucide-react"

const values = [
  {
    icon: Sunrise,
    title: "Sunrise Speed",
    description: "We believe momentum matters. Great products shipped fast beat perfect products shipped never.",
  },
  {
    icon: Gem,
    title: "Craft Over Shortcuts",
    description: "Fast doesn't mean sloppy. Every line of code is written with intention, tested with rigor.",
  },
  {
    icon: Users,
    title: "Customer Obsessed",
    description: "We build for the people who will use what we make—their success is our north star.",
  },
  {
    icon: Lightbulb,
    title: "Curious & Learning",
    description: "Tech evolves daily. We stay sharp, experiment often, and bring new thinking to every project.",
  },
  {
    icon: ShieldCheck,
    title: "Trust Through Transparency",
    description: "No black boxes. We share our process, communicate openly, and own our outcomes.",
  },
  {
    icon: Flame,
    title: "Builder Energy",
    description: "We're founders, makers, and dreamers ourselves—we bring that fire to everything we ship.",
  },
]

export function WhyDevraSection() {
  return (
    <section id="our-values" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block text-sm font-semibold text-devra-gold tracking-wider uppercase mb-4">
            Our Values
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            The principles that guide how we build
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Devra was founded on a simple belief: you can ship fast and ship well. 
            These are the values we live by every day.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="group bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-devra-purple/50 transition-all duration-300 hover:shadow-xl hover:shadow-devra-purple/5"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-devra-purple/20 to-devra-purple/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <value.icon className="w-6 h-6 text-devra-gold" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
