import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kunika Premi - Graphic Designer & Frontend Developer",
  description:
    "Professional portfolio of Kunika Premi, a creative B.Tech student specializing in graphic design and frontend development.",
  keywords: [
    "graphic designer",
    "frontend developer",
    "UI/UX designer",
    "web developer",
    "Figma",
    "Python",
    "JavaScript",
  ],
  authors: [{ name: "Kunika Premi" }],
  creator: "Kunika Premi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kunikapremi.dev",
    title: "Kunika Premi - Graphic Designer & Frontend Developer",
    description:
      "Creative B.Tech student passionate about graphic design and frontend development. View my portfolio and projects.",
    siteName: "Kunika Premi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kunika Premi - Graphic Designer & Frontend Developer",
    description: "Creative B.Tech student passionate about graphic design and frontend development.",
    creator: "@kunikapremi",
  },
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
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
