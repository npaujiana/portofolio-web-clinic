import React from 'react';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenChat: () => void;
  onOpenFolio: () => void;
}

export default function HeroSection({ onOpenChat, onOpenFolio }: HeroSectionProps) {
  return (
    <section className="relative bg-[#fff8f5] pt-6 md:pt-14 pb-12 md:pb-20 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Headline & Brief */}
          <div className="lg:col-span-6 space-y-4 md:space-y-6">
            <p className="text-[10px] md:text-[12px] font-semibold text-[#765937] tracking-[0.18em] uppercase">
              Ethical • Sustainable • Personal
            </p>

            <h1 className="font-serif text-[38px] sm:text-[46px] md:text-[56px] text-[#271310] tracking-tight font-normal leading-[1.08]">
              THE HOME OF<br />
              <span className="italic font-serif text-[#765937]">MINDFUL</span><br />
              AESTHETICS
            </h1>

            <p className="text-[14px] md:text-[16px] leading-[24px] md:leading-[28px] text-[#504442] max-w-[480px]">
              Ruang kurasi estetika medis terpercaya di Gading Serpong, menghadirkan presisi klinis dengan ketenangan spasial setara luxury sanctuary.
            </p>

            {/* CTAs on Desktop */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a 
                href="#booking"
                className="px-6 py-3.5 bg-[#271310] hover:bg-[#3e2723] text-[#fff8f5] text-[12px] uppercase tracking-wider font-semibold rounded transition-colors shadow-sm inline-flex items-center gap-2"
              >
                <span>Jadwalkan Konsultasi</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>

              <button
                onClick={onOpenChat}
                className="px-5 py-3.5 bg-[#f6ece8] hover:bg-[#fed6ab]/50 border border-[#765937]/30 text-[#765937] text-[12px] uppercase tracking-wider font-semibold rounded transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#765937]" />
                <span>Konsultasi AI</span>
              </button>

              <button
                onClick={onOpenFolio}
                className="px-4 py-3.5 text-[#271310] hover:text-[#765937] text-[12px] uppercase tracking-wider font-semibold transition-colors hidden sm:inline-flex items-center gap-1.5 cursor-pointer underline underline-offset-4"
              >
                <span>Buku Perawatan</span>
              </button>
            </div>

            {/* Quick Metrics Bar on Desktop */}
            <div className="hidden lg:grid grid-cols-3 gap-6 pt-6 border-t border-[#d3c3c0]/40 max-w-[480px]">
              <div>
                <p className="font-serif text-[26px] text-[#271310] leading-none">100%</p>
                <p className="text-[11px] text-[#504442] uppercase tracking-wider mt-1">Board-Certified</p>
              </div>
              <div>
                <p className="font-serif text-[26px] text-[#271310] leading-none">3D</p>
                <p className="text-[11px] text-[#504442] uppercase tracking-wider mt-1">Diagnostic First</p>
              </div>
              <div>
                <p className="font-serif text-[26px] text-[#271310] leading-none">0</p>
                <p className="text-[11px] text-[#504442] uppercase tracking-wider mt-1">Overtreatment</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Portrait */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-[460px] lg:max-w-none aspect-[9/13] md:aspect-[4/5] rounded overflow-hidden bg-[#f6ece8] shadow-md border border-[#d3c3c0]/20">
              <img 
                src="https://lh3.googleusercontent.com/aida/AEtjO1UgPjWOJFgQ74J4-ItcH3FobyUEWQKZgrugWQFcsw-Vni7o75Uzc1bECLO_NM6xQV7BCOWQGOZppbOwM5p09ah1vz2F1HMsxkU_Z3jr8tarYARXbmh7VsrmBI-kCDGsisKHraaJhGE7i2-duGs4m1vpWgr6Kgi-mQLNIX_Fq98xMqUk4fpKWA3BEq6nPFiKzU8fm6GxN63caS-Im5UItVcx2klwjxaGr6ADW_WGOpM16tmNVHbea9EHZRM"
                alt="Profil samping wanita anggun dalam mindful aesthetics" 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#fff8f5]/90 via-[#fff8f5]/40 to-transparent"></div>

              {/* Protocol Float Badge */}
              <div className="absolute bottom-6 left-5 right-5 flex justify-between items-end">
                <div className="bg-[#ffffff]/90 backdrop-blur-md px-4 py-3 rounded border border-[#d3c3c0]/40 shadow-sm">
                  <p className="text-[10px] font-semibold text-[#504442] uppercase tracking-wider">Standar Protokol</p>
                  <p className="text-[15px] md:text-[17px] font-semibold text-[#271310] leading-snug">Natural Facial Balance</p>
                </div>
                <a 
                  href="#booking"
                  aria-label="Reservasi Konsultasi"
                  className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#3e2723] text-[#fff8f5] flex items-center justify-center hover:bg-[#271310] transition-colors shadow-md"
                >
                  <span className="material-symbols-outlined text-lg md:text-xl">calendar_today</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
