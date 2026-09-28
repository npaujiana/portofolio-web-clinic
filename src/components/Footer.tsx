import React from 'react';
import { Check } from 'lucide-react';

interface FooterProps {
  newsletterEmail: string;
  setNewsletterEmail: (email: string) => void;
  newsletterSubscribed: boolean;
  onNewsletterSubmit: (e: React.FormEvent) => void;
  onOpenFolio: () => void;
  onOpenDossier: () => void;
}

export default function Footer({
  newsletterEmail,
  setNewsletterEmail,
  newsletterSubscribed,
  onNewsletterSubmit,
  onOpenFolio,
  onOpenDossier
}: FooterProps) {
  return (
    <footer className="bg-[#f6ece8] text-[#271310] border-t border-[#d3c3c0]/30 py-12 md:py-16">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
        
        {/* 4-Column Grid on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand & Description */}
          <div className="lg:col-span-4 space-y-3">
            <h2 className="font-serif text-[36px] md:text-[42px] leading-tight text-[#271310] tracking-tight font-normal">
              DIVINE
            </h2>
            <p className="text-[14px] leading-[22px] text-[#504442] max-w-sm">
              Aesthetic Lounge berizin resmi di bawah pengawasan dokter profesional. Menghadirkan ketenangan, etika, dan keanggunan sejati dalam setiap sentuhan medis.
            </p>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-4 bg-white p-5 rounded border border-[#d3c3c0]/40 space-y-2 shadow-xs">
            <p className="text-[10px] font-semibold text-[#765937] uppercase tracking-wider">NEWSLETTER</p>
            <p className="font-serif text-[20px] md:text-[22px] text-[#271310]">Koleksi Jurnal & Riset Estetika</p>
            
            {newsletterSubscribed ? (
              <div className="p-2.5 bg-[#fbf2ee] rounded border border-[#765937]/40 text-xs text-[#765937] font-semibold flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#765937]" />
                <span>Terima kasih telah mendaftar newsletter DIVINE.</span>
              </div>
            ) : (
              <form onSubmit={onNewsletterSubmit} className="flex gap-2 pt-1">
                <input 
                  type="email" 
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Masukkan email Anda" 
                  className="flex-1 bg-[#fff8f5] border border-[#d3c3c0]/60 rounded px-3 py-2 text-xs text-[#1f1b19] placeholder:text-[#827472] focus:outline-none focus:border-[#765937]"
                />
                <button 
                  type="submit" 
                  className="bg-[#271310] text-[#fff8f5] px-4 py-2 rounded text-xs uppercase font-semibold hover:bg-[#3e2723] transition-colors cursor-pointer"
                >
                  Gabung
                </button>
              </form>
            )}
          </div>

          {/* Official Links Grid */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-[10px] font-semibold text-[#765937] uppercase tracking-widest">
              NAVIGASI & DOKUMEN
            </p>
            <div className="grid grid-cols-2 gap-2.5 text-xs text-[#504442]">
              <button 
                onClick={onOpenFolio}
                className="text-left hover:text-[#271310] transition-colors cursor-pointer"
              >
                Treatment Folio
              </button>
              <a href="#dokter" className="hover:text-[#271310] transition-colors">
                Board Certified Physicians
              </a>
              <button 
                onClick={onOpenDossier}
                className="text-left hover:text-[#271310] transition-colors cursor-pointer"
              >
                Clinical Safety Protocol
              </button>
              <a href="#nilai" className="hover:text-[#271310] transition-colors">
                Medical Ethics Statement
              </a>
              <button 
                onClick={onOpenDossier}
                className="text-left hover:text-[#271310] transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button 
                onClick={onOpenDossier}
                className="text-left hover:text-[#271310] transition-colors cursor-pointer"
              >
                SIP & Legalitas
              </button>
            </div>
          </div>

        </div>

        {/* Contact Bar */}
        <div className="pt-6 border-t border-[#d3c3c0]/30 flex flex-wrap items-center justify-between gap-4 text-xs text-[#504442]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#765937] text-base">call</span>
            <span>+62 21 5420 8899 / +62 811 8899 711</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#765937] text-base">schedule</span>
            <span>Selasa – Minggu: 10:00 – 19:00 WIB (Senin Tutup)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#765937] text-base">location_on</span>
            <span>Gading Serpong, Banten, Indonesia</span>
          </div>
        </div>

        {/* Accreditation & Copyright */}
        <div className="pt-6 border-t border-[#d3c3c0]/30 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#504442]">
          <div className="flex items-center gap-2 text-[10px] md:text-[11px]">
            <span className="border border-[#d3c3c0]/60 px-2 py-0.5 rounded uppercase tracking-wider">SIP Dinkes RI Verified</span>
            <span className="border border-[#d3c3c0]/60 px-2 py-0.5 rounded uppercase tracking-wider">Kemenkes RI Standar</span>
          </div>
          <p className="text-[10px] md:text-[11px] text-[#504442] text-center md:text-right">
            © 2024 DIVINE Aesthetic Lounge. Klinik Pratama Estetika Medis Berizin Resmi. Gading Serpong, Banten.
          </p>
        </div>

      </div>
    </footer>
  );
}
