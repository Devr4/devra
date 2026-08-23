import type { Metadata } from "next"

/**
 * page.tsx is a client component, so it cannot export metadata itself. Without
 * this the notice inherited the home page's title and description verbatim, and
 * two URLs claiming to be the same page is the kind of duplicate signal that
 * costs the page it is copied from.
 *
 * Deliberately indexable: a privacy notice is a trust signal a search engine
 * looks for on a commercial site, and there is nothing here worth hiding.
 */
export const metadata: Metadata = {
  title: "Privacy notice | Devra",
  description:
    "What devra.net collects, which third parties see anything, and how to exercise your rights under the GDPR.",
  alternates: { canonical: "/privacy" },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children
}
