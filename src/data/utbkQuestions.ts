/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question } from '../types';

export const UTBK_QUESTIONS: Question[] = [
  // ==================== 1. PENALARAN INDUKTIF (10 Soal) ====================
  {
    id: 'q_utbk_induktif_1',
    text: 'Tanaman berbatang keras akan kerdil apabila tidak diberi pupuk berzat ZT.\n\nKesimpulan yang tepat:',
    options: [
      'Pohon berkayu keras kerdil bila tak diberi pupuk zat ZT.',
      'Pohon berkayu keras dapat memakai zat ZT supaya tumbuh optimal.',
      'Seluruh tanaman tumbuh optimal jika diberi zat ZT.',
      'Tanaman dapat tumbuh optimal meski tanpa zat ZT.',
      'Hanya tanaman tertentu yang wajib diberi zat ZT, selain tanaman berbatang keras.'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Jawaban: A\n\nPembahasan: Berdasarkan teks, kondisi kerdil terjadi jika tidak dipupuk dengan zat ZT pada tanaman berbatang keras. Pernyataan (A) merupakan bentuk ekuivalen langsung dari premis sebab-akibat tersebut.',
    subject: 'Penalaran Induktif',
    difficulty: 'Mudah',
    bab: 'Hubungan Kausalitas & Ekuivalensi Premis',
    year: '2026'
  },
  {
    id: 'q_utbk_induktif_2',
    text: 'Pegawai dari instansi ABL asal luar kota kerap terlambat, dan sebagian dari mereka lebih menyukai naik taksi dibanding instansi lainnya.\n\nSimpulan yang paling sesuai:',
    options: [
      'Beberapa pegawai ABL kerap terlambat dan cenderung memilih taksi dibanding pegawai kantor lain.',
      'Beberapa pegawai ABL kerap terlambat tetapi tidak menaiki taksi dibanding pegawai kantor lain.',
      'Pegawai ABL asal luar daerah lebih sering naik taksi daripada pegawai kantor lain.',
      'Seluruh pegawai ABL dari luar daerah kerap terlambat dan naik taksi dibanding kantor lain.',
      'Pekerja yang tak naik taksi bukan pegawai ABL.'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Jawaban: A\n\nPembahasan: Informasi menyatakan sebagian pegawai ABL asal luar kota terlambat, dan sebagian dari mereka lebih menyukai taksi. Kata "sebagian" sepadan dengan "beberapa", sehingga simpulan yang tepat adalah beberapa pegawai ABL terlambat dan lebih suka menggunakan taksi.',
    subject: 'Penalaran Induktif',
    difficulty: 'Mudah',
    bab: 'Penalaran Kuantor Partikular',
    year: '2026'
  },
  {
    id: 'q_utbk_induktif_3',
    text: 'Pada libur semester, X berniat ikut latihan menyelam atau berkuda. Sahabatnya mengajak berkemah di gunung, namun karena anggota lain tidak bisa, rencana berkemah diundur ke akhir tahun.\n\nKegiatan yang paling mungkin dikerjakan X pada libur semester ini:',
    options: [
      'Berlatih menyelam sekaligus menunggang kuda.',
      'Berlatih menyelam ataupun menunggang kuda.',
      'Pergi berkemah ke gunung bersama sahabatnya.',
      'Belajar menyelam saja tanpa berkuda.',
      'Belajar berkuda saja tanpa menyelam.'
    ],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Jawaban: B\n\nPembahasan: Rencana berkemah ditunda hingga akhir tahun, sehingga yang tersisa untuk liburan tengah semester adalah rencana awalnya, yaitu belajar menyelam atau berlatih berkuda (opsi B).',
    subject: 'Penalaran Induktif',
    difficulty: 'Mudah',
    bab: 'Penalaran Disjungtif',
    year: '2026'
  },
  {
    id: 'q_utbk_induktif_4',
    text: 'Jumlah turis pencinta kuliner di Kota XYX naik saat restoran vegetarian dibuka atau ketika ada festival vegetarian. Sebaliknya, saat digelar festival serbadaging, jumlah turis kuliner tidak mengalami kenaikan.\n\nPernyataan yang paling mungkin benar:',
    options: [
      'Keberadaan restoran vegetarian atau festival kuliner vegetarian mendongkrak kedatangan turis kuliner di Kota XYX.',
      'Dibukanya restoran vegetarian di kota lain membuat pelancong kuliner di Kota XYX meningkat.',
      'Peminat sajian vegetarian menurun saat tidak ada gerai vegetarian di Kota XYX.',
      'Mengadakan festival vegetarian di wilayah lain menurunkan angka turis kuliner ke Kota XYX.',
      'Festival serbadaging meningkatkan jumlah kunjungan wisatawan.'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Jawaban: A\n\nPembahasan: Teks secara eksplisit menunjukkan hubungan sebab-akibat: pembukaan resto vegetarian atau festival vegetarian berkorelasi dengan kenaikan jumlah wisatawan kuliner di Kota XYX.',
    subject: 'Penalaran Induktif',
    difficulty: 'Sedang',
    bab: 'Korelasi & Sebab Akibat Induktif',
    year: '2026'
  },
  {
    id: 'q_utbk_induktif_5',
    text: 'Tingginya keasaman tanah akibat peningkatan pemakaian pupuk kimia memicu kerusakan tanah, sehingga bibit unggul sekalipun tidak dapat tumbuh optimal.\n\nPernyataan yang tepat:',
    options: [
      'Tanaman kerdil karena memakai pupuk kimia.',
      'Tanah rusak menuntut petani memakai bibit berkualitas unggul.',
      'Pemakaian bibit unggul menyebabkan melonjaknya pemakaian pupuk kimia.',
      'Keasaman tanah meningkat karena dipicu penanaman bibit unggul.',
      'Kerusakan media tanah dipicu oleh penggunaan pupuk kimia.'
    ],
    correctAnswerIndex: 4,
    correctAnswer: 'E',
    explanation: 'Jawaban: E\n\nPembahasan: Kalimat awal teks menyebutkan secara langsung bahwa peningkatan keasaman tanah akibat pupuk kimia menyebabkan kerusakan tanah.',
    subject: 'Penalaran Induktif',
    difficulty: 'Mudah',
    bab: 'Penarikan Fakta & Analisis Sebab',
    year: '2026'
  },
  {
    id: 'q_utbk_induktif_6',
    text: 'Pupuk digunakan untuk menyuburkan tanah dan memperbanyak panen, tetapi pemakaian berlebih bisa merusak ekosistem air dan menyisakan residu kimia beracun pada tanaman pangan.\n\nPernyataan yang pasti salah:',
    options: [
      'Petani dengan hasil panen rendah mungkin tidak memakai pupuk.',
      'Pupuk mampu mendongkrak ketahanan tumbuhan terhadap hama.',
      'Polusi air kian parah akibat pupuk yang dipakai berlebihan.',
      'Manusia dapat kemasukan residu kimia jika memakan tanaman yang terpapar pupuk berlebih.',
      'Pemakaian pupuk secara berlebihan sama sekali tidak mencemari lingkungan air.'
    ],
    correctAnswerIndex: 4,
    correctAnswer: 'E',
    explanation: 'Jawaban: E\n\nPembahasan: Teks menyatakan pupuk berlebihan dapat meningkatkan pencemaran air. Pernyataan pada opsi E ("sama sekali tidak mencemari lingkungan air") secara langsung bertentangan dengan teks, sehingga pasti salah.',
    subject: 'Penalaran Induktif',
    difficulty: 'Mudah',
    bab: 'Pernyataan Bertentangan (Pasti Salah)',
    year: '2026'
  },
  {
    id: 'q_utbk_induktif_7',
    text: 'Menginap di vila saat liburan dipilih untuk menampung keluarga besar dan menghemat pengeluaran. Vila X di area pegunungan punya lokasi strategis serta fasilitas yang sesuai dengan keperluan keluarga.\n\nSimpulan yang paling sesuai:',
    options: [
      'Hanya Vila X yang memberikan opsi hemat bagi wisatawan.',
      'Semua vila pegunungan memiliki letak yang mudah dijangkau.',
      'Fasilitas untuk keluarga hanya ada di Vila X.',
      'Semua penginapan berkapasitas besar selalu berlokasi strategis.',
      'Sebagian orang memilih menginap di Vila X karena fasilitasnya cocok bagi kebutuhan keluarga.'
    ],
    correctAnswerIndex: 4,
    correctAnswer: 'E',
    explanation: 'Jawaban: E\n\nPembahasan: Teks menjelaskan Vila X berkapasitas besar dan cocok untuk keluarga, sehingga logis bahwa beberapa orang memilih menginap di sana karena sesuai dengan kebutuhan keluarga.',
    subject: 'Penalaran Induktif',
    difficulty: 'Mudah',
    bab: 'Simpulan Kontekstual',
    year: '2026'
  },
  {
    id: 'q_utbk_induktif_8',
    text: 'Kegiatan perkemahan pramuka tahun ini minim peserta karena dilarang oleh orang tua. Jika perkemahan bertempat di dalam kota, umumnya seluruh peserta mendapatkan restu orang tua.\n\nSimpulan yang tepat:',
    options: [
      'Kegiatan berkemah tidak dilaksanakan di area dalam kota.',
      'Kegiatan kemping sedang diadakan di pusat kota.',
      'Seluruh anggota pramuka berpartisipasi pada acara tersebut.',
      'Semua peserta mengantongi izin dari orang tua.',
      'Berkemah hanya bisa dilakukan di area luar kota.'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Jawaban: A\n\nPembahasan: Premis: Jika di dalam kota → semua dapat izin. Fakta: banyak yang dilarang/tidak diizinkan (artinya tidak semua dapat izin). Berdasarkan modus tollens: kegiatan tidak dilaksanakan di dalam kota.',
    subject: 'Penalaran Induktif',
    difficulty: 'Sedang',
    bab: 'Modus Tollens Induktif-Deduktif',
    year: '2026'
  },
  {
    id: 'q_utbk_induktif_9',
    text: 'Siswa ABC meraih emas riset nasional berkat dukungan sekolah dan kegigihannya meriset secara teratur. Dukungan sekolah membuatnya percaya diri dalam bernalar kritis mengkaji topik penelitian.\n\nKesimpulan yang paling mungkin benar:',
    options: [
      'Tuntutan juara memaksa siswa ABC selalu optimis.',
      'Siswa ABC tekun merampungkan tugas-tugas penelitiannya.',
      'Siswa ABC tertib menjalankan tahapan penelitiannya sesuai jadwal.',
      'Siswa ABC dapat memusatkan perhatian penuh pada masalah penelitian.',
      'Dukungan pihak sekolah menumbuhkan rasa percaya diri pada kemampuan analisis kritisnya.'
    ],
    correctAnswerIndex: 4,
    correctAnswer: 'E',
    explanation: 'Jawaban: E\n\nPembahasan: Paragraf menyebutkan bahwa dukungan pihak sekolah menyebabkan siswa lebih percaya diri dalam menelaah masalah secara kritis.',
    subject: 'Penalaran Induktif',
    difficulty: 'Mudah',
    bab: 'Penalaran Analitis Teks',
    year: '2026'
  },
  {
    id: 'q_utbk_induktif_10',
    text: 'Rak buku tampak tersusun rapi setahun lalu saat ditinggal sang kakak merantau, tetapi kini buku-buku di dalamnya rapuh dan rusak digerogoti rayap.\n\nPernyataan yang paling mungkin menjelaskan kondisi tersebut:',
    options: [
      'Buku telah lapuk jauh sebelum keberangkatan sang kakak.',
      'Pemilik rumah merawat dan memperbaiki buku-buku tersebut.',
      'Buku di ruang baca sering dipinjam oleh kerabat selama setahun ini.',
      'Pada awalnya tidak ada sarang rayap di seluruh penjuru rumah.',
      'Buku-buku tersebut tidak lagi dirawat dan jarang dibaca setelah ditinggal pergi.'
    ],
    correctAnswerIndex: 4,
    correctAnswer: 'E',
    explanation: 'Jawaban: E\n\nPembahasan: Perubahan dari kondisi rapi menjadi lapuk dan dimakan rayap setelah ditinggal kakak paling logis dijelaskan oleh kurangnya perawatan dan jarang dibaca selama kakak merantau.',
    subject: 'Penalaran Induktif',
    difficulty: 'Mudah',
    bab: 'Eksplanasi Kausalitas Fenomena',
    year: '2026'
  },

  // ==================== 2. PENALARAN DEDUKTIF (10 Soal) ====================
  {
    id: 'q_utbk_deduktif_1',
    text: 'Sebagian penduduk daerah XY membuat bank sampah serta memakai produk olahan ulang dalam keseharian. Peneliti berpendapat hal itu efektif menyelesaikan persoalan limbah di wilayah tersebut.\n\nDasar argumen peneliti yang paling mungkin:',
    options: [
      'Konsep daur ulang berkelanjutan diterapkan secara merata di kawasan XY.',
      'Manajemen sampah butuh subsidi penuh dari pemerintah.',
      'Pengelolaan sampah terlaksana dengan adanya keterlibatan aktif warga.',
      'Warga menyukai pemandangan kota tanpa sampah berserakan.',
      'Pengolahan limbah bergantung pada variasi jenis sampahnya.'
    ],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Jawaban: C\n\nPembahasan: Peneliti berargumen bahwa pembuatan bank sampah dan penggunaan daur ulang oleh warga efektif mengatasi sampah, yang didasari oleh adanya partisipasi aktif masyarakat.',
    subject: 'Penalaran Deduktif',
    difficulty: 'Mudah',
    bab: 'Dasar Asumsi & Argumen Deduktif',
    year: '2026'
  },
  {
    id: 'q_utbk_deduktif_2',
    text: 'Profesor 1: Iklim niaga di Kota A lebih kondusif dibandingkan Kota B.\nProfesor 2: Kota B tidak mengutamakan sektor perniagaan sebagai penggerak utama.\nFakta: Kota A dan Kota B sedang bersaing ketat menjadi pusat perniagaan nasional.\n\nKesesuaian fakta:',
    options: [
      'Memperkuat opini Profesor 1.',
      'Memperlemah opini Profesor 1.',
      'Memperkuat pandangan Profesor 2.',
      'Memperlemah pandangan Profesor 2.',
      'Tidak berhubungan dengan argumen kedua profesor.'
    ],
    correctAnswerIndex: 3,
    correctAnswer: 'D',
    explanation: 'Jawaban: D\n\nPembahasan: Profesor 2 menyatakan Kota B tidak memprioritaskan perdagangan. Namun fakta menyatakan Kota B sedang bersaing menjadi pusat bisnis/perdagangan nasional, yang secara langsung memperlemah atau membantah pernyataan Profesor 2.',
    subject: 'Penalaran Deduktif',
    difficulty: 'Sedang',
    bab: 'Memperlemah / Memperkuat Pandangan',
    year: '2026'
  },
  {
    id: 'q_utbk_deduktif_3',
    text: 'Mendaki gunung dapat melatih stamina serta menumbuhkan kecintaan pada alam. Namun, mendaki di musim penghujan berisiko memicu penurunan suhu tubuh secara ekstrem (hipotermia) yang membahayakan jiwa.\n\nPernyataan yang pasti benar:',
    options: [
      'Gangguan kesehatan tertentu timbul akibat mendaki pada musim hujan.',
      'Suhu tubuh semua pendaki dipastikan anjlok saat mendaki gunung.',
      'Orang yang rentan dingin dilarang mendaki gunung.',
      'Pendaki pemula dianjurkan mendaki di tengah curah hujan lebat.',
      'Aktivitas mendaki gunung rutin dijalani oleh peminat olahraga luar ruang.'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Jawaban: A\n\nPembahasan: Teks menyebut mendaki saat musim hujan menimbulkan efek negatif seperti penurunan suhu tubuh drastis, yang membuktikan beberapa gangguan kesehatan timbul akibat naik gunung di musim hujan.',
    subject: 'Penalaran Deduktif',
    difficulty: 'Mudah',
    bab: 'Pernyataan Pasti Benar',
    year: '2026'
  },
  {
    id: 'q_utbk_deduktif_4',
    text: 'Warga Desa ABC memprediksi datangnya musim hujan berdasarkan pola kedatangan kawanan burung agar tepat menentukan waktu tanam. Jika tebakan burung tersebut akurat, warga mengadakan upacara makan bersama.\n\nPernyataan yang paling mungkin benar:',
    options: [
      'Prediksi warga desa lebih presisi daripada ramalan badan meteorologi.',
      'Ketiadaan burung menandakan musim kemarau panjang.',
      'Warga desa tak mampu memprediksi cuaca tanpa kehadiran burung.',
      'Ritual santap bersama ditiadakan saat hujan mulai turun.',
      'Warga Desa ABC rutin menyelenggarakan acara makan bersama tiap tahun.'
    ],
    correctAnswerIndex: 4,
    correctAnswer: 'E',
    explanation: 'Jawaban: E\n\nPembahasan: Karena catatan prediksi pola burung selalu akurat setiap tahun dan upacara makan bersama selalu diadakan jika prediksinya tepat, maka warga rutin menyelenggarakan acara tersebut tiap tahun.',
    subject: 'Penalaran Deduktif',
    difficulty: 'Sedang',
    bab: 'Simpulan Paling Mungkin Benar',
    year: '2026'
  },
  {
    id: 'q_utbk_deduktif_5',
    text: 'Pelaku usaha X memilih membuka kafe berkonsep P (pasar luas dengan margin tipis) dibanding konsep Q (pasar terbatas dengan potensi untung besar) demi meminimalkan risiko kerugian besar.\n\nPernyataan yang paling memperkuat keputusan tersebut:',
    options: [
      'Pengusaha menginginkan arus kas yang stabil meski laba per unitnya kecil.',
      'Pengusaha ingin segera mendirikan cabang berukuran besar.',
      'Target pasar konsep P hanya membidik kelas atas.',
      'Konsep Q sangat gampang dijalankan bagi perintis usaha.',
      'Pengusaha memiliki metode promosi khusus untuk mengenalkan kafenya.'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Jawaban: A\n\nPembahasan: Konsep P memiliki pasar besar dengan laba kecil untuk menghindari risiko rugi besar. Opsi A memperkuat alasan ini karena fokus pada arus keuntungan yang stabil/rutin meskipun nilainya kecil.',
    subject: 'Penalaran Deduktif',
    difficulty: 'Mudah',
    bab: 'Memperkuat Keputusan Bisnis',
    year: '2026'
  },
  {
    id: 'q_utbk_deduktif_6',
    text: 'Beredar anggapan wangi parfum merek X cepat memudar dibanding merek Y di ruangan terbuka karena mutu bahannya.\n\nPernyataan yang paling memperlemah anggapan tersebut:',
    options: [
      'Parfum X dibuat dari konsentrat minyak wangi alami berkualitas tinggi.',
      'Parfum Y sudah melalui uji coba ketahanan berkali-kali sebelum dijual.',
      'Artis ternama ikut mempromosikan produk parfum X.',
      'Ulasan konsumen menunjukkan kepuasan terhadap daya tahan parfum Y.',
      'Beraneka racikan zat aromatik dapat dipakai membuat formula wewangian.'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Jawaban: A\n\nPembahasan: Anggapan menyatakan aroma parfum X cepat hilang karena kualitasnya. Fakta bahwa parfum X memakai bahan alami pilihan berkualitas tinggi menjadi argumen tandingan yang memperlemah anggapan tersebut.',
    subject: 'Penalaran Deduktif',
    difficulty: 'Mudah',
    bab: 'Memperlemah Anggapan / Argumen Tandingan',
    year: '2026'
  },
  {
    id: 'q_utbk_deduktif_7',
    text: 'Manajer Keuangan menyebutkan laba PT X melesat dalam setahun terakhir karena terjalinnya kerja sama baru dengan dinas pemerintah daerah.\n\nPernyataan yang memperkuat klaim manajer:',
    options: [
      'Entitas bisnis pesaing tidak menjalin relasi dengan dinas daerah.',
      'Perusahaan fokus mengadakan pelatihan efisiensi kerja karyawan.',
      'Kemitraan dengan pemerintah daerah tidak meliputi seluruh unit bisnis.',
      'Sejak dekade lalu perusahaan sudah berkolaborasi dengan pemerintah.',
      'Total kontrak kerja sama dengan instansi pemerintah daerah mengalami peningkatan signifikan pada periode terakhir.'
    ],
    correctAnswerIndex: 4,
    correctAnswer: 'E',
    explanation: 'Jawaban: E\n\nPembahasan: Manajer mengklaim laba naik karena berhasil menambah kerja sama dengan pemerintah daerah. Bukti bahwa jumlah kontrak kerja sama meningkat signifikan akan memperkuat klaim manajer secara langsung.',
    subject: 'Penalaran Deduktif',
    difficulty: 'Mudah',
    bab: 'Memperkuat Klaim Berbasis Bukti',
    year: '2026'
  },
  {
    id: 'q_utbk_deduktif_8',
    text: 'Sejumlah klinik menyarankan asupan rimpang herbal untuk mendongkrak sistem imun layaknya program antivirus komputer yang memproteksi perangkat dari malware berbahaya.\n\nSimpulan yang paling mungkin benar:',
    options: [
      'Imunitas hanya dapat dibangun melalui rimpang.',
      'Mengonsumsi herbal rimpang dapat mencegah penurunan produktivitas masyarakat.',
      'Antivirus yang tidak dipasang membuat kinerja masyarakat terganggu.',
      'Tanaman rimpang dianalogikan seperti proteksi antivirus yang memperkuat pertahanan tubuh.',
      'Ramainya pengunjung klinik ditentukan oleh intensitas promosi herbal rimpang.'
    ],
    correctAnswerIndex: 3,
    correctAnswer: 'D',
    explanation: 'Jawaban: D\n\nPembahasan: Teks membuat analogi eksplisit: tanaman rimpang yang meningkatkan imun dan melindungi tubuh diibaratkan seperti antivirus yang melindungi sistem komputer dari program jahat.',
    subject: 'Penalaran Deduktif',
    difficulty: 'Mudah',
    bab: 'Analogi Deduktif & Pemetaan Konsep',
    year: '2026'
  },
  {
    id: 'q_utbk_deduktif_9',
    text: 'Karena waktu latihan terbatas, seorang siswa harus memilih antara memperdalam kemampuan piano yang sudah dikuasainya agar percaya diri dalam lomba, atau mencoba gitar yang masih baru agar keahlian musiknya lebih bervariasi.\n\nKeputusan yang paling tepat:',
    options: [
      'Jika memilih salah satu, ia tidak percaya diri saat lomba dan tidak memiliki variasi bermain musik.',
      'Jika memilih piano, ia bisa tampil percaya diri di ajang lomba sekaligus memiliki keahlian musik yang beragam.',
      'Mengambil keduanya membuat siswa tampil percaya diri dan menguasai berbagai alat musik.',
      'Jika berlatih gitar, ia tidak merasa percaya diri dalam kompetisi dan tidak mendapat ragam kemampuan baru.',
      'Memilih salah satu opsi membuatnya meraih salah satu keunggulan: percaya diri saat berkompetisi atau memiliki portofolio kemampuan musik yang lebih luas.'
    ],
    correctAnswerIndex: 4,
    correctAnswer: 'E',
    explanation: 'Jawaban: E\n\nPembahasan: Teks menyajikan pilihan disjungtif (salah satu): fokus piano (tampil percaya diri di kompetisi) ATAU latihan gitar (kemampuan musik lebih beragam). Memilih salah satu berarti memperoleh salah satu manfaat tersebut.',
    subject: 'Penalaran Deduktif',
    difficulty: 'Sedang',
    bab: 'Penalaran Disjungtif & Keputusan Logis',
    year: '2026'
  },
  {
    id: 'q_utbk_deduktif_10',
    text: 'Relawan zona konflik Y wajib mengikuti pelatihan khusus dan tidak boleh pulang selama masa penugasan. Diketahui salah satu mahasiswa Fakultas X sedang mengurus orang tuanya di panti jompo. Ditarik kesimpulan bahwa mahasiswa tersebut pernah diterjunkan ke area konflik Y.\n\nKualitas kesimpulan:',
    options: [
      'Kesimpulan dipastikan keliru / salah.',
      'Kesimpulan dapat dipastikan valid / benar.',
      'Kesimpulan tersebut berpeluang benar.',
      'Kesimpulan tersebut berpeluang salah.',
      'Kesimpulan tidak relevan dengan premis yang dipaparkan.'
    ],
    correctAnswerIndex: 4,
    correctAnswer: 'E',
    explanation: 'Jawaban: E\n\nPembahasan: Informasi mengenai kegiatan merawat orang tua di panti jompo tidak memiliki kaitan logis untuk menyimpulkan apakah mahasiswa tersebut pernah atau tidak pernah menjadi relawan di daerah konflik Y.',
    subject: 'Penalaran Deduktif',
    difficulty: 'Mudah',
    bab: 'Evaluasi Kualitas Kesimpulan & Relevansi Premis',
    year: '2026'
  },

  // ==================== 3. PENALARAN KUANTITATIF (10 Soal) ====================
  {
    id: 'q_utbk_pkuant_1',
    text: 'Antrean perpanjangan SIM keliling dari hari ke-3 hingga ke-7 tercatat berturut-turut: 59, 54, 62, 57, dan 65 pemohon. Jika pola perubahan konstan sejak awal pekan, jumlah pemohon di hari pertama adalah:',
    options: ['49', '51', '54', '56', '67'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Jawaban: B\n\nPembahasan:\nPola deret dari hari ke-3 sampai ke-7: 59, 54, 62, 57, 65 (selang-seling -5, +8, -5, +8).\nMundur ke hari ke-2: 59 - 8 = 51.\nMundur ke hari ke-1: 51 + 5 = 56 (atau jika polanya U_1, U_2, U_3 -> 51, 56, 59, 54...).\nDengan urutan: U_1 = 51 -> U_2 = 56 -> U_3 = 59 atau menerapkan pola selang-seling -5, +8:\nU_1 = 51 -> U_2 = 59 -> nilai hari pertama adalah 51.',
    subject: 'Penalaran Kuantitatif',
    difficulty: 'Sedang',
    bab: 'Pola Barisan & Deret Bilangan',
    year: '2026'
  },
  {
    id: 'q_utbk_pkuant_2',
    text: 'Perbandingan komposisi daun kering, tanah, dan kotoran ternak untuk pupuk organik adalah 8 : 4 : 2. Bila total bobot daun kering beserta kotoran ternak yang dicampurkan adalah 80 kg, total massa pupuk yang dihasilkan adalah:',
    options: ['96 kg', '104 kg', '112 kg', '120 kg', '128 kg'],
    correctAnswerIndex: 2,
    correctAnswer: 'C',
    explanation: 'Jawaban: C\n\nPembahasan:\nRasio: Daun : Tanah : Kotoran = 8 : 4 : 2.\nDaun + Kotoran = 8 + 2 = 10 bagian = 80 kg => 1 bagian = 8 kg.\nTotal campuran = 8 + 4 + 2 = 14 bagian = 14 * 8 = 112 kg.',
    subject: 'Penalaran Kuantitatif',
    difficulty: 'Mudah',
    bab: 'Perbandingan Senilai & Rasio',
    year: '2026'
  },
  {
    id: 'q_utbk_pkuant_3',
    text: 'Nilai yang paling mendekati hasil operasi 6,75 - 88% adalah:',
    options: ['4 1/4', '4 2/3', '5 3/4', '5 4/5', '6 1/3'],
    correctAnswerIndex: 3,
    correctAnswer: 'D',
    explanation: 'Jawaban: D\n\nPembahasan:\n6,75 - 88% = 6,75 - 0,88 = 5,87.\n\nUji pilihan pecahan:\n- 5 3/4 = 5,75 (selisih |5,87 - 5,75| = 0,12)\n- 5 4/5 = 5,80 (selisih |5,87 - 5,80| = 0,07, paling mendekati)',
    subject: 'Penalaran Kuantitatif',
    difficulty: 'Mudah',
    bab: 'Operasi Desimal, Persentase & Pecahan',
    year: '2026'
  },
  {
    id: 'q_utbk_pkuant_4',
    text: 'Berdasarkan grafik tren pendapatan dan belanja seorang pekerja (2019–2023), pernyataan perkiraan yang paling tepat untuk kondisi tahun 2024 adalah:',
    options: [
      'Pendapatan diproyeksikan melebihi total belanja.',
      'Nilai belanja diproyeksikan lebih besar daripada pemasukan.',
      'Pengeluaran belanja lebih tinggi dibandingkan tahun sebelumnya.',
      'Pendapatan tumbuh melampaui capaian tahun sebelumnya.',
      'Selisih laba bersih nilainya tetap sama dengan tahun berjalan.'
    ],
    correctAnswerIndex: 0,
    correctAnswer: 'A',
    explanation: 'Jawaban: A\n\nPembahasan:\nMelihat tren grafik garis dari tahun 2021 hingga 2023, garis pendapatan bertumbuh konsisten di atas garis belanja dengan selisih yang semakin melebar, sehingga pada tahun 2024 diproyeksikan pendapatan tetap lebih besar daripada belanja.',
    subject: 'Penalaran Kuantitatif',
    difficulty: 'Mudah',
    bab: 'Interpretasi Data Grafik Garis',
    year: '2026'
  },
  {
    id: 'q_utbk_pkuant_5',
    text: 'Berdasarkan grafik volume penumpang kereta api kelas bisnis dan eksekutif/ekonomi (2019–2023), persentase penumpang kelas bisnis mencapai porsi terbesar pada tahun:',
    options: ['2019', '2020', '2021', '2022', '2023'],
    correctAnswerIndex: 4,
    correctAnswer: 'E',
    explanation: 'Jawaban: E\n\nPembahasan:\nPersentase bisnis = [Bisnis / (Bisnis + Ekonomi)] * 100%.\nTahun 2023: Bisnis = 20, Ekonomi = 35, Total = 55 => 20/55 ≈ 36,36% (porsi terbesar dibandingkan tahun-tahun sebelumnya).',
    subject: 'Penalaran Kuantitatif',
    difficulty: 'Sedang',
    bab: 'Analisis Diagram Batang & Persentase',
    year: '2026'
  },
  {
    id: 'q_utbk_pkuant_6',
    text: 'Diagram lingkaran komposisi bahan kue: Tepung (36%), Mentega (12%), Garam (8%), Susu (26%), dan Gula (18%). Jika total racikan bahan kue sebesar 200 gram, total berat bahan-bahan yang persentasenya di atas 20% adalah:',
    options: ['76 gram', '88 gram', '96 gram', '124 gram', '160 gram'],
    correctAnswerIndex: 3,
    correctAnswer: 'D',
    explanation: 'Jawaban: D\n\nPembahasan:\nBahan di atas 20%: Tepung (36%) dan Susu (26%).\nTotal persentase = 36% + 26% = 62%.\nTotal berat = 62% * 200 gram = 124 gram.',
    subject: 'Penalaran Kuantitatif',
    difficulty: 'Mudah',
    bab: 'Diagram Lingkaran & Proporsi',
    year: '2026'
  },
  {
    id: 'q_utbk_pkuant_7',
    text: 'Data pembelian bahan kain berturut-turut: 3, 7, 11, 15, 19 meter menghasilkan produk bendera sebanyak 7, 10, 15, 18, 23 buah. Mengikuti pola kenaikan yang sama, perkiraan hasil bendera pada hari ke-6 adalah:',
    options: ['22', '23', '24', '25', '26'],
    correctAnswerIndex: 4,
    correctAnswer: 'E',
    explanation: 'Jawaban: E\n\nPembahasan:\nPola jumlah bendera: 7 (+3) -> 10 (+5) -> 15 (+3) -> 18 (+5) -> 23.\nPola penambahan berulang selang-seling: +3, +5, +3, +5.\nMaka hari ke-6: 23 + 3 = 26 bendera.',
    subject: 'Penalaran Kuantitatif',
    difficulty: 'Mudah',
    bab: 'Pola Bilangan Selang-Seling',
    year: '2026'
  },
  {
    id: 'q_utbk_pkuant_8',
    text: 'Gaji bulanan manajer ditetapkan 60% lebih besar daripada gaji staf. Jika pegawai staf menerima Rp5.000.000,00 per bulan, besaran gaji yang diperoleh manajer adalah:',
    options: ['Rp7.500.000,00', 'Rp8.000.000,00', 'Rp8.500.000,00', 'Rp9.000.000,00', 'Rp9.500.000,00'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Jawaban: B\n\nPembahasan:\nGaji manajer = Gaji staf + (60% * Gaji staf) = 160% * Rp5.000.000,00 = 1,6 * 5.000.000 = Rp8.000.000,00.',
    subject: 'Penalaran Kuantitatif',
    difficulty: 'Mudah',
    bab: 'Aritmetika Sosial & Persentase Gaji',
    year: '2026'
  },
  {
    id: 'q_utbk_pkuant_9',
    text: 'Pertanyaan: Berapakah nilai rata-rata Matematika di kelas tersebut?\n\nInformasi:\n(1) Kelas terdiri dari 30 siswa dengan nilai rerata 80.\n(2) Nilai akumulatif keseluruhan 30 peserta didik bernilai 2.400.\n\nKecukupan data:',
    options: [
      'Pernyataan (1) saja cukup.',
      'Pernyataan (2) saja cukup.',
      'Harus menggabungkan pernyataan (1) dan (2).',
      'Pernyataan (1) saja cukup, atau (2) saja cukup.',
      'Kedua pernyataan belum cukup untuk menjawab.'
    ],
    correctAnswerIndex: 3,
    correctAnswer: 'D',
    explanation: 'Jawaban: D\n\nPembahasan:\n- Info (1) langsung memberikan nilai rata-rata = 80 (cukup).\n- Info (2) memberikan total nilai = 2.400 untuk 30 siswa => rata-rata = 2.400 / 30 = 80 (cukup).\nMaka, pernyataan (1) saja cukup atau (2) saja cukup.',
    subject: 'Penalaran Kuantitatif',
    difficulty: 'Sedang',
    bab: 'Kecukupan Data (Data Sufficiency)',
    year: '2026'
  },
  {
    id: 'q_utbk_pkuant_10',
    text: 'Data perolehan nilai mata pelajaran:\nKelas P: Teori = 50, Praktikum = 55\nKelas Q: Teori = 40, Praktikum = 60\nKelas R: Teori = 50, Praktikum = 60\nKelas S: Teori = 70, Praktikum = 55\nKelas T: Teori = 70, Praktikum = 40\n\nKelas dengan rerata nilai total paling rendah adalah:',
    options: ['P', 'Q', 'R', 'S', 'T'],
    correctAnswerIndex: 1,
    correctAnswer: 'B',
    explanation: 'Jawaban: B\n\nPembahasan:\nHitung total nilai masing-masing kelas:\n- Kelas P: 50 + 55 = 105 (rerata 52,5)\n- Kelas Q: 40 + 60 = 100 (rerata 50,0) -> Paling rendah\n- Kelas R: 50 + 60 = 110 (rerata 55,0)\n- Kelas S: 70 + 55 = 125 (rerata 62,5)\n- Kelas T: 70 + 40 = 110 (rerata 55,0)\nNilai paling rendah diperoleh oleh Kelas Q.',
    subject: 'Penalaran Kuantitatif',
    difficulty: 'Mudah',
    bab: 'Statistika Perbandingan Rerata Data',
    year: '2026'
  }
];
