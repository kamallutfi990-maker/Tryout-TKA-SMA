import { UtbkQuestion } from '../types';

export const literasiIndoTryoutData: UtbkQuestion[] = [
  {
    id: 1,
    readingText: '**Teks 1 (untuk Soal No. 1-5)**\n\nKrisis keanekaragaman hayati laut kian memburuk akibat meningkatnya keasaman air laut (*ocean acidification*) yang dipicu oleh tingginya konsentrasi karbon dioksida di atmosfer. Terumbu karang, yang merupakan rumah bagi lebih dari 25% biota laut dunia, mengalami fenomena pemutihan massal (*coral bleaching*). Ketika suhu permukaan air laut meningkat 1-2 derajat Celsius di atas ambang batas normal secara berkepanjangan, alga simbiotik *Zooxanthellae* yang memberi warna dan nutrisi pada karang terlepas. Akibatnya, kerangka kapur karang menjadi rapuh dan rentan hancur diterjang gelombang badai.\n\nDampak keruntuhan ekosistem terumbu karang tidak hanya mengancam kelangsungan hidup spesies laut, tetapi juga langsung memukul sektor perikanan tangkap dan pariwisata bahari pesisir. Nelayan tradisional melaporkan penurunan hasil tangkapan ikan karang hingga 45% dalam satu dekade terakhir. Oleh sebab itu, pembentukan Kawasan Konservasi Perairan (KKP) terpadu dan restorasi terumbu karang buatan berbasis substrat ramah lingkungan mendesak untuk diimplementasikan.',
    text: 'Berdasarkan Teks 1, penyebab langsung terlepasnya alga *Zooxanthellae* dari jaringan karang adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Serangan badai gelombang laut yang terus-menerus' },
      { id: 'B', text: 'Kenaikan suhu permukaan air laut 1-2 derajat Celsius di atas ambang normal secara berkepanjangan', correct: true },
      { id: 'C', text: 'Penangkapan ikan berlebih oleh nelayan tradisional' },
      { id: 'D', text: 'Kurangnya substrat buatan ramah lingkungan di dasar laut' },
      { id: 'E', text: 'Pariwisata bahari yang tidak terkendali' }
    ],
    correctAnswer: 'B',
    explanation: 'Pada paragraf pertama dinyatakan: "Ketika suhu permukaan air laut meningkat 1-2 derajat Celsius di atas ambang batas normal secara berkepanjangan, alga simbiotik Zooxanthellae... terlepas."',
    topic: 'Pemahaman Eksplisit Teks Literasi',
    difficulty: 'Mudah'
  },
  {
    id: 2,
    readingText: '**Teks 1 (untuk Soal No. 1-5)**\n\nKrisis keanekaragaman hayati laut kian memburuk akibat meningkatnya keasaman air laut (*ocean acidification*) yang dipicu oleh tingginya konsentrasi karbon dioksida di atmosfer. Terumbu karang, yang merupakan rumah bagi lebih dari 25% biota laut dunia, mengalami fenomena pemutihan massal (*coral bleaching*). Ketika suhu permukaan air laut meningkat 1-2 derajat Celsius di atas ambang batas normal secara berkepanjangan, alga simbiotik *Zooxanthellae* yang memberi warna dan nutrisi pada karang terlepas. Akibatnya, kerangka kapur karang menjadi rapuh dan rentan hancur diterjang gelombang badai.\n\nDampak keruntuhan ekosistem terumbu karang tidak hanya mengancam kelangsungan hidup spesies laut, tetapi juga langsung memukul sektor perikanan tangkap dan pariwisata bahari pesisir. Nelayan tradisional melaporkan penurunan hasil tangkapan ikan karang hingga 45% dalam satu dekade terakhir. Oleh sebab itu, pembentukan Kawasan Konservasi Perairan (KKP) terpadu dan restorasi terumbu karang buatan berbasis substrat ramah lingkungan mendesak untuk diimplementasikan.',
    text: 'Tujuan utama penulis dalam menyampaikan Teks 1 adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Menjelaskan morfologi kerangka kapur terumbu karang tropis.' },
      { id: 'B', text: 'Menggambarkan ancaman pemutihan karang serta dampaknya bagi ekosistem dan ekonomi pesisir guna mendorong aksi konservasi.', correct: true },
      { id: 'C', text: 'Mengkritik nelayan tradisional yang menggunakan alat tangkap merusak.' },
      { id: 'D', text: 'Mempromosikan wisata selam di kawasan perairan konservasi laut.' },
      { id: 'E', text: 'Membandingkan efektivitas alga Zooxanthellae dengan alga jenis lain.' }
    ],
    correctAnswer: 'B',
    explanation: 'Penulis memaparkan fenomena pemutihan karang, konsekuensi ekologis dan sosioekonomi, serta urgensi restorasi dan kawasan konservasi perairan.',
    topic: 'Tujuan Penulis & Sudut Pandang',
    difficulty: 'Sedang'
  },
  {
    id: 3,
    readingText: '**Teks 1 (untuk Soal No. 1-5)**\n\nKrisis keanekaragaman hayati laut kian memburuk akibat meningkatnya keasaman air laut (*ocean acidification*) yang dipicu oleh tingginya konsentrasi karbon dioksida di atmosfer. Terumbu karang, yang merupakan rumah bagi lebih dari 25% biota laut dunia, mengalami fenomena pemutihan massal (*coral bleaching*). Ketika suhu permukaan air laut meningkat 1-2 derajat Celsius di atas ambang batas normal secara berkepanjangan, alga simbiotik *Zooxanthellae* yang memberi warna dan nutrisi pada karang terlepas. Akibatnya, kerangka kapur karang menjadi rapuh dan rentan hancur diterjang gelombang badai.\n\nDampak keruntuhan ekosistem terumbu karang tidak hanya mengancam kelangsungan hidup spesies laut, tetapi juga langsung memukul sektor perikanan tangkap dan pariwisata bahari pesisir. Nelayan tradisional melaporkan penurunan hasil tangkapan ikan karang hingga 45% dalam satu dekade terakhir. Oleh sebab itu, pembentukan Kawasan Konservasi Perairan (KKP) terpadu dan restorasi terumbu karang buatan berbasis substrat ramah lingkungan mendesak untuk diimplementasikan.',
    text: 'Tentukan kebenaran pernyataan-pernyataan berikut berdasarkan Teks 1:',
    type: 'true-false-table',
    statements: [
      { id: 's1', text: 'Terumbu karang menjadi habitat bagi lebih dari seperempat populasi biota laut dunia.', correct: true, trueLabel: 'Benar', falseLabel: 'Salah' },
      { id: 's2', text: 'Penurunan hasil tangkapan ikan karang oleh nelayan mencapai 45% dalam sepuluh tahun terakhir.', correct: true, trueLabel: 'Benar', falseLabel: 'Salah' },
      { id: 's3', text: 'Peningkatan konsentrasi oksigen di atmosfer merupakan pemicu utama keasaman air laut.', correct: false, trueLabel: 'Benar', falseLabel: 'Salah' }
    ],
    explanation: 'Pernyataan 1 dan 2 sesuai dengan teks (>25% biota laut, penurunan 45% nelayan). Pernyataan 3 salah karena penyebab keasaman laut adalah karbon dioksida ($CO_2$), bukan oksigen.',
    topic: 'Verifikasi Pernyataan Tabel Benar/Salah',
    difficulty: 'Sedang'
  },
  {
    id: 4,
    readingText: '**Teks 1 (untuk Soal No. 1-5)**\n\nKrisis keanekaragaman hayati laut kian memburuk akibat meningkatnya keasaman air laut (*ocean acidification*) yang dipicu oleh tingginya konsentrasi karbon dioksida di atmosfer. Terumbu karang, yang merupakan rumah bagi lebih dari 25% biota laut dunia, mengalami fenomena pemutihan massal (*coral bleaching*). Ketika suhu permukaan air laut meningkat 1-2 derajat Celsius di atas ambang batas normal secara berkepanjangan, alga simbiotik *Zooxanthellae* yang memberi warna dan nutrisi pada karang terlepas. Akibatnya, kerangka kapur karang menjadi rapuh dan rentan hancur diterjang gelombang badai.\n\nDampak keruntuhan ekosistem terumbu karang tidak hanya mengancam kelangsungan hidup spesies laut, tetapi juga langsung memukul sektor perikanan tangkap dan pariwisata bahari pesisir. Nelayan tradisional melaporkan penurunan hasil tangkapan ikan karang hingga 45% dalam satu dekade terakhir. Oleh sebab itu, pembentukan Kawasan Konservasi Perairan (KKP) terpadu dan restorasi terumbu karang buatan berbasis substrat ramah lingkungan mendesak untuk diimplementasikan.',
    text: 'Jika suhu air laut terus mengalami anomali kenaikan ekstrem tanpa ada upaya mitigasi emisi global, kemungkinan yang **paling logis terjadi** adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Produksi perikanan tangkap ikan karang akan semakin merosot tajam.', correct: true },
      { id: 'B', text: 'Alga Zooxanthellae akan beradaptasi secara instan tanpa memerlukan inang karang.' },
      { id: 'C', text: 'Sektor pariwisata bahari akan mencatat rekor kunjungan tertinggi.' },
      { id: 'D', text: 'Struktur kapur karang akan menjadi lebih padat dan tahan badai.' },
      { id: 'E', text: 'Keasaman air laut akan menurun secara otomatis.' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan kausalitas teks, kerusakan karang berbanding lurus dengan kemerosotan populasi ikan dan ekonomi nelayan.',
    topic: 'Inferensi & Prediksi Konsekuensi Teks',
    difficulty: 'Mudah'
  },
  {
    id: 5,
    readingText: '**Teks 1 (untuk Soal No. 1-5)**\n\nKrisis keanekaragaman hayati laut kian memburuk akibat meningkatnya keasaman air laut (*ocean acidification*) yang dipicu oleh tingginya konsentrasi karbon dioksida di atmosfer. Terumbu karang, yang merupakan rumah bagi lebih dari 25% biota laut dunia, mengalami fenomena pemutihan massal (*coral bleaching*). Ketika suhu permukaan air laut meningkat 1-2 derajat Celsius di atas ambang batas normal secara berkepanjangan, alga simbiotik *Zooxanthellae* yang memberi warna dan nutrisi pada karang terlepas. Akibatnya, kerangka kapur karang menjadi rapuh dan rentan hancur diterjang gelombang badai.\n\nDampak keruntuhan ekosistem terumbu karang tidak hanya mengancam kelangsungan hidup spesies laut, tetapi juga langsung memukul sektor perikanan tangkap dan pariwisata bahari pesisir. Nelayan tradisional melaporkan penurunan hasil tangkapan ikan karang hingga 45% dalam satu dekade terakhir. Oleh sebab itu, pembentukan Kawasan Konservasi Perairan (KKP) terpadu dan restorasi terumbu karang buatan berbasis substrat ramah lingkungan mendesak untuk diimplementasikan.',
    text: 'Pilihlah solusi yang diajukan oleh teks untuk menanggulangi kerusakan terumbu karang (pilihan dapat lebih dari satu):',
    type: 'multiple-complex',
    options: [
      { id: 'A', text: 'Pembentukan Kawasan Konservasi Perairan (KKP) terpadu.', correct: true },
      { id: 'B', text: 'Restorasi terumbu karang buatan berbasis substrat ramah lingkungan.', correct: true },
      { id: 'C', text: 'Melarang total seluruh aktivitas nelayan di seluruh perairan samudra.' }
    ],
    correctAnswer: ['A', 'B'],
    explanation: 'Teks secara eksplisit merekomendasikan: (1) Pembentukan KKP terpadu dan (2) Restorasi terumbu karang buatan dengan substrat ramah lingkungan.',
    topic: 'Pilihan Ganda Kompleks Rekomendasi Solusi',
    difficulty: 'Sedang'
  },
  {
    id: 6,
    readingText: '**Teks 2 (untuk Soal No. 6-10)**\n\nRevolusi kecerdasan buatan (AI) di sektor pelayanan kesehatan membuka lembaran baru dalam presisi diagnosis medis. Algoritma pembelajaran mendalam (*deep learning*) kini mampu memindai jutaan citra radiologi sinar-X dan MRI untuk mendeteksi sel kanker stadium awal dengan tingkat akurasi mencapai 94,8%, melampaui rata-rata kecepatan analisis dokter spesialis konvensional. Keunggulan ini berpotensi memangkas waktu tunggu hasil diagnosis dari beberapa minggu menjadi hitungan menit.\n\nKendati demikian, integrasi AI dalam dunia medis menyisakan tantangan etis dan yuridis yang signifikan. Isu akuntabilitas hukum atas potensi salah diagnosis (*misdiagnosis*) algoritmis dan privasi data rekam medis pasien menjadi perdebatan hangat. Kalangan medis menegaskan bahwa sistem AI tidak dirancang untuk menggantikan peran manusia secara absolut, melainkan berfungsi sebagai *co-pilot* atau asisten pendukung keputusan klinis (*clinical decision support system*). Keputusan akhir penanganan tindakan medis tetap berada di tangan dokter yang memegang sumpah profesi.',
    text: 'Fungsi utama AI dalam praktik diagnosis medis menurut kalangan dokter pada Teks 2 adalah sebagai...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Pengganti mutlak dokter spesialis di ruang operasi.' },
      { id: 'B', text: 'Asisten pendukung keputusan klinis (*clinical decision support*) yang membantu dokter.', correct: true },
      { id: 'C', text: 'Penanggung jawab utama secara hukum atas malapraktik.' },
      { id: 'D', text: 'Perekam data transaksi pembayaran rumah sakit.' },
      { id: 'E', text: 'Pengambil keputusan akhir rencana terapi pasien.' }
    ],
    correctAnswer: 'B',
    explanation: 'Paragraf 2 menyatakan bahwa AI bertindak sebagai co-pilot atau asisten pendukung keputusan klinis, sedangkan keputusan akhir tetap pada dokter.',
    topic: 'Pemahaman Konseptual Literasi Medis',
    difficulty: 'Mudah'
  },
  {
    id: 7,
    readingText: '**Teks 2 (untuk Soal No. 6-10)**\n\nRevolusi kecerdasan buatan (AI) di sektor pelayanan kesehatan membuka lembaran baru dalam presisi diagnosis medis. Algoritma pembelajaran mendalam (*deep learning*) kini mampu memindai jutaan citra radiologi sinar-X dan MRI untuk mendeteksi sel kanker stadium awal dengan tingkat akurasi mencapai 94,8%, melampaui rata-rata kecepatan analisis dokter spesialis konvensional. Keunggulan ini berpotensi memangkas waktu tunggu hasil diagnosis dari beberapa minggu menjadi hitungan menit.\n\nKendati demikian, integrasi AI dalam dunia medis menyisakan tantangan etis dan yuridis yang signifikan. Isu akuntabilitas hukum atas potensi salah diagnosis (*misdiagnosis*) algoritmis dan privasi data rekam medis pasien menjadi perdebatan hangat. Kalangan medis menegaskan bahwa sistem AI tidak dirancang untuk menggantikan peran manusia secara absolut, melainkan berfungsi sebagai *co-pilot* atau asisten pendukung keputusan klinis (*clinical decision support system*). Keputusan akhir penanganan tindakan medis tetap berada di tangan dokter yang memegang sumpah profesi.',
    text: 'Tantangan etis dan hukum yang dihadapi dalam pemanfaatan AI medis menurut Teks 2 meliputi...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Tingginya harga komputer di rumah sakit' },
      { id: 'B', text: 'Akuntabilitas hukum atas kemungkinan salah diagnosis dan jaminan kerahasiaan data rekam medis pasien', correct: true },
      { id: 'C', text: 'Kurangnya minat mahasiswa kedokteran untuk belajar' },
      { id: 'D', text: 'Ketiadaan jaringan internet di ruang radiologi' },
      { id: 'E', text: 'Penolakan pasien untuk menjalani pemeriksaan sinar-X' }
    ],
    correctAnswer: 'B',
    explanation: 'Paragraf 2 secara tegas menyebutkan "akuntabilitas hukum atas potensi salah diagnosis algoritmis dan privasi data rekam medis pasien" sebagai tantangan utama.',
    topic: 'Detail Spesifik & Isu Kritis Teks',
    difficulty: 'Mudah'
  },
  {
    id: 8,
    readingText: '**Teks 2 (untuk Soal No. 6-10)**\n\nRevolusi kecerdasan buatan (AI) di sektor pelayanan kesehatan membuka lembaran baru dalam presisi diagnosis medis. Algoritma pembelajaran mendalam (*deep learning*) kini mampu memindai jutaan citra radiologi sinar-X dan MRI untuk mendeteksi sel kanker stadium awal dengan tingkat akurasi mencapai 94,8%, melampaui rata-rata kecepatan analisis dokter spesialis konvensional. Keunggulan ini berpotensi memangkas waktu tunggu hasil diagnosis dari beberapa minggu menjadi hitungan menit.\n\nKendati demikian, integrasi AI dalam dunia medis menyisakan tantangan etis dan yuridis yang signifikan. Isu akuntabilitas hukum atas potensi salah diagnosis (*misdiagnosis*) algoritmis dan privasi data rekam medis pasien menjadi perdebatan hangat. Kalangan medis menegaskan bahwa sistem AI tidak dirancang untuk menggantikan peran manusia secara absolut, melainkan berfungsi sebagai *co-pilot* atau asisten pendukung keputusan klinis (*clinical decision support system*). Keputusan akhir penanganan tindakan medis tetap berada di tangan dokter yang memegang sumpah profesi.',
    text: 'Manakah kesimpulan yang **paling tepat** dari Teks 2?',
    type: 'multiple',
    options: [
      { id: 'A', text: 'AI medis sangat unggul dalam kecepatan dan akurasi analisis citra, namun penerapannya harus diimbangi etika medis dan regulasi hukum.', correct: true },
      { id: 'B', text: 'Semua dokter spesialis radiologi akan kehilangan pekerjaan dalam waktu dekat.' },
      { id: 'C', text: 'AI medis belum layak diuji coba karena memiliki tingkat kesalahan di atas 50%.' },
      { id: 'D', text: 'Sumpah profesi dokter tidak lagi relevan di era rumah sakit berbasis digital.' },
      { id: 'E', text: 'Rekam medis pasien tidak perlu dilindungi undang-undang kerahasiaan.' }
    ],
    correctAnswer: 'A',
    explanation: 'Kesimpulan komprehensif mencakup dua sisi yang diulas: potensi efisiensi diagnostik AI dan pentingnya batas etis serta regulasi perlindungan pasien.',
    topic: 'Kesimpulan Sintesis Teks',
    difficulty: 'Sedang'
  },
  {
    id: 9,
    readingText: '**Teks 2 (untuk Soal No. 6-10)**\n\nRevolusi kecerdasan buatan (AI) di sektor pelayanan kesehatan membuka lembaran baru dalam presisi diagnosis medis. Algoritma pembelajaran mendalam (*deep learning*) kini mampu memindai jutaan citra radiologi sinar-X dan MRI untuk mendeteksi sel kanker stadium awal dengan tingkat akurasi mencapai 94,8%, melampaui rata-rata kecepatan analisis dokter spesialis konvensional. Keunggulan ini berpotensi memangkas waktu tunggu hasil diagnosis dari beberapa minggu menjadi hitungan menit.\n\nKendati demikian, integrasi AI dalam dunia medis menyisakan tantangan etis dan yuridis yang signifikan. Isu akuntabilitas hukum atas potensi salah diagnosis (*misdiagnosis*) algoritmis dan privasi data rekam medis pasien menjadi perdebatan hangat. Kalangan medis menegaskan bahwa sistem AI tidak dirancang untuk menggantikan peran manusia secara absolut, melainkan berfungsi sebagai *co-pilot* atau asisten pendukung keputusan klinis (*clinical decision support system*). Keputusan akhir penanganan tindakan medis tetap berada di tangan dokter yang memegang sumpah profesi.',
    text: 'Tentukan validitas pernyataan berikut berdasarkan Teks 2:',
    type: 'true-false-table',
    statements: [
      { id: 's1', text: 'Tingkat akurasi deteksi kanker stadium awal oleh AI deep learning mencapai 94,8%.', correct: true, trueLabel: 'Benar', falseLabel: 'Salah' },
      { id: 's2', text: 'Waktu tunggu hasil diagnosis radiologi dapat dipersingkat dari beberapa minggu menjadi hitungan menit.', correct: true, trueLabel: 'Benar', falseLabel: 'Salah' },
      { id: 's3', text: 'AI secara hukum memiliki otoritas penuh untuk menandatangani surat tindakan operasi pasien.', correct: false, trueLabel: 'Benar', falseLabel: 'Salah' }
    ],
    explanation: 'Pernyataan 1 dan 2 akurat sesuai teks. Pernyataan 3 salah karena keputusan akhir tetap di tangan dokter.',
    topic: 'Tabel Verifikasi Informasi Medis',
    difficulty: 'Mudah'
  },
  {
    id: 10,
    text: 'Kata *rekam medis* dalam terminologi kesehatan merujuk pada...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Kuitansi pembayaran rawat inap' },
      { id: 'B', text: 'Dokumen berkas yang memuat catatan identitas, riwayat pemeriksaan, pengobatan, dan tindakan medis pasien', correct: true },
      { id: 'C', text: 'Rekaman video dokter saat mengoperasi pasien' },
      { id: 'D', text: 'Daftar menu makanan sehat pasien' },
      { id: 'E', text: 'Buku panduan pengoperasian alat medis' }
    ],
    correctAnswer: 'B',
    explanation: 'Rekam medis adalah berkas resmi yang berisi riwayat kesehatan lengkap pasien.',
    topic: 'Istilah Khusus Bidang Medis',
    difficulty: 'Mudah'
  },
  {
    id: 11,
    readingText: '**Teks 3 (untuk Soal No. 11-15)**\n\nLiterasi keuangan di kalangan Generasi Z menjadi sorotan utama di tengah maraknya kemudahan akses pinjaman daring (*fintech peer-to-peer lending*) dan skema pembayaran tunda (*buy now pay later* / BNPL). Survei Otoritas Jasa Keuangan (OJK) menunjukkan bahwa kendati inklusi keuangan generasi muda mencapai 85%, indeks literasi finansial mereka baru berkisar pada angka 49%. Kesenjangan ini mencerminkan fenomena di mana akses produk keuangan digital terbuka luas, namun pemahaman akan manajemen risiko utang, bunga berbunga, dan perencanaan dana darurat masih minim.\n\nPerilaku konsumtif impulsif yang dipicu oleh budaya FOMO (*Fear of Missing Out*) di media sosial kerap menjebak anak muda dalam lingkaran utang konsumtif. Tanpa pemahaman rasio utang terhadap pendapatan (*debt-to-income ratio*) yang sehat (maksimal 30% dari total penghasilan), generasi muda rentan mengalami gagal bayar yang berakibat pada catatan buruk riwayat kredit pada Sistem Layanan Informasi Keuangan (SLIK). Edukasi pengelolaan anggaran pribadi berbasis formula 50/30/20 (kebutuhan pokok/keinginan/investasi) menjadi instrumen esensial bagi ketahanan finansial generasi masa depan.',
    text: 'Berdasarkan Teks 3, faktor utama yang menyebabkan tingginya angka inklusi keuangan tetapi rendah dalam literasi finansial adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Tingginya bunga tabungan di bank konvensional' },
      { id: 'B', text: 'Kemudahan akses teknologi produk finansial digital yang tidak diimbangi dengan edukasi pengelolaan risiko dan perencanaan keuangan', correct: true },
      { id: 'C', text: 'Ketiadaan aplikasi dompet digital di ponsel pintar' },
      { id: 'D', text: 'Kebijakan pemerintah yang membatasi investasi saham' },
      { id: 'E', text: 'Penutupan kantor cabang bank di daerah pelosok' }
    ],
    correctAnswer: 'B',
    explanation: 'Teks menjelaskan bahwa akses terhadap fintech/BNPL sangat mudah (inklusi tinggi), tetapi pemahaman risiko suku bunga dan manajemen utang masih rendah (literasi rendah).',
    topic: 'Analisis Masalah Sosial-Finansial',
    difficulty: 'Sedang'
  },
  {
    id: 12,
    readingText: '**Teks 3 (untuk Soal No. 11-15)**\n\nLiterasi keuangan di kalangan Generasi Z menjadi sorotan utama di tengah maraknya kemudahan akses pinjaman daring (*fintech peer-to-peer lending*) dan skema pembayaran tunda (*buy now pay later* / BNPL). Survei Otoritas Jasa Keuangan (OJK) menunjukkan bahwa kendati inklusi keuangan generasi muda mencapai 85%, indeks literasi finansial mereka baru berkisar pada angka 49%. Kesenjangan ini mencerminkan fenomena di mana akses produk keuangan digital terbuka luas, namun pemahaman akan manajemen risiko utang, bunga berbunga, dan perencanaan dana darurat masih minim.\n\nPerilaku konsumtif impulsif yang dipicu oleh budaya FOMO (*Fear of Missing Out*) di media sosial kerap menjebak anak muda dalam lingkaran utang konsumtif. Tanpa pemahaman rasio utang terhadap pendapatan (*debt-to-income ratio*) yang sehat (maksimal 30% dari total penghasilan), generasi muda rentan mengalami gagal bayar yang berakibat pada catatan buruk riwayat kredit pada Sistem Layanan Informasi Keuangan (SLIK). Edukasi pengelolaan anggaran pribadi berbasis formula 50/30/20 (kebutuhan pokok/keinginan/investasi) menjadi instrumen esensial bagi ketahanan finansial generasi masa depan.',
    text: 'Batas rasio cicilan utang bulanan yang dianggap sehat menurut Teks 3 adalah maksimal...',
    type: 'multiple',
    options: [
      { id: 'A', text: '10% dari penghasilan' },
      { id: 'B', text: '20% dari penghasilan' },
      { id: 'C', text: '30% dari penghasilan', correct: true },
      { id: 'D', text: '50% dari penghasilan' },
      { id: 'E', text: '70% dari penghasilan' }
    ],
    correctAnswer: 'C',
    explanation: 'Teks secara eksplisit menyebutkan "rasio utang terhadap pendapatan (debt-to-income ratio) yang sehat (maksimal 30% dari total penghasilan)".',
    topic: 'Pencarian Informasi Spesifik Teks',
    difficulty: 'Mudah'
  },
  {
    id: 13,
    readingText: '**Teks 3 (untuk Soal No. 11-15)**\n\nLiterasi keuangan di kalangan Generasi Z menjadi sorotan utama di tengah maraknya kemudahan akses pinjaman daring (*fintech peer-to-peer lending*) dan skema pembayaran tunda (*buy now pay later* / BNPL). Survei Otoritas Jasa Keuangan (OJK) menunjukkan bahwa kendati inklusi keuangan generasi muda mencapai 85%, indeks literasi finansial mereka baru berkisar pada angka 49%. Kesenjangan ini mencerminkan fenomena di mana akses produk keuangan digital terbuka luas, namun pemahaman akan manajemen risiko utang, bunga berbunga, dan perencanaan dana darurat masih minim.\n\nPerilaku konsumtif impulsif yang dipicu oleh budaya FOMO (*Fear of Missing Out*) di media sosial kerap menjebak anak muda dalam lingkaran utang konsumtif. Tanpa pemahaman rasio utang terhadap pendapatan (*debt-to-income ratio*) yang sehat (maksimal 30% dari total penghasilan), generasi muda rentan mengalami gagal bayar yang berakibat pada catatan buruk riwayat kredit pada Sistem Layanan Informasi Keuangan (SLIK). Edukasi pengelolaan anggaran pribadi berbasis formula 50/30/20 (kebutuhan pokok/keinginan/investasi) menjadi instrumen esensial bagi ketahanan finansial generasi masa depan.',
    text: 'Dampak buruk jangka panjang bagi individu yang mengalami gagal bayar cicilan pinjaman digital adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Mendapat penghapusan seluruh utang secara otomatis' },
      { id: 'B', text: 'Tercatatnya rekam jejak kredit buruk pada SLIK yang menyulitkan pengajuan pinjaman produktif masa depan', correct: true },
      { id: 'C', text: 'Kenaikan batas saldo kredit belanja daring' },
      { id: 'D', text: 'Penutupan akun media sosial oleh OJK' },
      { id: 'E', text: 'Bebas dari kewajiban membayar pajak penghasilan' }
    ],
    correctAnswer: 'B',
    explanation: 'Gagal bayar berujung pada catatan riwayat kredit buruk pada SLIK (Sistem Layanan Informasi Keuangan).',
    topic: 'Inferensi Konsekuensi Sosial',
    difficulty: 'Mudah'
  },
  {
    id: 14,
    readingText: '**Teks 3 (untuk Soal No. 11-15)**\n\nLiterasi keuangan di kalangan Generasi Z menjadi sorotan utama di tengah maraknya kemudahan akses pinjaman daring (*fintech peer-to-peer lending*) dan skema pembayaran tunda (*buy now pay later* / BNPL). Survei Otoritas Jasa Keuangan (OJK) menunjukkan bahwa kendati inklusi keuangan generasi muda mencapai 85%, indeks literasi finansial mereka baru berkisar pada angka 49%. Kesenjangan ini mencerminkan fenomena di mana akses produk keuangan digital terbuka luas, namun pemahaman akan manajemen risiko utang, bunga berbunga, dan perencanaan dana darurat masih minim.\n\nPerilaku konsumtif impulsif yang dipicu oleh budaya FOMO (*Fear of Missing Out*) di media sosial kerap menjebak anak muda dalam lingkaran utang konsumtif. Tanpa pemahaman rasio utang terhadap pendapatan (*debt-to-income ratio*) yang sehat (maksimal 30% dari total penghasilan), generasi muda rentan mengalami gagal bayar yang berakibat pada catatan buruk riwayat kredit pada Sistem Layanan Informasi Keuangan (SLIK). Edukasi pengelolaan anggaran pribadi berbasis formula 50/30/20 (kebutuhan pokok/keinginan/investasi) menjadi instrumen esensial bagi ketahanan finansial generasi masa depan.',
    text: 'Pada formula pengelolaan anggaran 50/30/20, alokasi 20% diperuntukkan untuk...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Kebutuhan pokok sehari-hari' },
      { id: 'B', text: 'Gaya hidup dan rekreasi' },
      { id: 'C', text: 'Tabungan, dana darurat, dan investasi', correct: true },
      { id: 'D', text: 'Cicilan utang konsumtif kartu kredit' },
      { id: 'E', text: 'Belanja pakaian bermerek' }
    ],
    correctAnswer: 'C',
    explanation: 'Dalam formula 50/30/20: 50% untuk kebutuhan pokok (needs), 30% untuk keinginan (wants), dan 20% untuk tabungan/investasi (savings/investments).',
    topic: 'Pemahaman Konsep Finansial',
    difficulty: 'Mudah'
  },
  {
    id: 15,
    readingText: '**Teks 3 (untuk Soal No. 11-15)**\n\nLiterasi keuangan di kalangan Generasi Z menjadi sorotan utama di tengah maraknya kemudahan akses pinjaman daring (*fintech peer-to-peer lending*) dan skema pembayaran tunda (*buy now pay later* / BNPL). Survei Otoritas Jasa Keuangan (OJK) menunjukkan bahwa kendati inklusi keuangan generasi muda mencapai 85%, indeks literasi finansial mereka baru berkisar pada angka 49%. Kesenjangan ini mencerminkan fenomena di mana akses produk keuangan digital terbuka luas, namun pemahaman akan manajemen risiko utang, bunga berbunga, dan perencanaan dana darurat masih minim.\n\nPerilaku konsumtif impulsif yang dipicu oleh budaya FOMO (*Fear of Missing Out*) di media sosial kerap menjebak anak muda dalam lingkaran utang konsumtif. Tanpa pemahaman rasio utang terhadap pendapatan (*debt-to-income ratio*) yang sehat (maksimal 30% dari total penghasilan), generasi muda rentan mengalami gagal bayar yang berakibat pada catatan buruk riwayat kredit pada Sistem Layanan Informasi Keuangan (SLIK). Edukasi pengelolaan anggaran pribadi berbasis formula 50/30/20 (kebutuhan pokok/keinginan/investasi) menjadi instrumen esensial bagi ketahanan finansial generasi masa depan.',
    text: 'Tentukan kebenaran pernyataan tabel berikut:',
    type: 'true-false-table',
    statements: [
      { id: 's1', text: 'Indeks inklusi keuangan generasi muda (85%) lebih tinggi daripada tingkat literasi keuangannya (49%).', correct: true, trueLabel: 'Benar', falseLabel: 'Salah' },
      { id: 's2', text: 'Budaya FOMO di media sosial mendorong perilaku konsumtif dan utang impulsif.', correct: true, trueLabel: 'Benar', falseLabel: 'Salah' },
      { id: 's3', text: 'SLIK adalah sistem dari OJK untuk memberikan pinjaman gratis tanpa bunga.', correct: false, trueLabel: 'Benar', falseLabel: 'Salah' }
    ],
    explanation: 'Pernyataan 1 dan 2 benar sesuai data teks. Pernyataan 3 salah karena SLIK adalah sistem riwayat informasi kredit/debitur, bukan penyedia pinjaman gratis.',
    topic: 'Tabel Verifikasi Literasi Finansial',
    difficulty: 'Mudah'
  },
  {
    id: 16,
    text: 'Bacalah kutipan cerpen berikut:\n"Di beranda senja yang temaram, kakek memandangi album foto kusamnya. Setiap helai halaman bagai gerbang waktu yang menyeretnya kembali ke masa perjuangan tahun empat puluhan. Suara desingan peluru dan harum bubuk mesiu seolah kembali tercium di udara, menggetarkan jemari rentanya yang gemetar."\n\nLatar suasana yang tergambar dalam kutipan cerpen tersebut adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Riang gembira dan penuh canda tawa' },
      { id: 'B', text: 'Hening, syahdu, dan penuh nostalgia emosional mendalam', correct: true },
      { id: 'C', text: 'Mencekam dan penuh kemarahan' },
      { id: 'D', text: 'Gelisah karena ketakutan dikejar musuh' },
      { id: 'E', text: 'Bosan dan tanpa harapan' }
    ],
    correctAnswer: 'B',
    explanation: 'Diksi "senja temaram", "album kusam", "gerbang waktu", dan ingatan nostalgia menghadirkan suasana syahdu, hening, dan kontemplatif mendalam.',
    topic: 'Apresiasi Sastra & Latar Suasana',
    difficulty: 'Mudah'
  },
  {
    id: 17,
    text: 'Nilai moral yang dominan dalam kutipan cerpen di atas adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Menghargai jasa perjuangan para pahlawan dan memaknai memori sejarah kehidupan', correct: true },
      { id: 'B', text: 'Menimbun barang-barang antik untuk dijual kembali' },
      { id: 'C', text: 'Menolak kemajuan teknologi kamera digital' },
      { id: 'D', text: 'Menghindari tinggal di rumah yang sepi' },
      { id: 'E', text: 'Menuntut balas dendam atas masa lalu' }
    ],
    correctAnswer: 'A',
    explanation: 'Kutipan menonjolkan penghormatan terhadap memori perjuangan kemerdekaan sebagai nilai luhur.',
    topic: 'Nilai Kehidupan dalam Cerpen',
    difficulty: 'Mudah'
  },
  {
    id: 18,
    text: 'Sudut pandang (*point of view*) pengarang dalam kutipan cerpen soal nomor 16 adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Orang pertama pelaku utama ("aku")' },
      { id: 'B', text: 'Orang pertama pelaku sampingan' },
      { id: 'C', text: 'Orang ketiga serbatahu / pengamat ("kakek/ia")', correct: true },
      { id: 'D', text: 'Orang kedua campuran' },
      { id: 'E', text: 'Sudut pandang anonim berganti' }
    ],
    correctAnswer: 'C',
    explanation: 'Pengarang menggunakan kata ganti "kakek" dan mampu mendeskripsikan isi ingatan batin tokoh kakek (orang ketiga serbatahu).',
    topic: 'Sudut Pandang Sastra',
    difficulty: 'Mudah'
  },
  {
    id: 19,
    text: 'Perhatikan puisi berikut:\n*Di pucuk cemara angin bernyanyi*\n*Membisikkan rahasia tentang sang mentari*\n*Kala malam menutup tirai bumi*\n*Harapan baru tak kan pernah mati*\n\nCitraan yang paling menonjol pada baris pertama dan kedua puisi tersebut adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Citraan penglihatan (*visual*)' },
      { id: 'B', text: 'Citraan pendengaran (*auditif*)', correct: true },
      { id: 'C', text: 'Citraan perabaan (*taktil*)' },
      { id: 'D', text: 'Citraan penciuman (*olfaktori*)' },
      { id: 'E', text: 'Citraan gerak (*kinestetik*)' }
    ],
    correctAnswer: 'B',
    explanation: 'Kata "bernyanyi" dan "membisikkan" merangsang indra pendengaran pembaca (citraan auditif).',
    topic: 'Citraan / Imaji Puisi',
    difficulty: 'Mudah'
  },
  {
    id: 20,
    text: 'Amanat utama dari puisi pada soal nomor 19 adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Pohon cemara harus dilindungi dari penebangan liar' },
      { id: 'B', text: 'Selalu optimis dan memelihara harapan di tengah pergantian waktu dan kesulitan hidup', correct: true },
      { id: 'C', text: 'Malam hari adalah waktu yang berbahaya' },
      { id: 'D', text: 'Angin gunung memiliki nada musik merdu' },
      { id: 'E', text: 'Matahari terbenam menandakan akhir dari segalanya' }
    ],
    correctAnswer: 'B',
    explanation: 'Larik "Kala malam menutup tirai bumi / Harapan baru tak kan pernah mati" menyiratkan pesan optimisme hidup yang pantang menyerah.',
    topic: 'Amanat Karya Sastra Puisi',
    difficulty: 'Mudah'
  },
  {
    id: 21,
    readingText: '**Teks 4 (untuk Soal No. 21-25)**\n\nIndustri pariwisata berkelanjutan (*sustainable tourism*) menempatkan konservasi budaya lokal dan perlindungan ekologi sebagai pilar utama, bukan sekadar mengejar angka kunjungan turis secara masif (*overtourism*). Di Desa Wisata Penglipuran, Bali, kearifan lokal *Tri Hita Karana*—yang mengatur keselarasan antara manusia dengan Tuhan, sesama manusia, dan alam lingkungan—diintegrasikan ke dalam tata ruang desa dan pengelolaan sampah nir-plastik.\n\nKeberhasilan model desa wisata ini membuktikan bahwa pelestarian adat istiadat tidak bertentangan dengan kemakmuran ekonomi. Pendapatan dari retribusi tiket dan usaha cenderamata dikelola melalui Badan Usaha Milik Desa (BUMDes) dan dialokasikan kembali untuk upacara adat, beasiswa anak desa, serta dana pemeliharaan rumah bambu tradisional. Model ini menjadi rujukan internasional dalam pengembangan ekowisata berbasis komunitas (*community-based ecotourism*).',
    text: 'Konsep filosofis yang mendasari tata kelola Desa Wisata Penglipuran adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Bhinneka Tunggal Ika' },
      { id: 'B', text: 'Tri Hita Karana', correct: true },
      { id: 'C', text: 'Gotong Royong Modern' },
      { id: 'D', text: 'Catur Asrama' },
      { id: 'E', text: 'Pancasila Sila Kelima' }
    ],
    correctAnswer: 'B',
    explanation: 'Paragraf 1 secara eksplisit menyebutkan filosofi kearifan lokal Tri Hita Karana sebagai dasar tata ruang dan keselarasan lingkungan.',
    topic: 'Identifikasi Fakta Budaya Teks',
    difficulty: 'Mudah'
  },
  {
    id: 22,
    readingText: '**Teks 4 (untuk Soal No. 21-25)**\n\nIndustri pariwisata berkelanjutan (*sustainable tourism*) menempatkan konservasi budaya lokal dan perlindungan ekologi sebagai pilar utama, bukan sekadar mengejar angka kunjungan turis secara masif (*overtourism*). Di Desa Wisata Penglipuran, Bali, kearifan lokal *Tri Hita Karana*—yang mengatur keselarasan antara manusia dengan Tuhan, sesama manusia, dan alam lingkungan—diintegrasikan ke dalam tata ruang desa dan pengelolaan sampah nir-plastik.\n\nKeberhasilan model desa wisata ini membuktikan bahwa pelestarian adat istiadat tidak bertentangan dengan kemakmuran ekonomi. Pendapatan dari retribusi tiket dan usaha cenderamata dikelola melalui Badan Usaha Milik Desa (BUMDes) dan dialokasikan kembali untuk upacara adat, beasiswa anak desa, serta dana pemeliharaan rumah bambu tradisional. Model ini menjadi rujukan internasional dalam pengembangan ekowisata berbasis komunitas (*community-based ecotourism*).',
    text: 'Keuntungan ekonomi dari pariwisata di Desa Penglipuran disalurkan kembali untuk program-program berikut, **KECUALI**...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Penyelenggaraan upacara adat' },
      { id: 'B', text: 'Beasiswa pendidikan bagi anak desa' },
      { id: 'C', text: 'Pemeliharaan rumah bambu tradisional' },
      { id: 'D', text: 'Pembangunan hotel pencakar langit bertaraf internasional', correct: true },
      { id: 'E', text: 'Pengelolaan lingkungan melalui BUMDes' }
    ],
    correctAnswer: 'D',
    explanation: 'Teks menyebut alokasi untuk upacara adat, beasiswa, dan renovasi rumah bambu. Pembangunan hotel pencakar langit bertentangan dengan konsep konservasi desa wisata.',
    topic: 'Pengecualian Informasi Teks',
    difficulty: 'Mudah'
  },
  {
    id: 23,
    readingText: '**Teks 4 (untuk Soal No. 21-25)**\n\nIndustri pariwisata berkelanjutan (*sustainable tourism*) menempatkan konservasi budaya lokal dan perlindungan ekologi sebagai pilar utama, bukan sekadar mengejar angka kunjungan turis secara masif (*overtourism*). Di Desa Wisata Penglipuran, Bali, kearifan lokal *Tri Hita Karana*—yang mengatur keselarasan antara manusia dengan Tuhan, sesama manusia, dan alam lingkungan—diintegrasikan ke dalam tata ruang desa dan pengelolaan sampah nir-plastik.\n\nKeberhasilan model desa wisata ini membuktikan bahwa pelestarian adat istiadat tidak bertentangan dengan kemakmuran ekonomi. Pendapatan dari retribusi tiket dan usaha cenderamata dikelola melalui Badan Usaha Milik Desa (BUMDes) dan dialokasikan kembali untuk upacara adat, beasiswa anak desa, serta dana pemeliharaan rumah bambu tradisional. Model ini menjadi rujukan internasional dalam pengembangan ekowisata berbasis komunitas (*community-based ecotourism*).',
    text: 'Manakah pernyataan yang merupakan keunggulan utama dari *community-based ecotourism* berdasarkan Teks 4?',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Masyarakat lokal menjadi subjek utama pengelola yang menjaga kelestarian budaya dan sekaligus merasakan manfaat ekonominya secara langsung.', correct: true },
      { id: 'B', text: 'Pariwisata diserahkan sepenuhnya kepada pemodal asing.' },
      { id: 'C', text: 'Jumlah wisatawan tidak dibatasi sehingga desa menjadi sangat padat.' },
      { id: 'D', text: 'Adat istiadat kuno diubah total agar sesuai dengan selera turis modern.' },
      { id: 'E', text: 'Biaya hidup masyarakat desa meningkat tanpa ada subsidi pendidikan.' }
    ],
    correctAnswer: 'A',
    explanation: 'Ekowisata berbasis komunitas memberdayakan warga lokal sebagai aktor utama pelestari budaya dan penikmat hasil ekonomi.',
    topic: 'Pemahaman Gagasan Utama Literasi Sosial',
    difficulty: 'Sedang'
  },
  {
    id: 24,
    readingText: '**Teks 4 (untuk Soal No. 21-25)**\n\nIndustri pariwisata berkelanjutan (*sustainable tourism*) menempatkan konservasi budaya lokal dan perlindungan ekologi sebagai pilar utama, bukan sekadar mengejar angka kunjungan turis secara masif (*overtourism*). Di Desa Wisata Penglipuran, Bali, kearifan lokal *Tri Hita Karana*—yang mengatur keselarasan antara manusia dengan Tuhan, sesama manusia, dan alam lingkungan—diintegrasikan ke dalam tata ruang desa dan pengelolaan sampah nir-plastik.\n\nKeberhasilan model desa wisata ini membuktikan bahwa pelestarian adat istiadat tidak bertentangan dengan kemakmuran ekonomi. Pendapatan dari retribusi tiket dan usaha cenderamata dikelola melalui Badan Usaha Milik Desa (BUMDes) dan dialokasikan kembali untuk upacara adat, beasiswa anak desa, serta dana pemeliharaan rumah bambu tradisional. Model ini menjadi rujukan internasional dalam pengembangan ekowisata berbasis komunitas (*community-based ecotourism*).',
    text: 'Tentukan kebenaran pernyataan tabel berikut:',
    type: 'true-false-table',
    statements: [
      { id: 's1', text: 'Desa Wisata Penglipuran menerapkan kebijakan pengelolaan sampah nir-plastik.', correct: true, trueLabel: 'Benar', falseLabel: 'Salah' },
      { id: 's2', text: 'Konsep sustainable tourism hanya memprioritaskan kuantitas jumlah turis sebanyak-banyaknya.', correct: false, trueLabel: 'Benar', falseLabel: 'Salah' },
      { id: 's3', text: 'BUMDes berperan sebagai pengelola pendapatan wisata untuk dikembalikan bagi kemaslahatan warga desa.', correct: true, trueLabel: 'Benar', falseLabel: 'Salah' }
    ],
    explanation: 'Pernyataan 1 dan 3 benar. Pernyataan 2 salah karena pariwisata berkelanjutan menolak orientasi overtourism semata dan mengedepankan konservasi ekologis.',
    topic: 'Tabel Verifikasi Ekowisata',
    difficulty: 'Mudah'
  },
  {
    id: 25,
    text: 'Makna istilah *nir-plastik* pada kalimat "...pengelolaan sampah nir-plastik" adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Penuh dengan plastik daur ulang' },
      { id: 'B', text: 'Bebas atau tanpa menggunakan plastik sama sekali', correct: true },
      { id: 'C', text: 'Plastik sekali pakai murah' },
      { id: 'D', text: 'Pembakaran sampah plastik' },
      { id: 'E', text: 'Penimbunan sampah plastik di sungai' }
    ],
    correctAnswer: 'B',
    explanation: 'Bentuk terikat "nir-" bermakna tidak ada / bebas / tanpa (seperti nirkabel = tanpa kabel, nirwana, nir-plastik = bebas plastik).',
    topic: 'Morfologi Bentuk Terikat nir-',
    difficulty: 'Mudah'
  },
  {
    id: 26,
    readingText: '**Teks 5 (untuk Soal No. 26-30)**\n\nFenomena polusi udara perkotaan akibat emisi gas buang kendaraan bermotor dan cerobong PLTU batu bara telah menjadi darurat kesehatan masyarakat. Partikel debu mikroskopis berukuran kurang dari 2,5 mikrometer ($PM_{2,5}$) dapat dengan mudah menembus sistem penyaringan saluran pernapasan manusia dan masuk ke dalam aliran darah. Paparan kronis terhadap $PM_{2,5}$ terbukti meningkatkan risiko penyakit paru obstruktif kronis (PPOK), serangan jantung koroner, hingga stroke iskemik.\n\nStudi Organisasi Kesehatan Dunia (WHO) mengestimasi bahwa lebih dari 4,2 juta kematian dini di dunia setiap tahunnya terkait erat dengan polusi udara ambien luar ruangan. Untuk menanggulangi krisis ini, kebijakan terintegrasi seperti uji emisi berkala, peralihan armada transportasi publik ke bus listrik, dan perluasan ruang terbuka hijau (RTH) kota menjadi langkah mitigasi yang tak dapat ditawar lagi.',
    text: 'Alasan mengapa partikel $PM_{2,5}$ sangat berbahaya bagi tubuh manusia menurut Teks 5 adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Ukurannya yang sangat kecil sehingga mampu menembus filter paru-paru dan masuk langsung ke pembuluh darah', correct: true },
      { id: 'B', text: 'Memiliki bau yang sangat menyengat hidung' },
      { id: 'C', text: 'Hanya terdapat pada air hujan asam' },
      { id: 'D', text: 'Dapat merusak pendengaran secara instan' },
      { id: 'E', text: 'Menyebabkan kebutaan permanen dalam beberapa jam' }
    ],
    correctAnswer: 'A',
    explanation: 'Teks menyebutkan ukuran partikel kurang dari 2,5 mikrometer memudahkan partikel tersebut menembus penyaring pernapasan dan masuk ke aliran darah.',
    topic: 'Pemahaman Informasi Biologis Teks',
    difficulty: 'Mudah'
  },
  {
    id: 27,
    readingText: '**Teks 5 (untuk Soal No. 26-30)**\n\nFenomena polusi udara perkotaan akibat emisi gas buang kendaraan bermotor dan cerobong PLTU batu bara telah menjadi darurat kesehatan masyarakat. Partikel debu mikroskopis berukuran kurang dari 2,5 mikrometer ($PM_{2,5}$) dapat dengan mudah menembus sistem penyaringan saluran pernapasan manusia dan masuk ke dalam aliran darah. Paparan kronis terhadap $PM_{2,5}$ terbukti meningkatkan risiko penyakit paru obstruktif kronis (PPOK), serangan jantung koroner, hingga stroke iskemik.\n\nStudi Organisasi Kesehatan Dunia (WHO) mengestimasi bahwa lebih dari 4,2 juta kematian dini di dunia setiap tahunnya terkait erat dengan polusi udara ambien luar ruangan. Untuk menanggulangi krisis ini, kebijakan terintegrasi seperti uji emisi berkala, peralihan armada transportasi publik ke bus listrik, dan perluasan ruang terbuka hijau (RTH) kota menjadi langkah mitigasi yang tak dapat ditawar lagi.',
    text: 'Berdasarkan data WHO dalam Teks 5, perkiraan jumlah kematian dini global akibat polusi udara luar ruangan mencapai...',
    type: 'multiple',
    options: [
      { id: 'A', text: '1,5 juta orang per tahun' },
      { id: 'B', text: '2,8 juta orang per tahun' },
      { id: 'C', text: '4,2 juta orang per tahun', correct: true },
      { id: 'D', text: '6,0 juta orang per tahun' },
      { id: 'E', text: '10 juta orang per tahun' }
    ],
    correctAnswer: 'C',
    explanation: 'Paragraf 2 menyatakan data estimasi WHO: "lebih dari 4,2 juta kematian dini di dunia setiap tahunnya".',
    topic: 'Pencarian Fakta Angka Teks',
    difficulty: 'Mudah'
  },
  {
    id: 28,
    readingText: '**Teks 5 (untuk Soal No. 26-30)**\n\nFenomena polusi udara perkotaan akibat emisi gas buang kendaraan bermotor dan cerobong PLTU batu bara telah menjadi darurat kesehatan masyarakat. Partikel debu mikroskopis berukuran kurang dari 2,5 mikrometer ($PM_{2,5}$) dapat dengan mudah menembus sistem penyaringan saluran pernapasan manusia dan masuk ke dalam aliran darah. Paparan kronis terhadap $PM_{2,5}$ terbukti meningkatkan risiko penyakit paru obstruktif kronis (PPOK), serangan jantung koroner, hingga stroke iskemik.\n\nStudi Organisasi Kesehatan Dunia (WHO) mengestimasi bahwa lebih dari 4,2 juta kematian dini di dunia setiap tahunnya terkait erat dengan polusi udara ambien luar ruangan. Untuk menanggulangi krisis ini, kebijakan terintegrasi seperti uji emisi berkala, peralihan armada transportasi publik ke bus listrik, dan perluasan ruang terbuka hijau (RTH) kota menjadi langkah mitigasi yang tak dapat ditawar lagi.',
    text: 'Pilihlah langkah-langkah mitigasi polusi perkotaan yang disebutkan dalam teks (pilihan dapat lebih dari satu):',
    type: 'multiple-complex',
    options: [
      { id: 'A', text: 'Uji emisi kendaraan bermotor secara berkala.', correct: true },
      { id: 'B', text: 'Konversi armada angkutan umum ke bus listrik ramah lingkungan.', correct: true },
      { id: 'C', text: 'Perluasan Ruang Terbuka Hijau (RTH) di kawasan perkotaan.', correct: true }
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: 'Ketiga poin tersebut secara eksplisit tertera di kalimat penutup paragraf kedua teks.',
    topic: 'Pilihan Ganda Kompleks Mitigasi Lingkungan',
    difficulty: 'Sedang'
  },
  {
    id: 29,
    readingText: '**Teks 5 (untuk Soal No. 26-30)**\n\nFenomena polusi udara perkotaan akibat emisi gas buang kendaraan bermotor dan cerobong PLTU batu bara telah menjadi darurat kesehatan masyarakat. Partikel debu mikroskopis berukuran kurang dari 2,5 mikrometer ($PM_{2,5}$) dapat dengan mudah menembus sistem penyaringan saluran pernapasan manusia dan masuk ke dalam aliran darah. Paparan kronis terhadap $PM_{2,5}$ terbukti meningkatkan risiko penyakit paru obstruktif kronis (PPOK), serangan jantung koroner, hingga stroke iskemik.\n\nStudi Organisasi Kesehatan Dunia (WHO) mengestimasi bahwa lebih dari 4,2 juta kematian dini di dunia setiap tahunnya terkait erat dengan polusi udara ambien luar ruangan. Untuk menanggulangi krisis ini, kebijakan terintegrasi seperti uji emisi berkala, peralihan armada transportasi publik ke bus listrik, dan perluasan ruang terbuka hijau (RTH) kota menjadi langkah mitigasi yang tak dapat ditawar lagi.',
    text: 'Penyakit yang dipicu oleh paparan jangka panjang partikel $PM_{2,5}$ menurut Teks 5 adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Penyakit Paru Obstruktif Kronis (PPOK), serangan jantung koroner, dan stroke iskemik', correct: true },
      { id: 'B', text: 'Rabun jauh, katarak, dan glaukoma' },
      { id: 'C', text: 'Osteoporosis dan radang sendi' },
      { id: 'D', text: 'Gastritis dan tukak lambung' },
      { id: 'E', text: 'Demam berdarah dan malaria' }
    ],
    correctAnswer: 'A',
    explanation: 'Paragraf 1 secara spesifik menyebutkan PPOK, serangan jantung koroner, dan stroke iskemik.',
    topic: 'Identifikasi Detail Penyakit',
    difficulty: 'Mudah'
  },
  {
    id: 30,
    text: 'Sikap yang paling bijak dan proaktif bagi masyarakat dalam merespons informasi polusi udara perkotaan adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Memakai masker berstandar respirator (N95/KF94) saat beraktivitas di luar ruang dan beralih menggunakan transportasi publik', correct: true },
      { id: 'B', text: 'Menghentikan konsumsi air putih setiap hari' },
      { id: 'C', text: 'Membakar sampah daun di halaman rumah saat sore hari' },
      { id: 'D', text: 'Menolak penanaman pohon di pinggir jalan' },
      { id: 'E', text: 'Menjual seluruh kendaraan dan tidak bepergian sama sekali' }
    ],
    correctAnswer: 'A',
    explanation: 'Penggunaan masker berfilter mikro dan adopsi transportasi umum merupakan aksi mitigasi preventif yang rasional dan efektif.',
    topic: 'Penerapan Solutif Hasil Literasi',
    difficulty: 'Mudah'
  }
];
