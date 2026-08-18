import React from 'react';
import { X, CheckCircle2, BookOpen } from 'lucide-react';
import {
  PEMBAHASAN_TKA_MATEMATIKA_LANJUT_HTML,
  PEMBAHASAN_TKA_MATEMATIKA_WAJIB_HTML,
  PEMBAHASAN_TKA_BAHASA_INDONESIA_HTML,
  PEMBAHASAN_TKA_BAHASA_INGGRIS_HTML,
  PEMBAHASAN_TKA_BAHASA_INDONESIA_LANJUT_HTML,
  PEMBAHASAN_TKA_BAHASA_INGGRIS_LANJUT_HTML,
  PEMBAHASAN_TKA_KIMIA_1_HTML,
  PEMBAHASAN_TKA_BIOLOGI_1_HTML,
  generateSubjectDiscussionHtml
} from '../data/pembahasanTkaHtml';
import { fisikaTryoutData } from './tryout_cbt_tka/fisika/fisikaTryoutData';
import { sosiologiTryoutData } from './tryout_cbt_tka/sosiologi/sosiologiTryoutData';
import { ekonomiTryoutData } from './tryout_cbt_tka/ekonomi/ekonomiTryoutData';
import { ppknTryoutData } from './tryout_cbt_tka/ppkn/ppknTryoutData';
import { sejarahTryoutData } from './tryout_cbt_tka/sejarah/sejarahTryoutData';
import { geografiTryoutData } from './tryout_cbt_tka/geografi/geografiTryoutData';
import { inggrisLanjutTryoutData } from './tryout_cbt_tka/bahasa_inggris_tingkat_lanjut/inggrisLanjutTryoutData';

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

    if (checkStr.includes('biologi') || checkStr.includes('biology')) {
      return {
        key: 'biologi',
        label: 'Biologi',
        badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        iconColor: 'bg-emerald-100 text-emerald-700',
        html: PEMBAHASAN_TKA_BIOLOGI_1_HTML,
        subLabel: 'Dokumen Pembahasan 20 Soal CBT TKA Biologi 1'
      };
    }

    if (checkStr.includes('kimia') || checkStr.includes('chemistry')) {
      return {
        key: 'kimia',
        label: 'Kimia',
        badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
        iconColor: 'bg-amber-100 text-amber-700',
        html: PEMBAHASAN_TKA_KIMIA_1_HTML,
        subLabel: 'Dokumen Pembahasan 20 Soal CBT TKA Kimia 1'
      };
    }

    if (checkStr.includes('fisika') || checkStr.includes('physics')) {
      return {
        key: 'fisika',
        label: 'Fisika',
        badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
        iconColor: 'bg-indigo-100 text-indigo-700',
        html: generateSubjectDiscussionHtml('Fisika TKA SMA', 'Fisika', fisikaTryoutData),
        subLabel: 'Dokumen Pembahasan 20 Soal CBT TKA Fisika'
      };
    }

    if (checkStr.includes('sosiologi') || checkStr.includes('sociology')) {
      return {
        key: 'sosiologi',
        label: 'Sosiologi',
        badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
        iconColor: 'bg-rose-100 text-rose-700',
        html: generateSubjectDiscussionHtml('Sosiologi TKA SMA', 'Sosiologi', sosiologiTryoutData),
        subLabel: 'Dokumen Pembahasan 20 Soal CBT TKA Sosiologi'
      };
    }

    if (checkStr.includes('ekonomi') || checkStr.includes('economy') || checkStr.includes('economics')) {
      return {
        key: 'ekonomi',
        label: 'Ekonomi',
        badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
        iconColor: 'bg-teal-100 text-teal-700',
        html: generateSubjectDiscussionHtml('Ekonomi TKA SMA', 'Ekonomi', ekonomiTryoutData),
        subLabel: 'Dokumen Pembahasan 20 Soal CBT TKA Ekonomi'
      };
    }

    if (checkStr.includes('ppkn') || checkStr.includes('pkn') || checkStr.includes('pancasila') || checkStr.includes('kewarganegaraan')) {
      return {
        key: 'ppkn',
        label: 'PPKn (PKn)',
        badgeColor: 'bg-red-50 text-red-700 border-red-200',
        iconColor: 'bg-red-100 text-red-700',
        html: generateSubjectDiscussionHtml('PPKn / PKn TKA SMA', 'PPKn', ppknTryoutData),
        subLabel: 'Dokumen Pembahasan 20 Soal CBT TKA PPKn'
      };
    }

    if (checkStr.includes('sejarah') || checkStr.includes('history')) {
      return {
        key: 'sejarah',
        label: 'Sejarah',
        badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
        iconColor: 'bg-amber-100 text-amber-700',
        html: generateSubjectDiscussionHtml('Sejarah TKA SMA', 'Sejarah', sejarahTryoutData),
        subLabel: 'Dokumen Pembahasan 20 Soal CBT TKA Sejarah'
      };
    }

    if (checkStr.includes('geografi') || checkStr.includes('geography')) {
      return {
        key: 'geografi',
        label: 'Geografi',
        badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        iconColor: 'bg-emerald-100 text-emerald-700',
        html: generateSubjectDiscussionHtml('Geografi TKA SMA', 'Geografi', geografiTryoutData),
        subLabel: 'Dokumen Pembahasan 20 Soal CBT TKA Geografi'
      };
    }

    if ((checkStr.includes('inggris') || checkStr.includes('english')) && (checkStr.includes('lanjut') || checkStr.includes('tingkat lanjut'))) {
      return {
        key: 'inggris_lanjut',
        label: 'Bahasa Inggris Tingkat Lanjut',
        badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
        iconColor: 'bg-sky-100 text-sky-700',
        html: generateSubjectDiscussionHtml('Bahasa Inggris Tingkat Lanjut TKA SMA (10 Soal)', 'Bahasa Inggris Tingkat Lanjut', inggrisLanjutTryoutData),
        subLabel: 'Dokumen Pembahasan 10 Soal CBT TKA Bahasa Inggris Tingkat Lanjut'
      };
    }
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
    if ((checkStr.includes('indonesia') || checkStr.includes('indo')) && (checkStr.includes('lanjut') || checkStr.includes('tingkat lanjut'))) {
      return {
        key: 'indo_lanjut',
        label: 'Bahasa Indonesia Tingkat Lanjut',
        badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
        iconColor: 'bg-rose-100 text-rose-700',
        html: PEMBAHASAN_TKA_BAHASA_INDONESIA_LANJUT_HTML,
        subLabel: 'Dokumen Pembahasan 20 Soal CBT TKA Bahasa Indonesia Tingkat Lanjut'
      };
    }
    if (checkStr.includes('indonesia') || checkStr.includes('indo')) {
      return {
        key: 'indo',
        label: 'Bahasa Indonesia',
        badgeColor: 'bg-red-50 text-red-700 border-red-200',
        iconColor: 'bg-red-100 text-red-700',
        html: PEMBAHASAN_TKA_BAHASA_INDONESIA_HTML,
        subLabel: 'Dokumen Pembahasan 20 Soal CBT TKA Bahasa Indonesia'
      };
    }
    if (checkStr.includes('matematika') && (checkStr.includes('lanjut') || checkStr.includes('tingkat lanjut'))) {
      return {
        key: 'tka_lanjut',
        label: 'Matematika Tingkat Lanjut',
        badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
        iconColor: 'bg-purple-100 text-purple-700',
        html: PEMBAHASAN_TKA_MATEMATIKA_LANJUT_HTML,
        subLabel: 'Dokumen Pembahasan 20 Soal CBT TKA Matematika Tingkat Lanjut'
      };
    }
    if (checkStr.includes('matematika') || checkStr.includes('math') || checkStr.includes('wajib')) {
      return {
        key: 'mtk_wajib',
        label: 'Matematika Wajib',
        badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
        iconColor: 'bg-blue-100 text-blue-700',
        html: PEMBAHASAN_TKA_MATEMATIKA_WAJIB_HTML,
        subLabel: 'Dokumen Pembahasan 20 Soal CBT TKA / ANBK Matematika Wajib'
      };
    }

    return {
      key: 'general',
      label: subject || 'Try Out CBT',
      badgeColor: 'bg-slate-50 text-slate-700 border-slate-200',
      iconColor: 'bg-blue-100 text-blue-700',
      html: htmlContent || generateSubjectDiscussionHtml(title || 'Try Out CBT', subject || 'TKA SMA', []),
      subLabel: 'Dokumen Pembahasan & Kunci Jawaban Resmi'
    };
  };

  const subjectInfo = resolveSubjectInfo();
  const currentHtml = htmlContent || subjectInfo?.html || '';
  const displayTitle = title || `Pembahasan Try Out CBT - ${subjectInfo?.label || ''}`;

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

