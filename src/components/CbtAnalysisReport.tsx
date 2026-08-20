/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Sparkles, Trophy, CheckCircle, XCircle, Target, ExternalLink, RefreshCw, BookOpen, Share2, Edit3, Save, Sliders, Check, FileCode2, Maximize2, Minimize2, X } from 'lucide-react';
import MathMarkdown from './MathMarkdown';
import HtmlPembahasanModal from './HtmlPembahasanModal';

export interface CbtReportData {
  title: string;
  subject?: string;
  timestamp?: string;
  score: number;
  correctCount: number;
  wrongCount: number;
  totalQuestions: number;
  targetPTN?: string;
  targetProdi?: string;
  keketatan?: string;
  xpEarned?: number;
  strongSubjects?: string[];
  weakSubjects?: string[];
  radarScores?: { [key: string]: number };
  sourceUrl?: string;
  htmlContent?: string;
}

interface CbtAnalysisReportProps {
  report: CbtReportData;
  userProfile?: any;
  onClose?: () => void;
  onOpenSolutionReview?: () => void;
}

const buildDefaultStepByStepRecommendation = (
  examTitle: string,
  targetProdi: string,
  targetPTN: string,
  weakTopicsStr: string,
  strongTopicsStr: string,
  correct: number,
  wrong: number,
  isAll100: boolean
) => {
  if (isAll100) {
    return `### 🎉 APRESIASI SPESIAL: PENCAPAIAN SEMPURNA ($100\\%$)!

Selamat! Kamu telah menjawab **seluruh ($100\\%$) butir soal dengan benar** tanpa ada kesalahan sedikit pun pada latihan **${examTitle}**! 🏆✨

* **Target Program Studi:** **${targetProdi || "Program Studi Impian"}**
* **Target Universitas:** **${targetPTN || "PTN Impian"}**

---

#### 🌟 Evaluasi Performa 100% Utuh:
1. **Penguasaan Materi Sempurna:** Seluruh konsep dan butir soal pada **${strongTopicsStr || "Ujian Ini"}** telah kamu kuasai secara mendalam. Tidak ada materi lemah yang memerlukan remedial konsep dasar!
2. **Akurasi & Penalaran Sangat Tinggi:** Hasil pengerjaan ini membuktikan kesiapan kompetitif yang sangat matang menuju seleksi PTN impian.

---

#### 🚀 Panduan Belajar Step-by-Step Mempertahankan Ketajaman:
* **Step 1 (Tantangan Soal HOTS Advance):** Lanjutkan latihan ke paket soal level High Order Thinking Skills yang memadukan penalaran multi-konsep.
* **Step 2 (Optimalisasi Efisiensi Waktu):** Asah kecepatan pengerjaan hingga rata-rata $t \\le 1{,}0$ menit per butir soal.
* **Step 3 (Simulasi Kondisi Ujian Asli):** Uji daya tahan konsentrasi dengan simulasi try out CBT berdurasi penuh.
* **Step 4 (Review Rangkuman Rumus Berkala):** Tinjau kembali formula inti sepekan sekali agar daya ingat jangka panjang tetap solid.

*Pertahankan prestasi luar biasa ini hingga resmi diterima di ${targetProdi || "Program Studi Impian"} ${targetPTN || "PTN Impian"}!* 🎓🔥`;
  }

  const weakSubjectsFormatted = weakTopicsStr || "Materi yang Terjawab Kurang Tepat";
  const strongSubjectsFormatted = strongTopicsStr || "Pemahaman Konsep Dasar";

  return `### 📊 AI Tutor Study Strategist: Rekomendasi Belajar Step-by-Step

* **Ujian:** **${examTitle}**
* **Target Impian:** **${targetProdi || "Program Studi Impian"}** — **${targetPTN || "PTN Impian"}**
* **Materi Kuat:** **${strongSubjectsFormatted}**
* **⚠️ MATERI LEMAH (PERLU REVIEW):** **${weakSubjectsFormatted}**

---

#### 🎯 Diagnostik Materi Lemah & Prioritas Evaluasi:
Berdasarkan hasil analisis pengerjaan, kamu berhasil menjawab **${correct} butir benar** dan **${wrong} butir perlu perbaikan**. Materi prioritas utama yang memerlukan pendalaman konsep dan review terarah adalah **${weakSubjectsFormatted}**.

---

#### 📌 Panduan Belajar Step-by-Step pada Materi Lemah (${weakSubjectsFormatted}):

1. **Step 1: Diagnostik & Analisis Letak Kesalahan**
   * Buka modul **Pembahasan Try Out** untuk mengidentifikasi detail nomor yang belum tepat pada materi **${weakSubjectsFormatted}**.
   * Identifikasi apakah kesalahan disebabkan oleh miskonsepsi rumus, ketidaktelitian hitungan, atau salah memahami kata kunci soal.

2. **Step 2: Pendalaman Teori & Pemahaman Formula / Kaidah Kunci**
   * Pelajari kembali rangkuman materi dan video pembahasan sub-bab **${weakSubjectsFormatted}**.
   * Tuliskan kembali rumus kunci, kaidah tata bahasa, atau alur logika pembuktian ke dalam buku catatan khusus ringkasan.

3. **Step 3: Latihan Terarah Level Mudah ke Menengah ($10-15$ Soal)**
   * Kerjakan bank soal khusus sub-materi **${weakSubjectsFormatted}** tanpa batasan timer sampai tingkat akurasi mencapai $\\ge 80\\%$.

4. **Step 4: Latihan Soal Variasi HOTS & Penalaran Konteks**
   * Latih variasi soal cerita, grafik, tabel, atau wacana analitis yang menuntut pemikiran kritis bertingkat pada materi **${weakSubjectsFormatted}**.

5. **Step 5: Simulasi CBT Terbatas & Manajemen Waktu**
   * Atur timer latihan ($t \\le 1{,}2$ menit/soal) untuk melatih kecepatan, ketenangan, dan ketepatan pengambilan keputusan.

6. **Step 6: Evaluasi Ulang & Post-Test Ujian**
   * Uji coba kembali $1$ paket try out CBT sejenis untuk memvalidasi kenaikan skor dan memastikan materi **${weakSubjectsFormatted}** telah kamu kuasai secara permanen.

---

#### 📅 Jadwal Aksi Belajar Terstruktur 7 Hari Ke Depan:
* **Hari 1–2:** Tinjau pembahasan soal salah dan pelajari teori dasar bab **${weakSubjectsFormatted}**.
* **Hari 3–4:** Latihan $15-20$ butir soal terfokus sub-bab **${weakSubjectsFormatted}**.
* **Hari 5:** Latihan soal variasi HOTS dan telaah trik cepat penyelesaian.
* **Hari 6–7:** Kerjakan simulasi CBT ulang dan ukur lonjakan skor menuju passing grade.

*(Rekomendasi belajar terstruktur disusun otomatis oleh AI Tutor Study Strategist).*`;
};

export default function CbtAnalysisReport({ report, userProfile, onClose, onOpenSolutionReview }: CbtAnalysisReportProps) {
  const [loadingAi, setLoadingAi] = useState(false);
  const [showHtmlModal, setShowHtmlModal] = useState(false);
  const [isAiFullscreen, setIsAiFullscreen] = useState(false);

  // Editable States for easy score modification
  const [isEditing, setIsEditing] = useState(false);
  const [score, setScore] = useState<number | string>(report.score);
  const [correctCount, setCorrectCount] = useState<number | string>(report.correctCount);
  const [wrongCount, setWrongCount] = useState<number | string>(report.wrongCount);
  const [totalQuestions, setTotalQuestions] = useState<number | string>(report.totalQuestions || 4);

  const displayCorrectCount = Number(correctCount) || 0;
  const displayWrongCount = Number(wrongCount) || 0;
  const isAllCorrect = displayWrongCount === 0 && displayCorrectCount > 0;

  const [strongText, setStrongText] = useState<string>(
    report.strongSubjects && report.strongSubjects.length > 0
      ? report.strongSubjects.join(', ')
      : (report.correctCount > 0 ? 'Pemahaman Konsep & Akurasi Jawaban' : '')
  );

  const [weakText, setWeakText] = useState<string>(
    report.weakSubjects && report.weakSubjects.length > 0
      ? report.weakSubjects.join(', ')
      : (report.wrongCount > 0 ? 'Listrik Dinamis, Eksponen' : '')
  );

  const targetPTN = (report.targetPTN && report.targetPTN.trim()) || (userProfile?.targetPTN && userProfile.targetPTN.trim()) || "";
  const targetProdi = (report.targetProdi && report.targetProdi.trim()) || (userProfile?.targetProdi && userProfile.targetProdi.trim()) || "";
  const keketatan = report.keketatan || "Keketatan Sangat Kompetitif";
  const xpValue = report.xpEarned ?? (displayCorrectCount * 15 + 50);

  const numericScore = Number(score) || 0;
  const isPassing = numericScore >= 550;

  const [aiRecommendation, setAiRecommendation] = useState<string>(() => {
    return buildDefaultStepByStepRecommendation(
      report.title,
      targetProdi,
      targetPTN,
      report.weakSubjects && report.weakSubjects.length > 0 ? report.weakSubjects.join(', ') : (report.wrongCount > 0 ? 'Listrik Dinamis, Eksponen' : ''),
      report.strongSubjects && report.strongSubjects.length > 0 ? report.strongSubjects.join(', ') : 'Pemahaman Konsep & Akurasi Jawaban',
      displayCorrectCount,
      displayWrongCount,
      isAllCorrect
    );
  });

  const [radarScores, setRadarScores] = useState<{ [key: string]: number | string }>({
    Matematika: report.radarScores?.Matematika ?? 75,
    Fisika: report.radarScores?.Fisika ?? 50,
    Kimia: report.radarScores?.Kimia ?? 40,
    Biologi: report.radarScores?.Biologi ?? 60,
    Soshum: report.radarScores?.Soshum ?? 80,
    Logika: report.radarScores?.Logika ?? 85,
  });

  const handleGetAiRecommendation = async (customWeak?: string, customStrong?: string) => {
    setLoadingAi(true);
    try {
      const response = await fetch('/api/ai/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scores: {
            title: report.title,
            [report.title]: numericScore,
            benar: displayCorrectCount,
            salah: displayWrongCount,
            materiSangatKuat: customStrong || strongText || (isAllCorrect ? 'Semua Materi Ujian' : 'Pemahaman Konsep'),
            materiLemah: isAllCorrect ? '' : (customWeak || weakText),
            isAllCorrect: isAllCorrect,
            skorTiapMapel: radarScores
          },
          targetPTN: targetPTN,
          targetProdi: targetProdi
        })
      });

      if (!response.ok) throw new Error('Gagal memuat rekomendasi');
      const data = await response.json();
      if (data.recommendation) {
        setAiRecommendation(data.recommendation);
      }
    } catch (e) {
      // Fallback is already initialized
      console.warn("AI recommendation fetch notice (offline/fallback preserved)");
    } finally {
      setLoadingAi(false);
    }
  };

  const handleSubjectScoreChange = (subject: string, rawVal: string) => {
    if (rawVal === '') {
      setRadarScores(prev => ({ ...prev, [subject]: '' }));
      return;
    }
    const parsed = parseInt(rawVal, 10);
    if (isNaN(parsed)) {
      setRadarScores(prev => ({ ...prev, [subject]: '' }));
    } else {
      const clamped = Math.min(100, Math.max(0, parsed));
      setRadarScores(prev => ({ ...prev, [subject]: clamped }));
    }
  };

  const handleClearAllScores = () => {
    setRadarScores({
      Matematika: '',
      Fisika: '',
      Kimia: '',
      Biologi: '',
      Soshum: '',
      Logika: ''
    });
    setScore('');
    setCorrectCount('');
    setWrongCount('');
  };

  const calculateAutoTkaScore = () => {
    const vals = Object.values(radarScores)
      .map(v => (v === '' ? 0 : Number(v)))
      .filter(v => !isNaN(v));
    if (vals.length === 0) return;
    const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
    // Map average 0-100 to TKA scale 200-1000
    const calculatedScore = Math.round(200 + (avg / 100) * 800);
    setScore(calculatedScore);
  };

  // Auto-fetch richer AI recommendations on initial load in the background
  useEffect(() => {
    handleGetAiRecommendation();
  }, [report.title]);

  const subjectList = [
    { key: 'Matematika', label: 'Matematika', color: 'text-blue-600', bg: 'bg-blue-500' },
    { key: 'Fisika', label: 'Fisika', color: 'text-indigo-600', bg: 'bg-indigo-500' },
    { key: 'Kimia', label: 'Kimia', color: 'text-purple-600', bg: 'bg-purple-500' },
    { key: 'Biologi', label: 'Biologi', color: 'text-emerald-600', bg: 'bg-emerald-500' },
    { key: 'Soshum', label: 'Soshum', color: 'text-amber-600', bg: 'bg-amber-500' },
    { key: 'Logika', label: 'Logika', color: 'text-cyan-600', bg: 'bg-cyan-500' },
  ];

  const scoreMat = Number(radarScores.Matematika) || 0;
  const scoreFis = Number(radarScores.Fisika) || 0;
  const scoreKim = Number(radarScores.Kimia) || 0;
  const scoreBio = Number(radarScores.Biologi) || 0;
  const scoreSos = Number(radarScores.Soshum) || 0;
  const scoreLog = Number(radarScores.Logika) || 0;

  const checkStr = `${report.subject || ''} ${report.title || ''}`.toLowerCase();
  const hasPembahasanDoc = (
    Boolean(report.htmlContent) ||
    checkStr.includes('biologi') ||
    checkStr.includes('kimia') ||
    checkStr.includes('inggris') ||
    checkStr.includes('indonesia') ||
    checkStr.includes('matematika')
  );

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 animate-in fade-in duration-300 text-slate-800 dark:text-slate-100">
      
      {/* Title & Header Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-black font-display text-slate-900 dark:text-slate-50 leading-tight">
              {report.title}
            </h2>
          </div>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            Ujian dikirimkan pada {report.timestamp || new Date().toLocaleString('id-ID')}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Prominent Pembahasan Soal Button */}
          <button
            onClick={onOpenSolutionReview || (() => setShowHtmlModal(true))}
            className="px-5 py-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-black text-xs sm:text-sm rounded-2xl shadow-lg shadow-indigo-200 dark:shadow-indigo-950/50 hover:shadow-indigo-300 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2 border border-white/30 ring-2 ring-indigo-500/20"
          >
            <BookOpen className="w-4 h-4 text-amber-300 shrink-0" />
            <span>Lihat Pembahasan Lengkap & Kunci Jawaban</span>
          </button>

          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`px-3.5 py-1.5 font-bold text-xs rounded-xl transition-all cursor-pointer flex items-center gap-1.5 border ${
              isEditing 
                ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-sm' 
                : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700'
            }`}
          >
            {isEditing ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Selesai Edit</span>
              </>
            ) : (
              <>
                <Edit3 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Edit Nilai Mapel</span>
              </>
            )}
          </button>

          {report.sourceUrl && (
            <a
              href={report.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
              <span>Sumber SlugPost</span>
            </a>
          )}
          {onClose && (
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-xs rounded-xl cursor-pointer"
            >
              Tutup
            </button>
          )}
        </div>
      </div>

      {/* Prominent Hero Banner: Direct to Halaman Pembahasan Soal */}
      <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-indigo-500/40 flex flex-col md:flex-row items-center justify-between gap-5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10 space-y-1.5 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/20 border border-amber-400/40 rounded-full text-amber-300 text-xs font-black tracking-wide uppercase mb-1">
            <Sparkles className="w-3.5 h-3.5" /> Evaluasi & Kunci Jawaban Siap Ditinjau
          </div>
          <h3 className="text-lg sm:text-2xl font-black font-display text-white">
            Pelajari Pembahasan Soal & Kunci Jawaban Lengkap
          </h3>
          <p className="text-xs sm:text-sm text-indigo-200/80 max-w-xl">
            Buka modul pembahasan terpisah untuk melihat langkah pengerjaan step-by-step, rumus kunci, dan penjelasan konsep tiap nomor soal.
          </p>
        </div>
        
        <div className="relative z-10 shrink-0 w-full md:w-auto">
          <button
            onClick={onOpenSolutionReview || (() => setShowHtmlModal(true))}
            className="w-full md:w-auto px-7 py-4 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-sm sm:text-base rounded-2xl shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2.5 border border-white/40"
          >
            <BookOpen className="w-5 h-5 text-slate-950 shrink-0" />
            <span>Buka Halaman Pembahasan Soal ➔</span>
          </button>
        </div>
      </div>

      {/* Mode Panel: Quick Subject Score Editor Box if Edit active or visible */}
      {isEditing && (
        <div className="bg-amber-50/80 border border-amber-200 rounded-3xl p-5 space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-200/60 pb-3">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-amber-700" />
              <h3 className="text-sm font-extrabold text-amber-950">Panel Editor Nilai & Akurasi Mapel</h3>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handleClearAllScores}
                className="text-xs font-bold text-red-700 bg-red-100 hover:bg-red-200 px-3 py-1 rounded-lg transition-colors cursor-pointer"
                title="Kosongkan semua bidang input nilai untuk mengetik dari awal"
              >
                🗑️ Kosongkan Semua Nilai
              </button>
              <button
                onClick={calculateAutoTkaScore}
                className="text-xs font-bold text-amber-900 bg-amber-200/80 hover:bg-amber-200 px-3 py-1 rounded-lg transition-colors cursor-pointer"
              >
                ⚡ Hitung Otomatis Total Skor TKA
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjectList.map(sub => (
              <div key={sub.key} className="bg-white border border-amber-200/80 rounded-2xl p-3.5 shadow-xs space-y-2">
                <div className="flex justify-between items-center">
                  <span className={`text-xs font-black ${sub.color}`}>{sub.label}</span>
                  <div className="flex items-center gap-1">
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="0"
                      value={radarScores[sub.key] ?? ''}
                      onFocus={(e) => e.target.select()}
                      onChange={(e) => handleSubjectScoreChange(sub.key, e.target.value)}
                      className="w-16 bg-slate-50 border border-slate-300 font-black text-slate-900 text-xs rounded-lg px-2 py-1 text-center focus:outline-none focus:border-blue-500 focus:bg-white"
                    />
                    <span className="text-[10px] text-slate-400 font-bold">/ 100</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={Number(radarScores[sub.key]) || 0}
                  onChange={(e) => handleSubjectScoreChange(sub.key, e.target.value)}
                  className="w-full accent-blue-600 h-1.5 bg-slate-100 rounded-lg cursor-pointer"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-amber-200/60 text-xs">
            <div>
              <label className="block text-[11px] font-bold text-amber-900 mb-1">Total Skor TKA Kamu (200 - 1000):</label>
              <input
                type="text"
                inputMode="numeric"
                placeholder="Misal: 650"
                value={score}
                onFocus={(e) => e.target.select()}
                onChange={(e) => setScore(e.target.value)}
                className="w-full bg-white border border-amber-300 font-extrabold text-slate-900 text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-amber-900 mb-1">Jumlah Soal Benar / Salah:</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Benar (0)"
                  value={correctCount}
                  onFocus={(e) => e.target.select()}
                  onChange={(e) => setCorrectCount(e.target.value)}
                  className="w-1/2 bg-white border border-amber-300 font-bold text-emerald-600 text-xs rounded-xl px-2.5 py-2 focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Salah (0)"
                  value={wrongCount}
                  onFocus={(e) => e.target.select()}
                  onChange={(e) => setWrongCount(e.target.value)}
                  className="w-1/2 bg-white border border-amber-300 font-bold text-red-500 text-xs rounded-xl px-2.5 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-bold text-amber-900 mb-1">Total Pertanyaan:</label>
              <input
                type="text"
                inputMode="numeric"
                placeholder="Misal: 4"
                value={totalQuestions}
                onFocus={(e) => e.target.select()}
                onChange={(e) => setTotalQuestions(e.target.value)}
                className="w-full bg-white border border-amber-300 font-extrabold text-slate-900 text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      )}

      {/* Top Metrics Row - 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: SKOR TKA KAMU */}
        <div className="bg-[#0b1329] text-white rounded-3xl p-6 flex flex-col justify-between space-y-3 shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>
          <div>
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest block">
                Skor TKA Kamu
              </span>
              <button 
                onClick={() => setIsEditing(true)} 
                className="text-[10px] text-amber-300 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Edit3 className="w-3 h-3" /> Edit
              </button>
            </div>
            <div className="py-2">
              <span className="text-4xl sm:text-5xl font-black tracking-tight text-white">{score}</span>
              <span className="text-xs text-slate-400 block mt-1 font-medium">Skor Kategori (200 - 1000)</span>
            </div>
          </div>
          <div>
            <span className={`inline-block px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider ${
              isPassing 
                ? 'bg-emerald-950/90 text-emerald-300 border border-emerald-500/30' 
                : 'bg-amber-950/90 text-amber-300 border border-amber-500/30'
            }`}>
              {isPassing ? 'MELAMPAUI PASSING GRADE' : 'PERLU PENINGKATAN'}
            </span>
          </div>
        </div>

        {/* Card 2: BENAR / SALAH */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 flex flex-col justify-between space-y-3 shadow-sm">
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest">
              Benar / Salah
            </span>
            <button 
              onClick={() => setIsEditing(true)} 
              className="text-[10px] text-blue-600 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Edit3 className="w-3 h-3" /> Edit
            </button>
          </div>
          <div className="py-1">
            <div className="text-2xl sm:text-3xl font-black text-slate-800 flex items-baseline gap-1.5">
              <span className="text-emerald-600 font-black">{correctCount}</span>
              <span className="text-xs font-bold text-slate-400">Benar</span>
              <span className="text-slate-300 mx-0.5">/</span>
              <span className="text-red-500 font-black">{wrongCount}</span>
              <span className="text-xs font-bold text-slate-400">Salah</span>
            </div>
            <span className="text-xs text-slate-400 block mt-2 font-medium">
              Dari total {totalQuestions} soal
            </span>
          </div>
        </div>

        {/* Card 3: TARGET PTN */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 flex flex-col justify-between space-y-2 shadow-sm">
          <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest">
            Target PTN
          </span>
          <div className="space-y-1">
            {targetPTN ? (
              <>
                <h4 className="font-extrabold text-sm sm:text-base text-slate-800 leading-snug truncate" title={targetPTN}>
                  {targetPTN}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed truncate" title={targetProdi || "Belum Memilih Jurusan"}>
                  {targetProdi || "Belum Memilih Jurusan"}
                </p>
              </>
            ) : (
              <>
                <h4 className="font-extrabold text-sm sm:text-base text-slate-400 italic leading-snug">
                  Belum Memilih Target PTN
                </h4>
                <p className="text-xs text-slate-400 italic">
                  Silakan pilih PTN di menu Prediksi PTN
                </p>
              </>
            )}
          </div>
          <div>
            <span className={`text-xs font-bold block ${targetPTN ? 'text-blue-600' : 'text-slate-400'}`}>
              {targetPTN ? keketatan : "-"}
            </span>
          </div>
        </div>

        {/* Card 4: GAMIFIKASI XP */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 flex flex-col justify-between space-y-2 shadow-sm">
          <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest">
            Gamifikasi XP
          </span>
          <div>
            <span className="text-3xl sm:text-4xl font-black text-blue-600">+{xpValue}</span>
            <span className="text-xs text-slate-500 block mt-1 font-medium">XP ditambahkan ke level Anda</span>
          </div>
          <div className="text-xs text-amber-600 font-extrabold flex items-center gap-1">
            🏆 Achievement Unlocked!
          </div>
        </div>

      </div>

      {/* Bottom Content Grid (2 Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Visualisasi Soal Terjawab dengan Benar */}
        <div className="lg:col-span-6 border border-slate-100 rounded-3xl p-6 space-y-5">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-800 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Visualisasi Soal Terjawab dengan Benar</span>
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Rasio persentase akurasi pengerjaan soal benar vs salah dari total pertanyaan.
              </p>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 bg-blue-50 px-2.5 py-1 rounded-lg cursor-pointer shrink-0"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit Jawaban</span>
            </button>
          </div>

          {/* Visual Donut Chart & Accuracy Metrics */}
          {(() => {
            const numTotal = Math.max(1, Number(totalQuestions) || 1);
            const numCorrect = Math.max(0, Number(correctCount) || 0);
            const numWrong = Math.max(0, Number(wrongCount) || 0);
            const accuracyPct = Math.min(100, Math.round((numCorrect / numTotal) * 100));
            const wrongPct = Math.min(100, 100 - accuracyPct);

            // SVG Donut Circle parameters
            const radius = 54;
            const circumference = 2 * Math.PI * radius;
            const strokeDashoffset = circumference - (accuracyPct / 100) * circumference;

            return (
              <div className="space-y-5">
                {/* Donut Chart & Key Badges */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 py-2 bg-slate-50/70 border border-slate-100 rounded-2xl p-4">
                  {/* Donut SVG */}
                  <div className="relative flex items-center justify-center shrink-0">
                    <svg className="w-36 h-36 -rotate-90 transform" viewBox="0 0 120 120">
                      {/* Background Circle (Wrong/Empty portion) */}
                      <circle
                        cx="60"
                        cy="60"
                        r={radius}
                        className="text-red-100"
                        strokeWidth="12"
                        stroke="currentColor"
                        fill="transparent"
                      />
                      {/* Foreground Circle (Correct portion) */}
                      <circle
                        cx="60"
                        cy="60"
                        r={radius}
                        className="text-emerald-500 transition-all duration-700 ease-out"
                        strokeWidth="12"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                      />
                    </svg>
                    {/* Inner Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                      <span className="text-2xl font-black text-slate-900 tracking-tight">{accuracyPct}%</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Akurasi</span>
                    </div>
                  </div>

                  {/* Summary Metric Chips */}
                  <div className="flex-1 space-y-3 w-full">
                    <div className="bg-emerald-50/80 border border-emerald-200/60 rounded-xl p-3 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                        <div>
                          <span className="text-xs font-bold text-emerald-950 block">Soal Benar</span>
                          <span className="text-[10px] text-emerald-700 font-medium">{numCorrect} dari {numTotal} soal</span>
                        </div>
                      </div>
                      <span className="text-base font-black text-emerald-700">{accuracyPct}%</span>
                    </div>

                    <div className="bg-red-50/80 border border-red-200/60 rounded-xl p-3 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                        <div>
                          <span className="text-xs font-bold text-red-950 block">Soal Salah / Kosong</span>
                          <span className="text-[10px] text-red-700 font-medium">{numWrong} dari {numTotal} soal</span>
                        </div>
                      </div>
                      <span className="text-base font-black text-red-600">{wrongPct}%</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bars for Detailed Breakdown */}
                <div className="space-y-3 bg-white border border-slate-100 rounded-2xl p-4 shadow-xs">
                  <div>
                    <div className="flex justify-between items-center text-xs mb-1.5">
                      <span className="font-bold text-slate-700 flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                        Tingkat Keterjawaban Benar
                      </span>
                      <span className="font-black text-emerald-600">{numCorrect} / {numTotal} Soal ({accuracyPct}%)</span>
                    </div>
                    <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                      <div
                        className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                        style={{ width: `${accuracyPct}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center text-xs mb-1.5">
                      <span className="font-bold text-slate-700 flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block"></span>
                        Tingkat Kesalahan / Belum Tepat
                      </span>
                      <span className="font-black text-red-500">{numWrong} / {numTotal} Soal ({wrongPct}%)</span>
                    </div>
                    <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                      <div
                        className="bg-red-400 h-full rounded-full transition-all duration-500"
                        style={{ width: `${wrongPct}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Appreciation Banner if 100% Correct */}
          {isAllCorrect && (
            <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border border-emerald-200/80 rounded-2xl p-4 flex items-start gap-3.5 text-emerald-950 animate-in fade-in duration-300">
              <div className="p-2 bg-emerald-600 text-white rounded-xl shrink-0 shadow-sm">
                <Trophy className="w-5 h-5 text-amber-300" />
              </div>
              <div className="space-y-1">
                <h5 className="font-extrabold text-sm text-emerald-950 flex items-center gap-1.5">
                  Apresiasi Performa Sempurna ($100\%$ Benar)! 🎉
                </h5>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Luar biasa! Seluruh <strong>{displayCorrectCount} dari {displayCorrectCount} soal</strong> berhasil kamu jawab dengan tepat tanpa ada kesalahan satu pun. Semua materi pada latihan ini telah kamu kuasai secara utuh!
                </p>
              </div>
            </div>
          )}

          {/* Breakdown Pills */}
          <div className="space-y-3 pt-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs border-b border-slate-100 pb-2.5 gap-2">
              <span className="font-semibold text-slate-700 shrink-0">Materi Sangat Kuat:</span>
              {isEditing ? (
                <input
                  type="text"
                  value={strongText}
                  onChange={(e) => setStrongText(e.target.value)}
                  className="w-full sm:w-auto flex-1 bg-white border border-slate-300 text-xs font-bold text-emerald-700 rounded px-2 py-1 focus:outline-none"
                />
              ) : (
                <span className="text-emerald-600 font-bold bg-emerald-50 px-2.5 py-0.5 rounded">
                  {isAllCorrect ? `🌟 ${strongText || 'Seluruh Materi Latihan Dikuasai Sempurna (100% Benar)'}` : (strongText || 'Pemahaman Konsep & Akurasi')}
                </span>
              )}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs border-b border-slate-100 pb-2.5 gap-2">
              <span className="font-semibold text-slate-700 shrink-0">Materi Lemah (Perlu Review):</span>
              {isEditing ? (
                <input
                  type="text"
                  value={weakText}
                  onChange={(e) => setWeakText(e.target.value)}
                  className="w-full sm:w-auto flex-1 bg-white border border-slate-300 text-xs font-bold text-red-700 rounded px-2 py-1 focus:outline-none"
                />
              ) : (
                <span className={`font-bold px-2.5 py-0.5 rounded ${
                  isAllCorrect 
                    ? 'text-emerald-800 bg-emerald-100 border border-emerald-200/80 font-extrabold' 
                    : 'text-red-600 bg-red-50'
                }`}>
                  {isAllCorrect ? '🎉 Luar Biasa! Sempurna 100% Benar. Tidak ada materi yang salah/perlu direview!' : (weakText || 'Sesuai Soal yang Terjawab Salah')}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: AI Tutor Study Strategist */}
        <div className="lg:col-span-6 border border-slate-100 rounded-3xl p-6 bg-slate-50/50 space-y-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <div className="bg-slate-900 text-white p-2 rounded-xl shrink-0">
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-slate-800">AI Tutor Study Strategist</h4>
                <p className="text-[10px] text-slate-400">Analis strategi berbasis Gemini AI</p>
              </div>
            </div>

            <button
              onClick={() => setIsAiFullscreen(true)}
              className="p-2 sm:px-3 sm:py-1.5 text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200/80 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 text-xs font-bold shadow-xs"
              title="Tampilkan Layar Penuh (Fullscreen)"
            >
              <Maximize2 className="w-3.5 h-3.5 text-blue-600" />
              <span className="hidden sm:inline">Layar Penuh</span>
            </button>
          </div>

          {aiRecommendation ? (
            <div className="space-y-3">
              <div className="bg-white border border-slate-200/60 rounded-2xl p-4 text-xs sm:text-sm text-slate-700 leading-relaxed max-h-[48vh] overflow-y-auto space-y-2 relative group shadow-inner">
                <button
                  onClick={() => setIsAiFullscreen(true)}
                  className="absolute top-2 right-2 p-1.5 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 rounded-lg text-slate-500 transition-all cursor-pointer shadow-xs flex items-center gap-1 text-[11px] font-bold z-10"
                  title="Layar Penuh (Fullscreen)"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Layar Penuh</span>
                </button>
                <MathMarkdown content={aiRecommendation} />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  {isAllCorrect ? 'Target Evaluasi: Pertahankan Performa Sempurna' : 'Panduan Step-by-Step Materi Lemah Aktif'}
                </span>
                <button
                  onClick={() => handleGetAiRecommendation()}
                  disabled={loadingAi}
                  className="px-3.5 py-1.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 text-xs font-bold rounded-xl transition-all cursor-pointer shadow-xs flex items-center gap-1.5 disabled:opacity-50"
                  title="Perbarui rekomendasi belajar"
                >
                  {loadingAi ? (
                    <>
                      <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping"></span>
                      <span>Menyusun AI...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>Regenerasi AI</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-10 space-y-4">
              <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                {isAllCorrect 
                  ? 'Dapatkan apresiasi dan strategi mempertahankan performa 100% benar menuju PTN impian dari Gemini AI.'
                  : `Dapatkan analisis strategi perbaikan khusus materi yang salah (${weakText || 'materi terindikasi lemah'}) dan jadwal belajar 7 hari ke depan dari Gemini AI.`}
              </p>
              <button
                onClick={() => handleGetAiRecommendation()}
                disabled={loadingAi}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-md shadow-blue-50 flex items-center justify-center gap-2 mx-auto"
              >
                {loadingAi ? (
                  <>
                    <span className="flex h-2 w-2 rounded-full bg-white animate-ping mr-1"></span>
                    Menyusun Strategi AI...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
                    {isAllCorrect ? 'Dapatkan Apresiasi & Strategi AI' : 'Buat Strategi Belajar AI'}
                  </>
                )}
              </button>
            </div>
          )}
        </div>

      </div>

      <HtmlPembahasanModal
        isOpen={showHtmlModal}
        onClose={() => setShowHtmlModal(false)}
        title={`Pembahasan Lengkap - ${report.title}`}
        subject={report.subject || report.title}
      />

      {/* Fullscreen AI Tutor Modal */}
      {isAiFullscreen && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md p-3 sm:p-6 flex items-center justify-center animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-5xl h-[92vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200/80">
            {/* Modal Header */}
            <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-slate-800 rounded-xl text-amber-400 border border-slate-700 shadow-xs">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base sm:text-lg flex items-center gap-2">
                    AI Tutor Study Strategist — Layar Penuh
                  </h3>
                  <p className="text-xs text-slate-400">
                    Rekomendasi & Analisis Strategi Belajar Terstruktur Gemini AI
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleGetAiRecommendation()}
                  disabled={loadingAi}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 text-white text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
                >
                  {loadingAi ? (
                    <>
                      <span className="flex h-2 w-2 rounded-full bg-white animate-ping"></span>
                      Menyusun AI...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      {aiRecommendation ? 'Regenerasi AI' : (isAllCorrect ? 'Dapatkan Apresiasi' : 'Buat Strategi AI')}
                    </>
                  )}
                </button>
                <button
                  onClick={() => setIsAiFullscreen(false)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all cursor-pointer"
                  title="Keluar Layar Penuh"
                >
                  <Minimize2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setIsAiFullscreen(false)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all cursor-pointer"
                  title="Tutup"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 p-6 sm:p-8 overflow-y-auto bg-slate-50/50 leading-relaxed text-slate-800">
              {aiRecommendation ? (
                <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4 text-sm sm:text-base">
                  <MathMarkdown content={aiRecommendation} />
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-5">
                  <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl shadow-inner">
                    <Sparkles className="w-10 h-10 animate-bounce text-blue-600" />
                  </div>
                  <div className="max-w-md space-y-2">
                    <h4 className="font-bold text-lg text-slate-800">Belum Ada Rekomendasi AI</h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {isAllCorrect 
                        ? 'Klik tombol di bawah untuk mendapatkan apresiasi dan panduan taktis mempertahankan nilai 100% dari AI Tutor.'
                        : `Klik tombol di bawah untuk meminta AI Tutor menganalisis materi salah (${weakText || 'materi terindikasi lemah'}) secara mendalam.`}
                    </p>
                  </div>
                  <button
                    onClick={() => handleGetAiRecommendation()}
                    disabled={loadingAi}
                    className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-bold text-sm rounded-2xl shadow-lg shadow-blue-500/20 transition-all cursor-pointer flex items-center gap-2"
                  >
                    {loadingAi ? (
                      <>
                        <span className="flex h-2.5 w-2.5 rounded-full bg-white animate-ping"></span>
                        Sedang Menganalisis & Menyusun Strategi AI...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-amber-300" />
                        {isAllCorrect ? 'Dapatkan Apresiasi & Strategi AI' : 'Buat Analisis Strategi Belajar AI'}
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 bg-white border-t border-slate-200 flex items-center justify-between shrink-0 text-xs text-slate-500">
              <span className="flex items-center gap-1.5 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Gemini 3.6 Flash AI Tutor Study Strategist
              </span>
              <button
                onClick={() => setIsAiFullscreen(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-all cursor-pointer"
              >
                Tutup Layar Penuh
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

