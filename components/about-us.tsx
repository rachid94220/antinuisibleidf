import { Card, CardContent } from "@/components/ui/card"
import { Shield, Award, Users, Clock } from "lucide-react"

export function AboutUs() {
  const stats = [
    {
      icon: Shield,
      number: "15+",
      label: "Années d'expérience",
      description: "Une expertise reconnue dans la lutte antiparasitaire",
    },
    {
      icon: Users,
      number: "5000+",
      label: "Clients satisfaits",
      description: "Des particuliers et professionnels nous font confiance",
    },
    {
      icon: Award,
      number: "98%",
      label: "Taux de réussite",
      description: "Efficacité prouvée sur tous types d'interventions",
    },
    {
      icon: Clock,
      number: "24h/7j",
      label: "Disponibilité",
      description: "Service d'urgence disponible tous les jours",
    },
  ]

  return (
    <section id="about" className="py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#003049]">
              À Propos d'IDF Anti Nuisible
            </h2>
            <p className="text-gray-600 text-lg">
              Spécialistes de la lutte antiparasitaire en Île-de-France, nous intervenons rapidement pour éliminer tous
              types de nuisibles de votre environnement.
            </p>
            <p className="text-gray-600">
              Notre équipe de professionnels certifiés utilise des méthodes respectueuses de l'environnement et garantit
              des résultats durables. Nous proposons des solutions adaptées aussi bien aux particuliers qu'aux
              professionnels.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[#f77f00]">✓</span>
                <span className="text-gray-700">Techniciens certifiés et expérimentés</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#f77f00]">✓</span>
                <span className="text-gray-700">Produits écologiques et sécurisés</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#f77f00]">✓</span>
                <span className="text-gray-700">Garantie sur tous nos traitements</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#f77f00]">✓</span>
                <span className="text-gray-700">Devis gratuit et sans engagement</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="space-y-2">
                  <div className="flex justify-center">
                    <stat.icon className="h-8 w-8 text-[#d62828]" />
                  </div>
                  <div className="text-2xl font-bold text-[#003049]">{stat.number}</div>
                  <div className="text-sm font-semibold text-[#d62828]">{stat.label}</div>
                  <div className="text-xs text-gray-600">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
