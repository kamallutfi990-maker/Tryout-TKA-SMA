import React from 'react';
import { literasiIndoTryoutData } from './literasiIndoTryoutData';
import CbtTryoutUtbkBase from '../CbtTryoutUtbkBase';

interface CbtTryoutLiterasiIndoProps {
  onBack?: () => void;
}

export default function CbtTryoutLiterasiIndo({ onBack }: CbtTryoutLiterasiIndoProps) {
  return (
    <CbtTryoutUtbkBase
      title="Try Out CBT UTBK Paket 3: Literasi dalam Bahasa Indonesia (30 Soal • 45 Menit)"
      subject="Literasi dalam Bahasa Indonesia"
      subtestGroup="Literasi & Penalaran SNBT"
      durationMinutes={45}
      passingGrade={650}
      questions={literasiIndoTryoutData}
      onBack={onBack}
    />
  );
}
