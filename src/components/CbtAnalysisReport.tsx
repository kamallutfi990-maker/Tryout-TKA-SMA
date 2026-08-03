/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, Trophy, CheckCircle, XCircle, Target, ExternalLink, RefreshCw, BookOpen, Share2, Edit3, Save, Sliders, Check, FileCode2 } from 'lucide-react';
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

  // Editable States for easy score modification
  const [isEditing, setIsEditing] = useState(false);
  const [score, setScore] = useState<number | string>(report.score);
  const [correctCount, setCorrectCount] = useState<number | string>(report.correctCount);
  const [wrongCount, setWrongCount] = useState<number | string>(report.wrongCount);
  const [totalQuestions, setTotalQuestions] = useState<number | string>(report.totalQuestions || 4);

  const [strongText, setStrongText] = useState<string>(
    report.strongSubjects && report.strongSubjects.length > 0
      ? report.strongSubjects.join(', ')
      : 'Turunan, Atmosfer'
  );

  const [weakText, setWeakText] = useState<string>(
    report.weakSubjects && report.weakSubjects.length > 0
      ? report.weakSubjects.join(', ')
      : 'Listrik Dinamis, Eksponen'
  );

  const [radarScores, setRadarScores] = useState<{ [key: string]: number | string }>({
    Matematika: report.radarScores?.Matematika ?? 75,
    Fisika: report.radarScores?.Fisika ?? 50,
    Kimia: report.radarScores?.Kimia ?? 40,
    Biologi: report.radarScores?.Biologi ?? 60,
    Soshum: report.radarScores?.Soshum ?? 80,
    Logika: report.radarScores?.Logika ?? 85,
  });

  const targetPTN = report.targetPTN || userProfile?.targetPTN || "Institut Teknologi Bandung";
  const targetProdi = report.targetProdi || userProfile?.targetProdi || "Sekolah Teknik Elektro & Informatika (STEI)";
  const keketatan = report.keketatan || "Keketatan Sangat Kompetitif";
  const displayCorrectCount = Number(correctCount) || 0;
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
            benar: Number(correctCount) || 0,
            salah: Number(wrongCount) || 0,
            materiSangatKuat: strongText,
            materiLemah: weakText,
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
            <h4 className="font-extrabold text-sm sm:text-base text-slate-800 leading-snug truncate" title={targetPTN}>
              {targetPTN}
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed truncate" title={targetProdi}>
              {targetProdi}
            </p>
          </div>
          <div>
            <span className="text-xs font-bold text-blue-600 block">
              {keketatan}
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
        
        {/* Left Column: Visualisasi Analisis Tiap Bab */}
        <div className="lg:col-span-6 border border-slate-100 rounded-3xl p-6 space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-800">Visualisasi Analisis Tiap Bab</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Diagram penguasaan materi di bawah dihitung secara objektif berdasarkan akurasi tiap mapel.
              </p>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 bg-blue-50 px-2.5 py-1 rounded-lg cursor-pointer shrink-0"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit Nilai Mapel</span>
            </button>
          </div>

          {/* Custom SVG Hexagonal Radar Chart */}
          <div className="relative flex justify-center py-6">
            <svg className="w-64 h-64 overflow-visible" viewBox="0 0 200 200">
              {/* Outer hexagonal grids */}
              <polygon points="100,10 178,55 178,145 100,190 22,145 22,55" fill="none" stroke="#E2E8F0" strokeWidth="1" />
              <polygon points="100,32.5 158.5,66.25 158.5,133.75 100,167.5 41.5,133.75 41.5,66.25" fill="none" stroke="#E2E8F0" strokeWidth="1" />
              <polygon points="100,55 139,77.5 139,122.5 100,145 61,122.5 61,77.5" fill="none" stroke="#F1F5F9" strokeWidth="1" />
              
              {/* Grid lines */}
              <line x1="100" y1="10" x2="100" y2="190" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3,3" />
              <line x1="22" y1="55" x2="178" y2="145" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3,3" />
              <line x1="22" y1="145" x2="178" y2="55" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3,3" />

              {/* Student actual performance polygon */}
              <polygon 
                points={`100,${100 - scoreMat*0.8} ${100 + scoreFis*0.78},${100 - scoreFis*0.45} ${100 + scoreKim*0.78},${100 + scoreKim*0.45} 100,${100 + scoreBio*0.8} ${100 - scoreSos*0.78},${100 + scoreSos*0.45} ${100 - scoreLog*0.78},${100 - scoreLog*0.45}`} 
                fill="rgba(37, 99, 235, 0.15)" 
                stroke="#2563EB" 
                strokeWidth="2.5" 
              />

              {/* Subject Labels with values */}
              <text x="100" y="2" textAnchor="middle" className="text-[10px] font-extrabold fill-slate-700">Matematika ({radarScores.Matematika === '' ? '-' : scoreMat})</text>
              <text x="185" y="55" textAnchor="start" className="text-[10px] font-extrabold fill-slate-700">Fisika ({radarScores.Fisika === '' ? '-' : scoreFis})</text>
              <text x="185" y="150" textAnchor="start" className="text-[10px] font-extrabold fill-slate-700">Kimia ({radarScores.Kimia === '' ? '-' : scoreKim})</text>
              <text x="100" y="202" textAnchor="middle" className="text-[10px] font-extrabold fill-slate-700">Biologi ({radarScores.Biologi === '' ? '-' : scoreBio})</text>
              <text x="15" y="150" textAnchor="end" className="text-[10px] font-extrabold fill-slate-700">Soshum ({radarScores.Soshum === '' ? '-' : scoreSos})</text>
              <text x="15" y="55" textAnchor="end" className="text-[10px] font-extrabold fill-slate-700">Logika ({radarScores.Logika === '' ? '-' : scoreLog})</text>
            </svg>
          </div>

          {/* Interactive Subject List Cards for easy editing directly under the chart */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 py-2 border-t border-b border-slate-100">
            {subjectList.map(sub => (
              <div key={sub.key} className="bg-slate-50 border border-slate-100 rounded-xl p-2 flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-700">{sub.label}:</span>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="0"
                  value={radarScores[sub.key] ?? ''}
                  onFocus={(e) => e.target.select()}
                  onChange={(e) => handleSubjectScoreChange(sub.key, e.target.value)}
                  className="w-12 bg-white border border-slate-200 text-xs font-black text-slate-800 text-center rounded focus:outline-none focus:border-blue-500 py-0.5"
                />
              </div>
            ))}
          </div>

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
                <span className="text-emerald-600 font-bold bg-emerald-50 px-2.5 py-0.5 rounded">{strongText}</span>
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
                <span className="text-red-600 font-bold bg-red-50 px-2.5 py-0.5 rounded">{weakText}</span>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: AI Tutor Study Strategist */}
        <div className="lg:col-span-6 border border-slate-100 rounded-3xl p-6 bg-slate-50/50 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="bg-slate-900 text-white p-2 rounded-xl shrink-0">
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-800">AI Tutor Study Strategist</h4>
              <p className="text-[10px] text-slate-400">Analis strategi berbasis Gemini AI</p>
            </div>
          </div>

          {aiRecommendation ? (
            <div className="bg-white border border-slate-200/60 rounded-2xl p-4 text-xs sm:text-sm text-slate-700 leading-relaxed max-h-[45vh] overflow-y-auto space-y-2">
              <MathMarkdown content={aiRecommendation} />
            </div>
          ) : (
            <div className="text-center py-10 space-y-4">
              <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                Dapatkan analisis materi prioritas belajar dan jadwal belajar taktis 7 hari ke depan dari Gemini AI khusus berdasarkan skor tryout kamu ini.
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
                    Buat Strategi Belajar AI
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

    </div>
  );
}

