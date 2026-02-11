import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { AboutUs } from "@/components/about-us"
import { Testimonials } from "@/components/testimonials"
import { ContactSection } from "@/components/contact-section"
import { QuoteForm } from "@/components/quote-form"
import { Footer } from "@/components/footer"
import { FloatingCallButton } from "@/components/floating-call-button"

export const metadata = {
  title: "IDF Anti Nuisible - Dératisation et Désinsectisation",
  description:
    "Intervention rapide sur toute l'Île-de-France. Dératisation, désinsectisation et traitement des nuisibles.",
  alternates: {
    canonical: "https://idfantinuisible.fr/",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <AboutUs />
      <Testimonials />
      <ContactSection />
      <Footer />
      <FloatingCallButton />
    </div>
  )
}
