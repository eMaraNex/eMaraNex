import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SAAS_FEATURES } from "@/lib/constants"
import type { SaaSFeature } from "@/types"
import React from "react"

interface SaaSFeaturesProps {
  className?: string
  features?: SaaSFeature[]
}

export function SaaSFeatures({ className, features = SAAS_FEATURES }: SaaSFeaturesProps) {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
            Enterprise-Grade SaaS Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            All our SaaS products are built on a robust, scalable platform with enterprise-level features that grow with
            your business needs across any industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 group"
              >
                <CardHeader className="pb-4 flex flex-col items-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl mb-4 group-hover:animate-bounce shadow-lg">
                    {React.createElement(IconComponent as any, {
                      className: "h-8 w-8 text-white flex items-center justify-center",
                      size: 32
                    })}
                  </div>
                  <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* SaaS Benefits */}
        <div className="mt-16 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-emerald-800 dark:text-emerald-200">
              Why Choose Our SaaS Platform?
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-muted-foreground">
            <div>
              <h4 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-3">SaaS Advantages:</h4>
              <ul className="space-y-2">
                <li>• No upfront costs - affordable monthly subscriptions</li>
                <li>• Automatic updates and new features included</li>
                <li>• Scalable pricing that grows with your business</li>
                <li>• Access from anywhere with internet connection</li>
                <li>• Enterprise-grade security and data protection</li>
                <li>• 24/7 customer support and onboarding assistance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-3">Industry Coverage:</h4>
              <ul className="space-y-2">
                <li>• Agriculture & Farming (livestock, breeding, crops)</li>
                <li>• Small & Medium Enterprises (inventory, finance)</li>
                <li>• Healthcare (patient management, scheduling)</li>
                <li>• Retail & E-commerce (multi-store, analytics)</li>
                <li>• Education (student management, courses)</li>
                <li>• Manufacturing & Logistics (coming soon)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
