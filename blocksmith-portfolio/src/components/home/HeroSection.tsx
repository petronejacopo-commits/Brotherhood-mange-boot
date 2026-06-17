"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { AmberButton } from '@/components/ui/AmberButton';

// Dynamic import for Three.js canvas with SSR disabled
const HeroParticles = dynamic(() => import('./HeroParticles'), {
  ssr: false,
});

export function HeroSection() {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden flex items-center justify-center bg-[#1E0F05]">
      {/* 3D Canvas Background */}
      <HeroParticles />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">

        {/* Logo */}
        <div className="relative w-[120px] h-[120px] mb-8 animate-fade-in-up">
          <Image
            src="/assets/images/logo/logo-raccoon.png"
            alt="Blocksmith Studio Logo"
            fill
            className="object-contain drop-shadow-[0_0_15px_rgba(217,166,62,0.5)]"
            priority
          />
        </div>

        {/* Titles */}
        <h1 className="font-[var(--font-family-cinzel)] text-4xl md:text-5xl lg:text-6xl text-[#FFFFFF] font-bold mb-4 tracking-wider animate-fade-in-up delay-100">
          JACOPO PETRONE
        </h1>
        <h2 className="font-[var(--font-family-inter)] text-lg md:text-xl text-[#D9A63E] mb-12 animate-fade-in-up delay-200">
          Game Designer & UX/UI Specialist
        </h2>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up delay-300">
          <AmberButton variant="primary" href="/mydevs">
            Esplora Progetti
          </AmberButton>
          <AmberButton variant="secondary" href="/chi-sono">
            Chi Sono
          </AmberButton>
        </div>

      </div>

      {/* Bouncing Arrow Down */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-[#D9A63E] opacity-80">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>

      {/* Keyframe Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      `}} />
    </section>
  );
}