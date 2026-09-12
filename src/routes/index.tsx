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
      { title: "Mokshagna Anurag Kankati — Robotics & Embedded Systems Engineer | Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Mokshagna Anurag Kankati — Robotics Engineer specializing in ROS 2, autonomous mobile robots, UAV systems (PX4/ArduPilot), CubeSat development, embedded systems, and AI-driven autonomy. 15+ projects, 4 publications. Open for full-time roles and internships.",
      },
      { name: "keywords", content: "Mokshagna Anurag Kankati, robotics engineer portfolio, embedded systems engineer India, ROS 2 developer, autonomous mobile robot, UAV engineer, PX4 ArduPilot, CubeSat engineer, SLAM navigation, Nav2, drone engineer India, hire robotics engineer, computer vision, MVGR College ECE" },
      { property: "og:title", content: "Mokshagna Anurag Kankati — Robotics & Embedded Systems Engineer" },
      {
        property: "og:description",
        content:
          "Robotics, autonomous systems, UAV engineering, CubeSat development, and embedded intelligence. 15+ projects, 4 publications. Open for roles.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://moksh-portfolio-kappa.vercel.app/" },
      { property: "og:image", content: "https://moksh-portfolio-kappa.vercel.app/og-image.jpg" },
      { property: "og:locale", content: "en_US" },
      { property: "og:site_name", content: "Mokshagna Anurag Kankati — Portfolio" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mokshagna Anurag Kankati — Robotics & Embedded Systems Engineer" },
      { name: "twitter:description", content: "Robotics, autonomous systems, UAV engineering, and embedded intelligence. 15+ projects, 4 publications." },
      { name: "twitter:image", content: "https://moksh-portfolio-kappa.vercel.app/og-image.jpg" },
    ],
  }),
});

function Index() {
  return (
    <div className="noise relative min-h-dvh bg-background text-foreground">
      <ScrollProgress />
      <div data-theme="mcqueen" className="cursor-orange">
        <Navbar />
        <main>
          <ToonhubHero />
        </main>
      </div>
      <main>
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
