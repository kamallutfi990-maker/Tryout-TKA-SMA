import { UtbkQuestion } from '../types';

export const ppuTryoutData: UtbkQuestion[] = [
  {
    id: 1,
    readingText: '**(1)** Ketahanan pangan nasional di era perubahan iklim global menghadapi tantangan yang kian kompleks. **(2)** Fenomena cuaca ekstrem seperti El Nino dan La Nina yang berkepanjangan memicu ketidakpastian siklus tanam komoditas pangan utama. **(3)** Oleh karena itu, diversifikasi pangan lokal berbasis sorgum, umbi-umbian, dan sagu perlu diintensifkan sebagai alternatif strategis. **(4)** Di samping itu, modernisasi irigasi presisi berbasis teknologi *Internet of Things* (IoT) mulai diujicobakan pada lahan sawah tadah hujan. **(5)** Kebijakan ini diharapkan mampu memitigasi risiko gagal panen akibat kekeringan parah.',
    text: 'Gagasan utama paragraf tersebut adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Fenomena El Nino dan La Nina yang mengancam siklus tanam komoditas beras di Indonesia.' },
      { id: 'B', text: 'Upaya penguatan ketahanan pangan nasional di tengah tantangan perubahan iklim melalui diversifikasi dan teknologi.', correct: true },
      { id: 'C', text: 'Keunggulan sorgum dan sagu sebagai pengganti beras.' },
      { id: 'D', text: 'Penerapan teknologi irigasi presisi berbasis IoT di lahan tadah hujan.' },
      { id: 'E', text: 'Kerugian ekonomi akibat kegagalan panen pada musim kemarau panjang.' }
    ],
    correctAnswer: 'B',
    explanation: 'Gagasan utama mencakup keseluruhan isi bacaan: kalimat (1) membuka problem ketahanan pangan di era perubahan iklim, lalu kalimat (2)-(5) menguraikan strategi solusinya (diversifikasi pangan dan adopsi IoT).',
    topic: 'Ide Pokok & Gagasan Utama',
    difficulty: 'Mudah'
  },
  {
    id: 2,
    readingText: '**(1)** Ketahanan pangan nasional di era perubahan iklim global menghadapi tantangan yang kian kompleks. **(2)** Fenomena cuaca ekstrem seperti El Nino dan La Nina yang berkepanjangan memicu ketidakpastian siklus tanam komoditas pangan utama. **(3)** Oleh karena itu, diversifikasi pangan lokal berbasis sorgum, umbi-umbian, dan sagu perlu diintensifkan sebagai alternatif strategis. **(4)** Di samping itu, modernisasi irigasi presisi berbasis teknologi *Internet of Things* (IoT) mulai diujicobakan pada lahan sawah tadah hujan. **(5)** Kebijakan ini diharapkan mampu memitigasi risiko gagal panen akibat kekeringan parah.',
    text: 'Makna kata **memitigasi** pada kalimat (5) paling mendekati arti...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Menghilangkan' },
      { id: 'B', text: 'Mengurangi atau meredakan dampak buruk', correct: true },
      { id: 'C', text: 'Menunda pelaksanaan' },
      { id: 'D', text: 'Menganalisis sebab musabab' },
      { id: 'E', text: 'Memperbaiki kerusakan fisik' }
    ],
    correctAnswer: 'B',
    explanation: 'Menurut KBBI, mitigasi berarti tindakan mengurangi dampak bencana atau risiko kerugian.',
    topic: 'Makna Kata / Istilah Kontekstual',
    difficulty: 'Mudah'
  },
  {
    id: 3,
    readingText: '**(1)** Ekosistem mangrove memiliki peran krusial dalam mitigasi perubahan iklim global karena kemampuannya menyerap dan menyimpan karbon biru (*blue carbon*). **(2)** Hutan bakau dapat mengikat karbon hingga lima kali lebih banyak dibandingkan hutan tropis daratan per satuan luas yang sama. **(3)** Sayangnya, deforestasi pesisir akibat konversi tambak ilegal masih mengancam kelestariannya. **(4)** Restorasi mangrove terpadu yang melibatkan masyarakat adat setempat menjadi kunci pemulihan bentang pesisir nasional.',
    text: 'Kalimat yang mengandung hubungan **sebab-akibat** secara implisit adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Kalimat (1)', correct: true },
      { id: 'B', text: 'Kalimat (2)' },
      { id: 'C', text: 'Kalimat (3)' },
      { id: 'D', text: 'Kalimat (4)' },
      { id: 'E', text: 'Tidak ada' }
    ],
    correctAnswer: 'A',
    explanation: 'Kalimat (1) memuat konjungsi kausalitas "karena" yang menghubungkan peran krusial (akibat) dengan kemampuan menyerap karbon biru (sebab).',
    topic: 'Hubungan Antarkalimat & Konjungsi',
    difficulty: 'Mudah'
  },
  {
    id: 4,
    text: 'Kata bentukan yang memiliki pola pembentukan makna sama dengan kata **memperlambat** adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'mempercantik', correct: true },
      { id: 'B', text: 'memperistri' },
      { id: 'C', text: 'memperalat' },
      { id: 'D', text: 'memperbaiki' },
      { id: 'E', text: 'memperbudak' }
    ],
    correctAnswer: 'A',
    explanation: 'Pola "memper- + adjektiva" (lambat -> memperlambat: menjadikan lebih lambat). Kata "mempercantik" dibentuk dari "memper- + cantik" bermakna menjadikan lebih cantik. Sedangkan memperalat/memperistri/memperbudak dibentuk dari nomina.',
    topic: 'Morfologi & Pembentukan Kata',
    difficulty: 'Sedang'
  },
  {
    id: 5,
    text: 'Penulisan kata serapan yang **sesuai dengan EYD Edisi V** adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Analisa, standarisasi, kwitansi' },
      { id: 'B', text: 'Analisis, standardisasi, kuitansi', correct: true },
      { id: 'C', text: 'Analisa, standarisasi, kuitansi' },
      { id: 'D', text: 'Analisis, standardisasi, kwitansi' },
      { id: 'E', text: 'Analisa, standardisasi, kuitansi' }
    ],
    correctAnswer: 'B',
    explanation: 'Bentuk baku sesuai KBBI & EYD V: analisis (bukan analisa), standardisasi (bukan standarisasi), dan kuitansi (bukan kwitansi).',
    topic: 'Ejaan & Kata Baku',
    difficulty: 'Mudah'
  },
  {
    id: 6,
    readingText: 'Kecerdasan Buatan Generatif (*Generative AI*) telah merevolusi lanskap industri kreatif kontemporer. Model bahasa besar mampu menghasilkan teks esai naratif, kode pemrograman komputer, dan komposisi visual artistik dalam hitungan detik.',
    text: 'Sinonim kata **kontemporer** pada kutipan di atas adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Tradisional' },
      { id: 'B', text: 'Masa kini / mutakhir', correct: true },
      { id: 'C', text: 'Kuno' },
      { id: 'D', text: 'Masa lampau' },
      { id: 'E', text: 'Abadi' }
    ],
    correctAnswer: 'B',
    explanation: 'Kontemporer bermakna pada waktu atau masa yang sama; masa kini; mutakhir.',
    topic: 'Diksi & Semantik',
    difficulty: 'Mudah'
  },
  {
    id: 7,
    text: 'Kalimat berikut yang merupakan **kalimat efektif** adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Bagi seluruh peserta ujian diharapkan memasuki ruangan tepat waktu.' },
      { id: 'B', text: 'Seluruh peserta ujian diharapkan memasuki ruangan tepat waktu.', correct: true },
      { id: 'C', text: 'Untuk pembangunan jembatan itu membutuhkan dana milyaran rupiah.' },
      { id: 'D', text: 'Rapat yang mana membahas kurikulum baru dihadiri oleh semua guru-guru.' },
      { id: 'E', text: 'Meskipun hujan lebat, tetapi pertandingan tetap dilanjutkan.' }
    ],
    correctAnswer: 'B',
    explanation: 'Pilihan B memiliki struktur subjek-predikat yang utuh tanpa preposisi perusak subjek ("bagi", "untuk") dan tidak pleonastis.',
    topic: 'Kalimat Efektif',
    difficulty: 'Sedang'
  },
  {
    id: 8,
    text: 'Antonim dari kata **otodidak** adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Mandiri' },
      { id: 'B', text: 'Berguru / terdidik secara formal', correct: true },
      { id: 'C', text: 'Mahir' },
      { id: 'D', text: 'Berbakat' },
      { id: 'E', text: 'Inovatif' }
    ],
    correctAnswer: 'B',
    explanation: 'Otodidak berarti belajar sendiri tanpa bantuan guru. Lawan katanya adalah belajar melalui guru/pembimbing/sekolah formal.',
    topic: 'Antonim & Relasi Makna',
    difficulty: 'Mudah'
  },
  {
    id: 9,
    text: 'Perhatikan kalimat berikut:\n"Pemerintah sedang *mengakselerasi* digitalisasi sistem pelayanan publik terpadu."\n\nKata *mengakselerasi* sepadan dengan kata...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Memperlambat' },
      { id: 'B', text: 'Mempercepat', correct: true },
      { id: 'C', text: 'Mengawasi' },
      { id: 'D', text: 'Menghentikan' },
      { id: 'E', text: 'Menyederhanakan' }
    ],
    correctAnswer: 'B',
    explanation: 'Akselerasi bermakna percepatan, sehingga mengakselerasi berarti mempercepat.',
    topic: 'Sinonim & Kosakata Formal',
    difficulty: 'Mudah'
  },
  {
    id: 10,
    text: 'Ungkapan **kambing hitam** dalam konteks sosial bermakna...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Orang yang paling berjasa' },
      { id: 'B', text: 'Orang yang dipersalahkan atas kesalahan pihak lain', correct: true },
      { id: 'C', text: 'Pemimpin yang otoriter' },
      { id: 'D', text: 'Orang yang tidak tahu aturan' },
      { id: 'E', text: 'Pekerja keras yang jujur' }
    ],
    correctAnswer: 'B',
    explanation: 'Kambing hitam adalah ungkapan kiasan untuk orang yang dijadikan tumpuan kesalahan atas perbuatan orang lain.',
    topic: 'Idiom & Ungkapan Kiasan',
    difficulty: 'Mudah'
  },
  {
    id: 11,
    text: 'Kalimat berikut yang mengandung kata berpolisemi adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Kepala sekolah sedang memimpin rapat dewan guru di kantor kepala.', correct: true },
      { id: 'B', text: 'Bank sentral terletak di tepi tepi sungai.' },
      { id: 'C', text: 'Apel pagi diikuti oleh siswa sambil memakan buah apel.' },
      { id: 'D', text: 'Ia membeli genting pada saat keadaan sedang genting.' },
      { id: 'E', text: 'Buku itu berisi penjelasan tentang tulang buku jari.' }
    ],
    correctAnswer: 'A',
    explanation: 'Kata "kepala" dalam kepala sekolah dan kepala kantor adalah contoh polisemi (makna berkaitan dari kata yang sama, yakni bagian atas/pemimpin). Sementara apel dan genting adalah homonim/homograf.',
    topic: 'Relasi Semantik (Polisemi vs Homonim)',
    difficulty: 'Sedang'
  },
  {
    id: 12,
    text: 'Penulisan gabungan kata yang **benar** adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Pertanggung jawaban' },
      { id: 'B', text: 'Pertanggungjawaban', correct: true },
      { id: 'C', text: 'Tanda-tangan' },
      { id: 'D', text: 'Kerjasama' },
      { id: 'E', text: 'Pemberitahuan yang salah' }
    ],
    correctAnswer: 'B',
    explanation: 'Gabungan kata yang mendapat konfiks (awalan dan akhiran sekaligus, per-...-an) ditulis serangkai: pertanggungjawaban.',
    topic: 'Ejaan & Morfofonemik',
    difficulty: 'Mudah'
  },
  {
    id: 13,
    text: 'Hubungan asosiatif kata berikut yang paling logis adalah:\n**Arsitek : Cetak Biru (*Blueprint*) = Penulis : ...**',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Pena' },
      { id: 'B', text: 'Kerangka Naskah (*Draft*)', correct: true },
      { id: 'C', text: 'Penerbit' },
      { id: 'D', text: 'Royalti' },
      { id: 'E', text: 'Pembaca' }
    ],
    correctAnswer: 'B',
    explanation: 'Arsitek merancang bangunan dengan cetak biru sebagai fondasi desain; Penulis merancang karya sastra/buku dengan kerangka naskah (*draft/outline*) sebagai rancangan dasar.',
    topic: 'Analogi Kata & Hubungan Konseptual',
    difficulty: 'Sedang'
  },
  {
    id: 14,
    text: 'Kalimat manakah yang memuat **majas personifikasi**?',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Hatinya sekeras batu karang di lautan.' },
      { id: 'B', text: 'Angin malam berbisik lembut menyampaikan kerinduan alam.', correct: true },
      { id: 'C', text: 'Ia menjadi bintang lapangan dalam pertandingan final.' },
      { id: 'D', text: 'Sudah sejuta kali aku mengingatkanmu tentang hal itu.' },
      { id: 'E', text: 'Wajahnya pucat pasi bagaikan rembulan tertutup awan.' }
    ],
    correctAnswer: 'B',
    explanation: 'Personifikasi melekatkan sifat manusia (berbisik lembut) pada benda mati/alam (angin malam).',
    topic: 'Gaya Bahasa & Majas',
    difficulty: 'Mudah'
  },
  {
    id: 15,
    text: 'Kata yang mengalami pergeseran makna peyorasi (makna menjadi lebih negatif/rendah) adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Wanita' },
      { id: 'B', text: 'Bunting (untuk manusia)', correct: true },
      { id: 'C', text: 'Putra-putri' },
      { id: 'D', text: 'Karyawan' },
      { id: 'E', text: 'Tunanetra' }
    ],
    correctAnswer: 'B',
    explanation: 'Kata "bunting" mengalami pergeseran makna peyoratif jika disematkan pada manusia dibanding kata "hamil / mengandung".',
    topic: 'Pergeseran Makna Kata',
    difficulty: 'Mudah'
  },
  {
    id: 16,
    text: 'Penggunaan tanda baca titik dua (:) yang tepat terdapat pada kalimat...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Ibu membeli bahan masakan: seperti cabai, tomat, dan bawang.' },
      { id: 'B', text: 'Fakultas itu memiliki tiga program studi: Informatika, Sistem Informasi, dan Sains Data.', correct: true },
      { id: 'C', text: 'Kita memerlukan: meja, kursi, dan lemari.' },
      { id: 'D', text: 'Ayah membaca koran: di teras rumah.' },
      { id: 'E', text: 'Peserta seminar terdiri atas: dosen, mahasiswa, dan praktisi.' }
    ],
    correctAnswer: 'B',
    explanation: 'Tanda titik dua dipakai pada akhir suatu pernyataan lengkap yang diikuti perincian atau penjelasan jika klausa sebelum titik dua merupakan kalimat berpola lengkap.',
    topic: 'Tanda Baca EYD V',
    difficulty: 'Sedang'
  },
  {
    id: 17,
    text: 'Kata **konservasi** berpadanan makna dengan...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Eksploitasi' },
      { id: 'B', text: 'Pelestarian dan perlindungan alam', correct: true },
      { id: 'C', text: 'Pembangunan infrastruktur' },
      { id: 'D', text: 'Penyelidikan mendalam' },
      { id: 'E', text: 'Penggalian tambang' }
    ],
    correctAnswer: 'B',
    explanation: 'Konservasi adalah pemeliharaan dan perlindungan sesuatu secara teratur untuk mencegah kerusakan dan kemusnahan (pelestarian).',
    topic: 'Kosakata Lingkungan',
    difficulty: 'Mudah'
  },
  {
    id: 18,
    text: 'Kalimat berikut yang mengandung kata serapan dari bahasa daerah (Jawa/Sunda) yang telah dibakukan dalam KBBI adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Mereka *mengunduh* berkas aplikasi pendaftaran secara daring.', correct: true },
      { id: 'B', text: 'Ia *download* film terbaru.' },
      { id: 'C', text: 'Proses *upload* dokumen berjalan lancar.' },
      { id: 'D', text: 'Data tersimpan di dalam *cloud*.' },
      { id: 'E', text: 'Aplikasi *software* itu sangat canggih.' }
    ],
    correctAnswer: 'A',
    explanation: 'Kata "unduh" diserap dari bahasa Jawa untuk memadankan istilah "download" dan telah baku dalam bahasa Indonesia.',
    topic: 'Serapan Bahasa Daerah & Pembakuan Istilah',
    difficulty: 'Mudah'
  },
  {
    id: 19,
    text: 'Inti frasa dari "pemberantasan korupsi secara transparan dan akuntabel" adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Pemberantasan', correct: true },
      { id: 'B', text: 'Korupsi' },
      { id: 'C', text: 'Transparan' },
      { id: 'D', text: 'Akuntabel' },
      { id: 'E', text: 'Secara' }
    ],
    correctAnswer: 'A',
    explanation: 'Unsur inti (D-M) dari frasa nominal tersebut adalah kata benda "pemberantasan", sedangkan kata lainnya berfungsi sebagai pewatas/penjelas.',
    topic: 'Struktur Frasa & Inti Frasa',
    difficulty: 'Sedang'
  },
  {
    id: 20,
    text: 'Peribahasa yang bermakna "orang yang merasa senang karena keinginannya tercapai berlipat ganda" adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Pucuk dicinta ulam tiba', correct: true },
      { id: 'B', text: 'Bagai air di daun talas' },
      { id: 'C', text: 'Tong kosong nyaring bunyinya' },
      { id: 'D', text: 'Air beriak tanda tak dalam' },
      { id: 'E', text: 'Besar pasak daripada tiang' }
    ],
    correctAnswer: 'A',
    explanation: 'Peribahasa "pucuk dicinta ulam tiba" bermakna mendapatkan sesuatu yang lebih dari apa yang diharapkan atau diinginkan.',
    topic: 'Peribahasa & Makna Kontekstual',
    difficulty: 'Mudah'
  }
];
