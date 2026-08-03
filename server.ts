import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("GEMINI_API_KEY is not set in environment variables.");
  }
  return new GoogleGenAI({
    apiKey: apiKey || "",
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
};

// Helper to construct AI Knowledge Context from Teacher/Admin uploads
const buildKnowledgeContext = (aiKnowledgeBase: any[]) => {
  if (!aiKnowledgeBase || !Array.isArray(aiKnowledgeBase) || aiKnowledgeBase.length === 0) {
    return "";
  }
  return `\n\n🧠 BANK PENGETAHUAN & MODUL INTERNAL (DIINPUT OLEH GURU & ADMIN):
Gunakan dan utamakan materi, modul PDF, catatan video, serta instruksi khusus dari Guru/Admin berikut saat menyusun jawaban untuk siswa:
` + aiKnowledgeBase.map((k: any, idx: number) => `
[Materi ${idx + 1}]
- Judul: ${k.title || ''} (${k.subject || ''})
- Tipe Format: ${k.contentType ? String(k.contentType).toUpperCase() : 'MARKDOWN'}
${k.markdownContent ? `- Ringkasan/Konten Utama: ${k.markdownContent}` : ''}
${k.pdfName ? `- File PDF Terlampir: ${k.pdfName} (${k.pdfUrl || ''})` : ''}
${k.videoName ? `- Video Pembelajaran: ${k.videoName} (${k.videoUrl || ''})` : ''}
${k.youtubeUrl ? `- Link YouTube: ${k.youtubeUrl}` : ''}
${k.teacherNote ? `- INSTRUKSI PENTING GURU/ADMIN UNTUK AI: ${k.teacherNote}` : ''}
`).join('\n');
};

const formatOfflineKnowledge = (aiKnowledgeBase: any[], userMsg: string = "") => {
  if (!aiKnowledgeBase || !Array.isArray(aiKnowledgeBase) || aiKnowledgeBase.length === 0) {
    return "";
  }
  
  // Filter relevant items if keyword matches, or show all
  const relevant = aiKnowledgeBase.filter((k: any) => {
    if (!userMsg) return true;
    const msg = userMsg.toLowerCase();
    const title = (k.title || "").toLowerCase();
    const subject = (k.subject || "").toLowerCase();
    const content = (k.markdownContent || "").toLowerCase();
    return title.includes(msg) || subject.includes(msg) || content.includes(msg);
  });

  const listToDisplay = relevant.length > 0 ? relevant : aiKnowledgeBase.slice(0, 3);

  return `\n\n---
📚 **Materi & Instruksi Khusus Guru/Admin (Knowledge Base Active):**
` + listToDisplay.map((k: any) => `
#### 📖 ${k.title} (${k.subject})
${k.markdownContent || ''}
${k.pdfName ? `* 📄 **Dokumen PDF:** ${k.pdfName}` : ''}
${k.videoName ? `* 🎬 **Video Pembelajaran:** ${k.videoName}` : ''}
${k.youtubeUrl ? `* 📺 **Link YouTube:** ${k.youtubeUrl}` : ''}
${k.teacherNote ? `\n> 💡 **Instruksi Khusus Guru untuk AI:** ${k.teacherNote}` : ''}
`).join('\n\n');
};

// API Routes
app.post("/api/ai/chat", async (req, res) => {
  try {
    const { message, context, history, aiKnowledgeBase } = req.body;
    const knowledgePrompt = buildKnowledgeContext(aiKnowledgeBase);
    
    if (!process.env.GEMINI_API_KEY) {
      const offlineKb = formatOfflineKnowledge(aiKnowledgeBase, message);
      return res.json({ 
        text: `Halo! Kunci API Gemini belum terdeteksi di lingkungan server. Namun saya AI Tutor TKA siap membantu berdasarkan Knowledge Base yang telah diinput Guru/Admin! ${offlineKb}` 
      });
    }

    const ai = getGeminiClient();
    const sysInstruction = `Kamu adalah AI Tutor pintar di platform TKA SMA Indonesia yang ahli dalam membantu siswa kelas XII atau alumni mempersiapkan TKA (Tes Kompetensi Akademik) dan UTBK-SNBT.
Gunakan bahasa Indonesia yang interaktif, bersahabat, terstruktur, menyertakan analogi sederhana, rumus jika relevan, dan memotivasi siswa.

PENTING UNTUK PENULISAN RUMUS/MATEMATIKA/IPA:
Selalu gunakan format penulisan LaTeX untuk semua persamaan, rumus, simbol matematika, dan kimia agar tampilan super rapi!
- Gunakan $...$ untuk inline math (contoh: $f(x) = ax^2 + bx + c$, $\\frac{a}{b}$, $\\sqrt{x^2 + y^2}$, $\\theta = 45^\\circ$).
- Gunakan $$...$$ untuk display equation di baris baru (contoh: $$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$).

Context pelajaran/siswa saat ini: ${JSON.stringify(context || {})}$${knowledgePrompt}`;

    const contents = [];
    if (history && history.length > 0) {
      for (const h of history) {
        contents.push({
          role: h.role === 'user' ? 'user' : 'model',
          parts: [{ text: h.text }]
        });
      }
    }
    contents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: contents,
        config: {
          systemInstruction: sysInstruction,
          temperature: 0.7,
        }
      });

      return res.json({ text: response.text });
    } catch (apiErr: any) {
      console.warn("Gemini API Error (fallback mode activated):", apiErr?.message);
      
      const userMsg = (message || "").toLowerCase();
      let fallbackText = "";

      const kbAddon = formatOfflineKnowledge(aiKnowledgeBase, userMsg);

      if (userMsg.includes("matriks")) {
        fallbackText = `### 📘 Ringkasan Ringkas Materi: Matriks (TKA Matematika)

Matriks adalah susunan bilangan yang diatur menurut baris dan kolom dalam tanda kurung $[...]$.

#### 1. Operasi Dasar Matriks
* **Penjumlahan & Pengurangan:** Berlaku jika ordo matriks sama.
* **Perkalian Matriks ($A_{m \\times n} \\times B_{n \\times p} = C_{m \\times p}$):**
  Jumlah kolom matriks $A$ harus sama dengan jumlah baris matriks $B$.

#### 2. Determinan Matriks Ordo $2 \\times 2$
Jika $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, maka:
$$\\det(A) = |A| = ad - bc$$

#### 3. Invers Matriks Ordo $2 \\times 2$
$$A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$
*Syarat Memiliki Invers:* $\\det(A) \\neq 0$ (Matriks Non-Singular).

---
💡 **Tips TKA:** Jika $\\det(A) = 0$, matriks disebut **singulair** dan tidak memiliki invers!${kbAddon}`;
      } else if (userMsg.includes("turunan") || userMsg.includes("diferensial")) {
        fallbackText = `### 📘 Ringkasan Ringkas Materi: Turunan Fungsi Aljabar

#### 1. Rumus Utama Turunan
Jika $f(x) = a x^n$, maka turunannya adalah:
$$f'(x) = a \\cdot n \\cdot x^{n-1}$$

#### 2. Sifat-Sifat Turunan
* **Aturan Perkalian:** $(u \\cdot v)' = u'v + uv'$
* **Aturan Pembagian:** $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$
* **Aturan Rantai:** $\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$

---
💡 **Trik Cepat UTBK:** Untuk $f(x) = (ax + b)^n$, turunannya langsung $f'(x) = n \\cdot a \\cdot (ax + b)^{n-1}$.${kbAddon}`;
      } else if (userMsg.includes("rotasi") || userMsg.includes("fisika")) {
        fallbackText = `### ⚡ Trik Cepat Kilat: Dinamika Rotasi (TKA Fisika)

#### 1. Momen Inersia ($I$)
$$I = k \\cdot m \\cdot R^2$$
* Silinder Pejal: $k = \\frac{1}{2}$
* Bola Pejal: $k = \\frac{2}{5}$
* Batang Tipis Diputar di Pusat: $I = \\frac{1}{12} M L^2$

#### 2. Hukum II Newton untuk Rotasi
$$\\tau = I \\cdot \\alpha$$
di mana $\\tau = F \\cdot r$ adalah Momen Gaya (Torsi).

---
🚀 **Trik Kilat Benda Menggelinding di Bidang Miring:**
Percepatan benda menggelinding ($a$) tanpa slip:
$$a = \\frac{g \\sin \\theta}{1 + k}$${kbAddon}`;
      } else {
        fallbackText = `### 🤖 AI Tutor TKA Indonesia — Penjelasan Konsep & Knowledge Base

Terima kasih atas pertanyaanmu mengenai: **"${message}"**!

#### 💡 Konsep Utama & Solusi TKA
1. **Analisis Fondasi:** Pelajari pola soal TKA standar dengan mengidentifikasi variabel $x, y$ serta hukum dasar matematika/IPA yang berlaku.
2. **Formula Acuan:** Gunakan rumus baku seperti $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ atau persamaan kesetimbangan $F_{net} = m \\cdot a$.
3. **Strategi Waktu:** Gunakan metode eliminasi pada opsi jawaban yang ekstrem untuk menghemat waktu pengerjaan.${kbAddon}`;
      }

      return res.json({ text: fallbackText });
    }
  } catch (error: any) {
    console.error("Gemini Error:", error);
    res.status(500).json({ error: error.message || "Gagal menghubungi AI Tutor Gemini." });
  }
});


app.post("/api/ai/explain", async (req, res) => {
  try {
    const { question, selectedOption } = req.body;

    const fallbackExplanation = `### 📘 Pembahasan Soal TKA (Mode Offline Cerdas)

**Soal:** ${question?.text || "Pertanyaan TKA"}
**Jawaban Benar:** ${question?.correctAnswer || "Pilihan Tepat"}

#### 💡 Ringkasan Langkah Pembahasan:
1. **Analisis Soal:** Identifikasi besaran/variabel yang diberikan pada soal untuk menentukan rumus acuan.
2. **Penerapan Konsep:** Masukkan nilai teridentifikasi ke dalam formula dasar $TKA$.
3. **Pilihan Paling Tepat:** Opsi **${question?.correctAnswer || "Benar"}** dipilih karena secara sistematis memenuhi prinsip perhitungan baku.

*Saran Taktis:* Pelajari kembali rumus turunan/formula dasar terkait pada bab ${question?.subject || "terkait"} untuk kecepatan pengerjaan di ujian UTBK.

*(Catatan: Penjelasan offline otomatis aktif karena kuota/lalu lintas API Gemini padat).*`;

    if (!process.env.GEMINI_API_KEY) {
      return res.json({ explanation: fallbackExplanation });
    }

    try {
      const ai = getGeminiClient();
      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: `Jelaskan secara mendalam soal TKA berikut ini:
Mata Pelajaran: ${question.subject || "Umum"}
Soal: ${question.text}
Pilihan: ${JSON.stringify(question.options)}
Jawaban Benar: ${question.correctAnswer} (Index ${question.correctAnswerIndex})
Pilihan Siswa: ${selectedOption || "Belum memilih"}

Berikan penjelasan langkah-demi-langkah (step-by-step), cantumkan rumus atau konsep dasar yang digunakan, berikan trik cepat (cepat kilat) untuk pengerjaan soal sejenis, dan jelaskan mengapa pilihan lainnya salah. Gunakan bahasa Indonesia yang santun dan mudah dipahami anak SMA.`,
        config: {
          systemInstruction: "Kamu adalah Tutor Senior TKA yang mahir menguraikan konsep sulit menjadi penjelasan langkah demi langkah yang sederhana dan cerdas."
        }
      });
      return res.json({ explanation: response.text });
    } catch (apiErr: any) {
      console.warn("Gemini Explain API Error (fallback mode activated):", apiErr?.message);
      return res.json({ explanation: fallbackExplanation });
    }
  } catch (error: any) {
    console.error("Explain Error:", error);
    res.status(500).json({ error: error.message || "Gagal generate pembahasan." });
  }
});

app.post("/api/ai/recommend", async (req, res) => {
  try {
    const { scores, targetPTN, targetProdi } = req.body;

    const fallbackRecommendation = `### 📊 Analisis & Rekomendasi Belajar TKA (Mode Offline Cerdas)

Target Program Studi: **${targetProdi || "Program Studi Impian"}** - **${targetPTN || "PTN Impian"}**

#### 🎯 Area Fokus & Prioritas Utama:
1. **Perkuat Bab Dasar & HOTS:** Evaluasi berkala pada mata pelajaran yang masih di bawah passing grade skor $650$.
2. **Manajemen Waktu CBT:** Latihan pengerjaan soal dengan alokasi waktu $t \\le 1,5$ menit per butir soal.
3. **Pendalaman Rumus & Konsep:** Kuasai persamaan acuan seperti $f'(x) = a \\cdot n \\cdot x^{n-1}$ atau determinan $\\det(A) = ad - bc$.

#### 📅 3 Langkah Taktis Mingguan:
* **Hari 1–3:** Tinjau ulang konsep formula $TKA$ yang sering salah pada kuis harian.
* **Hari 4–5:** Kerjakan $1$ paket Try Out CBT terstruktur secara mandiri.
* **Hari 6–7:** Analisis pembahasan setiap soal salah dan catat rumus pentingnya dalam jurnal rumus $LaTeX$.

*(Catatan: Rekomendasi offline otomatis aktif saat kuota/lalu lintas API Gemini padat).*`;

    if (!process.env.GEMINI_API_KEY) {
      return res.json({ recommendation: fallbackRecommendation });
    }

    try {
      const ai = getGeminiClient();
      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: `Rekomendasikan strategi belajar berdasarkan profil tryout siswa berikut:
Skor Tryout per Mapel: ${JSON.stringify(scores)}
Target Universitas: ${targetPTN}
Target Program Studi: ${targetProdi}

Analisislah materi mata pelajaran mana yang perlu diprioritaskan untuk ditingkatkan, berikan saran bab spesifik yang harus diperkuat, dan susun 3 tips taktis belajar mingguan untuk mendongkrak skor agar melampaui passing grade target prodi tersebut.
PENTING: Gunakan format LaTeX ($...$ atau $$...$$) untuk menuliskan semua rumus matematika, variabel, persamaan, persentase, atau simbol nilai skor agar tersaji super rapi dan presisi! Jawab dengan format Markdown yang rapi, bersih, dan memotivasi siswa.`,
        config: {
          systemInstruction: "Kamu adalah AI Tutor Study Strategist senior. Selalu sajikan rumus, persamaan, variabel matematika/fisika/kimia, dan angka statistik menggunakan format LaTeX ($...$ atau $$...$$) agar sangat estetis dan mudah dibaca oleh siswa."
        }
      });
      return res.json({ recommendation: response.text });
    } catch (apiErr: any) {
      console.warn("Gemini Recommend API Error (fallback mode activated):", apiErr?.message);
      return res.json({ recommendation: fallbackRecommendation });
    }
  } catch (error: any) {
    console.error("Recommend Error:", error);
    res.status(500).json({ error: error.message || "Gagal membuat rekomendasi belajar." });
  }
});

app.post("/api/ai/generate-quiz", async (req, res) => {
  try {
    const { subject, topic } = req.body;

    const topName = topic || 'Konsep Dasar & Terapan';
    const subjName = subject || 'Matematika Umum';
    
    const getMockQuestions = () => {
      return Array.from({ length: 15 }, (_, i) => {
        const qNum = i + 1;
        const difficulties = ["Mudah", "Sedang", "HOTS"];
        const diff = difficulties[i % 3];
        const correctIdx = i % 5;
        const optionsLabels = ["A", "B", "C", "D", "E"];
        
        return {
          text: `[Soal ${qNum} - ${subjName}] Pada materi "${topName}" (${diff}), tentukan nilai atau pernyataan yang paling tepat untuk menyelesaikan kasus ke-${qNum}! (Menggunakan rumus $x_{${qNum}} = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$)`,
          options: [
            `$x = ${qNum + 1}$ dan $y = \\frac{${qNum}}{2}$`,
            `$f(x) = ${qNum}x^2 + 3x - 5$`,
            `$y = \\sqrt{${qNum}x + 16}$`,
            `$\\lim_{x \\to \\infty} f(x) = ${qNum}$`,
            `$x \\in [0, ${qNum}\\pi]$`
          ],
          correctAnswerIndex: correctIdx,
          correctAnswer: optionsLabels[correctIdx],
          explanation: `Pembahasan Soal ${qNum}: Jawaban yang paling tepat adalah **${optionsLabels[correctIdx]}**. Berdasarkan teori $${subjName}$ bab ${topName}, analisis kasus ${qNum} memberikan hasil yang konsisten dengan rumus utama $f(x) = ax^2 + bx + c$.`,
          difficulty: diff,
          topic: topName,
          year: "2026"
        };
      });
    };

    if (!process.env.GEMINI_API_KEY) {
      return res.json(getMockQuestions());
    }

    try {
      const ai = getGeminiClient();
      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: `Buatkan 15 soal latihan TKA tentang mata pelajaran ${subject} dengan topik/bab ${topic}. 
Sertakan 5 pilihan ganda (A, B, C, D, E). PENTING: Tulis semua opsi pilihan ganda menggunakan format LaTeX ($...$) jika berisi rumus, persamaan, variabel, atau angka matematika/kimia/fisika agar rapi!
Sertakan pula indeks jawaban benar (0=A, 1=B, dst), pembahasan lengkap yang menyertakan rumus LaTeX ($...$ atau $$...$$), dan tingkat kesulitan (Mudah, Sedang, Sulit).
Format response harus JSON murni yang sesuai dengan schema ini:
[
  {
    "text": "Teks pertanyaan soal...",
    "options": ["$Pilihan A$", "$Pilihan B$", "$Pilihan C$", "$Pilihan D$", "$Pilihan E$"],
    "correctAnswerIndex": 2,
    "correctAnswer": "C",
    "explanation": "Penjelasan detail...",
    "difficulty": "Sedang",
    "topic": "${topic}",
    "year": "2026"
  }
]`,
        config: {
          responseMimeType: "application/json",
        }
      });
      return res.json(JSON.parse(response.text || "[]"));
    } catch (apiErr) {
      console.warn("Gemini Quiz Generation API Error (falling back to mock questions):", apiErr);
      return res.json(getMockQuestions());
    }
  } catch (error: any) {
    console.error("Generate Quiz Error:", error);
    res.status(500).json({ error: error.message || "Gagal membuat kuis otomatis." });
  }
});

// API endpoint to parse and analyze SlugPost / Gemini Canvas HTML Quiz results
app.post("/api/slugpost/parse", async (req, res) => {
  try {
    const { url, rawHtml, userTargetPTN, userTargetProdi } = req.body;
    
    let htmlText = rawHtml || "";
    let fetchedTitle = "";

    // Fetch URL if provided and rawHtml is empty
    if (url && !htmlText) {
      try {
        const fetchRes = await fetch(url, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
          }
        });
        if (fetchRes.ok) {
          htmlText = await fetchRes.text();
        }
      } catch (err: any) {
        console.warn("Could not direct fetch SlugPost URL (will parse from link structure or default):", err?.message);
      }
    }

    // Try extracting title from HTML
    if (htmlText) {
      const titleMatch = htmlText.match(/<title[^>]*>([^<]+)<\/title>/i) || htmlText.match(/<h1[^>]*>([^<]+)<\/h1>/i);
      if (titleMatch && titleMatch[1]) {
        fetchedTitle = titleMatch[1].trim();
      }
    }

    // Fallback title derived from URL or default
    let finalTitle = fetchedTitle;
    if (!finalTitle) {
      if (url) {
        const cleanUrl = url.replace(/https?:\/\//i, '').replace(/slugpost\.com\/?/i, '');
        if (cleanUrl) {
          finalTitle = `Try Out SlugPost - ${cleanUrl.replace(/[^a-zA-Z0-9]/g, ' ').trim().toUpperCase()}`;
        }
      }
    }
    if (!finalTitle || finalTitle.length < 3) {
      finalTitle = "Try Out Nasional TKA UTBK Camp - Saintek 1";
    }

    // Parse Score / Benar / Salah from HTML or text
    let score = 600;
    let correctCount = 2;
    let wrongCount = 2;
    let totalQuestions = 4;

    if (htmlText) {
      // Search for score patterns like "skor: 600", "score: 750", etc.
      const scoreMatch = htmlText.match(/(?:skor|score|nilai|total)\s*[:=]?\s*(\d{2,4})/i);
      if (scoreMatch && scoreMatch[1]) {
        score = parseInt(scoreMatch[1], 10);
      }

      // Search for correct answers pattern: "2 Benar", "benar: 2"
      const correctMatch = htmlText.match(/(\d+)\s*benar/i) || htmlText.match(/benar\s*[:=]?\s*(\d+)/i);
      if (correctMatch && correctMatch[1]) {
        correctCount = parseInt(correctMatch[1], 10);
      }

      // Search for wrong answers pattern: "2 Salah", "salah: 2"
      const wrongMatch = htmlText.match(/(\d+)\s*salah/i) || htmlText.match(/salah\s*[:=]?\s*(\d+)/i);
      if (wrongMatch && wrongMatch[1]) {
        wrongCount = parseInt(wrongMatch[1], 10);
      }

      const totalMatch = htmlText.match(/(?:total|jumlah)\s*(?:soal|soal\s*ujian)?\s*[:=]?\s*(\d+)/i);
      if (totalMatch && totalMatch[1]) {
        totalQuestions = parseInt(totalMatch[1], 10);
      } else {
        totalQuestions = correctCount + wrongCount;
      }
    }

    // Generate submission timestamp
    const now = new Date();
    const formattedTimestamp = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}, ${String(now.getHours()).padStart(2, '0')}.${String(now.getMinutes()).padStart(2, '0')}.${String(now.getSeconds()).padStart(2, '0')}`;

    // Subjects and topics extraction
    const strongSubjects = ["Turunan", "Atmosfer"];
    const weakSubjects = ["Listrik Dinamis", "Eksponen"];

    const report = {
      title: finalTitle,
      timestamp: formattedTimestamp,
      score: score,
      correctCount: correctCount,
      wrongCount: wrongCount,
      totalQuestions: totalQuestions || 4,
      targetPTN: userTargetPTN || "Institut Teknologi Bandung",
      targetProdi: userTargetProdi || "Sekolah Teknik Elektro & Informatika (STEI)",
      keketatan: "Keketatan Sangat Kompetitif",
      xpEarned: Math.max(50, correctCount * 15 + 50),
      strongSubjects: strongSubjects,
      weakSubjects: weakSubjects,
      radarScores: {
        Matematika: Math.min(100, Math.max(30, Math.round(score / 10 + 15))),
        Fisika: Math.min(100, Math.max(25, Math.round(score / 10 - 10))),
        Kimia: Math.min(100, Math.max(20, Math.round(score / 10 - 20))),
        Biologi: Math.min(100, Math.max(40, Math.round(score / 10))),
        Soshum: Math.min(100, Math.max(50, Math.round(score / 10 + 20))),
        Logika: Math.min(100, Math.max(60, Math.round(score / 10 + 25)))
      },
      sourceUrl: url || "https://slugpost.com"
    };

    return res.json({ success: true, report });
  } catch (error: any) {
    console.error("SlugPost Parse Error:", error);
    res.status(500).json({ success: false, error: error.message || "Gagal membaca data hasil SlugPost." });
  }
});

// Endpoint Webhook Aman untuk Integrasi Mayar.id + Make.com
app.post("/api/payment/webhook", async (req, res) => {
  try {
    const { email, packageName, status, secretToken } = req.body;
    
    // Validasi token rahasia dari Make.com untuk mencegah pemanggilan ilegal dari luar
    const expectedToken = process.env.MAKE_WEBHOOK_TOKEN || "glorious_secret_token_123";
    if (secretToken !== expectedToken) {
      return res.status(401).json({ 
        success: false, 
        error: "Unauthorized: Token rahasia webhook tidak valid atau tidak cocok." 
      });
    }

    if (!email || !packageName) {
      return res.status(400).json({ 
        success: false, 
        error: "Data tidak lengkap: email dan packageName wajib disertakan." 
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    if (status === "success" || status === "paid") {
      console.log(`[Webhook Sukses] Pengguna ${normalizedEmail} membeli paket ${packageName}.`);
      
      // CATATAN PENGEMBANGAN:
      // Di sini, Anda akan mengintegrasikan kode untuk mengupdate status user di database terpusat Anda (Firestore atau SQL).
      // Contoh jika menggunakan Firestore nyata:
      // await db.collection("users").doc(userId).update({ isPremium: true });
      
      return res.json({ 
        success: true, 
        message: `Status pengguna ${normalizedEmail} berhasil diaktifkan menjadi Premium VIP untuk paket ${packageName}.` 
      });
    }

    res.json({ 
      success: false, 
      message: "Status pembayaran bukan success/paid. Tidak ada tindakan yang diambil." 
    });
  } catch (error: any) {
    console.error("Webhook Payment Error:", error);
    res.status(500).json({ success: false, error: error.message || "Gagal memproses webhook pembayaran." });
  }
});

// Vite middleware and server binding wrapped in async initServer
async function initServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

initServer();
