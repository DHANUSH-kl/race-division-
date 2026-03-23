"use client";

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, type Variants } from 'framer-motion';

// Animation variants for staggered text
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function DynoSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Trigger text animation state based on scroll
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (latest > 0.4 && !showText) {
      setShowText(true);
    } else if (latest < 0.3 && showText) {
      setShowText(false);
    }
  });

  // Image shrink and move values
  const width = useTransform(smoothProgress, [0, 0.5], ["100vw", isMobile ? "90vw" : "45vw"]);
  const height = useTransform(smoothProgress, [0, 0.5], ["100vh", isMobile ? "40vh" : "60vh"]);
  const top = useTransform(smoothProgress, [0, 0.5], ["0vh", isMobile ? "10vh" : "20vh"]);
  const right = useTransform(smoothProgress, [0, 0.5], ["0vw", isMobile ? "5vw" : "5vw"]);
  const imageScale = useTransform(smoothProgress, [0, 0.5], [1.1, 1]);

  return (
    <section ref={containerRef} className="relative h-[200vh] bg-neutral-900 border-y border-white/5 w-full pb-20">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        
        {/* Left Side: Text Content */}
        <div className="max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-end lg:justify-center pb-8 lg:pb-0">
          <motion.div 
            className="w-full lg:w-[45%] flex flex-col justify-center relative z-10 text-white"
            variants={containerVariants}
            initial="hidden"
            animate={showText ? "visible" : "hidden"}
          >
            <motion.span variants={itemVariants} className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-red-500 mb-2 block">
              World Class Tuning Facility
            </motion.span>
            
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tighter text-white mb-2">
              Precision Dyno Tuning
            </motion.h2>
            
            <motion.h3 variants={itemVariants} className="text-lg md:text-xl font-bold tracking-tighter text-white mb-4 mt-4 lg:mt-6 border-t border-white/10 pt-4 lg:pt-6">
              Dynojet 250i Load Control Dyno
            </motion.h3>
            
            <motion.p variants={itemVariants} className="text-xs md:text-sm text-neutral-400 max-w-lg leading-relaxed mb-6 lg:mb-8">
              We use the Dynojet 250i load control dyno which is used by WSBK, MotoGP, Akrapovic and other world's best racing teams. It's a machine from the US, known as the world's most accurate dynamometer, complete with world class SAE certification.
            </motion.p>

            {/* Clean Minimalist Key Benefits List */}
            <motion.ul variants={itemVariants} className="space-y-2 mb-6 lg:mb-8 border-l-2 border-red-500/20 pl-4 py-1">
              {[
                "WSBK & MotoGP Standard Equipment",
                "World's Most Accurate Dynamometer",
                "World Class SAE Certification",
                "Real-time Load Control Simulation"
              ].map((benefit, i) => (
                <li key={i} className="text-xs md:text-sm font-medium text-neutral-300 flex items-center gap-2">
                  <iconify-icon icon="solar:check-circle-bold" className="text-red-500"></iconify-icon>
                  {benefit}
                </li>
              ))}
            </motion.ul>

            {/* Standardized CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mb-4">
              <a href="#contact" className="w-full sm:w-auto px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center gap-2 group text-sm">
                Book a Dyno Session
                <iconify-icon icon="solar:arrow-right-linear" className="text-lg group-hover:translate-x-1 transition-transform"></iconify-icon>
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 text-[10px] md:text-xs font-semibold uppercase tracking-widest text-neutral-500">
              <iconify-icon icon="solar:shield-check-bold" className="text-red-500 text-lg"></iconify-icon>
              Guaranteed Precision & Reliability
            </motion.div>
          </motion.div>
        </div>

        {/* The Animated Image */}
        <motion.div 
          className="absolute z-20 overflow-visible flex items-center justify-center pointer-events-none"
          style={{ 
            width, 
            height, 
            right, 
            top
          }}
        >
          <motion.img 
            src="/250i dynojet.webp" 
            alt="Dynojet 250i Load Control Dyno" 
            className="w-full h-full object-contain origin-center drop-shadow-2xl" 
            style={{ scale: imageScale }}
          />
        </motion.div>

      </div>
    </section>
  );
}
