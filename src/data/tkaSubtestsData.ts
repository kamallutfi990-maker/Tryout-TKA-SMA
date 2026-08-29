/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TryOut } from '../types';

export interface TkaPackage {
  id: string;
  name: string;
  badge: string;
  description: string;
  mapelCount: number;
  totalQuestions: number;
  totalDurationMinutes: number;
  totalDurationFormatted: string;
  year: number;
  status: 'Tersedia' | 'Segera Hadir';
}

export interface TkaSubjectFolder {
  id: string;
  name: string;
  icon: string;
  badge: 'Wajib' | 'MIPA / Saintek' | 'IPS / Soshum' | 'Tingkat Lanjut';
  categoryGroup: 'wajib' | 'saintek' | 'soshum';
  badgeClass: string;
  borderClass: string;
  bgLight: string;
  description: string;
  questionCount: number;
  durationMinutes: number;
  match: (subject: string, name: string) => boolean;
}

export const TKA_SMA_SUBJECT_FOLDERS_DATA: TkaSubjectFolder[] = [
  {
    id: 'matematika_wajib',
    name: 'Matematika Wajib',
    icon: '📐',
    badge: 'Wajib',
    categoryGroup: 'wajib',
    badgeClass: 'bg-blue-100 text-blue-800 border-blue-200',
    borderClass: 'hover:border-blue-400 hover:shadow-blue-100',
    bgLight: 'bg-blue-50/70',
    description: 'Aritmetika, Aljabar, Trigonometri Dasar, Fungsi, Statistika & Peluang',
    questionCount: 20,
    durationMinutes: 45,
    match: (s: string, name: string) => {
      const ls = (s || '').toLowerCase();
      const ln = (name || '').toLowerCase();
      const isMath = (ls.includes('matematika') || ls.includes('mtk') || ln.includes('matematika') || ln.includes('mtk')) && !ls.includes('indonesia') && !ls.includes('inggris') && !ln.includes('indonesia') && !ln.includes('inggris');
      return isMath && (ls.includes('wajib') || ls.includes('umum') || (!ls.includes('lanjut') && !ls.includes('tingkat') && !ln.includes('lanjut')));
    }
  },
  {
    id: 'matematika_lanjut',
    name: 'Matematika Tingkat Lanjut',
    icon: '♾️',
    badge: 'Tingkat Lanjut',
    categoryGroup: 'saintek',
    badgeClass: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    borderClass: 'hover:border-indigo-400 hover:shadow-indigo-100',
    bgLight: 'bg-indigo-50/70',
    description: 'Kalkulus, Turunan Fungsi, Integral, Matriks, Polinomial, Vektor',
    questionCount: 20,
    durationMinutes: 45,
    match: (s: string, name: string) => {
      const ls = (s || '').toLowerCase();
      const ln = (name || '').toLowerCase();
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
    categoryGroup: 'wajib',
    badgeClass: 'bg-red-100 text-red-800 border-red-200',
    borderClass: 'hover:border-red-400 hover:shadow-red-100',
    bgLight: 'bg-red-50/70',
    description: 'Teks Argumentasi, Ide Pokok, PUEBI/EYD, Kalimat Efektif, Opini & Fakta, Literasi',
    questionCount: 20,
    durationMinutes: 45,
    match: (s: string, name: string) => {
      const ls = (s || '').toLowerCase();
      const ln = (name || '').toLowerCase();
      const isIndo = (ls.includes('indonesia') || ln.includes('indonesia') || ls.includes('indo') || ln.includes('indo')) && !ls.includes('inggris') && !ln.includes('inggris') && !ls.includes('matematika') && !ln.includes('matematika');
      return isIndo && !ls.includes('lanjut') && !ls.includes('tingkat') && !ln.includes('lanjut');
    }
  },
  {
    id: 'bahasa_indonesia_lanjut',
    name: 'Bahasa Indonesia Tingkat Lanjut',
    icon: '📚',
    badge: 'Tingkat Lanjut',
    categoryGroup: 'wajib',
    badgeClass: 'bg-rose-100 text-rose-800 border-rose-200',
    borderClass: 'hover:border-rose-400 hover:shadow-rose-100',
    bgLight: 'bg-rose-50/70',
    description: 'Wacana Kritis, Retorika, Kritik Sastra, Semantik Lanjut, Morfologi & Sintaksis Kompleks',
    questionCount: 10,
    durationMinutes: 45,
    match: (s: string, name: string) => {
      const ls = (s || '').toLowerCase();
      const ln = (name || '').toLowerCase();
      const isIndo = (ls.includes('indonesia') || ln.includes('indonesia') || ls.includes('indo') || ln.includes('indo')) && !ls.includes('inggris') && !ln.includes('inggris') && !ls.includes('matematika') && !ln.includes('matematika');
      return isIndo && (ls.includes('lanjut') || ln.includes('lanjut') || ls.includes('wacana') || ln.includes('sastra'));
    }
  },
  {
    id: 'bahasa_inggris',
    name: 'Bahasa Inggris',
    icon: '🇬🇧',
    badge: 'Wajib',
    categoryGroup: 'wajib',
    badgeClass: 'bg-blue-100 text-blue-800 border-blue-200',
    borderClass: 'hover:border-blue-400 hover:shadow-blue-100',
    bgLight: 'bg-blue-50/70',
    description: 'Reading Comprehension, Main Idea, Inference, Vocabulary in Context, Grammar',
    questionCount: 20,
    durationMinutes: 45,
    match: (s: string, name: string) => {
      const ls = (s || '').toLowerCase();
      const ln = (name || '').toLowerCase();
      const isInggris = (ls.includes('inggris') || ls.includes('english') || ln.includes('inggris') || ln.includes('english')) && !ls.includes('indonesia') && !ln.includes('indonesia') && !ls.includes('matematika') && !ln.includes('matematika');
      return isInggris && !ls.includes('lanjut') && !ls.includes('tingkat') && !ln.includes('lanjut');
    }
  },
  {
    id: 'bahasa_inggris_lanjut',
    name: 'Bahasa Inggris Tingkat Lanjut',
    icon: '🖋️',
    badge: 'Tingkat Lanjut',
    categoryGroup: 'wajib',
    badgeClass: 'bg-sky-100 text-sky-800 border-sky-200',
    borderClass: 'hover:border-sky-400 hover:shadow-sky-100',
    bgLight: 'bg-sky-50/70',
    description: 'Advanced Reading, Inversion & Conditionals, Rhetorical Analysis, Epistemic Synthesis',
    questionCount: 20,
    durationMinutes: 45,
    match: (s: string, name: string) => {
      const ls = (s || '').toLowerCase();
      const ln = (name || '').toLowerCase();
      const isInggris = (ls.includes('inggris') || ls.includes('english') || ln.includes('inggris') || ln.includes('english')) && !ls.includes('indonesia') && !ln.includes('indonesia') && !ls.includes('matematika') && !ln.includes('matematika');
      return isInggris && (ls.includes('lanjut') || ln.includes('lanjut'));
    }
  },
  {
    id: 'fisika',
    name: 'Fisika',
    icon: '⚡',
    badge: 'MIPA / Saintek',
    categoryGroup: 'saintek',
    badgeClass: 'bg-amber-100 text-amber-800 border-amber-200',
    borderClass: 'hover:border-amber-400 hover:shadow-amber-100',
    bgLight: 'bg-amber-50/70',
    description: 'Kinematika, Dinamika, Fluida, Termodinamika, Listrik Magnet, Gelombang',
    questionCount: 20,
    durationMinutes: 45,
    match: (s: string, name: string) => {
      const ls = (s || '').toLowerCase();
      const ln = (name || '').toLowerCase();
      return ls.includes('fisika') || ln.includes('fisika');
    }
  },
  {
    id: 'kimia',
    name: 'Kimia',
    icon: '🧪',
    badge: 'MIPA / Saintek',
    categoryGroup: 'saintek',
    badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    borderClass: 'hover:border-emerald-400 hover:shadow-emerald-100',
    bgLight: 'bg-emerald-50/70',
    description: 'Struktur Atom, Tabel Periodik, Stoikiometri, Larutan, Termokimia, Redoks',
    questionCount: 20,
    durationMinutes: 45,
    match: (s: string, name: string) => {
      const ls = (s || '').toLowerCase();
      const ln = (name || '').toLowerCase();
      return ls.includes('kimia') || ln.includes('kimia');
    }
  },
  {
    id: 'biologi',
    name: 'Biologi',
    icon: '🧬',
    badge: 'MIPA / Saintek',
    categoryGroup: 'saintek',
    badgeClass: 'bg-green-100 text-green-800 border-green-200',
    borderClass: 'hover:border-green-400 hover:shadow-green-100',
    bgLight: 'bg-green-50/70',
    description: 'Sel & Molekuler, Metabolisme, Genetika, Ekologi, Bioteknologi',
    questionCount: 20,
    durationMinutes: 45,
    match: (s: string, name: string) => {
      const ls = (s || '').toLowerCase();
      const ln = (name || '').toLowerCase();
      return ls.includes('biologi') || ln.includes('biologi');
    }
  },
  {
    id: 'ekonomi',
    name: 'Ekonomi',
    icon: '📊',
    badge: 'IPS / Soshum',
    categoryGroup: 'soshum',
    badgeClass: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    borderClass: 'hover:border-cyan-400 hover:shadow-cyan-100',
    bgLight: 'bg-cyan-50/70',
    description: 'Mekanisme Pasar, Kebijakan Moneter, Akuntansi Dasar, Perdagangan',
    questionCount: 20,
    durationMinutes: 45,
    match: (s: string, name: string) => {
      const ls = (s || '').toLowerCase();
      const ln = (name || '').toLowerCase();
      return ls.includes('ekonomi') || ln.includes('ekonomi');
    }
  },
  {
    id: 'geografi',
    name: 'Geografi',
    icon: '🌍',
    badge: 'IPS / Soshum',
    categoryGroup: 'soshum',
    badgeClass: 'bg-teal-100 text-teal-800 border-teal-200',
    borderClass: 'hover:border-teal-400 hover:shadow-teal-100',
    bgLight: 'bg-teal-50/70',
    description: 'Litosfer, Atmosfer, Hidrosfer, Pemetaan, Penginderaan Jauh & SIG',
    questionCount: 10,
    durationMinutes: 30,
    match: (s: string, name: string) => {
      const ls = (s || '').toLowerCase();
      const ln = (name || '').toLowerCase();
      return ls.includes('geografi') || ln.includes('geografi');
    }
  },
  {
    id: 'sejarah',
    name: 'Sejarah',
    icon: '📜',
    badge: 'IPS / Soshum',
    categoryGroup: 'soshum',
    badgeClass: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    borderClass: 'hover:border-yellow-400 hover:shadow-yellow-100',
    bgLight: 'bg-yellow-50/70',
    description: 'Sejarah Kemerdekaan Indonesia, Peradaban Dunia, Perang Dunia',
    questionCount: 10,
    durationMinutes: 30,
    match: (s: string, name: string) => {
      const ls = (s || '').toLowerCase();
      const ln = (name || '').toLowerCase();
      if (ls.includes('pkn') || ls.includes('ppkn') || ln.includes('pkn') || ln.includes('ppkn')) return false;
      return ls === 'sejarah' || ls.includes('sejarah') || (ln.includes('sejarah') && !ln.includes('ppkn'));
    }
  },
  {
    id: 'sosiologi',
    name: 'Sosiologi',
    icon: '👥',
    badge: 'IPS / Soshum',
    categoryGroup: 'soshum',
    badgeClass: 'bg-rose-100 text-rose-800 border-rose-200',
    borderClass: 'hover:border-rose-400 hover:shadow-rose-100',
    bgLight: 'bg-rose-50/70',
    description: 'Interaksi Sosial, Nilai & Norma, Konflik Sosial, Perubahan Sosial',
    questionCount: 20,
    durationMinutes: 45,
    match: (s: string, name: string) => {
      const ls = (s || '').toLowerCase();
      const ln = (name || '').toLowerCase();
      return ls.includes('sosiologi') || ln.includes('sosiologi');
    }
  },
  {
    id: 'ppkn',
    name: 'PPKn (PKn)',
    icon: '🏛️',
    badge: 'Wajib',
    categoryGroup: 'wajib',
    badgeClass: 'bg-red-100 text-red-800 border-red-200',
    borderClass: 'hover:border-red-400 hover:shadow-red-100',
    bgLight: 'bg-red-50/70',
    description: 'Pancasila, UUD 1945, Kebinekaan, Hak & Kewajiban Warga Negara',
    questionCount: 10,
    durationMinutes: 30,
    match: (s: string, name: string) => {
      const ls = (s || '').toLowerCase();
      const ln = (name || '').toLowerCase();
      return ls.includes('pkn') || ls.includes('ppkn') || ls.includes('kewarganegaraan') || ls.includes('pancasila') || ln.includes('pkn') || ln.includes('ppkn');
    }
  }
];

export const TKA_PACKAGE_DESCRIPTIONS: Record<number, string> = {
  1: 'Paket simulasi lengkap 14 Mata Pelajaran TKA SMA resmi (Matematika Wajib & Lanjut, Fisika, Kimia, Biologi, Ekonomi, Geografi, Sosiologi, Sejarah, PPKn, B. Indonesia & Lanjut, B. Inggris & Lanjut) berstandar Kurikulum Merdeka.',
  2: 'Paket simulasi TKA SMA Paket 2 dengan fokus penguatan konsep fundamental MIPA, analisis wacana kritis Soshum, dan penguasaan Mapel Wajib.',
  3: 'Paket simulasi TKA SMA Paket 3 menguji kemampuan analisis pemecahan masalah (Problem Solving) kontekstual dan HOTS berstandar ANBK & TKA Nasional.',
  4: 'Paket simulasi TKA SMA Paket 4 untuk akselerasi penguasaan rumus cepat kalkulus, stoikiometri kimia, dinamika fisika, dan akuntansi ekonomi.',
  5: 'Paket simulasi TKA SMA Paket 5 dengan butir soal variatif pilihan ganda analitis, studi kasus sosiologi, dan sintaksis bahasa tingkat lanjut.',
  6: 'Paket simulasi TKA SMA Paket 6 berbasis bank soal prediksi mutakhir dengan bobot materi komprehensif semester 1 & 2 SMA.',
  7: 'Paket simulasi komprehensif TKA SMA Paket 7 untuk menguji ketahanan dan ketelitian pengerjaan soal sains terapan dan wacana humaniora.',
  8: 'Paket simulasi nasional TKA SMA Paket 8 dengan integrasi literasi sains, numerasi spasial, dan penalaran konstitusional PPKn.',
  9: 'Paket simulasi TKA SMA Paket 9 sebagai tolok ukur kesiapan evaluasi belajar berkala dan pemantapan nilai rapor sekolah.',
  10: 'Paket simulasi Mid-Preparation TKA SMA Paket 10 dengan evaluasi mendalam per bab mata pelajaran peminatan dan umum.',
  11: 'Paket simulasi lanjutan TKA SMA Paket 11 melatih efisiensi waktu pengerjaan dan akurasi logika analitis tingkat menengah ke atas.',
  12: 'Paket simulasi pengayaan TKA SMA Paket 12 memperdalam materi kalkulus lanjut, bioteknologi modern, dan dinamika geopolitik geografi.',
  13: 'Paket simulasi akselerasi TKA SMA Paket 13 untuk peningkatan skor IRT dan penguasaan trik jitu menyelesaikan soal bertingkat.',
  14: 'Paket simulasi TKA SMA Paket 14 memperkuat daya kritis teks sastra Indonesia, wacana akademik bahasa Inggris, dan mekanika klasik fisika.',
  15: 'Paket simulasi Master TKA SMA Paket 15 untuk menguji ketajaman analisis fenomena alam, sosial kemasyarakatan, dan peradaban sejarah.',
  16: 'Paket simulasi TKA SMA Paket 16 dengan tingkat kesulitan tinggi setara seleksi kompetensi akademik mandiri PTN ternama.',
  17: 'Paket simulasi Final Countdown I TKA SMA Paket 17 untuk mematangkan strategi ujian dan meminimalisir kesalahan perhitungan/analisis.',
  18: 'Paket simulasi Final Countdown II TKA SMA Paket 18 simulasi gladi bersih berbasis CBT dengan alokasi waktu presisi.',
  19: 'Paket simulasi Grand TKA SMA Paket 19 prediksi akurat capaian kompetensi kelulusan akademik SMA dan seleksi masuk perguruan tinggi.',
  20: 'Paket simulasi Ultimate TKA SMA Paket 20 sebagai uji pamungkas kesiapan 100% menghadapi seluruh ujian TKA SMA 2026.'
};

export const TKA_PACKAGES: TkaPackage[] = Array.from({ length: 20 }, (_, idx) => {
  const pkgNum = idx + 1;
  return {
    id: `tryout-tka-paket-${pkgNum}`,
    name: `Try Out TKA SMA Paket ${pkgNum}`,
    badge: `Paket ${pkgNum} • 14 Mapel Lengkap`,
    description: TKA_PACKAGE_DESCRIPTIONS[pkgNum] || `Paket simulasi lengkap 14 Mata Pelajaran TKA SMA resmi Paket ${pkgNum} berstandar Kurikulum Merdeka.`,
    mapelCount: 14,
    totalQuestions: 240,
    totalDurationMinutes: 570,
    totalDurationFormatted: '14 Mapel Lengkap',
    year: 2026,
    status: 'Tersedia' as const
  };
});

// Helper to generate 14 tryouts for a given TKA package number
export function generateTkaPackageTryouts(pkgNum: number): TryOut[] {
  const prefix = pkgNum === 1 ? 'to-tka' : `to-tka${pkgNum}`;
  const baseSolved = Math.max(150, 950 - (pkgNum * 32));

  return [
    {
      id: pkgNum === 1 ? 'to-anbk-mtk-wajib-2026' : `${prefix}-mtk-wajib-2026`,
      name: `Try Out TKA Paket ${pkgNum}: Matematika Wajib (20 Soal IRT • 45 Menit)`,
      duration: 45,
      passingGrade: 500,
      questionCount: 20,
      subject: 'Matematika Wajib',
      category: 'TKA',
      randomizeQuestions: false,
      randomizeOptions: false,
      startDate: '2026-07-20',
      endDate: '2026-12-31',
      solvedCount: baseSolved + 300
    },
    {
      id: pkgNum === 1 ? 'to-tka-mtk-lanjut-2026' : `${prefix}-mtk-lanjut-2026`,
      name: `Try Out TKA Paket ${pkgNum}: Matematika Tingkat Lanjut (20 Soal IRT • 45 Menit)`,
      duration: 45,
      passingGrade: 500,
      questionCount: 20,
      subject: 'Matematika Tingkat Lanjut',
      category: 'TKA',
      randomizeQuestions: false,
      randomizeOptions: false,
      startDate: '2026-07-20',
      endDate: '2026-12-31',
      solvedCount: baseSolved - 50
    },
    {
      id: pkgNum === 1 ? 'to-tka-bindo-2026' : `${prefix}-bindo-2026`,
      name: `Try Out TKA Paket ${pkgNum}: Bahasa Indonesia (20 Soal IRT • 45 Menit)`,
      duration: 45,
      passingGrade: 500,
      questionCount: 20,
      subject: 'Bahasa Indonesia',
      category: 'TKA',
      randomizeQuestions: false,
      randomizeOptions: false,
      startDate: '2026-07-20',
      endDate: '2026-12-31',
      solvedCount: baseSolved + 120
    },
    {
      id: pkgNum === 1 ? 'to-tka-bindo-lanjut-2026' : `${prefix}-bindo-lanjut-2026`,
      name: `Try Out TKA Paket ${pkgNum}: Bahasa Indonesia Tingkat Lanjut (10 Soal Wacana • 45 Menit)`,
      duration: 45,
      passingGrade: 500,
      questionCount: 10,
      subject: 'Bahasa Indonesia Tingkat Lanjut',
      category: 'TKA',
      randomizeQuestions: false,
      randomizeOptions: false,
      startDate: '2026-07-20',
      endDate: '2026-12-31',
      solvedCount: baseSolved - 20
    },
    {
      id: pkgNum === 1 ? 'to-tka-bing-2026' : `${prefix}-bing-2026`,
      name: `Try Out TKA Paket ${pkgNum}: Bahasa Inggris (20 Soal IRT • 45 Menit)`,
      duration: 45,
      passingGrade: 500,
      questionCount: 20,
      subject: 'Bahasa Inggris',
      category: 'TKA',
      randomizeQuestions: false,
      randomizeOptions: false,
      startDate: '2026-07-20',
      endDate: '2026-12-31',
      solvedCount: baseSolved + 80
    },
    {
      id: pkgNum === 1 ? 'to-tka-bing-lanjut-2026' : `${prefix}-bing-lanjut-2026`,
      name: `Try Out TKA Paket ${pkgNum}: Bahasa Inggris Tingkat Lanjut (20 Soal IRT • 45 Menit)`,
      duration: 45,
      passingGrade: 500,
      questionCount: 20,
      subject: 'Bahasa Inggris Tingkat Lanjut',
      category: 'TKA',
      randomizeQuestions: false,
      randomizeOptions: false,
      startDate: '2026-07-20',
      endDate: '2026-12-31',
      solvedCount: baseSolved - 40
    },
    {
      id: pkgNum === 1 ? 'to-tka-fisika-1-2026' : `${prefix}-fisika-2026`,
      name: `Try Out TKA Paket ${pkgNum}: Fisika SMA (20 Soal IRT • 45 Menit)`,
      duration: 45,
      passingGrade: 600,
      questionCount: 20,
      subject: 'Fisika',
      category: 'TKA',
      randomizeQuestions: false,
      randomizeOptions: false,
      startDate: '2026-07-20',
      endDate: '2026-12-31',
      solvedCount: baseSolved + 90
    },
    {
      id: pkgNum === 1 ? 'to-tka-kimia-1-2026' : `${prefix}-kimia-2026`,
      name: `Try Out TKA Paket ${pkgNum}: Kimia SMA (20 Soal IRT • 45 Menit)`,
      duration: 45,
      passingGrade: 600,
      questionCount: 20,
      subject: 'Kimia',
      category: 'TKA',
      randomizeQuestions: false,
      randomizeOptions: false,
      startDate: '2026-07-20',
      endDate: '2026-12-31',
      solvedCount: baseSolved + 40
    },
    {
      id: pkgNum === 1 ? 'to-tka-biologi-1-2026' : `${prefix}-biologi-2026`,
      name: `Try Out TKA Paket ${pkgNum}: Biologi SMA (20 Soal IRT • 45 Menit)`,
      duration: 45,
      passingGrade: 600,
      questionCount: 20,
      subject: 'Biologi',
      category: 'TKA',
      randomizeQuestions: false,
      randomizeOptions: false,
      startDate: '2026-07-20',
      endDate: '2026-12-31',
      solvedCount: baseSolved + 30
    },
    {
      id: pkgNum === 1 ? 'to-tka-sosiologi-1-2026' : `${prefix}-sosiologi-2026`,
      name: `Try Out TKA Paket ${pkgNum}: Sosiologi SMA (20 Soal IRT • 45 Menit)`,
      duration: 45,
      passingGrade: 600,
      questionCount: 20,
      subject: 'Sosiologi',
      category: 'TKA',
      randomizeQuestions: false,
      randomizeOptions: false,
      startDate: '2026-07-20',
      endDate: '2026-12-31',
      solvedCount: baseSolved + 70
    },
    {
      id: pkgNum === 1 ? 'to-tka-ekonomi-1-2026' : `${prefix}-ekonomi-2026`,
      name: `Try Out TKA Paket ${pkgNum}: Ekonomi SMA (20 Soal Pusmendik • 45 Menit)`,
      duration: 45,
      passingGrade: 600,
      questionCount: 20,
      subject: 'Ekonomi',
      category: 'TKA',
      randomizeQuestions: false,
      randomizeOptions: false,
      startDate: '2026-07-20',
      endDate: '2026-12-31',
      solvedCount: baseSolved + 60
    },
    {
      id: pkgNum === 1 ? 'to-tka-ppkn-2026' : `${prefix}-ppkn-2026`,
      name: `Try Out TKA Paket ${pkgNum}: PPKn SMA (10 Soal Kebangsaan • 30 Menit)`,
      duration: 30,
      passingGrade: 650,
      questionCount: 10,
      subject: 'PPKn (PKn)',
      category: 'TKA',
      randomizeQuestions: false,
      randomizeOptions: false,
      startDate: '2026-07-20',
      endDate: '2026-12-31',
      solvedCount: baseSolved - 100
    },
    {
      id: pkgNum === 1 ? 'to-tka-geografi-2026' : `${prefix}-geografi-2026`,
      name: `Try Out TKA Paket ${pkgNum}: Geografi SMA (10 Soal Spasial & SIG • 30 Menit)`,
      duration: 30,
      passingGrade: 650,
      questionCount: 10,
      subject: 'Geografi',
      category: 'TKA',
      randomizeQuestions: false,
      randomizeOptions: false,
      startDate: '2026-07-20',
      endDate: '2026-12-31',
      solvedCount: baseSolved - 120
    },
    {
      id: pkgNum === 1 ? 'to-tka-sejarah-2026' : `${prefix}-sejarah-2026`,
      name: `Try Out TKA Paket ${pkgNum}: Sejarah SMA (10 Soal Peradaban • 30 Menit)`,
      duration: 30,
      passingGrade: 650,
      questionCount: 10,
      subject: 'Sejarah',
      category: 'TKA',
      randomizeQuestions: false,
      randomizeOptions: false,
      startDate: '2026-07-20',
      endDate: '2026-12-31',
      solvedCount: baseSolved - 130
    }
  ];
}

export const INITIAL_TKA_TRYOUTS: TryOut[] = Array.from({ length: 20 }, (_, i) => generateTkaPackageTryouts(i + 1)).flat();
