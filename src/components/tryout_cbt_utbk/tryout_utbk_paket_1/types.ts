/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface UtbkQuestionOption {
  id: string;
  text: string;
  correct?: boolean;
}

export interface UtbkQuestionStatement {
  id: string;
  text: string;
  correct?: boolean;
  trueLabel?: string;
  falseLabel?: string;
}

export interface UtbkQuestion {
  id: number;
  readingText?: string;
  text: string;
  type: 'multiple' | 'multiple-complex' | 'true-false-table';
  options?: UtbkQuestionOption[];
  statements?: UtbkQuestionStatement[];
  correctAnswer?: any;
  explanation: string;
  topic?: string;
  difficulty?: 'Mudah' | 'Sedang' | 'Sulit';
  trueLabel?: string;
  falseLabel?: string;
}
