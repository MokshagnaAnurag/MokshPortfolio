import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--color-industrial-dark)] py-12 px-6 text-center border-t-4 border-[var(--color-industrial-white)]">
      
      {/* Social Links */}
      <div className="flex justify-center mb-8 border-4 border-[var(--color-industrial-dark)] shadow-mech-sm w-fit mx-auto bg-[var(--color-industrial-white)] divide-x-4 divide-[var(--color-industrial-dark)]">
        <a 
          href="mailto:kankati.mokshagnaanurag@gmail.com" 
          className="w-14 h-14 flex items-center justify-center text-[var(--color-industrial-dark)] transition-colors duration-150 hover:bg-[var(--color-industrial-orange)] hover:text-[var(--color-industrial-white)]"
        >
          <Mail size={24} />
        </a>
        <a 
          href="https://github.com/MokshagnaAnurag" 
          target="_blank" 
          rel="noreferrer" 
          className="w-14 h-14 flex items-center justify-center text-[var(--color-industrial-dark)] transition-colors duration-150 hover:bg-[var(--color-industrial-green)] hover:text-[var(--color-industrial-dark)]"
        >
          <Github size={24} />
        </a>
        <a 
          href="https://www.linkedin.com/in/mokshagnaanurag/" 
          target="_blank" 
          rel="noreferrer" 
          className="w-14 h-14 flex items-center justify-center text-[var(--color-industrial-dark)] transition-colors duration-150 hover:bg-[var(--color-industrial-blue)] hover:text-[var(--color-industrial-white)]"
        >
          <Linkedin size={24} />
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-center flex-wrap mb-8 border-4 border-white/20 w-fit mx-auto">
        <a href="#about" className="px-5 py-2 border-r-4 border-white/20 font-mono text-[0.8rem] font-bold text-[var(--color-industrial-white)] transition-colors duration-150 uppercase hover:bg-[var(--color-industrial-white)] hover:text-[var(--color-industrial-dark)]">
          About
        </a>
        <a href="#experience" className="px-5 py-2 border-r-4 border-white/20 font-mono text-[0.8rem] font-bold text-[var(--color-industrial-white)] transition-colors duration-150 uppercase hover:bg-[var(--color-industrial-white)] hover:text-[var(--color-industrial-dark)]">
          Experience
        </a>
        <a href="#work" className="px-5 py-2 font-mono text-[0.8rem] font-bold text-[var(--color-industrial-white)] transition-colors duration-150 uppercase hover:bg-[var(--color-industrial-white)] hover:text-[var(--color-industrial-dark)]">
          Projects
        </a>
      </div>

      <p className="text-[var(--color-industrial-white)] font-mono text-[0.85rem] mb-2">
        BUILT BY <strong className="text-[var(--color-industrial-yellow)]">MOKSHAGNA ANURAG KANKATI</strong>
      </p>
      <div className="mt-2 font-mono text-[0.75rem] text-[var(--color-industrial-white)] opacity-70">
        © {new Date().getFullYear()} — ALL RIGHTS RESERVED
      </div>

    </footer>
  );
}
