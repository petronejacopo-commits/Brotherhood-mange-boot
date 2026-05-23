"use client";

import React from 'react';
import data from '@/lib/data/commissions.json';
import { BackgroundPattern } from '@/components/ui/BackgroundPattern';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionDivider } from '@/components/ui/SectionDivider';

export function CommissionsSection() {
  return (
    <section className="relative min-h-screen py-24 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <BackgroundPattern variant="commissions" />

      <div className="max-w-6xl mx-auto flex flex-col gap-16">

        {/* Header */}
        <ScrollReveal variant="fade" direction="up">
          <div className="text-center mb-8">
            <h1 className="font-[var(--font-family-cinzel)] text-5xl md:text-6xl font-bold text-[#D9A63E] mb-4 tracking-widest drop-shadow-md">
              {data.pageTitle.toUpperCase()}
            </h1>
            <h2 className="font-[var(--font-family-inter)] text-lg md:text-xl text-[#C4A86A]">
              {data.pageSubtitle}
            </h2>
          </div>
        </ScrollReveal>

        {/* UX/UI Design Section */}
        <ScrollReveal variant="fade" direction="up" delay={0.1}>
          <div>
            <h3 className="font-[var(--font-family-cinzel)] text-3xl text-[#D9A63E] mb-4 border-l-4 border-[#DC4424] pl-4">
              {data.uxui.titolo}
            </h3>
            <p className="text-[#FFFFFF] font-[var(--font-family-inter)] mb-8">
              {data.uxui.descrizione}
            </p>

            {/* Horizontal Gallery */}
            <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#803014] scrollbar-track-[#1E0F05]">
              {data.uxui.cards.map((card, i) => (
                <div key={i} className="min-w-[300px] max-w-[350px] flex-shrink-0 snap-start bg-[#2D1A0A] border border-[#3A1F0D] p-8 rounded shadow-lg hover:border-[#D9A63E] transition-colors">
                  <h4 className="font-[var(--font-family-space)] text-xl text-[#F5D64E] mb-4">{card.titolo}</h4>
                  <p className="text-[#C4A86A] text-sm leading-relaxed">{card.descrizione}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <SectionDivider />

        {/* Lore Design Section */}
        <ScrollReveal variant="fade" direction="up" delay={0.1}>
          <div>
            <h3 className="font-[var(--font-family-cinzel)] text-3xl text-[#D9A63E] mb-8 text-center">
              {data.lore.titolo}
            </h3>

            {/* Parchment Box */}
            <div className="relative max-w-3xl mx-auto bg-[#eaddc5] text-[#3e2723] p-10 md:p-14 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-4 border-[#bcaaa4]"
                 style={{
                   backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.1\'/%3E%3C/svg%3E")',
                   borderRadius: '4px 20px 4px 20px'
                 }}>
               <div className="absolute top-4 left-4 w-4 h-4 rounded-full bg-[#8d6e63] shadow-inner"></div>
               <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-[#8d6e63] shadow-inner"></div>
               <div className="absolute bottom-4 left-4 w-4 h-4 rounded-full bg-[#8d6e63] shadow-inner"></div>
               <div className="absolute bottom-4 right-4 w-4 h-4 rounded-full bg-[#8d6e63] shadow-inner"></div>

              <p className="font-[var(--font-family-cinzel)] text-lg leading-loose font-medium text-center italic">
                "{data.lore.testo}"
              </p>
            </div>
          </div>
        </ScrollReveal>

        <SectionDivider />

        {/* Social Media Manager Section */}
        <ScrollReveal variant="fade" direction="up" delay={0.1}>
          <div>
            <h3 className="font-[var(--font-family-cinzel)] text-3xl text-[#D9A63E] mb-4 border-l-4 border-[#DC4424] pl-4">
              {data.social.titolo}
            </h3>
            <p className="text-[#FFFFFF] font-[var(--font-family-inter)] mb-8">
              {data.social.descrizione}
            </p>

            {/* 2-Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.social.cards.map((card, i) => (
                <div key={i} className="bg-gradient-to-br from-[#2D1A0A] to-[#1E0F05] border border-[#803014] p-8 rounded shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#DC4424]/5 rounded-full blur-3xl group-hover:bg-[#DC4424]/10 transition-colors"></div>
                  <h4 className="font-[var(--font-family-space)] text-xl text-[#F5D64E] mb-4 relative z-10">{card.titolo}</h4>
                  <p className="text-[#C4A86A] text-sm leading-relaxed relative z-10">{card.descrizione}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}