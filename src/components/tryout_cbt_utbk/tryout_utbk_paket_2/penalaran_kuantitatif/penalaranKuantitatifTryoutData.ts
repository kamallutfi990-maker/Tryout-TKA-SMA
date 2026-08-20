import { UtbkQuestion } from '../types';

export const penalaranKuantitatifTryoutData: UtbkQuestion[] = [
  {
    id: 1,
    text: 'Perhatikan pola barisan bilangan berikut:\n**3, 7, 15, 31, 63, ...**\n\nBilangan berikutnya pada barisan tersebut adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '127', correct: true },
      { id: 'B', text: '125' },
      { id: 'C', text: '129' },
      { id: 'D', text: '131' },
      { id: 'E', text: '119' }
    ],
    correctAnswer: 'A',
    explanation: 'Pola relasi bilangan: x_n = 2 * x_{n-1} + 1.\n3 * 2 + 1 = 7\n7 * 2 + 1 = 15\n15 * 2 + 1 = 31\n31 * 2 + 1 = 63\n63 * 2 + 1 = 127.',
    topic: 'Pola Barisan Rekursif',
    difficulty: 'Mudah'
  },
  {
    id: 2,
    text: 'Toko Alpha menjual tas ransel seharga Rp250.000 dengan diskon bertingkat 20% + 10%. Toko Beta menjual tas ransel yang sama seharga Rp260.000 dengan diskon langsung 30%.\n\nManakah hubungan yang benar antara harga akhir di Toko Alpha (P) dan Toko Beta (Q)?',
    type: 'multiple',
    options: [
      { id: 'A', text: 'P > Q' },
      { id: 'B', text: 'P < Q', correct: true },
      { id: 'C', text: 'P = Q' },
      { id: 'D', text: 'P = 2Q' },
      { id: 'E', text: 'Hubungan P dan Q tidak dapat ditentukan' }
    ],
    correctAnswer: 'B',
    explanation: 'Toko Alpha (P): 250.000 * 0.80 * 0.90 = 250.000 * 0.72 = Rp180.000.\nToko Beta (Q): 260.000 * (1 - 0.30) = 260.000 * 0.70 = Rp182.000.\nKarena 180.000 < 182.000, maka P < Q.',
    topic: 'Aritmetika Sosial & Perbandingan Nilai',
    difficulty: 'Mudah'
  },
  {
    id: 3,
    text: 'Perhatikan susunan angka dalam matriks segitiga berikut:\nSegitiga I: Puncak = 48, Kiri = 4, Kanan = 6, Bawah = 2  (Aturan: (4 * 6) * 2 = 48)\nSegitiga II: Puncak = ?, Kiri = 5, Kanan = 7, Bawah = 3\n\nNilai tanda tanya (?) pada puncak Segitiga II adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '105', correct: true },
      { id: 'B', text: '95' },
      { id: 'C', text: '115' },
      { id: 'D', text: '85' },
      { id: 'E', text: '120' }
    ],
    correctAnswer: 'A',
    explanation: 'Operasi hubungan angka: Puncak = Kiri * Kanan * Bawah.\nSegitiga II: Puncak = 5 * 7 * 3 = 35 * 3 = 105.',
    topic: 'Pola Bilangan Gambar Geometri',
    difficulty: 'Mudah'
  },
  {
    id: 4,
    text: 'Sebuah tangki air diisi oleh pipa A sendirian dalam waktu 4 jam, dan oleh pipa B dalam waktu 6 jam. Jika pipa C dapat mengosongkan tangki penuh dalam 12 jam, berapa jam waktu yang diperlukan untuk mengisi tangki sampai penuh jika ketiga pipa dibuka bersamaan?',
    type: 'multiple',
    options: [
      { id: 'A', text: '2,5 jam' },
      { id: 'B', text: '3,0 jam', correct: true },
      { id: 'C', text: '3,5 jam' },
      { id: 'D', text: '4,0 jam' },
      { id: 'E', text: '2,0 jam' }
    ],
    correctAnswer: 'B',
    explanation: 'Laju gabungan per jam = 1/4 + 1/6 - 1/12 = 3/12 + 2/12 - 1/12 = 4/12 = 1/3 tangki per jam.\nMaka waktu pengisian penuh = 1 / (1/3) = 3 jam.',
    topic: 'Laju Kerja Bersama',
    difficulty: 'Sedang'
  },
  {
    id: 5,
    text: 'Perhatikan deret huruf dan angka berikut:\n**A, 2, C, 6, F, 18, J, 54, ...**\n\nPasangan lanjutan berikutnya adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'O, 162', correct: true },
      { id: 'B', text: 'N, 162' },
      { id: 'C', text: 'O, 150' },
      { id: 'D', text: 'P, 162' },
      { id: 'E', text: 'M, 108' }
    ],
    correctAnswer: 'A',
    explanation: 'Pola huruf: A (1) -> (+2) C (3) -> (+3) F (6) -> (+4) J (10) -> (+5) O (15).\nPola angka: 2 * 3 = 6 -> 6 * 3 = 18 -> 18 * 3 = 54 -> 54 * 3 = 162.\nJadi jawabannya adalah O, 162.',
    topic: 'Deret Alfabet & Rasio Angka',
    difficulty: 'Sedang'
  },
  {
    id: 6,
    text: 'Rata-rata nilai ujian matematika dari 18 siswa adalah 76. Jika nilai 2 siswa baru dimasukkan, nilai rata-rata kelas naik menjadi 78. Jika selisih nilai kedua siswa baru tersebut adalah 4, berapakah nilai siswa baru yang tertinggi?',
    type: 'multiple',
    options: [
      { id: 'A', text: '96' },
      { id: 'B', text: '98', correct: true },
      { id: 'C', text: '94' },
      { id: 'D', text: '92' },
      { id: 'E', text: '100' }
    ],
    correctAnswer: 'B',
    explanation: 'Total nilai awal = 18 * 76 = 1.368.\nTotal nilai baru (20 siswa) = 20 * 78 = 1.560.\nJumlah nilai 2 siswa baru = 1.560 - 1.368 = 192.\nMisal kedua nilai x dan y dengan x - y = 4 dan x + y = 192.\nMaka 2x = 196 -> x = 98 (nilai tertinggi) dan y = 94.',
    topic: 'Statistika Deskriptif & Rata-rata Gabungan',
    difficulty: 'Sedang'
  },
  {
    id: 7,
    text: 'Sebuah proyek renovasi gedung dapat diselesaikan oleh 24 pekerja dalam waktu 30 hari. Setelah bekerja selama 10 hari, proyek dihentikan selama 4 hari karena hujan badai. Berapa tambahan pekerja yang dibutuhkan agar proyek selesai tepat pada waktu semula?',
    type: 'multiple',
    options: [
      { id: 'A', text: '6 pekerja', correct: true },
      { id: 'B', text: '8 pekerja' },
      { id: 'C', text: '4 pekerja' },
      { id: 'D', text: '10 pekerja' },
      { id: 'E', text: '12 pekerja' }
    ],
    correctAnswer: 'A',
    explanation: 'Sisa beban kerja = 24 pekerja * (30 - 10) hari = 24 * 20 = 480 hari-pekerja.\nSisa waktu yang tersedia = 20 - 4 = 16 hari.\nJumlah pekerja yang dibutuhkan = 480 / 16 = 30 pekerja.\nTambahan pekerja = 30 - 24 = 6 pekerja.',
    topic: 'Perbandingan Berbalik Nilai',
    difficulty: 'Sedang'
  },
  {
    id: 8,
    text: 'Diketahui x = 2^60, y = 3^48, dan z = 5^24.\nUrutan bilangan dari yang terkecil hingga terbesar adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'z < x < y', correct: true },
      { id: 'B', text: 'x < z < y' },
      { id: 'C', text: 'z < y < x' },
      { id: 'D', text: 'y < x < z' },
      { id: 'E', text: 'x < y < z' }
    ],
    correctAnswer: 'A',
    explanation: 'FPB dari pangkat (60, 48, 24) adalah 12.\nx = (2^5)^12 = 32^12\ny = (3^4)^12 = 81^12\nz = (5^2)^12 = 25^12\nKarena 25 < 32 < 81, maka 25^12 < 32^12 < 81^12, sehingga z < x < y.',
    topic: 'Eksponen & Perbandingan Nilai Pangkat',
    difficulty: 'Sedang'
  },
  {
    id: 9,
    text: 'Perhatikan barisan bilangan selang-seling:\n**2, 5, 4, 10, 8, 20, 16, ...**\n\nBilangan berikutnya pada barisan tersebut adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '40', correct: true },
      { id: 'B', text: '32' },
      { id: 'C', text: '30' },
      { id: 'D', text: '48' },
      { id: 'E', text: '24' }
    ],
    correctAnswer: 'A',
    explanation: 'Terdiri dari 2 barisan terpisah:\nPosisi ganjil: 2, 4, 8, 16 (dikali 2).\nPosisi genap: 5, 10, 20, 40 (dikali 2).\nBilangan ke-8 berada di posisi genap setelah 20, yaitu 20 * 2 = 40.',
    topic: 'Barisan Selang-Seling',
    difficulty: 'Mudah'
  },
  {
    id: 10,
    text: 'Keuntungan sebuah koperasi simpan pinjam dialokasikan sebagai berikut: 40% untuk cadangan modal, 35% untuk jasa anggota, dan sisanya sebesar Rp75.000.000 untuk dana pendidikan dan sosial. Berapakah total keuntungan koperasi tersebut?',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Rp300.000.000', correct: true },
      { id: 'B', text: 'Rp250.000.000' },
      { id: 'C', text: 'Rp350.000.000' },
      { id: 'D', text: 'Rp280.000.000' },
      { id: 'E', text: 'Rp400.000.000' }
    ],
    correctAnswer: 'A',
    explanation: 'Persentase sisa = 100% - (40% + 35%) = 25%.\nTotal Keuntungan = Rp75.000.000 / 0,25 = Rp300.000.000.',
    topic: 'Aritmetika Sosial & Persentase',
    difficulty: 'Mudah'
  }
];
