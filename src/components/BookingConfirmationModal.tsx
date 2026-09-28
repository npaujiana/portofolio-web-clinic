import React from 'react';
import { CheckCircle, Calendar, Clock, MessageSquare, X, ShieldCheck } from 'lucide-react';

interface BookingConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingData: {
    name: string;
    phone: string;
    treatment: string;
    date: string;
    session: string;
    notes?: string;
  };
}

export default function BookingConfirmationModal({ isOpen, onClose, bookingData }: BookingConfirmationModalProps) {
  if (!isOpen) return null;

  const handleWhatsAppForward = () => {
    const text = encodeURIComponent(
      `Halo Concierge DIVINE Aesthetic Lounge, saya telah mengisi formulir reservasi konsultasi di website:\n\n` +
      `• Nama: ${bookingData.name}\n` +
      `• No. WhatsApp: ${bookingData.phone}\n` +
      `• Fokus Perawatan: ${bookingData.treatment}\n` +
      `• Tanggal: ${bookingData.date || 'Sesuai rekomendasi'}\n` +
      `• Sesi Waktu: ${bookingData.session}\n` +
      (bookingData.notes ? `• Catatan: ${bookingData.notes}\n\n` : '\n') +
      `Mohon bantuan konfirmasi ketersediaan jadwal dokter. Terima kasih.`
    );
    window.open(`https://wa.me/628118899711?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/60 backdrop-blur-sm transition-opacity">
      <div className="bg-[#fff8f5] w-full max-w-[460px] rounded-xl shadow-2xl overflow-hidden border border-[#d3c3c0]/60 text-[#1f1b19]">
        
        {/* Header */}
        <div className="bg-[#271310] text-[#fff8f5] px-5 py-4 flex items-center justify-between border-b border-[#3e2723]">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#fed6ab]" />
            <h3 className="font-serif text-lg tracking-wide">Permohonan Terkirim</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#fff8f5]/70 hover:text-[#fff8f5] hover:bg-[#3e2723] rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4 text-xs text-[#504442]">
          <div className="text-center py-2 space-y-1">
            <div className="w-12 h-12 rounded-full bg-[#f6ece8] border border-[#d3c3c0] mx-auto flex items-center justify-center text-[#765937]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-[#271310] text-base font-semibold pt-1">
              Terima Kasih, {bookingData.name}
            </h4>
            <p className="text-xs text-[#504442] max-w-xs mx-auto">
              Tim Concierge Medis DIVINE Aesthetic Lounge akan mengonfirmasi jadwal dokter spesialis dalam waktu 30 menit.
            </p>
          </div>

          <div className="bg-white p-3.5 rounded-lg border border-[#d3c3c0]/50 space-y-2">
            <div className="text-[11px] font-semibold text-[#765937] uppercase tracking-wider border-b border-[#d3c3c0]/30 pb-1">
              Detail Permohonan Konsultasi
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
              <div>
                <span className="text-[#827472] block text-[10px] uppercase">Pasien</span>
                <span className="font-semibold text-[#271310]">{bookingData.name}</span>
              </div>
              <div>
                <span className="text-[#827472] block text-[10px] uppercase">WhatsApp</span>
                <span className="font-semibold text-[#271310]">{bookingData.phone}</span>
              </div>
              <div className="col-span-2">
                <span className="text-[#827472] block text-[10px] uppercase">Perawatan Diminati</span>
                <span className="font-semibold text-[#271310]">{bookingData.treatment}</span>
              </div>
              <div>
                <span className="text-[#827472] block text-[10px] uppercase">Pilihan Hari</span>
                <span className="font-semibold text-[#271310]">{bookingData.date || 'Tersedia Hari Ini'}</span>
              </div>
              <div>
                <span className="text-[#827472] block text-[10px] uppercase">Sesi</span>
                <span className="font-semibold text-[#271310]">{bookingData.session}</span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-[#fbf2ee] rounded border border-[#d3c3c0]/40 text-[11px] text-[#504442]">
            <strong>Catatan Kunjungan:</strong> Kami menyarankan Anda hadir 10 menit lebih awal untuk menikmati welcome tisane di lounge individual sebelum sesi diagnostik 3D dimulai.
          </div>
        </div>

        {/* Actions */}
        <div className="p-4 bg-[#f6ece8] border-t border-[#d3c3c0]/40 flex flex-col gap-2">
          <button
            onClick={handleWhatsAppForward}
            className="w-full bg-[#765937] hover:bg-[#5c4222] text-white py-2.5 px-4 rounded text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Konfirmasi Cepat via WhatsApp</span>
          </button>
          <button
            onClick={onClose}
            className="w-full bg-white hover:bg-[#fff8f5] text-[#271310] border border-[#d3c3c0] py-2 px-4 rounded text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
}
