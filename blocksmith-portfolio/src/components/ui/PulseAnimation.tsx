import React from 'react';

interface PulseAnimationProps {
  children: React.ReactNode;
  className?: string;
}

export function PulseAnimation({ children, className = '' }: PulseAnimationProps) {
  return (
    <div className={`animate-pulse-custom ${className}`}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-custom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse-custom {
          animation: pulse-custom 2s infinite ease-in-out;
        }
      `}} />
      {children}
    </div>
  );
}