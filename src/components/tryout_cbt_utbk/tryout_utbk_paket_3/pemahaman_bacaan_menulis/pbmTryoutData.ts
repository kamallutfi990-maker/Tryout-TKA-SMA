import { UtbkQuestion } from '../types';

export const pbmTryoutData: UtbkQuestion[] = [
  {
    id: 1,
    readingText: '**(1)** Transisi energi fosil menuju energi baru dan terbarukan (EBT) menjadi agenda prioritas nasional dalam rangka mencapai target emisi nol bersih (*net zero emissions*) pada 2060. **(2)** Potensi energi surya dan panas bumi di Indonesia sangat melimpah, namun pemanfaatannya masih tergolong rendah. **(3)** Tingginya biaya investasi awal dan kendala transmisi jaringan interkoneksi antarpulau menjadi faktor penghambat utama. **(4)** Di samping itu, kerangka regulasi tarif listrik dari pembangkit EBT dinilai belum cukup atraktif bagi investor swasta. **(5)** Maka dari itu, harmonisasi regulasi dan insentif fiskal mutlak diperlukan guna mengakselerasi bauran energi hijau.',
    text: 'Penggunaan konjungsi antarkalimat yang **kurang tepat** pada paragraf tersebut terdapat pada kalimat...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Kalimat (2)' },
      { id: 'B', text: 'Kalimat (3)' },
      { id: 'C', text: 'Kalimat (4)' },
      { id: 'D', text: 'Kalimat (5)', correct: true },
      { id: 'E', text: 'Semua konjungsi sudah tepat' }
    ],
    correctAnswer: 'D',
    explanation: 'Frasa "Maka dari itu" pada awal kalimat (5) merupakan bentuk tidak baku dalam ragam formal PBM. Konjungsi antarkalimat baku yang tepat adalah "Oleh karena itu" atau "Oleh sebab itu".',
    topic: 'Konjungsi & Kepaduan Paragraf',
    difficulty: 'Sedang'
  },
  {
    id: 2,
    readingText: '**(1)** Transisi energi fosil menuju energi baru dan terbarukan (EBT) menjadi agenda prioritas nasional dalam rangka mencapai target emisi nol bersih (*net zero emissions*) pada 2060. **(2)** Potensi energi surya dan panas bumi di Indonesia sangat melimpah, namun pemanfaatannya masih tergolong rendah. **(3)** Tingginya biaya investasi awal dan kendala transmisi jaringan interkoneksi antarpulau menjadi faktor penghambat utama. **(4)** Di samping itu, kerangka regulasi tarif listrik dari pembangkit EBT dinilai belum cukup atraktif bagi investor swasta. **(5)** Maka dari itu, harmonisasi regulasi dan insentif fiskal mutlak diperlukan guna mengakselerasi bauran energi hijau.',
    text: 'Perbaikan ejaan tanda baca pada kalimat (2) yang tepat adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Mengganti tanda koma (,) sebelum kata "namun" menjadi tanda titik koma (;).' },
      { id: 'B', text: 'Menghilangkan tanda koma (,) sebelum kata "namun" dan mengganti "namun" dengan "tetapi".', correct: true },
      { id: 'C', text: 'Menambahkan tanda hubung pada kata antarpulau.' },
      { id: 'D', text: 'Menulis kata EBT dengan huruf miring.' },
      { id: 'E', text: 'Mengubah kata fosil menjadi phosil.' }
    ],
    correctAnswer: 'B',
    explanation: 'Kata "namun" adalah konjungsi antarkalimat, bukan konjungsi intrakalimat. Untuk menghubungkan dua klausa setara dalam satu kalimat majemuk pertentangan, konjungsi intrakalimat yang baku adalah "..., tetapi ...".',
    topic: 'Konjungsi Intrakalimat vs Antarkalimat',
    difficulty: 'Sedang'
  },
  {
    id: 3,
    text: 'Penulisan huruf kapital yang **tepat sesuai EYD V** terdapat pada kalimat...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Gubernur Jawa Barat meresmikan jembatan baru di Sungai Citarum.', correct: true },
      { id: 'B', text: 'Gubernur jawa barat meresmikan Jembatan baru di sungai Citarum.' },
      { id: 'C', text: 'gubernur Jawa Barat meresmikan jembatan baru di Sungai citarum.' },
      { id: 'D', text: 'Gubernur Jawa Barat meresmikan Jembatan Baru di sungai citarum.' },
      { id: 'E', text: 'Gubernur jawa barat meresmikan jembatan Baru di Sungai Citarum.' }
    ],
    correctAnswer: 'A',
    explanation: 'Huruf kapital dipakai sebagai huruf pertama nama jabatan/gelar yang diikuti nama orang/tempat ("Gubernur Jawa Barat") dan nama unsur geografi spesifik ("Sungai Citarum").',
    topic: 'Pedoman Huruf Kapital EYD V',
    difficulty: 'Mudah'
  },
  {
    id: 4,
    text: 'Kalimat berikut yang **tidak memiliki subjek yang jelas** adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Tentang masalah inflasi itu telah dibahas secara mendalam dalam rapat kabinet terbatas.', correct: true },
      { id: 'B', text: 'Masalah inflasi itu telah dibahas secara mendalam dalam rapat kabinet terbatas.' },
      { id: 'C', text: 'Rapat kabinet terbatas telah membahas masalah inflasi itu secara mendalam.' },
      { id: 'D', text: 'Pemerintah membahas masalah inflasi itu secara mendalam.' },
      { id: 'E', text: 'Menteri Koordinator Perekonomian memaparkan data inflasi nasional.' }
    ],
    correctAnswer: 'A',
    explanation: 'Penempatan kata tugas preposisional "Tentang" di awal kalimat mendudukkan bagian tersebut sebagai keterangan, sehingga kalimat (A) kehilangan subjek.',
    topic: 'Struktur Kalimat Efektif',
    difficulty: 'Sedang'
  },
  {
    id: 5,
    text: 'Penulisan bentuk terikat berikut yang **benar** adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'antar warga, non-blok, sub sektor' },
      { id: 'B', text: 'antarwarga, nonblok, subsektor', correct: true },
      { id: 'C', text: 'antar-warga, non blok, subsektor' },
      { id: 'D', text: 'antar warga, nonblok, sub-sektor' },
      { id: 'E', text: 'antarwarga, non blok, subsektor' }
    ],
    correctAnswer: 'B',
    explanation: 'Bentuk terikat seperti antar-, non-, dan sub- ditulis serangkai dengan kata dasar yang mengikutinya jika kata dasarnya adalah kata bahasa Indonesia non-kapital.',
    topic: 'Penulisan Bentuk Terikat',
    difficulty: 'Mudah'
  },
  {
    id: 6,
    readingText: '**(1)** Fenomena kecanduan gawai pada anak usia dini memicu kekhawatiran para psikolog perkembangan. **(2)** Paparan layar yang berlebihan dapat menghambat perkembangan kemampuan bahasa dan interaksi sosial anak. **(3)** Oleh sebab itu, orang tua diimbau untuk membatasi *screen time* maksimal satu jam per hari bagi anak balita. **(4)** Anak-anak balita sangat suka bermain mobil-mobilan dan boneka beruang. **(5)** Di samping pembatasan waktu, pendampingan aktif saat anak berinteraksi dengan media digital sangat krusial.',
    text: 'Kalimat yang **sumbang (tidak padu)** dalam paragraf tersebut adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Kalimat (1)' },
      { id: 'B', text: 'Kalimat (2)' },
      { id: 'C', text: 'Kalimat (3)' },
      { id: 'D', text: 'Kalimat (4)', correct: true },
      { id: 'E', text: 'Kalimat (5)' }
    ],
    correctAnswer: 'D',
    explanation: 'Kalimat (4) membahas kesukaan bermain mainan tertentu, melenceng dari fokus pembahasan dampak kecanduan gawai dan solusi pembatasan screen time.',
    topic: 'Kohesi & Koherensi Kalimat Sumbang',
    difficulty: 'Mudah'
  },
  {
    id: 7,
    text: 'Penggunaan tanda koma (,) yang **salah** terdapat pada kalimat...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Karena hujan deras, acara pembukaan ditunda selama satu jam.' },
      { id: 'B', text: 'Acara pembukaan ditunda selama satu jam, karena hujan deras.', correct: true },
      { id: 'C', text: 'Ia membeli buku, pensil, dan penghapus di toko alat tulis.' },
      { id: 'D', text: 'Oleh karena itu, kita harus mematuhi rambu lalu lintas.' },
      { id: 'E', text: 'Ia menyatakan bahwa dirinya tidak bersalah, melainkan hanya sebagai saksi.' }
    ],
    correctAnswer: 'B',
    explanation: 'Anak kalimat yang berada di belakang induk kalimat (seperti "karena hujan deras") tidak perlu didahului oleh tanda koma.',
    topic: 'Tanda Koma Anak Kalimat',
    difficulty: 'Sedang'
  },
  {
    id: 8,
    text: 'Kata berimbuhan yang **salah eja** terdapat pada kalimat...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Guru itu sedang *menterjemahkan* buku sastra klasik.' },
      { id: 'B', text: 'Guru itu sedang *menerjemahkan* buku sastra klasik.', correct: true },
      { id: 'C', text: 'Perusahaan sedang *mempromosikan* produk barunya.' },
      { id: 'D', text: 'Polisi sedang *memproses* berkas perkara tersangka.' },
      { id: 'E', text: 'Pemerintah berupaya *mengakomodasi* aspirasi buruh.' }
    ],
    correctAnswer: 'B',
    explanation: 'Imbuhan meN- bertemu kata dasar berawalan huruf /t/ yang diikuti huruf vokal (terjemah) akan meluluhkan huruf /t/ menjadi /n/ (menerjemahkan, bukan menterjemahkan). Pilihan B menggunakan bentuk baku yang tepat.',
    topic: 'Peluluhan Morfofonemik KTSP',
    difficulty: 'Sedang'
  },
  {
    id: 9,
    text: 'Kalimat yang menggunakan kata bercetak miring secara tepat adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Rapat pleno tersebut membahas masalah *jadual* pelajaran baru.' },
      { id: 'B', text: 'Kita harus mematuhi *jadwal* keberangkatan kereta api.', correct: true },
      { id: 'C', text: 'Ia bekerja sebagai *tekhnisi* komputer di kantor.' },
      { id: 'D', text: 'Dokter memberikan *resep* obat *khasiat* tinggi.' },
      { id: 'E', text: 'Pemberian *ijin* usaha dipermudah melalui sistem OSS.' }
    ],
    correctAnswer: 'B',
    explanation: 'Kata baku yang tepat adalah "jadwal" (bukan jadual), "teknisi" (bukan tekhnisi), dan "izin" (bukan ijin).',
    topic: 'Kosakata Baku & Tidak Baku',
    difficulty: 'Mudah'
  },
  {
    id: 10,
    text: 'Perhatikan kalimat majemuk berikut:\n"Meskipun anggaran riset nasional masih terbatas, para peneliti muda Indonesia berhasil menciptakan prototipe baterai kendaraan listrik berbasis nikel."\n\nInti kalimat dari kalimat majemuk di atas adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Anggaran riset terbatas' },
      { id: 'B', text: 'Peneliti muda berhasil menciptakan prototipe baterai.', correct: true },
      { id: 'C', text: 'Kendaraan listrik berbasis nikel' },
      { id: 'D', text: 'Riset nasional menciptakan prototipe.' },
      { id: 'E', text: 'Baterai kendaraan listrik berhasil diproduksi.' }
    ],
    correctAnswer: 'B',
    explanation: 'Inti kalimat majemuk bertingkat terletak pada klausa utama (induk kalimat): Subjek = "para peneliti muda Indonesia", Predikat = "berhasil menciptakan", Objek = "prototipe baterai kendaraan listrik berbasis nikel".',
    topic: 'Inti Kalimat Majemuk',
    difficulty: 'Sedang'
  },
  {
    id: 11,
    text: 'Penulisan partikel **-pun** yang tepat terdapat pada kalimat...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Meskipun hari hujan lebat, ia tetap berangkat ke sekolah.', correct: true },
      { id: 'B', text: 'Meski pun hari hujan lebat, ia tetap berangkat ke sekolah.' },
      { id: 'C', text: 'Apa pun masalahnya, jangan pernah berputus asa.' },
      { id: 'D', text: 'Jangankan mobil, sepeda pun ia tidak punya.' },
      { id: 'E', text: 'Pilihan A, C, dan D semuanya benar.', correct: true }
    ],
    correctAnswer: 'E',
    explanation: 'Partikel pun pada konjungsi lazim seperti meskipun, walaupun, sungguhpun ditulis serangkai. Sedangkan pun yang bermakna "juga/saja" ditulis terpisah (apa pun, sepeda pun). Jadi pernyataan A, C, dan D benar.',
    topic: 'Penulisan Partikel pun',
    difficulty: 'Sedang'
  },
  {
    id: 12,
    text: 'Kalimat berikut yang mengandung **kemubaziran kata (pleonasme)** adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Banyak para siswa berhamburan keluar kelas saat bel berbunyi.', correct: true },
      { id: 'B', text: 'Banyak siswa berhamburan keluar kelas saat bel berbunyi.' },
      { id: 'C', text: 'Para siswa berhamburan keluar kelas saat bel berbunyi.' },
      { id: 'D', text: 'Siswa-siswa keluar kelas saat bel berbunyi.' },
      { id: 'E', text: 'Seluruh siswa memasuki laboratorium komputer.' }
    ],
    correctAnswer: 'A',
    explanation: 'Frasa "Banyak para siswa" merupakan pleonasme/pemborosan kata karena "banyak" dan "para" sama-sama menyatakan makna jamak.',
    topic: 'Pleonisme & Kalimat Efektif',
    difficulty: 'Mudah'
  },
  {
    id: 13,
    text: 'Penggunaan tanda petik tunggal (\'...\') yang tepat adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Terdengar bunyi \'kring-kring\' dari arah sepeda tua itu.' },
      { id: 'B', text: 'Kudengar teriak anakku, \'Ibu, Bapak pulang!\' dan rasa letihku lenyap seketika.', correct: true },
      { id: 'C', text: 'Ia membaca novel \'Laskar Pelangi\' karya Andrea Hirata.' },
      { id: 'D', text: 'Kita harus menjunjung tinggi semboyan \'Bhinneka Tunggal Ika\'.' },
      { id: 'E', text: 'Kata \'retina\' memiliki arti selaput jala pada mata.' }
    ],
    correctAnswer: 'B',
    explanation: 'Tanda petik tunggal dipakai untuk mengapit petikan yang terdapat dalam petikan lain (di dalam tanda petik ganda).',
    topic: 'Tanda Petik Tunggal EYD V',
    difficulty: 'Sedang'
  },
  {
    id: 14,
    text: 'Penulisan singkatan dan akronim yang **benar** adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'SD, SMP, S.M.A, PT' },
      { id: 'B', text: 'SD, SMP, SMA, PT', correct: true },
      { id: 'C', text: 'S.D., S.M.P., S.M.A., P.T.' },
      { id: 'D', text: 'sd, smp, sma, pt' },
      { id: 'E', text: 'S/D, S/M/P, S/M/A' }
    ],
    correctAnswer: 'B',
    explanation: 'Singkatan nama lembaga pemerintah dan ketatanegaraan, lembaga pendidikan, badan atau organisasi, serta nama dokumen resmi yang terdiri atas huruf awal setiap kata ditulis dengan huruf kapital tanpa tanda titik.',
    topic: 'Singkatan & Akronim',
    difficulty: 'Mudah'
  },
  {
    id: 15,
    text: 'Perhatikan kalimat berikut:\n"Pembangunan jalan tol itu bertujuan untuk memperlancar arus distribusi logistik antarkota."\n\nPerbaikan kata yang tepat untuk mengganti kata *memperlancar* agar menjadi kalimat baku adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Melancarkan', correct: true },
      { id: 'B', text: 'Mempercepatkan' },
      { id: 'C', text: 'Memperlancarkan' },
      { id: 'D', text: 'Kelancaran' },
      { id: 'E', text: 'Dilancarkan' }
    ],
    correctAnswer: 'A',
    explanation: 'Imbuhan "memper-" pada kata sifat "lancar" seharusnya menghasilkan "memperlancar" (membuat lebih lancar) atau "melancarkan" (membuat lancar). Bentuk "melancarkan" adalah padanan verba aktif transitif yang paling tepat.',
    topic: 'Pembentukan Verba Transitif',
    difficulty: 'Mudah'
  },
  {
    id: 16,
    text: 'Kalimat berikut yang merupakan **kalimat transformasi inversi** (predikat mendahului subjek) adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Terdengar suara gemuruh ombak dari kejauhan malam itu.', correct: true },
      { id: 'B', text: 'Suara gemuruh ombak terdengar dari kejauhan malam itu.' },
      { id: 'C', text: 'Malam itu suara gemuruh ombak terdengar dari kejauhan.' },
      { id: 'D', text: 'Dari kejauhan mereka mendengar suara gemuruh ombak.' },
      { id: 'E', text: 'Ombak bergemuruh di laut lepas sepanjang malam.' }
    ],
    correctAnswer: 'A',
    explanation: 'Kalimat (A) berpola P-S-K: "Terdengar" (P), "suara gemuruh ombak" (S), "dari kejauhan malam itu" (K). Struktur ini merupakan kalimat inversi.',
    topic: 'Pola Kalimat Inversi',
    difficulty: 'Sedang'
  },
  {
    id: 17,
    text: 'Penulisan angka dan bilangan yang tepat sesuai kaidah ejaan adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '3 orang menteri menghadiri rapat koordinasi.' },
      { id: 'B', text: 'Tiga orang menteri menghadiri rapat koordinasi.', correct: true },
      { id: 'C', text: 'Ia membeli 25 ekor ayam di pasar.' },
      { id: 'D', text: 'Koleksi bukunya mencapai 1.500 buku.' },
      { id: 'E', text: 'Pilihan B, C, dan D benar.', correct: true }
    ],
    correctAnswer: 'E',
    explanation: 'Angka pada awal kalimat harus ditulis dengan huruf (Tiga orang...). Bilangan yang dapat dinyatakan dengan satu atau dua kata dapat ditulis dengan huruf kecuali dalam perincian. Jadi B, C, dan D tepat.',
    topic: 'Penulisan Angka & Bilangan EYD V',
    difficulty: 'Sedang'
  },
  {
    id: 18,
    text: 'Kata penghubung antarparagraf yang berfungsi menyatakan **penambahan informasi** adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Namun demikian' },
      { id: 'B', text: 'Selain itu / Di samping itu', correct: true },
      { id: 'C', text: 'Sebaliknya' },
      { id: 'D', text: 'Oleh karena itu' },
      { id: 'E', text: 'Meskipun demikian' }
    ],
    correctAnswer: 'B',
    explanation: 'Konjungsi "Selain itu" atau "Di samping itu" digunakan untuk menambahkan argumen atau informasi penguat.',
    topic: 'Kohesi Leksikal & Konjungsi',
    difficulty: 'Mudah'
  },
  {
    id: 19,
    text: 'Kata yang tepat untuk melengkapi kalimat rumpang berikut adalah:\n"Dewan juri memutuskan untuk memberikan penghargaan (...) kepada ilmuwan yang telah mengabdi selama 40 tahun."\n\nKata serapan yang tepat adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'prestise' },
      { id: 'B', text: 'kehormatan / anumerta' },
      { id: 'C', text: 'bergengsi (*prestigious*)', correct: true },
      { id: 'D', text: 'prestisius' },
      { id: 'E', text: 'prestisius yang tinggi' }
    ],
    correctAnswer: 'C',
    explanation: 'Penghargaan bergengsi / prestisius secara baku dan berterima dalam konteks apresiasi pengabdian.',
    topic: 'Kelengkapan Kalimat & Diksi Kontekstual',
    difficulty: 'Sedang'
  },
  {
    id: 20,
    text: 'Tanda titik koma (;) digunakan secara tepat pada kalimat...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Ayah membaca koran; Ibu merajut sweter; Adik bermain boneka.', correct: true },
      { id: 'B', text: 'Ibu membeli; bayam, wortel, dan kangkung.' },
      { id: 'C', text: 'Karena sudah malam; kami segera berpamitan.' },
      { id: 'D', text: 'Ia lulus dengan pujian; sebab rajin belajar.' },
      { id: 'E', text: 'Semua peserta ujian; wajib membawa kartu identitas.' }
    ],
    correctAnswer: 'A',
    explanation: 'Tanda titik koma dapat dipakai sebagai pengganti kata penghubung untuk memisahkan kalimat setara di dalam kalimat majemuk.',
    topic: 'Penggunaan Tanda Titik Koma EYD V',
    difficulty: 'Mudah'
  }
];
