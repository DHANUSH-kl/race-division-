"use client";

import Link from 'next/link';
import { useState } from 'react';
import Preloader from './Preloader';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
    <Preloader onComplete={() => setLoaded(true)} />
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
        <div className="glow-accent top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
            
            {/* Badge */}
            <div className={`transition-all duration-1000 ease-[0.22,1,0.36,1] transform ${loaded ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-12 opacity-0'}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-neutral-300 mb-8 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Dyno Cell Available in Navi Mumbai
                </div>
            </div>

            {/* Headline */}
            <div className={`transition-all duration-1000 ease-[0.22,1,0.36,1] transform ${loaded ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-12 opacity-0'}`}>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-neutral-100 max-w-5xl leading-[1.1] mb-8">
                    Unleash <span className="text-neutral-500">Maximum</span><br />Performance.
                </h1>
            </div>

            {/* Subheadline */}
            <div className={`transition-all duration-1000 ease-[0.22,1,0.36,1] transform ${loaded ? 'translate-y-0 opacity-100 delay-500' : 'translate-y-12 opacity-0'}`}>
                <p className="text-base md:text-lg max-w-2xl text-neutral-400 mb-10 font-light leading-relaxed">
                    Precision ECU tuning, performance upgrades, and state-of-the-art dyno diagnostics for superbikes. Engineered for the elite riders of Navi Mumbai.
                </p>
            </div>

            {/* CTA Buttons */}
            <div className={`transition-all duration-1000 ease-[0.22,1,0.36,1] transform flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto ${loaded ? 'translate-y-0 opacity-100 delay-700' : 'translate-y-12 opacity-0'}`}>
                <Link href="#contact" className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-[#0a0a0a] bg-neutral-100 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-500 flex items-center justify-center gap-2">
                    Start Your Build
                    <iconify-icon icon="solar:arrow-right-linear" style={{ strokeWidth: "1.5px" }}></iconify-icon>
                </Link>
                <Link href="#services" className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-neutral-300 border border-white/10 rounded-full hover:bg-white/5 hover:text-white transition-colors flex items-center justify-center">
                    Explore Services
                </Link>
            </div>

        </div>
    </section>
    </>
  );
}
