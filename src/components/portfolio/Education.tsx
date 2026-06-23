import React from "react";
import { Reveal } from "./Reveal";
import { GraduationCap, MapPin, Award, Medal, Flag } from "lucide-react";
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
    idNo: "STU-23-Green",
    imageSrc: fortcityImg,
  },
];

const achievements = [
  { id: "01", name: "Odoo Hackathon 2025", award: "Top 100 National Finalist", desc: "Selected from 15,000+ participating teams nationwide." },
  { id: "02", name: "AVISHKAR Season-2 Hackathon", award: "2nd Place & ₹1 Lakh Prize", desc: "Awarded for an innovative IoT-based agricultural solution." },
  { id: "03", name: "SENSE Academia Scholarship", award: "Rank 6 Nationwide", desc: "Awarded high national merit standing in the Embedded Systems Scholarship Examination." },
  { id: "04", name: "AP State Hackathon on Drones", award: "Presented Drone Solutions", desc: "Proposed cutting-edge drone-based disaster management solutions." },
  { id: "05", name: "Serve Smart Hackathon (IIT BHU)", award: "Top 10 National Finalist", desc: "Recognized for developing a smart city infrastructure project." },
  { id: "06", name: "Hack IITK (C3i Hub)", award: "Finalist", desc: "Advanced to finals for a cybersecurity-driven IoT prototype." }
];

const licenses = [
  { title: "Cybersecurity Analyst Job Simulation", issuer: "Forage - Tata", date: "Aug 2025", licenseNo: "yAKtKExm65kpwQiMb", sealColor: "bg-red-600" },
  { title: "Industry 4.0 & Industrial IoT", issuer: "NPTEL", date: "May 2025", licenseNo: "NPTEL25CS43S660400772", sealColor: "bg-blue-600" },
  { title: "Natural Language Processing", issuer: "IIT Kharagpur", date: "Jan 2025", licenseNo: "N/A", sealColor: "bg-green-600" },
  { title: "Practical Ethical Hacking", issuer: "TCM Security", date: "Oct 2024", licenseNo: "196z74v0", sealColor: "bg-orange-500" },
  { title: "Intro to MATLAB & Simulink", issuer: "NIELIT", date: "Aug 2024", licenseNo: "OLC 21145", sealColor: "bg-purple-600" }
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

      {/* ----------------------------- */}
      {/* RACING ACHIEVEMENTS & LICENSES (WHITE BG) */}
      {/* ----------------------------- */}
      <section className="relative py-24 bg-white border-b-[8px] border-black overflow-hidden font-sans">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>

        <div className="mx-auto max-w-[1300px] px-6 relative z-10">

          {/* ---- RACING ACHIEVEMENTS ---- */}
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-black flex justify-center items-center gap-3">
                <Flag className="text-red-600" size={44} strokeWidth={2.5} />
                Racing <span className="text-red-600">Achievements</span>
              </h2>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500 mt-3 font-bold">
                Podium Finishes & Accolades
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1100px] mx-auto mb-32">
            {achievements.map((ach, i) => (
              <Reveal key={ach.id} delay={i * 0.1}>
                {/* Horizontal Leaderboard Card */}
                <div className="group flex items-center w-full bg-[#fcfcf9] p-4 shadow-[6px_6px_0_#000] border-[3px] border-black transition-transform duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_0_#eab308]">
                  {/* Huge Number */}
                  <div className="font-display font-black text-5xl text-zinc-200 group-hover:text-yellow-400 transition-colors border-r-[3px] border-dashed border-zinc-300 pr-4 mr-4">
                    {ach.id}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col">
                    <h3 className="font-display font-black text-lg uppercase leading-tight text-black mb-1">
                      {ach.name}
                    </h3>
                    <span className="inline-block bg-black text-white font-mono text-[0.65rem] font-bold uppercase tracking-widest px-2 py-0.5 mb-2 w-fit">
                      {ach.award}
                    </span>
                    <p className="font-sans text-xs font-medium text-zinc-600 leading-snug">
                      {ach.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>


          {/* ---- OFFICIAL LICENSES ---- */}
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-black flex justify-center items-center gap-3">
                <Medal className="text-yellow-500" size={44} strokeWidth={2.5} />
                Official <span className="text-yellow-500">Licenses</span>
              </h2>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500 mt-3 font-bold">
                Professional Certifications
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
            {licenses.map((cert, i) => (
              <Reveal key={cert.title} delay={i * 0.1}>
                <div className="group relative w-full max-w-[380px] h-[240px] bg-[#fcfcf9] p-6 shadow-[12px_12px_0_#000] border-[4px] border-black transition-transform duration-300 hover:-translate-y-2 flex flex-col cursor-pointer">

                  <div className="absolute inset-2 border-[2px] border-black opacity-20 pointer-events-none"></div>
                  <div className="absolute inset-3 border-[1px] border-black opacity-10 pointer-events-none"></div>

                  <div className="text-center mb-4 relative z-10">
                    <h4 className="font-mono text-[0.55rem] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">
                      Official License
                    </h4>
                    <h3 className="font-display font-black text-xl uppercase leading-tight text-black px-2">
                      {cert.title}
                    </h3>
                  </div>

                  <div className="text-center flex-grow flex flex-col justify-center relative z-10 mb-2">
                    <p className="font-serif italic text-[0.8rem] text-zinc-500 mb-1">Authorized By</p>
                    <p className="font-sans font-black text-sm uppercase tracking-widest text-black border-b-[2px] border-black inline-block mx-auto pb-0.5">
                      {cert.issuer}
                    </p>
                  </div>

                  <div className="flex justify-between items-end mt-auto relative z-10">
                    <div className="flex flex-col pb-1">
                      <span className="font-mono text-[0.55rem] font-bold uppercase tracking-widest text-zinc-400 mb-0.5">
                        {cert.date}
                      </span>
                      <span className="font-mono text-[0.5rem] font-bold tracking-widest text-zinc-800">
                        LIC: {cert.licenseNo}
                      </span>
                      <div className="w-20 h-[2px] bg-black mt-1 opacity-40"></div>
                    </div>

                    <div className={`w-16 h-16 ${cert.sealColor} rounded-full border-[3px] border-black shadow-[4px_4px_0_#000] flex items-center justify-center transform rotate-[15deg] group-hover:rotate-0 transition-transform duration-300 group-hover:scale-110`}>
                      <div className="w-12 h-12 border-[1.5px] border-white rounded-full flex items-center justify-center border-dashed">
                        <Award size={22} className="text-white" strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
