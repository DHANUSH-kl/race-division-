"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/our team/6r with trophies.jpg",
  "/our team/bic manthan 2.jpeg",
  "/our team/bic scout bike.jpeg",
  "/our team/black bmw on dyno.PNG",
  "/our team/fastest wheelie.jpg",
  "/our team/manthan 10r on dyno.PNG",
  "/our team/manthan on 6r with trophy.jpg",
  "/our team/manthan receiving trophies.jpg",
  "/our team/race valley group photo 1.JPEG",
  "/our team/valley run group photo 2.JPEG",
];

export default function TeamSection() {
  return (
    <section className="relative py-24 bg-neutral-900 border-t border-white/5 overflow-hidden">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-neutral-400 mb-8 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
          Our Team
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white max-w-5xl leading-[1.2]">
          Passionately driven by a team of <span className="text-red-500">Drag Racers</span>, <span className="text-red-500">Track Racers</span>, and highly qualified <span className="text-red-500">Aeronautical Engineers</span> running a premier tuning company.
        </h2>
      </div>

      {/* Infinite Curved Slider Wrapper */}
      {/* The curved effect is given by a soft ellipse clip path and a slight 3D rotation */}
      <div 
        className="relative w-full pb-8 flex items-center justify-center overflow-hidden" 
        style={{ perspective: '1200px' }}
      >
        
        {/* Soft edge fade for the slider */}
        <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-neutral-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-neutral-900 to-transparent z-10 pointer-events-none" />

        <div className="w-full flex py-10">
          <motion.div
            className="flex gap-6 pr-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 35,
            }}
          >
            {/* Duplicate array to create the seamless loop */}
            {[...images, ...images].map((src, idx) => (
              <div
                key={idx}
                className="relative w-[280px] md:w-[350px] lg:w-[450px] aspect-[4/3] rounded-2xl overflow-hidden shrink-0 shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10"
              >
                <Image
                  src={src}
                  alt={`Team Image ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
