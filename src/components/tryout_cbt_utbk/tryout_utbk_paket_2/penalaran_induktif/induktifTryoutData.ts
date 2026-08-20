import { UtbkQuestion } from '../types';

export const induktifTryoutData: UtbkQuestion[] = [
  {
    id: 1,
    text: 'Berdasarkan catatan rekapitulasi 6 bulan terakhir, setiap kali terjadi lonjakan kunjungan wisatawan di atas 50.000 orang di Kawasan Wisata Bahari X, volume sampah plastik di pesisir pantai meningkat rata-rata 35%. Pada libur panjang akhir tahun ini, Dinas Pariwisata memperkirakan kunjungan wisatawan mencapai 65.000 orang.\n\nSimpulan induktif yang **paling mungkin benar** adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Kawasan Wisata Bahari X pasti akan mengalami pencemaran plastik total dan ditutup untuk umum.' },
      { id: 'B', text: 'Volume sampah plastik di pesisir Kawasan Wisata Bahari X berpeluang besar melonjak di atas 35%.', correct: true },
      { id: 'C', text: 'Peningkatan wisatawan tidak berkaitan dengan volume sampah plastik jika fasilitas tempat sampah ditambah.' },
      { id: 'D', text: 'Semua wisatawan yang datang selalu membuang sampah sembarangan di pesisir pantai.' },
      { id: 'E', text: 'Pemerintah daerah akan melarang penggunaan kantong plastik secara serentak selama liburan.' }
    ],
    correctAnswer: 'B',
    explanation: 'Penalaran induktif bertumpu pada probabilitas logis dari keteraturan data masa lalu. Karena tren masa lalu menunjukkan korelasi kuat saat wisatawan > 50.000 orang memicu kenaikan sampah 35%, maka estimasi 65.000 orang paling mungkin memicu kenaikan di atas 35%.',
    topic: 'Kesesuaian Data & Generalisasi',
    difficulty: 'Mudah'
  },
  {
    id: 2,
    text: 'Perhatikan analogi hubungan berikut:\n**Termometer : Suhu = Barometer : ...**',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Kelembapan Udara' },
      { id: 'B', text: 'Kecepatan Angin' },
      { id: 'C', text: 'Tekanan Udara', correct: true },
      { id: 'D', text: 'Curah Hujan' },
      { id: 'E', text: 'Ketinggian Tempat' }
    ],
    correctAnswer: 'C',
    explanation: 'Termometer adalah instrumen pengukur suhu (temperatur), sedangkan barometer adalah instrumen ilmiah yang digunakan khusus untuk mengukur tekanan atmosfer atau tekanan udara.',
    topic: 'Analogi Induktif',
    difficulty: 'Mudah'
  },
  {
    id: 3,
    text: 'Di laboratorium riset bioteknologi, ragi galur A pada media fermentasi glukosa 10% memproduksi bioetanol dengan efisiensi 82%. Ragi galur B pada media glukosa 10% menghasilkan efisiensi 84%. Ragi galur C pada media yang sama menghasilkan efisiensi 83,5%.\n\nGeneralisasi kesimpulan induktif yang paling valid adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Ragi dari berbagai galur umumnya mampu mengonversi media glukosa 10% menjadi bioetanol dengan efisiensi di atas 80%.', correct: true },
      { id: 'B', text: 'Glukosa 10% adalah satu-satunya konsentrasi terbaik untuk semua jenis mikroorganisme.' },
      { id: 'C', text: 'Semua galur ragi memiliki laju metabolisme yang identik pada seluruh jenis substrat gula.' },
      { id: 'D', text: 'Ragi galur B selalu menghasilkan bioetanol tertinggi dalam segala kondisi fermentasi.' },
      { id: 'E', text: 'Efisiensi bioetanol tidak dipengaruhi oleh konsentrasi glukosa dalam media kultur.' }
    ],
    correctAnswer: 'A',
    explanation: 'Generalisasi induktif menyimpulkan kecenderungan umum berdasarkan sampel data teruji (tiga galur ragi menghasilkan efisiensi 82%, 84%, dan 83,5%, yang seluruhnya konsisten di atas 80%).',
    topic: 'Generalisasi Fenomena',
    difficulty: 'Sedang'
  },
  {
    id: 4,
    text: 'Seorang mekanik menguji rem hidrolik pada 5 sepeda motor berbeda yang menggunakan minyak rem standar DOT 4. Seluruh kendaraan menunjukkan jarak pengereman yang stabil dan aman pada kecepatan 60 km/jam saat kondisi basah maupun kering.\n\nPernyataan yang memperlemah kesimpulan induktif bahwa minyak rem DOT 4 andal untuk pengereman adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Suhu rem tidak mengalami kenaikan signifikan selama uji coba 5 kali pengereman berturut-turut.' },
      { id: 'B', text: 'Pada uji kecepatan tinggi 120 km/jam dalam waktu pemakaian lama, minyak rem DOT 4 mengalami titik didih uap (vapor lock) sehingga daya cengkeram rem hilang drastis.', correct: true },
      { id: 'C', text: 'Sepeda motor yang diuji berasal dari 3 pabrikan otomotif ternama di Asia.' },
      { id: 'D', text: 'Sebagian besar pembalap profesional merekomendasikan penggantian minyak rem setiap 10.000 km.' },
      { id: 'E', text: 'Biaya pengisian minyak rem DOT 4 relatif terjangkau bagi konsumen umum.' }
    ],
    correctAnswer: 'B',
    explanation: 'Opsi B menyajikan fakta anomali/kontradiksi kritis (terjadi vapor lock dan hilangnya daya rem pada kecepatan tinggi), yang secara langsung memperlemah generalisasi keandalan sistem pengereman tersebut.',
    topic: 'Pelemahan Argumen Induktif',
    difficulty: 'Sedang'
  },
  {
    id: 5,
    text: 'Perhatikan barisan pola alfabet dan angka berikut:\n**B, 4, D, 8, G, 14, K, 22, ...**\n\nPasangan lanjutan pola yang paling tepat adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'P, 32', correct: true },
      { id: 'B', text: 'O, 30' },
      { id: 'C', text: 'P, 34' },
      { id: 'D', text: 'Q, 32' },
      { id: 'E', text: 'N, 28' }
    ],
    correctAnswer: 'A',
    explanation: 'Pola huruf: B (2) -> (+2) D (4) -> (+3) G (7) -> (+4) K (11) -> (+5) P (16).\nPola angka: 4 -> (+4) 8 -> (+6) 14 -> (+8) 22 -> (+10) 32.\nJadi lanjutan polanya adalah P, 32.',
    topic: 'Pola Induktif Deret Campuran',
    difficulty: 'Sedang'
  },
  {
    id: 6,
    text: 'Di sebuah SMA unggulan, siswa yang terbiasa sarapan dengan asupan protein tinggi menunjukkan skor konsentrasi belajar rata-rata 15% lebih baik dibanding siswa yang melewatkan sarapan. Selain itu, catatan presensi mereka menunjukkan tingkat absensi sakit yang 40% lebih rendah.\n\nHipotesis induktif yang paling rasional untuk mendasari fenomena tersebut adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Kebutuhan nutrisi protein di pagi hari menstabilkan gula darah dan suplai neurotransmiter otak yang menunjang daya fokus serta daya tahan imun siswa.', correct: true },
      { id: 'B', text: 'Sarapan adalah satu-satunya penentu utama prestasi akademik seorang siswa di sekolah.' },
      { id: 'C', text: 'Semua siswa yang sarapan dipastikan akan meraih peringkat 1 paralel di kelasnya.' },
      { id: 'D', text: 'Siswa yang tidak sarapan selalu mengalami kegagalan dalam seluruh mata pelajaran eksakta.' },
      { id: 'E', text: 'Kandungan karbohidrat murni lebih dibutuhkan otak daripada protein di pagi hari.' }
    ],
    correctAnswer: 'A',
    explanation: 'Hipotesis induktif yang rasional memberikan mekanisme kausalitas ilmiah (kestabilan glukosa & neurotransmiter serta imun) yang menjelaskan kedua fakta pengamatan (skor konsentrasi naik 15% dan sakit turun 40%).',
    topic: 'Penyusunan Hipotesis Kausal',
    difficulty: 'Sedang'
  },
  {
    id: 7,
    text: 'Perhatikan analogi hubungan kata berikut:\n**Semikonduktor : Silikon = Polimer : ...**',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Baja' },
      { id: 'B', text: 'Tembaga' },
      { id: 'C', text: 'Polietilena (Plastik)', correct: true },
      { id: 'D', text: 'Keramik' },
      { id: 'E', text: 'Merkuri' }
    ],
    correctAnswer: 'C',
    explanation: 'Silikon adalah contoh utama dari golongan material semikonduktor. Secara analogis, polietilena adalah contoh utama dari golongan material polimer sintetis.',
    topic: 'Analogi Hubungan Kategori & Contoh',
    difficulty: 'Mudah'
  },
  {
    id: 8,
    text: 'Pada 4 rumah kaca uji, penambahan gas CO2 konsentrasi 800 ppm meningkatkan laju fotosintesis tanaman selada sebesar 28%, tomat 32%, stroberi 27%, dan paprika 30%.\n\nSimpulan umum yang paling tepat dirumuskan adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Peningkatan konsentrasi CO2 hingga 800 ppm pada lingkungan terkontrol cenderung meningkatkan laju fotosintesis berbagai tanaman hortikultura secara signifikan.', correct: true },
      { id: 'B', text: 'Semua jenis tanaman di alam bebas membutuhkan CO2 800 ppm agar dapat berbuah lebat.' },
      { id: 'C', text: 'Gas CO2 tidak memiliki dampak samping sama sekali terhadap kenaikan suhu mikro rumah kaca.' },
      { id: 'D', text: 'Tanaman tomat adalah tanaman paling unggul di seluruh ekosistem pertanian.' },
      { id: 'E', text: 'Tanpa pupuk kimia, CO2 tidak akan memberikan efek peningkatan fotosintesis.' }
    ],
    correctAnswer: 'A',
    explanation: 'Generalisasi induktif mensintesiskan kenaikan 27-32% fotosintesis pada 4 tanaman hortikultura yang diuji menjadi kesimpulan umum yang terukur dan tidak berlebihan.',
    topic: 'Generalisasi Ilmiah',
    difficulty: 'Sedang'
  },
  {
    id: 9,
    text: 'Pemberlakuan tarif transportasi massal terintegrasi Rp10.000/hari di Kota Z berhasil menaikkan jumlah pengguna busway dan MRT sebesar 45% dalam 3 bulan pertama. Sementara itu, tingkat kemacetan di koridor jalan utama berkurang 18%.\n\nPrediksi induktif yang paling logis jika skema tarif serupa diterapkan pada rute penyangga adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Seluruh kendaraan pribadi di rute penyangga akan hilang secara instan tanpa tersisa.' },
      { id: 'B', text: 'Minat masyarakat di kawasan rute penyangga untuk beralih ke transportasi umum berpotensi mengalami peningkatan serupa.', correct: true },
      { id: 'C', text: 'Pemerintah daerah dipastikan akan mengalami kebangkrutan fiskal dalam tempo 1 tahun.' },
      { id: 'D', text: 'Tarif integrasi tidak akan pernah berhasil jika diterapkan di luar pusat kota.' },
      { id: 'E', text: 'Waktu tempuh perjalanan di rute penyangga akan meningkat dua kali lipat.' }
    ],
    correctAnswer: 'B',
    explanation: 'Berdasarkan keberhasilan insentif tarif di koridor utama, proyeksi induktif ke area yang memiliki karakteristik mobilitas serupa (rute penyangga) memiliki peluang tinggi memicu peralihan moda transportasi yang positif.',
    topic: 'Proyeksi & Prediksi Induktif',
    difficulty: 'Mudah'
  },
  {
    id: 10,
    text: 'Perhatikan premis induktif berikut:\n- Kota A menerapkan sistem tilang elektronik (ETLE) dan angka pelanggaran lampu merah turun 60%.\n- Kota B menerapkan ETLE dan angka pelanggaran serupa turun 58%.\n- Kota C menerapkan ETLE dan angka pelanggaran turun 65%.\n\nKesimpulan induktif yang paling valid adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Penerapan sistem tilang elektronik (ETLE) terbukti efektif menekan angka pelanggaran lalu lintas di berbagai perkotaan.', correct: true },
      { id: 'B', text: 'Petugas kepolisian lalu lintas konvensional tidak lagi diperlukan di kota manapun.' },
      { id: 'C', text: 'Pelanggaran lampu merah hanya bisa diatasi melalui kamera pengawas nirkabel.' },
      { id: 'D', text: 'Kota C memiliki tingkat kedisiplinan pengemudi yang paling buruk di Indonesia.' },
      { id: 'E', text: 'Semua pengendara di Kota A, B, dan C kini tidak pernah melanggar rambu lalu lintas.' }
    ],
    correctAnswer: 'A',
    explanation: 'Kesimpulan induktif merangkum bukti empiris konsisten penurunan pelanggaran lalu lintas (58%-65%) di 3 kota sampel menjadi pernyataan efektivitas umum sistem ETLE.',
    topic: 'Generalisasi Bukti Empiris',
    difficulty: 'Mudah'
  }
];
