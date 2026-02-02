import { DevraLogo } from "./devra-logo"

const links = {
  product: [
    { label: "FlashWeb", href: "#flashweb" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#book-call" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <DevraLogo className="w-9 h-9" />
              <span className="text-xl font-bold tracking-tight text-foreground">
                Devra
              </span>
            </a>
            <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed">
              We ship customer-ready products at sunrise speed. 
              Automation + AI + rigorous QA = your vision, delivered fast.
            </p>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Devra. All rights reserved.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
