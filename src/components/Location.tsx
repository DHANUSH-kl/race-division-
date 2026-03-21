export default function Location() {
  return (
    <section id="location" className="py-20 md:py-32 border-t border-black/5 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between bg-white border border-neutral-200 rounded-3xl p-8 md:p-12 shadow-sm">
                <div className="reveal-on-scroll mb-8 md:mb-0">
                    <div className="flex items-center gap-3 text-neutral-900 mb-4">
                        <iconify-icon icon="solar:map-point-linear" style={{ strokeWidth: "1.5px" }} className="text-2xl text-red-600"></iconify-icon>
                        <h2 className="text-2xl font-semibold tracking-tighter">Base of Operations</h2>
                    </div>
                    <p className="text-sm text-neutral-600 max-w-sm font-light leading-relaxed">
                        Our primary tuning facility is equipped with state-of-the-art climate control to ensure consistent and accurate dyno readings, tuning superbikes nationwide and overseas.
                    </p>
                </div>
                <div className="reveal-on-scroll delay-200 w-full md:w-auto flex flex-col items-start md:items-end gap-2 text-sm">
                    <p className="font-semibold text-neutral-900">Race Devision Garage</p>
                    <p className="text-neutral-500">Shop No 04, Plot No 65, Sec 18, Shiravane</p>
                    <p className="text-neutral-500">Nerul, Navi Mumbai (M Corp), 400706</p>
                    <a href="https://maps.app.goo.gl/86VAGZWZqPjtTHQL9" target="_blank" rel="noopener noreferrer" className="mt-4 text-xs font-semibold text-red-600 underline underline-offset-4 hover:text-red-700 transition-colors uppercase tracking-widest">Get Directions</a>
                </div>
            </div>
        </div>
    </section>
  );
}
