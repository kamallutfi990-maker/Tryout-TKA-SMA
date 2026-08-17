import React from 'react';

interface BiologiQuestionDiagramProps {
  questionId: number;
  className?: string;
}

export const BiologiQuestionDiagram: React.FC<BiologiQuestionDiagramProps> = ({ questionId, className = '' }) => {
  // Question 7: Sistem Organ Reproduksi Pria dengan Tanda X pada Vas Deferens
  if (questionId === 7) {
    return (
      <div className={`w-full max-w-2xl mx-auto bg-slate-900 text-white rounded-2xl p-4 sm:p-6 border border-slate-700 shadow-lg ${className}`}>
        <div className="flex items-center justify-between border-b border-slate-700 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-mono text-xs rounded-lg font-bold border border-emerald-500/30">
              DIAGRAM ANATOMI
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-slate-200">
              Sistem Organ Reproduksi Pria (Anatomi Sagital)
            </h4>
          </div>
          <span className="text-[11px] font-mono text-slate-400">Ref: IMG_2361</span>
        </div>

        <div className="relative bg-slate-950/80 rounded-xl p-3 sm:p-5 border border-slate-800 flex flex-col items-center">
          <svg viewBox="0 0 650 420" className="w-full h-auto max-h-80 drop-shadow-md select-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gradBladder" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#d97706" stopOpacity="0.7" />
              </linearGradient>
              <linearGradient id="gradTestis" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="gradDuct" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Background Grid Lines */}
            <g stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4">
              <line x1="50" y1="50" x2="600" y2="50" />
              <line x1="50" y1="150" x2="600" y2="150" />
              <line x1="50" y1="250" x2="600" y2="250" />
              <line x1="50" y1="350" x2="600" y2="350" />
            </g>

            {/* Spine / Pelvis Contour */}
            <path d="M 120,40 Q 110,180 140,280 Q 160,340 210,380" fill="none" stroke="#334155" strokeWidth="6" strokeLinecap="round" opacity="0.6" />
            <text x="70" y="190" fill="#64748b" fontSize="11" fontFamily="sans-serif">Tulang Panggul</text>

            {/* Urinary Bladder (Kandung Kemih) */}
            <path d="M 280,110 C 230,110 210,160 230,200 C 250,230 310,235 340,200 C 370,165 340,110 280,110 Z" fill="url(#gradBladder)" stroke="#fbbf24" strokeWidth="2.5" />
            <text x="245" y="165" fill="#fef3c7" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Kandung Kemih</text>
            <text x="240" y="180" fill="#fde68a" fontSize="10" fontFamily="sans-serif">(Vesica Urinaria)</text>

            {/* Ureter */}
            <path d="M 220,50 Q 250,80 260,120" fill="none" stroke="#f59e0b" strokeWidth="3" strokeDasharray="3 3" />
            <text x="185" y="65" fill="#fbbf24" fontSize="10" fontFamily="sans-serif">Ureter</text>

            {/* Seminal Vesicle (Vesikula Seminalis) */}
            <path d="M 345,185 C 365,175 385,190 380,210 C 375,225 355,220 345,205 Z" fill="#ec4899" stroke="#f472b6" strokeWidth="2" />
            <line x1="380" y1="195" x2="460" y2="175" stroke="#f472b6" strokeWidth="1.5" />
            <text x="465" y="178" fill="#f472b6" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Vesikula Seminalis</text>
            <text x="465" y="192" fill="#fbcfe8" fontSize="9.5" fontFamily="sans-serif">(Produsen 60% cairan semen)</text>

            {/* Prostate Gland (Kelenjar Prostat) */}
            <path d="M 315,220 C 345,215 360,240 350,265 C 335,280 305,275 300,250 Z" fill="#8b5cf6" stroke="#a78bfa" strokeWidth="2" />
            <line x1="355" y1="255" x2="460" y2="245" stroke="#a78bfa" strokeWidth="1.5" />
            <text x="465" y="248" fill="#a78bfa" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Kelenjar Prostat</text>
            <text x="465" y="262" fill="#ddd6fe" fontSize="9.5" fontFamily="sans-serif">(Cairan basa & nutrisi)</text>

            {/* Bulbourethral Gland (Cowper) */}
            <circle cx="315" cy="285" r="7" fill="#06b6d4" stroke="#22d3ee" strokeWidth="1.5" />
            <line x1="322" y1="285" x2="460" y2="305" stroke="#22d3ee" strokeWidth="1.5" />
            <text x="465" y="308" fill="#22d3ee" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Kelenjar Cowper</text>

            {/* Scrotum & Testis */}
            <path d="M 270,330 C 250,330 240,360 250,390 C 265,415 310,415 320,385 C 325,355 300,330 270,330 Z" fill="#1e293b" stroke="#475569" strokeWidth="2" />
            <text x="210" y="405" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">Skrotum</text>

            {/* Testis */}
            <ellipse cx="282" cy="372" rx="22" ry="18" fill="url(#gradTestis)" stroke="#38bdf8" strokeWidth="2" />
            <text x="264" y="376" fill="#ffffff" fontSize="10.5" fontWeight="bold" fontFamily="sans-serif">Testis</text>
            <line x1="260" y1="375" x2="160" y2="375" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="80" y="378" fill="#38bdf8" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Testis (Spermatogenesis)</text>

            {/* Epididymis */}
            <path d="M 302,358 C 312,365 312,385 300,392 C 295,385 298,365 302,358 Z" fill="#f97316" stroke="#fb923c" strokeWidth="2" />
            <line x1="310" y1="375" x2="420" y2="375" stroke="#fb923c" strokeWidth="1.5" />
            <text x="425" y="378" fill="#fb923c" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Epididimis (Pematangan)</text>

            {/* Vas Deferens (Saluran Sperma) - CRUCIAL PART */}
            <path
              d="M 302,358 Q 330,300 320,240 Q 310,170 260,160 Q 210,150 200,200 Q 190,260 260,265 Q 310,270 330,225"
              fill="none"
              stroke="#10b981"
              strokeWidth="6"
              strokeLinecap="round"
            />
            {/* Inner tube core */}
            <path
              d="M 302,358 Q 330,300 320,240 Q 310,170 260,160 Q 210,150 200,200 Q 190,260 260,265 Q 310,270 330,225"
              fill="none"
              stroke="#a7f3d0"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Urethra & Penis */}
            <path d="M 310,265 Q 300,290 280,300 Q 230,315 200,315" fill="none" stroke="#e2e8f0" strokeWidth="7" strokeLinecap="round" />
            <path d="M 310,265 Q 300,290 280,300 Q 230,315 200,315" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
            <text x="135" y="318" fill="#93c5fd" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Uretra / Penis</text>

            {/* === PROMINENT TARGET LABEL "X" ON VAS DEFERENS === */}
            <g transform="translate(195, 175)" filter="url(#glow)">
              <circle cx="0" cy="0" r="22" fill="#ef4444" stroke="#ffffff" strokeWidth="3.5" />
              <text x="0" y="8" fill="#ffffff" fontSize="24" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">X</text>
            </g>

            {/* Pointer & Callout Box for X */}
            <line x1="172" y1="175" x2="90" y2="120" stroke="#f87171" strokeWidth="2.5" />
            <rect x="15" y="80" width="160" height="46" rx="8" fill="#1e1b4b" stroke="#ef4444" strokeWidth="1.5" />
            <text x="25" y="98" fill="#fca5a5" fontSize="11" fontWeight="900" fontFamily="sans-serif">SALURAN X</text>
            <text x="25" y="114" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">= Vas Deferens (Duktus)</text>
          </svg>
        </div>

        <div className="mt-3 text-xs text-slate-300 bg-slate-800/80 p-3 rounded-xl border border-slate-700 leading-relaxed">
          <span className="font-bold text-amber-400">Petunjuk Gambar:</span> Huruf <strong className="text-rose-400">X</strong> menunjuk pada saluran <em>vas deferens</em> yang mengangkut sperma matang dari epididimis menuju uretra. Jika saluran ini dipotong/tersumbat (vasektomi), sperma tertahan di testis sementara cairan semen dari prostat dan vesikula seminalis tetap keluar normal.
        </div>
      </div>
    );
  }

  // Question 11: Jaring-Jaring Makanan Ekosistem Laut Kutub
  if (questionId === 11) {
    return (
      <div className={`w-full max-w-2xl mx-auto bg-slate-900 text-white rounded-2xl p-4 sm:p-6 border border-slate-700 shadow-lg ${className}`}>
        <div className="flex items-center justify-between border-b border-slate-700 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-cyan-500/20 text-cyan-300 font-mono text-xs rounded-lg font-bold border border-cyan-500/30">
              JARING-JARING MAKANAN
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-slate-200">
              Ekosistem Perairan Laut Kutub (Antartika)
            </h4>
          </div>
          <span className="text-[11px] font-mono text-slate-400">Ref: IMG_2362</span>
        </div>

        <div className="bg-slate-950/90 rounded-xl p-4 sm:p-6 border border-slate-800 flex flex-col items-center">
          <svg viewBox="0 0 680 430" className="w-full h-auto max-h-84 select-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
              </marker>
              <marker id="arrow-danger" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#ef4444" />
              </marker>
            </defs>

            {/* Level 1: Produsen (Fitoplankton) */}
            <g transform="translate(40, 180)">
              <rect x="0" y="0" width="130" height="70" rx="12" fill="#065f46" stroke="#34d399" strokeWidth="2" />
              <text x="65" y="28" fill="#a7f3d0" fontSize="10" fontWeight="bold" textAnchor="middle">PRODUSEN PRIMER</text>
              <text x="65" y="48" fill="#ffffff" fontSize="13" fontWeight="900" textAnchor="middle">Fitoplankton</text>
              <text x="65" y="62" fill="#6ee7b7" fontSize="9" textAnchor="middle">(Alga Mikroskopis)</text>
            </g>

            {/* Level 2: Konsumen 1 (Zooplankton & Krill) */}
            <g transform="translate(230, 80)">
              <rect x="0" y="0" width="140" height="60" rx="12" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="2" />
              <text x="70" y="24" fill="#93c5fd" fontSize="10" fontWeight="bold" textAnchor="middle">KONSUMEN I</text>
              <text x="70" y="45" fill="#ffffff" fontSize="13" fontWeight="900" textAnchor="middle">Krill & Zooplankton</text>
            </g>

            {/* Level 3: TARGET SOAL -> Ikan Kecil */}
            <g transform="translate(230, 270)">
              <rect x="0" y="0" width="150" height="75" rx="12" fill="#7f1d1d" stroke="#f87171" strokeWidth="3" strokeDasharray="4 2" />
              <rect x="5" y="5" width="140" height="18" rx="6" fill="#ef4444" />
              <text x="75" y="18" fill="#ffffff" fontSize="9.5" fontWeight="900" textAnchor="middle">POPULASI MENURUN (X)</text>
              <text x="75" y="46" fill="#ffffff" fontSize="14" fontWeight="900" textAnchor="middle">Ikan Kecil & Cumi</text>
              <text x="75" y="63" fill="#fca5a5" fontSize="9" textAnchor="middle">(Sumber Makanan Krusial)</text>
            </g>

            {/* Level 4: Konsumen Menengah (Pinguin & Anjing Laut) */}
            <g transform="translate(440, 140)">
              <rect x="0" y="0" width="140" height="65" rx="12" fill="#4c1d95" stroke="#a78bfa" strokeWidth="2" />
              <text x="70" y="24" fill="#ddd6fe" fontSize="10" fontWeight="bold" textAnchor="middle">PREDATOR LANGSUNG</text>
              <text x="70" y="44" fill="#ffffff" fontSize="13" fontWeight="900" textAnchor="middle">Pinguin</text>
              <text x="70" y="58" fill="#c4b5fd" fontSize="9" textAnchor="middle">(Konsumen Sekunder)</text>
            </g>

            <g transform="translate(440, 260)">
              <rect x="0" y="0" width="140" height="65" rx="12" fill="#4c1d95" stroke="#a78bfa" strokeWidth="2" />
              <text x="70" y="24" fill="#ddd6fe" fontSize="10" fontWeight="bold" textAnchor="middle">PREDATOR LANGSUNG</text>
              <text x="70" y="44" fill="#ffffff" fontSize="13" fontWeight="900" textAnchor="middle">Anjing Laut (Seal)</text>
              <text x="70" y="58" fill="#c4b5fd" fontSize="9" textAnchor="middle">(Konsumen Sekunder)</text>
            </g>

            {/* Level 5: Apex Predator (Paus Orca) */}
            <g transform="translate(520, 20)">
              <rect x="0" y="0" width="140" height="65" rx="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
              <text x="70" y="24" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">PREDATOR PUNCAK</text>
              <text x="70" y="48" fill="#ffffff" fontSize="13" fontWeight="900" textAnchor="middle">Paus Orca</text>
            </g>

            {/* ARROWS / TROPHIC FLOW */}
            {/* Fitoplankton -> Zooplankton */}
            <path d="M 150,180 Q 180,120 220,115" fill="none" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* Fitoplankton -> Ikan Kecil */}
            <path d="M 170,230 Q 200,280 220,295" fill="none" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* Zooplankton -> Ikan Kecil */}
            <path d="M 300,145 L 300,260" fill="none" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* Zooplankton -> Paus Orca / Paus Balin */}
            <path d="M 370,95 Q 440,65 510,55" fill="none" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* Ikan Kecil -> Pinguin (IMPACTED) */}
            <path d="M 380,290 Q 410,210 430,185" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray="5 3" markerEnd="url(#arrow-danger)" />

            {/* Ikan Kecil -> Anjing Laut (IMPACTED) */}
            <path d="M 380,315 L 430,305" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray="5 3" markerEnd="url(#arrow-danger)" />

            {/* Pinguin -> Paus Orca */}
            <path d="M 510,140 Q 540,110 560,90" fill="none" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* Anjing Laut -> Paus Orca */}
            <path d="M 580,270 Q 640,180 600,90" fill="none" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* Impact Box */}
            <g transform="translate(180, 380)">
              <rect x="0" y="0" width="340" height="36" rx="8" fill="#450a0a" stroke="#dc2626" strokeWidth="1.5" />
              <text x="170" y="22" fill="#fca5a5" fontSize="11" fontWeight="bold" textAnchor="middle">
                Efek Bottom-Up: Penurunan Ikan Kecil = Pinguin & Anjing Laut Kelaparan
              </text>
            </g>
          </svg>
        </div>

        <div className="mt-3 text-xs text-slate-300 bg-slate-800/80 p-3 rounded-xl border border-slate-700 leading-relaxed">
          <span className="font-bold text-amber-400">Petunjuk Gambar:</span> Panah merah putus-putus menunjukkan aliran energi langsung dari <strong className="text-rose-400">Ikan Kecil</strong> ke predator sekundernya (<strong className="text-purple-300">Pinguin</strong> dan <strong className="text-purple-300">Anjing Laut</strong>). Jika populasi ikan kecil anjlok, pemangsa langsungnya akan mengalami kelaparan dan populasinya ikut menyusut drastis.
        </div>
      </div>
    );
  }

  // Question 13: Grafik Vaksinasi COVID-19 vs Dinamika Kasus
  if (questionId === 13) {
    return (
      <div className={`w-full max-w-2xl mx-auto bg-slate-900 text-white rounded-2xl p-4 sm:p-6 border border-slate-700 shadow-lg ${className}`}>
        <div className="flex items-center justify-between border-b border-slate-700 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-mono text-xs rounded-lg font-bold border border-emerald-500/30">
              ANALISIS GRAFIK DATA
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-slate-200">
              Dinamika Kasus COVID-19 vs Cakupan Vaksinasi Primer & Booster
            </h4>
          </div>
          <span className="text-[11px] font-mono text-slate-400">Ref: IMG_2363</span>
        </div>

        <div className="bg-slate-950/90 rounded-xl p-4 sm:p-6 border border-slate-800 flex flex-col items-center">
          <svg viewBox="0 0 680 390" className="w-full h-auto max-h-84 select-none" xmlns="http://www.w3.org/2000/svg">
            {/* Grid & Axis */}
            <g stroke="#334155" strokeWidth="1" strokeDasharray="3 3">
              <line x1="80" y1="50" x2="620" y2="50" />
              <line x1="80" y1="120" x2="620" y2="120" />
              <line x1="80" y1="190" x2="620" y2="190" />
              <line x1="80" y1="260" x2="620" y2="260" />
            </g>

            {/* Axes */}
            <line x1="80" y1="40" x2="80" y2="290" stroke="#94a3b8" strokeWidth="2" />
            <line x1="80" y1="290" x2="630" y2="290" stroke="#94a3b8" strokeWidth="2" />

            {/* Left Y Axis Labels (Kasus Harian Ribuan) */}
            <text x="70" y="55" fill="#f87171" fontSize="10" textAnchor="end" fontWeight="bold">60 rb</text>
            <text x="70" y="125" fill="#f87171" fontSize="10" textAnchor="end" fontWeight="bold">40 rb</text>
            <text x="70" y="195" fill="#f87171" fontSize="10" textAnchor="end" fontWeight="bold">20 rb</text>
            <text x="70" y="265" fill="#f87171" fontSize="10" textAnchor="end" fontWeight="bold">5 rb</text>
            <text x="70" y="295" fill="#94a3b8" fontSize="10" textAnchor="end">0</text>
            <text x="35" y="170" fill="#f87171" fontSize="11" fontWeight="bold" transform="rotate(-90 35 170)" textAnchor="middle">
              Kasus Harian COVID-19
            </text>

            {/* Right Y Axis Labels (% Vaksinasi) */}
            <text x="635" y="55" fill="#34d399" fontSize="10" fontWeight="bold">100%</text>
            <text x="635" y="125" fill="#34d399" fontSize="10" fontWeight="bold">75%</text>
            <text x="635" y="195" fill="#34d399" fontSize="10" fontWeight="bold">50%</text>
            <text x="635" y="265" fill="#34d399" fontSize="10" fontWeight="bold">25%</text>
            <text x="665" y="170" fill="#34d399" fontSize="11" fontWeight="bold" transform="rotate(90 665 170)" textAnchor="middle">
              Cakupan Vaksin (% Populasi)
            </text>

            {/* X-Axis Time Milestones */}
            <text x="140" y="310" fill="#cbd5e1" fontSize="10" textAnchor="middle">Jul 2021</text>
            <text x="140" y="322" fill="#94a3b8" fontSize="8.5" textAnchor="middle">(Delta)</text>

            <text x="270" y="310" fill="#cbd5e1" fontSize="10" textAnchor="middle">Nov 2021</text>
            <text x="270" y="322" fill="#94a3b8" fontSize="8.5" textAnchor="middle">(Vaksin Dosis 1&2)</text>

            <text x="410" y="310" fill="#cbd5e1" fontSize="10" textAnchor="middle">Feb 2022</text>
            <text x="410" y="322" fill="#94a3b8" fontSize="8.5" textAnchor="middle">(Omicron Ringan)</text>

            <text x="550" y="310" fill="#cbd5e1" fontSize="10" textAnchor="middle">Agt 2022</text>
            <text x="550" y="322" fill="#94a3b8" fontSize="8.5" textAnchor="middle">(Booster & Landai)</text>

            {/* CURVE 1: Kasus Harian (Red Line with Peaks) */}
            <path
              d="M 80,270 Q 110,260 140,55 Q 170,220 220,270 Q 270,280 340,275 Q 380,240 410,130 Q 440,240 480,275 L 610,280"
              fill="none"
              stroke="#ef4444"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            {/* Peak Annotations */}
            <circle cx="140" cy="55" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
            <rect x="95" y="25" width="90" height="20" rx="4" fill="#7f1d1d" />
            <text x="140" y="38" fill="#fca5a5" fontSize="9" fontWeight="900" textAnchor="middle">Puncak Delta</text>

            <circle cx="410" cy="130" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
            <rect x="365" y="100" width="90" height="20" rx="4" fill="#7f1d1d" />
            <text x="410" y="113" fill="#fca5a5" fontSize="9" fontWeight="900" textAnchor="middle">Puncak Omicron</text>

            {/* CURVE 2: Vaksin Dosis Primer 1 & 2 (Emerald Line Increasing) */}
            <path
              d="M 80,285 Q 140,260 220,200 Q 300,120 400,90 Q 500,75 610,68"
              fill="none"
              stroke="#10b981"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <circle cx="610" cy="68" r="4" fill="#10b981" />

            {/* CURVE 3: Vaksin Booster Dosis 3 (Sky Blue Line) */}
            <path
              d="M 80,290 L 330,290 Q 380,280 440,220 Q 520,160 610,140"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="3"
              strokeDasharray="4 2"
              strokeLinecap="round"
            />
            <circle cx="610" cy="140" r="4" fill="#38bdf8" />

            {/* Legend at Bottom */}
            <g transform="translate(100, 350)">
              <line x1="0" y1="10" x2="30" y2="10" stroke="#ef4444" strokeWidth="3" />
              <text x="36" y="14" fill="#fca5a5" fontSize="10.5" fontWeight="bold">Kasus COVID-19</text>

              <line x1="160" y1="10" x2="190" y2="10" stroke="#10b981" strokeWidth="3" />
              <text x="196" y="14" fill="#86efac" fontSize="10.5" fontWeight="bold">Vaksin Primer (Dosis 1 & 2)</text>

              <line x1="370" y1="10" x2="400" y2="10" stroke="#38bdf8" strokeWidth="3" strokeDasharray="4 2" />
              <text x="406" y="14" fill="#7dd3fc" fontSize="10.5" fontWeight="bold">Vaksin Booster (Dosis 3)</text>
            </g>
          </svg>
        </div>

        <div className="mt-3 text-xs text-slate-300 bg-slate-800/80 p-3 rounded-xl border border-slate-700 leading-relaxed">
          <span className="font-bold text-amber-400">Petunjuk Gambar:</span> Seiring peningkatan kurva hijau (<strong className="text-emerald-400">Vaksin Primer &gt; 70%</strong>) dan kurva biru (<strong className="text-sky-300">Vaksin Booster</strong>), kurva merah (<strong className="text-rose-400">Kasus Harian</strong>) mengalami penurunan tajam dan melandai stabil karena terbentuknya kekebalan kelompok (<em>herd immunity</em>).
        </div>
      </div>
    );
  }

  return null;
};
