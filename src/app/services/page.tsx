"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Construction,
  Gem,
  Target,
  Flame,
  Truck,
  Settings,
  CheckCircle,
  HelpCircle
} from "lucide-react";
import { getServices, ServiceDetail } from "@/utils/db";

// Icon mapping helper
const getServiceIcon = (name: string) => {
  const iconClass = "h-10 w-10 text-amber-400";
  switch (name) {
    case "Construction":
      return <Construction className={iconClass} />;
    case "Gem":
      return <Gem className={iconClass} />;
    case "Target":
      return <Target className={iconClass} />;
    case "Flame":
      return <Flame className={iconClass} />;
    case "Truck":
      return <Truck className={iconClass} />;
    default:
      return <Settings className={iconClass} />;
  }
};

export default function ServicesPage() {
  const [services, setServices] = useState<ServiceDetail[]>([]);

  useEffect(() => {
    setServices(getServices());
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-extrabold text-amber-400 uppercase tracking-widest"
          >
            OUR CAPABILITIES
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl sm:text-5xl font-black text-white"
          >
            Engineering & Mining Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 text-base"
          >
            From deep quarry block extraction to site development grading, we deploy certified engineering muscle.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-amber-400/30 hover:bg-slate-900/80 transition-all flex flex-col group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 group-hover:border-amber-400/20 transition-all">
                  {getServiceIcon(service.iconName)}
                </div>
                <span className="text-slate-650 text-xs font-bold uppercase tracking-widest bg-slate-950 px-3 py-1 rounded-md">
                  0{index + 1}
                </span>
              </div>

              <h2 className="text-xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                {service.title}
              </h2>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {service.longDesc}
              </p>

              {/* Sub-capabilities list */}
              <div className="mb-6 pt-4 border-t border-slate-800/80">
                <p className="text-xs uppercase text-slate-500 font-bold tracking-wider mb-3">Core Scope</p>
                <ul className="space-y-2 text-xs font-semibold text-slate-350">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits list */}
              <div className="mb-8 pt-4 border-t border-slate-800/80">
                <p className="text-xs uppercase text-slate-500 font-bold tracking-wider mb-3">Operational Benefits</p>
                <ul className="space-y-2 text-xs font-medium text-slate-400">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center space-x-2">
                      <CheckCircle className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/contact?service=${service.slug}`}
                className="w-full text-center bg-slate-950 border border-slate-800 text-slate-200 hover:text-slate-950 hover:bg-amber-400 hover:border-amber-400 font-bold py-3 rounded-xl transition-all text-sm mt-auto"
              >
                {service.ctaText}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Support Banner FAQ strip */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-amber-400 shrink-0">
              <HelpCircle className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Need a custom technical design?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We design specific drilling profiles, blast delay arrays, and haulage plans tailored to your site geology.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="w-full md:w-auto text-center bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all text-sm shrink-0"
          >
            Request Engineering Layout
          </Link>
        </section>

      </div>
    </div>
  );
}
