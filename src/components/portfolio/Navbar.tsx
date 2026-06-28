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

      {/* Split/Separated Navbar Layout - Lightning McQueen Theme */}
      <header className="fixed top-4 md:top-6 left-0 right-0 z-50 pointer-events-none px-4 md:px-8">
        <div className="mx-auto max-w-[1400px] flex justify-between items-center w-full">

          {/* Module 1: Logo (Separated) */}
          <div className="pointer-events-auto flex items-center">
            <a href="#top" className="bg-red-600 border-[3px] border-black shadow-[4px_4px_0px_#000] px-4 py-2 font-display font-black text-sm md:text-base tracking-widest uppercase text-white hover:bg-yellow-400 hover:text-red-700 transition-colors flex items-center gap-3 transform -skew-x-12">
              <div className="w-2 h-2 bg-yellow-400 border border-black animate-pulse transform skew-x-12"></div>
              <span className="italic">KM.ANURAG <span className="text-yellow-400 font-bold ml-1"></span></span>
            </a>
          </div>

          {/* Module 2: Links (Separated - Desktop only) */}
          <div className="hidden lg:flex pointer-events-auto bg-zinc-950 border-[3px] border-black shadow-[4px_4px_0px_#000] px-1 py-1 items-center gap-1 transform -skew-x-12">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-1.5 font-mono text-[0.65rem] font-bold uppercase text-zinc-100 hover:bg-red-600 hover:text-white transition-colors transform skew-x-12"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Module 3: Actions (Separated) */}
          <div className="pointer-events-auto flex items-center gap-3">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="w-10 h-10 flex items-center justify-center bg-yellow-400 border-[3px] border-black text-black hover:bg-red-600 hover:text-white transition-colors shadow-[4px_4px_0px_#000] transform -skew-x-12"
              title="Open Data Drive"
            >
              <Cpu size={18} className="transform skew-x-12" />
            </button>

            <a
              href="#contact"
              className="hidden sm:flex px-5 h-10 items-center justify-center bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJibGFjayIvPjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJibGFjayIvPjxwb2x5Z29uIHBvaW50cz0iMTAgMCwgMjAgMCwgMjAgMTAsIDEwIDEwIiBmaWxsPSJ3aGl0ZSIvPjxwb2x5Z29uIHBvaW50cz0iMCAxMCwgMTAgMTAsIDEwIDIwLCAwIDIwIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==')] text-white border-[3px] border-black font-mono text-[0.7rem] font-black uppercase tracking-widest hover:brightness-110 transition-colors shadow-[4px_4px_0px_#000] transform -skew-x-12"
            >
              <span className="bg-red-600 px-2 py-1 transform skew-x-12 border border-black shadow-sm">INIT COMM</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center bg-red-600 border-[3px] border-black text-white hover:bg-yellow-400 hover:text-black transition-colors shadow-[4px_4px_0px_#000] transform -skew-x-12"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="transform skew-x-12">
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </div>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-[72px] md:top-[88px] left-4 right-4 z-40 bg-zinc-950 border-[3px] border-black shadow-[8px_8px_0px_#ff0000] flex flex-col p-2 animate-in slide-in-from-top-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-4 px-4 font-mono text-sm font-bold uppercase text-zinc-100 border-b-2 border-dashed border-zinc-700 hover:bg-red-600 hover:text-white transition-colors text-center"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 w-full py-4 text-center font-mono text-xs font-bold uppercase tracking-widest bg-yellow-400 text-black hover:bg-red-600 hover:text-white transition-colors border-[3px] border-black shadow-[4px_4px_0px_#000]"
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
