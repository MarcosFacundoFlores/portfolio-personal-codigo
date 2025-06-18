import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@/components/analytics"
import ClientLayout from "./client"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Marcos Flores | Técnico Universitario en Programación",
  description:
    "Portfolio de Marcos Facundo Flores: Web Developer Full stack. Node.Js, Next.Js, Express, Docker, Drizzle y Google Cloud",
  keywords: [
    "Marcos Facundo Flores",
    "Software Engineer",
    "Full Stack Developer",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Docker",
    "Drizzle",
    "Next.js",
    "Google Cloud"
  ],
  authors: [{ name: "MarcosFacundoFlores" }],
  creator: "Marcos Facundo Flores",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://marcosflores.com",
    title: "Marcos Flores | Téc. Universitario en Programación",
    description:
      "Portfolio de Marcos Facundo Flores: Web Developer Full stack. Node.Js, Next.Js, Express, Docker, Drizzle y Google Cloud",
    siteName: "Marcos Flores Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Nihal Maskey Logo",
      },
    ],
  },
  /* Check later */
  twitter: {
    card: "summary_large_image",
    title: "Marcos Flores | Téc. Universitario en Programación",
    description:
      "Portfolio of Nihal Maskey, a Senior Software Engineer specializing in JavaScript, TypeScript, React.js, Node.js, Laravel, and AWS.",
    creator: "@maskeynihal",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Suspense>
        <ClientLayout>{children}</ClientLayout>
      </Suspense>
      <Analytics />
    </>
  )
}


import './globals.css'