/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question, TryOut } from '../types';

export interface UtbkSubtestFolder {
  id: string;
  name: string;
  shortName: string;
  testGroup: 'Tes Potensi Skolastik (TPS)' | 'Tes Literasi';
  groupShort: 'TPS' | 'Literasi';
  subtesNumber: number;
  questionCount: number;
  duration: number; // in minutes (integer for timer calculation, e.g. 43 for 42.5 min)
  durationMinutes: number; // exact numeric (e.g. 42.5)
  durationFormatted: string; // '10 menit', '15 menit', '20 menit', '25 menit', '42,5 menit'
  icon: string;
  badge: string;
  badgeClass: string;
  borderClass: string;
  bgLight: string;
  accentColor: string;
  description: string;
  focusSummary: string;
  topics: string[];
  match: (subject: string, name: string) => boolean;
}

export const UTBK_SNBT_SUBTEST_FOLDERS: UtbkSubtestFolder[] = [
  {
    id: 'penalaran_induktif',
    name: 'Penalaran Induktif',
    shortName: 'Induktif',
    testGroup: 'Tes Potensi Skolastik (TPS)',
    groupShort: 'TPS',
    subtesNumber: 1,
    questionCount: 10,
    duration: 10,
    durationMinutes: 10,
    durationFormatted: '10 menit',
    icon: '🧩',
    badge: 'TPS • 10 Soal • 10 Mnt',
    badgeClass: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    borderClass: 'hover:border-indigo-400 hover:shadow-indigo-100',
    bgLight: 'bg-indigo-50/70',
    accentColor: '#4f46e5',
    description: 'Menguji kemampuan mengamati fakta, pola fenomena, analogi kasus, kesesuaian pernyataan, dan penarikan kesimpulan induktif probabilistik.',
    focusSummary: 'Kesesuaian Paragraf, Analogi Induktif, Generalisasi Data & Sebab-Akibat',
    topics: ['Kesesuaian Pernyataan dengan Teks/Data', 'Simpulan Induktif', 'Hubungan Kausalitas / Sebab Akibat', 'Analogi & Perbandingan Fenomena'],
    match: (s: string, name: string) => {
      const ls = (s || '').toLowerCase();
      const ln = (name || '').toLowerCase();
      return ls.includes('induktif') || ln.includes('induktif');
    }
  },
  {
    id: 'penalaran_deduktif',
    name: 'Penalaran Deduktif',
    shortName: 'Deduktif',
    testGroup: 'Tes Potensi Skolastik (TPS)',
    groupShort: 'TPS',
    subtesNumber: 2,
    questionCount: 10,
    duration: 10,
    durationMinutes: 10,
    durationFormatted: '10 menit',
    icon: '🧠',
    badge: 'TPS • 10 Soal • 10 Mnt',
    badgeClass: 'bg-blue-100 text-blue-800 border-blue-200',
    borderClass: 'hover:border-blue-400 hover:shadow-blue-100',
    bgLight: 'bg-blue-50/70',
    accentColor: '#2563eb',
    description: 'Menguji ketepatan logika formal, silogisme, hukum kontraposisi, modus ponens & tollens, serta analisis penalaran analitis/posisi tempat.',
    focusSummary: 'Silogisme Kategorial, Modus Ponens/Tollens & Logika Posisi/Urutan',
    topics: ['Silogisme Standar & Negasi', 'Modus Ponens & Modus Tollens', 'Penalaran Analitis (Urutan & Posisi)', 'Penarikan Simpulan Mutlak'],
    match: (s: string, name: string) => {
      const ls = (s || '').toLowerCase();
      const ln = (name || '').toLowerCase();
      return ls.includes('deduktif') || ln.includes('deduktif');
    }
  },
  {
    id: 'penalaran_kuantitatif',
    name: 'Penalaran Kuantitatif',
    shortName: 'Penalaran Kuant.',
    testGroup: 'Tes Potensi Skolastik (TPS)',
    groupShort: 'TPS',
    subtesNumber: 3,
    questionCount: 10,
    duration: 10,
    durationMinutes: 10,
    durationFormatted: '10 menit',
    icon: '🔢',
    badge: 'TPS • 10 Soal • 10 Mnt',
    badgeClass: 'bg-violet-100 text-violet-800 border-violet-200',
    borderClass: 'hover:border-violet-400 hover:shadow-violet-100',
    bgLight: 'bg-violet-50/70',
    accentColor: '#7c3aed',
    description: 'Menguji penalaran logika angka, pola deret berulang, manipulasi variabel, perbandingan nilai aljabar, dan interpretasi grafik cepat.',
    focusSummary: 'Deret & Pola Angka Logis, Hubungan Variabel & Estimasi Numerik Cepat',
    topics: ['Pola Barisan Bilangan & Huruf', 'Operasi Aritmetika Logis', 'Proporsi & Perbandingan Rasio', 'Interpretasi Tabel & Diagram'],
    match: (s: string, name: string) => {
      const ls = (s || '').toLowerCase();
      const ln = (name || '').toLowerCase();
      return ls.includes('penalaran kuantitatif') || ln.includes('penalaran kuantitatif') || (ls.includes('kuantitatif') && ls.includes('penalaran')) || (ln.includes('kuantitatif') && ln.includes('penalaran'));
    }
  },
  {
    id: 'pengetahuan_pemahaman_umum',
    name: 'Pengetahuan dan Pemahaman Umum (PPU)',
    shortName: 'PPU',
    testGroup: 'Tes Potensi Skolastik (TPS)',
    groupShort: 'TPS',
    subtesNumber: 4,
    questionCount: 20,
    duration: 15,
    durationMinutes: 15,
    durationFormatted: '15 menit',
    icon: '📖',
    badge: 'TPS • 20 Soal • 15 Mnt',
    badgeClass: 'bg-amber-100 text-amber-800 border-amber-200',
    borderClass: 'hover:border-amber-400 hover:shadow-amber-100',
    bgLight: 'bg-amber-50/70',
    accentColor: '#d97706',
    description: 'Menguji perbendaharaan kosakata tingkat tinggi, padanan & lawan kata kontekstual, makna kiasan, simpulan wacana, dan relasi antargagasan.',
    focusSummary: 'Makna Kata Kontekstual, Hubungan Antarparagraf, Asosiasi Makna & Ide Pokok',
    topics: ['Sinonim & Antonim Kontekstual', 'Makna Frasa & Istilah Khusus', 'Kepaduan Gagasan Antarparagraf', 'Sikap / Nada Penulis dalam Wacana'],
    match: (s: string, name: string) => {
      const ls = (s || '').toLowerCase();
      const ln = (name || '').toLowerCase();
      return ls.includes('ppu') || ln.includes('ppu') || ls.includes('pemahaman umum') || ln.includes('pemahaman umum') || (ls.includes('pengetahuan') && ls.includes('umum'));
    }
  },
  {
    id: 'pemahaman_bacaan_menulis',
    name: 'Pemahaman Bacaan dan Menulis (PBM)',
    shortName: 'PBM',
    testGroup: 'Tes Potensi Skolastik (TPS)',
    groupShort: 'TPS',
    subtesNumber: 5,
    questionCount: 20,
    duration: 25,
    durationMinutes: 25,
    durationFormatted: '25 menit',
    icon: '✍️',
    badge: 'TPS • 20 Soal • 25 Mnt',
    badgeClass: 'bg-rose-100 text-rose-800 border-rose-200',
    borderClass: 'hover:border-rose-400 hover:shadow-rose-100',
    bgLight: 'bg-rose-50/70',
    accentColor: '#e11d48',
    description: 'Menguji kaidah Ejaan Yang Disempurnakan (EYD V), struktur kalimat efektif, konjungsi intrakalimat/antarkalimat, dan pembentukan kata baku.',
    focusSummary: 'Pedoman EYD V, Kalimat Efektif (SPOK), Konjungsi & Perbaikan Paragraf',
    topics: ['Tanda Baca & Huruf Kapital EYD V', 'Kalimat Efektif & Tidak Rancu', 'Konjungsi Intrakalimat & Antarkalimat', 'Afiksasi & Pembentukan Istilah Baku'],
    match: (s: string, name: string) => {
      const ls = (s || '').toLowerCase();
      const ln = (name || '').toLowerCase();
      return ls.includes('pbm') || ln.includes('pbm') || ls.includes('bacaan dan menulis') || ln.includes('bacaan dan menulis') || (ls.includes('bacaan') && ls.includes('menulis'));
    }
  },
  {
    id: 'pengetahuan_kuantitatif',
    name: 'Pengetahuan Kuantitatif (PK)',
    shortName: 'PK',
    testGroup: 'Tes Potensi Skolastik (TPS)',
    groupShort: 'TPS',
    subtesNumber: 6,
    questionCount: 20,
    duration: 20,
    durationMinutes: 20,
    durationFormatted: '20 menit',
    icon: '📊',
    badge: 'TPS • 20 Soal • 20 Mnt',
    badgeClass: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    borderClass: 'hover:border-cyan-400 hover:shadow-cyan-100',
    bgLight: 'bg-cyan-50/70',
    accentColor: '#0891b2',
    description: 'Menguji penguasaan konsep matematika dasar: aljabar, sistem persamaan, geometri bidang/ruang, statistika, perbandingan nilai P vs Q, dan kecukupan data.',
    focusSummary: 'Kecukupan Data (1)(2), Perbandingan Kuantitas P vs Q & Aljabar Dasar',
    topics: ['Soal Tipe Kecukupan Data (1) & (2)', 'Soal Tipe Perbandingan Hubungan P vs Q', 'Sistem Persamaan Linier/Kuadrat', 'Geometri, Peluang & Statistika'],
    match: (s: string, name: string) => {
      const ls = (s || '').toLowerCase();
      const ln = (name || '').toLowerCase();
      const isPk = (ls.includes('pengetahuan kuantitatif') || ln.includes('pengetahuan kuantitatif') || ls === 'pk' || ln.includes(' pk ') || ln.endsWith(' pk') || ln.startsWith('pk '));
      return isPk && !ls.includes('penalaran kuantitatif');
    }
  },
  {
    id: 'literasi_bahasa_indonesia',
    name: 'Literasi dalam Bahasa Indonesia',
    shortName: 'Literasi Indo',
    testGroup: 'Tes Literasi',
    groupShort: 'Literasi',
    subtesNumber: 7,
    questionCount: 30,
    duration: 43,
    durationMinutes: 42.5,
    durationFormatted: '42,5 menit',
    icon: '🇮🇩',
    badge: 'Literasi • 30 Soal • 42,5 Mnt',
    badgeClass: 'bg-red-100 text-red-800 border-red-200',
    borderClass: 'hover:border-red-400 hover:shadow-red-100',
    bgLight: 'bg-red-50/70',
    accentColor: '#dc2626',
    description: 'Menguji kemampuan membaca mendalam, mengevaluasi fakta versus opini, merefleksi teks wacana panjang, sintesis lintas wacana, dan interpretasi grafik/tabel.',
    focusSummary: 'Analisis Wacana Kritis, Sintesis Multiteks, Penilaian Argumen & Refleksi',
    topics: ['Memahami Teks Saintifik & Humaniora', 'Mengevaluasi dan Merefleksi Isi Teks', 'Menyimpulkan Hubungan Sebab-Akibat Kompleks', 'Menganalisis Grafik, Tabel, dan Infografis'],
    match: (s: string, name: string) => {
      const ls = (s || '').toLowerCase();
      const ln = (name || '').toLowerCase();
      return (ls.includes('literasi') && (ls.includes('indonesia') || ln.includes('indonesia'))) || (ln.includes('literasi') && ln.includes('indonesia')) || (ls.includes('literasi bahasa indonesia') || ln.includes('literasi bahasa indonesia'));
    }
  },
  {
    id: 'literasi_bahasa_inggris',
    name: 'Literasi dalam Bahasa Inggris',
    shortName: 'Literasi English',
    testGroup: 'Tes Literasi',
    groupShort: 'Literasi',
    subtesNumber: 8,
    questionCount: 20,
    duration: 20,
    durationMinutes: 20,
    durationFormatted: '20 menit',
    icon: '🇬🇧',
    badge: 'Literasi • 20 Soal • 20 Mnt',
    badgeClass: 'bg-teal-100 text-teal-800 border-teal-200',
    borderClass: 'hover:border-teal-400 hover:shadow-teal-100',
    bgLight: 'bg-teal-50/70',
    accentColor: '#0d9488',
    description: 'Menguji pemahaman teks wacana akademis berbahasa Inggris: general overview, primary purpose, tone/attitude, specific details, inferences, and vocabulary.',
    focusSummary: 'Academic Reading Comprehension, Author Purpose, Inference & Restatement',
    topics: ['Main Idea & Author Stance / Tone', 'Inference & Logical Deduction from Text', 'Vocabulary in Academic Context', 'Supporting Evidence & Comparative Passages'],
    match: (s: string, name: string) => {
      const ls = (s || '').toLowerCase();
      const ln = (name || '').toLowerCase();
      return (ls.includes('literasi') && (ls.includes('inggris') || ls.includes('english') || ln.includes('inggris') || ln.includes('english'))) || (ln.includes('literasi') && ln.includes('inggris')) || (ls.includes('literasi bahasa inggris') || ln.includes('literasi bahasa inggris'));
    }
  },
  {
    id: 'penalaran_matematika',
    name: 'Penalaran Matematika',
    shortName: 'Penalaran MTK',
    testGroup: 'Tes Literasi',
    groupShort: 'Literasi',
    subtesNumber: 9,
    questionCount: 20,
    duration: 43,
    durationMinutes: 42.5,
    durationFormatted: '42,5 menit',
    icon: '📐',
    badge: 'Literasi • 20 Soal • 42,5 Mnt',
    badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    borderClass: 'hover:border-emerald-400 hover:shadow-emerald-100',
    bgLight: 'bg-emerald-50/70',
    accentColor: '#059669',
    description: 'Menguji penalaran matematis dalam konteks kehidupan nyata: pemodelan aljabar terapan, geometri arsitektur, optimasi fungsi, statistika finansial, dan peluang kontekstual.',
    focusSummary: 'Pemodelan Soal Cerita Nyata, Optimasi Finansial & Geometri Kontekstual',
    topics: ['Pemodelan Aljabar pada Kasus Nyata', 'Aritmetika Sosial & Pengambilan Keputusan Finansial', 'Geometri Terapan & Pengukuran Ruang', 'Statistika Terapan, Peluang & Prediksi Tren'],
    match: (s: string, name: string) => {
      const ls = (s || '').toLowerCase();
      const ln = (name || '').toLowerCase();
      return (ls.includes('penalaran') && (ls.includes('matematika') || ls.includes('mtk'))) || (ln.includes('penalaran') && (ln.includes('matematika') || ln.includes('mtk'))) || (ls.includes('penalaran matematika') || ln.includes('penalaran matematika'));
    }
  }
];

export const UTBK_TOTAL_SUMMARY = {
  totalSubtests: 9,
  totalQuestions: 160,
  totalDurationMinutes: 195,
  totalDurationFormatted: '195 Menit (3 Jam 15 Menit)',
  groups: [
    {
      groupName: 'Tes Potensi Skolastik (TPS)',
      subtestCount: 6,
      questionCount: 90,
      durationMinutes: 90,
      description: 'Mengukur kemampuan kognitif logis, verbal, analitis, dan numerik dasar yang fundamental untuk studi di perguruan tinggi.'
    },
    {
      groupName: 'Tes Literasi',
      subtestCount: 3,
      questionCount: 70,
      durationMinutes: 105,
      description: 'Mengukur kecakapan bernalar mendalam menggunakan teks literasi (B. Indonesia & B. Inggris) dan penalaran matematika kontekstual.'
    }
  ]
};

export const INITIAL_UTBK_TRYOUTS: TryOut[] = [
  {
    id: 'to-utbk-penalaran-induktif-2026',
    name: 'Try Out CBT UTBK: Penalaran Induktif (10 Soal • 10 Menit)',
    duration: 10,
    passingGrade: 650,
    questionCount: 10,
    subject: 'Penalaran Induktif',
    category: 'UTBK',
    randomizeQuestions: false,
    randomizeOptions: false,
    startDate: '2026-07-01',
    endDate: '2026-12-31',
    solvedCount: 624
  },
  {
    id: 'to-utbk-penalaran-deduktif-2026',
    name: 'Try Out CBT UTBK: Penalaran Deduktif (10 Soal • 10 Menit)',
    duration: 10,
    passingGrade: 650,
    questionCount: 10,
    subject: 'Penalaran Deduktif',
    category: 'UTBK',
    randomizeQuestions: false,
    randomizeOptions: false,
    startDate: '2026-07-01',
    endDate: '2026-12-31',
    solvedCount: 589
  },
  {
    id: 'to-utbk-penalaran-kuantitatif-2026',
    name: 'Try Out CBT UTBK: Penalaran Kuantitatif (10 Soal • 10 Menit)',
    duration: 10,
    passingGrade: 650,
    questionCount: 10,
    subject: 'Penalaran Kuantitatif',
    category: 'UTBK',
    randomizeQuestions: false,
    randomizeOptions: false,
    startDate: '2026-07-01',
    endDate: '2026-12-31',
    solvedCount: 712
  },
  {
    id: 'to-utbk-ppu-2026',
    name: 'Try Out CBT UTBK: Pengetahuan dan Pemahaman Umum - PPU (20 Soal • 15 Menit)',
    duration: 15,
    passingGrade: 650,
    questionCount: 20,
    subject: 'Pengetahuan dan Pemahaman Umum (PPU)',
    category: 'UTBK',
    randomizeQuestions: false,
    randomizeOptions: false,
    startDate: '2026-07-01',
    endDate: '2026-12-31',
    solvedCount: 840
  },
  {
    id: 'to-utbk-pbm-2026',
    name: 'Try Out CBT UTBK: Pemahaman Bacaan dan Menulis - PBM (20 Soal • 25 Menit)',
    duration: 25,
    passingGrade: 650,
    questionCount: 20,
    subject: 'Pemahaman Bacaan dan Menulis (PBM)',
    category: 'UTBK',
    randomizeQuestions: false,
    randomizeOptions: false,
    startDate: '2026-07-01',
    endDate: '2026-12-31',
    solvedCount: 795
  },
  {
    id: 'to-utbk-pk-2026',
    name: 'Try Out CBT UTBK: Pengetahuan Kuantitatif - PK (20 Soal • 20 Menit)',
    duration: 20,
    passingGrade: 650,
    questionCount: 20,
    subject: 'Pengetahuan Kuantitatif (PK)',
    category: 'UTBK',
    randomizeQuestions: false,
    randomizeOptions: false,
    startDate: '2026-07-01',
    endDate: '2026-12-31',
    solvedCount: 915
  },
  {
    id: 'to-utbk-literasi-indonesia-2026',
    name: 'Try Out CBT UTBK: Literasi dalam Bahasa Indonesia (30 Soal • 42,5 Menit)',
    duration: 43,
    passingGrade: 650,
    questionCount: 30,
    subject: 'Literasi dalam Bahasa Indonesia',
    category: 'UTBK',
    randomizeQuestions: false,
    randomizeOptions: false,
    startDate: '2026-07-01',
    endDate: '2026-12-31',
    solvedCount: 680
  },
  {
    id: 'to-utbk-literasi-inggris-2026',
    name: 'Try Out CBT UTBK: Literasi dalam Bahasa Inggris (20 Soal • 20 Menit)',
    duration: 20,
    passingGrade: 650,
    questionCount: 20,
    subject: 'Literasi dalam Bahasa Inggris',
    category: 'UTBK',
    randomizeQuestions: false,
    randomizeOptions: false,
    startDate: '2026-07-01',
    endDate: '2026-12-31',
    solvedCount: 540
  },
  {
    id: 'to-utbk-penalaran-matematika-2026',
    name: 'Try Out CBT UTBK: Penalaran Matematika (20 Soal • 42,5 Menit)',
    duration: 43,
    passingGrade: 650,
    questionCount: 20,
    subject: 'Penalaran Matematika',
    category: 'UTBK',
    randomizeQuestions: false,
    randomizeOptions: false,
    startDate: '2026-07-01',
    endDate: '2026-12-31',
    solvedCount: 775
  }
];
