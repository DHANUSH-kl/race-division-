import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
        <div className="glow-accent top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
            <div className="reveal-on-scroll inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-neutral-300 mb-8 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Dyno Cell Available in Navi Mumbai
            </div>
            <h1 className="reveal-on-scroll delay-100 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-neutral-100 max-w-5xl leading-[1.1] mb-8">
                Unleash <span className="text-neutral-500">Maximum</span><br />Performance.
            </h1>
            <p className="reveal-on-scroll delay-200 text-base md:text-lg max-w-2xl text-neutral-400 mb-10 font-light leading-relaxed">
                Precision ECU tuning, performance upgrades, and state-of-the-art dyno diagnostics for superbikes. Engineered for the elite riders of Navi Mumbai.
            </p>
            <div className="reveal-on-scroll delay-300 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Link href="#contact" className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-[#0a0a0a] bg-neutral-100 rounded-full hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
                    Start Your Build
                    <iconify-icon icon="solar:arrow-right-linear" style={{ strokeWidth: "1.5px" }}></iconify-icon>
                </Link>
                <Link href="#services" className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-neutral-300 border border-white/10 rounded-full hover:bg-white/5 transition-colors flex items-center justify-center">
                    Explore Services
                </Link>
            </div>
        </div>
    </section>
  );
}
