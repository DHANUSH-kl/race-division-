"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isMobileMenuOpen]);

  // Links array for mapping
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Builds', href: '#builds' },
    { name: 'Results', href: '#results' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 ease-[0.22,1,0.36,1] ${
      isScrolled || isMobileMenuOpen ? 'bg-[#faf9f6]/80 backdrop-blur-xl border-b border-neutral-200 py-4 shadow-sm' : 'bg-transparent py-6 border-b border-transparent'
    }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative z-[110]">
            <Link href="#" className="flex items-center gap-2 group" onClick={() => setIsMobileMenuOpen(false)}>
                {/* Using CSS invert to make the white logo black dynamically on the light theme */}
                <Image 
                    src="/race division logo.png" 
                    alt="Race Division Logo" 
                    width={160} 
                    height={40} 
                    className="h-3.5 md:h-5 w-auto object-contain transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:scale-105 invert" 
                    priority 
                />
            </Link>
            
            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-10 text-xs tracking-widest uppercase font-medium">
                {navLinks.map((link) => (
                    <Link key={link.name} href={link.href} className="relative group text-neutral-500 hover:text-red-600 transition-colors duration-300 py-2">
                        {link.name}
                        {/* Awwwards sweeping underline effect */}
                        <span className="absolute bottom-0 left-0 w-full h-px bg-red-600 origin-right scale-x-0 transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:origin-left group-hover:scale-x-100"></span>
                    </Link>
                ))}
            </div>

            {/* Desktop CTA */}
            <Link href="#contact" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-xs font-medium text-white bg-red-600 rounded-full hover:scale-105 hover:bg-neutral-900 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all duration-500 ease-out">
                Book Dyno Session
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button 
                className="md:hidden text-neutral-900 relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
            >
                <span className={`w-6 h-[2px] bg-neutral-900 transition-all duration-300 ease-in-out origin-center ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
                <span className={`w-6 h-[2px] bg-neutral-900 transition-all duration-200 ease-in-out ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}`}></span>
                <span className={`w-6 h-[2px] bg-neutral-900 transition-all duration-300 ease-in-out origin-center ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
            </button>
        </div>

        {/* Mobile Fullscreen Animated Menu */}
        <div className={`md:hidden fixed inset-0 min-h-[100vh] bg-[#faf9f6]/95 backdrop-blur-3xl z-[100] transition-all duration-700 ease-[0.22,1,0.36,1] flex flex-col pt-32 px-8 ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}>
            {/* Subtle background element */}
            <div className="absolute top-1/4 right-0 w-[80vw] h-[80vw] bg-red-600/5 blur-[80px] rounded-full pointer-events-none translate-x-1/3"></div>

            <div className="flex flex-col gap-6 relative z-10">
                {navLinks.map((link, i) => (
                    <div key={link.name} className="overflow-hidden p-1 -m-1">
                        <Link 
                            href={link.href} 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block text-4xl sm:text-5xl font-semibold tracking-tighter text-neutral-900 transform transition-all duration-700 ease-[0.22,1,0.36,1] hover:text-red-600 hover:translate-x-3 ${
                                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[100%] opacity-0'
                            }`}
                            style={{ transitionDelay: `${isMobileMenuOpen ? 150 + (i * 100) : 0}ms` }}
                        >
                            {link.name}
                        </Link>
                    </div>
                ))}
            </div>

            <div className="overflow-hidden mt-12 relative z-10 p-1 -m-1">
                <Link 
                    href="#contact" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-red-600 rounded-full transition-all duration-700 ease-[0.22,1,0.36,1] hover:scale-105 ${
                        isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                    }`}
                    style={{ transitionDelay: `${isMobileMenuOpen ? 150 + (navLinks.length * 100) : 0}ms` }}
                >
                    Book Dyno Session
                </Link>
            </div>
            
            {/* Soft decorative bottom info */}
            <div className={`absolute bottom-12 left-8 right-8 flex justify-between text-[10px] font-medium uppercase tracking-widest text-neutral-500 border-t border-neutral-200 pt-6 transition-all duration-700 ${
                isMobileMenuOpen ? 'opacity-100 translate-y-0 delay-[600ms]' : 'opacity-0 translate-y-4 delay-0'
            }`}>
                <span>Performance Studio</span>
                <a href="tel:+917977702053" className="hover:text-red-600 transition-colors text-neutral-900">Call Us</a>
            </div>
        </div>
    </nav>
  );
}
