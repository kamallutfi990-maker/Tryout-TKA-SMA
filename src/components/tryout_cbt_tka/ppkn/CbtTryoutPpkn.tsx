import React, { useState, useEffect, useMemo } from 'react';
import { ppknTryoutData, PpknQuestion } from './ppknTryoutData';
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

interface CbtTryoutPpknProps {
  onBack?: () => void;
}

export default function CbtTryoutPpkn({ onBack }: CbtTryoutPpknProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [flagged, setFlagged] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Separate Discussion Window State
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

  const currentQ = ppknTryoutData[currentIdx];

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
    if (currentIdx < ppknTryoutData.length - 1) setCurrentIdx(currentIdx + 1);
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

    ppknTryoutData.forEach(question => {
      const ans = answers[question.id];
      let isQuestionCorrect = false;

      if (question.type === 'multiple') {
        const correctOpt = question.options?.find(o => o.correct)?.id;
        if (ans === correctOpt) isQuestionCorrect = true;
      } else if (question.type === 'checkboxes') {
        const correctList = question.correctAnswer || [];
        if (Array.isArray(ans) && ans.length === correctList.length && ans.every(id => correctList.includes(id))) {
          isQuestionCorrect = true;
        }
      } else if (question.type === 'tepat-table') {
        let allCorrect = true;
        question.statements?.forEach(s => {
          if (ans?.[s.id] !== s.correct) allCorrect = false;
        });
        if (allCorrect && question.statements && question.statements.length > 0) isQuestionCorrect = true;
      }

      questionResults[question.id] = { isCorrect: isQuestionCorrect, userAns: ans };

      if (isQuestionCorrect) {
        correct++;
        strongTopics.add(question.topic);
      } else {
        weakTopics.add(question.topic);
      }
    });

    const total = ppknTryoutData.length;
    const wrong = total - correct;
    // Map to scale 200 - 1000
    const scaledScore = Math.round(200 + (correct / total) * 800);

    const report: CbtReportData = {
      title: 'Try Out CBT TKA: PPKn SMA (10 Soal Analisis Kebangsaan, Konstitusi & Dinamika Demokrasi)',
      subject: 'PPKn (PKn)',
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

    return { correct, wrong, total, scaledScore, report, questionResults };
  }, [answers, timeLeft]);

  // Is Answered Check
  const isQuestionAnswered = (q: PpknQuestion) => {
    const ans = answers[q.id];
    if (ans === undefined || ans === null) return false;
    if (q.type === 'multiple') return typeof ans === 'string';
    if (q.type === 'checkboxes') return Array.isArray(ans) && ans.length > 0;
    if (q.type === 'tepat-table') {
      if (!ans || typeof ans !== 'object') return false;
      return (q.statements || []).every(s => ans[s.id] !== undefined);
    }
    return false;
  };

  const answeredCount = ppknTryoutData.filter(isQuestionAnswered).length;

  // Render Post-Submission Screen
  if (submitted) {
    return (
      <div id="cbt-ppkn-result-screen" className="space-y-6 animate-fadeIn pb-12 font-sans">
        {/* Result Header Top Bar */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold bg-blue-50 text-blue-700 border border-blue-100">
              <Award className="w-3.5 h-3.5 text-blue-600" /> Hasil Try Out Resmi TKA PPKn SMA
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Simulasi Ujian Telah Selesai
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Hasil skor IRT dan performa analisis per butir soal Anda telah dikalkulasi secara otomatis.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                setSubmitted(false);
                setTimeLeft(30 * 60);
                setAnswers({});
                setFlagged([]);
                setCurrentIdx(0);
              }}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Ulangi Simulasi
            </button>

            <button
              onClick={() => {
                setIsPembahasanWindowOpen(true);
                setPembahasanIdx(0);
              }}
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-blue-100" />
              Buka Jendela Pembahasan (10 Soal)
            </button>

            {onBack && (
              <button
                onClick={onBack}
                className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-all cursor-pointer"
              >
                Kembali ke Dashboard
              </button>
            )}
          </div>
        </div>

        {/* Cbt Analysis Report Component */}
        <CbtAnalysisReport report={evaluation.report} onClose={onBack} />

        {/* SEPARATE INTERACTIVE DISCUSSION WINDOW (MODAL / SCREEN) */}
        {isPembahasanWindowOpen && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn">
            <div className="bg-white w-full max-w-5xl rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
              
              {/* Discussion Window Header */}
              <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-inner">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm sm:text-base leading-snug">
                      Jendela Pembahasan Interaktif: TKA PPKn (PKn)
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      Uraian kunci resmi, langkah analisis metodologis, dan status jawaban Anda
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
                        Semua ({ppknTryoutData.length})
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
                    {ppknTryoutData.map((q, idx) => {
                      const isCorrect = evaluation.questionResults[q.id]?.isCorrect;
                      const isCurrent = pembahasanIdx === idx;

                      if (pembahasanFilter === 'correct' && !isCorrect) return null;
                      if (pembahasanFilter === 'wrong' && isCorrect) return null;

                      return (
                        <button
                          key={q.id}
                          onClick={() => setPembahasanIdx(idx)}
                          className={`w-9 h-9 rounded-xl font-black text-xs transition-all flex items-center justify-center cursor-pointer shadow-sm relative ${
                            isCurrent
                              ? 'ring-2 ring-blue-600 ring-offset-2 scale-105 z-10'
                              : 'hover:scale-105'
                          } ${
                            isCorrect
                              ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                              : 'bg-red-500 text-white hover:bg-red-600'
                          }`}
                        >
                          {q.number}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Active Question Discussion Detail */}
                {(() => {
                  const targetQ = ppknTryoutData[pembahasanIdx];
                  const qResult = evaluation.questionResults[targetQ.id];
                  const isCorrect = qResult?.isCorrect;

                  return (
                    <div className="space-y-6">
                      
                      {/* Question Meta Badge & Status */}
                      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
                        <div className="flex items-center gap-2">
                          <span className="w-8 h-8 rounded-xl bg-slate-900 text-white font-black text-sm flex items-center justify-center">
                            #{targetQ.number}
                          </span>
                          <span className="font-extrabold text-sm text-slate-800">
                            {targetQ.topic}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          {isCorrect ? (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Jawaban Anda Tepat (+100)
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-red-50 text-red-700 border border-red-200">
                              <XCircle className="w-3.5 h-3.5 text-red-600" /> Jawaban Anda Kurang Tepat
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Stimulus Box */}
                      {targetQ.stimulus && (
                        <div className="p-4 sm:p-5 bg-amber-50/70 border border-amber-200/70 rounded-2xl space-y-1.5">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-800 bg-amber-200/60 px-2 py-0.5 rounded">
                            Stimulus Soal
                          </span>
                          <div className="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans font-medium">
                            <MathMarkdown content={targetQ.stimulus} />
                          </div>
                        </div>
                      )}

                      {/* Question Text */}
                      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                        <p className="font-bold text-sm sm:text-base text-slate-900 leading-relaxed">
                          {targetQ.text}
                        </p>
                      </div>

                      {/* Question Answer Summary (Comparison) */}
                      {targetQ.type === 'multiple' && (
                        <div className="space-y-2.5">
                          <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                            Pilihan Jawaban & Verifikasi Kunci:
                          </h4>
                          <div className="space-y-2">
                            {targetQ.options?.map(opt => {
                              const isKey = opt.correct;
                              const isUserChosen = qResult?.userAns === opt.id;

                              let cardStyle = 'bg-white border-slate-200 text-slate-700';
                              if (isKey) cardStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold';
                              if (isUserChosen && !isKey) cardStyle = 'bg-red-50 border-red-300 text-red-950';

                              return (
                                <div
                                  key={opt.id}
                                  className={`p-3.5 rounded-2xl border flex items-start gap-3 text-xs sm:text-sm ${cardStyle}`}
                                >
                                  <span className={`w-6 h-6 rounded-lg font-black text-xs flex items-center justify-center shrink-0 ${
                                    isKey
                                      ? 'bg-emerald-600 text-white'
                                      : isUserChosen
                                      ? 'bg-red-600 text-white'
                                      : 'bg-slate-100 text-slate-600'
                                  }`}>
                                    {opt.id.toUpperCase()}
                                  </span>
                                  <div className="flex-1 pt-0.5">
                                    <MathMarkdown content={opt.text} />
                                  </div>
                                  {isKey && (
                                    <span className="text-[10px] font-extrabold bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded-full shrink-0">
                                      Kunci Resmi
                                    </span>
                                  )}
                                  {isUserChosen && (
                                    <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full shrink-0 ${
                                      isKey ? 'bg-emerald-100 text-emerald-800' : 'bg-red-200 text-red-900'
                                    }`}>
                                      Pilihan Anda
                                    </span>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {targetQ.type === 'checkboxes' && (
                        <div className="space-y-2.5">
                          <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                            Pilihan Ganda Kompleks (Centang Pilihan):
                          </h4>
                          <div className="space-y-2">
                            {targetQ.options?.map(opt => {
                              const isKey = opt.correct;
                              const isUserChosen = Array.isArray(qResult?.userAns) && qResult.userAns.includes(opt.id);

                              let cardStyle = 'bg-white border-slate-200 text-slate-700';
                              if (isKey) cardStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold';
                              if (isUserChosen && !isKey) cardStyle = 'bg-red-50 border-red-300 text-red-950';

                              return (
                                <div
                                  key={opt.id}
                                  className={`p-3.5 rounded-2xl border flex items-start gap-3 text-xs sm:text-sm ${cardStyle}`}
                                >
                                  <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                                    isUserChosen ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 bg-white'
                                  }`}>
                                    {isUserChosen && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                                  </div>
                                  <div className="flex-1">
                                    <MathMarkdown content={opt.text} />
                                  </div>
                                  {isKey && (
                                    <span className="text-[10px] font-extrabold bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded-full shrink-0">
                                      Kunci Resmi (Benar)
                                    </span>
                                  )}
                                  {isUserChosen && (
                                    <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full shrink-0 ${
                                      isKey ? 'bg-emerald-100 text-emerald-800' : 'bg-red-200 text-red-900'
                                    }`}>
                                      Pilihan Anda
                                    </span>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {targetQ.type === 'tepat-table' && (
                        <div className="space-y-2.5">
                          <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                            Tabel Pernyataan (Tepat / Tidak Tepat):
                          </h4>
                          <div className="overflow-x-auto rounded-2xl border border-slate-200">
                            <table className="w-full text-xs sm:text-sm">
                              <thead className="bg-slate-100 text-slate-700 font-extrabold text-[11px] uppercase tracking-wider">
                                <tr>
                                  <th className="p-3 text-left">Pernyataan Analisis</th>
                                  <th className="p-3 text-center w-24">Kunci Resmi</th>
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
                      <div className="bg-gradient-to-br from-blue-50/90 via-indigo-50/70 to-slate-50 border border-blue-200/80 rounded-3xl p-5 sm:p-6 space-y-3 shadow-sm">
                        <div className="flex items-center gap-2 text-blue-900 font-black text-sm">
                          <Sparkles className="w-4 h-4 text-blue-600" />
                          <span>Pembahasan & Analisis Guru Ahli</span>
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
                          className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer disabled:opacity-40"
                        >
                          <ChevronLeft className="w-4 h-4" /> Soal Sebelumnya
                        </button>

                        <span className="text-xs font-bold text-slate-500">
                          {pembahasanIdx + 1} dari {ppknTryoutData.length} Soal
                        </span>

                        <button
                          onClick={() => setPembahasanIdx(prev => Math.min(ppknTryoutData.length - 1, prev + 1))}
                          disabled={pembahasanIdx === ppknTryoutData.length - 1}
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer disabled:opacity-40"
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
        )}
      </div>
    );
  }

  // Active Exam Taking Screen
  return (
    <div
      id="cbt-ppkn-root"
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
              <span className="bg-blue-600 text-white font-extrabold px-2.5 py-0.5 rounded-lg">
                TKA PPKn (PKn)
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
                    <Maximize2 className="w-3.5 h-3.5 text-blue-400" />
                    <span className="hidden sm:inline">Layar Penuh</span>
                  </>
                )}
              </button>

              <div className={`flex items-center gap-2 border px-3 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold ${
                timeLeft < 180 ? 'bg-red-500/20 text-red-400 border-red-500/50 animate-pulse' : 'bg-slate-800 border-slate-700 text-blue-300'
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
                Soal Nomor <strong className="text-slate-900 font-bold text-sm">#{currentQ.number}</strong> dari <strong className="text-slate-900 font-bold">{ppknTryoutData.length}</strong>
              </span>
              <span className="bg-blue-50 text-blue-700 font-bold px-2.5 py-1 rounded-lg border border-blue-100">
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
                      type="button"
                      onClick={() => handleSelectRadio(currentQ.id, opt.id)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 group ${
                        isSelected
                          ? 'bg-blue-50/90 border-blue-500 shadow-sm ring-1 ring-blue-500/30'
                          : 'bg-white hover:bg-slate-50 border-slate-200/80'
                      }`}
                    >
                      <span className={`w-7 h-7 rounded-xl font-black text-xs flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-700'
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
                      <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isChecked
                          ? 'bg-blue-600 border-blue-600 text-white'
                          : 'border-slate-300 bg-white group-hover:border-blue-400'
                      }`}>
                        {isChecked && <Check className="w-4 h-4 stroke-[3]" />}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-800 pt-0.5 leading-relaxed font-medium">
                        <MathMarkdown content={opt.text} />
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* 3. Table Statement (Tepat / Tidak Tepat) */}
            {currentQ.type === 'tepat-table' && (
              <div className="space-y-3 pt-2">
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-xs sm:text-sm">
                    <thead className="bg-slate-100 text-slate-700 font-extrabold text-[11px] uppercase tracking-wider">
                      <tr>
                        <th className="p-3.5 text-left">Pernyataan Analisis</th>
                        <th className="p-3.5 text-center w-28">Tepat</th>
                        <th className="p-3.5 text-center w-28">Tidak Tepat</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {currentQ.statements?.map(stmt => {
                        const currentVal = answers[currentQ.id]?.[stmt.id];

                        return (
                          <tr key={stmt.id} className="hover:bg-slate-50/80">
                            <td className="p-4 text-slate-800 font-medium leading-relaxed">
                              <MathMarkdown content={stmt.text} />
                            </td>
                            <td className="p-4 text-center">
                              <button
                                type="button"
                                onClick={() => handleTableAnswer(currentQ.id, stmt.id, true)}
                                className={`w-8 h-8 rounded-xl font-black text-xs inline-flex items-center justify-center transition-all cursor-pointer ${
                                  currentVal === true
                                    ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-400 ring-offset-1'
                                    : 'bg-slate-100 hover:bg-emerald-50 text-slate-600 border border-slate-200'
                                }`}
                              >
                                {currentVal === true ? '✔' : ''}
                              </button>
                            </td>
                            <td className="p-4 text-center">
                              <button
                                type="button"
                                onClick={() => handleTableAnswer(currentQ.id, stmt.id, false)}
                                className={`w-8 h-8 rounded-xl font-black text-xs inline-flex items-center justify-center transition-all cursor-pointer ${
                                  currentVal === false
                                    ? 'bg-red-600 text-white shadow-sm ring-2 ring-red-400 ring-offset-1'
                                    : 'bg-slate-100 hover:bg-red-50 text-slate-600 border border-slate-200'
                                }`}
                              >
                                {currentVal === false ? '✔' : ''}
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

          {/* Bottom Action Footer */}
          <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentIdx === 0}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1.5 cursor-pointer disabled:opacity-40"
            >
              <ChevronLeft className="w-4 h-4" /> Sebelumnya
            </button>

            <button
              type="button"
              onClick={() => toggleFlag(currentQ.id)}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition-colors cursor-pointer ${
                flagged.includes(currentQ.id)
                  ? 'bg-amber-500 text-white shadow-sm'
                  : 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>{flagged.includes(currentQ.id) ? 'Ditandai Ragu' : 'Ragu-ragu'}</span>
            </button>

            {currentIdx < ppknTryoutData.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
              >
                Berikutnya <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setSubmitted(true)}
                className="px-5 py-2 rounded-xl text-xs font-extrabold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1.5 shadow-md hover:shadow-lg transition-all cursor-pointer animate-pulse"
              >
                Kumpulkan Ujian
              </button>
            )}
          </div>

        </div>

        {/* Sidebar Question Navigator (Right Side - 4 Cols) */}
        <div className="lg:col-span-4 space-y-4">
          
          <div className="bg-white rounded-3xl border border-slate-200/80 p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-extrabold text-slate-900 text-sm">Nomor Soal CBT</h3>
              <span className="text-xs font-bold text-slate-500">
                {answeredCount} / {ppknTryoutData.length} Terjawab
              </span>
            </div>

            {/* Grid Numbers */}
            <div className="grid grid-cols-5 gap-2.5">
              {ppknTryoutData.map((q, idx) => {
                const isAnswered = isQuestionAnswered(q);
                const isFlag = flagged.includes(q.id);
                const isCurrent = currentIdx === idx;

                let btnStyle = 'bg-slate-100 text-slate-600 hover:bg-slate-200 border-slate-200';
                if (isAnswered) btnStyle = 'bg-blue-600 text-white font-black shadow-sm';
                if (isFlag) btnStyle = 'bg-amber-500 text-white font-black shadow-sm';

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setCurrentIdx(idx)}
                    className={`h-10 rounded-2xl text-xs font-bold transition-all flex items-center justify-center cursor-pointer border relative ${btnStyle} ${
                      isCurrent ? 'ring-2 ring-blue-500 ring-offset-2 scale-105 z-10' : ''
                    }`}
                  >
                    {q.number}
                  </button>
                );
              })}
            </div>

            {/* Legends */}
            <div className="pt-3 border-t border-slate-100 grid grid-cols-3 gap-2 text-[10px] font-bold text-slate-500">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-blue-600 shrink-0" />
                <span>Terjawab</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-amber-500 shrink-0" />
                <span>Ragu-ragu</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-slate-200 shrink-0" />
                <span>Belum</span>
              </div>
            </div>

            {/* Quick Finish Button */}
            <button
              type="button"
              onClick={() => setSubmitted(true)}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-2xl shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
            >
              <CheckCircle2 className="w-4 h-4" /> Selesaikan & Kumpulkan
            </button>
          </div>

          {/* Quick Guidance Info Card */}
          <div className="bg-blue-50/70 border border-blue-100 rounded-3xl p-5 text-xs text-blue-900 space-y-2">
            <h4 className="font-extrabold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-600" /> Tips Pengerjaan TKA PPKn
            </h4>
            <p className="text-[11px] text-blue-800 leading-relaxed">
              Perhatikan kata kunci pada stimulus teks secara cermat, bedakan sumber primer dan sekunder, serta identifikasi kronologi peristiwa sejarah nasional dan konstitusi secara sistematis.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
