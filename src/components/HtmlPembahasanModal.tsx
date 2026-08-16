import React from 'react';
import { X, CheckCircle2, BookOpen } from 'lucide-react';
import {
  PEMBAHASAN_TKA_MATEMATIKA_LANJUT_HTML,
  PEMBAHASAN_TKA_MATEMATIKA_WAJIB_HTML,
  PEMBAHASAN_TKA_BAHASA_INDONESIA_HTML,
  PEMBAHASAN_TKA_BAHASA_INGGRIS_HTML
} from '../data/pembahasanTkaHtml';

interface HtmlPembahasanModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subject?: string;
  htmlContent?: string;
}

export default function HtmlPembahasanModal({
  isOpen,
  onClose,
  title,
  subject,
  htmlContent
}: HtmlPembahasanModalProps) {
  if (!isOpen) return null;

  const resolveSubjectInfo = () => {
    const checkStr = `${subject || ''} ${title || ''}`.toLowerCase();

    if (checkStr.includes('inggris') || checkStr.includes('english')) {
      return {
        key: 'inggris',
        label: 'Bahasa Inggris',
        badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        iconColor: 'bg-emerald-100 text-emerald-700',
        html: PEMBAHASAN_TKA_BAHASA_INGGRIS_HTML,
        subLabel: 'Dokumen Pembahasan 20 Soal CBT TKA Bahasa Inggris'
      };
    }
    if (checkStr.includes('indonesia') || checkStr.includes('indo')) {
      return {
        key: 'indo',
        label: 'Bahasa Indonesia',
        badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
        iconColor: 'bg-rose-100 text-rose-700',
        html: PEMBAHASAN_TKA_BAHASA_INDONESIA_HTML,
        subLabel: 'Dokumen Pembahasan 20 Soal CBT TKA Bahasa Indonesia'
      };
    }
    if (checkStr.includes('lanjut') || checkStr.includes('tingkat lanjut')) {
      return {
        key: 'tka_lanjut',
        label: 'Matematika Tingkat Lanjut',
        badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
        iconColor: 'bg-purple-100 text-purple-700',
        html: PEMBAHASAN_TKA_MATEMATIKA_LANJUT_HTML,
        subLabel: 'Dokumen Pembahasan 20 Soal CBT TKA Matematika Tingkat Lanjut'
      };
    }
    return {
      key: 'mtk_wajib',
      label: 'Matematika Wajib',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      iconColor: 'bg-blue-100 text-blue-700',
      html: PEMBAHASAN_TKA_MATEMATIKA_WAJIB_HTML,
      subLabel: 'Dokumen Pembahasan 20 Soal CBT TKA / ANBK Matematika Wajib'
    };
  };

  const subjectInfo = resolveSubjectInfo();
  const currentHtml = htmlContent || subjectInfo.html;
  const displayTitle = title || `Pembahasan Try Out CBT - ${subjectInfo.label}`;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-2 sm:p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-5xl h-[92vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-5 py-4 border-b border-slate-200 bg-slate-50 gap-3">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-xl ${subjectInfo.iconColor}`}>
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-800">{displayTitle}</h3>
                <span className={`px-2.5 py-0.5 text-[11px] font-bold rounded-lg border ${subjectInfo.badgeColor}`}>
                  {subjectInfo.label}
                </span>
              </div>
              <p className="text-xs text-slate-500">{subjectInfo.subLabel}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors cursor-pointer"
              title="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Preview Frame */}
        <div className="flex-1 bg-slate-100 p-1 sm:p-2 overflow-hidden relative">
          <iframe
            srcDoc={currentHtml}
            title={`Pembahasan ${subjectInfo.label}`}
            className="w-full h-full rounded-lg border border-slate-200 bg-white shadow-inner"
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
          <div className="flex items-center gap-1.5 text-emerald-600 font-medium">
            <CheckCircle2 className="w-4 h-4" />
            <span>Terintegrasi dengan Try Out CBT TKA SMA: {subjectInfo.label}</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-900 transition-colors cursor-pointer"
          >
            Tutup Pembahasan
          </button>
        </div>
      </div>
    </div>
  );
}

