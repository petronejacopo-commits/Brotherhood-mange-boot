import React from 'react';

type VariantType = 'home' | 'prodotti' | 'about' | 'blocksmith' | 'commissions' | 'mydevs' | 'team' | 'network' | 'livestats' | 'roadmap' | 'partners' | 'events' | 'lab' | 'careers' | 'press' | 'graveyard';

interface BackgroundPatternProps {
  variant: VariantType;
  className?: string;
}

export function BackgroundPattern({ variant, className = '' }: BackgroundPatternProps) {
  // Simplified pattern implementation using basic SVG patterns for the different variants
  const getPattern = (v: VariantType) => {
    const color = "217, 166, 62"; // #D9A63E

    switch(v) {
      case 'home':
      case 'team':
      case 'lab':
        // Hexagons
        return `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-opacity='0.05' fill='rgba(${color}, 1)' fill-rule='evenodd'/%3E%3C/svg%3E")`;
      case 'about':
      case 'network':
      case 'press':
        // Dots
        return `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='2' fill='rgba(${color}, 0.05)'/%3E%3C/svg%3E")`;
      case 'blocksmith':
      case 'commissions':
      case 'prodotti':
        // Grid
        return `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='rgba(${color}, 0.03)' fill-rule='evenodd'/%3E%3C/svg%3E")`;
      case 'graveyard':
        // Diagonal lines
        return `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0H20L0 20v20zm40-20L20 40h20V20z' fill='rgba(${color}, 0.04)' fill-rule='evenodd'/%3E%3C/svg%3E")`;
      default:
        // Crosses
        return `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 9H0v2h9v9h2v-9h9V9h-9V0H9v9z' fill='rgba(${color}, 0.04)' fill-rule='evenodd'/%3E%3C/svg%3E")`;
    }
  };

  return (
    <div
      className={`absolute inset-0 pointer-events-none z-[-1] ${className}`}
      style={{ backgroundImage: getPattern(variant) }}
      aria-hidden="true"
    />
  );
}