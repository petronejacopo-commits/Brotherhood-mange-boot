"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  variant?: 'fade' | 'assemble' | 'glitch' | 'morph';
}

export function ScrollReveal({ children, direction = 'up', delay = 0, variant = 'fade' }: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    let x = 0;
    let y = 0;

    if (direction === 'up') y = 50;
    if (direction === 'down') y = -50;
    if (direction === 'left') x = 50;
    if (direction === 'right') x = -50;

    gsap.fromTo(el,
      {
        opacity: 0,
        x,
        y,
        ...(variant === 'assemble' && { scale: 0.9, rotation: 2 }),
        ...(variant === 'glitch' && { skewX: 10 }),
        ...(variant === 'morph' && { filter: 'blur(10px)' })
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
        skewX: 0,
        filter: 'blur(0px)',
        duration: 0.8,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [direction, delay, variant]);

  return (
    <div ref={elementRef}>
      {children}
    </div>
  );
}