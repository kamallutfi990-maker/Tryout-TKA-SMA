import React, { useState, useEffect, useMemo } from 'react';
import { sosiologiTryoutData, SosiologiQuestion } from './sosiologiTryoutData';
import CbtAnalysisReport, { CbtReportData } from '../../CbtAnalysisReport';
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
  RotateCcw
} from 'lucide-react';

interface CbtTryoutSosiologiProps {
  onBack?: () => void;
}

export default function CbtTryoutSosiologi({ onBack }: CbtTryoutSosiologiProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [flagged, setFlagged] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(45 * 60); // 45 minutes
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Separate Explanation Window (Jendela Pembahasan) state
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

  const currentQ = sosiologiTryoutData[currentIdx];

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
    if (currentIdx < sosiologiTryoutData.length - 1) setCurrentIdx(currentIdx + 1);
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

    sosiologiTryoutData.forEach(question => {
      const ans = answers[question.id];
      let isQuestionCorrect = false;

      if (question.type === 'multiple') {
        const correctOpt = question.options?.find(o => o.correct)?.id;
        if (ans === correctOpt) isQuestionCorrect = true;
      } else if (question.type === 'checkboxes') {
        const correctIds = question.correctAnswer || [];
        if (
          Array.isArray(ans) &&
          ans.length === correctIds.length &&
          ans.every(id => correctIds.includes(id))
        ) {
          isQuestionCorrect = true;
        }
      } else if (
        question.type === 'true-false-table' ||
        question.type === 'sesuai-table' ||
        question.type === 'tepat-table'
      ) {
        let allStatementsCorrect = true;
        if (!ans || typeof ans !== 'object') {
          allStatementsCorrect = false;
        } else {
          question.statements?.forEach(s => {
            if (ans[s.id] !== s.correct) {
              allStatementsCorrect = false;
            }
          });
        }
        if (allStatementsCorrect) isQuestionCorrect = true;
      }

      questionResults[question.id] = {
        isCorrect: isQuestionCorrect,
        userAns: ans
      };

      if (isQuestionCorrect) {
        correct++;
        strongTopics.add(question.topic);
      } else {
        weakTopics.add(question.topic);
      }
    });

    const total = sosiologiTryoutData.length;
    const wrong = total - correct;
    const scaledScore = Math.round(200 + (correct / total) * 800);

    const report: CbtReportData = {
      title: 'Try Out CBT TKA: Sosiologi SMA (20 Soal IRT & Analisis Wacana)',
      subject: 'Sosiologi',
      score: scaledScore,
      correctCount: correct,
      wrongCount: wrong,
      totalQuestions: total,
      targetPTN: 'Universitas Indonesia / Universitas Gadjah Mada',
      targetProdi: 'Sosiologi, Ilmu Komunikasi & Kebijakan Publik',
      keketatan: 'Keketatan Sangat Tinggi (Top 5% Soshum)',
      strongSubjects: Array.from(strongTopics),
      weakSubjects: Array.from(weakTopics),
      radarScores: {
        'Ciri & Objek Sosiologi': Math.min(100, Math.round((correct / total) * 98 + 2)),
        'Metodologi Penelitian Sosial': Math.min(100, Math.round((correct / total) * 92 + 8)),
        'Konflik & Dinamika Kelompok': Math.min(100, Math.round((correct / total) * 94 + 6)),
        'Globalisasi & Perubahan Sosial': Math.min(100, Math.round((correct / total) * 96 + 4))
      },
      xpEarned: correct * 30 + 50
    };

    return { correct, wrong, total, scaledScore, report, questionResults };
  }, [answers]);

  const filteredPembahasanQuestions = useMemo(() => {
    return sosiologiTryoutData.filter(q => {
      const res = evaluation.questionResults[q.id];
      if (pembahasanFilter === 'correct') return res?.isCorrect;
      if (pembahasanFilter === 'wrong') return !res?.isCorrect;
      if (pembahasanFilter === 'flagged') return flagged.includes(q.id);
      return true;
    });
  }, [evaluation.questionResults, pembahasanFilter, flagged]);

  // If submitted, show CbtAnalysisReport or Dedicated Jendela Pembahasan
  if (submitted) {
    return (
      <div className="space-y-6">
        {/* Main Analysis Report */}
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
        />

        {/* Floating / Direct CTA to Open Separate Pembahasan Window */}
        <div className="bg-gradient-to-r from-rose-900 via-rose-800 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-rose-700/50">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/30 border border-rose-400/40 rounded-full text-xs font-bold text-rose-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Jendela Pembahasan Interaktif Tersedia</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black font-display tracking-tight">
              Buka Pembahasan Soal di Jendela Terpisah
            </h3>
            <p className="text-xs sm:text-sm text-rose-100/80 max-w-xl">
              Tinjau kunci jawaban resmi, analisis teori sosiologi mendalam per butir soal, serta bandingkan jawaban Anda dalam format jendela interaktif khusus.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => setIsPembahasanWindowOpen(true)}
              className="px-6 py-3.5 bg-white text-rose-900 hover:bg-rose-50 font-black text-xs sm:text-sm rounded-2xl shadow-lg transition-all flex items-center gap-2 cursor-pointer group hover:scale-[1.02]"
            >
              <BookOpen className="w-4 h-4 text-rose-600 group-hover:rotate-12 transition-transform" />
              <span>Buka Jendela Pembahasan (20 Soal)</span>
            </button>
          </div>
        </div>

        {/* Dedicated Separate Pembahasan Window (Modal / Overlay) */}
        {isPembahasanWindowOpen && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 animate-in fade-in duration-200">
            <div className="bg-white w-full max-w-6xl h-[92vh] rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
              
              {/* Header Jendela Pembahasan */}
              <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-rose-600/30 border border-rose-500/50 rounded-xl">
                    <BookOpen className="w-5 h-5 text-rose-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="bg-rose-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Jendela Pembahasan Resmi
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">TKA Sosiologi SMA</span>
                    </div>
                    <h2 className="text-sm sm:text-base font-extrabold text-white mt-0.5">
                      Soal #{sosiologiTryoutData[pembahasanIdx]?.number} • {sosiologiTryoutData[pembahasanIdx]?.topic}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPembahasanWindowOpen(false)}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                    title="Tutup Jendela Pembahasan"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Body Jendela Pembahasan (Split Layout: Nav List + Detail View) */}
              <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden bg-slate-50">
                
                {/* Left Side: Soal Navigation & Filter (4 Cols on LG) */}
                <div className="lg:col-span-4 bg-white border-r border-slate-200 p-4 sm:p-5 flex flex-col space-y-4 overflow-y-auto">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                      <Filter className="w-3.5 h-3.5 text-rose-600" />
                      <span>Daftar Nomor Soal</span>
                    </h4>
                    <span className="text-[11px] font-bold text-slate-500">
                      Benar: <strong className="text-emerald-600">{evaluation.correct}</strong> | Salah: <strong className="text-rose-600">{evaluation.wrong}</strong>
                    </span>
                  </div>

                  {/* Filter Pills */}
                  <div className="grid grid-cols-2 gap-1.5 bg-slate-100 p-1 rounded-xl text-xs font-bold">
                    <button
                      onClick={() => setPembahasanFilter('all')}
                      className={`py-1.5 px-2 rounded-lg transition-all cursor-pointer ${
                        pembahasanFilter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Semua ({sosiologiTryoutData.length})
                    </button>
                    <button
                      onClick={() => setPembahasanFilter('wrong')}
                      className={`py-1.5 px-2 rounded-lg transition-all cursor-pointer ${
                        pembahasanFilter === 'wrong' ? 'bg-white text-rose-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Salah ({evaluation.wrong})
                    </button>
                    <button
                      onClick={() => setPembahasanFilter('correct')}
                      className={`py-1.5 px-2 rounded-lg transition-all cursor-pointer ${
                        pembahasanFilter === 'correct' ? 'bg-white text-emerald-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Benar ({evaluation.correct})
                    </button>
                    <button
                      onClick={() => setPembahasanFilter('flagged')}
                      className={`py-1.5 px-2 rounded-lg transition-all cursor-pointer ${
                        pembahasanFilter === 'flagged' ? 'bg-white text-amber-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Ragu ({flagged.length})
                    </button>
                  </div>

                  {/* Question Grid Buttons */}
                  <div className="grid grid-cols-5 gap-2 pt-2">
                    {sosiologiTryoutData.map((q, idx) => {
                      const isCorrect = evaluation.questionResults[q.id]?.isCorrect;
                      const isSelected = idx === pembahasanIdx;
                      const isFlg = flagged.includes(q.id);

                      // Check if matches filter
                      const isHidden =
                        (pembahasanFilter === 'correct' && !isCorrect) ||
                        (pembahasanFilter === 'wrong' && isCorrect) ||
                        (pembahasanFilter === 'flagged' && !isFlg);

                      if (isHidden) return null;

                      return (
                        <button
                          key={q.id}
                          onClick={() => setPembahasanIdx(idx)}
                          className={`aspect-square rounded-xl text-xs font-black flex flex-col items-center justify-center transition-all cursor-pointer relative border ${
                            isSelected
                              ? 'ring-2 ring-rose-600 ring-offset-2 scale-105 z-10'
                              : 'hover:scale-102'
                          } ${
                            isCorrect
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                              : 'bg-rose-50 text-rose-700 border-rose-300'
                          }`}
                        >
                          <span>{q.number}</span>
                          <span className="text-[9px] font-bold">
                            {isCorrect ? '✓' : '✗'}
                          </span>
                          {isFlg && (
                            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <div className="border-t border-slate-100 pt-4 mt-auto text-[11px] text-slate-500 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-md bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center text-[8px] font-black">✓</span>
                      <span>Jawaban Terjawab Benar</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-md bg-rose-100 border border-rose-300 text-rose-700 flex items-center justify-center text-[8px] font-black">✗</span>
                      <span>Jawaban Perlu Remediasi</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Detailed Question, Student Answers, and Step-by-Step Sociological Explanation (8 Cols on LG) */}
                <div className="lg:col-span-8 p-6 overflow-y-auto space-y-6 bg-white">
                  {(() => {
                    const q = sosiologiTryoutData[pembahasanIdx];
                    if (!q) return null;
                    const res = evaluation.questionResults[q.id];
                    const isCorrect = res?.isCorrect;

                    return (
                      <div className="space-y-6 max-w-3xl mx-auto">
                        
                        {/* Status Badge */}
                        <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl border bg-slate-50">
                          <div className="flex items-center gap-3">
                            <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm font-black ${
                              isCorrect ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                            }`}>
                              {isCorrect ? '✓' : '✗'}
                            </span>
                            <div>
                              <div className="text-xs font-bold text-slate-500">Status Pengerjaan</div>
                              <div className={`text-sm font-extrabold ${isCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>
                                {isCorrect ? 'Jawaban Anda Tepat (+40 Poin IRT)' : 'Jawaban Anda Kurang Tepat'}
                              </div>
                            </div>
                          </div>

                          <div className="text-right">
                            <span className="text-xs font-semibold text-slate-400 block">Kunci Jawaban Resmi:</span>
                            <span className="text-xs font-black text-rose-700 bg-rose-50 border border-rose-200 px-3 py-1 rounded-xl inline-block">
                              {q.officialKeyText}
                            </span>
                          </div>
                        </div>

                        {/* Stimulus Box */}
                        {q.stimulus && (
                          <div className="p-5 bg-amber-50/70 rounded-2xl border border-amber-200/80 space-y-2">
                            <span className="text-[10px] font-extrabold text-amber-800 uppercase tracking-wider bg-amber-200/60 px-2 py-0.5 rounded">
                              Teks Stimulus / Wacana Kasus
                            </span>
                            <div className="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans font-medium">
                              <MathMarkdown content={q.stimulus} />
                            </div>
                          </div>
                        )}

                        {/* Pertanyaan */}
                        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                          <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">
                            Pertanyaan #{q.number} ({q.type.toUpperCase()})
                          </span>
                          <p className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
                            {q.text}
                          </p>
                        </div>

                        {/* Opsi & Analisis Jawaban Siswa */}
                        <div className="space-y-3">
                          <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                            Opsi Jawaban & Status Pilihan:
                          </h4>

                          {/* Multiple choice type */}
                          {q.type === 'multiple' && (
                            <div className="space-y-2.5">
                              {q.options?.map(opt => {
                                const isUserSelected = res?.userAns === opt.id;
                                const isKey = opt.correct === true;

                                let borderClass = 'border-slate-200 bg-white text-slate-700';
                                if (isKey) borderClass = 'border-emerald-500 bg-emerald-50/80 text-emerald-950 font-bold ring-1 ring-emerald-500';
                                else if (isUserSelected && !isKey) borderClass = 'border-rose-400 bg-rose-50/80 text-rose-950 font-bold';

                                return (
                                  <div
                                    key={opt.id}
                                    className={`p-3.5 rounded-2xl border flex items-center justify-between gap-3 text-xs sm:text-sm ${borderClass}`}
                                  >
                                    <div className="flex items-center gap-3">
                                      <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                                        isKey ? 'bg-emerald-600 text-white' : isUserSelected ? 'bg-rose-600 text-white' : 'bg-slate-100 text-slate-600'
                                      }`}>
                                        {opt.id.toUpperCase()}
                                      </span>
                                      <span>{opt.text}</span>
                                    </div>

                                    <div className="flex items-center gap-2 shrink-0">
                                      {isKey && (
                                        <span className="text-[10px] font-extrabold bg-emerald-600 text-white px-2 py-0.5 rounded-md">
                                          Kunci Jawaban
                                        </span>
                                      )}
                                      {isUserSelected && (
                                        <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${
                                          isKey ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                                        }`}>
                                          Jawaban Anda
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}

                          {/* Checkboxes type */}
                          {q.type === 'checkboxes' && (
                            <div className="space-y-2.5">
                              {q.options?.map(opt => {
                                const isUserSelected = Array.isArray(res?.userAns) && res.userAns.includes(opt.id);
                                const isKey = opt.correct === true;

                                let borderClass = 'border-slate-200 bg-white text-slate-700';
                                if (isKey) borderClass = 'border-emerald-500 bg-emerald-50/80 text-emerald-950 font-bold ring-1 ring-emerald-500';
                                else if (isUserSelected && !isKey) borderClass = 'border-rose-400 bg-rose-50/80 text-rose-950 font-bold';

                                return (
                                  <div
                                    key={opt.id}
                                    className={`p-3.5 rounded-2xl border flex items-center justify-between gap-3 text-xs sm:text-sm ${borderClass}`}
                                  >
                                    <div className="flex items-center gap-3">
                                      <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                                        isKey ? 'bg-emerald-600 text-white' : isUserSelected ? 'bg-rose-600 text-white' : 'bg-slate-100 text-slate-600'
                                      }`}>
                                        {opt.id.toUpperCase()}
                                      </span>
                                      <span>{opt.text}</span>
                                    </div>

                                    <div className="flex items-center gap-2 shrink-0">
                                      {isKey && (
                                        <span className="text-[10px] font-extrabold bg-emerald-600 text-white px-2 py-0.5 rounded-md">
                                          Kunci
                                        </span>
                                      )}
                                      {isUserSelected && (
                                        <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${
                                          isKey ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                                        }`}>
                                          Dipilih Siswa
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}

                          {/* Table statements (Benar/Salah, Sesuai/Tidak Sesuai, Tepat/Tidak Tepat) */}
                          {(q.type === 'true-false-table' || q.type === 'sesuai-table' || q.type === 'tepat-table') && (
                            <div className="space-y-2.5">
                              {q.statements?.map(stmt => {
                                const userChoice = res?.userAns?.[stmt.id];
                                const isStmtCorrect = userChoice === stmt.correct;

                                const positiveLabel = q.type === 'true-false-table' ? 'Benar' : q.type === 'sesuai-table' ? 'Sesuai' : 'Tepat';
                                const negativeLabel = q.type === 'true-false-table' ? 'Salah' : q.type === 'sesuai-table' ? 'Tidak Sesuai' : 'Tidak Tepat';

                                return (
                                  <div
                                    key={stmt.id}
                                    className={`p-3.5 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm ${
                                      isStmtCorrect ? 'bg-emerald-50/40 border-emerald-200' : 'bg-rose-50/40 border-rose-200'
                                    }`}
                                  >
                                    <span className="font-medium text-slate-800">{stmt.text}</span>
                                    
                                    <div className="flex items-center gap-2 shrink-0">
                                      <span className="text-[10px] font-bold text-slate-500">
                                        Kunci: <strong className="text-emerald-700">{stmt.correct ? positiveLabel : negativeLabel}</strong>
                                      </span>
                                      <span className="text-slate-300">|</span>
                                      <span className="text-[10px] font-bold text-slate-500">
                                        Jawaban Anda:{' '}
                                        <strong className={isStmtCorrect ? 'text-emerald-700' : 'text-rose-700'}>
                                          {userChoice === undefined ? 'Belum Diisi' : userChoice ? positiveLabel : negativeLabel}
                                        </strong>
                                      </span>
                                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${
                                        isStmtCorrect ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                                      }`}>
                                        {isStmtCorrect ? '✓' : '✗'}
                                      </span>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>

                        {/* Kotak Pembahasan Sosiologi Mendalam */}
                        <div className="p-6 bg-gradient-to-br from-rose-50/80 via-white to-slate-50 rounded-3xl border-2 border-rose-200 shadow-sm space-y-3">
                          <div className="flex items-center gap-2 text-rose-800 font-black text-sm pb-2 border-b border-rose-200/60">
                            <Sparkles className="w-4 h-4 text-rose-600" />
                            <span>Pembahasan Teori & Konsep Sosiologi Lengkap</span>
                          </div>

                          <div className="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans space-y-2">
                            <MathMarkdown content={q.discussion} />
                          </div>
                        </div>

                        {/* Nav Buttons in Pembahasan Window */}
                        <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                          <button
                            onClick={() => setPembahasanIdx(prev => Math.max(0, prev - 1))}
                            disabled={pembahasanIdx === 0}
                            className="px-4 py-2.5 border border-slate-200 rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 flex items-center gap-1.5 cursor-pointer"
                          >
                            <ChevronLeft className="w-4 h-4" /> Soal Sebelumnya
                          </button>

                          <button
                            onClick={() => setPembahasanIdx(prev => Math.min(sosiologiTryoutData.length - 1, prev + 1))}
                            disabled={pembahasanIdx === sosiologiTryoutData.length - 1}
                            className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md flex items-center gap-1.5 cursor-pointer disabled:opacity-40"
                          >
                            Soal Berikutnya <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>

                      </div>
                    );
                  })()}
                </div>

              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Active Exam Taking Screen
  return (
    <div
      id="cbt-sosiologi-root"
      className={
        isFullscreen
          ? 'fixed inset-0 z-50 bg-slate-950 p-3 sm:p-6 overflow-y-auto flex flex-col space-y-4 text-slate-100 font-sans'
          : 'space-y-6'
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Main Question View (Left Side - 8 Cols) */}
        <div className={`lg:col-span-8 bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col ${
          isFullscreen ? 'h-[86vh]' : 'min-h-[620px]'
        }`}>
          
          {/* Header Bar */}
          <div className="bg-slate-900 text-white px-5 py-3.5 flex justify-between items-center border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <span className="bg-rose-600 text-white font-extrabold px-2.5 py-0.5 rounded-lg">
                TKA Sosiologi
              </span>
              <span className="text-slate-300 font-semibold truncate max-w-[200px] sm:max-w-xs">
                Simulasi ANBK / TKA (20 Soal)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleFullscreen}
                className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                title={isFullscreen ? 'Keluar Fullscreen' : 'Mode Layar Penuh'}
              >
                {isFullscreen ? (
                  <>
                    <Minimize2 className="w-3.5 h-3.5 text-amber-400" />
                    <span className="hidden sm:inline">Keluar</span>
                  </>
                ) : (
                  <>
                    <Maximize2 className="w-3.5 h-3.5 text-rose-400" />
                    <span className="hidden sm:inline">Layar Penuh</span>
                  </>
                )}
              </button>

              <div className={`flex items-center gap-2 border px-3 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold ${
                timeLeft < 180 ? 'bg-red-500/20 text-red-400 border-red-500/50 animate-pulse' : 'bg-slate-800 border-slate-700 text-rose-300'
              }`}>
                <Clock className="w-4 h-4 shrink-0" />
                <span>{formatTime(timeLeft)}</span>
              </div>
            </div>
          </div>

          {/* Question Body */}
          <div className="flex-1 p-6 overflow-y-auto space-y-5">
            
            {/* Metadata bar */}
            <div className="flex justify-between items-center text-xs text-slate-400 pb-3 border-b border-slate-100">
              <span>
                Soal Nomor <strong className="text-slate-900 font-bold text-sm">#{currentQ.number}</strong> dari <strong className="text-slate-900 font-bold">{sosiologiTryoutData.length}</strong>
              </span>
              <span className="bg-rose-50 text-rose-700 font-bold px-2.5 py-1 rounded-lg border border-rose-100">
                Topik: {currentQ.topic}
              </span>
            </div>

            {/* Stimulus Box if available */}
            {currentQ.stimulus && (
              <div className="p-4 sm:p-5 bg-amber-50/80 rounded-2xl border border-amber-200/70 space-y-1.5">
                <span className="text-[10px] font-extrabold text-amber-800 uppercase tracking-wider bg-amber-200/60 px-2 py-0.5 rounded">
                  Teks Stimulus
                </span>
                <div className="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans font-medium">
                  <MathMarkdown content={currentQ.stimulus} />
                </div>
              </div>
            )}

            {/* Pertanyaan */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
              <p className="font-bold text-sm sm:text-base text-slate-900 leading-relaxed">
                {currentQ.text}
              </p>
            </div>

            {/* Interactive Options Renderer */}
            
            {/* 1. Multiple Choice 5 Options */}
            {currentQ.type === 'multiple' && (
              <div className="space-y-3 pt-2">
                {currentQ.options?.map(opt => {
                  const isSelected = answers[currentQ.id] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectRadio(currentQ.id, opt.id)}
                      className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-3 ${
                        isSelected
                          ? 'bg-rose-50 border-rose-500 text-rose-950 font-bold shadow-sm ring-1 ring-rose-500'
                          : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                        isSelected ? 'bg-rose-600 text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {opt.id.toUpperCase()}
                      </span>
                      <span className="flex-1">{opt.text}</span>
                      {isSelected && <Check className="w-4 h-4 text-rose-600 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            )}

            {/* 2. Checkboxes / Pilihan Ganda Kompleks */}
            {currentQ.type === 'checkboxes' && (
              <div className="space-y-3 pt-2">
                <div className="text-xs text-rose-700 font-semibold bg-rose-50/80 p-2.5 rounded-xl border border-rose-200/60 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                  <span>Pilihan Ganda Kompleks: Anda dapat memilih lebih dari satu jawaban yang benar.</span>
                </div>

                {currentQ.options?.map(opt => {
                  const isSelected = Array.isArray(answers[currentQ.id]) && answers[currentQ.id].includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleToggleCheckbox(currentQ.id, opt.id)}
                      className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-3 ${
                        isSelected
                          ? 'bg-rose-50 border-rose-500 text-rose-950 font-bold shadow-sm ring-1 ring-rose-500'
                          : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-lg border flex items-center justify-center font-bold text-xs shrink-0 transition-all ${
                        isSelected ? 'bg-rose-600 border-rose-600 text-white' : 'border-slate-300 bg-slate-100 text-slate-600'
                      }`}>
                        {isSelected ? '✓' : opt.id.toUpperCase()}
                      </div>
                      <span className="flex-1">{opt.text}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* 3. Table Benar / Salah, Sesuai / Tidak Sesuai, Tepat / Tidak Tepat */}
            {(currentQ.type === 'true-false-table' || currentQ.type === 'sesuai-table' || currentQ.type === 'tepat-table') && (
              <div className="space-y-3 pt-2">
                <div className="text-xs text-slate-500 font-semibold bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  Tentukan penilaian Anda pada setiap butir pernyataan di bawah ini:
                </div>

                {currentQ.statements?.map(stmt => {
                  const currentVal = answers[currentQ.id]?.[stmt.id];
                  const positiveLabel = currentQ.type === 'true-false-table' ? 'Benar' : currentQ.type === 'sesuai-table' ? 'Sesuai' : 'Tepat';
                  const negativeLabel = currentQ.type === 'true-false-table' ? 'Salah' : currentQ.type === 'sesuai-table' ? 'Tidak Sesuai' : 'Tidak Tepat';

                  return (
                    <div
                      key={stmt.id}
                      className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <span className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                        {stmt.text}
                      </span>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={() => handleTableAnswer(currentQ.id, stmt.id, true)}
                          className={`px-4 py-2 text-xs font-extrabold rounded-xl transition-all cursor-pointer ${
                            currentVal === true
                              ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-600 ring-offset-1'
                              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {positiveLabel}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleTableAnswer(currentQ.id, stmt.id, false)}
                          className={`px-4 py-2 text-xs font-extrabold rounded-xl transition-all cursor-pointer ${
                            currentVal === false
                              ? 'bg-rose-600 text-white shadow-sm ring-2 ring-rose-600 ring-offset-1'
                              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {negativeLabel}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

          </div>

          {/* Nav & Flag Footer */}
          <div className="p-4 border-t border-slate-100 bg-slate-50/60 flex justify-between items-center shrink-0">
            <button
              onClick={handlePrev}
              disabled={currentIdx === 0}
              className="px-4 py-2.5 text-xs sm:text-sm font-bold border border-slate-200 rounded-xl bg-white hover:bg-slate-50 disabled:opacity-40 flex items-center gap-1.5 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" /> Sebelumnya
            </button>

            <button
              onClick={() => toggleFlag(currentQ.id)}
              className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl border flex items-center gap-1.5 cursor-pointer transition-all ${
                flagged.includes(currentQ.id)
                  ? 'bg-amber-100 border-amber-400 text-amber-900'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
              <span>Ragu-Ragu</span>
            </button>

            {currentIdx === sosiologiTryoutData.length - 1 ? (
              <button
                onClick={() => setSubmitted(true)}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md cursor-pointer transition-all"
              >
                Kumpulkan Ujian
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md flex items-center gap-1.5 cursor-pointer transition-all"
              >
                Selanjutnya <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

        {/* Question Grid Nav (Right Side - 4 Cols) */}
        <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200/80 shadow-sm p-5 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest">
              Lembar Nomor Soal
            </h4>
            <span className="text-xs font-bold text-slate-500">
              {Object.keys(answers).length} / {sosiologiTryoutData.length} Dijawab
            </span>
          </div>

          <div className="grid grid-cols-5 gap-2.5">
            {sosiologiTryoutData.map((q, idx) => {
              const isCurrent = idx === currentIdx;
              const ans = answers[q.id];
              const isAnswered =
                ans !== undefined &&
                (typeof ans === 'string' ||
                  (Array.isArray(ans) && ans.length > 0) ||
                  (typeof ans === 'object' && Object.keys(ans).length > 0));
              const isFlagged = flagged.includes(q.id);

              let btnStyle = 'border-slate-200 hover:bg-slate-50 text-slate-700 bg-white';
              if (isAnswered) btnStyle = 'border-rose-600 bg-rose-600 text-white';
              if (isFlagged) btnStyle = 'border-amber-400 bg-amber-400 text-white';
              if (isCurrent) {
                btnStyle =
                  'border-slate-950 ring-2 ring-slate-950 ring-offset-2 ' +
                  (isAnswered ? 'bg-rose-600 text-white' : isFlagged ? 'bg-amber-400 text-white' : 'bg-white text-slate-800');
              }

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIdx(idx)}
                  className={`aspect-square border rounded-xl font-bold text-xs flex items-center justify-center transition-all cursor-pointer ${btnStyle}`}
                >
                  {q.number}
                </button>
              );
            })}
          </div>

          <div className="border-t border-slate-100 pt-4 space-y-2 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-md bg-rose-600" />
              <span>Telah Dijawab (Merah)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-md bg-amber-400" />
              <span>Ragu-Ragu (Kuning)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-md border border-slate-200 bg-white" />
              <span>Belum Dijawab</span>
            </div>
          </div>

          <button
            onClick={() => setSubmitted(true)}
            className="w-full py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-extrabold rounded-2xl text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            Selesaikan & Lihat Hasil
          </button>
        </div>

      </div>
    </div>
  );
}
