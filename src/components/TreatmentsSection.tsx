import React from 'react';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';

interface TreatmentsSectionProps {
  onSelectTreatment: (treatmentName: string) => void;
  onOpenFolio: () => void;
}

export default function TreatmentsSection({ onSelectTreatment, onOpenFolio }: TreatmentsSectionProps) {
  return (
    <section className="py-12 md:py-20 bg-[#fbf2ee] border-t border-[#d3c3c0]/30" id="perawatan">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="space-y-3 max-w-2xl">
          <span className="text-[10px] md:text-[11px] font-semibold text-[#765937] uppercase tracking-[0.16em] block">
            START YOUR JOURNEY
          </span>
          <h2 className="font-serif text-[30px] sm:text-[36px] md:text-[42px] leading-[36px] md:leading-[48px] text-[#271310] font-normal">
            Perawatan Unggulan Terukur
          </h2>
          <p className="text-[14px] md:text-[15px] leading-[24px] text-[#504442]">
            Portofolio terapi klinis berbasis regenerasi sel, perbaikan elastisitas, serta restrukturisasi kontur wajah.
          </p>
        </div>

        {/* 2-Column Layout on Desktop */}
        <div className="mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Visual Asset */}
          <div className="lg:col-span-5 space-y-4">
            <div className="aspect-[16/11] md:aspect-[4/3] w-full overflow-hidden rounded bg-[#f6ece8] border border-[#d3c3c0]/40 shadow-sm relative group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXyTB31MeWCkRM6_4h-LWWlVTnWUFT-CfnYhtJoFrNrvQhGhNhA4aQiWW6YZakEDeXWCqmnmVe4PFBDJWiA1TPbQHnfZfb9J1kx-G8r3XDzNolrcePW2XnfX3akraVI7XA8y-nv22_klPylvkc_AWaZZ9sr8kKdIBsZDjS6HznkEHxew0cUljLnE0Z1Xx2AuDvwUMT_QxU_oQ4VQWdcxXFbC6Cur0p1_PUPygVp_hqpyb9YUJeM887"
                alt="Perawatan seluler dengan pipet emas di ruang klinis"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md p-3 rounded border border-[#d3c3c0]/40 text-xs">
                <span className="font-semibold text-[#271310] block">Biorevitalisasi Seluler Aktif</span>
                <span className="text-[#504442] text-[11px]">Formula teruji secara dermatologis tanpa bahan aditif sintetis keras.</span>
              </div>
            </div>

            <div className="hidden lg:block p-4 bg-white/60 rounded border border-[#d3c3c0]/30 text-xs text-[#504442] space-y-1">
              <p className="font-semibold text-[#271310] uppercase tracking-wider text-[11px]">Standar Dosis Presisi</p>
              <p>Setiap syringe diinspeksi bersama pasien sebelum aplikasi injeksi untuk menjaga transparansi penuh volume dan konsentrasi.</p>
            </div>
          </div>

          {/* Right Column: Numbered Folio */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-[#d3c3c0]/30 border-y border-[#d3c3c0]/30 bg-white/40 lg:bg-transparent rounded px-2 lg:px-0">
              
              {/* 01 */}
              <div 
                onClick={() => onSelectTreatment('3D Facial Micro-Contouring (HIFU Ultra)')}
                className="py-5 space-y-2 cursor-pointer hover:bg-white/70 p-3 transition-all rounded-md group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#765937] tracking-wider uppercase">01 / LIFTING & CONTOUR</span>
                  <span className="bg-[#fff8f5] px-2.5 py-0.5 rounded text-[11px] uppercase font-semibold text-[#504442] border border-[#d3c3c0]/40">
                    45 Menit
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-[22px] md:text-[24px] text-[#271310] font-normal group-hover:text-[#765937] transition-colors">
                    3D Micro-Contouring HIFU Ultra
                  </h3>
                  <span className="text-xs text-[#765937] font-semibold uppercase tracking-wider hidden sm:inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Pilih <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <p className="text-[13px] text-[#504442] leading-relaxed">
                  Pengencangan lapisan SMAS terfokus tanpa downtime, menstimulasi neokolagenesis alami untuk mendefinisikan kontur rahang dan pipi.
                </p>
              </div>

              {/* 02 */}
              <div 
                onClick={() => onSelectTreatment('Cellular Skin Booster & PDRN')}
                className="py-5 space-y-2 cursor-pointer hover:bg-white/70 p-3 transition-all rounded-md group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#765937] tracking-wider uppercase">02 / CELLULAR RESTORATION</span>
                  <span className="bg-[#fff8f5] px-2.5 py-0.5 rounded text-[11px] uppercase font-semibold text-[#504442] border border-[#d3c3c0]/40">
                    60 Menit
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-[22px] md:text-[24px] text-[#271310] font-normal group-hover:text-[#765937] transition-colors">
                    Cellular Skin Booster & Salmon PDRN
                  </h3>
                  <span className="text-xs text-[#765937] font-semibold uppercase tracking-wider hidden sm:inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Pilih <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <p className="text-[13px] text-[#504442] leading-relaxed">
                  Regenerasi biorevitalisasi mendalam untuk hidrasi intraseluler, perbaikan barrier kulit, dan pemulihan tekstur parut bekas jerawat.
                </p>
              </div>

              {/* 03 */}
              <div 
                onClick={() => onSelectTreatment('Picosecond Laser Pigmentation Care')}
                className="py-5 space-y-2 cursor-pointer hover:bg-white/70 p-3 transition-all rounded-md group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#765937] tracking-wider uppercase">03 / PIGMENT & TONING</span>
                  <span className="bg-[#fff8f5] px-2.5 py-0.5 rounded text-[11px] uppercase font-semibold text-[#504442] border border-[#d3c3c0]/40">
                    30 Menit
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-[22px] md:text-[24px] text-[#271310] font-normal group-hover:text-[#765937] transition-colors">
                    Dual-Wavelength Picosecond Laser
                  </h3>
                  <span className="text-xs text-[#765937] font-semibold uppercase tracking-wider hidden sm:inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Pilih <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <p className="text-[13px] text-[#504442] leading-relaxed">
                  Pemecah hiperpigmentasi dan melasma dengan denyut fotoakustik ultra-singkat berstandar FDA tanpa efek panas berlebihan pada dermis.
                </p>
              </div>

              {/* 04 */}
              <div 
                onClick={() => onSelectTreatment('Medical Hair & Scalp Revitalize')}
                className="py-5 space-y-2 cursor-pointer hover:bg-white/70 p-3 transition-all rounded-md group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#765937] tracking-wider uppercase">04 / TRICHOLOGY PROTOCOL</span>
                  <span className="bg-[#fff8f5] px-2.5 py-0.5 rounded text-[11px] uppercase font-semibold text-[#504442] border border-[#d3c3c0]/40">
                    50 Menit
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-[22px] md:text-[24px] text-[#271310] font-normal group-hover:text-[#765937] transition-colors">
                    Medical Scalp & Hair Regrowth
                  </h3>
                  <span className="text-xs text-[#765937] font-semibold uppercase tracking-wider hidden sm:inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Pilih <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <p className="text-[13px] text-[#504442] leading-relaxed">
                  Injeksi faktor pertumbuhan murni dan peptide bioaktif untuk memperkuat akar serta membangkitkan folikel rambut yang dorman.
                </p>
              </div>

            </div>

            {/* Action Link: Folio Modal */}
            <div className="mt-6 flex items-center justify-between">
              <button 
                onClick={onOpenFolio}
                className="inline-flex items-center gap-2 text-[12px] md:text-[13px] font-semibold text-[#271310] uppercase tracking-wider group cursor-pointer"
              >
                <span>Lihat Buku Perawatan Lengkap</span>
                <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
            <div className="w-full max-w-[280px] h-[1px] bg-[#765937]/40 mt-1"></div>

          </div>

        </div>

      </div>
    </section>
  );
}
