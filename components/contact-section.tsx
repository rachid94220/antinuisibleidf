"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#003049] mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une urgence ? Un devis ? Contactez nos experts dès maintenant
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl text-[#003049]">Demande de devis gratuit</CardTitle>
              <CardDescription>Remplissez ce formulaire et nous vous recontactons rapidement</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="06 12 34 56 78"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Décrivez votre problème de nuisibles..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-[#d62828] hover:bg-[#c41c1c] text-white">
                  Envoyer ma demande
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-2 border-[#f77f00]">
              <CardHeader>
                <CardTitle className="text-xl text-[#003049] flex items-center gap-2">
                  <Phone className="h-5 w-5 text-[#d62828]" />
                  Urgence 24h/24
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#d62828] mb-2">06 99 48 53 38</div>
                  <p className="text-gray-600">Intervention rapide en Île-de-France</p>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4">
              <Card>
                <CardContent className="flex items-center gap-3 p-4">
                  <Mail className="h-5 w-5 text-[#d62828]" />
                  <div>
                    <div className="font-semibold text-[#003049]">Email</div>
                    <div className="text-gray-600">idfantinuisible@gmail.com</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-3 p-4">
                  <MapPin className="h-5 w-5 text-[#d62828]" />
                  <div>
                    <div className="font-semibold text-[#003049]">Zone d'intervention</div>
                    <div className="text-gray-600">Toute l'Île-de-France</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-3 p-4">
                  <Clock className="h-5 w-5 text-[#d62828]" />
                  <div>
                    <div className="font-semibold text-[#003049]">Horaires</div>
                    <div className="text-gray-600">7j/7 - 24h/24 pour les urgences</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
