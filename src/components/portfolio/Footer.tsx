import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-zinc-950 py-3 px-4 text-center relative overflow-hidden">

      {/* Checkered top border effect */}
      <div className="absolute top-0 left-0 w-full h-3 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJibGFjayIvPjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJibGFjayIvPjxwb2x5Z29uIHBvaW50cz0iMTAgMCwgMjAgMCwgMjAgMTAsIDEwIDEwIiBmaWxsPSJ3aGl0ZSIvPjxwb2x5Z29uIHBvaW50cz0iMCAxMCwgMTAgMTAsIDEwIDIwLCAwIDIwIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==')]"></div>

      <div className="max-w-[1200px] mx-auto flex flex-col items-center mt-3">

        {/* Social Links */}
        <div className="flex justify-center mb-3 border-[3px] border-black shadow-[3px_3px_0_#ff0000] w-fit mx-auto bg-yellow-400 divide-x-[3px] divide-black transform -skew-x-12">
          <a
            href="mailto:kankati.mokshagnaanurag@gmail.com"
            className="w-10 h-10 flex items-center justify-center text-black transition-colors duration-150 hover:bg-black hover:text-blue-400 transform skew-x-12"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://github.com/MokshagnaAnurag"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center text-black transition-colors duration-150 hover:bg-black hover:text-green-400 transform skew-x-12"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/mokshagnaanurag/"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center text-black transition-colors duration-150 hover:bg-black hover:text-indigo-400 transform skew-x-12"
          >
            <Linkedin size={18} />
          </a>
        </div>



        {/* Merged Built By Section with Stickers */}
        <div className="relative w-full max-w-3xl mx-auto mt-2 md:mt-4 py-1 flex flex-col items-center justify-center">

          {/* HIRE ME License Plate (Left side) */}
          <motion.div 
            animate={{ rotate: [-6, -4, -6], y: [0, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:block absolute left-2 lg:-left-4 top-1/2 -translate-y-1/2 hover:z-20 cursor-pointer"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <motion.div 
              whileHover={{ scale: 1.1, rotate: -10, transition: { type: "spring", stiffness: 400, damping: 10 } }}
              whileTap={{ scale: 0.8, rotate: -25, x: -30, transition: { type: "spring", stiffness: 300, bounce: 0.8 } }}
              className="bg-yellow-400 border-[2px] border-black rounded shadow-[2px_2px_0_#ef4444] p-1 w-24 flex flex-col items-center"
            >
              <span className="text-[0.4rem] font-bold uppercase tracking-widest text-red-600 mb-0.5">STATUS</span>
              <span className="font-display font-black italic text-lg text-black leading-none drop-shadow-[1px_1px_0_#fff]">HIRE ME</span>
            </motion.div>
          </motion.div>

          <p className="text-[var(--color-industrial-white)] font-mono text-[0.85rem] mb-2 relative z-10">
            BUILT BY <strong className="text-[var(--color-industrial-yellow)]">MOKSHAGNA ANURAG KANKATI</strong>
          </p>
          <div className="mt-2 font-mono text-[0.75rem] text-[var(--color-industrial-white)] opacity-70 relative z-10">
            © {new Date().getFullYear()} — ALL RIGHTS RESERVED
          </div>
         <div className="mt-4 font-display font-black italic text-[0.7rem] text-[var(--color-industrial-white)] opacity-50 relative z-10 tracking-[0.2em] uppercase">
  BUILD. TEST. ITERATE.
</div>

          {/* BUY ME A COFFEE Bumper Sticker (Right side) */}
          <motion.div 
            animate={{ rotate: [3, 5, 3], y: [0, -2, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="hidden md:block absolute right-2 lg:-right-4 top-1/2 -translate-y-1/2 hover:z-20 cursor-pointer"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 10, transition: { type: "tween", duration: 0.2, ease: "easeOut" } }}
              whileTap={{ scale: 1.15, rotate: 20, y: 10, transition: { type: "spring", stiffness: 150, bounce: 0.5 } }}
              className="bg-white border-[2px] border-black shadow-[2px_2px_0_#eab308] px-2 py-1 w-[140px] flex items-center justify-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-red-600 border-r-[1px] border-black"></div>
              <div className="absolute top-0 right-0 w-1.5 h-full bg-green-600 border-l-[1px] border-black"></div>
              <span className="font-mono font-black text-[0.65rem] text-black tracking-tighter uppercase ml-1">BUY ME A COFFEE</span>
              <span className="ml-1 text-sm">☕</span>
            </motion.div>
          </motion.div>

        </div>

        {/* Mobile version of stickers */}
        <div className="mt-6 flex flex-row justify-center md:hidden items-center gap-4">
           <motion.div 
              animate={{ rotate: [-3, -1, -3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="cursor-pointer"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: -10, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                whileTap={{ scale: 0.8, rotate: -25, x: -15, transition: { type: "spring", stiffness: 300, bounce: 0.8 } }}
                className="bg-yellow-400 border-[2px] border-black rounded shadow-[2px_2px_0_#ef4444] p-1 w-24 flex flex-col items-center"
              >
                <span className="text-[0.4rem] font-bold uppercase tracking-widest text-red-600 mb-0.5">STATUS</span>
                <span className="font-display font-black italic text-lg text-black leading-none drop-shadow-[1px_1px_0_#fff]">HIRE ME</span>
              </motion.div>
            </motion.div>

            <motion.div 
              animate={{ rotate: [2, 4, 2] }}
              transition={{ duration: 3.2, repeat: Infinity, delay: 0.5 }}
              className="cursor-pointer"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10, transition: { type: "tween", duration: 0.2, ease: "easeOut" } }}
                whileTap={{ scale: 1.15, rotate: 15, y: 5, transition: { type: "spring", stiffness: 150, bounce: 0.5 } }}
                className="bg-white border-[2px] border-black shadow-[2px_2px_0_#eab308] px-2 py-1 w-[140px] flex items-center justify-center relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-red-600 border-r-[1px] border-black"></div>
                <div className="absolute top-0 right-0 w-1.5 h-full bg-green-600 border-l-[1px] border-black"></div>
                <span className="font-mono font-black text-[0.65rem] text-black tracking-tighter uppercase mx-1">BUY ME A COFFEE</span>
                <span className="text-sm">☕</span>
              </motion.div>
            </motion.div>
        </div>

      </div>
    </footer>
  );
}
