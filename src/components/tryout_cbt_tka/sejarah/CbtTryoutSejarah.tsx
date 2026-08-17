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
import { sejarahTryoutData, SejarahQuestion } from './sejarahTryoutData';
import MathMarkdown from '../../MathMarkdown';
import CbtAnalysisReport, { CbtReportData } from '../../CbtAnalysisReport';

interface CbtTryoutSejarahProps {
  onBack: () => void;
}

export default function CbtTryoutSejarah({ onBack }: CbtTryoutSejarahProps) {
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

  const currentQ: SejarahQuestion = sejarahTryoutData[currentIdx];

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

  // Handle table statement selection (Tepat / Tidak Tepat)
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

    sejarahTryoutData.forEach(question => {
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

    const total = sejarahTryoutData.length;
    const wrong = total - correct;
    const scaledScore = Math.round(200 + (correct / total) * 800);

    const report: CbtReportData = {
      title: 'Try Out CBT TKA: Sejarah SMA (10 Soal Analisis Peradaban & Perjuangan Bangsa)',
      subject: 'Sejarah',
      timestamp: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      score: scaledScore,
      correctCount: correct,
      wrongCount: wrong,
      totalQuestions: total,
      xpEarned: correct * 35,
      strongSubjects: Array.from(strongTopics),
      weakSubjects: Array.from(weakTopics),
      radarScores: {
        'Konsep Dasar & Metodologi Sejarah': Math.min(100, Math.round((correct / total) * 100)),
        'Tradisi & Akulturasi Kerajaan Islam': Math.min(100, Math.round((correct / total) * 95 + 5)),
        'Perlawanan Kedaerahan & Kolonialisme': Math.min(100, Math.round((correct / total) * 98 + 2)),
        'BPUPK, Proklamasi & Pembentukan Bangsa': Math.min(100, Math.round((correct / total) * 100)),
        'Dinamika Demokrasi & Reformasi 1998': Math.min(100, Math.round((correct / total) * 92 + 8))
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
  const filteredQuestions = sejarahTryoutData.filter(q => {
    if (pembahasanFilter === 'all') return true;
    const isCorr = evaluation.details[q.id]?.isCorrect;
    if (pembahasanFilter === 'correct') return isCorr;
    if (pembahasanFilter === 'wrong') return !isCorr;
    return true;
  });

  const targetQ = filteredQuestions[pembahasanIdx] || filteredQuestions[0] || sejarahTryoutData[0];
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
              <RotateCcw className="w-4 h-4 text-blue-600" />
              <span>Ulangi Try Out</span>
            </button>

            <button
              onClick={() => {
                setPembahasanFilter('all');
                setPembahasanIdx(0);
                setIsPembahasanWindowOpen(true);
              }}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-blue-500/20 transition-all cursor-pointer animate-pulse"
            >
              <BookOpen className="w-4 h-4" />
              <span>Buka Jendela Pembahasan (10 Soal)</span>
            </button>
          </div>
        </div>

        {/* CBT Report Analysis Component */}
        <CbtAnalysisReport 
          report={reportData} 
          onClose={onBack} 
        />

        {/* Separate Discussion Window Modal / Overlay */}
        {isPembahasanWindowOpen && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <div className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] animate-in fade-in zoom-in duration-200">
              
              {/* Header Bar */}
              <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-yellow-500 flex items-center justify-center text-white shadow-inner">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm sm:text-base leading-snug">
                      Jendela Pembahasan Interaktif: TKA Sejarah (10 Soal)
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      Uraian kunci resmi, metodologi analisis sejarah, dan evaluasi jawaban
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsPembahasanWindowOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  title="Tutup Jendela Pembahasan"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Discussion Body */}
              <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
                
                {/* Filter and Quick Navigator Bar */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-1.5 font-bold text-slate-700">
                      <Filter className="w-3.5 h-3.5 text-blue-600" />
                      <span>Filter Soal:</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5">
                      <button
                        onClick={() => setPembahasanFilter('all')}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          pembahasanFilter === 'all'
                            ? 'bg-slate-900 text-white shadow-sm'
                            : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                        }`}
                      >
                        Semua ({sejarahTryoutData.length})
                      </button>
                      <button
                        onClick={() => setPembahasanFilter('correct')}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                          pembahasanFilter === 'correct'
                            ? 'bg-emerald-600 text-white shadow-sm'
                            : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200'
                        }`}
                      >
                        <CheckCircle2 className="w-3 h-3" /> Benar ({evaluation.correct})
                      </button>
                      <button
                        onClick={() => setPembahasanFilter('wrong')}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                          pembahasanFilter === 'wrong'
                            ? 'bg-red-600 text-white shadow-sm'
                            : 'bg-red-50 text-red-700 hover:bg-red-100 border border-red-200'
                        }`}
                      >
                        <XCircle className="w-3 h-3" /> Salah / Kosong ({evaluation.wrong})
                      </button>
                    </div>
                  </div>

                  {/* Question Jumping Pills */}
                  <div className="pt-2 border-t border-slate-200/60 flex flex-wrap gap-2">
                    {filteredQuestions.map((q, idx) => {
                      const isCorrect = evaluation.details[q.id]?.isCorrect;
                      const isCurrentActive = targetQ.id === q.id;

                      return (
                        <button
                          key={q.id}
                          onClick={() => setPembahasanIdx(idx)}
                          className={`w-9 h-9 rounded-xl font-bold text-xs flex items-center justify-center transition-all cursor-pointer relative ${
                            isCurrentActive
                              ? 'ring-2 ring-blue-500 ring-offset-2 scale-105'
                              : 'hover:scale-105'
                          } ${
                            isCorrect 
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                              : 'bg-red-100 text-red-800 border border-red-300'
                          }`}
                        >
                          {q.number}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Selected Question Detail & Solution */}
                {targetQ && (
                  <div className="space-y-6">
                    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 space-y-4 shadow-sm">
                      
                      {/* Topic Badge & Status */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <span className="bg-slate-900 text-white text-xs font-black px-3 py-1 rounded-lg">
                            Soal No. {targetQ.number}
                          </span>
                          <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-lg">
                            {targetQ.topic}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          {qResult?.isCorrect ? (
                            <span className="flex items-center gap-1 text-xs font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Jawaban Anda Tepat (+100 IRT)
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 text-xs font-extrabold text-red-700 bg-red-50 px-3 py-1 rounded-lg border border-red-200">
                              <XCircle className="w-3.5 h-3.5" /> Jawaban Belum Tepat
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Stimulus Teks */}
                      {targetQ.stimulus && (
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 text-xs sm:text-sm leading-relaxed">
                          <div className="font-bold text-[11px] text-slate-500 uppercase tracking-wider mb-1">
                            Stimulus Bacaan:
                          </div>
                          <MathMarkdown content={targetQ.stimulus} />
                        </div>
                      )}

                      {/* Teks Pertanyaan */}
                      <div className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
                        <MathMarkdown content={targetQ.text} />
                      </div>

                      {/* Pilihan Ganda Standard */}
                      {targetQ.type === 'multiple' && (
                        <div className="space-y-2 pt-2">
                          {targetQ.options?.map(opt => {
                            const isUserPick = qResult?.userAns === opt.id;
                            const isOfficialKey = opt.correct;

                            let cardStyle = 'bg-slate-50 border-slate-200 text-slate-700';
                            if (isOfficialKey) {
                              cardStyle = 'bg-emerald-50/80 border-emerald-500 text-emerald-900 font-semibold ring-1 ring-emerald-500/20';
                            } else if (isUserPick && !isOfficialKey) {
                              cardStyle = 'bg-red-50 border-red-300 text-red-900';
                            }

                            return (
                              <div
                                key={opt.id}
                                className={`p-3.5 rounded-xl border flex items-start justify-between gap-3 text-xs sm:text-sm transition-all ${cardStyle}`}
                              >
                                <div className="flex items-start gap-2.5">
                                  <span className={`w-6 h-6 rounded-lg font-bold text-xs flex items-center justify-center shrink-0 ${
                                    isOfficialKey 
                                      ? 'bg-emerald-600 text-white' 
                                      : isUserPick 
                                        ? 'bg-red-600 text-white' 
                                        : 'bg-slate-200 text-slate-700'
                                  }`}>
                                    {opt.id.toUpperCase()}
                                  </span>
                                  <div className="pt-0.5 leading-relaxed">
                                    <MathMarkdown content={opt.text} />
                                  </div>
                                </div>

                                <div className="shrink-0 pt-0.5">
                                  {isOfficialKey && (
                                    <span className="text-[11px] bg-emerald-600 text-white font-extrabold px-2 py-0.5 rounded-md">
                                      Kunci Resmi
                                    </span>
                                  )}
                                  {isUserPick && !isOfficialKey && (
                                    <span className="text-[11px] bg-red-500 text-white font-bold px-2 py-0.5 rounded-md">
                                      Pilihan Anda
                                    </span>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {/* Pilihan Ganda Kompleks Checkbox */}
                      {targetQ.type === 'checkboxes' && (
                        <div className="space-y-2 pt-2">
                          <div className="text-xs font-bold text-blue-700 bg-blue-50 p-2.5 rounded-xl border border-blue-100">
                            💡 Format: Pilihan Ganda Kompleks (Dapat memilih lebih dari satu)
                          </div>
                          {targetQ.options?.map(opt => {
                            const userArr: string[] = Array.isArray(qResult?.userAns) ? qResult.userAns : [];
                            const isUserSelected = userArr.includes(opt.id);
                            const isCorrectOpt = opt.correct;

                            let optStyle = 'bg-slate-50 border-slate-200 text-slate-700';
                            if (isCorrectOpt) {
                              optStyle = 'bg-emerald-50/80 border-emerald-500 text-emerald-900 font-semibold ring-1 ring-emerald-500/20';
                            } else if (isUserSelected && !isCorrectOpt) {
                              optStyle = 'bg-red-50 border-red-300 text-red-900';
                            }

                            return (
                              <div
                                key={opt.id}
                                className={`p-3.5 rounded-xl border flex items-start justify-between gap-3 text-xs sm:text-sm ${optStyle}`}
                              >
                                <div className="flex items-start gap-2.5">
                                  <span className={`w-5 h-5 rounded-md font-bold text-xs flex items-center justify-center shrink-0 border ${
                                    isCorrectOpt
                                      ? 'bg-emerald-600 border-emerald-600 text-white'
                                      : isUserSelected
                                        ? 'bg-red-600 border-red-600 text-white'
                                        : 'bg-white border-slate-300 text-slate-500'
                                  }`}>
                                    {isCorrectOpt || isUserSelected ? '✓' : ''}
                                  </span>
                                  <div className="pt-0.5 leading-relaxed">
                                    <MathMarkdown content={opt.text} />
                                  </div>
                                </div>

                                <div className="shrink-0 pt-0.5">
                                  {isCorrectOpt && (
                                    <span className="text-[11px] bg-emerald-600 text-white font-extrabold px-2 py-0.5 rounded-md">
                                      Kunci
                                    </span>
                                  )}
                                  {isUserSelected && (
                                    <span className="text-[11px] bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded-md ml-1">
                                      Dipilih
                                    </span>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {/* Tabel Tepat / Tidak Tepat */}
                      {targetQ.type === 'tepat-table' && (
                        <div className="pt-2 space-y-3">
                          <div className="text-xs font-bold text-indigo-700 bg-indigo-50 p-2.5 rounded-xl border border-indigo-100">
                            💡 Format: Matriks Analisis Pernyataan (Tepat / Tidak Tepat)
                          </div>
                          
                          <div className="overflow-x-auto rounded-2xl border border-slate-200">
                            <table className="w-full text-left text-xs sm:text-sm">
                              <thead className="bg-slate-100 text-slate-700 font-extrabold uppercase text-[11px] border-b border-slate-200">
                                <tr>
                                  <th className="p-3">Pernyataan Analisis</th>
                                  <th className="p-3 text-center w-28">Kunci Resmi</th>
                                  <th className="p-3 text-center w-28">Pilihan Anda</th>
                                  <th className="p-3 text-center w-20">Hasil</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100">
                                {targetQ.statements?.map(stmt => {
                                  const userChoice = qResult?.userAns?.[stmt.id];
                                  const isStmtCorrect = userChoice === stmt.correct;

                                  return (
                                    <tr key={stmt.id} className="hover:bg-slate-50/70">
                                      <td className="p-3.5 text-slate-800 font-medium leading-relaxed">
                                        <MathMarkdown content={stmt.text} />
                                      </td>
                                      <td className="p-3.5 text-center">
                                        <span className={`px-2.5 py-1 rounded-lg text-xs font-black ${
                                          stmt.correct ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-700'
                                        }`}>
                                          {stmt.correct ? 'Tepat' : 'Tidak Tepat'}
                                        </span>
                                      </td>
                                      <td className="p-3.5 text-center font-bold">
                                        {userChoice !== undefined ? (
                                          <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                                            userChoice ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-600'
                                          }`}>
                                            {userChoice ? 'Tepat' : 'Tidak Tepat'}
                                          </span>
                                        ) : (
                                          <span className="text-slate-400 italic text-xs">Kosong</span>
                                        )}
                                      </td>
                                      <td className="p-3.5 text-center">
                                        {isStmtCorrect ? (
                                          <CheckCircle2 className="w-5 h-5 text-emerald-600 mx-auto" />
                                        ) : (
                                          <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                                        )}
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      {/* Official Discussion Box */}
                      <div className="bg-gradient-to-br from-yellow-50/90 via-amber-50/70 to-slate-50 border border-yellow-200/80 rounded-3xl p-5 sm:p-6 space-y-3 shadow-sm">
                        <div className="flex items-center gap-2 text-yellow-900 font-black text-sm">
                          <Sparkles className="w-4 h-4 text-yellow-600" />
                          <span>Pembahasan & Analisis Guru Ahli Sejarah</span>
                        </div>
                        <div className="text-xs sm:text-sm text-slate-800 leading-relaxed space-y-2">
                          <MathMarkdown content={targetQ.discussion} />
                        </div>
                      </div>

                      {/* Navigation between discussion items */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                        <button
                          onClick={() => setPembahasanIdx(prev => Math.max(0, prev - 1))}
                          disabled={pembahasanIdx === 0}
                          className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          <span>Sebelumnya</span>
                        </button>

                        <span className="text-xs font-bold text-slate-500">
                          {pembahasanIdx + 1} dari {filteredQuestions.length} Soal
                        </span>

                        <button
                          onClick={() => setPembahasanIdx(prev => Math.min(filteredQuestions.length - 1, prev + 1))}
                          disabled={pembahasanIdx === filteredQuestions.length - 1}
                          className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                        >
                          <span>Selanjutnya</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>

                    </div>
                  </div>
                )}

              </div>

              {/* Footer */}
              <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setIsPembahasanWindowOpen(false)}
                  className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  Tutup Pembahasan
                </button>
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
      id="cbt-sejarah-root"
      className={
        isFullscreen
          ? 'fixed inset-0 z-50 bg-slate-950 p-3 sm:p-6 overflow-y-auto flex flex-col space-y-4 text-slate-100 font-sans'
          : 'space-y-6 font-sans'
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
              <span className="bg-yellow-600 text-white font-extrabold px-2.5 py-0.5 rounded-lg">
                TKA Sejarah SMA
              </span>
              <span className="text-slate-300 font-semibold truncate max-w-[200px] sm:max-w-xs">
                Simulasi ANBK / TKA (10 Soal)
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
                    <Maximize2 className="w-3.5 h-3.5 text-yellow-400" />
                    <span className="hidden sm:inline">Layar Penuh</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={onBack}
                className="flex items-center gap-1 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Keluar</span>
              </button>
            </div>
          </div>

          {/* Question Meta Bar */}
          <div className="bg-slate-50 border-b border-slate-200/80 px-5 py-3 flex flex-wrap items-center justify-between gap-3 text-xs shrink-0">
            <div className="flex items-center gap-2">
              <span className="font-black text-slate-900 text-sm">
                Soal Nomor {currentQ.number}
              </span>
              <span className="text-slate-400">•</span>
              <span className="font-semibold text-slate-600 bg-white border border-slate-200 px-2.5 py-0.5 rounded-md">
                {currentQ.topic}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleDoubt}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  doubtStatus[currentQ.id]
                    ? 'bg-amber-500 text-white shadow-sm'
                    : 'bg-white text-amber-600 border border-amber-300 hover:bg-amber-50'
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>{doubtStatus[currentQ.id] ? 'Ragu-ragu ✓' : 'Tandai Ragu-ragu'}</span>
              </button>
            </div>
          </div>

          {/* Scrollable Question Content */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">
            
            {/* Stimulus Teks / Bacaan */}
            {currentQ.stimulus && (
              <div className="p-4 sm:p-5 bg-gradient-to-br from-yellow-50/50 via-slate-50 to-white rounded-2xl border border-yellow-200/70 text-slate-800 text-xs sm:text-sm leading-relaxed shadow-xs">
                <div className="flex items-center gap-1.5 text-yellow-800 font-extrabold text-[11px] uppercase tracking-wider mb-2">
                  <span>📜 Stimulus Teks Sejarah:</span>
                </div>
                <div className="leading-relaxed text-slate-800">
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
                      type="button"
                      onClick={() => handleSelectRadio(currentQ.id, opt.id)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 group ${
                        isSelected
                          ? 'bg-yellow-50/90 border-yellow-500 shadow-sm ring-1 ring-yellow-500/30'
                          : 'bg-white hover:bg-slate-50 border-slate-200/80'
                      }`}
                    >
                      <span className={`w-7 h-7 rounded-xl font-black text-xs flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-yellow-600 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-600 group-hover:bg-yellow-100 group-hover:text-yellow-700'
                      }`}>
                        {opt.id.toUpperCase()}
                      </span>
                      <div className="text-xs sm:text-sm text-slate-800 pt-0.5 leading-relaxed font-medium">
                        <MathMarkdown content={opt.text} />
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* 2. Checkboxes (Pilihan Ganda Kompleks) */}
            {currentQ.type === 'checkboxes' && (
              <div className="space-y-3 pt-2">
                <div className="text-xs font-extrabold text-blue-700 bg-blue-50 p-3 rounded-xl border border-blue-100">
                  💡 <strong>Pilihan Ganda Kompleks:</strong> Anda dapat mencentang lebih dari satu jawaban yang benar.
                </div>
                {currentQ.options?.map(opt => {
                  const currentSelectedList: string[] = Array.isArray(answers[currentQ.id]) ? answers[currentQ.id] : [];
                  const isChecked = currentSelectedList.includes(opt.id);

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleToggleCheckbox(currentQ.id, opt.id)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 group ${
                        isChecked
                          ? 'bg-blue-50/90 border-blue-500 shadow-sm ring-1 ring-blue-500/30'
                          : 'bg-white hover:bg-slate-50 border-slate-200/80'
                      }`}
                    >
                      <span className={`w-6 h-6 rounded-lg font-black text-xs flex items-center justify-center shrink-0 transition-colors border ${
                        isChecked
                          ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                          : 'bg-white border-slate-300 text-transparent group-hover:border-blue-400'
                      }`}>
                        {isChecked ? '✓' : ''}
                      </span>
                      <div className="text-xs sm:text-sm text-slate-800 pt-0.5 leading-relaxed font-medium">
                        <MathMarkdown content={opt.text} />
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* 3. Tepat / Tidak Tepat Matrix Table */}
            {currentQ.type === 'tepat-table' && (
              <div className="space-y-3 pt-2">
                <div className="text-xs font-extrabold text-indigo-700 bg-indigo-50 p-3 rounded-xl border border-indigo-100">
                  💡 <strong>Matriks Analisis Pernyataan:</strong> Pilihlah status <em>Tepat</em> atau <em>Tidak Tepat</em> untuk setiap butir pernyataan di bawah ini.
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-100 text-slate-700 font-extrabold uppercase text-[11px] border-b border-slate-200">
                      <tr>
                        <th className="p-3.5">Pernyataan Analisis Sejarah</th>
                        <th className="p-3.5 text-center w-28">Tepat</th>
                        <th className="p-3.5 text-center w-28">Tidak Tepat</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {currentQ.statements?.map(stmt => {
                        const userVal = answers[currentQ.id]?.[stmt.id];

                        return (
                          <tr key={stmt.id} className="hover:bg-slate-50/70 transition-colors">
                            <td className="p-3.5 text-slate-800 font-medium leading-relaxed">
                              <MathMarkdown content={stmt.text} />
                            </td>
                            <td className="p-3.5 text-center">
                              <button
                                type="button"
                                onClick={() => handleSelectTableStatement(currentQ.id, stmt.id, true)}
                                className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                                  userVal === true
                                    ? 'bg-emerald-600 text-white shadow-sm'
                                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                                }`}
                              >
                                {userVal === true ? '✓ Tepat' : 'Tepat'}
                              </button>
                            </td>
                            <td className="p-3.5 text-center">
                              <button
                                type="button"
                                onClick={() => handleSelectTableStatement(currentQ.id, stmt.id, false)}
                                className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                                  userVal === false
                                    ? 'bg-red-600 text-white shadow-sm'
                                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                                }`}
                              >
                                {userVal === false ? '✓ Tidak Tepat' : 'Tidak Tepat'}
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>

          {/* Bottom Action Navigator */}
          <div className="bg-slate-50 border-t border-slate-200/80 px-5 py-4 flex items-center justify-between gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
              disabled={currentIdx === 0}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Sebelumnya</span>
            </button>

            <div className="flex items-center gap-2">
              {currentIdx === sejarahTryoutData.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setShowConfirmModal(true)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-black text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transition-all cursor-pointer shadow-md shadow-emerald-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Kumpulkan Ujian</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setCurrentIdx(prev => Math.min(sejarahTryoutData.length - 1, prev + 1))}
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all cursor-pointer shadow-sm"
                >
                  <span>Selanjutnya</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Sidebar Status & Question Grid (Right Side - 4 Cols) */}
        <div className="lg:col-span-4 space-y-5">
          
          {/* Timer Card */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
              <span>SISA WAKTU UJIAN</span>
              <Clock className="w-4 h-4 text-yellow-600" />
            </div>

            <div className="flex items-baseline justify-center gap-1 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-mono">
              <span>{formatTime(timeLeft)}</span>
            </div>

            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-yellow-500 h-full transition-all duration-1000"
                style={{ width: `${(timeLeft / (30 * 60)) * 100}%` }}
              />
            </div>
          </div>

          {/* Quick Number Navigator */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-extrabold text-sm text-slate-900">Nomor Soal</h4>
              <span className="text-xs text-slate-500 font-bold">
                {Object.keys(answers).length} / {sejarahTryoutData.length} Terjawab
              </span>
            </div>

            {/* Grid Pills */}
            <div className="grid grid-cols-5 gap-2.5">
              {sejarahTryoutData.map((q, idx) => {
                const isAnswered = answers[q.id] !== undefined;
                const isDoubt = doubtStatus[q.id];
                const isCurrent = idx === currentIdx;

                let btnBg = 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50';
                if (isCurrent) {
                  btnBg = 'ring-2 ring-yellow-500 ring-offset-2 bg-yellow-50 border-yellow-400 text-yellow-900 font-black';
                } else if (isDoubt) {
                  btnBg = 'bg-amber-500 text-white border-amber-600 font-bold';
                } else if (isAnswered) {
                  btnBg = 'bg-emerald-600 text-white border-emerald-700 font-bold';
                }

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setCurrentIdx(idx)}
                    className={`h-11 rounded-2xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center relative ${btnBg}`}
                  >
                    {q.number}
                    {isDoubt && (
                      <span className="w-2 h-2 rounded-full bg-white absolute top-1 right-1" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="pt-3 border-t border-slate-100 grid grid-cols-3 gap-2 text-[11px] text-slate-600">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-md bg-emerald-600 inline-block" />
                <span>Terjawab</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-md bg-amber-500 inline-block" />
                <span>Ragu-ragu</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-md bg-white border border-slate-300 inline-block" />
                <span>Belum</span>
              </div>
            </div>

            {/* Final Submit Button */}
            <button
              type="button"
              onClick={() => setShowConfirmModal(true)}
              className="w-full mt-2 py-3 rounded-2xl bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-yellow-600/20 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Selesai & Kumpulkan Ujian</span>
            </button>
          </div>

          {/* Exam Tips Card */}
          <div className="bg-gradient-to-br from-yellow-500 to-amber-600 text-white rounded-3xl p-5 shadow-sm space-y-2">
            <div className="flex items-center gap-2 font-black text-xs sm:text-sm">
              <Sparkles className="w-4 h-4 text-yellow-200" />
              <span>Tips TKA Sejarah SMA</span>
            </div>
            <p className="text-xs text-yellow-50 leading-relaxed font-medium">
              Cermati stimulus teks secara analitis, bedakan antara sumber primer dan sekunder, serta perhatikan keterkaitan kausalitas antarperistiwa sejarah nasional dan perjuangan bangsa.
            </p>
          </div>

        </div>

      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-5 text-slate-800 shadow-2xl border border-slate-200 animate-in fade-in zoom-in duration-150">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-lg font-black text-slate-900">
                Konfirmasi Kumpulkan Ujian?
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Anda telah menjawab <strong className="text-slate-800">{Object.keys(answers).length}</strong> dari <strong>{sejarahTryoutData.length}</strong> butir soal. Apakah Anda yakin ingin mengakhiri sesi ujian ini?
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Batal & Lanjutkan
              </button>
              <button
                type="button"
                onClick={handleSubmitExam}
                className="py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors cursor-pointer"
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
