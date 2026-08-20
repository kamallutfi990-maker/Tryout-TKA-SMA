import React from 'react';
import { literasiInggrisTryoutData } from './literasiInggrisTryoutData';
import CbtTryoutUtbkBase from '../CbtTryoutUtbkBase';

interface CbtTryoutLiterasiInggrisProps {
  onBack?: () => void;
}

export default function CbtTryoutLiterasiInggris({ onBack }: CbtTryoutLiterasiInggrisProps) {
  return (
    <CbtTryoutUtbkBase
      title="Try Out CBT UTBK Paket 2: Literasi Bahasa Inggris (20 Soal • 30 Menit)"
      subject="Literasi Bahasa Inggris"
      subtestGroup="Tes Literasi & Penalaran"
      durationMinutes={30}
      passingGrade={650}
      questions={literasiInggrisTryoutData}
      onBack={onBack}
    />
  );
}
