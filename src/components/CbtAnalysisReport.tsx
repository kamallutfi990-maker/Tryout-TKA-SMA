/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, Trophy, CheckCircle, XCircle, Target, ExternalLink, RefreshCw, BookOpen, Share2, Edit3, Save, Sliders, Check, FileCode2, Maximize2, Minimize2, X } from 'lucide-react';
import MathMarkdown from './MathMarkdown';
import HtmlPembahasanModal from './HtmlPembahasanModal';

export interface CbtReportData {
  title: string;
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
}

interface CbtAnalysisReportProps {
  report: CbtReportData;
  userProfile?: any;
  onClose?: () => void;
}

export default function CbtAnalysisReport({ report, userProfile, onClose }: CbtAnalysisReportProps) {
  const [loadingAi, setLoadingAi] = useState(false);
  const [aiRecommendation, setAiRecommendation] = useState('');
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

  const [radarScores, setRadarScores] = useState<{ [key: string]: number | string }>({
    Matematika: report.radarScores?.Matematika ?? 75,
    Fisika: report.radarScores?.Fisika ?? 50,
    Kimia: report.radarScores?.Kimia ?? 40,
    Biologi: report.radarScores?.Biologi ?? 60,
    Soshum: report.radarScores?.Soshum ?? 80,
    Logika: report.radarScores?.Logika ?? 85,
  });

  const targetPTN = (report.targetPTN && report.targetPTN.trim()) || (userProfile?.targetPTN && userProfile.targetPTN.trim()) || "";
  const targetProdi = (report.targetProdi && report.targetProdi.trim()) || (userProfile?.targetProdi && userProfile.targetProdi.trim()) || "";
  const keketatan = report.keketatan || "Keketatan Sangat Kompetitif";
  const xpValue = report.xpEarned ?? (displayCorrectCount * 15 + 50);

  const numericScore = Number(score) || 0;
  const isPassing = numericScore >= 550;

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

  const handleGetAiRecommendation = async () => {
    setLoadingAi(true);
    try {
      const response = await fetch('/api/ai/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scores: {
            [report.title]: numericScore,
            benar: displayCorrectCount,
            salah: displayWrongCount,
            materiSangatKuat: strongText || (isAllCorrect ? 'Semua Materi Ujian' : 'Pemahaman Konsep'),
            materiLemah: isAllCorrect ? '' : weakText,
            isAllCorrect: isAllCorrect,
            skorTiapMapel: radarScores
          },
          targetPTN: targetPTN,
          targetProdi: targetProdi
        })
      });

      if (!response.ok) throw new Error('Gagal memuat rekomendasi');
      const data = await response.json();
      setAiRecommendation(data.recommendation);
    } catch (e) {
      setAiRecommendation('Gagal menghasilkan rekomendasi otomatis dari AI Tutor. Pastikan koneksi server aman.');
    } finally {
      setLoadingAi(false);
    }
  };

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

  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 animate-in fade-in duration-300">
      
      {/* Title & Header Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-black font-display text-slate-900 leading-tight">
              {report.title}
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Ujian dikirimkan pada {report.timestamp || new Date().toLocaleString('id-ID')}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setShowHtmlModal(true)}
            className="px-5 py-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-extrabold text-sm rounded-2xl shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2 border border-blue-400/30"
          >
            <BookOpen className="w-4 h-4 text-amber-300 shrink-0" />
            <span>Pembahasan Try Out</span>
          </button>

          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`px-3.5 py-1.5 font-bold text-xs rounded-xl transition-all cursor-pointer flex items-center gap-1.5 border ${
              isEditing 
                ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-sm' 
                : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200'
            }`}
          >
            {isEditing ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Selesai Edit</span>
              </>
            ) : (
              <>
                <Edit3 className="w-3.5 h-3.5 text-blue-600" />
                <span>Edit Nilai Mapel</span>
              </>
            )}
          </button>

          {report.sourceUrl && (
            <a
              href={report.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              <span>Sumber SlugPost</span>
            </a>
          )}
          {onClose && (
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl cursor-pointer"
            >
              Tutup
            </button>
          )}
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
            <div className="bg-white border border-slate-200/60 rounded-2xl p-4 text-xs sm:text-sm text-slate-700 leading-relaxed max-h-[45vh] overflow-y-auto space-y-2 relative group">
              <button
                onClick={() => setIsAiFullscreen(true)}
                className="absolute top-2 right-2 p-1.5 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 rounded-lg text-slate-500 transition-all cursor-pointer shadow-xs flex items-center gap-1 text-[11px] font-bold"
                title="Layar Penuh (Fullscreen)"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Layar Penuh</span>
              </button>
              <MathMarkdown content={aiRecommendation} />
            </div>
          ) : (
            <div className="text-center py-10 space-y-4">
              <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                {isAllCorrect 
                  ? 'Dapatkan apresiasi dan strategi mempertahankan performa 100% benar menuju PTN impian dari Gemini AI.'
                  : `Dapatkan analisis strategi perbaikan khusus materi yang salah (${weakText || 'materi terindikasi lemah'}) dan jadwal belajar 7 hari ke depan dari Gemini AI.`}
              </p>
              <button
                onClick={handleGetAiRecommendation}
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
        title={`Pembahasan Lengkap HTML - ${report.title}`}
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
                  onClick={handleGetAiRecommendation}
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
                    onClick={handleGetAiRecommendation}
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

