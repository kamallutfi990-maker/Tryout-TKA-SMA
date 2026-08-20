import React from 'react';
import { penalaranKuantitatifTryoutData } from './penalaranKuantitatifTryoutData';
import CbtTryoutUtbkBase from '../CbtTryoutUtbkBase';

interface CbtTryoutPenalaranKuantitatifProps {
  onBack?: () => void;
}

export default function CbtTryoutPenalaranKuantitatif({ onBack }: CbtTryoutPenalaranKuantitatifProps) {
  return (
    <CbtTryoutUtbkBase
      title="Try Out CBT UTBK Paket 3: Penalaran Kuantitatif (10 Soal • 10 Menit)"
      subject="Penalaran Kuantitatif"
      subtestGroup="Tes Potensi Skolastik (TPS)"
      durationMinutes={10}
      passingGrade={650}
      questions={penalaranKuantitatifTryoutData}
      onBack={onBack}
    />
  );
}
