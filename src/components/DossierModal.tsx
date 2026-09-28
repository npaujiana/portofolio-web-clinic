import React from 'react';
import { X, ShieldCheck, FileText, Award, Download, CheckCircle2 } from 'lucide-react';

interface DossierModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookNow: () => void;
}

export default function DossierModal({ isOpen, onClose, onBookNow }: DossierModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/60 backdrop-blur-sm transition-opacity">
      <div className="bg-[#fff8f5] w-full max-w-[540px] max-h-[85vh] rounded-xl shadow-2xl flex flex-col overflow-hidden border border-[#d3c3c0]/60 text-[#1f1b19]">
        
        {/* Header */}
        <div className="bg-[#271310] text-[#fff8f5] px-5 py-4 flex items-center justify-between border-b border-[#3e2723]">
          <div>
            <span className="text-[10px] text-[#fed6ab] uppercase tracking-widest block font-medium">Dokumen Resmi Medis</span>
            <h3 className="font-serif text-lg tracking-wide">Profil Klinik & Standar Medis DIVINE</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#fff8f5]/70 hover:text-[#fff8f5] hover:bg-[#3e2723] rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5 text-xs text-[#504442] leading-relaxed">
          <div className="p-3.5 bg-[#f6ece8] rounded-lg border border-[#d3c3c0]/50 space-y-2">
            <div className="flex items-center gap-2 text-[#271310] font-semibold text-sm">
              <ShieldCheck className="w-5 h-5 text-[#765937]" />
              <span>Legalitas & Perizinan Terverifikasi</span>
            </div>
            <p>
              DIVINE Aesthetic Lounge beroperasi dengan Izin Operasional Klinik Pratama resmi <strong>No. 445/092-Dinkes/KP-EST/2023</strong> diterbitkan oleh Dinas Kesehatan Kabupaten Tangerang / Banten.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-serif text-[#271310] text-sm font-semibold uppercase tracking-wider">
              5 Pilar Etika Medis DIVINE
            </h4>
            <div className="space-y-2.5">
              <div className="flex gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#765937] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#271310]">Zero Overtreatment Protocol:</strong> Dokter kami terikat sumpah etika untuk tidak menyarankan intervensi kosmetik yang tidak dibutuhkan secara anatomis.
                </div>
              </div>
              <div className="flex gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#765937] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#271310]">100% Produk Bersertifikasi BPOM & FDA:</strong> Semua ampul dan syringe dibuka langsung di hadapan pasien dengan verifikasi QR-code keaslian produk.
                </div>
              </div>
              <div className="flex gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#765937] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#271310]">3D Diagnostic First:</strong> Pemetaan densitas dermis, pigmen melanin, dan elastisitas sebelum menentukan dosis laser atau bio-stimulator.
                </div>
              </div>
              <div className="flex gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#765937] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#271310]">Privasi Lounge Terpadu:</strong> Setiap pasien dilayani di ruang VIP individu tanpa ruang tunggu publik yang terbuka.
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#d3c3c0]/40 pt-4 space-y-2">
            <h4 className="font-serif text-[#271310] text-sm font-semibold uppercase tracking-wider">
              Fasilitas Klinis & Alat Terkalibrasi
            </h4>
            <ul className="list-disc list-inside space-y-1 text-[#504442]">
              <li>High-Intensity Focused Ultrasound (HIFU) Ultra dengan depth transducer mikro 1.5mm, 3.0mm, 4.5mm.</li>
              <li>FDA-cleared Picosecond Laser (Dual Wavelength 1064nm & 532nm) untuk melasma & tato.</li>
              <li>Cold-chain storage 2°C - 8°C terkontrol untuk kestabilan biologis Salmon PDRN & Polynucleotide.</li>
              <li>Sterilisasi kelas rumah sakit standar autoclave uap bertekanan tinggi (EN 13060).</li>
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#fbf2ee] border-t border-[#d3c3c0]/40 flex items-center justify-between gap-3">
          <button
            onClick={() => {
              const element = document.createElement('a');
              const file = new Blob([
                "DIVINE AESTHETIC LOUNGE - CLINICAL PROFILE & ETHICAL STANDARDS\n\nNo. Izin: 445/092-Dinkes/KP-EST/2023\nMedical Director: dr. Aurelia Paramitha, Sp.D.V.E\n\nPilar Etika Medis:\n1. Zero Overtreatment\n2. 3D Facial Diagnostic Mapping\n3. 100% BPOM & FDA Certified Formulations\n4. Strict Sterility Standards\n\nAlamat: Ruko South Goldfinch Blok SGD No. 18-19, Jl. Springs Boulevard, Gading Serpong, Banten."
              ], { type: 'text/plain' });
              element.href = URL.createObjectURL(file);
              element.download = "DIVINE-Profil-Klinik-dan-Standar-Medis.txt";
              document.body.appendChild(element);
              element.click();
              document.body.removeChild(element);
            }}
            className="flex items-center gap-1.5 px-3 py-2 border border-[#765937] text-[#271310] hover:bg-[#765937]/10 rounded text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Unduh Ringkasan</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onBookNow();
            }}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#271310] hover:bg-[#3e2723] text-white rounded text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <span>Jadwalkan Konsultasi</span>
          </button>
        </div>

      </div>
    </div>
  );
}
