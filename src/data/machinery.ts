export interface MachineDetail {
  id: string;
  name: string;
  category: "drilling" | "earthmoving" | "mining" | "logistics" | "support";
  image: string;
  specifications: Record<string, string>;
  usage: string;
  capacity: string;
  features: string[];
}

export const machineryData: MachineDetail[] = [
  {
    id: "hydraulic-drilling-rigs",
    name: "Hydraulic Drilling Rigs (L&T / Sandvik)",
    category: "drilling",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    specifications: {
      "Model Range": "Sandvik DX800 / Equivalent",
      "Drill Hole Diameter": "76mm - 127mm (3\" - 5\")",
      "Engine Power": "168 kW (225 hp)",
      "Maximum Depth": "25 meters",
      "Operating Weight": "14,800 kg"
    },
    usage: "Large-scale blast hole drilling in granite quarries, open-cast mines, and road-cut excavation projects.",
    capacity: "Up to 35 meters per hour drilling rate in hard granite.",
    features: [
      "360-degree rotating superstructure for wide drilling coverage",
      "TIM3D drill navigation system for high-precision alignments",
      "Advanced dust collector system with high-efficiency filters",
      "Noise-insulated FOPS/ROPS certified operator cabin"
    ]
  },
  {
    id: "crawler-drills",
    name: "Pneumatic Crawler Drill Machines",
    category: "drilling",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    specifications: {
      "Model Range": "Atlas Copco ROC D7 / Wagon Drill",
      "Drill Hole Diameter": "64mm - 102mm (2.5\" - 4\")",
      "Air Consumption": "350 - 450 CFM",
      "Feed Beam Length": "5.6 meters",
      "Track Speed": "3.5 km/h"
    },
    usage: "High-mobility bench drilling, road-cut rock clearing, and anchor bolt drilling in steep terrains.",
    capacity: "Continuous operation on rough and uneven stone terrains.",
    features: [
      "Heavy-duty crawler tracks with oscillation capability for slope stability",
      "Pneumatic top-hammer system for high-impact penetration",
      "Simple, robust hydraulic controls for easy maintenance",
      "Rigid box-frame boom design"
    ]
  },
  {
    id: "jack-hammers",
    name: "Pneumatic Jack Hammer Machines",
    category: "drilling",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    specifications: {
      "Model Range": "CP 1238 / Atlas Copco RH 658",
      "Air Consumption": "85 - 120 CFM",
      "Shank Size": "22mm x 108mm",
      "Impact Rate": "2,040 blows/min",
      "Weight": "24 - 30 kg"
    },
    usage: "Secondary rock breaking, block trimming in granite quarries, and hand-held drilling for controlled blasting.",
    capacity: "Precise splitting and block squaring operations.",
    features: [
      "Vibration reduction handles to minimize operator fatigue",
      "High power-to-weight ratio for ergonomic manual operation",
      "Double tool retainers for fast steel rod changes",
      "Integrated water-flushing mechanism for dust suppression"
    ]
  },
  {
    id: "hydraulic-excavators",
    name: "Heavy Hydraulic Excavators (Tata Hitachi / Komatsu)",
    category: "earthmoving",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
    specifications: {
      "Model Range": "Tata Hitachi EX200 / Komatsu PC300",
      "Bucket Capacity": "1.2 m³ - 2.1 m³",
      "Engine Power": "110 kW - 194 kW",
      "Max Digging Depth": "7.3 meters",
      "Operating Weight": "20,000 - 31,100 kg"
    },
    usage: "Bulk earthmoving, heavy rock loading, site grading, overburden stripping, and breaker attachments operations.",
    capacity: "Loads a 16-ton tipper truck in 4-5 cycles (less than 3 minutes).",
    features: [
      "Reinforced heavy-duty quarry boom and arm structures",
      "Multi-mode power selection (HI-Power, ECO, breaker mode)",
      "Vandalism protection and GPS asset tracking telematics",
      "Heavy rock bucket with armored wear plates and shroud protection"
    ]
  },
  {
    id: "wheel-loaders",
    name: "High-Capacity Wheel Loaders (CAT / SDLG)",
    category: "earthmoving",
    image: "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=800&q=80",
    specifications: {
      "Model Range": "CAT 950L / SDLG L956F",
      "Bucket Capacity": "3.0 m³ - 4.2 m³",
      "Rated Payload": "5,000 kg",
      "Engine Power": "162 kW (220 hp)",
      "Dump Clearance": "3.1 meters"
    },
    usage: "Granite quarry stock-pile management, crusher feed loading, site clearing, and bulk aggregates handling.",
    capacity: "5,000 kg per load cycle.",
    features: [
      "Torque-converter transmission with auto-shift features",
      "Load-sensing hydraulic steering for effortless load control",
      "Extended dump boom for high-sided truck loading",
      "Spacious air-conditioned cabin with 360-degree panoramic view"
    ]
  },
  {
    id: "air-compressors",
    name: "High-Pressure Diesel Air Compressors (Elgi / Atlas Copco)",
    category: "support",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    specifications: {
      "Model Range": "Elgi PG 600S / Atlas Copco XAHS 400",
      "Air Delivery Rate": "400 - 650 CFM",
      "Working Pressure": "100 - 175 psi (7 - 12 bar)",
      "Engine": "Cummins / Ashok Leyland Diesel Engine",
      "Mounting": "Two-wheel towable chassis"
    },
    usage: "Providing high-pressure compressed air for wagon drills, crawler rigs, and multiple hand-held jackhammers.",
    capacity: "Simultaneously powers 4-5 jackhammers or 1 crawler rig.",
    features: [
      "Robust canopy with weather-proof powder coating for open mine sites",
      "Efficient oil separation filter system for clean air delivery",
      "Intelligent control panel with auto-shutoff safety sensors",
      "Fuel-saving speed governor matching air demand"
    ]
  },
  {
    id: "rock-breakers",
    name: "Hydraulic Rock Breakers (Soosan / Furukawa)",
    category: "mining",
    image: "https://images.unsplash.com/photo-1516216628859-9bccecab13ca?auto=format&fit=crop&w=800&q=80",
    specifications: {
      "Model Range": "Soosan SB81 / Furukawa F22",
      "Operating Pressure": "160 - 180 bar",
      "Impact Rate": "350 - 700 blows/min",
      "Chisel Diameter": "135mm - 150mm",
      "Carrier Class": "18 - 25 Ton Excavators"
    },
    usage: "Secondary rock fragmenting in quarries, concrete demolition, trenching, and primary extraction where blasting is restricted.",
    capacity: "Breaks 15-25 cubic meters of hard granite block per hour.",
    features: [
      "Auto-greasing system to increase chisel and bushing service life",
      "Energy recovery system utilizing internal hydraulic recoil",
      "Anti-blank firing mechanism preventing internal piston damage",
      "Sound-dampened casing for suburban operations"
    ]
  },
  {
    id: "tipper-trucks",
    name: "Heavy-Duty Tipper Trucks (Tata Prima / BharatBenz)",
    category: "logistics",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
    specifications: {
      "Model Range": "Tata Prima 2825.K / BharatBenz 2823T",
      "Box Body Capacity": "16 m³ - 18 m³ (Heated/Reinforced)",
      "Engine Power": "186 kW (250 hp)",
      "GVW (Gross Weight)": "28,000 kg",
      "Configuration": "6x4 dual drive axle"
    },
    usage: "Transporting granite blocks, blasted boulders, sand, soil, and aggregate materials from quarry sites to crushers/yards.",
    capacity: "Payload capacity of 18 to 22 metric tons.",
    features: [
      "Hardox steel box body preventing deformation from heavy boulders",
      "Inter-wheel and inter-axle differential locks for quarry terrain",
      "Bogey suspension for heavy off-road load absorption",
      "GPS tracking and fleet management telematics"
    ]
  },
  {
    id: "water-tankers",
    name: "Dust Suppression Water Tankers",
    category: "support",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    specifications: {
      "Model Range": "Tata LPT 1613 / Eicher Pro 3015",
      "Tank Capacity": "10,000 - 12,000 Liters",
      "Pump Rate": "350 liters per minute",
      "Sprinkler Range": "12-meter spray width"
    },
    usage: "Quarry haul road dust suppression, drilling site cooling, and fire-hazard control in mining zones.",
    capacity: "12,000 Liters storage tank.",
    features: [
      "Dual rear gravity-fed sprinkler bars and high-pressure side nozzles",
      "Anti-corrosive epoxy inner tank lining for high durability",
      "Cabin-controlled pneumatic water valves",
      "Independent diesel-powered auxiliary water pump"
    ]
  },
  {
    id: "diesel-generators",
    name: "Silent Diesel Generators (Kirloskar / Cummins)",
    category: "support",
    image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80",
    specifications: {
      "Model Range": "Kirloskar Green / Cummins Powerica",
      "Power Output": "125 kVA - 250 kVA",
      "Engine Type": "Turbocharged Multi-cylinder Diesel",
      "Frequency": "50 Hz / 3 Phase",
      "Fuel Tank Capacity": "350 Liters"
    },
    usage: "Providing backup and primary electrical power for remote quarry offices, lighting towers, and crushing plants.",
    capacity: "250 kVA peak electrical load.",
    features: [
      "Sound-proof acoustic enclosure conforming to CPCB emissions/noise norms",
      "Automatic Mains Failure (AMF) control panel for instant startup",
      "Fuel-level, voltage, and engine temperature digital telemetry",
      "Integrated skid-mounted structural base for transportability"
    ]
  }
];
