export default function Results() {
  return (
    <section id="results" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="reveal-on-scroll">
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-neutral-100 mb-6">Numbers <br /><span className="text-neutral-500">Don't Lie.</span></h2>
                    <p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed mb-8 max-w-md">
                        Our tuning philosophy is built on data, not guesswork. Every map is verified on the dyno to ensure smooth power delivery, eliminating flat spots and maximizing peak performance safely.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="border-l-2 border-neutral-700 pl-4">
                            <h4 className="text-neutral-100 font-medium text-sm mb-1">Average HP Gain</h4>
                            <p className="text-3xl font-semibold tracking-tighter text-white">+12-15%</p>
                        </div>
                        <div className="border-l-2 border-neutral-700 pl-4">
                            <h4 className="text-neutral-100 font-medium text-sm mb-1">Throttle Response</h4>
                            <p className="text-sm text-neutral-400">Eliminated factory restrictions</p>
                        </div>
                        <div className="border-l-2 border-neutral-700 pl-4">
                            <h4 className="text-neutral-100 font-medium text-sm mb-1">Engine Temperatures</h4>
                            <p className="text-sm text-neutral-400">Optimized fueling for cooler running</p>
                        </div>
                    </div>
                </div>

                <div className="relative h-[400px] w-full bg-neutral-900/20 border border-white/5 rounded-3xl p-6 flex flex-col justify-between reveal-on-scroll delay-200">
                    <div className="flex justify-between text-xs font-medium text-neutral-600 mb-4 border-b border-white/5 pb-2">
                        <span>Torque (Nm)</span>
                        <span>Power (HP)</span>
                    </div>
                    
                    <div className="relative flex-grow w-full overflow-hidden">
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                            <div className="w-full h-px bg-white/5"></div>
                            <div className="w-full h-px bg-white/5"></div>
                            <div className="w-full h-px bg-white/5"></div>
                            <div className="w-full h-px bg-white/5"></div>
                            <div className="w-full h-px bg-white/5"></div>
                        </div>
                        
                        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                            <path d="M0,90 Q30,80 50,60 T100,40" fill="none" stroke="#404040" strokeWidth="2" strokeDasharray="4"></path>
                        </svg>
                        
                        <svg className="absolute inset-0 w-full h-full drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" preserveAspectRatio="none" viewBox="0 0 100 100">
                            <path d="M0,85 Q30,60 50,30 T100,10" fill="none" stroke="#ffffff" strokeWidth="2"></path>
                        </svg>

                        <div className="absolute top-[10%] right-[5%] w-3 h-3 bg-white rounded-full shadow-[0_0_10px_#fff]"></div>
                    </div>

                    <div className="flex justify-between text-xs font-medium text-neutral-600 mt-4 border-t border-white/5 pt-2">
                        <span>RPM</span>
                        <div className="flex gap-4">
                            <span className="flex items-center gap-1"><div className="w-2 h-0.5 bg-neutral-600"></div> Stock</span>
                            <span className="flex items-center gap-1"><div className="w-2 h-0.5 bg-white"></div> Tuned</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
