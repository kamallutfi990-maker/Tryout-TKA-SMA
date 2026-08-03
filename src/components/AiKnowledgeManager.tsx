/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Sparkles, FileText, File, Video, Youtube, Globe, Plus, Trash2, Edit3, 
  Search, Check, AlertCircle, Info, Eye, EyeOff, Bot, Send, BookOpen, Lock,
  HardDrive, Folder, Image, Link, UploadCloud
} from 'lucide-react';
import { AiKnowledgeItem } from '../types';
import { 
  getAiKnowledgeBase, addAiKnowledgeItem, updateAiKnowledgeItem, deleteAiKnowledgeItem 
} from '../lib/firestoreSimulator';
import MathMarkdown from './MathMarkdown';

const SUBJECT_OPTIONS = [
  'Matematika Umum',
  'Matematika Lanjut',
  'Fisika',
  'Kimia',
  'Biologi',
  'Ekonomi',
  'Geografi',
  'Sejarah',
  'Sosiologi',
  'Bahasa Indonesia',
  'Bahasa Inggris',
  'Potensi Skolastik'
];

interface AiKnowledgeManagerProps {
  userProfile: any;
  role: 'Guru' | 'Admin';
}

export default function AiKnowledgeManager({ userProfile, role }: AiKnowledgeManagerProps) {
  const [items, setItems] = useState<AiKnowledgeItem[]>(getAiKnowledgeBase());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState('Semua');

  // Form states
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('Matematika Lanjut');
  const [bab, setBab] = useState('');
  const [contentType, setContentType] = useState<'markdown' | 'pdf' | 'video' | 'youtube' | 'web'>('markdown');
  const [markdownContent, setMarkdownContent] = useState('');
  const [pdfName, setPdfName] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');
  const [pdfSourceType, setPdfSourceType] = useState<'drive' | 'file_manager' | 'galeri'>('drive');
  const [videoName, setVideoName] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [videoSourceType, setVideoSourceType] = useState<'drive' | 'file_manager' | 'galeri'>('drive');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [webUrl, setWebUrl] = useState('');
  const [teacherNote, setTeacherNote] = useState('');

  const handlePdfFileChange = (e: React.ChangeEvent<HTMLInputElement>, source: 'file_manager' | 'galeri') => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPdfName(file.name);
    const objectUrl = URL.createObjectURL(file);
    setPdfUrl(objectUrl);
  };

  const handleVideoFileChange = (e: React.ChangeEvent<HTMLInputElement>, source: 'file_manager' | 'galeri') => {
    const file = e.target.files?.[0];
    if (!file) return;
    setVideoName(file.name);
    const objectUrl = URL.createObjectURL(file);
    setVideoUrl(objectUrl);
  };

  // Editing state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState('');

  // Test AI Simulator State inside Knowledge Manager
  const [testPrompt, setTestPrompt] = useState('');
  const [testResponse, setTestResponse] = useState('');
  const [testingAi, setTestingAi] = useState(false);

  // Preview Modal
  const [previewItem, setPreviewItem] = useState<AiKnowledgeItem | null>(null);

  useEffect(() => {
    setItems(getAiKnowledgeBase());
  }, []);

  const resetForm = () => {
    setTitle('');
    setSubject('Matematika Lanjut');
    setBab('');
    setContentType('markdown');
    setMarkdownContent('');
    setPdfName('');
    setPdfUrl('');
    setVideoName('');
    setVideoUrl('');
    setYoutubeUrl('');
    setWebUrl('');
    setTeacherNote('');
    setEditingId(null);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) {
      alert('Mohon isi Judul Materi Pengetahuan AI.');
      return;
    }

    if (contentType === 'markdown' && !markdownContent) {
      alert('Mohon isi Rangkuman / Konten Markdown untuk dipelajari AI.');
      return;
    }

    if (contentType === 'pdf' && !pdfName && !pdfUrl) {
      alert('Mohon isi nama file PDF atau URL PDF.');
      return;
    }

    if (contentType === 'video' && !videoName && !videoUrl) {
      alert('Mohon isi nama file video atau URL video.');
      return;
    }

    if (contentType === 'youtube' && !youtubeUrl) {
      alert('Mohon isi link URL YouTube.');
      return;
    }

    if (contentType === 'web' && !webUrl) {
      alert('Mohon isi Link URL Web / Website.');
      return;
    }

    if (editingId) {
      updateAiKnowledgeItem(editingId, {
        title,
        subject,
        bab,
        contentType,
        markdownContent,
        pdfName,
        pdfUrl,
        videoName,
        videoUrl,
        youtubeUrl,
        webUrl,
        teacherNote,
      });
      setSuccessMsg('✓ Perubahan materi Knowledge Base AI berhasil disimpan!');
    } else {
      const newItem: AiKnowledgeItem = {
        id: `aik_${Date.now()}`,
        title,
        subject,
        bab: bab || 'Umum',
        contentType,
        markdownContent,
        pdfName,
        pdfUrl,
        videoName,
        videoUrl,
        youtubeUrl,
        webUrl,
        teacherNote,
        createdAt: new Date().toISOString(),
        authorName: userProfile?.displayName || (role === 'Admin' ? 'Admin Utama' : 'Guru TKA'),
        authorRole: role
      };
      addAiKnowledgeItem(newItem);
      setSuccessMsg('✓ Materi Knowledge Base AI baru berhasil ditambahkan! AI siap mempelajari materi ini.');
    }

    setItems(getAiKnowledgeBase());
    resetForm();
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  const handleEditClick = (item: AiKnowledgeItem) => {
    setEditingId(item.id);
    setTitle(item.title);
    setSubject(item.subject);
    setBab(item.bab || '');
    setContentType(item.contentType);
    setMarkdownContent(item.markdownContent || '');
    setPdfName(item.pdfName || '');
    setPdfUrl(item.pdfUrl || '');
    setVideoName(item.videoName || '');
    setVideoUrl(item.videoUrl || '');
    setYoutubeUrl(item.youtubeUrl || '');
    setWebUrl(item.webUrl || '');
    setTeacherNote(item.teacherNote || '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteClick = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus materi Knowledge Base AI ini? AI tidak akan lagi membaca materi ini.')) {
      deleteAiKnowledgeItem(id);
      setItems(getAiKnowledgeBase());
      setSuccessMsg('✓ Materi Knowledge Base AI berhasil dihapus.');
      setTimeout(() => setSuccessMsg(''), 3000);
    }
  };

  const handleTestAiKnowledge = async () => {
    if (!testPrompt.trim()) return;
    setTestingAi(true);
    setTestResponse('');

    try {
      const allKnowledge = getAiKnowledgeBase();
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: testPrompt,
          aiKnowledgeBase: allKnowledge,
          context: {
            userProfile: { displayName: 'Siswa Pengetes' }
          }
        })
      });

      const data = await response.json();
      setTestResponse(data.text || 'Tidak dapat menghasilkan tanggapan.');
    } catch (err: any) {
      setTestResponse('❌ Gagal menghubungi AI Server. Menggunakan mode simulasi offline.');
    } finally {
      setTestingAi(false);
    }
  };

  const filteredItems = items.filter(item => {
    const matchSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        (item.markdownContent && item.markdownContent.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchSubject = selectedSubjectFilter === 'Semua' || item.subject === selectedSubjectFilter;
    return matchSearch && matchSubject;
  });

  return (
    <div className="space-y-8">
      {/* Banner Indicator & Notice */}
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 skew-x-12 pointer-events-none" />
        
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 px-3.5 py-1.5 rounded-full text-xs font-extrabold text-purple-200">
            <Sparkles className="w-4 h-4 text-purple-300 animate-pulse" />
            <span>KNOWLEDGE BASE INTERNAL AI TUTOR (GURU & ADMIN)</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black tracking-tight">
            Input Materi PDF, Markdown, Video, & YouTube untuk AI
          </h2>

          <p className="text-xs sm:text-sm text-purple-200/90 leading-relaxed max-w-3xl">
            Materi yang dimasukkan di sini <span className="font-bold text-white underline decoration-purple-400">HANYA dipelajari secara internal oleh seluruh AI</span> di platform web ini. Ketika limit penggunaan kuota API tercapai atau dalam mode normal, AI akan secara otomatis memproses materi ini (PDF, Markdown, Video, YouTube, atau URL Web) untuk menjawab pertanyaan dan kebutuhan di Dashboard Siswa.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-purple-300/80 font-medium">
            <div className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-xl border border-white/10">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Tersembunyi dari Dashboard Siswa</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-xl border border-white/10">
              <Bot className="w-3.5 h-3.5 text-purple-400" />
              <span>{items.length} Modul Terhubung ke AI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Success Notification */}
      {successMsg && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-2xl text-xs sm:text-sm font-bold flex justify-between items-center shadow-sm">
          <span>{successMsg}</span>
          <button onClick={() => setSuccessMsg('')} className="text-emerald-600 hover:text-emerald-900 font-black cursor-pointer">✕</button>
        </div>
      )}

      {/* Form Input / Edit Knowledge Base AI */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
              <span className="bg-purple-100 text-purple-700 p-2 rounded-xl">
                <Plus className="w-5 h-5" />
              </span>
              {editingId ? 'Edit Materi Knowledge Base AI' : 'Input Materi Pengetahuan Baru untuk AI'}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Pilih format materi (PDF, Markdown, Video, YouTube, atau URL Web) dan berikan instruksi agar AI belajar dengan presisi.
            </p>
          </div>

          {editingId && (
            <button
              onClick={resetForm}
              className="text-xs font-bold text-slate-500 hover:text-slate-800 px-3 py-1.5 border border-slate-200 rounded-xl cursor-pointer"
            >
              Batal Edit
            </button>
          )}
        </div>

        <form onSubmit={handleSave} className="space-y-6 text-xs sm:text-sm">
          {/* Format / Type Selector Tabs */}
          <div className="space-y-2">
            <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">
              1. Pilih Tipe Format Materi
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              <button
                type="button"
                onClick={() => setContentType('markdown')}
                className={`p-3 rounded-2xl border text-xs font-bold flex flex-col items-center justify-center gap-2 transition-all cursor-pointer ${
                  contentType === 'markdown'
                    ? 'bg-purple-50 border-purple-600 text-purple-800 shadow-sm ring-2 ring-purple-600/20'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <FileText className="w-5 h-5" />
                <span>Ringkasan Markdown</span>
              </button>

              <button
                type="button"
                onClick={() => setContentType('pdf')}
                className={`p-3 rounded-2xl border text-xs font-bold flex flex-col items-center justify-center gap-2 transition-all cursor-pointer ${
                  contentType === 'pdf'
                    ? 'bg-purple-50 border-purple-600 text-purple-800 shadow-sm ring-2 ring-purple-600/20'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <File className="w-5 h-5" />
                <span>Dokumen PDF</span>
              </button>

              <button
                type="button"
                onClick={() => setContentType('video')}
                className={`p-3 rounded-2xl border text-xs font-bold flex flex-col items-center justify-center gap-2 transition-all cursor-pointer ${
                  contentType === 'video'
                    ? 'bg-purple-50 border-purple-600 text-purple-800 shadow-sm ring-2 ring-purple-600/20'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Video className="w-5 h-5" />
                <span>File Video Pembelajaran</span>
              </button>

              <button
                type="button"
                onClick={() => setContentType('youtube')}
                className={`p-3 rounded-2xl border text-xs font-bold flex flex-col items-center justify-center gap-2 transition-all cursor-pointer ${
                  contentType === 'youtube'
                    ? 'bg-purple-50 border-purple-600 text-purple-800 shadow-sm ring-2 ring-purple-600/20'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Youtube className="w-5 h-5" />
                <span>Link Video YouTube</span>
              </button>

              <button
                type="button"
                onClick={() => setContentType('web')}
                className={`p-3 rounded-2xl border text-xs font-bold flex flex-col items-center justify-center gap-2 transition-all cursor-pointer ${
                  contentType === 'web'
                    ? 'bg-purple-50 border-purple-600 text-purple-800 shadow-sm ring-2 ring-purple-600/20'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Globe className="w-5 h-5 text-blue-600" />
                <span>URL Web / Website</span>
              </button>
            </div>
          </div>

          {/* General Metadata Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Judul Pengetahuan AI</label>
              <input
                type="text"
                required
                placeholder="Contoh: Modul Rangkuman Turunan & Matriks TKA untuk AI"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Mata Pelajaran</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
              >
                {SUBJECT_OPTIONS.map((sub) => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Bab / Subbab Spesifik (Opsional)</label>
            <input
              type="text"
              placeholder="Contoh: Persamaan Kuadrat & Determinan Matriks"
              value={bab}
              onChange={(e) => setBab(e.target.value)}
              className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          {/* Dynamic Format Inputs */}
          {contentType === 'markdown' && (
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-slate-700">
                  Ringkasan Materi & Rumus (LaTeX & Markdown Supported)
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setMarkdownContent(prev => prev + `\n\n### 📐 Rumus Tambahan:\n- Persamaan: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$\n- Turunan: $f'(x) = a \\cdot n \\cdot x^{n-1}$`);
                  }}
                  className="text-[11px] font-bold text-purple-700 hover:underline cursor-pointer"
                >
                  + Sisipkan Template LaTeX
                </button>
              </div>
              <textarea
                required
                rows={6}
                placeholder="Tuliskan teori, rumus-rumus penting, trik pengerjaan cepat, atau definisi bab yang perlu dibaca dan dihafal oleh AI..."
                value={markdownContent}
                onChange={(e) => setMarkdownContent(e.target.value)}
                className="w-full p-3 border border-slate-200 rounded-xl font-mono text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>
          )}

          {contentType === 'pdf' && (
            <div className="space-y-4 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80">
              <div className="space-y-2">
                <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider block">
                  Pilih Sumber Dokumen PDF
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setPdfSourceType('drive')}
                    className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      pdfSourceType === 'drive'
                        ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <HardDrive className="w-4 h-4" />
                    <span>Drive</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPdfSourceType('file_manager')}
                    className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      pdfSourceType === 'file_manager'
                        ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Folder className="w-4 h-4" />
                    <span>File Manager</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPdfSourceType('galeri')}
                    className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      pdfSourceType === 'galeri'
                        ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Image className="w-4 h-4" />
                    <span>Galeri</span>
                  </button>
                </div>
              </div>

              {/* Option 1: Google Drive */}
              {pdfSourceType === 'drive' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 rounded-2xl border border-slate-200">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Nama File PDF (Google Drive)</label>
                    <input
                      type="text"
                      placeholder="Contoh: Modul_UTBK_Matematika_2026.pdf"
                      value={pdfName}
                      onChange={(e) => setPdfName(e.target.value)}
                      className="w-full p-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Link URL Google Drive PDF</label>
                    <input
                      type="url"
                      placeholder="https://drive.google.com/file/d/.../view"
                      value={pdfUrl}
                      onChange={(e) => setPdfUrl(e.target.value)}
                      className="w-full p-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                    <p className="text-[10px] text-slate-400">Tempelkan link berbagi Google Drive milik Anda di sini.</p>
                  </div>
                </div>
              )}

              {/* Option 2: File Manager */}
              {pdfSourceType === 'file_manager' && (
                <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-3">
                  <label className="text-xs font-bold text-slate-700 block">Pilih Dokumen PDF dari File Manager Perangkat</label>
                  <div className="border-2 border-dashed border-purple-200 hover:border-purple-400 bg-purple-50/30 p-5 rounded-2xl text-center transition-all">
                    <input
                      type="file"
                      id="pdf-file-manager-input"
                      accept=".pdf,application/pdf"
                      onChange={(e) => handlePdfFileChange(e, 'file_manager')}
                      className="hidden"
                    />
                    <label htmlFor="pdf-file-manager-input" className="cursor-pointer flex flex-col items-center gap-2">
                      <div className="p-3 bg-purple-100 text-purple-700 rounded-full">
                        <Folder className="w-6 h-6" />
                      </div>
                      <span className="font-extrabold text-slate-800 text-xs">Klik untuk Buka File Manager</span>
                      <span className="text-[10px] text-slate-500">Mendukung file dokumen format .pdf</span>
                    </label>
                  </div>

                  {pdfName && (
                    <div className="flex items-center justify-between p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 font-bold">
                      <div className="flex items-center gap-2 truncate">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="truncate">File Manager: {pdfName}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => { setPdfName(''); setPdfUrl(''); }}
                        className="text-red-500 hover:text-red-700 text-[11px] font-bold underline shrink-0 cursor-pointer"
                      >
                        Hapus
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Option 3: Galeri */}
              {pdfSourceType === 'galeri' && (
                <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-3">
                  <label className="text-xs font-bold text-slate-700 block">Pilih Dokumen / Hasil Scan PDF dari Galeri</label>
                  <div className="border-2 border-dashed border-indigo-200 hover:border-indigo-400 bg-indigo-50/30 p-5 rounded-2xl text-center transition-all">
                    <input
                      type="file"
                      id="pdf-galeri-input"
                      accept="application/pdf,image/*,.pdf"
                      onChange={(e) => handlePdfFileChange(e, 'galeri')}
                      className="hidden"
                    />
                    <label htmlFor="pdf-galeri-input" className="cursor-pointer flex flex-col items-center gap-2">
                      <div className="p-3 bg-indigo-100 text-indigo-700 rounded-full">
                        <Image className="w-6 h-6" />
                      </div>
                      <span className="font-extrabold text-slate-800 text-xs">Pilih dari Galeri Foto & Dokumen</span>
                      <span className="text-[10px] text-slate-500">Mendukung file scan/foto dokumen dan PDF dari Galeri HP/Tablet</span>
                    </label>
                  </div>

                  {pdfName && (
                    <div className="flex items-center justify-between p-3 bg-indigo-50 border border-indigo-200 rounded-xl text-xs text-indigo-800 font-bold">
                      <div className="flex items-center gap-2 truncate">
                        <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                        <span className="truncate">Galeri: {pdfName}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => { setPdfName(''); setPdfUrl(''); }}
                        className="text-red-500 hover:text-red-700 text-[11px] font-bold underline shrink-0 cursor-pointer"
                      >
                        Hapus
                      </button>
                    </div>
                  )}
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Ringkasan / Transkrip Singkat Isi PDF untuk AI</label>
                <textarea
                  rows={3}
                  placeholder="Sebutkan pokok bahasan utama atau poin penting dalam dokumen PDF ini agar AI memahami isinya..."
                  value={markdownContent}
                  onChange={(e) => setMarkdownContent(e.target.value)}
                  className="w-full p-3 border border-slate-200 rounded-xl font-mono text-xs bg-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>
            </div>
          )}

          {contentType === 'video' && (
            <div className="space-y-4 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80">
              <div className="space-y-2">
                <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider block">
                  Pilih Sumber File Video Pembelajaran
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setVideoSourceType('drive')}
                    className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      videoSourceType === 'drive'
                        ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <HardDrive className="w-4 h-4" />
                    <span>Drive</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setVideoSourceType('file_manager')}
                    className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      videoSourceType === 'file_manager'
                        ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Folder className="w-4 h-4" />
                    <span>File Manager</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setVideoSourceType('galeri')}
                    className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      videoSourceType === 'galeri'
                        ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Image className="w-4 h-4" />
                    <span>Galeri</span>
                  </button>
                </div>
              </div>

              {/* Option 1: Drive */}
              {videoSourceType === 'drive' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 rounded-2xl border border-slate-200">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Nama File Video (Google Drive)</label>
                    <input
                      type="text"
                      placeholder="Contoh: Pembahasan_Eksperimen_Kimia.mp4"
                      value={videoName}
                      onChange={(e) => setVideoName(e.target.value)}
                      className="w-full p-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Link URL Google Drive Video</label>
                    <input
                      type="url"
                      placeholder="https://drive.google.com/file/d/.../view"
                      value={videoUrl}
                      onChange={(e) => setVideoUrl(e.target.value)}
                      className="w-full p-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* Option 2: File Manager */}
              {videoSourceType === 'file_manager' && (
                <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-3">
                  <label className="text-xs font-bold text-slate-700 block">Pilih File Video dari File Manager</label>
                  <div className="border-2 border-dashed border-purple-200 hover:border-purple-400 bg-purple-50/30 p-5 rounded-2xl text-center transition-all">
                    <input
                      type="file"
                      id="video-file-manager-input"
                      accept="video/*,.mp4,.mkv,.webm"
                      onChange={(e) => handleVideoFileChange(e, 'file_manager')}
                      className="hidden"
                    />
                    <label htmlFor="video-file-manager-input" className="cursor-pointer flex flex-col items-center gap-2">
                      <div className="p-3 bg-purple-100 text-purple-700 rounded-full">
                        <Folder className="w-6 h-6" />
                      </div>
                      <span className="font-extrabold text-slate-800 text-xs">Klik untuk Buka File Manager Video</span>
                      <span className="text-[10px] text-slate-500">Mendukung format video MP4, MKV, WebM, dll.</span>
                    </label>
                  </div>

                  {videoUrl && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 font-bold">
                        <div className="flex items-center gap-2 truncate">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span className="truncate">File Manager: {videoName}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => { setVideoName(''); setVideoUrl(''); }}
                          className="text-red-500 hover:text-red-700 text-[11px] font-bold underline shrink-0 cursor-pointer"
                        >
                          Hapus
                        </button>
                      </div>
                      {videoUrl.startsWith('blob:') && (
                        <video src={videoUrl} controls className="w-full max-h-48 rounded-xl bg-black border border-slate-200" />
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Option 3: Galeri */}
              {videoSourceType === 'galeri' && (
                <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-3">
                  <label className="text-xs font-bold text-slate-700 block">Pilih Video Pembelajaran dari Galeri HP/Tablet</label>
                  <div className="border-2 border-dashed border-blue-200 hover:border-blue-400 bg-blue-50/30 p-5 rounded-2xl text-center transition-all">
                    <input
                      type="file"
                      id="video-galeri-input"
                      accept="video/*"
                      onChange={(e) => handleVideoFileChange(e, 'galeri')}
                      className="hidden"
                    />
                    <label htmlFor="video-galeri-input" className="cursor-pointer flex flex-col items-center gap-2">
                      <div className="p-3 bg-blue-100 text-blue-700 rounded-full">
                        <Image className="w-6 h-6" />
                      </div>
                      <span className="font-extrabold text-slate-800 text-xs">Buka Galeri Video Perangkat</span>
                      <span className="text-[10px] text-slate-500">Pilih rekaman video pembelajaran dari Galeri / Kamera HP</span>
                    </label>
                  </div>

                  {videoUrl && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-800 font-bold">
                        <div className="flex items-center gap-2 truncate">
                          <Check className="w-4 h-4 text-blue-600 shrink-0" />
                          <span className="truncate">Galeri Video: {videoName}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => { setVideoName(''); setVideoUrl(''); }}
                          className="text-red-500 hover:text-red-700 text-[11px] font-bold underline shrink-0 cursor-pointer"
                        >
                          Hapus
                        </button>
                      </div>
                      {videoUrl.startsWith('blob:') && (
                        <video src={videoUrl} controls className="w-full max-h-48 rounded-xl bg-black border border-slate-200" />
                      )}
                    </div>
                  )}
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Rangkuman Materi Video untuk AI</label>
                <textarea
                  rows={3}
                  placeholder="Sebutkan langkah pengerjaan atau inti penjelasan video..."
                  value={markdownContent}
                  onChange={(e) => setMarkdownContent(e.target.value)}
                  className="w-full p-3 border border-slate-200 rounded-xl font-mono text-xs bg-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>
            </div>
          )}

          {contentType === 'youtube' && (
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Link URL Video YouTube</label>
                <input
                  type="url"
                  required
                  placeholder="https://www.youtube.com/watch?v=..."
                  value={youtubeUrl}
                  onChange={(e) => setYoutubeUrl(e.target.value)}
                  className="w-full p-3 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Transkrip / Poin Kunci Video YouTube untuk AI</label>
                <textarea
                  rows={3}
                  placeholder="Tuliskan poin penting yang ada di dalam video YouTube tersebut agar AI dapat merujuknya..."
                  value={markdownContent}
                  onChange={(e) => setMarkdownContent(e.target.value)}
                  className="w-full p-3 border border-slate-200 rounded-xl font-mono text-xs"
                />
              </div>
            </div>
          )}

          {contentType === 'web' && (
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Link URL Web / Artikel Online</label>
                <input
                  type="url"
                  required
                  placeholder="https://id.wikipedia.org/wiki/Matriks_(matematika) atau https://sumberbelajar.belajar.kemdikbud.go.id/..."
                  value={webUrl}
                  onChange={(e) => setWebUrl(e.target.value)}
                  className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Rangkuman / Poin Kunci Halaman Web untuk AI</label>
                <textarea
                  rows={3}
                  placeholder="Sebutkan poin penting, definisi, atau materi kunci dari URL Web tersebut agar AI dapat merujuknya..."
                  value={markdownContent}
                  onChange={(e) => setMarkdownContent(e.target.value)}
                  className="w-full p-3 border border-slate-200 rounded-xl font-mono text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* Teacher Special Instructions for AI */}
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl space-y-2">
            <div className="flex items-center gap-2 text-amber-800 font-extrabold text-xs">
              <Bot className="w-4 h-4 text-amber-700" />
              <span>Instruksi & Panduan Khusus dari Guru/Admin untuk AI Tutor</span>
            </div>
            <textarea
              rows={2}
              placeholder="Contoh: 'Setiap siswa bertanya materi ini, tekankan penggunaan rumus determinan ad - bc dan berikan contoh soal HOTS dengan langkah ramah anak SMA.'"
              value={teacherNote}
              onChange={(e) => setTeacherNote(e.target.value)}
              className="w-full p-2.5 bg-white border border-amber-200 rounded-xl text-xs text-slate-800 focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-extrabold rounded-2xl transition-all cursor-pointer shadow-lg shadow-purple-200 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>{editingId ? 'Simpan Perubahan AI Knowledge' : 'Publikasikan ke Knowledge Base AI'}</span>
          </button>
        </form>
      </div>

      {/* Interactive AI Knowledge Tester Box */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl space-y-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-purple-500/20 border border-purple-400/30 rounded-xl text-purple-300">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-sm sm:text-base text-white">
              Uji Coba Pemahaman AI (Simulator Test Internal)
            </h3>
            <p className="text-xs text-slate-400">
              Ketik pertanyaan uji coba untuk memverifikasi bagaimana AI menjawab menggunakan seluruh materi Knowledge Base yang baru diinput.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Contoh: 'Jelaskan rumus cepat turunan dan determinan matriks yang diupload guru...'"
            value={testPrompt}
            onChange={(e) => setTestPrompt(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleTestAiKnowledge()}
            className="flex-1 p-3 bg-slate-800 border border-slate-700 text-white rounded-xl text-xs sm:text-sm focus:outline-none focus:border-purple-400"
          />
          <button
            onClick={handleTestAiKnowledge}
            disabled={testingAi}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl text-xs transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2 shrink-0"
          >
            {testingAi ? <Sparkles className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            <span>{testingAi ? 'AI Memproses...' : 'Tes AI Sekarang'}</span>
          </button>
        </div>

        {testResponse && (
          <div className="mt-4 p-4 bg-slate-800/90 border border-slate-700 rounded-2xl text-xs sm:text-sm text-slate-200 space-y-2">
            <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider block">
              Hasil Jawaban AI Berdasarkan Knowledge Base Internal:
            </span>
            <div className="leading-relaxed">
              <MathMarkdown content={testResponse} />
            </div>
          </div>
        )}
      </div>

      {/* Knowledge Base Item List */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple-600" />
              Daftar Materi Knowledge Base AI Aktif ({filteredItems.length})
            </h3>
            <p className="text-xs text-slate-500">
              Daftar seluruh materi internal yang aktif dibaca dan dipelajari oleh AI.
            </p>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Cari materi AI..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-xl text-xs"
              />
            </div>

            <select
              value={selectedSubjectFilter}
              onChange={(e) => setSelectedSubjectFilter(e.target.value)}
              className="p-2 border border-slate-200 rounded-xl text-xs bg-white"
            >
              <option value="Semua">Semua Mapel</option>
              {SUBJECT_OPTIONS.map((sub) => (
                <option key={sub} value={sub}>{sub}</option>
              ))}
            </select>
          </div>
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 border border-dashed border-slate-200 rounded-2xl space-y-2">
            <Bot className="w-10 h-10 text-slate-300 mx-auto" />
            <p className="text-xs text-slate-500 font-bold">Belum ada materi Knowledge Base AI yang sesuai.</p>
            <p className="text-[11px] text-slate-400">Silakan input materi baru di atas untuk melatih AI platform.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-200 hover:border-purple-300 transition-all rounded-2xl p-5 shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-extrabold bg-purple-100 text-purple-800">
                      {item.contentType === 'markdown' && <FileText className="w-3 h-3" />}
                      {item.contentType === 'pdf' && <File className="w-3 h-3" />}
                      {item.contentType === 'video' && <Video className="w-3 h-3" />}
                      {item.contentType === 'youtube' && <Youtube className="w-3 h-3" />}
                      {item.contentType === 'web' && <Globe className="w-3 h-3 text-blue-600" />}
                      <span>{item.contentType === 'web' ? 'URL WEB' : item.contentType.toUpperCase()}</span>
                    </span>

                    <span className="text-[10px] text-slate-400 font-medium">
                      Oleh {item.authorName} ({item.authorRole})
                    </span>
                  </div>

                  <h4 className="font-extrabold text-slate-900 text-sm leading-snug">
                    {item.title}
                  </h4>

                  <div className="flex flex-wrap gap-2 text-[10px] font-bold text-slate-500">
                    <span className="bg-slate-100 px-2 py-0.5 rounded-md">Mapel: {item.subject}</span>
                    {item.bab && <span className="bg-slate-100 px-2 py-0.5 rounded-md">Bab: {item.bab}</span>}
                  </div>

                  {item.markdownContent && (
                    <div className="bg-slate-50 p-3 rounded-xl text-xs text-slate-600 line-clamp-3 font-mono border border-slate-100">
                      {item.markdownContent}
                    </div>
                  )}

                  {item.pdfName && (
                    <div className="text-[11px] text-blue-600 flex items-center gap-1 font-semibold truncate">
                      <File className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">PDF: {item.pdfName}</span>
                    </div>
                  )}

                  {item.videoName && (
                    <div className="text-[11px] text-emerald-600 flex items-center gap-1 font-semibold truncate">
                      <Video className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">Video: {item.videoName}</span>
                    </div>
                  )}

                  {item.youtubeUrl && (
                    <div className="text-[11px] text-red-600 flex items-center gap-1 font-semibold truncate">
                      <Youtube className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">YouTube: {item.youtubeUrl}</span>
                    </div>
                  )}

                  {item.webUrl && (
                    <div className="text-[11px] text-blue-600 flex items-center gap-1 font-semibold truncate">
                      <Globe className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">URL Web: {item.webUrl}</span>
                    </div>
                  )}

                  {item.teacherNote && (
                    <div className="text-[11px] text-amber-800 bg-amber-50/80 p-2 rounded-lg border border-amber-100 flex items-start gap-1.5">
                      <Bot className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span><strong>Panduan AI:</strong> {item.teacherNote}</span>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setPreviewItem(item)}
                    className="text-xs font-bold text-slate-600 hover:text-purple-600 flex items-center gap-1 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Lihat Rincian</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEditClick(item)}
                      className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                      title="Edit Materi"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteClick(item.id)}
                      className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                      title="Hapus Materi"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Preview Modal */}
      {previewItem && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-start border-b border-slate-100 pb-4">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase bg-purple-100 text-purple-800 mb-1">
                  {previewItem.contentType} - {previewItem.subject}
                </span>
                <h3 className="text-lg font-extrabold text-slate-900">{previewItem.title}</h3>
              </div>
              <button
                onClick={() => setPreviewItem(null)}
                className="text-slate-400 hover:text-slate-700 font-black p-2 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {previewItem.markdownContent && (
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-500">Materi Markdown untuk AI:</span>
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-xs sm:text-sm text-slate-800 leading-relaxed">
                  <MathMarkdown content={previewItem.markdownContent} />
                </div>
              </div>
            )}

            {previewItem.teacherNote && (
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl text-xs text-amber-900 space-y-1">
                <span className="font-extrabold block">Instruksi Khusus untuk AI:</span>
                <p>{previewItem.teacherNote}</p>
              </div>
            )}

            <div className="space-y-2 text-xs text-slate-600">
              {previewItem.pdfName && <p>📄 <strong>File PDF:</strong> {previewItem.pdfName} ({previewItem.pdfUrl || 'No link'})</p>}
              {previewItem.videoName && <p>🎬 <strong>File Video:</strong> {previewItem.videoName} ({previewItem.videoUrl || 'No link'})</p>}
              {previewItem.youtubeUrl && <p>📺 <strong>YouTube Link:</strong> {previewItem.youtubeUrl}</p>}
              {previewItem.webUrl && <p>🌐 <strong>URL Web / Website:</strong> <a href={previewItem.webUrl} target="_blank" rel="noreferrer" className="text-purple-600 underline font-semibold">{previewItem.webUrl}</a></p>}
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setPreviewItem(null)}
                className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
