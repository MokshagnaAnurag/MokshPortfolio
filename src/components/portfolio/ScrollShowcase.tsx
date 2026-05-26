import React, { useState, useEffect } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { Terminal, Cpu, Radio, Navigation } from "lucide-react";

export function ScrollShowcase() {
  const [logs, setLogs] = useState<string[]>([
    "[SYSTEM] Initiating AMR bringup sequence...",
    "[AMR] STM32 microcontroller active on /dev/ttyACM0.",
    "[AMR] RPLIDAR C1 scanner initialized successfully.",
    "[NAV2] Planner Server active on port 8085.",
    "[SLAM] Map matching active (confidence score: 0.962).",
  ]);

  const [targetLogIndex, setTargetLogIndex] = useState(0);

  const rawLogs = [
    "[NAV2] Path planner calculated optimal trajectory to TARGET_A.",
    "[AMR] Speed command received: linear=0.25 m/s, angular=0.08 rad/s.",
    "[LIDAR] Detected obstacle at angle 42.5°, range 1.82m. Re-planning...",
    "[NAV2] Obstacle avoidance route calculated in 4.2ms. Path updated.",
    "[SLAM] Pose updated: x=3.14m, y=1.28m, theta=0.68 rad.",
    "[SYSTEM] Telemetry uplink to ground station nominal.",
    "[AMR] Reached waypoint TARGET_A. Decelerating...",
    "[SYSTEM] Battery levels check: 98.4% (voltage 24.2V).",
    "[AMR] New destination received: TARGET_B: [x=6.4, y=-3.1].",
    "[NAV2] Navigating to TARGET_B...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs((prev) => {
        const nextLog = rawLogs[targetLogIndex];
        setTargetLogIndex((prevIdx) => (prevIdx + 1) % rawLogs.length);
        const newLogs = [...prev, nextLog];
        if (newLogs.length > 6) {
          newLogs.shift();
        }
        return newLogs;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [targetLogIndex]);

  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-surface/10 border-y border-hairline">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-[0.03]" aria-hidden />
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 text-center flex flex-col items-center">
        <Reveal>
          <SectionLabel index="— Interlude">Simulation Telemetry</SectionLabel>
        </Reveal>
      </div>

      <ContainerScroll
        titleComponent={
          <Reveal delay={0.05}>
            <div className="text-center px-4 mb-8 md:mb-16">
              <h2 className="font-display text-4xl leading-[1.05] tracking-tight md:text-6xl text-foreground">
                Visualizing <span className="italic text-foreground/85">real-time</span> reasoning.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-[10px] sm:text-xs leading-relaxed text-muted-foreground font-mono uppercase tracking-[0.25em]">
                ROS2 Navigation2 Simulator · Autonomous Control Station
              </p>
            </div>
          </Reveal>
        }
      >
        <div className="h-full w-full bg-[#0a0a0c] text-foreground flex flex-col p-5 md:p-7 overflow-hidden text-left">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between border-b border-hairline/40 pb-4 shrink-0">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-hairline/60 bg-surface/20">
                <Radio className="h-4.5 w-4.5 text-accent-violet animate-pulse" />
              </div>
              <div>
                <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Ground Control</div>
                <div className="font-mono text-[11px] font-bold text-foreground tracking-tight">MISSION_CONTROL // LUNABOT_V2</div>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/5 px-3 py-1 font-mono text-[8px] uppercase tracking-widest text-emerald-500 font-semibold">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              Uplink Nom · 12ms
            </div>
          </div>

          {/* Grid Panel Layout */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mt-5 overflow-hidden">
            {/* Left OBC Metrics Panel */}
            <div className="flex flex-col justify-between rounded-2xl border border-hairline/40 bg-surface/10 p-4 md:p-5">
              <div className="flex items-center justify-between border-b border-hairline/40 pb-2">
                <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <Cpu className="h-3.5 w-3.5 text-emerald-500" />
                  OBC Diagnostics
                </span>
                <span className="font-mono text-[8px] text-emerald-500 font-bold uppercase tracking-wider animate-pulse">NOMINAL</span>
              </div>
              <div className="space-y-3.5 py-4 font-mono text-[10px] text-muted-foreground/80">
                <div className="flex justify-between border-b border-hairline/20 pb-1">
                  <span>MCU Temp</span>
                  <span className="text-foreground font-medium">36.8°C</span>
                </div>
                <div className="flex justify-between border-b border-hairline/20 pb-1">
                  <span>Battery</span>
                  <span className="text-foreground font-medium">98.4% (24.2V)</span>
                </div>
                <div className="flex justify-between border-b border-hairline/20 pb-1">
                  <span>Core Load</span>
                  <span className="text-foreground font-medium">14.2%</span>
                </div>
                <div className="flex justify-between border-b border-hairline/20 pb-1">
                  <span>Downlink</span>
                  <span className="text-foreground font-medium">4.2 Mbps</span>
                </div>
                <div className="flex justify-between">
                  <span>Nav2 Stack</span>
                  <span className="text-emerald-500 font-bold uppercase">ACTIVE</span>
                </div>
              </div>
            </div>

            {/* Center Radar Scanner Panel */}
            <div className="flex flex-col rounded-2xl border border-hairline/40 bg-surface/10 p-4 md:p-5 relative overflow-hidden group">
              <div className="flex items-center justify-between border-b border-hairline/40 pb-2 shrink-0">
                <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <Navigation className="h-3.5 w-3.5 text-accent-violet animate-pulse" />
                  LIDAR Scan &amp; Path Plan
                </span>
                <span className="font-mono text-[8px] text-muted-foreground/60">GRID: 0.5m</span>
              </div>
              <div className="flex-1 flex items-center justify-center py-4 relative min-h-[140px]">
                {/* Concentric circles */}
                <div className="relative h-32 w-32 md:h-36 md:w-36 rounded-full border border-hairline/45 flex items-center justify-center">
                  <div className="h-24 w-24 rounded-full border border-hairline/25 flex items-center justify-center">
                    <div className="h-14 w-14 rounded-full border border-hairline/15 flex items-center justify-center">
                      <div className="h-6 w-6 rounded-full border border-hairline/10" />
                    </div>
                  </div>
                  {/* Crosshairs */}
                  <div className="absolute inset-y-0 left-1/2 w-[0.5px] bg-hairline/25" />
                  <div className="absolute inset-x-0 top-1/2 h-[0.5px] bg-hairline/25" />
                  {/* Sweep Line */}
                  <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,oklch(0.53_0.25_295/0.1),transparent_60%)] animate-orbit" />
                  {/* Plotted Route Line */}
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 144 144">
                    <path d="M 72,72 L 95,50 L 110,60 L 125,35" fill="none" stroke="oklch(0.53 0.25 295 / 0.75)" strokeWidth="1.5" strokeDasharray="3 2" />
                    {/* Active Robot Point */}
                    <circle cx="72" cy="72" r="3" fill="var(--color-foreground)" />
                    {/* Target Waypoint */}
                    <circle cx="125" cy="35" r="3.5" fill="oklch(0.53 0.25 295)" className="animate-pulse" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Terminal Console Panel */}
            <div className="flex flex-col justify-between rounded-2xl border border-hairline/40 bg-surface/10 p-4 md:p-5 sm:col-span-2 lg:col-span-1 overflow-hidden">
              <div className="flex items-center justify-between border-b border-hairline/40 pb-2 shrink-0">
                <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <Terminal className="h-3.5 w-3.5 text-accent-violet" />
                  ROS2 Terminal Feed
                </span>
                <span className="font-mono text-[8px] text-muted-foreground/40">TTY: ACM0</span>
              </div>
              <div className="flex-1 flex flex-col justify-end gap-1.5 py-4 font-mono text-[9px] text-foreground/80 leading-relaxed overflow-hidden h-32 md:h-36">
                {logs.map((log, idx) => (
                  <div key={idx} className="truncate select-none">
                    <span className="text-accent-violet/60 select-none mr-1.5">&gt;</span>
                    {log}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
