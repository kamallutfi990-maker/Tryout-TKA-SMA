/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BookOpen, Video, Award, BarChart3, Users, Compass, ShieldCheck, ChevronDown, MessageSquare } from 'lucide-react';

interface LandingPageProps {
  onStartLearning: () => void;
  onCobaGratis: () => void;
}

export default function LandingPage({ onStartLearning, onCobaGratis }: LandingPageProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowFloatingBtn(true);
      } else {
        setShowFloatingBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const features = [
    {
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      title: 'Bank Soal Ribuan',
      desc: 'Latihan soal berstandar tinggi yang mencakup Matematika, Fisika, Kimia, Biologi, Ekonomi, Sosiologi, Geografi, dll.'
    },
    {
      icon: <Video className="w-6 h-6 text-blue-600" />,
      title: 'Modul Materi dan Video Pembelajaran',
      desc: 'Akses pembahasan materi per bab oleh guru-guru expert dengan cara penyampaian yang kreatif.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: 'Simulasi CBT',
      desc: 'Uji kesiapan dengan simulator ujian UTBK-SNBT yang mirip dengan sistem aslinya, lengkap dengan timer.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
      title: 'Analisis Nilai',
      desc: 'Pantau kelebihan dan kelemahan belajarmu per topik dengan grafik radar dan statistik mendalam.'
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: 'Ranking Nasional',
      desc: 'Bandingkan nilai simulasi kamu dengan ratusan ribu siswa se-Indonesia secara real-time.'
    },
    {
      icon: <Compass className="w-6 h-6 text-blue-600" />,
      title: 'Prediksi Peluang PTN',
      desc: 'Gunakan kecerdasan buatan dan skor rata-rata rapor & tryout untuk menghitung peluang lolos ke PTN impian.'
    },
    {
      icon: <Award className="w-6 h-6 text-blue-600" />,
      title: 'Dashboard Belajar',
      desc: 'Kelola semua progres pelajaran, input rapor semester, tonton materi favorit dalam satu dasbor rapi.'
    }
  ];

  const testimonials = [
    {
      name: 'Ahmad Fauzi',
      status: 'Lolos STEI - Institut Teknologi Bandung',
      img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=60',
      comment: 'CBT Simulator TKA SMA Indonesia benar-benar mirip dengan aslinya! Grafik analisisnya membantu saya mengetahui bab mana yang harus saya kejar.'
    },
    {
      name: 'Sarah Amelia',
      status: 'Lolos Pendidikan Dokter - Universitas Indonesia',
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=60',
      comment: 'Fitur AI Tutor di website ini sangat responsif. Setiap saya bingung dengan rumus Fisika dan Kimia, AI langsung membimbing step-by-step.'
    },
    {
      name: 'Dimas Wicaksono',
      status: 'Lolos Hubungan Internasional - Universitas Gadjah Mada',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=60',
      comment: 'Rekomendasi Prediksi PTN sangat membantu menentukan strategi pilihan SNBP dan SNBT. Akurasinya luar biasa mendekati kenyataan!'
    }
  ];

  const faqs = [
    {
      q: 'Apakah soal-soal di sini sesuai dengan materi TKA terbaru?',
      a: 'Ya, semua bank soal dikurasi secara berkala oleh guru ahli dan disesuaikan dengan pola soal UTBK-SNBT, TKA Saintek/Soshum, dan ujian mandiri PTN terfavorit.'
    },
    {
      q: 'Bagaimana cara kerja fitur Prediksi Peluang PTN?',
      a: 'Sistem menganalisis data rata-rata nilai rapor Anda (Semester 1 - 5) dan skor simulasi CBT Try Out, lalu mengalkulasikannya terhadap tingkat keketatan jurusan di database universitas PTN kami.'
    },
    {
      q: 'Apakah saya bisa menggunakan AI Tutor secara gratis?',
      a: 'Tentu saja! Fitur coba gratis mencakup sesi konsultasi AI Tutor untuk 3 kali sehari. Pengguna Premium mendapatkan akses konsultasi tanpa batas dan penjelasan lengkap semua soal.'
    },
    {
      q: 'Bagaimana cara konfirmasi pembayaran Premium?',
      a: 'Sistem kami telah terintegrasi dengan Payment Gateway instan (QRIS & Transfer Bank). Akun Premium Anda otomatis aktif setelah pembayaran terverifikasi dalam hitungan detik.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans" id="landing-page">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white border-b border-slate-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-semibold">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                Platform Latihan & CBT Terlengkap Kelas XII
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-slate-900 tracking-tight leading-tight">
                Persiapkan Tes Kompetensi Akademik SMA dengan <span className="text-[#2563EB]">Latihan Berkualitas</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-xl">
                TKA SMA Indonesia menyediakan ribuan bank soal, kelas video interaktif, simulasi CBT real-time, prediksi kelulusan PTN berbasis rapor, serta tutor bimbingan AI yang aktif 24 jam.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  id="btn-mulai-belajar"
                  onClick={onStartLearning}
                  className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  Mulai Belajar Sekarang
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-100">
                <div>
                  <div className="text-3xl font-bold text-slate-900">10,000+</div>
                  <div className="text-xs text-slate-500 mt-1">Bank Soal Terkurasi</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">45+</div>
                  <div className="text-xs text-slate-500 mt-1">Materi Video Bab</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">98%</div>
                  <div className="text-xs text-slate-500 mt-1">Siswa Puas & Lolos PTN</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-blue-200 rounded-3xl filter blur-3xl opacity-20 transform rotate-12 scale-90"></div>
              <div className="relative border border-slate-100 rounded-3xl p-4 bg-white shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80"
                  alt="Siswa Belajar Bersama TKA SMA Indonesia"
                  className="rounded-2xl w-full object-cover aspect-video sm:aspect-square"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-4 -left-4 bg-white border border-slate-100 rounded-2xl p-4 shadow-lg flex items-center gap-3">
                  <div className="bg-emerald-50 text-emerald-600 p-2.5 rounded-xl">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Passing Grade Terlampaui</div>
                    <div className="text-sm font-bold text-slate-800">UI Kedokteran (735)</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Fitur Section */}
      <section className="py-20 bg-slate-50" id="fitur-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-bold font-display text-[#2563EB] uppercase tracking-widest">Satu Platform, Banyak Fitur Unggulan</h2>
            <p className="text-3xl sm:text-4xl font-bold font-display text-slate-900">
              Solusi Pintar Raih Skor TKA & Kelulusan PTN Impian
            </p>
            <p className="text-slate-600">
              Kami menyusun modul bimbingan terlengkap dengan teknologi CBT persis ujian nasional demi mengoptimalkan peluang diterimanya Anda di universitas dambaan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 hover:border-blue-200 hover:shadow-xl p-8 rounded-2xl shadow-sm transition-all group"
                id={`feature-card-${idx}`}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center mb-6 transition-colors">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feat.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni Section */}
      <section className="py-20 bg-white" id="testimoni-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-bold font-display text-[#2563EB] uppercase tracking-widest">Kisah Sukses Alumni</h2>
            <p className="text-3xl sm:text-4xl font-bold font-display text-slate-900">
              Mereka yang Telah Membuktikan
            </p>
            <p className="text-slate-600">
              Simak penuturan jujur dari ribuan siswa kelas XII dan alumni yang berhasil menembus PTN top pilihan pertama mereka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testi, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-100 p-8 rounded-2xl flex flex-col justify-between"
                id={`testimoni-card-${idx}`}
              >
                <p className="text-slate-600 italic text-sm leading-relaxed mb-6">
                  "{testi.comment}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testi.img}
                    alt={testi.name}
                    className="w-12 h-12 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{testi.name}</h4>
                    <p className="text-xs text-blue-600 font-semibold">{testi.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50" id="faq-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm font-bold font-display text-[#2563EB] uppercase tracking-widest">Pertanyaan Umum (FAQ)</h2>
            <p className="text-3xl font-bold font-display text-slate-900">Masih Penasaran tentang TKA SMA Indonesia?</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-slate-50/50 transition-colors"
                >
                  <span className="font-semibold text-slate-800 text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${activeFaq === idx ? 'transform rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-5 text-sm text-slate-600 border-t border-slate-50 pt-3 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
            
            <div className="md:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-white font-bold text-xl">
                <span className="bg-blue-600 text-white w-9 h-9 rounded-lg flex items-center justify-center font-extrabold text-lg">T</span>
                <span>TKA SMA Indonesia</span>
              </div>
              <p className="text-sm max-w-sm">
                Solusi persiapan Tes Kompetensi Akademik (TKA) dan seleksi UTBK-SNBT paling mutakhir, interaktif, dan akurat di Indonesia.
              </p>
            </div>

            <div className="md:col-span-3 space-y-3 text-sm">
              <h4 className="text-white font-semibold">Tautan Penting</h4>
              <ul className="space-y-2">
                <li><a href="#fitur-section" className="hover:text-white transition-colors">Daftar Fitur</a></li>
                <li><a href="#testimoni-section" className="hover:text-white transition-colors">Testimoni Sukses</a></li>
                <li><a href="#faq-section" className="hover:text-white transition-colors">Bantuan FAQ</a></li>
              </ul>
            </div>

            <div className="md:col-span-3 space-y-3 text-sm">
              <h4 className="text-white font-semibold">Kontak & Support</h4>
              <p>Email: support@tkasmaindonesia.co.id</p>
              <p>WhatsApp: +62 812-3456-7890</p>
              <p>Alamat: Menara EduTech Lt. 5, Kuningan, Jakarta Selatan</p>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-xs text-slate-500">
            <p>&copy; 2026 TKA SMA Indonesia. Seluruh hak cipta dilindungi undang-undang.</p>
            <p className="mt-2 sm:mt-0 flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button (FAB) "Mulai Belajar Sekarang" */}
      <div
        className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 transition-all duration-500 transform ${
          showFloatingBtn ? 'opacity-100 translate-y-0 pointer-events-auto scale-100' : 'opacity-0 translate-y-10 pointer-events-none scale-75'
        }`}
      >
        <button
          onClick={onStartLearning}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-black px-6 py-3.5 sm:px-8 sm:py-4 rounded-full shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 flex items-center gap-2 border border-blue-400/20 hover:-translate-y-1 active:translate-y-0 active:scale-95 transition-all cursor-pointer group"
        >
          <BookOpen className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          <span>Mulai Belajar Sekarang</span>
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
        </button>
      </div>
    </div>
  );
}
