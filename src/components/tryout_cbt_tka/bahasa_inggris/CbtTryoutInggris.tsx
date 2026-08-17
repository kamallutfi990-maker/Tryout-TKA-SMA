import React, { useState, useEffect, useMemo } from 'react';
import { inggrisTryoutData } from './inggrisTryoutData';
import CbtAnalysisReport, { CbtReportData } from '../../CbtAnalysisReport';

const getInggrisTopic = (id: number): string => {
  if (id >= 1 && id <= 5) return 'Narrative Text Comprehension & Main Idea Analysis';
  if (id >= 6 && id <= 10) return 'Procedure Text & Infographic Information Scanning';
  if (id >= 11 && id <= 13) return 'Descriptive Text & Contextual Details';
  if (id >= 14 && id <= 16) return 'Recount Text & Chronological Sequence';
  return 'Analytical Exposition & Argumentative Reasoning';
};

export default function CbtTryoutInggris() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes

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

  const q = inggrisTryoutData[currentIdx];

  const handleMultipleAnswer = (optId: string) => {
    if (submitted) return;
    setAnswers({ ...answers, [q.id]: optId });
  };

  const handleComplexAnswer = (optId: string) => {
    if (submitted) return;
    const currentAnswers = answers[q.id] || [];
    const newAnswers = currentAnswers.includes(optId)
      ? currentAnswers.filter((id: string) => id !== optId)
      : [...currentAnswers, optId];
    setAnswers({ ...answers, [q.id]: newAnswers });
  };

  const handleTableAnswer = (statementId: string, value: string) => {
    if (submitted) return;
    const currentAnswers = answers[q.id] || {};
    setAnswers({ ...answers, [q.id]: { ...currentAnswers, [statementId]: value } });
  };

  const next = () => {
    if (currentIdx < inggrisTryoutData.length - 1) setCurrentIdx(currentIdx + 1);
  };

  const prev = () => {
    if (currentIdx > 0) setCurrentIdx(currentIdx - 1);
  };

  const evaluation = useMemo(() => {
    let correct = 0;
    const strongTopics = new Set<string>();
    const weakTopics = new Set<string>();

    inggrisTryoutData.forEach(question => {
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

      const topic = getInggrisTopic(question.id);
      if (isQuestionCorrect) {
        correct++;
        strongTopics.add(topic);
      } else {
        weakTopics.add(topic);
      }
    });

    const total = inggrisTryoutData.length;
    const wrong = total - correct;
    const scaledScore = Math.round(200 + (correct / total) * 800);

    const report: CbtReportData = {
      title: 'Try Out Bahasa Inggris',
      subject: 'Bahasa Inggris',
      score: scaledScore,
      correctCount: correct,
      wrongCount: wrong,
      totalQuestions: total,
      targetPTN: 'Universitas Gadjah Mada',
      targetProdi: 'Hubungan Internasional & Sastra Inggris',
      keketatan: 'Keketatan Sangat Kompetitif',
      strongSubjects: Array.from(strongTopics),
      weakSubjects: Array.from(weakTopics),
      radarScores: {
        'Reading Comprehension': Math.min(100, Math.round((correct / total) * 100)),
        'Grammar & Context': Math.min(100, Math.round((correct / total) * 90 + 10)),
        'Vocabulary & Lexis': Math.min(100, Math.round((correct / total) * 88 + 12)),
        'Critical Inference': Math.min(100, Math.round((correct / total) * 95)),
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
            setTimeLeft(20 * 60);
          }}
        />
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <div>Soal {currentIdx + 1} dari {inggrisTryoutData.length}</div>
        <div className={`font-bold ${timeLeft < 60 ? 'text-red-600' : 'text-slate-700'}`}>Waktu: {formatTime(timeLeft)}</div>
      </div>
      
      {q.readingText && (
        <div className="bg-slate-50 p-4 rounded-lg mb-6 text-sm text-slate-700 whitespace-pre-line border border-slate-200">
          {q.readingText}
        </div>
      )}

      <p className="font-semibold text-lg mb-6">{q.text}</p>
      
      {q.type === 'multiple' && (
        <div className="space-y-2">
          {q.options?.map(opt => (
            <button
              key={opt.id}
              onClick={() => handleMultipleAnswer(opt.id)}
              className={`block w-full p-3 rounded border text-left ${answers[q.id] === opt.id ? 'bg-blue-100 border-blue-500' : 'bg-white border-slate-200'}`}
            >
              {opt.text}
            </button>
          ))}
        </div>
      )}
      
      {q.type === 'multiple-complex' && (
        <div className="space-y-2">
          {q.options?.map(opt => (
            <label key={opt.id} className={`flex items-center p-3 rounded border cursor-pointer ${answers[q.id]?.includes(opt.id) ? 'bg-blue-100 border-blue-500' : 'bg-white border-slate-200'}`}>
              <input type="checkbox" className="mr-3" checked={answers[q.id]?.includes(opt.id) || false} onChange={() => handleComplexAnswer(opt.id)} />
              {opt.text}
            </label>
          ))}
        </div>
      )}

      {q.type === 'true-false-table' && (
        <table className="w-full border-collapse border border-slate-200">
          <thead>
            <tr>
              <th className="p-2 border border-slate-200">Statement</th>
              <th className="p-2 border border-slate-200">Similarity</th>
              <th className="p-2 border border-slate-200">Difference</th>
            </tr>
          </thead>
          <tbody>
            {q.statements?.map(stmt => (
              <tr key={stmt.id}>
                <td className="p-2 border border-slate-200">{stmt.text}</td>
                <td className="p-2 border border-slate-200 text-center"><input type="radio" name={stmt.id.toString()} checked={answers[q.id]?.[stmt.id] === 'Similarity'} onChange={() => handleTableAnswer(stmt.id, 'Similarity')} /></td>
                <td className="p-2 border border-slate-200 text-center"><input type="radio" name={stmt.id.toString()} checked={answers[q.id]?.[stmt.id] === 'Difference'} onChange={() => handleTableAnswer(stmt.id, 'Difference')} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="mt-8 flex justify-between">
        <button onClick={prev} disabled={currentIdx === 0} className="px-4 py-2 bg-slate-200 rounded disabled:opacity-50">Sebelumnya</button>
        {currentIdx === inggrisTryoutData.length - 1 ? (
          <button onClick={() => setSubmitted(true)} className="px-4 py-2 bg-green-600 text-white rounded">Kirim Jawaban</button>
        ) : (
          <button onClick={next} className="px-4 py-2 bg-slate-200 rounded">Selanjutnya</button>
        )}
      </div>
    </div>
  );
}
