export default function Results() {
  return (
    <section id="results" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="reveal-on-scroll text-3xl md:text-5xl font-semibold tracking-tighter text-neutral-100 mb-6">Numbers <br /><span className="text-neutral-500">Don't Lie.</span></h2>
                    <p className="reveal-on-scroll delay-100 text-sm md:text-base text-neutral-400 font-light leading-relaxed mb-8 max-w-md">
                        Our tuning philosophy is built on data, not guesswork. Every map is verified on the dyno to ensure smooth power delivery, eliminating flat spots and maximizing peak performance safely.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="reveal-on-scroll delay-200 border-l-2 border-neutral-700 pl-4">
                            <h4 className="text-neutral-100 font-medium text-sm mb-1">Average HP Gain</h4>
                            <p className="text-3xl font-semibold tracking-tighter text-white">+12-15%</p>
                        </div>
                        <div className="reveal-on-scroll delay-300 border-l-2 border-neutral-700 pl-4">
                            <h4 className="text-neutral-100 font-medium text-sm mb-1">Throttle Response</h4>
                            <p className="text-sm text-neutral-400">Eliminated factory restrictions</p>
                        </div>
                        <div className="reveal-on-scroll delay-500 border-l-2 border-neutral-700 pl-4">
                            <h4 className="text-neutral-100 font-medium text-sm mb-1">Engine Temperatures</h4>
                            <p className="text-sm text-neutral-400">Optimized fueling for cooler running</p>
                        </div>
                    </div>
                </div>

                <div className="reveal-on-scroll delay-500 group relative h-[400px] w-full bg-neutral-900/20 border border-white/5 rounded-3xl p-6 flex flex-col justify-between">
                    <div className="flex justify-between text-xs font-medium text-neutral-600 mb-4 border-b border-white/5 pb-2">
                        <span>Torque (Nm)</span>
                        <span>Power (HP)</span>
                    </div>
                    
                    <style>{`
                        @keyframes drawLine {
                            to { stroke-dashoffset: 0; }
                        }
                        @keyframes popPulseDot {
                            0% { transform: scale(0); opacity: 0; }
                            50% { transform: scale(1.3); opacity: 1; box-shadow: 0 0 25px rgba(255, 255, 255, 0.8); }
                            100% { transform: scale(1); opacity: 1; box-shadow: 0 0 15px rgba(255, 255, 255, 0.5); }
                        }
                        @keyframes fadeIn {
                            to { opacity: 1; }
                        }
                        .graph-path {
                            stroke-dasharray: 150;
                            stroke-dashoffset: 150;
                        }
                        .graph-dot {
                            opacity: 0;
                            transform: scale(0);
                        }
                        .graph-bg {
                            opacity: 0;
                        }
                        .group.opacity-100 .graph-path {
                            animation: drawLine 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
                            animation-delay: 0.6s;
                        }
                        .group.opacity-100 .graph-dot {
                            animation: popPulseDot 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
                            animation-delay: 1.8s;
                        }
                        .group.opacity-100 .graph-bg {
                            animation: fadeIn 1.5s ease-out forwards;
                            animation-delay: 0.2s;
                        }
                    `}</style>

                    <div className="relative flex-grow w-full overflow-visible">
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                            <div className="w-full h-px bg-white/5"></div>
                            <div className="w-full h-px bg-white/5"></div>
                            <div className="w-full h-px bg-white/5"></div>
                            <div className="w-full h-px bg-white/5"></div>
                            <div className="w-full h-px bg-white/5"></div>
                        </div>
                        
                        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                            <path d="M0,90 Q30,80 50,60 T100,40" fill="none" stroke="#404040" strokeWidth="2" strokeDasharray="4" className="graph-bg"></path>
                        </svg>
                        
                        <svg className="absolute inset-0 w-full h-full drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" preserveAspectRatio="none" viewBox="0 0 100 100">
                            <path d="M0,85 Q30,60 50,30 T100,10" fill="none" stroke="#ffffff" strokeWidth="2" className="graph-path"></path>
                        </svg>

                        <div className="absolute top-[10%] right-[0] w-4 h-4 bg-white rounded-full graph-dot -mt-2 -mr-2 z-10"></div>
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
