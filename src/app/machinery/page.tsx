"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Settings, ShieldCheck, Cpu } from "lucide-react";
import { getMachinery, MachineDetail } from "@/utils/db";

const categories = [
  { id: "all", name: "All Fleet" },
  { id: "drilling", name: "Drilling Rigs" },
  { id: "earthmoving", name: "Earthmovers & Loaders" },
  { id: "mining", name: "Mining Attachments" },
  { id: "logistics", name: "Logistics Tippers" },
  { id: "support", name: "Site Support" },
];

export default function MachineryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [machinery, setMachinery] = useState<MachineDetail[]>([]);

  useEffect(() => {
    setMachinery(getMachinery());
  }, []);

  const filteredMachinery = activeFilter === "all"
    ? machinery
    : machinery.filter((m) => m.category === activeFilter);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-extrabold text-amber-400 uppercase tracking-widest"
          >
            OUR EQUIPMENT
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl sm:text-5xl font-black text-white"
          >
            Heavy Operational Fleet
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 text-base"
          >
            Explore our state-of-the-art heavy machinery. Maintained on rigorous preventive protocols to secure maximum worksite uptime.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeFilter === cat.id
                  ? "bg-amber-400 text-slate-950 shadow-md"
                  : "bg-slate-900 text-slate-350 hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Machinery Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredMachinery.map((machine) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={machine.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-400/20 transition-all flex flex-col group"
              >
                <div className="grid grid-cols-1 sm:grid-cols-5 h-full">
                  
                  {/* Left Column: Image */}
                  <div className="relative h-64 sm:h-auto sm:col-span-2 overflow-hidden select-none">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={machine.image}
                      alt={machine.name}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-slate-950/80 text-amber-400 text-xxs font-black uppercase tracking-wider px-2.5 py-1 rounded border border-slate-800">
                      {machine.category}
                    </div>
                  </div>

                  {/* Right Column: Content */}
                  <div className="p-6 sm:p-8 sm:col-span-3 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{machine.name}</h3>
                      <p className="text-slate-400 text-xs leading-relaxed mb-6 italic">
                        {machine.usage}
                      </p>

                      {/* Capacity Badge */}
                      <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-lg mb-6 flex items-center justify-between">
                        <span className="text-slate-500 text-xxs uppercase font-extrabold tracking-wider">Capacity</span>
                        <span className="text-xs font-black text-amber-400">{machine.capacity}</span>
                      </div>

                      {/* Technical specifications */}
                      <div className="mb-6 space-y-2">
                        <p className="text-slate-500 text-xxs uppercase font-extrabold tracking-wider mb-2">Technical Specifications</p>
                        {Object.entries(machine.specifications).map(([key, val]) => (
                          <div key={key} className="flex justify-between text-xs border-b border-slate-850 pb-1.5 font-medium text-slate-350">
                            <span className="text-slate-450">{key}</span>
                            <span className="font-bold text-white">{val}</span>
                          </div>
                        ))}
                      </div>

                      {/* Machine Features */}
                      <div className="space-y-1.5 mb-8">
                        <p className="text-slate-500 text-xxs uppercase font-extrabold tracking-wider mb-2">Key Equipment Tech</p>
                        {machine.features.map((feature) => (
                          <div key={feature} className="flex items-start space-x-2 text-xxs font-semibold text-slate-400">
                            <Check className="h-3.5 w-3.5 text-amber-400 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={`/contact?machine=${machine.id}`}
                      className="w-full text-center bg-slate-950 hover:bg-amber-400 hover:text-slate-950 text-white font-bold py-3 rounded-xl border border-slate-800 transition-all text-xs"
                    >
                      Enquire For Rental / Contract Deployment
                    </Link>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
