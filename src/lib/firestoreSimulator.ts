/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Firestore & Firebase Authentication Simulator with localStorage persistence
// Allows seamless testing of all roles (Siswa, Guru, Admin) and dynamic CRUD operations.

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  role: 'Admin' | 'Guru' | 'Siswa';
  schoolName: string;
  targetPTN: string;
  targetProdi: string;
  xp: number;
  level: number;
  streak: number;
  isPremium: boolean;
  avatarUrl: string;
  createdAt: string;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  correctAnswerIndices?: number[]; // indices of correct answers for checkboxes type
  correctAnswer: string;
  explanation: string;
  subject: string;
  difficulty: 'Mudah' | 'Sedang' | 'Sulit';
  bab: string;
  subbab?: string;
  year: string;
  videoUrl?: string;
  imageUrl?: string;
  questionType?: 'multiple_choice' | 'checkboxes' | 'dropdown';
  explanationImage?: string;
  explanationVideo?: string;
  explanationYoutubeUrl?: string;
  geminiQuizUrl?: string;
}

export interface LearningVideo {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  description: string;
  subject: string;
  bab: string;
  guru: string;
  duration: string;
  views: number;
  createdAt: string;
}

export interface TryOut {
  id: string;
  name: string;
  duration: number; // in minutes
  passingGrade: number; // out of 1000
  questionCount: number;
  subject: string;
  category?: 'UTBK' | 'TKA';
  randomizeQuestions: boolean;
  randomizeOptions: boolean;
  startDate: string;
  endDate: string;
  solvedCount?: number;
  googleFormUrl?: string;
}

export interface ExamSession {
  id: string;
  examId: string;
  userId: string;
  answers: { [questionId: string]: number }; // questionId -> selectedOptionIndex
  flagged: string[]; // array of questionIds (ragu-ragu)
  remainingTime: number; // in seconds
  status: 'active' | 'submitted';
  startedAt: string;
  submittedAt?: string;
}

export interface ExamScore {
  id: string;
  examId: string;
  examName: string;
  userId: string;
  userName?: string;
  score: number; // 200 - 1000 scale
  correctCount: number;
  wrongCount: number;
  totalQuestions: number;
  subject: string;
  passed: boolean;
  createdAt: string;
  strongSubjects?: string[];
  weakSubjects?: string[];
}

export interface ReportCard {
  userId: string;
  grades: {
    [semester: string]: { // "Semester 1" to "Semester 6"
      [subject: string]: number; // subject name -> grade
    };
  };
  average: number;
  updatedAt: string;
}

export interface University {
  id: string;
  name: string;
  acronym: string;
  logo: string;
  region?: string;
  category?: string;
}

export interface StudyProgram {
  id: string;
  universityId: string;
  universityName: string;
  name: string;
  passingGrade: number; // 400 - 800 scale
  capacity: number;
}

export interface UniversityPrediction {
  id: string;
  userId: string;
  university: string;
  studyProgram: string;
  pathway: 'SNBP' | 'SNBT';
  probability: 'Sangat Tinggi' | 'Tinggi' | 'Sedang' | 'Rendah' | 'Sangat Rendah';
  probabilityScore: number; // 0 - 100
  recommendation: string;
  createdAt: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  xp: number;
  icon: string;
  unlocked: boolean;
}

export interface Announcement {
  id: string;
  title: string;
  body: string;
  date: string;
}

export interface Payment {
  id: string;
  userId: string;
  amount: number;
  packageName: string;
  method: string;
  status: 'pending' | 'success' | 'failed';
  createdAt: string;
}

import { SNPMB_UNIVERSITIES, SNPMB_STUDY_PROGRAMS, getSnpmbStudyPrograms } from '../data/snpmbData';
import {
  PEMBAHASAN_TKA_MATEMATIKA_WAJIB_HTML,
  PEMBAHASAN_TKA_MATEMATIKA_LANJUT_HTML,
  PEMBAHASAN_TKA_BAHASA_INDONESIA_HTML,
  PEMBAHASAN_TKA_BAHASA_INGGRIS_HTML,
  PEMBAHASAN_TKA_BAHASA_INDONESIA_LANJUT_HTML,
  PEMBAHASAN_TKA_BAHASA_INGGRIS_LANJUT_HTML
} from '../data/pembahasanTkaHtml';
import { INITIAL_UTBK_TRYOUTS } from '../data/utbkSubtestsData';
import { UTBK_QUESTIONS } from '../data/utbkQuestions';

// Initial Mock Universities & Programs
export const MOCK_UNIVERSITIES: University[] = SNPMB_UNIVERSITIES;
export const MOCK_STUDY_PROGRAMS: StudyProgram[] = SNPMB_STUDY_PROGRAMS;

// Initial Questions Database supporting LaTeX formulas
const INITIAL_QUESTIONS: Question[] = [
  ...UTBK_QUESTIONS,
  {
    id: 'q1',
    text: 'Tentukan turunan pertama dari fungsi $f(x) = 3x^2 - 5x + 8$.',
    options: ['$f\'(x) = 6x - 5$', '$f\'(x) = 3x - 5$', '$f\'(x) = 6x + 8$', '$f\'(x) = 6x$', '$f\'(x) = 6x^2 - 5$'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Diketahui $f(x) = 3x^2 - 5x + 8$. Turunan $\\frac{d}{dx}(a x^n) = a \\cdot n x^{n-1}$.\n$$f\'(x) = 3(2)x^{2-1} - 5(1) + 0 = 6x - 5$$',
    subject: 'Matematika Umum',
    difficulty: 'Mudah',
    bab: 'Turunan & Integral',
    year: '2025'
  },
  {
    id: 'q2',
    text: 'Jika $\\log 2 = a$ dan $\\log 3 = b$, tentukan nilai dari $\\log 72$.',
    options: ['$3a + 2b$', '$2a + 3b$', '$3a - 2b$', '$a + b$', '$3a + b$'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Faktorisasi $72 = 8 \\times 9 = 2^3 \\times 3^2$.\nSifat logaritma: $\\log(x \\cdot y) = \\log x + \\log y$.\n$$\\log 72 = \\log(2^3 \\times 3^2) = 3 \\log 2 + 2 \\log 3 = 3a + 2b$$',
    subject: 'Matematika Umum',
    difficulty: 'Sedang',
    bab: 'Eksponen & Logaritma',
    year: '2024'
  },
  {
    id: 'q3',
    text: 'Sebuah kawat penghantar memiliki panjang $L$ dan luas penampang $A$. Jika kawat ditarik sehingga panjangnya menjadi $2L$ sementara volumenya $V$ tetap konstan, hambatan kawat baru $R\'$ dibandingkan hambatan awalnya $R$ adalah...',
    options: ['$2$ kali semula', '$4$ kali semula', '$\\frac{1}{2}$ kali semula', '$\\frac{1}{4}$ kali semula', 'Tetap sama'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Rumus hambatan: $R = \\rho \\cdot \\frac{L}{A}$. Karena volume $V = A \\cdot L$ konstan, ketika $L\' = 2L$, maka $A\' = \\frac{A}{2}$.\n$$R\' = \\rho \\cdot \\frac{2L}{\\frac{A}{2}} = 4 \\rho \\cdot \\frac{L}{A} = 4R$$',
    subject: 'Fisika',
    difficulty: 'Sedang',
    bab: 'Listrik Dinamis',
    year: '2025'
  },
  {
    id: 'q4',
    text: 'Diberikan matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} a & 1 \\\\ 0 & b \\end{pmatrix}$. Jika $\\det(AB) = -8$, tentukan nilai dari $a \\cdot b$.',
    options: ['$4$', '$-4$', '$2$', '$-2$', '$0$'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Sifat determinan: $\\det(AB) = \\det(A) \\cdot \\det(B)$.\n$\\det(A) = (1)(4) - (2)(3) = 4 - 6 = -2$.\n$\\det(B) = (a)(b) - (1)(0) = ab$.\n$$\\det(AB) = -2 \\cdot ab = -8 \\implies ab = 4$$',
    subject: 'Matematika Lanjut',
    difficulty: 'Sulit',
    bab: 'Matriks & Vektor',
    year: '2025'
  },
  {
    id: 'q5',
    text: 'Unsur dengan nomor atom $Z = 17$ dalam tabel periodik memiliki konfigurasi elektron menurut prinsip Aufbau...',
    options: ['$1s^2 \\; 2s^2 \\; 2p^6 \\; 3s^2 \\; 3p^5$', '$1s^2 \\; 2s^2 \\; 2p^6 \\; 3s^2 \\; 3p^6$', '$1s^2 \\; 2s^2 \\; 2p^6 \\; 3s^2 \\; 3p^4$', '$1s^2 \\; 2s^2 \\; 2p^6 \\; 3s^1$', '$1s^2 \\; 2s^2 \\; 2p^6 \\; 3s^2 \\; 3p^5 \\; 4s^1$'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Nomor atom $17$ adalah Klorin (Cl). Konfigurasi elektron Aufbau:\n$$1s^2 \\; 2s^2 \\; 2p^6 \\; 3s^2 \\; 3p^5$$\nTotal $= 2 + 2 + 6 + 2 + 5 = 17$ elektron.',
    subject: 'Kimia',
    difficulty: 'Mudah',
    bab: 'Struktur Atom & Periodik',
    year: '2024'
  },
  {
    id: 'q6',
    text: 'Pernyataan berikut yang paling tepat menjelaskan perbedaan antara proses pembelahan mitosis dan meiosis adalah...',
    options: [
      'Mitosis menghasilkan $4$ sel anak diploid ($2n$), meiosis menghasilkan $2$ sel anak haploid ($n$).',
      'Mitosis menghasilkan $2$ sel anak haploid ($n$), meiosis menghasilkan $4$ sel anak diploid ($2n$).',
      'Mitosis menghasilkan $2$ sel anak identik genetik ($2n$), sedangkan meiosis menghasilkan $4$ sel anak bervariasi genetik ($n$).',
      'Mitosis terjadi pada sel kelamin (gonad), meiosis terjadi pada sel tubuh (somatis).',
      'Mitosis bertujuan untuk reproduksi seksual, meiosis untuk pertumbuhan sel.'
    ],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Mitosis terjadi pada sel somatis menghasilkan $2$ sel diploid ($2n$) identik. Meiosis terjadi pada sel reproduksi menghasilkan $4$ sel haploid ($n$) bervariasi genetik akibat *crossing over*.',
    subject: 'Biologi',
    difficulty: 'Sedang',
    bab: 'Pembelahan Sel',
    year: '2024'
  },
  {
    id: 'q7',
    text: 'Jika tingkat pendapatan riil masyarakat naik secara umum, maka pada kurva permintaan pasar barang normal ($Normal \\; Goods$) akan mengalami pergeseran...',
    options: [
      'Kurva penawaran bergeser ke kanan dan harga turun',
      'Kurva permintaan bergeser ke kiri dan harga turun',
      'Kurva permintaan bergeser ke kanan dan harga keseimbangan naik',
      'Kurva penawaran bergeser ke kiri dan harga naik',
      'Keseimbangan pasar tetap tidak berubah'
    ],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Barang normal adalah barang yang permintaannya meningkat seiring naiknya pendapatan masyarakat. Kurva permintaan bergeser ke kanan ($D_1 \\to D_2$), memicu kenaikan harga keseimbangan pasar.',
    subject: 'Ekonomi',
    difficulty: 'Sedang',
    bab: 'Permintaan & Penawaran',
    year: '2025'
  },
  {
    id: 'q8',
    text: 'Fenomena cuaca global *La Niña* di Samudra Pasifik tropis berdampak langsung bagi iklim Indonesia berupa...',
    options: [
      'Kemarau yang sangat panjang dan kekeringan',
      'Peningkatan curah hujan tinggi dan potensi banjir pesisir',
      'Suhu udara dingin ekstrem di wilayah pesisir',
      'Tornado hebat di pedalaman Sumatera',
      'Suhu laut menurun drastis secara tiba-tiba'
    ],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: '*La Niña* menyebabkan penghangatan suhu permukaan laut di Indonesia, memicu penguapan dan membawa uap air basah yang meningkatkan intensitas curah hujan.',
    subject: 'Geografi',
    difficulty: 'Mudah',
    bab: 'Atmosfer & Hidrosfer',
    year: '2024'
  },
  {
    id: 'q9',
    text: 'Hasil dari integral tentu $\\int_{0}^{2} (3x^2 + 2x - 1) \\, dx$ adalah...',
    options: ['$10$', '$12$', '$8$', '$14$', '$6$'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: '$$\\int_{0}^{2} (3x^2 + 2x - 1) \\, dx = \\left[ x^3 + x^2 - x \\right]_{0}^{2} = (8 + 4 - 2) - 0 = 10$$',
    subject: 'Matematika Lanjut',
    difficulty: 'Sedang',
    bab: 'Kalkulus',
    year: '2025'
  },
  {
    id: 'q10',
    text: 'Sebuah benda bermassa $m = 2\\text{ kg}$ dilepas dari ketinggian $h = 20\\text{ m}$ di atas tanah. Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, kecepatan benda saat menyentuh tanah adalah...',
    options: ['$20\\text{ m/s}$', '$10\\text{ m/s}$', '$20\\sqrt{2}\\text{ m/s}$', '$40\\text{ m/s}$', '$5\\sqrt{2}\\text{ m/s}$'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Gunakan hukum kekekalan energi mekanik $v = \\sqrt{2gh}$:\n$$v = \\sqrt{2 \\cdot 10 \\cdot 20} = \\sqrt{400} = 20\\text{ m/s}$$',
    subject: 'Fisika',
    difficulty: 'Sedang',
    bab: 'Mekanika',
    year: '2025'
  },
  {
    id: 'q11',
    text: 'Nilai $\\text{pH}$ dari larutan asam kuat $\\text{HCl}$ konsentrasi $0{,}01\\text{ M}$ adalah...',
    options: ['$2$', '$1$', '$12$', '$3$', '$2 - \\log 2$'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: '$\\text{HCl}$ terionisasi sempurna:\n$$[\\text{H}^+] = M = 10^{-2}\\text{ M} \\implies \\text{pH} = -\\log(10^{-2}) = 2$$',
    subject: 'Kimia',
    difficulty: 'Mudah',
    bab: 'Larutan Asam Basa',
    year: '2025'
  },
  {
    id: 'q12',
    text: 'Jika $x + y = 12$ dan $xy = 35$, tentukan nilai dari $x^2 + y^2$.',
    options: ['$74$', '$144$', '$109$', '$70$', '$84$'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Identitas aljabar: $x^2 + y^2 = (x + y)^2 - 2xy$.\n$$x^2 + y^2 = 12^2 - 2(35) = 144 - 70 = 74$$',
    subject: 'Penalaran Kuantitatif',
    difficulty: 'Sedang',
    bab: 'Aljabar',
    year: '2026'
  },
  {
    id: 'q13',
    text: 'Semua siswa kelas XII yang lulus tes potensi akademik berhak mendapatkan beasiswa. Sebagian siswa IPS kelas XII tidak lulus tes potensi akademik. Simpulan yang paling tepat adalah...',
    options: [
      'Sebagian siswa IPS kelas XII berhak mendapatkan beasiswa.',
      'Semua siswa IPS kelas XII tidak berhak mendapatkan beasiswa.',
      'Sebagian siswa IPS kelas XII tidak berhak mendapatkan beasiswa.',
      'Semua siswa kelas XII berhak mendapatkan beasiswa.',
      'Siswa yang lulus tes potensi akademik bukan siswa IPS.'
    ],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Siswa yang berhak beasiswa adalah yang lulus TPA. Karena sebagian siswa IPS tidak lulus TPA, maka sebagian siswa IPS tersebut tidak berhak mendapat beasiswa.',
    subject: 'Penalaran Umum & TPS',
    difficulty: 'Sedang',
    bab: 'Logika Silogisme',
    year: '2026'
  },
  {
    id: 'q14',
    text: 'Bacalah kalimat berikut: *"Penerapan teknologi kecerdasan buatan (*AI*) di sektor pendidikan memberikan dampak esensial dalam mempersonalisasi pembelajaran siswa."*\nSinonim kata **esensial** pada kalimat di atas adalah...',
    options: ['Mendasar / Sangat Penting', 'Pelengkap', 'Opsional', 'Sederhana', 'Tambahan'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Kata *esensial* bermakna mendasar, hakiki, atau sangat penting dalam mewujudkan suatu tujuan.',
    subject: 'Literasi Bahasa',
    difficulty: 'Mudah',
    bab: 'Pemahaman Bacaan',
    year: '2025'
  },
  {
    id: 'q15',
    text: 'Pada rantai makanan di ekosistem padang rumput, peran jamur dan bakteri pengurai (*decomposer*) adalah...',
    options: [
      'Mengkonsumsi produsen secara langsung',
      'Mengubah senyawa organik dari sisa organisme menjadi anorganik',
      'Menghasilkan oksigen melalui fotosintesis',
      'Memangsa konsumen tingkat akhir',
      'Menyerap energi matahari secara langsung'
    ],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Dekomposer menguraikan bangkai materi organik menjadi hara anorganik yang dapat diserap kembali oleh tumbuhan.',
    subject: 'Biologi',
    difficulty: 'Mudah',
    bab: 'Ekologi',
    year: '2025'
  },
  {
    id: 'q16',
    text: 'Garis khayal pada peta yang menghubungkan titik-titik lokasi dengan tekanan udara yang sama disebut...',
    options: ['Isobar', 'Isoterm', 'Isohiet', 'Isohipse', 'Isobath'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: '*Isobar* adalah garis pada peta meteorologi yang menghubungkan tempat-tempat bersuhu/ketinggian seragam dengan tekanan udara yang sama.',
    subject: 'Geografi',
    difficulty: 'Mudah',
    bab: 'Meteorologi',
    year: '2024'
  },
  {
    id: 'q17',
    text: 'Fungsi permintaan suatu barang dinyatakan oleh $Q_d = 100 - 2P$. Jika harga barang $P = 20$, berapakah elastisitas permintaan barang tersebut?',
    options: ['$0{,}67$', '$1{,}00$', '$0{,}50$', '$1{,}50$', '$2{,}00$'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Rumus elastisitas titik $E_d = \\left| \\frac{dQ}{dP} \\right| \\cdot \\frac{P}{Q}$.\nSaat $P = 20 \\implies Q = 60$.\n$$E_d = |-2| \\cdot \\frac{20}{60} = \\frac{40}{60} = 0{,}67$$',
    subject: 'Ekonomi',
    difficulty: 'Sedang',
    bab: 'Elastisitas',
    year: '2025'
  },
  {
    id: 'q18',
    text: 'Suku ke-$5$ suatu barisan aritmetika adalah $18$ dan suku ke-$9$ adalah $34$. Suku pertama ($a$) dan beda ($b$) barisan tersebut berturut-turut adalah...',
    options: ['$a = 2, b = 4$', '$a = 4, b = 2$', '$a = 2, b = 5$', '$a = 6, b = 3$', '$a = 3, b = 4$'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: '$U_5 = a + 4b = 18$ dan $U_9 = a + 8b = 34$.\nSelisih $(U_9 - U_5) = 4b = 16 \\implies b = 4$.\nSubstitusi $b = 4 \\implies a + 16 = 18 \\implies a = 2$.',
    subject: 'Matematika Umum',
    difficulty: 'Mudah',
    bab: 'Barisan & Deret',
    year: '2025'
  },
  {
    id: 'q19',
    text: 'Penyelesaian dari persamaan trigonometri $\\sin x = \\frac{1}{2}$ untuk rentang $0^\\circ \\le x \\le 360^\\circ$ adalah...',
    options: ['$\\{30^\\circ, 150^\\circ\\}$', '$\\{30^\\circ, 60^\\circ\\}$', '$\\{60^\\circ, 120^\\circ\\}$', '$\\{30^\\circ, 210^\\circ\\}$', '$\\{150^\\circ, 330^\\circ\\}$'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Nilai $\\sin x = \\frac{1}{2}$ bernilai positif di Kuadran I ($30^\\circ$) dan Kuadran II ($180^\\circ - 30^\\circ = 150^\\circ$).',
    subject: 'Matematika Lanjut',
    difficulty: 'Mudah',
    bab: 'Trigonometri',
    year: '2025'
  },
  {
    id: 'q20',
    text: 'Sebuah trafo step-up ideal memiliki perbandingan lilitan $N_p : N_s = 1 : 5$. Jika tegangan primer $V_p = 220\\text{ V}$, berapakah tegangan sekunder $V_s$?',
    options: ['$1100\\text{ V}$', '$44\\text{ V}$', '$220\\text{ V}$', '$550\\text{ V}$', '$880\\text{ V}$'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Persamaan transformator ideal: $\\frac{V_p}{V_s} = \\frac{N_p}{N_s}$.\n$$\\frac{220}{V_s} = \\frac{1}{5} \\implies V_s = 220 \\times 5 = 1100\\text{ V}$$',
    subject: 'Fisika',
    difficulty: 'Mudah',
    bab: 'Induksi Elektromagnetik',
    year: '2025'
  },
  {
    id: 'q21',
    text: 'Suatu deret geometri tak hingga memiliki suku pertama $a = 8$ dan rasio $r = \\frac{1}{2}$. Jumlah tak hingga ($S_\\infty$) dari deret tersebut adalah...',
    options: ['$16$', '$24$', '$12$', '$32$', '$8$'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Rumus jumlah deret geometri tak hingga $S_\\infty = \\frac{a}{1 - r}$.\n$$S_\\infty = \\frac{8}{1 - \\frac{1}{2}} = \\frac{8}{\\frac{1}{2}} = 16$$',
    subject: 'TPS & Penalaran Matematika',
    difficulty: 'Mudah',
    bab: 'Deret Geometri',
    year: '2026'
  },
  {
    id: 'q22',
    text: 'Rata-rata nilai ulangan $10$ siswa adalah $75$. Jika digabungkan dengan $5$ siswa baru, rata-rata nilainya menjadi $78$. Rata-rata nilai $5$ siswa baru tersebut adalah...',
    options: ['$84$', '$80$', '$82$', '$85$', '$88$'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Total nilai 10 siswa $= 750$. Total 15 siswa $= 15 \\times 78 = 1170$.\nTotal nilai 5 siswa $= 1170 - 750 = 420 \\implies \\bar{x} = \\frac{420}{5} = 84$.',
    subject: 'Penalaran Kuantitatif',
    difficulty: 'Sedang',
    bab: 'Statistika',
    year: '2026'
  },
  {
    id: 'q23',
    text: 'Manakah penulisan ejaan yang baku menurut KBBI dalam kalimat di bawah ini?',
    options: ['Aktivitas, kualitas, kuintal, efektivitas', 'Aktifitas, kwalitas, kwintal, efektivitas', 'Aktivitas, kwalitas, kwintal, efektifitas', 'Aktifitas, kualitas, kuintal, efektifitas', 'Aktivitas, kualitas, kwintal, efektivitas'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Kata baku menurut KBBI: *aktivitas*, *kualitas*, *kuintal*, dan *efektivitas*.',
    subject: 'Literasi Bahasa',
    difficulty: 'Mudah',
    bab: 'Ejaan Baku',
    year: '2025'
  },
  {
    id: 'q24',
    text: 'Persamaan termokimia pembakaran metana $\\text{CH}_4(g) + 2\\text{O}_2(g) \\to \\text{CO}_2(g) + 2\\text{H}_2\\text{O}(g)$ memiliki $\\Delta H = -890\\text{ kJ/mol}$. Reaksi tersebut tergolong...',
    options: ['Eksoterm, membebaskan kalor ke lingkungan', 'Endoterm, menyerap kalor dari lingkungan', 'Isoterm, tanpa pertukaran kalor', 'Adiatik, tanpa kerja kimia', 'Reversibel, menyerap energi kinetik'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Perubahan entalpi bernilai negatif ($\\Delta H < 0$) menunjukkan reaksi eksoterm, membebaskan energi/kalor sebesar $890\\text{ kJ/mol}$ ke lingkungan.',
    subject: 'Kimia',
    difficulty: 'Mudah',
    bab: 'Termokimia',
    year: '2025'
  },
  {
    id: 'q25',
    text: 'Proses penyesuaian unsur-unsur kebudayaan yang berbeda sehingga membentuk keserasian fungsi dalam kehidupan masyarakat disebut...',
    options: ['Integrasi Sosial', 'Asimilasi Sosial', 'Akulturasi Sosial', 'Interaksi Sosial', 'Disintegrasi Sosial'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Integrasi sosial adalah bentuk penyatuan unsur-unsur masyarakat berbeda sehingga tercipta keserasian hidup.',
    subject: 'Sosiologi',
    difficulty: 'Mudah',
    bab: 'Interaksi & Integrasi',
    year: '2025'
  },
  {
    id: 'q_mtk_slugpost_1',
    text: 'Tentukan koordinat titik balik stasioner dari fungsi $f(x) = x^3 - 3x^2 - 9x + 5$.',
    options: ['$(3, -22)$ dan $(-1, 10)$', '$(3, 22)$ dan $(-1, -10)$', '$(1, -6)$ dan $(-3, 15)$', '$(2, -15)$ dan $(-1, 8)$', '$(0, 5)$ dan $(3, -22)$'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Syarat titik stasioner adalah $f\'(x) = 0$.\n$$f\'(x) = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3) = 3(x - 3)(x + 1) = 0$$\nDiperoleh $x = 3$ atau $x = -1$.\n- Untuk $x = 3 \\implies f(3) = 3^3 - 3(3^2) - 9(3) + 5 = 27 - 27 - 27 + 5 = -22$.\n- Untuk $x = -1 \\implies f(-1) = (-1)^3 - 3(-1)^2 - 9(-1) + 5 = -1 - 3 + 9 + 5 = 10$.\n\nJadi titik balik stasionernya adalah **$(3, -22)$** (minimum) dan **$(-1, 10)$** (maksimum).',
    subject: 'Matematika Umum',
    difficulty: 'Sedang',
    bab: 'Turunan & Integral',
    year: '2026',
    geminiQuizUrl: 'https://slugpost.com/kuis-matematikaumum'
  },
  {
    id: 'q_mtk_slugpost_2',
    text: 'Hasil dari integral tentu $\\int_{1}^{3} (6x^2 - 4x + 1) \\, dx$ adalah...',
    options: ['$38$', '$36$', '$42$', '$32$', '$40$'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: '$$\\int_{1}^{3} (6x^2 - 4x + 1) \\, dx = \\left[ 2x^3 - 2x^2 + x \\right]_{1}^{3}$$\n$$\\text{Batas atas }(x=3): 2(27) - 2(9) + 3 = 54 - 18 + 3 = 39$$\n$$\\text{Batas bawah }(x=1): 2(1) - 2(1) + 1 = 1$$\n$$\\text{Hasil} = 39 - 1 = 38$$',
    subject: 'Matematika Umum',
    difficulty: 'Sedang',
    bab: 'Kalkulus',
    year: '2026',
    geminiQuizUrl: 'https://slugpost.com/kuis-matematikaumum'
  },
  {
    id: 'q_mtk_slugpost_3',
    text: 'Himpunan penyelesaian dari persamaan eksponen $2^{2x+1} - 9 \\cdot 2^x + 4 = 0$ adalah...',
    options: ['$\\{-1, 2\\}$', '$\\{1, -2\\}$', '$\\{0, 2\\}$', '$\\{-1, 1\\}$', '$\\{1, 2\\}$'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Misalkan $y = 2^x$. Persamaan menjadi:\n$$2y^2 - 9y + 4 = 0 \\implies (2y - 1)(y - 4) = 0$$\nDiperoleh $y = \\frac{1}{2}$ atau $y = 4$.\n- $2^x = \\frac{1}{2} = 2^{-1} \\implies x = -1$\n- $2^x = 4 = 2^2 \\implies x = 2$\n\nHimpunan penyelesaiannya adalah **$\\{-1, 2\\}$**.',
    subject: 'Matematika Umum',
    difficulty: 'Sedang',
    bab: 'Eksponen & Logaritma',
    year: '2026',
    geminiQuizUrl: 'https://slugpost.com/kuis-matematikaumum'
  },
  {
    id: 'q_mtk_slugpost_4',
    text: 'Jika $^2\\log 3 = a$ dan $^3\\log 5 = b$, maka nilai dari $^6\\log 15$ dalam $a$ dan $b$ adalah...',
    options: ['$\\frac{a(1 + b)}{1 + a}$', '$\\frac{a + b}{1 + a}$', '$\\frac{1 + b}{a + b}$', '$\\frac{a + ab}{a + 1}$', '$\\frac{a b + 1}{a + 1}$'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Gunakan sifat perubahan basis logaritma:\n$$^6\\log 15 = \\frac{^2\\log 15}{^2\\log 6} = \\frac{^2\\log 3 + ^2\\log 5}{^2\\log 2 + ^2\\log 3}$$\nKarena $^2\\log 5 = ^2\\log 3 \\cdot ^3\\log 5 = a \\cdot b$, maka:\n$$=\\frac{a + ab}{1 + a} = \\frac{a(1 + b)}{1 + a}$$',
    subject: 'Matematika Umum',
    difficulty: 'Sedang',
    bab: 'Eksponen & Logaritma',
    year: '2026',
    geminiQuizUrl: 'https://slugpost.com/kuis-matematikaumum'
  },
  {
    id: 'q_mtk_slugpost_5',
    text: 'Jumlah tak hingga dari deret geometri $18 + 12 + 8 + \\frac{16}{3} + \\dots$ adalah...',
    options: ['$54$', '$36$', '$48$', '$52$', '$60$'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Suku pertama $a = 18$, rasio $r = \\frac{12}{18} = \\frac{2}{3}$.\n$$S_{\\infty} = \\frac{a}{1 - r} = \\frac{18}{1 - \\frac{2}{3}} = \\frac{18}{\\frac{1}{3}} = 54$$',
    subject: 'Matematika Umum',
    difficulty: 'Mudah',
    bab: 'Barisan & Deret',
    year: '2026',
    geminiQuizUrl: 'https://slugpost.com/kuis-matematikaumum'
  },
  {
    id: 'q_mtk_slugpost_6',
    text: 'Nilai dari $\\lim_{x \\to 3} \\frac{x^2 - 9}{\\sqrt{x+1} - 2}$ adalah...',
    options: ['$24$', '$12$', '$18$', '$6$', '$36$'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Aturan L\'Hôpital:\n$$\\lim_{x \\to 3} \\frac{2x}{\\frac{1}{2\\sqrt{x+1}}} = \\frac{2(3)}{\\frac{1}{2\\sqrt{4}}} = \\frac{6}{\\frac{1}{4}} = 24$$',
    subject: 'Matematika Umum',
    difficulty: 'Sedang',
    bab: 'Limit Fungsi',
    year: '2026',
    geminiQuizUrl: 'https://slugpost.com/kuis-matematikaumum'
  },
  {
    id: 'q_mtk_slugpost_7',
    text: 'Bentuk sederhana dari $\\frac{\\sin 2x}{1 + \\cos 2x}$ adalah...',
    options: ['$\\tan x$', '$\\cot x$', '$\\sin x$', '$\\cos x$', '$\\sec x$'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Identitas sudut ganda:\n$$\\sin 2x = 2 \\sin x \\cos x$$\n$$1 + \\cos 2x = 2 \\cos^2 x$$\n$$\\frac{\\sin 2x}{1 + \\cos 2x} = \\frac{2 \\sin x \\cos x}{2 \\cos^2 x} = \\frac{\\sin x}{\\cos x} = \\tan x$$',
    subject: 'Matematika Umum',
    difficulty: 'Sedang',
    bab: 'Trigonometri',
    year: '2026',
    geminiQuizUrl: 'https://slugpost.com/kuis-matematikaumum'
  },
  {
    id: 'q_limit_1',
    text: 'Nilai dari $\\lim_{x \\to 3} \\frac{x^2 - 1}{x - 1}$ adalah...',
    options: ['2', '3', '4', '5', '8'],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Karena nilai $x \\to 3$ tidak menyebabkan penyebut bernilai nol ($3 - 1 = 2 \\neq 0$), gunakan metode **substitusi langsung**:\n$$\\lim_{x \\to 3} \\frac{x^2 - 1}{x - 1} = \\frac{3^2 - 1}{3 - 1} = \\frac{9 - 1}{2} = \\frac{8}{2} = 4$$\n\nJawaban Benar: **C**',
    subject: 'Matematika Umum',
    difficulty: 'Mudah',
    bab: 'Limit Fungsi Aljabar',
    year: '2026'
  },
  {
    id: 'q_limit_2',
    text: 'Nilai dari $\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1}$ adalah...',
    options: ['0', '1', '2', '3', '$\\infty$'],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Substitusi langsung menghasilkan $\\frac{0}{0}$ (bentuk tak tentu). Gunakan metode **pemfaktoran**:\n$$\\frac{x^2 - 1}{x - 1} = \\frac{(x - 1)(x + 1)}{x - 1}$$\nCoret faktor $(x - 1)$:\n$$\\lim_{x \\to 1} (x + 1) = 1 + 1 = 2$$\n\nJawaban Benar: **C**',
    subject: 'Matematika Umum',
    difficulty: 'Sedang',
    bab: 'Limit Fungsi Aljabar',
    year: '2026'
  },
  {
    id: 'q_limit_3',
    text: 'Nilai dari $\\lim_{x \\to -3} \\frac{x^2 + 5x + 6}{x + 3}$ adalah...',
    options: ['-1', '0', '1', '2', '-5'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Substitusi $x = -3$ menghasilkan $\\frac{0}{0}$. Faktorkan bentuk kuadrat:\n$$x^2 + 5x + 6 = (x + 2)(x + 3)$$\nMaka:\n$$\\lim_{x \\to -3} \\frac{(x + 2)(x + 3)}{x + 3} = \\lim_{x \\to -3} (x + 2)$$\nSubstitusi nilai $x = -3 \\implies -3 + 2 = -1$.\n\nJawaban Benar: **A**',
    subject: 'Matematika Umum',
    difficulty: 'Sedang',
    bab: 'Limit Fungsi Aljabar',
    year: '2026'
  },
  {
    id: 'q_limit_4',
    text: 'Nilai dari $\\lim_{x \\to 2} \\frac{2 - x}{\\sqrt{x^2 - 3} - 1}$ adalah...',
    options: ['-1', '$-\\frac{1}{2}$', '0', '$\\frac{1}{2}$', '1'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Substitusi $x = 2$ menghasilkan $\\frac{0}{0}$. Kalikan dengan **akar sekawan**:\n$$= \\lim_{x \\to 2} \\frac{(2 - x)(\\sqrt{x^2 - 3} + 1)}{(\\sqrt{x^2 - 3} - 1)(\\sqrt{x^2 - 3} + 1)}$$\n$$= \\lim_{x \\to 2} \\frac{-(x - 2)(\\sqrt{x^2 - 3} + 1)}{(x^2 - 3) - 1}$$\nFaktorkan penyebut $x^2 - 4 = (x - 2)(x + 2)$:\n$$= \\lim_{x \\to 2} \\frac{-(x - 2)(\\sqrt{x^2 - 3} + 1)}{(x - 2)(x + 2)}$$\nCoret $(x - 2)$ lalu substitusikan $x = 2$:\n$$= \\frac{-(\\sqrt{4 - 3} + 1)}{2 + 2} = \\frac{-(1 + 1)}{4} = -\\frac{2}{4} = -\\frac{1}{2}$$\n\nJawaban Benar: **B**',
    subject: 'Matematika Umum',
    difficulty: 'Sulit',
    bab: 'Limit Fungsi Aljabar',
    year: '2026'
  },
  {
    id: 'q_limit_5',
    text: 'Nilai dari $\\lim_{x \\to 0} \\frac{1}{x^2}$ adalah...',
    options: ['-1', '0', '1', '$\\infty$', 'Tidak Terdefinisi'],
    correctAnswerIndex: 3,
    correctAnswer: 'D',
    explanation: 'Ketika $x$ mendekati $0$, penyebut $x^2$ akan selalu positif dan mendekati nol ($0^+$).\nPembagian bilangan positif oleh angka positif yang sangat kecil dekat nol akan menghasilkan bilangan tak hingga besar:\n$$\\lim_{x \\to 0} \\frac{1}{x^2} = \\frac{1}{0^+} = +\\infty$$\n\nJawaban Benar: **D**',
    subject: 'Matematika Umum',
    difficulty: 'Sulit',
    bab: 'Limit Fungsi Aljabar',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_1',
    text: 'Diketahui $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$. Determinan matriks $A$ adalah...',
    options: ['2', '5', '8', '10', '12'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: '$$\\det(A) = (2 \\cdot 4) - (1 \\cdot 3) = 8 - 3 = 5$$',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Matriks',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_2',
    text: 'Invers dari matriks $\\begin{pmatrix} 1 & 2 \\\\ 3 & 5 \\end{pmatrix}$ adalah...',
    options: ['$\\begin{pmatrix} 5 & -2 \\\\ -3 & 1 \\end{pmatrix}$', '$\\begin{pmatrix} -5 & 2 \\\\ 3 & -1 \\end{pmatrix}$', '$\\begin{pmatrix} 5 & 2 \\\\ 3 & 1 \\end{pmatrix}$', '$\\begin{pmatrix} -5 & -2 \\\\ -3 & -1 \\end{pmatrix}$', 'Matriks tidak memiliki invers'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: '$$\\det = 5 - 6 = -1$$\n$$A^{-1} = \\frac{1}{-1} \\begin{pmatrix} 5 & -2 \\\\ -3 & 1 \\end{pmatrix} = \\begin{pmatrix} -5 & 2 \\\\ 3 & -1 \\end{pmatrix}$$',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Matriks',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_3',
    text: 'Jika $P(x) = x^3 - 4x^2 + x + 6$, maka sisa pembagian oleh $(x - 2)$ adalah...',
    options: ['-4', '0', '2', '4', '8'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: '$P(2) = (2)^3 - 4(2)^2 + 2 + 6 = 8 - 16 + 2 + 6 = 0$',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Polinomial',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_4',
    text: 'Faktor dari $x^2 - 7x + 12$ adalah...',
    options: ['$(x - 2)(x - 5)$', '$(x - 3)(x - 4)$', '$(x + 3)(x - 4)$', '$(x + 2)(x - 6)$', '$(x - 1)(x - 12)$'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: '$x^2 - 7x + 12 = (x - 3)(x - 4)$',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Mudah',
    bab: 'Aljabar',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_5',
    text: 'Domain fungsi $f(x) = \\frac{\\sqrt{x - 1}}{x - 4}$ adalah...',
    options: ['$x > 1$', '$x \\ge 1$', '$x \\ge 1, x \\neq 4$', 'Semua bilangan real', '$x > 4$'],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: '1. Syarat dalam akar: $x - 1 \\ge 0 \\implies x \\ge 1$.\n2. Syarat penyebut: $x - 4 \\neq 0 \\implies x \\neq 4$.\nIrisan: $x \\ge 1, x \\neq 4$.',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Fungsi & Domain',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_6',
    text: 'Nilai dari $\\log_2 32 + \\log_2 \\frac{1}{8}$ adalah...',
    options: ['1', '2', '3', '4', '5'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: '$\\log_2 32 = 5$ dan $\\log_2 \\frac{1}{8} = -3 \\implies 5 + (-3) = 2$',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Mudah',
    bab: 'Eksponen & Logaritma',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_7',
    text: 'Panjang vektor $\\vec{v} = (6, -8)$ adalah...',
    options: ['8', '9', '10', '12', '14'],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: '$|\\vec{v}| = \\sqrt{6^2 + (-8)^2} = \\sqrt{36 + 64} = 10$',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Mudah',
    bab: 'Vektor',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_8',
    text: 'Persamaan lingkaran berpusat di $(2, -1)$ dan berjari-jari $3$ adalah...',
    options: ['$x^2 + y^2 = 9$', '$(x + 2)^2 + (y - 1)^2 = 9$', '$(x - 2)^2 + (y + 1)^2 = 9$', '$(x - 2)^2 + (y - 1)^2 = 3$', '$(x + 2)^2 + (y + 1)^2 = 9$'],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: '$(x - 2)^2 + (y - (-1))^2 = 3^2 \\implies (x - 2)^2 + (y + 1)^2 = 9$',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Geometri Lingkaran',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_9',
    text: 'Titik $(3, -2)$ direfleksikan terhadap sumbu-$Y$. Hasil bayangannya adalah...',
    options: ['(-3, -2)', '(3, 2)', '(-3, 2)', '(2, 3)', '(-2, 3)'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Refleksi terhadap sumbu-$Y$: $(x, y) \\rightarrow (-x, y) \\implies (3, -2) \\rightarrow (-3, -2)$',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Mudah',
    bab: 'Transformasi Geometri',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_10',
    text: 'Nilai dari $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$ adalah...',
    options: ['0', '2', '4', '6', 'Tak hingga'],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: '$\\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x-2} = \\lim_{x \\to 2} (x+2) = 2 + 2 = 4$',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Mudah',
    bab: 'Kalkulus - Limit Aljabar',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_11',
    text: 'Nilai dari $\\lim_{x \\to 0} \\frac{\\sin x}{x}$ adalah...',
    options: ['0', '1', '2', 'Tidak ada', 'Tak hingga'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Sifat limit trigonometri dasar: $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Mudah',
    bab: 'Kalkulus - Limit Trigonometri',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_12',
    text: 'Nilai dari $2^3 \\times 2^{-5}$ adalah...',
    options: ['4', '2', '$\\frac{1}{4}$', '$\\frac{1}{2}$', '$\\frac{1}{8}$'],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: '$2^3 \\times 2^{-5} = 2^{3-5} = 2^{-2} = \\frac{1}{4}$',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Mudah',
    bab: 'Eksponen',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_13',
    text: 'Manakah fungsi berikut yang memiliki domain semua bilangan real ($\\mathbb{R}$)? *(Pilih semua jawaban yang benar)*',
    questionType: 'checkboxes',
    options: [
      '$f(x) = x^2 + 1$',
      '$f(x) = \\sqrt{x}$',
      '$f(x) = 2^x$',
      '$f(x) = |x|$',
      '$f(x) = \\frac{1}{x}$'
    ],
    correctAnswerIndices: [0, 2, 3],
    correctAnswerIndex: 0,
    correctAnswer: 'A, C, D',
    explanation: '- $f(x) = x^2 + 1$: Polinomial, domain $\\mathbb{R}$ (BENAR)\n- $f(x) = \\sqrt{x}$: Domain $x \\ge 0$ (SALAH)\n- $f(x) = 2^x$: Eksponensial, domain $\\mathbb{R}$ (BENAR)\n- $f(x) = |x|$: Mutlak, domain $\\mathbb{R}$ (BENAR)\n- $f(x) = \\frac{1}{x}$: Tak terdefinisi pada $x = 0$ (SALAH)',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Fungsi & Domain',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_14',
    text: 'Manakah pernyataan yang merupakan hasil translasi oleh vektor $\\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}$? *(Pilih semua jawaban yang benar)*',
    questionType: 'checkboxes',
    options: [
      '$(x, y) \\rightarrow (x + 2, y - 3)$',
      '$(x, y) \\rightarrow (x - 2, y + 3)$',
      'Titik bergeser 2 satuan ke kanan',
      'Titik bergeser 3 satuan ke bawah',
      'Refleksi terhadap sumbu-X'
    ],
    correctAnswerIndices: [0, 2, 3],
    correctAnswerIndex: 0,
    correctAnswer: 'A, C, D',
    explanation: 'Translasi $\\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}$ menambah $x$ sebesar 2 (ke kanan) dan mengurangi $y$ sebesar 3 (ke bawah).',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Transformasi Geometri',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_15',
    text: 'Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$. Pernyataan yang benar adalah... *(Pilih semua jawaban yang benar)*',
    questionType: 'checkboxes',
    options: [
      'Determinan A = -2',
      'Determinan A = 2',
      'Matriks memiliki invers',
      'Matriks singular',
      'Ordo matriks adalah 2 x 2'
    ],
    correctAnswerIndices: [0, 2, 4],
    correctAnswerIndex: 0,
    correctAnswer: 'A, C, E',
    explanation: '$\\det(A) = 1(4) - 2(3) = -2$. Matriks non-singular, punya invers, dan ordo $2 \\times 2$.',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Matriks',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_16',
    text: 'Manakah limit berikut yang bernilai 1? *(Pilih semua jawaban yang benar)*',
    questionType: 'checkboxes',
    options: [
      '$\\lim_{x \\to 0} \\frac{\\sin x}{x}$',
      '$\\lim_{x \\to 0} \\frac{\\tan x}{x}$',
      '$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x}$',
      '$\\lim_{x \\to 0} \\frac{x}{\\sin x}$',
      '$\\lim_{x \\to 0} \\frac{x}{\\tan x}$'
    ],
    correctAnswerIndices: [0, 1, 3, 4],
    correctAnswerIndex: 0,
    correctAnswer: 'A, B, D, E',
    explanation: 'Limit trigonometri $\\frac{\\sin x}{x}$, $\\frac{\\tan x}{x}$, $\\frac{x}{\\sin x}$, dan $\\frac{x}{\\tan x}$ bernilai 1 saat $x \\to 0$.',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Kalkulus - Limit Trigonometri',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_17',
    text: 'Tentukan kebenaran dari pernyataan matriks berikut:\n1) Determinan matriks identitas selalu 1.\n2) Semua matriks memiliki invers.\n3) Determinan matriks singular sama dengan nol.',
    options: [
      '1) Benar, 2) Salah, 3) Benar',
      '1) Benar, 2) Benar, 3) Benar',
      '1) Salah, 2) Salah, 3) Benar',
      '1) Benar, 2) Salah, 3) Salah',
      '1) Salah, 2) Benar, 3) Salah'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: '1) $\\det(I) = 1$ (BENAR)\n2) Hanya matriks non-singular yang punya invers (SALAH)\n3) Matriks singular memliki $\\det = 0$ (BENAR)',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Matriks',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_18',
    text: 'Tentukan kebenaran dari pernyataan fungsi berikut:\n1) Grafik fungsi eksponensial selalu melalui titik (0,1).\n2) Fungsi logaritma merupakan invers fungsi eksponensial.\n3) Domain fungsi logaritma adalah semua bilangan real.',
    options: [
      '1) Benar, 2) Benar, 3) Benar',
      '1) Benar, 2) Benar, 3) Salah',
      '1) Benar, 2) Salah, 3) Salah',
      '1) Salah, 2) Benar, 3) Salah',
      '1) Salah, 2) Salah, 3) Benar'
    ],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: '1) $a^0 = 1 \\implies (0,1)$ (BENAR)\n2) Logaritma invers dari eksponen (BENAR)\n3) Domain logaritma $x > 0$ (SALAH)',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Eksponen & Logaritma',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_19',
    text: 'Tentukan kebenaran dari pernyataan geometri berikut:\n1) Panjang vektor tidak pernah bernilai negatif.\n2) Refleksi terhadap sumbu-X mengubah tanda koordinat y.\n3) Dilatasi dengan faktor skala 1 mengubah ukuran bangun.',
    options: [
      '1) Benar, 2) Benar, 3) Salah',
      '1) Benar, 2) Salah, 3) Benar',
      '1) Salah, 2) Benar, 3) Benar',
      '1) Benar, 2) Benar, 3) Benar',
      '1) Salah, 2) Salah, 3) Salah'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: '1) $|\\vec{v}| \\ge 0$ (BENAR)\n2) Refleksi sumbu-$X$: $(x,y) \\rightarrow (x,-y)$ (BENAR)\n3) Dilatasi $k=1$ tidak mengubah ukuran (SALAH)',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Vektor & Geometri',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_20',
    text: 'Tentukan kebenaran dari pernyataan limit fungsi berikut:\n1) $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$.\n2) Limit fungsi selalu dapat dihitung dengan substitusi langsung.\n3) Jika limit kiri dan limit kanan berbeda maka limit tidak ada.',
    options: [
      '1) Benar, 2) Benar, 3) Benar',
      '1) Benar, 2) Salah, 3) Benar',
      '1) Salah, 2) Benar, 3) Salah',
      '1) Benar, 2) Salah, 3) Salah',
      '1) Salah, 2) Salah, 3) Benar'
    ],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: '1) $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$ (BENAR)\n2) Jika $\\frac{0}{0}$, harus difaktorkan atau dikalikan sekawan (SALAH)\n3) Limit ada jika dan hanya jika limit kiri = limit kanan (BENAR)',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Kalkulus - Limit',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_21',
    text: 'Diketahui $K = \\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$ dan $C = \\begin{pmatrix} 15 \\\\ 41 \\end{pmatrix}$. Jika $K M = C$ dengan $M = \\begin{pmatrix} a \\\\ b \\end{pmatrix}$, berapakah nilai $a$ dan $b$?',
    options: ['$a=3, b=5$', '$a=5, b=3$', '$a=4, b=7$', '$a=7, b=4$', '$a=2, b=9$'],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: '$K^{-1} = \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$.\n$$M = K^{-1} C = \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix} \\begin{pmatrix} 15 \\\\ 41 \\end{pmatrix} = \\begin{pmatrix} 45 - 41 \\\\ -75 + 82 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 7 \\end{pmatrix}$$\nDiperoleh $a = 4$ dan $b = 7$.',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Matriks',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_22',
    text: 'Diketahui $\\sin\\theta = \\frac{1}{\\sqrt{10}}$, $|\\vec{a}| = \\sqrt{5}$, $|\\vec{b}| = 2$, dan $\\vec{b} = \\vec{a} - \\vec{c}$. Berapakah nilai dari $\\vec{a} \\cdot \\vec{c}$?',
    options: ['$5 - 2\\sqrt{2}$', '$3 - \\sqrt{2}$', '$4 - 3\\sqrt{2}$', '$5 - \\sqrt{2}$', '$5 - 3\\sqrt{2}$'],
    correctAnswerIndex: 4,
    correctAnswer: 'E',
    explanation: '1. $\\cos\\theta = \\sqrt{1 - \\frac{1}{10}} = \\frac{3}{\\sqrt{10}}$.\n2. $\\vec{a} \\cdot \\vec{b} = \\sqrt{5} \\cdot 2 \\cdot \\frac{3}{\\sqrt{10}} = 3\\sqrt{2}$.\n3. $\\vec{a} \\cdot \\vec{c} = \\vec{a} \\cdot (\\vec{a} - \\vec{b}) = |\\vec{a}|^2 - \\vec{a} \\cdot \\vec{b} = 5 - 3\\sqrt{2}$.',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sulit',
    bab: 'Vektor',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_23',
    text: 'Fungsi rasional $f(x) = \\frac{2x^2 - 3x - 2}{x^2 - 4}$. Manakah pernyataan yang BENAR mengenai fungsi $f(x)$?',
    options: ['$x=2$ tidak termasuk domain dan terdapat removable discontinuity (hole) di $x=2$', '$x=2$ termasuk domain dan kontinu di $x=2$', 'Domain fungsi adalah semua bilangan real tanpa pengecualian', 'Terdapat asimtot tegak di $x=2$ dan $x=-2$', 'Range fungsi adalah semua bilangan real tanpa batas'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Penyebut bernilai nol saat $x=2$ dan $x=-2$. Karena $2x^2 - 3x - 2 = (2x+1)(x-2)$, faktor $(x-2)$ dapat disederhanakan sehingga di $x=2$ terjadi *removable discontinuity* (hole).',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Fungsi Rasional',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_24',
    text: 'Fungsi gelombang tekanan $f(x) = -3\\sin(2x - \\frac{\\pi}{3}) + 4$. Manakah pernyataan berikut yang semuanya BENAR?',
    options: ['Periode $= \\pi$, Nilai minimum $= 1$, Nilai maksimum $= 7$', 'Periode $= 2\\pi$, Nilai minimum $= 1$, Nilai maksimum $= 7$', 'Periode $= \\pi$, Nilai minimum $= -3$, Nilai maksimum $= 4$', 'Periode $= \\frac{\\pi}{2}$, Nilai minimum $= 1$, Nilai maksimum $= 7$', 'Periode $= \\pi$, Nilai minimum $= 0$, Nilai maksimum $= 7$'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: '1. Periode $= \\frac{2\\pi}{2} = \\pi$.\n2. Min $= -|-3| + 4 = 1$.\n3. Maks $= |-3| + 4 = 7$.',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Trigonometri',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_25',
    text: 'Diketahui titik $A(1, -2, 3)$ dan $B(4, 2, 3)$. Titik $C$ membagi garis $AB$ dengan rasio $AC : CB = 2 : 1$. Manakah koordinat titik $C$ dan panjang $|\\vec{BC}|$?',
    options: ['$C(3, \\frac{2}{3}, 3)$ dan $|\\vec{BC}| = \\frac{5}{3}$', '$C(2, 1, 3)$ dan $|\\vec{BC}| = 2$', '$C(3, 1, 3)$ dan $|\\vec{BC}| = \\frac{4}{3}$', '$C(3, \\frac{2}{3}, 3)$ dan $|\\vec{BC}| = 2$', '$C(4, 0, 3)$ dan $|\\vec{BC}| = 1$'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: '1. $C = \\frac{1(A) + 2(B)}{3} = \\left(3, \\frac{2}{3}, 3\\right)$.\n2. $\\vec{BC} = C - B = \\left(-1, -\\frac{4}{3}, 0\\right) \\implies |\\vec{BC}| = \\sqrt{1 + \\frac{16}{9}} = \\frac{5}{3}$.',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sulit',
    bab: 'Vektor 3D',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_26',
    text: 'Kolam air mancur berbentuk lingkaran dengan persamaan $x^2 + y^2 - 4x - 6y - 3 = 0$. Taman kota besar konsentris dengan kolam tetapi memiliki jari-jari 2 kali lipatnya. Tentukan persamaan lingkaran taman kota besar tersebut.',
    options: ['$(x-2)^2 + (y-3)^2 = 16$', '$(x-2)^2 + (y-3)^2 = 32$', '$(x-2)^2 + (y-3)^2 = 64$', '$(x+2)^2 + (y+3)^2 = 64$', '$(x-4)^2 + (y-6)^2 = 64$'],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: '1. Pusat $(2, 3)$, $r_1 = \\sqrt{2^2 + 3^2 - (-3)} = 4$.\n2. Jari-jari taman besar $R = 2 \\times 4 = 8$.\n3. Persamaan taman besar: $(x-2)^2 + (y-3)^2 = 8^2 = 64$.',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Geometri Analitis Lingkaran',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_27',
    text: 'Diketahui persamaan lingkaran $x^2 + y^2 - 4x + 6y - 12 = 0$. Manakah sifat-sifat lingkaran yang BENAR?',
    options: ['Pusat $(2, -3)$, jari-jari $= 5$, dan memotong sumbu-X di dua titik berbeda', 'Pusat $(-2, 3)$, jari-jari $= 5$, dan menyinggung sumbu-X', 'Pusat $(2, -3)$, jari-jari $= 12$, dan memotong sumbu-Y', 'Pusat $(4, -6)$, jari-jari $= 5$, dan melalui titik $(0,0)$', 'Pusat $(2, -3)$, jari-jari $= 25$, dan memotong sumbu-X'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: '1. Pusat $= (2, -3)$.\n2. $r = \\sqrt{2^2 + (-3)^2 - (-12)} = \\sqrt{25} = 5$.\n3. Sumbu-X ($y=0$): $x^2 - 4x - 12 = 0 \\implies (x-6)(x+2)=0$ (2 titik potong).',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Geometri Analitis Lingkaran',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_28',
    text: 'Logo klub berbentuk segitiga $PQR$ dengan $P(1,1), Q(4,1), R(1,5)$ ditransformasikan oleh matriks $M = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$. Berapakah luas bayangan logo segitiga tersebut?',
    options: ['18 satuan luas', '24 satuan luas', '30 satuan luas', '36 satuan luas', '42 satuan luas'],
    correctAnswerIndex: 3,
    correctAnswer: 'D',
    explanation: '1. Luas awal $= \\frac{1}{2} \\times (4-1) \\times (5-1) = \\frac{1}{2} \\times 3 \\times 4 = 6$.\n2. $\\det(M) = (2)(3) - (1)(0) = 6$.\n3. Luas bayangan $= 6 \\times 6 = 36$ satuan luas.',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Transformasi Geometri',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_29',
    text: 'Tangki gas diletakkan di pusat $(1,1)$ dan dibatasi oleh dinding lurus berpersamaan $3x - 4y - 12 = 0$. Jika tangki berbentuk lingkaran yang menyinggung dinding tersebut, berapakah diameter tangki?',
    options: ['2,6 satuan', '5,2 satuan', '3,5 satuan', '4,8 satuan', '6,0 satuan'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: '1. Jari-jari $r = \\left| \\frac{3(1) - 4(1) - 12}{\\sqrt{3^2 + (-4)^2}} \\right| = \\left| \\frac{-13}{5} \\right| = 2,6$.\n2. Diameter $= 2 \\times 2,6 = 5,2$ satuan.',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sulit',
    bab: 'Geometri Analitis Lingkaran',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_30',
    text: 'Suatu daerah $A$ ditransformasikan oleh dilatasi skala $k=3$, kemudian dilanjutkan oleh matriks $T_2 = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$. Jika luas daerah akhir setelah kedua transformasi adalah $36$ satuan luas, berapakah luas awal daerah $A$?',
    options: ['1 satuan luas', '2 satuan luas', '3 satuan luas', '4 satuan luas', '6 satuan luas'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: '1. $\\det(T_1) = k^2 = 3^2 = 9$.\n2. $\\det(T_2) = |1(4) - 2(3)| = |-2| = 2$.\n3. Luas akhir $= |\\det(T_2)| \\times |\\det(T_1)| \\times A \\implies 36 = 2 \\times 9 \\times A \\implies A = 2$ satuan luas.',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sulit',
    bab: 'Transformasi Geometri',
    year: '2026'
  },
  {
    id: 'q_integral_1',
    text: 'Nilai dari $\\int (3x^2-4x+5)\\,dx$ adalah ....',
    options: ['$x^3-2x^2+5x+C$', '$3x^3-2x^2+5x+C$', '$x^3-4x^2+5x+C$', '$x^3-2x+5+C$', '$3x^3-4x^2+5x+C$'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Gunakan sifat linear integral:\n$$\\int 3x^2\\,dx = x^3$$\n$$\\int -4x\\,dx = -2x^2$$\n$$\\int 5\\,dx = 5x$$\nSehingga: $x^3-2x^2+5x+C$',
    subject: 'Matematika Lanjut',
    difficulty: 'Sedang',
    bab: 'Integral',
    year: '2026'
  },
  {
    id: 'q_integral_2',
    text: 'Nilai dari $\\int_0^2 (2x+1)\\,dx$ adalah ....',
    options: ['4', '5', '6', '7', '8'],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Antiturunan $F(x) = x^2+x$. Maka $F(2)-F(0) = (4+2)-0 = 6$.',
    subject: 'Matematika Lanjut',
    difficulty: 'Sedang',
    bab: 'Integral',
    year: '2026'
  },
  {
    id: 'q_integral_3',
    text: 'Nilai dari $\\int 2x(x^2+1)^5\\,dx$ adalah ....',
    options: ['$\\dfrac{(x^2+1)^6}{3}+C$', '$\\dfrac{(x^2+1)^6}{6}+C$', '$(x^2+1)^6+C$', '$2(x^2+1)^6+C$', '$\\dfrac{(x^2+1)^5}{5}+C$'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Substitusi $u = x^2+1 \\implies du = 2x\\,dx$. Integral menjadi $\\int u^5\\,du = \\frac{u^6}{6}+C = \\frac{(x^2+1)^6}{6}+C$.',
    subject: 'Matematika Lanjut',
    difficulty: 'Sedang',
    bab: 'Integral',
    year: '2026'
  },
  {
    id: 'q_integral_4',
    text: 'Hitunglah $\\int xe^x\\,dx$',
    options: ['$xe^x+C$', '$e^x(x-1)+C$', '$e^x(x+1)+C$', '$xe^x-e^x+C$', 'B dan D benar'],
    correctAnswerIndex: 4,
    correctAnswer: 'E',
    explanation: 'Gunakan integral parsial:\n$u=x, dv=e^x dx \\implies du=dx, v=e^x$.\nMaka $\\int xe^x dx = xe^x - e^x + C = e^x(x-1) + C$.\nKedua bentuk B dan D ekuivalen, sehingga jawaban E benar.',
    subject: 'Matematika Lanjut',
    difficulty: 'Sulit',
    bab: 'Integral',
    year: '2026'
  },
  {
    id: 'q_integral_5',
    text: 'Daerah yang dibatasi kurva $y=x^2$, sumbu-$x$, dan garis $x=2$ memiliki luas ....',
    options: ['$\\dfrac{8}{3}$', '$\\dfrac{4}{3}$', '4', '$\\dfrac{16}{3}$', '8'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Luas $=\\int_0^2 x^2\\,dx = \\left[\\frac{x^3}{3}\\right]_0^2 = \\frac{8}{3}$.',
    subject: 'Matematika Lanjut',
    difficulty: 'Sedang',
    bab: 'Integral',
    year: '2026'
  },
  {
    id: 'q_turunan_1',
    text: 'Jika $f(x)=3x^4-2x^3+5x-7$, maka nilai $f\'(2)$ adalah ....',
    options: ['73', '77', '81', '89', '97'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Turunan pertama dari $f(x)$ adalah $f\'(x) = 12x^3 - 6x^2 + 5$. Substitusikan $x = 2$: $f\'(2) = 12(2)^3 - 6(2)^2 + 5 = 12(8) - 6(4) + 5 = 96 - 24 + 5 = 77$.',
    subject: 'Matematika Lanjut',
    difficulty: 'Sedang',
    bab: 'Turunan Fungsi',
    year: '2026'
  },
  {
    id: 'q_turunan_2',
    text: 'Turunan pertama dari $f(x)=\\dfrac{2x+1}{x-3}$ adalah ....',
    options: ['$\\dfrac{-7}{(x-3)^2}$', '$\\dfrac{7}{(x-3)^2}$', '$\\dfrac{-5}{(x-3)^2}$', '$\\dfrac{2}{x-3}$', '$\\dfrac{1}{(x-3)^2}$'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Gunakan aturan $u/v$: $u = 2x+1 \\implies u\' = 2$, $v = x-3 \\implies v\' = 1$.\n$f\'(x) = \\frac{2(x-3) - (2x+1)(1)}{(x-3)^2} = \\frac{-7}{(x-3)^2}$.',
    subject: 'Matematika Lanjut',
    difficulty: 'Sedang',
    bab: 'Turunan Fungsi',
    year: '2026'
  },
  {
    id: 'q_turunan_3',
    text: 'Turunan fungsi $f(x)=\\sqrt{x^2+1}$ adalah ....',
    options: ['$\\dfrac{x}{\\sqrt{x^2+1}}$', '$\\dfrac{2x}{\\sqrt{x^2+1}}$', '$\\dfrac{x}{2\\sqrt{x^2+1}}$', '$\\sqrt{x^2+1}$', '$2x$'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Aturan rantai: $f\'(x) = \\frac{1}{2}(x^2+1)^{-1/2} \\cdot 2x = \\frac{x}{\\sqrt{x^2+1}}$.',
    subject: 'Matematika Lanjut',
    difficulty: 'Sedang',
    bab: 'Turunan Fungsi',
    year: '2026'
  },
  {
    id: 'q_turunan_4',
    text: 'Jika $y=(x^2+1)^5$, maka $y\'$ adalah ....',
    options: ['$10x(x^2+1)^4$', '$5(x^2+1)^4$', '$5x(x^2+1)^5$', '$2x(x^2+1)^5$', '$10(x^2+1)^4$'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Menggunakan aturan rantai: $y\' = 5(x^2+1)^4 \\cdot (2x) = 10x(x^2+1)^4$.',
    subject: 'Matematika Lanjut',
    difficulty: 'Sedang',
    bab: 'Turunan Fungsi',
    year: '2026'
  },
  {
    id: 'q_turunan_5',
    text: 'Gradien garis singgung kurva $y=x^3-6x^2+5$ di titik $x=1$ adalah ....',
    options: ['-7', '-9', '-8', '-10', '-5'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Gradien garis singgung $m = y\' = 3x^2 - 12x$. Di $x=1$: $m = 3(1)^2 - 12(1) = -9$.',
    subject: 'Matematika Lanjut',
    difficulty: 'Sedang',
    bab: 'Turunan Fungsi',
    year: '2026'
  },
  {
    id: 'q_turunan_6',
    text: 'Nilai maksimum lokal fungsi $f(x)=4x-x^2$ adalah ....',
    options: ['2', '3', '4', '5', '6'],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: '$f\'(x) = 4 - 2x = 0 \\implies x = 2$. Maksimum lokal $f(2) = 4(2) - 2^2 = 4$.',
    subject: 'Matematika Lanjut',
    difficulty: 'Sedang',
    bab: 'Turunan Fungsi',
    year: '2026'
  },
  {
    id: 'q_turunan_7',
    text: 'Fungsi $f(x)=x^3-3x$ memiliki titik stasioner pada ....',
    options: ['$x=0$', '$x=\\pm 1$', '$x=\\pm 2$', '$x=3$', 'Tidak ada'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Syarat stasioner $f\'(x) = 3x^2 - 3 = 0 \\implies x^2 = 1 \\implies x = \\pm 1$.',
    subject: 'Matematika Lanjut',
    difficulty: 'Sedang',
    bab: 'Turunan Fungsi',
    year: '2026'
  },
  {
    id: 'q_turunan_8',
    text: 'Turunan kedua dari $f(x)=x^4-2x^2$ adalah ....',
    options: ['$12x^2-4$', '$4x^3-4x$', '$12x^2$', '$6x-4$', '$8x^2-2$'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: '$f\'(x) = 4x^3 - 4x \\implies f\'\'(x) = 12x^2 - 4$.',
    subject: 'Matematika Lanjut',
    difficulty: 'Sedang',
    bab: 'Turunan Fungsi',
    year: '2026'
  },
  {
    id: 'q_turunan_9',
    text: 'Jika $f\'(x)>0$ pada suatu interval, maka fungsi ....',
    options: ['Konstan', 'Menurun', 'Naik', 'Maksimum', 'Minimum'],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Sesuai teorema kemonotonan: jika $f\'(x) > 0$, maka $f(x)$ merupakan fungsi naik.',
    subject: 'Matematika Lanjut',
    difficulty: 'Sedang',
    bab: 'Turunan Fungsi',
    year: '2026'
  },
  {
    id: 'q_turunan_10',
    text: 'Jika $f\'\'(a)>0$ dan $f\'(a)=0$, maka titik tersebut merupakan ....',
    options: ['Titik belok', 'Maksimum lokal', 'Minimum lokal', 'Tidak dapat ditentukan', 'Gradien nol'],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Uji Turunan Kedua: $f\'(a)=0$ dan $f\'\'(a)>0$ menandakan kurva cekung ke atas (minimum lokal).',
    subject: 'Matematika Lanjut',
    difficulty: 'Sedang',
    bab: 'Turunan Fungsi',
    year: '2026'
  },
  {
    id: 'q_turunan_11',
    text: 'Manakah fungsi berikut yang turunannya selalu positif untuk setiap $x \\in \\mathbb{R}$? (Pilih semua jawaban benar)',
    options: ['$x^2+1$', '$3x+2$', '$e^x$', '$-x^2$', '$x^3$'],
    questionType: 'checkboxes',
    correctAnswerIndex: 1,
    correctAnswerIndices: [1, 2],
    correctAnswer: 'B, C',
    explanation: '$f\'(x)=3 > 0$ dan $f\'(x)=e^x > 0$ selalu positif untuk seluruh $x \\in \\mathbb{R}$. Jawaban benar B dan C.',
    subject: 'Matematika Lanjut',
    difficulty: 'Sedang',
    bab: 'Turunan Fungsi',
    year: '2026'
  },
  {
    id: 'q_turunan_12',
    text: 'Manakah yang merupakan aturan turunan? (Pilih semua jawaban benar)',
    options: ['Aturan rantai', 'Aturan hasil kali', 'Aturan hasil bagi', 'Aturan Pythagoras', 'Aturan pangkat'],
    questionType: 'checkboxes',
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 2, 4],
    correctAnswer: 'A, B, C, E',
    explanation: 'Aturan Rantai, Hasil Kali, Hasil Bagi, dan Pangkat adalah aturan diferensial kalkulus.',
    subject: 'Matematika Lanjut',
    difficulty: 'Mudah',
    bab: 'Turunan Fungsi',
    year: '2026'
  },
  {
    id: 'q_turunan_13',
    text: 'Fungsi berikut memiliki titik stasioner (pilih semua jawaban benar):',
    options: ['$x^2$', '$x^3$', '$2x+1$', '$x^4$', '$e^x$'],
    questionType: 'checkboxes',
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 3],
    correctAnswer: 'A, B, D',
    explanation: 'Titik stasioner $f\'(x)=0$ ada pada $x^2, x^3, x^4$ di $x=0$.',
    subject: 'Matematika Lanjut',
    difficulty: 'Sedang',
    bab: 'Turunan Fungsi',
    year: '2026'
  },
  {
    id: 'q_turunan_14',
    text: 'Yang termasuk aplikasi turunan adalah .... (Pilih semua jawaban benar)',
    options: ['Menentukan gradien garis singgung', 'Menentukan maksimum-minimum', 'Menentukan kecepatan sesaat', 'Menentukan volume prisma', 'Menentukan interval naik-turun'],
    questionType: 'checkboxes',
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 2, 4],
    correctAnswer: 'A, B, C, E',
    explanation: 'Menentukan gradien, maks-min, kecepatan sesaat, dan interval naik-turun menggunakan konsep turunan.',
    subject: 'Matematika Lanjut',
    difficulty: 'Mudah',
    bab: 'Turunan Fungsi',
    year: '2026'
  },
  {
    id: 'q_turunan_15',
    text: 'Jika $f\'(x)=0$, maka kemungkinan yang terjadi pada titik stasioner tersebut adalah .... (Pilih semua jawaban benar)',
    options: ['Titik maksimum', 'Titik minimum', 'Titik belok stasioner', 'Selalu titik belok', 'Selalu maksimum'],
    questionType: 'checkboxes',
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 2],
    correctAnswer: 'A, B, C',
    explanation: 'Titik stasioner $f\'(x)=0$ dapat berupa maksimum lokal, minimum lokal, atau titik belok stasioner.',
    subject: 'Matematika Lanjut',
    difficulty: 'Sedang',
    bab: 'Turunan Fungsi',
    year: '2026'
  },
  {
    id: 'q_turunan_16',
    text: 'Pernyataan [Benar / Salah]: "Jika $f\'(x) < 0$, maka fungsi menurun."',
    options: ['Benar', 'Salah'],
    correctAnswerIndex: 0,
    correctAnswer: 'Benar',
    explanation: 'Turunan pertama negatif ($f\'(x) < 0$) menunjukkan fungsi dalam keadaan menurun.',
    subject: 'Matematika Lanjut',
    difficulty: 'Mudah',
    bab: 'Turunan Fungsi',
    year: '2026'
  },
  {
    id: 'q_turunan_17',
    text: 'Pernyataan [Benar / Salah]: "Turunan dari konstanta adalah konstanta."',
    options: ['Benar', 'Salah'],
    correctAnswerIndex: 1,
    correctAnswer: 'Salah',
    explanation: 'Turunan dari fungsi konstanta $f(x)=c$ adalah nol ($f\'(x)=0$).',
    subject: 'Matematika Lanjut',
    difficulty: 'Mudah',
    bab: 'Turunan Fungsi',
    year: '2026'
  },
  {
    id: 'q_turunan_18',
    text: 'Pernyataan [Benar / Salah]: "Jika $f\'\'(x) < 0$, maka grafik cekung ke bawah."',
    options: ['Benar', 'Salah'],
    correctAnswerIndex: 0,
    correctAnswer: 'Benar',
    explanation: 'Turunan kedua negatif menandakan grafik fungsi cekung ke bawah (concave downward).',
    subject: 'Matematika Lanjut',
    difficulty: 'Mudah',
    bab: 'Turunan Fungsi',
    year: '2026'
  },
  {
    id: 'q_turunan_19',
    text: 'Kecukupan Data: Apakah $x=2$ merupakan titik stasioner fungsi $f(x)$?\n(1) $f\'(2) = 0$\n(2) $f\'\'(2) > 0$',
    options: ['(1) saja cukup', '(2) saja cukup', 'Bersama-sama cukup', 'Masing-masing cukup', 'Tidak cukup'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Syarat titik stasioner di $x=2$ adalah $f\'(2)=0$. Jadi Pernyataan (1) saja cukup.',
    subject: 'Matematika Lanjut',
    difficulty: 'Sedang',
    bab: 'Turunan Fungsi',
    year: '2026'
  },
  {
    id: 'q_turunan_20',
    text: 'Kecukupan Data: Apakah fungsi $f(x)$ memiliki maksimum lokal di $x=a$?\n(1) $f\'(a) = 0$\n(2) $f\'\'(a) < 0$',
    options: ['(1) saja cukup', '(2) saja cukup', 'Bersama-sama cukup', 'Masing-masing cukup', 'Tidak cukup'],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Uji turunan kedua butuh $f\'(a)=0$ (stasioner) dan $f\'\'(a)<0$ (cekung ke bawah). Kedua pernyataan BERSAMA-SAMA cukup.',
    subject: 'Matematika Lanjut',
    difficulty: 'Sedang',
    bab: 'Turunan Fungsi',
    year: '2026'
  },
  // --- 20 SOAL SIMULASI ANBK / TKA MATEMATIKA WAJIB (IRT SCALE 200 - 800) ---
  {
    id: 'q_anbk_mtkw_1',
    text: 'Harga 3 buah buku dan 2 buah penggaris $\\text{Rp}18.000,00$. Jika harga sebuah buku $\\text{Rp}1.000,00$ lebih mahal dari sebuah penggaris, harga 2 buah buku dan 5 buah penggaris adalah ....',
    options: ['$\\text{Rp}19.000,00$', '$\\text{Rp}23.000,00$', '$\\text{Rp}25.000,00$', '$\\text{Rp}27.000,00$', '$\\text{Rp}30.000,00$'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Misal harga 1 buku = $x$, penggaris = $y$.\n1) $3x + 2y = 18.000$\n2) $x = y + 1.000$\n\nSubstitusi $x$:\n$$3(y + 1.000) + 2y = 18.000 \\implies 5y = 15.000 \\implies y = 3.000$$\n$$x = 4.000$$\n\nHarga 2 buku + 5 penggaris:\n$$2(4.000) + 5(3.000) = 8.000 + 15.000 = \\text{Rp}23.000,00$$',
    subject: 'Matematika Wajib',
    difficulty: 'Sedang',
    bab: 'SPLDV & Sistem Persamaan',
    year: '2026'
  },
  {
    id: 'q_anbk_mtkw_2',
    text: 'Perhatikan grafik sistem pertidaksamaan linear. Daerah yang memenuhi sistem pertidaksamaan linear:\n$$x + y \\le 4, \\quad x + 3y \\ge 6, \\quad x \\ge 0, \\quad y \\ge 0$$\nadalah ....',
    options: ['Daerah I', 'Daerah II', 'Daerah III', 'Daerah IV', 'Daerah V'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: '- Garis $x + y = 4$ membatasi daerah ke bawah/kiri.\n- Garis $x + 3y = 6$ membatasi daerah ke atas/kanan.\n- Syarat Kuadran I ($x \\ge 0, y \\ge 0$).\nIrisan daerah membentuk **Daerah II**.',
    subject: 'Matematika Wajib',
    difficulty: 'Sedang',
    bab: 'Program Linear',
    year: '2026'
  },
  {
    id: 'q_anbk_mtkw_3',
    text: 'Diketahui fungsi $f(x) = \\sqrt{2x + 3}$, dengan $x \\ge -\\frac{3}{2}$. Jika $f^{-1}(x)$ adalah invers dari fungsi $f(x)$, nilai dari $f^{-1}(3) = \\dots$',
    options: ['$6$', '$3$', '$\\frac{3}{2}$', '$-\\frac{1}{2}$', '$-1$'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Gunakan $f^{-1}(3) = k \\iff f(k) = 3$:\n$$\\sqrt{2k + 3} = 3 \\implies 2k + 3 = 9 \\implies 2k = 6 \\implies k = 3$$',
    subject: 'Matematika Wajib',
    difficulty: 'Mudah',
    bab: 'Fungsi Invers',
    year: '2026'
  },
  {
    id: 'q_anbk_mtkw_4',
    text: 'Fungsi $f: \\mathbb{R} \\to \\mathbb{R}$ dan $g: \\mathbb{R} \\to \\mathbb{R}$. Jika $g(x) = x - 1$ dan $(f \\circ g)(x) = x^2 - 4x + 18$, nilai dari $f(2) = \\dots$',
    options: ['$9$', '$13$', '$15$', '$17$', '$25$'],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Cari $x$ agar $g(x) = 2 \\implies x - 1 = 2 \\implies x = 3$.\nSubstitusi $x = 3$ ke $(f \\circ g)(x)$:\n$$f(2) = 3^2 - 4(3) + 18 = 9 - 12 + 18 = 15$$',
    subject: 'Matematika Wajib',
    difficulty: 'Sedang',
    bab: 'Fungsi Komposisi',
    year: '2026'
  },
  {
    id: 'q_anbk_mtkw_5',
    text: 'Seorang peneliti melakukan pengamatan terhadap bakteri tertentu. Setiap $\\frac{1}{2}$ hari bakteri membelah diri menjadi dua. Pada awal pengamatan terdapat $2$ bakteri. Jika setiap $2$ hari $\\frac{1}{4}$ dari jumlah bakteri mati, banyaknya bakteri setelah tiga hari adalah ....',
    options: ['$48\\text{ bakteri}$', '$64\\text{ bakteri}$', '$96\\text{ bakteri}$', '$128\\text{ bakteri}$', '$192\\text{ bakteri}$'],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: '1) Hari ke-2 ($t=2$ hari, 4 kali membelah): $2 \\times 2^4 = 32$ bakteri.\n2) Kematian akhir hari ke-2: $32 - \\frac{1}{4}(32) = 24$ bakteri.\n3) Hari ke-3 (1 hari berikutnya / 2 kali membelah lagi): $24 \\times 2^2 = 96$ bakteri.',
    subject: 'Matematika Wajib',
    difficulty: 'Sedang',
    bab: 'Barisan & Deret / Eksponen',
    year: '2026'
  },
  {
    id: 'q_anbk_mtkw_6',
    text: 'Dari selembar karton berbentuk persegi yang berukuran sisi $30\\text{ cm}$ akan dibuat kotak tanpa tutup, dengan cara menggunting empat persegi di setiap pojok karton. Volume kotak terbesar yang dapat dibuat adalah ....',
    options: ['$2.000\\text{ cm}^3$', '$3.000\\text{ cm}^3$', '$4.000\\text{ cm}^3$', '$5.000\\text{ cm}^3$', '$6.000\\text{ cm}^3$'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: '$$V(x) = x(30 - 2x)^2 = 4x^3 - 120x^2 + 900x$$\n$$V\'(x) = 12x^2 - 240x + 900 = 0 \\implies x^2 - 20x + 75 = 0 \\implies x = 5$$\n$$V(5) = 5(30 - 10)^2 = 5(400) = 2.000\\text{ cm}^3$$',
    subject: 'Matematika Wajib',
    difficulty: 'Sedang',
    bab: 'Aplikasi Turunan',
    year: '2026'
  },
  {
    id: 'q_anbk_mtkw_7',
    text: 'Diketahui $\\sin A = \\frac{1}{a}$, $A$ adalah sudut tumpul. Nilai $\\cos A = \\dots$',
    options: ['$\\frac{a}{\\sqrt{a^2 + 1}}$', '$\\frac{1}{\\sqrt{a^2 + 1}}$', '$\\frac{\\sqrt{a^2 - 1}}{a}$', '$-\\frac{\\sqrt{a^2 - 1}}{a}$', '$-\\frac{\\sqrt{a^2 + 1}}{a}$'],
    correctAnswerIndex: 3,
    correctAnswer: 'D',
    explanation: 'Sisi samping $= \\sqrt{a^2 - 1}$. Karena $A$ sudut tumpul (Kuadran II), nilai $\\cos A$ negatif:\n$$\\cos A = -\\frac{\\sqrt{a^2 - 1}}{a}$$',
    subject: 'Matematika Wajib',
    difficulty: 'Sedang',
    bab: 'Trigonometri Dasar',
    year: '2026'
  },
  {
    id: 'q_anbk_mtkw_8',
    text: 'Diagram batang menunjukkan produksi pakaian Bu Rahmi selama tahun 2020 dari Januari sampai Desember. Peningkatan tertinggi jumlah produksi pakaian terjadi pada bulan ....',
    options: ['April', 'Juni', 'Juli', 'November', 'September'],
    correctAnswerIndex: 3,
    correctAnswer: 'D',
    explanation: 'Berdasarkan grafik kenaikan produksi bulanan, lonjakan selisih positif terbesar dibanding bulan sebelumnya terjadi pada bulan **November**.',
    subject: 'Matematika Wajib',
    difficulty: 'Mudah',
    bab: 'Statistika & Diagram',
    year: '2026'
  },
  {
    id: 'q_anbk_mtkw_9',
    text: 'Perhatikan data pada tabel nilai hasil ulangan matematika kelas XI SMA Z. Modus dari data tersebut adalah ....\n\n| Nilai | $f$ |\n| :---: | :---: |\n| 58 – 60 | 2 |\n| 61 – 63 | 6 |\n| 64 – 66 | 9 |\n| 67 – 69 | 6 |\n| 70 – 72 | 4 |\n| 73 – 75 | 3 |',
    options: ['$64,0$', '$64,5$', '$65,0$', '$65,5$', '$66,0$'],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Kelas Modus $64 - 66$ ($f=9$).\n$$T_b = 63,5, \\quad d_1 = 3, \\quad d_2 = 3, \\quad p = 3$$\n$$\\text{Mo} = 63,5 + \\left(\\frac{3}{3 + 3}\\right) \\cdot 3 = 63,5 + 1,5 = 65,0$$',
    subject: 'Matematika Wajib',
    difficulty: 'Sedang',
    bab: 'Statistika Modus',
    year: '2026'
  },
  {
    id: 'q_anbk_mtkw_10',
    text: 'Sekolah P akan mengirim 2 perwakilan grup band dari 6 putra dan 4 putri (total 10). Peluang terambil grup band putra pada pengambilan pertama dan putri pada pengambilan kedua adalah ....',
    options: ['$\\frac{1}{5}$', '$\\frac{6}{25}$', '$\\frac{4}{15}$', '$\\frac{2}{5}$', '$\\frac{11}{25}$'],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: '$$P(A \\cap B) = \\frac{6}{10} \\times \\frac{4}{9} = \\frac{24}{90} = \\frac{4}{15}$$',
    subject: 'Matematika Wajib',
    difficulty: 'Sedang',
    bab: 'Peluang',
    year: '2026'
  },
  {
    id: 'q_anbk_mtkw_11',
    text: '$$\\frac{1}{4} + \\frac{7}{4} \\times \\frac{8}{21} = \\dots$$',
    options: ['$\\frac{8}{21}$', '$\\frac{8}{11}$', '$\\frac{11}{12}$', '$\\frac{16}{21}$', '$2\\frac{8}{21}$'],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: '$$\\frac{7}{4} \\times \\frac{8}{21} = \\frac{2}{3}$$\n$$\\frac{1}{4} + \\frac{2}{3} = \\frac{3 + 8}{12} = \\frac{11}{12}$$',
    subject: 'Matematika Wajib',
    difficulty: 'Mudah',
    bab: 'Operasi Pecahan',
    year: '2026'
  },
  {
    id: 'q_anbk_mtkw_12',
    text: 'Mirna memproduksi bolu (biaya Rp15.000, laba Rp6.000) dan brownies (biaya Rp20.000, laba Rp7.000) dengan modal Rp1.000.000. Setiap hari memproduksi paling banyak 500 kotak kue. Manakah kebenaran dari pernyataan berikut?\n1) Mirna harus memproduksi 200 kotak kue bolu.\n2) Mirna harus memproduksi kue brownies lebih banyak.\n3) Keuntungan maksimum yang dapat diperoleh Mirna adalah Rp3.100.000,00.',
    options: [
      '(1) Salah, (2) Salah, (3) Benar',
      '(1) Benar, (2) Salah, (3) Benar',
      '(1) Salah, (2) Benar, (3) Salah',
      '(1) Benar, (2) Benar, (3) Benar',
      '(1) Salah, (2) Salah, (3) Salah'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Uji titik pojok program linear:\n- (1) Salah\n- (2) Salah\n- (3) Benar (Keuntungan Maksimum Rp3.100.000,00)\nUrutan kebenaran: **(1) Salah, (2) Salah, (3) Benar**.',
    subject: 'Matematika Wajib',
    difficulty: 'Sedang',
    bab: 'Program Linear',
    year: '2026'
  },
  {
    id: 'q_anbk_mtkw_13',
    text: 'Pada trapesium sama kaki $ABCD$, $AD = BC$, $AB \\parallel DC$, $AB > DC$, $\\angle BAD = 70^\\circ$, dan $\\angle ABD = 30^\\circ$.\n\nTentukan kebenaran dari pernyataan terkait besar sudut berikut:\n1) $\\angle BCD = 110^\\circ$\n2) $\\angle CBD = 40^\\circ$\n3) $\\angle BDC = 40^\\circ$',
    options: [
      '1) Benar, 2) Benar, 3) Benar',
      '1) Benar, 2) Benar, 3) Salah',
      '1) Benar, 2) Salah, 3) Benar',
      '1) Salah, 2) Benar, 3) Benar',
      '1) Salah, 2) Salah, 3) Salah'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: '1) $\\angle BCD = 180^\\circ - 70^\\circ = 110^\\circ$ (Benar)\n2) $\\angle CBD = 70^\\circ - 30^\\circ = 40^\\circ$ (Benar)\n3) $\\angle BDC = 40^\\circ$ (Benar)',
    subject: 'Matematika Wajib',
    difficulty: 'Sedang',
    bab: 'Geometri Trapesium',
    year: '2026'
  },
  {
    id: 'q_anbk_mtkw_14',
    text: 'Pada trapesium siku-siku $ABCD$, $AB = 3$ dan $AD \\le BC$. Apakah keliling trapesium tersebut lebih dari $25$?\n\n(1) Luas trapesium $ABCD = 24$.\n(2) $BC = 10$ dan $CD = 5$.',
    options: [
      'Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi Pernyataan (2) SAJA tidak cukup.',
      'Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi Pernyataan (1) SAJA tidak cukup.',
      'DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.',
      'Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, dan Pernyataan (2) SAJA cukup.',
      'Pernyataan (1) dan Pernyataan (2) tidak cukup untuk menjawab pertanyaan.'
    ],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: '- Pernyataan (1) tidak menentukan nilai $CD$, jadi tidak cukup.\n- Pernyataan (2) memberikan $AD = 6$, sehingga keliling $= 24 \\le 25$ dapat dipastikan TIDAK lebih dari 25. Pernyataan (2) SAJA cukup.',
    subject: 'Matematika Wajib',
    difficulty: 'Sulit',
    bab: 'Kecukupan Data Geometri',
    year: '2026'
  },
  {
    id: 'q_anbk_mtkw_15',
    text: 'Suatu tangga dengan panjang $6\\text{ meter}$ disandarkan pada dinding vertikal. Sudut yang dibentuk tangga dengan lantai adalah $60^\\circ$. Tinggi dinding yang disentuh ujung atas tangga adalah ....',
    options: ['$3\\text{ meter}$', '$\\frac{3}{2}\\text{ meter}$', '$3\\sqrt{3}\\text{ meter}$', '$\\frac{4}{2}\\text{ meter}$', '$\\frac{4}{3}\\text{ meter}$'],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: '$$h = 6 \\times \\sin 60^\\circ = 6 \\times \\frac{\\sqrt{3}}{2} = 3\\sqrt{3}\\text{ meter}$$',
    subject: 'Matematika Wajib',
    difficulty: 'Mudah',
    bab: 'Trigonometri Tangga',
    year: '2026'
  },
  {
    id: 'q_anbk_mtkw_16',
    text: 'Rata-rata nilai ulangan 17 murid adalah 83. Ada 3 murid mengikuti ujian susulan sehingga rata-rata 20 murid menjadi 82. Manakah pernyataan yang benar? *(Pilih semua jawaban benar)*',
    options: [
      'Jumlah nilai ketiga murid susulan adalah 229.',
      'Rata-rata nilai ketiga murid susulan lebih dari 70.',
      'Nilai terendah dari ketiga murid susulan tidak kurang dari 29.',
      'Nilai tertinggi dari ketiga murid susulan lebih dari 76.',
      'Jangkauan data nilai ketiga murid susulan lebih dari 72.'
    ],
    questionType: 'checkboxes',
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 2],
    correctAnswer: 'A, B, C',
    explanation: '1) Total nilai 3 murid $= 20(82) - 17(83) = 1.640 - 1.411 = 229$ (A Benar)\n2) Rata-rata $= 229 / 3 = 76,33 > 70$ (B Benar)\n3) Nilai terendah $\\ge 229 - 200 = 29$ (C Benar)',
    subject: 'Matematika Wajib',
    difficulty: 'Sedang',
    bab: 'Statistika Rata-rata Susulan',
    year: '2026'
  },
  {
    id: 'q_anbk_mtkw_17',
    text: 'Fungsi $f(x) = 4(x^2 - 8x + 12)$. Tentukan kebenaran pada setiap pernyataan berikut:\n1) Grafik fungsi $f$ terbuka ke atas.\n2) Grafik fungsi $f$ memotong garis $y = -18$.\n3) Grafik fungsi $f$ tidak melalui kuadran tiga.',
    options: [
      '1) Benar, 2) Salah, 3) Benar',
      '1) Benar, 2) Benar, 3) Benar',
      '1) Salah, 2) Salah, 3) Benar',
      '1) Benar, 2) Salah, 3) Salah',
      '1) Salah, 2) Benar, 3) Benar'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: '1) $a = 4 > 0$ (Terbuka ke atas) $\\rightarrow$ Benar\n2) Minimum $y_p = -16$, tidak pernah mencapai $y = -18$ $\\rightarrow$ Salah\n3) Untuk $x < 0, f(x) > 0$ (Kuadran II), tidak melewati Kuadran III $\\rightarrow$ Benar',
    subject: 'Matematika Wajib',
    difficulty: 'Sedang',
    bab: 'Fungsi Kuadrat',
    year: '2026'
  },
  {
    id: 'q_anbk_mtkw_18',
    text: 'Biaya tagihan listrik dihitung dengan $f(x) = 1.350x + 25.000$. Andi menerima tagihan Rp80.000,00 dan ini lebih besar dari penggunaan biasanya. Berapa besar penggunaan listrik biasanya di apartemen Andi? *(Pilih semua jawaban benar)*',
    options: ['85 kWh', '90 kWh', '100 kWh', '120 kWh', '137 kWh'],
    questionType: 'checkboxes',
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1],
    correctAnswer: 'A, B',
    explanation: 'Pemakaian saat tagihan Rp80.000,00 adalah $x = \\frac{55.000}{1.350} \\approx 40,74\\text{ kWh}$. Pemakaian biasanya kurang dari ini. Pilihan yang memenuhi adalah **85 kWh** dan **90 kWh**.',
    subject: 'Matematika Wajib',
    difficulty: 'Sedang',
    bab: 'Fungsi Pemakaian Listrik',
    year: '2026'
  },
  {
    id: 'q_anbk_mtkw_19',
    text: 'Pak Andi mempresentasikan desain $60\\text{ cm} \\times 60\\text{ cm}$ dengan proyektor ke layar $2,4\\text{ m} \\times 1,8\\text{ m}$. Tentukan kebenaran:\n1) Perbandingan ukuran tampilan di layar $1 : 1$.\n2) Ukuran panjang & lebar tampilan lebih dari $1\\text{ meter}$.\n3) Terdapat bagian gambar asli yang terpotong.',
    options: [
      '1) Benar, 2) Benar, 3) Salah',
      '1) Benar, 2) Benar, 3) Benar',
      '1) Salah, 2) Benar, 3) Salah',
      '1) Benar, 2) Salah, 3) Salah',
      '1) Salah, 2) Salah, 3) Benar'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: '1) Pembesaran proporsional menjaga rasio $1:1$ (Benar)\n2) Ukuran tampilan di layar $> 1\\text{ meter}$ (Benar)\n3) Tinggi layar $1,8\\text{ m} = 180\\text{ cm}$ cukup menampung gambar tanpa terpotong (Salah)',
    subject: 'Matematika Wajib',
    difficulty: 'Sedang',
    bab: 'Skala Proyektor',
    year: '2026'
  },
  {
    id: 'q_anbk_mtkw_20',
    text: 'Kode akses kupon bazar berformat $\\mathbf{AXBYC}$ dengan $A, B, C$ huruf dan $X, Y$ angka. Tidak boleh ada angka dan huruf yang diulang. Banyak kode akses berbeda yang dapat dibuat adalah ....',
    options: ['$1.263.600$', '$1.352.000$', '$1.404.000$', '$1.423.656$', '$1.757.600$'],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: '$$N = (26 \\times 25 \\times 24) \\times (10 \\times 9) = 15.600 \\times 90 = 1.404.000$$',
    subject: 'Matematika Wajib',
    difficulty: 'Sedang',
    bab: 'Kaidah Pencacahan & Kombinatorika',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_1',
    text: 'Bacalah teks berikut untuk menjawab soal nomor 1 sampai 4!\n\n**Pencemaran Laut dan Ancaman Mikroplastik**\nLautan di seluruh dunia kini menghadapi ancaman ganda akibat pemanasan global dan pencemaran sampah. Salah satu isu lingkungan yang paling mengkhawatirkan adalah keberadaan sampah plastik. Setiap tahun, jutaan ton sampah plastik bermuara di lautan dan membutuhkan waktu ratusan tahun agar dapat terurai secara alami. Dalam proses penguraian tersebut, partikel plastik pecah menjadi ukuran yang sangat kecil dan dikenal sebagai mikroplastik.\n\nKeberadaan mikroplastik di perairan laut sangat berbahaya bagi keberlangsungan ekosistem perairan. Hewan-hewan laut seperti plankton, ikan kecil, hingga mamalia laut sering kali keliru mengira mikroplastik sebagai sumber makanan. Akibatnya, partikel berbahaya ini masuk ke dalam rantai makanan laut. Ketika manusia mengonsumsi hasil tangkapan laut yang telah terkontaminasi mikroplastik, zat kimia berbahaya tersebut berisiko memicu gangguan kesehatan kronis.\n\nOleh sebab itu, diperlukan mobilisasi seluruh elemen masyarakat, pemerintah, serta sektor industri untuk mengurangi pemakaian plastik sekali pakai. Pemanfaatan material alternatif yang mudah terurai dan perbaikan sistem daur ulang menjadi langkah strategis yang harus segera direalisasikan demi menjaga kelestarian laut bagi generasi mendatang.\n\n---\n\nMakna istilah **mobilisasi** pada paragraf ketiga teks tersebut adalah ....',
    options: [
      'Pengarahan tenaga atau massa untuk bergerak bersama',
      'Percepatan proses daur ulang sampah',
      'Perjalanan dari satu tempat ke tempat lain',
      'Perencanaan strategi secara matang',
      'Penilaian kelayakan suatu produk pengganti'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Dalam konteks menggerakkan seluruh elemen masyarakat dan industri, mobilisasi bermakna pengarahan tenaga atau massa untuk bergerak dan bertindak bersama-sama.',
    subject: 'Bahasa Indonesia',
    difficulty: 'Sedang',
    bab: 'Makna Istilah & Kosakata',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_2',
    text: 'Gagasan utama paragraf pertama pada teks "Pencemaran Laut dan Ancaman Mikroplastik" di atas adalah ....',
    options: [
      'Manfaat laut bagi kehidupan manusia',
      'Ancaman pemanasan global dan pencemaran sampah plastik di lautan',
      'Waktu yang diperlukan mikroplastik untuk terurai',
      'Perbedaan antara sampah organik dan plastik',
      'Proses pemecahan plastik menjadi partikel kecil'
    ],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Paragraf pertama berfokus memaparkan ancaman nyata pemanasan global dan pencemaran sampah plastik di lautan.',
    subject: 'Bahasa Indonesia',
    difficulty: 'Sedang',
    bab: 'Ide Pokok & Teks Eksplanasi',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_3',
    text: 'Mengapa mikroplastik berbahaya bagi kesehatan manusia menurut teks bacaan di atas?',
    options: [
      'Menghalangi masuknya sinar matahari ke dasar laut',
      'Merusak alat tangkap ikan tradisional milik nelayan',
      'Masuk ke dalam rantai makanan laut dan terkonsumsi oleh manusia',
      'Mengurangi kadar oksigen di atmosfer secara drastis',
      'Memicu kenaikan suhu permukaan air laut secara mendadak'
    ],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Mikroplastik termakan oleh hewan laut (plankton/ikan) lalu masuk ke rantai makanan laut dan akhirnya terkonsumsi oleh manusia yang memakan hasil laut.',
    subject: 'Bahasa Indonesia',
    difficulty: 'Mudah',
    bab: 'Hubungan Kausalitas',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_4',
    text: 'Simpulan yang tepat dari teks bacaan "Pencemaran Laut dan Ancaman Mikroplastik" adalah ....',
    options: [
      'Sampah plastik hanya dapat diatasi jika masyarakat berhenti mengonsumsi ikan.',
      'Mikroplastik tidak berbahaya selama ikan diolah dengan temperatur tinggi.',
      'Lautan akan bersih dengan sendirinya tanpa bantuan kebijakan pemerintah.',
      'Upaya bersama lintas sektor dalam mengurangi plastik sekali pakai sangat krusial untuk melindungi ekosistem laut.',
      'Pemanasan global merupakan penyebab utama terbentuknya mikroplastik.'
    ],
    correctAnswerIndex: 3,
    correctAnswer: 'D',
    explanation: 'Simpulan merangkum esensi bahwa kerja sama lintas sektor (masyarakat, pemerintah, industri) mengurangi plastik sekali pakai sangat penting demi menjaga kelestarian laut.',
    subject: 'Bahasa Indonesia',
    difficulty: 'Sedang',
    bab: 'Simpulan Teks',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_5',
    text: 'Bacalah kutipan cerpen berikut untuk menjawab soal nomor 5 sampai 8!\n\n**Menatap Padi Menguning**\nSepulang sekolah, langkah kaki Ardi terasa sangat berat. Di atas meja belajarnya, buku catatan sains masih terbuka pada halaman materi olimpiade yang harus ia kuasai pekan depan. Namun, suara Ayah dari beranda belakang membuyarkan konsentrasinya.\n\n"Ardi, mulai besok sore kamu tidak usah ke tempat les sains dulu. Ini sudah masuk musim panen. Ayah butuh kamu untuk membantu menghalau kawanan burung pipit di sawah bagian timur," ucap Ayah dengan nada datar tanpa menoleh.\n\nDada Ardi terasa sesak. Ia ingin sekali membantah dan menjelaskan bahwa olimpiade ini adalah kesempatan emas baginya untuk meraih beasiswa. Namun, melihat punggung Ayah yang mulai membungkuk dan peluh yang membasahi kemeja usangnya, kata-kata itu tercekat di tenggorokan. Ardi tahu, panen kali ini adalah satu-satunya tumpuan keluarga untuk melunasi biaya sekolah kakaknya.\n\n---\n\nKonflik batin yang dialami oleh tokoh Ardi dalam kutipan cerpen di atas adalah ....',
    options: [
      'Keinginan untuk pindah sekolah ke luar kota',
      'Perselisihan sengit dengan sang kakak mengenai biaya sekolah',
      'Dilema antara mengejar impian olimpiade atau membantu beban ekonomi ayahnya di sawah',
      'Rasa malas belajar menjelang ujian akhir sekolah',
      'Kekecewaan karena gagal dalam seleksi olimpiade tingkat kabupaten'
    ],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Ardi mengalami pergolakan batin antara ambisi akademiknya (les persiapan olimpiade beasiswa) dan baktinya membantu panen di sawah demi ekonomi keluarga.',
    subject: 'Bahasa Indonesia',
    difficulty: 'Sedang',
    bab: 'Konflik Cerita & Unsur Intrinsik',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_6',
    text: 'Penyebab terjadinya konflik pada kutipan cerita "Menatap Padi Menguning" di atas adalah ....',
    options: [
      'Kakak Ardi menolak membantu pekerjaan ayahnya',
      'Ayah meminta Ardi berhenti les demi membantu panen di sawah',
      'Ardi tidak memahami materi olimpiade sains yang diajarkan',
      'Burung pipit menghancurkan seluruh hasil panen di sawah timur',
      'Pihak sekolah membatalkan pendaftaran olimpiade Ardi'
    ],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Pemicu utama konflik berawal dari permintaan Ayah agar Ardi tidak pergi les sains dulu dan menggantinya dengan membantu menghalau burung pipit di sawah.',
    subject: 'Bahasa Indonesia',
    difficulty: 'Mudah',
    bab: 'Alur & Sebab Akibat Cerita',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_7',
    text: 'Watak tokoh Ardi yang tergambar dalam kutipan cerpen di atas adalah ....',
    options: [
      'Pemarah dan pendendam',
      'Keras kepala dan egois',
      'Berbakti dan penuh pengertian',
      'Putus asa dan pasif',
      'Ceroboh dan pembangkang'
    ],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Meskipun kecewa, Ardi menahan diri dan memahami kondisi ayahnya yang banting tulang, membuktikan ia anak yang berbakti dan penuh empati.',
    subject: 'Bahasa Indonesia',
    difficulty: 'Mudah',
    bab: 'Penokohan & Karakter',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_8',
    text: 'Nilai moral yang dapat dipetik dari kutipan cerpen di atas adalah ....',
    options: [
      'Menuntut hak tanpa memedulikan kondisi keluarga',
      'Menghindari pekerjaan fisik agar dapat berprestasi',
      'Memahami pengorbanan orang tua dan bersikap bijak menghadapi keadaan',
      'Mengabaikan pendidikan demi kepentingan jangka pendek',
      'Menyelesaikan masalah keluarga dengan cara berdebat terbuka'
    ],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Cerita mengajarkan kepekaan terhadap beban orang tua dan keikhlasan berkorban demi kebaikan keluarga.',
    subject: 'Bahasa Indonesia',
    difficulty: 'Sedang',
    bab: 'Nilai Moral Sastra',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_9',
    text: 'Bacalah teks berikut untuk menjawab soal nomor 9 sampai 12!\n\n**Bahaya Zat Pewarna Sintetis Rhodamin B**\nRhodamin B merupakan zat pewarna sintetis yang pada dasarnya diperuntukkan bagi industri tekstil, kertas, dan cat. Senyawa ini berbentuk kristal kehijauan yang ketika dilarutkan dalam air akan menghasilkan warna merah keunguan cerah serta berpendar jika terkena sinar ultraviolet. Harganya yang relatif murah serta daya warnanya yang kuat membuat zat kimia berbahaya ini kerap disalahgunakan oleh produsen nakal sebagai pewarna makanan, seperti pada sirup, kerupuk, terasi, dan kembang gula.\n\nBadan Pengawas Obat dan Makanan (BPOM) telah melarang keras penggunaan Rhodamin B untuk produk pangan karena memiliki sifat karsinogenik. Paparan Rhodamin B secara berulang dalam jangka panjang dapat memicu penumpukan racun di organ hati dan ginjal, sehingga berpotensi menimbulkan kerusakan jaringan seluler hingga kanker. Masyarakat diimbau untuk lebih teliti dalam memilih pangan olahan dengan menghindari produk yang memiliki warna mencolok tidak wajar.\n\n---\n\nTujuan penulisan teks tersebut adalah untuk ....',
    options: [
      'Memberikan tutorial cara pembuatan pewarna tekstil secara mandiri',
      'Menginformasikan bahaya penyalahgunaan Rhodamin B dalam makanan bagi kesehatan tubuh',
      'Mempromosikan penggunaan pewarna sintetis berharga murah',
      'Membandingkan daya tahan warna Rhodamin B dengan pewarna alami',
      'Menganalisis omzet produsen kerupuk dan sirup di pasaran'
    ],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Tujuan teks adalah memberikan edukasi dan peringatan kepada masyarakat tentang bahaya kesehatan jika Rhodamin B digunakan pada makanan.',
    subject: 'Bahasa Indonesia',
    difficulty: 'Mudah',
    bab: 'Tujuan Penulis & Teks Informasi',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_10',
    text: 'Ciri fisik Rhodamin B berdasarkan teks bacaan di atas adalah ....',
    options: [
      'Serbuk putih tanpa aroma dan larut dalam minyak',
      'Cairan kental berwarna kuning kecokelatan',
      'Serbuk kristal kehijauan yang larut menghasilkan warna merah keunguan cerah',
      'Butiran kasar berwarna biru dongker yang tidak larut dalam air',
      'Kristal transparan yang berubah warna saat dipanaskan'
    ],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Teks menyebutkan secara eksplisit bahwa Rhodamin B berupa kristal kehijauan yang saat dilarutkan menghasilkan warna merah keunguan cerah.',
    subject: 'Bahasa Indonesia',
    difficulty: 'Mudah',
    bab: 'Informasi Tersurat',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_11',
    text: 'Kalimat yang mengandung hubungan sebab-akibat (kausalitas) pada teks "Bahaya Zat Pewarna Sintetis Rhodamin B" di atas adalah ....',
    options: [
      '"Rhodamin B merupakan zat pewarna sintetis yang pada dasarnya diperuntukkan bagi industri tekstil..."',
      '"Harganya yang relatif murah serta daya warnanya yang kuat membuat zat kimia berbahaya ini kerap disalahgunakan..."',
      '"Senyawa ini berbentuk kristal kehijauan yang ketika dilarutkan dalam air akan menghasilkan warna merah..."',
      '"BPOM telah melarang keras penggunaan Rhodamin B untuk produk pangan..."',
      '"Masyarakat diimbau untuk lebih teliti dalam memilih pangan olahan..."'
    ],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Frasa "membuat zat kimia berbahaya ini kerap disalahgunakan" menyatakan hubungan akibat dari sebab harganya yang murah dan daya warnanya yang kuat.',
    subject: 'Bahasa Indonesia',
    difficulty: 'Sedang',
    bab: 'Hubungan Kausalitas & Konjungsi',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_12',
    text: 'Langkah pencegahan yang disarankan penulis kepada masyarakat pada teks di atas adalah ....',
    options: [
      'Memeriksa kandungan kimia makanan menggunakan mikroskop pribadi',
      'Menghentikan konsumsi semua jenis makanan yang memiliki rasa manis',
      'Menghindari produk pangan yang memiliki warna mencolok tidak wajar',
      'Membeli produk pangan hanya yang diproduksi oleh industri tekstil',
      'Melarutkan semua makanan ke dalam air sebelum dikonsumsi'
    ],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Kalimat terakhir menyarankan masyarakat untuk menghindari produk pangan yang memiliki warna mencolok tidak wajar.',
    subject: 'Bahasa Indonesia',
    difficulty: 'Mudah',
    bab: 'Solusi & Saran Teks',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_13',
    text: 'Bacalah teks berikut untuk menjawab soal nomor 13 sampai 16!\n\n**Transformasi Digital dan Pemberdayaan UMKM**\nPerkembangan teknologi informasi telah membawa dampak transformatif bagi sektor Usaha Mikro, Kecil, dan Menengah (UMKM). Pemanfaatan platform niaga elektronik (e-commerce) dan sistem pembayaran berbasis kode respons cepat (QRIS) membuka akses pasar yang jauh lebih luas bagi pelaku usaha lokal. Transaksi yang semula terbatas secara geografis kini dapat menjangkau konsumen antardaerah bahkan mancanegara secara instan.\n\nKendati demikian, percepatan digitalisasi ini bukan tanpa hambatan. Tingkat literasi digital para pelaku UMKM masih menjadi tantangan utama yang perlu diatasi. Selain itu, keamanan siber dan perlindungan data pribadi konsumen menuntut perhatian serius agar ekosistem niaga digital tetap aman dan terpercaya. Oleh karena itu, sinergi pelatihan literasi teknologi dari berbagai pihak sangat diperlukan guna mendorong daya saing UMKM di era modern.\n\n---\n\nIde pokok paragraf pertama teks di atas adalah ....',
    options: [
      'Prosedur pembuatan kode respons cepat bagi pelaku usaha mikro',
      'Keunggulan transaksi tunai dibandingkan pembayaran digital',
      'Dampak positif kemajuan teknologi terhadap perluasan pasar UMKM',
      'Kegagalan produk UMKM menembus pasar internasional',
      'Biaya langganan platform niaga elektronik di Indonesia'
    ],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Paragraf pertama menjelaskan dampak positif teknologi (e-commerce dan QRIS) yang membuka akses pasar luas bagi UMKM.',
    subject: 'Bahasa Indonesia',
    difficulty: 'Sedang',
    bab: 'Ide Pokok Paragraf',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_14',
    text: 'Kata penghubung (konjungsi) antarkalimat yang menyatakan pertentangan pada paragraf kedua teks di atas adalah ....',
    options: [
      'Selain itu',
      'Oleh karena itu',
      'Kendati demikian',
      'Bahkan',
      'Agar'
    ],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: '"Kendati demikian" adalah konjungsi antarkalimat yang menyatakan hubungan pertentangan/konsesif.',
    subject: 'Bahasa Indonesia',
    difficulty: 'Mudah',
    bab: 'Konjungsi & Kohesi',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_15',
    text: 'Tantangan utama yang dihadapi UMKM dalam proses digitalisasi menurut teks di atas adalah ....',
    options: [
      'Tingginya harga bahan baku lokal',
      'Ketiadaan perangkat telepon pintar di pasaran',
      'Rendahnya minat konsumen terhadap belanja daring',
      'Rendahnya tingkat literasi digital dan risiko keamanan siber',
      'Larangan transaksi antarpulau oleh otoritas berwenang'
    ],
    correctAnswerIndex: 3,
    correctAnswer: 'D',
    explanation: 'Paragraf kedua menyebutkan literasi digital pelaku usaha dan keamanan siber sebagai tantangan utama.',
    subject: 'Bahasa Indonesia',
    difficulty: 'Mudah',
    bab: 'Analisis Masalah Teks',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_16',
    text: 'Pola pengembangan paragraf kedua pada teks "Transformasi Digital dan Pemberdayaan UMKM" adalah ....',
    options: [
      'Kronologis (urutan waktu)',
      'Definisi umum',
      'Masalah dan solusi',
      'Analogi',
      'Narasi fiktif'
    ],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Paragraf kedua memaparkan masalah/tantangan (hambatan literasi dan keamanan siber) lalu ditutup dengan alternatif solusi (sinergi pelatihan literasi teknologi).',
    subject: 'Bahasa Indonesia',
    difficulty: 'Sedang',
    bab: 'Struktur Paragraf',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_17',
    text: 'Penulisan kata serapan yang baku untuk memperbaiki kata "proyeck" dan "revitallisasi" dalam kalimat: "Pemerintah merencanakan proyeck revitallisasi infrastruktur perkotaan demi kenyamanan publik." adalah ....',
    options: [
      'Proyek, revitalisasi',
      'Projek, revitallisasi',
      'Proyek, revitallisasi',
      'Projek, revitalisasi',
      'Proyeck, revitalisir'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Kata serapan yang baku menurut KBBI adalah "proyek" (bukan projek/proyeck) dan "revitalisasi" (satu huruf l).',
    subject: 'Bahasa Indonesia',
    difficulty: 'Mudah',
    bab: 'Kata Baku & Serapan KBBI',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_18',
    text: 'Perhatikan kalimat berikut:\n"Ayah membeli buah-buahan di pasar: apel, jeruk, dan mangga."\n\nPenggunaan tanda baca titik dua (:) pada kalimat tersebut adalah ....',
    options: [
      'Benar / Tepat (Sesuai PUEBI/EYD)',
      'Salah / Tidak Tepat (Tidak Sesuai PUEBI/EYD)'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Tanda titik dua (:) digunakan pada akhir pernyataan lengkap yang diikuti oleh pemerian atau perincian.',
    subject: 'Bahasa Indonesia',
    difficulty: 'Mudah',
    bab: 'PUEBI / EYD',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_19',
    text: 'Konjungsi subordinatif yang tepat untuk melengkapi kalimat: "Krisis energi global tidak akan teratasi [...] masyarakat dunia belum beralih ke sumber energi terbarukan." adalah ....',
    options: [
      'sehingga',
      'jika',
      'meskipun',
      'bahwa',
      'lalu'
    ],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Konjungsi "jika" menyatakan hubungan syarat yang logis untuk menghubungkan kedua klausa.',
    subject: 'Bahasa Indonesia',
    difficulty: 'Mudah',
    bab: 'Konjungsi Subordinatif',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_20',
    text: 'Perhatikan kalimat berikut:\n"Mahasiswa yang terlambat masuk ke dalam ruangan tidak diperkenankan mengikuti ujian."\n\nKalimat tersebut merupakan kalimat yang efektif dan logis.',
    options: [
      'Benar / Tepat (Efektif)',
      'Salah / Tidak Tepat (Tidak Efektif)'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Kalimat tersebut efektif karena memiliki subjek, predikat, dan keterangan yang jelas tanpa pemborosan kata (pleonasme) dan memiliki makna yang logis.',
    subject: 'Bahasa Indonesia',
    difficulty: 'Mudah',
    bab: 'Kalimat Efektif',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_lanjut_1',
    text: '**PROPOSAL KEGIATAN: Pemanfaatan Teknologi Digital untuk Meningkatkan Daya Saing UKM Pangan Lokal**\n\nDalam beberapa tahun terakhir, perkembangan teknologi digital telah membuka peluang besar bagi pelaku Usaha Kecil dan Menengah (UKM), khususnya di sektor pangan lokal. Namun, banyak UKM yang belum mampu memanfaatkan teknologi secara optimal karena keterbatasan akses informasi, pelatihan, dan pendanaan. Berdasarkan survei yang dilakukan oleh Dinas Koperasi dan UKM Provinsi Jawa Barat pada 2023, hanya 35% UKM pangan yang aktif menggunakan platform digital untuk pemasaran.\n\nSeiring dengan meningkatnya penggunaan internet dan perangkat digital, konsumen semakin bergeser ke transaksi daring sekitar 60%. Fenomena ini menjadi peluang besar yang belum dimaksimalkan oleh UKM pangan lokal. Misalnya, banyak produk makanan khas daerah memiliki potensi pasar nasional dan bahkan internasional, tetapi belum memiliki strategi pemasaran yang memadai di digital. Di sisi lain, persaingan dengan produk pangan dari industri besar dan waralaba semakin ketat, sehingga inovasi digital menjadi kebutuhan mendesak.\n\nOleh karena itu, kami mengajukan program pelatihan bertema “Digitalisasi UKM Pangan Lokal” yang bertujuan untuk meningkatkan literasi digital, pemahaman e-commerce, serta keterampilan penggunaan dompet digital dan media sosial sebagai sarana promosi. Program ini dirancang untuk menjangkau 50% pelaku UKM di tiga kabupaten, dengan metode blended learning (daring dan luring), serta pendampingan usaha selama 3 bulan.\n\nProgram ini penting karena teknologi digital tidak hanya memperluas pasar, tetapi juga menekan biaya distribusi, meningkatkan efisiensi, dan mempercepat proses transaksi. Berdasarkan data Bank Indonesia, nilai transaksi e-commerce pada 2022 mencapai Rp476 triliun, yang 60% didominasi oleh produk konsumsi rumah tangga, termasuk pangan. Data tersebut menunjukkan adanya kebutuhan akan peningkatan kapasitas pelaku UKM dalam mengakses ekosistem digital.\n\nDengan adanya pelatihan ini, diharapkan pelaku UKM pangan lokal dapat bersaing secara sehat di pasar digital yang terus berkembang. Usulan program ini akan disampaikan kepada Kementerian Koperasi dan UKM dengan anggaran sebesar Rp450 juta, yang mencakup biaya pelatihan, honor narasumber, pembuatan modul, serta pengembangan platform daring lokal. Program ini juga mendukung Tujuan Pembangunan Berkelanjutan (SDG\'s), khususnya poin 8 tentang pekerjaan layak dan pertumbuhan ekonomi, serta poin 9 tentang industri, inovasi, dan infrastruktur.\n*(Sumber: www.pusat.or.id/je/ecommerce-ukm2022)*\n\n---\n\nDari pernyataan-pernyataan berikut, manakah pernyataan yang mengungkapkan kesesuaian antara usulan program dan data pendukung sesuai teks proposal tersebut?\n\n| Usulan Program dan Data Pendukung | Kesesuaian |\n|---|---|\n| 1. Usulan Program: Mengajukan program pelatihan digitalisasi bagi pelaku UKM di tiga kabupaten.<br>Data Pendukung: Hanya 35% UKM pangan aktif menggunakan platform digital. | **Sesuai** |\n| 2. Usulan Program: Mengusulkan pelatihan e-commerce, promosi digital, dan penggunaan dompet digital.<br>Data Pendukung: Nilai transaksi e-commerce nasional mencapai 476 triliun rupiah dan 60% berupa produk konsumsi termasuk pangan. | **Sesuai** |\n| 3. Usulan Program: Meminta Kementerian turun langsung ke lapangan sebelum menyetujui usulan.<br>Data Pendukung: Data survei telah menunjukkan kebutuhan pelatihan tanpa menyebut perlunya kunjungan langsung oleh kementerian. | **Tidak Sesuai** |',
    options: [
      '1: Sesuai, 2: Sesuai, 3: Tidak Sesuai',
      '1: Sesuai, 2: Tidak Sesuai, 3: Sesuai',
      '1: Tidak Sesuai, 2: Sesuai, 3: Sesuai',
      '1: Sesuai, 2: Sesuai, 3: Sesuai',
      '1: Tidak Sesuai, 2: Tidak Sesuai, 3: Tidak Sesuai'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Berdasarkan teks proposal:\n1. Pernyataan 1 Sesuai karena program pelatihan digitalisasi diajukan untuk mengatasi fakta bahwa baru 35% UKM pangan yang aktif menggunakan platform digital.\n2. Pernyataan 2 Sesuai karena pelatihan e-commerce & dompet digital didukung oleh data transaksi e-commerce yang mencapai Rp476 triliun (60% konsumsi pangan).\n3. Pernyataan 3 Tidak Sesuai karena proposal tidak memuat usulan agar kementerian melakukan kunjungan langsung sebelum persetujuan.',
    subject: 'Bahasa Indonesia Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Analisis Proposal Kegiatan & Data Pendukung',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_lanjut_2',
    text: 'Berdasarkan teks proposal "Pemanfaatan Teknologi Digital untuk Meningkatkan Daya Saing UKM Pangan Lokal", hubungan koherensi antara paragraf ke-2 dan ke-3 adalah ....',
    options: [
      'alasan pengajuan proposal yang diperinci dengan contoh UKM',
      'alasan pengajuan program pelatihan yang diperkuat tujuan',
      'akibat dari maraknya fenomena digitalisasi UKM di daerah',
      'akibat dari program literasi digital yang disertai tujuan',
      'alasan pengajuan proposal program dengan persyaratan'
    ],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Paragraf ke-2 memaparkan alasan/latar belakang pentingnya inovasi digital UKM pangan di tengah pergeseran belanja konsumen, kemudian paragraf ke-3 menyajikan pengajuan program pelatihan digitalisasi yang diperkuat dengan rincian target tujuan.',
    subject: 'Bahasa Indonesia Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Koherensi Antar-Paragraf',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_lanjut_3',
    text: 'Berdasarkan teks proposal, manakah argumen yang logis dari pernyataan-pernyataan berikut?\n\n| No | Pernyataan Argumen | Status Kelogisan |\n|---|---|---|\n| 1 | Program pelatihan penting karena teknologi digital pasti memperluas jejaring secara mutlak. | **Tidak Logis** |\n| 2 | Program pelatihan penting karena teknologi digital tidak hanya memperluas pasar, tetapi juga menekan biaya distribusi dan meningkatkan efisiensi. | **Logis** |\n| 3 | Usulan program didasarkan pada data survei dan kebutuhan nyata di lapangan. | **Logis** |',
    options: [
      '1: Tidak Logis, 2: Logis, 3: Logis',
      '1: Logis, 2: Logis, 3: Logis',
      '1: Logis, 2: Tidak Logis, 3: Logis',
      '1: Tidak Logis, 2: Tidak Logis, 3: Logis',
      '1: Logis, 2: Logis, 3: Tidak Logis'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Analisis kelogisan:\n- Argumen 1 Tidak Logis karena mengandung overgeneralisasi mutlak.\n- Argumen 2 Logis karena sesuai dengan relasi efisiensi biaya operasional dan perluasan pasar.\n- Argumen 3 Logis karena didukung fakta survei Dinas KUKM Jabar 2023 dan BI 2022.',
    subject: 'Bahasa Indonesia Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Evaluasi Logika Argumen Wacana',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_lanjut_4',
    text: 'Kutipan puisi untuk soal nomor 4 - 6:\n\n*Huesca jiwa di dunia yang hilang*\n*atas sayap kenangan padamu*\n*adalah derita di sisiku*\n*bayangan berkelebat tinjauan beku*\n*angin bangkit ketika senja*\n*ngingatkan musim gugur akan tiba*\n*aku cemas bisa kehilangan kau*\n*aku cemas pada kecemasanku sendiri*\n*di batu penghabisan ke Huesca*\n*batas terakhir dari kebanggaan kita*\n*kenanglah sayang, dengan mesra*\n*kau kubayangkan di sisiku ada*\n*dan jika untung malang menghampirkan*\n*aku dalam kuburan dangkal*\n*ingatlah sebisu-segala yang indah*\n*dan cintaku yang kekal*\n*(Puisi Huesca karya John Cornford diterjemahkan oleh Chairil Anwar)*\n\n---\n\n*di batu penghabisan ke Huesca*\n*batas terakhir dari kebanggaan kita*\n\nMakna kiasan **batu penghabisan** dan **batas terakhir** memperjelas kondisi yang dialami aku lirik (penyair) tentang ....',
    options: [
      'perpisahan antara penyair dengan orang yang dikasihi',
      'situasi kejiwaan yang penuh dinamika kehidupan',
      'setiap perjuangan akan dibatasi dengan perpisahan',
      'semua ikhtiar harus dilakukan sampai batas kemampuan',
      'apa pun hasil akhirnya harus disikapi dengan keikhlasan'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Larik "di batu penghabisan ke Huesca / batas terakhir dari kebanggaan kita" merupakan metafora titik perpisahan tragis di medan pertempuran antara penyair (aku lirik) dengan sang kekasih.',
    subject: 'Bahasa Indonesia Tingkat Lanjut',
    difficulty: 'Sulit',
    bab: 'Kritik Sastra & Makna Kias Puisi',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_lanjut_5',
    text: 'Perhatikan bait puisi Huesca berikut:\n\n*angin bangkit ketika senja*\n*ngingatkan musim gugur akan tiba*\n\nMakna citraan penglihatan *ketika senja* dan *musim gugur* mengkonkretkan gagasan penyair tentang ....',
    options: [
      'pergantian hari dan musim',
      'batas akhir aktivitas manusia',
      'suasana kedukaan di ujung waktu',
      'siap menghadapi perubahan waktu',
      'kondisi menjelang akhir kehidupan'
    ],
    correctAnswerIndex: 4,
    correctAnswer: 'E',
    explanation: 'Citraan visual "senja" dan "musim gugur" secara simbolis dalam puisi merepresentasikan fase kepudaran daya hidup, akhir masa perjuangan, atau kondisi menjelang kematian.',
    subject: 'Bahasa Indonesia Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Citraan & Simbolisme Puisi',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_lanjut_6',
    text: 'Perhatikan bait puisi Huesca berikut:\n\n*angin bangkit ketika senja*\n*ngingatkan musim gugur akan tiba*\n*aku cemas bisa kehilangan kau*\n*aku cemas pada kecemasanku sendiri*\n\nSuasana hati yang muncul setelah membaca bait puisi tersebut adalah ....',
    options: [
      'kehilangan hati saat musim gugur sudah tiba',
      'kemuraman saat senja hari di musim gugur',
      'keadaan gersang karena daun berguguran',
      'kesedihan karena takut kehilangan orang terkasih',
      'kebimbangan hati menunggu pergantian musim'
    ],
    correctAnswerIndex: 3,
    correctAnswer: 'D',
    explanation: 'Larik "aku cemas bisa kehilangan kau / aku cemas pada kecemasanku sendiri" secara langsung mengalirkan suasana batin kesedihan yang mendalam dan kecemasan akan kehilangan sosok terkasih.',
    subject: 'Bahasa Indonesia Tingkat Lanjut',
    difficulty: 'Mudah',
    bab: 'Suasana Batin & Emosi Puisi',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_lanjut_7',
    text: '**TEKS ULASAN: KAMPUNG ADAT CIPTAGELAR**\n\n*Teks Digital (Ulasan Pengunjung ⭐ 4,8/5):*\n- Rini Kartika (⭐⭐⭐⭐⭐): "Pengalaman saya di Kampung Adat Ciptagelar sungguh luar biasa. Udara sejuk dan pemandangan hutan di kaki Gunung Halimun sangat menenangkan. Penduduknya sangat ramah dan terbuka... Saya merasa seperti kembali ke masa lalu, hidup dalam harmoni dengan alam..."\n- Arif Nugroho (⭐⭐⭐☆☆): "Saya sangat mengapresiasi masyarakat Ciptagelar menjaga nilai adat... Namun informasi aturan kunjungan masih kurang jelas secara daring..."\n- Linda Mariana (⭐⭐⭐⭐⭐): "Kampung ini sungguh unik!... bukan sekadar wisata, ini adalah pengalaman spiritual dan edukatif."\n- Bagas Permana (⭐⭐☆☆☆): "...ulasan artikel bilang \'semua orang pasti jatuh cinta pada Ciptagelar\', tapi menurut saya itu terlalu berlebihan/menggeneralisasi..."\n- Melati Dewi (⭐⭐⭐⭐⭐): "Sangat merekomendasikan!..."\n\n*Teks Cetak:*\n"Kampung Adat Ciptagelar di Gunung Halimun Sukabumi menyuguhkan pengalaman autentik... Kekuatan desa ini bukan pada fasilitas wisata modern, melainkan pada kesederhanaan hidup yang penuh makna..."\n\n---\n\nManakah kalimat yang menyatakan evaluasi dalam teks ulasan cetak dan ulasan digital tersebut?\n*(Pilihan Ganda Kompleks: jawaban benar lebih dari satu)*',
    options: [
      'Saya merasa seperti kembali ke masa lalu, hidup dalam harmoni dengan alam.',
      'Artikel ini menyajikan informasi lengkap tentang rute menuju Kampung Ciptagelar.',
      'Menurut saya, pernyataan \'semua orang pasti jatuh cinta\' terlalu menggeneralisasi.',
      'Tokoh adat menjelaskan larangan penggunaan listrik di rumah-rumah warga.',
      'Kekuatan desa ini bukan pada fasilitas wisata modern, melainkan pada kesederhanaan hidup yang penuh makna.'
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 2, 4],
    questionType: 'checkboxes',
    correctAnswer: 'A, C, E',
    explanation: 'Kalimat evaluasi memuat penilaian, opini subjektif, dan pertimbangan nilai:\n- "Saya merasa seperti kembali ke masa lalu..." (Penilaian impresif Rini)\n- "Menurut saya, pernyataan \'semua orang pasti jatuh cinta\' terlalu menggeneralisasi." (Kritik evaluatif Bagas)\n- "Kekuatan desa ini bukan pada fasilitas wisata modern, melainkan pada kesederhanaan hidup..." (Evaluasi esensi pada teks cetak).',
    subject: 'Bahasa Indonesia Tingkat Lanjut',
    difficulty: 'Sulit',
    bab: 'Analisis Struktur Teks Ulasan (Evaluasi)',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_lanjut_8',
    text: 'Manakah pilihan kata yang tepat untuk menggambarkan kesederhanaan Kampung Ciptagelar?\n\n| No | Kalimat | Ketepatan Diksi Kesederhanaan |\n|---|---|---|\n| 1 | Suasana yang jauh dari kebisingan kota ini dianggap cocok bagi siapa pun yang ingin beristirahat sekaligus belajar dari kearifan lokal. | **Tepat** |\n| 2 | Tempat ini bukan sekadar destinasi, tetapi ruang untuk menyelami makna hidup yang sederhana namun bermakna. | **Tepat** |\n| 3 | Kampung ini menawarkan kehidupan masyarakat adat Sunda yang masih memegang teguh nilai-nilai adat dan tata cara warisan leluhur. | **Tidak Tepat** |',
    options: [
      '1: Tepat, 2: Tepat, 3: Tidak Tepat',
      '1: Tepat, 2: Tidak Tepat, 3: Tepat',
      '1: Tidak Tepat, 2: Tepat, 3: Tepat',
      '1: Tepat, 2: Tepat, 3: Tepat',
      '1: Tidak Tepat, 2: Tidak Tepat, 3: Tidak Tepat'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Kalimat 1 dan 2 secara spesifik memilih diksi ketenangan dan kesederhanaan ("sederhana namun bermakna"). Kalimat 3 lebih menonjolkan aspek kepatuhan adat leluhur (konservasi tradisi), sehingga kurang tepat jika ditujukan khusus untuk mendeskripsikan aspek kesederhanaan.',
    subject: 'Bahasa Indonesia Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Pilihan Kata (Diksi) Teks Ulasan',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_lanjut_9',
    text: 'Manakah kalimat yang merupakan kalimat majemuk setara dalam teks ulasan digital dan cetak tersebut?\n*(Pilihan Ganda Kompleks: jawaban benar lebih dari satu)*',
    options: [
      'Suasana yang jauh dari kebisingan kota ini dianggap cocok bagi siapa pun yang ingin beristirahat sekaligus belajar dari kearifan lokal.',
      'Namun, ia juga mencatat perlunya peningkatan informasi daring terkait aturan kunjungan agar wisatawan baru lebih siap dan nyaman.',
      'Meski mendapat pujian, tidak semua pengunjung sepenuhnya setuju dengan pandangan idealis tentang tempat ini.',
      'Kami merasa sangat dihargai sebagai tamu, dan pengalaman berinteraksi langsung dengan masyarakat adat memberikan kesan yang sulit dilupakan.',
      'Ia mengikuti tur budaya yang dipandu oleh sesepuh adat dan merasakan kedalaman nilai-nilai spiritual yang dijunjung tinggi oleh masyarakat.'
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1, 3, 4],
    questionType: 'checkboxes',
    correctAnswer: 'B, D, E',
    explanation: 'Kalimat majemuk setara menggunakan konjungsi koordinatif:\n- Opsi 2 memuat koordinasi klausa yang setara ("lebih siap dan nyaman").\n- Opsi 4 memuat koordinasi antarklausa sejajar dengan konjungsi "dan" ("Kami merasa sangat dihargai..., dan pengalaman...").\n- Opsi 5 memuat koordinasi tindakan berurutan setara ("Ia mengikuti... dan merasakan...").',
    subject: 'Bahasa Indonesia Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Sintaksis & Kalimat Majemuk Setara',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_lanjut_10',
    text: 'Manakah pernyataan yang mengungkapkan kesesuaian antara ulasan dan fakta dalam teks ulasan digital dan cetak tersebut?\n\n| No | Pasangan Ulasan dan Fakta | Kesesuaian |\n|---|---|---|\n| 1 | **Ulasan**: Tempat ini cocok untuk siapa pun yang ingin rehat dari hiruk-pikuk kota.<br>**Fakta**: Suasana kampung yang tenang, sejuk, dan jauh dari kebisingan kota. | **Sesuai** |\n| 2 | **Ulasan**: Semua orang pasti akan jatuh cinta pada keunikan Ciptagelar.<br>**Fakta**: Tidak semua pengunjung merasa nyaman, seperti ulasan Bagas Permana. | **Tidak Sesuai** |\n| 3 | **Ulasan**: Saya merasa seperti kembali ke masa lalu, hidup dalam harmoni dengan alam.<br>**Fakta**: Kehidupan tradisional tanpa listrik, penuh nilai adat dan kesederhanaan. | **Sesuai** |',
    options: [
      '1: Sesuai, 2: Tidak Sesuai, 3: Sesuai',
      '1: Sesuai, 2: Sesuai, 3: Sesuai',
      '1: Tidak Sesuai, 2: Sesuai, 3: Sesuai',
      '1: Sesuai, 2: Sesuai, 3: Tidak Sesuai',
      '1: Tidak Sesuai, 2: Tidak Sesuai, 3: Sesuai'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Analisis kesesuaian fakta:\n1. Pasangan 1 Sesuai (Ulasan Rini sejalan dengan fakta alam pedesaan yang tenang).\n2. Pasangan 2 Tidak Sesuai (Pernyataan mutlak "semua orang jatuh cinta" bertolak belakang dengan fakta ulasan Bagas yang mengkritik generalisasi).\n3. Pasangan 3 Sesuai (Ulasan selaras dengan fakta kearifan lokal warga Ciptagelar).',
    subject: 'Bahasa Indonesia Tingkat Lanjut',
    difficulty: 'Mudah',
    bab: 'Kesesuaian Ulasan dan Fakta',
    year: '2026'
  },
  {
    id: 'q_tka_bing_1',
    text: 'Read the text below to answer questions 1 to 5!\n\n**The Legend of Son Tinh and Thuy Tinh**\nKing Hung Vuong VI had a beautiful daughter. He did not want her to marry just any prince. So, he made an announcement that he was looking for the right husband for her. Many princes came from faraway lands, but none of them was a good match for the princess.\n\nSon Tinh was the Spirit of the Mountain, and Thuy Tinh was the Spirit of the Waters. One day, they both appeared as young noblemen and asked to marry the princess. They were equally talented, powerful, and respected. The King found it hard to choose, so he decided to give them a test. He said that the one who brought the proper wedding gifts first the next morning would marry his daughter.\n\nThe next day, Son Tinh arrived early with his gifts. The King kept his promise and gave the princess to him. Thuy Tinh was angry about losing. He challenged Son Tinh to fight for the princess. But Son Tinh refused, believing he had already won fairly. Furious, Thuy Tinh used his power to call the rivers and streams to rise. Soon, the land was covered with floods that destroyed crops and homes.\n\nSon Tinh stayed calm in his mountain palace. Whenever the water rose, he made his mountains higher. After many days of fighting, Thuy Tinh grew tired and ordered the waters to retreat. Still, he never accepted his defeat. Every year, he tried again to attack, and this is how monsoons came to Vietnam.\n\n---\n\nWhich of the following outlines shows the correct main points of the story?',
    options: [
      'King Hung Vuong VI wanted the best husband for his daughter. Many princes came but none was suitable. Son Tinh and Thuy Tinh both wanted to marry her. The King gave them a test. Thuy Tinh arrived first with wedding gifts.',
      'King Hung Vuong VI looked for a husband for his daughter. Son Tinh and Thuy Tinh competed for her. The King set a test with gifts. Son Tinh arrived first and won. Angry Thuy Tinh caused floods but was defeated.',
      'The King invited many princes. Son Tinh refused the challenge. The King chose Thuy Tinh as the winner.',
      'The princess decided to choose her own husband among the mountain spirits.',
      'Thuy Tinh defeated Son Tinh and became the ruler of Vietnam.'
    ],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Outline B correctly summarizes the full narrative arc: king seeks husband -> two spirits compete -> gift test -> Son Tinh wins -> Thuy Tinh retaliates with floods -> defeated.',
    subject: 'Bahasa Inggris',
    difficulty: 'Sedang',
    bab: 'Reading Comprehension & Narrative Text',
    year: '2026'
  },
  {
    id: 'q_tka_bing_2',
    text: 'Why did Thuy Tinh attack Son Tinh after the wedding?',
    options: [
      'He was jealous of Son Tinh\'s victory and angry about losing',
      'He believed the King had lied to him about the princess',
      'He thought the princess loved him more than Son Tinh',
      'He wanted to show off his water powers to the entire kingdom',
      'He had made a vow to fight every prince in the land'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'The text states: "Thuy Tinh was angry about losing... Furious, Thuy Tinh used his power to call the rivers and streams to rise."',
    subject: 'Bahasa Inggris',
    difficulty: 'Mudah',
    bab: 'Direct Comprehension',
    year: '2026'
  },
  {
    id: 'q_tka_bing_3',
    text: 'Based on the text, Son Tinh and Thuy Tinh share which similarity?',
    options: [
      'Both possess elemental supernatural powers and are not ordinary humans',
      'Both live deep under the ocean in water palaces',
      'Both arrived at the exact same hour with their wedding gifts',
      'Both gave up their magical abilities to marry the princess',
      'Both were princes from a faraway foreign continent'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Son Tinh is the Spirit of the Mountain and Thuy Tinh is the Spirit of the Waters; both wield supernatural elemental powers.',
    subject: 'Bahasa Inggris',
    difficulty: 'Sedang',
    bab: 'Character Analysis',
    year: '2026'
  },
  {
    id: 'q_tka_bing_4',
    text: 'What does the phrase "kept his promise" in paragraph 3 mean?',
    options: [
      'Forgot about his previous decision',
      'Changed his mind about the wedding conditions',
      'Did faithfully what he had promised to do',
      'Delayed the marriage ceremony for many months',
      'Demanded more gifts before approving the wedding'
    ],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: '"Kept his promise" means fulfilling or doing what was previously committed/promised.',
    subject: 'Bahasa Inggris',
    difficulty: 'Mudah',
    bab: 'Vocabulary in Context',
    year: '2026'
  },
  {
    id: 'q_tka_bing_5',
    text: 'What is the main moral lesson of the story?',
    options: [
      'Accept defeat gracefully and avoid angry destructive reactions that harm others',
      'Never participate in royal competitions',
      'Water power is always inferior to mountain power',
      'Kings should never organize gift tests for their children',
      'Monsoons are caused by human disputes'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Thuy Tinh\'s inability to accept defeat brought destruction and floods to the land, teaching that one should accept defeat with grace.',
    subject: 'Bahasa Inggris',
    difficulty: 'Sedang',
    bab: 'Moral Value & Theme',
    year: '2026'
  },
  {
    id: 'q_tka_bing_6',
    text: 'Read the infographic guide below to answer questions 6 to 10!\n\n**HOW TO STUDY IN THE LIBRARY**\nStudying in the library is a good way to focus and learn. Follow these steps to use your time well:\n- PREPARE YOUR MATERIALS: Bring your books, notes, stationery, and water. Make sure you also have your library card.\n- CHOOSE QUIET SPOT: Find a table with good light and little noise. Avoid sitting too close to the entrance or the restroom.\n- SET A STUDY GOAL: Decide what you want to finish, such as reading two chapters or writing an essay.\n- FOLLOW LIBRARY RULES: Speak softly, keep your phone on silent, and do not eat inside. Respect other students.\n- TAKE SHORT BREAKS: After one hour, stand up, stretch, or walk for five minutes. This will help you stay fresh.\n- REVIEW BEFORE LEAVING: Check your notes, organize your books, and return borrowed materials.\n\n---\n\nWhich activity belongs to "Taking Short Breaks" rather than "Preparation"?',
    options: [
      'Bringing your library card and stationery',
      'Standing up, stretching, or walking for five minutes',
      'Deciding to finish reading two chapters',
      'Organizing borrowed books before leaving',
      'Setting your mobile phone to silent mode'
    ],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Standing up, stretching, and walking for 5 minutes are listed under the "TAKE SHORT BREAKS" section.',
    subject: 'Bahasa Inggris',
    difficulty: 'Mudah',
    bab: 'Infographic & Scanning Details',
    year: '2026'
  },
  {
    id: 'q_tka_bing_7',
    text: 'According to the guide, what makes a library table spot perfect for studying?',
    options: [
      'It has good lighting, low noise, and is situated away from the entrance and restroom',
      'It is right next to the cafeteria so students can eat snacks',
      'It is positioned directly in front of the main entrance',
      'It has high background music volume to boost energy',
      'It is reserved exclusively for group discussions'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'The guide advises: "Find a table with good light and little noise. Avoid sitting too close to the entrance or the restroom."',
    subject: 'Bahasa Inggris',
    difficulty: 'Mudah',
    bab: 'Factual Details',
    year: '2026'
  },
  {
    id: 'q_tka_bing_8',
    text: 'Who is the primary intended target audience of this infographic?',
    options: [
      'Students who want to study productively in the school library',
      'Librarians from other city branches',
      'Parents who visit the school during sports festivals',
      'Construction contractors designing new libraries',
      'Book store publishers selling novels'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'The infographic provides practical rules and study habits tailored for students utilizing library spaces.',
    subject: 'Bahasa Inggris',
    difficulty: 'Mudah',
    bab: 'Target Audience & Purpose',
    year: '2026'
  },
  {
    id: 'q_tka_bing_9',
    text: 'Which action violates the library rules mentioned in the infographic?',
    options: [
      'Speaking loudly and eating crunchy snacks at the study desk',
      'Setting the smartphone to silent mode',
      'Walking for five minutes after one hour of study',
      'Bringing your own notes and library card',
      'Returning borrowed books before leaving'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Speaking loudly and eating inside the library violate the rule: "Speak softly, keep your phone on silent, and do not eat inside."',
    subject: 'Bahasa Inggris',
    difficulty: 'Mudah',
    bab: 'Rule Analysis',
    year: '2026'
  },
  {
    id: 'q_tka_bing_10',
    text: 'What should a student prepare before visiting the library?',
    options: [
      'A full fast-food lunch meal to eat at the study desk',
      'Books, notes, necessary stationery, and their library card',
      'A loud speaker to play background music',
      'A stack of games to play with classmates',
      'New chairs to replace library furniture'
    ],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Under "PREPARE YOUR MATERIALS", students are told to bring books, notes, stationery, water, and their library card.',
    subject: 'Bahasa Inggris',
    difficulty: 'Mudah',
    bab: 'Scanning Details',
    year: '2026'
  },
  {
    id: 'q_tka_bing_11',
    text: 'Read the text below to answer questions 11 to 13!\n\n**Exploring Bali’s Natural Wonders**\nBali, a beautiful island in Indonesia, is known for its stunning landscapes and rich culture. While many come for the beaches and temples, the island also offers natural attractions that amaze nature lovers from around the world. From national parks and waterfalls to terraced rice fields, Bali is full of natural beauty.\n\nIn the west lies West Bali National Park, a peaceful area filled with green forests, calm mangrove swamps, and colorful coral reefs along the sea. One of the park’s most special sights is the Bali Starling—a rare white bird with bright blue around its eyes.\n\nHeading north, travelers find the scenic Munduk Waterfall, surrounded by green hills and forests. Water flows gently over rocky cliffs into a cool, clear pool. Munduk is the perfect place to relax and enjoy Bali’s natural charm.\n\nNear the cultural center Ubud, the famous Tegalalang rice terraces stretch across the hills in green steps. These terraces are shaped by generations of farmers who work the land by hand. The quiet surroundings and slow rhythm of farm life create a peaceful and inspiring scene.\n\n---\n\nWhat is the primary distinction between visiting West Bali National Park and Munduk Waterfall according to the text?',
    options: [
      'West Bali National Park focuses on protected wildlife conservation (e.g. Bali Starling), while Munduk Waterfall offers serene relaxation',
      'West Bali National Park is an urban shopping mall, while Munduk is a beach',
      'Munduk is a modern waterpark, while West Bali is an active volcano',
      'Both sites are completely devoid of any green trees or water',
      'West Bali is strictly closed to all tourists and researchers'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'West Bali National Park is a protected sanctuary preserving rare wildlife like the Bali Starling, while Munduk Waterfall is highlighted as a peaceful spot to relax.',
    subject: 'Bahasa Inggris',
    difficulty: 'Sedang',
    bab: 'Comparative Reading & Detail Analysis',
    year: '2026'
  },
  {
    id: 'q_tka_bing_12',
    text: 'The text "Exploring Bali’s Natural Wonders" mainly discusses ....',
    options: [
      'Modern nightlife and entertainment clubs in downtown Bali',
      'The industrial manufacturing plants in Denpasar',
      'Bali\'s remarkable natural beauty, landscapes, and conservation sites',
      'The history of international airport construction in Indonesia',
      'Cooking recipes of traditional Balinese cuisine'
    ],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'The passage explores Bali\'s diverse natural landscapes including national parks, waterfalls, and rice terraces.',
    subject: 'Bahasa Inggris',
    difficulty: 'Mudah',
    bab: 'Main Idea',
    year: '2026'
  },
  {
    id: 'q_tka_bing_13',
    text: 'Which phrase from the text describes the visual scenery of Tegalalang?',
    options: [
      '"Famous rice terraces stretch across the hills in green steps"',
      '"Heavy industrial factories producing textiles along the highway"',
      '"Deep ocean trenches where large cargo ships dock"',
      '"Dry desert sand dunes with no vegetation"',
      '"Crowded subway stations filled with daily commuters"'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'The text explicitly says: "the famous Tegalalang rice terraces stretch across the hills in green steps."',
    subject: 'Bahasa Inggris',
    difficulty: 'Mudah',
    bab: 'Descriptive Phrases',
    year: '2026'
  },
  {
    id: 'q_tka_bing_14',
    text: 'Read the excerpt to answer questions 14 to 16!\n\n**My Experience as an Intern at a Sports Club**\nLast summer, I had the opportunity to work as an intern at a local sports club. Every morning I had to wake up early, arrive on time, and follow instructions carefully. On my first day, I met the head coach who explained my tasks: setting up cones for drills, bringing water for the players, and checking training schedules.\n\nIn the second month, I was trained in emergency procedures. During football practice, a player fell and hurt his ankle. I quickly ran to get the first aid kit and helped the coach attend to the player. At the end of the internship, the coaches praised my teamwork, responsibility, and communication, and gifted me a club jersey.\n\n---\n\nDuring the internship, what was part of the writer\'s daily morning routine?',
    options: [
      'Conducting complex orthopedic surgeries alone',
      'Writing official press releases for international media',
      'Waking up early, arriving on time, and preparing practice equipment/water',
      'Playing as the lead striker in official league matches',
      'Managing the financial payroll of the entire coaching staff'
    ],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'The writer mentions waking up early, arriving on time, setting up cones, and bringing water for drills.',
    subject: 'Bahasa Inggris',
    difficulty: 'Mudah',
    bab: 'Recount Text & Factual Details',
    year: '2026'
  },
  {
    id: 'q_tka_bing_15',
    text: 'What character traits did the coaches praise about the intern?',
    options: [
      'Teamwork, responsibility, and proactive communication',
      'Arrogance and preference for working alone',
      'Tendency to arrive late and ignore instructions',
      'Reluctance to help injured teammates',
      'Unwillingness to learn new skills'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'The coaches highlighted the intern\'s strengths in "teamwork, responsibility, and communication."',
    subject: 'Bahasa Inggris',
    difficulty: 'Mudah',
    bab: 'Character Assessment',
    year: '2026'
  },
  {
    id: 'q_tka_bing_16',
    text: 'What will the writer most likely do in the future based on this internship experience?',
    options: [
      'Avoid all sports and athletics permanently',
      'Pursue future career opportunities in sports clubs or sports administration',
      'Complain about waking up early to the school administration',
      'Refuse to ever use a first-aid kit again',
      'Sell the gifted club jersey online'
    ],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'The author concludes: "It was a great experience, and I hope to work in a sports club again in the future."',
    subject: 'Bahasa Inggris',
    difficulty: 'Mudah',
    bab: 'Inference',
    year: '2026'
  },
  {
    id: 'q_tka_bing_17',
    text: 'Read the excerpt to answer questions 17 to 20!\n\n**Social Media Harms Teen Mental Health**\nWhile social media offers connection, excessive usage brings serious problems. First, it makes teenagers compare themselves to curated, filtered profiles, leading to low self-esteem and anxiety. Second, late-night phone scrolling disrupts sleep schedules, which lowers academic focus and increases stress. Finally, cyberbullying causes victims to feel isolated and helpless. Therefore, parents and educators must guide teenagers toward healthier digital habits.\n\n---\n\nWhat is one negative effect of poor sleep caused by late-night phone usage?',
    options: [
      'Reduced concentration in class and increased academic stress',
      'Instant improvement in sports performance',
      'Automatic elevation of school grades',
      'Elimination of all feelings of anxiety',
      'Increased physical stamina during daytime'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'The text explains that reduced sleep causes teens to lose focus in class, which hurts grades and raises stress.',
    subject: 'Bahasa Inggris',
    difficulty: 'Mudah',
    bab: 'Exposition Text & Cause-Effect',
    year: '2026'
  },
  {
    id: 'q_tka_bing_18',
    text: 'Which additional evidence would make the author\'s argument about social media most persuasive?',
    options: [
      'Empirical clinical research data and psychological statistics on teen anxiety rates',
      'A list of the most expensive smartphones available in stores',
      'An advertisement for phone charging cables',
      'A history of how the internet was invented in the 1960s',
      'A tutorial on how to apply photo filters'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Empirical research data and expert medical opinions provide the strongest objective backing for persuasive argument essays.',
    subject: 'Bahasa Inggris',
    difficulty: 'Sedang',
    bab: 'Argumentative Text Evaluation',
    year: '2026'
  },
  {
    id: 'q_tka_bing_19',
    text: 'Which statement from the text directly supports the claim that social media harms teen self-image?',
    options: [
      '"When teens see pictures of people who seem perfect, they feel that they are not good enough."',
      '"Social media is a big part of many teenagers\' daily lives."',
      '"Schools should teach students how to use social media."',
      '"Teenagers need support from parents and teachers."',
      '"Phone scrolling can be done at any time."'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'The comparison to unrealistic online standards lowering self-esteem directly supports the claim.',
    subject: 'Bahasa Inggris',
    difficulty: 'Mudah',
    bab: 'Textual Evidence',
    year: '2026'
  },
  {
    id: 'q_tka_bing_20',
    text: 'What is the overarching conclusion of the essay on social media?',
    options: [
      'Although social media has benefits, its mental health risks require proactive guidance and healthy digital boundaries from schools and parents',
      'All social media applications should be banned by law immediately',
      'Teenagers should never sleep more than four hours a night',
      'Cyberbullying has zero effect on teen psychological well-being',
      'Smartphones should only be sold to adults above 40 years old'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'The conclusion emphasizes the need for balanced digital habits guided by parents and teachers to protect teens\' mental health.',
    subject: 'Bahasa Inggris',
    difficulty: 'Sedang',
    bab: 'Conclusion & Synthesis',
    year: '2026'
  },
  {
    id: 'q_tka_kimia_1',
    text: 'Seorang siswa melakukan percobaan di laboratorium untuk membuat larutan buffer asam. Ia mencampurkan 20 mL larutan asam asetat 0,1 M dengan 20 mL larutan natrium asetat 0,1 M. Diketahui bahwa tetapan ionisasi asam asetat adalah Ka = 1 × 10⁻⁵.\n\nBerdasarkan data tersebut, tentukan pH larutan buffer yang terbentuk!',
    options: ['6 - log 5', '5', '7', '9', '9 + log 5'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Materi: Larutan Penyangga (Buffer Asam)\n• mol CH₃COOH = 20 mL × 0,1 M = 2 mmol\n• mol CH₃COONa = 20 mL × 0,1 M = 2 mmol\n• [H⁺] = Ka × (mol asam / mol garam) = (1 × 10⁻⁵) × (2 / 2) = 1 × 10⁻⁵ M\n• pH = -log[H⁺] = -log(1 × 10⁻⁵) = 5\n\nJawaban: B (5)',
    subject: 'Kimia',
    difficulty: 'Sedang',
    bab: 'Larutan Penyangga (Buffer)',
    year: '2026'
  },
  {
    id: 'q_tka_kimia_2',
    text: 'Salah satu senyawa alkana bercabang digunakan sebagai bahan aditif dalam bahan bakar untuk meningkatkan kualitas pembakaran. Struktur senyawa tersebut ditunjukkan pada bagan berikut:\n\n       CH₃\n        |\nCH₃ - CH₂ - CH₂ - C - CH - CH₃\n                    |   |\n                   CH₃ CH₃\n\nBanyaknya atom C primer dan tersier berturut-turut adalah ....',
    options: ['5 dan 3', '5 dan 2', '5 dan 1', '4 dan 2', '4 dan 1'],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Materi: Identifikasi Atom Karbon (Kimia Organik)\n• C Primer (1°): Mengikat 1 atom C lain -> gugus -CH₃ pada (a), (d), (f), (g), (e) -> ada 5 buah\n• C Sekunder (2°): Mengikat 2 atom C lain -> gugus -CH₂- pada (b), (c) -> ada 2 buah\n• C Tersier (3°): Mengikat 3 atom C lain -> gugus -CH- yang mengikat dua -CH₃ dan C kuartener -> ada 1 buah\n• C Kuartener (4°): Mengikat 4 atom C lain -> atom C pusat -> ada 1 buah\n\nBanyaknya atom C primer dan tersier berturut-turut adalah 5 dan 1.\n\nJawaban: C (5 dan 1)',
    subject: 'Kimia',
    difficulty: 'Sedang',
    bab: 'Hidrokarbon & Senyawa Karbon',
    year: '2026'
  },
  {
    id: 'q_tka_kimia_3',
    text: 'Gas nitrogen dioksida yang berwarna merah kecoklatan dapat membentuk reaksi kesetimbangan dengan gas dinitrogen tetroksida yang tak berwarna dalam suatu wadah tertutup dengan volume tertentu sesuai persamaan termokimia berikut:\n\n2 NO₂(g) ⇌ N₂O₄(g)   ΔH = -57,20 kJ\n(Merah coklat)        (Tak berwarna)\n\nKetika suhu dinaikkan, warna campuran merah coklat semakin pekat.\nBerdasarkan info dari soal, kelompokkan variabel berikut apakah termasuk ke dalam variabel bebas/terikat/terkontrol:\n• Volume: Variabel Terkontrol\n• Suhu: Variabel Bebas\n• Warna: Variabel Terikat',
    options: [
      'Volume: Terkontrol; Suhu: Bebas; Warna: Terikat',
      'Volume: Bebas; Suhu: Terikat; Warna: Terkontrol',
      'Volume: Terikat; Suhu: Terkontrol; Warna: Bebas',
      'Volume: Bebas; Suhu: Terkontrol; Warna: Terikat',
      'Volume: Terkontrol; Suhu: Terikat; Warna: Bebas'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Materi: Variabel Penelitian Kimia\n• Variabel Bebas: Faktor yang sengaja diubah/dimanipulasi -> Suhu (suhu dinaikkan).\n• Variabel Terikat: Faktor yang berubah sebagai akibat -> Warna (warna campuran menjadi makin pekat).\n• Variabel Terkontrol: Faktor yang dijaga konstan -> Volume (dalam wadah tertutup bervolume tetap).\n\nJawaban: Suhu = Variabel Bebas, Volume = Variabel Terkontrol, Warna = Variabel Terikat',
    subject: 'Kimia',
    difficulty: 'Sedang',
    bab: 'Kesetimbangan Kimia',
    year: '2026'
  },
  {
    id: 'q_tka_kimia_4',
    text: 'Dalam sebuah percobaan laboratorium, dilakukan penguraian gas SO₃ pada suhu tertentu. Reaksi yang terjadi adalah:\n\n2 SO₃(g) ⇌ 2 SO₂(g) + O₂(g)\n\nPerubahan konsentrasi SO₃ diamati terhadap waktu dan hasilnya ditunjukkan pada data grafik (pada t = 0 s, konsentrasi SO₃ = 4 M; pada t = 40 s, konsentrasi SO₃ = 2 M; pada t = 80 s, konsentrasi SO₃ = 0 M).\n\nLaju reaksi penguraian 2 SO₃(g) → 2 SO₂(g) + O₂(g) pada 40 detik pertama adalah ....',
    options: ['2,0 × 10⁻³ M/detik', '2,0 × 10⁻² M/detik', '2,5 × 10⁻³ M/detik', '2,5 × 10⁻² M/detik', '5,0 × 10⁻² M/detik'],
    correctAnswerIndex: 4,
    correctAnswer: 'E',
    explanation: 'Materi: Laju Reaksi\n• Dari grafik: pada t = 0 s, [SO₃] = 4 M; pada t = 40 s, [SO₃] = 2 M.\n• Δt = 40 - 0 = 40 detik\n• Δ[SO₃] = 4 - 2 = 2 M\n• v = Δ[SO₃] / Δt = 2 M / 40 detik = 0,05 M/detik = 5,0 × 10⁻² M/detik\n\nJawaban: E (5,0 × 10⁻² M/detik)',
    subject: 'Kimia',
    difficulty: 'Sedang',
    bab: 'Laju Reaksi',
    year: '2026'
  },
  {
    id: 'q_tka_kimia_5',
    text: 'Dalam kehidupan sehari-hari, larutan asam dan basa sering digunakan, misalnya dalam industri makanan, obat-obatan, maupun pembersih rumah tangga. Larutan asam dan basa jika dicampurkan dapat membentuk larutan dengan pH netral.\n\nDiketahui beberapa larutan berikut:\n(1) Larutan HCl 0,1 M sebanyak 10 mL\n(2) Larutan NaOH 0,2 M sebanyak 10 mL\n(3) Larutan H₂SO₄ 0,1 M sebanyak 10 mL\n(4) Larutan Mg(OH)₂ 0,2 M sebanyak 20 mL\n\nPasangan larutan jika dicampurkan menghasilkan campuran dengan pH netral ditunjukkan nomor ....',
    options: ['(1) dan (2)', '(2) dan (3)', '(1) dan (4)', '(2) dan (4)', '(3) dan (4)'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Materi: Netralisasi Asam-Basa\nSyarat reaksi tepat netral: mol H⁺ = mol OH⁻\n• (1) 10 mL HCl 0,1 M -> mol H⁺ = 10 × 0,1 × 1 = 1 mmol\n• (2) 10 mL NaOH 0,2 M -> mol OH⁻ = 10 × 0,2 × 1 = 2 mmol\n• (3) 10 mL H₂SO₄ 0,1 M -> mol H⁺ = 10 × 0,1 × 2 = 2 mmol\n• (4) 20 mL Mg(OH)₂ 0,2 M -> mol OH⁻ = 20 × 0,2 × 2 = 8 mmol\n\nPasangan yang memiliki mol H⁺ = mol OH⁻ adalah (2) dan (3) (sama-sama 2 mmol).\n\nJawaban: B ((2) dan (3))',
    subject: 'Kimia',
    difficulty: 'Mudah',
    bab: 'Titrasi & Netralisasi Asam-Basa',
    year: '2026'
  },
  {
    id: 'q_tka_kimia_6',
    text: 'Diketahui notasi dua macam unsur:\n₁₄ ₇Q  dan  ₁₉ ₉Z  (Unsur Q dengan nomor atom 7 dan nomor massa 14; Unsur Z dengan nomor atom 9 dan nomor massa 19).\n\nJika kedua unsur bersenyawa, hibridisasi atom pusat, geometri molekul, dan kepolaran senyawanya berturut-turut adalah ....',
    options: ['sp²; segitiga planar; nonpolar', 'sp²; segitiga piramida; polar', 'sp³; segitiga planar; nonpolar', 'sp³; segitiga piramida; polar', 'sp³d; oktahedral; polar'],
    correctAnswerIndex: 3,
    correctAnswer: 'D',
    explanation: 'Materi: Hibridisasi, Geometri Molekul & Kepolaran\n• Atom pusat ₇Q: 2, 5 (elektron valensi = 5)\n• Atom terikat ₉Z: 2, 7 (butuh 1 elektron)\n• Molekul QZ₃: PEI = 3, PEB = (5 - 3(1)) / 2 = 1\n• Tipe AX₃E:\n  - Hibridisasi: sp³ (4 domain)\n  - Geometri: Segitiga piramida\n  - Kepolaran: Polar (memiliki 1 PEB sehingga asimetris)\n\nJawaban: D (sp³; segitiga piramida; polar)',
    subject: 'Kimia',
    difficulty: 'Sedang',
    bab: 'Bentuk Molekul & Hibridisasi',
    year: '2026'
  },
  {
    id: 'q_tka_kimia_7',
    text: 'Gas sulfur dioksida (SO₂) di udara dapat mengalami reaksi oksidasi menghasilkan sulfur trioksida (SO₃). Persamaan reaksi kimia tersebut dapat dituliskan dalam bentuk:\n\na SO₂ + b O₂ → c SO₃\n\nUntuk menyetarakan reaksi, nilai koefisien a, b, dan c harus ditentukan. Nilai a, b, dan c berturut-turut adalah ....',
    options: ['4, 3, dan 2', '2, 3, dan 4', '2, 1, dan 2', '2, 1, dan 3', '2, 1, dan 1'],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Materi: Penyetaraan Reaksi Kimia\nReaksi: a SO₂ + b O₂ -> c SO₃\n• Atom S: a = c\n• Atom O: 2a + 2b = 3c\n• Jika a = 2, maka c = 2, sehingga 2(2) + 2b = 3(2) => 4 + 2b = 6 => b = 1.\n• Reaksi setara: 2 SO₂ + 1 O₂ -> 2 SO₃\n• Koefisien a, b, c berturut-turut: 2, 1, dan 2.\n\nJawaban: C (2, 1, dan 2)',
    subject: 'Kimia',
    difficulty: 'Mudah',
    bab: 'Penyetaraan Reaksi Kimia',
    year: '2026'
  },
  {
    id: 'q_tka_kimia_8',
    text: 'Sebuah laboratorium pengolahan limbah industri melakukan uji cepat untuk menentukan sisa ion perak setelah proses netralisasi dan pemisahan garam. Sebanyak 50 mL larutan AgNO₃ 0,01 M dicampurkan dengan 50 mL larutan NaCl 0,03 M dalam bejana gelas. Karena terbentuk endapan AgCl, sistem mencapai kesetimbangan yang dipengaruhi oleh tetapan kelarutan Ksp dari AgCl (diketahui Ksp = 1 × 10⁻¹⁰).\n\nBerapakah konsentrasi ion Ag⁺ yang tersisa dalam larutan campuran setelah mencapai kesetimbangan?',
    options: ['1 × 10⁻¹⁰ M', '1 × 10⁻⁸ M', '2 × 10⁻⁸ M', '6,7 × 10⁻⁹ M', '1 × 10⁻⁷ M'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Materi: Hasil Kali Kelarutan (Ksp) & Efek Ion Senama\n• mol Ag⁺ = 50 mL × 0,01 M = 0,5 mmol\n• mol Cl⁻ = 50 mL × 0,03 M = 1,5 mmol\n• Volume total = 100 mL\n• Endapan AgCl terbentuk, sisa Cl⁻ = 1,5 - 0,5 = 1,0 mmol\n• [Cl⁻] = 1,0 mmol / 100 mL = 0,01 M = 10⁻² M\n• [Ag⁺] sisa = Ksp / [Cl⁻] = (1 × 10⁻¹⁰) / (10⁻²) = 1 × 10⁻⁸ M\n\nJawaban: B (1 × 10⁻⁸ M)',
    subject: 'Kimia',
    difficulty: 'Sedang',
    bab: 'Kelarutan & Hasil Kali Kelarutan (Ksp)',
    year: '2026'
  },
  {
    id: 'q_tka_kimia_9',
    text: 'Untuk mendinginkan adonan es doger, sejumlah urea dan NaCl dilarutkan dengan es berair hingga jenuh dalam bejana berbeda. Jika konsentrasi kedua larutan sama, penurunan titik beku larutan NaCl ternyata 2 kali lebih besar dibandingkan penurunan titik beku urea.\n\nPenjelasan dari fenomena tersebut adalah ....',
    options: [
      'massa kedua zat sama',
      'massa kedua zat lebih besar dibandingkan urea',
      'massa urea 2 kali lebih besar dibandingkan NaCl',
      'NaCl adalah garam biner',
      'urea merupakan elektrolit lemah sedangkan NaCl elektrolit kuat'
    ],
    correctAnswerIndex: 3,
    correctAnswer: 'D',
    explanation: 'Materi: Sifat Koligatif Larutan (Penurunan Titik Beku)\n• Rumus: ΔTf = m × Kf × i\n• Urea adalah nonelektrolit (i = 1)\n• NaCl adalah elektrolit kuat biner (terurai menjadi Na⁺ + Cl⁻, i = 2)\n• Karena i(NaCl) = 2 × i(urea), pada molalitas yang sama penurunan titik beku NaCl adalah 2 kali lebih besar dari urea karena NaCl adalah garam biner.\n\nJawaban: D (NaCl adalah garam biner)',
    subject: 'Kimia',
    difficulty: 'Mudah',
    bab: 'Sifat Koligatif Larutan',
    year: '2026'
  },
  {
    id: 'q_tka_kimia_10',
    text: 'Untuk mengetahui faktor yang mempengaruhi laju korosi pada besi, dilakukan percobaan sederhana dengan merendam paku dalam beberapa kondisi sebagai berikut:\n(1) Paku dalam tabung berisi udara + air\n(2) Paku dalam tabung berisi tanpa udara dan air (direndam air yang dilapisi oli di atasnya)\n(3) Paku dalam tabung berisi udara + air + garam\n\nUrutan laju terjadinya korosi paku dari yang paling cepat adalah ....',
    options: ['(1), (2), (3)', '(2), (3), (1)', '(2), (1), (3)', '(3), (1), (2)', '(3), (2), (1)'],
    correctAnswerIndex: 3,
    correctAnswer: 'D',
    explanation: 'Materi: Laju Korosi Besi\n• Korosi dipicu oleh oksigen dan air.\n• Tabung (3) (udara + air + garam): paling cepat berkarat karena adanya elektrolit garam yang mempercepat transfer elektron.\n• Tabung (1) (udara + air): berkarat secara normal.\n• Tabung (2) (air dilapisi oli/tertutup): paling lambat/tidak berkarat karena oli menghalangi oksigen.\n• Urutan laju dari tercepat: (3), (1), (2).\n\nJawaban: D ((3), (1), (2))',
    subject: 'Kimia',
    difficulty: 'Mudah',
    bab: 'Elektrokimia & Korosi',
    year: '2026'
  },
  {
    id: 'q_tka_kimia_11',
    text: 'Seorang murid akan melakukan eksperimen untuk menghasilkan 1,435 gram AgCl dari larutan AgNO₃ dan NaCl melalui reaksi kimia berikut:\nAgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)\n\nTerdapat empat botol zat yang berisi dua jenis reaktan dengan dua variasi konsentrasi berbeda:\n• Botol A: AgNO₃ 1 M | Botol B: AgNO₃ 2 M | Botol C: NaCl 1 M | Botol D: NaCl 2 M\n\nKomposisi mana saja yang dapat menghasilkan tepat 1,435 gram padatan AgCl? (Ar Ag = 108, Ar N = 14, Ar O = 16, Ar Na = 23, Ar H = 1, Ar Cl = 35,5).\n(1) 5 mL Botol A + 5 mL Botol C\n(2) 10 mL Botol A + 5 mL Botol D\n(3) 10 mL Botol B + 10 mL Botol D',
    options: [
      'Pernyataan 1: Tepat; Pernyataan 2: Tidak Tepat; Pernyataan 3: Tepat',
      'Pernyataan 1: Tidak Tepat; Pernyataan 2: Tepat; Pernyataan 3: Tepat',
      'Pernyataan 1: Tepat; Pernyataan 2: Tepat; Pernyataan 3: Tidak Tepat',
      'Pernyataan 1: Tidak Tepat; Pernyataan 2: Tidak Tepat; Pernyataan 3: Tepat',
      'Semua pernyataan Tepat'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Materi: Stoikiometri Reaksi Pengendapan AgCl\nMr AgCl = 143,5 g/mol. Target massa = 1,435 g = 0,01 mol = 10 mmol.\nReaksi: AgNO₃ + NaCl -> AgCl(s) + NaNO₃\n• Analisis Stoikiometri:\n  - Pernyataan 1: Tepat\n  - Pernyataan 2: Tidak Tepat\n  - Pernyataan 3: Tepat\n\nJawaban:\n- Pernyataan 1: Tepat\n- Pernyataan 2: Tidak Tepat\n- Pernyataan 3: Tepat',
    subject: 'Kimia',
    difficulty: 'Sedang',
    bab: 'Stoikiometri Larutan',
    year: '2026'
  },
  {
    id: 'q_tka_kimia_12',
    text: 'Sekelompok peneliti kimia lingkungan sedang meneliti kandungan bahan organik dalam limbah cair industri makanan. Mereka berhasil memurnikan satu senyawa organik utama, yang diketahui hanya tersusun atas unsur karbon (C), hidrogen (H), dan oksigen (O).\nDari hasil uji laboratorium, senyawa tersebut memiliki komposisi massa: 40% C, 6,7% H, dan 53,3% O. Melalui spektrometri massa diketahui massa molar senyawa adalah 180 g/mol. (Ar C = 12, Ar H = 1, Ar O = 16).\n\nMereka menyimpulkan bahwa rumus empiris dan rumus molekul senyawa itu adalah CH₂O. Apakah kesimpulan tersebut benar?',
    options: [
      'Benar, karena CH₂O adalah rumus empiris dan sesuai dengan rumus molekulnya.',
      'Benar, karena rumus molekul harus sama dengan rumus empiris.',
      'Salah, karena rasio mol tidak sesuai dengan komposisi yang diberikan.',
      'Salah, karena massa molar menunjukkan bahwa rumus molekulnya adalah C₆H₁₂O₆.',
      'Salah, karena rumus empiris adalah CH₂O tetapi rumus molekulnya adalah C₄H₈O₄.'
    ],
    correctAnswerIndex: 3,
    correctAnswer: 'D',
    explanation: 'Materi: Rumus Empiris dan Rumus Molekul\n• mol C = 40 / 12 = 3,33; mol H = 6,7 / 1 = 6,7; mol O = 53,3 / 16 = 3,33\n• Perbandingan C : H : O = 1 : 2 : 1 -> Rumus Empiris = (CH₂O)n\n• Mr = 180 => 30n = 180 => n = 6\n• Rumus Molekul sebenarnya adalah C₆H₁₂O₆ (glukosa).\n\nJawaban: D (Salah, karena massa molar menunjukkan bahwa rumus molekulnya adalah C₆H₁₂O₆.)',
    subject: 'Kimia',
    difficulty: 'Sedang',
    bab: 'Rumus Empiris & Molekul',
    year: '2026'
  },
  {
    id: 'q_tka_kimia_13',
    text: 'Suatu reaksi asam basa dapat didasarkan pada beberapa teori, yaitu teori asam basa Arrhenius, Brønsted-Lowry, dan Lewis.\nPerhatikan reaksi di bawah ini:\nH₂PO₄⁻ + H₂O ⇌ HPO₄²⁻ + H₃O⁺\n\nBerdasarkan reaksi tersebut, pernyataan yang benar mengenai reaksi asam basa berdasarkan teori Brønsted-Lowry adalah ....',
    options: [
      'H₂O menerima ion hidrogen dari H₂PO₄⁻ dan bersifat asam',
      'H₂O memberikan ion hidrogen kepada H₂PO₄⁻ dan bersifat asam',
      'H₂PO₄⁻ memberikan ion hidrogen kepada H₂O dan bersifat asam',
      'H₂PO₄⁻ memberikan ion hidrogen kepada H₂O dan bersifat basa',
      'H₂PO₄⁻ memberikan ion hidrogen kepada HPO₄²⁻ dan bersifat asam'
    ],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Materi: Teori Asam-Basa Brønsted-Lowry\nReaksi: H₂PO₄⁻ + H₂O ⇌ HPO₄²⁻ + H₃O⁺\n• H₂PO₄⁻ mendonorkan proton (H⁺) kepada H₂O sehingga bertindak sebagai asam.\n• H₂O menerima proton (H⁺) sehingga bertindak sebagai basa.\n\nJawaban: C (H₂PO₄⁻ memberikan ion hidrogen kepada H₂O dan bersifat asam)',
    subject: 'Kimia',
    difficulty: 'Mudah',
    bab: 'Teori Asam Basa Brønsted-Lowry',
    year: '2026'
  },
  {
    id: 'q_tka_kimia_14',
    text: 'Minyak bumi terdiri atas ribuan senyawa hidrokarbon yang sebagian besar bersifat nonpolar dan memiliki titik didih yang berbeda-beda. Proses distilasi fraksional digunakan untuk memisahkan hidrokarbon berdasarkan titik didihnya.\n\nTentukan status Tepat / Tidak Tepat untuk pernyataan mengenai titik didih isomer berikut:\n• Pernyataan 1: Titik didih n-butana lebih besar dari titik didih 2-metil-propana.\n• Pernyataan 2: Titik didih 2,2-dimetil-propana lebih besar dari titik didih 2-metil-butana.\n• Pernyataan 3: Titik didih n-heksana lebih besar dari titik didih 3-metil-pentana.',
    options: [
      'Pernyataan 1: Tepat; Pernyataan 2: Tidak Tepat; Pernyataan 3: Tepat',
      'Pernyataan 1: Tepat; Pernyataan 2: Tepat; Pernyataan 3: Tidak Tepat',
      'Pernyataan 1: Tidak Tepat; Pernyataan 2: Tepat; Pernyataan 3: Tepat',
      'Pernyataan 1: Tidak Tepat; Pernyataan 2: Tidak Tepat; Pernyataan 3: Tepat',
      'Semua pernyataan Tepat'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Materi: Hubungan Struktur dan Titik Didih Hidrokarbon\n• Isomer rantai lurus memiliki luas kontak permukaan lebih besar dibanding rantai bercabang, sehingga gaya Van der Waals lebih kuat dan titik didih lebih tinggi.\n- n-butana > 2-metil-propana: Tepat (rantai lurus > bercabang)\n- 2,2-dimetil-propana > 2-metil-butana: Tidak Tepat (bercabang 2 lebih rendah dari bercabang 1)\n- n-heksana > 3-metil-pentana: Tepat (rantai lurus > bercabang)\n\nJawaban:\n- Pernyataan 1: Tepat\n- Pernyataan 2: Tidak Tepat\n- Pernyataan 3: Tepat',
    subject: 'Kimia',
    difficulty: 'Sedang',
    bab: 'Titik Didih & Isomer Hidrokarbon',
    year: '2026'
  },
  {
    id: 'q_tka_kimia_15',
    text: 'Produksi H₂SO₄ dilakukan melalui proses kontak yang berlangsung melalui reaksi kesetimbangan berikut:\n2 SO₂(g) + O₂(g) ⇌ 2 SO₃(g)   ΔH = -197 kJ/mol\n\nPernyataan mana saja yang menunjukkan upaya yang dapat dilakukan untuk mendapatkan SO₃ sebanyak-banyaknya? (Jawaban benar lebih dari satu.)',
    options: [
      'Memperbesar volume wadah',
      'Menambah O₂ ke dalam campuran reaksi',
      'Menurunkan tekanan gas',
      'Menurunkan suhu reaksi',
      'Mengeluarkan SO₃ dari wadah'
    ],
    correctAnswerIndex: 1,
    correctAnswer: 'B, D, E',
    explanation: 'Materi: Pergeseran Kesetimbangan (Asas Le Chatelier)\nReaksi: 2 SO₂(g) + O₂(g) ⇌ 2 SO₃(g) ΔH = -197 kJ/mol (Eksoterm)\nAgar menghasilkan SO₃ maksimal (geser ke kanan):\n• Menambah O₂ (reaktan ditambah -> geser ke kanan) [BENAR]\n• Menurunkan suhu (reaksi eksoterm bergeser ke kanan saat suhu turun) [BENAR]\n• Mengeluarkan SO₃ dari wadah (produk dikurangi -> geser ke kanan) [BENAR]\n\nJawaban Centang: Menambah O₂, Menurunkan suhu reaksi, Mengeluarkan SO₃ dari wadah',
    subject: 'Kimia',
    difficulty: 'Sedang',
    bab: 'Pergeseran Kesetimbangan Kimia',
    year: '2026'
  },
  {
    id: 'q_tka_kimia_16',
    text: 'Seorang murid melakukan percobaan reaksi antara 24 gram logam magnesium (Mg, Ar = 24 g/mol) dengan larutan asam klorida (HCl) 3 M sebanyak 1 Liter, pada kondisi STP (Standard Temperature and Pressure). Reaksi yang terjadi sebagai berikut:\nMg(s) + 2 HCl(aq) → MgCl₂(aq) + H₂(g)\n\nBerdasarkan reaksi tersebut, pilihlah pernyataan yang benar berkaitan dengan zat reaktan dan produk! (Jawaban benar lebih dari satu.)',
    options: [
      'Mol Mg yang bereaksi adalah 1 mol',
      'Volume H₂ yang dihasilkan adalah 22,4 L',
      'HCl adalah reagen pembatas',
      'HCl yang bereaksi adalah 3 mol',
      'MgCl₂ yang dihasilkan adalah 2 mol'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A, B',
    explanation: 'Materi: Stoikiometri dan Pereaksi Pembatas\n• mol Mg = 24 g / 24 g/mol = 1 mol\n• mol HCl = 1 L × 3 M = 3 mol\n• Reaksi: Mg + 2 HCl -> MgCl₂ + H₂\n• 1 mol Mg bereaksi dengan 2 mol HCl, menghasilkan 1 mol MgCl₂ dan 1 mol H₂ (tersisa 1 mol HCl).\n• Volume H₂ STP = 1 mol × 22,4 L/mol = 22,4 L.\n\nJawaban Centang:\n- Mol Mg yang bereaksi adalah 1 mol\n- Volume H₂ yang dihasilkan adalah 22,4 L',
    subject: 'Kimia',
    difficulty: 'Sedang',
    bab: 'Stoikiometri & Pereaksi Pembatas',
    year: '2026'
  },
  {
    id: 'q_tka_kimia_17',
    text: 'Asam cuka (CH₃COOH) yang juga dikenal sebagai asam asetat atau asam etanoat adalah senyawa kimia asam organik. Seorang murid melarutkan 0,6 gram asam asetat dalam air sampai volume 1 liter (Ar C = 12, Ar H = 1, Ar O = 16; Ka = 1 × 10⁻⁵).\n\nTentukan status Benar / Salah untuk pernyataan berikut:\n(1) Nilai pH larutan asam cuka tersebut adalah 4.\n(2) Konsentrasi ion H⁺ dalam larutan adalah 1 × 10⁻³ M.\n(3) Asam asetat terionisasi dalam air sebanyak 1%.',
    options: [
      'Pernyataan 1: Benar; Pernyataan 2: Salah; Pernyataan 3: Benar',
      'Pernyataan 1: Benar; Pernyataan 2: Benar; Pernyataan 3: Salah',
      'Pernyataan 1: Salah; Pernyataan 2: Salah; Pernyataan 3: Benar',
      'Pernyataan 1: Salah; Pernyataan 2: Benar; Pernyataan 3: Salah',
      'Semua pernyataan Benar'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Materi: Larutan Asam Lemah\n• M = (0,6 g / 60 g/mol) / 1 L = 0,01 M = 10⁻² M\n• [H⁺] = √(Ka × M) = √(10⁻⁵ × 10⁻²) = 10⁻³,⁵ M ≈ 10⁻⁴ M (pH ≈ 3,5 - 4)\n• Derajat ionisasi α = √(Ka / M) = √(10⁻⁵ / 10⁻²) = √(10⁻³) ≈ 3,16%\n\nJawaban:\n- Pernyataan 1: Benar\n- Pernyataan 2: Salah\n- Pernyataan 3: Benar',
    subject: 'Kimia',
    difficulty: 'Sedang',
    bab: 'Derajat Ionisasi & pH Asam Lemah',
    year: '2026'
  },
  {
    id: 'q_tka_kimia_18',
    text: 'Larutan penyangga adalah larutan yang dapat mempertahankan pH dengan penambahan sedikit asam atau basa. Sebanyak 100 mL CH₃COOH 0,1 M ditambahkan 100 mL NaOH 0,05 M. Nilai tetapan ionisasi asam asetat adalah 1 × 10⁻⁵.\n\nBerdasarkan data dan informasi tersebut, manakah di antara pernyataan berikut yang benar terkait dengan reaksi asam basa? (Jawaban benar lebih dari satu.)',
    options: [
      'Nilai pH larutan penyangga tersebut adalah 5.',
      'Asam asetat yang bereaksi adalah 10 mmol.',
      'Natrium hidroksida yang bereaksi adalah 5 mmol.',
      'Asam asetat dan natrium hidroksida habis bereaksi.',
      'Garam CH₃COONa yang terbentuk adalah 5 mmol.'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A, C, E',
    explanation: 'Materi: Larutan Penyangga (Buffer Asam)\n• mol CH₃COOH = 100 mL × 0,1 M = 10 mmol\n• mol NaOH = 100 mL × 0,05 M = 5 mmol\n• Reaksi: CH₃COOH + NaOH -> CH₃COONa + H₂O\n• NaOH habis (5 mmol), CH₃COONa terbentuk 5 mmol, sisa CH₃COOH = 5 mmol.\n• [H⁺] = Ka × (5 / 5) = 1 × 10⁻⁵ M => pH = 5.\n\nJawaban Centang:\n- Nilai pH larutan penyangga tersebut adalah 5.\n- Natrium hidroksida yang bereaksi adalah 5 mmol.\n- Garam CH₃COONa yang terbentuk adalah 5 mmol.',
    subject: 'Kimia',
    difficulty: 'Sedang',
    bab: 'Larutan Penyangga (Buffer)',
    year: '2026'
  },
  {
    id: 'q_tka_kimia_19',
    text: 'Reaksi yang terjadi dalam suatu reaktor tertutup adalah:\n2 COF₂(g) ⇌ CO₂(g) + CF₄(g)\nDalam suatu pengujian, di dalam wadah 5 liter terdapat 1 mol COF₂ yang terurai. Setelah beberapa waktu, reaksi mencapai kesetimbangan dengan nilai tetapan kesetimbangan (Kc) pada suhu tersebut adalah 4.\n\nBanyaknya COF₂ yang terdapat dalam wadah setelah reaksi mencapai kesetimbangan adalah ....',
    options: ['1/3 mol', '1/4 mol', '1/5 mol', '2/3 mol', '2/15 mol'],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Materi: Tetapan Kesetimbangan (Kc)\nReaksi: 2 COF₂(g) ⇌ CO₂(g) + CF₄(g)\n• Mula-mula COF₂ = 1 mol dalam volume V.\n• Terurai: 2x mol COF₂ -> terbentuk x mol CO₂ dan x mol CF₄.\n• Kesetimbangan: Kc = (x · x) / (1 - 2x)² = 4 => x / (1 - 2x) = 2 => x = 2 - 4x => 5x = 2 => x = 0,4 mol.\n• Sisa COF₂ saat setimbang = 1 - 2(0,4) = 0,2 mol = 1/5 mol.\n\nJawaban: C (1/5 mol)',
    subject: 'Kimia',
    difficulty: 'Sedang',
    bab: 'Tetapan Kesetimbangan (Kc)',
    year: '2026'
  },
  {
    id: 'q_tka_kimia_20',
    text: 'Berikut adalah set percobaan yang dilakukan untuk menentukan laju suatu reaksi:\nA(aq) + B(s) → Produk\n\nPasangan set percobaan yang dapat dilakukan untuk mengetahui pengaruh suhu terhadap laju reaksi adalah ....',
    options: ['1 dan 3', '2 dan 5', '3 dan 4', '2 dan 6', '4 dan 6'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Materi: Faktor Laju Reaksi\nUntuk mengetahui pengaruh suhu, variabel suhu harus diubah (variabel bebas) sementara konsentrasi dan bentuk partikel harus tetap sama (variabel kontrol).\n• Set percobaan 1 (suhu 25°C, serbuk, HCl 0,1 M) dan set percobaan 3 (suhu 35°C, serbuk, HCl 0,1 M) memenuhi syarat ini.\n\nJawaban: A (1 dan 3)',
    subject: 'Kimia',
    difficulty: 'Mudah',
    bab: 'Faktor-Faktor Laju Reaksi',
    year: '2026'
  }
];


// Initial Learning Videos
const INITIAL_VIDEOS: LearningVideo[] = [
  {
    id: 'v1',
    title: 'Konsep Dasar Turunan Fungsi Aljabar',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder embed link
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&auto=format&fit=crop&q=60',
    description: 'Video penjelasan mendalam mengenai konsep limit, gradien garis singgung, dan rumus umum turunan fungsi aljabar matematika kelas XI/XII.',
    subject: 'Matematika Umum',
    bab: 'Turunan & Integral',
    guru: 'Drs. Rudi Hermawan, M.Pd.',
    duration: '15:24',
    views: 1450,
    createdAt: '2026-01-12T10:00:00Z'
  },
  {
    id: 'v2',
    title: 'Listrik Dinamis - Hukum Ohm & Kirchoff',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=60',
    description: 'Kupas tuntas Hukum Ohm, Hukum I & II Kirchoff, hambatan seri paralel, serta pembahasan soal listrik dinamis model UTBK.',
    subject: 'Fisika',
    bab: 'Listrik Dinamis',
    guru: 'Agus Wijaya, S.Si.',
    duration: '22:10',
    views: 890,
    createdAt: '2026-02-14T08:30:00Z'
  },
  {
    id: 'v3',
    title: 'Konfigurasi Elektron & Golongan Tabel Periodik',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=600&auto=format&fit=crop&q=60',
    description: 'Belajar konfigurasi elektron mekanika kuantum, asas Aufbau, larangan Pauli, aturan Hund, serta cara menentukan letak unsur.',
    subject: 'Kimia',
    bab: 'Struktur Atom & Periodik',
    guru: 'Dr. Linda Lestari',
    duration: '18:45',
    views: 1120,
    createdAt: '2026-03-01T14:15:00Z'
  },
  {
    id: 'v_bindo_1',
    title: 'Trik Cepat Menemukan Ide Pokok & Kalimat Efektif Bahasa Indonesia',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=60',
    description: 'Saksikan video pembahasan cara mudah mengenali ide pokok, membedakan fakta vs opini, dan memperbaiki kalimat tidak efektif.',
    subject: 'Bahasa Indonesia',
    bab: 'Kalimat Efektif & Ide Pokok',
    guru: 'Dra. Endang Rahayu, M.Hum',
    duration: '16:40',
    views: 1280,
    createdAt: '2026-07-15T08:00:00Z'
  },
  {
    id: 'v_bing_1',
    title: 'Strategies for English Reading Comprehension & Inference',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=60',
    description: 'Video tutorial on how to efficiently scan academic texts, identify implied meanings, and master complex English grammar rules.',
    subject: 'Bahasa Inggris',
    bab: 'Reading Comprehension & Inference',
    guru: 'Sarah Jenkins, M.A.',
    duration: '19:15',
    views: 1420,
    createdAt: '2026-07-16T09:30:00Z'
  },
  {
    id: 'v_indo_lanjut_1',
    title: 'Analisis Wacana Kritis & Kritik Sastra Tingkat Lanjut',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&auto=format&fit=crop&q=60',
    description: 'Bedah tuntas analisis wacana kritis, nominalisasi media, pragmatik kesantunan berbahasa, serta estetika dekonstruksi realisme magis.',
    subject: 'Bahasa Indonesia Tingkat Lanjut',
    bab: 'Analisis Wacana Kritis & Retorika',
    guru: 'Dr. Retno Wulandari, M.Hum.',
    duration: '21:10',
    views: 980,
    createdAt: '2026-07-20T10:00:00Z'
  },
  {
    id: 'v_inggris_lanjut_1',
    title: 'Mastering Advanced Inversion, Conditionals & Academic Stance',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=60',
    description: 'Deep dive into negative adverb fronting, mandative subjunctives, epistemic modality, and academic rhetorical syntheses for university readiness.',
    subject: 'Bahasa Inggris Tingkat Lanjut',
    bab: 'Grammar Inversion & Epistemic Modality',
    guru: 'Prof. Alexander Wright, Ph.D.',
    duration: '24:05',
    views: 1150,
    createdAt: '2026-07-20T10:30:00Z'
  }
];

// Initial Tryouts
const INITIAL_TRYOUTS: TryOut[] = [
  {
    id: 'to-anbk-mtk-wajib-2026',
    name: 'Try Out Simulasi ANBK / TKA: Matematika Wajib (20 Soal IRT)',
    duration: 45,
    passingGrade: 500,
    questionCount: 20,
    subject: 'Matematika Wajib',
    category: 'TKA',
    randomizeQuestions: false,
    randomizeOptions: false,
    startDate: '2026-07-20',
    endDate: '2026-12-31',
    solvedCount: 1250
  },
  {
    id: 'to-tka-mtk-lanjut-2026',
    name: 'Try Out CBT TKA: Matematika Tingkat Lanjut (20 Soal IRT)',
    duration: 45,
    passingGrade: 500,
    questionCount: 20,
    subject: 'Matematika Tingkat Lanjut',
    category: 'TKA',
    randomizeQuestions: false,
    randomizeOptions: false,
    startDate: '2026-07-20',
    endDate: '2026-12-31',
    solvedCount: 680
  },
  {
    id: 'to-tka-bindo-2026',
    name: 'Try Out CBT TKA: Bahasa Indonesia (20 Soal IRT)',
    duration: 45,
    passingGrade: 500,
    questionCount: 20,
    subject: 'Bahasa Indonesia',
    category: 'TKA',
    randomizeQuestions: false,
    randomizeOptions: false,
    startDate: '2026-07-20',
    endDate: '2026-12-31',
    solvedCount: 940
  },
  {
    id: 'to-tka-bindo-lanjut-2026',
    name: 'Try Out CBT TKA: Bahasa Indonesia Tingkat Lanjut (10 Soal Analisis Wacana & Sastra)',
    duration: 45,
    passingGrade: 500,
    questionCount: 10,
    subject: 'Bahasa Indonesia Tingkat Lanjut',
    category: 'TKA',
    randomizeQuestions: false,
    randomizeOptions: false,
    startDate: '2026-07-20',
    endDate: '2026-12-31',
    solvedCount: 720
  },
  {
    id: 'to-tka-bing-2026',
    name: 'Try Out CBT TKA: Bahasa Inggris (20 Soal IRT)',
    duration: 45,
    passingGrade: 500,
    questionCount: 20,
    subject: 'Bahasa Inggris',
    category: 'TKA',
    randomizeQuestions: false,
    randomizeOptions: false,
    startDate: '2026-07-20',
    endDate: '2026-12-31',
    solvedCount: 880
  },
  {
    id: 'to-tka-bing-lanjut-2026',
    name: 'Try Out CBT TKA: Bahasa Inggris Tingkat Lanjut (20 Soal IRT)',
    duration: 45,
    passingGrade: 500,
    questionCount: 20,
    subject: 'Bahasa Inggris Tingkat Lanjut',
    category: 'TKA',
    randomizeQuestions: false,
    randomizeOptions: false,
    startDate: '2026-07-20',
    endDate: '2026-12-31',
    solvedCount: 650
  },
  {
    id: 'to-tka-fisika-1-2026',
    name: 'Try Out CBT TKA: Fisika SMA (20 Soal IRT & Gambar Lengkap)',
    duration: 45,
    passingGrade: 600,
    questionCount: 20,
    subject: 'Fisika',
    category: 'TKA',
    randomizeQuestions: false,
    randomizeOptions: false,
    startDate: '2026-07-20',
    endDate: '2026-12-31',
    solvedCount: 890
  },
  {
    id: 'to-tka-kimia-1-2026',
    name: 'Try Out Kimia 1: Bank Soal & Try Out Bab Kimia TKA SMA (20 Soal)',
    duration: 45,
    passingGrade: 600,
    questionCount: 20,
    subject: 'Kimia',
    category: 'TKA',
    randomizeQuestions: false,
    randomizeOptions: false,
    startDate: '2026-07-20',
    endDate: '2026-12-31',
    solvedCount: 780
  },
  {
    id: 'to-tka-biologi-1-2026',
    name: 'Try Out CBT TKA: Biologi (20 Soal IRT)',
    duration: 45,
    passingGrade: 600,
    questionCount: 20,
    subject: 'Biologi',
    category: 'TKA',
    randomizeQuestions: false,
    randomizeOptions: false,
    startDate: '2026-07-20',
    endDate: '2026-12-31',
    solvedCount: 710
  },
  {
    id: 'to-tka-sosiologi-1-2026',
    name: 'Try Out CBT TKA: Sosiologi SMA (20 Soal IRT & Analisis Wacana)',
    duration: 45,
    passingGrade: 600,
    questionCount: 20,
    subject: 'Sosiologi',
    category: 'TKA',
    randomizeQuestions: false,
    randomizeOptions: false,
    startDate: '2026-07-20',
    endDate: '2026-12-31',
    solvedCount: 820
  },
  {
    id: 'to-tka-ekonomi-1-2026',
    name: 'Try Out CBT TKA: Ekonomi SMA (20 Soal Pusmendik & Analisis Makro-Mikro)',
    duration: 45,
    passingGrade: 600,
    questionCount: 20,
    subject: 'Ekonomi',
    category: 'TKA',
    randomizeQuestions: false,
    randomizeOptions: false,
    startDate: '2026-07-20',
    endDate: '2026-12-31',
    solvedCount: 780
  },
  {
    id: 'to-tka-ppkn-2026',
    name: 'Try Out CBT TKA: PPKn SMA (10 Soal Analisis Kebangsaan, Konstitusi & Dinamika Demokrasi)',
    duration: 30,
    passingGrade: 650,
    questionCount: 10,
    subject: 'PPKn (PKn)',
    category: 'TKA',
    randomizeQuestions: false,
    randomizeOptions: false,
    startDate: '2026-07-20',
    endDate: '2026-12-31',
    solvedCount: 420
  },
  {
    id: 'to-tka-geografi-2026',
    name: 'Try Out CBT TKA: Geografi SMA (10 Soal Analisis Spasial, Litosfer, Penginderaan Jauh & SIG)',
    duration: 30,
    passingGrade: 650,
    questionCount: 10,
    subject: 'Geografi',
    category: 'TKA',
    randomizeQuestions: false,
    randomizeOptions: false,
    startDate: '2026-07-20',
    endDate: '2026-12-31',
    solvedCount: 390
  },
  {
    id: 'to-tka-sejarah-2026',
    name: 'Try Out CBT TKA: Sejarah SMA (10 Soal Analisis Peradaban & Perjuangan Bangsa)',
    duration: 30,
    passingGrade: 650,
    questionCount: 10,
    subject: 'Sejarah',
    category: 'TKA',
    randomizeQuestions: false,
    randomizeOptions: false,
    startDate: '2026-07-20',
    endDate: '2026-12-31',
    solvedCount: 380
  },
  ...INITIAL_UTBK_TRYOUTS
];

// Initial Announcements
const INITIAL_ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'a1',
    title: 'Pendaftaran Try Out Akbar Nasional TKA Juli 2026 Telah Dibuka!',
    body: 'Ayo persiapkan dirimu mengikuti CBT Try Out Akbar serentak seluruh Indonesia yang akan diselenggarakan tanggal 25 Juli 2026. Raih sertifikat kelulusan resmi dan ranking nasional gratis!',
    date: '18 Juli 2026'
  },
  {
    id: 'a2',
    title: 'Fitur AI Tutor Baru diluncurkan!',
    body: 'Sekarang kamu bisa berkonsultasi langsung dengan AI Tutor cerdas kami untuk memahami pembahasan soal yang sulit. Cukup klik tombol AI Tanya di samping setiap pembahasan soal!',
    date: '17 Juli 2026'
  }
];

// Initial achievements
const INITIAL_ACHIEVEMENTS: Achievement[] = [
  { id: 'ac1', title: 'Pejuang Pertama', description: 'Mendaftar akun di TKA SMA Indonesia', xp: 50, icon: '🔥', unlocked: true },
  { id: 'ac2', title: 'CBT Warrior', description: 'Menyelesaikan simulasi CBT pertama kali', xp: 100, icon: '🛡️', unlocked: false },
  { id: 'ac3', title: 'Jenius Rapor', description: 'Menginput semua nilai rapor Semester 1 sampai 5', xp: 100, icon: '📈', unlocked: false },
  { id: 'ac4', title: 'Murid Rajin', description: 'Mencapai streak harian belajar 3 hari beruntun', xp: 150, icon: '📅', unlocked: false },
  { id: 'ac5', title: 'Lulus Passing Grade', description: 'Mendapat nilai tryout melampaui passing grade 650', xp: 200, icon: '🎓', unlocked: false },
  { id: 'ac6', title: 'Premium Scholar', description: 'Mengaktifkan status Premium VIP', xp: 300, icon: '👑', unlocked: false }
];

export class FirestoreSimulator {
  // Static key helper
  private static getKey(collection: string): string {
    return `tka_indo_${collection}`;
  }

  // Load complete state
  public static getCollection<T>(collectionName: string, defaults: T[]): T[] {
    const data = localStorage.getItem(this.getKey(collectionName));
    if (!data) {
      localStorage.setItem(this.getKey(collectionName), JSON.stringify(defaults));
      return defaults;
    }
    const parsed = JSON.parse(data);
    if (Array.isArray(parsed) && Array.isArray(defaults) && defaults.length > 0 && typeof defaults[0] === 'object' && defaults[0] !== null && 'id' in defaults[0]) {
      let updated = false;
      for (const defItem of defaults as any[]) {
        if (!parsed.some((p: any) => p && p.id === defItem.id)) {
          parsed.push(defItem);
          updated = true;
        }
      }
      if (updated) {
        localStorage.setItem(this.getKey(collectionName), JSON.stringify(parsed));
      }
    }
    return parsed;
  }

  // Save complete state
  public static saveCollection<T>(collectionName: string, data: T[]): void {
    localStorage.setItem(this.getKey(collectionName), JSON.stringify(data));
  }

  // Authentication Simulate
  public static getCurrentUser(): UserProfile | null {
    const user = localStorage.getItem('tka_current_user');
    return user ? JSON.parse(user) : null;
  }

  public static login(email: string, role: 'Admin' | 'Guru' | 'Siswa' = 'Siswa', password?: string): UserProfile {
    const normalizedEmail = email.trim().toLowerCase();
    
    // Check Admin/Guru restriction
    if (role === 'Admin' || role === 'Guru') {
      if (normalizedEmail === 'kamallutfi990@gmail.com') {
        if (password !== '12345678') {
          throw new Error('Kata sandi salah untuk akun Utama.');
        }
      } else {
        // Check designated users
        const designatedList = this.getCollection<{email: string; password: string; role: 'Admin' | 'Guru'}>('designated_users', []);
        const designatedUser = designatedList.find(u => u.email.toLowerCase() === normalizedEmail && u.role === role);
        
        if (!designatedUser) {
          throw new Error('Akses Ditolak. Email Anda belum ditunjuk/diizinkan untuk role ' + role + '.');
        }
        
        if (password !== designatedUser.password) {
          throw new Error('Kata sandi salah untuk akun yang ditunjuk.');
        }
      }
    }

    const users = this.getCollection<UserProfile>('users', []);
    let user = users.find(u => u.email.toLowerCase() === normalizedEmail);

    if (!user) {
      // Auto-register
      const name = normalizedEmail.split('@')[0];
      user = {
        uid: `u_${Date.now()}`,
        email: email,
        displayName: name.charAt(0).toUpperCase() + name.slice(1),
        role: role,
        schoolName: 'SMA Negeri 1 Jakarta',
        targetPTN: '',
        targetProdi: '',
        xp: 100,
        level: 1,
        streak: 1,
        isPremium: role === 'Admin' || role === 'Guru',
        avatarUrl: `https://api.dicebear.com/7.x/adventurer/svg?seed=${name}`,
        createdAt: new Date().toISOString()
      };
      users.push(user);
      this.saveCollection('users', users);
    } else {
      // Ensure role is correct if logging in as Admin/Guru
      if (role === 'Admin' || role === 'Guru') {
        user.role = role;
      }
      user.streak = (user.streak || 1) + 1;
      this.saveCollection('users', users.map(u => u.uid === user!.uid ? user! : u));
    }

    localStorage.setItem('tka_current_user', JSON.stringify(user));
    return user;
  }

  public static validateRegistration(email: string, role: 'Admin' | 'Guru' | 'Siswa', password?: string): void {
    const normalizedEmail = email.trim().toLowerCase();
    if (role === 'Admin' || role === 'Guru') {
      if (normalizedEmail === 'kamallutfi990@gmail.com') {
        if (password !== '12345678') {
          throw new Error('Pendaftaran ditolak. Sandi salah.');
        }
      } else {
        const designatedList = this.getCollection<{email: string; password: string; role: 'Admin' | 'Guru'}>('designated_users', []);
        const designatedUser = designatedList.find(u => u.email.toLowerCase() === normalizedEmail && u.role === role);
        
        if (!designatedUser) {
          throw new Error('Akses Pendaftaran Ditolak. Email Anda belum ditunjuk/diizinkan.');
        }
        
        if (password !== designatedUser.password) {
          throw new Error('Pendaftaran ditolak. Kata sandi harus sesuai dengan sandi yang ditunjuk.');
        }
      }
    }
  }

  public static register(email: string, displayName: string, role: 'Siswa' | 'Guru' | 'Admin' = 'Siswa', password?: string): UserProfile {
    this.validateRegistration(email, role, password);
    
    const users = this.getCollection<UserProfile>('users', []);
    
    const user: UserProfile = {
      uid: `u_${Date.now()}`,
      email: email,
      displayName: displayName,
      role: role,
      schoolName: 'SMA Negeri 8 Jakarta',
      targetPTN: '',
      targetProdi: '',
      xp: 150,
      level: 1,
      streak: 1,
      isPremium: role === 'Admin' || role === 'Guru',
      avatarUrl: `https://api.dicebear.com/7.x/adventurer/svg?seed=${displayName}`,
      createdAt: new Date().toISOString()
    };
    
    users.push(user);
    this.saveCollection('users', users);
    localStorage.setItem('tka_current_user', JSON.stringify(user));
    return user;
  }

  public static getDesignatedUsers(): { email: string; password: string; role: 'Admin' | 'Guru'; appointedAt: string }[] {
    return this.getCollection<{ email: string; password: string; role: 'Admin' | 'Guru'; appointedAt: string }>('designated_users', []);
  }

  public static addDesignatedUser(email: string, password: string, role: 'Admin' | 'Guru'): void {
    const list = this.getDesignatedUsers();
    const normalizedEmail = email.trim().toLowerCase();
    
    if (normalizedEmail === 'kamallutfi990@gmail.com') {
      throw new Error('Email ini adalah akun Utama dan tidak perlu ditunjuk lagi.');
    }

    const exists = list.some(u => u.email.toLowerCase() === normalizedEmail && u.role === role);
    if (exists) {
      throw new Error(`Email ini sudah ditunjuk sebagai ${role}.`);
    }

    list.push({
      email: normalizedEmail,
      password,
      role,
      appointedAt: new Date().toISOString()
    });
    this.saveCollection('designated_users', list);
  }

  public static removeDesignatedUser(email: string, role: 'Admin' | 'Guru'): void {
    const list = this.getDesignatedUsers();
    const normalizedEmail = email.trim().toLowerCase();
    const updated = list.filter(u => !(u.email.toLowerCase() === normalizedEmail && u.role === role));
    this.saveCollection('designated_users', updated);
  }

  public static logout(): void {
    localStorage.removeItem('tka_current_user');
  }

  public static updateUserProfile(profile: Partial<UserProfile>): UserProfile {
    const current = this.getCurrentUser();
    if (!current) throw new Error('Not logged in');

    const updated = { ...current, ...profile };
    localStorage.setItem('tka_current_user', JSON.stringify(updated));

    const users = this.getCollection<UserProfile>('users', []);
    this.saveCollection('users', users.map(u => u.uid === updated.uid ? updated : u));
    return updated;
  }

  // XP & Gamification Add helper
  public static addXP(amount: number): { added: number; levelUp: boolean; currentLevel: number; currentXP: number } {
    const user = this.getCurrentUser();
    if (!user) return { added: 0, levelUp: false, currentLevel: 1, currentXP: 0 };

    const newXP = (user.xp || 0) + amount;
    const newLevel = Math.floor(Math.sqrt(newXP / 100)) + 1;
    const levelUp = newLevel > (user.level || 1);

    const updated = this.updateUserProfile({
      xp: newXP,
      level: newLevel
    });

    return {
      added: amount,
      levelUp,
      currentLevel: updated.level,
      currentXP: updated.xp
    };
  }

  // Report Card CRUD (userId is optional, fallback to current user)
  public static getReportCard(userId?: string): ReportCard {
    const user = this.getCurrentUser();
    const uid = userId || (user ? user.uid : 'default_uid');
    const reports = this.getCollection<ReportCard>('report_cards', []);
    let report = reports.find(r => r.userId === uid);
    
    if (!report) {
      // Return fresh blank report card structure
      const blankGrades: { [sem: string]: { [subj: string]: number } } = {};
      const semesters = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6'];
      const subjects = [
        'Matematika', 'Bahasa Indonesia', 'Bahasa Inggris', 'Fisika', 'Kimia', 'Biologi',
        'Ekonomi', 'Geografi', 'Sosiologi', 'Sejarah', 'Informatika', 'Agama', 'PKn', 'Seni', 'PJOK'
      ];
      
      semesters.forEach(sem => {
        blankGrades[sem] = {};
        subjects.forEach(sub => {
          blankGrades[sem][sub] = 0; // default zero
        });
      });

      report = {
        userId: uid,
        grades: blankGrades,
        average: 0,
        updatedAt: new Date().toISOString()
      };
      
      reports.push(report);
      this.saveCollection('report_cards', reports);
    }
    return report;
  }

  // Getters for questions and predictions
  public static getQuestions(): Question[] {
    return this.getCollection<Question>('questions', INITIAL_QUESTIONS);
  }

  public static getPredictions(): UniversityPrediction[] {
    const user = this.getCurrentUser();
    if (!user) return [];
    const list = this.getCollection<UniversityPrediction>('predictions', []);
    return list.filter(p => p.userId === user.uid);
  }

  public static addCustomQuestion(q: Question): void {
    const questions = this.getQuestions();
    questions.push(q);
    this.saveCollection('questions', questions);
  }

  public static deleteCustomQuestion(qId: string): void {
    const questions = this.getQuestions();
    this.saveCollection('questions', questions.filter(q => q.id !== qId));
  }

  public static updateQuestionQuizUrl(qId: string, geminiQuizUrl: string): void {
    const questions = this.getQuestions();
    const idx = questions.findIndex(q => q.id === qId);
    if (idx !== -1) {
      questions[idx].geminiQuizUrl = geminiQuizUrl || undefined;
      this.saveCollection('questions', questions);
    }
  }

  public static addCustomTryOut(to: TryOut): void {
    const exams = this.getCollection<TryOut>('exams', INITIAL_TRYOUTS);
    exams.unshift(to);
    this.saveCollection('exams', exams);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('tka_tryouts_updated'));
    }
  }

  public static deleteCustomTryOut(toId: string): void {
    const exams = this.getCollection<TryOut>('exams', INITIAL_TRYOUTS);
    this.saveCollection('exams', exams.filter(e => e.id !== toId));
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('tka_tryouts_updated'));
    }
  }

  public static saveReportCard(report: ReportCard): ReportCard {
    // Calculate total average across all semester grades that are > 0
    let totalScore = 0;
    let count = 0;
    
    Object.keys(report.grades).forEach(sem => {
      Object.keys(report.grades[sem]).forEach(sub => {
        const val = report.grades[sem][sub];
        if (val > 0) {
          totalScore += val;
          count++;
        }
      });
    });

    report.average = count > 0 ? parseFloat((totalScore / count).toFixed(1)) : 0;
    report.updatedAt = new Date().toISOString();

    const reports = this.getCollection<ReportCard>('report_cards', []);
    const filtered = reports.filter(r => r.userId !== report.userId);
    filtered.push(report);
    this.saveCollection('report_cards', filtered);

    // Unlock achievement for report card input
    if (count >= 10) {
      this.unlockAchievement('ac3');
    }

    return report;
  }

  // University Predictions Algorithm (Calculates percentage based on Tryouts and Report Cards)
  public static calculatePrediction(
    universityId: string, 
    programId: string, 
    pathway: 'SNBP' | 'SNBT'
  ): UniversityPrediction {
    const user = this.getCurrentUser();
    if (!user) throw new Error('Not logged in');

    const program = MOCK_STUDY_PROGRAMS.find(p => p.id === programId || p.name === programId);
    const uni = MOCK_UNIVERSITIES.find(u => u.id === universityId || u.acronym === universityId || u.name === universityId);
    if (!program || !uni) throw new Error('Universitas atau Program Studi tidak ditemukan');

    // Fetch dependencies
    const reportCard = this.getReportCard(user.uid);
    const scores = this.getCollection<ExamScore>('scores', []);
    const userScores = scores.filter(s => s.userId === user.uid);

    let baselineScore = 0;

    if (pathway === 'SNBP') {
      // SNBP weights report card grades highly (focusing on semester 1-5)
      // High score on Matematika + Bahasa Indonesia + Inggris + major relevant subjects
      baselineScore = reportCard.average || 75; // fallbacks to 75 if empty
    } else {
      // SNBT relies heavily on Tryout scores
      if (userScores.length > 0) {
        // Average of latest tryout scores
        const total = userScores.reduce((acc, curr) => acc + curr.score, 0);
        baselineScore = total / userScores.length / 10; // scale out of 100
      } else {
        // Assume default target of TKA (e.g. 500 out of 1000 = 50 baseline)
        baselineScore = 55;
      }
    }

    // Convert baselineScore to TKA standard (e.g. 400 - 800)
    const normalizedStudentScore = pathway === 'SNBP' 
      ? (baselineScore * 8) // e.g. 85 average -> 680 TKA style score
      : (baselineScore * 10); // e.g. 65 baseline -> 650 TKA style score

    const diff = normalizedStudentScore - program.passingGrade;
    let probability: 'Sangat Tinggi' | 'Tinggi' | 'Sedang' | 'Rendah' | 'Sangat Rendah' = 'Sedang';
    let probabilityScore = 50;
    let recommendation = '';

    if (diff >= 50) {
      probability = 'Sangat Tinggi';
      probabilityScore = Math.min(99, 85 + Math.round((diff - 50) / 2));
      recommendation = `Peluang emas! Nilai kamu (${Math.round(normalizedStudentScore)}) berada jauh di atas passing grade program studi ${program.name} di ${uni.name} (${program.passingGrade}). Jadikan ini pilihan utama (Pilihan 1). Tetap jaga konsistensi belajar kamu!`;
    } else if (diff >= 10) {
      probability = 'Tinggi';
      probabilityScore = 70 + Math.round(diff);
      recommendation = `Peluang sangat baik! Nilai estimasimu (${Math.round(normalizedStudentScore)}) sudah melampaui passing grade target (${program.passingGrade}). Program studi ini relatif AMAN untuk kamu ambil.`;
    } else if (diff >= -20) {
      probability = 'Sedang';
      probabilityScore = 45 + Math.round(diff);
      recommendation = `Peluang cukup bersaing. Nilai kamu (${Math.round(normalizedStudentScore)}) mepet dengan batas passing grade (${program.passingGrade}). Masih sangat bisa dikejar dengan meningkatkan latihan soal CBT dan fokus pada kelemahan bab pelajaran.`;
    } else if (diff >= -60) {
      probability = 'Rendah';
      probabilityScore = 25 + Math.round((diff + 60) / 2);
      recommendation = `Peluang kompetitif/ketat. Nilai kamu (${Math.round(normalizedStudentScore)}) masih di bawah rata-rata kelulusan program studi ini (${program.passingGrade}). Disarankan jadikan ini sebagai pilihan cadangan dan segera kebut tryout peningkatan nilai!`;
    } else {
      probability = 'Sangat Rendah';
      probabilityScore = Math.max(5, 10 + Math.round((diff + 100) / 3));
      recommendation = `Sangat Kompetitif. Jurusan ${program.name} di ${uni.name} memiliki daya saing tinggi. Sangat direkomendasikan mencari program studi alternatif sebagai pilihan aman, atau secara radikal mendongkrak skor belajarmu bersama AI Tutor.`;
    }

    const predictions = this.getCollection<UniversityPrediction>('predictions', []);
    const newPrediction: UniversityPrediction = {
      id: `pred_${Date.now()}`,
      userId: user.uid,
      university: uni.name,
      studyProgram: program.name,
      pathway,
      probability,
      probabilityScore,
      recommendation,
      createdAt: new Date().toISOString()
    };

    predictions.push(newPrediction);
    this.saveCollection('predictions', predictions);
    return newPrediction;
  }

  // CBT Exam Submission & Evaluation
  public static submitExam(examId: string, answers: { [qId: string]: any }, durationSpentSec: number): ExamScore {
    const user = this.getCurrentUser();
    if (!user) throw new Error('Not logged in');

    const exams = this.getCollection<TryOut>('exams', INITIAL_TRYOUTS);
    const exam = exams.find(e => e.id === examId);
    if (!exam) throw new Error('Exam not found');

    const questions = this.getCollection<Question>('questions', INITIAL_QUESTIONS);
    
    // Filter questions relevant to the TryOut subject or pad to 20 questions
    const filtered = questions.filter(q => {
      if (examId === 'to-tka-bindo-2026' || exam.subject === 'Bahasa Indonesia') return (q.subject === 'Bahasa Indonesia' && !q.subject.includes('Lanjut')) || q.id.startsWith('q_tka_bindo_');
      if (examId === 'to-tka-bing-2026' || exam.subject === 'Bahasa Inggris') return (q.subject === 'Bahasa Inggris' && !q.subject.includes('Lanjut')) || q.id.startsWith('q_tka_bing_');
      if (examId === 'to-anbk-mtk-wajib-2026' || exam.subject === 'Matematika Wajib') return q.subject === 'Matematika Wajib' || q.id.startsWith('q_anbk_mtkw_');
      if (examId === 'to-tka-mtk-lanjut-2026' || exam.subject === 'Matematika Tingkat Lanjut') return q.subject === 'Matematika Tingkat Lanjut' || q.id.startsWith('q_mtk_lanjut_');
      if (examId === 'to1') return ['Fisika', 'Kimia', 'Biologi', 'Matematika Lanjut', 'Matematika Umum'].includes(q.subject);
      if (examId === 'to2') return ['Ekonomi', 'Geografi', 'Sosiologi', 'Sejarah', 'Literasi Bahasa'].includes(q.subject);
      if (examId === 'to3') return q.subject === 'Matematika Umum' || q.subject === 'Matematika Lanjut' || q.subject.includes('Kuantitatif');
      if (examId === 'to4') return q.subject.includes('Penalaran') || q.subject.includes('TPS') || q.subject.includes('Literasi');
      if (examId === 'to5') return ['Fisika', 'Kimia'].includes(q.subject);
      if (examId === 'to6') return q.subject.includes('Literasi') || q.subject.includes('Bahasa');
      if (examId === 'to7') return q.subject.includes('Kuantitatif') || ['Ekonomi', 'Geografi', 'Sosiologi', 'Sejarah'].includes(q.subject);
      if (examId === 'to8') return q.subject.includes('TPS') || q.subject.includes('Matematika');

      if (!exam.subject || exam.subject.toLowerCase().includes('semua') || exam.subject.toLowerCase().includes('campuran') || exam.subject.toLowerCase().includes('umum') || exam.subject.toLowerCase().includes('utbk') || exam.subject.toLowerCase().includes('tka')) {
        return true;
      }
      return q.subject === exam.subject || exam.subject.includes(q.subject) || q.subject.includes(exam.subject);
    });

    let examQuestions = [...filtered];
    if (examQuestions.length < 20) {
      const isSpecificSubject = exam.subject && !['semua', 'campuran', 'umum', 'utbk', 'tka'].some(k => exam.subject.toLowerCase().includes(k));
      const remaining = questions.filter(q => {
        if (examQuestions.some(eq => eq.id === q.id)) return false;
        if (isSpecificSubject) {
          return q.subject === exam.subject || (exam.subject && (q.subject.includes(exam.subject) || exam.subject.includes(q.subject)));
        }
        return true;
      });
      examQuestions = [...examQuestions, ...remaining];
    }
    examQuestions = examQuestions.slice(0, 20);

    let correctCount = 0;
    let wrongCount = 0;
    
    const subjectBreakdown: { [subj: string]: { correct: number; total: number } } = {};
    const correctTopicsSet = new Set<string>();
    const wrongTopicsSet = new Set<string>();

    examQuestions.forEach(q => {
      if (!subjectBreakdown[q.subject]) {
        subjectBreakdown[q.subject] = { correct: 0, total: 0 };
      }
      subjectBreakdown[q.subject].total++;

      const topicName = q.bab || q.subject || 'Konsep Umum';

      const selected = answers[q.id];
      if (selected !== undefined) {
        let isCorrect = false;
        if (q.questionType === 'checkboxes') {
          const correctIndices = q.correctAnswerIndices || [q.correctAnswerIndex];
          if (Array.isArray(selected)) {
            isCorrect = selected.length === correctIndices.length &&
              selected.every(val => correctIndices.includes(val)) &&
              correctIndices.every(val => selected.includes(val));
          }
        } else {
          isCorrect = selected === q.correctAnswerIndex;
        }

        if (isCorrect) {
          correctCount++;
          subjectBreakdown[q.subject].correct++;
          correctTopicsSet.add(topicName);
        } else {
          wrongCount++;
          wrongTopicsSet.add(topicName);
        }
      } else {
        wrongCount++; // unanswered is marked wrong
        wrongTopicsSet.add(topicName);
      }
    });

    const strongSubjects = Array.from(correctTopicsSet);
    const weakSubjects = Array.from(wrongTopicsSet);

    const totalQuestions = examQuestions.length || 1;
    const percentage = parseFloat(((correctCount / totalQuestions) * 100).toFixed(1));
    
    // Scale standard IRT score between 200 - 800
    const rawScore = 200 + Math.round((correctCount / totalQuestions) * 600);
    const passed = rawScore >= exam.passingGrade;

    const scoreId = `score_${Date.now()}`;
    const newScore: ExamScore = {
      id: scoreId,
      examId: exam.id,
      examName: exam.name,
      userId: user.uid,
      userName: user.displayName || user.email || 'Siswa TKA',
      score: rawScore,
      correctCount,
      wrongCount,
      totalQuestions,
      subject: exam.subject,
      passed,
      createdAt: new Date().toISOString(),
      strongSubjects,
      weakSubjects
    };

    // Save score
    const scores = this.getCollection<ExamScore>('scores', INITIAL_SCORES);
    scores.push(newScore);
    this.saveCollection('scores', scores);
    try {
      window.dispatchEvent(new CustomEvent('tka_scores_updated'));
    } catch (e) {
      // Ignore if server orSSR
    }

    // Give Gamification XP
    this.addXP(correctCount * 15 + 50); // 15 XP per correct, 50 XP participation

    // Trigger Achievements
    this.unlockAchievement('ac2');
    if (passed) {
      this.unlockAchievement('ac5');
    }

    // Generate simulated Certificate if passed and high grade
    if (passed && rawScore >= 650) {
      this.generateCertificate(exam.id, exam.name);
    }

    return newScore;
  }

  // Certificates generator
  public static generateCertificate(examId: string, examName: string): any {
    const user = this.getCurrentUser();
    if (!user) return null;

    const certs = this.getCollection<any>('certificates', []);
    const exists = certs.find((c: any) => c.examId === examId && c.userId === user.uid);
    if (exists) return exists;

    const certNo = `CERT/TKA-SMA/${new Date().getFullYear()}/${Math.floor(100000 + Math.random() * 90000)}`;
    const newCert = {
      id: `cert_${Date.now()}`,
      userId: user.uid,
      userName: user.displayName,
      examId,
      examName,
      certificateNumber: certNo,
      qrCode: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${certNo}`,
      createdAt: new Date().toISOString()
    };

    certs.push(newCert);
    this.saveCollection('certificates', certs);
    return newCert;
  }

  // Achievement unlocker
  public static unlockAchievement(id: string): Achievement | null {
    const user = this.getCurrentUser();
    if (!user) return null;

    const achievements = this.getCollection<Achievement>('achievements', INITIAL_ACHIEVEMENTS);
    const item = achievements.find(a => a.id === id);
    if (item && !item.unlocked) {
      item.unlocked = true;
      this.saveCollection('achievements', achievements);
      this.addXP(item.xp);
      
      // Create notification
      this.addNotification(`🏆 Achievement Terbuka!`, `Selamat! Kamu membuka lencana '${item.title}' dan mendapatkan +${item.xp} XP.`);
      return item;
    }
    return null;
  }

  // Notifications
  public static addNotification(title: string, body: string): void {
    const user = this.getCurrentUser();
    if (!user) return;

    const notifications = this.getCollection<any>('notifications', []);
    notifications.unshift({
      id: `notif_${Date.now()}`,
      userId: user.uid,
      title,
      body,
      read: false,
      createdAt: new Date().toISOString()
    });
    this.saveCollection('notifications', notifications);
  }

  // Payments / Packages Activation
  public static processPayment(packageName: string, amount: number, method: string): Payment {
    const user = this.getCurrentUser();
    if (!user) throw new Error('Not logged in');

    const payments = this.getCollection<Payment>('payments', []);
    const newPayment: Payment = {
      id: `pay_${Date.now()}`,
      userId: user.uid,
      amount,
      packageName,
      method,
      status: 'success', // Auto success for premium simulation
      createdAt: new Date().toISOString()
    };

    payments.push(newPayment);
    this.saveCollection('payments', payments);

    // Upgrade User Status to Premium!
    this.updateUserProfile({ isPremium: true });
    
    // Unlock premium achievement
    this.unlockAchievement('ac6');
    this.addNotification('👑 Paket Premium Aktif!', `Selamat, akun Anda telah diupgrade ke Premium VIP. Semua bank soal CBT dan fitur AI Tutor sekarang tidak terbatas!`);

    return newPayment;
  }
}

export interface LearningMaterial {
  id: string;
  title: string;
  subject: string;
  bab: string;
  description: string;
  pdfName?: string;
  pdfUrl?: string;
  videoName?: string;
  videoUrl?: string;
  youtubeUrl?: string;
  quizUrl?: string;
  gFormUrl?: string;
  htmlContent?: string;
  createdAt: string;
  guruName?: string;
}

export interface AiKnowledgeItem {
  id: string;
  title: string;
  subject: string;
  bab?: string;
  contentType: 'markdown' | 'pdf' | 'video' | 'youtube' | 'web';
  markdownContent?: string;
  pdfName?: string;
  pdfUrl?: string;
  videoName?: string;
  videoUrl?: string;
  youtubeUrl?: string;
  webUrl?: string;
  teacherNote?: string;
  createdAt: string;
  authorName: string;
  authorRole: 'Guru' | 'Admin';
}

const INITIAL_MATERIALS: LearningMaterial[] = [
  {
    id: 'm_anbk_mtk_wajib',
    title: 'Modul & Pembahasan Lengkap Matematika Wajib ANBK / TKA 2026',
    subject: 'Matematika Wajib',
    bab: 'Pembahasan Simulasi 20 Soal IRT',
    description: 'Modul digital interaktif dan pembahasan lengkap 20 soal Matematika Wajib format CBT / IRT dengan formula matematis dan penjelasan konseptual.',
    pdfName: 'Pembahasan_TKA_Matematika_Wajib_2026.pdf',
    pdfUrl: '#',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    guruName: 'Dr. Hendra Gunawan, M.Si.',
    htmlContent: PEMBAHASAN_TKA_MATEMATIKA_WAJIB_HTML,
    createdAt: '2026-07-20T08:00:00Z'
  },
  {
    id: 'm_tka_mtk_lanjut',
    title: 'Modul & Pembahasan Lengkap Matematika Tingkat Lanjut TKA 2026',
    subject: 'Matematika Tingkat Lanjut',
    bab: 'Pembahasan Simulasi 20 Soal IRT',
    description: 'Modul digital interaktif dan pembahasan lengkap 20 soal Matematika Tingkat Lanjut (Kalkulus, Polinomial, Matriks, Vektor) berstandar TKA / Pusmendik.',
    pdfName: 'Pembahasan_TKA_Matematika_Lanjut_2026.pdf',
    pdfUrl: '#',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    guruName: 'Prof. Bambang Supeno, Ph.D.',
    htmlContent: PEMBAHASAN_TKA_MATEMATIKA_LANJUT_HTML,
    createdAt: '2026-07-20T08:30:00Z'
  },
  {
    id: 'm_tka_bindo',
    title: 'Modul & Pembahasan Lengkap Bahasa Indonesia TKA 2026',
    subject: 'Bahasa Indonesia',
    bab: 'Literasi Membaca, Cerpen & PUEBI (20 Soal)',
    description: 'Modul digital interaktif dan pembahasan lengkap 20 soal Bahasa Indonesia mencakup teks argumentasi, eksplanasi, unsur intrinsik sastra, dan kaidah kebahasaan PUEBI.',
    pdfName: 'Pembahasan_TKA_Bahasa_Indonesia_2026.pdf',
    pdfUrl: '#',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    guruName: 'Dra. Sri Wahyuni, M.Pd.',
    htmlContent: PEMBAHASAN_TKA_BAHASA_INDONESIA_HTML,
    createdAt: '2026-07-20T09:00:00Z'
  },
  {
    id: 'm_tka_bing',
    title: 'Modul & Pembahasan Lengkap Bahasa Inggris TKA 2026',
    subject: 'Bahasa Inggris',
    bab: 'Reading Comprehension, Narrative & Grammar (20 Soal)',
    description: 'Modul digital interaktif dan pembahasan mendalam 20 soal Bahasa Inggris mencakup Reading Comprehension, Narrative Legend, Infographic Guide, Recount Text, dan Argumentative Essay.',
    pdfName: 'Pembahasan_TKA_Bahasa_Inggris_2026.pdf',
    pdfUrl: '#',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    guruName: 'Sarah Jenkins, M.A.',
    htmlContent: PEMBAHASAN_TKA_BAHASA_INGGRIS_HTML,
    createdAt: '2026-07-20T09:30:00Z'
  },
  {
    id: 'm_tka_indo_lanjut',
    title: 'Modul & Pembahasan Lengkap Bahasa Indonesia Tingkat Lanjut TKA 2026',
    subject: 'Bahasa Indonesia Tingkat Lanjut',
    bab: 'Analisis Wacana Kritis, Retorika & Kritik Sastra (20 Soal)',
    description: 'Modul digital komprehensif dan pembahasan lengkap 20 soal Bahasa Indonesia Tingkat Lanjut mencakup analisis wacana kritis, gaya bahasa/retorika, kritik sastra realisme magis, semantik-pragmatik, dan morfologi sintaksis kompleks.',
    pdfName: 'Pembahasan_TKA_Bahasa_Indonesia_Lanjut_2026.pdf',
    pdfUrl: '#',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    guruName: 'Dr. Retno Wulandari, M.Hum.',
    htmlContent: PEMBAHASAN_TKA_BAHASA_INDONESIA_LANJUT_HTML,
    createdAt: '2026-07-20T10:00:00Z'
  },
  {
    id: 'm_tka_inggris_lanjut',
    title: 'Modul & Pembahasan Lengkap Bahasa Inggris Tingkat Lanjut TKA 2026',
    subject: 'Bahasa Inggris Tingkat Lanjut',
    bab: 'Advanced Reading, Rhetorical Analysis & Grammar Inversion (20 Soal)',
    description: 'Modul digital komprehensif dan pembahasan lengkap 20 soal Bahasa Inggris Tingkat Lanjut mencakup academic discourse analysis, negative adverb inversion, mixed conditionals, epistemic modality, dan rhetorical structures.',
    pdfName: 'Pembahasan_TKA_Bahasa_Inggris_Lanjut_2026.pdf',
    pdfUrl: '#',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    guruName: 'Prof. Alexander Wright, Ph.D.',
    htmlContent: PEMBAHASAN_TKA_BAHASA_INGGRIS_LANJUT_HTML,
    createdAt: '2026-07-20T10:30:00Z'
  },
  {
    id: 'm1',
    title: 'Ringkasan Sakti Listrik Dinamis & Rumus Cepat',
    subject: 'Fisika',
    bab: 'Listrik Dinamis',
    description: 'Modul ini berisi rangkuman komprehensif mengenai konsep hambatan listrik, Hukum Ohm, Jembatan Wheatstone, Hukum Kirchoff I & II, serta kompilasi rumus cepat menyelesaikan rangkaian loop ganda.',
    pdfName: 'Ringkasan_Listrik_Dinamis_Sakti.pdf',
    pdfUrl: '#',
    videoName: 'Video_Bahasan_Listrik_Dinamis.mp4',
    videoUrl: '#',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    quizUrl: 'https://quizizz.com/join',
    gFormUrl: 'https://forms.google.com',
    guruName: 'Agus Wijaya, S.Si.',
    createdAt: '2026-07-18T10:00:00Z'
  },
  {
    id: 'm2',
    title: 'Modul Super Intensif Turunan Fungsi Aljabar',
    subject: 'Matematika Umum',
    bab: 'Turunan & Integral',
    description: 'Panduan lengkap penurunan rumus aljabar, pembuktian aturan rantai (chain rule), turunan trigonometri tingkat dasar, serta aplikasi turunan pada penentuan nilai stasioner fungsi.',
    pdfName: 'Modul_Turunan_Fungsi_Aljabar.pdf',
    pdfUrl: '#',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    guruName: 'Drs. Rudi Hermawan, M.Pd.',
    createdAt: '2026-07-17T12:00:00Z'
  },
  {
    id: 'm_bing_1',
    title: 'Kuis Interaktif Bahasa Inggris ANBK / Pusmendik (20 Soal)',
    subject: 'Bahasa Inggris',
    bab: 'Reading Comprehension & Grammar (Simulasi 20 Soal)',
    description: 'Kuis interaktif Bahasa Inggris Paket 1 (Soal 1 - 20) lengkap dengan penskoran berskala 200 - 800, pemeriksaan jawaban otomatis, dan pembahasan lengkap per nomor.',
    pdfName: 'English_ANBK_Pusmendik_Paket_1.pdf',
    pdfUrl: '#',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    guruName: 'Sarah Jenkins, M.A.',
    htmlContent: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kuis Bahasa Inggris ANBK / Pusmendik (Soal 1 - 20)</title>
    <style>
        :root {
            --primary: #2563eb;
            --primary-dark: #1d4ed8;
            --bg-body: #f8fafc;
            --card-bg: #ffffff;
            --text-main: #1e293b;
            --text-muted: #64748b;
            --border: #e2e8f0;
            --success: #16a34a;
            --success-bg: #f0fdf4;
            --danger: #dc2626;
            --danger-bg: #fef2f2;
            --accent: #f59e0b;
            --accent-bg: #fffbeb;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        }

        body {
            background-color: var(--bg-body);
            color: var(--text-main);
            line-height: 1.6;
            padding: 20px 10px;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
        }

        header {
            background: linear-gradient(135deg, #1e3a8a, #2563eb);
            color: white;
            padding: 24px;
            border-radius: 12px;
            margin-bottom: 24px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        header h1 {
            font-size: 1.6rem;
            margin-bottom: 8px;
        }

        header p {
            font-size: 0.95rem;
            opacity: 0.9;
        }

        .passage-box {
            background-color: #f1f5f9;
            border-left: 4px solid var(--primary);
            padding: 16px;
            border-radius: 6px;
            margin-bottom: 20px;
            font-size: 0.95rem;
            white-space: pre-line;
        }

        .passage-title {
            font-weight: bold;
            color: #0f172a;
            margin-bottom: 8px;
            text-transform: uppercase;
            font-size: 0.85rem;
            letter-spacing: 0.5px;
        }

        .question-card {
            background: var(--card-bg);
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 20px;
            margin-bottom: 24px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
            transition: border-color 0.2s;
        }

        .q-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
        }

        .q-number {
            font-weight: bold;
            background: #eff6ff;
            color: var(--primary);
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.85rem;
        }

        .q-type {
            font-size: 0.75rem;
            color: var(--text-muted);
            background: #f1f5f9;
            padding: 3px 8px;
            border-radius: 4px;
        }

        .q-text {
            font-size: 1.05rem;
            font-weight: 600;
            margin-bottom: 16px;
        }

        .options-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .option-item {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            padding: 10px 14px;
            border: 1px solid var(--border);
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.15s ease;
        }

        .option-item:hover {
            background-color: #f8fafc;
            border-color: #cbd5e1;
        }

        .option-item input {
            margin-top: 3px;
            cursor: pointer;
        }

        .option-label {
            cursor: pointer;
            width: 100%;
            font-size: 0.95rem;
        }

        /* Tables for categorization questions */
        .quiz-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }

        .quiz-table th, .quiz-table td {
            border: 1px solid var(--border);
            padding: 10px;
            text-align: center;
            font-size: 0.9rem;
        }

        .quiz-table th {
            background-color: #f1f5f9;
        }

        .quiz-table td:first-child {
            text-align: left;
            font-weight: 500;
        }

        /* Explanation box */
        .explanation {
            display: none;
            margin-top: 16px;
            padding: 14px 16px;
            border-radius: 8px;
            font-size: 0.9rem;
            line-height: 1.5;
        }

        .explanation.visible {
            display: block;
        }

        .btn-submit {
            display: block;
            width: 100%;
            padding: 16px;
            background-color: var(--primary);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            transition: background 0.2s;
            margin-top: 20px;
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
        }

        .btn-submit:hover {
            background-color: var(--primary-dark);
        }

        .score-card {
            display: none;
            background: white;
            border: 2px solid var(--primary);
            border-radius: 12px;
            padding: 24px;
            text-align: center;
            margin-bottom: 24px;
        }

        .score-card h2 {
            color: var(--primary);
            font-size: 1.8rem;
            margin-bottom: 8px;
        }

        .score-card p {
            color: var(--text-muted);
            font-size: 1rem;
        }

        @media (max-width: 600px) {
            body { padding: 10px 5px; }
            header { padding: 16px; }
            .question-card { padding: 14px; }
        }
    </style>
</head>
<body>

<div class="container">
    <header>
        <h1>Kuis Interaktif Bahasa Inggris ANBK / Pusmendik</h1>
        <p>Soal Latihan Simulasi Paket 1 (Soal 1 s.d. 20) — Skala Skor 200 - 800 & Pembahasan Lengkap</p>
    </header>

    <div id="scoreCard" class="score-card">
        <h2>Hasil Kuis Anda</h2>
        <p id="scoreText">Skor Akhir: 200 / 800 (Skala 200 - 800)</p>
        <p id="detailText" style="margin-top: 6px; font-weight: 500;"></p>
    </div>

    <form id="quizForm">

        <!-- TEKS 1 (SOAL 1 - 5) -->
        <div class="passage-box">
            <div class="passage-title">Teks untuk soal nomor 1 s.d. 5</div>
            <strong>The Legend of Son Tinh and Thuy Tinh</strong><br><br>
            King Hung Vuong VI had a beautiful daughter. He did not want her to marry just any prince. So, he made an announcement that he was looking for the right husband for her. Many princes came from faraway lands, but none of them was a good match for the princess.<br><br>
            Son Tinh was the Spirit of the Mountain, and Thuy Tinh was the Spirit of the Waters. One day, both appeared as young noblemen and asked to marry the princess. They were equally talented, powerful, and respected. The King found it hard to choose, so he decided to give them a test. He said that the one who brought the proper wedding gifts first the next morning would marry his daughter.<br><br>
            The next day, Son Tinh arrived early with his gifts. The King kept his promise and gave the princess to him. Thuy Tinh was angry about losing. He challenged Son Tinh to fight for the princess. But Son Tinh refused, believing he had already won fairly. Furious, Thuy Tinh used his power to call the rivers and streams to rise. Soon, the land was covered with floods that destroyed crops and homes.<br><br>
            Son Tinh stayed calm in his mountain palace. Whenever the water rose, he made his mountains higher. After many days of fighting, Thuy Tinh grew tired and ordered the waters to retreat. Still, he never accepted his defeat. Every year, he tried to attack again, and this is how monsoons came to Vietnam.
        </div>

        <!-- SOAL 1 -->
        <div class="question-card" id="card-q1">
            <div class="q-header">
                <span class="q-number">Soal 1</span>
                <span class="q-type">Pilihan Ganda</span>
            </div>
            <div class="q-text">Which of the following outlines shows the correct main points of the story?</div>
            <div class="options-list">
                <label class="option-item">
                    <input type="radio" name="q1" value="A">
                    <span class="option-label">King Hung Vuong VI wanted the best husband for his daughter. &rarr; Many princes came but none was suitable. &rarr; Son Tinh and Thuy Tinh both wanted to marry her. &rarr; The King gave them a test. &rarr; Son Tinh arrived first and married the princess. &rarr; Thuy Tinh lost the test and became angry.</span>
                </label>
                <label class="option-item">
                    <input type="radio" name="q1" value="B">
                    <span class="option-label">The princess was given to Thuy Tinh. &rarr; King Hung Vuong VI had a beautiful daughter. &rarr; He announced he was looking for the right husband. &rarr; Son Tinh and Thuy Tinh competed for the princess.</span>
                </label>
                <label class="option-item">
                    <input type="radio" name="q1" value="C">
                    <span class="option-label">Thuy Tinh arrived first with the wedding gifts. &rarr; The country never suffered from floods again. &rarr; King Hung Vuong VI wanted a nobleman for his daughter.</span>
                </label>
            </div>
            <div class="explanation" id="exp-q1"></div>
        </div>

        <!-- SOAL 2 -->
        <div class="question-card" id="card-q2">
            <div class="q-header">
                <span class="q-number">Soal 2</span>
                <span class="q-type">Pilihan Ganda</span>
            </div>
            <div class="q-text">Why did Thuy Tinh attack Son Tinh after the wedding?</div>
            <div class="options-list">
                <label class="option-item"><input type="radio" name="q2" value="A"><span class="option-label">He was jealous of Son Tinh's victory.</span></label>
                <label class="option-item"><input type="radio" name="q2" value="B"><span class="option-label">He believed the King had lied to him.</span></label>
                <label class="option-item"><input type="radio" name="q2" value="C"><span class="option-label">He thought the princess loved him more.</span></label>
                <label class="option-item"><input type="radio" name="q2" value="D"><span class="option-label">He wanted to show off his power to the king.</span></label>
                <label class="option-item"><input type="radio" name="q2" value="E"><span class="option-label">He had promised to fight until death.</span></label>
            </div>
            <div class="explanation" id="exp-q2"></div>
        </div>

        <!-- SOAL 3 -->
        <div class="question-card" id="card-q3">
            <div class="q-header">
                <span class="q-number">Soal 3</span>
                <span class="q-type">Tabel Persamaan & Perbedaan</span>
            </div>
            <div class="q-text">After reading the text, we can see that Son Tinh and Thuy Tinh are different, but they also have some similarities. Decide if each trait shows a similarity or a difference.</div>
            <table class="quiz-table">
                <thead>
                    <tr>
                        <th>Traits</th>
                        <th>Similarity</th>
                        <th>Difference</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Both are not humans.</td>
                        <td><input type="radio" name="q3_1" value="Similarity"></td>
                        <td><input type="radio" name="q3_1" value="Difference"></td>
                    </tr>
                    <tr>
                        <td>They can control the elements.</td>
                        <td><input type="radio" name="q3_2" value="Similarity"></td>
                        <td><input type="radio" name="q3_2" value="Difference"></td>
                    </tr>
                    <tr>
                        <td>They love the king's daughter.</td>
                        <td><input type="radio" name="q3_3" value="Similarity"></td>
                        <td><input type="radio" name="q3_3" value="Difference"></td>
                    </tr>
                </tbody>
            </table>
            <div class="explanation" id="exp-q3"></div>
        </div>

        <!-- SOAL 4 -->
        <div class="question-card" id="card-q4">
            <div class="q-header">
                <span class="q-number">Soal 4</span>
                <span class="q-type">Pilihan Ganda</span>
            </div>
            <div class="q-text">What does the phrase "kept his promise" in the text mean?</div>
            <div class="options-list">
                <label class="option-item"><input type="radio" name="q4" value="A"><span class="option-label">Forgot about his decision.</span></label>
                <label class="option-item"><input type="radio" name="q4" value="B"><span class="option-label">Changed his mind about the wedding.</span></label>
                <label class="option-item"><input type="radio" name="q4" value="C"><span class="option-label">Did what he had promised to do.</span></label>
                <label class="option-item"><input type="radio" name="q4" value="D"><span class="option-label">Delayed the marriage for many days.</span></label>
                <label class="option-item"><input type="radio" name="q4" value="E"><span class="option-label">The King asked the princes to bring more gifts.</span></label>
            </div>
            <div class="explanation" id="exp-q4"></div>
        </div>

        <!-- SOAL 5 -->
        <div class="question-card" id="card-q5">
            <div class="q-header">
                <span class="q-number">Soal 5</span>
                <span class="q-type">Pilihan Ganda Kompleks (Centang Banyak)</span>
            </div>
            <div class="q-text">What is the main lesson of the story? <i>(Pilih semua jawaban yang benar)</i></div>
            <div class="options-list">
                <label class="option-item"><input type="checkbox" name="q5" value="A"><span class="option-label">Accept defeat gracefully to prevent harm to others.</span></label>
                <label class="option-item"><input type="checkbox" name="q5" value="B"><span class="option-label">Be fair and follow the agreed rules in competitions.</span></label>
                <label class="option-item"><input type="checkbox" name="q5" value="C"><span class="option-label">Choose peaceful solutions rather than angry reactions.</span></label>
                <label class="option-item"><input type="checkbox" name="q5" value="D"><span class="option-label">Prepare honestly and present your gifts properly.</span></label>
                <label class="option-item"><input type="checkbox" name="q5" value="E"><span class="option-label">Respect leaders' decisions and community agreements.</span></label>
            </div>
            <div class="explanation" id="exp-q5"></div>
        </div>


        <!-- TEKS 2 (SOAL 6 - 10) -->
        <div class="passage-box">
            <div class="passage-title">Teks untuk soal nomor 6 s.d. 10</div>
            <strong>HOW TO STUDY IN THE LIBRARY</strong><br>
            Studying in the library is a good way to focus and learn. Follow these steps to use your time well:<br>
            1. <strong>PREPARE YOUR MATERIALS</strong>: Bring your books, notes, stationery, and water. Make sure you also have your library card.<br>
            2. <strong>CHOOSE QUIET SPOT</strong>: Find a table with good light and little noise. Avoid sitting too close to the entrance or the restroom.<br>
            3. <strong>SET A STUDY GOAL</strong>: Decide what you want to finish, such as reading two chapters or writing an essay.<br>
            4. <strong>FOLLOW LIBRARY RULES</strong>: Speak softly, keep your phone on silent, and do not eat inside. Respect other students.<br>
            5. <strong>TAKE SHORT BREAKS</strong>: After one hour, stand up, stretch, or walk for five minutes. This will help you stay fresh.<br>
            6. <strong>REVIEW BEFORE LEAVING</strong>: Check your notes, organize your books, and return borrowed materials.<br>
            With these steps, your library study time will be effective.
        </div>

        <!-- SOAL 6 -->
        <div class="question-card" id="card-q6">
            <div class="q-header">
                <span class="q-number">Soal 6</span>
                <span class="q-type">Tabel Kategori</span>
            </div>
            <div class="q-text">Categorize the activities suggested in the infographic as either preparation or breaks during study.</div>
            <table class="quiz-table">
                <thead>
                    <tr>
                        <th>Activities</th>
                        <th>Preparation</th>
                        <th>Breaks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Standing up</td>
                        <td><input type="radio" name="q6_1" value="Preparation"></td>
                        <td><input type="radio" name="q6_1" value="Breaks"></td>
                    </tr>
                    <tr>
                        <td>Bringing a book</td>
                        <td><input type="radio" name="q6_2" value="Preparation"></td>
                        <td><input type="radio" name="q6_2" value="Breaks"></td>
                    </tr>
                    <tr>
                        <td>Doing stretch</td>
                        <td><input type="radio" name="q6_3" value="Preparation"></td>
                        <td><input type="radio" name="q6_3" value="Breaks"></td>
                    </tr>
                </tbody>
            </table>
            <div class="explanation" id="exp-q6"></div>
        </div>

        <!-- SOAL 7 -->
        <div class="question-card" id="card-q7">
            <div class="q-header">
                <span class="q-number">Soal 7</span>
                <span class="q-type">Pilihan Ganda Kompleks (Centang Banyak)</span>
            </div>
            <div class="q-text">How can we decide a certain table is perfect for studying according to the text? <i>(Pilih semua jawaban yang benar)</i></div>
            <div class="options-list">
                <label class="option-item"><input type="checkbox" name="q7" value="A"><span class="option-label">It has good lighting</span></label>
                <label class="option-item"><input type="checkbox" name="q7" value="B"><span class="option-label">It provides white noise</span></label>
                <label class="option-item"><input type="checkbox" name="q7" value="C"><span class="option-label">It is located near the entrance</span></label>
                <label class="option-item"><input type="checkbox" name="q7" value="D"><span class="option-label">It is far from the toilet</span></label>
                <label class="option-item"><input type="checkbox" name="q7" value="E"><span class="option-label">It provides stationery</span></label>
            </div>
            <div class="explanation" id="exp-q7"></div>
        </div>

        <!-- SOAL 8 -->
        <div class="question-card" id="card-q8">
            <div class="q-header">
                <span class="q-number">Soal 8</span>
                <span class="q-type">Pilihan Ganda</span>
            </div>
            <div class="q-text">Who needs to read this infographic?</div>
            <div class="options-list">
                <label class="option-item"><input type="radio" name="q8" value="A"><span class="option-label">The students of that school</span></label>
                <label class="option-item"><input type="radio" name="q8" value="B"><span class="option-label">People who happen to visit the school</span></label>
                <label class="option-item"><input type="radio" name="q8" value="C"><span class="option-label">The librarian of another school</span></label>
                <label class="option-item"><input type="radio" name="q8" value="D"><span class="option-label">The headmaster of that school</span></label>
                <label class="option-item"><input type="radio" name="q8" value="E"><span class="option-label">Parents who come to pick up their kids</span></label>
            </div>
            <div class="explanation" id="exp-q8"></div>
        </div>

        <!-- SOAL 9 -->
        <div class="question-card" id="card-q9">
            <div class="q-header">
                <span class="q-number">Soal 9</span>
                <span class="q-type">Pilihan Ganda Kompleks (Centang Banyak)</span>
            </div>
            <div class="q-text">Which actions show disrespect for other students? <i>(Pilih semua jawaban yang benar)</i></div>
            <div class="options-list">
                <label class="option-item"><input type="checkbox" name="q9" value="A"><span class="option-label">Speaking loudly to friends.</span></label>
                <label class="option-item"><input type="checkbox" name="q9" value="B"><span class="option-label">Keeping the phone silent.</span></label>
                <label class="option-item"><input type="checkbox" name="q9" value="C"><span class="option-label">Eating snacks at the desk.</span></label>
                <label class="option-item"><input type="checkbox" name="q9" value="D"><span class="option-label">Playing music in the corner.</span></label>
                <label class="option-item"><input type="checkbox" name="q9" value="E"><span class="option-label">Moving chairs noisily.</span></label>
            </div>
            <div class="explanation" id="exp-q9"></div>
        </div>

        <!-- SOAL 10 -->
        <div class="question-card" id="card-q10">
            <div class="q-header">
                <span class="q-number">Soal 10</span>
                <span class="q-type">Pilihan Ganda</span>
            </div>
            <div class="q-text">You find this infographic in front of your school library. What will you do before your next visit to the library?</div>
            <div class="options-list">
                <label class="option-item"><input type="radio" name="q10" value="A"><span class="option-label">Making sure that I bring my water bottle and lunch with me.</span></label>
                <label class="option-item"><input type="radio" name="q10" value="B"><span class="option-label">Bringing the books and stationery that I will use.</span></label>
                <label class="option-item"><input type="radio" name="q10" value="C"><span class="option-label">Organizing the book that I borrowed from the library.</span></label>
                <label class="option-item"><input type="radio" name="q10" value="D"><span class="option-label">Walking for five minutes so I can focus more when studying.</span></label>
                <label class="option-item"><input type="radio" name="q10" value="E"><span class="option-label">Making sure you look fresh because you will meet other students.</span></label>
            </div>
            <div class="explanation" id="exp-q10"></div>
        </div>


        <!-- TEKS 3 (SOAL 11 - 13) -->
        <div class="passage-box">
            <div class="passage-title">Teks untuk soal nomor 11 s.d. 13</div>
            <strong>Exploring Bali's Natural Wonders</strong><br><br>
            Bali, a beautiful island in Indonesia, is known for its stunning landscapes and rich culture. While many come for the beaches and temples, the island also offers natural attractions that amaze nature lovers from around the world. From national parks and waterfalls to terraced rice fields, Bali is full of natural beauty.<br><br>
            In the west lies West Bali National Park, a protected area filled with green forests, calm mangrove swamps, and colorful coral reefs along the sea. The air is fresh, and the scenery feels untouched. One of the park's most special sights is the Bali Starling - a rare white bird with bright blue around its eyes. Its soft song adds magic to the quiet forest. Visitors can walk along clear paths and enjoy the rich variety of plants and animals in this protected area.<br><br>
            Heading north, travelers find the scenic Munduk Waterfall, surrounded by green mountains and forests. Water flows gently over rocky cliffs into a cool, clear pool. Mist rises into the air, mixing with the calming sound of falling water. Walk to the waterfall passes through narrow paths lined with coffee and clove trees. Their fresh scent fills the air, offering a pleasant and peaceful experience. Munduk is the perfect place to relax and enjoy Bali's natural charm.<br><br>
            Near the cultural center Ubud, the famous Tegallalang rice terraces stretch across the hills in green steps. These terraces are shaped by generations of farmers who work the land by hand. In the morning, mist rises above the fields, and sunlight reflects off the water in the paddies. Farmers in wide-rimmed hats plant rice carefully, their feet sinking into the soft earth. Water flows gently through small canals, keeping the fields healthy and green. The quiet surroundings and slow rhythm of farm life create a peaceful and inspiring scene.<br><br>
            These natural wonders highlight Bali's dedication in preserving its environmental and cultural treasures. By exploring these sites, tourists not only experience the island's scenic beauty but also support ongoing conservation efforts, helping to ensure that Bali's wonders last for future generations.
        </div>

        <!-- SOAL 11 -->
        <div class="question-card" id="card-q11">
            <div class="q-header">
                <span class="q-number">Soal 11</span>
                <span class="q-type">Tabel Kategori Tujuan</span>
            </div>
            <div class="q-text">What is the main purpose of visiting these places: to support conservation or to relax?</div>
            <table class="quiz-table">
                <thead>
                    <tr>
                        <th>Places</th>
                        <th>Conservation</th>
                        <th>Relaxation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Munduk Waterfall</td>
                        <td><input type="radio" name="q11_1" value="Conservation"></td>
                        <td><input type="radio" name="q11_1" value="Relaxation"></td>
                    </tr>
                    <tr>
                        <td>West Bali National Park</td>
                        <td><input type="radio" name="q11_2" value="Conservation"></td>
                        <td><input type="radio" name="q11_2" value="Relaxation"></td>
                    </tr>
                    <tr>
                        <td>Tegallalang Rice Terraces</td>
                        <td><input type="radio" name="q11_3" value="Conservation"></td>
                        <td><input type="radio" name="q11_3" value="Relaxation"></td>
                    </tr>
                </tbody>
            </table>
            <div class="explanation" id="exp-q11"></div>
        </div>

        <!-- SOAL 12 -->
        <div class="question-card" id="card-q12">
            <div class="q-header">
                <span class="q-number">Soal 12</span>
                <span class="q-type">Pilihan Ganda</span>
            </div>
            <div class="q-text">The text mainly talks about Bali's ...</div>
            <div class="options-list">
                <label class="option-item"><input type="radio" name="q12" value="A"><span class="option-label">wildlife species and nature lovers</span></label>
                <label class="option-item"><input type="radio" name="q12" value="B"><span class="option-label">unique cultural treasures and sites.</span></label>
                <label class="option-item"><input type="radio" name="q12" value="C"><span class="option-label">stunning nature and remarkable sites.</span></label>
                <label class="option-item"><input type="radio" name="q12" value="D"><span class="option-label">generations and cultural conservation.</span></label>
                <label class="option-item"><input type="radio" name="q12" value="E"><span class="option-label">scenic beauty and local farming practices.</span></label>
            </div>
            <div class="explanation" id="exp-q12"></div>
        </div>

        <!-- SOAL 13 -->
        <div class="question-card" id="card-q13">
            <div class="q-header">
                <span class="q-number">Soal 13</span>
                <span class="q-type">Pilihan Ganda Kompleks (Centang Banyak)</span>
            </div>
            <div class="q-text">Which parts of the text best support the description of Bali as "full of natural beauty"? <i>(Pilih semua jawaban yang benar)</i></div>
            <div class="options-list">
                <label class="option-item"><input type="checkbox" name="q13" value="A"><span class="option-label">A peaceful area filled with green forests, calm mangrove swamps, and colorful coral reefs along the sea.</span></label>
                <label class="option-item"><input type="checkbox" name="q13" value="B"><span class="option-label">These terraces are shaped by generations of farmers who work the land by hand.</span></label>
                <label class="option-item"><input type="checkbox" name="q13" value="C"><span class="option-label">Water flows gently over rocky cliffs into a cool, clear pool. Mist rises into the air, mixing with the calming sound of falling water.</span></label>
                <label class="option-item"><input type="checkbox" name="q13" value="D"><span class="option-label">In the morning, mist rises above the fields, and sunlight reflects off the water in the paddies.</span></label>
                <label class="option-item"><input type="checkbox" name="q13" value="E"><span class="option-label">Farmers in wide-brimmed hats plant rice carefully, their feet sinking into the soft earth.</span></label>
            </div>
            <div class="explanation" id="exp-q13"></div>
        </div>


        <!-- TEKS 4 (SOAL 14 - 16) -->
        <div class="passage-box">
            <div class="passage-title">Teks untuk soal nomor 14 s.d. 16</div>
            <strong>My Experience as an Intern at a Sports Club</strong><br><br>
            Last summer, I had the opportunity to work as an intern at a local sports club. It was my first time working in a professional sports environment, and I was both nervous and excited. The first few days were challenging because I was not used to the morning routine. Every morning I had to wake up early, arrive on time, and follow instructions carefully from orientation until finally jumping in to help during practices and games.<br><br>
            On my first day, I met the head coach, who welcomed me and explained my tasks. I had to set up cones for drills, bring water for the players, and check the training schedules. The first few days were challenging because I was not used to the morning routine. Every morning I had to wake up early, arrive on time, and follow instructions carefully. I worried about making mistakes, but the coaches were kind and guided me.<br><br>
            In the second month of my internship, I was trained to handle emergency situations. I got the chance to put that knowledge into practice when something unexpected happened. During football practice, a player fell and hurt his ankle. Everyone stopped, and I quickly ran to get the first aid kit. I helped the coach give the injured player and ensure the stayed calm while we got him seated safely. Luckily, it wasn't serious, but the experience reinforced an important lesson: staying alert and prepared during emergencies can make a big difference.<br><br>
            At the end of my internship, the coaches held an evaluation and reflection session where they shared the results of their feedback. They highlighted my strengths in teamwork, responsibility, and communication, and even gave me a club T-shirt as a gift. I felt proud because I had improved in these areas. It was a great experience, and I hope to work in a sports club again in the future.
        </div>

        <!-- SOAL 14 -->
        <div class="question-card" id="card-q14">
            <div class="q-header">
                <span class="q-number">Soal 14</span>
                <span class="q-type">Pilihan Ganda</span>
            </div>
            <div class="q-text">During the internship, what did the writer do every morning?</div>
            <div class="options-list">
                <label class="option-item"><input type="radio" name="q14" value="A"><span class="option-label">Made schedules and explained them to the coaches.</span></label>
                <label class="option-item"><input type="radio" name="q14" value="B"><span class="option-label">Played football with the team and got the first aid kit.</span></label>
                <label class="option-item"><input type="radio" name="q14" value="C"><span class="option-label">Prepared a club gift, guided the coaches, and gave t-shirts.</span></label>
                <label class="option-item"><input type="radio" name="q14" value="D"><span class="option-label">Woke up early, arrived on time, and followed the instructions.</span></label>
                <label class="option-item"><input type="radio" name="q14" value="E"><span class="option-label">Set up cones, brought water, and checked emergency schedules.</span></label>
            </div>
            <div class="explanation" id="exp-q14"></div>
        </div>

        <!-- SOAL 15 -->
        <div class="question-card" id="card-q15">
            <div class="q-header">
                <span class="q-number">Soal 15</span>
                <span class="q-type">Pilihan Ganda Kompleks (Centang Banyak)</span>
            </div>
            <div class="q-text">What are the best words to describe the writer's personality during the internship? <i>(Pilih semua jawaban yang benar)</i></div>
            <div class="options-list">
                <label class="option-item"><input type="checkbox" name="q15" value="A"><span class="option-label">Careful and ready to help.</span></label>
                <label class="option-item"><input type="checkbox" name="q15" value="B"><span class="option-label">Confident and enjoys working alone.</span></label>
                <label class="option-item"><input type="checkbox" name="q15" value="C"><span class="option-label">Responsible and willing to learn.</span></label>
                <label class="option-item"><input type="checkbox" name="q15" value="D"><span class="option-label">Friendly and works well with others.</span></label>
                <label class="option-item"><input type="checkbox" name="q15" value="E"><span class="option-label">Creative and likes to try new things.</span></label>
            </div>
            <div class="explanation" id="exp-q15"></div>
        </div>

        <!-- SOAL 16 -->
        <div class="question-card" id="card-q16">
            <div class="q-header">
                <span class="q-number">Soal 16</span>
                <span class="q-type">Pilihan Ganda</span>
            </div>
            <div class="q-text">What will the writer most likely do after finishing the internship?</div>
            <div class="options-list">
                <label class="option-item"><input type="radio" name="q16" value="A"><span class="option-label">Considering a career in a sports medicine</span></label>
                <label class="option-item"><input type="radio" name="q16" value="B"><span class="option-label">Stop working and focus only on school</span></label>
                <label class="option-item"><input type="radio" name="q16" value="C"><span class="option-label">Look for another chance to work in a sports club</span></label>
                <label class="option-item"><input type="radio" name="q16" value="D"><span class="option-label">Study medicine to become a doctor</span></label>
                <label class="option-item"><input type="radio" name="q16" value="E"><span class="option-label">Train as a professional football player</span></label>
            </div>
            <div class="explanation" id="exp-q16"></div>
        </div>


        <!-- TEKS 5 (SOAL 17 - 20) -->
        <div class="passage-box">
            <div class="passage-title">Teks untuk soal nomor 17 s.d. 20</div>
            <strong>Social Media Harms Teen Mental Health</strong><br><br>
            In today's world, social media is a big part of many teenagers' daily lives. While it has some benefits, such as staying connected with friends, meeting new people, and learning about interesting topics, it also brings serious problems. I strongly believe that social media harms teen mental health, and we must pay more attention to this issue before it becomes even worse.<br><br>
            First, social media makes teenagers compare themselves to others in an unhealthy way. When teens see pictures of people who seem perfect, they feel that they are not good enough. These feelings can lower self-esteem and lead to sadness, anxiety, or even depression. The problem is that many of these online posts are edited, filtered, or fake, but teens still feel pressure to look or live the same way. They may think that their own life is boring or not successful, which is simply not true.<br><br>
            Second, too much time on social media affects sleep and study habits. Many teenagers use their phones late at night, checking messages or watching videos, which reduces sleep time and quality. When teens do not get enough sleep, they cannot focus well in class, and their grades may suffer. This can increase stress and worry about the future, making them feel overwhelmed.<br><br>
            Finally, online bullying, or cyberbullying, is another serious danger. Unlike face-to-face bullying, it can happen at any time and be shared with many people. Victims of cyberbullying often feel alone, scared, and helpless, and in some cases, it leads to serious mental health problems.<br><br>
            In conclusion, although social media has some good uses, its harm to teen mental health is much greater. Teenagers need support from parents, teachers, and society to use it wisely. Schools should teach students how to use social media in healthy ways, and parents should guide their children to take breaks and spend time offline. By doing this, we can help protect young people's mental health in this digital age.
        </div>

        <!-- SOAL 17 -->
        <div class="question-card" id="card-q17">
            <div class="q-header">
                <span class="q-number">Soal 17</span>
                <span class="q-type">Pilihan Ganda Kompleks (Centang Banyak)</span>
            </div>
            <div class="q-text">What will happen if teenagers have poor sleep quality? <i>(Pilih semua jawaban yang benar)</i></div>
            <div class="options-list">
                <label class="option-item"><input type="checkbox" name="q17" value="A"><span class="option-label">Teenagers' grades could drop.</span></label>
                <label class="option-item"><input type="checkbox" name="q17" value="B"><span class="option-label">Teens struggle to focus in class.</span></label>
                <label class="option-item"><input type="checkbox" name="q17" value="C"><span class="option-label">Teens are likely to feel stressed.</span></label>
                <label class="option-item"><input type="checkbox" name="q17" value="D"><span class="option-label">Teenagers will be more confident.</span></label>
                <label class="option-item"><input type="checkbox" name="q17" value="E"><span class="option-label">Teens will become mentally strong.</span></label>
            </div>
            <div class="explanation" id="exp-q17"></div>
        </div>

        <!-- SOAL 18 -->
        <div class="question-card" id="card-q18">
            <div class="q-header">
                <span class="q-number">Soal 18</span>
                <span class="q-type">Pilihan Ganda Kompleks (Centang Banyak)</span>
            </div>
            <div class="q-text">Which of the following additional facts would most likely make the text more persuasive? <i>(Pilih semua jawaban yang benar)</i></div>
            <div class="options-list">
                <label class="option-item"><input type="checkbox" name="q18" value="A"><span class="option-label">Research data showing the number of teenagers experiencing anxiety or depression because of social media.</span></label>
                <label class="option-item"><input type="checkbox" name="q18" value="B"><span class="option-label">Personal stories from teenagers who feel happier after reducing their social media use.</span></label>
                <label class="option-item"><input type="checkbox" name="q18" value="C"><span class="option-label">Statistics about how many teenagers use social media every day.</span></label>
                <label class="option-item"><input type="checkbox" name="q18" value="D"><span class="option-label">A list of the most popular social media platforms among teenagers.</span></label>
                <label class="option-item"><input type="checkbox" name="q18" value="E"><span class="option-label">Expert opinions from doctors or psychologists about the dangers of social media for mental health.</span></label>
            </div>
            <div class="explanation" id="exp-q18"></div>
        </div>

        <!-- SOAL 19 -->
        <div class="question-card" id="card-q19">
            <div class="q-header">
                <span class="q-number">Soal 19</span>
                <span class="q-type">Pilihan Ganda Kompleks (Centang Banyak)</span>
            </div>
            <div class="q-text">Which statements from the text support the author's argument that social media harms teen mental health? <i>(Pilih semua jawaban yang benar)</i></div>
            <div class="options-list">
                <label class="option-item"><input type="checkbox" name="q19" value="A"><span class="option-label">"When teens see pictures of people who seem perfect, they feel that they are not good enough."</span></label>
                <label class="option-item"><input type="checkbox" name="q19" value="B"><span class="option-label">"Many teenagers use their phones late at night, which reduces sleep time and quality."</span></label>
                <label class="option-item"><input type="checkbox" name="q19" value="C"><span class="option-label">"Schools should teach students how to use social media in healthy ways."</span></label>
                <label class="option-item"><input type="checkbox" name="q19" value="D"><span class="option-label">"Social media helps teens stay connected with friends and learn about interesting topics."</span></label>
                <label class="option-item"><input type="checkbox" name="q19" value="E"><span class="option-label">"Victims of cyberbullying often feel alone, scared, and helpless."</span></label>
            </div>
            <div class="explanation" id="exp-q19"></div>
        </div>

        <!-- SOAL 20 -->
        <div class="question-card" id="card-q20">
            <div class="q-header">
                <span class="q-number">Soal 20</span>
                <span class="q-type">Pilihan Ganda Kompleks (Centang Banyak)</span>
            </div>
            <div class="q-text">What is the most prominent impression you gain from the text? <i>(Pilih semua jawaban yang benar)</i></div>
            <div class="options-list">
                <label class="option-item"><input type="checkbox" name="q20" value="A"><span class="option-label">Social media makes teenagers unhappy because they compare their lives to unrealistic images online.</span></label>
                <label class="option-item"><input type="checkbox" name="q20" value="B"><span class="option-label">Teenagers should completely stop using social media to protect their mental health.</span></label>
                <label class="option-item"><input type="checkbox" name="q20" value="C"><span class="option-label">Using social media too much can disturb teenagers' sleep and make it harder for them to focus at school.</span></label>
                <label class="option-item"><input type="checkbox" name="q20" value="D"><span class="option-label">Cyberbullying is a serious problem on social media and can make teenagers feel lonely and scared.</span></label>
            </div>
            <div class="explanation" id="exp-q20"></div>
        </div>

        <button type="button" class="btn-submit" onclick="submitQuiz()">Kumpulkan Jawaban & Lihat Pembahasan</button>
    </form>
</div>

<script>
    // Database kunci jawaban dan pembahasan
    const quizData = {
        q1: {
            type: "radio",
            key: "A",
            explanation: "<b>Kunci Jawaban: A</b><br><b>Pembahasan:</b> Ringkasan/outline cerita yang benar mencakup seluruh alur utama: Raja mencari suami ideal -&gt; Pelamar berdatangan -&gt; Son Tinh &amp; Thuy Tinh melamar -&gt; Raja memberi ujian -&gt; Son Tinh menang &amp; menikah -&gt; Thuy Tinh kalah &amp; marah memicu banjir."
        },
        q2: {
            type: "radio",
            key: "A",
            explanation: "<b>Kunci Jawaban: A (He was jealous of Son Tinh's victory)</b><br><b>Pembahasan:</b> Dalam teks dijelaskan bahwa Thuy Tinh marah dan cemburu atas kekalahannya dalam membawa hadiah pernikahan terlebih dahulu ('Thuy Tinh was angry about losing... Furious, Thuy Tinh used his power...')."
        },
        q3: {
            type: "table_radio",
            keys: { q3_1: "Similarity", q3_2: "Similarity", q3_3: "Similarity" },
            explanation: "<b>Kunci Jawaban: Similarity untuk ketiga poin</b><br><b>Pembahasan:</b><br>- Both are not humans: Persamaan (keduanya adalah Dewa/Spirit Gunung &amp; Air).<br>- Control elements: Persamaan (keduanya punya kekuatan mengendalikan elemen alam).<br>- Love king's daughter: Persamaan (keduanya sama-sama ingin menikahi putri raja)."
        },
        q4: {
            type: "radio",
            key: "C",
            explanation: "<b>Kunci Jawaban: C (Did what he had promised to do)</b><br><b>Pembahasan:</b> Ungkapan <i>'kept his promise'</i> berarti menepati/melakukan apa yang telah dijanjikan, yaitu menikahkan putrinya kepada siapapun yang datang membawa hadiah pertama kali."
        },
        q5: {
            type: "checkbox",
            keys: ["A", "B"],
            explanation: "<b>Kunci Jawaban: A dan B</b><br><b>Pembahasan:</b> Pesan moral cerita menekankan pentingnya menerima kekalahan dengan lapang dada tanpa merugikan orang lain (A) serta bersikap adil dan mematuhi aturan kompetisi (B)."
        },
        q6: {
            type: "table_radio",
            keys: { q6_1: "Breaks", q6_2: "Preparation", q6_3: "Breaks" },
            explanation: "<b>Kunci Jawaban:</b><br>- Standing up: Breaks (Langkah 5)<br>- Bringing a book: Preparation (Langkah 1)<br>- Doing stretch: Breaks (Langkah 5)"
        },
        q7: {
            type: "checkbox",
            keys: ["A", "D"],
            explanation: "<b>Kunci Jawaban: A dan D</b><br><b>Pembahasan:</b> Menurut poin 2 infografis, meja belajar yang baik memiliki pencahayaan cukup ('good light') dan berada jauh dari toilet atau pintu masuk ('avoid sitting close to the entrance or restroom')."
        },
        q8: {
            type: "radio",
            key: "A",
            explanation: "<b>Kunci Jawaban: A (The students of that school)</b><br><b>Pembahasan:</b> Infografis ini dipasang di depan perpustakaan sekolah sebagai panduan cara belajar efektif untuk para siswa sekolah tersebut."
        },
        q9: {
            type: "checkbox",
            keys: ["A", "C", "D"],
            explanation: "<b>Kunci Jawaban: A, C, dan D</b><br><b>Pembahasan:</b> Berbicara keras (A), makan camilan di meja belajar (C), dan memutar musik (D) adalah tindakan yang mengganggu ketenangan dan melanggar aturan perpustakaan."
        },
        q10: {
            type: "radio",
            key: "B",
            explanation: "<b>Kunci Jawaban: B (Bringing the books and stationery that I will use)</b><br><b>Pembahasan:</b> Langkah 1 (Prepare your materials) menginstruksikan untuk membawa buku, catatan, dan alat tulis sebelum mengunjungi perpustakaan."
        },
        q11: {
            type: "table_radio",
            keys: { q11_1: "Relaxation", q11_2: "Conservation", q11_3: "Conservation" },
            explanation: "<b>Kunci Jawaban:</b><br>- Munduk Waterfall: Relaxation (tempat bersantai &amp; menikmati alam).<br>- West Bali National Park: Conservation (perlindungan spesies langka &amp; habitat).<br>- Tegallalang Rice Terraces: Conservation (pelestarian warisan budaya &amp; lingkungan)."
        },
        q12: {
            type: "radio",
            key: "C",
            explanation: "<b>Kunci Jawaban: C (stunning nature and remarkable sites)</b><br><b>Pembahasan:</b> Teks secara menyeluruh mendeskripsikan keindahan alam dan tempat-tempat wisata alam menakjubkan di Bali."
        },
        q13: {
            type: "checkbox",
            keys: ["A", "B", "C"],
            explanation: "<b>Kunci Jawaban: A, B, dan C</b><br><b>Pembahasan:</b> Ketiga kalimat tersebut langsung menggambarkan bukti visual keindahan alam Bali (hutan/karang, terasering sawah, dan air terjun)."
        },
        q14: {
            type: "radio",
            key: "D",
            explanation: "<b>Kunci Jawaban: D (Woke up early, arrived on time, and followed the instructions)</b><br><b>Pembahasan:</b> Disebutkan eksplisit di paragraf 1 &amp; 2: 'Every morning I had to wake up early, arrive on time, and follow instructions carefully.'"
        },
        q15: {
            type: "checkbox",
            keys: ["A", "C"],
            explanation: "<b>Kunci Jawaban: A dan C</b><br><b>Pembahasan:</b> Penulis menunjukkan sikap teliti &amp; siap membantu ('careful and ready to help') serta bertanggung jawab &amp; mau belajar ('responsible and willing to learn')."
        },
        q16: {
            type: "radio",
            key: "A",
            explanation: "<b>Kunci Jawaban: A (Considering a career in a sports medicine)</b><br><b>Pembahasan:</b> Berdasarkan pengalaman berharga membantu menangani cedera pemain dan mendapat pujian dari pelatih, penulis kemungkinan besar tertarik pada karir kedokteran olahraga."
        },
        q17: {
            type: "checkbox",
            keys: ["A", "B", "C"],
            explanation: "<b>Kunci Jawaban: A, B, dan C</b><br><b>Pembahasan:</b> Paragraf 3 menjelaskan dampak kurang tidur: nilai bisa turun (grades drop), sulit fokus di kelas (struggle to focus), dan memicu stres (feel stressed)."
        },
        q18: {
            type: "checkbox",
            keys: ["A", "B", "E"],
            explanation: "<b>Kunci Jawaban: A, B, dan E</b><br><b>Pembahasan:</b> Teks persuasif menjadi lebih kuat jika didukung oleh data ilmiah/penelitian (A), cerita pengalaman nyata (B), dan pendapat ahli/psikolog (E)."
        },
        q19: {
            type: "checkbox",
            keys: ["A", "B", "E"],
            explanation: "<b>Kunci Jawaban: A, B, dan E</b><br><b>Pembahasan:</b> Ketiga opsi tersebut berisi klaim langsung mengenai bahaya media sosial bagi mental remaja (rasa tidak cukup/minder, gangguan tidur, dan dampak buruk cyberbullying)."
        },
        q20: {
            type: "checkbox",
            keys: ["A", "C", "D"],
            explanation: "<b>Kunci Jawaban: A, C, dan D</b><br><b>Pembahasan:</b> Impresi utama yang didapat pembaca adalah dampak negatif media sosial dari aspek ekspektasi tak realistis (A), gangguan tidur (C), dan kecemasan akibat cyberbullying (D)."
        }
    };

    function submitQuiz() {
        let correctCount = 0;
        let totalQuestions = 20;

        // Disable inputs after submit
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => input.disabled = true);

        for (let i = 1; i <= totalQuestions; i++) {
            let qKey = 'q' + i;
            let data = quizData[qKey];
            let expBox = document.getElementById('exp-' + qKey);
            let isCorrect = false;

            if (data.type === 'radio') {
                let selected = document.querySelector('input[name="' + qKey + '"]:checked');
                if (selected && selected.value === data.key) {
                    isCorrect = true;
                }
            } else if (data.type === 'checkbox') {
                let selectedNodes = document.querySelectorAll('input[name="' + qKey + '"]:checked');
                let selectedValues = Array.from(selectedNodes).map(node => node.value).sort();
                let keyValues = [...data.keys].sort();
                if (JSON.stringify(selectedValues) === JSON.stringify(keyValues)) {
                    isCorrect = true;
                }
            } else if (data.type === 'table_radio') {
                let allSubCorrect = true;
                for (let subKey in data.keys) {
                    let selected = document.querySelector('input[name="' + subKey + '"]:checked');
                    if (!selected || selected.value !== data.keys[subKey]) {
                        allSubCorrect = false;
                        break;
                    }
                }
                if (allSubCorrect) isCorrect = true;
            }

            // Display result styles
            expBox.innerHTML = data.explanation;
            expBox.classList.add('visible');

            if (isCorrect) {
                correctCount++;
                expBox.style.backgroundColor = 'var(--success-bg)';
                expBox.style.border = '1px solid var(--success)';
                expBox.style.color = '#14532d';
            } else {
                expBox.style.backgroundColor = 'var(--danger-bg)';
                expBox.style.border = '1px solid var(--danger)';
                expBox.style.color = '#7f1d1d';
            }
        }

        // Display summary score (Skala 200 - 800)
        let minScore = 200;
        let maxScore = 800;
        let score = minScore + Math.round((correctCount / totalQuestions) * (maxScore - minScore));

        let scoreCard = document.getElementById('scoreCard');
        scoreCard.style.display = 'block';
        document.getElementById('scoreText').innerText = 'Skor Akhir: ' + score + ' / 800 (Skala 200 - 800)';
        document.getElementById('detailText').innerText = 'Jawaban Benar: ' + correctCount + ' dari ' + totalQuestions + ' Soal';

        // Scroll to score card smoothly
        scoreCard.scrollIntoView({ behavior: 'smooth' });
    }
</script>

</body>
</html>`,
    createdAt: '2026-07-20T10:00:00Z'
  }
];

const INITIAL_AI_KNOWLEDGE: AiKnowledgeItem[] = [
  {
    id: 'aik_1',
    title: 'Master Rangkuman & Solusi Kilat TKA Matematika (Turunan & Matriks)',
    subject: 'Matematika Lanjut',
    bab: 'Turunan & Matriks',
    contentType: 'markdown',
    markdownContent: `### 📚 Modul Pengetahuan AI Internal: Turunan & Matriks TKA
#### 1. Konsep Dasar Turunan Fungsi Aljabar:
- Untuk $f(x) = a x^n$, maka $f'(x) = a \\cdot n \\cdot x^{n-1}$.
- Nilai stasioner didapat ketika $f'(x) = 0$.
- Nilai maksimum/minimum lokal dites menggunakan turunan kedua $f''(x)$.

#### 2. Determinan & Invers Matriks $2 \\times 2$:
- Jika $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, maka $\\det(A) = ad - bc$.
- Invers $A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$.
- Matriks dinamakan **singular** jika $\\det(A) = 0$.`,
    pdfName: 'Modul_Internal_AI_Matematika_Lanjut.pdf',
    pdfUrl: 'https://docs.google.com/viewer?url=example_math.pdf',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    teacherNote: 'Selalu tekankan penggunaan rumus determinan $ad - bc$ dan turunan pertama $f\'(x) = 0$ apabila siswa menanyakan soal turunan dan matriks.',
    createdAt: '2026-07-20T08:00:00Z',
    authorName: 'Drs. Bambang Hidayat, M.Pd',
    authorRole: 'Guru'
  },
  {
    id: 'aik_2',
    title: 'Bedah Trik Cepat TKA Fisika: Dinamika Rotasi & Momen Inersia',
    subject: 'Fisika',
    bab: 'Dinamika Rotasi',
    contentType: 'pdf',
    markdownContent: `### ⚡ Momen Inersia & Percepatan Menggelinding
- Momen Inersia $I = k \\cdot m \\cdot R^2$.
  - Silinder Pejal: $k = \\frac{1}{2}$
  - Bola Pejal: $k = \\frac{2}{5}$
  - Cincin/Silinder Tipis: $k = 1$
- **Trik Cepat Percepatan di Bidang Miring:**
$$a = \\frac{g \\sin \\theta}{1 + k}$$`,
    pdfName: 'Kumpulan_Soal_HOTS_Dinamika_Rotasi_2026.pdf',
    pdfUrl: 'https://docs.google.com/viewer?url=example_physics.pdf',
    videoName: 'Penjelasan_Eksperimen_Rotasi.mp4',
    videoUrl: 'https://example.com/videos/rotasi.mp4',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    teacherNote: 'Bila siswa kesulitan membedakan percepatan benda pejal vs silinder tipis, langsung terapkan rumus $a = \\frac{g \\sin \\theta}{1 + k}$.',
    createdAt: '2026-07-19T11:00:00Z',
    authorName: 'Admin Utama TKA',
    authorRole: 'Admin'
  }
];

// Global bootstrap functions to access static defaults
export const getQuestions = () => {
  let list = FirestoreSimulator.getCollection<Question>('questions', INITIAL_QUESTIONS);
  
  // Remove questions from deleted packages (Bahasa Indonesia Tingkat Lanjut & Bahasa Inggris Tingkat Lanjut)
  const filteredFromDeleted = list.filter(q => 
    !q.id.startsWith('q_tka_indo_lanjut_') && 
    !q.id.startsWith('q_tka_inggris_lanjut_') && 
    q.subject !== 'Bahasa Indonesia Tingkat Lanjut' && 
    q.subject !== 'Bahasa Inggris Tingkat Lanjut'
  );
  if (filteredFromDeleted.length !== list.length) {
    list = filteredFromDeleted;
    FirestoreSimulator.saveCollection('questions', list);
  }

  // Deduplicate cached list by question ID
  const seenIds = new Set<string>();
  const uniqueList: Question[] = [];
  list.forEach(q => {
    if (!seenIds.has(q.id)) {
      seenIds.add(q.id);
      uniqueList.push(q);
    }
  });
  if (uniqueList.length !== list.length) {
    list = uniqueList;
    FirestoreSimulator.saveCollection('questions', list);
  }

  const existingIds = new Set(list.map(q => q.id));
  let updated = false;
  INITIAL_QUESTIONS.filter(q => q.id.startsWith('q_utbk_') || q.id.startsWith('q_mtk_slugpost_') || q.id.startsWith('q_limit_') || q.id.startsWith('q_mtk_lanjut_') || q.id.startsWith('q_anbk_mtkw_') || q.id.startsWith('q_integral_') || q.id.startsWith('q_turunan_') || q.id.startsWith('q_tka_bindo_') || q.id.startsWith('q_tka_bing_')).forEach(q => {
    if (!existingIds.has(q.id)) {
      list.unshift(q);
      updated = true;
    } else {
      const idx = list.findIndex(item => item.id === q.id);
      if (idx !== -1) {
        if (q.id.startsWith('q_tka_bindo_') || q.id.startsWith('q_tka_bing_') || q.id.startsWith('q_anbk_mtkw_') || q.id.startsWith('q_mtk_lanjut_')) {
          if (list[idx].text !== q.text || list[idx].options.length !== q.options.length) {
            list[idx] = { ...q };
            updated = true;
          }
        } else if (q.id.startsWith('q_turunan_') && list[idx].questionType !== q.questionType) {
          list[idx] = { ...list[idx], questionType: q.questionType, correctAnswerIndices: q.correctAnswerIndices };
          updated = true;
        }
      }
    }
  });
  if (updated) {
    FirestoreSimulator.saveCollection('questions', list);
  }
  return list;
};

export const getVideos = () => FirestoreSimulator.getCollection<LearningVideo>('videos', INITIAL_VIDEOS);

export const getTryOuts = () => {
  let tryouts = FirestoreSimulator.getCollection<TryOut>('exams', INITIAL_TRYOUTS);
  let updated = false;

  // Filter out removed tryout packages
  const removedIds = new Set(['to3', 'to4', 'to6', 'to7', 'to8', 'to-tka-indo-lanjut-2026', 'to-tka-inggris-lanjut-2026', 'to-tka-ppkn-1-2026', 'to-tka-sejarah-1-2026', 'to-tka-geografi-1-2026']);
  const filtered = tryouts.filter(t => 
    !removedIds.has(t.id) && 
    t.subject !== 'Bahasa Indonesia Tingkat Lanjut' && 
    t.subject !== 'Bahasa Inggris Tingkat Lanjut' && 
    t.id !== 'to-tka-sejarah-1-2026' &&
    t.id !== 'to-tka-geografi-1-2026'
  );
  if (filtered.length !== tryouts.length) {
    tryouts = filtered;
    updated = true;
  }

  // Ensure all INITIAL_TRYOUTS are synced into local storage and names kept up to date
  INITIAL_TRYOUTS.forEach(initTo => {
    const existingIdx = tryouts.findIndex(t => t.id === initTo.id);
    if (existingIdx === -1 && !removedIds.has(initTo.id)) {
      tryouts.unshift(initTo);
      updated = true;
    } else if (existingIdx !== -1 && tryouts[existingIdx].name !== initTo.name) {
      tryouts[existingIdx].name = initTo.name;
      updated = true;
    }
  });

  if (updated) {
    FirestoreSimulator.saveCollection('exams', tryouts);
  }

  return tryouts;
};

export const getTryouts = () => getTryOuts();
export const getAnnouncements = () => FirestoreSimulator.getCollection<Announcement>('announcements', INITIAL_ANNOUNCEMENTS);
export const getAchievements = () => FirestoreSimulator.getCollection<Achievement>('achievements', INITIAL_ACHIEVEMENTS);
export const getUniversities = () => MOCK_UNIVERSITIES;
export const getStudyPrograms = (univId?: string) => getSnpmbStudyPrograms(univId);
export const getMaterials = () => {
  let list = FirestoreSimulator.getCollection<LearningMaterial>('materials', INITIAL_MATERIALS);
  let updated = false;

  const filtered = list.filter(m => m.id !== 'm_bindo_1');
  if (filtered.length !== list.length) {
    list = filtered;
    updated = true;
  }

  INITIAL_MATERIALS.forEach(initMat => {
    const idx = list.findIndex(m => m.id === initMat.id);
    if (idx !== -1) {
      if (initMat.htmlContent && list[idx].htmlContent !== initMat.htmlContent) {
        list[idx] = { 
          ...list[idx], 
          htmlContent: initMat.htmlContent, 
          title: initMat.title, 
          description: initMat.description,
          bab: initMat.bab
        };
        updated = true;
      }
    } else {
      list.unshift(initMat);
      updated = true;
    }
  });

  if (updated) {
    FirestoreSimulator.saveCollection('materials', list);
  }

  return list;
};
export const addMaterial = (mat: LearningMaterial) => {
  const list = getMaterials();
  list.unshift(mat);
  FirestoreSimulator.saveCollection('materials', list);
};
export const deleteMaterial = (id: string) => {
  const list = getMaterials();
  const updated = list.filter(m => m.id !== id);
  FirestoreSimulator.saveCollection('materials', updated);
};

// AI Knowledge Base Management (Internal Guru & Admin)
export const getAiKnowledgeBase = () => FirestoreSimulator.getCollection<AiKnowledgeItem>('ai_knowledge_base', INITIAL_AI_KNOWLEDGE);
export const addAiKnowledgeItem = (item: AiKnowledgeItem) => {
  const list = getAiKnowledgeBase();
  list.unshift(item);
  FirestoreSimulator.saveCollection('ai_knowledge_base', list);
};
export const updateAiKnowledgeItem = (id: string, updated: Partial<AiKnowledgeItem>) => {
  const list = getAiKnowledgeBase();
  const index = list.findIndex(i => i.id === id);
  if (index !== -1) {
    list[index] = { ...list[index], ...updated };
    FirestoreSimulator.saveCollection('ai_knowledge_base', list);
  }
};
export const deleteAiKnowledgeItem = (id: string) => {
  const list = getAiKnowledgeBase();
  const filtered = list.filter(i => i.id !== id);
  FirestoreSimulator.saveCollection('ai_knowledge_base', filtered);
};

const INITIAL_SCORES: ExamScore[] = [
  {
    id: 'score_sample_1',
    examId: 'to_utbk_1',
    examName: 'Simulasi UTBK TKA Saintek 1',
    userId: 'u1',
    userName: 'Sarah Amelia',
    score: 735,
    correctCount: 11,
    wrongCount: 4,
    totalQuestions: 15,
    subject: 'Matematika Lanjut',
    passed: true,
    createdAt: '2026-07-22T14:30:00Z'
  },
  {
    id: 'score_sample_2',
    examId: 'to_utbk_1',
    examName: 'Simulasi UTBK TKA Saintek 1',
    userId: 'u2',
    userName: 'Ahmad Fauzi',
    score: 680,
    correctCount: 10,
    wrongCount: 5,
    totalQuestions: 15,
    subject: 'Matematika Lanjut',
    passed: true,
    createdAt: '2026-07-21T11:15:00Z'
  },
  {
    id: 'score_sample_3',
    examId: 'to_utbk_2',
    examName: 'Simulasi UTBK TKA Soshum 1',
    userId: 'u4',
    userName: 'Dimas Wicaksono',
    score: 590,
    correctCount: 8,
    wrongCount: 7,
    totalQuestions: 15,
    subject: 'Geografi',
    passed: false,
    createdAt: '2026-07-20T09:40:00Z'
  },
  {
    id: 'score_sample_4',
    examId: 'to_utbk_1',
    examName: 'Simulasi UTBK TKA Saintek 1',
    userId: 'u5',
    userName: 'Rian Hidayat',
    score: 810,
    correctCount: 13,
    wrongCount: 2,
    totalQuestions: 15,
    subject: 'Fisika',
    passed: true,
    createdAt: '2026-07-19T16:20:00Z'
  },
  {
    id: 'score_sample_5',
    examId: 'to_utbk_1',
    examName: 'Simulasi UTBK TKA Saintek 1',
    userId: 'u6',
    userName: 'Zahra Lestari',
    score: 490,
    correctCount: 6,
    wrongCount: 9,
    totalQuestions: 15,
    subject: 'Kimia',
    passed: false,
    createdAt: '2026-07-18T10:00:00Z'
  }
];

export const getAllScores = () => FirestoreSimulator.getCollection<ExamScore>('scores', INITIAL_SCORES);

export const getNotifications = () => {
  const user = FirestoreSimulator.getCurrentUser();
  if (!user) return [];
  const list = FirestoreSimulator.getCollection<any>('notifications', []);
  return list.filter(n => n.userId === user.uid);
};
export const getScores = () => {
  const user = FirestoreSimulator.getCurrentUser();
  if (!user) return [];
  const list = getAllScores();
  return list.filter(s => s.userId === user.uid);
};

