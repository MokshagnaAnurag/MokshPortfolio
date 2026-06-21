import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const links = [
  { label: "Email", value: "kankati.mokshagnaanurag@gmail.com", href: "mailto:kankati.mokshagnaanurag@gmail.com", icon: Mail },
  { label: "GitHub", value: "github.com/MokshagnaAnurag", href: "https://github.com/MokshagnaAnurag", icon: Github },
  { label: "LinkedIn", value: "in/mokshagnaanurag", href: "https://www.linkedin.com/in/mokshagnaanurag/", icon: Linkedin },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-[var(--color-industrial-dark)] border-b-4 border-[var(--color-industrial-dark)]">
      
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <div className="inline-flex items-center font-mono text-xs font-bold tracking-[0.2em] uppercase bg-[#0d0d0d] text-[var(--color-industrial-yellow)] px-4 py-1 border border-[var(--color-industrial-yellow)] shadow-[0_0_12px_rgba(255,204,0,0.2),4px_4px_0_var(--color-industrial-yellow)] mb-12 relative">
            <span className="mr-2 text-[var(--color-industrial-yellow)] opacity-70">[&gt;</span>
            CONTACT
            <span className="ml-2 text-[var(--color-industrial-yellow)] opacity-70">]</span>
          </div>

          <h2 className="font-display text-[clamp(2.8rem,6vw,5.5rem)] font-black uppercase tracking-tighter mb-16 leading-[0.9] text-[var(--color-industrial-white)]">
            Let's build something <br/>
            <span className="text-[var(--color-industrial-cyan)] text-stroke-mech-white">exceptional</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-4 border-mech shadow-mech-lg bg-[var(--color-industrial-white)] clip-mech-alt">
            
            {/* Left Info Panel */}
            <div className="bg-[var(--color-industrial-dark)] border-b-4 md:border-b-0 md:border-r-4 border-mech p-8 md:p-12">
              <h3 className="text-3xl font-display font-black text-[var(--color-industrial-white)] uppercase mb-8">
                Reach Out
              </h3>
              
              <div className="space-y-0">
                {links.map((l) => (
                  <div key={l.label} className="flex items-start gap-4 py-5 border-b border-white/10 last:border-b-0">
                    <div className="w-12 h-12 border-2 border-[var(--color-industrial-white)] shrink-0 flex items-center justify-center text-[var(--color-industrial-yellow)] bg-white/5">
                      <l.icon size={22} />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-1.5">
                        {l.label}
                      </div>
                      <div className="font-mono text-sm sm:text-base font-bold text-[var(--color-industrial-white)]">
                        <a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="text-[var(--color-industrial-yellow)] hover:text-[var(--color-industrial-white)] hover:underline transition-colors break-all">
                          {l.value}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Action Panel */}
            <div className="bg-[var(--color-industrial-bg)] p-8 md:p-12 flex flex-col justify-center items-start relative">
              <div className="absolute top-4 right-4 bg-[#0d0d0d] text-[var(--color-industrial-green)] font-mono text-[0.7rem] font-bold px-3 py-1 border border-[var(--color-industrial-green)] shadow-[0_0_8px_rgba(0,255,65,0.25)] tracking-widest">
                $ STATUS.READY
              </div>

              <h3 className="font-display text-3xl font-black uppercase mb-4 text-[var(--color-industrial-dark)]">
                Currently Seeking
              </h3>
              <p className="font-mono text-base text-gray-800 leading-relaxed border-l-[4px] border-[var(--color-industrial-blue)] pl-5 bg-white/50 py-4 pr-3 shadow-mech-sm">
                Full-time roles, internships, JRF, and project associate positions in hardware engineering, robotics, aerospace, and autonomous systems.
              </p>

              <div className="mt-12 w-full">
                <a
                  href="mailto:kankati.mokshagnaanurag@gmail.com"
                  className="group flex w-full justify-between items-center bg-[var(--color-industrial-yellow)] text-[var(--color-industrial-dark)] border-mech px-6 py-4 font-black uppercase shadow-mech-sm transition-all duration-200 hover:bg-[var(--color-industrial-green)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                >
                  <span className="text-xl">SEND AN EMAIL</span>
                  <ArrowRight size={24} strokeWidth={3} className="transition-transform group-hover:translate-x-2" />
                </a>
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
