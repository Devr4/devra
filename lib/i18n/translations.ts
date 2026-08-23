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
      ctaSecondary: "Or book a 15-min call",
      browserUrl: "yourbusiness.com",
      badgeTitle: "Built & Ready",
      badgeSubtitle: "Pay only if you love it",
    },
    work: {
      badge: "Real work",
      title: "See what FlashWeb actually produces",
      description: "A complete site for a real business, built before they committed to anything. It is live right now, preview banner and all.",
      linkLabel: "Visit the site",
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
        about: "About",
        contact: "Contact",
        privacy: "Privacy",
      },
    },
    // Mobile CTA
    privacy: {
      badge: "Legal",
      title: "Privacy notice",
      updated: "Last updated",
      back: "Back to home",
      sections: [
        {
          heading: "Who we are",
          body: "Devra runs this website. For anything in this notice, or about your data, write to hello@devra.io.",
          items: [],
        },
        {
          heading: "What this site collects",
          body: "Very little, and none of it by asking you:",
          items: ["Nothing you type. This site has no forms, no sign-up and no account.", "Aggregate visit statistics through Vercel Web Analytics. It sets no cookies and does not follow you to other websites.", "One entry in your browser's local storage, devra-locale, remembering the language you chose. It stays on your device and never reaches us.", "Ordinary server logs kept by our host, including IP address, for security and reliability."],
        },
        {
          heading: "Third parties that see something",
          body: "Loading or using this page involves three others:",
          items: ["Vercel hosts the site and processes server logs and analytics for us.", "flagcdn.com serves the flag images in the language switcher, so it receives your IP address when the page loads.", "cal.com handles bookings. If you book a call you leave this site, and their privacy notice applies from that point."],
        },
        {
          heading: "Why we are allowed to",
          body: "Our legitimate interest in running a secure website and understanding, in aggregate, how it is used. We do not profile you, we do not build advertising audiences, and we do not sell data.",
          items: [],
        },
        {
          heading: "How long we keep it",
          body: "We keep no database of visitors. Analytics are aggregated and retained by Vercel under their own policy, and server logs are short-lived.",
          items: [],
        },
        {
          heading: "Your rights",
          body: "Under the GDPR you can ask us to give you a copy of your data, correct it, delete it, restrict how we use it, or hand it to someone else, and you can object to us using it at all. Write to hello@devra.io. You can also complain to a supervisory authority; in Italy that is the Garante per la protezione dei dati personali.",
          items: [],
        },
        {
          heading: "Changes",
          body: "If this notice changes, the date above changes with it.",
          items: [],
        },
      ],
    },
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
      ctaSecondary: "Oppure prenota una call di 15 min",
      browserUrl: "tuaazienda.com",
      badgeTitle: "Costruito e Pronto",
      badgeSubtitle: "Paga solo se ti piace",
    },
    work: {
      badge: "Lavori reali",
      title: "Guarda cosa produce davvero FlashWeb",
      description: "Un sito completo per un'attività reale, realizzato prima di qualsiasi impegno. È online adesso, banner di anteprima incluso.",
      linkLabel: "Vai al sito",
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
      legal: "Note legali",
      links: {
        flashweb: "FlashWeb",
        howItWorks: "Come Funziona",
        about: "Chi Siamo",
        contact: "Contatti",
        privacy: "Privacy",
      },
    },
    privacy: {
      badge: "Note legali",
      title: "Informativa privacy",
      updated: "Ultimo aggiornamento",
      back: "Torna alla home",
      sections: [
        {
          heading: "Chi siamo",
          body: "Devra gestisce questo sito. Per qualsiasi cosa riguardi questa informativa o i tuoi dati, scrivi a hello@devra.io.",
          items: [],
        },
        {
          heading: "Cosa raccoglie questo sito",
          body: "Molto poco, e niente che ti venga chiesto:",
          items: ["Niente di ciò che scrivi. Questo sito non ha moduli, né registrazione, né account.", "Statistiche di visita aggregate tramite Vercel Web Analytics. Non usa cookie e non ti segue su altri siti.", "Una voce nella memoria locale del browser, devra-locale, che ricorda la lingua scelta. Resta sul tuo dispositivo e non arriva mai a noi.", "I normali log del server tenuti dal nostro host, indirizzo IP incluso, per sicurezza e affidabilità."],
        },
        {
          heading: "Terze parti che vedono qualcosa",
          body: "Aprire o usare questa pagina coinvolge altri tre soggetti:",
          items: ["Vercel ospita il sito e tratta per noi log e statistiche.", "flagcdn.com fornisce le bandiere del selettore di lingua e riceve quindi il tuo indirizzo IP al caricamento della pagina.", "cal.com gestisce le prenotazioni. Se prenoti una call esci da questo sito e da lì vale la loro informativa."],
        },
        {
          heading: "Su quale base",
          body: "Il nostro legittimo interesse a gestire un sito sicuro e a capire, in forma aggregata, come viene usato. Non ti profiliamo, non costruiamo pubblici pubblicitari e non vendiamo dati.",
          items: [],
        },
        {
          heading: "Per quanto tempo",
          body: "Non teniamo alcun archivio dei visitatori. Le statistiche sono aggregate e conservate da Vercel secondo la loro policy, e i log del server hanno vita breve.",
          items: [],
        },
        {
          heading: "I tuoi diritti",
          body: "Ai sensi del GDPR puoi chiederci una copia dei tuoi dati, la loro correzione o cancellazione, la limitazione del trattamento o la portabilità, e puoi opporti al trattamento. Scrivi a hello@devra.io. Puoi anche rivolgerti a un'autorità di controllo: in Italia è il Garante per la protezione dei dati personali.",
          items: [],
        },
        {
          heading: "Modifiche",
          body: "Se questa informativa cambia, cambia con essa la data qui sopra.",
          items: [],
        },
      ],
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
      ctaSecondary: "Oder 15-Minuten-Call buchen",
      browserUrl: "ihrunternehmen.de",
      badgeTitle: "Gebaut & Bereit",
      badgeSubtitle: "Zahlen nur bei Gefallen",
    },
    work: {
      badge: "Echte Projekte",
      title: "So sieht FlashWeb in der Praxis aus",
      description: "Eine vollständige Website für ein echtes Unternehmen, gebaut bevor es sich festgelegt hat. Sie ist jetzt online, inklusive Vorschau-Banner.",
      linkLabel: "Website ansehen",
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
        about: "Über uns",
        contact: "Kontakt",
        privacy: "Datenschutz",
      },
    },
    privacy: {
      badge: "Rechtliches",
      title: "Datenschutzhinweis",
      updated: "Zuletzt aktualisiert",
      back: "Zurück zur Startseite",
      sections: [
        {
          heading: "Wer wir sind",
          body: "Devra betreibt diese Website. Bei Fragen zu diesem Hinweis oder zu Ihren Daten schreiben Sie an hello@devra.io.",
          items: [],
        },
        {
          heading: "Was diese Website erhebt",
          body: "Sehr wenig, und nichts davon durch Nachfragen:",
          items: ["Nichts, was Sie eingeben. Diese Website hat keine Formulare, keine Anmeldung und kein Konto.", "Aggregierte Besuchsstatistiken über Vercel Web Analytics. Es setzt keine Cookies und verfolgt Sie nicht auf andere Websites.", "Einen Eintrag im lokalen Speicher Ihres Browsers, devra-locale, der Ihre Sprachwahl merkt. Er bleibt auf Ihrem Gerät und erreicht uns nie.", "Gewöhnliche Server-Logs unseres Hosters, einschließlich IP-Adresse, für Sicherheit und Zuverlässigkeit."],
        },
        {
          heading: "Dritte, die etwas sehen",
          body: "Das Laden dieser Seite betrifft drei weitere Parteien:",
          items: ["Vercel hostet die Website und verarbeitet Logs und Statistiken für uns.", "flagcdn.com liefert die Flaggenbilder der Sprachauswahl und erhält dabei Ihre IP-Adresse.", "cal.com wickelt Terminbuchungen ab. Wenn Sie einen Termin buchen, verlassen Sie diese Website und es gilt deren Datenschutzhinweis."],
        },
        {
          heading: "Auf welcher Grundlage",
          body: "Unser berechtigtes Interesse, eine sichere Website zu betreiben und aggregiert zu verstehen, wie sie genutzt wird. Wir erstellen keine Profile, bauen keine Werbezielgruppen und verkaufen keine Daten.",
          items: [],
        },
        {
          heading: "Wie lange",
          body: "Wir führen keine Besucherdatenbank. Statistiken werden aggregiert und von Vercel nach deren Richtlinie aufbewahrt, Server-Logs sind kurzlebig.",
          items: [],
        },
        {
          heading: "Ihre Rechte",
          body: "Nach der DSGVO können Sie Auskunft, Berichtigung, Löschung, Einschränkung oder Übertragung Ihrer Daten verlangen und der Verarbeitung widersprechen. Schreiben Sie an hello@devra.io. Sie können sich auch bei einer Aufsichtsbehörde beschweren.",
          items: [],
        },
        {
          heading: "Änderungen",
          body: "Ändert sich dieser Hinweis, ändert sich das Datum oben mit.",
          items: [],
        },
      ],
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
      ctaSecondary: "O reserva una llamada de 15 min",
      browserUrl: "tunegocio.com",
      badgeTitle: "Construido y Listo",
      badgeSubtitle: "Paga solo si te encanta",
    },
    work: {
      badge: "Trabajo real",
      title: "Mira lo que produce FlashWeb de verdad",
      description: "Un sitio completo para un negocio real, creado antes de cualquier compromiso. Está en línea ahora, con banner de vista previa incluido.",
      linkLabel: "Ver el sitio",
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
        about: "Nosotros",
        contact: "Contacto",
        privacy: "Privacidad",
      },
    },
    privacy: {
      badge: "Legal",
      title: "Aviso de privacidad",
      updated: "Última actualización",
      back: "Volver al inicio",
      sections: [
        {
          heading: "Quiénes somos",
          body: "Devra gestiona este sitio web. Para cualquier cosa relacionada con este aviso o con tus datos, escribe a hello@devra.io.",
          items: [],
        },
        {
          heading: "Qué recoge este sitio",
          body: "Muy poco, y nada preguntándotelo:",
          items: ["Nada de lo que escribas. Este sitio no tiene formularios, ni registro, ni cuenta.", "Estadísticas de visita agregadas mediante Vercel Web Analytics. No usa cookies ni te sigue a otros sitios.", "Una entrada en el almacenamiento local de tu navegador, devra-locale, que recuerda el idioma elegido. Se queda en tu dispositivo y nunca llega hasta nosotros.", "Registros de servidor normales de nuestro proveedor, incluida la dirección IP, por seguridad y fiabilidad."],
        },
        {
          heading: "Terceros que ven algo",
          body: "Cargar o usar esta página implica a otros tres:",
          items: ["Vercel aloja el sitio y trata los registros y las estadísticas por nosotros.", "flagcdn.com sirve las banderas del selector de idioma, por lo que recibe tu dirección IP al cargar la página.", "cal.com gestiona las reservas. Si reservas una llamada sales de este sitio y desde ahí se aplica su aviso de privacidad."],
        },
        {
          heading: "Con qué base",
          body: "Nuestro interés legítimo en mantener un sitio seguro y entender, de forma agregada, cómo se usa. No te perfilamos, no creamos audiencias publicitarias y no vendemos datos.",
          items: [],
        },
        {
          heading: "Cuánto tiempo",
          body: "No mantenemos ninguna base de datos de visitantes. Las estadísticas son agregadas y las conserva Vercel según su política, y los registros del servidor duran poco.",
          items: [],
        },
        {
          heading: "Tus derechos",
          body: "Según el RGPD puedes pedirnos una copia de tus datos, su corrección o supresión, la limitación del tratamiento o su portabilidad, y puedes oponerte al tratamiento. Escribe a hello@devra.io. También puedes reclamar ante una autoridad de control.",
          items: [],
        },
        {
          heading: "Cambios",
          body: "Si este aviso cambia, la fecha de arriba cambia con él.",
          items: [],
        },
      ],
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
      ctaSecondary: "Ou réservez un appel de 15 min",
      browserUrl: "votreentreprise.fr",
      badgeTitle: "Construit et Prêt",
      badgeSubtitle: "Payez seulement si vous aimez",
    },
    work: {
      badge: "Réalisations",
      title: "Voyez ce que FlashWeb produit réellement",
      description: "Un site complet pour une vraie entreprise, construit avant tout engagement. Il est en ligne, bannière d'aperçu comprise.",
      linkLabel: "Voir le site",
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
      legal: "Mentions légales",
      links: {
        flashweb: "FlashWeb",
        howItWorks: "Comment ça marche",
        about: "À propos",
        contact: "Contact",
        privacy: "Confidentialité",
      },
    },
    privacy: {
      badge: "Mentions légales",
      title: "Politique de confidentialité",
      updated: "Dernière mise à jour",
      back: "Retour à l'accueil",
      sections: [
        {
          heading: "Qui nous sommes",
          body: "Devra exploite ce site. Pour toute question sur cette politique ou sur vos données, écrivez à hello@devra.io.",
          items: [],
        },
        {
          heading: "Ce que ce site collecte",
          body: "Très peu, et rien en vous le demandant :",
          items: ["Rien de ce que vous saisissez. Ce site n'a ni formulaire, ni inscription, ni compte.", "Des statistiques de visite agrégées via Vercel Web Analytics. Aucun cookie, et aucun suivi vers d'autres sites.", "Une entrée dans le stockage local de votre navigateur, devra-locale, qui retient la langue choisie. Elle reste sur votre appareil et ne nous parvient jamais.", "Les journaux serveur habituels de notre hébergeur, adresse IP comprise, pour la sécurité et la fiabilité."],
        },
        {
          heading: "Les tiers qui voient quelque chose",
          body: "Charger cette page fait intervenir trois autres acteurs :",
          items: ["Vercel héberge le site et traite pour nous les journaux et les statistiques.", "flagcdn.com fournit les drapeaux du sélecteur de langue et reçoit donc votre adresse IP au chargement.", "cal.com gère les rendez-vous. Si vous réservez un appel, vous quittez ce site et leur politique s'applique."],
        },
        {
          heading: "Sur quelle base",
          body: "Notre intérêt légitime à exploiter un site sécurisé et à comprendre, de façon agrégée, son utilisation. Nous ne vous profilons pas, ne constituons pas d'audiences publicitaires et ne vendons pas de données.",
          items: [],
        },
        {
          heading: "Combien de temps",
          body: "Nous ne tenons aucune base de visiteurs. Les statistiques sont agrégées et conservées par Vercel selon leur politique, et les journaux serveur sont de courte durée.",
          items: [],
        },
        {
          heading: "Vos droits",
          body: "Le RGPD vous permet de demander l'accès à vos données, leur rectification, leur effacement, la limitation du traitement ou leur portabilité, et de vous opposer au traitement. Écrivez à hello@devra.io. Vous pouvez aussi saisir une autorité de contrôle.",
          items: [],
        },
        {
          heading: "Modifications",
          body: "Si cette politique change, la date ci-dessus change avec elle.",
          items: [],
        },
      ],
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
      ctaSecondary: "Ou marque uma chamada de 15 min",
      browserUrl: "seunegocio.com.br",
      badgeTitle: "Construído e Pronto",
      badgeSubtitle: "Pague só se amar",
    },
    work: {
      badge: "Trabalho real",
      title: "Veja o que o FlashWeb produz mesmo",
      description: "Um site completo para um negócio real, criado antes de qualquer compromisso. Está online agora, com banner de pré-visualização incluído.",
      linkLabel: "Ver o site",
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
        about: "Sobre",
        contact: "Contacto",
        privacy: "Privacidade",
      },
    },
    privacy: {
      badge: "Legal",
      title: "Aviso de privacidade",
      updated: "Última atualização",
      back: "Voltar ao início",
      sections: [
        {
          heading: "Quem somos",
          body: "A Devra gere este site. Para qualquer questão sobre este aviso ou sobre os seus dados, escreva para hello@devra.io.",
          items: [],
        },
        {
          heading: "O que este site recolhe",
          body: "Muito pouco, e nada perguntando-lhe:",
          items: ["Nada do que escrever. Este site não tem formulários, nem registo, nem conta.", "Estatísticas de visita agregadas através do Vercel Web Analytics. Não usa cookies nem o segue para outros sites.", "Uma entrada no armazenamento local do navegador, devra-locale, que guarda o idioma escolhido. Fica no seu dispositivo e nunca chega até nós.", "Registos de servidor normais do nosso alojamento, incluindo o endereço IP, por segurança e fiabilidade."],
        },
        {
          heading: "Terceiros que veem alguma coisa",
          body: "Carregar esta página envolve outros três:",
          items: ["A Vercel aloja o site e trata dos registos e das estatísticas por nós.", "O flagcdn.com fornece as bandeiras do seletor de idioma, pelo que recebe o seu endereço IP ao carregar a página.", "O cal.com trata das marcações. Se marcar uma chamada sai deste site e passa a valer o aviso deles."],
        },
        {
          heading: "Com que base",
          body: "O nosso interesse legítimo em manter um site seguro e perceber, de forma agregada, como é usado. Não fazemos perfis, não criamos audiências publicitárias e não vendemos dados.",
          items: [],
        },
        {
          heading: "Durante quanto tempo",
          body: "Não mantemos qualquer base de dados de visitantes. As estatísticas são agregadas e conservadas pela Vercel segundo a política deles, e os registos de servidor duram pouco.",
          items: [],
        },
        {
          heading: "Os seus direitos",
          body: "Ao abrigo do RGPD pode pedir-nos uma cópia dos seus dados, a sua correção ou apagamento, a limitação do tratamento ou a portabilidade, e pode opor-se ao tratamento. Escreva para hello@devra.io. Pode também apresentar queixa a uma autoridade de controlo.",
          items: [],
        },
        {
          heading: "Alterações",
          body: "Se este aviso mudar, a data acima muda com ele.",
          items: [],
        },
      ],
    },
    mobileCta: {
      bookCall: "Agendar chamada",
    },
  },
}
