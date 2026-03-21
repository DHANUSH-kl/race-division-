export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
        <div className="glow-accent bottom-0 right-0 translate-x-1/4 translate-y-1/4"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="reveal-on-scroll text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-neutral-900 mb-6 drop-shadow-sm">Ready to extract every ounce of power?</h2>
            <p className="reveal-on-scroll delay-100 text-base text-neutral-500 mb-10 font-light">Slots for custom mapping and dyno sessions fill up fast. Secure your spot.</p>
            <div className="reveal-on-scroll delay-200 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:+917977702053" className="w-full sm:w-auto px-8 py-4 text-sm font-medium text-white bg-red-600 rounded-full hover:scale-105 hover:bg-neutral-900 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all duration-300">
                    Book an Appointment
                </a>
                <a href="https://wa.me/917977702053" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 text-sm font-medium text-neutral-600 border border-neutral-300 rounded-full hover:bg-neutral-900 hover:border-neutral-900 hover:text-white transition-all duration-300">
                    Contact via WhatsApp
                </a>
            </div>
        </div>
    </section>
  );
}
