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

// Initial Mock Universities & Programs
export const MOCK_UNIVERSITIES: University[] = SNPMB_UNIVERSITIES;
export const MOCK_STUDY_PROGRAMS: StudyProgram[] = SNPMB_STUDY_PROGRAMS;

// Initial Questions Database supporting LaTeX formulas
const INITIAL_QUESTIONS: Question[] = [
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
      'f(x) = x^2 + 1',
      'f(x) = \\sqrt{x}',
      'f(x) = 2^x',
      'f(x) = |x|',
      'f(x) = \\frac{1}{x}'
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
      '(x, y) \\rightarrow (x + 2, y - 3)',
      '(x, y) \\rightarrow (x - 2, y + 3)',
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
      '\\lim_{x \\to 0} \\frac{\\sin x}{x}',
      '\\lim_{x \\to 0} \\frac{\\tan x}{x}',
      '\\lim_{x \\to 0} \\frac{1 - \\cos x}{x}',
      '\\lim_{x \\to 0} \\frac{x}{\\sin x}',
      '\\lim_{x \\to 0} \\frac{x}{\\tan x}'
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
  // --- 20 Soal TKA Matematika Tingkat Lanjut 2025/2026 (IRT 200 - 800) ---
  {
    id: 'q_mtk_lanjut_1',
    text: 'Diketahui $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$. Determinan matriks $A$ adalah ....',
    options: ['2', '5', '8', '10', '12'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: '$$\\det(A) = (2 \\cdot 4) - (1 \\cdot 3) = 8 - 3 = 5$$',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Aljabar & Matriks',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_2',
    text: 'Invers dari matriks $\\begin{pmatrix} 1 & 2 \\\\ 3 & 5 \\end{pmatrix}$ adalah ....',
    options: [
      '$\\begin{pmatrix} 5 & -2 \\\\ -3 & 1 \\end{pmatrix}$',
      '$\\begin{pmatrix} -5 & 2 \\\\ 3 & -1 \\end{pmatrix}$',
      '$\\begin{pmatrix} -5 & 2 \\\\ 3 & -1 \\end{pmatrix}$',
      '$\\begin{pmatrix} 5 & 2 \\\\ 3 & 1 \\end{pmatrix}$',
      'Matriks tidak memiliki invers.'
    ],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Determinannya = $1(5) - 2(3) = -1$.\n$$A^{-1} = \\frac{1}{-1} \\begin{pmatrix} 5 & -2 \\\\ -3 & 1 \\end{pmatrix} = \\begin{pmatrix} -5 & 2 \\\\ 3 & -1 \\end{pmatrix}$$',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Aljabar & Matriks',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_3',
    text: 'Jika $P(x) = x^3 - 4x^2 + x + 6$, maka sisa pembagian oleh $(x - 2)$ adalah ....',
    options: ['-4', '0', '2', '4', '8'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Berdasarkan Teorema Sisa, sisa pembagian $P(x)$ oleh $(x-2)$ adalah $P(2)$:\n$$P(2) = (2)^3 - 4(2)^2 + (2) + 6 = 8 - 16 + 2 + 6 = 0$$',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Polinomial',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_4',
    text: 'Faktor dari $x^2 - 7x + 12$ adalah ....',
    options: ['$(x - 2)(x - 5)$', '$(x - 3)(x - 4)$', '$(x + 3)(x - 4)$', '$(x + 2)(x - 6)$', '$(x - 1)(x - 12)$'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Dua bilangan yang dikalikan bernilai $12$ dan dijumlahkan bernilai $-7$ adalah $-3$ dan $-4$.\n$$x^2 - 7x + 12 = (x - 3)(x - 4)$$',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Mudah',
    bab: 'Aljabar',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_5',
    text: 'Domain fungsi $f(x) = \\frac{\\sqrt{x - 1}}{x - 4}$ adalah ....',
    options: ['$x > 1$', '$x \\ge 1$', '$x \\ge 1, x \\neq 4$', 'Semua bilangan real', '$x > 4$'],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Syarat bentuk akar: $x - 1 \\ge 0 \\implies x \\ge 1$.\nSyarat penyebut: $x - 4 \\neq 0 \\implies x \\neq 4$.\nDomain: $x \\ge 1, x \\neq 4$.',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Fungsi & Domain',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_6',
    text: 'Nilai dari $\\log_2 32 + \\log_2 \\frac{1}{8}$ adalah ....',
    options: ['1', '2', '3', '4', '5'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: '$$\\log_2 32 = 5 \\quad \\text{dan} \\quad \\log_2 \\frac{1}{8} = -3$$\n$$\\log_2 32 + \\log_2 \\frac{1}{8} = 5 + (-3) = 2$$',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Mudah',
    bab: 'Eksponen & Logaritma',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_7',
    text: 'Panjang vektor $\\vec{v} = (6, -8)$ adalah ....',
    options: ['8', '9', '10', '12', '14'],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: '$$|\\vec{v}| = \\sqrt{6^2 + (-8)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$$',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Mudah',
    bab: 'Vektor',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_8',
    text: 'Persamaan lingkaran berpusat di $(2, -1)$ dan berjari-jari $3$ adalah ....',
    options: [
      '$x^2 + y^2 = 9$',
      '$(x + 2)^2 + (y - 1)^2 = 9$',
      '$(x - 2)^2 + (y + 1)^2 = 9$',
      '$(x - 2)^2 + (y - 1)^2 = 3$',
      '$(x + 2)^2 + (y + 1)^2 = 9$'
    ],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Rumus persamaan lingkaran pusat $(a,b)$ dan jari-jari $r$:\n$$(x - a)^2 + (y - b)^2 = r^2$$\n$$(x - 2)^2 + (y - (-1))^2 = 3^2 \\implies (x - 2)^2 + (y + 1)^2 = 9$$',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Geometri Lingkaran',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_9',
    text: 'Titik $(3, -2)$ direfleksikan terhadap sumbu-$Y$. Hasil bayangannya adalah ....',
    options: ['(-3, -2)', '(3, 2)', '(-3, 2)', '(2, 3)', '(-2, 3)'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Refleksi titik $(x, y)$ terhadap sumbu-$Y$ menghasilkan $(-x, y)$.\nSehingga bayangan dari $(3, -2)$ adalah $(-3, -2)$.',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Mudah',
    bab: 'Transformasi Geometri',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_10',
    text: 'Nilai dari $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$ adalah ....',
    options: ['0', '2', '4', '6', 'Tak hingga'],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Faktorkan pembilang:\n$$\\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x-2} = \\lim_{x \\to 2} (x+2) = 2 + 2 = 4$$',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Mudah',
    bab: 'Kalkulus - Limit',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_11',
    text: 'Nilai dari $\\lim_{x \\to 0} \\frac{\\sin x}{x}$ adalah ....',
    options: ['0', '1', '2', 'Tidak ada', 'Tak hingga'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Berdasarkan identitas dan teorema dasar limit trigonometri:\n$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$$',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Mudah',
    bab: 'Kalkulus - Limit Trigonometri',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_12',
    text: 'Nilai dari $2^3 \\times 2^{-5}$ adalah ....',
    options: ['4', '2', '$\\frac{1}{4}$', '$\\frac{1}{2}$', '$\\frac{1}{8}$'],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: '$$2^3 \\times 2^{-5} = 2^{3 - 5} = 2^{-2} = \\frac{1}{2^2} = \\frac{1}{4}$$',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Mudah',
    bab: 'Eksponen',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_13',
    text: 'Manakah fungsi berikut yang memiliki domain semua bilangan real ($\\mathbb{R}$)? *(Pilih semua jawaban yang benar)*',
    options: [
      '$f(x) = x^2 + 1$',
      '$f(x) = \\sqrt{x}$',
      '$f(x) = 2^x$',
      '$f(x) = |x|$',
      '$f(x) = \\frac{1}{x}$'
    ],
    questionType: 'checkboxes',
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 2, 3],
    correctAnswer: 'A, C, D',
    explanation: '- $f(x)=x^2+1$: Polinomial, domain $\\mathbb{R}$ (Benar)\n- $f(x)=\\sqrt{x}$: Domain $x \\ge 0$ (Salah)\n- $f(x)=2^x$: Eksponensial, domain $\\mathbb{R}$ (Benar)\n- $f(x)=|x|$: Nilai mutlak, domain $\\mathbb{R}$ (Benar)\n- $f(x)=\\frac{1}{x}$: Domain $x \\neq 0$ (Salah)',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Fungsi & Domain',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_14',
    text: 'Manakah pernyataan yang merupakan hasil translasi oleh vektor $\\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}$? *(Pilih semua jawaban yang benar)*',
    options: [
      '$(x, y) \\rightarrow (x + 2, y - 3)$',
      '$(x, y) \\rightarrow (x - 2, y + 3)$',
      'Titik bergeser 2 satuan ke kanan',
      'Titik bergeser 3 satuan ke bawah',
      'Refleksi terhadap sumbu-$X$'
    ],
    questionType: 'checkboxes',
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 2, 3],
    correctAnswer: 'A, C, D',
    explanation: 'Translasi $\\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}$ menggeser titik $2$ satuan ke kanan ($+2$ pada $x$) dan $3$ satuan ke bawah ($-3$ pada $y$).\nSehingga $(x, y) \\rightarrow (x + 2, y - 3)$ adalah tepat.',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Transformasi Geometri',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_15',
    text: 'Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$. Pernyataan yang benar adalah .... *(Pilih semua jawaban yang benar)*',
    options: [
      'Determinan $A = -2$',
      'Determinan $A = 2$',
      'Matriks memiliki invers',
      'Matriks singular',
      'Ordo matriks adalah $2 \\times 2$'
    ],
    questionType: 'checkboxes',
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 2, 4],
    correctAnswer: 'A, C, E',
    explanation: '- $\\det(A) = (1 \\cdot 4) - (2 \\cdot 3) = -2$ (Benar)\n- Karena $\\det(A) \\neq 0$, matriks non-singular dan memiliki invers (Benar)\n- Ukuran matriks $2 \\times 2$ (Benar)',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Aljabar & Matriks',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_16',
    text: 'Manakah limit berikut yang bernilai 1? *(Pilih semua jawaban yang benar)*',
    options: [
      '$\\lim_{x \\to 0} \\frac{\\sin x}{x}$',
      '$\\lim_{x \\to 0} \\frac{\\tan x}{x}$',
      '$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x}$',
      '$\\lim_{x \\to 0} \\frac{x}{\\sin x}$',
      '$\\lim_{x \\to 0} \\frac{x}{\\tan x}$'
    ],
    questionType: 'checkboxes',
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 3, 4],
    correctAnswer: 'A, B, D, E',
    explanation: '- $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$\n- $\\lim_{x \\to 0} \\frac{\\tan x}{x} = 1$\n- $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0$\n- $\\lim_{x \\to 0} \\frac{x}{\\sin x} = 1$\n- $\\lim_{x \\to 0} \\frac{x}{\\tan x} = 1$',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sulit',
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
    explanation: '1) $\\det(I) = 1$ (Benar)\n2) Hanya matriks persegi dengan $\\det \\neq 0$ yang memiliki invers (Salah)\n3) Matriks singular didefinisikan sebagai matriks dengan $\\det = 0$ (Benar)',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Aljabar & Matriks',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_18',
    text: 'Tentukan kebenaran dari pernyataan fungsi eksponen dan logaritma berikut:\n1) Grafik fungsi eksponensial selalu melalui titik $(0,1)$.\n2) Fungsi logaritma merupakan invers fungsi eksponensial.\n3) Domain fungsi logaritma adalah semua bilangan real.',
    options: [
      '1) Benar, 2) Benar, 3) Benar',
      '1) Benar, 2) Benar, 3) Salah',
      '1) Benar, 2) Salah, 3) Salah',
      '1) Salah, 2) Benar, 3) Salah',
      '1) Salah, 2) Salah, 3) Benar'
    ],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: '1) $a^0 = 1$, memotong sumbu-$Y$ di $(0,1)$ (Benar)\n2) Logaritma merupakan invers dari eksponen (Benar)\n3) Domain $f(x)=\\log_a x$ hanya $x > 0$, bukan semua bilangan real (Salah)',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Eksponen & Logaritma',
    year: '2026'
  },
  {
    id: 'q_mtk_lanjut_19',
    text: 'Tentukan kebenaran dari pernyataan geometri berikut:\n1) Panjang vektor tidak pernah bernilai negatif.\n2) Refleksi terhadap sumbu-$X$ mengubah tanda koordinat $y$.\n3) Dilatasi dengan faktor skala 1 mengubah ukuran bangun.',
    options: [
      '1) Benar, 2) Benar, 3) Salah',
      '1) Benar, 2) Salah, 3) Benar',
      '1) Salah, 2) Benar, 3) Benar',
      '1) Benar, 2) Benar, 3) Benar',
      '1) Salah, 2) Salah, 3) Salah'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: '1) Panjang vektor $|\\vec{v}| \\ge 0$ (Benar)\n2) Refleksi sumbu-$X$: $(x,y) \\rightarrow (x,-y)$ (Benar)\n3) Dilatasi skala $k=1$ tidak mengubah ukuran ataupun bentuk (Salah)',
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
    explanation: '1) $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$ (Benar)\n2) Jika bentuk tak tentu $\\frac{0}{0}$, tidak bisa substitusi langsung (Salah)\n3) Syarat keberadaan limit adalah limit kiri = limit kanan (Benar)',
    subject: 'Matematika Tingkat Lanjut',
    difficulty: 'Sedang',
    bab: 'Kalkulus - Limit',
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
    text: 'Bacalah paragraf berikut!\n\n"Perkembangan teknologi kecerdasan buatan (AI) di bidang pendidikan telah memberikan dampak signifikan terhadap efisiensi pembelajaran. Kendati demikian, ketergantungan yang berlebihan pada teknologi AI berisiko mengikis kemampuan berpikir kritis serta kreativitas mandiri peserta didik jika tidak diimbangi dengan bimbingan pedagogis yang tepat."\n\nGagasan utama paragraf di atas adalah ....',
    options: [
      'Dampak positif AI terhadap pendidikan',
      'Pentingnya bimbingan guru dalam sekolah',
      'Perkembangan kecerdasan buatan di Indonesia',
      'Dampak AI dan risiko ketergantungan tanpa bimbingan tepat',
      'Kemampuan berpikir kritis siswa zaman sekarang'
    ],
    correctAnswerIndex: 3,
    correctAnswer: 'D',
    explanation: 'Gagasan utama mencakup dampak positif AI sekaligus risiko ketergantungannya yang memerlukan bimbingan pedagogis tepat.',
    subject: 'Bahasa Indonesia',
    difficulty: 'Sedang',
    bab: 'Ide Pokok & Teks Eksplanasi',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_2',
    text: 'Kalimat berikut yang merupakan kalimat efektif dan memenuhi aturan tata bahasa PUEBI/EYD adalah ....',
    options: [
      'Bagi seluruh siswa-siswa kelas XII diharapkan hadir tepat waktu di aula.',
      'Dalam rapat kemarin membicarakan tentang kelulusan ujian siswa.',
      'Kepala sekolah menyerahkan penghargaan kepada siswa berprestasi.',
      'Meskipun hujan deras, tetapi para siswa tetap antusias mengikuti ujian.',
      'Untuk mempercepat daripada waktu, acara segera kita mulai.'
    ],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Kalimat C memiliki subjek (Kepala sekolah), predikat (menyerahkan), dan objek (penghargaan) yang jelas tanpa pemborosan kata (pleonasme) atau konjungsi ganda.',
    subject: 'Bahasa Indonesia',
    difficulty: 'Sedang',
    bab: 'Kalimat Efektif & PUEBI',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_3',
    text: 'Manakah di antara pernyataan berikut yang termasuk fakta (bukan opini)?',
    options: [
      'Pendidikan di Indonesia merupakan yang terbaik di Asia Tenggara.',
      'Soal-soal ujian TKA Bahasa Indonesia sangat sulit dikerjakan.',
      'Ujian Sekolah Berbasis Komputer (CBT) diselenggarakan secara serentak.',
      'Belajar bahasa Inggris jauh lebih menarik daripada matematika.',
      'Siswa hendaknya belajar minimal 4 jam sehari agar lulus PTN.'
    ],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Pernyataan C dapat dibuktikan secara objektif dan memiliki data nyata, sehingga tergolong fakta.',
    subject: 'Bahasa Indonesia',
    difficulty: 'Mudah',
    bab: 'Fakta & Opini',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_4',
    text: 'Penulisan kata serapan yang baku dan benar menurut Kamus Besar Bahasa Indonesia (KBBI) terdapat pada kalimat ....',
    options: [
      'Sistem analisa data di laboratorium sudah terintegrasi.',
      'Kreatifitas dan inovasi sangat dibutuhkan di era digital.',
      'Praktik kerja lapangan dilaksanakan pada semester lima.',
      'Progres kwalitas pendidikan terus meningkat setiap tahun.',
      'Para pakar melakukan diagnosa terhadap penyakit tersebut.'
    ],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Kata "praktik" adalah bentuk baku (bukan praktek). Kata baku lainnya: sistem (bukan sistim), analisis (bukan analisa), kreativitas (bukan kreatifitas), kualitas (bukan kwalitas), diagnosis (bukan diagnosa).',
    subject: 'Bahasa Indonesia',
    difficulty: 'Sedang',
    bab: 'Ejaan & Kata Baku KBBI',
    year: '2026'
  },
  {
    id: 'q_tka_bindo_5',
    text: 'Bacalah cuplikan teks argumentasi berikut!\n\n"Diversifikasi pangan lokal seperti singkong dan sagu perlu terus ditingkatkan guna mengurangi ketergantungan nasional terhadap impor gandum. Selain menjaga ketahanan pangan, konsumsi pangan lokal juga dapat meningkatkan kesejahteraan petani daerah."\n\nSimpulan yang paling tepat dari paragraf di atas adalah ....',
    options: [
      'Singkong dan sagu adalah satu-satunya bahan pangan lokal Indonesia.',
      'Impor gandum harus dihentikan sepenuhnya mulai tahun ini.',
      'Peningkatan diversifikasi pangan lokal mendukung ketahanan pangan dan petani.',
      'Petani daerah hanya menggantungkan hidup dari tanaman singkong.',
      'Konsumsi gandum menurunkan tingkat kesejahteraan petani nasional.'
    ],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Simpulan merangkum dua manfaat utama diversifikasi pangan lokal yang disebutkan dalam teks, yaitu ketahanan pangan dan kesejahteraan petani.',
    subject: 'Bahasa Indonesia',
    difficulty: 'Sedang',
    bab: 'Teks Argumentasi & Simpulan',
    year: '2026'
  },
  {
    id: 'q_tka_bing_1',
    text: 'Read the text below!\n\n"Renewable energy technologies, such as solar panels and wind turbines, have experienced dramatic cost reductions over the past decade. Consequently, many developing countries are now bypassing fossil-fuel infrastructure in favor of clean energy solutions that offer both environmental and economic benefits."\n\nWhat is the main topic of the passage?',
    options: [
      'The decline of traditional oil companies in developing nations',
      'How solar panels are manufactured in modern factories',
      'The rising affordability and adoption of renewable energy',
      'The environmental disadvantages of wind power generators',
      'Government taxes on fossil fuel imports'
    ],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'The passage highlights how cost reductions in solar/wind technology lead to adoption of clean energy in developing countries.',
    subject: 'Bahasa Inggris',
    difficulty: 'Sedang',
    bab: 'Reading Comprehension & Main Idea',
    year: '2026'
  },
  {
    id: 'q_tka_bing_2',
    text: 'Choose the sentence with the correct grammatical structure (Subject-Verb Agreement and Tense):',
    options: [
      'Neither the teacher nor the students was aware of the schedule change.',
      'Each of the participants have submitted their final research paper.',
      'The team of researchers has conducted several groundbreaking experiments.',
      'If I was you, I will accept the scholarship offer immediately.',
      'Barely had he entered the room when the bell ring.'
    ],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: '"The team" is a singular collective noun acting as subject, so "has conducted" is correct.',
    subject: 'Bahasa Inggris',
    difficulty: 'Sedang',
    bab: 'Grammar & Structure',
    year: '2026'
  },
  {
    id: 'q_tka_bing_3',
    text: '"The scientist\'s **meticulous** approach to data collection ensured that no errors were overlooked during the experiment."\n\nThe underlined word "**meticulous**" is closest in meaning to ....',
    options: [
      'Careless',
      'Thorough and precise',
      'Hasty',
      'Ambiguous',
      'Superficial'
    ],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Meticulous means showing great attention to detail; extremely careful and precise.',
    subject: 'Bahasa Inggris',
    difficulty: 'Mudah',
    bab: 'Vocabulary in Context',
    year: '2026'
  },
  {
    id: 'q_tka_bing_4',
    text: '"If the government _____ more funds into public education last year, the literacy rate among rural youth would have improved significantly."\n\nWhich phrase correctly completes the conditional sentence?',
    options: [
      'invested',
      'has invested',
      'had invested',
      'would invest',
      'invests'
    ],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'This is a Third Conditional sentence referring to an unreal past situation (If + Past Perfect, would have + V3). So "had invested" is correct.',
    subject: 'Bahasa Inggris',
    difficulty: 'Sedang',
    bab: 'Conditional Sentences',
    year: '2026'
  },
  {
    id: 'q_tka_bing_5',
    text: 'Read the short paragraph:\n\n"Artificial intelligence tools can synthesize massive datasets in seconds. However, critical decision-making still demands human intuition, ethics, and emotional intelligence."\n\nWhat can be inferred from the paragraph?',
    options: [
      'AI will completely replace human workers in all industries within a year.',
      'AI efficiency cannot fully substitute human ethical judgment and intuition.',
      'Human intuition is slower and less reliable than raw AI processing power.',
      'Data analysis is no longer useful in modern corporate decision-making.',
      'AI tools are incapable of processing numerical data accurately.'
    ],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'The contrast ("However...") implies that despite AI\'s speed, human intuition and ethics remain indispensable.',
    subject: 'Bahasa Inggris',
    difficulty: 'Sedang',
    bab: 'Inference & Text Analysis',
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
    randomizeOptions: true,
    startDate: '2026-07-20',
    endDate: '2026-12-31',
    solvedCount: 680
  },
  {
    id: 'to3',
    name: 'Mini Tryout 1: Matematika & Logika Kuantitatif',
    duration: 30,
    passingGrade: 620,
    questionCount: 20,
    subject: 'Matematika Umum',
    category: 'UTBK',
    randomizeQuestions: false,
    randomizeOptions: true,
    startDate: '2026-07-10',
    endDate: '2026-08-31',
    solvedCount: 512
  },
  {
    id: 'to4',
    name: 'Mini Tryout 2: TPS & Penalaran Umum UTBK',
    duration: 25,
    passingGrade: 600,
    questionCount: 20,
    subject: 'Penalaran Umum & TPS',
    category: 'UTBK',
    randomizeQuestions: true,
    randomizeOptions: true,
    startDate: '2026-07-15',
    endDate: '2026-08-31',
    solvedCount: 428
  },
  {
    id: 'to6',
    name: 'Mini Tryout 4: Literasi Bahasa Indonesia & Inggris',
    duration: 25,
    passingGrade: 590,
    questionCount: 20,
    subject: 'Literasi Bahasa',
    category: 'UTBK',
    randomizeQuestions: true,
    randomizeOptions: true,
    startDate: '2026-07-20',
    endDate: '2026-08-31',
    solvedCount: 298
  },
  {
    id: 'to7',
    name: 'Mini Tryout 5: Penalaran Kuantitatif & Soshum',
    duration: 30,
    passingGrade: 605,
    questionCount: 20,
    subject: 'Penalaran Kuantitatif',
    category: 'UTBK',
    randomizeQuestions: true,
    randomizeOptions: true,
    startDate: '2026-07-21',
    endDate: '2026-08-31',
    solvedCount: 310
  },
  {
    id: 'to8',
    name: 'Mini Tryout 6: Tes Potensi Skolastik & Penalaran Matematika',
    duration: 35,
    passingGrade: 625,
    questionCount: 20,
    subject: 'TPS & Penalaran Matematika',
    category: 'UTBK',
    randomizeQuestions: true,
    randomizeOptions: true,
    startDate: '2026-07-22',
    endDate: '2026-09-30',
    solvedCount: 185
  }
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
        targetPTN: 'Universitas Indonesia',
        targetProdi: 'Teknik Informatika',
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
      targetPTN: 'Institut Teknologi Bandung',
      targetProdi: 'Sekolah Teknik Elektro & Informatika (STEI)',
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
      if (examId === 'to-tka-bindo-2026' || exam.subject === 'Bahasa Indonesia') return q.subject === 'Bahasa Indonesia' || q.id.startsWith('q_tka_bindo_');
      if (examId === 'to-tka-bing-2026' || exam.subject === 'Bahasa Inggris') return q.subject === 'Bahasa Inggris' || q.id.startsWith('q_tka_bing_');
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

    examQuestions.forEach(q => {
      if (!subjectBreakdown[q.subject]) {
        subjectBreakdown[q.subject] = { correct: 0, total: 0 };
      }
      subjectBreakdown[q.subject].total++;

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
        } else {
          wrongCount++;
        }
      } else {
        wrongCount++; // unanswered is marked wrong
      }
    });

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
      createdAt: new Date().toISOString()
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
  const list = FirestoreSimulator.getCollection<Question>('questions', INITIAL_QUESTIONS);
  const existingIds = new Set(list.map(q => q.id));
  let updated = false;
  INITIAL_QUESTIONS.filter(q => q.id.startsWith('q_mtk_slugpost_') || q.id.startsWith('q_limit_') || q.id.startsWith('q_mtk_lanjut_') || q.id.startsWith('q_integral_') || q.id.startsWith('q_turunan_') || q.id.startsWith('q_tka_bindo_') || q.id.startsWith('q_tka_bing_')).forEach(q => {
    if (!existingIds.has(q.id)) {
      list.unshift(q);
      updated = true;
    } else if (q.id.startsWith('q_turunan_')) {
      const idx = list.findIndex(item => item.id === q.id);
      if (idx !== -1 && list[idx].questionType !== q.questionType) {
        list[idx] = { ...list[idx], questionType: q.questionType, correctAnswerIndices: q.correctAnswerIndices };
        updated = true;
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

  const filtered = tryouts.filter(t => t.id !== 'to-tka-bindo-2026');
  if (filtered.length !== tryouts.length) {
    tryouts = filtered;
    updated = true;
  }

  // Ensure all INITIAL_TRYOUTS are synced into local storage if missing
  const existingIds = new Set(tryouts.map(t => t.id));
  INITIAL_TRYOUTS.forEach(initTo => {
    if (initTo.id !== 'to-tka-bindo-2026' && !existingIds.has(initTo.id)) {
      tryouts.unshift(initTo);
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

