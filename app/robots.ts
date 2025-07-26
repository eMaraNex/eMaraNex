import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://emaranex.com"

  return {
    rules: [
      // General rules for all crawlers
      {
        userAgent: "*",
        allow: [
          "/",
          "/rabbit-farming-kenya",
          "/rabbit-breeding-management",
          "/farm-management-software",
          "/agritrack-pro",
          "/solutions",
          "/pricing",
          "/blog",
          "/case-studies"
        ],
        disallow: [
          "/api/",
          "/admin/",
          "/_next/",
          "/private/",
          "/temp/",
          "/test/",
          "/staging/",
          "/login",
          "/dashboard/",
          "/user/",
          "/search?*",
          "/*?utm_*",
          "/*?fbclid=*",
          "/*?gclid=*",
          "/checkout/",
          "/payment/",
          "/account/"
        ],
        crawlDelay: 1,
      },

      // Specific rules for Googlebot (most important)
      {
        userAgent: "Googlebot",
        allow: [
          "/",
          "/rabbit-farming-kenya",
          "/rabbit-breeding-management",
          "/farm-management-software",
          "/rabbit-health-tracking",
          "/rabbit-sales-management",
          "/livestock-management-kenya",
          "/farm-record-keeping",
          "/agritrack-pro",
          "/cosmeticore",
          "/retailflow",
          "/financesync",
          "/solutions",
          "/pricing",
          "/features",
          "/demo",
          "/blog/*",
          "/case-studies/*",
          "/testimonials",
          "/about",
          "/contact",
          "/support",
          "/help",
          "/faq"
        ],
        disallow: [
          "/api/",
          "/admin/",
          "/private/",
          "/user/",
          "/dashboard/",
          "/login",
          "/checkout/",
          "/payment/",
          "/account/",
          "/*?utm_*",
          "/*?fbclid=*",
          "/*?gclid=*"
        ],
        crawlDelay: 0.5,
      },

      // Specific rules for Bingbot
      {
        userAgent: "Bingbot",
        allow: [
          "/",
          "/rabbit-farming-kenya",
          "/farm-management-software",
          "/agritrack-pro",
          "/solutions",
          "/pricing",
          "/blog/*",
          "/about",
          "/contact"
        ],
        disallow: [
          "/api/",
          "/admin/",
          "/private/",
          "/user/",
          "/dashboard/"
        ],
        crawlDelay: 1,
      },

      // Block bad bots and scrapers
      {
        userAgent: [
          "SemrushBot",
          "AhrefsBot",
          "MJ12bot",
          "DotBot",
          "BLEXBot",
          "DataForSeoBot",
          "PetalBot",
          "CCBot"
        ],
        disallow: "/",
      },

      // Allow social media crawlers for better sharing
      {
        userAgent: [
          "facebookexternalhit/1.1",
          "Twitterbot",
          "LinkedInBot",
          "WhatsApp"
        ],
        allow: [
          "/",
          "/rabbit-farming-kenya",
          "/farm-management-software",
          "/agritrack-pro",
          "/solutions",
          "/blog/*",
          "/case-studies/*"
        ],
        disallow: [
          "/api/",
          "/admin/",
          "/private/"
        ],
      }
    ],

    // Multiple sitemaps for better organization
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sitemap-blog.xml`,
      `${baseUrl}/sitemap-products.xml`
    ],

    host: baseUrl,
  }
}