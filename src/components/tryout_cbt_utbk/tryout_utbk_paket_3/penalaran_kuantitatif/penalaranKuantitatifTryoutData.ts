import { UtbkQuestion } from '../types';

export const penalaranKuantitatifTryoutData: UtbkQuestion[] = [
  {
    id: 1,
    text: 'Jika $x$ adalah $35\\%$ dari $80$, dan $y$ adalah $\\frac{4}{5}$ dari $35$, maka hubungan yang benar antara nilai $x$ dan $y$ adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '$x > y$' },
      { id: 'B', text: '$x < y$' },
      { id: 'C', text: '$x = y$', correct: true },
      { id: 'D', text: '$2x = 3y$' },
      { id: 'E', text: 'Hubungan $x$ dan $y$ tidak dapat ditentukan' }
    ],
    correctAnswer: 'C',
    explanation: 'Nilai $x = 0{,}35 \\times 80 = 28$.\nNilai $y = \\frac{4}{5} \\times 35 = 4 \\times 7 = 28$.\nKarena $x = 28$ dan $y = 28$, maka $x = y$.',
    topic: 'Operasi Pecahan & Persentase',
    difficulty: 'Mudah'
  },
  {
    id: 2,
    text: 'Sebuah proyek renovasi gedung direncanakan selesai dalam waktu 30 hari dengan 18 orang pekerja. Setelah dikerjakan selama 10 hari, pekerjaan terhenti selama 5 hari karena cuaca ekstrem. Agar proyek tetap selesai tepat waktu sesuai jadwal semula, banyak pekerja tambahan yang harus direkrut adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '4 orang' },
      { id: 'B', text: '6 orang', correct: true },
      { id: 'C', text: '8 orang' },
      { id: 'D', text: '10 orang' },
      { id: 'E', text: '12 orang' }
    ],
    correctAnswer: 'B',
    explanation: 'Sisa beban kerja: $(30 - 10) \\text{ hari} \\times 18 \\text{ pekerja} = 20 \\times 18 = 360 \\text{ orang-hari}$.\nSisa waktu yang tersedia: $30 - 10 - 5 = 15 \\text{ hari}$.\nJumlah pekerja yang dibutuhkan: $\\frac{360}{15} = 24 \\text{ orang}$.\nTambahan pekerja yang diperlukan: $24 - 18 = 6 \\text{ orang}$.',
    topic: 'Perbandingan Berbalik Nilai',
    difficulty: 'Sedang'
  },
  {
    id: 3,
    text: 'Rata-rata nilai ujian matematika dari 24 siswa perempuan adalah 82, sedangkan rata-rata nilai dari 16 siswa laki-laki adalah 72. Rata-rata nilai ujian gabungan seluruh 40 siswa tersebut adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '76,5' },
      { id: 'B', text: '77,0' },
      { id: 'C', text: '78,0', correct: true },
      { id: 'D', text: '78,5' },
      { id: 'E', text: '79,0' }
    ],
    correctAnswer: 'C',
    explanation: 'Total nilai perempuan $= 24 \\times 82 = 1968$.\nTotal nilai laki-laki $= 16 \\times 72 = 1152$.\nTotal gabungan $= 1968 + 1152 = 3120$.\nRata-rata gabungan $= \\frac{3120}{40} = 78{,}0$.',
    topic: 'Statistika Rata-Rata Gabungan',
    difficulty: 'Mudah'
  },
  {
    id: 4,
    text: 'Sebuah toko pakaian memberikan diskon ganda bertingkat: diskon pertama $30\\%$, kemudian dari harga setelah diskon pertama diberikan diskon tambahan lagi sebesar $20\\%$. Total diskon efektif yang dinikmati pembeli dari harga awal adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '44%', correct: true },
      { id: 'B', text: '48%' },
      { id: 'C', text: '50%' },
      { id: 'D', text: '52%' },
      { id: 'E', text: '54%' }
    ],
    correctAnswer: 'A',
    explanation: 'Harga setelah diskon pertama $= 100\\% - 30\\% = 70\\%$.\nHarga akhir setelah diskon kedua $= 70\\% \\times (1 - 0{,}20) = 70\\% \\times 0{,}80 = 56\\%$.\nTotal diskon efektif $= 100\\% - 56\\% = 44\\%$.',
    topic: 'Aritmetika Sosial & Diskon Bertingkat',
    difficulty: 'Sedang'
  },
  {
    id: 5,
    text: 'Diketahui perbandingan uang tabungan Alif, Bagas, dan Candra adalah $3 : 4 : 5$. Jika selisih uang tabungan Candra dan Alif adalah Rp120.000, maka jumlah total uang tabungan mereka bertiga adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Rp600.000' },
      { id: 'B', text: 'Rp720.000', correct: true },
      { id: 'C', text: 'Rp840.000' },
      { id: 'D', text: 'Rp960.000' },
      { id: 'E', text: 'Rp1.080.000' }
    ],
    correctAnswer: 'B',
    explanation: 'Selisih perbandingan Candra dan Alif $= 5 - 3 = 2$ bagian $= \\text{Rp120.000}$.\nNilai 1 bagian $= \\frac{120.000}{2} = \\text{Rp60.000}$.\nTotal perbandingan $= 3 + 4 + 5 = 12$ bagian.\nTotal uang bertiga $= 12 \\times 60.000 = \\text{Rp720.000}$.',
    topic: 'Perbandingan Senilai',
    difficulty: 'Mudah'
  },
  {
    id: 6,
    text: 'Sebuah mobil menempuh jarak $180\\text{ km}$ dengan kecepatan rata-rata $60\\text{ km/jam}$. Pada perjalanan pulang dengan rute yang sama, kecepatan mobil ditingkatkan menjadi $90\\text{ km/jam}$. Kecepatan rata-rata mobil untuk seluruh perjalanan pergi-pulang adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '72 km/jam', correct: true },
      { id: 'B', text: '75 km/jam' },
      { id: 'C', text: '76 km/jam' },
      { id: 'D', text: '78 km/jam' },
      { id: 'E', text: '80 km/jam' }
    ],
    correctAnswer: 'A',
    explanation: 'Waktu berangkat $= \\frac{180}{60} = 3\\text{ jam}$.\nWaktu pulang $= \\frac{180}{90} = 2\\text{ jam}$.\nTotal jarak $= 180 + 180 = 360\\text{ km}$.\nTotal waktu $= 3 + 2 = 5\\text{ jam}$.\nKecepatan rata-rata $= \\frac{360}{5} = 72\\text{ km/jam}$.',
    topic: 'Kecepatan, Jarak, & Waktu',
    difficulty: 'Sedang'
  },
  {
    id: 7,
    text: 'Jika $a + b = 10$ dan $a \\cdot b = 21$, dengan $a > b$, maka nilai dari $a^2 - b^2$ adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '20' },
      { id: 'B', text: '40', correct: true },
      { id: 'C', text: '48' },
      { id: 'D', text: '58' },
      { id: 'E', text: '64' }
    ],
    correctAnswer: 'B',
    explanation: 'Dua bilangan yang dijumlahkan bernilai 10 dan dikalikan bernilai 21 adalah 7 dan 3. Karena $a > b$, maka $a = 7$ dan $b = 3$.\nMaka $a^2 - b^2 = 7^2 - 3^2 = 49 - 9 = 40$ (atau $(a-b)(a+b) = (7-3)(10) = 4 \\times 10 = 40$).',
    topic: 'Aljabar & Faktorisasi',
    difficulty: 'Mudah'
  },
  {
    id: 8,
    text: 'Sebuah tangki air dapat diisi penuh oleh pipa A dalam waktu 6 jam, sedangkan pipa B dapat mengisi penuh tangki yang sama dalam waktu 4 jam. Jika kedua pipa dibuka bersama-sama dari kondisi tangki kosong, waktu yang dibutuhkan hingga tangki terisi penuh adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '2 jam 12 menit' },
      { id: 'B', text: '2 jam 24 menit', correct: true },
      { id: 'C', text: '2 jam 30 menit' },
      { id: 'D', text: '2 jam 45 menit' },
      { id: 'E', text: '3 jam' }
    ],
    correctAnswer: 'B',
    explanation: 'Debit gabungan $= \\frac{1}{6} + \\frac{1}{4} = \\frac{2 + 3}{12} = \\frac{5}{12}\\text{ tangki/jam}$.\nWaktu total $= \\frac{12}{5} = 2{,}4\\text{ jam} = 2\\text{ jam } + (0{,}4 \\times 60)\\text{ menit} = 2\\text{ jam } 24\\text{ menit}$.',
    topic: 'Debit & Laju Gabungan',
    difficulty: 'Sedang'
  },
  {
    id: 9,
    text: 'Dalam suatu barisan aritmetika, diketahui suku ke-3 adalah 14 dan suku ke-7 adalah 30. Jumlah 10 suku pertama ($S_{10}$) dari barisan tersebut adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '210' },
      { id: 'B', text: '225' },
      { id: 'C', text: '240', correct: true },
      { id: 'D', text: '255' },
      { id: 'E', text: '270' }
    ],
    correctAnswer: 'C',
    explanation: '$U_7 - U_3 = 4b = 30 - 14 = 16 \\Rightarrow b = 4$.\n$U_3 = a + 2b = a + 8 = 14 \\Rightarrow a = 6$.\n$S_{10} = \\frac{10}{2} [2(6) + (10-1)(4)] = 5 [12 + 36] = 5 \\times 48 = 240$.',
    topic: 'Barisan & Deret Aritmetika',
    difficulty: 'Sedang'
  },
  {
    id: 10,
    text: 'Sebuah kotak berisi 5 bola merah, 4 bola biru, dan 3 bola kuning. Jika diambil 2 bola secara acak satu per satu tanpa pengembalian, peluang terambilnya bola pertama merah dan bola kedua biru adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '$\\frac{5}{33}$', correct: true },
      { id: 'B', text: '$\\frac{1}{6}$' },
      { id: 'C', text: '$\\frac{5}{36}$' },
      { id: 'D', text: '$\\frac{2}{11}$' },
      { id: 'E', text: '$\\frac{7}{33}$' }
    ],
    correctAnswer: 'A',
    explanation: 'Total bola $= 5 + 4 + 3 = 12$.\nPeluang bola 1 merah $= \\frac{5}{12}$.\nSisa bola $= 11$. Peluang bola 2 biru $= \\frac{4}{11}$.\nPeluang gabungan $= \\frac{5}{12} \\times \\frac{4}{11} = \\frac{20}{132} = \\frac{5}{33}$.',
    topic: 'Peluang Bersyarat & Kombinatorika',
    difficulty: 'Sedang'
  }
];
