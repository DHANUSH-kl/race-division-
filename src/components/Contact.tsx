export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
        <div className="glow-accent bottom-0 right-0 translate-x-1/4 translate-y-1/4"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal-on-scroll">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-neutral-100 mb-6">Ready to extract every ounce of power?</h2>
            <p className="text-base text-neutral-400 mb-10 font-light">Slots for custom mapping and dyno sessions fill up fast. Secure your spot.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#" className="w-full sm:w-auto px-8 py-4 text-sm font-medium text-[#0a0a0a] bg-neutral-100 rounded-full hover:scale-105 transition-transform duration-300">
                    Book an Appointment
                </a>
                <a href="#" className="w-full sm:w-auto px-8 py-4 text-sm font-medium text-neutral-300 border border-white/10 rounded-full hover:bg-white/5 transition-colors">
                    Contact via WhatsApp
                </a>
            </div>
        </div>
    </section>
  );
}
