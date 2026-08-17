import React, { useState, useEffect, useMemo } from 'react';
import { kimiaTryoutData, getKimiaTopic, KimiaQuestion } from './kimiaTryoutData';
import CbtAnalysisReport, { CbtReportData } from '../../CbtAnalysisReport';
import { CheckSquare, Square, Flag, ArrowLeft, ArrowRight, CheckCircle2, Clock, BookOpen, Atom, HelpCircle, Layers } from 'lucide-react';

interface CbtTryoutKimiaProps {
  onBack?: () => void;
}

export default function CbtTryoutKimia({ onBack }: CbtTryoutKimiaProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [flagged, setFlagged] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(45 * 60); // 45 minutes

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
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const q = kimiaTryoutData[currentIdx];

  const handleSelectRadio = (val: string) => {
    setAnswers(prev => ({ ...prev, [q.id]: val }));
  };

  const handleCheckboxToggle = (optId: string) => {
    setAnswers(prev => {
      const currentList: string[] = Array.isArray(prev[q.id]) ? prev[q.id] : [];
      const updated = currentList.includes(optId)
        ? currentList.filter(id => id !== optId)
        : [...currentList, optId];
      return { ...prev, [q.id]: updated };
    });
  };

  const handleStatementAnswer = (statementId: string, val: any) => {
    setAnswers(prev => ({
      ...prev,
      [q.id]: {
        ...(prev[q.id] || {}),
        [statementId]: val
      }
    }));
  };

  const handleMatrixSelect = (itemId: string, selectedOption: string) => {
    setAnswers(prev => ({
      ...prev,
      [q.id]: {
        ...(prev[q.id] || {}),
        [itemId]: selectedOption
      }
    }));
  };

  const toggleFlag = (id: number) => {
    setFlagged(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const handleNext = () => {
    if (currentIdx < kimiaTryoutData.length - 1) setCurrentIdx(currentIdx + 1);
  };

  const handlePrev = () => {
    if (currentIdx > 0) setCurrentIdx(currentIdx - 1);
  };

  const evaluation = useMemo(() => {
    let correct = 0;
    const strongTopics = new Set<string>();
    const weakTopics = new Set<string>();

    const topicStats: Record<string, { total: number; correct: number }> = {
      'Larutan & Buffer Asam-Basa': { total: 0, correct: 0 },
      'Kesetimbangan Kimia & Termokimia': { total: 0, correct: 0 },
      'Stoikiometri & Reaksi Redoks': { total: 0, correct: 0 },
      'Hidrokarbon & Senyawa Karbon': { total: 0, correct: 0 },
      'Laju Reaksi & Kinetika': { total: 0, correct: 0 },
      'Sifat Koligatif & Ksp': { total: 0, correct: 0 },
    };

    kimiaTryoutData.forEach(question => {
      const ans = answers[question.id];
      let isQuestionCorrect = false;

      if (question.type === 'multiple') {
        const correctOpt = question.options?.find(o => o.correct)?.id;
        if (ans === correctOpt) isQuestionCorrect = true;
      } else if (question.type === 'checkboxes') {
        const correctIds = question.correctAnswer || [];
        if (Array.isArray(ans) && ans.length === correctIds.length && ans.every(id => correctIds.includes(id))) {
          isQuestionCorrect = true;
        }
      } else if (question.type === 'statement-tepat' || question.type === 'statement-benar') {
        let allCorrect = true;
        question.statements?.forEach(s => {
          if (ans?.[s.id] !== s.correct) allCorrect = false;
        });
        if (allCorrect) isQuestionCorrect = true;
      } else if (question.type === 'matrix') {
        let allCorrect = true;
        question.matrixItems?.forEach(m => {
          if (ans?.[m.id] !== m.correctAnswer) allCorrect = false;
        });
        if (allCorrect) isQuestionCorrect = true;
      }

      const topic = getKimiaTopic(question.id);
      if (isQuestionCorrect) {
        correct++;
        strongTopics.add(topic);
      } else {
        weakTopics.add(topic);
      }

      // Group for radar
      let radarKey = 'Stoikiometri & Reaksi Redoks';
      if (topic.includes('Buffer') || topic.includes('Larutan')) radarKey = 'Larutan & Buffer Asam-Basa';
      else if (topic.includes('Kesetimbangan') || topic.includes('Termokimia')) radarKey = 'Kesetimbangan Kimia & Termokimia';
      else if (topic.includes('Hidrokarbon')) radarKey = 'Hidrokarbon & Senyawa Karbon';
      else if (topic.includes('Laju')) radarKey = 'Laju Reaksi & Kinetika';
      else if (topic.includes('Koligatif') || topic.includes('Ksp')) radarKey = 'Sifat Koligatif & Ksp';

      if (!topicStats[radarKey]) topicStats[radarKey] = { total: 0, correct: 0 };
      topicStats[radarKey].total += 1;
      if (isQuestionCorrect) topicStats[radarKey].correct += 1;
    });

    const total = kimiaTryoutData.length;
    const wrong = Math.max(0, total - correct);
    const scaledScore = Math.round(200 + (correct / total) * 800);

    const radarScores: Record<string, number> = {};
    Object.entries(topicStats).forEach(([key, val]) => {
      radarScores[key] = val.total > 0 ? Math.round((val.correct / val.total) * 100) : 70;
    });

    const report: CbtReportData = {
      title: 'Try Out Kimia 1: Bank Soal & Try Out Bab Kimia TKA SMA (20 Soal)',
      subject: 'Kimia',
      score: scaledScore,
      correctCount: correct,
      wrongCount: wrong,
      totalQuestions: total,
      targetPTN: 'Institut Teknologi Bandung / Universitas Indonesia / Universitas Gadjah Mada',
      targetProdi: 'Teknik Kimia & Farmasi / Kedokteran',
      keketatan: 'Keketatan Sangat Tinggi',
      strongSubjects: Array.from(strongTopics),
      weakSubjects: Array.from(weakTopics),
      radarScores,
      xpEarned: correct * 30 + 50
    };

    return { correct, wrong, total, scaledScore, report };
  }, [answers]);

  const isAnswered = (questionId: number): boolean => {
    const ans = answers[questionId];
    if (ans === undefined || ans === null) return false;
    if (Array.isArray(ans)) return ans.length > 0;
    if (typeof ans === 'object') return Object.keys(ans).length > 0;
    return true;
  };

  if (submitted) {
    return (
      <div className="p-2 sm:p-4 animate-in fade-in duration-200">
        <CbtAnalysisReport
          report={evaluation.report}
          onClose={() => {
            if (onBack) onBack();
            else {
              setSubmitted(false);
              setAnswers({});
              setCurrentIdx(0);
              setTimeLeft(45 * 60);
            }
          }}
        />
      </div>
    );
  }

  return (
    <div className="bg-slate-50/50 min-h-[85vh] p-3 sm:p-6 space-y-6">
      {/* Header Bar */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {onBack && (
            <button
              onClick={onBack}
              className="p-2.5 rounded-2xl border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors cursor-pointer"
              title="Kembali"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}
          <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0">
            <Atom className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-black text-amber-700 bg-amber-50 px-3 py-0.5 rounded-full uppercase tracking-wider border border-amber-200">
                Try Out Kimia 1
              </span>
              <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                Bab & Materi Kimia TKA SMA
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 mt-1">
              Simulasi CBT TKA Kimia (20 Soal IRT & HOTS)
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-3 self-end md:self-auto">
          <div className={`flex items-center gap-2 font-mono text-sm font-black px-4 py-2 rounded-2xl border ${
            timeLeft < 300 
              ? 'bg-rose-50 text-rose-600 border-rose-200 animate-pulse' 
              : 'bg-slate-900 text-white border-slate-900 shadow-sm'
          }`}>
            <Clock className="w-4 h-4" />
            <span>{formatTime(timeLeft)}</span>
          </div>

          <button
            onClick={() => setSubmitted(true)}
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-md shadow-emerald-200 transition-all cursor-pointer flex items-center gap-1.5"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Selesaikan Ujian</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Question Content & Navigator */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Question Panel (3 cols) */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-slate-100 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-amber-500 text-white font-black text-sm flex items-center justify-center shadow-xs">
                  {currentIdx + 1}
                </span>
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900">
                    Soal Nomor {currentIdx + 1} dari {kimiaTryoutData.length}
                  </h3>
                  <span className="text-xs text-slate-400 font-semibold">
                    Topik: {q.topic}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleFlag(q.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border ${
                    flagged.includes(q.id)
                      ? 'bg-amber-100 text-amber-800 border-amber-300'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <Flag className={`w-3.5 h-3.5 ${flagged.includes(q.id) ? 'fill-amber-600 text-amber-600' : ''}`} />
                  <span>{flagged.includes(q.id) ? 'Ditandai Ragu' : 'Ragu-ragu'}</span>
                </button>
              </div>
            </div>

            {/* Question Text Box */}
            <div className="p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-200/70">
              <p className="text-slate-900 font-semibold text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {q.text}
              </p>
            </div>

            {/* Response Area based on Type */}

            {/* Type 1: Single Choice (Multiple) */}
            {q.type === 'multiple' && q.options && (
              <div className="space-y-3 pt-2">
                {q.options.map(opt => {
                  const isSelected = answers[q.id] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectRadio(opt.id)}
                      className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-start gap-3.5 ${
                        isSelected
                          ? 'bg-amber-50/80 border-amber-500 text-amber-950 font-bold shadow-xs'
                          : 'bg-white border-slate-200/90 hover:bg-slate-50 text-slate-800'
                      }`}
                    >
                      <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs shrink-0 mt-0.5 ${
                        isSelected ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {opt.id.toUpperCase()}
                      </span>
                      <span className="leading-relaxed pt-0.5">{opt.text}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Type 2: Checkboxes (Multiple Complex / Multiselect) */}
            {q.type === 'checkboxes' && q.options && (
              <div className="space-y-3 pt-2">
                <div className="p-3 bg-blue-50/70 border border-blue-200/60 rounded-xl text-xs text-blue-800 font-semibold flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Pilihan Ganda Kompleks: Anda dapat memilih lebih dari satu jawaban yang benar.</span>
                </div>
                {q.options.map(opt => {
                  const currentSelected: string[] = Array.isArray(answers[q.id]) ? answers[q.id] : [];
                  const isChecked = currentSelected.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleCheckboxToggle(opt.id)}
                      className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-start gap-3.5 ${
                        isChecked
                          ? 'bg-blue-50/80 border-blue-500 text-blue-950 font-bold shadow-xs'
                          : 'bg-white border-slate-200/90 hover:bg-slate-50 text-slate-800'
                      }`}
                    >
                      <span className="pt-0.5 shrink-0 text-blue-600">
                        {isChecked ? (
                          <CheckSquare className="w-5 h-5 fill-blue-600 text-white" />
                        ) : (
                          <Square className="w-5 h-5 text-slate-400" />
                        )}
                      </span>
                      <span className="leading-relaxed">{opt.text}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Type 3: Statement Table (Tepat / Tidak Tepat) */}
            {q.type === 'statement-tepat' && q.statements && (
              <div className="space-y-3 pt-2">
                <div className="p-3 bg-purple-50/70 border border-purple-200/60 rounded-xl text-xs text-purple-800 font-semibold flex items-center gap-2">
                  <Layers className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Tentukan status <strong>Tepat</strong> atau <strong>Tidak Tepat</strong> untuk setiap pernyataan di bawah ini:</span>
                </div>
                <div className="border border-slate-200 rounded-2xl overflow-hidden divide-y divide-slate-200 bg-white">
                  {q.statements.map((s, idx) => {
                    const currentVal = answers[q.id]?.[s.id];
                    return (
                      <div key={s.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors">
                        <div className="space-y-1">
                          <span className="text-[10px] font-extrabold text-slate-400 uppercase">Pernyataan #{idx + 1}</span>
                          <p className="text-xs sm:text-sm font-semibold text-slate-800">{s.text}</p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                          <button
                            type="button"
                            onClick={() => handleStatementAnswer(s.id, 'tepat')}
                            className={`px-4 py-2 text-xs font-black rounded-xl cursor-pointer transition-all border ${
                              currentVal === 'tepat'
                                ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                            }`}
                          >
                            ✓ Tepat
                          </button>
                          <button
                            type="button"
                            onClick={() => handleStatementAnswer(s.id, 'tidak_tepat')}
                            className={`px-4 py-2 text-xs font-black rounded-xl cursor-pointer transition-all border ${
                              currentVal === 'tidak_tepat'
                                ? 'bg-rose-600 text-white border-rose-600 shadow-sm'
                                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                            }`}
                          >
                            ✕ Tidak Tepat
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Type 4: Statement Table (Benar / Salah) */}
            {q.type === 'statement-benar' && q.statements && (
              <div className="space-y-3 pt-2">
                <div className="p-3 bg-teal-50/70 border border-teal-200/60 rounded-xl text-xs text-teal-800 font-semibold flex items-center gap-2">
                  <Layers className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Tentukan status <strong>Benar</strong> atau <strong>Salah</strong> untuk setiap pernyataan berikut:</span>
                </div>
                <div className="border border-slate-200 rounded-2xl overflow-hidden divide-y divide-slate-200 bg-white">
                  {q.statements.map((s, idx) => {
                    const currentVal = answers[q.id]?.[s.id];
                    return (
                      <div key={s.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors">
                        <div className="space-y-1">
                          <span className="text-[10px] font-extrabold text-slate-400 uppercase">Pernyataan #{idx + 1}</span>
                          <p className="text-xs sm:text-sm font-semibold text-slate-800">{s.text}</p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                          <button
                            type="button"
                            onClick={() => handleStatementAnswer(s.id, true)}
                            className={`px-4 py-2 text-xs font-black rounded-xl cursor-pointer transition-all border ${
                              currentVal === true
                                ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                            }`}
                          >
                            Benar
                          </button>
                          <button
                            type="button"
                            onClick={() => handleStatementAnswer(s.id, false)}
                            className={`px-4 py-2 text-xs font-black rounded-xl cursor-pointer transition-all border ${
                              currentVal === false
                                ? 'bg-rose-600 text-white border-rose-600 shadow-sm'
                                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                            }`}
                          >
                            Salah
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Type 5: Matrix Classification (Pengelompokan Variabel) */}
            {q.type === 'matrix' && q.matrixItems && (
              <div className="space-y-4 pt-2">
                <div className="p-3 bg-amber-50/70 border border-amber-200/60 rounded-xl text-xs text-amber-900 font-semibold flex items-center gap-2">
                  <Layers className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Kelompokkan setiap variabel ke dalam kategori yang tepat:</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {q.matrixItems.map(item => {
                    const currentSelected = answers[q.id]?.[item.id];
                    return (
                      <div key={item.id} className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-3">
                        <div className="pb-2 border-b border-slate-200">
                          <span className="text-[10px] uppercase font-black text-slate-400">Variabel:</span>
                          <h4 className="text-sm font-black text-slate-900">{item.label}</h4>
                        </div>
                        <div className="space-y-2">
                          {item.options.map(opt => {
                            const isOptSelected = currentSelected === opt;
                            return (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => handleMatrixSelect(item.id, opt)}
                                className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer flex items-center gap-2 ${
                                  isOptSelected
                                    ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100/80'
                                }`}
                              >
                                <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                                  isOptSelected ? 'border-white bg-white' : 'border-slate-300 bg-white'
                                }`}>
                                  {isOptSelected && <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />}
                                </span>
                                <span>{opt}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Bottom Controls */}
            <div className="flex justify-between items-center pt-6 border-t border-slate-100">
              <button
                onClick={handlePrev}
                disabled={currentIdx === 0}
                className="px-4 py-2.5 border border-slate-200 rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 cursor-pointer flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Sebelumnya</span>
              </button>

              {currentIdx === kimiaTryoutData.length - 1 ? (
                <button
                  onClick={() => setSubmitted(true)}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm rounded-xl shadow-md shadow-emerald-200 cursor-pointer flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Kumpulkan Ujian</span>
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-amber-200 cursor-pointer flex items-center gap-1.5"
                >
                  <span>Selanjutnya</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Question Navigator Sidebar (1 col) */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-6 shadow-sm space-y-4">
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider">
              Navigasi Nomor Soal
            </h4>

            {/* Grid of 20 questions */}
            <div className="grid grid-cols-5 gap-2">
              {kimiaTryoutData.map((item, idx) => {
                const answered = isAnswered(item.id);
                const isCurrent = idx === currentIdx;
                const isFlag = flagged.includes(item.id);

                let bgClass = 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200';
                if (isCurrent) {
                  bgClass = 'bg-amber-600 text-white border-amber-600 shadow-md ring-2 ring-amber-300';
                } else if (isFlag) {
                  bgClass = 'bg-amber-100 text-amber-800 border-amber-300 font-bold';
                } else if (answered) {
                  bgClass = 'bg-emerald-500 text-white border-emerald-500 font-bold';
                }

                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentIdx(idx)}
                    className={`h-10 rounded-xl text-xs font-black border transition-all cursor-pointer flex items-center justify-center relative ${bgClass}`}
                  >
                    {idx + 1}
                    {isFlag && (
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full ring-2 ring-white" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="pt-4 border-t border-slate-100 space-y-2 text-[11px] font-semibold text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-md bg-emerald-500 shrink-0" />
                <span>Sudah Dijawab ({Object.keys(answers).filter(k => isAnswered(Number(k))).length})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-md bg-amber-100 border border-amber-300 shrink-0" />
                <span>Ragu-ragu ({flagged.length})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-md bg-slate-100 border border-slate-200 shrink-0" />
                <span>Belum Dijawab ({kimiaTryoutData.length - Object.keys(answers).filter(k => isAnswered(Number(k))).length})</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
