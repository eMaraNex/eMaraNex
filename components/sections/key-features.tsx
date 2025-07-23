import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { KEY_FEATURES } from "@/lib/constants"
import type { KeyFeature } from "@/types"

interface KeyFeaturesProps {
  className?: string
  features?: KeyFeature[]
}

export function KeyFeatures({ className, features = KEY_FEATURES }: KeyFeaturesProps) {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
            Complete Farm & SME Management Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to manage your farm or SME business efficiently with automated systems, comprehensive
            tracking, and intelligent analytics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl mb-4 group-hover:animate-float shadow-lg text-2xl">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* SEO Content Section */}
        <div className="mt-16 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-emerald-800 dark:text-emerald-200">
              Why Choose eMaraNex for Your Farm or SME?
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-muted-foreground">
            <div>
              <h4 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-3">For Farmers & Agriculture:</h4>
              <ul className="space-y-2">
                <li>• Complete livestock management with health tracking and breeding records</li>
                <li>• Automated feeding schedules and vaccination reminders</li>
                <li>• Rabbit breeding management with genetic tracking</li>
                <li>• Farm productivity analytics and cost optimization</li>
                <li>• Weather integration and seasonal planning</li>
                <li>• Mobile access for field operations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-3">For SMEs & Businesses:</h4>
              <ul className="space-y-2">
                <li>• Comprehensive inventory management with real-time tracking</li>
                <li>• Earnings and expense tracking with detailed reports</li>
                <li>• Automated business alerts and payment reminders</li>
                <li>• Multi-location support for growing businesses</li>
                <li>• Customer analytics and sales performance tracking</li>
                <li>• Secure data backups and business continuity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
