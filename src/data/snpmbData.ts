import { University, StudyProgram } from '../types';

export const SNPMB_UNIVERSITIES: University[] = [
  // PTN UTAMA & INSTITUT
  { id: 'ui', name: 'Universitas Indonesia', acronym: 'UI', logo: '🏫', region: 'Depok / Jakarta', category: 'PTN Utama' },
  { id: 'itb', name: 'Institut Teknologi Bandung', acronym: 'ITB', logo: '📐', region: 'Bandung', category: 'PTN Utama' },
  { id: 'ugm', name: 'Universitas Gadjah Mada', acronym: 'UGM', logo: '🏛️', region: 'Yogyakarta', category: 'PTN Utama' },
  { id: 'ipb', name: 'IPB University (Institut Pertanian Bogor)', acronym: 'IPB', logo: '🌱', region: 'Bogor', category: 'PTN Utama' },
  { id: 'its', name: 'Institut Teknologi Sepuluh Nopember', acronym: 'ITS', logo: '⚙️', region: 'Surabaya', category: 'PTN Utama' },
  { id: 'unpad', name: 'Universitas Padjadjaran', acronym: 'UNPAD', logo: '🎨', region: 'Sumedang / Bandung', category: 'PTN Utama' },
  { id: 'unair', name: 'Universitas Airlangga', acronym: 'UNAIR', logo: '🧬', region: 'Surabaya', category: 'PTN Utama' },
  { id: 'undip', name: 'Universitas Diponegoro', acronym: 'UNDIP', logo: '⚓', region: 'Semarang', category: 'PTN Utama' },
  { id: 'ub', name: 'Universitas Brawijaya', acronym: 'UB', logo: '🏢', region: 'Malang', category: 'PTN Utama' },
  { id: 'uns', name: 'Universitas Sebelas Maret', acronym: 'UNS', logo: '⚜️', region: 'Surakarta', category: 'PTN Utama' },
  { id: 'unhas', name: 'Universitas Hasanuddin', acronym: 'UNHAS', logo: '🌊', region: 'Makassar', category: 'PTN Utama' },
  { id: 'usu', name: 'Universitas Sumatera Utara', acronym: 'USU', logo: '🌴', region: 'Medan', category: 'PTN Utama' },
  { id: 'unand', name: 'Universitas Andalas', acronym: 'UNAND', logo: '⛰️', region: 'Padang', category: 'PTN Utama' },
  { id: 'uny', name: 'Universitas Negeri Yogyakarta', acronym: 'UNY', logo: '🎓', region: 'Yogyakarta', category: 'PTN Utama' },
  { id: 'unj', name: 'Universitas Negeri Jakarta', acronym: 'UNJ', logo: '🏛️', region: 'Jakarta', category: 'PTN Utama' },
  { id: 'unnes', name: 'Universitas Negeri Semarang', acronym: 'UNNES', logo: '🌳', region: 'Semarang', category: 'PTN Utama' },
  { id: 'unesa', name: 'Universitas Negeri Surabaya', acronym: 'UNESA', logo: '⚽', region: 'Surabaya', category: 'PTN Utama' },
  { id: 'um', name: 'Universitas Negeri Malang', acronym: 'UM', logo: '📘', region: 'Malang', category: 'PTN Utama' },
  { id: 'upi', name: 'Universitas Pendidikan Indonesia', acronym: 'UPI', logo: '✏️', region: 'Bandung', category: 'PTN Utama' },

  // PTN REGIONAL JAWA & BANTEN
  { id: 'upnvj', name: 'UPN "Veteran" Jakarta', acronym: 'UPNVJ', logo: '🎖️', region: 'Jakarta', category: 'PTN Regional' },
  { id: 'upnvjt', name: 'UPN "Veteran" Jawa Timur', acronym: 'UPNVJT', logo: '🎖️', region: 'Surabaya', category: 'PTN Regional' },
  { id: 'upnyk', name: 'UPN "Veteran" Yogyakarta', acronym: 'UPNYK', logo: '🎖️', region: 'Yogyakarta', category: 'PTN Regional' },
  { id: 'unsoed', name: 'Universitas Jenderal Soedirman', acronym: 'UNSOED', logo: '🌾', region: 'Purwokerto', category: 'PTN Regional' },
  { id: 'unej', name: 'Universitas Jember', acronym: 'UNEJ', logo: '☕', region: 'Jember', category: 'PTN Regional' },
  { id: 'untirta', name: 'Universitas Sultan Ageng Tirtayasa', acronym: 'UNTIRTA', logo: '🛡️', region: 'Banten', category: 'PTN Regional' },
  { id: 'unsika', name: 'Universitas Singaperbangsa Karawang', acronym: 'UNSIKA', logo: '🏗️', region: 'Karawang', category: 'PTN Regional' },
  { id: 'unsil', name: 'Universitas Siliwangi', acronym: 'UNSIL', logo: '🏹', region: 'Tasikmalaya', category: 'PTN Regional' },
  { id: 'utm', name: 'Universitas Trunojoyo Madura', acronym: 'UTM', logo: '🏝️', region: 'Bangkalan', category: 'PTN Regional' },

  // PTN REGIONAL SUMATERA
  { id: 'usk', name: 'Universitas Syiah Kuala', acronym: 'USK', logo: '🕌', region: 'Banda Aceh', category: 'PTN Regional' },
  { id: 'unimal', name: 'Universitas Malikussaleh', acronym: 'UNIMAL', logo: '⚓', region: 'Lhokseumawe', category: 'PTN Regional' },
  { id: 'unimed', name: 'Universitas Negeri Medan', acronym: 'UNIMED', logo: '🎓', region: 'Medan', category: 'PTN Regional' },
  { id: 'unp', name: 'Universitas Negeri Padang', acronym: 'UNP', logo: '📚', region: 'Padang', category: 'PTN Regional' },
  { id: 'unri', name: 'Universitas Riau', acronym: 'UNRI', logo: '🚣', region: 'Pekanbaru', category: 'PTN Regional' },
  { id: 'umrah', name: 'Universitas Maritim Raja Ali Haji', acronym: 'UMRAH', logo: '⛵', region: 'Tanjungpinang', category: 'PTN Regional' },
  { id: 'unja', name: 'Universitas Jambi', acronym: 'UNJA', logo: '🐯', region: 'Jambi', category: 'PTN Regional' },
  { id: 'unsri', name: 'Universitas Sriwijaya', acronym: 'UNSRI', logo: '🌉', region: 'Palembang', category: 'PTN Regional' },
  { id: 'unib', name: 'Universitas Bengkulu', acronym: 'UNIB', logo: '🌺', region: 'Bengkulu', category: 'PTN Regional' },
  { id: 'ubb', name: 'Universitas Bangka Belitung', acronym: 'UBB', logo: '🏖️', region: 'Pangkalpinang', category: 'PTN Regional' },
  { id: 'unila', name: 'Universitas Lampung', acronym: 'UNILA', logo: '🐘', region: 'Bandar Lampung', category: 'PTN Regional' },
  { id: 'itera', name: 'Institut Teknologi Sumatera', acronym: 'ITERA', logo: '🔭', region: 'Lampung', category: 'PTN Regional' },

  // PTN REGIONAL KALIMANTAN
  { id: 'untan', name: 'Universitas Tanjungpura', acronym: 'UNTAN', logo: '🦜', region: 'Pontianak', category: 'PTN Regional' },
  { id: 'upr', name: 'Universitas Palangka Raya', acronym: 'UPR', logo: '🌲', region: 'Palangka Raya', category: 'PTN Regional' },
  { id: 'ulm', name: 'Universitas Lambung Mangkurat', acronym: 'ULM', logo: '🛶', region: 'Banjarmasin', category: 'PTN Regional' },
  { id: 'unmul', name: 'Universitas Mulawarman', acronym: 'UNMUL', logo: '🐆', region: 'Samarinda', category: 'PTN Regional' },
  { id: 'ubt', name: 'Universitas Borneo Tarakan', acronym: 'UBT', logo: '🗾', region: 'Tarakan', category: 'PTN Regional' },
  { id: 'itk', name: 'Institut Teknologi Kalimantan', acronym: 'ITK', logo: '🔬', region: 'Balikpapan', category: 'PTN Regional' },

  // PTN REGIONAL SULAWESI
  { id: 'unsrat', name: 'Universitas Sam Ratulangi', acronym: 'UNSRAT', logo: '🐠', region: 'Manado', category: 'PTN Regional' },
  { id: 'unima', name: 'Universitas Negeri Manado', acronym: 'UNIMA', logo: '📖', region: 'Minahasa', category: 'PTN Regional' },
  { id: 'ung', name: 'Universitas Negeri Gorontalo', acronym: 'UNG', logo: '🏰', region: 'Gorontalo', category: 'PTN Regional' },
  { id: 'untad', name: 'Universitas Tadulako', acronym: 'UNTAD', logo: '🌋', region: 'Palu', category: 'PTN Regional' },
  { id: 'unm', name: 'Universitas Negeri Makassar', acronym: 'UNM', logo: '⛵', region: 'Makassar', category: 'PTN Regional' },
  { id: 'uho', name: 'Universitas Halu Oleo', acronym: 'UHO', logo: '🌾', region: 'Kendari', category: 'PTN Regional' },
  { id: 'unsulbar', name: 'Universitas Sulawesi Barat', acronym: 'UNSULBAR', logo: '🥥', region: 'Majene', category: 'PTN Regional' },

  // PTN BALI & NUSA TENGGARA
  { id: 'unud', name: 'Universitas Udayana', acronym: 'UNUD', logo: '🛕', region: 'Bali', category: 'PTN Regional' },
  { id: 'undiksha', name: 'Universitas Pendidikan Ganesha', acronym: 'UNDIKSHA', logo: '🎭', region: 'Singaraja', category: 'PTN Regional' },
  { id: 'unram', name: 'Universitas Mataram', acronym: 'UNRAM', logo: '🌋', region: 'Lombok', category: 'PTN Regional' },
  { id: 'undana', name: 'Universitas Nusa Cendana', acronym: 'UNDANA', logo: '🐎', region: 'Kupang', category: 'PTN Regional' },

  // PTN MALUKU & PAPUA
  { id: 'unpatti', name: 'Universitas Pattimura', acronym: 'UNPATTI', logo: '📯', region: 'Ambon', category: 'PTN Regional' },
  { id: 'unkhair', name: 'Universitas Khairun', acronym: 'UNKHAIR', logo: '🌋', region: 'Ternate', category: 'PTN Regional' },
  { id: 'uncen', name: 'Universitas Cenderawasih', acronym: 'UNCEN', logo: '🦤', region: 'Jayapura', category: 'PTN Regional' },
  { id: 'unipa', name: 'Universitas Papua', acronym: 'UNIPA', logo: '🌿', region: 'Manokwari', category: 'PTN Regional' },
  { id: 'unmus', name: 'Universitas Musamus', acronym: 'UNMUS', logo: '🦘', region: 'Merauke', category: 'PTN Regional' },

  // UIN (UNIVERSITAS ISLAM NEGERI DI SNPMB)
  { id: 'uinjkt', name: 'UIN Syarif Hidayatullah', acronym: 'UIN JAKARTA', logo: '🕌', region: 'Jakarta', category: 'UIN State Islamic' },
  { id: 'uinjogja', name: 'UIN Sunan Kalijaga', acronym: 'UIN JOGJA', logo: '🕌', region: 'Yogyakarta', category: 'UIN State Islamic' },
  { id: 'uinbdg', name: 'UIN Sunan Gunung Djati', acronym: 'UIN BANDUNG', logo: '🕌', region: 'Bandung', category: 'UIN State Islamic' },
  { id: 'uinmlg', name: 'UIN Maulana Malik Ibrahim', acronym: 'UIN MALANG', logo: '🕌', region: 'Malang', category: 'UIN State Islamic' },
  { id: 'uinsmg', name: 'UIN Walisongo', acronym: 'UIN SEMARANG', logo: '🕌', region: 'Semarang', category: 'UIN State Islamic' },
  { id: 'uinmks', name: 'UIN Alauddin', acronym: 'UIN MAKASSAR', logo: '🕌', region: 'Makassar', category: 'UIN State Islamic' },
  { id: 'uinsby', name: 'UIN Sunan Ampel', acronym: 'UIN SURABAYA', logo: '🕌', region: 'Surabaya', category: 'UIN State Islamic' },

  // INSTITUT SENI & POLITEKNIK NEGERI
  { id: 'isiygk', name: 'Institut Seni Indonesia Yogyakarta', acronym: 'ISI YOGYA', logo: '🎭', region: 'Yogyakarta', category: 'Institut Seni' },
  { id: 'isiska', name: 'Institut Seni Indonesia Surakarta', acronym: 'ISI SOLO', logo: '🎨', region: 'Surakarta', category: 'Institut Seni' },
  { id: 'pnj', name: 'Politeknik Negeri Jakarta', acronym: 'PNJ', logo: '🛠️', region: 'Depok / Jakarta', category: 'Politeknik Negeri' },
  { id: 'polban', name: 'Politeknik Negeri Bandung', acronym: 'POLBAN', logo: '🏗️', region: 'Bandung', category: 'Politeknik Negeri' },
  { id: 'polinema', name: 'Politeknik Negeri Malang', acronym: 'POLINEMA', logo: '🏭', region: 'Malang', category: 'Politeknik Negeri' },
  { id: 'polines', name: 'Politeknik Negeri Semarang', acronym: 'POLINES', logo: '⚡', region: 'Semarang', category: 'Politeknik Negeri' },
  { id: 'polsri', name: 'Politeknik Negeri Sriwijaya', acronym: 'POLSRI', logo: '⚙️', region: 'Palembang', category: 'Politeknik Negeri' },
  { id: 'polimedia', name: 'Politeknik Negeri Media Kreatif', acronym: 'POLIMEDIA', logo: '🎬', region: 'Jakarta', category: 'Politeknik Negeri' },
  { id: 'pnb', name: 'Politeknik Negeri Bali', acronym: 'PNB', logo: '🏖️', region: 'Bali', category: 'Politeknik Negeri' }
];

// 1. Core General PTN Study Programs (UI, UGM, UNAIR, UNPAD, UNDIP, UB, UNS, UNHAS, USU, UNAND, etc.)
const GENERAL_PTN_MAJORS = [
  // SAINTEK
  { name: 'Pendidikan Dokter (Kedokteran)', group: 'Saintek' as const, basePassingGrade: 720, baseCapacity: 150 },
  { name: 'Kedokteran Gigi', group: 'Saintek' as const, basePassingGrade: 690, baseCapacity: 90 },
  { name: 'Farmasi', group: 'Saintek' as const, basePassingGrade: 665, baseCapacity: 120 },
  { name: 'Teknik Informatika (Ilmu Komputer)', group: 'Saintek' as const, basePassingGrade: 685, baseCapacity: 130 },
  { name: 'Sistem Informasi', group: 'Saintek' as const, basePassingGrade: 650, baseCapacity: 100 },
  { name: 'Teknik Sipil', group: 'Saintek' as const, basePassingGrade: 640, baseCapacity: 160 },
  { name: 'Teknik Elektro', group: 'Saintek' as const, basePassingGrade: 645, baseCapacity: 140 },
  { name: 'Teknik Mesin', group: 'Saintek' as const, basePassingGrade: 635, baseCapacity: 150 },
  { name: 'Teknik Industri', group: 'Saintek' as const, basePassingGrade: 655, baseCapacity: 130 },
  { name: 'Teknik Kimia', group: 'Saintek' as const, basePassingGrade: 630, baseCapacity: 110 },
  { name: 'Arsitektur', group: 'Saintek' as const, basePassingGrade: 650, baseCapacity: 90 },
  { name: 'Perencanaan Wilayah & Kota (PWK)', group: 'Saintek' as const, basePassingGrade: 630, baseCapacity: 100 },
  { name: 'Kesehatan Masyarakat', group: 'Saintek' as const, basePassingGrade: 625, baseCapacity: 180 },
  { name: 'Ilmu Keperawatan', group: 'Saintek' as const, basePassingGrade: 615, baseCapacity: 160 },
  { name: 'Biologi / Bioteknologi', group: 'Saintek' as const, basePassingGrade: 605, baseCapacity: 100 },
  { name: 'Matematika & Aktuaria', group: 'Saintek' as const, basePassingGrade: 620, baseCapacity: 90 },
  { name: 'Agribisnis / Agroteknologi', group: 'Saintek' as const, basePassingGrade: 600, baseCapacity: 140 },

  // SOSHUM
  { name: 'Ilmu Hukum', group: 'Soshum' as const, basePassingGrade: 655, baseCapacity: 250 },
  { name: 'Manajemen', group: 'Soshum' as const, basePassingGrade: 665, baseCapacity: 200 },
  { name: 'Akuntansi', group: 'Soshum' as const, basePassingGrade: 660, baseCapacity: 180 },
  { name: 'Ilmu Komunikasi', group: 'Soshum' as const, basePassingGrade: 650, baseCapacity: 120 },
  { name: 'Hubungan Internasional (HI)', group: 'Soshum' as const, basePassingGrade: 660, baseCapacity: 90 },
  { name: 'Psikologi', group: 'Soshum' as const, basePassingGrade: 655, baseCapacity: 160 },
  { name: 'Ilmu Administrasi Publik / Bisnis', group: 'Soshum' as const, basePassingGrade: 630, baseCapacity: 150 },
  { name: 'Ekonomi Pembangunan', group: 'Soshum' as const, basePassingGrade: 620, baseCapacity: 130 },
  { name: 'Sosiologi', group: 'Soshum' as const, basePassingGrade: 605, baseCapacity: 100 },
  { name: 'Ilmu Politik & Pemerintahan', group: 'Soshum' as const, basePassingGrade: 610, baseCapacity: 110 },
  { name: 'Sastra Inggris', group: 'Soshum' as const, basePassingGrade: 615, baseCapacity: 100 },
  { name: 'Desain Komunikasi Visual (DKV)', group: 'Soshum' as const, basePassingGrade: 635, baseCapacity: 90 }
];

// 2. Institut Seni Programs (ISI YOGYA, ISI SOLO)
const ART_INSTITUTE_MAJORS = [
  { name: 'Seni Rupa Murni (Lukis & Patung)', group: 'Soshum' as const, basePassingGrade: 610, baseCapacity: 60 },
  { name: 'Desain Komunikasi Visual (DKV)', group: 'Soshum' as const, basePassingGrade: 640, baseCapacity: 80 },
  { name: 'Desain Interior', group: 'Soshum' as const, basePassingGrade: 625, baseCapacity: 70 },
  { name: 'Kriya Seni (Batik, Keramik, Kayu)', group: 'Soshum' as const, basePassingGrade: 590, baseCapacity: 50 },
  { name: 'Seni Musik (Klasik & Pop)', group: 'Soshum' as const, basePassingGrade: 615, baseCapacity: 60 },
  { name: 'Seni Tari', group: 'Soshum' as const, basePassingGrade: 585, baseCapacity: 50 },
  { name: 'Seni Karawitan (Etnomusikologi)', group: 'Soshum' as const, basePassingGrade: 580, baseCapacity: 40 },
  { name: 'Seni Teater & Seni Pertunjukan', group: 'Soshum' as const, basePassingGrade: 590, baseCapacity: 45 },
  { name: 'Seni Pedalangan (Wayang)', group: 'Soshum' as const, basePassingGrade: 570, baseCapacity: 30 },
  { name: 'Fotografi Seni', group: 'Soshum' as const, basePassingGrade: 620, baseCapacity: 60 },
  { name: 'Film dan Televisi (FTV)', group: 'Soshum' as const, basePassingGrade: 635, baseCapacity: 70 },
  { name: 'D4 Animasian & Media Rekam', group: 'Vokasi' as const, basePassingGrade: 615, baseCapacity: 60 }
];

// 3. Politeknik Negeri Programs (PNJ, POLBAN, POLINEMA, POLINES, POLSRI, POLIMEDIA, PNB)
const POLYTECHNIC_MAJORS = [
  { name: 'D4 Rekayasa Perangkat Lunak (RPL)', group: 'Vokasi' as const, basePassingGrade: 630, baseCapacity: 90 },
  { name: 'D4 Teknik Elektronika Industri', group: 'Vokasi' as const, basePassingGrade: 610, baseCapacity: 80 },
  { name: 'D4 Teknik Otomasi & Kelistrikan', group: 'Vokasi' as const, basePassingGrade: 605, baseCapacity: 75 },
  { name: 'D4 Teknik Perancangan Jalan & Jembatan (Sipil)', group: 'Vokasi' as const, basePassingGrade: 615, baseCapacity: 100 },
  { name: 'D4 Teknik Mesin Produksi & Perawatan', group: 'Vokasi' as const, basePassingGrade: 600, baseCapacity: 90 },
  { name: 'D4 Akuntansi Keuangan Manajerial', group: 'Vokasi' as const, basePassingGrade: 620, baseCapacity: 120 },
  { name: 'D4 Administrasi Bisnis Terapan', group: 'Vokasi' as const, basePassingGrade: 610, baseCapacity: 110 },
  { name: 'D4 Desain Grafis & Penerbitan', group: 'Vokasi' as const, basePassingGrade: 625, baseCapacity: 85 },
  { name: 'D4 Manajemen Logistik & Rantai Pasok', group: 'Vokasi' as const, basePassingGrade: 605, baseCapacity: 95 },
  { name: 'D4 Usaha Perjalanan Wisata & Perhotelan', group: 'Vokasi' as const, basePassingGrade: 600, baseCapacity: 100 },
  { name: 'D4 Teknik Telekomunikasi Digital', group: 'Vokasi' as const, basePassingGrade: 610, baseCapacity: 80 }
];

// 4. IPB University Programs (Focused on Agri, Bio, IT, Food & Business)
const IPB_MAJORS = [
  { name: 'Kedokteran Hewan (SKH)', group: 'Saintek' as const, basePassingGrade: 685, baseCapacity: 150 },
  { name: 'Teknologi Pangan', group: 'Saintek' as const, basePassingGrade: 680, baseCapacity: 140 },
  { name: 'Ilmu Komputer (Ilkom IPB)', group: 'Saintek' as const, basePassingGrade: 690, baseCapacity: 120 },
  { name: 'Agronomi & Hortikultura', group: 'Saintek' as const, basePassingGrade: 635, baseCapacity: 180 },
  { name: 'Silvikultur & Kehutanan', group: 'Saintek' as const, basePassingGrade: 630, baseCapacity: 160 },
  { name: 'Bisnis (Sekolah Bisnis IPB)', group: 'Soshum' as const, basePassingGrade: 675, baseCapacity: 150 },
  { name: 'Teknik Pertanian & Biosistem', group: 'Saintek' as const, basePassingGrade: 645, baseCapacity: 110 },
  { name: 'Manajemen Sumberdaya Perairan', group: 'Saintek' as const, basePassingGrade: 620, baseCapacity: 130 },
  { name: 'Ilmu Nutrisi & Teknologi Pakan', group: 'Saintek' as const, basePassingGrade: 625, baseCapacity: 140 },
  { name: 'Arsitektur Lanskap', group: 'Saintek' as const, basePassingGrade: 640, baseCapacity: 90 },
  { name: 'Aktuaria & Statistika Terapan', group: 'Saintek' as const, basePassingGrade: 670, baseCapacity: 100 },
  { name: 'Biologi / Bioteknologi Tropis', group: 'Saintek' as const, basePassingGrade: 635, baseCapacity: 100 },
  { name: 'Ekonomi Pembangunan & Syariah', group: 'Soshum' as const, basePassingGrade: 640, baseCapacity: 130 }
];

// 5. UIN State Islamic University Programs
const UIN_MAJORS = [
  { name: 'Pendidikan Dokter (Kedokteran)', group: 'Saintek' as const, basePassingGrade: 695, baseCapacity: 100 },
  { name: 'Teknik Informatika', group: 'Saintek' as const, basePassingGrade: 645, baseCapacity: 120 },
  { name: 'Sistem Informasi', group: 'Saintek' as const, basePassingGrade: 630, baseCapacity: 100 },
  { name: 'Farmasi', group: 'Saintek' as const, basePassingGrade: 640, baseCapacity: 90 },
  { name: 'Psikologi', group: 'Soshum' as const, basePassingGrade: 635, baseCapacity: 140 },
  { name: 'Ilmu Hukum / Hukum Tata Negara', group: 'Soshum' as const, basePassingGrade: 625, baseCapacity: 180 },
  { name: 'Ekonomi Syariah / Perbankan Syariah', group: 'Soshum' as const, basePassingGrade: 620, baseCapacity: 160 },
  { name: 'Akuntansi & Manajemen', group: 'Soshum' as const, basePassingGrade: 630, baseCapacity: 150 },
  { name: 'Ilmu Komunikasi / Penyiaran Islam', group: 'Soshum' as const, basePassingGrade: 615, baseCapacity: 130 },
  { name: 'Biologi & Bioteknologi Lingkungan', group: 'Saintek' as const, basePassingGrade: 600, baseCapacity: 90 },
  { name: 'Bimbingan & Konseling', group: 'Soshum' as const, basePassingGrade: 595, baseCapacity: 110 }
];

// 6. Universitas Negeri Eks-IKIP / LPTK (UNY, UNJ, UNNES, UNESA, UM, UPI)
const EKS_IKIP_MAJORS = [
  { name: 'PGSD (Pendidikan Guru Sekolah Dasar)', group: 'Soshum' as const, basePassingGrade: 635, baseCapacity: 220 },
  { name: 'Pendidikan Bahasa & Sastra Indonesia', group: 'Soshum' as const, basePassingGrade: 610, baseCapacity: 130 },
  { name: 'Pendidikan Bahasa Inggris', group: 'Soshum' as const, basePassingGrade: 620, baseCapacity: 120 },
  { name: 'Pendidikan Matematika', group: 'Saintek' as const, basePassingGrade: 625, baseCapacity: 110 },
  { name: 'Pendidikan Biologi / Fisika / Kimia', group: 'Saintek' as const, basePassingGrade: 605, baseCapacity: 140 },
  { name: 'Pendidikan Teknik Informatika', group: 'Saintek' as const, basePassingGrade: 630, baseCapacity: 90 },
  { name: 'Pendidikan Jasmani, Kesehatan & Rekreasi', group: 'Soshum' as const, basePassingGrade: 585, baseCapacity: 150 },
  { name: 'Bimbingan dan Konseling (BK)', group: 'Soshum' as const, basePassingGrade: 615, baseCapacity: 110 },
  { name: 'Psikologi', group: 'Soshum' as const, basePassingGrade: 645, baseCapacity: 140 },
  { name: 'Manajemen & Akuntansi', group: 'Soshum' as const, basePassingGrade: 640, baseCapacity: 160 },
  { name: 'Ilmu Komunikasi / DKV', group: 'Soshum' as const, basePassingGrade: 630, baseCapacity: 100 },
  { name: 'Teknik Sipil / Elektro / Mesin', group: 'Saintek' as const, basePassingGrade: 620, baseCapacity: 120 }
];

// Special custom study programs for ITB (Fakultas & Sekolah)
const ITB_CUSTOM_PROGRAMS = [
  { name: 'STEI - Komputasi (Teknik Informatika & Sistem Teknologi Informasi)', group: 'Saintek' as const, passingGrade: 725, capacity: 180 },
  { name: 'STEI - Rekayasa (Teknik Elektro, Telekomunikasi, Biomedis)', group: 'Saintek' as const, passingGrade: 695, capacity: 160 },
  { name: 'FTMD (Fakultas Teknik Mesin & Dirgantara)', group: 'Saintek' as const, passingGrade: 685, capacity: 150 },
  { name: 'FTTI (Fakultas Teknologi Industri)', group: 'Saintek' as const, passingGrade: 680, capacity: 200 },
  { name: 'SBM (Sekolah Bisnis & Manajemen)', group: 'Soshum' as const, passingGrade: 700, capacity: 150 },
  { name: 'FTSL (Fakultas Teknik Sipil & Lingkungan)', group: 'Saintek' as const, passingGrade: 670, capacity: 180 },
  { name: 'SF (Sekolah Farmasi)', group: 'Saintek' as const, passingGrade: 675, capacity: 110 },
  { name: 'SAPPK (Sekolah Arsitektur, Perencanaan & Pengembangan Kebijakan)', group: 'Saintek' as const, passingGrade: 680, capacity: 120 },
  { name: 'FMIPA (Fakultas Matematika & Ilmu Pengetahuan Alam)', group: 'Saintek' as const, passingGrade: 650, capacity: 220 },
  { name: 'FSRD (Fakultas Seni Rupa & Desain)', group: 'Soshum' as const, passingGrade: 645, capacity: 130 }
];

// Generate comprehensive study program database
export const SNPMB_STUDY_PROGRAMS: StudyProgram[] = (() => {
  const allPrograms: StudyProgram[] = [];

  SNPMB_UNIVERSITIES.forEach((univ) => {
    // 1. ITB special case
    if (univ.id === 'itb') {
      ITB_CUSTOM_PROGRAMS.forEach((prog, idx) => {
        allPrograms.push({
          id: `prodi_itb_${idx + 1}`,
          universityId: univ.id,
          universityName: univ.acronym,
          name: prog.name,
          passingGrade: prog.passingGrade,
          capacity: prog.capacity,
          group: prog.group
        });
      });
      return;
    }

    // 2. IPB special case
    if (univ.id === 'ipb') {
      IPB_MAJORS.forEach((m, idx) => {
        allPrograms.push({
          id: `prodi_ipb_${idx + 1}`,
          universityId: univ.id,
          universityName: univ.acronym,
          name: m.name,
          passingGrade: m.basePassingGrade,
          capacity: m.baseCapacity,
          group: m.group
        });
      });
      return;
    }

    // 3. Institut Seni (ISI Yogya, ISI Solo)
    if (univ.category === 'Institut Seni') {
      ART_INSTITUTE_MAJORS.forEach((m, idx) => {
        allPrograms.push({
          id: `prodi_${univ.id}_${idx + 1}`,
          universityId: univ.id,
          universityName: univ.acronym,
          name: m.name,
          passingGrade: m.basePassingGrade,
          capacity: m.baseCapacity,
          group: m.group
        });
      });
      return;
    }

    // 4. Politeknik Negeri
    if (univ.category === 'Politeknik Negeri') {
      POLYTECHNIC_MAJORS.forEach((m, idx) => {
        allPrograms.push({
          id: `prodi_${univ.id}_${idx + 1}`,
          universityId: univ.id,
          universityName: univ.acronym,
          name: m.name,
          passingGrade: m.basePassingGrade,
          capacity: m.baseCapacity,
          group: m.group
        });
      });
      return;
    }

    // 5. UIN State Islamic
    if (univ.category === 'UIN State Islamic') {
      UIN_MAJORS.forEach((m, idx) => {
        allPrograms.push({
          id: `prodi_${univ.id}_${idx + 1}`,
          universityId: univ.id,
          universityName: univ.acronym,
          name: m.name,
          passingGrade: m.basePassingGrade,
          capacity: m.baseCapacity,
          group: m.group
        });
      });
      return;
    }

    // 6. Eks-IKIP / LPTK Universities
    if (['uny', 'unj', 'unnes', 'unesa', 'um', 'upi', 'unimed', 'unp', 'unm', 'undiksha', 'unima'].includes(univ.id)) {
      EKS_IKIP_MAJORS.forEach((m, idx) => {
        allPrograms.push({
          id: `prodi_${univ.id}_${idx + 1}`,
          universityId: univ.id,
          universityName: univ.acronym,
          name: m.name,
          passingGrade: m.basePassingGrade,
          capacity: m.baseCapacity,
          group: m.group
        });
      });
      return;
    }

    // 7. General Comprehensive Universities (UI, UGM, UNAIR, UNPAD, UNDIP, UB, UNS, UNHAS, USU, UNAND, UNSOED, UNEJ, etc.)
    let gradeModifier = 0;
    if (['ui', 'ugm', 'unair', 'unpad', 'undip', 'ub', 'its', 'uns'].includes(univ.id)) {
      gradeModifier = 10;
    } else if (univ.category === 'PTN Regional') {
      gradeModifier = -25;
    }

    GENERAL_PTN_MAJORS.forEach((m, idx) => {
      const finalGrade = Math.max(520, Math.min(735, m.basePassingGrade + gradeModifier));
      allPrograms.push({
        id: `prodi_${univ.id}_${idx + 1}`,
        universityId: univ.id,
        universityName: univ.acronym,
        name: m.name,
        passingGrade: finalGrade,
        capacity: m.baseCapacity,
        group: m.group
      });
    });
  });

  return allPrograms;
})();

export const getSnpmbUniversities = (): University[] => SNPMB_UNIVERSITIES;

export const getSnpmbStudyPrograms = (univId?: string): StudyProgram[] => {
  if (!univId) return SNPMB_STUDY_PROGRAMS;
  const filtered = SNPMB_STUDY_PROGRAMS.filter(p => p.universityId === univId);
  if (filtered.length > 0) return filtered;

  // Fallback if univId is passed as acronym or name
  const uni = SNPMB_UNIVERSITIES.find(u => u.id === univId || u.acronym.toLowerCase() === univId.toLowerCase() || u.name.toLowerCase() === univId.toLowerCase());
  if (uni) {
    return SNPMB_STUDY_PROGRAMS.filter(p => p.universityId === uni.id);
  }
  return SNPMB_STUDY_PROGRAMS;
};
