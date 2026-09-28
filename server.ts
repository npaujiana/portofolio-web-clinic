import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || '',
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

const DEFAULT_SYSTEM_INSTRUCTION = `Anda adalah "DIVINE Medical Concierge & Aesthetic Advisor", asisten klinis virtual resmi dari DIVINE Aesthetic Lounge di Gading Serpong, Tangerang.

Karakter & Nilai DIVINE:
- Konsep: Mindful Aesthetics, Ethical, Sustainable, Personal.
- Prinsip utama: Transparansi medis murni, Zero Overtreatment, Diagnostik 3D Obyektif sebelum tindakan, dan menghormati keselamatan jaringan biologis di atas tren sesaat.
- Gaya komunikasi: Elegan, hangat, sangat santun, menenangkan, berwibawa, dan berbasis sains dermatologi/estetika medis.

Perawatan Unggulan di DIVINE:
1. 3D Micro-Contouring HIFU Ultra (45 menit): Pengencangan lapisan SMAS terfokus tanpa downtime, menstimulasi neokolagenesis alami.
2. Cellular Skin Booster & Salmon PDRN (60 menit): Biorevitalisasi mendalam untuk hidrasi intraseluler dan perbaikan tekstur parut / bopeng.
3. Dual-Wavelength Picosecond Laser (30 menit): Pemecah hiperpigmentasi dan melasma dengan denyut fotoakustik ultra-singkat berstandar FDA.
4. Medical Scalp & Hair Regrowth (50 menit): Injeksi faktor pertumbuhan murni dan peptide untuk memperkuat akar serta folikel rambut.
5. Konsultasi Diagnostik 3D Komprehensif: Pemetaan lapisan dermis & vaskularisasi wajah sebelum tindakan apa pun.

Tim Dokter & Fasilitas:
- Dipimpin oleh dr. Aurelia Paramitha, Sp.D.V.E (Medical Director & Aesthetic Dermatologist) bersama dokter bersertifikat internasional dan SIP resmi dari Dinkes Banten.
- No. Izin Operasional Klinik Pratama: 445/092-Dinkes/KP-EST/2023.
- Lokasi Flagship: Ruko South Goldfinch Blok SGD No. 18-19, Jl. Springs Boulevard, Gading Serpong.
- VIP Suite: The Opus Residence Wing, Private Elevator 3rd Floor, Boulevard Gading Serpong.
- Jam Operasional: Selasa – Minggu: 10:00 – 19:00 WIB (Senin Tutup).

Instruksi Menjawab:
- Berikan penjelasan yang jelas, ringkas, dan menenangkan (hindari klaim berlebihan / overpromising).
- Selalu sarankan untuk melakukan konsultasi diagnostik 3D langsung dengan dokter spesialis di klinik untuk asesmen akurat.
- Gunakan bahasa Indonesia yang baik, halus, dan anggun (panggil calon pasien dengan "Bapak/Ibu" atau sebutan santun).`;

app.post('/api/chat', async (req, res) => {
  try {
    const { messages, model = 'gemini-3.5-flash', systemInstruction } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        error: 'GEMINI_API_KEY is not configured on the server. Please check your environment variables.'
      });
    }

    // Map conversation history
    const contents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === 'assistant' || m.role === 'model' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    // Selected valid model from user instructions
    const targetModel = ['gemini-3.1-pro-preview', 'gemini-3.5-flash', 'gemini-3.1-flash-lite'].includes(model)
      ? model
      : 'gemini-3.5-flash';

    const response = await ai.models.generateContent({
      model: targetModel,
      contents,
      config: {
        systemInstruction: systemInstruction || DEFAULT_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const reply = response.text || 'Mohon maaf, terjadi kendala saat memproses permohonan Anda.';
    return res.json({ reply, model: targetModel });
  } catch (error: any) {
    console.error('Error generating response from Gemini:', error);
    return res.status(500).json({
      error: error?.message || 'Gagal berkomunikasi dengan layanan AI Concierge.'
    });
  }
});

async function startServer() {
  const PORT = Number(process.env.PORT) || 3000;
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`DIVINE Aesthetic Lounge server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
