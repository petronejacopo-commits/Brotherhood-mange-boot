"use client";

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export function TiltCard({ children, className = '' }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className={`relative rounded-xl bg-[#2D1A0A] border border-[#3A1F0D] shadow-xl overflow-hidden ${className}`}
    >
      {/* Spotlight Effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px opacity-50 transition-opacity duration-300 z-10 mix-blend-overlay"
          style={{
            background: `radial-gradient(400px circle at ${x.get() * 100 + 50}% ${y.get() * 100 + 50}%, rgba(245, 214, 78, 0.15), transparent 40%)`,
          }}
        />
      )}

      {/* Parallax Content Wrapper */}
      <div
        className="relative z-0 h-full w-full p-6"
        style={{ transform: 'translateZ(10px)' }}
      >
        {children}
      </div>
    </motion.div>
  );
}