import React from 'react';

interface ProgressBarProps {
  label: string;
  value: number; // 0 to 100
  color: string;
}

export function ProgressBar({ label, value, color }: ProgressBarProps) {
  const safeValue = Math.min(Math.max(value, 0), 100);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-[#FFFFFF]">{label}</span>
        <span className="text-sm font-medium text-[#C4A86A]">{safeValue}%</span>
      </div>
      <div className="w-full bg-[#3A1F0D] rounded h-2.5">
        <div
          className="h-2.5 rounded transition-all duration-1000 ease-out"
          style={{ width: `${safeValue}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}