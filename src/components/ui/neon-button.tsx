import React from 'react'
import { cn } from '@/lib/utils'
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
    "relative group border text-[var(--color-industrial-dark)] mx-auto text-center clip-mech",
    {
        variants: {
            variant: {
                default: "bg-[var(--color-industrial-white)] hover:bg-[var(--color-industrial-blue)] border-mech hover:text-[var(--color-industrial-white)]",
                solid: "bg-[var(--color-industrial-dark)] hover:bg-[var(--color-industrial-orange)] text-[var(--color-industrial-green)] hover:text-[var(--color-industrial-dark)] border-mech transition-all duration-200",
                ghost: "border-transparent bg-transparent hover:border-zinc-600 hover:bg-white/10",
                warning: "bg-[var(--color-industrial-yellow)] border-mech text-[var(--color-industrial-dark)] hover:bg-[var(--color-industrial-dark)] hover:text-[var(--color-industrial-white)] transition-all duration-150"
            },
            size: {
                default: "px-3 py-1.5 text-[0.75rem] font-mono font-bold uppercase",
                sm: "px-3 py-2 font-mono font-bold text-xs",
                lg: "px-10 py-2.5 ",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { 
      neon?: boolean;
      asChild?: boolean;
    }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, neon = true, size, variant, asChild, children, ...props }, ref) => {
        const Comp = asChild ? React.Fragment : "button";
        const content = asChild ? (children as React.ReactElement).props.children : children;
        
        return React.createElement(
            asChild ? (children as React.ReactElement).type : "button",
            {
                className: cn(buttonVariants({ variant, size }), className, asChild ? (children as React.ReactElement).props.className : ""),
                ref: asChild ? (children as any).ref : ref,
                ...(asChild ? { ...(children as React.ReactElement).props, ...props } : props)
            },
            <>
                <span className={cn("absolute h-px opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out inset-x-0 inset-y-0 bg-gradient-to-r w-3/4 mx-auto from-transparent dark:via-[var(--color-industrial-cyan)] via-[var(--color-industrial-cyan)] to-transparent hidden z-20", neon && "block")} />
                <span className="relative z-10 flex items-center justify-center gap-1">{content}</span>
                <span className={cn("absolute group-hover:opacity-100 transition-all duration-500 ease-in-out inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent dark:via-[var(--color-industrial-orange)] via-[var(--color-industrial-orange)] to-transparent hidden z-20", neon && "block")} />
            </>
        );
    }
)

Button.displayName = 'Button';

export { Button, buttonVariants };
