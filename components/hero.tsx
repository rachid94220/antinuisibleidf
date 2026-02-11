import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#d62828] to-[#c41c1c] text-white py-16 md:py-24 overflow-hidden">
      {/* Effet de fond avec motifs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 border-2 border-white rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            {/* Tampon "Approuvé Pas Cher" - Version Mobile Optimisée */}
            <div className="flex items-center justify-center lg:justify-start mb-6 md:mb-8">
              <div className="relative group">
                {/* Tampon principal */}
                <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full p-4 sm:p-6 md:p-8 border-4 sm:border-6 border-orange-400 shadow-xl md:shadow-2xl transform rotate-12 group-hover:rotate-0 transition-all duration-500 hover:scale-105">
                  <div className="text-center">
                    <div className="text-sm sm:text-lg md:text-xl font-bold uppercase tracking-wider">APPROUVÉ</div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-black uppercase leading-tight">PAS CHER</div>
                    <div className="text-xs sm:text-sm md:text-base font-semibold mt-1">✓ CERTIFIÉ ✓</div>
                  </div>

                  {/* Effet de brillance */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-full"></div>
                </div>

                {/* Ombre du tampon */}
                <div className="absolute inset-0 bg-orange-600/30 rounded-full blur-md md:blur-lg scale-110 opacity-60 transform rotate-12 group-hover:rotate-0 transition-all duration-500"></div>

                {/* Bordure extérieure animée - Masquée sur très petits écrans */}
                <div className="hidden sm:block absolute -inset-2 md:-inset-3 border-2 border-dashed border-orange-400/50 rounded-full animate-pulse left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center lg:text-left leading-tight">
              IDF Anti Nuisible
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-[600px] text-center lg:text-left leading-relaxed">
              Éliminez efficacement tous types de nuisibles en Île-de-France. Intervention rapide et professionnelle.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-[#f77f00] hover:bg-[#e67300] text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4"
              >
                <Link href="#contact">Demander un devis gratuit</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white text-[#d62828] hover:bg-white/90 border-white font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4"
              >
                <Link href="tel:+33764843151" className="flex items-center gap-2 sm:gap-3">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                  <span className="text-base sm:text-lg md:text-xl">07 64 84 31 51</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative lg:ml-auto mt-8 lg:mt-0">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border-l-4 border-l-[#f77f00]">
              <h3 className="text-lg sm:text-xl font-bold text-[#003049] mb-3 sm:mb-4">Services d'urgence</h3>
              <ul className="space-y-1 sm:space-y-2 text-[#003049]">
                <li className="flex items-center gap-2 hover:text-[#d62828] transition-colors duration-300 text-sm sm:text-base">
                  ✓ Dératisation
                </li>
                <li className="flex items-center gap-2 hover:text-[#d62828] transition-colors duration-300 text-sm sm:text-base">
                  ✓ Désinsectisation
                </li>
                <li className="flex items-center gap-2 hover:text-[#d62828] transition-colors duration-300 text-sm sm:text-base">
                  ✓ Punaises de lit
                </li>
                <li className="flex items-center gap-2 hover:text-[#d62828] transition-colors duration-300 text-sm sm:text-base">
                  ✓ Guêpes et frelons
                </li>
                <li className="flex items-center gap-2 hover:text-[#d62828] transition-colors duration-300 text-sm sm:text-base">
                  ✓ Cafards et blattes
                </li>
              </ul>
              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
                <p className="text-[#d62828] font-bold animate-pulse text-xs sm:text-sm">
                  Disponible 7j/7 – intervention rapide, souvent dans l'heure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
