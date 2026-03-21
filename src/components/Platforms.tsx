export default function Platforms() {
  return (
    <section className="py-24 border-y border-white/5 bg-neutral-950/30 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 mb-12">
            <h2 className="reveal-on-scroll text-2xl md:text-3xl font-semibold tracking-tighter text-neutral-100">Platforms We Master</h2>
        </div>
        
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 px-6 space-x-6" style={{ scrollbarWidth: "none" }}>
            <div className="reveal-on-scroll delay-100 snap-center shrink-0 w-[280px] md:w-[350px] aspect-[4/3] img-placeholder rounded-2xl p-6 flex flex-col justify-end relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500" style={{ backgroundImage: "repeating-linear-gradient(45deg, #262626 25%, transparent 25%, transparent 75%, #262626 75%, #262626), repeating-linear-gradient(45deg, #262626 25%, transparent 25%, transparent 75%, #262626 75%, #262626)", backgroundPosition: "0 0, 10px 10px", backgroundSize: "20px 20px" }}></div>
                <div className="relative z-20">
                    <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1">Liter Class</p>
                    <h3 className="text-xl font-semibold text-neutral-100 tracking-tight">European Exotics</h3>
                </div>
            </div>
            
            <div className="reveal-on-scroll delay-200 snap-center shrink-0 w-[280px] md:w-[350px] aspect-[4/3] img-placeholder rounded-2xl p-6 flex flex-col justify-end relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500" style={{ background: "radial-gradient(circle, #262626 2px, transparent 2px)", backgroundSize: "16px 16px" }}></div>
                <div className="relative z-20">
                    <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1">Inline Four</p>
                    <h3 className="text-xl font-semibold text-neutral-100 tracking-tight">Japanese Superbikes</h3>
                </div>
            </div>

            <div className="reveal-on-scroll delay-300 snap-center shrink-0 w-[280px] md:w-[350px] aspect-[4/3] img-placeholder rounded-2xl p-6 flex flex-col justify-end relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500" style={{ background: "linear-gradient(90deg, transparent 50%, #1a1a1a 50%)", backgroundSize: "10px 100%" }}></div>
                <div className="relative z-20">
                    <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1">Middleweight</p>
                    <h3 className="text-xl font-semibold text-neutral-100 tracking-tight">Street &amp; Track 600s</h3>
                </div>
            </div>

            <div className="reveal-on-scroll delay-500 snap-center shrink-0 w-[280px] md:w-[350px] aspect-[4/3] img-placeholder rounded-2xl p-6 flex flex-col justify-end relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <div className="relative z-20">
                    <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1">Adventure</p>
                    <h3 className="text-xl font-semibold text-neutral-100 tracking-tight">Heavyweight ADVs</h3>
                </div>
            </div>
        </div>
    </section>
  );
}
