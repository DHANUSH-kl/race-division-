'use client';
import { useState, useEffect, useRef } from 'react';

function AnimatedCounter({ end, suffix = "", textValue = "" }: { end?: number, suffix?: string, textValue?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (textValue) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number;
          // Dynamically adjust duration based on how large the number is 
          // (small numbers finish faster, large numbers max out at 2.5s)
          const duration = Math.min(2500, Math.max(1200, end! * 20));

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            // Cubic ease out - prevents extreme hang at the very end
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeProgress * end!));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, hasAnimated, textValue]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold tracking-tighter text-red-600 mb-2 drop-shadow-sm">
      {textValue ? textValue : `${count}${suffix}`}
    </span>
  );
}

export default function Achievements() {
  return (
    <section className="py-20 md:py-32 border-y border-black/5 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-x divide-black/5">
                <div className="reveal-on-scroll delay-100 flex flex-col items-center justify-center text-center">
                    <AnimatedCounter end={500} suffix="+" />
                    <span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mt-2">Bikes Tuned</span>
                </div>
                <div className="reveal-on-scroll delay-100 flex flex-col items-center justify-center text-center px-4">
                    <AnimatedCounter end={12} suffix="+" />
                    <span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mt-2">Track Records</span>
                </div>
                <div className="reveal-on-scroll delay-200 flex flex-col items-center justify-center text-center px-4">
                    <AnimatedCounter textValue="AWD" />
                    <span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mt-2">Dyno Facility</span>
                </div>
                <div className="reveal-on-scroll delay-300 flex flex-col items-center justify-center text-center px-4">
                    <AnimatedCounter end={10} />
                    <span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mt-2">Years Exp.</span>
                </div>
            </div>
        </div>
    </section>
  );
}
