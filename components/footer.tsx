import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#003049] text-white py-12 md:py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/images/idf-logo.png" alt="IDF Anti Nuisible" className="h-8 w-8" />
              <h3 className="text-xl font-bold">IDF Anti Nuisible</h3>
            </div>
            <p className="text-gray-300">
              Votre spécialiste de la lutte antiparasitaire en Île-de-France. Intervention rapide et professionnelle.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="#services" className="hover:text-[#f77f00] transition-colors">
                  Dératisation
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#f77f00] transition-colors">
                  Désinsectisation
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#f77f00] transition-colors">
                  Punaises de lit
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#f77f00] transition-colors">
                  Guêpes et frelons
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>06 99 48 53 38</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>idfantinuisible@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Île-de-France</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Horaires</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>24h/24 - 7j/7</span>
              </div>
              <p className="text-sm">Service d'urgence disponible tous les jours</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 IDF Anti Nuisible. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
