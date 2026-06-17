import React from 'react';
import Link from 'next/link';

interface AmberButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export function AmberButton({ variant = 'primary', href, onClick, children }: AmberButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 font-semibold transition-all duration-300 rounded cursor-pointer';

  const variants = {
    primary: 'bg-[#F5D64E] text-[#1E0F05] hover:bg-[#D9A63E]',
    secondary: 'border-2 border-[#D9A63E] text-[#D9A63E] hover:bg-[#D9A63E] hover:text-[#1E0F05]',
    ghost: 'text-[#C4A86A] hover:text-[#D9A63E] hover:bg-white/5'
  };

  const classes = `${baseClasses} ${variants[variant]}`;

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}