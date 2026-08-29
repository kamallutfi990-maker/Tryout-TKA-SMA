import { UtbkQuestion } from '../types';

export const deduktifTryoutData: UtbkQuestion[] = [
  {
    id: 1,
    text: 'Sebagian penduduk daerah XY membuat bank sampah serta memakai produk olahan ulang dalam keseharian. Peneliti berpendapat hal itu efektif menyelesaikan persoalan limbah di wilayah tersebut.\n\nDasar argumen peneliti yang paling mungkin:',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Konsep daur ulang berkelanjutan diterapkan secara merata di kawasan XY.' },
      { id: 'B', text: 'Manajemen sampah butuh subsidi penuh dari pemerintah.' },
      { id: 'C', text: 'Pengelolaan sampah terlaksana dengan adanya keterlibatan aktif warga.', correct: true },
      { id: 'D', text: 'Warga menyukai pemandangan kota tanpa sampah berserakan.' },
      { id: 'E', text: 'Pengolahan limbah bergantung pada variasi jenis sampahnya.' }
    ],
    correctAnswer: 'C',
    explanation: 'Jawaban: C\n\nPembahasan: Peneliti berargumen bahwa pembuatan bank sampah dan penggunaan daur ulang oleh warga efektif mengatasi sampah, yang didasari oleh adanya partisipasi aktif masyarakat.',
    topic: 'Dasar Asumsi & Argumen Deduktif',
    difficulty: 'Mudah'
  },
  {
    id: 2,
    text: 'Profesor 1: Iklim niaga di Kota A lebih kondusif dibandingkan Kota B.\nProfesor 2: Kota B tidak mengutamakan sektor perniagaan sebagai penggerak utama.\nFakta: Kota A dan Kota B sedang bersaing ketat menjadi pusat perniagaan nasional.\n\nKesesuaian fakta:',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Memperkuat opini Profesor 1.' },
      { id: 'B', text: 'Memperlemah opini Profesor 1.' },
      { id: 'C', text: 'Memperkuat pandangan Profesor 2.' },
      { id: 'D', text: 'Memperlemah pandangan Profesor 2.', correct: true },
      { id: 'E', text: 'Tidak berhubungan dengan argumen kedua profesor.' }
    ],
    correctAnswer: 'D',
    explanation: 'Jawaban: D\n\nPembahasan: Profesor 2 menyatakan Kota B tidak memprioritaskan perdagangan. Namun fakta menyatakan Kota B sedang bersaing menjadi pusat bisnis/perdagangan nasional, yang secara langsung memperlemah atau membantah pernyataan Profesor 2.',
    topic: 'Memperlemah / Memperkuat Pandangan',
    difficulty: 'Sedang'
  },
  {
    id: 3,
    text: 'Mendaki gunung dapat melatih stamina serta menumbuhkan kecintaan pada alam. Namun, mendaki di musim penghujan berisiko memicu penurunan suhu tubuh secara ekstrem (hipotermia) yang membahayakan jiwa.\n\nPernyataan yang pasti benar:',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Gangguan kesehatan tertentu timbul akibat mendaki pada musim hujan.', correct: true },
      { id: 'B', text: 'Suhu tubuh semua pendaki dipastikan anjlok saat mendaki gunung.' },
      { id: 'C', text: 'Orang yang rentan dingin dilarang mendaki gunung.' },
      { id: 'D', text: 'Pendaki pemula dianjurkan mendaki di tengah curah hujan lebat.' },
      { id: 'E', text: 'Aktivitas mendaki gunung rutin dijalani oleh peminat olahraga luar ruang.' }
    ],
    correctAnswer: 'A',
    explanation: 'Jawaban: A\n\nPembahasan: Teks menyebut mendaki saat musim hujan menimbulkan efek negatif seperti penurunan suhu tubuh drastis, yang membuktikan beberapa gangguan kesehatan timbul akibat naik gunung di musim hujan.',
    topic: 'Pernyataan Pasti Benar',
    difficulty: 'Mudah'
  },
  {
    id: 4,
    text: 'Warga Desa ABC memprediksi datangnya musim hujan berdasarkan pola kedatangan kawanan burung agar tepat menentukan waktu tanam. Jika tebakan burung tersebut akurat, warga mengadakan upacara makan bersama.\n\nPernyataan yang paling mungkin benar:',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Prediksi warga desa lebih presisi daripada ramalan badan meteorologi.' },
      { id: 'B', text: 'Ketiadaan burung menandakan musim kemarau panjang.' },
      { id: 'C', text: 'Warga desa tak mampu memprediksi cuaca tanpa kehadiran burung.' },
      { id: 'D', text: 'Ritual santap bersama ditiadakan saat hujan mulai turun.' },
      { id: 'E', text: 'Warga Desa ABC rutin menyelenggarakan acara makan bersama tiap tahun.', correct: true }
    ],
    correctAnswer: 'E',
    explanation: 'Jawaban: E\n\nPembahasan: Karena catatan prediksi pola burung selalu akurat setiap tahun dan upacara makan bersama selalu diadakan jika prediksinya tepat, maka warga rutin menyelenggarakan acara tersebut tiap tahun.',
    topic: 'Simpulan Paling Mungkin Benar',
    difficulty: 'Sedang'
  },
  {
    id: 5,
    text: 'Pelaku usaha X memilih membuka kafe berkonsep P (pasar luas dengan margin tipis) dibanding konsep Q (pasar terbatas dengan potensi untung besar) demi meminimalkan risiko kerugian besar.\n\nPernyataan yang paling memperkuat keputusan tersebut:',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Pengusaha menginginkan arus kas yang stabil meski laba per unitnya kecil.', correct: true },
      { id: 'B', text: 'Pengusaha ingin segera mendirikan cabang berukuran besar.' },
      { id: 'C', text: 'Target pasar konsep P hanya membidik kelas atas.' },
      { id: 'D', text: 'Konsep Q sangat gampang dijalankan bagi perintis usaha.' },
      { id: 'E', text: 'Pengusaha memiliki metode promosi khusus untuk mengenalkan kafenya.' }
    ],
    correctAnswer: 'A',
    explanation: 'Jawaban: A\n\nPembahasan: Konsep P memiliki pasar besar dengan laba kecil untuk menghindari risiko rugi besar. Opsi A memperkuat alasan ini karena fokus pada arus keuntungan yang stabil/rutin meskipun nilainya kecil.',
    topic: 'Memperkuat Keputusan Bisnis',
    difficulty: 'Mudah'
  },
  {
    id: 6,
    text: 'Beredar anggapan wangi parfum merek X cepat memudar dibanding merek Y di ruangan terbuka karena mutu bahannya.\n\nPernyataan yang paling memperlemah anggapan tersebut:',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Parfum X dibuat dari konsentrat minyak wangi alami berkualitas tinggi.', correct: true },
      { id: 'B', text: 'Parfum Y sudah melalui uji coba ketahanan berkali-kali sebelum dijual.' },
      { id: 'C', text: 'Artis ternama ikut mempromosikan produk parfum X.' },
      { id: 'D', text: 'Ulasan konsumen menunjukkan kepuasan terhadap daya tahan parfum Y.' },
      { id: 'E', text: 'Beraneka racikan zat aromatik dapat dipakai membuat formula wewangian.' }
    ],
    correctAnswer: 'A',
    explanation: 'Jawaban: A\n\nPembahasan: Anggapan menyatakan aroma parfum X cepat hilang karena kualitasnya. Fakta bahwa parfum X memakai bahan alami pilihan berkualitas tinggi menjadi argumen tandingan yang memperlemah anggapan tersebut.',
    topic: 'Memperlemah Anggapan / Argumen Tandingan',
    difficulty: 'Mudah'
  },
  {
    id: 7,
    text: 'Manajer Keuangan menyebutkan laba PT X melesat dalam setahun terakhir karena terjalinnya kerja sama baru dengan dinas pemerintah daerah.\n\nPernyataan yang memperkuat klaim manajer:',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Entitas bisnis pesaing tidak menjalin relasi dengan dinas daerah.' },
      { id: 'B', text: 'Perusahaan fokus mengadakan pelatihan efisiensi kerja karyawan.' },
      { id: 'C', text: 'Kemitraan dengan pemerintah daerah tidak meliputi seluruh unit bisnis.' },
      { id: 'D', text: 'Sejak dekade lalu perusahaan sudah berkolaborasi dengan pemerintah.' },
      { id: 'E', text: 'Total kontrak kerja sama dengan instansi pemerintah daerah mengalami peningkatan signifikan pada periode terakhir.', correct: true }
    ],
    correctAnswer: 'E',
    explanation: 'Jawaban: E\n\nPembahasan: Manajer mengklaim laba naik karena berhasil menambah kerja sama dengan pemerintah daerah. Bukti bahwa jumlah kontrak kerja sama meningkat signifikan akan memperkuat klaim manajer secara langsung.',
    topic: 'Memperkuat Klaim Berbasis Bukti',
    difficulty: 'Mudah'
  },
  {
    id: 8,
    text: 'Sejumlah klinik menyarankan asupan rimpang herbal untuk mendongkrak sistem imun layaknya program antivirus komputer yang memproteksi perangkat dari malware berbahaya.\n\nSimpulan yang paling mungkin benar:',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Imunitas hanya dapat dibangun melalui rimpang.' },
      { id: 'B', text: 'Mengonsumsi herbal rimpang dapat mencegah penurunan produktivitas masyarakat.' },
      { id: 'C', text: 'Antivirus yang tidak dipasang membuat kinerja masyarakat terganggu.' },
      { id: 'D', text: 'Tanaman rimpang dianalogikan seperti proteksi antivirus yang memperkuat pertahanan tubuh.', correct: true },
      { id: 'E', text: 'Ramainya pengunjung klinik ditentukan oleh intensitas promosi herbal rimpang.' }
    ],
    correctAnswer: 'D',
    explanation: 'Jawaban: D\n\nPembahasan: Teks membuat analogi eksplisit: tanaman rimpang yang meningkatkan imun dan melindungi tubuh diibaratkan seperti antivirus yang melindungi sistem komputer dari program jahat.',
    topic: 'Analogi Deduktif & Pemetaan Konsep',
    difficulty: 'Mudah'
  },
  {
    id: 9,
    text: 'Karena waktu latihan terbatas, seorang siswa harus memilih antara memperdalam kemampuan piano yang sudah dikuasainya agar percaya diri dalam lomba, atau mencoba gitar yang masih baru agar keahlian musiknya lebih bervariasi.\n\nKeputusan yang paling tepat:',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Jika memilih salah satu, ia tidak percaya diri saat lomba dan tidak memiliki variasi bermain musik.' },
      { id: 'B', text: 'Jika memilih piano, ia bisa tampil percaya diri di ajang lomba sekaligus memiliki keahlian musik yang beragam.' },
      { id: 'C', text: 'Mengambil keduanya membuat siswa tampil percaya diri dan menguasai berbagai alat musik.' },
      { id: 'D', text: 'Jika berlatih gitar, ia tidak merasa percaya diri dalam kompetisi dan tidak mendapat ragam kemampuan baru.' },
      { id: 'E', text: 'Memilih salah satu opsi membuatnya meraih salah satu keunggulan: percaya diri saat berkompetisi atau memiliki portofolio kemampuan musik yang lebih luas.', correct: true }
    ],
    correctAnswer: 'E',
    explanation: 'Jawaban: E\n\nPembahasan: Teks menyajikan pilihan disjungtif (salah satu): fokus piano (tampil percaya diri di kompetisi) ATAU latihan gitar (kemampuan musik lebih beragam). Memilih salah satu berarti memperoleh salah satu manfaat tersebut.',
    topic: 'Penalaran Disjungtif & Keputusan Logis',
    difficulty: 'Sedang'
  },
  {
    id: 10,
    text: 'Relawan zona konflik Y wajib mengikuti pelatihan khusus dan tidak boleh pulang selama masa penugasan. Diketahui salah satu mahasiswa Fakultas X sedang mengurus orang tuanya di panti jompo. Ditarik kesimpulan bahwa mahasiswa tersebut pernah diterjunkan ke area konflik Y.\n\nKualitas kesimpulan:',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Kesimpulan dipastikan keliru / salah.' },
      { id: 'B', text: 'Kesimpulan dapat dipastikan valid / benar.' },
      { id: 'C', text: 'Kesimpulan tersebut berpeluang benar.' },
      { id: 'D', text: 'Kesimpulan tersebut berpeluang salah.' },
      { id: 'E', text: 'Kesimpulan tidak relevan dengan premis yang dipaparkan.', correct: true }
    ],
    correctAnswer: 'E',
    explanation: 'Jawaban: E\n\nPembahasan: Informasi mengenai kegiatan merawat orang tua di panti jompo tidak memiliki kaitan logis untuk menyimpulkan apakah mahasiswa tersebut pernah atau tidak pernah menjadi relawan di daerah konflik Y.',
    topic: 'Evaluasi Kualitas Kesimpulan & Relevansi Premis',
    difficulty: 'Mudah'
  }
];
