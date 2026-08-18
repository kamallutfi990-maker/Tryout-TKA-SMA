/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Clock, HelpCircle, AlertCircle, CheckCircle, ChevronLeft, ChevronRight, HelpCircle as QueryIcon, Sparkles, Maximize2, Minimize2, ChevronDown, Check } from 'lucide-react';
import { TryOut, Question, ExamScore } from '../types';
import { FirestoreSimulator, getQuestions } from '../lib/firestoreSimulator';
import MathMarkdown from './MathMarkdown';
import CbtAnalysisReport, { CbtReportData } from './CbtAnalysisReport';
import CbtSolutionReview from './CbtSolutionReview';

interface CbtSimulatorProps {
  tryout: TryOut;
  userProfile: any;
  onBack: () => void;
  onFinish: (score: ExamScore) => void;
}

export default function CbtSimulator({ tryout, userProfile, onBack, onFinish }: CbtSimulatorProps) {
  // CBT States
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [qId: string]: number | number[] }>({});
  const [flagged, setFlagged] = useState<string[]>([]); // Ragu-ragu questions
  const [timeLeft, setTimeLeft] = useState(tryout.duration * 60); // in seconds
  const [isExamActive, setIsExamActive] = useState(true);
  const [activeStage, setActiveStage] = useState<'exam' | 'result' | 'pembahasan'>('exam');
  
  // Results view
  const [scoreResult, setScoreResult] = useState<ExamScore | null>(null);
  const [loadingAiRecommendation, setLoadingAiRecommendation] = useState(false);
  const [aiRecommendation, setAiRecommendation] = useState('');

  // Full Screen State (Pure App Fullscreen to avoid browser native security notification popups)
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    setOpenDropdown(false);
  }, [currentIndex]);

  const toggleFullscreen = () => {
    // If native browser fullscreen is active, exit it cleanly
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
    
    setIsFullscreen((prev) => {
      const nextState = !prev;
      if (nextState) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      return nextState;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
        document.body.style.overflow = '';
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isFullscreen]);

  useEffect(() => {
    // Compile exam questions
    const allQ = getQuestions();
    const filtered = allQ.filter(q => {
      if (tryout.id === 'to-anbk-mtk-wajib-2026' || tryout.name.includes('Matematika Wajib')) {
        return q.id.startsWith('q_anbk_mtkw_') || q.subject === 'Matematika Wajib';
      }
      if (tryout.id === 'to-tka-mtk-lanjut-2026' || tryout.name.includes('Matematika Tingkat Lanjut')) {
        return q.id.startsWith('q_mtk_lanjut_') || q.subject === 'Matematika Tingkat Lanjut';
      }
      if (tryout.id.includes('indo-lanjut') || tryout.name.includes('Bahasa Indonesia Tingkat Lanjut') || tryout.subject === 'Bahasa Indonesia Tingkat Lanjut') {
        return q.id.startsWith('q_tka_indo_lanjut_') || q.id.startsWith('q_tka_bindo_lanjut_') || q.subject === 'Bahasa Indonesia Tingkat Lanjut';
      }
      if (tryout.id.includes('inggris-lanjut') || tryout.name.includes('Bahasa Inggris Tingkat Lanjut') || tryout.subject === 'Bahasa Inggris Tingkat Lanjut') {
        return q.id.startsWith('q_tka_inggris_lanjut_') || q.subject === 'Bahasa Inggris Tingkat Lanjut';
      }
      if (tryout.id === 'to-tka-bindo-2026' || tryout.name.includes('Bahasa Indonesia') || tryout.subject === 'Bahasa Indonesia') {
        return (q.id.startsWith('q_tka_bindo_') || q.subject === 'Bahasa Indonesia') && !q.subject.includes('Lanjut') && !q.id.includes('lanjut');
      }
      if (tryout.id === 'to-tka-bing-2026' || tryout.name.includes('Bahasa Inggris') || tryout.subject === 'Bahasa Inggris') {
        return (q.id.startsWith('q_tka_bing_') || q.subject === 'Bahasa Inggris') && !q.subject.includes('Lanjut');
      }
      if (tryout.id.includes('kimia') || tryout.name.includes('Kimia') || tryout.subject === 'Kimia') {
        return q.id.startsWith('q_tka_kimia_') || q.subject === 'Kimia';
      }
      if (tryout.id.includes('fisika') || tryout.name.includes('Fisika') || tryout.subject === 'Fisika') {
        return q.id.startsWith('q_tka_fisika_') || q.id.startsWith('q_fisika_') || q.subject === 'Fisika';
      }
      if (tryout.id.includes('biologi') || tryout.name.includes('Biologi') || tryout.subject === 'Biologi') {
        return q.id.startsWith('q_tka_bio_') || q.id.startsWith('q_bio_') || q.subject === 'Biologi';
      }
      if (tryout.id.includes('sosiologi') || tryout.name.includes('Sosiologi') || tryout.subject === 'Sosiologi') {
        return q.id.startsWith('q_tka_sos_') || q.id.startsWith('q_sos_') || q.subject === 'Sosiologi';
      }
      if (tryout.id.includes('ekonomi') || tryout.name.includes('Ekonomi') || tryout.subject === 'Ekonomi') {
        return q.id.startsWith('q_tka_eko_') || q.id.startsWith('q_eko_') || q.subject === 'Ekonomi';
      }
      if (tryout.id.includes('ppkn') || tryout.name.includes('PPKn') || tryout.subject.includes('PPKn') || tryout.subject.includes('PKn')) {
        return q.id.startsWith('q_tka_ppkn_') || q.id.startsWith('q_ppkn_') || q.subject.includes('PPKn') || q.subject.includes('PKn');
      }
      if (tryout.id.includes('geografi') || tryout.name.includes('Geografi') || tryout.subject === 'Geografi') {
        return q.id.startsWith('q_tka_geo_') || q.id.startsWith('q_geo_') || q.subject === 'Geografi';
      }
      if (tryout.id.includes('sejarah') || tryout.name.includes('Sejarah') || tryout.subject === 'Sejarah') {
        return q.id.startsWith('q_tka_sej_') || q.id.startsWith('q_sej_') || q.subject === 'Sejarah';
      }
      if (tryout.id === 'to-tka-turunan' || tryout.name.includes('Turunan')) {
        return q.id.startsWith('q_turunan_') || q.bab === 'Turunan Fungsi';
      }
      if (tryout.id === 'to-tka-integral' || tryout.name.includes('Integral')) {
        return q.id.startsWith('q_integral_') || q.bab === 'Integral';
      }
      // 9 UTBK Subtests
      if (tryout.id === 'to-utbk-penalaran-induktif-2026' || tryout.subject === 'Penalaran Induktif' || tryout.name.includes('Penalaran Induktif')) {
        return q.subject === 'Penalaran Induktif' || q.id.startsWith('q_utbk_induktif_');
      }
      if (tryout.id === 'to-utbk-penalaran-deduktif-2026' || tryout.subject === 'Penalaran Deduktif' || tryout.name.includes('Penalaran Deduktif')) {
        return q.subject === 'Penalaran Deduktif' || q.id.startsWith('q_utbk_deduktif_');
      }
      if (tryout.id === 'to-utbk-penalaran-kuantitatif-2026' || tryout.subject === 'Penalaran Kuantitatif' || tryout.name.includes('Penalaran Kuantitatif')) {
        return q.subject === 'Penalaran Kuantitatif' || q.id.startsWith('q_utbk_pkuant_');
      }
      if (tryout.id === 'to-utbk-ppu-2026' || tryout.subject.includes('PPU') || tryout.subject.includes('Pemahaman Umum') || tryout.name.includes('PPU')) {
        return q.subject.includes('PPU') || q.subject.includes('Pemahaman Umum') || q.id.startsWith('q_utbk_ppu_') || q.subject.includes('TPS');
      }
      if (tryout.id === 'to-utbk-pbm-2026' || tryout.subject.includes('PBM') || tryout.subject.includes('Bacaan dan Menulis') || tryout.name.includes('PBM')) {
        return q.subject.includes('PBM') || q.subject.includes('Bacaan dan Menulis') || q.id.startsWith('q_utbk_pbm_') || q.subject === 'Bahasa Indonesia';
      }
      if (tryout.id === 'to-utbk-pk-2026' || tryout.subject.includes('Pengetahuan Kuantitatif') || tryout.name.includes('Pengetahuan Kuantitatif')) {
        return (q.subject.includes('Pengetahuan Kuantitatif') || q.id.startsWith('q_utbk_pk_') || q.subject === 'Matematika Umum') && !q.subject.includes('Penalaran Kuantitatif');
      }
      if (tryout.id === 'to-utbk-literasi-indonesia-2026' || (tryout.subject.includes('Literasi') && tryout.subject.includes('Indonesia'))) {
        return (q.subject.includes('Literasi') && (q.subject.includes('Indonesia') || q.subject.includes('Bahasa'))) || q.id.startsWith('q_utbk_lit_indo_') || q.subject === 'Literasi Bahasa' || q.subject === 'Bahasa Indonesia';
      }
      if (tryout.id === 'to-utbk-literasi-inggris-2026' || (tryout.subject.includes('Literasi') && (tryout.subject.includes('Inggris') || tryout.subject.includes('English')))) {
        return (q.subject.includes('Literasi') && (q.subject.includes('Inggris') || q.subject.includes('English'))) || q.id.startsWith('q_utbk_lit_ing_') || q.subject === 'Bahasa Inggris';
      }
      if (tryout.id === 'to-utbk-penalaran-matematika-2026' || (tryout.subject.includes('Penalaran') && tryout.subject.includes('Matematika'))) {
        return (q.subject.includes('Penalaran') && q.subject.includes('Matematika')) || q.subject === 'TPS & Penalaran Matematika' || q.id.startsWith('q_utbk_penalaran_mtk_') || q.subject === 'Matematika Umum';
      }

      if (tryout.id === 'to1') return ['Fisika', 'Kimia', 'Biologi', 'Matematika Lanjut', 'Matematika Umum'].includes(q.subject);
      if (tryout.id === 'to2') return ['Ekonomi', 'Geografi', 'Sosiologi', 'Sejarah', 'Literasi Bahasa'].includes(q.subject);
      if (tryout.id === 'to3') return q.subject === 'Matematika Umum' || q.subject === 'Matematika Lanjut' || q.subject.includes('Kuantitatif') || q.subject.includes('TPS');
      if (tryout.id === 'to4') return q.subject.includes('Penalaran') || q.subject.includes('TPS') || q.subject.includes('Literasi');
      if (tryout.id === 'to5') return ['Fisika', 'Kimia'].includes(q.subject);
      if (tryout.id === 'to6') return q.subject.includes('Literasi') || q.subject.includes('Bahasa');
      if (tryout.id === 'to7') return q.subject.includes('Kuantitatif') || ['Ekonomi', 'Geografi', 'Sosiologi', 'Sejarah'].includes(q.subject);
      if (tryout.id === 'to8') return q.subject.includes('TPS') || q.subject.includes('Matematika');

      // For custom TryOuts created by Guru / Admin:
      if (!tryout.subject || tryout.subject.toLowerCase().includes('semua') || tryout.subject.toLowerCase().includes('campuran') || tryout.subject.toLowerCase().includes('umum') || tryout.subject.toLowerCase().includes('utbk') || tryout.subject.toLowerCase().includes('tka')) {
        return true; // Include all questions in question bank
      }

      // Match by exact or partial subject
      return q.subject === tryout.subject || tryout.subject.includes(q.subject) || q.subject.includes(tryout.subject);
    });

    let pool = [...filtered];
    if (tryout.id === 'to-anbk-mtk-wajib-2026' || tryout.name.includes('Matematika Wajib')) {
      pool.sort((a, b) => {
        const numA = parseInt(a.id.replace('q_anbk_mtkw_', '')) || 0;
        const numB = parseInt(b.id.replace('q_anbk_mtkw_', '')) || 0;
        return numA - numB;
      });
    } else if (tryout.id === 'to-tka-mtk-lanjut-2026' || tryout.name.includes('Matematika Tingkat Lanjut')) {
      // Sort in order q_mtk_lanjut_1 .. 20
      pool.sort((a, b) => {
        const numA = parseInt(a.id.replace('q_mtk_lanjut_', '')) || 0;
        const numB = parseInt(b.id.replace('q_mtk_lanjut_', '')) || 0;
        return numA - numB;
      });
    } else if (tryout.id.includes('indo-lanjut') || tryout.name.includes('Bahasa Indonesia Tingkat Lanjut') || tryout.subject === 'Bahasa Indonesia Tingkat Lanjut') {
      // Sort in order q_tka_bindo_lanjut_1 .. 10
      pool.sort((a, b) => {
        const numA = parseInt(a.id.replace('q_tka_bindo_lanjut_', '').replace('q_tka_indo_lanjut_', '')) || 0;
        const numB = parseInt(b.id.replace('q_tka_bindo_lanjut_', '').replace('q_tka_indo_lanjut_', '')) || 0;
        return numA - numB;
      });
    } else if (tryout.id.includes('inggris-lanjut') || tryout.name.includes('Bahasa Inggris Tingkat Lanjut') || tryout.subject === 'Bahasa Inggris Tingkat Lanjut') {
      // Sort in order q_tka_inggris_lanjut_1 .. 20
      pool.sort((a, b) => {
        const numA = parseInt(a.id.replace('q_tka_inggris_lanjut_', '').replace('q_tka_bing_lanjut_', '')) || 0;
        const numB = parseInt(b.id.replace('q_tka_inggris_lanjut_', '').replace('q_tka_bing_lanjut_', '')) || 0;
        return numA - numB;
      });
    } else if (tryout.id === 'to-tka-bindo-2026' || tryout.name.includes('Bahasa Indonesia') || tryout.subject === 'Bahasa Indonesia') {
      // Sort in order q_tka_bindo_1 .. 20
      pool.sort((a, b) => {
        const numA = parseInt(a.id.replace('q_tka_bindo_', '')) || 0;
        const numB = parseInt(b.id.replace('q_tka_bindo_', '')) || 0;
        return numA - numB;
      });
    } else if (tryout.id === 'to-tka-bing-2026' || tryout.name.includes('Bahasa Inggris') || tryout.subject === 'Bahasa Inggris') {
      // Sort in order q_tka_bing_1 .. 20
      pool.sort((a, b) => {
        const numA = parseInt(a.id.replace('q_tka_bing_', '')) || 0;
        const numB = parseInt(b.id.replace('q_tka_bing_', '')) || 0;
        return numA - numB;
      });
    } else if (tryout.id.includes('kimia') || tryout.name.includes('Kimia') || tryout.subject === 'Kimia') {
      // Sort in order q_tka_kimia_1 .. 20
      pool.sort((a, b) => {
        const numA = parseInt(a.id.replace('q_tka_kimia_', '')) || 0;
        const numB = parseInt(b.id.replace('q_tka_kimia_', '')) || 0;
        return numA - numB;
      });
    } else if (tryout.id.includes('fisika') || tryout.name.includes('Fisika') || tryout.subject === 'Fisika') {
      pool.sort((a, b) => {
        const numA = parseInt(a.id.replace('q_tka_fisika_', '').replace('q_fisika_', '')) || 0;
        const numB = parseInt(b.id.replace('q_tka_fisika_', '').replace('q_fisika_', '')) || 0;
        return numA - numB;
      });
    } else if (tryout.id.includes('biologi') || tryout.name.includes('Biologi') || tryout.subject === 'Biologi') {
      pool.sort((a, b) => {
        const numA = parseInt(a.id.replace('q_tka_bio_', '').replace('q_bio_', '')) || 0;
        const numB = parseInt(b.id.replace('q_tka_bio_', '').replace('q_bio_', '')) || 0;
        return numA - numB;
      });
    } else if (tryout.id.includes('sosiologi') || tryout.name.includes('Sosiologi') || tryout.subject === 'Sosiologi') {
      pool.sort((a, b) => {
        const numA = parseInt(a.id.replace('q_tka_sos_', '').replace('q_sos_', '')) || 0;
        const numB = parseInt(b.id.replace('q_tka_sos_', '').replace('q_sos_', '')) || 0;
        return numA - numB;
      });
    } else if (tryout.id.includes('ekonomi') || tryout.name.includes('Ekonomi') || tryout.subject === 'Ekonomi') {
      pool.sort((a, b) => {
        const numA = parseInt(a.id.replace('q_tka_eko_', '').replace('q_eko_', '')) || 0;
        const numB = parseInt(b.id.replace('q_tka_eko_', '').replace('q_eko_', '')) || 0;
        return numA - numB;
      });
    } else if (tryout.id.includes('ppkn') || tryout.name.includes('PPKn') || tryout.subject?.includes('PPKn') || tryout.subject?.includes('PKn')) {
      pool.sort((a, b) => {
        const numA = parseInt(a.id.replace('q_tka_ppkn_', '').replace('q_ppkn_', '')) || 0;
        const numB = parseInt(b.id.replace('q_tka_ppkn_', '').replace('q_ppkn_', '')) || 0;
        return numA - numB;
      });
    } else if (tryout.id.includes('geografi') || tryout.name.includes('Geografi') || tryout.subject === 'Geografi') {
      pool.sort((a, b) => {
        const numA = parseInt(a.id.replace('q_tka_geo_', '').replace('q_geo_', '')) || 0;
        const numB = parseInt(b.id.replace('q_tka_geo_', '').replace('q_geo_', '')) || 0;
        return numA - numB;
      });
    } else if (tryout.id.includes('sejarah') || tryout.name.includes('Sejarah') || tryout.subject === 'Sejarah') {
      pool.sort((a, b) => {
        const numA = parseInt(a.id.replace('q_tka_sej_', '').replace('q_sej_', '')) || 0;
        const numB = parseInt(b.id.replace('q_tka_sej_', '').replace('q_sej_', '')) || 0;
        return numA - numB;
      });
    } else if (pool.length < (tryout.questionCount || 20) && !tryout.id.includes('integral') && !tryout.id.includes('turunan')) {
      const isSpecificSubject = tryout.subject && !['semua', 'campuran', 'umum', 'utbk', 'tka'].some(k => tryout.subject.toLowerCase().includes(k));
      const remaining = allQ.filter(q => {
        if (pool.some(pq => pq.id === q.id)) return false;
        if (isSpecificSubject) {
          return q.subject === tryout.subject || (tryout.subject && (q.subject.includes(tryout.subject) || tryout.subject.includes(q.subject)));
        }
        return true;
      });
      pool = [...pool, ...remaining];
    }

    if (tryout.randomizeQuestions) {
      pool.sort(() => Math.random() - 0.5);
    }
    
    // Respect target question count
    const targetCount = tryout.questionCount || 20;
    setQuestions(pool.slice(0, targetCount));
  }, [tryout]);

  useEffect(() => {
    if (!isExamActive) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isExamActive]);

  const handleSelectAnswer = (qId: string, optionIdx: number, type?: 'multiple_choice' | 'checkboxes' | 'dropdown') => {
    setAnswers((prev) => {
      const currentVal = prev[qId];
      if (type === 'checkboxes') {
        const currentArr = Array.isArray(currentVal) ? currentVal : (currentVal !== undefined ? [currentVal] : []);
        if (currentArr.includes(optionIdx)) {
          return { ...prev, [qId]: currentArr.filter(idx => idx !== optionIdx) };
        } else {
          return { ...prev, [qId]: [...currentArr, optionIdx].sort() };
        }
      } else {
        return { ...prev, [qId]: optionIdx };
      }
    });
  };

  const toggleFlag = (qId: string) => {
    setFlagged((prev) =>
      prev.includes(qId) ? prev.filter((id) => id !== qId) : [...prev, qId]
    );
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleSubmitExam = () => {
    setIsExamActive(false);
    try {
      const score = FirestoreSimulator.submitExam(tryout.id, answers, tryout.duration * 60 - timeLeft);
      setScoreResult(score);
      setActiveStage('result');
      if (onFinish) {
        onFinish(score);
      }
    } catch (e) {
      alert('Gagal mengirimkan ujian.');
    }
  };

  const handleGetAiRecommendation = async () => {
    if (!scoreResult) return;
    setLoadingAiRecommendation(true);

    try {
      const response = await fetch('/api/ai/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scores: {
            [tryout.name]: scoreResult.score,
            benar: scoreResult.correctCount,
            salah: scoreResult.wrongCount
          },
          targetPTN: userProfile.targetPTN,
          targetProdi: userProfile.targetProdi
        })
      });

      if (!response.ok) throw new Error('Gagal memuat rekomendasi');
      const data = await response.json();
      setAiRecommendation(data.recommendation);
    } catch (e) {
      setAiRecommendation('Gagal menghasilkan rekomendasi otomatis dari AI Tutor. Pastikan koneksi server aman.');
    } finally {
      setLoadingAiRecommendation(false);
    }
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (questions.length === 0) {
    return (
      <div className="p-8 text-center bg-white rounded-2xl border border-slate-100 shadow-sm">
        <span className="text-slate-400 block mb-2 animate-pulse">Menyiapkan butir soal simulasi...</span>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  return (
    <div
      id="cbt-simulator-root"
      className={
        isFullscreen
          ? "fixed inset-0 z-50 bg-slate-950 p-3 sm:p-6 overflow-y-auto flex flex-col space-y-4 text-slate-100 font-sans"
          : "space-y-6"
      }
    >
      
      {/* CBT Active Testing Screen */}
      {isExamActive && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main Question view (Left Side - 8 Cols) */}
          <div className={`lg:col-span-8 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col ${isFullscreen ? 'h-[85vh]' : 'h-[75vh]'}`}>
            
            {/* Upper bar */}
            <div className="bg-slate-900 text-white p-4 flex justify-between items-center border-b border-slate-800 shrink-0">
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <span className="bg-blue-600 text-white font-extrabold px-2 py-0.5 rounded">TKA CBT</span>
                <span className="text-slate-300 font-semibold truncate max-w-[180px] sm:max-w-xs">{tryout.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggleFullscreen}
                  className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-slate-200 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                  title={isFullscreen ? "Keluar Layar Penuh (Esc)" : "Mode Layar Penuh (Full Screen)"}
                >
                  {isFullscreen ? (
                    <>
                      <Minimize2 className="w-3.5 h-3.5 text-amber-400" />
                      <span className="hidden sm:inline">Keluar Fullscreen</span>
                    </>
                  ) : (
                    <>
                      <Maximize2 className="w-3.5 h-3.5 text-blue-400" />
                      <span className="hidden sm:inline">Full Screen</span>
                    </>
                  )}
                </button>
                <div className="flex items-center gap-2 bg-slate-800 border border-slate-700 px-3 py-1 rounded-lg text-xs sm:text-sm text-red-400 font-extrabold">
                  <Clock className="w-4 h-4 shrink-0 animate-pulse" />
                  <span>{formatTimer(timeLeft)}</span>
                </div>
              </div>
            </div>

            {/* Question Body */}
            <div className="flex-1 p-6 overflow-y-auto space-y-6">
              
              {/* Question metadata */}
              <div className="flex justify-between items-center text-xs text-slate-400 pb-3 border-b border-slate-100">
                <span>Soal Nomor <strong className="text-slate-800 font-bold">{currentIndex + 1}</strong> dari <strong className="text-slate-800 font-bold">{questions.length}</strong></span>
                <span className="bg-slate-100 text-slate-700 font-bold px-2.5 py-1 rounded-md">Mapel: {currentQ.subject}</span>
              </div>

              {/* The question text */}
              <div className="space-y-4">
                <div className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
                  <MathMarkdown content={currentQ.text} />
                </div>
                {currentQ.imageUrl && (
                  <img src={currentQ.imageUrl} alt="Diagram Soal" className="max-h-48 rounded-xl border object-contain mx-auto" />
                )}
              </div>

              {/* Options selection list */}
              {currentQ.questionType === 'dropdown' ? (
                <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/60 pl-2 relative">
                  <label className="text-xs font-bold text-slate-600 block">Pilih Jawaban Anda dari Dropdown Menu:</label>
                  
                  {/* Trigger Button */}
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(!openDropdown)}
                    className="w-full p-3.5 border border-slate-200 rounded-xl bg-white text-left font-semibold text-slate-700 text-xs sm:text-sm flex items-center justify-between shadow-xs hover:border-blue-500 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-2 overflow-hidden flex-1">
                      {typeof answers[currentQ.id] === 'number' ? (
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-blue-600 bg-blue-50 px-2 py-0.5 rounded text-xs shrink-0">
                            Opsi {String.fromCharCode(65 + (answers[currentQ.id] as number))}
                          </span>
                          <div className="truncate text-slate-800">
                            <MathMarkdown content={currentQ.options[answers[currentQ.id] as number]} />
                          </div>
                        </div>
                      ) : (
                        <span className="text-slate-400 font-normal">-- Silakan Pilih Jawaban --</span>
                      )}
                    </div>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${openDropdown ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Options List */}
                  {openDropdown && (
                    <div className="space-y-1.5 pt-2 border-t border-slate-200 mt-2 animate-in fade-in duration-150">
                      {currentQ.options.map((option, oIdx) => {
                        const isSelected = answers[currentQ.id] === oIdx;
                        return (
                          <button
                            key={oIdx}
                            type="button"
                            onClick={() => {
                              handleSelectAnswer(currentQ.id, oIdx, 'dropdown');
                              setOpenDropdown(false);
                            }}
                            className={`w-full text-left p-3 border rounded-xl text-xs sm:text-sm flex items-center gap-2.5 transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-blue-50 border-blue-500 text-blue-900 font-bold shadow-xs'
                                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100/80'
                            }`}
                          >
                            <span className={`w-5 h-5 rounded-full font-bold flex items-center justify-center text-[10px] shrink-0 ${
                              isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                            }`}>
                              {String.fromCharCode(65 + oIdx)}
                            </span>
                            <div className="flex-1">
                              <MathMarkdown content={option} />
                            </div>
                            {isSelected && <Check className="w-4 h-4 text-blue-600 shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : currentQ.questionType === 'checkboxes' ? (
                <div className="space-y-2.5 pl-2">
                  <div className="text-xs text-slate-500 font-semibold mb-2 flex items-center gap-1.5 bg-blue-50/50 p-2 rounded-lg border border-blue-100">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    Tipe soal Pilihan Ganda Kompleks (Pilih minimal satu, bisa beberapa jawaban benar)
                  </div>
                  {currentQ.options.map((option, oIdx) => {
                    const isSelected = Array.isArray(answers[currentQ.id]) && (answers[currentQ.id] as number[]).includes(oIdx);
                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleSelectAnswer(currentQ.id, oIdx, 'checkboxes')}
                        className={`w-full text-left p-3.5 border rounded-2xl text-xs sm:text-sm flex items-center gap-3 transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-blue-50 border-blue-600 text-blue-800 font-semibold shadow-sm'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 transition-all ${
                          isSelected
                            ? 'bg-blue-600 border-blue-600 text-white'
                            : 'border-slate-300 bg-slate-50'
                        }`}>
                          {isSelected && (
                            <svg className="w-3.5 h-3.5 stroke-2 stroke-current" fill="none" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className="font-bold text-slate-500">{String.fromCharCode(65 + oIdx)}.</span>
                        <div className="flex-1">
                          <MathMarkdown content={option} />
                        </div>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="space-y-2.5 pl-2">
                  {currentQ.options.map((option, oIdx) => {
                    const isSelected = answers[currentQ.id] === oIdx;
                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleSelectAnswer(currentQ.id, oIdx, 'multiple_choice')}
                        className={`w-full text-left p-3.5 border rounded-2xl text-xs sm:text-sm flex items-center gap-3 transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-blue-50 border-blue-600 text-blue-800 font-semibold shadow-sm'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <span className={`w-6 h-6 rounded-full font-bold flex items-center justify-center text-xs shrink-0 ${
                          isSelected
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <div className="flex-1">
                          <MathMarkdown content={option} />
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

            </div>

            {/* Nav and Flag footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex justify-between items-center shrink-0">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="px-4 py-2 text-xs sm:text-sm font-semibold border border-slate-200 rounded-xl bg-white hover:bg-slate-50 disabled:opacity-50 flex items-center gap-1 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" /> Sebelum
              </button>
              
              <button
                onClick={() => toggleFlag(currentQ.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl border flex items-center gap-1.5 cursor-pointer transition-all ${
                  flagged.includes(currentQ.id)
                    ? 'bg-amber-100 border-amber-400 text-amber-800'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
                <span>Ragu-Ragu</span>
              </button>

              <button
                onClick={handleNext}
                disabled={currentIndex === questions.length - 1}
                className="px-4 py-2 text-xs sm:text-sm font-semibold border border-slate-200 rounded-xl bg-white hover:bg-slate-50 disabled:opacity-50 flex items-center gap-1 cursor-pointer"
              >
                Lanjut <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Question Grid Nav (Right Side - 4 Cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-100 shadow-sm p-5 space-y-6">
            <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-widest">Navigasi Nomor Soal</h4>
            
            <div className="grid grid-cols-5 gap-2.5">
              {questions.map((q, idx) => {
                const isCurrent = idx === currentIndex;
                const isAnswered = answers[q.id] !== undefined && (!Array.isArray(answers[q.id]) || (answers[q.id] as number[]).length > 0);
                const isFlagged = flagged.includes(q.id);

                let btnStyle = "border-slate-200 hover:bg-slate-50 text-slate-700 bg-white";

                if (isAnswered) {
                  btnStyle = "border-blue-600 bg-blue-600 text-white";
                }
                if (isFlagged) {
                  btnStyle = "border-amber-400 bg-amber-400 text-white";
                }
                if (isCurrent) {
                  btnStyle = "border-slate-950 ring-2 ring-slate-950 ring-offset-2 " + (isAnswered ? "bg-blue-600 text-white" : isFlagged ? "bg-amber-400 text-white" : "bg-white text-slate-800");
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`aspect-square border rounded-xl font-bold text-xs flex items-center justify-center transition-all cursor-pointer ${btnStyle}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div className="border-t border-slate-100 pt-4 space-y-2 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-md bg-blue-600"></span>
                <span>Telah Dijawab</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-md bg-amber-400"></span>
                <span>Ragu-Ragu (Kuning)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-md border border-slate-200 bg-white"></span>
                <span>Belum Dijawab</span>
              </div>
            </div>

            <button
              onClick={handleSubmitExam}
              className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl text-xs transition-colors shadow-lg shadow-red-100 flex items-center justify-center gap-2 cursor-pointer"
            >
              Kumpulkan Ujian Sekarang
            </button>
          </div>

        </div>
      )}

      {/* CBT Post-Submit Results View */}
      {scoreResult && activeStage === 'result' && (
        <div className="space-y-6">
          <CbtAnalysisReport
            report={{
              title: tryout.name,
              subject: tryout.subject,
              timestamp: new Date(scoreResult.createdAt).toLocaleString('id-ID'),
              score: scoreResult.score,
              correctCount: scoreResult.correctCount,
              wrongCount: scoreResult.wrongCount,
              totalQuestions: scoreResult.totalQuestions,
              targetPTN: userProfile.targetPTN || "",
              targetProdi: userProfile.targetProdi || "",
              keketatan: "Keketatan Sangat Kompetitif",
              xpEarned: scoreResult.correctCount * 15 + 50,
              strongSubjects: scoreResult.strongSubjects || ["Pemahaman Konsep"],
              weakSubjects: scoreResult.weakSubjects || []
            }}
            userProfile={userProfile}
            onClose={onBack}
            onOpenSolutionReview={() => setActiveStage('pembahasan')}
          />
        </div>
      )}

      {/* CBT Dedicated Halaman Pembahasan Soal */}
      {scoreResult && activeStage === 'pembahasan' && (
        <div className="space-y-6">
          <CbtSolutionReview
            tryout={tryout}
            questions={questions}
            answers={answers}
            scoreResult={scoreResult}
            userProfile={userProfile}
            onBackToResult={() => setActiveStage('result')}
            onExitToDashboard={onBack}
          />
        </div>
      )}

    </div>
  );
}
