import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 py-6 px-4 text-center relative overflow-hidden">

      {/* Checkered top border effect */}
      <div className="absolute top-0 left-0 w-full h-3 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJibGFjayIvPjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJibGFjayIvPjxwb2x5Z29uIHBvaW50cz0iMTAgMCwgMjAgMCwgMjAgMTAsIDEwIDEwIiBmaWxsPSJ3aGl0ZSIvPjxwb2x5Z29uIHBvaW50cz0iMCAxMCwgMTAgMTAsIDEwIDIwLCAwIDIwIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==')]"></div>

      <div className="max-w-[1200px] mx-auto flex flex-col items-center mt-4">

        {/* Social Links */}
        <div className="flex justify-center mb-6 border-[3px] border-black shadow-[3px_3px_0_#ff0000] w-fit mx-auto bg-yellow-400 divide-x-[3px] divide-black transform -skew-x-12">
          <a
            href="mailto:kankati.mokshagnaanurag@gmail.com"
            className="w-12 h-12 flex items-center justify-center text-black transition-colors duration-150 hover:bg-black hover:text-blue-400 transform skew-x-12"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com/MokshagnaAnurag"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 flex items-center justify-center text-black transition-colors duration-150 hover:bg-black hover:text-green-400 transform skew-x-12"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/mokshagnaanurag/"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 flex items-center justify-center text-black transition-colors duration-150 hover:bg-black hover:text-indigo-400 transform skew-x-12"
          >
            <Linkedin size={20} />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center flex-wrap mb-8 border-[3px] border-black w-fit mx-auto bg-black shadow-[4px_4px_0_#ffd700] transform -skew-x-12">
          <a href="#about" className="px-5 py-2 border-r-[3px] border-black font-mono text-[0.8rem] font-black text-white transition-colors duration-150 uppercase hover:bg-blue-500 hover:text-white transform skew-x-12">
            About
          </a>
          <a href="#experience" className="px-5 py-2 border-r-[3px] border-black font-mono text-[0.8rem] font-black text-white transition-colors duration-150 uppercase hover:bg-green-500 hover:text-black transform skew-x-12">
            Experience
          </a>
          <a href="#work" className="px-5 py-2 font-mono text-[0.8rem] font-black text-white transition-colors duration-150 uppercase hover:bg-indigo-500 hover:text-white transform skew-x-12">
            Projects
          </a>
        </div>

        <p className="text-[var(--color-industrial-white)] font-mono text-[0.85rem] mb-2">
          BUILT BY <strong className="text-[var(--color-industrial-yellow)]">MOKSHAGNA ANURAG KANKATI</strong>
        </p>
        <div className="mt-2 font-mono text-[0.75rem] text-[var(--color-industrial-white)] opacity-70">
          © {new Date().getFullYear()} — ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}
