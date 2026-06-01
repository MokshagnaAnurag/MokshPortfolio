import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const meta = [
  ["Credentials", "ECE Graduate"],
  ["Based", "Andhra Pradesh, IN"],
  ["Focus", "Robotics · IoT · Autonomy"],
  ["Seeking", "Full-time Roles & Internships"],
];

export function About() {
  return (
    <section id="about" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal>
          <SectionLabel index="06">About</SectionLabel>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-display text-3xl leading-[1.2] tracking-tight text-foreground md:text-[2.6rem] md:leading-[1.15]">
                I build systems that think quietly — robotics, aerospace platforms and
                embedded intelligence designed with the same restraint as fine
                instruments.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                I am an Electronics and Communication Engineering graduate from MVGR College of Engineering with strong interests in IoT, Robotics, Autonomous Systems, AI/ML, Embedded Systems, and Physical AI.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                I completed internships at Daloft Aerospace and IIT Tirupati Navavishkar I-Hub Foundation, where I worked on advanced autonomous and space technology systems. At Daloft Aerospace, I contributed to the development of autonomous drone systems using ROS 2, PX4, and ArduPilot, focusing on real-time simulation, navigation, and control. At IIT Tirupati Navavishkar I-Hub Foundation, I worked on the design and development of a modular 1U CubeSat prototype by integrating subsystems such as an RP2040-based onboard computer, LoRaWAN communication modules, and multi-sensor arrays for telemetry and control.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Beyond academics and internships, I actively contribute to open-source initiatives through SwechaAP, including projects such as Voice AI Telugu and OpenStreetMap. I am passionate about building intelligent, scalable, and impactful engineering solutions that bridge software, embedded hardware, and autonomous technologies.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-8 max-w-2xl border-t border-hairline/60 pt-6">
                <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">My areas of interest include:</h4>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-[13px] text-muted-foreground font-mono">
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-accent-violet/75" />
                    IoT & Embedded Systems
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-accent-violet/75" />
                    Robotics & Autonomous Navigation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-accent-violet/75" />
                    ROS 2, PX4 & Drone Tech
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-accent-violet/75" />
                    AI/ML Applications
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-accent-violet/75" />
                    Physical AI
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-accent-violet/75" />
                    Space Tech & CubeSats
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground/80 md:text-lg italic">
                I am continuously exploring opportunities to contribute to innovative projects, research, and real-world engineering challenges that create meaningful impact.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="editorial-card p-8 md:p-10 relative overflow-hidden transition-all duration-500 hover:border-accent-violet/30 hover:shadow-lift bg-background/90 backdrop-blur-md group">
                {/* Minimalist orbital decoration */}
                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full border border-accent-violet/10 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110 pointer-events-none" />
                <div className="absolute -left-16 -bottom-16 h-36 w-36 rounded-full border border-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110 pointer-events-none" />

                <div className="label-mono relative z-10">Index</div>
                <dl className="mt-8 divide-y divide-hairline relative z-10">
                  {meta.map(([k, v]) => (
                    <div key={k} className="flex items-baseline justify-between gap-6 py-4">
                      <dt className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                        {k}
                      </dt>
                      <dd className="text-right font-display text-lg tracking-tight text-foreground/90">
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
