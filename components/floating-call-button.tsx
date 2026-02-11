"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingCallButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <Button
        asChild
        size="lg"
        className="bg-[#d62828] hover:bg-[#c41c1c] text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 shadow-2xl hover:shadow-3xl animate-mobile-bounce hover:animate-none transition-all duration-300 hover:scale-110"
      >
        <a href="tel:+33764843151" className="flex items-center justify-center">
          <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
        </a>
      </Button>

      {/* Indicateur visuel pour attirer l'attention */}
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full animate-mobile-pulse"></div>
    </div>
  )
}
