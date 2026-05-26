import { CpuArchitecture } from "@/components/ui/cpu-architecture";
import { SectionLabel } from "./SectionLabel";

const metadata = ["ROS2", "PX4", "CubeSat", "SLAM", "Embedded", "Autonomy"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-32 md:pb-40 md:pt-44">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-60" aria-hidden />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.55_0.22_265/0.06),transparent_70%)]" aria-hidden />

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 md:px-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="flex flex-wrap items-center gap-3">
            <SectionLabel index="01">Portfolio · 2026</SectionLabel>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/5 px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              Open to Roles &amp; Internships
            </div>
          </div>

          <h1 className="mt-10 font-display text-[15vw] leading-[0.86] tracking-[-0.04em] text-foreground sm:text-[11vw] lg:text-[8.5vw]">
            Mokshagna
            <br />
            <span className="italic text-foreground/85">Anurag</span> Kankati
          </h1>

          <div className="mt-12 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-[auto_1fr] sm:gap-12">
            <div className="label-mono whitespace-nowrap pt-1">— Profile</div>
            <div>
              <p className="text-xl text-foreground sm:text-2xl leading-snug">
                Electronics &amp; Embedded Systems Engineer building intelligent autonomous technologies.
              </p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                Focused on robotics, CubeSat subsystems, control architectures, and learning-enabled autonomy — quietly bridging physical hardware and digital reasoning with considered intent.
              </p>
            </div>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-3.5 text-sm text-background transition hover:scale-[1.02]"
            >
              View Work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full border border-hairline bg-surface/50 px-7 py-3.5 text-sm text-foreground transition hover:bg-surface hover:scale-[1.02]"
            >
              Contact for Roles
              <span className="text-muted-foreground transition-transform group-hover:translate-x-0.5">↗</span>
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-5 flex flex-col justify-center gap-6">
          <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[380px] overflow-hidden rounded-[2rem] border border-hairline shadow-editorial flex items-center justify-center p-6 bg-surface/10">
            <CpuArchitecture className="h-full w-full text-foreground/45" text="OBC" />
          </div>
          <div className="overflow-hidden rounded-[1.5rem] border border-hairline bg-surface/30 backdrop-blur-sm shadow-editorial transition-all duration-500 hover:border-accent-violet/20">
            {/* Header bar of console */}
            <div className="flex items-center justify-between border-b border-hairline px-5 py-3">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                System Status: Nominal
              </div>
              <div className="font-mono text-[9px] text-muted-foreground/50">
                BAUD: 115200 · 8N1
              </div>
            </div>
            {/* Grid stats */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-3.5 p-5 font-mono text-[10px] text-muted-foreground/80">
              <div className="flex justify-between border-b border-hairline/30 pb-1.5">
                <span className="uppercase text-muted-foreground/55 tracking-wider">Focus</span>
                <span className="text-foreground tracking-normal font-sans text-[11px] font-medium">Autonomy &amp; Space Tech</span>
              </div>
              <div className="flex justify-between border-b border-hairline/30 pb-1.5">
                <span className="uppercase text-muted-foreground/55 tracking-wider">Rate</span>
                <span className="text-foreground font-medium">400 Hz Real-Time</span>
              </div>
              <div className="flex justify-between">
                <span className="uppercase text-muted-foreground/55 tracking-wider">Architecture</span>
                <span className="text-foreground font-medium">Cortex-M · ROS2</span>
              </div>
              <div className="flex justify-between">
                <span className="uppercase text-muted-foreground/55 tracking-wider">Availability</span>
                <span className="text-foreground font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-widest text-[9px] font-bold">Open to Roles</span>
              </div>
            </div>
            {/* Tags row */}
            <div className="flex flex-wrap gap-1.5 border-t border-hairline bg-surface/10 px-5 py-3">
              {metadata.map((m) => (
                <span
                  key={m}
                  className="rounded border border-hairline/65 bg-background/50 px-2 py-0.5 font-mono text-[8px] uppercase tracking-widest text-muted-foreground"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
