import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface AboutSectionProps {
  onOpenDossier: () => void;
}

export default function AboutSection({ onOpenDossier }: AboutSectionProps) {
  return (
    <section className="py-12 md:py-20 bg-[#fbf2ee] border-t border-[#d3c3c0]/30" id="tentang">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Monograph Story */}
          <div className="lg:col-span-7 space-y-4 md:space-y-6">
            <span className="text-[10px] md:text-[11px] font-semibold text-[#765937] uppercase tracking-[0.16em] block">
              WHO WE ARE
            </span>

            <h2 className="font-serif text-[30px] sm:text-[36px] md:text-[42px] leading-[36px] md:leading-[48px] text-[#271310] font-normal">
              Klinik Medis Estetika Berizin Resmi
            </h2>

            <p className="text-[14px] md:text-[15px] leading-[24px] md:leading-[26px] text-[#504442]">
              DIVINE Aesthetic Lounge didirikan atas keyakinan bahwa peremajaan kulit dan penyelarasan kontur wajah harus didasarkan pada transparansi medis murni. Kami menolak intervensi berlebihan, berfokus pada kesehatan seluler jangka panjang dan anatomi unik tiap individu.
            </p>

            <p className="text-[14px] md:text-[15px] leading-[24px] md:leading-[26px] text-[#504442]">
              Setiap protokol dipimpin langsung oleh dokter spesialis dan dokter estetika bersertifikasi internasional, ditunjang perangkat 3D imaging diagnostik tercanggih untuk mengevaluasi lapisan subkutan dan densitas kolagen secara objektif.
            </p>

            {/* Action Link: Dossier Modal */}
            <div className="pt-2">
              <button 
                onClick={onOpenDossier}
                className="inline-flex items-center gap-2 text-[12px] md:text-[13px] font-semibold text-[#271310] uppercase tracking-wider group cursor-pointer"
              >
                <span>Unduh Profil Klinik & Standar Medis</span>
                <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              <div className="w-full max-w-[340px] h-[1px] bg-[#765937]/40 mt-1"></div>
            </div>
          </div>

          {/* Right Column: Medical Director Card */}
          <div className="lg:col-span-5">
            <div className="bg-white p-4 md:p-5 rounded border border-[#d3c3c0]/30 shadow-sm max-w-[460px] mx-auto lg:max-w-none">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#f6ece8] rounded-sm">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDflNXFWicx-KVcK-uCAnPj7meUHo6gw_G64TgOq_XM5jAu3SGU4fAndLMFYx7FLKbl7GkdVK9BNNOuUs5xx3XVoHBq7u7He8ukkFPwN2vzGW9t4n9Co8HD_cWrK9wpUZcMVQZHgoFLZqafXEHgqNK7Mn5Yy_P_rQSmF5sA22cwPn9bXMMtYy71KlLFT2K-MvK8trYtYffWC_E_dC_kJfUUeigiWrCLQNGXPSvb0Qht6ImvCF1BKrYm"
                  alt="dr. Aurelia Paramitha, Sp.D.V.E di lounge klinik estetika minimalis" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="pt-4 pb-2 px-1 space-y-1">
                <p className="font-serif text-[20px] md:text-[22px] text-[#271310] font-normal">
                  dr. Aurelia Paramitha, Sp.D.V.E
                </p>
                <p className="text-[11px] font-semibold text-[#765937] uppercase tracking-wider">
                  Medical Director & Aesthetic Dermatologist
                </p>
                <p className="text-xs text-[#504442] pt-1">
                  Surat Izin Praktik: SIP. 446.1/108/SIP.D/DS/2023 Dinkes Banten.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
