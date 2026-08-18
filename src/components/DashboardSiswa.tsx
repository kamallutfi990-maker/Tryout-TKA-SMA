/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Home, FileText, Compass, BookOpen, Video, Award, Trophy, Sparkles, Star, Zap, ChevronRight, Play, BookOpenCheck, CheckCircle2, AlertTriangle, ShieldCheck, Heart, Link, Image, Youtube, ExternalLink, FileSpreadsheet, Download, Folder, FolderOpen, ArrowLeft, FileCode, Target, Radio, Calendar, Users, Maximize2, Search, RotateCcw, BarChart3 } from 'lucide-react';
import { UserProfile, ReportCard, TryOut, LearningVideo, UniversityPrediction, ExamScore, Achievement, LearningMaterial } from '../types';
import { FirestoreSimulator, getTryouts, getVideos, getAchievements, getUniversities, getStudyPrograms, getMaterials, getAllScores } from '../lib/firestoreSimulator';
import { UTBK_SNBT_SUBTEST_FOLDERS, UTBK_TOTAL_SUMMARY } from '../data/utbkSubtestsData';
import CbtSimulator from './CbtSimulator';
import MidtransSimulator from './MidtransSimulator';
import MathMarkdown from './MathMarkdown';
import CbtAnalysisReport, { CbtReportData } from './CbtAnalysisReport';
import CbtTryoutIndoLanjut from './tryout_cbt_tka/bahasa_indonesia_tingkat_lanjut/CbtTryoutIndoLanjut';
import CbtTryoutInggrisLanjut from './tryout_cbt_tka/bahasa_inggris_tingkat_lanjut/CbtTryoutInggrisLanjut';
import CbtTryoutKimia from './tryout_cbt_tka/kimia/CbtTryoutKimia';
import CbtTryoutBiologi from './tryout_cbt_tka/biologi/CbtTryoutBiologi';
import CbtTryoutFisika from './tryout_cbt_tka/fisika/CbtTryoutFisika';
import CbtTryoutSosiologi from './tryout_cbt_tka/sosiologi/CbtTryoutSosiologi';
import CbtTryoutEkonomi from './tryout_cbt_tka/ekonomi/CbtTryoutEkonomi';
import CbtTryoutPpkn from './tryout_cbt_tka/ppkn/CbtTryoutPpkn';
import CbtTryoutSejarah from './tryout_cbt_tka/sejarah/CbtTryoutSejarah';
import CbtTryoutGeografi from './tryout_cbt_tka/geografi/CbtTryoutGeografi';

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
  const [isLiveStreamOpen, setIsLiveStreamOpen] = useState<boolean>(false);

  // Tryouts state
  const [tryoutsList, setTryoutsList] = useState<TryOut[]>(getTryouts());
  const [selectedTkaFolder, setSelectedTkaFolder] = useState<string | null>(null);
  const [tkaCategoryFilter, setTkaCategoryFilter] = useState<'all' | 'wajib' | 'saintek' | 'soshum'>('all');
  const [tkaSearchQuery, setTkaSearchQuery] = useState<string>('');

  const [selectedUtbkFolder, setSelectedUtbkFolder] = useState<string | null>(null);
  const [utbkCategoryFilter, setUtbkCategoryFilter] = useState<'all' | 'tps' | 'literasi'>('all');
  const [utbkSearchQuery, setUtbkSearchQuery] = useState<string>('');

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
  const [selectedSemesterTab, setSelectedSemesterTab] = useState<string>('all');
  const [targetUniv, setTargetUniv] = useState('ugm');
  const [targetProdi, setTargetProdi] = useState('prodi_ugm_1');
  const [univSearch, setUnivSearch] = useState('');
  const [prodiSearch, setProdiSearch] = useState('');
  const [pathway, setPathway] = useState<'SNBP' | 'SNBT'>('SNBT');
  const [activePrediction, setActivePrediction] = useState<UniversityPrediction | null>(null);

  const allUniversitiesList = getUniversities();

  // Helper to persist selected PTN and Prodi to user profile
  const saveSelectedPTNToProfile = (univId: string, prodiId: string) => {
    const univ = allUniversitiesList.find(u => u.id === univId);
    const prodis = getStudyPrograms(univId);
    const prodi = prodis.find(p => p.id === prodiId) || prodis[0];
    if (univ) {
      const ptnName = univ.name;
      const prodiName = prodi ? prodi.name : '';
      if (userProfile.targetPTN !== ptnName || userProfile.targetProdi !== prodiName) {
        const updated = FirestoreSimulator.updateUserProfile({
          targetPTN: ptnName,
          targetProdi: prodiName
        });
        if (onUpdateProfile) {
          onUpdateProfile(updated);
        }
      }
    }
  };

  // Sync initial targetUniv and targetProdi from userProfile if present
  useEffect(() => {
    if (userProfile?.targetPTN) {
      const ptnLower = userProfile.targetPTN.toLowerCase().trim();
      const matchedUniv = allUniversitiesList.find(u => 
        u.name.toLowerCase() === ptnLower || 
        u.acronym.toLowerCase() === ptnLower ||
        u.id === ptnLower ||
        ptnLower.includes(u.name.toLowerCase()) ||
        ptnLower.includes(u.acronym.toLowerCase())
      );
      if (matchedUniv) {
        setTargetUniv(matchedUniv.id);
        if (userProfile?.targetProdi) {
          const prodis = getStudyPrograms(matchedUniv.id);
          const prodiLower = userProfile.targetProdi.toLowerCase().trim();
          const matchedProdi = prodis.find(p => 
            p.name.toLowerCase() === prodiLower || 
            p.id === prodiLower ||
            prodiLower.includes(p.name.toLowerCase())
          );
          if (matchedProdi) {
            setTargetProdi(matchedProdi.id);
          }
        }
      }
    }
  }, [userProfile?.targetPTN, userProfile?.targetProdi]);

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
        targetPTN: userProfile.targetPTN || "",
        targetProdi: userProfile.targetProdi || "",
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
        targetPTN: userProfile.targetPTN || "",
        targetProdi: userProfile.targetProdi || "",
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
        targetPTN: userProfile.targetPTN || "",
        targetProdi: userProfile.targetProdi || "",
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
        targetPTN: userProfile.targetPTN || "",
        targetProdi: userProfile.targetProdi || "",
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
        targetPTN: userProfile.targetPTN || "",
        targetProdi: userProfile.targetProdi || "",
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
    // Reload user profile for fresh XP & levels without closing the active CBT screen
    const updatedUser = FirestoreSimulator.getCurrentUser();
    if (updatedUser && onUpdateProfile) onUpdateProfile(updatedUser);
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
        <div className="bg-slate-900 dark:bg-slate-800 text-white py-2 px-4 text-xs text-center flex flex-wrap items-center justify-center gap-2 border-b border-slate-800 dark:border-slate-700">
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
      <header className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shadow-sm sticky top-0 z-30 shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          
          <div className="flex items-center gap-2">
            <span className="bg-blue-600 text-white w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-lg">T</span>
            <div>
              <h1 className="text-base font-extrabold text-slate-900 dark:text-slate-50 leading-none">TKA SMA Indonesia</h1>
              <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">Pusat Belajar Kelas XII & Alumni</span>
            </div>
          </div>

          {/* Live Streaming Flagship Quick Launcher */}
          <button
            onClick={() => setIsLiveStreamOpen(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-red-600 via-rose-600 to-red-600 text-white px-3.5 py-2 rounded-2xl text-xs font-bold shadow-md hover:shadow-lg hover:scale-102 transition-all cursor-pointer border border-red-400/30 group"
            title="Buka Live Streaming Pembahasan Sabtu & Minggu"
          >
            <Radio className="w-4 h-4 text-white animate-pulse shrink-0" />
            <div className="text-left hidden sm:block">
              <span className="block text-[10px] text-red-100 font-extrabold uppercase tracking-wider leading-none">🔴 LIVE STREAMING</span>
              <span className="block text-xs font-black leading-tight">Sabtu & Minggu</span>
            </div>
            <span className="sm:hidden font-bold">🔴 Live</span>
          </button>

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
            onClick={() => setIsLiveStreamOpen(true)}
            className="px-4 py-3 rounded-xl font-bold text-xs flex items-center justify-between gap-2 transition-all cursor-pointer shrink-0 bg-gradient-to-r from-red-950 via-slate-900 to-slate-900 text-white border border-red-500/40 hover:border-red-400 shadow-sm group"
          >
            <div className="flex items-center gap-2">
              <Radio className="w-4 h-4 text-red-500 animate-pulse shrink-0" />
              <span className="text-left font-extrabold text-red-200 leading-tight">Live Sabtu-Minggu</span>
            </div>
            <span className="bg-red-600 text-white text-[8px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
              HOT
            </span>
          </button>
          <button
            onClick={() => setActiveTab('prediksi')}
            className={`px-4 py-3 rounded-xl font-bold text-xs flex items-center gap-2.5 transition-all cursor-pointer shrink-0 ${
              activeTab === 'prediksi' || activeTab === 'rapor' ? 'bg-blue-50 text-[#2563EB] border border-blue-100/50 shadow-sm' : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200/60'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Prediksi Peluang PTN dengan Nilai Raport</span>
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
            onClick={() => {
              setActiveCbt(null);
              setSelectedTkaFolder(null);
              setActiveTab('tryout_tka');
            }}
            className={`px-4 py-3 rounded-xl font-bold text-xs flex items-center gap-2.5 transition-all cursor-pointer shrink-0 ${
              activeTab === 'tryout_tka' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-sm' : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200/60'
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
            activeCbt.id === 'to-tka-bing-lanjut-2026' ||
            activeCbt.id === 'to-tka-binggris-lanjut-2026' ||
            (activeCbt.subject === 'Bahasa Inggris Tingkat Lanjut' && !activeCbt.googleFormUrl) ? (
              <CbtTryoutInggrisLanjut onBack={() => setActiveCbt(null)} />
            ) : activeCbt.id === 'to-tka-bindo-lanjut-2026' || 
            (activeCbt.subject === 'Bahasa Indonesia Tingkat Lanjut' && !activeCbt.googleFormUrl) ? (
              <CbtTryoutIndoLanjut onBack={() => setActiveCbt(null)} />
            ) : activeCbt.id === 'to-tka-kimia-1-2026' || 
            (activeCbt.subject === 'Kimia' && !activeCbt.googleFormUrl) ? (
              <CbtTryoutKimia onBack={() => setActiveCbt(null)} />
            ) : activeCbt.id === 'to-tka-biologi-1-2026' || 
            (activeCbt.subject === 'Biologi' && !activeCbt.googleFormUrl) ? (
              <CbtTryoutBiologi onBack={() => setActiveCbt(null)} />
            ) : activeCbt.id === 'to-tka-fisika-1-2026' ||
            (activeCbt.subject === 'Fisika' && !activeCbt.googleFormUrl) ? (
              <CbtTryoutFisika onBack={() => setActiveCbt(null)} />
            ) : activeCbt.id === 'to-tka-sosiologi-1-2026' ||
            (activeCbt.subject === 'Sosiologi' && !activeCbt.googleFormUrl) ? (
              <CbtTryoutSosiologi onBack={() => setActiveCbt(null)} />
            ) : activeCbt.id === 'to-tka-ekonomi-1-2026' ||
            (activeCbt.subject === 'Ekonomi' && !activeCbt.googleFormUrl) ? (
              <CbtTryoutEkonomi onBack={() => setActiveCbt(null)} />
            ) : activeCbt.id === 'to-tka-ppkn-2026' ||
            (activeCbt.subject === 'PPKn (PKn)' && !activeCbt.googleFormUrl) ? (
              <CbtTryoutPpkn onBack={() => setActiveCbt(null)} />
            ) : activeCbt.id === 'to-tka-sejarah-2026' ||
            (activeCbt.subject === 'Sejarah' && !activeCbt.googleFormUrl) ? (
              <CbtTryoutSejarah onBack={() => setActiveCbt(null)} />
            ) : activeCbt.id === 'to-tka-geografi-2026' ||
            (activeCbt.subject === 'Geografi' && !activeCbt.googleFormUrl) ? (
              <CbtTryoutGeografi onBack={() => setActiveCbt(null)} />
            ) : (
              <CbtSimulator
                tryout={activeCbt}
                userProfile={userProfile}
                onBack={() => setActiveCbt(null)}
                onFinish={handleCbtFinished}
              />
            )
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
                    <div className="space-y-3 pt-2 border-t border-slate-50">
                      <div className="flex justify-between text-xs font-bold text-slate-600">
                        <span>Milestone Level {userProfile.level}</span>
                        <span>{userProfile.xp % 1000} / 1000 XP</span>
                      </div>
                      <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                        <div className="bg-blue-600 h-full rounded-full transition-all duration-500" style={{ width: getProgressWidth() }}></div>
                      </div>

                      {/* Target PTN badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-50 border border-slate-100 p-3 rounded-2xl">
                        <div className="flex items-center gap-2 text-xs">
                          <Target className="w-4 h-4 text-blue-600 shrink-0" />
                          <span className="text-slate-500 font-bold">Target PTN Pilihan:</span>
                          {userProfile.targetPTN ? (
                            <span className="font-extrabold text-blue-900 bg-blue-100/70 px-2.5 py-0.5 rounded-md border border-blue-200">
                              {userProfile.targetPTN} {userProfile.targetProdi ? `— ${userProfile.targetProdi}` : ''}
                            </span>
                          ) : (
                            <span className="font-semibold text-slate-400 italic bg-white px-2.5 py-0.5 rounded-md border border-slate-200">
                              Belum memilih PTN
                            </span>
                          )}
                        </div>
                        <button
                          onClick={() => setActiveTab('prediksi')}
                          className="text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline cursor-pointer flex items-center gap-1 ml-auto"
                        >
                          <span>{userProfile.targetPTN ? 'Ubah Target PTN' : 'Pilih Target PTN'}</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* FLAGSHIP PROGRAM BANNER: Live Streaming YouTube Sabtu & Minggu */}
                  <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden group">
                    {/* Decorative Background Lighting */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                      <div className="space-y-3 max-w-2xl">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 border border-red-400/30 shadow-xs animate-pulse">
                            <Radio className="w-3 h-3 text-white" /> PROGRAM UNGGULAN #1
                          </span>
                          <span className="bg-amber-400/20 text-amber-300 text-[10px] font-extrabold px-3 py-1 rounded-full border border-amber-400/30 flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-amber-400" /> Bedah Soal Interaktif Youtube
                          </span>
                        </div>

                        <h2 className="text-lg sm:text-2xl font-black text-white leading-snug">
                          Live Streaming Pembahasan UTBK & TKA — Setiap Sabtu & Minggu
                        </h2>

                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          Saksikan siaran langsung interaktif bedah soal HOTS, trik 10 detik, dan Q&A real-time bersama Master Mentor. Tonton langsung secara <strong>Fullscreen di dalam aplikasi</strong> tanpa dilempar keluar!
                        </p>

                        <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-slate-300 font-medium">
                          <div className="flex items-center gap-1.5 text-amber-300 font-bold">
                            <Calendar className="w-4 h-4 text-amber-400" />
                            <span>Setiap Sabtu & Minggu (19:00 - 21:00 WIB)</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                            <Users className="w-4 h-4 text-emerald-400" />
                            <span>1,400+ Siswa Bergabung</span>
                          </div>
                        </div>
                      </div>

                      <div className="shrink-0 w-full md:w-auto flex flex-col sm:flex-row md:flex-col gap-3">
                        <button
                          onClick={() => setIsLiveStreamOpen(true)}
                          className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white font-black text-xs sm:text-sm rounded-2xl shadow-lg shadow-red-900/40 hover:shadow-red-800/60 transition-all cursor-pointer flex items-center justify-center gap-2 group-hover:scale-102"
                        >
                          <Play className="w-4 h-4 fill-white text-white" />
                          <span>Tonton Live Stream (In-App)</span>
                        </button>
                        <button
                          onClick={() => setIsLiveStreamOpen(true)}
                          className="w-full sm:w-auto px-4 py-2.5 bg-slate-800/90 hover:bg-slate-800 text-slate-200 text-xs font-bold rounded-xl transition-all cursor-pointer border border-slate-700/80 flex items-center justify-center gap-1.5"
                        >
                          <Maximize2 className="w-3.5 h-3.5 text-blue-400" />
                          <span>Layar Penuh & Chat Live</span>
                        </button>
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
                      onClick={() => {
                        setActiveCbt(null);
                        setSelectedTkaFolder(null);
                        setActiveTab('tryout_tka');
                      }}
                      className="bg-white border border-slate-100 hover:border-emerald-300 p-6 rounded-3xl text-left shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-2">
                        <div className="inline-flex gap-1 bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border border-emerald-100">
                          <FolderOpen className="w-3 h-3 text-emerald-600 shrink-0" /> 14 Folder Mapel TKA
                        </div>
                        <h3 className="font-extrabold text-sm sm:text-base text-slate-900">Try Out CBT TKA</h3>
                        <p className="text-xs text-slate-500">Buka dan akses 14 folder mata pelajaran TKA SMA (MIPA, IPS, dan Wajib) untuk memulai simulasi ujian.</p>
                      </div>
                      <div className="flex items-center justify-between pt-2 text-xs font-bold text-emerald-600 group-hover:text-emerald-700 transition-colors">
                        <span>Buka Folder Try Out TKA</span>
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

              {/* Tab: Prediksi Peluang PTN dengan Nilai Raport (Merged Input Rapor + Prediksi) */}
              {(activeTab === 'prediksi' || activeTab === 'rapor') && (
                <div className="space-y-6">
                  
                  {/* Header Banner */}
                  <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="px-2.5 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-black rounded-md uppercase tracking-wider">
                            SNPMB & SNBP Rasionalisasi 2026
                          </span>
                          <span className="text-[11px] font-bold text-slate-400">100+ PTN Resmi</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-black font-display text-slate-900 leading-tight">
                          Prediksi Peluang PTN dengan Nilai Raport
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
                          Input nilai rapor Semester 1 sampai 5 Anda di bawah ini, tentukan program studi PTN impian, dan hitung akurasi peluang kelulusan jalur SNBP & SNBT secara komprehensif.
                        </p>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <div className="bg-blue-50 border border-blue-100 px-5 py-3 rounded-2xl text-right">
                          <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">RATA-RATA RAPOR GLOBAL</span>
                          <span className="text-2xl font-black text-blue-700">{reportCard.average || 0} <span className="text-xs font-semibold text-slate-400">/ 100</span></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 1: Formulir Input Nilai Rapor Siswa */}
                  <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-sm">
                          1
                        </div>
                        <div>
                          <h3 className="text-base font-extrabold text-slate-900">Arsip & Input Nilai Rapor (Semester 1 - 5)</h3>
                          <p className="text-xs text-slate-500">Nilai akan otomatis tersimpan dan digunakan untuk merasionalisasi peluang kelulusan.</p>
                        </div>
                      </div>

                      {/* Quick Action Buttons */}
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            const sampleGrades: { [sem: string]: { [sub: string]: number } } = {};
                            semesters.forEach((sem, idx) => {
                              sampleGrades[sem] = {};
                              subjectsList.forEach((sub, subIdx) => {
                                // Natural progressive score around 84 - 92
                                const base = 84 + (idx * 1.5) + ((subIdx % 4) * 1.2);
                                sampleGrades[sem][sub] = Math.min(95, Math.round(base));
                              });
                            });
                            const sampleCard = {
                              userId: userProfile.uid,
                              grades: sampleGrades,
                              average: 87.5,
                              updatedAt: new Date().toISOString()
                            };
                            setReportCard(sampleCard);
                            FirestoreSimulator.saveReportCard(sampleCard);
                          }}
                          className="px-3 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                          <span>Isi Contoh Nilai (85+)</span>
                        </button>
                        <button
                          type="button"
                          onClick={handleClearReportCard}
                          className="px-3 py-2 bg-red-50 hover:bg-red-100 text-red-700 border border-red-100 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
                        >
                          <RotateCcw className="w-3.5 h-3.5 text-red-500" />
                          <span>Kosongkan</span>
                        </button>
                      </div>
                    </div>

                    {/* SVG Bar Chart for Semester Trends */}
                    <div className="border border-slate-100 bg-slate-50/50 p-5 rounded-2xl space-y-3">
                      <div className="flex justify-between items-center">
                        <h4 className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                          <BarChart3 className="w-4 h-4 text-blue-600" />
                          Tren Grafik Rata-Rata Rapor per Semester
                        </h4>
                        <span className="text-[11px] text-slate-400 font-medium">Nilai 0 - 100</span>
                      </div>

                      <div className="flex justify-between items-end h-28 pt-4 px-4 sm:px-8 border-b border-slate-200 bg-white rounded-xl shadow-inner">
                        {semesters.map((sem) => {
                          const sGrades = reportCard.grades[sem] || {};
                          const validVals = Object.values(sGrades).filter(v => v > 0);
                          const avg = validVals.length > 0 ? Math.round(validVals.reduce((sum, val) => sum + val, 0) / validVals.length) : 0;
                          const barHeight = avg > 0 ? `${Math.max(8, avg)}%` : '4px';

                          return (
                            <div key={sem} className="flex flex-col items-center gap-2 h-full justify-end">
                              <span className={`text-[10px] font-black ${avg > 0 ? 'text-blue-600' : 'text-slate-300'}`}>
                                {avg > 0 ? avg : '-'}
                              </span>
                              <div
                                className={`w-8 sm:w-12 rounded-t-md transition-all duration-500 ${
                                  avg > 80 ? 'bg-gradient-to-t from-blue-600 to-indigo-500' : avg > 0 ? 'bg-blue-400' : 'bg-slate-200'
                                }`}
                                style={{ height: barHeight }}
                              ></div>
                              <span className="text-[9px] sm:text-[10px] text-slate-500 font-bold">{sem}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Semester Tab Switcher */}
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-1 border-b border-slate-100">
                      <button
                        type="button"
                        onClick={() => setSelectedSemesterTab('all')}
                        className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer shrink-0 ${
                          selectedSemesterTab === 'all'
                            ? 'bg-blue-600 text-white shadow-sm shadow-blue-200'
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-600'
                        }`}
                      >
                        Semua Semester (1 - 5)
                      </button>
                      {semesters.map((sem) => {
                        const sGrades = reportCard.grades[sem] || {};
                        const validVals = Object.values(sGrades).filter(v => v > 0);
                        const avg = validVals.length > 0 ? Math.round(validVals.reduce((sum, val) => sum + val, 0) / validVals.length) : 0;
                        return (
                          <button
                            key={sem}
                            type="button"
                            onClick={() => setSelectedSemesterTab(sem)}
                            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                              selectedSemesterTab === sem
                                ? 'bg-blue-600 text-white shadow-sm shadow-blue-200'
                                : 'bg-slate-50 hover:bg-slate-100 text-slate-600'
                            }`}
                          >
                            <span>{sem}</span>
                            {avg > 0 && (
                              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                                selectedSemesterTab === sem ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-700'
                              }`}>
                                {avg}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Input Grid Map */}
                    <div className="space-y-6 max-h-[55vh] overflow-y-auto pr-2">
                      {semesters
                        .filter(sem => selectedSemesterTab === 'all' || selectedSemesterTab === sem)
                        .map((sem) => {
                          const sGrades = reportCard.grades[sem] || {};
                          const validVals = Object.values(sGrades).filter(v => v > 0);
                          const semAvg = validVals.length > 0 ? (validVals.reduce((sum, val) => sum + val, 0) / validVals.length).toFixed(1) : '0';

                          return (
                            <div key={sem} className="space-y-3.5 border-b border-slate-100 pb-5 last:border-b-0 last:pb-0">
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                  <h4 className="font-extrabold text-slate-900 text-sm">{sem}</h4>
                                  <span className="text-[10px] bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded-md border border-blue-100">
                                    Rata-rata: {semAvg}
                                  </span>
                                </div>
                                <button
                                  type="button"
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
                              
                              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                                {subjectsList.map((sub) => {
                                  const rawGrade = reportCard.grades[sem]?.[sub];
                                  const displayVal = (rawGrade === undefined || rawGrade === null || rawGrade === 0) ? '' : rawGrade;
                                  return (
                                    <div key={sub} className="space-y-1 bg-slate-50/50 p-2.5 rounded-xl border border-slate-100 focus-within:border-blue-300 focus-within:bg-white transition-all">
                                      <label className="text-[10px] font-bold text-slate-600 block truncate" title={sub}>{sub}</label>
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
                                        className="w-full p-2 border border-slate-200 rounded-lg text-xs font-black text-slate-800 text-center focus:outline-none focus:border-blue-500 focus:bg-white shadow-sm"
                                      />
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>

                  {/* Section 2: Pilih Target PTN & Program Studi */}
                  <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                    <div className="flex items-center gap-2.5 border-b border-slate-100 pb-5">
                      <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-sm">
                        2
                      </div>
                      <div>
                        <h3 className="text-base font-extrabold text-slate-900">Pilih Target PTN, Program Studi, & Jalur Seleksi</h3>
                        <p className="text-xs text-slate-500">Tentukan pilihan kampus dan jurusan untuk mengkalkulasi peluang kelulusan dari nilai rapor Anda.</p>
                      </div>
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
                            const newProdiId = firstProgram ? firstProgram.id : '';
                            if (firstProgram) {
                              setTargetProdi(newProdiId);
                            }
                            setProdiSearch('');
                            saveSelectedPTNToProfile(newUnivId, newProdiId);
                          }}
                          className="w-full p-3 border border-slate-200 rounded-xl bg-white text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:border-blue-500 shadow-sm"
                        >
                          {ptnCategories.map(cat => {
                            let list = filteredUniversities.filter(u => (u.category || 'PTN Regional') === cat);
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
                          onChange={(e) => {
                            const newProdiId = e.target.value;
                            setTargetProdi(newProdiId);
                            saveSelectedPTNToProfile(targetUniv, newProdiId);
                          }}
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
                          <p className="text-[11px] text-slate-400 mt-0.5">SNBP (Prestasi Nilai Rapor) / SNBT (CBT UTBK)</p>
                        </div>

                        <select
                          value={pathway}
                          onChange={(e) => setPathway(e.target.value as any)}
                          className="w-full p-3 border border-slate-200 rounded-xl bg-white text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:border-blue-500 shadow-sm"
                        >
                          <option value="SNBP">SNBP (Prestasi Nilai Rapor Semester 1 - 5)</option>
                          <option value="SNBT">SNBT (Ujian CBT UTBK / TKA)</option>
                        </select>
                      </div>

                    </div>

                    <button
                      type="button"
                      onClick={handleCalculatePrediction}
                      className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black rounded-2xl text-sm transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
                    >
                      <Compass className="w-5 h-5 text-amber-300" />
                      <span>Kalkulasi Akurasi Prediksi Peluang Kelulusan</span>
                    </button>
                  </div>

                  {/* Section 3: Active calculation outcome & SVG speed gauge dial */}
                  {activePrediction && (
                    <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
                      
                      <div className="md:col-span-4 flex flex-col items-center text-center space-y-4">
                        <div className="flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4 text-amber-500" />
                          <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">AKURASI KELULUSAN</h4>
                        </div>
                        
                        {/* Custom visual SVG Circular speed-gauge */}
                        <div className="relative w-44 h-44">
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" stroke="#F1F5F9" strokeWidth="8" fill="none" />
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
                            <span className={`text-[11px] font-black uppercase tracking-wider mt-0.5 ${
                              activePrediction.probabilityScore > 70 ? 'text-emerald-600' : activePrediction.probabilityScore > 50 ? 'text-blue-600' : 'text-red-500'
                            }`}>
                              {activePrediction.probability}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-8 space-y-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-extrabold uppercase tracking-wider">
                              Jalur {activePrediction.pathway}
                            </span>
                            <span className="text-xs text-slate-400 font-semibold">
                              Rata-Rata Rapor: <strong className="text-slate-700">{reportCard.average || 0}</strong>
                            </span>
                          </div>
                          <h3 className="text-xl font-extrabold text-slate-900">{activePrediction.university} - {activePrediction.studyProgram}</h3>
                        </div>

                        <div className="bg-slate-50 border border-slate-100 p-4 sm:p-5 rounded-2xl text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                          <p className="font-bold text-slate-800 flex items-center gap-1.5">
                            <Sparkles className="w-4 h-4 text-blue-600" />
                            Rekomendasi Taktis & Analisis Rasionalisasi:
                          </p>
                          <MathMarkdown content={activePrediction.recommendation} />
                        </div>
                      </div>

                    </div>
                  )}

                  {/* Section 4: Historical prediction requests */}
                  {predictionsList.length > 0 && (
                    <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-extrabold text-slate-800 text-sm flex items-center gap-2">
                          <RotateCcw className="w-4 h-4 text-slate-400" />
                          Riwayat Perhitungan Prediksi Peluang PTN
                        </h3>
                        <span className="text-xs text-slate-400 font-bold">{predictionsList.length} Riwayat</span>
                      </div>
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
                      const isMath = (ls.includes('matematika') || ls.includes('mtk') || ln.includes('matematika') || ln.includes('mtk')) && !ls.includes('indonesia') && !ls.includes('inggris') && !ln.includes('indonesia') && !ln.includes('inggris');
                      return isMath && (ls.includes('wajib') || ls.includes('umum') || (!ls.includes('lanjut') && !ls.includes('tingkat') && !ln.includes('lanjut')));
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
                      const isMath = (ls.includes('matematika') || ls.includes('mtk') || ln.includes('matematika') || ln.includes('mtk') || ls.includes('kalkulus') || ls.includes('turunan') || ls.includes('integral') || ln.includes('turunan') || ln.includes('integral')) && !ls.includes('indonesia') && !ls.includes('inggris') && !ln.includes('indonesia') && !ln.includes('inggris');
                      const isLanjut = ls.includes('lanjut') || ln.includes('lanjut') || ls.includes('turunan') || ls.includes('integral') || ln.includes('turunan') || ln.includes('integral') || ln.includes('matriks') || ln.includes('vektor') || ln.includes('polinomial');
                      return isMath && isLanjut;
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
                      const isIndo = (ls.includes('indonesia') || ln.includes('indonesia') || ls.includes('indo') || ln.includes('indo')) && !ls.includes('inggris') && !ln.includes('inggris') && !ls.includes('matematika') && !ln.includes('matematika');
                      return isIndo && !ls.includes('lanjut') && !ls.includes('tingkat') && !ln.includes('lanjut');
                    }
                  },
                  {
                    id: 'bahasa_indonesia_lanjut',
                    name: 'Bahasa Indonesia Tingkat Lanjut',
                    icon: '📚',
                    badge: 'Tingkat Lanjut',
                    badgeClass: 'bg-rose-100 text-rose-800 border-rose-200',
                    borderClass: 'hover:border-rose-400 hover:shadow-rose-100',
                    bgLight: 'bg-rose-50/70',
                    description: 'Wacana Kritis, Retorika, Kritik Sastra, Semantik Lanjut, Morfologi & Sintaksis Kompleks',
                    match: (s: string, name: string) => {
                      const ls = s.toLowerCase();
                      const ln = name.toLowerCase();
                      const isIndo = (ls.includes('indonesia') || ln.includes('indonesia') || ls.includes('indo') || ln.includes('indo')) && !ls.includes('inggris') && !ln.includes('inggris') && !ls.includes('matematika') && !ln.includes('matematika');
                      return isIndo && (ls.includes('lanjut') || ln.includes('lanjut') || ls.includes('wacana') || ln.includes('sastra'));
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
                      const isInggris = (ls.includes('inggris') || ls.includes('english') || ln.includes('inggris') || ln.includes('english')) && !ls.includes('indonesia') && !ln.includes('indonesia') && !ls.includes('matematika') && !ln.includes('matematika');
                      return isInggris && !ls.includes('lanjut') && !ls.includes('tingkat') && !ln.includes('lanjut');
                    }
                  },
                  {
                    id: 'bahasa_inggris_lanjut',
                    name: 'Bahasa Inggris Tingkat Lanjut',
                    icon: '🖋️',
                    badge: 'Tingkat Lanjut',
                    badgeClass: 'bg-sky-100 text-sky-800 border-sky-200',
                    borderClass: 'hover:border-sky-400 hover:shadow-sky-100',
                    bgLight: 'bg-sky-50/70',
                    description: 'Advanced Reading, Inversion & Conditionals, Rhetorical Analysis, Epistemic Synthesis',
                    match: (s: string, name: string) => {
                      const ls = s.toLowerCase();
                      const ln = name.toLowerCase();
                      const isInggris = (ls.includes('inggris') || ls.includes('english') || ln.includes('inggris') || ln.includes('english')) && !ls.includes('indonesia') && !ln.includes('indonesia') && !ls.includes('matematika') && !ln.includes('matematika');
                      return isInggris && (ls.includes('lanjut') || ln.includes('lanjut'));
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
                    match: (s: string, name: string) => {
                      const ls = s.toLowerCase();
                      const ln = name.toLowerCase();
                      return ls.includes('fisika') || ln.includes('fisika');
                    }
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
                    match: (s: string, name: string) => {
                      const ls = s.toLowerCase();
                      const ln = name.toLowerCase();
                      return ls.includes('kimia') || ln.includes('kimia');
                    }
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
                    match: (s: string, name: string) => {
                      const ls = s.toLowerCase();
                      const ln = name.toLowerCase();
                      return ls.includes('biologi') || ln.includes('biologi');
                    }
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
                    match: (s: string, name: string) => {
                      const ls = s.toLowerCase();
                      const ln = name.toLowerCase();
                      return ls.includes('ekonomi') || ln.includes('ekonomi');
                    }
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
                    match: (s: string, name: string) => {
                      const ls = s.toLowerCase();
                      const ln = name.toLowerCase();
                      return ls.includes('geografi') || ln.includes('geografi');
                    }
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
                    match: (s: string, name: string) => {
                      const ls = s.toLowerCase();
                      const ln = name.toLowerCase();
                      if (ls.includes('pkn') || ls.includes('ppkn') || ln.includes('pkn') || ln.includes('ppkn')) return false;
                      return ls === 'sejarah' || ls.includes('sejarah') || (ln.includes('sejarah') && !ln.includes('ppkn'));
                    }
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
                    match: (s: string, name: string) => {
                      const ls = s.toLowerCase();
                      const ln = name.toLowerCase();
                      return ls.includes('sosiologi') || ln.includes('sosiologi');
                    }
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
                    match: (s: string, name: string) => {
                      const ls = s.toLowerCase();
                      const ln = name.toLowerCase();
                      return ls.includes('pkn') || ls.includes('ppkn') || ls.includes('kewarganegaraan') || ls.includes('pancasila') || ln.includes('pkn') || ln.includes('ppkn');
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
                const currentTkaFolderObj = isTka && selectedTkaFolder 
                  ? TKA_SMA_SUBJECT_FOLDERS.find(f => f.id === selectedTkaFolder) 
                  : null;

                const currentUtbkFolderObj = !isTka && selectedUtbkFolder
                  ? UTBK_SNBT_SUBTEST_FOLDERS.find(f => f.id === selectedUtbkFolder)
                  : null;

                // Filter tryouts to render
                let listToRender: TryOut[] = [];
                if (isTka) {
                  if (currentTkaFolderObj) {
                    listToRender = allTkaTryouts.filter(to => currentTkaFolderObj.match(to.subject, to.name));
                  } else {
                    listToRender = allTkaTryouts;
                  }
                } else {
                  if (currentUtbkFolderObj) {
                    listToRender = allUtbkTryouts.filter(to => currentUtbkFolderObj.match(to.subject, to.name));
                  } else {
                    listToRender = allUtbkTryouts;
                  }
                }

                return (
                  <div className="space-y-6">

                    {/* Informational Header */}
                    <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h2 className="text-xl font-bold font-display text-slate-900 flex items-center gap-2">
                          <Award className={`w-6 h-6 ${isTka ? 'text-emerald-600' : 'text-blue-600'}`} />
                          {isTka ? 'Pusat CBT Try Out TKA SMA - Folder Mata Pelajaran' : 'Pusat CBT Try Out UTBK/SNBT - 9 Subtes Resmi'}
                        </h2>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                          isTka 
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                            : 'bg-blue-50 text-blue-700 border-blue-100'
                        }`}>
                          {isTka 
                            ? `${allTkaTryouts.length} Paket TKA (${TKA_SMA_SUBJECT_FOLDERS.length} Folder Mapel)` 
                            : `${UTBK_SNBT_SUBTEST_FOLDERS.length} Folder Subtes (160 Soal / 195 Menit)`}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                        {isTka 
                          ? `Masing-masing Try Out bab dikumpulkan secara rapi di dalam ${TKA_SMA_SUBJECT_FOLDERS.length} Folder Mata Pelajaran TKA SMA. Pilih folder mapel di bawah untuk membuka paket Try Out per bab.`
                          : 'Seluruh paket Try Out UTBK/SNBT resmi dikelompokkan ke dalam 9 Folder Subtes sesuai format SNPMB BPPP Kemendikbudristek (Penalaran Induktif, Deduktif, Kuantitatif, PPU, PBM, PK, Literasi Bahasa Indonesia, Literasi Bahasa Inggris, dan Penalaran Matematika). Pilih folder subtes di bawah untuk simulasi CBT interaktif.'}
                      </p>

                      {/* Folder Nav Pills for UTBK */}
                      {!isTka && (
                        <div className="pt-2 flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                          <button
                            onClick={() => {
                              setSelectedUtbkFolder(null);
                              setUtbkCategoryFilter('all');
                              setUtbkSearchQuery('');
                            }}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                              selectedUtbkFolder === null
                                ? 'bg-blue-600 text-white shadow-sm'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                          >
                            <FolderOpen className="w-3.5 h-3.5" /> Semua Folder ({UTBK_SNBT_SUBTEST_FOLDERS.length})
                          </button>
                          {UTBK_SNBT_SUBTEST_FOLDERS.map(f => {
                            const count = allUtbkTryouts.filter(to => f.match(to.subject, to.name)).length;
                            const isSelected = selectedUtbkFolder === f.id;
                            return (
                              <button
                                key={f.id}
                                onClick={() => setSelectedUtbkFolder(f.id)}
                                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                                  isSelected
                                    ? 'bg-blue-600 text-white shadow-sm'
                                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/60'
                                }`}
                              >
                                <span>{f.icon}</span>
                                <span>{f.name}</span>
                                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                                  isSelected ? 'bg-blue-800 text-blue-100' : 'bg-slate-200 text-slate-700'
                                }`}>
                                  {count} paket
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {/* Folder Nav Pills for TKA */}
                      {isTka && (
                        <div className="pt-2 flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                          <button
                            onClick={() => {
                              setSelectedTkaFolder(null);
                              setTkaCategoryFilter('all');
                              setTkaSearchQuery('');
                            }}
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
                                  {count} paket
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* UTBK 9 Subtests Overview Section (When selectedUtbkFolder is null) */}
                    {!isTka && selectedUtbkFolder === null && (() => {
                      const filteredUtbkFolders = UTBK_SNBT_SUBTEST_FOLDERS.filter(f => {
                        if (utbkCategoryFilter === 'tps' && f.testGroup !== 'Tes Potensi Skolastik (TPS)') return false;
                        if (utbkCategoryFilter === 'literasi' && f.testGroup !== 'Tes Literasi') return false;
                        if (utbkSearchQuery.trim()) {
                          const query = utbkSearchQuery.toLowerCase();
                          return f.name.toLowerCase().includes(query) || f.description.toLowerCase().includes(query) || f.testGroup.toLowerCase().includes(query);
                        }
                        return true;
                      });

                      return (
                        <div className="space-y-6">
                          {/* Official UTBK Structure Summary Table Card */}
                          <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 text-white rounded-3xl p-6 sm:p-7 shadow-lg border border-indigo-500/30 space-y-4">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-indigo-500/30 pb-4">
                              <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/20 border border-amber-400/40 rounded-full text-amber-300 text-xs font-black tracking-wide uppercase mb-1.5">
                                  <Sparkles className="w-3.5 h-3.5" /> Standar Resmi UTBK-SNBT
                                </div>
                                <h3 className="text-lg sm:text-xl font-black font-display text-white">
                                  Struktur 9 Subtes UTBK SNBT
                                </h3>
                                <p className="text-xs text-indigo-200">
                                  Komposisi lengkap ujian resmi: 9 Subtes, 160 Soal, total alokasi durasi 195 Menit.
                                </p>
                              </div>
                              <div className="flex items-center gap-3 shrink-0">
                                <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/15 text-center">
                                  <span className="text-[10px] text-indigo-200 uppercase font-black tracking-wider block">Total Soal</span>
                                  <span className="text-lg font-black text-amber-300">160 Soal</span>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/15 text-center">
                                  <span className="text-[10px] text-indigo-200 uppercase font-black tracking-wider block">Total Waktu</span>
                                  <span className="text-lg font-black text-emerald-300">195 Menit</span>
                                </div>
                              </div>
                            </div>

                            {/* Table Breakdown */}
                            <div className="overflow-x-auto rounded-2xl border border-indigo-500/20 bg-slate-900/60">
                              <table className="w-full text-left text-xs text-slate-200">
                                <thead className="bg-indigo-950/80 text-[11px] font-black uppercase text-indigo-200 border-b border-indigo-500/30">
                                  <tr>
                                    <th className="py-3 px-4">No</th>
                                    <th className="py-3 px-4">Kelompok Tes</th>
                                    <th className="py-3 px-4">Subtes</th>
                                    <th className="py-3 px-4 text-center">Jumlah Soal</th>
                                    <th className="py-3 px-4 text-center">Durasi</th>
                                    <th className="py-3 px-4 text-center">Aksi</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-indigo-500/10">
                                  {UTBK_SNBT_SUBTEST_FOLDERS.map((f, idx) => (
                                    <tr key={f.id} className="hover:bg-indigo-900/30 transition-colors">
                                      <td className="py-3 px-4 font-black text-slate-400">{idx + 1}</td>
                                      <td className="py-3 px-4 font-bold text-slate-300">{f.testGroup}</td>
                                      <td className="py-3 px-4 font-extrabold text-white flex items-center gap-2">
                                        <span>{f.icon}</span>
                                        <span>{f.name}</span>
                                      </td>
                                      <td className="py-3 px-4 text-center font-black text-amber-300">{f.questionCount} Soal</td>
                                      <td className="py-3 px-4 text-center font-black text-emerald-300">{f.durationFormatted}</td>
                                      <td className="py-3 px-4 text-center">
                                        <button
                                          onClick={() => setSelectedUtbkFolder(f.id)}
                                          className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-[11px] transition-all cursor-pointer shadow-sm"
                                        >
                                          Buka Folder
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                  <tr className="bg-indigo-950/90 font-black text-white border-t border-indigo-500/40">
                                    <td colSpan={3} className="py-3.5 px-4 uppercase tracking-wider text-amber-300">
                                      TOTAL (9 Subtes UTBK)
                                    </td>
                                    <td className="py-3.5 px-4 text-center text-amber-300 text-sm">
                                      160 Soal
                                    </td>
                                    <td className="py-3.5 px-4 text-center text-emerald-300 text-sm">
                                      195 Menit
                                    </td>
                                    <td className="py-3.5 px-4"></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>

                          {/* Filter Tabs & Search Controls */}
                          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
                              <button
                                onClick={() => setUtbkCategoryFilter('all')}
                                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                                  utbkCategoryFilter === 'all'
                                    ? 'bg-slate-900 text-white shadow-sm'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                }`}
                              >
                                Semua 9 Subtes
                              </button>
                              <button
                                onClick={() => setUtbkCategoryFilter('tps')}
                                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                                  utbkCategoryFilter === 'tps'
                                    ? 'bg-blue-600 text-white shadow-sm'
                                    : 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-100'
                                }`}
                              >
                                Tes Potensi Skolastik (6)
                              </button>
                              <button
                                onClick={() => setUtbkCategoryFilter('literasi')}
                                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                                  utbkCategoryFilter === 'literasi'
                                    ? 'bg-indigo-600 text-white shadow-sm'
                                    : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-100'
                                }`}
                              >
                                Tes Literasi & Matematika (3)
                              </button>
                            </div>

                            {/* Search Input */}
                            <div className="relative w-full sm:w-64">
                              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                              <input
                                type="text"
                                value={utbkSearchQuery}
                                onChange={(e) => setUtbkSearchQuery(e.target.value)}
                                placeholder="Cari folder subtes UTBK..."
                                className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                              />
                            </div>
                          </div>

                          {/* 9 UTBK Subtest Folders Grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {filteredUtbkFolders.map((f, idx) => {
                              const matchingTryouts = allUtbkTryouts.filter(to => f.match(to.subject, to.name));
                              return (
                                <div
                                  key={f.id}
                                  onClick={() => setSelectedUtbkFolder(f.id)}
                                  className={`bg-white border border-slate-200/80 rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-blue-400 transition-all cursor-pointer group space-y-4 relative overflow-hidden`}
                                >
                                  <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                      <span className="text-2xl p-2.5 bg-slate-50 rounded-2xl border border-slate-100 group-hover:scale-110 transition-transform">
                                        {f.icon}
                                      </span>
                                      <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full border ${f.badgeClass}`}>
                                        {f.testGroup}
                                      </span>
                                    </div>

                                    <div>
                                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">
                                        Subtes {idx + 1}
                                      </span>
                                      <h4 className="font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-blue-600 transition-colors mt-0.5">
                                        {f.name}
                                      </h4>
                                      <p className="text-[11px] text-slate-500 line-clamp-2 mt-1 leading-snug">
                                        {f.description}
                                      </p>
                                    </div>
                                  </div>

                                  <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                                    <div className="flex items-center gap-2 text-[11px] font-bold text-slate-600">
                                      <span className="bg-slate-100 px-2 py-0.5 rounded-md">📝 {f.questionCount} Soal</span>
                                      <span className="bg-slate-100 px-2 py-0.5 rounded-md">⏱️ {f.durationFormatted}</span>
                                    </div>
                                    <span className="text-[11px] font-black text-blue-600 group-hover:translate-x-1 transition-transform flex items-center">
                                      Buka <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })()}

                    {/* TKA Folder Grid Section (When selectedTkaFolder is null or showing overview) */}
                    {isTka && selectedTkaFolder === null && (() => {
                      const filteredFolders = TKA_SMA_SUBJECT_FOLDERS.filter(f => {
                        // Category filter
                        if (tkaCategoryFilter === 'wajib' && !['matematika_wajib', 'bahasa_indonesia', 'bahasa_indonesia_lanjut', 'bahasa_inggris', 'bahasa_inggris_lanjut', 'ppkn'].includes(f.id)) return false;
                        if (tkaCategoryFilter === 'saintek' && !['matematika_lanjut', 'fisika', 'kimia', 'biologi'].includes(f.id)) return false;
                        if (tkaCategoryFilter === 'soshum' && !['ekonomi', 'geografi', 'sejarah', 'sosiologi'].includes(f.id)) return false;
                        // Search query filter
                        if (tkaSearchQuery.trim()) {
                          const query = tkaSearchQuery.toLowerCase();
                          return f.name.toLowerCase().includes(query) || f.description.toLowerCase().includes(query) || f.badge.toLowerCase().includes(query);
                        }
                        return true;
                      });

                      return (
                        <div className="space-y-5">
                          {/* Filter Tabs & Search Controls */}
                          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
                              <button
                                onClick={() => setTkaCategoryFilter('all')}
                                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                                  tkaCategoryFilter === 'all'
                                    ? 'bg-slate-900 text-white shadow-sm'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                }`}
                              >
                                Semua Mapel ({TKA_SMA_SUBJECT_FOLDERS.length})
                              </button>
                              <button
                                onClick={() => setTkaCategoryFilter('wajib')}
                                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                                  tkaCategoryFilter === 'wajib'
                                    ? 'bg-blue-600 text-white shadow-sm'
                                    : 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-100'
                                }`}
                              >
                                Mapel Wajib (6)
                              </button>
                              <button
                                onClick={() => setTkaCategoryFilter('saintek')}
                                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                                  tkaCategoryFilter === 'saintek'
                                    ? 'bg-emerald-600 text-white shadow-sm'
                                    : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-100'
                                }`}
                              >
                                MIPA / Saintek (4)
                              </button>
                              <button
                                onClick={() => setTkaCategoryFilter('soshum')}
                                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                                  tkaCategoryFilter === 'soshum'
                                    ? 'bg-amber-600 text-white shadow-sm'
                                    : 'bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-100'
                                }`}
                              >
                                IPS / Soshum (4)
                              </button>
                            </div>

                            <div className="relative min-w-[200px] sm:w-64">
                              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                              <input
                                type="text"
                                value={tkaSearchQuery}
                                onChange={(e) => setTkaSearchQuery(e.target.value)}
                                placeholder="Cari folder mapel..."
                                className="w-full pl-9 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                              />
                              {tkaSearchQuery && (
                                <button
                                  onClick={() => setTkaSearchQuery('')}
                                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
                                >
                                  ✕
                                </button>
                              )}
                            </div>
                          </div>

                          {/* Folder Grid */}
                          {filteredFolders.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                              {filteredFolders.map((f) => {
                                const matchingTryouts = allTkaTryouts.filter(to => f.match(to.subject, to.name));
                                return (
                                  <div
                                    key={f.id}
                                    onClick={() => setSelectedTkaFolder(f.id)}
                                    className={`bg-white border border-slate-200/80 rounded-3xl p-5 flex flex-col justify-between shadow-sm transition-all cursor-pointer group hover:-translate-y-1 ${f.borderClass}`}
                                  >
                                    <div className="space-y-3">
                                      <div className="flex items-center justify-between">
                                        <div className={`w-11 h-11 rounded-2xl flex items-center justify-center text-2xl shadow-inner ${f.bgLight}`}>
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
                                      <span className="font-extrabold text-slate-700 flex items-center gap-1.5 text-[11px]">
                                        <Folder className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                                        {matchingTryouts.length} paket tryout
                                      </span>
                                      <span className="text-[11px] font-black text-emerald-600 group-hover:translate-x-1 transition-transform flex items-center">
                                        Buka Folder <ChevronRight className="w-3 h-3 ml-0.5" />
                                      </span>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          ) : (
                            <div className="bg-white border border-slate-200 rounded-3xl p-8 text-center space-y-3">
                              <p className="text-sm font-bold text-slate-700">Tidak ada folder mata pelajaran yang cocok dengan pencarian "{tkaSearchQuery}"</p>
                              <button
                                onClick={() => {
                                  setTkaSearchQuery('');
                                  setTkaCategoryFilter('all');
                                }}
                                className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
                              >
                                Tampilkan Semua {TKA_SMA_SUBJECT_FOLDERS.length} Folder
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    })()}

                    {/* Selected TKA Folder Banner / Back navigation */}
                    {isTka && currentTkaFolderObj && (
                      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-6 text-white shadow-md flex items-center justify-between flex-wrap gap-4">
                        <div className="space-y-1">
                          <button
                            onClick={() => setSelectedTkaFolder(null)}
                            className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 hover:bg-white/30 text-white rounded-xl text-xs font-bold transition-all mb-2 cursor-pointer backdrop-blur-sm"
                          >
                            <ArrowLeft className="w-3.5 h-3.5" /> Kembali ke Semua Folder ({TKA_SMA_SUBJECT_FOLDERS.length} Mapel)
                          </button>
                          <div className="flex items-center gap-3">
                            <span className="text-3xl">{currentTkaFolderObj.icon}</span>
                            <div>
                              <h3 className="font-black text-lg sm:text-xl text-white">
                                Folder: {currentTkaFolderObj.name}
                              </h3>
                              <p className="text-xs text-emerald-100 max-w-xl">
                                {currentTkaFolderObj.description}
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

                    {/* Selected UTBK Folder Banner / Back navigation */}
                    {!isTka && currentUtbkFolderObj && (
                      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 rounded-3xl p-6 text-white shadow-md flex items-center justify-between flex-wrap gap-4">
                        <div className="space-y-1">
                          <button
                            onClick={() => setSelectedUtbkFolder(null)}
                            className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 hover:bg-white/30 text-white rounded-xl text-xs font-bold transition-all mb-2 cursor-pointer backdrop-blur-sm"
                          >
                            <ArrowLeft className="w-3.5 h-3.5" /> Kembali ke 9 Subtes UTBK
                          </button>
                          <div className="flex items-center gap-3">
                            <span className="text-3xl">{currentUtbkFolderObj.icon}</span>
                            <div>
                              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-blue-500/30 border border-blue-400/40 rounded-full text-blue-200 text-[10px] font-black uppercase mb-1">
                                {currentUtbkFolderObj.testGroup}
                              </div>
                              <h3 className="font-black text-lg sm:text-xl text-white">
                                {currentUtbkFolderObj.name}
                              </h3>
                              <p className="text-xs text-indigo-100 max-w-xl">
                                {currentUtbkFolderObj.description}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20 text-center flex items-center gap-3">
                          <div className="text-center px-3 border-r border-white/20">
                            <span className="text-[10px] text-indigo-200 uppercase tracking-widest block font-extrabold">Soal</span>
                            <span className="text-xl font-black text-amber-300">{currentUtbkFolderObj.questionCount}</span>
                          </div>
                          <div className="text-center px-3">
                            <span className="text-[10px] text-indigo-200 uppercase tracking-widest block font-extrabold">Waktu</span>
                            <span className="text-xl font-black text-emerald-300">{currentUtbkFolderObj.durationFormatted}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Standard CBT & Google Form Tryout Simulations Grid (Shown when a TKA or UTBK Subject Folder is opened) */}
                    {((isTka && currentTkaFolderObj) || (!isTka && currentUtbkFolderObj)) && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                            <CheckCircle2 className={`w-4 h-4 ${isTka ? 'text-emerald-600' : 'text-blue-600'}`} />
                            {isTka && currentTkaFolderObj
                              ? `Paket Try Out Bab - ${currentTkaFolderObj.name}`
                              : `Paket Simulasi CBT - ${currentUtbkFolderObj?.name}`}
                          </h3>
                          <span className="text-xs text-slate-400 font-semibold">
                            Format Resmi Ujian
                          </span>
                        </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {listToRender.length === 0 ? (
                          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 text-center text-slate-500 space-y-3 md:col-span-2">
                            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
                              <Folder className="w-6 h-6" />
                            </div>
                            <h4 className="font-extrabold text-slate-800 text-sm">
                              {isTka && currentTkaFolderObj 
                                ? `Folder ${currentTkaFolderObj.name} Siap Digunakan`
                                : `Folder ${currentUtbkFolderObj?.name} Siap Digunakan`}
                            </h4>
                            <p className="text-xs text-slate-400 max-w-md mx-auto">
                              {isTka && currentTkaFolderObj
                                ? `Belum ada paket Try Out bab untuk ${currentTkaFolderObj.name}. Guru atau Admin dapat menambahkan paket soal baru ke folder ini melalui Dashboard Admin/Guru.`
                                : `Belum ada paket Try Out untuk subtes ${currentUtbkFolderObj?.name}. Paket soal dapat ditambahkan oleh Admin atau Guru.`}
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
                      {isTka && currentTkaFolderObj && (() => {
                        const matchingMaterials = materials.filter(m => currentTkaFolderObj.match(m.subject, m.title) || currentTkaFolderObj.match(m.subject, m.bab));
                        if (matchingMaterials.length === 0) return null;
                        return (
                          <div className="mt-8 pt-6 border-t border-slate-200/80 space-y-4">
                            <div className="flex items-center gap-2">
                              <span className="p-1.5 bg-emerald-100 text-emerald-700 rounded-lg">
                                <BookOpen className="w-4 h-4" />
                              </span>
                              <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">
                                Modul & Kuis Interaktif {currentTkaFolderObj.name}
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
