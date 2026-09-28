import React from 'react';

interface FaqSectionProps {
  openFaqIndex: number | null;
  toggleFaq: (idx: number) => void;
}

const FAQS = [
  {
    question: "Apakah konsultasi awal wajib dilakukan sebelum tindakan?",
    answer: "Ya. Standar medis DIVINE mewajibkan diagnosis klinis 3D terlebih dahulu oleh dokter spesialis agar setiap terapi disesuaikan dengan ketebalan dermis, vaskularisasi, dan kondisi biologis pasien."
  },
  {
    question: "Berapa lama estimasi downtime perawatan peremajaan kulit?",
    answer: "Sebagian besar perawatan kami—seperti HIFU Ultra dan Laser Picosecond terkalibrasi—dirancang dengan zero downtime. Anda dapat langsung melanjutkan rutinitas normal dengan penggunaan tabir surya."
  },
  {
    question: "Bagaimana jaminan keaslian obat dan filler yang dipakai?",
    answer: "Semua produk botulinum toxin, skin booster, dan dermal filler dibuka langsung di hadapan pasien lengkap dengan scan barcode nomor batch dan izin BPOM resmi."
  },
  {
    question: "Apakah tindakan dilakukan langsung oleh dokter spesialis?",
    answer: "Seluruh tindakan berbasis injeksi, laser medis berenergi tinggi, dan peremajaan kontur dipimpin langsung oleh dokter berizin SIP resmi dari Dinas Kesehatan Banten, bukan oleh beautician."
  }
];

export default function FaqSection({ openFaqIndex, toggleFaq }: FaqSectionProps) {
  return (
    <section className="py-12 md:py-20 bg-[#fbf2ee] border-t border-[#d3c3c0]/30">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Title */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[10px] md:text-[11px] font-semibold text-[#765937] uppercase tracking-[0.16em] block">
              PERTANYAAN UMUM
            </span>
            <h2 className="font-serif text-[30px] sm:text-[36px] md:text-[40px] leading-[36px] md:leading-[46px] text-[#271310] font-normal">
              Informasi Klinis Pasien
            </h2>
            <p className="text-xs md:text-[13px] text-[#504442] leading-relaxed pt-1">
              Panduan transparansi seputar prosedur klinis, keselamatan medis, dan standar layanan di DIVINE Aesthetic Lounge.
            </p>
          </div>

          {/* Right Accordion */}
          <div className="lg:col-span-8 divide-y divide-[#d3c3c0]/40 border-y border-[#d3c3c0]/40 bg-white/50 lg:bg-transparent rounded px-3 lg:px-0">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="py-4 md:py-5">
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left flex items-center justify-between gap-4 text-[15px] md:text-[17px] font-semibold text-[#271310] focus:outline-none cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className={`material-symbols-outlined text-[#765937] text-xl transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                      {isOpen ? 'remove' : 'add'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pt-3 text-xs md:text-[14px] text-[#504442] leading-relaxed animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
