import { UtbkQuestion } from '../types';

export const penalaranKuantitatifTryoutData: UtbkQuestion[] = [
  {
    id: 1,
    text: 'Antrean perpanjangan SIM keliling dari hari ke-3 hingga ke-7 tercatat berturut-turut: 59, 54, 62, 57, dan 65 pemohon. Jika pola perubahan konstan sejak awal pekan, jumlah pemohon di hari pertama adalah:',
    type: 'multiple',
    options: [
      { id: 'A', text: '49' },
      { id: 'B', text: '51', correct: true },
      { id: 'C', text: '54' },
      { id: 'D', text: '56' },
      { id: 'E', text: '67' }
    ],
    correctAnswer: 'B',
    explanation: 'Jawaban: B\n\nPembahasan:\nPola deret dari hari ke-3 sampai ke-7: 59, 54, 62, 57, 65 (selang-seling -5, +8, -5, +8).\nMundur ke hari ke-2: 59 - 8 = 51.\nMundur ke hari ke-1: 51 + 5 = 56 (atau jika polanya U_1, U_2, U_3 -> 51, 56, 59, 54...).\nDengan urutan: U_1 = 51 -> U_2 = 56 -> U_3 = 59 atau menerapkan pola selang-seling -5, +8:\nU_1 = 51 -> U_2 = 59 -> nilai hari pertama adalah 51.',
    topic: 'Pola Barisan & Deret Bilangan',
    difficulty: 'Sedang'
  },
  {
    id: 2,
    text: 'Perbandingan komposisi daun kering, tanah, dan kotoran ternak untuk pupuk organik adalah 8 : 4 : 2. Bila total bobot daun kering beserta kotoran ternak yang dicampurkan adalah 80 kg, total massa pupuk yang dihasilkan adalah:',
    type: 'multiple',
    options: [
      { id: 'A', text: '96 kg' },
      { id: 'B', text: '104 kg' },
      { id: 'C', text: '112 kg', correct: true },
      { id: 'D', text: '120 kg' },
      { id: 'E', text: '128 kg' }
    ],
    correctAnswer: 'C',
    explanation: 'Jawaban: C\n\nPembahasan:\nRasio: Daun : Tanah : Kotoran = 8 : 4 : 2.\nDaun + Kotoran = 8 + 2 = 10 bagian = 80 kg => 1 bagian = 8 kg.\nTotal campuran = 8 + 4 + 2 = 14 bagian = 14 * 8 = 112 kg.',
    topic: 'Perbandingan Senilai & Rasio',
    difficulty: 'Mudah'
  },
  {
    id: 3,
    text: 'Nilai yang paling mendekati hasil operasi 6,75 - 88% adalah:',
    type: 'multiple',
    options: [
      { id: 'A', text: '4 1/4' },
      { id: 'B', text: '4 2/3' },
      { id: 'C', text: '5 3/4' },
      { id: 'D', text: '5 4/5', correct: true },
      { id: 'E', text: '6 1/3' }
    ],
    correctAnswer: 'D',
    explanation: 'Jawaban: D\n\nPembahasan:\n6,75 - 88% = 6,75 - 0,88 = 5,87.\n\nUji pilihan pecahan:\n- 5 3/4 = 5,75 (selisih |5,87 - 5,75| = 0,12)\n- 5 4/5 = 5,80 (selisih |5,87 - 5,80| = 0,07, paling mendekati)',
    topic: 'Operasi Desimal, Persentase & Pecahan',
    difficulty: 'Mudah'
  },
  {
    id: 4,
    text: 'Berdasarkan grafik tren pendapatan dan belanja seorang pekerja (2019–2023), pernyataan perkiraan yang paling tepat untuk kondisi tahun 2024 adalah:',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Pendapatan diproyeksikan melebihi total belanja.', correct: true },
      { id: 'B', text: 'Nilai belanja diproyeksikan lebih besar daripada pemasukan.' },
      { id: 'C', text: 'Pengeluaran belanja lebih tinggi dibandingkan tahun sebelumnya.' },
      { id: 'D', text: 'Pendapatan tumbuh melampaui capaian tahun sebelumnya.' },
      { id: 'E', text: 'Selisih laba bersih nilainya tetap sama dengan tahun berjalan.' }
    ],
    correctAnswer: 'A',
    explanation: 'Jawaban: A\n\nPembahasan:\nMelihat tren grafik garis dari tahun 2021 hingga 2023, garis pendapatan bertumbuh konsisten di atas garis belanja dengan selisih yang semakin melebar, sehingga pada tahun 2024 diproyeksikan pendapatan tetap lebih besar daripada belanja.',
    topic: 'Interpretasi Data Grafik Garis',
    difficulty: 'Mudah'
  },
  {
    id: 5,
    text: 'Berdasarkan grafik volume penumpang kereta api kelas bisnis dan eksekutif/ekonomi (2019–2023), persentase penumpang kelas bisnis mencapai porsi terbesar pada tahun:',
    type: 'multiple',
    options: [
      { id: 'A', text: '2019' },
      { id: 'B', text: '2020' },
      { id: 'C', text: '2021' },
      { id: 'D', text: '2022' },
      { id: 'E', text: '2023', correct: true }
    ],
    correctAnswer: 'E',
    explanation: 'Jawaban: E\n\nPembahasan:\nPersentase bisnis = [Bisnis / (Bisnis + Ekonomi)] * 100%.\nTahun 2023: Bisnis = 20, Ekonomi = 35, Total = 55 => 20/55 ≈ 36,36% (porsi terbesar dibandingkan tahun-tahun sebelumnya).',
    topic: 'Analisis Diagram Batang & Persentase',
    difficulty: 'Sedang'
  },
  {
    id: 6,
    text: 'Diagram lingkaran komposisi bahan kue: Tepung (36%), Mentega (12%), Garam (8%), Susu (26%), dan Gula (18%). Jika total racikan bahan kue sebesar 200 gram, total berat bahan-bahan yang persentasenya di atas 20% adalah:',
    type: 'multiple',
    options: [
      { id: 'A', text: '76 gram' },
      { id: 'B', text: '88 gram' },
      { id: 'C', text: '96 gram' },
      { id: 'D', text: '124 gram', correct: true },
      { id: 'E', text: '160 gram' }
    ],
    correctAnswer: 'D',
    explanation: 'Jawaban: D\n\nPembahasan:\nBahan di atas 20%: Tepung (36%) dan Susu (26%).\nTotal persentase = 36% + 26% = 62%.\nTotal berat = 62% * 200 gram = 124 gram.',
    topic: 'Diagram Lingkaran & Proporsi',
    difficulty: 'Mudah'
  },
  {
    id: 7,
    text: 'Data pembelian bahan kain berturut-turut: 3, 7, 11, 15, 19 meter menghasilkan produk bendera sebanyak 7, 10, 15, 18, 23 buah. Mengikuti pola kenaikan yang sama, perkiraan hasil bendera pada hari ke-6 adalah:',
    type: 'multiple',
    options: [
      { id: 'A', text: '22' },
      { id: 'B', text: '23' },
      { id: 'C', text: '24' },
      { id: 'D', text: '25' },
      { id: 'E', text: '26', correct: true }
    ],
    correctAnswer: 'E',
    explanation: 'Jawaban: E\n\nPembahasan:\nPola jumlah bendera: 7 (+3) -> 10 (+5) -> 15 (+3) -> 18 (+5) -> 23.\nPola penambahan berulang selang-seling: +3, +5, +3, +5.\nMaka hari ke-6: 23 + 3 = 26 bendera.',
    topic: 'Pola Bilangan Selang-Seling',
    difficulty: 'Mudah'
  },
  {
    id: 8,
    text: 'Gaji bulanan manajer ditetapkan 60% lebih besar daripada gaji staf. Jika pegawai staf menerima Rp5.000.000,00 per bulan, besaran gaji yang diperoleh manajer adalah:',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Rp7.500.000,00' },
      { id: 'B', text: 'Rp8.000.000,00', correct: true },
      { id: 'C', text: 'Rp8.500.000,00' },
      { id: 'D', text: 'Rp9.000.000,00' },
      { id: 'E', text: 'Rp9.500.000,00' }
    ],
    correctAnswer: 'B',
    explanation: 'Jawaban: B\n\nPembahasan:\nGaji manajer = Gaji staf + (60% * Gaji staf) = 160% * Rp5.000.000,00 = 1,6 * 5.000.000 = Rp8.000.000,00.',
    topic: 'Aritmetika Sosial & Persentase Gaji',
    difficulty: 'Mudah'
  },
  {
    id: 9,
    text: 'Pertanyaan: Berapakah nilai rata-rata Matematika di kelas tersebut?\n\nInformasi:\n(1) Kelas terdiri dari 30 siswa dengan nilai rerata 80.\n(2) Nilai akumulatif keseluruhan 30 peserta didik bernilai 2.400.\n\nKecukupan data:',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Pernyataan (1) saja cukup.' },
      { id: 'B', text: 'Pernyataan (2) saja cukup.' },
      { id: 'C', text: 'Harus menggabungkan pernyataan (1) dan (2).' },
      { id: 'D', text: 'Pernyataan (1) saja cukup, atau (2) saja cukup.', correct: true },
      { id: 'E', text: 'Kedua pernyataan belum cukup untuk menjawab.' }
    ],
    correctAnswer: 'D',
    explanation: 'Jawaban: D\n\nPembahasan:\n- Info (1) langsung memberikan nilai rata-rata = 80 (cukup).\n- Info (2) memberikan total nilai = 2.400 untuk 30 siswa => rata-rata = 2.400 / 30 = 80 (cukup).\nMaka, pernyataan (1) saja cukup atau (2) saja cukup.',
    topic: 'Kecukupan Data (Data Sufficiency)',
    difficulty: 'Sedang'
  },
  {
    id: 10,
    text: 'Data perolehan nilai mata pelajaran:\nKelas P: Teori = 50, Praktikum = 55\nKelas Q: Teori = 40, Praktikum = 60\nKelas R: Teori = 50, Praktikum = 60\nKelas S: Teori = 70, Praktikum = 55\nKelas T: Teori = 70, Praktikum = 40\n\nKelas dengan rerata nilai total paling rendah adalah:',
    type: 'multiple',
    options: [
      { id: 'A', text: 'P' },
      { id: 'B', text: 'Q', correct: true },
      { id: 'C', text: 'R' },
      { id: 'D', text: 'S' },
      { id: 'E', text: 'T' }
    ],
    correctAnswer: 'B',
    explanation: 'Jawaban: B\n\nPembahasan:\nHitung total nilai masing-masing kelas:\n- Kelas P: 50 + 55 = 105 (rerata 52,5)\n- Kelas Q: 40 + 60 = 100 (rerata 50,0) -> Paling rendah\n- Kelas R: 50 + 60 = 110 (rerata 55,0)\n- Kelas S: 70 + 55 = 125 (rerata 62,5)\n- Kelas T: 70 + 40 = 110 (rerata 55,0)\nNilai paling rendah diperoleh oleh Kelas Q.',
    topic: 'Statistika Perbandingan Rerata Data',
    difficulty: 'Mudah'
  }
];
