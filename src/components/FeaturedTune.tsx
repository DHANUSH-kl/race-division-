"use client";

import { useEffect, useState, useRef } from 'react';

export default function FeaturedTune() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    setTimeout(() => {
        if (!sectionRef.current) return;
        const elements = sectionRef.current.querySelectorAll('.reveal-on-scroll');
        elements.forEach(el => {
            el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-1000', 'ease-out');
            observer.observe(el);
        });
    }, 100);

    return () => observer.disconnect();
  }, [mounted]);

  if (!mounted) return null;

  return (
    <section ref={sectionRef} className="relative z-0 py-16 md:py-28 bg-white border-y border-black/5 overflow-hidden w-full">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mb-6 md:mb-16">
          <div>
            <span className="reveal-on-scroll text-[10px] md:text-xs font-semibold tracking-widest uppercase text-red-600 mb-3 block">
              Most Requested by Riders
            </span>
            <h2 className="reveal-on-scroll delay-100 text-2xl md:text-4xl xl:text-5xl font-semibold tracking-tighter text-neutral-900 mb-3">
              The Most Popular &amp; Powerful Tune<br className="hidden md:block" />
              for Royal Enfield GT/INT 650
            </h2>
          </div>
      </div>

      {/* ── Card 1: GT/INT 650 Standard Tune ── */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-16 items-center mb-10 md:mb-20">
          
          {/* Left: Image Block */}
          <div className="reveal-on-scroll delay-200 relative w-full aspect-[16/9] md:aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 border border-black/5 group">
            <div className="absolute top-6 left-6 z-20">
                <img src="/royal enfield logo.png" className="w-12 h-12 object-contain brightness-0 invert opacity-90" />
            </div>
            <img src="/gt650 new img.PNG" alt="Royal Enfield GT 650" className="w-full h-full object-cover transition-transform duration-1000 ease-[0.25,1,0.5,1] group-hover:scale-105" />
          </div>

          {/* Right: Content Block */}
          <div className="flex flex-col justify-center">
            <h3 className="reveal-on-scroll delay-200 text-lg md:text-3xl font-bold tracking-tighter text-neutral-900 mb-3 uppercase">
              Royal Enfield GT 650 / Interceptor 650
            </h3>
            
            <p className="reveal-on-scroll delay-300 text-xs md:text-base text-neutral-500 max-w-lg leading-relaxed mb-4">
              Stop riding a restricted machine. Our ECU flash unlocks smoother throttle response, stronger mid-range, and a more refined riding experience, all optimized through absolute precision dyno testing.
            </p>

            <ul className="reveal-on-scroll delay-400 space-y-2 mb-5 border-l-2 border-red-600/20 pl-4 py-0.5">
              {[
                "Smoother throttle response",
                "Mid range & top end Gains. With quick initial pulls",
                "Optimized air-fuel ratios",
                "Dyno-tested and reliability-focused"
              ].map((benefit, i) => (
                <li key={i} className="text-sm md:text-base font-medium text-neutral-800 leading-snug">
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="reveal-on-scroll delay-500 flex flex-col sm:flex-row items-center gap-4 mb-4">
              <a href="#contact" className="w-full sm:w-auto px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-neutral-900 transition-colors duration-300 flex items-center justify-center gap-2 group text-sm md:text-base">
                Get My 650 Tuned
                <iconify-icon icon="solar:arrow-right-linear" className="text-lg group-hover:translate-x-1 transition-transform"></iconify-icon>
              </a>
            </div>

            <div className="reveal-on-scroll delay-600 inline-flex items-center gap-2 text-[11px] md:text-xs font-semibold uppercase tracking-widest text-neutral-500">
              <iconify-icon icon="solar:verified-check-bold" className="text-red-500 text-lg"></iconify-icon>
              One of our most requested and proven upgrades
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="reveal-on-scroll w-full h-px bg-black/8 mb-10 md:mb-20" />

        {/* ── Card 2: 865cc Big Bore Kit Custom Tune ── */}
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-16 items-center">

          {/* Left: Content (reversed on desktop) */}
          <div className="flex flex-col justify-center order-2 lg:order-1">

            {/* Badge */}
            <span className="reveal-on-scroll inline-flex items-center gap-2 text-[10px] md:text-xs font-semibold tracking-widest uppercase text-red-600 mb-3">
              <iconify-icon icon="solar:cpu-bold" className="text-base"></iconify-icon>
              Custom ECU — Big Bore Specialist
            </span>

            <h3 className="reveal-on-scroll delay-100 text-lg md:text-3xl font-bold tracking-tighter text-neutral-900 mb-3 uppercase">
              865cc Big Bore Kit<br />Custom ECU Tune
            </h3>

            <p className="reveal-on-scroll delay-200 text-xs md:text-base text-neutral-500 max-w-lg leading-relaxed mb-4">
              Running an 865cc big bore kit on your RE 650? The stock ECU simply can't keep up. We build a fully bespoke ECU map from scratch — calibrated precisely to your larger displacement, new fuelling requirements, and power characteristics.
            </p>

            <ul className="reveal-on-scroll delay-300 space-y-2 mb-5 border-l-2 border-red-600/20 pl-4 py-0.5">
              {[
                "Purpose-built map for 865cc displacement",
                "Recalibrated fuelling & ignition timing",
                "Maximised torque across the full RPM range",
                "Dyno-verified on your exact big bore setup"
              ].map((benefit, i) => (
                <li key={i} className="text-sm md:text-base font-medium text-neutral-800 leading-snug">
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="reveal-on-scroll delay-400 flex flex-col sm:flex-row items-center gap-4 mb-4">
              <a href="#contact" className="w-full sm:w-auto px-6 py-3 bg-neutral-900 text-white font-semibold rounded-full hover:bg-red-600 transition-colors duration-300 flex items-center justify-center gap-2 group text-sm md:text-base">
                Get a Custom Big Bore Tune
                <iconify-icon icon="solar:arrow-right-linear" className="text-lg group-hover:translate-x-1 transition-transform"></iconify-icon>
              </a>
            </div>

            <div className="reveal-on-scroll delay-500 inline-flex items-center gap-2 text-[11px] md:text-xs font-semibold uppercase tracking-widest text-neutral-500">
              <iconify-icon icon="solar:atom-bold" className="text-red-500 text-lg"></iconify-icon>
              Engineered for non-standard builds
            </div>
          </div>

          {/* Right: Visual Block */}
          <div className="reveal-on-scroll delay-200 order-1 lg:order-2 relative w-full aspect-[16/9] md:aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-900 border border-black/5 group flex items-center justify-center">
            {/* Dark decorative bg */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(225,29,72,0.12)_0%,_transparent_70%)]" />

            {/* Big displacement badge */}
            <div className="relative z-10 text-center px-6">
              <div className="text-[5rem] md:text-[8rem] font-black tracking-tighter text-white leading-none mb-2 select-none">
                865<span className="text-red-500 text-4xl md:text-6xl align-top mt-3 md:mt-5 inline-block">cc</span>
              </div>
              <div className="text-xs md:text-sm font-semibold tracking-widest uppercase text-neutral-400">
                Custom ECU Calibration
              </div>
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[10px] md:text-xs font-medium tracking-wider uppercase text-neutral-500">
                  Big Bore Kit Compatible
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
