import { UtbkQuestion } from '../types';

const TEKS_1_ALGORITMA = `**Teks 1 (untuk soal nomor 5 – 7)**

Perhatikan algoritma yang disajikan pada diagram alir (*flowchart*) berikut:

\`\`\`text
[ Mulai ]
    │
    ▼
[ Input k ]
    │
    ▼
[ l = 10 - k ]
    │
    ▼
< Apakah k > l ? >
   ├─── [YA]  ───────► [ m = KPK(k, l) ] ──► [ n = (m + s) / 2 ] ──┐
   │                                                               │
   └─── [TIDAK] ─────► [ n = (l + t) / 3 ] ────────────────────────┼──► [ Output n ] ──► [ Selesai ]
\`\`\`

**Keterangan:**
* $\\text{KPK}(k, l)$ menyatakan kelipatan persekutuan terkecil dari $k$ dan $l$.
* Bilangan rasional $s$ dan $t$ memenuhi keadaan:
  * Input $k = 5$ menghasilkan $n = \\frac{3}{2}$
  * Input $k = 6$ menghasilkan $n = 3$`;

const TEKS_2_JAJARGENJANG = `**Teks 2 (untuk soal nomor 8 – 10)**

Jajar genjang $ABCD$ memiliki luas $24$.
Titik-titik sudutnya pada bidang koordinat Kartesius adalah $A(0,0)$, $B(6,0)$, $D(2,y)$, dan titik $C(a,b)$ berada di kuadran I.

*(Ilustrasi: Titik $A(0,0)$ pada pusat koordinat, alas $AB$ sepanjang $6$ satuan pada sumbu-X, titik $D(2,y)$ dan titik $C(a,b)$ membentuk jajar genjang $ABCD$ berluas 24)*`;

export const pkTryoutData: UtbkQuestion[] = [
  // =========================================================================
  // SLIDE 01 / SOAL NO. 01
  // =========================================================================
  {
    id: 1,
    text: 'Urutan tiga bilangan $2 - \\frac{1}{3}\\ ;\\ 1,67\\ ;\\ 166,7\\%$ dari yang terkecil ke yang terbesar adalah . . .',
    type: 'multiple',
    options: [
      { id: 'A', text: '$2 - \\frac{1}{3}\\ ;\\ 1,67\\ ;\\ 166,7\\%$' },
      { id: 'B', text: '$166,7\\%\\ ;\\ 2 - \\frac{1}{3}\\ ;\\ 1,67$' },
      { id: 'C', text: '$1,67\\ ;\\ 2 - \\frac{1}{3}\\ ;\\ 166,7\\%$' },
      { id: 'D', text: '$166,7\\%\\ ;\\ 1,67\\ ;\\ 2 - \\frac{1}{3}$' },
      { id: 'E', text: '$2 - \\frac{1}{3}\\ ;\\ 166,7\\%\\ ;\\ 1,67$', correct: true }
    ],
    correctAnswer: 'E',
    explanation: `**Kunci Jawaban: E ($2 - \\frac{1}{3}\\ ;\\ 166,7\\%\\ ;\\ 1,67$)**

**Konsep:** Membandingkan dan Mengurutkan Bilangan Real / Pecahan / Persentase.

**Langkah Pembahasan:**
Konversikan setiap bentuk bilangan ke dalam format desimal untuk membandingkan nilainya:
1. $2 - \\frac{1}{3} = \\frac{5}{3} \\approx 1,6666... = 1,667$
2. $166,7\\% = \\frac{166,7}{100} = 1,6670$
3. $1,67 = 1,6700$

Urutan dari yang terkecil ke terbesar:
$$2 - \\frac{1}{3}\\ (1,666...) < 166,7\\%\\ (1,6670) < 1,67\\ (1,6700)$$

Maka urutan yang benar dari terkecil ke terbesar adalah:
$$\\mathbf{2 - \\frac{1}{3}\\ ;\\ 166,7\\%\\ ;\\ 1,67}$$`,
    topic: 'Operasi Bilangan Real & Desimal',
    difficulty: 'Mudah',
    videoUrl: 'https://youtu.be/kZ0Zrw6d_JE?si=FSs6qpOAeHhuOaT5',
    videoTitle: 'Pembahasan Soal 1 Pengetahuan Kuantitatif UTBK 2025',
    videoThumbnail: 'https://img.youtube.com/vi/kZ0Zrw6d_JE/hqdefault.jpg'
  },

  // =========================================================================
  // SLIDE 02 / SOAL NO. 02
  // =========================================================================
  {
    id: 2,
    text: `Perhatikan konsep jarak vertikal berikut:

Jarak vertikal sembarang titik $(x_0, y_0)$ ke garis $l: y = mx + n$ didefinisikan sebagai $|y_0 - (mx_0 + n)|$. Sebagai contoh, jarak vertikal titik $A(1,6)$ dan $B(5,4)$ ke garis $l$ pada ilustrasi koordinat berturut-turut adalah $3$ dan $2$.

Median jarak vertikal titik $(1, 1)$, $(2, 2)$, dan $(3, 3)$ ke garis $k: y = x - 4$ adalah . . .`,
    type: 'multiple',
    options: [
      { id: 'A', text: '4', correct: true },
      { id: 'B', text: '6' },
      { id: 'C', text: '8' },
      { id: 'D', text: '10' },
      { id: 'E', text: '12' }
    ],
    correctAnswer: 'A',
    explanation: `**Kunci Jawaban: A (4)**

**Konsep:** Geometri Analitik Jarak Vertikal & Nilai Median.

**Langkah Pembahasan:**
Rumus jarak vertikal sembarang titik $(x_0, y_0)$ ke garis $k: y = x - 4$ adalah:
$$d_v = |y_0 - (x_0 - 4)| = |y_0 - x_0 + 4|$$

Hitung jarak vertikal untuk ketiga titik:
* **Titik $(1, 1)$:** $|1 - 1 + 4| = |4| = 4$
* **Titik $(2, 2)$:** $|2 - 2 + 4| = |4| = 4$
* **Titik $(3, 3)$:** $|3 - 3 + 4| = |4| = 4$

Kumpulan nilai jarak vertikal adalah $\\{4, 4, 4\\}$.
Karena semua nilai bernilai $4$, maka median dari kumpulan data tersebut adalah **4**.`,
    topic: 'Geometri Analitik & Median',
    difficulty: 'Mudah',
    videoUrl: 'https://youtu.be/H1f0l8aGdqY?si=XdLL3OlxC6TM8sxy',
    videoTitle: 'Pembahasan Soal 2 Pengetahuan Kuantitatif UTBK 2025',
    videoThumbnail: 'https://img.youtube.com/vi/H1f0l8aGdqY/hqdefault.jpg'
  },

  // =========================================================================
  // SLIDE 03 / SOAL NO. 03
  // =========================================================================
  {
    id: 3,
    text: `Sistem persamaan linear dalam variabel $x, y$ dan $z$:
$$\\begin{cases} 2x + 2y + z = 9 \\\\ 2x - 2y + z = 1 \\\\ 4x + 2z = 10 \\\\ z - 2y = m \\end{cases}$$
Memiliki solusi $x = a$, $y = b$, dan $z = c$.

Pernyataan mana saja yang bernilai benar berdasarkan informasi di atas?
(1) $2a + c = 5$
(2) $2a + 2b + c = 9$
(3) $2a - b + c = 3$
(4) $a = 1$ jika $m = -3$`,
    type: 'multiple',
    options: [
      { id: 'A', text: '(1), (2), dan (3)', correct: true },
      { id: 'B', text: '(1) dan (3)' },
      { id: 'C', text: '(2) dan (4)' },
      { id: 'D', text: '(4)' },
      { id: 'E', text: 'Semua pernyataan benar' }
    ],
    correctAnswer: 'A',
    explanation: `**Kunci Jawaban: A ((1), (2), dan (3))**

**Konsep:** Sistem Persamaan Linear Tiga Variabel (SPLTV).

**Langkah Pembahasan:**
1. Dari persamaan (3):
   $$4x + 2z = 10 \\implies 2x + z = 5$$
   Karena solusinya adalah $(x=a, y=b, z=c)$, maka $2a + c = 5$ (**Pernyataan 1 BENAR**).

2. Substitusi $2x + z = 5$ ke persamaan (1):
   $$(2x + z) + 2y = 9 \\implies 5 + 2y = 9 \\implies 2y = 4 \\implies y = b = 2$$

3. Uji setiap pernyataan:
   * **Pernyataan (1):** $2a + c = 5$ $\\rightarrow$ **BENAR**.
   * **Pernyataan (2):** $2a + 2b + c = (2a + c) + 2b = 5 + 2(2) = 5 + 4 = 9$ $\\rightarrow$ **BENAR**.
   * **Pernyataan (3):** $2a - b + c = (2a + c) - b = 5 - 2 = 3$ $\\rightarrow$ **BENAR**.
   * **Pernyataan (4):** Dari persamaan (4): $z - 2y = m \\implies c - 2(2) = m \\implies c = m + 4$.
     Jika $m = -3$, maka $c = -3 + 4 = 1$.
     Karena $2a + c = 5 \\implies 2a + 1 = 5 \\implies 2a = 4 \\implies a = 2$.
     (Pernyataan menyatakan $a = 1$, sehingga pernyataan 4 **SALAH**).

Maka pernyataan yang bernilai benar adalah **(1), (2), dan (3)**.`,
    topic: 'Sistem Persamaan Linear Tiga Variabel',
    difficulty: 'Sedang',
    videoUrl: 'https://youtu.be/nVVB4KmGU8w?si=_TuV28WM-F5CPtbH',
    videoTitle: 'Pembahasan Soal 3 Pengetahuan Kuantitatif UTBK 2025',
    videoThumbnail: 'https://img.youtube.com/vi/nVVB4KmGU8w/hqdefault.jpg'
  },

  // =========================================================================
  // SLIDE 04 / SOAL NO. 04
  // =========================================================================
  {
    id: 4,
    text: `Daerah $S$ dari bidang kartesius adalah himpunan semua solusi dari sistem pertidaksamaan linear:
$$\\begin{cases} 2x + y \\ge 7 \\\\ 5x - y \\ge 5 \\\\ y \\le -5 \\end{cases}$$

Pernyataan mana saja yang bernilai benar berdasarkan informasi di atas?
(1) Titik $(5, -4)$ terletak di dalam daerah $S$
(2) Lingkaran dengan pusat $(0, 0)$ dan jari-jari 4 beririsan dengan $S$
(3) Garis $x = 5$ memotong daerah $S$
(4) Seluruh daerah $S$ terletak di kuadran keempat`,
    type: 'multiple',
    options: [
      { id: 'A', text: '(1), (2), dan (3)' },
      { id: 'B', text: '(1) dan (3)' },
      { id: 'C', text: '(2) dan (4)' },
      { id: 'D', text: '(4)', correct: true },
      { id: 'E', text: 'Semua pernyataan benar' }
    ],
    correctAnswer: 'D',
    explanation: `**Kunci Jawaban: D ((4) saja)**

**Konsep:** Program Linear & Daerah Penyelesaian Bidang Kartesius.

**Langkah Pembahasan:**
Analisis daerah $S$:
* $y \\le -5$
* $2x + y \\ge 7 \\implies y \\ge 7 - 2x$
* $5x - y \\ge 5 \\implies y \\le 5x - 5$

Dari relasi $y \\le -5$ dan $y \\ge 7 - 2x$:
$$-5 \\ge y \\ge 7 - 2x \\implies -5 \\ge 7 - 2x \\implies 2x \\ge 12 \\implies x \\ge 6$$

Untuk $x \\ge 6$ dan $y \\le -5$, maka batas $y \\le 5x - 5$ ($y \\le 25$) otomatis selalu terpenuhi karena $y \\le -5 < 25$.

**Uji Pernyataan:**
1. Titik $(5, -4)$: memiliki koordinat $y = -4 > -5$, sehingga melanggar syarat $y \\le -5$ (**SALAH**).
2. Lingkaran $x^2 + y^2 \\le 4^2 = 16$. Untuk setiap titik di daerah $S$, berlaku $x \\ge 6$ dan $y \\le -5$, sehingga $x^2 + y^2 \\ge 6^2 + (-5)^2 = 36 + 25 = 61 > 16$. Daerah $S$ berada di luar lingkaran dan tidak beririsan (**SALAH**).
3. Garis $x = 5$: karena seluruh daerah $S$ berada pada rentang absis $x \\ge 6$, garis $x = 5$ tidak pernah memotong $S$ (**SALAH**).
4. Karena seluruh titik $(x, y) \\in S$ memiliki $x \\ge 6 > 0$ (positif) dan $y \\le -5 < 0$ (negatif), maka seluruh daerah $S$ terletak di **Kuadran IV** (**BENAR**).

Jadi hanya pernyataan **(4)** yang bernilai benar.`,
    topic: 'Sistem Pertidaksamaan Linear',
    difficulty: 'Sedang',
    videoUrl: 'https://youtu.be/fIQX0bAumtY?si=CBXToQOrujhoV-ad',
    videoTitle: 'Pembahasan Soal 4 Pengetahuan Kuantitatif UTBK 2025',
    videoThumbnail: 'https://img.youtube.com/vi/fIQX0bAumtY/hqdefault.jpg'
  },

  // =========================================================================
  // SLIDE 05 / SOAL NO. 05
  // =========================================================================
  {
    id: 5,
    readingText: TEKS_1_ALGORITMA,
    text: 'Berdasarkan algoritma diagram alir di atas, nilai $t$ adalah . . .',
    type: 'multiple',
    options: [
      { id: 'A', text: '$-\\frac{1}{2}$', correct: true },
      { id: 'B', text: '$-1$' },
      { id: 'C', text: '$-\\frac{3}{2}$' },
      { id: 'D', text: '$-2$' },
      { id: 'E', text: '$-\\frac{5}{2}$' }
    ],
    correctAnswer: 'A',
    explanation: `**Kunci Jawaban: A ($-\\frac{1}{2}$)**

**Konsep:** Logika Algoritma & Percabangan Kondisional.

**Langkah Pembahasan:**
Diketahui input $k = 5$ menghasilkan output $n = \\frac{3}{2}$:
1. Hitung nilai $l$:
   $$l = 10 - k = 10 - 5 = 5$$
2. Evaluasi kondisi: Apakah $k > l$?
   $$5 > 5 \\implies \\textbf{TIDAK (False)}$$
3. Menuju jalur percabangan **[TIDAK]**:
   $$n = \\frac{l + t}{3} = \\frac{5 + t}{3}$$
4. Diketahui $n = \\frac{3}{2}$:
   $$\\frac{5 + t}{3} = \\frac{3}{2} \\implies 2(5 + t) = 9 \\implies 10 + 2t = 9 \\implies 2t = -1 \\implies t = -\\mathbf{\\frac{1}{2}}$$`,
    topic: 'Algoritma Pemrograman & Diagram Alir',
    difficulty: 'Mudah',
    videoUrl: 'https://youtu.be/khtk5c2vX_s?si=sKrLX5l6FGQGwP9h',
    videoTitle: 'Pembahasan Soal 5 Pengetahuan Kuantitatif UTBK 2025',
    videoThumbnail: 'https://img.youtube.com/vi/khtk5c2vX_s/hqdefault.jpg'
  },

  // =========================================================================
  // SLIDE 06 / SOAL NO. 06
  // =========================================================================
  {
    id: 6,
    readingText: TEKS_1_ALGORITMA,
    text: 'Berdasarkan algoritma diagram alir di atas, nilai $s$ adalah . . .',
    type: 'multiple',
    options: [
      { id: 'A', text: '5' },
      { id: 'B', text: '2' },
      { id: 'C', text: '0' },
      { id: 'D', text: '-3' },
      { id: 'E', text: '-6', correct: true }
    ],
    correctAnswer: 'E',
    explanation: `**Kunci Jawaban: E (-6)**

**Konsep:** Logika Algoritma & KPK (Kelipatan Persekutuan Terkecil).

**Langkah Pembahasan:**
Diketahui input $k = 6$ menghasilkan output $n = 3$:
1. Hitung nilai $l$:
   $$l = 10 - k = 10 - 6 = 4$$
2. Evaluasi kondisi: Apakah $k > l$?
   $$6 > 4 \\implies \\textbf{YA (True)}$$
3. Menuju jalur percabangan **[YA]**:
   $$m = \\text{KPK}(k, l) = \\text{KPK}(6, 4) = 12$$
   $$n = \\frac{m + s}{2} = \\frac{12 + s}{2}$$
4. Diketahui $n = 3$:
   $$\\frac{12 + s}{2} = 3 \\implies 12 + s = 6 \\implies s = 6 - 12 = \\mathbf{-6}$$`,
    topic: 'Algoritma Pemrograman & Diagram Alir',
    difficulty: 'Mudah',
    videoUrl: 'https://youtu.be/h-6awWHCJJU?si=HLZcd824rfgDRLnj',
    videoTitle: 'Pembahasan Soal 6 Pengetahuan Kuantitatif UTBK 2025',
    videoThumbnail: 'https://img.youtube.com/vi/h-6awWHCJJU/hqdefault.jpg'
  },

  // =========================================================================
  // SLIDE 07 / SOAL NO. 07
  // =========================================================================
  {
    id: 7,
    readingText: TEKS_1_ALGORITMA,
    text: 'Berdasarkan algoritma diagram alir di atas, jika diberikan input $k = \\frac{9}{2}$, dihasilkan output $n = \\dots$',
    type: 'multiple',
    options: [
      { id: 'A', text: '$\\frac{7}{6}$' },
      { id: 'B', text: '$\\frac{5}{3}$', correct: true },
      { id: 'C', text: '$\\frac{7}{2}$' },
      { id: 'D', text: '7' },
      { id: 'E', text: '$\\frac{25}{2}$' }
    ],
    correctAnswer: 'B',
    explanation: `**Kunci Jawaban: B ($\\frac{5}{3}$)**

**Konsep:** Evaluasi Alur Algoritma.

**Langkah Pembahasan:**
Diberikan input $k = \\frac{9}{2} = 4,5$:
1. Hitung nilai $l$:
   $$l = 10 - k = 10 - 4,5 = 5,5 = \\frac{11}{2}$$
2. Evaluasi kondisi: Apakah $k > l$?
   $$4,5 > 5,5 \\implies \\textbf{TIDAK (False)}$$
3. Menuju jalur percabangan **[TIDAK]**:
   $$n = \\frac{l + t}{3}$$
4. Dari soal nomor 5 telah diperoleh $t = -\\frac{1}{2}$:
   $$n = \\frac{\\frac{11}{2} + \\left(-\\frac{1}{2}\\right)}{3} = \\frac{\\frac{10}{2}}{3} = \\frac{5}{3} = \\mathbf{\\frac{5}{3}}$$`,
    topic: 'Algoritma Pemrograman & Diagram Alir',
    difficulty: 'Mudah',
    videoUrl: 'https://youtu.be/EjtCYpNfFe0?si=Y-qzM0O0JChfALyS',
    videoTitle: 'Pembahasan Soal 7 Pengetahuan Kuantitatif UTBK 2025',
    videoThumbnail: 'https://img.youtube.com/vi/EjtCYpNfFe0/hqdefault.jpg'
  },

  // =========================================================================
  // SLIDE 08 / SOAL NO. 08
  // =========================================================================
  {
    id: 8,
    readingText: TEKS_2_JAJARGENJANG,
    text: 'Jika $(a, b)$ adalah koordinat titik $C$, nilai $2a + b$ adalah . . .',
    type: 'multiple',
    options: [
      { id: 'A', text: '16' },
      { id: 'B', text: '18' },
      { id: 'C', text: '20', correct: true },
      { id: 'D', text: '22' },
      { id: 'E', text: '24' }
    ],
    correctAnswer: 'C',
    explanation: `**Kunci Jawaban: C (20)**

**Konsep:** Geometri Analitik Jajar Genjang & Vektor Translasi.

**Langkah Pembahasan:**
Diketahui jajar genjang $ABCD$ dengan titik sudut $A(0,0), B(6,0), D(2,y), C(a,b)$:
1. Alas jajar genjang pada sumbu-X adalah panjang sisi $AB$:
   $$\\text{Alas } AB = 6 - 0 = 6$$
2. Luas jajar genjang $= \\text{alas} \\times \\text{tinggi}$:
   $$24 = 6 \\times y \\implies y = 4$$
   Maka koordinat titik $D$ adalah $(2, 4)$.
3. Pada jajar genjang, sisi $BC$ sejajar dan sama panjang dengan sisi $AD$ (vektor $\\vec{BC} = \\vec{AD}$):
   $$\\vec{AD} = D - A = (2 - 0, 4 - 0) = (2, 4)$$
   $$C = B + \\vec{AD} = (6 + 2, 0 + 4) = (8, 4)$$
   Sehingga $a = 8$ dan $b = 4$.
4. Hitung nilai $2a + b$:
   $$2a + b = 2(8) + 4 = 16 + 4 = \\mathbf{20}$$`,
    topic: 'Geometri Analitik Jajar Genjang',
    difficulty: 'Sedang',
    videoUrl: 'https://youtu.be/p6JdZ3-WmZ0?si=ick3VoF21x5h3zyg',
    videoTitle: 'Pembahasan Soal 8 Pengetahuan Kuantitatif UTBK 2025',
    videoThumbnail: 'https://img.youtube.com/vi/p6JdZ3-WmZ0/hqdefault.jpg'
  },

  // =========================================================================
  // SLIDE 09 / SOAL NO. 09
  // =========================================================================
  {
    id: 9,
    readingText: TEKS_2_JAJARGENJANG,
    text: 'Panjang ruas garis $\\overline{AC}$ (diagonal jajar genjang) adalah . . .',
    type: 'multiple',
    options: [
      { id: 'A', text: '$4\\sqrt{2}$' },
      { id: 'B', text: '$5\\sqrt{2}$' },
      { id: 'C', text: '$4\\sqrt{5}$', correct: true },
      { id: 'D', text: '$2\\sqrt{10}$' },
      { id: 'E', text: '10' }
    ],
    correctAnswer: 'C',
    explanation: `**Kunci Jawaban: C ($4\\sqrt{5}$)**

**Konsep:** Jarak Dua Titik pada Bidang Kartesius.

**Langkah Pembahasan:**
Dari soal nomor 8, telah diperoleh koordinat titik $A(0,0)$ dan $C(8,4)$:
$$AC = \\sqrt{(x_C - x_A)^2 + (y_C - y_A)^2}$$
$$AC = \\sqrt{(8 - 0)^2 + (4 - 0)^2} = \\sqrt{64 + 16} = \\sqrt{80}$$
$$AC = \\sqrt{16 \\times 5} = \\mathbf{4\\sqrt{5}}$$`,
    topic: 'Geometri Analitik Jarak Titik',
    difficulty: 'Mudah',
    videoUrl: 'https://youtu.be/RttJi9TK6EE?si=69RzX8COROj5fMCu',
    videoTitle: 'Pembahasan Soal 9 Pengetahuan Kuantitatif UTBK 2025',
    videoThumbnail: 'https://img.youtube.com/vi/RttJi9TK6EE/hqdefault.jpg'
  },

  // =========================================================================
  // SLIDE 10 / SOAL NO. 10
  // =========================================================================
  {
    id: 10,
    readingText: TEKS_2_JAJARGENJANG,
    text: 'Jarak titik $B$ ke garis $\\overleftrightarrow{AC}$ adalah . . .',
    type: 'multiple',
    options: [
      { id: 'A', text: '$2\\sqrt{3}$' },
      { id: 'B', text: '$\\frac{6}{5}\\sqrt{5}$', correct: true },
      { id: 'C', text: '$\\frac{4}{5}\\sqrt{10}$' },
      { id: 'D', text: '$\\frac{12}{5}$' },
      { id: 'E', text: '2' }
    ],
    correctAnswer: 'B',
    explanation: `**Kunci Jawaban: B ($\\frac{6}{5}\\sqrt{5}$)**

**Konsep:** Luas Segitiga & Jarak Titik ke Garis.

**Langkah Pembahasan:**
1. Diagonal $AC$ membagi jajar genjang $ABCD$ menjadi dua segitiga kongruen dengan luas yang sama:
   $$\\text{Luas } \\triangle ABC = \\frac{1}{2} \\times \\text{Luas } ABCD = \\frac{1}{2} \\times 24 = 12$$
2. Luas $\\triangle ABC$ dengan alas $AC$ dan tinggi $d$ (jarak titik $B$ ke garis $AC$):
   $$\\text{Luas } \\triangle ABC = \\frac{1}{2} \\times AC \\times d$$
   $$12 = \\frac{1}{2} \\times 4\\sqrt{5} \\times d = 2\\sqrt{5} \\times d$$
3. Hitung $d$:
   $$d = \\frac{12}{2\\sqrt{5}} = \\frac{6}{\\sqrt{5}} = \\frac{6\\sqrt{5}}{5} = \\mathbf{\\frac{6}{5}\\sqrt{5}}$$`,
    topic: 'Geometri Analitik & Luas Segitiga',
    difficulty: 'Sedang',
    videoUrl: 'https://youtu.be/G7eSOtgX8IM?si=fnUYbPUHC9eWf4EX',
    videoTitle: 'Pembahasan Soal 10 Pengetahuan Kuantitatif UTBK 2025',
    videoThumbnail: 'https://img.youtube.com/vi/G7eSOtgX8IM/hqdefault.jpg'
  },

  // =========================================================================
  // SLIDE 11 / SOAL NO. 11
  // =========================================================================
  {
    id: 11,
    text: `Barisan bilangan real $u_1, u_2, \\dots$ memenuhi:
$$u_{n+1} = 8 - 2u_n$$
untuk setiap bilangan asli $n$ dan diketahui $u_2 = 2$.

Berapakah banyaknya dari empat pernyataan berikut yang bernilai benar berdasarkan informasi di atas?
(1) $u_1$ merupakan bilangan genap
(2) $u_3 = 4$
(3) $u_{100}$ merupakan bilangan positif
(4) $u_n$ merupakan bilangan kelipatan 8 untuk $n > 4$`,
    type: 'multiple',
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '1' },
      { id: 'C', text: '2', correct: true },
      { id: 'D', text: '3' },
      { id: 'E', text: '4' }
    ],
    correctAnswer: 'C',
    explanation: `**Kunci Jawaban: C (2 pernyataan benar)**

**Konsep:** Barisan Rekursif & Pola Bilangan.

**Langkah Pembahasan:**
Diberikan $u_{n+1} = 8 - 2u_n$ dan $u_2 = 2$:
1. Cari suku pertama $u_1$:
   $$u_2 = 8 - 2u_1 \\implies 2 = 8 - 2u_1 \\implies 2u_1 = 6 \\implies u_1 = 3$$
   Nilai $u_1 = 3$ (bilangan ganjil), sehingga Pernyataan (1) **SALAH**.
2. Cari suku ketiga $u_3$:
   $$u_3 = 8 - 2(u_2) = 8 - 2(2) = 8 - 4 = 4$$
   Sehingga Pernyataan (2) **BENAR**.
3. Cari suku-suku berikutnya:
   * $u_4 = 8 - 2(4) = 0$
   * $u_5 = 8 - 2(0) = 8$
   * $u_6 = 8 - 2(8) = -8$
   * $u_7 = 8 - 2(-8) = 24$
   * $u_8 = 8 - 2(24) = -40$
   Rumus umum barisan: $u_n = \\frac{8 + (-2)^{n-1}}{3}$.
   Untuk $n = 100$, $(-2)^{99} = -2^{99}$ (negatif sangat besar), maka $u_{100} < 0$. Sehingga Pernyataan (3) **SALAH**.
4. Untuk $n > 4$:
   Perhatikan bahwa $u_4 = 0$ (kelipatan 8), $u_5 = 8$, $u_6 = -8$, $u_7 = 24$, $u_8 = -40$.
   Secara induktif, jika $u_k$ kelipatan 8, maka $u_{k+1} = 8 - 2u_k = 8(1 - 2(u_k/8))$ pasti juga kelipatan 8. Sehingga Pernyataan (4) **BENAR**.

Banyak pernyataan yang bernilai benar adalah **2** (pernyataan 2 dan 4).`,
    topic: 'Barisan Bilangan Real Rekursif',
    difficulty: 'Sedang',
    videoUrl: 'https://youtu.be/PmDpLCrVdko?si=ckwqPClXrm5R-1xs',
    videoTitle: 'Pembahasan Soal 11 Pengetahuan Kuantitatif UTBK 2025',
    videoThumbnail: 'https://img.youtube.com/vi/PmDpLCrVdko/hqdefault.jpg'
  },

  // =========================================================================
  // SLIDE 12 / SOAL NO. 12
  // =========================================================================
  {
    id: 12,
    text: `Sekumpulan data disajikan sebagai berikut:
$$2, 2, 2, 3, 4, 5, 10, 12, 14$$

Berapakah banyaknya dari pernyataan berikut yang bernilai benar berdasarkan informasi di atas?
(1) Rata-rata, median, dan modus kumpulan data merupakan tiga suku awal dari suatu barisan aritmetika
(2) Rata-rata kumpulan data merupakan bilangan prima
(3) Modus kumpulan data kurang dari mediannya
(4) Median kumpulan data kurang dari jangkauannya`,
    type: 'multiple',
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '1' },
      { id: 'C', text: '2' },
      { id: 'D', text: '3', correct: true },
      { id: 'E', text: '4' }
    ],
    correctAnswer: 'D',
    explanation: `**Kunci Jawaban: D (3 pernyataan benar)**

**Konsep:** Statistika Deskriptif (Mean, Median, Modus, Jangkauan).

**Langkah Pembahasan:**
Data terurut: $2, 2, 2, 3, 4, 5, 10, 12, 14$ ($n = 9$).
1. **Rata-rata (Mean):**
   $$\\bar{x} = \\frac{2 + 2 + 2 + 3 + 4 + 5 + 10 + 12 + 14}{9} = \\frac{54}{9} = 6$$
2. **Median:**
   Data ke-5 (tengah) $= 4$
3. **Modus:**
   Nilai dengan frekuensi tertinggi $= 2$ (muncul 3 kali)
4. **Jangkauan (Range):**
   $$\\text{Jangkauan} = x_{\\max} - x_{\\min} = 14 - 2 = 12$$

**Evaluasi Pernyataan:**
* **Pernyataan (1):** Tiga nilai berturut-turut: Rata-rata ($6$), Median ($4$), Modus ($2$).
  Selisihnya adalah $4 - 6 = -2$ dan $2 - 4 = -2$ (membentuk barisan aritmetika dengan beda $-2$) $\\rightarrow$ **BENAR**.
* **Pernyataan (2):** Rata-rata $= 6$. Angka $6$ bukan bilangan prima melainkan bilangan komposit $\\rightarrow$ **SALAH**.
* **Pernyataan (3):** Modus ($2$) < Median ($4$) $\\rightarrow$ **BENAR**.
* **Pernyataan (4):** Median ($4$) < Jangkauan ($12$) $\\rightarrow$ **BENAR**.

Banyak pernyataan yang bernilai benar adalah **3** (nomor 1, 3, dan 4).`,
    topic: 'Statistika Deskriptif & Barisan Aritmetika',
    difficulty: 'Mudah',
    videoUrl: 'https://youtu.be/kIqVVUn4PVo?si=17OpIOj7qrSJ87Jv',
    videoTitle: 'Pembahasan Soal 12 Pengetahuan Kuantitatif UTBK 2025',
    videoThumbnail: 'https://img.youtube.com/vi/kIqVVUn4PVo/hqdefault.jpg'
  },

  // =========================================================================
  // SLIDE 13 / SOAL NO. 13
  // =========================================================================
  {
    id: 13,
    text: `Fungsi $g$ dan $h$ didefinisikan dengan:
$$g(x) = (x+2)(x-2)(x-1)$$
$$h(x) = g(x) + 2$$

Berdasarkan informasi di atas, tentukanlah nilai kebenaran (Benar/Salah) untuk setiap pernyataan berikut:`,
    type: 'true-false-table',
    statements: [
      {
        id: 's1',
        text: 'h(3) = 10.',
        correct: false,
        trueLabel: 'Benar',
        falseLabel: 'Salah'
      },
      {
        id: 's2',
        text: 'Grafik fungsi h diperoleh dari pergeseran grafik fungsi g dua satuan ke atas.',
        correct: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah'
      },
      {
        id: 's3',
        text: 'Grafik fungsi h memotong garis x = 0 di titik (0, 4).',
        correct: false,
        trueLabel: 'Benar',
        falseLabel: 'Salah'
      }
    ],
    correctAnswer: {
      s1: false,
      s2: true,
      s3: false
    },
    explanation: `**Kunci Jawaban: Salah — Benar — Salah (S - B - S)**

**Konsep:** Aljabar Polinomial & Transformasi Fungsi Vertikal.

**Langkah Pembahasan:**
Fungsi $g(x) = (x+2)(x-2)(x-1) = (x^2-4)(x-1) = x^3 - x^2 - 4x + 4$
Fungsi $h(x) = g(x) + 2 = x^3 - x^2 - 4x + 6$

1. **Baris 1: $h(3) = 10$**
   $$h(3) = g(3) + 2 = (3+2)(3-2)(3-1) + 2 = (5)(1)(2) + 2 = 10 + 2 = 12$$
   Karena $12 \\ne 10$, maka pernyataan bernilai **SALAH**.

2. **Baris 2: Grafik $h$ diperoleh dari pergeseran grafik $g$ dua satuan ke atas**
   Berdasarkan prinsip transformasi fungsi, $y = g(x) + c$ untuk $c = 2 > 0$ menggeser seluruh grafik ke atas secara vertikal sejauh $2$ satuan. Maka pernyataan bernilai **BENAR**.

3. **Baris 3: Grafik $h$ memotong garis $x = 0$ di titik $(0, 4)$**
   Garis $x = 0$ adalah sumbu-Y.
   $$h(0) = g(0) + 2 = (2)(-2)(-1) + 2 = 4 + 2 = 6$$
   Titik potong sumbu-Y adalah $(0, 6)$, bukan $(0, 4)$. Maka pernyataan bernilai **SALAH**.`,
    topic: 'Fungsi Polinomial & Transformasi Grafik',
    difficulty: 'Mudah',
    videoUrl: 'https://youtu.be/Tv78jnqrGHc?si=_IrW-sSIuoZkTzr8',
    videoTitle: 'Pembahasan Soal 13 Pengetahuan Kuantitatif UTBK 2025',
    videoThumbnail: 'https://img.youtube.com/vi/Tv78jnqrGHc/hqdefault.jpg'
  },

  // =========================================================================
  // SLIDE 14 / SOAL NO. 14
  // =========================================================================
  {
    id: 14,
    text: `Suatu balok dengan perbandingan panjang, lebar, dan tinggi $2 : 1 : 1$ memiliki luas permukaan $250$.

Berdasarkan informasi di atas, tentukanlah nilai kebenaran (Benar/Salah) untuk setiap pernyataan berikut:`,
    type: 'true-false-table',
    statements: [
      {
        id: 's1',
        text: 'Panjang balok sama dengan 5.',
        correct: false,
        trueLabel: 'Benar',
        falseLabel: 'Salah'
      },
      {
        id: 's2',
        text: 'Volume balok sama dengan 250.',
        correct: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah'
      },
      {
        id: 's3',
        text: 'Suatu tabung berdiameter 10 dan tinggi 12 dapat memuat balok tersebut.',
        correct: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah'
      }
    ],
    correctAnswer: {
      s1: false,
      s2: true,
      s3: true
    },
    explanation: `**Kunci Jawaban: Salah — Benar — Benar (S - B - B)**

**Konsep:** Geometri Ruang (Dimensi Balok, Luas Permukaan, Volume, dan Penampang Tabung).

**Langkah Pembahasan:**
Perbandingan $p : l : t = 2 : 1 : 1 \\implies p = 2x, l = x, t = x$.
1. Luas permukaan balok:
   $$L = 2(pl + pt + lt) = 2(2x^2 + 2x^2 + x^2) = 2(5x^2) = 10x^2$$
   $$10x^2 = 250 \\implies x^2 = 25 \\implies x = 5$$
   Ukuran balok: $p = 10$, $l = 5$, $t = 5$.

2. **Evaluasi Pernyataan:**
   * **Baris 1:** Panjang balok $= 10$ (bukan 5) $\\rightarrow$ **SALAH**.
   * **Baris 2:** Volume balok $= p \\times l \\times t = 10 \\times 5 \\times 5 = \\mathbf{250}$ $\\rightarrow$ **BENAR**.
   * **Baris 3:** Tabung memiliki diameter $10$ dan tinggi $12$.
     Jika balok dimasukkan tegak: tinggi balok $10 \\le 12$ (muat vertikal).
     Penampang alas balok berukuran $5 \\times 5$ dengan panjang diagonal:
     $$d_{\\text{alas}} = \\sqrt{5^2 + 5^2} = 5\\sqrt{2} \\approx 7,07$$
     Karena diagonal alas $7,07 < 10$ (diameter tabung), maka penampang persegi balok masuk sempurna di dalam lingkaran alas tabung. Sehingga tabung dapat memuat balok $\\rightarrow$ **BENAR**.`,
    topic: 'Geometri Ruang Balok & Tabung',
    difficulty: 'Sedang',
    videoUrl: 'https://youtu.be/leT7nIprNuY?si=2r7YoSi0BDmfiLiB',
    videoTitle: 'Pembahasan Soal 14 Pengetahuan Kuantitatif UTBK 2025',
    videoThumbnail: 'https://img.youtube.com/vi/leT7nIprNuY/hqdefault.jpg'
  },

  // =========================================================================
  // SLIDE 15 / SOAL NO. 15
  // =========================================================================
  {
    id: 15,
    text: `Tabel berikut menyajikan definisi operasi $\\ominus$ dan $\\oplus$:

**Tabel Operasi $\\ominus$:**
| $\\ominus$ | **0** | **1** | **2** |
|:---:|:---:|:---:|:---:|
| **0** | 0 | 1 | 2 |
| **1** | 2 | 0 | 1 |
| **2** | 1 | 1 | 0 |

**Tabel Operasi $\\oplus$:**
| $\\oplus$ | **0** | **1** | **2** |
|:---:|:---:|:---:|:---:|
| **0** | 1 | 0 | 2 |
| **1** | 2 | 1 | 0 |
| **2** | 0 | 2 | 1 |

Operasi $\\odot$ didefinisikan dengan:
$$a \\odot b = (a \\ominus b) \\oplus a$$
untuk semua $a, b \\in \\{0, 1, 2\\}$.

Berdasarkan informasi yang diberikan, manakah hubungan antara kuantitas P dan Q berikut yang benar?

| Kuantitas P | Kuantitas Q |
|:---:|:---:|
| $2 \\odot 1$ atau $0 \\oplus 1$ | $1$ |`,
    type: 'multiple',
    options: [
      { id: 'A', text: 'P > Q' },
      { id: 'B', text: 'P < Q', correct: true },
      { id: 'C', text: 'P = Q' },
      { id: 'D', text: 'Informasi yang diberikan tidak cukup untuk memutuskan' }
    ],
    correctAnswer: 'B',
    explanation: `**Kunci Jawaban: B (P < Q)**

**Konsep:** Operasi Biner Khusus & Pembacaan Matriks Operasi.

**Langkah Pembahasan:**
Definisi: $a \\odot b = (a \\ominus b) \\oplus a$.
1. **Hitung nilai $2 \\odot 1$:**
   $$2 \\odot 1 = (2 \\ominus 1) \\oplus 2$$
   * Dari tabel $\\ominus$: baris 2 kolom 1 menghasilkan nilai **1**.
   * Kemudian hitung $1 \\oplus 2$: dari tabel $\\oplus$, baris 1 kolom 2 menghasilkan nilai **0**.
   Maka $2 \\odot 1 = 0$.

2. **Hitung nilai $0 \\oplus 1$:**
   * Dari tabel $\\oplus$: baris 0 kolom 1 menghasilkan nilai **0**.

3. **Bandingkan Kuantitas P dan Q:**
   * Kuantitas $P = 0$
   * Kuantitas $Q = 1$
   Karena $0 < 1$, maka diperoleh hubungan $\\mathbf{P < Q}$.`,
    topic: 'Operasi Biner & Perbandingan Kuantitas',
    difficulty: 'Mudah',
    videoUrl: 'https://youtu.be/LUDVaCcF_r0?si=PGQdrEMWFKEI5beL',
    videoTitle: 'Pembahasan Soal 15 Pengetahuan Kuantitatif UTBK 2025',
    videoThumbnail: 'https://img.youtube.com/vi/LUDVaCcF_r0/hqdefault.jpg'
  },

  // =========================================================================
  // SLIDE 16 / SOAL NO. 16
  // =========================================================================
  {
    id: 16,
    text: `Fungsi $f$ dengan $f(x) = mx + 2$ untuk suatu bilangan real $m \\ne 0$ memiliki fungsi invers $f^{-1}$ yang memenuhi $f^{-1}(2) = m + 1$.

Berdasarkan informasi yang diberikan, manakah hubungan antara kuantitas P dan Q berikut yang benar?

| Kuantitas P | Kuantitas Q |
|:---:|:---:|
| $m$ | $-1$ |`,
    type: 'multiple',
    options: [
      { id: 'A', text: 'P > Q' },
      { id: 'B', text: 'P < Q' },
      { id: 'C', text: 'P = Q', correct: true },
      { id: 'D', text: 'Informasi yang diberikan tidak cukup untuk memutuskan' }
    ],
    correctAnswer: 'C',
    explanation: `**Kunci Jawaban: C (P = Q)**

**Konsep:** Fungsi Invers & Persamaan Aljabar.

**Langkah Pembahasan:**
1. Tentukan rumus fungsi invers $f^{-1}(x)$:
   $$y = mx + 2 \\implies mx = y - 2 \\implies x = f^{-1}(y) = \\frac{y - 2}{m}$$
2. Hitung nilai $f^{-1}(2)$:
   $$f^{-1}(2) = \\frac{2 - 2}{m} = \\frac{0}{m} = 0$$
3. Diketahui $f^{-1}(2) = m + 1$:
   $$0 = m + 1 \\implies m = -1$$
4. Evaluasi Kuantitas:
   * Kuantitas $P = m = -1$
   * Kuantitas $Q = -1$
   Sehingga diperoleh $\\mathbf{P = Q}$.`,
    topic: 'Fungsi Invers & Perbandingan Kuantitas',
    difficulty: 'Mudah',
    videoUrl: 'https://youtu.be/WaIBO3yZQQI?si=XuwALHYHNkjmNAHs',
    videoTitle: 'Pembahasan Soal 16 Pengetahuan Kuantitatif UTBK 2025',
    videoThumbnail: 'https://img.youtube.com/vi/WaIBO3yZQQI/hqdefault.jpg'
  },

  // =========================================================================
  // SLIDE 17 / SOAL NO. 17
  // =========================================================================
  {
    id: 17,
    text: `Fungsi $f$ dan $g$ didefinisikan dengan $f(x) = \\frac{a}{x^2 + 1}$ dan $g(x) = x^2 + b$.

Apakah $f(1) \\times g(1) > 0$?

Putuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:
(1) $a - 1 < 0$ dan $b > 0$
(2) $a < 0$ dan $b + 1 > 0$`,
    type: 'multiple',
    options: [
      { id: 'A', text: 'Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup' },
      { id: 'B', text: 'Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup', correct: true },
      { id: 'C', text: 'DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup' },
      { id: 'D', text: 'Baik pernyataan (1) SAJA maupun pernyataan (2) SAJA cukup untuk menjawab pertanyaan' },
      { id: 'E', text: 'Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan' }
    ],
    correctAnswer: 'B',
    explanation: `**Kunci Jawaban: B (Pernyataan (2) SAJA cukup, tetapi (1) SAJA tidak cukup)**

**Konsep:** Kecukupan Data (*Data Sufficiency*) & Analisis Tanda Bilangan Real.

**Langkah Pembahasan:**
Hitung bentuk perkalian $f(1) \\times g(1)$:
$$f(1) = \\frac{a}{1^2 + 1} = \\frac{a}{2}$$
$$g(1) = 1^2 + b = 1 + b$$
$$f(1) \\times g(1) = \\frac{a(1 + b)}{2}$$
Pertanyaan: Apakah $a(1 + b) > 0$?

* **Uji Pernyataan (1): $a - 1 < 0$ dan $b > 0$**
  * $a < 1$ (tanda $a$ bisa positif, nol, atau negatif).
  * $b > 0 \\implies 1 + b > 1 > 0$ (selalu positif).
  * Jika $a = 0,5 \\implies a(1+b) > 0$ (Jawaban: **YA**).
  * Jika $a = -1 \\implies a(1+b) < 0$ (Jawaban: **TIDAK**).
  Karena menghasilkan jawaban yang tidak tunggal, Pernyataan (1) **TIDAK CUKUP**.

* **Uji Pernyataan (2): $a < 0$ dan $b + 1 > 0$**
  * $a < 0$ (tanda $a$ pasti negatif).
  * $b + 1 > 0$ (tanda $(1 + b)$ pasti positif).
  * Maka $a(1 + b) = (\\text{negatif}) \\times (\\text{positif}) = \\text{negatif} < 0$.
  Pertanyaan terjawab dengan pasti dan tunggal yaitu **TIDAK**. Sehingga Pernyataan (2) **CUKUP**.

Maka pilihan yang benar adalah **B** (Pernyataan (2) SAJA cukup, tetapi pernyataan (1) SAJA tidak cukup).`,
    topic: 'Kecukupan Data (Data Sufficiency)',
    difficulty: 'Sedang',
    videoUrl: 'https://youtu.be/PUFqqRZpyYU?si=q0ImcgSOYlGllBB8',
    videoTitle: 'Pembahasan Soal 17 Pengetahuan Kuantitatif UTBK 2025',
    videoThumbnail: 'https://img.youtube.com/vi/PUFqqRZpyYU/hqdefault.jpg'
  },

  // =========================================================================
  // SLIDE 18 / SOAL NO. 18
  // =========================================================================
  {
    id: 18,
    text: `Koordinat titik-titik sudut segitiga $ABC$ adalah $A(1, 1)$, $B(1, 3)$, dan $C(d, 2)$.

Apakah garis $y = mx$ memotong segitiga $ABC$?

Putuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:
(1) $m > 1$ dan $d < 1$
(2) $m > 0$ dan $d < 0$`,
    type: 'multiple',
    options: [
      { id: 'A', text: 'Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup' },
      { id: 'B', text: 'Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup', correct: true },
      { id: 'C', text: 'DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup' },
      { id: 'D', text: 'Baik pernyataan (1) SAJA maupun pernyataan (2) SAJA cukup untuk menjawab pertanyaan' },
      { id: 'E', text: 'Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan' }
    ],
    correctAnswer: 'B',
    explanation: `**Kunci Jawaban: B (Pernyataan (2) SAJA cukup, tetapi (1) SAJA tidak cukup)**

**Konsep:** Geometri Analitik & Kecukupan Data (*Data Sufficiency*).

**Langkah Pembahasan:**
Garis $y = mx$ selalu melalui titik asal $(0, 0)$. Titik sudut segitiga adalah $A(1,1)$, $B(1,3)$, dan $C(d,2)$.

* **Uji Pernyataan (1): $m > 1$ dan $d < 1$**
  * Jika $m = 2$ dan $d = 0$, garis $y = 2x$ melalui $(1, 2)$ yang terletak pada sisi $AB$ (memotong segitiga).
  * Jika $m = 10$ dan $d = 0,5$, garis $y = 10x$ berada jauh di atas segitiga pada $x > 0$ dan tidak memotong segitiga $ABC$.
  Karena jawabannya bisa "Ya" atau "Tidak", Pernyataan (1) **TIDAK CUKUP**.

* **Uji Pernyataan (2): $m > 0$ dan $d < 0$**
  * Karena $d < 0$, titik $C(d, 2)$ berada di Kuadran II ($x < 0, y > 0$).
  * Titik $A(1, 1)$ dan $B(1, 3)$ berada di Kuadran I ($x > 0, y > 0$).
  * Segitiga $ABC$ melintasi sumbu-Y positif pada interval $y \\in [1, 3]$.
  * Garis $y = mx$ dengan gradien positif $m > 0$ berawal dari kuadran III menuju kuadran I dan melintasi $(0,0)$, sehingga berkas garis ini pasti membelah/memotong bagian dalam atau sisi-sisi segitiga $ABC$.
  Pertanyaan terjawab dengan pasti ("YA"). Sehingga Pernyataan (2) **CUKUP**.

Maka pilihan yang benar adalah **B**.`,
    topic: 'Kecukupan Data Geometri Analitik',
    difficulty: 'Sedang',
    videoUrl: 'https://youtu.be/9Af5cSG8Q1A?si=WlVObMB5tk3DmrU_',
    videoTitle: 'Pembahasan Soal 18 Pengetahuan Kuantitatif UTBK 2025',
    videoThumbnail: 'https://img.youtube.com/vi/9Af5cSG8Q1A/hqdefault.jpg'
  },

  // =========================================================================
  // SLIDE 19 / SOAL NO. 19
  // =========================================================================
  {
    id: 19,
    text: `Jika persamaan berikut bernilai benar:
$$\\sqrt{36} + \\frac{16}{8} + d = 11$$

maka nilai $d$ adalah . . .
*(Tulislah jawaban Anda dengan bilangan cacah)*`,
    type: 'numeric',
    correctAnswer: '3',
    explanation: `**Kunci Jawaban: 3**

**Konsep:** Operasi Aritmetika & Aljabar Dasar.

**Langkah Pembahasan:**
Persamaan:
$$\\sqrt{36} + \\frac{16}{8} + d = 11$$

1. Sederhanakan bentuk akar dan pecahan:
   $$\\sqrt{36} = 6$$
   $$\\frac{16}{8} = 2$$
2. Substitusi ke persamaan:
   $$6 + 2 + d = 11$$
   $$8 + d = 11$$
   $$d = 11 - 8 = \\mathbf{3}$$`,
    topic: 'Isian Singkat Aljabar & Aritmetika',
    difficulty: 'Mudah',
    videoUrl: 'https://youtu.be/jiC5-Y64dKo?si=dmBjSDTUZY-Dyvtz',
    videoTitle: 'Pembahasan Soal 19 Pengetahuan Kuantitatif UTBK 2025',
    videoThumbnail: 'https://img.youtube.com/vi/jiC5-Y64dKo/hqdefault.jpg'
  },

  // =========================================================================
  // SLIDE 20 / SOAL NO. 20
  // =========================================================================
  {
    id: 20,
    text: `Banyaknya susunan lima huruf berbeda dari huruf A, B, C, X, dan Z, dari kiri ke kanan, dengan huruf X dan Z selalu berdampingan dan huruf Z terletak di ujung kiri atau kanan adalah . . . . . . . . . . . .
*(Tulislah jawaban Anda dengan bilangan cacah)*`,
    type: 'numeric',
    correctAnswer: '12',
    explanation: `**Kunci Jawaban: 12**

**Konsep:** Kaidah Pencacahan (Kombinatorika & Permutasi Bersyarat).

**Langkah Pembahasan:**
Tersedia 5 huruf berbeda: $\\{A, B, C, X, Z\\}$.
Syarat:
1. Huruf $X$ dan $Z$ selalu berdampingan.
2. Huruf $Z$ harus berada di ujung kiri (posisi 1) atau ujung kanan (posisi 5).

Bagi ke dalam 2 kasus:
* **Kasus 1: Huruf $Z$ di ujung paling kiri (posisi 1)**
  Posisi 1 diisi $Z$. Karena $X$ harus berdampingan dengan $Z$, maka posisi 2 wajib diisi $X$:
  $$[Z][X][\\_][\\_][\\_]$$
  Tiga posisi tersisa (posisi 3, 4, 5) diisi oleh huruf $\\{A, B, C\\}$ secara bebas:
  $$\\text{Banyak susunan} = 3! = 3 \\times 2 \\times 1 = 6\\text{ cara}$$

* **Kasus 2: Huruf $Z$ di ujung paling kanan (posisi 5)**
  Posisi 5 diisi $Z$. Karena $X$ harus berdampingan dengan $Z$, maka posisi 4 wajib diisi $X$:
  $$[\\_][\\_][\\_][X][Z]$$
  Tiga posisi pertama (posisi 1, 2, 3) diisi oleh huruf $\\{A, B, C\\}$ secara bebas:
  $$\\text{Banyak susunan} = 3! = 3 \\times 2 \\times 1 = 6\\text{ cara}$$

* **Total susunan yang mungkin:**
  $$\\text{Total} = 6 + 6 = \\mathbf{12\\text{ susunan}}$$`,
    topic: 'Kaidah Pencacahan & Permutasi Bersyarat',
    difficulty: 'Sedang',
    videoUrl: 'https://youtu.be/86Ahv3b7U4c?si=KFzDzfEIyz1PIjCt',
    videoTitle: 'Pembahasan Soal 20 Pengetahuan Kuantitatif UTBK 2025',
    videoThumbnail: 'https://img.youtube.com/vi/86Ahv3b7U4c/hqdefault.jpg'
  }
];
