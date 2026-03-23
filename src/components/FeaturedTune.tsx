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
    <section ref={sectionRef} className="sticky bottom-0 z-0 py-20 md:py-32 bg-white border-y border-black/5 overflow-hidden w-full">
      
      {/* Matched Header Alignment */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mb-12 md:mb-16">
          <div>
            <span className="reveal-on-scroll text-[10px] md:text-xs font-semibold tracking-widest uppercase text-red-600 mb-3 block">
              Most Requested by Riders
            </span>
            <h2 className="reveal-on-scroll delay-100 text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tighter text-neutral-900 mb-5">
              The Most Popular ECU Tune for Royal Enfield GT/INT 650
            </h2>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left: Image Block */}
          <div className="reveal-on-scroll delay-200 relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 border border-black/5 group">
            {/* Soft RE Logo Overlay */}
            <div className="absolute top-6 left-6 z-20">
                <img src="/royal enfield logo.png" className="w-12 h-12 object-contain brightness-0 invert opacity-90" />
            </div>

            <img src="/re 650 .PNG" alt="Royal Enfield GT 650" className="w-full h-full object-cover transition-transform duration-1000 ease-[0.25,1,0.5,1] group-hover:scale-105" />
          </div>

          {/* Right: Content Block */}
          <div className="flex flex-col justify-center">
            <h3 className="reveal-on-scroll delay-200 text-2xl md:text-3xl font-bold tracking-tighter text-neutral-900 mb-5 uppercase">
              Royal Enfield GT 650 / Interceptor 650
            </h3>
            
            <p className="reveal-on-scroll delay-300 text-sm md:text-base text-neutral-500 max-w-lg leading-relaxed mb-8">
              Stop riding a restricted machine. Our ECU flash unlocks smoother throttle response, stronger mid-range, and a more refined riding experience, all optimized through absolute precision dyno testing.
            </p>

            {/* Clean Minimalist Key Benefits List */}
            <ul className="reveal-on-scroll delay-400 space-y-3 mb-10 border-l-2 border-red-600/20 pl-4 py-1">
              {[
                "Smoother throttle response",
                "Improved mid-range performance",
                "Optimized air-fuel ratios",
                "Dyno-tested and reliability-focused"
              ].map((benefit, i) => (
                <li key={i} className="text-sm md:text-base font-medium text-neutral-800">
                  {benefit}
                </li>
              ))}
            </ul>

            {/* Standardized CTAs */}
            <div className="reveal-on-scroll delay-500 flex flex-col sm:flex-row items-center gap-4 mb-8">
              <a href="#contact" className="w-full sm:w-auto px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-neutral-900 transition-colors duration-300 flex items-center justify-center gap-2 group text-sm md:text-base">
                Get My 650 Tuned
                <iconify-icon icon="solar:arrow-right-linear" className="text-lg group-hover:translate-x-1 transition-transform"></iconify-icon>
              </a>
            </div>

            {/* Standard Trust Element */}
            <div className="reveal-on-scroll delay-600 inline-flex items-center gap-2 text-[11px] md:text-xs font-semibold uppercase tracking-widest text-neutral-500">
              <iconify-icon icon="solar:verified-check-bold" className="text-red-500 text-lg"></iconify-icon>
              One of our most requested and proven upgrades
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
