import { UtbkQuestion } from '../types';

export const ppuTryoutData: UtbkQuestion[] = [
  {
    id: 1,
    readingText: '(1) Restorasi terumbu karang berbasis teknologi struktur biorock kian banyak diaplikasikan di perairan tropis Indonesia. (2) Teknologi ini memanfaatkan aliran arus listrik tegangan rendah searah (DC) yang dialirkan ke kerangka baja bawah laut untuk menginduksi presipitasi mineral kalsium karbonat. (3) Mineral yang mengendap tersebut mempercepat laju kalsifikasi karang hingga tiga sampai lima kali lipat lebih cepat daripada laju pertumbuhan alami. (4) Selain memperkokoh struktur substrat, teknik ini juga meningkatkan daya sintasan karang terhadap gelombang panas laut.',
    text: 'Gagasan utama paragraf tersebut adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Kelemahan ekologis terumbu karang tropis di perairan Indonesia.' },
      { id: 'B', text: 'Pemanfaatan dan mekanisme teknologi biorock dalam mempercepat restorasi terumbu karang.', correct: true },
      { id: 'C', text: 'Ancaman gelombang panas laut terhadap populasi karang alami.' },
      { id: 'D', text: 'Proses kimiawi presipitasi mineral kalsium karbonat di laboratorium.' },
      { id: 'E', text: 'Perbandingan biaya instalasi kerangka baja bawah laut di perairan tropis.' }
    ],
    correctAnswer: 'B',
    explanation: 'Paragraf berfokus pada pemaparan aplikasi, mekanisme kerja (aliran listrik DC presipitasi kalsium karbonat), dan manfaat teknologi biorock dalam akselerasi pemulihan karang.',
    topic: 'Ide Pokok & Gagasan Utama',
    difficulty: 'Mudah'
  },
  {
    id: 2,
    readingText: 'Mineral yang mengendap tersebut mempercepat laju kalsifikasi karang hingga tiga sampai lima kali lipat lebih cepat daripada laju pertumbuhan alami. Selain memperkokoh struktur substrat, teknik ini juga meningkatkan daya **sintasan** karang terhadap gelombang panas laut.',
    text: 'Makna istilah **sintasan** pada kalimat di atas adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Kemampuan bertahan hidup (survival rate)', correct: true },
      { id: 'B', text: 'Tingkat reproduksi seksual' },
      { id: 'C', text: 'Ketahanan terhadap polusi kimia' },
      { id: 'D', text: 'Kecepatan regenerasi jaringan' },
      { id: 'E', text: 'Daya serap nutrisi organik' }
    ],
    correctAnswer: 'A',
    explanation: 'Dalam istilah biologi dan ekologi kelautan, sintasan (survival rate) merujuk pada rasio atau kemampuan organisme untuk bertahan hidup dalam kurun waktu atau kondisi lingkungan tertentu.',
    topic: 'Makna Istilah Ilmiah',
    difficulty: 'Mudah'
  },
  {
    id: 3,
    readingText: '(1) Revolusi kendaraan otonom menuntut integrasi sensor canggih seperti LiDAR, radar, dan kamera beresolusi tinggi. (2) Namun, tantangan terberat bukan terletak pada perangkat keras, melainkan pada algoritma pengambilan keputusan waktu nyata (*real-time*). (3) Sistem kecerdasan buatan harus mampu membedakan anomali visual dinamis, seperti pejalan kaki yang tiba-tiba menyeberang di tengah cuaca berkabut tebal. (4) Kegagalan interpretasi data visual sekecil apa pun dapat berakibat fatal bagi keselamatan pengguna jalan.',
    text: 'Pernyataan yang **tidak sesuai** dengan teks wacana di atas adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'LiDAR dan kamera resolusi tinggi merupakan komponen perangkat keras kendaraan otonom.' },
      { id: 'B', text: 'Tantangan terbesar dalam kendaraan otonom terletak semata-mata pada ketersediaan perangkat keras sensor.', correct: true },
      { id: 'C', text: 'Algoritma harus mampu memproses data dan mengambil keputusan seketika.' },
      { id: 'D', text: 'Kondisi cuaca berkabut dapat memicu anomali visual pada sistem kemudi otomatis.' },
      { id: 'E', text: 'Kesalahan interpretasi visual berisiko mengancam keselamatan lalu lintas.' }
    ],
    correctAnswer: 'B',
    explanation: 'Kalimat (2) secara eksplisit menyatakan bahwa tantangan terberat bukan terletak pada perangkat keras, melainkan pada algoritma pengambilan keputusan waktu nyata.',
    topic: 'Kesesuaian Informasi Teks',
    difficulty: 'Mudah'
  },
  {
    id: 4,
    text: 'Pilihlah pasangan kata yang memiliki hubungan semantik analogis paling sepadan:\n**Autodidak : Belajar = ...**',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Nomaden : Berpindah', correct: true },
      { id: 'B', text: 'Dokter : Resep' },
      { id: 'C', text: 'Penulis : Royalti' },
      { id: 'D', text: 'Masinis : Lokomotif' },
      { id: 'E', text: 'Guru : Sekolah' }
    ],
    correctAnswer: 'A',
    explanation: 'Autodidak adalah sifat/perilaku seseorang yang cara belajarnya dilakukan secara mandiri tanpa guru formal. Secara analogis, nomaden adalah sifat kelompok yang cara hidupnya berpindah-pindah tempat tanpa pemukiman tetap.',
    topic: 'Analogi Semantik Kata',
    difficulty: 'Sedang'
  },
  {
    id: 5,
    readingText: '(1) Di tengah transisi energi global, hidrogen hijau (*green hydrogen*) digadang-gadang sebagai pilar dekarbonisasi industri berat. (2) Berbeda dari hidrogen abu-abu yang diproduksi dari gas alam fosil, hidrogen hijau dihasilkan melalui proses elektrolisis air bertenaga listrik energi terbarukan. (3) Namun, tingginya biaya modal membran elektroliser dan inefisiensi transmisi logistik cair masih menjadi rintangan komersialisasi massal.',
    text: 'Hubungan antara kalimat (2) dan kalimat (3) pada teks tersebut adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Hubungan sebab-akibat' },
      { id: 'B', text: 'Hubungan penegasan analogis' },
      { id: 'C', text: 'Hubungan pertentangan / kontras rintangan', correct: true },
      { id: 'D', text: 'Hubungan penambahan rincian kronologis' },
      { id: 'E', text: 'Hubungan pembuktian hipotesis' }
    ],
    correctAnswer: 'C',
    explanation: 'Kalimat (2) menjelaskan keunggulan produksi hidrogen hijau ramah lingkungan, sedangkan kalimat (3) diawali konjungsi pertentangan "Namun" yang menyajikan rintangan/kendala ekonomi dan teknisnya.',
    topic: 'Hubungan Antarkalimat',
    difficulty: 'Sedang'
  },
  {
    id: 6,
    text: 'Kata bentukan yang mengalami proses afiksasi yang **tidak tepat** adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Mengonsumsi (dari kata dasar konsumsi)' },
      { id: 'B', text: 'Memengaruhi (dari kata dasar pengaruh)' },
      { id: 'C', text: 'Menyukseskan (dari kata dasar sukses)' },
      { id: 'D', text: 'Mentolerir (dari kata dasar toleransi/tolerir)', correct: true },
      { id: 'E', text: 'Mengubah (dari kata dasar ubah)' }
    ],
    correctAnswer: 'D',
    explanation: 'Berdasarkan kaidah EYD/PUEBI, imbuhan meN- bertemu fonem /t/ lebur menjadi menoleransi / menolerir (bukan mentolerir).',
    topic: 'Morfologi & Kaidah Afiksasi',
    difficulty: 'Sedang'
  },
  {
    id: 7,
    text: 'Sinonim kata **komprehensif** dalam konteks evaluasi akademik adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Menyeluruh dan berwawasan luas', correct: true },
      { id: 'B', text: 'Sederhana dan ringkas' },
      { id: 'C', text: 'Parsial dan terbatas' },
      { id: 'D', text: 'Rumit dan membingungkan' },
      { id: 'E', text: 'Cepat dan instan' }
    ],
    correctAnswer: 'A',
    explanation: 'Komprehensif bermakna bersifat mampu menangkap banyak hal dengan baik; luas dan lengkap tentang ruang lingkup atau isi; menyeluruh.',
    topic: 'Sinonim Kontekstual',
    difficulty: 'Mudah'
  },
  {
    id: 8,
    text: 'Antonim yang paling tepat untuk kata **pragmatis** adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Idealis', correct: true },
      { id: 'B', text: 'Praktis' },
      { id: 'C', text: 'Realistis' },
      { id: 'D', text: 'Oportunis' },
      { id: 'E', text: 'Materialistis' }
    ],
    correctAnswer: 'A',
    explanation: 'Pragmatis menekankan sisi kepraktisan dan manfaat nyata yang terukur secara langsung, sedangkan idealis berorientasi pada prinsip, nilai, cita-cita luhur, dan kesempurnaan teori.',
    topic: 'Antonim Kata',
    difficulty: 'Mudah'
  },
  {
    id: 9,
    readingText: '(1) Urbanisasi pesat di kota-kota megapolitan Asia Tenggara telah memperparah fenomena pulau panas perkotaan (*urban heat island*). (2) Penebangan tutupan pohon untuk pembangunan jalan beton dan gedung kaca menyebabkan panas radiasi matahari terperangkap di permukaan tanah. (3) Akibatnya, temperatur udara di pusat kota bisa 3 hingga 5 derajat Celsius lebih tinggi dibanding kawasan pinggiran.',
    text: 'Penyebab utama timbulnya *urban heat island* menurut teks adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Hilangnya vegetasi pepohonan dan dominasi material penimbun panas seperti beton dan kaca.', correct: true },
      { id: 'B', text: 'Tingginya curah hujan di kawasan pegunungan pinggiran kota.' },
      { id: 'C', text: 'Kenaikan permukaan air laut di muara sungai megapolitan.' },
      { id: 'D', text: 'Penurunan kepadatan penduduk di pusat kota.' },
      { id: 'E', text: 'Kurangnya fasilitas pendingin ruangan di pemukiman warga.' }
    ],
    correctAnswer: 'A',
    explanation: 'Kalimat (2) menegaskan bahwa penggantian pohon dengan jalan beton dan gedung kaca yang memerangkap radiasi matahari merupakan penyebab utama fenomena pulau panas perkotaan.',
    topic: 'Analisis Sebab-Akibat Teks',
    difficulty: 'Mudah'
  },
  {
    id: 10,
    text: 'Kalimat yang mengandung ungkapan idiomatis bermakna konotatif adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Pria itu membasuh tangannya dengan sabun antiseptik di wastafel.' },
      { id: 'B', text: 'Pejabat tersebut **cuci tangan** dari tanggung jawab atas kegagalan proyek infrastruktur daerahnya.', correct: true },
      { id: 'C', text: 'Ibu membeli sayuran segar langsung dari petani di pasar tradisional.' },
      { id: 'D', text: 'Siswa kelas XII giat belajar untuk persiapan ujian akhir semester.' },
      { id: 'E', text: 'Matahari pagi menyinari lapangan sekolah dengan hangat.' }
    ],
    correctAnswer: 'B',
    explanation: '"Cuci tangan" pada kalimat B bermakna kiasan/idiomatis yang berarti tidak mau ikut campur atau berlepas diri dari tanggung jawab atas suatu kesalahan.',
    topic: 'Semantik & Makna Konotatif',
    difficulty: 'Mudah'
  },
  {
    id: 11,
    text: 'Manakah kalimat berikut yang menggunakan tanda baca koma (,) secara tepat?',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Meskipun hujan lebat mengguyur Jakarta sejak pagi, para peserta seminar tetap hadir tepat waktu.', correct: true },
      { id: 'B', text: 'Para peserta seminar tetap hadir tepat waktu, meskipun hujan lebat mengguyur sejak pagi.' },
      { id: 'C', text: 'Ayah membaca koran di teras, sedangkan, adik bermain catur di ruang tamu.' },
      { id: 'D', text: 'Jika kamu rajin belajar, maka kamu pasti akan lolos seleksi PTN impian.' },
      { id: 'E', text: 'Saya ingin membeli buku itu tetapi, uang di dompet saya tidak mencukupi.' }
    ],
    correctAnswer: 'A',
    explanation: 'Tanda koma digunakan untuk memisahkan anak kalimat yang mendahului induk kalimat (posisi depan). Opsi B salah karena anak kalimat di belakang induk kalimat tidak memakai koma.',
    topic: 'Pungtuasi & Kaidah Ejaan',
    difficulty: 'Sedang'
  },
  {
    id: 12,
    text: 'Pilihlah kalimat yang memiliki susunan subjek, predikat, dan objek (S-P-O) yang paling efektif:',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Kementerian Pendidikan meluncurkan program akselerasi literasi digital nasional.', correct: true },
      { id: 'B', text: 'Tentang program literasi telah diumumkan oleh Menteri kepada publik.' },
      { id: 'C', text: 'Di dalam ruang rapat para delegasi yang sedang mendiskusikan draf undang-undang.' },
      { id: 'D', text: 'Bagi seluruh siswa baru wajib mengisi formulir pendaftaran secara daring.' },
      { id: 'E', text: 'Melalui penelitian ini telah berhasil membuktikan efektivitas vaksin baru.' }
    ],
    correctAnswer: 'A',
    explanation: 'Kalimat A memiliki struktur gramatikal baku dan utuh: S (Kementerian Pendidikan), P (meluncurkan), O (program akselerasi literasi digital nasional). Opsi lain mengalami kerancuan subjek karena preposisi di awal.',
    topic: 'Kalimat Efektif & Struktur Gramatikal',
    difficulty: 'Sedang'
  },
  {
    id: 13,
    text: 'Kata **konstelasi** dalam bidang ilmu sosial-politik memiliki makna...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Tatanan atau susunan kekuatan, hubungan, dan konfigurasi geopolitik antarpihak.', correct: true },
      { id: 'B', text: 'Kumpulan gugusan bintang di langit malam' },
      { id: 'C', text: 'Perdebatan hukum di pengadilan mahkamah agung' },
      { id: 'D', text: 'Perjanjian gencatan senjata militer' },
      { id: 'E', text: 'Pembentukan lembaga riset ilmu pengetahuan' }
    ],
    correctAnswer: 'A',
    explanation: 'Secara sosiopolitik, konstelasi bermakna tatanan hubungan, peta kekuatan politik, atau konfigurasi interaksi antaraktor kekuasaan.',
    topic: 'Pemahaman Konteks Istilah Khusus',
    difficulty: 'Sedang'
  },
  {
    id: 14,
    text: 'Perhatikan analogi hubungan berikut:\n**Mikroskop : Sel = Teleskop : ...**',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Komet', correct: true },
      { id: 'B', text: 'Kuman' },
      { id: 'C', text: 'Molekul' },
      { id: 'D', text: 'Lensa' },
      { id: 'E', text: 'Laboratorium' }
    ],
    correctAnswer: 'A',
    explanation: 'Mikroskop adalah instrumen untuk mengamati objek mikroskopis (sel), sedangkan teleskop adalah instrumen untuk mengamati objek astronomis yang sangat jauh di antariksa (komet/bintang).',
    topic: 'Analogi Hubungan Alat dan Objek',
    difficulty: 'Mudah'
  },
  {
    id: 15,
    text: 'Kalimat yang mengandung pleonasme (pemborosan kata) adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Para hadirin sekalian dimohon untuk segera berdiri menyanyikan lagu Indonesia Raya.', correct: true },
      { id: 'B', text: 'Siswa-siswi berbaris dengan tertib di halaman sekolah.' },
      { id: 'C', text: 'Harga kebutuhan pokok mengalami kenaikan menjelang hari raya.' },
      { id: 'D', text: 'Pertemuan tersebut menghasilkan kesepakatan bilateral yang menguntungkan.' },
      { id: 'E', text: 'Guru membagikan lembar soal kepada peserta try out.' }
    ],
    correctAnswer: 'A',
    explanation: '"Para hadirin sekalian" adalah bentuk mubazir/pleonastis karena "para", "hadirin", dan "sekalian" semuanya telah menunjukkan makna jamak. Cukup gunakan "Hadirin dimohon..." atau "Para undangan...".',
    topic: 'Kehematan Kalimat & Anti-Pleonasme',
    difficulty: 'Mudah'
  },
  {
    id: 16,
    text: 'Kata serapan yang penulisannya sesuai dengan kaidah EYD Edisi V adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Frekuensi, standardisasi, hierarki', correct: true },
      { id: 'B', text: 'Frekwensi, standarisasi, hirarki' },
      { id: 'C', text: 'Frekuensi, standardisasi, hirarki' },
      { id: 'D', text: 'Frekwensi, standardisasi, hierarki' },
      { id: 'E', text: 'Frekuensi, standarisasi, hierarki' }
    ],
    correctAnswer: 'A',
    explanation: 'Bentuk baku menurut KBBI dan EYD V: frekuensi (bukan frekwensi), standardisasi (bukan standarisasi), dan hierarki (bukan hirarki).',
    topic: 'Kata Serapan Baku',
    difficulty: 'Sedang'
  },
  {
    id: 17,
    text: 'Makna idiom **kambing hitam** dalam teks berita adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Pihak yang dipersalahkan atas suatu kesalahan atau kegagalan yang terjadi.', correct: true },
      { id: 'B', text: 'Ternak yang memiliki nilai ekonomis tinggi' },
      { id: 'C', text: 'Orang yang paling berkuasa di dalam organisasi' },
      { id: 'D', text: 'Penyelidik independen kasus korupsi' },
      { id: 'E', text: 'Saksi kunci di persidangan pidana' }
    ],
    correctAnswer: 'A',
    explanation: 'Kambing hitam bermakna orang atau pihak yang dalam suatu peristiwa sebenarnya tidak bersalah, tetapi dituduh atau dijadikan tumpuan kesalahan.',
    topic: 'Makna Idiom',
    difficulty: 'Mudah'
  },
  {
    id: 18,
    text: 'Hubungan perlawanan antarkalimat yang paling tepat dihubungkan dengan konjungsi...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Akan tetapi', correct: true },
      { id: 'B', text: 'Sehingga' },
      { id: 'C', text: 'Oleh karena itu' },
      { id: 'D', text: 'Selain itu' },
      { id: 'E', text: 'Bahkan' }
    ],
    correctAnswer: 'A',
    explanation: '"Akan tetapi" merupakan konjungsi antarkalimat yang berfungsi menyatakan pertentangan/perlawanan secara gramatikal baku.',
    topic: 'Konjungsi Antarkalimat',
    difficulty: 'Mudah'
  },
  {
    id: 19,
    text: 'Penulisan gabungan kata yang terikat secara tepat adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Pascapanen, tunanetra, mancanegara', correct: true },
      { id: 'B', text: 'Pasca panen, tuna netra, manca negara' },
      { id: 'C', text: 'Pascapanen, tuna netra, mancanegara' },
      { id: 'D', text: 'Pasca panen, tunanetra, manca negara' },
      { id: 'E', text: 'Pasca-panen, tuna-netra, manca-negara' }
    ],
    correctAnswer: 'A',
    explanation: 'Bentuk terikat seperti pasca-, tuna-, dan manca- wajib ditulis serangkai dengan kata dasar yang mengikutinya (pascapanen, tunanetra, mancanegara).',
    topic: 'Penulisan Bentuk Terikat',
    difficulty: 'Sedang'
  },
  {
    id: 20,
    text: 'Kalimat majemuk bertingkat dengan anak kalimat pengganti keterangan waktu adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Ketika fajar menyingsing di ufuk timur, para nelayan mulai merapikan jaring tangkapan mereka.', correct: true },
      { id: 'B', text: 'Mereka bekerja keras agar target produksi bulanan tercapai.' },
      { id: 'C', text: 'Ibu memasak sup ayam karena ayah sedang kurang enak badan.' },
      { id: 'D', text: 'Dia berbicara sangat pelan sehingga pendengar di baris belakang tidak mendengarnya.' },
      { id: 'E', text: 'Meskipun badai menghadang, kapal kargo tetap melanjutkan pelayaran.' }
    ],
    correctAnswer: 'A',
    explanation: 'Klausa "Ketika fajar menyingsing di ufuk timur" berfungsi sebagai anak kalimat keterangan waktu (ditandai konjungsi subordinatif temporal "ketika").',
    topic: 'Klausa & Kalimat Majemuk Bertingkat',
    difficulty: 'Sedang'
  }
];
