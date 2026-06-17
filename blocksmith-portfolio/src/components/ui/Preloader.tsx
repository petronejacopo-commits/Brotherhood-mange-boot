"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState<'glitch' | 'glow' | 'fade'>('glitch');

  useEffect(() => {
    // Check if already played in this session
    const hasPlayed = sessionStorage.getItem('preloaderPlayed');
    if (hasPlayed) {
      setIsVisible(false);
      return;
    }

    // Sequence timing
    const glitchTimer = setTimeout(() => setPhase('glow'), 800);
    const fadeTimer = setTimeout(() => setPhase('fade'), 1800); // 800 + 1000 for glow
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('preloaderPlayed', 'true');
    }, 2200); // 1800 + 400 for fade

    return () => {
      clearTimeout(glitchTimer);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#1E0F05] transition-opacity duration-400 ${phase === 'fade' ? 'opacity-0' : 'opacity-100'}`}>

      {phase === 'glitch' && (
        <div className="relative w-64 h-64">
          <div className="absolute inset-0 opacity-70 mix-blend-screen translate-x-[5px] text-[#DC4424] animate-pulse">
             <Image src="/assets/images/logo/logo-raccoon.png" alt="Logo Raccoon Red" fill className="object-contain filter sepia hue-rotate-[320deg] saturate-[500%]" priority />
          </div>
          <div className="absolute inset-0 opacity-70 mix-blend-screen -translate-x-[5px] text-[#00ffff] animate-pulse" style={{ animationDelay: '0.1s' }}>
             <Image src="/assets/images/logo/logo-raccoon.png" alt="Logo Raccoon Cyan" fill className="object-contain filter sepia hue-rotate-[180deg] saturate-[500%]" priority />
          </div>
          <div className="absolute inset-0">
             <Image src="/assets/images/logo/logo-raccoon.png" alt="Logo Raccoon" fill className="object-contain" priority />
          </div>
        </div>
      )}

      {(phase === 'glow' || phase === 'fade') && (
        <div className="relative w-64 h-64 transform transition-transform duration-1000 ease-out scale-105">
          <div className="absolute inset-0 blur-xl opacity-60 bg-[#F5D64E] rounded-full scale-75 animate-pulse" />
          <div className="relative w-full h-full">
            <Image src="/assets/images/logo/logo-raccoon.png" alt="Logo Raccoon" fill className="object-contain" priority />
          </div>
        </div>
      )}
    </div>
  );
}