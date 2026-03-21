"use client";

import { useState, useEffect } from 'react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [rpm, setRpm] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const REDLINE = 14000;

  useEffect(() => {
    // Disable scroll while preloader is active completely
    document.body.style.overflow = 'hidden';
    
    let currentRpm = 0;
    const interval = setInterval(() => {
      // Fast, aggressive rev logic typical of motorcycle engines
      currentRpm += Math.floor(Math.random() * 1200) + 400; 
      
      if (currentRpm >= REDLINE) {
        currentRpm = REDLINE;
        setRpm(currentRpm);
        clearInterval(interval);
        
        // Hold at redline briefly for impact, then pull up the curtain
        setTimeout(() => {
          setIsFinished(true); 
          
          // Trigger the Hero animations 300ms into the curtain rising up
          setTimeout(() => {
            onComplete(); 
          }, 300);
          
          // Yield scroll back after curtain clears completely
          setTimeout(() => {
            document.body.style.overflow = '';
          }, 1000); 
        }, 500); 
        
      } else {
        setRpm(currentRpm);
      }
    }, 45); 

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  // Fill the RPM bar perfectly
  const progressPercent = Math.min(100, (rpm / REDLINE) * 100);

  return (
    <div className={`fixed inset-0 z-[999] bg-[#faf9f6] flex flex-col items-center justify-center transition-transform duration-1000 ease-[0.22,1,0.36,1] will-change-transform ${
        isFinished ? '-translate-y-full pointer-events-none' : 'translate-y-0'
    }`}>
        {/* Subtle background flash when hitting redline */}
        <div 
            className="absolute inset-0 bg-red-600/5 mix-blend-multiply transition-opacity duration-300 pointer-events-none"
            style={{ opacity: rpm >= 13000 ? 1 : 0 }}
        ></div>

        <div className="relative z-10 flex flex-col items-center w-full max-w-sm px-6">
            <div className={`font-bold tracking-tighter tabular-nums transition-all duration-300 ${rpm >= REDLINE ? 'scale-110 text-neutral-900 drop-shadow-[0_0_20px_rgba(220,38,38,0.3)]' : 'text-neutral-900'} text-6xl sm:text-7xl md:text-8xl`}>
                {rpm.toLocaleString()}
            </div>
            
            <div className="mt-4 text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase transition-colors duration-300 w-full flex justify-between" style={{ color: rpm >= REDLINE ? '#dc2626' : '#9ca3af' }}>
                <span>Idle</span>
                <span>Max RPM</span>
            </div>

            <div className="w-full h-1.5 bg-neutral-200 mt-4 rounded-full overflow-hidden relative shadow-inner">
                {/* Visual redline zone marker on the background track */}
                <div className="absolute top-0 bottom-0 right-0 w-[15%] bg-red-100 border-l border-red-500/20"></div>
                
                {/* The dynamic fill bar */}
                <div 
                    className={`h-full transition-all duration-75 ease-linear ${rpm >= 13000 ? 'bg-red-600 shadow-[0_0_10px_#ef4444]' : 'bg-neutral-800'}`}
                    style={{ width: `${progressPercent}%` }}
                ></div>
            </div>
            
            <div className={`mt-12 text-xs font-medium tracking-widest text-neutral-400 uppercase transition-opacity duration-500 ${rpm >= REDLINE ? 'opacity-0' : 'opacity-100 animate-pulse'}`}>
                Calibrating Machine...
            </div>
        </div>
    </div>
  );
}
