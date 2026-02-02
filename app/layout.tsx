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
  title: 'Devra | We Ship Customer-Ready Products at Sunrise Speed',
  description: 'Devra builds and launches products fast, polished, and scalable. Using automation, AI, and rigorous QA. Try FlashWeb - websites built before you pay.',
  keywords: ['web development', 'AI', 'automation', 'FlashWeb', 'fast websites', 'product development'],
  openGraph: {
    title: 'Devra | We Ship Customer-Ready Products at Sunrise Speed',
    description: 'Devra builds and launches products fast, polished, and scalable. Using automation, AI, and rigorous QA.',
    type: 'website',
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
