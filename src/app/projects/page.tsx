"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { projectsData } from "@/data/projects";

const categories = [
  { id: "all", name: "All Projects" },
  { id: "construction", name: "Civil & Roads" },
  { id: "quarry", name: "Granite Quarries" },
  { id: "mining", name: "Open Cast Mining" },
  { id: "drilling", name: "Drilling Sites" },
  { id: "blasting", name: "Controlled Blasts" },
  { id: "loading", name: "Loading Works" },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all"
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

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
            OUR WORK
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl sm:text-5xl font-black text-white"
          >
            Completed Projects Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 text-base"
          >
            View our verified execution track record. Delivering large scale site preparation, rock cutting, and raw block extraction contracts.
          </motion.p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeFilter === cat.id
                  ? "bg-amber-400 text-slate-950 shadow-md"
                  : "bg-slate-900 text-slate-355 hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="bg-slate-900 border border-slate-850 rounded-2xl overflow-hidden hover:border-amber-400/20 hover:shadow-2xl transition-all flex flex-col group"
              >
                {/* Project Image */}
                <div className="relative h-64 w-full overflow-hidden select-none">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute top-4 left-4 bg-slate-950/90 text-amber-400 text-xxs font-black uppercase tracking-wider px-3 py-1 rounded border border-slate-800">
                    {project.category}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center space-x-2 text-slate-300">
                    <MapPin className="h-4 w-4 text-amber-400 shrink-0" />
                    <span className="text-xs font-bold">{project.location}</span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="text-slate-500 text-xxs uppercase font-extrabold tracking-wider block">
                      Client: {project.client}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed font-medium">
                      {project.description}
                    </p>

                    {/* Stats strip */}
                    <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl space-y-2 mt-4">
                      <p className="text-slate-500 text-xxs uppercase font-extrabold tracking-wider mb-2 block">Project Metrics</p>
                      {Object.entries(project.stats).map(([k, v]) => (
                        <div key={k} className="flex justify-between text-xxs font-semibold">
                          <span className="text-slate-400">{k}</span>
                          <span className="text-amber-400">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-800/80">
                    <Link
                      href="/contact"
                      className="inline-flex items-center space-x-2 text-white group-hover:text-amber-400 text-xs font-bold transition-all group-hover:translate-x-1"
                    >
                      <span>Inquire About Similar Contracting Scope</span>
                      <ArrowRight className="h-4 w-4" />
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
