import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Clock, Plus, Copy, Zap } from "lucide-react";

interface ProfileCardProps {
  name?: string;
  role?: string;
  email?: string;
  avatarSrc?: string;
  statusText?: string;
  statusColor?: string;
  glowText?: string;
  className?: string;
}

function getTimeText() {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes().toString().padStart(2, "0");
  const s = now.getSeconds().toString().padStart(2, "0");
  const hour12 = ((h + 11) % 12) + 1;
  const ampm = h >= 12 ? "PM" : "AM";
  return `${hour12}:${m}:${s} ${ampm}`;
}

export function ProfileCard({
  name = "Mokshagna Anurag Kankati",
  role = "Embedded Systems & Robotics Engineer",
  email = "kankati.mokshagnaanurag@gmail.com",
  avatarSrc = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  statusText = "Open to opportunities",
  statusColor = "bg-lime-500",
  glowText = "Currently High on Creativity",
  className,
}: ProfileCardProps) {
  const [copied, setCopied] = useState(false);
  const [timeText, setTimeText] = useState(getTimeText);

  // Tick every second — no page reload needed
  useEffect(() => {
    const id = setInterval(() => setTimeText(getTimeText()), 1000);
    return () => clearInterval(id);
  }, []);


  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  const handleHire = () => {
    window.open("mailto:" + email + "?subject=Hiring%20Inquiry", "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn("relative w-full max-w-md mx-auto", className)}
    >
      {/* Lime glow backdrop */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-10 top-[72%] rounded-[28px] bg-lime-400/90 blur-0 shadow-[0_40px_80px_-16px_rgba(163,230,53,0.8)] z-0" />

      {/* Glow label */}
      <div className="absolute inset-x-0 -bottom-10 mx-auto w-full z-0">
        <div className="flex items-center justify-center gap-2 bg-transparent py-3 text-center text-sm font-medium text-black/80">
          <Zap className="h-4 w-4" /> {glowText}
        </div>
      </div>

      <Card className="relative z-10 mx-auto w-full overflow-visible rounded-[28px] border-0 bg-[radial-gradient(120%_120%_at_30%_10%,#1a1a1a_0%,#0f0f10_60%,#0b0b0c_100%)] text-white shadow-2xl">
        <CardContent className="p-6 sm:p-8">
          {/* Status row */}
          <div className="mb-6 flex items-center justify-between text-sm text-neutral-300">
            <div className="flex items-center gap-2">
              <span className={cn("inline-block h-2.5 w-2.5 rounded-full animate-pulse", statusColor)} />
              <span className="select-none">{statusText}</span>
            </div>
            <div className="flex items-center gap-2 opacity-80">
              <Clock className="h-4 w-4" />
              <span className="tabular-nums">{timeText}</span>
            </div>
          </div>

          {/* Avatar + name */}
          <div className="flex flex-wrap items-center gap-5">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-white/10">
              <img
                src={avatarSrc}
                alt={`${name} avatar`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <h3 className="truncate text-xl font-semibold tracking-tight sm:text-2xl font-sans">
                {name}
              </h3>
              <p className="mt-0.5 text-sm text-neutral-400 font-mono">{role}</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Button
              variant="secondary"
              onClick={handleHire}
              className="h-12 justify-start gap-3 rounded-2xl bg-white/10 text-white hover:bg-white/15 border-0"
            >
              <Plus className="h-4 w-4" /> Hire Me
            </Button>

            <Button
              variant="secondary"
              onClick={handleCopy}
              className="h-12 justify-start gap-3 rounded-2xl bg-white/10 text-white hover:bg-white/15 border-0"
            >
              <Copy className="h-4 w-4" /> {copied ? "Copied!" : "Copy Email"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
