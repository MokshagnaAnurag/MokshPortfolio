import React from "react";

const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group text-primary relative block overflow-hidden whitespace-nowrap text-lg font-bold uppercase"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div className="flex">
        {children.split("").map((letter, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-[110%]"
            style={{
              transitionDelay: `${i * 25}ms`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="absolute inset-0 flex">
        {children.split("").map((letter, i) => (
          <span
            key={i}
            className="inline-block translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0"
            style={{
              transitionDelay: `${i * 25}ms`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </a>
  );
};

export const FlipLinksSmall = () => {
  return (
    <div className="flex gap-4 items-center justify-center">
      <FlipLink href="https://www.linkedin.com/in/kankati-mokshagna-anurag/">Linkedin</FlipLink>
      <FlipLink href="https://github.com/MokshagnaAnurag">Github</FlipLink>
    </div>
  );
};