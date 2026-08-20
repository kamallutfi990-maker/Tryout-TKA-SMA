import { UtbkQuestion } from '../types';

export const pbmTryoutData: UtbkQuestion[] = [
  {
    id: 1,
    readingText: '(1) Perkembangan kecerdasan artifisial generatif telah merambah berbagai sektor industri kreatif. (2) Banyak praktisi desain grafis memanfaatkan teknologi ini untuk mempercepat pembuatan draf visual awal. (3) Namun demikian, isu pelanggaran hak cipta atas basis data pelatihan model masih menyisakan polemik etis dan hukum yang belum terselesaikan. (4) Para seniman menuntut regulasi yang transparan terkait royalti karya mereka.',
    text: 'Kalimat yang memuat konjungsi antarkalimat yang tepat pada teks tersebut adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Kalimat (1)' },
      { id: 'B', text: 'Kalimat (2)' },
      { id: 'C', text: 'Kalimat (3)', correct: true },
      { id: 'D', text: 'Kalimat (4)' },
      { id: 'E', text: 'Tidak ada kalimat yang memuat konjungsi antarkalimat' }
    ],
    correctAnswer: 'C',
    explanation: 'Kalimat (3) menggunakan "Namun demikian," sebagai konjungsi antarkalimat yang diikuti tanda koma untuk menyatakan perlawanan terhadap kalimat sebelumnya.',
    topic: 'Konjungsi Antarkalimat & Pungtuasi',
    difficulty: 'Mudah'
  },
  {
    id: 2,
    text: 'Penulisan huruf kapital yang **salah** terdapat pada kalimat...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Presiden Joko Widodo meresmikan jembatan layang baru.' },
      { id: 'B', text: 'Kami menikmati lezatnya Jeruk bali dan Garam inggris saat berlibur.', correct: true },
      { id: 'C', text: 'Pulau Lombok terkenal dengan keindahan pantai pasir putihnya.' },
      { id: 'D', text: 'Ia fasih berbicara bahasa Indonesia dan bahasa Prancis.' },
      { id: 'E', text: 'Gubernur Jawa Barat menghadiri rapat koordinasi nasional.' }
    ],
    correctAnswer: 'B',
    explanation: 'Nama jenis atau tanaman khas tidak ditulis dengan huruf kapital (jeruk bali, garam inggris). Huruf kapital hanya digunakan jika merujuk pada nama geografi spesifik, bukan nama jenis.',
    topic: 'Kaidah Penulisan Huruf Kapital',
    difficulty: 'Mudah'
  },
  {
    id: 3,
    readingText: '(1) Menghadapi era volatilitas ekonomi global, diversifikasi portofolio investasi menjadi krusial. (2) Investor disarankan tidak menaruh seluruh aset dalam satu instrumen berisiko tinggi. (3) [...] instrumen pendapatan tetap seperti obligasi negara dapat menjadi instrumen penyeimbang saat pasar saham terkoreksi tajam.',
    text: 'Konjungsi yang paling tepat untuk mengisi rumpang pada kalimat (3) adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Sebaliknya,', correct: true },
      { id: 'B', text: 'Meskipun,' },
      { id: 'C', text: 'Karena,' },
      { id: 'D', text: 'Bahkan jika,' },
      { id: 'E', text: 'Sehingga,' }
    ],
    correctAnswer: 'A',
    explanation: '"Sebaliknya," menyajikan alternatif kontras solutif (investasi obligasi penyeimbang) terhadap perilaku menaruh aset pada instrumen risiko tinggi.',
    topic: 'Kepaduan Paragraf & Pengisian Rumpang',
    difficulty: 'Sedang'
  },
  {
    id: 4,
    text: 'Kalimat berikut yang merupakan **kalimat efektif** adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Berdasarkan hasil survei membuktikan bahwa kepuasan pelanggan meningkat pesat.' },
      { id: 'B', text: 'Hasil survei membuktikan bahwa kepuasan konsumen mengalami peningkatan pesat.', correct: true },
      { id: 'C', text: 'Untuk mempersingkat waktu, marilah kita mulai acara seminar ini.' },
      { id: 'D', text: 'Di dalam rapat tahunan itu telah memutuskan kenaikan dividen saham.' },
      { id: 'E', text: 'Bagi peserta lomba yang terlambat tidak diperkenankan memasuki ruangan.' }
    ],
    correctAnswer: 'B',
    explanation: 'Kalimat B memiliki subjek yang jelas (Hasil survei) dan predikat aktif transitif (membuktikan) tanpa kerancuan preposisi di depan subjek. Opsi A, D, dan E kehilangan kejelasan subjek akibat preposisi awal.',
    topic: 'Kalimat Efektif',
    difficulty: 'Sedang'
  },
  {
    id: 5,
    text: 'Penulisan kata serapan yang **benar** adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Analisa, kwalitas, metoda' },
      { id: 'B', text: 'Analisis, kualitas, metode', correct: true },
      { id: 'C', text: 'Analisa, kualitas, metode' },
      { id: 'D', text: 'Analisis, kwalitas, metoda' },
      { id: 'E', text: 'Analisa, kwalitas, metode' }
    ],
    correctAnswer: 'B',
    explanation: 'Baku menurut KBBI dan pedoman ejaan: analisis (bukan analisa), kualitas (bukan kwalitas), metode (bukan metoda).',
    topic: 'Ejaan Kata Serapan Baku',
    difficulty: 'Mudah'
  },
  {
    id: 6,
    text: 'Penggunaan tanda titik koma (;) yang **tepat** terdapat pada kalimat...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Ibu membeli sayur-mayur; dan adik membeli buah-buahan.' },
      { id: 'B', text: 'Hari sudah larut malam; anak-anak masih asyik belajar di perpustakaan.', correct: true },
      { id: 'C', text: 'Kami membutuhkan perlengkapan seperti; tenda, kompas, dan matras.' },
      { id: 'D', text: 'Ayah membaca koran; ketika ibu menyiram tanaman.' },
      { id: 'E', text: 'Meskipun hujan lebat; kami tetap berangkat ke sekolah.' }
    ],
    correctAnswer: 'B',
    explanation: 'Tanda titik koma (;) dapat dipakai sebagai pengganti kata penghubung untuk memisahkan kalimat setara di dalam kalimat majemuk.',
    topic: 'Pungtuasi Tanda Titik Koma',
    difficulty: 'Sedang'
  },
  {
    id: 7,
    readingText: '(1) Ekosistem mangrove memiliki kapasitas penyerapan karbon biru (*blue carbon*) yang sangat tinggi. (2) Karbon tersebut tersimpan dalam sedimen tanah berlumpur selama ribuan tahun. (3) Konversi lahan mangrove menjadi tambak udang intensif merusak keseimbangan ekologis pesisir. (4) Penanaman kembali bibit bakau menjadi program prioritas nasional.',
    text: 'Kalimat yang menjadi simpulan logis dari teks tersebut adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Oleh karena itu, perlindungan dan restorasi ekosistem mangrove sangat vital dalam mitigasi perubahan iklim global.', correct: true },
      { id: 'B', text: 'Meskipun demikian, budi daya udang harus diprioritaskan di atas kelestarian pesisir.' },
      { id: 'C', text: 'Tambak udang merupakan penyerap karbon terbesar di kawasan pesisir tropis.' },
      { id: 'D', text: 'Sedimen lumpur mangrove tidak aman untuk kehidupan biota laut.' },
      { id: 'E', text: 'Bibit bakau tidak dapat tumbuh di tanah yang mengandung karbon tinggi.' }
    ],
    correctAnswer: 'A',
    explanation: 'Kesimpulan logis mengaitkan potensi mangrove sebagai penyerap karbon dengan urgensi tindakan konservasi dan restorasi untuk mitigasi krisis iklim.',
    topic: 'Penyimpulan Paragraf',
    difficulty: 'Mudah'
  },
  {
    id: 8,
    text: 'Kalimat yang tidak padu (sumbang) dalam sebuah paragraf tentang transisi energi terbarukan adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Pembangkit listrik tenaga surya kian kompetitif berkat penurunan harga panel fotovoltaik.' },
      { id: 'B', text: 'Kapasitas baterai penyimpan energi skala grid terus dikembangkan untuk mengatasi intermitensi.' },
      { id: 'C', text: 'Pariwisata kuliner di Kota Bandung mengalami lonjakan pengunjung saat liburan sekolah.', correct: true },
      { id: 'D', text: 'Pemerintah menetapkan target bauran energi hijau mencapai 23% pada tahun mendatang.' },
      { id: 'E', text: 'Pemanfaatan energi angin lepas pantai menjadi opsi potensial bagi wilayah kepulauan.' }
    ],
    correctAnswer: 'C',
    explanation: 'Kalimat C membahas kuliner Kota Bandung, yang sama sekali tidak berhubungan dengan topik energi terbarukan pada paragraf tersebut.',
    topic: 'Koherensi & Kepaduan Paragraf',
    difficulty: 'Mudah'
  },
  {
    id: 9,
    text: 'Penulisan kata depan yang **tepat** terdapat pada kalimat...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Surat dinas itu telah dikirimkan kesemua kantor cabang.' },
      { id: 'B', text: 'Penelitian tersebut dilakukan di laboratorium sentral universitas.', correct: true },
      { id: 'C', text: 'Para atlet berlari menuju kearah garis finis.' },
      { id: 'D', text: 'Keluarga besar kami berkumpul dirumah kakek.' },
      { id: 'E', text: 'Buku itu disimpan didalam laci meja belajar.' }
    ],
    correctAnswer: 'B',
    explanation: 'Kata depan "di" yang menunjukkan tempat harus ditulis terpisah dari kata yang mengikutinya ("di laboratorium sentral").',
    topic: 'Penulisan Kata Depan (Preposisi)',
    difficulty: 'Mudah'
  },
  {
    id: 10,
    text: 'Bentuk kata yang **tidak baku** terdapat pada kalimat...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Sistem transportasi modern harus terintegrasi dengan baik.' },
      { id: 'B', text: 'Aktivitas olahraga rutin dapat meningkatkan kebugaran jasmani.' },
      { id: 'C', text: 'Penggunaan dana operasional harus dilakukan secara efektif dan efisien.' },
      { id: 'D', text: 'Dia memiliki karir yang sangat cemerlang di bidang teknologi informasi.', correct: true },
      { id: 'E', text: 'Jadwal keberangkatan kereta api dapat dilihat melalui aplikasi.' }
    ],
    correctAnswer: 'D',
    explanation: 'Bentuk kata yang baku dalam KBBI adalah "karier", bukan "karir".',
    topic: 'Kosa Kata Baku',
    difficulty: 'Mudah'
  },
  {
    id: 11,
    text: 'Pilihlah penulisan gabungan kata yang menggunakan tanda hubung (-) secara tepat:',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Maha-pengasih, non-blok, pra-sejarah' },
      { id: 'B', text: 'Se-Indonesia, tahun 2000-an, mem-PHK', correct: true },
      { id: 'C', text: 'Keluarga-besar, rumah-sakit, meja-belajar' },
      { id: 'D', text: 'Matahari-terbit, pasar-malam, ibu-kota' },
      { id: 'E', text: 'Pasca-sarjana, intra-universitas, anti-virus' }
    ],
    correctAnswer: 'B',
    explanation: 'Tanda hubung dipakai untuk merangkaikan unsur se- dengan huruf kapital (se-Indonesia), angka dengan -an (tahun 2000-an), dan imbuhan dengan singkatan kapital (mem-PHK).',
    topic: 'Pungtuasi Tanda Hubung',
    difficulty: 'Sedang'
  },
  {
    id: 12,
    text: 'Kalimat yang memuat pembentukan kata ulang dengan makna "saling" adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Kedua delegasi negara saling bersalam-salaman di podium.' },
      { id: 'B', text: 'Mereka tolong-menolong dalam membersihkan puing sisa banjir.', correct: true },
      { id: 'C', text: 'Pohon-pohon di pinggir jalan tumbang akibat diterjang angin kencang.' },
      { id: 'D', text: 'Anak-anak berlari-lari riang gembira di taman bermain.' },
      { id: 'E', text: 'Kupu-kupu beterbangan di antara bunga mawar.' }
    ],
    correctAnswer: 'B',
    explanation: 'Bentuk reduplikasi "tolong-menolong" memiliki makna resiprokal (saling menolong). Opsi A salah karena terjadi pleonasme ("saling bersalam-salaman").',
    topic: 'Morfologi Kata Ulang (Reduplikasi)',
    difficulty: 'Sedang'
  },
  {
    id: 13,
    text: 'Pilihlah kalimat yang menerapkan prinsip kesejajaran/paralelisme bentuk secara tepat:',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Kegiatan posyandu mencakup penimbangan balita, pemberian imunisasi, dan penyuluhan gizi.', correct: true },
      { id: 'B', text: 'Kegiatan posyandu mencakup menimbang balita, pemberian imunisasi, dan menyuluh gizi.' },
      { id: 'C', text: 'Langkah penelitian meliputi mengumpulkan data, dianalisis hasilnya, dan penarikan kesimpulan.' },
      { id: 'D', text: 'Tugas panitia adalah merencanakan acara, pelaksanaan teknis, dan evaluasi hasil.' },
      { id: 'E', text: 'Ia bertugas mengantar surat, pengetikan dokumen, dan fotokopi lembar kerja.' }
    ],
    correctAnswer: 'A',
    explanation: 'Kalimat A memiliki bentuk paralel nominal teratur dengan imbuhan pe-an / pe- (penimbangan, pemberian, penyuluhan). Opsi lain mencampuradukkan kata kerja meN- dan nomina pe-an.',
    topic: 'Paralelisme Bentuk Kalimat',
    difficulty: 'Sedang'
  },
  {
    id: 14,
    text: 'Kata yang mengalami pergeseran makna peyorasi (makna menjadi lebih negatif/kasar) adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Gerombolan', correct: true },
      { id: 'B', text: 'Wanita' },
      { id: 'C', text: 'Sarjana' },
      { id: 'D', text: 'Cendekiawan' },
      { id: 'E', text: 'Bapak' }
    ],
    correctAnswer: 'A',
    explanation: 'Kata "gerombolan" awalnya bermakna netral (kelompok berkumpul), namun kini berkonotasi peyoratif/negatif (seperti gerombolan penjahat atau perusuh).',
    topic: 'Pergeseran Makna Semantik',
    difficulty: 'Sedang'
  },
  {
    id: 15,
    text: 'Penulisan bilangan dan angka yang **tidak tepat** adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Tiga puluh orang siswa mengikuti bimbingan intensif UTBK.' },
      { id: 'B', text: 'Perusahaan tersebut membagikan 250 paket sembako gratis.' },
      { id: 'C', text: '15 orang peserta dinyatakan lolos ke babak final olimpiade sains.', correct: true },
      { id: 'D', text: 'Ulang tahun kemerdekaan RI yang ke-79 dirayakan meriah.' },
      { id: 'E', text: 'Ia membeli kain sepanjang 3,5 meter di toko tekstil.' }
    ],
    correctAnswer: 'C',
    explanation: 'Angka pada awal kalimat tidak boleh ditulis dengan lambang bilangan. Seharusnya ditulis dengan huruf: "Lima belas orang peserta..." atau kalimatnya diubah susunannya.',
    topic: 'Penulisan Angka & Lambang Bilangan',
    difficulty: 'Mudah'
  },
  {
    id: 16,
    text: 'Kalimat yang menggunakan kata serapan berimbuhan secara tepat adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Pemerintah memprogramkan modernisasi alat utama sistem persenjataan.', correct: true },
      { id: 'B', text: 'Mereka mencoba mengkordinir seluruh panitia acara.' },
      { id: 'C', text: 'Dokter menspesialisasi diri di bidang bedah jantung.' },
      { id: 'D', text: 'Perusahaan menstandarisasikan mutu produk ekspornya.' },
      { id: 'E', text: 'Ilmuwan mengkategorikan fosil tersebut ke dalam ordo baru.' }
    ],
    correctAnswer: 'A',
    explanation: 'Kata "memprogramkan" dibentuk secara tepat dari program. Opsi B seharusnya mengoordinasi, C menypesialisasi/mengkhususkan, D menstandardisasi, E mengategorikan.',
    topic: 'Morfofonemik Kata Serapan',
    difficulty: 'Sedang'
  },
  {
    id: 17,
    text: 'Penulisan partikel **pun** yang ditulis serangkai secara benar terdapat pada kalimat...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Walaupun hujan deras, ia tetap datang tepat waktu.', correct: true },
      { id: 'B', text: 'Malam pun telah larut dan jalanan mulai sepi.' },
      { id: 'C', text: 'Satu kali pun dia belum pernah berkunjung ke Raja Ampat.' },
      { id: 'D', text: 'Jangankan makan, minum pun ia tidak sanggup.' },
      { id: 'E', text: 'Siapa pun yang bersalah harus bertanggung jawab di depan hukum.' }
    ],
    correctAnswer: 'A',
    explanation: 'Partikel pun yang merupakan konjungsi lazim (seperti walaupun, meskipun, bagaimanapun, maupun, kendatipun) ditulis serangkai. Partikel pun yang bermakna "juga/saja" ditulis terpisah.',
    topic: 'Kaidah Penulisan Partikel Pun',
    difficulty: 'Mudah'
  },
  {
    id: 18,
    text: 'Kalimat yang mengandung hubungan syarat adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Jika kamu konsisten berlatih soal setiap hari, peluang lolos PTN akan terbuka lebar.', correct: true },
      { id: 'B', text: 'Karena cuaca buruk, kapal penyeberangan dilarang berlayar.' },
      { id: 'C', text: 'Dia belajar keras agar dapat membanggakan orang tuanya.' },
      { id: 'D', text: 'Meskipun lelah, ia tetap menyelesaikan laporannya.' },
      { id: 'E', text: 'Dia tertidur lelap setelah seharian bekerja di ladang.' }
    ],
    correctAnswer: 'A',
    explanation: 'Konjungsi "Jika" pada kalimat A menandai klausa subordinatif kondisional atau hubungan syarat.',
    topic: 'Klausa Hubungan Syarat',
    difficulty: 'Mudah'
  },
  {
    id: 19,
    text: 'Manakah penulisan kata turunan yang **salah**?',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Menyosialisasikan' },
      { id: 'B', text: 'Menterjemahkan', correct: true },
      { id: 'C', text: 'Memperhatikan' },
      { id: 'D', text: 'Mengonsumsi' },
      { id: 'E', text: 'Memelopori' }
    ],
    correctAnswer: 'B',
    explanation: 'Kata dasar "terjemah" berawalan huruf /t/, sehingga saat diberi imbuhan meN-kan lebur menjadi "menerjemahkan" (bukan menterjemahkan).',
    topic: 'Kaidah Peluluhan Fonem K-T-S-P',
    difficulty: 'Mudah'
  },
  {
    id: 20,
    text: 'Judul karangan ilmiah yang penulisannya sesuai dengan kaidah EYD adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Analisis Dampak Pencemaran Mikroplastik terhadap Ekosistem Mangrove di Pesisir Utara Jakarta', correct: true },
      { id: 'B', text: 'Analisis Dampak Pencemaran Mikroplastik Terhadap Ekosistem Mangrove Di Pesisir Utara Jakarta' },
      { id: 'C', text: 'Analisis dampak pencemaran mikroplastik terhadap ekosistem mangrove di pesisir utara jakarta' },
      { id: 'D', text: 'ANALISIS DAMPAK PENCEMARAN MIKROPLASTIK Terhadap EKOSISTEM MANGROVE Di Pesisir Utara Jakarta' },
      { id: 'E', text: 'Analisis Dampak Pencemaran Mikroplastik Terhadap Ekosistem Mangrove di Pesisir Utara Jakarta' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada judul karangan, semua kata diawali huruf kapital kecuali konjungsi dan preposisi (seperti terhadap, di, ke, dan, dari) yang berada di tengah judul.',
    topic: 'Penulisan Judul Karya Tulis',
    difficulty: 'Mudah'
  }
];
