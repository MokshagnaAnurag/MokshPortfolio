import React, { useEffect, useRef } from 'react';

interface AnimatedBorderProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  colors?: {
    primary: string;
    secondary: string;
  };
}

export const AnimatedBorder = ({ 
  children, 
  className = "", 
  speed = 0.5,
  colors = {
    primary: "rgb(59 130 246 / 0.5)", // blue-500/50
    secondary: "rgb(168 85 247 / 0.5)" // purple-500/50
  }
}: AnimatedBorderProps) => {
  const topRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let lastTime = 0;
    const animateBorder = (currentTime: number) => {
      // Throttle to 30fps for better performance
      if (currentTime - lastTime < 33) {
        requestAnimationFrame(animateBorder);
        return;
      }
      lastTime = currentTime;
      
      const now = currentTime / 1000;
      
      // Calculate positions based on time
      const topX = Math.sin(now * speed) * 100;
      const rightY = Math.cos(now * speed) * 100;
      const bottomX = Math.sin(now * speed + Math.PI) * 100;
      const leftY = Math.cos(now * speed + Math.PI) * 100;
      
      // Apply positions to elements
      if (topRef.current) topRef.current.style.transform = `translateX(${topX}%)`;
      if (rightRef.current) rightRef.current.style.transform = `translateY(${rightY}%)`;
      if (bottomRef.current) bottomRef.current.style.transform = `translateX(${bottomX}%)`;
      if (leftRef.current) leftRef.current.style.transform = `translateY(${leftY}%)`;
      
      requestAnimationFrame(animateBorder);
    };
    
    const animationId = requestAnimationFrame(animateBorder);
    return () => cancelAnimationFrame(animationId);
  }, [speed]);
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Animated border elements */}
      <div className="absolute top-0 left-0 w-full h-0.5 overflow-hidden">
        <div 
          ref={topRef}
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `linear-gradient(to right, transparent, ${colors.primary}, transparent)`
          }}
        ></div>
      </div>
      
      <div className="absolute top-0 right-0 w-0.5 h-full overflow-hidden">
        <div 
          ref={rightRef}
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `linear-gradient(to bottom, transparent, ${colors.secondary}, transparent)`
          }}
        ></div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-0.5 overflow-hidden">
        <div 
          ref={bottomRef}
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `linear-gradient(to right, transparent, ${colors.primary}, transparent)`
          }}
        ></div>
      </div>
      
      <div className="absolute top-0 left-0 w-0.5 h-full overflow-hidden">
        <div 
          ref={leftRef}
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `linear-gradient(to bottom, transparent, ${colors.secondary}, transparent)`
          }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};