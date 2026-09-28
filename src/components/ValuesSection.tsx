import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ValuesSection() {
  return (
    <section className="py-12 md:py-20 bg-[#fff8f5] border-t border-[#d3c3c0]/30" id="nilai">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <span className="text-[10px] md:text-[11px] font-semibold text-[#765937] uppercase tracking-[0.16em]">
            OUR VALUES
          </span>
          <div className="flex-1 h-[1px] bg-[#d3c3c0]/30"></div>
        </div>

        {/* Architectural Lounge Visual Banner */}
        <div className="aspect-[16/10] md:aspect-[21/9] w-full bg-[#f6ece8] rounded overflow-hidden border border-[#d3c3c0]/30 relative shadow-sm">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu3g8572hZHDVCwiRce3P_mPM4rzJl5Akb0LJX08XmnISOJ2q_m62V1hEzMYR0WOKtz6ZU-JvcB-5Rh1v6D3U13JPnXJLnT3S7Kj36ohDiIp2brvo5yeGiynW8mUeACujvr13B36XE-_FqgGjQsxCr_Jm-i0Q7cmlAKtOoYHrrVD0Ttgikf8mmv02EKg2OJuU9keTztYLidusyxsJzrxlLlNNh5u3d6cyayIQ_13nztjdHHbiuEhc"
            alt="Architectural view of private luxury medical lounge DIVINE SANCTUARY"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#271310]/15 flex items-center justify-center">
            <div className="bg-[#fff8f5]/90 backdrop-blur-md px-6 py-3 rounded border border-[#d3c3c0]/40 shadow-sm text-center">
              <span className="font-serif text-[20px] sm:text-[24px] md:text-[28px] text-[#271310] tracking-widest uppercase">
                DIVINE SANCTUARY
              </span>
              <p className="text-[10px] md:text-[11px] text-[#765937] uppercase tracking-wider font-semibold mt-0.5">
                Private Aesthetics Sanctuary
              </p>
            </div>
          </div>
        </div>

        {/* Content Split: Narrative & Pillars */}
        <div className="mt-8 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-serif text-[30px] sm:text-[36px] md:text-[40px] leading-[36px] md:leading-[48px] text-[#271310] font-normal">
              Kejujuran Medis & Harmoni Alami
            </h3>
            <p className="text-[14px] md:text-[15px] leading-[24px] md:leading-[26px] text-[#504442]">
              Sebagai pelopor mindful aesthetics di Tangerang Raya, kami menempatkan keselamatan jaringan biologis Anda di atas tren sesaat. Kami membangun percakapan klinis berbasis data objektif yang memberi Anda otonomi penuh dalam menjaga vitalitas wajah.
            </p>
            <div className="pt-2">
              <a 
                href="#booking"
                className="inline-flex items-center gap-2 text-[12px] md:text-[13px] font-semibold text-[#271310] uppercase tracking-wider group"
              >
                <span>Jadwalkan Konsultasi Privat</span>
                <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
              <div className="w-full max-w-[280px] h-[1px] bg-[#765937]/40 mt-1"></div>
            </div>
          </div>

          {/* Right Column: Values Bullet Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="flex items-start gap-4 p-4 md:p-5 bg-[#f6ece8] rounded border border-[#d3c3c0]/30 shadow-xs">
              <div className="w-10 h-10 rounded bg-[#fff8f5] border border-[#d3c3c0]/40 flex items-center justify-center shrink-0 text-[#765937]">
                <span className="material-symbols-outlined text-2xl">biotech</span>
              </div>
              <div>
                <p className="text-[16px] font-semibold text-[#271310]">Diagnostik 3D Obyektif</p>
                <p className="text-[13px] text-[#504442] mt-1 leading-relaxed">
                  Pemetaan lapisan dermis, vaskularisasi, dan simetri wajah dengan modalitas digital sebelum dan sesudah intervensi klinis.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 md:p-5 bg-[#f6ece8] rounded border border-[#d3c3c0]/30 shadow-xs">
              <div className="w-10 h-10 rounded bg-[#fff8f5] border border-[#d3c3c0]/40 flex items-center justify-center shrink-0 text-[#765937]">
                <span className="material-symbols-outlined text-2xl">format_image_left</span>
              </div>
              <div>
                <p className="text-[16px] font-semibold text-[#271310]">Zero Overtreatment</p>
                <p className="text-[13px] text-[#504442] mt-1 leading-relaxed">
                  Hanya prosedur yang terbukti memberikan benefit anatomis nyata. Menolak desakan tren yang berisiko mengubah proporsi alami.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
