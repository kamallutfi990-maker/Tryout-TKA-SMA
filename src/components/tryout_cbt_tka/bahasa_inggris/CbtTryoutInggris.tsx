import React, { useState, useEffect } from 'react';
import { inggrisTryoutData } from './inggrisTryoutData';
import HtmlPembahasanModal from '../../HtmlPembahasanModal';

export default function CbtTryoutInggris() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showPembahasan, setShowPembahasan] = useState(false);
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

  if (submitted) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Kuis Selesai</h2>
        <p className="text-lg">Waktu habis atau kuis telah dikirim.</p>
        <button className="px-6 py-2 mt-4 bg-blue-600 text-white rounded-lg" onClick={() => { setSubmitted(false); setAnswers({}); setCurrentIdx(0); setTimeLeft(20 * 60); }}>Ulangi Kuis</button>
        <button className="px-6 py-2 mt-4 ml-4 bg-green-600 text-white rounded-lg" onClick={() => setShowPembahasan(true)}>Lihat Pembahasan</button>
        <HtmlPembahasanModal
          isOpen={showPembahasan}
          onClose={() => setShowPembahasan(false)}
          title="Pembahasan Bahasa Inggris"
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
