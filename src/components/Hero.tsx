"use client";

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Preloader from './Preloader';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const constraintsRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
    <Preloader onComplete={() => setLoaded(true)} />
    <section ref={constraintsRef} className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
        <div className="glow-accent top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Draggable Photos Layer */}
        {/* Photo 1 (Top Left) */}
        <motion.div
            drag
            dragConstraints={constraintsRef}
            whileDrag={{ scale: 1.05, rotate: 0, zIndex: 50 }}
            dragElastic={0.2}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hidden lg:block absolute top-[5%] left-[2%] md:top-[8%] md:left-[5%] lg:top-[12%] lg:left-[8%] z-20 w-32 md:w-48 lg:w-64 aspect-[4/3] rounded-sm shadow-xl border-[6px] border-white pointer-events-auto cursor-grab active:cursor-grabbing rotate-[-4deg] overflow-hidden bg-white"
        >
            <img src="/race valley group photo 1.JPEG" alt="Race Valley" fetchPriority="high" className="w-full h-full object-cover pointer-events-none block" />
        </motion.div>

        {/* Photo 2 (Bottom Right) */}
        <motion.div
            drag
            dragConstraints={constraintsRef}
            whileDrag={{ scale: 1.05, rotate: 0, zIndex: 50 }}
            dragElastic={0.2}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="hidden lg:block absolute bottom-[2%] right-[2%] md:bottom-[5%] md:right-[5%] z-20 w-32 md:w-48 lg:w-56 aspect-[4/5] md:aspect-[4/5] rounded-sm shadow-xl border-[6px] border-white pointer-events-auto cursor-grab active:cursor-grabbing rotate-[6deg] overflow-hidden bg-white"
        >
            <img src="/zx6r on dyno with pops.PNG" alt="ZX6R Pops" fetchPriority="high" className="w-full h-full object-cover object-center pointer-events-none block" />
        </motion.div>
        
        {/* Photo 3 (Top Right) */}
            <motion.div
            drag
            dragConstraints={constraintsRef}
            whileDrag={{ scale: 1.05, rotate: 0, zIndex: 50 }}
            dragElastic={0.2}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="hidden lg:block absolute top-[8%] right-[2%] md:top-[12%] md:right-[5%] z-20 w-32 md:w-48 lg:w-56 aspect-[4/3] rounded-sm shadow-xl border-[6px] border-white pointer-events-auto cursor-grab active:cursor-grabbing rotate-[8deg] overflow-hidden bg-white"
        >
            <img src="/zx10r on dyno.png" alt="ZX10R Dyno" fetchPriority="high" className="w-full h-full object-cover pointer-events-none block" />
        </motion.div>

        {/* Photo 4 (Bottom Left) */}
            <motion.div
            drag
            dragConstraints={constraintsRef}
            whileDrag={{ scale: 1.05, rotate: 0, zIndex: 50 }}
            dragElastic={0.2}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="hidden lg:block absolute bottom-[2%] left-[2%] md:bottom-[5%] md:left-[5%] lg:bottom-[10%] lg:left-[10%] z-20 w-32 md:w-48 lg:w-56 aspect-[4/3] rounded-sm shadow-xl border-[6px] border-white pointer-events-auto cursor-grab active:cursor-grabbing rotate-[-8deg] overflow-hidden bg-white"
        >
            <img src="/6r in garage .png" alt="6R Garage" fetchPriority="high" className="w-full h-full object-cover pointer-events-none block" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center pointer-events-none">
            
            {/* Badge */}
            <div className={`transition-all duration-1000 ease-[0.22,1,0.36,1] transform pointer-events-auto ${loaded ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-12 opacity-0'}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/5 bg-black/5 text-xs font-medium text-neutral-600 mb-8 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
                    Tuners Behind India’s Fastest Machines
                </div>
            </div>

            {/* Headline */}
            <div className={`transition-all duration-1000 ease-[0.22,1,0.36,1] transform pointer-events-auto ${loaded ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-12 opacity-0'}`}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-neutral-900 max-w-5xl leading-[1.1] mb-8">
                    Ready to Unlock the True Potential of Your Bike?
                </h1>
            </div>

            {/* Subheadline */}
            <div className={`transition-all duration-1000 ease-[0.22,1,0.36,1] transform pointer-events-auto ${loaded ? 'translate-y-0 opacity-100 delay-500' : 'translate-y-12 opacity-0'}`}>
                <p className="text-base md:text-lg max-w-2xl text-neutral-500 mb-10 font-light leading-relaxed">
                    We're the team behind record setting superbikes, including Asia's fastest RS 765 and India's fastest wheelie machine of 2023/24.
                </p>
            </div>

            {/* CTA Buttons */}
            <div className={`transition-all duration-1000 ease-[0.22,1,0.36,1] transform pointer-events-auto flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto ${loaded ? 'translate-y-0 opacity-100 delay-700' : 'translate-y-12 opacity-0'}`}>
                <Link href="#contact" className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-white bg-red-600 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all duration-500 flex items-center justify-center gap-2">
                    Start Your Build
                    <iconify-icon icon="solar:arrow-right-linear" style={{ strokeWidth: "1.5px" }}></iconify-icon>
                </Link>
                <Link href="#services" className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-neutral-600 border border-black/10 rounded-full hover:bg-neutral-900 hover:text-white transition-colors flex items-center justify-center">
                    Explore Services
                </Link>
            </div>

        </div>
    </section>
    </>
  );
}
