import React from 'react';
import { literasiInggrisTryoutData } from './literasiInggrisTryoutData';
import CbtTryoutUtbkBase from '../CbtTryoutUtbkBase';

interface CbtTryoutLiterasiInggrisProps {
  onBack?: () => void;
}

export default function CbtTryoutLiterasiInggris({ onBack }: CbtTryoutLiterasiInggrisProps) {
  return (
    <CbtTryoutUtbkBase
      title="Try Out CBT UTBK Paket 3: Literasi dalam Bahasa Inggris (20 Soal • 30 Menit)"
      subject="Literasi dalam Bahasa Inggris"
      subtestGroup="Literasi & Penalaran SNBT"
      durationMinutes={30}
      passingGrade={650}
      questions={literasiInggrisTryoutData}
      onBack={onBack}
    />
  );
}
