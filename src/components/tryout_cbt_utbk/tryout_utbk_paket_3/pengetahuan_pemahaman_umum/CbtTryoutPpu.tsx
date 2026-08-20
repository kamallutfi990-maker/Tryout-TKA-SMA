import React from 'react';
import { ppuTryoutData } from './ppuTryoutData';
import CbtTryoutUtbkBase from '../CbtTryoutUtbkBase';

interface CbtTryoutPpuProps {
  onBack?: () => void;
}

export default function CbtTryoutPpu({ onBack }: CbtTryoutPpuProps) {
  return (
    <CbtTryoutUtbkBase
      title="Try Out CBT UTBK Paket 3: Pengetahuan & Pemahaman Umum (PPU) (20 Soal • 15 Menit)"
      subject="Pengetahuan & Pemahaman Umum (PPU)"
      subtestGroup="Tes Potensi Skolastik (TPS)"
      durationMinutes={15}
      passingGrade={650}
      questions={ppuTryoutData}
      onBack={onBack}
    />
  );
}
