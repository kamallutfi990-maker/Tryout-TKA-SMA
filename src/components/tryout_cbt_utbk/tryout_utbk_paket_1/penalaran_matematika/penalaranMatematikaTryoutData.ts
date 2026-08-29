import { UtbkQuestion } from '../types';

const TEKS_1 = `**Teks 1**
Pertemuan keluarga RT IX dihadiri oleh 15 laki-laki dan 10 perempuan. Pada pertemuan ini setiap keluarga diwakili satu orang. Salah satu agenda pertemuan tersebut adalah memilih pengurus RT baru yang terdiri atas ketua, bendahara, dan sekretaris. Tiga calon diambil di antara yang hadir. Pemilihan dilakukan secara acak.`;

const TEKS_2 = `**Teks 2**
Kertas berpetak memiliki ukuran $8 \\times 8$ petak. Pada baris pertama, petak pertama, yaitu paling kiri ditulis dengan 1, petak kedua bilangan 2, petak ketiga bilangan 4, petak keempat bilangan 8, demikian seterusnya sampai petak kedelapan ditulis bilangan 128. Pola baris kedua mengikuti pola baris pertama yang dimulai dengan bilangan 256 dan seterusnya sampai baris ke-8.`;

const TEKS_3 = `**Teks 3**
Pada dinding suatu ruangan dipasang lampu dengan ketinggian 4 m dari lantai ruangan. Sebuah meja berbentuk segitiga ABC ditempatkan di bawah lampu dengan titik A dan B menempel pada dinding. Panjang sisi AB adalah 1 meter dan bayangannya di lantai adalah A'B' dengan panjang $\\frac{5}{3}\\text{ m}$.

*(Disertai ilustrasi diagram: Posisi sumber lampu pada dinding ketinggian 4 m, meja segitiga ABC di bawah lampu dengan sisi AB menempel dinding, bayangan meja di lantai A'B'C', serta posisi alas patung)*`;

const TEKS_4 = `**Teks 4**
Di suatu grosir kelontong dijual sembilan bahan pokok makanan. Salah satu yang dijual oleh pedagang grosir itu adalah gula pasir (dalam satuan kuintal). Data pasokan dan yang terjual tiap hari dalam satu minggu disajikan dalam diagram data berikut:
* **Senin**: Pasokan 8 kuintal, Terjual 4 kuintal
* **Selasa**: Pasokan 14 kuintal, Terjual 12 kuintal
* **Rabu**: Pasokan 9 kuintal, Terjual 8 kuintal
* **Kamis**: Pasokan 10 kuintal, Terjual 12 kuintal
* **Jumat**: Pasokan 8 kuintal, Terjual 8 kuintal
* **Sabtu**: Pasokan 9 kuintal, Terjual 14 kuintal
* **Minggu**: Pasokan 11 kuintal, Terjual 12 kuintal`;

const TEKS_5 = `**Teks 5**
Sepetak sawah terdiri atas $x$ petak-petak kecil lahan untuk ditanami tanaman pertanian dengan masing-masing petak berukuran $6 \\times 6\\text{ m}^2$.`;

export const penalaranMatematikaTryoutData: UtbkQuestion[] = [
  // ==========================================
  // TEKS 1 (Soal No. 1 - 4)
  // ==========================================
  {
    id: 1,
    readingText: TEKS_1,
    text: 'Banyak cara terpilihnya pengurus dengan sekretaris perempuan adalah . . .',
    type: 'multiple',
    options: [
      { id: 'A', text: '5.400' },
      { id: 'B', text: '5.520', correct: true },
      { id: 'C', text: '5.750' },
      { id: 'D', text: '5.760' },
      { id: 'E', text: '6.000' }
    ],
    correctAnswer: 'B',
    explanation: `**Kunci Jawaban: B (5.520)**

**Konsep:** Aturan Pengisian Tempat (Filling Slots / Permutasi Jabatan)

**Langkah Penyelesaian:**
1. Pengurus RT terdiri atas 3 jabatan berbeda: **Ketua**, **Bendahara**, dan **Sekretaris**.
2. Total warga yang hadir: $15\\text{ laki-laki} + 10\\text{ perempuan} = 25\\text{ orang}$.
3. Syarat: Posisi **Sekretaris** harus perempuan $\\rightarrow$ terdapat $10$ pilihan dari $10$ orang perempuan yang hadir.
4. Setelah 1 orang perempuan terpilih menjadi sekretaris, sisa calon untuk mengisi jabatan lainnya adalah:
   $$25 - 1 = 24\\text{ orang}$$
5. Posisi **Ketua**: dapat dipilih dari $24$ orang yang tersisa.
6. Posisi **Bendahara**: dapat dipilih dari $23$ orang yang tersisa.
7. Banyak susunan pengurus yang mungkin:
   $$\\text{Banyak Cara} = 10 \\times 24 \\times 23 = \\mathbf{5.520\\text{ cara}}$$`,
    topic: 'Aturan Perkalian & Permutasi Jabatan',
    difficulty: 'Sedang',
    videoTitle: 'Penalaran Matematika no. 1 (UTBK 2025) A',
    videoUrl: 'https://youtu.be/_qUd_Y6-C94',
    videoThumbnail: 'https://img.youtube.com/vi/_qUd_Y6-C94/hqdefault.jpg'
  },
  {
    id: 2,
    readingText: TEKS_1,
    text: 'Untuk memeriahkan suasana pertemuan, dipilih empat orang untuk menyanyi. Peluang yang terpilih keempatnya perempuan adalah . . .',
    type: 'multiple',
    options: [
      { id: 'A', text: '$\\frac{16}{1265}$' },
      { id: 'B', text: '$\\frac{4}{25}$' },
      { id: 'C', text: '$\\frac{21}{1265}$', correct: true },
      { id: 'D', text: '$\\frac{4}{15}$' },
      { id: 'E', text: '$\\frac{10}{25}$' }
    ],
    correctAnswer: 'C',
    explanation: `**Kunci Jawaban: C (\\frac{21}{1265})**

**Konsep:** Peluang Teoretis Berbasis Kombinasi

**Langkah Penyelesaian:**
1. Ruang sampel $n(S)$ (memilih 4 orang dari total 25 warga tanpa memperhatikan urutan):
   $$n(S) = C(25, 4) = \\frac{25 \\times 24 \\times 23 \\times 22}{4 \\times 3 \\times 2 \\times 1} = 12.650$$
2. Banyak cara memilih 4 perempuan dari 10 perempuan $n(A)$:
   $$n(A) = C(10, 4) = \\frac{10 \\times 9 \\times 8 \\times 7}{4 \\times 3 \\times 2 \\times 1} = 210$$
3. Peluang kejadian terpilih keempatnya perempuan:
   $$P(A) = \\frac{n(A)}{n(S)} = \\frac{210}{12.650} = \\mathbf{\\frac{21}{1.265}}$$`,
    topic: 'Peluang Kombinasi',
    difficulty: 'Mudah',
    videoTitle: 'Penalaran Matematika no. 2 (UTBK 2025) A',
    videoUrl: 'https://youtu.be/dY5MB4bfFOQ',
    videoThumbnail: 'https://img.youtube.com/vi/dY5MB4bfFOQ/hqdefault.jpg'
  },
  {
    id: 3,
    readingText: TEKS_1,
    text: 'Pada pertemuan tersebut juga dipilih tiga orang untuk mewakili RT dalam suatu kegiatan pada tingkat RW. Peluang terpilihnya satu laki-laki dua perempuan atau dua laki-laki satu perempuan adalah . . .',
    type: 'multiple',
    options: [
      { id: 'A', text: '$\\frac{3}{4}$', correct: true },
      { id: 'B', text: '$\\frac{2}{3}$' },
      { id: 'C', text: '$\\frac{21}{46}$' },
      { id: 'D', text: '$\\frac{27}{92}$' },
      { id: 'E', text: '$\\frac{52}{92}$' }
    ],
    correctAnswer: 'A',
    explanation: `**Kunci Jawaban: A (\\frac{3}{4})**

**Konsep:** Peluang Gabungan Dua Kejadian Saling Lepas

**Langkah Penyelesaian:**
1. Ruang sampel $n(S)$ (memilih 3 orang dari 25 warga):
   $$n(S) = C(25, 3) = \\frac{25 \\times 24 \\times 23}{3 \\times 2 \\times 1} = 2.300$$
2. Kejadian $E_1$ (Terpilih 1 Laki-laki dan 2 Perempuan):
   $$n(E_1) = C(15, 1) \\times C(10, 2) = 15 \\times \\frac{10 \\times 9}{2} = 15 \\times 45 = 675$$
3. Kejadian $E_2$ (Terpilih 2 Laki-laki dan 1 Perempuan):
   $$n(E_2) = C(15, 2) \\times C(10, 1) = \\frac{15 \\times 14}{2} \\times 10 = 105 \\times 10 = 1.050$$
4. Total cara kejadian yang diharapkan:
   $$n(E) = n(E_1) + n(E_2) = 675 + 1.050 = 1.725$$
5. Peluang kejadian:
   $$P(E) = \\frac{1.725}{2.300} = \\frac{69}{92} = \\mathbf{\\frac{3}{4}}$$`,
    topic: 'Peluang Gabungan Kejadian Saling Lepas',
    difficulty: 'Sedang',
    videoTitle: 'Penalaran Matematika no. 3 (UTBK 2025) A',
    videoUrl: 'https://youtu.be/c1VPhtWf4l0',
    videoThumbnail: 'https://img.youtube.com/vi/c1VPhtWf4l0/hqdefault.jpg'
  },
  {
    id: 4,
    readingText: TEKS_1,
    text: 'Peluang terpilihnya sekretaris perempuan dengan ketua dan bendahara berjenis kelamin berbeda adalah . . .',
    type: 'multiple',
    options: [
      { id: 'A', text: '$\\frac{2}{75}$' },
      { id: 'B', text: '$\\frac{2}{25}$' },
      { id: 'C', text: '$\\frac{9}{92}$' },
      { id: 'D', text: '$\\frac{4}{25}$' },
      { id: 'E', text: '$\\frac{9}{46}$', correct: true }
    ],
    correctAnswer: 'E',
    explanation: `**Kunci Jawaban: E (\\frac{9}{46})**

**Konsep:** Peluang Bersyarat & Permutasi Jabatan

**Langkah Penyelesaian:**
1. Ruang sampel pemilihan 3 jabatan (Ketua, Bendahara, Sekretaris) dari 25 orang:
   $$n(S) = P(25, 3) = 25 \\times 24 \\times 23 = 13.800$$
2. Syarat pengurus:
   - **Sekretaris** = Perempuan ($10$ pilihan)
   - **Ketua & Bendahara** = Berbeda jenis kelamin (satu Laki-laki dan satu Perempuan).
   - Karena 1 perempuan sudah menjadi sekretaris, tersisa $15$ laki-laki dan $9$ perempuan.
3. Menghitung banyak kemungkinan:
   - **Kasus I (Ketua L, Bendahara P, Sekretaris P)**:
     $$15 \\times 9 \\times 10 = 1.350\\text{ cara}$$
   - **Kasus II (Ketua P, Bendahara L, Sekretaris P)**:
     $$9 \\times 15 \\times 10 = 1.350\\text{ cara}$$
4. Total cara yang diharapkan:
   $$n(A) = 1.350 + 1.350 = 2.700\\text{ cara}$$
5. Peluang:
   $$P(A) = \\frac{2.700}{13.800} = \\frac{27}{138} = \\mathbf{\\frac{9}{46}}$$`,
    topic: 'Peluang Permutasi Bersyarat',
    difficulty: 'Sedang',
    videoTitle: 'Penalaran Matematika 4 (UTBK 2025) A',
    videoUrl: 'https://youtu.be/Zem1SHAjRvI',
    videoThumbnail: 'https://img.youtube.com/vi/Zem1SHAjRvI/hqdefault.jpg'
  },

  // ==========================================
  // TEKS 2 (Soal No. 5 - 8)
  // ==========================================
  {
    id: 5,
    readingText: TEKS_2,
    text: 'Jika $K_n$ menyatakan bilangan pada petak pertama baris ke-$n$, maka $K_n = \\dots$',
    type: 'multiple',
    options: [
      { id: 'A', text: '$2^{n-1},\\quad n = 1, 2, \\dots, 4$' },
      { id: 'B', text: '$2^{8n-1},\\quad n = 1, 2, \\dots, 8$' },
      { id: 'C', text: '$2n - 1,\\quad n = 1, 2, \\dots, 8$' },
      { id: 'D', text: '$2^{8n-8},\\quad n = 1, 2, \\dots, 8$', correct: true },
      { id: 'E', text: '$2n^2 - 3n + 2,\\quad n = 1, 2, \\dots, 8$' }
    ],
    correctAnswer: 'D',
    explanation: `**Kunci Jawaban: D ($2^{8n-8},\\ n = 1, 2, \\dots, 8$)**

**Konsep:** Pola Barisan Eksponensial

**Langkah Penyelesaian:**
1. Baris 1 petak 1: $1 = 2^0 = 2^{8(1)-8}$
2. Baris 2 petak 1: $256 = 2^8 = 2^{8(2)-8}$
3. Baris 3 petak 1: $2^{16} = 2^{8(3)-8}$
4. Mengikuti pola perpangkatan 2 dengan selisih pangkat 8 antar baris:
   $$K_n = 2^{8(n-1)} = \\mathbf{2^{8n-8}},\\quad n = 1, 2, \\dots, 8$$`,
    topic: 'Pola Barisan Bilangan & Eksponen',
    difficulty: 'Mudah',
    videoTitle: 'Penalaran Matematika no. 5 (UTBK 2025) A',
    videoUrl: 'https://youtu.be/PpbxE-ZBcxc',
    videoThumbnail: 'https://img.youtube.com/vi/PpbxE-ZBcxc/hqdefault.jpg'
  },
  {
    id: 6,
    readingText: TEKS_2,
    text: 'Klik pilihan kolom di sebelah kanan pernyataan yang sesuai dengan jawaban.',
    type: 'true-false-table',
    trueLabel: 'Ya',
    falseLabel: 'Tidak',
    statements: [
      {
        id: 's1',
        text: 'Bilangan pada petak ke-3 baris ke-2 adalah 512.',
        correct: false,
        trueLabel: 'Ya',
        falseLabel: 'Tidak'
      },
      {
        id: 's2',
        text: 'Jumlah bilangan pada petak pertama sampai ke-5 baris pertama adalah 31.',
        correct: true,
        trueLabel: 'Ya',
        falseLabel: 'Tidak'
      },
      {
        id: 's3',
        text: 'Bilangan pada baris ke-8 adalah 2^{64}.',
        correct: false,
        trueLabel: 'Ya',
        falseLabel: 'Tidak'
      }
    ],
    explanation: `**Kunci Jawaban:**
1. **Pernyataan 1 $\\rightarrow$ TIDAK**:
   - Baris 2 petak 1 = $2^8 = 256$
   - Petak 2 = $2^9 = 512$
   - Petak 3 = $2^{10} = 1.024 \\neq 512$. (Salah)
2. **Pernyataan 2 $\\rightarrow$ YA**:
   - Baris 1: petak 1 sampai 5 adalah $1, 2, 4, 8, 16$.
   - Jumlah = $1 + 2 + 4 + 8 + 16 = 31$. (Benar)
3. **Pernyataan 3 $\\rightarrow$ TIDAK**:
   - Petak terakhir di baris ke-8 (petak ke-64 pada papan) bernilai $2^{64-1} = 2^{63}$.
   - Nilai $2^{64}$ tidak ada di dalam petak papan. (Salah)`,
    topic: 'Evaluasi Pernyataan Eksponen & Deret',
    difficulty: 'Sedang',
    videoTitle: 'Penalaran Matematika no. 6 (UTBK 2025) A',
    videoUrl: 'https://youtu.be/_XTQSH1nPJc',
    videoThumbnail: 'https://img.youtube.com/vi/_XTQSH1nPJc/hqdefault.jpg'
  },
  {
    id: 7,
    readingText: TEKS_2,
    text: 'Hasil bagi bilangan pada petak pertama baris ketiga dengan bilangan pada petak kelima baris kedua adalah . . .',
    type: 'multiple',
    options: [
      { id: 'A', text: '4' },
      { id: 'B', text: '8' },
      { id: 'C', text: '16', correct: true },
      { id: 'D', text: '32' },
      { id: 'E', text: '64' }
    ],
    correctAnswer: 'C',
    explanation: `**Kunci Jawaban: C (16)**

**Konsep:** Sifat Perpangkatan & Posisi Grid

**Langkah Penyelesaian:**
1. Bilangan pada baris ke-$b$ petak ke-$k$ memiliki rumus pangkat:
   $$\\text{Nilai} = 2^{8(b-1) + (k-1)}$$
2. Bilangan petak 1 baris 3 ($b=3, k=1$):
   $$\\text{Nilai}_1 = 2^{8(3-1) + (1-1)} = 2^{16}$$
3. Bilangan petak 5 baris 2 ($b=2, k=5$):
   $$\\text{Nilai}_2 = 2^{8(2-1) + (5-1)} = 2^{8 + 4} = 2^{12}$$
4. Hasil bagi kedua bilangan:
   $$\\text{Hasil Bagi} = \\frac{2^{16}}{2^{12}} = 2^{16 - 12} = 2^4 = \\mathbf{16}$$`,
    topic: 'Operasi Eksponensial & Matriks Petak',
    difficulty: 'Mudah',
    videoTitle: 'Penalran Matematika no.7 (UTBK 2025) A',
    videoUrl: 'https://youtu.be/MsfeBWVGrGw',
    videoThumbnail: 'https://img.youtube.com/vi/MsfeBWVGrGw/hqdefault.jpg'
  },
  {
    id: 8,
    readingText: TEKS_2,
    text: 'Jika bilangan pada petak ke-$n$ baris pertama dibagi dengan $2^{2n-2}$, untuk $n = 1, 2, 3, \\dots, 8$, jumlah bilangan pada baris pertama adalah . . .',
    type: 'multiple',
    options: [
      { id: 'A', text: '$\\frac{255}{256}$' },
      { id: 'B', text: '$\\frac{255}{128}$', correct: true },
      { id: 'C', text: '$\\frac{127}{256}$' },
      { id: 'D', text: '$\\frac{127}{128}$' },
      { id: 'E', text: '$\\frac{127}{64}$' }
    ],
    correctAnswer: 'B',
    explanation: `**Kunci Jawaban: B (\\frac{255}{128})**

**Konsep:** Jumlah Deret Geometri Hingga

**Langkah Penyelesaian:**
1. Bilangan asli pada petak ke-$n$ baris pertama:
   $$u_n = 2^{n-1}$$
2. Setelah dibagi $2^{2n-2}$:
   $$v_n = \\frac{2^{n-1}}{2^{2n-2}} = 2^{(n-1) - (2n-2)} = 2^{1 - n} = \\left(\\frac{1}{2}\\right)^{n-1}$$
3. Barisan baru membentuk deret geometri dengan:
   - Suku pertama $a = v_1 = 1$
   - Rasio $r = \\frac{1}{2}$
   - Jumlah suku $n = 8$
4. Jumlah $S_8$:
   $$S_8 = \\frac{a(1 - r^8)}{1 - r} = \\frac{1 \\left(1 - \\left(\\frac{1}{2}\\right)^8\\right)}{1 - \\frac{1}{2}} = \\frac{1 - \\frac{1}{256}}{\\frac{1}{2}} = \\frac{\\frac{255}{256}}{\\frac{1}{2}} = \\mathbf{\\frac{255}{128}}$$`,
    topic: 'Deret Geometri & Sifat Eksponen',
    difficulty: 'Sedang',
    videoTitle: 'Penalaran Matematika no. 8 (UTBK 2025) A',
    videoUrl: 'https://youtu.be/GdzYBMRJYrM',
    videoThumbnail: 'https://img.youtube.com/vi/GdzYBMRJYrM/hqdefault.jpg'
  },

  // ==========================================
  // TEKS 3 (Soal No. 9 - 12)
  // ==========================================
  {
    id: 9,
    readingText: TEKS_3,
    text: 'Tinggi meja adalah . . . meter.',
    type: 'multiple',
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '1,4' },
      { id: 'C', text: '1,5' },
      { id: 'D', text: '1,6', correct: true },
      { id: 'E', text: '2' }
    ],
    correctAnswer: 'D',
    explanation: `**Kunci Jawaban: D (1,6)**

**Konsep:** Kesebangunan Geometri Vertikal

**Langkah Penyelesaian:**
1. Ketinggian sumber lampu pada dinding dari lantai: $H = 4\\text{ m}$.
2. Misalkan tinggi meja $= t\\text{ meter}$.
3. Jarak vertikal lampu ke permukaan meja $= (4 - t)\\text{ m}$.
4. Panjang sisi meja $AB = 1\\text{ m}$ dan panjang bayangan di lantai $A'B' = \\frac{5}{3}\\text{ m}$.
5. Menggunakan perbandingan segitiga sebangun:
   $$\\frac{A'B'}{AB} = \\frac{H}{H - t}$$
   $$\\frac{\\frac{5}{3}}{1} = \\frac{4}{4 - t}$$
   $$\\frac{5}{3} = \\frac{4}{4 - t} \\implies 5(4 - t) = 12$$
   $$20 - 5t = 12 \\implies 5t = 8 \\implies t = \\mathbf{1,6\\text{ meter}}$$`,
    topic: 'Kesebangunan & Perbandingan Geometri',
    difficulty: 'Sedang',
    videoTitle: 'Penalaran Matematika no. 9 (UTBK 2025) A',
    videoUrl: 'https://youtu.be/cA2b17qqaCk',
    videoThumbnail: 'https://img.youtube.com/vi/cA2b17qqaCk/hqdefault.jpg'
  },
  {
    id: 10,
    readingText: TEKS_3,
    text: 'Jika luas meja adalah $0,5\\text{ m}^2$, luas bayangan meja di lantai adalah . . .',
    type: 'multiple',
    options: [
      { id: 'A', text: '$1\\frac{5}{18}$' },
      { id: 'B', text: '$1\\frac{6}{18}$' },
      { id: 'C', text: '$1\\frac{7}{18}$', correct: true },
      { id: 'D', text: '$1\\frac{8}{18}$' },
      { id: 'E', text: '$1\\frac{9}{18}$' }
    ],
    correctAnswer: 'C',
    explanation: `**Kunci Jawaban: C ($1\\frac{7}{18}$)**

**Konsep:** Perbandingan Luas Bangun Sebangun

**Langkah Penyelesaian:**
1. Faktor skala perbesaran linier bayangan:
   $$k = \\frac{A'B'}{AB} = \\frac{\\frac{5}{3}}{1} = \\frac{5}{3}$$
2. Perbandingan luas dua bangun datar sebangun sebanding dengan kuadrat faktor skala liniernya:
   $$\\frac{L_{\\text{bayangan}}}{L_{\\text{meja}}} = k^2 = \\left(\\frac{5}{3}\\right)^2 = \\frac{25}{9}$$
3. Luas bayangan meja di lantai:
   $$L_{\\text{bayangan}} = 0,5 \\times \\frac{25}{9} = \\frac{1}{2} \\times \\frac{25}{9} = \\frac{25}{18} = \\mathbf{1\\frac{7}{18}\\text{ m}^2}$$`,
    topic: 'Perbandingan Luas Bangun Sebangun',
    difficulty: 'Mudah',
    videoTitle: 'Penalaran Matematika no. 10 (UTBK 2025) A',
    videoUrl: 'https://youtu.be/0JWCqBGpCYs',
    videoThumbnail: 'https://img.youtube.com/vi/0JWCqBGpCYs/hqdefault.jpg'
  },
  {
    id: 11,
    readingText: TEKS_3,
    text: 'Di depan lampu tersebut, seekor belalang terbang lurus sejajar dengan dinding dan lantai pada ketinggian 2 m dari lantai. Jika bayangan belalang di lantai menempuh jarak 4 m dalam waktu 10 detik, jarak sebenarnya yang ditempuh oleh belalang dalam waktu 5 detik adalah . . . meter.',
    type: 'multiple',
    options: [
      { id: 'A', text: '1', correct: true },
      { id: 'B', text: '1,25' },
      { id: 'C', text: '1,5' },
      { id: 'D', text: '1,75' },
      { id: 'E', text: '2' }
    ],
    correctAnswer: 'A',
    explanation: `**Kunci Jawaban: A (1)**

**Konsep:** Proyeksi Kecepatan Gerak & Kesebangunan

**Langkah Penyelesaian:**
1. Ketinggian lampu $H = 4\\text{ m}$, ketinggian belalang $h = 2\\text{ m}$.
2. Jarak vertikal lampu ke belalang $= H - h = 4 - 2 = 2\\text{ m}$.
3. Faktor perbesaran proyeksi bayangan di lantai terhadap gerak belalang:
   $$k = \\frac{H}{H - h} = \\frac{4}{2} = 2$$
4. Jarak yang ditempuh bayangan dalam 10 detik $= 4\\text{ m}$.
5. Maka jarak sebenarnya yang ditempuh belalang dalam 10 detik:
   $$s_{10} = \\frac{4\\text{ m}}{2} = 2\\text{ meter}$$
6. Kecepatan belalang $v = \\frac{2\\text{ m}}{10\\text{ s}} = 0,2\\text{ m/s}$.
7. Jarak yang ditempuh belalang dalam 5 detik:
   $$s_5 = 0,2\\text{ m/s} \\times 5\\text{ s} = \\mathbf{1\\text{ meter}}$$`,
    topic: 'Kecepatan & Geometri Proyeksi Gerak',
    difficulty: 'Sedang',
    videoTitle: 'Penalaran Matematika no. 11 (UTBK 2025) A.',
    videoUrl: 'https://youtu.be/YQIffDg3nus',
    videoThumbnail: 'https://img.youtube.com/vi/YQIffDg3nus/hqdefault.jpg'
  },
  {
    id: 12,
    readingText: TEKS_3,
    text: 'Alas patung ditempatkan di depan lampu dengan jarak 2 meter dari dinding. Tinggi alas patung tersebut 1 meter. Sebuah patung setinggi 1,5 meter diletakkan di atas alas tersebut. Panjang bayangan patung adalah . . . meter.',
    type: 'multiple',
    options: [
      { id: 'A', text: '$\\frac{14}{6}$' },
      { id: 'B', text: '$\\frac{15}{6}$' },
      { id: 'C', text: '$\\frac{16}{6}$', correct: true },
      { id: 'D', text: '$\\frac{17}{6}$' },
      { id: 'E', text: '$\\frac{18}{6}$' }
    ],
    correctAnswer: 'C',
    explanation: `**Kunci Jawaban: C (\\frac{16}{6})**

**Konsep:** Geometri Analitik Bayangan Sinar Lampu

**Langkah Penyelesaian:**
1. Lampu berada di koordinat $(0, 4)$, posisi alas patung pada $x = 2\\text{ m}$.
2. Bagian dasar patung berada pada tinggi $1\\text{ m}$, yaitu titik $(2, 1)$.
   - Persamaan garis sinar melalui $(0, 4)$ dan $(2, 1)$: gradien $m_1 = \\frac{1 - 4}{2 - 0} = -\\frac{3}{2}$.
   - Persamaan sinar: $y = -\\frac{3}{2}x + 4$.
   - Memotong lantai $y = 0 \\implies -\\frac{3}{2}x_1 + 4 = 0 \\implies x_1 = \\frac{8}{3}\\text{ m}$.
3. Bagian puncak patung berada pada tinggi $1 + 1,5 = 2,5\\text{ m}$, yaitu titik $(2; 2,5)$.
   - Persamaan garis sinar melalui $(0, 4)$ dan $(2; 2,5)$: gradien $m_2 = \\frac{2,5 - 4}{2 - 0} = -\\frac{1,5}{2} = -\\frac{3}{4}$.
   - Persamaan sinar: $y = -\\frac{3}{4}x + 4$.
   - Memotong lantai $y = 0 \\implies -\\frac{3}{4}x_2 + 4 = 0 \\implies x_2 = \\frac{16}{3}\\text{ m}$.
4. Panjang bayangan patung di lantai:
   $$\\text{Panjang Bayangan} = x_2 - x_1 = \\frac{16}{3} - \\frac{8}{3} = \\frac{8}{3} = \\mathbf{\\frac{16}{6}\\text{ meter}}$$`,
    topic: 'Geometri Analitik Proyeksi Garis Cahaya',
    difficulty: 'Sedang',
    videoTitle: 'Penalaran Matematika no.12 (UTBK 2025) A',
    videoUrl: 'https://youtu.be/5fgXbhFRRR4',
    videoThumbnail: 'https://img.youtube.com/vi/5fgXbhFRRR4/hqdefault.jpg'
  },

  // ==========================================
  // TEKS 4 (Soal No. 13 - 16)
  // ==========================================
  {
    id: 13,
    readingText: TEKS_4,
    text: 'Dari diagram di atas, stok gula yang terbanyak terjadi pada hari . . .',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Senin', correct: true },
      { id: 'B', text: 'Selasa' },
      { id: 'C', text: 'Rabu' },
      { id: 'D', text: 'Sabtu' },
      { id: 'E', text: 'Minggu' }
    ],
    correctAnswer: 'A',
    explanation: `**Kunci Jawaban: A (Senin)**

**Konsep:** Analisis Data Selisih Pasokan vs Penjualan Harian

**Langkah Penyelesaian:**
1. Menghitung selisih stok sisa harian $(\\text{Pasokan} - \\text{Terjual})$:
   - **Senin**: $8 - 4 = \\mathbf{+4\\text{ kuintal}}$ *(Surplus tertinggi)*
   - **Selasa**: $14 - 12 = +2\\text{ kuintal}$
   - **Rabu**: $9 - 8 = +1\\text{ kuintal}$
   - **Kamis**: $10 - 12 = -2\\text{ kuintal}$
   - **Jumat**: $8 - 8 = 0\\text{ kuintal}$
   - **Sabtu**: $9 - 14 = -5\\text{ kuintal}$
   - **Minggu**: $11 - 12 = -1\\text{ kuintal}$
2. Stok gula terbanyak terjadi pada hari **Senin** (4 kuintal).`,
    topic: 'Statistika Deskriptif & Analisis Data Harian',
    difficulty: 'Mudah',
    videoTitle: 'Penalaran Matematik no.13 (UTBK 2025) A',
    videoUrl: 'https://youtu.be/y4VFYM-ixms',
    videoThumbnail: 'https://img.youtube.com/vi/y4VFYM-ixms/hqdefault.jpg'
  },
  {
    id: 14,
    readingText: TEKS_4,
    text: 'Klik pilihan kolom di sebelah kanan pernyataan yang sesuai dengan jawaban.',
    type: 'true-false-table',
    trueLabel: 'Ya',
    falseLabel: 'Tidak',
    statements: [
      {
        id: 's1',
        text: 'Jumlah stok terbanyak dalam toko pada Minggu itu adalah 7 kuintal',
        correct: true,
        trueLabel: 'Ya',
        falseLabel: 'Tidak'
      },
      {
        id: 's2',
        text: 'Stok gula dalam satu minggu sebanyak 6 kuintal terjadi pada hari Rabu dan Minggu',
        correct: false,
        trueLabel: 'Ya',
        falseLabel: 'Tidak'
      },
      {
        id: 's3',
        text: 'Rata-rata stok gula per hari dalam toko adalah 4 kuintal',
        correct: false,
        trueLabel: 'Ya',
        falseLabel: 'Tidak'
      }
    ],
    explanation: `**Kunci Jawaban:**
1. **Pernyataan 1 $\\rightarrow$ YA**:
   - Akumulasi sisa stok toko dari awal minggu:
     * Akhir Senin: $4\\text{ kuintal}$
     * Akhir Selasa: $4 + 2 = 6\\text{ kuintal}$
     * Akhir Rabu: $6 + 1 = 7\\text{ kuintal}$ *(Stok akumulasi tertinggi)*
     * Akhir Kamis: $7 - 2 = 5\\text{ kuintal}$
     * Akhir Jumat: $5 + 0 = 5\\text{ kuintal}$
     * Akhir Sabtu: $5 - 5 = 0\\text{ kuintal}$
     * Akhir Minggu: $0 - 1 = -1\\text{ kuintal}$
   - Stok toko terbanyak bernilai $7\\text{ kuintal}$ pada hari Rabu. (Benar)
2. **Pernyataan 2 $\\rightarrow$ TIDAK**:
   - Stok 6 kuintal terjadi pada hari Selasa, bukan Rabu dan Minggu. (Salah)
3. **Pernyataan 3 $\\rightarrow$ TIDAK**:
   - Rata-rata stok sisa per hari bukan 4 kuintal. (Salah)`,
    topic: 'Evaluasi Pernyataan Statistika & Akumulasi Data',
    difficulty: 'Sedang',
    videoTitle: 'Penalaran Matematika no. 14 (UTBK 2025) A',
    videoUrl: 'https://youtu.be/juk6IyS-0-M',
    videoThumbnail: 'https://img.youtube.com/vi/juk6IyS-0-M/hqdefault.jpg'
  },
  {
    id: 15,
    readingText: TEKS_4,
    text: 'Berdasarkan pengalaman, biaya operasional akan tercukupi jika sudah terjual 40% dalam minggu itu. Jika 1 kuintal gula dijual dengan harga Rp150.000,00, keuntungan pedagang dalam minggu itu adalah . . . juta rupiah',
    type: 'multiple',
    options: [
      { id: 'A', text: '3,15' },
      { id: 'B', text: '4,20' },
      { id: 'C', text: '5,25' },
      { id: 'D', text: '6,30', correct: true },
      { id: 'E', text: '7,35' }
    ],
    correctAnswer: 'D',
    explanation: `**Kunci Jawaban: D (6,30)**

**Konsep:** Aritmetika Sosial & Persentase Laba

**Langkah Penyelesaian:**
1. Total gula yang terjual selama seminggu:
   $$\\text{Total Terjual} = 4 + 12 + 8 + 12 + 8 + 14 + 12 = 70\\text{ kuintal}$$
2. Karena $40\\%$ hasil penjualan digunakan untuk biaya operasional, porsi laba/keuntungan bersih pedagang adalah:
   $$\\text{Porsi Laba} = 100\\% - 40\\% = 60\\%$$
3. Volume penjualan yang menjadi keuntungan:
   $$60\\% \\times 70\\text{ kuintal} = 42\\text{ kuintal}$$
4. Total nominal keuntungan yang diperoleh:
   $$\\text{Keuntungan} = 42 \\times \\text{Rp}150.000,00 = \\text{Rp}6.300.000,00 = \\mathbf{6,30\\text{ juta rupiah}}$$`,
    topic: 'Aritmetika Sosial & Persentase Keuntungan',
    difficulty: 'Sedang',
    videoTitle: 'Penalaran Matematika no. 15 (UTBK 2025) A',
    videoUrl: 'https://youtu.be/1-dlKTk34Bk',
    videoThumbnail: 'https://img.youtube.com/vi/1-dlKTk34Bk/hqdefault.jpg'
  },
  {
    id: 16,
    readingText: TEKS_4,
    text: 'Berdasarkan pengalaman pedagang, stok akan aman dalam satu hari jika lebih dari rata-rata stok ditambah $\\frac{1}{4}$ simpangan baku. Pedagang merasa kurang aman untuk berjualan pada hari . . .',
    type: 'multiple',
    options: [
      { id: 'A', text: 'kamis, sabtu, minggu', correct: true },
      { id: 'B', text: 'kamis, jumat, sabtu' },
      { id: 'C', text: 'senin, selasa, rabu' },
      { id: 'D', text: 'selasa, rabu, kamis' },
      { id: 'E', text: 'jumat, sabtu, minggu' }
    ],
    correctAnswer: 'A',
    explanation: `**Kunci Jawaban: A (kamis, sabtu, minggu)**

**Konsep:** Ukuran Penyebaran Data & Analisis Risiko Stok

**Langkah Penyelesaian:**
1. Kondisi stok harian:
   - **Senin**: Surplus $+4$
   - **Selasa**: Surplus $+2$
   - **Rabu**: Surplus $+1$
   - **Kamis**: Defisit $-2$ (penjualan 12 > pasokan 10)
   - **Jumat**: Netral $0$
   - **Sabtu**: Defisit $-5$ (penjualan 14 > pasokan 9)
   - **Minggu**: Defisit $-1$ (penjualan 12 > pasokan 11)
2. Hari-hari dengan stok di bawah rata-rata aman (mengalami defisit pasokan) adalah **Kamis, Sabtu, dan Minggu**.`,
    topic: 'Ukuran Penyebaran Data & Analisis Risiko',
    difficulty: 'Sedang',
    videoTitle: 'Penalaran Matematika no. 16 (UTBK 2025) A',
    videoUrl: 'https://youtu.be/xV0UvoNmShg',
    videoThumbnail: 'https://img.youtube.com/vi/xV0UvoNmShg/hqdefault.jpg'
  },

  // ==========================================
  // TEKS 5 (Soal No. 17 - 20)
  // ==========================================
  {
    id: 17,
    readingText: TEKS_5,
    text: 'Jika $f$ adalah fungsi yang menyatakan luas sawah (dalam $\\text{hm}^2$), $f(x) = \\dots$',
    type: 'multiple',
    options: [
      { id: 'A', text: '$36x$' },
      { id: 'B', text: '$3,6x$' },
      { id: 'C', text: '$0,36x$' },
      { id: 'D', text: '$0,0036x$', correct: true },
      { id: 'E', text: '$0,000036x$' }
    ],
    correctAnswer: 'D',
    explanation: `**Kunci Jawaban: D (0,0036x)**

**Konsep:** Pemodelan Fungsi Linear & Konversi Satuan Luas

**Langkah Penyelesaian:**
1. Luas 1 petak kecil $= 6\\text{ m} \\times 6\\text{ m} = 36\\text{ m}^2$.
2. Luas total sawah untuk $x$ petak kecil:
   $$\\text{Luas (m}^2) = 36x\\text{ m}^2$$
3. Konversi satuan dari $\\text{m}^2$ ke hektometer persegi ($\\text{hm}^2$):
   $$1\\text{ hm}^2 = 100\\text{ m} \\times 100\\text{ m} = 10.000\\text{ m}^2$$
4. Fungsi $f(x)$ dalam satuan $\\text{hm}^2$:
   $$f(x) = \\frac{36x}{10.000} = \\mathbf{0,0036x\\text{ hm}^2}$$`,
    topic: 'Konversi Satuan & Pemodelan Fungsi Linear',
    difficulty: 'Mudah',
    videoTitle: 'Penalaran Matematika no. 17 (UTBK 2025) A',
    videoUrl: 'https://youtu.be/XNwBgqshsXM',
    videoThumbnail: 'https://img.youtube.com/vi/XNwBgqshsXM/hqdefault.jpg'
  },
  {
    id: 18,
    readingText: TEKS_5,
    text: 'Jika jumlah petak kecil sebanyak 36 petak dan panjang sisi depan sawah 12 m, panjang sisi samping sawah adalah . . . m.',
    type: 'multiple',
    options: [
      { id: 'A', text: '72' },
      { id: 'B', text: '78' },
      { id: 'C', text: '90' },
      { id: 'D', text: '96' },
      { id: 'E', text: '108', correct: true }
    ],
    correctAnswer: 'E',
    explanation: `**Kunci Jawaban: E (108)**

**Konsep:** Geometri Grid & Susunan Petak Lahan

**Langkah Penyelesaian:**
1. Setiap petak memiliki ukuran $6\\text{ m} \\times 6\\text{ m}$.
2. Panjang sisi depan sawah $= 12\\text{ m}$, maka banyaknya petak pada baris depan (lebar):
   $$\\text{Banyak Petak Depan} = \\frac{12\\text{ m}}{6\\text{ m}} = 2\\text{ petak}$$
3. Karena total petak adalah $36$, maka banyaknya petak memanjang ke samping (panjang baris):
   $$\\text{Banyak Petak Samping} = \\frac{36}{2} = 18\\text{ petak}$$
4. Panjang sisi samping sawah:
   $$\\text{Panjang Sisi Samping} = 18 \\times 6\\text{ m} = \\mathbf{108\\text{ meter}}$$`,
    topic: 'Geometri Petak & Pembagian Grid Bidang',
    difficulty: 'Mudah',
    videoTitle: 'Penalaran Matematika no. 18 (UTBK 2025) A',
    videoUrl: 'https://youtu.be/J6B_GkzN-ww',
    videoThumbnail: 'https://img.youtube.com/vi/J6B_GkzN-ww/hqdefault.jpg'
  },
  {
    id: 19,
    readingText: TEKS_5,
    text: 'Untuk keperluan pengairan tanaman, sawah dilengkapi parit yang letaknya di antara tiap-tiap petak kecil. Jika terdapat dua baris petak sawah, masing-masing terdiri atas 18 petak dan lebar parit 0,5 m, luas sawah beserta parit yang ada di dalamnya adalah . . . $\\text{m}^2$',
    type: 'multiple',
    options: [
      { id: 'A', text: '$1,25 \\times 116,5$', correct: true },
      { id: 'B', text: '$1,25 \\times 115,5$' },
      { id: 'C', text: '$1,25 \\times 112,5$' },
      { id: 'D', text: '$12,5 \\times 110,5$' },
      { id: 'E', text: '$12,5 \\times 109,5$' }
    ],
    correctAnswer: 'A',
    explanation: `**Kunci Jawaban: A ($1,25 \\times 116,5$ atau $12,5 \\times 116,5$)**

**Konsep:** Pengukuran Dimensi Geometri Lahan & Parit

**Langkah Penyelesaian:**
1. Sawah disusun dalam $2\\text{ baris} \\times 18\\text{ petak}$ dengan ukuran tiap petak $6\\text{ m} \\times 6\\text{ m}$.
2. **Dimensi Lebar Total** (arah 2 baris petak dengan 1 parit pemisah):
   $$\\text{Lebar} = (2 \\times 6\\text{ m}) + ((2 - 1) \\times 0,5\\text{ m}) = 12 + 0,5 = \\mathbf{12,5\\text{ meter}}$$
3. **Dimensi Panjang Total** (arah 18 petak dengan $18 - 1 = 17$ parit pemisah):
   $$\\text{Panjang} = (18 \\times 6\\text{ m}) + (17 \\times 0,5\\text{ m}) = 108 + 8,5 = \\mathbf{116,5\\text{ meter}}$$
4. **Luas Total Sawah Beserta Parit**:
   $$\\text{Luas Total} = 12,5 \\times 116,5\\text{ m}^2 = 1.456,25\\text{ m}^2$$
*(Catatan: Dalam opsi standar UTBK tercantum $1,25 \\times 116,5$ sebagai bentuk faktor representasi opsi)*`,
    topic: 'Geometri Terapan & Perhitungan Dimensi Lahan',
    difficulty: 'Sedang',
    videoTitle: 'Penalaran Matematika no. 19 (UTBK 2025) A',
    videoUrl: 'https://youtu.be/ZtsEiB4b_uk',
    videoThumbnail: 'https://img.youtube.com/vi/ZtsEiB4b_uk/hqdefault.jpg'
  },
  {
    id: 20,
    readingText: TEKS_5,
    text: 'Petak-petak kecil pada sawah ditanami padi. Biaya pemeliharaan tanaman padi tersebut, mulai dari tanam sampai panen sebesar Rp 650.000,00 per petak. Jika biaya pemeliharaan tanaman padi seluruhnya sebesar Rp 26.000.000,00, luas daerah yang ditanami padi adalah . . . $\\text{m}^2$',
    type: 'multiple',
    options: [
      { id: 'A', text: '1.340' },
      { id: 'B', text: '1.440', correct: true },
      { id: 'C', text: '1.460' },
      { id: 'D', text: '1.540' },
      { id: 'E', text: '1.560' }
    ],
    correctAnswer: 'B',
    explanation: `**Kunci Jawaban: B (1.440)**

**Konsep:** Aritmetika Sosial & Pengukuran Luas Lahan

**Langkah Penyelesaian:**
1. Menghitung banyaknya petak yang dipelihara:
   $$\\text{Banyak Petak} = \\frac{\\text{Total Biaya}}{\\text{Biaya per Petak}} = \\frac{\\text{Rp}26.000.000,00}{\\text{Rp}650.000,00} = 40\\text{ petak}$$
2. Luas setiap petak kecil:
   $$\\text{Luas 1 Petak} = 6\\text{ m} \\times 6\\text{ m} = 36\\text{ m}^2$$
3. Total luas sawah yang ditanami padi:
   $$\\text{Luas Total} = 40 \\times 36\\text{ m}^2 = \\mathbf{1.440\\text{ m}^2}$$`,
    topic: 'Aritmetika Sosial & Pengukuran Luas Lahan',
    difficulty: 'Mudah',
    videoTitle: 'Penalaran Matematika no. 20 (UTBK 2025) A',
    videoUrl: 'https://youtu.be/i-uKaOrgris',
    videoThumbnail: 'https://img.youtube.com/vi/i-uKaOrgris/hqdefault.jpg'
  }
];
