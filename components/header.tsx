"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Accueil", href: "#" },
    { name: "Services", href: "#services" },
    { name: "À propos", href: "#about" },
    { name: "Témoignages", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link className="flex items-center space-x-2" href="#">
          <span className="text-2xl font-bold">
            <span className="text-[#d62828]">IDF</span>
            <span className="text-black"> Anti Nuisible</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="transition-colors hover:text-[#d62828] text-gray-600 hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button asChild className="hidden md:inline-flex bg-[#d62828] hover:bg-[#c41c1c] text-white">
            <Link href="tel:+33764843151" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="text-lg font-bold">07 64 84 31 51</span>
            </Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#d62828]">Menu</span>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium transition-colors hover:text-[#d62828]"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="pt-4 border-t">
                  <Button asChild className="w-full bg-[#d62828] hover:bg-[#c41c1c] text-white" size="lg">
                    <Link href="tel:+33764843151" className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      <span className="text-lg font-bold">07 64 84 31 51</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
