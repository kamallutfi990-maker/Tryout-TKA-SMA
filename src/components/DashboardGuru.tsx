/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BookOpen, Video, Users, ClipboardList, PlusCircle, CheckCircle, GraduationCap, ArrowRight, Database, Plus, Trash2, Link, Upload, Image, Youtube, X, FileText, Trophy, HardDrive, Folder, FileSpreadsheet, Sparkles, ExternalLink, Award, Bot } from 'lucide-react';
import { FirestoreSimulator, getQuestions, getTryouts, getMaterials, addMaterial, deleteMaterial, LearningMaterial, getAllScores, ExamScore } from '../lib/firestoreSimulator';
import { Question, TryOut } from '../types';
import AiKnowledgeManager from './AiKnowledgeManager';

interface DashboardGuruProps {
  userProfile: any;
  onLogout: () => void;
}

export default function DashboardGuru({ userProfile, onLogout }: DashboardGuruProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'submissions' | 'add-material' | 'questions' | 'ai-knowledge'>('overview');
  
  // Real dynamic CBT student score submissions
  const [scoresList, setScoresList] = useState<ExamScore[]>(() => getAllScores());

  useEffect(() => {
    const sync = () => {
      setTryouts(getTryouts());
      setScoresList(getAllScores());
    };
    sync();
    window.addEventListener('tka_tryouts_updated', sync);
    window.addEventListener('tka_scores_updated', sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener('tka_tryouts_updated', sync);
      window.removeEventListener('tka_scores_updated', sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  // Calculate dynamic statistics based strictly on real incoming data
  const totalSubmissionsCount = scoresList.length;
  const uniqueStudentsCount = new Set(scoresList.map(s => s.userId)).size;
  const avgCbtScore = totalSubmissionsCount > 0
    ? Math.round(scoresList.reduce((sum, s) => sum + s.score, 0) / totalSubmissionsCount)
    : 0;
  const passedCount = scoresList.filter(s => s.passed).length;
  const passedPercentage = totalSubmissionsCount > 0
    ? Math.round((passedCount / totalSubmissionsCount) * 100)
    : 0;

  const highCount = scoresList.filter(s => s.score > 700).length;
  const highPct = totalSubmissionsCount > 0 ? Math.round((highCount / totalSubmissionsCount) * 100) : 0;

  const midCount = scoresList.filter(s => s.score >= 500 && s.score <= 700).length;
  const midPct = totalSubmissionsCount > 0 ? Math.round((midCount / totalSubmissionsCount) * 100) : 0;

  const lowCount = scoresList.filter(s => s.score < 500).length;
  const lowPct = totalSubmissionsCount > 0 ? Math.round((lowCount / totalSubmissionsCount) * 100) : 0;

  // Form states for material
  const [matTitle, setMatTitle] = useState('');
  const [matSubject, setMatSubject] = useState('Matematika Lanjut');
  const [matBab, setMatBab] = useState('');
  const [matDesc, setMatDesc] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Learning materials state list
  const [materialsList, setMaterialsList] = useState<LearningMaterial[]>(getMaterials());

  // Form states for supplementary files
  const [matPdfFile, setMatPdfFile] = useState('');
  const [matPdfUrl, setMatPdfUrl] = useState('');
  const [guruPdfSource, setGuruPdfSource] = useState<'drive' | 'file_manager' | 'galeri'>('drive');
  const [matVideoFile, setMatVideoFile] = useState('');
  const [matVideoUrl, setMatVideoUrl] = useState('');
  const [guruVideoSource, setGuruVideoSource] = useState<'drive' | 'file_manager' | 'galeri'>('drive');
  const [matYoutubeUrl, setMatYoutubeUrl] = useState('');
  const [matQuizUrl, setMatQuizUrl] = useState('');
  const [matGFormUrl, setMatGFormUrl] = useState('');

  const handleGuruPdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setMatPdfFile(file.name);
    const blobUrl = URL.createObjectURL(file);
    setMatPdfUrl(blobUrl);
  };

  const handleGuruVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setMatVideoFile(file.name);
    const blobUrl = URL.createObjectURL(file);
    setMatVideoUrl(blobUrl);
  };

  // Questions and Tryouts lists & form states for Guru
  const [questions, setQuestions] = useState<Question[]>(getQuestions());
  const [tryouts, setTryouts] = useState<TryOut[]>(getTryouts());

  useEffect(() => {
    const sync = () => setTryouts(getTryouts());
    sync();
    window.addEventListener('tka_tryouts_updated', sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener('tka_tryouts_updated', sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  // Form states for creating a new question
  const [qText, setQText] = useState('');
  const [qSubject, setQSubject] = useState('Matematika Lanjut');
  const [qDiff, setQDiff] = useState<'Mudah' | 'Sedang' | 'Sulit'>('Sedang');
  const [qBab, setQBab] = useState('');
  const [qOptA, setQOptA] = useState('');
  const [qOptB, setQOptB] = useState('');
  const [qOptC, setQOptC] = useState('');
  const [qOptD, setQOptD] = useState('');
  const [qOptE, setQOptE] = useState('');
  const [qCorrect, setQCorrect] = useState(0);
  const [qCorrectCheckbox, setQCorrectCheckbox] = useState<boolean[]>([false, false, false, false, false]); // For A, B, C, D, E checkboxes
  const [qType, setQType] = useState<'multiple_choice' | 'checkboxes' | 'dropdown'>('multiple_choice');
  const [qImageUrl, setQImageUrl] = useState('');
  const [qExplanation, setQExplanation] = useState('');
  const [qExpImage, setQExpImage] = useState('');
  const [qExpVideo, setQExpVideo] = useState('');
  const [qExpYoutube, setQExpYoutube] = useState('');
  const [qGeminiQuizUrl, setQGeminiQuizUrl] = useState('');

  // TryOut upload & creation states
  const [toType, setToType] = useState<'cbt' | 'google_form'>('cbt');
  const [toCategory, setToCategory] = useState<'UTBK' | 'TKA'>('UTBK');
  const [gFormName, setGFormName] = useState('');
  const [gFormSubject, setGFormSubject] = useState('Matematika Lanjut');
  const [gFormUrl, setGFormUrl] = useState('');
  const [gFormDuration, setGFormDuration] = useState(60);
  const [gFormPassingGrade, setGFormPassingGrade] = useState(600);
  const [toQuestionCount, setToQuestionCount] = useState(15);

  const handleAddMaterial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!matTitle || !matBab || !matDesc) {
      alert('Mohon isi seluruh kolom materi.');
      return;
    }

    const newMaterial: LearningMaterial = {
      id: `m_${Date.now()}`,
      title: matTitle,
      subject: matSubject,
      bab: matBab,
      description: matDesc,
      pdfName: matPdfFile || undefined,
      pdfUrl: matPdfUrl || undefined,
      videoName: matVideoFile || undefined,
      videoUrl: matVideoUrl || undefined,
      youtubeUrl: matYoutubeUrl || undefined,
      quizUrl: matQuizUrl || undefined,
      gFormUrl: matGFormUrl || undefined,
      guruName: userProfile?.displayName || 'Guru TKA',
      createdAt: new Date().toISOString()
    };

    addMaterial(newMaterial);
    setMaterialsList(getMaterials());

    setSuccessMsg('Sukses! Materi pembelajaran baru telah dipublikasikan untuk seluruh siswa.');
    setMatTitle('');
    setMatBab('');
    setMatDesc('');
    setMatPdfFile('');
    setMatPdfUrl('');
    setMatVideoFile('');
    setMatVideoUrl('');
    setMatYoutubeUrl('');
    setMatQuizUrl('');
    setMatGFormUrl('');
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  const handleDeleteMaterial = (id: string) => {
    deleteMaterial(id);
    setMaterialsList(getMaterials());
    setSuccessMsg('Materi berhasil dihapus secara permanen.');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleCreateQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!qText || !qBab || !qOptA || !qOptB || !qOptC || !qOptD || !qOptE || !qExplanation) {
      alert('Mohon lengkapi seluruh kolom input pertanyaan.');
      return;
    }

    // For checkboxes, calculate active correct indices
    const selectedIndices: number[] = [];
    if (qType === 'checkboxes') {
      qCorrectCheckbox.forEach((val, idx) => {
        if (val) selectedIndices.push(idx);
      });
      if (selectedIndices.length === 0) {
        alert('Mohon pilih minimal satu kunci jawaban benar untuk tipe soal checkboxes.');
        return;
      }
    }

    // Generate correctAnswer string
    let correctAnswerString = '';
    if (qType === 'checkboxes') {
      correctAnswerString = selectedIndices.map(idx => String.fromCharCode(65 + idx)).join(', ');
    } else {
      correctAnswerString = String.fromCharCode(65 + qCorrect);
    }

    const newQ: Question = {
      id: `custom_q_g_${Date.now()}`,
      text: qText,
      options: [qOptA, qOptB, qOptC, qOptD, qOptE],
      correctAnswerIndex: qType === 'checkboxes' ? selectedIndices[0] : qCorrect,
      correctAnswerIndices: qType === 'checkboxes' ? selectedIndices : undefined,
      correctAnswer: correctAnswerString,
      explanation: qExplanation,
      subject: qSubject,
      difficulty: qDiff,
      bab: qBab,
      year: '2026',
      imageUrl: qImageUrl || undefined,
      questionType: qType,
      explanationImage: qExpImage || undefined,
      explanationVideo: qExpVideo || undefined,
      explanationYoutubeUrl: qExpYoutube || undefined,
      geminiQuizUrl: qGeminiQuizUrl || undefined
    };

    FirestoreSimulator.addCustomQuestion(newQ);
    setQuestions(getQuestions());
    setSuccessMsg('✓ Pertanyaan Baru berhasil ditambahkan ke Bank Soal CBT.');
    
    setQText('');
    setQBab('');
    setQOptA('');
    setQOptB('');
    setQOptC('');
    setQOptD('');
    setQOptE('');
    setQCorrect(0);
    setQCorrectCheckbox([false, false, false, false, false]);
    setQType('multiple_choice');
    setQImageUrl('');
    setQExplanation('');
    setQExpImage('');
    setQExpVideo('');
    setQExpYoutube('');
    setQGeminiQuizUrl('');

    setTimeout(() => setSuccessMsg(''), 4000);
  };

  const handleDeleteQuestion = (qId: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus pertanyaan ini?')) {
      FirestoreSimulator.deleteCustomQuestion(qId);
      setQuestions(getQuestions());
    }
  };

  const handleUpdateQuestionQuizUrl = (qId: string, url: string) => {
    FirestoreSimulator.updateQuestionQuizUrl(qId, url);
    setQuestions(getQuestions());
  };

  const handleCreateGoogleFormTryOut = (e: React.FormEvent) => {
    e.preventDefault();
    if (!gFormName) {
      alert('Mohon isi nama paket Try Out.');
      return;
    }
    if (toType === 'google_form' && !gFormUrl) {
      alert('Mohon lengkapi link URL Google Form.');
      return;
    }

    const newTO: TryOut = {
      id: `${toType}_to_g_${Date.now()}`,
      name: gFormName,
      duration: gFormDuration,
      passingGrade: gFormPassingGrade,
      questionCount: toType === 'cbt' ? toQuestionCount : 0,
      subject: gFormSubject,
      category: toCategory,
      randomizeQuestions: true,
      randomizeOptions: true,
      startDate: new Date().toISOString().split('T')[0],
      endDate: '2026-12-31',
      solvedCount: 0,
      googleFormUrl: toType === 'google_form' ? gFormUrl : undefined
    };

    FirestoreSimulator.addCustomTryOut(newTO);
    setTryouts(getTryouts());
    setSuccessMsg(
      `✓ Paket ${toCategory} (${toType === 'cbt' ? 'Simulasi CBT' : 'Google Form'}) Baru berhasil ditambahkan!`
    );

    setGFormName('');
    setGFormUrl('');
    setGFormDuration(60);
    setGFormPassingGrade(600);
    setToQuestionCount(15);

    setTimeout(() => setSuccessMsg(''), 4000);
  };

  const handleDeleteTryOut = (toId: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus paket Try Out ini?')) {
      FirestoreSimulator.deleteCustomTryOut(toId);
      setTryouts(getTryouts());
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans" id="dashboard-guru">
      
      {/* Upper Navigation Bar */}
      <header className="bg-white border-b border-slate-100 shadow-sm shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="bg-blue-600 text-white w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-lg">T</span>
            <div>
              <h1 className="text-base font-extrabold text-slate-900 leading-none">TKA SMA Indonesia</h1>
              <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">Dashboard Guru Pengajar</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-sm font-bold text-slate-800 block">Guru: {userProfile.displayName}</span>
              <span className="text-xs text-slate-400">Pengajar TKA Nasional</span>
            </div>
            <button
              onClick={onLogout}
              className="px-4 py-2 rounded-xl text-xs font-bold text-red-600 hover:bg-red-50 border border-red-100 transition-colors cursor-pointer"
            >
              Keluar Sesi
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Nav */}
        <aside className="lg:col-span-3 lg:w-64 shrink-0 space-y-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`w-full text-left px-4 py-3 rounded-xl font-bold text-xs flex items-center gap-2.5 transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-blue-50 text-[#2563EB] border border-blue-100/50 shadow-sm'
                : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200/60'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Pantau Progres Siswa</span>
          </button>
          <button
            onClick={() => setActiveTab('submissions')}
            className={`w-full text-left px-4 py-3 rounded-xl font-bold text-xs flex items-center gap-2.5 transition-all cursor-pointer ${
              activeTab === 'submissions'
                ? 'bg-blue-50 text-[#2563EB] border border-blue-100/50 shadow-sm'
                : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200/60'
            }`}
          >
            <ClipboardList className="w-4 h-4" />
            <span>Daftar Nilai CBT Siswa</span>
          </button>
          <button
            onClick={() => setActiveTab('add-material')}
            className={`w-full text-left px-4 py-3 rounded-xl font-bold text-xs flex items-center gap-2.5 transition-all cursor-pointer ${
              activeTab === 'add-material'
                ? 'bg-blue-50 text-[#2563EB] border border-blue-100/50 shadow-sm'
                : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200/60'
            }`}
          >
            <PlusCircle className="w-4 h-4" />
            <span>Posting Materi Pembelajaran</span>
          </button>
          <button
            onClick={() => setActiveTab('questions')}
            className={`w-full text-left px-4 py-3 rounded-xl font-bold text-xs flex items-center gap-2.5 transition-all cursor-pointer ${
              activeTab === 'questions'
                ? 'bg-blue-50 text-[#2563EB] border border-blue-100/50 shadow-sm'
                : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200/60'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>Kelola Bank Soal & Google Form CBT</span>
          </button>
          
          <button
            onClick={() => setActiveTab('ai-knowledge')}
            className={`w-full text-left px-4 py-3 rounded-xl font-bold text-xs flex items-center gap-2.5 transition-all cursor-pointer ${
              activeTab === 'ai-knowledge'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-200'
                : 'bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-900 hover:bg-purple-100 border border-purple-200/60 font-black'
            }`}
          >
            <Bot className="w-4 h-4 text-purple-600 group-hover:text-purple-700" />
            <div className="flex flex-col">
              <span>Bank Knowledge Base AI</span>
              <span className="text-[9px] opacity-80 font-normal">PDF, Markdown, Video & YT</span>
            </div>
          </button>
        </aside>

        {/* Workspace Panels */}
        <div className="flex-1">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="bg-white border border-slate-100 p-6 rounded-2xl flex items-center gap-4 shadow-sm">
                  <div className="bg-blue-50 text-blue-600 p-3 rounded-xl">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-bold block uppercase">TOTAL SISWA CBT</span>
                    <span className="text-2xl font-black text-slate-800">{uniqueStudentsCount} Siswa</span>
                    <span className="text-[10px] text-slate-500 font-medium block mt-0.5">({totalSubmissionsCount} total pengiriman ujian)</span>
                  </div>
                </div>

                <div className="bg-white border border-slate-100 p-6 rounded-2xl flex items-center gap-4 shadow-sm">
                  <div className="bg-emerald-50 text-emerald-600 p-3 rounded-xl">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-bold block uppercase">RATA-RATA SKOR CBT</span>
                    <span className="text-2xl font-black text-emerald-600">{avgCbtScore} / 1000</span>
                    <span className="text-[10px] text-slate-500 font-medium block mt-0.5">(berdasarkan realisasi data)</span>
                  </div>
                </div>

                <div className="bg-white border border-slate-100 p-6 rounded-2xl flex items-center gap-4 shadow-sm">
                  <div className="bg-amber-50 text-amber-600 p-3 rounded-xl">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-bold block uppercase">LOLOS PASSING GRADE</span>
                    <span className="text-2xl font-black text-amber-600">{passedPercentage}% Siswa</span>
                    <span className="text-[10px] text-slate-500 font-medium block mt-0.5">({passedCount} dari {totalSubmissionsCount} pengiriman)</span>
                  </div>
                </div>

              </div>

              {/* Class overview metrics & Quick alerts */}
              <div className="bg-white border border-slate-100 rounded-3xl p-6 space-y-4 shadow-sm">
                <div className="flex justify-between items-center">
                  <h3 className="font-extrabold text-slate-800 text-sm">Distribusi Nilai CBT Siswa (Realisasi Data)</h3>
                  <span className="text-xs font-bold text-slate-400">Total: {totalSubmissionsCount} Ujian</span>
                </div>
                
                <div className="space-y-3 pt-2">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                      <span>Sangat Tinggi (Skor &gt; 700)</span>
                      <span>{highPct}% ({highCount} Siswa)</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full rounded-full transition-all duration-500" style={{ width: `${highPct}%` }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                      <span>Cukup / Sedang (Skor 500 - 700)</span>
                      <span>{midPct}% ({midCount} Siswa)</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full transition-all duration-500" style={{ width: `${midPct}%` }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                      <span>Kurang (Skor &lt; 500)</span>
                      <span>{lowPct}% ({lowCount} Siswa)</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-red-500 h-full rounded-full transition-all duration-500" style={{ width: `${lowPct}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'submissions' && (
            <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden">
              <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <h3 className="font-extrabold text-slate-800 text-xs sm:text-sm uppercase tracking-wider">Data Pengumpulan Tryout CBT Siswa (Realisasi)</h3>
                <span className="text-xs font-bold text-slate-500">{totalSubmissionsCount} Pengiriman Realistis</span>
              </div>

              <div className="overflow-x-auto">
                {scoresList.length === 0 ? (
                  <div className="p-12 text-center text-slate-400 text-xs">
                    Belum ada pengiriman hasil ujian CBT dari siswa.
                  </div>
                ) : (
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-50 border-b border-slate-100 text-slate-400 font-extrabold uppercase">
                      <tr>
                        <th className="p-4">Nama Siswa</th>
                        <th className="p-4">Simulasi Ujian</th>
                        <th className="p-4">Skor TKA</th>
                        <th className="p-4">Tanggal Kirim</th>
                        <th className="p-4">Status Kelulusan</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {scoresList.map((scoreItem) => (
                        <tr key={scoreItem.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-4 font-bold text-slate-900">{scoreItem.userName || 'Siswa TKA'}</td>
                          <td className="p-4 font-semibold text-slate-600">{scoreItem.examName}</td>
                          <td className="p-4 font-black text-blue-700 font-mono">{scoreItem.score} / 1000</td>
                          <td className="p-4 text-slate-500 font-medium">
                            {new Date(scoreItem.createdAt).toLocaleDateString('id-ID', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </td>
                          <td className="p-4">
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                              scoreItem.passed
                                ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                                : 'bg-red-50 text-red-700 border border-red-100'
                            }`}>
                              {scoreItem.passed ? '✓ Lolos Passing Grade' : '✕ Perlu Belajar'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          )}

          {activeTab === 'add-material' && (
            <div className="space-y-8">
              <div className="bg-white border border-slate-100 rounded-3xl shadow-sm p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    Posting Modul Pembelajaran & Rangkuman Baru
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">Siswa akan dapat membaca modul materi dan mengakses seluruh media pendukung (PDF, Video, YouTube, Kuis, Google Form) langsung di Dashboard Belajar mereka.</p>
                </div>

                {successMsg && (
                  <div className="bg-emerald-50 text-emerald-700 p-4 border border-emerald-100 rounded-xl text-xs font-semibold flex justify-between items-center gap-2">
                    <span>{successMsg}</span>
                    <button
                      type="button"
                      onClick={() => setSuccessMsg('')}
                      className="text-emerald-500 hover:text-emerald-800 transition-colors p-1 rounded-full hover:bg-emerald-100/50 cursor-pointer"
                      title="Tutup"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                <form onSubmit={handleAddMaterial} className="space-y-6">
                  {/* Basic Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">Judul Modul</label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Pembahasan Cepat Listrik Dinamis"
                        value={matTitle}
                        onChange={(e) => setMatTitle(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">Mata Pelajaran TKA</label>
                      <select
                        value={matSubject}
                        onChange={(e) => setMatSubject(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 bg-white"
                      >
                        <option>Matematika Umum</option>
                        <option>Matematika Lanjut</option>
                        <option>Bahasa Indonesia</option>
                        <option>Bahasa Indonesia Tingkat Lanjut</option>
                        <option>Bahasa Inggris</option>
                        <option>Bahasa Inggris Tingkat Lanjut</option>
                        <option>Fisika</option>
                        <option>Kimia</option>
                        <option>Biologi</option>
                        <option>Ekonomi</option>
                        <option>Geografi</option>
                        <option>Sejarah</option>
                        <option>Sosiologi</option>
                        <option>PPKn (PKn)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">Bab / Pokok Bahasan</label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Hukum Kirchhoff & Loop Arus"
                      value={matBab}
                      onChange={(e) => setMatBab(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">Isi Ringkasan Materi & Rumus Inti</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tuliskan teori pokok, rumus cepat, konsep penting, atau tips cara pengerjaan soal..."
                      value={matDesc}
                      onChange={(e) => setMatDesc(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 font-sans"
                    ></textarea>
                  </div>

                  {/* Section: Attachment Media */}
                  <div className="border-t border-slate-100 pt-6 space-y-4">
                    <h4 className="font-extrabold text-slate-800 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2">
                      <Plus className="w-4 h-4 text-blue-600" />
                      Media Lampiran & Link Pendukung (Opsional)
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* PDF Attachment */}
                      <div className="p-4 bg-slate-50/50 rounded-2xl border border-slate-200/50 space-y-3">
                        <span className="text-[10px] font-extrabold text-red-600 bg-red-50 px-2.5 py-1 rounded-md flex items-center gap-1.5 w-fit uppercase">
                          <FileText className="w-3.5 h-3.5" /> Dokumen PDF / E-Book
                        </span>
                        
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-slate-500 block">Pilih Sumber PDF</label>
                          <div className="grid grid-cols-3 gap-1.5">
                            <button
                              type="button"
                              onClick={() => setGuruPdfSource('drive')}
                              className={`py-1.5 px-2 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1 border ${
                                guruPdfSource === 'drive' ? 'bg-red-600 text-white border-red-600' : 'bg-white text-slate-700 border-slate-200'
                              }`}
                            >
                              <HardDrive className="w-3 h-3" /> Drive
                            </button>
                            <button
                              type="button"
                              onClick={() => setGuruPdfSource('file_manager')}
                              className={`py-1.5 px-2 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1 border ${
                                guruPdfSource === 'file_manager' ? 'bg-red-600 text-white border-red-600' : 'bg-white text-slate-700 border-slate-200'
                              }`}
                            >
                              <Folder className="w-3 h-3" /> File Mgr
                            </button>
                            <button
                              type="button"
                              onClick={() => setGuruPdfSource('galeri')}
                              className={`py-1.5 px-2 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1 border ${
                                guruPdfSource === 'galeri' ? 'bg-red-600 text-white border-red-600' : 'bg-white text-slate-700 border-slate-200'
                              }`}
                            >
                              <Image className="w-3 h-3" /> Galeri
                            </button>
                          </div>

                          {guruPdfSource === 'drive' && (
                            <div className="space-y-2 pt-1">
                              <input
                                type="text"
                                placeholder="Nama File: Rumus_Cepat_Listrik.pdf"
                                value={matPdfFile}
                                onChange={(e) => setMatPdfFile(e.target.value)}
                                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs bg-white"
                              />
                              <input
                                type="url"
                                placeholder="Link Google Drive: https://drive.google.com/..."
                                value={matPdfUrl}
                                onChange={(e) => setMatPdfUrl(e.target.value)}
                                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs bg-white"
                              />
                            </div>
                          )}

                          {guruPdfSource === 'file_manager' && (
                            <div className="pt-1 space-y-2">
                              <input
                                type="file"
                                id="guru-pdf-fm"
                                accept=".pdf,application/pdf"
                                onChange={handleGuruPdfChange}
                                className="hidden"
                              />
                              <label htmlFor="guru-pdf-fm" className="w-full py-2.5 px-3 border border-dashed border-red-300 bg-red-50/50 rounded-lg text-xs font-bold text-red-700 flex items-center justify-center gap-2 cursor-pointer hover:bg-red-100/50">
                                <Folder className="w-4 h-4" /> Buka File Manager Perangkat
                              </label>
                              {matPdfFile && (
                                <p className="text-[10px] text-emerald-600 font-bold truncate">✓ Terpilih: {matPdfFile}</p>
                              )}
                            </div>
                          )}

                          {guruPdfSource === 'galeri' && (
                            <div className="pt-1 space-y-2">
                              <input
                                type="file"
                                id="guru-pdf-galeri"
                                accept="application/pdf,image/*,.pdf"
                                onChange={handleGuruPdfChange}
                                className="hidden"
                              />
                              <label htmlFor="guru-pdf-galeri" className="w-full py-2.5 px-3 border border-dashed border-indigo-300 bg-indigo-50/50 rounded-lg text-xs font-bold text-indigo-700 flex items-center justify-center gap-2 cursor-pointer hover:bg-indigo-100/50">
                                <Image className="w-4 h-4" /> Buka Galeri Dokumen
                              </label>
                              {matPdfFile && (
                                <p className="text-[10px] text-emerald-600 font-bold truncate">✓ Terpilih: {matPdfFile}</p>
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Video Attachment */}
                      <div className="p-4 bg-slate-50/50 rounded-2xl border border-slate-200/50 space-y-3">
                        <span className="text-[10px] font-extrabold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md flex items-center gap-1.5 w-fit uppercase">
                          <Video className="w-3.5 h-3.5" /> Video Materi (MP4 / Direct)
                        </span>
                        
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-slate-500 block">Pilih Sumber Video</label>
                          <div className="grid grid-cols-3 gap-1.5">
                            <button
                              type="button"
                              onClick={() => setGuruVideoSource('drive')}
                              className={`py-1.5 px-2 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1 border ${
                                guruVideoSource === 'drive' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-slate-200'
                              }`}
                            >
                              <HardDrive className="w-3 h-3" /> Drive
                            </button>
                            <button
                              type="button"
                              onClick={() => setGuruVideoSource('file_manager')}
                              className={`py-1.5 px-2 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1 border ${
                                guruVideoSource === 'file_manager' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-slate-200'
                              }`}
                            >
                              <Folder className="w-3 h-3" /> File Mgr
                            </button>
                            <button
                              type="button"
                              onClick={() => setGuruVideoSource('galeri')}
                              className={`py-1.5 px-2 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1 border ${
                                guruVideoSource === 'galeri' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-slate-200'
                              }`}
                            >
                              <Image className="w-3 h-3" /> Galeri
                            </button>
                          </div>

                          {guruVideoSource === 'drive' && (
                            <div className="space-y-2 pt-1">
                              <input
                                type="text"
                                placeholder="Nama File: Video_Kirchhoff.mp4"
                                value={matVideoFile}
                                onChange={(e) => setMatVideoFile(e.target.value)}
                                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs bg-white"
                              />
                              <input
                                type="url"
                                placeholder="Link Google Drive: https://drive.google.com/..."
                                value={matVideoUrl}
                                onChange={(e) => setMatVideoUrl(e.target.value)}
                                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs bg-white"
                              />
                            </div>
                          )}

                          {guruVideoSource === 'file_manager' && (
                            <div className="pt-1 space-y-2">
                              <input
                                type="file"
                                id="guru-video-fm"
                                accept="video/*,.mp4,.mkv,.webm"
                                onChange={handleGuruVideoChange}
                                className="hidden"
                              />
                              <label htmlFor="guru-video-fm" className="w-full py-2.5 px-3 border border-dashed border-blue-300 bg-blue-50/50 rounded-lg text-xs font-bold text-blue-700 flex items-center justify-center gap-2 cursor-pointer hover:bg-blue-100/50">
                                <Folder className="w-4 h-4" /> Buka File Manager Video
                              </label>
                              {matVideoFile && (
                                <p className="text-[10px] text-emerald-600 font-bold truncate">✓ Terpilih: {matVideoFile}</p>
                              )}
                            </div>
                          )}

                          {guruVideoSource === 'galeri' && (
                            <div className="pt-1 space-y-2">
                              <input
                                type="file"
                                id="guru-video-galeri"
                                accept="video/*"
                                onChange={handleGuruVideoChange}
                                className="hidden"
                              />
                              <label htmlFor="guru-video-galeri" className="w-full py-2.5 px-3 border border-dashed border-purple-300 bg-purple-50/50 rounded-lg text-xs font-bold text-purple-700 flex items-center justify-center gap-2 cursor-pointer hover:bg-purple-100/50">
                                <Image className="w-4 h-4" /> Buka Galeri Video
                              </label>
                              {matVideoFile && (
                                <p className="text-[10px] text-emerald-600 font-bold truncate">✓ Terpilih: {matVideoFile}</p>
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* YouTube Link */}
                      <div className="p-4 bg-slate-50/50 rounded-2xl border border-slate-200/50 space-y-2">
                        <span className="text-[10px] font-extrabold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md flex items-center gap-1.5 w-fit uppercase">
                          <Youtube className="w-3.5 h-3.5" /> Link YouTube Pembahasan
                        </span>
                        <div>
                          <label className="text-[10px] font-bold text-slate-500 block mb-1">URL Video YouTube</label>
                          <input
                            type="text"
                            placeholder="https://www.youtube.com/watch?v=..."
                            value={matYoutubeUrl}
                            onChange={(e) => setMatYoutubeUrl(e.target.value)}
                            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs bg-white focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      {/* Quiz & Google Form Link */}
                      <div className="p-4 bg-slate-50/50 rounded-2xl border border-slate-200/50 space-y-3">
                        <span className="text-[10px] font-extrabold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md flex items-center gap-1.5 w-fit uppercase">
                          <Trophy className="w-3.5 h-3.5" /> Kuis & Form Evaluasi
                        </span>
                        
                        <div className="space-y-2">
                          <div>
                            <label className="text-[10px] font-bold text-slate-500 block mb-1">Link Kuis Interaktif (Quizizz / Kahoot)</label>
                            <input
                              type="text"
                              placeholder="https://quizizz.com/join?gc=..."
                              value={matQuizUrl}
                              onChange={(e) => setMatQuizUrl(e.target.value)}
                              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs bg-white focus:outline-none focus:border-blue-500"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] font-bold text-slate-500 block mb-1">Link Google Form Evaluasi</label>
                            <input
                              type="text"
                              placeholder="https://forms.gle/..."
                              value={matGFormUrl}
                              onChange={(e) => setMatGFormUrl(e.target.value)}
                              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs bg-white focus:outline-none focus:border-blue-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition-colors shadow-lg shadow-blue-100 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <PlusCircle className="w-4 h-4" />
                      Publikasikan Modul Materi & Media
                    </button>
                  </div>
                </form>
              </div>

              {/* List of Published Materials */}
              <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden">
                <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                  <h3 className="font-extrabold text-slate-800 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2">
                    <HardDrive className="w-4 h-4 text-slate-500" />
                    Manajemen Modul Pembelajaran Aktif ({materialsList.length})
                  </h3>
                </div>

                <div className="divide-y divide-slate-100">
                  {materialsList.length === 0 ? (
                    <div className="p-8 text-center text-slate-400 text-xs">
                      Belum ada materi pembelajaran yang dipublikasikan. Gunakan formulir di atas untuk memublikasikan materi pertama Anda.
                    </div>
                  ) : (
                    materialsList.map((mat) => (
                      <div key={mat.id} className="p-6 hover:bg-slate-50/30 transition-colors flex flex-col md:flex-row justify-between gap-6">
                        <div className="space-y-2.5 max-w-2xl">
                          <div className="flex flex-wrap gap-2 items-center">
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-blue-50 text-blue-700 uppercase">
                              {mat.subject}
                            </span>
                            <span className="text-slate-300">•</span>
                            <span className="text-[10px] font-extrabold text-slate-500">
                              Bab: {mat.bab}
                            </span>
                            <span className="text-slate-300">•</span>
                            <span className="text-[10px] text-slate-400">
                              Oleh: {mat.guruName || 'Guru TKA'}
                            </span>
                          </div>

                          <h4 className="font-black text-slate-900 text-sm sm:text-base">{mat.title}</h4>
                          <p className="text-xs text-slate-500 leading-relaxed font-sans">{mat.description}</p>

                          {/* Render indicators of active attachments */}
                          <div className="flex flex-wrap gap-2 pt-1.5">
                            {mat.pdfName && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-red-50 text-red-700 border border-red-100">
                                <FileText className="w-3 h-3" /> PDF ({mat.pdfName})
                              </span>
                            )}
                            {mat.videoName && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-100">
                                <Video className="w-3 h-3" /> MP4 ({mat.videoName})
                              </span>
                            )}
                            {mat.youtubeUrl && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-100">
                                <Youtube className="w-3 h-3" /> YouTube Video
                              </span>
                            )}
                            {mat.quizUrl && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-100">
                                <Trophy className="w-3 h-3" /> Kuis Interaktif
                              </span>
                            )}
                            {mat.gFormUrl && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-100">
                                <FileSpreadsheet className="w-3 h-3" /> Google Form
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex md:flex-col justify-end items-end gap-2 shrink-0">
                          <button
                            type="button"
                            onClick={() => handleDeleteMaterial(mat.id)}
                            className="px-3.5 py-2 text-xs font-bold bg-red-50 hover:bg-red-100 text-red-600 rounded-xl transition-all flex items-center gap-1.5 border border-red-100/50 cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" /> Hapus Materi
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'questions' && (
            <div className="space-y-6">
              
              {/* Form Publikasi Paket Try Out Baru */}
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-4">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                    <span className="bg-blue-100 text-blue-700 p-1.5 rounded-lg"><Award className="w-4 h-4" /></span>
                    Guru Buat & Publikasikan Paket Try Out Baru
                  </h3>
                    <p className="text-xs text-slate-500 mt-1 bg-blue-50/70 p-3 rounded-2xl border border-blue-100/80 font-medium">
                      📌 <strong>Langsung Terhubung:</strong> Setiap paket Try Out (CBT Interaktif maupun Link Google Form) yang dipublikasikan dari form di bawah ini akan <strong>secara otomatis dan pasti langsung tampil di Pusat CBT Try Out Nasional pada Dashboard Siswa</strong>.
                    </p>
                  </div>

                  {successMsg && (successMsg.includes('Try Out') || successMsg.includes('Google Form')) && (
                    <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 p-3.5 rounded-xl text-xs font-semibold flex justify-between items-center gap-2">
                      <span>{successMsg}</span>
                      <button
                        type="button"
                        onClick={() => setSuccessMsg('')}
                        className="text-emerald-500 hover:text-emerald-800 transition-colors p-1 rounded-full hover:bg-emerald-100/50 cursor-pointer"
                        title="Tutup"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  <form onSubmit={handleCreateGoogleFormTryOut} className="space-y-4 text-xs sm:text-sm">
                    
                    {/* Kategori Program TryOut Selector */}
                    <div className="space-y-1.5 bg-slate-50/80 p-3.5 rounded-2xl border border-slate-200/70">
                      <label className="text-xs font-black text-slate-800 uppercase tracking-wide block">1. Pilih Kategori / Program Target</label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setToCategory('UTBK')}
                          className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                            toCategory === 'UTBK'
                              ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          <Award className="w-4 h-4" />
                          <span>Try Out CBT UTBK (SNBT / TPS)</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setToCategory('TKA')}
                          className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                            toCategory === 'TKA'
                              ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          <Award className="w-4 h-4" />
                          <span>Try Out CBT TKA (Akademik SMA)</span>
                        </button>
                      </div>
                      <p className="text-[11px] text-slate-500 font-medium">
                        📍 Paket ini akan langsung tampil di menu <strong className="text-slate-800">"Try Out CBT {toCategory}"</strong> pada Dashboard Siswa.
                      </p>
                    </div>

                    {/* Tipe TryOut Selector */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">2. Tipe Pelaksanaan Try Out</label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setToType('cbt')}
                          className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                            toType === 'cbt'
                              ? 'bg-blue-50 border-blue-600 text-blue-700 shadow-sm'
                              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <Award className="w-4 h-4" />
                          <span>Simulasi CBT Interaktif (Bank Soal)</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setToType('google_form')}
                          className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                            toType === 'google_form'
                              ? 'bg-purple-50 border-purple-600 text-purple-700 shadow-sm'
                              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <Link className="w-4 h-4" />
                          <span>Tautan Ujian / Link Eksternal (Google Form / Web Kuis)</span>
                        </button>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-600">Nama Paket Try Out / Ujian</label>
                      <input
                        type="text"
                        required
                        placeholder={toCategory === 'UTBK' ? "Contoh: Try Out Mandiri Fisika - CBT UTBK" : "Contoh: Try Out CBT TKA SMA Matematika Wajib"}
                        value={gFormName}
                        onChange={(e) => setGFormName(e.target.value)}
                        className="w-full p-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    {toType === 'google_form' && (
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600">Link URL Ujian / Google Form / Kuis Web</label>
                        <input
                          type="url"
                          required
                          placeholder="https://slugpost.com/kuis-tka-sma-matematika-wajib atau https://docs.google.com/forms/..."
                          value={gFormUrl}
                          onChange={(e) => setGFormUrl(e.target.value)}
                          className="w-full p-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500"
                        />
                        <p className="text-[10px] text-slate-400">Masukkan link Google Form atau URL website try out eksternal. Paket akan otomatis tampil di menu "Try Out CBT {toCategory}" Dashboard Siswa.</p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600">Mata Pelajaran / Kelompok</label>
                        <select
                          value={gFormSubject}
                          onChange={(e) => setGFormSubject(e.target.value)}
                          className="w-full p-2.5 border border-slate-200 rounded-xl bg-white focus:outline-none focus:border-blue-500"
                        >
                          <option>Semua Mata Pelajaran (Campuran UTBK)</option>
                          <option>Matematika Umum</option>
                          <option>Matematika Lanjut</option>
                          <option>Bahasa Indonesia</option>
                          <option>Bahasa Indonesia Tingkat Lanjut</option>
                          <option>Bahasa Inggris</option>
                          <option>Bahasa Inggris Tingkat Lanjut</option>
                          <option>Fisika</option>
                          <option>Kimia</option>
                          <option>Biologi</option>
                          <option>Ekonomi</option>
                          <option>Geografi</option>
                          <option>Sejarah</option>
                          <option>Sosiologi</option>
                          <option>PPKn (PKn)</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600">Durasi (Menit)</label>
                        <input
                          type="number"
                          required
                          min={1}
                          value={gFormDuration}
                          onChange={(e) => setGFormDuration(parseInt(e.target.value) || 60)}
                          className="w-full p-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500"
                        />
                      </div>

                      {toType === 'cbt' ? (
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-600">Jumlah Soal per Sesi CBT</label>
                          <input
                            type="number"
                            required
                            min={1}
                            max={100}
                            value={toQuestionCount}
                            onChange={(e) => setToQuestionCount(parseInt(e.target.value) || 15)}
                            className="w-full p-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      ) : (
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-600">Passing Grade Kelulusan</label>
                          <input
                            type="number"
                            required
                            min={1}
                            max={1000}
                            value={gFormPassingGrade}
                            onChange={(e) => setGFormPassingGrade(parseInt(e.target.value) || 600)}
                            className="w-full p-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      className={`px-6 py-3 font-bold text-white rounded-xl transition-all cursor-pointer shadow-md ${
                        toType === 'cbt'
                          ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-50'
                          : 'bg-purple-600 hover:bg-purple-700 shadow-purple-50'
                      }`}
                    >
                      {toType === 'cbt' ? 'Publikasikan Paket CBT Interaktif' : 'Hubungkan Paket Google Form'}
                    </button>
                  </form>
                </div>

              {/* Grid for databases */}
              <div>
                {/* Tryout List separated into UTBK and TKA */}
                {(() => {
                  const utbkTryouts = tryouts.filter(to => 
                    to.category === 'UTBK' || 
                    (!to.category && !to.name.toLowerCase().includes('tka') && !to.subject.toLowerCase().includes('saintek') && !to.subject.toLowerCase().includes('soshum'))
                  );

                  const tkaTryouts = tryouts.filter(to => 
                    to.category === 'TKA' || 
                    (!to.category && (to.name.toLowerCase().includes('tka') || to.subject.toLowerCase().includes('tka') || to.subject.toLowerCase().includes('saintek') || to.subject.toLowerCase().includes('soshum')))
                  );

                  return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Section: Try Out CBT UTBK */}
                      <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                          <h3 className="font-extrabold text-slate-800 text-sm flex items-center gap-2">
                            <Award className="w-4 h-4 text-blue-600" />
                            Daftar Paket Try Out CBT UTBK ({utbkTryouts.length})
                          </h3>
                          <span className="bg-blue-50 text-blue-700 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-blue-100">
                            UTBK / SNBT
                          </span>
                        </div>

                        <div className="divide-y divide-slate-100 max-h-[40vh] overflow-y-auto pr-2 space-y-3">
                          {utbkTryouts.length === 0 ? (
                            <p className="text-xs text-slate-400 italic py-6 text-center">Belum ada paket Try Out UTBK yang dibuat.</p>
                          ) : (
                            utbkTryouts.map((to) => (
                              <div key={to.id} className="pt-3 flex justify-between items-start gap-4 text-xs">
                                <div className="space-y-1 flex-1">
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className="bg-blue-50 text-blue-800 font-extrabold px-2 py-0.5 rounded text-[10px]">{to.subject}</span>
                                    {to.googleFormUrl ? (
                                      <span className="bg-purple-100 text-purple-800 font-extrabold px-2 py-0.5 rounded text-[10px] flex items-center gap-1">
                                        <Link className="w-3 h-3" /> Google Form
                                      </span>
                                    ) : (
                                      <span className="bg-slate-100 text-slate-700 font-extrabold px-2 py-0.5 rounded text-[10px]">Native CBT</span>
                                    )}
                                  </div>
                                  <p className="text-slate-800 font-bold leading-relaxed">{to.name}</p>
                                  <div className="flex items-center gap-3 text-[10px] text-slate-400 font-semibold">
                                    <span>Durasi: {to.duration} Menit</span>
                                    <span>Passing Grade: {to.passingGrade}</span>
                                  </div>
                                  {to.googleFormUrl && (
                                    <p className="text-[10px] text-purple-600 font-mono truncate max-w-xs">{to.googleFormUrl}</p>
                                  )}
                                </div>
                                <button
                                  onClick={() => handleDeleteTryOut(to.id)}
                                  className="p-1.5 rounded-lg border border-red-100 hover:bg-red-50 text-red-500 transition-colors cursor-pointer shrink-0"
                                  title="Hapus Paket"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            ))
                          )}
                        </div>
                      </div>

                      {/* Section: Try Out CBT TKA */}
                      <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                          <h3 className="font-extrabold text-slate-800 text-sm flex items-center gap-2">
                            <Award className="w-4 h-4 text-emerald-600" />
                            Daftar Paket Try Out CBT TKA ({tkaTryouts.length})
                          </h3>
                          <span className="bg-emerald-50 text-emerald-700 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-emerald-100">
                            TKA Akademik
                          </span>
                        </div>

                        <div className="divide-y divide-slate-100 max-h-[40vh] overflow-y-auto pr-2 space-y-3">
                          {tkaTryouts.length === 0 ? (
                            <p className="text-xs text-slate-400 italic py-6 text-center">Belum ada paket Try Out TKA yang dibuat.</p>
                          ) : (
                            tkaTryouts.map((to) => (
                              <div key={to.id} className="pt-3 flex justify-between items-start gap-4 text-xs">
                                <div className="space-y-1 flex-1">
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className="bg-emerald-50 text-emerald-800 font-extrabold px-2 py-0.5 rounded text-[10px]">{to.subject}</span>
                                    {to.googleFormUrl ? (
                                      <span className="bg-purple-100 text-purple-800 font-extrabold px-2 py-0.5 rounded text-[10px] flex items-center gap-1">
                                        <Link className="w-3 h-3" /> Google Form
                                      </span>
                                    ) : (
                                      <span className="bg-slate-100 text-slate-700 font-extrabold px-2 py-0.5 rounded text-[10px]">Native CBT</span>
                                    )}
                                  </div>
                                  <p className="text-slate-800 font-bold leading-relaxed">{to.name}</p>
                                  <div className="flex items-center gap-3 text-[10px] text-slate-400 font-semibold">
                                    <span>Durasi: {to.duration} Menit</span>
                                    <span>Passing Grade: {to.passingGrade}</span>
                                  </div>
                                  {to.googleFormUrl && (
                                    <p className="text-[10px] text-purple-600 font-mono truncate max-w-xs">{to.googleFormUrl}</p>
                                  )}
                                </div>
                                <button
                                  onClick={() => handleDeleteTryOut(to.id)}
                                  className="p-1.5 rounded-lg border border-red-100 hover:bg-red-50 text-red-500 transition-colors cursor-pointer shrink-0"
                                  title="Hapus Paket"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>

            </div>
          )}

          {activeTab === 'ai-knowledge' && (
            <AiKnowledgeManager userProfile={userProfile} role="Guru" />
          )}
        </div>

      </main>
    </div>
  );
}
