interface AboutSectionProps {
  className?: string
}

export function AboutSection({ className }: AboutSectionProps) {
  const highlights = [
    {
      text: "Specialized in agricultural and business SaaS solutions",
      gradient: "from-emerald-500 to-green-500",
    },
    {
      text: "Serving farmers, beauty businesses, and SMEs across East Africa",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      text: "24/7 customer support with local expertise and understanding",
      gradient: "from-purple-500 to-indigo-500",
    },
  ]

  return (
    <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              About eMaraNex
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              eMaraNex is a SaaS startup based in East Africa, specializing in building industry-specific software
              solutions that solve real business challenges. We focus on creating affordable, subscription-based
              platforms for farmers, beauty businesses, and SMEs.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission is to democratize access to powerful business management tools through our SaaS products:
              Sungura Master for rabbit farming, Hadassah Scents for cosmetics businesses, Zao for comprehensive
              agriculture, and RetailFlow for retail operations.
            </p>
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`w-3 h-3 bg-gradient-to-r ${highlight.gradient} rounded-full`}></div>
                  <span className="text-lg">{highlight.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-emerald-100 via-green-100 to-teal-100 dark:from-emerald-900 dark:via-green-900 dark:to-teal-900 rounded-3xl flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <div className="text-8xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-4">
                  4
                </div>
                <div className="text-2xl font-semibold mb-2">Active SaaS Products</div>
                <div className="text-muted-foreground text-lg">Serving 11,600+ subscribers</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-400 to-green-400 rounded-full opacity-20 animate-float"></div>
            <div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full opacity-20 animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
