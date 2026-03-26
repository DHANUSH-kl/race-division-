"use client";

import { useState } from 'react';

const allImages = [
  "/6r in garage .png",
  "/6r with trophies.jpg",
  "/Ducati V4S.jpg",
  "/bic manthan 2.jpeg",
  "/bic manthan.PNG",
  "/bic scout bike.jpeg",
  "/black bmw on dyno.PNG",
  "/bmw red ambient.png",
  "/fastest wheelie.jpg",
  "/gt650 new img.PNG",
  "/manthan 10r on dyno.PNG",
  "/manthan on 6r with trophy.jpg",
  "/manthan receiving trophies.jpg",
  "/purple carbon fiber bmw.png",
  "/race valley group photo 1.JPEG",
  "/re 650 .PNG",
  "/rs765 on dyno.png",
  "/scout and manthan.jpeg",
  "/valley run group photo 2.JPEG",
  "/zx10r on dyno.png",
  "/zx6r on dyno with pops.PNG"
];

export default function BuildGallery() {
  const [showAll, setShowAll] = useState(false);
  
  // Show 7 initially, or all if expanded
  const visibleImages = showAll ? allImages : allImages.slice(0, 7);

  return (
    <section id="builds" className="py-20 md:py-32 bg-[#f5f5f7] border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                <div>
                    <h2 className="reveal-on-scroll text-3xl font-semibold tracking-tighter text-neutral-900 mb-2">Build Gallery</h2>
                    <p className="reveal-on-scroll delay-100 text-sm text-neutral-600">Recent projects exiting the division.</p>
                </div>
            </div>

            {/* Pinterest-style masonry grid */}
            <div className="columns-2 md:columns-3 xl:columns-4 gap-4 space-y-4">
                {visibleImages.map((src, index) => (
                    <div 
                        key={`${src}-${index}`} 
                        className="reveal-on-scroll break-inside-avoid relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                    >
                        <img 
                            src={src} 
                            alt={`Gallery image ${index + 1}`} 
                            loading="lazy"
                            className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.03]" 
                        />
                        <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                ))}
            </div>

            <div className="mt-16 flex justify-center">
                <button 
                    onClick={() => setShowAll(!showAll)}
                    className="px-8 py-3 bg-neutral-900 text-white font-semibold rounded-full hover:bg-red-600 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                >
                    {showAll ? 'Show Less' : 'View Full Gallery'}
                    <iconify-icon icon={showAll ? "solar:alt-arrow-up-linear" : "solar:alt-arrow-down-linear"} className="text-lg"></iconify-icon>
                </button>
            </div>
        </div>
    </section>
  );
}
