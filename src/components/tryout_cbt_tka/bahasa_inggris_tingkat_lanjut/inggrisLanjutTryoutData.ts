export interface Option {
  id: string;
  text: string;
  correct?: boolean;
}

export interface Statement {
  id: string;
  text: string;
  correct: boolean;
  trueLabel?: string;
  falseLabel?: string;
}

export interface InggrisLanjutQuestion {
  id: number;
  number: number;
  topic: string;
  readingText?: string;
  stimulus?: string;
  text: string;
  type: 'multiple' | 'multiple-complex' | 'true-false-table';
  options?: Option[];
  statements?: Statement[];
  correctAnswer?: string | string[];
  officialKeyText: string;
  discussion: string;
  trueLabel?: string;
  falseLabel?: string;
}

const TEKS_AI_WORKPLACE = `AI in the Workplace: Transforming Roles and Capabilities

The integration of Artificial Intelligence (AI) into the modern workplace has sparked widespread debate across multiple economic and industrial sectors. Proponents and industry leaders highlight that AI can substantially automate routine, repetitive tasks, thereby freeing human workers to concentrate on higher-order responsibilities.

Supporters present three main points regarding AI's positive contributions to the workforce. First, AI dramatically improves operational efficiency and productivity by executing data processing, pattern analysis, and automated workflows far faster than manual methods. Second, AI assists organizations in making better, evidence-based decisions by analyzing massive datasets in real time. Third, it enhances learning and development opportunities, allowing employees to access personalized training programs and close skill gaps faster than traditional corporate workshops.

Despite these advantages, skeptics voice legitimate concerns over worker displacement, algorithmic bias, and the potential erosion of interpersonal skills. However, experts emphasize that AI is incapable of replicating genuine empathy, emotional intelligence, and complex human connection. While AI excels at structured computation and predictive modeling, human workers retain an irreplaceable advantage in creative problem solving, ethical reasoning, and nuanced negotiation. Therefore, as future job seekers and students prepare to enter the evolving labor market, the most effective strategy is to cultivate emotional intelligence, critical thinking, and collaborative capabilities rather than attempting to compete directly with automated algorithms in routine processing.

Chart: AI Impact on Different Industry Sectors (Estimated Automation & Adoption Index)
• Information and communication: ~58% (High Impact)
• Financial and insurance activities: ~52% (High Impact)
• Professional, scientific and technical activities: ~42% (Moderate Impact)
• Manufacturing and transportation: ~34% (Moderate Impact)
• Accommodation and food services: ~22% (Low Impact)
• Agriculture, Forestry and Fisheries: ~12% (Lowest Impact)`;

const TEKS_CASHLESS_GENERATION = `The Rise of the Cashless Generation

Over the past decade, the rapid advancement of digital payment technologies and financial applications has dramatically reshaped how people manage transactions. From tap-and-pay debit cards and electronic wallets (e-wallets) to quick-response (QR) codes, physical paper currency and coins are steadily becoming a rarity in daily commerce, particularly among young consumers.

There are compelling reasons why many individuals, especially teenagers and young adults, are enthusiastically going cashless. First and foremost is sheer speed and convenience; digital payments are faster and easier than carrying bulky wallets full of bills and coins. Transactions can be completed in seconds at school canteens, convenience stores, and neighborhood cafes using just a smartphone or smartwatch. Furthermore, many digital platforms offer budgeting dashboards, cashback incentives, and loyalty reward points that encourage users to track expenditures and save more money effectively.

However, the shift toward a purely cashless society also introduces notable challenges. Older generations and individuals living in rural communities without reliable internet infrastructure may feel marginalized or excluded from essential services. Additionally, relying exclusively on digital systems raises concerns regarding data privacy, cybersecurity threats, and technical outages that could leave consumers temporarily unable to pay for basic necessities.

While there are both advantages and disadvantages to this financial evolution, the trend toward digital transactions continues to gain momentum. As schools, universities, and businesses adapt to these technological changes, fostering digital financial literacy will be crucial to ensuring that young people can navigate a cashless economy safely, responsibly, and effectively.`;

const TEKS_SMART_SPENDING = `Smart Spending and Consumer Awareness

Living in an era of digital commerce and aggressive advertising requires young consumers to develop sharp financial awareness. Every day, people are inundated with eye-catching advertisements, special discount banners, and persuasive marketing messages designed to stimulate impulse buying. Without deliberate planning, it is easy to spend money on items that seem appealing in the moment but provide little lasting value.

A crucial foundation of smart spending is understanding the fundamental difference between needs and wants. Needs are essential goods and services required for health, safety, and basic daily functioning—such as nutritious food, appropriate clothing, shelter, textbooks, and essential school supplies. In contrast, wants are desires that enhance comfort or leisure, such as designer apparel, premium gaming gear, or eating out at trendy restaurants. While satisfying wants is not inherently harmful, prioritizing wants over needs often leads to financial strain.

To maintain control over personal finances, creating and following a budget is indispensable. A budget is a simple plan that shows how much money comes in and how much goes out over a specific period. It helps people avoid buying things on impulse, tracks recurring expenditures, and allows them to save money for the future. By allocating a portion of allowance or earnings toward long-term goals, individuals establish financial stability and prepare for unexpected emergencies.

Moreover, being a conscious consumer involves pausing to reflect before making any purchase. Asking critical questions—such as "Do I genuinely need this right now?", "Can I find a comparable item at a fairer price?", or "Does this fit within my monthly plan?"—prevents impulsive decisions influenced by colorful signs and promotional displays in supermarkets and online stores.

In short, smart spending and consumer awareness help people make better decisions with their money. Students who learn this skill early will be better prepared to manage their money as they grow up and enter adulthood with financial independence and confidence.`;

export const inggrisLanjutTryoutData: InggrisLanjutQuestion[] = [
  // Soal 1
  {
    id: 1,
    number: 1,
    topic: 'Synthesizing Graphic & Reading Data (AI in the Workplace)',
    readingText: TEKS_AI_WORKPLACE,
    text: 'Based on the information given, Which industry sectors are heavily impacted by AI? Click the Yes or No option for each statement!',
    type: 'true-false-table',
    trueLabel: 'Yes',
    falseLabel: 'No',
    statements: [
      { id: 'st1', text: '1. Information and communication', correct: true, trueLabel: 'Yes', falseLabel: 'No' },
      { id: 'st2', text: '2. Financial and insurance activities', correct: true, trueLabel: 'Yes', falseLabel: 'No' },
      { id: 'st3', text: '3. Agriculture, Forestry and Fisheries', correct: false, trueLabel: 'Yes', falseLabel: 'No' }
    ],
    officialKeyText: '1. Yes, 2. Yes, 3. No',
    discussion: `Berdasarkan grafik batang *"AI Impact on Different Industry Sectors"*, sektor **Information and communication** (~58%) dan **Financial and insurance activities** (~52%) menempati urutan teratas (*terdampak tinggi/heavily impacted*). Sedangkan **Agriculture, Forestry and Fisheries** berada di posisi paling bawah (~12%, *terdampak paling rendah*).

* **Pernyataan 1:** Information and communication (~58%) -> **Yes**
* **Pernyataan 2:** Financial and insurance activities (~52%) -> **Yes**
* **Pernyataan 3:** Agriculture, Forestry and Fisheries (~12%) -> **No**`
  },

  // Soal 2
  {
    id: 2,
    number: 2,
    topic: 'Main Idea & Paragraph Function (AI in the Workplace)',
    readingText: TEKS_AI_WORKPLACE,
    text: 'Paragraph two mainly discussed AI as...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'a tool to enhance workplace productivity and employee growth.', correct: true },
      { id: 'B', text: 'the cause of job losses and emotional stress among workers.', correct: false },
      { id: 'C', text: 'a system that replaces human leaders in decision-making.', correct: false },
      { id: 'D', text: 'a machine incapable of human empathy and connection.', correct: false },
      { id: 'E', text: "the threat to employee's privacy and data security.", correct: false }
    ],
    correctAnswer: 'A',
    officialKeyText: 'A (a tool to enhance workplace productivity and employee growth)',
    discussion: `Paragraf kedua secara spesifik menjelaskan poin-poin pendukung AI (*"Supporters present three main points regarding AI's positive contributions..."*), yaitu:
1. Meningkatkan efisiensi dan produktivitas (*efficiency and productivity*).
2. Membantu pengambilan keputusan berbasis data (*better, evidence-based decisions*).
3. Meningkatkan pembelajaran dan pengembangan kapasitas karyawan (*learning and development/employee growth*).

Oleh karena itu, opsi **(A)** adalah ringkasan gagasan utama paragraf kedua yang paling tepat.`
  },

  // Soal 3
  {
    id: 3,
    number: 3,
    topic: 'Complex Analysis & Workforce Strategy (AI in the Workplace)',
    readingText: TEKS_AI_WORKPLACE,
    text: 'According to the text, as a student who will soon join the workforce, what should you do to compete with AI? There is more than one correct answer. Click on every correct answer!',
    type: 'multiple-complex',
    options: [
      { id: 'A', text: 'Improve your emotional intelligence', correct: true },
      { id: 'B', text: 'Avoid industries where AI is widely applied', correct: false },
      { id: 'C', text: 'Undergo personalized training to close skill gaps', correct: false },
      { id: 'D', text: 'Switch to jobs with minimal technology involvement', correct: false },
      { id: 'E', text: 'Focus on tasks that require creativity and complex thinking', correct: true }
    ],
    correctAnswer: ['A', 'E'],
    officialKeyText: 'A dan E',
    discussion: `Teks menyebutkan bahwa AI unggul pada tugas rutin/monoton tetapi **tidak bisa meniru empathy, emotional intelligence, and human connection**, serta manusia memiliki keunggulan tak tergantikan dalam **creative problem solving, ethical reasoning, and critical thinking**.

Maka saran untuk siswa/calon tenaga kerja:
* **Opsi A:** *Improve your emotional intelligence* (Sesuai paragraf 3: *"cultivate emotional intelligence"*).
* **Opsi E:** *Focus on tasks that require creativity and complex thinking* (Sesuai paragraf 3: *"human workers retain an irreplaceable advantage in creative problem solving..."*).`
  },

  // Soal 4
  {
    id: 4,
    number: 4,
    topic: 'Cause and Effect in Modern Lifestyle (Cashless Generation)',
    readingText: TEKS_CASHLESS_GENERATION,
    text: 'According to the text, what are the main reasons why many people are going cashless? There is more than one correct answer. Click on every correct answer!',
    type: 'multiple-complex',
    options: [
      { id: 'A', text: 'Digital payments are quicker and more practical', correct: true },
      { id: 'B', text: 'People want to save more by using e-wallets', correct: true },
      { id: 'C', text: 'Schools and cafes have started refusing cash', correct: false },
      { id: 'D', text: 'Using cards helps people earn extra income', correct: false },
      { id: 'E', text: 'Governments are banning physical money', correct: false }
    ],
    correctAnswer: ['A', 'B'],
    officialKeyText: 'A dan B',
    discussion: `Pada paragraf kedua dijelaskan alasan utama masyarakat beralih ke pembayaran nontunai (*cashless*):
1. **Kepraktisan dan kecepatan:** *"First and foremost is sheer speed and convenience; digital payments are faster and easier than carrying bulky wallets full of bills and coins."* (Mendukung opsi **A**).
2. **Kemudahan menabung & kontrol keuangan:** *"many digital platforms offer budgeting dashboards, cashback incentives, and loyalty reward points that encourage users to track expenditures and save more money effectively."* (Mendukung opsi **B**).`
  },

  // Soal 5
  {
    id: 5,
    number: 5,
    topic: 'Author Target Audience (Cashless Generation)',
    readingText: TEKS_CASHLESS_GENERATION,
    text: 'Who is the author writing this text for? There is more than one correct answer. Click on every correct answer!',
    type: 'multiple-complex',
    options: [
      { id: 'A', text: 'Teenagers and young adults adapting to digital payment.', correct: true },
      { id: 'B', text: 'Government officials promoting cashless policies.', correct: false },
      { id: 'C', text: 'Bank staff working on mobile banking systems.', correct: false },
      { id: 'D', text: 'Students learning about modern lifestyles.', correct: true },
      { id: 'E', text: 'People unfamiliar with digital technology.', correct: false }
    ],
    correctAnswer: ['A', 'D'],
    officialKeyText: 'A dan D',
    discussion: `Sasaran pembaca teks ini adalah generasi muda dan pelajar:
* **Opsi A:** Paragraf 2 menyebutkan *"especially teenagers and young adults, are enthusiastically going cashless."*
* **Opsi D:** Paragraf penutup menegaskan relevansi teks untuk edukasi siswa: *"As schools, universities, and businesses adapt... fostering digital financial literacy will be crucial to ensuring that young people can navigate a cashless economy..."*`
  },

  // Soal 6
  {
    id: 6,
    number: 6,
    topic: "Author's Rhetorical Organization (Cashless Generation)",
    readingText: TEKS_CASHLESS_GENERATION,
    text: 'How does the writer present different viewpoints about the topic?',
    type: 'multiple',
    options: [
      { id: 'A', text: 'By showing only negative effects of a cashless society', correct: false },
      { id: 'B', text: 'By clearly supporting the idea of going fully digital', correct: false },
      { id: 'C', text: 'By including statistics from international research', correct: false },
      { id: 'D', text: 'By giving emotional opinions from young people', correct: false },
      { id: 'E', text: 'By mentioning pros and cons of going cashless', correct: true }
    ],
    correctAnswer: 'E',
    officialKeyText: 'E (By mentioning pros and cons of going cashless)',
    discussion: `Penulis mengorganisasikan teks secara berimbang dengan menyajikan:
* **Kelebihan / Keuntungan (Pros):** Paragraf 2 membahas kecepatan, kepraktisan, dan fitur pengelolaan uang.
* **Kekurangan / Tantangan (Cons):** Paragraf 3 membahas potensi eksklusi bagi lansia/warga desa dan risiko keamanan siber/gangguan sistem.
* Ditegaskan pada paragraf 4: *"While there are both advantages and disadvantages to this financial evolution..."*

Sehingga opsi **(E)** adalah deskripsi struktur sudut pandang yang paling tepat.`
  },

  // Soal 7
  {
    id: 7,
    number: 7,
    topic: 'Factual Understanding & Definitions (Smart Spending)',
    readingText: TEKS_SMART_SPENDING,
    text: 'According to the text, the purpose of a budget is to ...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'help people buy more of the things they enjoy', correct: false },
      { id: 'B', text: 'make it easier to decide what to buy first', correct: false },
      { id: 'C', text: 'show how much money comes in and goes out', correct: true },
      { id: 'D', text: 'remind people of the products they want to buy', correct: false },
      { id: 'E', text: 'help people find better stores with lower prices', correct: false }
    ],
    correctAnswer: 'C',
    officialKeyText: 'C (show how much money comes in and goes out)',
    discussion: `Definisi dan fungsi anggaran (*budget*) tercantum secara eksplisit pada paragraf ketiga kalimat kedua:
> *"A budget is a simple plan that shows how much money comes in and how much goes out over a specific period."*

Jawaban yang tepat adalah opsi **(C)**.`
  },

  // Soal 8
  {
    id: 8,
    number: 8,
    topic: 'Text Synthesis & Overall Summary (Smart Spending)',
    readingText: TEKS_SMART_SPENDING,
    text: 'What is the best summary of the text?',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Financial literacy helps people plan their shopping and find the best prices.', correct: false },
      { id: 'B', text: 'Needs and wants are the same and should be treated equally when spending money.', correct: false },
      { id: 'C', text: 'A smart buyer thinks carefully before buying and considers needs over wants.', correct: false },
      { id: 'D', text: 'Planning a budget is useful because it helps people spend more money on fun activities.', correct: false },
      { id: 'E', text: 'Smart spending and consumer awareness help people make better decisions with their money.', correct: true }
    ],
    correctAnswer: 'E',
    officialKeyText: 'E (Smart spending and consumer awareness help people make better decisions with their money.)',
    discussion: `Rangkuman terbaik yang mencakup keseluruhan teks tertuang pada kalimat kesimpulan di paragraf terakhir:
> *"In short, smart spending and consumer awareness help people make better decisions with their money."*

Opsi **(E)** merangkum aspek pengeluaran cerdas, pembedaan kebutuhan vs keinginan, pembuatan anggaran, dan kesadaran konsumen secara utuh.`
  },

  // Soal 9
  {
    id: 9,
    number: 9,
    topic: 'Evaluating Arguments & Textual Evidence (Smart Spending)',
    readingText: TEKS_SMART_SPENDING,
    text: 'Which of the following opinions are supported by strong reasoning or examples in the text? There is more than one correct answer. Click on every correct answer!',
    type: 'multiple-complex',
    options: [
      { id: 'A', text: 'Smart spending helps people avoid buying things they do not really need.', correct: true },
      { id: 'B', text: 'Buying new clothes or eating out is always a waste of money.', correct: false },
      { id: 'C', text: 'A budget can help people save money for their future needs.', correct: true },
      { id: 'D', text: 'People who spend without a plan are bad at handling money.', correct: false },
      { id: 'E', text: 'Students learning money skills will manage their money better as adults.', correct: true }
    ],
    correctAnswer: ['A', 'C', 'E'],
    officialKeyText: 'A, C, dan E',
    discussion: `Evaluasi argumen yang didukung oleh teks:
* **Poin A:** Didukung oleh Paragraf 3: *"It helps people avoid buying things on impulse..."*
* **Poin C:** Didukung oleh Paragraf 3: *"allows them to save money for the future... prepare for unexpected emergencies."*
* **Poin E:** Didukung oleh Paragraf 5: *"Students who learn this skill early will be better prepared to manage their money as they grow up and enter adulthood with financial independence and confidence."*

Maka opsi yang benar adalah **A, C, dan E**.`
  },

  // Soal 10
  {
    id: 10,
    number: 10,
    topic: 'Application & Practical Action (Smart Spending)',
    readingText: TEKS_SMART_SPENDING,
    text: 'After reading the text, as a senior high school student, what can you do to be considered a smart shopper? There is more than one correct answer. Click on every correct answer!',
    type: 'multiple-complex',
    options: [
      { id: 'A', text: 'Create a list before buying snacks in the supermarket.', correct: true },
      { id: 'B', text: 'Identify their personal needs versus wants.', correct: true },
      { id: 'C', text: 'Think carefully before purchasing school supplies.', correct: true },
      { id: 'D', text: 'Companies should not use signs and pictures to attract buyers.', correct: false },
      { id: 'E', text: 'Buying school supplies is not necessary if students have old ones.', correct: false }
    ],
    correctAnswer: ['A', 'B', 'C'],
    officialKeyText: 'A, B, dan C',
    discussion: `Tindakan nyata seorang siswa untuk menjadi *smart shopper* berdasarkan teks:
* **Opsi A:** Membuat daftar/rencana belanja (*make a budget / deliberate planning*) agar terhindar dari *impulse buying*.
* **Opsi B:** Mengidentifikasi perbedaan kebutuhan vs keinginan (*understanding the fundamental difference between needs and wants* - Paragraf 2).
* **Opsi C:** Berpikir matang dan menimbang secara kritis sebelum berbelanja (*pausing to reflect before making any purchase* - Paragraf 4).

Maka jawaban benar adalah **A, B, dan C**.`
  }
];
