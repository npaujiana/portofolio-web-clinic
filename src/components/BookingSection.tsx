import React from 'react';
import { ArrowRight, ShieldCheck, Clock, Calendar } from 'lucide-react';

interface BookingSectionProps {
  formData: {
    name: string;
    phone: string;
    treatment: string;
    date: string;
    session: string;
    notes: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    name: string;
    phone: string;
    treatment: string;
    date: string;
    session: string;
    notes: string;
  }>>;
  onSubmit: (e: React.FormEvent) => void;
}

export default function BookingSection({ formData, setFormData, onSubmit }: BookingSectionProps) {
  return (
    <section className="py-12 md:py-20 bg-[#fff8f5] border-t border-[#d3c3c0]/30" id="booking">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column: Context & Guarantees */}
          <div className="lg:col-span-5 space-y-4 md:space-y-6">
            <span className="text-[10px] md:text-[11px] font-semibold text-[#765937] uppercase tracking-[0.16em] block">
              RESERVATION
            </span>

            <h2 className="font-serif text-[30px] sm:text-[36px] md:text-[42px] leading-[36px] md:leading-[48px] text-[#271310] font-normal">
              Reservasi Konsultasi Privat
            </h2>

            <p className="text-[14px] md:text-[15px] leading-[24px] text-[#504442]">
              Silakan lengkapi formulir di samping. Tim Concierge Medis kami akan mengonfirmasi jadwal dokter yang sesuai dalam waktu 30 menit.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 bg-[#f6ece8] rounded border border-[#d3c3c0]/30">
                <ShieldCheck className="w-5 h-5 text-[#765937] shrink-0 mt-0.5" />
                <div className="text-xs text-[#504442] space-y-0.5">
                  <span className="font-semibold text-[#271310] block">Privasi Rekam Medis Dijamin</span>
                  <span>Data Anda terlindungi standar kerahasiaan medis dan tidak akan dialihkan ke pihak ketiga.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-[#f6ece8] rounded border border-[#d3c3c0]/30">
                <Clock className="w-5 h-5 text-[#765937] shrink-0 mt-0.5" />
                <div className="text-xs text-[#504442] space-y-0.5">
                  <span className="font-semibold text-[#271310] block">Sesi Konsultasi Tanpa Tergesa</span>
                  <span>Setiap konsultasi dialokasikan 30-45 menit untuk mendiskusikan kondisi kulit Anda secara mendalam.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Reservation Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded border border-[#d3c3c0]/40 shadow-xs">
            <form onSubmit={onSubmit} className="space-y-4 md:space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Nama Lengkap */}
                <div>
                  <label className="block text-[11px] md:text-[12px] font-semibold text-[#271310] mb-1 uppercase tracking-wider">
                    Nama Lengkap
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="contoh: Nadia Wijaya" 
                    className="w-full bg-[#fff8f5] border border-[#d3c3c0]/80 rounded px-3.5 py-2.5 text-[#1f1b19] text-sm focus:outline-none focus:border-[#765937] transition-colors placeholder:text-[#827472]"
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-[11px] md:text-[12px] font-semibold text-[#271310] mb-1 uppercase tracking-wider">
                    Nomor WhatsApp Aktif
                  </label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0812-xxxx-xxxx" 
                    className="w-full bg-[#fff8f5] border border-[#d3c3c0]/80 rounded px-3.5 py-2.5 text-[#1f1b19] text-sm focus:outline-none focus:border-[#765937] transition-colors placeholder:text-[#827472]"
                  />
                </div>
              </div>

              {/* Pilihan Perawatan */}
              <div>
                <label className="block text-[11px] md:text-[12px] font-semibold text-[#271310] mb-1 uppercase tracking-wider">
                  Fokus Perawatan yang Diminati
                </label>
                <select 
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  className="w-full bg-[#fff8f5] border border-[#d3c3c0]/80 rounded px-3.5 py-2.5 text-[#1f1b19] text-sm focus:outline-none focus:border-[#765937] transition-colors"
                >
                  <option value="Konsultasi Diagnostik 3D Komprehensif">Konsultasi Diagnostik 3D Komprehensif</option>
                  <option value="3D Facial Micro-Contouring (HIFU Ultra)">3D Facial Micro-Contouring (HIFU Ultra)</option>
                  <option value="Cellular Skin Booster & PDRN">Cellular Skin Booster & Salmon PDRN</option>
                  <option value="Picosecond Laser Pigmentation Care">Picosecond Laser Pigmentation Care</option>
                  <option value="Medical Hair & Scalp Revitalize">Medical Hair & Scalp Revitalize</option>
                  <option value="Lainnya / Diskusi dengan Dokter">Lainnya / Diskusi dengan Dokter</option>
                </select>
              </div>

              {/* Preferensi Waktu */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] md:text-[12px] font-semibold text-[#271310] mb-1 uppercase tracking-wider">
                    Pilihan Hari
                  </label>
                  <input 
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#fff8f5] border border-[#d3c3c0]/80 rounded px-3 py-2.5 text-[#1f1b19] text-xs focus:outline-none focus:border-[#765937] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] md:text-[12px] font-semibold text-[#271310] mb-1 uppercase tracking-wider">
                    Sesi Waktu
                  </label>
                  <select 
                    value={formData.session}
                    onChange={(e) => setFormData({ ...formData, session: e.target.value })}
                    className="w-full bg-[#fff8f5] border border-[#d3c3c0]/80 rounded px-3 py-2.5 text-[#1f1b19] text-xs focus:outline-none focus:border-[#765937] transition-colors"
                  >
                    <option value="Pagi (10:00 - 13:00)">Pagi (10:00 - 13:00)</option>
                    <option value="Siang (13:00 - 16:00)">Siang (13:00 - 16:00)</option>
                    <option value="Sore (16:00 - 19:00)">Sore (16:00 - 19:00)</option>
                  </select>
                </div>
              </div>

              {/* Catatan Khusus */}
              <div>
                <label className="block text-[11px] md:text-[12px] font-semibold text-[#271310] mb-1 uppercase tracking-wider">
                  Catatan Tambahan (Opsional)
                </label>
                <textarea 
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Riwayat alergi, keluhan khusus, atau preferensi ruang VIP..." 
                  className="w-full bg-[#fff8f5] border border-[#d3c3c0]/80 rounded px-3.5 py-2.5 text-[#1f1b19] text-sm focus:outline-none focus:border-[#765937] transition-colors placeholder:text-[#827472]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-[#3e2723] text-[#fff8f5] hover:bg-[#271310] py-3.5 px-6 rounded text-[12px] uppercase font-semibold tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Kirim Permohonan Konsultasi</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
