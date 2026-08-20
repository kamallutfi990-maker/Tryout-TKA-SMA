import { UtbkQuestion } from '../types';

export const pkTryoutData: UtbkQuestion[] = [
  {
    id: 1,
    text: 'Jika garis $y = 2x + k$ menyinggung kurva parabola $y = x^2 - 4x + 12$, maka nilai konstanta $k$ adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '$1$' },
      { id: 'B', text: '$3$', correct: true },
      { id: 'C', text: '$5$' },
      { id: 'D', text: '$7$' },
      { id: 'E', text: '$9$' }
    ],
    correctAnswer: 'B',
    explanation: 'Substitusi persamaan garis ke kurva: $x^2 - 4x + 12 = 2x + k \\iff x^2 - 6x + (12 - k) = 0$.\nSyarat garis menyinggung kurva adalah diskriminan $D = 0$.\n$D = b^2 - 4ac = (-6)^2 - 4(1)(12 - k) = 0$.\n$36 - 48 + 4k = 0 \\iff 4k = 12 \\iff k = 3$.',
    topic: 'Persamaan Kuadrat & Kedudukan Garis',
    difficulty: 'Sedang'
  },
  {
    id: 2,
    text: 'Diketahui fungsi $f(x) = \\frac{2x - 3}{x + 4}$ dengan $x \\neq -4$. Nilai dari $f^{-1}(1)$ adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '$5$' },
      { id: 'B', text: '$6$' },
      { id: 'C', text: '$7$', correct: true },
      { id: 'D', text: '$8$' },
      { id: 'E', text: '$9$' }
    ],
    correctAnswer: 'C',
    explanation: 'Misal $f^{-1}(1) = x$, maka $f(x) = 1$.\n$\\frac{2x - 3}{x + 4} = 1 \\iff 2x - 3 = x + 4 \\iff x = 7$.\nJadi $f^{-1}(1) = 7$.',
    topic: 'Fungsi Invers',
    difficulty: 'Mudah'
  },
  {
    id: 3,
    text: 'Berapakah sisa pembagian dari $3^{2026}$ jika dibagi oleh $10$?',
    type: 'multiple',
    options: [
      { id: 'A', text: '$1$' },
      { id: 'B', text: '$3$' },
      { id: 'C', text: '$7$' },
      { id: 'D', text: '$9$', correct: true },
      { id: 'E', text: '$5$' }
    ],
    correctAnswer: 'D',
    explanation: 'Sisa pembagian oleh 10 sama dengan angka satuan dari $3^{2026}$.\nPola satuan perpangkatan 3:\n- $3^1 = 3$\n- $3^2 = 9$\n- $3^3 = 27$ (satuan 7)\n- $3^4 = 81$ (satuan 1)\nPola berulang setiap periode 4 suku.\nPangkat $2026 = 4 \\times 506 + 2$ (sisa 2).\nMaka angka satuan = satuan $3^2 = 9$.',
    topic: 'Teori Bilangan & Modulo Aritmetika',
    difficulty: 'Sedang'
  },
  {
    id: 4,
    text: 'Sebuah segitiga siku-siku memiliki panjang hipotenusa $13\\text{ cm}$ dan keliling $30\\text{ cm}$. Luas segitiga tersebut adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '$25\\text{ cm}^2$' },
      { id: 'B', text: '$30\\text{ cm}^2$', correct: true },
      { id: 'C', text: '$35\\text{ cm}^2$' },
      { id: 'D', text: '$60\\text{ cm}^2$' },
      { id: 'E', text: '$65\\text{ cm}^2$' }
    ],
    correctAnswer: 'B',
    explanation: 'Misal sisi siku-siku $a$ dan $b$, serta hipotenusa $c = 13$.\nKeliling: $a + b + 13 = 30 \\Rightarrow a + b = 17$.\nPhytagoras: $a^2 + b^2 = c^2 = 169$.\nKita tahu $(a + b)^2 = a^2 + b^2 + 2ab \\Rightarrow 17^2 = 169 + 2ab \\Rightarrow 289 - 169 = 2ab \\Rightarrow 2ab = 120 \\Rightarrow ab = 60$.\nLuas segitiga $= \\frac{1}{2}ab = \\frac{1}{2}(60) = 30\\text{ cm}^2$.',
    topic: 'Geometri Bidang Datar & Phytagoras',
    difficulty: 'Sedang'
  },
  {
    id: 5,
    text: 'Diketahui matriks $A = \\begin{pmatrix} 2 & 1 \\\\ 4 & 3 \\end{pmatrix}$. Determinan dari matriks $A^{-1} \\cdot (2A)^T$ adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '$2$' },
      { id: 'B', text: '$4$', correct: true },
      { id: 'C', text: '$8$' },
      { id: 'D', text: '$16$' },
      { id: 'E', text: '$1$' }
    ],
    correctAnswer: 'B',
    explanation: '$\\det(A) = (2)(3) - (1)(4) = 6 - 4 = 2$.\nSifat determinan matriks ordo $2 \\times 2$:\n$\\det(A^{-1}) = \\frac{1}{\\det(A)} = \\frac{1}{2}$.\n$\\det((2A)^T) = \\det(2A) = 2^2 \\cdot \\det(A) = 4 \\times 2 = 8$.\nMaka $\\det(A^{-1} \\cdot (2A)^T) = \\det(A^{-1}) \\times \\det((2A)^T) = \\frac{1}{2} \\times 8 = 4$.',
    topic: 'Matriks & Aljabar Linear',
    difficulty: 'Sedang'
  },
  {
    id: 6,
    text: 'Diberikan pertidaksamaan $\\frac{x - 2}{x + 3} \\leq 0$. Himpunan semua bilangan bulat $x$ yang memenuhi pertidaksamaan tersebut ada sebanyak...',
    type: 'multiple',
    options: [
      { id: 'A', text: '4' },
      { id: 'B', text: '5', correct: true },
      { id: 'C', text: '6' },
      { id: 'D', text: '7' },
      { id: 'E', text: 'Tak terhingga' }
    ],
    correctAnswer: 'B',
    explanation: 'Pembuat nol pembilang: $x = 2$. Pembuat nol penyebut: $x = -3$ (syarat $x \\neq -3$).\nUji tanda pada garis bilangan: daerah negatif berada pada rentang $-3 < x \\leq 2$.\nBilangan bulat yang memenuhi: $\\{-2, -1, 0, 1, 2\\}$.\nBanyaknya bilangan bulat $= 5$.',
    topic: 'Pertidaksamaan Rasional',
    difficulty: 'Sedang'
  },
  {
    id: 7,
    text: 'Nilai dari $\\lim_{x \\to 3} \\frac{x^2 - 9}{\\sqrt{x + 1} - 2}$ adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '12' },
      { id: 'B', text: '18' },
      { id: 'C', text: '24', correct: true },
      { id: 'D', text: '30' },
      { id: 'E', text: '36' }
    ],
    correctAnswer: 'C',
    explanation: 'Gunakan aturan L\'Hopital (turunan) atau kalikan bentuk sekawan:\n$\\frac{d}{dx}(x^2 - 9) = 2x$. Pada $x = 3$, nilainya $= 6$.\n$\\frac{d}{dx}(\\sqrt{x + 1} - 2) = \\frac{1}{2\\sqrt{x + 1}}$. Pada $x = 3$, nilainya $= \\frac{1}{2(2)} = \\frac{1}{4}$.\nMaka nilai limit $= \\frac{6}{1/4} = 24$.',
    topic: 'Kalkulus Limit Aljabar',
    difficulty: 'Sedang'
  },
  {
    id: 8,
    text: 'Dari 8 orang calon pengurus OSIS yang terdiri atas 5 laki-laki dan 3 perempuan, akan dipilih 3 orang perwakilan dengan syarat sekurang-kurangnya terpilih 1 orang perempuan. Banyaknya cara pemilihan perwakilan tersebut adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '36' },
      { id: 'B', text: '46', correct: true },
      { id: 'C', text: '56' },
      { id: 'D', text: '66' },
      { id: 'E', text: '72' }
    ],
    correctAnswer: 'B',
    explanation: 'Total seluruh kemungkinan memilih 3 dari 8: $\\binom{8}{3} = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56$.\nKemungkinan komplemen (tidak ada perempuan sama sekali / semua 3 terpilih laki-laki): $\\binom{5}{3} = \\frac{5 \\times 4 \\times 3}{3 \\times 2 \\times 1} = 10$.\nBanyak cara dengan syarat sekurang-kurangnya 1 perempuan $= 56 - 10 = 46$.',
    topic: 'Kombinatorika & Kaidah Pencacahan',
    difficulty: 'Sedang'
  },
  {
    id: 9,
    text: 'Diketahui sistem persamaan linear:\n$$\\begin{cases} 2x + 3y = 13 \\\\ 3x - y = 3 \\end{cases}$$\nNilai dari $5x + 2y$ adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '14' },
      { id: 'B', text: '16', correct: true },
      { id: 'C', text: '18' },
      { id: 'D', text: '20' },
      { id: 'E', text: '22' }
    ],
    correctAnswer: 'B',
    explanation: 'Dari persamaan (2): $y = 3x - 3$.\nSubstitusi ke persamaan (1): $2x + 3(3x - 3) = 13 \\iff 2x + 9x - 9 = 13 \\iff 11x = 22 \\iff x = 2$.\nMaka $y = 3(2) - 3 = 3$.\nNilai $5x + 2y = 5(2) + 2(3) = 10 + 6 = 16$. (Perhatikan bahwa $5x + 2y$ langsung merupakan hasil penjumlahan kedua persamaan: $(2x+3y)+(3x-y) = 13 + 3 = 16$).',
    topic: 'Sistem Persamaan Linear Dua Variabel (SPLDV)',
    difficulty: 'Mudah'
  },
  {
    id: 10,
    text: 'Dua buah dadu bermata 6 dilempar undi bersama-sama sebanyak satu kali. Peluang munculnya jumlah kedua mata dadu bernilai bilangan prima adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '$\\frac{5}{12}$', correct: true },
      { id: 'B', text: '$\\frac{7}{18}$' },
      { id: 'C', text: '$\\frac{1}{2}$' },
      { id: 'D', text: '$\\frac{4}{9}$' },
      { id: 'E', text: '$\\frac{11}{36}$' }
    ],
    correctAnswer: 'A',
    explanation: 'Jumlah mata dadu bilangan prima yang mungkin: 2, 3, 5, 7, 11.\n- Jumlah 2: (1,1) -> 1 titik\n- Jumlah 3: (1,2), (2,1) -> 2 titik\n- Jumlah 5: (1,4), (2,3), (3,2), (4,1) -> 4 titik\n- Jumlah 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> 6 titik\n- Jumlah 11: (5,6), (6,5) -> 2 titik\nTotal kejadian $= 1 + 2 + 4 + 6 + 2 = 15$ dari $36$ ruang sampel.\nPeluang $= \\frac{15}{36} = \\frac{5}{12}$.',
    topic: 'Teori Peluang',
    difficulty: 'Sedang'
  },
  {
    id: 11,
    text: 'Tentukan hubungan antara kuantitas $P$ dan kuantitas $Q$ berikut:\n- $P$: Luas persegi dengan panjang sisi $6\\text{ cm}$.\n- $Q$: Luas lingkaran dengan diameter $7\\text{ cm}$ (gunakan $\\pi = \\frac{22}{7}$).',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Kuantitas P lebih besar daripada Q.' },
      { id: 'B', text: 'Kuantitas Q lebih besar daripada P.', correct: true },
      { id: 'C', text: 'Kuantitas P sama dengan kuantitas Q.' },
      { id: 'D', text: 'Informasi yang diberikan tidak cukup untuk memutuskan.' }
    ],
    correctAnswer: 'B',
    explanation: 'Nilai $P = s^2 = 6^2 = 36\\text{ cm}^2$.\nNilai $Q = \\pi r^2 = \\frac{22}{7} \\times (3{,}5)^2 = \\frac{22}{7} \\times 12{,}25 = 38{,}5\\text{ cm}^2$.\nKarena $36 < 38{,}5$, maka $P < Q$ (Kuantitas Q lebih besar daripada P).',
    topic: 'Perbandingan Kuantitas P dan Q',
    difficulty: 'Sedang'
  },
  {
    id: 12,
    text: 'Diketahui $x$ dan $y$ adalah bilangan bulat positif dengan $x^2 - y^2 = 17$.\nManakah hubungan yang benar antara kuantitas $P$ dan $Q$?\n- $P = x + y$\n- $Q = 15$',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Kuantitas P lebih besar daripada Q.', correct: true },
      { id: 'B', text: 'Kuantitas Q lebih besar daripada P.' },
      { id: 'C', text: 'Kuantitas P sama dengan kuantitas Q.' },
      { id: 'D', text: 'Informasi yang diberikan tidak cukup untuk memutuskan.' }
    ],
    correctAnswer: 'A',
    explanation: 'Faktorisasi: $(x - y)(x + y) = 17$.\nKarena 17 adalah bilangan prima dan $x, y$ bilangan bulat positif, maka faktor yang mungkin adalah $(x - y) = 1$ dan $(x + y) = 17$.\nJadi nilai $P = x + y = 17$.\nKarena $17 > 15$, maka $P > Q$.',
    topic: 'Teori Bilangan & Perbandingan P vs Q',
    difficulty: 'Sedang'
  },
  {
    id: 13,
    text: 'Berapakah nilai dari bilangan real $x$?\n\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:\n(1) $x^2 - 4x + 4 = 0$\n(2) $2x + 6 = 10$',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.' },
      { id: 'B', text: 'Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.' },
      { id: 'C', text: 'DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.' },
      { id: 'D', text: 'Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.', correct: true },
      { id: 'E', text: 'Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan.' }
    ],
    correctAnswer: 'D',
    explanation: 'Dari (1): $(x - 2)^2 = 0 \\Rightarrow x = 2$ (unik, cukup).\nDari (2): $2x = 4 \\Rightarrow x = 2$ (unik, cukup).\nKarena masing-masing pernyataan secara terpisah memberikan nilai $x$ tunggal, maka pernyataan (1) SAJA cukup dan pernyataan (2) SAJA cukup (Pilihan D).',
    topic: 'Kecukupan Data (Data Sufficiency)',
    difficulty: 'Mudah'
  },
  {
    id: 14,
    text: 'Apakah segiempat $ABCD$ merupakan sebuah persegi panjang?\n\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:\n(1) Keempat sudut pada segiempat $ABCD$ adalah sudut siku-siku ($90^\\circ$).\n(2) Kedua diagonal segiempat $ABCD$ sama panjang dan saling berpotongan tegak lurus.',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.', correct: true },
      { id: 'B', text: 'Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.' },
      { id: 'C', text: 'DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.' },
      { id: 'D', text: 'Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.' },
      { id: 'E', text: 'Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan.' }
    ],
    correctAnswer: 'A',
    explanation: 'Definisi persegi panjang adalah segi empat yang keempat sudutnya siku-siku. Jadi (1) SAJA sudah pasti cukup.\nPernyataan (2) mendefinisikan layang-layang / persegi, tetapi belum tentu hanya persegi panjang umum. Jadi (1) SAJA cukup.',
    topic: 'Kecukupan Data Geometri',
    difficulty: 'Sedang'
  },
  {
    id: 15,
    text: 'Jika $f(x) = ax + b$ dengan $f(2) = 7$ dan $f(5) = 16$, maka nilai dari $f(-1)$ adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '$-4$' },
      { id: 'B', text: '$-2$', correct: true },
      { id: 'C', text: '$0$' },
      { id: 'D', text: '$1$' },
      { id: 'E', text: '$3$' }
    ],
    correctAnswer: 'B',
    explanation: 'Kemiringan $a = \\frac{f(5) - f(2)}{5 - 2} = \\frac{16 - 7}{3} = \\frac{9}{3} = 3$.\n$f(2) = 3(2) + b = 7 \\Rightarrow 6 + b = 7 \\Rightarrow b = 1$.\nRumus fungsi: $f(x) = 3x + 1$.\nMaka $f(-1) = 3(-1) + 1 = -3 + 1 = -2$.',
    topic: 'Fungsi Linear',
    difficulty: 'Mudah'
  }
];
