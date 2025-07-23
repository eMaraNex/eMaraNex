"use client"

import { Navigation } from "@/components/ui/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { TrustedPartners } from "@/components/sections/trusted-partners"
import { SaaSFeatures } from "@/components/sections/saas-features"
import { StatsSection } from "@/components/sections/stats-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ReachSection } from "@/components/sections/reach-section"
import { SaaSProducts } from "@/components/sections/saas-products"
import { UpcomingIndustries } from "@/components/sections/upcoming-industries"
import { AboutSection } from "@/components/sections/about-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/sections/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TrustedPartners />
      <SaaSFeatures />
      <StatsSection />
      <TestimonialsSection />
      <ReachSection />
      <SaaSProducts />
      <UpcomingIndustries />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
