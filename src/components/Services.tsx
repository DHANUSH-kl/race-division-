import Image from 'next/image';

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-16">
                <h2 className="reveal-on-scroll text-3xl md:text-4xl font-semibold tracking-tighter text-neutral-900 mb-4">Performance, Engineered for Real Results</h2>
                <p className="reveal-on-scroll delay-100 text-sm md:text-base text-neutral-500 max-w-xl">No guesswork. No generic tunes. Every upgrade is tested, measured, and built for how you actually ride.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {/* Main Service */}
                <div className="reveal-on-scroll zoom-reveal delay-100 lg:col-span-2 group relative bg-neutral-900/30 border border-white/5 rounded-3xl p-8 hover:bg-neutral-900/50 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[300px]">
                    <Image src="/Custom ECU Remapping.jpeg" alt="Custom ECU Remapping" fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover object-center opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90"></div>
                    <div className="relative z-20 flex flex-col justify-between h-full">
                        <iconify-icon icon="solar:cpu-linear" style={{ strokeWidth: "1.5px" }} className="text-4xl text-neutral-100 mb-6 group-hover:scale-110 transition-transform duration-500 origin-left"></iconify-icon>
                        <div>
                            <h3 className="text-xl font-semibold tracking-tight text-white mb-3">Custom ECU Remapping</h3>
                            <p className="text-sm text-neutral-300 font-light leading-relaxed max-w-md">
                                Stop riding below your bike’s potential. We fine-tune your ECU to unlock real horsepower, sharper throttle response, and smoother power delivery — based on your exact setup and riding style.
                            </p>
                            <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-neutral-400 tracking-wide">
                                <div className="w-1.5 h-1.5 rounded-full bg-neutral-500"></div>
                                Built for: Track | Drag | Street | Mileage
                            </div>
                        </div>
                    </div>
                </div>

                {/* Secondary Service */}
                <div className="reveal-on-scroll zoom-reveal delay-200 group relative bg-neutral-900/30 border border-white/5 rounded-3xl p-8 hover:bg-neutral-900/50 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[300px]">
                    <Image src="/dyno tuning.jpeg" alt="Dyno Tuning" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90"></div>
                    <div className="relative z-20 flex flex-col justify-between h-full">
                        <iconify-icon icon="solar:graph-up-linear" style={{ strokeWidth: "1.5px" }} className="text-4xl text-neutral-100 mb-6 group-hover:scale-110 transition-transform duration-500 origin-left"></iconify-icon>
                        <div>
                            <h3 className="text-xl font-semibold tracking-tight text-white mb-3">Dyno Testing &amp; Tuning</h3>
                            <p className="text-sm text-neutral-300 font-light leading-relaxed">
                                Know exactly what your bike is capable of. We measure real horsepower, torque, and air-fuel ratios on our dyno — then optimize everything live to ensure maximum performance across the entire RPM range.
                            </p>
                            <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-neutral-400 tracking-wide">
                                <div className="w-1.5 h-1.5 rounded-full bg-neutral-500"></div>
                                No assumptions. Only data-backed tuning.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Secondary Service */}
                <div className="reveal-on-scroll zoom-reveal delay-300 group relative bg-neutral-900/30 border border-white/5 rounded-3xl p-8 hover:bg-neutral-900/50 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[300px]">
                    <Image src="/Performance Upgrades.jpeg" alt="Performance Upgrades" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90"></div>
                    <div className="relative z-20 flex flex-col justify-between h-full">
                        <iconify-icon icon="solar:settings-linear" style={{ strokeWidth: "1.5px" }} className="text-4xl text-neutral-100 mb-6 group-hover:scale-110 transition-transform duration-500 origin-left"></iconify-icon>
                        <div>
                            <h3 className="text-xl font-semibold tracking-tight text-white mb-3">Performance Upgrades</h3>
                            <p className="text-sm text-neutral-300 font-light leading-relaxed">
                                More than just parts — complete performance transformation. From exhaust systems and intakes to quickshifters and suspension setups, we upgrade your bike with components that actually improve performance.
                            </p>
                            <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-neutral-400 tracking-wide">
                                <div className="w-1.5 h-1.5 rounded-full bg-neutral-500"></div>
                                Installed, tested, and tuned together.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wide Info Card */}
                <div className="reveal-on-scroll zoom-reveal delay-500 md:col-span-2 group relative bg-neutral-900/30 border border-white/5 rounded-3xl p-8 hover:bg-neutral-900/50 transition-all duration-500 overflow-hidden flex items-center justify-between min-h-[150px]">
                    <Image src="/Race Prep & Build.jpeg" alt="Race Prep & Build" fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover object-center opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90"></div>
                    <div className="relative z-20 w-full flex justify-between items-center h-full">
                        <div className="max-w-xl">
                            <h3 className="text-xl font-semibold tracking-tight text-white mb-2">Race Prep &amp; Custom Builds</h3>
                            <p className="text-sm text-neutral-300 font-light mb-3">
                                Built for riders who want more than "fast." We prepare and build track-ready machines engineered for competition — the same expertise behind record-setting bikes.
                            </p>
                            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 tracking-wide">
                                <div className="w-1.5 h-1.5 rounded-full bg-neutral-500"></div>
                                Trusted on India’s fastest builds.
                            </div>
                        </div>
                        <div className="h-12 w-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0 ml-4 backdrop-blur-sm">
                            <iconify-icon icon="solar:arrow-right-linear" style={{ strokeWidth: "1.5px" }} className="text-white drop-shadow-md"></iconify-icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
