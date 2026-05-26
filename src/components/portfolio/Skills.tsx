import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const groups = [
  {
    title: "Programming & Tools",
    items: ["C", "Python", "MATLAB", "Git", "Linux", "OpenCV", "Fusion 360", "SolidWorks"],
  },
  {
    title: "Embedded & IoT",
    items: ["STM32", "ESP32", "NodeMCU", "Arduino", "Raspberry Pi", "UART", "MQTT"],
  },
  {
    title: "Robotics & Simulation",
    items: ["RPLIDAR C1 & A1", "Camera Modules", "URDF", "TF", "RViz", "Gazebo", "SLAM", "Nav2", "MoveIt"],
  },
  {
    title: "Communication & Cloud",
    items: ["LoRa", "Zigbee", "Wi-Fi", "Bluetooth", "RFID", "NFC", "Google Firebase", "ThingSpeak"],
  },
];

interface AchievementItem {
  no: string;
  award: string;
  host: string;
  detail?: string;
}

const achievements: AchievementItem[] = [
  {
    no: "01",
    award: "Top 100 National Finalist",
    host: "Odoo Hackathon 2025",
    detail: "Secured top standing among 15,000+ competing teams nationwide.",
  },
  {
    no: "02",
    award: "2nd Place & 1 Lakh Prize Winner",
    host: "AVISHKAR Season-2 Hackathon",
    detail: "Awarded top standing and cash grant for innovative prototype design.",
  },
  {
    no: "03",
    award: "Rank 6 Nationwide",
    host: "SENSE Academia Scholarship",
    detail: "Awarded high national merit standing in the Embedded Systems Scholarship Exam.",
  },
  {
    no: "04",
    award: "Top 10 National Finalist",
    host: "IIT BHU — Serve Smart",
    detail: "Recognized in the Serve Smart Hackathon for a smart city infrastructure project.",
  },
  {
    no: "05",
    award: "National Finalist",
    host: "IIT Kanpur — Hack IITK",
    detail: "Selected for cybersecurity prototype showcasing at the C3i Hub.",
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal>
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel index="06">Capability Architecture</SectionLabel>
              <h2 className="mt-8 max-w-3xl font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
                A working <span className="italic">vocabulary</span>.
              </h2>
            </div>
            <p className="max-w-sm text-base text-muted-foreground">
              The systems, languages and disciplines I reach for — organised by intent,
              not by skill bars.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-[2rem] border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.04}>
              <div className="h-full bg-background p-8 md:p-10">
                <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <span className="h-px w-6 bg-foreground/15" />
                </div>
                <h3 className="mt-5 font-display text-2xl tracking-tight">{g.title}</h3>
                <ul className="mt-6 space-y-2.5">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-baseline justify-between text-sm text-foreground/85"
                    >
                      <span>{it}</span>
                      <span className="ml-4 flex-1 translate-y-[-3px] border-b border-dashed border-hairline" />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Distinctions & Achievements */}
        <div className="mt-32 md:mt-48">
          <Reveal>
            <div className="border-t border-hairline pt-16">
              <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <h3 className="font-display text-3xl tracking-tight md:text-4xl">
                    Honors & Distinctions
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-sm">
                    Podium placements and finalist rankings in national exams and hackathons.
                  </p>
                </div>
              </div>

              <div className="mt-16 divide-y divide-hairline">
                {achievements.map((a, i) => (
                  <Reveal key={a.no} delay={i * 0.04}>
                    <div className="group grid grid-cols-12 items-baseline gap-6 py-6 transition-colors hover:bg-surface/30 px-2">
                      {/* Number */}
                      <div className="col-span-12 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground/60 sm:col-span-1">
                        {a.no}
                      </div>

                      {/* Award & Detail */}
                      <div className="col-span-12 sm:col-span-7">
                        <h4 className="font-display text-lg md:text-xl tracking-tight text-foreground">
                          {a.award}
                        </h4>
                        {a.detail && (
                          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                            {a.detail}
                          </p>
                        )}
                      </div>

                      {/* Host */}
                      <div className="col-span-12 sm:col-span-4 flex sm:justify-end items-center">
                        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground bg-surface/50 border border-hairline/60 rounded-full px-4 py-1.5 transition-colors group-hover:border-foreground/20 group-hover:bg-background">
                          {a.host}
                        </span>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
