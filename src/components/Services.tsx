export default function Services() {
  return (
    <section id="services" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-16 reveal-on-scroll">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-neutral-100 mb-4">Precision Engineering</h2>
                <p className="text-sm md:text-base text-neutral-500 max-w-xl">Comprehensive performance solutions tailored to your machine's exact geometry and engine characteristics.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-on-scroll delay-100">
                {/* Main Service */}
                <div className="md:col-span-2 group relative bg-neutral-900/30 border border-white/5 rounded-3xl p-8 hover:bg-neutral-900/50 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[300px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    <iconify-icon icon="solar:cpu-linear" style={{ strokeWidth: "1.5px" }} className="text-4xl text-neutral-100 mb-6"></iconify-icon>
                    <div>
                        <h3 className="text-xl font-semibold tracking-tight text-neutral-100 mb-3">Custom ECU Remapping</h3>
                        <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-md">
                            Unlock hidden horsepower, smooth out throttle response, and optimize fuel mapping. We build custom maps based on your specific modifications and riding style, ensuring reliable power delivery.
                        </p>
                    </div>
                </div>

                {/* Secondary Service */}
                <div className="group relative bg-neutral-900/30 border border-white/5 rounded-3xl p-8 hover:bg-neutral-900/50 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[300px]">
                    <iconify-icon icon="solar:graph-up-linear" style={{ strokeWidth: "1.5px" }} className="text-4xl text-neutral-100 mb-6"></iconify-icon>
                    <div>
                        <h3 className="text-xl font-semibold tracking-tight text-neutral-100 mb-3">Dyno Tuning</h3>
                        <p className="text-sm text-neutral-400 font-light leading-relaxed">
                            Real-time diagnostics and tuning on our state-of-the-art dynamometer. Verify gains and ensure optimal air/fuel ratios across the entire RPM range.
                        </p>
                    </div>
                </div>

                {/* Secondary Service */}
                <div className="group relative bg-neutral-900/30 border border-white/5 rounded-3xl p-8 hover:bg-neutral-900/50 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[300px]">
                    <iconify-icon icon="solar:settings-linear" style={{ strokeWidth: "1.5px" }} className="text-4xl text-neutral-100 mb-6"></iconify-icon>
                    <div>
                        <h3 className="text-xl font-semibold tracking-tight text-neutral-100 mb-3">Performance Upgrades</h3>
                        <p className="text-sm text-neutral-400 font-light leading-relaxed">
                            From full exhaust systems and high-flow intakes to quickshifters and suspension overhauls. We supply and install premium aftermarket components.
                        </p>
                    </div>
                </div>

                {/* Wide Info Card */}
                <div className="md:col-span-2 group relative bg-neutral-900/30 border border-white/5 rounded-3xl p-8 hover:bg-neutral-900/50 transition-all duration-500 overflow-hidden flex items-center justify-between min-h-[150px]">
                    <div>
                        <h3 className="text-xl font-semibold tracking-tight text-neutral-100 mb-1">Race Prep &amp; Build</h3>
                        <p className="text-sm text-neutral-400 font-light">Complete track day preparation and competitive race bike builds.</p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <iconify-icon icon="solar:arrow-right-linear" style={{ strokeWidth: "1.5px" }} className="text-neutral-100"></iconify-icon>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
