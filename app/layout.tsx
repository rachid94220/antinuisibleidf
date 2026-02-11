import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IDF Anti Nuisible - Dératisation et Désinsectisation en Île-de-France",
  description:
    "Spécialiste de la lutte antiparasitaire en Île-de-France. Intervention rapide contre rats, souris, punaises de lit, cafards, guêpes et frelons. Devis gratuit.",
  keywords: "dératisation, désinsectisation, punaises de lit, cafards, guêpes, frelons, Paris, Île-de-France",
  authors: [{ name: "IDF Anti Nuisible" }],
  creator: "IDF Anti Nuisible",
  publisher: "IDF Anti Nuisible",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://idf-antinuisible.fr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "IDF Anti Nuisible - Dératisation et Désinsectisation",
    description: "Spécialiste de la lutte antiparasitaire en Île-de-France. Intervention rapide et professionnelle.",
    url: "https://idf-antinuisible.fr",
    siteName: "IDF Anti Nuisible",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IDF Anti Nuisible - Dératisation et Désinsectisation",
    description: "Spécialiste de la lutte antiparasitaire en Île-de-France. Intervention rapide et professionnelle.",
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
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
