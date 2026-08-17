export interface GeografiStatement {
  id: string;
  text: string;
  correct: boolean; // true for Benar, false for Salah
}

export interface GeografiOption {
  id: string;
  text: string;
  correct?: boolean;
}

export interface GeografiQuestion {
  id: number;
  number: number;
  subject: string;
  topic: string;
  type: 'multiple' | 'checkboxes' | 'tepat-table';
  stimulus?: string;
  text: string;
  options?: GeografiOption[];
  statements?: GeografiStatement[];
  correctAnswer?: string[]; // for checkboxes
  officialKeyText: string;
  discussion: string;
}

export const geografiTryoutData: GeografiQuestion[] = [
  {
    id: 1,
    number: 1,
    subject: 'Geografi',
    topic: 'Metodologi Penelitian Geografi & Fenomena Pesisir',
    type: 'checkboxes',
    stimulus: 'Analisis citra satelit resolusi tinggi menunjukkan wilayah pesisir utara Jawa mengalami peningkatan frekuensi dan luas genangan banjir pasang air laut (rob) dalam lima tahun terakhir. Genangan ini mengikis garis pantai dan merendam fasilitas umum serta area pertambakan produktif masyarakat setempat.',
    text: 'Rumusan masalah penelitian yang tepat untuk menindaklanjuti fenomena pada citra satelit tersebut adalah... (Pilihan ganda kompleks / centang opsi yang sesuai)',
    options: [
      { id: 'opt1', text: 'Bagaimana pengaruh bencana terhadap perekonomian penduduk?', correct: true },
      { id: 'opt2', text: 'Apa saja jenis-jenis bencana alam yang berdampak luas terhadap masyarakat?' },
      { id: 'opt3', text: 'Bagaimana hubungan antara pasang air laut dengan topografi wilayah?', correct: true },
      { id: 'opt4', text: 'Mengapa siswa perlu mengetahui pentingnya menjaga lingkungan secara berkelanjutan?' },
      { id: 'opt5', text: 'Bagaimana bentuk mitigasi bencana beserta contohnya yang konkret di sekolah?' }
    ],
    correctAnswer: ['opt1', 'opt3'],
    officialKeyText: 'Bagaimana pengaruh bencana terhadap perekonomian penduduk? & Bagaimana hubungan antara pasang air laut dengan topografi wilayah?',
    discussion: `**Kunci Jawaban:**
- **Opsi 1:** Bagaimana pengaruh bencana terhadap perekonomian penduduk?
- **Opsi 3:** Bagaimana hubungan antara pasang air laut dengan topografi wilayah?

**Analisis Geografi & Pembahasan Lengkap:**
- Pendekatan geografi selalu memadukan **aspek fisik (lingkungan/keruangan)** dan **aspek sosial (antroposfer)**.
- **Opsi 3** meneliti aspek fisik geomorfologi pesisir, yaitu bagaimana elevasi ketinggian dan kemiringan lereng pantai memengaruhi sebaran luas genangan banjir pasang (rob).
- **Opsi 1** meneliti aspek sosio-ekonomi penduduk pesisir yang terganggu akibat rob (seperti hilangnya produktivitas tambak udang/bandeng, kerusakan pemukiman, dan gangguan jalur logistik).
- Pilihan lainnya (Opsi 2, 4, 5) bersifat terlalu umum/normatif, edukasi formal di sekolah, atau tidak fokus pada pemecahan masalah spasial berbasis citra satelit di wilayah pesisir tersebut.`
  },
  {
    id: 2,
    number: 2,
    subject: 'Geografi',
    topic: 'Geomorfologi Danau Bandung Purba & Antroposfer',
    type: 'tepat-table',
    stimulus: 'Cekungan Bandung pada masa lampau merupakan danau raksasa (Danau Bandung Purba) yang terbentuk akibat letusan dahsyat Gunung Sunda Purba yang membendung aliran purba Citarum. Setelah proses pengeringan alami ribuan tahun kemudian melalui jebolnya dinding barat danau, endapan danau tersebut menyisakan dataran aluvial subur yang kemudian menjadi pusat hunian kelompok manusia prasejarah.',
    text: 'Tentukan apakah pernyataan terkait fenomena Bandung Purba berikut Benar atau Salah:',
    statements: [
      {
        id: 'stmt1',
        text: 'Data menunjukkan bahwa Bandung pernah berada di bawah permukaan air.',
        correct: true
      },
      {
        id: 'stmt2',
        text: 'Manusia mulai menempati kawasan Danau Bandung Purba setelah mengering.',
        correct: true
      },
      {
        id: 'stmt3',
        text: 'Manusia mulai mengembangkan pertanian di utara danau.',
        correct: false
      }
    ],
    officialKeyText: 'Pernyataan 1: Benar | Pernyataan 2: Benar | Pernyataan 3: Salah',
    discussion: `**Kunci Jawaban:**
1. **Pernyataan 1 (Benar):** Cekungan Bandung terbentuk saat lahar dan material vulkanik Gunung Sunda Purba (± 125.000 SM) membendung aliran Sungai Citarum Purba di Padalarang, sehingga air tertampung dan membentuk danau raksasa sedalam 20–30 meter di atas rata-rata permukaan tanah sekarang.
2. **Pernyataan 2 (Benar):** Sekitar 16.000 SM, danau purba mulai mengering karena airnya menjebol dinding pembendung alami di barat (kawasan Curug Cukangrahong/Rajamandala). Dataran aluvial kering yang subur tersebut kemudian baru dihuni oleh kelompok manusia prasejarah (sebagaimana ditemukan di situs Gua Pawon).
3. **Pernyataan 3 (Salah):** Teks stimulus dan bukti geologis tidak menyatakan bahwa peradaban pertanian pertama kali dikembangkan di bagian utara danau, melainkan berfokus pada proses geomorfologis surutnya danau dan persebaran hunian gua di sekitarnya.`
  },
  {
    id: 3,
    number: 3,
    subject: 'Geografi',
    topic: 'Dinamika Pesisir, Abrasi & Konservasi Hutan Mangrove',
    type: 'tepat-table',
    stimulus: 'Studi kasus degradasi lingkungan dan abrasi pantai di Desa Bedono, Kecamatan Sayung, Kabupaten Demak menunjukkan hilangnya ratusan hektar daratan pesisir akibat kombinasi penurunan muka tanah (land subsidence), kenaikan muka air laut, dan penebangan masif sabuk hijau mangrove untuk tambak.',
    text: 'Tentukan apakah fakta dan upaya pengelolaan pesisir berikut Benar atau Salah:',
    statements: [
      {
        id: 'stmt1',
        text: 'Kerusakan hutan mangrove di Desa Bedono disebabkan oleh faktor alami.',
        correct: false
      },
      {
        id: 'stmt2',
        text: 'Contoh pengelolaan berkelanjutan adalah ekowisata berbasis konservasi.',
        correct: true
      },
      {
        id: 'stmt3',
        text: 'Penanaman mangrove terbukti dapat mengurangi abrasi pantai.',
        correct: true
      }
    ],
    officialKeyText: 'Pernyataan 1: Salah | Pernyataan 2: Benar | Pernyataan 3: Benar',
    discussion: `**Kunci Jawaban:**
1. **Pernyataan 1 (Salah):** Kerusakan ekosistem mangrove di Desa Bedono utamanya dipicu oleh faktor antropogenik (aktivitas manusia), yaitu konversi masif hutan mangrove menjadi tambak udang/ikan tanpa mempertahankan sempadan pantai (coastal green belt).
2. **Pernyataan 2 (Benar):** Pemanfaatan kawasan restorasi menjadi ekowisata mangrove berbasis edukasi lingkungan merupakan wujud pembangunan berkelanjutan (*sustainable development*) karena menghasilkan nilai ekonomi lokal tanpa merusak fungsi ekologis.
3. **Pernyataan 3 (Benar):** Sistem perakaran mangrove (*Rhizophora mucronata* dan *Avicennia*) yang rapat berfungsi efektif memecah energi gelombang laut, menjebak sedimen lumpur, dan menstabilkan garis pantai dari ancaman abrasi.`
  },
  {
    id: 4,
    number: 4,
    subject: 'Geografi',
    topic: 'Vulkanisme & Pemanfaatan Lahan Pertanian',
    type: 'tepat-table',
    stimulus: 'Aktivitas vulkanisme di Indonesia menghasilkan bentang alam vulkanik yang unik. Di lereng-lereng gunung api aktif, aktivitas pertanian hortikultura dan sayur-mayur berkembang sangat pesat meskipun berada dalam zona potensi erupsi.',
    text: 'Tentukan apakah pernyataan mengenai dampak erupsi dan kesuburan tanah berikut Benar atau Salah:',
    statements: [
      {
        id: 'stmt1',
        text: 'Abu vulkanik yang jatuh ke permukaan tanah akan memperkaya unsur hara seperti kalium dan fosfor yang bermanfaat bagi tanaman.',
        correct: true
      },
      {
        id: 'stmt2',
        text: 'Letusan gunung berapi selalu merusak seluruh lahan pertanian dan membuatnya tidak dapat digunakan selama puluhan tahun.',
        correct: false
      }
    ],
    officialKeyText: 'Pernyataan 1: Benar | Pernyataan 2: Salah',
    discussion: `**Kunci Jawaban:**
1. **Pernyataan 1 (Benar):** Abu dan piroklastik vulkanik mengandung mineral primer kaya unsur hara esensial makro dan mikro (seperti Fosfor, Kalium, Kalsium, Magnesium, dan Silika). Proses pelapukan abu menghasilkan tanah Andosol/Regosol yang sangat subur dan gembur bagi tanaman pangan maupun hortikultura.
2. **Pernyataan 2 (Salah):** Dampak destruktif letusan terhadap lahan pertanian umumnya bersifat temporer (sementara). Dalam kurun waktu beberapa bulan hingga 2–3 tahun pasca-erupsi, abu vulkanis mengalami pelapukan kimiawi yang cepat karena iklim tropis basah, sehingga lahan dapat segera digarap kembali dengan tingkat kesuburan yang berlipat ganda.`
  },
  {
    id: 5,
    number: 5,
    subject: 'Geografi',
    topic: 'Penginderaan Jauh & Mitigasi Kebencanaan Vulkanik',
    type: 'multiple',
    stimulus: 'Data penginderaan jauh multispektral dan radar satelit dapat merekam morfologi kawah aktif, suhu permukaan kubah lava, rekahan lereng, serta pola drainase lembah aliran lahar pada kompleks gunung api.',
    text: 'Produk analisis spasial yang dapat dihasilkan dari pengolahan citra satelit gunung api tersebut adalah...',
    options: [
      { id: 'a', text: 'Peta jenis vegetasi' },
      { id: 'b', text: 'Peta kawasan rawan bencana', correct: true },
      { id: 'c', text: 'Peta stratigrafi batuan' },
      { id: 'd', text: 'Peta oksigen terlarut' },
      { id: 'e', text: 'Peta penggunaan lahan' }
    ],
    officialKeyText: 'B. Peta kawasan rawan bencana',
    discussion: `**Kunci Jawaban:** B (Peta kawasan rawan bencana)

**Analisis Geografi & Pembahasan Lengkap:**
Citra penginderaan jauh yang memperlihatkan morfologi kawah aktif, pola rekahan lereng, dan lembah aliran lahar digunakan oleh vulkanolog dan Badan Geologi/PVMBG untuk menyusun zonasi bahaya vulkanik, yaitu **Peta Kawasan Rawan Bencana (KRB) I, II, dan III**. 

Peta ini menjadi instrumen spasial krusial dalam menentukan radius evakuasi saat status waspada/awas dinaikkan, jalur evakuasi penduduk, serta arahan tata ruang pemukiman yang aman.`
  },
  {
    id: 6,
    number: 6,
    subject: 'Geografi',
    topic: 'Dinamika Penduduk & Perkembangan Wilayah Megapolitan',
    type: 'multiple',
    stimulus: 'Kawasan megapolitan Jabodetabek mengalami pertumbuhan ekonomi dan konsentrasi aktivitas yang sangat tinggi. Namun, keterbatasan ruang di pusat kota (DKI Jakarta) memicu lonjakan harga lahan dan kemacetan lalu lintas, sehingga mendorong perluasan zona hunian ke daerah sekitar.',
    text: 'Bagaimana kecenderungan pola pergerakan populasi di wilayah megapolitan Jabodetabek di masa depan?',
    options: [
      { id: 'a', text: 'Urbanisasi akan menurun karena masyarakat mulai kembali ke desa akibat tekanan hidup di kota besar.' },
      { id: 'b', text: 'Penduduk akan bermigrasi secara merata di seluruh wilayah kota karena program industri padat modal.' },
      { id: 'c', text: 'Pergerakan penduduk cenderung terkonsentrasi di pusat kota karena akses pekerjaan dan layanan publik yang lebih baik.' },
      { id: 'd', text: 'Pergerakan penduduk akan membentuk pola peri-urbanisasi, yaitu menyebar ke wilayah pinggiran dan kota-kota satelit di luar Jabodetabek.', correct: true },
      { id: 'e', text: 'Dinamika penduduk hanya akan terjadi di kawasan industri besar karena fasilitas penunjangnya paling lengkap.' }
    ],
    officialKeyText: 'D. Pergerakan penduduk akan membentuk pola peri-urbanisasi, yaitu menyebar ke wilayah pinggiran dan kota-kota satelit di luar Jabodetabek.',
    discussion: `**Kunci Jawaban:** D (Pergerakan penduduk akan membentuk pola peri-urbanisasi, yaitu menyebar ke wilayah pinggiran dan kota-kota satelit di luar Jabodetabek.)

**Analisis Geografi & Pembahasan Lengkap:**
- Tingginya harga tanah dan kepadatan di inti kota menyebabkan fenomena *urban sprawl* atau **peri-urbanisasi**, di mana kelas pekerja memilih bermukim di wilayah pinggiran (Bodetabek dan sekitarnya) yang harga rumahnya lebih terjangkau.
- Hal ini membentuk kota-kota satelit baru yang didukung oleh moda transportasi massal komuter (KRL, LRT, MRT, dan jalan tol lingkar luar). Penduduk bergerak komuter (ulang-alik harian) antara pinggiran dan pusat kegiatan ekonomi.`
  },
  {
    id: 7,
    number: 7,
    subject: 'Geografi',
    topic: 'Bioma, Iklim Global & Pola Kehidupan Manusia Purba',
    type: 'tepat-table',
    stimulus: 'Kondisi iklim dan karakteristik bioma global sangat memengaruhi pola persebaran serta cara bertahan hidup masyarakat manusia di berbagai belahan bumi sejak zaman prasejarah (~1500 SM).',
    text: 'Tentukan apakah pernyataan hubungan kondisi alam dengan pola hidup manusia berikut Benar atau Salah:',
    statements: [
      {
        id: 'stmt1',
        text: 'Wilayah tropis telah mengembangkan pertanian menetap karena curah hujan tinggi.',
        correct: true
      },
      {
        id: 'stmt2',
        text: 'Wilayah lingkar kutub menjadi pusat kelompok berburu dan meramu.',
        correct: true
      },
      {
        id: 'stmt3',
        text: 'Kelompok masyarakat di lintang sedang cenderung berburu berdasarkan musim.',
        correct: false
      }
    ],
    officialKeyText: 'Pernyataan 1: Benar | Pernyataan 2: Benar | Pernyataan 3: Salah',
    discussion: `**Kunci Jawaban:**
1. **Pernyataan 1 (Benar):** Wilayah tropis basah menerima penyinaran matahari sepanjang tahun dan curah hujan tinggi yang stabil. Hal ini menjamin ketersediaan air dan tanah subur, sehingga memungkinkan peradaban mengembangkan tradisi pertanian menetap (*sedentary agriculture*) secara berkelanjutan.
2. **Pernyataan 2 (Benar):** Di bioma tundra/lingkar kutub dengan lapisan tanah beku abadi (*permafrost*) dan vegetasi sangat minim, aktivitas bercocok tanam mustahil dilakukan. Akibatnya, kelompok manusia murni bertahan hidup melalui pola berburu hewan kutub (anjing laut, paus, karibu) dan meramu.
3. **Pernyataan 3 (Salah):** Pada era 1500 SM, masyarakat di lintang sedang (subtropis) telah mengembangkan sistem pertanian musiman dan peternakan adaptif berdasarkan pergantian empat musim (misalnya menanam gandum di musim semi/panas dan menyimpan lumbung pangan di musim dingin), bukan sekadar kelompok berburu liar.`
  },
  {
    id: 8,
    number: 8,
    subject: 'Geografi',
    topic: 'Posisi Geografis Strategis & Mobilitas Wisatawan Internasional',
    type: 'checkboxes',
    stimulus: 'Indonesia terletak di antara dua benua (Asia dan Australia) serta dua samudra (Hindia dan Pasifik). Letak geografis strategis ini didukung oleh kekayaan bentang alam tropis, keanekaragaman hayati, dan warisan budaya yang menjadi daya tarik bagi mobilitas wisatawan mancanegara (wisman).',
    text: 'Manakah pernyataan yang tepat mengenai pola kunjungan wisatawan dan posisi strategis Indonesia? (Pilihan ganda kompleks / centang opsi yang sesuai)',
    options: [
      { id: 'opt1', text: 'Sebagian besar wisatawan asing ke Indonesia berasal dari kawasan ASEAN dan Asia Timur, mendukung konektivitas regional.', correct: true },
      { id: 'opt2', text: 'Meningkatnya kunjungan wisatawan dari Tiongkok mencerminkan perluasan pasar wisata Indonesia di luar ASEAN.' },
      { id: 'opt3', text: 'Jumlah wisatawan asing Indonesia lebih besar dari Thailand karena pengaruh posisi geografis Indonesia yang lebih strategis.' },
      { id: 'opt4', text: 'Lokasi Indonesia yang berada di jalur internasional memperbesar peluang akses wisatawan dari berbagai kawasan dunia.', correct: true },
      { id: 'opt5', text: 'Dominasi wisatawan dari Asia menunjukkan bahwa ASEAN belum menarik wisatawan dari kawasan Eropa secara signifikan.' }
    ],
    correctAnswer: ['opt1', 'opt4'],
    officialKeyText: 'Sebagian besar wisatawan asing ke Indonesia berasal dari kawasan ASEAN dan Asia Timur & Lokasi Indonesia yang berada di jalur internasional memperbesar peluang akses wisatawan dari berbagai kawasan dunia.',
    discussion: `**Kunci Jawaban:**
- **Opsi 1:** Sebagian besar wisatawan asing ke Indonesia berasal dari kawasan ASEAN dan Asia Timur, mendukung konektivitas regional.
- **Opsi 4:** Lokasi Indonesia yang berada di jalur internasional memperbesar peluang akses wisatawan dari berbagai kawasan dunia.

**Analisis Geografi & Pembahasan Lengkap:**
- **Hukum Gravitasi Spasial (Reilly / Ravenstein):** Interaksi antarwilayah berbanding lurus dengan massa dan berbanding terbalik dengan jarak. Karena jarak tempuh yang lebih dekat dan frekuensi penerbangan yang tinggi, kawasan ASEAN (seperti Malaysia, Singapura) dan Asia Timur (Tiongkok, Jepang, Korea Selatan) secara empiris menjadi kontributor wisman terbesar ke Indonesia.
- **Posisi Silang Dunia:** Letak Indonesia di jalur perlintasan maritim dan koridor udara internasional memfasilitasi aksesibilitas bagi pelancong mancanegara dari berbagai benua (Australia, Eropa, Amerika, dan Asia).
- Pernyataan lainnya tidak tepat secara data statistik pariwisata regional ASEAN.`
  },
  {
    id: 9,
    number: 9,
    subject: 'Geografi',
    topic: 'Konsep Esensial Geografi & Fenomena Banjir Perkotaan',
    type: 'multiple',
    stimulus: 'Kota Bekasi kerap mengalami banjir bandang dan genangan air saat musim hujan. Analisis lapangan menunjukkan bahwa banjir terjadi akibat kombinasi curah hujan berintensitas tinggi, penyempitan sempadan sungai oleh bangunan liar, alih fungsi daerah resapan air menjadi kawasan perumahan, serta saluran drainase tersumbat timbunan sampah.',
    text: 'Konsep geografi yang paling tepat untuk mengkaji penyebab fenomena banjir tersebut adalah...',
    options: [
      { id: 'a', text: 'Interaksi, interdependensi, dan diferensiasi' },
      { id: 'b', text: 'Diferensiasi area, lokasi dan interaksi' },
      { id: 'c', text: 'Keterkaitan antara faktor fisik dan manusia', correct: true },
      { id: 'd', text: 'Aglomerasi, interaksi, dan lokasi bencana' },
      { id: 'e', text: 'Jarak, lokasi, dan keterkaitan lingkungan' }
    ],
    officialKeyText: 'C. Keterkaitan antara faktor fisik dan manusia',
    discussion: `**Kunci Jawaban:** C (Keterkaitan antara faktor fisik dan manusia)

**Analisis Geografi & Pembahasan Lengkap:**
Fenomena banjir di perkotaan paling tepat dikaji menggunakan konsep **Keterkaitan Keruangan / Interelasi (Man-Environment Interaction)**:
- **Faktor Fisik:** Curah hujan ekstrem musiman, kemiringan lereng yang landai, dan pasang air laut.
- **Faktor Manusia (Antroposfer):** Alih fungsi lahan resapan air menjadi beton pemukiman, buang sampah sembarangan yang menyumbat gorong-gorong, serta lemahnya penegakan tata ruang sempadan sungai.

Terjadinya bencana banjir merupakan resultan dari hubungan timbal balik negatif antara kondisi alam fisik dan perilaku manusia.`
  },
  {
    id: 10,
    number: 10,
    subject: 'Geografi',
    topic: 'Sistem Informasi Geografis (SIG) & Aplikasi Navigasi Digital',
    type: 'multiple',
    stimulus: 'Masyarakat modern sangat bergantung pada aplikasi navigasi berbasis peta digital (seperti Google Maps atau Waze) untuk memilih rute perjalanan tercepat, memantau titik kemacetan secara real-time, dan memperkirakan waktu tempuh (ETA).',
    text: 'Peran teknologi geospasial (Sistem Informasi Geografis / GIS) yang paling dominan dalam aplikasi navigasi tersebut adalah...',
    options: [
      { id: 'a', text: 'Remote sensing untuk mendeteksi suhu tubuh pengguna.' },
      { id: 'b', text: 'GIS menampilkan dan mengelola data lokasi serta rute optimal.', correct: true },
      { id: 'c', text: 'Peta kontur untuk menghindari wilayah berbukit.' },
      { id: 'd', text: 'Sistem manual berbasis input teks dari pengguna.' },
      { id: 'e', text: 'Sensor cahaya untuk mendeteksi kepadatan lalu lintas.' }
    ],
    officialKeyText: 'B. GIS menampilkan dan mengelola data lokasi serta rute optimal.',
    discussion: `**Kunci Jawaban:** B (GIS menampilkan dan mengelola data lokasi serta rute optimal.)

**Analisis Geografi & Pembahasan Lengkap:**
Peran sentral *Geographic Information System* (GIS/SIG) dalam aplikasi navigasi modern terletak pada fungsi **Analisis Jaringan Spasial (*Network Analysis*) dan Manajemen Basis Data Geospasial**:
1. GIS memetakan koordinat lintang-bujur (*geocoding*) posisi pengguna secara presisi.
2. Memproses data atribut (kecepatan rata-rata kendaraan, lebar jalan, arah satu arah/dua arah, dan laporan insiden).
3. Mengaplikasikan algoritma jalur terpendek (*shortest path algorithm / Dijkstra*) untuk menyajikan rute tercepat (*optimal path finding*) dan navigasi belokan demi belokan (*turn-by-turn navigation*).`
  }
];
