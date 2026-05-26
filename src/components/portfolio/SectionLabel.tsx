import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
  index,
}: {
  children: React.ReactNode;
  className?: string;
  index?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3 label-mono", className)}>
      {index && <span className="text-foreground/40">{index}</span>}
      <span className="h-px w-8 bg-foreground/15" />
      <span>{children}</span>
    </div>
  );
}
