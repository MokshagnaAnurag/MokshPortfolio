import { motion, useReducedMotion } from "framer-motion";
import {
  Cpu,
  Radio,
  Bot,
  Satellite,
  Activity,
  BrainCircuit,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { FeatureCard } from "@/components/ui/grid-feature-cards";

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

/* ─── Capability feature cards ───────────────────────────────────────────── */
const capabilityFeatures = [
  {
    title: "Embedded Intelligence",
    icon: Cpu,
    description:
      "Designing firmware and hardware integration for STM32, ESP32, RP2040 and Arduino-based systems with real-time constraints.",
  },
  {
    title: "Autonomous Navigation",
    icon: Bot,
    description:
      "Full-stack robotics using ROS 2, Nav2, SLAM and sensor fusion — from LIDAR mapping to autonomous path planning.",
  },
  {
    title: "Wireless & IoT",
    icon: Radio,
    description:
      "End-to-end IoT solutions over LoRa, Zigbee, MQTT and cloud integrations with Firebase and ThingSpeak.",
  },
  {
    title: "Space & CubeSats",
    icon: Satellite,
    description:
      "OBC design and integration for a 1U CubeSat — LoRaWAN telemetry, multi-sensor arrays, and RP2040-based control systems.",
  },
  {
    title: "Physical AI",
    icon: Activity,
    description:
      "Integrating AI models with physical actuators and sensors for real-world interaction, edge inference, and intelligent control.",
  },
  {
    title: "AI / ML Applications",
    icon: BrainCircuit,
    description:
      "Applying computer vision and machine learning to real-world robotics — OpenCV pipelines, voice AI (Telugu) and sensor analytics.",
  },
];

/* ─── Animated wrapper (mirrors demo.tsx) ───────────────────────────────── */
function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: {
  delay?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <>{children}</>;
  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal>
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel index="07">Capability Architecture</SectionLabel>
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

        {/* ── Capability Feature Cards (MOVED TO TOP) ───────────────────── */}
        <div className="mt-24">
          <AnimatedContainer className="mb-10 max-w-2xl">
            <h3 className="font-display text-3xl tracking-tight md:text-4xl">
              Core <span className="italic">capabilities</span>
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Six domains where I've shipped real work — from firmware to orbit.
            </p>
          </AnimatedContainer>

          <AnimatedContainer
            delay={0.3}
            className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed border-hairline sm:grid-cols-2 md:grid-cols-3 rounded-[1.5rem] overflow-hidden"
          >
            {capabilityFeatures.map((feature, i) => (
              <FeatureCard key={i} feature={feature} />
            ))}
          </AnimatedContainer>
        </div>

        {/* Skill groups grid (MOVED BELOW) */}
        <div className="mt-32">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <h3 className="font-display text-3xl tracking-tight md:text-4xl">
                Technical <span className="italic">stack</span>
              </h3>
            </div>
          </Reveal>
          
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-[2rem] border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
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
