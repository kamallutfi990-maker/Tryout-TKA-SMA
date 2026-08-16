import React, { useState, useEffect } from 'react';
import { indoTryoutData } from './indoTryoutData';
import HtmlPembahasanModal from '../../HtmlPembahasanModal';

const CbtTryoutIndo: React.FC = () => {
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

  const q = indoTryoutData[currentIdx];

  const handleAnswer = (val: any) => {
    setAnswers(prev => ({ ...prev, [q.id]: val }));
  };

  const calculateScore = () => {
    let score = 0;
    indoTryoutData.forEach(question => {
      const ans = answers[question.id];
      if (question.type === 'multiple') {
        if (ans === question.options?.find(o => o.correct)?.id) score++;
      } else if (question.type === 'multiple-complex') {
        const correctIds = question.correctAnswer || [];
        if (Array.isArray(ans) && ans.length === correctIds.length && ans.every(id => correctIds.includes(id))) score++;
      } else if (question.type === 'true-false-table') {
        let allCorrect = true;
        question.statements?.forEach(s => {
          if (ans?.[s.id] !== s.correct) allCorrect = false;
        });
        if (allCorrect) score++;
      }
    });
    return (score / indoTryoutData.length) * 100;
  };

  if (submitted) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Hasil Try Out</h2>
        <p className="text-4xl font-bold text-blue-600">{calculateScore().toFixed(2)}</p>
        <div className="flex gap-4 justify-center mt-6">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg" onClick={() => { setSubmitted(false); setAnswers({}); setCurrentIdx(0); setTimeLeft(20 * 60); }}>Ulangi</button>
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg" onClick={() => setShowPembahasan(true)}>Lihat Pembahasan</button>
        </div>
        <HtmlPembahasanModal
            isOpen={showPembahasan}
            onClose={() => setShowPembahasan(false)}
            title="Pembahasan Bahasa Indonesia"
        />
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <div>Soal {currentIdx + 1} dari {indoTryoutData.length}</div>
        <div className={`font-bold ${timeLeft < 60 ? 'text-red-600' : 'text-slate-700'}`}>Waktu: {formatTime(timeLeft)}</div>
      </div>
      
      {q.readingText && (
        <div className="bg-slate-50 p-4 rounded-lg mb-6 text-sm text-slate-700 whitespace-pre-line border border-slate-200">
          {q.readingText}
        </div>
      )}

      <p className="font-semibold text-lg mb-6">{q.text}</p>
      
      {q.type === 'multiple' && (
        <div className="space-y-3">
          {q.options?.map(o => (
            <button key={o.id} onClick={() => handleAnswer(o.id)} className={`block w-full text-left p-4 rounded-lg border ${answers[q.id] === o.id ? 'bg-blue-100 border-blue-500' : 'bg-white border-slate-200'}`}>{o.text}</button>
          ))}
        </div>
      )}
      
      {q.type === 'multiple-complex' && (
        <div className="space-y-3">
          {q.options?.map(o => (
            <button key={o.id} onClick={() => {
              const currentAns = answers[q.id] || [];
              const newAns = currentAns.includes(o.id) ? currentAns.filter((id: string) => id !== o.id) : [...currentAns, o.id];
              handleAnswer(newAns);
            }} className={`block w-full text-left p-4 rounded-lg border ${(answers[q.id] || []).includes(o.id) ? 'bg-blue-100 border-blue-500' : 'bg-white border-slate-200'}`}>{o.text}</button>
          ))}
        </div>
      )}

      {q.type === 'true-false-table' && (
        <div className="space-y-3">
          {q.statements?.map(s => (
            <div key={s.id} className="flex items-center gap-4 p-4 border rounded-lg bg-white border-slate-200">
              <span className="flex-grow">{s.text}</span>
              <button onClick={() => handleAnswer({ ...(answers[q.id] || {}), [s.id]: true })} className={`px-4 py-2 rounded-lg ${answers[q.id]?.[s.id] === true ? 'bg-blue-600 text-white' : 'bg-slate-200'}`}>Benar</button>
              <button onClick={() => handleAnswer({ ...(answers[q.id] || {}), [s.id]: false })} className={`px-4 py-2 rounded-lg ${answers[q.id]?.[s.id] === false ? 'bg-red-600 text-white' : 'bg-slate-200'}`}>Salah</button>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-8 flex justify-between">
        <button disabled={currentIdx === 0} onClick={() => setCurrentIdx(prev => prev - 1)} className="px-4 py-2 bg-slate-200 rounded-lg">Sebelumnya</button>
        {currentIdx === indoTryoutData.length - 1 ? (
          <button onClick={() => setSubmitted(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg">Selesai</button>
        ) : (
          <button onClick={() => setCurrentIdx(prev => prev + 1)} className="px-4 py-2 bg-blue-600 text-white rounded-lg">Selanjutnya</button>
        )}
      </div>
    </div>
  );
};

export default CbtTryoutIndo;
