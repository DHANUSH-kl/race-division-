import Image from 'next/image';

export default function Platforms() {
  return (
    <section className="py-20 md:py-32 border-y border-white/5 bg-neutral-950/30 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 mb-12">
            <h2 className="reveal-on-scroll text-3xl md:text-4xl font-semibold tracking-tighter text-neutral-100">Platforms We Master</h2>
        </div>
        
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 px-6 space-x-6" style={{ scrollbarWidth: "none" }}>
            <div className="reveal-on-scroll delay-100 snap-center shrink-0 w-[280px] md:w-[350px] aspect-[4/3] rounded-2xl p-6 flex flex-col justify-end relative group overflow-hidden border border-white/5 bg-neutral-900/50">
                <Image src="/litre class.jpg" alt="European Exotics" fill sizes="(max-width: 768px) 280px, 350px" className="object-cover object-center opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent z-10 opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative z-20">
                    <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1 group-hover:text-neutral-300 transition-colors">Liter Class</p>
                    <h3 className="text-xl font-semibold text-neutral-100 tracking-tight group-hover:text-white transition-colors">European Exotics</h3>
                </div>
            </div>
            
            <div className="reveal-on-scroll delay-200 snap-center shrink-0 w-[280px] md:w-[350px] aspect-[4/3] rounded-2xl p-6 flex flex-col justify-end relative group overflow-hidden border border-white/5 bg-neutral-900/50">
                <Image src="/inline 4.png" alt="Japanese Superbikes" fill sizes="(max-width: 768px) 280px, 350px" className="object-cover object-center opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent z-10 opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative z-20">
                    <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1 group-hover:text-neutral-300 transition-colors">Inline Four</p>
                    <h3 className="text-xl font-semibold text-neutral-100 tracking-tight group-hover:text-white transition-colors">Japanese Superbikes</h3>
                </div>
            </div>

            <div className="reveal-on-scroll delay-300 snap-center shrink-0 w-[280px] md:w-[350px] aspect-[4/3] rounded-2xl p-6 flex flex-col justify-end relative group overflow-hidden border border-white/5 bg-neutral-900/50">
                <Image src="/600cc.avif" alt="Street & Track 600s" fill sizes="(max-width: 768px) 280px, 350px" className="object-cover object-center opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent z-10 opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative z-20">
                    <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1 group-hover:text-neutral-300 transition-colors">Middleweight</p>
                    <h3 className="text-xl font-semibold text-neutral-100 tracking-tight group-hover:text-white transition-colors">Street &amp; Track 600s</h3>
                </div>
            </div>

            <div className="reveal-on-scroll delay-500 snap-center shrink-0 w-[280px] md:w-[350px] aspect-[4/3] rounded-2xl p-6 flex flex-col justify-end relative group overflow-hidden border border-white/5 bg-neutral-900/50">
                <Image src="/heavyweight adv.jpeg" alt="Heavyweight ADVs" fill sizes="(max-width: 768px) 280px, 350px" className="object-cover object-center opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent z-10 opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative z-20">
                    <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1 group-hover:text-neutral-300 transition-colors">Adventure</p>
                    <h3 className="text-xl font-semibold text-neutral-100 tracking-tight group-hover:text-white transition-colors">Heavyweight ADVs</h3>
                </div>
            </div>
        </div>
    </section>
  );
}
