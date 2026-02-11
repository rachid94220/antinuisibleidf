"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Marie Dubois",
      location: "Paris 15ème",
      rating: 5,
      text: "Service impeccable ! L'équipe est arrivée rapidement et a résolu notre problème de rats en une seule intervention. Je recommande vivement !",
    },
    {
      name: "Jean Martin",
      location: "Boulogne-Billancourt",
      rating: 5,
      text: "Très professionnel, ponctuel et efficace. Plus aucune trace de cafards depuis leur passage. Merci beaucoup !",
    },
    {
      name: "Sophie Laurent",
      location: "Vincennes",
      rating: 5,
      text: "Excellent travail pour l'élimination des punaises de lit. L'équipe est très compétente et rassurante.",
    },
    {
      name: "Pierre Moreau",
      location: "Neuilly-sur-Seine",
      rating: 5,
      text: "Intervention d'urgence pour un nid de guêpes. Rapide, sécurisé et très professionnel. Je recommande !",
    },
    {
      name: "Isabelle Petit",
      location: "Créteil",
      rating: 5,
      text: "Service de qualité, devis gratuit respecté et résultats au rendez-vous. Très satisfaite de leur prestation.",
    },
    {
      name: "Michel Bernard",
      location: "Argenteuil",
      rating: 5,
      text: "Problème de souris résolu définitivement. L'équipe est professionnelle et donne de bons conseils préventifs.",
    },
    {
      name: "Catherine Rousseau",
      location: "Montreuil",
      rating: 5,
      text: "Très réactifs pour une urgence punaises de lit. Traitement efficace et suivi impeccable.",
    },
    {
      name: "David Leroy",
      location: "Clichy",
      rating: 5,
      text: "Excellent service client, techniciens compétents. Notre problème de blattes est définitivement réglé.",
    },
    {
      name: "Nathalie Simon",
      location: "Levallois-Perret",
      rating: 5,
      text: "Intervention rapide et efficace pour des frelons. Prix correct et travail soigné.",
    },
    {
      name: "François Blanc",
      location: "Courbevoie",
      rating: 5,
      text: "Professionnalisme exemplaire. Plus de problème de rats depuis 6 mois. Garantie respectée !",
    },
    {
      name: "Sylvie Garnier",
      location: "Rueil-Malmaison",
      rating: 5,
      text: "Service irréprochable pour l'élimination de fourmis. Conseils précieux pour éviter les récidives.",
    },
    {
      name: "Alain Faure",
      location: "Nanterre",
      rating: 5,
      text: "Très satisfait de l'intervention contre les guêpes. Équipe sérieuse et matériel professionnel.",
    },
    {
      name: "Martine Roux",
      location: "Antony",
      rating: 5,
      text: "Problème de punaises résolu rapidement. Personnel aimable et explications claires.",
    },
    {
      name: "Thierry Moreau",
      location: "Colombes",
      rating: 5,
      text: "Intervention d'urgence parfaite. Disponibles même le weekend. Très professionnel !",
    },
    {
      name: "Valérie Dupont",
      location: "Asnières-sur-Seine",
      rating: 5,
      text: "Excellent rapport qualité-prix. Traitement contre les cafards très efficace.",
    },
    {
      name: "Patrick Lemoine",
      location: "Saint-Denis",
      rating: 5,
      text: "Service de dératisation impeccable. Plus aucun problème depuis leur passage.",
    },
    {
      name: "Christine Bonnet",
      location: "Puteaux",
      rating: 5,
      text: "Très professionnels pour l'élimination d'un nid de frelons asiatiques. Intervention sécurisée.",
    },
    {
      name: "Gérard Mercier",
      location: "Suresnes",
      rating: 5,
      text: "Équipe compétente et matériel adapté. Notre problème de souris est définitivement réglé.",
    },
    {
      name: "Monique Girard",
      location: "Bois-Colombes",
      rating: 5,
      text: "Service client excellent, devis détaillé et intervention efficace contre les blattes.",
    },
    {
      name: "Bernard Lefevre",
      location: "Gennevilliers",
      rating: 5,
      text: "Très réactifs en cas d'urgence. Problème de guêpes résolu en 24h. Parfait !",
    },
    {
      name: "Annie Muller",
      location: "Châtillon",
      rating: 5,
      text: "Professionnels sérieux et efficaces. Plus de punaises de lit grâce à leur intervention.",
    },
    {
      name: "Claude Vincent",
      location: "Malakoff",
      rating: 5,
      text: "Excellent travail de dératisation. Conseils utiles et garantie respectée.",
    },
    {
      name: "Brigitte Chevalier",
      location: "Vanves",
      rating: 5,
      text: "Service impeccable contre les cafards. Intervention discrète et résultats durables.",
    },
    {
      name: "René Gautier",
      location: "Issy-les-Moulineaux",
      rating: 5,
      text: "Très satisfait de leur professionnalisme. Problème de rats résolu définitivement.",
    },
    {
      name: "Jacqueline Perrin",
      location: "Meudon",
      rating: 5,
      text: "Équipe réactive et compétente. Plus aucune fourmi depuis leur passage.",
    },
    {
      name: "Henri Dubois",
      location: "Clamart",
      rating: 5,
      text: "Service de qualité pour l'élimination de guêpes. Prix honnête et travail soigné.",
    },
    {
      name: "Odette Lambert",
      location: "Fontenay-aux-Roses",
      rating: 5,
      text: "Très professionnels pour le traitement des punaises. Suivi excellent après intervention.",
    },
    {
      name: "Marcel Petit",
      location: "Le Plessis-Robinson",
      rating: 5,
      text: "Intervention rapide et efficace contre les souris. Matériel professionnel et conseils avisés.",
    },
    {
      name: "Simone Roche",
      location: "Châtenay-Malabry",
      rating: 5,
      text: "Excellent service de désinsectisation. Plus de problème de blattes depuis 8 mois.",
    },
    {
      name: "André Moreau",
      location: "Sceaux",
      rating: 5,
      text: "Professionnels compétents et ponctuels. Notre problème de frelons est résolu.",
    },
    {
      name: "Georgette Blanc",
      location: "Antony",
      rating: 5,
      text: "Service irréprochable. Traitement contre les punaises très efficace et durable.",
    },
    {
      name: "Roger Fabre",
      location: "Bagneux",
      rating: 5,
      text: "Très satisfait de l'intervention contre les rats. Équipe sérieuse et garantie respectée.",
    },
    {
      name: "Denise Giraud",
      location: "Montrouge",
      rating: 5,
      text: "Excellent travail de dératisation. Personnel aimable et explications détaillées.",
    },
    {
      name: "Lucien Mercier",
      location: "Cachan",
      rating: 5,
      text: "Service de qualité pour l'élimination de cafards. Résultats visibles dès le lendemain.",
    },
    {
      name: "Paulette Roussel",
      location: "Arcueil",
      rating: 5,
      text: "Très professionnels pour le traitement des fourmis. Plus aucun problème depuis.",
    },
    {
      name: "Émile Bonnet",
      location: "Gentilly",
      rating: 5,
      text: "Intervention d'urgence parfaite contre les guêpes. Équipe bien équipée et compétente.",
    },
    {
      name: "Raymonde Leroy",
      location: "Le Kremlin-Bicêtre",
      rating: 5,
      text: "Service impeccable contre les punaises de lit. Suivi personnalisé et conseils précieux.",
    },
    {
      name: "Gaston Durand",
      location: "Villejuif",
      rating: 5,
      text: "Très satisfait de la dératisation. Plus de souris depuis 4 mois. Excellent travail !",
    },
    {
      name: "Huguette Martin",
      location: "Vitry-sur-Seine",
      rating: 5,
      text: "Professionnels sérieux et efficaces. Notre problème de blattes est définitivement réglé.",
    },
    {
      name: "Fernand Leclerc",
      location: "Ivry-sur-Seine",
      rating: 5,
      text: "Excellent service de désinsectisation. Intervention rapide et résultats durables.",
    },
    {
      name: "Yvette Garnier",
      location: "Charenton-le-Pont",
      rating: 5,
      text: "Très professionnels pour l'élimination de frelons. Matériel adapté et sécurité respectée.",
    },
    {
      name: "Maurice Roux",
      location: "Maisons-Alfort",
      rating: 5,
      text: "Service de dératisation exemplaire. Conseils utiles et garantie tenue.",
    },
    {
      name: "Jeannette Faure",
      location: "Saint-Maurice",
      rating: 5,
      text: "Excellent travail contre les punaises. Personnel compétent et intervention discrète.",
    },
    {
      name: "Lucienne Moreau",
      location: "Joinville-le-Pont",
      rating: 5,
      text: "Très satisfaite du traitement contre les cafards. Plus aucun problème depuis.",
    },
    {
      name: "Alphonse Dubois",
      location: "Saint-Mandé",
      rating: 5,
      text: "Service irréprochable pour l'élimination de guêpes. Intervention sécurisée et efficace.",
    },
    {
      name: "Berthe Laurent",
      location: "Vincennes",
      rating: 5,
      text: "Professionnels compétents pour la dératisation. Résultats visibles et durables.",
    },
    {
      name: "Édouard Simon",
      location: "Fontenay-sous-Bois",
      rating: 5,
      text: "Excellent service contre les punaises de lit. Équipe sérieuse et matériel professionnel.",
    },
    {
      name: "Marguerite Blanc",
      location: "Nogent-sur-Marne",
      rating: 5,
      text: "Très professionnels pour le traitement des fourmis. Conseils précieux et suivi excellent.",
    },
    {
      name: "Armand Lefevre",
      location: "Le Perreux-sur-Marne",
      rating: 5,
      text: "Service de qualité pour l'élimination de rats. Plus aucun problème depuis 6 mois.",
    },
    {
      name: "Suzanne Mercier",
      location: "Bry-sur-Marne",
      rating: 5,
      text: "Intervention d'urgence parfaite contre les frelons. Équipe réactive et compétente.",
    },
    {
      name: "Léon Girard",
      location: "Champigny-sur-Marne",
      rating: 5,
      text: "Très satisfait de la désinsectisation. Traitement efficace contre les blattes.",
    },
    {
      name: "Henriette Rousseau",
      location: "Saint-Maur-des-Fossés",
      rating: 5,
      text: "Excellent travail de dératisation. Personnel aimable et intervention soignée.",
    },
    {
      name: "Gustave Bonnet",
      location: "Créteil",
      rating: 5,
      text: "Service impeccable contre les punaises. Résultats durables et garantie respectée.",
    },
    {
      name: "Léonie Moreau",
      location: "Limeil-Brévannes",
      rating: 5,
      text: "Très professionnels pour l'élimination de guêpes. Matériel adapté et sécurité optimale.",
    },
    {
      name: "Célestin Durand",
      location: "Villecresnes",
      rating: 5,
      text: "Excellent service de dératisation. Plus de souris depuis leur intervention.",
    },
    {
      name: "Ernestine Fabre",
      location: "Boissy-Saint-Léger",
      rating: 5,
      text: "Service de qualité contre les cafards. Intervention discrète et résultats probants.",
    },
    {
      name: "Firmin Leclerc",
      location: "Sucy-en-Brie",
      rating: 5,
      text: "Très satisfait du traitement des punaises. Équipe compétente et suivi personnalisé.",
    },
    {
      name: "Célestine Garnier",
      location: "Ormesson-sur-Marne",
      rating: 5,
      text: "Professionnels sérieux pour l'élimination de frelons. Intervention sécurisée et efficace.",
    },
    {
      name: "Prosper Roux",
      location: "La Queue-en-Brie",
      rating: 5,
      text: "Excellent travail de désinsectisation. Plus de problème de fourmis depuis.",
    },
    {
      name: "Philomène Martin",
      location: "Noiseau",
      rating: 5,
      text: "Service irréprochable pour la dératisation. Conseils utiles et garantie tenue.",
    },
    {
      name: "Clémentine Dubois",
      location: "Orly",
      rating: 5,
      text: "Très professionnels contre les punaises de lit. Matériel professionnel et résultats durables.",
    },
    {
      name: "Anatole Laurent",
      location: "Villeneuve-le-Roi",
      rating: 5,
      text: "Excellent service d'élimination de guêpes. Équipe réactive et intervention sécurisée.",
    },
    {
      name: "Euphrasie Simon",
      location: "Ablon-sur-Seine",
      rating: 5,
      text: "Service de qualité pour le traitement des cafards. Plus aucun problème depuis.",
    },
    {
      name: "Théophile Blanc",
      location: "Valenton",
      rating: 5,
      text: "Très satisfait de la dératisation. Personnel compétent et intervention soignée.",
    },
    {
      name: "Zéphyrine Lefevre",
      location: "Villeneuve-Saint-Georges",
      rating: 5,
      text: "Professionnels sérieux pour l'élimination de punaises. Résultats visibles et durables.",
    },
    {
      name: "Apollinaire Mercier",
      location: "Mandres-les-Roses",
      rating: 5,
      text: "Excellent travail contre les frelons. Équipe bien équipée et intervention sécurisée.",
    },
    {
      name: "Pélagie Girard",
      location: "Marolles-en-Brie",
      rating: 5,
      text: "Service impeccable de désinsectisation. Plus de problème de blattes depuis 5 mois.",
    },
    {
      name: "Polycarpe Rousseau",
      location: "Santeny",
      rating: 5,
      text: "Très professionnels pour la dératisation. Conseils précieux et suivi excellent.",
    },
    {
      name: "Scholastique Bonnet",
      location: "Servon",
      rating: 5,
      text: "Excellent service contre les punaises de lit. Intervention discrète et efficace.",
    },
    {
      name: "Théodule Moreau",
      location: "Varennes-Jarcy",
      rating: 5,
      text: "Service de qualité pour l'élimination de guêpes. Matériel adapté et sécurité respectée.",
    },
    {
      name: "Ursule Durand",
      location: "Yerres",
      rating: 5,
      text: "Très satisfaite du traitement des cafards. Plus aucun problème depuis leur passage.",
    },
    {
      name: "Vénérand Fabre",
      location: "Brunoy",
      rating: 5,
      text: "Professionnels compétents pour la dératisation. Résultats durables et garantie respectée.",
    },
    {
      name: "Xavière Leclerc",
      location: "Épinay-sous-Sénart",
      rating: 5,
      text: "Excellent travail contre les punaises. Équipe sérieuse et matériel professionnel.",
    },
    {
      name: "Yolande Garnier",
      location: "Quincy-sous-Sénart",
      rating: 5,
      text: "Service irréprochable pour l'élimination de frelons. Intervention sécurisée et efficace.",
    },
    {
      name: "Zacharie Roux",
      location: "Boussy-Saint-Antoine",
      rating: 5,
      text: "Très professionnels pour le traitement des fourmis. Conseils utiles et suivi personnalisé.",
    },
    {
      name: "Adélaïde Martin",
      location: "Combs-la-Ville",
      rating: 5,
      text: "Excellent service de dératisation. Plus de souris depuis 7 mois. Parfait !",
    },
    {
      name: "Barthélemy Dubois",
      location: "Lieusaint",
      rating: 5,
      text: "Service de qualité contre les punaises de lit. Résultats visibles et durables.",
    },
    {
      name: "Cunégonde Laurent",
      location: "Moissy-Cramayel",
      rating: 5,
      text: "Très satisfaite de l'élimination de guêpes. Équipe réactive et compétente.",
    },
    {
      name: "Dieudonné Simon",
      location: "Savigny-le-Temple",
      rating: 5,
      text: "Professionnels sérieux pour la désinsectisation. Plus de problème de blattes.",
    },
    {
      name: "Évariste Blanc",
      location: "Cesson",
      rating: 5,
      text: "Excellent travail de dératisation. Personnel aimable et intervention efficace.",
    },
    {
      name: "Fortunée Lefevre",
      location: "Vert-Saint-Denis",
      rating: 5,
      text: "Service impeccable contre les punaises. Matériel professionnel et suivi excellent.",
    },
    {
      name: "Gontran Mercier",
      location: "La Rochette",
      rating: 5,
      text: "Très professionnels pour l'élimination de frelons. Intervention sécurisée et soignée.",
    },
    {
      name: "Hippolyte Girard",
      location: "Dammarie-les-Lys",
      rating: 5,
      text: "Excellent service de désinsectisation. Plus de cafards depuis leur passage.",
    },
    {
      name: "Innocente Rousseau",
      location: "Le Mée-sur-Seine",
      rating: 5,
      text: "Service de qualité pour la dératisation. Conseils précieux et garantie respectée.",
    },
    {
      name: "Juvénal Bonnet",
      location: "Melun",
      rating: 5,
      text: "Très satisfait du traitement des punaises de lit. Résultats durables et efficaces.",
    },
    {
      name: "Léocadie Moreau",
      location: "Vaux-le-Pénil",
      rating: 5,
      text: "Professionnels compétents pour l'élimination de guêpes. Équipe bien équipée.",
    },
    {
      name: "Modeste Durand",
      location: "Maincy",
      rating: 5,
      text: "Excellent travail contre les fourmis. Plus aucun problème depuis 6 mois.",
    },
    {
      name: "Népomucène Fabre",
      location: "Rubelles",
      rating: 5,
      text: "Service irréprochable de dératisation. Personnel aimable et intervention soignée.",
    },
    {
      name: "Olympe Leclerc",
      location: "Saint-Fargeau-Ponthierry",
      rating: 5,
      text: "Très professionnels contre les punaises. Matériel adapté et résultats probants.",
    },
    {
      name: "Pacôme Garnier",
      location: "Ponthierry",
      rating: 5,
      text: "Excellent service d'élimination de frelons. Intervention sécurisée et efficace.",
    },
    {
      name: "Quitterie Roux",
      location: "Pringy",
      rating: 5,
      text: "Service de qualité pour le traitement des blattes. Plus de problème depuis.",
    },
    {
      name: "Romuald Martin",
      location: "Seine-Port",
      rating: 5,
      text: "Très satisfait de la dératisation. Équipe sérieuse et garantie tenue.",
    },
    {
      name: "Séraphine Dubois",
      location: "Nandy",
      rating: 5,
      text: "Professionnels compétents pour les punaises de lit. Suivi personnalisé excellent.",
    },
    {
      name: "Tancrède Laurent",
      location: "Évry-Courcouronnes",
      rating: 5,
      text: "Excellent travail d'élimination de guêpes. Matériel professionnel et sécurité optimale.",
    },
    {
      name: "Ursicine Simon",
      location: "Corbeil-Essonnes",
      rating: 5,
      text: "Service impeccable de désinsectisation. Plus de cafards depuis leur intervention.",
    },
    {
      name: "Valentin Blanc",
      location: "Bondoufle",
      rating: 5,
      text: "Très professionnels pour la dératisation. Conseils utiles et résultats durables.",
    },
    {
      name: "Wenceslas Lefevre",
      location: "Ris-Orangis",
      rating: 5,
      text: "Excellent service contre les punaises. Personnel compétent et intervention discrète.",
    },
    {
      name: "Xénophon Mercier",
      location: "Saint-Germain-lès-Corbeil",
      rating: 5,
      text: "Service de qualité pour l'élimination de frelons. Équipe réactive et bien équipée.",
    },
    {
      name: "Yseult Girard",
      location: "Courcouronnes",
      rating: 5,
      text: "Très satisfaite du traitement des fourmis. Plus aucun problème depuis 4 mois.",
    },
  ]

  const [currentPage, setCurrentPage] = useState(0)
  const testimonialsPerPage = 15
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage)

  const getCurrentTestimonials = () => {
    const startIndex = currentPage * testimonialsPerPage
    return testimonials.slice(startIndex, startIndex + testimonialsPerPage)
  }

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <section id="testimonials" className="py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#003049] mb-4">
            Témoignages Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Découvrez ce que nos clients disent de nos services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {getCurrentTestimonials().map((testimonial, index) => (
            <Card
              key={index}
              className="border-2 hover:border-[#f77f00] transition-colors duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#f77f00] text-[#f77f00]" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-[#003049]">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4">
          <Button
            onClick={prevPage}
            variant="outline"
            size="sm"
            className="border-[#d62828] text-[#d62828] hover:bg-[#d62828] hover:text-white bg-transparent"
          >
            <ChevronLeft className="h-4 w-4" />
            Précédent
          </Button>

          <span className="text-sm text-gray-600">
            Page {currentPage + 1} sur {totalPages}
          </span>

          <Button
            onClick={nextPage}
            variant="outline"
            size="sm"
            className="border-[#d62828] text-[#d62828] hover:bg-[#d62828] hover:text-white bg-transparent"
          >
            Suivant
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
