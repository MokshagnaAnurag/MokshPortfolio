import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import {
  Moon,
  Sun,
  Home,
  Mail,
  User as UserIcon,
  Briefcase,
  GraduationCap,
  Code,
  Folder,
  Award,
} from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { AnimatedBorder } from "@/components/ui/animated-border";
import MinimalistDock from "@/components/ui/minimal-dock";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navTabs = [
    { title: "Home", icon: Home },
    { title: "About", icon: UserIcon },
    { title: "Experience", icon: Briefcase },
    { title: "Education", icon: GraduationCap },
    { title: "Skills", icon: Code },
    { title: "Projects", icon: Folder },
    { title: "Achievements", icon: Award },
    { title: "Contact", icon: Mail },
  ];

  const mobileDockItems = [
    { id: "home", icon: <Home size={20} />, label: "Home" },
    { id: "about", icon: <UserIcon size={20} />, label: "About" },
    { id: "experience", icon: <Briefcase size={20} />, label: "Experience" },
    { id: "education", icon: <GraduationCap size={20} />, label: "Education" },
    { id: "skills", icon: <Code size={20} />, label: "Skills" },
    { id: "projects", icon: <Folder size={20} />, label: "Projects" },
    { id: "achievements", icon: <Award size={20} />, label: "Achievements" },
    { id: "contact", icon: <Mail size={20} />, label: "Contact" },
  ];

  const routes = ["/", "/about", "/experience", "/education", "/skills", "/projects", "/achievements", "/contact"];
  const mobileRoutes = ["/", "/about", "/projects", "/skills", "/contact"];

  const getCurrentTabIndex = () => {
    const currentIndex = routes.findIndex(route => route === location.pathname);
    return currentIndex >= 0 ? currentIndex : null;
  };

  const handleTabChange = (index: number | null) => {
    if (index !== null && routes[index]) {
      navigate(routes[index]);
    }
  };

  const handleMobileDockClick = (id: string) => {
    const routeMap: { [key: string]: string } = {
      home: "/",
      about: "/about",
      experience: "/experience",
      education: "/education",
      skills: "/skills",
      projects: "/projects",
      achievements: "/achievements",
      contact: "/contact"
    };
    if (routeMap[id]) {
      navigate(routeMap[id]);
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:block fixed top-0 left-0 right-0 z-50 w-full px-4 pt-2">
        <AnimatedBorder
          className={`transition-all duration-300 ease-in-out px-6 py-3 mx-auto max-w-5xl backdrop-blur-xl
            ${location.pathname === "/"
              ? (theme === "dark" ? "bg-black" : "bg-white/90")
              : "rounded-b-xl shadow-lg border border-white/20 dark:border-gray-800/50 bg-white/70 dark:bg-gray-900/70"}
            ${location.pathname === "/" ? "border-none shadow-none rounded-none" : ""}
            ${isScrolled && location.pathname !== "/" ? "bg-background/90" : ""}
          `}
          speed={0.1}
          colors={{
            primary: theme === 'dark' ? "rgb(59 130 246 / 0.2)" : "rgb(59 130 246 / 0.3)",
            secondary: theme === 'dark' ? "rgb(168 85 247 / 0.2)" : "rgb(168 85 247 / 0.3)"
          }}
        >
          <div className="flex items-center justify-center w-full relative">
            {/* Logo - Desktop only */}
            <div
              onClick={() => navigate("/")}
              className="absolute left-0 text-lg font-bold tracking-widest cursor-pointer"
            >
              <span className={`${theme === "dark" ? "text-white" : "text-gray-900"}`}>Moksh</span>
              <span className={`font-extrabold ${theme === "dark" ? "text-white" : "text-blue-700"}`}>Portfolio</span>
            </div>

            {/* Navigation Tabs - Center */}
            <ExpandableTabs
              tabs={navTabs}
              onChange={handleTabChange}
              selectedIndex={getCurrentTabIndex()}
              activeColor={theme === "dark" ? "text-blue-400" : "text-blue-600"}
              className={`${theme === "dark" ? "border-gray-700 bg-gray-900/50" : "border-gray-200 bg-white/50"} backdrop-blur-sm`}
            />

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="absolute right-0 transition hover:bg-black/10 dark:hover:bg-white/10 text-foreground"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
          </div>
        </AnimatedBorder>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 w-full p-4">
        <div className="flex items-center justify-center w-full relative">
          <MinimalistDock
            items={mobileDockItems}
            onItemClick={handleMobileDockClick}
            showBackground={false}
          />
          <button
            onClick={toggleTheme}
            className="absolute right-0 w-11 h-11 rounded-lg bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-black/50 text-white flex items-center justify-center"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

// NOTE: Add 'pt-24' to main content containers on all pages to prevent navbar overlap.
