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
    <span ref={ref} className="text-3xl md:text-4xl font-semibold tracking-tighter text-neutral-100 mb-2">
      {textValue ? textValue : `${count}${suffix}`}
    </span>
  );
}

export default function Achievements() {
  return (
    <section className="py-20 md:py-32 border-y border-white/5 bg-neutral-950/50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                <div className="reveal-on-scroll delay-100 flex flex-col items-center justify-center text-center">
                    <AnimatedCounter end={500} suffix="+" />
                    <span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Bikes Tuned</span>
                </div>
                <div className="reveal-on-scroll delay-100 flex flex-col items-center text-center px-4">
                    <AnimatedCounter end={12} suffix="+" />
                    <span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Track Records</span>
                </div>
                <div className="reveal-on-scroll delay-200 flex flex-col items-center text-center px-4">
                    <AnimatedCounter textValue="AWD" />
                    <span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Dyno Facility</span>
                </div>
                <div className="reveal-on-scroll delay-300 flex flex-col items-center text-center px-4">
                    <AnimatedCounter end={10} />
                    <span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Years Experience</span>
                </div>
            </div>
        </div>
    </section>
  );
}
