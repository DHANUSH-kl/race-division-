export default function Testimonials() {
  return (
    <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="reveal-on-scroll text-3xl font-semibold tracking-tighter text-neutral-100 mb-12 text-center">Rider Feedback</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="reveal-on-scroll delay-100 p-8 rounded-2xl bg-neutral-900/20 border border-white/5 flex flex-col justify-between">
                    <div>
                        <div className="flex text-neutral-100 mb-4">
                            <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                            <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                            <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                            <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                            <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                        </div>
                        <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">
                            "Completely transformed my ZX-10R. The low-end jerkiness is gone, and the mid-range pulls significantly harder. The dyno graphs proved exactly what I felt on the street."
                        </p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-neutral-100">Rahul M.</p>
                        <p className="text-xs text-neutral-500">Street Enthusiast</p>
                    </div>
                </div>

                <div className="reveal-on-scroll delay-200 p-8 rounded-2xl bg-neutral-900/20 border border-white/5 flex flex-col justify-between">
                    <div>
                        <div className="flex text-neutral-100 mb-4">
                            <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                            <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                            <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                            <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                            <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                        </div>
                        <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">
                            "The team at Race Devision knows exactly what they are doing. Got my S1000RR track prepped and mapped for race fuel. Shaved 2 seconds off my lap time at BIC."
                        </p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-neutral-100">Vikram S.</p>
                        <p className="text-xs text-neutral-500">Track Rider</p>
                    </div>
                </div>

                <div className="reveal-on-scroll delay-300 p-8 rounded-2xl bg-neutral-900/20 border border-white/5 flex flex-col justify-between">
                    <div>
                        <div className="flex text-neutral-100 mb-4">
                            <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                            <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                            <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                            <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                            <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                        </div>
                        <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">
                            "Very professional setup. They explained the entire process, showed me the baseline run, and discussed the changes made. Highly recommended for any superbiker in Mumbai."
                        </p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-neutral-100">Aditya K.</p>
                        <p className="text-xs text-neutral-500">Ducati Owner</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
