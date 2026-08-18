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

export const PEMBAHASAN_TKA_BAHASA_INDONESIA_LANJUT_HTML = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pembahasan Try Out TKA Bahasa Indonesia Tingkat Lanjut</title>
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
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
            border: 1px solid #e2e8f0;
        }
        .header {
            text-align: center;
            border-bottom: 2px solid #fecdd3;
            padding-bottom: 20px;
            margin-bottom: 28px;
        }
        .header h1 {
            color: #be123c;
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
            border-left: 5px solid #e11d48;
            padding: 20px;
            margin-bottom: 24px;
            border-radius: 0 12px 12px 0;
            box-shadow: 0 1px 3px rgba(0,0,0,0.02);
        }
        .soal-header {
            font-weight: 700;
            color: #9f1239;
            margin-bottom: 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
        }
        .tipe-badge {
            background-color: #ffe4e6;
            color: #be123c;
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
        <h1>KUNCI & PEMBAHASAN TKA BAHASA INDONESIA TINGKAT LANJUT (10 SOAL)</h1>
        <p>Standar Pusmendik: Proposal Kegiatan, Apresiasi Puisi Huesca & Evaluasi Teks Ulasan Budaya Ciptagelar</p>
    </div>

    <!-- BAGIAN 1: PROPOSAL KEGIATAN (SOAL 1 - 3) -->
    <div style="background:#fff1f2; border:1px solid #fecdd3; padding:16px; border-radius:12px; margin-bottom:20px; font-size:13px; line-height:1.6; color:#881337;">
        <strong>BACAAN TEKS PROPOSAL KEGIATAN (Untuk Soal No. 1 s.d. 3):</strong><br/>
        <em>Pemanfaatan Teknologi Digital untuk Meningkatkan Daya Saing UKM Pangan Lokal</em><br/>
        Dalam beberapa tahun terakhir, perkembangan teknologi digital telah membuka peluang besar bagi pelaku Usaha Kecil dan Menengah (UKM), khususnya di sektor pangan lokal. Namun, banyak UKM yang belum mampu memanfaatkan teknologi secara optimal karena keterbatasan akses informasi, pelatihan, dan pendanaan. Berdasarkan survei yang dilakukan oleh Dinas Koperasi dan UKM Provinsi Jawa Barat pada 2023, hanya 35% UKM pangan yang aktif menggunakan platform digital untuk pemasaran...
    </div>

    <!-- Soal 1 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 1 <span class="tipe-badge">Tabel Sesuai / Tidak Sesuai</span></span>
            <span>Kesesuaian Usulan Program & Data Pendukung</span>
        </div>
        <p><strong>Soal:</strong> Dari pernyataan-pernyataan berikut, manakah pernyataan yang mengungkapkan kesesuaian antara usulan program dan data pendukung sesuai teks proposal tersebut?</p>
        <ul>
            <li><strong>Pernyataan 1:</strong> Usulan Program: Mengajukan program pelatihan digitalisasi bagi 100 pelaku UKM di tiga kabupaten. | Data Pendukung: Hanya 35% UKM pangan aktif menggunakan platform digital. &rarr; <strong>Sesuai</strong></li>
            <li><strong>Pernyataan 2:</strong> Usulan Program: Mengusulkan pelatihan e-commerce, promosi digital, dan penggunaan dompet digital. | Data Pendukung: Nilai transaksi e-commerce nasional mencapai 476 triliun rupiah dan 60% berupa produk konsumsi termasuk pangan. &rarr; <strong>Sesuai</strong></li>
            <li><strong>Pernyataan 3:</strong> Usulan Program: Meminta Kementerian turun langsung ke lapangan sebelum menyetujui usulan. | Data Pendukung: Data survei telah menunjukkan kebutuhan pelatihan tanpa menyebut perlunya kunjungan langsung oleh kementerian. &rarr; <strong>Tidak Sesuai</strong></li>
        </ul>
        <div class="section-title">Pembahasan Solusi:</div>
        <p>Pernyataan 1 selaras dengan data survei 35% UKM digital yang melandasi urgensi usulan pelatihan. Pernyataan 2 selaras dengan data BI Rp476 triliun produk konsumsi rumah tangga yang mendasari pelatihan e-commerce dan dompet digital. Pernyataan 3 Tidak Sesuai karena proposal mengajukan anggaran Rp450 juta tanpa meminta kementerian turun langsung ke lapangan.</p>
        <div class="jawaban-akhir">Kunci Jawaban: Sesuai, Sesuai, Tidak Sesuai</div>
    </div>

    <!-- Soal 2 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 2 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Koherensi Antarparagraf</span>
        </div>
        <p><strong>Soal:</strong> Hubungan koherensi antara paragraf ke-2 dan ke-3 adalah ....</p>
        <div class="section-title">Pembahasan Solusi:</div>
        <p>Paragraf ke-2 memaparkan latar belakang alasan pengajuan (pergeseran tren transaksi konsumen ke daring 60% dan ketatnya persaingan produk industri), kemudian disambung secara koheren pada paragraf ke-3 dengan pengajuan program pelatihan "Digitalisasi UKM Pangan Lokal" yang diperkuat dengan rincian tujuan serta sasarannya.</p>
        <div class="jawaban-akhir">Kunci Jawaban: (B) alasan pengajuan program pelatihan yang diperkuat tujuan</div>
    </div>

    <!-- Soal 3 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 3 <span class="tipe-badge">Tabel Logis / Tidak Logis</span></span>
            <span>Evaluasi Kelogisan Argumen</span>
        </div>
        <p><strong>Soal:</strong> Berdasarkan teks, manakah argumen yang logis dari pernyataan-pernyataan berikut?</p>
        <ul>
            <li><strong>Argumen 1:</strong> Program pelatihan penting karena teknologi digital pasti memperluas jejaring. &rarr; <strong>Tidak Logis</strong> (klaim mutlak kata "pasti" tanpa dasar rincian).</li>
            <li><strong>Argumen 2:</strong> Program pelatihan penting karena teknologi digital tidak hanya memperluas pasar, tetapi juga menekan biaya distribusi, meningkatkan efisiensi, dan mempercepat proses transaksi. &rarr; <strong>Logis</strong> (didukung data paragraf ke-4).</li>
            <li><strong>Argumen 3:</strong> Usulan program didasarkan pada data survei dan kebutuhan nyata di lapangan. &rarr; <strong>Logis</strong> (merujuk data survei Dinas Koperasi Jabar 2023 dan BI 2022).</li>
        </ul>
        <div class="jawaban-akhir">Kunci Jawaban: Tidak Logis, Logis, Logis</div>
    </div>

    <!-- BAGIAN 2: PUISI HUESCA (SOAL 4 - 6) -->
    <div style="background:#fff1f2; border:1px solid #fecdd3; padding:16px; border-radius:12px; margin-bottom:20px; font-size:13px; line-height:1.6; color:#881337;">
        <strong>KUTIPAN PUISI HUESCA (Untuk Soal No. 4 s.d. 6):</strong><br/>
        <em>Karya John Cornford (Diterjemahkan oleh Chairil Anwar)</em><br/>
        Huesca jiwa di dunia yang hilang / atas sayap kenangan padamu / adalah derita di sisiku / bayangan berkelebat tinjauan beku / angin bangkit ketika senja / ngingatkan musim gugur akan tiba / aku cemas bisa kehilangan kau / aku cemas pada kecemasanku sendiri / di batu penghabisan ke Huesca / batas terakhir dari kebanggaan kita / kenanglah sayang, dengan mesra / kau kubayangkan di sisiku ada / dan jika untung malang menghampirkan / aku dalam kuburan dangkal / ingatlah sebisu-segala yang indah / dan cintaku yang kekal.
    </div>

    <!-- Soal 4 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 4 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Makna Kiasan Puisi</span>
        </div>
        <p><strong>Soal:</strong> Makna kiasan <em>batu penghabisan</em> dan <em>batas terakhir</em> memperjelas kondisi yang dialami aku lirik (penyair) tentang ....</p>
        <div class="section-title">Pembahasan Solusi:</div>
        <p>Frasa metaforis "batu penghabisan" dan "batas terakhir" merefleksikan batas akhir kehidupan dan momen perpisahan yang tak terhindarkan antara penyair dengan kekasihnya di front pertempuran Huesca.</p>
        <div class="jawaban-akhir">Kunci Jawaban: (A) perpisahan antara penyair dengan orang yang dikasihi</div>
    </div>

    <!-- Soal 5 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 5 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Citraan Penglihatan & Simbolik</span>
        </div>
        <p><strong>Soal:</strong> Makna citraan penglihatan <em>ketika senja</em> dan <em>musim gugur</em> mengkonkretkan gagasan penyair tentang ....</p>
        <div class="section-title">Pembahasan Solusi:</div>
        <p>Simbol citraan visual "senja" (penghujung hari) dan "musim gugur" (gugurnya kehidupan menjelang musim dingin/kematian) merupakan metafora konkret yang melambangkan fase menjelang akhir kehidupan manusia.</p>
        <div class="jawaban-akhir">Kunci Jawaban: (E) kondisi menjelang akhir kehidupan</div>
    </div>

    <!-- Soal 6 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 6 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Suasana Hati (Tone / Mood)</span>
        </div>
        <p><strong>Soal:</strong> Suasana hati yang muncul setelah membaca bait puisi tersebut adalah ....</p>
        <div class="section-title">Pembahasan Solusi:</div>
        <p>Larik "aku cemas bisa kehilangan kau / aku cemas pada kecemasanku sendiri" secara eksplisit membangun suasana hati kesedihan, duka mendalam, dan ketakutan kehilangan orang yang sangat dikasihi.</p>
        <div class="jawaban-akhir">Kunci Jawaban: (D) kesedihan karena takut kehilangan orang terkasih</div>
    </div>

    <!-- BAGIAN 3: TEKS ULASAN KAMPUNG ADAT CIPTAGELAR (SOAL 7 - 10) -->
    <div style="background:#fff1f2; border:1px solid #fecdd3; padding:16px; border-radius:12px; margin-bottom:20px; font-size:13px; line-height:1.6; color:#881337;">
        <strong>BACAAN TEKS ULASAN KAMPUNG ADAT CIPTAGELAR (Untuk Soal No. 7 s.d. 10):</strong><br/>
        Memuat Teks Digital (Ulasan Pengunjung: Rini Kartika, Arif Nugroho, Linda Mariana, Bagas Permana, Melati Dewi) dan Teks Cetak (Eksplorasi Budaya yang Otentik di Kampung Adat Ciptagelar).
    </div>

    <!-- Soal 7 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 7 <span class="tipe-badge">Pilihan Ganda Kompleks (Checkbox)</span></span>
            <span>Kalimat Evaluasi Opini</span>
        </div>
        <p><strong>Soal:</strong> Manakah kalimat yang menyatakan evaluasi dalam teks ulasan cetak dan ulasan digital tersebut? (Pilihan jawaban benar lebih dari satu)</p>
        <ul>
            <li>&check; <strong>Opsi 1:</strong> Saya merasa seperti kembali ke masa lalu, hidup dalam harmoni dengan alam. (Evaluasi reflektif Rini Kartika)</li>
            <li>&check; <strong>Opsi 3:</strong> Menurut saya, pernyataan 'semua orang pasti jatuh cinta' terlalu menggeneralisasi. (Evaluasi kritis Bagas Permana)</li>
            <li>&check; <strong>Opsi 5:</strong> Kekuatan desa ini bukan pada fasilitas wisata modern, melainkan pada kesederhanaan hidup yang penuh makna. (Evaluasi penutup pengulas cetak)</li>
        </ul>
        <div class="jawaban-akhir">Kunci Jawaban: Opsi 1, 3, dan 5 dicentang</div>
    </div>

    <!-- Soal 8 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 8 <span class="tipe-badge">Tabel Tepat / Tidak Tepat</span></span>
            <span>Pilihan Kata Kesederhanaan</span>
        </div>
        <p><strong>Soal:</strong> Manakah pilihan kata yang tepat untuk menggambarkan kesederhanaan Kampung Ciptagelar?</p>
        <ul>
            <li><strong>Kalimat 1:</strong> Suasana yang jauh dari kebisingan kota ini dianggap cocok bagi siapa pun yang ingin beristirahat sekaligus belajar dari kearifan lokal. &rarr; <strong>Tepat</strong></li>
            <li><strong>Kalimat 2:</strong> Tempat ini bukan sekadar destinasi, tetapi ruang untuk menyelami makna hidup yang sederhana namun bermakna. &rarr; <strong>Tepat</strong></li>
            <li><strong>Kalimat 3:</strong> Kampung ini menawarkan kehidupan masyarakat adat Sunda yang masih memegang teguh nilai-nilai adat dan tata cara warisan leluhur. &rarr; <strong>Tidak Tepat</strong> (menekankan aspek ketaatan adat leluhur secara umum, bukan kesederhanaan).</li>
        </ul>
        <div class="jawaban-akhir">Kunci Jawaban: Tepat, Tepat, Tidak Tepat</div>
    </div>

    <!-- Soal 9 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 9 <span class="tipe-badge">Pilihan Ganda Kompleks (Checkbox)</span></span>
            <span>Kalimat Majemuk Setara Koordinatif</span>
        </div>
        <p><strong>Soal:</strong> Manakah kalimat yang merupakan kalimat majemuk setara dalam teks ulasan digital dan cetak tersebut? (Pilihan jawaban benar lebih dari satu)</p>
        <ul>
            <li>&check; <strong>Opsi 2:</strong> Namun, ia juga mencatat perlunya peningkatan informasi daring terkait aturan kunjungan agar wisatawan baru lebih <em>siap dan nyaman</em>. (Setara koordinatif predikatif)</li>
            <li>&check; <strong>Opsi 4:</strong> Kami merasa sangat dihargai sebagai tamu, <em>dan</em> pengalaman berinteraksi langsung dengan masyarakat adat memberikan kesan yang sulit dilupakan. (Setara penggabungan konjungsi 'dan')</li>
            <li>&check; <strong>Opsi 5:</strong> Ia mengikuti tur budaya yang dipandu oleh sesepuh adat <em>dan</em> merasakan kedalaman nilai-nilai spiritual yang dijunjung tinggi oleh masyarakat. (Setara penggabungan predikat)</li>
        </ul>
        <div class="jawaban-akhir">Kunci Jawaban: Opsi 2, 4, dan 5 dicentang</div>
    </div>

    <!-- Soal 10 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 10 <span class="tipe-badge">Tabel Sesuai / Tidak Sesuai</span></span>
            <span>Kesesuaian Ulasan & Fakta</span>
        </div>
        <p><strong>Soal:</strong> Manakah pernyataan yang mengungkapkan kesesuaian antara ulasan dan fakta dalam teks ulasan digital dan cetak tersebut?</p>
        <ul>
            <li><strong>Pernyataan 1:</strong> Ulasan: Tempat ini cocok untuk siapa pun yang ingin rehat dari hiruk-pikuk kota. | Fakta: Suasana kampung yang tenang, sejuk, dan jauh dari kebisingan kota. &rarr; <strong>Sesuai</strong></li>
            <li><strong>Pernyataan 2:</strong> Ulasan: Semua orang pasti akan jatuh cinta pada keunikan Ciptagelar. | Fakta: Tidak semua pengunjung merasa nyaman, seperti ulasan Bagas Permana. &rarr; <strong>Tidak Sesuai</strong></li>
            <li><strong>Pernyataan 3:</strong> Ulasan: Saya merasa seperti kembali ke masa lalu, hidup dalam harmoni dengan alam. | Fakta: Kehidupan tradisional tanpa listrik, penuh nilai adat dan kesederhanaan. &rarr; <strong>Sesuai</strong></li>
        </ul>
        <div class="jawaban-akhir">Kunci Jawaban: Sesuai, Tidak Sesuai, Sesuai</div>
    </div>
</div>

</body>
</html>`;

export const PEMBAHASAN_TKA_BAHASA_INGGRIS_LANJUT_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Answer Key & Solutions - Advanced English TKA SMA</title>
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
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
            border: 1px solid #e2e8f0;
        }
        .header {
            text-align: center;
            border-bottom: 2px solid #bae6fd;
            padding-bottom: 20px;
            margin-bottom: 28px;
        }
        .header h1 {
            color: #0369a1;
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
            color: #075985;
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
        <h1>ANSWER KEYS & EXPLANATIONS: ADVANCED ENGLISH TKA SMA</h1>
        <p>HOTS Academic Modules: Rhetoric, Inversion, Intergenerational Ethics, Epistemic Synthesis & Nuanced Lexicon</p>
    </div>

    <!-- Question 1 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 1 <span class="tipe-badge">Paradox Identification</span></span>
            <span>Digital Hyperconnectivity</span>
        </div>
        <p><strong>Question:</strong> What primary paradox is highlighted in the opening paragraph?</p>
        <div class="section-title">Detailed Explanation:</div>
        <p>The passage explicitly states that despite being technically more reachable than ever, individuals report unprecedented zeniths of social isolation and cognitive fragmentation.</p>
        <div class="jawaban-akhir">Correct Answer: B (Unprecedented technical reachability coincides with increasing feelings of social alienation and cognitive fragmentation)</div>
    </div>

    <!-- Question 2 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 2 <span class="tipe-badge">Cause & Effect</span></span>
            <span>Algorithmic Echo Chambers</span>
        </div>
        <p><strong>Question:</strong> How do recommendation algorithms erode collective epistemic trust?</p>
        <div class="section-title">Explanation:</div>
        <p>Paragraph 2 emphasizes that recommendation algorithms feed confirmation biases and create ideological echo chambers that calcify tribal mentalities.</p>
        <div class="jawaban-akhir">Correct Answer: B (By fostering ideological echo chambers that reinforce tribal biases through affective polarization)</div>
    </div>

    <!-- Question 3 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 3 <span class="tipe-badge">Vocabulary in Context</span></span>
            <span>Calcifying</span>
        </div>
        <p><strong>Question:</strong> Meaning of 'calcifying' in the context of ideological positions?</p>
        <div class="section-title">Explanation:</div>
        <p>'Calcifying' metaphorically means hardening, solidifying, and making perspectives rigid or unyielding to reason.</p>
        <div class="jawaban-akhir">Correct Answer: A (Solidifying and making unyielding)</div>
    </div>

    <!-- Question 4 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 4 <span class="tipe-badge">Tone Analysis</span></span>
            <span>Author's Attitude</span>
        </div>
        <p><strong>Question:</strong> Tone of the final concluding paragraph?</p>
        <div class="section-title">Explanation:</div>
        <p>The author advocates constructive solutions involving structural redesign and pedagogical reforms to address the issue.</p>
        <div class="jawaban-akhir">Correct Answer: B (Constructive and reform-oriented, urging structural and pedagogical interventions)</div>
    </div>

    <!-- Question 5 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 5 <span class="tipe-badge">Ethical Philosophy</span></span>
            <span>Usufructuary Trust</span>
        </div>
        <p><strong>Question:</strong> What does 'usufructuary trust' entail regarding planetary resources?</p>
        <div class="section-title">Explanation:</div>
        <p>A usufructuary trust permits the present generation to benefit from ecological resources while maintaining their vitality for future generations.</p>
        <div class="jawaban-akhir">Correct Answer: B (Current generations may utilize natural resources but are morally obligated to preserve their ecological integrity for future generations)</div>
    </div>

    <!-- Question 6 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 6 <span class="tipe-badge">Inference</span></span>
            <span>Moral Asymmetry</span>
        </div>
        <p><strong>Question:</strong> Why does moral asymmetry exist between present and unborn generations?</p>
        <div class="section-title">Explanation:</div>
        <p>Future persons bear the catastrophic consequences of modern environmental degradation but possess zero contemporary voting or legislative power.</p>
        <div class="jawaban-akhir">Correct Answer: B (Future persons cannot participate in or influence contemporary legislative and economic decisions that affect their environment)</div>
    </div>

    <!-- Question 7 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 7 <span class="tipe-badge">Metaphor Analysis</span></span>
            <span>Temporal Myopia</span>
        </div>
        <p><strong>Question:</strong> Meaning of 'temporal myopia' in environmental policymaking?</p>
        <div class="section-title">Explanation:</div>
        <p>'Temporal myopia' denotes short-sighted decision-making that prioritizes immediate economic gains over long-term planetary viability.</p>
        <div class="jawaban-akhir">Correct Answer: A (Shortsightedness that prioritizes immediate benefits over long-term planetary consequences)</div>
    </div>

    <!-- Question 8 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 8 <span class="tipe-badge">True/False Table</span></span>
            <span>Climate Ethics</span>
        </div>
        <p><strong>Statements Evaluation:</strong></p>
        <ul>
            <li>High discount rates devalue future welfare: <strong>True</strong></li>
            <li>Future generations have equal parliamentary votes: <strong>False</strong></li>
            <li>Carbon emissions inflict trans-temporal harms: <strong>True</strong></li>
        </ul>
        <div class="jawaban-akhir">Correct Answer: S1 (True), S2 (False), S3 (True)</div>
    </div>

    <!-- Question 9 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 9 <span class="tipe-badge">Epistemology</span></span>
            <span>Linguistic Understanding in AI</span>
        </div>
        <p><strong>Question:</strong> Core epistemological dispute regarding LLMs?</p>
        <div class="section-title">Explanation:</div>
        <p>The central philosophical tension is whether probabilistic token prediction across vast datasets constitutes genuine semantic comprehension and intentionality.</p>
        <div class="jawaban-akhir">Correct Answer: A (Statistical token manipulation can be equated with genuine semantic understanding and intentionality)</div>
    </div>

    <!-- Question 10 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 10 <span class="tipe-badge">Scientific Theory</span></span>
            <span>Stochastic Parrot Concept</span>
        </div>
        <p><strong>Question:</strong> What does the 'stochastic parrot' hypothesis argue?</p>
        <div class="section-title">Explanation:</div>
        <p>It asserts that language models manipulate syntax probabilistically without true causal comprehension or grounding in experiential reality.</p>
        <div class="jawaban-akhir">Correct Answer: B (Produce syntactically coherent text probabilistically without physical grounding or causal models)</div>
    </div>

    <!-- Question 11 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 11 <span class="tipe-badge">Advanced Syntax</span></span>
            <span>Inverted 3rd Conditional</span>
        </div>
        <p><strong>Question:</strong> Inverted subjunctive form of "If the committee had scrutinized..."?</p>
        <div class="section-title">Explanation:</div>
        <p>In formal inverted third conditional structures, 'If + subject + had + V3' transforms into 'Had + subject + V3'.</p>
        <div class="jawaban-akhir">Correct Answer: A (Had the regulatory committee scrutinized the financial audit more rigorously, the fraudulent transactions would have been thwarted.)</div>
    </div>

    <!-- Question 12 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 12 <span class="tipe-badge">Syntax</span></span>
            <span>Negative Adverb Inversion</span>
        </div>
        <p><strong>Question:</strong> Correct word order following initial negative adverb 'Seldom'?</p>
        <div class="section-title">Explanation:</div>
        <p>Fronted restrictive adverbs require subject-auxiliary inversion: "Seldom have literary critics witnessed...".</p>
        <div class="jawaban-akhir">Correct Answer: A (have literary critics witnessed)</div>
    </div>

    <!-- Question 13 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 13 <span class="tipe-badge">Discourse Markers</span></span>
            <span>Concessive Connectors</span>
        </div>
        <p><strong>Question:</strong> Appropriate connector for contrasting efficacy with high manufacturing cost?</p>
        <div class="section-title">Explanation:</div>
        <p>'Nonetheless' introduces a direct concession and contrast between positive lab findings and practical hurdles.</p>
        <div class="jawaban-akhir">Correct Answer: A (nonetheless)</div>
    </div>

    <!-- Question 14 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 14 <span class="tipe-badge">Information Focus</span></span>
            <span>Cleft Sentences</span>
        </div>
        <p><strong>Question:</strong> It-cleft structure emphasizing the location of discovery?</p>
        <div class="section-title">Explanation:</div>
        <p>An it-cleft emphasizing the prepositional phrase follows: "It was [during the polar expedition] that Dr. Aris discovered the novel enzyme."</p>
        <div class="jawaban-akhir">Correct Answer: A (It was during the polar expedition that Dr. Aris discovered the novel enzyme.)</div>
    </div>

    <!-- Question 15 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 15 <span class="tipe-badge">Rhetoric</span></span>
            <span>Fallacy Identification</span>
        </div>
        <p><strong>Question:</strong> Fallacy committed in appealing to physicists on environmental policy?</p>
        <div class="section-title">Explanation:</div>
        <p>Citing expertise outside its direct disciplinary domain combined with dismissing dissenters as uneducated commits Appeal to Inappropriate Authority & False Dilemma.</p>
        <div class="jawaban-akhir">Correct Answer: A (Appeal to Inappropriate Authority & False Dilemma)</div>
    </div>

    <!-- Question 16 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 16 <span class="tipe-badge">Lexical Connotation</span></span>
            <span>Nuanced Adjectives</span>
        </div>
        <p><strong>Question:</strong> Positive term for diplomatic insight and discernment?</p>
        <div class="section-title">Explanation:</div>
        <p>'Astute' carries a highly respectable connotation of sharp discernment and wisdom, whereas 'cunning' and 'crafty' carry pejorative overtones.</p>
        <div class="jawaban-akhir">Correct Answer: A (Astute)</div>
    </div>

    <!-- Question 17 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 17 <span class="tipe-badge">Grammar</span></span>
            <span>Mandative Subjunctive</span>
        </div>
        <p><strong>Question:</strong> Strict formal subjunctive after 'recommended that'?</p>
        <div class="section-title">Explanation:</div>
        <p>The mandative subjunctive requires the base form of the verb: "recommended that the algorithm be subjected...".</p>
        <div class="jawaban-akhir">Correct Answer: A (The ethics oversight board recommended that the controversial algorithm be subjected to an independent audit before public rollout.)</div>
    </div>

    <!-- Question 18 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 18 <span class="tipe-badge">Critical Synthesis</span></span>
            <span>Reconciling Perspectives</span>
        </div>
        <p><strong>Question:</strong> Optimal synthesis of worker autonomy and teamwork innovation?</p>
        <div class="section-title">Explanation:</div>
        <p>An effective synthesis acknowledges the strengths of both arguments while proposing a balanced hybrid model.</p>
        <div class="jawaban-akhir">Correct Answer: A (While remote work fosters individual flexibility and ecological benefits, organizations must devise hybrid structures to prevent the erosion of collaborative synergy.)</div>
    </div>

    <!-- Question 19 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 19 <span class="tipe-badge">Coherence</span></span>
            <span>Avoiding Dangling Modifiers</span>
        </div>
        <p><strong>Question:</strong> Sentence with correct participle subject agreement?</p>
        <div class="section-title">Explanation:</div>
        <p>The subject following the introductory participle clause "Having synthesized..." must be the agents who performed the synthesis (the researchers).</p>
        <div class="jawaban-akhir">Correct Answer: A (Having synthesized the biochemical compound, the researchers documented the reaction rates in their laboratory ledger.)</div>
    </div>

    <!-- Question 20 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Question 20 <span class="tipe-badge">Academic Conventions</span></span>
            <span>Stylistic Norms</span>
        </div>
        <p><strong>Statements Evaluation:</strong></p>
        <ul>
            <li>Hedging prevents unsubstantiated absolutes: <strong>True</strong></li>
            <li>Colloquialisms & contractions are encouraged: <strong>False</strong></li>
            <li>Nominalization is standard in academic registers: <strong>True</strong></li>
        </ul>
        <div class="jawaban-akhir">Correct Answer: S1 (True), S2 (False), S3 (True)</div>
    </div>
</div>

</body>
</html>`;

export const PEMBAHASAN_TKA_KIMIA_1_HTML = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pembahasan Try Out TKA Kimia 1</title>
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
            color: #d97706;
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
            border-left: 5px solid #d97706;
            padding: 20px;
            margin-bottom: 24px;
            border-radius: 0 12px 12px 0;
            box-shadow: 0 1px 3px rgba(0,0,0,0.02);
        }
        .soal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 700;
            color: #b45309;
            margin-bottom: 12px;
            border-bottom: 1px dashed #e2e8f0;
            padding-bottom: 8px;
            font-size: 14px;
        }
        .tipe-badge {
            background: #fef3c7;
            color: #92400e;
            padding: 2px 8px;
            border-radius: 6px;
            font-size: 11px;
            font-weight: 800;
            text-transform: uppercase;
        }
        .section-title {
            font-weight: 700;
            color: #0f172a;
            margin-top: 14px;
            margin-bottom: 6px;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .jawaban-akhir {
            background-color: #fef9c3;
            color: #854d0e;
            font-weight: bold;
            padding: 10px 14px;
            border-radius: 8px;
            margin-top: 14px;
            border: 1px solid #fde047;
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
        }
        ul, ol {
            margin: 8px 0;
            padding-left: 20px;
        }
        li {
            margin-bottom: 4px;
        }
        pre {
            background: #f1f5f9;
            padding: 12px;
            border-radius: 8px;
            font-family: 'Courier New', Courier, monospace;
            font-size: 13px;
            overflow-x: auto;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="header">
        <h1>PEMBAHASAN RESMI TRY OUT TKA KIMIA 1</h1>
        <p>Solusi Langkah Demi Langkah Berdasarkan Analisis Stoikiometri, Konseptual & Kurikulum Merdeka TKA SMA</p>
    </div>

    <!-- Soal 1 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 1 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Larutan Penyangga (Buffer Asam)</span>
        </div>
        <p><strong>Data:</strong></p>
        <ul>
            <li>Volume asam asetat ($\\text{CH}_3\\text{COOH}$) = $20\\text{ mL}$, Konsentrasi = $0{,}1\\text{ M}$</li>
            <li>Volume natrium asetat ($\\text{CH}_3\\text{COONa}$) = $20\\text{ mL}$, Konsentrasi = $0{,}1\\text{ M}$</li>
            <li>Tetapan ionisasi $K_a = 1 \\times 10^{-5}$</li>
        </ul>
        <div class="section-title">Langkah Penyelesaian:</div>
        <ul>
            <li>Hitung mol masing-masing zat:<br>
                $\\text{mol } \\text{CH}_3\\text{COOH} = 20\\text{ mL} \\times 0{,}1\\text{ M} = 2\\text{ mmol}$<br>
                $\\text{mol } \\text{CH}_3\\text{COONa} = 20\\text{ mL} \\times 0{,}1\\text{ M} = 2\\text{ mmol}$
            </li>
            <li>Hitung $[\\text{H}^+]$ menggunakan rumus buffer asam:<br>
                $$[\\text{H}^+] = K_a \\times \\frac{\\text{mol asam}}{\\text{mol garam}} = (1 \\times 10^{-5}) \\times \\frac{2}{2} = 1 \\times 10^{-5}\\text{ M}$$
            </li>
            <li>Hitung $\\text{pH}$:<br>
                $$\\text{pH} = -\\log[\\text{H}^+] = -\\log(1 \\times 10^{-5}) = 5$$
            </li>
        </ul>
        <div class="jawaban-akhir">Jawaban: B (5)</div>
    </div>

    <!-- Soal 2 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 2 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Identifikasi Atom Karbon (Kimia Organik)</span>
        </div>
        <p><strong>Struktur Senyawa:</strong></p>
        <pre>
          CH₃ (f)
        |
CH₃ - CH₂ - CH₂ - C  -  CH - CH₃ (g)
(a)   (b)   (c)   |     |
                 CH₃(d) CH₃ (e)
        </pre>
        <div class="section-title">Klasifikasi Atom Karbon:</div>
        <ul>
            <li><strong>C Primer ($1^\\circ$):</strong> Mengikat 1 atom C lain $\\rightarrow$ gugus $-\\text{CH}_3$ pada (a), (d), (f), (g), (e) $\\rightarrow$ <strong>5 buah</strong>.</li>
            <li><strong>C Sekunder ($2^\\circ$):</strong> Mengikat 2 atom C lain $\\rightarrow$ gugus $-\\text{CH}_2-$ pada (b), (c) $\\rightarrow$ <strong>2 buah</strong>.</li>
            <li><strong>C Tersier ($3^\\circ$):</strong> Mengikat 3 atom C lain $\\rightarrow$ gugus $-\\text{CH}-$ yang mengikat dua $-\\text{CH}_3$ dan satu C kuartener $\\rightarrow$ <strong>1 buah</strong>.</li>
            <li><strong>C Kuartener ($4^\\circ$):</strong> Mengikat 4 atom C lain $\\rightarrow$ atom C pusat $\\rightarrow$ <strong>1 buah</strong>.</li>
        </ul>
        <div class="jawaban-akhir">Jawaban: C (5 dan 1)</div>
    </div>

    <!-- Soal 3 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 3 <span class="tipe-badge">Menjodohkan / Matriks</span></span>
            <span>Variabel Penelitian Kimia</span>
        </div>
        <div class="section-title">Analisis Variabel:</div>
        <ul>
            <li><strong>Variabel Bebas:</strong> Faktor yang sengaja dimanipulasi/diubah $\\rightarrow$ <strong>Suhu</strong> (karena diubah: "Ketika suhu dinaikkan...").</li>
            <li><strong>Variabel Terikat:</strong> Faktor yang merespons/berubah akibat variabel bebas $\\rightarrow$ <strong>Warna</strong> (warna campuran menjadi semakin pekat).</li>
            <li><strong>Variabel Terkontrol:</strong> Faktor yang dijaga konstan selama pengujian $\\rightarrow$ <strong>Volume</strong> (dalam suatu wadah tertutup dengan volume tertentu).</li>
        </ul>
        <div class="jawaban-akhir">Jawaban: Suhu = Variabel Bebas, Volume = Variabel Terkontrol, Warna = Variabel Terikat</div>
    </div>

    <!-- Soal 4 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 4 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Laju Reaksi</span>
        </div>
        <p><strong>Data dari Grafik:</strong></p>
        <ul>
            <li>Pada saat $t = 0\\text{ s}$, $[\\text{SO}_3] = 4\\text{ M}$</li>
            <li>Pada saat $t = 40\\text{ s}$, $[\\text{SO}_3] = 2\\text{ M}$</li>
            <li>$\\Delta t = 40 - 0 = 40\\text{ detik}$</li>
            <li>$\\Delta[\\text{SO}_3] = 4 - 2 = 2\\text{ M}$</li>
        </ul>
        <div class="section-title">Perhitungan Laju:</div>
        <p>$$v = -\\frac{\\Delta[\\text{SO}_3]}{\\Delta t} = \\frac{2\\text{ M}}{40\\text{ detik}} = 0{,}05\\text{ M/detik} = 5{,}0 \\times 10^{-2}\\text{ M/detik}$$</p>
        <div class="jawaban-akhir">Jawaban: E (5,0 × 10⁻² M/detik)</div>
    </div>

    <!-- Soal 5 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 5 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Netralisasi Asam-Basa</span>
        </div>
        <p><strong>Syarat Reaksi Tepat Netral (Habis Bereaksi):</strong> $\\text{mol } \\text{H}^+ = \\text{mol } \\text{OH}^-$</p>
        <div class="section-title">Perhitungan Masing-Masing:</div>
        <ul>
            <li>(1) $10\\text{ mL } \\text{HCl } 0{,}1\\text{ M} \\rightarrow 10 \\times 0{,}1 \\times 1 = 1\\text{ mmol } \\text{H}^+$</li>
            <li>(2) $10\\text{ mL } \\text{NaOH } 0{,}2\\text{ M} \\rightarrow 10 \\times 0{,}2 \\times 1 = 2\\text{ mmol } \\text{OH}^-$</li>
            <li>(3) $10\\text{ mL } \\text{H}_2\\text{SO}_4\\text{ } 0{,}1\\text{ M} \\rightarrow 10 \\times 0{,}1 \\times 2 = 2\\text{ mmol } \\text{H}^+$</li>
            <li>(4) $20\\text{ mL } \\text{Mg(OH)}_2\\text{ } 0{,}2\\text{ M} \\rightarrow 20 \\times 0{,}2 \\times 2 = 8\\text{ mmol } \\text{OH}^-$</li>
        </ul>
        <p>Larutan (2) menghasilkan $2\\text{ mmol } \\text{OH}^-$ dan larutan (3) menghasilkan $2\\text{ mmol } \\text{H}^+$, sehingga tepat habis bereaksi membentuk garam netral $\\text{Na}_2\\text{SO}_4$.</p>
        <div class="jawaban-akhir">Jawaban: B ((2) dan (3))</div>
    </div>

    <!-- Soal 6 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 6 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Bentuk Molekul & Hibridisasi</span>
        </div>
        <div class="section-title">Analisis Struktur:</div>
        <ul>
            <li>Konfigurasi atom pusat $_7\\text{Q}$: $2, 5$ (elektron valensi = 5).</li>
            <li>Konfigurasi atom terikat $_9\\text{Z}$: $2, 7$ (membutuhkan 1 elektron).</li>
            <li>Molekul $\\text{QZ}_3$:
                <ul>
                    <li>Pasangan Elektron Ikatan (PEI) = 3</li>
                    <li>Pasangan Elektron Bebas (PEB) = $\\frac{5 - 3(1)}{2} = 1$</li>
                </ul>
            </li>
            <li>Tipe Molekul: $\\text{AX}_3\\text{E}$
                <ul>
                    <li>Domain elektron = $3 + 1 = 4 \\rightarrow \\text{Hibridisasi } sp^3$</li>
                    <li>Geometri: <strong>Segitiga piramida (Trigonal piramida)</strong></li>
                    <li>Kepolaran: Memiliki PEB sehingga bentuk asimetris $\\rightarrow$ <strong>Polar</strong></li>
                </ul>
            </li>
        </ul>
        <div class="jawaban-akhir">Jawaban: D (sp³; segitiga piramida; polar)</div>
    </div>

    <!-- Soal 7 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 7 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Penyetaraan Reaksi Kimia</span>
        </div>
        <p>Persamaan reaksi: $a\\text{ }\\text{SO}_2 + b\\text{ }\\text{O}_2 \\rightarrow c\\text{ }\\text{SO}_3$</p>
        <div class="section-title">Penyetaraan:</div>
        <ul>
            <li>Atom S: $a = c$</li>
            <li>Atom O: $2a + 2b = 3c$</li>
            <li>Jika $a = 2 \\rightarrow c = 2$, maka $2(2) + 2b = 3(2) \\Rightarrow 4 + 2b = 6 \\Rightarrow 2b = 2 \\Rightarrow b = 1$.</li>
            <li>Persamaan setara: $2\\text{ }\\text{SO}_2 + 1\\text{ }\\text{O}_2 \\rightarrow 2\\text{ }\\text{SO}_3$</li>
        </ul>
        <div class="jawaban-akhir">Jawaban: C (2, 1, dan 2)</div>
    </div>

    <!-- Soal 8 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 8 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Hasil Kali Kelarutan (Ksp) & Ion Senama</span>
        </div>
        <div class="section-title">Perhitungan:</div>
        <ul>
            <li>$\\text{mol } \\text{Ag}^+ = 50\\text{ mL} \\times 0{,}01\\text{ M} = 0{,}5\\text{ mmol}$</li>
            <li>$\\text{mol } \\text{Cl}^- = 50\\text{ mL} \\times 0{,}03\\text{ M} = 1{,}5\\text{ mmol}$</li>
            <li>Volume total = $100\\text{ mL}$</li>
            <li>Reaksi pengendapan: $\\text{Ag}^+ + \\text{Cl}^- \\rightarrow \\text{AgCl}(s)$</li>
            <li>Sisa mol $\\text{Cl}^- = 1{,}5 - 0{,}5 = 1{,}0\\text{ mmol}$</li>
            <li>$[\\text{Cl}^-] = \\frac{1{,}0\\text{ mmol}}{100\\text{ mL}} = 0{,}01\\text{ M} = 10^{-2}\\text{ M}$</li>
            <li>$[\\text{Ag}^+] = \\frac{K_{sp}}{[\\text{Cl}^-]} = \\frac{1 \\times 10^{-10}}{10^{-2}} = 1 \\times 10^{-8}\\text{ M}$</li>
        </ul>
        <div class="jawaban-akhir">Jawaban: B (1 × 10⁻⁸ M)</div>
    </div>

    <!-- Soal 9 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 9 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Sifat Koligatif Larutan (Titik Beku)</span>
        </div>
        <div class="section-title">Penjelasan:</div>
        <ul>
            <li>Rumus: $\\Delta T_f = m \\times K_f \\times i$</li>
            <li>Urea: nonelektrolit ($i = 1$).</li>
            <li>$\\text{NaCl}$: elektrolit kuat biner (terurai menjadi 2 ion, $\\text{Na}^+$ dan $\\text{Cl}^-$) sehingga $i = 2$.</li>
            <li>Maka penurunan titik beku $\\text{NaCl}$ bernilai 2 kali lebih besar dari urea karena $\\text{NaCl}$ adalah garam biner ($i = 2$).</li>
        </ul>
        <div class="jawaban-akhir">Jawaban: D (NaCl adalah garam biner)</div>
    </div>

    <!-- Soal 10 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 10 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Korosi Logam Besi</span>
        </div>
        <div class="section-title">Analisis Laju Korosi:</div>
        <ul>
            <li>Korosi membutuhkan oksigen ($\\text{O}_2$) dan air ($\\text{H}_2\\text{O}$).</li>
            <li>Tabung (3) (udara + air + garam): Paling cepat berkarat karena larutan garam bertindak sebagai elektrolit penghantar elektron.</li>
            <li>Tabung (1) (udara + air): Mengalami korosi normal.</li>
            <li>Tabung (2) (tertutup rapat dengan minyak/oli): Paling lambat / tidak berkarat karena minyak menghalangi kontak langsung dengan udara.</li>
        </ul>
        <div class="jawaban-akhir">Jawaban: D ((3), (1), (2))</div>
    </div>

    <!-- Soal 11 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 11 <span class="tipe-badge">Pernyataan Tepat/Tidak</span></span>
            <span>Stoikiometri Pengendapan AgCl</span>
        </div>
        <p>$M_r\\text{ AgCl} = 143{,}5\\text{ g/mol}$. Target endapan $= 1{,}435\\text{ g} = 0{,}01\\text{ mol} = 10\\text{ mmol}$.</p>
        <div class="section-title">Evaluasi:</div>
        <ul>
            <li>Komposisi 1: $50\\text{ mL } \\text{AgNO}_3\\text{ } 0{,}2\\text{ M} + 50\\text{ mL } \\text{NaCl } 0{,}2\\text{ M} \\rightarrow 10\\text{ mmol AgCl}$ $\\rightarrow$ <strong>Tepat</strong></li>
            <li>Komposisi 2: $100\\text{ mL } \\text{AgNO}_3\\text{ } 0{,}05\\text{ M} \\rightarrow 5\\text{ mmol AgCl}$ $\\rightarrow$ <strong>Tidak Tepat</strong></li>
            <li>Komposisi 3: $20\\text{ mL } \\text{AgNO}_3\\text{ } 0{,}5\\text{ M} + 20\\text{ mL } \\text{KCl } 0{,}5\\text{ M} \\rightarrow 10\\text{ mmol AgCl}$ $\\rightarrow$ <strong>Tepat</strong></li>
        </ul>
        <div class="jawaban-akhir">Jawaban: K1 = Tepat, K2 = Tidak Tepat, K3 = Tepat</div>
    </div>

    <!-- Soal 12 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 12 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Rumus Empiris & Molekul</span>
        </div>
        <div class="section-title">Perhitungan:</div>
        <ul>
            <li>$\\text{mol C} = 40/12 = 3{,}33$; $\\text{mol H} = 6{,}7/1 = 6{,}7$; $\\text{mol O} = 53{,}3/16 = 3{,}33$.</li>
            <li>Perbandingan $C : H : O = 1 : 2 : 1 \\rightarrow (\\text{CH}_2\\text{O})_n$.</li>
            <li>$(M_r\\text{ CH}_2\\text{O}) \\times n = 180 \\Rightarrow 30n = 180 \\Rightarrow n = 6$.</li>
            <li>Rumus Molekul yang benar adalah $\\text{C}_6\\text{H}_{12}\\text{O}_6$.</li>
        </ul>
        <div class="jawaban-akhir">Jawaban: D (Salah, karena massa molar menunjukkan bahwa rumus molekulnya adalah C₆H₁₂O₆.)</div>
    </div>

    <!-- Soal 13 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 13 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Teori Asam-Basa Brønsted-Lowry</span>
        </div>
        <p>Reaksi: $\\text{H}_2\\text{PO}_4^- + \\text{H}_2\\text{O} \\rightleftharpoons \\text{HPO}_4^{2-} + \\text{H}_3\\text{O}^+$</p>
        <div class="section-title">Analisis:</div>
        <p>$\\text{H}_2\\text{PO}_4^-$ melepaskan proton ($\\text{H}^+$) kepada $\\text{H}_2\\text{O}$ sehingga bertindak sebagai asam, sedangkan $\\text{H}_2\\text{O}$ bertindak sebagai basa penerima proton.</p>
        <div class="jawaban-akhir">Jawaban: C (H₂PO₄⁻ memberikan ion hidrogen kepada H₂O dan bersifat asam)</div>
    </div>

    <!-- Soal 14 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 14 <span class="tipe-badge">Pernyataan Tepat/Tidak</span></span>
            <span>Struktur & Titik Didih Hidrokarbon</span>
        </div>
        <div class="section-title">Evaluasi:</div>
        <ul>
            <li>Titik didih n-butana > 2-metil-propana: <strong>Tepat</strong> (rantai lurus memiliki luas kontak lebih besar).</li>
            <li>Titik didih 2,2-dimetil-propana > 2-metil-butana: <strong>Tidak Tepat</strong> (2,2-dimetil-propana lebih bercabang sehingga titik didihnya lebih rendah).</li>
            <li>Titik didih n-heksana > 3-metil-pentana: <strong>Tepat</strong> (rantai lurus lebih tinggi dari rantai bercabang).</li>
        </ul>
        <div class="jawaban-akhir">Jawaban: P1 = Tepat, P2 = Tidak Tepat, P3 = Tepat</div>
    </div>

    <!-- Soal 15 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 15 <span class="tipe-badge">Pilihan Ganda Kompleks</span></span>
            <span>Pergeseran Kesetimbangan (Le Chatelier)</span>
        </div>
        <p>Reaksi: $2\\text{ }\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{ }\\text{SO}_3(g) \\quad \\Delta H = -197\\text{ kJ/mol}$ (Eksoterm)</p>
        <div class="section-title">Tindakan Memaksimalkan Produksi SO₃ (Bergeser ke Kanan):</div>
        <ul>
            <li>Menambah $\\text{O}_2$ ke dalam campuran (Reaktan ditambah $\\rightarrow$ geser ke kanan) [✓]</li>
            <li>Menurunkan suhu reaksi (Reaksi eksoterm $\\rightarrow$ geser ke arah eksoterm/kanan) [✓]</li>
            <li>Mengeluarkan $\\text{SO}_3$ dari wadah (Produk dikurangi $\\rightarrow$ geser ke kanan) [✓]</li>
        </ul>
        <div class="jawaban-akhir">Centang: Menambah O₂, Menurunkan suhu, Mengeluarkan SO₃</div>
    </div>

    <!-- Soal 16 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 16 <span class="tipe-badge">Pilihan Ganda Kompleks</span></span>
            <span>Stoikiometri & Pereaksi Pembatas</span>
        </div>
        <div class="section-title">Perhitungan:</div>
        <ul>
            <li>$\\text{mol Mg} = 24 / 24 = 1\\text{ mol}$; $\\text{mol HCl} = 1 \\times 3 = 3\\text{ mol}$.</li>
            <li>Reaksi: $\\text{Mg} + 2\\text{ HCl} \\rightarrow \\text{MgCl}_2 + \\text{H}_2$.</li>
            <li>$\\text{Mg}$ habis bereaksi ($1\\text{ mol}$) dan $\\text{HCl}$ bersisa $1\\text{ mol}$.</li>
            <li>Volume $\\text{H}_2$ STP $= 1\\text{ mol} \\times 22{,}4\\text{ L/mol} = 22{,}4\\text{ L}$.</li>
        </ul>
        <div class="jawaban-akhir">Centang: Mol Mg yang bereaksi adalah 1 mol; Volume H₂ yang dihasilkan adalah 22,4 L</div>
    </div>

    <!-- Soal 17 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 17 <span class="tipe-badge">Pernyataan Benar/Salah</span></span>
            <span>Asam Lemah CH₃COOH</span>
        </div>
        <p>$M = 0{,}6 / 60 = 0{,}01\\text{ M} = 10^{-2}\\text{ M}$. $[\\text{H}^+] = \\sqrt{10^{-5} \\times 10^{-2}} = 10^{-3{,}5}\\text{ M} \\approx 10^{-4}\\text{ M}$. $\\alpha = \\sqrt{10^{-3}} \\approx 3{,}16\\%$.</p>
        <div class="section-title">Evaluasi:</div>
        <ul>
            <li>Pernyataan 1 ($[\\text{H}^+] \\approx 10^{-4}\\text{ M}$): <strong>Benar</strong></li>
            <li>Pernyataan 2 ($\\alpha \\ge 10\\%$): <strong>Salah</strong></li>
            <li>Pernyataan 3 (Pengenceran menaikkan derajat ionisasi $\\alpha$): <strong>Benar</strong></li>
        </ul>
        <div class="jawaban-akhir">Jawaban: P1 = Benar, P2 = Salah, P3 = Benar</div>
    </div>

    <!-- Soal 18 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 18 <span class="tipe-badge">Pilihan Ganda Kompleks</span></span>
            <span>Campuran Buffer Asam</span>
        </div>
        <div class="section-title">Perhitungan:</div>
        <ul>
            <li>$\\text{mol } \\text{CH}_3\\text{COOH} = 100 \\times 0{,}1 = 10\\text{ mmol}$.</li>
            <li>$\\text{mol } \\text{NaOH} = 100 \\times 0{,}05 = 5\\text{ mmol}$.</li>
            <li>$\\text{NaOH}$ habis ($5\\text{ mmol}$), terbentuk garam $\\text{CH}_3\\text{COONa} = 5\\text{ mmol}$, dan sisa asam $= 5\\text{ mmol}$.</li>
            <li>$[\\text{H}^+] = 10^{-5} \\times (5/5) = 10^{-5} \\rightarrow \\text{pH} = 5$.</li>
        </ul>
        <div class="jawaban-akhir">Centang: pH = 5; NaOH bereaksi = 5 mmol; Garam terbentuk = 5 mmol</div>
    </div>

    <!-- Soal 19 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 19 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Tetapan Kesetimbangan (Kc)</span>
        </div>
        <p>Reaksi: $2\\text{ }\\text{COF}_2(g) \\rightleftharpoons \\text{CO}_2(g) + \\text{CF}_4(g)$</p>
        <div class="section-title">Perhitungan:</div>
        <p>$$K_c = \\frac{x^2}{(1 - 2x)^2} = 4 \\Rightarrow \\frac{x}{1 - 2x} = 2 \\Rightarrow x = 2 - 4x \\Rightarrow 5x = 2 \\Rightarrow x = 0{,}4\\text{ mol}$$</p>
        <p>Jumlah $\\text{COF}_2$ saat setimbang $= 1 - 2(0{,}4) = 0{,}2\\text{ mol} = \\frac{1}{5}\\text{ mol}$.</p>
        <div class="jawaban-akhir">Jawaban: C (1/5 mol)</div>
    </div>

    <!-- Soal 20 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 20 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Faktor Suhu pada Laju Reaksi</span>
        </div>
        <div class="section-title">Penjelasan:</div>
        <p>Untuk menguji pengaruh suhu, suhu harus menjadi variabel bebas (berbeda), sedangkan konsentrasi $\\text{HCl}$ ($0{,}1\\text{ M}$) dan bentuk pualam (serbuk) harus konstan. Kondisi ini dipenuhi oleh percobaan 1 ($25^\\circ\\text{C}$) dan 3 ($35^\\circ\\text{C}$).</p>
        <div class="jawaban-akhir">Jawaban: A (1 dan 3)</div>
    </div>
</div>

</body>
</html>`;

export const PEMBAHASAN_TKA_BIOLOGI_1_HTML = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pembahasan Resmi Try Out TKA Biologi 1</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: #f8fafc;
            color: #1e293b;
            padding: 20px;
            margin: 0;
            line-height: 1.6;
        }
        .container {
            max-width: 900px;
            margin: 0 auto;
            background: #ffffff;
            padding: 32px;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.05);
            border: 1px solid #e2e8f0;
        }
        .header {
            text-align: center;
            border-bottom: 2px solid #059669;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        h1 {
            color: #065f46;
            margin-top: 0;
            font-size: 24px;
            font-weight: 800;
        }
        .subtitle {
            color: #64748b;
            font-size: 14px;
            font-weight: 600;
        }
        .badge-info {
            display: inline-block;
            background: #ecfdf5;
            color: #047857;
            padding: 4px 12px;
            border-radius: 9999px;
            font-size: 12px;
            font-weight: 700;
            margin-top: 8px;
            border: 1px solid #a7f3d0;
        }
        .soal-box {
            background: #ffffff;
            border: 1px solid #cbd5e1;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 24px;
            transition: all 0.2s ease;
        }
        .soal-box:hover {
            border-color: #10b981;
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.1);
        }
        .soal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 10px;
            margin-bottom: 14px;
            font-weight: 700;
            color: #0f766e;
            font-size: 15px;
        }
        .tipe-badge {
            background: #f0fdf4;
            color: #15803d;
            padding: 2px 8px;
            border-radius: 6px;
            font-size: 11px;
            font-weight: 600;
            border: 1px solid #bbf7d0;
            margin-left: 6px;
        }
        .section-title {
            font-weight: 700;
            color: #334155;
            margin-top: 10px;
            margin-bottom: 6px;
            font-size: 14px;
        }
        .jawaban-akhir {
            background: #ecfdf5;
            border-left: 4px solid #10b981;
            padding: 10px 14px;
            margin-top: 14px;
            font-weight: 700;
            color: #065f46;
            border-radius: 0 8px 8px 0;
            font-size: 14px;
        }
        .soal-text {
            color: #334155;
            font-size: 14px;
            margin-bottom: 10px;
        }
        .pembahasan-detail {
            color: #1e293b;
            font-size: 14px;
            background: #f8fafc;
            padding: 12px;
            border-radius: 8px;
            border: 1px dashed #cbd5e1;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="header">
        <h1>KUNCI & PEMBAHASAN LENGKAP TRY OUT TKA BIOLOGI 1</h1>
        <div class="subtitle">Standar TKA Saintek & SNPMB 2026 — Pembahasan Ilmiah 20 Butir Soal</div>
        <div class="badge-info">20 Soal IRT & Evaluasi Saintifik Terstandarisasi</div>
    </div>

    <!-- Soal 1 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 1 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Ekologi & Analisis Data Malaria</span>
        </div>
        <div class="soal-text"><strong>Topik:</strong> Analisis Data Efektivitas DDT dan Kina pada Dua Wilayah Endemik</div>
        <div class="section-title">Pembahasan Ilmiah:</div>
        <div class="pembahasan-detail">
            Soal ini menguji kemampuan membaca data tabel. DDT sangat efektif di wilayah tanpa resistensi (90%), namun efektivitasnya turun drastis di wilayah dengan resistensi (60%). Oleh karena itu, penggunaan DDT di wilayah A sangat tepat untuk hasil cepat, sedangkan untuk wilayah B perlu kombinasi/strategi lain (seperti Kina).
        </div>
        <div class="jawaban-akhir">Kunci Jawaban: A (Penggunaan DDT di wilayah A sangat tepat untuk hasil cepat, sedangkan untuk wilayah B perlu kombinasi/strategi lain seperti Kina)</div>
    </div>

    <!-- Soal 2 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 2 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Prinsip Klasifikasi Makhluk Hidup</span>
        </div>
        <div class="soal-text"><strong>Topik:</strong> Pemisahan Taksonomi Paus (Mamalia) dan Hiu (Pisces)</div>
        <div class="section-title">Pembahasan Ilmiah:</div>
        <div class="pembahasan-detail">
            Klasifikasi makhluk hidup didasarkan pada hubungan kekerabatan, struktur anatomi internal (seperti cara bernapas dan reproduksi), dan genetika, bukan sekadar penampilan luar. Paus dan hiu memiliki bentuk tubuh serupa karena evolusi konvergen (hidup di lingkungan yang sama), bukan karena mereka berkerabat dekat.
        </div>
        <div class="jawaban-akhir">Kunci Jawaban: A (Paus dan hiu memiliki bentuk tubuh serupa karena evolusi konvergen; klasifikasi didasarkan pada hubungan kekerabatan, anatomi internal, dan genetika)</div>
    </div>

    <!-- Soal 3 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 3 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Sistem Reproduksi & Kontrasepsi IUD</span>
        </div>
        <div class="soal-text"><strong>Topik:</strong> Mekanisme Kerja Alat Kontrasepsi Dalam Rahim (AKDR/IUD)</div>
        <div class="section-title">Pembahasan Ilmiah:</div>
        <div class="pembahasan-detail">
            IUD bekerja dengan cara mengganggu pergerakan sperma (efek spermasidal/mekanis) sehingga tidak mencapai sel telur, serta mengubah kondisi rahim agar tidak terjadi implantasi (penempelan embrio). IUD bukan metode permanen (bisa dilepas kapan saja).
        </div>
        <div class="jawaban-akhir">Kunci Jawaban: B (IUD bekerja dengan cara mengganggu pergerakan sperma dan mengubah kondisi rahim agar tidak terjadi implantasi, serta bersifat non-permanen)</div>
    </div>

    <!-- Soal 4 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 4 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Metode Ilmiah & Identifikasi Masalah</span>
        </div>
        <div class="soal-text"><strong>Topik:</strong> Tahapan Awal Penelitian Berbasis Metode Ilmiah</div>
        <div class="section-title">Pembahasan Ilmiah:</div>
        <div class="pembahasan-detail">
            Langkah pertama dalam metode ilmiah adalah mengidentifikasi masalah. Untuk mengidentifikasi masalah dengan tepat, peneliti perlu mengumpulkan informasi awal atau observasi (literatur, data, atau fakta lapangan) agar batasan masalah dapat dirumuskan.
        </div>
        <div class="jawaban-akhir">Kunci Jawaban: B (Mengidentifikasi masalah melalui pengumpulan informasi awal atau observasi literatur/fakta lapangan)</div>
    </div>

    <!-- Soal 5 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 5 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Respirasi & Fisiologi Energi</span>
        </div>
        <div class="soal-text"><strong>Topik:</strong> Penyesuaian Frekuensi Napas Saat Latihan Fisik Intensif</div>
        <div class="section-title">Pembahasan Ilmiah:</div>
        <div class="pembahasan-detail">
            Aktivitas fisik berat meningkatkan kebutuhan ATP (energi) otot. Untuk memproduksi ATP dalam jumlah besar, sel otot membutuhkan lebih banyak oksigen melalui proses respirasi aerob. Akibatnya, frekuensi napas meningkat untuk menyuplai oksigen dan mengeluarkan CO2.
        </div>
        <div class="jawaban-akhir">Kunci Jawaban: A (Kebutuhan ATP meningkat sehingga sel otot membutuhkan lebih banyak O2 melalui respirasi aerob dan membuang CO2)</div>
    </div>

    <!-- Soal 6 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 6 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Sistem Endokrin & Hormon Tiroksin</span>
        </div>
        <div class="soal-text"><strong>Topik:</strong> Fungsi Utama Hormon Tiroksin (T4) Kelenjar Tiroid</div>
        <div class="section-title">Pembahasan Ilmiah:</div>
        <div class="pembahasan-detail">
            Kelenjar tiroid memproduksi hormon tiroksin (T4) yang berfungsi utama mengatur laju metabolisme basal sel-sel tubuh, termasuk pengaturan penggunaan energi, suhu tubuh, dan sintesis protein.
        </div>
        <div class="jawaban-akhir">Kunci Jawaban: B (Mengatur laju metabolisme basal sel-sel tubuh, penggunaan energi, suhu tubuh, dan sintesis protein)</div>
    </div>

    <!-- Soal 7 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 7 <span class="tipe-badge">Pilihan Ganda & Gambar</span></span>
            <span>Sistem Organ Reproduksi Pria (Vas Deferens)</span>
        </div>
        <div class="soal-text"><strong>Topik:</strong> Analisis Anatomi Gambar Reproduksi Pria (IMG_2361.jpeg)</div>
        <div style="text-align: center; margin: 12px 0;">
            <img src="/IMG_2361.jpeg" alt="Diagram Sistem Organ Reproduksi Pria" style="max-width: 100%; height: auto; max-height: 280px; border-radius: 10px; border: 1px solid #cbd5e1; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);" />
            <div style="font-size: 11px; color: #64748b; margin-top: 4px; font-family: monospace;">Gambar Referensi: IMG_2361.jpeg (Vas Deferens bertanda X)</div>
        </div>
        <div class="section-title">Pembahasan Ilmiah:</div>
        <div class="pembahasan-detail">
            Huruf X menunjuk pada <strong>vas deferens</strong> (saluran sperma). Jika saluran ini tersumbat (seperti pada prosedur vasektomi), sperma yang diproduksi di testis tidak dapat dialirkan keluar saat ejakulasi. Namun, kelenjar prostat dan vesikula seminalis yang berada di hilir saluran tetap memproduksi cairan semen, sehingga ejakulasi tetap terjadi secara normal tetapi tanpa kandungan sel sperma (<em>azoospermia</em>).
        </div>
        <div class="jawaban-akhir">Kunci Jawaban: A (Sperma tidak dapat keluar saat ejakulasi, namun cairan semen dari prostat/vesikula seminalis tetap keluar tanpa sel sperma/azoospermia)</div>
    </div>

    <!-- Soal 8 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 8 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Biologi Sel & Mitokondria</span>
        </div>
        <div class="soal-text"><strong>Topik:</strong> Dampak Kerusakan Organel Mitokondria pada Sel Eukariotik</div>
        <div class="section-title">Pembahasan Ilmiah:</div>
        <div class="pembahasan-detail">
            Mitokondria adalah organel tempat terjadinya respirasi seluler yang menghasilkan ATP (energi). Tanpa mitokondria, sel tidak memiliki pasokan energi untuk menjalankan proses metabolisme vital (seperti transpor aktif, sintesis molekul, dll.).
        </div>
        <div class="jawaban-akhir">Kunci Jawaban: B (Sel kehilangan pasokan energi utama/ATP dari respirasi seluler sehingga tidak mampu menjalankan proses metabolisme vital)</div>
    </div>

    <!-- Soal 9 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 9 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Sistem Sirkulasi & Analisis Darah</span>
        </div>
        <div class="soal-text"><strong>Topik:</strong> Indikasi Hematokrit Rendah dan Abnormalitas Leukosit</div>
        <div class="section-title">Pembahasan Ilmiah:</div>
        <div class="pembahasan-detail">
            Hasil tes menunjukkan ketidakseimbangan sel darah. Hematokrit rendah (anemia) dan abnormalitas pada jenis leukosit (neutrofil tinggi, limfosit rendah) sering kali menjadi indikator gangguan pada sumsum tulang belakang dalam memproduksi sel darah secara normal.
        </div>
        <div class="jawaban-akhir">Kunci Jawaban: B (Gangguan pada sumsum tulang belakang / bone marrow dalam memproduksi sel darah secara normal)</div>
    </div>

    <!-- Soal 10 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 10 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Sistem Imunologi & Sindrom Stevens-Johnson (SSJ)</span>
        </div>
        <div class="soal-text"><strong>Topik:</strong> Mekanisme Reaksi Hipersensitivitas Berat</div>
        <div class="section-title">Pembahasan Ilmiah:</div>
        <div class="pembahasan-detail">
            Sindrom Stevens-Johnson (SSJ) adalah reaksi hipersensitivitas. Mekanismenya melibatkan aktivasi sel imun yang salah sasaran (autoimun/alergi parah). Imunoglobulin (antibodi) berperan dalam memicu reaksi inflamasi dan pengikatan antigen yang memicu kerusakan jaringan.
        </div>
        <div class="jawaban-akhir">Kunci Jawaban: B (Reaksi hipersensitivitas dengan aktivasi sel imun salah sasaran, melibatkan imunoglobulin/antibodi yang memicu inflamasi dan kerusakan jaringan)</div>
    </div>

    <!-- Soal 11 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 11 <span class="tipe-badge">Pilihan Ganda & Gambar</span></span>
            <span>Ekologi & Jaring-Jaring Makanan</span>
        </div>
        <div class="soal-text"><strong>Topik:</strong> Analisis Jaring-Jaring Makanan Ekosistem Laut Kutub (IMG_2362.jpeg)</div>
        <div style="text-align: center; margin: 12px 0;">
            <img src="/IMG_2362.jpeg" alt="Diagram Jaring-Jaring Makanan Ekosistem Laut Kutub" style="max-width: 100%; height: auto; max-height: 280px; border-radius: 10px; border: 1px solid #cbd5e1; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);" />
            <div style="font-size: 11px; color: #64748b; margin-top: 4px; font-family: monospace;">Gambar Referensi: IMG_2362.jpeg (Jaring-Jaring Makanan Antartika)</div>
        </div>
        <div class="section-title">Pembahasan Ilmiah:</div>
        <div class="pembahasan-detail">
            Dalam jaring-jaring makanan laut kutub, <strong>ikan kecil dan cumi</strong> merupakan mangsa kunci bagi predator tingkat sekunder seperti <strong>pinguin dan anjing laut</strong>. Jika populasi ikan kecil anjlok akibat pemanasan suhu dan eksploitasi berlebih, terjadi efek <em>bottom-up cascade</em>: pemangsa langsungnya mengalami defisit energi dan kelaparan sehingga populasinya berisiko ikut menyusut drastis.
        </div>
        <div class="jawaban-akhir">Kunci Jawaban: A (Predator langsung seperti pinguin atau anjing laut kekurangan makanan sehingga populasinya berisiko ikut menurun)</div>
    </div>

    <!-- Soal 12 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 12 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Biologi Sel & Retikulum Endoplasma</span>
        </div>
        <div class="soal-text"><strong>Topik:</strong> Perbedaan Fungsi RE Kasar dan RE Halus</div>
        <div class="section-title">Pembahasan Ilmiah:</div>
        <div class="pembahasan-detail">
            Retikulum Endoplasma (RE) Kasar memiliki ribosom dan berfungsi untuk sintesis protein. RE Halus berfungsi untuk sintesis lipid (lemak) dan detoksifikasi sel. Jika keduanya rusak, fungsi krusial ini akan terhenti.
        </div>
        <div class="jawaban-akhir">Kunci Jawaban: A (RE Kasar memiliki ribosom untuk sintesis protein, RE Halus untuk sintesis lipid dan detoksifikasi racun)</div>
    </div>

    <!-- Soal 13 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 13 <span class="tipe-badge">Pilihan Ganda & Grafik</span></span>
            <span>Bioteknologi & Imunisasi Vaksin</span>
        </div>
        <div class="soal-text"><strong>Topik:</strong> Analisis Grafik Vaksinasi Primer, Booster & Kasus COVID-19 (IMG_2363.jpeg)</div>
        <div style="text-align: center; margin: 12px 0;">
            <img src="/IMG_2363.jpeg" alt="Grafik Dinamika Kasus COVID-19 vs Vaksinasi di Indonesia" style="max-width: 100%; height: auto; max-height: 280px; border-radius: 10px; border: 1px solid #cbd5e1; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);" />
            <div style="font-size: 11px; color: #64748b; margin-top: 4px; font-family: monospace;">Grafik Referensi: IMG_2363.jpeg (Korelasi Vaksinasi Primer & Booster dengan Penurunan Kasus)</div>
        </div>
        <div class="section-title">Pembahasan Ilmiah:</div>
        <div class="pembahasan-detail">
            Grafik menyajikan korelasi invers yang signifikan: peningkatan cakupan vaksinasi primer (&gt;70% populasi) yang diperkuat dosis booster menyebabkan tingkat transmisi dan keparahan kasus COVID-19 anjlok serta melandai stabil. Hal ini membuktikan efektivitas pembentukan <em>herd immunity</em> (kekebalan kelompok) melalui vaksinasi massal.
        </div>
        <div class="jawaban-akhir">Kunci Jawaban: A (Pemberian vaksin primer dan booster berkorelasi kuat dengan penurunan kasus baru karena terbentuknya herd immunity)</div>
    </div>

    <!-- Soal 14 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 14 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Sistem Reproduksi & Kehamilan Ektopik</span>
        </div>
        <div class="soal-text"><strong>Topik:</strong> Penanaman Zigot di Tuba Falopi</div>
        <div class="section-title">Pembahasan Ilmiah:</div>
        <div class="pembahasan-detail">
            Pembuahan normal terjadi di tuba falopi. Zigot seharusnya bergerak menuju rahim untuk menempel. Jika silia di tuba tidak berfungsi baik atau ada sumbatan, zigot tertanam di tuba (kehamilan ektopik) dan tidak bisa berkembang normal karena tuba bukan tempat tumbuh janin.
        </div>
        <div class="jawaban-akhir">Kunci Jawaban: B (Kehamilan ektopik, di mana embrio tertanam di tuba falopi dan tidak dapat berkembang secara normal)</div>
    </div>

    <!-- Soal 15 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 15 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Metode Ilmiah & Desain Fair Test</span>
        </div>
        <div class="soal-text"><strong>Topik:</strong> Kontrol Variabel dalam Uji Coba Benih Jagung</div>
        <div class="section-title">Pembahasan Ilmiah:</div>
        <div class="pembahasan-detail">
            Prinsip eksperimen yang adil (fair test) adalah mengontrol variabel. Variabel bebasnya adalah jenis benih (toko vs hasil panen). Maka, variabel lain (lahan, pupuk, perlakuan) harus sama.
        </div>
        <div class="jawaban-akhir">Kunci Jawaban: B (Menjadikan jenis benih sebagai variabel bebas, sedangkan variabel lahan, pupuk, penyiraman dikontrol agar konstan)</div>
    </div>

    <!-- Soal 16 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 16 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Bioteknologi Pangan & Pembuatan Yogurt</span>
        </div>
        <div class="soal-text"><strong>Topik:</strong> Peran Suhu Optimal pada Fermentasi Lactobacillus</div>
        <div class="section-title">Pembahasan Ilmiah:</div>
        <div class="pembahasan-detail">
            Fermentasi yogurt memerlukan suhu optimal agar bakteri Lactobacillus dapat bekerja. Jika suhu terlalu panas, bakteri mati; jika terlalu dingin, bakteri tidak aktif.
        </div>
        <div class="jawaban-akhir">Kunci Jawaban: A (Suhu optimal diperlukan agar bakteri bekerja efektif; terlalu panas bakteri mati, terlalu dingin tidak aktif)</div>
    </div>

    <!-- Soal 17 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 17 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Metabolisme Sel & Katabolisme</span>
        </div>
        <div class="soal-text"><strong>Topik:</strong> Konsep Pemecahan Molekul Kompleks Menjadi Sederhana</div>
        <div class="section-title">Pembahasan Ilmiah:</div>
        <div class="pembahasan-detail">
            Katabolisme adalah proses pemecahan molekul kompleks menjadi sederhana untuk menghasilkan energi (contoh: glikolisis/pemecahan glukosa menjadi piruvat). Sedangkan anabolisme adalah proses pembentukan molekul.
        </div>
        <div class="jawaban-akhir">Kunci Jawaban: B (Proses penguraian molekul organik kompleks menjadi sederhana yang membebaskan energi kimia / glikolisis)</div>
    </div>

    <!-- Soal 18 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 18 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Fisiologi Olahraga & Pendinginan</span>
        </div>
        <div class="soal-text"><strong>Topik:</strong> Manfaat Cooling Down dan Pengaturan Napas Pasca-Olahraga</div>
        <div class="section-title">Pembahasan Ilmiah:</div>
        <div class="pembahasan-detail">
            Pendinginan (cooling down) dan pengaturan napas penting setelah olahraga berat agar detak jantung turun secara perlahan, mencegah pingsan (darah tidak terkumpul di kaki), dan membantu pembuangan sisa metabolisme (asam laktat/CO2) dengan lebih efisien.
        </div>
        <div class="jawaban-akhir">Kunci Jawaban: A (Menurunkan detak jantung bertahap, mencegah pengumpulan darah di kaki/pingsan, dan mempercepat pembuangan asam laktat)</div>
    </div>

    <!-- Soal 19 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 19 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Sistem Ekskresi & Hemodialisis</span>
        </div>
        <div class="soal-text"><strong>Topik:</strong> Prinsip Filtrasi Zat Toksik pada Mesin Cuci Darah</div>
        <div class="section-title">Pembahasan Ilmiah:</div>
        <div class="pembahasan-detail">
            Fungsi utama ginjal adalah menyaring darah dari zat sisa metabolisme (urea, kreatinin, dll.). Jika ginjal rusak (gagal ginjal), racun-racun ini menumpuk di darah (toksik). Cuci darah (hemodialisis) berfungsi menggantikan fungsi ginjal untuk membersihkan darah tersebut secara buatan.
        </div>
        <div class="jawaban-akhir">Kunci Jawaban: B (Menggantikan fungsi filtrasi ginjal untuk menyaring zat sisa metabolisme toksik seperti urea dan kreatinin)</div>
    </div>

    <!-- Soal 20 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor 20 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Metode Ilmiah & Identifikasi Individu</span>
        </div>
        <div class="soal-text"><strong>Topik:</strong> Teknik Penandaan Katak Pohon untuk Pengumpulan Data Hipotesis</div>
        <div class="section-title">Pembahasan Ilmiah:</div>
        <div class="pembahasan-detail">
            Dengan menandai katak (memberi label/nomer), anak tersebut sedang melakukan teknik identifikasi individu. Tujuannya untuk mengetahui apakah katak yang bernyanyi setiap malam adalah katak yang sama (yang pernah ia pindahkan) atau katak yang berbeda. Ini adalah langkah dasar pengumpulan data untuk menjawab hipotesis.
        </div>
        <div class="jawaban-akhir">Kunci Jawaban: B (Melakukan teknik identifikasi individu untuk menguji apakah katak yang bernyanyi adalah individu yang sama atau berbeda)</div>
    </div>
</div>

</body>
</html>`;

export function generateSubjectDiscussionHtml(title: string, subject: string, questions: any[]): string {
  const renderedQuestions = (questions || []).map((q, idx) => {
    const num = q.number || q.id || (idx + 1);
    const typeLabel = q.type === 'checkboxes' || q.type === 'multiple-complex'
      ? 'Pilihan Ganda Kompleks'
      : q.type === 'true-false-table'
      ? 'Tabel Benar / Salah'
      : q.type === 'tepat-table'
      ? 'Tabel Tepat / Tidak Tepat'
      : q.type === 'sesuai-table'
      ? 'Tabel Sesuai / Tidak Sesuai'
      : 'Pilihan Ganda';

    let optionsHtml = '';
    if (q.options && q.options.length > 0) {
      optionsHtml = `<ul style="list-style: none; padding-left: 0; margin: 12px 0;">` +
        q.options.map((opt: any) => `
          <li style="margin-bottom: 6px; padding: 6px 12px; border-radius: 8px; background: ${opt.correct ? '#ecfdf5' : '#f8fafc'}; border: 1px solid ${opt.correct ? '#a7f3d0' : '#e2e8f0'}; font-size: 13px;">
            <strong style="color: ${opt.correct ? '#059669' : '#475569'};">${(opt.id || '').toUpperCase()}.</strong> ${opt.text || ''} ${opt.correct ? '<span style="color: #059669; font-weight: bold; margin-left: 6px;">✓ (Kunci)</span>' : ''}
          </li>
        `).join('') + `</ul>`;
    }

    let statementsHtml = '';
    if (q.statements && q.statements.length > 0) {
      statementsHtml = `<table style="width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 13px;">
        <thead>
          <tr style="background: #f1f5f9; text-align: left;">
            <th style="padding: 8px 12px; border: 1px solid #cbd5e1;">Pernyataan</th>
            <th style="padding: 8px 12px; border: 1px solid #cbd5e1; width: 130px; text-align: center;">Nilai Kebenaran</th>
          </tr>
        </thead>
        <tbody>` +
        q.statements.map((st: any) => `
          <tr>
            <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">${st.text}</td>
            <td style="padding: 8px 12px; border: 1px solid #cbd5e1; text-align: center; font-weight: bold; color: ${st.correct === true || st.correct === 'Benar' || st.correct === 'Tepat' || st.correct === 'Sesuai' ? '#059669' : '#dc2626'};">
              ${typeof st.correct === 'boolean' ? (st.correct ? (q.type === 'tepat-table' ? 'Tepat' : q.type === 'sesuai-table' ? 'Sesuai' : 'Benar') : (q.type === 'tepat-table' ? 'Tidak Tepat' : q.type === 'sesuai-table' ? 'Tidak Sesuai' : 'Salah')) : st.correct}
            </td>
          </tr>
        `).join('') + `</tbody></table>`;
    }

    const stimulusHtml = q.stimulus ? `<div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 12px 16px; border-radius: 8px; margin-bottom: 12px; font-size: 13px; color: #334155; line-height: 1.6;">${q.stimulus}</div>` : '';
    const readingHtml = q.readingText ? `<div style="background: #f8fafc; border-left: 4px solid #ec4899; padding: 12px 16px; border-radius: 8px; margin-bottom: 12px; font-size: 13px; color: #334155; line-height: 1.6;">${q.readingText}</div>` : '';

    const explanationContent = q.discussion || q.explanation || 'Pembahasan terstruktur konsep dan pemecahan langkah.';
    const keyContent = q.officialKeyText || (q.options?.find((o: any) => o.correct) ? `${q.options.find((o: any) => o.correct).id.toUpperCase()} (${q.options.find((o: any) => o.correct).text})` : (q.correctAnswer ? (Array.isArray(q.correctAnswer) ? q.correctAnswer.join(', ') : q.correctAnswer) : 'Lihat Pembahasan'));

    return `
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal Nomor ${num} <span class="tipe-badge">${typeLabel}</span></span>
            <span>${q.topic || subject}</span>
        </div>
        ${stimulusHtml}
        ${readingHtml}
        <div class="soal-text"><strong>Pertanyaan:</strong> ${q.text || ''}</div>
        ${optionsHtml}
        ${statementsHtml}
        <div class="section-title">Pembahasan & Analisis Konsep:</div>
        <div class="pembahasan-detail">
            ${explanationContent}
        </div>
        <div class="jawaban-akhir">Kunci Jawaban: <strong>${keyContent}</strong></div>
    </div>`;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pembahasan ${title}</title>
    <!-- MathJax Configuration -->
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
            font-family: 'Segoe UI', Roboto, -apple-system, BlinkMacSystemFont, Arial, sans-serif;
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
            color: #0f172a;
            font-size: 24px;
            margin: 0 0 8px 0;
        }
        .header p {
            color: #64748b;
            font-size: 14px;
            margin: 0;
        }
        .soal-box {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 24px;
            margin-bottom: 24px;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);
        }
        .soal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 700;
            font-size: 14px;
            color: #2563eb;
            margin-bottom: 12px;
            padding-bottom: 8px;
            border-bottom: 1px solid #f1f5f9;
        }
        .tipe-badge {
            background: #eff6ff;
            color: #1d4ed8;
            padding: 2px 8px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 600;
            border: 1px solid #bfdbfe;
        }
        .soal-text {
            font-size: 14px;
            color: #334155;
            margin-bottom: 16px;
            line-height: 1.6;
        }
        .section-title {
            font-weight: 700;
            font-size: 13px;
            color: #475569;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-top: 16px;
            margin-bottom: 8px;
        }
        .pembahasan-detail {
            background: #f8fafc;
            border-left: 4px solid #3b82f6;
            padding: 14px 18px;
            border-radius: 0 8px 8px 0;
            font-size: 14px;
            color: #1e293b;
            line-height: 1.7;
            white-space: pre-line;
        }
        .jawaban-akhir {
            margin-top: 14px;
            padding: 10px 14px;
            background: #ecfdf5;
            border: 1px solid #a7f3d0;
            border-radius: 8px;
            font-weight: 700;
            font-size: 14px;
            color: #065f46;
        }
    </style>
</head>
<body>
<div class="container">
    <div class="header">
        <h1>Kunci Jawaban & Pembahasan Lengkap</h1>
        <p>${title} &bull; TKA SMA Indonesia Berbasis IRT & HOTS</p>
    </div>
    ${renderedQuestions}
</div>
</body>
</html>`;
}



