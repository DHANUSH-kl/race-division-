"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─────────────────────────────────────────────────
   Framer Motion variants — custom prop carries stagger index
───────────────────────────────────────────────── */
const fade = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

/* ─────────────────────────────────────────────────
   Animated Dyno Graph — fully-SVG, crisp text labels
───────────────────────────────────────────────── */
function DynoGraph({ inView }: { inView: boolean }) {
  // Fixed viewBox: 700 × 380
  // oy=68 gives 68px clearance above plot so the tooltip (peakY-52) never clips
  const ox = 44;     // left axis x
  const oy = 68;     // top axis y — tall enough for tooltip above peak
  const plotW = 612;
  const plotH = 260;

  /* HP curve */
  const hpPath = [
    `M ${ox},${oy + plotH * 0.85}`,
    `C ${ox + plotW * 0.3},${oy + plotH * 0.85}`,
    `  ${ox + plotW * 0.4},${oy + plotH * 0.45}`,
    `  ${ox + plotW * 0.7},${oy + plotH * 0.08}`,
    `C ${ox + plotW * 0.85},${oy + plotH * 0.0}`,
    `  ${ox + plotW * 0.95},${oy + plotH * 0.05}`,
    `  ${ox + plotW},${oy + plotH * 0.1}`,
  ].join(" ");

  /* Torque curve */
  const tqPath = [
    `M ${ox},${oy + plotH * 0.55}`,
    `C ${ox + plotW * 0.2},${oy + plotH * 0.35}`,
    `  ${ox + plotW * 0.4},${oy + plotH * 0.30}`,
    `  ${ox + plotW * 0.6},${oy + plotH * 0.32}`,
    `C ${ox + plotW * 0.8},${oy + plotH * 0.34}`,
    `  ${ox + plotW * 0.9},${oy + plotH * 0.52}`,
    `  ${ox + plotW},${oy + plotH * 0.6}`,
  ].join(" ");

  /* HP filled area (curve closed to bottom) */
  const hpArea = [
    `M ${ox},${oy + plotH}`,
    `L ${ox},${oy + plotH * 0.85}`,
    `C ${ox + plotW * 0.3},${oy + plotH * 0.85}`,
    `  ${ox + plotW * 0.4},${oy + plotH * 0.45}`,
    `  ${ox + plotW * 0.7},${oy + plotH * 0.08}`,
    `C ${ox + plotW * 0.85},${oy + plotH * 0.0}`,
    `  ${ox + plotW * 0.95},${oy + plotH * 0.05}`,
    `  ${ox + plotW},${oy + plotH * 0.1}`,
    `L ${ox + plotW},${oy + plotH} Z`,
  ].join(" ");

  /* Peak marker — sits right at the HP curve apex */
  const peakX = ox + plotW * 0.85;
  const peakY = oy + plotH * 0.0; // = oy exactly → tooltip at oy-52 = 16 ✓

  return (
    <div className="relative w-full" style={{ aspectRatio: "700/380" }}>
      <svg
        viewBox="0 0 700 380"
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 w-full h-full"
        aria-label="Dyno power curve graph"
        style={{ shapeRendering: "geometricPrecision", overflow: "visible" }}
      >
        <defs>
          <linearGradient id="hpAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e11d48" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#e11d48" stopOpacity="0" />
          </linearGradient>
          {/* Clip rectangles revealed left-to-right for draw-on effect */}
          <clipPath id="hpClipECU">
            <motion.rect
              x={ox} y={0} height={380}
              initial={{ width: 0 }}
              animate={inView ? { width: plotW } : { width: 0 }}
              transition={{ duration: 2.4, delay: 0.5, ease: "easeInOut" }}
            />
          </clipPath>
          <clipPath id="tqClipECU">
            <motion.rect
              x={ox} y={0} height={380}
              initial={{ width: 0 }}
              animate={inView ? { width: plotW } : { width: 0 }}
              transition={{ duration: 2.4, delay: 0.2, ease: "easeInOut" }}
            />
          </clipPath>
        </defs>

        {/* ── Grid ── */}
        {[0.25, 0.5, 0.75, 1].map((t) => (
          <line key={`h${t}`}
            x1={ox} y1={oy + plotH * (1 - t)} x2={ox + plotW} y2={oy + plotH * (1 - t)}
            stroke="rgba(255,255,255,0.06)" strokeWidth={1}
          />
        ))}
        {[0.2, 0.4, 0.6, 0.8, 1].map((t) => (
          <line key={`v${t}`}
            x1={ox + plotW * t} y1={oy} x2={ox + plotW * t} y2={oy + plotH}
            stroke="rgba(255,255,255,0.06)" strokeWidth={1}
          />
        ))}

        {/* ── Axes ── */}
        <line x1={ox}           y1={oy}          x2={ox}           y2={oy + plotH} stroke="rgba(255,255,255,0.12)" strokeWidth={1} />
        <line x1={ox}           y1={oy + plotH}  x2={ox + plotW}   y2={oy + plotH} stroke="rgba(255,255,255,0.12)" strokeWidth={1} />

        {/* ── HP filled area (clipped) ── */}
        <g clipPath="url(#hpClipECU)">
          <motion.path
            d={hpArea} fill="url(#hpAreaGrad)"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.5, duration: 1.2 }}
          />
        </g>

        {/* ── Torque line (clipped) ── */}
        <g clipPath="url(#tqClipECU)">
          <path d={tqPath} fill="none" stroke="#525252" strokeWidth={2} strokeLinecap="round" />
        </g>

        {/* ── HP line (clipped) ── */}
        <g clipPath="url(#hpClipECU)">
          <path d={hpPath} fill="none" stroke="#e11d48" strokeWidth={2.5} strokeLinecap="round" />
        </g>

        {/* ── Y-Axis Left labels — HP ── */}
        {["200", "150", "100", "50"].map((val, i) => (
          <text key={val}
            x={ox - 6} y={oy + plotH * (i / 4) + 4}
            textAnchor="end" fontSize={11}
            fontFamily="ui-monospace,SFMono-Regular,Menlo,monospace"
            fill="rgba(163,163,163,0.85)"
          >{val}</text>
        ))}

        {/* ── Y-Axis Right labels — TQ ── */}
        {["120", "90", "60", "30"].map((val, i) => (
          <text key={val}
            x={ox + plotW + 6} y={oy + plotH * (i / 4) + 4}
            textAnchor="start" fontSize={11}
            fontFamily="ui-monospace,SFMono-Regular,Menlo,monospace"
            fill="rgba(163,163,163,0.85)"
          >{val}</text>
        ))}

        {/* ── X-Axis labels — RPM ── */}
        {["2k", "4k", "6k", "8k", "10k", "12k"].map((label, i) => (
          <text key={label}
            x={ox + plotW * ((i + 0.5) / 6) + plotW / 12}
            y={oy + plotH + 22}
            textAnchor="middle" fontSize={11}
            fontFamily="ui-monospace,SFMono-Regular,Menlo,monospace"
            fill="rgba(163,163,163,0.85)"
          >{label}</text>
        ))}

        {/* ── HP axis label (rotated) ── */}
        <text
          x={ox - 28} y={oy + plotH / 2}
          textAnchor="middle" fontSize={10}
          fontFamily="ui-monospace,SFMono-Regular,Menlo,monospace"
          fill="rgba(163,163,163,0.45)"
          transform={`rotate(-90,${ox - 28},${oy + plotH / 2})`}
        >HP</text>

        {/* ── TQ axis label (rotated) ── */}
        <text
          x={ox + plotW + 36} y={oy + plotH / 2}
          textAnchor="middle" fontSize={10}
          fontFamily="ui-monospace,SFMono-Regular,Menlo,monospace"
          fill="rgba(163,163,163,0.45)"
          transform={`rotate(90,${ox + plotW + 36},${oy + plotH / 2})`}
        >NM</text>

        {/* ── Peak marker dot ── */}
        <motion.circle
          cx={peakX} cy={peakY} r={7}
          fill="#0a0a0a" stroke="#e11d48" strokeWidth={2.5}
          style={{ filter: "drop-shadow(0 0 6px rgba(225,29,72,0.6))" }}
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ delay: 2.2, duration: 0.5, type: "spring", stiffness: 200 }}
        />

        {/* ── Peak tooltip ── */}
        <motion.g
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ delay: 2.45, duration: 0.4, ease: "easeOut" }}
        >
          {/* Tooltip box — sits 12px above the peak marker */}
          <rect
            x={peakX - 50} y={peakY - 60}
            width={100} height={46}
            rx={8}
            fill="rgba(10,10,10,0.96)" stroke="rgba(255,255,255,0.13)" strokeWidth={1}
          />
          {/* Connector tick */}
          <line
            x1={peakX} y1={peakY - 14}
            x2={peakX} y2={peakY - 8}
            stroke="rgba(225,29,72,0.5)" strokeWidth={1}
          />
          <text
            x={peakX} y={peakY - 38}
            textAnchor="middle" fontSize={14} fontWeight="700"
            fontFamily="ui-monospace,SFMono-Regular,Menlo,monospace"
            fill="white"
          >194 WHP</text>
          <text
            x={peakX} y={peakY - 21}
            textAnchor="middle" fontSize={11}
            fontFamily="ui-monospace,SFMono-Regular,Menlo,monospace"
            fill="rgba(200,200,200,0.9)"
          >@ 11.5k RPM</text>
        </motion.g>
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   Data
───────────────────────────────────────────────── */
const ecuFeatures = [
  { icon: "solar:settings-linear",   title: "Optimized Mapping",         desc: "Custom fueling and ignition mapping designed specifically for maximum performance and your unique hardware setup." },
  { icon: "solar:temperature-linear", title: "Thermal Management",       desc: "Reduce operating engine temperatures by ~10°C via precise radiator fan control optimization." },
  { icon: "solar:scissors-linear",   title: "Remove Servo Dependency",   desc: "Eliminate FI errors when removing the exhaust servo motor. No need to spend ₹6–7k on aftermarket servo buddies." },
  { icon: "solar:lock-unlocked-linear", title: "Limit Removal",          desc: "Safely extend RPM limiters and completely remove factory top speed restrictions." },
  { icon: "solar:bolt-linear",       title: "Throttle & Quickshift",     desc: "Unlock sharper throttle response, enhanced quickshifter behavior, and significantly reduced shift lag." },
  { icon: "solar:waterdrops-linear", title: "Injector Balancing",        desc: "Custom injector balancing and fuel ratio tuning ensuring high RPM efficiency and engine safety." },
];

const tuneModes = [
  { icon: "solar:flag-linear",      title: "Drag Tune",    desc: "Maximum torque output for faster 1/4 mile times.",                          badge: "Aggressive" },
  { icon: "solar:stopwatch-linear", title: "Track Tune",   desc: "Smoother, highly controlled, and responsive power delivery.",                badge: "Linear" },
  { icon: "solar:map-linear",       title: "Sunday Ride",  desc: "Balanced performance with enhanced street comfort.",                         badge: "Balanced" },
];

const premiumItems = [
  { title: "Autoblipper Activation",    desc: "Available for specific models (e.g., ZX-10R)." },
  { title: "Pops & Bangs",             desc: "Custom flame tunes available upon request." },
  { title: "Throttle Response Curves", desc: "Fine-tuned mapping per gear and riding mode." },
];

/* ─────────────────────────────────────────────────
   ECUSection — main export
───────────────────────────────────────────────── */
export default function ECUSection() {
  const graphRef    = useRef<HTMLDivElement>(null);
  const capRef      = useRef<HTMLDivElement>(null);
  const modesRef    = useRef<HTMLDivElement>(null);

  const graphInView = useInView(graphRef,  { once: true, amount: 0.25 });
  const capInView   = useInView(capRef,    { once: true, amount: 0.2  });
  const modesInView = useInView(modesRef,  { once: true, amount: 0.2  });

  return (
    <section className="bg-[#050505] relative py-24 md:py-32 overflow-hidden">

      {/* Subtle dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage:
            "linear-gradient(to right,rgba(255,255,255,0.025) 1px,transparent 1px)," +
            "linear-gradient(to bottom,rgba(255,255,255,0.025) 1px,transparent 1px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-32">

        {/* ══════════════════════════════════════════
            Section 1 — Dyno Analysis
        ══════════════════════════════════════════ */}
        <div ref={graphRef}>

          {/* Heading */}
          <motion.div className="flex items-center gap-3 mb-8"
            custom={0} variants={fade} initial="hidden"
            animate={graphInView ? "show" : "hidden"}
          >
            <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center">
              <iconify-icon icon="solar:chart-square-linear" className="text-white text-xl" />
            </div>
            <h2 className="text-3xl font-medium tracking-tight text-white">Precision Dyno Analysis</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Graph card */}
            <motion.div
              className="md:col-span-2 p-6 md:p-8 rounded-3xl bg-neutral-900/40 border border-white/5 relative overflow-hidden group"
              style={{ boxShadow: "0 0 40px -10px rgba(225,29,72,0.05)" }}
              custom={1} variants={fade} initial="hidden"
              animate={graphInView ? "show" : "hidden"}
              whileHover={{ boxShadow: "0 0 40px -10px rgba(225,29,72,0.18)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />

              <h3 className="text-xl font-medium tracking-tight text-white mb-1 relative z-10">
                Real-Time Power Delivery
              </h3>
              <p className="text-sm text-neutral-500 mb-4 relative z-10">
                Identify smoothness of delivery via detailed curve mapping.
              </p>

              {/* Legend */}
              <div className="flex items-center gap-5 mb-2 relative z-10">
                <div className="flex items-center gap-1.5">
                  <span className="block w-5 h-0.5 bg-red-500 rounded-full" />
                  <span className="text-xs font-mono text-neutral-400">HP</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="block w-5 h-0.5 bg-neutral-500 rounded-full" />
                  <span className="text-xs font-mono text-neutral-400">Torque (Nm)</span>
                </div>
              </div>

              <div className="relative z-10">
                <DynoGraph inView={graphInView} />
              </div>
            </motion.div>

            {/* Stat cards */}
            <div className="flex flex-col gap-4">
              <motion.div
                className="flex-1 p-8 rounded-3xl bg-neutral-900/40 border border-white/5 flex flex-col justify-between"
                custom={2} variants={fade} initial="hidden"
                animate={graphInView ? "show" : "hidden"}
              >
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">True WHP</h3>
                  <p className="text-sm text-neutral-500">Actual power on road</p>
                </div>
                <div className="text-5xl font-medium tracking-tight text-white mt-4 font-mono">
                  +14<span className="text-2xl text-red-500">%</span>
                </div>
              </motion.div>

              <motion.div
                className="flex-1 p-8 rounded-3xl bg-neutral-900/40 border border-white/5 flex flex-col justify-between"
                custom={3} variants={fade} initial="hidden"
                animate={graphInView ? "show" : "hidden"}
              >
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">A/F Ratio</h3>
                  <p className="text-sm text-neutral-500">Optimal combustion monitor</p>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <div className="h-2 flex-1 bg-neutral-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-emerald-500 rounded-full"
                      initial={{ width: "0%" }}
                      animate={graphInView ? { width: "65%" } : { width: "0%" }}
                      transition={{ delay: 1.8, duration: 1, ease: "easeOut" }}
                    />
                  </div>
                  <span className="text-lg text-emerald-400 font-mono">13.2</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            Section 2 — ECU Capabilities
        ══════════════════════════════════════════ */}
        <div ref={capRef}>
          <motion.div
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6"
            custom={0} variants={fade} initial="hidden"
            animate={capInView ? "show" : "hidden"}
          >
            <div>
              <h2 className="text-3xl font-medium tracking-tight text-white mb-4">
                Core ECU Capabilities
              </h2>
              <p className="text-base text-neutral-400 max-w-2xl">
                Direct ECU rewriting eliminates the need for piggyback modules. We directly alter the
                factory parameters for seamless integration.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {ecuFeatures.map((f, i) => (
              <motion.div key={f.title} className="flex gap-4"
                custom={i + 1} variants={fade} initial="hidden"
                animate={capInView ? "show" : "hidden"}
              >
                <div className="mt-1 shrink-0">
                  <iconify-icon icon={f.icon} className="text-red-500 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white tracking-tight mb-2">{f.title}</h3>
                  <p className="text-base text-neutral-500">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════
            Section 3 — Tune Modes + Premium Unlockables
        ══════════════════════════════════════════ */}
        <div ref={modesRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Tune modes card */}
          <motion.div
            className="lg:col-span-8 p-8 md:p-10 rounded-3xl bg-neutral-900/40 border border-white/5"
            custom={0} variants={fade} initial="hidden"
            animate={modesInView ? "show" : "hidden"}
          >
            <h2 className="text-3xl font-medium tracking-tight text-white mb-2">
              Application-Specific Modes
            </h2>
            <p className="text-base text-neutral-400 mb-10">
              Select a base profile, then we fully customize the tune based on your exact riding needs and setup.
            </p>

            <div className="space-y-3">
              {tuneModes.map((mode, i) => (
                <motion.div key={mode.title}
                  className="flex items-center justify-between p-5 rounded-2xl bg-black/40 border border-neutral-800 cursor-default"
                  custom={i + 1} variants={fade} initial="hidden"
                  animate={modesInView ? "show" : "hidden"}
                  whileHover={{ borderColor: "rgba(255,255,255,0.18)", backgroundColor: "rgba(0,0,0,0.6)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center border border-neutral-800">
                      <iconify-icon icon={mode.icon} className="text-red-500 text-xl" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">{mode.title}</h4>
                      <p className="text-sm text-neutral-500">{mode.desc}</p>
                    </div>
                  </div>
                  <div className="hidden sm:block px-3 py-1 rounded-full border border-neutral-800 text-xs text-neutral-400">
                    {mode.badge}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Premium unlockables card */}
          <motion.div
            className="lg:col-span-4 p-8 md:p-10 rounded-3xl bg-neutral-900/40 border border-white/5 flex flex-col"
            custom={4} variants={fade} initial="hidden"
            animate={modesInView ? "show" : "hidden"}
          >
            <h2 className="text-3xl font-medium tracking-tight text-white mb-2">
              Premium Unlockables
            </h2>
            <p className="text-base text-neutral-400 mb-8">
              Exclusive features accessed beyond OEM limitations.
            </p>

            <ul className="space-y-6 flex-1">
              {premiumItems.map((item, i) => (
                <motion.li key={item.title} className="flex items-start gap-3"
                  custom={i + 5} variants={fade} initial="hidden"
                  animate={modesInView ? "show" : "hidden"}
                >
                  <iconify-icon
                    icon="solar:check-circle-linear"
                    className="text-red-600 text-2xl shrink-0 mt-0.5"
                  />
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-neutral-500">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#contact"
              className="w-full mt-8 bg-white text-black px-5 py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2"
              whileHover={{ backgroundColor: "#e5e5e5", scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
            >
              Book a Session
              <iconify-icon icon="solar:arrow-right-linear" className="text-xl" />
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
