import React, { useState, useEffect } from "react";
import { ArrowRight, Terminal, Zap, Crosshair } from "lucide-react";
import { Reveal } from "./Reveal";

export function ToonhubHero() {
  const [bootText, setBootText] = useState("");
  const phrases = [
    "> SYS.BOOT SEQUENCE INITIALIZED...",
    "> LOADING KERNEL MODULES...",
    "> ENGAGING HARDWARE PROTOCOLS...",
    "> SYSTEM KERNEL ONLINE..."
  ];

  useEffect(() => {
    let currentPhraseIndex = 0;
    let currentText = "";
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      const currentFullText = phrases[currentPhraseIndex];
      
      if (isDeleting) {
        currentText = currentFullText.substring(0, currentText.length - 1);
      } else {
        currentText = currentFullText.substring(0, currentText.length + 1);
      }

      setBootText(currentText);

      let typeSpeed = isDeleting ? 30 : 60; // Faster deleting, slower typing

      // If finished typing the word
      if (!isDeleting && currentText === currentFullText) {
        typeSpeed = 2000; // Pause at the end of phrase
        isDeleting = true;
      } else if (isDeleting && currentText === "> ") {
        // We delete down to "> " and then switch
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        typeSpeed = 500; // Pause before typing new phrase
      } else if (isDeleting && currentText === "") {
        // Fallback if it deleted entirely
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        typeSpeed = 500;
      }

      timeoutId = setTimeout(type, typeSpeed);
    };

    // Start typing after initial delay
    timeoutId = setTimeout(type, 800);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="relative min-h-[95vh] bg-[var(--color-industrial-white)] overflow-hidden flex flex-col justify-center pt-24 pb-32 border-b-[6px] border-mech">
      
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-blueprint opacity-50"></div>
        {/* Animated scrolling scanline */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--color-industrial-blue)] opacity-40 animate-[slideDown_8s_linear_infinite]"></div>
      </div>

      {/* Central Animated CPU Trace Graphic (The "Fantastic" Element) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] pointer-events-none z-0 opacity-10 flex justify-center items-center">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_40s_linear_infinite]">
          <circle cx="100" cy="100" r="90" fill="none" stroke="black" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="black" strokeWidth="0.5" />
          {/* Hardware nodes */}
          <path d="M 100 10 L 100 30" stroke="black" strokeWidth="3" />
          <path d="M 100 170 L 100 190" stroke="black" strokeWidth="3" />
          <path d="M 10 100 L 30 100" stroke="black" strokeWidth="3" />
          <path d="M 170 100 L 190 100" stroke="black" strokeWidth="3" />
          <rect x="80" y="80" width="40" height="40" fill="none" stroke="black" strokeWidth="1.5" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
           <Zap size={80} className="text-[var(--color-industrial-dark)] animate-pulse" />
        </div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        
        {/* Hardware Status Badge */}
        <Reveal>
          <div className="inline-flex items-center font-mono text-xs font-bold tracking-[0.2em] uppercase bg-[var(--color-industrial-white)] text-[var(--color-industrial-dark)] border-[3px] border-mech px-6 py-2.5 shadow-[4px_4px_0_var(--color-industrial-dark)] mb-12 hover:-translate-y-1 transition-transform cursor-crosshair">
            <div className="w-2.5 h-2.5 rounded-none bg-[var(--color-industrial-green)] animate-pulse mr-3 border border-mech"></div>
            SYSTEM KERNEL ONLINE
          </div>
        </Reveal>

        {/* Hero Title - Massive, Interactive & Centered */}
        <Reveal delay={0.1}>
          <h1 className="font-display text-[clamp(3.5rem,8vw,9rem)] font-black uppercase leading-[0.85] tracking-tighter text-[var(--color-industrial-dark)] drop-shadow-[0_4px_0_rgba(10,10,10,0.05)] relative group cursor-crosshair select-none z-20">
            <span className="block hover:-translate-y-3 transition-transform duration-500">MOKSHAGNA</span>
            <span className="block text-[var(--color-industrial-white)] text-stroke-mech-2 hover:-translate-y-1 transition-transform duration-500 relative mt-2 md:mt-0">
              ANURAG
              {/* Massive yellow highlight block that strikes across on hover */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[55%] bg-[var(--color-industrial-yellow)] -z-10 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out border-y-[3px] border-[var(--color-industrial-dark)]"></div>
            </span>
            <span className="block hover:translate-y-3 transition-transform duration-500 mt-2 md:mt-0">KANKATI</span>
          </h1>
        </Reveal>

        {/* Brutalist Description Box */}
        <Reveal delay={0.2}>
          <div className="mt-16 bg-[var(--color-industrial-white)] border-[4px] border-mech p-6 md:p-8 shadow-[8px_8px_0_var(--color-industrial-dark)] max-w-2xl relative z-20 hover:shadow-[12px_12px_0_var(--color-industrial-dark)] hover:-translate-y-1 transition-all duration-300">
            {/* Overlapping corner detail */}
            <div className="absolute -top-4 -left-4 bg-[var(--color-industrial-orange)] p-2.5 border-[3px] border-mech shadow-mech-sm z-30">
               <Crosshair size={22} className="text-[var(--color-industrial-dark)] animate-[spin_10s_linear_infinite]" />
            </div>
            <p className="font-mono text-sm md:text-base font-bold text-[var(--color-industrial-dark)] leading-relaxed text-left pl-2">
              <span className="text-[var(--color-industrial-blue)] mb-2 inline-flex items-center h-[1.5em]">
                {bootText}
                <span className="inline-block w-[0.55em] h-[1em] bg-[var(--color-industrial-blue)] ml-1.5 animate-pulse" style={{ animationDuration: '0.8s' }}></span>
              </span><br/>
              <span className="leading-loose">
                I engineer robust{" "}
                <span className="inline-block px-2 py-0.5 mx-0.5 bg-[var(--color-industrial-dark)] text-white font-black uppercase text-xs tracking-wider shadow-[2px_2px_0_var(--color-industrial-green)] hover:-translate-y-1 hover:-translate-x-[1px] hover:shadow-[4px_4px_0_var(--color-industrial-green)] transition-all cursor-crosshair">embedded systems</span>
                ,{" "}
                <span className="inline-block px-2 py-0.5 mx-0.5 bg-[var(--color-industrial-dark)] text-white font-black uppercase text-xs tracking-wider shadow-[2px_2px_0_var(--color-industrial-yellow)] hover:-translate-y-1 hover:-translate-x-[1px] hover:shadow-[4px_4px_0_var(--color-industrial-yellow)] transition-all cursor-crosshair">autonomous robotics</span>
                , and scalable{" "}
                <span className="inline-block px-2 py-0.5 mx-0.5 bg-[var(--color-industrial-dark)] text-white font-black uppercase text-xs tracking-wider shadow-[2px_2px_0_var(--color-industrial-orange)] hover:-translate-y-1 hover:-translate-x-[1px] hover:shadow-[4px_4px_0_var(--color-industrial-orange)] transition-all cursor-crosshair">IoT architecture</span>
                .{" "}
                <span className="inline-block px-2 py-0.5 mx-0.5 bg-[var(--color-industrial-dark)] text-white font-black uppercase text-xs tracking-wider shadow-[2px_2px_0_var(--color-industrial-cyan)] hover:-translate-y-1 hover:-translate-x-[1px] hover:shadow-[4px_4px_0_var(--color-industrial-cyan)] transition-all cursor-crosshair">Precision hardware</span>
                {" "}built for physical impact.
              </span>
            </p>
          </div>
        </Reveal>

        {/* Heavy Action Buttons */}
        <Reveal delay={0.3}>
          <div className="mt-16 flex flex-col sm:flex-row gap-6 md:gap-8 w-full sm:w-auto justify-center relative z-20">
            
            {/* Primary Button */}
            <a 
              href="#work" 
              className="group relative px-8 py-4 bg-[var(--color-industrial-dark)] text-white border-[3px] border-[var(--color-industrial-dark)] font-mono text-sm font-black uppercase tracking-widest shadow-[2px_2px_0_var(--color-industrial-dark)] hover:shadow-[10px_10px_0_var(--color-industrial-green)] hover:-translate-x-[6px] hover:-translate-y-[6px] transition-all duration-300 flex items-center justify-center gap-3"
            >
              DEPLOYMENT LOG <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </a>

            {/* Secondary Button */}
            <a 
              href="#contact" 
              className="group relative px-8 py-4 bg-[var(--color-industrial-white)] text-[var(--color-industrial-dark)] border-[3px] border-[var(--color-industrial-dark)] font-mono text-sm font-black uppercase tracking-widest shadow-[2px_2px_0_var(--color-industrial-dark)] hover:shadow-[10px_10px_0_var(--color-industrial-dark)] hover:-translate-x-[6px] hover:-translate-y-[6px] transition-all duration-300 flex items-center justify-center gap-3 hover:bg-[var(--color-industrial-yellow)]"
            >
              <Terminal size={18} className="group-hover:-rotate-12 transition-transform" /> 
              INITIATE COMM
            </a>

          </div>
        </Reveal>

      </div>
      
      {/* Global styles for Hero animations */}
      <style>{`
        @keyframes slideDown {
          0% { transform: translateY(-20vh); }
          100% { transform: translateY(120vh); }
        }
      `}</style>
    </section>
  );
}
