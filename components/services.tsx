import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bug, Rat, Shield, Zap, Home, Clock } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Rat,
      title: "Dératisation",
      description: "Élimination complète des rats et souris avec des méthodes professionnelles et durables.",
      features: ["Inspection gratuite", "Traitement écologique", "Garantie 6 mois"],
    },
    {
      icon: Bug,
      title: "Désinsectisation",
      description: "Traitement efficace contre tous types d'insectes nuisibles dans votre environnement.",
      features: ["Punaises de lit", "Cafards et blattes", "Fourmis et araignées"],
    },
    {
      icon: Shield,
      title: "Guêpes et Frelons",
      description: "Destruction sécurisée des nids de guêpes et frelons par des professionnels équipés.",
      features: ["Intervention rapide", "Équipement de sécurité", "Destruction complète"],
    },
    {
      icon: Zap,
      title: "Traitement Choc",
      description: "Solutions d'urgence pour les infestations importantes nécessitant une action immédiate.",
      features: ["Disponible 24h/24", "Résultats garantis", "Suivi personnalisé"],
    },
    {
      icon: Home,
      title: "Prévention",
      description: "Conseils et traitements préventifs pour éviter le retour des nuisibles.",
      features: ["Audit complet", "Plan de prévention", "Conseils personnalisés"],
    },
    {
      icon: Clock,
      title: "Intervention Rapide",
      description: "Service d'urgence disponible 7j/7 pour une intervention dans les plus brefs délais.",
      features: ["Devis gratuit", "Intervention sous 2h", "Tarifs transparents"],
    },
  ]

  return (
    <section id="services" className="py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#003049] mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions professionnelles adaptées à tous vos problèmes de nuisibles
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 hover:border-[#f77f00] transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <service.icon className="h-12 w-12 text-[#d62828]" />
                </div>
                <CardTitle className="text-xl font-bold text-[#003049]">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 text-center">{service.description}</CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <span className="text-[#f77f00] mr-2">✓</span>
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
