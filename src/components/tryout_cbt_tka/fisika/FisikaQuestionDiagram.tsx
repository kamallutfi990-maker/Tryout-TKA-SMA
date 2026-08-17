import React, { useState } from 'react';
import { ZoomIn, X, Image as ImageIcon, Sparkles } from 'lucide-react';

interface FisikaQuestionDiagramProps {
  questionId: number;
  className?: string;
  imageRef?: string;
}

export const FisikaQuestionDiagram: React.FC<FisikaQuestionDiagramProps> = ({ questionId, className = '', imageRef }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const renderDiagramContent = () => {
    switch (questionId) {
      // Soal 1: Dua Bola Dilempar Horizontal dari Meja (A) dan Lantai (B) ke Titik C
      case 1:
        return (
          <svg viewBox="0 0 700 360" className="w-full h-auto max-h-72 drop-shadow-sm select-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gradBallA" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#93c5fd" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
              <linearGradient id="gradTable" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>
              <marker id="arrowFis" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b" />
              </marker>
              <marker id="arrowBlue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb" />
              </marker>
            </defs>
            {/* Ground */}
            <line x1="40" y1="300" x2="660" y2="300" stroke="#1e293b" strokeWidth="4" />
            <pattern id="hatchFis" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="10" stroke="#94a3b8" strokeWidth="1.5" />
            </pattern>
            <rect x="40" y="302" width="620" height="15" fill="url(#hatchFis)" opacity="0.4" />

            {/* Table */}
            <rect x="80" y="100" width="220" height="25" rx="3" fill="url(#gradTable)" stroke="#334155" strokeWidth="2" />
            <rect x="240" y="125" width="22" height="175" fill="#475569" stroke="#334155" strokeWidth="2" />
            
            {/* Height y dimension */}
            <line x1="60" y1="100" x2="60" y2="300" stroke="#0f172a" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M 55,105 L 60,100 L 65,105 M 55,295 L 60,300 L 65,295" fill="none" stroke="#0f172a" strokeWidth="1.5" />
            <text x="40" y="205" fill="#0f172a" fontSize="16" fontWeight="bold" fontFamily="sans-serif">y</text>

            {/* Ball A on table */}
            <circle cx="280" cy="82" r="18" fill="url(#gradBallA)" stroke="#1d4ed8" strokeWidth="2" />
            <text x="274" y="88" fill="#ffffff" fontSize="16" fontWeight="bold" fontFamily="sans-serif">A</text>
            
            {/* Velocity v1 arrow */}
            <line x1="305" y1="82" x2="385" y2="82" stroke="#1e293b" strokeWidth="2.5" markerEnd="url(#arrowFis)" />
            <text x="400" y="80" fill="#0f172a" fontSize="15" fontWeight="bold" fontFamily="sans-serif">v₁ = 30 m·s⁻¹</text>

            {/* Parabolic Trajectory of Ball A */}
            <path d="M 298,85 Q 460,95 560,300" fill="none" stroke="#0f172a" strokeWidth="2.5" strokeDasharray="5 5" />

            {/* Ball B on floor */}
            <circle cx="290" cy="282" r="18" fill="url(#gradBallA)" stroke="#1d4ed8" strokeWidth="2" />
            <text x="284" y="288" fill="#ffffff" fontSize="16" fontWeight="bold" fontFamily="sans-serif">B</text>

            {/* Velocity v2 arrow */}
            <line x1="315" y1="282" x2="380" y2="282" stroke="#1e293b" strokeWidth="2.5" markerEnd="url(#arrowFis)" />
            <text x="395" y="287" fill="#0f172a" fontSize="15" fontWeight="bold" fontFamily="sans-serif">v₂</text>

            {/* Target C */}
            <circle cx="560" cy="300" r="5" fill="#dc2626" />
            <text x="572" y="295" fill="#dc2626" fontSize="18" fontWeight="bold" fontFamily="sans-serif">C</text>

            {/* Distance x dimension */}
            <line x1="290" y1="330" x2="560" y2="330" stroke="#0f172a" strokeWidth="1.5" />
            <line x1="290" y1="300" x2="290" y2="335" stroke="#0f172a" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="560" y1="300" x2="560" y2="335" stroke="#0f172a" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M 295,325 L 290,330 L 295,335 M 555,325 L 560,330 L 555,335" fill="none" stroke="#0f172a" strokeWidth="1.5" />
            <text x="370" y="348" fill="#0f172a" fontSize="15" fontWeight="bold" fontFamily="sans-serif">x = 12 m</text>
          </svg>
        );

      // Soal 2: Meja Berputar dengan Kecepatan Sudut Omega dan Jari-Jari R
      case 2:
        return (
          <svg viewBox="0 0 600 340" className="w-full h-auto max-h-72 drop-shadow-sm select-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gradDisk" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f8fafc" />
                <stop offset="100%" stopColor="#cbd5e1" />
              </linearGradient>
              <linearGradient id="gradPillar" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#475569" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>
            </defs>
            {/* Central Pillar Stand */}
            <polygon points="300,165 240,290 360,290" fill="url(#gradPillar)" stroke="#334155" strokeWidth="2" />
            <polygon points="300,165 270,320 330,320" fill="#334155" opacity="0.3" />

            {/* Rotating Disk Bottom Shadow/Thickness */}
            <ellipse cx="300" cy="160" rx="230" ry="75" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
            <ellipse cx="300" cy="145" rx="230" ry="75" fill="url(#gradDisk)" stroke="#334155" strokeWidth="2.5" />

            {/* Center Point */}
            <circle cx="300" cy="145" r="4" fill="#0f172a" />

            {/* Mass / Load on disk */}
            <ellipse cx="440" cy="145" rx="16" ry="8" fill="#475569" stroke="#1e293b" strokeWidth="2" />
            
            {/* Radius R double arrow */}
            <line x1="300" y1="145" x2="424" y2="145" stroke="#0f172a" strokeWidth="2" />
            <path d="M 306,140 L 300,145 L 306,150 M 418,140 L 424,145 L 418,150" fill="none" stroke="#0f172a" strokeWidth="2" />
            <text x="355" y="135" fill="#0f172a" fontSize="18" fontWeight="bold" fontFamily="sans-serif">R</text>

            {/* Rotation symbol omega */}
            <path d="M 240,65 A 60 25 0 0 1 360 65" fill="none" stroke="#0f172a" strokeWidth="3" markerEnd="url(#arrowFis)" />
            <polygon points="350,55 365,65 350,75" fill="#0f172a" />
            <text x="210" y="65" fill="#0f172a" fontSize="22" fontWeight="bold" fontFamily="serif">ω</text>
          </svg>
        );

      // Soal 3: Tumbukan Mobil Boks dan Sedan
      case 3:
        return (
          <svg viewBox="0 0 700 240" className="w-full h-auto max-h-60 drop-shadow-sm select-none" xmlns="http://www.w3.org/2000/svg">
            {/* Road */}
            <line x1="20" y1="180" x2="680" y2="180" stroke="#0f172a" strokeWidth="4" />

            {/* Truck Box (m1, v1) */}
            <g transform="translate(40, 60)">
              <rect x="0" y="20" width="160" height="90" rx="3" fill="#f8fafc" stroke="#334155" strokeWidth="2.5" />
              <path d="M 160,40 L 205,40 L 220,70 L 220,110 L 160,110 Z" fill="#f8fafc" stroke="#334155" strokeWidth="2.5" />
              <polygon points="168,46 198,46 208,68 168,68" fill="#cbd5e1" stroke="#475569" strokeWidth="1.5" />
              {/* Wheels */}
              <circle cx="35" cy="115" r="14" fill="#334155" stroke="#0f172a" strokeWidth="2" />
              <circle cx="35" cy="115" r="5" fill="#e2e8f0" />
              <circle cx="70" cy="115" r="14" fill="#334155" stroke="#0f172a" strokeWidth="2" />
              <circle cx="70" cy="115" r="5" fill="#e2e8f0" />
              <circle cx="185" cy="115" r="14" fill="#334155" stroke="#0f172a" strokeWidth="2" />
              <circle cx="185" cy="115" r="5" fill="#e2e8f0" />
            </g>
            {/* Velocity v1 arrow */}
            <line x1="50" y1="50" x2="250" y2="50" stroke="#0f172a" strokeWidth="3" />
            <polygon points="245,43 260,50 245,57" fill="#0f172a" />
            <text x="270" y="55" fill="#0f172a" fontSize="16" fontWeight="bold" fontFamily="sans-serif">v₁</text>

            {/* Sedan Car (m2, v2) */}
            <g transform="translate(360, 105)">
              <path d="M 15,45 C 20,25 35,20 60,20 L 95,20 C 115,20 135,35 155,45 L 160,65 L 0,65 Z" fill="#dc2626" stroke="#991b1b" strokeWidth="2" />
              <polygon points="35,25 60,25 60,42 22,42" fill="#e2e8f0" stroke="#94a3b8" />
              <polygon points="65,25 90,25 110,42 65,42" fill="#e2e8f0" stroke="#94a3b8" />
              {/* Wheels */}
              <circle cx="35" cy="70" r="12" fill="#1e293b" stroke="#0f172a" strokeWidth="2" />
              <circle cx="35" cy="70" r="4" fill="#e2e8f0" />
              <circle cx="125" cy="70" r="12" fill="#1e293b" stroke="#0f172a" strokeWidth="2" />
              <circle cx="125" cy="70" r="4" fill="#e2e8f0" />
              <text x="75" y="10" fill="#0f172a" fontSize="15" fontWeight="bold" fontFamily="sans-serif">m₂</text>
            </g>
            {/* Velocity v2 arrow */}
            <line x1="510" y1="50" x2="380" y2="50" stroke="#0f172a" strokeWidth="3" />
            <polygon points="385,43 370,50 385,57" fill="#0f172a" />
            <text x="350" y="55" fill="#0f172a" fontSize="16" fontWeight="bold" fontFamily="sans-serif">v₂</text>

            <text x="180" y="220" fill="#334155" fontSize="15" fontWeight="bold" fontFamily="sans-serif">(a) Sebelum tumbukan</text>
          </svg>
        );

      // Soal 5: Siswa di Depan Cermin Cembung
      case 5:
        return (
          <svg viewBox="0 0 650 320" className="w-full h-auto max-h-72 drop-shadow-sm select-none" xmlns="http://www.w3.org/2000/svg">
            {/* Principal Axis (Sumbu Cermin) */}
            <line x1="30" y1="210" x2="620" y2="210" stroke="#0f172a" strokeWidth="2.5" />

            {/* Convex Mirror Arc */}
            <path d="M 310,60 Q 330,160 300,280" fill="none" stroke="#0f172a" strokeWidth="3.5" />
            <line x1="300" y1="140" x2="520" y2="140" stroke="#0f172a" strokeWidth="1.5" strokeDasharray="4 4" />

            {/* Student Silhouette Real Object */}
            <g transform="translate(80, 80)">
              <circle cx="20" cy="15" r="14" fill="#0f172a" />
              <path d="M 6,32 L 34,32 L 30,85 L 10,85 Z" fill="#0f172a" />
              <rect x="0" y="36" width="10" height="30" rx="3" fill="#0f172a" />
              <line x1="15" y1="85" x2="12" y2="130" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" />
              <line x1="25" y1="85" x2="28" y2="130" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" />
              <text x="35" y="70" fill="#0f172a" fontSize="16" fontWeight="bold" fontFamily="sans-serif">Siswa</text>
            </g>

            {/* Ray 1: Parallel to axis, reflected away as if from focus */}
            <line x1="100" y1="95" x2="318" y2="95" stroke="#0f172a" strokeWidth="2" />
            <polygon points="210,90 220,95 210,100" fill="#0f172a" />
            <line x1="318" y1="95" x2="280" y2="35" stroke="#0f172a" strokeWidth="2" />
            <polygon points="295,58 290,50 300,55" fill="#0f172a" />
            <line x1="318" y1="95" x2="435" y2="210" stroke="#0f172a" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Ray 2: Directed towards vertex */}
            <line x1="100" y1="95" x2="310" y2="140" stroke="#0f172a" strokeWidth="2" />
            <line x1="310" y1="140" x2="100" y2="140" stroke="#0f172a" strokeWidth="2" />
            <polygon points="200,135 190,140 200,145" fill="#0f172a" />

            {/* Virtual Image of Student (Smaller) */}
            <g transform="translate(370, 145)">
              <circle cx="10" cy="8" r="7" fill="#0f172a" />
              <path d="M 3,17 L 17,17 L 15,45 L 5,45 Z" fill="#0f172a" />
              <line x1="8" y1="45" x2="6" y2="65" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
              <line x1="12" y1="45" x2="14" y2="65" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
            </g>

            {/* Labels & Dimensions */}
            <text x="80" y="245" fill="#0f172a" fontSize="15" fontWeight="bold" fontFamily="sans-serif">Sumbu cermin</text>
            <line x1="80" y1="260" x2="305" y2="260" stroke="#0f172a" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M 88,255 L 80,260 L 88,265 M 297,255 L 305,260 L 297,265" fill="none" stroke="#0f172a" strokeWidth="2" />
            <text x="160" y="285" fill="#0f172a" fontSize="16" fontWeight="bold" fontFamily="sans-serif">48 cm</text>

            <text x="340" y="245" fill="#0f172a" fontSize="15" fontWeight="bold" fontFamily="sans-serif">Bayangan F maya</text>
            <line x1="310" y1="260" x2="435" y2="260" stroke="#0f172a" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M 318,255 L 310,260 L 318,265 M 427,255 L 435,260 L 427,265" fill="none" stroke="#0f172a" strokeWidth="2" />
            <text x="355" y="285" fill="#0f172a" fontSize="16" fontWeight="bold" fontFamily="sans-serif">16 cm</text>
          </svg>
        );

      // Soal 6: Grafik F vs R Hukum Coulomb
      case 6:
        return (
          <svg viewBox="0 0 500 340" className="w-full h-auto max-h-72 drop-shadow-sm select-none" xmlns="http://www.w3.org/2000/svg">
            {/* Axes */}
            <line x1="80" y1="260" x2="440" y2="260" stroke="#0f172a" strokeWidth="2.5" markerEnd="url(#arrowFis)" />
            <line x1="80" y1="260" x2="80" y2="40" stroke="#0f172a" strokeWidth="2.5" markerEnd="url(#arrowFis)" />

            <text x="60" y="35" fill="#0f172a" fontSize="16" fontWeight="bold" fontFamily="sans-serif">F (N)</text>
            <text x="430" y="285" fill="#0f172a" fontSize="16" fontWeight="bold" fontFamily="sans-serif">R (cm)</text>
            <text x="65" y="275" fill="#0f172a" fontSize="15" fontWeight="bold" fontFamily="sans-serif">0</text>

            {/* Coulomb inverse square curve F ~ 1/R^2 */}
            <path d="M 95,70 Q 150,150 200,165 Q 260,180 380,225" fill="none" stroke="#0f172a" strokeWidth="3" />

            {/* Point (R = 3 cm, F = 20 N) */}
            <line x1="80" y1="165" x2="200" y2="165" stroke="#0f172a" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="200" y1="165" x2="200" y2="260" stroke="#0f172a" strokeWidth="1.5" strokeDasharray="3 3" />

            <text x="45" y="170" fill="#0f172a" fontSize="16" fontWeight="bold" fontFamily="sans-serif">20</text>
            <text x="195" y="285" fill="#0f172a" fontSize="16" fontWeight="bold" fontFamily="sans-serif">3</text>
            <circle cx="200" cy="165" r="4" fill="#dc2626" />
          </svg>
        );

      // Soal 7: Rangkaian Lampu Warna-Warni
      case 7:
        return (
          <svg viewBox="0 0 550 360" className="w-full h-auto max-h-72 drop-shadow-sm select-none" xmlns="http://www.w3.org/2000/svg">
            {/* Circuit Loop */}
            <rect x="100" y="80" width="340" height="200" fill="none" stroke="#0f172a" strokeWidth="2.5" />

            {/* Red Bulb 15 ohm (Top Left) */}
            <g transform="translate(190, 45)">
              <rect x="0" y="30" width="30" height="15" fill="#94a3b8" stroke="#334155" strokeWidth="1.5" />
              <circle cx="15" cy="15" r="22" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
              <text x="5" y="22" fill="#ffffff" fontSize="16" fontWeight="bold" fontFamily="sans-serif">15</text>
            </g>

            {/* Voltage Source 1 (Top Right) */}
            <g transform="translate(340, 70)">
              <rect x="-10" y="5" width="40" height="10" fill="#ffffff" />
              <line x1="0" y1="0" x2="0" y2="20" stroke="#0f172a" strokeWidth="3" />
              <line x1="10" y1="-6" x2="10" y2="26" stroke="#0f172a" strokeWidth="1.5" />
              <text x="18" y="0" fill="#0f172a" fontSize="15" fontWeight="bold" fontFamily="sans-serif">ε₁ = 4 V</text>
            </g>

            {/* Green Bulb 5 ohm (Right Side) */}
            <g transform="translate(425, 150)">
              <rect x="5" y="0" width="15" height="30" fill="#94a3b8" stroke="#334155" strokeWidth="1.5" />
              <circle cx="35" cy="15" r="22" fill="#84cc16" stroke="#4d7c0f" strokeWidth="2" />
              <text x="29" y="22" fill="#ffffff" fontSize="16" fontWeight="bold" fontFamily="sans-serif">5</text>
            </g>

            {/* Blue Bulb 10 ohm (Bottom Middle) */}
            <g transform="translate(260, 245)">
              <rect x="0" y="30" width="30" height="15" fill="#94a3b8" stroke="#334155" strokeWidth="1.5" />
              <circle cx="15" cy="15" r="22" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
              <text x="5" y="22" fill="#ffffff" fontSize="16" fontWeight="bold" fontFamily="sans-serif">10</text>
            </g>

            {/* Voltage Source 2 (Bottom Left) */}
            <g transform="translate(190, 270)">
              <rect x="-10" y="5" width="40" height="10" fill="#ffffff" />
              <line x1="0" y1="-6" x2="0" y2="26" stroke="#0f172a" strokeWidth="1.5" />
              <line x1="10" y1="0" x2="10" y2="20" stroke="#0f172a" strokeWidth="3" />
              <text x="-65" y="35" fill="#0f172a" fontSize="15" fontWeight="bold" fontFamily="sans-serif">ε₂ = 2V</text>
            </g>
          </svg>
        );

      // Soal 8: Pipa U Bejana Berhubungan
      case 8:
        return (
          <svg viewBox="0 0 550 360" className="w-full h-auto max-h-72 drop-shadow-sm select-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gradLiquidX" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#84cc16" />
                <stop offset="100%" stopColor="#4d7c0f" />
              </linearGradient>
              <linearGradient id="gradWater" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#bae6fd" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
            </defs>

            {/* U-Tube Outer Glass Walls */}
            <path d="M 160,60 L 160,250 C 160,300 360,300 360,250 L 360,60 M 210,60 L 210,240 C 210,260 310,260 310,240 L 310,60" fill="none" stroke="#475569" strokeWidth="2.5" />

            {/* Water inside U-tube */}
            <path d="M 160,210 L 160,250 C 160,300 360,300 360,250 L 360,170 L 310,170 L 310,240 C 310,260 210,260 210,240 L 210,210 Z" fill="url(#gradWater)" stroke="#0284c7" strokeWidth="1" />

            {/* Liquid X (Green on left) */}
            <rect x="160" y="115" width="50" height="95" fill="url(#gradLiquidX)" stroke="#3f6212" strokeWidth="1" />
            <text x="178" y="170" fill="#ffffff" fontSize="22" fontWeight="bold" fontFamily="sans-serif">A</text>
            <text x="255" y="275" fill="#0369a1" fontSize="22" fontWeight="bold" fontFamily="sans-serif">B</text>

            {/* Interface dashed line */}
            <line x1="160" y1="210" x2="370" y2="210" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Height h1 */}
            <line x1="140" y1="115" x2="140" y2="210" stroke="#0f172a" strokeWidth="1.5" />
            <path d="M 135,120 L 140,115 L 145,120 M 135,205 L 140,210 L 145,205" fill="none" stroke="#0f172a" strokeWidth="1.5" />
            <text x="105" y="165" fill="#0f172a" fontSize="16" fontWeight="bold" fontFamily="sans-serif">h₁</text>

            {/* Height h2 */}
            <line x1="380" y1="170" x2="380" y2="210" stroke="#0f172a" strokeWidth="1.5" />
            <path d="M 375,175 L 380,170 L 385,175 M 375,205 L 380,210 L 385,205" fill="none" stroke="#0f172a" strokeWidth="1.5" />
            <text x="395" y="195" fill="#0f172a" fontSize="16" fontWeight="bold" fontFamily="sans-serif">h₂</text>

            {/* Labels */}
            <text x="215" y="145" fill="#475569" fontSize="14" fontFamily="sans-serif">→ zat cair X</text>
            <text x="215" y="225" fill="#0284c7" fontSize="14" fontFamily="sans-serif">→ air</text>
            <text x="125" y="240" fill="#0f172a" fontSize="15" fontWeight="bold" fontFamily="sans-serif">ρ_A</text>
            <text x="375" y="240" fill="#0f172a" fontSize="15" fontWeight="bold" fontFamily="sans-serif">ρ_B</text>
          </svg>
        );

      // Soal 9: Gaya-Gaya pada Pesawat Terbang
      case 9:
        return (
          <svg viewBox="0 0 650 360" className="w-full h-auto max-h-72 drop-shadow-sm select-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker id="arrowOrange" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#ea580c" />
              </marker>
            </defs>

            {/* Airplane Body */}
            <g transform="translate(140, 70)">
              {/* Fuselage */}
              <path d="M 20,150 C 40,110 100,90 280,100 L 340,70 L 350,110 L 260,125 C 200,130 80,140 20,150 Z" fill="#bae6fd" stroke="#0284c7" strokeWidth="2.5" />
              {/* Cockpit Window */}
              <polygon points="50,120 75,120 85,135 60,135" fill="#0369a1" />
              {/* Wings */}
              <polygon points="120,110 20,40 60,35 220,105" fill="#93c5fd" stroke="#0284c7" strokeWidth="2" />
              <polygon points="170,115 370,155 330,165 150,125" fill="#93c5fd" stroke="#0284c7" strokeWidth="2" />
              {/* Jet Engines */}
              <rect x="60" y="65" width="25" height="15" rx="4" fill="#475569" />
              <rect x="95" y="80" width="25" height="15" rx="4" fill="#475569" />
              <rect x="230" y="135" width="25" height="15" rx="4" fill="#475569" />
              <rect x="290" y="145" width="25" height="15" rx="4" fill="#475569" />
            </g>

            {/* Forces Arrows */}
            {/* Gaya Angkat (Lift - UP) */}
            <line x1="310" y1="160" x2="310" y2="70" stroke="#ea580c" strokeWidth="4" markerEnd="url(#arrowOrange)" />
            <text x="260" y="55" fill="#ea580c" fontSize="16" fontWeight="bold" fontFamily="sans-serif">Gaya Angkat</text>

            {/* Gaya Berat (Weight - DOWN) */}
            <line x1="310" y1="200" x2="310" y2="290" stroke="#ea580c" strokeWidth="4" markerEnd="url(#arrowOrange)" />
            <text x="270" y="315" fill="#ea580c" fontSize="16" fontWeight="bold" fontFamily="sans-serif">Gaya Berat</text>

            {/* Gaya Hambatan (Drag - LEFT) */}
            <line x1="160" y1="220" x2="80" y2="250" stroke="#ea580c" strokeWidth="4" markerEnd="url(#arrowOrange)" />
            <text x="20" y="275" fill="#ea580c" fontSize="16" fontWeight="bold" fontFamily="sans-serif">Gaya Hambatan</text>

            {/* Gaya Dorong (Thrust - FORWARD/RIGHT) */}
            <line x1="490" y1="130" x2="430" y2="150" stroke="#ea580c" strokeWidth="4" markerEnd="url(#arrowOrange)" />
            <text x="440" y="120" fill="#ea580c" fontSize="16" fontWeight="bold" fontFamily="sans-serif">Gaya Dorong</text>
          </svg>
        );

      // Soal 10: Balok P Terapung dan Balok P+Q Melayang
      case 10:
        return (
          <svg viewBox="0 0 650 300" className="w-full h-auto max-h-64 drop-shadow-sm select-none" xmlns="http://www.w3.org/2000/svg">
            {/* Beaker 1 (Left) */}
            <g transform="translate(60, 40)">
              <rect x="0" y="40" width="220" height="180" fill="#06b6d4" opacity="0.35" stroke="#0891b2" strokeWidth="2" />
              <line x1="0" y1="0" x2="0" y2="220" stroke="#0f172a" strokeWidth="2.5" />
              <line x1="220" y1="0" x2="220" y2="220" stroke="#0f172a" strokeWidth="2.5" />
              <line x1="0" y1="220" x2="220" y2="220" stroke="#0f172a" strokeWidth="3" />
              
              {/* Block P floating 1/2 submerged */}
              <rect x="65" y="10" width="90" height="70" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
              <text x="100" y="50" fill="#0369a1" fontSize="22" fontWeight="bold" fontFamily="sans-serif">P</text>
            </g>

            {/* Beaker 2 (Right) */}
            <g transform="translate(360, 40)">
              <rect x="0" y="40" width="220" height="180" fill="#06b6d4" opacity="0.35" stroke="#0891b2" strokeWidth="2" />
              <line x1="0" y1="0" x2="0" y2="220" stroke="#0f172a" strokeWidth="2.5" />
              <line x1="220" y1="0" x2="220" y2="220" stroke="#0f172a" strokeWidth="2.5" />
              <line x1="0" y1="220" x2="220" y2="220" stroke="#0f172a" strokeWidth="3" />

              {/* Block P and Block Q fully submerged (melayang) */}
              <g transform="translate(60, 55)">
                {/* Block Q */}
                <rect x="15" y="0" width="60" height="35" fill="#f8fafc" stroke="#334155" strokeWidth="2" />
                <text x="38" y="25" fill="#0f172a" fontSize="18" fontWeight="bold" fontFamily="sans-serif">Q</text>
                {/* Block P */}
                <rect x="0" y="35" width="90" height="70" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
                <text x="35" y="80" fill="#0369a1" fontSize="22" fontWeight="bold" fontFamily="sans-serif">P</text>
              </g>
            </g>
          </svg>
        );

      // Soal 12: Pemain Sirkus di Atas Tali Membawa Tongkat Melengkung
      case 12:
        return (
          <svg viewBox="0 0 650 340" className="w-full h-auto max-h-72 drop-shadow-sm select-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gradCircus" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#991b1b" />
                <stop offset="20%" stopColor="#b45309" />
                <stop offset="40%" stopColor="#991b1b" />
                <stop offset="60%" stopColor="#b45309" />
                <stop offset="80%" stopColor="#991b1b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
            </defs>
            {/* Background Tent */}
            <rect x="20" y="20" width="610" height="300" rx="10" fill="url(#gradCircus)" opacity="0.85" />

            {/* Tightrope */}
            <path d="M 20,180 Q 325,210 630,170" fill="none" stroke="#0f172a" strokeWidth="3" />

            {/* Acrobat Figure */}
            <g transform="translate(280, 70)">
              {/* Hat */}
              <polygon points="20,15 45,15 40,0 25,0" fill="#78350f" stroke="#451a03" />
              <ellipse cx="32" cy="15" rx="16" ry="4" fill="#92400e" />
              {/* Head */}
              <circle cx="32" cy="28" r="12" fill="#fde68a" />
              {/* Body / Shirt */}
              <rect x="18" y="40" width="28" height="35" rx="6" fill="#f472b6" />
              {/* Pants & Legs */}
              <line x1="24" y1="75" x2="15" y2="115" stroke="#0d9488" strokeWidth="8" strokeLinecap="round" />
              <line x1="38" y1="75" x2="45" y2="120" stroke="#0d9488" strokeWidth="8" strokeLinecap="round" />
              {/* Shoes on rope */}
              <ellipse cx="12" cy="118" rx="8" ry="4" fill="#991b1b" />
              <ellipse cx="48" cy="122" rx="8" ry="4" fill="#991b1b" />
            </g>

            {/* Curved Long Balance Pole (Tongkat Melengkung Terkulai ke Bawah) */}
            <path d="M 30,240 Q 320,80 610,210" fill="none" stroke="#22c55e" strokeWidth="6" strokeLinecap="round" />

            {/* Center of Mass Indicator */}
            <g transform="translate(325, 220)">
              <circle cx="0" cy="0" r="10" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />
              <circle cx="0" cy="0" r="3" fill="#dc2626" />
              <text x="15" y="5" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Pusat Massa (Di bawah tali)</text>
            </g>
          </svg>
        );

      // Soal 13: Botol Semprot Parfum (Hukum Bernoulli)
      case 13:
        return (
          <svg viewBox="0 0 600 320" className="w-full h-auto max-h-72 drop-shadow-sm select-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gradBulb" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#64748b" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>
            </defs>
            {/* Perfume Bottle Container */}
            <g transform="translate(120, 100)">
              <rect x="20" y="30" width="110" height="150" rx="15" fill="#f1f5f9" stroke="#334155" strokeWidth="2.5" />
              {/* Perfume Liquid (Orange) */}
              <path d="M 22,100 L 128,100 L 128,165 C 128,175 118,178 110,178 L 40,178 C 30,178 22,175 22,165 Z" fill="#f97316" opacity="0.85" />
              {/* Vertical Straw / Tube */}
              <rect x="68" y="-40" width="14" height="175" fill="#fed7aa" stroke="#c2410c" strokeWidth="1.5" />
              <rect x="45" y="-10" width="60" height="25" fill="#ca8a04" stroke="#854d0e" strokeWidth="2" />
            </g>

            {/* Horizontal Air Tube */}
            <rect x="195" y="80" width="220" height="12" fill="#ca8a04" stroke="#854d0e" strokeWidth="2" />
            
            {/* Squeeze Bulb (Karet Pompa) */}
            <path d="M 410,86 C 450,40 540,50 540,86 C 540,122 450,132 410,86 Z" fill="url(#gradBulb)" stroke="#0f172a" strokeWidth="2.5" />

            {/* Spray Mist droplets */}
            <g transform="translate(60, 45)">
              <circle cx="50" cy="40" r="1.5" fill="#c2410c" />
              <circle cx="65" cy="35" r="2" fill="#c2410c" />
              <circle cx="80" cy="42" r="1" fill="#c2410c" />
              <circle cx="95" cy="38" r="2.5" fill="#c2410c" />
              <circle cx="110" cy="45" r="1.5" fill="#c2410c" />
              <circle cx="70" cy="50" r="1.5" fill="#c2410c" />
              <circle cx="85" cy="55" r="2" fill="#c2410c" />
              <circle cx="100" cy="48" r="1.5" fill="#c2410c" />
              <circle cx="115" cy="40" r="2" fill="#c2410c" />
              <circle cx="125" cy="42" r="2.5" fill="#c2410c" />
            </g>
          </svg>
        );

      // Soal 14: Pemanah Menombak Ikan di Air (Pembiasan Cahaya)
      case 14:
        return (
          <svg viewBox="0 0 650 320" className="w-full h-auto max-h-72 drop-shadow-sm select-none" xmlns="http://www.w3.org/2000/svg">
            {/* Water Line & Region */}
            <rect x="20" y="160" width="610" height="140" fill="#38bdf8" opacity="0.3" />
            <line x1="20" y1="160" x2="630" y2="160" stroke="#0284c7" strokeWidth="2" />

            {/* Observer Eye */}
            <g transform="translate(50, 70)">
              <path d="M 0,20 Q 25,0 50,20 Q 25,40 0,20 Z" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
              <circle cx="25" cy="20" r="8" fill="#0f172a" />
              <line x1="20" y1="20" x2="40" y2="35" stroke="#0284c7" strokeWidth="2" />
            </g>

            {/* Normal Line at refraction point */}
            <line x1="310" y1="110" x2="310" y2="230" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="315" y="130" fill="#64748b" fontSize="13" fontFamily="sans-serif">Normal</text>

            {/* Real Fish (Deep in water) */}
            <g transform="translate(480, 240)">
              <path d="M 0,15 C 20,0 50,0 70,15 C 50,30 20,30 0,15 Z" fill="#0284c7" stroke="#0369a1" strokeWidth="2" />
              <polygon points="70,15 85,5 85,25" fill="#0284c7" stroke="#0369a1" strokeWidth="2" />
              <circle cx="15" cy="12" r="3" fill="#ffffff" />
              <circle cx="15" cy="12" r="1.5" fill="#0f172a" />
              <text x="-15" y="45" fill="#0369a1" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Posisi Asli Ikan</text>
            </g>

            {/* Apparent/Virtual Fish (Shallower) */}
            <g transform="translate(440, 190)">
              <path d="M 0,15 C 20,0 50,0 70,15 C 50,30 20,30 0,15 Z" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="3 3" />
              <polygon points="70,15 85,5 85,25" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="3 3" />
              <text x="-25" y="-5" fill="#64748b" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Posisi Semu Ikan</text>
            </g>

            {/* Light Rays */}
            {/* Real ray from fish to surface (bent away from normal) */}
            <line x1="480" y1="250" x2="310" y2="160" stroke="#0284c7" strokeWidth="2.5" />
            <line x1="310" y1="160" x2="80" y2="85" stroke="#0284c7" strokeWidth="2.5" />
            <polygon points="390,200 400,205 390,210" fill="#0284c7" />
            <polygon points="190,120 200,125 190,130" fill="#0284c7" />

            {/* Apparent dashed ray line to virtual fish */}
            <line x1="310" y1="160" x2="440" y2="200" stroke="#64748b" strokeWidth="2" strokeDasharray="4 4" />
          </svg>
        );

      // Soal 17: Skala Jangka Sorong
      case 17:
        return (
          <svg viewBox="0 0 600 240" className="w-full h-auto max-h-60 drop-shadow-sm select-none" xmlns="http://www.w3.org/2000/svg">
            {/* Background frame */}
            <rect x="20" y="20" width="560" height="200" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="2" />

            {/* Main Scale Body */}
            <rect x="50" y="70" width="500" height="70" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" />
            
            {/* Main scale lines (cm) */}
            {/* 1.0 */}
            <line x1="100" y1="100" x2="100" y2="140" stroke="#0f172a" strokeWidth="2" />
            <text x="95" y="90" fill="#0f172a" fontSize="14" fontWeight="bold" fontFamily="sans-serif">1</text>
            <line x1="125" y1="115" x2="125" y2="140" stroke="#0f172a" strokeWidth="1.5" />
            <line x1="150" y1="115" x2="150" y2="140" stroke="#0f172a" strokeWidth="1.5" />
            <line x1="175" y1="115" x2="175" y2="140" stroke="#0f172a" strokeWidth="1.5" />
            <line x1="200" y1="115" x2="200" y2="140" stroke="#0f172a" strokeWidth="1.5" />
            
            {/* 1.5 */}
            <line x1="225" y1="105" x2="225" y2="140" stroke="#0f172a" strokeWidth="2" />
            <text x="215" y="90" fill="#0f172a" fontSize="14" fontWeight="bold" fontFamily="sans-serif">1.5</text>
            <line x1="250" y1="115" x2="250" y2="140" stroke="#0f172a" strokeWidth="1.5" />
            <line x1="275" y1="115" x2="275" y2="140" stroke="#0f172a" strokeWidth="1.5" />
            <line x1="300" y1="115" x2="300" y2="140" stroke="#0f172a" strokeWidth="1.5" />
            <line x1="325" y1="115" x2="325" y2="140" stroke="#0f172a" strokeWidth="1.5" />

            {/* 2.0 */}
            <line x1="350" y1="100" x2="350" y2="140" stroke="#0f172a" strokeWidth="2" />
            <text x="345" y="90" fill="#0f172a" fontSize="14" fontWeight="bold" fontFamily="sans-serif">2</text>
            <line x1="375" y1="115" x2="375" y2="140" stroke="#0f172a" strokeWidth="1.5" />
            <line x1="400" y1="115" x2="400" y2="140" stroke="#0f172a" strokeWidth="1.5" />
            <line x1="425" y1="115" x2="425" y2="140" stroke="#0f172a" strokeWidth="1.5" />
            <line x1="450" y1="115" x2="450" y2="140" stroke="#0f172a" strokeWidth="1.5" />

            {/* 2.5 */}
            <line x1="475" y1="105" x2="475" y2="140" stroke="#0f172a" strokeWidth="2" />
            <text x="465" y="90" fill="#0f172a" fontSize="14" fontWeight="bold" fontFamily="sans-serif">2.5</text>

            {/* Vernier Nonius Scale (Sliding Jaw) */}
            <g transform="translate(130, 135)">
              <polygon points="0,0 280,0 280,45 130,45 105,75 75,75 90,45 0,45" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
              {/* Nonius scale marks */}
              <line x1="15" y1="0" x2="15" y2="18" stroke="#0f172a" strokeWidth="2" />
              <text x="12" y="32" fill="#0f172a" fontSize="13" fontWeight="bold" fontFamily="sans-serif">0</text>

              <line x1="41" y1="0" x2="41" y2="14" stroke="#0f172a" strokeWidth="1.5" />
              <line x1="67" y1="0" x2="67" y2="18" stroke="#0f172a" strokeWidth="2" />
              <text x="64" y="32" fill="#0f172a" fontSize="13" fontWeight="bold" fontFamily="sans-serif">2</text>

              <line x1="93" y1="0" x2="93" y2="14" stroke="#0f172a" strokeWidth="1.5" />
              <line x1="119" y1="0" x2="119" y2="18" stroke="#0f172a" strokeWidth="2" />
              <text x="116" y="32" fill="#0f172a" fontSize="13" fontWeight="bold" fontFamily="sans-serif">4</text>

              <line x1="145" y1="0" x2="145" y2="14" stroke="#0f172a" strokeWidth="1.5" />
              <line x1="171" y1="0" x2="171" y2="18" stroke="#0f172a" strokeWidth="2" />
              <text x="168" y="32" fill="#0f172a" fontSize="13" fontWeight="bold" fontFamily="sans-serif">6</text>

              <line x1="197" y1="0" x2="197" y2="14" stroke="#0f172a" strokeWidth="1.5" />
              <line x1="223" y1="0" x2="223" y2="18" stroke="#0f172a" strokeWidth="2" />
              <text x="220" y="32" fill="#0f172a" fontSize="13" fontWeight="bold" fontFamily="sans-serif">8</text>

              <line x1="249" y1="0" x2="249" y2="14" stroke="#0f172a" strokeWidth="1.5" />
              <line x1="270" y1="0" x2="270" y2="18" stroke="#0f172a" strokeWidth="2" />
              <text x="263" y="32" fill="#0f172a" fontSize="13" fontWeight="bold" fontFamily="sans-serif">10</text>
            </g>
          </svg>
        );

      // Soal 18: Kiper Menangkap Bola & Menarik Tangan
      case 18:
        return (
          <svg viewBox="0 0 600 320" className="w-full h-auto max-h-72 drop-shadow-sm select-none" xmlns="http://www.w3.org/2000/svg">
            {/* Speed motion lines behind ball */}
            <line x1="300" y1="60" x2="400" y2="40" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5 5" />
            <line x1="290" y1="80" x2="410" y2="60" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5 5" />
            <line x1="320" y1="100" x2="420" y2="80" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5 5" />

            {/* Soccer Ball */}
            <g transform="translate(420, 30)">
              <circle cx="35" cy="35" r="30" fill="#f8fafc" stroke="#1e293b" strokeWidth="2.5" />
              <polygon points="35,20 45,30 40,42 30,42 25,30" fill="#1e293b" />
              <line x1="35" y1="20" x2="35" y2="5" stroke="#1e293b" strokeWidth="2" />
              <line x1="45" y1="30" x2="60" y2="30" stroke="#1e293b" strokeWidth="2" />
              <line x1="40" y1="42" x2="52" y2="58" stroke="#1e293b" strokeWidth="2" />
              <line x1="30" y1="42" x2="18" y2="58" stroke="#1e293b" strokeWidth="2" />
              <line x1="25" y1="30" x2="10" y2="30" stroke="#1e293b" strokeWidth="2" />
            </g>

            {/* Goalkeeper Figure (Hands reaching up and pulling back) */}
            <g transform="translate(140, 60)">
              {/* Head */}
              <circle cx="100" cy="50" r="25" fill="#fde68a" stroke="#d97706" strokeWidth="1.5" />
              {/* Torso */}
              <path d="M 80,75 L 120,75 L 140,180 L 70,180 Z" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
              {/* Arms extended backward to cushion impact */}
              <path d="M 85,85 L 180,45 L 280,0" fill="none" stroke="#64748b" strokeWidth="16" strokeLinecap="round" />
              <path d="M 115,85 L 205,45 L 290,15" fill="none" stroke="#64748b" strokeWidth="16" strokeLinecap="round" />
              {/* Goalie Gloves */}
              <ellipse cx="285" cy="0" rx="15" ry="20" fill="#0284c7" stroke="#0369a1" strokeWidth="2" />
              <ellipse cx="295" cy="18" rx="15" ry="20" fill="#0284c7" stroke="#0369a1" strokeWidth="2" />
            </g>

            {/* Force Dampening Annotation */}
            <g transform="translate(240, 260)">
              <rect x="0" y="0" width="280" height="35" rx="8" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="15" y="22" fill="#1d4ed8" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Δt bertambah ⟹ Gaya F berkurang</text>
            </g>
          </svg>
        );

      // Soal 19: Bola dan Cincin Logam Dipanaskan
      case 19:
        return (
          <svg viewBox="0 0 550 300" className="w-full h-auto max-h-64 drop-shadow-sm select-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gradFlame" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="60%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#fef08a" />
              </linearGradient>
            </defs>

            {/* Metal Ball with Handle (Left) */}
            <g transform="translate(100, 60)">
              <line x1="0" y1="100" x2="80" y2="40" stroke="#15803d" strokeWidth="10" strokeLinecap="round" />
              <circle cx="100" cy="25" r="28" fill="#22c55e" stroke="#166534" strokeWidth="2.5" />
              <text x="80" y="32" fill="#ffffff" fontSize="14" fontWeight="bold" fontFamily="sans-serif">Bola</text>
            </g>

            {/* Metal Ring with Handle (Right) */}
            <g transform="translate(320, 60)">
              <line x1="30" y1="30" x2="30" y2="160" stroke="#475569" strokeWidth="8" strokeLinecap="round" />
              <ellipse cx="30" cy="30" rx="40" ry="40" fill="none" stroke="#64748b" strokeWidth="16" />
              <ellipse cx="30" cy="30" rx="32" ry="32" fill="none" stroke="#334155" strokeWidth="2" />
              <text x="-15" y="-20" fill="#0f172a" fontSize="14" fontWeight="bold" fontFamily="sans-serif">Cincin Logam</text>
            </g>

            {/* Candle with Flame heating the ring */}
            <g transform="translate(335, 175)">
              <rect x="0" y="45" width="30" height="50" fill="#67e8f9" stroke="#0891b2" strokeWidth="1.5" />
              <line x1="15" y1="45" x2="15" y2="35" stroke="#0f172a" strokeWidth="2" />
              <path d="M 15,10 C 25,25 22,35 15,35 C 8,35 5,25 15,10 Z" fill="url(#gradFlame)" />
            </g>
          </svg>
        );

      default:
        return null;
    }
  };

  const hasDiagram = [1, 2, 3, 5, 6, 7, 8, 9, 10, 12, 13, 14, 17, 18, 19].includes(questionId);

  if (!hasDiagram) return null;

  return (
    <div className={`w-full max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-sm ${className}`}>
      {/* Header Info */}
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-mono text-[11px] rounded-lg font-bold border border-blue-200 dark:border-blue-800 flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            DIAGRAM SOAL #{questionId}
          </span>
          <span className="text-xs text-slate-500 font-medium hidden sm:inline">
            Fisika TKA ANBK
          </span>
        </div>
        <div className="flex items-center gap-2">
          {imageRef && (
            <span className="text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded">
              Ref: {imageRef}
            </span>
          )}
          <button
            type="button"
            onClick={() => setIsZoomed(true)}
            className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400 font-semibold px-2 py-1 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            title="Perbesar gambar"
          >
            <ZoomIn className="w-3.5 h-3.5" />
            <span>Perbesar</span>
          </button>
        </div>
      </div>

      {/* Render Diagram Graphic */}
      <div className="relative bg-slate-50/80 dark:bg-slate-950/80 rounded-xl p-3 sm:p-4 border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center overflow-hidden">
        {renderDiagramContent()}
      </div>

      {/* Zoom Modal Overlay */}
      {isZoomed && (
        <div className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4">
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-blue-600" />
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  Tampilan Detail Diagram Soal No. {questionId} {imageRef ? `(${imageRef})` : ''}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsZoomed(false)}
                className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 flex justify-center">
              {renderDiagramContent()}
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setIsZoomed(false)}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-blue-500/20 cursor-pointer"
              >
                Tutup Tampilan Penuh
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
