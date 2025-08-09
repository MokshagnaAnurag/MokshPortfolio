import React from 'react';

interface RainbowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

export const RainbowButton = ({ 
  children, 
  onClick, 
  type = 'button', 
  disabled = false,
  className = ''
}: RainbowButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rainbow-border relative flex items-center justify-center gap-2.5 px-6 py-3 bg-black rounded-xl border-none text-white cursor-pointer font-semibold transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
};