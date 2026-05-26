import { cn } from "@/lib/utils";

export const RobotFlyby = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-full h-full rounded-3xl overflow-hidden border border-gray-700 shadow-2xl bg-black relative", className)}>
      <iframe
        src="https://my.spline.design/untitled-rv0hx3zVdoM6t2ydngxuS7zi/"
        className="w-full h-full"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};
