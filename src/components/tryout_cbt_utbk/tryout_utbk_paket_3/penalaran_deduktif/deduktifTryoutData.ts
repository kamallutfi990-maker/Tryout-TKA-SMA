import { UtbkQuestion } from '../types';

export const deduktifTryoutData: UtbkQuestion[] = [
  {
    id: 1,
    text: 'Semua mahasiswa penerima beasiswa unggulan memiliki IPK di atas 3,75.\nSebagian mahasiswa yang berorganisasi di BEM adalah penerima beasiswa unggulan.\n\nSimpulan deduktif silogisme yang **paling benar dan sah** adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Semua mahasiswa yang berorganisasi di BEM memiliki IPK di atas 3,75.' },
      { id: 'B', text: 'Sebagian mahasiswa yang berorganisasi di BEM memiliki IPK di atas 3,75.', correct: true },
      { id: 'C', text: 'Mahasiswa yang tidak berorganisasi di BEM pasti memiliki IPK di bawah 3,75.' },
      { id: 'D', text: 'Tidak ada mahasiswa penerima beasiswa yang aktif berorganisasi di BEM.' },
      { id: 'E', text: 'Semua penerima beasiswa unggulan aktif berorganisasi di BEM.' }
    ],
    correctAnswer: 'B',
    explanation: 'Premis 1: Semua P (Beasiswa) adalah Q (IPK > 3,75). Premis 2: Sebagian R (Mahasiswa BEM) adalah P. Menurut kaidah silogisme partikular (Barbara/Darii), kesimpulan yang valid adalah: Sebagian R adalah Q ("Sebagian mahasiswa yang berorganisasi di BEM memiliki IPK di atas 3,75").',
    topic: 'Silogisme Kategorial',
    difficulty: 'Mudah'
  },
  {
    id: 2,
    text: 'Jika pasokan gas alam cair stabil, maka pembangkit listrik tenaga gas beroperasi maksimal.\nJika pembangkit listrik beroperasi maksimal, maka pemadaman listrik bergilir tidak terjadi.\nSaat ini, terjadi pemadaman listrik bergilir di kota tersebut.\n\nSimpulan logis yang pasti benar (Modus Tollens) adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Pasokan gas alam cair tidak stabil.', correct: true },
      { id: 'B', text: 'Pembangkit listrik tenaga gas beroperasi melebihi kapasitas normal.' },
      { id: 'C', text: 'Pasokan gas alam cair tetap stabil namun ada kendala transmisi.' },
      { id: 'D', text: 'Masyarakat menghemat konsumsi energi listrik secara berlebihan.' },
      { id: 'E', text: 'Pembangkit listrik tidak menggunakan bahan bakar gas.' }
    ],
    correctAnswer: 'A',
    explanation: 'Premis: p -> q dan q -> r, maka p -> r (Jika pasokan stabil -> tidak terjadi pemadaman). Diketahui ~r (terjadi pemadaman). Melalui Modus Tollens: ~r menyimpulkan ~p ("Pasokan gas alam cair tidak stabil").',
    topic: 'Modus Tollens & Silogisme Hipotetis',
    difficulty: 'Sedang'
  },
  {
    id: 3,
    text: 'Tidak ada atlet renang profesional yang merokok.\nSemua penyelam pemandu wisata laut adalah atlet renang profesional.\n\nSimpulan yang sah adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Sebagian penyelam pemandu wisata laut merokok.' },
      { id: 'B', text: 'Tidak ada penyelam pemandu wisata laut yang merokok.', correct: true },
      { id: 'C', text: 'Semua orang yang tidak merokok adalah penyelam pemandu wisata laut.' },
      { id: 'D', text: 'Atlet renang yang bukan penyelam pasti merokok.' },
      { id: 'E', text: 'Penyelam pemandu wisata laut terkadang merokok saat tidak bertugas.' }
    ],
    correctAnswer: 'B',
    explanation: 'Premis 1: Tidak ada A yang B (A himpunan terpisah dengan B). Premis 2: Semua C adalah A (C berada di dalam himpunan A). Kesimpulan mutlak: Tidak ada C yang B ("Tidak ada penyelam pemandu wisata laut yang merokok").',
    topic: 'Silogisme Negasi Universal',
    difficulty: 'Mudah'
  },
  {
    id: 4,
    text: 'Enam orang atlet (P, Q, R, S, T, U) duduk berderet di bangku cadangan dari nomor kursi 1 (paling kiri) sampai 6 (paling kanan) dengan aturan:\n1. P duduk di kursi nomor 1.\n2. R duduk tepat di antara Q dan T.\n3. U tidak boleh duduk berdampingan dengan P.\n4. S duduk di kursi nomor 6.\n\nJika T duduk di kursi nomor 4, maka posisi atlet Q dan R berturut-turut berada di nomor kursi...',
    type: 'multiple',
    options: [
      { id: 'A', text: '2 dan 3' },
      { id: 'B', text: '3 dan 2' },
      { id: 'C', text: '5 dan 3' },
      { id: 'D', text: '3 dan 4' },
      { id: 'E', text: '2 dan 4' }
    ],
    correctAnswer: 'A',
    explanation: 'Kursi: 1=P, 6=S. Tersisa kursi 2, 3, 4, 5 untuk Q, R, T, U. Diketahui T=4 dan R di antara Q dan T (maka Q-R-T atau T-R-Q). Karena T di 4, maka R harus di 3 dan Q di 2 (atau R di 5, tapi kursi 6 ditempati S sehingga di sebelah kanan T hanya ada kursi 5, tidak cukup untuk R dan Q). Jadi R=3, Q=2, dan U di kursi 5 (memenuhi syarat U tidak di samping P). Maka Q dan R berturut-turut di nomor 2 dan 3.',
    topic: 'Penalaran Analitis Posisi Urutan',
    difficulty: 'Sedang'
  },
  {
    id: 5,
    text: 'Jika seorang dokter bedah hendak melakukan operasi darurat, ia harus mencuci tangan dengan antiseptik dan mengenakan pakaian steril.\nDokter Anton mencuci tangan dengan antiseptik, namun lupa mengenakan sarung tangan dan pakaian steril.\n\nSimpulan yang benar adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Dokter Anton diperbolehkan melakukan operasi darurat.' },
      { id: 'B', text: 'Dokter Anton tidak boleh melakukan operasi darurat.', correct: true },
      { id: 'C', text: 'Dokter Anton dapat digantikan oleh perawat jaga.' },
      { id: 'D', text: 'Operasi darurat tetap berjalan tanpa protokol steril.' },
      { id: 'E', text: 'Dokter Anton hanya boleh mengoperasi pasien ringan.' }
    ],
    correctAnswer: 'B',
    explanation: 'Syarat operasi adalah konjungsi (P DAN Q). Jika salah satu syarat tidak terpenuhi (~Q), maka premis implikasi menyatakan bahwa prosedur tidak dapat dijalankan ("Dokter Anton tidak boleh melakukan operasi darurat").',
    topic: 'Kondisi Syarat Logika',
    difficulty: 'Mudah'
  },
  {
    id: 6,
    text: 'Semua bahan tambang bernilai ekonomis tinggi dilindungi undang-undang konservasi.\nNikel adalah salah satu bahan tambang bernilai ekonomis tinggi.\n\nSimpulan deduktif yang valid adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Nikel dilindungi undang-undang konservasi.', correct: true },
      { id: 'B', text: 'Semua bahan tambang yang dilindungi adalah nikel.' },
      { id: 'C', text: 'Nikel tidak bernilai ekonomis tinggi jika diekspor.' },
      { id: 'D', text: 'Bahan tambang selain nikel tidak memiliki undang-undang perlindungan.' },
      { id: 'E', text: 'Nikel dapat ditambang secara bebas tanpa izin konservasi.' }
    ],
    correctAnswer: 'A',
    explanation: 'Semua A adalah B. C adalah A. Kesimpulan: C adalah B (Nikel dilindungi undang-undang konservasi).',
    topic: 'Silogisme Kategorial Langsung',
    difficulty: 'Mudah'
  },
  {
    id: 7,
    text: 'Jika harga tiket pesawat turun, maka jumlah wisatawan domestik melonjak.\nJika jumlah wisatawan domestik melonjak, maka tingkat hunian kamar hotel di destinasi wisata melampaui 85%.\nFakta: Tingkat hunian kamar hotel di destinasi wisata saat libur panjang ini hanya mencapai 50%.\n\nSimpulan logis yang pasti benar adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Harga tiket pesawat tidak mengalami penurunan.', correct: true },
      { id: 'B', text: 'Jumlah wisatawan domestik tetap melonjak pesat.' },
      { id: 'C', text: 'Tingkat hunian hotel tidak dipengaruhi oleh harga tiket.' },
      { id: 'D', text: 'Semua hotel di tempat wisata ditutup sementara.' },
      { id: 'E', text: 'Pemerintah menetapkan batas atas tarif hotel.' }
    ],
    correctAnswer: 'A',
    explanation: 'Implikasi berantai p -> q -> r. Fakta ~r (hunian 50% < 85%). Melalui kontraposisi/modus tollens, disimpulkan ~p ("Harga tiket pesawat tidak mengalami penurunan").',
    topic: 'Silogisme Implikasi & Kontraposisi',
    difficulty: 'Sedang'
  },
  {
    id: 8,
    text: 'Lima siswa (Andi, Budi, Citra, Dodi, Eka) mengikuti seleksi olimpiade sains:\n- Nilai Andi lebih tinggi dari nilai Budi.\n- Nilai Citra lebih tinggi dari nilai Andi.\n- Nilai Dodi lebih rendah dari nilai Budi, namun lebih tinggi dari nilai Eka.\n\nUrutan siswa dari yang memiliki nilai **tertinggi ke terendah** adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Citra > Andi > Budi > Dodi > Eka', correct: true },
      { id: 'B', text: 'Andi > Citra > Budi > Dodi > Eka' },
      { id: 'C', text: 'Citra > Budi > Andi > Dodi > Eka' },
      { id: 'D', text: 'Citra > Andi > Dodi > Budi > Eka' },
      { id: 'E', text: 'Eka > Dodi > Budi > Andi > Citra' }
    ],
    correctAnswer: 'A',
    explanation: 'Dari informasi: Citra > Andi, Andi > Budi, Budi > Dodi, Dodi > Eka. Maka jika digabungkan urutan nilai tertinggi ke terendah adalah Citra > Andi > Budi > Dodi > Eka.',
    topic: 'Penalaran Analitis Perbandingan',
    difficulty: 'Mudah'
  },
  {
    id: 9,
    text: 'Setiap anggota tim penelitian laboratorium AI wajib menguasai bahasa pemrograman Python atau R.\nFajar adalah anggota tim penelitian laboratorium AI yang tidak menguasai bahasa pemrograman R.\n\nSimpulan yang pasti benar adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Fajar menguasai bahasa pemrograman Python.', correct: true },
      { id: 'B', text: 'Fajar tidak menguasai kedua bahasa pemrograman tersebut.' },
      { id: 'C', text: 'Fajar dikeluarkan dari tim penelitian laboratorium AI.' },
      { id: 'D', text: 'Semua anggota tim hanya menguasai Python.' },
      { id: 'E', text: 'Fajar hanya bertugas membuat laporan administrasi.' }
    ],
    correctAnswer: 'A',
    explanation: 'Premis disjungtif: P atau Q. Jika bukan Q (~Q), maka pasti P (Silogisme Disjungtif / Modus Tollendo Ponens). Jadi Fajar pasti menguasai bahasa pemrograman Python.',
    topic: 'Silogisme Disjungtif',
    difficulty: 'Mudah'
  },
  {
    id: 10,
    text: 'Semua buku referensi ilmiah di perpustakaan utama memiliki kode ISBN resmi.\nBeberapa dokumen laporan arsip sejarah di perpustakaan utama tidak memiliki kode ISBN resmi.\n\nSimpulan yang tepat adalah...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Beberapa dokumen laporan arsip sejarah bukan merupakan buku referensi ilmiah.', correct: true },
      { id: 'B', text: 'Semua dokumen laporan arsip sejarah adalah buku referensi ilmiah.' },
      { id: 'C', text: 'Buku referensi ilmiah tidak disimpan di perpustakaan utama.' },
      { id: 'D', text: 'Semua dokumen yang tidak memiliki ISBN dibuang dari perpustakaan.' },
      { id: 'E', text: 'Arsip sejarah memiliki nilai ilmiah yang lebih rendah dari buku referensi.' }
    ],
    correctAnswer: 'A',
    explanation: 'Karena semua buku referensi ilmiah pasti memiliki ISBN, maka dokumen/arsip yang TIDAK memiliki ISBN pasti bukan buku referensi ilmiah. Jadi: Beberapa dokumen laporan arsip sejarah bukan merupakan buku referensi ilmiah.',
    topic: 'Penalaran Negasi Kategorial',
    difficulty: 'Sedang'
  }
];
