import { Mail, Github, Linkedin } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const links = [
  { label: "Email", value: "kankati.mokshagnaanurag@gmail.com", href: "mailto:kankati.mokshagnaanurag@gmail.com", icon: Mail },
  { label: "GitHub", value: "github.com/MokshagnaAnurag", href: "https://github.com/MokshagnaAnurag", icon: Github },
  { label: "LinkedIn", value: "in/kankati-mokshagna-anurag", href: "https://linkedin.com/in/kankati-mokshagna-anurag/", icon: Linkedin },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal>
          <div className="flex justify-center">
            <SectionLabel index="07">Contact</SectionLabel>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-12 max-w-5xl text-center font-display text-[12vw] leading-[0.95] tracking-[-0.03em] md:text-[7.5vw]">
            Let&apos;s build something <span className="italic">quietly</span> exceptional.
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-10 max-w-xl text-center text-base text-muted-foreground md:text-lg">
            Actively seeking full-time hardware/software engineering roles and internships in robotics, space technologies, and autonomous systems.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mx-auto mt-16 max-w-4xl border-t border-hairline">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group grid grid-cols-12 items-center gap-4 border-b border-hairline py-6 transition-colors hover:bg-surface/30 px-4 md:py-8"
              >
                {/* Icon & Label */}
                <div className="col-span-12 flex items-center gap-4 sm:col-span-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-hairline bg-surface group-hover:bg-background transition-all duration-500 text-muted-foreground group-hover:text-foreground group-hover:scale-105">
                    <l.icon className="h-4.5 w-4.5" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    {l.label}
                  </span>
                </div>

                {/* Value */}
                <div className="col-span-10 sm:col-span-7">
                  <span className="font-display text-lg tracking-tight text-foreground transition-all duration-500 ease-out group-hover:text-accent-violet sm:text-xl md:text-2xl break-all block group-hover:translate-x-2">
                    {l.value}
                  </span>
                </div>

                {/* Arrow */}
                <div className="col-span-2 flex justify-end text-foreground/40 transition-colors group-hover:text-foreground sm:col-span-1">
                  <span className="font-mono text-lg transition-transform group-hover:translate-x-1.5">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
