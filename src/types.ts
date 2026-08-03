/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type UserRole = 'Admin' | 'Guru' | 'Siswa';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  role: UserRole;
  schoolName: string;
  targetPTN: string;
  targetProdi: string;
  xp: number;
  level: number;
  streak: number;
  isPremium: boolean;
  avatarUrl: string;
  createdAt: string;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  correctAnswerIndices?: number[]; // indices of correct answers for checkboxes type
  correctAnswer: string;
  explanation: string;
  subject: string;
  difficulty: 'Mudah' | 'Sedang' | 'Sulit';
  bab: string;
  subbab?: string;
  year: string;
  videoUrl?: string;
  imageUrl?: string;
  questionType?: 'multiple_choice' | 'checkboxes' | 'dropdown';
  explanationImage?: string;
  explanationVideo?: string;
  explanationYoutubeUrl?: string;
  geminiQuizUrl?: string;
}

export interface LearningVideo {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  description: string;
  subject: string;
  bab: string;
  guru: string;
  duration: string;
  views: number;
  createdAt: string;
}

export interface TryOut {
  id: string;
  name: string;
  duration: number; // in minutes
  passingGrade: number; // out of 1000
  questionCount: number;
  subject: string;
  category?: 'UTBK' | 'TKA';
  randomizeQuestions: boolean;
  randomizeOptions: boolean;
  startDate: string;
  endDate: string;
  solvedCount?: number;
  googleFormUrl?: string;
}

export interface ExamSession {
  id: string;
  examId: string;
  userId: string;
  answers: { [questionId: string]: number };
  flagged: string[];
  remainingTime: number;
  status: 'active' | 'submitted';
  startedAt: string;
  submittedAt?: string;
}

export interface ExamScore {
  id: string;
  examId: string;
  examName: string;
  userId: string;
  userName?: string;
  score: number;
  correctCount: number;
  wrongCount: number;
  totalQuestions: number;
  subject: string;
  passed: boolean;
  createdAt: string;
}

export interface ReportCard {
  userId: string;
  grades: {
    [semester: string]: {
      [subject: string]: number;
    };
  };
  average: number;
  updatedAt: string;
}

export interface University {
  id: string;
  name: string;
  acronym: string;
  logo: string;
  region?: string;
  category?: 'PTN Utama' | 'PTN Regional' | 'UIN State Islamic' | 'Politeknik Negeri' | 'Institut Seni';
}

export interface StudyProgram {
  id: string;
  universityId: string;
  universityName: string;
  name: string;
  passingGrade: number;
  capacity: number;
  group?: 'Saintek' | 'Soshum' | 'Vokasi';
}

export interface UniversityPrediction {
  id: string;
  userId: string;
  university: string;
  studyProgram: string;
  pathway: 'SNBP' | 'SNBT';
  probability: 'Sangat Tinggi' | 'Tinggi' | 'Sedang' | 'Rendah' | 'Sangat Rendah';
  probabilityScore: number;
  recommendation: string;
  createdAt: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  xp: number;
  icon: string;
  unlocked: boolean;
}

export interface Announcement {
  id: string;
  title: string;
  body: string;
  date: string;
}

export interface Payment {
  id: string;
  userId: string;
  amount: number;
  packageName: string;
  method: string;
  status: 'pending' | 'success' | 'failed';
  createdAt: string;
}

export interface LearningMaterial {
  id: string;
  title: string;
  subject: string;
  bab: string;
  description: string;
  pdfName?: string;
  pdfUrl?: string;
  videoName?: string;
  videoUrl?: string;
  youtubeUrl?: string;
  quizUrl?: string;
  gFormUrl?: string;
  htmlContent?: string;
  createdAt: string;
  guruName?: string;
}

export interface AiKnowledgeItem {
  id: string;
  title: string;
  subject: string;
  bab?: string;
  contentType: 'markdown' | 'pdf' | 'video' | 'youtube' | 'web';
  markdownContent?: string;
  pdfName?: string;
  pdfUrl?: string;
  videoName?: string;
  videoUrl?: string;
  youtubeUrl?: string;
  webUrl?: string;
  teacherNote?: string;
  createdAt: string;
  authorName: string;
  authorRole: 'Guru' | 'Admin';
}
