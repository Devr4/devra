# Devra landing page

The marketing site for Devra, served at [www.devra.net](https://www.devra.net).

Next.js App Router, Tailwind CSS, shadcn/ui. A single page (`app/page.tsx`)
composed of sections in `components/`, with copy for six languages in
`lib/i18n/translations.ts`.

```bash
pnpm install
pnpm dev     # http://localhost:3000
pnpm build
```

## Copy lives in one file

Nothing user-visible is hardcoded in a component. Every string is a key in
`lib/i18n/translations.ts`, which carries `en`, `it`, `de`, `es`, `fr` and `pt`.
Adding a section means adding its key to all six, and the language switcher
reads from the same object.

## FlashWeb is a separate site

FlashWeb is Devra's product and lives on its own host at
[flashweb.devra.net](https://flashweb.devra.net), in the `Devr4/v69` monorepo
under `apps/landing`. This repository only describes it.

That distinction matters more than it looks. This page is the only site in the
world that already talks about FlashWeb, so the links it gives are the product's
entire inbound authority. `#flashweb` is a section of this page; it is not the
product. Any link meant to reach FlashWeb has to be an absolute URL to
`flashweb.devra.net`, or it is a link to ourselves.

## A note on claims

Sections that assert trust must be backed by something checkable. The
testimonials section was removed because its three quotes were placeholder names
that were never replaced, and the hero's "trusted by" row named market segments
rather than customers. Both shipped to production in six languages.

`components/work-section.tsx` is the replacement: real client sites, linked, so
a visitor can verify them. It deliberately excludes the two demonstration sites
the FlashWeb landing marks as demos rather than client work.
