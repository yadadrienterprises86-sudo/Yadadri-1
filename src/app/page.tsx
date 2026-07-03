"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  HardHat,
  Gem,
  Target,
  Flame,
  Truck,
  Settings,
  ShieldCheck,
  TrendingUp,
  Briefcase,
  Users,
  Award,
  ChevronRight,
  Star,
  Quote
} from "lucide-react";
import { servicesData } from "@/data/services";
import { machineryData } from "@/data/machinery";
import StatsCounter from "@/components/StatsCounter";

// Icon mapping helper
const getServiceIcon = (name: string) => {
  switch (name) {
    case "Construction":
      return <HardHat className="h-8 w-8 text-amber-400" />;
    case "Gem":
      return <Gem className="h-8 w-8 text-amber-400" />;
    case "Target":
      return <Target className="h-8 w-8 text-amber-400" />;
    case "Flame":
      return <Flame className="h-8 w-8 text-amber-400" />;
    case "Truck":
      return <Truck className="h-8 w-8 text-amber-400" />;
    default:
      return <Settings className="h-8 w-8 text-amber-400" />;
  }
};

export default function HomePage() {
  // Highlight first 3 services on home page
  const featuredServices = servicesData.slice(0, 3);
  // Highlight first 3 machines on home page
  const featuredMachinery = machineryData.slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-slate-950 overflow-hidden">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 select-none pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80')`,
          }}
        />
        {/* Dark to Slate Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-950/80 to-slate-950/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-left z-10 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-slate-900/80 border border-slate-700/80 px-3.5 py-1.5 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs uppercase text-slate-300 font-extrabold tracking-widest">
              Industrial Infrastructure Leader
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl tracking-tight"
          >
            Building Infrastructure with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
              Strength & Precision
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl font-medium leading-relaxed"
          >
            Experts in Construction, Granite Mining, Drilling, Open Blasting & Heavy Machinery Operations. Deployed on high-demand infrastructure contracts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link
              href="/contact"
              className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-8 py-4 rounded-xl flex items-center justify-center space-x-3 transition-all shadow-lg shadow-amber-400/10 hover:scale-105 active:scale-95 text-base"
            >
              <span>Contact Us</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/machinery"
              className="bg-slate-900/90 border border-slate-700 text-white hover:bg-slate-800 font-bold px-8 py-4 rounded-xl flex items-center justify-center space-x-3 transition-all hover:scale-105 active:scale-95 text-base"
            >
              <span>View Machinery</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="relative bg-slate-950 py-12 border-y border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-amber-400 mb-2">
                <StatsCounter value={12} suffix="+" />
              </div>
              <p className="text-slate-400 text-sm font-bold uppercase tracking-wider">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-amber-400 mb-2">
                <StatsCounter value={85} suffix="+" />
              </div>
              <p className="text-slate-400 text-sm font-bold uppercase tracking-wider">Completed Projects</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-amber-400 mb-2">
                <StatsCounter value={30} suffix="+" />
              </div>
              <p className="text-slate-400 text-sm font-bold uppercase tracking-wider">Heavy Machinery</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-amber-400 mb-2">
                <StatsCounter value={180} suffix="+" />
              </div>
              <p className="text-slate-400 text-sm font-bold uppercase tracking-wider">Workforce Strength</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT HIGHLIGHT */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl border border-slate-800"
            >
              <div
                className="absolute inset-0 bg-cover bg-center select-none"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1579847285160-c3093c834a36?auto=format&fit=crop&w=800&q=80')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-slate-950/80 backdrop-blur-md p-6 rounded-xl border border-slate-800">
                <p className="text-amber-400 font-extrabold text-lg mb-1">Safety First Commitment</p>
                <p className="text-slate-300 text-xs font-semibold leading-relaxed">
                  We enforce zero-incident protocols across all blasting, mining, and civil worksites.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <h2 className="text-sm font-extrabold text-amber-400 uppercase tracking-widest">ABOUT THE COMPANY</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Partnering in Nation Building with Heavy Muscle
              </h3>
              <p className="text-slate-300 leading-relaxed font-medium">
                SRI YADADRI ENTERPRISES is a premier industrial services firm. We deliver turnkey capability in mass excavation, stone quarry extraction, hydraulic blast-hole drilling, controlled blasting operations, and complete logistics fleets.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                By integrating state-of-the-art hydraulic rig machinery with a safety-first, engineering-led execution team, we ensure timelines are met without exception. Our active presence spans deep quarry benches to major road-cutting projects.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-sm font-bold text-slate-300">
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="h-5 w-5 text-amber-400" />
                  <span>ISO Compliant Protocols</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-amber-400" />
                  <span>Engineering Supervision</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Settings className="h-5 w-5 text-amber-400" />
                  <span>In-House Maintenance Yard</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-amber-400" />
                  <span>Experienced Site Teams</span>
                </div>
              </div>
              <div className="pt-6">
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-2 text-amber-400 hover:text-amber-500 font-bold transition-all text-base hover:translate-x-1"
                >
                  <span>Learn More About Our Mission</span>
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES HIGHLIGHT */}
      <section className="py-24 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-extrabold text-amber-400 uppercase tracking-widest">OUR CAPABILITIES</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Turnkey Industrial Engineering Services</h3>
            <p className="text-slate-400 text-base">
              Executing critical site actions using specialized equipment, experienced site leaders, and rigorous process controls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 hover:border-amber-400/50 hover:bg-slate-900 transition-all flex flex-col group relative overflow-hidden"
              >
                <div className="bg-slate-950 p-4 rounded-xl w-fit mb-6 border border-slate-800 group-hover:border-amber-400/30 transition-all">
                  {getServiceIcon(service.iconName)}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{service.shortDesc}</p>
                <ul className="space-y-2 mb-8 text-xs font-semibold text-slate-300">
                  {service.benefits.slice(0, 2).map((benefit) => (
                    <li key={benefit} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="inline-flex items-center space-x-2 text-amber-400 group-hover:text-amber-500 font-bold text-sm transition-all mt-auto"
                >
                  <span>Explore Details</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="bg-slate-900 border border-slate-700 hover:border-amber-400 text-white font-bold px-8 py-3.5 rounded-xl transition-all inline-flex items-center space-x-2"
            >
              <span>View All Services</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-24 bg-slate-900 border-t border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-sm font-extrabold text-amber-400 uppercase tracking-widest">WHY CHOOSE US</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Engineered for Performance, Anchored in Safety</h3>
              <p className="text-slate-300 leading-relaxed">
                When you partner with Sri Yadadri Enterprises, you receive heavy industrial execution built upon certified operating standards and modern fleets.
              </p>

              <div className="space-y-6 pt-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-amber-400 shrink-0">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Uncompromised Safety Records</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      We strictly enforce DGMS guidelines, delay detonator blast plans, and safety equipment wear sheets on every quarry site.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-amber-400 shrink-0">
                    <Settings className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">State-of-the-Art Fleets</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Our drills, compressors, and loaders are high-uptime units sourced from prime global brands with live telematics monitoring.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-amber-400 shrink-0">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Maximized Recovery & Fragment Yields</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Engineered pattern drill arrays optimize rock cleavage and minimize block cracking, lowering crusher power usage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between h-48 hover:border-amber-400/20 transition-all">
                <Users className="h-8 w-8 text-amber-400" />
                <div>
                  <p className="text-2xl font-black text-white">100%</p>
                  <p className="text-slate-400 text-xs uppercase font-extrabold tracking-wider mt-1">Certified Operators</p>
                </div>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between h-48 mt-8 hover:border-amber-400/20 transition-all">
                <Briefcase className="h-8 w-8 text-amber-400" />
                <div>
                  <p className="text-2xl font-black text-white">85+</p>
                  <p className="text-slate-400 text-xs uppercase font-extrabold tracking-wider mt-1">Contracts Fulfilled</p>
                </div>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between h-48 hover:border-amber-400/20 transition-all">
                <Award className="h-8 w-8 text-amber-400" />
                <div>
                  <p className="text-2xl font-black text-white">Zero</p>
                  <p className="text-slate-400 text-xs uppercase font-extrabold tracking-wider mt-1">Safety Breaches</p>
                </div>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between h-48 mt-8 hover:border-amber-400/20 transition-all">
                <HardHat className="h-8 w-8 text-amber-400" />
                <div>
                  <p className="text-2xl font-black text-white">24/7</p>
                  <p className="text-slate-400 text-xs uppercase font-extrabold tracking-wider mt-1">On-Site Maintenance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES WE SERVE */}
      <section className="py-24 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-extrabold text-amber-400 uppercase tracking-widest">SECTORS</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Industries We Serve</h3>
            <p className="text-slate-400 text-base">
              Providing muscle and drilling precision to power high-scale industrial operations and state infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Roads & Highways",
                desc: "Hill cutting, slope stabilization, base grading, and aggregate delivery for national networks.",
                image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=400&q=80"
              },
              {
                title: "Granite & Stone Mining",
                desc: "Turnkey mining benches setup, dimensional block extraction, logistics, and material handling.",
                image: "https://images.unsplash.com/photo-1516216628859-9bccecab13ca?auto=format&fit=crop&w=400&q=80"
              },
              {
                title: "Commercial Real Estate",
                desc: "Mass site excavation, grading, foundation anchors, and piling drilling for mega structures.",
                image: "https://images.unsplash.com/photo-1579847285160-c3093c834a36?auto=format&fit=crop&w=400&q=80"
              },
              {
                title: "Cement & Aggregates",
                desc: "Production drilling and controlled blasting in quarry properties feeding major grinding mills.",
                image: "https://images.unsplash.com/photo-1518364538800-6bcb3f25da49?auto=format&fit=crop&w=400&q=80"
              }
            ].map((industry) => (
              <div
                key={industry.title}
                className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden group hover:border-amber-400/20 transition-all flex flex-col"
              >
                <div className="relative h-48 w-full overflow-hidden select-none">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <h4 className="text-lg font-bold text-white mb-2">{industry.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{industry.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FEATURED MACHINERY */}
      <section className="py-24 bg-slate-900 border-t border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-sm font-extrabold text-amber-400 uppercase tracking-widest">MACHINERY SHOWCASE</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">High-Performance Fleet</h3>
              <p className="text-slate-400 max-w-2xl text-base">
                Discover our heavy operational equipment engineered to deliver peak utility under rigorous duty cycles.
              </p>
            </div>
            <Link
              href="/machinery"
              className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-6 py-3 rounded-xl transition-all flex items-center space-x-2 w-fit shrink-0"
            >
              <span>View Full Fleet</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredMachinery.map((machine) => (
              <div
                key={machine.id}
                className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-400/20 transition-all flex flex-col group"
              >
                <div className="relative h-56 w-full overflow-hidden select-none">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/90 text-amber-400 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-md border border-slate-700">
                    {machine.category}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{machine.name}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 mb-4">
                      {machine.usage}
                    </p>
                    <div className="border-t border-slate-900 pt-4 mb-4">
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Operational Capacity</p>
                      <p className="text-sm font-extrabold text-amber-400 mt-1">{machine.capacity}</p>
                    </div>
                  </div>
                  <Link
                    href="/machinery"
                    className="text-white hover:text-amber-400 text-sm font-bold flex items-center space-x-2 transition-all group-hover:translate-x-1"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CLIENT TESTIMONIALS */}
      <section className="py-24 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-extrabold text-amber-400 uppercase tracking-widest">TESTIMONIALS</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Trusted by Major Projects</h3>
            <p className="text-slate-400 text-base">
              Here is what key infrastructure developers and mining managers say about our operational performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Sri Yadadri Enterprises delivered exemplary work on our Karimnagar road-cutting project. Their crawler drills kept excavation pacing two weeks ahead of schedule with immaculate safety logs.",
                author: "M. Narsimha Reddy",
                role: "Senior Project Manager, Highway Subcontracting Consortium",
                stars: 5
              },
              {
                quote: "The controlled blasting work performed by Yadadri near our railway line bypass alignment was top-tier. Vibration limits were kept strictly below 5 mm/s, keeping nearby structures completely protected.",
                author: "K. Venkatesh",
                role: "Lead Site Operations Chief, InfraDev Partners",
                stars: 5
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 hover:bg-slate-900 transition-all relative overflow-hidden flex flex-col justify-between"
              >
                <Quote className="absolute top-6 right-6 h-12 w-12 text-slate-800/40 select-none pointer-events-none" />
                <div className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 italic text-sm leading-relaxed relative z-10">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-800/80 flex items-center space-x-3">
                  <div className="bg-amber-400 p-2 rounded-full text-slate-900 shrink-0">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{item.author}</p>
                    <p className="text-slate-500 text-xs font-semibold">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONTACT CTA */}
      <section className="py-20 bg-slate-900 border-t border-slate-850 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 select-none pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Have an Excavation, Drilling, or Quarry Project?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base">
            Request an engineering consultation or custom machinery quotes. Our operations desk responds within 24 business hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-8 py-4 rounded-xl flex items-center justify-center space-x-2 transition-all shadow-lg text-base"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:+918374276995"
              className="w-full sm:w-auto bg-slate-950 border border-slate-800 text-white hover:bg-slate-900 font-bold px-8 py-4 rounded-xl flex items-center justify-center space-x-2 transition-all text-base"
            >
              <span>Call +91 83742 76995</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
