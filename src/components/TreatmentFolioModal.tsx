import React from 'react';
import { X, Clock, Sparkles, ArrowRight, Check } from 'lucide-react';

interface TreatmentItem {
  id: string;
  category: string;
  duration: string;
  title: string;
  description: string;
  downtime: string;
  keyBenefits: string[];
}

interface TreatmentFolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTreatment: (treatmentName: string) => void;
}

const TREATMENTS_FOLIO: TreatmentItem[] = [
  {
    id: 'hifu',
    category: '01 / LIFTING & CONTOUR',
    duration: '45 MENIT',
    title: '3D Micro-Contouring HIFU Ultra',
    description: 'Pengencangan lapisan SMAS terfokus tanpa downtime, menstimulasi neokolagenesis alami untuk mendefinisikan garis rahang dan mengangkat pipi kendur.',
    downtime: 'Zero downtime (sedikit kemerahan reda dalam 1-2 jam)',
    keyBenefits: ['Menstimulasi kolagen tipe I & III', 'Menajamkan kontur jawline', 'Hasil bertahap optimal dalam 6-12 minggu']
  },
  {
    id: 'booster',
    category: '02 / CELLULAR RESTORATION',
    duration: '60 MENIT',
    title: 'Cellular Skin Booster & Salmon PDRN',
    description: 'Regenerasi biorevitalisasi mendalam berbasis Polynucleotide untuk hidrasi intraseluler, elastisitas dermal, dan perbaikan tekstur parut jerawat.',
    downtime: 'Minimal (papul mikro merata reda dalam 24 jam)',
    keyBenefits: ['Perbaikan barrier kulit rusak', 'Peningkatan elastisitas seluler', 'Kulit bercahaya dari dalam (glass-skin glow)']
  },
  {
    id: 'pico',
    category: '03 / PIGMENT & TONING',
    duration: '30 MENIT',
    title: 'Dual-Wavelength Picosecond Laser',
    description: 'Pemecah hiperpigmentasi dan melasma dengan denyut fotoakustik ultra-singkat berstandar FDA tanpa merusak jaringan kulit sehat di sekitarnya.',
    downtime: 'Zero to minimal downtime',
    keyBenefits: ['Mencerahkan noda hitam & melasma bandel', 'Mengecilkan pori-pori dan meratakan warna kulit', 'Aman untuk skin tone Asia (Fitzpatrick III-V)']
  },
  {
    id: 'hair',
    category: '04 / TRICHOLOGY PROTOCOL',
    duration: '50 MENIT',
    title: 'Medical Scalp & Hair Regrowth',
    description: 'Injeksi faktor pertumbuhan murni dan bioactive peptide terkonsentrasi untuk memperkuat akar, menghentikan kerontokan rambut, serta menstimulasi folikel dorman.',
    downtime: 'Zero downtime',
    keyBenefits: ['Meningkatkan ketebalan helai rambut', 'Mengurangi kerontokan telogen effluvium', 'Nutrisi mikrosirkulasi folikel kulit kepala']
  },
  {
    id: 'diagnostic',
    category: '00 / CLINICAL FOUNDATION',
    duration: '30 MENIT',
    title: 'Konsultasi Diagnostik 3D Komprehensif',
    description: 'Sesi mendalam pemetaan digital 3D lapisan dermis, vaskularisasi, dan simetri wajah langsung bersama dr. Aurelia Paramitha, Sp.D.V.E.',
    downtime: 'Tanpa tindakan invasif',
    keyBenefits: ['Analisis objektif kondisi kulit mendalam', 'Rekomendasi etis tanpa paksaan tindakan', 'Penyusunan blueprint perawatan jangka panjang']
  }
];

export default function TreatmentFolioModal({ isOpen, onClose, onSelectTreatment }: TreatmentFolioModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-primary/60 backdrop-blur-sm transition-opacity">
      <div className="bg-[#fff8f5] w-full max-w-[560px] max-h-[88vh] rounded-xl shadow-2xl flex flex-col overflow-hidden border border-[#d3c3c0]/60 text-[#1f1b19]">
        
        {/* Header */}
        <div className="bg-[#271310] text-[#fff8f5] px-5 py-4 flex items-center justify-between border-b border-[#3e2723]">
          <div>
            <span className="text-[10px] text-[#fed6ab] uppercase tracking-widest block font-medium">Buku Protokol Medis</span>
            <h3 className="font-serif text-lg tracking-wide">Koleksi Perawatan Unggulan Terukur</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#fff8f5]/70 hover:text-[#fff8f5] hover:bg-[#3e2723] rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Treatment List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          <p className="text-xs text-[#504442] italic">
            Seluruh protokol di bawah dilaksanakan oleh dokter berizin resmi dengan formulasi medis terdaftar BPOM dan perangkat berstandar FDA.
          </p>

          <div className="space-y-4 divide-y divide-[#d3c3c0]/40">
            {TREATMENTS_FOLIO.map((item, idx) => (
              <div key={item.id} className={idx > 0 ? 'pt-4 space-y-2' : 'space-y-2'}>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#765937] tracking-wider uppercase">{item.category}</span>
                  <span className="bg-[#f6ece8] border border-[#d3c3c0]/50 px-2 py-0.5 rounded text-[10px] uppercase font-semibold text-[#504442] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#765937]" />
                    {item.duration}
                  </span>
                </div>

                <h4 className="font-serif text-base text-[#271310] font-semibold">{item.title}</h4>
                <p className="text-xs text-[#504442] leading-relaxed">{item.description}</p>

                <div className="bg-[#ffffff] p-2.5 rounded border border-[#d3c3c0]/40 space-y-1.5">
                  <div className="text-[11px] text-[#271310] font-medium flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#765937]" />
                    <span>Estimasi Downtime: <span className="font-normal text-[#504442]">{item.downtime}</span></span>
                  </div>
                  <div className="space-y-1 pt-1 border-t border-[#d3c3c0]/20">
                    {item.keyBenefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-1.5 text-[11px] text-[#504442]">
                        <Check className="w-3 h-3 text-[#765937] shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-1 flex justify-end">
                  <button
                    onClick={() => {
                      onClose();
                      onSelectTreatment(item.title);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs text-[#765937] hover:text-[#271310] font-semibold uppercase tracking-wider py-1"
                  >
                    <span>Pilih untuk Konsultasi</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3.5 bg-[#fbf2ee] border-t border-[#d3c3c0]/40 text-center">
          <p className="text-[11px] text-[#504442]">
            Dosis dan kombinasi terapi disesuaikan secara personal setelah evaluasi klinis 3D.
          </p>
        </div>

      </div>
    </div>
  );
}
