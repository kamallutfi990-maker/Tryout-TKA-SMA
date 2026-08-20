import React, { useState, useEffect, useMemo } from 'react';
import { UtbkQuestion } from './types';
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
  Send,
  AlertTriangle,
  FileText
} from 'lucide-react';

interface CbtTryoutUtbkBaseProps {
  title: string;
  subject: string;
  subtestGroup: string;
  durationMinutes: number;
  passingGrade?: number;
  questions: UtbkQuestion[];
  getTopic?: (question: UtbkQuestion) => string;
  onBack?: () => void;
}

export default function CbtTryoutUtbkBase({
  title,
  subject,
  subtestGroup,
  durationMinutes,
  passingGrade = 650,
  questions,
  getTopic,
  onBack
}: CbtTryoutUtbkBaseProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [flagged, setFlagged] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showHtmlModal, setShowHtmlModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState(durationMinutes * 60);
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

  const currentQ = questions[currentIdx] || questions[0];

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
    if (currentIdx < questions.length - 1) setCurrentIdx(currentIdx + 1);
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

  // Evaluation & Scoring Logic
  const evaluation = useMemo(() => {
    let correct = 0;
    const strongTopics = new Set<string>();
    const weakTopics = new Set<string>();
    const questionResults: Record<number, { isCorrect: boolean; userAns: any }> = {};

    questions.forEach(question => {
      const ans = answers[question.id];
      let isQuestionCorrect = false;

      if (question.type === 'multiple') {
        const correctOpt = question.options?.find(o => o.correct)?.id || question.correctAnswer;
        if (ans === correctOpt) isQuestionCorrect = true;
      } else if (question.type === 'multiple-complex') {
        const correctKeys: string[] = Array.isArray(question.correctAnswer)
          ? question.correctAnswer
          : question.options?.filter(o => o.correct).map(o => o.id) || [];
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
        if (allCorrect) isQuestionCorrect = true;
      }

      const topicName = question.topic || (getTopic ? getTopic(question) : subject);

      if (isQuestionCorrect) {
        correct++;
        strongTopics.add(topicName);
      } else {
        weakTopics.add(topicName);
      }

      questionResults[question.id] = {
        isCorrect: isQuestionCorrect,
        userAns: ans
      };
    });

    const total = questions.length;
    const wrong = Math.max(0, total - correct);
    const scaledScore = total > 0 ? Math.round(200 + (correct / total) * 800) : 200;

    const report: CbtReportData = {
      title,
      subject,
      score: scaledScore,
      correctCount: correct,
      wrongCount: wrong,
      totalQuestions: total,
      targetPTN: 'Universitas Indonesia / Institut Teknologi Bandung / UGM',
      targetProdi: 'Saintek & Soshum Unggulan Nasional',
      keketatan: 'Keketatan Sangat Kompetitif (Top 5% Nasional)',
      strongSubjects: Array.from(strongTopics),
      weakSubjects: Array.from(weakTopics),
      radarScores: {
        'Akurasi & Ketelitian': total > 0 ? Math.min(100, Math.round((correct / total) * 96 + 4)) : 0,
        'Kecepatan & Manajemen Waktu': total > 0 ? Math.min(100, Math.round((correct / total) * 90 + 10)) : 0,
        'Pemahaman Konsep & HOTS': total > 0 ? Math.min(100, Math.round((correct / total) * 94 + 6)) : 0,
        'Daya Tahan Penalaran': total > 0 ? Math.min(100, Math.round((correct / total) * 92 + 8)) : 0,
      },
      xpEarned: correct * 25 + 50
    };

    return {
      correct,
      wrong,
      scaledScore,
      report,
      questionResults
    };
  }, [answers, questions, durationMinutes, timeLeft, title, subject, subtestGroup, passingGrade, getTopic]);

  const answeredCount = Object.keys(answers).length;

  // Filtered Questions for Discussion Window
  const filteredPembahasanQuestions = useMemo(() => {
    return questions.filter(q => {
      const res = evaluation.questionResults[q.id];
      if (pembahasanFilter === 'correct') return res?.isCorrect;
      if (pembahasanFilter === 'wrong') return !res?.isCorrect;
      if (pembahasanFilter === 'flagged') return flagged.includes(q.id);
      return true;
    });
  }, [questions, evaluation.questionResults, pembahasanFilter, flagged]);

  const activePembahasanQ = filteredPembahasanQuestions[pembahasanIdx] || questions[0];
  const activePembahasanResult = evaluation.questionResults[activePembahasanQ?.id];

  // If submitted, show Analysis Report OR Interactive Discussion Window
  if (submitted) {
    return (
      <div className="space-y-6 animate-fadeIn pb-12">
        {/* Discussion Modal / Separate Window */}
        {isPembahasanWindowOpen && activePembahasanQ && (
          <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex flex-col justify-between overflow-hidden animate-fadeIn">
            {/* Pembahasan Top Bar */}
            <header className="bg-slate-900 text-white border-b border-slate-800 px-6 py-4 flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPembahasanWindowOpen(false)}
                  className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                  title="Kembali ke Hasil Nilai"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full font-black uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      Modul Pembahasan Interaktif UTBK Paket 3
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">{subject}</span>
                  </div>
                  <h2 className="text-base font-bold text-white mt-0.5">
                    Soal #{activePembahasanQ.id} • {activePembahasanQ.topic || (getTopic ? getTopic(activePembahasanQ) : subject)}
                  </h2>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => setShowHtmlModal(true)}
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <FileText className="w-4 h-4 text-blue-400" />
                  <span className="hidden sm:inline">Cetak Dokumen HTML</span>
                </button>
                <button
                  onClick={() => setIsPembahasanWindowOpen(false)}
                  className="p-2 rounded-xl bg-red-500/20 text-red-300 hover:bg-red-500/30 border border-red-500/30 transition-all cursor-pointer"
                  title="Tutup Jendela Pembahasan"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </header>

            {/* Pembahasan Main Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-slate-950/40">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Column: Question & Stimulus */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Reading / Stimulus Card */}
                  {activePembahasanQ.readingText && (
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
                      <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider border-b border-slate-800 pb-3">
                        <BookOpen className="w-4 h-4" />
                        Teks Stimulus & Wacana UTBK
                      </div>
                      <div className="text-slate-300 text-sm leading-relaxed prose-invert">
                        <MathMarkdown content={activePembahasanQ.readingText} />
                      </div>
                    </div>
                  )}

                  {/* Question Stem */}
                  <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black px-3 py-1 rounded-xl bg-blue-600/20 text-blue-300 border border-blue-500/30">
                        Pertanyaan Soal #{activePembahasanQ.id}
                      </span>
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-xl border flex items-center gap-1.5 ${
                          activePembahasanResult?.isCorrect
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                            : 'bg-red-500/20 text-red-300 border-red-500/30'
                        }`}
                      >
                        {activePembahasanResult?.isCorrect ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5" /> Jawaban Kamu Benar
                          </>
                        ) : (
                          <>
                            <XCircle className="w-3.5 h-3.5" /> Jawaban Kamu Kurang Tepat
                          </>
                        )}
                      </span>
                    </div>

                    <div className="text-white text-base font-semibold leading-relaxed">
                      <MathMarkdown content={activePembahasanQ.text} />
                    </div>

                    {/* Options Review */}
                    {activePembahasanQ.type === 'multiple' && activePembahasanQ.options && (
                      <div className="space-y-3 pt-2">
                        {activePembahasanQ.options.map(opt => {
                          const isUser = activePembahasanResult?.userAns === opt.id;
                          const isKey = opt.correct || opt.id === activePembahasanQ.correctAnswer;
                          let borderStyle = 'border-slate-800 bg-slate-950/60 text-slate-300';
                          if (isKey) borderStyle = 'border-emerald-500 bg-emerald-950/40 text-emerald-200';
                          else if (isUser && !isKey) borderStyle = 'border-red-500 bg-red-950/40 text-red-200';

                          return (
                            <div
                              key={opt.id}
                              className={`p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${borderStyle}`}
                            >
                              <span
                                className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                                  isKey
                                    ? 'bg-emerald-600 text-white'
                                    : isUser
                                    ? 'bg-red-600 text-white'
                                    : 'bg-slate-800 text-slate-400'
                                }`}
                              >
                                {opt.id}
                              </span>
                              <div className="flex-1 text-sm pt-0.5">
                                <MathMarkdown content={opt.text} />
                              </div>
                              {isKey && (
                                <span className="text-[11px] font-black px-2 py-0.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 whitespace-nowrap">
                                  Kunci Jawaban
                                </span>
                              )}
                              {isUser && !isKey && (
                                <span className="text-[11px] font-black px-2 py-0.5 rounded-lg bg-red-500/20 text-red-300 border border-red-500/30 whitespace-nowrap">
                                  Pilihan Anda
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Complex Multiple Choice Options */}
                    {activePembahasanQ.type === 'multiple-complex' && activePembahasanQ.options && (
                      <div className="space-y-3 pt-2">
                        {activePembahasanQ.options.map(opt => {
                          const userArray: string[] = Array.isArray(activePembahasanResult?.userAns)
                            ? activePembahasanResult.userAns
                            : [];
                          const isUserChecked = userArray.includes(opt.id);
                          const isKeyChecked = !!opt.correct;
                          let borderStyle = 'border-slate-800 bg-slate-950/60 text-slate-300';
                          if (isKeyChecked) borderStyle = 'border-emerald-500 bg-emerald-950/40 text-emerald-200';
                          else if (isUserChecked && !isKeyChecked) borderStyle = 'border-red-500 bg-red-950/40 text-red-200';

                          return (
                            <div
                              key={opt.id}
                              className={`p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${borderStyle}`}
                            >
                              <div
                                className={`w-5 h-5 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${
                                  isKeyChecked
                                    ? 'bg-emerald-600 text-white'
                                    : isUserChecked
                                    ? 'bg-red-600 text-white'
                                    : 'border border-slate-700 bg-slate-800'
                                }`}
                              >
                                {(isKeyChecked || isUserChecked) && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                              </div>
                              <div className="flex-1 text-sm pt-0.5">
                                <MathMarkdown content={opt.text} />
                              </div>
                              {isKeyChecked && (
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                  Kunci
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* True-False Table Review */}
                    {activePembahasanQ.type === 'true-false-table' && activePembahasanQ.statements && (
                      <div className="overflow-x-auto rounded-2xl border border-slate-800 mt-3">
                        <table className="w-full text-xs text-left">
                          <thead className="bg-slate-950 text-slate-400 uppercase font-black tracking-wider text-[10px]">
                            <tr>
                              <th className="p-3">No</th>
                              <th className="p-3">Pernyataan</th>
                              <th className="p-3 text-center">Jawaban Anda</th>
                              <th className="p-3 text-center">Kunci Resmi</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-800 text-slate-300">
                            {activePembahasanQ.statements.map((st, sIdx) => {
                              const userVal = activePembahasanResult?.userAns?.[st.id];
                              const keyVal = st.correct;
                              const isStatementCorrect = userVal === keyVal;

                              return (
                                <tr key={st.id} className="hover:bg-slate-950/30">
                                  <td className="p-3 font-bold text-slate-400">{sIdx + 1}</td>
                                  <td className="p-3 font-medium">{st.text}</td>
                                  <td className="p-3 text-center">
                                    <span
                                      className={`px-2 py-1 rounded-lg font-bold ${
                                        userVal === undefined
                                          ? 'bg-slate-800 text-slate-400'
                                          : isStatementCorrect
                                          ? 'bg-emerald-500/20 text-emerald-300'
                                          : 'bg-red-500/20 text-red-300'
                                      }`}
                                    >
                                      {userVal === true
                                        ? st.trueLabel || 'Benar'
                                        : userVal === false
                                        ? st.falseLabel || 'Salah'
                                        : 'Tidak Dijawab'}
                                    </span>
                                  </td>
                                  <td className="p-3 text-center">
                                    <span className="px-2 py-1 rounded-lg font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                      {keyVal ? st.trueLabel || 'Benar' : st.falseLabel || 'Salah'}
                                    </span>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column: Step-by-Step Explanation & Question Navigator */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Detailed Explanation Card */}
                  <div className="bg-slate-900 border border-blue-500/30 rounded-3xl p-6 shadow-xl space-y-4">
                    <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                      <Sparkles className="w-5 h-5 text-blue-400" />
                      Pembahasan & Analisis Kunci Jawaban
                    </div>

                    <div className="p-4 rounded-2xl bg-blue-950/30 border border-blue-800/40 text-slate-200 text-sm leading-relaxed space-y-3">
                      <MathMarkdown content={activePembahasanQ.explanation} />
                    </div>
                  </div>

                  {/* Filter & Question Navigator */}
                  <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                        <Filter className="w-3.5 h-3.5" />
                        Navigasi Pembahasan Soal
                      </h4>
                      <span className="text-xs text-slate-400 font-bold">
                        {pembahasanIdx + 1} dari {filteredPembahasanQuestions.length} Soal
                      </span>
                    </div>

                    {/* Filter Tabs */}
                    <div className="grid grid-cols-3 gap-2 text-[11px] font-bold">
                      <button
                        onClick={() => {
                          setPembahasanFilter('all');
                          setPembahasanIdx(0);
                        }}
                        className={`py-2 rounded-xl border transition-all cursor-pointer ${
                          pembahasanFilter === 'all'
                            ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                            : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
                        }`}
                      >
                        Semua ({questions.length})
                      </button>
                      <button
                        onClick={() => {
                          setPembahasanFilter('correct');
                          setPembahasanIdx(0);
                        }}
                        className={`py-2 rounded-xl border transition-all cursor-pointer ${
                          pembahasanFilter === 'correct'
                            ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm'
                            : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
                        }`}
                      >
                        Benar ({evaluation.correct})
                      </button>
                      <button
                        onClick={() => {
                          setPembahasanFilter('wrong');
                          setPembahasanIdx(0);
                        }}
                        className={`py-2 rounded-xl border transition-all cursor-pointer ${
                          pembahasanFilter === 'wrong'
                            ? 'bg-red-600 text-white border-red-500 shadow-sm'
                            : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
                        }`}
                      >
                        Salah ({evaluation.wrong})
                      </button>
                    </div>

                    {/* Number Buttons */}
                    <div className="grid grid-cols-5 gap-2.5 pt-2">
                      {filteredPembahasanQuestions.map((q, idx) => {
                        const res = evaluation.questionResults[q.id];
                        const isActive = idx === pembahasanIdx;

                        return (
                          <button
                            key={q.id}
                            onClick={() => setPembahasanIdx(idx)}
                            className={`h-11 rounded-2xl font-bold text-xs transition-all flex items-center justify-center relative cursor-pointer border ${
                              isActive
                                ? 'ring-2 ring-blue-400 ring-offset-2 ring-offset-slate-900 shadow-md font-black scale-105'
                                : ''
                            } ${
                              res?.isCorrect
                                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/30'
                                : 'bg-red-500/20 text-red-300 border-red-500/40 hover:bg-red-500/30'
                            }`}
                          >
                            {q.id}
                          </button>
                        );
                      })}
                    </div>

                    {/* Navigation Prev/Next */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-800 gap-3">
                      <button
                        disabled={pembahasanIdx === 0}
                        onClick={() => setPembahasanIdx(prev => Math.max(0, prev - 1))}
                        className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 disabled:opacity-40 text-slate-200 text-xs font-bold border border-slate-700 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"
                      >
                        <ChevronLeft className="w-4 h-4" /> Sebelumnya
                      </button>
                      <button
                        disabled={pembahasanIdx >= filteredPembahasanQuestions.length - 1}
                        onClick={() => setPembahasanIdx(prev => Math.min(filteredPembahasanQuestions.length - 1, prev + 1))}
                        className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:cursor-not-allowed shadow-sm"
                      >
                        Berikutnya <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Cbt Analysis Report Card */}
        <CbtAnalysisReport
          report={evaluation.report}
          onClose={onBack}
          onOpenSolutionReview={() => {
            setPembahasanIdx(0);
            setIsPembahasanWindowOpen(true);
          }}
        />

        {/* Dokumen HTML Modal */}
        {showHtmlModal && (
          <HtmlPembahasanModal
            isOpen={showHtmlModal}
            onClose={() => setShowHtmlModal(false)}
            title={title}
            subject={subject}
          />
        )}
      </div>
    );
  }

  // Active Exam View
  return (
    <div
      className={`bg-slate-50 min-h-screen flex flex-col justify-between transition-all select-none ${
        isFullscreen ? 'fixed inset-0 z-50 bg-slate-50' : 'rounded-3xl border border-slate-200 overflow-hidden'
      }`}
    >
      {/* Top Header Bar */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm sticky top-0 z-30">
        <div className="flex items-center gap-3.5">
          {onBack && (
            <button
              onClick={() => {
                if (window.confirm('Keluar dari sesi try out? Progress jawaban belum dikumpulkan.')) {
                  onBack();
                }
              }}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Keluar Sesi"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] px-2.5 py-0.5 rounded-full font-black uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200">
                {subtestGroup}
              </span>
              <span className="text-xs text-slate-500 font-semibold">{subject}</span>
            </div>
            <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mt-0.5">{title}</h1>
          </div>
        </div>

        {/* Right Section: Timer, Flag count, Fullscreen */}
        <div className="flex items-center gap-3">
          {/* Live Timer */}
          <div
            className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl border font-mono font-bold text-sm sm:text-base ${
              timeLeft < 300
                ? 'bg-red-50 text-red-600 border-red-200 animate-pulse'
                : 'bg-slate-100 text-slate-800 border-slate-200'
            }`}
          >
            <Clock className="w-4 h-4 text-blue-600" />
            <span>{formatTime(timeLeft)}</span>
          </div>

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            className="p-2.5 rounded-2xl border border-slate-200 text-slate-600 hover:bg-slate-100 transition-all cursor-pointer hidden sm:flex items-center justify-center"
            title="Layar Penuh"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Main CBT Workspace */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Reading Stimulus / Problem Description */}
        <div className="lg:col-span-8 space-y-6">
          {/* Stimulus Passage if present */}
          {currentQ.readingText && (
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-blue-700 text-xs font-bold uppercase tracking-wider border-b border-slate-100 pb-3">
                <BookOpen className="w-4 h-4 text-blue-600" />
                Teks Bacaan & Stimulus Soal
              </div>
              <div className="text-slate-700 text-sm leading-relaxed max-h-[420px] overflow-y-auto pr-2">
                <MathMarkdown content={currentQ.readingText} />
              </div>
            </div>
          )}

          {/* Question Box */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                Nomor Soal #{currentQ.id} • {currentQ.topic || (getTopic ? getTopic(currentQ) : subject)}
              </span>
              <button
                onClick={() => toggleFlag(currentQ.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border ${
                  flagged.includes(currentQ.id)
                    ? 'bg-amber-100 text-amber-900 border-amber-300 shadow-sm'
                    : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                {flagged.includes(currentQ.id) ? 'Ragu-Ragu (Tandai)' : 'Tandai Ragu'}
              </button>
            </div>

            {/* Question Text */}
            <div className="text-slate-900 text-base sm:text-lg font-medium leading-relaxed">
              <MathMarkdown content={currentQ.text} />
            </div>

            {/* Option Rendering: Standard Single-Choice Radio */}
            {currentQ.type === 'multiple' && currentQ.options && (
              <div className="space-y-3 pt-2">
                {currentQ.options.map(opt => {
                  const isSelected = answers[currentQ.id] === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => handleSelectRadio(currentQ.id, opt.id)}
                      className={`p-4 rounded-2xl border transition-all flex items-start gap-3.5 cursor-pointer ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50/70 text-blue-950 shadow-sm ring-1 ring-blue-500/30'
                          : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:bg-slate-50/50'
                      }`}
                    >
                      <span
                        className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 transition-all ${
                          isSelected ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {opt.id}
                      </span>
                      <div className="flex-1 text-sm sm:text-base pt-0.5">
                        <MathMarkdown content={opt.text} />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Option Rendering: Multiple-Complex Checkboxes */}
            {currentQ.type === 'multiple-complex' && currentQ.options && (
              <div className="space-y-3 pt-2">
                <p className="text-xs font-bold text-slate-500 italic">Pilihlah satu atau lebih pernyataan yang benar:</p>
                {currentQ.options.map(opt => {
                  const currentList: string[] = Array.isArray(answers[currentQ.id]) ? answers[currentQ.id] : [];
                  const isChecked = currentList.includes(opt.id);
                  return (
                    <div
                      key={opt.id}
                      onClick={() => handleToggleCheckbox(currentQ.id, opt.id)}
                      className={`p-4 rounded-2xl border transition-all flex items-start gap-3.5 cursor-pointer ${
                        isChecked
                          ? 'border-blue-600 bg-blue-50/70 text-blue-950 shadow-sm ring-1 ring-blue-500/30'
                          : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:bg-slate-50/50'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border transition-all ${
                          isChecked ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 bg-slate-50'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div className="flex-1 text-sm sm:text-base pt-0.5">
                        <MathMarkdown content={opt.text} />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Option Rendering: True / False Table */}
            {currentQ.type === 'true-false-table' && currentQ.statements && (
              <div className="space-y-4 pt-2">
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-xs sm:text-sm text-left">
                    <thead className="bg-slate-100 text-slate-700 uppercase font-black tracking-wider text-[11px]">
                      <tr>
                        <th className="p-3.5">No</th>
                        <th className="p-3.5">Pernyataan</th>
                        <th className="p-3.5 text-center w-24 sm:w-28">{currentQ.trueLabel || 'Benar'}</th>
                        <th className="p-3.5 text-center w-24 sm:w-28">{currentQ.falseLabel || 'Salah'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {currentQ.statements.map((st, sIdx) => {
                        const currentVal = answers[currentQ.id]?.[st.id];
                        return (
                          <tr key={st.id} className="hover:bg-slate-50/70 transition-colors">
                            <td className="p-3.5 font-bold text-slate-500">{sIdx + 1}</td>
                            <td className="p-3.5 font-medium text-slate-800">{st.text}</td>
                            <td className="p-3.5 text-center">
                              <button
                                type="button"
                                onClick={() => handleTableAnswer(currentQ.id, st.id, true)}
                                className={`px-4 py-1.5 rounded-xl font-bold text-xs transition-all border cursor-pointer ${
                                  currentVal === true
                                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                                    : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                                }`}
                              >
                                {st.trueLabel || 'Benar'}
                              </button>
                            </td>
                            <td className="p-3.5 text-center">
                              <button
                                type="button"
                                onClick={() => handleTableAnswer(currentQ.id, st.id, false)}
                                className={`px-4 py-1.5 rounded-xl font-bold text-xs transition-all border cursor-pointer ${
                                  currentVal === false
                                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                                    : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                                }`}
                              >
                                {st.falseLabel || 'Salah'}
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

            {/* Bottom Nav Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100 gap-3">
              <button
                disabled={currentIdx === 0}
                onClick={handlePrev}
                className="px-5 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 font-bold text-xs sm:text-sm transition-all flex items-center gap-1.5 cursor-pointer disabled:cursor-not-allowed shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" /> Soal Sebelumnya
              </button>

              <span className="text-xs font-bold text-slate-400 hidden sm:inline">
                {currentIdx + 1} dari {questions.length} Soal
              </span>

              {currentIdx < questions.length - 1 ? (
                <button
                  onClick={handleNext}
                  className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-blue-200"
                >
                  Soal Selanjutnya <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => setShowConfirmModal(true)}
                  className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-emerald-200 animate-bounce"
                >
                  <Send className="w-4 h-4" /> Kumpulkan Ujian Sekarang
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Question Navigator & Summary Card */}
        <div className="lg:col-span-4 space-y-6 sticky top-24">
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-extrabold text-slate-800 text-sm flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600" />
                Nomor Soal Ujian
              </h3>
              <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                {answeredCount}/{questions.length} Terjawab
              </span>
            </div>

            {/* Question Grid Buttons */}
            <div className="grid grid-cols-5 gap-2.5">
              {questions.map((quest, idx) => {
                const isCurrent = idx === currentIdx;
                const isAnswered = answers[quest.id] !== undefined;
                const isFlag = flagged.includes(quest.id);

                let btnStyle = 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200';
                if (isAnswered) {
                  btnStyle = 'bg-blue-600 text-white border-blue-600 shadow-sm';
                }
                if (isFlag) {
                  btnStyle = 'bg-amber-400 text-amber-950 border-amber-500 shadow-sm';
                }
                if (isCurrent) {
                  btnStyle += ' ring-2 ring-blue-500 ring-offset-2 font-black scale-105';
                }

                return (
                  <button
                    key={quest.id}
                    onClick={() => setCurrentIdx(idx)}
                    className={`h-11 rounded-2xl font-bold text-xs transition-all flex items-center justify-center relative cursor-pointer border ${btnStyle}`}
                  >
                    {quest.id}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="pt-4 border-t border-slate-100 space-y-2 text-[11px] text-slate-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-md bg-blue-600" />
                  <span>Sudah Terjawab</span>
                </div>
                <span className="font-bold text-slate-700">{answeredCount}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-md bg-amber-400" />
                  <span>Ditandai Ragu</span>
                </div>
                <span className="font-bold text-slate-700">{flagged.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-md bg-slate-200" />
                  <span>Belum Terjawab</span>
                </div>
                <span className="font-bold text-slate-700">{questions.length - answeredCount}</span>
              </div>
            </div>

            {/* Submit Button in Sidebar */}
            <button
              onClick={() => setShowConfirmModal(true)}
              className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-emerald-100"
            >
              <Send className="w-4 h-4" /> Kumpulkan Ujian
            </button>
          </div>
        </div>
      </main>

      {/* Confirmation Submit Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100 space-y-5 animate-scaleUp">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <Award className="w-8 h-8" />
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-lg font-bold text-slate-900">Konfirmasi Pengumpulan Ujian</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Kamu telah menjawab <strong>{answeredCount} dari {questions.length} soal</strong>. Apakah kamu yakin ingin menyelesaikan ujian dan langsung melihat laporan analisis nilai serta modul pembahasan lengkap?
              </p>
            </div>

            {questions.length - answeredCount > 0 && (
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0 text-amber-600" />
                <span>Peringatan: Masih terdapat {questions.length - answeredCount} soal yang belum dijawab!</span>
              </div>
            )}

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="py-3 rounded-2xl border border-slate-200 text-slate-600 hover:bg-slate-100 font-bold text-xs transition-colors cursor-pointer"
              >
                Lanjutkan Mengerjakan
              </button>
              <button
                onClick={() => {
                  setShowConfirmModal(false);
                  setSubmitted(true);
                }}
                className="py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors cursor-pointer shadow-md shadow-emerald-100"
              >
                Ya, Kumpulkan Ujian
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
