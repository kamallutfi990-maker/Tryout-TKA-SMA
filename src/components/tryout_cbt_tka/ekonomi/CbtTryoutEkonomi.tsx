import React, { useState, useEffect, useMemo } from 'react';
import { ekonomiTryoutData, EkonomiQuestion } from './ekonomiTryoutData';
import CbtAnalysisReport, { CbtReportData } from '../../CbtAnalysisReport';
import HtmlPembahasanModal from '../../HtmlPembahasanModal';
import MathMarkdown from '../../MathMarkdown';
import {
  Clock,
  HelpCircle,
  CheckCircle2,
  XCircle,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  BookOpen,
  X,
  Sparkles,
  Award,
  ArrowLeft,
  Filter,
  Check,
  RotateCcw,
  BarChart3,
  TrendingUp,
  Coins,
  Send,
  AlertTriangle
} from 'lucide-react';

interface CbtTryoutEkonomiProps {
  onBack?: () => void;
}

export default function CbtTryoutEkonomi({ onBack }: CbtTryoutEkonomiProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [flagged, setFlagged] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showHtmlModal, setShowHtmlModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState(45 * 60); // 45 minutes
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Separate Explanation Window (Jendela Pembahasan Terpisah) state
  const [isPembahasanWindowOpen, setIsPembahasanWindowOpen] = useState(false);
  const [pembahasanIdx, setPembahasanIdx] = useState(0);
  const [pembahasanFilter, setPembahasanFilter] = useState<'all' | 'correct' | 'wrong' | 'flagged'>('all');

  // Countdown timer
  useEffect(() => {
    if (submitted || timeLeft <= 0) {
      if (timeLeft <= 0 && !submitted) setSubmitted(true);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [submitted, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const currentQ = ekonomiTryoutData[currentIdx];

  const handleSelectRadio = (questionId: number, optionId: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionId }));
  };

  const handleToggleCheckbox = (questionId: number, optionId: string) => {
    setAnswers(prev => {
      const currentList: string[] = Array.isArray(prev[questionId]) ? prev[questionId] : [];
      if (currentList.includes(optionId)) {
        return { ...prev, [questionId]: currentList.filter(id => id !== optionId) };
      } else {
        return { ...prev, [questionId]: [...currentList, optionId] };
      }
    });
  };

  const handleTableAnswer = (questionId: number, statementId: string, value: boolean) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: {
        ...(prev[questionId] || {}),
        [statementId]: value
      }
    }));
  };

  const toggleFlag = (questionId: number) => {
    setFlagged(prev =>
      prev.includes(questionId) ? prev.filter(id => id !== questionId) : [...prev, questionId]
    );
  };

  const handleNext = () => {
    if (currentIdx < ekonomiTryoutData.length - 1) setCurrentIdx(currentIdx + 1);
  };

  const handlePrev = () => {
    if (currentIdx > 0) setCurrentIdx(currentIdx - 1);
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
    setIsFullscreen(prev => !prev);
  };

  // Evaluation & IRT Scoring
  const evaluation = useMemo(() => {
    let correct = 0;
    const strongTopics = new Set<string>();
    const weakTopics = new Set<string>();
    const questionResults: Record<number, { isCorrect: boolean; userAns: any }> = {};

    ekonomiTryoutData.forEach(question => {
      const ans = answers[question.id];
      let isQuestionCorrect = false;

      if (question.type === 'multiple') {
        const correctOpt = question.options?.find(o => o.correct)?.id;
        if (ans === correctOpt) isQuestionCorrect = true;
      } else if (question.type === 'checkboxes') {
        const correctKeys = question.correctAnswer || question.options?.filter(o => o.correct).map(o => o.id) || [];
        if (
          Array.isArray(ans) &&
          ans.length === correctKeys.length &&
          ans.every(item => correctKeys.includes(item))
        ) {
          isQuestionCorrect = true;
        }
      } else if (question.type === 'true-false-table') {
        let allCorrect = true;
        question.statements?.forEach(st => {
          if (ans?.[st.id] !== st.correct) {
            allCorrect = false;
          }
        });
        if (allCorrect && Object.keys(ans || {}).length === (question.statements?.length || 0)) {
          isQuestionCorrect = true;
        }
      }

      questionResults[question.id] = { isCorrect: isQuestionCorrect, userAns: ans };

      if (isQuestionCorrect) {
        correct++;
        strongTopics.add(question.topic);
      } else {
        weakTopics.add(question.topic);
      }
    });

    const total = ekonomiTryoutData.length;
    const wrong = total - correct;
    const scaledScore = Math.round(200 + (correct / total) * 800);

    const report: CbtReportData = {
      title: 'Try Out CBT TKA: Ekonomi (Pusmendik & SNPMB)',
      subject: 'Ekonomi',
      score: scaledScore,
      correctCount: correct,
      wrongCount: wrong,
      totalQuestions: total,
      targetPTN: 'Universitas Indonesia / Universitas Gadjah Mada / Universitas Airlangga',
      targetProdi: 'Ilmu Ekonomi, Akuntansi, Manajemen Bisnis & Keuangan',
      keketatan: 'Keketatan Sangat Kompetitif (Top 3% Soshum)',
      strongSubjects: Array.from(strongTopics),
      weakSubjects: Array.from(weakTopics),
      radarScores: {
        'Mikroekonomi & Permintaan Pasar': Math.min(100, Math.round((correct / total) * 96 + 4)),
        'Makroekonomi & Kebijakan Moneter': Math.min(100, Math.round((correct / total) * 94 + 6)),
        'Akuntansi & Persamaan Dasar': Math.min(100, Math.round((correct / total) * 92 + 8)),
        'Perdagangan Internasional': Math.min(100, Math.round((correct / total) * 95 + 5)),
        'Pembangunan & Ketenagakerjaan': Math.min(100, Math.round((correct / total) * 90 + 10))
      }
    };

    return { correct, wrong, total, scaledScore, report, questionResults };
  }, [answers]);

  // Filtered questions for the Pembahasan window
  const filteredPembahasanQuestions = useMemo(() => {
    return ekonomiTryoutData.filter(q => {
      const res = evaluation.questionResults[q.id];
      if (pembahasanFilter === 'correct') return res?.isCorrect;
      if (pembahasanFilter === 'wrong') return !res?.isCorrect;
      if (pembahasanFilter === 'flagged') return flagged.includes(q.id);
      return true;
    });
  }, [evaluation, pembahasanFilter, flagged]);

  const activePembahasanQ = filteredPembahasanQuestions[pembahasanIdx] || ekonomiTryoutData[0];
  const answeredCount = Object.keys(answers).length;

  // Render Post-Submission Analysis & Pembahasan View
  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 p-2 sm:p-6 space-y-6 animate-in fade-in duration-200">
        {/* Main Comprehensive Analysis Report */}
        <CbtAnalysisReport
          report={evaluation.report}
          onClose={() => {
            if (onBack) onBack();
            else {
              setSubmitted(false);
              setAnswers({});
              setFlagged([]);
              setCurrentIdx(0);
              setTimeLeft(45 * 60);
            }
          }}
          onOpenSolutionReview={() => {
            setIsPembahasanWindowOpen(true);
            setPembahasanIdx(0);
          }}
        />

        {/* Prominent Pembahasan Banner */}
        <div className="bg-gradient-to-r from-amber-950 via-slate-900 to-amber-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-amber-500/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/20 border border-amber-400/40 rounded-full text-amber-300 text-xs font-black tracking-wide uppercase">
              <BookOpen className="w-3.5 h-3.5" /> Pembahasan Soal & Kunci Jawaban Lengkap
            </div>
            <h3 className="text-xl sm:text-2xl font-black font-display text-white">
              Buka Modul Tinjauan & Pembahasan CBT Ekonomi
            </h3>
            <p className="text-xs sm:text-sm text-amber-200/80 max-w-xl">
              Lihat evaluasi interaktif butir demi butir lengkap dengan analisis rumus kuantitatif ekonomi (fungsi permintaan, elastisitas, PDA), wacana makroekonomi, dan pembahasan langkah demi langkah.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                setPembahasanIdx(0);
                setIsPembahasanWindowOpen(true);
              }}
              className="px-6 py-3.5 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black rounded-2xl shadow-xl shadow-amber-500/20 transition-all transform active:scale-95 text-sm flex items-center gap-2 cursor-pointer border border-white/40"
            >
              <BookOpen className="w-4 h-4 text-slate-950" />
              <span>Buka Pembahasan Interaktif</span>
            </button>
            <button
              onClick={() => setShowHtmlModal(true)}
              className="px-5 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-2xl transition-all text-sm flex items-center gap-2 cursor-pointer"
            >
              <span>Dokumen HTML Pembahasan</span>
            </button>
          </div>
        </div>

        {/* Interactive Discussion Window Modal */}
        {isPembahasanWindowOpen && (
          <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
            <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
              {/* Pembahasan Header */}
              <div className="bg-slate-800 px-5 py-4 border-b border-slate-700 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-amber-500/20 text-amber-400 rounded-2xl border border-amber-500/30">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                      Jendela Pembahasan Interaktif: TKA Ekonomi
                      <span className="text-xs bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full font-mono">
                        Soal #{activePembahasanQ.number}
                      </span>
                    </h3>
                    <p className="text-xs text-slate-400">
                      Kunci Jawaban Resmi & Solusi Pembahasan Mendalam Berformat LaTeX
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowHtmlModal(true)}
                    className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-amber-300 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer border border-slate-600"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Versi HTML</span>
                  </button>
                  <button
                    onClick={() => setIsPembahasanWindowOpen(false)}
                    className="p-2 rounded-xl bg-slate-700/60 hover:bg-rose-600/80 text-slate-300 hover:text-white transition-all cursor-pointer"
                    title="Tutup Jendela Pembahasan"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Filter and Question Selector Strip */}
              <div className="bg-slate-850 px-5 py-3 border-b border-slate-700/60 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <Filter className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-slate-400 font-medium">Filter Soal:</span>
                  <button
                    onClick={() => {
                      setPembahasanFilter('all');
                      setPembahasanIdx(0);
                    }}
                    className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                      pembahasanFilter === 'all'
                        ? 'bg-amber-500 text-slate-950 font-bold'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    Semua ({ekonomiTryoutData.length})
                  </button>
                  <button
                    onClick={() => {
                      setPembahasanFilter('correct');
                      setPembahasanIdx(0);
                    }}
                    className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                      pembahasanFilter === 'correct'
                        ? 'bg-emerald-600 text-white font-bold'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    Benar ({evaluation.correct})
                  </button>
                  <button
                    onClick={() => {
                      setPembahasanFilter('wrong');
                      setPembahasanIdx(0);
                    }}
                    className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                      pembahasanFilter === 'wrong'
                        ? 'bg-rose-600 text-white font-bold'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    Salah / Kosong ({evaluation.wrong})
                  </button>
                </div>

                {/* Number buttons for rapid navigation */}
                <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-1">
                  {filteredPembahasanQuestions.map((fq, fIdx) => {
                    const isCurrent = fIdx === pembahasanIdx;
                    const isCorrect = evaluation.questionResults[fq.id]?.isCorrect;
                    return (
                      <button
                        key={fq.id}
                        onClick={() => setPembahasanIdx(fIdx)}
                        className={`w-7 h-7 rounded-md font-bold text-xs transition-all flex items-center justify-center shrink-0 border cursor-pointer ${
                          isCurrent
                            ? 'ring-2 ring-amber-400 font-black'
                            : ''
                        } ${
                          isCorrect
                            ? 'bg-emerald-600/30 border-emerald-500/60 text-emerald-300'
                            : 'bg-rose-600/30 border-rose-500/60 text-rose-300'
                        }`}
                      >
                        {fq.number}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Pembahasan Body Content */}
              <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6">
                {/* Question Context & Stimulus */}
                <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      Topik: {activePembahasanQ.topic}
                    </span>
                    <span className="text-xs bg-slate-700 text-slate-300 px-2 py-0.5 rounded">
                      Bentuk: {activePembahasanQ.type === 'multiple' ? 'Pilihan Ganda' : activePembahasanQ.type === 'checkboxes' ? 'Pilihan Ganda Kompleks' : 'Benar / Salah'}
                    </span>
                  </div>

                  {activePembahasanQ.stimulus && (
                    <div className="mb-4 p-3.5 bg-slate-900/80 rounded-xl border border-slate-700/60 text-sm text-slate-300 leading-relaxed overflow-x-auto">
                      <MathMarkdown content={activePembahasanQ.stimulus} />
                    </div>
                  )}

                  <div className="text-sm font-semibold text-slate-100 leading-relaxed">
                    <MathMarkdown content={activePembahasanQ.text} />
                  </div>
                </div>

                {/* Status Comparison: Jawaban Anda vs Kunci Jawaban */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={`p-4 rounded-2xl border ${
                    evaluation.questionResults[activePembahasanQ.id]?.isCorrect
                      ? 'bg-emerald-950/40 border-emerald-600/50'
                      : 'bg-rose-950/40 border-rose-600/50'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      {evaluation.questionResults[activePembahasanQ.id]?.isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <XCircle className="w-5 h-5 text-rose-400" />
                      )}
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                        Status Jawaban Anda:
                      </span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                        evaluation.questionResults[activePembahasanQ.id]?.isCorrect
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                      }`}>
                        {evaluation.questionResults[activePembahasanQ.id]?.isCorrect ? 'BENAR' : 'SALAH / BELUM TEPAT'}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/40">
                    <div className="flex items-center gap-2 mb-1">
                      <Award className="w-4 h-4 text-amber-400" />
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                        Kunci Jawaban Resmi:
                      </span>
                    </div>
                    <div className="text-sm font-bold text-amber-200 mt-1">
                      {activePembahasanQ.officialKeyText}
                    </div>
                  </div>
                </div>

                {/* Detailed Step-by-Step Discussion with LaTeX */}
                <div className="bg-slate-800/90 border border-slate-700/90 rounded-2xl p-5 shadow-lg space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm border-b border-slate-700 pb-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Pembahasan Runtut & Analisis Kuantitatif Ekonomi (LaTeX):</span>
                  </div>
                  <div className="prose prose-invert max-w-none text-slate-200 text-sm leading-relaxed overflow-x-auto">
                    <MathMarkdown content={activePembahasanQ.discussion} />
                  </div>
                </div>
              </div>

              {/* Pembahasan Footer Navigation */}
              <div className="bg-slate-800 px-5 py-3 border-t border-slate-700 flex items-center justify-between gap-3">
                <button
                  onClick={() => setPembahasanIdx(prev => Math.max(0, prev - 1))}
                  disabled={pembahasanIdx === 0}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Soal Sebelumnya</span>
                </button>

                <span className="text-xs text-slate-400 font-mono">
                  {pembahasanIdx + 1} dari {filteredPembahasanQuestions.length} Pembahasan
                </span>

                <button
                  onClick={() => setPembahasanIdx(prev => Math.min(filteredPembahasanQuestions.length - 1, prev + 1))}
                  disabled={pembahasanIdx === filteredPembahasanQuestions.length - 1}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                >
                  <span>Soal Berikutnya</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* HTML Modal */}
        <HtmlPembahasanModal
          isOpen={showHtmlModal}
          onClose={() => setShowHtmlModal(false)}
          title="Pembahasan Try Out CBT - Ekonomi SMA"
          subject="Ekonomi"
        />
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans ${isFullscreen ? 'p-0' : 'p-2 sm:p-4'}`}>
      {/* Top Header */}
      <header className="bg-slate-800/90 backdrop-blur-md border border-slate-700/80 rounded-2xl px-4 py-3 mb-3 flex flex-wrap items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center gap-3">
          {onBack && (
            <button
              onClick={onBack}
              className="p-2 rounded-xl bg-slate-700/60 hover:bg-slate-700 text-slate-300 hover:text-white transition-all flex items-center gap-1 text-sm font-medium cursor-pointer"
              title="Kembali ke Dashboard"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Dasbor</span>
            </button>
          )}
          <div className="flex items-center gap-2">
            <div className="p-2 bg-amber-500/20 text-amber-400 rounded-xl">
              <Coins className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-white tracking-wide flex items-center gap-2">
                Simulasi CBT TKA: Ekonomi
                <span className="text-xs bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full font-mono font-medium">
                  2026 Pusmendik
                </span>
              </h1>
              <p className="text-xs text-slate-400">Pusat Asesmen Pendidikan & TKA Ekonomi SMA/MA</p>
            </div>
          </div>
        </div>

        {/* Timer & CBT Actions */}
        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-mono font-bold text-sm shadow-inner border ${
            timeLeft < 300
              ? 'bg-rose-950/70 border-rose-500/50 text-rose-300 animate-pulse'
              : 'bg-slate-900/80 border-slate-700 text-amber-300'
          }`}>
            <Clock className="w-4 h-4 text-amber-400" />
            <span>{formatTime(timeLeft)}</span>
          </div>

          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-xl bg-slate-700/60 hover:bg-slate-700 text-slate-300 hover:text-white transition-all hidden sm:flex items-center justify-center cursor-pointer"
            title={isFullscreen ? 'Keluar Layar Penuh' : 'Layar Penuh'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setShowConfirmModal(true)}
            className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Kumpulkan Ujian</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1">
        {/* Left Column: Stimulus & Question Content */}
        <div className="lg:col-span-8 flex flex-col bg-slate-800/80 backdrop-blur border border-slate-700/80 rounded-2xl p-4 sm:p-6 shadow-xl relative min-h-[500px]">
          {/* Question Sub-header */}
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-700/70">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-xl text-sm font-bold font-mono">
                Soal #{currentQ.number}
              </span>
              <span className="text-xs bg-slate-700/80 text-slate-300 px-2.5 py-1 rounded-lg">
                {currentQ.type === 'multiple' && 'Pilihan Ganda Tunggal'}
                {currentQ.type === 'checkboxes' && 'Pilihan Ganda Kompleks (Checkbox)'}
                {currentQ.type === 'true-false-table' && 'Pilihan Benar / Salah'}
              </span>
              <span className="text-xs text-slate-400 hidden sm:inline-block">
                • {currentQ.topic}
              </span>
            </div>

            <button
              onClick={() => toggleFlag(currentQ.id)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                flagged.includes(currentQ.id)
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                  : 'bg-slate-700/40 text-slate-400 border-slate-700 hover:text-slate-200'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{flagged.includes(currentQ.id) ? 'Ragu-ragu (Ditandai)' : 'Tandai Ragu'}</span>
            </button>
          </div>

          {/* Stimulus Box if available */}
          {currentQ.stimulus && (
            <div className="mb-4 p-4 bg-slate-900/90 rounded-2xl border border-slate-700/80 text-sm text-slate-200 leading-relaxed shadow-inner overflow-x-auto">
              <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Wacana & Data Kasus Ekonomi:
              </div>
              <MathMarkdown content={currentQ.stimulus} />
            </div>
          )}

          {/* Question Text */}
          <div className="text-sm sm:text-base font-semibold text-slate-100 mb-6 leading-relaxed">
            <MathMarkdown content={currentQ.text} />
          </div>

          {/* Options / Statements Interface */}
          <div className="flex-1 space-y-3 mb-6">
            {/* 1. Multiple Choice */}
            {currentQ.type === 'multiple' && currentQ.options && (
              <div className="space-y-2.5">
                {currentQ.options.map(opt => {
                  const isSelected = answers[currentQ.id] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectRadio(currentQ.id, opt.id)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all flex items-start gap-3.5 cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500/20 border-amber-500 text-white shadow-md'
                          : 'bg-slate-700/40 border-slate-700/80 text-slate-300 hover:bg-slate-700/70 hover:border-slate-600'
                      }`}
                    >
                      <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-amber-500 text-slate-950 font-black'
                          : 'bg-slate-800 text-slate-400 border border-slate-600'
                      }`}>
                        {opt.id.toUpperCase()}
                      </span>
                      <div className="text-sm leading-relaxed flex-1 pt-0.5">
                        <MathMarkdown content={opt.text} />
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* 2. Checkboxes (Multiple Complex) */}
            {currentQ.type === 'checkboxes' && currentQ.options && (
              <div className="space-y-2.5">
                <div className="text-xs text-amber-300/90 font-medium pb-1">
                  *Pilihlah satu atau lebih jawaban yang benar (Centang semua yang tepat):
                </div>
                {currentQ.options.map(opt => {
                  const currentSelected: string[] = Array.isArray(answers[currentQ.id]) ? answers[currentQ.id] : [];
                  const isChecked = currentSelected.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleToggleCheckbox(currentQ.id, opt.id)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all flex items-start gap-3.5 cursor-pointer ${
                        isChecked
                          ? 'bg-amber-500/20 border-amber-500 text-white shadow-md'
                          : 'bg-slate-700/40 border-slate-700/80 text-slate-300 hover:bg-slate-700/70 hover:border-slate-600'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isChecked
                          ? 'bg-amber-500 text-slate-950'
                          : 'bg-slate-800 border border-slate-600'
                      }`}>
                        {isChecked && <Check className="w-4 h-4 stroke-[3]" />}
                      </div>
                      <div className="text-sm leading-relaxed flex-1">
                        <MathMarkdown content={opt.text} />
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* 3. True / False Statements Table */}
            {currentQ.type === 'true-false-table' && currentQ.statements && (
              <div className="overflow-x-auto rounded-2xl border border-slate-700">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-750 border-b border-slate-700 text-slate-300">
                      <th className="p-3.5 font-bold">Pernyataan Analisis Ekonomi</th>
                      <th className="p-3.5 text-center w-28 font-bold text-emerald-400">Benar</th>
                      <th className="p-3.5 text-center w-28 font-bold text-rose-400">Salah</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/60">
                    {currentQ.statements.map(st => {
                      const userChoice = answers[currentQ.id]?.[st.id];
                      return (
                        <tr key={st.id} className="hover:bg-slate-700/30 transition-colors">
                          <td className="p-3.5 text-slate-200">
                            <MathMarkdown content={st.text} />
                          </td>
                          <td className="p-3.5 text-center">
                            <button
                              onClick={() => handleTableAnswer(currentQ.id, st.id, true)}
                              className={`w-8 h-8 rounded-xl font-bold transition-all cursor-pointer inline-flex items-center justify-center ${
                                userChoice === true
                                  ? 'bg-emerald-500 text-slate-950 shadow-md ring-2 ring-emerald-300'
                                  : 'bg-slate-700/60 text-slate-400 hover:bg-slate-700 border border-slate-600'
                              }`}
                            >
                              B
                            </button>
                          </td>
                          <td className="p-3.5 text-center">
                            <button
                              onClick={() => handleTableAnswer(currentQ.id, st.id, false)}
                              className={`w-8 h-8 rounded-xl font-bold transition-all cursor-pointer inline-flex items-center justify-center ${
                                userChoice === false
                                  ? 'bg-rose-500 text-white shadow-md ring-2 ring-rose-300'
                                  : 'bg-slate-700/60 text-slate-400 hover:bg-slate-700 border border-slate-600'
                              }`}
                            >
                              S
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Bottom Question Controls Bar */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-700/80 mt-auto flex-wrap gap-3">
            <button
              onClick={handlePrev}
              disabled={currentIdx === 0}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-700/60 hover:bg-slate-700 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed text-xs sm:text-sm font-semibold transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Sebelumnya</span>
            </button>

            <div className="text-xs text-slate-400 font-mono">
              {currentIdx + 1} dari {ekonomiTryoutData.length} Soal
            </div>

            {currentIdx < ekonomiTryoutData.length - 1 ? (
              <button
                onClick={handleNext}
                className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                <span>Berikutnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setShowConfirmModal(true)}
                className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg transition-all cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Selesai & Kumpulkan</span>
              </button>
            )}
          </div>
        </div>

        {/* Right Column: Number Grid & Quick Status */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="bg-slate-800/80 backdrop-blur border border-slate-700/80 rounded-2xl p-4 sm:p-5 shadow-xl">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-700/70">
              <h2 className="text-sm font-bold text-white flex items-center gap-2">
                <Coins className="w-4 h-4 text-amber-400" />
                Navigasi Soal CBT
              </h2>
              <span className="text-xs bg-slate-700 px-2 py-0.5 rounded text-slate-300 font-mono">
                {answeredCount}/{ekonomiTryoutData.length} Terjawab
              </span>
            </div>

            {/* Number Buttons Grid */}
            <div className="grid grid-cols-5 gap-2 mb-4">
              {ekonomiTryoutData.map((quest, idx) => {
                const isCurrent = idx === currentIdx;
                const isAnswered = answers[quest.id] !== undefined;
                const isFlag = flagged.includes(quest.id);

                let bgClass = 'bg-slate-700/60 border-slate-600 text-slate-300 hover:bg-slate-600';
                if (isAnswered) {
                  bgClass = 'bg-amber-500 border-amber-400 text-slate-950 font-bold shadow-sm';
                }
                if (isFlag) {
                  bgClass = 'bg-amber-500/30 border-amber-400 text-amber-200';
                }
                if (isCurrent) {
                  bgClass += ' ring-2 ring-amber-400 ring-offset-2 ring-offset-slate-900';
                }

                return (
                  <button
                    key={quest.id}
                    onClick={() => setCurrentIdx(idx)}
                    className={`h-10 rounded-xl text-xs font-bold border transition-all flex flex-col items-center justify-center relative cursor-pointer ${bgClass}`}
                  >
                    <span>{quest.number}</span>
                    {isFlag && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 absolute top-1 right-1" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400 pt-3 border-t border-slate-700/60">
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded bg-amber-500 border border-amber-400"></div>
                <span>Sudah Dijawab</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded bg-slate-700/60 border border-slate-600"></div>
                <span>Belum Dijawab</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded bg-amber-500/30 border border-amber-400"></div>
                <span>Ragu-ragu</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded border-2 border-amber-400"></div>
                <span>Posisi Saat Ini</span>
              </div>
            </div>

            {/* Finish Button */}
            <div className="mt-5">
              <button
                onClick={() => setShowConfirmModal(true)}
                className="w-full py-3 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black rounded-xl shadow-lg transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Kumpulkan Ujian Sekarang</span>
              </button>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4 text-xs text-slate-300 space-y-2">
            <div className="font-bold text-amber-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Petunjuk CBT Ekonomi TKA</span>
            </div>
            <p className="leading-relaxed">
              TKA Ekonomi menguji kemampuan analisis kuantitatif (fungsi permintaan, elastisitas, laju pertumbuhan, PDA) serta pemahaman kebijakan makroekonomi dan pembangunan.
            </p>
          </div>
        </div>
      </div>

      {/* In-App Confirmation Modal (No window.confirm!) */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm p-4 flex items-center justify-center animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl text-center space-y-5">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-black text-white">
                Kumpulkan Jawaban Try Out?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Kamu telah mengisi <strong>{answeredCount} dari {ekonomiTryoutData.length} soal</strong>. Apakah kamu yakin ingin menyelesaikan ujian dan langsung melihat laporan analisis nilai serta pembahasan lengkap?
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-2">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="w-full sm:flex-1 py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl text-xs transition-all cursor-pointer"
              >
                Lanjutkan Mengerjakan
              </button>
              <button
                onClick={() => {
                  setShowConfirmModal(false);
                  setSubmitted(true);
                }}
                className="w-full sm:flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-xl text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Ya, Kumpulkan Sekarang</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
