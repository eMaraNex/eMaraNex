interface FooterProps {
  className?: string
}

const footerSections = [
  {
    title: "Solutions",
    links: ["AgriTrack Pro", "CosmetiCore", "RetailFlow", "FinanceSync"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Press"],
  },
  {
    title: "Support",
    links: ["Documentation", "Help Center", "Contact Support", "Status Page"],
  },
]

export function Footer({ className }: FooterProps) {
  return (
    <footer className={`bg-gradient-to-br from-gray-900 to-black text-white py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-4">
              eMaraNex
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Ready-to-use business solutions that deliver results in 30 days. Transform your operations with our proven
              tools.
            </p>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4 text-lg">{section.title}</h4>
              <div className="space-y-3 text-gray-300">
                {section.links.map((link, linkIndex) => (
                  <div key={linkIndex} className="hover:text-emerald-400 transition-colors cursor-pointer">
                    {link}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 eMaraNex. All rights reserved. Built with ❤️ for modern businesses.</p>
        </div>
      </div>
    </footer>
  )
}
