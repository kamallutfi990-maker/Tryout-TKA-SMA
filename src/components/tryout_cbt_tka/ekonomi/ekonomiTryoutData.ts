export interface EkonomiStatement {
  id: string;
  text: string;
  correct: boolean; // true for Benar, false for Salah
}

export interface EkonomiOption {
  id: string;
  text: string;
  correct?: boolean;
}

export interface EkonomiQuestion {
  id: number;
  number: number;
  subject: string;
  topic: string;
  type: 'multiple' | 'checkboxes' | 'true-false-table';
  stimulus?: string;
  text: string;
  options?: EkonomiOption[];
  statements?: EkonomiStatement[];
  correctAnswer?: string[]; // For checkboxes
  officialKeyText: string;
  discussion: string;
}

export const ekonomiTryoutData: EkonomiQuestion[] = [
  {
    id: 1,
    number: 1,
    subject: 'Ekonomi',
    topic: 'Kegiatan Ekonomi & Dampak Industrialisasi',
    type: 'checkboxes',
    stimulus: `Di kota kecil mengalami perkembangan ekonomi yang pesat akibat meningkatnya kegiatan ekonomi di industri manufaktur. Fenomena ini berdampak pada beberapa aspek kehidupan industri, diantaranya:
* Meningkatnya jumlah tenaga kerja yang terserap di sektor industri.
* Berkembangnya sektor perdagangan akibat meningkatnya daya beli.
* Terjadinya kemacetan dan peningkatan polusi akibat meningkatnya transportasi industri.
* Meningkatnya harga tanah dan biaya hidup akibat tingginya permintaan akan hunian.`,
    text: 'Berdasarkan kondisi tersebut, bagaimana hubungan antara kegiatan ekonomi dan dampak positif terhadap kehidupan industri? (Klik semua jawaban benar. Jawaban benar lebih dari satu)',
    options: [
      { id: 'a', text: 'Perkembangan industri memberikan dampak positif karena menciptakan banyak lapangan kerja.', correct: true },
      { id: 'b', text: 'Perkembangan ekonomi suatu daerah selalu meningkatkan kesejahteraan industri tanpa konsekuensi industri.' },
      { id: 'c', text: 'Peningkatan aktivitas ekonomi membawa manfaat sekaligus tantangan yang harus dikelola dengan kebijakan yang tepat.', correct: true },
      { id: 'd', text: 'Terjadi penurunan daya beli akibat biaya hidup disektor manufaktur industri tinggi.' },
      { id: 'e', text: 'Kegiatan industri harus dihentikan karena menyebabkan kemacetan dan polusi.' }
    ],
    correctAnswer: ['a', 'c'],
    officialKeyText: 'A dan C',
    discussion: `Analisis keterkaitan kegiatan ekonomi dan dampak industrialisasi:
* **Pernyataan A (Benar)**: Teks stimulus secara eksplisit memaparkan bahwa penyerapan tenaga kerja di sektor industri meningkat, yang merupakan dampak positif langsung terhadap penciptaan lapangan kerja dan penurunan angka pengangguran.
* **Pernyataan C (Benar)**: Selain menghadirkan dampak positif ekonomi (peningkatan daya beli masyarakat dan penyerapan tenaga kerja), industrialisasi juga memicu eksternalitas negatif (polusi lingkungan, kemacetan lalu lintas, dan kenaikan biaya hidup). Oleh karena itu, diperlukan perumusan kebijakan publik serta tata ruang kota yang terencana dan berkelanjutan.
* *Pernyataan B, D, dan E (Salah)*:
  - Opsi B keliru karena proses industrialisasi selalu membawa konsekuensi sosial dan lingkungan.
  - Opsi D keliru karena teks menyatakan daya beli masyarakat justru mengalami peningkatan.
  - Opsi E keliru karena solusi dari eksternalitas negatif adalah mitigasi dan regulasi lingkungan, bukan penghentian total kegiatan industri.`
  },
  {
    id: 2,
    number: 2,
    subject: 'Ekonomi',
    topic: 'Fungsi Permintaan Linear & Kurva Permintaan',
    type: 'multiple',
    stimulus: `Perhatikan kurva permintaan dan penawaran barang berikut!
(Pada kurva permintaan: saat $P_1 = \\text{Rp}25.000,00 \\to Q_1 = 1.000$; saat $P_2 = \\text{Rp}20.000,00 \\to Q_2 = 1.500$)`,
    text: 'Berdasarkan kurva tersebut, bentuk kurva fungsi permintaan yang benar adalah ....',
    options: [
      { id: 'a', text: '$Q_d = 10P - 500$' },
      { id: 'b', text: '$Q_d = -10P + 3.500$' },
      { id: 'c', text: '$Q_d = 0,1P + 500$' },
      { id: 'd', text: '$Q_d = -0,1P + 4.000$' },
      { id: 'e', text: '$Q_d = -0,1P + 3.500$', correct: true }
    ],
    officialKeyText: 'E. Qd = -0,1P + 3.500',
    discussion: `Dari kurva permintaan diperoleh dua titik koordinat:
* Titik 1: $(P_1, Q_1) = (25.000,\\ 1.000)$
* Titik 2: $(P_2, Q_2) = (20.000,\\ 1.500)$

Gunakan rumus persamaan garis fungsi permintaan linear melalui dua titik:
$$\\frac{P - P_1}{P_2 - P_1} = \\frac{Q - Q_1}{Q_2 - Q_1}$$

Substitusikan nilai ke dalam rumus:
$$\\frac{P - 25.000}{20.000 - 25.000} = \\frac{Q - 1.000}{1.500 - 1.000}$$
$$\\frac{P - 25.000}{-5.000} = \\frac{Q - 1.000}{500}$$

Bagi kedua ruas penyebut dengan $500$:
$$\\frac{P - 25.000}{-10} = Q - 1.000$$
$$-0,1(P - 25.000) = Q - 1.000$$
$$-0,1P + 2.500 = Q - 1.000$$
$$Q_d = -0,1P + 2.500 + 1.000$$
$$Q_d = -0,1P + 3.500$$

Jadi, bentuk fungsi permintaan yang benar adalah **$Q_d = -0,1P + 3.500$** (Opsi E).`
  },
  {
    id: 3,
    number: 3,
    subject: 'Ekonomi',
    topic: 'Keseimbangan Pasar (Market Equilibrium)',
    type: 'multiple',
    stimulus: `Daftar harga tomat di pasar tradisional di Kota B bulan Januari tahun 2024 sebagai berikut:

| Harga per Kg ($P$) | Permintaan ($Q_d$) | Penawaran ($Q_s$) |
|---|---|---|
| $\\text{Rp}10.000,00$ | $600$ | $1.800$ |
| $\\text{Rp}9.000,00$ | $800$ | $1.200$ |
| $\\text{Rp}8.500,00$ | $900$ | $900$ |
| $\\text{Rp}7.500,00$ | $1.100$ | $600$ |
| $\\text{Rp}6.000,00$ | $1.500$ | $300$ |`,
    text: 'Dari data tersebut, maka titik keseimbangan pasar dengan kuantitas (Q); harga (P) adalah ....',
    options: [
      { id: 'a', text: '600; 10.000' },
      { id: 'b', text: '800; 9.000' },
      { id: 'c', text: '900; 8.500', correct: true },
      { id: 'd', text: '1.800; 9.000' },
      { id: 'e', text: '1.800; 10.000' }
    ],
    officialKeyText: 'C. 900; 8.500',
    discussion: `Keseimbangan pasar (*Market Equilibrium*) tercapai ketika jumlah barang yang diminta pembeli ($Q_d$) sama persis dengan jumlah barang yang ditawarkan penjual ($Q_s$) pada tingkat harga keseimbangan ($P_e$):
$$Q_d = Q_s = Q_e$$

Berdasarkan tabel data harga tomat di Kota B:
* Pada tingkat harga $P = \\text{Rp}8.500,00$, jumlah permintaan ($Q_d$) bernilai $900$ kg dan jumlah penawaran ($Q_s$) juga bernilai $900$ kg.
* Karena $Q_d = Q_s = 900$, maka kuantitas keseimbangan ($Q_e$) adalah $900$ unit dan harga keseimbangan ($P_e$) adalah $\\text{Rp}8.500,00$.

Sehingga format titik keseimbangan pasar $(Q;\\ P)$ adalah **$(900;\\ 8.500)$** (Opsi C).`
  },
  {
    id: 4,
    number: 4,
    subject: 'Ekonomi',
    topic: 'Pendapatan Nasional & Pendapatan Per Kapita',
    type: 'multiple',
    stimulus: `Tabel pendapatan Negara Astina, Negara Alengka, dan Negara Amarta selama tahun 2022 dan 2023:

| Negara | Pendapatan Nasional 2022 | Jumlah Penduduk 2022 | Pendapatan Nasional 2023 | Jumlah Penduduk 2023 |
|---|---|---|---|---|
| Astina | $\$400\\text{ Miliar}$ | $100\\text{ Juta}$ | $\$440\\text{ Miliar}$ | $105\\text{ Juta}$ |
| Alengka | $\$600\\text{ Miliar}$ | $120\\text{ Juta}$ | $\$660\\text{ Miliar}$ | $122\\text{ Juta}$ |
| Amarta | $\$250\\text{ Miliar}$ | $80\\text{ Juta}$ | $\$270\\text{ Miliar}$ | $82\\text{ Juta}$ |`,
    text: 'Berdasarkan data tersebut, kesimpulan yang dapat di ambil adalah ....',
    options: [
      { id: 'a', text: 'Urutan pendapatan perkapita dari yang tertinggi pada tahun 2022 yaitu Negara Astina, Negara Alengka, dan Negara Amarta.' },
      { id: 'b', text: 'Urutan pendapatan perkapita dari yang tertinggi tahun 2023 yaitu Negara Alengka, Negara Amarta, dan Negara Astina.' },
      { id: 'c', text: 'Urutan pendapatan perkapita dari yang terendah tahun 2023 yaitu Negara Amarta, Negara Alengka, dan Negara Astina.' },
      { id: 'd', text: 'Negara yang mempunyai kenaikan pendapatan perkapita tertinggi tahun 2022–2023 yaitu Negara Amarta.' },
      { id: 'e', text: 'Negara yang mempunyai pendapatan perkapita tertinggi pada tahun 2022 dan 2023 yaitu Negara Alengka.', correct: true }
    ],
    officialKeyText: 'E. Negara yang mempunyai pendapatan perkapita tertinggi pada tahun 2022 dan 2023 yaitu Negara Alengka.',
    discussion: `Pendapatan per kapita ($y$) dihitung dengan membagi Pendapatan Nasional ($Y$) dengan Jumlah Penduduk ($P$):
$$y = \\frac{Y}{P}$$

**1. Perhitungan Tahun 2022:**
* **Negara Astina**: $\\frac{\\$400.000.000.000}{100.000.000} = \\$4.000$ per jiwa
* **Negara Alengka**: $\\frac{\\$600.000.000.000}{120.000.000} = \\$5.000$ per jiwa *(Tertinggi)*
* **Negara Amarta**: $\\frac{\\$250.000.000.000}{80.000.000} = \\$3.125$ per jiwa

**2. Perhitungan Tahun 2023:**
* **Negara Astina**: $\\frac{\\$440.000.000.000}{105.000.000} \\approx \\$4.190,48$ per jiwa
* **Negara Alengka**: $\\frac{\\$660.000.000.000}{122.000.000} \\approx \\$5.409,84$ per jiwa *(Tertinggi)*
* **Negara Amarta**: $\\frac{\\$270.000.000.000}{82.000.000} \\approx \\$3.292,68$ per jiwa

**Kesimpulan:**
Negara yang mempunyai pendapatan per kapita tertinggi pada tahun 2022 ($\\$5.000$) dan 2023 ($\\$5.409,84$) adalah **Negara Alengka** (Opsi E).`
  },
  {
    id: 5,
    number: 5,
    subject: 'Ekonomi',
    topic: 'Pembangunan Ekonomi & Infrastruktur Pertanian',
    type: 'multiple',
    stimulus: 'Tahun ini pemerintah mulai membangun banyak infrastruktur. Salah satunya adalah pembangunan 13 waduk baru. Waduk tersebut tersebar di seluruh wilayah Indonesia. Sekarang dari 7,2 juta hektare (ha) luas irigasi pertanian di Indonesia, baru sekitar 11% yang memanfaatkan air tampungan waduk. Sisanya masih memanfaatkan air hujan, sehingga selalu terancam kekeringan saat musim kemarau tiba. Apabila 13 waduk baru tersebut terealisasi, lahan irigasi waduk dapat meningkat dua kali lipat menjadi 1,45 juta Ha.',
    text: 'Berdasar ilustrasi tersebut, yang merupakan kebijakan pembangunan pemerintah Indonesia dalam hal....',
    options: [
      { id: 'a', text: 'penguatan kelembagaan masyarakat dan usaha kecil rumahan' },
      { id: 'b', text: 'penguatan ketahanan pangan dan stabilisasi produksi pangan nasional' },
      { id: 'c', text: 'pemanfaatan sumber daya alam dan manusia agar lebih bermanfaat' },
      { id: 'd', text: 'penguatan sinergi antara SDM, IPTEK dengan industri pangan' },
      { id: 'e', text: 'pengembangan sektor pertanian dan infrastruktur pedesaan', correct: true }
    ],
    officialKeyText: 'E. pengembangan sektor pertanian dan infrastruktur pedesaan',
    discussion: `Pembangunan 13 waduk baru berorientasi langsung pada penyediaan jaringan air irigasi yang stabil bagi 1,45 juta hektare lahan pertanian guna mencegah gagal panen akibat kemarau panjang.
Program ini mencerminkan kebijakan strategis pemerintah dalam **pengembangan sektor pertanian dan infrastruktur pedesaan / tata kelola sumber daya air** (Opsi E), yang menjadi pondasi fisik utama peningkatan produktivitas agraris nasional.`
  },
  {
    id: 6,
    number: 6,
    subject: 'Ekonomi',
    topic: 'Pertumbuhan Ekonomi (Economic Growth Rate)',
    type: 'multiple',
    stimulus: `Berikut data Produk Domestik Bruto (PDB) Negara Nusa Harapan pada 4 tahun terakhir:

| Tahun | PDB Riil (Triliun Rupiah) |
|---|---|
| 2021 | $15.200$ |
| 2022 | $15.800$ |
| 2023 | $16.400$ |
| 2024 | $16.820$ |`,
    text: 'Berdasarkan data tersebut, laju pertumbuhan ekonomi Negara Nusa Harapan pada periode 2023-2024 adalah ....',
    options: [
      { id: 'a', text: '1,33%' },
      { id: 'b', text: '2,56%', correct: true },
      { id: 'c', text: '2,63%' },
      { id: 'd', text: '5,23%' },
      { id: 'e', text: '6,6%' }
    ],
    officialKeyText: 'B. 2,56%',
    discussion: `Laju pertumbuhan ekonomi ($R$) dihitung menggunakan rumus pertumbuhan PDB riil tahun berjalan terhadap tahun sebelumnya:
$$R_{t} = \\frac{\\text{PDB}_{t} - \\text{PDB}_{t-1}}{\\text{PDB}_{t-1}} \\times 100\\%$$

Untuk periode 2023–2024:
* $\\text{PDB}_{2024} = 16.820\\text{ Triliun}$
* $\\text{PDB}_{2023} = 16.400\\text{ Triliun}$

$$R_{2024} = \\frac{16.820 - 16.400}{16.400} \\times 100\\%$$
$$R_{2024} = \\frac{420}{16.400} \\times 100\\% \\approx 2,5609\\% \\approx 2,56\\%$$

Jadi, laju pertumbuhan ekonomi periode 2023–2024 adalah **2,56%** (Opsi B).`
  },
  {
    id: 7,
    number: 7,
    subject: 'Ekonomi',
    topic: 'Lembaga Keuangan & Manajemen Risiko Perbankan',
    type: 'multiple',
    stimulus: 'Banyak masalah yang terdapat pada perbankan, baik internal maupun eksternal. Salah satu masalah eksternal diantaranya kredit macet. Jika tidak segera diatasi, dikhawatirkan kerugian perbankan akan semakin besar.',
    text: 'Cara yang paling tepat yang dilakukan agar masalah tersebut tidak terulang kembali adalah ....',
    options: [
      { id: 'a', text: 'memperhatikan perencanaan yang telah dibuat sebagai panduan kegiatan perbaikan' },
      { id: 'b', text: 'meningkatkan transparansi, sistem pengendalian, audit, dan manajemen risiko perbankan' },
      { id: 'c', text: 'menyerahkan penyelesaian masalah kepada pemerintah melalui Otoritas Jasa Keuangan' },
      { id: 'd', text: 'melakukan kerjasama dengan aparat berwenang untuk melakukan penindakan secara hukum' },
      { id: 'e', text: 'memperketat aturan dalam pemberian kredit dan memberlakukan sanksi bagi yang melanggar', correct: true }
    ],
    officialKeyText: 'E. memperketat aturan dalam pemberian kredit dan memberlakukan sanksi bagi yang melanggar',
    discussion: `Kredit macet (*Non-Performing Loan*) adalah risiko operasional utama dalam industri perbankan. Langkah pencegahan yang paling mendasar, preventif, dan solutif agar masalah kredit macet tidak terulang adalah dengan:
1. Menerapkan prinsip kehati-hatian (*Prudential Banking Principle*) dan analisis kelayakan kredit yang ketat (Analisis 5C: *Character, Capacity, Capital, Collateral, Condition*).
2. Memperketat SOP pemberian kredit serta menegakkan sanksi tegas bagi petugas maupun debitur yang melanggar ketentuan perbankan (Opsi E).`
  },
  {
    id: 8,
    number: 8,
    subject: 'Ekonomi',
    topic: 'Manajemen Produksi & Efisiensi Operasional',
    type: 'checkboxes',
    stimulus: 'PT Mentari bergerak dalam produsen makanan ringan berbahan dasar ubi-ubian khas Indonesia, seperti keripik nangka dan keripik salak. Dalam rangka peningkatan kualitas produk dan efisiensi kerja, perusahaan mulai menerapkan sistem manajemen produksi modern, seperti penggunaan mesin modern, pengawasan kualitas produk secara ketat, dan pengelolaan bahan baku yang lebih higienis. Selain itu, perusahaan juga membangun sistem informasi terkait jadwal produksi agar pesanan konsumen dapat selesai tepat waktu.',
    text: 'Berdasarkan stimulus tersebut, tentukan strategi yang diterapkan dalam produksi! (Klik semua jawaban benar. Jawaban benar lebih dari satu)',
    options: [
      { id: 'a', text: 'Peningkatan efisiensi dengan penggunaan mesin modern.', correct: true },
      { id: 'b', text: 'Memanfaatkan media sosial untuk pemasaran produk.' },
      { id: 'c', text: 'Penentuan harga jual berdasarkan harga pesaing.' },
      { id: 'd', text: 'Pengelolaan dan proses bahan baku yang efisien.', correct: true },
      { id: 'e', text: 'Pengawasan kualitas secara berkesinambungan.', correct: true }
    ],
    correctAnswer: ['a', 'd', 'e'],
    officialKeyText: 'A, D, dan E',
    discussion: `Strategi manajemen operasional produksi PT Mentari yang tertuang pada teks:
* **Pilihan A (Tepat)**: Penggunaan mesin modern diterapkan secara langsung guna mendongkrak efisiensi dan kapasitas produksi.
* **Pilihan D (Tepat)**: Pengelolaan bahan baku secara higienis dan terstandar menjamin alur proses produksi yang efisien dan meminimalkan limbah.
* **Pilihan E (Tepat)**: Pengawasan kualitas (*quality control*) ketat dan terjadwal secara berkesinambungan memastikan mutu output keripik terjaga.
* *Pilihan B & C (Tidak Tepat)*: Promosi media sosial dan penetapan harga pesaing adalah ranah manajemen pemasaran (*marketing management*), bukan operasionalisasi sistem produksi yang dibahas pada stimulus.`
  },
  {
    id: 9,
    number: 9,
    subject: 'Ekonomi',
    topic: 'Perdagangan Internasional & Hambatan Dagang',
    type: 'true-false-table',
    stimulus: `Indonesia adalah negara dengan kekayaan sumber daya alam yang melimpah, seperti batu bara, kelapa sawit, karet, dan produk perikanan. Untuk meningkatkan pertumbuhan ekonomi, pemerintah aktif menjalin kerja sama dagang dengan negara-negara ASEAN, Jepang, dan Uni Eropa.
Meskipun menghadapi tantangan seperti fluktuasi nilai tukar, hambatan impor, dan rendahnya daya saing produk lokal, kerja sama internasional tetap memberi manfaat berupa peningkatan devisa, transfer teknologi, serta pembukaan lapangan kerja baru.`,
    text: 'Tentukan Benar atau Salah pada pernyataan Hambatan Perdagangan Internasional!',
    statements: [
      {
        id: 's1',
        text: 'Hambatan Perdagangan Nasional',
        correct: true
      },
      {
        id: 's2',
        text: 'Proteksi negara mitra',
        correct: true
      },
      {
        id: 's3',
        text: 'Kurangnya kualitas produk lokal',
        correct: false
      },
      {
        id: 's4',
        text: 'Kesepakatan dagang bebas',
        correct: false
      }
    ],
    officialKeyText: 'Benar, Benar, Salah, Salah',
    discussion: `Analisis faktor instrumen hambatan perdagangan internasional:
* **Pernyataan 1: Hambatan Perdagangan Nasional (Benar)**: Regulasi domestik yang berbelit-belit atau kebijakan kuota/pajak ekspor di dalam negeri dapat menjadi hambatan kelancaran perdagangan.
* **Pernyataan 2: Proteksi negara mitra (Benar)**: Kebijakan proteksionisme (seperti tarif impor tinggi, kuota impor, sertifikasi diskriminatif, atau embargo) dari negara tujuan ekspor merupakan hambatan langsung perdagangan internasional.
* **Pernyataan 3: Kurangnya kualitas produk lokal (Salah)**: Kualitas produk adalah persoalan daya saing internal produsen komoditas, bukan instrumen regulasi hambatan dagang (*trade barrier*).
* **Pernyataan 4: Kesepakatan dagang bebas (Salah)**: Perjanjian perdagangan bebas (*Free Trade Agreement*) justru dibuat untuk menghapuskan hambatan tarif dan nontarif antarnegara anggota, bukan menjadi penghambat.`
  },
  {
    id: 10,
    number: 10,
    subject: 'Ekonomi',
    topic: 'Persamaan Dasar Akuntansi (PDA)',
    type: 'true-false-table',
    stimulus: `Transaksi yang terjadi pada perusahaan jasa "Langit Biru" milik Pak Anton di bulan Maret tahun 2025. Transaksi pengaruh terhadap persamaan dasar akuntansi:
$$\\text{Aset} = \\text{Kewajiban} + \\text{Ekuitas}$$`,
    text: 'Tentukan Benar atau Salah untuk setiap analisis transaksi berikut!',
    statements: [
      {
        id: 's1',
        text: 'Pak Anton menyetorkan uang tunai sebesar Rp60.000.000,00 sebagai modal awal akan menambah asset dan ekuitas.',
        correct: true
      },
      {
        id: 's2',
        text: 'Perusahaan menyewa kantor untuk 6 bulan ke depan dengan membayar lunas sebesar Rp12.000.000,00 akan menambah asset dan kewajiban.',
        correct: false
      },
      {
        id: 's3',
        text: 'Perusahaan menerima pendapatan jasa secara tunai sebesar Rp7.000.000,00 menambah asset dan ekuitas.',
        correct: true
      }
    ],
    officialKeyText: 'Benar, Salah, Benar',
    discussion: `Analisis transaksi pada Persamaan Dasar Akuntansi ($\\text{Aset} = \\text{Kewajiban} + \\text{Ekuitas}$):
* **Pernyataan 1 (Benar)**: Setoran modal awal oleh pemilik menambah akun Kas (Aset $+\\text{Rp}60.000.000,00$) dan menambah akun Modal Anton (Ekuitas $+\\text{Rp}60.000.000,00$).
* **Pernyataan 2 (Salah)**: Pembayaran tunai sewa kantor di muka 6 bulan menambah akun Sewa Dibayar di Muka (Aset $+\\text{Rp}12.000.000,00$) dan mengurangi akun Kas (Aset $-\\text{Rp}12.000.000,00$). Transaksi ini merupakan pergeseran komposisi antarakun aset (tidak memengaruhi Kewajiban).
* **Pernyataan 3 (Benar)**: Penerimaan pendapatan jasa secara tunai menambah akun Kas (Aset $+\\text{Rp}7.000.000,00$) dan menambah Pendapatan yang menaikkan Modal (Ekuitas $+\\text{Rp}7.000.000,00$).`
  },
  {
    id: 11,
    number: 11,
    subject: 'Ekonomi',
    topic: 'Kelangkaan Sumber Daya & Kebijakan Alokasi',
    type: 'checkboxes',
    stimulus: `Kota Maju sedang menghadapi masalah serius terkait kelangkaan air bersih akibat musim kemarau panjang selama 5 bulan berturut-turut. Data dari Dinas Lingkungan Hidup menunjukkan:
* Ketersediaan air bersih turun 25% dibanding tahun sebelumnya.
* Konsumsi air per kapita justru meningkat sebesar 10% karena pertumbuhan penduduk dan aktivitas ekonomi.
* Sebagian besar rumah tangga masih menggunakan metode pengambilan air konvensional.
* Infrastruktur penyediaan air saat ini belum mampu memenuhi kebutuhan masyarakat secara optimal.`,
    text: 'Berdasarkan informasi tersebut, manakah solusi yang sebaiknya diterapkan oleh dievaluasi oleh pemerintah untuk mengatasi kelangkaan air bersih di Kota Maju? (Pilihlah jawaban yang benar! Jawaban benar lebih dari satu)',
    options: [
      { id: 'a', text: 'Pembatasan penggunaan air dan peningkatan tarif menjadi salah satu cara untuk mengendalikan permintaan air secara langsung.', correct: true },
      { id: 'b', text: 'Mengedukasi masyarakat tentang konservasi air dapat membantu menurunkan konsumsi air jangka panjang.', correct: true },
      { id: 'c', text: 'Pembangunan fasilitas baru adalah solusi terbaik dan paling cepat untuk mengatasi kelangkaan air saat ini.' },
      { id: 'd', text: 'Pemerintah perlu melakukan evaluasi berkala terhadap efektivitas kebijakan pengendalian penggunaan air.', correct: true },
      { id: 'e', text: 'Pendekatan teknologi hemat air tidak tepat karena masyarakat belum terbiasa menggunakannya.' }
    ],
    correctAnswer: ['a', 'b', 'd'],
    officialKeyText: 'A, B, dan D',
    discussion: `Solusi komprehensif penanganan kelangkaan sumber daya air bersih:
* **Pilihan A (Tepat)**: Pembatasan kuota dan skema tarif progresif/disinsentif secara efektif mengerem laju konsumsi air yang melonjak $10\\%$ dalam jangka pendek.
* **Pilihan B (Tepat)**: Edukasi dan sosialisasi budaya hemat air membentuk perilaku konservasi jangka panjang yang berkelanjutan.
* **Pilihan D (Tepat)**: Evaluasi kebijakan secara berkala memastikan langkah tanggap krisis berjalan tepat sasaran dan adaptif terhadap kondisi hidrologis.
* *Pilihan C (Tidak Tepat)*: Pembangunan infrastruktur pengolahan air membutuhkan waktu perencanaan dan konstruksi bertahun-tahun sehingga bukan solusi instan tercepat saat krisis berlangsung.
* *Pilihan E (Tidak Tepat)*: Teknologi hemat air justru inovasi strategis yang harus diadopsi dan dibiasakan ke masyarakat.`
  },
  {
    id: 12,
    number: 12,
    subject: 'Ekonomi',
    topic: 'Ketenagakerjaan & Strategi Mengatasi Pengangguran',
    type: 'true-false-table',
    stimulus: 'Pengangguran merupakan salah satu permasalahan krusial yang terjadi di Indonesia. Beberapa wilayah dengan tingkat pengangguran tertinggi berdasarkan data Badan Pusat Statistik (BPS) pada Agustus 2024 di antaranya Provinsi Jawa Barat (6,75%), Banten (6,68%), Papua (6,48%), Papua Barat Daya (6,44%), dan Kepulauan Riau (6,39%). Pengangguran tersebut disebabkan oleh berbagai faktor diantaranya terdapat kesenjangan antara keterampilan pencari kerja dengan kebutuhan pasar, keterbatasan lapangan kerja serta faktor ekonomi makro.',
    text: 'Manakah solusi yang dapat diterapkan untuk menyelesaikan permasalahan tersebut? Tentukan Benar atau Salah untuk setiap pernyataan berikut!',
    statements: [
      {
        id: 's1',
        text: 'Peningkatan upah bagi tenaga kerja.',
        correct: false
      },
      {
        id: 's2',
        text: 'Mendorong investasi daerah melalui insentif pajak dan kemudahan perizinan.',
        correct: true
      },
      {
        id: 's3',
        text: 'Menyediakan akses pembiayaan, pelatihan, dan pendampingan bagi pelaku UMKM.',
        correct: true
      }
    ],
    officialKeyText: 'Salah, Benar, Benar',
    discussion: `Evaluasi kebijakan penanggulangan pengangguran terbuka:
* **Pernyataan 1: Peningkatan upah bagi tenaga kerja (Salah)**: Menaikkan upah minimum tanpa diimbangi peningkatan produktivitas pekerja akan meningkatkan beban ongkos produksi industri, yang berpotensi memicu rasionalisasi biaya/PHK dan menambah pengangguran.
* **Pernyataan 2: Mendorong investasi daerah melalui insentif pajak dan izin mudah (Benar)**: Kemudahan berusaha (*ease of doing business*) menarik investor domestik dan asing membuka sentra industri baru yang menyerap banyak tenaga kerja lokal.
* **Pernyataan 3: Menyediakan akses pembiayaan, pelatihan vokasi, dan pendampingan UMKM (Benar)**: Mengatasi masalah kesenjangan keterampilan (*skill mismatch*) serta menciptakan lapangan kerja wirausaha mandiri.`
  },
  {
    id: 13,
    number: 13,
    subject: 'Ekonomi',
    topic: 'Bank Sentral & Instrumen Kebijakan Moneter',
    type: 'multiple',
    stimulus: 'Pada akhir tahun 2024, inflasi di Indonesia mulai menunjukkan tren peningkatan yang cukup signifikan. Untuk merespons hal tersebut, Bank Indonesia memutuskan menaikkan suku bunga acuan (BI Rate). Kebijakan ini diambil agar masyarakat mengurangi konsumsi dan menahan laju inflasi.',
    text: 'Berdasarkan ilustrasi di atas, Bank Indonesia sedang menjalankan fungsi sebagai ....',
    options: [
      { id: 'a', text: 'penyelamat likuiditas bank' },
      { id: 'b', text: 'pengawasan sistem keuangan' },
      { id: 'c', text: 'penjaga stabilitas sistem pembayaran' },
      { id: 'd', text: 'pelaksana kebijakan moneter', correct: true },
      { id: 'e', text: 'pengelola cadangan devisa' }
    ],
    officialKeyText: 'D. pelaksana kebijakan moneter',
    discussion: `Menaikkan atau menurunkan suku bunga acuan (*BI Rate / BI-7 Day Reverse Repo Rate*) adalah instrumen utama yang dijalankan Bank Sentral (Bank Indonesia) dalam rangka melaksanakan **kebijakan moneter** (*monetary policy*).
Penaikan suku bunga acuan merupakan bentuk kebijakan moneter kontraktif (*tight money policy*) yang bertujuan menarik likuiditas dari pasar, mendorong masyarakat menabung, mengerem konsumsi kredit, dan menekan laju inflasi agar stabilitas nilai rupiah terjaga (Opsi D).`
  },
  {
    id: 14,
    number: 14,
    subject: 'Ekonomi',
    topic: 'Neraca Perdagangan & Hilirisasi Ekspor',
    type: 'multiple',
    stimulus: 'Selama tiga bulan pertama tahun 2024, ekspor Indonesia turun 1,5% karena permintaan dunia terhadap komoditas utama seperti batu bara dan minyak sawit menurun. Sementara itu, impor barang konsumsi naik 10%. Akibatnya, neraca perdagangan Indonesia mengalami defisit sebesar USD 1,2 miliar. Pemerintah berencana mengambil langkah strategis untuk meningkatkan ekspor dan mengendalikan impor.',
    text: 'Berdasarkan informasi, kebijakan apa yang dapat diterapkan pemerintah untuk memperbaiki neraca perdagangan tersebut?',
    options: [
      { id: 'a', text: 'Memberikan insentif ekspor untuk sektor industri strategis dan mengenakan tarif tinggi untuk semua barang impor.' },
      { id: 'b', text: 'Meningkatkan ekspor produk manufaktur dan mengurangi ketergantungan pada ekspor komoditas mentah.', correct: true },
      { id: 'c', text: 'Menurunkan suku bunga agar masyarakat lebih konsumtif sehingga meningkatkan impor.' },
      { id: 'd', text: 'Meningkatkan belanja negara produk manufaktur agar mendorong lebih banyak konsumsi barang impor.' },
      { id: 'e', text: 'Menghentikan semua impor barang modal untuk mengurangi pengeluaran devisa.' }
    ],
    officialKeyText: 'B. Meningkatkan ekspor produk manufaktur dan mengurangi ketergantungan pada ekspor komoditas mentah.',
    discussion: `Defisit neraca perdagangan terjadi karena kelemahan struktural, yaitu ketergantungan ekspor pada komoditas mentah yang rentan terhadap volatilitas harga dan penurunan permintaan pasar global.
Solusi strategis jangka panjang yang paling tepat adalah melakukan hilirisasi industri untuk **meningkatkan ekspor produk manufaktur bernilai tambah tinggi (*value-added products*)** serta mendiversifikasi produk ekspor agar tidak rentan terhadap gejolak harga komoditas mentah (Opsi B).`
  },
  {
    id: 15,
    number: 15,
    subject: 'Ekonomi',
    topic: 'Laporan Laba Rugi Akuntansi Keuangan',
    type: 'multiple',
    stimulus: `Berikut adalah data keuangan PT Sejahtera Makmur per 31 Desember 2023:
* Pendapatan usaha: $\\text{Rp}120.000.000,00$
* Beban gaji karyawan: $\\text{Rp}25.000.000,00$
* Beban listrik dan air: $\\text{Rp}5.000.000,00$
* Beban penyusutan peralatan: $\\text{Rp}10.000.000,00$
* Beban sewa gedung: $\\text{Rp}15.000.000,00$
* Aset lancar: $\\text{Rp}80.000.000,00$
* Aset tetap: $\\text{Rp}150.000.000,00$
* Utang jangka pendek: $\\text{Rp}30.000.000,00$
* Utang jangka panjang: $\\text{Rp}50.000.000,00$
* Modal awal pemilik: $\\text{Rp}100.000.000,00$`,
    text: 'Berdasarkan data tersebut, berapakah laba bersih yang diperoleh perusahaan?',
    options: [
      { id: 'a', text: 'Rp50.000.000,00' },
      { id: 'b', text: 'Rp58.000.000,00' },
      { id: 'c', text: 'Rp65.000.000,00', correct: true },
      { id: 'd', text: 'Rp72.000.000,00' },
      { id: 'e', text: 'Rp80.000.000,00' }
    ],
    officialKeyText: 'C. Rp65.000.000,00',
    discussion: `Laba bersih (*Net Income*) pada laporan laba rugi dihitung murni dari selisih antara Pendapatan Usaha dengan Total Beban Usaha operasional:
$$\\text{Laba Bersih} = \\text{Pendapatan Usaha} - \\sum \\text{Beban Usaha}$$

**1. Hitung Total Beban Usaha:**
$$\\text{Beban Gaji} = \\text{Rp}25.000.000,00$$
$$\\text{Beban Listrik \\& Air} = \\text{Rp}5.000.000,00$$
$$\\text{Beban Penyusutan Peralatan} = \\text{Rp}10.000.000,00$$
$$\\text{Beban Sewa Gedung} = \\text{Rp}15.000.000,00$$
$$\\text{Total Beban} = 25\\text{ jt} + 5\\text{ jt} + 10\\text{ jt} + 15\\text{ jt} = \\text{Rp}55.000.000,00$$

**2. Hitung Laba Bersih:**
$$\\text{Laba Bersih} = \\text{Rp}120.000.000,00 - \\text{Rp}55.000.000,00 = \\text{Rp}65.000.000,00$$

*(Catatan: Akun Aset Lancar, Aset Tetap, Utang Jangka Pendek, Utang Jangka Panjang, dan Modal Awal adalah elemen Neraca/Posisi Keuangan, sehingga tidak memengaruhi perhitungan laba rugi).*

Jadi, laba bersih perusahaan adalah **Rp65.000.000,00** (Opsi C).`
  },
  {
    id: 16,
    number: 16,
    subject: 'Ekonomi',
    topic: 'Elastisitas Permintaan & Analisis Penerimaan Total',
    type: 'checkboxes',
    stimulus: `Berikut ini data permintaan kopi di Kafe Milenial pada bulan Juni 2024:

| Menu Kopi | Harga Awal | Permintaan Awal | Harga Promo | Permintaan Promo |
|---|---|---|---|---|
| Kopi Nusantara | $\\text{Rp}22.000,00$ | $500$ | $\\text{Rp}20.000,00$ | $700$ |
| Kopi Mantap | $\\text{Rp}21.000,00$ | $600$ | $\\text{Rp}19.000,00$ | $700$ |
| Kopi Sejuk | $\\text{Rp}20.000,00$ | $700$ | $\\text{Rp}18.000,00$ | $800$ |
| Kopi Rakyat | $\\text{Rp}18.000,00$ | $850$ | $\\text{Rp}16.000,00$ | $1.100$ |
| Kopi Hemat | $\\text{Rp}16.000,00$ | $1.000$ | $\\text{Rp}14.000,00$ | $1.200$ |`,
    text: 'Berdasarkan data tersebut, temukan peryataan berikut ini yang benar berdasarkan prinsip ekonomi! (Jawaban benar lebih dari satu)',
    options: [
      { id: 'a', text: 'Penurunan harga kopi meningkatkan jumlah permintaan karena permintaan bersifat elastis terhadap harga.', correct: true },
      { id: 'b', text: 'Penurunan harga selalu menurunkan pendapatan total produsen, karena harga per unit turun.' },
      { id: 'c', text: 'Adanya penurunan harga kopi dapat meningkatkan loyalitas konsumen dan volume penjualan.', correct: true },
      { id: 'd', text: 'Pendapatan Kafe Milenial menurun karena permintaan kopi bersifat inelastis terhadap harga.' },
      { id: 'e', text: 'Adanya promo menyebabkan jumlah permintaan kopi meningkat, sehingga sesuai dengan hukum permintaan.' }
    ],
    correctAnswer: ['a', 'c'],
    officialKeyText: 'A dan C',
    discussion: `Analisis elastisitas harga permintaan dan penerimaan produsen:
* **Pernyataan A (Benar)**: Perhatikan contoh Kopi Nusantara (turun harga $-9,1\\%$ menghasilkan lonjakan permintaan $+40\\%$) dan Kopi Rakyat (turun harga $-11,1\\%$ menghasilkan lonjakan $+29,4\\%$). Karena persentase perubahan kuantitas lebih besar daripada persentase perubahan harga ($|E_d| > 1$), maka permintaan bersifat **elastis terhadap harga**.
* **Pernyataan C (Benar)**: Pemberian harga promo diskon terbukti memperbesar volume penjualan secara signifikan dan menarik loyalitas basis konsumen kafe.
* *Pernyataan B & D (Salah)*: Pada barang dengan elastisitas permintaan elastis ($|E_d| > 1$), penurunan harga justru **meningkatkan Penerimaan Total** ($\\text{Total Revenue} = P \\times Q$). Contoh Kopi Nusantara: $\\text{TR}_1 = 22.000 \\times 500 = 11\\text{ juta}$, sedangkan $\\text{TR}_2 = 20.000 \\times 700 = 14\\text{ juta}$ (pendapatan naik).`
  },
  {
    id: 17,
    number: 17,
    subject: 'Ekonomi',
    topic: 'Indeks Harga Konsumen (IHK) & Laju Inflasi',
    type: 'multiple',
    stimulus: 'Berdasarkan data Badan Pusat Statistik, Indeks Harga Konsumen (IHK) di suatu wilayah tercatat sebesar 112 pada tahun 2022 dan meningkat menjadi 118 pada tahun 2023. Di sisi lain, pada tahun 2024 naik kembali menjadi 125.',
    text: 'Berdasarkan data tersebut, manakah pernyataan berikut yang paling tepat mengenai perkembangan laju inflasi dari tahun ke tahun?',
    options: [
      { id: 'a', text: 'Inflasi tahun 2023 lebih tinggi dibandingkan tahun 2024.' },
      { id: 'b', text: 'Inflasi tahun 2023 dan 2024 menunjukkan tren penurunan.' },
      { id: 'c', text: 'Inflasi tahun 2024 lebih tinggi dibandingkan tahun 2023.', correct: true },
      { id: 'd', text: 'Inflasi pada tahun 2023 mencapai tertinggi adalah 7%.' },
      { id: 'e', text: 'Tingkat inflasi tahun 2024 yaitu 5% lebih rendah dari tahun sebelumnya.' }
    ],
    officialKeyText: 'C. Inflasi tahun 2024 lebih tinggi dibandingkan tahun 2023.',
    discussion: `Laju inflasi tahunan dihitung dengan rumus berbasis Indeks Harga Konsumen (IHK):
$$\\text{Laju Inflasi } t = \\frac{\\text{IHK}_{t} - \\text{IHK}_{t-1}}{\\text{IHK}_{t-1}} \\times 100\\%$$

**1. Laju Inflasi Tahun 2023:**
$$\\text{Inflasi}_{2023} = \\frac{118 - 112}{112} \\times 100\\% = \\frac{6}{112} \\times 100\\% \\approx 5,357\\% \\approx 5,36\\%$$

**2. Laju Inflasi Tahun 2024:**
$$\\text{Inflasi}_{2024} = \\frac{125 - 118}{118} \\times 100\\% = \\frac{7}{118} \\times 100\\% \\approx 5,932\\% \\approx 5,93\\%$$

**Perbandingan:**
Karena laju inflasi tahun $2024\\ (5,93\\%)$ lebih tinggi dibanding laju inflasi tahun $2023\\ (5,36\\%)$, maka kesimpulan yang paling tepat adalah **Inflasi tahun 2024 lebih tinggi dibandingkan tahun 2023** (Opsi C).`
  },
  {
    id: 18,
    number: 18,
    subject: 'Ekonomi',
    topic: 'Kebijakan Moneter Penanganan Stagflasi & Inflasi',
    type: 'checkboxes',
    stimulus: `Pada triwulan kedua tahun 2024, tingkat inflasi nasional melonjak menjadi 7,5% year-on-year, jauh melampaui target inflasi 3%. Kenaikan inflasi disebabkan oleh kombinasi dari:
* Gangguan distribusi pangan domestik akibat cuaca ekstrem dan konflik logistik.
* Depresiasi nilai tukar rupiah terhadap dolar AS sebesar 12% dalam tiga bulan terakhir.
* Lonjakan harga energi global akibat ketegangan geopolitik.
* Ekspektasi inflasi yang meningkat di kalangan pelaku usaha dan konsumen, yang tercermin dari kenaikan upah dan harga-harga secara luas.
Di sisi lain, pertumbuhan ekonomi nasional pada saat yang sama melambat ke level 4,2% (di bawah target 5,5%), dan angka pengangguran terbuka naik menjadi 6,8%.`,
    text: 'Berdasarkan ilustrasi tersebut, manakah kebijakan moneter yang tepat untuk mengatasi masalah tersebut? (Jawaban benar lebih dari satu)',
    options: [
      { id: 'a', text: 'Menaikkan suku bunga acuan (BI Rate).', correct: true },
      { id: 'b', text: 'Menurunkan Giro Wajib Minimum (GWM) perbankan.' },
      { id: 'c', text: 'Menjual Surat Berharga Negara (SBN) di pasar terbuka.', correct: true },
      { id: 'd', text: 'Melakukan intervensi di pasar valas untuk menstabilkan rupiah.', correct: true },
      { id: 'e', text: 'Meningkatkan jumlah uang beredar untuk menjaga konsumsi masyarakat.' }
    ],
    correctAnswer: ['a', 'c', 'd'],
    officialKeyText: 'A, C, dan D',
    discussion: `Kombinasi instrumen kebijakan moneter Bank Sentral dalam menekan lonjakan inflasi $7,5\\%$ dan depresiasi kurs rupiah $12\\%$:
* **Pilihan A (Tepat)**: Menaikkan BI Rate (*Tight Money Policy*) meredam ekspektasi inflasi, mengendalikan agregat konsumsi, serta meningkatkan daya tarik imbal hasil aset keuangan domestik.
* **Pilihan C (Tepat)**: Operasi Pasar Terbuka dengan menjual SBN (*Open Market Selling*) menyerap kelebihan uang beredar dari masyarakat ke bank sentral.
* **Pilihan D (Tepat)**: Intervensi pasar valas dengan *triple intervention* (pasar spot, DNDF, dan SBN pasar sekunder) menahan depresiasi rupiah guna membatasi lonjakan *imported inflation*.
* *Pilihan B & E (Tidak Tepat)*: Menurunkan GWM atau menambah jumlah uang beredar adalah kebijakan moneter ekspansif yang justru akan memperparah inflasi yang sudah berada di angka $7,5\\%$.`
  },
  {
    id: 19,
    number: 19,
    subject: 'Ekonomi',
    topic: 'Peran BUMN sebagai Agen Pembangunan',
    type: 'checkboxes',
    stimulus: 'PT Perkebunan Nusantara (PTPN) merupakan sebuah Badan Usaha Milik Negara (BUMN) di sektor perkebunan, melakukan ekspansi usaha dengan membuka lahan baru dan membangun pabrik pengolahan sawit di beberapa daerah tertinggal. Langkah ini menciptakan lapangan kerja baru bagi masyarakat sekitar, meningkatkan pendapatan petani lokal melalui kemitraan, serta meningkatkan ekspor hasil perkebunan ke mancanegara.',
    text: 'Berdasarkan ilustrasi tersebut, manakah dampak dari peran badan usaha PTPN terhadap perekonomian Indonesia? (Jawaban benar lebih dari satu)',
    options: [
      { id: 'a', text: 'Meningkatkan kesempatan kerja di wilayah tertinggal.', correct: true },
      { id: 'b', text: 'Meningkatkan potensi impor hasil perkebunan.' },
      { id: 'c', text: 'Mendorong pemerataan pembangunan antarwilayah.', correct: true },
      { id: 'd', text: 'Meningkatkan penerimaan devisa negara dari ekspor.', correct: true },
      { id: 'e', text: 'Melemahkan daya saing petani lokal dalam jangka panjang.' }
    ],
    correctAnswer: ['a', 'c', 'd'],
    officialKeyText: 'A, C, dan D',
    discussion: `Peran strategis BUMN (PTPN) sebagai agen pembangunan (*agent of development*):
* **Pilihan A (Tepat)**: Membuka lapangan pekerjaan baru di wilayah tertinggal, menyerap angkatan kerja setempat, dan mengurangi disparitas ekonomi.
* **Pilihan C (Tepat)**: Pembangunan pabrik pengolahan di luar pusat kota mendorong pemerataan infrastruktur dan aktivitas ekonomi antarwilayah.
* **Pilihan D (Tepat)**: Ekspor produk perkebunan olahan menyumbang penerimaan devisa negara secara signifikan.
* *Pilihan B & E (Tidak Tepat)*: PTPN memperbesar ekspor (bukan impor) dan memberdayakan petani lokal melalui kemitraan yang memperkuat daya saing ekonomi rakyat.`
  },
  {
    id: 20,
    number: 20,
    subject: 'Ekonomi',
    topic: 'Analisis Komponen Ekuitas Persamaan Dasar Akuntansi',
    type: 'checkboxes',
    stimulus: 'Perusahaan dagang "Toko Berkah" milik Bapak Rahmat melakukan beberapa transaksi selama minggu pertama bulan Februari 2025. Manakah transaksi-transaksi yang mempengaruhi komponen ekuitas dalam persamaan dasar akuntansi?',
    text: 'Pilihlah jawaban yang benar! (Jawaban benar lebih dari satu)',
    options: [
      { id: 'a', text: 'Menyetorkan modal awal ke rekening perusahaan sebesar Rp75.000.000,00.', correct: true },
      { id: 'b', text: 'Membeli persediaan barang dagang secara kredit senilai Rp30.000.000,00.' },
      { id: 'c', text: 'Membayar sewa toko bulan Februari sebesar Rp5.000.000,00.', correct: true },
      { id: 'd', text: 'Menjual barang dagangan senilai Rp15.000.000,00 secara tunai (harga pokok penjualan: Rp9.000.000,00).', correct: true },
      { id: 'e', text: 'Membayar utang usaha sebesar Rp10.000.000,00.' }
    ],
    correctAnswer: ['a', 'c', 'd'],
    officialKeyText: 'A, C, dan D',
    discussion: `Dalam persamaan dasar akuntansi ($\\text{Aset} = \\text{Kewajiban} + \\text{Ekuitas}$), pos Ekuitas dipengaruhi oleh empat faktor: Setoran Modal ($+$), Pendapatan/Laba ($+$), Beban ($-$), dan Prive/Pengambilan Pribadi ($-$):
* **Transaksi A (Tepat)**: Setoran modal awal $+\\text{Rp}75.000.000,00$ langsung menambah pos **Ekuitas** (Modal Pemilik).
* **Transaksi C (Tepat)**: Pembayaran beban sewa $-\\text{Rp}5.000.000,00$ mengurangi pos **Ekuitas** (Beban Operasional).
* **Transaksi D (Tepat)**: Penjualan tunai $\\text{Rp}15.000.000,00$ dengan HPP $\\text{Rp}9.000.000,00$ menghasilkan keuntungan kotor sebesar $+\\text{Rp}6.000.000,00$ yang menambah pos **Ekuitas** (Laba Penjualan).
* *Transaksi B (Tidak Tepat)*: Menambah Persediaan (Aset) dan menambah Utang Dagang (Kewajiban). Tidak menyentuh Ekuitas.
* *Transaksi E (Tidak Tepat)*: Mengurangi Kas (Aset) dan mengurangi Utang Usaha (Kewajiban). Tidak menyentuh Ekuitas.`
  }
];
