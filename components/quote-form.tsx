"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Rat,
  Bug,
  Shell,
  Bird,
  Check,
  ChevronRight,
  ChevronLeft,
  Phone,
  User,
  MapPin,
  FileText,
  Home,
  Building2,
  Store,
  Warehouse,
} from "lucide-react"

const PEST_TYPES = [
  { id: "rats", label: "Rats / Souris", icon: Rat },
  { id: "cafards", label: "Cafards / Blattes", icon: Bug },
  { id: "punaises", label: "Punaises de lit", icon: Shell },
  { id: "guepes", label: "Guepes / Frelons", icon: Bug },
  { id: "fourmis", label: "Fourmis", icon: Bug },
  { id: "pigeons", label: "Pigeons", icon: Bird },
  { id: "puces", label: "Puces", icon: Bug },
  { id: "mites", label: "Mites", icon: Bug },
  { id: "autre", label: "Autre nuisible", icon: Bug },
]

const PROPERTY_TYPES = [
  { id: "appartement", label: "Appartement", icon: Home },
  { id: "maison", label: "Maison", icon: Home },
  { id: "bureau", label: "Bureau", icon: Building2 },
  { id: "commerce", label: "Commerce", icon: Store },
  { id: "entrepot", label: "Entrepot", icon: Warehouse },
]

const URGENCY_LEVELS = [
  { id: "urgent", label: "Urgent (dans l'heure)", color: "border-red-500 bg-red-50 text-red-700 hover:bg-red-100" },
  { id: "rapide", label: "Rapide (24-48h)", color: "border-orange-500 bg-orange-50 text-orange-700 hover:bg-orange-100" },
  { id: "normal", label: "Normal (cette semaine)", color: "border-blue-500 bg-blue-50 text-blue-700 hover:bg-blue-100" },
  { id: "preventif", label: "Preventif (pas urgent)", color: "border-green-500 bg-green-50 text-green-700 hover:bg-green-100" },
]

export function QuoteForm() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    pestTypes: [] as string[],
    propertyType: "",
    urgency: "",
    name: "",
    phone: "",
    email: "",
    city: "",
    address: "",
    details: "",
  })

  const togglePestType = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      pestTypes: prev.pestTypes.includes(id)
        ? prev.pestTypes.filter((t) => t !== id)
        : [...prev.pestTypes, id],
    }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const canProceedStep1 = formData.pestTypes.length > 0 && formData.propertyType !== "" && formData.urgency !== ""
  const canProceedStep2 = formData.name !== "" && formData.phone !== "" && formData.city !== ""

  if (submitted) {
    return (
      <section id="devis" className="py-12 md:py-24 bg-[#003049]">
        <div className="container px-4 md:px-6 mx-auto max-w-3xl">
          <Card className="border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#003049] mb-4">
                Demande envoyee avec succes !
              </h3>
              <p className="text-lg text-gray-600 mb-2">
                Merci <span className="font-semibold">{formData.name}</span>, nous avons bien recu votre demande.
              </p>
              <p className="text-gray-600 mb-8">
                Un expert vous contactera au <span className="font-semibold">{formData.phone}</span> dans les plus brefs delais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-[#d62828] hover:bg-[#b82222] text-white text-lg px-8 py-6"
                >
                  <a href="tel:+33699485338">
                    <Phone className="mr-2 h-5 w-5" />
                    Appeler maintenant
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent border-[#003049] text-[#003049] hover:bg-[#003049] hover:text-white text-lg px-8 py-6"
                  onClick={() => { setSubmitted(false); setStep(1); setFormData({ pestTypes: [], propertyType: "", urgency: "", name: "", phone: "", email: "", city: "", address: "", details: "" }) }}
                >
                  Nouvelle demande
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="devis" className="py-12 md:py-24 bg-[#003049]">
      <div className="container px-4 md:px-6 mx-auto max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4 text-balance">
            Devis gratuit en 2 minutes
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Decrivez votre probleme et recevez un devis personnalise rapidement
          </p>
        </div>

        {/* Progress bar */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  step === s
                    ? "bg-[#f77f00] text-white scale-110"
                    : step > s
                      ? "bg-green-500 text-white"
                      : "bg-white/20 text-white/60"
                }`}
              >
                {step > s ? <Check className="h-5 w-5" /> : s}
              </div>
              {s < 3 && (
                <div
                  className={`w-12 sm:w-20 h-1 rounded-full transition-all duration-300 ${
                    step > s ? "bg-green-500" : "bg-white/20"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step labels */}
        <div className="flex justify-between mb-8 px-2 sm:px-8">
          <span className={`text-xs sm:text-sm font-medium ${step >= 1 ? "text-white" : "text-white/40"}`}>
            Votre probleme
          </span>
          <span className={`text-xs sm:text-sm font-medium ${step >= 2 ? "text-white" : "text-white/40"}`}>
            Vos coordonnees
          </span>
          <span className={`text-xs sm:text-sm font-medium ${step >= 3 ? "text-white" : "text-white/40"}`}>
            Confirmation
          </span>
        </div>

        <Card className="border-0 shadow-2xl overflow-hidden">
          <CardContent className="p-6 md:p-8">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Problem description */}
              {step === 1 && (
                <div className="space-y-8">
                  {/* Pest type selection */}
                  <div>
                    <Label className="text-lg font-bold text-[#003049] mb-4 flex items-center gap-2">
                      <Bug className="h-5 w-5 text-[#d62828]" />
                      Quel type de nuisible ?
                    </Label>
                    <p className="text-sm text-gray-500 mb-4">Vous pouvez en selectionner plusieurs</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {PEST_TYPES.map((pest) => {
                        const Icon = pest.icon
                        const isSelected = formData.pestTypes.includes(pest.id)
                        return (
                          <button
                            key={pest.id}
                            type="button"
                            onClick={() => togglePestType(pest.id)}
                            className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 ${
                              isSelected
                                ? "border-[#d62828] bg-red-50 text-[#d62828] shadow-md"
                                : "border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-600"
                            }`}
                          >
                            <Icon className={`h-6 w-6 ${isSelected ? "text-[#d62828]" : "text-gray-400"}`} />
                            <span className="text-xs sm:text-sm font-medium text-center leading-tight">{pest.label}</span>
                            {isSelected && (
                              <div className="w-5 h-5 bg-[#d62828] rounded-full flex items-center justify-center">
                                <Check className="h-3 w-3 text-white" />
                              </div>
                            )}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Property type */}
                  <div>
                    <Label className="text-lg font-bold text-[#003049] mb-4 flex items-center gap-2">
                      <Home className="h-5 w-5 text-[#d62828]" />
                      Type de lieu
                    </Label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-4">
                      {PROPERTY_TYPES.map((prop) => {
                        const Icon = prop.icon
                        const isSelected = formData.propertyType === prop.id
                        return (
                          <button
                            key={prop.id}
                            type="button"
                            onClick={() => setFormData((prev) => ({ ...prev, propertyType: prop.id }))}
                            className={`flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all duration-200 ${
                              isSelected
                                ? "border-[#003049] bg-blue-50 text-[#003049] shadow-md"
                                : "border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-600"
                            }`}
                          >
                            <Icon className={`h-5 w-5 ${isSelected ? "text-[#003049]" : "text-gray-400"}`} />
                            <span className="text-xs font-medium">{prop.label}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Urgency */}
                  <div>
                    <Label className="text-lg font-bold text-[#003049] mb-4 flex items-center gap-2">
                      <Phone className="h-5 w-5 text-[#d62828]" />
                      Niveau d'urgence
                    </Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                      {URGENCY_LEVELS.map((level) => {
                        const isSelected = formData.urgency === level.id
                        return (
                          <button
                            key={level.id}
                            type="button"
                            onClick={() => setFormData((prev) => ({ ...prev, urgency: level.id }))}
                            className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                              isSelected
                                ? `${level.color} shadow-md ring-2 ring-offset-1 ring-current`
                                : "border-gray-200 hover:border-gray-300 text-gray-600"
                            }`}
                          >
                            <span className="text-sm font-semibold">{level.label}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <Button
                    type="button"
                    disabled={!canProceedStep1}
                    onClick={() => setStep(2)}
                    className="w-full bg-[#d62828] hover:bg-[#b82222] text-white text-lg py-6 disabled:opacity-40"
                  >
                    Continuer
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              )}

              {/* Step 2: Contact info */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="quote-name" className="font-semibold text-[#003049] flex items-center gap-2">
                        <User className="h-4 w-4 text-[#d62828]" />
                        Nom complet *
                      </Label>
                      <Input
                        id="quote-name"
                        name="name"
                        placeholder="Votre nom"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="py-5"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quote-phone" className="font-semibold text-[#003049] flex items-center gap-2">
                        <Phone className="h-4 w-4 text-[#d62828]" />
                        Telephone *
                      </Label>
                      <Input
                        id="quote-phone"
                        name="phone"
                        type="tel"
                        placeholder="06 12 34 56 78"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="py-5"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quote-email" className="font-semibold text-[#003049] flex items-center gap-2">
                      <FileText className="h-4 w-4 text-[#d62828]" />
                      Email (optionnel)
                    </Label>
                    <Input
                      id="quote-email"
                      name="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="py-5"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="quote-city" className="font-semibold text-[#003049] flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-[#d62828]" />
                        Ville *
                      </Label>
                      <Input
                        id="quote-city"
                        name="city"
                        placeholder="Ex: Paris, Creteil..."
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="py-5"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quote-address" className="font-semibold text-[#003049] flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-[#d62828]" />
                        Adresse (optionnel)
                      </Label>
                      <Input
                        id="quote-address"
                        name="address"
                        placeholder="Votre adresse"
                        value={formData.address}
                        onChange={handleChange}
                        className="py-5"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quote-details" className="font-semibold text-[#003049] flex items-center gap-2">
                      <FileText className="h-4 w-4 text-[#d62828]" />
                      Details supplementaires (optionnel)
                    </Label>
                    <Textarea
                      id="quote-details"
                      name="details"
                      placeholder="Decrivez votre situation : depuis quand, ou dans le logement, etc."
                      value={formData.details}
                      onChange={handleChange}
                      rows={3}
                    />
                  </div>

                  <div className="flex gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(1)}
                      className="bg-transparent flex-1 py-6 text-[#003049] border-[#003049] hover:bg-[#003049] hover:text-white"
                    >
                      <ChevronLeft className="mr-2 h-5 w-5" />
                      Retour
                    </Button>
                    <Button
                      type="button"
                      disabled={!canProceedStep2}
                      onClick={() => setStep(3)}
                      className="flex-[2] bg-[#d62828] hover:bg-[#b82222] text-white text-lg py-6 disabled:opacity-40"
                    >
                      Verifier et envoyer
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Summary & confirm */}
              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-[#003049] flex items-center gap-2">
                    <FileText className="h-5 w-5 text-[#d62828]" />
                    Recapitulatif de votre demande
                  </h3>

                  <div className="space-y-4">
                    {/* Pest types summary */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-sm font-semibold text-gray-500 mb-2">Nuisible(s)</p>
                      <div className="flex flex-wrap gap-2">
                        {formData.pestTypes.map((id) => {
                          const pest = PEST_TYPES.find((p) => p.id === id)
                          return (
                            <span key={id} className="bg-red-100 text-[#d62828] px-3 py-1 rounded-full text-sm font-medium">
                              {pest?.label}
                            </span>
                          )
                        })}
                      </div>
                    </div>

                    {/* Property & urgency */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <p className="text-sm font-semibold text-gray-500 mb-1">Type de lieu</p>
                        <p className="font-semibold text-[#003049]">
                          {PROPERTY_TYPES.find((p) => p.id === formData.propertyType)?.label}
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <p className="text-sm font-semibold text-gray-500 mb-1">Urgence</p>
                        <p className="font-semibold text-[#003049]">
                          {URGENCY_LEVELS.find((l) => l.id === formData.urgency)?.label}
                        </p>
                      </div>
                    </div>

                    {/* Contact info */}
                    <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                      <p className="text-sm font-semibold text-gray-500 mb-2">Vos coordonnees</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                        <p><span className="text-gray-500">Nom :</span> <span className="font-semibold text-[#003049]">{formData.name}</span></p>
                        <p><span className="text-gray-500">Tel :</span> <span className="font-semibold text-[#003049]">{formData.phone}</span></p>
                        {formData.email && <p><span className="text-gray-500">Email :</span> <span className="font-semibold text-[#003049]">{formData.email}</span></p>}
                        <p><span className="text-gray-500">Ville :</span> <span className="font-semibold text-[#003049]">{formData.city}</span></p>
                        {formData.address && <p className="sm:col-span-2"><span className="text-gray-500">Adresse :</span> <span className="font-semibold text-[#003049]">{formData.address}</span></p>}
                      </div>
                      {formData.details && (
                        <div className="mt-2 pt-2 border-t border-gray-200">
                          <p className="text-gray-500 text-sm">Details :</p>
                          <p className="text-sm text-[#003049]">{formData.details}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-[#f77f00]/10 border border-[#f77f00] rounded-xl p-4 text-center">
                    <p className="text-sm font-semibold text-[#003049]">
                      Devis 100% gratuit et sans engagement. Un expert vous contactera rapidement.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(2)}
                      className="bg-transparent flex-1 py-6 text-[#003049] border-[#003049] hover:bg-[#003049] hover:text-white"
                    >
                      <ChevronLeft className="mr-2 h-5 w-5" />
                      Modifier
                    </Button>
                    <Button
                      type="submit"
                      className="flex-[2] bg-[#d62828] hover:bg-[#b82222] text-white text-lg py-6"
                    >
                      <Check className="mr-2 h-5 w-5" />
                      Envoyer ma demande
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </CardContent>
        </Card>

        {/* Call to action */}
        <div className="text-center mt-8">
          <p className="text-white/60 text-sm mb-2">Besoin d'une intervention immadiate ?</p>
          <a
            href="tel:+33699485338"
            className="inline-flex items-center gap-2 text-white font-bold text-xl hover:text-[#f77f00] transition-colors"
          >
            <Phone className="h-5 w-5" />
            06 99 48 53 38
          </a>
        </div>
      </div>
    </section>
  )
}
