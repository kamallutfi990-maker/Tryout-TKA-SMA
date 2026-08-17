/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Clock, Award, CheckCircle2, XCircle, AlertCircle, 
  HelpCircle, ChevronLeft, ChevronRight, Send, RotateCcw, 
  Maximize2, Minimize2, Sparkles, BookOpen, Filter, X
} from 'lucide-react';
import { geografiTryoutData, GeografiQuestion } from './geografiTryoutData';
import MathMarkdown from '../../MathMarkdown';
import CbtAnalysisReport, { CbtReportData } from '../../CbtAnalysisReport';

interface CbtTryoutGeografiProps {
  onBack: () => void;
}

export default function CbtTryoutGeografi({ onBack }: CbtTryoutGeografiProps) {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [answers, setAnswers] = useState<{ [key: number]: any }>({});
  const [doubtStatus, setDoubtStatus] = useState<{ [key: number]: boolean }>({});
  const [timeLeft, setTimeLeft] = useState<number>(30 * 60); // 30 minutes
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [reportData, setReportData] = useState<CbtReportData | null>(null);

  // Separate interactive discussion window state
  const [isPembahasanWindowOpen, setIsPembahasanWindowOpen] = useState<boolean>(false);
  const [pembahasanFilter, setPembahasanFilter] = useState<'all' | 'correct' | 'wrong'>('all');
  const [pembahasanIdx, setPembahasanIdx] = useState<number>(0);

  // Timer countdown
  useEffect(() => {
    if (isSubmitted) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isSubmitted]);

  const currentQ: GeografiQuestion = geografiTryoutData[currentIdx];

  // Fullscreen toggle handler
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  // Format time display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle option selection for single choice
  const handleSelectRadio = (questionId: number, optionId: string) => {
    if (isSubmitted) return;
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  // Handle multi-choice (checkboxes)
  const handleToggleCheckbox = (questionId: number, optionId: string) => {
    if (isSubmitted) return;
    const currentList: string[] = Array.isArray(answers[questionId]) ? [...answers[questionId]] : [];
    const index = currentList.indexOf(optionId);
    if (index > -1) {
      currentList.splice(index, 1);
    } else {
      currentList.push(optionId);
    }
    setAnswers(prev => ({
      ...prev,
      [questionId]: currentList
    }));
  };

  // Handle table statement selection (Benar / Salah)
  const handleSelectTableStatement = (questionId: number, statementId: string, value: boolean) => {
    if (isSubmitted) return;
    const currentTableAnswers = answers[questionId] ? { ...answers[questionId] } : {};
    currentTableAnswers[statementId] = value;
    setAnswers(prev => ({
      ...prev,
      [questionId]: currentTableAnswers
    }));
  };

  // Toggle doubt flag
  const toggleDoubt = () => {
    if (isSubmitted) return;
    setDoubtStatus(prev => ({
      ...prev,
      [currentQ.id]: !prev[currentQ.id]
    }));
  };

  // Evaluation & Scoring Logic
  const calculateResults = () => {
    let correct = 0;
    const details: { [key: number]: { isCorrect: boolean; userAns: any } } = {};
    const strongTopics = new Set<string>();
    const weakTopics = new Set<string>();

    geografiTryoutData.forEach(question => {
      const userAns = answers[question.id];
      let isQCorrect = false;

      if (question.type === 'multiple') {
        const correctOpt = question.options?.find(o => o.correct);
        if (userAns && correctOpt && userAns === correctOpt.id) {
          isQCorrect = true;
        }
      } else if (question.type === 'checkboxes') {
        const correctKeys = question.correctAnswer || [];
        if (Array.isArray(userAns)) {
          const isSameLength = userAns.length === correctKeys.length;
          const allFound = correctKeys.every(k => userAns.includes(k));
          if (isSameLength && allFound) {
            isQCorrect = true;
          }
        }
      } else if (question.type === 'tepat-table') {
        if (userAns && typeof userAns === 'object' && question.statements) {
          const allStmtsCorrect = question.statements.every(st => userAns[st.id] === st.correct);
          if (allStmtsCorrect) {
            isQCorrect = true;
          }
        }
      }

      if (isQCorrect) {
        correct++;
        strongTopics.add(question.topic);
      } else {
        weakTopics.add(question.topic);
      }

      details[question.id] = {
        isCorrect: isQCorrect,
        userAns
      };
    });

    const total = geografiTryoutData.length;
    const wrong = total - correct;
    const scaledScore = Math.round(200 + (correct / total) * 800);

    const report: CbtReportData = {
      title: 'Try Out CBT TKA: Geografi SMA (10 Soal Analisis Spasial, Litosfer, Penginderaan Jauh & SIG)',
      subject: 'Geografi',
      timestamp: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      score: scaledScore,
      correctCount: correct,
      wrongCount: wrong,
      totalQuestions: total,
      xpEarned: correct * 35,
      strongSubjects: Array.from(strongTopics),
      weakSubjects: Array.from(weakTopics),
      radarScores: {
        'Geomorfologi & Dinamika Litosfer': Math.min(100, Math.round((correct / total) * 100)),
        'Penginderaan Jauh & SIG Terapan': Math.min(100, Math.round((correct / total) * 96 + 4)),
        'Pesisir, Mangrove & Hidrosfer': Math.min(100, Math.round((correct / total) * 98 + 2)),
        'Dinamika Penduduk & Megapolitan': Math.min(100, Math.round((correct / total) * 100)),
        'Bioma, Iklim & Interaksi Spasial': Math.min(100, Math.round((correct / total) * 94 + 6))
      }
    };

    return { correct, wrong, scaledScore, details, report };
  };

  const handleSubmitExam = () => {
    setShowConfirmModal(false);
    const { report } = calculateResults();
    setReportData(report);
    setIsSubmitted(true);
  };

  const evaluation = calculateResults();

  // Filtered list of questions for the discussion window
  const filteredQuestions = geografiTryoutData.filter(q => {
    if (pembahasanFilter === 'all') return true;
    const isCorr = evaluation.details[q.id]?.isCorrect;
    if (pembahasanFilter === 'correct') return isCorr;
    if (pembahasanFilter === 'wrong') return !isCorr;
    return true;
  });

  const targetQ = filteredQuestions[pembahasanIdx] || filteredQuestions[0] || geografiTryoutData[0];
  const qResult = evaluation.details[targetQ.id];

  // If submitted, show the result report
  if (isSubmitted && reportData) {
    return (
      <div className="space-y-6">
        {/* Navigation & Action Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-sm">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-700 hover:text-slate-900 font-bold text-sm px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Daftar Paket</span>
          </button>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                setIsSubmitted(false);
                setAnswers({});
                setDoubtStatus({});
                setTimeLeft(30 * 60);
                setCurrentIdx(0);
                setIsPembahasanWindowOpen(false);
              }}
              className="flex items-center gap-2 text-slate-700 hover:text-slate-900 font-bold text-sm px-4 py-2 rounded-xl border border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-teal-600" />
              <span>Ulangi Try Out</span>
            </button>

            <button
              onClick={() => {
                setPembahasanFilter('all');
                setPembahasanIdx(0);
                setIsPembahasanWindowOpen(true);
              }}
              className="flex items-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-teal-500/20 transition-all cursor-pointer animate-pulse"
            >
              <BookOpen className="w-4 h-4" />
              <span>Buka Jendela Pembahasan (10 Soal)</span>
            </button>
          </div>
        </div>

        {/* Score & Analysis Report Component */}
        <CbtAnalysisReport report={reportData} onClose={onBack} />

        {/* ============================================================ */}
        {/* SEPARATE FULL DISCUSSION SCREEN / MODAL WINDOW              */}
        {/* ============================================================ */}
        {isPembahasanWindowOpen && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
              
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-black shadow-md shadow-teal-500/20">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-800 text-base sm:text-lg">
                      Jendela Pembahasan Interaktif: Geografi SMA
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      10 Soal Analisis Spasial, Litosfer, Penginderaan Jauh & SIG
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPembahasanWindowOpen(false)}
                    className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
                    title="Tutup Pembahasan"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Filter & Jump Navigation Bar */}
              <div className="px-6 py-3 bg-white border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
                {/* Filter Selector */}
                <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
                  <button
                    onClick={() => { setPembahasanFilter('all'); setPembahasanIdx(0); }}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      pembahasanFilter === 'all'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Semua ({geografiTryoutData.length})
                  </button>
                  <button
                    onClick={() => { setPembahasanFilter('correct'); setPembahasanIdx(0); }}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                      pembahasanFilter === 'correct'
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'text-emerald-700 hover:text-emerald-800'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Benar ({evaluation.correct})
                  </button>
                  <button
                    onClick={() => { setPembahasanFilter('wrong'); setPembahasanIdx(0); }}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                      pembahasanFilter === 'wrong'
                        ? 'bg-rose-600 text-white shadow-sm'
                        : 'text-rose-700 hover:text-rose-800'
                    }`}
                  >
                    <XCircle className="w-3.5 h-3.5" />
                    Salah ({evaluation.wrong})
                  </button>
                </div>

                {/* Number Pagination Buttons */}
                <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                  {filteredQuestions.map((q, idx) => {
                    const isQCorr = evaluation.details[q.id]?.isCorrect;
                    const isActive = idx === pembahasanIdx;
                    return (
                      <button
                        key={q.id}
                        onClick={() => setPembahasanIdx(idx)}
                        className={`w-8 h-8 rounded-lg font-black text-xs transition-all flex items-center justify-center cursor-pointer ${
                          isActive
                            ? 'ring-2 ring-teal-500 ring-offset-2 scale-105 ' + (isQCorr ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white')
                            : isQCorr
                            ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                            : 'bg-rose-100 text-rose-800 hover:bg-rose-200'
                        }`}
                      >
                        {q.number}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Discussion Body Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {targetQ ? (
                  <>
                    {/* Header info for current question */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="bg-teal-100 text-teal-800 font-extrabold text-xs px-3 py-1 rounded-full">
                          Soal Nomor {targetQ.number}
                        </span>
                        <span className="bg-slate-100 text-slate-700 font-semibold text-xs px-3 py-1 rounded-full">
                          {targetQ.topic}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {qResult?.isCorrect ? (
                          <div className="flex items-center gap-1 text-xs font-black text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Jawaban Anda Benar</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 text-xs font-black text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                            <XCircle className="w-4 h-4" />
                            <span>Jawaban Anda Salah / Kurang Tepat</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Stimulus Context Box */}
                    {targetQ.stimulus && (
                      <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 sm:p-5 text-slate-800 text-sm sm:text-base leading-relaxed font-serif">
                        <div className="text-xs font-bold text-amber-800 mb-1 uppercase tracking-wider">
                          Konteks Stimulus / Kasus Geografi:
                        </div>
                        <MathMarkdown content={targetQ.stimulus} />
                      </div>
                    )}

                    {/* Question Text */}
                    <div className="text-slate-900 font-medium text-base sm:text-lg leading-relaxed">
                      <MathMarkdown content={targetQ.text} />
                    </div>

                    {/* Options or Table View with Evaluation Tags */}
                    {targetQ.type === 'multiple' && targetQ.options && (
                      <div className="space-y-2.5">
                        {targetQ.options.map((opt) => {
                          const isUserChoice = qResult?.userAns === opt.id;
                          const isCorrectKey = opt.correct;

                          let containerStyle = 'border-slate-200 bg-white text-slate-700';
                          if (isCorrectKey) {
                            containerStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold';
                          } else if (isUserChoice && !isCorrectKey) {
                            containerStyle = 'border-rose-400 bg-rose-50 text-rose-900 line-through';
                          }

                          return (
                            <div
                              key={opt.id}
                              className={`p-4 rounded-xl border-2 flex items-start gap-3 transition-all ${containerStyle}`}
                            >
                              <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                                isCorrectKey
                                  ? 'bg-emerald-600 text-white'
                                  : isUserChoice
                                  ? 'bg-rose-600 text-white'
                                  : 'bg-slate-100 text-slate-700'
                              }`}>
                                {opt.id.toUpperCase()}
                              </span>
                              <div className="flex-1 text-sm sm:text-base pt-0.5">
                                <MathMarkdown content={opt.text} />
                              </div>
                              {isCorrectKey && (
                                <span className="bg-emerald-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-md self-center">
                                  Kunci Jawaban
                                </span>
                              )}
                              {isUserChoice && !isCorrectKey && (
                                <span className="bg-rose-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-md self-center">
                                  Pilihan Anda
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {targetQ.type === 'checkboxes' && targetQ.options && (
                      <div className="space-y-2.5">
                        {targetQ.options.map((opt) => {
                          const userSelections: string[] = Array.isArray(qResult?.userAns) ? qResult.userAns : [];
                          const isUserSelected = userSelections.includes(opt.id);
                          const isCorrectKey = opt.correct;

                          let style = 'border-slate-200 bg-white text-slate-700';
                          if (isCorrectKey && isUserSelected) {
                            style = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold';
                          } else if (isCorrectKey && !isUserSelected) {
                            style = 'border-emerald-400 bg-emerald-50/60 text-emerald-900 border-dashed';
                          } else if (!isCorrectKey && isUserSelected) {
                            style = 'border-rose-400 bg-rose-50 text-rose-900';
                          }

                          return (
                            <div
                              key={opt.id}
                              className={`p-4 rounded-xl border-2 flex items-start gap-3 transition-all ${style}`}
                            >
                              <div className={`w-5 h-5 rounded mt-0.5 flex items-center justify-center text-xs font-black ${
                                isCorrectKey
                                  ? 'bg-emerald-600 text-white'
                                  : isUserSelected
                                  ? 'bg-rose-600 text-white'
                                  : 'border border-slate-300'
                              }`}>
                                {isCorrectKey ? '✓' : isUserSelected ? '✕' : ''}
                              </div>
                              <div className="flex-1 text-sm sm:text-base">
                                <MathMarkdown content={opt.text} />
                              </div>
                              {isCorrectKey && (
                                <span className="bg-emerald-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-md self-center">
                                  Kunci Sesuai
                                </span>
                              )}
                              {isUserSelected && !isCorrectKey && (
                                <span className="bg-rose-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-md self-center">
                                  Pilihan Anda (Salah)
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {targetQ.type === 'tepat-table' && targetQ.statements && (
                      <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                        <table className="w-full text-left text-sm">
                          <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                            <tr>
                              <th className="p-4 w-12 text-center">No</th>
                              <th className="p-4">Pernyataan Evaluasi</th>
                              <th className="p-4 w-28 text-center">Kunci</th>
                              <th className="p-4 w-32 text-center">Jawaban Anda</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200 bg-white">
                            {targetQ.statements.map((stmt, sIdx) => {
                              const userTableAns = qResult?.userAns || {};
                              const userVal = userTableAns[stmt.id];
                              const isStmtMatch = userVal === stmt.correct;

                              return (
                                <tr key={stmt.id} className="hover:bg-slate-50/70">
                                  <td className="p-4 text-center font-bold text-slate-500">{sIdx + 1}</td>
                                  <td className="p-4 text-slate-800 font-medium">
                                    <MathMarkdown content={stmt.text} />
                                  </td>
                                  <td className="p-4 text-center">
                                    <span className={`px-3 py-1 rounded-full text-xs font-black ${
                                      stmt.correct 
                                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                                        : 'bg-rose-100 text-rose-800 border border-rose-300'
                                    }`}>
                                      {stmt.correct ? 'Benar' : 'Salah'}
                                    </span>
                                  </td>
                                  <td className="p-4 text-center">
                                    {userVal !== undefined ? (
                                      <span className={`px-3 py-1 rounded-full text-xs font-black inline-flex items-center gap-1 ${
                                        isStmtMatch
                                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                          : 'bg-rose-100 text-rose-800 border border-rose-300'
                                      }`}>
                                        {isStmtMatch ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                                        {userVal ? 'Benar' : 'Salah'}
                                      </span>
                                    ) : (
                                      <span className="text-xs text-slate-400 font-medium italic">Tidak dijawab</span>
                                    )}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Official Discussion Box */}
                    <div className="bg-gradient-to-br from-teal-50/90 to-emerald-50/70 border-2 border-teal-200 rounded-2xl p-5 sm:p-6 space-y-3">
                      <div className="flex items-center gap-2 text-teal-800 font-extrabold text-sm sm:text-base">
                        <Sparkles className="w-5 h-5 text-teal-600" />
                        <span>Pembahasan Analitis & Konsep Geografi:</span>
                      </div>
                      <div className="text-slate-800 text-sm sm:text-base leading-relaxed">
                        <MathMarkdown content={targetQ.discussion} />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="p-8 text-center text-slate-500 font-medium">
                    Tidak ada soal pada kategori filter ini.
                  </div>
                )}
              </div>

              {/* Modal Footer Navigation */}
              <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/80 flex items-center justify-between">
                <button
                  disabled={pembahasanIdx === 0}
                  onClick={() => setPembahasanIdx(prev => Math.max(0, prev - 1))}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs sm:text-sm hover:bg-slate-200/70 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Soal Sebelumnya</span>
                </button>

                <span className="text-xs sm:text-sm font-extrabold text-slate-600">
                  {pembahasanIdx + 1} dari {filteredQuestions.length} Soal
                </span>

                <button
                  disabled={pembahasanIdx === filteredQuestions.length - 1}
                  onClick={() => setPembahasanIdx(prev => Math.min(filteredQuestions.length - 1, prev + 1))}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-md shadow-teal-500/20"
                >
                  <span>Soal Selanjutnya</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        )}
      </div>
    );
  }

  // =========================================================================
  // CBT QUESTION SOLVING VIEW (DURING EXAM)
  // =========================================================================
  return (
    <div className="space-y-4 max-w-5xl mx-auto pb-10">
      {/* Top Header Card */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-sm flex flex-wrap items-center justify-between gap-4 sticky top-16 z-20 backdrop-blur-md bg-white/95">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            title="Keluar ke Menu Utama"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-teal-100 text-teal-800 text-[11px] font-black px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                CBT TKA GEOGRAFI
              </span>
              <span className="text-xs text-slate-400 font-medium">10 Soal</span>
            </div>
            <h2 className="text-base sm:text-lg font-black text-slate-800 line-clamp-1">
              {currentQ.topic}
            </h2>
          </div>
        </div>

        {/* Timer, Fullscreen, and Finish Controls */}
        <div className="flex items-center gap-3">
          {/* Timer Display */}
          <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono font-black text-sm border ${
            timeLeft < 300 
              ? 'bg-rose-50 border-rose-300 text-rose-600 animate-pulse' 
              : 'bg-slate-50 border-slate-200 text-slate-700'
          }`}>
            <Clock className="w-4 h-4 text-teal-600" />
            <span>{formatTime(timeLeft)}</span>
          </div>

          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer hidden sm:block"
            title={isFullscreen ? 'Keluar Fullscreen' : 'Layar Penuh'}
          >
            {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setShowConfirmModal(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-black text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-md shadow-teal-500/20 transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Selesai</span>
          </button>
        </div>
      </div>

      {/* Main Question Body & Navigator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        
        {/* Left 2 Cols: Question Card */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            
            {/* Question Subheader */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="text-xs font-black text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Soal No. {currentQ.number} dari {geografiTryoutData.length}
              </span>

              <button
                onClick={toggleDoubt}
                className={`flex items-center gap-1.5 text-xs font-black px-3 py-1 rounded-full border transition-all cursor-pointer ${
                  doubtStatus[currentQ.id]
                    ? 'bg-amber-400 text-amber-950 border-amber-500 shadow-sm'
                    : 'bg-slate-50 text-slate-600 border-slate-300 hover:bg-amber-50'
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>{doubtStatus[currentQ.id] ? 'Ragu-ragu ✓' : 'Ragu-ragu?'}</span>
              </button>
            </div>

            {/* Stimulus Context Box */}
            {currentQ.stimulus && (
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 sm:p-5 text-slate-800 text-sm sm:text-base leading-relaxed font-serif">
                <div className="text-xs font-bold text-amber-800 mb-1 uppercase tracking-wider">
                  Konteks / Stimulus Soal:
                </div>
                <MathMarkdown content={currentQ.stimulus} />
              </div>
            )}

            {/* Question Text */}
            <div className="text-slate-900 font-semibold text-base sm:text-lg leading-relaxed">
              <MathMarkdown content={currentQ.text} />
            </div>

            {/* Answer Input Controls */}
            {currentQ.type === 'multiple' && currentQ.options && (
              <div className="space-y-3 pt-2">
                {currentQ.options.map((opt) => {
                  const isSelected = answers[currentQ.id] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectRadio(currentQ.id, opt.id)}
                      className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-start gap-3 cursor-pointer ${
                        isSelected
                          ? 'border-teal-600 bg-teal-50/60 shadow-sm'
                          : 'border-slate-200 hover:border-teal-300 hover:bg-slate-50/50 bg-white'
                      }`}
                    >
                      <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs shrink-0 transition-colors ${
                        isSelected ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {opt.id.toUpperCase()}
                      </span>
                      <div className="flex-1 text-sm sm:text-base pt-0.5 text-slate-800 font-medium">
                        <MathMarkdown content={opt.text} />
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {currentQ.type === 'checkboxes' && currentQ.options && (
              <div className="space-y-3 pt-2">
                <div className="text-xs text-slate-500 font-bold bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 inline-block">
                  Pilihlah satu atau lebih pilihan yang paling sesuai:
                </div>
                {currentQ.options.map((opt) => {
                  const currentSelected: string[] = Array.isArray(answers[currentQ.id]) ? answers[currentQ.id] : [];
                  const isChecked = currentSelected.includes(opt.id);

                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleToggleCheckbox(currentQ.id, opt.id)}
                      className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-start gap-3 cursor-pointer ${
                        isChecked
                          ? 'border-teal-600 bg-teal-50/60 shadow-sm'
                          : 'border-slate-200 hover:border-teal-300 hover:bg-slate-50/50 bg-white'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded mt-0.5 flex items-center justify-center text-xs font-black transition-colors ${
                        isChecked ? 'bg-teal-600 text-white' : 'border border-slate-400 bg-white'
                      }`}>
                        {isChecked ? '✓' : ''}
                      </div>
                      <div className="flex-1 text-sm sm:text-base text-slate-800 font-medium">
                        <MathMarkdown content={opt.text} />
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {currentQ.type === 'tepat-table' && currentQ.statements && (
              <div className="space-y-3 pt-2 overflow-x-auto">
                <div className="text-xs text-slate-500 font-bold bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 inline-block mb-1">
                  Tentukan status kebenaran masing-masing pernyataan:
                </div>
                <table className="w-full text-left text-sm border border-slate-200 rounded-2xl overflow-hidden">
                  <thead className="bg-slate-100 text-slate-700 font-extrabold border-b border-slate-200">
                    <tr>
                      <th className="p-4 w-12 text-center">No</th>
                      <th className="p-4">Pernyataan</th>
                      <th className="p-4 w-28 text-center">Benar</th>
                      <th className="p-4 w-28 text-center">Salah</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {currentQ.statements.map((stmt, sIdx) => {
                      const stmtAnswers = answers[currentQ.id] || {};
                      const val = stmtAnswers[stmt.id];

                      return (
                        <tr key={stmt.id} className="hover:bg-slate-50/70">
                          <td className="p-4 text-center font-bold text-slate-500">{sIdx + 1}</td>
                          <td className="p-4 text-slate-800 font-medium">
                            <MathMarkdown content={stmt.text} />
                          </td>
                          <td className="p-4 text-center">
                            <input
                              type="radio"
                              name={`stmt-${currentQ.id}-${stmt.id}`}
                              checked={val === true}
                              onChange={() => handleSelectTableStatement(currentQ.id, stmt.id, true)}
                              className="w-5 h-5 text-teal-600 focus:ring-teal-500 cursor-pointer"
                            />
                          </td>
                          <td className="p-4 text-center">
                            <input
                              type="radio"
                              name={`stmt-${currentQ.id}-${stmt.id}`}
                              checked={val === false}
                              onChange={() => handleSelectTableStatement(currentQ.id, stmt.id, false)}
                              className="w-5 h-5 text-rose-600 focus:ring-rose-500 cursor-pointer"
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}

            {/* Bottom Question Navigation Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
              <button
                disabled={currentIdx === 0}
                onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Sebelumnya</span>
              </button>

              <button
                disabled={currentIdx === geografiTryoutData.length - 1}
                onClick={() => setCurrentIdx(prev => Math.min(geografiTryoutData.length - 1, prev + 1))}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-md shadow-teal-500/20"
              >
                <span>Selanjutnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Right 1 Col: Number Sheet Navigator */}
        <div className="space-y-4">
          <div className="bg-white border border-slate-200/80 rounded-3xl p-5 sm:p-6 shadow-sm space-y-4">
            <h3 className="font-extrabold text-slate-800 text-sm sm:text-base border-b border-slate-100 pb-3 flex items-center justify-between">
              <span>Navigasi Nomor Soal</span>
              <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-md">
                10 Soal
              </span>
            </h3>

            {/* Legend */}
            <div className="grid grid-cols-3 gap-2 text-[11px] font-bold text-slate-600 pb-2 border-b border-slate-100">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-600"></span>
                <span>Terjawab</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                <span>Ragu-ragu</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-slate-200 border border-slate-300"></span>
                <span>Kosong</span>
              </div>
            </div>

            {/* Numbers Grid */}
            <div className="grid grid-cols-5 gap-2.5 pt-1">
              {geografiTryoutData.map((q, idx) => {
                const isCurrent = idx === currentIdx;
                const isDoubt = doubtStatus[q.id];
                const hasAnswer = answers[q.id] !== undefined && 
                  (typeof answers[q.id] === 'object' ? Object.keys(answers[q.id]).length > 0 : true);

                let colorStyle = 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200';
                if (isDoubt) {
                  colorStyle = 'bg-amber-400 text-amber-950 font-black border-amber-500 shadow-sm';
                } else if (hasAnswer) {
                  colorStyle = 'bg-emerald-600 text-white font-black border-emerald-700 shadow-sm';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIdx(idx)}
                    className={`h-11 rounded-xl font-bold text-sm flex items-center justify-center border transition-all cursor-pointer ${colorStyle} ${
                      isCurrent ? 'ring-2 ring-teal-500 ring-offset-2 scale-105' : ''
                    }`}
                  >
                    {q.number}
                  </button>
                );
              })}
            </div>

            <div className="pt-3">
              <button
                onClick={() => setShowConfirmModal(true)}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-black text-sm shadow-md shadow-teal-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Kumpulkan Jawaban</span>
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100 space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mx-auto">
              <AlertCircle className="w-8 h-8" />
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-xl font-black text-slate-800">
                Kumpulkan Ujian CBT?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Pastikan Anda telah memeriksa semua jawaban. Setelah dikumpulkan, skor dan analisis akan langsung dihitung.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl space-y-2 text-xs font-semibold text-slate-600">
              <div className="flex justify-between">
                <span>Total Soal:</span>
                <span className="font-bold text-slate-800">{geografiTryoutData.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Soal Terjawab:</span>
                <span className="font-bold text-emerald-600">
                  {Object.keys(answers).filter(k => {
                    const val = answers[Number(k)];
                    return val !== undefined && (typeof val === 'object' ? Object.keys(val).length > 0 : true);
                  }).length}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Ditandai Ragu-ragu:</span>
                <span className="font-bold text-amber-600">
                  {Object.values(doubtStatus).filter(Boolean).length}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="py-3 px-4 rounded-xl border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Cek Kembali
              </button>
              <button
                onClick={handleSubmitExam}
                className="py-3 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-black text-sm shadow-md shadow-teal-500/20 transition-all cursor-pointer"
              >
                Ya, Kumpulkan
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
