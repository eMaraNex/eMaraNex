import { Users, TrendingUp, Award, Globe, Mail, Phone, MapPin, Flower, Rabbit, Wheat, ShoppingBag } from "lucide-react"
import type { SaaSProduct, Stat, Partner, Testimonial, ContactInfo, SaaSFeature } from "@/types"

export const SAAS_FEATURES: SaaSFeature[] = [
  {
    title: "Multi-Tenant Architecture",
    description: "Secure, scalable SaaS infrastructure that serves thousands of users across different industries",
    icon: "🏗️",
  },
  {
    title: "Real-Time Data Sync",
    description: "Instant data synchronization across all devices and platforms with offline capability",
    icon: "🔄",
  },
  {
    title: "Advanced Analytics Dashboard",
    description: "Comprehensive reporting and analytics with customizable dashboards for data-driven decisions",
    icon: "📊",
  },
  {
    title: "Automated Workflows",
    description: "Smart automation for repetitive tasks, alerts, reminders, and business process optimization",
    icon: "⚡",
  },
  {
    title: "API & Integrations",
    description: "Robust APIs and seamless integrations with popular business tools and third-party services",
    icon: "🔗",
  },
  {
    title: "Enterprise Security",
    description: "Bank-level security with encryption, compliance standards, and regular security audits",
    icon: "🔒",
  },
]

export const SAAS_PRODUCTS = [
  {
    name: "Sungura Master",
    description:
      "Complete rabbit breeding and farm management SaaS designed specifically for rabbit farmers. Track breeding records, monitor health, manage feeding schedules, and analyze farm performance with comprehensive analytics.",
    features: [
      "Rabbit Breeding Records",
      "Health Monitoring System",
      "Feeding Schedule Management",
      "Breeding Performance Analytics",
      "Genealogy & Pedigree Tracking",
      "Farm Financial Reports",
      "Automated Health Alerts",
      "Mobile Farm Management",
      "Data Export & Backup",
      "Multi-Farm Support",
    ],
    category: "Rabbit Farming SaaS",
    // pricing: "Starting at $29/month",
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    bgColor:
      "bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950",
    icon: Rabbit,
    stats: { subscribers: "100+", retention: "98%" },
    cta: "Get Started Today",
    link: "https://sunguramaster.emaranex.com",
    keywords: [
      "rabbit breeding software",
      "rabbit farm management",
      "livestock tracking",
      "breeding records",
    ],
  },
  {
    name: "Cosmos Scents",
    description:
      "Advanced inventory and business management SaaS for cosmetics and fragrance businesses. Track product batches, manage inventory levels, monitor sales performance, and streamline your beauty business operations.",
    features: [
      "Cosmetics Inventory Management",
      "Batch & Expiry Date Tracking",
      "Sales Performance Analytics",
      "Customer Order Management",
      "Supplier Relationship Portal",
      "Product Catalog Management",
      "Automated Stock Alerts",
      "Financial Reporting Dashboard",
      "Quality Control Workflows",
      "E-commerce Integration",
    ],
    category: "Beauty & Cosmetics SaaS",
    // pricing: "Starting at $39/month",
    gradient: "from-pink-500 via-rose-500 to-purple-500",
    bgColor:
      "bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950 dark:to-rose-950",
    icon: Flower,
    stats: { subscribers: "50+", retention: "96%" },
    cta: "Get Started Today",
    link: "https://hadassahscents.vercel.app",
    keywords: [
      "cosmetics business management",
      "beauty inventory software",
      "fragrance business",
      "batch tracking",
    ],
  },
  {
    name: "Zao",
    description:
      "Comprehensive agricultural management SaaS for modern farmers. Manage crops, livestock, farm operations, and financial tracking all in one platform. Perfect for diversified farming operations and agricultural businesses.",
    features: [
      "Crop Management System",
      "Livestock Tracking",
      "Farm Operations Planning",
      "Weather Integration",
      "Harvest & Yield Analytics",
      "Equipment Management",
      "Farm Financial Tracking",
      "Seasonal Planning Tools",
      "Agricultural Reports",
      "Multi-Crop Support",
    ],
    category: "Agricultural Management SaaS",
    // pricing: "Starting at $49/month",
    gradient: "from-amber-500 via-orange-500 to-red-500",
    bgColor:
      "bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950",
    icon: Wheat,
    stats: { subscribers: "80+", retention: "97%" },
    cta: "Get Started Today",
    link: "https://zaolink.vercel.app",
    keywords: [
      "farm management software",
      "agricultural SaaS",
      "crop management",
      "livestock tracking",
    ],
  },
  {
    name: "RetailFlow",
    description:
      "Multi-location retail management SaaS with real-time inventory sync, order processing, customer analytics, and comprehensive business reporting. Ideal for growing retail businesses and SMEs.",
    features: [
      "Multi-Store Management",
      "Real-time Inventory Sync",
      "Order Processing System",
      "Customer Analytics Dashboard",
      "POS System Integration",
      "Earnings & Revenue Tracking",
      "Expense Management Tools",
      "Business Performance Alerts",
      "Automated Data Backups",
      "Custom Report Builder",
    ],
    category: "Retail & SME SaaS",
    // pricing: "Starting at $35/month",
    gradient: "from-blue-500 via-cyan-500 to-indigo-500",
    bgColor:
      "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950",
    icon: ShoppingBag,
    stats: { subscribers: "120+", retention: "95%" },
    cta: "Get Started Today",
    link: "#", // Add your RetailFlow link here when available
    keywords: [
      "retail management SaaS",
      "SME solutions",
      "inventory sync",
      "business analytics",
    ],
  },
];

export const STATS: Stat[] = [
  { label: "Active SaaS Subscribers", value: "16+", icon: Users, color: "text-emerald-500" },
  { label: "Customer Retention Rate", value: "97%", icon: TrendingUp, color: "text-blue-500" },
  { label: "Monthly Active Users", value: "100+", icon: Award, color: "text-purple-500" },
  { label: "Counties Served", value: "8", icon: Globe, color: "text-orange-500" },
]

export const PARTNERS: Partner[] = [
  { name: "AgriTech Alliance", logo: "🌱" },
  { name: "Rabbit Breeders Association", logo: "🐰" },
  { name: "Beauty Business Network", logo: "💄" },
  { name: "Farm Management Solutions", logo: "🚜" },
  { name: "SaaS Accelerator Hub", logo: "🚀" },
  { name: "Agricultural Innovation Center", logo: "🌾" },
  { name: "Retail Technology Partners", logo: "🛍️" },
  { name: "CloudTech Solutions", logo: "☁️" },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Sungura Master completely transformed our rabbit breeding operation. The breeding records and health tracking features helped us increase our breeding success rate by 40% and reduce mortality by 60%.",
    author: "Sarah Kimani",
    role: "Rabbit Farmer, Kimani Rabbit Farm",
    avatar: "SK",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    quote:
      "As a commercial rabbit breeder, I needed detailed genealogy tracking and breeding analytics. Sungura Master delivered exactly what we needed with an intuitive interface that my entire team can use.",
    author: "Michael Ochieng",
    role: "Commercial Rabbit Breeder, Ochieng Farms",
    avatar: "MO",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    quote:
      "Cosmos Scents helped our cosmetics business reduce inventory waste by 35% and improve profit margins significantly. The batch tracking and expiry management features are game-changers.",
    author: "Grace Wanjiku",
    role: "Beauty Business Owner, Wanjiku Cosmetics",
    avatar: "GW",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    quote:
      "Zao's comprehensive farm management platform gave us complete visibility into our agricultural operations. The crop planning and financial tracking features increased our farm efficiency by 50%.",
    author: "David Mwangi",
    role: "Farm Manager, Mwangi Agricultural Enterprise",
    avatar: "DM",
    gradient: "from-orange-500 to-red-500",
  },
  {
    quote:
      "The multi-farm support in Zao allows us to manage all our agricultural operations from one dashboard. The weather integration and seasonal planning tools are incredibly valuable.",
    author: "Mary Njeri",
    role: "Agricultural Consultant, Njeri Agri Solutions",
    avatar: "MN",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    quote:
      "eMaraNex builds SaaS products that solve real agricultural problems. Their rabbit breeding software helped us scale from 50 to 500 breeding does while maintaining detailed records.",
    author: "James Kariuki",
    role: "Large Scale Rabbit Farmer, Kariuki Livestock",
    avatar: "JK",
    gradient: "from-cyan-500 to-blue-500",
  },
]

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "info@emaranex.com",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+254 702 898 390 | +254 711 985 548",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Nairobi, Kenya\nEast Africa",
    gradient: "from-purple-500 to-indigo-500",
  },
]

// Industries we're expanding into
export const UPCOMING_INDUSTRIES = [
  {
    name: "Healthcare SaaS",
    description: "Patient management, appointment scheduling, and medical records",
    icon: "🏥",
    status: "Coming Q2 2024",
  },
  {
    name: "Education SaaS",
    description: "Student management, course tracking, and learning analytics",
    icon: "🎓",
    status: "In Development",
  },
  {
    name: "Logistics SaaS",
    description: "Fleet management, delivery tracking, and route optimization",
    icon: "🚛",
    status: "Planning Phase",
  },
  {
    name: "Manufacturing SaaS",
    description: "Production planning, quality control, and supply chain management",
    icon: "🏭",
    status: "Research Phase",
  },
]