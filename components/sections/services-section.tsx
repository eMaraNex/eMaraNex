import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SERVICE_OFFERINGS } from "@/lib/constants"
import type { ServiceOffering } from "@/types"

interface ServicesSectionProps {
  className?: string
  services?: ServiceOffering[]
}

export function ServicesSection({ className, services = SERVICE_OFFERINGS }: ServicesSectionProps) {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
            Our Development Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in creating custom software solutions using cutting-edge technologies and modern development
            practices to deliver exceptional results across all industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl mb-4 group-hover:animate-float shadow-lg text-2xl">
                  {service.icon}
                </div>
                <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="mt-16 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-emerald-800 dark:text-emerald-200">Modern Technology Stack</h3>
            <p className="text-muted-foreground">
              We use the latest technologies and best practices to ensure your software is fast, secure, and scalable.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "PostgreSQL",
              "AWS",
              "Docker",
              "GraphQL",
              "React Native",
              "Tailwind CSS",
              "Firebase",
              "MongoDB",
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
