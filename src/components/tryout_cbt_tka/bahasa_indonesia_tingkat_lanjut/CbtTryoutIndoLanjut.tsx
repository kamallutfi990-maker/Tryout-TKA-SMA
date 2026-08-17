import React, { useState, useEffect, useMemo } from 'react';
import { indoLanjutTryoutData } from './indoLanjutTryoutData';
import CbtAnalysisReport, { CbtReportData } from '../../CbtAnalysisReport';
import { Folder, AlertCircle, Sparkles, CheckCircle2, ChevronRight, ArrowLeft } from 'lucide-react';

const getIndoLanjutTopic = (id: number): string => {
  if (id >= 1 && id <= 3) return 'Analisis Wacana & Proposal Program';
  if (id >= 4 && id <= 6) return 'Apresiasi & Kritik Sastra (Puisi/Prosa)';
  if (id >= 7 && id <= 10) return 'Struktur Kebahasaan, Diksi & Evaluasi Teks';
  return 'Bahasa Indonesia Tingkat Lanjut';
};

interface CbtTryoutIndoLanjutProps {
  onBack?: () => void;
}

export default function CbtTryoutIndoLanjut({ onBack }: CbtTryoutIndoLanjutProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
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
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const evaluation = useMemo(() => {
    let correct = 0;
    const strongTopics = new Set<string>();
    const weakTopics = new Set<string>();

    indoLanjutTryoutData.forEach(question => {
      const ans = answers[question.id];
      let isQuestionCorrect = false;

      if (question.type === 'multiple') {
        if (ans === question.options?.find(o => o.correct)?.id) isQuestionCorrect = true;
      } else if (question.type === 'multiple-complex') {
        const correctIds = question.correctAnswer || [];
        if (Array.isArray(ans) && ans.length === correctIds.length && ans.every(id => correctIds.includes(id))) {
          isQuestionCorrect = true;
        }
      } else if (question.type === 'true-false-table') {
        let allCorrect = true;
        question.statements?.forEach(s => {
          if (ans?.[s.id] !== s.correct) allCorrect = false;
        });
        if (allCorrect) isQuestionCorrect = true;
      }

      const topic = getIndoLanjutTopic(question.id);
      if (isQuestionCorrect) {
        correct++;
        strongTopics.add(topic);
      } else {
        weakTopics.add(topic);
      }
    });

    const total = indoLanjutTryoutData.length;
    const wrong = Math.max(0, total - correct);
    const scaledScore = total > 0 ? Math.round(200 + (correct / total) * 800) : 0;

    const report: CbtReportData = {
      title: 'Try Out Bahasa Indonesia Tingkat Lanjut TKA SMA (10 Soal)',
      subject: 'Bahasa Indonesia Tingkat Lanjut',
      score: scaledScore,
      correctCount: correct,
      wrongCount: wrong,
      totalQuestions: total,
      targetPTN: 'Universitas Indonesia / Universitas Gadjah Mada',
      targetProdi: 'Sastra Indonesia & Linguistik Terapan',
      keketatan: 'Keketatan Kompetitif',
      strongSubjects: Array.from(strongTopics),
      weakSubjects: Array.from(weakTopics),
      radarScores: {
        'Analisis Wacana & Proposal': total > 0 ? Math.min(100, Math.round((correct / total) * 100)) : 0,
        'Kritik & Apresiasi Puisi': total > 0 ? Math.min(100, Math.round((correct / total) * 95 + 5)) : 0,
        'Evaluasi Teks Ulasan': total > 0 ? Math.min(100, Math.round((correct / total) * 90 + 10)) : 0,
        'Sintaksis & Diksi Lanjut': total > 0 ? Math.min(100, Math.round((correct / total) * 92 + 8)) : 0,
      },
      xpEarned: correct * 25 + 50
    };

    return { correct, wrong, total, scaledScore, report };
  }, [answers]);

  if (indoLanjutTryoutData.length === 0) {
    return (
      <div className="p-6 sm:p-10 bg-white rounded-3xl border border-slate-200/80 shadow-sm text-center space-y-4">
        <div className="w-16 h-16 bg-rose-50 border border-rose-100 rounded-3xl flex items-center justify-center mx-auto text-rose-600 text-2xl">
          <Folder className="w-8 h-8" />
        </div>
        <div className="space-y-1">
          <span className="text-xs font-black text-rose-600 bg-rose-50 px-3 py-1 rounded-full uppercase tracking-wider border border-rose-200">
            Bahasa Indonesia Tingkat Lanjut
          </span>
          <h3 className="text-lg font-extrabold text-slate-800 pt-2">
            Folder Bahasa Indonesia Tingkat Lanjut Siap Digunakan
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
            Paket soal CBT Bahasa Indonesia Tingkat Lanjut saat ini dalam keadaan kosong dan siap diisi.
          </p>
        </div>
      </div>
    );
  }

  const q = indoLanjutTryoutData[currentIdx];

  const handleAnswer = (val: any) => {
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

  const handleNext = () => {
    if (currentIdx < indoLanjutTryoutData.length - 1) setCurrentIdx(currentIdx + 1);
  };

  const handlePrev = () => {
    if (currentIdx > 0) setCurrentIdx(currentIdx - 1);
  };

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
    <div className="p-4 sm:p-6 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center pb-4 border-b border-slate-100 flex-wrap gap-3">
        <div className="flex items-center gap-3">
          {onBack && (
            <button
              onClick={onBack}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
              title="Kembali"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}
          <div>
            <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full uppercase tracking-wider border border-rose-200">
              Bahasa Indonesia Tingkat Lanjut
            </span>
            <h3 className="text-base font-extrabold text-slate-800 mt-1">
              Soal {currentIdx + 1} dari {indoLanjutTryoutData.length}
            </h3>
          </div>
        </div>
        <div className={`font-mono text-sm font-extrabold px-3 py-1.5 rounded-xl border ${timeLeft < 180 ? 'bg-red-50 text-red-600 border-red-200 animate-pulse' : 'bg-slate-50 text-slate-700 border-slate-200'}`}>
          ⏱️ {formatTime(timeLeft)}
        </div>
      </div>

      {/* Reading Text Box (if available) */}
      {q.readingText && (
        <div className="p-4 sm:p-5 bg-slate-50/90 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-800 max-h-72 overflow-y-auto leading-relaxed whitespace-pre-line font-sans shadow-inner">
          <div className="font-bold text-slate-900 mb-2 flex items-center gap-1.5 text-xs uppercase tracking-wider text-rose-700">
            📖 TEKS BACAAN SOAL
          </div>
          {q.readingText}
        </div>
      )}

      {/* Question Text Box */}
      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
        <p className="font-semibold text-base sm:text-lg text-slate-900 leading-relaxed whitespace-pre-line">
          {q.text}
        </p>
      </div>

      {/* Standard Multiple Choice */}
      {q.type === 'multiple' && (
        <div className="space-y-3">
          {q.options?.map(o => (
            <button
              key={o.id}
              onClick={() => handleAnswer(o.id)}
              className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-3 ${
                answers[q.id] === o.id
                  ? 'bg-rose-50 border-rose-500 text-rose-900 font-bold shadow-sm'
                  : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
              }`}
            >
              <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                answers[q.id] === o.id ? 'bg-rose-600 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {o.id.toUpperCase()}
              </span>
              <span>{o.text}</span>
            </button>
          ))}
        </div>
      )}

      {/* Multiple Complex (Checkboxes) */}
      {q.type === 'multiple-complex' && (
        <div className="space-y-3">
          <div className="text-xs text-rose-600 font-bold px-1">
            * Pilihlah jawaban yang benar (bisa memilih lebih dari satu opsi)
          </div>
          {q.options?.map(o => {
            const selectedList: string[] = Array.isArray(answers[q.id]) ? answers[q.id] : [];
            const isChecked = selectedList.includes(o.id);
            return (
              <div
                key={o.id}
                onClick={() => handleCheckboxToggle(o.id)}
                className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-3 ${
                  isChecked
                    ? 'bg-rose-50 border-rose-500 text-rose-900 font-bold shadow-sm'
                    : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 border ${
                  isChecked ? 'bg-rose-600 border-rose-600 text-white' : 'bg-white border-slate-300 text-transparent'
                }`}>
                  ✓
                </div>
                <span>{o.text}</span>
              </div>
            );
          })}
        </div>
      )}

      {/* True / False / Sesuai / Logis Table */}
      {q.type === 'true-false-table' && (
        <div className="space-y-3">
          {q.statements?.map(s => {
            const trueText = s.trueLabel || q.trueLabel || 'Sesuai / Benar';
            const falseText = s.falseLabel || q.falseLabel || 'Tidak Sesuai / Salah';
            return (
              <div key={s.id} className="p-3.5 sm:p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-xs sm:text-sm font-medium text-slate-800 whitespace-pre-line leading-relaxed flex-1">
                  {s.text}
                </span>
                <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                  <button
                    type="button"
                    onClick={() => setAnswers(prev => ({ ...prev, [q.id]: { ...(prev[q.id] || {}), [s.id]: true } }))}
                    className={`px-3.5 py-1.5 text-xs font-bold rounded-xl cursor-pointer transition-all border ${
                      answers[q.id]?.[s.id] === true
                        ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {trueText}
                  </button>
                  <button
                    type="button"
                    onClick={() => setAnswers(prev => ({ ...prev, [q.id]: { ...(prev[q.id] || {}), [s.id]: false } }))}
                    className={`px-3.5 py-1.5 text-xs font-bold rounded-xl cursor-pointer transition-all border ${
                      answers[q.id]?.[s.id] === false
                        ? 'bg-rose-600 border-rose-600 text-white shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {falseText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center pt-4 border-t border-slate-100">
        <button
          onClick={handlePrev}
          disabled={currentIdx === 0}
          className="px-4 py-2.5 border border-slate-200 rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 cursor-pointer"
        >
          ← Sebelumnya
        </button>

        {currentIdx === indoLanjutTryoutData.length - 1 ? (
          <button
            onClick={() => setSubmitted(true)}
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md cursor-pointer"
          >
            Kumpulkan Ujian
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md cursor-pointer"
          >
            Selanjutnya →
          </button>
        )}
      </div>
    </div>
  );
}
