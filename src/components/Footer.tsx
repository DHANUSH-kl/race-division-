export default function Footer() {
  return (
    <footer className="py-12 border-t border-black/5 bg-[#f5f5f7] text-sm mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
                <span className="text-neutral-900 font-bold tracking-tighter text-xl uppercase">Racedivision</span>
            </div>
            <div className="flex items-center gap-6 text-neutral-500 font-medium">
                <a href="https://www.instagram.com/race_division_?igsh=MXRjYzV2YTYxazNhaQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">Instagram</a>
                <a href="#" className="hover:text-red-600 transition-colors">YouTube</a>
                <a href="tel:+917977702053" className="hover:text-red-600 transition-colors">Call Us</a>
            </div>
            <p className="text-neutral-400 text-xs text-center md:text-left">
                &copy; {new Date().getFullYear()} Race Division. All rights reserved.
            </p>
        </div>
    </footer>
  );
}
