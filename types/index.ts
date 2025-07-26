import { LucideIcon } from "lucide-react"
import type React from "react"

export interface SaaSProduct {
  name: string
  description: string
  features: string[]
  category: string
  pricing?: string
  gradient: string
  bgColor: string
  icon: LucideIcon
  stats: {
    subscribers?: string
    retention: string
  }
  cta: string
  link: string
  keywords: string[]
}

export interface Stat {
  label: string
  value: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

export interface Partner {
  name: string
  logo: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  avatar: string
  gradient: string
}

export interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  gradient: string
}

export interface SaaSFeature {
  title: string
  description: string
  icon: LucideIcon
}

export interface UpcomingIndustry {
  name: string
  description: string
  icon: string
  status: string
}
