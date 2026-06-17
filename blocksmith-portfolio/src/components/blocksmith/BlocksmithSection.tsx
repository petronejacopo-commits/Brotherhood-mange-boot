"use client";

import React from 'react';
import data from '@/lib/data/blocksmith.json';
import { BackgroundPattern } from '@/components/ui/BackgroundPattern';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { GlowText } from '@/components/ui/GlowText';

export function BlocksmithSection() {
  return (
    <section className="relative min-h-screen py-24 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <BackgroundPattern variant="blocksmith" />

      <div className="max-w-4xl mx-auto flex flex-col gap-16">

        {/* Hero */}
        <ScrollReveal variant="fade" direction="up">
          <div className="text-center mb-8">
            <h1 className="font-[var(--font-family-cinzel)] text-5xl md:text-7xl font-bold text-[#D9A63E] mb-2 tracking-widest drop-shadow-lg">
              BLOCKSMITH
            </h1>
            <h2 className="font-[var(--font-family-space)] text-xl md:text-2xl text-[#B87351] tracking-[0.3em] uppercase">
              The Forge
            </h2>
          </div>
        </ScrollReveal>

        {/* La Storia */}
        <ScrollReveal variant="fade" direction="up" delay={0.1}>
          <div className="bg-[#2D1A0A]/80 backdrop-blur border border-[#3A1F0D] p-8 md:p-10 rounded shadow-xl">
            <h3 className="font-[var(--font-family-cinzel)] text-2xl text-[#D9A63E] mb-6 border-b border-[#803014] pb-2 inline-block">La Storia</h3>
            <div className="space-y-4 text-[#FFFFFF] font-[var(--font-family-inter)] leading-relaxed">
              {data.storia.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <SectionDivider />

        {/* Cosa Facciamo */}
        <ScrollReveal variant="fade" direction="up" delay={0.1}>
          <div className="mb-8">
            <h3 className="font-[var(--font-family-cinzel)] text-2xl text-[#D9A63E] mb-8 text-center">Cosa Facciamo</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.cosaFacciamo.map((item, i) => (
                <div key={i} className="bg-[#1E0F05] border border-[#803014] p-6 rounded hover:border-[#D9A63E] transition-colors group">
                  <h4 className="font-[var(--font-family-space)] text-lg text-[#F5D64E] mb-3 group-hover:text-[#FFFFFF] transition-colors">
                    {item.titolo}
                  </h4>
                  <p className="text-[#C4A86A] text-sm leading-relaxed">
                    {item.descrizione}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Come Lavoriamo */}
        <ScrollReveal variant="fade" direction="left" delay={0.1}>
          <div className="bg-[#3A1F0D]/50 border-l-4 border-[#DC4424] p-8 md:p-10 rounded">
            <h3 className="font-[var(--font-family-cinzel)] text-2xl text-[#D9A63E] mb-6">Come Lavoriamo</h3>
            <div className="space-y-4 text-[#FFFFFF] font-[var(--font-family-inter)] text-sm md:text-base">
              {data.comeLavoriamo.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* A Chi Ci Rivolgiamo & Dove Siamo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal variant="fade" direction="up" delay={0.1}>
            <div className="bg-[#2D1A0A] border border-[#3A1F0D] p-8 rounded h-full">
              <h3 className="font-[var(--font-family-cinzel)] text-xl text-[#D9A63E] mb-6">A Chi Ci Rivolgiamo</h3>
              <ul className="space-y-4 text-[#C4A86A] font-[var(--font-family-inter)] text-sm list-disc pl-5">
                {data.aChiCiRivolgiamo.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade" direction="up" delay={0.2}>
            <div className="bg-[#2D1A0A] border border-[#3A1F0D] p-8 rounded h-full">
              <h3 className="font-[var(--font-family-cinzel)] text-xl text-[#D9A63E] mb-6">Dove Siamo</h3>
              <p className="text-[#C4A86A] font-[var(--font-family-inter)] text-sm leading-relaxed">
                {data.doveSiamo[0]}
              </p>
            </div>
          </ScrollReveal>
        </div>

        <SectionDivider />

        {/* Il Nostro Manifesto */}
        <ScrollReveal variant="fade" direction="up" delay={0.1}>
          <div className="text-center bg-[#1E0F05]/80 p-8 rounded-xl border border-[#D9A63E]/20">
            <h3 className="font-[var(--font-family-cinzel)] text-3xl text-[#D9A63E] mb-8">Il Nostro Manifesto</h3>
            <div className="space-y-6">
              {data.manifesto.map((item, i) => (
                <p key={i} className="font-[var(--font-family-space)] text-[#F5D64E] text-lg md:text-xl font-medium tracking-wide">
                  <GlowText>"{item}"</GlowText>
                </p>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Il nostro impegno */}
        <ScrollReveal variant="fade" direction="up" delay={0.2}>
          <div className="bg-gradient-to-br from-[#2D1A0A] to-[#1E0F05] border border-[#803014] p-8 rounded shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#DC4424]/10 rounded-full blur-3xl"></div>
            <h3 className="font-[var(--font-family-cinzel)] text-2xl text-[#DC4424] mb-4 relative z-10">
              {data.impegno.titolo}
            </h3>
            <p className="text-[#FFFFFF] font-[var(--font-family-inter)] leading-relaxed relative z-10">
              {data.impegno.testo}
            </p>
          </div>
        </ScrollReveal>

        {/* Footer Area */}
        <ScrollReveal variant="fade" direction="up" delay={0.3}>
          <div className="flex flex-col items-center justify-center mt-8 mb-12 gap-8 text-center">
            <div className="border border-[#D9A63E] text-[#D9A63E] px-4 py-1 rounded-full text-xs font-[var(--font-family-space)] tracking-widest uppercase bg-[#D9A63E]/10">
              Blocksmith Studio © 2020-2026
            </div>
            <h2 className="font-[var(--font-family-cinzel)] text-3xl md:text-4xl text-[#D9A63E] drop-shadow-md">
              Benvenuto alla Forge.
            </h2>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}