export interface SosiologiStatement {
  id: string;
  text: string;
  correct: boolean; // true for Benar/Sesuai/Tepat, false for Salah/Tidak Sesuai/Tidak Tepat
}

export interface SosiologiOption {
  id: string;
  text: string;
  correct?: boolean;
}

export interface SosiologiQuestion {
  id: number;
  number: number;
  subject: string;
  topic: string;
  type: 'multiple' | 'checkboxes' | 'true-false-table' | 'sesuai-table' | 'tepat-table';
  stimulus?: string;
  text: string;
  options?: SosiologiOption[];
  statements?: SosiologiStatement[];
  correctAnswer?: string[]; // For checkboxes
  officialKeyText: string;
  discussion: string;
}

export const sosiologiTryoutData: SosiologiQuestion[] = [
  {
    id: 1,
    number: 1,
    subject: 'Sosiologi',
    topic: 'Ciri-Ciri Sosiologi sebagai Ilmu Pengetahuan',
    type: 'multiple',
    stimulus: 'Sekelompok murid mengikuti lomba karya tulis yang membahas tentang konflik sosial. Mereka membaca berbagai literatur dan menemukan bahwa teori-teori sosiologi yang berkaitan dengan topik tersebut terus mengalami perkembangan. Tokoh-tokoh sosiologi saat ini terus menyempurnakan teori yang sudah ada sehingga relevan dengan perubahan dan perkembangan zaman.',
    text: 'Manakah ciri sosiologi yang tepat berdasarkan ilustrasi tersebut?',
    options: [
      { id: 'a', text: 'Teoritis.' },
      { id: 'b', text: 'Nonetis.' },
      { id: 'c', text: 'Empiris.' },
      { id: 'd', text: 'Objektif.' },
      { id: 'e', text: 'Kumulatif.', correct: true }
    ],
    officialKeyText: 'E. Kumulatif',
    discussion: `Sosiologi memiliki empat ciri utama sebagai ilmu pengetahuan:
* **Kumulatif**: Teori-teori sosiologi disusun atas dasar teori yang sudah ada sebelumnya, lalu diperbaiki, diperluas, serta disempurnakan seiring perkembangan fakta dan fenomena zaman baru (sebagaimana diilustrasikan pada teks).
* **Empiris**: Didasarkan pada observasi fakta di lapangan dan akal sehat, bukan spekulasi atau dugaan tanpa bukti.
* **Teoretis**: Berusaha menyusun abstraksi dan kesimpulan logis dari hasil observasi untuk menjelaskan hubungan sebab-akibat.
* **Nonetis**: Menjelaskan fakta secara analitis tanpa menghakimi baik atau buruknya fakta sosial tersebut.`
  },
  {
    id: 2,
    number: 2,
    subject: 'Sosiologi',
    topic: 'Gejala Sosial & Literasi Digital di Ruang Siber',
    type: 'true-false-table',
    stimulus: `**Infografis Ciri Judi Berkedok Game Online:**
Gim online bisa dikategorikan judi jika mengharuskan top up saldo dan mempertaruhkan pada permainan yang bisa withdraw (penarikan saldo).
Ciri-cirinya: ada fitur perjudian terselubung/taruhan, tidak ada regulasi/lisensi resmi, penawaran hadiah menggiurkan, konten tidak cocok untuk semua usia, dan tampilan mirip game online.`,
    text: 'Apa sajakah faktor-faktor yang dapat berpengaruh langsung terhadap tingkat penerimaan masyarakat terhadap informasi yang terdapat pada infografis tersebut?',
    statements: [
      {
        id: 's1',
        text: 'Kemudahan transaksi perbankan dan dompet digital.',
        correct: true
      },
      {
        id: 's2',
        text: 'Keberagaman letak geografis di suatu wilayah.',
        correct: false
      },
      {
        id: 's3',
        text: 'Pemahaman budaya yang berbeda di setiap daerah.',
        correct: false
      },
      {
        id: 's4',
        text: 'Kemampuan literasi teknologi masyarakat yang rendah.',
        correct: true
      }
    ],
    officialKeyText: 'Benar, Salah, Salah, Benar',
    discussion: `Analisis faktor pengaruh penerimaan informasi bahaya judi berkedok gim daring:
* **Kemudahan transaksi perbankan dan dompet digital (Benar)**: Integrasi pembayaran digital yang instan dan seamless mempermudah akses langsung seseorang untuk mempertaruhkan uang ke dalam aplikasi judi berkedok gim.
* **Keberagaman letak geografis di suatu wilayah (Salah)**: Akses internet menembus batasan geografis wilayah fisik, sehingga letak geografis bukan faktor penentu pemahaman teknis ruang siber.
* **Pemahaman budaya yang berbeda di setiap daerah (Salah)**: Penipuan berbasis algoritma gim dan perjudian digital merupakan persoalan literasi teknologi dan finansial, bukan variasi adat daerah.
* **Kemampuan literasi teknologi masyarakat yang rendah (Benar)**: Rendahnya literasi digital menyebabkan masyarakat kurang kritis dalam membedakan sistem in-game purchase biasa dengan mekanisme perjudian terselubung (pay-to-win/cash out).`
  },
  {
    id: 3,
    number: 3,
    subject: 'Sosiologi',
    topic: 'Masyarakat Multikultural & Resolusi Konflik KBB',
    type: 'checkboxes',
    stimulus: `Setara Institute melaporkan penolakan dan penolakan pendirian tempat ibadah menempati lima urutan teratas dalam kategori jenis pelanggaran Kebebasan Beragama/Berkeyakinan (KBB) terbanyak sepanjang periode 2007–2022. Direktur Riset Setara Institute menyatakan sepanjang periode 2007–2022 terjadi 140 peristiwa penolakan dan 90 peristiwa penolakan rumah ibadah...`,
    text: 'Manakah pernyataan berikut yang merupakan sikap kritis untuk mewujudkan kehidupan masyarakat multikultural terkait kasus tersebut? (Pilihlah semua jawaban yang benar!)',
    options: [
      { id: 'a', text: 'Mengatur jarak minimum pembangunan rumah ibadah antarumat beragama yang berbeda untuk meminimalkan konflik.' },
      { id: 'b', text: 'Mengadakan dialog antarumat beragama untuk membahas pembatasan aturan mengenai pembangunan rumah ibadah di setiap daerah.' },
      { id: 'c', text: 'Memetakan konflik terkait masalah pembangunan rumah ibadah dan merencanakan proses resolusi yang sesuai.', correct: true },
      { id: 'd', text: 'Melibatkan tokoh agama, tokoh daerah, dan masyarakat sipil dalam mempromosikan kebhinekaan dalam keberagaman.', correct: true },
      { id: 'e', text: 'Meminta pemerintah meninjau ulang peraturan pemerintah untuk semakin mendukung kebebasan hak dalam membangun rumah ibadah.', correct: true }
    ],
    correctAnswer: ['c', 'd', 'e'],
    officialKeyText: 'C, D, dan E',
    discussion: `Sikap kritis dalam mewujudkan integrasi masyarakat multikultural:
* **Pernyataan C (Tepat)**: Pemetaan konflik (*conflict mapping*) adalah prosedur ilmiah awal yang penting untuk mengetahui akar masalah, pihak yang terlibat, dan merumuskan resolusi yang adil.
* **Pernyataan D (Tepat)**: Melibatkan tokoh agama, tokoh masyarakat, dan masyarakat sipil mendorong pendekatan dialogis serta memperkuat integrasi masyarakat multikultural yang rukun.
* **Pernyataan E (Tepat)**: Meninjau ulang regulasi pemerintah bertujuan memastikan amanat konstitusi kebebasan beragama berjalan tanpa hambatan birokrasi diskriminatif.
* **Pernyataan A & B (Tidak Tepat)**: Menambah aturan pembatasan atau mengatur jarak fisik rumah ibadah berpotensi melegitimasi segregasi sosial dan membatasi hak asasi beribadah warga negara.`
  },
  {
    id: 4,
    number: 4,
    subject: 'Sosiologi',
    topic: 'Metodologi Penelitian Sosial Kualitatif',
    type: 'checkboxes',
    stimulus: 'Penelitian kualitatif mengacu pada pendekatan penelitian yang menekankan pada pemahaman mendalam tentang fenomena sosial, budaya, atau perilaku manusia.',
    text: 'Berdasarkan ilustrasi tersebut, manakah pernyataan yang menunjukkan urutan proses tahapan penelitian kualitatif yang sistematis yang dilakukan peneliti? (Pilihlah semua jawaban yang benar!)',
    options: [
      { id: 'a', text: 'Menyusun hipotesis terlebih dahulu sebelum mengumpulkan data.' },
      { id: 'b', text: 'Menyusun panduan wawancara sebelum merumuskan pertanyaan penelitian.' },
      { id: 'c', text: 'Menentukan populasi dan sampel sebelum mengumpulkan data.', correct: true },
      { id: 'd', text: 'Membuat rumusan pertanyaan penelitian sebelum menentukan populasi dan sampel.', correct: true },
      { id: 'e', text: 'Menentukan teknik pengolahan data sebelum menentukan metode penelitian.' }
    ],
    correctAnswer: ['c', 'd'],
    officialKeyText: 'C dan D',
    discussion: `Alur logis tahapan penelitian ilmiah kualitatif:
1. **Perumusan Pertanyaan Penelitian / Masalah (Pernyataan D Tepat)**: Peneliti wajib merumuskan masalah penelitian sebelum menentukan subjek dan teknik sampling.
2. **Penetapan Subjek / Populasi & Sampel (Pernyataan C Tepat)**: Kriteria sampel/informan kunci ditentukan sebelum peneliti terjun mengumpulkan data di lapangan.
* *Pernyataan A Tidak Tepat*: Penelitian kualitatif bersifat induktif dan eksploratif, sehingga tidak menguji hipotesis statistis kaku di awal.
* *Pernyataan B Tidak Tepat*: Panduan wawancara dibuat setelah rumusan masalah selesai ditetapkan.
* *Pernyataan E Tidak Tepat*: Metode penelitian harus diputuskan terlebih dahulu sebelum merancang teknik pengolahan datanya.`
  },
  {
    id: 5,
    number: 5,
    subject: 'Sosiologi',
    topic: 'Pengolahan Data Kuantitatif vs Kualitatif',
    type: 'sesuai-table',
    stimulus: `Terdapat dua peneliti sosial yang ingin memahami dampak penggunaan media sosial terhadap interaksi sosial remaja di kota-kota besar. Masing-masing menggunakan pendekatan berikut:
* **Andi** menerapkan pendekatan kuantitatif dengan menyebar kuesioner/angket tertutup kepada 200 responden.
* **Yuli** menerapkan pendekatan kualitatif dengan melakukan wawancara mendalam pada 10 remaja aktif pengguna media sosial.`,
    text: 'Berdasarkan pernyataan di atas, manakah pengolahan data yang sesuai dengan ilustrasi tersebut?',
    statements: [
      {
        id: 's1',
        text: 'Data dari kuesioner/angket yang dikumpulkan Andi dalam penelitian kuantitatif diolah menggunakan analisis statistik.',
        correct: true
      },
      {
        id: 's2',
        text: 'Hasil wawancara mendalam pada penelitian yang Yuli lakukan diolah dengan memberikan kode berupa angka-angka.',
        correct: false
      },
      {
        id: 's3',
        text: 'Andi perlu mengolah data menggunakan perangkat lunak statistik seperti SPSS atau Excel.',
        correct: true
      },
      {
        id: 's4',
        text: 'Dalam penelitian yang Yuli lakukan, makna dan konteks dari jawaban menjadi fokus utama data yang dianalisis.',
        correct: true
      }
    ],
    officialKeyText: 'Sesuai, Tidak Sesuai, Sesuai, Sesuai',
    discussion: `Perbandingan pengolahan data kuantitatif dan kualitatif:
* **Pernyataan 1 (Sesuai)**: Angket tertutup kuantitatif menghasilkan skor numerik yang diuji melalui teknik analisis statistik deskriptif maupun inferensial.
* **Pernyataan 2 (Tidak Sesuai)**: Wawancara mendalam kualitatif diolah melalui transkripsi, reduksi narasi, dan pengodean tematik (bukan kuantifikasi angka mutlak).
* **Pernyataan 3 (Sesuai)**: Skala responden 200 orang pada studi kuantitatif memerlukan bantuan perangkat lunak komputasi statistik (SPSS/Excel).
* **Pernyataan 4 (Sesuai)**: Inti paradigma kualitatif adalah mengeksplorasi kedalaman makna (*verstehen*), konteks subjektif, dan motif tindakan para remaja.`
  },
  {
    id: 6,
    number: 6,
    subject: 'Sosiologi',
    topic: 'Konflik Sosial, Struktur & Ketimpangan Keruangan',
    type: 'checkboxes',
    stimulus: 'Pemerintah Kota Maju baru saja menyetujui proyek pembangunan kompleks apartemen mewah di tengah kawasan perkotaan yang telah lama ada. Kawasan tersebut dihuni oleh keluarga berpenghasilan rendah yang telah menetap dari generasi ke generasi. Saat ini masyarakat di kawasan tersebut menghadapi ancaman penggusuran, namun ironisnya mereka merasa tidak dilibatkan dalam proses perencanaan. Protes akhirnya muncul, mulai dari aksi yang awalnya damai hingga menjadi konfrontatif. Masyarakat menuntut perlakuan yang adil dan meminta ganti rugi yang layak apabila digusur.',
    text: 'Apakah konflik yang terjadi pada ilustrasi tersebut? (Pilihlah semua jawaban yang benar!)',
    options: [
      { id: 'a', text: 'Konflik kepentingan antara kelompok yang tidak setara secara ekonomi.', correct: true },
      { id: 'b', text: 'Konflik struktural akibat akses yang tidak setara dalam pengambilan keputusan.', correct: true },
      { id: 'c', text: 'Konflik interpersonal antar individu dengan komunitas yang sama.' },
      { id: 'd', text: 'Konflik budaya yang didasarkan atas latar belakang etnis yang berbeda.' },
      { id: 'e', text: 'Konflik nilai antara cara hidup tradisional dan tujuan pembangunan modern.', correct: true }
    ],
    correctAnswer: ['a', 'b', 'e'],
    officialKeyText: 'A, B, dan E',
    discussion: `Analisis dimensi konflik sosial perkotaan:
* **Pilihan A (Tepat)**: Terjadi benturan kepentingan antara pemodal besar/pengembang apartemen mewah dengan warga lokal berpenghasilan rendah (*economic disparity*).
* **Pilihan B (Tepat)**: Warga tidak dilibatkan dalam proses perencanaan tata kota (*power asymmetry* / ketimpangan struktural pengambilan keputusan).
* **Pilihan E (Tepat)**: Terjadi perbenturan nilai antara mempertahankan ruang hidup historis turun-temurun warga dengan orientasi komersialisasi modern.
* *Pilihan C & D (Tidak Tepat)*: Konflik berskala antarkelompok kelas sosial, bukan pertikaian personal antarindividu, dan tidak bermuatan sentimen primordial etnis.`
  },
  {
    id: 7,
    number: 7,
    subject: 'Sosiologi',
    topic: 'Perubahan Sosial & Modernisasi Komunitas Lokal',
    type: 'multiple',
    stimulus: 'Desa Sigeru selama ini mengandalkan pertanian subsisten dan terkadang masih dapat dijumpai sistem barter. Dalam dua dekade terakhir, jalan baru telah dibangun yang membuka akses dari desa tersebut menuju pusat kota terdekat. Koneksi ini telah meningkatkan keterbukaan pasar, memperkenalkan teknologi digital kepada kaum muda, dan secara bertahap mulai menggeser nilai-nilai tradisional serta struktur keluarga...',
    text: 'Proses sosiologis apakah yang terjadi di desa pada situasi di atas?',
    options: [
      { id: 'a', text: 'Penyimpangan sosial yang disebabkan oleh runtuhnya nilai norma tradisional yang telah dilestarikan turun temurun.' },
      { id: 'b', text: 'Perubahan budaya melalui pengenalan nilai-nilai dan praktik baru dari sumber eksternal yang tidak terbatas.' },
      { id: 'c', text: 'Perubahan sosial yang dipicu oleh transformasi teknologi dan ekonomi yang memengaruhi kehidupan komunitas.', correct: true },
      { id: 'd', text: 'Mobilitas sosial yang dihasilkan dari peningkatan peluang ekonomi akibat dari interaksi eksternal.' },
      { id: 'e', text: 'Gegar budaya akibat keterlambatan adaptasi lembaga tradisional terhadap perubahan.' }
    ],
    officialKeyText: 'C. Perubahan sosial yang dipicu oleh transformasi teknologi dan ekonomi yang memengaruhi kehidupan komunitas.',
    discussion: `Pembangunan jalan raya (infrastruktur) dan adopsi gawai digital ke Desa Sigeru mengubah sistem barter menjadi ekonomi pasar komersial serta menggeser nilai kolektif dan struktur keluarga. Ini merupakan contoh konkret **perubahan sosial** yang digerakkan oleh faktor eksternal (transformasi teknologi, aksesibilitas fisik, dan modernisasi ekonomi).`
  },
  {
    id: 8,
    number: 8,
    subject: 'Sosiologi',
    topic: 'Globalisasi & Konsep Masyarakat Digital',
    type: 'tepat-table',
    stimulus: 'Arti merupakan murid SMA yang memiliki kebiasaan berkomunikasi dengan teman-teman dari berbagai belahan dunia melalui media sosial. Ia juga belajar Bahasa Korea dan Jepang menggunakan aplikasi bahasa online, berbelanja berbagai merek internasional melalui situs e-commerce, dan menonton tayangan global melalui layanan streaming online. Arti juga bergabung dengan bootcamp virtual bersama peserta dari berbagai negara...',
    text: 'Manakah pernyataan yang tepat untuk menggambarkan konsep globalisasi dan masyarakat digital sesuai kasus tersebut?',
    statements: [
      {
        id: 's1',
        text: 'Globalisasi memfasilitasi pertukaran budaya dan interaksi lintas negara melalui teknologi digital.',
        correct: true
      },
      {
        id: 's2',
        text: 'Masyarakat digital mendorong penyebaran budaya lokal sambil menolak pengaruh budaya luar.',
        correct: false
      },
      {
        id: 's3',
        text: 'Internet memungkinkan individu untuk mengakses pendidikan global, pasar, dan jaringan sosial.',
        correct: true
      },
      {
        id: 's4',
        text: 'Globalisasi dan platform digital mengaburkan batas-batas wilayah dan menciptakan komunitas global.',
        correct: true
      }
    ],
    officialKeyText: 'Tepat, Tidak Tepat, Tepat, Tepat',
    discussion: `Karakteristik masyarakat digital dan globalisasi:
* **Pernyataan 1 (Tepat)**: Platform online meruntuhkan hambatan geografis dan mempermudah difusi budaya lintas negara secara langsung.
* **Pernyataan 2 (Tidak Tepat)**: Karakteristik masyarakat digital justru terbuka terhadap pertukaran budaya global (*open network*), bukan bersikap proteksionis menolak budaya luar secara mutlak.
* **Pernyataan 3 (Tepat)**: Internet memfasilitasi akses ke ranah pendidikan internasional (*bootcamp*), pasar daring (*e-commerce*), dan jejaring sosial luas.
* **Pernyataan 4 (Tepat)**: Fenomena ini sejalan dengan konsep *global village* (desa global), di mana batas-batas negara mengabur dan membentuk komunitas tanpa batas fisik (*borderless world*).`
  },
  {
    id: 9,
    number: 9,
    subject: 'Sosiologi',
    topic: 'Dampak Digitalisasi & Kesenjangan Digital (Digital Divide)',
    type: 'multiple',
    stimulus: 'Giri Kriya merupakan UMKM kerajinan tangan yang berada di pelosok desa. Baru-baru ini usaha tersebut viral di media sosial yang mengakibatkan omzet kerajinannya naik signifikan. Pemilik usaha memanfaatkan media sosial dan e-commerce untuk memasarkan produk lintas negara... Namun, beberapa pengrajin di desa sebelumnya tidak akrab dengan teknologi digital merasa tertinggal dan kesulitan untuk mengikuti tren pemasaran online.',
    text: 'Berdasarkan kasus tersebut, manakah pernyataan yang menunjukkan dampak globalisasi di era digital terhadap kehidupan masyarakat?',
    options: [
      { id: 'a', text: 'Era digital menghilangkan pentingnya pelestarian budaya.' },
      { id: 'b', text: 'Globalisasi dapat melemahkan interaksi sosial di antara usaha kecil.' },
      { id: 'c', text: 'Penggunaan internet mendorong komunitas desa menolak kerajinan tradisional.' },
      { id: 'd', text: 'Era digital membuka peluang ekonomi, tetapi menciptakan ketidaksetaraan.', correct: true },
      { id: 'e', text: 'Globalisasi membuat produk lokal karena bersaing ketat dengan produk asing.' }
    ],
    officialKeyText: 'D. Era digital membuka peluang ekonomi, tetapi menciptakan ketidaksetaraan.',
    discussion: `Kasus Giri Kriya merefleksikan paradoks era digital (*digital divide*). Di satu sisi, pemanfaatan teknologi digital dan e-commerce meningkatkan omzet dan jangkauan pasar internasional, tetapi di sisi lain menciptakan kesenjangan (*inequality*) bagi para pengrajin konvensional yang belum menguasai literasi teknologi.`
  },
  {
    id: 10,
    number: 10,
    subject: 'Sosiologi',
    topic: 'Penyimpangan Gaya Hidup & Solusi Literasi Digital',
    type: 'multiple',
    stimulus: 'Di SMA Tarumajaya, beberapa guru dan orang tua mulai gelisah dengan perubahan identitas dan gaya hidup murid. Dari hari ke hari, semakin banyak murid yang terpengaruh oleh tren di media sosial: beberapa di antara mereka mulai mengadopsi gaya hidup hedon dan membandingkan diri mereka dengan influencer. Murid yang lain kecanduan game online sehingga berakibat pada penurunan kinerja akademis dan berkurangnya interaksi sosial di dunia nyata.',
    text: 'Apakah solusi yang tepat untuk mengatasi permasalahan sosial tersebut?',
    options: [
      { id: 'a', text: 'Melarang akses ke semua media sosial khususnya di lingkungan sekolah.' },
      { id: 'b', text: 'Mempromosikan literasi digital dan pemikiran kritis dalam kurikulum sekolah.', correct: true },
      { id: 'c', text: 'Mendorong murid untuk menerima tren media sosial agar tetap up to date.' },
      { id: 'd', text: 'Membatasi akses internet hanya untuk kegiatan dan aktivitas akademik.' },
      { id: 'e', text: 'Mengizinkan penggunaan internet tanpa batas untuk mendorong kreativitas.' }
    ],
    officialKeyText: 'B. Mempromosikan literasi digital dan pemikiran kritis dalam kurikulum sekolah.',
    discussion: `Solusi yang bersifat preventif, edukatif, dan berkelanjutan bagi remaja adalah membangun daya kritis (*critical thinking*) dan kecakapan literasi digital. Dengan kemampuan ini, siswa mampu menyaring informasi secara mandiri, menghindari pola hidup hedonis komparatif, dan mengelola waktu interaksi dunia nyata dengan bijak. Pelarangan total internet tidak realistis dan tidak mendidik di era informasi.`
  },
  {
    id: 11,
    number: 11,
    subject: 'Sosiologi',
    topic: 'Objek Kajian Sosiologi (Masyarakat & Interaksi Sosial)',
    type: 'multiple',
    stimulus: 'Objek kajian sosiologi memiliki karakteristik yang berbeda dibandingkan dengan objek ilmu lainnya.',
    text: 'Berdasarkan pernyataan berikut, manakah yang paling tepat menggambarkan objek kajian sosiologi?',
    options: [
      { id: 'a', text: 'Gempa bumi berkekuatan 7,7 yang terjadi di Myanmar dan terasa hingga Thailand pada 28 Maret 2025 sebagai akibat pergeseran lempeng bumi.' },
      { id: 'b', text: 'Kecanduan teknologi di kalangan generasi muda yang mengubah cara berpikir, berperilaku, dan berinteraksi dalam kehidupan sehari-hari.', correct: true },
      { id: 'c', text: 'Long COVID yang menyebabkan gangguan kesehatan fisik dan mental selama berbulan-bulan pada sebagian besar penyintas COVID-19.' },
      { id: 'd', text: 'Aktivitas vulkanik yang menyebabkan kerusakan infrastruktur dan memaksa masyarakat mengungsi dari daerah rawan bencana.' },
      { id: 'e', text: 'Penyebaran virus baru yang menimbulkan krisis kesehatan global dan berdampak pada sistem imun tubuh manusia.' }
    ],
    officialKeyText: 'B. Kecanduan teknologi di kalangan generasi muda yang mengubah cara berpikir, berperilaku, dan berinteraksi dalam kehidupan sehari-hari.',
    discussion: `Objek kajian formal sosiologi adalah masyarakat, relasi sosial, pola interaksi antarmanusia, serta dinamika perubahan perilaku sosial.
* **Pilihan B Tepat**: Membahas perubahan pola interaksi dan perilaku generasi muda akibat pengaruh teknologi sosial.
* *Pilihan A & D*: Merupakan objek kajian Geologi dan Vulkanologi.
* *Pilihan C & E*: Merupakan kajian Ilmu Kedokteran/Epidemiologi.`
  },
  {
    id: 12,
    number: 12,
    subject: 'Sosiologi',
    topic: 'Sosialisasi Anak & Pengendalian Penggunaan Gawai',
    type: 'sesuai-table',
    stimulus: `**Infografis Indonesia Baik: Durasi Screen Time yang Direkomendasikan bagi Anak-anak.**
Anjuran pada infografis tersebut mencerminkan adanya gejala sosial yang timbul akibat penggunaan internet yang tidak terkontrol oleh anak-anak.`,
    text: 'Manakah dari pernyataan berikut yang paling tepat menggambarkan gejala sosial dalam infografis tersebut?',
    statements: [
      {
        id: 's1',
        text: 'Penggunaan internet pada anak perlu diawasi oleh orang tua agar anak tidak mudah terpapar konten negatif.',
        correct: true
      },
      {
        id: 's2',
        text: 'Pola asuh yang terlalu longgar terhadap penggunaan internet dapat memengaruhi pembentukan kepribadian anak.',
        correct: true
      },
      {
        id: 's3',
        text: 'Anak-anak merupakan salah satu kelompok pengguna internet terbesar di Indonesia dan dapat diklasifikasikan sebagai generasi yang rentan.',
        correct: false
      }
    ],
    officialKeyText: 'Sesuai, Sesuai, Tidak Sesuai',
    discussion: `Evaluasi analisis infografis sosialisasi screen time anak:
* **Pernyataan 1 (Sesuai)**: Infografis menekankan peran pendampingan orang tua sebagai agen sosialisasi primer pelindung anak dari dampak buruk gawai.
* **Pernyataan 2 (Sesuai)**: Pola asuh permisif tanpa batas waktu memengaruhi pembentukan kepribadian, konsentrasi, dan sosialisasi anak.
* **Pernyataan 3 (Tidak Sesuai)**: Infografis hanya berfokus pada anjuran pedoman waktu (*screen time*), bukan menyajikan data sensus statistik demografis mengenai proporsi anak sebagai kelompok pengguna terbesar.`
  },
  {
    id: 13,
    number: 13,
    subject: 'Sosiologi',
    topic: 'Penyusunan Instrumen & Desain Penelitian Sosial',
    type: 'checkboxes',
    stimulus: `Seorang murid ingin melakukan penelitian sosial sederhana mengenai pengaruh pergaulan sebaya terhadap kelekatan hubungan antar anggota keluarga di kalangan remaja. Ia merancang langkah:
* Merumuskan masalah: Apakah terdapat hubungan antara pergaulan sebaya dengan kelekatan hubungan antar anggota keluarga?
* Menyusun pertanyaan terbuka sebanyak sepuluh butir untuk menggali pengalaman responden.
* Mengolah jawaban informasi menjadi bentuk angka dan menganalisisnya dengan aplikasi statistik.`,
    text: 'Berdasarkan langkah-langkah tersebut, manakah pernyataan yang tepat untuk menyempurnakan penelitian tersebut? (Pilihlah semua jawaban yang benar!)',
    options: [
      { id: 'a', text: 'Peneliti perlu memperjelas rumusan masalah agar sesuai dengan pengalaman sosial remaja dalam berinteraksi dengan keluarga dan teman sebaya.', correct: true },
      { id: 'b', text: 'Peneliti perlu mengubah jenis pertanyaan menjadi pertanyaan tertutup agar data lebih mudah dianalisis secara statistik.', correct: true },
      { id: 'c', text: 'Peneliti perlu menyesuaikan kembali isi penelitian agar tidak terlalu rumit dan tetap sesuai dengan kemampuan.' },
      { id: 'd', text: 'Peneliti perlu menentukan jenis dan jumlah sampel terlebih dahulu sebelum menyusun instrumen pengumpulan data.', correct: true },
      { id: 'e', text: 'Peneliti sebaiknya menggunakan metode observasi partisipatif untuk menggantikan instrumen pertanyaan terbuka.' }
    ],
    correctAnswer: ['a', 'b', 'd'],
    officialKeyText: 'A, B, dan D',
    discussion: `Langkah penyempurnaan metodologi penelitian:
* **Pernyataan A (Tepat)**: Rumusan masalah harus dirumuskan secara terukur dan mencakup operasionalisasi konsep pergaulan sebaya dan kelekatan keluarga.
* **Pernyataan B (Tepat)**: Jika tujuan pengolahan menggunakan aplikasi statistik (kuantitatif), angket harus berbentuk kuesioner tertutup (skala Likert) agar menghasilkan data berskala interval/ordinal.
* **Pernyataan D (Tepat)**: Kerangka sampel (*sampling frame*) dan jumlah responden harus ditetapkan sebelum instrumen diedarkan agar validitas data terjamin.
* *Pernyataan C & E (Tidak Tepat)*: Menurunkan mutu penelitian bukan prinsip metodologis, dan observasi partisipatif tidak cocok untuk analisis statistik korelasional.`
  },
  {
    id: 14,
    number: 14,
    subject: 'Sosiologi',
    topic: 'Resolusi Konflik Ruang Publik dalam Masyarakat Multikultural',
    type: 'checkboxes',
    stimulus: 'Kota Praja merupakan kota multikultural. Terjadi konflik antara penduduk lama dengan pendatang terkait dengan penggunaan ruang publik untuk kegiatan budaya. Penduduk lama merasa tradisi turun-temurun mereka dipinggirkan, sedangkan pendatang mengklaim kebutuhan aktivitas mereka diabaikan. Ketegangan meningkat di media sosial melalui perang tagar hingga protes konfrontatif.',
    text: 'Apa rekomendasi yang dapat diberikan untuk menurunkan tensi konflik berdasarkan kasus tersebut? (Pilihlah semua jawaban yang benar!)',
    options: [
      { id: 'a', text: 'Menegakkan regulasi ketat untuk melarang acara budaya guna menghindari bentrokan antar masyarakat.' },
      { id: 'b', text: 'Membentuk forum yang dipimpin oleh komunitas untuk pengambilan keputusan partisipatif tentang penggunaan ruang publik.', correct: true },
      { id: 'c', text: 'Memfasilitasi dialog komunitas yang inklusif dengan melibatkan kedua pihak untuk membangun saling pengertian.', correct: true },
      { id: 'd', text: 'Menggunakan mediasi oleh pihak ketiga yang netral dan terlatih tentang kepekaan budaya.', correct: true },
      { id: 'e', text: 'Meminta pihak media untuk membatasi liputan mengenai konflik agar tidak memicu ketegangan publik.' }
    ],
    correctAnswer: ['b', 'c', 'd'],
    officialKeyText: 'B, C, dan D',
    discussion: `Strategi resolusi konflik berbasis konsensus multikultural:
* **Pilihan B (Tepat)**: Memberikan ruang musyawarah partisipatif agar pengelolaan ruang publik disepakati bersama secara adil.
* **Pilihan C (Tepat)**: Membuka forum dialog lintas kelompok untuk membangun empati dan menghilangkan stereotip.
* **Pilihan D (Tepat)**: Melibatkan mediator pihak ketiga yang imparsial dan memahami sensitivitas budaya kedua kelompok.
* *Pilihan A & E (Tidak Tepat)*: Pelarangan budaya atau pembungkaman media bersifat represif dan hanya menutupi konflik tanpa menyelesaikan akar masalah.`
  },
  {
    id: 15,
    number: 15,
    subject: 'Sosiologi',
    topic: 'Respon Kritis terhadap Gelombang Budaya Global (Hallyu)',
    type: 'tepat-table',
    stimulus: 'Gelombang Korea (Hallyu) berkembang pesat (K-Pop, Drama, mode, gaya hidup). Di satu sisi memberi inspirasi budaya baru dan konektivitas global, di sisi lain memicu konsumerisme, pengabaian produk lokal, dan standar kecantikan tidak realistis di kalangan remaja.',
    text: 'Manakah respon kritis yang tepat untuk menanggapi perubahan sosial tersebut?',
    statements: [
      {
        id: 's1',
        text: 'Mengikuti tren tanpa syarat sebagai bagian dari masyarakat global.',
        correct: false
      },
      {
        id: 's2',
        text: 'Mendorong refleksi diri dan literasi media untuk memahami pengaruh budaya.',
        correct: true
      },
      {
        id: 's3',
        text: 'Menyeimbangkan penghargaan terhadap tren Korea dengan dukungan untuk budaya lokal.',
        correct: true
      }
    ],
    officialKeyText: 'Tidak Tepat, Tepat, Tepat',
    discussion: `Respon kritis menghadapi penetrasi budaya asing:
* **Pernyataan 1 (Tidak Tepat)**: Mengadopsi tren tanpa filter (*westernisasi/imitasi buta*) mengancam eksistensi jati diri budaya lokal dan menjerumuskan pada perilaku konsumtif.
* **Pernyataan 2 (Tepat)**: Literasi media dan refleksi diri membantu generasi muda menyaring pesan tersembunyi industri budaya populer.
* **Pernyataan 3 (Tepat)**: Mengimplementasikan konsep *glokalisasi*, yaitu bersikap terbuka pada budaya global sambil tetap mencintai dan melestarikan produk serta budaya bangsa sendiri.`
  },
  {
    id: 16,
    number: 16,
    subject: 'Sosiologi',
    topic: 'Peran Sosiologi Lingkungan & Pemberdayaan Komunitas',
    type: 'sesuai-table',
    stimulus: `**Infografis: Jenis-Jenis Kerusakan Lingkungan Hidup**
(Bencana Alam, Pencemaran Tanah, Pencemaran Udara, Pencemaran Air).`,
    text: 'Tentukan Sesuai atau Tidak Sesuai pada peran ilmu sosiologi untuk menyikapi kasus pada infografis berikut!',
    statements: [
      {
        id: 's1',
        text: 'Meneliti dampak kerusakan lingkungan terhadap terjadinya perubahan perilaku sosial masyarakat.',
        correct: true
      },
      {
        id: 's2',
        text: 'Menganalisis proses peluruhan gas rumah kaca di atmosfer untuk mengurangi pemanasan global.',
        correct: false
      },
      {
        id: 's3',
        text: 'Mendorong pemberdayaan masyarakat di bidang pengelolaan sampah melalui komunitas bank sampah.',
        correct: true
      }
    ],
    officialKeyText: 'Sesuai, Tidak Sesuai, Sesuai',
    discussion: `Peran ilmu sosiologi dalam isu lingkungan hidup:
* **Pernyataan 1 (Sesuai)**: Sosiologi lingkungan mengkaji interaksi timbal balik antara kerusakan ekologi dengan adaptasi perilaku dan relasi sosial manusia.
* **Pernyataan 2 (Tidak Sesuai)**: Analisis reaksi kimiawi atmosferik gas rumah kaca adalah wilayah studi Kimia Lingkungan dan Fisika Atmosfer.
* **Pernyataan 3 (Sesuai)**: Sosiologi terapan berperan merancang rekayasa sosial dan pemberdayaan masyarakat (*community development*) melalui bank sampah.`
  },
  {
    id: 17,
    number: 17,
    subject: 'Sosiologi',
    topic: 'Identitas Multidimensi & Teori Dramaturgi Goffman',
    type: 'multiple',
    stimulus: 'Fitur account switching melatarbelakangi maraknya penggunaan akun alter. Akun alter dibuat untuk membangun sisi personalitas lain. Hasil penelitian menemukan pada akun utama remaja menampilkan diri yang ideal dan jelas, sedangkan pada akun alter mereka membangun identitas baru yang anonim...',
    text: 'Berdasarkan ilustrasi tersebut, apakah dampak negatif paling utama dari fenomena identitas multidimensi terhadap individu?',
    options: [
      { id: 'a', text: 'Ketergantungan pada respons sosial untuk membentuk rasa percaya diri dalam berinteraksi.' },
      { id: 'b', text: 'Keinginan berlebihan untuk tampil sempurna dalam berbagai platform media sosial yang digunakan.' },
      { id: 'c', text: 'Kesulitan menjalin hubungan pertemanan yang terbuka karena tekanan untuk menjaga citra tertentu.' },
      { id: 'd', text: 'Ketidakmampuan membedakan antara citra diri ideal dan jati diri yang sebenarnya secara konsisten.', correct: true },
      { id: 'e', text: 'Kecenderungan menarik diri dari lingkungan sosial karena khawatir tidak sesuai ekspektasi publik.' }
    ],
    officialKeyText: 'D. Ketidakmampuan membedakan antara citra diri ideal dan jati diri yang sebenarnya secara konsisten.',
    discussion: `Berdasarkan perspektif teori dramaturgi Erving Goffman (*front stage vs back stage*), fragmentasi kepribadian antara akun utama (panggung depan/citra ideal) dan akun alter (panggung belakang/anonim) yang berlebihan dapat memicu krisis identitas (*identity confusion*), di mana individu kesulitan mengintegrasikan jati diri aslinya dengan persona maya yang ia bangun.`
  },
  {
    id: 18,
    number: 18,
    subject: 'Sosiologi',
    topic: 'Jenis Penelitian Sosial Berdasarkan Tujuan Praktis',
    type: 'multiple',
    stimulus: 'Sebuah tim pengabdian masyarakat dari perguruan tinggi mengembangkan model pengelolaan sampah berbasis partisipasi warga. Program ini berhasil menurunkan jumlah sampah secara signifikan dan diadaptasi oleh sekolah-sekolah untuk memecahkan persoalan lingkungan secara nyata.',
    text: 'Berdasarkan ilustrasi tersebut, jenis penelitian sosial yang sesuai adalah ...',
    options: [
      { id: 'a', text: 'Eksploratif – untuk menggambarkan realitas sosial yang belum diketahui secara jelas.' },
      { id: 'b', text: 'Verifikatif – untuk menguji kebenaran suatu teori dalam situasi sosial tertentu.' },
      { id: 'c', text: 'Deskriptif – untuk memetakan tingkat pengelolaan di berbagai sekolah secara statistik.' },
      { id: 'd', text: 'Praktis – untuk memberikan solusi nyata terhadap persoalan sosial yang diteliti.', correct: true },
      { id: 'e', text: 'Teoritis – untuk merumuskan konsep-konsep baru dalam memahami perilaku menyimpang.' }
    ],
    officialKeyText: 'D. Praktis – untuk memberikan solusi nyata terhadap persoalan sosial yang diteliti.',
    discussion: `Penelitian sosial praktis atau terapan (*applied research*) berorientasi langsung pada penerapan hasil temuan untuk memecahkan masalah praktis kehidupan masyarakat. Program pengelolaan sampah yang langsung diaplikasikan dan berhasil menurunkan volume sampah membuktikan tujuan penelitian bersifat praktis dan aplikatif.`
  },
  {
    id: 19,
    number: 19,
    subject: 'Sosiologi',
    topic: 'Klasifikasi Kelompok Sosial (Kelompok Sekunder)',
    type: 'multiple',
    stimulus: 'Komunitas pemuda \'Gerak Kota\' dibentuk oleh mahasiswa, buruh, seniman, dan pengusaha muda dari latar belakang berbeda tanpa ikatan kekerabatan/daerah asal, melainkan disatukan oleh tujuan dan kepentingan bersama yaitu ruang kota inklusif dan ekspresi budaya.',
    text: 'Berdasarkan karakteristik tersebut, apakah jenis kelompok sosial komunitas Gerak Kota?',
    options: [
      { id: 'a', text: 'Kelompok primer, karena interaksi anggotanya bersifat akrab dan informal.' },
      { id: 'b', text: 'Kelompok okupasional, karena terdiri atas individu dari berbagai latar pekerjaan.' },
      { id: 'c', text: 'Kelompok etnis, karena anggotanya memiliki latar budaya yang sama.' },
      { id: 'd', text: 'Kelompok sekunder, karena terbentuk atas dasar tujuan dan kepentingan bersama.', correct: true },
      { id: 'e', text: 'Kerumunan sosial, karena terbentuk secara spontan dari masyarakat sekitar.' }
    ],
    officialKeyText: 'D. Kelompok sekunder, karena terbentuk atas dasar tujuan dan kepentingan bersama.',
    discussion: `Komunitas 'Gerak Kota' merupakan **kelompok sekunder** (*secondary group*). Kelompok ini beranggotakan banyak orang dengan latar belakang heterogen yang dipersatukan atas dasar kesamaan visi, kontrak rasional, dan kepentingan bersama (tujuan advokasi ruang kota), bukan karena hubungan kekeluargaan/darah alami (kelompok primer).`
  },
  {
    id: 20,
    number: 20,
    subject: 'Sosiologi',
    topic: 'Sikap Kritis Menghadapi Dampak Negatif Globalisasi',
    type: 'checkboxes',
    stimulus: 'Lina meniru gaya hidup konsumtif, hedonis, dan tren kecantikan luar negeri dari influencer global secara berlebihan sehingga tidak percaya diri, menarik diri dari pergaulan kampus, dan melupakan nilai-nilai budaya lokal.',
    text: 'Apa saja langkah atau sikap kritis yang dapat dilakukan untuk menghindari dampak negatif globalisasi seperti yang dialami Lina? (Pilihlah semua jawaban yang benar!)',
    options: [
      { id: 'a', text: 'Mengadopsi pengaruh global secara selektif sambil mempertahankan identitas budaya lokal.', correct: true },
      { id: 'b', text: 'Sepenuhnya mengisolasi diri dari tren global untuk menghindari dampak negatif yang menyertainya.' },
      { id: 'c', text: 'Mendorong penggunaan media sosial untuk mempromosikan nilai-nilai budaya lokal.', correct: true },
      { id: 'd', text: 'Mengembangkan literasi media untuk menyaring konten secara kritis dan bertanggung jawab.', correct: true },
      { id: 'e', text: 'Meniru budaya global sepenuhnya agar diterima dalam pergaulan modern.' }
    ],
    correctAnswer: ['a', 'c', 'd'],
    officialKeyText: 'A, C, dan D',
    discussion: `Langkah adaptif dan kritis membentengi diri dari dampak negatif globalisasi:
* **Pilihan A (Tepat)**: Bersikap selektif mengadopsi hal-hal positif teknologi/pengetahuan global tanpa mengikis identitas kepribadian lokal.
* **Pilihan C (Tepat)**: Memanfaatkan kanal digital secara proaktif untuk mempopulerkan kearifan budaya bangsa.
* **Pilihan D (Tepat)**: Memperkuat literasi media agar terhindar dari disonansi psikologis dan budaya hedonisme komparatif.
* *Pilihan B & E (Tidak Tepat)*: Menutup diri total (*isolasi*) menghambat kemajuan diri, sedangkan peniruan mutlak (*imitasi buta*) menghancurkan integritas jati diri.`
  }
];
