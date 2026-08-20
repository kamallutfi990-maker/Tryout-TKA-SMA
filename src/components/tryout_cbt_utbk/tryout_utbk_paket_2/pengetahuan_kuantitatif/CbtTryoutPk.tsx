import React from 'react';
import { pkTryoutData } from './pkTryoutData';
import CbtTryoutUtbkBase from '../CbtTryoutUtbkBase';

interface CbtTryoutPkProps {
  onBack?: () => void;
}

export default function CbtTryoutPk({ onBack }: CbtTryoutPkProps) {
  return (
    <CbtTryoutUtbkBase
      title="Try Out CBT UTBK Paket 2: Pengetahuan Kuantitatif (15 Soal • 20 Menit)"
      subject="Pengetahuan Kuantitatif"
      subtestGroup="Tes Potensi Skolastik (TPS)"
      durationMinutes={20}
      passingGrade={650}
      questions={pkTryoutData}
      onBack={onBack}
    />
  );
}
