'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-10', 'scale-[1.05]');
          entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100');
        } else {
          entry.target.classList.remove('opacity-100', 'translate-y-0', 'scale-100');
          entry.target.classList.add('opacity-0', 'translate-y-10');
          if (entry.target.classList.contains('zoom-reveal')) {
            entry.target.classList.add('scale-[1.05]');
          }
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => {
      if (el.classList.contains('zoom-reveal')) {
        el.classList.add('scale-[1.05]');
      }
      el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-1000', 'ease-out');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
