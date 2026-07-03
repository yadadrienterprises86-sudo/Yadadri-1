"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldAlert, ArrowLeft, HardHat } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-slate-950 min-h-[75vh] text-slate-100 flex flex-col items-center justify-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md space-y-6"
      >
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-full w-fit mx-auto text-amber-400">
          <ShieldAlert className="h-16 w-16 animate-pulse" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-6xl font-black text-white">404</h1>
          <h2 className="text-xl font-bold text-amber-400 uppercase tracking-wider">Page Not Found</h2>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed">
          The requested operational area or specifications path does not exist. It may have been relocated or is under maintenance.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-md text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Site HQ</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
