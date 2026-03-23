"use client";

import { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';

const brands = [
  {
    name: "KTM",
    models: ["RC 390", "Duke 390"],
    info: ["Up to 2022 models supported"],
    logo: "simple-icons:ktm",
    imageLogo: "/ktm logo.jpg"
  },
  {
    name: "Royal Enfield",
    models: ["Continental GT 650", "Interceptor 650"],
    info: ["Up to 2026 models supported", "Custom 865 builds supported"],
    logo: "solar:wheel-bold-duotone", 
    imageLogo: "/royal enfield logo.png"
  },
  {
    name: "BMW",
    models: ["S1000RR"],
    info: ["Up to 2026 models supported"],
    logo: "simple-icons:bmw",
    imageLogo: "/bmw logo.png"
  },
  {
    name: "Kawasaki",
    models: ["ZX-10R", "ZX-6R", "Z900", "Z800"],
    info: ["Up to 2026 models supported"],
    logo: "simple-icons:kawasaki",
    imageLogo: "/kawasaki logo.png"
  },
  {
    name: "Triumph",
    models: ["Daytona 675", "Street Triple 765RS"],
    info: ["Up to 2026 models supported"],
    logo: "simple-icons:triumph", 
    imageLogo: "/triump logo.png"
  },
  {
    name: "Suzuki",
    models: ["GSXR-1000R", "Hayabusa"],
    info: ["Up to 2026 models supported"],
    logo: "simple-icons:suzuki",
    imageLogo: "/suzuki logo.png"
  },
  {
    name: "Ducati",
    models: ["Panigale V4", "Panigale V4S"],
    info: ["Up to 2026 models supported"],
    logo: "simple-icons:ducati",
    imageLogo: "/ducati logo.png"
  },
  {
    name: "Aprilia",
    models: ["RSV4", "RS457"],
    info: ["Up to 2026 models supported", "Handheld tuning + dyno support"],
    logo: "simple-icons:aprilia",
    imageLogo: "/aprilia logo.png"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
};

export default function Platforms() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    // Wait a brief tick for DOM rendering of elements before observing
    setTimeout(() => {
        const elements = document.querySelectorAll('.reveal-on-scroll');
        elements.forEach(el => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, []);

  if (!mounted) return null;

  return (
    <section id="platforms" className="py-20 md:py-32 relative z-10 bg-[#faf9f6] border-t border-black/[0.03] overflow-hidden shadow-[0_-20px_40px_-10px_rgba(0,0,0,0.05)]">
        
        {/* Abstract Background Elements for Premium Feel */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/5 blur-[120px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mb-16 md:mb-20">
            <h2 className="reveal-on-scroll text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-neutral-900 mb-6 drop-shadow-sm">
                Supported Performance Machines
            </h2>
            <p className="reveal-on-scroll delay-100 text-base md:text-lg text-neutral-500 max-w-2xl leading-relaxed font-light">
                We safely extract reliable, dyno-proven power from the world's most advanced superbikes. Custom ECU calibration engineered for your exact geometry.
            </p>
        </div>

        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-7xl mx-auto px-6"
        >
            {/* Desktop & Tablet Grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
                {brands.map((brand, idx) => (
                    <motion.div 
                        key={idx} 
                        variants={itemVariants}
                        className="bg-white border border-black/5 rounded-[2rem] p-8 flex flex-col shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(220,38,38,0.15)] hover:border-red-600/20 hover:-translate-y-2 transition-all duration-500 group cursor-pointer relative overflow-hidden"
                    >
                        {/* Subtle accent glow sweeping through on hover */}
                        <div className="absolute -inset-20 bg-gradient-to-tr from-red-600/0 via-red-600/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                        {/* Top Section: Logo & Name */}
                        <div className="mb-6 flex items-center justify-between relative z-10 w-full">
                            <span className={`w-14 h-14 p-2 shrink-0 bg-[#faf9f6] rounded-2xl flex items-center justify-center border border-black/5 shadow-inner transition-transform duration-500 group-hover:scale-110 ${!brand.imageLogo ? 'text-neutral-500 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 shadow-sm' : ''}`}>
                                {brand.imageLogo ? (
                                    <img src={brand.imageLogo} alt={brand.name} className="w-full h-full object-contain drop-shadow-sm" />
                                ) : (
                                    <iconify-icon icon={brand.logo} className="text-3xl"></iconify-icon>
                                )}
                            </span>
                            {/* Go Arrow indicator */}
                            <iconify-icon icon="solar:arrow-right-up-linear" className="text-2xl text-neutral-300 group-hover:text-red-500 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"></iconify-icon>
                        </div>

                        <h3 className="text-2xl font-black tracking-tighter text-neutral-900 mb-4 group-hover:text-red-600 transition-colors uppercase">
                            {brand.name}
                        </h3>

                        {/* Middle Section: UI Pills for Models */}
                        <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                            {brand.models.map((model, i) => (
                                <span key={i} className="px-3 py-1.5 bg-[#faf9f6] border border-black/[0.04] text-neutral-600 text-[11px] font-bold uppercase tracking-widest rounded-full group-hover:bg-red-50 group-hover:text-red-700 group-hover:border-red-100 transition-colors duration-300">
                                    {model}
                                </span>
                            ))}
                        </div>

                        {/* Bottom Section: Support Info with elegant checkmarks */}
                        <div className="mt-auto relative z-10 border-t border-black/5 pt-5">
                            {brand.info.map((info, i) => (
                                <div key={i} className="flex items-start gap-3 text-xs md:text-sm text-neutral-500 mb-2 font-medium leading-relaxed group-hover:text-neutral-700 transition-colors">
                                    <iconify-icon icon="solar:check-circle-bold" className="text-red-500 mt-[2px] shrink-0 text-base opacity-70 group-hover:opacity-100 transition-opacity"></iconify-icon>
                                    <p>{info}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Mobile Native Horizontal Scroll */}
            <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory space-x-4 pb-12 -mx-6 px-6 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
                {brands.map((brand, idx) => (
                    <motion.div 
                        key={idx} 
                        variants={itemVariants}
                        className="bg-white border border-black/5 rounded-[2rem] p-7 flex flex-col shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] min-w-[300px] w-[85vw] snap-center shrink-0 active:scale-[0.98] transition-all relative overflow-hidden group"
                    >
                        {/* Top Section */}
                        <div className="mb-6 flex items-center justify-between relative z-10">
                            <span className={`w-12 h-12 p-2 shrink-0 bg-[#faf9f6] rounded-2xl flex items-center justify-center border border-black/5 shadow-inner transition-all duration-300 ${!brand.imageLogo ? 'text-neutral-500 group-hover:bg-red-600 group-hover:text-white' : ''}`}>
                                {brand.imageLogo ? (
                                    <img src={brand.imageLogo} alt={brand.name} className="w-full h-full object-contain" />
                                ) : (
                                    <iconify-icon icon={brand.logo} className="text-2xl"></iconify-icon>
                                )}
                            </span>
                        </div>

                        <h3 className="text-2xl font-black tracking-tighter text-neutral-900 mb-4 uppercase">
                            {brand.name}
                        </h3>

                        {/* UI Pills */}
                        <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                            {brand.models.map((model, i) => (
                                <span key={i} className="px-3 py-1.5 bg-[#faf9f6] border border-black/[0.04] text-neutral-600 text-[11px] font-bold uppercase tracking-widest rounded-full">
                                    {model}
                                </span>
                            ))}
                        </div>

                        {/* Info List */}
                        <div className="mt-auto relative z-10 border-t border-black/5 pt-5">
                            {brand.info.map((info, i) => (
                                <div key={i} className="flex items-start gap-3 text-[13px] text-neutral-500 mb-2 font-medium">
                                    <iconify-icon icon="solar:check-circle-bold" className="text-red-500 mt-[1px] shrink-0 text-base opacity-90"></iconify-icon>
                                    <p>{info}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>

        {/* Trust Line */}
        <div className="max-w-7xl mx-auto px-6 mt-4 md:mt-12 text-center flex justify-center">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-black/[0.06] bg-white/50 backdrop-blur-md shadow-[0_2px_10px_-5px_rgba(0,0,0,0.05)] text-[11px] md:text-xs font-semibold uppercase tracking-widest text-neutral-500 transition-all hover:border-red-600/20 hover:text-neutral-800 cursor-default">
                <iconify-icon icon="solar:shield-star-bold-duotone" className="text-red-500 text-lg"></iconify-icon>
                Trusted with India’s most powerful machines
            </div>
        </div>
    </section>
  );
}
