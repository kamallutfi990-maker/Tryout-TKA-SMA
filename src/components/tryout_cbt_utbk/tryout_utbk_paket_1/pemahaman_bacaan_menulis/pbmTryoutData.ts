import { UtbkQuestion } from '../types';

const TEKS_1 = `(1) Seni pertunjukan wayang kulit bukan hal yang baru bagi masyarakat Asia Tenggara. (2) Sudah sejak lama, tiap etnis dan bangsa di kawasan ini mempraktikkan jenis kesenian kuno ini. (3) Di wilayah Nusantara, yang terdiri dari banyak pulau dan beraneka ragam etnis, jenis gaya wayang kulit melimpah ditemui di banyak daerah.

(4) Pengaruh agama Hindu dan Budha dari India sangat kuat di kawasan Asia Tenggara. (5) Kebanyakan seni wayang kulit, khususnya di wilayah Nusantara, Malaya, dan Thailand, menampilkan kisah-kisah dari agama tersebut, seperti epik Ramayana dan Mahabarata. (6) Penyebaran agama Hindu dan buddha dilakukan melalui media wayang yang sudah tidak asing bagi penduduk di Asia Tenggara. (7) Oleh karena itu, secara historis dapat dikatakan bahwa wayang berperan sebagai media diplomasi pertemuan budaya serta kepercayaan lokal antara Asia Tenggara dan India.
*(Diadaptasi dari ITB I,Vis.Art Des, 2013)*`;

const TEKS_2 = `(1) Saat ini banyak teknologi yang berkembang di dunia transportasi sehingga mempermudah aktivitas serta membuat waktu tempuh menjadi lebih cepat. (2) Kehadiran berbagai teknologi di bidang transportasi juga membuat banyak hal dalam aktivitas sehari-hari menjadi lebih efisien. (3) Bahkan, ke depannya diperkirakan berbagai teknologi canggih di bidang transportasi akan semakin banyak. (4) Berbagai moda transportasi tersebut tidak hanya mengedepankan kecepatan, tetapi juga kenyamanan dan keindahan.

(5) Flying cars atau mobil terbang sedang dikembangkan oleh sebuah perusahaan transportasi di dunia. (6) Kendaraan ini melibatkan pengembangan pesawat lepas landas dan pendaratan vertikal (VTOL), yang kemungkinan besar akan memiliki desain sayap tetap. (7) Proyek ini bertujuan untuk menghadirkan taksi versi udara ke kota-kota besar dan padat di seluruh dunia, pembuatan kendaraan menjadi otonom, serta dihilangkannya elemen kesalahan manusia. (8) Dengan demikian, masalah kemacetan lalu lintas di beberapa kota besar dapat diatasi dengan mudah.
*(Diadaptasi dari https://jalantikus.com/)*`;

const TEKS_3 = `(1) Hikmat adalah seorang guru inspiratif di suatu sekolah luar biasa di Jawa Tengah. (2) Hikmat yang juga seorang penyandang tunadaksa mengaku pertama kali tertarik menjadi guru ketika ia mengajarkan musik kepada anak-anak difabel. (3) Dari aktivitas mengajar anak-anak difabel, ia memahami nilai ketulusan dan kepedulian. (4) Tidak jarang anak-anak didiknya menghapuskan papan tulis, merapikan alat belajar, hingga membantu mendorongkan skateboard yang digunakan untuk mempermudah mobilitasnya. (5) Dalam pembelajaran tatap muka, kelas Hikmat dirancang sesuai kondisinya. (6) Peralatan pendukung belajar, seperti papan tulis, dibuat dengan ukuran rendah. (7) Siswa-siswanya pun duduk di lantai saat belajar di ruang kelasnya.

(8) Ia melihat program pemerintah terhadap anak-anak difabel perlu ditingkatkan pada masa mendatang. (9) Menurutnya, klasifikasi kurikulum harus lebih disempurnakan sesuai dengan kondisi anak didik, seperti tunadaksa, tunarungu, dan tunagrahita. (10) Ia berharap agar peserta didik normal yang diberi pemahaman tentang cara memperlakukan anak-anak disabilitas dengan baik.
*(Diadaptasi dari https://gtk.kemendikbud.go.id/)*`;

const TEKS_4 = `(1) Alpukat memiliki ciri kulit berwarna hijau dengan warna kekuning-kuningan di pinggirnya. (2) Biji alpukat yang berukuran cukup besar berwarna cokelat. (3) Daging alpukat berwarna hijau muda. (4) Dari segi rasa, buah ini cenderung hambar bila langsung dikonsumsi. (5) ... (6) Alpukat yang berwarna hijau tua mengandung lemak baik. (7) Bagi orang sehat, alpukat dapat dikonsumsi dalam jumlah banyak karena memiliki banyak nutrisi.

(8) Nutrisi yang terkandung dalam alpukat adalah vitamin E, kalium, pitosterol, asam oleat tak jenuh, dan folat. (9) Selain itu, alpukat juga mengandung asam lemak, vitamin C, kolagen, lemak jenuh tunggal, Omega 9, dan antioksidan. (10) Nutrisi tersebut bermanfaat bagi tubuh manusia, antara lain dapat menyehatkan jantung, menurunkan berat badan bagi yang sedang diet ketat, serta menjaga kesehatan kulit. (11) Oleh karena itu, alpukat dibudidayakan secara luas oleh masyarakat untuk dikonsumsi dan dijadikan salah satu buah yang banyak diperjualbelikan.
*(Diadaptasi dari https://sekolahnesia.com/)*`;

const TEKS_5 = `(1) Fenomena pemanasan global semakin memuncak saat ini. (2) Bila berlangsung secara terus-menerus, lapisan ozon berubah menjadi tipis karena pemanasan global. (3) Akibatnya, sinar ultraviolet mengarah ke bumi secara langsung tanpa halangan. (4) Keadaan bumi yang suhunya selalu mengalami peningkatan akan membuat udara sekitar menjadi panas. (5) Dampak yang dirasakan dari adanya fenomena pemanasan global adalah mencairnya es di Kutub Utara.

(6) Terjadinya pemanasan global disebabkan oleh besarnya volume gas karbon dioksida. (7) Gas karbon dioksida yang menyelimuti bumi berasal dari asap rokok, pabrik, dan kendaraan bermotor. (8) Itulah penyumbang terbesar gas karbon dioksida yang berkembang di bumi. (9) Selain itu, karbon dioksida juga bersumber dari alih fungsi lahan hutan. (10) Akibatnya, jumlah pohon di bumi semakin menipis. (11) Dengan demikian, lapisan ozon pun menjadi tipis. (12) Tidak heran bila pemanasan global makin hari makin parah karena tidak diimbangi dengan menanaman pohon.
*(Diadaptasi dari https://sekolahnesia.com/)*`;

export const pbmTryoutData: UtbkQuestion[] = [
  // Teks 1 (Soal No. 1 - 4)
  {
    id: 1,
    readingText: TEKS_1,
    text: 'Perumpamaan pada bacaan di atas dapat ditemukan pada kalimat ...',
    type: 'multiple',
    options: [
      { id: 'A', text: '(1)' },
      { id: 'B', text: '(2)' },
      { id: 'C', text: '(4)' },
      { id: 'D', text: '(5)' },
      { id: 'E', text: '(7)', correct: true }
    ],
    correctAnswer: 'E',
    explanation: 'Jawaban: E (7)\n\nPembahasan: Perumpamaan/metafora adalah perbandingan tidak langsung suatu hal dengan hal lain. Pada kalimat (7), wayang diumpamakan/dianalogikan memiliki peran sebagai media diplomasi pertemuan budaya serta kepercayaan lokal antara Asia Tenggara dan India.',
    topic: 'Gaya Bahasa & Perumpamaan / Metafora',
    difficulty: 'Sedang'
  },
  {
    id: 2,
    readingText: TEKS_1,
    text: 'Perubahan tanda koma yang salah terdapat pada kalimat ... (Catatan: Padanan kata / sinonim yang paling tepat untuk kata "kuno" pada kalimat 2 adalah ...)',
    type: 'multiple',
    options: [
      { id: 'A', text: 'tradisional' },
      { id: 'B', text: 'terdahulu', correct: true },
      { id: 'C', text: 'terbelakang' },
      { id: 'D', text: 'tertinggal' },
      { id: 'E', text: 'sederhana' }
    ],
    correctAnswer: 'B',
    explanation: 'Jawaban: B (terdahulu)\n\nPembahasan: Berdasarkan konteks kalimat (2) ("...mempraktikkan jenis kesenian kuno ini"), kata "kuno" bermakna zaman dahulu/terdahulu. Soal ini menguji padanan kata (sinonim) dari kata bertanda khusus/tertentu pada teks bacaan.',
    topic: 'Makna Kata & Padanan Kontekstual',
    difficulty: 'Mudah'
  },
  {
    id: 3,
    readingText: TEKS_1,
    text: 'Pesan tersirat dari paragraf (2) adalah ...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Penggunaan budaya lokal yang sudah ada di dalam masyarakat mempermudah penyebaran suatu kepercayaan.', correct: true },
      { id: 'B', text: 'Pendidikan spiritual akan berhasil baik bila dilakukan oleh seorang pendidik yang memahami kesenian daerah.' },
      { id: 'C', text: 'Cara menyebarkan suatu paham tertentu dapat dilakukan dengan menggunakan kebudayaan sebagai wadah.' },
      { id: 'D', text: 'Seni pertunjukan merupakan sarana yang efektif untuk mengajak pemeluk suatu agama agar rajin beribadah.' },
      { id: 'E', text: 'Pemeluk suatu agama perlu memiliki apresiasi yang tinggi terhadap kesenian agar menjadi pemeluk yang taat.' }
    ],
    correctAnswer: 'A',
    explanation: 'Jawaban: A\n\nPembahasan: Paragraf (2) menjelaskan bagaimana ajaran Hindu-Buddha dari India berhasil menyebar di Asia Tenggara karena menggunakan kesenian wayang yang sudah akrab dan mendarah daging di tengah masyarakat lokal sebagai sarananya.',
    topic: 'Pesan Tersirat & Makna Implisit Paragraf',
    difficulty: 'Sedang'
  },
  {
    id: 4,
    readingText: TEKS_1,
    text: 'Sikap penulis pada bacaan tersebut adalah ...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'kritis' },
      { id: 'B', text: 'apatis' },
      { id: 'C', text: 'sugestif' },
      { id: 'D', text: 'netral', correct: true },
      { id: 'E', text: 'realistis' }
    ],
    correctAnswer: 'D',
    explanation: 'Jawaban: D (netral)\n\nPembahasan: Penulis memaparkan informasi sejarah penyebaran wayang dan pengaruhnya secara objektif, informatif, dan tidak memihak (netral).',
    topic: 'Sikap / Tone Penulis',
    difficulty: 'Mudah'
  },

  // Teks 2 (Soal No. 5 - 8)
  {
    id: 5,
    readingText: TEKS_2,
    text: 'Kata taksi dalam kalimat (7) memiliki hubungan hierarkis dengan kata ...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'pesawat' },
      { id: 'B', text: 'mobil' },
      { id: 'C', text: 'udara' },
      { id: 'D', text: 'kendaraan', correct: true },
      { id: 'E', text: 'perusahaan' }
    ],
    correctAnswer: 'D',
    explanation: 'Jawaban: D (kendaraan)\n\nPembahasan: Hubungan hierarkis (hiponim-hipernim): Taksi merupakan bentuk khusus (hiponim) dari konsep umum kendaraan (hipernim/kategori tingkat atas).',
    topic: 'Hubungan Semantik Hierarkis (Hiponim-Hipernim)',
    difficulty: 'Mudah'
  },
  {
    id: 6,
    readingText: TEKS_2,
    text: 'Frasa "untuk menghadirkan taksi versi udara ke kota-kota besar dan padat di seluruh dunia, pembuatan kendaraan menjadi otonom, serta dihilangkannya elemen kesalahan manusia" pada kalimat (7) akan menjadi benar susunannya jika diubah menjadi ...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'untuk kehadiran taksi versi udara ke kota-kota besar dan padat di seluruh dunia, membuat kendaraan menjadi otonom, serta menghilangkan elemen kesalahan manusia.' },
      { id: 'B', text: 'untuk menghadirkan taksi versi udara ke kota-kota besar dan padat di seluruh dunia, pembuatan kendaraan menjadi otonom, serta menghilangkan elemen kesalahan manusia.' },
      { id: 'C', text: 'untuk menghadirkan taksi versi udara ke kota-kota besar dan padat di seluruh dunia, membuat kendaraan menjadi otonom, serta menghilangnya elemen kesalahan manusia.' },
      { id: 'D', text: 'untuk kehadiran taksi versi udara ke kota-kota besar dan padat di seluruh dunia, pembuatan kendaraan menjadi otonom, serta menghilangkan elemen kesalahan manusia.' },
      { id: 'E', text: 'untuk menghadirkan taksi versi udara ke kota-kota besar dan padat di seluruh dunia, membuat kendaraan menjadi otonom, serta menghilangkan elemen kesalahan manusia.', correct: true }
    ],
    correctAnswer: 'E',
    explanation: 'Jawaban: E\n\nPembahasan: Kalimat rincian membutuhkan kesejajaran bentuk (paralelisme) kata kerja aktif berimbuhan me-kan:\n"... menghadirkan taksi versi udara ..., membuat kendaraan menjadi otonom, serta menghilangkan elemen kesalahan manusia."',
    topic: 'Kesejajaran Bentuk (Paralelisme Kalimat)',
    difficulty: 'Sedang'
  },
  {
    id: 7,
    readingText: TEKS_2,
    text: 'Tujuan penulisan kalimat (3) pada bacaan tersebut adalah untuk ...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'menggambarkan informasi pada kalimat sebelumnya' },
      { id: 'B', text: 'menjelaskan informasi pada kalimat sebelumnya' },
      { id: 'C', text: 'memerinci informasi pada kalimat sebelumnya' },
      { id: 'D', text: 'mempertegas informasi pada kalimat sebelumnya', correct: true },
      { id: 'E', text: 'membuktikan informasi pada kalimat sebelumnya' }
    ],
    correctAnswer: 'D',
    explanation: 'Jawaban: D (mempertegas informasi pada kalimat sebelumnya)\n\nPembahasan: Kata konjungsi penegas "Bahkan" pada awal kalimat (3) berfungsi menguatkan atau mempertegas pernyataan sebelumnya mengenai pesatnya perkembangan dan efisiensi teknologi transportasi.',
    topic: 'Tujuan Penulisan Kalimat & Fungsi Retoris',
    difficulty: 'Mudah'
  },
  {
    id: 8,
    readingText: TEKS_2,
    text: 'Fakta dalam bacaan tersebut terdapat pada ...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'kalimat (1)' },
      { id: 'B', text: 'kalimat (2)' },
      { id: 'C', text: 'kalimat (3)' },
      { id: 'D', text: 'kalimat (4)' },
      { id: 'E', text: 'kalimat (5)', correct: true }
    ],
    correctAnswer: 'E',
    explanation: 'Jawaban: E (kalimat 5)\n\nPembahasan: Kalimat (5) (Flying cars atau mobil terbang sedang dikembangkan oleh sebuah perusahaan...) menyatakan peristiwa/kegiatan nyata yang sedang berjalan (fakta objektif), sedangkan kalimat lainnya memuat perkiraan/prediksi dan opini.',
    topic: 'Fakta vs Opini dalam Teks',
    difficulty: 'Mudah'
  },

  // Teks 3 (Soal No. 9 - 12)
  {
    id: 9,
    readingText: TEKS_3,
    text: 'Apabila gagasan pada bacaan tersebut dipisahkan menjadi dua paragraf yang padu dan utuh, pengelompokan kalimatnya adalah ...',
    type: 'multiple',
    options: [
      { id: 'A', text: '(1-2) dan (3-4-5-6-7-8-9-10)' },
      { id: 'B', text: '(1-2-3) dan (4-5-6-7-8-9-10)' },
      { id: 'C', text: '(1-2-3-4) dan (5-6-7-8-9-10)' },
      { id: 'D', text: '(1-2-3-4-5-6) dan (7-8-9-10)' },
      { id: 'E', text: '(1-2-3-4-5-6-7) dan (8-9-10)', correct: true }
    ],
    correctAnswer: 'E',
    explanation: 'Jawaban: E ((1-2-3-4-5-6-7) dan (8-9-10))\n\nPembahasan: Kalimat (1) sampai (7) menceritakan latar belakang profil, aktivitas, dan kondisi kelas mengajar Pak Hikmat. Mulai kalimat (8), topik beralih ke pandangan, aspirasi, dan harapan Pak Hikmat terhadap kebijakan kurikulum pemerintah.',
    topic: 'Pembagian & Kepaduan Paragraf (Kohesi-Koherensi)',
    difficulty: 'Sedang'
  },
  {
    id: 10,
    readingText: TEKS_3,
    text: 'Gagasan dalam kalimat (2) dapat diungkapkan melalui kalimat ...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Mengajarkan musik untuk anak-anak difabel mengantarkan Hikmat menekuni profesi guru.', correct: true },
      { id: 'B', text: 'Anak-anak difabel memberi inspirasi bagi Hikmat untuk menjadi guru musik.' },
      { id: 'C', text: 'Berbekal pengalaman mengajarkan musik untuk anak difabel, Hikmat meraih menjadi guru.' },
      { id: 'D', text: 'Profesi guru musik bagi Hikmat bermula ketika ia harus mengajar anak-anak difabel.' },
      { id: 'E', text: 'Hikmat memilih menjadi guru untuk anak-anak difabel karena ia pernah mengajarkan musik.' }
    ],
    correctAnswer: 'A',
    explanation: 'Jawaban: A\n\nPembahasan: Kalimat inti (2) menyampaikan bahwa pengalaman Hikmat saat mengajarkan musik kepada anak-anak difabel menjadi pemantik awal ketertarikannya menekuni profesi guru.',
    topic: 'Parafrasa & Restrukturisasi Gagasan Kalimat',
    difficulty: 'Sedang'
  },
  {
    id: 11,
    readingText: TEKS_3,
    text: 'Kalimat yang tidak logis dalam bacaan tersebut adalah kalimat ...',
    type: 'multiple',
    options: [
      { id: 'A', text: '(1)' },
      { id: 'B', text: '(4)' },
      { id: 'C', text: '(8)' },
      { id: 'D', text: '(9)' },
      { id: 'E', text: '(10)', correct: true }
    ],
    correctAnswer: 'E',
    explanation: 'Jawaban: E (10)\n\nPembahasan: Kalimat (10) rancu secara struktur karena memuat konjungsi agar dan penyemat yang di predikat ("berharap agar peserta didik normal yang diberi..."), sehingga menghilangkan predikat utama klausa dan membuat maknanya menggantung/tidak logis.',
    topic: 'Kelogisan & Ketatabahasaan Kalimat Efektif',
    difficulty: 'Sedang'
  },
  {
    id: 12,
    readingText: TEKS_3,
    text: 'Manakah pernyataan yang menampilkan situasi serupa dengan situasi dalam bacaan tersebut?',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Selesai KKN di desa penghasil kopi, dia bertekad meneruskan usaha penggilingan kopi warisan keluarganya.' },
      { id: 'B', text: 'Keikutsertaannya dalam cabang olahraga berkuda dimulai sejak dia bekerja sebagai buruh di peternakan kuda.', correct: true },
      { id: 'C', text: 'Meski sempat terkendala, misi penyelamatan terumbu karang dapat tepat dilakukan dengan peralatan seadanya.' },
      { id: 'D', text: 'Pembangunan perpustakaan desa ini terinspirasi gerakan literasi membaca yang ramai digalakkan pemerintah.' },
      { id: 'E', text: 'Aplikasi penjualan hasil panen ini dibuat mandiri oleh sekelompok petani muda untuk memperluas jaringan pemasaran.' }
    ],
    correctAnswer: 'B',
    explanation: 'Jawaban: B\n\nPembahasan: Situasi pada teks menggambarkan seseorang yang menemukan jalan/minat profesinya berawal dari pengalaman aktivitas sebelumnya. Opsi B memiliki analogi situasi yang paling serupa: minat menekuni olahraga berkuda diawali dari pengalaman kerjanya di peternakan kuda.',
    topic: 'Analogi Situasi Kontekstual Teks',
    difficulty: 'Sedang'
  },

  // Teks 4 (Soal No. 13 - 16)
  {
    id: 13,
    readingText: TEKS_4,
    text: 'Bentuk ke-an pada kesehatan dalam kalimat (10) mempunyai kesamaan makna dengan bentuk ke-an dalam kalimat ...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Kedatangan putrinya mengubah suasana rumah menjadi ceria.' },
      { id: 'B', text: 'Arisan bulan depan akan dilaksanakan di kediaman sang ketua.' },
      { id: 'C', text: 'Untuk memperingati kelahiran anaknya, dia mengadakan syukuran.' },
      { id: 'D', text: 'Kedudukan ibu kota negara akan berpindah.' },
      { id: 'E', text: 'Kebahagiaan hidup adalah dambaan semua orang.', correct: true }
    ],
    correctAnswer: 'E',
    explanation: 'Jawaban: E (Kebahagiaan hidup adalah dambaan semua orang.)\n\nPembahasan: Imbuhan ke-an pada kata dasar sifat sehat -> kesehatan menyatakan makna keadaan/kondisi. Hal ini sama dengan kata dasar sifat bahagia -> kebahagiaan (keadaan bahagia).',
    topic: 'Makna Imbuhan (Morfologi Konfiks ke-an)',
    difficulty: 'Mudah'
  },
  {
    id: 14,
    readingText: TEKS_4,
    text: 'Ungkapan yang tepat untuk menyimpulkan situasi bacaan tersebut adalah ...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'alpukat berkhasiat' },
      { id: 'B', text: 'alpukat menyegarkan' },
      { id: 'C', text: 'alpukat bervitamin' },
      { id: 'D', text: 'alpukat menyehatkan', correct: true },
      { id: 'E', text: 'alpukat mengenyangkan' }
    ],
    correctAnswer: 'D',
    explanation: 'Jawaban: D (alpukat menyehatkan)\n\nPembahasan: Paragraf kedua secara spesifik memaparkan ragam nutrisi alpukat beserta manfaatnya bagi kesehatan tubuh, jantung, kulit, dan diet, sehingga kesimpulan paling representatif adalah alpukat menyehatkan.',
    topic: 'Simpulan Ringkas Teks',
    difficulty: 'Mudah'
  },
  {
    id: 15,
    readingText: TEKS_4,
    text: 'Kalimat pasif yang tepat untuk mengisi rumpang pada paragraf (1) adalah ...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Diperlukan penambahan gula atau susu pada alpukat untuk menambah cita rasa.' },
      { id: 'B', text: 'Kita perlu menambah gula dan susu agar alpukat terasa enak.' },
      { id: 'C', text: 'Supaya enak dikonsumsi, alpukat perlu ditambah dengan gula atau susu.', correct: true },
      { id: 'D', text: 'Penambahan alpukat pada gula atau susu diperlukan supaya enak.' },
      { id: 'E', text: 'Susu atau gula yang ditambahkan pada alpukat membuat rasanya menjadi enak.' }
    ],
    correctAnswer: 'C',
    explanation: 'Jawaban: C\n\nPembahasan: Kalimat rumpang berada setelah kalimat rasa alpukat yang hambar. Kalimat pasif yang runtut, koheren, dan efektif adalah: "Supaya enak dikonsumsi, alpukat perlu ditambah dengan gula atau susu." (predikat pasif: ditambah).',
    topic: 'Melengkapi Kalimat Rumpang & Kalimat Pasif',
    difficulty: 'Sedang'
  },
  {
    id: 16,
    readingText: TEKS_4,
    text: 'Kalimat (9) dan (10) dalam bacaan tersebut mengandung hubungan ...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'perujukan' },
      { id: 'B', text: 'perluasan' },
      { id: 'C', text: 'penjelasan', correct: true },
      { id: 'D', text: 'penambahan' },
      { id: 'E', text: 'penguatan' }
    ],
    correctAnswer: 'C',
    explanation: 'Jawaban: C (penjelasan)\n\nPembahasan: Kalimat (9) menyebutkan kandungan nutrisi pada alpukat, lalu kalimat (10) menjelaskan secara mendalam manfaat dari kandungan nutrisi tersebut bagi tubuh manusia.',
    topic: 'Hubungan Keterkaitan Antarkalimat',
    difficulty: 'Mudah'
  },

  // Teks 5 (Soal No. 17 - 20)
  {
    id: 17,
    readingText: TEKS_5,
    text: 'Gagasan pada paragraf (1) akan menjadi lebih mudah dipahami apabila urutan kalimatnya adalah ...',
    type: 'multiple',
    options: [
      { id: 'A', text: '1-4-2-3-5', correct: true },
      { id: 'B', text: '3-1-2-5-4' },
      { id: 'C', text: '3-5-1-2-4' },
      { id: 'D', text: '1-2-3-5-4' },
      { id: 'E', text: '2-3-5-4-1' }
    ],
    correctAnswer: 'A',
    explanation: 'Jawaban: A (1-4-2-3-5)\n\nPembahasan: Urutan sebab-akibat yang logis:\n- Pernyataan umum pemanasan global memuncak (1).\n- Penjelasan kondisi kenaikan suhu bumi (4).\n- Pengandaian berlanjutnya pemanasan yang menipiskan ozon (2).\n- Akibat langsung tembusnya sinar UV (3).\n- Dampak lanjutan mencairnya es kutub (5).',
    topic: 'Keterpaduan & Sistematika Urutan Kalimat',
    difficulty: 'Sedang'
  },
  {
    id: 18,
    readingText: TEKS_5,
    text: 'Dari bacaan tersebut, kalimat yang berpola dasar sama dengan pola dasar kalimat "pupuk organik yang tidak mengandung zat kimia adalah pupuk yang terbuat dari daun-daunan" adalah ....',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Keadaan bumi yang suhunya selalu mengalami peningkatan itu akan membuat udara sekitar menjadi panas. (kalimat 4)' },
      { id: 'B', text: 'Dampak yang dirasakan dari adanya fenomena pemanasan global adalah mencairnya es di Kutub Utara. (kalimat 5)', correct: true },
      { id: 'C', text: 'Terjadi pemanasan global disebabkan oleh besarnya volume gas karbon dioksida. (kalimat 6)' },
      { id: 'D', text: 'Akibatnya, jumlah pohon di bumi semakin menipis. (kalimat 10)' },
      { id: 'E', text: 'Dengan demikian, lapisan ozon pun menjadi tipis. (kalimat 11)' }
    ],
    correctAnswer: 'B',
    explanation: 'Jawaban: B (Dampak yang dirasakan dari adanya fenomena pemanasan global adalah mencairnya es di Kutub Utara.)\n\nPembahasan: Pola dasar kalimat contoh adalah Subjek (S) + Predikat Definisi/Kopula (adalah) + Pelengkap/Objek (Pel/O). Pola yang identik persis menggunakan kopula adalah terdapat pada kalimat (5).',
    topic: 'Analisis Pola Dasar Kalimat (S-P-O-Pel-K)',
    difficulty: 'Sedang'
  },
  {
    id: 19,
    readingText: TEKS_5,
    text: 'Dari bacaan tersebut, frasa yang berpola makna sama dengan frasa "pohon jati" adalah ....',
    type: 'multiple',
    options: [
      { id: 'A', text: 'sinar ultraviolet (kalimat 3)', correct: true },
      { id: 'B', text: 'pemanasan global (kalimat 5)' },
      { id: 'C', text: 'kendaraan bermotor (kalimat 7)' },
      { id: 'D', text: 'lapisan ozon (kalimat 11)' },
      { id: 'E', text: 'penanaman pohon (kalimat 12)' }
    ],
    correctAnswer: 'A',
    explanation: 'Jawaban: A (sinar ultraviolet (kalimat 3))\n\nPembahasan: Frasa pohon jati berpola Nama Golongan / Spesies + Jenis Khususnya (subordinatif atributif nama jenis). Frasa sinar ultraviolet mengikuti struktur serupa (Nama radiasi/pancaran + Jenis spesifiknya).',
    topic: 'Pola Makna Frasa (Semantik Frasa)',
    difficulty: 'Sedang'
  },
  {
    id: 20,
    readingText: TEKS_5,
    text: 'Ungkapan "lapisan ozon berubah menjadi tipis karena pemanasan global" pada kalimat (2) dapat disempurnakan menjadi ....',
    type: 'multiple',
    options: [
      { id: 'A', text: 'lapisan ozon akan menipis karena pemanasan global', correct: true },
      { id: 'B', text: 'penipisan lapisan ozon diakibatkan pemanasan global' },
      { id: 'C', text: 'pemanasan global akan membuat lapisan ozon menjadi tipis' },
      { id: 'D', text: 'terjadinya penipisan ozon karena pemanasan global' },
      { id: 'E', text: 'secara global, pemanasan menyebabkan penipisan lapisan ozon' }
    ],
    correctAnswer: 'A',
    explanation: 'Jawaban: A (lapisan ozon akan menipis karena pemanasan global)\n\nPembahasan: Bentuk predikat aktif intransitif "berubah menjadi tipis" tidak efektif dan bertele-tele; bentuk yang lebih baku, padat, dan alami dalam bahasa Indonesia adalah verba "akan menipis".',
    topic: 'Penyuntingan & Keefektifan Kalimat',
    difficulty: 'Mudah'
  }
];
