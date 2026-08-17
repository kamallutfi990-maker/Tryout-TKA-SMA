import React, { useState, useEffect, useMemo } from 'react';
import { mtkWajibTryoutData } from './mtkWajibTryoutData';
import CbtAnalysisReport, { CbtReportData } from '../../CbtAnalysisReport';

const getMtkTopic = (id: number): string => {
  if (id >= 1 && id <= 3) return 'SPLDV, Program Linear & Fungsi Invers';
  if (id >= 4 && id <= 5) return 'Barisan Aritmetika & Trigonometri Dasar';
  if (id >= 6 && id <= 7) return 'Statistika Rataan & Peluang Majemuk';
  if (id >= 8 && id <= 10) return 'Persamaan Kuadrat, Bunga Majemuk & Kaidah Pencacahan';
  if (id >= 11 && id <= 15) return 'Matriks, Dispersi Data & Deret Geometri';
  return 'Kombinatorika, Garis Lurus & Nilai Mutlak';
};

export default function CbtTryoutMtkWajib() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes

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

  const q = mtkWajibTryoutData[currentIdx];

  const handleAnswer = (val: any) => {
    setAnswers(prev => ({ ...prev, [q.id]: val }));
  };

  const handleNext = () => {
    if (currentIdx < mtkWajibTryoutData.length - 1) setCurrentIdx(currentIdx + 1);
  };

  const handlePrev = () => {
    if (currentIdx > 0) setCurrentIdx(currentIdx - 1);
  };

  const evaluation = useMemo(() => {
    let correct = 0;
    const strongTopics = new Set<string>();
    const weakTopics = new Set<string>();

    mtkWajibTryoutData.forEach(question => {
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

      const topic = getMtkTopic(question.id);
      if (isQuestionCorrect) {
        correct++;
        strongTopics.add(topic);
      } else {
        weakTopics.add(topic);
      }
    });

    const total = mtkWajibTryoutData.length;
    const wrong = total - correct;
    const scaledScore = Math.round(200 + (correct / total) * 800);

    const report: CbtReportData = {
      title: 'Try Out Matematika Wajib TKA SMA',
      subject: 'Matematika Wajib',
      score: scaledScore,
      correctCount: correct,
      wrongCount: wrong,
      totalQuestions: total,
      targetPTN: 'Institut Teknologi Bandung / Universitas Indonesia',
      targetProdi: 'Teknik Industri & Aktuaria',
      keketatan: 'Keketatan Sangat Kompetitif',
      strongSubjects: Array.from(strongTopics),
      weakSubjects: Array.from(weakTopics),
      radarScores: {
        'Aljabar & SPLDV': Math.min(100, Math.round((correct / total) * 100)),
        'Geometri & Trigonometri': Math.min(100, Math.round((correct / total) * 92 + 8)),
        'Statistika & Peluang': Math.min(100, Math.round((correct / total) * 90 + 10)),
        'Kalkulus & Fungsi': Math.min(100, Math.round((correct / total) * 95)),
      },
      xpEarned: correct * 25 + 50
    };

    return { correct, wrong, total, scaledScore, report };
  }, [answers]);

  if (submitted) {
    return (
      <div className="p-2 sm:p-4 animate-in fade-in duration-200">
        <CbtAnalysisReport
          report={evaluation.report}
          onClose={() => {
            setSubmitted(false);
            setAnswers({});
            setCurrentIdx(0);
            setTimeLeft(30 * 60);
          }}
        />
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-6">
      <div className="flex justify-between items-center pb-4 border-b border-slate-100">
        <div>
          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
            Matematika Wajib
          </span>
          <h3 className="text-base font-extrabold text-slate-800 mt-1">
            Soal {currentIdx + 1} dari {mtkWajibTryoutData.length}
          </h3>
        </div>
        <div className={`font-mono text-sm font-extrabold px-3 py-1.5 rounded-xl border ${timeLeft < 180 ? 'bg-red-50 text-red-600 border-red-200 animate-pulse' : 'bg-slate-50 text-slate-700 border-slate-200'}`}>
          ⏱️ {formatTime(timeLeft)}
        </div>
      </div>

      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
        <p className="font-semibold text-base sm:text-lg text-slate-900 leading-relaxed">
          {q.text}
        </p>
      </div>

      {q.type === 'multiple' && (
        <div className="space-y-3">
          {q.options?.map(o => (
            <button
              key={o.id}
              onClick={() => handleAnswer(o.id)}
              className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-3 ${
                answers[q.id] === o.id
                  ? 'bg-blue-50 border-blue-500 text-blue-900 font-bold shadow-sm'
                  : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
              }`}
            >
              <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                answers[q.id] === o.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {o.id.toUpperCase()}
              </span>
              <span>{o.text}</span>
            </button>
          ))}
        </div>
      )}

      {q.type === 'true-false-table' && (
        <div className="space-y-3">
          {q.statements?.map(s => (
            <div key={s.id} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between gap-4">
              <span className="text-xs sm:text-sm font-medium text-slate-800">{s.text}</span>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setAnswers(prev => ({ ...prev, [q.id]: { ...(prev[q.id] || {}), [s.id]: true } }))}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg cursor-pointer ${
                    answers[q.id]?.[s.id] === true ? 'bg-emerald-600 text-white' : 'bg-white border border-slate-200 text-slate-700'
                  }`}
                >
                  Benar
                </button>
                <button
                  type="button"
                  onClick={() => setAnswers(prev => ({ ...prev, [q.id]: { ...(prev[q.id] || {}), [s.id]: false } }))}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg cursor-pointer ${
                    answers[q.id]?.[s.id] === false ? 'bg-rose-600 text-white' : 'bg-white border border-slate-200 text-slate-700'
                  }`}
                >
                  Salah
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-between items-center pt-4 border-t border-slate-100">
        <button
          onClick={handlePrev}
          disabled={currentIdx === 0}
          className="px-4 py-2.5 border border-slate-200 rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 cursor-pointer"
        >
          ← Sebelumnya
        </button>

        {currentIdx === mtkWajibTryoutData.length - 1 ? (
          <button
            onClick={() => setSubmitted(true)}
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md cursor-pointer"
          >
            Kumpulkan Ujian
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md cursor-pointer"
          >
            Selanjutnya →
          </button>
        )}
      </div>
    </div>
  );
}
