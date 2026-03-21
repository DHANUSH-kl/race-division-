export default function Location() {
  return (
    <section id="location" className="py-24 border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between bg-neutral-900/30 border border-white/5 rounded-3xl p-8 md:p-12">
                <div className="reveal-on-scroll mb-8 md:mb-0">
                    <div className="flex items-center gap-3 text-neutral-100 mb-4">
                        <iconify-icon icon="solar:map-point-linear" style={{ strokeWidth: "1.5px" }} className="text-2xl"></iconify-icon>
                        <h2 className="text-2xl font-semibold tracking-tight">Base of Operations</h2>
                    </div>
                    <p className="text-sm text-neutral-400 max-w-sm font-light leading-relaxed">
                        Located in the heart of Mumbai, our facility is equipped with state-of-the-art climate control to ensure consistent and accurate dyno readings regardless of outside weather.
                    </p>
                </div>
                <div className="reveal-on-scroll delay-200 w-full md:w-auto flex flex-col items-start md:items-end gap-2 text-sm">
                    <p className="font-medium text-neutral-100">Race Devision Garage</p>
                    <p className="text-neutral-500">Andheri West, Mumbai</p>
                    <p className="text-neutral-500">Maharashtra 400053, India</p>
                    <a href="#" className="mt-4 text-xs font-medium text-neutral-100 underline underline-offset-4 hover:text-white transition-colors">Get Directions</a>
                </div>
            </div>
        </div>
    </section>
  );
}
