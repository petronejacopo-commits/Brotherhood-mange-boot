import React from 'react';
import Image from 'next/image';

interface GameCardProps {
  title: string;
  subtitle?: string;
  image?: string;
  children?: React.ReactNode;
}

export function GameCard({ title, subtitle, image, children }: GameCardProps) {
  return (
    <div className="bg-[#2D1A0A] border-l-[3px] border-[#D9A63E] p-6 rounded transition-all duration-300 hover:-translate-y-1 hover:border-[#DC4424] hover:shadow-lg hover:shadow-black/50">
      {image && (
        <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      )}
      <h3 className="text-xl font-bold text-[#D9A63E] mb-1 font-[var(--font-family-cinzel)]">{title}</h3>
      {subtitle && <h4 className="text-sm text-[#C4A86A] mb-4">{subtitle}</h4>}
      <div className="text-[#FFFFFF]">
        {children}
      </div>
    </div>
  );
}