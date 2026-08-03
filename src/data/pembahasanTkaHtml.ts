export const PEMBAHASAN_TKA_MATEMATIKA_WAJIB_HTML = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Soal Simulasi ANBK / TKA Matematika Wajib</title>
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
            background-color: #f3f4f6;
            color: #1f2937;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 900px;
            margin: 0 auto;
            background: #ffffff;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .header {
            text-align: center;
            border-bottom: 3px double #e5e7eb;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .header h1 {
            color: #1d4ed8;
            margin: 0 0 10px 0;
            font-size: 24px;
        }
        .header p {
            color: #6b7280;
            margin: 0;
            font-size: 14px;
        }
        .soal-box {
            background-color: #ffffff;
            border: 1px solid #e5e7eb;
            border-left: 5px solid #2563eb;
            padding: 20px;
            margin-bottom: 25px;
            border-radius: 0 8px 8px 0;
        }
        .soal-header {
            font-weight: bold;
            color: #1d4ed8;
            margin-bottom: 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .tipe-badge {
            background-color: #dbeafe;
            color: #1e40af;
            font-size: 11px;
            padding: 3px 8px;
            border-radius: 12px;
            font-weight: 600;
        }
        .jawaban-akhir {
            margin-top: 15px;
            background-color: #ecfdf5;
            border: 1px solid #a7f3d0;
            color: #065f46;
            padding: 10px 15px;
            border-radius: 6px;
            font-weight: bold;
        }
        .section-title {
            font-weight: bold;
            color: #374151;
            margin-top: 10px;
            margin-bottom: 5px;
        }
        ul {
            margin-top: 5px;
            padding-left: 20px;
        }
        li {
            margin-bottom: 5px;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="header">
        <h1>PEMBAHASAN LENGKAP SIMULASI ANBK / TKA MATEMATIKA WAJIB</h1>
        <p>Penilaian Konsep Item Response Theory (IRT Scale 200 – 800) • Solusi Formula LaTeX</p>
    </div>

    <!-- Soal 1 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 1 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: SPLDV</span>
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
        <p><strong>Soal:</strong> Perhatikan grafik sistem pertidaksamaan linear. Daerah yang memenuhi $x + y \\le 4$, $x + 3y \\ge 6$, $x \\ge 0$, $y \\ge 0$ adalah ....</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <ul>
            <li>$x + y \\le 4$: daerah di bawah/kiri garis $x + y = 4$.</li>
            <li>$x + 3y \\ge 6$: daerah di atas/kanan garis $x + 3y = 6$.</li>
            <li>$x \\ge 0, y \\ge 0$: Kuadran I.</li>
        </ul>
        <p>Irisan kedua daerah di Kuadran I membentuk <strong>Daerah II</strong>.</p>
        <div class="jawaban-akhir">Jawaban Benar: B (Daerah II)</div>
    </div>

    <!-- Soal 3 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 3 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Fungsi Invers</span>
        </div>
        <p><strong>Soal:</strong> Diketahui $f(x) = \\sqrt{2x + 3}$. Jika $f^{-1}(x)$ adalah invers fungsi $f(x)$, nilai dari $f^{-1}(3) = \\dots$</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <p>Gunakan sifat $f^{-1}(3) = k \\iff f(k) = 3$:</p>
        $$\\sqrt{2k + 3} = 3 \\implies 2k + 3 = 9 \\implies 2k = 6 \\implies k = 3$$
        <div class="jawaban-akhir">Jawaban Benar: B (3)</div>
    </div>

    <!-- Soal 4 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 4 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Komposisi Fungsi</span>
        </div>
        <p><strong>Soal:</strong> Jika $g(x) = x - 1$ dan $(f \\circ g)(x) = x^2 - 4x + 18$, nilai $f(2) = \\dots$</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <p>Cari nilai $x$ agar $g(x) = 2 \\implies x - 1 = 2 \\implies x = 3$.</p>
        $$f(g(3)) = f(2) = 3^2 - 4(3) + 18 = 9 - 12 + 18 = 15$$
        <div class="jawaban-akhir">Jawaban Benar: C (15)</div>
    </div>

    <!-- Soal 5 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 5 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Barisan & Deret Eksponen</span>
        </div>
        <p><strong>Soal:</strong> Setiap $\\frac{1}{2}$ hari bakteri membelah diri menjadi 2. Awalnya ada 2 bakteri. Setiap 2 hari $\\frac{1}{4}$ bakteri mati. Banyaknya bakteri setelah 3 hari adalah ....</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <ul>
            <li><strong>Hari ke-2 (4 kali membelah):</strong> $2 \\times 2^4 = 32$ bakteri.</li>
            <li>Kematian akhir hari ke-2: $32 - \\frac{1}{4}(32) = 24$ bakteri.</li>
            <li><strong>Hari ke-3 (1 hari berikutnya / 2 kali membelah):</strong> $24 \\times 2^2 = 24 \\times 4 = 96$ bakteri.</li>
        </ul>
        <div class="jawaban-akhir">Jawaban Benar: C (96 bakteri)</div>
    </div>

    <!-- Soal 6 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 6 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Aplikasi Turunan</span>
        </div>
        <p><strong>Soal:</strong> Persegi $30\\text{ cm} \\times 30\\text{ cm}$ dipotong pojoknya sepanjang $x$ untuk membuat kotak. Volume maksimum kotak adalah ....</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        $$V(x) = x(30 - 2x)^2 = 4x^3 - 120x^2 + 900x$$
        $$V'(x) = 12x^2 - 240x + 900 = 0 \\implies x^2 - 20x + 75 = 0 \\implies x = 5\\text{ cm}$$
        $$V(5) = 5(30 - 10)^2 = 5(400) = 2.000\\text{ cm}^3$$
        <div class="jawaban-akhir">Jawaban Benar: A (2.000 cm³)</div>
    </div>

    <!-- Soal 7 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 7 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Trigonometri Sudut Tumpul</span>
        </div>
        <p><strong>Soal:</strong> Diketahui $\\sin A = \\frac{1}{a}$ dengan $A$ sudut tumpul. Nilai $\\cos A = \\dots$</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <p>Sisi samping $= \\sqrt{a^2 - 1}$. Karena $A$ tumpul (Kuadran II), nilai $\\cos A$ bernilai negatif:</p>
        $$\\cos A = -\\frac{\\sqrt{a^2 - 1}}{a}$$
        <div class="jawaban-akhir">Jawaban Benar: D</div>
    </div>

    <!-- Soal 8 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 8 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Statistika & Diagram</span>
        </div>
        <p><strong>Soal:</strong> Peningkatan tertinggi jumlah produksi pakaian Bu Rahmi terjadi pada bulan ....</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <p>Berdasarkan grafik kenaikan produksi bulanan, lonjakan selisih terbesar terjadi pada bulan <strong>November</strong>.</p>
        <div class="jawaban-akhir">Jawaban Benar: D (November)</div>
    </div>

    <!-- Soal 9 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 9 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Statistika Modus</span>
        </div>
        <p><strong>Soal:</strong> Modus dari data tabel interval 64 – 66 dengan frekuensi tertinggi $f = 9$ adalah ....</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        $$T_b = 63,5, \\quad d_1 = 9 - 6 = 3, \\quad d_2 = 9 - 6 = 3, \\quad p = 3$$
        $$\\text{Mo} = 63,5 + \\left(\\frac{3}{3 + 3}\\right) \\times 3 = 63,5 + 1,5 = 65,0$$
        <div class="jawaban-akhir">Jawaban Benar: C (65,0)</div>
    </div>

    <!-- Soal 10 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 10 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Peluang Kejadian Bersyarat</span>
        </div>
        <p><strong>Soal:</strong> Terdapat 6 grup band putra dan 4 putri (total 10). Peluang terambil band putra pada pengambilan pertama dan putri pada pengambilan kedua (tanpa pengembalian) adalah ....</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        $$P(A \\cap B) = \\frac{6}{10} \\times \\frac{4}{9} = \\frac{24}{90} = \\frac{4}{15}$$
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
        $$\\frac{7}{4} \\times \\frac{8}{21} = \\frac{2}{3} \\implies \\frac{1}{4} + \\frac{2}{3} = \\frac{3 + 8}{12} = \\frac{11}{12}$$
        <div class="jawaban-akhir">Jawaban Benar: C (11/12)</div>
    </div>

    <!-- Soal 12 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 12 <span class="tipe-badge">Pilihan Ganda / Evaluasi</span></span>
            <span>Topik: Program Linear Laba Maksimum</span>
        </div>
        <p><strong>Soal:</strong> Mirna memproduksi bolu (biaya 15.000, laba 6.000) dan brownies (biaya 20.000, laba 7.000). Mana kebenaran dari pernyataan laba maksimum?</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <p>Pernyataan (1) Salah, Pernyataan (2) Salah, Pernyataan (3) Keuntungan Maksimum $3.100.000$ Benar.</p>
        <div class="jawaban-akhir">Jawaban Benar: A ((1) Salah, (2) Salah, (3) Benar)</div>
    </div>

    <!-- Soal 13 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 13 <span class="tipe-badge">Benar / Salah</span></span>
            <span>Topik: Geometri Trapesium Sama Kaki</span>
        </div>
        <p><strong>Soal:</strong> Trapesium sama kaki $ABCD$, $\\angle BAD = 70^\\circ, \\angle ABD = 30^\\circ$. Tentukan kebenaran sudut $\\angle BCD = 110^\\circ, \\angle CBD = 40^\\circ, \\angle BDC = 40^\\circ$.</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <ul>
            <li>$\\angle BCD = 180^\\circ - 70^\\circ = 110^\\circ$ (Benar)</li>
            <li>$\\angle CBD = 70^\\circ - 30^\\circ = 40^\\circ$ (Benar)</li>
            <li>$\\angle BDC = 40^\\circ$ (Benar)</li>
        </ul>
        <div class="jawaban-akhir">Jawaban Benar: A (1) Benar, 2) Benar, 3) Benar)</div>
    </div>

    <!-- Soal 14 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 14 <span class="tipe-badge">Kecukupan Data</span></span>
            <span>Topik: Geometri Trapesium Siku-siku</span>
        </div>
        <p><strong>Soal:</strong> $AB = 3, AD \\le BC$. Apakah keliling $> 25$? Pernyataan (1) Luas $= 24$. Pernyataan (2) $BC = 10, CD = 5$.</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <p>Pernyataan (1) tidak menentukan $CD$, sehingga tidak cukup. Pernyataan (2) memberikan $AD = 6$, sehingga keliling $= 24 \\le 25$ dapat dijawab pasti. Pernyataan (2) SAJA cukup.</p>
        <div class="jawaban-akhir">Jawaban Benar: B (Pernyataan (2) SAJA cukup)</div>
    </div>

    <!-- Soal 15 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 15 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Trigonometri Elevasi Tangga</span>
        </div>
        <p><strong>Soal:</strong> Tangga $6\\text{ m}$ disandarkan membentuk sudut $60^\\circ$ dengan lantai. Tinggi dinding disentuh tangga adalah ....</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        $$h = 6 \\times \\sin 60^\\circ = 6 \\times \\frac{\\sqrt{3}}{2} = 3\\sqrt{3}\\text{ meter}$$
        <div class="jawaban-akhir">Jawaban Benar: C ($3\\sqrt{3}\\text{ meter}$)</div>
    </div>

    <!-- Soal 16 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 16 <span class="tipe-badge">Checkbox</span></span>
            <span>Topik: Statistika Rata-rata Susulan</span>
        </div>
        <p><strong>Soal:</strong> Rata-rata 17 murid $= 83$. Ditambah 3 murid susulan, rata-rata 20 murid $= 82$. Pilih semua pernyataan benar.</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <ul>
            <li>Jumlah nilai 3 susulan $= 20(82) - 17(83) = 1.640 - 1.411 = 229$ (Pernyataan A Benar)</li>
            <li>Rata-rata 3 susulan $= \\frac{229}{3} \\approx 76,33 > 70$ (Pernyataan B Benar)</li>
            <li>Nilai terendah $\\ge 229 - 200 = 29$ (Pernyataan C Benar)</li>
        </ul>
        <div class="jawaban-akhir">Jawaban Benar: Centang A, B, dan C</div>
    </div>

    <!-- Soal 17 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 17 <span class="tipe-badge">Benar / Salah</span></span>
            <span>Topik: Grafik Fungsi Kuadrat</span>
        </div>
        <p><strong>Soal:</strong> $f(x) = 4(x^2 - 8x + 12)$. Tentukan kebenaran: 1) Terbuka ke atas, 2) Memotong $y = -18$, 3) Tidak melalui kuadran 3.</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <ul>
            <li>Koefisien $a = 4 > 0$ (Terbuka ke atas) $\\rightarrow$ Benar</li>
            <li>Nilai minimum $y_p = -16$, tidak pernah mencapai $-18$ $\\rightarrow$ Salah</li>
            <li>Untuk $x < 0, f(x) > 0$ (Kuadran II), tidak lewat Kuadran III $\\rightarrow$ Benar</li>
        </ul>
        <div class="jawaban-akhir">Jawaban Benar: A (1) Benar, 2) Salah, 3) Benar)</div>
    </div>

    <!-- Soal 18 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 18 <span class="tipe-badge">Checkbox</span></span>
            <span>Topik: Fungsi Tagihan Listrik</span>
        </div>
        <p><strong>Soal:</strong> $f(x) = 1.350x + 25.000$. Tagihan $80.000$ terjadi saat pemakaian lebih besar dari biasanya. Berapa pemakaian biasanya?</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <p>Pemakaian saat ini $x = \\frac{55.000}{1.350} \\approx 40,74\\text{ kWh}$. Pemakaian biasanya pasti kurang dari pemakaian saat ini. Opsi yang memenuhi adalah 85 kWh dan 90 kWh.</p>
        <div class="jawaban-akhir">Jawaban Benar: Centang A (85 kWh) dan B (90 kWh)</div>
    </div>

    <!-- Soal 19 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 19 <span class="tipe-badge">Benar / Salah</span></span>
            <span>Topik: Skala Pembesaran Proyektor</span>
        </div>
        <p><strong>Soal:</strong> Desain $60\\text{ cm} \\times 60\\text{ cm}$ diproyeksikan ke layar $2,4\\text{ m} \\times 1,8\\text{ m}$. Tentukan kebenaran: 1) Rasio $1:1$, 2) Ukuran $> 1\\text{ m}$, 3) Terdapat bagian terpotong.</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        <ul>
            <li>Rasio $1:1$ tetap terjaga $\\rightarrow$ Benar</li>
            <li>Ukuran $> 100\\text{ cm}$ $\\rightarrow$ Benar</li>
            <li>Tinggi layar $1,8\\text{ m} = 180\\text{ cm}$ cukup, gambar tidak terpotong $\\rightarrow$ Salah</li>
        </ul>
        <div class="jawaban-akhir">Jawaban Benar: A (1) Benar, 2) Benar, 3) Salah)</div>
    </div>

    <!-- Soal 20 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 20 <span class="tipe-badge">Pilihan Ganda</span></span>
            <span>Topik: Kaidah Pencacahan Kode Akses</span>
        </div>
        <p><strong>Soal:</strong> Kode akses kupon bazar berformat $\\mathbf{AXBYC}$ (3 huruf, 2 angka tanpa pengulangan). Banyak kode unik berbeda yang dapat dibuat adalah ....</p>
        <div class="section-title">Pembahasan & Solusi:</div>
        $$N = (26 \\times 25 \\times 24) \\times (10 \\times 9) = 15.600 \\times 90 = 1.404.000$$
        <div class="jawaban-akhir">Jawaban Benar: C (1.404.000)</div>
    </div>

</div>

</body>
</html>`;

export const PEMBAHASAN_TURUNAN_HTML = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kuis TKA SMA – Matematika Lanjut: Turunan Fungsi</title>
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
        :root {
            --primary-color: #2563eb;
            --primary-dark: #1e40af;
            --bg-color: #f8fafc;
            --card-bg: #ffffff;
            --text-color: #1e293b;
            --text-muted: #64748b;
            --border-color: #e2e8f0;
            --key-bg: #dcfce7;
            --key-text: #166534;
            --solution-bg: #f0f9ff;
            --solution-border: #0284c7;
        }

        body {
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            line-height: 1.6;
            margin: 0;
            padding: 30px 15px;
        }

        .container {
            max-width: 850px;
            margin: 0 auto;
        }

        .header {
            background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
            color: white;
            padding: 30px;
            border-radius: 16px;
            margin-bottom: 30px;
            box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.2);
        }

        .header h1 {
            margin: 0 0 10px 0;
            font-size: 1.8rem;
        }

        .header-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            font-size: 0.95rem;
            opacity: 0.9;
        }

        .section-title {
            color: var(--primary-dark);
            font-size: 1.4rem;
            margin: 35px 0 20px 0;
            padding-bottom: 8px;
            border-bottom: 2px solid var(--border-color);
        }

        .card {
            background-color: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 24px;
            margin-bottom: 24px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }

        .question-header {
            font-weight: 600;
            font-size: 1.1rem;
            margin-bottom: 12px;
            color: #0f172a;
        }

        .options-list {
            list-style: none;
            padding-left: 0;
            margin: 15px 0;
        }

        .options-list li {
            padding: 8px 12px;
            margin-bottom: 6px;
            background-color: #f8fafc;
            border: 1px solid var(--border-color);
            border-radius: 6px;
        }

        .key-badge {
            display: inline-block;
            background-color: var(--key-bg);
            color: var(--key-text);
            font-weight: 600;
            padding: 4px 12px;
            border-radius: 6px;
            font-size: 0.9rem;
            margin-top: 10px;
        }

        .solution {
            background-color: var(--solution-bg);
            border-left: 4px solid var(--solution-border);
            padding: 16px 20px;
            border-radius: 0 8px 8px 0;
            margin-top: 16px;
        }

        .solution h4 {
            margin: 0 0 8px 0;
            color: #0369a1;
            font-size: 1rem;
        }

        .guide-box {
            background-color: #fffbe2;
            border: 1px solid #fde047;
            padding: 15px 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            font-size: 0.95rem;
        }

        @media (max-width: 600px) {
            body {
                padding: 15px 10px;
            }
            .card {
                padding: 16px;
            }
        }
    </style>
</head>
<body>

<div class="container">

    <!-- Header Kuis -->
    <div class="header">
        <h1>KUIS TKA SMA – Matematika Lanjut</h1>
        <div class="header-meta">
            <span><strong>Materi:</strong> Turunan Fungsi</span>
            <span>•</span>
            <span><strong>Jumlah Soal:</strong> 20</span>
            <span>•</span>
            <span><strong>Tingkat Kesulitan:</strong> Sedang</span>
        </div>
    </div>

    <!-- SEKSI A -->
    <h2 class="section-title">A. Pilihan Ganda (Nomor 1–10)</h2>

    <!-- Soal 1 -->
    <div class="card">
        <div class="question-header">Soal 1</div>
        <p>Jika $f(x)=3x^4-2x^3+5x-7$, maka nilai $f'(2)$ adalah ....</p>
        <ul class="options-list">
            <li><strong>A.</strong> 73</li>
            <li><strong>B.</strong> 77</li>
            <li><strong>C.</strong> 81</li>
            <li><strong>D.</strong> 89</li>
            <li><strong>E.</strong> 97</li>
        </ul>
        <div class="key-badge">Kunci Jawaban: B</div>
        <div class="solution">
            <h4>Pembahasan:</h4>
            <p>Turunan pertama dari $f(x)$:</p>
            $$f'(x) = 12x^3 - 6x^2 + 5$$
            <p>Substitusikan $x = 2$:</p>
            $$f'(2) = 12(2)^3 - 6(2)^2 + 5 = 12(8) - 6(4) + 5 = 96 - 24 + 5 = 77$$
        </div>
    </div>

    <!-- Soal 2 -->
    <div class="card">
        <div class="question-header">Soal 2</div>
        <p>Turunan pertama dari $f(x)=\\dfrac{2x+1}{x-3}$ adalah ....</p>
        <ul class="options-list">
            <li><strong>A.</strong> $\\dfrac{-7}{(x-3)^2}$</li>
            <li><strong>B.</strong> $\\dfrac{7}{(x-3)^2}$</li>
            <li><strong>C.</strong> $\\dfrac{-5}{(x-3)^2}$</li>
            <li><strong>D.</strong> $\\dfrac{2}{x-3}$</li>
            <li><strong>E.</strong> $\\dfrac{1}{(x-3)^2}$</li>
        </ul>
        <div class="key-badge">Kunci Jawaban: A</div>
        <div class="solution">
            <h4>Pembahasan:</h4>
            <p>Gunakan aturan hasil bagi $\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^2}$:</p>
            <p>Misal $u = 2x + 1 \\implies u' = 2$ dan $v = x - 3 \\implies v' = 1$.</p>
            $$f'(x) = \\frac{2(x-3) - (2x+1)(1)}{(x-3)^2} = \\frac{2x - 6 - 2x - 1}{(x-3)^2} = \\frac{-7}{(x-3)^2}$$
        </div>
    </div>

    <!-- Soal 3 -->
    <div class="card">
        <div class="question-header">Soal 3</div>
        <p>Turunan fungsi $f(x)=\\sqrt{x^2+1}$ adalah ....</p>
        <ul class="options-list">
            <li><strong>A.</strong> $\\dfrac{x}{\\sqrt{x^2+1}}$</li>
            <li><strong>B.</strong> $\\dfrac{2x}{\\sqrt{x^2+1}}$</li>
            <li><strong>C.</strong> $\\dfrac{x}{2\\sqrt{x^2+1}}$</li>
            <li><strong>D.</strong> $\\sqrt{x^2+1}$</li>
            <li><strong>E.</strong> $2x$</li>
        </ul>
        <div class="key-badge">Kunci Jawaban: A</div>
        <div class="solution">
            <h4>Pembahasan:</h4>
            <p>Bentuk fungsi $f(x) = (x^2+1)^{1/2}$. Gunakan aturan rantai:</p>
            $$f'(x) = \\frac{1}{2}(x^2+1)^{-1/2} \\cdot \\frac{d}{dx}(x^2+1) = \\frac{1}{2\\sqrt{x^2+1}} \\cdot (2x) = \\frac{x}{\\sqrt{x^2+1}}$$
        </div>
    </div>

    <!-- Soal 4 -->
    <div class="card">
        <div class="question-header">Soal 4</div>
        <p>Jika $y=(x^2+1)^5$, maka $y'$ adalah ....</p>
        <ul class="options-list">
            <li><strong>A.</strong> $10x(x^2+1)^4$</li>
            <li><strong>B.</strong> $5(x^2+1)^4$</li>
            <li><strong>C.</strong> $5x(x^2+1)^5$</li>
            <li><strong>D.</strong> $2x(x^2+1)^5$</li>
            <li><strong>E.</strong> $10(x^2+1)^4$</li>
        </ul>
        <div class="key-badge">Kunci Jawaban: A</div>
        <div class="solution">
            <h4>Pembahasan:</h4>
            <p>Menggunakan aturan rantai:</p>
            $$y' = 5(x^2+1)^4 \\cdot \\frac{d}{dx}(x^2+1) = 5(x^2+1)^4 \\cdot (2x) = 10x(x^2+1)^4$$
        </div>
    </div>

    <!-- Soal 5 -->
    <div class="card">
        <div class="question-header">Soal 5</div>
        <p>Gradien garis singgung kurva $y=x^3-6x^2+5$ di titik $x=1$ adalah ....</p>
        <ul class="options-list">
            <li><strong>A.</strong> -7</li>
            <li><strong>B.</strong> -9</li>
            <li><strong>C.</strong> -8</li>
            <li><strong>D.</strong> -10</li>
            <li><strong>E.</strong> -5</li>
        </ul>
        <div class="key-badge">Kunci Jawaban: B</div>
        <div class="solution">
            <h4>Pembahasan:</h4>
            <p>Gradien garis singgung $m = y'$:</p>
            $$y' = 3x^2 - 12x$$
            <p>Di $x = 1$:</p>
            $$m = y'(1) = 3(1)^2 - 12(1) = 3 - 12 = -9$$
        </div>
    </div>

    <!-- Soal 6 -->
    <div class="card">
        <div class="question-header">Soal 6</div>
        <p>Nilai maksimum lokal fungsi $f(x)=4x-x^2$ adalah ....</p>
        <ul class="options-list">
            <li><strong>A.</strong> 2</li>
            <li><strong>B.</strong> 3</li>
            <li><strong>C.</strong> 4</li>
            <li><strong>D.</strong> 5</li>
            <li><strong>E.</strong> 6</li>
        </ul>
        <div class="key-badge">Kunci Jawaban: C</div>
        <div class="solution">
            <h4>Pembahasan:</h4>
            <p>Cari titik stasioner dengan $f'(x) = 0$:</p>
            $$f'(x) = 4 - 2x = 0 \\implies 2x = 4 \\implies x = 2$$
            <p>Nilai maksimum lokalnya adalah:</p>
            $$f(2) = 4(2) - (2)^2 = 8 - 4 = 4$$
        </div>
    </div>

    <!-- Soal 7 -->
    <div class="card">
        <div class="question-header">Soal 7</div>
        <p>Fungsi $f(x)=x^3-3x$ memiliki titik stasioner pada ....</p>
        <ul class="options-list">
            <li><strong>A.</strong> $x=0$</li>
            <li><strong>B.</strong> $x=\\pm 1$</li>
            <li><strong>C.</strong> $x=\\pm 2$</li>
            <li><strong>D.</strong> $x=3$</li>
            <li><strong>E.</strong> Tidak ada</li>
        </ul>
        <div class="key-badge">Kunci Jawaban: B</div>
        <div class="solution">
            <h4>Pembahasan:</h4>
            <p>Syarat titik stasioner adalah $f'(x) = 0$:</p>
            $$f'(x) = 3x^2 - 3 = 0 \\implies 3(x^2 - 1) = 0 \\implies x^2 = 1 \\implies x = \\pm 1$$
        </div>
    </div>

    <!-- Soal 8 -->
    <div class="card">
        <div class="question-header">Soal 8</div>
        <p>Turunan kedua dari $f(x)=x^4-2x^2$ adalah ....</p>
        <ul class="options-list">
            <li><strong>A.</strong> $12x^2-4$</li>
            <li><strong>B.</strong> $4x^3-4x$</li>
            <li><strong>C.</strong> $12x^2$</li>
            <li><strong>D.</strong> $6x-4$</li>
            <li><strong>E.</strong> $8x^2-2$</li>
        </ul>
        <div class="key-badge">Kunci Jawaban: A</div>
        <div class="solution">
            <h4>Pembahasan:</h4>
            <p>Turunan pertama: $f'(x) = 4x^3 - 4x$</p>
            <p>Turunan kedua: $f''(x) = \\dfrac{d}{dx}(4x^3 - 4x) = 12x^2 - 4$</p>
        </div>
    </div>

    <!-- Soal 9 -->
    <div class="card">
        <div class="question-header">Soal 9</div>
        <p>Jika $f'(x)>0$ pada suatu interval, maka fungsi ....</p>
        <ul class="options-list">
            <li><strong>A.</strong> Konstan</li>
            <li><strong>B.</strong> Menurun</li>
            <li><strong>C.</strong> Naik</li>
            <li><strong>D.</strong> Maksimum</li>
            <li><strong>E.</strong> Minimum</li>
        </ul>
        <div class="key-badge">Kunci Jawaban: C</div>
        <div class="solution">
            <h4>Pembahasan:</h4>
            <p>Sesuai dengan teorema kemonotonan: jika $f'(x) > 0$ pada seluruh $x$ dalam suatu interval, maka $f(x)$ merupakan **fungsi naik** pada interval tersebut.</p>
        </div>
    </div>

    <!-- Soal 10 -->
    <div class="card">
        <div class="question-header">Soal 10</div>
        <p>Jika $f''(a)>0$ dan $f'(a)=0$, maka titik tersebut merupakan ....</p>
        <ul class="options-list">
            <li><strong>A.</strong> Titik belok</li>
            <li><strong>B.</strong> Maksimum lokal</li>
            <li><strong>C.</strong> Minimum lokal</li>
            <li><strong>D.</strong> Tidak dapat ditentukan</li>
            <li><strong>E.</strong> Gradien nol</li>
        </ul>
        <div class="key-badge">Kunci Jawaban: C</div>
        <div class="solution">
            <h4>Pembahasan:</h4>
            <p>Berdasarkan **Uji Turunan Kedua** untuk ekstrem lokal:</p>
            <ul>
                <li>Jika $f'(a)=0$ dan $f''(a)>0$, kurva cekung ke atas di $x=a$, sehingga $x=a$ merupakan titik **minimum lokal**.</li>
                <li>Jika $f'(a)=0$ dan $f''(a)<0$, maka $x=a$ merupakan titik **maksimum lokal**.</li>
            </ul>
        </div>
    </div>

    <!-- SEKSI B -->
    <h2 class="section-title">B. Checkbox (Jawaban Bisa Lebih dari Satu) (Nomor 11–15)</h2>

    <!-- Soal 11 -->
    <div class="card">
        <div class="question-header">Soal 11</div>
        <p>Manakah fungsi berikut yang turunannya selalu positif untuk setiap $x \\in \\mathbb{R}$?</p>
        <ul class="options-list">
            <li>☐ <strong>A.</strong> $x^2+1$</li>
            <li>☑ <strong>B.</strong> $3x+2$</li>
            <li>☑ <strong>C.</strong> $e^x$</li>
            <li>☐ <strong>D.</strong> $-x^2$</li>
            <li>☐ <strong>E.</strong> $x^3$</li>
        </ul>
        <div class="key-badge">Kunci Jawaban: B, C</div>
        <div class="solution">
            <h4>Pembahasan:</h4>
            <ul>
                <li><strong>A:</strong> $f'(x) = 2x$ (bernilai negatif untuk $x < 0$).</li>
                <li><strong>B:</strong> $f'(x) = 3$ (selalu positif untuk setiap $x$). <strong>[BENAR]</strong></li>
                <li><strong>C:</strong> $f'(x) = e^x > 0$ untuk seluruh $x \\in \\mathbb{R}$. <strong>[BENAR]</strong></li>
                <li><strong>D:</strong> $f'(x) = -2x$ (bernilai negatif untuk $x > 0$).</li>
                <li><strong>E:</strong> $f'(x) = 3x^2$ (bernilai $0$ saat $x=0$, jadi tidak *selalu* positif).</li>
            </ul>
        </div>
    </div>

    <!-- Soal 12 -->
    <div class="card">
        <div class="question-header">Soal 12</div>
        <p>Manakah yang merupakan aturan turunan?</p>
        <ul class="options-list">
            <li>☑ <strong>A.</strong> Aturan rantai</li>
            <li>☑ <strong>B.</strong> Aturan hasil kali</li>
            <li>☑ <strong>C.</strong> Aturan hasil bagi</li>
            <li>☐ <strong>D.</strong> Aturan Pythagoras</li>
            <li>☑ <strong>E.</strong> Aturan pangkat</li>
        </ul>
        <div class="key-badge">Kunci Jawaban: A, B, C, E</div>
        <div class="solution">
            <h4>Pembahasan:</h4>
            <p>Aturan Rantai, Hasil Kali, Hasil Bagi, dan Pangkat adalah teknik/aturan dasar kalkulus diferensial. Sedangkan Aturan Pythagoras adalah teorema pada segitiga siku-siku (geometri/trigonometri).</p>
        </div>
    </div>

    <!-- Soal 13 -->
    <div class="card">
        <div class="question-header">Soal 13</div>
        <p>Fungsi berikut memiliki titik stasioner.</p>
        <ul class="options-list">
            <li>☑ <strong>A.</strong> $x^2$</li>
            <li>☑ <strong>B.</strong> $x^3$</li>
            <li>☐ <strong>C.</strong> $2x+1$</li>
            <li>☑ <strong>D.</strong> $x^4$</li>
            <li>☐ <strong>E.</strong> $e^x$</li>
        </ul>
        <div class="key-badge">Kunci Jawaban: A, B, D</div>
        <div class="solution">
            <h4>Pembahasan:</h4>
            <p>Titik stasioner ada jika $f'(x) = 0$ dapat dipenuhi:</p>
            <ul>
                <li><strong>A.</strong> $f'(x) = 2x = 0 \\implies x = 0$ (Ada)</li>
                <li><strong>B.</strong> $f'(x) = 3x^2 = 0 \\implies x = 0$ (Ada)</li>
                <li><strong>C.</strong> $f'(x) = 2 \\neq 0$ (Tidak ada)</li>
                <li><strong>D.</strong> $f'(x) = 4x^3 = 0 \\implies x = 0$ (Ada)</li>
                <li><strong>E.</strong> $f'(x) = e^x \\neq 0$ (Tidak ada)</li>
            </ul>
        </div>
    </div>

    <!-- Soal 14 -->
    <div class="card">
        <div class="question-header">Soal 14</div>
        <p>Yang termasuk aplikasi turunan adalah ....</p>
        <ul class="options-list">
            <li>☑ <strong>A.</strong> Menentukan gradien garis singgung</li>
            <li>☑ <strong>B.</strong> Menentukan maksimum-minimum</li>
            <li>☑ <strong>C.</strong> Menentukan kecepatan sesaat</li>
            <li>☐ <strong>D.</strong> Menentukan volume prisma</li>
            <li>☑ <strong>E.</strong> Menentukan interval naik-turun</li>
        </ul>
        <div class="key-badge">Kunci Jawaban: A, B, C, E</div>
        <div class="solution">
            <h4>Pembahasan:</h4>
            <p>Pernyataan A, B, C, dan E merupakan penerapan langsung dari turunan pertama dan kedua. Menentukan volume prisma menggunakan rumus geometri spasial dasar (Luas Alas $\\times$ Tinggi).</p>
        </div>
    </div>

    <!-- Soal 15 -->
    <div class="card">
        <div class="question-header">Soal 15</div>
        <p>Jika $f'(x)=0$, maka kemungkinan yang terjadi adalah ....</p>
        <ul class="options-list">
            <li>☑ <strong>A.</strong> Titik maksimum</li>
            <li>☑ <strong>B.</strong> Titik minimum</li>
            <li>☑ <strong>C.</strong> Titik belok stasioner</li>
            <li>☐ <strong>D.</strong> Selalu titik belok</li>
            <li>☐ <strong>E.</strong> Selalu maksimum</li>
        </ul>
        <div class="key-badge">Kunci Jawaban: A, B, C</div>
        <div class="solution">
            <h4>Pembahasan:</h4>
            <p>Titik di mana $f'(x) = 0$ dinamakan titik kritis/stasioner, yang kemungkinannya adalah:</p>
            <ul>
                <li>Maksimum lokal (jika $f'' < 0$)</li>
                <li>Minimum lokal (jika $f'' > 0$)</li>
                <li>Titik belok stasioner (misalnya pada $y = x^3$ di $x=0$)</li>
            </ul>
        </div>
    </div>

    <!-- SEKSI C -->
    <h2 class="section-title">C. Benar / Salah (Nomor 16–18)</h2>

    <!-- Soal 16 -->
    <div class="card">
        <div class="question-header">Soal 16</div>
        <p>Jika $f'(x) < 0$, maka fungsi menurun.</p>
        <ul class="options-list">
            <li>● <strong>Benar</strong></li>
            <li>○ <strong>Salah</strong></li>
        </ul>
        <div class="key-badge">Kunci Jawaban: Benar</div>
        <div class="solution">
            <h4>Pembahasan:</h4>
            <p>Turunan pertama bernilai negatif ($f'(x) < 0$) menunjukkan gradien garis singgung negatif, yang artinya fungsi dalam keadaan **menurun** pada interval tersebut.</p>
        </div>
    </div>

    <!-- Soal 17 -->
    <div class="card">
        <div class="question-header">Soal 17</div>
        <p>Turunan dari konstanta adalah konstanta.</p>
        <ul class="options-list">
            <li>○ <strong>Benar</strong></li>
            <li>● <strong>Salah</strong></li>
        </ul>
        <div class="key-badge">Kunci Jawaban: Salah</div>
        <div class="solution">
            <h4>Pembahasan:</h4>
            <p>Turunan dari fungsi konstanta $f(x) = c$ adalah **nol** ($f'(x) = 0$). Menyatakan turunannya "adalah konstanta" secara umum keliru karena nol adalah nilai spesifik tunggal (tidak semua nilai konstanta).</p>
        </div>
    </div>

    <!-- Soal 18 -->
    <div class="card">
        <div class="question-header">Soal 18</div>
        <p>Jika $f''(x) < 0$, maka grafik cekung ke bawah.</p>
        <ul class="options-list">
            <li>● <strong>Benar</strong></li>
            <li>○ <strong>Salah</strong></li>
        </ul>
        <div class="key-badge">Kunci Jawaban: Benar</div>
        <div class="solution">
            <h4>Pembahasan:</h4>
            <p>Sesuai uji kecekungan: Jika turunan kedua negatif ($f''(x) < 0$), maka grafik fungsi **cekung ke bawah** (concave downward).</p>
        </div>
    </div>

    <!-- SEKSI D -->
    <h2 class="section-title">D. Kecukupan Data (Nomor 19–20)</h2>

    <div class="guide-box">
        <strong>Petunjuk Pilihan Jawaban:</strong><br>
        <strong>A.</strong> Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.<br>
        <strong>B.</strong> Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.<br>
        <strong>C.</strong> KEDUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.<br>
        <strong>D.</strong> Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.<br>
        <strong>E.</strong> Pernyataan (1) dan pernyataan (2) TIDAK CUKUP untuk menjawab pertanyaan.
    </div>

    <!-- Soal 19 -->
    <div class="card">
        <div class="question-header">Soal 19</div>
        <p>Apakah $x=2$ merupakan titik stasioner fungsi $f(x)$?</p>
        <p>(1) $f'(2) = 0$<br>
           (2) $f''(2) > 0$</p>
        <ul class="options-list">
            <li><strong>A.</strong> (1) saja cukup</li>
            <li><strong>B.</strong> (2) saja cukup</li>
            <li><strong>C.</strong> Bersama-sama cukup</li>
            <li><strong>D.</strong> Masing-masing cukup</li>
            <li><strong>E.</strong> Tidak cukup</li>
        </ul>
        <div class="key-badge">Kunci Jawaban: A</div>
        <div class="solution">
            <h4>Pembahasan:</h4>
            <p>Definisi titik stasioner pada $x=a$ adalah syarat $f'(a) = 0$.</p>
            <ul>
                <li><strong>Pernyataan (1):</strong> $f'(2) = 0 \\implies$ Langsung menjawab bahwa $x=2$ **adalah** titik stasioner. (Cukup)</li>
                <li><strong>Pernyataan (2):</strong> $f''(2) > 0 \\implies$ Hanya memberi tahu kecekungan grafik di $x=2$, tetapi tanpa mengetahui $f'(2)$, kita tidak bisa memastikan apakah $x=2$ titik stasioner. (Tidak Cukup)</li>
            </ul>
            <p>Jadi, pernyataan (1) saja cukup.</p>
        </div>
    </div>

    <!-- Soal 20 -->
    <div class="card">
        <div class="question-header">Soal 20</div>
        <p>Apakah fungsi $f(x)$ memiliki maksimum lokal di $x=a$?</p>
        <p>(1) $f'(a) = 0$<br>
           (2) $f''(a) < 0$</p>
        <ul class="options-list">
            <li><strong>A.</strong> (1) saja cukup</li>
            <li><strong>B.</strong> (2) saja cukup</li>
            <li><strong>C.</strong> Bersama-sama cukup</li>
            <li><strong>D.</strong> Masing-masing cukup</li>
            <li><strong>E.</strong> Tidak cukup</li>
        </ul>
        <div class="key-badge">Kunci Jawaban: C</div>
        <div class="solution">
            <h4>Pembahasan:</h4>
            <p>Untuk membuktikan $x=a$ adalah **maksimum lokal** menggunakan Uji Turunan Kedua, dibutuhkan dua syarat sekaligus:</p>
            <ol>
                <li>$f'(a) = 0$ (menandakan $x=a$ adalah titik stasioner).</li>
                <li>$f''(a) < 0$ (menandakan kurva cekung ke bawah).</li>
            </ol>
            <ul>
                <li>Pernyataan (1) saja: hanya tahu stasioner, bisa jadi minimum, maksimum, atau titik belok. (Tidak Cukup)</li>
                <li>Pernyataan (2) saja: hanya tahu cekung ke bawah, tetapi belum tentu titik stasioner. (Tidak Cukup)</li>
            </ul>
            <p>Oleh karena itu, **kedua pernyataan BERSAMA-SAMA cukup** untuk menentukan maksimum lokal.</p>
        </div>
    </div>

</div>

</body>
</html>`;

export const PEMBAHASAN_INTEGRAL_HTML = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Soal dan Pembahasan Integral</title>
    <!-- MathJax Library untuk Rendering LaTeX -->
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
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            background-color: #f4f6f9;
            color: #333;
            max-width: 800px;
            margin: 30px auto;
            padding: 20px;
        }
        .card {
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 24px;
            margin-bottom: 25px;
        }
        h2 {
            color: #1e3a8a;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 8px;
            margin-top: 0;
        }
        .options {
            list-style-type: none;
            padding-left: 0;
        }
        .options li {
            margin-bottom: 8px;
            padding: 6px 12px;
            background-color: #f8fafc;
            border-radius: 4px;
            border: 1px solid #e2e8f0;
        }
        .key {
            display: inline-block;
            background-color: #dcfce7;
            color: #166534;
            font-weight: bold;
            padding: 4px 10px;
            border-radius: 4px;
            margin-bottom: 12px;
        }
        .solution {
            background-color: #f0f9ff;
            border-left: 4px solid #0284c7;
            padding: 12px 16px;
            border-radius: 0 4px 4px 0;
            margin-top: 15px;
        }
        .solution h3 {
            margin-top: 0;
            color: #0369a1;
        }
    </style>
</head>
<body>

    <!-- Soal 1 -->
    <div class="card">
        <h2>Soal 1</h2>
        <p>Nilai dari</p>
        $$\\int (3x^2-4x+5)\\,dx$$
        <p>adalah ....</p>
        
        <ul class="options">
            <li><strong>A.</strong> $x^3-2x^2+5x+C$</li>
            <li><strong>B.</strong> $3x^3-2x^2+5x+C$</li>
            <li><strong>C.</strong> $x^3-4x^2+5x+C$</li>
            <li><strong>D.</strong> $x^3-2x+5+C$</li>
            <li><strong>E.</strong> $3x^3-4x^2+5x+C$</li>
        </ul>

        <div class="key">Kunci: A</div>

        <div class="solution">
            <h3>Pembahasan</h3>
            <p>Gunakan sifat linear integral.</p>
            $$\\int 3x^2\\,dx = x^3$$
            $$\\int -4x\\,dx = -2x^2$$
            $$\\int 5\\,dx = 5x$$
            <p>Sehingga:</p>
            $$\\boxed{x^3-2x^2+5x+C}$$
        </div>
    </div>

    <!-- Soal 2 -->
    <div class="card">
        <h2>Soal 2</h2>
        <p>Nilai dari</p>
        $$\\int_0^2 (2x+1)\\,dx$$
        <p>adalah ....</p>
        
        <ul class="options">
            <li><strong>A.</strong> 4</li>
            <li><strong>B.</strong> 5</li>
            <li><strong>C.</strong> 6</li>
            <li><strong>D.</strong> 7</li>
            <li><strong>E.</strong> 8</li>
        </ul>

        <div class="key">Kunci: C</div>

        <div class="solution">
            <h3>Pembahasan</h3>
            <p>Antiturunan:</p>
            $$F(x) = x^2+x$$
            <p>Maka:</p>
            $$F(2)-F(0) = (4+2)-0 = 6$$
            <p>Jadi jawabannya:</p>
            $$\\boxed{6}$$
        </div>
    </div>

    <!-- Soal 3 -->
    <div class="card">
        <h2>Soal 3</h2>
        <p>Nilai dari</p>
        $$\\int 2x(x^2+1)^5\\,dx$$
        <p>adalah ....</p>

        <ul class="options">
            <li><strong>A.</strong> $\\dfrac{(x^2+1)^6}{3}+C$</li>
            <li><strong>B.</strong> $\\dfrac{(x^2+1)^6}{6}+C$</li>
            <li><strong>C.</strong> $(x^2+1)^6+C$</li>
            <li><strong>D.</strong> $2(x^2+1)^6+C$</li>
            <li><strong>E.</strong> $\\dfrac{(x^2+1)^5}{5}+C$</li>
        </ul>

        <div class="key">Kunci: B</div>

        <div class="solution">
            <h3>Pembahasan</h3>
            <p>Substitusi:</p>
            $$u = x^2+1$$
            <p>maka</p>
            $$du = 2x\\,dx$$
            <p>Integral menjadi:</p>
            $$\\int u^5\\,du = \\frac{u^6}{6}+C$$
            <p>Kembalikan ke variabel semula:</p>
            $$\\boxed{\\frac{(x^2+1)^6}{6}+C}$$
        </div>
    </div>

    <!-- Soal 4 -->
    <div class="card">
        <h2>Soal 4</h2>
        <p>Hitunglah</p>
        $$\\int xe^x\\,dx$$

        <ul class="options">
            <li><strong>A.</strong> $xe^x+C$</li>
            <li><strong>B.</strong> $e^x(x-1)+C$</li>
            <li><strong>C.</strong> $e^x(x+1)+C$</li>
            <li><strong>D.</strong> $xe^x-e^x+C$</li>
            <li><strong>E.</strong> B dan D benar</li>
        </ul>

        <div class="key">Kunci: E</div>

        <div class="solution">
            <h3>Pembahasan</h3>
            <p>Gunakan metode integral parsial.</p>
            <p>Ambil:</p>
            $$u = x, \\qquad dv = e^x\\,dx$$
            <p>Sehingga:</p>
            $$du = dx, \\qquad v = e^x$$
            <p>Maka:</p>
            $$\\int xe^x\\,dx = xe^x - \\int e^x\\,dx$$
            $$= xe^x - e^x + C$$
            <p>atau</p>
            $$= e^x(x-1) + C$$
            <p>Kedua bentuk tersebut ekuivalen.</p>
            <p>Jadi jawaban yang benar adalah:</p>
            $$\\boxed{\\text{E}}$$
        </div>
    </div>

    <!-- Soal 5 -->
    <div class="card">
        <h2>Soal 5</h2>
        <p>Daerah yang dibatasi kurva $y=x^2$, sumbu-$x$, dan garis $x=2$ memiliki luas ....</p>

        <ul class="options">
            <li><strong>A.</strong> $\\dfrac{8}{3}$</li>
            <li><strong>B.</strong> $\\dfrac{4}{3}$</li>
            <li><strong>C.</strong> 4</li>
            <li><strong>D.</strong> $\\dfrac{16}{3}$</li>
            <li><strong>E.</strong> 8</li>
        </ul>

        <div class="key">Kunci: A</div>

        <div class="solution">
            <h3>Pembahasan</h3>
            <p>Luas daerah adalah:</p>
            $$\\int_0^2 x^2\\,dx$$
            <p>Antiturunannya:</p>
            $$\\frac{x^3}{3}$$
            <p>Sehingga:</p>
            $$\\left[\\frac{x^3}{3}\\right]_0^2 = \\frac{8}{3}$$
            <p>Jadi luas daerah tersebut adalah:</p>
            $$\\boxed{\\frac{8}{3}}$$
        </div>
    </div>

</body>
</html>`;

export const PEMBAHASAN_TKA_MATEMATIKA_LANJUT_HTML = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pembahasan Resmi TKA Matematika Lanjut (20 Soal IRT)</title>
    <!-- MathJax Library untuk Rendering LaTeX -->
    <script>
        MathJax = {
            tex: {
                inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
                displayMath: [['$$', '$$'], ['\\\\[', \\\\]']]
            }
        };
    </script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #2c3e50;
            background-color: #f4f7f6;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 900px;
            margin: 0 auto;
            background: #ffffff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }
        h1 {
            text-align: center;
            color: #1a365d;
            border-bottom: 3px solid #3182ce;
            padding-bottom: 12px;
            margin-bottom: 30px;
        }
        .soal-box {
            background-color: #ffffff;
            border: 1px solid #e2e8f0;
            border-left: 5px solid #3182ce;
            margin-bottom: 25px;
            padding: 20px;
            border-radius: 6px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.02);
        }
        .soal-header {
            font-weight: bold;
            font-size: 1.15em;
            color: #2b6cb0;
            margin-bottom: 12px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px dashed #cbd5e0;
            padding-bottom: 8px;
        }
        .tipe-badge {
            background-color: #ebf8ff;
            color: #2b6cb0;
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 0.85em;
            border: 1px solid #bee3f8;
        }
        .section-title {
            font-weight: bold;
            color: #4a5568;
            margin-top: 10px;
            margin-bottom: 5px;
        }
        .jawaban-akhir {
            font-weight: bold;
            color: #276749;
            background-color: #f0fff4;
            border: 1px solid #c6f6d5;
            padding: 10px 15px;
            border-radius: 5px;
            margin-top: 15px;
            display: inline-block;
        }
        ul, ol {
            padding-left: 20px;
            margin-top: 5px;
        }
        li {
            margin-bottom: 6px;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>Pembahasan Resmi TKA Matematika Lanjut (20 Soal IRT)</h1>

    <!-- Soal 1 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 1 <span class="tipe-badge">Pilihan Ganda 5 Opsi</span></span> 
            <span>Topik: Aljabar & Matriks</span>
        </div>
        <p><strong>Pertanyaan:</strong> Diketahui $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$. Determinan matriks $A$ adalah ....</p>
        <div class="section-title">Langkah Penyelesaian:</div>
        <p>Gunakan rumus determinan matriks $2 \\times 2$ yaitu $\\det(A) = ad - bc$:</p>
        $$\\det(A) = (2 \\cdot 4) - (1 \\cdot 3) = 8 - 3 = 5$$
        <div class="jawaban-akhir">Kunci Jawaban: B. 5</div>
    </div>

    <!-- Soal 2 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 2 <span class="tipe-badge">Pilihan Ganda 5 Opsi</span></span> 
            <span>Topik: Aljabar & Matriks</span>
        </div>
        <p><strong>Pertanyaan:</strong> Invers dari matriks $\\begin{pmatrix} 1 & 2 \\\\ 3 & 5 \\end{pmatrix}$ adalah ....</p>
        <div class="section-title">Langkah Penyelesaian:</div>
        <p>Hitung determinan $A$: $\\det(A) = 1(5) - 2(3) = 5 - 6 = -1$.</p>
        <p>Invers matriks dirumuskan oleh:</p>
        $$A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix} = \\frac{1}{-1} \\begin{pmatrix} 5 & -2 \\\\ -3 & 1 \\end{pmatrix} = \\begin{pmatrix} -5 & 2 \\\\ 3 & -1 \\end{pmatrix}$$
        <div class="jawaban-akhir">Kunci Jawaban: B. $\\begin{pmatrix} -5 & 2 \\\\ 3 & -1 \\end{pmatrix}$</div>
    </div>

    <!-- Soal 3 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 3 <span class="tipe-badge">Pilihan Ganda 5 Opsi</span></span> 
            <span>Topik: Polinomial (Suku Banyak)</span>
        </div>
        <p><strong>Pertanyaan:</strong> Jika $P(x) = x^3 - 4x^2 + x + 6$, maka sisa pembagian oleh $(x - 2)$ adalah ....</p>
        <div class="section-title">Langkah Penyelesaian:</div>
        <p>Berdasarkan Teorema Sisa, sisa pembagian $P(x)$ oleh $(x - 2)$ adalah $P(2)$:</p>
        $$P(2) = (2)^3 - 4(2)^2 + (2) + 6 = 8 - 16 + 2 + 6 = 0$$
        <div class="jawaban-akhir">Kunci Jawaban: B. 0</div>
    </div>

    <!-- Soal 4 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 4 <span class="tipe-badge">Pilihan Ganda 5 Opsi</span></span> 
            <span>Topik: Aljabar</span>
        </div>
        <p><strong>Pertanyaan:</strong> Faktor dari $x^2 - 7x + 12$ adalah ....</p>
        <div class="section-title">Langkah Penyelesaian:</div>
        <p>Cari dua bilangan yang jika dikalikan menghasilkan $12$ dan jika dijumlahkan menghasilkan $-7$. Bilangan tersebut adalah $-3$ dan $-4$:</p>
        $$x^2 - 7x + 12 = (x - 3)(x - 4)$$
        <div class="jawaban-akhir">Kunci Jawaban: B. $(x - 3)(x - 4)$</div>
    </div>

    <!-- Soal 5 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 5 <span class="tipe-badge">Pilihan Ganda 5 Opsi</span></span> 
            <span>Topik: Fungsi & Domain</span>
        </div>
        <p><strong>Pertanyaan:</strong> Domain fungsi $f(x) = \\frac{\\sqrt{x - 1}}{x - 4}$ adalah ....</p>
        <div class="section-title">Langkah Penyelesaian:</div>
        <ul>
            <li>Syarat dalam akar: $x - 1 \\ge 0 \\implies x \\ge 1$.</li>
            <li>Syarat penyebut: $x - 4 \\neq 0 \\implies x \\neq 4$.</li>
        </ul>
        <p>Maka domain fungsi adalah $x \\ge 1, x \\neq 4$.</p>
        <div class="jawaban-akhir">Kunci Jawaban: C. $x \\ge 1, x \\neq 4$</div>
    </div>

    <!-- Soal 6 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 6 <span class="tipe-badge">Pilihan Ganda 5 Opsi</span></span> 
            <span>Topik: Eksponen & Logaritma</span>
        </div>
        <p><strong>Pertanyaan:</strong> Nilai dari $\\log_2 32 + \\log_2 \\frac{1}{8}$ adalah ....</p>
        <div class="section-title">Langkah Penyelesaian:</div>
        $$\\log_2 32 = \\log_2 (2^5) = 5$$
        $$\\log_2 \\frac{1}{8} = \\log_2 (2^{-3}) = -3$$
        $$\\log_2 32 + \\log_2 \\frac{1}{8} = 5 + (-3) = 2$$
        <div class="jawaban-akhir">Kunci Jawaban: B. 2</div>
    </div>

    <!-- Soal 7 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 7 <span class="tipe-badge">Pilihan Ganda 5 Opsi</span></span> 
            <span>Topik: Vektor</span>
        </div>
        <p><strong>Pertanyaan:</strong> Panjang vektor $\\vec{v} = (6, -8)$ adalah ....</p>
        <div class="section-title">Langkah Penyelesaian:</div>
        $$|\\vec{v}| = \\sqrt{6^2 + (-8)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$$
        <div class="jawaban-akhir">Kunci Jawaban: C. 10</div>
    </div>

    <!-- Soal 8 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 8 <span class="tipe-badge">Pilihan Ganda 5 Opsi</span></span> 
            <span>Topik: Geometri Lingkaran</span>
        </div>
        <p><strong>Pertanyaan:</strong> Persamaan lingkaran berpusat di $(2, -1)$ dan berjari-jari $3$ adalah ....</p>
        <div class="section-title">Langkah Penyelesaian:</div>
        <p>Rumus baku lingkaran pusat $(a, b)$ dan jari-jari $r$:</p>
        $$(x - a)^2 + (y - b)^2 = r^2$$
        $$(x - 2)^2 + (y - (-1))^2 = 3^2 \\implies (x - 2)^2 + (y + 1)^2 = 9$$
        <div class="jawaban-akhir">Kunci Jawaban: C. $(x - 2)^2 + (y + 1)^2 = 9$</div>
    </div>

    <!-- Soal 9 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 9 <span class="tipe-badge">Pilihan Ganda 5 Opsi</span></span> 
            <span>Topik: Transformasi Geometri</span>
        </div>
        <p><strong>Pertanyaan:</strong> Titik $(3, -2)$ direfleksikan terhadap sumbu-$Y$. Hasil bayangannya adalah ....</p>
        <div class="section-title">Langkah Penyelesaian:</div>
        <p>Refleksi titik $(x, y)$ terhadap sumbu-$Y$ menghasilkan $(-x, y)$.</p>
        <p>Bayangan titik $(3, -2)$ adalah $(-3, -2)$.</p>
        <div class="jawaban-akhir">Kunci Jawaban: A. (-3, -2)</div>
    </div>

    <!-- Soal 10 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 10 <span class="tipe-badge">Pilihan Ganda 5 Opsi</span></span> 
            <span>Topik: Kalkulus - Limit Aljabar</span>
        </div>
        <p><strong>Pertanyaan:</strong> Nilai dari $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$ adalah ....</p>
        <div class="section-title">Langkah Penyelesaian:</div>
        $$\\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x-2} = \\lim_{x \\to 2} (x+2) = 2 + 2 = 4$$
        <div class="jawaban-akhir">Kunci Jawaban: C. 4</div>
    </div>

    <!-- Soal 11 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 11 <span class="tipe-badge">Pilihan Ganda 5 Opsi</span></span> 
            <span>Topik: Kalkulus - Limit Trigonometri</span>
        </div>
        <p><strong>Pertanyaan:</strong> Nilai dari $\\lim_{x \\to 0} \\frac{\\sin x}{x}$ adalah ....</p>
        <div class="section-title">Langkah Penyelesaian:</div>
        <p>Berdasarkan sifat limit dasar trigonometri:</p>
        $$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$$
        <div class="jawaban-akhir">Kunci Jawaban: B. 1</div>
    </div>

    <!-- Soal 12 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 12 <span class="tipe-badge">Pilihan Ganda 5 Opsi</span></span> 
            <span>Topik: Eksponen</span>
        </div>
        <p><strong>Pertanyaan:</strong> Nilai dari $2^3 \\times 2^{-5}$ adalah ....</p>
        <div class="section-title">Langkah Penyelesaian:</div>
        $$2^3 \\times 2^{-5} = 2^{3 - 5} = 2^{-2} = \\frac{1}{2^2} = \\frac{1}{4}$$
        <div class="jawaban-akhir">Kunci Jawaban: C. $\\frac{1}{4}$</div>
    </div>

    <!-- Soal 13 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 13 <span class="tipe-badge">Pilihan Ganda Kompleks (Checkbox)</span></span> 
            <span>Topik: Fungsi & Domain</span>
        </div>
        <p><strong>Pertanyaan:</strong> Manakah fungsi berikut yang memiliki domain semua bilangan real ($\\mathbb{R}$)? *(Pilih semua jawaban yang benar)*</p>
        <div class="section-title">Langkah Penyelesaian:</div>
        <ul>
            <li><strong>A. $f(x) = x^2 + 1$:</strong> Fungsi kuadrat (polinomial), domain $\\mathbb{R}$. <strong>(BENAR)</strong></li>
            <li><strong>B. $f(x) = \\sqrt{x}$:</strong> Fungsi akar, hanya terdefinisi untuk $x \\ge 0$. <strong>(SALAH)</strong></li>
            <li><strong>C. $f(x) = 2^x$:</strong> Fungsi eksponensial, domain $\\mathbb{R}$. <strong>(BENAR)</strong></li>
            <li><strong>D. $f(x) = |x|$:</strong> Fungsi nilai mutlak, domain $\\mathbb{R}$. <strong>(BENAR)</strong></li>
            <li><strong>E. $f(x) = \\frac{1}{x}$:</strong> Fungsi rasional, tidak terdefinisi saat $x = 0$. <strong>(SALAH)</strong></li>
        </ul>
        <div class="jawaban-akhir">Pernyataan Centang (Jawaban Benar): A, C, D</div>
    </div>

    <!-- Soal 14 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 14 <span class="tipe-badge">Pilihan Ganda Kompleks (Checkbox)</span></span> 
            <span>Topik: Transformasi Geometri</span>
        </div>
        <p><strong>Pertanyaan:</strong> Manakah pernyataan yang merupakan hasil translasi oleh vektor $\\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}$? *(Pilih semua jawaban yang benar)*</p>
        <div class="section-title">Langkah Penyelesaian:</div>
        <p>Translasi oleh $\\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}$ menambah sumbu-$X$ sebesar $+2$ dan mengurangi sumbu-$Y$ sebesar $-3$:</p>
        <ul>
            <li><strong>A. $(x, y) \\rightarrow (x + 2, y - 3)$:</strong> Sesuai definisi translasi. <strong>(BENAR)</strong></li>
            <li><strong>B. $(x, y) \\rightarrow (x - 2, y + 3)$:</strong> Kebalikan arah translasi. <strong>(SALAH)</strong></li>
            <li><strong>C. Titik bergeser 2 satuan ke kanan:</strong> $x + 2$ menggeser ke kanan 2 unit. <strong>(BENAR)</strong></li>
            <li><strong>D. Titik bergeser 3 satuan ke bawah:</strong> $y - 3$ menggeser ke bawah 3 unit. <strong>(BENAR)</strong></li>
            <li><strong>E. Refleksi terhadap sumbu-$X$:</strong> Translasi bukan pencerminan. <strong>(SALAH)</strong></li>
        </ul>
        <div class="jawaban-akhir">Pernyataan Centang (Jawaban Benar): A, C, D</div>
    </div>

    <!-- Soal 15 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 15 <span class="tipe-badge">Pilihan Ganda Kompleks (Checkbox)</span></span> 
            <span>Topik: Aljabar & Matriks</span>
        </div>
        <p><strong>Pertanyaan:</strong> Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$. Pernyataan yang benar adalah .... *(Pilih semua jawaban yang benar)*</p>
        <div class="section-title">Langkah Penyelesaian:</div>
        <ul>
            <li><strong>A. Determinan $A = -2$:</strong> $\\det(A) = (1 \\cdot 4) - (2 \\cdot 3) = 4 - 6 = -2$. <strong>(BENAR)</strong></li>
            <li><strong>B. Determinan $A = 2$:</strong> Hasilnya $-2$. <strong>(SALAH)</strong></li>
            <li><strong>C. Matriks memiliki invers:</strong> Karena $\\det(A) = -2 \\neq 0$, matriks memiliki invers. <strong>(BENAR)</strong></li>
            <li><strong>D. Matriks singular:</strong> Matriks singular memiliki $\\det = 0$. <strong>(SALAH)</strong></li>
            <li><strong>E. Ordo matriks adalah $2 \\times 2$:</strong> Memiliki 2 baris dan 2 kolom. <strong>(BENAR)</strong></li>
        </ul>
        <div class="jawaban-akhir">Pernyataan Centang (Jawaban Benar): A, C, E</div>
    </div>

    <!-- Soal 16 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 16 <span class="tipe-badge">Pilihan Ganda Kompleks (Checkbox)</span></span> 
            <span>Topik: Kalkulus - Limit Trigonometri</span>
        </div>
        <p><strong>Pertanyaan:</strong> Manakah limit berikut yang bernilai 1? *(Pilih semua jawaban yang benar)*</p>
        <div class="section-title">Langkah Penyelesaian:</div>
        <ul>
            <li><strong>A. $\\lim_{x \\to 0} \\frac{\\sin x}{x}$:</strong> Bernilai $1$. <strong>(BENAR)</strong></li>
            <li><strong>B. $\\lim_{x \\to 0} \\frac{\\tan x}{x}$:</strong> Bernilai $1$. <strong>(BENAR)</strong></li>
            <li><strong>C. $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x}$:</strong> Bernilai $0$. <strong>(SALAH)</strong></li>
            <li><strong>D. $\\lim_{x \\to 0} \\frac{x}{\\sin x}$:</strong> Kebalikan $\\frac{\\sin x}{x}$, bernilai $1$. <strong>(BENAR)</strong></li>
            <li><strong>E. $\\lim_{x \\to 0} \\frac{x}{\\tan x}$:</strong> Kebalikan $\\frac{\\tan x}{x}$, bernilai $1$. <strong>(BENAR)</strong></li>
        </ul>
        <div class="jawaban-akhir">Pernyataan Centang (Jawaban Benar): A, B, D, E</div>
    </div>

    <!-- Soal 17 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 17 <span class="tipe-badge">Benar / Salah</span></span> 
            <span>Topik: Aljabar & Matriks</span>
        </div>
        <p><strong>Pertanyaan:</strong> Tentukan kebenaran dari pernyataan matriks berikut:<br>
        1) Determinan matriks identitas selalu 1.<br>
        2) Semua matriks memiliki invers.<br>
        3) Determinan matriks singular sama dengan nol.</p>
        <div class="section-title">Langkah Penyelesaian:</div>
        <ul>
            <li><strong>Pernyataan 1:</strong> $\\det(I) = 1$ selalu bernilai 1. <strong>(BENAR)</strong></li>
            <li><strong>Pernyataan 2:</strong> Hanya matriks persegi dengan $\\det \\neq 0$ yang memiliki invers. <strong>(SALAH)</strong></li>
            <li><strong>Pernyataan 3:</strong> Matriks singular didefinisikan sebagai matriks yang determinannya 0. <strong>(BENAR)</strong></li>
        </ul>
        <div class="jawaban-akhir">Jawaban: Pernyataan 1 = Benar, Pernyataan 2 = Salah, Pernyataan 3 = Benar (Kunci A)</div>
    </div>

    <!-- Soal 18 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 18 <span class="tipe-badge">Benar / Salah</span></span> 
            <span>Topik: Eksponen & Logaritma</span>
        </div>
        <p><strong>Pertanyaan:</strong> Tentukan kebenaran dari pernyataan fungsi eksponen dan logaritma berikut:<br>
        1) Grafik fungsi eksponensial selalu melalui titik $(0,1)$.<br>
        2) Fungsi logaritma merupakan invers fungsi eksponensial.<br>
        3) Domain fungsi logaritma adalah semua bilangan real.</p>
        <div class="section-title">Langkah Penyelesaian:</div>
        <ul>
            <li><strong>Pernyataan 1:</strong> Karena $a^0 = 1$, grafik $f(x) = a^x$ memotong sumbu-$Y$ di $(0,1)$. <strong>(BENAR)</strong></li>
            <li><strong>Pernyataan 2:</strong> Fungsi logaritma $y = \\log_a x$ adalah invers dari $y = a^x$. <strong>(BENAR)</strong></li>
            <li><strong>Pernyataan 3:</strong> Domain fungsi logaritma dasar adalah $x > 0$, bukan seluruh $\\mathbb{R}$. <strong>(SALAH)</strong></li>
        </ul>
        <div class="jawaban-akhir">Jawaban: Pernyataan 1 = Benar, Pernyataan 2 = Benar, Pernyataan 3 = Salah (Kunci B)</div>
    </div>

    <!-- Soal 19 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 19 <span class="tipe-badge">Benar / Salah</span></span> 
            <span>Topik: Vektor & Geometri</span>
        </div>
        <p><strong>Pertanyaan:</strong> Tentukan kebenaran dari pernyataan geometri berikut:<br>
        1) Panjang vektor tidak pernah bernilai negatif.<br>
        2) Refleksi terhadap sumbu-$X$ mengubah tanda koordinat $y$.<br>
        3) Dilatasi dengan faktor skala 1 mengubah ukuran bangun.</p>
        <div class="section-title">Langkah Penyelesaian:</div>
        <ul>
            <li><strong>Pernyataan 1:</strong> Panjang vektor $|\\vec{v}| = \\sqrt{x^2 + y^2} \\ge 0$. <strong>(BENAR)</strong></li>
            <li><strong>Pernyataan 2:</strong> Refleksi sumbu-$X$ memetakan $(x, y) \\rightarrow (x, -y)$. <strong>(BENAR)</strong></li>
            <li><strong>Pernyataan 3:</strong> Dilatasi faktor skala $k = 1$ tidak mengubah bentuk maupun ukuran. <strong>(SALAH)</strong></li>
        </ul>
        <div class="jawaban-akhir">Jawaban: Pernyataan 1 = Benar, Pernyataan 2 = Benar, Pernyataan 3 = Salah (Kunci A)</div>
    </div>

    <!-- Soal 20 -->
    <div class="soal-box">
        <div class="soal-header">
            <span>Soal 20 <span class="tipe-badge">Benar / Salah</span></span> 
            <span>Topik: Kalkulus - Limit</span>
        </div>
        <p><strong>Pertanyaan:</strong> Tentukan kebenaran dari pernyataan limit fungsi berikut:<br>
        1) $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$.<br>
        2) Limit fungsi selalu dapat dihitung dengan substitusi langsung.<br>
        3) Jika limit kiri dan limit kanan berbeda maka limit tidak ada.</p>
        <div class="section-title">Langkah Penyelesaian:</div>
        <ul>
            <li><strong>Pernyataan 1:</strong> $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$. <strong>(BENAR)</strong></li>
            <li><strong>Pernyataan 2:</strong> Jika terjadi bentuk tak tentu $\\frac{0}{0}$, substitusi langsung tidak langsung menghasilkan nilai. <strong>(SALAH)</strong></li>
            <li><strong>Pernyataan 3:</strong> Syarat keberadaan limit adalah limit kiri harus sama dengan limit kanan. <strong>(BENAR)</strong></li>
        </ul>
        <div class="jawaban-akhir">Jawaban: Pernyataan 1 = Benar, Pernyataan 2 = Salah, Pernyataan 3 = Benar (Kunci B)</div>
    </div>

</div>

</body>
</html>`;
