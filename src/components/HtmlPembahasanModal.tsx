import React, { useState } from 'react';
import { X, CheckCircle2, BookOpen } from 'lucide-react';
import { PEMBAHASAN_TURUNAN_HTML, PEMBAHASAN_TKA_MATEMATIKA_LANJUT_HTML, PEMBAHASAN_TKA_MATEMATIKA_WAJIB_HTML } from '../data/pembahasanTkaHtml';

interface HtmlPembahasanModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  htmlContent?: string;
}

export default function HtmlPembahasanModal({
  isOpen,
  onClose,
  title = "Pembahasan Try Out",
  htmlContent
}: HtmlPembahasanModalProps) {
  const [activeDoc, setActiveDoc] = useState<'mtk_wajib' | 'tka_lanjut' | 'turunan'>('mtk_wajib');

  if (!isOpen) return null;

  const getDocHtml = () => {
    if (htmlContent) return htmlContent;
    if (activeDoc === 'mtk_wajib') return PEMBAHASAN_TKA_MATEMATIKA_WAJIB_HTML;
    if (activeDoc === 'tka_lanjut') return PEMBAHASAN_TKA_MATEMATIKA_LANJUT_HTML;
    return PEMBAHASAN_TURUNAN_HTML;
  };

  const currentHtml = getDocHtml();

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-2 sm:p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-5xl h-[92vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-5 py-4 border-b border-slate-200 bg-slate-50 gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
              <BookOpen className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-800">{title}</h3>
              <p className="text-xs text-slate-500">Dokumen Pembahasan Lengkap & Formula Matematika</p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            {!htmlContent && (
              <div className="flex bg-slate-200/80 p-1 rounded-xl gap-1 overflow-x-auto">
                <button
                  onClick={() => setActiveDoc('mtk_wajib')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
                    activeDoc === 'mtk_wajib'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Matematika Wajib (20 Soal)
                </button>
                <button
                  onClick={() => setActiveDoc('tka_lanjut')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
                    activeDoc === 'tka_lanjut'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Matematika Lanjut (20 Soal)
                </button>
                <button
                  onClick={() => setActiveDoc('turunan')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
                    activeDoc === 'turunan'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Turunan Fungsi (20 Soal)
                </button>
              </div>
            )}

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors"
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
            title="Pembahasan HTML TKA Matematika"
            className="w-full h-full rounded-lg border border-slate-200 bg-white shadow-inner"
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
          <div className="flex items-center gap-1.5 text-emerald-600 font-medium">
            <CheckCircle2 className="w-4 h-4" />
            <span>Terintegrasi dengan Try Out CBT TKA Matematika (Soal + Solusi MathJax)</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-900 transition-colors"
          >
            Tutup Pembahasan
          </button>
        </div>
      </div>
    </div>
  );
}
