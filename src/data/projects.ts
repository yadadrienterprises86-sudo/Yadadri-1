export interface ProjectDetail {
  id: string;
  title: string;
  category: "construction" | "quarry" | "mining" | "drilling" | "blasting" | "loading";
  location: string;
  client: string;
  description: string;
  image: string;
  stats: Record<string, string>;
}

export const projectsData: ProjectDetail[] = [
  {
    id: "national-highway-excavation",
    title: "National Highway NH-44 Rock Cutting & Site Grading",
    category: "construction",
    location: "Telangana, India",
    client: "National Highways Authority of India (NHAI) / Subcontractor",
    description: "Successful excavation and grading of an 8 km mountainous road stretch, involving drilling and controlled blasting of 120,000 cubic meters of hard rock with zero road closure disruptions.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    stats: {
      "Rock Excavated": "120,000 m³",
      "Duration": "8 Months",
      "Safety Incident Rate": "0.0%"
    }
  },
  {
    id: "karimnagar-granite-extraction",
    title: "Karimnagar Tan Brown Granite Quarry Development",
    category: "quarry",
    location: "Karimnagar, Telangana",
    client: "Leading Granite Exporters Consortium",
    description: "Complete quarry management, bench development, and extraction of premium Tan Brown granite blocks. We deployed wire saws and heavy block-handling cranes, ensuring block yield optimization and crack-free extraction.",
    image: "https://images.unsplash.com/photo-1516216628859-9bccecab13ca?auto=format&fit=crop&w=800&q=80",
    stats: {
      "Monthly Yield": "3,500 Cubic Meters",
      "Bench Levels": "4 Active Levels",
      "Equipment Deployed": "14 Units"
    }
  },
  {
    id: "chimakurthy-black-galaxy",
    title: "Chimakurthy Black Galaxy Quarry Mining Operations",
    category: "quarry",
    location: "Chimakurthy, Andhra Pradesh",
    client: "Yadadri Mineral Enterprises",
    description: "Strategic quarry overburden stripping, bench marking, and deep extraction support for prime black galaxy granite. Managed heavy loaders and dumpers for material disposal and block logistics.",
    image: "https://images.unsplash.com/photo-1518364538800-6bcb3f25da49?auto=format&fit=crop&w=800&q=80",
    stats: {
      "Overburden Cleared": "250,000 m³",
      "Granite Extracted": "18,000 Tons",
      "Precision Saws Run": "4 Units"
    }
  },
  {
    id: "industrial-park-site-dev",
    title: "Site Development & Civil Infrastructure for Mega Industrial Park",
    category: "construction",
    location: "Hyderabad Outskirts, India",
    client: "State Infrastructure Development Corp",
    description: "Comprehensive site preparation including bulk soil cutting, filling, compaction, drainage installation, and internal access road stabilization across 150 acres of rocky land.",
    image: "https://images.unsplash.com/photo-1579847285160-c3093c834a36?auto=format&fit=crop&w=800&q=80",
    stats: {
      "Area Developed": "150 Acres",
      "Soil Displaced": "450,000 m³",
      "Compaction Density": "98% Proctor"
    }
  },
  {
    id: "blast-hole-drilling-contract",
    title: "Production Drilling Operations at Cement Limestone Mine",
    category: "drilling",
    location: "Jaggayyapeta, Andhra Pradesh",
    client: "National Cement Corporation",
    description: "A long-term contract for blast hole drilling at an open-cast limestone mine. Operating two premium hydraulic crawler drills, we maintained strict hole parameters (115mm dia, 9m depth) to ensure optimal blasting results.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    stats: {
      "Total Drilling": "60,000 Running Meters",
      "Hole Accuracy": "99.4%",
      "Uptime Maintained": "96.5%"
    }
  },
  {
    id: "controlled-blasting-bypass",
    title: "Controlled Open Blasting for Metro Bypass Alignment",
    category: "blasting",
    location: "Visakhapatnam, Andhra Pradesh",
    client: "Metro Rail Contractor Partners",
    description: "Executed safety-critical controlled blasting in close proximity to active railway lines and residential structures. Implemented delay detonators, vibration monitors, and blast mats to guarantee safety.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    stats: {
      "Controlled Blasts": "140 Rounds",
      "Vibration Level": "< 5.0 mm/s (PPV)",
      "Safety Incidents": "Zero"
    }
  },
  {
    id: "heavy-loading-logistics-mine",
    title: "Ore Loading & Haulage Operations in Coal Overburden Project",
    category: "loading",
    location: "Singareni Collieries, Telangana",
    client: "Singareni Mining Subcontractor",
    description: "Full-scale loading and site transportation coordination. We deployed heavy 30-ton excavators and a fleet of 20 tipper trucks to haul quarry overburden material to specified dumping yards 4 km away.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
    stats: {
      "Haulage Volume": "35,000 Tons/Month",
      "Average Cycle Time": "18 Minutes",
      "Fleet Utilization": "92.0%"
    }
  }
];
