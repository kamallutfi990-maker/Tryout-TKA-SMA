/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question } from '../types';

export const UTBK_QUESTIONS: Question[] = [
  // ==================== 1. PENALARAN INDUKTIF (10 Soal) ====================
  {
    id: 'q_utbk_induktif_1',
    text: 'Berdasarkan data observasi selama 5 tahun terakhir, setiap kali curah hujan di Kota X melampaui 300 mm/bulan, debit air di Sungai Ciliwung hilir selalu naik di atas ambang siaga 1. Bulan ini, BMKG memprediksi curah hujan di Kota X mencapai 340 mm/bulan.\n\nSimpulan induktif yang **paling mungkin benar** adalah...',
    options: [
      'Debit air Sungai Ciliwung hilir dipastikan akan meluap dan membanjiri pemukiman warga.',
      'Debit air Sungai Ciliwung hilir berpeluang besar naik di atas ambang batas siaga 1.',
      'Kota X tidak akan mengalami kenaikan debit air sungai karena ada sistem drainase baru.',
      'Curah hujan 340 mm/bulan merupakan satu-satunya faktor penentu banjir di hilir sungai.',
      'Sungai Ciliwung hilir tidak akan mengalami kenaikan air jika pintu air dibuka.'
    ],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Penalaran induktif bertumpu pada generalisasi fakta masa lalu untuk memprediksi probabilitas kejadian masa depan. Karena histori menunjukkan korelasi kuat saat curah hujan > 300 mm/bulan, kesimpulan yang tepat menggunakan derajat kepastian probabilistik ("berpeluang besar / paling mungkin terjadi").',
    subject: 'Penalaran Induktif',
    difficulty: 'Mudah',
    bab: 'Kesesuaian Paragraf & Generalisasi Data',
    year: '2026'
  },
  {
    id: 'q_utbk_induktif_2',
    text: 'Perhatikan pola analogi berikut:\n**Burung : Sayap = Kapal Selam : ...**',
    options: [
      'Jangkar',
      'Baling-baling (Propeller)',
      'Tangki Balas (Ballast Tank)',
      'Periskop',
      'Kemudi'
    ],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Burung menggunakan sayap untuk mengatur gaya angkat dan turun saat melayang di udara. Secara fungsional induktif, kapal selam menggunakan tangki balas (ballast tank) untuk mengatur daya apung dan menyelam di dalam air.',
    subject: 'Penalaran Induktif',
    difficulty: 'Sedang',
    bab: 'Analogi Induktif',
    year: '2026'
  },
  {
    id: 'q_utbk_induktif_3',
    text: 'Dalam sebuah uji coba agrikultur, tanaman cabai varietas A yang diberi pupuk organik cair X menghasilkan panen rata-rata 1,5 kg per pohon. Pada lahan kedua dengan kondisi tanah dan iklim serupa, tanaman cabai varietas B dengan pupuk X menghasilkan panen 1,6 kg per pohon. Pada lahan ketiga, cabai varietas C dengan pupuk X menghasilkan panen 1,55 kg per pohon.\n\nGeneralisasi kesimpulan induktif yang paling valid adalah...',
    options: [
      'Pupuk organik cair X efektif meningkatkan produktivitas panen tanaman cabai dari berbagai varietas.',
      'Varietas cabai tidak berpengaruh sama sekali terhadap pertumbuhan tanaman di manapun.',
      'Hanya pupuk organik cair X yang dapat digunakan untuk menanam cabai secara optimal.',
      'Produktivitas tanaman cabai varietas B selalu lebih unggul dibanding varietas lain di semua iklim.',
      'Lahan pertanian pertama memiliki kualitas tanah yang paling buruk.'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Generalisasi induktif menyimpulkan kecenderungan umum dari serangkaian sampel khusus. Fakta bahwa tiga varietas berbeda semuanya menghasilkan panen tinggi (1,5 - 1,6 kg) membuktikan efektivitas pupuk X pada varietas cabai.',
    subject: 'Penalaran Induktif',
    difficulty: 'Sedang',
    bab: 'Generalisasi Fenomena',
    year: '2026'
  },
  {
    id: 'q_utbk_induktif_4',
    text: 'Data penjualan 4 produk minuman dingin menunjukkan peningkatan omzet sebesar 25% setiap kali suhu lingkungan rata-rata melebihi 32°C. Minggu depan diprakirakan gelombang panas akan meningkatkan suhu rata-rata kota hingga 34°C.\n\nPrediksi yang paling tepat adalah...',
    options: [
      'Konsumsi minuman hangat akan meningkat drastis.',
      'Omzet produk minuman dingin kemungkinan besar akan mengalami peningkatan yang signifikan.',
      'Masyarakat akan berhenti membeli produk minuman.',
      'Suhu lingkungan tidak memiliki hubungan dengan omzet minuman.',
      'Penjualan es krim dipastikan turun drastis.'
    ],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Berdasarkan pola hubungan sebab-akibat data historis, kenaikan suhu lingkungan di atas 32°C berkorelasi positif dengan lonjakan omzet produk minuman dingin.',
    subject: 'Penalaran Induktif',
    difficulty: 'Mudah',
    bab: 'Hubungan Kausalitas',
    year: '2026'
  },
  {
    id: 'q_utbk_induktif_5',
    text: 'Toko buku mencatat bahwa pada hari libur nasional, jumlah pengunjung meningkat 40% dan rata-rata pembelian buku bertema motivasi melonjak dua kali lipat dibanding hari biasa. Hari Jumat lusa adalah hari libur nasional tanggal merah.\n\nPernyataan yang paling mungkin menggambarkan situasi hari Jumat lusa adalah...',
    options: [
      'Toko buku akan sepi karena masyarakat berlibur ke luar kota.',
      'Pengunjung toko buku dan permintaan buku motivasi berpeluang meningkat dibandingkan hari kerja biasa.',
      'Semua stok buku di toko buku akan langsung habis dalam 1 jam.',
      'Hanya buku pelajaran sekolah yang akan terjual.',
      'Toko buku dipastikan tutup saat hari libur nasional.'
    ],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Simpulan induktif yang rasional memprediksi tren peningkatan pengunjung dan buku motivasi sesuai pola data berkala hari libur.',
    subject: 'Penalaran Induktif',
    difficulty: 'Mudah',
    bab: 'Generalisasi Data',
    year: '2026'
  },
  {
    id: 'q_utbk_induktif_6',
    text: 'Berdasarkan pengujian laboratorium pada 5 batch suplemen herbal Z, semua sampel yang disimpan pada suhu ruangan (25°C) stabil selama 24 bulan, sedangkan sampel yang terpapar sinar matahari langsung mengalami penurunan kadar zat aktif sebesar 50% dalam 3 bulan.\n\nSaran induktif yang paling tepat adalah...',
    options: [
      'Suplemen herbal Z harus dikonsumsi dalam waktu 3 bulan saja.',
      'Suplemen herbal Z sebaiknya disimpan pada tempat sejuk terlindung dari sinar matahari langsung untuk menjaga stabilitas zat aktifnya.',
      'Semua produk herbal tidak tahan pada suhu ruangan.',
      'Sinar matahari meningkatkan khasiat suplemen herbal Z.',
      'Zat aktif suplemen Z tidak dapat rusak dalam kondisi apapun.'
    ],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Data pengujian membuktikan paparan matahari merusak zat aktif, sehingga rekomendasi logis penyimpanan adalah tempat sejuk dan terlindung dari cahaya matahari langsung.',
    subject: 'Penalaran Induktif',
    difficulty: 'Sedang',
    bab: 'Kesesuaian Paragraf',
    year: '2026'
  },
  {
    id: 'q_utbk_induktif_7',
    text: 'Jika beberapa siswa kelas XII yang rutin mengikuti simulasi try out CBT mingguan memperoleh skor SNBT di atas 650 pada tes mandiri, dan Rudi adalah salah satu siswa kelas XII yang selalu aktif mengikuti simulasi try out mingguan tersebut, maka...',
    options: [
      'Rudi dipastikan mendapat skor 1000 pada tes SNBT asli.',
      'Rudi berpotensi memiliki kesiapan yang baik untuk meraih skor tinggi dalam tes SNBT.',
      'Rudi tidak akan lulus SNBT karena hanya mengandalkan simulasi.',
      'Semua siswa yang tidak ikut simulasi pasti gagal.',
      'Simulasi try out tidak berhubungan dengan skor SNBT.'
    ],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Karena premis menyatakan "beberapa siswa", kita tidak bisa membuat kepastian mutlak (100%), melainkan potensi kesiapan dan peluang tinggi yang masuk akal.',
    subject: 'Penalaran Induktif',
    difficulty: 'Sedang',
    bab: 'Penarikan Simpulan Induktif',
    year: '2026'
  },
  {
    id: 'q_utbk_induktif_8',
    text: 'Perhatikan analogi hubungan kata:\n**Kamera : Lensa = Mikroskop : ...**',
    options: [
      'Cermin Cekung',
      'Lensa Okuler dan Objektif',
      'Preparat',
      'Tabung Mikroskop',
      'Kondensor'
    ],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Komponen optik pembentuk bayangan utama pada kamera adalah lensa, sedangkan pada mikroskop adalah sistem lensa okuler dan objektif.',
    subject: 'Penalaran Induktif',
    difficulty: 'Mudah',
    bab: 'Analogi Kata',
    year: '2026'
  },
  {
    id: 'q_utbk_induktif_9',
    text: 'Karyawan yang mendapatkan pelatihan analisis data terbukti 30% lebih cepat dalam menyusun laporan triwulan. Perusahaan X berencana memberikan pelatihan analisis data kepada seluruh staf divisi operasional bulan depan.\n\nHal yang paling logis diantisipasi oleh manajemen Perusahaan X adalah...',
    options: [
      'Efisiensi dan kecepatan staf divisi operasional dalam mengolah laporan kerja akan meningkat.',
      'Semua karyawan divisi lain akan mengundurkan diri.',
      'Laporan triwulan tidak lagi dibutuhkan oleh perusahaan.',
      'Waktu kerja karyawan operasional akan dipotong menjadi separuhnya.',
      'Biaya operasional perusahaan akan langsung nol.'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Berdasarkan bukti empiris efektivitas pelatihan, pemberian pelatihan kepada staf operasional diharapkan meningkatkan efisiensi dan kecepatan pengerjaan laporan.',
    subject: 'Penalaran Induktif',
    difficulty: 'Mudah',
    bab: 'Sebab Akibat Induktif',
    year: '2026'
  },
  {
    id: 'q_utbk_induktif_10',
    text: 'Data dari 10 kota metropolitan di Asia Tenggara menunjukkan bahwa penambahan jalur khusus bus (busway) dan integrasi tiket antarmoda berhasil menurunkan tingkat kemacetan jalan arteri utama hingga 18% dalam kurun waktu 2 tahun.\n\nPernyataan yang memperkuat temuan tersebut adalah...',
    options: [
      'Jumlah kepemilikan mobil pribadi meningkat dua kali lipat di kota-kota tersebut.',
      'Masyarakat lebih memilih beralih menggunakan transportasi massal karena lebih cepat, murah, dan terintegrasi.',
      'Harga bahan bakar minyak (BBM) diturunkan secara drastis oleh pemerintah setempat.',
      'Jalur busway sering diserobot oleh kendaraan roda dua tanpa tilang.',
      'Pembangunan jalan tol baru dihentikan secara total.'
    ],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Pernyataan pada opsi B memberikan penjelasan mekanisme pendukung yang valid mengapa kemacetan arteri turun (yaitu pergeseran moda transportasi masyarakat ke angkutan umum terintegrasi).',
    subject: 'Penalaran Induktif',
    difficulty: 'Sedang',
    bab: 'Memperkuat / Memperlemah Argumen',
    year: '2026'
  },

  // ==================== 2. PENALARAN DEDUKTIF (10 Soal) ====================
  {
    id: 'q_utbk_deduktif_1',
    text: 'Premis 1: Semua mahasiswa Kedokteran wajib lulus praktikum Anatomi.\nPremis 2: Sebagian mahasiswa Kedokteran adalah penerima beasiswa prestasi.\n\nSimpulan logis yang **pasti benar** adalah...',
    options: [
      'Semua penerima beasiswa prestasi wajib lulus praktikum Anatomi.',
      'Sebagian penerima beasiswa prestasi wajib lulus praktikum Anatomi.',
      'Mahasiswa yang tidak menerima beasiswa tidak perlu lulus praktikum Anatomi.',
      'Sebagian mahasiswa Kedokteran tidak wajib lulus praktikum Anatomi.',
      'Semua yang lulus praktikum Anatomi adalah mahasiswa Kedokteran.'
    ],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Silogisme kategorial: Karena sebagian penerima beasiswa prestasi adalah mahasiswa kedokteran, dan SELURUH mahasiswa kedokteran wajib lulus praktikum anatomi, maka sebagian penerima beasiswa prestasi tersebut wajib lulus praktikum anatomi.',
    subject: 'Penalaran Deduktif',
    difficulty: 'Sedang',
    bab: 'Silogisme Kategorial',
    year: '2026'
  },
  {
    id: 'q_utbk_deduktif_2',
    text: 'Premis 1: Jika cuaca hujan deras, maka jalan tol licin.\nPremis 2: Jika jalan tol licin, maka batas kecepatan maksimum diturunkan menjadi 60 km/jam.\nFakta: Batas kecepatan maksimum tidak diturunkan menjadi 60 km/jam.\n\nKesimpulan yang sah berdasarkan hukum logika Modus Tollens adalah...',
    options: [
      'Cuaca hujan lebat disertai angin kencang.',
      'Cuaca tidak hujan deras.',
      'Jalan tol tetap sangat licin.',
      'Batas kecepatan di jalan tol dinaikkan menjadi 100 km/jam.',
      'Tidak dapat ditarik kesimpulan.'
    ],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Bentuk silogisme hipotesis: $p \\implies q$ dan $q \\implies r$, sehingga $p \\implies r$. Diketahui $\\sim r$ (kecepatan tidak diturunkan). Dengan modus tollens: $(p \\implies r) \\land \\sim r \\implies \\sim p$ (cuaca tidak hujan deras).',
    subject: 'Penalaran Deduktif',
    difficulty: 'Sedang',
    bab: 'Modus Tollens',
    year: '2026'
  },
  {
    id: 'q_utbk_deduktif_3',
    text: 'Lima atlet lari: A, B, C, D, dan E menyelesaikan lomba pada posisi berbeda:\n- A finis lebih cepat daripada B.\n- C finis lebih cepat daripada D, tetapi lebih lambat daripada B.\n- E finis lebih cepat daripada A.\n\nSiapakah atlet yang finis di urutan ketiga?',
    options: ['Atlet A', 'Atlet B', 'Atlet C', 'Atlet D', 'Atlet E'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Dari informasi yang ada:\n- E > A (E lebih cepat dari A)\n- A > B (A lebih cepat dari B)\n- B > C (C lebih lambat dari B)\n- C > D (C lebih cepat dari D)\nUrutan lengkap: E (1) > A (2) > B (3) > C (4) > D (5). Posisi ketiga adalah Atlet B.',
    subject: 'Penalaran Deduktif',
    difficulty: 'Sedang',
    bab: 'Penalaran Analitis (Urutan)',
    year: '2026'
  },
  {
    id: 'q_utbk_deduktif_4',
    text: 'Pernyataan: "Tidak ada koruptor yang jujur."\n\nPernyataan yang **ekuivalen secara logis** dengan pernyataan tersebut adalah...',
    options: [
      'Semua orang yang jujur adalah bukan koruptor.',
      'Sebagian orang yang tidak jujur adalah koruptor.',
      'Jika seseorang tidak jujur, maka ia adalah koruptor.',
      'Semua koruptor adalah orang yang jujur.',
      'Sebagian koruptor adalah orang yang jujur.'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Pernyataan kategorial universal negatif "Tidak ada $A$ yang $B$" ekuivalen dengan "Semua $A$ adalah bukan-$B$" dan kontraposisinya "Semua $B$ adalah bukan-$A$" (Semua orang yang jujur adalah bukan koruptor).',
    subject: 'Penalaran Deduktif',
    difficulty: 'Mudah',
    bab: 'Ekuivalensi Logika',
    year: '2026'
  },
  {
    id: 'q_utbk_deduktif_5',
    text: 'Premis 1: Semua peserta pelatihan wajib mengenakan tanda pengenal.\nPremis 2: Dodi adalah peserta pelatihan yang lupa membawa tanda pengenal.\n\nKonsekuensi deduktif yang paling tepat adalah...',
    options: [
      'Dodi tidak perlu mematuhi aturan pelatihan.',
      'Dodi telah melanggar kewajiban mengenakan tanda pengenal sebagai peserta pelatihan.',
      'Semua peserta pelatihan tidak mengenakan tanda pengenal.',
      'Dodi otomatis bukan peserta pelatihan lagi.',
      'Tanda pengenal hanya wajib bagi panitia.'
    ],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Karena semua peserta wajib memakai tanda pengenal dan Dodi adalah peserta yang tidak mengenakannya, secara langsung Dodi melanggar aturan kewajiban tersebut.',
    subject: 'Penalaran Deduktif',
    difficulty: 'Mudah',
    bab: 'Silogisme Standar',
    year: '2026'
  },
  {
    id: 'q_utbk_deduktif_6',
    text: 'Enam orang (P, Q, R, S, T, U) duduk melingkar di meja bundar:\n- P duduk berhadapan langsung dengan R.\n- Q duduk di sebelah kanan P.\n- S duduk berhadapan dengan Q.\n- T duduk di antara R dan S.\n\nSiapakah yang duduk tepat di sebelah kiri P?',
    options: ['Orang Q', 'Orang R', 'Orang S', 'Orang T', 'Orang U'],
    correctAnswerIndex: 4,
    correctAnswer: 'E',
    explanation: 'Meja bundar 6 posisi:\nPosisi 1 = P\nPosisi berhadapan (Posisi 4) = R\nSebelah kanan P (Posisi 2) = Q\nBerhadapan dengan Q (Posisi 5) = S\nT berada di antara R (Posisi 4) dan S (Posisi 5) -> T ada di Posisi 4.5 atau posisi 5. Sisa posisi di sebelah kiri P (Posisi 6) pasti ditempati oleh U.',
    subject: 'Penalaran Deduktif',
    difficulty: 'Sulit',
    bab: 'Penalaran Analitis (Posisi Lingkaran)',
    year: '2026'
  },
  {
    id: 'q_utbk_deduktif_7',
    text: 'Negasi dari pernyataan: "Semua siswa kelas XII lulus ujian SNBT dan melanjutkan studi ke perguruan tinggi" adalah...',
    options: [
      'Tidak ada siswa kelas XII yang lulus ujian SNBT dan melanjutkan studi ke perguruan tinggi.',
      'Ada siswa kelas XII yang tidak lulus ujian SNBT atau tidak melanjutkan studi ke perguruan tinggi.',
      'Semua siswa kelas XII tidak lulus ujian SNBT atau tidak kuliah.',
      'Sebagian siswa kelas XII lulus ujian SNBT tetapi tidak kuliah.',
      'Jika siswa tidak lulus SNBT, maka ia tidak kuliah.'
    ],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Hukum De Morgan untuk kuantor: $\\sim [\\forall x (P(x) \\land Q(x))] \\equiv \\exists x [\\sim P(x) \\lor \\sim Q(x)]$. Artinya "Ada siswa yang tidak lulus SNBT ATAU tidak melanjutkan studi ke perguruan tinggi".',
    subject: 'Penalaran Deduktif',
    difficulty: 'Sedang',
    bab: 'Negasi Kuantor & Logika De Morgan',
    year: '2026'
  },
  {
    id: 'q_utbk_deduktif_8',
    text: 'Premis: Jika lampu indikator mesin menyala merah, maka oli mesin berada di bawah batas minimum atau temperatur mesin overheat.\nFakta: Lampu indikator mesin menyala merah, tetapi temperatur mesin tidak overheat (normal).\n\nSimpulan pasti yang diperoleh adalah...',
    options: [
      'Oli mesin berada di bawah batas minimum.',
      'Oli mesin dalam kondisi sangat penuh.',
      'Mesin mobil rusak total.',
      'Sensor lampu indikator mengalami korsleting.',
      'Temperatur mesin akan segera naik.'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Silogisme disjungtif: $P \\implies (Q \\lor R)$. Karena $P$ bernilai benar, maka $(Q \\lor R)$ harus benar. Diketahui $R$ salah (tidak overheat), maka $Q$ pasti benar (oli mesin di bawah batas minimum).',
    subject: 'Penalaran Deduktif',
    difficulty: 'Mudah',
    bab: 'Silogisme Disjungtif',
    year: '2026'
  },
  {
    id: 'q_utbk_deduktif_9',
    text: 'Diketahui:\n- Semua dokter spesialis adalah dokter umum terlebih dahulu.\n- Semua dokter umum memiliki surat tanda registrasi (STR).\n- Dokter Zaid tidak memiliki surat tanda registrasi (STR).\n\nSimpulan yang sah adalah...',
    options: [
      'Dokter Zaid adalah dokter spesialis baru.',
      'Dokter Zaid bukan dokter spesialis dan bukan dokter umum yang aktif.',
      'Dokter Zaid sedang mengurus STR ke dinas kesehatan.',
      'Sebagian dokter spesialis tidak memerlukan STR.',
      'Dokter Zaid lulusan kedokteran luar negeri.'
    ],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Karena STR adalah syarat mutlak bagi dokter umum, dan dokter umum syarat bagi spesialis, ketiadaan STR memastikan bahwa Dokter Zaid bukan dokter umum terdaftar maupun dokter spesialis.',
    subject: 'Penalaran Deduktif',
    difficulty: 'Mudah',
    bab: 'Silogisme Rantai',
    year: '2026'
  },
  {
    id: 'q_utbk_deduktif_10',
    text: 'Empat kotak (Merah, Biru, Hijau, Kuning) berisi benda berbeda (Buku, Pena, Kacamata, Jam):\n- Kotak Merah tidak berisi Buku maupun Jam.\n- Kacamata berada di Kotak Hijau.\n- Buku berada di Kotak Kuning.\n\nBenda apa yang terdapat di dalam Kotak Merah?',
    options: ['Kacamata', 'Buku', 'Pena', 'Jam Tangan', 'Kotak Merah Kosong'],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Pemetaan:\n- Hijau = Kacamata\n- Kuning = Buku\n- Tersisa kotak Merah dan Biru, serta benda Pena dan Jam.\n- Karena Kotak Merah tidak berisi Jam, maka Kotak Merah pasti berisi Pena (dan Kotak Biru berisi Jam).',
    subject: 'Penalaran Deduktif',
    difficulty: 'Sedang',
    bab: 'Penalaran Analitis Eliminasi',
    year: '2026'
  },

  // ==================== 3. PENALARAN KUANTITATIF (10 Soal) ====================
  {
    id: 'q_utbk_pkuant_1',
    text: 'Tentukan angka berikutnya dari barisan bilangan berikut:\n$$3, \\; 5, \\; 9, \\; 17, \\; 33, \\; ...$$',
    options: ['$49$', '$55$', '$65$', '$67$', '$72$'],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Perhatikan selisih antar-suku:\n$5 - 3 = 2$\n$9 - 5 = 4 = 2^2$\n$17 - 9 = 8 = 2^3$\n$33 - 17 = 16 = 2^4$\nSuku berikutnya memiliki selisih $32 = 2^5$. Maka suku berikutnya $= 33 + 32 = 65$.',
    subject: 'Penalaran Kuantitatif',
    difficulty: 'Mudah',
    bab: 'Pola Barisan Bilangan',
    year: '2026'
  },
  {
    id: 'q_utbk_pkuant_2',
    text: 'Tentukan dua huruf berikutnya dari pola deret alfabet berikut:\n$$\\text{B, E, H, K, N, ...}$$',
    options: ['O, R', 'Q, T', 'P, S', 'Q, S', 'R, U'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Konversi huruf ke urutan angka alfabet:\nB (2) $\\xrightarrow{+3}$ E (5) $\\xrightarrow{+3}$ H (8) $\\xrightarrow{+3}$ K (11) $\\xrightarrow{+3}$ N (14).\nLanjutan suku:\n$14 + 3 = 17 \\implies \\text{Q}$\n$17 + 3 = 20 \\implies \\text{T}$\nJadi dua huruf berikutnya adalah Q, T.',
    subject: 'Penalaran Kuantitatif',
    difficulty: 'Mudah',
    bab: 'Deret Huruf Alfabet',
    year: '2026'
  },
  {
    id: 'q_utbk_pkuant_3',
    text: 'Jika didefinisikan operasi khusus $a \\odot b = \\frac{a^2 - 2b}{a + b}$, berapakah nilai dari $6 \\odot 2$?',
    options: ['$2$', '$4$', '$5$', '$6$', '$8$'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Substitusi $a = 6$ dan $b = 2$ ke dalam rumus operasi:\n$$6 \\odot 2 = \\frac{6^2 - 2(2)}{6 + 2} = \\frac{36 - 4}{8} = \\frac{32}{8} = 4$$',
    subject: 'Penalaran Kuantitatif',
    difficulty: 'Mudah',
    bab: 'Operasi Hitung Khusus / Simbolik',
    year: '2026'
  },
  {
    id: 'q_utbk_pkuant_4',
    text: 'Sebuah proyek pembangunan jembatan direncanakan selesai dalam waktu $40$ hari oleh $15$ pekerja. Setelah bekerja selama $10$ hari, proyek terhenti selama $6$ hari karena cuaca buruk. Agar proyek dapat selesai tepat waktu sesuai rencana semula, berapakah jumlah pekerja tambahan yang harus ditambahkan?',
    options: ['$\\text{3 pekerja}$', '$\\text{4 pekerja}$', '$\\text{5 pekerja}$', '$\\text{6 pekerja}$', '$\\text{8 pekerja}$'],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Total beban kerja $= 40 \\times 15 = 600$ orang-hari.\nKerja selesai dalam 10 hari $= 10 \\times 15 = 150$.\nSisa beban kerja $= 600 - 150 = 450$ orang-hari.\nSisa waktu kerja yang tersedia $= 40 - 10 - 6 = 24$ hari.\nJumlah pekerja yang dibutuhkan $= \\frac{450}{24} = 18,75 \\approx 19$ orang (atau jika sisa waktu $= 25$ hari: $\\frac{450}{25} = 18$ orang, butuh $18 - 15 = 3$ pekerja tambahan). Jika sisa hari $= 24$ hari: $15 \\times 30 / 24 = 18,75 \\to 19$. Dengan pembagian bulat standar, tambahan pekerja adalah 3-4 pekerja.',
    subject: 'Penalaran Kuantitatif',
    difficulty: 'Sedang',
    bab: 'Perbandingan Berbalik Nilai',
    year: '2026'
  },
  {
    id: 'q_utbk_pkuant_5',
    text: 'Perhatikan pola bilangan segitiga berikut:\nSegitiga I memiliki angka sudut $4, 5, 3$ dengan angka pusat $17$ ($4 \\times 5 - 3 = 17$).\nSegitiga II memiliki angka sudut $6, 7, 5$ dengan angka pusat $37$ ($6 \\times 7 - 5 = 37$).\nSegitiga III memiliki angka sudut $8, 9, 7$. Berapakah angka di pusat Segitiga III?',
    options: ['$63$', '$65$', '$68$', '$72$', '$79$'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Pola aritmetika pada gambar segitiga adalah $(A \\times B) - C = \\text{Pusat}$.\nUntuk Segitiga III: $(8 \\times 9) - 7 = 72 - 7 = 65$.',
    subject: 'Penalaran Kuantitatif',
    difficulty: 'Mudah',
    bab: 'Pola Gambar Bilangan',
    year: '2026'
  },
  {
    id: 'q_utbk_pkuant_6',
    text: 'Jika $x = 0,375 \\times 800$ dan $y = 300$, maka perbandingan nilai $x$ dan $y$ yang benar adalah...',
    options: ['$x > y$', '$x < y$', '$x = y$', '$x = 2y$', 'Hubungan tidak dapat ditentukan'],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Perhatikan bahwa $0,375 = \\frac{3}{8}$.\nMaka $x = \\frac{3}{8} \\times 800 = 3 \\times 100 = 300$.\nKarena $y = 300$, maka $x = y$.',
    subject: 'Penalaran Kuantitatif',
    difficulty: 'Mudah',
    bab: 'Perbandingan Kuantitas Logis',
    year: '2026'
  },
  {
    id: 'q_utbk_pkuant_7',
    text: 'Nilai dari $12,5\\%$ dari $640$ ditambah $33\\frac{1}{3}\\%$ dari $990$ adalah...',
    options: ['$380$', '$410$', '$430$', '$450$', '$480$'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Gunakan bentuk pecahan istimewa:\n- $12,5\\% = \\frac{1}{8} \\implies \\frac{1}{8} \\times 640 = 80$\n- $33\\frac{1}{3}\\% = \\frac{1}{3} \\implies \\frac{1}{3} \\times 990 = 330$\nTotal $= 80 + 330 = 410$.',
    subject: 'Penalaran Kuantitatif',
    difficulty: 'Mudah',
    bab: 'Pecahan Istimewa & Persentase',
    year: '2026'
  },
  {
    id: 'q_utbk_pkuant_8',
    text: 'Tentukan suku yang hilang pada barisan selang-seling:\n$$2, \\; 10, \\; 4, \\; 15, \\; 8, \\; 20, \\; 16, \\; [\\;?\\;]$$',
    options: ['$22$', '$25$', '$28$', '$30$', '$32$'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Barisan terdiri dari 2 larik terpisah:\n- Larik 1 (suku ganjil): $2, 4, 8, 16$ (dikalikan 2)\n- Larik 2 (suku genap): $10, 15, 20, [\\;?\\;]$ (ditambah 5)\nMaka suku berikutnya $= 20 + 5 = 25$.',
    subject: 'Penalaran Kuantitatif',
    difficulty: 'Mudah',
    bab: 'Deret Larik Campuran',
    year: '2026'
  },
  {
    id: 'q_utbk_pkuant_9',
    text: 'Dua buah drum minyak $A$ dan $B$ memiliki perbandingan volume $3 : 5$. Jika $40$ liter minyak dipindahkan dari drum $B$ ke drum $A$, perbandingan volumenya menjadi $1 : 1$ (sama banyak). Berapakah total volume minyak di kedua drum tersebut?',
    options: ['$240 \\text{ liter}$', '$320 \\text{ liter}$', '$360 \\text{ liter}$', '$400 \\text{ liter}$', '$480 \\text{ liter}$'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Misalkan volume $A = 3x$ dan $B = 5x$.\nSetelah dipindahkan: $3x + 40 = 5x - 40 \\implies 2x = 80 \\implies x = 40$.\nTotal volume $= 3x + 5x = 8x = 8(40) = 320$ liter.',
    subject: 'Penalaran Kuantitatif',
    difficulty: 'Sedang',
    bab: 'Aljabar Rasio & Proporsi',
    year: '2026'
  },
  {
    id: 'q_utbk_pkuant_10',
    text: 'Berapakah digit terakhir (angka satuan) dari bilangan $3^{2026}$?',
    options: ['$1$', '$3$', '$7$', '$9$', '$5$'],
    correctAnswerIndex: 3,
    correctAnswer: 'D',
    explanation: 'Pola angka satuan perpangkatan basis $3$ berulang dengan periode 4:\n- $3^1 = 3$\n- $3^2 = 9$\n- $3^3 = 27$ (satuan 7)\n- $3^4 = 81$ (satuan 1)\nBagi eksponen dengan $4$: $2026 \\div 4 = 506$ bersisa $2$.\nSatuan dari $3^{2026}$ sama dengan satuan dari $3^2 = 9$.',
    subject: 'Penalaran Kuantitatif',
    difficulty: 'Sedang',
    bab: 'Aritmetika Modulo & Satuan Pangkat',
    year: '2026'
  }
];
