import React from 'react';
import { Sparkles, Menu, X, Calendar } from 'lucide-react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  onOpenChat: () => void;
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen, onOpenChat }: HeaderProps) {
  return (
    <header className="bg-[#fff8f5]/95 backdrop-blur-md text-[#271310] top-0 sticky z-40 transition-all duration-300 ease-out border-b border-[#d3c3c0]/30">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 py-4 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#" 
          className="font-serif text-[26px] md:text-[32px] tracking-tight text-[#271310] uppercase select-none leading-none font-normal hover:opacity-90 transition-opacity"
        >
          DIVINE
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[12px] font-semibold tracking-widest uppercase text-[#504442]">
          <a href="#tentang" className="hover:text-[#271310] hover:border-b hover:border-[#765937] pb-0.5 transition-colors">
            Philosophy
          </a>
          <a href="#perawatan" className="hover:text-[#271310] hover:border-b hover:border-[#765937] pb-0.5 transition-colors">
            Treatments
          </a>
          <a href="#nilai" className="hover:text-[#271310] hover:border-b hover:border-[#765937] pb-0.5 transition-colors">
            Lounge
          </a>
          <a href="#dokter" className="hover:text-[#271310] hover:border-b hover:border-[#765937] pb-0.5 transition-colors">
            Doctors
          </a>
          <a href="#lokasi" className="hover:text-[#271310] hover:border-b hover:border-[#765937] pb-0.5 transition-colors">
            Location
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* AI Advisor Button on Desktop */}
          <button
            onClick={onOpenChat}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#f6ece8] border border-[#765937]/40 text-[#765937] hover:bg-[#fed6ab]/40 rounded text-[11px] uppercase tracking-wider font-semibold transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Concierge</span>
          </button>

          {/* Book Consultation */}
          <a 
            href="#booking"
            className="px-4 py-2 bg-[#271310] hover:bg-[#3e2723] text-[#fff8f5] text-[11px] md:text-[12px] uppercase tracking-wider font-semibold rounded transition-colors shadow-sm"
          >
            BOOK
          </a>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Buka Menu" 
            className="lg:hidden p-1 text-[#271310] focus:outline-none flex items-center justify-center cursor-pointer"
          >
            {mobileMenuOpen ? (
              <span className="material-symbols-outlined text-[26px]">close</span>
            ) : (
              <span className="material-symbols-outlined text-[26px]">menu</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 py-5 bg-[#fbf2ee] border-t border-[#d3c3c0]/30 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3 text-[12px] font-semibold">
            <a 
              onClick={() => setMobileMenuOpen(false)}
              href="#tentang" 
              className="text-[#504442] hover:text-[#271310] tracking-wider uppercase transition-colors"
            >
              Philosophy
            </a>
            <a 
              onClick={() => setMobileMenuOpen(false)}
              href="#perawatan" 
              className="text-[#271310] border-b border-[#765937] pb-1 tracking-wider uppercase inline-block w-fit"
            >
              Treatments
            </a>
            <a 
              onClick={() => setMobileMenuOpen(false)}
              href="#nilai" 
              className="text-[#504442] hover:text-[#271310] tracking-wider uppercase transition-colors"
            >
              Lounge
            </a>
            <a 
              onClick={() => setMobileMenuOpen(false)}
              href="#dokter" 
              className="text-[#504442] hover:text-[#271310] tracking-wider uppercase transition-colors"
            >
              Doctors
            </a>
            <a 
              onClick={() => setMobileMenuOpen(false)}
              href="#lokasi" 
              className="text-[#504442] hover:text-[#271310] tracking-wider uppercase transition-colors"
            >
              Location
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChat();
              }}
              className="text-left text-[#765937] hover:text-[#271310] tracking-wider uppercase transition-colors flex items-center gap-1.5 font-bold pt-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Virtual Concierge</span>
            </button>
          </nav>

          <div className="pt-2 border-t border-[#d3c3c0]/20 flex items-center justify-between">
            <span className="text-[10px] text-[#504442] font-semibold tracking-widest uppercase">Klinik Pratama Estetika</span>
            <span className="material-symbols-outlined text-[#765937] text-base">verified</span>
          </div>
        </div>
      )}
    </header>
  );
}
