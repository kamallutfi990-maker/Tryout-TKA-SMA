export interface IndoLanjutQuestion {
  id: number;
  readingText?: string;
  text: string;
  type: 'multiple' | 'multiple-complex' | 'true-false-table';
  options?: { id: string; text: string; correct?: boolean }[];
  statements?: { id: string; text: string; correct?: boolean; trueLabel?: string; falseLabel?: string }[];
  correctAnswer?: any;
  trueLabel?: string;
  falseLabel?: string;
}

const TEKS_PROPOSAL = `PROPOSAL KEGIATAN
Pemanfaatan Teknologi Digital untuk Meningkatkan Daya Saing UKM Pangan Lokal

Dalam beberapa tahun terakhir, perkembangan teknologi digital telah membuka peluang besar bagi pelaku Usaha Kecil dan Menengah (UKM), khususnya di sektor pangan lokal. Namun, banyak UKM yang belum mampu memanfaatkan teknologi secara optimal karena keterbatasan akses informasi, pelatihan, dan pendanaan. Berdasarkan survei yang dilakukan oleh Dinas Koperasi dan UKM Provinsi Jawa Barat pada 2023, hanya 35% UKM pangan yang aktif menggunakan platform digital untuk pemasaran.

Seiring dengan meningkatnya penggunaan internet dan perangkat digital, konsumen semakin bergeser ke transaksi daring sekitar 60%. Fenomena ini menjadi peluang besar yang belum dimaksimalkan oleh UKM pangan lokal. Misalnya, banyak produk makanan khas daerah memiliki potensi pasar nasional dan bahkan internasional, tetapi belum memiliki strategi pemasaran yang memadai di digital. Di sisi lain, persaingan dengan produk pangan dari industri besar dan waralaba semakin ketat, sehingga inovasi digital menjadi kebutuhan mendesak.

Oleh karena itu, kami mengajukan program pelatihan bertema “Digitalisasi UKM Pangan Lokal” yang bertujuan untuk meningkatkan literasi digital, pemahaman e-commerce, serta keterampilan penggunaan dompet digital dan media sosial sebagai sarana promosi. Program ini dirancang untuk menjangkau 50% pelaku UKM di tiga kabupaten, dengan metode blended learning (daring dan luring), serta pendampingan usaha selama 3 bulan.

Program ini penting karena teknologi digital tidak hanya memperluas pasar, tetapi juga menekan biaya distribusi, meningkatkan efisiensi, dan mempercepat proses transaksi. Berdasarkan data Bank Indonesia, nilai transaksi e-commerce pada 2022 mencapai Rp476 triliun, yang 60% didominasi oleh produk konsumsi rumah tangga, termasuk pangan. Data tersebut menunjukkan adanya kebutuhan akan peningkatan kapasitas pelaku UKM dalam mengakses ekosistem digital.

Dengan adanya pelatihan ini, diharapkan pelaku UKM pangan lokal dapat bersaing secara sehat di pasar digital yang terus berkembang. Usulan program ini akan disampaikan kepada Kementerian Koperasi dan UKM dengan anggaran sebesar Rp450 juta, yang mencakup biaya pelatihan, honor narasumber, pembuatan modul, serta pengembangan platform daring lokal. Program ini juga mendukung Tujuan Pembangunan Berkelanjutan (SDG's), khususnya poin 8 tentang pekerjaan layak dan pertumbuhan ekonomi, serta poin 9 tentang industri, inovasi, dan infrastruktur.

Sumber: www.pusat.or.id/je/ecommerce-ukm2022 dengan penyesuaian oleh penulis soal`;

const TEKS_PUISI_HUESCA = `Kutipan puisi untuk soal nomor 4 - 6!

Huesca jiwa di dunia yang hilang
atas sayap kenangan padamu
adalah derita di sisiku
bayangan berkelebat tinjauan beku
angin bangkit ketika senja
ngingatkan musim gugur akan tiba
aku cemas bisa kehilangan kau
aku cemas pada kecemasanku sendiri
di batu penghabisan ke Huesca
batas terakhir dari kebanggaan kita
kenanglah sayang, dengan mesra
kau kubayangkan di sisiku ada
dan jika untung malang menghampirkan
aku dalam kuburan dangkal
ingatlah sebisu-segala yang indah
dan cintaku yang kekal

(Puisi Huesca karya John Cornford diterjemahkan oleh Chairil Anwar)`;

const TEKS_ULASAN_CIPTAGELAR = `Teks Digital: Ulasan Pengunjung: Eksplorasi Budaya di Kampung Adat Ciptagelar
⭐ 4,8/5 dari 87 ulasan
• 👤 Rini Kartika – ⭐⭐⭐⭐⭐ (Kunjungan: Agustus 2024)
"Pengalaman saya di Kampung Adat Ciptagelar sungguh luar biasa. Udara sejuk dan pemandangan hutan di kaki Gunung Halimun sangat menenangkan. Penduduknya sangat ramah dan terbuka terhadap tamu, tetapi tetap menjaga adat dan tata krama mereka. Saya merasa seperti kembali ke masa lalu, hidup dalam harmoni dengan alam. Sistem pertanian mereka yang masih tradisional sangat menarik untuk dipelajari. Tempat ini cocok untuk siapa pun yang ingin rehat dari hiruk-pikuk kota dan belajar budaya lokal."
• 👤 Arif Nugroho – ⭐⭐⭐☆☆ (Kunjungan: Juli 2023)
"Saya sangat mengapresiasi bagaimana masyarakat Ciptagelar menjaga nilai-nilai adat mereka. Tidak ada listrik atau televisi di rumah-rumah penduduk, tapi justru itu yang membuat suasananya begitu tenang dan damai. Namun, saya merasa beberapa informasi tentang aturan kunjungan dan transportasi masih kurang jelas secara daring. Semoga ke depan bisa dibuat panduan digital agar lebih mudah bagi wisatawan."
• 👤 Linda Mariana – ⭐⭐⭐⭐⭐ (Kunjungan: Mei 2023)
"Kampung ini sungguh unik! Saya mengikuti tur budaya singkat dan berbincang dengan salah satu sesepuh adat. Beliau menjelaskan filosofi hidup mereka yang sangat dalam dan menyentuh hati. Foto-foto yang saya ambil tidak bisa menggambarkan sepenuhnya keindahan dan kedalaman makna yang saya rasakan. Tempat ini lebih dari sekadar wisata, ini adalah pengalaman spiritual dan edukatif."
• 👤 Bagas Permana – ⭐⭐☆☆☆ (Kunjungan: Desember 2022)
"Saya menyukai artikel dan informasi yang saya baca sebelum ke sana, tetapi saat sampai, saya merasa ulas artikel bilang “semua orang pasti jatuh cinta pada Ciptagelar”, tapi menurut saya itu terlalu berlebihan. Penulis artikel bilang memang menarik, tapi mungkin tidak semua orang nyaman dengan keterbatasan teknologi dan fasilitas. Namun, tetap patut dikunjungi jika ingin mengenal budaya Sunda lebih dalam."
• 👤 Melati Dewi – ⭐⭐⭐⭐⭐ (Kunjungan: Oktober 2023)
"Sangat merekomendasikan! Saya ke sana bersama komunitas pecinta budaya, dan kami benar-benar menikmati detik demi detik. Bahkan saat tidak ada sinyal ponsel, kami bisa fokus sepenuhnya pada pengalaman. Saya senang karena penduduk memberi edukasi tentang larangan dan ritual adat secara terbuka. Jangan ragu untuk datang saat ada upacara adat, karena itu momen paling berkesan!"

Teks Cetak: Eksplorasi Budaya yang Otentik di Kampung Adat Ciptagelar
Kampung Adat Ciptagelar, yang terletak di kawasan Gunung Halimun, Sukabumi, Jawa Barat, menjadi salah satu destinasi wisata budaya yang menyuguhkan pengalaman autentik dan reflektif bagi para pengunjung. Berada di ketinggian dengan udara yang sejuk serta lanskap hutan yang asri, kampung ini menawarkan kehidupan masyarakat adat Sunda yang masih memegang teguh nilai-nilai adat dan tata cara warisan leluhur.
Dalam ulasan dari berbagai pengunjung, kesan yang muncul begitu kuat adalah ketenangan dan kedalaman spiritual yang dirasakan selama berada di kampung tersebut. Rini Kartika, salah satu pengunjung, menyampaikannya seperti "kembali ke masa lalu dan hidup dalam harmoni dengan alam." Ia menyoroti keramahan warga serta sistem pertanian tradisional yang masih dijalankan tanpa bantuan teknologi modern. Suasana yang jauh dari kebisingan kota ini dianggap cocok bagi siapa pun yang ingin beristirahat sekaligus belajar dari kearifan lokal.
Hal serupa disampaikan oleh Arif Nugroho, yang mengapresiasi bagaimana masyarakat Ciptagelar menolak penggunaan listrik dan televisi sebagai bagian dari pelestarian adat. Namun, ia juga mencatat perlunya peningkatan informasi daring terkait aturan kunjungan agar wisatawan baru lebih siap dan nyaman. Kritik yang konstruktif ini menjadi masukan berharga bagi pengelola wisata berbasis komunitas.
Salah satu keunikan Ciptagelar terletak pada filosofi hidup warganya, sebagaimana diungkapkan oleh Linda Mariana. Ia mengikuti tur budaya yang dipandu oleh sesepuh adat, dan merasakan kedalaman nilai-nilai spiritual yang dijunjung tinggi oleh masyarakat. Dalam ulasannya, ia menegaskan bahwa tempat ini bukan sekadar destinasi, tetapi ruang untuk menyelami makna hidup yang sederhana namun bermakna.
Meski mendapat pujian, tidak semua pengunjung sepenuhnya setuju dengan pandangan idealis tentang tempat ini. Bagas Permana, misalnya, menyampaikan bahwa kenyataan di lapangan tidak selalu sesuai dengan ekspektasi yang dibangun dari artikel promosi. Menurutnya, tidak semua orang akan nyaman dengan keterbatasan fasilitas dan teknologi. Namun ia tetap menyatakan bahwa Ciptagelar layak dikunjungi bagi siapa pun yang ingin mengenal budaya Sunda lebih dalam.
Rekomendasi datang dari Melati Dewi, yang menekankan pentingnya datang saat upacara adat seperti Seren Taun berlangsung. Ia dan komunitasnya merasa sangat dihargai sebagai tamu, dan menyatakan bahwa pengalaman berinteraksi langsung dengan masyarakat adat memberikan kesan yang sulit dilupakan.
Secara keseluruhan, Kampung Adat Ciptagelar tidak hanya menghadirkan keindahan alam dan budaya, tetapi juga membuka ruang refleksi bagi siapa pun yang mengunjunginya. Ulasan-ulasan tersebut menunjukkan bahwa kekuatan desa ini bukan pada fasilitas wisata modern, melainkan pada kesederhanaan hidup yang penuh makna. Bagi pecinta budaya dan pelancong yang mencari kedamaian, Ciptagelar adalah destinasi yang layak untuk dijelajahi.`;

export const indoLanjutTryoutData: IndoLanjutQuestion[] = [
  {
    id: 1,
    readingText: TEKS_PROPOSAL,
    text: "Dari pernyataan-pernyataan berikut, manakah pernyataan yang mengungkapkan kesesuaian antara usulan program dan data pendukung sesuai teks proposal tersebut?\n\nTentukan Sesuai atau Tidak Sesuai untuk setiap pernyataan berikut!",
    type: 'true-false-table',
    trueLabel: 'Sesuai',
    falseLabel: 'Tidak Sesuai',
    statements: [
      {
        id: 's1',
        text: 'Usulan Program: Mengajukan program pelatihan digitalisasi bagi 100 pelaku UKM di tiga kabupaten.\nData Pendukung: Hanya 35% UKM pangan aktif menggunakan platform digital.',
        correct: true
      },
      {
        id: 's2',
        text: 'Usulan Program: Mengusulkan pelatihan e-commerce, promosi digital, dan penggunaan dompet digital.\nData Pendukung: Nilai transaksi e-commerce nasional mencapai 476 triliun rupiah dan 60% berupa produk konsumsi termasuk pangan.',
        correct: true
      },
      {
        id: 's3',
        text: 'Usulan Program: Meminta Kementerian turun langsung ke lapangan sebelum menyetujui usulan.\nData Pendukung: Data survei telah menunjukkan kebutuhan pelatihan tanpa menyebut perlunya kunjungan langsung oleh kementerian.',
        correct: false
      }
    ]
  },
  {
    id: 2,
    readingText: TEKS_PROPOSAL,
    text: "Hubungan koherensi antara paragraf ke-2 dan ke-3 adalah ....",
    type: 'multiple',
    options: [
      { id: 'a', text: 'alasan pengajuan proposal yang diperinci dengan contoh UKM' },
      { id: 'b', text: 'alasan pengajuan program pelatihan yang diperkuat tujuan', correct: true },
      { id: 'c', text: 'akibat dari maraknya fenomena digitalisasi UKM di daerah' },
      { id: 'd', text: 'akibat dari program literasi digital yang disertai tujuan' },
      { id: 'e', text: 'alasan pengajuan proposal program dengan persyaratan' }
    ]
  },
  {
    id: 3,
    readingText: TEKS_PROPOSAL,
    text: "Berdasarkan teks, manakah argumen yang logis dari pernyataan-pernyataan berikut?\n\nTentukan Logis atau Tidak Logis untuk setiap argumen berikut!",
    type: 'true-false-table',
    trueLabel: 'Logis',
    falseLabel: 'Tidak Logis',
    statements: [
      {
        id: 's1',
        text: 'Program pelatihan penting karena teknologi digital pasti memperluas jejaring.',
        correct: false
      },
      {
        id: 's2',
        text: 'Program pelatihan penting karena teknologi digital pasti memperluas jejaring tanpa hambatan pasar.',
        correct: true
      },
      {
        id: 's3',
        text: 'Usulan program didasarkan pada data survei dan kebutuhan nyata di lapangan.',
        correct: true
      }
    ]
  },
  {
    id: 4,
    readingText: TEKS_PUISI_HUESCA,
    text: "di batu penghabisan ke Huesca\nbatas terakhir dari kebanggaan kita\n\nMakna kiasan batu penghabisan dan batas terakhir memperjelas kondisi yang dialami aku lirik (penyair) tentang ....",
    type: 'multiple',
    options: [
      { id: 'a', text: 'perpisahan antara penyair dengan orang yang dikasihi', correct: true },
      { id: 'b', text: 'situasi kejiwaan yang penuh dinamika kehidupan' },
      { id: 'c', text: 'setiap perjuangan akan dibatasi dengan perpisahan' },
      { id: 'd', text: 'semua ikhtiar harus dilakukan sampai batas kemampuan' },
      { id: 'e', text: 'apa pun hasil akhirnya harus disikapi dengan keikhlasan' }
    ]
  },
  {
    id: 5,
    readingText: TEKS_PUISI_HUESCA,
    text: "angin bangkit ketika senja\nngingatkan musim gugur akan tiba\n\nMakna citraan penglihatan ketika senja dan musim gugur mengkonkretkan gagasan penyair tentang ....",
    type: 'multiple',
    options: [
      { id: 'a', text: 'pergantian hari dan musim' },
      { id: 'b', text: 'batas akhir aktivitas manusia' },
      { id: 'c', text: 'suasana kedukaan di ujung waktu' },
      { id: 'd', text: 'siap menghadapi perubahan waktu' },
      { id: 'e', text: 'kondisi menjelang akhir kehidupan', correct: true }
    ]
  },
  {
    id: 6,
    readingText: TEKS_PUISI_HUESCA,
    text: "angin bangkit ketika senja\nngingatkan musim gugur akan tiba\naku cemas bisa kehilangan kau\naku cemas pada kecemasanku sendiri\n\nSuasana hati yang muncul setelah membaca bait puisi tersebut adalah ....",
    type: 'multiple',
    options: [
      { id: 'a', text: 'kehilangan hati saat musim gugur sudah tiba' },
      { id: 'b', text: 'kemuraman saat senja hari di musim gugur' },
      { id: 'c', text: 'keadaan gersang karena daun berguguran' },
      { id: 'd', text: 'kesedihan karena takut kehilangan orang terkasih', correct: true },
      { id: 'e', text: 'kebimbangan hati menunggu pergantian musim' }
    ]
  },
  {
    id: 7,
    readingText: TEKS_ULASAN_CIPTAGELAR,
    text: "Manakah kalimat yang menyatakan evaluasi dalam teks ulasan cetak dan ulasan digital tersebut?\n\nPilihlah jawaban yang benar! (Jawaban benar lebih dari satu)",
    type: 'multiple-complex',
    correctAnswer: ['c1', 'c3', 'c5'],
    options: [
      { id: 'c1', text: 'Saya merasa seperti kembali ke masa lalu, hidup dalam harmoni dengan alam.', correct: true },
      { id: 'c2', text: 'Artikel ini menyajikan informasi lengkap tentang rute menuju Kampung Ciptagelar.' },
      { id: 'c3', text: 'Menurut saya, pernyataan \'semua orang pasti jatuh cinta\' terlalu menggeneralisasi.', correct: true },
      { id: 'c4', text: 'Tokoh adat menjelaskan larangan penggunaan listrik di rumah-rumah warga.' },
      { id: 'c5', text: 'Kekuatan desa ini bukan pada fasilitas wisata modern, melainkan pada kesederhanaan hidup yang penuh makna.', correct: true }
    ]
  },
  {
    id: 8,
    readingText: TEKS_ULASAN_CIPTAGELAR,
    text: "Manakah pilihan kata yang tepat untuk menggambarkan kesederhanaan Kampung Ciptagelar?\n\nTentukan Tepat atau Tidak Tepat pada setiap kalimat berikut!",
    type: 'true-false-table',
    trueLabel: 'Tepat',
    falseLabel: 'Tidak Tepat',
    statements: [
      {
        id: 's1',
        text: 'Suasana yang jauh dari kebisingan kota ini dianggap cocok bagi siapa pun yang ingin beristirahat sekaligus belajar dari kearifan lokal.',
        correct: true
      },
      {
        id: 's2',
        text: 'Tempat ini bukan sekadar destinasi, tetapi ruang untuk menyelami makna hidup yang sederhana namun bermakna.',
        correct: true
      },
      {
        id: 's3',
        text: 'Kampung ini menawarkan kehidupan masyarakat adat Sunda yang masih memegang teguh nilai-nilai adat dan tata cara warisan leluhur.',
        correct: false
      }
    ]
  },
  {
    id: 9,
    readingText: TEKS_ULASAN_CIPTAGELAR,
    text: "Manakah kalimat yang merupakan kalimat majemuk setara dalam teks ulasan digital dan cetak tersebut?\n\nPilihlah jawaban yang benar! (Jawaban benar lebih dari satu)",
    type: 'multiple-complex',
    correctAnswer: ['c2', 'c4', 'c5'],
    options: [
      { id: 'c1', text: 'Suasana yang jauh dari kebisingan kota ini dianggap cocok bagi siapa pun yang ingin beristirahat sekaligus belajar dari kearifan lokal.' },
      { id: 'c2', text: 'Namun, ia juga mencatat perlunya peningkatan informasi daring terkait aturan kunjungan agar wisatawan baru lebih siap dan nyaman.', correct: true },
      { id: 'c3', text: 'Meski mendapat pujian, tidak semua pengunjung sepenuhnya setuju dengan pandangan idealis tentang tempat ini.' },
      { id: 'c4', text: 'Kami merasa sangat dihargai sebagai tamu, dan pengalaman berinteraksi langsung dengan masyarakat adat memberikan kesan yang sulit dilupakan.', correct: true },
      { id: 'c5', text: 'Ia mengikuti tur budaya yang dipandu oleh sesepuh adat dan merasakan kedalaman nilai-nilai spiritual yang dijunjung tinggi oleh masyarakat.', correct: true }
    ]
  },
  {
    id: 10,
    readingText: TEKS_ULASAN_CIPTAGELAR,
    text: "Manakah pernyataan yang mengungkapkan kesesuaian antara ulasan dan fakta dalam teks ulasan digital dan cetak tersebut?\n\nTentukan Sesuai atau Tidak Sesuai pada setiap pernyataan berikut!",
    type: 'true-false-table',
    trueLabel: 'Sesuai',
    falseLabel: 'Tidak Sesuai',
    statements: [
      {
        id: 's1',
        text: 'Ulasan: Tempat ini cocok untuk siapa pun yang ingin rehat dari hiruk-pikuk kota.\nFakta: Suasana kampung yang tenang, sejuk, dan jauh dari kebisingan kota.',
        correct: true
      },
      {
        id: 's2',
        text: 'Ulasan: Semua orang pasti akan jatuh cinta pada keunikan Ciptagelar.\nFakta: Tidak semua pengunjung merasa nyaman, seperti ulasan Bagas Permana.',
        correct: false
      },
      {
        id: 's3',
        text: 'Ulasan: Saya merasa seperti kembali ke masa lalu, hidup dalam harmoni dengan alam.\nFakta: Kehidupan tradisional tanpa listrik, penuh nilai adat dan kesederhanaan.',
        correct: true
      }
    ]
  }
];
