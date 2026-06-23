import { Radio } from "lucide-react";
import { motion } from "framer-motion";

export function NewsTicker() {
  return (
    <div className="bg-red-600 text-white border-y-[4px] border-black py-2 overflow-hidden flex items-center font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.2em] relative z-20">
      <div className="bg-yellow-400 text-black px-4 py-2 border-r-[4px] border-black z-10 flex items-center gap-2 absolute left-0 top-0 bottom-0 shadow-[4px_0_0_#000] transform skew-x-12 -ml-2">
         <Radio size={16} className="animate-pulse transform -skew-x-12" /> 
         <span className="transform -skew-x-12 hidden md:inline">PIT STOP RADIO</span>
         <span className="transform -skew-x-12 md:hidden">RADIO</span>
      </div>
      
      {/* Marquee Animation */}
      <div className="flex whitespace-nowrap pl-[150px] md:pl-[220px] overflow-hidden w-full">
        <motion.div 
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        >
          {Array(10).fill(null).map((_, i) => (
            <span key={i} className="mx-4 flex items-center gap-4">
              OPEN FOR FULL TIME ROLES AND INTERNSHIPS
              <span className="w-2 h-2 bg-yellow-400 rounded-full inline-block"></span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
