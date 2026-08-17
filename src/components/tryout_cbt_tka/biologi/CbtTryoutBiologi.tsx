import React, { useState, useEffect, useMemo } from 'react';
import { biologiTryoutData, getBiologiTopic, BiologiQuestion } from './biologiTryoutData';
import { BiologiQuestionDiagram } from './BiologiQuestionDiagram';
import CbtAnalysisReport, { CbtReportData } from '../../CbtAnalysisReport';
import HtmlPembahasanModal from '../../HtmlPembahasanModal';
import { CheckSquare, Square, Flag, ArrowLeft, ArrowRight, CheckCircle2, Clock, BookOpen, Dna, HelpCircle, Layers, Image as ImageIcon } from 'lucide-react';

interface CbtTryoutBiologiProps {
  onBack?: () => void;
}

export default function CbtTryoutBiologi({ onBack }: CbtTryoutBiologiProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [flagged, setFlagged] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(45 * 60); // 45 minutes
  const [showPembahasanModal, setShowPembahasanModal] = useState(false);

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

  const q = biologiTryoutData[currentIdx];

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

  const toggleFlag = (id: number) => {
    setFlagged(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const handleNext = () => {
    if (currentIdx < biologiTryoutData.length - 1) setCurrentIdx(currentIdx + 1);
  };

  const handlePrev = () => {
    if (currentIdx > 0) setCurrentIdx(currentIdx - 1);
  };

  // Evaluation calculation
  const evaluation = useMemo(() => {
    let correct = 0;
    const strongTopics = new Set<string>();
    const weakTopics = new Set<string>();
    const topicStats: Record<string, { total: number; correct: number }> = {};

    biologiTryoutData.forEach(question => {
      const ans = answers[question.id];
      let isQuestionCorrect = false;

      if (question.type === 'multiple' || question.type === 'multiple-complex') {
        const correctOpt = question.options?.find(o => o.correct)?.id;
        if (ans === correctOpt) isQuestionCorrect = true;
      } else if (question.type === 'checkboxes') {
        const correctOptIds = question.options?.filter(o => o.correct).map(o => o.id) || [];
        const userList = Array.isArray(ans) ? ans : [];
        if (
          correctOptIds.length === userList.length &&
          correctOptIds.every(id => userList.includes(id))
        ) {
          isQuestionCorrect = true;
        }
      } else if (question.type === 'statement-tepat' || question.type === 'statement-benar' || question.type === 'true-false-table') {
        const stmts = question.statements || [];
        const allCorrect = stmts.every(s => ans?.[s.id] === s.correct);
        if (allCorrect && stmts.length > 0) {
          isQuestionCorrect = true;
        }
      }

      const topic = getBiologiTopic(question.id);
      if (isQuestionCorrect) {
        correct++;
        strongTopics.add(topic);
      } else {
        weakTopics.add(topic);
      }

      let radarKey = 'Biologi Sel & Molekuler';
      if (topic.includes('Metabolisme')) radarKey = 'Metabolisme Sel & Enzim';
      else if (topic.includes('Reproduksi') || topic.includes('Organ')) radarKey = 'Sistem Organ & Fisiologi';
      else if (topic.includes('Genetika')) radarKey = 'Genetika & Hereditas';
      else if (topic.includes('Ekologi')) radarKey = 'Ekologi & Lingkungan';
      else if (topic.includes('Bioteknologi') || topic.includes('Imunologi')) radarKey = 'Bioteknologi & Imunologi';
      else if (topic.includes('Evolusi')) radarKey = 'Evolusi & Keanekaragaman';

      if (!topicStats[radarKey]) topicStats[radarKey] = { total: 0, correct: 0 };
      topicStats[radarKey].total += 1;
      if (isQuestionCorrect) topicStats[radarKey].correct += 1;
    });

    const total = biologiTryoutData.length;
    const wrong = Math.max(0, total - correct);
    const scaledScore = Math.round(200 + (correct / total) * 800);

    const radarScores: Record<string, number> = {};
    Object.entries(topicStats).forEach(([key, val]) => {
      radarScores[key] = val.total > 0 ? Math.round((val.correct / val.total) * 100) : 70;
    });

    const report: CbtReportData = {
      title: 'Try Out CBT TKA: Biologi (20 Soal IRT)',
      subject: 'Biologi',
      score: scaledScore,
      correctCount: correct,
      wrongCount: wrong,
      totalQuestions: total,
      targetPTN: 'Universitas Indonesia / Universitas Gadjah Mada / Universitas Airlangga',
      targetProdi: 'Pendidikan Dokter & Kedokteran Gigi / Biologi Murni / Farmasi',
      keketatan: scaledScore >= 680 ? 'Sangat Kompetitif (Peluang Lolos > 85%)' : 'Kompetitif (Peluang Lolos 60-75%)',
      xpEarned: correct * 25 + 50,
      strongSubjects: Array.from(strongTopics),
      weakSubjects: Array.from(weakTopics),
      radarScores
    };

    return { correct, wrong, total, scaledScore, report };
  }, [answers]);

  if (submitted) {
    return (
      <div className="p-2 sm:p-4 animate-in fade-in duration-200">
        <CbtAnalysisReport
          report={evaluation.report}
          onClose={() => {
            if (onBack) {
              onBack();
            } else {
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
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="bg-white border border-slate-200/80 rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {onBack && (
            <button
              onClick={onBack}
              className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
              title="Kembali ke Dashboard"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2.5 py-0.5 rounded-full border border-emerald-200 uppercase tracking-wide flex items-center gap-1">
                <Dna className="w-3 h-3" /> TKA Biologi SMA
              </span>
              <span className="text-xs text-slate-400 font-semibold">Paket 1 (20 Soal)</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
              Simulasi Ujian CBT: Biologi Saintek
            </h2>
          </div>
        </div>

        {/* Timer & Controls */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <button
            onClick={() => setShowPembahasanModal(true)}
            className="px-3.5 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-extrabold rounded-2xl text-xs border border-emerald-200 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            <span>Pembahasan</span>
          </button>

          <div className={`flex items-center gap-2 px-4 py-2 rounded-2xl border font-mono font-black text-sm ${
            timeLeft < 300
              ? 'bg-rose-50 border-rose-200 text-rose-600 animate-pulse'
              : 'bg-slate-50 border-slate-200 text-slate-700'
          }`}>
            <Clock className="w-4 h-4" />
            <span>{formatTime(timeLeft)}</span>
          </div>

          <button
            onClick={() => setSubmitted(true)}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold rounded-2xl text-xs shadow-sm transition-colors cursor-pointer"
          >
            Selesai Ujian
          </button>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Left 3 cols: Question Area */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            
            {/* Question Info Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-black text-sm flex items-center justify-center shadow-sm">
                  {currentIdx + 1}
                </span>
                <div>
                  <span className="text-xs font-bold text-slate-400 block">Nomor Soal</span>
                  <span className="text-xs font-extrabold text-emerald-700">{q.topic}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleFlag(q.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer border ${
                    flagged.includes(q.id)
                      ? 'bg-amber-100 text-amber-800 border-amber-300'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <Flag className={`w-3.5 h-3.5 ${flagged.includes(q.id) ? 'fill-amber-600 text-amber-600' : ''}`} />
                  <span>{flagged.includes(q.id) ? 'Ragu-Ragu' : 'Tandai Ragu'}</span>
                </button>
              </div>
            </div>

            {/* Question Body */}
            <div className="space-y-4">
              <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium whitespace-pre-line">
                {q.text}
              </p>

              {/* Question Image / Diagram for Biology questions (No. 7, No. 11, No. 13) */}
              {(q.imageUrl || [7, 11, 13].includes(q.id)) && (
                <div className="space-y-2">
                  <BiologiQuestionDiagram questionId={q.id} />
                </div>
              )}
            </div>

            {/* Options Area */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              {q.type === 'multiple' && q.options && (
                <div className="space-y-2.5">
                  {q.options.map(opt => {
                    const isSelected = answers[q.id] === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleSelectRadio(opt.id)}
                        className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-3.5 ${
                          isSelected
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold shadow-sm'
                            : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs shrink-0 ${
                          isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {opt.id.toUpperCase()}
                        </span>
                        <span className="leading-snug">{opt.text}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {q.type === 'checkboxes' && q.options && (
                <div className="space-y-2.5">
                  <span className="text-xs text-slate-400 font-semibold block mb-1">
                    *Pilih semua jawaban yang benar (bisa lebih dari satu):
                  </span>
                  {q.options.map(opt => {
                    const selectedList: string[] = Array.isArray(answers[q.id]) ? answers[q.id] : [];
                    const isChecked = selectedList.includes(opt.id);
                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleCheckboxToggle(opt.id)}
                        className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-3.5 ${
                          isChecked
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold shadow-sm'
                            : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        {isChecked ? (
                          <CheckSquare className="w-5 h-5 text-emerald-600 shrink-0" />
                        ) : (
                          <Square className="w-5 h-5 text-slate-300 shrink-0" />
                        )}
                        <span className="leading-snug">{opt.text}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {(q.type === 'statement-tepat' || q.type === 'statement-benar' || q.type === 'true-false-table') && q.statements && (
                <div className="space-y-3">
                  <span className="text-xs text-slate-400 font-semibold block mb-1">
                    *Tentukan kebenaran setiap pernyataan berikut:
                  </span>
                  {q.statements.map(s => {
                    const userVal = answers[q.id]?.[s.id];
                    return (
                      <div
                        key={s.id}
                        className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <span className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                          {s.text}
                        </span>
                        <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                          <button
                            onClick={() => handleStatementAnswer(s.id, true)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                              userVal === true
                                ? 'bg-emerald-600 text-white shadow-sm'
                                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                            }`}
                          >
                            Benar
                          </button>
                          <button
                            onClick={() => handleStatementAnswer(s.id, false)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                              userVal === false
                                ? 'bg-rose-600 text-white shadow-sm'
                                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                            }`}
                          >
                            Salah
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Bottom Nav Prev / Next */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
              <button
                onClick={handlePrev}
                disabled={currentIdx === 0}
                className="px-4 py-2.5 border border-slate-200 rounded-2xl text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" /> Soal Sebelumnya
              </button>

              {currentIdx === biologiTryoutData.length - 1 ? (
                <button
                  onClick={() => setSubmitted(true)}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold rounded-2xl text-xs sm:text-sm shadow-md transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4" /> Kumpulkan Jawaban
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold rounded-2xl text-xs sm:text-sm shadow-md transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  Soal Berikutnya <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Right 1 col: Number Palette Navigator */}
        <div className="space-y-6">
          <div className="bg-white border border-slate-200/80 rounded-3xl p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-600" /> Lembar Nomor Soal
              </h3>
              <span className="text-xs font-bold text-slate-400">
                {Object.keys(answers).length} / {biologiTryoutData.length}
              </span>
            </div>

            {/* Grid of numbers */}
            <div className="grid grid-cols-5 gap-2">
              {biologiTryoutData.map((item, idx) => {
                const isAnswered = answers[item.id] !== undefined;
                const isFlagged = flagged.includes(item.id);
                const isCurrent = currentIdx === idx;

                let btnClass = 'bg-white border-slate-200 text-slate-600 hover:border-emerald-300';
                if (isCurrent) {
                  btnClass = 'ring-2 ring-emerald-600 font-black';
                }
                if (isAnswered) {
                  btnClass += ' bg-emerald-600 text-white border-emerald-600';
                }
                if (isFlagged) {
                  btnClass += ' bg-amber-400 text-amber-950 border-amber-500';
                }

                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentIdx(idx)}
                    className={`h-10 rounded-xl border text-xs font-bold transition-all cursor-pointer flex items-center justify-center relative ${btnClass}`}
                  >
                    {item.id}
                    {isFlagged && (
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full border border-white"></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="pt-3 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-emerald-600 shrink-0"></span>
                <span>Sudah Dijawab</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-amber-400 shrink-0"></span>
                <span>Ragu-Ragu</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-white border border-slate-200 shrink-0"></span>
                <span>Belum Dijawab</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <HtmlPembahasanModal
        isOpen={showPembahasanModal}
        onClose={() => setShowPembahasanModal(false)}
        subject="Biologi"
        title="Pembahasan Try Out CBT - Biologi Saintek"
      />
    </div>
  );
}
