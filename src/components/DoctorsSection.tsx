import React from 'react';
import { ShieldCheck, Award, FileText } from 'lucide-react';

export default function DoctorsSection() {
  return (
    <section className="py-12 md:py-20 bg-[#fff8f5] border-t border-[#d3c3c0]/30" id="dokter">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="space-y-3 mb-8 md:mb-12 max-w-2xl">
          <span className="text-[10px] md:text-[11px] font-semibold text-[#765937] uppercase tracking-[0.16em] block">
            OUR EXPERTS
          </span>
          <h2 className="font-serif text-[30px] sm:text-[36px] md:text-[42px] leading-[36px] md:leading-[48px] text-[#271310] font-normal">
            Tim Dokter Berpengalaman & Berizin
          </h2>
          <p className="text-[14px] md:text-[15px] leading-[24px] text-[#504442]">
            Dokter kami mengkombinasikan ketajaman diagnostik medis dengan kepekaan estetika proporsional. Seluruh obat, filler, dan bio-stimulator tersertifikasi BPOM serta disetujui FDA.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] w-full rounded overflow-hidden bg-[#f6ece8] border border-[#d3c3c0]/30 shadow-sm relative group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIy8STghQD6KAQvMbUDXMW5GaKFPEupdbbzcTDyB0Tp7_ePFBXqenYSXyn41dwUUOg0dRi8YwUHlEi9NukOwBsgsIlj1ih-NmpsUl_5834CtlwV5zyPrYzsUxITT7VB1NIiG5iWviFVzLcAbXAeBYDgKeyGJbdzxVmUB4D19nHuS0xS83h0ObgsHmk0yrYgYqhggCdus90PZukoauhcYGsjJw2b2yS3LbY21ZuLU3L0JlDwD8TREX5"
                alt="Presisi injeksi medis estetika terkalibrasi"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md p-2.5 rounded border border-[#d3c3c0]/40 text-xs">
                <span className="font-semibold text-[#271310] block text-[11px] uppercase tracking-wider">Akurasi Mikroliter</span>
                <span className="text-[#504442] text-[10px]">Teknik micro-droplet terkalibrasi untuk harmoni otot wajah natural.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Credentials Grid */}
          <div className="lg:col-span-7 bg-[#f6ece8] p-5 sm:p-6 md:p-8 rounded border border-[#d3c3c0]/30 space-y-5 shadow-xs">
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-[#fff8f5] border border-[#d3c3c0]/40 flex items-center justify-center shrink-0 text-[#765937]">
                <span className="material-symbols-outlined text-2xl">license</span>
              </div>
              <div className="space-y-0.5">
                <p className="text-[15px] md:text-[16px] font-semibold text-[#271310]">
                  100% Board-Certified & SIP Terbit
                </p>
                <p className="text-xs md:text-[13px] text-[#504442] leading-relaxed">
                  Setiap dokter berpraktik dengan Surat Izin Praktik (SIP) resmi dari Dinas Kesehatan Banten, serta tergabung dalam Ikatan Dokter Indonesia (IDI).
                </p>
              </div>
            </div>

            <div className="h-[1px] bg-[#d3c3c0]/40"></div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-[#fff8f5] border border-[#d3c3c0]/40 flex items-center justify-center shrink-0 text-[#765937]">
                <span className="material-symbols-outlined text-2xl">assured_workload</span>
              </div>
              <div className="space-y-0.5">
                <p className="text-[15px] md:text-[16px] font-semibold text-[#271310]">
                  Klinik Pratama Estetika Berizin
                </p>
                <p className="text-xs md:text-[13px] text-[#504442] leading-relaxed">
                  Izin Operasional Resmi: <strong>No. 445/092-Dinkes/KP-EST/2023</strong>. Memenuhi standar kelayakan medis, kebersihan ruang sterilisasi, dan SOP penanganan limbah B3.
                </p>
              </div>
            </div>

            <div className="h-[1px] bg-[#d3c3c0]/40"></div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-[#fff8f5] border border-[#d3c3c0]/40 flex items-center justify-center shrink-0 text-[#765937]">
                <span className="material-symbols-outlined text-2xl">medication</span>
              </div>
              <div className="space-y-0.5">
                <p className="text-[15px] md:text-[16px] font-semibold text-[#271310]">
                  Originalitas Produk Terverifikasi
                </p>
                <p className="text-xs md:text-[13px] text-[#504442] leading-relaxed">
                  Bisa dilakukan scan barcode segel kemasan di hadapan Anda sebelum tindakan dibuka. Sertifikasi BPOM RI dan batch number dapat dicatat langsung oleh pasien.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
