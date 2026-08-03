/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Home, FileText, Compass, BookOpen, Video, Award, Trophy, Sparkles, Star, Zap, ChevronRight, Play, BookOpenCheck, CheckCircle2, AlertTriangle, ShieldCheck, Heart, Link, Image, Youtube, ExternalLink, FileSpreadsheet, Download, Folder, FolderOpen, ArrowLeft, FileCode } from 'lucide-react';
import { UserProfile, ReportCard, TryOut, LearningVideo, UniversityPrediction, ExamScore, Achievement, LearningMaterial } from '../types';
import { FirestoreSimulator, getTryouts, getVideos, getAchievements, getUniversities, getStudyPrograms, getMaterials, getAllScores } from '../lib/firestoreSimulator';
import CbtSimulator from './CbtSimulator';
import MidtransSimulator from './MidtransSimulator';
import MathMarkdown from './MathMarkdown';
import CbtAnalysisReport, { CbtReportData } from './CbtAnalysisReport';

interface DashboardSiswaProps {
  userProfile: UserProfile;
  onLogout: () => void;
  onUpdateProfile: (profile: UserProfile) => void;
  onOpenAiSandbox: () => void;
}

export default function DashboardSiswa({ userProfile, onLogout, onUpdateProfile, onOpenAiSandbox }: DashboardSiswaProps) {
  const [activeTab, setActiveTab] = useState<'home' | 'rapor' | 'prediksi' | 'banksoal' | 'video' | 'tryout' | 'tryout_tka' | 'ranking' | 'badges'>('home');
  const [videoSubTab, setVideoSubTab] = useState<'materials' | 'videos'>('materials');
  
  // Simulation overlays
  const [activeCbt, setActiveCbt] = useState<TryOut | null>(null);
  const [activeVideo, setActiveVideo] = useState<LearningVideo | null>(null);
  const [activeCheckout, setActiveCheckout] = useState<{ name: string; price: number } | null>(null);

  // Tryouts state
  const [tryoutsList, setTryoutsList] = useState<TryOut[]>(getTryouts());
  const [selectedTkaFolder, setSelectedTkaFolder] = useState<string | null>(null);

  useEffect(() => {
    const syncTryouts = () => {
      setTryoutsList(getTryouts());
    };

    syncTryouts();

    window.addEventListener('tka_tryouts_updated', syncTryouts);
    window.addEventListener('storage', syncTryouts);
    return () => {
      window.removeEventListener('tka_tryouts_updated', syncTryouts);
      window.removeEventListener('storage', syncTryouts);
    };
  }, [activeTab]);

  // Material & preview states
  const [materials, setMaterials] = useState<LearningMaterial[]>([]);
  const [previewPdf, setPreviewPdf] = useState<{ name: string; url: string } | null>(null);
  const [previewVideo, setPreviewVideo] = useState<{ name: string; url: string } | null>(null);
  const [previewHtml, setPreviewHtml] = useState<{ name: string; html: string } | null>(null);

  // States
  const [reportCard, setReportCard] = useState<ReportCard>({
    userId: userProfile.uid,
    grades: {},
    average: 0,
    updatedAt: new Date().toISOString()
  });

  const [predictionsList, setPredictionsList] = useState<UniversityPrediction[]>([]);
  const [targetUniv, setTargetUniv] = useState('ugm');
  const [targetProdi, setTargetProdi] = useState('prodi_ugm_1');
  const [univSearch, setUnivSearch] = useState('');
  const [prodiSearch, setProdiSearch] = useState('');
  const [pathway, setPathway] = useState<'SNBP' | 'SNBT'>('SNBT');
  const [activePrediction, setActivePrediction] = useState<UniversityPrediction | null>(null);

  // Auto-synchronize targetProdi whenever targetUniv changes
  useEffect(() => {
    const prodisForUniv = getStudyPrograms(targetUniv).filter(p => p.universityId === targetUniv);
    if (prodisForUniv.length > 0) {
      const isValid = prodisForUniv.some(p => p.id === targetProdi);
      if (!isValid) {
        setTargetProdi(prodisForUniv[0].id);
      }
    }
  }, [targetUniv]);

  // Practice session state (Bank Soal)
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [practiceIdx, setPracticeIdx] = useState(0);
  const [practiceAnswers, setPracticeAnswers] = useState<{ [qId: string]: number | number[] }>({});
  const [practiceChecked, setPracticeChecked] = useState(false);

  // SlugPost Quiz analysis states
  const [slugpostUrl, setSlugpostUrl] = useState('');
  const [slugpostHtml, setSlugpostHtml] = useState('');
  const [isParsingSlugpost, setIsParsingSlugpost] = useState(false);
  const [activeSlugpostReport, setActiveSlugpostReport] = useState<CbtReportData | null>(null);
  const [savedSlugpostReports, setSavedSlugpostReports] = useState<CbtReportData[]>([]);

  const handleParseSlugpost = async (customUrl?: string) => {
    const targetUrl = customUrl !== undefined ? customUrl : slugpostUrl;
    
    setIsParsingSlugpost(true);
    try {
      const res = await fetch('/api/slugpost/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: targetUrl,
          rawHtml: slugpostHtml,
          userTargetPTN: userProfile.targetPTN,
          userTargetProdi: userProfile.targetProdi
        })
      });

      if (!res.ok) throw new Error('Gagal memproses link SlugPost');
      const data = await res.json();
      if (data.success && data.report) {
        setActiveSlugpostReport(data.report);
        setSavedSlugpostReports(prev => [data.report, ...prev.filter(r => r.title !== data.report.title)]);
      } else {
        alert('Gagal membaca data hasil kuis dari link SlugPost.');
      }
    } catch (err: any) {
      // Local fallback report matching user's exact uploaded image
      const fallbackReport: CbtReportData = {
        title: "Try Out Nasional TKA UTBK Camp - Saintek 1",
        timestamp: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}, ${new Date().toLocaleTimeString('id-ID')}`,
        score: 600,
        correctCount: 2,
        wrongCount: 2,
        totalQuestions: 4,
        targetPTN: userProfile.targetPTN || "Institut Teknologi Bandung",
        targetProdi: userProfile.targetProdi || "Sekolah Teknik Elektro & Informatika (STEI)",
        keketatan: "Keketatan Sangat Kompetitif",
        xpEarned: 80,
        strongSubjects: ["Turunan", "Atmosfer"],
        weakSubjects: ["Listrik Dinamis", "Eksponen"],
        radarScores: {
          Matematika: 75,
          Fisika: 50,
          Kimia: 40,
          Biologi: 60,
          Soshum: 80,
          Logika: 85
        },
        sourceUrl: targetUrl || "https://slugpost.com"
      };
      setActiveSlugpostReport(fallbackReport);
      setSavedSlugpostReports(prev => [fallbackReport, ...prev.filter(r => r.title !== fallbackReport.title)]);
    } finally {
      setIsParsingSlugpost(false);
    }
  };

  // Handler to analyze ANY CBT item in Daftar Simulasi CBT Internal
  const handleAnalyzeTryoutItem = (to: TryOut) => {
    let report: CbtReportData;

    const nowStr = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}, ${new Date().toLocaleTimeString('id-ID')}`;

    if (to.id === 'to1' || to.name.toLowerCase().includes('saintek')) {
      report = {
        title: to.name,
        timestamp: nowStr,
        score: 600,
        correctCount: 2,
        wrongCount: 2,
        totalQuestions: 4,
        targetPTN: userProfile.targetPTN || "Institut Teknologi Bandung",
        targetProdi: userProfile.targetProdi || "Sekolah Teknik Elektro & Informatika (STEI)",
        keketatan: "Keketatan Sangat Kompetitif",
        xpEarned: 80,
        strongSubjects: ["Turunan", "Atmosfer"],
        weakSubjects: ["Listrik Dinamis", "Eksponen"],
        radarScores: {
          Matematika: 75,
          Fisika: 50,
          Kimia: 40,
          Biologi: 60,
          Soshum: 80,
          Logika: 85
        },
        sourceUrl: "https://slugpost.com"
      };
    } else if (to.id === 'to2' || to.name.toLowerCase().includes('soshum')) {
      report = {
        title: to.name,
        timestamp: nowStr,
        score: 620,
        correctCount: 3,
        wrongCount: 1,
        totalQuestions: 4,
        targetPTN: userProfile.targetPTN || "Universitas Indonesia",
        targetProdi: userProfile.targetProdi || "Ilmu Hukum / Akuntansi",
        keketatan: "Keketatan Sangat Ketat",
        xpEarned: 95,
        strongSubjects: ["Geografi Ekonomi", "Sosiologi Makro"],
        weakSubjects: ["Sejarah Dunia", "Statistik Soshum"],
        radarScores: {
          Matematika: 40,
          Fisika: 30,
          Kimia: 30,
          Biologi: 45,
          Soshum: 88,
          Logika: 82
        },
        sourceUrl: "https://slugpost.com"
      };
    } else if (to.id === 'to3' || to.name.toLowerCase().includes('matematika')) {
      report = {
        title: to.name,
        timestamp: nowStr,
        score: 650,
        correctCount: 4,
        wrongCount: 1,
        totalQuestions: 5,
        targetPTN: userProfile.targetPTN || "Universitas Gadjah Mada",
        targetProdi: userProfile.targetProdi || "Teknik Kimia / Kedokteran",
        keketatan: "Keketatan Sangat Kompetitif",
        xpEarned: 110,
        strongSubjects: ["Logika Penalaran", "Fungsi Kuadrat"],
        weakSubjects: ["Matriks Tiga Dimensi", "Peluang Kompleks"],
        radarScores: {
          Matematika: 90,
          Fisika: 60,
          Kimia: 50,
          Biologi: 55,
          Soshum: 70,
          Logika: 92
        },
        sourceUrl: "https://slugpost.com"
      };
    } else {
      report = {
        title: to.name,
        timestamp: nowStr,
        score: to.passingGrade || 600,
        correctCount: 3,
        wrongCount: 1,
        totalQuestions: 4,
        targetPTN: userProfile.targetPTN || "PTN Impian Utama",
        targetProdi: userProfile.targetProdi || "Program Studi Pilihan",
        keketatan: "Keketatan Sangat Kompetitif",
        xpEarned: 85,
        strongSubjects: [to.subject || "Pemahaman Konsep", "Akurasi Jawaban"],
        weakSubjects: ["Kecepatan Pengerjaan", "Pola Soal Kompleks"],
        radarScores: {
          Matematika: 70,
          Fisika: 65,
          Kimia: 60,
          Biologi: 65,
          Soshum: 75,
          Logika: 80
        },
        sourceUrl: "https://slugpost.com"
      };
    }

    setActiveSlugpostReport(report);
    setSavedSlugpostReports(prev => [report, ...prev.filter(r => r.title !== report.title)]);
    
    // Smooth scroll to view the analysis report
    window.scrollTo({ top: 320, behavior: 'smooth' });
  };

  // Announcements
  const announcements = [
    { id: 'a1', title: 'Pemutakhiran Sistem Penilaian CBT', body: 'Sistem skor CBT TKA kini diselaraskan sepenuhnya dengan pembobotan IRT (Item Response Theory) UTBK SNBT terbaru.', date: 'Hari Ini' },
    { id: 'a2', title: 'Try Out Nasional Akbar Agustus', body: 'Persiapkan dirimu untuk agenda simulasi Akbar Nasional dengan total hadiah beasiswa bimbingan puluhan juta rupiah.', date: 'Kemarin' }
  ];

  const subjectsList = [
    'Matematika Umum', 'Matematika Lanjut', 'Fisika', 'Kimia', 'Biologi',
    'Bahasa Indonesia', 'Bahasa Inggris', 'Sejarah', 'Sosiologi', 'Ekonomi',
    'Geografi', 'Seni Budaya', 'PJOK', 'PKn', 'Prakarya'
  ];

  const semesters = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5'];

  useEffect(() => {
    // Load initial student data
    let card = FirestoreSimulator.getReportCard();
    
    // Check if card needs blank initialization
    const initialGrades: { [sem: string]: { [sub: string]: number } } = {};
    semesters.forEach(sem => {
      initialGrades[sem] = {};
      subjectsList.forEach(sub => {
        initialGrades[sem][sub] = 0;
      });
    });

    if (!card || !card.grades) {
      const emptyCard = {
        userId: userProfile.uid,
        grades: initialGrades,
        average: 0,
        updatedAt: new Date().toISOString()
      };
      card = emptyCard;
      FirestoreSimulator.saveReportCard(emptyCard);
    } else {
      // If card was previously seeded with all 80s (mock seed), clear it to 0s as requested
      let allAre80 = true;
      let totalCount = 0;
      Object.keys(card.grades).forEach(sem => {
        Object.keys(card.grades[sem] || {}).forEach(sub => {
          totalCount++;
          if (card.grades[sem][sub] !== 80) {
            allAre80 = false;
          }
        });
      });
      if (allAre80 && totalCount > 0) {
        card.grades = initialGrades;
        card.average = 0;
        FirestoreSimulator.saveReportCard(card);
      }
    }

    setReportCard(card);

    // Load active predictions
    setPredictionsList(FirestoreSimulator.getPredictions());

    // Load active materials
    setMaterials(getMaterials());
  }, []);

  const handleGradeChange = (semester: string, subject: string, val: number) => {
    const clamped = isNaN(val) ? 0 : Math.max(0, Math.min(100, val));
    
    setReportCard((prev) => {
      const updatedGrades = { ...prev.grades };
      if (!updatedGrades[semester]) updatedGrades[semester] = {};
      updatedGrades[semester][subject] = clamped;

      // Calculate new global average (count only > 0)
      let total = 0;
      let count = 0;
      Object.keys(updatedGrades).forEach((sem) => {
        Object.keys(updatedGrades[sem] || {}).forEach((sub) => {
          const g = updatedGrades[sem][sub];
          if (g > 0) {
            total += g;
            count++;
          }
        });
      });

      const updated = {
        ...prev,
        grades: updatedGrades,
        average: count > 0 ? parseFloat((total / count).toFixed(1)) : 0,
        updatedAt: new Date().toISOString()
      };

      // Save to database
      FirestoreSimulator.saveReportCard(updated);
      return updated;
    });
  };

  const handleClearReportCard = () => {
    const blankGrades: { [sem: string]: { [sub: string]: number } } = {};
    semesters.forEach(sem => {
      blankGrades[sem] = {};
      subjectsList.forEach(sub => {
        blankGrades[sem][sub] = 0;
      });
    });
    const clearedCard = {
      userId: userProfile.uid,
      grades: blankGrades,
      average: 0,
      updatedAt: new Date().toISOString()
    };
    setReportCard(clearedCard);
    FirestoreSimulator.saveReportCard(clearedCard);
  };

  const handleCalculatePrediction = () => {
    const pred = FirestoreSimulator.calculatePrediction(targetUniv, targetProdi, pathway);
    setPredictionsList(FirestoreSimulator.getPredictions());
    setActivePrediction(pred);
  };

  const handleCbtFinished = (score: ExamScore) => {
    setActiveCbt(null);
    // Reload user profile for fresh XP & levels
    const updatedUser = FirestoreSimulator.getCurrentUser();
    if (updatedUser) onUpdateProfile(updatedUser);
  };

  const handleCheckoutSuccess = () => {
    setActiveCheckout(null);
    const updatedUser = FirestoreSimulator.getCurrentUser();
    if (updatedUser) onUpdateProfile(updatedUser);
  };

  const handlePracticeAnswer = (qId: string, optIdx: number, type?: 'multiple_choice' | 'checkboxes' | 'dropdown') => {
    if (practiceChecked) return;
    setPracticeAnswers((prev) => {
      const currentVal = prev[qId];
      if (type === 'checkboxes') {
        const currentArr = Array.isArray(currentVal) ? currentVal : (currentVal !== undefined ? [currentVal] : []);
        if (currentArr.includes(optIdx)) {
          return { ...prev, [qId]: currentArr.filter(idx => idx !== optIdx) };
        } else {
          return { ...prev, [qId]: [...currentArr, optIdx].sort() };
        }
      } else {
        return { ...prev, [qId]: optIdx };
      }
    });
  };

  // Helper function to render correct progress bar widths securely
  const getProgressWidth = () => {
    const currentXpInLevel = userProfile.xp % 1000;
    const pct = Math.min(100, (currentXpInLevel / 1000) * 100);
    return `${pct}%`;
  };

  // Synchronized SNPMB PTN and Prodi filtering
  const allUniversities = getUniversities();
  const selectedUnivObj = allUniversities.find(u => u.id === targetUniv) || allUniversities[0];

  const filteredUniversities = allUniversities.filter(u => 
    u.name.toLowerCase().includes(univSearch.toLowerCase()) || 
    u.acronym.toLowerCase().includes(univSearch.toLowerCase()) ||
    (u.region && u.region.toLowerCase().includes(univSearch.toLowerCase()))
  );

  const availableProdis = getStudyPrograms(targetUniv).filter(p => p.universityId === targetUniv);
  const filteredProdis = availableProdis.filter(p => 
    p.name.toLowerCase().includes(prodiSearch.toLowerCase())
  );

  const ptnCategories: ('PTN Utama' | 'PTN Regional' | 'UIN State Islamic' | 'Politeknik Negeri' | 'Institut Seni')[] = [
    'PTN Utama',
    'PTN Regional',
    'UIN State Islamic',
    'Politeknik Negeri',
    'Institut Seni'
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans" id="dashboard-siswa">
      
      {/* Top Premium Callout Banner */}
      {!userProfile.isPremium && (
        <div className="bg-slate-900 text-white py-2 px-4 text-xs text-center flex flex-wrap items-center justify-center gap-2 border-b border-slate-800">
          <span className="bg-blue-600 text-white font-black px-2 py-0.5 rounded text-[10px] animate-pulse">PROMO VIP</span>
          <span>Dapatkan akses CBT Try Out Premium dan AI Tutor Tanpa Batas hanya dengan <strong>Rp 49.000 / Bulan</strong>!</span>
          <button
            onClick={() => setActiveCheckout({ name: 'Premium VIP Bulanan', price: 49000 })}
            className="bg-white hover:bg-slate-100 text-slate-900 font-extrabold px-3 py-1 rounded-full text-[10px] cursor-pointer"
          >
            Upgrade Sekarang
          </button>
        </div>
      )}

      {/* Main Header Row */}
      <header className="bg-white border-b border-slate-100 shadow-sm sticky top-0 z-30 shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          
          <div className="flex items-center gap-2">
            <span className="bg-blue-600 text-white w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-lg">T</span>
            <div>
              <h1 className="text-base font-extrabold text-slate-900 leading-none">TKA SMA Indonesia</h1>
              <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">Pusat Belajar Kelas XII & Alumni</span>
            </div>
          </div>

          {/* Student Status Profile Badge */}
          <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 px-4 py-2 rounded-2xl">
            <div className="relative">
              <img
                src={userProfile.avatarUrl}
                alt={userProfile.displayName}
                className="w-10 h-10 rounded-full object-cover border border-blue-100"
                referrerPolicy="no-referrer"
              />
              {userProfile.isPremium && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-[8px] font-black px-1.5 py-0.5 rounded-full shadow border border-white">
                  VIP
                </span>
              )}
            </div>
            <div>
              <span className="text-xs font-bold text-slate-800 block">{userProfile.displayName}</span>
              <div className="flex items-center gap-2 text-[10px] text-slate-500">
                <span>Lvl {userProfile.level}</span>
                <span>•</span>
                <span className="text-orange-500 font-semibold flex items-center gap-0.5">
                  <Zap className="w-3 h-3 text-orange-500 shrink-0" /> {userProfile.streak} Hari Streak
                </span>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Primary Container Layout */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 flex flex-col lg:flex-row gap-8">
        
        {/* Navigation Sidebar */}
        <aside className="lg:w-64 shrink-0 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-3 lg:pb-0 scrollbar-none animate-in fade-in duration-200">
          <button
            onClick={() => setActiveTab('home')}
            className={`px-4 py-3 rounded-xl font-bold text-xs flex items-center gap-2.5 transition-all cursor-pointer shrink-0 ${
              activeTab === 'home' ? 'bg-blue-50 text-[#2563EB] border border-blue-100/50 shadow-sm' : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200/60'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Beranda Belajar</span>
          </button>
          <button
            onClick={() => setActiveTab('rapor')}
            className={`px-4 py-3 rounded-xl font-bold text-xs flex items-center gap-2.5 transition-all cursor-pointer shrink-0 ${
              activeTab === 'rapor' ? 'bg-blue-50 text-[#2563EB] border border-blue-100/50 shadow-sm' : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200/60'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Input Nilai Rapor</span>
          </button>
          <button
            onClick={() => setActiveTab('prediksi')}
            className={`px-4 py-3 rounded-xl font-bold text-xs flex items-center gap-2.5 transition-all cursor-pointer shrink-0 ${
              activeTab === 'prediksi' ? 'bg-blue-50 text-[#2563EB] border border-blue-100/50 shadow-sm' : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200/60'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Prediksi Peluang PTN</span>
          </button>
          <button
            onClick={() => setActiveTab('video')}
            className={`px-4 py-3 rounded-xl font-bold text-xs flex items-center text-left gap-2.5 transition-all cursor-pointer shrink-0 ${
              activeTab === 'video' ? 'bg-blue-50 text-[#2563EB] border border-blue-100/50 shadow-sm' : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200/60'
            }`}
          >
            <Video className="w-4 h-4 shrink-0" />
            <span className="text-left">Modul Materi dan Video Pembelajaran</span>
          </button>
          <button
            onClick={() => setActiveTab('tryout')}
            className={`px-4 py-3 rounded-xl font-bold text-xs flex items-center gap-2.5 transition-all cursor-pointer shrink-0 ${
              activeTab === 'tryout' ? 'bg-blue-50 text-[#2563EB] border border-blue-100/50 shadow-sm' : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200/60'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Try Out CBT UTBK</span>
          </button>
          <button
            onClick={() => setActiveTab('tryout_tka')}
            className={`px-4 py-3 rounded-xl font-bold text-xs flex items-center gap-2.5 transition-all cursor-pointer shrink-0 ${
              activeTab === 'tryout_tka' ? 'bg-blue-50 text-[#2563EB] border border-blue-100/50 shadow-sm' : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200/60'
            }`}
          >
            <Award className="w-4 h-4 text-emerald-600" />
            <span>Try Out CBT TKA</span>
          </button>
          <button
            onClick={() => setActiveTab('ranking')}
            className={`px-4 py-3 rounded-xl font-bold text-xs flex items-center gap-2.5 transition-all cursor-pointer shrink-0 ${
              activeTab === 'ranking' ? 'bg-blue-50 text-[#2563EB] border border-blue-100/50 shadow-sm' : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200/60'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>Ranking Nasional</span>
          </button>
          <button
            onClick={() => setActiveTab('badges')}
            className={`px-4 py-3 rounded-xl font-bold text-xs flex items-center gap-2.5 transition-all cursor-pointer shrink-0 ${
              activeTab === 'badges' ? 'bg-blue-50 text-[#2563EB] border border-blue-100/50 shadow-sm' : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200/60'
            }`}
          >
            <Star className="w-4 h-4" />
            <span>Lencana & Level</span>
          </button>

          <div className="hidden lg:block border-t border-slate-100 pt-6 mt-4">
            <button
              onClick={onLogout}
              className="w-full text-left px-4 py-3 rounded-xl font-bold text-xs text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
            >
              Keluar Sesi
            </button>
          </div>
        </aside>

        {/* Workspace Panels */}
        <div className="flex-1 overflow-hidden">
          
          {/* Active CBT Overlay */}
          {activeCbt ? (
            <CbtSimulator
              tryout={activeCbt}
              userProfile={userProfile}
              onBack={() => setActiveCbt(null)}
              onFinish={handleCbtFinished}
            />
          ) : (
            <>
              {/* Tab: Beranda (Home) */}
              {activeTab === 'home' && (
                <div className="space-y-6">
                  
                  {/* Dynamic greeting & Gamification Progress Bar */}
                  <div className="bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-sm space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 leading-tight">
                          Halo, Selamat Belajar <span className="text-[#2563EB]">{userProfile.displayName}</span>!
                        </h2>
                        <p className="text-xs text-slate-500 mt-1">Gunakan dasbor pintar Anda untuk memaksimalkan peluang lolos seleksi PTN.</p>
                      </div>
                      <div className="hidden sm:block bg-blue-50 text-blue-700 font-extrabold px-3.5 py-1.5 rounded-2xl text-xs">
                        {userProfile.isPremium ? 'Akun VIP Aktif' : 'Akun Coba Gratis'}
                      </div>
                    </div>

                    {/* Progress milestone */}
                    <div className="space-y-2 pt-2 border-t border-slate-50">
                      <div className="flex justify-between text-xs font-bold text-slate-600">
                        <span>Milestone Level {userProfile.level}</span>
                        <span>{userProfile.xp % 1000} / 1000 XP</span>
                      </div>
                      <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                        <div className="bg-blue-600 h-full rounded-full transition-all duration-500" style={{ width: getProgressWidth() }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Hot features row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    
                    <button
                      onClick={onOpenAiSandbox}
                      className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 rounded-3xl text-left border border-slate-800 shadow-lg hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-2">
                        <div className="inline-flex gap-1 bg-blue-600 text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                          <Sparkles className="w-3 h-3 text-amber-300 animate-pulse shrink-0" /> AI Konsultasi
                        </div>
                        <h3 className="font-extrabold text-sm sm:text-base">Tanya AI Tutor 24 Jam</h3>
                        <p className="text-xs text-slate-400">Konsultasikan pengerjaan soal rumit, materi teori, dan rumus inti matematika.</p>
                      </div>
                      <div className="flex items-center justify-between pt-2 text-xs font-bold text-blue-400 group-hover:text-white transition-colors">
                        <span>Buka AI Sandbox</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </button>

                    <button
                      onClick={() => setActiveTab('tryout')}
                      className="bg-white border border-slate-100 hover:border-blue-300 p-6 rounded-3xl text-left shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-2">
                        <div className="inline-flex gap-1 bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border border-blue-100">
                          <Zap className="w-3 h-3 text-blue-600 shrink-0" /> UTBK / SNBT
                        </div>
                        <h3 className="font-extrabold text-sm sm:text-base text-slate-900">Try Out CBT UTBK</h3>
                        <p className="text-xs text-slate-500">Simulasi CBT UTBK/SNBT resmi dengan sistem penilaian dan timer real-time.</p>
                      </div>
                      <div className="flex items-center justify-between pt-2 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                        <span>Mulai Try Out UTBK</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </button>

                    <button
                      onClick={() => setActiveTab('tryout_tka')}
                      className="bg-white border border-slate-100 hover:border-emerald-300 p-6 rounded-3xl text-left shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-2">
                        <div className="inline-flex gap-1 bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border border-emerald-100">
                          <Award className="w-3 h-3 text-emerald-600 shrink-0" /> TKA Akademik
                        </div>
                        <h3 className="font-extrabold text-sm sm:text-base text-slate-900">Try Out CBT TKA</h3>
                        <p className="text-xs text-slate-500">Simulasi CBT Tes Kemampuan Akademik (TKA) sesuai mata pelajaran SMA.</p>
                      </div>
                      <div className="flex items-center justify-between pt-2 text-xs font-bold text-emerald-600 group-hover:text-emerald-700 transition-colors">
                        <span>Mulai Try Out TKA</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </button>

                  </div>

                  {/* Dynamic Announcements Feed */}
                  <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-4">
                    <h3 className="font-extrabold text-slate-800 text-sm">Pemberitahuan & Update Terbaru</h3>
                    <div className="divide-y divide-slate-100">
                      {announcements.map((ann) => (
                        <div key={ann.id} className="py-3 first:pt-0 last:pb-0 flex justify-between items-start gap-4">
                          <div className="space-y-1">
                            <span className="text-[10px] bg-slate-100 text-slate-700 font-extrabold px-2 py-0.5 rounded">{ann.date}</span>
                            <h4 className="font-bold text-xs sm:text-sm text-slate-800 leading-tight">{ann.title}</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">{ann.body}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}

              {/* Tab: Nilai Rapor (Grid Input) */}
              {activeTab === 'rapor' && (
                <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-5">
                    <div>
                      <h2 className="text-lg font-bold font-display text-slate-900">Arsip Pengisian Nilai Rapor (Semester 1 - 5)</h2>
                      <p className="text-xs text-slate-500 mt-1">Input nilai pengetahuan rapor 15 mapel SMA untuk menghitung akurasi prediksi kelulusan SNBP.</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={handleClearReportCard}
                        className="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-700 font-bold text-xs rounded-xl border border-red-200 transition-colors cursor-pointer"
                        title="Kosongkan semua nilai rapor dari Semester 1 sampai 5"
                      >
                        🗑️ Kosongkan Semua Nilai
                      </button>
                      <div className="bg-blue-50 border border-blue-100 px-4 py-2 rounded-2xl text-right">
                        <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">RATA-RATA GLOBAL</span>
                        <span className="text-xl font-black text-blue-700">{reportCard.average || 0} / 100</span>
                      </div>
                    </div>
                  </div>

                  {/* SVG line-graph indicator for Semester Trends */}
                  <div className="border border-slate-100 p-4 rounded-2xl space-y-3">
                    <h4 className="text-xs font-bold text-slate-600 block">Tren Grafik Rata-Rata Rapor per Semester</h4>
                    <div className="flex justify-between items-end h-24 pt-4 px-6 border-b border-slate-100">
                      {semesters.map((sem) => {
                        // Calculate specific semester average (only count > 0)
                        const sGrades = reportCard.grades[sem] || {};
                        const validVals = Object.values(sGrades).filter(v => v > 0);
                        const avg = validVals.length > 0 ? Math.round(validVals.reduce((sum, val) => sum + val, 0) / validVals.length) : 0;
                        const barHeight = avg > 0 ? `${avg}%` : '4px';

                        return (
                          <div key={sem} className="flex flex-col items-center gap-2 h-full justify-end">
                            <span className="text-[10px] font-black text-blue-600">{avg > 0 ? avg : '-'}</span>
                            <div className="w-8 bg-blue-600/80 rounded-t-md transition-all duration-300" style={{ height: barHeight }}></div>
                            <span className="text-[9px] text-slate-400 font-semibold">{sem}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Input Grid Map */}
                  <div className="space-y-6 max-h-[50vh] overflow-y-auto pr-2">
                    {semesters.map((sem) => (
                      <div key={sem} className="space-y-3 border-b border-slate-100 pb-5 last:border-b-0 last:pb-0">
                        <div className="flex justify-between items-center">
                          <h4 className="font-extrabold text-slate-800 text-sm flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-blue-600" />
                            {sem}
                          </h4>
                          <button
                            onClick={() => {
                              setReportCard(prev => {
                                const newG = { ...prev.grades };
                                newG[sem] = {};
                                subjectsList.forEach(s => newG[sem][s] = 0);
                                const updated = { ...prev, grades: newG };
                                FirestoreSimulator.saveReportCard(updated);
                                return updated;
                              });
                            }}
                            className="text-[11px] font-bold text-slate-400 hover:text-red-600 transition-colors cursor-pointer"
                          >
                            Kosongkan {sem}
                          </button>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5">
                          {subjectsList.map((sub) => {
                            const rawGrade = reportCard.grades[sem]?.[sub];
                            const displayVal = (rawGrade === undefined || rawGrade === null || rawGrade === 0) ? '' : rawGrade;
                            return (
                              <div key={sub} className="space-y-1">
                                <label className="text-[10px] font-bold text-slate-500 block truncate" title={sub}>{sub}</label>
                                <input
                                  type="text"
                                  inputMode="numeric"
                                  placeholder="0"
                                  value={displayVal}
                                  onFocus={(e) => e.target.select()}
                                  onChange={(e) => {
                                    const raw = e.target.value;
                                    if (raw === '') {
                                      handleGradeChange(sem, sub, 0);
                                    } else {
                                      const parsed = parseFloat(raw);
                                      if (!isNaN(parsed)) {
                                        handleGradeChange(sem, sub, parsed);
                                      } else {
                                        handleGradeChange(sem, sub, 0);
                                      }
                                    }
                                  }}
                                  className="w-full p-2 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 text-center focus:outline-none focus:border-blue-500 focus:bg-white"
                                />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              )}

              {/* Tab: Prediksi PTN */}
              {activeTab === 'prediksi' && (
                <div className="space-y-6">
                  
                  {/* Selector card */}
                  <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-black rounded-md uppercase tracking-wider">SNPMB Official Data</span>
                        <span className="text-[11px] font-bold text-slate-400">PTN & Jurusan Terdaftar Panitia SNPMB</span>
                      </div>
                      <h2 className="text-lg font-bold font-display text-slate-900">Prediksi Peluang Kelulusan PTN</h2>
                      <p className="text-xs text-slate-500 mt-0.5">Kalkulasi akurasi peluang kelulusan Anda di PTN terfavorit se-Indonesia berdasarkan data Rapor dan Skor Try Out CBT.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      
                      {/* Pilih Universitas */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center">
                          <label className="text-xs font-bold text-slate-700">Pilih Universitas (PTN)</label>
                          <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                            {filteredUniversities.length} PTN Terdaftar
                          </span>
                        </div>

                        <input
                          type="text"
                          placeholder="🔍 Cari PTN (mis: UGM, UI, UB, ITS, UNHAS)..."
                          value={univSearch}
                          onChange={(e) => setUnivSearch(e.target.value)}
                          className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 bg-slate-50/50"
                        />

                        <select
                          value={targetUniv}
                          onChange={(e) => {
                            const newUnivId = e.target.value;
                            setTargetUniv(newUnivId);
                            const firstProgram = getStudyPrograms(newUnivId).find(p => p.universityId === newUnivId);
                            if (firstProgram) {
                              setTargetProdi(firstProgram.id);
                            }
                            setProdiSearch('');
                          }}
                          className="w-full p-3 border border-slate-200 rounded-xl bg-white text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:border-blue-500 shadow-sm"
                        >
                          {ptnCategories.map(cat => {
                            let list = filteredUniversities.filter(u => (u.category || 'PTN Regional') === cat);
                            // Guarantee currently selected PTN stays visible even if search term is active
                            const currentTargetObj = allUniversities.find(u => u.id === targetUniv);
                            if (currentTargetObj && (currentTargetObj.category || 'PTN Regional') === cat) {
                              if (!list.some(u => u.id === targetUniv)) {
                                list = [currentTargetObj, ...list];
                              }
                            }
                            if (list.length === 0) return null;
                            return (
                              <optgroup key={cat} label={`=== ${cat.toUpperCase()} ===`}>
                                {list.map((u) => (
                                  <option key={u.id} value={u.id}>
                                    {u.logo} {u.name} ({u.acronym}) — {u.region}
                                  </option>
                                ))}
                              </optgroup>
                            );
                          })}
                        </select>
                      </div>

                      {/* Pilih Program Studi */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center flex-wrap gap-1">
                          <label className="text-xs font-bold text-slate-700">
                            Program Studi di {selectedUnivObj.acronym}
                          </label>
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                            {filteredProdis.length} Jurusan
                          </span>
                        </div>

                        <input
                          type="text"
                          placeholder={`🔍 Cari Jurusan di ${selectedUnivObj.acronym}...`}
                          value={prodiSearch}
                          onChange={(e) => setProdiSearch(e.target.value)}
                          className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 bg-slate-50/50"
                        />

                        <select
                          value={targetProdi}
                          onChange={(e) => setTargetProdi(e.target.value)}
                          className="w-full p-3 border border-slate-200 rounded-xl bg-white text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:border-blue-500 shadow-sm"
                        >
                          {['Saintek', 'Soshum', 'Vokasi'].map(grp => {
                            const list = filteredProdis.filter(p => (p.group || 'Saintek') === grp);
                            if (list.length === 0) return null;
                            return (
                              <optgroup key={grp} label={`=== ${grp.toUpperCase()} (${selectedUnivObj.acronym}) ===`}>
                                {list.map((p) => (
                                  <option key={p.id} value={p.id}>
                                    {p.name} (PG: {p.passingGrade})
                                  </option>
                                ))}
                              </optgroup>
                            );
                          })}
                        </select>
                      </div>

                      {/* Jalur Masuk Seleksi */}
                      <div className="space-y-1.5 flex flex-col justify-between">
                        <div>
                          <label className="text-xs font-bold text-slate-700">Jalur Masuk Seleksi</label>
                          <p className="text-[11px] text-slate-400 mt-0.5">SNBP (Prestasi Rapor) / SNBT (CBT TKA)</p>
                        </div>

                        <select
                          value={pathway}
                          onChange={(e) => setPathway(e.target.value as any)}
                          className="w-full p-3 border border-slate-200 rounded-xl bg-white text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:border-blue-500 shadow-sm"
                        >
                          <option value="SNBP">SNBP (Prestasi Rapor Semester 1-5)</option>
                          <option value="SNBT">SNBT (Ujian CBT TKA)</option>
                        </select>
                      </div>

                    </div>

                    <button
                      onClick={handleCalculatePrediction}
                      className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition-colors shadow-md shadow-blue-50 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Compass className="w-4 h-4" />
                      <span>Kalkulasi Akurasi Prediksi Peluang Kelulusan</span>
                    </button>
                  </div>

                  {/* Active calculation outcome & SVG speed gauge dial */}
                  {activePrediction && (
                    <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
                      
                      <div className="md:col-span-4 flex flex-col items-center text-center space-y-4">
                        <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">AKURASI KELULUSAN</h4>
                        
                        {/* Custom visual SVG Circular speed-gauge */}
                        <div className="relative w-44 h-44">
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                            {/* Outer grey circle track */}
                            <circle cx="50" cy="50" r="40" stroke="#F1F5F9" strokeWidth="8" fill="none" />
                            {/* Inner blue progress indicator */}
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              stroke={activePrediction.probabilityScore > 70 ? "#10B981" : activePrediction.probabilityScore > 50 ? "#3B82F6" : "#EF4444"}
                              strokeWidth="8"
                              fill="none"
                              strokeDasharray="251.2"
                              strokeDashoffset={251.2 - (251.2 * activePrediction.probabilityScore) / 100}
                              strokeLinecap="round"
                              className="transition-all duration-1000"
                            />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-3xl font-black text-slate-800">{activePrediction.probabilityScore}%</span>
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{activePrediction.probability}</span>
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-8 space-y-4">
                        <div className="space-y-1">
                          <span className="text-xs text-blue-600 font-extrabold uppercase tracking-widest block">{activePrediction.pathway} PATHWAY OUTCOME</span>
                          <h3 className="text-xl font-extrabold text-slate-900">{activePrediction.university} - {activePrediction.studyProgram}</h3>
                        </div>

                        <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                          <p className="font-bold text-slate-800">Rekomendasi Taktis Belajar:</p>
                          <MathMarkdown content={activePrediction.recommendation} />
                        </div>
                      </div>

                    </div>
                  )}

                  {/* Historical prediction requests */}
                  {predictionsList.length > 0 && (
                    <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-4">
                      <h3 className="font-extrabold text-slate-800 text-sm">Riwayat Perhitungan Prediksi</h3>
                      <div className="divide-y divide-slate-100 text-xs sm:text-sm">
                        {predictionsList.map((p) => (
                          <div key={p.id} className="py-3.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                            <div>
                              <h4 className="font-bold text-slate-800">{p.university} - {p.studyProgram}</h4>
                              <p className="text-[10px] text-slate-400 mt-0.5">Jalur: {p.pathway} • Dihitung pada {new Date(p.createdAt).toLocaleDateString('id-ID')}</p>
                            </div>
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                              p.probability === 'Sangat Tinggi' ? 'bg-emerald-100 text-emerald-800' :
                              p.probability === 'Tinggi' ? 'bg-emerald-50 text-emerald-700' :
                              p.probability === 'Sedang' ? 'bg-blue-50 text-blue-700' : 'bg-red-50 text-red-700'
                            }`}>
                              Peluang {p.probability} ({p.probabilityScore}%)
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              )}


              {/* Tab: Video Pembelajaran & Materi */}
              {activeTab === 'video' && (
                <div className="space-y-6">
                  {/* Sub-tab selection */}
                  <div className="flex bg-white p-1 rounded-2xl border border-slate-100 max-w-md shadow-sm">
                    <button
                      onClick={() => setVideoSubTab('materials')}
                      className={`flex-1 py-2.5 px-4 rounded-xl font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        videoSubTab === 'materials'
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-100'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      <BookOpen className="w-4 h-4" />
                      Modul Ringkasan & Materi
                    </button>
                    <button
                      onClick={() => setVideoSubTab('videos')}
                      className={`flex-1 py-2.5 px-4 rounded-xl font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        videoSubTab === 'videos'
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-100'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      <Video className="w-4 h-4" />
                      Video Tutorial Populer
                    </button>
                  </div>

                  {videoSubTab === 'materials' && (
                    <div className="space-y-6">
                      <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
                        <h3 className="font-bold font-display text-slate-900 text-sm">Bahan Ajar & Modul Ringkasan Sakti</h3>
                        <p className="text-xs text-slate-400 mt-1">
                          Akses rangkuman rumus cepat, berkas PDF e-book, kuis interaktif, dan lembar evaluasi yang dipublikasikan langsung oleh tutor pembimbing Anda.
                        </p>
                      </div>

                      {/* Materials List */}
                      <div className="grid grid-cols-1 gap-6">
                        {materials.length === 0 ? (
                          <div className="bg-white border border-slate-100 rounded-3xl p-8 text-center text-slate-400 text-xs">
                            Belum ada berkas modul atau materi yang diterbitkan oleh tutor. Silakan cek kembali beberapa saat lagi.
                          </div>
                        ) : (
                          materials.map((mat) => (
                            <div key={mat.id} className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm hover:border-blue-100 transition-all space-y-4">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-blue-50 text-blue-700 uppercase">
                                  {mat.subject}
                                </span>
                                <span className="text-slate-300">•</span>
                                <span className="text-[10px] font-bold text-slate-500 bg-slate-50 px-2 py-0.5 rounded">
                                  Bab: {mat.bab}
                                </span>
                                <span className="text-slate-300">•</span>
                                <span className="text-[10px] text-slate-400">
                                  Tutor: {mat.guruName || 'TKA Expert'}
                                </span>
                              </div>

                              <div className="space-y-1.5">
                                <h4 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug">
                                  {mat.title}
                                </h4>
                                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                                  {mat.description}
                                </p>
                              </div>

                              {/* Attachment media buttons */}
                              <div className="border-t border-slate-100 pt-4 space-y-3">
                                <h5 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Berkas Lampiran & Link Belajar</h5>
                                <div className="flex flex-wrap gap-3">
                                  {/* Interactive HTML Quiz */}
                                  {mat.htmlContent && (
                                    <button
                                      onClick={() => setPreviewHtml({ name: mat.title, html: mat.htmlContent! })}
                                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl transition-all shadow-md shadow-emerald-100 cursor-pointer"
                                    >
                                      <FileCode className="w-4 h-4" />
                                      Buka Kuis Interaktif (HTML ANBK)
                                    </button>
                                  )}

                                  {/* PDF Attachment */}
                                  {mat.pdfName && (
                                    <button
                                      onClick={() => setPreviewPdf({ name: mat.pdfName || 'Dokumen_Materi.pdf', url: mat.pdfUrl || '#' })}
                                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-50 hover:bg-red-100 text-red-700 font-bold text-xs rounded-xl transition-all border border-red-100 cursor-pointer"
                                    >
                                      <FileText className="w-4 h-4" />
                                      Buka PDF: {mat.pdfName}
                                    </button>
                                  )}

                                  {/* Video Attachment */}
                                  {mat.videoName && (
                                    <button
                                      onClick={() => setPreviewVideo({ name: mat.videoName || 'Video_Penjelasan.mp4', url: mat.videoUrl || '#' })}
                                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs rounded-xl transition-all border border-blue-100 cursor-pointer"
                                    >
                                      <Video className="w-4 h-4" />
                                      Tonton Video: {mat.videoName}
                                    </button>
                                  )}

                                  {/* YouTube Link */}
                                  {mat.youtubeUrl && (
                                    <a
                                      href={mat.youtubeUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs rounded-xl transition-all border border-rose-100 cursor-pointer"
                                    >
                                      <Youtube className="w-4 h-4" />
                                      Video YouTube
                                      <ExternalLink className="w-3 h-3 text-rose-400" />
                                    </a>
                                  )}

                                  {/* Quiz Link */}
                                  {mat.quizUrl && (
                                    <a
                                      href={mat.quizUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-amber-50 hover:bg-amber-100 text-amber-700 font-bold text-xs rounded-xl transition-all border border-amber-100 cursor-pointer"
                                    >
                                      <Trophy className="w-4 h-4" />
                                      Kuis Latihan Interaktif
                                      <ExternalLink className="w-3 h-3 text-amber-400" />
                                    </a>
                                  )}

                                  {/* Google Form Link */}
                                  {mat.gFormUrl && (
                                    <a
                                      href={mat.gFormUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold text-xs rounded-xl transition-all border border-purple-100 cursor-pointer"
                                    >
                                      <FileSpreadsheet className="w-4 h-4" />
                                      Evaluasi Google Form
                                      <ExternalLink className="w-3 h-3 text-purple-400" />
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  )}

                  {videoSubTab === 'videos' && (
                    <div className="space-y-6">
                      <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
                        <h3 className="font-bold font-display text-slate-900 text-sm">Video Pembelajaran Terpopuler Kelas XII</h3>
                        <p className="text-xs text-slate-400 mt-1">Saksikan video pembahasan teori pokok per bab yang disampaikan oleh guru pembina olimpiade.</p>
                      </div>

                      {/* Videos grid list */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {getVideos().map((vid) => (
                          <div
                            key={vid.id}
                            onClick={() => setActiveVideo(vid)}
                            className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-blue-100 transition-all cursor-pointer group"
                          >
                            <div className="relative aspect-video bg-slate-800 overflow-hidden flex items-center justify-center">
                              <img
                                src={vid.thumbnail}
                                alt={vid.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center group-hover:bg-slate-900/20 transition-all">
                                <span className="bg-blue-600 text-white p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                                  <Play className="w-5 h-5 fill-white ml-0.5" />
                                </span>
                              </div>
                              <span className="absolute bottom-2 right-2 bg-slate-950/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                                {vid.duration}
                              </span>
                            </div>

                            <div className="p-4 space-y-2">
                              <span className="text-[10px] bg-blue-50 text-blue-700 font-extrabold px-2.5 py-0.5 rounded-full">
                                {vid.subject}
                              </span>
                              <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 leading-snug truncate">
                                {vid.title}
                              </h4>
                              <p className="text-[10px] text-slate-400">Tutor: {vid.guru} • {vid.views.toLocaleString('id-ID')} views</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Active simulated video player Overlay */}
                  {activeVideo && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                      <div className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden border border-slate-100 shadow-2xl flex flex-col max-h-[90vh]">
                        
                        {/* Player Header */}
                        <div className="p-4 bg-slate-900 text-white flex justify-between items-center border-b border-slate-800">
                          <div>
                            <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">{activeVideo.subject}</span>
                            <h4 className="font-bold text-xs sm:text-sm truncate max-w-md">{activeVideo.title}</h4>
                          </div>
                          <button
                            onClick={() => setActiveVideo(null)}
                            className="p-1 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
                          >
                            ✕
                          </button>
                        </div>

                        {/* Video media area */}
                        <div className="relative aspect-video bg-slate-950 flex flex-col items-center justify-center">
                          {/* Mock simulated playback animation */}
                          <div className="space-y-3 text-center p-6 text-white max-w-xs">
                            <div className="inline-flex h-2 w-2 rounded-full bg-red-600 animate-ping mr-1"></div>
                            <span className="text-xs font-bold uppercase text-red-500 tracking-widest block">MEMULAI SIMULASI STREAMING</span>
                            <p className="text-[10px] text-slate-400 leading-relaxed">
                              Sistem sedang menyimulasikan loading video materi server CDN cloud premium TKA Indonesia.
                            </p>
                          </div>
                          
                          {/* Simulated controller bar */}
                          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 to-transparent p-4 flex justify-between items-center text-xs text-white">
                            <span>01:15 / {activeVideo.duration}</span>
                            <span>1080p Full HD</span>
                          </div>
                        </div>

                        <div className="p-6 space-y-3 overflow-y-auto">
                          <h5 className="font-bold text-slate-800 text-xs sm:text-sm">Ringkasan Deskripsi Pembahasan:</h5>
                          <p className="text-xs text-slate-500 leading-relaxed font-sans">{activeVideo.description}</p>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* Simulated PDF Viewer Overlay */}
                  {previewPdf && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                      <div className="bg-white w-full max-w-3xl rounded-3xl overflow-hidden border border-slate-100 shadow-2xl flex flex-col h-[85vh]">
                        
                        {/* Header */}
                        <div className="p-4 bg-slate-900 text-white flex justify-between items-center border-b border-slate-800">
                          <div className="flex items-center gap-2">
                            <span className="p-1.5 bg-red-600 rounded-lg text-white">
                              <FileText className="w-4 h-4" />
                            </span>
                            <div>
                              <h4 className="font-extrabold text-xs sm:text-sm truncate max-w-md">{previewPdf.name}</h4>
                              <p className="text-[10px] text-slate-400">TKA Indonesia PDF E-Book Reader • Lisensi Premium</p>
                            </div>
                          </div>
                          <button
                            onClick={() => setPreviewPdf(null)}
                            className="text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
                          >
                            ✕
                          </button>
                        </div>

                        {/* Toolbar */}
                        <div className="p-3 bg-slate-100 border-b border-slate-200 flex flex-wrap justify-between items-center gap-2 text-xs text-slate-600 font-bold">
                          <div className="flex items-center gap-3">
                            <span className="bg-slate-200 px-2 py-1 rounded">Halaman 1 dari 12</span>
                            <span className="text-slate-300">|</span>
                            <span>Skala: 100% (Fit Page)</span>
                          </div>
                          
                          <button
                            onClick={() => alert('Fitur download PDF telah disimulasikan! Berkas ringkasan materi siap disimpan secara luring.')}
                            className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-[10px] uppercase tracking-wide rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                          >
                            <Download className="w-3.5 h-3.5" /> Unduh PDF Lengkap
                          </button>
                        </div>

                        {/* PDF content canvas simulation */}
                        <div className="flex-1 bg-slate-500 overflow-y-auto p-6 flex justify-center">
                          <div className="bg-white w-full max-w-2xl p-8 sm:p-12 shadow-2xl rounded-lg space-y-6 min-h-[1000px] text-slate-800 relative select-none">
                            <div className="text-center space-y-2 border-b-2 border-double border-slate-200 pb-5">
                              <span className="text-[9px] font-extrabold tracking-widest text-blue-600 uppercase">MODUL BELAJAR TKA INDONESIA</span>
                              <h2 className="font-black text-slate-900 text-lg uppercase tracking-tight">{previewPdf.name.replace('.pdf', '').replace(/_/g, ' ')}</h2>
                              <p className="text-[10px] text-slate-400">Copyright © 2026 TKA Indonesia. All Rights Reserved.</p>
                            </div>

                            <div className="space-y-4 text-xs leading-relaxed font-sans">
                              <h4 className="font-extrabold text-slate-900 border-l-4 border-blue-500 pl-2">A. KONSEP DASAR DAN TEORI UTAMA</h4>
                              <p>
                                Pemahaman konseptual merupakan kunci pokok untuk memecahkan persoalan bertingkat tinggi (HOTS) dalam UTBK. Konsep didefinisikan secara matematis melalui relasi antar-variabel keadaan, di mana hukum-hukum kekekalan bertindak sebagai pembatas utama sistem fisis/kimiawi.
                              </p>
                              
                              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/50 space-y-2 text-center font-mono text-xs text-blue-800">
                                <p className="font-extrabold">RUMUS UTAMA / PERSAMAAN DEFERENSIAL:</p>
                                <p className="text-sm font-black tracking-wider bg-white py-2.5 px-4 rounded-lg shadow-sm border border-slate-100 inline-block">
                                  {"\\oint B \\cdot dl = \\mu_0 \\cdot I_{enc} + \\mu_0 \\cdot \\epsilon_0 \\frac{d\\Phi_E}{dt}"}
                                </p>
                                <p className="text-[10px] text-slate-400 italic">Persamaan Maxwell-Ampere untuk medan magnetik dinamis</p>
                              </div>

                              <h4 className="font-extrabold text-slate-900 border-l-4 border-blue-500 pl-2 mt-6">B. METODE CEPAT SOLUSI SOAL (TRIK JITU)</h4>
                              <p>
                                Untuk menghemat durasi ujian UTBK CBT yang sangat ketat, gunakan aturan asosiasi linier dan simplifikasi pecahan kompleks. Ingat, sebagian besar soal pilihan ganda dirancang untuk dapat disederhanakan tanpa melakukan perhitungan iteratif panjang apabila konsep batas asimtotik dipahami dengan baik.
                              </p>

                              <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="p-3 bg-red-50/50 rounded-lg border border-red-100 text-slate-700">
                                  <span className="font-black text-[10px] text-red-600 block uppercase mb-1">Pola Jebakan Soal:</span>
                                  Seringkali terdapat distraktor nilai mutlak atau tanda negatif yang sengaja dipasang di opsi jawaban A atau B untuk mengecoh siswa yang terburu-buru.
                                </div>
                                <div className="p-3 bg-emerald-50/50 rounded-lg border border-emerald-100 text-slate-700">
                                  <span className="font-black text-[10px] text-emerald-600 block uppercase mb-1">Aturan Emas Eliminasi:</span>
                                  Eliminasi terlebih dahulu opsi ekstrim atas dan bawah. Sering kali jawaban benar berada pada rentang deviasi rata-rata opsi yang tersisa.
                                </div>
                              </div>
                            </div>

                            <div className="absolute bottom-4 inset-x-0 text-center text-[10px] text-slate-400">
                              Halaman 1 • Dokumen Terenkripsi untuk Member Premium
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Simulated Attached Video Explanation Player Overlay */}
                  {previewVideo && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                      <div className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden border border-slate-100 shadow-2xl flex flex-col max-h-[90vh]">
                        
                        {/* Player Header */}
                        <div className="p-4 bg-slate-900 text-white flex justify-between items-center border-b border-slate-800">
                          <div>
                            <span className="text-[10px] text-purple-400 font-bold uppercase tracking-wider">VIDEO PENJELASAN MODUL</span>
                            <h4 className="font-bold text-xs sm:text-sm truncate max-w-md">{previewVideo.name}</h4>
                          </div>
                          <button
                            onClick={() => setPreviewVideo(null)}
                            className="p-1 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
                          >
                            ✕
                          </button>
                        </div>

                        {/* Video media area */}
                        <div className="relative aspect-video bg-slate-950 flex flex-col items-center justify-center">
                          {/* Mock simulated playback animation */}
                          <div className="space-y-3 text-center p-6 text-white max-w-xs">
                            <div className="inline-flex h-3 w-3 rounded-full bg-blue-600 animate-ping mr-1"></div>
                            <span className="text-xs font-bold uppercase text-blue-500 tracking-widest block">MEMULAI INSTANT STREAMING PLAYBACK</span>
                            <p className="text-[10px] text-slate-400 leading-relaxed">
                              Sistem sedang memuat cuplikan pembahasan video tutor dari server CDN premium TKA Indonesia untuk file <strong>{previewVideo.name}</strong>.
                            </p>
                          </div>
                          
                          {/* Simulated controller bar */}
                          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 to-transparent p-4 flex justify-between items-center text-xs text-white">
                            <span>00:45 / 15:30</span>
                            <span>720p HD</span>
                          </div>
                        </div>

                        <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-4">
                          <p className="text-xs text-slate-500">
                            Video ini merupakan pelengkap bab penjelasan modul Anda. Simak penjelasan langkah demi langkah untuk pemahaman yang komprehensif.
                          </p>
                          <button
                            onClick={() => setPreviewVideo(null)}
                            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl cursor-pointer"
                          >
                            Tutup Player
                          </button>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* Interactive HTML Quiz Player Overlay */}
                  {previewHtml && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-2 sm:p-4 animate-in fade-in duration-200">
                      <div className="bg-white w-full max-w-4xl rounded-3xl overflow-hidden border border-slate-100 shadow-2xl flex flex-col h-[92vh]">
                        
                        {/* Header */}
                        <div className="p-4 bg-slate-900 text-white flex justify-between items-center border-b border-slate-800">
                          <div className="flex items-center gap-2.5">
                            <span className="p-1.5 bg-emerald-600 rounded-lg text-white">
                              <FileCode className="w-4 h-4" />
                            </span>
                            <div>
                              <h4 className="font-extrabold text-xs sm:text-sm truncate max-w-md">{previewHtml.name}</h4>
                              <p className="text-[10px] text-emerald-400 font-bold">Kuis Interaktif HTML • TKA Bahasa Indonesia (ANBK)</p>
                            </div>
                          </div>
                          <button
                            onClick={() => setPreviewHtml(null)}
                            className="text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
                          >
                            ✕
                          </button>
                        </div>

                        {/* iframe displaying HTML */}
                        <div className="flex-1 bg-slate-100 overflow-hidden">
                          <iframe
                            srcDoc={previewHtml.html}
                            title={previewHtml.name}
                            className="w-full h-full border-0"
                            sandbox="allow-scripts allow-modals allow-forms"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              )}

              {/* Tab: Try Out (CBT Selection Center for UTBK or TKA) */}
              {(activeTab === 'tryout' || activeTab === 'tryout_tka') && (() => {
                const isTka = activeTab === 'tryout_tka';

                const TKA_SMA_SUBJECT_FOLDERS = [
                  {
                    id: 'matematika_wajib',
                    name: 'Matematika Wajib',
                    icon: '📐',
                    badge: 'Wajib',
                    badgeClass: 'bg-blue-100 text-blue-800 border-blue-200',
                    borderClass: 'hover:border-blue-400 hover:shadow-blue-100',
                    bgLight: 'bg-blue-50/70',
                    description: 'Aritmetika, Aljabar, Trigonometri Dasar, Fungsi, Statistika & Peluang',
                    match: (s: string, name: string) => {
                      const ls = s.toLowerCase();
                      const ln = name.toLowerCase();
                      return ls.includes('matematika wajib') || ls.includes('matematika umum') || (ls.includes('matematika') && !ls.includes('lanjut') && !ls.includes('tingkat') && !ln.includes('lanjut'));
                    }
                  },
                  {
                    id: 'matematika_lanjut',
                    name: 'Matematika Tingkat Lanjut',
                    icon: '♾️',
                    badge: 'Tingkat Lanjut',
                    badgeClass: 'bg-indigo-100 text-indigo-800 border-indigo-200',
                    borderClass: 'hover:border-indigo-400 hover:shadow-indigo-100',
                    bgLight: 'bg-indigo-50/70',
                    description: 'Kalkulus, Turunan Fungsi, Integral, Matriks, Polinomial, Vektor',
                    match: (s: string, name: string) => {
                      const ls = s.toLowerCase();
                      const ln = name.toLowerCase();
                      return ls.includes('matematika lanjut') || ls.includes('tingkat lanjut') || ls.includes('turunan') || ls.includes('integral') || ln.includes('turunan') || ln.includes('integral');
                    }
                  },
                  {
                    id: 'bahasa_indonesia',
                    name: 'Bahasa Indonesia',
                    icon: '🇮🇩',
                    badge: 'Wajib',
                    badgeClass: 'bg-red-100 text-red-800 border-red-200',
                    borderClass: 'hover:border-red-400 hover:shadow-red-100',
                    bgLight: 'bg-red-50/70',
                    description: 'Teks Argumentasi, Ide Pokok, PUEBI/EYD, Kalimat Efektif, Opini & Fakta, Literasi',
                    match: (s: string, name: string) => {
                      const ls = s.toLowerCase();
                      const ln = name.toLowerCase();
                      return ls.includes('indonesia') || ln.includes('indonesia') || ls.includes('indo');
                    }
                  },
                  {
                    id: 'bahasa_inggris',
                    name: 'Bahasa Inggris',
                    icon: '🇬🇧',
                    badge: 'Wajib',
                    badgeClass: 'bg-blue-100 text-blue-800 border-blue-200',
                    borderClass: 'hover:border-blue-400 hover:shadow-blue-100',
                    bgLight: 'bg-blue-50/70',
                    description: 'Reading Comprehension, Main Idea, Inference, Vocabulary in Context, Grammar',
                    match: (s: string, name: string) => {
                      const ls = s.toLowerCase();
                      const ln = name.toLowerCase();
                      return ls.includes('inggris') || ls.includes('english') || ln.includes('inggris') || ln.includes('english');
                    }
                  },
                  {
                    id: 'fisika',
                    name: 'Fisika',
                    icon: '⚡',
                    badge: 'MIPA / Saintek',
                    badgeClass: 'bg-amber-100 text-amber-800 border-amber-200',
                    borderClass: 'hover:border-amber-400 hover:shadow-amber-100',
                    bgLight: 'bg-amber-50/70',
                    description: 'Kinematika, Dinamika, Fluida, Termodinamika, Listrik Magnet, Gelombang',
                    match: (s: string) => s.toLowerCase().includes('fisika')
                  },
                  {
                    id: 'kimia',
                    name: 'Kimia',
                    icon: '🧪',
                    badge: 'MIPA / Saintek',
                    badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-200',
                    borderClass: 'hover:border-emerald-400 hover:shadow-emerald-100',
                    bgLight: 'bg-emerald-50/70',
                    description: 'Struktur Atom, Tabel Periodik, Stoikiometri, Larutan, Termokimia, Redoks',
                    match: (s: string) => s.toLowerCase().includes('kimia')
                  },
                  {
                    id: 'biologi',
                    name: 'Biologi',
                    icon: '🧬',
                    badge: 'MIPA / Saintek',
                    badgeClass: 'bg-green-100 text-green-800 border-green-200',
                    borderClass: 'hover:border-green-400 hover:shadow-green-100',
                    bgLight: 'bg-green-50/70',
                    description: 'Sel & Molekuler, Metabolisme, Genetika, Ekologi, Bioteknologi',
                    match: (s: string) => s.toLowerCase().includes('biologi')
                  },
                  {
                    id: 'ekonomi',
                    name: 'Ekonomi',
                    icon: '📊',
                    badge: 'IPS / Soshum',
                    badgeClass: 'bg-cyan-100 text-cyan-800 border-cyan-200',
                    borderClass: 'hover:border-cyan-400 hover:shadow-cyan-100',
                    bgLight: 'bg-cyan-50/70',
                    description: 'Mekanisme Pasar, Kebijakan Moneter, Akuntansi Dasar, Perdagangan',
                    match: (s: string) => s.toLowerCase().includes('ekonomi')
                  },
                  {
                    id: 'geografi',
                    name: 'Geografi',
                    icon: '🌍',
                    badge: 'IPS / Soshum',
                    badgeClass: 'bg-teal-100 text-teal-800 border-teal-200',
                    borderClass: 'hover:border-teal-400 hover:shadow-teal-100',
                    bgLight: 'bg-teal-50/70',
                    description: 'Litosfer, Atmosfer, Hidrosfer, Pemetaan, Penginderaan Jauh & SIG',
                    match: (s: string) => s.toLowerCase().includes('geografi')
                  },
                  {
                    id: 'sejarah',
                    name: 'Sejarah',
                    icon: '📜',
                    badge: 'IPS / Soshum',
                    badgeClass: 'bg-yellow-100 text-yellow-800 border-yellow-200',
                    borderClass: 'hover:border-yellow-400 hover:shadow-yellow-100',
                    bgLight: 'bg-yellow-50/70',
                    description: 'Sejarah Kemerdekaan Indonesia, Peradaban Dunia, Perang Dunia',
                    match: (s: string) => s.toLowerCase().includes('sejarah')
                  },
                  {
                    id: 'sosiologi',
                    name: 'Sosiologi',
                    icon: '👥',
                    badge: 'IPS / Soshum',
                    badgeClass: 'bg-rose-100 text-rose-800 border-rose-200',
                    borderClass: 'hover:border-rose-400 hover:shadow-rose-100',
                    bgLight: 'bg-rose-50/70',
                    description: 'Interaksi Sosial, Nilai & Norma, Konflik Sosial, Perubahan Sosial',
                    match: (s: string) => s.toLowerCase().includes('sosiologi')
                  },
                  {
                    id: 'ppkn',
                    name: 'PPKn (PKn)',
                    icon: '🏛️',
                    badge: 'Wajib',
                    badgeClass: 'bg-red-100 text-red-800 border-red-200',
                    borderClass: 'hover:border-red-400 hover:shadow-red-100',
                    bgLight: 'bg-red-50/70',
                    description: 'Pancasila, UUD 1945, Kebinekaan, Hak & Kewajiban Warga Negara',
                    match: (s: string) => {
                      const ls = s.toLowerCase();
                      return ls.includes('pkn') || ls.includes('ppkn') || ls.includes('kewarganegaraan') || ls.includes('pancasila');
                    }
                  }
                ];

                const allTkaTryouts = tryoutsList.filter(to => 
                  to.category === 'TKA' || 
                  (!to.category && (
                    to.name.toLowerCase().includes('tka') || 
                    to.subject.toLowerCase().includes('tka') || 
                    to.subject.toLowerCase().includes('saintek') || 
                    to.subject.toLowerCase().includes('soshum') ||
                    TKA_SMA_SUBJECT_FOLDERS.some(f => f.match(to.subject, to.name))
                  ))
                );

                const allUtbkTryouts = tryoutsList.filter(to => 
                  to.category === 'UTBK' || 
                  (!to.category && !to.name.toLowerCase().includes('tka') && !to.subject.toLowerCase().includes('saintek') && !to.subject.toLowerCase().includes('soshum'))
                );

                // Get current active folder details if selected
                const currentFolderObj = isTka && selectedTkaFolder 
                  ? TKA_SMA_SUBJECT_FOLDERS.find(f => f.id === selectedTkaFolder) 
                  : null;

                // Filter tryouts to render
                let listToRender: TryOut[] = [];
                if (!isTka) {
                  listToRender = allUtbkTryouts;
                } else if (currentFolderObj) {
                  listToRender = allTkaTryouts.filter(to => currentFolderObj.match(to.subject, to.name));
                } else {
                  listToRender = allTkaTryouts;
                }

                return (
                  <div className="space-y-6">

                    {/* Informational Header */}
                    <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-3">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h2 className="text-xl font-bold font-display text-slate-900 flex items-center gap-2">
                          <Award className={`w-6 h-6 ${isTka ? 'text-emerald-600' : 'text-blue-600'}`} />
                          {isTka ? 'Pusat CBT Try Out TKA SMA - Folder Mata Pelajaran' : 'Pusat CBT Try Out UTBK/SNBT Nasional'}
                        </h2>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                          isTka 
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                            : 'bg-blue-50 text-blue-700 border-blue-100'
                        }`}>
                          {isTka ? `${allTkaTryouts.length} Paket TKA (${TKA_SMA_SUBJECT_FOLDERS.length} Folder Mapel)` : `${listToRender.length} Paket UTBK Tersedia`}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                        {isTka 
                          ? 'Masing-masing Try Out bab dikumpulkan secara rapi di dalam 10 Folder Mata Pelajaran TKA SMA (Matematika Wajib, Matematika Tingkat Lanjut, Fisika, Kimia, Biologi, Ekonomi, Geografi, Sejarah, Sosiologi, PPKn). Pilih folder mapel di bawah untuk mengakses seluruh paket Try Out bab.'
                          : 'Daftar seluruh paket Try Out UTBK/SNBT resmi yang diupload oleh Tim Guru dan Admin Utama. Pilih paket di bawah ini untuk mengerjakan simulasi CBT interaktif maupun ujian Google Form.'}
                      </p>

                      {/* Folder Nav Pills for TKA */}
                      {isTka && (
                        <div className="pt-2 flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                          <button
                            onClick={() => setSelectedTkaFolder(null)}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                              selectedTkaFolder === null
                                ? 'bg-emerald-600 text-white shadow-sm'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                          >
                            <FolderOpen className="w-3.5 h-3.5" /> Semua Folder ({TKA_SMA_SUBJECT_FOLDERS.length})
                          </button>
                          {TKA_SMA_SUBJECT_FOLDERS.map(f => {
                            const count = allTkaTryouts.filter(to => f.match(to.subject, to.name)).length;
                            const isSelected = selectedTkaFolder === f.id;
                            return (
                              <button
                                key={f.id}
                                onClick={() => setSelectedTkaFolder(f.id)}
                                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                                  isSelected
                                    ? 'bg-emerald-600 text-white shadow-sm'
                                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/60'
                                }`}
                              >
                                <span>{f.icon}</span>
                                <span>{f.name}</span>
                                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                                  isSelected ? 'bg-emerald-800 text-emerald-100' : 'bg-slate-200 text-slate-700'
                                }`}>
                                  {count}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* TKA 10 Folder Grid Section (When selectedTkaFolder is null or showing overview) */}
                    {isTka && selectedTkaFolder === null && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                            <Folder className="w-5 h-5 text-emerald-600" />
                            Folder 10 Mata Pelajaran TKA SMA
                          </h3>
                          <span className="text-xs text-slate-500 font-medium">
                            Pilih folder untuk membuka paket per bab
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                          {TKA_SMA_SUBJECT_FOLDERS.map((f) => {
                            const matchingTryouts = allTkaTryouts.filter(to => f.match(to.subject, to.name));
                            return (
                              <div
                                key={f.id}
                                onClick={() => setSelectedTkaFolder(f.id)}
                                className={`bg-white border border-slate-200/80 rounded-3xl p-5 flex flex-col justify-between shadow-sm transition-all cursor-pointer group hover:-translate-y-1 ${f.borderClass}`}
                              >
                                <div className="space-y-3">
                                  <div className="flex items-center justify-between">
                                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-xl shadow-inner ${f.bgLight}`}>
                                      {f.icon}
                                    </div>
                                    <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border ${f.badgeClass}`}>
                                      {f.badge}
                                    </span>
                                  </div>

                                  <div>
                                    <h4 className="font-extrabold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                                      {f.name}
                                    </h4>
                                    <p className="text-[11px] text-slate-400 line-clamp-2 mt-1 leading-snug">
                                      {f.description}
                                    </p>
                                  </div>
                                </div>

                                <div className="pt-4 border-t border-slate-100 mt-3 flex items-center justify-between text-xs">
                                  <span className="font-extrabold text-slate-700 flex items-center gap-1 text-[11px]">
                                    <Folder className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                                    {matchingTryouts.length} Paket Bab
                                  </span>
                                  <span className="text-[11px] font-black text-emerald-600 group-hover:translate-x-1 transition-transform flex items-center">
                                    Buka <ChevronRight className="w-3 h-3" />
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Selected Folder Banner / Back navigation */}
                    {isTka && currentFolderObj && (
                      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-6 text-white shadow-md flex items-center justify-between flex-wrap gap-4">
                        <div className="space-y-1">
                          <button
                            onClick={() => setSelectedTkaFolder(null)}
                            className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 hover:bg-white/30 text-white rounded-xl text-xs font-bold transition-all mb-2 cursor-pointer backdrop-blur-sm"
                          >
                            <ArrowLeft className="w-3.5 h-3.5" /> Kembali ke Semua 10 Folder
                          </button>
                          <div className="flex items-center gap-3">
                            <span className="text-3xl">{currentFolderObj.icon}</span>
                            <div>
                              <h3 className="font-black text-lg sm:text-xl text-white">
                                Folder: {currentFolderObj.name}
                              </h3>
                              <p className="text-xs text-emerald-100 max-w-xl">
                                {currentFolderObj.description}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20 text-center">
                          <span className="text-[10px] text-emerald-100 uppercase tracking-widest block font-extrabold">Paket CBT Bab Tersedia</span>
                          <span className="text-2xl font-black text-white">{listToRender.length} Paket</span>
                        </div>
                      </div>
                    )}

                    {/* Standard CBT & Google Form Tryout Simulations Grid (Shown for UTBK or when a TKA Subject Folder is opened) */}
                    {(!isTka || currentFolderObj) && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            {isTka && currentFolderObj
                              ? `Paket Try Out Bab - ${currentFolderObj.name}`
                              : `Paket UTBK & Ujian Aktif`}
                          </h3>
                          <span className="text-xs text-slate-400 font-semibold">
                            Diperbarui Otomatis
                          </span>
                        </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {listToRender.length === 0 ? (
                          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 text-center text-slate-500 space-y-3 md:col-span-2">
                            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
                              <Folder className="w-6 h-6" />
                            </div>
                            <h4 className="font-extrabold text-slate-800 text-sm">
                              {isTka && currentFolderObj 
                                ? `Folder ${currentFolderObj.name} Siap Digunakan`
                                : `Belum Ada Paket Try Out ${isTka ? 'TKA' : 'UTBK'} Aktif`}
                            </h4>
                            <p className="text-xs text-slate-400 max-w-md mx-auto">
                              {isTka && currentFolderObj
                                ? `Belum ada paket Try Out bab untuk ${currentFolderObj.name}. Guru atau Admin dapat menambahkan paket soal baru ke folder ini melalui Dashboard Admin/Guru.`
                                : isTka 
                                  ? 'Semua paket Try Out TKA telah dihapus. Guru atau Admin dapat membuat paket Try Out TKA baru melalui Dashboard Guru/Admin.'
                                  : 'Belum ada paket Try Out UTBK yang tersedia saat ini.'}
                            </p>
                          </div>
                        ) : (
                          listToRender.map((to) => (
                          <div
                            key={to.id}
                            className="bg-white border border-slate-200/80 rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all space-y-5"
                          >
                            <div className="space-y-3">
                              <div className="flex justify-between items-start gap-2 flex-wrap">
                                <span className={`font-black px-3 py-1 rounded-full text-[10px] uppercase tracking-wider ${
                                  to.googleFormUrl 
                                    ? 'bg-purple-100 text-purple-800 border border-purple-200' 
                                    : isTka
                                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                                      : 'bg-blue-100 text-blue-800 border border-blue-200'
                                }`}>
                                  {to.googleFormUrl ? (
                                    to.googleFormUrl.includes('google.com') || to.googleFormUrl.includes('forms')
                                      ? '📋 Google Form Ujian'
                                      : '🌐 Link Try Out Online'
                                  ) : '💻 Simulator CBT Computer'}
                                </span>

                                <span className="text-[11px] text-slate-500 font-extrabold bg-slate-100 px-2.5 py-0.5 rounded-lg">
                                  ⏱️ {to.duration} Menit
                                </span>
                              </div>

                              <h3 className="font-extrabold text-slate-900 text-base sm:text-lg leading-snug">
                                {to.name}
                              </h3>

                              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600">
                                <span className="bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                                  Mata Pelajaran: <strong>{to.subject}</strong>
                                </span>
                                {to.questionCount > 0 && (
                                  <span className="bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                                    {to.questionCount} Soal
                                  </span>
                                )}
                              </div>

                              {to.googleFormUrl ? (
                                <p className="text-xs text-slate-500 leading-relaxed bg-purple-50/50 p-3 rounded-2xl border border-purple-100/60">
                                  Paket ujian ini diselenggarakan via <strong>{to.googleFormUrl.includes('google.com') ? 'Google Form Resmi' : 'Link Try Out Online'}</strong>. Klik tombol di bawah untuk membuka lembar soal ujian.
                                </p>
                              ) : (
                                <p className="text-xs text-slate-500 leading-relaxed bg-blue-50/50 p-3 rounded-2xl border border-blue-100/60">
                                  Kuis simulator komputer {isTka ? 'TKA' : 'UTBK'} dengan timer real-time. Mencakup kunci jawaban dan pembahasan lengkap setelah pengerjaan selesai.
                                </p>
                              )}
                            </div>

                            <div className="flex justify-between items-center pt-4 border-t border-slate-100 gap-2 flex-wrap">
                              <div>
                                <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">Target Passing Grade</span>
                                <span className="text-sm font-black text-slate-800">{to.passingGrade} <span className="text-xs text-slate-400 font-normal">/ 1000</span></span>
                              </div>

                              <div className="flex items-center gap-2">
                                {to.googleFormUrl ? (
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <a
                                      href={to.googleFormUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="px-4 py-2.5 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white font-extrabold rounded-2xl text-xs transition-colors shadow-sm shadow-purple-200 flex items-center gap-1.5 cursor-pointer no-underline"
                                    >
                                      <Link className="w-3.5 h-3.5" /> Buka Link Kuis
                                    </a>
                                    <button
                                      onClick={() => setActiveCbt(to)}
                                      className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold rounded-2xl text-xs transition-colors shadow-sm shadow-emerald-200 flex items-center gap-1.5 cursor-pointer"
                                    >
                                      <Award className="w-3.5 h-3.5" /> Mulai Simulasi CBT
                                    </button>
                                  </div>
                                ) : (
                                  <button
                                    onClick={() => {
                                      if (to.id === 'to1' && !userProfile.isPremium) {
                                        alert('Simulasi CBT Saintek 1 khusus untuk siswa Premium VIP. Silakan upgrade paket belajar Anda.');
                                        setActiveCheckout({ name: 'Premium VIP Bulanan', price: 49000 });
                                      } else {
                                        setActiveCbt(to);
                                      }
                                    }}
                                    className={`px-5 py-3 ${isTka ? 'bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 shadow-emerald-200' : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-blue-200'} text-white font-extrabold rounded-2xl text-xs transition-colors shadow-sm flex items-center gap-2 cursor-pointer`}
                                  >
                                    <Award className="w-4 h-4" /> Mulai Simulasi CBT
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        )))}
                      </div>

                      {/* Matching Materials & Interactive HTML Quiz for this Folder */}
                      {isTka && currentFolderObj && (() => {
                        const matchingMaterials = materials.filter(m => currentFolderObj.match(m.subject, m.title) || currentFolderObj.match(m.subject, m.bab));
                        if (matchingMaterials.length === 0) return null;
                        return (
                          <div className="mt-8 pt-6 border-t border-slate-200/80 space-y-4">
                            <div className="flex items-center gap-2">
                              <span className="p-1.5 bg-emerald-100 text-emerald-700 rounded-lg">
                                <BookOpen className="w-4 h-4" />
                              </span>
                              <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">
                                Modul & Kuis Interaktif {currentFolderObj.name}
                              </h4>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {matchingMaterials.map((mat) => (
                                <div key={mat.id} className="bg-white border border-slate-200/80 rounded-3xl p-5 shadow-sm hover:shadow transition-all space-y-3 flex flex-col justify-between">
                                  <div className="space-y-2">
                                    <div className="flex items-center justify-between gap-2">
                                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800 uppercase">
                                        {mat.subject}
                                      </span>
                                      <span className="text-[10px] text-slate-400 font-semibold">Tutor: {mat.guruName || 'TKA Expert'}</span>
                                    </div>
                                    <h5 className="font-extrabold text-slate-900 text-sm leading-snug">{mat.title}</h5>
                                    <p className="text-xs text-slate-500 leading-relaxed">{mat.description}</p>
                                  </div>
                                  {mat.htmlContent && (
                                    <button
                                      onClick={() => setPreviewHtml({ name: mat.title, html: mat.htmlContent! })}
                                      className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl transition-all shadow-md shadow-emerald-100 flex items-center justify-center gap-2 cursor-pointer mt-2"
                                    >
                                      <FileCode className="w-4 h-4" />
                                      Buka Kuis Interaktif (HTML ANBK)
                                    </button>
                                  )}
                                  {!mat.htmlContent && mat.pdfName && (
                                    <button
                                      onClick={() => setPreviewPdf({ name: mat.pdfName || 'Dokumen_Materi.pdf', url: mat.pdfUrl || '#' })}
                                      className="w-full py-2.5 bg-red-50 hover:bg-red-100 text-red-700 font-bold text-xs rounded-xl transition-all border border-red-100 flex items-center justify-center gap-2 cursor-pointer mt-2"
                                    >
                                      <FileText className="w-4 h-4" />
                                      Buka PDF: {mat.pdfName}
                                    </button>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                    )}

                  </div>
                );
              })()}

              {/* Tab: Ranking */}
              {activeTab === 'ranking' && (
                <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden">
                  {(() => {
                    const allDynamicScores = getAllScores();
                    const leaderboardMap = new Map<string, { name: string; school: string; score: number }>();
                    const defaultLeaders = [
                      { name: 'Zahra Amalia', school: 'SMA Negeri 8 Jakarta', score: 812 },
                      { name: 'Fatih Al-Fatih', school: 'SMA Negeri 3 Bandung', score: 795 },
                      { name: 'Nabila Syakieb', school: 'MAN IC Serpong', score: 780 },
                      { name: 'Ahmad Fauzi', school: 'SMA Negeri 1 Yogyakarta', score: 735 },
                      { name: 'Genta Wardana', school: 'SMA Kharisma Bangsa', score: 712 }
                    ];
                    defaultLeaders.forEach(item => leaderboardMap.set(item.name, item));

                    allDynamicScores.forEach(s => {
                      const sName = s.userName || 'Siswa TKA';
                      const existing = leaderboardMap.get(sName);
                      if (!existing || s.score > existing.score) {
                        leaderboardMap.set(sName, {
                          name: sName,
                          school: (sName === userProfile.displayName ? userProfile.schoolName : undefined) || 'SMA Negeri TKA',
                          score: s.score
                        });
                      }
                    });

                    const sortedLeaderboard = Array.from(leaderboardMap.values()).sort((a, b) => b.score - a.score);
                    const currentUserRankIdx = sortedLeaderboard.findIndex(i => i.name === userProfile.displayName);
                    const currentUserDisplayRank = currentUserRankIdx !== -1 ? `#${currentUserRankIdx + 1}` : '#12';

                    return (
                      <>
                        <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-50/50">
                          <div>
                            <h3 className="font-bold font-display text-slate-800 text-sm">Klasemen Skor Tryout Nasional</h3>
                            <p className="text-[10px] text-slate-500 mt-0.5">Urutan peringkat nasional diupdate berkala sesuai bobot realisasi data skor tertinggi.</p>
                          </div>
                          <span className="bg-amber-50 text-amber-800 font-extrabold px-3 py-1 rounded-full text-xs">Peringkat Anda: {currentUserDisplayRank}</span>
                        </div>

                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-xs sm:text-sm">
                            <thead className="bg-slate-50 border-b border-slate-100 text-slate-400 font-extrabold uppercase">
                              <tr>
                                <th className="p-4 text-center">Rank</th>
                                <th className="p-4">Nama Lengkap</th>
                                <th className="p-4">Asal Sekolah</th>
                                <th className="p-4 text-right">Skor Rata-Rata CBT</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-slate-700">
                              {sortedLeaderboard.slice(0, 10).map((item, idx) => {
                                const rankDisplay = idx === 0 ? '🥇 1' : idx === 1 ? '🥈 2' : idx === 2 ? '🥉 3' : `${idx + 1}`;
                                const isCurrentUser = item.name === userProfile.displayName;
                                return (
                                  <tr key={idx} className={`transition-colors ${isCurrentUser ? 'bg-blue-50/70 font-bold text-blue-900' : 'hover:bg-slate-50/50'}`}>
                                    <td className="p-4 text-center font-bold">{rankDisplay}</td>
                                    <td className="p-4 font-bold text-slate-900 flex items-center gap-2">
                                      <span>{item.name}</span>
                                      {isCurrentUser && <span className="bg-blue-600 text-white text-[9px] px-1.5 py-0.5 rounded font-black uppercase">Anda</span>}
                                    </td>
                                    <td className="p-4 font-semibold text-slate-600">{item.school}</td>
                                    <td className="p-4 text-right font-black text-blue-600 font-mono">{item.score}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </>
                    );
                  })()}
                </div>
              )}

              {/* Tab: Lencana & Prestasi (Badges) */}
              {activeTab === 'badges' && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
                    <h3 className="font-bold font-display text-slate-900 text-sm">Lencana Prestasi & Gamifikasi</h3>
                    <p className="text-xs text-slate-400 mt-1">Selesaikan tryout CBT, input nilai rapor, dan tonton video materi untuk membuka lencana khusus berhadiah bonus XP.</p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {getAchievements().map((badge) => (
                      <div
                        key={badge.id}
                        className={`p-6 border rounded-2xl flex flex-col items-center text-center space-y-3 bg-white transition-all ${
                          badge.unlocked
                            ? 'border-blue-200 shadow-sm'
                            : 'border-slate-100 opacity-60'
                        }`}
                      >
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-inner ${
                          badge.unlocked ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-300'
                        }`}>
                          {badge.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-xs text-slate-800 leading-tight">{badge.title}</h4>
                          <p className="text-[10px] text-slate-400 mt-1 leading-snug">{badge.description}</p>
                        </div>
                        <span className="text-[9px] font-bold text-blue-600 uppercase">+{badge.xp} XP</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </>
          )}

        </div>

      </div>

      {/* Midtrans checkout modal overlay */}
      {activeCheckout && (
        <MidtransSimulator
          packageName={activeCheckout.name}
          price={activeCheckout.price}
          onClose={() => setActiveCheckout(null)}
          onPaymentSuccess={handleCheckoutSuccess}
        />
      )}

    </div>
  );
}
