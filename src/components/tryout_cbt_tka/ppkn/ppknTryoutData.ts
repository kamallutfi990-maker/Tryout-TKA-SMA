export interface PpknStatement {
  id: string;
  text: string;
  correct: boolean; // true for Tepat / Benar, false for Tidak Tepat / Salah
}

export interface PpknOption {
  id: string;
  text: string;
  correct?: boolean;
}

export interface PpknQuestion {
  id: number;
  number: number;
  subject: string;
  topic: string;
  type: 'multiple' | 'checkboxes' | 'tepat-table';
  stimulus?: string;
  text: string;
  options?: PpknOption[];
  statements?: PpknStatement[];
  correctAnswer?: string[]; // for checkboxes
  officialKeyText: string;
  discussion: string;
}

export const ppknTryoutData: PpknQuestion[] = [
  {
    id: 1,
    number: 1,
    subject: 'PPKn (PKn)',
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
Sejarah diakui sebagai disiplin ilmu karena memiliki ciri dan metodologi keilmuan yang baku, yaitu:
1. **Memiliki Objek Kajian**: Aktivitas dan peristiwa masa lalu umat manusia dalam dimensi ruang dan waktu.
2. **Memiliki Metode Ilmiah**: Dilakukan melalui langkah metodologis yang terstruktur:
   - *Heuristik* (pengumpulan jejak/sumber sejarah),
   - *Verifikasi / Kritik Sumber* (kritik intern dan ekstern untuk menguji keaslian serta kredibilitas data),
   - *Interpretasi* (penafsiran fakta-fakta sejarah secara logis),
   - *Historiografi* (penulisan laporan sejarah secara objektif).
3. **Empiris & Sistematis**: Berdasarkan data dan fakta nyata (bukan fiksi atau imajinasi semata), serta diorganisasikan secara kronologis dan kausalitas (sebab-akibat).`
  },
  {
    id: 2,
    number: 2,
    subject: 'PPKn (PKn)',
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
- **Tradisi Sekaten**: Merupakan rangkaian upacara peringatan Maulid Nabi Muhammad SAW yang dirintis oleh Raden Patah dan Sunan Kalijaga sejak era Kesultanan Demak sebagai sarana dakwah (menggunakan gamelan Sekati yang bermakna *Syahadatain*). Tradisi ini masih dilestarikan hingga kini oleh Keraton Kasunanan Surakarta dan Kasultanan Yogyakarta.
- **Tradisi Tabuik**: Upacara kultural masyarakat Pariaman, Sumatera Barat, dalam memperingati hari Asyura (gugurnya Husein bin Ali, cucu Nabi Muhammad SAW) yang telah mengalami akulturasi dengan kebudayaan Minangkabau lokal.
- **Pilihan Lainnya (Bukan Warisan Kerajaan Islam):**
  - *Upacara Kasada (Yadnya Kasada)*: Tradisi persembahan suci masyarakat suku Tengger yang beragama Hindu di kawasan Gunung Bromo.
  - *Wayang Topeng Malangan & Reog Ponorogo*: Kesenian tradisional yang berakar dari tradisi pra-Islam / era kerajaan Hindu-Buddha (Kediri-Majapahit).`
  },
  {
    id: 3,
    number: 3,
    subject: 'PPKn (PKn)',
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
- *Pernyataan 1 (Tepat)*: Pelabuhan Somba Opu (Makassar/Gowa) menganut prinsip laut bebas (*mare liberum*) dan menjadi pusat perdagangan transito bebas rempah-rempah yang merusak monopoli VOC di Maluku, sehingga VOC berusaha keras menaklukkannya.
- *Pernyataan 2 (Tidak Tepat)*: Sultan Hasanuddin terpaksa menandatangani Perjanjian Bongaya (1667) karena terdesak secara militer akibat aliansi VOC yang dipimpin Cornelis Speelman bersama Arung Palakka dari Bone, bukan karena ingin memperoleh konsesi dagang. Perjanjian ini justru merugikan kedaulatan Gowa.
- *Pernyataan 3 (Tepat)*: Perjanjian Bongaya memuat pasal-pasal yang sangat menguntungkan VOC, antara lain: VOC memperoleh monopoli dagang di Makassar, pedagang asing non-Belanda diusir, benteng-benteng Gowa dihancurkan kecuali Benteng Ujung Pandang (Fort Rotterdam), dan wilayah Gowa dipersempit.`
  },
  {
    id: 4,
    number: 4,
    subject: 'PPKn (PKn)',
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
Pada pertengahan tahun 1944, posisi militer Dai Nippon dalam Perang Pasifik (Asia Timur Raya) semakin terjepit setelah pangkalan militer Saipan jatuh ke tangan Sekutu. 
- Untuk mencegah rakyat Indonesia melancarkan pemberontakan serta untuk memobilisasi bantuan logistik, tenaga kerja (*romusha*), dan milisi rakyat (*PETA, Heiho*) dalam menghadapi invasi Sekutu, Perdana Menteri Kuniaki Koiso pada 7 September 1944 mengeluarkan *Janji Koiso* (janji kemerdekaan di kelak kemudian hari).
- Sebagai tindak lanjut janji politis tersebut, pada 1 Maret 1945 Letnan Jenderal Kumakichi Harada mengumumkan pembentukan BPUPK (*Dokuritsu Junbi Cosakai*) yang resmi dilantik pada 28 Mei 1945. Pembentukan ini adalah manuver taktis-politis Jepang di tengah situasi perang yang mendesak.`
  },
  {
    id: 5,
    number: 5,
    subject: 'PPKn (PKn)',
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
- *Pernyataan 1 (Tepat)*: Pemilu 1955 diselenggarakan di bawah landasan konstitusi UUDS 1950 untuk memilih anggota DPR definitif dan Dewan Konstituante guna membentuk sistem pemerintahan perwakilan rakyat yang berlandaskan stabilitas politik parlementer.
- *Pernyataan 2 (Tidak Tepat)*: Sistem pemerintahan Indonesia pada era 1950–1959 adalah **Parlementer Multi-Partai** (dengan Perdana Menteri sebagai kepala pemerintahan dan Presiden sebagai kepala negara), bukan sistem Presidensial. Hasil pemilu justru melahirkan fragmentasi kekuatan politik (*The Big Four*: PNI, Masyumi, NU, PKI).
- *Pernyataan 3 (Tepat)*: Pemilu 1955 tercatat sebagai salah satu pemilu paling demokratis, aman, dan jujur dalam sejarah Indonesia dengan tingkat partisipasi aktif pemilih melampaui 90%.`
  },
  {
    id: 6,
    number: 6,
    subject: 'PPKn (PKn)',
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
Faktor-faktor pemicu Gerakan Reformasi Mei 1998 meliputi:
1. **Krisis Moneter & Finansial**: Depresiasi parah nilai tukar rupiah terhadap dolar AS memicu kebangkrutan ribuan industri, gelombang PHK massal, dan lonjakan harga kebutuhan pokok (sembako).
2. **Kekecewaan Politik & Tuntutan Demokratisasi**: Praktik KKN (Korupsi, Kolusi, dan Nepotisme) yang mengakar, sentralisasi kekuasaan, pembungkaman kebebasan pers, dan represi militer selama 32 tahun Orde Baru memicu kemarahan mahasiswa dan masyarakat luas.
3. **Tekanan dan Kondisi Pinjaman IMF**: Kesepakatan bantuan pinjaman dana dari IMF mensyaratkan reformasi struktural, pencabutan subsidi, dan restrukturisasi perbankan nasional.
4. *Catatan*: Pemilu pada masa Orde Baru didominasi Golkar dan dinilai belum demokratis; pemerataan pembangunan juga belum tercapai sehingga timbul kesenjangan antarwilayah.`
  },
  {
    id: 7,
    number: 7,
    subject: 'PPKn (PKn)',
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
    officialKeyText: 'Berita koran Asia Raya 18 Agustus 1945; Naskah Teks Proklamasi Asli; Foto dokumentasi pengibaran bendera 17 Agustus 1945',
    discussion: `**Kunci Jawaban:**
- Berita koran Asia Raya tanggal 18 Agustus 1945 tentang Proklamasi.
- Teks proklamasi kemerdekaan Indonesia yang ditandatangani oleh Sukarno dan Hatta.
- Foto suasana pengibaran bendera tanggal 17 Agustus 1945 di Jalan Pegangsaan Timur No 56.

**Penjelasan Lengkap:**
- **Sumber Primer (*Primary Sources*)**: Kesaksian atau artefak yang dibuat sezaman langsung oleh orang yang menyaksikan atau terlibat dalam peristiwa tersebut saat peristiwa berlangsung.
  - *Naskah Proklamasi otentik* (ketikan Sayuti Melik bertandatangan Sukarno-Hatta).
  - *Dokumentasi foto asli* karya Frans dan Alex Mendur (IPPHOS) saat pengibaran bendera Merah Putih pada 17 Agustus 1945.
  - *Surat kabar kontemporer* terbitan 18 Agustus 1945 (seperti koran *Asia Raya* dan *Soeara Asia*).
- **Sumber Sekunder / Tersier**: Karya turunan yang disusun atau diproduksi di masa berikutnya melalui tahap rekonstruksi, interpretasi, dan kompilasi data (seperti Buku Sejarah Nasional Indonesia dan Film Dokumenter modern).`
  },
  {
    id: 8,
    number: 8,
    subject: 'PPKn (PKn)',
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
Faktor determinan kemajuan ekonomi Kesultanan Aceh pada abad ke-16:
1. **Kejatuhan Malaka (1511)**: Penaklukan Malaka oleh Portugis mendorong para saudagar Muslim (Arab, Gujarat, Persia, Tiongkok) mengalihkan rute pelayarannya dari Selat Malaka bagian timur ke pesisir barat Pulau Sumatera.
2. **Posisi Geografis di Pintu Gerbang Selat Malaka**: Aceh Darussalam terletak tepat di pintu masuk lalu lintas laut internasional yang menghubungkan Samudra Hindia dengan Kepulauan Nusantara.
3. **Pusat Ekspor Lada & Transit Komoditas**: Aceh memiliki armada dagang yang kuat dan memproduksi rempah-rempah unggulan bernilai tinggi seperti lada hitam, kapur barus, dan sutra.`
  },
  {
    id: 9,
    number: 9,
    subject: 'PPKn (PKn)',
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
Ciri-ciri perjuangan bangsa Indonesia melawan kolonialisme sebelum abad ke-20 (perjuangan tradisional/fisik):
1. **Bersifat Kedaerahan (*Lokal & Sporadis*)**: Perlawanan tidak meletus secara serentak melainkan parsial di wilayah masing-masing (seperti Perang Padri, Perang Diponegoro, Perang Banjar, Perang Aceh).
2. **Ketergantungan pada Pemimpin Kharismatik**: Dipimpin oleh raja, bangsawan, atau tokoh agama/ulama. Ketika pemimpin gugur atau tertangkap, perlawanan langsung padam.
3. **Persenjataan Tradisional & Tanpa Koordinasi Antardaerah**: Belum ada rasa persatuan nasional, sehingga mudah diadu domba (*devide et impera*).
4. *Perjuangan Modern*: Strategi perundingan/diplomasi, pengorganisasian modern (Budi Utomo, Sarekat Islam, PNI), dan kesadaran nasional baru berkembang pada masa Pergerakan Nasional (abad ke-20).`
  },
  {
    id: 10,
    number: 10,
    subject: 'PPKn (PKn)',
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
- *Pernyataan 1 (Tidak Tepat)*: Berbagai perlawanan rakyat (misal di Singaparna, Sukamanah, dan Indramayu) maupun milisi bersenjata bukanlah aksi tanpa perhitungan, melainkan respons perlawanan terorganisasi untuk membela kehormatan martabat rakyat dan menolak praktik kejam *romusha* serta upacara *seikerei*.
- *Pernyataan 2 (Tepat)*: Pemberontakan PETA di Blitar pada 14 Februari 1945 yang dipimpin oleh *Shodancho* Supriyadi merupakan aksi militer taktis dan terkoordinir dari para perwira muda yang telah menerima pelatihan taktik militer profesional.
- *Pernyataan 3 (Tepat)*: Gerakan perlawanan bawah tanah di Kalimantan Barat (Peristiwa Mandor) mengalami kegagalan dan penumpasan massal oleh tentara pendudukan Jepang (Kenpeitai) akibat adanya infiltrasi mata-mata dan kebocoran dokumen rencana perlawanan.`
  }
];
