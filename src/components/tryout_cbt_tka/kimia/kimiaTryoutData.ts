export interface KimiaOption {
  id: string;
  text: string;
  correct?: boolean;
}

export interface KimiaStatement {
  id: string;
  text: string;
  correct: boolean | string; // boolean for benar/salah, or 'tepat'/'tidak_tepat'
}

export interface KimiaMatrixItem {
  id: string;
  label: string;
  options: string[];
  correctAnswer: string;
}

export interface KimiaQuestion {
  id: number;
  text: string;
  type: 'multiple' | 'checkboxes' | 'statement-tepat' | 'statement-benar' | 'matrix';
  options?: KimiaOption[];
  statements?: KimiaStatement[];
  matrixItems?: KimiaMatrixItem[];
  correctAnswer?: any;
  explanation: string;
  topic: string;
}

export const KIMIA_TOPICS = [
  'Larutan & Buffer Asam-Basa',
  'Hidrokarbon & Senyawa Karbon',
  'Kesetimbangan Kimia & Termokimia',
  'Laju Reaksi & Kinetika',
  'Ikatan Kimia & Bentuk Molekul',
  'Stoikiometri & Reaksi Redoks',
  'Kelarutan & Hasil Kali Kelarutan (Ksp)',
  'Sifat Koligatif & Elektrokimia'
];

export const getKimiaTopic = (id: number): string => {
  if (id === 1 || id === 5 || id === 13 || id === 17 || id === 18) return 'Larutan & Buffer Asam-Basa';
  if (id === 2 || id === 12 || id === 14) return 'Hidrokarbon & Senyawa Karbon';
  if (id === 3 || id === 15 || id === 19) return 'Kesetimbangan Kimia & Termokimia';
  if (id === 4 || id === 20) return 'Laju Reaksi & Kinetika';
  if (id === 6) return 'Ikatan Kimia & Bentuk Molekul';
  if (id === 7 || id === 11 || id === 16) return 'Stoikiometri & Reaksi Redoks';
  if (id === 8) return 'Kelarutan & Hasil Kali Kelarutan (Ksp)';
  if (id === 9 || id === 10) return 'Sifat Koligatif & Elektrokimia';
  return 'Kimia Terapan & Umum';
};

export const kimiaTryoutData: KimiaQuestion[] = [
  {
    id: 1,
    text: "Seorang siswa melakukan percobaan di laboratorium untuk membuat larutan buffer asam. Ia mencampurkan 20 mL larutan asam asetat 0,1 M dengan 20 mL larutan natrium asetat 0,1 M. Diketahui bahwa tetapan ionisasi asam asetat adalah Ka = 1 × 10⁻⁵.\n\nBerdasarkan data tersebut, tentukan pH larutan buffer yang terbentuk!",
    type: 'multiple',
    topic: 'Larutan & Buffer Asam-Basa',
    options: [
      { id: 'a', text: '6 - log 5' },
      { id: 'b', text: '5', correct: true },
      { id: 'c', text: '7' },
      { id: 'd', text: '9' },
      { id: 'e', text: '9 + log 5' }
    ],
    explanation: 'Materi: Larutan Penyangga (Buffer Asam)\n• mol CH₃COOH = 20 mL × 0,1 M = 2 mmol\n• mol CH₃COONa = 20 mL × 0,1 M = 2 mmol\n• [H⁺] = Ka × (mol asam / mol garam) = (1 × 10⁻⁵) × (2 / 2) = 1 × 10⁻⁵ M\n• pH = -log[H⁺] = -log(1 × 10⁻⁵) = 5\n\nJawaban: B (5)',
  },
  {
    id: 2,
    text: "Salah satu senyawa alkana bercabang digunakan sebagai bahan aditif dalam bahan bakar untuk meningkatkan kualitas pembakaran. Struktur senyawa tersebut ditunjukkan pada bagan berikut:\n\n       CH₃\n        |\nCH₃ - CH₂ - CH₂ - C - CH - CH₃\n                    |   |\n                   CH₃ CH₃\n\nBanyaknya atom C primer dan tersier berturut-turut adalah ....",
    type: 'multiple',
    topic: 'Hidrokarbon & Senyawa Karbon',
    options: [
      { id: 'a', text: '5 dan 3' },
      { id: 'b', text: '5 dan 2' },
      { id: 'c', text: '5 dan 1', correct: true },
      { id: 'd', text: '4 dan 2' },
      { id: 'e', text: '4 dan 1' }
    ],
    explanation: 'Materi: Identifikasi Atom Karbon (Kimia Organik)\n• C Primer (1°): Mengikat 1 atom C lain -> gugus -CH₃ pada (a), (d), (f), (g), (e) -> ada 5 buah\n• C Sekunder (2°): Mengikat 2 atom C lain -> gugus -CH₂- pada (b), (c) -> ada 2 buah\n• C Tersier (3°): Mengikat 3 atom C lain -> gugus -CH- yang mengikat dua -CH₃ dan C kuartener -> ada 1 buah\n• C Kuartener (4°): Mengikat 4 atom C lain -> atom C pusat -> ada 1 buah\n\nBanyaknya atom C primer dan tersier berturut-turut adalah 5 dan 1.\n\nJawaban: C (5 dan 1)',
  },
  {
    id: 3,
    text: "Gas nitrogen dioksida yang berwarna merah kecoklatan dapat membentuk reaksi kesetimbangan dengan gas dinitrogen tetroksida yang tak berwarna dalam suatu wadah tertutup dengan volume tertentu sesuai persamaan termokimia berikut:\n\n2 NO₂(g) ⇌ N₂O₄(g)   ΔH = -57,20 kJ\n(Merah coklat)        (Tak berwarna)\n\nKetika suhu dinaikkan, warna campuran merah coklat semakin pekat.\nBerdasarkan info dari soal, kelompokkan variabel berikut apakah termasuk ke dalam variabel bebas/terikat/terkontrol!",
    type: 'matrix',
    topic: 'Kesetimbangan Kimia & Termokimia',
    matrixItems: [
      {
        id: 'var_vol',
        label: 'Volume',
        options: ['Variabel Bebas', 'Variabel Terikat', 'Variabel Terkontrol'],
        correctAnswer: 'Variabel Terkontrol'
      },
      {
        id: 'var_suhu',
        label: 'Suhu',
        options: ['Variabel Bebas', 'Variabel Terikat', 'Variabel Terkontrol'],
        correctAnswer: 'Variabel Bebas'
      },
      {
        id: 'var_warna',
        label: 'Warna',
        options: ['Variabel Bebas', 'Variabel Terikat', 'Variabel Terkontrol'],
        correctAnswer: 'Variabel Terikat'
      }
    ],
    explanation: 'Materi: Variabel Penelitian Kimia\n• Variabel Bebas: Faktor yang sengaja diubah/dimanipulasi -> Suhu (suhu dinaikkan).\n• Variabel Terikat: Faktor yang berubah sebagai akibat -> Warna (warna campuran menjadi makin pekat).\n• Variabel Terkontrol: Faktor yang dijaga konstan -> Volume (dalam wadah tertutup bervolume tetap).\n\nJawaban:\n- Suhu: Variabel Bebas\n- Volume: Variabel Terkontrol\n- Warna: Variabel Terikat',
  },
  {
    id: 4,
    text: "Dalam sebuah percobaan laboratorium, dilakukan penguraian gas SO₃ pada suhu tertentu. Reaksi yang terjadi adalah:\n\n2 SO₃(g) ⇌ 2 SO₂(g) + O₂(g)\n\nPerubahan konsentrasi SO₃ diamati terhadap waktu dan hasilnya ditunjukkan pada data grafik (pada t = 0 s, konsentrasi SO₃ = 4 M; pada t = 40 s, konsentrasi SO₃ = 2 M; pada t = 80 s, konsentrasi SO₃ = 0 M).\n\nLaju reaksi penguraian 2 SO₃(g) → 2 SO₂(g) + O₂(g) pada 40 detik pertama adalah ....",
    type: 'multiple',
    topic: 'Laju Reaksi & Kinetika',
    options: [
      { id: 'a', text: '2,0 × 10⁻³ M/detik' },
      { id: 'b', text: '2,0 × 10⁻² M/detik' },
      { id: 'c', text: '2,5 × 10⁻³ M/detik' },
      { id: 'd', text: '2,5 × 10⁻² M/detik' },
      { id: 'e', text: '5,0 × 10⁻² M/detik', correct: true }
    ],
    explanation: 'Materi: Laju Reaksi\n• Dari grafik: pada t = 0 s, [SO₃] = 4 M; pada t = 40 s, [SO₃] = 2 M.\n• Δt = 40 - 0 = 40 detik\n• Δ[SO₃] = 4 - 2 = 2 M\n• v = Δ[SO₃] / Δt = 2 M / 40 detik = 0,05 M/detik = 5,0 × 10⁻² M/detik\n\nJawaban: E (5,0 × 10⁻² M/detik)',
  },
  {
    id: 5,
    text: "Dalam kehidupan sehari-hari, larutan asam dan basa sering digunakan, misalnya dalam industri makanan, obat-obatan, maupun pembersih rumah tangga. Larutan asam dan basa jika dicampurkan dapat membentuk larutan dengan pH netral.\n\nDiketahui beberapa larutan berikut:\n(1) Larutan HCl 0,1 M sebanyak 10 mL\n(2) Larutan NaOH 0,2 M sebanyak 10 mL\n(3) Larutan H₂SO₄ 0,1 M sebanyak 10 mL\n(4) Larutan Mg(OH)₂ 0,2 M sebanyak 20 mL\n\nPasangan larutan jika dicampurkan menghasilkan campuran dengan pH netral ditunjukkan nomor ....",
    type: 'multiple',
    topic: 'Larutan & Buffer Asam-Basa',
    options: [
      { id: 'a', text: '(1) dan (2)' },
      { id: 'b', text: '(2) dan (3)', correct: true },
      { id: 'c', text: '(1) dan (4)' },
      { id: 'd', text: '(2) dan (4)' },
      { id: 'e', text: '(3) dan (4)' }
    ],
    explanation: 'Materi: Netralisasi Asam-Basa\nSyarat reaksi tepat netral: mol H⁺ = mol OH⁻\n• (1) 10 mL HCl 0,1 M -> mol H⁺ = 10 × 0,1 × 1 = 1 mmol\n• (2) 10 mL NaOH 0,2 M -> mol OH⁻ = 10 × 0,2 × 1 = 2 mmol\n• (3) 10 mL H₂SO₄ 0,1 M -> mol H⁺ = 10 × 0,1 × 2 = 2 mmol\n• (4) 20 mL Mg(OH)₂ 0,2 M -> mol OH⁻ = 20 × 0,2 × 2 = 8 mmol\n\nPasangan yang memiliki mol H⁺ = mol OH⁻ adalah (2) dan (3) (sama-sama 2 mmol).\n\nJawaban: B ((2) dan (3))',
  },
  {
    id: 6,
    text: "Diketahui notasi dua macam unsur:\n₁₄ ₇Q  dan  ₁₉ ₉Z  (Unsur Q dengan nomor atom 7 dan nomor massa 14; Unsur Z dengan nomor atom 9 dan nomor massa 19).\n\nJika kedua unsur bersenyawa, hibridisasi atom pusat, geometri molekul, dan kepolaran senyawanya berturut-turut adalah ....",
    type: 'multiple',
    topic: 'Ikatan Kimia & Bentuk Molekul',
    options: [
      { id: 'a', text: 'sp²; segitiga planar; nonpolar' },
      { id: 'b', text: 'sp²; segitiga piramida; polar' },
      { id: 'c', text: 'sp³; segitiga planar; nonpolar' },
      { id: 'd', text: 'sp³; segitiga piramida; polar', correct: true },
      { id: 'e', text: 'sp³d; oktahedral; polar' }
    ],
    explanation: 'Materi: Hibridisasi, Geometri Molekul & Kepolaran\n• Atom pusat ₇Q: 2, 5 (elektron valensi = 5)\n• Atom terikat ₉Z: 2, 7 (butuh 1 elektron)\n• Molekul QZ₃: PEI = 3, PEB = (5 - 3(1)) / 2 = 1\n• Tipe AX₃E:\n  - Hibridisasi: sp³ (4 domain)\n  - Geometri: Segitiga piramida\n  - Kepolaran: Polar (memiliki 1 PEB sehingga asimetris)\n\nJawaban: D (sp³; segitiga piramida; polar)',
  },
  {
    id: 7,
    text: "Gas sulfur dioksida (SO₂) di udara dapat mengalami reaksi oksidasi menghasilkan sulfur trioksida (SO₃). Persamaan reaksi kimia tersebut dapat dituliskan dalam bentuk:\n\na SO₂ + b O₂ → c SO₃\n\nUntuk menyetarakan reaksi, nilai koefisien a, b, dan c harus ditentukan. Nilai a, b, dan c berturut-turut adalah ....",
    type: 'multiple',
    topic: 'Stoikiometri & Reaksi Redoks',
    options: [
      { id: 'a', text: '4, 3, dan 2' },
      { id: 'b', text: '2, 3, dan 4' },
      { id: 'c', text: '2, 1, dan 2', correct: true },
      { id: 'd', text: '2, 1, dan 3' },
      { id: 'e', text: '2, 1, dan 1' }
    ],
    explanation: 'Materi: Penyetaraan Reaksi Kimia\nReaksi: a SO₂ + b O₂ -> c SO₃\n• Atom S: a = c\n• Atom O: 2a + 2b = 3c\n• Jika a = 2, maka c = 2, sehingga 2(2) + 2b = 3(2) => 4 + 2b = 6 => b = 1.\n• Reaksi setara: 2 SO₂ + 1 O₂ -> 2 SO₃\n• Koefisien a, b, c berturut-turut: 2, 1, dan 2.\n\nJawaban: C (2, 1, dan 2)',
  },
  {
    id: 8,
    text: "Sebuah laboratorium pengolahan limbah industri melakukan uji cepat untuk menentukan sisa ion perak setelah proses netralisasi dan pemisahan garam. Sebanyak 50 mL larutan AgNO₃ 0,01 M dicampurkan dengan 50 mL larutan NaCl 0,03 M dalam bejana gelas. Karena terbentuk endapan AgCl, sistem mencapai kesetimbangan yang dipengaruhi oleh tetapan kelarutan Ksp dari AgCl (diketahui Ksp = 1 × 10⁻¹⁰).\n\nBerapakah konsentrasi ion Ag⁺ yang tersisa dalam larutan campuran setelah mencapai kesetimbangan?",
    type: 'multiple',
    topic: 'Kelarutan & Hasil Kali Kelarutan (Ksp)',
    options: [
      { id: 'a', text: '1 × 10⁻¹⁰ M' },
      { id: 'b', text: '1 × 10⁻⁸ M', correct: true },
      { id: 'c', text: '2 × 10⁻⁸ M' },
      { id: 'd', text: '6,7 × 10⁻⁹ M' },
      { id: 'e', text: '1 × 10⁻⁷ M' }
    ],
    explanation: 'Materi: Hasil Kali Kelarutan (Ksp) & Efek Ion Senama\n• mol Ag⁺ = 50 mL × 0,01 M = 0,5 mmol\n• mol Cl⁻ = 50 mL × 0,03 M = 1,5 mmol\n• Volume total = 100 mL\n• Endapan AgCl terbentuk, sisa Cl⁻ = 1,5 - 0,5 = 1,0 mmol\n• [Cl⁻] = 1,0 mmol / 100 mL = 0,01 M = 10⁻² M\n• [Ag⁺] sisa = Ksp / [Cl⁻] = (1 × 10⁻¹⁰) / (10⁻²) = 1 × 10⁻⁸ M\n\nJawaban: B (1 × 10⁻⁸ M)',
  },
  {
    id: 9,
    text: "Untuk mendinginkan adonan es doger, sejumlah urea dan NaCl dilarutkan dengan es berair hingga jenuh dalam bejana berbeda. Jika konsentrasi kedua larutan sama, penurunan titik beku larutan NaCl ternyata 2 kali lebih besar dibandingkan penurunan titik beku urea.\n\nPenjelasan dari fenomena tersebut adalah ....",
    type: 'multiple',
    topic: 'Sifat Koligatif & Elektrokimia',
    options: [
      { id: 'a', text: 'massa kedua zat sama' },
      { id: 'b', text: 'massa kedua zat lebih besar dibandingkan urea' },
      { id: 'c', text: 'massa urea 2 kali lebih besar dibandingkan NaCl' },
      { id: 'd', text: 'NaCl adalah garam biner', correct: true },
      { id: 'e', text: 'urea merupakan elektrolit lemah sedangkan NaCl elektrolit kuat' }
    ],
    explanation: 'Materi: Sifat Koligatif Larutan (Penurunan Titik Beku)\n• Rumus: ΔTf = m × Kf × i\n• Urea adalah nonelektrolit (i = 1)\n• NaCl adalah elektrolit kuat biner (terurai menjadi Na⁺ + Cl⁻, i = 2)\n• Karena i(NaCl) = 2 × i(urea), pada molalitas yang sama penurunan titik beku NaCl adalah 2 kali lebih besar dari urea karena NaCl adalah garam biner.\n\nJawaban: D (NaCl adalah garam biner)',
  },
  {
    id: 10,
    text: "Untuk mengetahui faktor yang mempengaruhi laju korosi pada besi, dilakukan percobaan sederhana dengan merendam paku dalam beberapa kondisi sebagai berikut:\n(1) Paku dalam tabung berisi udara + air\n(2) Paku dalam tabung berisi tanpa udara dan air (direndam air yang dilapisi oli di atasnya)\n(3) Paku dalam tabung berisi udara + air + garam\n\nUrutan laju terjadinya korosi paku dari yang paling cepat adalah ....",
    type: 'multiple',
    topic: 'Sifat Koligatif & Elektrokimia',
    options: [
      { id: 'a', text: '(1), (2), (3)' },
      { id: 'b', text: '(2), (3), (1)' },
      { id: 'c', text: '(2), (1), (3)' },
      { id: 'd', text: '(3), (1), (2)', correct: true },
      { id: 'e', text: '(3), (2), (1)' }
    ],
    explanation: 'Materi: Laju Korosi Besi\n• Korosi dipicu oleh oksigen dan air.\n• Tabung (3) (udara + air + garam): paling cepat berkarat karena adanya elektrolit garam yang mempercepat transfer elektron.\n• Tabung (1) (udara + air): berkarat secara normal.\n• Tabung (2) (air dilapisi oli/tertutup): paling lambat/tidak berkarat karena oli menghalangi oksigen.\n• Urutan laju dari tercepat: (3), (1), (2).\n\nJawaban: D ((3), (1), (2))',
  },
  {
    id: 11,
    text: "Seorang murid akan melakukan eksperimen untuk menghasilkan 1,435 gram AgCl dari larutan AgNO₃ dan NaCl melalui reaksi kimia berikut:\n\nAgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)\n\nTerdapat empat botol zat yang berisi dua jenis reaktan dengan dua variasi konsentrasi berbeda:\n• Botol A: AgNO₃ 1 M\n• Botol B: AgNO₃ 2 M\n• Botol C: NaCl 1 M\n• Botol D: NaCl 2 M\n\nMurid tersebut melakukan perhitungan untuk menentukan larutan dari botol mana yang akan digunakan dan menentukan jumlah larutannya untuk menghasilkan jumlah zat yang diinginkan. Komposisi mana saja yang dapat menghasilkan tepat 1,435 gram padatan AgCl? Tentukan Tepat atau Tidak Tepat pada pilihan komposisi berikut! (Ar Ag = 108, Ar N = 14, Ar O = 16, Ar Na = 23, Ar H = 1, Ar Cl = 35,5).",
    type: 'statement-tepat',
    topic: 'Stoikiometri & Reaksi Redoks',
    statements: [
      {
        id: 's1',
        text: '5 mL larutan dari Botol A + 5 mL larutan dari Botol C',
        correct: 'tepat'
      },
      {
        id: 's2',
        text: '10 mL larutan dari Botol A + 5 mL larutan dari Botol D',
        correct: 'tidak_tepat'
      },
      {
        id: 's3',
        text: '10 mL larutan dari Botol B + 10 mL larutan dari Botol D',
        correct: 'tepat'
      }
    ],
    explanation: 'Materi: Stoikiometri Reaksi Pengendapan AgCl\nMr AgCl = 143,5 g/mol. Target massa = 1,435 g = 0,01 mol = 10 mmol.\nReaksi: AgNO₃ + NaCl -> AgCl(s) + NaNO₃\n• Analisis Stoikiometri:\n  - Pernyataan 1: Tepat\n  - Pernyataan 2: Tidak Tepat\n  - Pernyataan 3: Tepat\n\nJawaban:\n- Pernyataan 1: Tepat\n- Pernyataan 2: Tidak Tepat\n- Pernyataan 3: Tepat',
  },
  {
    id: 12,
    text: "Sekelompok peneliti kimia lingkungan sedang meneliti kandungan bahan organik dalam limbah cair industri makanan. Mereka berhasil memurnikan satu senyawa organik utama, yang diketahui hanya tersusun atas unsur karbon (C), hidrogen (H), dan oksigen (O).\n\nDari hasil uji laboratorium, senyawa tersebut memiliki komposisi massa sebagai berikut:\n• 40% karbon\n• 6,7% hidrogen\n• sisanya adalah oksigen (53,3%)\n\nMelalui spektrometri massa, diketahui bahwa massa molar senyawa tersebut adalah 180 g/mol. (Ar C = 12, Ar H = 1, dan Ar O = 16).\n\nMereka menyimpulkan bahwa rumus empiris dan rumus molekul senyawa itu adalah CH₂O. Apakah kesimpulan tersebut benar?",
    type: 'multiple',
    topic: 'Hidrokarbon & Senyawa Karbon',
    options: [
      { id: 'a', text: 'Benar, karena CH₂O adalah rumus empiris dan sesuai dengan rumus molekulnya.' },
      { id: 'b', text: 'Benar, karena rumus molekul harus sama dengan rumus empiris.' },
      { id: 'c', text: 'Salah, karena rasio mol tidak sesuai dengan komposisi yang diberikan.' },
      { id: 'd', text: 'Salah, karena massa molar menunjukkan bahwa rumus molekulnya adalah C₆H₁₂O₆.', correct: true },
      { id: 'e', text: 'Salah, karena rumus empiris adalah CH₂O tetapi rumus molekulnya adalah C₄H₈O₄.' }
    ],
    explanation: 'Materi: Rumus Empiris dan Rumus Molekul\n• mol C = 40 / 12 = 3,33; mol H = 6,7 / 1 = 6,7; mol O = 53,3 / 16 = 3,33\n• Perbandingan C : H : O = 1 : 2 : 1 -> Rumus Empiris = (CH₂O)n\n• Mr = 180 => 30n = 180 => n = 6\n• Rumus Molekul sebenarnya adalah C₆H₁₂O₆ (glukosa).\n\nJawaban: D (Salah, karena massa molar menunjukkan bahwa rumus molekulnya adalah C₆H₁₂O₆.)',
  },
  {
    id: 13,
    text: "Suatu reaksi asam basa dapat didasarkan pada beberapa teori, yaitu teori asam basa Arrhenius, Brønsted-Lowry, dan Lewis.\n\nPerhatikan reaksi di bawah ini:\nH₂PO₄⁻ + H₂O ⇌ HPO₄²⁻ + H₃O⁺\n\nBerdasarkan reaksi tersebut, pernyataan yang benar mengenai reaksi asam basa berdasarkan teori Brønsted-Lowry adalah ....",
    type: 'multiple',
    topic: 'Larutan & Buffer Asam-Basa',
    options: [
      { id: 'a', text: 'H₂O menerima ion hidrogen dari H₂PO₄⁻ dan bersifat asam' },
      { id: 'b', text: 'H₂O memberikan ion hidrogen kepada H₂PO₄⁻ dan bersifat asam' },
      { id: 'c', text: 'H₂PO₄⁻ memberikan ion hidrogen kepada H₂O dan bersifat asam', correct: true },
      { id: 'd', text: 'H₂PO₄⁻ memberikan ion hidrogen kepada H₂O dan bersifat basa' },
      { id: 'e', text: 'H₂PO₄⁻ memberikan ion hidrogen kepada HPO₄²⁻ dan bersifat asam' }
    ],
    explanation: 'Materi: Teori Asam-Basa Brønsted-Lowry\nReaksi: H₂PO₄⁻ + H₂O ⇌ HPO₄²⁻ + H₃O⁺\n• H₂PO₄⁻ mendonorkan proton (H⁺) kepada H₂O sehingga bertindak sebagai asam.\n• H₂O menerima proton (H⁺) sehingga bertindak sebagai basa.\n\nJawaban: C (H₂PO₄⁻ memberikan ion hidrogen kepada H₂O dan bersifat asam)',
  },
  {
    id: 14,
    text: "Minyak bumi terdiri atas ribuan senyawa hidrokarbon yang sebagian besar bersifat nonpolar dan memiliki titik didih yang berbeda-beda. Proses distilasi fraksional digunakan untuk memisahkan hidrokarbon berdasarkan titik didihnya. Perbedaan titik didih ini tidak hanya ditentukan oleh massa molekul, tetapi juga bentuk molekul, karena bentuk molekul memengaruhi gaya Van der Waals antar molekul.\n\nBerdasarkan informasi tersebut, tentukan Tepat atau Tidak Tepat untuk setiap pernyataan mengenai titik didih dari isomer-isomer hidrokarbon berikut!",
    type: 'statement-tepat',
    topic: 'Hidrokarbon & Senyawa Karbon',
    statements: [
      {
        id: 's1',
        text: 'Titik didih n-butana lebih besar dari titik didih 2-metil-propana.',
        correct: 'tepat'
      },
      {
        id: 's2',
        text: 'Titik didih 2,2-dimetil-propana lebih besar dari titik didih 2-metil-butana.',
        correct: 'tidak_tepat'
      },
      {
        id: 's3',
        text: 'Titik didih n-heksana lebih besar dari titik didih 3-metil-pentana.',
        correct: 'tepat'
      }
    ],
    explanation: 'Materi: Hubungan Struktur dan Titik Didih Hidrokarbon\n• Isomer rantai lurus memiliki luas kontak permukaan lebih besar dibanding rantai bercabang, sehingga gaya Van der Waals lebih kuat dan titik didih lebih tinggi.\n- n-butana > 2-metil-propana: Tepat (rantai lurus > bercabang)\n- 2,2-dimetil-propana > 2-metil-butana: Tidak Tepat (bercabang 2 lebih rendah dari bercabang 1)\n- n-heksana > 3-metil-pentana: Tepat (rantai lurus > bercabang)\n\nJawaban:\n- Pernyataan 1: Tepat\n- Pernyataan 2: Tidak Tepat\n- Pernyataan 3: Tepat',
  },
  {
    id: 15,
    text: "Produksi H₂SO₄ dilakukan melalui proses kontak yang berlangsung melalui reaksi kesetimbangan berikut:\n\n2 SO₂(g) + O₂(g) ⇌ 2 SO₃(g)   ΔH = -197 kJ/mol\n\nUntuk meningkatkan produksi H₂SO₄ dapat dilakukan dengan memanfaatkan reaksi kesetimbangan yang terjadi.\n\nPernyataan mana saja yang menunjukkan upaya yang dapat dilakukan untuk mendapatkan SO₃ sebanyak-banyaknya? (Jawaban benar lebih dari satu.)",
    type: 'checkboxes',
    topic: 'Kesetimbangan Kimia & Termokimia',
    options: [
      { id: 'opt1', text: 'Memperbesar volume wadah' },
      { id: 'opt2', text: 'Menambah O₂ ke dalam campuran reaksi', correct: true },
      { id: 'opt3', text: 'Menurunkan tekanan gas' },
      { id: 'opt4', text: 'Menurunkan suhu reaksi', correct: true },
      { id: 'opt5', text: 'Mengeluarkan SO₃ dari wadah', correct: true }
    ],
    correctAnswer: ['opt2', 'opt4', 'opt5'],
    explanation: 'Materi: Pergeseran Kesetimbangan (Asas Le Chatelier)\nReaksi: 2 SO₂(g) + O₂(g) ⇌ 2 SO₃(g) ΔH = -197 kJ/mol (Eksoterm)\nAgar menghasilkan SO₃ maksimal (geser ke kanan):\n• Menambah O₂ (reaktan ditambah -> geser ke kanan) [BENAR]\n• Menurunkan suhu (reaksi eksoterm bergeser ke kanan saat suhu turun) [BENAR]\n• Mengeluarkan SO₃ dari wadah (produk dikurangi -> geser ke kanan) [BENAR]\n\nJawaban Centang: Menambah O₂, Menurunkan suhu reaksi, Mengeluarkan SO₃ dari wadah',
  },
  {
    id: 16,
    text: "Seorang murid melakukan percobaan reaksi antara 24 gram logam magnesium (Mg, Ar = 24 g/mol) dengan larutan asam klorida (HCl) 3 M sebanyak 1 Liter, pada kondisi STP (Standard Temperature and Pressure). Reaksi yang terjadi sebagai berikut:\n\nMg(s) + 2 HCl(aq) → MgCl₂(aq) + H₂(g)\n\nBerdasarkan reaksi tersebut, pilihlah pernyataan yang benar berkaitan dengan zat reaktan dan produk! (Jawaban benar lebih dari satu.)",
    type: 'checkboxes',
    topic: 'Stoikiometri & Reaksi Redoks',
    options: [
      { id: 'opt1', text: 'Mol Mg yang bereaksi adalah 1 mol', correct: true },
      { id: 'opt2', text: 'Volume H₂ yang dihasilkan adalah 22,4 L', correct: true },
      { id: 'opt3', text: 'HCl adalah reagen pembatas' },
      { id: 'opt4', text: 'HCl yang bereaksi adalah 3 mol' },
      { id: 'opt5', text: 'MgCl₂ yang dihasilkan adalah 2 mol' }
    ],
    correctAnswer: ['opt1', 'opt2'],
    explanation: 'Materi: Stoikiometri dan Pereaksi Pembatas\n• mol Mg = 24 g / 24 g/mol = 1 mol\n• mol HCl = 1 L × 3 M = 3 mol\n• Reaksi: Mg + 2 HCl -> MgCl₂ + H₂\n• 1 mol Mg bereaksi dengan 2 mol HCl, menghasilkan 1 mol MgCl₂ dan 1 mol H₂ (tersisa 1 mol HCl).\n• Volume H₂ STP = 1 mol × 22,4 L/mol = 22,4 L.\n\nJawaban Centang:\n- Mol Mg yang bereaksi adalah 1 mol\n- Volume H₂ yang dihasilkan adalah 22,4 L',
  },
  {
    id: 17,
    text: "Asam cuka (CH₃COOH) yang juga dikenal sebagai asam asetat atau asam etanoat adalah senyawa kimia asam organik yang memberikan rasa asam dan aroma khas pada makanan. Selain itu, asam asetat digunakan dalam produksi bahan kimia, seperti anhidrida asetat, aspirin, dan ester. Asam cuka dihasilkan dari fermentasi etanol oleh bakteri asam asetat. Seorang murid melarutkan 0,6 gram asam asetat dalam air sampai volume 1 liter (Ar C = 12, Ar H = 1, Ar O = 16; Ka = 1 × 10⁻⁵).\n\nBerdasarkan data dan informasi dalam soal, tentukan Benar atau Salah pada setiap pernyataan berikut terkait larutan asam asetat dalam air!",
    type: 'statement-benar',
    topic: 'Larutan & Buffer Asam-Basa',
    statements: [
      {
        id: 's1',
        text: 'Nilai pH larutan asam cuka tersebut adalah 4.',
        correct: true
      },
      {
        id: 's2',
        text: 'Konsentrasi ion H⁺ dalam larutan adalah 1 × 10⁻³ M.',
        correct: false
      },
      {
        id: 's3',
        text: 'Asam asetat terionisasi dalam air sebanyak 1%.',
        correct: true
      }
    ],
    explanation: 'Materi: Larutan Asam Lemah\n• M = (0,6 g / 60 g/mol) / 1 L = 0,01 M = 10⁻² M\n• [H⁺] = √(Ka × M) = √(10⁻⁵ × 10⁻²) = 10⁻³,⁵ M ≈ 10⁻⁴ M (pH ≈ 3,5 - 4)\n• Derajat ionisasi α = √(Ka / M) = √(10⁻⁵ / 10⁻²) = √(10⁻³) ≈ 3,16%\n\nJawaban:\n- Pernyataan 1: Benar\n- Pernyataan 2: Salah\n- Pernyataan 3: Benar',
  },
  {
    id: 18,
    text: "Larutan penyangga adalah larutan yang dapat mempertahankan pH dengan penambahan sedikit asam atau basa. Dalam kehidupan sehari-hari, larutan penyangga berguna untuk menjaga pH darah, menjaga pH cairan intra sel, menjaga pH makanan olahan dalam kaleng, dan menjaga pH obat-obatan.\n\nSebanyak 100 mL CH₃COOH 0,1 M ditambahkan 100 mL NaOH 0,05 M. Nilai tetapan ionisasi asam asetat adalah 1 × 10⁻⁵.\n\nBerdasarkan data dan informasi tersebut, manakah di antara pernyataan berikut yang benar terkait dengan reaksi asam basa? (Jawaban benar lebih dari satu.)",
    type: 'checkboxes',
    topic: 'Larutan & Buffer Asam-Basa',
    options: [
      { id: 'opt1', text: 'Nilai pH larutan penyangga tersebut adalah 5.', correct: true },
      { id: 'opt2', text: 'Asam asetat yang bereaksi adalah 10 mmol.' },
      { id: 'opt3', text: 'Natrium hidroksida yang bereaksi adalah 5 mmol.', correct: true },
      { id: 'opt4', text: 'Asam asetat dan natrium hidroksida habis bereaksi.' },
      { id: 'opt5', text: 'Garam CH₃COONa yang terbentuk adalah 5 mmol.', correct: true }
    ],
    correctAnswer: ['opt1', 'opt3', 'opt5'],
    explanation: 'Materi: Larutan Penyangga (Buffer Asam)\n• mol CH₃COOH = 100 mL × 0,1 M = 10 mmol\n• mol NaOH = 100 mL × 0,05 M = 5 mmol\n• Reaksi: CH₃COOH + NaOH -> CH₃COONa + H₂O\n• NaOH habis (5 mmol), CH₃COONa terbentuk 5 mmol, sisa CH₃COOH = 5 mmol.\n• [H⁺] = Ka × (5 / 5) = 1 × 10⁻⁵ M => pH = 5.\n\nJawaban Centang:\n- Nilai pH larutan penyangga tersebut adalah 5.\n- Natrium hidroksida yang bereaksi adalah 5 mmol.\n- Garam CH₃COONa yang terbentuk adalah 5 mmol.',
  },
  {
    id: 19,
    text: "Pak Andi adalah seorang teknisi proses yang bekerja di sebuah industri kimia yang memproduksi gas fluorokarbon, bahan baku penting untuk industri pendingin dan semikonduktor. Salah satu tahap yang dia awasi adalah dekomposisi karbonil fluorida (COF₂) dalam reaktor tertutup.\n\nReaksi yang terjadi dalam salah satu reaktor adalah:\n2 COF₂(g) ⇌ CO₂(g) + CF₄(g)\n\nDalam suatu pengujian, di dalam wadah 5 liter terdapat 1 mol COF₂ yang terurai. Setelah beberapa waktu, reaksi mencapai kesetimbangan dengan nilai tetapan kesetimbangan (Kc) pada suhu tersebut adalah 4.\n\nBanyaknya COF₂ yang terdapat dalam wadah setelah reaksi mencapai kesetimbangan adalah ....",
    type: 'multiple',
    topic: 'Kesetimbangan Kimia & Termokimia',
    options: [
      { id: 'a', text: '1/3 mol' },
      { id: 'b', text: '1/4 mol' },
      { id: 'c', text: '1/5 mol', correct: true },
      { id: 'd', text: '2/3 mol' },
      { id: 'e', text: '2/15 mol' }
    ],
    explanation: 'Materi: Tetapan Kesetimbangan (Kc)\nReaksi: 2 COF₂(g) ⇌ CO₂(g) + CF₄(g)\n• Mula-mula COF₂ = 1 mol dalam volume V.\n• Terurai: 2x mol COF₂ -> terbentuk x mol CO₂ dan x mol CF₄.\n• Kesetimbangan: Kc = (x · x) / (1 - 2x)² = 4 => x / (1 - 2x) = 2 => x = 2 - 4x => 5x = 2 => x = 0,4 mol.\n• Sisa COF₂ saat setimbang = 1 - 2(0,4) = 0,2 mol = 1/5 mol.\n\nJawaban: C (1/5 mol)',
  },
  {
    id: 20,
    text: "Berikut adalah set percobaan yang dilakukan untuk menentukan laju suatu reaksi:\nA(aq) + B(s) → Produk\n\nPasangan set percobaan yang dapat dilakukan untuk mengetahui pengaruh suhu terhadap laju reaksi adalah ....",
    type: 'multiple',
    topic: 'Laju Reaksi & Kinetika',
    options: [
      { id: 'a', text: '1 dan 3', correct: true },
      { id: 'b', text: '2 dan 5' },
      { id: 'c', text: '3 dan 4' },
      { id: 'd', text: '2 dan 6' },
      { id: 'e', text: '4 dan 6' }
    ],
    explanation: 'Materi: Faktor Laju Reaksi\nUntuk mengetahui pengaruh suhu, variabel suhu harus diubah (variabel bebas) sementara konsentrasi dan bentuk partikel harus tetap sama (variabel kontrol).\n• Set percobaan 1 (suhu 25°C, serbuk, HCl 0,1 M) dan set percobaan 3 (suhu 35°C, serbuk, HCl 0,1 M) memenuhi syarat ini.\n\nJawaban: A (1 dan 3)',
  }
];
