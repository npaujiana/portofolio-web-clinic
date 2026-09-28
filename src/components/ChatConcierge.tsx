import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, X, Bot, User, RefreshCw, ChevronDown, CheckCircle2, Calendar } from 'lucide-react';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

interface ChatConciergeProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTreatmentForBooking?: (treatmentName: string) => void;
}

const STARTER_PROMPTS = [
  "Apakah 3D Micro-Contouring HIFU Ultra ada downtime?",
  "Apa keunggulan Cellular Skin Booster Salmon PDRN?",
  "Berapa sesi Picosecond Laser untuk memudarkan melasma?",
  "Bagaimana alur konsultasi diagnostik 3D pertama kali?"
];

export default function ChatConcierge({ isOpen, onClose, onSelectTreatmentForBooking }: ChatConciergeProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: 'Selamat datang di DIVINE Aesthetic Lounge. Saya adalah **DIVINE Medical Concierge & Aesthetic Advisor** virtual Anda. Bagaimana saya dapat membantu Anda memahami protokol klinis, estimasi pemulihan, atau pemilihan perawatan hari ini?',
      timestamp: 'Baru saja'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState<'gemini-3.5-flash' | 'gemini-3.1-flash-lite' | 'gemini-3.1-pro-preview'>('gemini-3.5-flash');
  const [showModelPicker, setShowModelPicker] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, loading]);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || loading) return;

    setErrorMsg(null);
    const newTimestamp = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    const userMessage: ChatMessage = {
      role: 'user',
      content: text,
      timestamp: newTimestamp
    };

    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: nextMessages.map(m => ({
            role: m.role,
            content: m.content
          })),
          model: selectedModel,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Gagal memproses permohonan chat.');
      }

      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: data.reply || 'Terima kasih atas pertanyaan Anda. Dokter kami siap mendiskusikan kebutuhan Anda lebih lanjut.',
          timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } catch (err: any) {
      console.error('Chat error:', err);
      setErrorMsg(err.message || 'Koneksi ke AI Concierge terganggu. Silakan coba kembali.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        role: 'assistant',
        content: 'Percakapan telah diperbarui. Silakan ajukan pertanyaan atau keluhan kulit Anda untuk asesmen awal.',
        timestamp: 'Baru saja'
      }
    ]);
    setErrorMsg(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-primary/60 backdrop-blur-sm transition-opacity">
      <div className="bg-[#fff8f5] w-full max-w-[480px] h-[90vh] max-h-[720px] rounded-xl shadow-2xl flex flex-col overflow-hidden border border-[#d3c3c0]/50 text-[#1f1b19]">
        
        {/* Header */}
        <div className="bg-[#271310] text-[#fff8f5] px-4 py-3.5 flex items-center justify-between border-b border-[#3e2723]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#765937]/30 border border-[#765937] flex items-center justify-center text-[#fed6ab]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-base tracking-wide font-medium">DIVINE Medical Concierge</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <p className="text-[11px] text-[#fed6ab]/80 tracking-wide uppercase">Klinik Pratama Estetika Medis</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleResetChat}
              title="Reset Chat"
              className="p-1.5 text-[#fff8f5]/70 hover:text-[#fff8f5] hover:bg-[#3e2723] rounded transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#fff8f5]/70 hover:text-[#fff8f5] hover:bg-[#3e2723] rounded transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Model Bar / Persona Pill */}
        <div className="bg-[#f6ece8] px-4 py-2 border-b border-[#d3c3c0]/40 flex items-center justify-between text-xs">
          <div className="relative">
            <button
              onClick={() => setShowModelPicker(!showModelPicker)}
              className="inline-flex items-center gap-1.5 bg-[#ffffff] border border-[#d3c3c0] px-2.5 py-1 rounded text-[#271310] font-medium hover:border-[#765937] transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-[#765937]"></span>
              <span className="text-[11px]">
                {selectedModel === 'gemini-3.5-flash' && 'Gemini 3.5 Flash (Standar)'}
                {selectedModel === 'gemini-3.1-flash-lite' && 'Gemini 3.1 Flash-Lite (Cepat)'}
                {selectedModel === 'gemini-3.1-pro-preview' && 'Gemini 3.1 Pro (Analisis Kompleks)'}
              </span>
              <ChevronDown className="w-3 h-3 text-[#504442]" />
            </button>

            {showModelPicker && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-[#d3c3c0] rounded-lg shadow-lg py-1 z-30 text-xs">
                <button
                  onClick={() => { setSelectedModel('gemini-3.5-flash'); setShowModelPicker(false); }}
                  className={`w-full text-left px-3 py-2 hover:bg-[#f6ece8] flex flex-col ${selectedModel === 'gemini-3.5-flash' ? 'bg-[#fbf2ee] font-semibold text-[#765937]' : ''}`}
                >
                  <span>Gemini 3.5 Flash</span>
                  <span className="text-[10px] text-[#504442] font-normal">Rekomendasi umum konsultasi & protokol</span>
                </button>
                <button
                  onClick={() => { setSelectedModel('gemini-3.1-flash-lite'); setShowModelPicker(false); }}
                  className={`w-full text-left px-3 py-2 hover:bg-[#f6ece8] flex flex-col ${selectedModel === 'gemini-3.1-flash-lite' ? 'bg-[#fbf2ee] font-semibold text-[#765937]' : ''}`}
                >
                  <span>Gemini 3.1 Flash-Lite</span>
                  <span className="text-[10px] text-[#504442] font-normal">Respon instan untuk tanya jawab singkat</span>
                </button>
                <button
                  onClick={() => { setSelectedModel('gemini-3.1-pro-preview'); setShowModelPicker(false); }}
                  className={`w-full text-left px-3 py-2 hover:bg-[#f6ece8] flex flex-col ${selectedModel === 'gemini-3.1-pro-preview' ? 'bg-[#fbf2ee] font-semibold text-[#765937]' : ''}`}
                >
                  <span>Gemini 3.1 Pro Preview</span>
                  <span className="text-[10px] text-[#504442] font-normal">Penalaran dermatologi mendalam & studi kasus</span>
                </button>
              </div>
            )}
          </div>

          <span className="text-[11px] text-[#504442]">Privasi Medis Terjaga</span>
        </div>

        {/* Scrollable Chat Area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#fff8f5]">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex gap-2.5 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.role === 'assistant' && (
                <div className="w-7 h-7 rounded-full bg-[#f6ece8] border border-[#d3c3c0] flex items-center justify-center shrink-0 mt-0.5 text-[#765937]">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[82%] rounded-xl px-3.5 py-2.5 text-xs leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-[#271310] text-[#fff8f5] rounded-tr-none'
                    : 'bg-[#ffffff] text-[#1f1b19] border border-[#d3c3c0]/60 rounded-tl-none shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
                }`}
              >
                <div className="whitespace-pre-wrap space-y-1">
                  {m.content.split('\n').map((line, lIdx) => {
                    // Simple formatting for bold and lists
                    if (line.startsWith('- ') || line.startsWith('* ')) {
                      return (
                        <div key={lIdx} className="flex items-start gap-1.5 ml-1 my-0.5">
                          <span className="text-[#765937] font-bold">•</span>
                          <span>{line.substring(2)}</span>
                        </div>
                      );
                    }
                    return <p key={lIdx}>{line}</p>;
                  })}
                </div>
                <div
                  className={`text-[9px] mt-1.5 text-right ${
                    m.role === 'user' ? 'text-[#fed6ab]/70' : 'text-[#827472]'
                  }`}
                >
                  {m.timestamp}
                </div>
              </div>

              {m.role === 'user' && (
                <div className="w-7 h-7 rounded-full bg-[#fed6ab] border border-[#765937] flex items-center justify-center shrink-0 mt-0.5 text-[#271310]">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex gap-2.5 justify-start">
              <div className="w-7 h-7 rounded-full bg-[#f6ece8] border border-[#d3c3c0] flex items-center justify-center shrink-0 mt-0.5 text-[#765937]">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-[#ffffff] border border-[#d3c3c0]/60 rounded-xl rounded-tl-none px-3.5 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#765937] animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#765937] animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#765937] animate-bounce"></span>
                  <span className="text-[11px] text-[#504442] ml-2 font-medium">Dokter & Concierge sedang menganalisis...</span>
                </div>
              </div>
            </div>
          )}

          {errorMsg && (
            <div className="bg-[#ffdad6]/60 border border-[#ba1a1a]/40 text-[#93000a] text-xs p-3 rounded-lg flex items-center justify-between">
              <span>{errorMsg}</span>
              <button
                onClick={() => handleSend(messages[messages.length - 1]?.content)}
                className="text-[11px] underline font-semibold ml-2"
              >
                Coba Lagi
              </button>
            </div>
          )}
        </div>

        {/* Quick Suggestions */}
        <div className="bg-[#fbf2ee] px-3 py-2 border-t border-[#d3c3c0]/30 overflow-x-auto">
          <p className="text-[10px] text-[#765937] font-semibold uppercase tracking-wider mb-1.5">Saran Pertanyaan:</p>
          <div className="flex gap-1.5 no-scrollbar">
            {STARTER_PROMPTS.map((prompt, pIdx) => (
              <button
                key={pIdx}
                onClick={() => handleSend(prompt)}
                disabled={loading}
                className="shrink-0 bg-white hover:bg-[#f6ece8] text-[#1f1b19] border border-[#d3c3c0]/60 text-[11px] px-2.5 py-1 rounded transition-colors text-left disabled:opacity-50"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-white border-t border-[#d3c3c0]/40">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tanyakan perawatan, indikasi, atau downtime..."
              disabled={loading}
              className="flex-1 bg-[#fff8f5] border border-[#d3c3c0] rounded-lg px-3 py-2.5 text-xs text-[#1f1b19] placeholder:text-[#827472] focus:outline-none focus:border-[#765937] transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="bg-[#271310] text-[#fff8f5] hover:bg-[#3e2723] p-2.5 rounded-lg disabled:opacity-40 transition-colors shrink-0"
              title="Kirim pesan"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Quick CTA to book */}
          <div className="mt-2 pt-2 border-t border-[#d3c3c0]/20 flex items-center justify-between text-[11px] text-[#504442]">
            <span>Siap memulai konsultasi medis tatap muka?</span>
            <button
              onClick={() => {
                onClose();
                const el = document.getElementById('booking');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-[#765937] hover:text-[#271310] font-semibold flex items-center gap-1 uppercase tracking-wider text-[10px]"
            >
              <Calendar className="w-3 h-3" />
              <span>Isi Form Reservasi</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
