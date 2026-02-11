import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bug, Rat, Shield, Zap, Home, Clock } from "lucide-react"

export function MobileOptimizedServices() {
  const services = [
    {
      icon: Rat,
      title: "Dératisation",
      description: "Élimination complète des rats et souris",
      features: ["Inspection gratuite", "Traitement écologique", "Garantie 6 mois"],
    },
    {
      icon: Bug,
      title: "Désinsectisation",
      description: "Traitement contre tous insectes nuisibles",
      features: ["Punaises de lit", "Cafards et blattes", "Fourmis et araignées"],
    },
    {
      icon: Shield,
      title: "Guêpes et Frelons",
      description: "Destruction sécurisée des nids",
      features: ["Intervention rapide", "Équipement de sécurité", "Destruction complète"],
    },
    {
      icon: Zap,
      title: "Traitement Choc",
      description: "Solutions d'urgence pour infestations",
      features: ["Disponible 24h/24", "Résultats garantis", "Suivi personnalisé"],
    },
    {
      icon: Home,
      title: "Prévention",
      description: "Conseils et traitements préventifs",
      features: ["Audit complet", "Plan de prévention", "Conseils personnalisés"],
    },
    {
      icon: Clock,
      title: "Intervention Rapide",
      description: "Service d'urgence 7j/7",
      features: ["Devis gratuit", "Intervention sous 2h", "Tarifs transparents"],
    },
  ]

  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-[#003049] mb-4">Nos Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Solutions professionnelles pour tous vos problèmes de nuisibles
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-[#f77f00] transition-colors">
              <CardHeader className="pb-3 text-center md:text-left hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center md:justify-start">
                  <service.icon className="h-12 w-12 md:h-10 md:w-10 text-[#d62828] mb-3 md:mb-2" />
                </div>
                <CardTitle className="text-lg md:text-xl font-bold text-[#003049]">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-gray-600 mb-4 text-center md:text-left text-sm md:text-base">
                  {service.description}
                </CardDescription>
                <ul className="space-y-1 md:space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs md:text-sm text-gray-700">
                      <span className="text-[#f77f00] mr-2 text-sm">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
