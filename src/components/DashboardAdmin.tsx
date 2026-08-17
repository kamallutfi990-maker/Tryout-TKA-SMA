/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Shield, Plus, List, Settings, Eye, Trash2, Edit3, Users, DollarSign, Database, FileText, Link, Upload, Image, Video, Youtube, X, Sparkles, ExternalLink, Award, Bot } from 'lucide-react';
import { FirestoreSimulator, getQuestions, getTryouts } from '../lib/firestoreSimulator';
import { Question, TryOut } from '../types';
import AiKnowledgeManager from './AiKnowledgeManager';

interface DashboardAdminProps {
  userProfile: any;
  onLogout: () => void;
}

export default function DashboardAdmin({ userProfile, onLogout }: DashboardAdminProps) {
  const [activeTab, setActiveTab] = useState<'users' | 'questions' | 'payments' | 'ai-knowledge'>('users');
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
  const [successMsg, setSuccessMsg] = useState('');

  // Form states for creating a new question (Simulating Admin CRUD!)
  const [qText, setQText] = useState('');
  const [qSubject, setQSubject] = useState('Matematika Umum');
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
  const [gFormSubject, setGFormSubject] = useState('Matematika Umum');
  const [gFormUrl, setGFormUrl] = useState('');
  const [gFormDuration, setGFormDuration] = useState(60);
  const [gFormPassingGrade, setGFormPassingGrade] = useState(600);
  const [toQuestionCount, setToQuestionCount] = useState(15);

  const [usersList, setUsersList] = useState([
    { uid: 'u1', email: 'siswa@tkasma.id', name: 'Sarah Amelia', role: 'Siswa', premium: true, joined: '2026-07-01' },
    { uid: 'u2', email: 'ahmad@gmail.com', name: 'Ahmad Fauzi', role: 'Siswa', premium: true, joined: '2026-07-03' },
    { uid: 'u3', email: 'guru@tkasma.id', name: 'Pak Budi Hartono', role: 'Guru', premium: false, joined: '2026-06-15' },
    { uid: 'u4', email: 'dimas@yahoo.com', name: 'Dimas Wicaksono', role: 'Siswa', premium: false, joined: '2026-07-10' },
    { uid: 'u5', email: 'admin@tkasma.id', name: 'Admin Utama', role: 'Admin', premium: true, joined: '2026-05-01' }
  ]);

  const [paymentsList, setPaymentsList] = useState([
    { id: 'pay_101', email: 'siswa@tkasma.id', package: 'Premium VIP Bulanan', amount: 49000, method: 'QRIS Gopay', status: 'success', date: '2026-07-18' },
    { id: 'pay_102', email: 'ahmad@gmail.com', package: 'Premium VIP Tahunan', amount: 299000, method: 'Virtual Account BNI', status: 'success', date: '2026-07-17' },
    { id: 'pay_103', email: 'dimas@yahoo.com', package: 'Premium VIP Bulanan', amount: 49000, method: 'OVO E-Wallet', status: 'pending', date: '2026-07-17' }
  ]);

  // Designated Users States
  const [designatedUsers, setDesignatedUsers] = useState(() => FirestoreSimulator.getDesignatedUsers());
  const [desigEmail, setDesigEmail] = useState('');
  const [desigPassword, setDesigPassword] = useState('');
  const [desigRole, setDesigRole] = useState<'Guru' | 'Admin'>('Guru');
  const [desigError, setDesigError] = useState('');
  const [desigSuccess, setDesigSuccess] = useState('');

  const handleAddDesignatedUser = (e: React.FormEvent) => {
    e.preventDefault();
    setDesigError('');
    setDesigSuccess('');
    
    if (!desigEmail || !desigPassword) {
      setDesigError('Mohon isi semua kolom.');
      return;
    }
    
    if (desigPassword.length < 6) {
      setDesigError('Sandi minimal harus 6 karakter.');
      return;
    }

    try {
      FirestoreSimulator.addDesignatedUser(desigEmail, desigPassword, desigRole);
      setDesignatedUsers(FirestoreSimulator.getDesignatedUsers());
      setDesigEmail('');
      setDesigPassword('');
      setDesigSuccess(`Berhasil menunjuk ${desigEmail} sebagai ${desigRole}!`);
      setTimeout(() => setDesigSuccess(''), 4000);
    } catch (err: any) {
      setDesigError(err.message || 'Gagal menambahkan.');
    }
  };

  const handleRemoveDesignatedUser = (email: string, role: 'Admin' | 'Guru') => {
    if (confirm(`Apakah Anda yakin ingin menghapus hak akses ${role} untuk ${email}?`)) {
      FirestoreSimulator.removeDesignatedUser(email, role);
      setDesignatedUsers(FirestoreSimulator.getDesignatedUsers());
      setDesigSuccess(`Akses ${role} untuk ${email} berhasil dicabut.`);
      setTimeout(() => setDesigSuccess(''), 4000);
    }
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
      id: `custom_q_${Date.now()}`,
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

    // Push into simulator and update view state
    FirestoreSimulator.addCustomQuestion(newQ);
    setQuestions(getQuestions());
    setSuccessMsg('✓ Pertanyaan TKA Baru berhasil ditambahkan ke Bank Soal Nasional.');
    
    // Reset fields
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
    if (confirm('Apakah Anda yakin ingin menghapus pertanyaan ini dari database?')) {
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
      id: `${toType}_to_a_${Date.now()}`,
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

  const handleTogglePremium = (uid: string) => {
    setUsersList(prev =>
      prev.map(u => (u.uid === uid ? { ...u, premium: !u.premium } : u))
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans" id="dashboard-admin">
      
      {/* Header bar */}
      <header className="bg-white border-b border-slate-100 shadow-sm shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="bg-blue-600 text-white w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-lg">T</span>
            <div>
              <h1 className="text-base font-extrabold text-slate-900 leading-none">TKA SMA Indonesia</h1>
              <span className="text-[10px] text-red-600 font-extrabold uppercase tracking-wider flex items-center gap-1">
                <Shield className="w-3.5 h-3.5" /> SECURE ROOT ADMIN
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-sm font-bold text-slate-800 block">Administrator Utama</span>
              <span className="text-[10px] text-slate-400">ID: adm-99210-91</span>
            </div>
            <button
              onClick={onLogout}
              className="px-4 py-2 rounded-xl text-xs font-bold text-red-600 hover:bg-red-50 border border-red-100 transition-colors cursor-pointer"
            >
              Keluar Admin
            </button>
          </div>
        </div>
      </header>

      {/* Main Grid */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">
        
        {/* Navigation Sidebar */}
        <aside className="lg:w-64 shrink-0 space-y-2">
          <button
            onClick={() => setActiveTab('users')}
            className={`w-full text-left px-4 py-3 rounded-xl font-bold text-xs flex items-center gap-2.5 transition-all cursor-pointer ${
              activeTab === 'users'
                ? 'bg-blue-50 text-[#2563EB] border border-blue-100/50 shadow-sm'
                : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200/60'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Manajemen Pengguna</span>
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
            <span>Kelola Bank Soal CBT</span>
          </button>
          <button
            onClick={() => setActiveTab('payments')}
            className={`w-full text-left px-4 py-3 rounded-xl font-bold text-xs flex items-center gap-2.5 transition-all cursor-pointer ${
              activeTab === 'payments'
                ? 'bg-blue-50 text-[#2563EB] border border-blue-100/50 shadow-sm'
                : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200/60'
            }`}
          >
            <DollarSign className="w-4 h-4" />
            <span>Audit Pembayaran</span>
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

        {/* Content Panel */}
        <div className="flex-1">
          {activeTab === 'users' && (
            <div className="space-y-6">
              
              {/* Stats overview */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm">
                  <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">TOTAL REGISTRAN</span>
                  <span className="text-2xl font-black text-slate-800">{usersList.length} Akun</span>
                </div>
                <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm">
                  <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">PREMIUM ACTIVE</span>
                  <span className="text-2xl font-black text-emerald-600">{usersList.filter(u => u.premium).length} Siswa</span>
                </div>
                <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm">
                  <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">GURU TERDAFTAR</span>
                  <span className="text-2xl font-black text-blue-600">{usersList.filter(u => u.role === 'Guru').length + designatedUsers.filter(u => u.role === 'Guru').length} Pengajar</span>
                </div>
              </div>

              {/* Exclusive Access Appointment Form for Primary Admin */}
              {userProfile?.email?.toLowerCase() === 'kamallutfi990@gmail.com' && (
                <div className="bg-[#EFF6FF] border border-blue-200 rounded-3xl p-6 shadow-sm space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-600 text-white p-2 rounded-xl">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-blue-900 text-sm">Penunjukan Akses Guru & Admin</h4>
                      <p className="text-[11px] text-blue-600 font-medium">Khusus Akun Utama. Tunjuk email & sandi baru untuk login Guru/Admin.</p>
                    </div>
                  </div>

                  {desigError && (
                    <div className="bg-red-50 text-red-700 p-3 rounded-xl text-xs font-semibold border border-red-100">
                      ⚠ {desigError}
                    </div>
                  )}

                  {desigSuccess && (
                    <div className="bg-emerald-50 text-emerald-700 p-3 rounded-xl text-xs font-semibold border border-emerald-100">
                      ✓ {desigSuccess}
                    </div>
                  )}
                  
                  <form onSubmit={handleAddDesignatedUser} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-600">Alamat Email Guru / Admin</label>
                      <input
                        type="email"
                        required
                        placeholder="contoh@guru.com"
                        value={desigEmail}
                        onChange={(e) => setDesigEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-blue-200 rounded-xl text-xs bg-white focus:outline-none focus:border-blue-500 font-semibold"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-600">Kata Sandi Akses</label>
                      <input
                        type="password"
                        required
                        placeholder="Min 6 karakter"
                        value={desigPassword}
                        onChange={(e) => setDesigPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-blue-200 rounded-xl text-xs bg-white focus:outline-none focus:border-blue-500 font-semibold"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-600">Role yang Diberikan</label>
                      <select
                        value={desigRole}
                        onChange={(e) => setDesigRole(e.target.value as 'Guru' | 'Admin')}
                        className="w-full px-3 py-2 border border-blue-200 rounded-xl text-xs bg-white focus:outline-none focus:border-blue-500 font-semibold text-slate-700"
                      >
                        <option value="Guru">Guru (Pengajar & Evaluasi)</option>
                        <option value="Admin">Admin (Database & Soal)</option>
                      </select>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs shadow-md transition-colors cursor-pointer"
                      >
                        Tunjuk Akses Baru
                      </button>
                    </div>
                  </form>

                  {/* List of currently designated users */}
                  <div className="pt-4 border-t border-blue-100">
                    <h5 className="text-[11px] font-bold text-blue-900 mb-2">Daftar Guru & Admin yang Ditunjuk:</h5>
                    {designatedUsers.length === 0 ? (
                      <p className="text-[11px] text-slate-400 italic">Belum ada Guru atau Admin tambahan yang ditunjuk. Hanya Akun Utama yang bisa masuk secara default.</p>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {designatedUsers.map((u, index) => (
                          <div key={index} className="bg-white p-3 rounded-xl border border-blue-100 flex justify-between items-center text-xs shadow-sm">
                            <div className="min-w-0 flex-1 pr-2">
                              <div className="font-bold text-slate-800 truncate" title={u.email}>{u.email}</div>
                              <div className="text-[10px] text-slate-500 flex items-center gap-1.5 flex-wrap mt-0.5">
                                <span className={`font-mono px-1.5 py-0.5 rounded text-[9px] font-extrabold uppercase ${
                                  u.role === 'Admin' ? 'bg-red-50 text-red-700 border border-red-100' : 'bg-amber-50 text-amber-700 border border-amber-100'
                                }`}>{u.role}</span>
                                <span>Sandi: <span className="font-mono font-bold text-slate-700">{u.password}</span></span>
                              </div>
                            </div>
                            <button
                              onClick={() => handleRemoveDesignatedUser(u.email, u.role)}
                              className="text-red-500 hover:text-red-700 p-1.5 hover:bg-red-50 rounded-lg transition-colors cursor-pointer shrink-0"
                              title="Hapus Penunjukan"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Table list */}
              <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
                <div className="p-5 border-b border-slate-100">
                  <h3 className="font-extrabold text-slate-800 text-sm">Database Pengguna Terdaftar (Simulated)</h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-50 text-slate-400 font-extrabold uppercase border-b border-slate-100">
                      <tr>
                        <th className="p-4">Nama Lengkap</th>
                        <th className="p-4">Email</th>
                        <th className="p-4">Role</th>
                        <th className="p-4">Paket Premium</th>
                        <th className="p-4">Tanggal Gabung</th>
                        <th className="p-4 text-center">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {usersList.map((user) => (
                        <tr key={user.uid} className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-4 font-bold text-slate-900">{user.name}</td>
                          <td className="p-4 font-mono">{user.email}</td>
                          <td className="p-4">
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase ${
                              user.role === 'Admin' ? 'bg-red-50 text-red-700 border border-red-100' :
                              user.role === 'Guru' ? 'bg-amber-50 text-amber-700 border border-amber-100' :
                              'bg-blue-50 text-blue-700 border border-blue-100'
                            }`}>
                              {user.role}
                            </span>
                          </td>
                          <td className="p-4">
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase ${
                              user.premium ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-slate-100 text-slate-400'
                            }`}>
                              {user.premium ? 'Premium VIP' : 'Gratis'}
                            </span>
                          </td>
                          <td className="p-4">{new Date(user.joined).toLocaleDateString('id-ID')}</td>
                          <td className="p-4 text-center">
                            <button
                              onClick={() => handleTogglePremium(user.uid)}
                              className="px-3 py-1 border border-slate-200 hover:border-blue-500 rounded-lg text-[10px] font-bold text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
                            >
                              Togle VIP
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {activeTab === 'questions' && (
            <div className="space-y-6">
              
              {/* Grid for forms */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                
                {/* Create/Add question form */}
                <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-4">
                  <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                    <span className="bg-blue-100 text-blue-700 p-1.5 rounded-lg"><Plus className="w-4 h-4" /></span>
                    Simulasi Tambah Butir Soal Baru (LaTeX & CBT)
                  </h3>
                  
                  {successMsg && successMsg.includes('Soal') && (
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

                  <form onSubmit={handleCreateQuestion} className="space-y-4 text-xs sm:text-sm">
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600">Mata Pelajaran</label>
                        <select
                          value={qSubject}
                          onChange={(e) => setQSubject(e.target.value)}
                          className="w-full p-2.5 border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600">Tingkat Kesulitan</label>
                        <select
                          value={qDiff}
                          onChange={(e) => setQDiff(e.target.value as any)}
                          className="w-full p-2.5 border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option>Mudah</option>
                          <option>Sedang</option>
                          <option>Sulit</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600">Bab Pokok Bahasan</label>
                        <input
                          type="text"
                          required
                          placeholder="Contoh: Limit Trigonometri"
                          value={qBab}
                          onChange={(e) => setQBab(e.target.value)}
                          className="w-full p-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-600">Teks Pertanyaan (Mendukung LaTeX)</label>
                      <textarea
                        required
                        rows={3}
                        placeholder="Contoh: Jika f(x) = x^2 - 4x + 3, maka hitunglah limit f(x) ketika x mendekati 2..."
                        value={qText}
                        onChange={(e) => setQText(e.target.value)}
                        className="w-full p-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                    </div>

                    {/* Question Image Attachment */}
                    <div className="space-y-1.5 bg-slate-50 p-3 rounded-2xl border border-slate-200/60">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                        <Image className="w-3.5 h-3.5 text-blue-600" />
                        <span>Gambar Lampiran Pertanyaan (Opsional)</span>
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Masukkan URL Gambar atau gunakan file picker..."
                          value={qImageUrl}
                          onChange={(e) => setQImageUrl(e.target.value)}
                          className="flex-1 p-2 border border-slate-200 rounded-lg bg-white text-xs"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const input = document.createElement('input');
                            input.type = 'file';
                            input.accept = 'image/*';
                            input.onchange = (e: any) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                const reader = new FileReader();
                                reader.onloadend = () => setQImageUrl(reader.result as string);
                                reader.readAsDataURL(file);
                              }
                            };
                            input.click();
                          }}
                          className="px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold rounded-lg text-xs flex items-center gap-1.5 transition-colors"
                        >
                          <Upload className="w-3.5 h-3.5" /> Pilih File
                        </button>
                      </div>
                      {qImageUrl && (
                        <div className="mt-2 relative inline-block">
                          <img src={qImageUrl} alt="Preview Soal" className="max-h-24 rounded border object-contain" />
                          <button
                            type="button"
                            onClick={() => setQImageUrl('')}
                            className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-600 text-white rounded-full text-[10px] font-extrabold flex items-center justify-center shadow"
                          >
                            ×
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-100 pt-3">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600">Tipe Soal CBT</label>
                        <select
                          value={qType}
                          onChange={(e) => setQType(e.target.value as any)}
                          className="w-full p-2.5 border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="multiple_choice">Pilihan Ganda Tunggal (Radio Buttons)</option>
                          <option value="checkboxes">Pilihan Ganda Kompleks (Checkboxes)</option>
                          <option value="dropdown">Pilihan Dropdown (Select Menu)</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600">Kunci Jawaban Benar</label>
                        {qType === 'checkboxes' ? (
                          <div className="flex gap-3 items-center h-[38px] px-3 border border-slate-200 rounded-xl bg-white">
                            {[0, 1, 2, 3, 4].map((idx) => {
                              const letter = String.fromCharCode(65 + idx);
                              return (
                                <label key={idx} className="flex items-center gap-1.5 font-bold text-slate-700 cursor-pointer select-none">
                                  <input
                                    type="checkbox"
                                    checked={qCorrectCheckbox[idx]}
                                    onChange={(e) => {
                                      const updated = [...qCorrectCheckbox];
                                      updated[idx] = e.target.checked;
                                      setQCorrectCheckbox(updated);
                                    }}
                                    className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                                  />
                                  <span className="text-xs">{letter}</span>
                                </label>
                              );
                            })}
                          </div>
                        ) : (
                          <select
                            value={qCorrect}
                            onChange={(e) => setQCorrect(parseInt(e.target.value))}
                            className="w-full p-2.5 border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value={0}>A</option>
                            <option value={1}>B</option>
                            <option value={2}>C</option>
                            <option value={3}>D</option>
                            <option value={4}>E</option>
                          </select>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-extrabold text-slate-600 block">Pilihan Jawaban (A - E)</label>
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                        <input
                          type="text"
                          required
                          placeholder="Opsi A"
                          value={qOptA}
                          onChange={(e) => setQOptA(e.target.value)}
                          className="p-2 border border-slate-200 rounded-lg text-xs"
                        />
                        <input
                          type="text"
                          required
                          placeholder="Opsi B"
                          value={qOptB}
                          onChange={(e) => setQOptB(e.target.value)}
                          className="p-2 border border-slate-200 rounded-lg text-xs"
                        />
                        <input
                          type="text"
                          required
                          placeholder="Opsi C"
                          value={qOptC}
                          onChange={(e) => setQOptC(e.target.value)}
                          className="p-2 border border-slate-200 rounded-lg text-xs"
                        />
                        <input
                          type="text"
                          required
                          placeholder="Opsi D"
                          value={qOptD}
                          onChange={(e) => setQOptD(e.target.value)}
                          className="p-2 border border-slate-200 rounded-lg text-xs"
                        />
                        <input
                          type="text"
                          required
                          placeholder="Opsi E"
                          value={qOptE}
                          onChange={(e) => setQOptE(e.target.value)}
                          className="p-2 border border-slate-200 rounded-lg text-xs"
                        />
                      </div>
                    </div>

                    {/* Explanation details with requested image, video, and YouTube inputs */}
                    <div className="space-y-3.5 border-t border-slate-100 pt-4">
                      <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide">Materi Pembahasan & Media Pendukung</h4>
                      
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600">Teks Penjelasan Pembahasan</label>
                        <textarea
                          required
                          rows={2}
                          placeholder="Tuliskan ulasan pengerjaan soal secara logis..."
                          value={qExplanation}
                          onChange={(e) => setQExplanation(e.target.value)}
                          className="w-full p-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                        ></textarea>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="space-y-1.5 bg-slate-50/50 p-2.5 rounded-xl border border-slate-150">
                          <label className="text-[11px] font-bold text-slate-600 flex items-center gap-1">
                            <Image className="w-3 h-3 text-emerald-600" /> Gambar Pembahasan
                          </label>
                          <div className="flex gap-1">
                            <input
                              type="text"
                              placeholder="URL Gambar..."
                              value={qExpImage}
                              onChange={(e) => setQExpImage(e.target.value)}
                              className="flex-1 p-1.5 border border-slate-200 rounded text-[10px] bg-white"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                const input = document.createElement('input');
                                input.type = 'file';
                                input.accept = 'image/*';
                                input.onchange = (e: any) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    const reader = new FileReader();
                                    reader.onloadend = () => setQExpImage(reader.result as string);
                                    reader.readAsDataURL(file);
                                  }
                                };
                                input.click();
                              }}
                              className="px-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded text-[10px] font-bold"
                            >
                              Upload
                            </button>
                          </div>
                          {qExpImage && (
                            <img src={qExpImage} alt="Preview Pembahasan" className="max-h-12 mt-1 rounded border mx-auto" />
                          )}
                        </div>

                        <div className="space-y-1.5 bg-slate-50/50 p-2.5 rounded-xl border border-slate-150">
                          <label className="text-[11px] font-bold text-slate-600 flex items-center gap-1">
                            <Video className="w-3 h-3 text-purple-600" /> Video Pembahasan
                          </label>
                          <div className="flex gap-1">
                            <input
                              type="text"
                              placeholder="URL Video..."
                              value={qExpVideo}
                              onChange={(e) => setQExpVideo(e.target.value)}
                              className="flex-1 p-1.5 border border-slate-200 rounded text-[10px] bg-white"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                const input = document.createElement('input');
                                input.type = 'file';
                                input.accept = 'video/*';
                                input.onchange = (e: any) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    // Generate object URL for fully functional simulation!
                                    const url = URL.createObjectURL(file);
                                    setQExpVideo(url);
                                  }
                                };
                                input.click();
                              }}
                              className="px-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded text-[10px] font-bold"
                            >
                              Upload
                            </button>
                          </div>
                          {qExpVideo && (
                            <div className="text-[9px] text-purple-600 font-semibold truncate mt-1">✓ File video dipilih!</div>
                          )}
                        </div>

                        <div className="space-y-1.5 bg-slate-50/50 p-2.5 rounded-xl border border-slate-150">
                          <label className="text-[11px] font-bold text-slate-600 flex items-center gap-1">
                            <Youtube className="w-3 h-3 text-red-600" /> YouTube URL
                          </label>
                          <input
                            type="text"
                            placeholder="Contoh: https://www.youtube.com/embed/..."
                            value={qExpYoutube}
                            onChange={(e) => setQExpYoutube(e.target.value)}
                            className="w-full p-1.5 border border-slate-200 rounded text-[10px]"
                          />
                        </div>

                        <div className="space-y-1.5 bg-indigo-50/40 p-2.5 rounded-xl border border-indigo-150">
                          <label className="text-[11px] font-bold text-indigo-700 flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-indigo-600 animate-pulse" /> Link Gemini Kuis
                          </label>
                          <input
                            type="text"
                            placeholder="Contoh: https://gemini.google.com/..."
                            value={qGeminiQuizUrl}
                            onChange={(e) => setQGeminiQuizUrl(e.target.value)}
                            className="w-full p-1.5 border border-indigo-200 rounded text-[10px] bg-white focus:ring-1 focus:ring-indigo-500"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-2xl transition-all cursor-pointer shadow-md shadow-blue-50 uppercase tracking-wide text-xs mt-3"
                    >
                      Tambahkan Butir Soal CBT
                    </button>
                  </form>
                </div>

                {/* Upload & Buat Paket Try Out Baru (CBT / Google Form) */}
                <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-4">
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                      <span className="bg-blue-100 text-blue-700 p-1.5 rounded-lg"><Award className="w-4 h-4" /></span>
                      Buat & Publikasikan Paket Try Out Baru
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
                        placeholder={toCategory === 'UTBK' ? "Contoh: Try Out Akbar CBT UTBK SNBT Potensi Skolastik" : "Contoh: Try Out CBT TKA SMA Fisika & Kimia"}
                        value={gFormName}
                        onChange={(e) => setGFormName(e.target.value)}
                        className="w-full p-2.5 border border-slate-200 rounded-xl"
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
                          className="w-full p-2.5 border border-slate-200 rounded-xl"
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
                          className="w-full p-2.5 border border-slate-200 rounded-xl bg-white"
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
                          className="w-full p-2.5 border border-slate-200 rounded-xl"
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
                            className="w-full p-2.5 border border-slate-200 rounded-xl"
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
                            className="w-full p-2.5 border border-slate-200 rounded-xl"
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

          {activeTab === 'payments' && (
            <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden">
              <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <h3 className="font-extrabold text-slate-800 text-xs sm:text-sm uppercase tracking-wider">Jurnal Transaksi Pembayaran</h3>
                <span className="text-xs font-bold text-slate-500">Audit Sistem Keuangan</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-50 text-slate-400 font-extrabold uppercase border-b border-slate-100">
                    <tr>
                      <th className="p-4">ID Transaksi</th>
                      <th className="p-4">Akun Pembeli</th>
                      <th className="p-4">Paket Pilihan</th>
                      <th className="p-4">Nominal</th>
                      <th className="p-4">Metode Bayar</th>
                      <th className="p-4">Status</th>
                      <th className="p-4">Tanggal Transaksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {paymentsList.map((p) => (
                      <tr key={p.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-4 font-mono font-bold text-slate-500">{p.id}</td>
                        <td className="p-4">{p.email}</td>
                        <td className="p-4 font-semibold text-slate-800">{p.package}</td>
                        <td className="p-4 font-black text-slate-900">Rp {p.amount.toLocaleString('id-ID')}</td>
                        <td className="p-4 font-medium text-slate-600">{p.method}</td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                            p.status === 'success'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                              : 'bg-amber-50 text-amber-700 border border-amber-100'
                          }`}>
                            {p.status}
                          </span>
                        </td>
                        <td className="p-4">{new Date(p.date).toLocaleDateString('id-ID')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'ai-knowledge' && (
            <AiKnowledgeManager userProfile={userProfile} role="Admin" />
          )}
        </div>

      </main>
    </div>
  );
}
