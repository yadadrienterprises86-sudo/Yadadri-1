"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, Map } from "lucide-react";
import { getGallery, GalleryItem } from "@/utils/db";
import Lightbox from "@/components/Lightbox";

const categories = [
  { id: "all", name: "All Media" },
  { id: "construction", name: "Construction" },
  { id: "mining", name: "Mining Works" },
  { id: "machinery", name: "Equipment Fleet" },
  { id: "worksites", name: "Work Sites" },
  { id: "team", name: "Our Team" },
  { id: "drone", name: "Drone Images" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);

  useEffect(() => {
    setGallery(getGallery());
  }, []);

  const filteredMedia = activeFilter === "all"
    ? gallery
    : gallery.filter((item) => item.category === activeFilter);

  const handleOpenLightbox = (index: number) => {
    // Find absolute index of item in current filteredMedia
    setLightboxIndex(index);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredMedia.length - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < filteredMedia.length - 1 ? prev + 1 : 0));
  };

  const currentItem = lightboxIndex !== null ? filteredMedia[lightboxIndex] : null;

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
            MEDIA HUB
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl sm:text-5xl font-black text-white"
          >
            Quarry & Site Operations Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 text-base"
          >
            Visual captures of our active excavation fields, granite slicing yards, crawler rigs, and drone survey snapshots.
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

        {/* Media Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredMedia.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => handleOpenLightbox(index)}
                className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 border border-slate-800 cursor-pointer group select-none"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <ZoomIn className="h-8 w-8 text-amber-400 mb-3 transform scale-90 group-hover:scale-100 transition-transform duration-300" />
                  <span className="text-white font-bold text-base block">{item.title}</span>
                  <span className="text-slate-400 text-xs mt-1 block">{item.description}</span>
                  <span className="text-amber-400 text-xxs uppercase font-extrabold tracking-widest mt-3 border border-amber-400/30 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Rendering */}
        {currentItem && (
          <Lightbox
            isOpen={lightboxIndex !== null}
            image={currentItem.image}
            title={currentItem.title}
            description={currentItem.description}
            onClose={() => setLightboxIndex(null)}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}

      </div>
    </div>
  );
}
