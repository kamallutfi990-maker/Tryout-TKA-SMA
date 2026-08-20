import { UtbkQuestion } from '../types';

export const induktifTryoutData: UtbkQuestion[] = [
  {
    id: 1,
    text: 'Berdasarkan data penelitian selama 3 tahun berturut-turut di 10 kota besar, setiap kali intensitas kampanye pemilahan sampah organik dan anorganik di sekolah meningkat lebih dari 40%, volume sampah yang berakhir di Tempat Pembuangan Akhir (TPA) berkurang rata-rata 18%. Pada tahun ini, pemerintah kota Y gencar mengadakan program edukasi pemilahan sampah di 95% sekolah.\n\nSimpulan induktif yang **paling mungkin benar** adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'TPA di Kota Y dipastikan tidak akan menerima sampah sama sekali pada akhir tahun.' },
      { id: 'B', text: 'Volume sampah yang dibuang ke TPA di Kota Y berpeluang besar mengalami penurunan yang cukup signifikan.', correct: true },
      { id: 'C', text: 'Masyarakat kota Y sudah sepenuhnya mandiri dalam mengolah seluruh jenis sampah rumah tangga.' },
      { id: 'D', text: 'Sekolah merupakan satu-satunya sumber penghasil sampah terbesar di kota Y.' },
      { id: 'E', text: 'Biaya retribusi sampah di Kota Y akan langsung turun drastis bulan depan.' }
    ],
    correctAnswer: 'B',
    explanation: 'Penalaran induktif bertumpu pada generalisasi tren observasi empiris untuk merumuskan simpulan probabilistik masa depan. Fakta konsisten penurunan volume sampah sebesar 18% setelah kampanye di sekolah menghasilkan prediksi yang paling mungkin ("berpeluang besar mengalami penurunan").',
    topic: 'Kesesuaian Paragraf & Generalisasi Data',
    difficulty: 'Mudah'
  },
  {
    id: 2,
    text: 'Perhatikan hubungan analogi berikut:\n**Teleskop : Astronom = Stetoskop : ...**',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Farmasis' },
      { id: 'B', text: 'Pasien' },
      { id: 'C', text: 'Dokter', correct: true },
      { id: 'D', text: 'Laboratorium' },
      { id: 'E', text: 'Apoteker' }
    ],
    correctAnswer: 'C',
    explanation: 'Hubungan analogi fungsional instrumen profesi: Teleskop adalah alat utama yang digunakan oleh Astronom untuk mengamati benda langit, sedangkan Stetoskop adalah alat utama yang digunakan oleh Dokter untuk memeriksa auskultasi detak jantung/suara organ tubuh.',
    topic: 'Analogi Induktif',
    difficulty: 'Mudah'
  },
  {
    id: 3,
    text: 'Uji klinis formula suplemen herbal X dilakukan pada 3 kelompok usia berbeda (remaja, dewasa, dan lansia). Ketiga kelompok tersebut melaporkan peningkatan daya tahan tubuh dan penurunan frekuensi terkena flu rata-rata sebesar 30% setelah konsumsi rutin selama 30 hari.\n\nGeneralisasi induktif yang paling valid adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Suplemen herbal X memiliki efektivitas yang baik dalam membantu meningkatkan daya tahan tubuh pada berbagai rentang usia.', correct: true },
      { id: 'B', text: 'Semua penyakit menular dapat disembuhkan secara permanen menggunakan suplemen herbal X.' },
      { id: 'C', text: 'Kelompok lansia memiliki respon imun yang identik 100% dengan kelompok remaja.' },
      { id: 'D', text: 'Suplemen herbal X harus dikonsumsi seumur hidup agar seseorang tidak terserang virus flu.' },
      { id: 'E', text: 'Hanya orang yang mengonsumsi suplemen yang memiliki sistem kekebalan tubuh.' }
    ],
    correctAnswer: 'A',
    explanation: 'Generalisasi induktif menarik kecenderungan umum dari beberapa sampel khusus. Keberhasilan suplemen pada 3 kelompok usia representatif menunjukkan efektivitasnya secara umum.',
    topic: 'Generalisasi Fenomena',
    difficulty: 'Sedang'
  },
  {
    id: 4,
    text: 'Data penjualan kendaraan listrik di wilayah metropolitan menunjukkan peningkatan sebesar 35% setiap kali harga BBM bersubsidi naik lebih dari 10%. Pemerintah baru saja mengumumkan kenaikan harga BBM sebesar 12% efektif mulai awal bulan.\n\nPrediksi induktif yang paling tepat adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Penjualan kendaraan bermesin bensin akan langsung dihentikan oleh pabrikan.' },
      { id: 'B', text: 'Minat pembelian dan penjualan kendaraan listrik berpeluang mengalami peningkatan.', correct: true },
      { id: 'C', text: 'Masyarakat akan berhenti bepergian menggunakan kendaraan pribadi.' },
      { id: 'D', text: 'Stasiun Pengisian Kendaraan Listrik Umum (SPKLU) akan langsung habis di pasaran.' },
      { id: 'E', text: 'Tarif listrik rumah tangga akan otomatis dinaikkan oleh PLN.' }
    ],
    correctAnswer: 'B',
    explanation: 'Berdasarkan pola historis hubungan kenaikan BBM dengan adopsi kendaraan listrik, simpulan paling rasional adalah minat dan angka penjualan kendaraan listrik berpeluang meningkat.',
    topic: 'Sebab-Akibat & Prediksi Tren',
    difficulty: 'Sedang'
  },
  {
    id: 5,
    text: 'Perhatikan pola deret huruf dan angka berikut:\n**B, 4, D, 8, G, 14, K, 22, P, ...**',
    type: 'multiple',
    options: [
      { id: 'A', text: '28' },
      { id: 'B', text: '30' },
      { id: 'C', text: '32', correct: true },
      { id: 'D', text: '34' },
      { id: 'E', text: '36' }
    ],
    correctAnswer: 'C',
    explanation: 'Pola angka: 4 (+4) -> 8 (+6) -> 14 (+8) -> 22 (+10) -> 32. Selisih penambahan bertambah 2 secara konsisten (+4, +6, +8, +10). Nilai berikutnya adalah 22 + 10 = 32.',
    topic: 'Pola Bilangan & Simbolik',
    difficulty: 'Sedang'
  },
  {
    id: 6,
    text: 'Dalam 5 eksperimen kimia laboratorium, penambahan katalis Z pada larutan ester selalu mempercepat laju reaksi hidrolisis sebesar 4 kali lipat tanpa mengubah komposisi produk akhir.\n\nSimpulan induktif mengenai sifat katalis Z adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Katalis Z berfungsi mempercepat laju reaksi hidrolisis ester secara konsisten.', correct: true },
      { id: 'B', text: 'Reaksi esterifikasi tidak memerlukan pereaksi lain selain katalis Z.' },
      { id: 'C', text: 'Katalis Z selalu habis bereaksi dalam setiap percobaan.' },
      { id: 'D', text: 'Katalis Z dapat digunakan untuk semua reaksi anorganik tanpa batasan suhu.' },
      { id: 'E', text: 'Laju reaksi kimia apa pun selalu berbanding lurus dengan massa katalis.' }
    ],
    correctAnswer: 'A',
    explanation: 'Melalui 5 kali replikasi konsisten, kesimpulan induktif yang sah adalah bahwa katalis Z berfungsi mempercepat laju reaksi hidrolisis ester.',
    topic: 'Penalaran Berbasis Eksperimen',
    difficulty: 'Mudah'
  },
  {
    id: 7,
    text: 'Sebuah survei pada 500 UMKM kuliner mencatat bahwa bisnis yang memanfaatkan konten video pendek interaktif di media sosial mengalami lonjakan pesanan baru hingga 60% dibandingkan bisnis yang hanya menggunakan foto statis.\n\nSimpulan induktif yang paling tepat adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Foto statis tidak memiliki daya tarik sama sekali bagi pelanggan kuliner.' },
      { id: 'B', text: 'Pemanfaatan media video pendek interaktif berkorelasi positif dengan peningkatan volume pesanan UMKM kuliner.', correct: true },
      { id: 'C', text: 'Semua UMKM wajib mempekerjakan videografer profesional agar tidak bangkrut.' },
      { id: 'D', text: 'Kualitas rasa makanan tidak lagi memengaruhi keputusan pembelian konsumen.' },
      { id: 'E', text: 'Pelanggan hanya membeli makanan jika ada diskon dalam video pendek.' }
    ],
    correctAnswer: 'B',
    explanation: 'Data survei menunjukkan korelasi empiris positif antara penerapan format video pendek dengan kenaikan pemesanan bagi UMKM.',
    topic: 'Kesesuaian Data & Survei',
    difficulty: 'Mudah'
  },
  {
    id: 8,
    text: 'Perhatikan premis data observasi berikut:\n- Kota A memasang lampu LED hemat energi di jalan protokol dan tagihan listrik penerangan umum turun 35%.\n- Kota B menerapkan hal yang sama dan tagihan turun 38%.\n- Kota C menerapkan hal yang sama dan tagihan turun 36%.\n\nSimpulan induktif yang paling dapat diandalkan adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Lampu LED hemat energi efektif menurunkan beban pengeluaran listrik penerangan jalan umum di perkotaan.', correct: true },
      { id: 'B', text: 'Penggunaan lampu LED akan membebaskan kota dari defisit anggaran belanja.' },
      { id: 'C', text: 'Kota A, B, dan C memiliki tarif dasar listrik yang paling murah di Indonesia.' },
      { id: 'D', text: 'Penerangan jalan adalah satu-satunya komponen biaya operasional pemerintah kota.' },
      { id: 'E', text: 'Semua kota di dunia pasti mengalami penghematan tepat 35%.' }
    ],
    correctAnswer: 'A',
    explanation: 'Generalisasi induktif dari 3 kota sampel menghasilkan kesimpulan bahwa konversi ke lampu LED hemat energi efektif menekan anggaran listrik penerangan jalan.',
    topic: 'Generalisasi Induktif',
    difficulty: 'Mudah'
  },
  {
    id: 9,
    text: 'Perhatikan pola angka berikut:\n**3, 7, 15, 31, 63, ...**',
    type: 'multiple',
    options: [
      { id: 'A', text: '95' },
      { id: 'B', text: '115' },
      { id: 'C', text: '127', correct: true },
      { id: 'D', text: '135' },
      { id: 'E', text: '142' }
    ],
    correctAnswer: 'C',
    explanation: 'Pola: Setiap suku diperoleh dengan rumus $2n + 1$ atau penambahan kelipatan pangkat dua (+4, +8, +16, +32, +64). Maka $63 \\times 2 + 1 = 127$ (atau $63 + 64 = 127$).',
    topic: 'Pola Barisan Bilangan',
    difficulty: 'Sedang'
  },
  {
    id: 10,
    text: 'Dalam evaluasi pembelajaran jarak jauh, sekolah yang menerapkan metode kuis gamifikasi interaktif mencatat tingkat kehadiran siswa mencapai 96%, sementara sekolah yang memakai metode ceramah monolog satu arah mencatat kehadiran hanya 74%.\n\nSimpulan induktif yang paling akurat adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Metode ceramah harus dilarang sepenuhnya di seluruh sistem pendidikan.' },
      { id: 'B', text: 'Penerapan kuis gamifikasi interaktif berpotensi mendorong antusiasme dan partisipasi kehadiran belajar siswa.', correct: true },
      { id: 'C', text: 'Siswa tidak membutuhkan penjelasan konsep teoritis dari guru.' },
      { id: 'D', text: 'Kehadiran 96% menjamin seluruh siswa mendapat nilai sempurna.' },
      { id: 'E', text: 'Metode gamifikasi hanya efektif untuk pembelajaran daring matematika.' }
    ],
    correctAnswer: 'B',
    explanation: 'Perbandingan data kehadiran menunjukkan kecenderungan positif bahwa model pembelajaran gamifikasi interaktif meningkatkan minat dan keterlibatan aktif siswa.',
    topic: 'Analisis Fenomena Induktif',
    difficulty: 'Mudah'
  }
];
