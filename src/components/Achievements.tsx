export default function Achievements() {
  return (
    <section className="py-20 border-y border-white/5 bg-neutral-950/50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-white/5 reveal-on-scroll">
                <div className="flex flex-col items-center text-center px-4">
                    <span className="text-3xl md:text-4xl font-semibold tracking-tighter text-neutral-100 mb-2">500+</span>
                    <span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Bikes Tuned</span>
                </div>
                <div className="flex flex-col items-center text-center px-4">
                    <span className="text-3xl md:text-4xl font-semibold tracking-tighter text-neutral-100 mb-2">12+</span>
                    <span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Track Records</span>
                </div>
                <div className="flex flex-col items-center text-center px-4">
                    <span className="text-3xl md:text-4xl font-semibold tracking-tighter text-neutral-100 mb-2">AWD</span>
                    <span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Dyno Facility</span>
                </div>
                <div className="flex flex-col items-center text-center px-4">
                    <span className="text-3xl md:text-4xl font-semibold tracking-tighter text-neutral-100 mb-2">10</span>
                    <span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Years Experience</span>
                </div>
            </div>
        </div>
    </section>
  );
}
