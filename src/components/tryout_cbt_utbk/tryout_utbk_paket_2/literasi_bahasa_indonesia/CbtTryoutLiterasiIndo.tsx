import React from 'react';
import { literasiIndoTryoutData } from './literasiIndoTryoutData';
import CbtTryoutUtbkBase from '../CbtTryoutUtbkBase';

interface CbtTryoutLiterasiIndoProps {
  onBack?: () => void;
}

export default function CbtTryoutLiterasiIndo({ onBack }: CbtTryoutLiterasiIndoProps) {
  return (
    <CbtTryoutUtbkBase
      title="Try Out CBT UTBK Paket 2: Literasi Bahasa Indonesia (30 Soal • 45 Menit)"
      subject="Literasi Bahasa Indonesia"
      subtestGroup="Tes Literasi & Penalaran"
      durationMinutes={45}
      passingGrade={650}
      questions={literasiIndoTryoutData}
      onBack={onBack}
    />
  );
}
