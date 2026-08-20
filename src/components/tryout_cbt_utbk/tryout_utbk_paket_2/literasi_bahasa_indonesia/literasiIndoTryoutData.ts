import { UtbkQuestion } from '../types';

export const literasiIndoTryoutData: UtbkQuestion[] = [
  {
    id: 1,
    readingText: 'Indonesia merupakan salah satu negara kepulauan terbesar di dunia dengan garis pantai terpanjang kedua. Potensi ekonomi maritim (blue economy) nasional diperkirakan mencapai lebih dari 1.338 miliar dolar AS per tahun. Namun, kontribusi sektor kelautan terhadap Produk Domestik Bruto (PDB) saat ini masih berada di kisaran 7,6%. Tantangan utama yang dihadapi meliputi rendahnya kapasitas armada perikanan tangkap nasional, maraknya praktik pencurian ikan ilegal (*illegal, unreported, and unregulated fishing*), serta keterbatasan infrastruktur rantai dingin (*cold chain*) di kawasan Indonesia Timur yang mengakibatkan tingginya susut mutu hasil tangkapan nelayan tradisional.',
    text: 'Berdasarkan teks di atas, kendala utama infrastruktur yang menyebabkan penurunan mutu hasil tangkapan nelayan di Indonesia Timur adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Keterbatasan fasilitas rantai dingin (*cold chain*)', correct: true },
      { id: 'B', text: 'Ketiadaan pelabuhan bertaraf internasional' },
      { id: 'C', text: 'Tingginya tarif pungutan hasil perikanan' },
      { id: 'D', text: 'Rendahnya populasi ikan bernilai ekonomi tinggi di laut dalam' },
      { id: 'E', text: 'Ketiadaan izin tangkap resmi dari pemerintah daerah' }
    ],
    correctAnswer: 'A',
    explanation: 'Teks secara gamblang menyebutkan "keterbatasan infrastruktur rantai dingin (cold chain) di kawasan Indonesia Timur yang mengakibatkan tingginya susut mutu hasil tangkapan nelayan tradisional".',
    topic: 'Informasi Tersurat Teks Ekonomi Maritim',
    difficulty: 'Mudah'
  },
  {
    id: 2,
    readingText: 'Indonesia merupakan salah satu negara kepulauan terbesar di dunia dengan garis pantai terpanjang kedua. Potensi ekonomi maritim (blue economy) nasional diperkirakan mencapai lebih dari 1.338 miliar dolar AS per tahun. Namun, kontribusi sektor kelautan terhadap Produk Domestik Bruto (PDB) saat ini masih berada di kisaran 7,6%. Tantangan utama yang dihadapi meliputi rendahnya kapasitas armada perikanan tangkap nasional, maraknya praktik pencurian ikan ilegal (*illegal, unreported, and unregulated fishing*), serta keterbatasan infrastruktur rantai dingin (*cold chain*) di kawasan Indonesia Timur yang mengakibatkan tingginya susut mutu hasil tangkapan nelayan tradisional.',
    text: 'Tujuan utama penulis menyampaikan teks di atas adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Menggambarkan paradoks antara besarnya potensi ekonomi kelautan nasional dengan kendala struktural yang menghambat realisasinya.', correct: true },
      { id: 'B', text: 'Mengkritik kegagalan nelayan tradisional dalam mengoperasikan kapal tangkap modern.' },
      { id: 'C', text: 'Mendorong pemerintah untuk membatasi ekspor komoditas laut ke pasar global.' },
      { id: 'D', text: 'Membandingkan garis pantai Indonesia dengan negara-negara maritim di Eropa.' },
      { id: 'E', text: 'Membujuk masyarakat beralih mata pencaharian menjadi petani tambak.' }
    ],
    correctAnswer: 'A',
    explanation: 'Penulis menyoroti kontras antara potensi ekonomi maritim yang amat masif (1.338 miliar USD) dengan fakta kontribusinya yang masih rendah (7,6% PDB) beserta deretan masalah strukturalnya.',
    topic: 'Tujuan Komunikatif Penulis',
    difficulty: 'Sedang'
  },
  {
    id: 3,
    readingText: 'Transisi menuju kendaraan listrik di Indonesia menghadirkan peluang ekonomi ganda: pemanfaatan cadangan nikel terbesar dunia untuk produksi baterai dan pengurangan ketergantungan pada impor bahan bakar minyak (BBM). Meski demikian, terdapat kekhawatiran ekologis terkait jejak karbon dari proses pengolahan feronikel yang masih dominan mengandalkan pasokan listrik dari PLTU batu bara bertarif murah. Jika sumber energi pengolahan hulu belum terdekarbonisasi, klaim keberlanjutan kendaraan listrik berisiko tereduksi menjadi sekadar pergeseran lokasi emisi dari knalpot kendaraan ke cerobong pabrik.',
    text: 'Frasa "pergeseran lokasi emisi dari knalpot kendaraan ke cerobong pabrik" menyiratkan bahwa...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Kendaraan listrik sama sekali tidak menghasilkan polusi udara di jalan raya perkotaan.' },
      { id: 'B', text: 'Pengurangan emisi di tingkat konsumen menjadi semu jika pemrosesan bahan baku di sektor hulu tetap membakar batu bara.', correct: true },
      { id: 'C', text: 'Pabrik baterai menghasilkan asap yang lebih ramah lingkungan daripada asap kendaraan bermotor.' },
      { id: 'D', text: 'Nikel tidak layak digunakan sebagai komponen penyimpan energi baterai litium.' },
      { id: 'E', text: 'Kendaraan berbahan bakar fosil lebih ramah lingkungan dibanding kendaraan listrik.' }
    ],
    correctAnswer: 'B',
    explanation: 'Makna tersirat dari metafora pergeseran emisi adalah emisi karbon tidak benar-benar lenyap dari atmosfer, melainkan hanya berpindah titik pelepasannya dari hilir (knalpot) ke hulu (cerobong PLTU batu bara pabrik nikel).',
    topic: 'Makna Tersirat & Analisis Kritis',
    difficulty: 'Sedang'
  },
  {
    id: 4,
    readingText: 'Dalam konteks ketahanan pangan, sorgum (*Sorghum bicolor*) muncul sebagai komoditas alternatif pengganti gandum dan beras. Sorgum memiliki sistem perakaran dalam yang efisien menyerap air, lapisan kutikula lilin tebal pada daun yang meminimalkan transpirasi, serta toleransi tinggi terhadap tanah salin dan kering. Nilai indeks glikemik sorgum yang rendah juga menjadikannya pangan fungsional ideal bagi penderita diabetes melitus.',
    text: 'Karakteristik anatomi dan fisiologi yang membuat tanaman sorgum tahan terhadap kekeringan ekstrem adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Sistem perakaran dalam dan lapisan kutikula lilin tebal penahan transpirasi air.', correct: true },
      { id: 'B', text: 'Tingginya indeks glikemik pada bulir biji' },
      { id: 'C', text: 'Kemampuan menyerap pupuk nitrogen sintetis secara instan' },
      { id: 'D', text: 'Kebutuhan sinar matahari yang minim di bawah naungan pohon lebat' },
      { id: 'E', text: 'Batang yang mudah patah saat tertiup angin kencang' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai dengan isi teks: "Sorgum memiliki sistem perakaran dalam yang efisien menyerap air, lapisan kutikula lilin tebal pada daun yang meminimalkan transpirasi".',
    topic: 'Pemahaman Rincian Teknis Ilmiah',
    difficulty: 'Mudah'
  },
  {
    id: 5,
    readingText: 'Revolusi kecerdasan buatan dalam dunia medis telah melahirkan algoritma visi komputer yang mampu mendeteksi nodul kanker paru-paru pada citra CT-scan dengan akurasi 94%. Kendati demikian, dokter spesialis radiologi menegaskan bahwa kecerdasan buatan diposisikan sebagai alat bantu sekunder (*second opinion*), bukan pengganti pertimbangan klinis dokter. Aspek empati komunikasi terapeutik, telaah riwayat klinis komprehensif pasien, dan pertimbangan bioetika tetap merupakan domain unik manusia yang tak tergantikan.',
    text: 'Sikap yang ditunjukkan oleh komunitas medis terhadap pemanfaatan kecerdasan buatan adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Menolak total penerapan AI karena dianggap membahayakan keselamatan pasien.' },
      { id: 'B', text: 'Menyambut AI secara kolaboratif sebagai alat bantu diagnostik sekunder sembari mempertahankan pertimbangan holistik dokter.', correct: true },
      { id: 'C', text: 'Menggantikan peran seluruh dokter spesialis dengan perangkat lunak otomatis.' },
      { id: 'D', text: 'Menyerahkan seluruh keputusan etika medis kepada komite algoritma komputer.' },
      { id: 'E', text: 'Membatasi penggunaan AI hanya pada pencatatan administrasi rumah sakit.' }
    ],
    correctAnswer: 'B',
    explanation: 'Teks menekankan posisi AI sebagai instrumen pendukung/second opinion yang saling melengkapi dengan pertimbangan klinis, empati, dan bioetika dokter manusia.',
    topic: 'Sikap & Pandangan Penulis/Narasumber',
    difficulty: 'Sedang'
  },
  {
    id: 6,
    readingText: 'Danau Toba sebagai salah satu danau vulkanik-tektonik terbesar di dunia menghadapi ancaman eutrofikasi berat. Ledakan populasi eceng gondok dan kematian massal ikan budi daya keramba jaring apung (KJA) dipicu oleh akumulasi pakan ikan berlebih yang mengandung fosfor dan nitrogen tinggi. Pengurangan jumlah KJA hingga ambang batas daya dukung lingkungan dan revitalisasi sabuk hijau tangkapan air menjadi langkah mutlak pemulihan ekosistem.',
    text: 'Faktor utama pemicu ledakan eceng gondok dan kematian ikan di Danau Toba menurut teks adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Akumulasi residu pakan ikan berkandungan fosfor dan nitrogen tinggi dari keramba jaring apung.', correct: true },
      { id: 'B', text: 'Letusan gunung api bawah air yang menaikkan suhu danau' },
      { id: 'C', text: 'Penurunan drastis volume air danau akibat kemarau panjang' },
      { id: 'D', text: 'Invasi spesies predator asing dari luar negeri' },
      { id: 'E', text: 'Tumpahan minyak dari kapal wisata domestik' }
    ],
    correctAnswer: 'A',
    explanation: 'Teks menyatakan secara langsung bahwa eutrofikasi dipicu oleh akumulasi pakan ikan berlebih yang mengandung fosfor dan nitrogen tinggi dari KJA.',
    topic: 'Hubungan Kausalitas Ekologi',
    difficulty: 'Mudah'
  },
  {
    id: 7,
    readingText: 'Literasi finansial digital pada generasi muda di era uang elektronik dan skema pembayaran tunda (*paylater*) menjadi tantangan tersendiri. Kemudahan transaksi satu klik sering kali mengaburkan batas antara kebutuhan esensial dan keinginan konsumtif impulsif. Tanpa pemahaman yang memadai mengenai suku bunga majemuk dan dampak riwayat skor kredit (SLIK OJK), kemudahan transaksi ini dapat menjerumuskan anak muda ke dalam jebakan utang konsumtif berkepanjangan.',
    text: 'Konsekuensi negatif yang disoroti jika generasi muda minim literasi finansial saat menggunakan fitur pembayaran tunda adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Terjebak dalam utang konsumtif dan rusaknya skor kredit riwayat keuangan pribadi.', correct: true },
      { id: 'B', text: 'Kehilangan seluruh saldo tabungan di bank secara otomatis' },
      { id: 'C', text: 'Ketidakmampuan menggunakan perangkat ponsel pintar' },
      { id: 'D', text: 'Larangan bertransaksi di semua gerai fisik' },
      { id: 'E', text: 'Penurunan harga barang-barang elektronik di e-commerce' }
    ],
    correctAnswer: 'A',
    explanation: 'Teks menyebutkan risiko terjerumus dalam jebakan utang konsumtif serta buruknya riwayat skor kredit (SLIK OJK) akibat ketidaktahuan atas bunga majemuk.',
    topic: 'Analisis Dampak & Argumen Kritis',
    difficulty: 'Mudah'
  },
  {
    id: 8,
    readingText: 'Bahasa daerah bukan sekadar alat komunikasi sehari-hari, melainkan wadah penyimpan pengetahuan ekologis lokal (*indigenous knowledge*). Dalam bahasa-bahasa etnis pesisir di Maluku dan Papua, terdapat ratusan istilah khusus untuk menamai jenis arus laut, arah angin muson, dan musim pemijahan ikan yang tidak memiliki padanan dalam bahasa nasional maupun internasional. Punahnya sebuah bahasa daerah berarti musnahnya perpustakaan pengetahuan alam yang terakumulasi selama ribuan tahun.',
    text: 'Simpulan utama yang dapat ditarik dari teks di atas adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Pelestarian bahasa daerah sangat penting untuk menjaga kelangsungan khazanah pengetahuan ekologis lokal.', correct: true },
      { id: 'B', text: 'Bahasa nasional harus menggantikan seluruh peranan bahasa daerah di kepulauan.' },
      { id: 'C', text: 'Istilah kelautan di Maluku dan Papua mudah diterjemahkan ke dalam bahasa asing.' },
      { id: 'D', text: 'Masyarakat perkotaan tidak memerlukan pengetahuan tentang arah angin muson.' },
      { id: 'E', text: 'Kepunahan bahasa daerah tidak berdampak pada ilmu pengetahuan modern.' }
    ],
    correctAnswer: 'A',
    explanation: 'Paragraf menyimpulkan korelasi erat antara eksistensi bahasa daerah dengan penyelamatan memori pengetahuan ekologis lokal.',
    topic: 'Penyimpulan Holistik Teks',
    difficulty: 'Mudah'
  },
  {
    id: 9,
    readingText: 'Eksplorasi energi panas bumi (geotermal) di wilayah cincin api (*Ring of Fire*) Indonesia menawarkan sumber beban dasar (*baseload*) listrik yang bersih dan stabil tanpa terpengaruh fluktuasi cuaca harian seperti panel surya. Namun, risiko kegagalan pemboran eksplorasi awal (*exploration drilling risk*) yang tinggi serta lokasi cadangan yang kerap berada di dalam kawasan hutan lindung menuntut tata kelola lingkungan dan skema pendanaan risiko terpadu.',
    text: 'Keunggulan utama energi geotermal dibandingkan dengan energi surya menurut teks adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Mampu menjadi pemasok listrik beban dasar yang stabil tanpa terpengaruh perubahan cuaca.', correct: true },
      { id: 'B', text: 'Biaya pemboran eksplorasinya sangat murah dan bebas risiko' },
      { id: 'C', text: 'Lokasinya selalu berada di kawasan perkotaan yang padat penduduk' },
      { id: 'D', text: 'Tidak memerlukan izin lingkungan dari kementerian terkait' },
      { id: 'E', text: 'Menghasilkan emisi karbon yang lebih tinggi daripada batu bara' }
    ],
    correctAnswer: 'A',
    explanation: 'Teks menyebutkan geotermal "menawarkan sumber beban dasar (baseload) listrik yang bersih dan stabil tanpa terpengaruh fluktuasi cuaca harian seperti panel surya".',
    topic: 'Perbandingan Komparatif Teks',
    difficulty: 'Mudah'
  },
  {
    id: 10,
    readingText: 'Krisis antibiotik global kian mencemaskan akibat maraknya resistansi antimikroba (AMR). Penggunaan antibiotik tanpa resep dokter untuk infeksi virus ringan seperti selesma telah memicu seleksi alam strain bakteri super (*superbugs*) yang kebal terhadap berbagai lini obat utama. Badan Kesehatan Dunia (WHO) memperingatkan bahwa tanpa tindakan pencegahan terkoordinasi, infeksi bakteri biasa di masa depan dapat kembali menjadi ancaman mematikan.',
    text: 'Penyebab utama munculnya strain bakteri super (*superbugs*) menurut teks adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Penyalahgunaan antibiotik tanpa indikasi yang tepat untuk infeksi virus ringan.', correct: true },
      { id: 'B', text: 'Penemuan jenis vaksin baru di laboratorium mikrobiologi' },
      { id: 'C', text: 'Kurangnya konsumsi suplemen vitamin C pada orang dewasa' },
      { id: 'D', text: 'Tingginya harga obat-obatan paten di apotek resmi' },
      { id: 'E', text: 'Penggunaan sabun antiseptik di fasilitas layanan kesehatan' }
    ],
    correctAnswer: 'A',
    explanation: 'Teks menegaskan bahwa "penggunaan antibiotik tanpa resep dokter untuk infeksi virus ringan seperti selesma telah memicu seleksi alam strain bakteri super yang kebal".',
    topic: 'Identifikasi Fakta Penyebab Medis',
    difficulty: 'Mudah'
  }
];
