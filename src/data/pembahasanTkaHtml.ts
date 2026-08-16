export const PEMBAHASAN_TKA_MATEMATIKA_WAJIB_HTML = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pembahasan Try Out TKA Matematika Wajib</title>
    <!-- MathJax Configuration & Library -->
    <script>
      MathJax = {
        tex: {
          inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
          displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']]
        }
      };
    </script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    <style>
        body {
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #f8fafc;
            color: #1e293b;
            margin: 0;
            padding: 24px;
            line-height: 1.6;
        }
        .container {
            max-width: 900px;
            margin: 0 auto;
            background: #ffffff;
            padding: 32px;
            border-radius: 16px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
            border: 1px solid #e2e8f0;
        }
        .header {
            text-align: center;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 20px;
            margin-bottom: 28px;
        }
        .header h1 {
            color: #1e40af;
            margin: 0 0 8px 0;
            font-size: 22px;
            font-weight: 800;
        }
        .header p {
            color: #64748b;
            margin: 0;
            font-size: 13px;
        }
        .soal-box {
            background-color: #ffffff;
            border: 1px solid #e2e8f0;
            border-left: 5px solid #2563eb;
            padding: 20px;
            margin-bottom: 24px;
            border-radius: 0 12px 12px 0;
            box-shadow: 0 1px 3px rgba(0,0,0,0.02);
        }
        .soal-header {
            font-weight: 700;
            color: #1e40af;
            margin-bottom: 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
        }
        .tipe-badge {
            background-color: #dbeafe;
            color: #1e40af;
            font-size: 11px;
            padding: 3px 10px;
            border-radius: 9999px;
            font-weight: 600;
        }
        .jawaban-akhir {
            margin-top: 14px;
            background-color: #ecfdf5;
            border: 1px solid #a7f3d0;
            color: #065f46;
            padding: 10px 16px;
            border-radius: 8px;
            font-weight: 700;
            font-size: 13px;
        }
        .section-title {
            font-weight: 700;
            color: #334155;
            margin-top: 14px;
            margin-bottom: 6px;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        ul {
            margin-top: 6px;
            padding-left: 20px;
        }
        li {
            margin-bottom: 4px;
        }
        table {
            border-collapse: collapse;
            width: 100%;
            margin: 10px 0;
        }
        th, td {
            border: 1px solid #cbd5e1;
            padding: 8px 12px;
            text-align: left;
        }
        th {
            background-color: #f1f5f9;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="header">
        <h1>PEMBAHASAN LENGKAP SIMULASI TKA MATEMATIKA WAJIB</h1>
        <p>Standar Kurikulum Nasional & Penilaian IRT • Solusi Langkah Demi Langkah & Formula LaTeX</p>
    </div>

    <!-- Soal 1 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 1 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: SPLDV & Sistem Persamaan</span>
        </div>
        <p><strong>Soal:</strong> Harga 3 buah buku dan 2 buah penggaris $\\text{Rp}18.000,00$. Jika harga sebuah buku $\\text{Rp}1.000,00$ lebih mahal dari sebuah penggaris, harga 2 buah buku dan 5 buah penggaris adalah ....</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <p>Misalkan harga 1 buku = $x$ dan harga 1 penggaris = $y$.</p>
        <ul>
            <li>$3x + 2y = 18.000$</li>
            <li>$x = y + 1.000$</li>
        </ul>
        <p>Substitusikan $x$ ke persamaan pertama:</p>
        $$3(y + 1.000) + 2y = 18.000 \\implies 5y + 3.000 = 18.000 \\implies 5y = 15.000 \\implies y = 3.000$$
        <p>Maka $x = 3.000 + 1.000 = 4.000$.</p>
        <p>Harga 2 buku + 5 penggaris: $2(4.000) + 5(3.000) = 8.000 + 15.000 = \\text{Rp}23.000,00$.</p>
        <div class="jawaban-akhir">Jawaban Benar: B (Rp23.000,00)</div>
    </div>

    <!-- Soal 2 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 2 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Program Linear</span>
        </div>
        <p><strong>Soal:</strong> Perhatikan grafik sistem pertidaksamaan linear. Daerah yang memenuhi sistem pertidaksamaan linear $x + y \\le 4, x + 3y \\ge 6, x \\ge 0, y \\ge 0$ adalah ....</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <ul>
            <li>$x + y \\le 4$: daerah di bawah/kiri garis $x + y = 4$.</li>
            <li>$x + 3y \\ge 6$: daerah di atas/kanan garis $x + 3y = 6$.</li>
            <li>$x \\ge 0, y \\ge 0$: Kuadran I.</li>
        </ul>
        <p>Irisan daerah yang memenuhi semua pertidaksamaan di Kuadran I adalah <strong>Daerah II</strong>.</p>
        <div class="jawaban-akhir">Jawaban Benar: B (Daerah II)</div>
    </div>

    <!-- Soal 3 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 3 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Fungsi Invers</span>
        </div>
        <p><strong>Soal:</strong> Diketahui fungsi $f(x) = \\sqrt{2x + 3}$, dengan $x \\ge -\\frac{3}{2}$. Jika $f^{-1}(x)$ adalah invers dari fungsi $f(x)$, nilai dari $f^{-1}(3) = \\dots$</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <p>Gunakan konsep dasar invers: $f^{-1}(3) = k \\iff f(k) = 3$.</p>
        $$\\sqrt{2k + 3} = 3 \\implies 2k + 3 = 9 \\implies 2k = 6 \\implies k = 3$$
        <div class="jawaban-akhir">Jawaban Benar: B (3)</div>
    </div>

    <!-- Soal 4 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 4 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Fungsi Komposisi</span>
        </div>
        <p><strong>Soal:</strong> Fungsi $f: \\mathbb{R} \\to \\mathbb{R}$ dan $g: \\mathbb{R} \\to \\mathbb{R}$. Jika $g(x) = x - 1$ dan $(f \\circ g)(x) = x^2 - 4x + 18$, nilai dari $f(2) = \\dots$</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <p>Cari nilai $x$ agar $g(x) = 2 \\implies x - 1 = 2 \\implies x = 3$.</p>
        <p>Substitusikan $x = 3$ ke $(f \\circ g)(x)$:</p>
        $$f(g(3)) = f(2) = 3^2 - 4(3) + 18 = 9 - 12 + 18 = 15$$
        <div class="jawaban-akhir">Jawaban Benar: C (15)</div>
    </div>

    <!-- Soal 5 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 5 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Barisan & Deret / Eksponen</span>
        </div>
        <p><strong>Soal:</strong> Seorang peneliti melakukan pengamatan terhadap bakteri tertentu. Setiap $\\frac{1}{2}$ hari bakteri membelah diri menjadi dua. Pada awal pengamatan terdapat $2$ bakteri. Jika setiap $2$ hari $\\frac{1}{4}$ dari jumlah bakteri mati, banyaknya bakteri setelah tiga hari adalah ....</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <ul>
            <li><strong>Hari ke-2 ($t=2$ hari / 4 kali membelah):</strong> $2 \\times 2^4 = 32$ bakteri.</li>
            <li><strong>Kematian akhir hari ke-2:</strong> $32 - \\frac{1}{4}(32) = 24$ bakteri.</li>
            <li><strong>Hari ke-3 (1 hari berikutnya / 2 kali membelah lagi):</strong> $24 \\times 2^2 = 24 \\times 4 = 96$ bakteri.</li>
        </ul>
        <div class="jawaban-akhir">Jawaban Benar: C (96 bakteri)</div>
    </div>

    <!-- Soal 6 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 6 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Aplikasi Turunan (Nilai Ekstrem)</span>
        </div>
        <p><strong>Soal:</strong> Dari selembar karton berbentuk persegi yang berukuran sisi $30\\text{ cm}$ akan dibuat kotak tanpa tutup, dengan cara menggunting empat persegi berukuran $x$ di setiap pojok karton. Volume kotak terbesar yang dapat dibuat adalah ....</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        $$V(x) = x(30 - 2x)^2 = 4x^3 - 120x^2 + 900x$$
        $$V'(x) = 12x^2 - 240x + 900 = 0 \\implies x^2 - 20x + 75 = 0 \\implies (x - 5)(x - 15) = 0$$
        <p>Karena $x < 15$, maka diambil $x = 5\\text{ cm}$.</p>
        $$V(5) = 5(30 - 10)^2 = 5(400) = 2.000\\text{ cm}^3$$
        <div class="jawaban-akhir">Jawaban Benar: A (2.000 cm³)</div>
    </div>

    <!-- Soal 7 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 7 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Trigonometri Sudut Tumpul</span>
        </div>
        <p><strong>Soal:</strong> Diketahui $\\sin A = \\frac{1}{a}$, $A$ adalah sudut tumpul. Nilai $\\cos A = \\dots$</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <p>Sisi depan $= 1$, sisi miring $= a$. Sisi samping $= \\sqrt{a^2 - 1}$.</p>
        <p>Karena $A$ sudut tumpul (berada di Kuadran II), nilai kosinus bernilai negatif:</p>
        $$\\cos A = -\\frac{\\sqrt{a^2 - 1}}{a}$$
        <div class="jawaban-akhir">Jawaban Benar: D</div>
    </div>

    <!-- Soal 8 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 8 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Statistika & Diagram Batang</span>
        </div>
        <p><strong>Soal:</strong> Diagram batang menunjukkan produksi pakaian Bu Rahmi selama tahun 2020 dari Januari sampai Desember. Peningkatan tertinggi jumlah produksi pakaian terjadi pada bulan ....</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <p>Berdasarkan selisih kenaikan produksi dibanding bulan sebelumnya, lonjakan pertumbuhan produksi terbesar terjadi pada bulan <strong>November</strong>.</p>
        <div class="jawaban-akhir">Jawaban Benar: D (November)</div>
    </div>

    <!-- Soal 9 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 9 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Statistika Modus Data Berkelompok</span>
        </div>
        <p><strong>Soal:</strong> Modus dari data tabel ulangan matematika pada interval 64 – 66 dengan frekuensi tertinggi $f = 9$ adalah ....</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <ul>
            <li>Tepi bawah $T_b = 63,5$</li>
            <li>$d_1 = 9 - 6 = 3$, $d_2 = 9 - 6 = 3$, panjang kelas $p = 3$</li>
        </ul>
        $$\\text{Mo} = T_b + \\left(\\frac{d_1}{d_1 + d_2}\\right) \\cdot p = 63,5 + \\left(\\frac{3}{3 + 3}\\right) \\cdot 3 = 63,5 + 1,5 = 65,0$$
        <div class="jawaban-akhir">Jawaban Benar: C (65,0)</div>
    </div>

    <!-- Soal 10 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 10 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Peluang Kejadian Bersyarat</span>
        </div>
        <p><strong>Soal:</strong> Terdapat 6 grup band putra dan 4 putri (total 10). Peluang terambil band putra pada pengambilan pertama dan putri pada pengambilan kedua tanpa pengembalian adalah ....</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        $$P(A \\cap B) = P(A) \\times P(B|A) = \\frac{6}{10} \\times \\frac{4}{9} = \\frac{24}{90} = \\frac{4}{15}$$
        <div class="jawaban-akhir">Jawaban Benar: C (4/15)</div>
    </div>

    <!-- Soal 11 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 11 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Operasi Hitung Pecahan</span>
        </div>
        <p><strong>Soal:</strong> $\\frac{1}{4} + \\frac{7}{4} \\times \\frac{8}{21} = \\dots$</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        $$\\frac{7}{4} \\times \\frac{8}{21} = \\frac{1}{1} \\times \\frac{2}{3} = \\frac{2}{3}$$
        $$\\frac{1}{4} + \\frac{2}{3} = \\frac{3 + 8}{12} = \\frac{11}{12}$$
        <div class="jawaban-akhir">Jawaban Benar: C (11/12)</div>
    </div>

    <!-- Soal 12 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 12 <span class="tipe-badge">Evaluasi Pernyataan</span></span>
            <span>Topik: Program Linear Laba Maksimum</span>
        </div>
        <p><strong>Soal:</strong> Mirna memproduksi bolu (biaya Rp15.000, laba Rp6.000) dan brownies (biaya Rp20.000, laba Rp7.000) dengan modal Rp1.000.000. Tentukan kebenaran dari pernyataan (1), (2), dan (3).</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <p>Dengan menguji titik pojok kendala produksi, didapatkan keuntungan maksimum sebesar Rp3.100.000,00.</p>
        <ul>
            <li>Pernyataan (1) Salah</li>
            <li>Pernyataan (2) Salah</li>
            <li>Pernyataan (3) Benar</li>
        </ul>
        <div class="jawaban-akhir">Jawaban Benar: A ((1) Salah, (2) Salah, (3) Benar)</div>
    </div>

    <!-- Soal 13 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 13 <span class="tipe-badge">Benar / Salah</span></span>
            <span>Topik: Geometri Sudut Trapesium</span>
        </div>
        <p><strong>Soal:</strong> Pada trapesium sama kaki $ABCD$, $\\angle BAD = 70^\\circ$ dan $\\angle ABD = 30^\\circ$. Tentukan kebenaran dari pernyataan sudut $\\angle BCD = 110^\\circ, \\angle CBD = 40^\\circ, \\angle BDC = 40^\\circ$.</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <ul>
            <li>1) $\\angle BCD = 180^\\circ - 70^\\circ = 110^\\circ$ (Benar)</li>
            <li>2) $\\angle CBD = 70^\\circ - 30^\\circ = 40^\\circ$ (Benar)</li>
            <li>3) $\\angle BDC = 40^\\circ$ (sudut berseberangan dalam dengan $\\angle ABD$, Benar)</li>
        </ul>
        <div class="jawaban-akhir">Jawaban Benar: A (1) Benar, 2) Benar, 3) Benar)</div>
    </div>

    <!-- Soal 14 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 14 <span class="tipe-badge">Kecukupan Data</span></span>
            <span>Topik: Kecukupan Data Geometri</span>
        </div>
        <p><strong>Soal:</strong> Pada trapesium siku-siku $ABCD$, $AB = 3$ dan $AD \\le BC$. Apakah keliling trapesium tersebut lebih dari $25$?</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <ul>
            <li>Pernyataan (1) Luas $= 24$: tidak cukup karena sisi miring $CD$ tidak dapat dipastikan nilainya secara tunggal.</li>
            <li>Pernyataan (2) $BC = 10, CD = 5$: menghasilkan tinggi $AD = 6$, sehingga seluruh sisi diketahui dan keliling $= 24 \\le 25$ dapat dijawab pasti TIDAK. Jadi Pernyataan (2) SAJA cukup.</li>
        </ul>
        <div class="jawaban-akhir">Jawaban Benar: B (Pernyataan (2) SAJA cukup)</div>
    </div>

    <!-- Soal 15 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 15 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Trigonometri Sudut Elevasi</span>
        </div>
        <p><strong>Soal:</strong> Tangga panjang $6\\text{ meter}$ disandarkan ke dinding dengan sudut lantai $60^\\circ$. Tinggi dinding yang disentuh adalah ....</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        $$h = 6 \\times \\sin 60^\\circ = 6 \\times \\frac{\\sqrt{3}}{2} = 3\\sqrt{3}\\text{ meter}$$
        <div class="jawaban-akhir">Jawaban Benar: C (3√3 meter)</div>
    </div>

    <!-- Soal 16 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 16 <span class="tipe-badge">Pilihan Ganda Kompleks</span></span>
            <span>Topik: Statistika Rata-rata Gabungan</span>
        </div>
        <p><strong>Soal:</strong> Rata-rata 17 murid adalah 83. Masuk 3 murid susulan sehingga rata-rata 20 murid menjadi 82. Manakah pernyataan yang benar?</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <ul>
            <li>Total nilai 3 murid susulan $= 20(82) - 17(83) = 1.640 - 1.411 = 229$ (Pernyataan A Benar)</li>
            <li>Rata-rata 3 murid $= 229 / 3 = 76,33 > 70$ (Pernyataan B Benar)</li>
            <li>Nilai terendah minimal $= 229 - 2(100) = 29$ (Pernyataan C Benar)</li>
        </ul>
        <div class="jawaban-akhir">Jawaban Benar: A, B, C</div>
    </div>

    <!-- Soal 17 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 17 <span class="tipe-badge">Benar / Salah</span></span>
            <span>Topik: Karakteristik Fungsi Kuadrat</span>
        </div>
        <p><strong>Soal:</strong> Fungsi $f(x) = 4(x^2 - 8x + 12)$. Tentukan kebenaran pernyataan: 1) Terbuka ke atas, 2) Memotong garis $y = -18$, 3) Tidak melalui kuadran III.</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <ul>
            <li>1) $a = 4 > 0 \\implies$ terbuka ke atas (Benar)</li>
            <li>2) Nilai minimum puncak $y_p = f(4) = 4(16 - 32 + 12) = -16$. Nilai tidak pernah mencapai $-18$ (Salah)</li>
            <li>3) Untuk $x < 0$, $f(x) > 0$, kurva tidak pernah berada di Kuadran III (Benar)</li>
        </ul>
        <div class="jawaban-akhir">Jawaban Benar: A (1) Benar, 2) Salah, 3) Benar)</div>
    </div>

    <!-- Soal 18 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 18 <span class="tipe-badge">Pilihan Ganda Kompleks</span></span>
            <span>Topik: Pemodelan Fungsi Linear</span>
        </div>
        <p><strong>Soal:</strong> Biaya tagihan dihitung $f(x) = 1.350x + 25.000$. Jika tagihan Rp80.000,00 lebih besar dari biasanya, kemungkinan penggunaan biasanya adalah ....</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <p>Pilihan yang valid dan realistis di bawah batas maksimum konsumsi adalah opsi 85 kWh dan 90 kWh.</p>
        <div class="jawaban-akhir">Jawaban Benar: A, B (85 kWh, 90 kWh)</div>
    </div>

    <!-- Soal 19 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 19 <span class="tipe-badge">Benar / Salah</span></span>
            <span>Topik: Skala & Proyeksi</span>
        </div>
        <p><strong>Soal:</strong> Desain $60\\text{ cm} \\times 60\\text{ cm}$ diproyeksikan ke layar $2,4\\text{ m} \\times 1,8\\text{ m}$. Tentukan kebenaran dari pernyataan 1, 2, dan 3.</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <ul>
            <li>1) Perbandingan proporsional tetap $1 : 1$ (Benar)</li>
            <li>2) Ukuran di layar $> 1\\text{ meter}$ (Benar)</li>
            <li>3) Tinggi layar $1,8\\text{ m}$ cukup luas sehingga tidak ada gambar yang terpotong (Salah)</li>
        </ul>
        <div class="jawaban-akhir">Jawaban Benar: A (1) Benar, 2) Benar, 3) Salah)</div>
    </div>

    <!-- Soal 20 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 20 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Kaidah Pencacahan & Kombinatorika</span>
        </div>
        <p><strong>Soal:</strong> Kode akses bazar berformat $\\mathbf{AXBYC}$ dengan $A, B, C$ huruf kapital dan $X, Y$ angka. Tidak boleh ada karakter berulang. Berapa banyak kode akses yang dapat dibuat?</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        $$N = (26 \\times 25 \\times 24) \\times (10 \\times 9) = 15.600 \\times 90 = 1.404.000$$
        <div class="jawaban-akhir">Jawaban Benar: C (1.404.000)</div>
    </div>
</div>

</body>
</html>`;

export const PEMBAHASAN_TKA_MATEMATIKA_LANJUT_HTML = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pembahasan Try Out TKA Matematika Tingkat Lanjut</title>
    <!-- MathJax Configuration & Library -->
    <script>
      MathJax = {
        tex: {
          inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
          displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']]
        }
      };
    </script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    <style>
        body {
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #f8fafc;
            color: #1e293b;
            margin: 0;
            padding: 24px;
            line-height: 1.6;
        }
        .container {
            max-width: 900px;
            margin: 0 auto;
            background: #ffffff;
            padding: 32px;
            border-radius: 16px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
            border: 1px solid #e2e8f0;
        }
        .header {
            text-align: center;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 20px;
            margin-bottom: 28px;
        }
        .header h1 {
            color: #4338ca;
            margin: 0 0 8px 0;
            font-size: 22px;
            font-weight: 800;
        }
        .header p {
            color: #64748b;
            margin: 0;
            font-size: 13px;
        }
        .soal-box {
            background-color: #ffffff;
            border: 1px solid #e2e8f0;
            border-left: 5px solid #4f46e5;
            padding: 20px;
            margin-bottom: 24px;
            border-radius: 0 12px 12px 0;
            box-shadow: 0 1px 3px rgba(0,0,0,0.02);
        }
        .soal-header {
            font-weight: 700;
            color: #4338ca;
            margin-bottom: 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
        }
        .tipe-badge {
            background-color: #e0e7ff;
            color: #3730a3;
            font-size: 11px;
            padding: 3px 10px;
            border-radius: 9999px;
            font-weight: 600;
        }
        .jawaban-akhir {
            margin-top: 14px;
            background-color: #ecfdf5;
            border: 1px solid #a7f3d0;
            color: #065f46;
            padding: 10px 16px;
            border-radius: 8px;
            font-weight: 700;
            font-size: 13px;
        }
        .section-title {
            font-weight: 700;
            color: #334155;
            margin-top: 14px;
            margin-bottom: 6px;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        ul {
            margin-top: 6px;
            padding-left: 20px;
        }
        li {
            margin-bottom: 4px;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="header">
        <h1>PEMBAHASAN LENGKAP SIMULASI TKA MATEMATIKA TINGKAT LANJUT</h1>
        <p>Matriks, Polinomial, Vektor, Kalkulus Limit & Geometri Transformasi</p>
    </div>

    <!-- Soal 1 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 1 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Matriks - Determinan</span>
        </div>
        <p><strong>Soal:</strong> Diketahui $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$. Determinan matriks $A$ adalah...</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        $$\\det(A) = (2 \\cdot 4) - (1 \\cdot 3) = 8 - 3 = 5$$
        <div class="jawaban-akhir">Jawaban Benar: B (5)</div>
    </div>

    <!-- Soal 2 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 2 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Matriks - Invers</span>
        </div>
        <p><strong>Soal:</strong> Invers dari matriks $\\begin{pmatrix} 1 & 2 \\\\ 3 & 5 \\end{pmatrix}$ adalah...</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        $$\\det = (1)(5) - (2)(3) = 5 - 6 = -1$$
        $$A^{-1} = \\frac{1}{-1} \\begin{pmatrix} 5 & -2 \\\\ -3 & 1 \\end{pmatrix} = \\begin{pmatrix} -5 & 2 \\\\ 3 & -1 \\end{pmatrix}$$
        <div class="jawaban-akhir">Jawaban Benar: B ([-5, 2; 3, -1])</div>
    </div>

    <!-- Soal 3 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 3 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Polinomial - Teorema Sisa</span>
        </div>
        <p><strong>Soal:</strong> Jika $P(x) = x^3 - 4x^2 + x + 6$, maka sisa pembagian oleh $(x - 2)$ adalah...</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <p>Menurut Teorema Sisa, sisa pembagian oleh $(x - 2)$ adalah $P(2)$:</p>
        $$P(2) = (2)^3 - 4(2)^2 + 2 + 6 = 8 - 16 + 2 + 6 = 0$$
        <div class="jawaban-akhir">Jawaban Benar: B (0)</div>
    </div>

    <!-- Soal 4 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 4 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Pemfaktoran Aljabar</span>
        </div>
        <p><strong>Soal:</strong> Faktor dari $x^2 - 7x + 12$ adalah...</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <p>Cari dua bilangan yang jika dikalikan bernilai $12$ dan jika dijumlahkan bernilai $-7$. Kedua bilangan tersebut adalah $-3$ dan $-4$.</p>
        $$x^2 - 7x + 12 = (x - 3)(x - 4)$$
        <div class="jawaban-akhir">Jawaban Benar: B ((x - 3)(x - 4))</div>
    </div>

    <!-- Soal 5 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 5 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Fungsi & Domain Alami</span>
        </div>
        <p><strong>Soal:</strong> Domain fungsi $f(x) = \\frac{\\sqrt{x - 1}}{x - 4}$ adalah...</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <ol>
            <li>Syarat dalam bentuk akar: $x - 1 \\ge 0 \\implies x \\ge 1$.</li>
            <li>Syarat penyebut pecahan: $x - 4 \\neq 0 \\implies x \\neq 4$.</li>
        </ol>
        <p>Irisan kedua syarat menghasilkan domain: $x \\ge 1, x \\neq 4$.</p>
        <div class="jawaban-akhir">Jawaban Benar: C (x ≥ 1, x ≠ 4)</div>
    </div>

    <!-- Soal 6 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 6 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Eksponen & Logaritma</span>
        </div>
        <p><strong>Soal:</strong> Nilai dari $\\log_2 32 + \\log_2 \\frac{1}{8}$ adalah...</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        $$\\log_2 32 = \\log_2 (2^5) = 5$$
        $$\\log_2 \\frac{1}{8} = \\log_2 (2^{-3}) = -3$$
        $$\\log_2 32 + \\log_2 \\frac{1}{8} = 5 + (-3) = 2$$
        <div class="jawaban-akhir">Jawaban Benar: B (2)</div>
    </div>

    <!-- Soal 7 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 7 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Vektor Dimensi Dua</span>
        </div>
        <p><strong>Soal:</strong> Panjang vektor $\\vec{v} = (6, -8)$ adalah...</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        $$|\\vec{v}| = \\sqrt{6^2 + (-8)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$$
        <div class="jawaban-akhir">Jawaban Benar: C (10)</div>
    </div>

    <!-- Soal 8 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 8 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Geometri Lingkaran</span>
        </div>
        <p><strong>Soal:</strong> Persamaan lingkaran berpusat di $(2, -1)$ dan berjari-jari $3$ adalah...</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <p>Rumus baku: $(x - a)^2 + (y - b)^2 = r^2$.</p>
        $$(x - 2)^2 + (y - (-1))^2 = 3^2 \\implies (x - 2)^2 + (y + 1)^2 = 9$$
        <div class="jawaban-akhir">Jawaban Benar: C ((x - 2)² + (y + 1)² = 9)</div>
    </div>

    <!-- Soal 9 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 9 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Transformasi Geometri - Refleksi</span>
        </div>
        <p><strong>Soal:</strong> Titik $(3, -2)$ direfleksikan terhadap sumbu-$Y$. Hasil bayangannya adalah...</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <p>Rumus refleksi terhadap sumbu-$Y$: $(x, y) \\rightarrow (-x, y)$.</p>
        $$(3, -2) \\rightarrow (-3, -2)$$
        <div class="jawaban-akhir">Jawaban Benar: A (-3, -2)</div>
    </div>

    <!-- Soal 10 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 10 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Kalkulus - Limit Aljabar</span>
        </div>
        <p><strong>Soal:</strong> Nilai dari $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$ adalah...</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        $$\\lim_{x \\to 2} \\frac{(x - 2)(x + 2)}{x - 2} = \\lim_{x \\to 2} (x + 2) = 2 + 2 = 4$$
        <div class="jawaban-akhir">Jawaban Benar: C (4)</div>
    </div>

    <!-- Soal 11 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 11 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Kalkulus - Limit Trigonometri</span>
        </div>
        <p><strong>Soal:</strong> Nilai dari $\\lim_{x \\to 0} \\frac{\\sin x}{x}$ adalah...</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <p>Sifat dasar limit fungsi trigonometri: $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$.</p>
        <div class="jawaban-akhir">Jawaban Benar: B (1)</div>
    </div>

    <!-- Soal 12 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 12 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Sifat Bilangan Berpangkat</span>
        </div>
        <p><strong>Soal:</strong> Nilai dari $2^3 \\times 2^{-5}$ adalah...</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        $$2^3 \\times 2^{-5} = 2^{3 + (-5)} = 2^{-2} = \\frac{1}{2^2} = \\frac{1}{4}$$
        <div class="jawaban-akhir">Jawaban Benar: C (1/4)</div>
    </div>

    <!-- Soal 13 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 13 <span class="tipe-badge">Pilihan Ganda Kompleks</span></span>
            <span>Topik: Fungsi & Daerah Asal</span>
        </div>
        <p><strong>Soal:</strong> Manakah fungsi berikut yang memiliki domain seluruh himpunan bilangan real ($\\mathbb{R}$)?</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <ul>
            <li>$f(x) = x^2 + 1$: Polinomial, terdefinisi untuk seluruh $\\mathbb{R}$ (Benar)</li>
            <li>$f(x) = \\sqrt{x}$: Hanya terdefinisi untuk $x \\ge 0$ (Salah)</li>
            <li>$f(x) = 2^x$: Fungsi eksponensial, terdefinisi untuk seluruh $\\mathbb{R}$ (Benar)</li>
            <li>$f(x) = |x|$: Fungsi nilai mutlak, terdefinisi untuk seluruh $\\mathbb{R}$ (Benar)</li>
            <li>$f(x) = \\frac{1}{x}$: Tak terdefinisi pada $x = 0$ (Salah)</li>
        </ul>
        <div class="jawaban-akhir">Jawaban Benar: A, C, D ($x^2+1, 2^x, |x|$)</div>
    </div>

    <!-- Soal 14 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 14 <span class="tipe-badge">Pilihan Ganda Kompleks</span></span>
            <span>Topik: Transformasi Geometri - Translasi</span>
        </div>
        <p><strong>Soal:</strong> Manakah pernyataan yang merupakan hasil translasi oleh vektor $\\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}$?</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <p>Translasi oleh $\\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}$ memetakan $(x, y) \\rightarrow (x + 2, y - 3)$, yang artinya bergeser 2 satuan ke kanan dan 3 satuan ke bawah.</p>
        <div class="jawaban-akhir">Jawaban Benar: A, C, D</div>
    </div>

    <!-- Soal 15 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 15 <span class="tipe-badge">Pilihan Ganda Kompleks</span></span>
            <span>Topik: Sifat Matriks</span>
        </div>
        <p><strong>Soal:</strong> Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$. Pernyataan yang benar adalah...</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <ul>
            <li>$\\det(A) = 1(4) - 2(3) = 4 - 6 = -2$ (Pernyataan A Benar)</li>
            <li>Karena $\\det(A) \\neq 0$, matriks memiliki invers (Pernyataan C Benar)</li>
            <li>Matriks terdiri dari 2 baris dan 2 kolom, sehingga berordo $2 \\times 2$ (Pernyataan E Benar)</li>
        </ul>
        <div class="jawaban-akhir">Jawaban Benar: A, C, E</div>
    </div>

    <!-- Soal 16 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 16 <span class="tipe-badge">Pilihan Ganda Kompleks</span></span>
            <span>Topik: Limit Trigonometri Khusus</span>
        </div>
        <p><strong>Soal:</strong> Manakah bentuk limit berikut yang bernilai 1?</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <p>Limit trigonometri bernilai 1 saat $x \\to 0$ adalah $\\frac{\\sin x}{x}, \\frac{\\tan x}{x}, \\frac{x}{\\sin x},$ dan $\\frac{x}{\\tan x}$. Sedangkan $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0$.</p>
        <div class="jawaban-akhir">Jawaban Benar: A, B, D, E</div>
    </div>

    <!-- Soal 17 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 17 <span class="tipe-badge">Benar / Salah</span></span>
            <span>Topik: Teorema & Sifat Matriks</span>
        </div>
        <p><strong>Soal:</strong> Tentukan kebenaran dari pernyataan matriks: 1) Determinan matriks identitas selalu 1, 2) Semua matriks memiliki invers, 3) Determinan matriks singular sama dengan nol.</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <ul>
            <li>1) $\\det(I) = 1$ (Benar)</li>
            <li>2) Hanya matriks persegi non-singular yang memiliki invers (Salah)</li>
            <li>3) Matriks singular memiliki $\\det(A) = 0$ (Benar)</li>
        </ul>
        <div class="jawaban-akhir">Jawaban Benar: A (1) Benar, 2) Salah, 3) Benar)</div>
    </div>

    <!-- Soal 18 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 18 <span class="tipe-badge">Benar / Salah</span></span>
            <span>Topik: Fungsi Eksponen & Logaritma</span>
        </div>
        <p><strong>Soal:</strong> Tentukan kebenaran: 1) Grafik fungsi eksponensial selalu melalui (0,1), 2) Logaritma merupakan invers eksponensial, 3) Domain logaritma adalah semua bilangan real.</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <ul>
            <li>1) $a^0 = 1 \\implies (0,1)$ (Benar)</li>
            <li>2) Logaritma adalah fungsi invers dari eksponensial (Benar)</li>
            <li>3) Domain fungsi logaritma adalah bilangan real positif $x > 0$ (Salah)</li>
        </ul>
        <div class="jawaban-akhir">Jawaban Benar: B (1) Benar, 2) Benar, 3) Salah)</div>
    </div>

    <!-- Soal 19 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 19 <span class="tipe-badge">Benar / Salah</span></span>
            <span>Topik: Vektor & Dilatasi</span>
        </div>
        <p><strong>Soal:</strong> Tentukan kebenaran: 1) Panjang vektor tidak pernah negatif, 2) Refleksi sumbu-X mengubah tanda koordinat y, 3) Dilatasi faktor skala 1 mengubah ukuran bangun.</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <ul>
            <li>1) Panjang vektor $|\\vec{v}| = \\sqrt{x^2 + y^2} \\ge 0$ (Benar)</li>
            <li>2) $(x, y) \\rightarrow (x, -y)$ (Benar)</li>
            <li>3) Dilatasi dengan $k = 1$ tidak mengubah ukuran bangun (Salah)</li>
        </ul>
        <div class="jawaban-akhir">Jawaban Benar: A (1) Benar, 2) Benar, 3) Salah)</div>
    </div>

    <!-- Soal 20 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 20 <span class="tipe-badge">Benar / Salah</span></span>
            <span>Topik: Konsep Dasar Kalkulus Limit</span>
        </div>
        <p><strong>Soal:</strong> Tentukan kebenaran: 1) $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$, 2) Limit selalu dapat dihitung dengan substitusi langsung, 3) Jika limit kiri dan kanan berbeda maka limit tidak ada.</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <ul>
            <li>1) Sifat limit trigonometri dasar bernilai 1 (Benar)</li>
            <li>2) Jika bentuk tak tentu $\\frac{0}{0}$, substitusi langsung tidak dapat langsung digunakan (Salah)</li>
            <li>3) Syarat keberadaan limit adalah limit kiri sama dengan limit kanan (Benar)</li>
        </ul>
        <div class="jawaban-akhir">Jawaban Benar: B (1) Benar, 2) Salah, 3) Benar)</div>
    </div>
</div>

</body>
</html>`;

export const PEMBAHASAN_TKA_BAHASA_INDONESIA_HTML = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pembahasan Try Out TKA Bahasa Indonesia</title>
    <style>
        body {
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #f8fafc;
            color: #1e293b;
            margin: 0;
            padding: 24px;
            line-height: 1.6;
        }
        .container {
            max-width: 900px;
            margin: 0 auto;
            background: #ffffff;
            padding: 32px;
            border-radius: 16px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
            border: 1px solid #e2e8f0;
        }
        .header {
            text-align: center;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 20px;
            margin-bottom: 28px;
        }
        .header h1 {
            color: #0f766e;
            margin: 0 0 8px 0;
            font-size: 22px;
            font-weight: 800;
        }
        .header p {
            color: #64748b;
            margin: 0;
            font-size: 13px;
        }
        .soal-box {
            background-color: #ffffff;
            border: 1px solid #e2e8f0;
            border-left: 5px solid #0d9488;
            padding: 20px;
            margin-bottom: 24px;
            border-radius: 0 12px 12px 0;
            box-shadow: 0 1px 3px rgba(0,0,0,0.02);
        }
        .soal-header {
            font-weight: 700;
            color: #0f766e;
            margin-bottom: 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
        }
        .tipe-badge {
            background-color: #ccfbf1;
            color: #115e59;
            font-size: 11px;
            padding: 3px 10px;
            border-radius: 9999px;
            font-weight: 600;
        }
        .jawaban-akhir {
            margin-top: 14px;
            background-color: #ecfdf5;
            border: 1px solid #a7f3d0;
            color: #065f46;
            padding: 10px 16px;
            border-radius: 8px;
            font-weight: 700;
            font-size: 13px;
        }
        .section-title {
            font-weight: 700;
            color: #334155;
            margin-top: 14px;
            margin-bottom: 6px;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .text-excerpt {
            background: #f1f5f9;
            border-left: 3px solid #94a3b8;
            padding: 10px 14px;
            margin: 10px 0;
            font-style: italic;
            font-size: 13.5px;
            border-radius: 4px;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="header">
        <h1>PEMBAHASAN LENGKAP SIMULASI TKA BAHASA INDONESIA</h1>
        <p>Literasi Membaca, Analisis Teks, EYD/PUEBI, Ejaan Baku, Kalimat Efektif & Makna Kata</p>
    </div>

    <!-- Soal 1 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 1 <span class="tipe-badge">Makna Istilah</span></span>
            <span>Teks: Pencemaran Laut</span>
        </div>
        <p><strong>Soal:</strong> Makna istilah <em>mobilisasi</em> pada paragraf ketiga teks tersebut adalah...</p>
        <div class="section-title">Pembahasan:</div>
        <p>Dalam konteks menggerakkan seluruh elemen masyarakat dan industri, mobilisasi bermakna <strong>pengarahan tenaga atau massa untuk bergerak dan bertindak bersama-sama</strong>.</p>
        <div class="jawaban-akhir">Jawaban Benar: A (Pengarahan tenaga atau massa untuk bergerak bersama)</div>
    </div>

    <!-- Soal 2 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 2 <span class="tipe-badge">Gagasan Utama</span></span>
            <span>Teks: Pencemaran Laut</span>
        </div>
        <p><strong>Soal:</strong> Gagasan utama paragraf pertama pada teks di atas adalah...</p>
        <div class="section-title">Pembahasan:</div>
        <p>Paragraf pertama berfokus memaparkan ancaman nyata pemanasan global dan pencemaran sampah plastik di lautan.</p>
        <div class="jawaban-akhir">Jawaban Benar: B (Ancaman pemanasan global dan pencemaran sampah plastik di lautan)</div>
    </div>

    <!-- Soal 3 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 3 <span class="tipe-badge">Pemahaman Bacaan</span></span>
            <span>Teks: Pencemaran Laut</span>
        </div>
        <p><strong>Soal:</strong> Mengapa mikroplastik berbahaya bagi kesehatan manusia?</p>
        <div class="section-title">Pembahasan:</div>
        <p>Mikroplastik termakan oleh ikan/biota laut dan akhirnya masuk ke rantai makanan yang dikonsumsi oleh manusia.</p>
        <div class="jawaban-akhir">Jawaban Benar: C (Masuk ke dalam rantai makanan laut dan terkonsumsi oleh manusia)</div>
    </div>

    <!-- Soal 4 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 4 <span class="tipe-badge">Simpulan Teks</span></span>
            <span>Teks: Pencemaran Laut</span>
        </div>
        <p><strong>Soal:</strong> Simpulan yang tepat dari teks bacaan tersebut adalah...</p>
        <div class="section-title">Pembahasan:</div>
        <p>Simpulan merangkum urgensi tindakan bersama semua pihak dalam menekan penggunaan plastik sekali pakai demi menjaga laut.</p>
        <div class="jawaban-akhir">Jawaban Benar: D (Upaya bersama lintas sektor dalam mengurangi plastik sekali pakai sangat krusial)</div>
    </div>

    <!-- Soal 5 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 5 <span class="tipe-badge">Analisis Cerpen</span></span>
            <span>Teks: Menatap Padi Menguning</span>
        </div>
        <p><strong>Soal:</strong> Konflik batin yang dialami oleh tokoh Ardi dalam kutipan cerpen di atas adalah...</p>
        <div class="section-title">Pembahasan:</div>
        <p>Ardi mengalami pergolakan batin antara keinginannya meraih beasiswa lewat olimpiade sains dengan baktinya membantu ekonomi ayahnya.</p>
        <div class="jawaban-akhir">Jawaban Benar: C (Dilema antara mengejar impian olimpiade atau membantu beban ekonomi ayahnya di sawah)</div>
    </div>

    <!-- Soal 6 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 6 <span class="tipe-badge">Penyebab Konflik</span></span>
            <span>Teks: Menatap Padi Menguning</span>
        </div>
        <p><strong>Soal:</strong> Penyebab terjadinya konflik pada kutipan cerita tersebut adalah...</p>
        <div class="section-title">Pembahasan:</div>
        <p>Konflik dipicu saat Ayah meminta Ardi untuk tidak pergi ke tempat les dan membantu panen di sawah.</p>
        <div class="jawaban-akhir">Jawaban Benar: B (Ayah meminta Ardi berhenti les demi membantu panen di sawah)</div>
    </div>

    <!-- Soal 7 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 7 <span class="tipe-badge">Karakterisasi Tokoh</span></span>
            <span>Teks: Menatap Padi Menguning</span>
        </div>
        <p><strong>Soal:</strong> Watak tokoh Ardi yang tergambar dalam kutipan tersebut adalah...</p>
        <div class="section-title">Pembahasan:</div>
        <p>Ardi mengurungkan niat mendebat saat melihat kondisi lelah sang ayah, mencerminkan sifat berbakti dan penuh pengertian.</p>
        <div class="jawaban-akhir">Jawaban Benar: C (Berbakti dan penuh pengertian)</div>
    </div>

    <!-- Soal 8 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 8 <span class="tipe-badge">Nilai Moral</span></span>
            <span>Teks: Menatap Padi Menguning</span>
        </div>
        <p><strong>Soal:</strong> Nilai moral yang dapat dipetik dari kutipan cerpen di atas adalah...</p>
        <div class="section-title">Pembahasan:</div>
        <p>Pentingnya bersikap empati, memahami perjuangan orang tua, dan bijak dalam menyikapi situasi keluarga.</p>
        <div class="jawaban-akhir">Jawaban Benar: C (Memahami pengorbanan orang tua dan bersikap bijak menghadapi keadaan)</div>
    </div>

    <!-- Soal 9 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 9 <span class="tipe-badge">Tujuan Penulisan</span></span>
            <span>Teks: Bahaya Rhodamin B</span>
        </div>
        <p><strong>Soal:</strong> Tujuan penulisan teks tersebut adalah untuk...</p>
        <div class="section-title">Pembahasan:</div>
        <p>Teks bermaksud mengedukasi pembaca mengenai bahaya penyalahgunaan pewarna Rhodamin B pada produk pangan olahan.</p>
        <div class="jawaban-akhir">Jawaban Benar: B (Menginformasikan bahaya penyalahgunaan Rhodamin B dalam makanan bagi kesehatan tubuh)</div>
    </div>

    <!-- Soal 10 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 10 <span class="tipe-badge">Ciri Fisik</span></span>
            <span>Teks: Bahaya Rhodamin B</span>
        </div>
        <p><strong>Soal:</strong> Ciri fisik Rhodamin B berdasarkan teks bacaan tersebut adalah...</p>
        <div class="section-title">Pembahasan:</div>
        <p>Secara tekstual digambarkan sebagai serbuk kristal kehijauan yang jika dilarutkan ke dalam air menghasilkan warna merah keunguan cerah.</p>
        <div class="jawaban-akhir">Jawaban Benar: C (Serbuk kristal kehijauan yang larut menghasilkan warna merah keunguan cerah)</div>
    </div>

    <!-- Soal 11 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 11 <span class="tipe-badge">Hubungan Kausalitas</span></span>
            <span>Teks: Bahaya Rhodamin B</span>
        </div>
        <p><strong>Soal:</strong> Kalimat yang mengandung hubungan sebab-akibat (kausalitas) pada teks di atas adalah...</p>
        <div class="section-title">Pembahasan:</div>
        <p>Kalimat "Harganya yang relatif murah serta daya warnanya yang kuat membuat zat kimia berbahaya ini kerap disalahgunakan..." mengandung relasi kausal sebab-akibat.</p>
        <div class="jawaban-akhir">Jawaban Benar: B</div>
    </div>

    <!-- Soal 12 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 12 <span class="tipe-badge">Saran Penulis</span></span>
            <span>Teks: Bahaya Rhodamin B</span>
        </div>
        <p><strong>Soal:</strong> Langkah pencegahan yang disarankan penulis kepada masyarakat adalah...</p>
        <div class="section-title">Pembahasan:</div>
        <p>Penulis menyarankan masyarakat untuk menghindari makanan dengan pewarnaan yang terlalu mencolok dan tidak wajar.</p>
        <div class="jawaban-akhir">Jawaban Benar: C (Menghindari produk pangan yang memiliki warna mencolok tidak wajar)</div>
    </div>

    <!-- Soal 13 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 13 <span class="tipe-badge">Ide Pokok</span></span>
            <span>Teks: Transformasi Digital UMKM</span>
        </div>
        <p><strong>Soal:</strong> Ide pokok paragraf pertama teks tersebut adalah...</p>
        <div class="section-title">Pembahasan:</div>
        <p>Fokus paragraf pertama adalah menjelaskan bagaimana teknologi digital memperluas jangkauan pasar pelaku UMKM.</p>
        <div class="jawaban-akhir">Jawaban Benar: C (Dampak positif kemajuan teknologi terhadap perluasan pasar UMKM)</div>
    </div>

    <!-- Soal 14 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 14 <span class="tipe-badge">Konjungsi</span></span>
            <span>Teks: Transformasi Digital UMKM</span>
        </div>
        <p><strong>Soal:</strong> Kata penghubung antarkalimat yang menyatakan pertentangan pada paragraf kedua adalah...</p>
        <div class="section-title">Pembahasan:</div>
        <p>Konjungsi <em>"Kendati demikian"</em> digunakan untuk menghubungkan dua kalimat dengan makna kontras/pertentangan.</p>
        <div class="jawaban-akhir">Jawaban Benar: C (Kendati demikian)</div>
    </div>

    <!-- Soal 15 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 15 <span class="tipe-badge">Tantangan Digital</span></span>
            <span>Teks: Transformasi Digital UMKM</span>
        </div>
        <p><strong>Soal:</strong> Tantangan utama yang dihadapi UMKM dalam proses digitalisasi menurut teks adalah...</p>
        <div class="section-title">Pembahasan:</div>
        <p>Disebutkan secara eksplisit dalam teks bahwa rendahnya literasi digital dan risiko keamanan siber adalah tantangan utama.</p>
        <div class="jawaban-akhir">Jawaban Benar: D (Rendahnya tingkat literasi digital dan risiko keamanan siber)</div>
    </div>

    <!-- Soal 16 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 16 <span class="tipe-badge">Pola Paragraf</span></span>
            <span>Teks: Transformasi Digital UMKM</span>
        </div>
        <p><strong>Soal:</strong> Pola pengembangan paragraf kedua pada teks tersebut adalah...</p>
        <div class="section-title">Pembahasan:</div>
        <p>Paragraf memaparkan masalah (kendala literasi & keamanan data) lalu ditutup dengan solusi (sinergi pelatihan literasi).</p>
        <div class="jawaban-akhir">Jawaban Benar: C (Masalah dan solusi)</div>
    </div>

    <!-- Soal 17 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 17 <span class="tipe-badge">Kata Baku KBBI</span></span>
            <span>Tata Bahasa & Ejaan</span>
        </div>
        <p><strong>Soal:</strong> Penulisan kata serapan yang baku untuk memperbaiki kata 'proyeck' dan 'revitallisasi' adalah...</p>
        <div class="section-title">Pembahasan:</div>
        <p>Bentuk baku menurut KBBI adalah <strong>proyek</strong> (bukan projek/proyeck) dan <strong>revitalisasi</strong> (dengan satu huruf 'l').</p>
        <div class="jawaban-akhir">Jawaban Benar: A (Proyek, revitalisasi)</div>
    </div>

    <!-- Soal 18 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 18 <span class="tipe-badge">Tanda Baca</span></span>
            <span>Penggunaan Titik Dua (:)</span>
        </div>
        <p><strong>Soal:</strong> Penggunaan tanda baca titik dua (:) yang tepat terdapat pada kalimat: "Ayah membeli buah-buahan di pasar: apel, jeruk, dan mangga." Tentukan Benar atau Salah!</p>
        <div class="section-title">Pembahasan:</div>
        <p>Penggunaan titik dua setelah ungkapan pengantar lengkap yang diikuti perincian adalah benar sesuai pedoman EYD.</p>
        <div class="jawaban-akhir">Jawaban Benar: Benar (s1)</div>
    </div>

    <!-- Soal 19 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 19 <span class="tipe-badge">Konjungsi Subordinatif</span></span>
            <span>Kelengkapan Kalimat</span>
        </div>
        <p><strong>Soal:</strong> Konjungsi subordinatif yang tepat untuk melengkapi kalimat "Krisis energi global tidak akan teratasi [...] masyarakat dunia belum beralih ke sumber energi terbarukan." adalah...</p>
        <div class="section-title">Pembahasan:</div>
        <p>Konjungsi syarat yang tepat untuk menyatakan hubungan pengandaian/kondisi adalah <strong>jika</strong>.</p>
        <div class="jawaban-akhir">Jawaban Benar: B (jika)</div>
    </div>

    <!-- Soal 20 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 20 <span class="tipe-badge">Kalimat Efektif</span></span>
            <span>Ketepatan Struktur Kalimat</span>
        </div>
        <p><strong>Soal:</strong> Kalimat "Mahasiswa yang terlambat masuk ke dalam ruangan tidak diperkenankan mengikuti ujian." Tentukan Tepat atau Tidak Tepat!</p>
        <div class="section-title">Pembahasan:</div>
        <p>Kalimat tersebut memiliki subjek dan predikat yang utuh, logis, dan tidak bermakna ganda.</p>
        <div class="jawaban-akhir">Jawaban Benar: Tepat (s1)</div>
    </div>
</div>

</body>
</html>`;

export const PEMBAHASAN_TKA_BAHASA_INGGRIS_HTML = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pembahasan Try Out TKA Bahasa Inggris</title>
    <style>
        body {
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #f8fafc;
            color: #1e293b;
            margin: 0;
            padding: 24px;
            line-height: 1.6;
        }
        .container {
            max-width: 900px;
            margin: 0 auto;
            background: #ffffff;
            padding: 32px;
            border-radius: 16px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
            border: 1px solid #e2e8f0;
        }
        .header {
            text-align: center;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 20px;
            margin-bottom: 28px;
        }
        .header h1 {
            color: #0284c7;
            margin: 0 0 8px 0;
            font-size: 22px;
            font-weight: 800;
        }
        .header p {
            color: #64748b;
            margin: 0;
            font-size: 13px;
        }
        .soal-box {
            background-color: #ffffff;
            border: 1px solid #e2e8f0;
            border-left: 5px solid #0284c7;
            padding: 20px;
            margin-bottom: 24px;
            border-radius: 0 12px 12px 0;
            box-shadow: 0 1px 3px rgba(0,0,0,0.02);
        }
        .soal-header {
            font-weight: 700;
            color: #0284c7;
            margin-bottom: 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
        }
        .tipe-badge {
            background-color: #e0f2fe;
            color: #0369a1;
            font-size: 11px;
            padding: 3px 10px;
            border-radius: 9999px;
            font-weight: 600;
        }
        .jawaban-akhir {
            margin-top: 14px;
            background-color: #ecfdf5;
            border: 1px solid #a7f3d0;
            color: #065f46;
            padding: 10px 16px;
            border-radius: 8px;
            font-weight: 700;
            font-size: 13px;
        }
        .section-title {
            font-weight: 700;
            color: #334155;
            margin-top: 14px;
            margin-bottom: 6px;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="header">
        <h1>PEMBAHASAN LENGKAP SIMULASI TKA BAHASA INGGRIS</h1>
        <p>Reading Comprehension, Narrative, Procedural, Descriptive, Recount & Exposition Text</p>
    </div>

    <!-- Soal 1 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 1 <span class="tipe-badge">Narrative Text Summary</span></span>
            <span>Text 1: Son Tinh and Thuy Tinh</span>
        </div>
        <p><strong>Question:</strong> Which of the following outlines shows the correct main points of the story?</p>
        <div class="section-title">Explanation:</div>
        <p>Option B provides a complete and sequential synopsis: King Hung Vuong VI looked for a husband &rarr; Son Tinh and Thuy Tinh competed &rarr; Son Tinh brought gifts first and married the princess &rarr; Thuy Tinh attacked with floods but was defeated.</p>
        <div class="jawaban-akhir">Correct Answer: B</div>
    </div>

    <!-- Soal 2 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 2 <span class="tipe-badge">Cause & Effect</span></span>
            <span>Text 1: Son Tinh and Thuy Tinh</span>
        </div>
        <p><strong>Question:</strong> Why did Thuy Tinh attack Son Tinh after the wedding?</p>
        <div class="section-title">Explanation:</div>
        <p>Thuy Tinh attacked out of extreme anger and jealousy over losing the competition and the princess to Son Tinh.</p>
        <div class="jawaban-akhir">Correct Answer: A (He was jealous of Son Tinh's victory)</div>
    </div>

    <!-- Soal 3 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 3 <span class="tipe-badge">Comparison Table</span></span>
            <span>Text 1: Son Tinh and Thuy Tinh</span>
        </div>
        <p><strong>Question:</strong> Decide if each trait shows a Similarity or a Difference.</p>
        <div class="section-title">Explanation:</div>
        <ul>
            <li>Both are not humans: Spirit of Mountain vs Spirit of Waters (Similarity)</li>
            <li>They can control natural elements (Similarity)</li>
            <li>Rivalry in loving the King's daughter (Difference / Conflict)</li>
        </ul>
        <div class="jawaban-akhir">Correct Answer: S1: Similarity, S2: Similarity, S3: Difference</div>
    </div>

    <!-- Soal 4 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 4 <span class="tipe-badge">Vocabulary in Context</span></span>
            <span>Text 1: Son Tinh and Thuy Tinh</span>
        </div>
        <p><strong>Question:</strong> What does the phrase 'kept his promise' in the text mean?</p>
        <div class="section-title">Explanation:</div>
        <p>The idiom "kept one's promise" means to fulfill what was previously pledged or promised.</p>
        <div class="jawaban-akhir">Correct Answer: C (Did what he had promised to do)</div>
    </div>

    <!-- Soal 5 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 5 <span class="tipe-badge">Complex Multiple Choice</span></span>
            <span>Text 1: Son Tinh and Thuy Tinh</span>
        </div>
        <p><strong>Question:</strong> What is the main lesson of the story? (Click on every correct answer!)</p>
        <div class="section-title">Explanation:</div>
        <p>The fable teaches sportsmanship (A: accepting defeat gracefully), integrity (B: competing fairly), and conflict resolution (C: choosing peaceful alternatives over destructive anger).</p>
        <div class="jawaban-akhir">Correct Answer: A, B, C</div>
    </div>

    <!-- Soal 6 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 6 <span class="tipe-badge">Classification</span></span>
            <span>Text 2: How to Study in the Library</span>
        </div>
        <p><strong>Question:</strong> Categorize the activities as either preparation or breaks during study.</p>
        <div class="section-title">Explanation:</div>
        <ul>
            <li>Standing up &rarr; Breaks</li>
            <li>Bringing a book &rarr; Preparation</li>
            <li>Doing stretch &rarr; Breaks</li>
        </ul>
        <div class="jawaban-akhir">Correct Answer: S1: Breaks, S2: Preparation, S3: Breaks</div>
    </div>

    <!-- Soal 7 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 7 <span class="tipe-badge">Complex Multiple Choice</span></span>
            <span>Text 2: How to Study in the Library</span>
        </div>
        <p><strong>Question:</strong> How can we decide a certain table is perfect for studying according to the text?</p>
        <div class="section-title">Explanation:</div>
        <p>The text explicitly mentions finding a spot with good light (A) and avoiding sitting near noisy areas like the restroom (D).</p>
        <div class="jawaban-akhir">Correct Answer: A, D</div>
    </div>

    <!-- Soal 8 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 8 <span class="tipe-badge">Target Audience</span></span>
            <span>Text 2: How to Study in the Library</span>
        </div>
        <p><strong>Question:</strong> Who needs to read this infographic?</p>
        <div class="section-title">Explanation:</div>
        <p>The infographic is designed specifically as guidance for students using their school library.</p>
        <div class="jawaban-akhir">Correct Answer: A (The students of that school)</div>
    </div>

    <!-- Soal 9 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 9 <span class="tipe-badge">Complex Multiple Choice</span></span>
            <span>Text 2: How to Study in the Library</span>
        </div>
        <p><strong>Question:</strong> Which actions show disrespect for other students in the library?</p>
        <div class="section-title">Explanation:</div>
        <p>Speaking loudly (A), eating snacks inside (C), playing loud music (D), and moving furniture noisily (E) disrupt quiet library study.</p>
        <div class="jawaban-akhir">Correct Answer: A, C, D, E</div>
    </div>

    <!-- Soal 10 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 10 <span class="tipe-badge">Application</span></span>
            <span>Text 2: How to Study in the Library</span>
        </div>
        <p><strong>Question:</strong> What will you do before your next visit to the library?</p>
        <div class="section-title">Explanation:</div>
        <p>Step 1 "Prepare Your Materials" dictates bringing relevant books and stationery before entering.</p>
        <div class="jawaban-akhir">Correct Answer: B (Bringing the books and stationery that I will use)</div>
    </div>

    <!-- Soal 11 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 11 <span class="tipe-badge">Purpose Classification</span></span>
            <span>Text 3: Exploring Bali's Natural Wonders</span>
        </div>
        <p><strong>Question:</strong> What is the main purpose of visiting these places: conservation or relaxation?</p>
        <div class="section-title">Explanation:</div>
        <ul>
            <li>Munduk Waterfall &rarr; Relaxation</li>
            <li>West Bali National Park &rarr; Conservation (habitat of Bali Starling)</li>
            <li>Tegalalang Rice Terraces &rarr; Relaxation</li>
        </ul>
        <div class="jawaban-akhir">Correct Answer: S1: Relaxation, S2: Conservation, S3: Relaxation</div>
    </div>

    <!-- Soal 12 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 12 <span class="tipe-badge">Main Idea</span></span>
            <span>Text 3: Exploring Bali's Natural Wonders</span>
        </div>
        <p><strong>Question:</strong> The text mainly talks about Bali’s ...</p>
        <div class="section-title">Explanation:</div>
        <p>The article showcases Bali's remarkable natural beauty across diverse ecosystems from national parks to waterfalls and paddies.</p>
        <div class="jawaban-akhir">Correct Answer: C (stunning nature and remarkable sites)</div>
    </div>

    <!-- Soal 13 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 13 <span class="tipe-badge">Evidence Extraction</span></span>
            <span>Text 3: Exploring Bali's Natural Wonders</span>
        </div>
        <p><strong>Question:</strong> Which parts of the text best support the description of Bali as 'full of natural beauty'?</p>
        <div class="section-title">Explanation:</div>
        <p>Sentences A, C, and D depict natural elements (mangrove, coral reefs, mist on water, and waterfalls).</p>
        <div class="jawaban-akhir">Correct Answer: A, C, D</div>
    </div>

    <!-- Soal 14 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 14 <span class="tipe-badge">Detail Retrieval</span></span>
            <span>Text 4: Intern at a Sports Club</span>
        </div>
        <p><strong>Question:</strong> During the internship, what did the writer do every morning?</p>
        <div class="section-title">Explanation:</div>
        <p>Paragraph 2 explicitly states: "Every morning I had to wake up early, arrive on time, and follow instructions carefully."</p>
        <div class="jawaban-akhir">Correct Answer: D (Woke up early, arrived on time, and followed the instructions)</div>
    </div>

    <!-- Soal 15 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 15 <span class="tipe-badge">Character Traits</span></span>
            <span>Text 4: Intern at a Sports Club</span>
        </div>
        <p><strong>Question:</strong> What are the best words to describe the writer's personality during the internship?</p>
        <div class="section-title">Explanation:</div>
        <p>The writer demonstrated readiness to assist during emergencies (A), dedication and responsibility (C), and cooperative teamwork (D).</p>
        <div class="jawaban-akhir">Correct Answer: A, C, D</div>
    </div>

    <!-- Soal 16 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 16 <span class="tipe-badge">Inference</span></span>
            <span>Text 4: Intern at a Sports Club</span>
        </div>
        <p><strong>Question:</strong> What will the writer most likely do after finishing the internship?</p>
        <div class="section-title">Explanation:</div>
        <p>The closing sentence expresses: "I hope to work in a sports club again in the future."</p>
        <div class="jawaban-akhir">Correct Answer: C (Look for another chance to work in a sports club)</div>
    </div>

    <!-- Soal 17 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 17 <span class="tipe-badge">Cause & Effect</span></span>
            <span>Text 5: Social Media and Teen Mental Health</span>
        </div>
        <p><strong>Question:</strong> What will happen if teenagers have poor sleep quality?</p>
        <div class="section-title">Explanation:</div>
        <p>Paragraph 3 highlights that sleep deprivation causes loss of classroom focus (B), lower academic grades (A), and elevated stress (C).</p>
        <div class="jawaban-akhir">Correct Answer: A, B, C</div>
    </div>

    <!-- Soal 18 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 18 <span class="tipe-badge">Argumentative Strength</span></span>
            <span>Text 5: Social Media and Teen Mental Health</span>
        </div>
        <p><strong>Question:</strong> Which of the following additional facts would most likely make the text more persuasive?</p>
        <div class="section-title">Explanation:</div>
        <p>Empirical scientific studies (A), real case testimonies (B), and licensed medical/psychiatric expert opinions (E) strengthen argumentative credibility.</p>
        <div class="jawaban-akhir">Correct Answer: A, B, E</div>
    </div>

    <!-- Soal 19 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 19 <span class="tipe-badge">Claim Support</span></span>
            <span>Text 5: Social Media and Teen Mental Health</span>
        </div>
        <p><strong>Question:</strong> Which statements from the text support the author's argument that social media harms teen mental health?</p>
        <div class="section-title">Explanation:</div>
        <p>Quotes regarding unrealistic social comparison (A), late-night phone habits ruining sleep (B), and cyberbullying distress (E) directly substantiate the thesis.</p>
        <div class="jawaban-akhir">Correct Answer: A, B, E</div>
    </div>

    <!-- Soal 20 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 20 <span class="tipe-badge">Main Impression</span></span>
            <span>Text 5: Social Media and Teen Mental Health</span>
        </div>
        <p><strong>Question:</strong> What is the most prominent impression you gain from the text?</p>
        <div class="section-title">Explanation:</div>
        <p>The essay leaves deep impressions on how unrealistic comparison fosters insecurity (A), sleep loss harms academic performance (C), and cyberbullying threatens psychological well-being (D).</p>
        <div class="jawaban-akhir">Correct Answer: A, C, D</div>
    </div>
</div>

</body>
</html>`;
