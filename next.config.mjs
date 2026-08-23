/** @type {import('next').NextConfig} */
const nextConfig = {
  // typescript.ignoreBuildErrors was true, which meant `next build` could not
  // fail on a type error. It was hiding exactly one: translations.ts was
  // declared `as const`, so every language's strings had their own literal
  // types and translations[locale] would not typecheck against
  // typeof translations.en. Dropping `as const` fixed it, so the escape hatch
  // is no longer load-bearing and is removed rather than left armed.
  //
  // Keeping it off matters here specifically: the compiler is now what verifies
  // that all six language blocks still have the same shape. With build errors
  // ignored, a missing key would ship as `undefined` rendered into the page.
  images: {
    unoptimized: true,
  },
}

export default nextConfig
