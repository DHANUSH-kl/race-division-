import Link from 'next/link';

export default function BuildGallery() {
  return (
    <section id="builds" className="py-24 bg-neutral-950/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                <div>
                    <h2 className="reveal-on-scroll text-3xl font-semibold tracking-tighter text-neutral-100 mb-2">Build Gallery</h2>
                    <p className="reveal-on-scroll delay-100 text-sm text-neutral-500">Recent projects exiting the devision.</p>
                </div>
                <Link href="#" className="reveal-on-scroll delay-200 text-xs font-medium text-neutral-300 hover:text-white transition-colors flex items-center gap-1 mt-4 md:mt-0">
                    View All <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="reveal-on-scroll delay-100 aspect-square img-placeholder rounded-xl relative group overflow-hidden">
                    <div className="absolute inset-0 bg-neutral-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-sm font-medium text-white tracking-tight">Stage 2 R1</span>
                    </div>
                </div>
                <div className="reveal-on-scroll delay-200 aspect-square img-placeholder rounded-xl relative group overflow-hidden md:col-span-2">
                     <div className="absolute inset-0 bg-neutral-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-sm font-medium text-white tracking-tight">Full Exhaust S1000RR</span>
                    </div>
                </div>
                <div className="reveal-on-scroll delay-300 aspect-square img-placeholder rounded-xl relative group overflow-hidden">
                     <div className="absolute inset-0 bg-neutral-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-sm font-medium text-white tracking-tight">Panigale V4 Map</span>
                    </div>
                </div>
                <div className="reveal-on-scroll delay-500 aspect-square img-placeholder rounded-xl relative group overflow-hidden lg:col-span-2">
                     <div className="absolute inset-0 bg-neutral-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-sm font-medium text-white tracking-tight">Track Build ZX-10R</span>
                    </div>
                </div>
                 <div className="reveal-on-scroll delay-700 aspect-square img-placeholder rounded-xl relative group overflow-hidden">
                    <div className="absolute inset-0 bg-neutral-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                       <span className="text-sm font-medium text-white tracking-tight">Street Triple RS</span>
                   </div>
               </div>
                <div className="reveal-on-scroll delay-1000 aspect-square img-placeholder rounded-xl relative group overflow-hidden">
                    <div className="absolute inset-0 bg-neutral-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                       <span className="text-sm font-medium text-white tracking-tight">Dyno Run</span>
                   </div>
               </div>
            </div>
        </div>
    </section>
  );
}
