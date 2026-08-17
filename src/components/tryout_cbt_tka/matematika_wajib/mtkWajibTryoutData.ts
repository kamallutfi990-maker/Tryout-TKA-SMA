export interface MtkWajibQuestion {
  id: number;
  text: string;
  type: 'multiple' | 'multiple-complex' | 'true-false-table';
  options?: { id: string; text: string; correct?: boolean }[];
  statements?: { id: string; text: string; correct?: boolean }[];
  correctAnswer?: any;
}

export const mtkWajibTryoutData: MtkWajibQuestion[] = [
  {
    id: 1,
    text: "Harga 3 buah buku dan 2 buah penggaris Rp18.000,00. Jika harga sebuah buku Rp1.000,00 lebih mahal dari sebuah penggaris, harga 2 buah buku dan 5 buah penggaris adalah ....",
    type: 'multiple',
    options: [
      { id: 'a', text: 'Rp19.000,00' },
      { id: 'b', text: 'Rp23.000,00', correct: true },
      { id: 'c', text: 'Rp25.000,00' },
      { id: 'd', text: 'Rp27.000,00' },
      { id: 'e', text: 'Rp30.000,00' }
    ]
  },
  {
    id: 2,
    text: "Daerah yang memenuhi sistem pertidaksamaan linear: x + y <= 4, x + 3y >= 6, x >= 0, y >= 0 adalah ....",
    type: 'multiple',
    options: [
      { id: 'a', text: 'Daerah I' },
      { id: 'b', text: 'Daerah II', correct: true },
      { id: 'c', text: 'Daerah III' },
      { id: 'd', text: 'Daerah IV' },
      { id: 'e', text: 'Daerah V' }
    ]
  },
  {
    id: 3,
    text: "Diketahui fungsi f(x) = sqrt(2x + 3), dengan x >= -3/2. Jika f^(-1)(x) adalah invers dari fungsi f(x), nilai dari f^(-1)(3) = ....",
    type: 'multiple',
    options: [
      { id: 'a', text: '6' },
      { id: 'b', text: '3', correct: true },
      { id: 'c', text: '3/2' },
      { id: 'd', text: '-1/2' },
      { id: 'e', text: '-1' }
    ]
  },
  {
    id: 4,
    text: "Suku ke-3 dan suku ke-7 barisan aritmetika berturut-turut adalah 14 dan 30. Jumlah 20 suku pertama barisan tersebut adalah ....",
    type: 'multiple',
    options: [
      { id: 'a', text: '840' },
      { id: 'b', text: '880', correct: true },
      { id: 'c', text: '920' },
      { id: 'd', text: '960' },
      { id: 'e', text: '1.020' }
    ]
  },
  {
    id: 5,
    text: "Diketahui segitiga siku-siku ABC di B dengan panjang sisi AB = 6 cm dan BC = 8 cm. Nilai sin A * cos C + cos A * sin C adalah ....",
    type: 'multiple',
    options: [
      { id: 'a', text: '1/2' },
      { id: 'b', text: '1', correct: true },
      { id: 'c', text: '3/4' },
      { id: 'd', text: '4/5' },
      { id: 'e', text: '7/25' }
    ]
  },
  {
    id: 6,
    text: "Rata-rata nilai ujian matematika dari 39 siswa adalah 70. Jika nilai seorang siswa susulan digabungkan, nilai rata-rata menjadi 70,5. Nilai siswa susulan tersebut adalah ....",
    type: 'multiple',
    options: [
      { id: 'a', text: '80' },
      { id: 'b', text: '85' },
      { id: 'c', text: '90', correct: true },
      { id: 'd', text: '92' },
      { id: 'e', text: '95' }
    ]
  },
  {
    id: 7,
    text: "Dua dadu dilempar bersamaan satu kali. Peluang muncul mata dadu berjumlah 7 atau berjumlah 10 adalah ....",
    type: 'multiple',
    options: [
      { id: 'a', text: '1/4', correct: true },
      { id: 'b', text: '1/3' },
      { id: 'c', text: '5/36' },
      { id: 'd', text: '7/36' },
      { id: 'e', text: '1/6' }
    ]
  },
  {
    id: 8,
    text: "Akar-akar persamaan kuadrat x^2 - 5x + 6 = 0 adalah p dan q. Persamaan kuadrat baru yang akar-akarnya (p + 2) dan (q + 2) adalah ....",
    type: 'multiple',
    options: [
      { id: 'a', text: 'x^2 - 9x + 20 = 0', correct: true },
      { id: 'b', text: 'x^2 - 9x + 14 = 0' },
      { id: 'c', text: 'x^2 + 9x + 20 = 0' },
      { id: 'd', text: 'x^2 - 7x + 12 = 0' },
      { id: 'e', text: 'x^2 - 5x + 10 = 0' }
    ]
  },
  {
    id: 9,
    text: "Sebuah modal sebesar Rp10.000.000,00 dibungakan dengan bunga majemuk 10% per tahun. Besar modal tersebut setelah 2 tahun adalah ....",
    type: 'multiple',
    options: [
      { id: 'a', text: 'Rp12.000.000,00' },
      { id: 'b', text: 'Rp12.100.000,00', correct: true },
      { id: 'c', text: 'Rp12.200.000,00' },
      { id: 'd', text: 'Rp12.500.000,00' },
      { id: 'e', text: 'Rp13.000.000,00' }
    ]
  },
  {
    id: 10,
    text: "Dari 8 orang calon pengurus OSIS akan dipilih seorang ketua, sekretaris, dan bendahara. Banyaknya susunan pengurus yang mungkin adalah ....",
    type: 'multiple',
    options: [
      { id: 'a', text: '56' },
      { id: 'b', text: '336', correct: true },
      { id: 'c', text: '512' },
      { id: 'd', text: '672' },
      { id: 'e', text: '120' }
    ]
  },
  {
    id: 11,
    text: "Pernyataan tentang fungsi kuadrat f(x) = x^2 - 4x + 3. Tentukan kebenaran masing-masing pernyataan berikut!",
    type: 'true-false-table',
    statements: [
      { id: 's1', text: 'Grafik memotong sumbu X di titik (1,0) dan (3,0)', correct: true },
      { id: 's2', text: 'Titik puncak kurva minimum berada di (2, -1)', correct: true },
      { id: 's3', text: 'Grafik terbuka ke bawah karena koefisien a positif', correct: false }
    ]
  },
  {
    id: 12,
    text: "Diberikan matriks A = [[2, 3], [1, 4]]. Nilai determinan dari matriks A adalah ....",
    type: 'multiple',
    options: [
      { id: 'a', text: '5', correct: true },
      { id: 'b', text: '8' },
      { id: 'c', text: '11' },
      { id: 'd', text: '-5' },
      { id: 'e', text: '3' }
    ]
  },
  {
    id: 13,
    text: "Nilai simpangan baku dari data: 4, 6, 8, 2, 5 adalah ....",
    type: 'multiple',
    options: [
      { id: 'a', text: 'sqrt(2)' },
      { id: 'b', text: '2', correct: true },
      { id: 'c', text: 'sqrt(5)' },
      { id: 'd', text: '4' },
      { id: 'e', text: '2.5' }
    ]
  },
  {
    id: 14,
    text: "Nilai dari cos 150° adalah ....",
    type: 'multiple',
    options: [
      { id: 'a', text: '-1/2 * sqrt(3)', correct: true },
      { id: 'b', text: '1/2 * sqrt(3)' },
      { id: 'c', text: '-1/2' },
      { id: 'd', text: '1/2' },
      { id: 'e', text: '-1/2 * sqrt(2)' }
    ]
  },
  {
    id: 15,
    text: "Suatu deret geometri tak hingga mempunyai jumlah 24 dan suku pertama 16. Rasio dari deret tersebut adalah ....",
    type: 'multiple',
    options: [
      { id: 'a', text: '1/4' },
      { id: 'b', text: '1/3', correct: true },
      { id: 'c', text: '1/2' },
      { id: 'd', text: '2/3' },
      { id: 'e', text: '3/4' }
    ]
  },
  {
    id: 16,
    text: "Banyak cara menyusun 5 buku berbeda pada sebuah rak adalah ....",
    type: 'multiple',
    options: [
      { id: 'a', text: '25' },
      { id: 'b', text: '60' },
      { id: 'c', text: '120', correct: true },
      { id: 'd', text: '240' },
      { id: 'e', text: '720' }
    ]
  },
  {
    id: 17,
    text: "Sebuah kantong berisi 5 bola merah dan 3 bola biru. Jika diambil 2 bola sekaligus secara acak, peluang terambil keduanya bola merah adalah ....",
    type: 'multiple',
    options: [
      { id: 'a', text: '5/14', correct: true },
      { id: 'b', text: '10/28' },
      { id: 'c', text: '15/56' },
      { id: 'd', text: '3/8' },
      { id: 'e', text: '5/8' }
    ]
  },
  {
    id: 18,
    text: "Persamaan garis yang melalui titik (2, -3) dan tegak lurus terhadap garis 2x - 3y + 5 = 0 adalah ....",
    type: 'multiple',
    options: [
      { id: 'a', text: '3x + 2y = 0', correct: true },
      { id: 'b', text: '3x - 2y = 12' },
      { id: 'c', text: '2x + 3y = -5' },
      { id: 'd', text: '3x + 2y = 12' },
      { id: 'e', text: '2x - 3y = 13' }
    ]
  },
  {
    id: 19,
    text: "Nilai kuartil atas (Q3) dari data: 3, 5, 7, 8, 9, 11, 12, 14, 15 adalah ....",
    type: 'multiple',
    options: [
      { id: 'a', text: '12' },
      { id: 'b', text: '13', correct: true },
      { id: 'c', text: '14' },
      { id: 'd', text: '11.5' },
      { id: 'e', text: '12.5' }
    ]
  },
  {
    id: 20,
    text: "Himpunan penyelesaian dari pertidaksamaan |2x - 1| < 5 adalah ....",
    type: 'multiple',
    options: [
      { id: 'a', text: '-2 < x < 3', correct: true },
      { id: 'b', text: '-3 < x < 2' },
      { id: 'c', text: 'x < -2 atau x > 3' },
      { id: 'd', text: '-5 < x < 5' },
      { id: 'e', text: '0 < x < 3' }
    ]
  }
];
