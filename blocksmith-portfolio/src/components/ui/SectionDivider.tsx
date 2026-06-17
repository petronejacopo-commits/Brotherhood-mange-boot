import React from 'react';

export function SectionDivider() {
  return (
    <div className="flex items-center justify-center w-full py-8">
      <div className="h-[1px] w-full bg-[#803014]"></div>
      <div className="mx-4 text-[#D9A63E]">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z" />
        </svg>
      </div>
      <div className="h-[1px] w-full bg-[#803014]"></div>
    </div>
  );
}