import { RippleButton } from "@/components/ui/multi-type-ripple-buttons";
import { BorderBeam } from "@/components/ui/border-beam";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-[1400px] px-6 py-5 md:px-12 md:py-7">
        <nav className="flex items-center justify-between">
          <a href="#top" className="group flex items-center gap-3" aria-label="Home">
            <span className="relative grid h-9 w-9 place-items-center rounded-full border border-hairline bg-background/80 backdrop-blur font-display text-base text-foreground transition-all duration-500 group-hover:scale-105 group-hover:border-accent-violet/30 overflow-hidden">
              <span className="relative z-10">M</span>
              <div className="absolute inset-0 bg-radial-gradient(circle,oklch(0.53_0.25_295/0.05),transparent_70%) opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </span>
            <span className="hidden font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground sm:inline">
              Mokshagna&nbsp;/&nbsp;Anurag
            </span>
          </a>

          {/* Nav pill with BorderBeam */}
          <div className="relative hidden items-center gap-1 rounded-full border border-hairline bg-background/70 px-2 py-1.5 backdrop-blur md:flex overflow-hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <BorderBeam
              size={80}
              duration={8}
              delay={0}
              colorFrom="oklch(0.55 0.22 265)"
              colorTo="oklch(0.53 0.25 295)"
              borderWidth={1}
            />
          </div>

          {/* Desktop CTA — hoverborder ripple button */}
          <RippleButton
            variant="hoverborder"
            hoverBorderEffectColor="oklch(0.53 0.25 295 / 0.6)"
            hoverBorderEffectThickness="1.5px"
            className="hidden rounded-full bg-foreground text-sm text-background md:inline-flex items-center px-5 py-2.5 font-sans text-base leading-none"
            onClick={() => { window.location.href = "#contact"; }}
          >
            Get in touch
          </RippleButton>

          {/* Mobile CTA */}
          <a
            href="#contact"
            className="rounded-full bg-foreground px-4 py-2 text-xs text-background md:hidden"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
