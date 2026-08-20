import React from 'react';
import { penalaranMatematikaTryoutData } from './penalaranMatematikaTryoutData';
import CbtTryoutUtbkBase from '../CbtTryoutUtbkBase';

interface CbtTryoutPenalaranMatematikaProps {
  onBack?: () => void;
}

export default function CbtTryoutPenalaranMatematika({ onBack }: CbtTryoutPenalaranMatematikaProps) {
  return (
    <CbtTryoutUtbkBase
      title="Try Out CBT UTBK Paket 3: Penalaran Matematika (20 Soal • 30 Menit)"
      subject="Penalaran Matematika"
      subtestGroup="Literasi & Penalaran SNBT"
      durationMinutes={30}
      passingGrade={650}
      questions={penalaranMatematikaTryoutData}
      onBack={onBack}
    />
  );
}
