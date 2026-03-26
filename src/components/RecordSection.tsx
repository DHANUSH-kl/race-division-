'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

function FlagIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
      <line x1="4" y1="22" x2="4" y2="15"/>
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="8 21 12 21 16 21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
      <path d="M7 4H17a1 1 0 0 1 1 1v4a5 5 0 0 1-5 5 5 5 0 0 1-5-5V5a1 1 0 0 1 1-1z"/>
      <path d="M6 4H4a1 1 0 0 0-1 1v2a3 3 0 0 0 3 3"/>
      <path d="M18 4h2a1 1 0 0 1 1 1v2a3 3 0 0 0-3 3"/>
    </svg>
  );
}

function AwardIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6"/>
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  );
}

export default function RecordSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const mobileWrapperRef = useRef<HTMLDivElement>(null);
  const mobileLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.remove(
              'opacity-0', 'translate-y-8', 'translate-y-12', 'translate-y-4',
              '-translate-x-12', 'translate-x-12', 'translate-x-16', '-translate-x-16',
              'scale-95', 'rs-rotate-pos', 'rs-rotate-neg'
            );
            el.classList.add('opacity-100', 'translate-y-0', 'translate-x-0', 'scale-100', 'rotate-0');
            observer.unobserve(el);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );

    document.querySelectorAll('.rs-reveal').forEach((el) => revealObserver.observe(el));

    // Shared scroll-line logic (desktop + mobile)
    const animateLine = (wrapper: HTMLElement | null, line: HTMLDivElement | null) => {
      if (!wrapper || !line) return;
      const rect = wrapper.getBoundingClientRect();
      const winH = window.innerHeight;
      const scrollStart = winH / 2;
      if (rect.top < scrollStart) {
        const progress = Math.max(0, Math.min(1, (scrollStart - rect.top) / (rect.height - scrollStart / 2)));
        line.style.height = `${progress * 100}%`;
      } else {
        line.style.height = '0%';
      }
    };

    const onScroll = () => {
      animateLine(sectionRef.current, lineRef.current);
      animateLine(mobileWrapperRef.current, mobileLineRef.current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      revealObserver.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <style>{`
        .rs-rotate-pos { transform: rotate(4deg) scale(0.95); }
        .rs-rotate-neg { transform: rotate(-4deg) scale(0.95); }
        .rs-polaroid { transition: transform 700ms ease; }
        .rs-polaroid:hover { transform: rotate(0deg) scale(1.02) !important; }
      `}</style>

      {/* ── Hero / Intro ── */}
      <section className="relative pt-20 pb-10 lg:pt-32 lg:pb-24 px-5 lg:px-6 flex flex-col items-center text-center z-10 bg-[#fafafa]">
        <div className="rs-reveal opacity-0 translate-y-8 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1.5 mb-6 lg:mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-[#e12d39] animate-pulse" />
          <span className="text-xs font-medium text-neutral-600">The Legacy of Speed</span>
        </div>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight max-w-4xl leading-[1.1]">
          <span className="block rs-reveal opacity-0 translate-y-12 transition-all duration-[1200ms] delay-100 ease-[cubic-bezier(0.16,1,0.3,1)]">Record Setting</span>
          <span className="block rs-reveal opacity-0 translate-y-12 transition-all duration-[1200ms] delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] text-neutral-400">Superbikes</span>
        </h2>
        <p className="rs-reveal opacity-0 translate-y-8 transition-all duration-[1200ms] delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] mt-5 lg:mt-8 text-base lg:text-lg text-neutral-500 max-w-xl lg:max-w-2xl font-medium leading-relaxed px-2">
          We don&apos;t just build machines; we engineer milestones. Discover the builds that redefined
          the limits of performance and hold the titles to prove it.
        </p>
      </section>

      {/* ════════════════════════════════════════════════════════
          MOBILE: Vertical stacked timeline layout (scroll down to see both)
          ════════════════════════════════════════════════════════ */}
      <div className="lg:hidden bg-[#fafafa] px-4 pb-16">
        <div ref={mobileWrapperRef} className="relative max-w-sm mx-auto">

          {/* Vertical red timeline line running between the two cards */}
          <div className="absolute left-[19px] top-5 bottom-5 w-[2px] z-0 bg-neutral-100">
            <div ref={mobileLineRef} className="absolute top-0 left-0 w-full h-0 bg-[#e12d39] origin-top" style={{ transition: 'height 150ms ease-out' }} />
          </div>

          {/* ── Achievement 01 ── */}
          <div className="relative z-10 mb-8">
            {/* Dot + label row */}
            <div className="rs-reveal opacity-0 translate-y-4 transition-all duration-700 ease-out flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#e12d39] text-white flex items-center justify-center flex-shrink-0 shadow-[0_0_0_5px_rgba(225,45,57,0.12)]">
                <FlagIcon />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e12d39]">01 &nbsp;·&nbsp; Drag Racing Division</p>
              </div>
            </div>

            {/* Card */}
            <div className="ml-[52px] rs-reveal opacity-0 translate-y-8 transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.10)] border border-neutral-100">
              <div className="relative w-full aspect-[3/2]">
                <Image src="/rs765 on dyno.png" alt="RS 765 Drag Bike" fill className="object-cover" sizes="85vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <p className="text-white text-lg font-semibold leading-snug">Asia&apos;s Fastest</p>
                  <p className="text-white/55 text-lg font-semibold leading-snug">RS 765 Build</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-neutral-500 leading-relaxed mb-4 font-medium">
                  Set at Valley Run, India's premier national drag racing event. This officially ratified quarter-mile record made the RS 765 the fastest bike across Asia, dominating the field with surgical tuning precision.
                </p>
                <div className="grid grid-cols-2 gap-3 border-t border-neutral-100 pt-4">
                  <div>
                    <p className="text-[10px] text-neutral-400 font-semibold uppercase tracking-widest mb-1">Platform</p>
                    <p className="text-sm font-semibold">Triumph RS 765</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-neutral-400 font-semibold uppercase tracking-widest mb-1">Official Record</p>
                    <p className="text-sm font-semibold text-[#e12d39]">Valley Run</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Achievement 02 ── */}
          <div className="relative z-10">
            {/* Dot + label row */}
            <div className="rs-reveal opacity-0 translate-y-4 transition-all duration-700 ease-out flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#e12d39] text-white flex items-center justify-center flex-shrink-0 shadow-[0_0_0_5px_rgba(225,45,57,0.12)]">
                <ZapIcon />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e12d39]">02 &nbsp;·&nbsp; Stunt &amp; Control</p>
              </div>
            </div>

            {/* Card */}
            <div className="ml-[52px] rs-reveal opacity-0 translate-y-8 transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.10)] border border-neutral-100">
              <div className="relative w-full aspect-[3/2]">
                <Image src="/fastest wheelie.jpg" alt="India's Fastest Wheelie Machine" fill className="object-contain" sizes="85vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <p className="text-white text-lg font-semibold leading-snug">India&apos;s Fastest</p>
                  <p className="text-white/55 text-lg font-semibold leading-snug">Wheelie Machine</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-neutral-500 leading-relaxed mb-4 font-medium">
                  Engineered for relentless balance and aggressive power delivery. The undisputed champion, defending its title through unparalleled tuning precision.
                </p>
                <div className="border-t border-neutral-100 pt-4">
                  <p className="text-[10px] text-neutral-400 font-semibold uppercase tracking-widest mb-3">Consecutive Titles</p>
                  <div className="flex gap-2 flex-wrap">
                    {['2023', '2024'].map((year) => (
                      <div key={year} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-200 bg-white shadow-sm">
                        <span className="text-[#e12d39]"><TrophyIcon /></span>
                        <span className="text-sm font-semibold">{year}</span>
                      </div>
                    ))}
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#e12d39]/20 bg-[#e12d39]/5 shadow-sm">
                      <span className="text-[#e12d39]"><AwardIcon /></span>
                      <span className="text-sm font-semibold text-[#e12d39]">2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          DESKTOP: Alternating polaroid timeline layout
          ════════════════════════════════════════════════════════ */}
      <section
        ref={sectionRef}
        className="hidden lg:block relative w-full max-w-[85rem] mx-auto py-16 lg:py-24 px-6 sm:px-12 lg:px-8 mb-20 lg:mb-32 bg-[#fafafa]"
      >
        <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-neutral-200 -translate-x-1/2 z-0">
          <div ref={lineRef} className="w-full bg-[#e12d39] h-0 origin-top" style={{ transition: 'height 150ms ease-out' }} />
        </div>

        {/* Achievement 1 */}
        <div className="relative z-10 grid lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-32 lg:mb-64">
          <div className="lg:col-span-5 flex flex-col items-start text-left order-2 lg:order-1">
            <div className="rs-reveal opacity-0 -translate-x-12 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] mb-6 flex items-center gap-2 text-[#e12d39]">
              <FlagIcon />
              <span className="text-xs font-medium tracking-widest uppercase text-neutral-500">Valley Run Drag Race</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 leading-[1.15]">
              <span className="block rs-reveal opacity-0 translate-y-8 transition-all duration-[1000ms] delay-100 ease-out">Asia&apos;s Fastest</span>
              <span className="block rs-reveal opacity-0 translate-y-8 transition-all duration-[1000ms] delay-200 ease-out text-neutral-400">RS 765 Build</span>
            </h3>
            <p className="rs-reveal opacity-0 translate-y-8 transition-all duration-[1000ms] delay-300 ease-out text-lg text-neutral-600 mb-10 font-medium leading-relaxed max-w-lg">
              Set at Valley Run, India's premier national drag racing event. This officially ratified quarter-mile record made the RS 765 the fastest bike across Asia, dominating the field through surgical tuning precision and an obsessive eye for power-to-weight.
            </p>
            <div className="rs-reveal opacity-0 translate-y-8 transition-all duration-[1000ms] delay-400 ease-out grid grid-cols-2 gap-8 w-full border-t border-neutral-200 pt-8">
              <div>
                <p className="text-xs text-neutral-500 font-medium mb-1.5 uppercase tracking-widest">Platform</p>
                <p className="text-lg font-semibold tracking-tight">Triumph RS 765</p>
              </div>
              <div>
                <p className="text-xs text-neutral-500 font-medium mb-1.5 uppercase tracking-widest">Official Record</p>
                <p className="text-lg font-semibold tracking-tight text-[#e12d39]">Valley Run</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 w-full order-1 lg:order-2">
            <div className="rs-reveal rs-rotate-pos opacity-0 transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] relative w-full aspect-[16/10] max-w-3xl ml-auto group">
              <div className="rs-polaroid absolute inset-0 bg-white p-4 rounded-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-neutral-100">
                <div className="w-full h-full bg-neutral-100 rounded-lg overflow-hidden relative">
                  <Image src="/rs765 on dyno.png" alt="RS 765 Drag Bike" fill className="object-cover opacity-90 mix-blend-multiply grayscale-[15%]" sizes="60vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement 2 */}
        <div className="relative z-10 grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-7 w-full order-1">
            <div className="rs-reveal rs-rotate-neg opacity-0 transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] relative w-full aspect-[16/10] max-w-3xl mr-auto group">
              <div className="rs-polaroid absolute inset-0 bg-white p-4 rounded-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-neutral-100">
                <div className="w-full h-full bg-neutral-100 rounded-lg overflow-hidden relative">
                  <Image src="/fastest wheelie.jpg" alt="India's Fastest Wheelie Machine" fill className="object-contain opacity-90 mix-blend-multiply grayscale-[15%]" sizes="60vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col items-start text-left order-2">
            <div className="rs-reveal opacity-0 translate-x-12 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] mb-6 flex items-center gap-2 text-[#e12d39]">
              <ZapIcon />
              <span className="text-xs font-medium tracking-widest uppercase text-neutral-500">Stunt &amp; Control</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 leading-[1.15]">
              <span className="block rs-reveal opacity-0 translate-y-8 transition-all duration-[1000ms] delay-100 ease-out">India&apos;s Fastest</span>
              <span className="block rs-reveal opacity-0 translate-y-8 transition-all duration-[1000ms] delay-200 ease-out text-neutral-400">Wheelie Machine</span>
            </h3>
            <p className="rs-reveal opacity-0 translate-y-8 transition-all duration-[1000ms] delay-300 ease-out text-lg text-neutral-600 mb-10 font-medium leading-relaxed max-w-lg">
              Engineered for relentless balance and aggressive power delivery. This machine has remained the undisputed champion, defending its title through unparalleled tuning precision.
            </p>
            <div className="rs-reveal opacity-0 translate-y-8 transition-all duration-[1000ms] delay-400 ease-out w-full border-t border-neutral-200 pt-8">
              <p className="text-xs text-neutral-500 font-medium mb-4 uppercase tracking-widest">Consecutive Titles</p>
              <div className="flex flex-wrap gap-3">
                {['2023', '2024'].map((year) => (
                  <div key={year} className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 bg-white shadow-sm">
                    <span className="text-[#e12d39]"><TrophyIcon /></span>
                    <span className="text-lg font-semibold tracking-tight">{year}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#e12d39]/20 bg-[#e12d39]/5 shadow-sm">
                  <span className="text-[#e12d39]"><AwardIcon /></span>
                  <span className="text-lg font-semibold tracking-tight text-[#e12d39]">2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
