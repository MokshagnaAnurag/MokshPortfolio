import React, { useState } from "react";
import { ProjectDrawer } from "./ProjectDrawer";
import { Cpu, Menu, X } from "lucide-react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
];

export function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        body { padding-top: 80px !important; }
      `}</style>

      {/* Split/Separated Navbar Layout */}
      <header className="fixed top-4 md:top-6 left-0 right-0 z-50 pointer-events-none px-4 md:px-8">
        <div className="mx-auto max-w-[1400px] flex justify-between items-center w-full">
          
          {/* Module 1: Logo (Separated) */}
          <div className="pointer-events-auto flex items-center">
            <a href="#top" className="bg-[var(--color-industrial-white)] border-[3px] border-mech shadow-mech-sm px-4 py-2 font-display font-black text-sm md:text-base tracking-widest uppercase text-[var(--color-industrial-dark)] hover:bg-[var(--color-industrial-yellow)] transition-colors flex items-center gap-3">
              <div className="w-2 h-2 bg-[var(--color-industrial-green)] border border-mech animate-pulse"></div>
              M.ANURAG
            </a>
          </div>

          {/* Module 2: Links (Separated - Desktop only) */}
          <div className="hidden lg:flex pointer-events-auto bg-[var(--color-industrial-white)] border-[3px] border-mech shadow-mech-sm px-1 py-1 items-center gap-1">
            {links.map((l) => (
               <a 
                 key={l.href}
                 href={l.href} 
                 className="px-4 py-1.5 font-mono text-[0.65rem] font-bold uppercase text-[var(--color-industrial-dark)] hover:bg-[var(--color-industrial-dark)] hover:text-white transition-colors"
               >
                 {l.label}
               </a>
            ))}
          </div>

          {/* Module 3: Actions (Separated) */}
          <div className="pointer-events-auto flex items-center gap-3">
            <button 
              onClick={() => setIsDrawerOpen(true)}
              className="w-10 h-10 flex items-center justify-center bg-[var(--color-industrial-white)] border-[3px] border-mech text-[var(--color-industrial-dark)] hover:bg-[var(--color-industrial-yellow)] transition-colors shadow-mech-sm"
              title="Open Data Drive"
            >
              <Cpu size={18} />
            </button>
            
            <a 
              href="#contact" 
              className="hidden sm:flex px-5 h-10 items-center justify-center bg-[var(--color-industrial-dark)] text-[var(--color-industrial-white)] border-[3px] border-mech font-mono text-[0.65rem] font-bold uppercase tracking-widest hover:bg-[var(--color-industrial-green)] hover:text-[var(--color-industrial-dark)] transition-colors shadow-mech-sm"
            >
              INIT COMM
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden w-10 h-10 flex items-center justify-center bg-[var(--color-industrial-white)] border-[3px] border-mech text-black hover:bg-[var(--color-industrial-yellow)] transition-colors shadow-mech-sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-[72px] md:top-[88px] left-4 right-4 z-40 bg-[var(--color-industrial-white)] border-[3px] border-mech shadow-mech-md flex flex-col p-2 animate-in slide-in-from-top-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-4 px-4 font-mono text-sm font-bold uppercase text-[var(--color-industrial-dark)] border-b-2 border-dashed border-gray-200 hover:bg-[var(--color-industrial-yellow)] transition-colors text-center"
            >
              {l.label}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 w-full py-4 text-center font-mono text-xs font-bold uppercase tracking-widest bg-[var(--color-industrial-dark)] text-white hover:bg-[var(--color-industrial-green)] hover:text-black transition-colors border-[3px] border-mech shadow-mech-sm"
          >
            INITIATE COMMUNICATION
          </a>
        </div>
      )}

      <ProjectDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
      />
    </>
  );
}
