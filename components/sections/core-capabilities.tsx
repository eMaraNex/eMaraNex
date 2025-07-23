import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CORE_CAPABILITIES } from "@/lib/constants"
import type { CoreCapability } from "@/types"

interface CoreCapabilitiesProps {
  className?: string
  capabilities?: CoreCapability[]
}

export function CoreCapabilities({ className, capabilities = CORE_CAPABILITIES }: CoreCapabilitiesProps) {
  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
            Why Choose eMaraNex
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine technical expertise with business understanding to deliver software solutions that drive real
            results and competitive advantages for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <Card
              key={index}
              className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl mb-4 group-hover:animate-float shadow-lg text-2xl">
                  {capability.icon}
                </div>
                <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors">
                  {capability.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Overview */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-emerald-800 dark:text-emerald-200">Our Development Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your business needs and requirements" },
              { step: "02", title: "Design", desc: "Creating intuitive UI/UX and system architecture" },
              { step: "03", title: "Development", desc: "Building robust, scalable solutions with modern tech" },
              { step: "04", title: "Deployment", desc: "Launching and maintaining your software solution" },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {phase.step}
                </div>
                <h4 className="font-semibold text-lg mb-2">{phase.title}</h4>
                <p className="text-sm text-muted-foreground">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
