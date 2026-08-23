import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  // Required before any relative canonical or og:image resolves correctly.
  // Without it Next falls back to localhost:3000 and bakes that into the built
  // HTML, so /privacy would have shipped declaring itself canonical at
  // http://localhost:3000/privacy.
  metadataBase: new URL('https://www.devra.net'),
  title: 'Devra | We Ship Customer-Ready Products at Sunrise Speed',
  description: 'Devra builds and launches products fast, polished, and scalable. Using automation, AI, and rigorous QA. Try FlashWeb - websites built before you pay.',
  keywords: ['web development', 'AI', 'automation', 'FlashWeb', 'fast websites', 'product development'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Devra | We Ship Customer-Ready Products at Sunrise Speed',
    description: 'Devra builds and launches products fast, polished, and scalable. Using automation, AI, and rigorous QA.',
    type: 'website',
    url: '/',
    siteName: 'Devra',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#1a1625',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
