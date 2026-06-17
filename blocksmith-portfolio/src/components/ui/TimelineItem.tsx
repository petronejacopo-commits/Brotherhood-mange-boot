import React from 'react';

interface TimelineItemProps {
  year: string;
  status?: 'completato' | 'in-corso' | 'pianificato';
  children: React.ReactNode;
}

export function TimelineItem({ year, status = 'pianificato', children }: TimelineItemProps) {
  const statusColors = {
    'completato': 'bg-[#D9A63E]',
    'in-corso': 'bg-[#F5D64E]',
    'pianificato': 'bg-[#3A1F0D]'
  };

  return (
    <div className="flex gap-4 mb-8">
      <div className="w-16 flex-shrink-0 text-right pt-1 font-[var(--font-family-space)] text-[#C4A86A] font-bold">
        {year}
      </div>
      <div className="relative flex flex-col items-center">
        <div className={`w-4 h-4 rounded-full mt-1.5 z-10 ${statusColors[status]} border-2 border-[#1E0F05]`} />
        <div className="w-[2px] h-full bg-[#3A1F0D] absolute top-5 -bottom-10" />
      </div>
      <div className="flex-grow pb-4">
        {children}
      </div>
    </div>
  );
}