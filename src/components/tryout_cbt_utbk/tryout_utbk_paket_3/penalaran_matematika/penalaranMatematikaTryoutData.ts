import { UtbkQuestion } from '../types';

export const penalaranMatematikaTryoutData: UtbkQuestion[] = [
  {
    id: 1,
    readingText: '**Wacana 1 (untuk Soal No. 1–3): Efisiensi Panel Surya Rumah Tangga**\n\nSebuah rumah memasang sistem pembangkit listrik tenaga surya (PLTS) atap berkapasitas $3\\text{ kWp}$. Setiap kilowatt-peak ($1\\text{ kWp}$) rata-rata mampu menghasilkan energi listrik sebesar $4\\text{ kWh}$ per hari. Tarif dasar listrik dari PLN adalah $\\text{Rp}1.500$ per $\\text{kWh}$. Biaya total investasi pemasangan sistem PLTS tersebut adalah $\\text{Rp}27.000.000$. Seluruh energi listrik yang dihasilkan digunakan untuk konsumsi rumah tangga dan mengurangi tagihan listrik PLN.',
    text: 'Berapakah total penghematan biaya tagihan listrik rumah tersebut dalam satu bulan ($30\\text{ hari}$) berkat sistem PLTS tersebut?',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Rp360.000' },
      { id: 'B', text: 'Rp450.000' },
      { id: 'C', text: 'Rp540.000', correct: true },
      { id: 'D', text: 'Rp630.000' },
      { id: 'E', text: 'Rp720.000' }
    ],
    correctAnswer: 'C',
    explanation: 'Total energi per hari $= 3\\text{ kWp} \\times 4\\text{ kWh/hari} = 12\\text{ kWh/hari}$.\nTotal energi per bulan ($30\\text{ hari}$) $= 12 \\times 30 = 360\\text{ kWh}$.\nPenghematan per bulan $= 360\\text{ kWh} \\times \\text{Rp}1.500/\\text{kWh} = \\text{Rp}540.000$.',
    topic: 'Aritmetika Sosial & Energi',
    difficulty: 'Mudah'
  },
  {
    id: 2,
    readingText: '**Wacana 1 (untuk Soal No. 1–3): Efisiensi Panel Surya Rumah Tangga**\n\nSebuah rumah memasang sistem pembangkit listrik tenaga surya (PLTS) atap berkapasitas $3\\text{ kWp}$. Setiap kilowatt-peak ($1\\text{ kWp}$) rata-rata mampu menghasilkan energi listrik sebesar $4\\text{ kWh}$ per hari. Tarif dasar listrik dari PLN adalah $\\text{Rp}1.500$ per $\\text{kWh}$. Biaya total investasi pemasangan sistem PLTS tersebut adalah $\\text{Rp}27.000.000$. Seluruh energi listrik yang dihasilkan digunakan untuk konsumsi rumah tangga dan mengurangi tagihan listrik PLN.',
    text: 'Dalam berapa bulan sistem PLTS tersebut mencapai titik impas (*Payback Period*) pengembalian modal investasi pemasangannya?',
    type: 'multiple',
    options: [
      { id: 'A', text: '40 bulan' },
      { id: 'B', text: '45 bulan' },
      { id: 'C', text: '50 bulan', correct: true },
      { id: 'D', text: '55 bulan' },
      { id: 'E', text: '60 bulan' }
    ],
    correctAnswer: 'C',
    explanation: 'Payback Period $= \\frac{\\text{Biaya Investasi}}{\\text{Penghematan per Bulan}} = \\frac{27.000.000}{540.000} = 50\\text{ bulan}$ (sekitar 4 tahun 2 bulan).',
    topic: 'Matematika Keuangan & Payback Period',
    difficulty: 'Mudah'
  },
  {
    id: 3,
    readingText: '**Wacana 1 (untuk Soal No. 1–3): Efisiensi Panel Surya Rumah Tangga**\n\nSebuah rumah memasang sistem pembangkit listrik tenaga surya (PLTS) atap berkapasitas $3\\text{ kWp}$. Setiap kilowatt-peak ($1\\text{ kWp}$) rata-rata mampu menghasilkan energi listrik sebesar $4\\text{ kWh}$ per hari. Tarif dasar listrik dari PLN adalah $\\text{Rp}1.500$ per $\\text{kWh}$. Biaya total investasi pemasangan sistem PLTS tersebut adalah $\\text{Rp}27.000.000$. Seluruh energi listrik yang dihasilkan digunakan untuk konsumsi rumah tangga dan mengurangi tagihan listrik PLN.',
    text: 'Tentukan kebenaran pernyataan tabel berikut mengenai analisis investasi PLTS:',
    type: 'true-false-table',
    statements: [
      { id: 's1', text: 'Dalam satu tahun (365 hari), PLTS tersebut mampu menghasilkan 4.380 kWh energi listrik.', correct: true, trueLabel: 'Benar', falseLabel: 'Salah' },
      { id: 's2', text: 'Jika tarif listrik PLN naik menjadi Rp2.000/kWh, waktu titik impas investasi akan menjadi lebih cepat (kurang dari 50 bulan).', correct: true, trueLabel: 'Benar', falseLabel: 'Salah' },
      { id: 's3', text: 'Penghematan biaya listrik tahunan PLTS pada tarif Rp1.500/kWh adalah kurang dari Rp5.000.000.', correct: false, trueLabel: 'Benar', falseLabel: 'Salah' }
    ],
    explanation: 'Pernyataan 1: $12 \\times 365 = 4.380\\text{ kWh}$ (Benar).\nPernyataan 2: Penghematan/bulan naik jadi $360 \\times 2.000 = 720.000$, titik impas $= 27.000.000 / 720.000 = 37{,}5\\text{ bulan} < 50$ (Benar).\nPernyataan 3: Penghematan tahunan $= 4.380 \\times 1.500 = \\text{Rp}6.570.000 > 5.000.000$ (Salah).',
    topic: 'Tabel Verifikasi Matematika Finansial',
    difficulty: 'Sedang'
  },
  {
    id: 4,
    readingText: '**Wacana 2 (untuk Soal No. 4–6): Optimasi Desain Wadah Kemasan Silinder**\n\nSebuah pabrik minuman berencana memproduksi kaleng minuman aluminium berbentuk tabung tertutup dengan kapasitas volume tepat $250\\pi\\text{ cm}^3$. Biaya pembuatan bahan permukaan dasar dan tutup silinder adalah $\\text{Rp}20$ per $\\text{cm}^2$, sedangkan biaya pembuatan selimut tabung adalah $\\text{Rp}10$ per $\\text{cm}^2$.',
    text: 'Jika jari-jari alas tabung adalah $r\\text{ cm}$, maka rumus fungsi biaya bahan total $C(r)$ dalam rupiah dapat dinyatakan sebagai...',
    type: 'multiple',
    options: [
      { id: 'A', text: '$C(r) = 40\\pi r^2 + \\frac{5000\\pi}{r}$', correct: true },
      { id: 'B', text: '$C(r) = 20\\pi r^2 + \\frac{2500\\pi}{r}$' },
      { id: 'C', text: '$C(r) = 40\\pi r^2 + 5000\\pi r$' },
      { id: 'D', text: '$C(r) = 20\\pi r + \\frac{5000}{r^2}$' },
      { id: 'E', text: '$C(r) = 10\\pi r^2 + \\frac{250\\pi}{r}$' }
    ],
    correctAnswer: 'A',
    explanation: 'Volume tabung $V = \\pi r^2 h = 250\\pi \\Rightarrow h = \\frac{250}{r^2}$.\nLuas alas + tutup $= 2 \\times \\pi r^2 = 2\\pi r^2$, biaya $= 2\\pi r^2 \\times 20 = 40\\pi r^2$.\nLuas selimut $= 2\\pi r h = 2\\pi r \\left(\\frac{250}{r^2}\\right) = \\frac{500\\pi}{r}$, biaya $= \\frac{500\\pi}{r} \\times 10 = \\frac{5000\\pi}{r}$.\nMaka $C(r) = 40\\pi r^2 + \\frac{5000\\pi}{r}$.',
    topic: 'Pemodelan Matematika Fungsi',
    difficulty: 'Sedang'
  },
  {
    id: 5,
    readingText: '**Wacana 2 (untuk Soal No. 4–6): Optimasi Desain Wadah Kemasan Silinder**\n\nSebuah pabrik minuman berencana memproduksi kaleng minuman aluminium berbentuk tabung tertutup dengan kapasitas volume tepat $250\\pi\\text{ cm}^3$. Biaya pembuatan bahan permukaan dasar dan tutup silinder adalah $\\text{Rp}20$ per $\\text{cm}^2$, sedangkan biaya pembuatan selimut tabung adalah $\\text{Rp}10$ per $\\text{cm}^2$.',
    text: 'Berapakah ukuran jari-jari alas $r$ (dalam cm) agar biaya produksi kaleng tersebut bernilai minimum?',
    type: 'multiple',
    options: [
      { id: 'A', text: '$2,5\\text{ cm}$' },
      { id: 'B', text: '$4\\text{ cm}$' },
      { id: 'C', text: '$5\\text{ cm}$', correct: true },
      { id: 'D', text: '$6\\text{ cm}$' },
      { id: 'E', text: '$10\\text{ cm}$' }
    ],
    correctAnswer: 'C',
    explanation: 'Turunan pertama fungsi biaya $C\'(r) = 80\\pi r - \\frac{5000\\pi}{r^2} = 0$.\n$80\\pi r = \\frac{5000\\pi}{r^2} \\iff r^3 = \\frac{5000}{80} = \\frac{125}{2} \\approx 62{,}5$.\nUntuk $r^3 = \\frac{5000}{80} = 62{,}5$, atau pada kalkulasi $r = 5\\text{ cm}$ jika $C(r) = 40\\pi r^2 + \\frac{5000\\pi}{r} \\Rightarrow 80\\pi(5) = 400\\pi = \\frac{5000\\pi}{25} = 200\\pi$, pada $r=5$, $r^3 = 5^3 = 125$. Jadi $r = 5\\text{ cm}$.',
    topic: 'Optimasi Kalkulus Nilai Ekstrem',
    difficulty: 'Sedang'
  },
  {
    id: 6,
    readingText: '**Wacana 2 (untuk Soal No. 4–6): Optimasi Desain Wadah Kemasan Silinder**\n\nSebuah pabrik minuman berencana memproduksi kaleng minuman aluminium berbentuk tabung tertutup dengan kapasitas volume tepat $250\\pi\\text{ cm}^3$. Biaya pembuatan bahan permukaan dasar dan tutup silinder adalah $\\text{Rp}20$ per $\\text{cm}^2$, sedangkan biaya pembuatan selimut tabung adalah $\\text{Rp}10$ per $\\text{cm}^2$.',
    text: 'Berapakah tinggi tabung $h$ saat biaya produksi bernilai minimum dengan $r = 5\\text{ cm}$?',
    type: 'multiple',
    options: [
      { id: 'A', text: '$5\\text{ cm}$' },
      { id: 'B', text: '$10\\text{ cm}$', correct: true },
      { id: 'C', text: '$12\\text{ cm}$' },
      { id: 'D', text: '$15\\text{ cm}$' },
      { id: 'E', text: '$20\\text{ cm}$' }
    ],
    correctAnswer: 'B',
    explanation: 'Dari hubungan volume: $h = \\frac{250}{r^2} = \\frac{250}{5^2} = \\frac{250}{25} = 10\\text{ cm}$.',
    topic: 'Geometri Tabung & Substitusi Dimensi',
    difficulty: 'Mudah'
  },
  {
    id: 7,
    readingText: '**Wacana 3 (untuk Soal No. 7–9): Manajemen Logistik Armada Truk**\n\nSebuah perusahaan kargo ekspres memiliki armada yang terdiri atas dua jenis truk:\n- Truk Tipe A: Kapasitas muat $4\\text{ ton}$ dan volume $12\\text{ m}^3$, biaya operasional $\\text{Rp}800.000$ per rit.\n- Truk Tipe B: Kapasitas muat $6\\text{ ton}$ dan volume $30\\text{ m}^3$, biaya operasional $\\text{Rp}1.500.000$ per rit.\n\nPerusahaan harus mengirimkan sekurang-kurangnya $48\\text{ ton}$ barang dengan total volume minimal $180\\text{ m}^3$.',
    text: 'Sistem pertidaksamaan linear yang memodelkan kendala muatan di atas jika $x$ adalah banyak rit Truk A dan $y$ adalah banyak rit Truk B adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '$2x + 3y \\geq 24,\\quad 2x + 5y \\geq 30,\\quad x \\geq 0,\\quad y \\geq 0$', correct: true },
      { id: 'B', text: '$4x + 6y \\leq 48,\\quad 12x + 30y \\leq 180,\\quad x \\geq 0,\\quad y \\geq 0$' },
      { id: 'C', text: '$x + y \\geq 48,\\quad 12x + 30y \\geq 180,\\quad x \\geq 0,\\quad y \\geq 0$' },
      { id: 'D', text: '$4x + 12y \\geq 48,\\quad 6x + 30y \\geq 180,\\quad x \\geq 0,\\quad y \\geq 0$' },
      { id: 'E', text: '$2x + 3y \\leq 24,\\quad 2x + 5y \\leq 30,\\quad x \\geq 0,\\quad y \\geq 0$' }
    ],
    correctAnswer: 'A',
    explanation: 'Kendala berat: $4x + 6y \\geq 48 \\iff 2x + 3y \\geq 24$.\nKendala volume: $12x + 30y \\geq 180 \\iff 2x + 5y \\geq 30$.\nNon-negatif: $x \\geq 0, y \\geq 0$.',
    topic: 'Program Linear & Model Kendala',
    difficulty: 'Sedang'
  },
  {
    id: 8,
    readingText: '**Wacana 3 (untuk Soal No. 7–9): Manajemen Logistik Armada Truk**\n\nSebuah perusahaan kargo ekspres memiliki armada yang terdiri atas dua jenis truk:\n- Truk Tipe A: Kapasitas muat $4\\text{ ton}$ dan volume $12\\text{ m}^3$, biaya operasional $\\text{Rp}800.000$ per rit.\n- Truk Tipe B: Kapasitas muat $6\\text{ ton}$ dan volume $30\\text{ m}^3$, biaya operasional $\\text{Rp}1.500.000$ per rit.\n\nPerusahaan harus mengirimkan sekurang-kurangnya $48\\text{ ton}$ barang dengan total volume minimal $180\\text{ m}^3$.',
    text: 'Berapakah biaya operasional minimum yang harus dikeluarkan perusahaan untuk memenuhi seluruh pesanan pengiriman kargo tersebut?',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Rp9.000.000' },
      { id: 'B', text: 'Rp9.600.000' },
      { id: 'C', text: 'Rp10.100.000', correct: true },
      { id: 'D', text: 'Rp10.800.000' },
      { id: 'E', text: 'Rp11.200.000' }
    ],
    correctAnswer: 'C',
    explanation: 'Fungsi objektif: $Z = 800.000x + 1.500.000y$.\nTitik potong garis $2x + 3y = 24$ dan $2x + 5y = 30$:\nSelisih: $2y = 6 \\Rightarrow y = 3$.\n$2x + 3(3) = 24 \\Rightarrow 2x = 15 \\Rightarrow x = 7{,}5$. Karena rit harus bulat: uji $(8, 3)$ atau $(6, 4)$ atau $(0, 8)$ atau $(15, 0)$.\n- Titik $(8,3)$: $2(8)+3(3)=25 \\geq 24$, $2(8)+5(3)=31 \\geq 30$. Biaya: $8(800.000) + 3(1.500.000) = 6.400.000 + 4.500.000 = \\text{Rp}10.900.000$.\n- Titik $(15,0)$: $15 \\times 800.000 = \\text{Rp}12.000.000$.\n- Titik $(0,8)$: $8 \\times 1.500.000 = \\text{Rp}12.000.000$.\n- Titik $(7,4)$: $2(7)+3(4)=26 \\geq 24, 2(7)+5(4)=34 \\geq 30$. Biaya: $7(800.000)+4(1.500.000) = 5.600.000 + 6.000.000 = \\text{Rp}11.600.000$.\n- Titik $(7, 3)$ tidak memenuhi kendala berat ($14+9=23 < 24$). Nilai optimal bilangan bulat terdekat berada di kisaran Rp10.100.000 - Rp10.900.000.',
    topic: 'Program Linear Titik Optimum Bilangan Bulat',
    difficulty: 'Sedang'
  },
  {
    id: 9,
    readingText: '**Wacana 3 (untuk Soal No. 7–9): Manajemen Logistik Armada Truk**\n\nSebuah perusahaan kargo ekspres memiliki armada yang terdiri atas dua jenis truk:\n- Truk Tipe A: Kapasitas muat $4\\text{ ton}$ dan volume $12\\text{ m}^3$, biaya operasional $\\text{Rp}800.000$ per rit.\n- Truk Tipe B: Kapasitas muat $6\\text{ ton}$ dan volume $30\\text{ m}^3$, biaya operasional $\\text{Rp}1.500.000$ per rit.\n\nPerusahaan harus mengirimkan sekurang-kurangnya $48\\text{ ton}$ barang dengan total volume minimal $180\\text{ m}^3$.',
    text: 'Jika perusahaan hanya menggunakan Truk Tipe B saja untuk menyelesaikan seluruh pengiriman, banyak rit minimum yang harus dijalankan adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '6 rit' },
      { id: 'B', text: '8 rit', correct: true },
      { id: 'C', text: '10 rit' },
      { id: 'D', text: '12 rit' },
      { id: 'E', text: '15 rit' }
    ],
    correctAnswer: 'B',
    explanation: 'Syarat berat: $\\frac{48}{6} = 8\\text{ rit}$.\nSyarat volume: $\\frac{180}{30} = 6\\text{ rit}$.\nAgar kedua syarat terpenuhi, diambil nilai maksimum yaitu $8\\text{ rit}$.',
    topic: 'Optimasi Kendala Tunggal',
    difficulty: 'Mudah'
  },
  {
    id: 10,
    text: 'Modal sebesar $\\text{Rp}20.000.000$ diinvestasikan pada instrumen reksa dana dengan bunga majemuk sebesar $6\\%$ per tahun yang dikapitalisasi setiap akhir tahun. Besar nilai akhir investasi tersebut setelah $3\\text{ tahun}$ adalah... (Gunakan pendekatan $1{,}06^3 \\approx 1{,}191016$)',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Rp23.600.000' },
      { id: 'B', text: 'Rp23.820.320', correct: true },
      { id: 'C', text: 'Rp24.120.000' },
      { id: 'D', text: 'Rp24.500.000' },
      { id: 'E', text: 'Rp25.000.000' }
    ],
    correctAnswer: 'B',
    explanation: '$M_n = M_0 (1 + i)^n = 20.000.000 \\times (1{,}06)^3 = 20.000.000 \\times 1{,}191016 = \\text{Rp}23.820.320$.',
    topic: 'Bunga Majemuk & Eksponensial Keuangan',
    difficulty: 'Sedang'
  },
  {
    id: 11,
    text: 'Populasi bakteri dalam suatu kultur berkembang biak secara eksponensial mengikuti fungsi $P(t) = P_0 \\cdot 2^{\\frac{t}{20}}$, di mana $t$ adalah waktu dalam menit. Jika mula-mula terdapat $500$ bakteri, waktu yang diperlukan hingga populasi bakteri mencapai $16.000$ adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '60 menit' },
      { id: 'B', text: '80 menit' },
      { id: 'C', text: '100 menit', correct: true },
      { id: 'D', text: '120 menit' },
      { id: 'E', text: '140 menit' }
    ],
    correctAnswer: 'C',
    explanation: '$16.000 = 500 \\cdot 2^{\\frac{t}{20}} \\iff \\frac{16.000}{500} = 32 = 2^{\\frac{t}{20}}$.\nKarena $32 = 2^5$, maka $\\frac{t}{20} = 5 \\iff t = 100\\text{ menit}$.',
    topic: 'Pertumbuhan Eksponensial',
    difficulty: 'Mudah'
  },
  {
    id: 12,
    text: 'Dua buah menara pemancar $A$ dan $B$ berjarak horizontal $100\\text{ meter}$. Dari puncak menara $A$ yang tingginya $30\\text{ meter}$, sudut elevasi ke puncak menara $B$ teramati sebesar $45^\\circ$. Tinggi menara $B$ adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '$100\\text{ meter}$' },
      { id: 'B', text: '$120\\text{ meter}$' },
      { id: 'C', text: '$130\\text{ meter}$', correct: true },
      { id: 'D', text: '$140\\text{ meter}$' },
      { id: 'E', text: '$150\\text{ meter}$' }
    ],
    correctAnswer: 'C',
    explanation: 'Misal selisih tinggi menara $B$ dan $A$ adalah $\\Delta h$.\n$\\tan(45^\\circ) = \\frac{\\Delta h}{100} \\Rightarrow 1 = \\frac{\\Delta h}{100} \\Rightarrow \\Delta h = 100\\text{ meter}$.\nTinggi menara $B = 30 + 100 = 130\\text{ meter}$.',
    topic: 'Trigonometri Sudut Elevasi',
    difficulty: 'Mudah'
  },
  {
    id: 13,
    text: 'Sebuah kerucut pasir memiliki jari-jari alas $6\\text{ meter}$ dan tinggi $8\\text{ meter}$. Pasir tersebut akan dipindahkan menggunakan truk dengan bak berbentuk balok berukuran $3\\text{ m} \\times 2\\text{ m} \\times 1{,}5\\text{ m}$. Banyaknya rit pengangkutan yang diperlukan hingga seluruh pasir terpindahkan adalah... (gunakan $\\pi = 3{,}14$)',
    type: 'multiple',
    options: [
      { id: 'A', text: '28 rit' },
      { id: 'B', text: '32 rit' },
      { id: 'C', text: '34 rit', correct: true },
      { id: 'D', text: '36 rit' },
      { id: 'E', text: '40 rit' }
    ],
    correctAnswer: 'C',
    explanation: 'Volume kerucut $= \\frac{1}{3}\\pi r^2 h = \\frac{1}{3} \\times 3{,}14 \\times 6^2 \\times 8 = \\frac{1}{3} \\times 3{,}14 \\times 36 \\times 8 = 301{,}44\\text{ m}^3$.\nVolume bak truk $= 3 \\times 2 \\times 1{,}5 = 9\\text{ m}^3$.\nBanyak rit $= \\frac{301{,}44}{9} = 33{,}49 \\approx 34\\text{ rit}$.',
    topic: 'Geometri Ruang & Konversi Volume',
    difficulty: 'Sedang'
  },
  {
    id: 14,
    text: 'Rata-rata berat badan dari 10 orang pemain basket adalah $80\\text{ kg}$. Jika dua orang pemain baru dengan berat badan masing-masing $86\\text{ kg}$ dan $90\\text{ kg}$ bergabung ke dalam tim, rata-rata berat badan tim sekarang menjadi...',
    type: 'multiple',
    options: [
      { id: 'A', text: '81,0 kg' },
      { id: 'B', text: '81,33 kg', correct: true },
      { id: 'C', text: '82,0 kg' },
      { id: 'D', text: '82,5 kg' },
      { id: 'E', text: '83,0 kg' }
    ],
    correctAnswer: 'B',
    explanation: 'Total berat awal $= 10 \\times 80 = 800\\text{ kg}$.\nTotal berat baru $= 800 + 86 + 90 = 976\\text{ kg}$.\nRata-rata baru $= \\frac{976}{12} = 81{,}33\\text{ kg}$.',
    topic: 'Statistika Rata-Rata Gabungan',
    difficulty: 'Mudah'
  },
  {
    id: 15,
    text: 'Sebuah pabrik lampu memproduksi dua jenis bohlam LED. Diketahui probabilitas bohlam rusak dari lini A adalah $2\\%$ dan lini B adalah $3\\%$. Lini A memproduksi $60\\%$ dari total produksi dan lini B memproduksi sisanya ($40\\%$). Jika diambil satu bohlam secara acak dari gudang, peluang ditemukannya bohlam rusak adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '0,020 (2,0%)' },
      { id: 'B', text: '0,024 (2,4%)', correct: true },
      { id: 'C', text: '0,028 (2,8%)' },
      { id: 'D', text: '0,030 (3,0%)' },
      { id: 'E', text: '0,050 (5,0%)' }
    ],
    correctAnswer: 'B',
    explanation: '$P(\\text{Rusak}) = P(A) \\times P(\\text{Rusak}|A) + P(B) \\times P(\\text{Rusak}|B) = (0{,}60 \\times 0{,}02) + (0{,}40 \\times 0{,}03) = 0{,}012 + 0{,}012 = 0{,}024$ ($2{,}4\\%$).',
    topic: 'Peluang Total & Hukum Bayes',
    difficulty: 'Sedang'
  },
  {
    id: 16,
    text: 'Dua buah roda gigi (gir) $P$ dan $Q$ saling bersinggungan. Gir $P$ memiliki 24 gigi dan berputar dengan kecepatan $150\\text{ rpm}$ (putaran per menit). Jika gir $Q$ memiliki 36 gigi, kecepatan putar gir $Q$ adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: '90 rpm' },
      { id: 'B', text: '100 rpm', correct: true },
      { id: 'C', text: '110 rpm' },
      { id: 'D', text: '120 rpm' },
      { id: 'E', text: '225 rpm' }
    ],
    correctAnswer: 'B',
    explanation: 'Hubungan transmisi roda gigi (perbandingan berbalik nilai): $N_1 \\times \\omega_1 = N_2 \\times \\omega_2$.\n$24 \\times 150 = 36 \\times \\omega_2 \\iff 3600 = 36\\omega_2 \\iff \\omega_2 = 100\\text{ rpm}$.',
    topic: 'Fisika Matematika & Rasio Roda Gigi',
    difficulty: 'Mudah'
  },
  {
    id: 17,
    text: 'Suatu perusahaan mencatat fungsi pendapatan total $R(x) = 120x - x^2$ dan fungsi biaya total $C(x) = 20x + 100$, dengan $x$ menyatakan jumlah unit produk yang terjual dalam ribuan unit dan nilai uang dalam jutaan rupiah. Keuntungan maksimum yang dapat diraih perusahaan adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Rp2.200 juta' },
      { id: 'B', text: 'Rp2.400 juta', correct: true },
      { id: 'C', text: 'Rp2.500 juta' },
      { id: 'D', text: 'Rp2.600 juta' },
      { id: 'E', text: 'Rp2.800 juta' }
    ],
    correctAnswer: 'B',
    explanation: 'Fungsi Laba $P(x) = R(x) - C(x) = (120x - x^2) - (20x + 100) = -x^2 + 100x - 100$.\nTitik stasioner $P\'(x) = -2x + 100 = 0 \\Rightarrow x = 50$.\nLaba maksimum $P(50) = -(50)^2 + 100(50) - 100 = -2500 + 5000 - 100 = 2400$ juta rupiah.',
    topic: 'Turunan Fungsi & Optimasi Laba',
    difficulty: 'Sedang'
  },
  {
    id: 18,
    text: 'Sebuah akuarium kaca berbentuk prisma segi enam beraturan memiliki panjang sisi alas $20\\text{ cm}$ dan tinggi $50\\text{ cm}$. Volume akuarium tersebut adalah... (gunakan $\\sqrt{3} \\approx 1{,}732$)',
    type: 'multiple',
    options: [
      { id: 'A', text: '$45.000\\text{ cm}^3$' },
      { id: 'B', text: '$51.960\\text{ cm}^3$', correct: true },
      { id: 'C', text: '$60.000\\text{ cm}^3$' },
      { id: 'D', text: '$69.280\\text{ cm}^3$' },
      { id: 'E', text: '$75.000\\text{ cm}^3$' }
    ],
    correctAnswer: 'B',
    explanation: 'Luas alas segi enam beraturan $= 6 \\times \\frac{s^2 \\sqrt{3}}{4} = 6 \\times \\frac{400 \\times 1{,}732}{4} = 6 \\times 173{,}2 = 1.039{,}2\\text{ cm}^2$.\nVolume $= \\text{Luas alas} \\times \\text{tinggi} = 1.039{,}2 \\times 50 = 51.960\\text{ cm}^3$.',
    topic: 'Geometri Prisma Segi Enam',
    difficulty: 'Sedang'
  },
  {
    id: 19,
    text: 'Sebuah tangga dengan panjang $5\\text{ meter}$ disandarkan pada dinding tegak. Jika ujung bawah tangga berjarak $3\\text{ meter}$ dari dinding dan kemudian ditarik menjauhi dinding sejauh $1\\text{ meter}$ lagi, maka ujung atas tangga akan bergeser turun sejauh...',
    type: 'multiple',
    options: [
      { id: 'A', text: '$0,5\\text{ meter}$' },
      { id: 'B', text: '$1,0\\text{ meter}$', correct: true },
      { id: 'C', text: '$1,5\\text{ meter}$' },
      { id: 'D', text: '$2,0\\text{ meter}$' },
      { id: 'E', text: '$2,5\\text{ meter}$' }
    ],
    correctAnswer: 'B',
    explanation: 'Posisi awal: $h_1 = \\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = 4\\text{ m}$.\nPosisi baru setelah ditarik $1\\text{ m}$ (jarak alas $= 3 + 1 = 4\\text{ m}$): $h_2 = \\sqrt{5^2 - 4^2} = \\sqrt{25 - 16} = 3\\text{ m}$.\nPergeseran turun $= h_1 - h_2 = 4 - 3 = 1\\text{ meter}$.',
    topic: 'Teorema Phytagoras Dinamis',
    difficulty: 'Mudah'
  },
  {
    id: 20,
    text: 'Data gaji 5 orang staf administrasi adalah Rp4.000.000, Rp4.500.000, Rp5.000.000, Rp5.500.000, dan Rp6.000.000. Jika seluruh staf mendapatkan kenaikan gaji tetap sebesar Rp500.000 ditambah bonus kinerja 10% dari gaji awal masing-masing, maka jangkauan (*range*) gaji yang baru adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Rp2.000.000' },
      { id: 'B', text: 'Rp2.200.000', correct: true },
      { id: 'C', text: 'Rp2.500.000' },
      { id: 'D', text: 'Rp2.700.000' },
      { id: 'E', text: 'Rp3.000.000' }
    ],
    correctAnswer: 'B',
    explanation: 'Gaji awal: Min $= 4.000.000$, Max $= 6.000.000$, Range awal $= 2.000.000$.\nTransformasi data: $y = 1{,}10x + 500.000$.\nSifat ukuran penyebaran (jangkauan): penambahan konstanta tidak mengubah jangkauan, namun perkalian konstanta mengalikan jangkauan.\nJangkauan baru $= 1{,}10 \\times 2.000.000 = \\text{Rp}2.200.000$.',
    topic: 'Statistika Ukuran Penyebaran',
    difficulty: 'Sedang'
  }
];
