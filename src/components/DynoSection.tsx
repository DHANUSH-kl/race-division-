"use client";

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const benefits = [
  "WSBK & MotoGP Standard Equipment",
  "World's Most Accurate Dynamometer",
  "World Class SAE Certification",
  "Real-time Load Control Simulation"
];

export default function DynoSection() {
  const containerRef = useRef<HTMLElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const [showText, setShowText] = useState(false);
  const [showMobileText, setShowMobileText] = useState(false);

  // ── Desktop scroll ────────────────────────────────────────────
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useMotionValueEvent(smooth, "change", (latest) => {
    if (latest > 0.4 && !showText) setShowText(true);
    else if (latest < 0.3 && showText) setShowText(false);
  });

  const dWidth  = useTransform(smooth, [0, 0.5], ["100vw", "45vw"]);
  const dHeight = useTransform(smooth, [0, 0.5], ["100vh", "60vh"]);
  const dTop    = useTransform(smooth, [0, 0.5], ["0vh",   "20vh"]);
  const dRight  = useTransform(smooth, [0, 0.5], ["0vw",   "5vw"]);
  const dScale  = useTransform(smooth, [0, 0.5], [1.1, 1]);

  // ── Mobile scroll ─────────────────────────────────────────────
  const { scrollYProgress: mobileProgress } = useScroll({
    target: mobileRef,
    offset: ["start start", "end end"]
  });
  const mobileSmooth = useSpring(mobileProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useMotionValueEvent(mobileSmooth, "change", (latest) => {
    if (latest > 0.35 && !showMobileText) setShowMobileText(true);
    else if (latest < 0.25 && showMobileText) setShowMobileText(false);
  });

  // Image height shrinks from full viewport to top 42% — content appears below in normal flow
  const mImgHeight  = useTransform(mobileSmooth, [0, 0.5], ["100vh", "36vh"]);
  const mImgScale   = useTransform(mobileSmooth, [0, 0.5], [1.12, 1]);
  const mContentOp  = useTransform(mobileSmooth, [0.3, 0.55], [0, 1]);
  const mContentY   = useTransform(mobileSmooth, [0.3, 0.55], [30, 0]);

  return (
    <section ref={containerRef} className="bg-neutral-900 border-y border-white/5 w-full">

      {/* ══════════════════════════════════════════
          MOBILE: Scroll-driven, flex-column — image shrinks,
          content flows below (zero absolute positioning)
          ══════════════════════════════════════════ */}
      <div ref={mobileRef} className="lg:hidden relative h-[240vh]">
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col">

          {/* Image block — height animates 100vh → 42vh */}
          <motion.div
            className="w-full flex-shrink-0 flex items-center justify-center overflow-hidden"
            style={{ height: mImgHeight }}
          >
            <motion.img
              src="/250i dynojet.png"
              alt="Dynojet 250i Load Control Dyno"
              className="w-full h-full object-contain drop-shadow-2xl px-6"
              style={{ scale: mImgScale }}
            />
          </motion.div>

          {/* Content block — fills remaining space below image */}
          <motion.div
            className="flex-1 overflow-hidden px-6 pt-4 pb-4 flex flex-col justify-start"
            style={{ opacity: mContentOp, y: mContentY }}
          >
            <div className="border-t border-white/10 mb-3" />
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={showMobileText ? "visible" : "hidden"}
            >
              <motion.span variants={itemVariants} className="text-[10px] font-semibold tracking-widest uppercase text-red-500 mb-2 block">
                World Class Tuning Facility
              </motion.span>

              <motion.h2 variants={itemVariants} className="text-3xl font-semibold tracking-tighter text-white mb-1">
                Precision Dyno Tuning
              </motion.h2>

              <motion.h3 variants={itemVariants} className="text-sm font-bold tracking-tighter text-white mb-3 mt-4 border-t border-white/10 pt-4">
                Dynojet 250i Load Control Dyno
              </motion.h3>

              <motion.p variants={itemVariants} className="text-xs text-neutral-400 leading-relaxed mb-4">
                We use the Dynojet 250i load control dyno which is used by WSBK, MotoGP, Akrapovic and other world's best racing teams — the world's most accurate dynamometer with SAE certification.
              </motion.p>

              <motion.ul variants={itemVariants} className="space-y-1.5 mb-4 border-l-2 border-red-500/20 pl-3">
                {benefits.map((b, i) => (
                  <li key={i} className="text-xs font-medium text-neutral-300 flex items-center gap-2">
                    <iconify-icon icon="solar:check-circle-bold" className="text-red-500 shrink-0"></iconify-icon>
                    {b}
                  </li>
                ))}
              </motion.ul>

              <motion.div variants={itemVariants} className="mb-3">
                <a href="#contact" className="w-full px-5 py-3 bg-red-600 text-white font-semibold rounded-full flex items-center justify-center gap-2 group text-sm">
                  Book a Dyno Session
                  <iconify-icon icon="solar:arrow-right-linear" className="text-base group-hover:translate-x-1 transition-transform"></iconify-icon>
                </a>
              </motion.div>

              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-neutral-500">
                <iconify-icon icon="solar:shield-check-bold" className="text-red-500 text-sm"></iconify-icon>
                Guaranteed Precision &amp; Reliability
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* ══════════════════════════════════════════
          DESKTOP: Scroll-driven parallax (unchanged)
          ══════════════════════════════════════════ */}
      <div className="hidden lg:block relative h-[200vh] pb-20">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-center">
            <motion.div
              className="w-full lg:w-[45%] flex flex-col justify-center relative z-10 text-white"
              variants={containerVariants}
              initial="hidden"
              animate={showText ? "visible" : "hidden"}
            >
              <motion.span variants={itemVariants} className="text-xs font-semibold tracking-widest uppercase text-red-500 mb-2 block">
                World Class Tuning Facility
              </motion.span>
              <motion.h2 variants={itemVariants} className="text-4xl xl:text-5xl font-semibold tracking-tighter text-white mb-2">
                Precision Dyno Tuning
              </motion.h2>
              <motion.h3 variants={itemVariants} className="text-xl font-bold tracking-tighter text-white mb-4 mt-6 border-t border-white/10 pt-6">
                Dynojet 250i Load Control Dyno
              </motion.h3>
              <motion.p variants={itemVariants} className="text-sm text-neutral-400 max-w-lg leading-relaxed mb-8">
                We use the Dynojet 250i load control dyno which is used by WSBK, MotoGP, Akrapovic and other world's best racing teams. It's a machine from the US, known as the world's most accurate dynamometer, complete with world class SAE certification.
              </motion.p>
              <motion.ul variants={itemVariants} className="space-y-2 mb-8 border-l-2 border-red-500/20 pl-4 py-1">
                {benefits.map((b, i) => (
                  <li key={i} className="text-sm font-medium text-neutral-300 flex items-center gap-2">
                    <iconify-icon icon="solar:check-circle-bold" className="text-red-500"></iconify-icon>
                    {b}
                  </li>
                ))}
              </motion.ul>
              <motion.div variants={itemVariants} className="flex items-center gap-4 mb-4">
                <a href="#contact" className="px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-2 group text-sm">
                  Book a Dyno Session
                  <iconify-icon icon="solar:arrow-right-linear" className="text-lg group-hover:translate-x-1 transition-transform"></iconify-icon>
                </a>
              </motion.div>
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                <iconify-icon icon="solar:shield-check-bold" className="text-red-500 text-lg"></iconify-icon>
                Guaranteed Precision &amp; Reliability
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="absolute z-20 overflow-visible flex items-center justify-center pointer-events-none"
            style={{ width: dWidth, height: dHeight, right: dRight, top: dTop }}
          >
            <motion.img
              src="/250i dynojet.png"
              alt="Dynojet 250i Load Control Dyno"
              className="w-full h-full object-contain origin-center drop-shadow-2xl"
              style={{ scale: dScale }}
            />
          </motion.div>
        </div>
      </div>

    </section>
  );
}