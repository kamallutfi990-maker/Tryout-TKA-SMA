import React from 'react';
import { pbmTryoutData } from './pbmTryoutData';
import CbtTryoutUtbkBase from '../CbtTryoutUtbkBase';

interface CbtTryoutPbmProps {
  onBack?: () => void;
}

export default function CbtTryoutPbm({ onBack }: CbtTryoutPbmProps) {
  return (
    <CbtTryoutUtbkBase
      title="Try Out CBT UTBK Paket 3: Pemahaman Bacaan & Menulis (PBM) (20 Soal • 25 Menit)"
      subject="Pemahaman Bacaan & Menulis (PBM)"
      subtestGroup="Tes Potensi Skolastik (TPS)"
      durationMinutes={25}
      passingGrade={650}
      questions={pbmTryoutData}
      onBack={onBack}
    />
  );
}
