import { TrendingUp, Users, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface UniqueFeaturesProps {
  className?: string
}

const features = [
  {
    icon: TrendingUp,
    title: "Industry-Specific Solutions",
    description:
      "Each solution is tailored specifically for your industry's unique challenges and requirements, ensuring maximum efficiency and ROI from day one.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-white to-blue-50 dark:from-gray-800 dark:to-blue-950",
    hoverColor: "group-hover:text-blue-600",
  },
  {
    icon: Users,
    title: "Ready-to-Deploy",
    description:
      "No lengthy development cycles. Our solutions are ready to use immediately with intuitive interfaces that require minimal training for your team.",
    gradient: "from-emerald-500 to-green-500",
    bgGradient: "from-white to-emerald-50 dark:from-gray-800 dark:to-emerald-950",
    hoverColor: "group-hover:text-emerald-600",
  },
  {
    icon: Globe,
    title: "Scalable & Secure",
    description:
      "Cloud-native architecture that grows with your business, from startup to enterprise scale, with enterprise-grade security and 24/7 support.",
    gradient: "from-purple-500 to-indigo-500",
    bgGradient: "from-white to-purple-50 dark:from-gray-800 dark:to-purple-950",
    hoverColor: "group-hover:text-purple-600",
  },
]

export function UniqueFeatures({ className }: UniqueFeaturesProps) {
  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
            Why Choose Our Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our solutions are built with industry expertise and cutting-edge technology to deliver unparalleled results
            that drive real business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br ${feature.bgGradient} group`}
            >
              <CardHeader className="pb-4">
                <div
                  className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-4 group-hover:animate-float shadow-lg`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className={`text-xl ${feature.hoverColor} transition-colors`}>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
