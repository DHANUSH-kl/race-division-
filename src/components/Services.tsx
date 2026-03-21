import Image from 'next/image';

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-16">
                <h2 className="reveal-on-scroll text-3xl md:text-4xl font-semibold tracking-tighter text-neutral-100 mb-4">Precision Engineering</h2>
                <p className="reveal-on-scroll delay-100 text-sm md:text-base text-neutral-500 max-w-xl">Comprehensive performance solutions tailored to your machine's exact geometry and engine characteristics.</p>
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
                                Unlock hidden horsepower, smooth out throttle response, and optimize fuel mapping. We build custom maps based on your specific modifications and riding style, ensuring reliable power delivery.
                            </p>
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
                            <h3 className="text-xl font-semibold tracking-tight text-white mb-3">Dyno Tuning</h3>
                            <p className="text-sm text-neutral-300 font-light leading-relaxed">
                                Real-time diagnostics and tuning on our state-of-the-art dynamometer. Verify gains and ensure optimal air/fuel ratios across the entire RPM range.
                            </p>
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
                                From full exhaust systems and high-flow intakes to quickshifters and suspension overhauls. We supply and install premium aftermarket components.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Wide Info Card */}
                <div className="reveal-on-scroll zoom-reveal delay-500 md:col-span-2 group relative bg-neutral-900/30 border border-white/5 rounded-3xl p-8 hover:bg-neutral-900/50 transition-all duration-500 overflow-hidden flex items-center justify-between min-h-[150px]">
                    <Image src="/Race Prep & Build.jpeg" alt="Race Prep & Build" fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover object-center opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90"></div>
                    <div className="relative z-20 w-full flex justify-between items-center h-full">
                        <div>
                            <h3 className="text-xl font-semibold tracking-tight text-white mb-1">Race Prep &amp; Build</h3>
                            <p className="text-sm text-neutral-300 font-light">Complete track day preparation and competitive race bike builds.</p>
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
