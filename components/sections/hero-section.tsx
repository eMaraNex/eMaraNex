"use client"

import { Rocket, Zap, Shield, ArrowRight, Star, Cloud, Repeat, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface HeroSectionProps {
  className?: string
}

export function HeroSection({ className }: HeroSectionProps) {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContactUs = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className={`pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-emerald-950 dark:via-green-950 dark:to-teal-950 relative overflow-hidden ${className}`}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <Badge
              variant="secondary"
              className="mb-6 px-6 py-3 mt-3 bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900 dark:to-green-900 border-emerald-200 dark:border-emerald-800"
            >
              <Rocket className="w-4 h-4 mr-2" />
              🚀 Multi-Industry SaaS Solutions Available Now
            </Badge>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-8">
              <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">
                SaaS Solutions
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
                For Every Industry
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We're a SaaS startup building specialized software solutions for
              farming, SMEs, healthcare, and more. Subscription-based platforms
              with powerful features, automated workflows, and industry-specific
              tools that scale with your business.
            </p>

            {/* Key SaaS benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-sm">
              <div className="flex items-center justify-center gap-3 bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
                <Cloud className="text-emerald-600 h-5 w-5" />
                <span className="font-medium">Cloud-Based SaaS</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
                <Repeat className="text-blue-600 h-5 w-5" />
                <span className="font-medium">Subscription Model</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
                <CreditCard className="text-purple-600 h-5 w-5" />
                <span className="font-medium">Affordable Pricing</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={scrollToProducts}
              >
                <Zap className="mr-2 h-5 w-5" />
                Explore SaaS Products <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContactUs}
                className="text-lg px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-purple-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Shield className="mr-2 h-5 w-5" />
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                {/* <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div> */}
                {/* <span className="text-sm font-medium text-muted-foreground ml-2">
                  4.2/5 from 100+ SaaS users
                </span> */}
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                Join 100+ Subscribers Using Our SaaS Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
