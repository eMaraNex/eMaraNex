"use client"

import { useState } from "react"
import { ExternalLink, ArrowRight, ChevronLeft, ChevronRight, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { VENTURED_SOLUTIONS } from "@/lib/constants"
import type { VenturedSolution } from "@/types"

interface VenturedSolutionsProps {
  className?: string
  solutions?: VenturedSolution[]
}

export function VenturedSolutions({ className, solutions = VENTURED_SOLUTIONS }: VenturedSolutionsProps) {
  const [currentSolutionIndex, setCurrentSolutionIndex] = useState(0)

  const nextSolution = () => {
    setCurrentSolutionIndex((prev) => (prev + 1) % solutions.length)
  }

  const prevSolution = () => {
    setCurrentSolutionIndex((prev) => (prev - 1 + solutions.length) % solutions.length)
  }

  return (
    <section
      id="solutions"
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="text-center mb-4">
            <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900 dark:to-green-900 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700">
              READY-TO-USE SOLUTIONS
            </Badge>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
            Choose Your Perfect Solution
          </h2>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            Click on any solution below to explore features, see demos, and start using our proven business tools today.
            Each solution is ready to deploy and comes with full support.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className={`border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden group cursor-pointer ${solution.bgColor}`}
            >
              <div className="relative">
                <div className={`h-48 bg-gradient-to-br ${solution.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-6xl mb-4 group-hover:animate-float">{solution.icon}</div>
                      <div className="text-2xl font-bold mb-2">{solution.name}</div>
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                        {solution.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Badge className="bg-white/20 text-white border-white/30">{solution.stats.users} users</Badge>
                    <Badge className="bg-white/20 text-white border-white/30">
                      {solution.stats.satisfaction} satisfaction
                    </Badge>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-600 transition-colors">
                  {solution.name}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{solution.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <Badge
                      key={featureIndex}
                      variant="outline"
                      className="text-xs bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-colors"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    className={`flex-1 bg-gradient-to-r ${solution.gradient} hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {solution.cta}
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-emerald-50 dark:hover:bg-emerald-950 hover:border-emerald-300 dark:hover:border-emerald-700 bg-transparent"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSolutionIndex * 100}%)` }}
              >
                {solutions.map((solution, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <Card
                      className={`border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden group cursor-pointer ${solution.bgColor}`}
                    >
                      <div className="relative">
                        <div className={`h-48 bg-gradient-to-br ${solution.gradient} relative overflow-hidden`}>
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            <div className="text-white text-center">
                              <div className="text-6xl mb-4 group-hover:animate-float">{solution.icon}</div>
                              <div className="text-2xl font-bold mb-2">{solution.name}</div>
                              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                                {solution.category}
                              </Badge>
                            </div>
                          </div>
                          <div className="absolute top-4 right-4 flex flex-col gap-2">
                            <Badge className="bg-white/20 text-white border-white/30 text-xs">
                              {solution.stats.users}
                            </Badge>
                            <Badge className="bg-white/20 text-white border-white/30 text-xs">
                              {solution.stats.satisfaction}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-4 group-hover:text-emerald-600 transition-colors">
                          {solution.name}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{solution.description}</p>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {solution.features.slice(0, 3).map((feature, featureIndex) => (
                            <Badge
                              key={featureIndex}
                              variant="outline"
                              className="text-xs bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300"
                            >
                              {feature}
                            </Badge>
                          ))}
                          {solution.features.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{solution.features.length - 3} more
                            </Badge>
                          )}
                        </div>
                        <Button
                          className={`w-full bg-gradient-to-r ${solution.gradient} hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300`}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          {solution.cta}
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Carousel Controls */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 z-10"
              onClick={prevSolution}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 z-10"
              onClick={nextSolution}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Mobile Carousel Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {solutions.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSolutionIndex ? "bg-emerald-500 w-6" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  onClick={() => setCurrentSolutionIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Don't wait! Choose your solution above and start seeing results in 30 days. Our team is ready to help you
              implement and succeed.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-emerald-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
