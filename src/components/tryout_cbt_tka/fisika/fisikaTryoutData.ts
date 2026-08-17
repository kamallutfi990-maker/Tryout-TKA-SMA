export interface FisikaOption {
  id: string;
  text: string;
  correct?: boolean;
}

export interface FisikaStatement {
  id: string;
  text: string;
  correct: boolean | string;
}

export interface FisikaQuestion {
  id: number;
  text: string;
  type: 'multiple' | 'checkboxes' | 'true-false-table' | 'matrix-radio';
  options?: FisikaOption[];
  statements?: FisikaStatement[];
  correctAnswer?: any;
  explanation: string;
  topic: string;
  imageUrl?: string;
  imageRef?: string;
}

export const FISIKA_TOPICS = [
  'Kinematika & Gerak Parabola',
  'Dinamika Gerak Melingkar & Gesekan',
  'Momentum, Impuls & Tumbukan',
  'Gelombang Bunyi & Efek Doppler',
  'Optik Geometri & Cermin Cembung',
  'Elektrostatika & Hukum Coulomb',
  'Listrik Dinamis & Rangkaian Tertutup',
  'Fluida Statis & Bejana Berhubungan',
  'Fluida Dinamis & Asas Bernoulli',
  'Fluida Statis & Hukum Archimedes',
  'Kinematika GLBB & Analisis Grafik',
  'Keseimbangan Benda Tegar & Titik Pusat Massa',
  'Fluida Dinamis & Alat Semprot',
  'Optik Geometri & Pembiasan Cahaya',
  'Termodinamika & Mesin Carnot',
  'Listrik Statis & Medan Listrik Pelat',
  'Pengukuran & Ketidakpastian Jangka Sorong',
  'Impuls & Gaya Impulsif',
  'Suhu, Kalor & Pemuaian Termal',
  'Energi, Daya Listrik & Rangkaian'
];

export const getFisikaTopic = (id: number): string => {
  switch (id) {
    case 1: return 'Kinematika & Gerak Parabola';
    case 2: return 'Dinamika Gerak Melingkar & Gesekan';
    case 3: return 'Momentum, Impuls & Tumbukan';
    case 4: return 'Gelombang Bunyi & Efek Doppler';
    case 5: return 'Optik Geometri & Cermin Cembung';
    case 6: return 'Elektrostatika & Hukum Coulomb';
    case 7: return 'Listrik Dinamis & Rangkaian Tertutup';
    case 8: return 'Fluida Statis & Bejana Berhubungan';
    case 9: return 'Fluida Dinamis & Asas Bernoulli';
    case 10: return 'Fluida Statis & Hukum Archimedes';
    case 11: return 'Kinematika GLBB & Analisis Grafik';
    case 12: return 'Keseimbangan Benda Tegar & Titik Pusat Massa';
    case 13: return 'Fluida Dinamis & Alat Semprot';
    case 14: return 'Optik Geometri & Pembiasan Cahaya';
    case 15: return 'Termodinamika & Mesin Carnot';
    case 16: return 'Listrik Statis & Medan Listrik Pelat';
    case 17: return 'Pengukuran & Ketidakpastian Jangka Sorong';
    case 18: return 'Impuls & Gaya Impulsif';
    case 19: return 'Suhu, Kalor & Pemuaian Termal';
    case 20: return 'Energi, Daya Listrik & Rangkaian';
    default: return 'Fisika Umum';
  }
};

export const fisikaTryoutData: FisikaQuestion[] = [
  {
    id: 1,
    topic: 'Kinematika & Gerak Parabola',
    imageUrl: '/images/fisika/IMG_2364.jpeg',
    imageRef: 'IMG_2364',
    type: 'true-false-table',
    text: `Dua orang mencoba cara yang berbeda untuk menembak sasaran pada titik C. Orang pertama menggunakan bola A dan diletakkan di tepi meja. Orang kedua menggunakan bola B yang berada di lantai. Bola A dan B kemudian ditembakkan secara bersamaan pada arah mendatar ($g = 10\\text{ m/s}^2$ dan gesekan diabaikan).

**Keterangan pada gambar**: Bola A bergerak mendatar dengan $v_1 = 30\\text{ m}\\cdot\\text{s}^{-1}$ dari meja setinggi $y$. Bola B bergerak mendatar dari lantai dengan kecepatan $v_2$. Jarak mendatar ke titik sasaran C adalah $x = 12\\text{ m}$.

Ternyata kedua bola sampai dan mengenai sasaran di titik C secara bersamaan. Apa saja kondisi awal yang dapat menyebabkan hal tersebut?
*(Keterangan: Gesekan antara bola dengan lantai, permukaan meja, maupun udara diabaikan).*`,
    statements: [
      { id: 'stmt1', text: 'Massa bola A dan bola B sama.', correct: false },
      { id: 'stmt2', text: 'Posisi bola A saat itu adalah $0,8\\text{ m}$ di atas tanah.', correct: true },
      { id: 'stmt3', text: 'Bola B dihentakkan dengan kecepatan awal sebesar $10\\text{ m}\\cdot\\text{s}^{-1}$.', correct: false }
    ],
    explanation: `### Pembahasan Soal No. 1
* **Analisis Gerak Horizontal & Vertikal Bola A**:
  Bola A mengalami gerak parabola dengan kecepatan horizontal tetap $v_1 = 30\\text{ m/s}$ dan jatuh bebas secara vertikal.
  Waktu yang dibutuhkan bola A untuk menempuh jarak mendatar $x = 12\\text{ m}$:
  $$t = \\frac{x}{v_1} = \\frac{12\\text{ m}}{30\\text{ m/s}} = 0,4\\text{ s}$$

  Tinggi meja ($y$) tempat bola A dijatuhkan:
  $$y = \\frac{1}{2}gt^2 = \\frac{1}{2}(10)(0,4)^2 = 5 \\times 0,16 = 0,8\\text{ m}$$

* **Analisis Gerak Bola B**:
  Bola B bergerak lurus beraturan (GLB) mendatar di lantai dan harus tiba di sasaran secara bersamaan ($t = 0,4\\text{ s}$):
  $$v_2 = \\frac{x}{t} = \\frac{12\\text{ m}}{0,4\\text{ s}} = 30\\text{ m/s}$$

* **Evaluasi Pernyataan**:
  1. *Massa bola A dan bola B sama*: **Salah** (waktu jatuh bebas dan gerak horizontal tidak dipengaruhi oleh massa benda karena percepatan gravitasi bernilai sama untuk semua benda).
  2. *Posisi bola A saat itu adalah $0,8\\text{ m}$ di atas tanah*: **Benar** ($y = 0,8\\text{ m}$).
  3. *Bola B dihentakkan dengan kecepatan awal sebesar $10\\text{ m/s}$*: **Salah** (kecepatan awal bola B seharusnya $30\\text{ m/s}$).`
  },
  {
    id: 2,
    topic: 'Dinamika Gerak Melingkar & Gesekan',
    imageUrl: '/images/fisika/IMG_2365.jpeg',
    imageRef: 'IMG_2365',
    type: 'checkboxes',
    text: `Sebuah meja berputar dengan kecepatan sudut $\\omega = 4\\text{ rad}\\cdot\\text{s}^{-1}$ dan koefisien gesekan statis antara beban dan permukaan meja $\\mu_s = 0,48$ (percepatan gravitasi bumi $g = 10\\text{ m}\\cdot\\text{s}^{-2}$).

Dimana sajakah beban dapat diletakkan agar beban tersebut tidak terlempar dari meja?
Pilihlah setiap jarak berikut. Jarak (nilai $R$) tersebut dihitung dari pusat meja. *(Jawaban benar lebih dari satu)*.`,
    options: [
      { id: 'opt1', text: '$8\\text{ cm}$', correct: true },
      { id: 'opt2', text: '$16\\text{ cm}$', correct: true },
      { id: 'opt3', text: '$24\\text{ cm}$', correct: true },
      { id: 'opt4', text: '$30\\text{ cm}$', correct: true },
      { id: 'opt5', text: '$40\\text{ cm}$', correct: false }
    ],
    explanation: `### Pembahasan Soal No. 2
Agar benda tidak terlempar dari meja berputar, gaya gesekan statis maksimum harus lebih besar atau sama dengan gaya sentripetal yang dialami beban:
$$F_s \\ge F_{sp}$$
$$\\mu_s m g \\ge m \\omega^2 R$$
$$R \\le \\frac{\\mu_s g}{\\omega^2}$$

Substitusi nilai yang diketahui:
$$R \\le \\frac{0,48 \\times 10}{4^2} = \\frac{4,8}{16} = 0,30\\text{ m} = 30\\text{ cm}$$

Dengan demikian, beban aman diletakkan pada semua posisi $R \\le 30\\text{ cm}$, yaitu: **$8\\text{ cm}$**, **$16\\text{ cm}$**, **$24\\text{ cm}$**, dan **$30\\text{ cm}$**.`
  },
  {
    id: 3,
    topic: 'Momentum, Impuls & Tumbukan',
    imageUrl: '/images/fisika/IMG_2366.jpeg',
    imageRef: 'IMG_2366',
    type: 'true-false-table',
    text: `Perhatikan gambar peristiwa tumbukan antara mobil boks dan mobil sedan berikut ini!

(a) Sebelum tumbukan
Setelah bertumbukan, kedua mobil bergerak menjadi satu dalam keadaan mobil boks mendorong mobil sedan.

Apa sajakah kondisi yang terpenuhi saat proses maupun setelah tumbukan? Pilihlah Benar atau Salah untuk kondisi berikut!`,
    statements: [
      { id: 'stmt1', text: 'Setelah tumbukan, kecepatan kedua mobil itu sama besar.', correct: true },
      { id: 'stmt2', text: 'Momentum kedua mobil sebelum tumbukan lebih besar daripada sesudah tumbukan.', correct: false },
      { id: 'stmt3', text: 'Koefisien restitusi tumbukan bernilai nol.', correct: true }
    ],
    explanation: `### Pembahasan Soal No. 3
Peristiwa kedua mobil bergerak menjadi satu setelah tumbukan merupakan jenis **tumbukan tidak lenting sama sekali** (*perfectly inelastic collision*).

* **Evaluasi Pernyataan**:
  1. *Setelah tumbukan kecepatan kedua mobil sama besar*: **Benar** (karena kedua mobil menempel/menyatu sehingga memiliki kecepatan akhir yang sama $v_1' = v_2' = v'$).
  2. *Momentum kedua mobil sebelum tumbukan lebih besar daripada sesudah tumbukan*: **Salah** (berdasarkan Hukum Kekekalan Momentum, momentum total sistem sebelum tumbukan selalu sama dengan sesudah tumbukan: $\\Sigma p_{\\text{awal}} = \\Sigma p_{\\text{akhir}}$).
  3. *Koefisien restitusi tumbukan bernilai nol*: **Benar** (tumbukan tidak lenting sama sekali memiliki nilai $e = 0$).`
  },
  {
    id: 4,
    topic: 'Gelombang Bunyi & Efek Doppler',
    type: 'checkboxes',
    text: `Seorang pengendara motor (PM) mengendarai motornya dengan kecepatan tertentu berada pada satu garis lurus dengan mobil ambulans (MA) yang saat itu membunyikan sirine dengan frekuensi tertentu yang juga bergerak dengan kecepatan tertentu. Saat itu nilai kecepatan gerak PM lebih kecil dari MA ($v_p < v_s$).

Pada kondisi apa sajakah pengendara motor akan mendengar bunyi sirine ambulans dengan frekuensi bunyi lebih besar dari kondisi awalnya ($f_p > f_s$)?
Klik pada setiap kondisi yang benar. Jawaban benar lebih dari satu.`,
    options: [
      { id: 'opt1', text: 'PM bergerak mendekati MA, MA bergerak mendekati PM', correct: true },
      { id: 'opt2', text: 'PM bergerak menjauhi MA, MA bergerak mendekati PM', correct: true },
      { id: 'opt3', text: 'PM diam, MA bergerak mendekati PM', correct: true },
      { id: 'opt4', text: 'PM bergerak mendekati MA, MA bergerak menjauhi PM', correct: false },
      { id: 'opt5', text: 'PM bergerak menjauhi MA, MA diam', correct: false }
    ],
    explanation: `### Pembahasan Soal No. 4
Persamaan Efek Doppler:
$$f_p = \\left( \\frac{v \\pm v_p}{v \\mp v_s} \\right) f_s$$

Diketahui kecepatan ambulans lebih besar dari pengendara motor ($v_s > v_p$). Agar $f_p > f_s$, maka faktor pengali $\\frac{v \\pm v_p}{v \\mp v_s}$ harus bernilai $> 1$.

* **Analisis Opsi**:
  1. *PM mendekati MA ($+v_p$), MA mendekati PM ($-v_s$)*:
     $$f_p = \\left( \\frac{v + v_p}{v - v_s} \\right) f_s > f_s \\quad \\text{(Benar, pembilang membesar dan penyebut mengecil)}$$
  2. *PM menjauhi MA ($-v_p$), MA mendekati PM ($-v_s$)*:
     Karena $v_s > v_p$, maka pengurangan pada penyebut ($v - v_s$) lebih besar daripada pengurangan pada pembilang ($v - v_p$), sehingga $\\frac{v - v_p}{v - v_s} > 1$ dan $f_p > f_s$ **(Benar)**.
  3. *PM diam ($v_p = 0$), MA mendekati PM ($-v_s$)*:
     $$f_p = \\left( \\frac{v}{v - v_s} \\right) f_s > f_s \\quad \\text{(Benar, penyebut lebih kecil dari pembilang)}$$`
  },
  {
    id: 5,
    topic: 'Optik Geometri & Cermin Cembung',
    imageUrl: '/images/fisika/IMG_2367.jpeg',
    imageRef: 'IMG_2367',
    type: 'multiple',
    text: `Seorang siswa yang tingginya $160\\text{ cm}$ berdiri di depan cermin cembung yang mempunyai jarak fokus $16\\text{ cm}$ (jarak mula-mula ke cermin $= 48\\text{ cm}$). Dia mengamati bayangan dirinya dalam cermin cembung. Dia melangkah mundur menjauhi cermin sejauh $16\\text{ cm}$, dia kembali melihat bayangan dirinya di cermin. Perbandingan tinggi bayangan sebelum dan sesudah siswa tersebut bergeser adalah ....`,
    options: [
      { id: 'a', text: '1 : 2' },
      { id: 'b', text: '2 : 3' },
      { id: 'c', text: '3 : 4' },
      { id: 'd', text: '4 : 5' },
      { id: 'e', text: '5 : 4', correct: true }
    ],
    explanation: `### Pembahasan Soal No. 5
Cermin cembung selalu memiliki titik fokus bernilai negatif ($f = -16\\text{ cm}$).
Perbesaran bayangan pada cermin dirumuskan dengan:
$$M = \\left| \\frac{f}{s - f} \\right|$$

* **Posisi Awal ($s_1 = 48\\text{ cm}$)**:
  $$M_1 = \\left| \\frac{-16}{48 - (-16)} \\right| = \\frac{16}{64} = \\frac{1}{4}$$
  Tinggi bayangan $h_1' = M_1 \\times h = \\frac{1}{4} \\times 160 = 40\\text{ cm}$.

* **Posisi Setelah Mundur $16\\text{ cm}$ ($s_2 = 48 + 16 = 64\\text{ cm}$)**:
  $$M_2 = \\left| \\frac{-16}{64 - (-16)} \\right| = \\frac{16}{80} = \\frac{1}{5}$$
  Tinggi bayangan $h_2' = M_2 \\times h = \\frac{1}{5} \\times 160 = 32\\text{ cm}$.

* **Perbandingan Tinggi Bayangan ($h_1' : h_2'$)**:
  $$\\frac{h_1'}{h_2'} = \\frac{M_1}{M_2} = \\frac{1/4}{1/5} = \\frac{5}{4} = 5 : 4$$

Kunci Jawaban: **E (5 : 4)**`
  },
  {
    id: 6,
    topic: 'Elektrostatika & Hukum Coulomb',
    imageUrl: '/images/fisika/IMG_2368.jpeg',
    imageRef: 'IMG_2368',
    type: 'multiple',
    text: `Hasil percobaan kemudian ditampilkan dalam grafik hubungan antara gaya listrik ($F$) terhadap jarak antar kedua benda ($R$) berikut ini:

*(Grafik menunjukkan pada $R = 3\\text{ cm}$, nilai gaya $F = 20\\text{ N}$)*

Diketahui bahwa muatan pada benda pertama selalu dua kali lebih besar daripada muatan pada benda kedua ($q_1 = 2q_2$) dan percobaan dilakukan di udara (anggaplah sama dengan ruang hampa), dengan konstanta Coulomb $k = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2\\cdot\\text{C}^{-2}$. Berapakah besar masing-masing muatan listrik tersebut?`,
    options: [
      { id: 'a', text: '$q_1 = 0,1 \\times 10^{-6}\\text{ C};\\; q_2 = 0,2 \\times 10^{-6}\\text{ C}$' },
      { id: 'b', text: '$q_1 = 0,2 \\times 10^{-6}\\text{ C};\\; q_2 = 0,1 \\times 10^{-6}\\text{ C}$' },
      { id: 'c', text: '$q_1 = 1,0 \\times 10^{-6}\\text{ C};\\; q_2 = 0,5 \\times 10^{-6}\\text{ C}$' },
      { id: 'd', text: '$q_1 = 2,0 \\times 10^{-6}\\text{ C};\\; q_2 = 1,0 \\times 10^{-6}\\text{ C}$', correct: true },
      { id: 'e', text: '$q_1 = 3,0 \\times 10^{-6}\\text{ C};\\; q_2 = 1,5 \\times 10^{-6}\\text{ C}$' }
    ],
    explanation: `### Pembahasan Soal No. 6
Berdasarkan grafik:
Pada jarak $R = 3\\text{ cm} = 3 \\times 10^{-2}\\text{ m}$, gaya Coulomb yang terukur adalah $F = 20\\text{ N}$.
Diketahui $q_1 = 2q_2$.

Rumus Hukum Coulomb:
$$F = k \\frac{q_1 q_2}{R^2} = k \\frac{(2q_2)(q_2)}{R^2} = \\frac{2k q_2^2}{R^2}$$

Substitusi nilai:
$$20 = \\frac{2 \\times (9 \\times 10^9) \\times q_2^2}{(3 \\times 10^{-2})^2}$$
$$20 = \\frac{18 \\times 10^9 \\times q_2^2}{9 \\times 10^{-4}} = 2 \\times 10^{13} \\times q_2^2$$
$$q_2^2 = \\frac{20}{2 \\times 10^{13}} = 10^{-12}$$
$$q_2 = \\sqrt{10^{-12}} = 10^{-6}\\text{ C} = 1,0 \\times 10^{-6}\\text{ C}$$

Maka muatan $q_1$:
$$q_1 = 2q_2 = 2 \\times (1,0 \\times 10^{-6}\\text{ C}) = 2,0 \\times 10^{-6}\\text{ C}$$

Kunci Jawaban: **D ($q_1 = 2,0 \\times 10^{-6}\\text{ C};\\; q_2 = 1,0 \\times 10^{-6}\\text{ C}$)**`
  },
  {
    id: 7,
    topic: 'Listrik Dinamis & Rangkaian Tertutup',
    imageUrl: '/images/fisika/IMG_2369.jpeg',
    imageRef: 'IMG_2369',
    type: 'matrix-radio',
    text: `Suatu rangkaian listrik lampu warna-warni menggunakan lampu dengan resistansi tertulis pada bagian lampu.
*(Rangkaian terdiri dari sumber tegangan $\\varepsilon_1 = 4\\text{ V}$, $\\varepsilon_2 = 2\\text{ V}$, dan hambatan lampu: merah $15\\,\\Omega$, tengah/biru $10\\,\\Omega$, hijau $5\\,\\Omega$).*

Jika lampu hijau ($5\\,\\Omega$) diganti dengan lampu berwarna kuning dengan resistansi $10\\,\\Omega$. Apakah yang terjadi dengan rangkaian lampu sekarang?

Pilihlah **"Lebih besar"**, **"Lebih kecil"**, atau **"Tetap"** untuk setiap besaran fisis pada rangkaian.`,
    statements: [
      { id: 'stmt1', text: 'Resistansi pengganti rangkaian.', correct: 'Lebih besar' },
      { id: 'stmt2', text: 'Kuat arus yang mengalir pada rangkaian.', correct: 'Lebih kecil' },
      { id: 'stmt3', text: 'Daya yang bekerja pada lampu merah ($15\\,\\Omega$).', correct: 'Lebih kecil' }
    ],
    explanation: `### Pembahasan Soal No. 7
Lampu terhubung secara seri dengan sumber tegangan.
* Semula: $R_{\\text{total lama}} = 15\\,\\Omega + 10\\,\\Omega + 5\\,\\Omega = 30\\,\\Omega$.
* Setelah lampu hijau ($5\\,\\Omega$) diganti lampu kuning ($10\\,\\Omega$):
  $$R_{\\text{total baru}} = 15\\,\\Omega + 10\\,\\Omega + 10\\,\\Omega = 35\\,\\Omega$$

* **Evaluasi Besaran Fisis**:
  1. *Resistansi pengganti rangkaian*: Meningkat dari $30\\,\\Omega$ menjadi $35\\,\\Omega$ $\\implies$ **Lebih besar**.
  2. *Kuat arus yang mengalir*: Berdasarkan Hukum Ohm $I = \\frac{\\Sigma \\varepsilon}{R_{\\text{total}}}$, karena nilai hambatan total bertambah sementara sumber tegangan tetap, arus listrik akan mengecil $\\implies$ **Lebih kecil**.
  3. *Daya yang bekerja pada lampu merah ($15\\,\\Omega$)*: Mengikuti persamaan daya $P = I^2 R$. Karena nilai arus $I$ berkurang, maka daya yang diserap lampu merah ikut turun $\\implies$ **Lebih kecil**.`
  },
  {
    id: 8,
    topic: 'Fluida Statis & Bejana Berhubungan',
    imageUrl: '/images/fisika/IMG_2370.jpeg',
    imageRef: 'IMG_2370',
    type: 'multiple',
    text: `Pipa U mula-mula diisi dengan air yang massa jenisnya $1000\\text{ kg}\\cdot\\text{m}^{-3}$ kemudian pada salah satu ujung pipa dituangkan zat cair X. Zat cair X tidak bercampur dengan air dan interaksi seluruh zat cair dengan dinding pipa U diabaikan.

Jika pipa U dalam keadaan seimbang dengan tinggi zat cair X adalah $12\\text{ cm}$ dan selisih tinggi air adalah $8\\text{ cm}$, berapa massa jenis zat X?`,
    options: [
      { id: 'a', text: '$666,7\\text{ kg}\\cdot\\text{m}^{-3}$', correct: true },
      { id: 'b', text: '$750,0\\text{ kg}\\cdot\\text{m}^{-3}$' },
      { id: 'c', text: '$800,0\\text{ kg}\\cdot\\text{m}^{-3}$' },
      { id: 'd', text: '$850,0\\text{ kg}\\cdot\\text{m}^{-3}$' },
      { id: 'e', text: '$900,0\\text{ kg}\\cdot\\text{m}^{-3}$' }
    ],
    explanation: `### Pembahasan Soal No. 8
Berdasarkan Hukum Pokok Hidrostatis pada bejana berhubungan, tekanan pada bidang batas zat cair yang sama bernilai sama:
$$P_A = P_B$$
$$\\rho_X \\cdot g \\cdot h_X = \\rho_{\\text{air}} \\cdot g \\cdot h_{\\text{air}}$$
$$\\rho_X \\cdot h_X = \\rho_{\\text{air}} \\cdot h_{\\text{air}}$$

Substitusi nilai:
$$\\rho_X \\times 12\\text{ cm} = 1000\\text{ kg/m}^3 \\times 8\\text{ cm}$$
$$\\rho_X = \\frac{8000}{12} \\approx 666,67\\text{ kg}\\cdot\\text{m}^{-3} = 666,7\\text{ kg}\\cdot\\text{m}^{-3}$$

Kunci Jawaban: **A ($666,7\\text{ kg}\\cdot\\text{m}^{-3}$)**`
  },
  {
    id: 9,
    topic: 'Fluida Dinamis & Asas Bernoulli',
    imageUrl: '/images/fisika/IMG_2371.jpeg',
    imageRef: 'IMG_2371',
    type: 'multiple',
    text: `Kecepatan aliran udara pada bagian atas sayap pesawat $40\\text{ m}\\cdot\\text{s}^{-1}$ dan bagian bawah sayap $30\\text{ m}\\cdot\\text{s}^{-1}$. Massa jenis udara pada saat itu sebesar $1,29\\text{ kg}\\cdot\\text{m}^{-3}$ (dengan luas sayap total $10\\text{ m}^2$). Maka besarnya gaya angkat pesawat terbang adalah ....`,
    options: [
      { id: 'a', text: '$4.515\\text{ N}$', correct: true },
      { id: 'b', text: '$3.000\\text{ N}$' },
      { id: 'c', text: '$1.515\\text{ N}$' },
      { id: 'd', text: '$515\\text{ N}$' },
      { id: 'e', text: '$0\\text{ N}$' }
    ],
    explanation: `### Pembahasan Soal No. 9
Besarnya gaya angkat pada sayap pesawat terbang dihitung menggunakan prinsip Asas Bernoulli:
$$F_{\\text{angkat}} = \\frac{1}{2} \\rho_{\\text{udara}} (v_1^2 - v_2^2) A$$

Diketahui:
* $v_1 = 40\\text{ m/s}$ (kecepatan udara di atas sayap)
* $v_2 = 30\\text{ m/s}$ (kecepatan udara di bawah sayap)
* $\\rho = 1,29\\text{ kg/m}^3$
* $A = 10\\text{ m}^2$

Perhitungan:
$$F_{\\text{angkat}} = \\frac{1}{2} \\times 1,29 \\times (40^2 - 30^2) \\times 10$$
$$F_{\\text{angkat}} = \\frac{1}{2} \\times 1,29 \\times (1600 - 900) \\times 10$$
$$F_{\\text{angkat}} = 0,645 \\times 700 \\times 10 = 4.515\\text{ N}$$

Kunci Jawaban: **A ($4.515\\text{ N}$)**`
  },
  {
    id: 10,
    topic: 'Fluida Statis & Hukum Archimedes',
    imageUrl: '/images/fisika/IMG_2372.jpeg',
    imageRef: 'IMG_2372',
    type: 'multiple',
    text: `Balok P yang memiliki volume $200\\text{ cm}^3$ terapung di atas suatu zat cair ($\\rho_{\\text{cair}} = 1,3\\text{ g}\\cdot\\text{cm}^{-3}$) dengan $1/2$ bagian balok muncul di atas permukaan zat cair seperti gambar! Balok P kemudian diikat dengan balok Q menggunakan tali yang massanya diabaikan dan dimasukkan ke dalam zat cair yang sama.

Massa jenis balok Q $= 3,9\\text{ g}\\cdot\\text{cm}^{-3}$, massa balok Q yang dibutuhkan agar balok gabungan melayang di dalam zat cair tersebut adalah ....`,
    options: [
      { id: 'a', text: '$50\\text{ g}$' },
      { id: 'b', text: '$130\\text{ g}$' },
      { id: 'c', text: '$195\\text{ g}$', correct: true },
      { id: 'd', text: '$395\\text{ g}$' },
      { id: 'e', text: '$520\\text{ g}$' }
    ],
    explanation: `### Pembahasan Soal No. 10
* **Saat Balok P Terapung Mula-mula**:
  $1/2$ bagian muncul di atas permukaan, artinya volume balok P yang tercelup adalah $V_{\\text{celup}} = \\frac{1}{2} \\times 200 = 100\\text{ cm}^3$.
  Massa balok P:
  $$m_P = \\rho_{\\text{cair}} \\times V_{\\text{celup}} = 1,3\\text{ g/cm}^3 \\times 100\\text{ cm}^3 = 130\\text{ g}$$

* **Saat Balok P dan Q Diikat dan Melayang di Dalam Zat Cair**:
  Kondisi melayang terjadi saat gaya apung total sama dengan gaya berat total sistem ($\\Sigma F_b = W_{\\text{total}}$):
  $$\\rho_{\\text{cair}} (V_P + V_Q) g = (m_P + m_Q) g$$
  $$\\rho_{\\text{cair}} \\left(V_P + \\frac{m_Q}{\\rho_Q}\\right) = m_P + m_Q$$

  Substitusi angka:
  $$1,3 \\times \\left(200 + \\frac{m_Q}{3,9}\\right) = 130 + m_Q$$
  $$260 + \\frac{1,3}{3,9} m_Q = 130 + m_Q$$
  $$260 + \\frac{1}{3} m_Q = 130 + m_Q$$
  $$260 - 130 = m_Q - \\frac{1}{3} m_Q$$
  $$130 = \\frac{2}{3} m_Q \\implies m_Q = \\frac{130 \\times 3}{2} = 195\\text{ g}$$

Kunci Jawaban: **C ($195\\text{ g}$)**`
  },
  {
    id: 11,
    topic: 'Kinematika GLBB & Analisis Grafik',
    type: 'checkboxes',
    text: `Pada suatu percobaan, kecepatan sebuah benda diamati selama 4 sekon dan tabel berikut menunjukkan data kecepatan benda tersebut:

| Waktu $t$ (s) | 0 | 1 | 2 | 3 | 4 |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Kecepatan $v$ ($\\text{m}\\cdot\\text{s}^{-1}$) | 0 | 2 | 4 | 6 | 8 |

Jika gerak benda tersebut disajikan ke dalam grafik berbagai besaran terhadap waktu, mana sajakah grafik yang tepat?
Pilihlah jawaban yang benar! Jawaban benar lebih dari satu.`,
    options: [
      { id: 'opt1', text: 'Grafik Kecepatan ($v$) vs Waktu ($t$): garis lurus linear naik dari $(0,0)$ menuju $(4, 8)$', correct: true },
      { id: 'opt2', text: 'Grafik Percepatan ($a$) vs Waktu ($t$): garis lurus horizontal konstan pada nilai $2\\text{ m/s}^2$', correct: true },
      { id: 'opt3', text: 'Grafik Jarak ($s$) vs Waktu ($t$): garis lurus linear', correct: false },
      { id: 'opt4', text: 'Grafik Kecepatan ($v$) vs Waktu ($t$): garis lurus menurun dari 8 ke 0', correct: false }
    ],
    explanation: `### Pembahasan Soal No. 11
Dari data tabel, percepatan gerak benda:
$$a = \\frac{\\Delta v}{\\Delta t} = \\frac{2 - 0}{1 - 0} = \\frac{4 - 2}{2 - 1} = 2\\text{ m/s}^2 \\; (\\text{konstan})$$

* **Analisis Grafik**:
  1. *Grafik $v - t$*: Merupakan garis lurus miring naik dari titik asal $(0,0)$ ke titik $(4,8)$ sesuai persamaan GLBB $v = at = 2t$ **(Tepat)**.
  2. *Grafik $a - t$*: Merupakan garis lurus mendatar (horizontal) sejajar sumbu waktu pada nilai tetap $a = 2\\text{ m/s}^2$ **(Tepat)**.
  3. *Grafik $s - t$*: Mengikuti persamaan $s = \\frac{1}{2}at^2 = t^2$ yang membentuk kurva parabola melengkung ke atas, bukan garis lurus linear.`
  },
  {
    id: 12,
    topic: 'Keseimbangan Benda Tegar & Titik Pusat Massa',
    imageUrl: '/images/fisika/IMG_2373.jpeg',
    imageRef: 'IMG_2373',
    type: 'multiple',
    text: `Seorang pemain sirkus berjalan di atas seutas tali sambil memegang tongkat panjang yang ujung-ujungnya terkulai ke bawah. Gambar berikut ini memperlihatkan situasi tersebut.

Tongkat panjang yang terkulai ke bawah membantu pemain sirkus menjaga keseimbangan karena tongkat ....`,
    options: [
      { id: 'a', text: 'memperbesar gaya berat sehingga pergerakan ke samping menjadi lebih lambat' },
      { id: 'b', text: 'menyebabkan pusat massa sistem berada di bawah titik tumpu yang membuat sistem seimbang', correct: true },
      { id: 'c', text: 'memperbesar gaya gesek antara kaki dan tali sehingga orang dapat bertahan lebih lama di tali' },
      { id: 'd', text: 'menarik tubuh ke bawah sehingga tubuh pemain sirkus tidak mudah terangkat' },
      { id: 'e', text: 'menambah gaya dorong ke depan agar pemain sirkus dapat lebih mudah dan cepat berjalan' }
    ],
    explanation: `### Pembahasan Soal No. 12
Tongkat lentur panjang yang ujung-ujungnya melengkung/terkulai ke bawah memindahkan distribusi massa keseluruhan sistem ke arah bawah. 

Hal ini menyebabkan **titik pusat massa (*center of mass*) sistem berada di bawah tali pijakan (titik tumpu)**. Posisi pusat massa di bawah titik tumpu menghasilkan jenis **keseimbangan stabil** (*stable equilibrium*): jika terjadi sedikit kemiringan, torsi pemulih akan otomatis mengembalikan posisi orang ke titik kesetimbangan tegak.

Kunci Jawaban: **B (menyebabkan pusat massa sistem berada di bawah titik tumpu yang membuat sistem seimbang)**`
  },
  {
    id: 13,
    topic: 'Fluida Dinamis & Alat Semprot',
    imageUrl: '/images/fisika/IMG_2374.jpeg',
    imageRef: 'IMG_2374',
    type: 'checkboxes',
    text: `Perhatikan gambar botol semprot parfum berikut!

Mana sajakah penjelasan yang benar mengenai cara kerja alat tersebut?
Pilihlah jawaban yang benar! Jawaban benar lebih dari satu.`,
    options: [
      { id: 'opt1', text: 'Udara yang mengalir cepat di atas permukaan pipa vertikal menyebabkan tekanan di tempat itu bertambah besar.', correct: false },
      { id: 'opt2', text: 'Tekanan di permukaan cairan parfum menjadi lebih tinggi daripada tekanan di atas pipa vertikal.', correct: true },
      { id: 'opt3', text: 'Cairan parfum terdorong naik ke atas karena faktor tekanan udara luar.', correct: true },
      { id: 'opt4', text: 'Volume cairan yang berada di dalam botol parfum mempengaruhi aliran semprotan.', correct: false },
      { id: 'opt5', text: 'Alat ini memanfaatkan hukum Pascal dalam proses penyemprotannya.', correct: false }
    ],
    explanation: `### Pembahasan Soal No. 13
Prinsip kerja penyemprot parfum didasarkan pada **Asas Bernoulli**:
* Saat bola karet ditekan, udara mengalir sangat cepat ($v$ besar) melalui pipa mendatar di atas ujung pipa vertikal.
* Sesuai Asas Bernoulli, kecepatan udara yang tinggi menyebabkan **tekanan udara di mulut atas pipa vertikal turun drastis** (menjadi sangat rendah).
* Tekanan atmosfer/udara luar pada permukaan cairan di dalam botol menjadi **relatif lebih tinggi** dibanding tekanan di mulut pipa atas.
* Perbedaan tekanan ini mendorong cairan parfum naik ke atas melalui tabung pipa, lalu terhembus menjadi butiran-butiran kabut halus (aerosol).`
  },
  {
    id: 14,
    topic: 'Optik Geometri & Pembiasan Cahaya',
    imageUrl: '/images/fisika/IMG_2375.jpeg',
    imageRef: 'IMG_2375',
    type: 'true-false-table',
    text: `Seorang pemanah sedang mengikuti lomba menombak ikan di kolam dangkal. Ilustrasi yang dialaminya seperti tampak pada gambar berikut:
*(Sumber gambar: Hewitt, Paul G, 2015)*

Sinar cahaya dari ikan menuju mata pemanah membentuk sudut $60^\\circ$ terhadap garis normal (garis tegak lurus permukaan air). Berdasarkan pengalamannya, pemanah tersebut tidak membidik langsung ke arah ikan yang terlihat, melainkan membidik ke posisi yang lebih rendah supaya anak panahnya tepat mengenai ikan. (Indeks bias air $= 4/3$, indeks bias udara $= 1$).

Berdasarkan pemahamanmu tentang pembiasan cahaya, evaluasilah pernyataan yang dilakukan oleh pemanah berikut ini! Tentukan apakah pernyataan-pernyataan berikut Benar atau Salah!`,
    statements: [
      { id: 'stmt1', text: 'Strategi pemanah membidik lebih rendah dari posisi ikan yang terlihat merupakan strategi yang tepat berdasarkan prinsip pembiasan cahaya.', correct: true },
      { id: 'stmt2', text: 'Penambahan kecepatan saat melempar tombak dapat meminimalisir kesalahan bidikan yang terjadi akibat pembiasan cahaya.', correct: false },
      { id: 'stmt3', text: 'Semakin besar sudut pengamatan pemanah terhadap garis normal, semakin besar pula perbedaan antara posisi ikan yang terlihat dengan posisi ikan yang sebenarnya.', correct: true }
    ],
    explanation: `### Pembahasan Soal No. 14
* **Analisis Pembiasan (Hukum Snellius)**:
  Sinar datang dari ikan (medium lebih rapat, $n_{\\text{air}} = 4/3$) menuju mata pemanah di udara (medium kurang rapat, $n_{\\text{udara}} = 1$) mengalami pembiasan **menjauhi garis normal**.
  Akibatnya, perpanjangan garis sinar bias membentuk bayangan semu ikan di posisi yang **lebih dangkal dan lebih tinggi** dari posisi aslinya.

* **Evaluasi Pernyataan**:
  1. *Strategi membidik lebih rendah*: **Benar** (karena ikan asli berada lebih dalam daripada bayangan semu yang tertangkap mata).
  2. *Penambahan kecepatan lemparan*: **Salah** (kecepatan gerak tombak tidak memengaruhi sudut refraksi optik pembiasan cahaya).
  3. *Semakin besar sudut pengamatan, deviasi posisi semakin besar*: **Benar** (semakin miring sudut pandang terhadap garis normal, selisih sudut bias dan sudut datang semakin besar sehingga perbedaan posisi semu dan asli semakin melebar).`
  },
  {
    id: 15,
    topic: 'Termodinamika & Mesin Carnot',
    type: 'checkboxes',
    text: `Pada eksperimen termodinamika sebuah mesin Carnot beroperasi antara reservoir suhu tinggi $800\\text{ K}$ dan reservoir suhu rendah $480\\text{ K}$. Seorang peneliti ingin mengganti mesin tersebut dengan mesin Carnot yang memiliki efisiensi lebih tinggi agar proses eksperimen menjadi lebih efektif.

Mesin Carnot mana saja yang dapat digunakan sebagai pengganti mesin Carnot semula?
Pilihlah pada setiap mesin Carnot yang memenuhi! Jawaban benar lebih dari satu.`,
    options: [
      { id: 'opt1', text: 'Suhu tinggi $600\\text{ K}$ dan suhu rendah $480\\text{ K}$', correct: false },
      { id: 'opt2', text: 'Suhu tinggi $800\\text{ K}$ dan suhu rendah $400\\text{ K}$', correct: true },
      { id: 'opt3', text: 'Suhu tinggi $900\\text{ K}$ dan suhu rendah $500\\text{ K}$', correct: true },
      { id: 'opt4', text: 'Suhu tinggi $900\\text{ K}$ dan suhu rendah $600\\text{ K}$', correct: false },
      { id: 'opt5', text: 'Suhu tinggi $1.000\\text{ K}$ dan suhu rendah $600\\text{ K}$', correct: false }
    ],
    explanation: `### Pembahasan Soal No. 15
Efisiensi mesin Carnot awal:
$$\\eta_1 = \\left(1 - \\frac{T_L}{T_H}\\right) \\times 100\\% = \\left(1 - \\frac{480}{800}\\right) \\times 100\\% = (1 - 0,60) \\times 100\\% = 40\\%$$

Mesin pengganti harus memiliki efisiensi $\\eta > 40\\%$ atau rasio $\\frac{T_L}{T_H} < 0,60$:
* **Opsi 1**: $T_H = 600\\text{ K}, T_L = 480\\text{ K} \\implies \\eta = 1 - \\frac{480}{600} = 20\\%$ (Tidak memenuhi).
* **Opsi 2**: $T_H = 800\\text{ K}, T_L = 400\\text{ K} \\implies \\eta = 1 - \\frac{400}{800} = 50\\% > 40\\%$ **(Memenuhi)**.
* **Opsi 3**: $T_H = 900\\text{ K}, T_L = 500\\text{ K} \\implies \\eta = 1 - \\frac{500}{900} \\approx 44,4\\% > 40\\%$ **(Memenuhi)**.
* **Opsi 4**: $T_H = 900\\text{ K}, T_L = 600\\text{ K} \\implies \\eta = 1 - \\frac{600}{900} \\approx 33,3\\%$ (Tidak memenuhi).
* **Opsi 5**: $T_H = 1.000\\text{ K}, T_L = 600\\text{ K} \\implies \\eta = 1 - \\frac{600}{1000} = 40\\%$ (Sama dengan awal, tidak lebih tinggi).`
  },
  {
    id: 16,
    topic: 'Listrik Statis & Medan Listrik Pelat',
    type: 'true-false-table',
    text: `Sebuah perusahaan elektronik sedang mengembangkan mesin fotokopi generasi baru yang menggunakan teknologi transfer toner elektrostatis yang lebih efisien. Dalam sistem ini, partikel toner bermuatan negatif $q = 1 \\times 10^{-7}\\text{ C}$ dipindahkan dari drum ke kertas melalui medan listrik yang dihasilkan oleh dua pelat sejajar.

**Spesifikasi teknis mesin fotokopi tersebut menunjukkan bahwa**:
* Jarak antara pelat transfer dan drum adalah $2\\text{ mm}$
* Beda potensial yang tersedia adalah $200\\text{ V}$
* Agar proses transfer toner berjalan optimal, gaya listrik minimum yang diperlukan untuk memindahkan partikel toner adalah $0,01\\text{ N}$

Tim sedang menguji prototipe mesin fotokopi ini di laboratorium pengujian. Mereka menemukan bahwa pada beberapa kondisi, hasil cetakan menunjukkan kualitas yang buruk dengan banyak area yang tidak tercetak dengan baik.

Untuk setiap pernyataan analisis berikut, tentukan apakah pernyataan berikut Benar atau Salah!`,
    statements: [
      { id: 'stmt1', text: 'Jika jarak antar pelat dikurangi menjadi $1,5\\text{ mm}$ dengan beda potensial tetap, gaya listrik pada partikel toner akan meningkat sehingga memenuhi syarat fungsional.', correct: true },
      { id: 'stmt2', text: 'Untuk mempertahankan jarak antar pelat tetap $2\\text{ mm}$, beda potensial minimal yang diperlukan agar mesin berfungsi optimal adalah $100\\text{ V}$.', correct: false },
      { id: 'stmt3', text: 'Jika muatan partikel toner ditingkatkan menjadi $2 \\times 10^{-7}\\text{ C}$, mesin fotokopi akan berfungsi dengan baik tanpa perlu mengubah parameter lainnya.', correct: true }
    ],
    explanation: `### Pembahasan Soal No. 16
Gaya listrik pada pelat sejajar:
$$F = q \\cdot E = q \\cdot \\frac{V}{d}$$

Kondisi awal prototipe:
$$F_{\\text{awal}} = (1 \\times 10^{-7}\\text{ C}) \\times \\frac{200\\text{ V}}{2 \\times 10^{-3}\\text{ m}} = 10^{-7} \\times 10^5 = 0,01\\text{ N}$$
Nilai $0,01\\text{ N}$ ini adalah batas ambang minimum (*kritis*), sehingga fluktuasi kecil dapat menyebabkan hasil cetak buruk.

* **Evaluasi Pernyataan**:
  1. *Jika $d = 1,5\\text{ mm}$ ($1,5 \\times 10^{-3}\\text{ m}$)*:
     $$F = 10^{-7} \\times \\frac{200}{1,5 \\times 10^{-3}} \\approx 0,0133\\text{ N} > 0,01\\text{ N} \\implies \\text{\\textbf{Benar}}.$$
  2. *Beda potensial minimal untuk $d = 2\\text{ mm}$*:
     $$V_{\\min} = \\frac{F_{\\min} \\cdot d}{q} = \\frac{0,01 \\times 2 \\times 10^{-3}}{10^{-7}} = 200\\text{ V}$$
     Sehingga nilai $100\\text{ V}$ tidak mencukupi (akan menghasilkan $F = 0,005\\text{ N}$) $\\implies$ **Salah**.
  3. *Jika muatan $q = 2 \\times 10^{-7}\\text{ C}$*:
     $$F = (2 \\times 10^{-7}) \\times \\frac{200}{2 \\times 10^{-3}} = 0,02\\text{ N} > 0,01\\text{ N} \\implies \\text{\\textbf{Benar}}.$$`
  },
  {
    id: 17,
    topic: 'Pengukuran & Ketidakpastian Jangka Sorong',
    imageUrl: '/images/fisika/IMG_2376.jpeg',
    imageRef: 'IMG_2376',
    type: 'checkboxes',
    text: `Siswa SMA mengukur diameter sebuah bola bekel secara berulang sehingga diperoleh data sebagai berikut. Semua pengukuran dilakukan dengan jangka sorong. Berikut hasil pengukuran yang telah dilakukan:
* Pengukuran 1: Hasil pembacaan tertulis $= 1,06\\text{ cm}$
* Pengukuran 2: Hasil pembacaan tertulis $= 1,88\\text{ cm}$
* Pengukuran 3: Hasil pembacaan tertulis $= 1,44\\text{ cm}$
* Pengukuran 4: Hasil pembacaan tertulis $= 1,16\\text{ cm}$

Pernyataan berikut yang sesuai dengan pengukuran diameter bola bekel tersebut adalah .... *(Pilihlah opsi yang benar)*`,
    options: [
      { id: 'opt1', text: 'Data yang dihasilkan dapat dipercaya karena pengukuran dilakukan lebih dari satu kali.', correct: false },
      { id: 'opt2', text: 'Terdapat hasil pembacaan yang tidak sesuai dengan tampilan jangka sorong sehingga data tidak dapat dipercaya.', correct: true },
      { id: 'opt3', text: 'Hasil pengukuran berbeda-beda seperti yang ditunjukkan pada gambar merupakan kewajaran karena bola bekel elastis.', correct: false },
      { id: 'opt4', text: 'Pengukuran dilakukan oleh orang yang berbeda sehingga dapat dipastikan hasil pengukurannya juga berbeda.', correct: false },
      { id: 'opt5', text: 'Kesimpulan akhir diameter bola bekel dapat dihitung dengan merata-rata seluruh hasil pengukuran.', correct: false }
    ],
    explanation: `### Pembahasan Soal No. 17
Pada gambar skala jangka sorong pengukuran ke-2 hingga ke-4, garis skala utama dan nonius menunjukkan nilai pembacaan yang jauh berbeda dan tidak sinkron dengan nilai numerik yang dicatat dalam tabel (misal: skala menunjukkan sekitar $1,4\\text{ cm}$, namun tabel mencatat angka yang melompat tidak wajar seperti $1,88\\text{ cm}$).

Kesalahan pembacaan instrumen (*human error / instrument reading mismatch*) ini membuat data pengukuran menjadi cacat dan **tidak dapat dipercaya**.`
  },
  {
    id: 18,
    topic: 'Impuls & Gaya Impulsif',
    imageUrl: '/images/fisika/IMG_2377.jpeg',
    imageRef: 'IMG_2377',
    type: 'checkboxes',
    text: `Seorang penjaga gawang menangkap bola yang bergerak sangat cepat dengan cara menarik tangannya sedikit ke belakang saat menangkap bola.

Apa tujuan penjaga gawang tersebut menarik tangannya ke belakang?
Pilihlah jawaban yang benar! Jawaban benar lebih dari satu.`,
    options: [
      { id: 'opt1', text: 'Memperlambat / Memperlama waktu kontak dengan bola.', correct: true },
      { id: 'opt2', text: 'Memperkecil gaya yang dirasakan tangan.', correct: true },
      { id: 'opt3', text: 'Memperkecil impuls yang diterima bola.', correct: false },
      { id: 'opt4', text: 'Memperbesar kecepatan bola.', correct: false },
      { id: 'opt5', text: 'Memperkecil tekanan yang diberikan tangan.', correct: false }
    ],
    explanation: `### Pembahasan Soal No. 18
Berdasarkan hubungan Teorema Impuls-Momentum:
$$I = \\Delta p$$
$$F \\cdot \\Delta t = m(v_2 - v_1) \\implies F = \\frac{\\Delta p}{\\Delta t}$$

Saat menangkap bola cepat hingga berhenti ($v_2 = 0$), perubahan momentum bola $\\Delta p$ bernilai tetap. 

Dengan menarik tangan ke belakang saat menangkap:
1. **Memperlama waktu kontak / interaksi ($\Delta t$ bertambah besar)**.
2. Sesuai rumus $F = \\frac{\\Delta p}{\\Delta t}$, pertambahan waktu kontak akan **memperkecil gaya impulsif ($F$)** yang dihantamkan bola ke telapak tangan kiper, sehingga tangan tidak merasa sakit atau terhindar dari cedera.`
  },
  {
    id: 19,
    topic: 'Suhu, Kalor & Pemuaian Termal',
    imageUrl: '/images/fisika/IMG_2378.jpeg',
    imageRef: 'IMG_2378',
    type: 'multiple',
    text: `Sebuah bola logam hanya dapat melewati cincin logam jika keduanya berada pada suhu ruang. Gambarnya seperti tampak berikut.

Suatu saat Dita memanaskan bola, bola tidak lagi dapat melewati cincin.

Dita kemudian melakukan percobaan baru: ia memanaskan cincin tanpa memanaskan bola. Ia ingin mengetahui apa yang akan terjadi terhadap ukuran lubang cincin.

Apa yang akan terjadi terhadap ukuran lubang cincin ketika suhu cincin dinaikkan?`,
    options: [
      { id: 'a', text: 'ukuran lubang berkurang karena cincin mengembang ke arah luar dan menutup lubang.' },
      { id: 'b', text: 'ukuran lubang berkurang karena pemuaian membuat cincin menjadi tebal dan padat.' },
      { id: 'c', text: 'ukuran lubang tetap sama karena hanya bagian luar cincin yang mengembang.' },
      { id: 'd', text: 'ukuran lubang bertambah dan memungkinkan bola kembali bisa melewati cincin.', correct: true },
      { id: 'e', text: 'ukuran lubang bertambah tetapi cincin akan kehilangan bentuk bulatnya.' }
    ],
    explanation: `### Pembahasan Soal No. 19
Pemuaian termal pada benda berlubang (seperti cincin atau pelat berlubang) berlangsung secara proporsional seperti perbesaran skala fotografi (*photographic enlargement*).

Saat cincin logam dipanaskan:
* Jarak antar-atom di seluruh bagian logam bertambah besar ke segala arah (menjauhi titik pusat cincin).
* Keliling lingkar dalam bertambah panjang, sehingga **diameter/ukuran lubang cincin justru ikut bertambah besar (memuai ke luar)**.
* Akibat membesarnya diameter lubang, bola logam dapat kembali melewati cincin dengan leluasa.

Kunci Jawaban: **D (ukuran lubang bertambah dan memungkinkan bola kembali bisa melewati cincin.)**`
  },
  {
    id: 20,
    topic: 'Energi, Daya Listrik & Rangkaian',
    type: 'checkboxes',
    text: `Data penggunaan listrik:
* **Rumah A**: Lampu LED, Daya $10\\text{ watt}$, Jumlah 10, Rangkaian Paralel, Durasi 5 jam/hari.
* **Rumah B**: Lampu Pijar, Daya $40\\text{ watt}$, Jumlah 6, Rangkaian Seri, Durasi 8 jam/hari.
* **Tegangan listrik**: $220\\text{ V}$.

Setelah penelitian selesai, tim memperoleh data bahwa energi listrik yang terukur pada rumah B jauh lebih rendah dari yang diperkirakan, sementara pencahayaan yang dihasilkan juga tidak optimal.

Rekomendasi strategi yang tepat untuk optimalisasi penerangan di rumah B adalah .... *(Jawaban benar lebih dari satu)*`,
    options: [
      { id: 'opt1', text: 'rumah B sebaiknya mengganti lampu pijar dengan LED tanpa mengubah rangkaian seri.', correct: false },
      { id: 'opt2', text: 'mengubah rangkaian lampu di rumah B dari seri menjadi paralel akan meningkatkan intensitas cahaya.', correct: true },
      { id: 'opt3', text: 'masalah rumah B dapat diatasi dengan menambahkan resistor untuk menstabilkan tegangan.', correct: false },
      { id: 'opt4', text: 'rumah B sebaiknya mengganti lampu dengan daya yang lebih tinggi tanpa mengubah rangkaian seri.', correct: false },
      { id: 'opt5', text: 'rumah B perlu mengganti rangkaian menjadi paralel agar setiap lampu menerima tegangan penuh dan bekerja secara optimal.', correct: true }
    ],
    explanation: `### Pembahasan Soal No. 20
* **Analisis Masalah Rumah B**:
  Pada rangkaian seri 6 buah lampu pijar, tegangan total $220\\text{ V}$ terbagi rata ke masing-masing lampu:
  $$V_{\\text{lampu}} = \\frac{220\\text{ V}}{6} \\approx 36,67\\text{ V}$$

  Karena daya nyata lampu berbanding lurus dengan kuadrat tegangan ($P = \\frac{V^2}{R}$):
  $$P_{\\text{nyata}} = \\left( \\frac{36,67}{220} \\right)^2 \\times 40\\text{ W} = \\left(\\frac{1}{6}\\right)^2 \\times 40\\text{ W} = \\frac{40}{36} \\approx 1,11\\text{ W}$$
  Daya lampu anjlok dari $40\\text{ W}$ menjadi hanya $1,11\\text{ W}$, yang menyebabkan lampu menyala sangat redup dan konsumsi energi yang terukur jauh lebih kecil dari perkiraan.

* **Solusi / Rekomendasi yang Tepat**:
  1. Mengubah rangkaian lampu menjadi **paralel** agar masing-masing lampu mendapatkan tegangan penuh $220\\text{ V}$.
  2. Penerimaan tegangan penuh $220\\text{ V}$ akan membuat setiap lampu beroperasi pada daya nominalnya ($40\\text{ W}$) sehingga intensitas cahaya meningkat drastis dan penerangan menjadi optimal.`
  }
];
