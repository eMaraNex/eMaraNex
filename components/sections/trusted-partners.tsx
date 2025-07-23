"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PARTNERS } from "@/lib/constants"
import type { Partner } from "@/types"

interface TrustedPartnersProps {
  className?: string
  partners?: Partner[]
}

export function TrustedPartners({ className, partners = PARTNERS }: TrustedPartnersProps) {
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0)
  const partnersPerSlide = 3
  const totalSlides = Math.ceil(partners.length / partnersPerSlide)

  // Auto-rotate partners carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartnerIndex((prev) => (prev + 1) % totalSlides)
    }, 3000)
    return () => clearInterval(interval)
  }, [totalSlides])

  const nextPartners = () => {
    setCurrentPartnerIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevPartners = () => {
    setCurrentPartnerIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <section
      className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-emerald-950 dark:via-green-950 dark:to-teal-950 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground">Companies already using our solutions to transform their operations</p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPartnerIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-3 gap-6">
                    {partners
                      .slice(slideIndex * partnersPerSlide, slideIndex * partnersPerSlide + partnersPerSlide)
                      .map((partner, index) => (
                        <div key={index} className="group">
                          <div className="rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-emerald-200 dark:border-emerald-800 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                            <div className="text-center">
                              <div className="text-3xl mb-2 group-hover:animate-float">{partner.logo}</div>
                              <div className="text-sm font-semibold text-muted-foreground group-hover:text-emerald-600 transition-colors">
                                {partner.name}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800"
            onClick={prevPartners}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800"
            onClick={nextPartners}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentPartnerIndex ? "bg-emerald-500 w-6" : "bg-gray-300 dark:bg-gray-600"
                }`}
                onClick={() => setCurrentPartnerIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
