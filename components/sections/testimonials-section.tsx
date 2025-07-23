import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { TESTIMONIALS } from "@/lib/constants"
import type { Testimonial } from "@/types"

interface TestimonialsSectionProps {
  className?: string
  testimonials?: Testimonial[]
}

export function TestimonialsSection({ className, testimonials = TESTIMONIALS }: TestimonialsSectionProps) {
  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden ${className}`}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            What Founders Say <span className="text-red-500 animate-pulse">❤️</span>
          </h2>
          <p className="text-xl text-gray-300">Businesses love our solutions and see real results</p>
        </div>

        {/* Overlapping Cards Container */}
        <div className="relative">
          {/* Left shadow gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
          {/* Right shadow gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>

          <div
            className="flex overflow-x-auto scrollbar-hide gap-6 pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white min-w-[350px] shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
                style={{
                  marginLeft: index > 0 ? "-20px" : "0",
                  zIndex: testimonials.length - index,
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
