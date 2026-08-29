import { UtbkQuestion } from '../types';

export const induktifTryoutData: UtbkQuestion[] = [
  {
    id: 1,
    text: 'Tanaman berbatang keras akan kerdil apabila tidak diberi pupuk berzat ZT.\n\nKesimpulan yang tepat:',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Pohon berkayu keras kerdil bila tak diberi pupuk zat ZT.', correct: true },
      { id: 'B', text: 'Pohon berkayu keras dapat memakai zat ZT supaya tumbuh optimal.' },
      { id: 'C', text: 'Seluruh tanaman tumbuh optimal jika diberi zat ZT.' },
      { id: 'D', text: 'Tanaman dapat tumbuh optimal meski tanpa zat ZT.' },
      { id: 'E', text: 'Hanya tanaman tertentu yang wajib diberi zat ZT, selain tanaman berbatang keras.' }
    ],
    correctAnswer: 'A',
    explanation: 'Jawaban: A\n\nPembahasan: Berdasarkan teks, kondisi kerdil terjadi jika tidak dipupuk dengan zat ZT pada tanaman berbatang keras. Pernyataan (A) merupakan bentuk ekuivalen langsung dari premis sebab-akibat tersebut.',
    topic: 'Hubungan Kausalitas & Ekuivalensi Premis',
    difficulty: 'Mudah'
  },
  {
    id: 2,
    text: 'Pegawai dari instansi ABL asal luar kota kerap terlambat, dan sebagian dari mereka lebih menyukai naik taksi dibanding instansi lainnya.\n\nSimpulan yang paling sesuai:',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Beberapa pegawai ABL kerap terlambat dan cenderung memilih taksi dibanding pegawai kantor lain.', correct: true },
      { id: 'B', text: 'Beberapa pegawai ABL kerap terlambat tetapi tidak menaiki taksi dibanding pegawai kantor lain.' },
      { id: 'C', text: 'Pegawai ABL asal luar daerah lebih sering naik taksi daripada pegawai kantor lain.' },
      { id: 'D', text: 'Seluruh pegawai ABL dari luar daerah kerap terlambat dan naik taksi dibanding kantor lain.' },
      { id: 'E', text: 'Pekerja yang tak naik taksi bukan pegawai ABL.' }
    ],
    correctAnswer: 'A',
    explanation: 'Jawaban: A\n\nPembahasan: Informasi menyatakan sebagian pegawai ABL asal luar kota terlambat, dan sebagian dari mereka lebih menyukai taksi. Kata "sebagian" sepadan dengan "beberapa", sehingga simpulan yang tepat adalah beberapa pegawai ABL terlambat dan lebih suka menggunakan taksi.',
    topic: 'Penalaran Kuantor Partikular',
    difficulty: 'Mudah'
  },
  {
    id: 3,
    text: 'Pada libur semester, X berniat ikut latihan menyelam atau berkuda. Sahabatnya mengajak berkemah di gunung, namun karena anggota lain tidak bisa, rencana berkemah diundur ke akhir tahun.\n\nKegiatan yang paling mungkin dikerjakan X pada libur semester ini:',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Berlatih menyelam sekaligus menunggang kuda.' },
      { id: 'B', text: 'Berlatih menyelam ataupun menunggang kuda.', correct: true },
      { id: 'C', text: 'Pergi berkemah ke gunung bersama sahabatnya.' },
      { id: 'D', text: 'Belajar menyelam saja tanpa berkuda.' },
      { id: 'E', text: 'Belajar berkuda saja tanpa menyelam.' }
    ],
    correctAnswer: 'B',
    explanation: 'Jawaban: B\n\nPembahasan: Rencana berkemah ditunda hingga akhir tahun, sehingga yang tersisa untuk liburan tengah semester adalah rencana awalnya, yaitu belajar menyelam atau berlatih berkuda (opsi B).',
    topic: 'Penalaran Disjungtif',
    difficulty: 'Mudah'
  },
  {
    id: 4,
    text: 'Jumlah turis pencinta kuliner di Kota XYX naik saat restoran vegetarian dibuka atau ketika ada festival vegetarian. Sebaliknya, saat digelar festival serbadaging, jumlah turis kuliner tidak mengalami kenaikan.\n\nPernyataan yang paling mungkin benar:',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Keberadaan restoran vegetarian atau festival kuliner vegetarian mendongkrak kedatangan turis kuliner di Kota XYX.', correct: true },
      { id: 'B', text: 'Dibukanya restoran vegetarian di kota lain membuat pelancong kuliner di Kota XYX meningkat.' },
      { id: 'C', text: 'Peminat sajian vegetarian menurun saat tidak ada gerai vegetarian di Kota XYX.' },
      { id: 'D', text: 'Mengadakan festival vegetarian di wilayah lain menurunkan angka turis kuliner ke Kota XYX.' },
      { id: 'E', text: 'Festival serbadaging meningkatkan jumlah kunjungan wisatawan.' }
    ],
    correctAnswer: 'A',
    explanation: 'Jawaban: A\n\nPembahasan: Teks secara eksplisit menunjukkan hubungan sebab-akibat: pembukaan resto vegetarian atau festival vegetarian berkorelasi dengan kenaikan jumlah wisatawan kuliner di Kota XYX.',
    topic: 'Korelasi & Sebab Akibat Induktif',
    difficulty: 'Sedang'
  },
  {
    id: 5,
    text: 'Tingginya keasaman tanah akibat peningkatan pemakaian pupuk kimia memicu kerusakan tanah, sehingga bibit unggul sekalipun tidak dapat tumbuh optimal.\n\nPernyataan yang tepat:',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Tanaman kerdil karena memakai pupuk kimia.' },
      { id: 'B', text: 'Tanah rusak menuntut petani memakai bibit berkualitas unggul.' },
      { id: 'C', text: 'Pemakaian bibit unggul menyebabkan melonjaknya pemakaian pupuk kimia.' },
      { id: 'D', text: 'Keasaman tanah meningkat karena dipicu penanaman bibit unggul.' },
      { id: 'E', text: 'Kerusakan media tanah dipicu oleh penggunaan pupuk kimia.', correct: true }
    ],
    correctAnswer: 'E',
    explanation: 'Jawaban: E\n\nPembahasan: Kalimat awal teks menyebutkan secara langsung bahwa peningkatan keasaman tanah akibat pupuk kimia menyebabkan kerusakan tanah.',
    topic: 'Penarikan Fakta & Analisis Sebab',
    difficulty: 'Mudah'
  },
  {
    id: 6,
    text: 'Pupuk digunakan untuk menyuburkan tanah dan memperbanyak panen, tetapi pemakaian berlebih bisa merusak ekosistem air dan menyisakan residu kimia beracun pada tanaman pangan.\n\nPernyataan yang pasti salah:',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Petani dengan hasil panen rendah mungkin tidak memakai pupuk.' },
      { id: 'B', text: 'Pupuk mampu mendongkrak ketahanan tumbuhan terhadap hama.' },
      { id: 'C', text: 'Polusi air kian parah akibat pupuk yang dipakai berlebihan.' },
      { id: 'D', text: 'Manusia dapat kemasukan residu kimia jika memakan tanaman yang terpapar pupuk berlebih.' },
      { id: 'E', text: 'Pemakaian pupuk secara berlebihan sama sekali tidak mencemari lingkungan air.', correct: true }
    ],
    correctAnswer: 'E',
    explanation: 'Jawaban: E\n\nPembahasan: Teks menyatakan pupuk berlebihan dapat meningkatkan pencemaran air. Pernyataan pada opsi E ("sama sekali tidak mencemari lingkungan air") secara langsung bertentangan dengan teks, sehingga pasti salah.',
    topic: 'Pernyataan Bertentangan (Pasti Salah)',
    difficulty: 'Mudah'
  },
  {
    id: 7,
    text: 'Menginap di vila saat liburan dipilih untuk menampung keluarga besar dan menghemat pengeluaran. Vila X di area pegunungan punya lokasi strategis serta fasilitas yang sesuai dengan keperluan keluarga.\n\nSimpulan yang paling sesuai:',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Hanya Vila X yang memberikan opsi hemat bagi wisatawan.' },
      { id: 'B', text: 'Semua vila pegunungan memiliki letak yang mudah dijangkau.' },
      { id: 'C', text: 'Fasilitas untuk keluarga hanya ada di Vila X.' },
      { id: 'D', text: 'Semua penginapan berkapasitas besar selalu berlokasi strategis.' },
      { id: 'E', text: 'Sebagian orang memilih menginap di Vila X karena fasilitasnya cocok bagi kebutuhan keluarga.', correct: true }
    ],
    correctAnswer: 'E',
    explanation: 'Jawaban: E\n\nPembahasan: Teks menjelaskan Vila X berkapasitas besar dan cocok untuk keluarga, sehingga logis bahwa beberapa orang memilih menginap di sana karena sesuai dengan kebutuhan keluarga.',
    topic: 'Simpulan Kontekstual',
    difficulty: 'Mudah'
  },
  {
    id: 8,
    text: 'Kegiatan perkemahan pramuka tahun ini minim peserta karena dilarang oleh orang tua. Jika perkemahan bertempat di dalam kota, umumnya seluruh peserta mendapatkan restu orang tua.\n\nSimpulan yang tepat:',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Kegiatan berkemah tidak dilaksanakan di area dalam kota.', correct: true },
      { id: 'B', text: 'Kegiatan kemping sedang diadakan di pusat kota.' },
      { id: 'C', text: 'Seluruh anggota pramuka berpartisipasi pada acara tersebut.' },
      { id: 'D', text: 'Semua peserta mengantongi izin dari orang tua.' },
      { id: 'E', text: 'Berkemah hanya bisa dilakukan di area luar kota.' }
    ],
    correctAnswer: 'A',
    explanation: 'Jawaban: A\n\nPembahasan: Premis: Jika di dalam kota → semua dapat izin. Fakta: banyak yang dilarang/tidak diizinkan (artinya tidak semua dapat izin). Berdasarkan modus tollens: kegiatan tidak dilaksanakan di dalam kota.',
    topic: 'Modus Tollens Induktif-Deduktif',
    difficulty: 'Sedang'
  },
  {
    id: 9,
    text: 'Siswa ABC meraih emas riset nasional berkat dukungan sekolah dan kegigihannya meriset secara teratur. Dukungan sekolah membuatnya percaya diri dalam bernalar kritis mengkaji topik penelitian.\n\nKesimpulan yang paling mungkin benar:',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Tuntutan juara memaksa siswa ABC selalu optimis.' },
      { id: 'B', text: 'Siswa ABC tekun merampungkan tugas-tugas penelitiannya.' },
      { id: 'C', text: 'Siswa ABC tertib menjalankan tahapan penelitiannya sesuai jadwal.' },
      { id: 'D', text: 'Siswa ABC dapat memusatkan perhatian penuh pada masalah penelitian.' },
      { id: 'E', text: 'Dukungan pihak sekolah menumbuhkan rasa percaya diri pada kemampuan analisis kritisnya.', correct: true }
    ],
    correctAnswer: 'E',
    explanation: 'Jawaban: E\n\nPembahasan: Paragraf menyebutkan bahwa dukungan pihak sekolah menyebabkan siswa lebih percaya diri dalam menelaah masalah secara kritis.',
    topic: 'Penalaran Analitis Teks',
    difficulty: 'Mudah'
  },
  {
    id: 10,
    text: 'Rak buku tampak tersusun rapi setahun lalu saat ditinggal sang kakak merantau, tetapi kini buku-buku di dalamnya rapuh dan rusak digerogoti rayap.\n\nPernyataan yang paling mungkin menjelaskan kondisi tersebut:',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Buku telah lapuk jauh sebelum keberangkatan sang kakak.' },
      { id: 'B', text: 'Pemilik rumah merawat dan memperbaiki buku-buku tersebut.' },
      { id: 'C', text: 'Buku di ruang baca sering dipinjam oleh kerabat selama setahun ini.' },
      { id: 'D', text: 'Pada awalnya tidak ada sarang rayap di seluruh penjuru rumah.' },
      { id: 'E', text: 'Buku-buku tersebut tidak lagi dirawat dan jarang dibaca setelah ditinggal pergi.', correct: true }
    ],
    correctAnswer: 'E',
    explanation: 'Jawaban: E\n\nPembahasan: Perubahan dari kondisi rapi menjadi lapuk dan dimakan rayap setelah ditinggal kakak paling logis dijelaskan oleh kurangnya perawatan dan jarang dibaca selama kakak merantau.',
    topic: 'Eksplanasi Kausalitas Fenomena',
    difficulty: 'Mudah'
  }
];

