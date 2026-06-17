"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Chi Sono', path: '/chi-sono' },
    { label: 'Blocksmith', path: '/blocksmith' },
    { label: 'Commissioni', path: '/commissioni' },
    { label: 'My Devs', path: '/mydevs' },
    { label: 'Team', path: '/team' },
    { label: 'Network', path: '/network' },
    { label: 'Roadmap', path: '/roadmap' },
    { label: 'Partners', path: '/partners' },
    { label: 'Events', path: '/events' },
    { label: 'Lab', path: '/lab' },
    { label: 'Prodotti', path: '/prodotti' },
    { label: 'Careers', path: '/careers' },
    { label: 'Press', path: '/press' },
    { label: 'Graveyard', path: '/graveyard' },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-[64px] bg-[#1E0F05]/95 backdrop-blur-md flex items-center justify-between px-4 lg:px-8 border-b border-[#803014]/20">
        <Link href="/" className="flex items-center gap-3 z-50">
          <div className="relative w-[30px] h-[30px]">
            <Image
              src="/assets/images/logo/logo-raccoon.png"
              alt="Logo Procione"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-[var(--font-family-space)] font-bold text-[#F5F0E8] tracking-widest text-lg">
            PROCIONE
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-6 overflow-x-auto h-full scrollbar-hide">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative font-[var(--font-family-inter)] text-sm transition-colors duration-200 whitespace-nowrap ${
                  isActive ? 'text-[#F5D64E]' : 'text-[#C4A86A] hover:text-[#D9A63E]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#F5D64E]"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="xl:hidden z-50 p-2 text-[#C4A86A] hover:text-[#F5D64E] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Slide Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-40 w-64 bg-[#2D1A0A] border-l border-[#803014] pt-24 px-6 overflow-y-auto transition-transform duration-300 ease-in-out xl:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6 pb-20">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative font-[var(--font-family-inter)] text-lg transition-colors duration-200 ${
                  isActive ? 'text-[#F5D64E]' : 'text-[#C4A86A] hover:text-[#D9A63E]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#F5D64E]"></span>
                )}
              </Link>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}} />
    </>
  );
}