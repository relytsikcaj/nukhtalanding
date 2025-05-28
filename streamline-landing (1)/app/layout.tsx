import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Nukhta - Authentic Islamic Learning",
  description:
    "Learn with exceptional teachers through clear, purposeful content. No distractions, no overwhelm—just meaningful education rooted in Islamic wisdom.",
  keywords: "Islamic education, authentic learning, Islamic scholars, meaningful education, Nukhta",
  authors: [{ name: "Nukhta" }],
  openGraph: {
    title: "Nukhta - Authentic Islamic Learning",
    description: "Learn with exceptional teachers through clear, purposeful content.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#fafaf9" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Crimson+Text:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
