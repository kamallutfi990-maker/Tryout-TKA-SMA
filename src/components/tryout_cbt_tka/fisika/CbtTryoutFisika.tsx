import React, { useState, useEffect, useMemo } from 'react';
import { fisikaTryoutData, getFisikaTopic, FisikaQuestion } from './fisikaTryoutData';
import { FisikaQuestionDiagram } from './FisikaQuestionDiagram';
import CbtAnalysisReport, { CbtReportData } from '../../CbtAnalysisReport';
import MathMarkdown from '../../MathMarkdown';
import {
  CheckSquare,
  Square,
  Flag,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  BookOpen,
  Zap,
  HelpCircle,
  Layers,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  ChevronRight,
  Eye,
  Activity,
  Award
} from 'lucide-react';

interface CbtTryoutFisikaProps {
  onBack?: () => void;
}

export default function CbtTryoutFisika({ onBack }: CbtTryoutFisikaProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [flagged, setFlagged] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(45 * 60); // 45 minutes
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  const [activeFilterTab, setActiveFilterTab] = useState<'all' | 'wrong' | 'correct'>('all');

  // Countdown Timer
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

  const q = fisikaTryoutData[currentIdx];

  // Answer Handlers
  const handleSelectRadio = (val: string) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [q.id]: val }));
  };

  const handleCheckboxToggle = (optId: string) => {
    if (submitted) return;
    setAnswers(prev => {
      const currentList: string[] = Array.isArray(prev[q.id]) ? prev[q.id] : [];
      const updated = currentList.includes(optId)
        ? currentList.filter(id => id !== optId)
        : [...currentList, optId];
      return { ...prev, [q.id]: updated };
    });
  };

  const handleStatementAnswer = (statementId: string, val: boolean | string) => {
    if (submitted) return;
    setAnswers(prev => ({
      ...prev,
      [q.id]: {
        ...(prev[q.id] || {}),
        [statementId]: val
      }
    }));
  };

  const toggleFlag = (id: number) => {
    if (submitted) return;
    setFlagged(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const handleNext = () => {
    if (currentIdx < fisikaTryoutData.length - 1) setCurrentIdx(currentIdx + 1);
  };

  const handlePrev = () => {
    if (currentIdx > 0) setCurrentIdx(currentIdx - 1);
  };

  // Evaluation & IRT Scoring
  const evaluation = useMemo(() => {
    let correct = 0;
    const strongTopics = new Set<string>();
    const weakTopics = new Set<string>();
    const questionResults: Record<number, boolean> = {};

    const topicStats: Record<string, { total: number; correct: number }> = {
      'Mekanika & Kinematika': { total: 0, correct: 0 },
      'Fluida Statis & Dinamis': { total: 0, correct: 0 },
      'Listrik & Magnet': { total: 0, correct: 0 },
      'Gelombang & Optik': { total: 0, correct: 0 },
      'Termodinamika & Kalor': { total: 0, correct: 0 },
      'Pengukuran & Impuls': { total: 0, correct: 0 },
    };

    fisikaTryoutData.forEach(question => {
      const ans = answers[question.id];
      let isQuestionCorrect = false;

      if (question.type === 'multiple') {
        const correctOpt = question.options?.find(o => o.correct)?.id;
        if (ans && correctOpt && ans.toLowerCase() === correctOpt.toLowerCase()) {
          isQuestionCorrect = true;
        }
      } else if (question.type === 'checkboxes') {
        const correctIds = question.options?.filter(o => o.correct).map(o => o.id) || question.correctAnswer || [];
        if (
          Array.isArray(ans) &&
          ans.length === correctIds.length &&
          ans.every((id: string) => correctIds.includes(id))
        ) {
          isQuestionCorrect = true;
        }
      } else if (question.type === 'true-false-table') {
        let allStatementsMatch = true;
        if (!ans || typeof ans !== 'object') {
          allStatementsMatch = false;
        } else {
          question.statements?.forEach(s => {
            if (ans[s.id] !== s.correct) {
              allStatementsMatch = false;
            }
          });
        }
        if (allStatementsMatch) isQuestionCorrect = true;
      } else if (question.type === 'matrix-radio') {
        let allMatrixMatch = true;
        if (!ans || typeof ans !== 'object') {
          allMatrixMatch = false;
        } else {
          question.statements?.forEach(s => {
            if (ans[s.id] !== s.correct) {
              allMatrixMatch = false;
            }
          });
        }
        if (allMatrixMatch) isQuestionCorrect = true;
      }

      questionResults[question.id] = isQuestionCorrect;

      const topic = getFisikaTopic(question.id);
      if (isQuestionCorrect) {
        correct++;
        strongTopics.add(topic);
      } else {
        weakTopics.add(topic);
      }

      // Grouping for Radar Chart
      let radarKey = 'Mekanika & Kinematika';
      if (topic.includes('Fluida')) {
        radarKey = 'Fluida Statis & Dinamis';
      } else if (topic.includes('Listrik') || topic.includes('Elektrostatika')) {
        radarKey = 'Listrik & Magnet';
      } else if (topic.includes('Gelombang') || topic.includes('Optik')) {
        radarKey = 'Gelombang & Optik';
      } else if (topic.includes('Termo') || topic.includes('Kalor') || topic.includes('Suhu')) {
        radarKey = 'Termodinamika & Kalor';
      } else if (topic.includes('Pengukuran') || topic.includes('Impuls')) {
        radarKey = 'Pengukuran & Impuls';
      }

      if (!topicStats[radarKey]) topicStats[radarKey] = { total: 0, correct: 0 };
      topicStats[radarKey].total += 1;
      if (isQuestionCorrect) topicStats[radarKey].correct += 1;
    });

    const total = fisikaTryoutData.length;
    const wrong = total - correct;
    // Standard IRT scale: 200 to 1000
    const scaledScore = Math.round(200 + (correct / total) * 800);

    const report: CbtReportData = {
      title: 'Simulasi TKA Fisika SMA',
      subject: 'Fisika',
      score: scaledScore,
      correctCount: correct,
      wrongCount: wrong,
      totalQuestions: total,
      targetPTN: 'Institut Teknologi Bandung (ITB) / Universitas Indonesia (UI)',
      targetProdi: 'Teknik Elektro, Fisika Murni & Teknik Mesin',
      keketatan: 'Keketatan Sangat Tinggi (Saintek Top 3%)',
      strongSubjects: Array.from(strongTopics),
      weakSubjects: Array.from(weakTopics),
      radarScores: {
        'Mekanika & Kinematika': topicStats['Mekanika & Kinematika'].total > 0
          ? Math.round((topicStats['Mekanika & Kinematika'].correct / topicStats['Mekanika & Kinematika'].total) * 100)
          : 50,
        'Fluida Statis & Dinamis': topicStats['Fluida Statis & Dinamis'].total > 0
          ? Math.round((topicStats['Fluida Statis & Dinamis'].correct / topicStats['Fluida Statis & Dinamis'].total) * 100)
          : 50,
        'Listrik & Magnet': topicStats['Listrik & Magnet'].total > 0
          ? Math.round((topicStats['Listrik & Magnet'].correct / topicStats['Listrik & Magnet'].total) * 100)
          : 50,
        'Gelombang & Optik': topicStats['Gelombang & Optik'].total > 0
          ? Math.round((topicStats['Gelombang & Optik'].correct / topicStats['Gelombang & Optik'].total) * 100)
          : 50,
        'Termodinamika & Kalor': topicStats['Termodinamika & Kalor'].total > 0
          ? Math.round((topicStats['Termodinamika & Kalor'].correct / topicStats['Termodinamika & Kalor'].total) * 100)
          : 50,
        'Pengukuran & Impuls': topicStats['Pengukuran & Impuls'].total > 0
          ? Math.round((topicStats['Pengukuran & Impuls'].correct / topicStats['Pengukuran & Impuls'].total) * 100)
          : 50,
      },
      xpEarned: correct * 30 + 50
    };

    return { correct, wrong, scaledScore, report, questionResults };
  }, [answers]);

  // Count answered questions
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-800 antialiased" id="cbt-fisika-module">
      
      {/* Top Main CBT Navigation Bar */}
      <header className="bg-slate-900 text-white px-4 sm:px-6 py-3.5 shadow-md flex items-center justify-between sticky top-0 z-30 border-b border-slate-800">
        <div className="flex items-center gap-3">
          {onBack && (
            <button
              onClick={onBack}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl transition-all flex items-center gap-1.5 text-xs font-bold cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Dasbor</span>
            </button>
          )}
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-amber-500 text-slate-950 flex items-center gap-1">
                <Zap className="w-3 h-3 fill-slate-950" /> TKA Fisika
              </span>
              <h1 className="font-extrabold text-xs sm:text-sm truncate max-w-[200px] sm:max-w-md text-white">
                Simulasi CBT TKA: Fisika SMA (20 Soal IRT)
              </h1>
            </div>
            <p className="text-[10px] text-slate-400 hidden sm:block mt-0.5">
              Standar Soal Pusmendik / ANBK • Lengkap dengan Diagram Gambar & Pembahasan Interaktif
            </p>
          </div>
        </div>

        {/* Timer & Submit / Review Bar */}
        <div className="flex items-center gap-3">
          {!submitted ? (
            <>
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs sm:text-sm font-black border transition-colors ${
                timeLeft < 300 
                  ? 'bg-rose-950/80 text-rose-300 border-rose-600 animate-pulse' 
                  : 'bg-slate-800 text-amber-300 border-slate-700'
              }`}>
                <Clock className="w-4 h-4 text-amber-400" />
                <span>{formatTime(timeLeft)}</span>
              </div>
              <button
                onClick={() => setShowConfirmSubmit(true)}
                className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-sm transition-all cursor-pointer flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span className="hidden sm:inline">Kumpulkan Jawaban</span>
                <span className="sm:hidden">Selesai</span>
              </button>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-emerald-950/80 text-emerald-300 border border-emerald-700 rounded-xl text-xs font-black">
                Mode Pembahasan Lengkap
              </span>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setTimeLeft(45 * 60);
                  setAnswers({});
                  setFlagged([]);
                  setCurrentIdx(0);
                }}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition-all flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Ulangi CBT</span>
              </button>
            </div>
          )}
        </div>
      </header>

      {/* CBT Main Layout Grid */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Left / Main Question Workspace (3 Cols) */}
        <main className="lg:col-span-3 flex flex-col space-y-4">
          
          {/* Question Header Card */}
          <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-sm border border-slate-200/80 flex-1 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              {/* Question metadata row */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 flex-wrap gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 font-black flex items-center justify-center text-sm shadow-sm">
                    {q.id}
                  </span>
                  <div>
                    <span className="text-[10px] uppercase font-black tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60 block">
                      {q.topic}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">
                      {q.type === 'true-false-table' && 'Tipe: Tabel Benar / Salah'}
                      {q.type === 'multiple' && 'Tipe: Pilihan Ganda (1 Jawaban Benar)'}
                      {q.type === 'checkboxes' && 'Tipe: Pilihan Ganda Kompleks (Jawaban Benar > 1)'}
                      {q.type === 'matrix-radio' && 'Tipe: Matriks Evaluasi Besaran Fisis'}
                    </span>
                  </div>
                </div>

                {!submitted && (
                  <button
                    onClick={() => toggleFlag(q.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition-all cursor-pointer border ${
                      flagged.includes(q.id)
                        ? 'bg-amber-100 text-amber-800 border-amber-300 shadow-sm'
                        : 'bg-slate-50 text-slate-500 hover:bg-slate-100 border-slate-200'
                    }`}
                  >
                    <Flag className={`w-3.5 h-3.5 ${flagged.includes(q.id) ? 'fill-amber-500 text-amber-600' : ''}`} />
                    <span>{flagged.includes(q.id) ? 'Ragu-ragu (Ditandai)' : 'Ragu-ragu'}</span>
                  </button>
                )}
              </div>

              {/* Question Diagram / Image Visualization */}
              <div className="w-full">
                <FisikaQuestionDiagram questionId={q.id} imageRef={q.imageRef} />
              </div>

              {/* Question Narration / Stimulus Text with LaTeX Rendering */}
              <div className="bg-slate-50/70 p-4 sm:p-5 rounded-2xl border border-slate-200/60 text-slate-900 leading-relaxed text-sm sm:text-base">
                <MathMarkdown content={q.text} />
              </div>

              {/* Interactive Options Workspace based on Question Type */}
              <div className="pt-2">
                
                {/* 1. True-False Table Type */}
                {q.type === 'true-false-table' && q.statements && (
                  <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
                    <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 grid grid-cols-12 text-xs font-black text-slate-700 uppercase tracking-wider">
                      <div className="col-span-8 sm:col-span-9">Pernyataan / Kondisi</div>
                      <div className="col-span-2 sm:col-span-1.5 text-center">Benar</div>
                      <div className="col-span-2 sm:col-span-1.5 text-center">Salah</div>
                    </div>
                    <div className="divide-y divide-slate-100 bg-white">
                      {q.statements.map((stmt, sIdx) => {
                        const userVal = answers[q.id]?.[stmt.id];
                        const isCorrectStmt = userVal === stmt.correct;
                        return (
                          <div
                            key={stmt.id}
                            className={`p-4 grid grid-cols-12 items-center gap-2 transition-colors ${
                              sIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                            }`}
                          >
                            <div className="col-span-8 sm:col-span-9 text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                              <MathMarkdown content={stmt.text} />
                              {submitted && (
                                <div className="mt-1 flex items-center gap-1.5 text-[11px] font-bold">
                                  <span className={isCorrectStmt ? 'text-emerald-600' : 'text-rose-600'}>
                                    {isCorrectStmt ? '✓ Tepat' : '✕ Belum Tepat'} (Kunci: {stmt.correct ? 'Benar' : 'Salah'})
                                  </span>
                                </div>
                              )}
                            </div>
                            
                            {/* Benar Radio */}
                            <div className="col-span-2 sm:col-span-1.5 flex justify-center">
                              <label className="flex items-center justify-center p-2 rounded-xl hover:bg-slate-100 cursor-pointer transition-colors">
                                <input
                                  type="radio"
                                  name={`stmt_${q.id}_${stmt.id}`}
                                  checked={userVal === true}
                                  onChange={() => handleStatementAnswer(stmt.id, true)}
                                  disabled={submitted}
                                  className="w-4 h-4 text-amber-600 focus:ring-amber-500 cursor-pointer"
                                />
                              </label>
                            </div>

                            {/* Salah Radio */}
                            <div className="col-span-2 sm:col-span-1.5 flex justify-center">
                              <label className="flex items-center justify-center p-2 rounded-xl hover:bg-slate-100 cursor-pointer transition-colors">
                                <input
                                  type="radio"
                                  name={`stmt_${q.id}_${stmt.id}`}
                                  checked={userVal === false}
                                  onChange={() => handleStatementAnswer(stmt.id, false)}
                                  disabled={submitted}
                                  className="w-4 h-4 text-amber-600 focus:ring-amber-500 cursor-pointer"
                                />
                              </label>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 2. Matrix-Radio Type (Lebih besar / Lebih kecil / Tetap) */}
                {q.type === 'matrix-radio' && q.statements && (
                  <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
                    <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 grid grid-cols-12 text-xs font-black text-slate-700 uppercase tracking-wider">
                      <div className="col-span-6 sm:col-span-6">Besaran Fisis</div>
                      <div className="col-span-2 text-center text-[10px] sm:text-xs">Lebih besar</div>
                      <div className="col-span-2 text-center text-[10px] sm:text-xs">Lebih kecil</div>
                      <div className="col-span-2 text-center text-[10px] sm:text-xs">Tetap</div>
                    </div>
                    <div className="divide-y divide-slate-100 bg-white">
                      {q.statements.map((stmt, sIdx) => {
                        const userVal = answers[q.id]?.[stmt.id];
                        const isCorrectStmt = userVal === stmt.correct;
                        return (
                          <div
                            key={stmt.id}
                            className={`p-4 grid grid-cols-12 items-center gap-2 transition-colors ${
                              sIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                            }`}
                          >
                            <div className="col-span-6 sm:col-span-6 text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                              <MathMarkdown content={stmt.text} />
                              {submitted && (
                                <div className="mt-1 text-[11px] font-bold">
                                  <span className={isCorrectStmt ? 'text-emerald-600' : 'text-rose-600'}>
                                    {isCorrectStmt ? '✓ Tepat' : '✕ Belum Tepat'} (Kunci: {stmt.correct})
                                  </span>
                                </div>
                              )}
                            </div>

                            {['Lebih besar', 'Lebih kecil', 'Tetap'].map((optionName) => (
                              <div key={optionName} className="col-span-2 flex justify-center">
                                <label className="flex items-center justify-center p-2 rounded-xl hover:bg-slate-100 cursor-pointer transition-colors">
                                  <input
                                    type="radio"
                                    name={`matrix_${q.id}_${stmt.id}`}
                                    checked={userVal === optionName}
                                    onChange={() => handleStatementAnswer(stmt.id, optionName)}
                                    disabled={submitted}
                                    className="w-4 h-4 text-amber-600 focus:ring-amber-500 cursor-pointer"
                                  />
                                </label>
                              </div>
                            ))}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 3. Multiple Choice (Standard Single Answer) */}
                {q.type === 'multiple' && q.options && (
                  <div className="space-y-3">
                    {q.options.map((opt) => {
                      const isSelected = answers[q.id] === opt.id;
                      const isCorrect = opt.correct === true;
                      
                      let optionBorder = 'border-slate-200 hover:border-amber-400 hover:bg-amber-50/30';
                      let badgeStyle = 'bg-slate-100 text-slate-700 border-slate-200';

                      if (isSelected) {
                        optionBorder = 'border-amber-500 bg-amber-50/60 shadow-xs ring-1 ring-amber-400';
                        badgeStyle = 'bg-amber-500 text-slate-950 border-amber-600 font-black';
                      }

                      if (submitted) {
                        if (isCorrect) {
                          optionBorder = 'border-emerald-500 bg-emerald-50/70 ring-1 ring-emerald-400';
                          badgeStyle = 'bg-emerald-600 text-white border-emerald-700';
                        } else if (isSelected && !isCorrect) {
                          optionBorder = 'border-rose-400 bg-rose-50/70';
                          badgeStyle = 'bg-rose-500 text-white border-rose-600';
                        }
                      }

                      return (
                        <div
                          key={opt.id}
                          onClick={() => handleSelectRadio(opt.id)}
                          className={`border rounded-2xl p-4 flex items-start gap-3 transition-all cursor-pointer ${optionBorder}`}
                        >
                          <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shrink-0 border uppercase ${badgeStyle}`}>
                            {opt.id}
                          </span>
                          <div className="flex-1 text-xs sm:text-sm text-slate-800 leading-relaxed pt-0.5">
                            <MathMarkdown content={opt.text} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* 4. Checkboxes (Multiple Complex / Centang Banyak) */}
                {q.type === 'checkboxes' && q.options && (
                  <div className="space-y-3">
                    <p className="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200/60 mb-2 flex items-center gap-1.5">
                      <CheckSquare className="w-3.5 h-3.5" /> Pilihlah semua opsi jawaban yang benar!
                    </p>
                    {q.options.map((opt) => {
                      const isChecked = Array.isArray(answers[q.id]) && answers[q.id].includes(opt.id);
                      const isCorrect = opt.correct === true;

                      let boxBorder = 'border-slate-200 hover:border-amber-400 hover:bg-amber-50/30';
                      if (isChecked) {
                        boxBorder = 'border-amber-500 bg-amber-50/60 ring-1 ring-amber-400';
                      }

                      if (submitted) {
                        if (isCorrect) {
                          boxBorder = 'border-emerald-500 bg-emerald-50/70 ring-1 ring-emerald-400';
                        } else if (isChecked && !isCorrect) {
                          boxBorder = 'border-rose-400 bg-rose-50/70';
                        }
                      }

                      return (
                        <div
                          key={opt.id}
                          onClick={() => handleCheckboxToggle(opt.id)}
                          className={`border rounded-2xl p-4 flex items-start gap-3.5 transition-all cursor-pointer ${boxBorder}`}
                        >
                          <div className="mt-0.5 text-amber-600">
                            {isChecked ? (
                              <CheckSquare className="w-5 h-5 fill-amber-500 text-white" />
                            ) : (
                              <Square className="w-5 h-5 text-slate-400" />
                            )}
                          </div>
                          <div className="flex-1 text-xs sm:text-sm text-slate-800 leading-relaxed">
                            <MathMarkdown content={opt.text} />
                            {submitted && (
                              <span className={`inline-block mt-1 text-[11px] font-bold ${isCorrect ? 'text-emerald-700' : 'text-slate-400'}`}>
                                {isCorrect ? '✓ Opsi Kunci Benar' : '— Bukan Kunci'}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

              </div>

              {/* Review Explanation Box (Visible only after submission) */}
              {submitted && (
                <div className="mt-6 p-5 sm:p-6 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-md space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="p-1.5 bg-amber-500 text-slate-950 rounded-lg">
                        <BookOpen className="w-4 h-4" />
                      </span>
                      <h4 className="font-extrabold text-sm text-amber-300">
                        Pembahasan Detail & Penurunan Rumus Fisika Soal No. {q.id}
                      </h4>
                    </div>
                    <span className={`text-xs font-black px-2.5 py-0.5 rounded-full border ${
                      evaluation.questionResults[q.id]
                        ? 'bg-emerald-950 text-emerald-300 border-emerald-700'
                        : 'bg-rose-950 text-rose-300 border-rose-700'
                    }`}>
                      {evaluation.questionResults[q.id] ? 'Jawaban Benar' : 'Jawaban Belum Tepat'}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-200 leading-relaxed overflow-x-auto">
                    <MathMarkdown content={q.explanation} className="text-slate-200 prose-invert" />
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 flex-wrap gap-2">
              <button
                onClick={handlePrev}
                disabled={currentIdx === 0}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition-all ${
                  currentIdx === 0
                    ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Sebelumnya</span>
              </button>

              <span className="text-xs font-bold text-slate-400">
                Soal {currentIdx + 1} dari {fisikaTryoutData.length}
              </span>

              {currentIdx < fisikaTryoutData.length - 1 ? (
                <button
                  onClick={handleNext}
                  className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs rounded-xl shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Selanjutnya</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                !submitted && (
                  <button
                    onClick={() => setShowConfirmSubmit(true)}
                    className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded-xl shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Selesai & Kumpulkan</span>
                  </button>
                )
              )}
            </div>

          </div>

          {/* After Submission Full Score Analysis Report Card */}
          {submitted && (
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80">
              <CbtAnalysisReport report={evaluation.report} />
            </div>
          )}

        </main>

        {/* Right Sidebar: Question Palette / Number Grid (1 Col) */}
        <aside className="lg:col-span-1 space-y-4">
          
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200/80 sticky top-20 space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-black text-xs uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-amber-500" /> Lembar Nomor Soal
              </h3>
              <span className="text-[11px] font-extrabold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                {answeredCount} / {fisikaTryoutData.length} Terjawab
              </span>
            </div>

            {/* Quick Status Legend */}
            <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-500 font-bold">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                <span>Sudah Diisi</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
                <span>Ragu-ragu</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-slate-100 border border-slate-300 inline-block"></span>
                <span>Belum Diisi</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full ring-2 ring-blue-500 bg-white inline-block"></span>
                <span>Aktif Dipilih</span>
              </div>
            </div>

            {/* Question Buttons Grid (20 Numbers) */}
            <div className="grid grid-cols-5 gap-2 pt-2">
              {fisikaTryoutData.map((question, idx) => {
                const isCurrent = idx === currentIdx;
                const isAnswered = answers[question.id] !== undefined;
                const isFlagged = flagged.includes(question.id);
                const isCorrect = evaluation.questionResults[question.id];

                let btnStyle = 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200';

                if (isAnswered) {
                  btnStyle = 'bg-emerald-600 text-white font-black border-emerald-700 shadow-xs';
                }

                if (isFlagged) {
                  btnStyle = 'bg-amber-400 text-slate-950 font-black border-amber-500';
                }

                if (submitted) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-600 text-white font-black border-emerald-700';
                  } else {
                    btnStyle = 'bg-rose-500 text-white font-black border-rose-600';
                  }
                }

                return (
                  <button
                    key={question.id}
                    onClick={() => setCurrentIdx(idx)}
                    className={`h-10 rounded-xl font-bold text-xs flex flex-col items-center justify-center transition-all cursor-pointer relative border ${btnStyle} ${
                      isCurrent ? 'ring-2 ring-blue-600 ring-offset-2 scale-105 z-10' : ''
                    }`}
                  >
                    <span>{question.id}</span>
                    {isFlagged && !submitted && (
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full border border-white"></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Actions in Sidebar */}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              {!submitted ? (
                <button
                  onClick={() => setShowConfirmSubmit(true)}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs font-black rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4" /> Kumpulkan Ujian CBT
                </button>
              ) : (
                <div className="space-y-2">
                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-center">
                    <span className="text-[10px] text-emerald-700 font-extrabold uppercase tracking-wider block">Skor Akhir IRT</span>
                    <span className="text-2xl font-black text-emerald-800">{evaluation.scaledScore}</span>
                    <span className="text-[10px] text-emerald-600 block mt-0.5 font-bold">
                      {evaluation.correct} Benar • {evaluation.wrong} Salah
                    </span>
                  </div>
                  {onBack && (
                    <button
                      onClick={onBack}
                      className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Kembali ke Dasbor
                    </button>
                  )}
                </div>
              )}
            </div>

          </div>

        </aside>

      </div>

      {/* Confirmation Modal to Submit CBT */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-100 space-y-5 animate-in zoom-in-95 duration-150">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto shadow-inner">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div className="text-center space-y-1.5">
              <h3 className="font-black text-base sm:text-lg text-slate-900">
                Konfirmasi Pengumpulan Jawaban
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Pastikan Anda telah memeriksa seluruh soal sebelum mengakhiri sesi ujian CBT Fisika.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/60 text-center">
              <div>
                <span className="text-[10px] text-slate-400 font-bold block uppercase">Terjawab</span>
                <span className="text-base font-black text-emerald-600">{answeredCount}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-bold block uppercase">Ragu-ragu</span>
                <span className="text-base font-black text-amber-600">{flagged.length}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-bold block uppercase">Belum Diisi</span>
                <span className="text-base font-black text-slate-700">{fisikaTryoutData.length - answeredCount}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setShowConfirmSubmit(false)}
                className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-all cursor-pointer"
              >
                Lanjutkan Mengerjakan
              </button>
              <button
                onClick={() => {
                  setShowConfirmSubmit(false);
                  setSubmitted(true);
                }}
                className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black rounded-xl shadow-md transition-all cursor-pointer"
              >
                Ya, Kumpulkan Sekarang
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
