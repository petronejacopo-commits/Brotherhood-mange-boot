import React from 'react';

interface GlowTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GlowText({ children, className = '' }: GlowTextProps) {
  return (
    <span className={`transition-all duration-300 hover:text-shadow-glow hover:text-[#D9A63E] cursor-default ${className}`} style={{ textShadow: 'inherit' }}>
      <style dangerouslySetInnerHTML={{__html: `
        .hover\\:text-shadow-glow:hover {
          text-shadow: 0 0 8px rgba(217,166,62,0.6);
        }
      `}} />
      {children}
    </span>
  );
}