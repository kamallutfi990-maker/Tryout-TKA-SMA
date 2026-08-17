export interface SejarahStatement {
  id: string;
  text: string;
  correct: boolean; // true for Tepat, false for Tidak Tepat
}

export interface SejarahOption {
  id: string;
  text: string;
  correct?: boolean;
}

export interface SejarahQuestion {
  id: number;
  number: number;
  subject: string;
  topic: string;
  type: 'multiple' | 'checkboxes' | 'tepat-table';
  stimulus?: string;
  text: string;
  options?: SejarahOption[];
  statements?: SejarahStatement[];
  correctAnswer?: string[]; // for checkboxes
  officialKeyText: string;
  discussion: string;
}

export const sejarahTryoutData: SejarahQuestion[] = [
  {
    id: 1,
    number: 1,
    subject: 'Sejarah',
    topic: 'Konsep Dasar & Ciri Sejarah sebagai Ilmu',
    type: 'multiple',
    stimulus: 'Sejarawan R. Moh. Ali mendefinisikan sejarah sebagai ilmu yang menyelidiki perkembangan mengenai peristiwa dan kejadian di masa lampau.',
    text: 'Berdasarkan pengertian tersebut, apa ciri utama sejarah sebagai ilmu?',
    options: [
      { id: 'a', text: 'Disusun berdasarkan kesaksian lisan dari para pelaku' },
      { id: 'b', text: 'Mengkaji peristiwa masa lalu secara sistematis dan berdasarkan metode ilmiah', correct: true },
      { id: 'c', text: 'Menyelidiki perubahan dan kesinambungan tradisi dalam' },
      { id: 'd', text: 'Mempelajari semua peristiwa yang pernah terjadi di masa lampau.' },
      { id: 'e', text: 'Menyusun narasi tentang kejadian di masa lalu berdasarkan imajinasi.' }
    ],
    officialKeyText: 'B. Mengkaji peristiwa masa lalu secara sistematis dan berdasarkan metode ilmiah',
    discussion: `**Kunci Jawaban:** B (Mengkaji peristiwa masa lalu secara sistematis dan berdasarkan metode ilmiah)

**Penjelasan Lengkap:**
Sejarah diakui sebagai ilmu karena memiliki metodologi keilmuan yang baku:
1. **Heuristik**: Tahap pengumpulan jejak, dokumen, atau sumber-sumber sejarah.
2. **Kritik Sumber / Verifikasi**: Pengujian keaslian (kritik ekstern) dan kredibilitas (kritik intern) fakta sejarah.
3. **Interpretasi**: Penafsiran data sejarah secara objektif dan logis.
4. **Historiografi**: Penulisan sintesis sejarah secara sistematis.

Sejarah tidak berlandaskan imajinasi semata, tidak hanya bergantung pada tradisi lisan, dan mengkaji peristiwa masa lalu manusia secara terstruktur dan kritis.`
  },
  {
    id: 2,
    number: 2,
    subject: 'Sejarah',
    topic: 'Akulturasi Budaya Kerajaan Islam di Nusantara',
    type: 'checkboxes',
    stimulus: `Kerajaan-kerajaan Islam di Indonesia, seperti Demak, Aceh, Mataram Islam, dan Ternate-Tidore, telah memberikan pengaruh besar terhadap perkembangan budaya masyarakat. Pengaruh tersebut tidak hanya tampak dalam sistem pemerintahan dan arsitektur, tetapi juga dalam tradisi, seni pertunjukan, dan upacara keagamaan yang masih dilestarikan hingga kini. Beberapa tradisi dan kesenian yang berkembang pada masa kerajaan Islam tetap hidup sebagai warisan budaya yang terus dipertahankan oleh masyarakat.`,
    text: 'Berdasarkan teks di atas, manakah yang merupakan peninggalan budaya dari masa kerajaan Islam yang masih berlanjut di masa kini? (Pilihan ganda kompleks / centang lebih dari satu)',
    options: [
      { id: 'opt1', text: 'Upacara Kasada' },
      { id: 'opt2', text: 'Tradisi Sekaten', correct: true },
      { id: 'opt3', text: 'Tradisi Tabuik', correct: true },
      { id: 'opt4', text: 'Wayang Topeng Malangan' },
      { id: 'opt5', text: 'Tari Reog Ponorogo' }
    ],
    correctAnswer: ['opt2', 'opt3'],
    officialKeyText: 'Tradisi Sekaten dan Tradisi Tabuik',
    discussion: `**Kunci Jawaban:** Tradisi Sekaten & Tradisi Tabuik

**Penjelasan Lengkap:**
- **Tradisi Sekaten**: Upacara peringatan Maulid Nabi Muhammad SAW yang dirintis sejak masa Kesultanan Demak oleh Sunan Kalijaga dan Raden Patah, serta terus dilestarikan oleh Keraton Surakarta dan Kasultanan Yogyakarta.
- **Tradisi Tabuik**: Upacara peringatan Asyura (mengenang gugurnya cucu Nabi Muhammad SAW, Husein bin Ali) yang berkembang di Pariaman, Sumatera Barat, sebagai akulturasi budaya Islam.
- **Pilihan Lainnya:**
  - *Upacara Kasada*: Tradisi masyarakat suku Tengger yang beragama Hindu di kawasan Bromo.
  - *Wayang Topeng Malangan & Reog Ponorogo*: Kesenian yang berakar dari tradisi pra-Islam / era kerajaan Hindu-Buddha.`
  },
  {
    id: 3,
    number: 3,
    subject: 'Sejarah',
    topic: 'Perlawanan Kesultanan Gowa & Perjanjian Bongaya',
    type: 'tepat-table',
    stimulus: `Sultan Hasanuddin merupakan salah satu penguasa lokal yang tidak mau tunduk pada monopoli dagang VOC sehingga menimbulkan konflik bersenjata selama beberapa tahun. Pada akhirnya VOC berhasil memaksa Sultan Hasanuddin untuk melakukan perundingan di Bongaya pada 18 November 1667. Isi perjanjian tersebut membatasi wilayah kekuasaan Kesultanan Gowa dan memperkuat kedudukan VOC.`,
    text: 'Pilihlah Tepat atau Tidak Tepat pada pernyataan berikut yang menggambarkan kondisi konflik Gowa dengan VOC!',
    statements: [
      {
        id: 'stmt1',
        text: 'VOC berusaha melemahkan Gowa karena posisinya yang strategis dalam perdagangan di kawasan timur kepulauan Nusantara.',
        correct: true
      },
      {
        id: 'stmt2',
        text: 'Sultan Hasanuddin bersedia menandatangani Perjanjian Bongaya untuk memperoleh konsesi dagang yang lebih luas.',
        correct: false
      },
      {
        id: 'stmt3',
        text: 'Perjanjian Bongaya memperkuat kedudukan VOC dalam monopoli perdagangan di Nusantara.',
        correct: true
      }
    ],
    officialKeyText: 'Tepat | Tidak Tepat | Tepat',
    discussion: `**Kunci Jawaban:**
1. VOC berusaha melemahkan Gowa karena posisinya yang strategis dalam perdagangan di kawasan timur kepulauan Nusantara. (**Tepat**)
2. Sultan Hasanuddin bersedia menandatangani Perjanjian Bongaya untuk memperoleh konsesi dagang yang lebih luas. (**Tidak Tepat**)
3. Perjanjian Bongaya memperkuat kedudukan VOC dalam monopoli perdagangan di Nusantara. (**Tepat**)

**Penjelasan Lengkap:**
- Makassar (Kerajaan Gowa) merupakan pelabuhan transito bebas yang menolak monopoli rempah-rempah VOC di Maluku, sehingga VOC melancarkan ekspedisi militer untuk meredam kekuatannya.
- Sultan Hasanuddin menandatangani Perjanjian Bongaya (1667) karena terdesak secara militer akibat koalisi VOC dan Arung Palakka, bukan untuk memperluas konsesi dagang. Perjanjian ini justru mempersempit kedaulatan dan membatasi ruang gerak ekonomi Gowa.
- Perjanjian Bongaya memberikan monopoli dagang penuh kepada VOC di pelabuhan Makassar dan membatasi pedagang asing non-Belanda.`
  },
  {
    id: 4,
    number: 4,
    subject: 'Sejarah',
    topic: 'Latar Belakang Pembentukan BPUPK Era Pendudukan Jepang',
    type: 'multiple',
    stimulus: 'Pada masa-masa akhir pendudukannya di Indonesia, Jepang semakin terdesak dalam Perang Asia Timur Raya. Untuk memperoleh dukungan rakyat Indonesia, Jepang menjanjikan kemerdekaan dan membentuk BPUPK sebagai langkah awal persiapan. BPUPK kemudian menjadi forum penting bagi tokoh-tokoh bangsa dalam merumuskan dasar negara dan arah masa depan Indonesia.',
    text: 'Dari berbagai latar belakang politik dan militer saat itu, pilih yang menjadi alasan paling tepat dan mendalam bagi Jepang membentuk BPUPK?',
    options: [
      { id: 'a', text: 'Menjaga citra baiknya di mata rakyat Indonesia setelah kekalahan mulai tampak.' },
      { id: 'b', text: 'Memperlihatkan kepada dunia bahwa mereka mendukung kemerdekaan bangsa-bangsa Asia.' },
      { id: 'c', text: 'Terdesak dalam perang dan perlu dukungan rakyat Indonesia, maka memberi janji kemerdekaan sebagai strategi politik.', correct: true },
      { id: 'd', text: 'Percaya bahwa rakyat Indonesia sudah siap memimpin negaranya sendiri tanpa intervensi asing.' },
      { id: 'e', text: 'Menghindari tekanan dari negara-negara Barat dengan menunjukkan kemajuan politik di wilayah jajahannya.' }
    ],
    officialKeyText: 'C. Terdesak dalam perang dan perlu dukungan rakyat Indonesia, maka memberi janji kemerdekaan sebagai strategi politik.',
    discussion: `**Kunci Jawaban:** C (Terdesak dalam perang dan perlu dukungan rakyat Indonesia, maka memberi janji kemerdekaan sebagai strategi politik.)

**Penjelasan Lengkap:**
Pada paruh akhir Perang Pasifik (1944–1945), posisi militer Jepang semakin terdesak oleh serangan Sekutu. Untuk memobilisasi tenaga, moral, dan logistik rakyat Indonesia demi kepentingan pertahanan Jepang, Perdana Menteri Kuniaki Koiso mengumumkan janji kemerdekaan di kemudian hari yang direalisasikan dengan pembentukan BPUPK (*Dokuritsu Junbi Cosakai*).`
  },
  {
    id: 5,
    number: 5,
    subject: 'Sejarah',
    topic: 'Dinamika Politik Demokrasi Liberal & Pemilu 1955',
    type: 'tepat-table',
    stimulus: `Pada masa Demokrasi Liberal, Indonesia mengalami ketidakstabilan politik akibat sering bergantinya kabinet. Untuk mengatasi hal ini, pemerintah mengeluarkan UU No. 7 Tahun 1953 yang mengatur pelaksanaan Pemilu 1955. Pemilu tersebut menjadi tonggak penting dalam sejarah Demokrasi Indonesia karena melibatkan partisipasi politik yang luas. Hasilnya menunjukkan adanya keberagaman kekuatan politik dan tantangan dalam mewujudkan stabilitas pemerintahan.`,
    text: 'Pada peristiwa Pemilu 1955 pada masa Demokrasi Liberal, manakah pernyataan berikut yang menggambarkan perkembangan politik Indonesia saat itu? Pilihlah Tepat atau Tidak Tepat untuk setiap pernyataan!',
    statements: [
      {
        id: 'stmt1',
        text: 'Pemilu 1955 bertujuan menyederhanakan partai politik dan mewujudkan sistem parlementer yang stabil.',
        correct: true
      },
      {
        id: 'stmt2',
        text: 'Salah satu hasil Pemilu 1955 adalah terbentuknya sistem pemerintahan presidensial yang kuat dan stabil.',
        correct: false
      },
      {
        id: 'stmt3',
        text: 'Partisipasi pemilih dalam Pemilu 1955 menunjukkan antusiasme rakyat terhadap demokrasi.',
        correct: true
      }
    ],
    officialKeyText: 'Tepat | Tidak Tepat | Tepat',
    discussion: `**Kunci Jawaban:**
1. Pemilu 1955 bertujuan menyederhanakan partai politik dan mewujudkan sistem parlementer yang stabil. (**Tepat**)
2. Salah satu hasil Pemilu 1955 adalah terbentuknya sistem pemerintahan presidensial yang kuat dan stabil. (**Tidak Tepat**)
3. Partisipasi pemilih dalam Pemilu 1955 menunjukkan antusiasme rakyat terhadap demokrasi. (**Tepat**)

**Penjelasan Lengkap:**
- Pemilu 1955 diselenggarakan berdasarkan UU No. 7 Tahun 1953 di bawah konstitusi UUDS 1950 untuk memilih anggota DPR dan Konstituante guna membentuk parlemen yang definitif dan stabil.
- Sistem pemerintahan yang berlaku saat itu adalah **Parlementer**, bukan Presidensial.
- Tingkat partisipasi pemilih sangat tinggi (mencapai lebih dari 90%) dan berjalan tertib, menjadikannya tonggak penting demokrasi Indonesia.`
  },
  {
    id: 6,
    number: 6,
    subject: 'Sejarah',
    topic: 'Krisis Multidimensi & Faktor Lahirnya Reformasi 1998',
    type: 'checkboxes',
    stimulus: `Pada akhir masa pemerintahan Presiden Soeharto, Indonesia mengalami krisis multidimensi. Krisis ekonomi akibat utang luar negeri yang besar, kekeringan karena El Nino, dan kebakaran hutan memperburuk situasi. Tekanan dari dalam negeri dan luar negeri mendorong desakan agar Indonesia segera melakukan reformasi. Puncaknya, Soeharto mengundurkan diri pada 21 Mei 1998.`,
    text: 'Sebutkan faktor-faktor utama penyebab lahirnya Reformasi di Indonesia pada tahun 1998! (Pilihan ganda kompleks / centang lebih dari satu)',
    options: [
      { id: 'opt1', text: 'Ketidakmampuan pemerintah menangani krisis ekonomi yang melanda seluruh sektor.', correct: true },
      { id: 'opt2', text: 'Kemenangan kubu oposisi dalam pemilihan umum yang demokratis.' },
      { id: 'opt3', text: 'Desakan internasional agar Indonesia menerima bantuan IMF dengan syarat reformasi.', correct: true },
      { id: 'opt4', text: 'Kekecewaan masyarakat terhadap rezim Orde Baru yang dianggap antidemokratis.', correct: true },
      { id: 'opt5', text: 'Suksesnya pembangunan infrastruktur nasional secara merata.' }
    ],
    correctAnswer: ['opt1', 'opt3', 'opt4'],
    officialKeyText: 'Ketidakmampuan menangani krisis ekonomi; Desakan internasional syarat IMF; Kekecewaan masyarakat terhadap rezim Orde Baru antidemokratis',
    discussion: `**Kunci Jawaban:**
- Ketidakmampuan pemerintah menangani krisis ekonomi yang melanda seluruh sektor.
- Desakan internasional agar Indonesia menerima bantuan IMF dengan syarat reformasi.
- Kekecewaan masyarakat terhadap rezim Orde Baru yang dianggap antidemokratis.

**Penjelasan Lengkap:**
Krisis moneter 1997–1998 memperparah ketimpangan ekonomi, inflasi tinggi, kebangkrutan perbankan, dan beban utang luar negeri. Di sisi lain, maraknya praktik KKN (Korupsi, Kolusi, Nepotisme) serta represi politik rezim Orde Baru memicu gelombang demonstrasi mahasiswa dan masyarakat. Bantuan dana IMF yang mewajibkan reformasi struktural turut mempercepat transisi politik.`
  },
  {
    id: 7,
    number: 7,
    subject: 'Sejarah',
    topic: 'Historiografi & Sumber Primer Sejarah Kemerdekaan',
    type: 'checkboxes',
    stimulus: `Peristiwa Proklamasi Kemerdekaan Indonesia pada 17 Agustus 1945 merupakan tonggak sejarah yang penting dan monumental. Untuk memahami peristiwa tersebut secara akurat, sejarawan menggunakan sumber primer, yaitu bukti langsung yang berasal dari masa terjadinya peristiwa atau semua yang dibuat pada saat kejadian berlangsung, bukan yang ditulis atau diproduksi jauh setelahnya.`,
    text: 'Berdasarkan informasi tersebut, manakah yang merupakan sumber primer peristiwa Proklamasi Kemerdekaan Indonesia 17 Agustus 1945? (Pilihan ganda kompleks / centang lebih dari satu)',
    options: [
      { id: 'opt1', text: 'Buku Sejarah Nasional Indonesia Jilid 6.' },
      { id: 'opt2', text: 'Berita koran Asia Raya tanggal 18 Agustus 1945 tentang Proklamasi.', correct: true },
      { id: 'opt3', text: 'Film dokumenter produksi Museum Perumusan Naskah Proklamasi Kemerdekaan.' },
      { id: 'opt4', text: 'Teks proklamasi kemerdekaan Indonesia yang ditandatangani oleh Sukarno dan Hatta.', correct: true },
      { id: 'opt5', text: 'Foto suasana pengibaran bendera tanggal 17 Agustus 1945 di Jalan Pegangsaan Timur No 56.', correct: true }
    ],
    correctAnswer: ['opt2', 'opt4', 'opt5'],
    officialKeyText: 'Berita koran Asia Raya 18 Agustus 1945; Teks Proklamasi Asli Sukarno-Hatta; Foto dokumentasi pengibaran bendera 17 Agustus 1945',
    discussion: `**Kunci Jawaban:**
- Berita koran Asia Raya tanggal 18 Agustus 1945 tentang Proklamasi.
- Teks proklamasi kemerdekaan Indonesia yang ditandatangani oleh Sukarno dan Hatta.
- Foto suasana pengibaran bendera tanggal 17 Agustus 1945 di Jalan Pegangsaan Timur No 56.

**Penjelasan Lengkap:**
Sumber primer adalah data sejarah yang dibuat atau direkam langsung pada kurun waktu peristiwa tersebut berlangsung oleh saksi/pelaku sejarah:
- Teks otentik proklamasi tulisan tangan/ketikan Sayuti Melik bertandatangan Sukarno-Hatta.
- Rekaman visual foto pengibaran bendera karya Mendur bersaudara (IPPHOS).
- Surat kabar sezaman (*Asia Raya* edisi 18 Agustus 1945).

Buku teks Sejarah Nasional Indonesia dan film dokumenter museum merupakan sumber sekunder/tersier karena disusun jauh setelah peristiwa terjadi melalui proses rekonstruksi.`
  },
  {
    id: 8,
    number: 8,
    subject: 'Sejarah',
    topic: 'Perekonomian & Jalur Perdagangan Kesultanan Aceh',
    type: 'multiple',
    stimulus: 'Kesultanan Aceh merupakan salah satu kerajaan bercorak Islam di Nusantara. Kerajaan ini mencapai puncak kejayaannya dalam bidang ekonomi pada abad ke-16. Letaknya di Selat Malaka membuat kapal-kapal dagang dari Arab, India, dan Tiongkok banyak yang singgah di pelabuhan yang dikuasai Kesultanan Aceh. Beberapa komoditas unggulan dari kerajaan ini adalah lada dan kapur barus yang banyak dicari oleh pedagang asing.',
    text: 'Berdasarkan informasi diatas, apa yang menyebabkan ekonomi Kesultanan Aceh pada abad ke-16 berkembang pesat?',
    options: [
      { id: 'a', text: 'Tanah yang sangat subur untuk pertanian.' },
      { id: 'b', text: 'Kekayaan alam berupa hasil tambang emas.' },
      { id: 'c', text: 'Hubungan persahabatan dengan kerajaan-kerajaan lain.' },
      { id: 'd', text: 'Kerajaan Aceh saat itu sedang mencapai puncak kejayaan.' },
      { id: 'e', text: 'Lokasi yang strategis dalam jalur perdagangan internasional.', correct: true }
    ],
    officialKeyText: 'E. Lokasi yang strategis dalam jalur perdagangan internasional.',
    discussion: `**Kunci Jawaban:** E (Lokasi yang strategis dalam jalur perdagangan internasional.)

**Penjelasan Lengkap:**
Setelah Malaka jatuh ke tangan Portugis pada tahun 1511, jalur perdagangan para saudagar Muslim (Arab, Persia, India, Tiongkok) beralih ke pantai barat Sumatera dan melintasi Selat Sunda. Pintu masuk Selat Malaka dikuasai oleh Kesultanan Aceh, menjadikannya bandar transit internasional yang ramai dan makmur, didukung oleh komoditas ekspor andalan seperti lada.`
  },
  {
    id: 9,
    number: 9,
    subject: 'Sejarah',
    topic: 'Karakteristik Perlawanan Kedaerahan Sebelum Abad ke-20',
    type: 'checkboxes',
    stimulus: 'Bangsa Indonesia melakukan berbagai perlawanan terhadap Belanda sebelum abad ke-20. Karakteristik dan strategi perlawanan pada masa tersebut berbeda-beda, bergantung pada tokoh yang memimpin dan kondisi lokal di masing-masing daerah.',
    text: 'Berdasarkan informasi tersebut, manakah yang menunjukkan karakteristik dalam strategi perlawanan terhadap Belanda sebelum abad ke-20? (Pilihan ganda kompleks / centang lebih dari satu)',
    options: [
      { id: 'opt1', text: 'Dilakukan secara sporadis di berbagai daerah.', correct: true },
      { id: 'opt2', text: 'Dipimpin oleh tokoh, ulama, atau bangsawan setempat.', correct: true },
      { id: 'opt3', text: 'Kurangnya koordinasi yang baik antarwilayah.', correct: true },
      { id: 'opt4', text: 'Dilakukan menggunakan strategi diplomasi.' },
      { id: 'opt5', text: 'Memanfaatkan organisasi modern.' }
    ],
    correctAnswer: ['opt1', 'opt2', 'opt3'],
    officialKeyText: 'Sporadis di berbagai daerah; Dipimpin tokoh/ulama/bangsawan setempat; Kurang koordinasi antarwilayah',
    discussion: `**Kunci Jawaban:**
- Dilakukan secara sporadis di berbagai daerah.
- Dipimpin oleh tokoh, ulama, atau bangsawan setempat.
- Kurangnya koordinasi yang baik antarwilayah.

**Penjelasan Lengkap:**
Karakteristik perlawanan bangsa Indonesia sebelum abad ke-20 (era perjuangan fisik/tradisional) berciri:
- Lokal/kedaerahan dan bersifat sporadis.
- Mengandalkan figur kharismatik (raja, ulama, bangsawan).
- Tidak terkoordinasi antarwilayah dan mudah dipatahkan politik *devide et impera*.

Perjuangan melalui diplomasi dan organisasi pergerakan modern baru berkembang pada abad ke-20 pasca berdirinya Budi Utomo 1908.`
  },
  {
    id: 10,
    number: 10,
    subject: 'Sejarah',
    topic: 'Strategi Perlawanan Rakyat & Tentara PETA Masa Pendudukan Jepang',
    type: 'tepat-table',
    stimulus: `Perlawanan terhadap pendudukan Jepang muncul di berbagai daerah, termasuk pemberontakan PETA di Blitar dan perlawanan rakyat Kalimantan Barat. Meskipun pada akhirnya berhasil dipadamkan, aksi-aksi tersebut menunjukkan bentuk perlawanan aktif rakyat Indonesia terhadap kekejaman dan penindasan Jepang.`,
    text: 'Tentukan Tepat dan Tidak Tepat pada setiap pernyataan berikut terkait strategi perlawanan!',
    statements: [
      {
        id: 'stmt1',
        text: 'Perlawanan dilakukan secara spontan tanpa strategi sehingga menunjukkan lemahnya perlawanan.',
        correct: false
      },
      {
        id: 'stmt2',
        text: 'Pemberontakan PETA di Blitar menunjukkan adanya perlawanan militer terorganisasi terhadap Jepang.',
        correct: true
      },
      {
        id: 'stmt3',
        text: 'Rencana perlawanan di Kalimantan Barat bocor karena kurangnya koordinasi dan infiltrasi mata-mata.',
        correct: true
      }
    ],
    officialKeyText: 'Tidak Tepat | Tepat | Tepat',
    discussion: `**Kunci Jawaban:**
1. Perlawanan dilakukan secara spontan tanpa strategi sehingga menunjukkan lemahnya perlawanan. (**Tidak Tepat**)
2. Pemberontakan PETA di Blitar menunjukkan adanya perlawanan militer terorganisasi terhadap Jepang. (**Tepat**)
3. Rencana perlawanan di Kalimantan Barat bocor karena kurangnya koordinasi dan infiltrasi mata-mata. (**Tepat**)

**Penjelasan Lengkap:**
- Perlawanan bersenjata rakyat maupun kesatuan militer bukan sekadar aksi spontan tanpa arah, melainkan bentuk reaksi terencana terhadap penderitaan akibat romusha dan penindasan fasisme Jepang.
- Pemberontakan tentara PETA di Blitar (Februari 1945) di bawah pimpinan Supriyadi merupakan aksi militer terstruktur dari prajurit terlatih.
- Gerakan bawah tanah di Kalimantan Barat (Peristiwa Mandor) mengalami kegagalan karena rencana perlawanan tercium oleh intelijen militer Jepang (Kenpeitai) melalui spionase sebelum gerakan sempat dilancarkan secara penuh.`
  }
];
