import React from 'react';
import { MapPin, MessageCircle, ExternalLink } from 'lucide-react';

export default function LocationsSection() {
  return (
    <section className="py-12 md:py-20 bg-[#fbf2ee] border-t border-[#d3c3c0]/30" id="lokasi">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="space-y-3 mb-8 md:mb-12 max-w-2xl">
          <span className="text-[10px] md:text-[11px] font-semibold text-[#765937] uppercase tracking-[0.16em] block">
            FIND US
          </span>
          <h2 className="font-serif text-[30px] sm:text-[36px] md:text-[42px] leading-[36px] md:leading-[48px] text-[#271310] font-normal">
            Lounge & Ruang Konsultasi
          </h2>
          <p className="text-[14px] md:text-[15px] leading-[24px] text-[#504442]">
            Dirancang untuk memastikan privasi absolut dengan lounge individual tanpa antrean terbuka.
          </p>
        </div>

        {/* 2-Column Location Cards on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Location 1: Gading Serpong Flagship */}
          <div className="bg-white rounded overflow-hidden border border-[#d3c3c0]/30 shadow-sm flex flex-col group">
            <div className="aspect-[16/10] w-full bg-[#f6ece8] overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBuZrwDKdNMTlS8fjLEDjrz7zZ1gC4fu43AE2jAfQBc1dvGVwJfALSFtyWAKjdMnyv-y_KrK0LHO53Ij_wLIcJmF-vGHdF_ZoIZHEHFr4Sh6U9XEXDCJN2_rQl8G4r9ZtRpLzgMTo7HK-opahfhPML-8PgUNeXnEf7bXwcBe3hImZbzB2_juSqBmBugHfx-dlKpUAEm7BysKi0xWZD8MIasMXqEXyFgiUbMY9rEYLxVlYL0sT_62xM"
                alt="Lounge Gading Serpong Flagship"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            <div className="p-5 md:p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-[22px] md:text-[24px] text-[#271310] font-normal">
                    Gading Serpong Flagship
                  </h3>
                  <span className="text-[10px] md:text-[11px] font-semibold text-[#765937] uppercase tracking-wider bg-[#f6ece8] px-2 py-0.5 rounded">
                    Utama
                  </span>
                </div>
                <p className="text-xs md:text-[13px] text-[#504442] leading-relaxed mt-2">
                  Ruko South Goldfinch Blok SGD No. 18-19, Jl. Springs Boulevard, Gading Serpong, Tangerang.
                </p>
              </div>

              <div className="pt-3 flex items-center justify-between border-t border-[#d3c3c0]/20">
                <a 
                  href="https://maps.google.com/?q=Gading+Serpong+South+Goldfinch" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs md:text-[13px] text-[#271310] font-semibold uppercase tracking-wider flex items-center gap-1.5 hover:text-[#765937] transition-colors"
                >
                  <span className="material-symbols-outlined text-base">map</span>
                  <span>Google Maps</span>
                </a>
                <a 
                  href="https://wa.me/628118899711?text=Halo%20DIVINE%20Aesthetic%20Lounge%20Flagship"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs md:text-[13px] text-[#765937] font-semibold uppercase tracking-wider flex items-center gap-1.5 hover:text-[#271310] transition-colors"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  <span>WhatsApp Flagship</span>
                </a>
              </div>
            </div>
          </div>

          {/* Location 2: Sanctuary VIP Suite */}
          <div className="bg-white rounded overflow-hidden border border-[#d3c3c0]/30 shadow-sm flex flex-col group">
            <div className="aspect-[16/10] w-full bg-[#f6ece8] overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7fh054H6O57jv-HzknVXidclcw0qzwiTA0CH_gmsdWMAs-Js4x5_jbcDp9DLpKenDC3lzhCslB9DTJTon6xbpDX2JRSP4ula_bdgjsvlw4EcK0Zm_xqGC6eP_EW-gN_Rk440vQds82swWEo0YnyUqPWdYATsOTzRQa6kFFjqs7danLtrb2fA6909bjZq0zXJgNT2L5UByCw68o4ajlz3YQBqgNUGDYI3buLfx1dFnM-CnRUe6sVy3"
                alt="Sanctuary VIP Suite DIVINE"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            <div className="p-5 md:p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-[22px] md:text-[24px] text-[#271310] font-normal">
                    Sanctuary VIP Suite
                  </h3>
                  <span className="text-[10px] md:text-[11px] font-semibold text-[#765937] uppercase tracking-wider bg-[#f6ece8] px-2 py-0.5 rounded">
                    Private
                  </span>
                </div>
                <p className="text-xs md:text-[13px] text-[#504442] leading-relaxed mt-2">
                  The Opus Residence Wing, Private Elevator 3rd Floor, Boulevard Gading Serpong, Banten.
                </p>
              </div>

              <div className="pt-3 flex items-center justify-between border-t border-[#d3c3c0]/20">
                <a 
                  href="https://maps.google.com/?q=Boulevard+Gading+Serpong" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs md:text-[13px] text-[#271310] font-semibold uppercase tracking-wider flex items-center gap-1.5 hover:text-[#765937] transition-colors"
                >
                  <span className="material-symbols-outlined text-base">map</span>
                  <span>Google Maps</span>
                </a>
                <a 
                  href="https://wa.me/628118899711?text=Halo%20Concierge%20DIVINE%20VIP%20Suite" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs md:text-[13px] text-[#765937] font-semibold uppercase tracking-wider flex items-center gap-1.5 hover:text-[#271310] transition-colors"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  <span>Concierge VIP</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
