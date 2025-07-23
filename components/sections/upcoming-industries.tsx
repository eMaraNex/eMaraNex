import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { UPCOMING_INDUSTRIES } from "@/lib/constants"
import type { UpcomingIndustry } from "@/types"

interface UpcomingIndustriesProps {
  className?: string
  industries?: UpcomingIndustry[]
}

export function UpcomingIndustries({ className, industries = UPCOMING_INDUSTRIES }: UpcomingIndustriesProps) {
  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
            Expanding Our SaaS Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're continuously building new SaaS solutions for different industries. Here's what's coming next in our
            product roadmap.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 group"
            >
              <CardHeader className="pb-4 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl mb-4 group-hover:animate-float shadow-lg text-2xl mx-auto">
                  {industry.icon}
                </div>
                <CardTitle className="text-lg group-hover:text-emerald-600 transition-colors">
                  {industry.name}
                </CardTitle>
                <Badge
                  variant="outline"
                  className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300"
                >
                  {industry.status}
                </Badge>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm leading-relaxed">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Have a specific industry need? We'd love to hear from you and potentially build the next SaaS solution for
            your market.
          </p>
          <Badge className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900 dark:to-green-900 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700">
            📧 Contact us about custom SaaS development
          </Badge>
        </div>
      </div>
    </section>
  )
}
