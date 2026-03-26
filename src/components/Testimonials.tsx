export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/5 bg-black/5 text-xs font-medium text-neutral-600 mb-4">
                     <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
                     Rider Feedback
                </div>
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-neutral-900">What the Pros Say</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 justify-center max-w-4xl mx-auto">
                
                {/* ScoutOP Review */}
                <div className="reveal-on-scroll delay-100 flex flex-col items-center w-full max-w-[340px] mx-auto">
                    <div className="w-full relative aspect-[9/16] rounded-[2rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border-4 border-white bg-black group transition-transform duration-500 hover:-translate-y-2">
                        <video 
                            src="https://res.cloudinary.com/di4nynvj6/video/upload/v1774546452/scout_review_n0dytl.mp4" 
                            controls
                            playsInline
                            preload="metadata"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="mt-6 text-center">
                        <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">ScoutOP</h3>
                        <p className="text-xs text-red-600 font-semibold uppercase tracking-widest mt-1">Content Creator</p>
                    </div>
                </div>

                {/* Snax Gaming Review */}
                <div className="reveal-on-scroll delay-200 flex flex-col items-center w-full max-w-[340px] mx-auto">
                    <div className="w-full relative aspect-[9/16] rounded-[2rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border-4 border-white bg-black group transition-transform duration-500 hover:-translate-y-2">
                        <video 
                            src="https://res.cloudinary.com/di4nynvj6/video/upload/v1774549240/snax_review_i8kqak.mp4" 
                            controls
                            playsInline
                            preload="metadata"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="mt-6 text-center">
                        <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">Snax Gaming</h3>
                        <p className="text-xs text-red-600 font-semibold uppercase tracking-widest mt-1">Content Creator</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
}
