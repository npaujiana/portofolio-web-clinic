/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, Calendar } from 'lucide-react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ValuesSection from './components/ValuesSection';
import TreatmentsSection from './components/TreatmentsSection';
import DoctorsSection from './components/DoctorsSection';
import LocationsSection from './components/LocationsSection';
import BookingSection from './components/BookingSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

import ChatConcierge from './components/ChatConcierge';
import DossierModal from './components/DossierModal';
import TreatmentFolioModal from './components/TreatmentFolioModal';
import BookingConfirmationModal from './components/BookingConfirmationModal';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [dossierOpen, setDossierOpen] = useState(false);
  const [folioOpen, setFolioOpen] = useState(false);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Booking Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: 'Konsultasi Diagnostik 3D Komprehensif',
    date: '',
    session: 'Pagi (10:00 - 13:00)',
    notes: ''
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmationOpen(true);
  };

  const handleSelectTreatment = (treatmentName: string) => {
    setFormData(prev => ({ ...prev, treatment: treatmentName }));
    const bookingSection = document.getElementById('booking');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setNewsletterSubscribed(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#fff8f5] text-[#1f1b19] font-sans antialiased selection:bg-[#fed6ab] selection:text-[#271310] flex flex-col">
      
      {/* 1. Header (Responsive: Desktop Nav & Mobile Drawer) */}
      <Header 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onOpenChat={() => setChatOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection 
          onOpenChat={() => setChatOpen(true)}
          onOpenFolio={() => setFolioOpen(true)}
        />

        {/* 3. About Section (Who We Are) */}
        <AboutSection 
          onOpenDossier={() => setDossierOpen(true)}
        />

        {/* 4. Values & Philosophy */}
        <ValuesSection />

        {/* 5. Treatments (Perawatan Unggulan Terukur) */}
        <TreatmentsSection 
          onSelectTreatment={handleSelectTreatment}
          onOpenFolio={() => setFolioOpen(true)}
        />

        {/* 6. Doctors & Legal Certification */}
        <DoctorsSection />

        {/* 7. Locations (Flagship & Sanctuary VIP Suite) */}
        <LocationsSection />

        {/* 8. Reservation Form */}
        <BookingSection 
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleBookingSubmit}
        />

        {/* 9. FAQ Accordion */}
        <FaqSection 
          openFaqIndex={openFaqIndex}
          toggleFaq={toggleFaq}
        />
      </main>

      {/* 10. Footer */}
      <Footer 
        newsletterEmail={newsletterEmail}
        setNewsletterEmail={setNewsletterEmail}
        newsletterSubscribed={newsletterSubscribed}
        onNewsletterSubmit={handleNewsletterSubmit}
        onOpenFolio={() => setFolioOpen(true)}
        onOpenDossier={() => setDossierOpen(true)}
      />

      {/* Mobile Floating Action Bar */}
      <div className="lg:hidden sticky bottom-0 inset-x-0 bg-[#fff8f5]/95 backdrop-blur-md p-3 px-5 border-t border-[#d3c3c0]/40 flex items-center justify-between z-30 shadow-lg">
        <div>
          <p className="text-[10px] font-semibold text-[#765937] uppercase tracking-wider">Konsultasi Privat</p>
          <p className="text-[15px] font-semibold text-[#271310]">Tersedia Hari Ini</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setChatOpen(true)}
            title="Konsultasi Virtual AI"
            className="bg-[#f6ece8] border border-[#765937]/50 text-[#765937] hover:bg-[#fed6ab]/50 p-2.5 rounded transition-colors flex items-center justify-center cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#765937]" />
          </button>

          <a 
            href="#booking"
            className="bg-[#271310] text-[#fff8f5] hover:bg-[#3e2723] px-4 py-2.5 rounded text-[12px] font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow"
          >
            <span className="material-symbols-outlined text-sm">calendar_month</span>
            <span>Reservasi</span>
          </a>
        </div>
      </div>

      {/* Desktop Floating Concierge Bubble */}
      <div className="hidden lg:flex fixed bottom-6 right-6 z-40 items-center gap-3">
        <button
          onClick={() => setChatOpen(true)}
          className="bg-[#271310] hover:bg-[#3e2723] text-white px-5 py-3 rounded-full shadow-xl flex items-center gap-2.5 border border-[#765937]/50 group transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          <div className="w-7 h-7 rounded-full bg-[#765937]/40 flex items-center justify-center text-[#fed6ab]">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="text-left">
            <span className="block text-[10px] text-[#fed6ab] uppercase font-semibold tracking-wider">Virtual Advisor</span>
            <span className="font-serif text-[14px] tracking-wide">Tanya AI Concierge</span>
          </div>
        </button>
      </div>

      {/* Interactive Modals */}
      <ChatConcierge 
        isOpen={chatOpen} 
        onClose={() => setChatOpen(false)}
        onSelectTreatmentForBooking={handleSelectTreatment}
      />

      <DossierModal 
        isOpen={dossierOpen} 
        onClose={() => setDossierOpen(false)} 
        onBookNow={() => {
          const el = document.getElementById('booking');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <TreatmentFolioModal 
        isOpen={folioOpen} 
        onClose={() => setFolioOpen(false)} 
        onSelectTreatment={handleSelectTreatment}
      />

      <BookingConfirmationModal 
        isOpen={confirmationOpen} 
        onClose={() => setConfirmationOpen(false)} 
        bookingData={formData}
      />

    </div>
  );
}
