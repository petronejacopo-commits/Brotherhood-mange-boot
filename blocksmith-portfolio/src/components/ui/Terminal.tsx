"use client";

import React, { useState, useEffect } from 'react';

export function Terminal() {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const script = [
    "Initializing system...",
    "Connecting to ForgeNet...",
    "Loading modules: [████████████] 100%",
    "System ready."
  ];

  useEffect(() => {
    if (currentLineIndex < script.length) {
      const currentText = script[currentLineIndex];

      if (currentCharIndex < currentText.length) {
        const timeout = setTimeout(() => {
          setCurrentCharIndex(prev => prev + 1);
        }, 50); // Typing speed
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setLines(prev => [...prev, currentText]);
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, 500); // Delay between lines
        return () => clearTimeout(timeout);
      }
    }
  }, [currentLineIndex, currentCharIndex, script]);

  return (
    <div className="rounded overflow-hidden border border-[#3A1F0D] bg-[#0D0D0D] font-mono text-sm max-w-lg w-full shadow-lg shadow-black/50">
      {/* Terminal Header */}
      <div className="bg-[#1a1a1a] px-4 py-2 flex items-center gap-2 border-b border-[#3A1F0D]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#DC4424]"></div>
          <div className="w-3 h-3 rounded-full bg-[#F5D64E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#22c55e]"></div>
        </div>
        <div className="mx-auto text-xs text-[#C4A86A]">blocksmith@forge:~</div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 text-[#D9A63E] min-h-[150px]">
        {lines.map((line, i) => (
          <div key={i} className="mb-1">{line}</div>
        ))}
        {currentLineIndex < script.length && (
          <div className="mb-1">
            {script[currentLineIndex].substring(0, currentCharIndex)}
            <span className="animate-pulse">_</span>
          </div>
        )}
        {currentLineIndex >= script.length && (
          <div className="mt-2 text-[#22c55e]">
            admin@blocksmith:~$ <span className="animate-pulse">_</span>
          </div>
        )}
      </div>
    </div>
  );
}