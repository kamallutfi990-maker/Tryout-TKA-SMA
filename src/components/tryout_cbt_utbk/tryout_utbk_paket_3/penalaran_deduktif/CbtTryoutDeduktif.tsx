import React from 'react';
import { deduktifTryoutData } from './deduktifTryoutData';
import CbtTryoutUtbkBase from '../CbtTryoutUtbkBase';

interface CbtTryoutDeduktifProps {
  onBack?: () => void;
}

export default function CbtTryoutDeduktif({ onBack }: CbtTryoutDeduktifProps) {
  return (
    <CbtTryoutUtbkBase
      title="Try Out CBT UTBK Paket 3: Penalaran Deduktif (10 Soal • 10 Menit)"
      subject="Penalaran Deduktif"
      subtestGroup="Tes Potensi Skolastik (TPS)"
      durationMinutes={10}
      passingGrade={650}
      questions={deduktifTryoutData}
      onBack={onBack}
    />
  );
}
