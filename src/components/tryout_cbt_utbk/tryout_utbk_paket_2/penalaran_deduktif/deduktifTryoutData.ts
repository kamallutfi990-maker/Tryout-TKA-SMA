import { UtbkQuestion } from '../types';

export const deduktifTryoutData: UtbkQuestion[] = [
  {
    id: 1,
    text: 'Semua mahasiswa program studi Teknik Komputer wajib menguasai bahasa pemrograman C++ dan Algoritma.\nSebagian mahasiswa program studi Teknik Komputer adalah penerima beasiswa prestasi unggulan.\n\nKesimpulan deduktif yang **pasti benar** adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Semua penerima beasiswa prestasi unggulan wajib menguasai C++ dan Algoritma.' },
      { id: 'B', text: 'Sebagian penerima beasiswa prestasi unggulan wajib menguasai bahasa pemrograman C++ dan Algoritma.', correct: true },
      { id: 'C', text: 'Mahasiswa yang menguasai C++ dan Algoritma pasti menerima beasiswa prestasi unggulan.' },
      { id: 'D', text: 'Tidak ada mahasiswa Teknik Komputer yang gagal dalam mata kuliah C++ dan Algoritma.' },
      { id: 'E', text: 'Semua mahasiswa yang tidak menerima beasiswa bukan mahasiswa Teknik Komputer.' }
    ],
    correctAnswer: 'B',
    explanation: 'Premis 1: Semua A adalah B. Premis 2: Sebagian A adalah C. Kesimpulan silogisme kategori: Sebagian C adalah B (Sebagian penerima beasiswa prestasi unggulan wajib menguasai C++ dan Algoritma).',
    topic: 'Silogisme Kategori',
    difficulty: 'Mudah'
  },
  {
    id: 2,
    text: 'Jika sebuah mobil listrik menggunakan sel baterai padat (solid-state), maka jarak tempuh kendaraan bertambah 50% atau waktu pengisian daya berkurang menjadi 15 menit.\nSaat ini, mobil listrik tipe X tidak mengalami penambahan jarak tempuh 50% dan waktu pengisian dayanya tetap memerlukan waktu 60 menit.\n\nKesimpulan deduktif yang **pasti benar** adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Mobil listrik tipe X tidak menggunakan sel baterai padat (solid-state).', correct: true },
      { id: 'B', text: 'Mobil listrik tipe X memiliki kapasitas motor listrik yang rusak.' },
      { id: 'C', text: 'Mobil listrik tipe X menggunakan teknologi baterai masa depan.' },
      { id: 'D', text: 'Waktu pengisian mobil listrik tipe X akan turun menjadi 15 menit bulan depan.' },
      { id: 'E', text: 'Semua mobil listrik tidak memakai baterai solid-state.' }
    ],
    correctAnswer: 'A',
    explanation: 'Premis: P -> (Q v R). Fakta: ~Q dan ~R yang berarti ~(Q v R). Melalui aturan Modus Tollens: Dari P -> (Q v R) dan ~(Q v R), ditarik kesimpulan pasti: ~P (Mobil listrik tipe X tidak menggunakan sel baterai padat).',
    topic: 'Modus Tollens Disjungtif',
    difficulty: 'Sedang'
  },
  {
    id: 3,
    text: 'Jika cuaca berkabut tebal di bandara, maka seluruh penerbangan komersial dialihkan atau jadwal keberangkatan ditunda minimal 2 jam.\nPagi ini di Bandara Soekarno-Hatta, seluruh penerbangan komersial tidak dialihkan dan tidak ada jadwal yang ditunda.\n\nSimpulan logis yang benar adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Pagi ini di Bandara Soekarno-Hatta tidak terjadi cuaca berkabut tebal.', correct: true },
      { id: 'B', text: 'Bandara Soekarno-Hatta ditutup sementara untuk perbaikan landasan pacu.' },
      { id: 'C', text: 'Semua pilot telah memiliki sertifikasi pendaratan instrumen kabut.' },
      { id: 'D', text: 'Penerbangan komersial selalu tepat waktu di segala kondisi iklim.' },
      { id: 'E', text: 'Hujan lebat diprediksi menggantikan kabut tebal pada siang hari.' }
    ],
    correctAnswer: 'A',
    explanation: 'Bentuk implikasi P -> (Q v R). Diketahui ~Q dan ~R, sehingga ~(Q v R). Berdasarkan Modus Tollens, kesimpulannya adalah ~P (tidak terjadi cuaca berkabut tebal di bandara).',
    topic: 'Implikasi & Modus Tollens',
    difficulty: 'Mudah'
  },
  {
    id: 4,
    text: 'Tidak ada atlet renang nasional yang memiliki riwayat penyakit asma bronkial kronis.\nBeberapa penyelam laut dalam adalah atlet renang nasional.\n\nKesimpulan deduktif yang tepat adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Semua penyelam laut dalam tidak memiliki riwayat asma bronkial kronis.' },
      { id: 'B', text: 'Beberapa penyelam laut dalam tidak memiliki riwayat penyakit asma bronkial kronis.', correct: true },
      { id: 'C', text: 'Semua penderita asma bronkial kronis bukan penyelam laut dalam.' },
      { id: 'D', text: 'Penyelam laut dalam yang menderita asma adalah atlet renang nasional.' },
      { id: 'E', text: 'Atlet renang nasional yang tidak menyelam memiliki riwayat asma.' }
    ],
    correctAnswer: 'B',
    explanation: 'Premis 1: Tidak ada A yang B (Semua A adalah bukan B). Premis 2: Sebagian C adalah A. Kesimpulan silogisme negatif parsial: Sebagian C adalah bukan B (Beberapa penyelam laut dalam tidak memiliki riwayat asma bronkial kronis).',
    topic: 'Silogisme Kuantor Universal-Eksistensial',
    difficulty: 'Sedang'
  },
  {
    id: 5,
    text: 'Jika laba bersih perusahaan startup Q meningkat di atas 30%, maka karyawan memperoleh bonus tahunan dan program pelatihan kepemimpinan ke luar negeri.\nKaryawan perusahaan startup Q tidak memperoleh program pelatihan kepemimpinan ke luar negeri.\n\nSimpulan deduktif yang pasti benar adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Laba bersih perusahaan startup Q tidak meningkat di atas 30%.', correct: true },
      { id: 'B', text: 'Karyawan perusahaan startup Q tetap mendapatkan bonus tahunan penuh.' },
      { id: 'C', text: 'Perusahaan startup Q mengalami kerugian operasional total.' },
      { id: 'D', text: 'Bonus tahunan hanya dibagikan kepada jajaran manajemen eksekutif.' },
      { id: 'E', text: 'Pelatihan kepemimpinan diganti dengan kompensasi saham perusahaan.' }
    ],
    correctAnswer: 'A',
    explanation: 'Premis: P -> (Q ^ R). Karena ~R, maka ~(Q ^ R) bernilai benar. Melalui aturan Modus Tollens, jika konsekuens konjungsi salah, maka anteseden pasti salah (~P: Laba bersih perusahaan tidak meningkat di atas 30%).',
    topic: 'Modus Tollens Konjungtif',
    difficulty: 'Sedang'
  },
  {
    id: 6,
    text: 'Semua peserta seleksi beasiswa LPDP yang lolos tahap wawancara memiliki sertifikat bahasa asing resmi dan proposal riset yang teruji kelayakannya.\nAndi adalah peserta seleksi beasiswa LPDP yang tidak memiliki sertifikat bahasa asing resmi.\n\nKesimpulan deduktif yang pasti benar adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Andi tidak lolos tahap wawancara seleksi beasiswa LPDP.', correct: true },
      { id: 'B', text: 'Andi memiliki proposal riset yang tidak teruji kelayakannya.' },
      { id: 'C', text: 'Andi mengundurkan diri sebelum seleksi administrasi dimulai.' },
      { id: 'D', text: 'Andi dipastikan lolos seleksi beasiswa jalur afirmasi lain.' },
      { id: 'E', text: 'Proposal riset Andi lolos tanpa uji kelayakan.' }
    ],
    correctAnswer: 'A',
    explanation: 'Premis: Lolos -> (Sertifikat ^ Proposal). Fakta: Andi tidak memiliki sertifikat (~Sertifikat), sehingga kondisi konsekuens tidak terpenuhi. Maka Andi pasti tidak lolos wawancara (Modus Tollens).',
    topic: 'Penalaran Kondisional',
    difficulty: 'Mudah'
  },
  {
    id: 7,
    text: 'Jika sebuah negara menganut sistem pasar terbuka murni, maka tarif impor dihapuskan dan subsidi produk lokal dihentikan.\nNegara K saat ini tetap memberikan subsidi pupuk dan benih untuk produk beras lokalnya.\n\nSimpulan deduktif yang valid adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Negara K tidak menganut sistem pasar terbuka murni.', correct: true },
      { id: 'B', text: 'Negara K melarang seluruh impor produk pangan dari luar negeri.' },
      { id: 'C', text: 'Tarif impor di Negara K telah dinaikkan sebesar 100%.' },
      { id: 'D', text: 'Negara K menerapkan sistem ekonomi komando secara total.' },
      { id: 'E', text: 'Produk lokal di Negara K tidak mampu bersaing di pasar ekspor.' }
    ],
    correctAnswer: 'A',
    explanation: 'P -> (Q ^ R). Negara K memberikan subsidi (~R), sehingga ~(Q ^ R). Dengan Modus Tollens, disimpulkan ~P (Negara K tidak menganut sistem pasar terbuka murni).',
    topic: 'Analisis Negasi Logis',
    difficulty: 'Sedang'
  },
  {
    id: 8,
    text: 'Setiap anggota klub astronomi amatir memiliki teleskop optik pribadi atau menguasai perangkat lunak simulasi orbit planet.\nBima adalah anggota klub astronomi amatir yang tidak menguasai perangkat lunak simulasi orbit planet.\n\nKesimpulan deduktif yang pasti benar adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Bima memiliki teleskop optik pribadi.', correct: true },
      { id: 'B', text: 'Bima tidak memiliki teleskop optik pribadi.' },
      { id: 'C', text: 'Bima dikeluarkan dari keanggotaan klub astronomi amatir.' },
      { id: 'D', text: 'Bima menggunakan teleskop milik observatorium nasional.' },
      { id: 'E', text: 'Bima adalah ketua klub astronomi amatir.' }
    ],
    correctAnswer: 'A',
    explanation: 'Bentuk Silogisme Disjungtif: Anggota -> (T v S). Karena Bima adalah anggota dan ~S (tidak menguasai software), maka syarat disjungsi harus dipenuhi oleh T (Bima memiliki teleskop optik pribadi).',
    topic: 'Silogisme Disjungtif',
    difficulty: 'Mudah'
  },
  {
    id: 9,
    text: 'Jika reaktor fusi nuklir beroperasi stabil, maka plasma panas terjaga pada suhu 100 juta °C dan medan magnet penahan tidak mengalami kebocoran fluks.\nPada pengujian hari ini, medan magnet penahan reaktor fusi mengalami kebocoran fluks.\n\nSimpulan yang dapat ditarik adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Reaktor fusi nuklir tidak beroperasi stabil pada pengujian hari ini.', correct: true },
      { id: 'B', text: 'Suhu plasma panas reaktor dipastikan turun hingga 0 °C.' },
      { id: 'C', text: 'Reaktor fusi nuklir meledak dan menghancurkan laboratorium.' },
      { id: 'D', text: 'Pengujian reaktor fusi nuklir dinyatakan berhasil sempurna.' },
      { id: 'E', text: 'Medan magnet penahan tidak diperlukan lagi dalam fusi nuklir.' }
    ],
    correctAnswer: 'A',
    explanation: 'Stabil -> (Suhu 100jt °C ^ Bebas Bocor Fluks). Fakta: Terjadi kebocoran fluks (~Bebas Bocor Fluks). Maka berdasarkan Modus Tollens, reaktor fusi tidak beroperasi stabil.',
    topic: 'Kondisional Kompleks',
    difficulty: 'Sedang'
  },
  {
    id: 10,
    text: 'Semua senyawa hidrokarbon aromatik mengandung cincin benzena dalam struktur molekulnya.\nSenyawa X tidak mengandung cincin benzena dalam struktur molekulnya.\n\nKesimpulan yang paling tepat adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Senyawa X bukan merupakan senyawa hidrokarbon aromatik.', correct: true },
      { id: 'B', text: 'Senyawa X adalah senyawa hidrokarbon alifatik tak jenuh.' },
      { id: 'C', text: 'Senyawa X memiliki titik didih yang sangat tinggi.' },
      { id: 'D', text: 'Semua senyawa tanpa cincin benzena bersifat racun.' },
      { id: 'E', text: 'Senyawa X dapat bereaksi dengan asam sulfat pekat.' }
    ],
    correctAnswer: 'A',
    explanation: 'Premis: Semua Aromatik -> Cincin Benzena. Senyawa X bukan Cincin Benzena. Berdasarkan Modus Tollens kategori: Senyawa X bukan senyawa hidrokarbon aromatik.',
    topic: 'Silogisme Kategori & Klasifikasi',
    difficulty: 'Mudah'
  }
];
