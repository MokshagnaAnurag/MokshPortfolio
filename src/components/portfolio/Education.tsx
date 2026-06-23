import React from "react";
import { Reveal } from "./Reveal";
import { GraduationCap, MapPin } from "lucide-react";
import mvgrImg from "../../assets/mvgr.png";
import apexImg from "../../assets/apex.png";
import fortcityImg from "../../assets/fortcity.png";

const educationItems = [
  {
    institution: "MVGR College of Engineering",
    degree: "B.Tech — Electronics & Communication",
    period: "2022 – 2026",
    location: "AP, India",
    idNo: "STU-73-ECE",
    imageSrc: mvgrImg,
  },
  {
    institution: "Apex Junior College",
    degree: "Class 12 — PCM",
    period: "2020 – 2022",
    location: "AP,India",
    idNo: "STU-05-PCM",
    imageSrc: apexImg,
  },
  {
    institution: "Fort City School",
    degree: "Secondary School Education",
    period: "2014 – 2020",
    location: "AP,India",
    idNo: "STU-23-SEC",
    imageSrc: fortcityImg,
  },
];

export function Education() {
  return (
    <div id="education">
      {/* ----------------------------- */}
      {/* ACADEMIC RECORDS (BLACK BG)   */}
      {/* ----------------------------- */}
      <section className="relative py-24 bg-black border-b-[8px] border-zinc-900 overflow-hidden font-sans">
        <div className="mx-auto max-w-[1200px] px-6 relative z-10">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white flex justify-center items-center gap-3">
                <GraduationCap className="text-red-600" size={40} />
                Academic <span className="text-red-600">Records</span>
              </h2>
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-400 mt-2 font-bold">
                Official Student Credentials
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center max-w-[1150px] mx-auto">
            {educationItems.map((it, i) => {
              return (
                <Reveal key={it.institution} delay={i * 0.1}>
                  <div className="group relative w-full max-w-[360px] bg-white rounded-lg shadow-[10px_10px_0_#3b82f6] border-[3px] border-zinc-800 overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-[15px_15px_0_#ef4444] flex flex-col">
                    <div className="w-full bg-blue-900 text-white flex justify-between items-center px-4 py-2 border-b-[3px] border-black relative">
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-zinc-900 rounded-full opacity-50"></div>
                      <span className="font-display font-black text-sm uppercase tracking-widest mt-1">STUDENT ID</span>
                      <span className="font-mono text-[0.6rem] uppercase tracking-widest text-blue-200">{it.period}</span>
                    </div>

                    <div className="flex p-4 gap-4 bg-yellow-50 bg-opacity-30 relative">
                      <div className="w-24 flex flex-col items-center gap-2">
                        <div className="w-20 h-24 bg-white border-[2px] border-black shadow-[3px_3px_0_#000] flex flex-col items-center justify-center p-1 rounded-sm overflow-hidden group-hover:bg-red-50 transition-colors">
                          <img src={it.imageSrc} alt={it.institution} className="w-full h-full object-contain mix-blend-multiply" />
                        </div>
                        <div className="font-mono text-[0.55rem] font-bold text-center w-full uppercase break-words leading-tight mt-1 text-zinc-600">ID: {it.idNo}</div>
                      </div>

                      <div className="flex-1 flex flex-col pt-1">
                        <h3 className="font-display text-lg font-black uppercase text-black leading-tight mb-2">{it.institution}</h3>
                        <div className="flex flex-col gap-1.5 mb-3">
                          <div className="flex flex-col">
                            <span className="font-mono text-[0.5rem] uppercase text-zinc-500 font-bold tracking-widest">COURSE / PROGRAM</span>
                            <span className="font-sans text-xs font-bold text-red-600">{it.degree}</span>
                          </div>
                        </div>

                        <div className="mt-auto border-t-2 border-dashed border-zinc-300 pt-2 flex justify-between items-end">
                          <div className="flex items-center gap-1 text-zinc-500">
                            <MapPin size={12} />
                            <span className="font-mono text-[0.6rem] font-bold uppercase">{it.location}</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="font-display text-xs text-blue-900 italic opacity-80 mb-0.5">Authorized</div>
                            <div className="w-16 h-px bg-black"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full h-5 bg-white border-t-[3px] border-black flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full opacity-60" style={{ backgroundImage: "repeating-linear-gradient(to right, #000 0, #000 2px, transparent 2px, transparent 4px, #000 4px, #000 6px, transparent 6px, transparent 7px)" }}></div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
