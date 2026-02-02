export type Locale = "en" | "it" | "de" | "es" | "fr" | "pt"

export const localeNames: Record<Locale, string> = {
  en: "English",
  it: "Italiano",
  de: "Deutsch",
  es: "Español",
  fr: "Français",
  pt: "Português",
}

export const localeFlags: Record<Locale, string> = {
  en: "GB",
  it: "IT",
  de: "DE",
  es: "ES",
  fr: "FR",
  pt: "PT",
}

export type Translations = typeof translations.en

export const translations = {
  en: {
    // Navbar
    nav: {
      whatWeBuild: "What We Build",
      flashweb: "FlashWeb",
      ourValues: "Our Values",
      seeFlashWeb: "See FlashWeb",
      bookCall: "Book a 15-min call",
    },
    // Hero
    hero: {
      badge: "Powered by automation + AI + rigorous QA",
      headline1: "We ship customer-ready",
      headline2: "products at",
      headline3: "sunrise speed",
      subheadline: "Devra builds and launches products—fast, polished, and scalable. From concept to customer-ready, we combine craft with speed so you can ship with confidence.",
      ctaPrimary: "Book a 15-min call",
      ctaSecondary: "See FlashWeb in action",
      socialProof: "Trusted by founders and operators building fast",
      socialProofItems: ["Startups", "Agencies", "Local Business", "Operators"],
      scroll: "Scroll",
    },
    // What We Build
    whatWeBuild: {
      badge: "What We Build",
      title: "Products that move businesses forward",
      description: "From early-stage MVPs to enterprise-grade platforms, we craft digital products that are built to scale, designed to convert, and ready to launch.",
      offerings: [
        {
          title: "Web Applications",
          description: "Full-stack platforms, dashboards, and SaaS products built with modern frameworks and scalable architecture.",
        },
        {
          title: "Mobile Experiences",
          description: "Cross-platform apps and responsive web experiences that feel native on every device.",
        },
        {
          title: "E-Commerce & Storefronts",
          description: "High-converting online stores with seamless checkout flows and inventory management.",
        },
        {
          title: "AI-Powered Products",
          description: "Intelligent tools and automations that leverage machine learning to solve real problems.",
        },
      ],
    },
    // FlashWeb
    flashweb: {
      badge: "Featured Product",
      title: "FlashWeb: Your website built",
      titleHighlight: " before you pay",
      description: "We build your complete website first. You only pay if you love it and want to keep it. No deposits, no contracts, no risk. This is how confident we are in our craft.",
      features: [
        "Website built before you pay",
        "Professional design & copy",
        "Mobile-optimized",
        "SEO-ready from day one",
        "Fast hosting included",
        "Launch in 48 hours or less",
      ],
      cta: "Get Your FlashWeb",
      browserUrl: "yourbusiness.com",
      badgeTitle: "Built & Ready",
      badgeSubtitle: "Pay only if you love it",
    },
    // Our Values
    ourValues: {
      badge: "Our Values",
      title: "The principles that guide how we build",
      description: "Devra was founded on a simple belief: you can ship fast and ship well. These are the values we live by every day.",
      values: [
        {
          title: "Sunrise Speed",
          description: "We believe momentum matters. Great products shipped fast beat perfect products shipped never.",
        },
        {
          title: "Craft Over Shortcuts",
          description: "Fast doesn't mean sloppy. Every line of code is written with intention, tested with rigor.",
        },
        {
          title: "Customer Obsessed",
          description: "We build for the people who will use what we make—their success is our north star.",
        },
        {
          title: "Curious & Learning",
          description: "Tech evolves daily. We stay sharp, experiment often, and bring new thinking to every project.",
        },
        {
          title: "Trust Through Transparency",
          description: "No black boxes. We share our process, communicate openly, and own our outcomes.",
        },
        {
          title: "Builder Energy",
          description: "We're founders, makers, and dreamers ourselves—we bring that fire to everything we ship.",
        },
      ],
    },
    // Testimonials
    testimonials: {
      badge: "Testimonials",
      title: "Trusted by builders who move fast",
      items: [
        {
          quote: "Devra delivered our entire web platform in 5 days. What would have taken our team months was done before our next board meeting.",
          author: "Sarah Chen",
          role: "Founder, TechStart",
        },
        {
          quote: "The FlashWeb concept sold me immediately. Seeing my actual website before paying anything? That's confidence in your craft.",
          author: "Marcus Rivera",
          role: "Local Business Owner",
        },
        {
          quote: "Finally, a team that moves as fast as we do. The quality is exceptional and the communication is flawless.",
          author: "Alex Kim",
          role: "Agency Partner",
        },
      ],
    },
    // CTA Section
    cta: {
      title: "Ready to ship at sunrise speed?",
      description: "Book a 15-minute call to discuss your project. No pitch decks, no pressure—just a focused conversation about what you want to build.",
      ctaPrimary: "Book a 15-min call",
      ctaSecondary: "Send a message",
      trust: "No commitment required. Free consultation. Fast response time.",
    },
    // Footer
    footer: {
      description: "We ship customer-ready products at sunrise speed. Automation + AI + rigorous QA = your vision, delivered fast.",
      copyright: "All rights reserved.",
      product: "Product",
      company: "Company",
      legal: "Legal",
      links: {
        flashweb: "FlashWeb",
        howItWorks: "How It Works",
        pricing: "Pricing",
        about: "About",
        blog: "Blog",
        careers: "Careers",
        privacy: "Privacy",
        terms: "Terms",
      },
    },
    // Mobile CTA
    mobileCta: {
      bookCall: "Book a 15-min call",
    },
  },
  it: {
    nav: {
      whatWeBuild: "Cosa Costruiamo",
      flashweb: "FlashWeb",
      ourValues: "I Nostri Valori",
      seeFlashWeb: "Scopri FlashWeb",
      bookCall: "Prenota una chiamata",
    },
    hero: {
      badge: "Alimentato da automazione + AI + rigoroso QA",
      headline1: "Consegniamo prodotti",
      headline2: "pronti per i clienti alla",
      headline3: "velocità dell'alba",
      subheadline: "Devra costruisce e lancia prodotti—veloci, rifiniti e scalabili. Dal concetto al cliente, combiniamo artigianalità e velocità per farti lanciare con fiducia.",
      ctaPrimary: "Prenota una chiamata",
      ctaSecondary: "Scopri FlashWeb in azione",
      socialProof: "Scelto da fondatori e operatori che costruiscono velocemente",
      socialProofItems: ["Startup", "Agenzie", "Attività Locali", "Operatori"],
      scroll: "Scorri",
    },
    whatWeBuild: {
      badge: "Cosa Costruiamo",
      title: "Prodotti che fanno crescere le aziende",
      description: "Dai MVP iniziali alle piattaforme enterprise, creiamo prodotti digitali scalabili, progettati per convertire e pronti al lancio.",
      offerings: [
        {
          title: "Applicazioni Web",
          description: "Piattaforme full-stack, dashboard e prodotti SaaS costruiti con framework moderni e architettura scalabile.",
        },
        {
          title: "Esperienze Mobile",
          description: "App cross-platform e esperienze web responsive che sembrano native su ogni dispositivo.",
        },
        {
          title: "E-Commerce e Negozi",
          description: "Negozi online ad alta conversione con flussi di checkout fluidi e gestione inventario.",
        },
        {
          title: "Prodotti AI",
          description: "Strumenti intelligenti e automazioni che sfruttano il machine learning per risolvere problemi reali.",
        },
      ],
    },
    flashweb: {
      badge: "Prodotto in Evidenza",
      title: "FlashWeb: Il tuo sito costruito",
      titleHighlight: " prima di pagare",
      description: "Costruiamo prima il tuo sito completo. Paghi solo se ti piace e vuoi tenerlo. Nessun anticipo, nessun contratto, nessun rischio.",
      features: [
        "Sito costruito prima del pagamento",
        "Design e copy professionali",
        "Ottimizzato per mobile",
        "SEO-ready dal primo giorno",
        "Hosting veloce incluso",
        "Lancio in 48 ore o meno",
      ],
      cta: "Ottieni il tuo FlashWeb",
      browserUrl: "tuaazienda.com",
      badgeTitle: "Costruito e Pronto",
      badgeSubtitle: "Paga solo se ti piace",
    },
    ourValues: {
      badge: "I Nostri Valori",
      title: "I principi che guidano il nostro lavoro",
      description: "Devra è stata fondata su una semplice convinzione: puoi consegnare velocemente e bene. Questi sono i valori che viviamo ogni giorno.",
      values: [
        {
          title: "Velocità dell'Alba",
          description: "Crediamo che lo slancio conti. Prodotti eccellenti consegnati velocemente battono prodotti perfetti mai consegnati.",
        },
        {
          title: "Artigianalità, Non Scorciatoie",
          description: "Veloce non significa sciatto. Ogni riga di codice è scritta con intenzione, testata con rigore.",
        },
        {
          title: "Ossessionati dal Cliente",
          description: "Costruiamo per le persone che useranno ciò che creiamo—il loro successo è la nostra stella polare.",
        },
        {
          title: "Curiosi e in Apprendimento",
          description: "La tecnologia evolve ogni giorno. Restiamo affilati, sperimentiamo spesso e portiamo nuovo pensiero.",
        },
        {
          title: "Fiducia Attraverso la Trasparenza",
          description: "Nessuna scatola nera. Condividiamo il processo, comunichiamo apertamente e ci assumiamo le responsabilità.",
        },
        {
          title: "Energia da Costruttori",
          description: "Siamo fondatori, maker e sognatori—portiamo quel fuoco in tutto ciò che consegniamo.",
        },
      ],
    },
    testimonials: {
      badge: "Testimonianze",
      title: "Scelto da costruttori che si muovono velocemente",
      items: [
        {
          quote: "Devra ha consegnato la nostra piattaforma web in 5 giorni. Ciò che avrebbe richiesto mesi al nostro team è stato fatto prima della prossima riunione.",
          author: "Sarah Chen",
          role: "Fondatrice, TechStart",
        },
        {
          quote: "Il concetto FlashWeb mi ha convinto subito. Vedere il mio sito prima di pagare? Questa è fiducia nel proprio mestiere.",
          author: "Marcus Rivera",
          role: "Imprenditore Locale",
        },
        {
          quote: "Finalmente un team che si muove velocemente quanto noi. La qualità è eccezionale e la comunicazione impeccabile.",
          author: "Alex Kim",
          role: "Partner di Agenzia",
        },
      ],
    },
    cta: {
      title: "Pronto a consegnare alla velocità dell'alba?",
      description: "Prenota una chiamata di 15 minuti per discutere il tuo progetto. Nessuna presentazione, nessuna pressione—solo una conversazione focalizzata.",
      ctaPrimary: "Prenota una chiamata",
      ctaSecondary: "Invia un messaggio",
      trust: "Nessun impegno richiesto. Consulenza gratuita. Risposta rapida.",
    },
    footer: {
      description: "Consegniamo prodotti pronti per i clienti alla velocità dell'alba. Automazione + AI + QA rigoroso = la tua visione, consegnata velocemente.",
      copyright: "Tutti i diritti riservati.",
      product: "Prodotto",
      company: "Azienda",
      legal: "Legale",
      links: {
        flashweb: "FlashWeb",
        howItWorks: "Come Funziona",
        pricing: "Prezzi",
        about: "Chi Siamo",
        blog: "Blog",
        careers: "Lavora con Noi",
        privacy: "Privacy",
        terms: "Termini",
      },
    },
    mobileCta: {
      bookCall: "Prenota una chiamata",
    },
  },
  de: {
    nav: {
      whatWeBuild: "Was Wir Bauen",
      flashweb: "FlashWeb",
      ourValues: "Unsere Werte",
      seeFlashWeb: "FlashWeb ansehen",
      bookCall: "Gespräch buchen",
    },
    hero: {
      badge: "Angetrieben durch Automatisierung + KI + rigorose QA",
      headline1: "Wir liefern kundenfertige",
      headline2: "Produkte mit",
      headline3: "Sonnenaufgangs-Tempo",
      subheadline: "Devra baut und launcht Produkte—schnell, poliert und skalierbar. Vom Konzept bis zum Kunden kombinieren wir Handwerk mit Geschwindigkeit.",
      ctaPrimary: "Gespräch buchen",
      ctaSecondary: "FlashWeb in Aktion sehen",
      socialProof: "Vertraut von Gründern und Machern, die schnell bauen",
      socialProofItems: ["Startups", "Agenturen", "Lokale Unternehmen", "Betreiber"],
      scroll: "Scrollen",
    },
    whatWeBuild: {
      badge: "Was Wir Bauen",
      title: "Produkte, die Unternehmen voranbringen",
      description: "Von frühen MVPs bis zu Enterprise-Plattformen entwickeln wir digitale Produkte, die skalierbar, konversionsoptimiert und startbereit sind.",
      offerings: [
        {
          title: "Web-Anwendungen",
          description: "Full-Stack-Plattformen, Dashboards und SaaS-Produkte mit modernen Frameworks und skalierbarer Architektur.",
        },
        {
          title: "Mobile Erlebnisse",
          description: "Cross-Platform-Apps und responsive Web-Erlebnisse, die sich auf jedem Gerät nativ anfühlen.",
        },
        {
          title: "E-Commerce & Shops",
          description: "Hochkonvertierende Online-Shops mit nahtlosen Checkout-Flows und Bestandsverwaltung.",
        },
        {
          title: "KI-gestützte Produkte",
          description: "Intelligente Tools und Automatisierungen, die Machine Learning nutzen, um echte Probleme zu lösen.",
        },
      ],
    },
    flashweb: {
      badge: "Highlight-Produkt",
      title: "FlashWeb: Ihre Website gebaut",
      titleHighlight: " bevor Sie bezahlen",
      description: "Wir bauen zuerst Ihre komplette Website. Sie zahlen nur, wenn Sie sie lieben. Keine Anzahlung, keine Verträge, kein Risiko.",
      features: [
        "Website gebaut vor Zahlung",
        "Professionelles Design & Text",
        "Mobile-optimiert",
        "SEO-ready ab Tag eins",
        "Schnelles Hosting inklusive",
        "Launch in 48 Stunden oder weniger",
      ],
      cta: "Holen Sie sich FlashWeb",
      browserUrl: "ihrunternehmen.de",
      badgeTitle: "Gebaut & Bereit",
      badgeSubtitle: "Zahlen nur bei Gefallen",
    },
    ourValues: {
      badge: "Unsere Werte",
      title: "Die Prinzipien, die unser Handeln leiten",
      description: "Devra wurde auf einer einfachen Überzeugung gegründet: Man kann schnell und gut liefern. Das sind die Werte, die wir täglich leben.",
      values: [
        {
          title: "Sonnenaufgangs-Tempo",
          description: "Wir glauben, dass Momentum zählt. Großartige Produkte, schnell geliefert, schlagen perfekte Produkte, die nie kommen.",
        },
        {
          title: "Handwerk statt Abkürzungen",
          description: "Schnell bedeutet nicht schlampig. Jede Zeile Code wird mit Absicht geschrieben, mit Strenge getestet.",
        },
        {
          title: "Kundenbesessen",
          description: "Wir bauen für die Menschen, die nutzen werden, was wir machen—ihr Erfolg ist unser Nordstern.",
        },
        {
          title: "Neugierig & Lernend",
          description: "Technologie entwickelt sich täglich. Wir bleiben scharf, experimentieren oft und bringen neues Denken.",
        },
        {
          title: "Vertrauen durch Transparenz",
          description: "Keine Blackboxes. Wir teilen unseren Prozess, kommunizieren offen und stehen zu unseren Ergebnissen.",
        },
        {
          title: "Builder-Energie",
          description: "Wir sind selbst Gründer, Macher und Träumer—wir bringen dieses Feuer in alles, was wir liefern.",
        },
      ],
    },
    testimonials: {
      badge: "Referenzen",
      title: "Vertraut von Machern, die schnell handeln",
      items: [
        {
          quote: "Devra hat unsere gesamte Web-Plattform in 5 Tagen geliefert. Was unser Team Monate gekostet hätte, war vor dem nächsten Meeting fertig.",
          author: "Sarah Chen",
          role: "Gründerin, TechStart",
        },
        {
          quote: "Das FlashWeb-Konzept hat mich sofort überzeugt. Meine Website sehen, bevor ich bezahle? Das ist Vertrauen ins eigene Handwerk.",
          author: "Marcus Rivera",
          role: "Lokaler Unternehmer",
        },
        {
          quote: "Endlich ein Team, das so schnell ist wie wir. Die Qualität ist außergewöhnlich und die Kommunikation tadellos.",
          author: "Alex Kim",
          role: "Agentur-Partner",
        },
      ],
    },
    cta: {
      title: "Bereit, mit Sonnenaufgangs-Tempo zu liefern?",
      description: "Buchen Sie ein 15-minütiges Gespräch. Keine Pitchdecks, kein Druck—nur ein fokussiertes Gespräch über Ihr Projekt.",
      ctaPrimary: "Gespräch buchen",
      ctaSecondary: "Nachricht senden",
      trust: "Keine Verpflichtung. Kostenlose Beratung. Schnelle Antwort.",
    },
    footer: {
      description: "Wir liefern kundenfertige Produkte mit Sonnenaufgangs-Tempo. Automatisierung + KI + rigorose QA = Ihre Vision, schnell geliefert.",
      copyright: "Alle Rechte vorbehalten.",
      product: "Produkt",
      company: "Unternehmen",
      legal: "Rechtliches",
      links: {
        flashweb: "FlashWeb",
        howItWorks: "So funktioniert's",
        pricing: "Preise",
        about: "Über uns",
        blog: "Blog",
        careers: "Karriere",
        privacy: "Datenschutz",
        terms: "AGB",
      },
    },
    mobileCta: {
      bookCall: "Gespräch buchen",
    },
  },
  es: {
    nav: {
      whatWeBuild: "Lo Que Creamos",
      flashweb: "FlashWeb",
      ourValues: "Nuestros Valores",
      seeFlashWeb: "Ver FlashWeb",
      bookCall: "Reservar llamada",
    },
    hero: {
      badge: "Impulsado por automatización + IA + QA riguroso",
      headline1: "Entregamos productos",
      headline2: "listos para clientes a",
      headline3: "velocidad del amanecer",
      subheadline: "Devra construye y lanza productos—rápidos, pulidos y escalables. Del concepto al cliente, combinamos artesanía con velocidad para que lances con confianza.",
      ctaPrimary: "Reservar llamada",
      ctaSecondary: "Ver FlashWeb en acción",
      socialProof: "Confiado por fundadores y operadores que construyen rápido",
      socialProofItems: ["Startups", "Agencias", "Negocios Locales", "Operadores"],
      scroll: "Desplazar",
    },
    whatWeBuild: {
      badge: "Lo Que Creamos",
      title: "Productos que impulsan negocios",
      description: "Desde MVPs tempranos hasta plataformas empresariales, creamos productos digitales escalables, diseñados para convertir y listos para lanzar.",
      offerings: [
        {
          title: "Aplicaciones Web",
          description: "Plataformas full-stack, dashboards y productos SaaS construidos con frameworks modernos y arquitectura escalable.",
        },
        {
          title: "Experiencias Móviles",
          description: "Apps multiplataforma y experiencias web responsive que se sienten nativas en cada dispositivo.",
        },
        {
          title: "E-Commerce y Tiendas",
          description: "Tiendas online de alta conversión con flujos de checkout sin fricción y gestión de inventario.",
        },
        {
          title: "Productos con IA",
          description: "Herramientas inteligentes y automatizaciones que aprovechan el machine learning para resolver problemas reales.",
        },
      ],
    },
    flashweb: {
      badge: "Producto Destacado",
      title: "FlashWeb: Tu sitio web construido",
      titleHighlight: " antes de pagar",
      description: "Construimos tu sitio web completo primero. Solo pagas si te encanta y quieres quedártelo. Sin depósitos, sin contratos, sin riesgo.",
      features: [
        "Sitio construido antes del pago",
        "Diseño y copy profesionales",
        "Optimizado para móvil",
        "SEO-ready desde el día uno",
        "Hosting rápido incluido",
        "Lanzamiento en 48 horas o menos",
      ],
      cta: "Obtén tu FlashWeb",
      browserUrl: "tunegocio.com",
      badgeTitle: "Construido y Listo",
      badgeSubtitle: "Paga solo si te encanta",
    },
    ourValues: {
      badge: "Nuestros Valores",
      title: "Los principios que guían cómo construimos",
      description: "Devra fue fundada sobre una creencia simple: puedes entregar rápido y bien. Estos son los valores que vivimos cada día.",
      values: [
        {
          title: "Velocidad del Amanecer",
          description: "Creemos que el impulso importa. Grandes productos entregados rápido superan productos perfectos nunca entregados.",
        },
        {
          title: "Artesanía, No Atajos",
          description: "Rápido no significa descuidado. Cada línea de código se escribe con intención, se prueba con rigor.",
        },
        {
          title: "Obsesionados con el Cliente",
          description: "Construimos para las personas que usarán lo que hacemos—su éxito es nuestra estrella polar.",
        },
        {
          title: "Curiosos y Aprendiendo",
          description: "La tecnología evoluciona diariamente. Nos mantenemos afilados, experimentamos a menudo y traemos nuevo pensamiento.",
        },
        {
          title: "Confianza a Través de Transparencia",
          description: "Sin cajas negras. Compartimos nuestro proceso, comunicamos abiertamente y asumimos nuestros resultados.",
        },
        {
          title: "Energía de Constructor",
          description: "Somos fundadores, creadores y soñadores—traemos ese fuego a todo lo que entregamos.",
        },
      ],
    },
    testimonials: {
      badge: "Testimonios",
      title: "Confiado por constructores que se mueven rápido",
      items: [
        {
          quote: "Devra entregó toda nuestra plataforma web en 5 días. Lo que habría tomado meses a nuestro equipo se hizo antes de la próxima reunión.",
          author: "Sarah Chen",
          role: "Fundadora, TechStart",
        },
        {
          quote: "El concepto FlashWeb me convenció inmediatamente. ¿Ver mi sitio web antes de pagar? Eso es confianza en tu oficio.",
          author: "Marcus Rivera",
          role: "Empresario Local",
        },
        {
          quote: "Por fin un equipo que se mueve tan rápido como nosotros. La calidad es excepcional y la comunicación impecable.",
          author: "Alex Kim",
          role: "Socio de Agencia",
        },
      ],
    },
    cta: {
      title: "¿Listo para entregar a velocidad del amanecer?",
      description: "Reserva una llamada de 15 minutos para discutir tu proyecto. Sin presentaciones, sin presión—solo una conversación enfocada.",
      ctaPrimary: "Reservar llamada",
      ctaSecondary: "Enviar mensaje",
      trust: "Sin compromiso. Consulta gratuita. Respuesta rápida.",
    },
    footer: {
      description: "Entregamos productos listos para clientes a velocidad del amanecer. Automatización + IA + QA riguroso = tu visión, entregada rápido.",
      copyright: "Todos los derechos reservados.",
      product: "Producto",
      company: "Empresa",
      legal: "Legal",
      links: {
        flashweb: "FlashWeb",
        howItWorks: "Cómo Funciona",
        pricing: "Precios",
        about: "Nosotros",
        blog: "Blog",
        careers: "Carreras",
        privacy: "Privacidad",
        terms: "Términos",
      },
    },
    mobileCta: {
      bookCall: "Reservar llamada",
    },
  },
  fr: {
    nav: {
      whatWeBuild: "Ce Que Nous Créons",
      flashweb: "FlashWeb",
      ourValues: "Nos Valeurs",
      seeFlashWeb: "Voir FlashWeb",
      bookCall: "Réserver un appel",
    },
    hero: {
      badge: "Propulsé par automatisation + IA + QA rigoureux",
      headline1: "Nous livrons des produits",
      headline2: "prêts pour les clients à",
      headline3: "la vitesse de l'aube",
      subheadline: "Devra construit et lance des produits—rapides, soignés et évolutifs. Du concept au client, nous combinons artisanat et vitesse pour que vous lanciez en confiance.",
      ctaPrimary: "Réserver un appel",
      ctaSecondary: "Voir FlashWeb en action",
      socialProof: "Fait confiance par des fondateurs et opérateurs qui construisent vite",
      socialProofItems: ["Startups", "Agences", "Commerces Locaux", "Opérateurs"],
      scroll: "Défiler",
    },
    whatWeBuild: {
      badge: "Ce Que Nous Créons",
      title: "Des produits qui font avancer les entreprises",
      description: "Des MVPs précoces aux plateformes entreprise, nous créons des produits numériques évolutifs, conçus pour convertir et prêts à lancer.",
      offerings: [
        {
          title: "Applications Web",
          description: "Plateformes full-stack, tableaux de bord et produits SaaS construits avec des frameworks modernes et une architecture évolutive.",
        },
        {
          title: "Expériences Mobiles",
          description: "Applications multiplateformes et expériences web responsives qui semblent natives sur chaque appareil.",
        },
        {
          title: "E-Commerce et Boutiques",
          description: "Boutiques en ligne à haute conversion avec des flux de paiement fluides et gestion des stocks.",
        },
        {
          title: "Produits Propulsés par l'IA",
          description: "Outils intelligents et automatisations qui exploitent le machine learning pour résoudre de vrais problèmes.",
        },
      ],
    },
    flashweb: {
      badge: "Produit Vedette",
      title: "FlashWeb: Votre site construit",
      titleHighlight: " avant de payer",
      description: "Nous construisons d'abord votre site complet. Vous ne payez que si vous l'adorez. Pas d'acompte, pas de contrat, pas de risque.",
      features: [
        "Site construit avant paiement",
        "Design et texte professionnels",
        "Optimisé mobile",
        "SEO-ready dès le premier jour",
        "Hébergement rapide inclus",
        "Lancement en 48 heures ou moins",
      ],
      cta: "Obtenez votre FlashWeb",
      browserUrl: "votreentreprise.fr",
      badgeTitle: "Construit et Prêt",
      badgeSubtitle: "Payez seulement si vous aimez",
    },
    ourValues: {
      badge: "Nos Valeurs",
      title: "Les principes qui guident notre façon de construire",
      description: "Devra a été fondée sur une croyance simple: on peut livrer vite et bien. Ce sont les valeurs que nous vivons chaque jour.",
      values: [
        {
          title: "Vitesse de l'Aube",
          description: "Nous croyons que l'élan compte. De grands produits livrés vite battent des produits parfaits jamais livrés.",
        },
        {
          title: "Artisanat, Pas Raccourcis",
          description: "Rapide ne veut pas dire bâclé. Chaque ligne de code est écrite avec intention, testée avec rigueur.",
        },
        {
          title: "Obsédés par le Client",
          description: "Nous construisons pour les gens qui utiliseront ce que nous faisons—leur succès est notre étoile polaire.",
        },
        {
          title: "Curieux et Apprenant",
          description: "La tech évolue quotidiennement. Nous restons affûtés, expérimentons souvent et apportons une nouvelle réflexion.",
        },
        {
          title: "Confiance par la Transparence",
          description: "Pas de boîtes noires. Nous partageons notre processus, communiquons ouvertement et assumons nos résultats.",
        },
        {
          title: "Énergie de Bâtisseur",
          description: "Nous sommes nous-mêmes fondateurs, créateurs et rêveurs—nous apportons ce feu à tout ce que nous livrons.",
        },
      ],
    },
    testimonials: {
      badge: "Témoignages",
      title: "Fait confiance par des bâtisseurs qui bougent vite",
      items: [
        {
          quote: "Devra a livré notre plateforme web complète en 5 jours. Ce qui aurait pris des mois à notre équipe était fait avant la prochaine réunion.",
          author: "Sarah Chen",
          role: "Fondatrice, TechStart",
        },
        {
          quote: "Le concept FlashWeb m'a convaincu immédiatement. Voir mon site avant de payer? C'est de la confiance dans son métier.",
          author: "Marcus Rivera",
          role: "Entrepreneur Local",
        },
        {
          quote: "Enfin une équipe qui bouge aussi vite que nous. La qualité est exceptionnelle et la communication impeccable.",
          author: "Alex Kim",
          role: "Partenaire d'Agence",
        },
      ],
    },
    cta: {
      title: "Prêt à livrer à la vitesse de l'aube?",
      description: "Réservez un appel de 15 minutes pour discuter de votre projet. Pas de pitch, pas de pression—juste une conversation ciblée.",
      ctaPrimary: "Réserver un appel",
      ctaSecondary: "Envoyer un message",
      trust: "Sans engagement. Consultation gratuite. Réponse rapide.",
    },
    footer: {
      description: "Nous livrons des produits prêts pour les clients à la vitesse de l'aube. Automatisation + IA + QA rigoureux = votre vision, livrée vite.",
      copyright: "Tous droits réservés.",
      product: "Produit",
      company: "Entreprise",
      legal: "Légal",
      links: {
        flashweb: "FlashWeb",
        howItWorks: "Comment ça marche",
        pricing: "Tarifs",
        about: "À propos",
        blog: "Blog",
        careers: "Carrières",
        privacy: "Confidentialité",
        terms: "Conditions",
      },
    },
    mobileCta: {
      bookCall: "Réserver un appel",
    },
  },
  pt: {
    nav: {
      whatWeBuild: "O Que Criamos",
      flashweb: "FlashWeb",
      ourValues: "Nossos Valores",
      seeFlashWeb: "Ver FlashWeb",
      bookCall: "Agendar chamada",
    },
    hero: {
      badge: "Impulsionado por automação + IA + QA rigoroso",
      headline1: "Entregamos produtos",
      headline2: "prontos para clientes na",
      headline3: "velocidade do amanhecer",
      subheadline: "Devra constrói e lança produtos—rápidos, polidos e escaláveis. Do conceito ao cliente, combinamos artesanato com velocidade para você lançar com confiança.",
      ctaPrimary: "Agendar chamada",
      ctaSecondary: "Ver FlashWeb em ação",
      socialProof: "Confiado por fundadores e operadores que constroem rápido",
      socialProofItems: ["Startups", "Agências", "Negócios Locais", "Operadores"],
      scroll: "Rolar",
    },
    whatWeBuild: {
      badge: "O Que Criamos",
      title: "Produtos que impulsionam negócios",
      description: "De MVPs iniciais a plataformas empresariais, criamos produtos digitais escaláveis, projetados para converter e prontos para lançar.",
      offerings: [
        {
          title: "Aplicações Web",
          description: "Plataformas full-stack, dashboards e produtos SaaS construídos com frameworks modernos e arquitetura escalável.",
        },
        {
          title: "Experiências Mobile",
          description: "Apps multiplataforma e experiências web responsivas que parecem nativas em cada dispositivo.",
        },
        {
          title: "E-Commerce e Lojas",
          description: "Lojas online de alta conversão com fluxos de checkout sem atrito e gestão de inventário.",
        },
        {
          title: "Produtos com IA",
          description: "Ferramentas inteligentes e automações que aproveitam machine learning para resolver problemas reais.",
        },
      ],
    },
    flashweb: {
      badge: "Produto em Destaque",
      title: "FlashWeb: Seu site construído",
      titleHighlight: " antes de pagar",
      description: "Construímos seu site completo primeiro. Você só paga se amar e quiser ficar com ele. Sem depósito, sem contrato, sem risco.",
      features: [
        "Site construído antes do pagamento",
        "Design e copy profissionais",
        "Otimizado para mobile",
        "SEO-ready desde o dia um",
        "Hospedagem rápida incluída",
        "Lançamento em 48 horas ou menos",
      ],
      cta: "Obtenha seu FlashWeb",
      browserUrl: "seunegocio.com.br",
      badgeTitle: "Construído e Pronto",
      badgeSubtitle: "Pague só se amar",
    },
    ourValues: {
      badge: "Nossos Valores",
      title: "Os princípios que guiam como construímos",
      description: "Devra foi fundada sobre uma crença simples: você pode entregar rápido e bem. Estes são os valores que vivemos todos os dias.",
      values: [
        {
          title: "Velocidade do Amanhecer",
          description: "Acreditamos que o impulso importa. Ótimos produtos entregues rápido superam produtos perfeitos nunca entregues.",
        },
        {
          title: "Artesanato, Não Atalhos",
          description: "Rápido não significa desleixado. Cada linha de código é escrita com intenção, testada com rigor.",
        },
        {
          title: "Obcecados pelo Cliente",
          description: "Construímos para as pessoas que usarão o que fazemos—o sucesso deles é nossa estrela guia.",
        },
        {
          title: "Curiosos e Aprendendo",
          description: "A tecnologia evolui diariamente. Ficamos afiados, experimentamos frequentemente e trazemos novo pensamento.",
        },
        {
          title: "Confiança Através da Transparência",
          description: "Sem caixas pretas. Compartilhamos nosso processo, comunicamos abertamente e assumimos nossos resultados.",
        },
        {
          title: "Energia de Construtor",
          description: "Somos nós mesmos fundadores, criadores e sonhadores—trazemos esse fogo para tudo que entregamos.",
        },
      ],
    },
    testimonials: {
      badge: "Depoimentos",
      title: "Confiado por construtores que se movem rápido",
      items: [
        {
          quote: "Devra entregou toda nossa plataforma web em 5 dias. O que teria levado meses para nossa equipe foi feito antes da próxima reunião.",
          author: "Sarah Chen",
          role: "Fundadora, TechStart",
        },
        {
          quote: "O conceito FlashWeb me convenceu imediatamente. Ver meu site antes de pagar? Isso é confiança no próprio ofício.",
          author: "Marcus Rivera",
          role: "Empresário Local",
        },
        {
          quote: "Finalmente uma equipe que se move tão rápido quanto nós. A qualidade é excepcional e a comunicação impecável.",
          author: "Alex Kim",
          role: "Parceiro de Agência",
        },
      ],
    },
    cta: {
      title: "Pronto para entregar na velocidade do amanhecer?",
      description: "Agende uma chamada de 15 minutos para discutir seu projeto. Sem apresentações, sem pressão—apenas uma conversa focada.",
      ctaPrimary: "Agendar chamada",
      ctaSecondary: "Enviar mensagem",
      trust: "Sem compromisso. Consulta gratuita. Resposta rápida.",
    },
    footer: {
      description: "Entregamos produtos prontos para clientes na velocidade do amanhecer. Automação + IA + QA rigoroso = sua visão, entregue rápido.",
      copyright: "Todos os direitos reservados.",
      product: "Produto",
      company: "Empresa",
      legal: "Legal",
      links: {
        flashweb: "FlashWeb",
        howItWorks: "Como Funciona",
        pricing: "Preços",
        about: "Sobre",
        blog: "Blog",
        careers: "Carreiras",
        privacy: "Privacidade",
        terms: "Termos",
      },
    },
    mobileCta: {
      bookCall: "Agendar chamada",
    },
  },
} as const
