export interface InggrisLanjutQuestion {
  id: number;
  readingText?: string;
  text: string;
  type: 'multiple' | 'multiple-complex' | 'true-false-table';
  options?: { id: string; text: string; correct?: boolean }[];
  statements?: { id: string; text: string; correct?: boolean }[];
  correctAnswer?: any;
}

// Paket soal kosong (siap diisi paket soal baru)
export const inggrisLanjutTryoutData: InggrisLanjutQuestion[] = [];
