import React from 'react';
import { induktifTryoutData } from './induktifTryoutData';
import CbtTryoutUtbkBase from '../CbtTryoutUtbkBase';

interface CbtTryoutInduktifProps {
  onBack?: () => void;
}

export default function CbtTryoutInduktif({ onBack }: CbtTryoutInduktifProps) {
  return (
    <CbtTryoutUtbkBase
      title="Try Out CBT UTBK Paket 3: Penalaran Induktif (10 Soal • 10 Menit)"
      subject="Penalaran Induktif"
      subtestGroup="Tes Potensi Skolastik (TPS)"
      durationMinutes={10}
      passingGrade={650}
      questions={induktifTryoutData}
      onBack={onBack}
    />
  );
}
