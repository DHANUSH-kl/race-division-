"use client";

import Image from 'next/image';
import { useRef, useEffect } from 'react';

export default function Platforms() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Use refs instead of state to prevent React re-renders on every scroll tick
  const currentTranslate = useRef(0);
  const targetTranslate = useRef(0);
  const maxScroll = useRef(0);
  const rafId = useRef<number>();

  useEffect(() => {
    const updateMaxScroll = () => {
      if (scrollRef.current) {
        const scrollWidth = scrollRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        maxScroll.current = Math.max(0, scrollWidth - viewportWidth + 48);
      }
    };
    
    updateMaxScroll();
    window.addEventListener('resize', updateMaxScroll);
    
    const handleScroll = () => {
      if (!containerRef.current) return;
      if (window.innerWidth >= 1024) return; // Disable horizontal scroll jacking on desktop
      
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const scrolled = -top;
      const totalScrollable = height - windowHeight;
      
      let progress = 0;
      if (scrolled >= 0 && scrolled <= totalScrollable) {
        progress = scrolled / totalScrollable;
      } else if (scrolled > totalScrollable) {
        progress = 1;
      }
      
      targetTranslate.current = progress * maxScroll.current;
    };

    const render = () => {
      // Linear interpolation (lerp) for buttery AWWARDS smoothness completely independent of CSS transitions
      currentTranslate.current += (targetTranslate.current - currentTranslate.current) * 0.08;
      
      if (scrollRef.current && window.innerWidth < 1024) {
          scrollRef.current.style.transform = `translate3d(-${currentTranslate.current}px, 0, 0)`;
      } else if (scrollRef.current && window.innerWidth >= 1024) {
          scrollRef.current.style.transform = 'none';
      }
      
      rafId.current = requestAnimationFrame(render);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    render();
    
    return () => {
      window.removeEventListener('resize', updateMaxScroll);
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <section ref={containerRef} className="h-[250vh] lg:h-auto relative w-full bg-[#0a0a0a]">
        <div className="sticky lg:relative top-0 h-screen lg:h-auto py-20 lg:py-32 w-full overflow-hidden flex flex-col justify-center border-y border-white/5 bg-neutral-950/30">
            
            <div className="max-w-7xl mx-auto px-6 mb-12 w-full shrink-0 relative z-20">
                <div className="lg:hidden inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-medium text-neutral-300 mb-6 backdrop-blur-md uppercase tracking-widest">
                    <span>Keep Scrolling</span> <iconify-icon icon="solar:arrow-down-linear"></iconify-icon>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-neutral-100 drop-shadow-lg">Platforms We Master</h2>
            </div>
            
            <div className="max-w-7xl mx-auto w-full px-0 lg:px-6">
                {/* The dynamically translated horizontal rail on mobile, static grid on desktop */}
                <div 
                    ref={scrollRef}
                    className="flex lg:grid lg:grid-cols-4 px-6 lg:px-0 space-x-6 lg:space-x-0 lg:gap-6 w-[max-content] lg:w-full will-change-transform"
                >
                    {/* Card 1 */}
                    <div className="shrink-0 w-[280px] sm:w-[320px] lg:w-full aspect-[4/5] lg:aspect-[3/4] rounded-2xl p-6 lg:p-8 flex flex-col justify-end relative group overflow-hidden border border-white/5 bg-neutral-900/50 shadow-2xl">
                        <Image src="/litre class.jpg" alt="European Exotics" fill sizes="(max-width: 1024px) 320px, 25vw" className="object-cover object-center opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent z-10 opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>
                        <div className="relative z-20">
                            <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2 group-hover:text-neutral-300 transition-colors">Liter Class</p>
                            <h3 className="text-xl md:text-2xl font-semibold tracking-tighter text-neutral-100 group-hover:text-white transition-colors">European Exotics</h3>
                        </div>
                    </div>
                    
                    {/* Card 2 */}
                    <div className="shrink-0 w-[280px] sm:w-[320px] lg:w-full aspect-[4/5] lg:aspect-[3/4] rounded-2xl p-6 lg:p-8 flex flex-col justify-end relative group overflow-hidden border border-white/5 bg-neutral-900/50 shadow-2xl">
                        <Image src="/inline 4.png" alt="Japanese Superbikes" fill sizes="(max-width: 1024px) 320px, 25vw" className="object-cover object-center opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent z-10 opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>
                        <div className="relative z-20">
                            <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2 group-hover:text-neutral-300 transition-colors">Inline Four</p>
                            <h3 className="text-xl md:text-2xl font-semibold tracking-tighter text-neutral-100 group-hover:text-white transition-colors">Japanese Superbikes</h3>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="shrink-0 w-[280px] sm:w-[320px] lg:w-full aspect-[4/5] lg:aspect-[3/4] rounded-2xl p-6 lg:p-8 flex flex-col justify-end relative group overflow-hidden border border-white/5 bg-neutral-900/50 shadow-2xl">
                        <Image src="/600cc.avif" alt="Street & Track 600s" fill sizes="(max-width: 1024px) 320px, 25vw" className="object-cover object-center opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent z-10 opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>
                        <div className="relative z-20">
                            <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2 group-hover:text-neutral-300 transition-colors">Middleweight</p>
                            <h3 className="text-xl md:text-2xl font-semibold tracking-tighter text-neutral-100 group-hover:text-white transition-colors">Street &amp; Track 600s</h3>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="shrink-0 w-[280px] sm:w-[320px] lg:w-full aspect-[4/5] lg:aspect-[3/4] rounded-2xl p-6 lg:p-8 flex flex-col justify-end relative group overflow-hidden border border-white/5 bg-neutral-900/50 shadow-2xl">
                        <Image src="/heavyweight adv.jpeg" alt="Heavyweight ADVs" fill sizes="(max-width: 1024px) 320px, 25vw" className="object-cover object-center opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent z-10 opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>
                        <div className="relative z-20">
                            <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2 group-hover:text-neutral-300 transition-colors">Adventure</p>
                            <h3 className="text-xl md:text-2xl font-semibold tracking-tighter text-neutral-100 group-hover:text-white transition-colors">Heavyweight ADVs</h3>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  );
}
