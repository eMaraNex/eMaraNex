import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SEO_KEYWORDS, STRUCTURED_DATA } from "@/lib/seo-keywords"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://emaranex.com"),
  title: {
    default: "eMaraNex - Multi-Industry SaaS Solutions | Farm Management, SME Tools & Healthcare SaaS",
    template: "%s | eMaraNex - SaaS Startup Building Industry Solutions",
  },
  description:
    "SaaS startup building industry-specific software solutions. Farm management SaaS for livestock tracking and rabbit breeding, SME business tools for inventory and expense tracking, healthcare management systems, and more.",
  keywords: SEO_KEYWORDS,
  authors: [{ name: "eMaraNex SaaS Team", url: "https://emaranex.com" }],
  creator: "eMaraNex",
  publisher: "eMaraNex",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://emaranex.com",
    title: "eMaraNex - Multi-Industry SaaS Startup",
    description:
      "SaaS startup building specialized software solutions for farming, SMEs, healthcare, and more. Subscription-based software that scales with your business needs.",
    siteName: "eMaraNex",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "eMaraNex - Multi-Industry SaaS Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eMaraNex - Multi-Industry SaaS Solutions",
    description: "SaaS startup building specialized software for farming, SMEs, healthcare with subscription pricing",
    creator: "@emaranex",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://emaranex.com",
  },
  category: "SaaS Technology",
  classification: "Software as a Service",
  other: {
    "google-site-verification": "your-google-verification-code",
    "msvalidate.01": "your-bing-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(STRUCTURED_DATA),
          }}
        />

        {/* Performance hints */}
        <link rel="preload" href="/hero-bg.webp" as="image" />
        <meta name="theme-color" content="#10b981" />
        <meta name="color-scheme" content="light dark" />

        {/* Additional SEO meta tags */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="English" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />

        {/* Mobile optimization */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="eMaraNex" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
