"use client";

import React from 'react';
import aboutData from '@/lib/data/about.json';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { TimelineItem } from '@/components/ui/TimelineItem';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { BackgroundPattern } from '@/components/ui/BackgroundPattern';
import { SectionDivider } from '@/components/ui/SectionDivider';

export function AboutSection() {
  return (
    <section className="relative min-h-screen py-24 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <BackgroundPattern variant="about" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal variant="fade" direction="up">
          <div className="mb-16 text-center md:text-left">
            <h1 className="font-[var(--font-family-cinzel)] text-3xl md:text-5xl font-bold text-[#D9A63E] mb-2 tracking-wider">
              {aboutData.pageTitle.toUpperCase()} — JACOPO PETRONE
            </h1>
            <h2 className="font-[var(--font-family-inter)] text-xl text-[#C4A86A]">
              {aboutData.pageSubtitle}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content (Biography & Skills) */}
          <div className="lg:col-span-8 flex flex-col gap-12">

            {/* Biography Box */}
            <ScrollReveal variant="fade" direction="up" delay={0.2}>
              <div className="bg-[#2D1A0A] border-l-[4px] border-[#D9A63E] p-8 md:p-10 rounded shadow-2xl">
                <div className="space-y-6 text-[#FFFFFF] font-[var(--font-family-inter)] leading-relaxed text-sm md:text-base">
                  {aboutData.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Special Ability Box */}
            <ScrollReveal variant="fade" direction="up" delay={0.3}>
              <div className="bg-[#1E0F05] border border-[#D9A63E]/30 p-6 rounded text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[#D9A63E]/5 animate-pulse"></div>
                <h3 className="relative z-10 font-[var(--font-family-space)] text-lg md:text-xl font-bold text-[#D9A63E] tracking-wide">
                  {aboutData.specialAbility}
                </h3>
              </div>
            </ScrollReveal>

            {/* Competencies Cards */}
            <ScrollReveal variant="fade" direction="up" delay={0.4}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="bg-[#2D1A0A] border border-[#3A1F0D] p-6 rounded hover:border-[#F5D64E] transition-colors group">
                  <div className="text-[#D9A63E] mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                  </div>
                  <h4 className="font-[var(--font-family-cinzel)] text-[#F5D64E] font-bold mb-2">Sviluppo</h4>
                  <p className="text-xs text-[#C4A86A]">Backend architecture, Java, Web Development. Soluzioni scalabili e performanti.</p>
                </div>

                <div className="bg-[#2D1A0A] border border-[#3A1F0D] p-6 rounded hover:border-[#F5D64E] transition-colors group">
                  <div className="text-[#D9A63E] mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  </div>
                  <h4 className="font-[var(--font-family-cinzel)] text-[#F5D64E] font-bold mb-2">Legal Tech</h4>
                  <p className="text-xs text-[#C4A86A]">Analisi DSA, ricorsi, tutela degli utenti e studio delle policy delle piattaforme.</p>
                </div>

                <div className="bg-[#2D1A0A] border border-[#3A1F0D] p-6 rounded hover:border-[#F5D64E] transition-colors group">
                  <div className="text-[#D9A63E] mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                  </div>
                  <h4 className="font-[var(--font-family-cinzel)] text-[#F5D64E] font-bold mb-2">Imprenditorialità</h4>
                  <p className="text-xs text-[#C4A86A]">Gestione Blocksmith, leadership di team, game design e direzione artistica.</p>
                </div>

              </div>
            </ScrollReveal>

          </div>

          {/* Sidebar (Stats & Timeline) */}
          <div className="lg:col-span-4 flex flex-col gap-12">

            {/* Stats */}
            <ScrollReveal variant="fade" direction="left" delay={0.3}>
              <div className="bg-[#2D1A0A] p-8 rounded border border-[#3A1F0D]">
                <h3 className="font-[var(--font-family-cinzel)] text-xl font-bold text-[#D9A63E] mb-6">Attributi</h3>
                {aboutData.stats.map((stat, i) => (
                  <ProgressBar
                    key={i}
                    label={stat.label}
                    value={stat.value}
                    color={stat.value === 100 ? '#DC4424' : '#D9A63E'}
                  />
                ))}
              </div>
            </ScrollReveal>

            {/* Timeline */}
            <ScrollReveal variant="fade" direction="left" delay={0.5}>
              <div className="bg-[#2D1A0A] p-8 rounded border border-[#3A1F0D]">
                <h3 className="font-[var(--font-family-cinzel)] text-xl font-bold text-[#D9A63E] mb-8">Percorso</h3>
                <div className="relative">
                  {aboutData.timeline.map((item, i) => (
                    <TimelineItem
                      key={i}
                      year={item.year.toString()}
                      status={item.status as any}
                    >
                      <h4 className="text-[#F5D64E] font-bold text-base mb-1 font-[var(--font-family-inter)]">{item.title}</h4>
                      <p className="text-[#C4A86A] text-xs leading-relaxed">{item.description}</p>
                    </TimelineItem>
                  ))}
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>

        <SectionDivider />
      </div>
    </section>
  );
}