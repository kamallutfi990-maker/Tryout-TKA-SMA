export interface BiologiOption {
  id: string;
  text: string;
  correct?: boolean;
}

export interface BiologiStatement {
  id: string;
  text: string;
  correct: boolean | string;
}

export interface BiologiQuestion {
  id: number;
  text: string;
  type: 'multiple' | 'checkboxes' | 'statement-tepat' | 'statement-benar' | 'multiple-complex' | 'true-false-table';
  options?: BiologiOption[];
  statements?: BiologiStatement[];
  correctAnswer?: any;
  explanation: string;
  topic: string;
  imageUrl?: string;
}

export const BIOLOGI_TOPICS = [
  'Ekologi & Analisis Data Penyakit',
  'Prinsip Klasifikasi & Keanekaragaman Makhluk Hidup',
  'Sistem Reproduksi & Kesehatan Reproduksi',
  'Metode Ilmiah & Keterampilan Proses Sains',
  'Fisiologi Manusia & Sistem Respirasi',
  'Sistem Endokrin & Regulasi Hormon',
  'Biologi Sel (Mitokondria & Retikulum Endoplasma)',
  'Sistem Sirkulasi & Analisis Darah',
  'Sistem Imunologi & Hipersensitivitas',
  'Ekologi & Jaring-Jaring Makanan',
  'Bioteknologi Pangan & Imunisasi Vaksin',
  'Metabolisme Sel (Katabolisme & Energi)',
  'Sistem Ekskresi & Hemodialisis'
];

export const getBiologiTopic = (id: number): string => {
  switch (id) {
    case 1: return 'Ekologi & Analisis Data Penyakit';
    case 2: return 'Prinsip Klasifikasi & Keanekaragaman Makhluk Hidup';
    case 3: return 'Sistem Reproduksi & Kesehatan Reproduksi';
    case 4: return 'Metode Ilmiah & Keterampilan Proses Sains';
    case 5: return 'Fisiologi Manusia & Sistem Respirasi';
    case 6: return 'Sistem Endokrin & Regulasi Hormon';
    case 7: return 'Sistem Reproduksi Manusia';
    case 8: return 'Biologi Sel & Mitokondria';
    case 9: return 'Sistem Sirkulasi & Analisis Darah';
    case 10: return 'Sistem Imunologi & Hipersensitivitas';
    case 11: return 'Ekologi & Jaring-Jaring Makanan';
    case 12: return 'Biologi Sel & Retikulum Endoplasma';
    case 13: return 'Bioteknologi & Imunisasi Vaksin';
    case 14: return 'Sistem Reproduksi & Embriologi';
    case 15: return 'Metode Ilmiah & Desain Eksperimen';
    case 16: return 'Bioteknologi Pangan & Mikrobiologi';
    case 17: return 'Metabolisme Sel & Katabolisme';
    case 18: return 'Fisiologi Olahraga & Pemulihan';
    case 19: return 'Sistem Ekskresi & Hemodialisis';
    case 20: return 'Metode Ilmiah & Logika Sains';
    default: return 'Biologi Umum';
  }
};

export const biologiTryoutData: BiologiQuestion[] = [
  {
    id: 1,
    text: "Perhatikan tabel data uji efektivitas insektisida DDT dan obat antimalaria Kina pada dua wilayah endemik berikut:\n\n• Wilayah A (tanpa resistensi nyamuk): Efektivitas DDT mencapai 90%, Kina 85%\n• Wilayah B (terdapat resistensi nyamuk): Efektivitas DDT turun drastis menjadi 60%, Kina 85%\n\nBerdasarkan data tersebut, keputusan intervensi medis dan pengendalian vektor yang paling rasional adalah ....",
    type: 'multiple',
    topic: 'Ekologi & Analisis Data Penyakit',
    options: [
      { id: 'a', text: 'Penggunaan DDT di wilayah A sangat tepat untuk hasil cepat, sedangkan untuk wilayah B perlu kombinasi/strategi lain (seperti Kina)', correct: true },
      { id: 'b', text: 'Penggunaan DDT dihentikan di wilayah A karena efektivitasnya sama dengan Kina' },
      { id: 'c', text: 'Wilayah B hanya boleh menggunakan insektisida DDT dosis tinggi tanpa obat' },
      { id: 'd', text: 'DDT dan Kina sama sekali tidak efektif untuk memberantas malaria di semua wilayah' },
      { id: 'e', text: 'Kina hanya digunakan di wilayah A, sedangkan wilayah B dibiarkan alami' }
    ],
    explanation: "Soal ini menguji kemampuan membaca data tabel. DDT sangat efektif di wilayah tanpa resistensi (90%), namun efektivitasnya turun drastis di wilayah dengan resistensi (60%). Oleh karena itu, penggunaan DDT di wilayah A sangat tepat untuk hasil cepat, sedangkan untuk wilayah B perlu kombinasi/strategi lain (seperti Kina)."
  },
  {
    id: 2,
    text: "Paus dan hiu sama-sama memiliki bentuk tubuh hidrodinamis (streamline) dan sirip untuk berenang di lautan, namun paus dikelompokkan ke dalam Mammalia sedangkan hiu ke dalam Chondrichthyes (Pisces). Dasar klasifikasi ilmiah yang membenarkan pemisahan taksonomi ini adalah ....",
    type: 'multiple',
    topic: 'Prinsip Klasifikasi & Keanekaragaman Makhluk Hidup',
    options: [
      { id: 'a', text: 'Paus dan hiu memiliki bentuk tubuh serupa karena evolusi konvergen, bukan karena berkerabat dekat; klasifikasi didasarkan pada hubungan kekerabatan, struktur anatomi internal (bernapas dengan paru-paru vs insang, melahirkan vs bertelur), dan genetika', correct: true },
      { id: 'b', text: 'Paus hidup di air tawar sedangkan hiu hidup di air laut dalam' },
      { id: 'c', text: 'Klasifikasi makhluk hidup hanya didasarkan pada penampilan luar morfologi tubuh' },
      { id: 'd', text: 'Paus memiliki kerangka tulang rawan sedangkan hiu memiliki tulang keras' },
      { id: 'e', text: 'Hiu berkembang biak dengan cara menyusui anak-anaknya di terumbu karang' }
    ],
    explanation: "Klasifikasi makhluk hidup didasarkan pada hubungan kekerabatan, struktur anatomi internal (seperti cara bernapas dan reproduksi), dan genetika, bukan sekadar penampilan luar. Paus dan hiu memiliki bentuk tubuh serupa karena evolusi konvergen (hidup di lingkungan yang sama), bukan karena mereka berkerabat dekat."
  },
  {
    id: 3,
    text: "Alat kontrasepsi dalam rahim (AKDR/IUD) banyak dipilih sebagai program perencanaan keluarga. Pernyataan yang BENAR mengenai mekanisme kerja dan sifat kontrasepsi IUD adalah ....",
    type: 'multiple',
    topic: 'Sistem Reproduksi & Kesehatan Reproduksi',
    options: [
      { id: 'a', text: 'IUD bekerja secara permanen memotong saluran tuba falopi sehingga tidak dapat dipulihkan kembali' },
      { id: 'b', text: 'IUD bekerja dengan cara mengganggu pergerakan sperma (efek mekanis/spermisidal) dan mengubah kondisi endometrium rahim agar tidak terjadi implantasi, serta bersifat non-permanen (dapat dilepas kapan saja)', correct: true },
      { id: 'c', text: 'IUD menghentikan produksi hormon estrogen dan progesteron dari ovarium secara total' },
      { id: 'd', text: 'IUD membunuh sel telur matang sebelum keluar dari folikel de Graaf' },
      { id: 'e', text: 'IUD dipasang di liang vagina luar untuk mencegah kontak fisik' }
    ],
    explanation: "IUD bekerja dengan cara mengganggu pergerakan sperma (efek spermasidal/mekanis) sehingga tidak mencapai sel telur, serta mengubah kondisi rahim agar tidak terjadi implantasi (penempelan embrio). IUD bukan metode permanen (bisa dilepas kapan saja)."
  },
  {
    id: 4,
    text: "Dalam melaksanakan penelitian berbasis metode ilmiah, langkah awal yang paling krusial sebelum merumuskan hipotesis adalah ....",
    type: 'multiple',
    topic: 'Metode Ilmiah & Keterampilan Proses Sains',
    options: [
      { id: 'a', text: 'Langsung mempublikasikan hasil analisis data ke jurnal ilmiah' },
      { id: 'b', text: 'Mengidentifikasi masalah melalui pengumpulan informasi awal atau observasi (kajian literatur, data, atau fakta lapangan) agar batasan masalah dapat dirumuskan secara jelas', correct: true },
      { id: 'c', text: 'Memilih kesimpulan akhir yang paling diinginkan oleh peneliti' },
      { id: 'd', text: 'Mengubah variabel eksperimen saat penelitian sedang berlangsung' },
      { id: 'e', text: 'Menghindari pengamatan lapangan agar tidak bias' }
    ],
    explanation: "Langkah pertama dalam metode ilmiah adalah mengidentifikasi masalah. Untuk mengidentifikasi masalah dengan tepat, peneliti perlu mengumpulkan informasi awal atau observasi (literatur, data, atau fakta lapangan) agar batasan masalah dapat dirumuskan."
  },
  {
    id: 5,
    text: "Ketika seseorang melakukan olahraga lari cepat (sprint), frekuensi pernapasan dan detak jantungnya meningkat secara signifikan. Penjelasan fisiologis yang paling tepat atas fenomena ini adalah ....",
    type: 'multiple',
    topic: 'Fisiologi Manusia & Sistem Respirasi',
    options: [
      { id: 'a', text: 'Aktivitas fisik berat meningkatkan kebutuhan ATP (energi) otot, sehingga sel otot membutuhkan lebih banyak pasokan oksigen melalui respirasi aerob dan frekuensi napas meningkat untuk menyuplai O₂ serta membuang akumulasi CO₂', correct: true },
      { id: 'b', text: 'Otot tubuh kekurangan air sehingga paru-paru memompa plasma darah' },
      { id: 'c', text: 'Kadar hemoglobin dalam eritrosit mendadak hilang saat berlari' },
      { id: 'd', text: 'Paru-paru mengecil karena tekanan otot perut saat melangkah' },
      { id: 'e', text: 'Suhu tubuh menurun drastis sehingga memerlukan asupan karbon monoksida' }
    ],
    explanation: "Aktivitas fisik berat meningkatkan kebutuhan ATP (energi) otot. Untuk memproduksi ATP dalam jumlah besar, sel otot membutuhkan lebih banyak oksigen melalui proses respirasi aerob. Akibatnya, frekuensi napas meningkat untuk menyuplai oksigen dan mengeluarkan CO2."
  },
  {
    id: 6,
    text: "Kelenjar tiroid menyekresikan hormon tiroksin (T4) ke dalam peredaran darah. Peran utama hormon tiroksin dalam metabolisme tubuh manusia adalah ....",
    type: 'multiple',
    topic: 'Sistem Endokrin & Regulasi Hormon',
    options: [
      { id: 'a', text: 'Menurunkan penyerapan glukosa di usus halus' },
      { id: 'b', text: 'Mengatur laju metabolisme basal sel-sel tubuh, termasuk pengaturan penggunaan energi, suhu tubuh, dan sintesis protein', correct: true },
      { id: 'c', text: 'Memicu pelepasan sel telur (ovulasi) dari ovarium' },
      { id: 'd', text: 'Mengubah kelebihan glukosa darah menjadi glikogen otot' },
      { id: 'e', text: 'Mencegah pembentukan sel darah merah di sumsum tulang' }
    ],
    explanation: "Kelenjar tiroid memproduksi hormon tiroksin (T4) yang berfungsi utama mengatur laju metabolisme basal sel-sel tubuh, termasuk pengaturan penggunaan energi, suhu tubuh, dan sintesis protein."
  },
  {
    id: 7,
    text: "Perhatikan gambar sistem organ reproduksi pria berikut!\n\nBagian yang ditunjuk oleh huruf X adalah saluran vas deferens. Apabila terjadi penyumbatan total atau vasektomi pada saluran tersebut, kondisi yang terjadi pada proses reproduksi pria adalah ....",
    type: 'multiple',
    topic: 'Sistem Reproduksi Manusia',
    imageUrl: 'IMG_2361.jpeg',
    options: [
      { id: 'a', text: 'Sperma tidak dapat keluar saat ejakulasi, namun kelenjar prostat dan vesikula seminalis tetap memproduksi cairan semen sehingga ejakulasi tetap terjadi tanpa sel sperma (azoospermia)', correct: true },
      { id: 'b', text: 'Pria tersebut tidak dapat melakukan ereksi dan kehilangan dorongan seksual total' },
      { id: 'c', text: 'Produksi hormon testosteron di testis terhenti seketika' },
      { id: 'd', text: 'Tidak ada cairan semen sama sekali yang dapat dikeluarkan saat ejakulasi' },
      { id: 'e', text: 'Urine tidak dapat dikeluarkan dari kandung kemih' }
    ],
    explanation: "Huruf X menunjuk pada vas deferens (saluran sperma). Jika saluran ini tersumbat, sperma yang diproduksi di testis tidak dapat keluar saat ejakulasi. Namun, kelenjar prostat dan vesikula seminalis masih memproduksi cairan semen, sehingga ejakulasi tetap terjadi (cairannya keluar) tetapi tanpa sel sperma (azoospermia)."
  },
  {
    id: 8,
    text: "Jika suatu sel eukariotik mengalami kerusakan parah pada seluruh organel mitokondrianya, dampak langsung yang akan dialami oleh sel tersebut adalah ....",
    type: 'multiple',
    topic: 'Biologi Sel & Mitokondria',
    options: [
      { id: 'a', text: 'Sel tidak dapat melakukan sintesis membran inti sel' },
      { id: 'b', text: 'Sel kehilangan pasokan energi utama (ATP) dari respirasi seluler sehingga tidak mampu menjalankan proses metabolisme vital seperti transpor aktif dan sintesis biomolekul', correct: true },
      { id: 'c', text: 'Sel tidak mampu menyerap foton cahaya matahari' },
      { id: 'd', text: 'Kromosom di dalam nukleus segera bermutasi menjadi RNA' },
      { id: 'e', text: 'Dinding sel selulosa akan hancur seketika' }
    ],
    explanation: "Mitokondria adalah organel tempat terjadinya respirasi seluler yang menghasilkan ATP (energi). Tanpa mitokondria, sel tidak memiliki pasokan energi untuk menjalankan proses metabolisme vital (seperti transpor aktif, sintesis molekul, dll.)."
  },
  {
    id: 9,
    text: "Hasil pemeriksaan laboratorium darah seorang pasien menunjukkan kadar hematokrit yang sangat rendah (anemia) disertai penurunan jumlah limfosit dan abnormalitas persentase neutrofil. Kondisi klinis ini mengindikasikan adanya gangguan primer pada ....",
    type: 'multiple',
    topic: 'Sistem Sirkulasi & Analisis Darah',
    options: [
      { id: 'a', text: 'Kelenjar empedu di hati' },
      { id: 'b', text: 'Sumsum tulang belakang (bone marrow) dalam memproduksi dan mematangkan sel-sel darah secara normal (hematopoiesis)', correct: true },
      { id: 'c', text: 'Enzim amilase di pankreas' },
      { id: 'd', text: 'Katup bikuspidalis pada jantung bagian kiri' },
      { id: 'e', text: 'Lapisan mukosa lambung bagian pilorus' }
    ],
    explanation: "Hasil tes menunjukkan ketidakseimbangan sel darah. Hematokrit rendah (anemia) dan abnormalitas pada jenis leukosit (neutrofil tinggi, limfosit rendah) sering kali menjadi indikator gangguan pada sumsum tulang belakang dalam memproduksi sel darah secara normal."
  },
  {
    id: 10,
    text: "Sindrom Stevens-Johnson (SSJ / SJS) merupakan kelainan kulit dan membran mukosa yang berat akibat reaksi hipersensitivitas obat. Mekanisme imunologis yang mendasari penyakit ini adalah ....",
    type: 'multiple',
    topic: 'Sistem Imunologi & Hipersensitivitas',
    options: [
      { id: 'a', text: 'Infeksi bakteri tuberkulosis yang menyerang jaringan otot lurik' },
      { id: 'b', text: 'Reaksi hipersensitivitas di mana aktivasi sel imun salah sasaran, melibatkan imunoglobulin (antibodi) dan sel T yang memicu respon inflamasi parah serta kerusakan jaringan epitel', correct: true },
      { id: 'c', text: 'Kelebihan asupan vitamin C dosis tinggi yang mengkristal di plasma darah' },
      { id: 'd', text: 'Hilangnya seluruh trombosit di pembuluh darah kapiler secara genetik' },
      { id: 'e', text: 'Kekurangan hormon insulin yang memicu nekrosis sel kulit' }
    ],
    explanation: "Sindrom Stevens-Johnson (SSJ) adalah reaksi hipersensitivitas. Mekanismenya melibatkan aktivasi sel imun yang salah sasaran (autoimun/alergi parah). Imunoglobulin (antibodi) berperan dalam memicu reaksi inflamasi dan pengikatan antigen yang memicu kerusakan jaringan."
  },
  {
    id: 11,
    text: "Perhatikan diagram jaring-jaring makanan ekosistem laut kutub berikut!\n\nJika populasi ikan kecil mengalami penurunan drastis akibat perubahan suhu dan eksploitasi, dampak lanjutan yang paling logis pada rantai makanan tersebut adalah ....",
    type: 'multiple',
    topic: 'Ekologi & Jaring-Jaring Makanan',
    imageUrl: 'IMG_2362.jpeg',
    options: [
      { id: 'a', text: 'Predator yang bergantung langsung pada ikan kecil (seperti pinguin atau anjing laut) akan kekurangan sumber makanan utama sehingga populasinya berisiko ikut menurun (dampak bottom-up)', correct: true },
      { id: 'b', text: 'Populasi zooplankton akan langsung punah total dalam 24 jam' },
      { id: 'c', text: 'Paus orca akan beralih menjadi produsen fotosintesis' },
      { id: 'd', text: 'Populasi burung camar dan anjing laut melonjak drastis tanpa batas' },
      { id: 'e', text: 'Jaring-jaring makanan tidak terpengaruh karena semua hewan memakan fitoplankton' }
    ],
    explanation: "Dalam jaring-jaring makanan, jika salah satu komponen (ikan kecil) menurun, maka predator yang bergantung langsung padanya (pinguin atau anjing laut) akan kekurangan sumber makanan, sehingga populasinya berisiko menurun (dampak bottom-up)."
  },
  {
    id: 12,
    text: "Retikulum Endoplasma (RE) terbagi menjadi RE Kasar dan RE Halus. Pasangan fungsi yang tepat untuk kedua organel tersebut adalah ....",
    type: 'multiple',
    topic: 'Biologi Sel & Retikulum Endoplasma',
    options: [
      { id: 'a', text: 'RE Kasar memiliki ribosom untuk sintesis protein, sedangkan RE Halus berfungsi untuk sintesis lipid (lemak) dan detoksifikasi racun', correct: true },
      { id: 'b', text: 'RE Kasar untuk respirasi seluler, sedangkan RE Halus untuk fotosintesis' },
      { id: 'c', text: 'RE Kasar menghasilkan glukosa, sedangkan RE Halus memecah glikogen menjadi ATP' },
      { id: 'd', text: 'RE Kasar untuk pencernaan intraseluler, sedangkan RE Halus untuk sintesis DNA' },
      { id: 'e', text: 'Keduanya hanya berfungsi menyimpan sisa metabolisme berupa kristal kalsium oksalat' }
    ],
    explanation: "Retikulum Endoplasma (RE) Kasar memiliki ribosom dan berfungsi untuk sintesis protein. RE Halus berfungsi untuk sintesis lipid (lemak) dan detoksifikasi sel. Jika keduanya rusak, fungsi krusial ini akan terhenti."
  },
  {
    id: 13,
    text: "Perhatikan grafik dinamika kasus COVID-19 dan cakupan program vaksinasi primer serta vaksin booster di Indonesia berikut!\n\nKesimpulan ilmiah yang dapat ditarik dari grafik tersebut adalah ....",
    type: 'multiple',
    topic: 'Bioteknologi & Imunisasi Vaksin',
    imageUrl: 'IMG_2363.jpeg',
    options: [
      { id: 'a', text: 'Pemberian vaksin primer dan booster berkorelasi kuat dengan penurunan gelombang keparahan kasus baru karena terbentuknya kekebalan kelompok (herd immunity) di populasi', correct: true },
      { id: 'b', text: 'Vaksinasi justru meningkatkan laju mutasi dan keparahan infeksi virus' },
      { id: 'c', text: 'Kasus COVID-19 menurun murni tanpa dipengaruhi oleh intervensi vaksinasi' },
      { id: 'd', text: 'Vaksin booster menyebabkan efektivitas antibodi tubuh menjadi nol' },
      { id: 'e', text: 'Imunitas tubuh hanya terbentuk jika pasien tidak pernah divaksinasi' }
    ],
    explanation: "Grafik menunjukkan korelasi antara program vaksinasi (primer & booster) dengan penurunan jumlah kasus. Vaksinasi menciptakan kekebalan kolektif (herd immunity) sehingga risiko penularan berkurang secara bertahap."
  },
  {
    id: 14,
    text: "Pada sistem reproduksi wanita, pembuahan ovum oleh sperma secara normal terjadi di tuba falopi (oviduk). Apabila terjadi kerusakan silia tuba falopi atau sumbatan saluran, zigot dapat tertanam di dinding tuba falopi. Fenomena ini disebut ....",
    type: 'multiple',
    topic: 'Sistem Reproduksi & Embriologi',
    options: [
      { id: 'a', text: 'Endometriosis stadium awal' },
      { id: 'b', text: 'Kehamilan ektopik, di mana embrio tertanam di luar rahim (tuba falopi) dan tidak dapat berkembang secara normal karena tuba bukan tempat fisiologis pertumbuhan janin', correct: true },
      { id: 'c', text: 'Kanker serviks invasif' },
      { id: 'd', text: 'Sindrom ovarium polikistik (PCOS)' },
      { id: 'e', text: 'Menopause dini' }
    ],
    explanation: "Pembuahan normal terjadi di tuba falopi. Zigot seharusnya bergerak menuju rahim untuk menempel. Jika silia di tuba tidak berfungsi baik atau ada sumbatan, zigot tertanam di tuba (kehamilan ektopik) dan tidak bisa berkembang normal karena tuba bukan tempat tumbuh janin."
  },
  {
    id: 15,
    text: "Seorang petani ingin menguji keunggulan benih jagung varietas baru dari toko dibandingkan benih jagung hasil panen musim lalu. Agar eksperimen yang dilakukan memenuhi prinsip 'fair test' (eksperimen adil dan valid), perlakuan yang harus diterapkan adalah ....",
    type: 'multiple',
    topic: 'Metode Ilmiah & Desain Eksperimen',
    options: [
      { id: 'a', text: 'Menanam benih toko di tanah subur berpupuk lengkap dan benih hasil panen di tanah pasir tanpa pupuk' },
      { id: 'b', text: 'Menjadikan jenis benih sebagai variabel bebas, sedangkan variabel lain (kondisi lahan, jenis pupuk, volume penyiraman, dan intensitas cahaya) dikontrol agar sama (konstan)', correct: true },
      { id: 'c', text: 'Menyiram benih toko 3 kali sehari dan benih panen seminggu sekali' },
      { id: 'd', text: 'Mengubah jadwal panen benih toko lebih cepat 1 bulan' },
      { id: 'e', text: 'Hanya mencatat tinggi tanaman yang tumbuh subur saja dan membuang data lainnya' }
    ],
    explanation: "Prinsip eksperimen yang adil (fair test) adalah mengontrol variabel. Variabel bebasnya adalah jenis benih (toko vs hasil panen). Maka, variabel lain (lahan, pupuk, perlakuan) harus sama."
  },
  {
    id: 16,
    text: "Dalam proses pembuatan yogurt dari susu sapi menggunakan bakteri Lactobacillus bulgaricus dan Streptococcus thermophilus, suhu inkubasi harus dijaga pada kisaran optimal (sekitar 40°C - 45°C). Alasan ilmiah pengaturan suhu tersebut adalah ....",
    type: 'multiple',
    topic: 'Bioteknologi Pangan & Mikrobiologi',
    options: [
      { id: 'a', text: 'Suhu tersebut merupakan suhu optimum enzim dan metabolisme bakteri; jika terlalu panas bakteri mati / enzim terdenaturasi, dan jika terlalu dingin bakteri tidak aktif melakukan fermentasi asam laktat', correct: true },
      { id: 'b', text: 'Suhu panas memicu pembentukan alkohol dan gas CO₂ dalam jumlah besar' },
      { id: 'c', text: 'Agar laktosa susu menguap habis ke udara' },
      { id: 'd', text: 'Mencegah terbentuknya protein kasein pada gumpalan yogurt' },
      { id: 'e', text: 'Menurunkan keasaman susu hingga mencapai pH 9' }
    ],
    explanation: "Fermentasi yogurt memerlukan suhu optimal agar bakteri Lactobacillus dapat bekerja. Jika suhu terlalu panas, bakteri mati; jika terlalu dingin, bakteri tidak aktif."
  },
  {
    id: 17,
    text: "Metabolisme di dalam sel tubuh terbagi menjadi anabolisme dan katabolisme. Pernyataan yang TEPAT mengenai proses katabolisme adalah ....",
    type: 'multiple',
    topic: 'Metabolisme Sel & Katabolisme',
    options: [
      { id: 'a', text: 'Proses pembentukan molekul glukosa dari CO₂ dan air menggunakan energi cahaya' },
      { id: 'b', text: 'Proses penguraian/pemecahan molekul organik kompleks menjadi molekul sederhana yang membebaskan energi kimia (eksergonik), seperti proses glikolisis yang memecah glukosa menjadi piruvat', correct: true },
      { id: 'c', text: 'Penyusunan protein dari asam amino di ribosom' },
      { id: 'd', text: 'Sintesis asam lemak menjadi trigliserida cadangan di jaringan adiposa' },
      { id: 'e', text: 'Proses yang selalu membutuhkan suplai energi bebas tanpa menghasilkan ATP' }
    ],
    explanation: "Katabolisme adalah proses pemecahan molekul kompleks menjadi sederhana untuk menghasilkan energi (contoh: glikolisis/pemecahan glukosa menjadi piruvat). Sedangkan anabolisme adalah proses pembentukan molekul."
  },
  {
    id: 18,
    text: "Setelah menyelesaikan latihan kardio intensif, pelatih menganjurkan atlet untuk melakukan pendinginan (cooling down) dan relaksasi pernapasan. Manfaat fisiologis utama dari tindakan tersebut adalah ....",
    type: 'multiple',
    topic: 'Fisiologi Olahraga & Pemulihan',
    options: [
      { id: 'a', text: 'Membantu detak jantung dan tekanan darah turun secara bertahap, mencegah pengumpulan darah di ekstremitas bawah (venous pooling/pingsan), serta mempercepat pembuangan sisa metabolisme (asam laktat & CO₂)', correct: true },
      { id: 'b', text: 'Membakar seluruh persediaan lemak tubuh dalam waktu 5 menit' },
      { id: 'c', text: 'Menaikkan suhu otot hingga mencapai 42°C untuk membunuh virus' },
      { id: 'd', text: 'Menghentikan sirkulasi darah ke otak sementara waktu' },
      { id: 'e', text: 'Mengubah asam laktat menjadi gas amonia berbahaya' }
    ],
    explanation: "Pendinginan (cooling down) dan pengaturan napas penting setelah olahraga berat agar detak jantung turun secara perlahan, mencegah pingsan (darah tidak terkumpul di kaki), dan membantu pembuangan sisa metabolisme (asam laktat/CO2) dengan lebih efisien."
  },
  {
    id: 19,
    text: "Pasien dengan diagnosa gagal ginjal kronis stadium akhir memerlukan terapi pengganti ginjal berupa cuci darah (hemodialisis) secara rutin. Prinsip kerja utama dari mesin hemodialisis adalah ....",
    type: 'multiple',
    topic: 'Sistem Ekskresi & Hemodialisis',
    options: [
      { id: 'a', text: 'Menyuntikkan hormon eritropoietin langsung ke pembuluh limfa' },
      { id: 'b', text: 'Menggantikan fungsi filtrasi ginjal untuk menyaring zat sisa metabolisme yang bersifat toksik (seperti urea dan kreatinin) serta menyeimbangkan cairan dan elektrolit darah melalui membran semipermeabel', correct: true },
      { id: 'c', text: 'Menghancurkan batu ginjal dengan gelombang kejut ultrasonik' },
      { id: 'd', text: 'Memproduksi sel darah merah baru untuk menggantikan plasma darah' },
      { id: 'e', text: 'Menyerap kembali glukosa di tubulus kontortus proksimal' }
    ],
    explanation: "Fungsi utama ginjal adalah menyaring darah dari zat sisa metabolisme (urea, kreatinin, dll.). Jika ginjal rusak (gagal ginjal), racun-racun ini menumpuk di darah (toksik). Cuci darah (hemodialisis) berfungsi menggantikan fungsi ginjal untuk membersihkan darah tersebut secara buatan."
  },
  {
    id: 20,
    text: "Seorang siswa mengamati seekor katak pohon yang selalu bersuara di dekat jendela kamarnya setiap malam. Ia kemudian menangkap katak tersebut, memberinya tanda label kecil pada kakinya, lalu memindahkannya sejauh 200 meter ke kebun belakang. Tujuan ilmiah siswa melakukan penandaan tersebut adalah ....",
    type: 'multiple',
    topic: 'Metode Ilmiah & Logika Sains',
    options: [
      { id: 'a', text: 'Menguji apakah katak tersebut beracun jika disentuh kulitnya' },
      { id: 'b', text: 'Melakukan teknik identifikasi individu untuk menguji apakah katak yang bernyanyi setiap malam adalah individu yang sama (kemampuan homing/navigasi) atau individu yang berbeda dalam pengumpulan data hipotesis', correct: true },
      { id: 'c', text: 'Mengubah pola metamorfosis katak dari berudu menjadi katak dewasa' },
      { id: 'd', text: 'Membuat katak tersebut kehilangan kemampuan bersuara' },
      { id: 'e', text: 'Mempercepat laju respirasi kulit katak di alam terbuka' }
    ],
    explanation: "Dengan menandai katak (memberi label/nomer), anak tersebut sedang melakukan teknik identifikasi individu. Tujuannya untuk mengetahui apakah katak yang bernyanyi setiap malam adalah katak yang sama (yang pernah ia pindahkan) atau katak yang berbeda. Ini adalah langkah dasar pengumpulan data untuk menjawab hipotesis."
  }
];
