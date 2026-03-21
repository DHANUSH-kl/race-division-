import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative z-10">
            <Link href="#" className="flex items-center gap-2">
                <Image src="/race division logo.png" alt="Race Division Logo" width={160} height={40} className="h-5 w-auto object-contain" priority />
            </Link>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                <Link href="#services" className="hover:text-neutral-100 transition-colors">Services</Link>
                <Link href="#builds" className="hover:text-neutral-100 transition-colors">Builds</Link>
                <Link href="#results" className="hover:text-neutral-100 transition-colors">Results</Link>
                <Link href="#location" className="hover:text-neutral-100 transition-colors">Location</Link>
            </div>
            <Link href="#contact" className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-[#0a0a0a] bg-neutral-100 rounded-full hover:bg-white transition-colors">
                Book Dyno Session
            </Link>
            <button className="md:hidden text-neutral-100">
                <iconify-icon icon="solar:hamburger-menu-linear" style={{ strokeWidth: "1.5px" }} className="text-2xl"></iconify-icon>
            </button>
        </div>
    </nav>
  );
}
