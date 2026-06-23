import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { ToonhubHero } from "@/components/portfolio/ToonhubHero";
import { SelectedWork } from "@/components/portfolio/SelectedWork";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Publications } from "@/components/portfolio/Publications";
import { Blogs } from "@/components/portfolio/Blogs";
import { About } from "@/components/portfolio/About";
import { NewsTicker } from "@/components/portfolio/NewsTicker";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mokshagna Anurag Kankati — Embedded Systems Engineer" },
      {
        name: "description",
        content:
          "Editorial portfolio of Mokshagna Anurag Kankati — embedded systems, autonomy, aerospace and AI-driven engineering.",
      },
      { property: "og:title", content: "Mokshagna Anurag Kankati — Engineering Portfolio" },
      {
        property: "og:description",
        content:
          "Robotics, aerospace and embedded intelligence — a quiet, editorial portfolio.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="noise relative min-h-dvh bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <main>
        <div className="cursor-orange"><ToonhubHero /></div>
        <div className="cursor-blue">
          <About />
        </div>
        <div className="cursor-magenta"><SelectedWork /></div>
        <div className="cursor-yellow"><Publications /></div>
        <div className="cursor-cyan"><Experience /></div>
        <div className="cursor-green"><Education /></div>
        <div className="cursor-orange"><Skills /></div>
        <div className="cursor-blue"><Blogs /></div>
        <div className="cursor-magenta"><Contact /></div>
      </main>
      <Footer />
    </div>
  );
}
