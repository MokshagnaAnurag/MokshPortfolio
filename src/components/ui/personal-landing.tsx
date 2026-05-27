import React, { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Github, Linkedin, Mail } from "lucide-react";

/* ─── Hero ─────────────────────────────────────────────────────────────────── */
const HeroSection: React.FC = () => (
  <section className="w-full flex flex-col items-center text-center gap-5">
    <div className="relative mb-1">
      <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/60 via-accent-violet/60 to-blue-400/40 opacity-70 blur-xl animate-pulse" />
      <img
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
        alt="Mokshagna Anurag avatar"
        className="relative size-24 rounded-full border-4 border-zinc-800 shadow-xl z-10 object-cover"
      />
    </div>
    <div>
      <h3 className="text-2xl font-bold leading-tight tracking-tight text-white">
        Mokshagna Anurag Kankati
      </h3>
      <p className="mt-1 text-sm text-zinc-400 font-mono tracking-wide uppercase">
        ECE &nbsp;·&nbsp; Robotics &nbsp;·&nbsp; Aerospace
      </p>
    </div>
    <p className="text-base text-zinc-300 max-w-sm mx-auto leading-relaxed">
      I design systems that think quietly — from CubeSats to autonomous drones, 
      embedded intelligence with the restraint of fine instruments.
    </p>
  </section>
);

/* ─── Social Links ──────────────────────────────────────────────────────────── */
interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactNode;
  bg: string;
  text: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/MokshagnaAnurag",
    label: "GitHub",
    icon: <Github size={20} />,
    bg: "bg-zinc-800",
    text: "text-white",
  },
  {
    href: "https://linkedin.com/in/kankati-mokshagna-anurag",
    label: "LinkedIn",
    icon: <Linkedin size={20} />,
    bg: "bg-blue-700",
    text: "text-white",
  },
  {
    href: "mailto:kankati.mokshagnaanurag@gmail.com",
    label: "Email",
    icon: <Mail size={20} />,
    bg: "bg-zinc-50",
    text: "text-zinc-900",
  },
];

const SocialsBlock: React.FC = () => (
  <div className="flex flex-wrap justify-center gap-3 w-full">
    {socialLinks.map((link) => (
      <a
        key={link.label}
        href={link.href}
        target={link.href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
        aria-label={link.label}
        className={twMerge(
          "flex items-center gap-2 rounded-full border border-zinc-700/60 px-5 py-2.5 text-sm font-semibold shadow transition-all duration-200 hover:scale-105 hover:shadow-lg hover:border-accent-violet/50 focus:outline-none focus:ring-2 focus:ring-accent/40",
          link.bg,
          link.text,
        )}
      >
        {link.icon}
        <span>{link.label}</span>
      </a>
    ))}
  </div>
);

/* ─── Connect / Message Form ────────────────────────────────────────────────── */
const ConnectSection: React.FC = () => {
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const validate = (msg: string) => {
    if (!msg.trim()) return "Message cannot be empty.";
    if (msg.trim().length < 3) return "Message must be at least 3 characters.";
    if (msg.length > 200) return "Message cannot exceed 200 characters.";
    return "";
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate(message);
    if (err) { setError(err); return; }

    // Open mailto with the message pre-filled
    const subject = encodeURIComponent("Message via Portfolio");
    const body = encodeURIComponent(message.trim());
    window.open(
      `mailto:kankati.mokshagnaanurag@gmail.com?subject=${subject}&body=${body}`,
      "_blank"
    );

    setShowToast(true);
    setMessage("");
    setError("");
    inputRef.current?.blur();
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <section className="w-full flex flex-col items-center gap-4 relative">
      {showToast && (
        <div
          className="fixed top-6 right-6 z-50 bg-green-600 text-white px-5 py-3 rounded-xl shadow-lg font-semibold text-sm"
          style={{ animation: "fadeInToast 0.3s ease" }}
        >
          ✓ Opening your email app…
        </div>
      )}
      <p className="text-sm text-zinc-400 text-center max-w-xs">
        Drop a quick message — it opens your email app with everything pre-filled.
      </p>
      <form onSubmit={handleSend} className="flex w-full gap-2 items-center">
        <input
          ref={inputRef}
          type="text"
          value={message}
          onChange={(e) => { setMessage(e.target.value); if (error) setError(""); }}
          placeholder="Say something…"
          maxLength={201}
          className={twMerge(
            "flex-1 rounded-full border px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 bg-zinc-900 focus:outline-none transition-colors",
            error ? "border-red-500" : "border-zinc-700 focus:border-accent/60"
          )}
        />
        <button
          type="submit"
          disabled={!message.trim()}
          className={twMerge(
            "rounded-full bg-gradient-to-r from-accent via-accent-violet to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow focus:outline-none focus:ring-2 focus:ring-accent/40 transition-all",
            message.trim() ? "hover:scale-105 hover:shadow-lg opacity-100 cursor-pointer" : "opacity-40 cursor-not-allowed"
          )}
        >
          Send
        </button>
      </form>
      {error && <p className="text-red-500 text-xs">{error}</p>}
      <style>{`
        @keyframes fadeInToast {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

/* ─── Main Export ───────────────────────────────────────────────────────────── */
export const PersonalLanding: React.FC = () => (
  <div className="relative w-full rounded-2xl overflow-hidden border border-zinc-800/60 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 px-6 py-8 text-zinc-50">
    {/* Background glow blob */}
    <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-tr from-accent/30 via-accent-violet/20 to-blue-400/10 rounded-full blur-3xl opacity-60" />
    <div className="relative z-10 flex flex-col gap-8">
      <HeroSection />
      <SocialsBlock />
      <ConnectSection />
    </div>
  </div>
);
