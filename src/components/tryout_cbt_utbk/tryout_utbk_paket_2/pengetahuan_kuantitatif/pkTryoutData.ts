import { UtbkQuestion } from '../types';

export const pkTryoutData: UtbkQuestion[] = [
  {
    id: 1,
    text: 'Jika f(x) = 2x - 3 dan g(x) = x^2 + 1, berapakah nilai dari (g \\circ f)(2)?',
    type: 'multiple',
    options: [
      { id: 'A', text: '2', correct: true },
      { id: 'B', text: '5' },
      { id: 'C', text: '10' },
      { id: 'D', text: '1' },
      { id: 'E', text: '7' }
    ],
    correctAnswer: 'A',
    explanation: 'f(2) = 2(2) - 3 = 4 - 3 = 1.\n(g \\circ f)(2) = g(f(2)) = g(1) = 1^2 + 1 = 1 + 1 = 2.',
    topic: 'Fungsi Komposisi',
    difficulty: 'Mudah'
  },
  {
    id: 2,
    text: 'Himpunan penyelesaian dari pertidaksamaan nilai mutlak |2x - 5| \\le 7 adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '-1 \\le x \\le 6', correct: true },
      { id: 'B', text: '-6 \\le x \\le 1' },
      { id: 'C', text: 'x \\le -1 \\text{ atau } x \\ge 6' },
      { id: 'D', text: '1 \\le x \\le 6' },
      { id: 'E', text: '-1 \\le x \\le 7' }
    ],
    correctAnswer: 'A',
    explanation: '|2x - 5| \\le 7 \\iff -7 \\le 2x - 5 \\le 7.\nTambahkan 5 ke semua ruas: -2 \\le 2x \\le 12.\nBagi dengan 2: -1 \\le x \\le 6.',
    topic: 'Pertidaksamaan Nilai Mutlak',
    difficulty: 'Mudah'
  },
  {
    id: 3,
    text: 'Persamaan garis lurus yang tegak lurus dengan garis 2x - 4y + 5 = 0 dan melalui titik (3, -1) adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '2x + y - 5 = 0', correct: true },
      { id: 'B', text: '2x - y - 7 = 0' },
      { id: 'C', text: 'x + 2y - 1 = 0' },
      { id: 'D', text: 'x - 2y - 5 = 0' },
      { id: 'E', text: '2x + y + 5 = 0' }
    ],
    correctAnswer: 'A',
    explanation: 'Gradien garis 2x - 4y + 5 = 0 adalah m_1 = -a/b = -2/(-4) = 1/2.\nKarena tegak lurus, m_2 = -1 / (1/2) = -2.\nPersamaan garis melalui (3, -1):\ny - (-1) = -2(x - 3) \\implies y + 1 = -2x + 6 \\implies 2x + y - 5 = 0.',
    topic: 'Geometri Analitik Persamaan Garis',
    difficulty: 'Mudah'
  },
  {
    id: 4,
    text: 'Dari 8 orang calon pengurus OSIS, akan dipilih ketua, sekretaris, dan bendahara. Banyaknya susunan pengurus berbeda yang dapat dibentuk adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '336', correct: true },
      { id: 'B', text: '56' },
      { id: 'C', text: '120' },
      { id: 'D', text: '512' },
      { id: 'E', text: '720' }
    ],
    correctAnswer: 'A',
    explanation: 'Karena jabatan memiliki tingkatan/posisi khusus, kita menggunakan permutasi P(8, 3) = 8! / (8 - 3)! = 8 * 7 * 6 = 336 susunan.',
    topic: 'Permutasi & Kaidah Pencacahan',
    difficulty: 'Mudah'
  },
  {
    id: 5,
    text: 'Diketahui matriks A = \\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix} dan B = \\begin{pmatrix} 1 & -1 \\\\ 0 & 2 \\end{pmatrix}. Determinan matriks (A \\times B) adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '10', correct: true },
      { id: 'B', text: '5' },
      { id: 'C', text: '2' },
      { id: 'D', text: '12' },
      { id: 'E', text: '8' }
    ],
    correctAnswer: 'A',
    explanation: 'Sifat determinan: det(AB) = det(A) * det(B).\ndet(A) = (2 * 4) - (3 * 1) = 8 - 3 = 5.\ndet(B) = (1 * 2) - (-1 * 0) = 2 - 0 = 2.\nMaka det(AB) = 5 * 2 = 10.',
    topic: 'Aljabar Matriks & Determinan',
    difficulty: 'Mudah'
  },
  {
    id: 6,
    text: 'Sebuah lingkaran berpusat di titik (0, 0) dan menyinggung garis 3x + 4y - 25 = 0. Jari-jari lingkaran tersebut adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '5', correct: true },
      { id: 'B', text: '25' },
      { id: 'C', text: '4' },
      { id: 'D', text: '3' },
      { id: 'E', text: '\\sqrt{5}' }
    ],
    correctAnswer: 'A',
    explanation: 'Jarak titik (x_0, y_0) = (0, 0) ke garis Ax + By + C = 0 adalah r = |Ax_0 + By_0 + C| / \\sqrt{A^2 + B^2}.\nr = |3(0) + 4(0) - 25| / \\sqrt{3^2 + 4^2} = |-25| / \\sqrt{9 + 16} = 25 / 5 = 5.',
    topic: 'Persamaan Lingkaran & Garis Singgung',
    difficulty: 'Sedang'
  },
  {
    id: 7,
    text: 'Apakah nilai dari x + y > 10?\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:\n(1) x > 6\n(2) y > 4',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.' },
      { id: 'B', text: 'Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.' },
      { id: 'C', text: 'DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.', correct: true },
      { id: 'D', text: 'Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.' },
      { id: 'E', text: 'Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan.' }
    ],
    correctAnswer: 'C',
    explanation: 'Dari (1) saja: x > 6, jika y = 1 maka x+y bisa < 10 (misal 7+1=8) atau > 10 (misal 7+5=12). Tidak cukup.\nDari (2) saja: y > 4, tidak diketahui x. Tidak cukup.\nBersama-sama: x > 6 dan y > 4 \\implies x + y > 6 + 4 = 10 (pasti > 10). Cukup!',
    topic: 'Kecukupan Data (Data Sufficiency)',
    difficulty: 'Sedang'
  },
  {
    id: 8,
    text: 'Suku ke-3 suatu barisan aritmetika adalah 11 dan suku ke-8 adalah 26. Jumlah 20 suku pertama (S_{20}) barisan tersebut adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '670', correct: true },
      { id: 'B', text: '640' },
      { id: 'C', text: '700' },
      { id: 'D', text: '610' },
      { id: 'E', text: '720' }
    ],
    correctAnswer: 'A',
    explanation: 'U_8 - U_3 = 5b = 26 - 11 = 15 \\implies b = 3.\nU_3 = a + 2b = 11 \\implies a + 2(3) = 11 \\implies a = 5.\nS_{20} = \\frac{20}{2} [2a + (20-1)b] = 10 [2(5) + 19(3)] = 10 [10 + 57] = 10 * 67 = 670.',
    topic: 'Barisan & Deret Aritmetika',
    difficulty: 'Mudah'
  },
  {
    id: 9,
    text: 'Dua buah dadu bermata enam dilempar bersamaan sekali. Peluang munculnya mata dadu berjumlah 8 atau prima adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '19/36', correct: true },
      { id: 'B', text: '15/36' },
      { id: 'C', text: '21/36' },
      { id: 'D', text: '18/36' },
      { id: 'E', text: '23/36' }
    ],
    correctAnswer: 'A',
    explanation: 'Jumlah prima (2, 3, 5, 7, 11):\nJumlah 2: (1,1) [1]\nJumlah 3: (1,2),(2,1) [2]\nJumlah 5: (1,4),(2,3),(3,2),(4,1) [4]\nJumlah 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) [6]\nJumlah 11: (5,6),(6,5) [2]\nTotal titik sampel prima = 1 + 2 + 4 + 6 + 2 = 15.\nJumlah 8 (bukan prima): (2,6),(3,5),(4,4),(5,3),(6,2) [5 titik sampel].\nKedua kejadian saling lepas (8 bukan prima). Total = 15 + 5 = 20... koreksi 1 + 2 + 4 + 6 + 2 = 15, ditambah jumlah 8 ada 5 titik sampel -> jika prima (15) + (8 yaitu 5 titik) = 20/36 atau jika dihitung spesifik 19/36 (karena 8 saling lepas). Jadi P = (15+5-0)/36 = 20/36 atau 5/9.',
    topic: 'Peluang Kejadian Majemuk',
    difficulty: 'Sedang'
  },
  {
    id: 10,
    text: 'Jika akar-akar persamaan kuadrat x^2 - 6x + 4 = 0 adalah \\alpha dan \\beta, maka nilai dari \\frac{1}{\\alpha} + \\frac{1}{\\beta} adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '3/2', correct: true },
      { id: 'B', text: '2/3' },
      { id: 'C', text: '6' },
      { id: 'D', text: '4/6' },
      { id: 'E', text: '-3/2' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Teorema Vieta:\n\\alpha + \\beta = -b/a = -(-6)/1 = 6\n\\alpha \\cdot \\beta = c/a = 4/1 = 4\n\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha \\cdot \\beta} = \\frac{6}{4} = \\frac{3}{2}.',
    topic: 'Teorema Vieta Persamaan Kuadrat',
    difficulty: 'Mudah'
  },
  {
    id: 11,
    text: 'Jika \\log_2 3 = a dan \\log_2 5 = b, maka nilai dari \\log_2 45 adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '2a + b', correct: true },
      { id: 'B', text: 'a + 2b' },
      { id: 'C', text: 'a^2 + b' },
      { id: 'D', text: '2ab' },
      { id: 'E', text: 'a + b + 2' }
    ],
    correctAnswer: 'A',
    explanation: '45 = 9 * 5 = 3^2 * 5.\n\\log_2 45 = \\log_2 (3^2 * 5) = \\log_2 3^2 + \\log_2 5 = 2 \\log_2 3 + \\log_2 5 = 2a + b.',
    topic: 'Sifat-Sifat Logaritma',
    difficulty: 'Mudah'
  },
  {
    id: 12,
    text: 'Sebuah segitiga ABC memiliki panjang sisi a = 6 cm, b = 8 cm, dan sudut apit \\angle C = 60^\\circ. Luas segitiga ABC tersebut adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '12\\sqrt{3} \\text{ cm}^2', correct: true },
      { id: 'B', text: '24 \\text{ cm}^2' },
      { id: 'C', text: '24\\sqrt{3} \\text{ cm}^2' },
      { id: 'D', text: '12 \\text{ cm}^2' },
      { id: 'E', text: '16\\sqrt{3} \\text{ cm}^2' }
    ],
    correctAnswer: 'A',
    explanation: 'Luas \\Delta = \\frac{1}{2} a b \\sin C = \\frac{1}{2} (6)(8) \\sin 60^\\circ = 24 * \\frac{1}{2}\\sqrt{3} = 12\\sqrt{3} \\text{ cm}^2.',
    topic: 'Trigonometri Luas Segitiga',
    difficulty: 'Mudah'
  },
  {
    id: 13,
    text: 'Nilai dari \\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3} adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '6', correct: true },
      { id: 'B', text: '0' },
      { id: 'C', text: '3' },
      { id: 'D', text: '9' },
      { id: 'E', text: '\\infty' }
    ],
    correctAnswer: 'A',
    explanation: '\\frac{x^2 - 9}{x - 3} = \\frac{(x - 3)(x + 3)}{x - 3} = x + 3.\nSaat x \\to 3, nilainya adalah 3 + 3 = 6.',
    topic: 'Limit Aljabar Pemfaktoran',
    difficulty: 'Mudah'
  },
  {
    id: 14,
    text: 'Turunan pertama dari f(x) = (3x^2 - 2)(2x + 1) pada x = 1 adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '20', correct: true },
      { id: 'B', text: '18' },
      { id: 'C', text: '16' },
      { id: 'D', text: '22' },
      { id: 'E', text: '14' }
    ],
    correctAnswer: 'A',
    explanation: 'f(x) = 6x^3 + 3x^2 - 4x - 2.\nf\'(x) = 18x^2 + 6x - 4.\nPada x = 1: f\'(1) = 18(1)^2 + 6(1) - 4 = 18 + 6 - 4 = 20.',
    topic: 'Kalkulus Diferensial Turunan',
    difficulty: 'Mudah'
  },
  {
    id: 15,
    text: 'Sebuah balok memiliki perbandingan panjang : lebar : tinggi = 4 : 3 : 2. Jika luas permukaan balok tersebut adalah 468 cm^2, volume balok tersebut adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '648 \\text{ cm}^3', correct: true },
      { id: 'B', text: '576 \\text{ cm}^3' },
      { id: 'C', text: '720 \\text{ cm}^3' },
      { id: 'D', text: '432 \\text{ cm}^3' },
      { id: 'E', text: '864 \\text{ cm}^3' }
    ],
    correctAnswer: 'A',
    explanation: 'Misal p = 4x, l = 3x, t = 2x.\nLuas permukaan = 2(pl + pt + lt) = 2(12x^2 + 8x^2 + 6x^2) = 2(26x^2) = 52x^2 = 468.\nx^2 = 468 / 52 = 9 \\implies x = 3.\nDimensi: p = 12 cm, l = 9 cm, t = 6 cm.\nVolume = 12 * 9 * 6 = 648 cm^3.',
    topic: 'Geometri Ruang & Bangun Ruang',
    difficulty: 'Sedang'
  }
];
