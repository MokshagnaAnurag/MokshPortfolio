import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const items = [
  {
    institution: "MVGR College of Engineering",
    degree: "Bachelor of Technology — Electronics & Communication Engineering",
    period: "Nov 2022 – Apr 2026",
    location: "Vizianagaram, AP",
    skills: "Arduino, Internet of Things (IoT)",
  },
  {
    institution: "Apex Junior College",
    degree: "Class 12 — PCM",
    period: "Jun 2020 – May 2022",
    location: "India",
  },
  {
    institution: "Fort City School",
    degree: "Secondary School Education",
    period: "Jun 2014 – Mar 2020",
    grade: "Grade: A",
    location: "India",
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-32 md:py-44 bg-surface/30">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal>
          <SectionLabel index="04">Education</SectionLabel>
          <h2 className="mt-8 max-w-3xl font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
            Academic <span className="italic">foundations</span>.
          </h2>
        </Reveal>

        <div className="mt-20 border-t border-hairline">
          {items.map((it, i) => (
            <Reveal key={it.institution} delay={i * 0.05}>
              <div className="group grid grid-cols-12 items-baseline gap-6 border-b border-hairline py-8 transition-colors hover:bg-surface/60 md:py-10">
                {/* Period */}
                <div className="col-span-12 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground md:col-span-3">
                  {it.period}
                </div>

                {/* Institution & Degree */}
                <div className="col-span-12 md:col-span-5">
                  <h3 className="font-display text-2xl tracking-tight md:text-3xl">
                    {it.institution}
                  </h3>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {it.degree}
                  </p>
                </div>

                {/* Info (Skills/Grade) */}
                <div className="col-span-12 text-sm leading-relaxed text-muted-foreground md:col-span-4 md:text-right">
                  {it.skills && (
                    <div className="font-mono text-[11px] tracking-wide">
                      <span className="text-muted-foreground/60 uppercase">Skills: </span>
                      {it.skills}
                    </div>
                  )}
                  {it.grade && (
                    <div className="font-mono text-[11px] tracking-wide">
                      <span className="text-muted-foreground/60 uppercase">Result: </span>
                      {it.grade}
                    </div>
                  )}
                  <div className="mt-1 font-mono text-[10px] text-muted-foreground/45 uppercase tracking-wider">
                    {it.location}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
