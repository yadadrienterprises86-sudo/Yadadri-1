"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Target, Heart, Eye, Award, Hammer, Compass, HardHat } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-extrabold text-amber-400 uppercase tracking-widest"
          >
            OUR PROFILE
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl sm:text-5xl font-black text-white"
          >
            Sri Yadadri Enterprises
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 text-base"
          >
            Strength, precision, and reliable execution. Empowering infrastructure projects with heavy mechanical solutions.
          </motion.p>
        </div>

        {/* Introduction Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Who We Are</h2>
            <p className="text-slate-300 leading-relaxed">
              Established with a goal to deliver high-yield mining and bulk excavation solutions, **SRI YADADRI ENTERPRISES** has grown into a leading contractor for infrastructure developers, cement companies, and mineral corporations across India.
            </p>
            <p className="text-slate-450 text-sm leading-relaxed">
              We carry specialized capabilities in rocky bench layouts, blast-hole drilling operations, controlled open blasting, loading cycles, and material transport logistics. Under our corporate model, we integrate advanced machinery rigs with highly trained engineering teams to achieve maximum operational safety.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-4 text-center">
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                <p className="text-3xl font-black text-amber-400">12+</p>
                <p className="text-slate-500 text-xxs uppercase font-extrabold tracking-wider mt-1">Years Experience</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                <p className="text-3xl font-black text-amber-400">180+</p>
                <p className="text-slate-500 text-xxs uppercase font-extrabold tracking-wider mt-1">Personnel</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                <p className="text-3xl font-black text-amber-400">85+</p>
                <p className="text-slate-500 text-xxs uppercase font-extrabold tracking-wider mt-1">Projects Done</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl border border-slate-800 select-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
              alt="Mining Site Bench Layout"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 hover:border-amber-400/20 transition-all">
            <div className="bg-slate-950 p-4 rounded-xl w-fit mb-6 border border-slate-800 text-amber-400">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              To deliver premium quality civil excavation, precision drilling, and quarry mining operations by deploying modern machinery, prioritizing human safety, and adhering to strict engineering timelines.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 hover:border-amber-400/20 transition-all">
            <div className="bg-slate-950 p-4 rounded-xl w-fit mb-6 border border-slate-800 text-amber-400">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              To be the most trusted, resource-optimized, and environment-compliant industrial contracting partner in India, pioneering sustainable granite extraction and controlled blasting solutions.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 hover:border-amber-400/20 transition-all">
            <div className="bg-slate-950 p-4 rounded-xl w-fit mb-6 border border-slate-800 text-amber-400">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Core Values</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Safety is our absolute foundation. We maintain transparency, keep engineering integrity, drive mechanical efficiency, and value professional customer relations across all site assignments.
            </p>
          </div>
        </section>

        {/* Safety & Quality Commitments */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-slate-950 p-4 rounded-xl w-fit border border-slate-800 text-amber-400">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-extrabold text-white">Rigorous Safety Standards</h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                In heavy mining and blasting environments, safety is not merely a regulation; it is our operational lifeline. We implement daily toolbox briefings, site cordon routines, blast delay mapping, and ground vibration telemetry checks.
              </p>
              <ul className="space-y-3 text-sm font-semibold text-slate-400">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <span>Compliant with DGMS (Director General of Mines Safety) guidelines</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <span>Regular inspection and certified storage of explosives</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <span>Full PPE (Personal Protective Equipment) compliance on active sites</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <span>Seismograph monitoring during blasting routines</span>
                </li>
              </ul>
            </div>
            <div className="space-y-6 lg:border-l lg:border-slate-800 lg:pl-12">
              <div className="bg-slate-950 p-4 rounded-xl w-fit border border-slate-800 text-amber-400">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-extrabold text-white">Quality Commitment</h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                We believe in extracting the finest materials and constructing infrastructure that lasts. Our wire-saw granite slicing ensures smooth flat blocks, while structured site grading preserves structural integrity for foundation piling.
              </p>
              <ul className="space-y-3 text-sm font-semibold text-slate-400">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <span>Laser-aligned grade compaction grading controls</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <span>Strict quality control inspections on raw block sizes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <span>Continuous equipment calibration for uniform boring</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <span>Fully logs and documentation reports for clients</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Work Force & Fleet Highlight */}
        <section className="text-center max-w-4xl mx-auto space-y-6">
          <HardHat className="h-12 w-12 text-amber-400 mx-auto" />
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Modern Equipment & Experienced Personnel</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Our company relies on over 180 site workers, including certified blasters, geological engineers, heavy crane mechanics, and machine operators. We ensure continuous site support, regular machinery updates, and immediate field workshops to keep projects running efficiently.
          </p>
        </section>

      </div>
    </div>
  );
}
