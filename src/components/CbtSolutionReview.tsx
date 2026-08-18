/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  ChevronLeft, 
  ChevronRight, 
  ArrowLeft, 
  BookOpen, 
  Trophy, 
  Filter, 
  Sparkles, 
  Check, 
  X,
  Layers,
  HelpCircle,
  Clock,
  RotateCcw
} from 'lucide-react';
import { Question, TryOut, ExamScore } from '../types';
import MathMarkdown from './MathMarkdown';

interface CbtSolutionReviewProps {
  tryout: TryOut;
  questions: Question[];
  answers: { [qId: string]: number | number[] };
  scoreResult: ExamScore;
  userProfile?: any;
  onBackToResult: () => void;
  onExitToDashboard: () => void;
}

export default function CbtSolutionReview({
  tryout,
  questions,
  answers,
  scoreResult,
  userProfile,
  onBackToResult,
  onExitToDashboard
}: CbtSolutionReviewProps) {
  const [filterMode, setFilterMode] = useState<'all' | 'correct' | 'wrong' | 'unanswered'>('all');
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number>(0);
  const [viewLayout, setViewLayout] = useState<'single' | 'list'>('single');

  // Helper to determine status of a question
  const getQuestionStatus = (q: Question) => {
    const userAns = answers[q.id];
    const isAnswered = userAns !== undefined && (!Array.isArray(userAns) || userAns.length > 0);
    
    if (!isAnswered) {
      return 'unanswered';
    }

    if (q.questionType === 'checkboxes') {
      const correctIndices = (q.correctAnswerIndices || [q.correctAnswerIndex]).slice().sort();
      const userIndices = (Array.isArray(userAns) ? userAns : [userAns]).slice().sort();
      const isCorrect = correctIndices.length === userIndices.length && correctIndices.every((val, idx) => val === userIndices[idx]);
      return isCorrect ? 'correct' : 'wrong';
    } else {
      const isCorrect = userAns === q.correctAnswerIndex;
      return isCorrect ? 'correct' : 'wrong';
    }
  };

  const questionStatuses = questions.map(q => ({
    question: q,
    status: getQuestionStatus(q)
  }));

  const correctCount = questionStatuses.filter(item => item.status === 'correct').length;
  const wrongCount = questionStatuses.filter(item => item.status === 'wrong').length;
  const unansweredCount = questionStatuses.filter(item => item.status === 'unanswered').length;

  const filteredQuestions = questionStatuses
    .map((item, originalIndex) => ({ ...item, originalIndex }))
    .filter(item => {
      if (filterMode === 'correct') return item.status === 'correct';
      if (filterMode === 'wrong') return item.status === 'wrong';
      if (filterMode === 'unanswered') return item.status === 'unanswered';
      return true;
    });

  const activeItem = filteredQuestions[selectedQuestionIndex] || filteredQuestions[0] || { question: questions[0], status: 'unanswered', originalIndex: 0 };
  const currentQ = activeItem.question;
  const currentStatus = activeItem.status;
  const originalQIndex = activeItem.originalIndex;

  const handleNext = () => {
    if (selectedQuestionIndex < filteredQuestions.length - 1) {
      setSelectedQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (selectedQuestionIndex > 0) {
      setSelectedQuestionIndex(prev => prev - 1);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Top Header Card */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-indigo-900/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={onBackToResult}
                className="px-3.5 py-1.5 bg-white/10 hover:bg-white/20 active:bg-white/30 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 backdrop-blur-md cursor-pointer border border-white/10"
              >
                <ArrowLeft className="w-4 h-4" /> Kembali ke Hasil Ujian
              </button>
              <span className="px-3 py-1 bg-indigo-500/30 text-indigo-200 border border-indigo-400/30 rounded-xl text-xs font-black uppercase tracking-wider">
                Halaman Pembahasan Soal
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-black font-display text-white tracking-tight">
              Pembahasan & Kunci Jawaban: {tryout.name}
            </h1>
            <p className="text-xs sm:text-sm text-indigo-200/80 max-w-2xl">
              Teliti setiap pembahasan detail, rumus kunci, dan penjelasan konsep di bawah ini untuk memperbaiki pemahaman dan memaksimalkan skor pada tryout berikutnya.
            </p>
          </div>

          {/* Score & Stat Summary Badges */}
          <div className="flex flex-wrap items-center gap-3 bg-white/10 p-3.5 rounded-2xl border border-white/15 backdrop-blur-md">
            <div className="text-center px-3 py-1">
              <span className="text-[10px] text-indigo-200 uppercase font-black tracking-widest block">Skor Akhir</span>
              <span className="text-2xl font-black text-amber-300 font-mono">{scoreResult.score}</span>
            </div>
            <div className="h-8 w-px bg-white/20"></div>
            <div className="text-center px-3 py-1">
              <span className="text-[10px] text-emerald-300 uppercase font-black tracking-widest block">Benar</span>
              <span className="text-xl font-black text-emerald-400 font-mono">{correctCount}</span>
            </div>
            <div className="h-8 w-px bg-white/20"></div>
            <div className="text-center px-3 py-1">
              <span className="text-[10px] text-rose-300 uppercase font-black tracking-widest block">Salah</span>
              <span className="text-xl font-black text-rose-400 font-mono">{wrongCount}</span>
            </div>
            <div className="h-8 w-px bg-white/20"></div>
            <div className="text-center px-3 py-1">
              <span className="text-[10px] text-slate-300 uppercase font-black tracking-widest block">Kosong</span>
              <span className="text-xl font-black text-slate-300 font-mono">{unansweredCount}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Control Bar: Filter Buttons & View Mode Toggle */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
        {/* Filter Badges */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
          <button
            onClick={() => {
              setFilterMode('all');
              setSelectedQuestionIndex(0);
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              filterMode === 'all'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Semua Soal ({questions.length})
          </button>
          <button
            onClick={() => {
              setFilterMode('correct');
              setSelectedQuestionIndex(0);
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              filterMode === 'correct'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200'
            }`}
          >
            <CheckCircle className="w-3.5 h-3.5" /> Benar ({correctCount})
          </button>
          <button
            onClick={() => {
              setFilterMode('wrong');
              setSelectedQuestionIndex(0);
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              filterMode === 'wrong'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200'
            }`}
          >
            <XCircle className="w-3.5 h-3.5" /> Salah ({wrongCount})
          </button>
          <button
            onClick={() => {
              setFilterMode('unanswered');
              setSelectedQuestionIndex(0);
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              filterMode === 'unanswered'
                ? 'bg-slate-700 text-white shadow-sm'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <AlertCircle className="w-3.5 h-3.5" /> Tidak Dijawab ({unansweredCount})
          </button>
        </div>

        {/* View Layout Toggle */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            onClick={() => setViewLayout(viewLayout === 'single' ? 'list' : 'single')}
            className="px-3 py-1.5 text-xs font-bold border border-slate-200 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5 text-indigo-600" />
            <span>{viewLayout === 'single' ? 'Tampilkan Semua Soal Sekaligus' : 'Tampilan Per Nomor Soal'}</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {viewLayout === 'single' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Active Question & Explanation Panel (Left - 8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {filteredQuestions.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto text-xl">
                  🔍
                </div>
                <h3 className="font-extrabold text-slate-800 text-base">Tidak ada soal dengan filter ini</h3>
                <p className="text-xs text-slate-400">Silakan pilih kategori filter lain di bagian atas.</p>
                <button
                  onClick={() => setFilterMode('all')}
                  className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 cursor-pointer"
                >
                  Tampilkan Semua Soal
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                
                {/* Question Header Card */}
                <div className="bg-slate-900 text-white p-5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-black text-sm flex items-center justify-center shadow-sm">
                      {originalQIndex + 1}
                    </span>
                    <div>
                      <h4 className="font-extrabold text-sm text-white flex items-center gap-2">
                        Soal Nomor {originalQIndex + 1}
                        <span className="text-slate-400 font-normal text-xs">• {currentQ.subject}</span>
                      </h4>
                      {currentQ.bab && (
                        <p className="text-[11px] text-indigo-300 font-semibold">{currentQ.bab}</p>
                      )}
                    </div>
                  </div>

                  {/* Status Pill Badge */}
                  <div>
                    {currentStatus === 'correct' && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 rounded-xl text-xs font-black">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Jawaban Anda Benar
                      </span>
                    )}
                    {currentStatus === 'wrong' && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-500/20 text-rose-300 border border-rose-400/30 rounded-xl text-xs font-black">
                        <XCircle className="w-3.5 h-3.5 text-rose-400" /> Jawaban Anda Salah
                      </span>
                    )}
                    {currentStatus === 'unanswered' && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-400/30 rounded-xl text-xs font-black">
                        <AlertCircle className="w-3.5 h-3.5 text-amber-400" /> Tidak Dijawab
                      </span>
                    )}
                  </div>
                </div>

                {/* Question Statement Body */}
                <div className="p-6 sm:p-8 space-y-6 border-b border-slate-100">
                  <div className="text-sm sm:text-base text-slate-800 leading-relaxed font-sans font-medium">
                    <MathMarkdown content={currentQ.text} />
                  </div>

                  {/* Options List with comparative coloring */}
                  <div className="space-y-3 pt-2">
                    <h5 className="text-[11px] font-black text-slate-400 uppercase tracking-wider">
                      Pilihan Jawaban:
                    </h5>

                    {currentQ.options.map((opt, optIdx) => {
                      const userAns = answers[currentQ.id];
                      const isUserChosen = currentQ.questionType === 'checkboxes'
                        ? Array.isArray(userAns) && userAns.includes(optIdx)
                        : userAns === optIdx;

                      const isKeyAnswer = currentQ.questionType === 'checkboxes'
                        ? (currentQ.correctAnswerIndices || [currentQ.correctAnswerIndex]).includes(optIdx)
                        : currentQ.correctAnswerIndex === optIdx;

                      let rowClass = "border-slate-200 bg-slate-50/50 text-slate-700";
                      let badgeTag: React.ReactNode = null;

                      if (isKeyAnswer && isUserChosen) {
                        rowClass = "border-emerald-500 bg-emerald-50 text-emerald-950 ring-1 ring-emerald-500 font-semibold";
                        badgeTag = (
                          <span className="ml-auto inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-[10px] font-black bg-emerald-600 text-white uppercase tracking-wider">
                            <Check className="w-3 h-3" /> Pilihan Anda (Benar)
                          </span>
                        );
                      } else if (isKeyAnswer) {
                        rowClass = "border-emerald-500 bg-emerald-50/70 text-emerald-950 ring-1 ring-emerald-500 font-semibold";
                        badgeTag = (
                          <span className="ml-auto inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-[10px] font-black bg-emerald-600 text-white uppercase tracking-wider">
                            <Check className="w-3 h-3" /> Kunci Jawaban
                          </span>
                        );
                      } else if (isUserChosen) {
                        rowClass = "border-rose-400 bg-rose-50 text-rose-950 ring-1 ring-rose-400 font-semibold";
                        badgeTag = (
                          <span className="ml-auto inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-[10px] font-black bg-rose-600 text-white uppercase tracking-wider">
                            <X className="w-3 h-3" /> Pilihan Anda (Salah)
                          </span>
                        );
                      }

                      return (
                        <div
                          key={optIdx}
                          className={`p-4 border rounded-2xl text-xs sm:text-sm flex items-center gap-3 transition-all ${rowClass}`}
                        >
                          <span className={`w-7 h-7 rounded-xl font-bold flex items-center justify-center text-xs shrink-0 ${
                            isKeyAnswer
                              ? 'bg-emerald-600 text-white'
                              : isUserChosen
                                ? 'bg-rose-600 text-white'
                                : 'bg-slate-200 text-slate-700'
                          }`}>
                            {String.fromCharCode(65 + optIdx)}
                          </span>

                          <div className="flex-1">
                            <MathMarkdown content={opt} />
                          </div>

                          {badgeTag}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Explanation Box (Pembahasan Mendalam) */}
                <div className="p-6 sm:p-8 bg-gradient-to-br from-indigo-50/60 via-blue-50/40 to-slate-50 border-t border-indigo-100/70 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-indigo-600 text-white rounded-xl shadow-sm">
                      <Sparkles className="w-4 h-4 text-amber-300" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm sm:text-base text-slate-900">
                        Pembahasan Lengkap & Kunci Jawaban
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        Kunci Jawaban Resmi:{' '}
                        <strong className="text-emerald-700 font-black text-xs">
                          {currentQ.questionType === 'checkboxes'
                            ? (currentQ.correctAnswerIndices || [currentQ.correctAnswerIndex]).map(i => String.fromCharCode(65 + i)).join(', ')
                            : String.fromCharCode(65 + (currentQ.correctAnswerIndex ?? 0))}
                        </strong>
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border border-indigo-100 rounded-2xl p-5 shadow-sm text-xs sm:text-sm text-slate-800 leading-relaxed">
                    <MathMarkdown content={currentQ.explanation || 'Pembahasan detail sedang disiapkan oleh tim pengajar.'} />
                  </div>
                </div>

                {/* Prev / Next Footer Buttons */}
                <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center">
                  <button
                    onClick={handlePrev}
                    disabled={selectedQuestionIndex === 0}
                    className="px-4 py-2 text-xs sm:text-sm font-bold border border-slate-200 rounded-xl bg-white hover:bg-slate-50 disabled:opacity-40 flex items-center gap-1.5 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" /> Soal Sebelumnya
                  </button>

                  <span className="text-xs text-slate-500 font-bold">
                    Soal {selectedQuestionIndex + 1} dari {filteredQuestions.length}
                  </span>

                  <button
                    onClick={handleNext}
                    disabled={selectedQuestionIndex === filteredQuestions.length - 1}
                    className="px-4 py-2 text-xs sm:text-sm font-bold border border-slate-200 rounded-xl bg-white hover:bg-slate-50 disabled:opacity-40 flex items-center gap-1.5 cursor-pointer"
                  >
                    Soal Berikutnya <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            )}

          </div>

          {/* Quick Navigator Sidebar (Right - 4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-6 sticky top-6">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider">
                Daftar Nomor Pembahasan
              </h4>
              <span className="text-[11px] text-indigo-600 font-bold">
                {filteredQuestions.length} Butir
              </span>
            </div>

            {/* Grid of Number Buttons */}
            <div className="grid grid-cols-5 gap-2.5">
              {questions.map((q, idx) => {
                const status = getQuestionStatus(q);
                const isSelectedInFilter = filteredQuestions.some(item => item.originalIndex === idx);
                const isActive = activeItem.originalIndex === idx;

                let colorStyle = "bg-slate-100 text-slate-600 border-slate-200";
                if (status === 'correct') {
                  colorStyle = "bg-emerald-50 text-emerald-700 border-emerald-300 font-black";
                } else if (status === 'wrong') {
                  colorStyle = "bg-rose-50 text-rose-700 border-rose-300 font-black";
                } else {
                  colorStyle = "bg-slate-100 text-slate-500 border-slate-200";
                }

                if (isActive) {
                  colorStyle += " ring-2 ring-indigo-600 ring-offset-2 scale-105 shadow-md";
                }

                return (
                  <button
                    key={q.id}
                    disabled={!isSelectedInFilter}
                    onClick={() => {
                      const foundIdx = filteredQuestions.findIndex(item => item.originalIndex === idx);
                      if (foundIdx !== -1) {
                        setSelectedQuestionIndex(foundIdx);
                      }
                    }}
                    className={`aspect-square border rounded-2xl text-xs font-extrabold flex flex-col items-center justify-center transition-all cursor-pointer ${colorStyle} ${
                      !isSelectedInFilter ? 'opacity-30 cursor-not-allowed' : 'hover:scale-105'
                    }`}
                  >
                    <span>{idx + 1}</span>
                    <span className="text-[9px]">
                      {status === 'correct' ? '✓' : status === 'wrong' ? '✗' : '–'}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="border-t border-slate-100 pt-4 space-y-2 text-xs text-slate-600">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-md bg-emerald-500"></span>
                  <span>Jawaban Benar</span>
                </span>
                <strong className="text-emerald-700">{correctCount}</strong>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-md bg-rose-500"></span>
                  <span>Jawaban Salah</span>
                </span>
                <strong className="text-rose-700">{wrongCount}</strong>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-md bg-slate-300"></span>
                  <span>Tidak Dijawab</span>
                </span>
                <strong className="text-slate-500">{unansweredCount}</strong>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-2 border-t border-slate-100">
              <button
                onClick={onBackToResult}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-2xl text-xs transition-colors shadow-md shadow-indigo-100 flex items-center justify-center gap-2 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" /> Kembali ke Ringkasan Skor
              </button>
              <button
                onClick={onExitToDashboard}
                className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold rounded-2xl text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                🏠 Selesai & Tutup Simulasi
              </button>
            </div>

          </div>

        </div>
      ) : (
        /* List View Mode (Show all questions continuously on one screen) */
        <div className="space-y-6">
          {filteredQuestions.map((item, fIdx) => {
            const q = item.question;
            const qIdx = item.originalIndex;
            const status = item.status;

            return (
              <div key={q.id} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="bg-slate-900 text-white p-4 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-black text-xs flex items-center justify-center">
                      {qIdx + 1}
                    </span>
                    <span className="font-extrabold text-sm">Soal Nomor {qIdx + 1} • {q.subject}</span>
                  </div>

                  <div>
                    {status === 'correct' && (
                      <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 rounded-lg text-xs font-bold">
                        ✓ Benar
                      </span>
                    )}
                    {status === 'wrong' && (
                      <span className="px-2.5 py-0.5 bg-rose-500/20 text-rose-300 border border-rose-400/30 rounded-lg text-xs font-bold">
                        ✗ Salah
                      </span>
                    )}
                    {status === 'unanswered' && (
                      <span className="px-2.5 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-400/30 rounded-lg text-xs font-bold">
                        – Tidak Dijawab
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="text-sm text-slate-800 leading-relaxed font-sans font-medium">
                    <MathMarkdown content={q.text} />
                  </div>

                  <div className="space-y-2">
                    {q.options.map((opt, oIdx) => {
                      const userAns = answers[q.id];
                      const isUser = q.questionType === 'checkboxes'
                        ? Array.isArray(userAns) && userAns.includes(oIdx)
                        : userAns === oIdx;
                      const isKey = q.questionType === 'checkboxes'
                        ? (q.correctAnswerIndices || [q.correctAnswerIndex]).includes(oIdx)
                        : q.correctAnswerIndex === oIdx;

                      let cls = "bg-slate-50 border-slate-200 text-slate-700";
                      if (isKey) cls = "bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold";
                      else if (isUser) cls = "bg-rose-50 border-rose-400 text-rose-950 font-semibold";

                      return (
                        <div key={oIdx} className={`p-3 border rounded-xl text-xs flex items-center gap-2 ${cls}`}>
                          <span className={`w-6 h-6 rounded-lg font-bold flex items-center justify-center text-xs ${
                            isKey ? 'bg-emerald-600 text-white' : isUser ? 'bg-rose-600 text-white' : 'bg-slate-200 text-slate-700'
                          }`}>
                            {String.fromCharCode(65 + oIdx)}
                          </span>
                          <div className="flex-1">
                            <MathMarkdown content={opt} />
                          </div>
                          {isKey && <span className="text-[10px] font-black text-emerald-700 uppercase">Kunci</span>}
                          {isUser && !isKey && <span className="text-[10px] font-black text-rose-700 uppercase">Jawaban Anda</span>}
                        </div>
                      );
                    })}
                  </div>

                  <div className="p-4 bg-indigo-50/60 border border-indigo-100 rounded-2xl space-y-2">
                    <h5 className="text-xs font-black text-indigo-900 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Pembahasan:
                    </h5>
                    <div className="text-xs text-slate-800 leading-relaxed">
                      <MathMarkdown content={q.explanation || 'Pembahasan belum tersedia.'} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="flex justify-center gap-3 pt-4">
            <button
              onClick={onBackToResult}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-2xl text-xs shadow-md transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 inline mr-1" /> Kembali ke Ringkasan Skor
            </button>
            <button
              onClick={onExitToDashboard}
              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-extrabold rounded-2xl text-xs transition-all cursor-pointer"
            >
              Selesai & Tutup Simulasi
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
