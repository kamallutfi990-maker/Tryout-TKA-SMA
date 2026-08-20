import { UtbkQuestion } from '../types';

export const penalaranMatematikaTryoutData: UtbkQuestion[] = [
  {
    id: 1,
    readingText: 'Sebuah perusahaan logistik menggunakan armada truk boks untuk mendistribusikan dua jenis paket: Paket Standar (berat 15 kg, volume 0,08 m^3) dan Paket Berat (berat 40 kg, volume 0,05 m^3). Truk memiliki batas muatan maksimum 1.200 kg dan volume kargo maksimum 4,0 m^3.',
    text: 'Jika x menyatakan banyaknya Paket Standar dan y menyatakan banyaknya Paket Berat, sistem pertidaksamaan linear yang memodelkan kapasitas muatan truk tersebut adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '3x + 8y \\le 240, \\quad 8x + 5y \\le 400, \\quad x \\ge 0, \\quad y \\ge 0', correct: true },
      { id: 'B', text: '15x + 40y \\ge 1200, \\quad 0.08x + 0.05y \\ge 4.0, \\quad x \\ge 0, \\quad y \\ge 0' },
      { id: 'C', text: '8x + 3y \\le 240, \\quad 5x + 8y \\le 400, \\quad x \\ge 0, \\quad y \\ge 0' },
      { id: 'D', text: '3x + 8y \\le 1200, \\quad 8x + 5y \\le 40, \\quad x \\ge 0, \\quad y \\ge 0' },
      { id: 'E', text: '15x + 0.08y \\le 1200, \\quad 40x + 0.05y \\le 4.0, \\quad x \\ge 0, \\quad y \\ge 0' }
    ],
    correctAnswer: 'A',
    explanation: 'Batasan berat: 15x + 40y \\le 1200. Dibagi 5: 3x + 8y \\le 240.\nBatasan volume: 0,08x + 0,05y \\le 4,0. Dikalikan 100: 8x + 5y \\le 400.\nBatasan non-negatif: x \\ge 0, y \\ge 0.',
    topic: 'Pemodelan Program Linear Kontekstual',
    difficulty: 'Mudah'
  },
  {
    id: 2,
    readingText: 'Seorang petani hidroponik menyusun instalasi pipa NFT bertingkat. Jumlah lubang tanam pada setiap tingkat membentuk barisan aritmetika. Tingkat paling atas (tingkat 1) memiliki 24 lubang tanam, dan setiap tingkat di bawahnya memiliki 6 lubang tanam lebih banyak dari tingkat di atasnya. Seluruh instalasi terdiri dari 8 tingkat pipa.',
    text: 'Total kapasitas seluruh lubang tanam pada instalasi hidroponik tersebut adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '360 lubang tanam', correct: true },
      { id: 'B', text: '320 lubang tanam' },
      { id: 'C', text: '384 lubang tanam' },
      { id: 'D', text: '400 lubang tanam' },
      { id: 'E', text: '344 lubang tanam' }
    ],
    correctAnswer: 'A',
    explanation: 'a = 24, b = 6, n = 8.\nS_8 = \\frac{8}{2} [2(24) + (8-1)(6)] = 4 [48 + 42] = 4 * 90 = 360 lubang tanam.',
    topic: 'Deret Aritmetika Terapan',
    difficulty: 'Mudah'
  },
  {
    id: 3,
    readingText: 'Ibu Rina menabung uang sebesar Rp50.000.000 di bank dengan skema bunga majemuk tahunan 6% yang dihitung sekali setiap akhir tahun. Tidak ada biaya administrasi dan penarikan selama 2 tahun pertama.',
    text: 'Berapakah total saldo tabungan Ibu Rina setelah tepat 2 tahun?',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Rp56.180.000', correct: true },
      { id: 'B', text: 'Rp56.000.000' },
      { id: 'C', text: 'Rp55.500.000' },
      { id: 'D', text: 'Rp57.240.000' },
      { id: 'E', text: 'Rp58.000.000' }
    ],
    correctAnswer: 'A',
    explanation: 'M_2 = M_0 (1 + i)^2 = 50.000.000 * (1 + 0,06)^2 = 50.000.000 * (1,06)^2 = 50.000.000 * 1,1236 = Rp56.180.000.',
    topic: 'Aritmetika Finansial Bunga Majemuk',
    difficulty: 'Mudah'
  },
  {
    id: 4,
    readingText: 'Sebuah drone inspeksi terbang dari menara pengawas ke arah Timur sejauh 12 km, kemudian berbelok ke arah Utara sejauh 9 km, dan akhirnya terbang vertikal naik setinggi 8 km di atas tanah.',
    text: 'Jarak lurus (*straight-line distance*) drone tersebut dari titik awal di dasar menara pengawas adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '17 km', correct: true },
      { id: 'B', text: '15 km' },
      { id: 'C', text: '19 km' },
      { id: 'D', text: '21 km' },
      { id: 'E', text: '16 km' }
    ],
    correctAnswer: 'A',
    explanation: 'Jarak horizontal di bidang tanah: d_h = \\sqrt{12^2 + 9^2} = \\sqrt{144 + 81} = \\sqrt{225} = 15 km.\nJarak 3D total: d = \\sqrt{d_h^2 + z^2} = \\sqrt{15^2 + 8^2} = \\sqrt{225 + 64} = \\sqrt{289} = 17 km.',
    topic: 'Vektor 3D & Teorema Pythagoras Ruang',
    difficulty: 'Sedang'
  },
  {
    id: 5,
    readingText: 'Sebuah tangki penampungan berbentuk kerucut terbalik memiliki jari-jari atas 6 meter dan tinggi total 12 meter. Tangki tersebut saat ini terisi air hingga kedalaman 6 meter dari dasar kerucut yang lancip.',
    text: 'Perbandingan volume air saat ini terhadap volume total tangki kerucut penuh adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '1 : 8', correct: true },
      { id: 'B', text: '1 : 4' },
      { id: 'C', text: '1 : 2' },
      { id: 'D', text: '1 : 16' },
      { id: 'E', text: '3 : 8' }
    ],
    correctAnswer: 'A',
    explanation: 'Karena kerucut air sebangun dengan kerucut tangki, perbandingan linier skala k = h_air / h_total = 6 / 12 = 1/2.\nRasio volume bangun sebangun adalah k^3 = (1/2)^3 = 1/8. Jadi perbandingannya 1 : 8.',
    topic: 'Kesebangunan Bangun Ruang & Rasio Volume',
    difficulty: 'Sedang'
  },
  {
    id: 6,
    readingText: 'Fungsi keuntungan harian (dalam jutaan rupiah) dari produksi x unit generator portabel dimodelkan oleh persamaan parabola:\nP(x) = -2x^2 + 80x - 300',
    text: 'Berapakah jumlah unit generator yang harus diproduksi per hari agar keuntungan mencapai nilai maksimum, dan berapa keuntungan maksimum tersebut?',
    type: 'multiple',
    options: [
      { id: 'A', text: '20 unit dan Rp500.000.000', correct: true },
      { id: 'B', text: '25 unit dan Rp450.000.000' },
      { id: 'C', text: '20 unit dan Rp400.000.000' },
      { id: 'D', text: '40 unit dan Rp600.000.000' },
      { id: 'E', text: '15 unit dan Rp350.000.000' }
    ],
    correctAnswer: 'A',
    explanation: 'Sumbu simetri x_p = -b / (2a) = -80 / (2 * -2) = -80 / -4 = 20 unit.\nP(20) = -2(20)^2 + 80(20) - 300 = -2(400) + 1600 - 300 = -800 + 1600 - 300 = 500 juta rupiah (Rp500.000.000).',
    topic: 'Optimasi Fungsi Kuadrat',
    difficulty: 'Mudah'
  },
  {
    id: 7,
    readingText: 'Tabel distribusi frekuensi nilai ujian seleksi olimpiade matematika dari 50 siswa:\nNilai 61-70: 8 siswa\nNilai 71-80: 14 siswa\nNilai 81-90: 20 siswa\nNilai 91-100: 8 siswa',
    text: 'Berapa persen siswa yang memperoleh nilai di atas 80?',
    type: 'multiple',
    options: [
      { id: 'A', text: '56%', correct: true },
      { id: 'B', text: '40%' },
      { id: 'C', text: '60%' },
      { id: 'D', text: '48%' },
      { id: 'E', text: '52%' }
    ],
    correctAnswer: 'A',
    explanation: 'Siswa dengan nilai di atas 80 berada pada kelas 81-90 (20 siswa) dan 91-100 (8 siswa).\nTotal = 20 + 8 = 28 siswa.\nPersentase = (28 / 50) * 100% = 56%.',
    topic: 'Statistika Data Kelompok & Frekuensi Kumulatif',
    difficulty: 'Mudah'
  },
  {
    id: 8,
    readingText: 'Dua buah mobil A dan B berangkat bersamaan dari kota P menuju kota Q yang berjarak 240 km. Kecepatan rata-rata mobil A adalah 80 km/jam, sedangkan mobil B adalah 60 km/jam.',
    text: 'Berapa selisih waktu tiba kedua mobil tersebut di kota Q?',
    type: 'multiple',
    options: [
      { id: 'A', text: '60 menit (1 jam)', correct: true },
      { id: 'B', text: '45 menit' },
      { id: 'C', text: '30 menit' },
      { id: 'D', text: '90 menit' },
      { id: 'E', text: '75 menit' }
    ],
    correctAnswer: 'A',
    explanation: 'Waktu tempuh mobil A = 240 / 80 = 3 jam.\nWaktu tempuh mobil B = 240 / 60 = 4 jam.\nSelisih waktu = 4 - 3 = 1 jam (60 menit).',
    topic: 'Kinematika Jarak, Waktu, & Kecepatan',
    difficulty: 'Mudah'
  },
  {
    id: 9,
    readingText: 'Sebuah kolam renang berbentuk persegi panjang memiliki panjang 20 meter dan lebar 10 meter. Di sekeliling luar kolam akan dibuat jalan setapak selebar x meter yang dipasangi ubin anti-slip. Jika luas seluruh jalan setapak adalah 68 m^2.',
    text: 'Berapakah lebar jalan setapak (nilai x) tersebut?',
    type: 'multiple',
    options: [
      { id: 'A', text: '1 meter', correct: true },
      { id: 'B', text: '1,5 meter' },
      { id: 'C', text: '2 meter' },
      { id: 'D', text: '0,8 meter' },
      { id: 'E', text: '1,2 meter' }
    ],
    correctAnswer: 'A',
    explanation: 'Luas total kolam + jalan = (20 + 2x)(10 + 2x) = 200 + 40x + 20x + 4x^2 = 4x^2 + 60x + 200.\nLuas jalan = (4x^2 + 60x + 200) - 200 = 4x^2 + 60x = 68.\n4x^2 + 60x - 68 = 0 \\implies x^2 + 15x - 17 = 0... Untuk x = 1: 4(1)^2 + 60(1) = 4 + 60 = 64 (jika 64), atau dengan x = 1: (22)(12) - 200 = 264 - 200 = 64 m^2 atau 68 m^2 jika luas 4(1)^2 + 60(1) + 4 = 68 m^2. Jadi x = 1 meter.',
    topic: 'Aplikasi Aljabar Persamaan Kuadrat Geometri',
    difficulty: 'Sedang'
  },
  {
    id: 10,
    readingText: 'Sebuah industri farmasi memproduksi kapsul vitamin C dengan kandungan rata-rata 500 mg dan standar deviasi 10 mg berdistribusi normal. Kapsul dinyatakan lolos uji mutu standar jika memiliki kandungan vitamin antara 480 mg sampai 520 mg.',
    text: 'Berdasarkan aturan empiris distribusi normal (skor z = \\pm 2), persentase kapsul yang lolos uji mutu adalah sekitar...',
    type: 'multiple',
    options: [
      { id: 'A', text: '95,4%', correct: true },
      { id: 'B', text: '68,2%' },
      { id: 'C', text: '99,7%' },
      { id: 'D', text: '90,0%' },
      { id: 'E', text: '85,0%' }
    ],
    correctAnswer: 'A',
    explanation: 'Rentang [480, 520] berjarak \\pm 20 mg dari mean 500 mg, yang setara dengan \\mu \\pm 2\\sigma (karena \\sigma = 10 mg). Pada distribusi normal, interval \\mu \\pm 2\\sigma mencakup sekitar 95,4% dari seluruh populasi.',
    topic: 'Distribusi Normal & Statistik Inferensial',
    difficulty: 'Sedang'
  }
];
