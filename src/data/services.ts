import { Construction, Gem, Target, Flame, Truck, Settings, Hammer, Shield, TrendingUp, Cpu } from 'lucide-react';

export interface ServiceDetail {
  title: string;
  slug: string;
  iconName: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  features: string[];
  ctaText: string;
}

export const servicesData: ServiceDetail[] = [
  {
    title: "Construction Works",
    slug: "construction-works",
    iconName: "Construction",
    shortDesc: "Comprehensive infrastructure development, road works, civil construction, excavation, and site development services with precision engineering.",
    longDesc: "At Sri Yadadri Enterprises, we deliver high-caliber civil construction and infrastructure solutions. From massive site development and bulk earthworks to critical road projects and structural building support, we maintain the highest industry standards of quality and timeline compliance.",
    benefits: [
      "Advanced grading and site leveling technology",
      "Experienced civil engineers and project managers",
      "Strict adherence to environmental and local safety codes",
      "Integrated earthmoving machinery fleet"
    ],
    features: [
      "Infrastructure Development & Planning",
      "Highways & Main Arterial Road Construction",
      "Commercial & Industrial Site Development",
      "Large-scale Excavation & Earthwork",
      "Foundational Civil Engineering"
    ],
    ctaText: "Request Construction Quote"
  },
  {
    title: "Granite Mining & Quarrying",
    slug: "granite-mining",
    iconName: "Gem",
    shortDesc: "End-to-end quarry development, stone processing support, block handling, and raw granite extraction with high-yield recovery rates.",
    longDesc: "We provide comprehensive quarry development and granite block extraction operations. Our mining technicians maximize stone recovery rates and blocks' structural integrity, utilizing specialized wire saws, diamond drilling, and premium handling machinery.",
    benefits: [
      "High yield extraction of prime dimensional blocks",
      "Safe, structured quarry bench development",
      "Advanced rock cleavage and lifting processes",
      "Eco-friendly dust reduction and reclamation protocols"
    ],
    features: [
      "Quarry Site Development & Bench Planning",
      "Granite Block Extraction & Cleavage",
      "Heavy Block Handling & Site Transportation",
      "Crushing Plant Feed & Stone Processing Support"
    ],
    ctaText: "Enquire About Mining Services"
  },
  {
    title: "Drilling Works",
    slug: "drilling-works",
    iconName: "Target",
    shortDesc: "High-precision rock drilling, blast hole drilling, and exploration drilling utilizing hydraulic rigs and crawler drills.",
    longDesc: "Our heavy-duty drilling operations form the backbone of mining, quarrying, and foundation preparation. Operating top-tier hydraulic crawler drill rigs, we deliver uniform hole diameters and depths matching engineering blasting profiles.",
    benefits: [
      "High rate of penetration (ROP) in hard rock formations",
      "Precise alignment and slope control for blast patterns",
      "Substantial noise and vibration control systems",
      "Real-time drilling telemetry logging"
    ],
    features: [
      "Production Blast Hole Drilling (75mm to 150mm)",
      "Rock Anchor & Foundation Drilling",
      "Jack Hammer & Light Pneumatic Rock Drilling",
      "Precision Bench Alignments"
    ],
    ctaText: "Get Drilling Estimates"
  },
  {
    title: "Open Blasting",
    slug: "open-blasting",
    iconName: "Flame",
    shortDesc: "Fully managed controlled blasting, production blasting, and secure explosive handling with certified mining engineers.",
    longDesc: "Sri Yadadri Enterprises specializes in controlled and production open blasting. With safety as our absolute priority, our certified blaster professionals execute blast designs minimizing flyrock, ground vibration, and air overpressure.",
    benefits: [
      "Zero-incident safety culture with certified blasters",
      "Optimized rock fragmentation for easier processing",
      "Vibration monitoring and seismic measurement control",
      "Secure magazines and explosives management protocols"
    ],
    features: [
      "Controlled Blasting near residential/sensitive zones",
      "Large-scale Production Blasting for mining operations",
      "Explosives Logistics, Storage, & Statutory Clearances",
      "Secondary Rock Fragmenting (Pop-shooting / Breaker operations)"
    ],
    ctaText: "Consult on Blasting Works"
  },
  {
    title: "Loading & Material Operations",
    slug: "loading-operations",
    iconName: "Truck",
    shortDesc: "Rapid heavy-excavator loading, wheel loader material handling, logistics, and site transport coordination.",
    longDesc: "Maximize quarry and construction productivity with our synchronized loading and material handling systems. Our skilled operators run high-capacity excavators and loaders, loading dumpers and tippers with minimal cycle times.",
    benefits: [
      "Minimized dumper idle times and rapid cycles",
      "Accurate payload scaling and distribution",
      "Fuel-efficient operational techniques",
      "Continuous site material dispatch logs"
    ],
    features: [
      "High-tonnage Excavator Loading (20T to 50T class)",
      "Wheel Loader Logistics & Stockpile Management",
      "Site Dumper / Tipper Loading and Fleet Dispatch",
      "Overburden Material Handling & Disposal"
    ],
    ctaText: "Optimize Site Logistics"
  },
  {
    title: "Heavy Equipment Rental",
    slug: "heavy-equipment-rental",
    iconName: "Settings",
    shortDesc: "Flexible rental options for modern, well-maintained crawler drills, hydraulic excavators, compressors, loaders, and tippers.",
    longDesc: "Acquire the muscle you need without capital layout. We offer a modern fleet of excavators, wheel loaders, drill rigs, tippers, and compressors on flexible daily, weekly, or monthly lease contracts with expert operators.",
    benefits: [
      "95%+ machinery uptime guarantee",
      "All-inclusive support (maintenance, operators, repairs)",
      "Vercel-ready, telematics-tracked machinery",
      "Flexible rental schemes matching project phases"
    ],
    features: [
      "Short & Long-term Excavator / Loader Leasing",
      "Crawler Drill Rig & Jack Hammer Rental packages",
      "Heavy-duty Air Compressor & Breaker Rental",
      "24/7 Field Maintenance & Breakdown Support"
    ],
    ctaText: "Check Rental Availability"
  }
];
