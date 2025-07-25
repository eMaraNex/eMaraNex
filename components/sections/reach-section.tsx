import { Card, CardContent } from "@/components/ui/card"

interface ReachSectionProps {
  className?: string
}

const reachStats = [
  {
    value: "100+",
    label: "Unique Users",
    description: "Unique Users Monthly",
    gradient: "from-emerald-900 to-green-900",
    border: "border-emerald-700",
    textColor: "text-emerald-300",
    descColor: "text-emerald-200",
    shadow: "hover:shadow-emerald-500/20",
  },
  {
    value: "1M+",
    label: "Impressions",
    description: "Demographics",
    gradient: "from-blue-900 to-cyan-900",
    border: "border-blue-700",
    textColor: "text-blue-300",
    descColor: "text-blue-200",
    shadow: "hover:shadow-blue-500/20",
  },
  {
    value: "10,000+",
    label: "Product Clicks",
    description: "Direct Traffic to Products",
    gradient: "from-purple-900 to-indigo-900",
    border: "border-purple-700",
    textColor: "text-purple-300",
    descColor: "text-purple-200",
    shadow: "hover:shadow-purple-500/20",
  },
  {
    value: "50,000+",
    label: "Page Views",
    description: "Monthly Page Views",
    gradient: "from-orange-900 to-red-900",
    border: "border-orange-700",
    textColor: "text-orange-300",
    descColor: "text-orange-200",
    shadow: "hover:shadow-orange-500/20",
  },
]

export function ReachSection({ className }: ReachSectionProps) {
  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
            All Time Reach
          </h2>
          <p className="text-xl text-gray-300">Get Traction with eMaraNex Solutions</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reachStats.map((stat, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br ${stat.gradient} ${stat.border} text-white text-center shadow-2xl ${stat.shadow} transition-all duration-300 transform hover:scale-105`}
            >
              <CardContent className="p-8">
                <div className={`text-4xl font-bold mb-2 ${stat.textColor}`}>{stat.value}</div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <div className={`text-sm ${stat.descColor}`}>{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
