import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#2D1A0A] pt-12 border-t border-[#803014]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">

          {/* Column 1: Network */}
          <div className="flex flex-col gap-4">
            <h3 className="font-[var(--font-family-cinzel)] font-bold text-[#D9A63E] text-xl mb-2">Network</h3>
            <Link href="/network" className="text-[#C4A86A] hover:text-[#F5D64E] transition-colors text-sm">ForgeNet Servers</Link>
            <Link href="/partners" className="text-[#C4A86A] hover:text-[#F5D64E] transition-colors text-sm">Partner Ufficiali</Link>
            <Link href="/events" className="text-[#C4A86A] hover:text-[#F5D64E] transition-colors text-sm">Eventi Live</Link>
          </div>

          {/* Column 2: Progetti */}
          <div className="flex flex-col gap-4">
            <h3 className="font-[var(--font-family-cinzel)] font-bold text-[#D9A63E] text-xl mb-2">Progetti</h3>
            <Link href="/blocksmith" className="text-[#C4A86A] hover:text-[#F5D64E] transition-colors text-sm">Blocksmith Studio</Link>
            <Link href="/prodotti" className="text-[#C4A86A] hover:text-[#F5D64E] transition-colors text-sm">Prodotti e Tool</Link>
            <Link href="/lab" className="text-[#C4A86A] hover:text-[#F5D64E] transition-colors text-sm">Il Laboratorio</Link>
            <Link href="/graveyard" className="text-[#C4A86A] hover:text-[#F5D64E] transition-colors text-sm">Il Cimitero</Link>
          </div>

          {/* Column 3: Studio */}
          <div className="flex flex-col gap-4">
            <h3 className="font-[var(--font-family-cinzel)] font-bold text-[#D9A63E] text-xl mb-2">Studio</h3>
            <Link href="/about" className="text-[#C4A86A] hover:text-[#F5D64E] transition-colors text-sm">Chi Sono</Link>
            <Link href="/team" className="text-[#C4A86A] hover:text-[#F5D64E] transition-colors text-sm">Il Team</Link>
            <Link href="/mydevs" className="text-[#C4A86A] hover:text-[#F5D64E] transition-colors text-sm">Sviluppatori</Link>
            <Link href="/careers" className="text-[#C4A86A] hover:text-[#F5D64E] transition-colors text-sm">Lavora con noi</Link>
          </div>

          {/* Column 4: Contatti */}
          <div className="flex flex-col gap-4">
            <h3 className="font-[var(--font-family-cinzel)] font-bold text-[#D9A63E] text-xl mb-2">Contatti</h3>
            <Link href="/commissions" className="text-[#C4A86A] hover:text-[#F5D64E] transition-colors text-sm">Richiedi un Progetto</Link>
            <Link href="/press" className="text-[#C4A86A] hover:text-[#F5D64E] transition-colors text-sm">Press Kit</Link>
            <a href="mailto:info@blocksmith.studio" className="text-[#C4A86A] hover:text-[#F5D64E] transition-colors text-sm">info@blocksmith.studio</a>
          </div>

        </div>
      </div>

      {/* Trust Bar */}
      <div className="w-full bg-[#1E0F05] border-t border-[#3A1F0D] py-4 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[#C4A86A] text-xs font-[var(--font-family-space)] uppercase tracking-wider text-center md:text-left">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></span>
              12+ Server monitorati
            </span>
            <span className="hidden sm:inline text-[#803014]">|</span>
            <span>99.8% Uptime</span>
            <span className="hidden sm:inline text-[#803014]">|</span>
            <span>25+ Progetti consegnati</span>
            <span className="hidden sm:inline text-[#803014]">|</span>
            <span>8+ Clienti attivi</span>
          </div>
          <div className="whitespace-nowrap mt-4 md:mt-0 opacity-70">
            © 2026 Jacopo Petrone – Tutti i diritti riservati.
          </div>
        </div>
      </div>
    </footer>
  );
}